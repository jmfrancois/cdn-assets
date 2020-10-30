(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react')) :
  typeof define === 'function' && define.amd ? define(['exports', 'react'], factory) :
  (global = global || self, factory(global.ReactHookForm = {}, global.React));
}(this, (function (exports, React) { 'use strict';

  var isNullOrUndefined = (value) => value == null;

  var isArray = (value) => Array.isArray(value);

  const isObjectType = (value) => typeof value === 'object';
  var isObject = (value) => !isNullOrUndefined(value) && !isArray(value) && isObjectType(value);

  var isHTMLElement = (value) => isObject(value) && value.nodeType === Node.ELEMENT_NODE;

  const VALIDATION_MODE = {
      onBlur: 'onBlur',
      onChange: 'onChange',
      onSubmit: 'onSubmit',
  };
  const VALUE = 'value';
  const UNDEFINED = 'undefined';
  const EVENTS = {
      BLUR: 'blur',
      CHANGE: 'change',
      INPUT: 'input',
  };
  const SELECT = 'select';
  const INPUT_VALIDATION_RULES = {
      max: 'max',
      min: 'min',
      maxLength: 'maxLength',
      minLength: 'minLength',
      pattern: 'pattern',
      required: 'required',
      validate: 'validate',
  };
  const REGEX_IS_DEEP_PROP = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/;
  const REGEX_IS_PLAIN_PROP = /^\w*$/;
  const REGEX_PROP_NAME = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
  const REGEX_ESCAPE_CHAR = /\\(\\)?/g;
  const REGEX_ARRAY_FIELD_INDEX = /[\d+]/g;

  function attachEventListeners({ field: { ref }, handleChange, isRadioOrCheckbox, }) {
      if (isHTMLElement(ref) && handleChange) {
          ref.addEventListener(isRadioOrCheckbox ? EVENTS.CHANGE : EVENTS.INPUT, handleChange);
          ref.addEventListener(EVENTS.BLUR, handleChange);
      }
  }

  var isKey = (value) => !isArray(value) &&
      (REGEX_IS_PLAIN_PROP.test(value) || !REGEX_IS_DEEP_PROP.test(value));

  var stringToPath = (string) => {
      const result = [];
      string.replace(REGEX_PROP_NAME, (match, number, quote, string) => {
          result.push(quote ? string.replace(REGEX_ESCAPE_CHAR, '$1') : number || match);
      });
      return result;
  };

  function set(object, path, value) {
      let index = -1;
      const tempPath = isKey(path) ? [path] : stringToPath(path);
      const length = tempPath.length;
      const lastIndex = length - 1;
      while (++index < length) {
          const key = tempPath[index];
          let newValue = value;
          if (index !== lastIndex) {
              const objValue = object[key];
              newValue =
                  isObject(objValue) || isArray(objValue)
                      ? objValue
                      : !isNaN(+tempPath[index + 1])
                          ? []
                          : {};
          }
          object[key] = newValue;
          object = object[key];
      }
      return object;
  }

  var transformToNestObject = (data) => Object.entries(data).reduce((previous, [key, value]) => {
      if (!isKey(key)) {
          set(previous, key, value);
          return previous;
      }
      return Object.assign(Object.assign({}, previous), { [key]: value });
  }, {});

  var isUndefined = (val) => val === undefined;

  var get = (obj, path, defaultValue) => {
      const result = path
          .split(/[,[\].]+?/)
          .filter(Boolean)
          .reduce((result, key) => (isNullOrUndefined(result) ? result : result[key]), obj);
      return isUndefined(result) || result === obj
          ? isUndefined(obj[path])
              ? defaultValue
              : obj[path]
          : result;
  };

  var focusOnErrorField = (fields, fieldErrors) => {
      for (const key in fields) {
          if (get(fieldErrors, key)) {
              const field = fields[key];
              if (field) {
                  if (field.ref.focus) {
                      field.ref.focus();
                      break;
                  }
                  else if (field.options) {
                      field.options[0].ref.focus();
                      break;
                  }
              }
          }
      }
  };

  var removeAllEventListeners = (ref, validateWithStateUpdate) => {
      if (isHTMLElement(ref) && ref.removeEventListener) {
          ref.removeEventListener(EVENTS.INPUT, validateWithStateUpdate);
          ref.removeEventListener(EVENTS.CHANGE, validateWithStateUpdate);
          ref.removeEventListener(EVENTS.BLUR, validateWithStateUpdate);
      }
  };

  var isRadioInput = (element) => element.type === 'radio';

  var isCheckBoxInput = (element) => element.type === 'checkbox';

  function isDetached(element) {
      if (!element) {
          return true;
      }
      if (!(element instanceof HTMLElement) ||
          element.nodeType === Node.DOCUMENT_NODE) {
          return false;
      }
      return isDetached(element.parentNode);
  }

  var isEmptyObject = (value) => isObject(value) && !Object.keys(value).length;

  function castPath(value) {
      return isArray(value) ? value : stringToPath(value);
  }
  function baseGet(object, path) {
      const updatePath = isKey(path) ? [path] : castPath(path);
      const length = path.length;
      let index = 0;
      while (index < length) {
          object = isUndefined(object) ? index++ : object[updatePath[index++]];
      }
      return index == length ? object : undefined;
  }
  function baseSlice(array, start, end) {
      let index = -1;
      let length = array.length;
      if (start < 0) {
          start = -start > length ? 0 : length + start;
      }
      end = end > length ? length : end;
      if (end < 0) {
          end += length;
      }
      length = start > end ? 0 : end - start;
      const result = Array(length);
      while (++index < length) {
          result[index] = array[index + start];
      }
      return result;
  }
  function parent(object, path) {
      return path.length == 1 ? object : baseGet(object, baseSlice(path, 0, -1));
  }
  function baseUnset(object, path) {
      const updatePath = isKey(path) ? [path] : castPath(path);
      const childObject = parent(object, updatePath);
      const key = updatePath[updatePath.length - 1];
      const result = !(childObject != null) || delete childObject[key];
      let previousObjRef = undefined;
      for (let k = 0; k < updatePath.slice(0, -1).length; k++) {
          let index = -1;
          let objectRef = undefined;
          const currentPaths = updatePath.slice(0, -(k + 1));
          const currentPathsLength = currentPaths.length - 1;
          if (k > 0) {
              previousObjRef = object;
          }
          while (++index < currentPaths.length) {
              const item = currentPaths[index];
              objectRef = objectRef ? objectRef[item] : object[item];
              if (currentPathsLength === index) {
                  if ((isObject(objectRef) && isEmptyObject(objectRef)) ||
                      (isArray(objectRef) &&
                          !objectRef.filter((data) => isObject(data) && !isEmptyObject(data))
                              .length)) {
                      previousObjRef ? delete previousObjRef[item] : delete object[item];
                  }
              }
              previousObjRef = objectRef;
          }
      }
      return result;
  }
  function unset(object, paths) {
      paths.forEach((path) => {
          baseUnset(object, path);
      });
      return object;
  }

  const isSameRef = (fieldValue, ref) => fieldValue && fieldValue.ref === ref;
  function findRemovedFieldAndRemoveListener(fields, handleChange, field, forceDelete) {
      const { ref, ref: { name, type }, mutationWatcher, } = field;
      const fieldValue = fields[name];
      if (!type) {
          delete fields[name];
          return;
      }
      if ((isRadioInput(ref) || isCheckBoxInput(ref)) && fieldValue) {
          const { options } = fieldValue;
          if (isArray(options) && options.length) {
              options.filter(Boolean).forEach((option, index) => {
                  const { ref, mutationWatcher } = option;
                  if ((ref && isDetached(ref) && isSameRef(option, ref)) || forceDelete) {
                      removeAllEventListeners(ref, handleChange);
                      if (mutationWatcher) {
                          mutationWatcher.disconnect();
                      }
                      unset(options, [`[${index}]`]);
                  }
              });
              if (options && !options.filter(Boolean).length) {
                  delete fields[name];
              }
          }
          else {
              delete fields[name];
          }
      }
      else if ((isDetached(ref) && isSameRef(fieldValue, ref)) || forceDelete) {
          removeAllEventListeners(ref, handleChange);
          if (mutationWatcher) {
              mutationWatcher.disconnect();
          }
          delete fields[name];
      }
  }

  const defaultReturn = {
      isValid: false,
      value: '',
  };
  var getRadioValue = (options) => isArray(options)
      ? options.reduce((previous, option) => option && option.ref.checked
          ? {
              isValid: true,
              value: option.ref.value,
          }
          : previous, defaultReturn)
      : defaultReturn;

  var getMultipleSelectValue = (options) => [...options]
      .filter(({ selected }) => selected)
      .map(({ value }) => value);

  var isFileInput = (element) => element.type === 'file';

  var isMultipleSelect = (element) => element.type === `${SELECT}-multiple`;

  var isEmptyString = (value) => value === '';

  const defaultResult = {
      value: false,
      isValid: false,
  };
  const validResult = { value: true, isValid: true };
  var getCheckboxValue = (options) => {
      if (isArray(options)) {
          if (options.length > 1) {
              const values = options
                  .filter((option) => option && option.ref.checked)
                  .map(({ ref: { value } }) => value);
              return { value: values, isValid: !!values.length };
          }
          const { checked, value, attributes } = options[0].ref;
          return checked
              ? attributes && !isUndefined(attributes.value)
                  ? isUndefined(value) || isEmptyString(value)
                      ? validResult
                      : { value: value, isValid: true }
                  : validResult
              : defaultResult;
      }
      return defaultResult;
  };

  function getFieldValue(fields, ref) {
      const { name, value } = ref;
      const field = fields[name];
      if (isFileInput(ref)) {
          return ref.files;
      }
      if (isRadioInput(ref)) {
          return field ? getRadioValue(field.options).value : '';
      }
      if (isMultipleSelect(ref)) {
          return getMultipleSelectValue(ref.options);
      }
      if (isCheckBoxInput(ref)) {
          return field ? getCheckboxValue(field.options).value : false;
      }
      return value;
  }

  var isString = (value) => typeof value === 'string';

  var getFieldsValues = (fields, search) => {
      const output = {};
      for (const name in fields) {
          if (isUndefined(search) ||
              (isString(search)
                  ? name.startsWith(search)
                  : isArray(search)
                      ? search.find((data) => name.startsWith(data))
                      : search && search.nest)) {
              output[name] = getFieldValue(fields, fields[name].ref);
          }
      }
      return output;
  };

  var compareObject = (objectA = {}, objectB = {}) => {
      const objectAKeys = Object.keys(objectA);
      const objectBKeys = Object.keys(objectB);
      return (objectAKeys.length === objectBKeys.length &&
          objectAKeys.every((key) => objectB[key] && objectB[key] === objectA[key]));
  };

  var isSameError = (error, { type, types, message }) => isObject(error) &&
      error.type === type &&
      error.message === message &&
      compareObject(error.types, types);

  function shouldRenderBasedOnError({ errors, name, error, validFields, fieldsWithValidation, }) {
      const isFieldValid = isEmptyObject(error);
      const isFormValid = isEmptyObject(errors);
      const currentFieldError = get(error, name);
      const existFieldError = get(errors, name);
      if ((isFieldValid && validFields.has(name)) ||
          (existFieldError && existFieldError.isManual)) {
          return false;
      }
      if (isFormValid !== isFieldValid ||
          (!isFormValid && !existFieldError) ||
          (isFieldValid && fieldsWithValidation.has(name) && !validFields.has(name))) {
          return true;
      }
      return currentFieldError && !isSameError(existFieldError, currentFieldError);
  }

  var isRegex = (value) => value instanceof RegExp;

  var getValueAndMessage = (validationData) => {
      const isValueMessage = (value) => isObject(value) && !isRegex(value);
      return isValueMessage(validationData)
          ? validationData
          : {
              value: validationData,
              message: '',
          };
  };

  var isFunction = (value) => typeof value === 'function';

  var isBoolean = (value) => typeof value === 'boolean';

  var isMessage = (value) => isString(value) || (isObject(value) && React.isValidElement(value));

  function getValidateError(result, ref, type = 'validate') {
      if (isMessage(result) || (isBoolean(result) && !result)) {
          return {
              type,
              message: isMessage(result) ? result : '',
              ref,
          };
      }
  }

  var appendErrors = (name, validateAllFieldCriteria, errors, type, message) => {
      if (validateAllFieldCriteria) {
          const error = errors[name];
          return Object.assign(Object.assign({}, error), { types: Object.assign(Object.assign({}, (error && error.types ? error.types : {})), { [type]: message || true }) });
      }
      return {};
  };

  var validateField = async (fieldsRef, validateAllFieldCriteria, { ref, ref: { type, value, name }, options, required, maxLength, minLength, min, max, pattern, validate, }) => {
      var _a;
      const fields = fieldsRef.current;
      const error = {};
      const isRadio = isRadioInput(ref);
      const isCheckBox = isCheckBoxInput(ref);
      const isRadioOrCheckbox = isRadio || isCheckBox;
      const isEmpty = isEmptyString(value);
      const appendErrorsCurry = appendErrors.bind(null, name, validateAllFieldCriteria, error);
      const getMinMaxMessage = (exceedMax, maxLengthMessage, minLengthMessage, maxType = INPUT_VALIDATION_RULES.maxLength, minType = INPUT_VALIDATION_RULES.minLength) => {
          const message = exceedMax ? maxLengthMessage : minLengthMessage;
          error[name] = Object.assign({ type: exceedMax ? maxType : minType, message,
              ref }, (exceedMax
              ? appendErrorsCurry(maxType, message)
              : appendErrorsCurry(minType, message)));
          if (!validateAllFieldCriteria) {
              return error;
          }
      };
      if (required &&
          ((!isRadio && !isCheckBox && (isEmpty || isNullOrUndefined(value))) ||
              (isBoolean(value) && !value) ||
              (isCheckBox && !getCheckboxValue(options).isValid) ||
              (isRadio && !getRadioValue(options).isValid))) {
          const { value: requiredValue, message: requiredMessage } = isMessage(required)
              ? { value: !!required, message: required }
              : getValueAndMessage(required);
          if (requiredValue) {
              error[name] = Object.assign({ type: INPUT_VALIDATION_RULES.required, message: requiredMessage, ref: isRadioOrCheckbox ? (_a = fields[name].options) === null || _a === void 0 ? void 0 : _a[0].ref : ref }, appendErrorsCurry(INPUT_VALIDATION_RULES.required, requiredMessage));
              if (!validateAllFieldCriteria) {
                  return error;
              }
          }
      }
      if (!isNullOrUndefined(min) || !isNullOrUndefined(max)) {
          let exceedMax;
          let exceedMin;
          const { value: maxValue, message: maxMessage } = getValueAndMessage(max);
          const { value: minValue, message: minMessage } = getValueAndMessage(min);
          if (type === 'number' || (!type && !isNaN(value))) {
              const valueNumber = ref.valueAsNumber || parseFloat(value);
              if (!isNullOrUndefined(maxValue)) {
                  exceedMax = valueNumber > maxValue;
              }
              if (!isNullOrUndefined(minValue)) {
                  exceedMin = valueNumber < minValue;
              }
          }
          else {
              const valueDate = ref.valueAsDate || new Date(value);
              if (isString(maxValue)) {
                  exceedMax = valueDate > new Date(maxValue);
              }
              if (isString(minValue)) {
                  exceedMin = valueDate < new Date(minValue);
              }
          }
          if (exceedMax || exceedMin) {
              getMinMaxMessage(!!exceedMax, maxMessage, minMessage, INPUT_VALIDATION_RULES.max, INPUT_VALIDATION_RULES.min);
              if (!validateAllFieldCriteria) {
                  return error;
              }
          }
      }
      if (isString(value) && !isEmpty && (maxLength || minLength)) {
          const { value: maxLengthValue, message: maxLengthMessage, } = getValueAndMessage(maxLength);
          const { value: minLengthValue, message: minLengthMessage, } = getValueAndMessage(minLength);
          const inputLength = value.toString().length;
          const exceedMax = !isNullOrUndefined(maxLengthValue) && inputLength > maxLengthValue;
          const exceedMin = !isNullOrUndefined(minLengthValue) && inputLength < minLengthValue;
          if (exceedMax || exceedMin) {
              getMinMaxMessage(!!exceedMax, maxLengthMessage, minLengthMessage);
              if (!validateAllFieldCriteria) {
                  return error;
              }
          }
      }
      if (pattern && !isEmpty) {
          const { value: patternValue, message: patternMessage } = getValueAndMessage(pattern);
          if (isRegex(patternValue) && !patternValue.test(value)) {
              error[name] = Object.assign({ type: INPUT_VALIDATION_RULES.pattern, message: patternMessage, ref }, appendErrorsCurry(INPUT_VALIDATION_RULES.pattern, patternMessage));
              if (!validateAllFieldCriteria) {
                  return error;
              }
          }
      }
      if (validate) {
          const fieldValue = getFieldValue(fields, ref);
          const validateRef = isRadioOrCheckbox && options ? options[0].ref : ref;
          if (isFunction(validate)) {
              const result = await validate(fieldValue);
              const validateError = getValidateError(result, validateRef);
              if (validateError) {
                  error[name] = Object.assign(Object.assign({}, validateError), appendErrorsCurry(INPUT_VALIDATION_RULES.validate, validateError.message));
                  if (!validateAllFieldCriteria) {
                      return error;
                  }
              }
          }
          else if (isObject(validate)) {
              let validationResult = {};
              for (const [key, validateFunction] of Object.entries(validate)) {
                  if (!isEmptyObject(validationResult) && !validateAllFieldCriteria) {
                      break;
                  }
                  const validateResult = await validateFunction(fieldValue);
                  const validateError = getValidateError(validateResult, validateRef, key);
                  if (validateError) {
                      validationResult = Object.assign(Object.assign({}, validateError), appendErrorsCurry(key, validateError.message));
                      if (validateAllFieldCriteria) {
                          error[name] = validationResult;
                      }
                  }
              }
              if (!isEmptyObject(validationResult)) {
                  error[name] = Object.assign({ ref: validateRef }, validationResult);
                  if (!validateAllFieldCriteria) {
                      return error;
                  }
              }
          }
      }
      return error;
  };

  const parseErrorSchema = (error, validateAllFieldCriteria) => isArray(error.inner)
      ? error.inner.reduce((previous, { path, message, type }) => (Object.assign(Object.assign({}, previous), (path
          ? previous[path] && validateAllFieldCriteria
              ? {
                  [path]: appendErrors(path, validateAllFieldCriteria, previous, type, message),
              }
              : {
                  [path]: previous[path] || Object.assign({ message,
                      type }, (validateAllFieldCriteria
                      ? {
                          types: { [type]: message || true },
                      }
                      : {})),
              }
          : {}))), {})
      : {
          [error.path]: { message: error.message, type: error.type },
      };
  async function validateWithSchema(validationSchema, validateAllFieldCriteria, data, validationResolver, context) {
      if (validationResolver) {
          return validationResolver(data, context);
      }
      try {
          return {
              values: await validationSchema.validate(data, {
                  abortEarly: false,
                  context,
              }),
              errors: {},
          };
      }
      catch (e) {
          return {
              values: {},
              errors: transformToNestObject(parseErrorSchema(e, validateAllFieldCriteria)),
          };
      }
  }

  var isPrimitive = (value) => isNullOrUndefined(value) || !isObjectType(value);

  const getPath = (path, values) => {
      const getInnerPath = (value, key, isObject) => {
          const pathWithIndex = isObject ? `${path}.${key}` : `${path}[${key}]`;
          return isPrimitive(value) ? pathWithIndex : getPath(pathWithIndex, value);
      };
      return isArray(values)
          ? values.map((value, key) => getInnerPath(value, key))
          : Object.entries(values).map(([key, value]) => getInnerPath(value, key, true));
  };
  var getPath$1 = (parentPath, value) => getPath(parentPath, value).flat(Infinity);

  var assignWatchFields = (fieldValues, fieldName, watchFields, inputValue, isSingleField) => {
      let value;
      watchFields.add(fieldName);
      if (isEmptyObject(fieldValues)) {
          value = undefined;
      }
      else if (!isUndefined(fieldValues[fieldName])) {
          value = fieldValues[fieldName];
          watchFields.add(fieldName);
      }
      else {
          value = get(transformToNestObject(fieldValues), fieldName);
          if (!isUndefined(value)) {
              getPath$1(fieldName, value).forEach((name) => watchFields.add(name));
          }
      }
      return isUndefined(value)
          ? isSingleField
              ? inputValue
              : get(inputValue, fieldName)
          : value;
  };

  var skipValidation = ({ isOnChange, hasError, isBlurEvent, isOnSubmit, isReValidateOnSubmit, isOnBlur, isReValidateOnBlur, isSubmitted, }) => (isOnChange && isBlurEvent) ||
      (isOnSubmit && isReValidateOnSubmit) ||
      (isOnSubmit && !isSubmitted) ||
      (isOnBlur && !isBlurEvent && !hasError) ||
      (isReValidateOnBlur && !isBlurEvent && hasError) ||
      (isReValidateOnSubmit && isSubmitted);

  var getFieldArrayParentName = (name) => name.substring(0, name.indexOf('['));

  var getFieldValueByName = (fields, name) => {
      const results = transformToNestObject(getFieldsValues(fields));
      return name ? get(results, name, results) : results;
  };

  function getIsFieldsDifferent(referenceArray, differenceArray) {
      let isMatch = false;
      if (!isArray(referenceArray) ||
          !isArray(differenceArray) ||
          referenceArray.length !== differenceArray.length) {
          return true;
      }
      for (let i = 0; i < referenceArray.length; i++) {
          if (isMatch) {
              break;
          }
          const dataA = referenceArray[i];
          const dataB = differenceArray[i];
          if (isUndefined(dataB) ||
              Object.keys(dataA).length !== Object.keys(dataB).length) {
              isMatch = true;
              break;
          }
          for (const key in dataA) {
              if (dataA[key] !== dataB[key]) {
                  isMatch = true;
                  break;
              }
          }
      }
      return isMatch;
  }

  const isMatchFieldArrayName = (name, searchName) => RegExp(`^${searchName}[\\d+]`.replace(/\[/g, '\\[').replace(/\]/g, '\\]')).test(name);
  var isNameInFieldArray = (names, name) => [...names].some((current) => isMatchFieldArrayName(name, current));

  var isSelectInput = (element) => element.type === `${SELECT}-one`;

  function onDomRemove(element, onDetachCallback) {
      const observer = new MutationObserver(() => {
          if (isDetached(element)) {
              observer.disconnect();
              onDetachCallback();
          }
      });
      observer.observe(window.document, {
          childList: true,
          subtree: true,
      });
      return observer;
  }

  var modeChecker = (mode) => ({
      isOnSubmit: !mode || mode === VALIDATION_MODE.onSubmit,
      isOnBlur: mode === VALIDATION_MODE.onBlur,
      isOnChange: mode === VALIDATION_MODE.onChange,
  });

  var isRadioOrCheckboxFunction = (ref) => isRadioInput(ref) || isCheckBoxInput(ref);

  function useForm({ mode = VALIDATION_MODE.onSubmit, reValidateMode = VALIDATION_MODE.onChange, validationSchema, validationResolver, validationContext, defaultValues = {}, submitFocusError = true, validateCriteriaMode, } = {}) {
      const fieldsRef = React.useRef({});
      const errorsRef = React.useRef({});
      const touchedFieldsRef = React.useRef({});
      const fieldArrayDefaultValues = React.useRef({});
      const watchFieldsRef = React.useRef(new Set());
      const dirtyFieldsRef = React.useRef(new Set());
      const fieldsWithValidationRef = React.useRef(new Set());
      const validFieldsRef = React.useRef(new Set());
      const isValidRef = React.useRef(true);
      const defaultValuesRef = React.useRef(defaultValues);
      const defaultValuesAtRenderRef = React.useRef({});
      const isUnMount = React.useRef(false);
      const isWatchAllRef = React.useRef(false);
      const isSubmittedRef = React.useRef(false);
      const isDirtyRef = React.useRef(false);
      const submitCountRef = React.useRef(0);
      const isSubmittingRef = React.useRef(false);
      const handleChangeRef = React.useRef();
      const resetFieldArrayFunctionRef = React.useRef({});
      const validationContextRef = React.useRef(validationContext);
      const fieldArrayNamesRef = React.useRef(new Set());
      const [, render] = React.useState();
      const { isOnBlur, isOnSubmit, isOnChange } = React.useRef(modeChecker(mode)).current;
      const validateAllFieldCriteria = validateCriteriaMode === 'all';
      const isWindowUndefined = typeof window === UNDEFINED;
      const shouldValidateSchemaOrResolver = !!(validationSchema || validationResolver);
      const isWeb = typeof document !== UNDEFINED &&
          !isWindowUndefined &&
          !isUndefined(window.HTMLElement);
      const isProxyEnabled = isWeb ? 'Proxy' in window : typeof Proxy !== UNDEFINED;
      const readFormStateRef = React.useRef({
          dirty: !isProxyEnabled,
          dirtyFields: !isProxyEnabled,
          isSubmitted: isOnSubmit,
          submitCount: !isProxyEnabled,
          touched: !isProxyEnabled,
          isSubmitting: !isProxyEnabled,
          isValid: !isProxyEnabled,
      });
      const { isOnBlur: isReValidateOnBlur, isOnSubmit: isReValidateOnSubmit, } = React.useRef(modeChecker(reValidateMode)).current;
      validationContextRef.current = validationContext;
      const reRender = React.useCallback(() => {
          if (!isUnMount.current) {
              render({});
          }
      }, []);
      const shouldRenderBaseOnError = React.useCallback((name, error, shouldRender = false) => {
          let shouldReRender = shouldRender ||
              shouldRenderBasedOnError({
                  errors: errorsRef.current,
                  error,
                  name,
                  validFields: validFieldsRef.current,
                  fieldsWithValidation: fieldsWithValidationRef.current,
              });
          if (isEmptyObject(error)) {
              if (fieldsWithValidationRef.current.has(name) ||
                  shouldValidateSchemaOrResolver) {
                  validFieldsRef.current.add(name);
                  shouldReRender = shouldReRender || get(errorsRef.current, name);
              }
              errorsRef.current = unset(errorsRef.current, [name]);
          }
          else {
              const previousError = get(errorsRef.current, name);
              validFieldsRef.current.delete(name);
              shouldReRender =
                  shouldReRender ||
                      (previousError
                          ? !isSameError(previousError, error[name])
                          : true);
              set(errorsRef.current, name, error[name]);
          }
          if (shouldReRender && !isNullOrUndefined(shouldRender)) {
              reRender();
              return true;
          }
      }, [reRender, shouldValidateSchemaOrResolver]);
      const setFieldValue = React.useCallback((field, rawValue) => {
          const { ref, options } = field;
          const value = isWeb && isHTMLElement(ref) && isNullOrUndefined(rawValue)
              ? ''
              : rawValue;
          if (isRadioInput(ref) && options) {
              options.forEach(({ ref: radioRef }) => (radioRef.checked = radioRef.value === value));
          }
          else if (isFileInput(ref)) {
              if (isString(value)) {
                  ref.value = value;
              }
              else {
                  ref.files = value;
              }
          }
          else if (isMultipleSelect(ref)) {
              [...ref.options].forEach((selectRef) => (selectRef.selected = value.includes(selectRef.value)));
          }
          else if (isCheckBoxInput(ref) && options) {
              options.length > 1
                  ? options.forEach(({ ref: checkboxRef }) => (checkboxRef.checked = value.includes(checkboxRef.value)))
                  : (options[0].ref.checked = !!value);
          }
          else {
              ref.value = value;
          }
      }, [isWeb]);
      const setDirty = React.useCallback((name) => {
          if (!fieldsRef.current[name] ||
              (!readFormStateRef.current.dirty && !readFormStateRef.current.dirtyFields)) {
              return false;
          }
          let isFieldDirty = defaultValuesAtRenderRef.current[name] !==
              getFieldValue(fieldsRef.current, fieldsRef.current[name].ref);
          const isFieldArray = isNameInFieldArray(fieldArrayNamesRef.current, name);
          const previousDirtyFieldsLength = dirtyFieldsRef.current.size;
          if (isFieldArray) {
              const fieldArrayName = getFieldArrayParentName(name);
              isFieldDirty = getIsFieldsDifferent(getFieldValueByName(fieldsRef.current, fieldArrayName), get(defaultValuesRef.current, fieldArrayName));
          }
          const isDirtyChanged = (isFieldArray ? isDirtyRef.current : dirtyFieldsRef.current.has(name)) !==
              isFieldDirty;
          if (isFieldDirty) {
              dirtyFieldsRef.current.add(name);
          }
          else {
              dirtyFieldsRef.current.delete(name);
          }
          isDirtyRef.current = isFieldArray
              ? isFieldDirty
              : !!dirtyFieldsRef.current.size;
          return readFormStateRef.current.dirty
              ? isDirtyChanged
              : previousDirtyFieldsLength !== dirtyFieldsRef.current.size;
      }, []);
      const setInternalValues = React.useCallback((name, value, parentFieldName) => {
          const isValueArray = isArray(value);
          for (const key in value) {
              const fieldName = `${parentFieldName || name}${isValueArray ? `[${key}]` : `.${key}`}`;
              const field = fieldsRef.current[fieldName];
              if (isObject(value[key])) {
                  setInternalValues(name, value[key], fieldName);
              }
              if (field) {
                  setFieldValue(field, value[key]);
                  setDirty(fieldName);
              }
          }
      }, [setFieldValue, setDirty]);
      const setInternalValue = React.useCallback((name, value) => {
          const field = fieldsRef.current[name];
          if (field) {
              setFieldValue(field, value);
              const output = setDirty(name);
              if (isBoolean(output)) {
                  return output;
              }
          }
          else if (!isPrimitive(value)) {
              setInternalValues(name, value);
          }
      }, [setDirty, setFieldValue, setInternalValues]);
      const executeValidation = React.useCallback(async (name, skipReRender) => {
          const field = fieldsRef.current[name];
          if (field) {
              const error = await validateField(fieldsRef, validateAllFieldCriteria, field);
              shouldRenderBaseOnError(name, error, skipReRender ? null : false);
              return isEmptyObject(error);
          }
          return false;
      }, [shouldRenderBaseOnError, validateAllFieldCriteria]);
      const executeSchemaOrResolverValidation = React.useCallback(async (payload) => {
          const { errors } = await validateWithSchema(validationSchema, validateAllFieldCriteria, getFieldValueByName(fieldsRef.current), validationResolver, validationContextRef.current);
          const previousFormIsValid = isValidRef.current;
          isValidRef.current = isEmptyObject(errors);
          if (isArray(payload)) {
              payload.forEach((name) => {
                  const error = get(errors, name);
                  if (error) {
                      set(errorsRef.current, name, error);
                  }
                  else {
                      unset(errorsRef.current, [name]);
                  }
              });
              reRender();
          }
          else {
              const error = get(errors, payload);
              shouldRenderBaseOnError(payload, (error ? { [payload]: error } : {}), previousFormIsValid !== isValidRef.current);
          }
          return isEmptyObject(errorsRef.current);
      }, [
          reRender,
          shouldRenderBaseOnError,
          validateAllFieldCriteria,
          validationResolver,
          validationSchema,
      ]);
      const triggerValidation = React.useCallback(async (payload) => {
          const fields = payload || Object.keys(fieldsRef.current);
          if (shouldValidateSchemaOrResolver) {
              return executeSchemaOrResolverValidation(fields);
          }
          if (isArray(fields)) {
              const result = await Promise.all(fields.map(async (data) => await executeValidation(data, true)));
              reRender();
              return result.every(Boolean);
          }
          return await executeValidation(fields);
      }, [
          executeSchemaOrResolverValidation,
          executeValidation,
          reRender,
          shouldValidateSchemaOrResolver,
      ]);
      const isFieldWatched = (name) => isWatchAllRef.current ||
          watchFieldsRef.current.has(name) ||
          watchFieldsRef.current.has((name.match(/\w+/) || [])[0]);
      function setValue(names, valueOrShouldValidate, shouldValidate) {
          let shouldRender = false;
          const isArrayValue = isArray(names);
          (isArrayValue
              ? names
              : [names]).forEach((name) => {
              const isStringFieldName = isString(name);
              shouldRender =
                  setInternalValue(isStringFieldName ? name : Object.keys(name)[0], isStringFieldName
                      ? valueOrShouldValidate
                      : Object.values(name)[0]) || isArrayValue
                      ? true
                      : isFieldWatched(name);
          });
          if (shouldRender || isArrayValue) {
              reRender();
          }
          if (shouldValidate || (isArrayValue && valueOrShouldValidate)) {
              triggerValidation(isArrayValue ? undefined : names);
          }
      }
      handleChangeRef.current = handleChangeRef.current
          ? handleChangeRef.current
          : async ({ type, target }) => {
              const name = target ? target.name : '';
              const fields = fieldsRef.current;
              const errors = errorsRef.current;
              const field = fields[name];
              const currentError = get(errors, name);
              let error;
              if (!field) {
                  return;
              }
              const isBlurEvent = type === EVENTS.BLUR;
              const shouldSkipValidation = skipValidation({
                  hasError: !!currentError,
                  isOnChange,
                  isBlurEvent,
                  isOnSubmit,
                  isReValidateOnSubmit,
                  isOnBlur,
                  isReValidateOnBlur,
                  isSubmitted: isSubmittedRef.current,
              });
              const shouldUpdateDirty = setDirty(name);
              let shouldRender = isFieldWatched(name) || shouldUpdateDirty;
              if (isBlurEvent &&
                  !get(touchedFieldsRef.current, name) &&
                  readFormStateRef.current.touched) {
                  set(touchedFieldsRef.current, name, true);
                  shouldRender = true;
              }
              if (shouldSkipValidation) {
                  return shouldRender && reRender();
              }
              if (shouldValidateSchemaOrResolver) {
                  const { errors } = await validateWithSchema(validationSchema, validateAllFieldCriteria, getFieldValueByName(fields), validationResolver, validationContextRef.current);
                  const previousFormIsValid = isValidRef.current;
                  isValidRef.current = isEmptyObject(errors);
                  error = (get(errors, name)
                      ? { [name]: get(errors, name) }
                      : {});
                  if (previousFormIsValid !== isValidRef.current) {
                      shouldRender = true;
                  }
              }
              else {
                  error = await validateField(fieldsRef, validateAllFieldCriteria, field);
              }
              if (!shouldRenderBaseOnError(name, error) && shouldRender) {
                  reRender();
              }
          };
      const validateSchemaOrResolver = React.useCallback((values = {}) => {
          const fieldValues = isEmptyObject(defaultValuesRef.current)
              ? getFieldsValues(fieldsRef.current)
              : defaultValuesRef.current;
          validateWithSchema(validationSchema, validateAllFieldCriteria, transformToNestObject(Object.assign(Object.assign({}, fieldValues), values)), validationResolver, validationContextRef.current).then(({ errors }) => {
              const previousFormIsValid = isValidRef.current;
              isValidRef.current = isEmptyObject(errors);
              if (previousFormIsValid !== isValidRef.current) {
                  reRender();
              }
          });
      }, 
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [reRender, validateAllFieldCriteria, validationResolver]);
      const removeFieldEventListener = React.useCallback((field, forceDelete) => {
          if (handleChangeRef.current && field) {
              findRemovedFieldAndRemoveListener(fieldsRef.current, handleChangeRef.current, field, forceDelete);
          }
      }, []);
      const removeFieldEventListenerAndRef = React.useCallback((field, forceDelete) => {
          if (!field ||
              (field &&
                  isNameInFieldArray(fieldArrayNamesRef.current, field.ref.name) &&
                  !forceDelete)) {
              return;
          }
          removeFieldEventListener(field, forceDelete);
          const { name } = field.ref;
          errorsRef.current = unset(errorsRef.current, [name]);
          touchedFieldsRef.current = unset(touchedFieldsRef.current, [name]);
          defaultValuesAtRenderRef.current = unset(defaultValuesAtRenderRef.current, [name]);
          [
              dirtyFieldsRef,
              fieldsWithValidationRef,
              validFieldsRef,
              watchFieldsRef,
          ].forEach((data) => data.current.delete(name));
          if (readFormStateRef.current.isValid ||
              readFormStateRef.current.touched) {
              reRender();
              if (shouldValidateSchemaOrResolver) {
                  validateSchemaOrResolver();
              }
          }
      }, [
          reRender,
          shouldValidateSchemaOrResolver,
          validateSchemaOrResolver,
          removeFieldEventListener,
      ]);
      function clearError(name) {
          if (name) {
              unset(errorsRef.current, isArray(name) ? name : [name]);
          }
          else {
              errorsRef.current = {};
          }
          reRender();
      }
      const setInternalError = ({ name, type, types, message, shouldRender, }) => {
          const field = fieldsRef.current[name];
          if (!isSameError(get(errorsRef.current, name), {
              type,
              message,
              types,
          })) {
              set(errorsRef.current, name, {
                  type,
                  types,
                  message,
                  ref: field ? field.ref : {},
                  isManual: true,
              });
              if (shouldRender) {
                  reRender();
              }
          }
      };
      function setError(name, type = '', message) {
          if (isString(name)) {
              setInternalError(Object.assign(Object.assign({ name }, (isObject(type)
                  ? {
                      types: type,
                      type: '',
                  }
                  : {
                      type,
                      message,
                  })), { shouldRender: true }));
          }
          else if (isArray(name)) {
              name.forEach((error) => setInternalError(Object.assign({}, error)));
              reRender();
          }
      }
      function watch(fieldNames, defaultValue) {
          const watchFields = watchFieldsRef.current;
          const isDefaultValueUndefined = isUndefined(defaultValue);
          const combinedDefaultValues = isDefaultValueUndefined
              ? defaultValuesRef.current
              : defaultValue;
          const fieldValues = getFieldsValues(fieldsRef.current, fieldNames);
          if (isString(fieldNames)) {
              return assignWatchFields(fieldValues, fieldNames, watchFields, isDefaultValueUndefined
                  ? get(combinedDefaultValues, fieldNames)
                  : defaultValue, true);
          }
          if (isArray(fieldNames)) {
              return fieldNames.reduce((previous, name) => (Object.assign(Object.assign({}, previous), { [name]: assignWatchFields(fieldValues, name, watchFields, combinedDefaultValues) })), {});
          }
          isWatchAllRef.current = true;
          const result = (!isEmptyObject(fieldValues) && fieldValues) || combinedDefaultValues;
          return fieldNames && fieldNames.nest
              ? transformToNestObject(result)
              : result;
      }
      function unregister(name) {
          if (fieldsRef.current) {
              (isArray(name) ? name : [name]).forEach((fieldName) => removeFieldEventListenerAndRef(fieldsRef.current[fieldName], true));
          }
      }
      function registerFieldsRef(ref, validateOptions = {}) {
          if (!ref.name) {
              // eslint-disable-next-line no-console
              return console.warn('Missing name @', ref);
          }
          const { name, type, value } = ref;
          const fieldRefAndValidationOptions = Object.assign({ ref }, validateOptions);
          const fields = fieldsRef.current;
          const isRadioOrCheckbox = isRadioOrCheckboxFunction(ref);
          let field = fields[name];
          let isEmptyDefaultValue = true;
          let isFieldArray;
          let defaultValue;
          if (isRadioOrCheckbox
              ? field &&
                  isArray(field.options) &&
                  field.options.filter(Boolean).find((option) => {
                      return value === option.ref.value && option.ref === ref;
                  })
              : field && ref === field.ref) {
              fields[name] = Object.assign(Object.assign({}, field), validateOptions);
              return;
          }
          if (type) {
              const mutationWatcher = onDomRemove(ref, () => removeFieldEventListenerAndRef(field));
              field = isRadioOrCheckbox
                  ? Object.assign({ options: [
                          ...((field && field.options) || []),
                          {
                              ref,
                              mutationWatcher,
                          },
                      ], ref: { type, name } }, validateOptions) : Object.assign(Object.assign({}, fieldRefAndValidationOptions), { mutationWatcher });
          }
          else {
              field = fieldRefAndValidationOptions;
          }
          fields[name] = field;
          if (!isEmptyObject(defaultValuesRef.current)) {
              defaultValue = get(defaultValuesRef.current, name);
              isEmptyDefaultValue = isUndefined(defaultValue);
              isFieldArray = isNameInFieldArray(fieldArrayNamesRef.current, name);
              if (!isEmptyDefaultValue && !isFieldArray) {
                  setFieldValue(field, defaultValue);
              }
          }
          if (shouldValidateSchemaOrResolver &&
              !isFieldArray &&
              readFormStateRef.current.isValid) {
              validateSchemaOrResolver();
          }
          else if (!isEmptyObject(validateOptions)) {
              fieldsWithValidationRef.current.add(name);
              if (!isOnSubmit && readFormStateRef.current.isValid) {
                  validateField(fieldsRef, validateAllFieldCriteria, field).then((error) => {
                      const previousFormIsValid = isValidRef.current;
                      isEmptyObject(error)
                          ? validFieldsRef.current.add(name)
                          : (isValidRef.current = false);
                      if (previousFormIsValid !== isValidRef.current) {
                          reRender();
                      }
                  });
              }
          }
          if (!defaultValuesAtRenderRef.current[name] &&
              !(isFieldArray && isEmptyDefaultValue)) {
              defaultValuesAtRenderRef.current[name] = isEmptyDefaultValue ? getFieldValue(fields, field.ref) : defaultValue;
          }
          if (type) {
              attachEventListeners({
                  field: isRadioOrCheckbox && field.options
                      ? field.options[field.options.length - 1]
                      : field,
                  isRadioOrCheckbox: isRadioOrCheckbox || isSelectInput(ref),
                  handleChange: handleChangeRef.current,
              });
          }
      }
      function register(refOrValidationOptions, validationOptions) {
          if (isWindowUndefined) {
              return;
          }
          if (isString(refOrValidationOptions)) {
              registerFieldsRef({ name: refOrValidationOptions }, validationOptions);
              return;
          }
          if (isObject(refOrValidationOptions) && 'name' in refOrValidationOptions) {
              registerFieldsRef(refOrValidationOptions, validationOptions);
              return;
          }
          return (ref) => ref && registerFieldsRef(ref, refOrValidationOptions);
      }
      const handleSubmit = React.useCallback((callback) => async (e) => {
          if (e) {
              e.preventDefault();
              e.persist();
          }
          let fieldErrors = {};
          const fields = fieldsRef.current;
          let fieldValues = getFieldsValues(fields);
          if (readFormStateRef.current.isSubmitting) {
              isSubmittingRef.current = true;
              reRender();
          }
          try {
              if (shouldValidateSchemaOrResolver) {
                  const { errors, values } = await validateWithSchema(validationSchema, validateAllFieldCriteria, transformToNestObject(fieldValues), validationResolver, validationContextRef.current);
                  errorsRef.current = errors;
                  fieldErrors = errors;
                  fieldValues = values;
              }
              else {
                  for (const field of Object.values(fields)) {
                      if (field) {
                          const { ref: { name }, } = field;
                          const fieldError = await validateField(fieldsRef, validateAllFieldCriteria, field);
                          if (fieldError[name]) {
                              set(fieldErrors, name, fieldError[name]);
                              validFieldsRef.current.delete(name);
                          }
                          else {
                              if (fieldsWithValidationRef.current.has(name)) {
                                  validFieldsRef.current.add(name);
                              }
                          }
                      }
                  }
              }
              if (isEmptyObject(fieldErrors)) {
                  errorsRef.current = {};
                  reRender();
                  await callback(transformToNestObject(fieldValues), e);
              }
              else {
                  errorsRef.current = fieldErrors;
                  if (submitFocusError && isWeb) {
                      focusOnErrorField(fields, fieldErrors);
                  }
              }
          }
          finally {
              isSubmittedRef.current = true;
              isSubmittingRef.current = false;
              submitCountRef.current = submitCountRef.current + 1;
              reRender();
          }
      }, [
          isWeb,
          reRender,
          shouldValidateSchemaOrResolver,
          submitFocusError,
          validateAllFieldCriteria,
          validationResolver,
          validationSchema,
      ]);
      const resetRefs = ({ errors, dirty, isSubmitted, touched, isValid, submitCount, dirtyFields, }) => {
          fieldsRef.current = {};
          if (!errors) {
              errorsRef.current = {};
          }
          if (!touched) {
              touchedFieldsRef.current = {};
          }
          if (!isValid) {
              validFieldsRef.current = new Set();
              fieldsWithValidationRef.current = new Set();
              isValidRef.current = true;
          }
          if (!dirty) {
              isDirtyRef.current = false;
          }
          if (!dirtyFields) {
              dirtyFieldsRef.current = new Set();
          }
          if (!isSubmitted) {
              isSubmittedRef.current = false;
          }
          if (!submitCount) {
              submitCountRef.current = 0;
          }
          defaultValuesAtRenderRef.current = {};
          fieldArrayDefaultValues.current = {};
          watchFieldsRef.current = new Set();
          isWatchAllRef.current = false;
      };
      const reset = (values, omitResetState = {}) => {
          if (isWeb) {
              for (const field of Object.values(fieldsRef.current)) {
                  if (field) {
                      const { ref, options } = field;
                      const inputRef = isRadioOrCheckboxFunction(ref) && isArray(options)
                          ? options[0].ref
                          : ref;
                      if (isHTMLElement(inputRef)) {
                          try {
                              inputRef.closest('form').reset();
                              break;
                          }
                          catch (_a) { }
                      }
                  }
              }
          }
          if (values) {
              defaultValuesRef.current = values;
          }
          Object.values(resetFieldArrayFunctionRef.current).forEach((resetFieldArray) => isFunction(resetFieldArray) && resetFieldArray());
          resetRefs(omitResetState);
          reRender();
      };
      function getValues(payload) {
          if (isString(payload)) {
              return fieldsRef.current[payload]
                  ? getFieldValue(fieldsRef.current, fieldsRef.current[payload].ref)
                  : get(defaultValuesRef.current, payload);
          }
          const fieldValues = getFieldsValues(fieldsRef.current);
          const outputValues = isEmptyObject(fieldValues)
              ? defaultValuesRef.current
              : fieldValues;
          return payload && payload.nest
              ? transformToNestObject(outputValues)
              : outputValues;
      }
      React.useEffect(() => () => {
          isUnMount.current = true;
          fieldsRef.current &&
              "production" === 'production' &&
              Object.values(fieldsRef.current).forEach((field) => removeFieldEventListenerAndRef(field, true));
      }, [removeFieldEventListenerAndRef]);
      if (!shouldValidateSchemaOrResolver) {
          isValidRef.current =
              validFieldsRef.current.size >= fieldsWithValidationRef.current.size &&
                  isEmptyObject(errorsRef.current);
      }
      const formState = {
          dirty: isDirtyRef.current,
          dirtyFields: dirtyFieldsRef.current,
          isSubmitted: isSubmittedRef.current,
          submitCount: submitCountRef.current,
          touched: touchedFieldsRef.current,
          isSubmitting: isSubmittingRef.current,
          isValid: isOnSubmit
              ? isSubmittedRef.current && isEmptyObject(errorsRef.current)
              : isValidRef.current,
      };
      const commonProps = {
          triggerValidation,
          setValue: React.useCallback(setValue, [
              reRender,
              setInternalValue,
              triggerValidation,
          ]),
          register: React.useCallback(register, [
              defaultValuesRef.current,
              defaultValuesAtRenderRef.current,
          ]),
          unregister: React.useCallback(unregister, []),
          getValues: React.useCallback(getValues, []),
          formState: isProxyEnabled
              ? new Proxy(formState, {
                  get: (obj, prop) => {
                      if (prop in obj) {
                          readFormStateRef.current[prop] = true;
                          return obj[prop];
                      }
                      return undefined;
                  },
              })
              : formState,
      };
      const control = Object.assign(Object.assign(Object.assign({ removeFieldEventListener,
          reRender }, (shouldValidateSchemaOrResolver
          ? { validateSchemaIsValid: validateSchemaOrResolver }
          : {})), { mode: {
              isOnBlur,
              isOnSubmit,
              isOnChange,
          }, reValidateMode: {
              isReValidateOnBlur,
              isReValidateOnSubmit,
          }, errorsRef,
          touchedFieldsRef,
          fieldsRef,
          isWatchAllRef,
          watchFieldsRef,
          resetFieldArrayFunctionRef,
          fieldArrayDefaultValues,
          validFieldsRef,
          dirtyFieldsRef,
          fieldsWithValidationRef,
          fieldArrayNamesRef,
          isDirtyRef,
          readFormStateRef,
          defaultValuesRef }), commonProps);
      return Object.assign({ watch,
          control,
          handleSubmit, reset: React.useCallback(reset, []), clearError: React.useCallback(clearError, []), setError: React.useCallback(setError, []), errors: errorsRef.current }, commonProps);
  }

  /*! *****************************************************************************
  Copyright (c) Microsoft Corporation. All rights reserved.
  Licensed under the Apache License, Version 2.0 (the "License"); you may not use
  this file except in compliance with the License. You may obtain a copy of the
  License at http://www.apache.org/licenses/LICENSE-2.0

  THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
  KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
  WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
  MERCHANTABLITY OR NON-INFRINGEMENT.

  See the Apache Version 2.0 License for specific language governing permissions
  and limitations under the License.
  ***************************************************************************** */

  function __rest(s, e) {
      var t = {};
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
          t[p] = s[p];
      if (s != null && typeof Object.getOwnPropertySymbols === "function")
          for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
              if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                  t[p[i]] = s[p[i]];
          }
      return t;
  }

  const FormGlobalContext = React.createContext(null);
  function useFormContext() {
      return React.useContext(FormGlobalContext);
  }
  function FormContext(_a) {
      var { children, formState, errors } = _a, restMethods = __rest(_a, ["children", "formState", "errors"]);
      return (React.createElement(FormGlobalContext.Provider, { value: Object.assign(Object.assign({}, restMethods), { formState, errors }) }, children));
  }

  var generateId = () => {
      const d = typeof performance === UNDEFINED ? Date.now() : performance.now() * 1000;
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
          const r = (Math.random() * 16 + d) % 16 | 0;
          return (c == 'x' ? r : (r & 0x3) | 0x8).toString(16);
      });
  };

  const appendId = (value, keyName) => (Object.assign({ [keyName]: generateId() }, (isObject(value) ? value : { value })));
  const mapIds = (data, keyName) => (isArray(data) ? data : []).map((value) => appendId(value, keyName));

  var getSortRemovedItems = (indexes, removeIndexes, updatedIndexes = [], count = 0, notFoundIndexes = []) => {
      for (const removeIndex of removeIndexes) {
          if (indexes.indexOf(removeIndex) < 0) {
              notFoundIndexes.push(removeIndex);
          }
      }
      for (const index of indexes.sort()) {
          if (removeIndexes.indexOf(index) > -1) {
              updatedIndexes.push(-1);
              count++;
          }
          else {
              updatedIndexes.push(index -
                  count -
                  (notFoundIndexes.length
                      ? notFoundIndexes
                          .map((notFoundIndex) => notFoundIndex < index)
                          .filter(Boolean).length
                      : 0));
          }
      }
      return updatedIndexes;
  };

  const removeAt = (data, index) => [
      ...data.slice(0, index),
      ...data.slice(index + 1),
  ];
  function removeAtIndexes(data, index) {
      let k = -1;
      while (++k < data.length) {
          if (index.indexOf(k) >= 0) {
              delete data[k];
          }
      }
      return data.filter(Boolean);
  }
  var removeArrayAt = (data, index) => isUndefined(index)
      ? []
      : isArray(index)
          ? removeAtIndexes(data, index)
          : removeAt(data, index);

  var moveArrayAt = (data, from, to) => isArray(data) ? data.splice(to, 0, data.splice(from, 1)[0]) : [];

  var swapArrayAt = (data, indexA, indexB) => {
      const temp = [data[indexB], data[indexA]];
      data[indexA] = temp[0];
      data[indexB] = temp[1];
  };

  function prepend(data, value) {
      return [...(isArray(value) ? value : [value || null]), ...data];
  }

  function insert(data, index, value) {
      return [
          ...data.slice(0, index),
          ...(isArray(value) ? value : [value || null]),
          ...data.slice(index),
      ];
  }

  var fillEmptyArray = (value) => isArray(value) ? Array(value.length).fill(null) : null;

  const useFieldArray = ({ control, name, keyName = 'id', }) => {
      const methods = useFormContext();
      const { isWatchAllRef, resetFieldArrayFunctionRef, fieldArrayNamesRef, reRender, fieldsRef, getValues, defaultValuesRef, removeFieldEventListener, mode: { isOnChange }, triggerValidation, errorsRef, dirtyFieldsRef, isDirtyRef, touchedFieldsRef, readFormStateRef, watchFieldsRef, validFieldsRef, fieldsWithValidationRef, fieldArrayDefaultValues, validateSchemaIsValid, } = control || methods.control;
      const getDefaultValues = () => [
          ...get(fieldArrayDefaultValues.current[getFieldArrayParentName(name)]
              ? fieldArrayDefaultValues.current
              : defaultValuesRef.current, name, []),
      ];
      const memoizedDefaultValues = React.useRef(getDefaultValues());
      const [fields, setField] = React.useState(mapIds(memoizedDefaultValues.current, keyName));
      const [isDeleted, setIsDeleted] = React.useState(false);
      const allFields = React.useRef(fields);
      const isNameKey = isKey(name);
      allFields.current = fields;
      if (isNameKey) {
          fieldArrayDefaultValues.current[name] = memoizedDefaultValues.current;
      }
      const appendValueWithKey = (values) => values.map((value) => appendId(value, keyName));
      const setFieldAndValidState = (fieldsValues) => {
          setField(fieldsValues);
          if (readFormStateRef.current.isValid && validateSchemaIsValid) {
              validateSchemaIsValid({
                  [name]: fieldsValues,
              });
          }
      };
      const modifyDirtyFields = ({ shouldRender, isRemove, isPrePend, index, value = {}, } = {}) => {
          let render = shouldRender;
          const values = isArray(value) ? value : [value];
          if (readFormStateRef.current.dirty) {
              const dirtyFieldIndexesAndValues = {};
              if (isPrePend || isRemove) {
                  for (const dirtyField of [...dirtyFieldsRef.current].sort()) {
                      if (isMatchFieldArrayName(dirtyField, name)) {
                          const matchedIndexes = dirtyField.match(REGEX_ARRAY_FIELD_INDEX);
                          if (matchedIndexes) {
                              const matchIndex = +matchedIndexes[matchedIndexes.length - 1];
                              if (dirtyFieldIndexesAndValues[matchIndex]) {
                                  dirtyFieldIndexesAndValues[matchIndex].push(dirtyField);
                              }
                              else {
                                  dirtyFieldIndexesAndValues[matchIndex] = [dirtyField];
                              }
                          }
                          dirtyFieldsRef.current.delete(dirtyField);
                      }
                  }
              }
              if (!isUndefined(index) || isPrePend) {
                  const updatedDirtyFieldIndexes = isUndefined(index)
                      ? []
                      : getSortRemovedItems(Object.keys(dirtyFieldIndexesAndValues).map((i) => +i), isArray(index) ? index : [index]);
                  Object.values(dirtyFieldIndexesAndValues).forEach((values, index) => {
                      const updateIndex = isPrePend ? 0 : updatedDirtyFieldIndexes[index];
                      if (updateIndex > -1) {
                          for (const value of values) {
                              const matchedIndexes = value.match(REGEX_ARRAY_FIELD_INDEX);
                              if (matchedIndexes) {
                                  dirtyFieldsRef.current.add(value.replace(/[\d+]([^[\d+]+)$/, `${isPrePend
                                    ? +matchedIndexes[matchedIndexes.length - 1] +
                                        values.length
                                    : updateIndex}$1`));
                              }
                          }
                      }
                  });
              }
              if (!isRemove) {
                  values.forEach((fieldValue, index) => Object.keys(fieldValue).forEach((key) => dirtyFieldsRef.current.add(`${name}[${isPrePend ? index : allFields.current.length + index}].${key}`)));
                  isDirtyRef.current = true;
              }
              render = true;
          }
          if (render && !isWatchAllRef.current) {
              reRender();
          }
      };
      const resetFields = (flagOrFields) => {
          if (readFormStateRef.current.dirty) {
              isDirtyRef.current = isUndefined(flagOrFields)
                  ? true
                  : getIsFieldsDifferent(flagOrFields, defaultValuesRef.current[name] || []);
          }
          for (const key in fieldsRef.current) {
              if (isMatchFieldArrayName(key, name) && fieldsRef.current[key]) {
                  removeFieldEventListener(fieldsRef.current[key], true);
              }
          }
      };
      const mapCurrentFieldsValueWithState = () => {
          const currentFieldsValue = get(getValues({ nest: true }), name);
          if (isArray(currentFieldsValue)) {
              for (let i = 0; i < currentFieldsValue.length; i++) {
                  allFields.current[i] = Object.assign(Object.assign({}, allFields.current[i]), currentFieldsValue[i]);
              }
          }
      };
      const append = (value) => {
          setFieldAndValidState([
              ...allFields.current,
              ...(isArray(value)
                  ? appendValueWithKey(value)
                  : [appendId(value, keyName)]),
          ]);
          modifyDirtyFields({ value });
      };
      const prepend$1 = (value) => {
          let shouldRender = false;
          resetFields();
          setFieldAndValidState(prepend(allFields.current, isArray(value) ? appendValueWithKey(value) : [appendId(value, keyName)]));
          if (errorsRef.current[name]) {
              errorsRef.current[name] = prepend(errorsRef.current[name], fillEmptyArray(value));
          }
          if (readFormStateRef.current.touched && touchedFieldsRef.current[name]) {
              touchedFieldsRef.current[name] = prepend(touchedFieldsRef.current[name], fillEmptyArray(value));
              shouldRender = true;
          }
          modifyDirtyFields({
              shouldRender,
              isPrePend: true,
              value,
          });
      };
      const remove = (index) => {
          let shouldRender = false;
          const isIndexUndefined = isUndefined(index);
          if (!isIndexUndefined) {
              mapCurrentFieldsValueWithState();
          }
          resetFields(removeArrayAt(getFieldValueByName(fieldsRef.current, name), index));
          setFieldAndValidState(removeArrayAt(allFields.current, index));
          setIsDeleted(true);
          if (errorsRef.current[name]) {
              errorsRef.current[name] = removeArrayAt(errorsRef.current[name], index);
              if (!errorsRef.current[name].filter(Boolean).length) {
                  delete errorsRef.current[name];
              }
          }
          if (readFormStateRef.current.touched && touchedFieldsRef.current[name]) {
              touchedFieldsRef.current[name] = removeArrayAt(touchedFieldsRef.current[name], index);
              shouldRender = true;
          }
          if (readFormStateRef.current.isValid && !validateSchemaIsValid) {
              let fieldIndex = -1;
              let isFound = false;
              const isIndexUndefined = isUndefined(index);
              while (fieldIndex++ < fields.length) {
                  const isLast = fieldIndex === fields.length - 1;
                  const isCurrentIndex = (isArray(index) ? index : [index]).indexOf(fieldIndex) >= 0;
                  if (isCurrentIndex || isIndexUndefined) {
                      isFound = true;
                  }
                  if (!isFound) {
                      continue;
                  }
                  for (const key in fields[fieldIndex]) {
                      const currentFieldName = `${name}[${fieldIndex}].${key}`;
                      if (isCurrentIndex || isLast || isIndexUndefined) {
                          validFieldsRef.current.delete(currentFieldName);
                          fieldsWithValidationRef.current.delete(currentFieldName);
                      }
                      else {
                          const previousFieldName = `${name}[${fieldIndex - 1}].${key}`;
                          if (validFieldsRef.current.has(currentFieldName)) {
                              validFieldsRef.current.add(previousFieldName);
                          }
                          if (fieldsWithValidationRef.current.has(currentFieldName)) {
                              fieldsWithValidationRef.current.add(previousFieldName);
                          }
                      }
                  }
              }
          }
          modifyDirtyFields({
              shouldRender,
              isRemove: true,
              index,
          });
          if (isOnChange) {
              triggerValidation(name);
          }
      };
      const insert$1 = (index, value) => {
          mapCurrentFieldsValueWithState();
          resetFields(insert(getFieldValueByName(fieldsRef.current, name), index));
          setFieldAndValidState(insert(allFields.current, index, isArray(value) ? appendValueWithKey(value) : [appendId(value, keyName)]));
          if (errorsRef.current[name]) {
              errorsRef.current[name] = insert(errorsRef.current[name], index, fillEmptyArray(value));
          }
          if (readFormStateRef.current.touched && touchedFieldsRef.current[name]) {
              touchedFieldsRef.current[name] = insert(touchedFieldsRef.current[name], index, fillEmptyArray(value));
              reRender();
          }
      };
      const swap = (indexA, indexB) => {
          mapCurrentFieldsValueWithState();
          const fieldValues = getFieldValueByName(fieldsRef.current, name);
          swapArrayAt(fieldValues, indexA, indexB);
          resetFields(fieldValues);
          swapArrayAt(allFields.current, indexA, indexB);
          setFieldAndValidState([...allFields.current]);
          if (errorsRef.current[name]) {
              swapArrayAt(errorsRef.current[name], indexA, indexB);
          }
          if (readFormStateRef.current.touched && touchedFieldsRef.current[name]) {
              swapArrayAt(touchedFieldsRef.current[name], indexA, indexB);
              reRender();
          }
      };
      const move = (from, to) => {
          mapCurrentFieldsValueWithState();
          const fieldValues = getFieldValueByName(fieldsRef.current, name);
          moveArrayAt(fieldValues, from, to);
          resetFields(fieldValues);
          moveArrayAt(allFields.current, from, to);
          setFieldAndValidState([...allFields.current]);
          if (errorsRef.current[name]) {
              moveArrayAt(errorsRef.current[name], from, to);
          }
          if (readFormStateRef.current.touched && touchedFieldsRef.current[name]) {
              moveArrayAt(touchedFieldsRef.current[name], from, to);
              reRender();
          }
      };
      const reset = () => {
          resetFields();
          memoizedDefaultValues.current = getDefaultValues();
          setField(mapIds(memoizedDefaultValues.current, keyName));
      };
      React.useEffect(() => {
          if (isNameKey &&
              isDeleted &&
              fieldArrayDefaultValues.current[name] &&
              fields.length < fieldArrayDefaultValues.current[name].length) {
              fieldArrayDefaultValues.current[name].pop();
          }
      }, [fields, name, fieldArrayDefaultValues, isDeleted, isNameKey]);
      React.useEffect(() => {
          if (isWatchAllRef && isWatchAllRef.current) {
              reRender();
          }
          else if (watchFieldsRef) {
              for (const watchField of watchFieldsRef.current) {
                  if (watchField.startsWith(name)) {
                      reRender();
                      break;
                  }
              }
          }
      }, [fields, name, reRender, watchFieldsRef, isWatchAllRef]);
      React.useEffect(() => {
          const resetFunctions = resetFieldArrayFunctionRef.current;
          const fieldArrayNames = fieldArrayNamesRef.current;
          fieldArrayNames.add(name);
          resetFunctions[name] = reset;
          return () => {
              resetFields();
              delete resetFunctions[name];
              fieldArrayNames.delete(name);
          };
          // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);
      return {
          swap: React.useCallback(swap, [name]),
          move: React.useCallback(move, [name]),
          prepend: React.useCallback(prepend$1, [name]),
          append: React.useCallback(append, [name]),
          remove: React.useCallback(remove, [fields, name]),
          insert: React.useCallback(insert$1, [name]),
          fields,
      };
  };

  var getInputValue = (event, isCheckboxInput) => isPrimitive(event) ||
      !isObject(event.target) ||
      (isObject(event.target) && !event.type)
      ? event
      : isCheckboxInput || isUndefined(event.target.value)
          ? event.target.checked
          : event.target.value;

  const Controller = (_a) => {
      var { name, rules, as: InnerComponent, onBlur, onChange, onChangeName = VALIDATION_MODE.onChange, onBlurName = VALIDATION_MODE.onBlur, valueName, defaultValue, control, onFocus } = _a, rest = __rest(_a, ["name", "rules", "as", "onBlur", "onChange", "onChangeName", "onBlurName", "valueName", "defaultValue", "control", "onFocus"]);
      const methods = useFormContext();
      const { defaultValuesRef, setValue, register, unregister, errorsRef, removeFieldEventListener, triggerValidation, mode: { isOnSubmit, isOnBlur, isOnChange }, reValidateMode: { isReValidateOnBlur, isReValidateOnSubmit }, formState: { isSubmitted }, touchedFieldsRef, readFormStateRef, reRender, fieldsRef, fieldArrayNamesRef, } = control || methods.control;
      const [value, setInputStateValue] = React.useState(isUndefined(defaultValue)
          ? get(defaultValuesRef.current, name)
          : defaultValue);
      const valueRef = React.useRef(value);
      const isCheckboxInput = isBoolean(value);
      const shouldReValidateOnBlur = isOnBlur || isReValidateOnBlur;
      const rulesRef = React.useRef(rules);
      const onFocusRef = React.useRef(onFocus);
      const isNotFieldArray = !isNameInFieldArray(fieldArrayNamesRef.current, name);
      rulesRef.current = rules;
      const shouldValidate = () => !skipValidation({
          hasError: !!get(errorsRef.current, name),
          isOnBlur,
          isOnSubmit,
          isOnChange,
          isReValidateOnBlur,
          isReValidateOnSubmit,
          isSubmitted,
      });
      const commonTask = (event) => {
          const data = getInputValue(event, isCheckboxInput);
          setInputStateValue(data);
          valueRef.current = data;
          return data;
      };
      const eventWrapper = (event) => (...arg) => setValue(name, commonTask(event(arg)), shouldValidate());
      const handleChange = (event) => {
          const data = commonTask(event);
          setValue(name, data, shouldValidate());
      };
      const registerField = React.useCallback(() => {
          if (!isNotFieldArray) {
              removeFieldEventListener(fieldsRef.current[name], true);
          }
          register(Object.defineProperty({ name, focus: onFocusRef.current }, VALUE, {
              set(data) {
                  setInputStateValue(data);
                  valueRef.current = data;
              },
              get() {
                  return valueRef.current;
              },
          }), rulesRef.current);
      }, [
          isNotFieldArray,
          fieldsRef,
          rulesRef,
          name,
          onFocusRef,
          register,
          removeFieldEventListener,
      ]);
      React.useEffect(() => () => {
          !isNameInFieldArray(fieldArrayNamesRef.current, name) && unregister(name);
      }, [unregister, name, fieldArrayNamesRef]);
      React.useEffect(() => {
          registerField();
      }, [registerField]);
      // eslint-disable-next-line react-hooks/exhaustive-deps
      React.useEffect(() => {
          if (!fieldsRef.current[name]) {
              registerField();
              if (isNotFieldArray) {
                  setInputStateValue(isUndefined(defaultValue)
                      ? get(defaultValuesRef.current, name)
                      : defaultValue);
              }
          }
      });
      const props = Object.assign(Object.assign(Object.assign(Object.assign({ name }, rest), (onChange
          ? { [onChangeName]: eventWrapper(onChange) }
          : { [onChangeName]: handleChange })), { [onBlurName]: (...args) => {
              if (onBlur) {
                  onBlur(args);
              }
              if (readFormStateRef.current.touched &&
                  !get(touchedFieldsRef.current, name)) {
                  set(touchedFieldsRef.current, name, true);
                  reRender();
              }
              if (shouldReValidateOnBlur) {
                  triggerValidation(name);
              }
          } }), { [valueName || (isCheckboxInput ? 'checked' : VALUE)]: value });
      return React.isValidElement(InnerComponent)
          ? React.cloneElement(InnerComponent, props)
          : React.createElement(InnerComponent, props);
  };

  const ErrorMessage = (_a) => {
      var { as: InnerComponent, errors, name, message, children } = _a, rest = __rest(_a, ["as", "errors", "name", "message", "children"]);
      const methods = useFormContext();
      const error = get(errors || methods.errors, name);
      if (!error) {
          return null;
      }
      const { message: messageFromRegister, types } = error;
      const props = Object.assign(Object.assign({}, (InnerComponent ? rest : {})), { children: children
              ? children({ message: messageFromRegister || message, messages: types })
              : messageFromRegister || message });
      return InnerComponent ? (React.isValidElement(InnerComponent) ? (React.cloneElement(InnerComponent, props)) : (React.createElement(InnerComponent, props))) : (React.createElement(React.Fragment, Object.assign({}, props)));
  };

  exports.Controller = Controller;
  exports.ErrorMessage = ErrorMessage;
  exports.FormContext = FormContext;
  exports.useFieldArray = useFieldArray;
  exports.useForm = useForm;
  exports.useFormContext = useFormContext;

  Object.defineProperty(exports, '__esModule', { value: true });

})));