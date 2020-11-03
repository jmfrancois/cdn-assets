(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["TalendReactContainers"] = factory();
	else
		root["TalendReactContainers"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../node_modules/invariant/browser.js":
/*!*****************************************************************!*\
  !*** /home/runner/work/ui/ui/node_modules/invariant/browser.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var invariant = function(condition, format, a, b, c, d, e, f) {
  if (true) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;


/***/ }),

/***/ "../../node_modules/keycode/index.js":
/*!*************************************************************!*\
  !*** /home/runner/work/ui/ui/node_modules/keycode/index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Source: http://jsfiddle.net/vWx8V/
// http://stackoverflow.com/questions/5603195/full-list-of-javascript-keycodes

/**
 * Conenience method returns corresponding value for given keyName or keyCode.
 *
 * @param {Mixed} keyCode {Number} or keyName {String}
 * @return {Mixed}
 * @api public
 */

function keyCode(searchInput) {
  // Keyboard Events
  if (searchInput && 'object' === typeof searchInput) {
    var hasKeyCode = searchInput.which || searchInput.keyCode || searchInput.charCode
    if (hasKeyCode) searchInput = hasKeyCode
  }

  // Numbers
  if ('number' === typeof searchInput) return names[searchInput]

  // Everything else (cast to string)
  var search = String(searchInput)

  // check codes
  var foundNamedKey = codes[search.toLowerCase()]
  if (foundNamedKey) return foundNamedKey

  // check aliases
  var foundNamedKey = aliases[search.toLowerCase()]
  if (foundNamedKey) return foundNamedKey

  // weird character?
  if (search.length === 1) return search.charCodeAt(0)

  return undefined
}

/**
 * Compares a keyboard event with a given keyCode or keyName.
 *
 * @param {Event} event Keyboard event that should be tested
 * @param {Mixed} keyCode {Number} or keyName {String}
 * @return {Boolean}
 * @api public
 */
keyCode.isEventKey = function isEventKey(event, nameOrCode) {
  if (event && 'object' === typeof event) {
    var keyCode = event.which || event.keyCode || event.charCode
    if (keyCode === null || keyCode === undefined) { return false; }
    if (typeof nameOrCode === 'string') {
      // check codes
      var foundNamedKey = codes[nameOrCode.toLowerCase()]
      if (foundNamedKey) { return foundNamedKey === keyCode; }
    
      // check aliases
      var foundNamedKey = aliases[nameOrCode.toLowerCase()]
      if (foundNamedKey) { return foundNamedKey === keyCode; }
    } else if (typeof nameOrCode === 'number') {
      return nameOrCode === keyCode;
    }
    return false;
  }
}

exports = module.exports = keyCode;

/**
 * Get by name
 *
 *   exports.code['enter'] // => 13
 */

var codes = exports.code = exports.codes = {
  'backspace': 8,
  'tab': 9,
  'enter': 13,
  'shift': 16,
  'ctrl': 17,
  'alt': 18,
  'pause/break': 19,
  'caps lock': 20,
  'esc': 27,
  'space': 32,
  'page up': 33,
  'page down': 34,
  'end': 35,
  'home': 36,
  'left': 37,
  'up': 38,
  'right': 39,
  'down': 40,
  'insert': 45,
  'delete': 46,
  'command': 91,
  'left command': 91,
  'right command': 93,
  'numpad *': 106,
  'numpad +': 107,
  'numpad -': 109,
  'numpad .': 110,
  'numpad /': 111,
  'num lock': 144,
  'scroll lock': 145,
  'my computer': 182,
  'my calculator': 183,
  ';': 186,
  '=': 187,
  ',': 188,
  '-': 189,
  '.': 190,
  '/': 191,
  '`': 192,
  '[': 219,
  '\\': 220,
  ']': 221,
  "'": 222
}

// Helper aliases

var aliases = exports.aliases = {
  'windows': 91,
  '⇧': 16,
  '⌥': 18,
  '⌃': 17,
  '⌘': 91,
  'ctl': 17,
  'control': 17,
  'option': 18,
  'pause': 19,
  'break': 19,
  'caps': 20,
  'return': 13,
  'escape': 27,
  'spc': 32,
  'spacebar': 32,
  'pgup': 33,
  'pgdn': 34,
  'ins': 45,
  'del': 46,
  'cmd': 91
}

/*!
 * Programatically add the following
 */

// lower case chars
for (i = 97; i < 123; i++) codes[String.fromCharCode(i)] = i - 32

// numbers
for (var i = 48; i < 58; i++) codes[i - 48] = i

// function keys
for (i = 1; i < 13; i++) codes['f'+i] = i + 111

// numpad keys
for (i = 0; i < 10; i++) codes['numpad '+i] = i + 96

/**
 * Get by code
 *
 *   exports.name[13] // => 'Enter'
 */

var names = exports.names = exports.title = {} // title for backward compat

// Create reverse mapping
for (i in codes) names[codes[i]] = i

// Add aliases
for (var alias in aliases) {
  codes[alias] = aliases[alias]
}


/***/ }),

/***/ "../../node_modules/memoize-one/dist/memoize-one.esm.js":
/*!********************************************************************************!*\
  !*** /home/runner/work/ui/ui/node_modules/memoize-one/dist/memoize-one.esm.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function areInputsEqual(newInputs, lastInputs) {
    if (newInputs.length !== lastInputs.length) {
        return false;
    }
    for (var i = 0; i < newInputs.length; i++) {
        if (newInputs[i] !== lastInputs[i]) {
            return false;
        }
    }
    return true;
}

function memoizeOne(resultFn, isEqual) {
    if (isEqual === void 0) { isEqual = areInputsEqual; }
    var lastThis;
    var lastArgs = [];
    var lastResult;
    var calledOnce = false;
    function memoized() {
        var newArgs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            newArgs[_i] = arguments[_i];
        }
        if (calledOnce && lastThis === this && isEqual(newArgs, lastArgs)) {
            return lastResult;
        }
        lastResult = resultFn.apply(this, newArgs);
        calledOnce = true;
        lastThis = this;
        lastArgs = newArgs;
        return lastResult;
    }
    return memoized;
}

/* harmony default export */ __webpack_exports__["default"] = (memoizeOne);


/***/ }),

/***/ "../../node_modules/process/browser.js":
/*!***************************************************************!*\
  !*** /home/runner/work/ui/ui/node_modules/process/browser.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "../../node_modules/react-immutable-proptypes/dist/ImmutablePropTypes.js":
/*!*************************************************************************************************!*\
  !*** /home/runner/work/ui/ui/node_modules/react-immutable-proptypes/dist/ImmutablePropTypes.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * This is a straight rip-off of the React.js ReactPropTypes.js proptype validators,
 * modified to make it possible to validate Immutable.js data.
 *     ImmutableTypes.listOf is patterned after React.PropTypes.arrayOf, but for Immutable.List
 *     ImmutableTypes.shape  is based on React.PropTypes.shape, but for any Immutable.Iterable
 */


var Immutable = __webpack_require__(/*! immutable */ "immutable");

var ANONYMOUS = "<<anonymous>>";

var ImmutablePropTypes;

if (true) {
  ImmutablePropTypes = {
    listOf: createListOfTypeChecker,
    mapOf: createMapOfTypeChecker,
    orderedMapOf: createOrderedMapOfTypeChecker,
    setOf: createSetOfTypeChecker,
    orderedSetOf: createOrderedSetOfTypeChecker,
    stackOf: createStackOfTypeChecker,
    iterableOf: createIterableOfTypeChecker,
    recordOf: createRecordOfTypeChecker,
    shape: createShapeChecker,
    contains: createShapeChecker,
    mapContains: createMapContainsChecker,
    orderedMapContains: createOrderedMapContainsChecker,
    // Primitive Types
    list: createImmutableTypeChecker("List", Immutable.List.isList),
    map: createImmutableTypeChecker("Map", Immutable.Map.isMap),
    orderedMap: createImmutableTypeChecker("OrderedMap", Immutable.OrderedMap.isOrderedMap),
    set: createImmutableTypeChecker("Set", Immutable.Set.isSet),
    orderedSet: createImmutableTypeChecker("OrderedSet", Immutable.OrderedSet.isOrderedSet),
    stack: createImmutableTypeChecker("Stack", Immutable.Stack.isStack),
    seq: createImmutableTypeChecker("Seq", Immutable.Seq.isSeq),
    record: createImmutableTypeChecker("Record", function (isRecord) {
      return isRecord instanceof Immutable.Record;
    }),
    iterable: createImmutableTypeChecker("Iterable", Immutable.Iterable.isIterable)
  };
} else { var getProductionTypeChecker, productionTypeChecker; }

ImmutablePropTypes.iterable.indexed = createIterableSubclassTypeChecker("Indexed", Immutable.Iterable.isIndexed);
ImmutablePropTypes.iterable.keyed = createIterableSubclassTypeChecker("Keyed", Immutable.Iterable.isKeyed);

function getPropType(propValue) {
  var propType = typeof propValue;
  if (Array.isArray(propValue)) {
    return "array";
  }
  if (propValue instanceof RegExp) {
    // Old webkits (at least until Android 4.0) return 'function' rather than
    // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
    // passes PropTypes.object.
    return "object";
  }
  if (propValue instanceof Immutable.Iterable) {
    return "Immutable." + propValue.toSource().split(" ")[0];
  }
  return propType;
}

function createChainableTypeChecker(validate) {
  function checkType(isRequired, props, propName, componentName, location, propFullName) {
    for (var _len = arguments.length, rest = Array(_len > 6 ? _len - 6 : 0), _key = 6; _key < _len; _key++) {
      rest[_key - 6] = arguments[_key];
    }

    propFullName = propFullName || propName;
    componentName = componentName || ANONYMOUS;
    if (props[propName] == null) {
      var locationName = location;
      if (isRequired) {
        return new Error("Required " + locationName + " `" + propFullName + "` was not specified in " + ("`" + componentName + "`."));
      }
    } else {
      return validate.apply(undefined, [props, propName, componentName, location, propFullName].concat(rest));
    }
  }

  var chainedCheckType = checkType.bind(null, false);
  chainedCheckType.isRequired = checkType.bind(null, true);

  return chainedCheckType;
}

function createImmutableTypeChecker(immutableClassName, immutableClassTypeValidator) {
  function validate(props, propName, componentName, location, propFullName) {
    var propValue = props[propName];
    if (!immutableClassTypeValidator(propValue)) {
      var propType = getPropType(propValue);
      return new Error("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `" + immutableClassName + "`."));
    }
    return null;
  }
  return createChainableTypeChecker(validate);
}

function createIterableSubclassTypeChecker(subclassName, validator) {
  return createImmutableTypeChecker("Iterable." + subclassName, function (propValue) {
    return Immutable.Iterable.isIterable(propValue) && validator(propValue);
  });
}

function createIterableTypeChecker(typeChecker, immutableClassName, immutableClassTypeValidator) {

  function validate(props, propName, componentName, location, propFullName) {
    for (var _len = arguments.length, rest = Array(_len > 5 ? _len - 5 : 0), _key = 5; _key < _len; _key++) {
      rest[_key - 5] = arguments[_key];
    }

    var propValue = props[propName];
    if (!immutableClassTypeValidator(propValue)) {
      var locationName = location;
      var propType = getPropType(propValue);
      return new Error("Invalid " + locationName + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an Immutable.js " + immutableClassName + "."));
    }

    if (typeof typeChecker !== "function") {
      return new Error("Invalid typeChecker supplied to `" + componentName + "` " + ("for propType `" + propFullName + "`, expected a function."));
    }

    var propValues = propValue.valueSeq().toArray();
    for (var i = 0, len = propValues.length; i < len; i++) {
      var error = typeChecker.apply(undefined, [propValues, i, componentName, location, "" + propFullName + "[" + i + "]"].concat(rest));
      if (error instanceof Error) {
        return error;
      }
    }
  }
  return createChainableTypeChecker(validate);
}

function createKeysTypeChecker(typeChecker) {

  function validate(props, propName, componentName, location, propFullName) {
    for (var _len = arguments.length, rest = Array(_len > 5 ? _len - 5 : 0), _key = 5; _key < _len; _key++) {
      rest[_key - 5] = arguments[_key];
    }

    var propValue = props[propName];
    if (typeof typeChecker !== "function") {
      return new Error("Invalid keysTypeChecker (optional second argument) supplied to `" + componentName + "` " + ("for propType `" + propFullName + "`, expected a function."));
    }

    var keys = propValue.keySeq().toArray();
    for (var i = 0, len = keys.length; i < len; i++) {
      var error = typeChecker.apply(undefined, [keys, i, componentName, location, "" + propFullName + " -> key(" + keys[i] + ")"].concat(rest));
      if (error instanceof Error) {
        return error;
      }
    }
  }
  return createChainableTypeChecker(validate);
}

function createListOfTypeChecker(typeChecker) {
  return createIterableTypeChecker(typeChecker, "List", Immutable.List.isList);
}

function createMapOfTypeCheckerFactory(valuesTypeChecker, keysTypeChecker, immutableClassName, immutableClassTypeValidator) {
  function validate() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return createIterableTypeChecker(valuesTypeChecker, immutableClassName, immutableClassTypeValidator).apply(undefined, args) || keysTypeChecker && createKeysTypeChecker(keysTypeChecker).apply(undefined, args);
  }

  return createChainableTypeChecker(validate);
}

function createMapOfTypeChecker(valuesTypeChecker, keysTypeChecker) {
  return createMapOfTypeCheckerFactory(valuesTypeChecker, keysTypeChecker, "Map", Immutable.Map.isMap);
}

function createOrderedMapOfTypeChecker(valuesTypeChecker, keysTypeChecker) {
  return createMapOfTypeCheckerFactory(valuesTypeChecker, keysTypeChecker, "OrderedMap", Immutable.OrderedMap.isOrderedMap);
}

function createSetOfTypeChecker(typeChecker) {
  return createIterableTypeChecker(typeChecker, "Set", Immutable.Set.isSet);
}

function createOrderedSetOfTypeChecker(typeChecker) {
  return createIterableTypeChecker(typeChecker, "OrderedSet", Immutable.OrderedSet.isOrderedSet);
}

function createStackOfTypeChecker(typeChecker) {
  return createIterableTypeChecker(typeChecker, "Stack", Immutable.Stack.isStack);
}

function createIterableOfTypeChecker(typeChecker) {
  return createIterableTypeChecker(typeChecker, "Iterable", Immutable.Iterable.isIterable);
}

function createRecordOfTypeChecker(recordKeys) {
  function validate(props, propName, componentName, location, propFullName) {
    for (var _len = arguments.length, rest = Array(_len > 5 ? _len - 5 : 0), _key = 5; _key < _len; _key++) {
      rest[_key - 5] = arguments[_key];
    }

    var propValue = props[propName];
    if (!(propValue instanceof Immutable.Record)) {
      var propType = getPropType(propValue);
      var locationName = location;
      return new Error("Invalid " + locationName + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected an Immutable.js Record."));
    }
    for (var key in recordKeys) {
      var checker = recordKeys[key];
      if (!checker) {
        continue;
      }
      var mutablePropValue = propValue.toObject();
      var error = checker.apply(undefined, [mutablePropValue, key, componentName, location, "" + propFullName + "." + key].concat(rest));
      if (error) {
        return error;
      }
    }
  }
  return createChainableTypeChecker(validate);
}

// there is some irony in the fact that shapeTypes is a standard hash and not an immutable collection
function createShapeTypeChecker(shapeTypes) {
  var immutableClassName = arguments[1] === undefined ? "Iterable" : arguments[1];
  var immutableClassTypeValidator = arguments[2] === undefined ? Immutable.Iterable.isIterable : arguments[2];

  function validate(props, propName, componentName, location, propFullName) {
    for (var _len = arguments.length, rest = Array(_len > 5 ? _len - 5 : 0), _key = 5; _key < _len; _key++) {
      rest[_key - 5] = arguments[_key];
    }

    var propValue = props[propName];
    if (!immutableClassTypeValidator(propValue)) {
      var propType = getPropType(propValue);
      var locationName = location;
      return new Error("Invalid " + locationName + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected an Immutable.js " + immutableClassName + "."));
    }
    var mutablePropValue = propValue.toObject();
    for (var key in shapeTypes) {
      var checker = shapeTypes[key];
      if (!checker) {
        continue;
      }
      var error = checker.apply(undefined, [mutablePropValue, key, componentName, location, "" + propFullName + "." + key].concat(rest));
      if (error) {
        return error;
      }
    }
  }
  return createChainableTypeChecker(validate);
}

function createShapeChecker(shapeTypes) {
  return createShapeTypeChecker(shapeTypes);
}

function createMapContainsChecker(shapeTypes) {
  return createShapeTypeChecker(shapeTypes, "Map", Immutable.Map.isMap);
}

function createOrderedMapContainsChecker(shapeTypes) {
  return createShapeTypeChecker(shapeTypes, "OrderedMap", Immutable.OrderedMap.isOrderedMap);
}

module.exports = ImmutablePropTypes;

/***/ }),

/***/ "../../node_modules/reselect/lib/index.js":
/*!******************************************************************!*\
  !*** /home/runner/work/ui/ui/node_modules/reselect/lib/index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.defaultMemoize = defaultMemoize;
exports.createSelectorCreator = createSelectorCreator;
exports.createStructuredSelector = createStructuredSelector;

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function defaultEqualityCheck(a, b) {
  return a === b;
}

function defaultMemoize(func) {
  var equalityCheck = arguments.length <= 1 || arguments[1] === undefined ? defaultEqualityCheck : arguments[1];

  var lastArgs = null;
  var lastResult = null;
  return function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (lastArgs === null || lastArgs.length !== args.length || !args.every(function (value, index) {
      return equalityCheck(value, lastArgs[index]);
    })) {
      lastResult = func.apply(undefined, args);
    }
    lastArgs = args;
    return lastResult;
  };
}

function getDependencies(funcs) {
  var dependencies = Array.isArray(funcs[0]) ? funcs[0] : funcs;

  if (!dependencies.every(function (dep) {
    return typeof dep === 'function';
  })) {
    var dependencyTypes = dependencies.map(function (dep) {
      return typeof dep;
    }).join(', ');
    throw new Error('Selector creators expect all input-selectors to be functions, ' + ('instead received the following types: [' + dependencyTypes + ']'));
  }

  return dependencies;
}

function createSelectorCreator(memoize) {
  for (var _len2 = arguments.length, memoizeOptions = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    memoizeOptions[_key2 - 1] = arguments[_key2];
  }

  return function () {
    for (var _len3 = arguments.length, funcs = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      funcs[_key3] = arguments[_key3];
    }

    var recomputations = 0;
    var resultFunc = funcs.pop();
    var dependencies = getDependencies(funcs);

    var memoizedResultFunc = memoize.apply(undefined, [function () {
      recomputations++;
      return resultFunc.apply(undefined, arguments);
    }].concat(memoizeOptions));

    var selector = function selector(state, props) {
      for (var _len4 = arguments.length, args = Array(_len4 > 2 ? _len4 - 2 : 0), _key4 = 2; _key4 < _len4; _key4++) {
        args[_key4 - 2] = arguments[_key4];
      }

      var params = dependencies.map(function (dependency) {
        return dependency.apply(undefined, [state, props].concat(args));
      });
      return memoizedResultFunc.apply(undefined, _toConsumableArray(params));
    };

    selector.resultFunc = resultFunc;
    selector.recomputations = function () {
      return recomputations;
    };
    selector.resetRecomputations = function () {
      return recomputations = 0;
    };
    return selector;
  };
}

var createSelector = exports.createSelector = createSelectorCreator(defaultMemoize);

function createStructuredSelector(selectors) {
  var selectorCreator = arguments.length <= 1 || arguments[1] === undefined ? createSelector : arguments[1];

  if (typeof selectors !== 'object') {
    throw new Error('createStructuredSelector expects first argument to be an object ' + ('where each property is a selector, instead received a ' + typeof selectors));
  }
  var objectKeys = Object.keys(selectors);
  return selectorCreator(objectKeys.map(function (key) {
    return selectors[key];
  }), function () {
    for (var _len5 = arguments.length, values = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
      values[_key5] = arguments[_key5];
    }

    return values.reduce(function (composition, value, index) {
      composition[objectKeys[index]] = value;
      return composition;
    }, {});
  });
}

/***/ }),

/***/ "../../node_modules/uuid/index.js":
/*!**********************************************************!*\
  !*** /home/runner/work/ui/ui/node_modules/uuid/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var v1 = __webpack_require__(/*! ./v1 */ "../../node_modules/uuid/v1.js");
var v4 = __webpack_require__(/*! ./v4 */ "../../node_modules/uuid/v4.js");

var uuid = v4;
uuid.v1 = v1;
uuid.v4 = v4;

module.exports = uuid;


/***/ }),

/***/ "../../node_modules/uuid/lib/bytesToUuid.js":
/*!********************************************************************!*\
  !*** /home/runner/work/ui/ui/node_modules/uuid/lib/bytesToUuid.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
var byteToHex = [];
for (var i = 0; i < 256; ++i) {
  byteToHex[i] = (i + 0x100).toString(16).substr(1);
}

function bytesToUuid(buf, offset) {
  var i = offset || 0;
  var bth = byteToHex;
  // join used to fix memory issue caused by concatenation: https://bugs.chromium.org/p/v8/issues/detail?id=3175#c4
  return ([
    bth[buf[i++]], bth[buf[i++]],
    bth[buf[i++]], bth[buf[i++]], '-',
    bth[buf[i++]], bth[buf[i++]], '-',
    bth[buf[i++]], bth[buf[i++]], '-',
    bth[buf[i++]], bth[buf[i++]], '-',
    bth[buf[i++]], bth[buf[i++]],
    bth[buf[i++]], bth[buf[i++]],
    bth[buf[i++]], bth[buf[i++]]
  ]).join('');
}

module.exports = bytesToUuid;


/***/ }),

/***/ "../../node_modules/uuid/lib/rng-browser.js":
/*!********************************************************************!*\
  !*** /home/runner/work/ui/ui/node_modules/uuid/lib/rng-browser.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Unique ID creation requires a high quality random # generator.  In the
// browser this is a little complicated due to unknown quality of Math.random()
// and inconsistent support for the `crypto` API.  We do the best we can via
// feature-detection

// getRandomValues needs to be invoked in a context where "this" is a Crypto
// implementation. Also, find the complete implementation of crypto on IE11.
var getRandomValues = (typeof(crypto) != 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)) ||
                      (typeof(msCrypto) != 'undefined' && typeof window.msCrypto.getRandomValues == 'function' && msCrypto.getRandomValues.bind(msCrypto));

if (getRandomValues) {
  // WHATWG crypto RNG - http://wiki.whatwg.org/wiki/Crypto
  var rnds8 = new Uint8Array(16); // eslint-disable-line no-undef

  module.exports = function whatwgRNG() {
    getRandomValues(rnds8);
    return rnds8;
  };
} else {
  // Math.random()-based (RNG)
  //
  // If all else fails, use Math.random().  It's fast, but is of unspecified
  // quality.
  var rnds = new Array(16);

  module.exports = function mathRNG() {
    for (var i = 0, r; i < 16; i++) {
      if ((i & 0x03) === 0) r = Math.random() * 0x100000000;
      rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;
    }

    return rnds;
  };
}


/***/ }),

/***/ "../../node_modules/uuid/v1.js":
/*!*******************************************************!*\
  !*** /home/runner/work/ui/ui/node_modules/uuid/v1.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var rng = __webpack_require__(/*! ./lib/rng */ "../../node_modules/uuid/lib/rng-browser.js");
var bytesToUuid = __webpack_require__(/*! ./lib/bytesToUuid */ "../../node_modules/uuid/lib/bytesToUuid.js");

// **`v1()` - Generate time-based UUID**
//
// Inspired by https://github.com/LiosK/UUID.js
// and http://docs.python.org/library/uuid.html

var _nodeId;
var _clockseq;

// Previous uuid creation time
var _lastMSecs = 0;
var _lastNSecs = 0;

// See https://github.com/uuidjs/uuid for API details
function v1(options, buf, offset) {
  var i = buf && offset || 0;
  var b = buf || [];

  options = options || {};
  var node = options.node || _nodeId;
  var clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq;

  // node and clockseq need to be initialized to random values if they're not
  // specified.  We do this lazily to minimize issues related to insufficient
  // system entropy.  See #189
  if (node == null || clockseq == null) {
    var seedBytes = rng();
    if (node == null) {
      // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
      node = _nodeId = [
        seedBytes[0] | 0x01,
        seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]
      ];
    }
    if (clockseq == null) {
      // Per 4.2.2, randomize (14 bit) clockseq
      clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff;
    }
  }

  // UUID timestamps are 100 nano-second units since the Gregorian epoch,
  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.
  var msecs = options.msecs !== undefined ? options.msecs : new Date().getTime();

  // Per 4.2.1.2, use count of uuid's generated during the current clock
  // cycle to simulate higher resolution clock
  var nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1;

  // Time since last uuid creation (in msecs)
  var dt = (msecs - _lastMSecs) + (nsecs - _lastNSecs)/10000;

  // Per 4.2.1.2, Bump clockseq on clock regression
  if (dt < 0 && options.clockseq === undefined) {
    clockseq = clockseq + 1 & 0x3fff;
  }

  // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
  // time interval
  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
    nsecs = 0;
  }

  // Per 4.2.1.2 Throw error if too many uuids are requested
  if (nsecs >= 10000) {
    throw new Error('uuid.v1(): Can\'t create more than 10M uuids/sec');
  }

  _lastMSecs = msecs;
  _lastNSecs = nsecs;
  _clockseq = clockseq;

  // Per 4.1.4 - Convert from unix epoch to Gregorian epoch
  msecs += 12219292800000;

  // `time_low`
  var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
  b[i++] = tl >>> 24 & 0xff;
  b[i++] = tl >>> 16 & 0xff;
  b[i++] = tl >>> 8 & 0xff;
  b[i++] = tl & 0xff;

  // `time_mid`
  var tmh = (msecs / 0x100000000 * 10000) & 0xfffffff;
  b[i++] = tmh >>> 8 & 0xff;
  b[i++] = tmh & 0xff;

  // `time_high_and_version`
  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version
  b[i++] = tmh >>> 16 & 0xff;

  // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)
  b[i++] = clockseq >>> 8 | 0x80;

  // `clock_seq_low`
  b[i++] = clockseq & 0xff;

  // `node`
  for (var n = 0; n < 6; ++n) {
    b[i + n] = node[n];
  }

  return buf ? buf : bytesToUuid(b);
}

module.exports = v1;


/***/ }),

/***/ "../../node_modules/uuid/v4.js":
/*!*******************************************************!*\
  !*** /home/runner/work/ui/ui/node_modules/uuid/v4.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var rng = __webpack_require__(/*! ./lib/rng */ "../../node_modules/uuid/lib/rng-browser.js");
var bytesToUuid = __webpack_require__(/*! ./lib/bytesToUuid */ "../../node_modules/uuid/lib/bytesToUuid.js");

function v4(options, buf, offset) {
  var i = buf && offset || 0;

  if (typeof(options) == 'string') {
    buf = options === 'binary' ? new Array(16) : null;
    options = null;
  }
  options = options || {};

  var rnds = options.random || (options.rng || rng)();

  // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
  rnds[6] = (rnds[6] & 0x0f) | 0x40;
  rnds[8] = (rnds[8] & 0x3f) | 0x80;

  // Copy bytes to buffer, if provided
  if (buf) {
    for (var ii = 0; ii < 16; ++ii) {
      buf[i + ii] = rnds[ii];
    }
  }

  return buf || bytesToUuid(rnds);
}

module.exports = v4;


/***/ }),

/***/ "./src/AboutDialog/AboutDialog.connect.js":
/*!************************************************!*\
  !*** ./src/AboutDialog/AboutDialog.connect.js ***!
  \************************************************/
/*! exports provided: mapStateToProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapStateToProps", function() { return mapStateToProps; });
/* harmony import */ var _talend_react_cmf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @talend/react-cmf */ "@talend/react-cmf");
/* harmony import */ var _talend_react_cmf__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_talend_react_cmf__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _AboutDialog_container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AboutDialog.container */ "./src/AboutDialog/AboutDialog.container.js");
/* harmony import */ var _AboutDialog_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AboutDialog.constant */ "./src/AboutDialog/AboutDialog.constant.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var mapStateToProps = function mapStateToProps(state) {
  return _objectSpread({}, _talend_react_cmf__WEBPACK_IMPORTED_MODULE_0___default.a.selectors.collections.toJS(state, _AboutDialog_constant__WEBPACK_IMPORTED_MODULE_2__["default"].COLLECTION_ID));
};
var connected = Object(_talend_react_cmf__WEBPACK_IMPORTED_MODULE_0__["cmfConnect"])({
  defaultState: _AboutDialog_container__WEBPACK_IMPORTED_MODULE_1__["DEFAULT_STATE"],
  defaultProps: {
    saga: 'AboutDialog#default'
  },
  mapStateToProps: mapStateToProps,
  omitCMFProps: true,
  withComponentRegistry: true,
  withDispatch: true,
  withDispatchActionCreator: true,
  withComponentId: true
})(_AboutDialog_container__WEBPACK_IMPORTED_MODULE_1__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (connected);

/***/ }),

/***/ "./src/AboutDialog/AboutDialog.constant.js":
/*!*************************************************!*\
  !*** ./src/AboutDialog/AboutDialog.constant.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  COLLECTION_ID: 'ABOUT_DIALOG_COLLECTION',
  ABOUT_DIALOG_SHOW: 'ABOUT_DIALOG_SHOW',
  ABOUT_DIALOG_HIDE: 'ABOUT_DIALOG_HIDE'
});

/***/ }),

/***/ "./src/AboutDialog/AboutDialog.container.js":
/*!**************************************************!*\
  !*** ./src/AboutDialog/AboutDialog.container.js ***!
  \**************************************************/
/*! exports provided: DEFAULT_STATE, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_STATE", function() { return DEFAULT_STATE; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! immutable */ "immutable");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _talend_react_cmf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @talend/react-cmf */ "@talend/react-cmf");
/* harmony import */ var _talend_react_cmf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_talend_react_cmf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _AboutDialog_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AboutDialog.constant */ "./src/AboutDialog/AboutDialog.constant.js");
/* harmony import */ var _talend_react_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @talend/react-components */ "@talend/react-components");
/* harmony import */ var _talend_react_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_talend_react_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








var DEFAULT_STATE = new immutable__WEBPACK_IMPORTED_MODULE_2__["Map"]({
  expanded: false
});

var AboutDialog = /*#__PURE__*/function (_React$Component) {
  _inherits(AboutDialog, _React$Component);

  var _super = _createSuper(AboutDialog);

  function AboutDialog(props) {
    var _this;

    _classCallCheck(this, AboutDialog);

    _this = _super.call(this, props);
    _this.toggle = _this.toggle.bind(_assertThisInitialized(_this));
    _this.hide = _this.hide.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(AboutDialog, [{
    key: "toggle",
    value: function toggle() {
      this.props.setState(function (_ref) {
        var state = _ref.state;
        return {
          expanded: !state.get('expanded')
        };
      });
    }
  }, {
    key: "hide",
    value: function hide() {
      this.props.dispatch({
        type: _AboutDialog_constant__WEBPACK_IMPORTED_MODULE_4__["default"].ABOUT_DIALOG_HIDE
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          state = _this$props.state,
          props = _objectWithoutProperties(_this$props, ["state"]);

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_talend_react_components__WEBPACK_IMPORTED_MODULE_5__["AboutDialog"], _extends({
        onToggle: this.toggle,
        onHide: this.hide,
        expanded: state.get('expanded'),
        show: state.get('show'),
        loading: state.get('loading')
      }, Object(lodash__WEBPACK_IMPORTED_MODULE_6__["omit"])(props, _talend_react_cmf__WEBPACK_IMPORTED_MODULE_3__["cmfConnect"].INJECTED_PROPS)));
    }
  }]);

  return AboutDialog;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

_defineProperty(AboutDialog, "displayName", 'Container(AboutDialog)');

_defineProperty(AboutDialog, "propTypes", _objectSpread({
  icon: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  copyrights: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
}, _talend_react_cmf__WEBPACK_IMPORTED_MODULE_3__["cmfConnect"].propTypes));

/* harmony default export */ __webpack_exports__["default"] = (AboutDialog);

/***/ }),

/***/ "./src/AboutDialog/AboutDialog.sagas.js":
/*!**********************************************!*\
  !*** ./src/AboutDialog/AboutDialog.sagas.js ***!
  \**********************************************/
/*! exports provided: fetch, show, hide, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetch", function() { return fetch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "show", function() { return show; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hide", function() { return hide; });
/* harmony import */ var _talend_react_cmf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @talend/react-cmf */ "@talend/react-cmf");
/* harmony import */ var _talend_react_cmf__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_talend_react_cmf__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _AboutDialog_connect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AboutDialog.connect */ "./src/AboutDialog/AboutDialog.connect.js");
/* harmony import */ var _AboutDialog_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AboutDialog.constant */ "./src/AboutDialog/AboutDialog.constant.js");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-saga */ "redux-saga");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_3__);
var _marked = /*#__PURE__*/regeneratorRuntime.mark(fetch),
    _marked2 = /*#__PURE__*/regeneratorRuntime.mark(show),
    _marked3 = /*#__PURE__*/regeneratorRuntime.mark(hide),
    _marked4 = /*#__PURE__*/regeneratorRuntime.mark(defaultHandler);




/**
 * This saga takes care of fetching versions for the AboutDialog
 * container according to the provided versions URL in the action payload.
 * @param {Object} action
 */


var _effects = redux_saga__WEBPACK_IMPORTED_MODULE_3__["effects"],
    all = _effects.all,
    call = _effects.call,
    put = _effects.put,
    takeEvery = _effects.takeEvery,
    take = _effects.take;
function fetch(_ref) {
  var url, _yield$call, response, data;

  return regeneratorRuntime.wrap(function fetch$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          url = _ref.url;
          _context.next = 3;
          return put(_AboutDialog_connect__WEBPACK_IMPORTED_MODULE_1__["default"].setStateAction({
            loading: true
          }));

        case 3:
          _context.next = 5;
          return call(_talend_react_cmf__WEBPACK_IMPORTED_MODULE_0___default.a.sagas.http.get, url);

        case 5:
          _yield$call = _context.sent;
          response = _yield$call.response;
          data = _yield$call.data;

          if (!response.ok) {
            _context.next = 13;
            break;
          }

          _context.next = 11;
          return put(_talend_react_cmf__WEBPACK_IMPORTED_MODULE_0___default.a.actions.collections.addOrReplace(_AboutDialog_constant__WEBPACK_IMPORTED_MODULE_2__["default"].COLLECTION_ID, {
            version: data.displayVersion,
            services: data.services.map(function (_ref2) {
              var serviceName = _ref2.serviceName,
                  buildId = _ref2.buildId,
                  versionId = _ref2.versionId;
              return {
                name: serviceName,
                version: versionId,
                build: buildId
              };
            })
          }));

        case 11:
          _context.next = 13;
          return put(_AboutDialog_connect__WEBPACK_IMPORTED_MODULE_1__["default"].setStateAction({
            loading: false
          }));

        case 13:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}
function show(action) {
  return regeneratorRuntime.wrap(function show$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return all([put(_AboutDialog_connect__WEBPACK_IMPORTED_MODULE_1__["default"].setStateAction({
            show: true
          })), call(fetch, action)]);

        case 2:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2);
}
function hide() {
  return regeneratorRuntime.wrap(function hide$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return put(_AboutDialog_connect__WEBPACK_IMPORTED_MODULE_1__["default"].setStateAction({
            show: false
          }));

        case 2:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3);
}

function defaultHandler() {
  return regeneratorRuntime.wrap(function defaultHandler$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return takeEvery(_AboutDialog_constant__WEBPACK_IMPORTED_MODULE_2__["default"].ABOUT_DIALOG_SHOW, show);

        case 2:
          _context4.next = 4;
          return takeEvery(_AboutDialog_constant__WEBPACK_IMPORTED_MODULE_2__["default"].ABOUT_DIALOG_HIDE, hide);

        case 4:
          _context4.next = 6;
          return take('DO_NOT_QUIT');

        case 6:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked4);
}

/* harmony default export */ __webpack_exports__["default"] = ({
  'AboutDialog#default': defaultHandler
});

/***/ }),

/***/ "./src/AboutDialog/index.js":
/*!**********************************!*\
  !*** ./src/AboutDialog/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AboutDialog_connect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AboutDialog.connect */ "./src/AboutDialog/AboutDialog.connect.js");
/* harmony import */ var _AboutDialog_sagas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AboutDialog.sagas */ "./src/AboutDialog/AboutDialog.sagas.js");
/* harmony import */ var _AboutDialog_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AboutDialog.constant */ "./src/AboutDialog/AboutDialog.constant.js");



_AboutDialog_connect__WEBPACK_IMPORTED_MODULE_0__["default"].sagas = _AboutDialog_sagas__WEBPACK_IMPORTED_MODULE_1__["default"];
_AboutDialog_connect__WEBPACK_IMPORTED_MODULE_0__["default"].constants = _AboutDialog_constant__WEBPACK_IMPORTED_MODULE_2__["default"];
/* harmony default export */ __webpack_exports__["default"] = (_AboutDialog_connect__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/Action/Action.connect.js":
/*!**************************************!*\
  !*** ./src/Action/Action.connect.js ***!
  \**************************************/
/*! exports provided: mapStateToProps, mergeProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapStateToProps", function() { return mapStateToProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeProps", function() { return mergeProps; });
/* harmony import */ var _talend_react_cmf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @talend/react-cmf */ "@talend/react-cmf");
/* harmony import */ var _talend_react_cmf__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_talend_react_cmf__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _talend_react_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @talend/react-components */ "@talend/react-components");
/* harmony import */ var _talend_react_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_talend_react_components__WEBPACK_IMPORTED_MODULE_1__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



function mapStateToProps(state, ownProps) {
  if (ownProps.actionId) {
    return _talend_react_cmf__WEBPACK_IMPORTED_MODULE_0___default.a.action.getActionInfo({
      registry: _talend_react_cmf__WEBPACK_IMPORTED_MODULE_0___default.a.registry.getRegistry(),
      store: {
        getState: function getState() {
          return state;
        }
      }
    }, ownProps.actionId);
  }

  return {};
}
function mergeProps(stateProps, dispatchProps, ownProps) {
  var props = _objectSpread(_objectSpread(_objectSpread({}, ownProps), stateProps), dispatchProps);

  delete props.actionId;
  return props;
}
/* harmony default export */ __webpack_exports__["default"] = (Object(_talend_react_cmf__WEBPACK_IMPORTED_MODULE_0__["cmfConnect"])({
  componentId: function componentId(ownProps) {
    return ownProps.componentId || ownProps.actionId || ownProps.id;
  },
  mapStateToProps: mapStateToProps,
  mergeProps: mergeProps,
  omitCMFProps: true,
  withComponentRegistry: true,
  withDispatch: true,
  withDispatchActionCreator: true,
  withComponentId: true
})(_talend_react_components__WEBPACK_IMPORTED_MODULE_1__["Action"]));

/***/ }),

/***/ "./src/Action/index.js":
/*!*****************************!*\
  !*** ./src/Action/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Action_connect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Action.connect */ "./src/Action/Action.connect.js");

/* harmony default export */ __webpack_exports__["default"] = (_Action_connect__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/ActionBar/ActionBar.connect.js":
/*!********************************************!*\
  !*** ./src/ActionBar/ActionBar.connect.js ***!
  \********************************************/
/*! exports provided: mapStateToProps, mergeProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapStateToProps", function() { return mapStateToProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeProps", function() { return mergeProps; });
/* harmony import */ var _talend_react_cmf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @talend/react-cmf */ "@talend/react-cmf");
/* harmony import */ var _talend_react_cmf__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_talend_react_cmf__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Action */ "./src/Action/index.js");
/* harmony import */ var _Actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Actions */ "./src/Actions/index.js");
/* harmony import */ var _ActionDropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ActionDropdown */ "./src/ActionDropdown/index.js");
/* harmony import */ var _ActionSplitDropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ActionSplitDropdown */ "./src/ActionSplitDropdown/index.js");
/* harmony import */ var _renderers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../renderers */ "./src/renderers.js");
/* harmony import */ var _talend_react_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @talend/react-components */ "@talend/react-components");
/* harmony import */ var _talend_react_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_talend_react_components__WEBPACK_IMPORTED_MODULE_6__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








var renderers = {
  Action: _Action__WEBPACK_IMPORTED_MODULE_1__["default"],
  Actions: _Actions__WEBPACK_IMPORTED_MODULE_2__["default"],
  ActionDropdown: _ActionDropdown__WEBPACK_IMPORTED_MODULE_3__["default"],
  ActionSplitDropdown: _ActionSplitDropdown__WEBPACK_IMPORTED_MODULE_4__["default"]
};

function getAction(actionId) {
  if (typeof actionId === 'string') {
    return {
      actionId: actionId
    };
  }

  return actionId;
}

function mapStateToProps(state, _ref) {
  var actionIds = _ref.actionIds;
  var props = {
    renderers: Object(_renderers__WEBPACK_IMPORTED_MODULE_5__["default"])(renderers)
  };

  if (actionIds) {
    props.actions = {};
    var left = actionIds.left,
        right = actionIds.right;

    if (left) {
      props.actions.left = left.map(getAction);
    }

    if (right) {
      props.actions.right = right.map(getAction);
    }
  }

  return props;
}
function mergeProps(stateProps, dispatchProps, ownProps) {
  var props = _objectSpread(_objectSpread(_objectSpread({}, ownProps), stateProps), dispatchProps);

  delete props.actionIds;
  return props;
}
/* harmony default export */ __webpack_exports__["default"] = (Object(_talend_react_cmf__WEBPACK_IMPORTED_MODULE_0__["cmfConnect"])({
  mapStateToProps: mapStateToProps,
  mergeProps: mergeProps,
  omitCMFProps: true,
  withComponentRegistry: true,
  withDispatch: true,
  withDispatchActionCreator: true,
  withComponentId: true
})(_talend_react_components__WEBPACK_IMPORTED_MODULE_6__["ActionBar"]));

/***/ }),

/***/ "./src/ActionBar/index.js":
/*!********************************!*\
  !*** ./src/ActionBar/index.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ActionBar_connect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ActionBar.connect */ "./src/ActionBar/ActionBar.connect.js");

/* harmony default export */ __webpack_exports__["default"] = (_ActionBar_connect__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/ActionButton/ActionButton.connect.js":
/*!**************************************************!*\
  !*** ./src/ActionButton/ActionButton.connect.js ***!
  \**************************************************/
/*! exports provided: mapStateToProps, mergeProps, ContainerActionButton, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapStateToProps", function() { return mapStateToProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeProps", function() { return mergeProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContainerActionButton", function() { return ContainerActionButton; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _talend_react_cmf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @talend/react-cmf */ "@talend/react-cmf");
/* harmony import */ var _talend_react_cmf__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_talend_react_cmf__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _talend_react_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @talend/react-components */ "@talend/react-components");
/* harmony import */ var _talend_react_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_talend_react_components__WEBPACK_IMPORTED_MODULE_3__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





function mapStateToProps(state, ownProps) {
  var props = {};

  if (ownProps.actionId) {
    props = _talend_react_cmf__WEBPACK_IMPORTED_MODULE_2___default.a.action.getActionInfo({
      registry: _talend_react_cmf__WEBPACK_IMPORTED_MODULE_2___default.a.registry.getRegistry(),
      store: {
        getState: function getState() {
          return state;
        }
      }
    }, ownProps.actionId);
  }

  return props;
}
function mergeProps(stateProps, dispatchProps, ownProps) {
  var props = _objectSpread(_objectSpread(_objectSpread({}, ownProps), stateProps), dispatchProps);

  delete props.actionId;
  return props;
}
function ContainerActionButton(props) {
  var newProps = _objectSpread({}, props);

  if (!newProps.onClick && (props.actionCreator || props.payload)) {
    newProps.onClick = function (event, data) {
      if (props.actionCreator) {
        props.dispatchActionCreator(props.actionCreator, event, data);
      } else {
        props.dispatch(_objectSpread({
          model: props.model
        }, props.payload));
      }
    };
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_talend_react_components__WEBPACK_IMPORTED_MODULE_3__["ActionButton"], newProps);
}
ContainerActionButton.displayName = 'Container(ActionButton)';
ContainerActionButton.propTypes = {
  actionCreator: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  dispatch: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  dispatchActionCreator: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  model: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  payload: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_talend_react_cmf__WEBPACK_IMPORTED_MODULE_2__["cmfConnect"])({
  mapStateToProps: mapStateToProps,
  mergeProps: mergeProps,
  omitCMFProps: true,
  withComponentRegistry: true,
  withDispatch: true,
  withDispatchActionCreator: true
})(ContainerActionButton));

/***/ }),

/***/ "./src/ActionButton/index.js":
/*!***********************************!*\
  !*** ./src/ActionButton/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ActionButton_connect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ActionButton.connect */ "./src/ActionButton/ActionButton.connect.js");

/* harmony default export */ __webpack_exports__["default"] = (_ActionButton_connect__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/ActionDropdown/ActionDropdown.connect.js":
/*!******************************************************!*\
  !*** ./src/ActionDropdown/ActionDropdown.connect.js ***!
  \******************************************************/
/*! exports provided: mapStateToProps, mergeProps, ContainerActionDropdown, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapStateToProps", function() { return mapStateToProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeProps", function() { return mergeProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContainerActionDropdown", function() { return ContainerActionDropdown; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_immutable_proptypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-immutable-proptypes */ "../../node_modules/react-immutable-proptypes/dist/ImmutablePropTypes.js");
/* harmony import */ var react_immutable_proptypes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_immutable_proptypes__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _talend_react_cmf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @talend/react-cmf */ "@talend/react-cmf");
/* harmony import */ var _talend_react_cmf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_talend_react_cmf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _actionOnClick__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actionOnClick */ "./src/actionOnClick.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _talend_react_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @talend/react-components */ "@talend/react-components");
/* harmony import */ var _talend_react_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_talend_react_components__WEBPACK_IMPORTED_MODULE_6__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








function mapStateToProps(state) {
  var ownProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var props = {};
  var context = {
    registry: _talend_react_cmf__WEBPACK_IMPORTED_MODULE_3___default.a.registry.getRegistry(),
    store: {
      getState: function getState() {
        return state;
      }
    }
  };

  if (ownProps.actionId) {
    // deprecated
    props = _talend_react_cmf__WEBPACK_IMPORTED_MODULE_3___default.a.action.getActionInfo(context, ownProps.actionId);
  }

  var actionIds = ownProps.actionIds || props.actionIds;

  if (actionIds) {
    // deprecated
    props.items = actionIds.map(function (itemId) {
      return _talend_react_cmf__WEBPACK_IMPORTED_MODULE_3___default.a.action.getActionInfo(context, itemId);
    });
  }

  return props;
}
function mergeProps(stateProps, dispatchProps, ownProps) {
  var props = _objectSpread(_objectSpread(_objectSpread({}, ownProps), stateProps), dispatchProps);

  if (props.actionId) {
    delete props.actionId;
  }

  if (props.actionIds) {
    delete props.actionIds;
  }

  return props;
}
function ContainerActionDropdown(_ref) {
  var items = _ref.items,
      props = _objectWithoutProperties(_ref, ["items"]);

  var safeProps = Object(lodash__WEBPACK_IMPORTED_MODULE_5__["omit"])(props, _talend_react_cmf__WEBPACK_IMPORTED_MODULE_3__["cmfConnect"].INJECTED_PROPS);

  if (items) {
    // keep initial object as it can be immutable and have a prototype
    var clikableItems = items.map(function (item) {
      return _extends(item, Object(_actionOnClick__WEBPACK_IMPORTED_MODULE_4__["default"])(item, props));
    });
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_talend_react_components__WEBPACK_IMPORTED_MODULE_6__["ActionDropdown"], _extends({
      items: clikableItems
    }, safeProps));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_talend_react_components__WEBPACK_IMPORTED_MODULE_6__["ActionDropdown"], safeProps);
}
ContainerActionDropdown.displayName = 'Container(ActionDropdown)';
ContainerActionDropdown.propTypes = {
  items: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object), react_immutable_proptypes__WEBPACK_IMPORTED_MODULE_2___default.a.list]),
  noCaret: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  pullRight: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  hideLabel: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_talend_react_cmf__WEBPACK_IMPORTED_MODULE_3__["cmfConnect"])({
  mapStateToProps: mapStateToProps,
  mergeProps: mergeProps,
  omitCMFProps: true,
  withComponentRegistry: true,
  withDispatch: true,
  withDispatchActionCreator: true,
  withComponentId: true
})(ContainerActionDropdown));

/***/ }),

/***/ "./src/ActionDropdown/index.js":
/*!*************************************!*\
  !*** ./src/ActionDropdown/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ActionDropdown_connect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ActionDropdown.connect */ "./src/ActionDropdown/ActionDropdown.connect.js");

/* harmony default export */ __webpack_exports__["default"] = (_ActionDropdown_connect__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/ActionFile/ActionFile.connect.js":
/*!**********************************************!*\
  !*** ./src/ActionFile/ActionFile.connect.js ***!
  \**********************************************/
/*! exports provided: mapStateToProps, mergeProps, ContainerActionFile, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapStateToProps", function() { return mapStateToProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeProps", function() { return mergeProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContainerActionFile", function() { return ContainerActionFile; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _talend_react_cmf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @talend/react-cmf */ "@talend/react-cmf");
/* harmony import */ var _talend_react_cmf__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_talend_react_cmf__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _talend_react_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @talend/react-components */ "@talend/react-components");
/* harmony import */ var _talend_react_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_talend_react_components__WEBPACK_IMPORTED_MODULE_3__);
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





function mapStateToProps(state, ownProps) {
  if (!ownProps.actionId) {
    return {};
  }

  return _talend_react_cmf__WEBPACK_IMPORTED_MODULE_2___default.a.action.getActionInfo({
    registry: _talend_react_cmf__WEBPACK_IMPORTED_MODULE_2___default.a.registry.getRegistry(),
    store: {
      getState: function getState() {
        return state;
      }
    }
  }, ownProps.actionId);
}
function mergeProps(stateProps, dispatchProps, ownProps) {
  var props = _objectSpread(_objectSpread(_objectSpread({}, ownProps), stateProps), dispatchProps);

  delete props.actionId;
  props.name = stateProps.name;
  return props;
}
function ContainerActionFile(_ref) {
  var onChange = _ref.onChange,
      props = _objectWithoutProperties(_ref, ["onChange"]);

  var newProps = _objectSpread({}, props);

  if (!onChange) {
    newProps.onChange = function (event, data) {
      if (props.actionCreator) {
        props.dispatchActionCreator(props.actionCreator, event, data);
      } else {
        props.dispatch(_objectSpread(_objectSpread({
          model: props.model
        }, props.payload), {}, {
          file: data
        }));
      }
    };
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_talend_react_components__WEBPACK_IMPORTED_MODULE_3__["ActionFile"], newProps);
}
ContainerActionFile.displayName = 'ContainerActionFile';
ContainerActionFile.propTypes = {
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  actionCreator: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  dispatch: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  dispatchActionCreator: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  model: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  payload: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_talend_react_cmf__WEBPACK_IMPORTED_MODULE_2__["cmfConnect"])({
  mapStateToProps: mapStateToProps,
  mergeProps: mergeProps,
  omitCMFProps: true,
  withComponentRegistry: true,
  withDispatch: true,
  withDispatchActionCreator: true,
  withComponentId: true
})(ContainerActionFile));

/***/ }),

/***/ "./src/ActionFile/index.js":
/*!*********************************!*\
  !*** ./src/ActionFile/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ActionFile_connect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ActionFile.connect */ "./src/ActionFile/ActionFile.connect.js");

/* harmony default export */ __webpack_exports__["default"] = (_ActionFile_connect__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/ActionIconToggle/ActionIconToggle.connect.js":
/*!**********************************************************!*\
  !*** ./src/ActionIconToggle/ActionIconToggle.connect.js ***!
  \**********************************************************/
/*! exports provided: mapStateToProps, mergeProps, ContainerActionIconToggle, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapStateToProps", function() { return mapStateToProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeProps", function() { return mergeProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContainerActionIconToggle", function() { return ContainerActionIconToggle; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _talend_react_cmf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @talend/react-cmf */ "@talend/react-cmf");
/* harmony import */ var _talend_react_cmf__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_talend_react_cmf__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _talend_react_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @talend/react-components */ "@talend/react-components");
/* harmony import */ var _talend_react_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_talend_react_components__WEBPACK_IMPORTED_MODULE_3__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





function mapStateToProps(state, ownProps) {
  var props = {};

  if (ownProps.actionId) {
    props = _talend_react_cmf__WEBPACK_IMPORTED_MODULE_2___default.a.action.getActionInfo({
      registry: _talend_react_cmf__WEBPACK_IMPORTED_MODULE_2___default.a.registry.getRegistry(),
      store: {
        getState: function getState() {
          return state;
        }
      }
    }, ownProps.actionId);
  }

  return props;
}
function mergeProps(stateProps, dispatchProps, ownProps) {
  var props = _objectSpread(_objectSpread(_objectSpread({}, ownProps), stateProps), dispatchProps);

  delete props.actionId;
  return props;
}
function ContainerActionIconToggle(props) {
  var newProps = _objectSpread({}, props);

  if (!newProps.onClick) {
    newProps.onClick = function (event, data) {
      if (props.actionCreator) {
        props.dispatchActionCreator(props.actionCreator, event, data);
      } else {
        props.dispatch(props.payload);
      }
    };
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_talend_react_components__WEBPACK_IMPORTED_MODULE_3__["ActionIconToggle"], newProps);
}
ContainerActionIconToggle.displayName = 'Container(ActionIconToggle)';
ContainerActionIconToggle.propTypes = {
  actionCreator: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  dispatchActionCreator: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  dispatch: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  payload: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_talend_react_cmf__WEBPACK_IMPORTED_MODULE_2__["cmfConnect"])({
  mapStateToProps: mapStateToProps,
  mergeProps: mergeProps,
  omitCMFProps: true,
  withComponentRegistry: true,
  withDispatch: true,
  withDispatchActionCreator: true,
  withComponentId: true
})(ContainerActionIconToggle));

/***/ }),

/***/ "./src/ActionIconToggle/index.js":
/*!***************************************!*\
  !*** ./src/ActionIconToggle/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ActionIconToggle_connect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ActionIconToggle.connect */ "./src/ActionIconToggle/ActionIconToggle.connect.js");

/* harmony default export */ __webpack_exports__["default"] = (_ActionIconToggle_connect__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/ActionSplitDropdown/ActionSplitDropdown.connect.js":
/*!****************************************************************!*\
  !*** ./src/ActionSplitDropdown/ActionSplitDropdown.connect.js ***!
  \****************************************************************/
/*! exports provided: mapStateToProps, mergeProps, ContainerActionSplitDropdown, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapStateToProps", function() { return mapStateToProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeProps", function() { return mergeProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContainerActionSplitDropdown", function() { return ContainerActionSplitDropdown; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _talend_react_cmf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @talend/react-cmf */ "@talend/react-cmf");
/* harmony import */ var _talend_react_cmf__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_talend_react_cmf__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _actionOnClick__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actionOnClick */ "./src/actionOnClick.js");
/* harmony import */ var _talend_react_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @talend/react-components */ "@talend/react-components");
/* harmony import */ var _talend_react_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_talend_react_components__WEBPACK_IMPORTED_MODULE_4__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






function mapStateToProps(state) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      actionId = _ref.actionId,
      actionIds = _ref.actionIds;

  var props = {};
  var context = {
    registry: _talend_react_cmf__WEBPACK_IMPORTED_MODULE_2___default.a.registry.getRegistry(),
    store: {
      getState: function getState() {
        return state;
      }
    }
  };

  if (actionId) {
    props = _talend_react_cmf__WEBPACK_IMPORTED_MODULE_2___default.a.action.getActionInfo(context, actionId);
  }

  if (actionIds) {
    props.actionIds = actionIds;
  }

  if (props.actionIds) {
    props.items = props.actionIds.map(function (itemId) {
      return _talend_react_cmf__WEBPACK_IMPORTED_MODULE_2___default.a.action.getActionInfo(context, itemId);
    });
  }

  return props;
}
function mergeProps(stateProps, dispatchProps, ownProps) {
  var props = _objectSpread(_objectSpread(_objectSpread({}, ownProps), stateProps), dispatchProps);

  if (props.actionId) {
    delete props.actionId;
  }

  if (props.actionIds) {
    delete props.actionIds;
  }

  return props;
}
function ContainerActionSplitDropdown(props) {
  var newProps = _objectSpread({}, props);

  newProps = _objectSpread(_objectSpread({}, Object(_actionOnClick__WEBPACK_IMPORTED_MODULE_3__["default"])(newProps, props)), newProps);

  if (newProps.items) {
    newProps.items = props.items.map(function (item) {
      return _objectSpread(_objectSpread({}, Object(_actionOnClick__WEBPACK_IMPORTED_MODULE_3__["default"])(item, props)), item);
    });
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_talend_react_components__WEBPACK_IMPORTED_MODULE_4__["ActionSplitDropdown"], newProps);
}
ContainerActionSplitDropdown.displayName = 'Container(ActionSplitDropdown)';
ContainerActionSplitDropdown.propTypes = {
  items: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object)
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_talend_react_cmf__WEBPACK_IMPORTED_MODULE_2__["cmfConnect"])({
  mapStateToProps: mapStateToProps,
  mergeProps: mergeProps,
  omitCMFProps: true,
  withComponentRegistry: true,
  withDispatch: true,
  withDispatchActionCreator: true,
  withComponentId: true
})(ContainerActionSplitDropdown));

/***/ }),

/***/ "./src/ActionSplitDropdown/index.js":
/*!******************************************!*\
  !*** ./src/ActionSplitDropdown/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ActionSplitDropdown_connect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ActionSplitDropdown.connect */ "./src/ActionSplitDropdown/ActionSplitDropdown.connect.js");

/* harmony default export */ __webpack_exports__["default"] = (_ActionSplitDropdown_connect__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/Actions/Actions.connect.js":
/*!****************************************!*\
  !*** ./src/Actions/Actions.connect.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _talend_react_cmf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @talend/react-cmf */ "@talend/react-cmf");
/* harmony import */ var _talend_react_cmf__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_talend_react_cmf__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Action */ "./src/Action/index.js");
/* harmony import */ var _renderers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../renderers */ "./src/renderers.js");
/* harmony import */ var _talend_react_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @talend/react-components */ "@talend/react-components");
/* harmony import */ var _talend_react_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_talend_react_components__WEBPACK_IMPORTED_MODULE_3__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var renderers = {
  Action: _Action__WEBPACK_IMPORTED_MODULE_1__["default"]
};

function mapStateToProps(state, _ref) {
  var actionIds = _ref.actionIds,
      names = _ref.names,
      actions = _ref.actions;
  var props = {
    renderers: Object(_renderers__WEBPACK_IMPORTED_MODULE_2__["default"])(renderers)
  };
  var ids = actionIds || names;

  if (!actions && ids) {
    props.actions = ids.map(function (actionId) {
      return {
        actionId: actionId
      };
    });
  }

  return props;
}

function mergeProps(stateProps, dispatchProps, ownProps) {
  var props = _objectSpread(_objectSpread(_objectSpread({}, ownProps), stateProps), dispatchProps);

  delete props.actionIds;
  delete props.names;
  return props;
}

/* harmony default export */ __webpack_exports__["default"] = (Object(_talend_react_cmf__WEBPACK_IMPORTED_MODULE_0__["cmfConnect"])({
  mapStateToProps: mapStateToProps,
  mergeProps: mergeProps,
  omitCMFProps: true,
  withComponentRegistry: true,
  withDispatch: true,
  withDispatchActionCreator: true,
  withComponentId: true
})(_talend_react_components__WEBPACK_IMPORTED_MODULE_3__["Actions"]));

/***/ }),

/***/ "./src/Actions/index.js":
/*!******************************!*\
  !*** ./src/Actions/index.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Actions_connect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Actions.connect */ "./src/Actions/Actions.connect.js");

/* harmony default export */ __webpack_exports__["default"] = (_Actions_connect__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/AppLoader/AppLoader.connect.js":
/*!********************************************!*\
  !*** ./src/AppLoader/AppLoader.connect.js ***!
  \********************************************/
/*! exports provided: AppLoaderContainer, mapStateToProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppLoaderContainer", function() { return AppLoaderContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapStateToProps", function() { return mapStateToProps; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _talend_react_cmf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @talend/react-cmf */ "@talend/react-cmf");
/* harmony import */ var _talend_react_cmf__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_talend_react_cmf__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _AppLoader_saga__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AppLoader.saga */ "./src/AppLoader/AppLoader.saga.js");
/* harmony import */ var _talend_react_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @talend/react-components */ "@talend/react-components");
/* harmony import */ var _talend_react_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_talend_react_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







var CustomInject = Object(_talend_react_cmf__WEBPACK_IMPORTED_MODULE_2__["cmfConnect"])({
  omitCMFProps: true,
  withComponentRegistry: true,
  withDispatch: true,
  withDispatchActionCreator: true,
  withComponentId: true
})(_talend_react_components__WEBPACK_IMPORTED_MODULE_4__["Inject"]);

var appLoaderRenderer = function appLoaderRenderer(appLoaderElement) {
  return appLoaderElement;
};
/**
 * This container show the application's loader & bootstrap the app
 * @param {object} props the component props
 * @param {boolean} props.loading tell if the app loader should show the loader or the content
 * @param {function} props.renderer lets you customise the way we display the loader in the app
 * @param {object} props.children react element to show
 */


function AppLoaderContainer(_ref) {
  var loading = _ref.loading,
      _ref$renderer = _ref.renderer,
      renderer = _ref$renderer === void 0 ? appLoaderRenderer : _ref$renderer,
      children = _ref.children,
      rest = _objectWithoutProperties(_ref, ["loading", "renderer", "children"]);

  if (loading) {
    return renderer( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_talend_react_components__WEBPACK_IMPORTED_MODULE_4__["AppLoader"], rest));
  }

  var injected = _talend_react_components__WEBPACK_IMPORTED_MODULE_4__["Inject"].all(rest.getComponent, rest.components, CustomInject);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, injected('before-children'), children || null, injected('after-children'));
}
AppLoaderContainer.displayName = 'AppLoader';
AppLoaderContainer.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.element, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array]),
  loading: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  renderer: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};
/**
 * calculate the loading attribute with the given props
 * @param {object} state the redux state
 * @param {object} ownProps the component props
 */

function mapStateToProps(state, ownProps) {
  return {
    loading: !Object(lodash__WEBPACK_IMPORTED_MODULE_5__["get"])(ownProps, 'hasCollections', []).every(function (collectionName) {
      return state.cmf.collections.has(collectionName);
    })
  };
}
var connected = Object(_talend_react_cmf__WEBPACK_IMPORTED_MODULE_2__["cmfConnect"])({
  mapStateToProps: mapStateToProps,
  omitCMFProps: true,
  withComponentRegistry: true,
  withDispatch: true,
  withDispatchActionCreator: true,
  withComponentId: true
})(AppLoaderContainer);
connected.sagas = {
  appLoaderSaga: _AppLoader_saga__WEBPACK_IMPORTED_MODULE_3__["appLoaderSaga"]
};
/* harmony default export */ __webpack_exports__["default"] = (connected);

/***/ }),

/***/ "./src/AppLoader/AppLoader.saga.js":
/*!*****************************************!*\
  !*** ./src/AppLoader/AppLoader.saga.js ***!
  \*****************************************/
/*! exports provided: ACTION_CREATORS, SAGAS, WAIT_FOR, TAKE_ACTION, waitFor, handleStep, appLoaderSaga */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACTION_CREATORS", function() { return ACTION_CREATORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SAGAS", function() { return SAGAS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WAIT_FOR", function() { return WAIT_FOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TAKE_ACTION", function() { return TAKE_ACTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "waitFor", function() { return waitFor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleStep", function() { return handleStep; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appLoaderSaga", function() { return appLoaderSaga; });
/* harmony import */ var _talend_react_cmf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @talend/react-cmf */ "@talend/react-cmf");
/* harmony import */ var _talend_react_cmf__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_talend_react_cmf__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! invariant */ "../../node_modules/invariant/browser.js");
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(invariant__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-saga */ "redux-saga");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_2__);
function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var _marked = /*#__PURE__*/regeneratorRuntime.mark(waitFor),
    _marked2 = /*#__PURE__*/regeneratorRuntime.mark(handleStep),
    _marked3 = /*#__PURE__*/regeneratorRuntime.mark(appLoaderSaga);




var _effects = redux_saga__WEBPACK_IMPORTED_MODULE_2__["effects"],
    call = _effects.call,
    select = _effects.select,
    all = _effects.all,
    take = _effects.take;
var ACTION_CREATORS = 'actionCreators';
var SAGAS = 'sagas';
var WAIT_FOR = 'waitFor';
var TAKE_ACTION = 'takeAction';
/**
 * This function wait until a collection is here
 * @param {string} collectionName the name of the collection
 * @param {int} interval the interval to check again if the collection is there
 */

function waitFor(collectionName) {
  var interval,
      collection,
      _args = arguments;
  return regeneratorRuntime.wrap(function waitFor$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          interval = _args.length > 1 && _args[1] !== undefined ? _args[1] : 10;

        case 1:
          if (false) {}

          _context.next = 4;
          return select(_talend_react_cmf__WEBPACK_IMPORTED_MODULE_0___default.a.selectors.collections.get, collectionName);

        case 4:
          collection = _context.sent;

          if (!(collection !== undefined)) {
            _context.next = 7;
            break;
          }

          return _context.abrupt("break", 11);

        case 7:
          _context.next = 9;
          return call(redux_saga__WEBPACK_IMPORTED_MODULE_2__["delay"], interval);

        case 9:
          _context.next = 1;
          break;

        case 11:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}
/**
 * This function handle a specific step
 * @param {object} step a bootstrap step that could contain a actionCreator list or a waitList
 */

function handleStep(step) {
  return regeneratorRuntime.wrap(function handleStep$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          if (!step[SAGAS]) {
            _context2.next = 4;
            break;
          }

          _context2.next = 3;
          return all(step[SAGAS].map(function (saga) {
            return call(_talend_react_cmf__WEBPACK_IMPORTED_MODULE_0___default.a.sagas.get(saga));
          }));

        case 3:
          return _context2.abrupt("return", _context2.sent);

        case 4:
          if (!step[ACTION_CREATORS]) {
            _context2.next = 10;
            break;
          }

          _context2.next = 7;
          return all(step[ACTION_CREATORS].map(function (actionCreator) {
            return _talend_react_cmf__WEBPACK_IMPORTED_MODULE_0___default.a.sagas.putActionCreator(actionCreator);
          }));

        case 7:
          return _context2.abrupt("return", _context2.sent);

        case 10:
          if (!step[WAIT_FOR]) {
            _context2.next = 16;
            break;
          }

          _context2.next = 13;
          return all(step[WAIT_FOR].map(function (collectionName) {
            return call(waitFor, collectionName);
          }));

        case 13:
          return _context2.abrupt("return", _context2.sent);

        case 16:
          if (!step[TAKE_ACTION]) {
            _context2.next = 20;
            break;
          }

          _context2.next = 19;
          return all(step[TAKE_ACTION].map(function (actionName) {
            return take(actionName, actionName);
          }));

        case 19:
          return _context2.abrupt("return", _context2.sent);

        case 20:
          return _context2.abrupt("return", invariant__WEBPACK_IMPORTED_MODULE_1___default()("development" !== 'production', "Step object must have ".concat(ACTION_CREATORS, " or ").concat(WAIT_FOR, " attribute")));

        case 21:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2);
}
/**
 * This saga load the actionCreator or wait on some steps
 * @param {object} props the saga props
 * @param {array} props.steps an array of steps to handle
 */

function appLoaderSaga(_ref) {
  var steps, _iterator, _step, step;

  return regeneratorRuntime.wrap(function appLoaderSaga$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          steps = _ref.steps;
          _iterator = _createForOfIteratorHelper(steps);
          _context3.prev = 2;

          _iterator.s();

        case 4:
          if ((_step = _iterator.n()).done) {
            _context3.next = 10;
            break;
          }

          step = _step.value;
          _context3.next = 8;
          return call(handleStep, step);

        case 8:
          _context3.next = 4;
          break;

        case 10:
          _context3.next = 15;
          break;

        case 12:
          _context3.prev = 12;
          _context3.t0 = _context3["catch"](2);

          _iterator.e(_context3.t0);

        case 15:
          _context3.prev = 15;

          _iterator.f();

          return _context3.finish(15);

        case 18:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3, null, [[2, 12, 15, 18]]);
}

/***/ }),

/***/ "./src/AppLoader/index.js":
/*!********************************!*\
  !*** ./src/AppLoader/index.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AppLoader_connect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppLoader.connect */ "./src/AppLoader/AppLoader.connect.js");

/* harmony default export */ __webpack_exports__["default"] = (_AppLoader_connect__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/Badge/Badge.component.js":
/*!**************************************!*\
  !*** ./src/Badge/Badge.component.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _talend_react_cmf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @talend/react-cmf */ "@talend/react-cmf");
/* harmony import */ var _talend_react_cmf__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_talend_react_cmf__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _talend_react_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @talend/react-components */ "@talend/react-components");
/* harmony import */ var _talend_react_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_talend_react_components__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (Object(_talend_react_cmf__WEBPACK_IMPORTED_MODULE_0__["cmfConnect"])({
  omitCMFProps: true,
  withComponentRegistry: true,
  withDispatch: true,
  withDispatchActionCreator: true,
  withComponentId: true
})(_talend_react_components__WEBPACK_IMPORTED_MODULE_1__["Badge"]));

/***/ }),

/***/ "./src/Badge/index.js":
/*!****************************!*\
  !*** ./src/Badge/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Badge_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Badge.component */ "./src/Badge/Badge.component.js");

/* harmony default export */ __webpack_exports__["default"] = (_Badge_component__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/Breadcrumbs/Breadcrumbs.connect.js":
/*!************************************************!*\
  !*** ./src/Breadcrumbs/Breadcrumbs.connect.js ***!
  \************************************************/
/*! exports provided: ContainerBreadcrumbs, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContainerBreadcrumbs", function() { return ContainerBreadcrumbs; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _talend_react_cmf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @talend/react-cmf */ "@talend/react-cmf");
/* harmony import */ var _talend_react_cmf__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_talend_react_cmf__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! immutable */ "immutable");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _talend_react_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @talend/react-components */ "@talend/react-components");
/* harmony import */ var _talend_react_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_talend_react_components__WEBPACK_IMPORTED_MODULE_3__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





var DEFAULT_STATE = Object(immutable__WEBPACK_IMPORTED_MODULE_2__["Map"])();
function ContainerBreadcrumbs(_ref) {
  var _ref$state = _ref.state,
      state = _ref$state === void 0 ? DEFAULT_STATE : _ref$state,
      dispatchActionCreator = _ref.dispatchActionCreator,
      props = _objectWithoutProperties(_ref, ["state", "dispatchActionCreator"]);

  var items = state.get('items', props.items);

  var newProps = _objectSpread(_objectSpread({}, props), {}, {
    items: items && items.map(function (item) {
      return _objectSpread(_objectSpread({}, item), {}, {
        onClick: function onClick(event, data) {
          return dispatchActionCreator(item.actionCreator, event, data);
        }
      });
    }),
    loading: state.get('loading', props.loading),
    maxItems: state.get('maxItems', props.maxItems)
  });

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_talend_react_components__WEBPACK_IMPORTED_MODULE_3__["Breadcrumbs"], newProps);
}
ContainerBreadcrumbs.displayName = 'Breadcrumbs';
ContainerBreadcrumbs.propTypes = _objectSpread({}, _talend_react_cmf__WEBPACK_IMPORTED_MODULE_1__["cmfConnect"].propTypes);
/* harmony default export */ __webpack_exports__["default"] = (Object(_talend_react_cmf__WEBPACK_IMPORTED_MODULE_1__["cmfConnect"])({
  defaultState: Object(immutable__WEBPACK_IMPORTED_MODULE_2__["Map"])({
    items: [],
    maxItems: 10
  }),
  omitCMFProps: true,
  withComponentRegistry: true,
  withDispatchActionCreator: true,
  withComponentId: true
})(ContainerBreadcrumbs));

/***/ }),

/***/ "./src/Breadcrumbs/index.js":
/*!**********************************!*\
  !*** ./src/Breadcrumbs/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Breadcrumbs_connect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Breadcrumbs.connect */ "./src/Breadcrumbs/Breadcrumbs.connect.js");

/* harmony default export */ __webpack_exports__["default"] = (_Breadcrumbs_connect__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/ComponentForm/ComponentForm.actions.js":
/*!****************************************************!*\
  !*** ./src/ComponentForm/ComponentForm.actions.js ***!
  \****************************************************/
/*! exports provided: COMPONENT_FORM_SET_DIRTY, setComponentFormDirtyState, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMPONENT_FORM_SET_DIRTY", function() { return COMPONENT_FORM_SET_DIRTY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setComponentFormDirtyState", function() { return setComponentFormDirtyState; });
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var COMPONENT_FORM_SET_DIRTY = 'COMPONENT_FORM_SET_DIRTY';
/**
 * This action will change for a given componentForm name his dirty status
 * @param {string} componentId the component form id
 * @param {boolean} dirty the dirty state to apply
 */

function setComponentFormDirtyState(componentId, dirty) {
  if (typeof dirty !== 'boolean') {
    throw new Error("ComponentForm dirty state should be a boolean, received \"".concat(dirty, "\"(").concat(_typeof(dirty), ") instead"));
  }

  return {
    componentId: componentId,
    dirty: dirty,
    type: COMPONENT_FORM_SET_DIRTY
  };
}
/* harmony default export */ __webpack_exports__["default"] = ({
  setComponentFormDirtyState: setComponentFormDirtyState,
  COMPONENT_FORM_SET_DIRTY: COMPONENT_FORM_SET_DIRTY
});

/***/ }),

/***/ "./src/ComponentForm/ComponentForm.component.js":
/*!******************************************************!*\
  !*** ./src/ComponentForm/ComponentForm.component.js ***!
  \******************************************************/
/*! exports provided: DEFAULT_STATE, toJS, resolveNameForTitleMap, TCompForm, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_STATE", function() { return DEFAULT_STATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toJS", function() { return toJS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolveNameForTitleMap", function() { return resolveNameForTitleMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TCompForm", function() { return TCompForm; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _talend_react_cmf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @talend/react-cmf */ "@talend/react-cmf");
/* harmony import */ var _talend_react_cmf__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_talend_react_cmf__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _talend_react_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @talend/react-forms */ "@talend/react-forms");
/* harmony import */ var _talend_react_forms__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_talend_react_forms__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! immutable */ "immutable");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var memoize_one__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! memoize-one */ "../../node_modules/memoize-one/dist/memoize-one.esm.js");
/* harmony import */ var _kit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./kit */ "./src/ComponentForm/kit/index.js");
/* harmony import */ var _fields__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./fields */ "./src/ComponentForm/fields/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_8__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }










var TO_OMIT = ['definitionURL', 'uiSpecPath', 'submitURL', 'triggerULR', 'lang', 'customTriggers', 'dispatchOnChange'].concat(_toConsumableArray(_talend_react_cmf__WEBPACK_IMPORTED_MODULE_2__["cmfConnect"].INJECTED_PROPS));
var DEFAULT_STATE = new immutable__WEBPACK_IMPORTED_MODULE_4__["Map"]({
  dirty: false,
  initialState: new immutable__WEBPACK_IMPORTED_MODULE_4__["Map"]()
});
/**
 * Convert immutable object to js object
 */

function toJS(immutableObject) {
  if (!immutableObject) {
    return null;
  }

  return immutableObject.toJS();
}
/**
 * Insert titleMap name for corresponding value
 * Its key is prefixed by '$', this means that it's an internal property
 * @param schema The schema of the trigger input
 * @param properties All the form properties
 * @param value The input value
 */

function resolveNameForTitleMap(_ref) {
  var schema = _ref.schema,
      properties = _ref.properties,
      value = _ref.value;

  if (!schema.titleMap) {
    return;
  } // Here we add a field side by side with the value
  // to keep the title associated to the value


  var valueIsArray = Array.isArray(value);
  var uniformValue = valueIsArray ? value : [value];
  var names = uniformValue.map(function (nextValue) {
    return schema.titleMap.find(function (titleMap) {
      return titleMap.value === nextValue;
    });
  }).map(function (entry) {
    return entry && entry.name;
  });
  var parentKey = schema.key.slice();
  var key = parentKey.pop();
  var nameKey = "$".concat(key, "_name");
  var parentValue = _talend_react_forms__WEBPACK_IMPORTED_MODULE_3___default.a.UIForm.utils.properties.getValue(properties, {
    key: parentKey
  });

  if (names.some(function (name) {
    return name !== undefined;
  })) {
    parentValue[nameKey] = valueIsArray ? names : names[0];
  } else {
    delete parentValue[nameKey];
  }
}
var TCompForm = /*#__PURE__*/function (_React$Component) {
  _inherits(TCompForm, _React$Component);

  var _super = _createSuper(TCompForm);

  function TCompForm(props) {
    var _this;

    _classCallCheck(this, TCompForm);

    _this = _super.call(this, props);
    _this.state = {};
    _this.onTrigger = _this.onTrigger.bind(_assertThisInitialized(_this));
    _this.onChange = _this.onChange.bind(_assertThisInitialized(_this));
    _this.onSubmit = _this.onSubmit.bind(_assertThisInitialized(_this));
    _this.onReset = _this.onReset.bind(_assertThisInitialized(_this));
    _this.getUISpec = _this.getUISpec.bind(_assertThisInitialized(_this));
    _this.setupTrigger = _this.setupTrigger.bind(_assertThisInitialized(_this));

    _this.setupTrigger(props);

    _this.getMemoizedJsonSchema = Object(memoize_one__WEBPACK_IMPORTED_MODULE_5__["default"])(toJS);
    _this.getMemoizedUiSchema = Object(memoize_one__WEBPACK_IMPORTED_MODULE_5__["default"])(toJS);
    _this.getMemoizedInitialState = Object(memoize_one__WEBPACK_IMPORTED_MODULE_5__["default"])(toJS);
    return _this;
  }

  _createClass(TCompForm, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var nextProperties = nextProps.state.get('properties', Object(immutable__WEBPACK_IMPORTED_MODULE_4__["Map"])());

      if (this.props.state.get('properties') !== nextProperties) {
        this.setState({
          properties: nextProperties.toJS()
        });
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.triggerURL !== this.props.triggerURL || prevProps.customTriggers !== this.props.customTriggers) {
        this.setupTrigger(this.props);
      }

      if (this.props.definitionURL !== prevProps.definitionURL) {
        this.props.dispatch(_objectSpread(_objectSpread({
          type: TCompForm.ON_DEFINITION_URL_CHANGED
        }, this.props), {}, {
          properties: this.state.properties
        }));
      }
    }
  }, {
    key: "onChange",
    value: function onChange(_, payload) {
      if (!this.props.state.get('dirty')) {
        this.props.setState({
          dirty: true
        });
      }

      resolveNameForTitleMap(payload);
      this.setState({
        properties: payload.properties
      });

      if (this.props.dispatchOnChange) {
        this.props.dispatch(_objectSpread({
          type: TCompForm.ON_CHANGE,
          component: TCompForm.displayName,
          componentId: this.props.componentId
        }, payload));
      }
    }
  }, {
    key: "onTrigger",
    value: function onTrigger(event, payload) {
      var _this2 = this;

      this.props.dispatch(_objectSpread({
        type: TCompForm.ON_TRIGGER_BEGIN
      }, payload)); // Trigger definitions from tacokit can precise the fields that are impacted by the trigger.
      // Those fields are the jsonSchema path.
      // trigger = { options: [{ path: 'user.firstname' }, { path: 'user.lastname' }] }

      if (Array.isArray(Object(lodash__WEBPACK_IMPORTED_MODULE_8__["get"])(payload, 'trigger.options'))) {
        var updating = payload.trigger.options.map(function (op) {
          return op.path;
        });
        this.setState({
          updating: updating
        });
      }

      return this.trigger(event, payload).then(function (data) {
        _this2.props.dispatch(_objectSpread({
          type: TCompForm.ON_TRIGGER_END
        }, payload));

        if (data.jsonSchema || data.uiSchema) {
          _this2.props.setState(data);
        }

        return data;
      })["finally"](function () {
        _this2.setState({
          updating: []
        });
      });
    }
  }, {
    key: "onSubmit",
    value: function onSubmit(_, properties) {
      this.props.dispatch({
        type: TCompForm.ON_SUBMIT,
        component: TCompForm.displayName,
        componentId: this.props.componentId,
        properties: properties
      });
    }
  }, {
    key: "onReset",
    value: function onReset() {
      var _this3 = this;

      this.props.setState(function (prev) {
        return prev.state.set('jsonSchema', _this3.props.state.getIn(['initialState', 'jsonSchema'])).set('uiSchema', _this3.props.state.getIn(['initialState', 'uiSchema'])).set('properties', _this3.props.state.getIn(['initialState', 'properties'])).set('dirty', false);
      });
      this.setState({
        properties: this.props.state.getIn(['initialState', 'properties']).toJS()
      });
    }
  }, {
    key: "setupTrigger",
    value: function setupTrigger(props) {
      var config = _talend_react_cmf__WEBPACK_IMPORTED_MODULE_2___default.a.sagas.http.getDefaultConfig() || {};
      this.trigger = _kit__WEBPACK_IMPORTED_MODULE_6__["default"].createTriggers({
        url: props.triggerURL,
        customRegistry: props.customTriggers,
        headers: config.headers,
        lang: props.lang,
        security: {
          CSRFTokenCookieKey: props.CSRFTokenCookieKey,
          CSRFTokenHeaderKey: props.CSRFTokenHeaderKey
        }
      });
    }
  }, {
    key: "getUISpec",
    value: function getUISpec() {
      return {
        properties: this.state.properties,
        jsonSchema: this.getMemoizedJsonSchema(this.props.state.get('jsonSchema')),
        uiSchema: this.getMemoizedUiSchema(this.props.state.get('uiSchema'))
      };
    }
  }, {
    key: "render",
    value: function render() {
      var uiSpecs = this.getUISpec();

      if (!uiSpecs.jsonSchema) {
        var response = this.props.state.get('response');

        if (response) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
            className: "danger"
          }, response.get('statusText'));
        }

        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_talend_react_forms__WEBPACK_IMPORTED_MODULE_3___default.a, {
          loading: true,
          displayMode: this.props.displayMode
        });
      }

      var props = _objectSpread(_objectSpread({}, Object(lodash__WEBPACK_IMPORTED_MODULE_8__["omit"])(this.props, TO_OMIT)), {}, {
        data: uiSpecs,
        initialData: this.getMemoizedInitialState(this.props.state.get('initialState')),
        onTrigger: this.onTrigger,
        onChange: this.onChange,
        onSubmit: this.onSubmit,
        onReset: this.onReset,
        widgets: _objectSpread(_objectSpread({}, _fields__WEBPACK_IMPORTED_MODULE_7__["default"]), this.props.widgets),
        updating: this.state.updating
      });

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_talend_react_forms__WEBPACK_IMPORTED_MODULE_3___default.a, props);
    }
  }]);

  return TCompForm;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);
TCompForm.ON_CHANGE = 'TCOMP_FORM_CHANGE';
TCompForm.ON_SUBMIT = 'TCOMP_FORM_SUBMIT';
TCompForm.ON_SUBMIT_SUCCEED = 'TCOMP_FORM_SUBMIT_SUCCEED';
TCompForm.ON_SUBMIT_FAILED = 'TCOMP_FORM_SUBMIT_FAILED';
TCompForm.ON_TRIGGER_BEGIN = 'TCOMP_FORM_TRIGGER_BEGIN';
TCompForm.ON_TRIGGER_END = 'TCOMP_FORM_TRIGGER_END';
TCompForm.ON_DEFINITION_URL_CHANGED = 'TCOMP_FORM_DEFINITION_URL_CHANGE';
TCompForm.displayName = 'ComponentForm';
TCompForm.propTypes = _objectSpread(_objectSpread({}, _talend_react_cmf__WEBPACK_IMPORTED_MODULE_2__["cmfConnect"].propTypes), {}, {
  definitionURL: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  triggerURL: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  submitURL: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  uiSpecPath: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  lang: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  customTriggers: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  dispatchOnChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  CSRFTokenCookieKey: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  CSRFTokenHeaderKey: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
});
/* harmony default export */ __webpack_exports__["default"] = (Object(_talend_react_cmf__WEBPACK_IMPORTED_MODULE_2__["cmfConnect"])({
  defaultState: DEFAULT_STATE,
  defaultProps: {
    saga: 'ComponentForm#default'
  },
  omitCMFProps: true,
  withComponentRegistry: true,
  withDispatch: true,
  withDispatchActionCreator: true,
  withComponentId: true
})(TCompForm));

/***/ }),

/***/ "./src/ComponentForm/ComponentForm.sagas.js":
/*!**************************************************!*\
  !*** ./src/ComponentForm/ComponentForm.sagas.js ***!
  \**************************************************/
/*! exports provided: fetchDefinition, onDidMount, onFormSubmit, checkFormComponentId, handleSetDirtyState, handle, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchDefinition", function() { return fetchDefinition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onDidMount", function() { return onDidMount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onFormSubmit", function() { return onFormSubmit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkFormComponentId", function() { return checkFormComponentId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleSetDirtyState", function() { return handleSetDirtyState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handle", function() { return handle; });
/* harmony import */ var _talend_react_cmf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @talend/react-cmf */ "@talend/react-cmf");
/* harmony import */ var _talend_react_cmf__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_talend_react_cmf__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! immutable */ "immutable");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ComponentForm_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ComponentForm.component */ "./src/ComponentForm/ComponentForm.component.js");
/* harmony import */ var _ComponentForm_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ComponentForm.actions */ "./src/ComponentForm/ComponentForm.actions.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! redux-saga */ "redux-saga");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_5__);
var _marked = /*#__PURE__*/regeneratorRuntime.mark(fetchDefinition),
    _marked2 = /*#__PURE__*/regeneratorRuntime.mark(onDidMount),
    _marked3 = /*#__PURE__*/regeneratorRuntime.mark(onFormSubmit),
    _marked4 = /*#__PURE__*/regeneratorRuntime.mark(handleSetDirtyState),
    _marked5 = /*#__PURE__*/regeneratorRuntime.mark(handle);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





/**
 * @param {Action{definitionURL: String, uiSpecPath: String, componentId: String }} action
 */



var _effects = redux_saga__WEBPACK_IMPORTED_MODULE_5__["effects"],
    call = _effects.call,
    put = _effects.put,
    select = _effects.select,
    take = _effects.take,
    takeEvery = _effects.takeEvery,
    takeLatest = _effects.takeLatest;
function fetchDefinition(action) {
  var _yield$call, data, response, formSpec;

  return regeneratorRuntime.wrap(function fetchDefinition$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return call(_talend_react_cmf__WEBPACK_IMPORTED_MODULE_0___default.a.sagas.http.get, action.definitionURL);

        case 2:
          _yield$call = _context.sent;
          data = _yield$call.data;
          response = _yield$call.response;

          if (response.ok) {
            _context.next = 10;
            break;
          }

          _context.next = 8;
          return put(_ComponentForm_component__WEBPACK_IMPORTED_MODULE_2__["default"].setStateAction(function (prev) {
            return prev.set('jsonSchema').set('uiSchema').set('response', response).set('dirty', false);
          }, action.componentId));

        case 8:
          _context.next = 18;
          break;

        case 10:
          if (!action.uiSpecPath) {
            _context.next = 16;
            break;
          }

          formSpec = Object(lodash__WEBPACK_IMPORTED_MODULE_4__["get"])(data, action.uiSpecPath);
          _context.next = 14;
          return put(_ComponentForm_component__WEBPACK_IMPORTED_MODULE_2__["default"].setStateAction(_objectSpread({
            definition: data,
            initialState: formSpec
          }, formSpec), action.componentId));

        case 14:
          _context.next = 18;
          break;

        case 16:
          _context.next = 18;
          return put(_ComponentForm_component__WEBPACK_IMPORTED_MODULE_2__["default"].setStateAction(_objectSpread({
            initialState: data
          }, data), action.componentId));

        case 18:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}
function onDidMount(_ref) {
  var _ref$componentId, componentId, definitionURL, uiSpecPath, jsonSchema;

  return regeneratorRuntime.wrap(function onDidMount$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _ref$componentId = _ref.componentId, componentId = _ref$componentId === void 0 ? 'default' : _ref$componentId, definitionURL = _ref.definitionURL, uiSpecPath = _ref.uiSpecPath;
          _context2.next = 3;
          return select(function (state) {
            return _ComponentForm_component__WEBPACK_IMPORTED_MODULE_2__["default"].getState(state, componentId).get('jsonSchema');
          });

        case 3:
          jsonSchema = _context2.sent;

          if (jsonSchema) {
            _context2.next = 7;
            break;
          }

          _context2.next = 7;
          return fetchDefinition({
            definitionURL: definitionURL,
            componentId: componentId,
            uiSpecPath: uiSpecPath
          });

        case 7:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2);
}
function onFormSubmit(componentId, submitURL, action) {
  var prevState, getReduxState, _yield$call2, response, data;

  return regeneratorRuntime.wrap(function onFormSubmit$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          getReduxState = function _getReduxState() {
            return prevState;
          };

          if (!(action.componentId !== componentId)) {
            _context3.next = 3;
            break;
          }

          return _context3.abrupt("return");

        case 3:
          _context3.next = 5;
          return select();

        case 5:
          prevState = _context3.sent;
          _context3.next = 8;
          return put(_ComponentForm_component__WEBPACK_IMPORTED_MODULE_2__["default"].setStateAction(function (prev) {
            return prev.setIn(['initialState', 'jsonSchema'], prev.get('jsonSchema')).setIn(['initialState', 'uiSchema'], prev.get('uiSchema')).setIn(['initialState', 'properties'], Object(immutable__WEBPACK_IMPORTED_MODULE_1__["fromJS"])(action.properties));
          }, componentId)(undefined, getReduxState));

        case 8:
          if (submitURL) {
            _context3.next = 10;
            break;
          }

          return _context3.abrupt("return");

        case 10:
          _context3.next = 12;
          return call(_talend_react_cmf__WEBPACK_IMPORTED_MODULE_0___default.a.sagas.http.post, submitURL, action.properties);

        case 12:
          _yield$call2 = _context3.sent;
          response = _yield$call2.response;
          data = _yield$call2.data;
          _context3.next = 17;
          return put({
            type: response.ok ? _ComponentForm_component__WEBPACK_IMPORTED_MODULE_2__["default"].ON_SUBMIT_SUCCEED : _ComponentForm_component__WEBPACK_IMPORTED_MODULE_2__["default"].ON_SUBMIT_FAILED,
            data: data,
            formData: action.properties,
            response: response,
            componentId: componentId
          });

        case 17:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3);
}
/**
 * check that the formId and action type match with the provided actions
 * @param {String} componentId
 * @return {(Action{type: String, componentid: String}) => Bool}
 */

function checkFormComponentId(componentId, actionType) {
  return function matchActionComponentid(action) {
    return action.type === actionType && action.componentId === componentId;
  };
}
/**
 * This function handle a change of the dirty state for a given component form id
 * @param {object} reduxAction with a componentId (string) & the dirtyState (boolean) to apply
 */

function handleSetDirtyState(_ref2) {
  var componentId, dirty, componentFormState;
  return regeneratorRuntime.wrap(function handleSetDirtyState$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          componentId = _ref2.componentId, dirty = _ref2.dirty;
          _context4.next = 3;
          return select(_ComponentForm_component__WEBPACK_IMPORTED_MODULE_2__["default"].getState, componentId);

        case 3:
          componentFormState = _context4.sent;
          _context4.next = 6;
          return put(_ComponentForm_component__WEBPACK_IMPORTED_MODULE_2__["default"].setStateAction(componentFormState.set('dirty', !!dirty), componentId));

        case 6:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked4);
}
function handle(props) {
  return regeneratorRuntime.wrap(function handle$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return call(onDidMount, props);

        case 2:
          _context5.next = 4;
          return takeLatest(_ComponentForm_actions__WEBPACK_IMPORTED_MODULE_3__["COMPONENT_FORM_SET_DIRTY"], handleSetDirtyState);

        case 4:
          _context5.next = 6;
          return takeEvery(checkFormComponentId(props.componentId, _ComponentForm_component__WEBPACK_IMPORTED_MODULE_2__["default"].ON_DEFINITION_URL_CHANGED), fetchDefinition);

        case 6:
          _context5.next = 8;
          return takeLatest(_ComponentForm_component__WEBPACK_IMPORTED_MODULE_2__["default"].ON_SUBMIT, onFormSubmit, props.componentId, props.submitURL);

        case 8:
          _context5.next = 10;
          return take('DO_NOT_QUIT');

        case 10:
        case "end":
          return _context5.stop();
      }
    }
  }, _marked5);
}
/* harmony default export */ __webpack_exports__["default"] = ({
  'ComponentForm#default': handle
});

/***/ }),

/***/ "./src/ComponentForm/ComponentForm.selectors.js":
/*!******************************************************!*\
  !*** ./src/ComponentForm/ComponentForm.selectors.js ***!
  \******************************************************/
/*! exports provided: isComponentFormDirty, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isComponentFormDirty", function() { return isComponentFormDirty; });
/* harmony import */ var _ComponentForm_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ComponentForm.component */ "./src/ComponentForm/ComponentForm.component.js");

function isComponentFormDirty(state, componentName) {
  return _ComponentForm_component__WEBPACK_IMPORTED_MODULE_0__["default"].getState(state, componentName).get('dirty', false);
}
/* harmony default export */ __webpack_exports__["default"] = (isComponentFormDirty);

/***/ }),

/***/ "./src/ComponentForm/fields/MultiSelect/MultiSelect.component.js":
/*!***********************************************************************!*\
  !*** ./src/ComponentForm/fields/MultiSelect/MultiSelect.component.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MultiSelectField; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _talend_react_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @talend/react-forms */ "@talend/react-forms");
/* harmony import */ var _talend_react_forms__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_talend_react_forms__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _talend_react_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @talend/react-components */ "@talend/react-components");
/* harmony import */ var _talend_react_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_talend_react_components__WEBPACK_IMPORTED_MODULE_3__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }






var MultiSelectField = /*#__PURE__*/function (_React$Component) {
  _inherits(MultiSelectField, _React$Component);

  var _super = _createSuper(MultiSelectField);

  function MultiSelectField(props) {
    var _this;

    _classCallCheck(this, MultiSelectField);

    _this = _super.call(this, props);
    _this.state = {};
    _this.onTrigger = _this.onTrigger.bind(_assertThisInitialized(_this));
    _this.onTriggerResult = _this.onTriggerResult.bind(_assertThisInitialized(_this));
    _this.onChange = _this.onChange.bind(_assertThisInitialized(_this));
    _this.getTitleMap = _this.getTitleMap.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(MultiSelectField, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.onTrigger({
        type: 'didMount'
      });
    }
  }, {
    key: "onTrigger",
    value: function onTrigger(event) {
      var _this2 = this;

      _talend_react_forms__WEBPACK_IMPORTED_MODULE_2___default.a.UIForm.callTrigger(event, {
        eventNames: [event.type],
        triggersDefinitions: this.props.schema.triggers,
        onTrigger: this.onTriggerResult,
        onLoading: function onLoading(isLoading) {
          return _this2.setState({
            isLoading: isLoading
          });
        },
        onResponse: function onResponse(data) {
          return _this2.setState(data);
        }
      });
    }
  }, {
    key: "onTriggerResult",
    value: function onTriggerResult(event, trigger) {
      return this.props.onTrigger(event, {
        trigger: trigger,
        schema: this.props.schema,
        errors: this.props.errors,
        properties: this.props.properties
      });
    }
  }, {
    key: "onChange",
    value: function onChange(event, selected) {
      var payload = {
        schema: _objectSpread(_objectSpread({}, this.props.schema), {}, {
          titleMap: this.getTitleMap()
        }),
        value: selected
      };
      this.props.onChange(event, payload);
      this.props.onFinish(event, payload);
    }
  }, {
    key: "getTitleMap",
    value: function getTitleMap() {
      if (this.state.titleMap) {
        return this.state.titleMap;
      }

      var titleMap = this.props.schema.titleMap;

      if (titleMap && Object.keys(titleMap).length > 0) {
        return titleMap;
      }

      var _this$props$value = this.props.value,
          value = _this$props$value === void 0 ? [] : _this$props$value;
      var names = this.props.resolveName(value);
      return value.map(function (nextVal, index) {
        return {
          name: names[index],
          value: nextVal
        };
      });
    }
  }, {
    key: "getChildrenErrorMessage",
    value: function getChildrenErrorMessage() {
      var errors = this.props.errors.errors;

      if (!errors || errors.length === 0) {
        return undefined;
      }

      var key = this.props.schema.key.toString();
      return Object.entries(errors).filter(function (entry) {
        return entry[0].startsWith(key);
      }).map(function (entry) {
        return entry[1];
      }).join(', ');
    }
  }, {
    key: "render",
    value: function render() {
      var _Form$UIForm$Message$ = _talend_react_forms__WEBPACK_IMPORTED_MODULE_2___default.a.UIForm.Message.utils,
          generateDescriptionId = _Form$UIForm$Message$.generateDescriptionId,
          generateErrorId = _Form$UIForm$Message$.generateErrorId;
      var _this$props = this.props,
          id = _this$props.id,
          isValid = _this$props.isValid,
          errorMessage = _this$props.errorMessage,
          schema = _this$props.schema;
      var descriptionId = generateDescriptionId(id);
      var errorId = generateErrorId(id);
      var errorMsg = errorMessage || this.getChildrenErrorMessage();
      var isDeepValid = isValid && !errorMsg;
      var FieldTemplate = _talend_react_forms__WEBPACK_IMPORTED_MODULE_2___default.a.UIForm.FieldTemplate.DefaultModeTemplate;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FieldTemplate, {
        description: schema.description,
        descriptionId: descriptionId,
        errorId: errorId,
        errorMessage: errorMsg,
        id: id,
        isValid: isDeepValid,
        label: schema.title,
        required: schema.required
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_talend_react_components__WEBPACK_IMPORTED_MODULE_3__["MultiSelect"], {
        id: id,
        autoFocus: schema.autoFocus,
        disabled: schema.disabled,
        required: schema.required,
        placeholder: schema.placeholder,
        readOnly: schema.readOnly,
        restricted: schema.restricted,
        onBlur: this.onTrigger,
        onChange: this.onChange,
        onFocus: this.onTrigger,
        options: this.getTitleMap(),
        selected: this.props.value,
        isLoading: this.state.isLoading
      }));
    }
  }]);

  return MultiSelectField;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);



if (true) {
  MultiSelectField.propTypes = {
    id: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
    isValid: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
    errorMessage: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
    errors: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object,
    onChange: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
    onFinish: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
    onTrigger: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
    properties: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object,
    resolveName: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
    schema: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
      autoFocus: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
      description: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
      disabled: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
      key: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.array,
      placeholder: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
      readOnly: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
      required: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
      restricted: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
      title: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
      titleMap: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
        name: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,
        value: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired
      })),
      triggers: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
        onEvent: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string
      }))
    }),
    value: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string)
  };
}

MultiSelectField.defaultProps = {
  isValid: true,
  schema: {},
  value: [],
  resolveName: function resolveName(value) {
    return value;
  }
};

/***/ }),

/***/ "./src/ComponentForm/fields/MultiSelect/displayMode/TextMode.component.js":
/*!********************************************************************************!*\
  !*** ./src/ComponentForm/fields/MultiSelect/displayMode/TextMode.component.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MultiSelectTextMode; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _talend_react_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @talend/react-forms */ "@talend/react-forms");
/* harmony import */ var _talend_react_forms__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_talend_react_forms__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _talend_react_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @talend/react-components */ "@talend/react-components");
/* harmony import */ var _talend_react_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_talend_react_components__WEBPACK_IMPORTED_MODULE_3__);





function renderItem(props) {
  var item = _talend_react_components__WEBPACK_IMPORTED_MODULE_3__["VirtualizedList"].rowUtils.getRowData(props.parent, props.index);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_talend_react_components__WEBPACK_IMPORTED_MODULE_3__["Badge"], {
    style: props.style,
    key: props.index,
    label: item.name,
    selected: true
  });
}

renderItem.height = 35;
renderItem.propTypes = {
  parent: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object,
  style: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object,
  index: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number
};
function MultiSelectTextMode(props) {
  var names = props.resolveName(props.value);
  var titleMap = props.value.map(function (nextVal, index) {
    return {
      name: names[index],
      value: nextVal
    };
  });
  var FieldTemplate = _talend_react_forms__WEBPACK_IMPORTED_MODULE_2___default.a.UIForm.FieldTemplate.TextModeTemplate;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FieldTemplate, {
    id: props.id,
    label: props.schema.title
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      height: 300
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_talend_react_components__WEBPACK_IMPORTED_MODULE_3__["VirtualizedList"], {
    type: "tc-multiselect",
    rowHeight: props.itemViewRender.rowHeight,
    rowRenderers: {
      'tc-multiselect': props.itemViewRender
    },
    collection: titleMap
  })));
}

if (true) {
  MultiSelectTextMode.propTypes = {
    itemViewRender: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
    id: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
    resolveName: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
    schema: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
      title: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
      titleMap: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
        name: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,
        value: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired
      }))
    }).isRequired,
    value: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string)
  };
}

MultiSelectTextMode.defaultProps = {
  value: [],
  itemViewRender: renderItem,
  resolveName: function resolveName(value) {
    return value;
  }
};

/***/ }),

/***/ "./src/ComponentForm/fields/MultiSelect/index.js":
/*!*******************************************************!*\
  !*** ./src/ComponentForm/fields/MultiSelect/index.js ***!
  \*******************************************************/
/*! exports provided: MultiSelectTextMode, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MultiSelect_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MultiSelect.component */ "./src/ComponentForm/fields/MultiSelect/MultiSelect.component.js");
/* harmony import */ var _displayMode_TextMode_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayMode/TextMode.component */ "./src/ComponentForm/fields/MultiSelect/displayMode/TextMode.component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MultiSelectTextMode", function() { return _displayMode_TextMode_component__WEBPACK_IMPORTED_MODULE_1__["default"]; });




/* harmony default export */ __webpack_exports__["default"] = (_MultiSelect_component__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/ComponentForm/fields/NameResolver/NameResolver.component.js":
/*!*************************************************************************!*\
  !*** ./src/ComponentForm/fields/NameResolver/NameResolver.component.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return withNameResolver; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _talend_react_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @talend/react-forms */ "@talend/react-forms");
/* harmony import */ var _talend_react_forms__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_talend_react_forms__WEBPACK_IMPORTED_MODULE_2__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function withNameResolver(WrappedComponent) {
  function NameResolver(props) {
    function resolveName(value) {
      // create schema to get entry name from internal properties
      var key = Array.from(props.schema.key);
      key[key.length - 1] = "$".concat(key[key.length - 1], "_name");

      var nameSchema = _objectSpread(_objectSpread({}, props.schema), {}, {
        key: key
      });

      var getValue = _talend_react_forms__WEBPACK_IMPORTED_MODULE_2___default.a.UIForm.utils.properties.getValue;
      return getValue(props.properties, nameSchema) || value;
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(WrappedComponent, _extends({}, props, {
      resolveName: resolveName
    }));
  }

  NameResolver.displayName = "NameResolver(".concat(WrappedComponent.displayName, ")");
  NameResolver.propTypes = {
    properties: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
    schema: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
      key: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array
    })
  };
  return NameResolver;
}

/***/ }),

/***/ "./src/ComponentForm/fields/NameResolver/index.js":
/*!********************************************************!*\
  !*** ./src/ComponentForm/fields/NameResolver/index.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NameResolver_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NameResolver.component */ "./src/ComponentForm/fields/NameResolver/NameResolver.component.js");

/* harmony default export */ __webpack_exports__["default"] = (_NameResolver_component__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/ComponentForm/fields/index.js":
/*!*******************************************!*\
  !*** ./src/ComponentForm/fields/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _talend_react_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @talend/react-forms */ "@talend/react-forms");
/* harmony import */ var _talend_react_forms__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_talend_react_forms__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MultiSelect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MultiSelect */ "./src/ComponentForm/fields/MultiSelect/index.js");
/* harmony import */ var _NameResolver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NameResolver */ "./src/ComponentForm/fields/NameResolver/index.js");
/* eslint-disable import/prefer-default-export */



var _Form$UIForm$utils$wi = _talend_react_forms__WEBPACK_IMPORTED_MODULE_0___default.a.UIForm.utils.widgets,
    MultiSelectTagWidget = _Form$UIForm$utils$wi.multiSelectTag,
    DatalistWidget = _Form$UIForm$utils$wi.datalist;
/* harmony default export */ __webpack_exports__["default"] = ({
  datalist: Object(_NameResolver__WEBPACK_IMPORTED_MODULE_2__["default"])(DatalistWidget),
  multiSelectTag: Object(_NameResolver__WEBPACK_IMPORTED_MODULE_2__["default"])(MultiSelectTagWidget),
  multiSelect: Object(_NameResolver__WEBPACK_IMPORTED_MODULE_2__["default"])(_MultiSelect__WEBPACK_IMPORTED_MODULE_1__["default"]),
  multiSelect_text: Object(_NameResolver__WEBPACK_IMPORTED_MODULE_2__["default"])(_MultiSelect__WEBPACK_IMPORTED_MODULE_1__["MultiSelectTextMode"])
});

/***/ }),

/***/ "./src/ComponentForm/index.js":
/*!************************************!*\
  !*** ./src/ComponentForm/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ComponentForm_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ComponentForm.component */ "./src/ComponentForm/ComponentForm.component.js");
/* harmony import */ var _ComponentForm_sagas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ComponentForm.sagas */ "./src/ComponentForm/ComponentForm.sagas.js");
/* harmony import */ var _ComponentForm_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ComponentForm.selectors */ "./src/ComponentForm/ComponentForm.selectors.js");
/* harmony import */ var _ComponentForm_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ComponentForm.actions */ "./src/ComponentForm/ComponentForm.actions.js");
/* harmony import */ var _kit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./kit */ "./src/ComponentForm/kit/index.js");
/* harmony import */ var _fields__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fields */ "./src/ComponentForm/fields/index.js");






_ComponentForm_component__WEBPACK_IMPORTED_MODULE_0__["default"].sagas = _ComponentForm_sagas__WEBPACK_IMPORTED_MODULE_1__["default"];
_ComponentForm_component__WEBPACK_IMPORTED_MODULE_0__["default"].internalSagas = _ComponentForm_sagas__WEBPACK_IMPORTED_MODULE_1__;
_ComponentForm_component__WEBPACK_IMPORTED_MODULE_0__["default"].selectors = _ComponentForm_selectors__WEBPACK_IMPORTED_MODULE_2__;
_ComponentForm_component__WEBPACK_IMPORTED_MODULE_0__["default"].actions = _ComponentForm_actions__WEBPACK_IMPORTED_MODULE_3__;
_ComponentForm_component__WEBPACK_IMPORTED_MODULE_0__["default"].kit = _kit__WEBPACK_IMPORTED_MODULE_4__["default"];
_ComponentForm_component__WEBPACK_IMPORTED_MODULE_0__["default"].fields = _fields__WEBPACK_IMPORTED_MODULE_5__["default"];
/* harmony default export */ __webpack_exports__["default"] = (_ComponentForm_component__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/ComponentForm/kit/createTriggers.js":
/*!*************************************************!*\
  !*** ./src/ComponentForm/kit/createTriggers.js ***!
  \*************************************************/
/*! exports provided: getPathWithArrayIndex, extractParameters, createCacheKey, toJSON, toQueryParam, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPathWithArrayIndex", function() { return getPathWithArrayIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extractParameters", function() { return extractParameters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCacheKey", function() { return createCacheKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toJSON", function() { return toJSON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toQueryParam", function() { return toQueryParam; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createTriggers; });
/* harmony import */ var _talend_react_cmf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @talend/react-cmf */ "@talend/react-cmf");
/* harmony import */ var _talend_react_cmf__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_talend_react_cmf__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _flatten__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./flatten */ "./src/ComponentForm/kit/flatten.js");
/* harmony import */ var _defaultRegistry__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./defaultRegistry */ "./src/ComponentForm/kit/defaultRegistry.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 *  Copyright (C) 2006-2018 Talend Inc. - www.talend.com
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

/* eslint-disable no-param-reassign */




var mergeCSRFToken = _talend_react_cmf__WEBPACK_IMPORTED_MODULE_0___default.a.middlewares.http.csrf.mergeCSRFToken;
var DEFAULT_HEADERS = {
  'Content-Type': 'application/json',
  Accept: 'application/json'
};

function passthroughTrigger(_ref) {
  var error = _ref.error,
      trigger = _ref.trigger,
      body = _ref.body;
  // eslint-disable-next-line no-console
  console.error("".concat(JSON.stringify(trigger), " doesnt exists or fails with error ").concat(error || '-'));
  return body;
}
/**
 * array are describe without their index
 * use the schema to guess the path to use
 * to get the value in the properties
 * @param {string} specPath the path provided by the trigger
 * @param {Object} schema the schema of the current field
 * @return {string} path to get the value in properties
 */


function getPathWithArrayIndex(specPath, schema) {
  if (!schema) {
    return specPath;
  }

  var contextualPathItems = schema.key;

  if (!specPath || !contextualPathItems) {
    return specPath;
  }

  var keyIndex = 0;
  var schemaKey = schema.key;
  return specPath.split('.').reduce(function (acc, current) {
    if (acc) {
      acc += '.';
    }

    if (current.endsWith('[]')) {
      acc += "".concat(current.substring(0, current.length - 1)).concat(schemaKey[keyIndex + 1], "]");
      keyIndex += 2;
    } else {
      acc += current;
      keyIndex += 1;
    }

    return acc;
  }, '');
}
/**
 * extract parameters from properties
 * @param {Array} parameters required
 * @param {Object} properties source of the data
 * @param {Object} schema of the current field the trigger is executed
 * @return {Object} payload of the trigger
 */

function extractParameters(parameters, properties, schema) {
  if (!parameters || !Array.isArray(parameters)) {
    return {};
  }

  var flattenProps = Object(_flatten__WEBPACK_IMPORTED_MODULE_1__["default"])(properties, {
    includeObjects: true
  });
  return parameters.reduce(function (acc, param) {
    var path = getPathWithArrayIndex(param.path, schema);
    var value = flattenProps[path];

    if (_typeof(value) === 'object') {
      Object.keys(value).filter(function (key) {
        return _typeof(value[key]) !== 'object';
      }).forEach(function (key) {
        acc["".concat(param.key).concat(key)] = value[key];
      });
    } else {
      acc[param.key] = value;
    }

    return acc;
  }, {});
}
function createCacheKey(trigger) {
  if (trigger.type !== 'suggestions' || (trigger.parameters || []).length === 0) {
    return undefined;
  }

  return "".concat(trigger.type, ":").concat(trigger.family, ":").concat(trigger.action, ":").concat((trigger.parameters || []).map(function (it) {
    return it.path;
  }).join(':'));
}
function toJSON(resp) {
  if (!resp.ok || resp.status >= 300) {
    return resp.text().then(function (error) {
      var json;

      try {
        json = JSON.parse(error);
      } catch (e) {
        json = {
          error: error
        };
      }

      throw json;
    });
  }

  return resp.json();
}
function toQueryParam(obj) {
  return Object.keys(obj).map(function (key) {
    return "".concat(encodeURIComponent(key), "=").concat(encodeURIComponent(obj[key]));
  }).join('&');
} // customRegistry can be used to add extensions or custom trigger
// (not portable accross integrations)

function createTriggers(_ref2) {
  var url = _ref2.url,
      customRegistry = _ref2.customRegistry,
      _ref2$lang = _ref2.lang,
      lang = _ref2$lang === void 0 ? 'en' : _ref2$lang,
      headers = _ref2.headers,
      fetchConfig = _ref2.fetchConfig,
      _ref2$security = _ref2.security,
      security = _ref2$security === void 0 ? {} : _ref2$security;

  if (!url) {
    throw new Error('url params is required to createTriggers');
  }

  var cache = {};
  var actualHeaders = Object(lodash__WEBPACK_IMPORTED_MODULE_3__["merge"])({}, DEFAULT_HEADERS, headers);
  return function onDefaultTrigger(event, _ref3) {
    var trigger = _ref3.trigger,
        schema = _ref3.schema,
        properties = _ref3.properties,
        errors = _ref3.errors;

    var services = _objectSpread(_objectSpread({}, _defaultRegistry__WEBPACK_IMPORTED_MODULE_2__["default"]), customRegistry);

    var parameters = extractParameters(trigger.parameters, properties, schema);
    var cacheKey = createCacheKey(trigger);

    if (cacheKey) {
      if (cache[cacheKey] && cache[cacheKey].result && Object(lodash__WEBPACK_IMPORTED_MODULE_3__["isEqual"])(cache[cacheKey].parameters, parameters)) {
        return Promise.resolve(cache[cacheKey].result);
      } else if (cache[cacheKey]) {
        delete cache[cacheKey];
      }
    }

    function onSuccess(body) {
      var result = (services[trigger.type] || passthroughTrigger)({
        body: body,
        errors: errors,
        event: event,
        properties: properties,
        schema: schema,
        trigger: trigger
      });

      if (body.cacheable) {
        cache[cacheKey] = {
          parameters: parameters,
          result: result
        };
      }

      return result;
    }

    function onError(error) {
      return services.error({
        error: error,
        errors: errors,
        properties: properties,
        schema: schema,
        trigger: trigger
      });
    }

    if (trigger.remote === false) {
      var result = onSuccess({});

      if (result && result.then) {
        return result["catch"](onError);
      }

      return new Promise(function (resolve) {
        return resolve(result);
      });
    }

    var config = _talend_react_cmf__WEBPACK_IMPORTED_MODULE_0___default.a.sagas.http.getDefaultConfig() || {};
    var httpSecurity = config.security || {};

    if (security.CSRFTokenCookieKey || security.CSRFTokenHeaderKey) {
      httpSecurity = security;
    }

    var fetchUrl = "".concat(url, "?").concat(toQueryParam({
      lang: lang,
      action: trigger.action,
      family: trigger.family,
      type: trigger.type
    }));
    return fetch(fetchUrl, mergeCSRFToken({
      security: httpSecurity
    })(_objectSpread({
      method: 'POST',
      headers: actualHeaders,
      body: JSON.stringify(parameters),
      credentials: 'include'
    }, fetchConfig))).then(toJSON).then(onSuccess)["catch"](onError);
  };
}

/***/ }),

/***/ "./src/ComponentForm/kit/defaultRegistry.js":
/*!**************************************************!*\
  !*** ./src/ComponentForm/kit/defaultRegistry.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _talend_react_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @talend/react-forms */ "@talend/react-forms");
/* harmony import */ var _talend_react_forms__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_talend_react_forms__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 *  Copyright (C) 2006-2018 Talend Inc. - www.talend.com
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */


var _Form$UIForm$utils$er = _talend_react_forms__WEBPACK_IMPORTED_MODULE_0___default.a.UIForm.utils.errors,
    removeError = _Form$UIForm$utils$er.removeError,
    addError = _Form$UIForm$utils$er.addError,
    getError = _Form$UIForm$utils$er.getError;
var mutateValue = _talend_react_forms__WEBPACK_IMPORTED_MODULE_0___default.a.UIForm.utils.properties.mutateValue;
/**
 * Change errors on the target input
 * Add the error if trigger results in an error
 * Remove error if trigger has no error
 * @param errors The form errors map
 * @param schema The input schema
 * @param errorMessage The trigger error message
 * @returns {object} The new errors map
 */

function getNewErrors(errors, schema, errorMessage) {
  if (errorMessage) {
    return addError(errors, schema, errorMessage);
  } else if (getError(errors, schema) !== undefined) {
    return removeError(errors, schema);
  }

  return errors;
}
/**
 * Add or Remove the input error depending on the trigger result
 * @param schema The input schema
 * @param body The trigger response body
 * @param errors The form errors map
 * @returns {{errors: *}} The new errors map
 */


function validation(_ref) {
  var schema = _ref.schema,
      body = _ref.body,
      _ref$errors = _ref.errors,
      errors = _ref$errors === void 0 ? {} : _ref$errors;
  var errorMessage = body.status === 'KO' ? body.comment : null;
  return {
    errors: getNewErrors(errors, schema, errorMessage)
  };
}

function schemaReducer(acc, entry) {
  // eslint-disable-next-line no-param-reassign
  acc[entry.name] = entry.type;
  return acc;
}
/**
 * Insert new form data
 * @param schema The input schema
 * @param body The trigger response body
 * @param properties The form data
 * @param trigger The trigger configuration
 * @param errors The form errors map
 * @returns {{properties: *, errors: Object}} The properties and errors map
 */


function updateSchema(_ref2) {
  var schema = _ref2.schema,
      body = _ref2.body,
      properties = _ref2.properties,
      trigger = _ref2.trigger,
      errors = _ref2.errors;
  var newErrors = getNewErrors(errors, schema, body.error);
  var newProperties = properties;

  if (body.entries && trigger.options && trigger.options.length !== 0) {
    newProperties = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["cloneDeep"])(properties);
    trigger.options.forEach(function (option) {
      var splitted = option.path.split('.');
      var key = splitted[splitted.length - 1];
      var parent = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["get"])(newProperties, splitted.slice(0, -1).join('.'));

      if (!parent || _typeof(parent) !== 'object') {
        return;
      }

      if (option.type === 'array') {
        parent[key] = body.entries.map(function (entry) {
          return entry.name;
        });
      } else {
        parent[key] = body.entries.reduce(schemaReducer, {});
      }
    });
  }

  return {
    properties: newProperties,
    errors: newErrors
  };
}

function suggestions(_ref3) {
  var body = _ref3.body;
  // intended to be overriden by apps
  return {
    titleMap: (body.items || []).map(function (item) {
      return {
        name: item.label,
        value: item.id
      };
    })
  };
}
/**
 * extract from error object valuable information for the user
 * We have two cases:
 * - js error object: https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Error
 * - message sent from the backend: http 520 with description and may be code.
 * @param {Object} error the error object
 * @returns {string} the message
 */


function extractErrorMessage(error) {
  if (error.code && error.description) {
    return "".concat(error.code !== 'ACTION_ERROR' ? "[".concat(error.code, "]") : '', " ").concat(error.description);
  } else if (error.description) {
    return error.description;
  } // in case of JS error message (fetch fails and others)


  if (typeof error.message === 'string') {
    return error.message;
  } // fallback don't know what happens


  return JSON.stringify(error);
}
/**
 * Update errors status
 * @param {Object} options with { errors, error, schema }
 * @return {Object} { errors } status
 */


function onError(_ref4) {
  var errors = _ref4.errors,
      error = _ref4.error,
      schema = _ref4.schema;
  return {
    errors: getNewErrors(errors, schema, extractErrorMessage(error))
  };
}
/**
 * Update the content of the properties
 * @param body is the new value
 * @param trigger the trigger that call it
 * @example
const trigger = {
	"action":"guessMe",
	"family":"test",
	"options":[
		{
			"path":"root.updatable_config",
			"type":"object" // or "string"
		}
	],
	"parameters":[
		{
			"key":"arg0.name",
			"path":"root.updatable_config.name"
		}
	],
	"type":"update"
};
 */


function updateProperties(_ref5) {
  var body = _ref5.body,
      trigger = _ref5.trigger,
      properties = _ref5.properties;
  var targetPath = trigger.options[0].path;
  var schema = {
    key: targetPath.split('.')
  };
  var value = trigger.options[0].type === 'object' ? body : body.data;
  return {
    properties: mutateValue(properties, schema, value)
  };
}

/* harmony default export */ __webpack_exports__["default"] = ({
  // dynamic_values, server side
  healthcheck: validation,
  schema: updateSchema,
  update: updateProperties,
  validation: validation,
  suggestions: suggestions,
  error: onError
});

/***/ }),

/***/ "./src/ComponentForm/kit/flatten.js":
/*!******************************************!*\
  !*** ./src/ComponentForm/kit/flatten.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return flatten; });
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/* eslint-disable no-param-reassign */

/**
 *  Copyright (C) 2006-2018 Talend Inc. - www.talend.com
 *
 *  Licensed under the Apache License, Version 2.0 (the 'License');
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an 'AS IS' BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
function step(anything, key, payload) {
  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

  // on native values, we just add it in the payload
  if (_typeof(anything) !== 'object') {
    payload[key] = anything;
  } else {
    // For objects (including arrays), we flatten it.
    // We store it in 2 forms depending on options.
    //
    // Let's say that we have an array { 'my-array': ['tata', 'toto'] }.
    // - Form 1: { 'my-array' : { '[0]': 'tata', '[1]': 'toto' } }
    // - Form 2: { 'my-array[0]': 'tata', 'my-array[1]': 'toto' }
    //
    // And for objects { 'my-object': { first: 'tata', second: 'toto' } }.
    // - Form 1: { 'my-object' : { '.first': 'tata', '.second': 'toto' } }
    // - Form 2: { 'my-object.first': 'tata', 'my-object.second': 'toto' }
    var subPayload = {};

    if (Array.isArray(anything)) {
      anything.forEach(function (item, index) {
        var itemKey = "[".concat(index, "]");
        step(item, itemKey, subPayload, options);
      });
    } else {
      Object.keys(anything).forEach(function (nextKey) {
        var itemKey = ".".concat(nextKey);
        var item = anything[nextKey];
        step(item, itemKey, subPayload, options);
      });
    } // Form 1: { 'my-object' : {<flattenedObject>} }


    if (options.includeObjects) {
      payload[key] = subPayload;
    } // Form 2: { 'my-object.key1': value1, my-object.key2: value2, ... }


    Object.keys(subPayload).forEach(function (subKey) {
      payload["".concat(key).concat(subKey)] = subPayload[subKey];
    });
  }
}
/**
 * flatten an object means each keys are a jsonpath.
 * jsperf: https://jsperf.com/talend-flatten
 * @param {object} obj the source object
 * @param {object} options
 * @return {object} flatten object
 * @example
 * flatten({ level1: { level2: 'foo' }})
 * // { 'level1.level2': 'foo' }
 */


function flatten(obj, options) {
  return Object.keys(obj).reduce(function (accu, key) {
    step(obj[key], key, accu, options);
    return accu;
  }, {});
}

/***/ }),

/***/ "./src/ComponentForm/kit/index.js":
/*!****************************************!*\
  !*** ./src/ComponentForm/kit/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createTriggers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createTriggers */ "./src/ComponentForm/kit/createTriggers.js");
/* harmony import */ var _flatten__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./flatten */ "./src/ComponentForm/kit/flatten.js");
/**
 *  Copyright (C) 2006-2018 Talend Inc. - www.talend.com
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */


/* harmony default export */ __webpack_exports__["default"] = ({
  createTriggers: _createTriggers__WEBPACK_IMPORTED_MODULE_0__["default"],
  flatten: _flatten__WEBPACK_IMPORTED_MODULE_1__["default"]
});

/***/ }),

/***/ "./src/ConfirmDialog/ConfirmDialog.connect.js":
/*!****************************************************!*\
  !*** ./src/ConfirmDialog/ConfirmDialog.connect.js ***!
  \****************************************************/
/*! exports provided: mapStateToProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapStateToProps", function() { return mapStateToProps; });
/* harmony import */ var _talend_react_cmf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @talend/react-cmf */ "@talend/react-cmf");
/* harmony import */ var _talend_react_cmf__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_talend_react_cmf__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actionAPI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actionAPI */ "./src/actionAPI.js");
/* harmony import */ var _ConfirmDialog_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ConfirmDialog.container */ "./src/ConfirmDialog/ConfirmDialog.container.js");



function mapStateToProps(state, props, cmfProps) {
  var context = {
    registry: _talend_react_cmf__WEBPACK_IMPORTED_MODULE_0___default.a.registry.getRegistry(),
    store: {
      getState: function getState() {
        return state;
      }
    }
  };
  var validateAction = cmfProps.state ? cmfProps.state.get('validateAction') : undefined;
  var cancelAction = cmfProps.state ? cmfProps.state.get('cancelAction') : undefined;
  var model = cmfProps.state ? cmfProps.state.get('model') : cmfProps.model;
  return {
    validateAction: Object(_actionAPI__WEBPACK_IMPORTED_MODULE_1__["getActionsProps"])(context, validateAction, model),
    cancelAction: Object(_actionAPI__WEBPACK_IMPORTED_MODULE_1__["getActionsProps"])(context, cancelAction, model)
  };
}
/* harmony default export */ __webpack_exports__["default"] = (Object(_talend_react_cmf__WEBPACK_IMPORTED_MODULE_0__["cmfConnect"])({
  defaultState: _ConfirmDialog_container__WEBPACK_IMPORTED_MODULE_2__["DEFAULT_STATE"],
  componentId: function componentId(ownProps) {
    return ownProps && ownProps.id || 'ConfirmDialog';
  },
  mapStateToProps: mapStateToProps,
  omitCMFProps: true,
  withComponentRegistry: true,
  withDispatch: true,
  withDispatchActionCreator: true,
  withComponentId: true
})(_ConfirmDialog_container__WEBPACK_IMPORTED_MODULE_2__["default"]));

/***/ }),

/***/ "./src/ConfirmDialog/ConfirmDialog.container.js":
/*!******************************************************!*\
  !*** ./src/ConfirmDialog/ConfirmDialog.container.js ***!
  \******************************************************/
/*! exports provided: DEFAULT_STATE, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_STATE", function() { return DEFAULT_STATE; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! immutable */ "immutable");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _talend_react_cmf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @talend/react-cmf */ "@talend/react-cmf");
/* harmony import */ var _talend_react_cmf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_talend_react_cmf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _actionAPI__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actionAPI */ "./src/actionAPI.js");
/* harmony import */ var _talend_react_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @talend/react-components */ "@talend/react-components");
/* harmony import */ var _talend_react_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_talend_react_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








var DEFAULT_STATE = new immutable__WEBPACK_IMPORTED_MODULE_2__["Map"]({
  show: false
}); // This uses old react context, so no way to switch to stateless function instead of class
// eslint-disable-next-line react/prefer-stateless-function

var ConfirmDialog = /*#__PURE__*/function (_React$Component) {
  _inherits(ConfirmDialog, _React$Component);

  var _super = _createSuper(ConfirmDialog);

  function ConfirmDialog() {
    _classCallCheck(this, ConfirmDialog);

    return _super.apply(this, arguments);
  }

  _createClass(ConfirmDialog, [{
    key: "render",
    value: function render() {
      var state = (this.props.state || DEFAULT_STATE).toJS();

      if (!state.validateAction || !state.cancelAction) {
        return null;
      } // this should be enough

      /* const props = Object.assign(
       {},
       state,
       omit(this.props, cmfConnect.INJECTED_PROPS),
       ); */
      // but as we don't have access to dispatch in the created context of mapStateToProps
      // we're having an issue on the setup of the onClick on button
      // for now we'll recompute them here where the context has dispatch
      // so the connect is only here to force the refresh for now


      state.validateAction = Object(_actionAPI__WEBPACK_IMPORTED_MODULE_4__["getActionsProps"])(this.context, state.validateAction, state.model);
      state.cancelAction = Object(_actionAPI__WEBPACK_IMPORTED_MODULE_4__["getActionsProps"])(this.context, state.cancelAction, state.model);

      var props = _objectSpread(_objectSpread({}, Object(lodash__WEBPACK_IMPORTED_MODULE_6__["omit"])(this.props, _talend_react_cmf__WEBPACK_IMPORTED_MODULE_3__["cmfConnect"].INJECTED_PROPS)), state);

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_talend_react_components__WEBPACK_IMPORTED_MODULE_5__["ConfirmDialog"], props);
    }
  }]);

  return ConfirmDialog;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

_defineProperty(ConfirmDialog, "displayName", 'CMFContainer(ConfirmDialog)');

_defineProperty(ConfirmDialog, "propTypes", _objectSpread({}, _talend_react_cmf__WEBPACK_IMPORTED_MODULE_3__["cmfConnect"].propTypes));

_defineProperty(ConfirmDialog, "contextTypes", {
  store: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object,
  registry: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object
});

/* harmony default export */ __webpack_exports__["default"] = (ConfirmDialog);

/***/ }),

/***/ "./src/ConfirmDialog/index.js":
/*!************************************!*\
  !*** ./src/ConfirmDialog/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ConfirmDialog_connect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ConfirmDialog.connect */ "./src/ConfirmDialog/ConfirmDialog.connect.js");
/* harmony import */ var _showHideConfirmDialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./showHideConfirmDialog */ "./src/ConfirmDialog/showHideConfirmDialog.js");


_ConfirmDialog_connect__WEBPACK_IMPORTED_MODULE_0__["default"].showDialog = _showHideConfirmDialog__WEBPACK_IMPORTED_MODULE_1__["showConfirmDialog"];
_ConfirmDialog_connect__WEBPACK_IMPORTED_MODULE_0__["default"].hideDialog = _showHideConfirmDialog__WEBPACK_IMPORTED_MODULE_1__["hideConfirmDialog"];
/* harmony default export */ __webpack_exports__["default"] = (_ConfirmDialog_connect__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/ConfirmDialog/showHideConfirmDialog.js":
/*!****************************************************!*\
  !*** ./src/ConfirmDialog/showHideConfirmDialog.js ***!
  \****************************************************/
/*! exports provided: showConfirmDialog, hideConfirmDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showConfirmDialog", function() { return showConfirmDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hideConfirmDialog", function() { return hideConfirmDialog; });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function showConfirmDialog(state, action) {
  // adding conf and showing modal
  var path = ['CMFContainer(ConfirmDialog)', 'ConfirmDialog'];

  var newState = _objectSpread({}, state);

  newState.cmf.components = state.cmf.components.setIn(path, action.confirmDialogConf.set('show', true));
  return newState;
}
function hideConfirmDialog(state) {
  // hiding the modal
  var path = ['CMFContainer(ConfirmDialog)', 'ConfirmDialog', 'show'];

  var newState = _objectSpread({}, state);

  newState.cmf.components = state.cmf.components.setIn(path, false);
  return newState;
}

/***/ }),

/***/ "./src/DeleteResource/DeleteResource.connect.js":
/*!******************************************************!*\
  !*** ./src/DeleteResource/DeleteResource.connect.js ***!
  \******************************************************/
/*! exports provided: mapStateToProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapStateToProps", function() { return mapStateToProps; });
/* harmony import */ var _talend_react_cmf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @talend/react-cmf */ "@talend/react-cmf");
/* harmony import */ var _talend_react_cmf__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_talend_react_cmf__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! immutable */ "immutable");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _DeleteResource_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DeleteResource.container */ "./src/DeleteResource/DeleteResource.container.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);




function mapStateToProps(state, ownProps) {
  var props = {};
  var resourceId = ownProps.resourceId;

  if (!ownProps.resourceId) {
    resourceId = Object(lodash__WEBPACK_IMPORTED_MODULE_3__["get"])(ownProps, "params.".concat(ownProps.routerParamAttribute || 'id'));
    props.resourceId = resourceId;
  }

  if (ownProps.resource) {
    props.resource = ownProps.resource;
  } else {
    var collectionId = ownProps.collectionId || ownProps.resourceType;

    if (collectionId) {
      props.resource = state.cmf.collections.get(collectionId, new immutable__WEBPACK_IMPORTED_MODULE_1___default.a.Map()).find(function (currentResource) {
        return currentResource.get('id') === resourceId;
      });
    }
  }

  return props;
}
/* harmony default export */ __webpack_exports__["default"] = (Object(_talend_react_cmf__WEBPACK_IMPORTED_MODULE_0__["cmfConnect"])({
  defaultProps: {
    saga: 'DeleteResource#handle'
  },
  mapStateToProps: mapStateToProps,
  omitCMFProps: true,
  withComponentRegistry: true,
  withDispatch: true,
  withDispatchActionCreator: true,
  withComponentId: true
})(_DeleteResource_container__WEBPACK_IMPORTED_MODULE_2__["default"]));

/***/ }),

/***/ "./src/DeleteResource/DeleteResource.container.js":
/*!********************************************************!*\
  !*** ./src/DeleteResource/DeleteResource.container.js ***!
  \********************************************************/
/*! exports provided: DeleteResource, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteResource", function() { return DeleteResource; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _talend_react_cmf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @talend/react-cmf */ "@talend/react-cmf");
/* harmony import */ var _talend_react_cmf__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_talend_react_cmf__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-i18next */ "react-i18next");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _translate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../translate */ "./src/translate.js");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../constant */ "./src/constant.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./constants */ "./src/DeleteResource/constants.js");
/* harmony import */ var _talend_react_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @talend/react-components */ "@talend/react-components");
/* harmony import */ var _talend_react_components__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_talend_react_components__WEBPACK_IMPORTED_MODULE_7__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








/**
 * getLabel: return label to display on delete confirmation dialog
 * @param resource
 * @returns {*}
 */



function getLabel(resource) {
  if (resource) {
    return resource.get('label') || resource.get('name') || '';
  }

  return '';
}
/**
 * DeleteResource is used to delete a specific resource.
 * When the component is mounted, it opens a confirm dialog.
 * It uses the saga matching pattern to launch a race between the cancel and validate action.
 */


var DeleteResource = /*#__PURE__*/function (_React$Component) {
  _inherits(DeleteResource, _React$Component);

  var _super = _createSuper(DeleteResource);

  function DeleteResource(props, context) {
    var _this;

    _classCallCheck(this, DeleteResource);

    _this = _super.call(this, props, context);
    _this.getLabelInfo = _this.getLabelInfo.bind(_assertThisInitialized(_this));
    _this.getResourceInfo = _this.getResourceInfo.bind(_assertThisInitialized(_this));
    _this.onHide = _this.onHide.bind(_assertThisInitialized(_this));
    return _this;
  }
  /**
   * onHide handler, called when click outside delete modal
   * @param event
   */


  _createClass(DeleteResource, [{
    key: "onHide",
    value: function onHide(event) {
      this.props.dispatchActionCreator('DeleteResource#cancel', event, {
        model: this.getResourceInfo()
      });
    }
    /**
     * Get the label from the collections.
     * Return the label and a boolean to confirm that the item has been found.
     */

  }, {
    key: "getLabelInfo",
    value: function getLabelInfo() {
      return {
        label: getLabel(this.props.resource),
        found: !!this.props.resource
      };
    }
    /**
     * Build an object with all the data's resource we need.
     */

  }, {
    key: "getResourceInfo",
    value: function getResourceInfo() {
      return _objectSpread(_objectSpread({
        resourceType: this.props.resourceType,
        collectionId: this.props.collectionId,
        resourceTypeLabel: this.props.resourceTypeLabel ? this.props.resourceTypeLabel : this.props.resourceType,
        uri: this.props.uri
      }, this.getLabelInfo()), {}, {
        id: this.props.resourceId,
        redirectUrl: this.props.redirectUrl,
        onCancelRedirectUrl: this.props.onCancelRedirectUrl,
        resource: this.props.resource
      });
    }
  }, {
    key: "render",
    value: function render() {
      var resourceInfo = this.getResourceInfo();

      var validateAction = _objectSpread({
        componentId: this.props[_constants__WEBPACK_IMPORTED_MODULE_6__["default"].VALIDATE_ACTION],
        model: resourceInfo,
        label: this.props.t('DELETE_RESOURCE_YES', {
          defaultValue: 'REMOVE'
        }),
        bsStyle: 'danger',
        onClickActionCreator: 'DeleteResource#validate'
      }, this.props.validateActionProps);

      var cancelAction = _objectSpread({
        componentId: this.props[_constants__WEBPACK_IMPORTED_MODULE_6__["default"].CANCEL_ACTION],
        model: resourceInfo,
        label: this.props.t('DELETE_RESOURCE_NO', {
          defaultValue: 'CANCEL'
        }),
        className: 'btn-inverse',
        onClickActionCreator: 'DeleteResource#cancel'
      }, this.props.cancelAction); // Sorry for this duplication, but we need it because of the i18n scanner to create 2 keys
      // DELETE_RESOURCE_MESSAGE and DELETE_RESOURCE_MESSAGE_female


      var question;
      var resourceTypeLabel = resourceInfo.resourceTypeLabel,
          label = resourceInfo.label;

      if (this.props.female) {
        question = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_i18next__WEBPACK_IMPORTED_MODULE_3__["Trans"], {
          i18nKey: "tui-containers:DELETE_RESOURCE_MESSAGE",
          tOptions: {
            context: 'female'
          }
        }, "Are you sure you want to remove the ", {
          resourceTypeLabel: resourceTypeLabel
        }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, {
          label: label
        }), "?");
      } else {
        question = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_i18next__WEBPACK_IMPORTED_MODULE_3__["Trans"], {
          i18nKey: "tui-containers:DELETE_RESOURCE_MESSAGE"
        }, "Are you sure you want to remove the ", {
          resourceTypeLabel: resourceTypeLabel
        }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, {
          label: label
        }), "?");
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_talend_react_components__WEBPACK_IMPORTED_MODULE_7__["ConfirmDialog"], {
        show: true,
        header: this.props.header,
        cancelAction: cancelAction,
        validateAction: validateAction,
        getComponent: this.props.getComponent,
        onHide: this.onHide
      }, question);
    }
  }]);

  return DeleteResource;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

_defineProperty(DeleteResource, "displayName", 'Container(DeleteResource)');

_defineProperty(DeleteResource, "propTypes", _objectSpread(_objectSpread({}, _talend_react_cmf__WEBPACK_IMPORTED_MODULE_2__["cmfConnect"].propTypes), {}, {
  header: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  uri: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  resourceType: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  resourceTypeLabel: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  resourceId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  collectionId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  female: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  onCancelRedirectUrl: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  validateActionProps: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  t: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
}));

_defineProperty(DeleteResource, "contextTypes", {
  registry: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  store: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
});

_defineProperty(DeleteResource, "defaultProps", {
  validateActionProps: {},
  t: Object(_translate__WEBPACK_IMPORTED_MODULE_4__["default"])()
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_i18next__WEBPACK_IMPORTED_MODULE_3__["withTranslation"])(_constant__WEBPACK_IMPORTED_MODULE_5__["default"])(DeleteResource));

/***/ }),

/***/ "./src/DeleteResource/actions.js":
/*!***************************************!*\
  !*** ./src/DeleteResource/actions.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _talend_react_cmf_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @talend/react-cmf-router */ "@talend/react-cmf-router");
/* harmony import */ var _talend_react_cmf_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_talend_react_cmf_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./src/DeleteResource/constants.js");


/**
 * Action called at the dialog opening|mounting.
 * @param {object} event
 * @param {object} data
 */

function open(event, data, context) {
  var model = data.model;
  var pathname = context.store ? _talend_react_cmf_router__WEBPACK_IMPORTED_MODULE_0__["routerAPI"].selectors.getPath(context.store.getState()) : '/';
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_1__["default"].DIALOG_BOX_DELETE_RESOURCE,
    cmf: {
      routerReplace: "".concat(pathname, "/").concat(model.id, "/delete")
    },
    model: model,
    redirectUrl: pathname
  };
}
/**
 * Action to delete a resource and close the confirm dialog.
 */


function validate(event, data) {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_1__["default"].DIALOG_BOX_DELETE_RESOURCE_OK,
    data: data
  };
}
/**
 * Action to cancel and close the confirm dialog.
 */


function cancel(event, data) {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_1__["default"].DIALOG_BOX_DELETE_RESOURCE_CANCEL,
    data: data
  };
}

/* harmony default export */ __webpack_exports__["default"] = ({
  open: open,
  validate: validate,
  cancel: cancel
});

/***/ }),

/***/ "./src/DeleteResource/constants.js":
/*!*****************************************!*\
  !*** ./src/DeleteResource/constants.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var DIALOG_BOX_DELETE_RESOURCE = 'DIALOG_BOX_DELETE_RESOURCE';
var DIALOG_BOX_DELETE_RESOURCE_OK = 'DIALOG_BOX_DELETE_RESOURCE_OK';
var DIALOG_BOX_DELETE_RESOURCE_CANCEL = 'DIALOG_BOX_DELETE_RESOURCE_CANCEL';
var DIALOG_BOX_DELETE_RESOURCE_SUCCESS = 'DIALOG_BOX_DELETE_RESOURCE_SUCCESS';
var DIALOG_BOX_DELETE_RESOURCE_ERROR = 'DIALOG_BOX_DELETE_RESOURCE_ERROR';
var DIALOG_BOX_DELETE_RESOURCE_CLOSE = 'DIALOG_BOX_DELETE_RESOURCE_CLOSE';
var VALIDATE_ACTION = 'validate-action';
var CANCEL_ACTION = 'cancel-action';
/* harmony default export */ __webpack_exports__["default"] = ({
  DIALOG_BOX_DELETE_RESOURCE: DIALOG_BOX_DELETE_RESOURCE,
  DIALOG_BOX_DELETE_RESOURCE_OK: DIALOG_BOX_DELETE_RESOURCE_OK,
  DIALOG_BOX_DELETE_RESOURCE_CANCEL: DIALOG_BOX_DELETE_RESOURCE_CANCEL,
  DIALOG_BOX_DELETE_RESOURCE_SUCCESS: DIALOG_BOX_DELETE_RESOURCE_SUCCESS,
  DIALOG_BOX_DELETE_RESOURCE_ERROR: DIALOG_BOX_DELETE_RESOURCE_ERROR,
  DIALOG_BOX_DELETE_RESOURCE_CLOSE: DIALOG_BOX_DELETE_RESOURCE_CLOSE,
  VALIDATE_ACTION: VALIDATE_ACTION,
  CANCEL_ACTION: CANCEL_ACTION
});

/***/ }),

/***/ "./src/DeleteResource/index.js":
/*!*************************************!*\
  !*** ./src/DeleteResource/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DeleteResource_connect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DeleteResource.connect */ "./src/DeleteResource/DeleteResource.connect.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./src/DeleteResource/constants.js");
/* harmony import */ var _sagas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sagas */ "./src/DeleteResource/sagas.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./actions */ "./src/DeleteResource/actions.js");




_DeleteResource_connect__WEBPACK_IMPORTED_MODULE_0__["default"].constants = _constants__WEBPACK_IMPORTED_MODULE_1__["default"];
_DeleteResource_connect__WEBPACK_IMPORTED_MODULE_0__["default"].sagas = _sagas__WEBPACK_IMPORTED_MODULE_2__["default"];
_DeleteResource_connect__WEBPACK_IMPORTED_MODULE_0__["default"].actions = {
  'deleteResource:open': _actions__WEBPACK_IMPORTED_MODULE_3__["default"].open,
  'DeleteResource#validate': _actions__WEBPACK_IMPORTED_MODULE_3__["default"].validate,
  'DeleteResource#cancel': _actions__WEBPACK_IMPORTED_MODULE_3__["default"].cancel
};
/* harmony default export */ __webpack_exports__["default"] = (_DeleteResource_connect__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/DeleteResource/sagas.js":
/*!*************************************!*\
  !*** ./src/DeleteResource/sagas.js ***!
  \*************************************/
/*! exports provided: getResourceLocator, redirect, deleteResourceValidate, deleteResourceCancel, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getResourceLocator", function() { return getResourceLocator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "redirect", function() { return redirect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteResourceValidate", function() { return deleteResourceValidate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteResourceCancel", function() { return deleteResourceCancel; });
/* harmony import */ var _talend_react_cmf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @talend/react-cmf */ "@talend/react-cmf");
/* harmony import */ var _talend_react_cmf__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_talend_react_cmf__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./src/DeleteResource/constants.js");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-saga */ "redux-saga");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _marked = /*#__PURE__*/regeneratorRuntime.mark(redirect),
    _marked2 = /*#__PURE__*/regeneratorRuntime.mark(deleteResourceValidate),
    _marked3 = /*#__PURE__*/regeneratorRuntime.mark(deleteResourceCancel),
    _marked4 = /*#__PURE__*/regeneratorRuntime.mark(handle);

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



/**
 * from a resourceType and an optional resourcePath, return a resource locator
 * if resourcePath is provided resourceType is prepend to resourcePath
 * @param {String} resourceType
 * @param {Array<String>} [resourcePath]
 * @return {String || Array<String>}
 */


var _effects = redux_saga__WEBPACK_IMPORTED_MODULE_2__["effects"],
    take = _effects.take,
    put = _effects.put,
    race = _effects.race,
    call = _effects.call,
    select = _effects.select;

function getResourceLocator(resourceType, resourcePath) {
  if (resourcePath) {
    if (Array.isArray(resourcePath)) {
      return [resourceType].concat(_toConsumableArray(resourcePath));
    }

    throw Error("Optional parameter resourcePath must be an array of string,\ngot ".concat(resourcePath));
  }

  return resourceType;
}
function redirect(url) {
  return regeneratorRuntime.wrap(function redirect$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (Object(lodash__WEBPACK_IMPORTED_MODULE_3__["isString"])(url)) {
            _context.next = 2;
            break;
          }

          throw new Error('redirect url can not be empty');

        case 2:
          _context.next = 4;
          return put({
            type: _constants__WEBPACK_IMPORTED_MODULE_1__["default"].DIALOG_BOX_DELETE_RESOURCE_CLOSE,
            cmf: {
              routerReplace: url
            }
          });

        case 4:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}
/**
 * Waiting for confirmation event.
 * Resolve the resource to delete.
 * Call the requested uri.
 * Redirect the user.
 * @param {string} uri
 * @param {string} resourceType
 * @param {string} itemId
 * @param {Array<String>} [resourcePath]
 * @param {string} collectionId - collection which stores resources
 * @param {string} resourceUri - uri to delete resource on backend
 */

function deleteResourceValidate(uri, resourceType, itemId, resourcePath, collectionId, resourceUri) {
  var action, safeURI, safeType, safeId, safePath, resourceCollectionId, resourceLocator, resource, safeResourceUri, result;
  return regeneratorRuntime.wrap(function deleteResourceValidate$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return take(_constants__WEBPACK_IMPORTED_MODULE_1__["default"].DIALOG_BOX_DELETE_RESOURCE_OK);

        case 2:
          action = _context2.sent;
          safeURI = Object(lodash__WEBPACK_IMPORTED_MODULE_3__["get"])(action, 'data.model.uri', uri);
          safeType = Object(lodash__WEBPACK_IMPORTED_MODULE_3__["get"])(action, 'data.model.resourceType', resourceType);
          safeId = Object(lodash__WEBPACK_IMPORTED_MODULE_3__["get"])(action, 'data.model.id', itemId);
          safePath = Object(lodash__WEBPACK_IMPORTED_MODULE_3__["get"])(action, 'data.model.resourcePath', resourcePath);
          resourceCollectionId = Object(lodash__WEBPACK_IMPORTED_MODULE_3__["get"])(action, 'data.model.collectionId', collectionId);
          resourceLocator = getResourceLocator(resourceCollectionId || safeType, safePath);

          if (!Object(lodash__WEBPACK_IMPORTED_MODULE_3__["get"])(action, 'data.model.resource')) {
            _context2.next = 13;
            break;
          }

          resource = Object(lodash__WEBPACK_IMPORTED_MODULE_3__["get"])(action, 'data.model.resource');
          _context2.next = 16;
          break;

        case 13:
          _context2.next = 15;
          return select(_talend_react_cmf__WEBPACK_IMPORTED_MODULE_0___default.a.selectors.collections.findListItem, resourceLocator, safeId);

        case 15:
          resource = _context2.sent;

        case 16:
          safeResourceUri = Object(lodash__WEBPACK_IMPORTED_MODULE_3__["get"])(action, 'data.model.resourceUri', resourceUri || "".concat(safeURI, "/").concat(safeType, "/").concat(safeId));

          if (!(resource && safeResourceUri)) {
            _context2.next = 30;
            break;
          }

          _context2.next = 20;
          return call(_talend_react_cmf__WEBPACK_IMPORTED_MODULE_0___default.a.sagas.http["delete"], safeResourceUri);

        case 20:
          result = _context2.sent;

          if (!result.response.ok) {
            _context2.next = 26;
            break;
          }

          _context2.next = 24;
          return put({
            type: _constants__WEBPACK_IMPORTED_MODULE_1__["default"].DIALOG_BOX_DELETE_RESOURCE_SUCCESS,
            model: _objectSpread(_objectSpread({}, Object(lodash__WEBPACK_IMPORTED_MODULE_3__["get"])(action, 'data.model', {})), {}, {
              id: safeId,
              labelResource: resource.get('label') || resource.get('name', '')
            })
          });

        case 24:
          _context2.next = 28;
          break;

        case 26:
          _context2.next = 28;
          return put({
            type: _constants__WEBPACK_IMPORTED_MODULE_1__["default"].DIALOG_BOX_DELETE_RESOURCE_ERROR,
            error: result.data
          });

        case 28:
          _context2.next = 30;
          return call(redirect, Object(lodash__WEBPACK_IMPORTED_MODULE_3__["get"])(action, 'data.model.redirectUrl'));

        case 30:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2);
}
function deleteResourceCancel() {
  var action, url;
  return regeneratorRuntime.wrap(function deleteResourceCancel$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return take(_constants__WEBPACK_IMPORTED_MODULE_1__["default"].DIALOG_BOX_DELETE_RESOURCE_CANCEL);

        case 2:
          action = _context3.sent;
          url = Object(lodash__WEBPACK_IMPORTED_MODULE_3__["get"])(action, 'data.model.onCancelRedirectUrl', Object(lodash__WEBPACK_IMPORTED_MODULE_3__["get"])(action, 'data.model.redirectUrl'));
          _context3.next = 6;
          return call(redirect, url);

        case 6:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3);
}
/**
 * For Backward compatibility
 * Return a saga for delete resource confirmation dialog box.
 * Race between cancel and confirm deleting the resource.
 * To be used with the sagaRouter
 * @param {object} sagaParams the params to setup the saga
 * @param {string} sagaParams.uri the uri of the endpoint to make the calls
 * @param {string} sagaParams.resourceType the resource type to call delete endpoint ( at least )
 * @param {string} sagaParams.redirectUrl url to redirect after delete action is done or cancel
 * @param {Array<String>} sagaParams.resourcePath optional
 * @param {string} sagaParams.routerParamsAttribute optional param in route to get the resource id
 * @param {string} sagaParams.collectionId optional param to specify collection which stores
 * resources,if not provided, will use resourceType as collectionId
 * @param {string} sagaParams.resourceUri optionsal param, specify the uri to delete resource.
 * if not provided, will use ':uri/:resourceType/:resourceId'
 */

function getDeleteResourceSagaRouter() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      uri = _ref.uri,
      resourceType = _ref.resourceType,
      redirectUrl = _ref.redirectUrl,
      resourcePath = _ref.resourcePath,
      _ref$routerParamsAttr = _ref.routerParamsAttribute,
      routerParamsAttribute = _ref$routerParamsAttr === void 0 ? 'id' : _ref$routerParamsAttr,
      collectionId = _ref.collectionId,
      resourceUri = _ref.resourceUri;

  // eslint-disable-next-line no-console
  console.warn("DEPRECATED: please move the following sagaRouter config as props of DeleteResource container:\n\t{\n\t\turi: ".concat(uri, ",\n\t\tresourceType: ").concat(resourceType, ",\n\t\tredirectUrl: ").concat(redirectUrl, ",\n\t\tresourcePath: ").concat(resourcePath, ",\n\t}"));
  return /*#__PURE__*/regeneratorRuntime.mark(function deleteResourceSaga(routerParams) {
    return regeneratorRuntime.wrap(function deleteResourceSaga$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return race({
              deleteConfirmationValidate: call(deleteResourceValidate, uri, resourceType, routerParams[routerParamsAttribute], resourcePath, collectionId, resourceUri),
              deleteConfirmationCancel: call(deleteResourceCancel)
            });

          case 3:
            _context4.next = 8;
            break;

          case 5:
            _context4.prev = 5;
            _context4.t0 = _context4["catch"](0);
            throw new Error("DeleteResource failed :".concat(_context4.t0));

          case 8:
          case "end":
            return _context4.stop();
        }
      }
    }, deleteResourceSaga, null, [[0, 5]]);
  });
}

function handle() {
  return regeneratorRuntime.wrap(function handle$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return race({
            deleteConfirmationValidate: call(deleteResourceValidate),
            deleteConfirmationCancel: call(deleteResourceCancel)
          });

        case 3:
          _context5.next = 8;
          break;

        case 5:
          _context5.prev = 5;
          _context5.t0 = _context5["catch"](0);
          throw new Error("DeleteResource failed: ".concat(_context5.t0));

        case 8:
        case "end":
          return _context5.stop();
      }
    }
  }, _marked4, null, [[0, 5]]);
} // Backward compatibility


getDeleteResourceSagaRouter['DeleteResource#handle'] = handle;
/* harmony default export */ __webpack_exports__["default"] = (getDeleteResourceSagaRouter);

/***/ }),

/***/ "./src/EditableText/EditableText.connect.js":
/*!**************************************************!*\
  !*** ./src/EditableText/EditableText.connect.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _talend_react_cmf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @talend/react-cmf */ "@talend/react-cmf");
/* harmony import */ var _talend_react_cmf__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_talend_react_cmf__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _EditableText_container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EditableText.container */ "./src/EditableText/EditableText.container.js");


/* harmony default export */ __webpack_exports__["default"] = (Object(_talend_react_cmf__WEBPACK_IMPORTED_MODULE_0__["cmfConnect"])({
  defaultState: _EditableText_container__WEBPACK_IMPORTED_MODULE_1__["DEFAULT_STATE"],
  omitCMFProps: true,
  withComponentRegistry: true,
  withDispatch: true,
  withDispatchActionCreator: true,
  withComponentId: true
})(_EditableText_container__WEBPACK_IMPORTED_MODULE_1__["default"]));

/***/ }),

/***/ "./src/EditableText/EditableText.container.js":
/*!****************************************************!*\
  !*** ./src/EditableText/EditableText.container.js ***!
  \****************************************************/
/*! exports provided: DISPLAY_NAME, DEFAULT_STATE, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DISPLAY_NAME", function() { return DISPLAY_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_STATE", function() { return DEFAULT_STATE; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! immutable */ "immutable");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _talend_react_cmf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @talend/react-cmf */ "@talend/react-cmf");
/* harmony import */ var _talend_react_cmf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_talend_react_cmf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _talend_react_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @talend/react-components */ "@talend/react-components");
/* harmony import */ var _talend_react_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_talend_react_components__WEBPACK_IMPORTED_MODULE_5__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var DISPLAY_NAME = 'Container(EditableText)';
var DEFAULT_STATE = new immutable__WEBPACK_IMPORTED_MODULE_2___default.a.Map({
  editMode: false
});

var EditableText = /*#__PURE__*/function (_React$Component) {
  _inherits(EditableText, _React$Component);

  var _super = _createSuper(EditableText);

  function EditableText(props) {
    var _this;

    _classCallCheck(this, EditableText);

    _this = _super.call(this, props);
    _this.onCancel = _this.onCancel.bind(_assertThisInitialized(_this));
    _this.onEdit = _this.onEdit.bind(_assertThisInitialized(_this));
    _this.onSubmit = _this.onSubmit.bind(_assertThisInitialized(_this));
    _this.onChange = _this.onChange.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(EditableText, [{
    key: "onSubmit",
    value: function onSubmit(event, data) {
      this.props.setState({
        editMode: false
      });

      if (this.props.onSubmit) {
        this.props.onSubmit(event, data);
      }

      if (this.props.actionCreatorSubmit) {
        this.props.dispatchActionCreator(this.props.actionCreatorSubmit, event, {
          props: this.props,
          data: data
        });
      }
    }
  }, {
    key: "onCancel",
    value: function onCancel(event) {
      this.props.setState({
        editMode: false
      });

      if (this.props.onCancel) {
        this.props.onCancel(event);
      }

      if (this.props.actionCreatorCancel) {
        this.props.dispatchActionCreator(this.props.actionCreatorCancel, event, {
          props: this.props
        });
      }
    }
  }, {
    key: "onEdit",
    value: function onEdit(event) {
      this.props.setState({
        editMode: true
      });

      if (this.props.onEdit) {
        this.props.onEdit(event);
      }

      if (this.props.actionCreatorEdit) {
        this.props.dispatchActionCreator(this.props.actionCreatorEdit, event, {
          props: this.props
        });
      }
    }
  }, {
    key: "onChange",
    value: function onChange(event) {
      if (this.props.onChange) {
        this.props.onChange(event, event.target.value);
      }

      if (this.props.actionCreatorChange) {
        this.props.dispatchActionCreator(this.props.actionCreatorChange, event, {
          props: this.props,
          value: event.target.value
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var state = this.props.state || DEFAULT_STATE;

      var props = _objectSpread(_objectSpread({}, Object(lodash__WEBPACK_IMPORTED_MODULE_4__["omit"])(this.props, _talend_react_cmf__WEBPACK_IMPORTED_MODULE_3__["cmfConnect"].INJECTED_PROPS)), {}, {
        onEdit: this.onEdit,
        onCancel: this.onCancel,
        onSubmit: this.onSubmit,
        onChange: this.onChange
      }, state.toJS());

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_talend_react_components__WEBPACK_IMPORTED_MODULE_5__["EditableText"], props);
    }
  }]);

  return EditableText;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

_defineProperty(EditableText, "displayName", DISPLAY_NAME);

_defineProperty(EditableText, "propTypes", _objectSpread(_objectSpread({}, _talend_react_cmf__WEBPACK_IMPORTED_MODULE_3__["cmfConnect"].propTypes), {}, {
  actionCreatorCancel: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  actionCreatorEdit: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  actionCreatorSubmit: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  actionCreatorChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  onCancel: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onEdit: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onSubmit: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  text: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
}));

_defineProperty(EditableText, "contextTypes", {
  registry: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  store: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
});

/* harmony default export */ __webpack_exports__["default"] = (EditableText);

/***/ }),

/***/ "./src/EditableText/EditableText.selectors.js":
/*!****************************************************!*\
  !*** ./src/EditableText/EditableText.selectors.js ***!
  \****************************************************/
/*! exports provided: getEditMode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEditMode", function() { return getEditMode; });
/* harmony import */ var _EditableText_connect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EditableText.connect */ "./src/EditableText/EditableText.connect.js");

/**
 * Return the editMode attr from the state of editable text id given.
 * @param {object} state
 * @param {string} idComponent
 */

function getEditMode(state, idComponent) {
  return _EditableText_connect__WEBPACK_IMPORTED_MODULE_0__["default"].getState(state, idComponent).get('editMode', false);
}

/***/ }),

/***/ "./src/EditableText/index.js":
/*!***********************************!*\
  !*** ./src/EditableText/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EditableText_connect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EditableText.connect */ "./src/EditableText/EditableText.connect.js");
/* harmony import */ var _EditableText_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EditableText.selectors */ "./src/EditableText/EditableText.selectors.js");


_EditableText_connect__WEBPACK_IMPORTED_MODULE_0__["default"].selectors = _EditableText_selectors__WEBPACK_IMPORTED_MODULE_1__;
/* harmony default export */ __webpack_exports__["default"] = (_EditableText_connect__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/FilterBar/FilterBar.connect.js":
/*!********************************************!*\
  !*** ./src/FilterBar/FilterBar.connect.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _talend_react_cmf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @talend/react-cmf */ "@talend/react-cmf");
/* harmony import */ var _talend_react_cmf__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_talend_react_cmf__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _FilterBar_container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FilterBar.container */ "./src/FilterBar/FilterBar.container.js");


/* harmony default export */ __webpack_exports__["default"] = (Object(_talend_react_cmf__WEBPACK_IMPORTED_MODULE_0__["cmfConnect"])({
  componentId: function componentId(ownProps) {
    return ownProps.id;
  },
  defaultState: _FilterBar_container__WEBPACK_IMPORTED_MODULE_1__["DEFAULT_STATE"],
  omitCMFProps: true,
  withComponentRegistry: true,
  withDispatch: true,
  withDispatchActionCreator: true,
  withComponentId: true
})(_FilterBar_container__WEBPACK_IMPORTED_MODULE_1__["default"]));

/***/ }),

/***/ "./src/FilterBar/FilterBar.container.js":
/*!**********************************************!*\
  !*** ./src/FilterBar/FilterBar.container.js ***!
  \**********************************************/
/*! exports provided: QUERY_ATTR, DEFAULT_STATE, DISPLAY_NAME, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QUERY_ATTR", function() { return QUERY_ATTR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_STATE", function() { return DEFAULT_STATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DISPLAY_NAME", function() { return DISPLAY_NAME; });
/* harmony import */ var _talend_react_cmf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @talend/react-cmf */ "@talend/react-cmf");
/* harmony import */ var _talend_react_cmf__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_talend_react_cmf__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! immutable */ "immutable");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _talend_react_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @talend/react-components */ "@talend/react-components");
/* harmony import */ var _talend_react_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_talend_react_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
var _Immutable$Map;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var QUERY_ATTR = 'query';
var DEFAULT_STATE = new immutable__WEBPACK_IMPORTED_MODULE_3___default.a.Map((_Immutable$Map = {}, _defineProperty(_Immutable$Map, QUERY_ATTR, ''), _defineProperty(_Immutable$Map, "docked", true), _Immutable$Map));
var DISPLAY_NAME = 'Container(FilterBar)';
var DOCKED_ATTR = 'docked';

var FilterBar = /*#__PURE__*/function (_React$Component) {
  _inherits(FilterBar, _React$Component);

  var _super = _createSuper(FilterBar);

  function FilterBar(props) {
    var _this;

    _classCallCheck(this, FilterBar);

    _this = _super.call(this, props);
    _this.onFilter = _this.onFilter.bind(_assertThisInitialized(_this));
    _this.onToggle = _this.onToggle.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(FilterBar, [{
    key: "onFilter",
    value: function onFilter(event, value) {
      this.props.setState({
        query: value
      });

      if (this.props.onFilter) {
        this.props.onFilter(event, {
          query: value,
          props: this.props
        });
      }
    }
  }, {
    key: "onToggle",
    value: function onToggle(event) {
      var _this2 = this;

      this.props.setState(function (prevState) {
        var state = prevState.state;

        if (_this2.props.dockable) {
          state = state.set('docked', !_this2.props.state.get('docked'));
        }

        return state;
      });

      if (this.props.onToggle) {
        this.props.onToggle(event);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var state = this.props.state || DEFAULT_STATE;

      var props = _objectSpread(_objectSpread({}, Object(lodash__WEBPACK_IMPORTED_MODULE_5__["omit"])(this.props, _talend_react_cmf__WEBPACK_IMPORTED_MODULE_0__["cmfConnect"].INJECTED_PROPS)), {}, {
        docked: this.props.docked != null ? this.props.docked : state.get(DOCKED_ATTR),
        value: this.props.value ? this.props.value : state.get(QUERY_ATTR, ''),
        onToggle: this.onToggle,
        onFilter: this.onFilter
      });

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_talend_react_components__WEBPACK_IMPORTED_MODULE_4__["FilterBar"], props);
    }
  }]);

  return FilterBar;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

_defineProperty(FilterBar, "displayName", DISPLAY_NAME);

_defineProperty(FilterBar, "contextTypes", {
  registry: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  store: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
});

_defineProperty(FilterBar, "propTypes", _objectSpread(_objectSpread({}, _talend_react_cmf__WEBPACK_IMPORTED_MODULE_0__["cmfConnect"].propTypes), {}, {
  id: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  placeholder: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  filterInputValue: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  dockable: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool
}));

_defineProperty(FilterBar, "defaultProps", {
  dockable: true
});

/* harmony default export */ __webpack_exports__["default"] = (FilterBar);

/***/ }),

/***/ "./src/FilterBar/FilterBar.selectors.js":
/*!**********************************************!*\
  !*** ./src/FilterBar/FilterBar.selectors.js ***!
  \**********************************************/
/*! exports provided: getComponentState, getQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getComponentState", function() { return getComponentState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getQuery", function() { return getQuery; });
/* harmony import */ var _FilterBar_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FilterBar.container */ "./src/FilterBar/FilterBar.container.js");

/**
 * Selector on the state from the filter id given.
 * @param {object} state
 * @param {string} idComponent
 */

function getComponentState(state, idComponent) {
  if (state.cmf.components.hasIn([_FilterBar_container__WEBPACK_IMPORTED_MODULE_0__["DISPLAY_NAME"], idComponent])) {
    return state.cmf.components.getIn([_FilterBar_container__WEBPACK_IMPORTED_MODULE_0__["DISPLAY_NAME"], idComponent]);
  }

  return _FilterBar_container__WEBPACK_IMPORTED_MODULE_0__["DEFAULT_STATE"];
}
/**
 * Return the filterInputValue attr from the state of filter id given.
 * @param {object} state
 * @param {string} idComponent
 */

function getQuery(state, idComponent) {
  return getComponentState(state, idComponent).get('query', '');
}

/***/ }),

/***/ "./src/FilterBar/index.js":
/*!********************************!*\
  !*** ./src/FilterBar/index.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FilterBar_connect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FilterBar.connect */ "./src/FilterBar/FilterBar.connect.js");
/* harmony import */ var _FilterBar_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FilterBar.selectors */ "./src/FilterBar/FilterBar.selectors.js");


_FilterBar_connect__WEBPACK_IMPORTED_MODULE_0__["default"].selectors = _FilterBar_selectors__WEBPACK_IMPORTED_MODULE_1__;
/* harmony default export */ __webpack_exports__["default"] = (_FilterBar_connect__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/GuidedTour/GuidedTour.connect.js":
/*!**********************************************!*\
  !*** ./src/GuidedTour/GuidedTour.connect.js ***!
  \**********************************************/
/*! exports provided: DEFAULT_STATE, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_STATE", function() { return DEFAULT_STATE; });
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immutable */ "immutable");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _talend_react_cmf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @talend/react-cmf */ "@talend/react-cmf");
/* harmony import */ var _talend_react_cmf__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_talend_react_cmf__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _GuidedTour_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GuidedTour.container */ "./src/GuidedTour/GuidedTour.container.js");



var DEFAULT_STATE = Object(immutable__WEBPACK_IMPORTED_MODULE_0__["Map"])({});
/* harmony default export */ __webpack_exports__["default"] = (Object(_talend_react_cmf__WEBPACK_IMPORTED_MODULE_1__["cmfConnect"])({
  componentId: function componentId(ownProps) {
    return ownProps.componentId || ownProps.id;
  },
  defaultProps: {
    saga: 'GuidedTour#default'
  },
  defaultState: DEFAULT_STATE,
  withComponentId: true,
  withComponentRegistry: true,
  keepComponentState: true
})(_GuidedTour_container__WEBPACK_IMPORTED_MODULE_2__["default"]));

/***/ }),

/***/ "./src/GuidedTour/GuidedTour.constants.js":
/*!************************************************!*\
  !*** ./src/GuidedTour/GuidedTour.constants.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  GUIDED_TOUR_SHOW: 'GUIDED_TOUR_SHOW',
  GUIDED_TOUR_HIDE: 'GUIDED_TOUR_HIDE'
});

/***/ }),

/***/ "./src/GuidedTour/GuidedTour.container.js":
/*!************************************************!*\
  !*** ./src/GuidedTour/GuidedTour.container.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _talend_react_cmf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @talend/react-cmf */ "@talend/react-cmf");
/* harmony import */ var _talend_react_cmf__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_talend_react_cmf__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _talend_react_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @talend/react-components */ "@talend/react-components");
/* harmony import */ var _talend_react_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_talend_react_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var GuidedTourContainer = /*#__PURE__*/function (_React$Component) {
  _inherits(GuidedTourContainer, _React$Component);

  var _super = _createSuper(GuidedTourContainer);

  function GuidedTourContainer() {
    var _this;

    _classCallCheck(this, GuidedTourContainer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      controls: true
    });

    _defineProperty(_assertThisInitialized(_this), "getSteps", function () {
      var _this$props = _this.props,
          steps = _this$props.steps,
          t = _this$props.t;

      if (steps) {
        if (typeof steps === 'function') {
          return steps({
            showControls: _this.showControls,
            hideControls: _this.hideControls,
            t: t
          });
        }

        return steps;
      }

      return undefined;
    });

    _defineProperty(_assertThisInitialized(_this), "closeTour", function () {
      _this.showControls();

      if (_this.props.onClose) {
        _this.props.onClose();
      }

      _this.props.setState({
        show: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "showControls", function () {
      _this.setState({
        controls: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "hideControls", function () {
      _this.setState({
        controls: false
      });
    });

    return _this;
  }

  _createClass(GuidedTourContainer, [{
    key: "render",
    value: function render() {
      var steps = this.getSteps();

      if (!steps || !steps.length) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null);
      }

      var controls = this.state.controls;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_talend_react_components__WEBPACK_IMPORTED_MODULE_3__["GuidedTour"], _extends({
        isOpen: this.props.state.get('show'),
        steps: steps,
        onRequestClose: this.closeTour,
        showCloseButton: controls,
        showButtons: controls,
        disableKeyboardNavigation: !controls,
        disableAllInteractions: !controls
      }, Object(lodash__WEBPACK_IMPORTED_MODULE_4__["omit"])(this.props, _talend_react_cmf__WEBPACK_IMPORTED_MODULE_2__["cmfConnect"].INJECTED_PROPS)));
    }
  }]);

  return GuidedTourContainer;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

_defineProperty(GuidedTourContainer, "displayName", 'Container(GuidedTour)');

_defineProperty(GuidedTourContainer, "propTypes", _objectSpread(_objectSpread({}, _talend_react_cmf__WEBPACK_IMPORTED_MODULE_2__["cmfConnect"].propTypes), {}, {
  show: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  steps: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func]),
  onClose: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
}));

/* harmony default export */ __webpack_exports__["default"] = (GuidedTourContainer);

/***/ }),

/***/ "./src/GuidedTour/GuidedTour.sagas.js":
/*!********************************************!*\
  !*** ./src/GuidedTour/GuidedTour.sagas.js ***!
  \********************************************/
/*! exports provided: show, hide, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "show", function() { return show; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hide", function() { return hide; });
/* harmony import */ var _GuidedTour_connect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GuidedTour.connect */ "./src/GuidedTour/GuidedTour.connect.js");
/* harmony import */ var _GuidedTour_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GuidedTour.constants */ "./src/GuidedTour/GuidedTour.constants.js");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-saga */ "redux-saga");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_2__);
var _marked = /*#__PURE__*/regeneratorRuntime.mark(show),
    _marked2 = /*#__PURE__*/regeneratorRuntime.mark(hide),
    _marked3 = /*#__PURE__*/regeneratorRuntime.mark(defaultHandler);




var _effects = redux_saga__WEBPACK_IMPORTED_MODULE_2__["effects"],
    put = _effects.put,
    takeEvery = _effects.takeEvery;
function show() {
  return regeneratorRuntime.wrap(function show$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return put(_GuidedTour_connect__WEBPACK_IMPORTED_MODULE_0__["default"].setStateAction({
            show: true
          }));

        case 2:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}
function hide() {
  return regeneratorRuntime.wrap(function hide$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return put(_GuidedTour_connect__WEBPACK_IMPORTED_MODULE_0__["default"].setStateAction({
            show: false
          }));

        case 2:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2);
}

function defaultHandler() {
  return regeneratorRuntime.wrap(function defaultHandler$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return takeEvery(_GuidedTour_constants__WEBPACK_IMPORTED_MODULE_1__["default"].GUIDED_TOUR_SHOW, show);

        case 2:
          _context3.next = 4;
          return takeEvery(_GuidedTour_constants__WEBPACK_IMPORTED_MODULE_1__["default"].GUIDED_TOUR_HIDE, hide);

        case 4:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3);
}

/* harmony default export */ __webpack_exports__["default"] = ({
  'GuidedTour#default': defaultHandler
});

/***/ }),

/***/ "./src/GuidedTour/index.js":
/*!*********************************!*\
  !*** ./src/GuidedTour/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GuidedTour_connect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GuidedTour.connect */ "./src/GuidedTour/GuidedTour.connect.js");
/* harmony import */ var _GuidedTour_sagas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GuidedTour.sagas */ "./src/GuidedTour/GuidedTour.sagas.js");
/* harmony import */ var _GuidedTour_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GuidedTour.constants */ "./src/GuidedTour/GuidedTour.constants.js");



_GuidedTour_connect__WEBPACK_IMPORTED_MODULE_0__["default"].sagas = _GuidedTour_sagas__WEBPACK_IMPORTED_MODULE_1__["default"];
_GuidedTour_connect__WEBPACK_IMPORTED_MODULE_0__["default"].constants = _GuidedTour_constants__WEBPACK_IMPORTED_MODULE_2__["default"];
/* harmony default export */ __webpack_exports__["default"] = (_GuidedTour_connect__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/HeaderBar/HeaderBar.actions.js":
/*!********************************************!*\
  !*** ./src/HeaderBar/HeaderBar.actions.js ***!
  \********************************************/
/*! exports provided: fetchProducts, openProduct */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchProducts", function() { return fetchProducts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openProduct", function() { return openProduct; });
/* harmony import */ var _HeaderBar_constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HeaderBar.constant */ "./src/HeaderBar/HeaderBar.constant.js");

/**
 * Action dispatched when fetching products is required for the container
 * @param {String} url Fetch URL
 * @returns {Object}
 */

function fetchProducts(url) {
  return {
    type: _HeaderBar_constant__WEBPACK_IMPORTED_MODULE_0__["default"].HEADER_BAR_FETCH_PRODUCTS,
    payload: {
      url: url
    }
  };
}
/**
 * Action dispatched when clicking on a product in the header bar
 * @param {Object} product Opened product
 * @returns {Object}
 */

function openProduct(product) {
  return {
    type: _HeaderBar_constant__WEBPACK_IMPORTED_MODULE_0__["default"].HEADER_BAR_OPEN_PRODUCT,
    payload: product
  };
}

/***/ }),

/***/ "./src/HeaderBar/HeaderBar.connect.js":
/*!********************************************!*\
  !*** ./src/HeaderBar/HeaderBar.connect.js ***!
  \********************************************/
/*! exports provided: mapStateToProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapStateToProps", function() { return mapStateToProps; });
/* harmony import */ var _talend_react_cmf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @talend/react-cmf */ "@talend/react-cmf");
/* harmony import */ var _talend_react_cmf__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_talend_react_cmf__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _HeaderBar_container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HeaderBar.container */ "./src/HeaderBar/HeaderBar.container.js");
/* harmony import */ var _HeaderBar_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HeaderBar.constant */ "./src/HeaderBar/HeaderBar.constant.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





function mapStateToProps(state, ownProps) {
  var props = {
    productsItems: _talend_react_cmf__WEBPACK_IMPORTED_MODULE_0___default.a.selectors.collections.toJS(state, _HeaderBar_constant__WEBPACK_IMPORTED_MODULE_2__["default"].COLLECTION_ID)
  };
  var expression = Object(lodash__WEBPACK_IMPORTED_MODULE_3__["get"])(ownProps, 'callToAction.renderIfExpression');

  if (expression) {
    props.callToAction = _objectSpread(_objectSpread({}, ownProps.callToAction), _talend_react_cmf__WEBPACK_IMPORTED_MODULE_0___default.a.expression.mapStateToProps(state, ownProps.callToAction));

    if (props.callToAction.renderIf === false) {
      props.callToAction = null;
    }
  }

  return props;
}
/* harmony default export */ __webpack_exports__["default"] = (Object(_talend_react_cmf__WEBPACK_IMPORTED_MODULE_0__["cmfConnect"])({
  defaultState: _HeaderBar_container__WEBPACK_IMPORTED_MODULE_1__["DEFAULT_STATE"],
  defaultProps: {
    saga: 'HeaderBar#default'
  },
  mapStateToProps: mapStateToProps,
  omitCMFProps: true,
  withComponentRegistry: true,
  withDispatch: true,
  withDispatchActionCreator: true,
  withComponentId: true
})(_HeaderBar_container__WEBPACK_IMPORTED_MODULE_1__["default"]));

/***/ }),

/***/ "./src/HeaderBar/HeaderBar.constant.js":
/*!*********************************************!*\
  !*** ./src/HeaderBar/HeaderBar.constant.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  COLLECTION_ID: 'HEADER_BAR_COLLECTION',
  // Fetching statuses
  PRODUCTS_NOT_LOADED: 'PRODUCTS_NOT_LOADED',
  FETCHING_PRODUCTS: 'FETCHING_PRODUCTS',
  FETCH_PRODUCTS_ERROR: 'FETCH_PRODUCTS_ERROR',
  FETCH_PRODUCTS_SUCCESS: 'FETCH_PRODUCTS_SUCCESS',
  // Actions
  HEADER_BAR_FETCH_PRODUCTS: 'HEADER_BAR_FETCH_PRODUCTS',
  HEADER_BAR_OPEN_PRODUCT: 'HEADER_BAR_OPEN_PRODUCT'
});

/***/ }),

/***/ "./src/HeaderBar/HeaderBar.container.js":
/*!**********************************************!*\
  !*** ./src/HeaderBar/HeaderBar.container.js ***!
  \**********************************************/
/*! exports provided: DEFAULT_STATE, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_STATE", function() { return DEFAULT_STATE; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! immutable */ "immutable");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _talend_react_cmf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @talend/react-cmf */ "@talend/react-cmf");
/* harmony import */ var _talend_react_cmf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_talend_react_cmf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _HeaderBar_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./HeaderBar.actions */ "./src/HeaderBar/HeaderBar.actions.js");
/* harmony import */ var _HeaderBar_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./HeaderBar.constant */ "./src/HeaderBar/HeaderBar.constant.js");
/* harmony import */ var _talend_react_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @talend/react-components */ "@talend/react-components");
/* harmony import */ var _talend_react_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_talend_react_components__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_7__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









var DEFAULT_STATE = new immutable__WEBPACK_IMPORTED_MODULE_2__["Map"]({
  productsFetchState: _HeaderBar_constant__WEBPACK_IMPORTED_MODULE_5__["default"].PRODUCTS_NOT_LOADED
});

function sortProductsByLabel(a, b) {
  return a.label > b.label ? 1 : -1;
}

var HeaderBar = /*#__PURE__*/function (_React$Component) {
  _inherits(HeaderBar, _React$Component);

  var _super = _createSuper(HeaderBar);

  function HeaderBar() {
    _classCallCheck(this, HeaderBar);

    return _super.apply(this, arguments);
  }

  _createClass(HeaderBar, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      // Trigger product fetch when there's an URL and
      // products URL has changed or products have not been loaded yet
      var hasProductsUrlChanged = this.props.productsUrl !== prevProps.productsUrl;
      var hasProductsNotBeenLoaded = this.props.state.get('productsFetchState') === _HeaderBar_constant__WEBPACK_IMPORTED_MODULE_5__["default"].PRODUCTS_NOT_LOADED;

      if (this.props.productsUrl && (hasProductsNotBeenLoaded || hasProductsUrlChanged)) {
        this.props.dispatch(Object(_HeaderBar_actions__WEBPACK_IMPORTED_MODULE_4__["fetchProducts"])(this.props.productsUrl));
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          productsFromState = _this$props.productsItems,
          productsSort = _this$props.productsSort,
          prepareProducts = _this$props.prepareProducts,
          props = _objectWithoutProperties(_this$props, ["productsItems", "productsSort", "prepareProducts"]);

      var hasFetchedProducts = this.props.state.get('productsFetchState') === _HeaderBar_constant__WEBPACK_IMPORTED_MODULE_5__["default"].FETCH_PRODUCTS_SUCCESS;
      var productsProps = {};

      if (hasFetchedProducts && productsFromState) {
        var productsFromProps = props.products || {};
        var itemsFromProps = (productsFromProps.items ? props.products.items : []).map(function (item) {
          if (item.dispatch) {
            return _objectSpread(_objectSpread({}, item), {}, {
              onClickDispatch: item.dispatch
            });
          }

          return item;
        });
        var items = [].concat(_toConsumableArray(itemsFromProps), _toConsumableArray(productsFromState.map(function (product) {
          return {
            'data-feature': "product.".concat((product.id || '').toLowerCase()),
            label: product.name,
            icon: "talend-".concat(product.icon, "-colored"),
            onClickDispatch: Object(_HeaderBar_actions__WEBPACK_IMPORTED_MODULE_4__["openProduct"])(product)
          };
        })));
        productsProps.products = _objectSpread(_objectSpread({}, productsFromProps), {}, {
          items: items
        });
        productsProps.products.items.sort(productsSort || sortProductsByLabel);

        if (prepareProducts) {
          productsProps.products.items = prepareProducts(productsProps.products.items);
        }
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_talend_react_components__WEBPACK_IMPORTED_MODULE_6__["HeaderBar"], _extends({}, Object(lodash__WEBPACK_IMPORTED_MODULE_7__["omit"])(props, _talend_react_cmf__WEBPACK_IMPORTED_MODULE_3__["cmfConnect"].INJECTED_PROPS), productsProps));
    }
  }]);

  return HeaderBar;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

_defineProperty(HeaderBar, "displayName", 'Container(HeaderBar)');

_defineProperty(HeaderBar, "propTypes", _objectSpread({
  productsUrl: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  productsItems: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    icon: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    url: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
  })),
  productsSort: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  prepareProducts: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
}, _talend_react_cmf__WEBPACK_IMPORTED_MODULE_3__["cmfConnect"].propTypes));

/* harmony default export */ __webpack_exports__["default"] = (HeaderBar);

/***/ }),

/***/ "./src/HeaderBar/HeaderBar.sagas.js":
/*!******************************************!*\
  !*** ./src/HeaderBar/HeaderBar.sagas.js ***!
  \******************************************/
/*! exports provided: fetchProducts, handleOpenProduct, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchProducts", function() { return fetchProducts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleOpenProduct", function() { return handleOpenProduct; });
/* harmony import */ var _talend_react_cmf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @talend/react-cmf */ "@talend/react-cmf");
/* harmony import */ var _talend_react_cmf__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_talend_react_cmf__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _HeaderBar_connect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HeaderBar.connect */ "./src/HeaderBar/HeaderBar.connect.js");
/* harmony import */ var _HeaderBar_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HeaderBar.constant */ "./src/HeaderBar/HeaderBar.constant.js");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-saga */ "redux-saga");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_3__);
var _marked = /*#__PURE__*/regeneratorRuntime.mark(fetchProducts),
    _marked2 = /*#__PURE__*/regeneratorRuntime.mark(defaultHandler);




/**
 * This saga takes care of fetching authorized products for the HeaderBar
 * container according to the provided products URL in the action's payload.
 * @param {Object} action
 */


var _effects = redux_saga__WEBPACK_IMPORTED_MODULE_3__["effects"],
    call = _effects.call,
    put = _effects.put,
    takeEvery = _effects.takeEvery,
    take = _effects.take;
function fetchProducts(action) {
  var url, _yield$call, response, data;

  return regeneratorRuntime.wrap(function fetchProducts$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          url = action.payload.url;
          _context.next = 3;
          return put(_HeaderBar_connect__WEBPACK_IMPORTED_MODULE_1__["default"].setStateAction({
            productsFetchState: _HeaderBar_constant__WEBPACK_IMPORTED_MODULE_2__["default"].FETCHING_PRODUCTS
          }));

        case 3:
          _context.next = 5;
          return call(_talend_react_cmf__WEBPACK_IMPORTED_MODULE_0___default.a.sagas.http.get, url);

        case 5:
          _yield$call = _context.sent;
          response = _yield$call.response;
          data = _yield$call.data;

          if (!response.ok) {
            _context.next = 15;
            break;
          }

          _context.next = 11;
          return put(_HeaderBar_connect__WEBPACK_IMPORTED_MODULE_1__["default"].setStateAction({
            productsFetchState: _HeaderBar_constant__WEBPACK_IMPORTED_MODULE_2__["default"].FETCH_PRODUCTS_SUCCESS
          }));

        case 11:
          _context.next = 13;
          return put(_talend_react_cmf__WEBPACK_IMPORTED_MODULE_0___default.a.actions.collections.addOrReplace(_HeaderBar_constant__WEBPACK_IMPORTED_MODULE_2__["default"].COLLECTION_ID, data));

        case 13:
          _context.next = 17;
          break;

        case 15:
          _context.next = 17;
          return put(_HeaderBar_connect__WEBPACK_IMPORTED_MODULE_1__["default"].setStateAction({
            productsFetchState: _HeaderBar_constant__WEBPACK_IMPORTED_MODULE_2__["default"].FETCH_PRODUCTS_ERROR
          }));

        case 17:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}
/**
 * Handle the opening of a product from the HeaderBar
 * Behavior will be extended in the future (interaction with browser extension ...),
 * for now we only handle link opening
 * @param {Object} action
 */

function handleOpenProduct(action) {
  if ('url' in action.payload && !/^javascript:/.test(action.payload.url.toLowerCase())) {
    window.location.assign(action.payload.url);
  }
}

function defaultHandler() {
  return regeneratorRuntime.wrap(function defaultHandler$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return takeEvery(_HeaderBar_constant__WEBPACK_IMPORTED_MODULE_2__["default"].HEADER_BAR_FETCH_PRODUCTS, fetchProducts);

        case 2:
          _context2.next = 4;
          return takeEvery(_HeaderBar_constant__WEBPACK_IMPORTED_MODULE_2__["default"].HEADER_BAR_OPEN_PRODUCT, handleOpenProduct);

        case 4:
          _context2.next = 6;
          return take('DO_NOT_QUIT');

        case 6:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2);
}

/* harmony default export */ __webpack_exports__["default"] = ({
  'HeaderBar#default': defaultHandler
});

/***/ }),

/***/ "./src/HeaderBar/index.js":
/*!********************************!*\
  !*** ./src/HeaderBar/index.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HeaderBar_connect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HeaderBar.connect */ "./src/HeaderBar/HeaderBar.connect.js");
/* harmony import */ var _HeaderBar_sagas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HeaderBar.sagas */ "./src/HeaderBar/HeaderBar.sagas.js");
/* harmony import */ var _HeaderBar_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HeaderBar.constant */ "./src/HeaderBar/HeaderBar.constant.js");
/* harmony import */ var _HeaderBar_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./HeaderBar.actions */ "./src/HeaderBar/HeaderBar.actions.js");




_HeaderBar_connect__WEBPACK_IMPORTED_MODULE_0__["default"].sagas = _HeaderBar_sagas__WEBPACK_IMPORTED_MODULE_1__["default"];
_HeaderBar_connect__WEBPACK_IMPORTED_MODULE_0__["default"].constant = _HeaderBar_constant__WEBPACK_IMPORTED_MODULE_2__;
_HeaderBar_connect__WEBPACK_IMPORTED_MODULE_0__["default"].actions = _HeaderBar_actions__WEBPACK_IMPORTED_MODULE_3__;
/* harmony default export */ __webpack_exports__["default"] = (_HeaderBar_connect__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/HomeListView/HomeListView.component.js":
/*!****************************************************!*\
  !*** ./src/HomeListView/HomeListView.component.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _List__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../List */ "./src/List/index.js");
/* harmony import */ var _SidePanel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../SidePanel */ "./src/SidePanel/index.js");
/* harmony import */ var _talend_react_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @talend/react-components */ "@talend/react-components");
/* harmony import */ var _talend_react_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_talend_react_components__WEBPACK_IMPORTED_MODULE_4__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }







function getContent(Component, props) {
  if ( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.isValidElement(props)) {
    return props;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Component, props);
}

function wrapChildren(children) {
  if (children && children.props && children.props.children) {
    return [children].concat(_toConsumableArray(wrapChildren(children.props.children)));
  } else if (children && !children.props) {
    // this happens ony in tests with enzyme's mount
    return [];
  }

  return [children];
}

function HomeListView(_ref) {
  var getComponent = _ref.getComponent,
      components = _ref.components,
      id = _ref.id,
      hasTheme = _ref.hasTheme,
      sidepanel = _ref.sidepanel,
      list = _ref.list,
      header = _ref.header,
      children = _ref.children;

  if (!sidepanel || !list) {
    return null;
  }

  var drawers = children || [];

  if (!Array.isArray(drawers)) {
    drawers = wrapChildren(drawers);
  }

  if (components && components.drawers) {
    drawers = drawers.concat(_talend_react_components__WEBPACK_IMPORTED_MODULE_4__["Inject"].map(getComponent, components.drawers));
  }

  var Renderers = _talend_react_components__WEBPACK_IMPORTED_MODULE_4__["Inject"].getAll(getComponent, {
    HeaderBar: _talend_react_components__WEBPACK_IMPORTED_MODULE_4__["HeaderBar"],
    SidePanel: _SidePanel__WEBPACK_IMPORTED_MODULE_3__["default"],
    List: _List__WEBPACK_IMPORTED_MODULE_2__["default"]
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_talend_react_components__WEBPACK_IMPORTED_MODULE_4__["Layout"], {
    id: id,
    hasTheme: hasTheme,
    mode: "TwoColumns",
    header: getContent(Renderers.HeaderBar, header),
    one: getContent(Renderers.SidePanel, sidepanel),
    drawers: drawers
  }, getContent(Renderers.List, list));
}

HomeListView.displayName = 'HomeListView';
HomeListView.propTypes = {
  getComponent: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  id: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  hasTheme: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  components: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object,
  header: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.element, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object]),
  sidepanel: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.element, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object]).isRequired,
  list: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.element, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object]).isRequired,
  children: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.node
};
/* harmony default export */ __webpack_exports__["default"] = (HomeListView);

/***/ }),

/***/ "./src/HomeListView/HomeListView.connect.js":
/*!**************************************************!*\
  !*** ./src/HomeListView/HomeListView.connect.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _talend_react_cmf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @talend/react-cmf */ "@talend/react-cmf");
/* harmony import */ var _talend_react_cmf__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_talend_react_cmf__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _HomeListView_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HomeListView.component */ "./src/HomeListView/HomeListView.component.js");


/* harmony default export */ __webpack_exports__["default"] = (Object(_talend_react_cmf__WEBPACK_IMPORTED_MODULE_0__["cmfConnect"])({
  omitCMFProps: true,
  withComponentRegistry: true,
  withDispatch: true,
  withDispatchActionCreator: true,
  withComponentId: true
})(_HomeListView_component__WEBPACK_IMPORTED_MODULE_1__["default"]));

/***/ }),

/***/ "./src/HomeListView/index.js":
/*!***********************************!*\
  !*** ./src/HomeListView/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HomeListView_connect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HomeListView.connect */ "./src/HomeListView/HomeListView.connect.js");

/* harmony default export */ __webpack_exports__["default"] = (_HomeListView_connect__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/List/List.connect.js":
/*!**********************************!*\
  !*** ./src/List/List.connect.js ***!
  \**********************************/
/*! exports provided: mapStateToProps, mergeProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapStateToProps", function() { return mapStateToProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeProps", function() { return mergeProps; });
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immutable */ "immutable");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _talend_react_cmf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @talend/react-cmf */ "@talend/react-cmf");
/* harmony import */ var _talend_react_cmf__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_talend_react_cmf__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _List_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./List.container */ "./src/List/List.container.js");
/* harmony import */ var _selector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./selector */ "./src/List/selector.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







function componentId(ownProps) {
  return ownProps.collectionId;
}

function getItems(state, config) {
  var items = config.items;

  if (config.defaultFiltering !== false) {
    items = Object(_selector__WEBPACK_IMPORTED_MODULE_3__["configureGetFilteredItems"])(config)(state);
  }

  if (config.defaultSorting !== false) {
    items = Object(_selector__WEBPACK_IMPORTED_MODULE_3__["configureGetSortedItems"])(config, items)(state);
  }

  return items;
}

function getPagedItems(state, config, items) {
  if (config.defaultPaging !== false) {
    return Object(_selector__WEBPACK_IMPORTED_MODULE_3__["configureGetPagedItems"])(config, items)(state);
  }

  return items;
}

function mapStateToProps(state, ownProps, cmfProps) {
  var props = {};
  var collectionItems = Object(_selector__WEBPACK_IMPORTED_MODULE_3__["getCollectionItems"])(state, ownProps.collectionId);
  var config = {
    collectionId: ownProps.collectionId,
    items: collectionItems || ownProps.items || ownProps.listItems,
    defaultFiltering: Object(lodash__WEBPACK_IMPORTED_MODULE_4__["get"])(ownProps, ['toolbar', 'filter', 'defaultFiltering']),
    defaultSorting: Object(lodash__WEBPACK_IMPORTED_MODULE_4__["get"])(ownProps, ['toolbar', 'sort', 'defaultSorting']),
    defaultPaging: Object(lodash__WEBPACK_IMPORTED_MODULE_4__["get"])(ownProps, ['toolbar', 'pagination', 'defaultPaging'])
  };

  if (ownProps.list) {
    config.columns = ownProps.list.columns;
  }

  props.items = getItems(state, config);
  var totalResults = props.items.size;

  if (Object(lodash__WEBPACK_IMPORTED_MODULE_4__["get"])(ownProps, ['toolbar', 'pagination'])) {
    props.items = getPagedItems(state, config, props.items);
  }

  var cmfState = Object(lodash__WEBPACK_IMPORTED_MODULE_4__["get"])(cmfProps, 'state');

  if (cmfState) {
    props.state = cmfState.setIn(['totalResults'], totalResults);

    if (props.state.has('toolbar')) {
      props.state = props.state.mergeIn(['toolbar', 'pagination'], Object(_selector__WEBPACK_IMPORTED_MODULE_3__["configureGetPagination"])(state, config));
    }
  }

  return props;
}
function mergeProps(stateProps, dispatchProps, ownProps) {
  var props = _objectSpread(_objectSpread(_objectSpread({}, ownProps), stateProps), dispatchProps);

  if (props.actionIds) {
    delete props.actionIds;
  }

  return props;
}
/* harmony default export */ __webpack_exports__["default"] = (Object(_talend_react_cmf__WEBPACK_IMPORTED_MODULE_1__["cmfConnect"])({
  defaultState: _List_container__WEBPACK_IMPORTED_MODULE_2__["DEFAULT_STATE"],
  defaultProps: {
    saga: 'List#root',
    listItems: new immutable__WEBPACK_IMPORTED_MODULE_0__["List"]()
  },
  componentId: componentId,
  mapStateToProps: mapStateToProps,
  omitCMFProps: true,
  withComponentRegistry: true,
  withDispatch: true,
  withDispatchActionCreator: true,
  withComponentId: true
})(_List_container__WEBPACK_IMPORTED_MODULE_2__["default"]));

/***/ }),

/***/ "./src/List/List.constant.js":
/*!***********************************!*\
  !*** ./src/List/List.constant.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  LIST_TOGGLE_FILTER: 'LIST_TOGGLE_FILTER',
  LIST_FILTER_CHANGE: 'LIST_FILTER_CHANGE',
  LIST_CHANGE_SORT_ORDER: 'LIST_CHANGE_SORT_ORDER'
});

/***/ }),

/***/ "./src/List/List.container.js":
/*!************************************!*\
  !*** ./src/List/List.container.js ***!
  \************************************/
/*! exports provided: connectedCellDictionary, DEFAULT_STATE, getItems, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "connectedCellDictionary", function() { return connectedCellDictionary; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_STATE", function() { return DEFAULT_STATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getItems", function() { return getItems; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_immutable_proptypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-immutable-proptypes */ "../../node_modules/react-immutable-proptypes/dist/ImmutablePropTypes.js");
/* harmony import */ var react_immutable_proptypes__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_immutable_proptypes__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! immutable */ "immutable");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _talend_react_cmf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @talend/react-cmf */ "@talend/react-cmf");
/* harmony import */ var _talend_react_cmf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_talend_react_cmf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _actionAPI__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../actionAPI */ "./src/actionAPI.js");
/* harmony import */ var _List_constant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./List.constant */ "./src/List/List.constant.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _talend_react_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @talend/react-components */ "@talend/react-components");
/* harmony import */ var _talend_react_components__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_talend_react_components__WEBPACK_IMPORTED_MODULE_8__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











function mapStateToProps(state, ownProps) {
  if (!ownProps.columnData) {
    return {};
  }

  var exp = _talend_react_cmf__WEBPACK_IMPORTED_MODULE_4___default.a.expression.mapStateToProps(state, ownProps.columnData, {
    props: ownProps
  });

  if (Object.keys(exp).length) {
    return {
      columnData: _objectSpread(_objectSpread({}, _talend_react_cmf__WEBPACK_IMPORTED_MODULE_4___default.a.expression.mergeProps(ownProps.columnData)), exp)
    };
  }

  return {};
}

var ConnectedCellTitle = Object(_talend_react_cmf__WEBPACK_IMPORTED_MODULE_4__["cmfConnect"])({
  mapStateToProps: mapStateToProps,
  omitCMFProps: true,
  withComponentRegistry: true,
  withDispatch: true,
  withDispatchActionCreator: true,
  withComponentId: true
})(_talend_react_components__WEBPACK_IMPORTED_MODULE_8__["VirtualizedList"].cellDictionary.title.cellRenderer);
var connectedCellDictionary = {
  title: _objectSpread(_objectSpread({}, _talend_react_components__WEBPACK_IMPORTED_MODULE_8__["VirtualizedList"].cellDictionary.title), {}, {
    cellRenderer: function cellRenderer(props) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ConnectedCellTitle, props);
    }
  })
};
var DEFAULT_STATE = new immutable__WEBPACK_IMPORTED_MODULE_3__["Map"]({
  displayMode: 'table',
  selectedItems: new immutable__WEBPACK_IMPORTED_MODULE_3__["List"](),
  searchQuery: '',
  itemsPerPage: 10,
  startIndex: 1,
  totalResults: 0,
  sortOn: 'name',
  sortAsc: true,
  filterDocked: true
});
/**
 * merge props.items with actions
 * @param  {Object} context [description]
 * @param  {Object} props   [description]
 * @return {Array}          [description]
 */

function getItems(context, props) {
  return props.items.toJS().map(function (item) {
    var actionsItems = Object(lodash__WEBPACK_IMPORTED_MODULE_7__["get"])(props, 'actions.items', []);
    var actions = [];

    if (Array.isArray(actionsItems) && actionsItems.every(function (actionsItem) {
      return Array.isArray(actionsItem);
    })) {
      actions = actionsItems.map(function (actionArray) {
        return Object(_actionAPI__WEBPACK_IMPORTED_MODULE_5__["getActionsProps"])(context, actionArray, item);
      });
    } else {
      // simple array of actions
      actions = Object(_actionAPI__WEBPACK_IMPORTED_MODULE_5__["getActionsProps"])(context, actionsItems, item);
    }

    return _objectSpread(_objectSpread({}, item), {}, {
      actions: actions,
      persistentActions: Object(_actionAPI__WEBPACK_IMPORTED_MODULE_5__["getActionsProps"])(context, Object(lodash__WEBPACK_IMPORTED_MODULE_7__["get"])(props, 'actions.persistentItemsActions', []), item)
    });
  });
}

var List = /*#__PURE__*/function (_React$Component) {
  _inherits(List, _React$Component);

  var _super = _createSuper(List);

  function List(props) {
    var _this;

    _classCallCheck(this, List);

    _this = _super.call(this, props);
    _this.onSelectDisplayMode = _this.onSelectDisplayMode.bind(_assertThisInitialized(_this));
    _this.onChangePage = _this.onChangePage.bind(_assertThisInitialized(_this));
    _this.onToggleMultiSelection = _this.onToggleMultiSelection.bind(_assertThisInitialized(_this));
    _this.onToggleAllMultiSelection = _this.onToggleAllMultiSelection.bind(_assertThisInitialized(_this));
    _this.isSelected = _this.isSelected.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(List, [{
    key: "onChangePage",
    value: function onChangePage(startIndex, itemsPerPage) {
      this.props.setState({
        startIndex: startIndex,
        itemsPerPage: itemsPerPage
      });
    }
  }, {
    key: "onSelectDisplayMode",
    value: function onSelectDisplayMode(event, payload) {
      this.props.setState({
        displayMode: payload
      });
    }
  }, {
    key: "onToggleMultiSelection",
    value: function onToggleMultiSelection(event, data) {
      var selectedItems = this.getSelectedItems();
      var dataIndex = selectedItems.indexOf(data[this.props.idKey]);

      if (dataIndex > -1) {
        this.props.setState({
          selectedItems: selectedItems.splice(dataIndex, 1)
        });
      } else {
        this.props.setState({
          selectedItems: selectedItems.push(data[this.props.idKey])
        });
      }
    }
  }, {
    key: "onToggleAllMultiSelection",
    value: function onToggleAllMultiSelection() {
      var _this2 = this;

      var selectedItems = this.getSelectedItems();
      var items = this.props.items;

      if (selectedItems.size !== items.size) {
        this.props.setState({
          selectedItems: items.map(function (item) {
            return item.get(_this2.props.idKey);
          })
        });
      } else {
        this.props.setState({
          selectedItems: new immutable__WEBPACK_IMPORTED_MODULE_3__["List"]([])
        });
      }
    }
  }, {
    key: "getSelectedItems",
    value: function getSelectedItems() {
      return this.props.state.get('selectedItems', new immutable__WEBPACK_IMPORTED_MODULE_3__["List"]());
    }
  }, {
    key: "getGenericDispatcher",
    value: function getGenericDispatcher(property) {
      var _this3 = this;

      return function (event, data) {
        _this3.props.dispatchActionCreator(property, event, data, _this3.context);
      };
    }
  }, {
    key: "isSelected",
    value: function isSelected(item) {
      var _this4 = this;

      var selectedItems = this.getSelectedItems();
      return selectedItems.some(function (itemKey) {
        return itemKey === item[_this4.props.idKey];
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this5 = this;

      var state = this.props.state.toJS();
      var items = getItems(this.context, this.props);

      var props = _objectSpread({}, Object(lodash__WEBPACK_IMPORTED_MODULE_7__["omit"])(this.props, _talend_react_cmf__WEBPACK_IMPORTED_MODULE_4__["cmfConnect"].INJECTED_PROPS));

      if (!props.displayMode) {
        props.displayMode = state.displayMode;
      }

      if (!props.list) {
        props.list = {};
      }

      if (!props.list.id) {
        props.list.id = 'list';
      }

      props.list.items = items;

      if (!props.list.columns) {
        props.list.columns = [];
      }

      props.list.sort = {
        field: state.sortOn,
        isDescending: !state.sortAsc,
        onChange: function onChange(event, data) {
          _this5.props.dispatch({
            type: _List_constant__WEBPACK_IMPORTED_MODULE_6__["default"].LIST_CHANGE_SORT_ORDER,
            payload: data,
            collectionId: props.collectionId,
            event: event
          });
        }
      };

      if (!props.list.itemProps) {
        props.list.itemProps = {};
      }

      if (this.props.rowHeight) {
        props.rowHeight = this.props.rowHeight[props.displayMode];
      }

      if (props.list.titleProps && this.props.actions.title) {
        if (this.props.actions.title) {
          props.list.titleProps.onClick = this.getGenericDispatcher(this.props.actions.title);
        }

        if (this.props.actions.editSubmit) {
          props.list.titleProps.onEditSubmit = this.getGenericDispatcher(this.props.actions.editSubmit);
        }

        if (this.props.actions.editCancel) {
          props.list.titleProps.onEditCancel = this.getGenericDispatcher(this.props.actions.editCancel);
        }
      }

      var cellDictionary = _objectSpread({}, connectedCellDictionary);

      if (props.cellDictionary) {
        Object.keys(props.cellDictionary).reduce(function (accumulator, key) {
          var current = props.cellDictionary[key]; // eslint-disable-next-line no-param-reassign

          accumulator[key] = _objectSpread(_objectSpread({}, Object(lodash__WEBPACK_IMPORTED_MODULE_7__["omit"])(current, ['component'])), {}, {
            cellRenderer: props.getComponent(current.component)
          });
          return accumulator;
        }, cellDictionary);
      }

      props.list.cellDictionary = cellDictionary;

      if (props.headerDictionary) {
        props.list.headerDictionary = Object.keys(props.headerDictionary).reduce(function (accumulator, key) {
          var current = props.headerDictionary[key]; // eslint-disable-next-line no-param-reassign

          accumulator[key] = _objectSpread(_objectSpread({}, Object(lodash__WEBPACK_IMPORTED_MODULE_7__["omit"])(current, ['component'])), {}, {
            headerRenderer: props.getComponent(current.component)
          });
          return accumulator;
        }, {});
      } // toolbar


      if (props.toolbar) {
        if (props.toolbar.display) {
          props.toolbar.display = _objectSpread(_objectSpread({}, props.toolbar.display), {}, {
            onChange: function onChange(event, data) {
              _this5.onSelectDisplayMode(event, data);
            }
          });
        }

        if (props.toolbar.sort) {
          props.toolbar.sort.isDescending = !state.sortAsc;
          props.toolbar.sort.field = state.sortOn;

          props.toolbar.sort.onChange = function (event, data) {
            _this5.props.dispatch({
              type: _List_constant__WEBPACK_IMPORTED_MODULE_6__["default"].LIST_CHANGE_SORT_ORDER,
              payload: data,
              collectionId: props.collectionId,
              event: event
            });
          };
        }

        if (props.toolbar.filter) {
          props.toolbar.filter.onToggle = function (event, data) {
            _this5.props.dispatch({
              type: _List_constant__WEBPACK_IMPORTED_MODULE_6__["default"].LIST_TOGGLE_FILTER,
              payload: _objectSpread(_objectSpread({}, data), {}, {
                filterDocked: state.filterDocked,
                searchQuery: state.searchQuery
              }),
              collectionId: props.collectionId,
              event: event
            });
          };

          props.toolbar.filter.onFilter = function (event, data) {
            _this5.props.dispatch({
              type: _List_constant__WEBPACK_IMPORTED_MODULE_6__["default"].LIST_FILTER_CHANGE,
              payload: data,
              collectionId: props.collectionId,
              event: event
            });
          };

          props.toolbar.filter.docked = state.filterDocked;
          props.toolbar.filter.value = state.searchQuery;
        }

        props.toolbar.actionBar = {
          actions: {},
          multiSelectActions: {}
        }; // settings up multi selection

        if (props.multiSelectActions && props.idKey) {
          props.list.itemProps.onToggle = this.onToggleMultiSelection;
          props.list.itemProps.onToggleAll = this.onToggleAllMultiSelection;
          props.list.itemProps.isSelected = this.isSelected;
          props.toolbar.actionBar.selected = this.getSelectedItems().size;
        }

        var actions = this.props.actions;
        var multiSelectActions = this.props.multiSelectActions;

        if (multiSelectActions) {
          if (multiSelectActions.left) {
            props.toolbar.actionBar.multiSelectActions.left = multiSelectActions.left.map(function (action) {
              return {
                actionId: action
              };
            });
          }

          if (multiSelectActions.right) {
            props.toolbar.actionBar.multiSelectActions.right = multiSelectActions.right.map(function (action) {
              return {
                actionId: action
              };
            });
          }
        }

        if (actions) {
          if (actions.left) {
            props.toolbar.actionBar.actions.left = actions.left.map(function (action) {
              return {
                actionId: action
              };
            });
          }

          if (actions.right) {
            props.toolbar.actionBar.actions.right = actions.right.map(function (action) {
              return {
                actionId: action
              };
            });
          }
        }

        if (props.toolbar.pagination) {
          var pagination = props.toolbar.pagination;

          _extends(props.toolbar.pagination, _objectSpread({}, Object(lodash__WEBPACK_IMPORTED_MODULE_7__["pick"])(state, ['totalResults', 'itemsPerPage', 'startIndex'])));

          if (!pagination.onChange) {
            pagination.onChange = function (startIndex, itemsPerPage) {
              _this5.onChangePage(startIndex, itemsPerPage);
            };
          } else if (typeof pagination.onChange === 'string') {
            var onChangeActionCreator = pagination.onChange;

            pagination.onChange = function (startIndex, itemsPerPage) {
              _this5.props.dispatchActionCreator(onChangeActionCreator, null, {
                startIndex: startIndex,
                itemsPerPage: itemsPerPage
              }, _this5.context);
            };
          }
        }
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_talend_react_components__WEBPACK_IMPORTED_MODULE_8__["List"], props);
    }
  }]);

  return List;
}(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);

_defineProperty(List, "displayName", 'Container(List)');

_defineProperty(List, "propTypes", _objectSpread({
  actions: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
    title: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
    left: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string),
    right: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string)
  }),
  multiSelectActions: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
    title: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
    left: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string),
    right: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string)
  }),
  idKey: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  list: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
    columns: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.array,
    titleProps: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object
  }),
  toolbar: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
    sort: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object,
    filter: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object,
    pagination: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
      onChange: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func
    })
  }),
  cellDictionary: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object,
  displayMode: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  items: react_immutable_proptypes__WEBPACK_IMPORTED_MODULE_1___default.a.list.isRequired
}, _talend_react_cmf__WEBPACK_IMPORTED_MODULE_4__["cmfConnect"].propTypes));

_defineProperty(List, "defaultProps", {
  state: DEFAULT_STATE
});

_defineProperty(List, "contextTypes", {
  store: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object,
  registry: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object,
  router: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object
});

/* harmony default export */ __webpack_exports__["default"] = (List);

/***/ }),

/***/ "./src/List/List.sagas.js":
/*!********************************!*\
  !*** ./src/List/List.sagas.js ***!
  \********************************/
/*! exports provided: onFilterChange, onToggleFilter, onChangeSortChange, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onFilterChange", function() { return onFilterChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onToggleFilter", function() { return onToggleFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onChangeSortChange", function() { return onChangeSortChange; });
/* harmony import */ var _List_connect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./List.connect */ "./src/List/List.connect.js");
/* harmony import */ var _List_constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./List.constant */ "./src/List/List.constant.js");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-saga */ "redux-saga");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_2__);
var _marked = /*#__PURE__*/regeneratorRuntime.mark(onFilterChange),
    _marked2 = /*#__PURE__*/regeneratorRuntime.mark(onToggleFilter),
    _marked3 = /*#__PURE__*/regeneratorRuntime.mark(onChangeSortChange),
    _marked4 = /*#__PURE__*/regeneratorRuntime.mark(defaultHandler);




var _effects = redux_saga__WEBPACK_IMPORTED_MODULE_2__["effects"],
    put = _effects.put,
    takeEvery = _effects.takeEvery;
function onFilterChange(data) {
  return regeneratorRuntime.wrap(function onFilterChange$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return put(_List_connect__WEBPACK_IMPORTED_MODULE_0__["default"].setStateAction({
            searchQuery: data.payload.query
          }, data.collectionId || 'default'));

        case 2:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}
function onToggleFilter(data) {
  return regeneratorRuntime.wrap(function onToggleFilter$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return put(_List_connect__WEBPACK_IMPORTED_MODULE_0__["default"].setStateAction({
            filterDocked: !data.payload.filterDocked
          }, data.collectionId || 'default'));

        case 2:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2);
}
function onChangeSortChange(data) {
  return regeneratorRuntime.wrap(function onChangeSortChange$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return put(_List_connect__WEBPACK_IMPORTED_MODULE_0__["default"].setStateAction({
            sortOn: data.payload.field,
            sortAsc: !data.payload.isDescending
          }, data.collectionId || 'default'));

        case 2:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3);
}

function defaultHandler() {
  return regeneratorRuntime.wrap(function defaultHandler$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return takeEvery(_List_constant__WEBPACK_IMPORTED_MODULE_1__["default"].LIST_TOGGLE_FILTER, onToggleFilter);

        case 2:
          _context4.next = 4;
          return takeEvery(_List_constant__WEBPACK_IMPORTED_MODULE_1__["default"].LIST_FILTER_CHANGE, onFilterChange);

        case 4:
          _context4.next = 6;
          return takeEvery(_List_constant__WEBPACK_IMPORTED_MODULE_1__["default"].LIST_CHANGE_SORT_ORDER, onChangeSortChange);

        case 6:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked4);
}

/* harmony default export */ __webpack_exports__["default"] = ({
  'List#root': defaultHandler
});

/***/ }),

/***/ "./src/List/index.js":
/*!***************************!*\
  !*** ./src/List/index.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _List_connect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./List.connect */ "./src/List/List.connect.js");
/* harmony import */ var _List_sagas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./List.sagas */ "./src/List/List.sagas.js");
/* harmony import */ var _List_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./List.constant */ "./src/List/List.constant.js");
/* harmony import */ var _selector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./selector */ "./src/List/selector.js");




_List_connect__WEBPACK_IMPORTED_MODULE_0__["default"].sagas = _List_sagas__WEBPACK_IMPORTED_MODULE_1__["default"];
_List_connect__WEBPACK_IMPORTED_MODULE_0__["default"].constants = _List_constant__WEBPACK_IMPORTED_MODULE_2__;
_List_connect__WEBPACK_IMPORTED_MODULE_0__["default"].selectors = _selector__WEBPACK_IMPORTED_MODULE_3__;
/* harmony default export */ __webpack_exports__["default"] = (_List_connect__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/List/selector.js":
/*!******************************!*\
  !*** ./src/List/selector.js ***!
  \******************************/
/*! exports provided: getCollectionItems, configureGetPagination, configureGetFilteredItems, compare, getSortedResults, configureGetSortedItems, configureGetPagedItems */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCollectionItems", function() { return getCollectionItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "configureGetPagination", function() { return configureGetPagination; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "configureGetFilteredItems", function() { return configureGetFilteredItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compare", function() { return compare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSortedResults", function() { return getSortedResults; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "configureGetSortedItems", function() { return configureGetSortedItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "configureGetPagedItems", function() { return configureGetPagedItems; });
/* harmony import */ var _talend_react_cmf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @talend/react-cmf */ "@talend/react-cmf");
/* harmony import */ var _talend_react_cmf__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_talend_react_cmf__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reselect */ "../../node_modules/reselect/lib/index.js");
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reselect__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! immutable */ "immutable");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);





function contains(listItem, query, columns) {
  var item = listItem;

  if (immutable__WEBPACK_IMPORTED_MODULE_2__["Map"].isMap(listItem)) {
    item = listItem.toJS();
  }

  return columns.some(function (column) {
    return typeof item[column.key] === 'string' && item[column.key].toLowerCase().indexOf(query.toLowerCase()) !== -1;
  });
}

function getCollection(state, collectionId) {
  return state.cmf.collections.get(collectionId);
}

function getCollectionItems(state, collectionId) {
  var collection = getCollection(state, collectionId);

  if (immutable__WEBPACK_IMPORTED_MODULE_2__["Map"].isMap(collection)) {
    return collection.get('items');
  }

  return collection;
}
function configureGetPagination(state, _ref) {
  var collectionId = _ref.collectionId;
  var collection = getCollection(state, collectionId);

  if (immutable__WEBPACK_IMPORTED_MODULE_2__["Map"].isMap(collection)) {
    return collection.get('pagination');
  }

  return null;
}

function getComponentState(collectionId) {
  return function (state) {
    return state.cmf.components.getIn(['Container(List)', collectionId || 'default']);
  };
}

function configureGetFilteredItems(configure) {
  var localConfig = configure;
  var getFilteredList = Object(reselect__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(getComponentState(localConfig.collectionId), function (componentState) {
    var results = localConfig.items;

    if (componentState) {
      var searchQuery = componentState.get('searchQuery');

      if (searchQuery && results) {
        results = results.filter(function (item) {
          return contains(item, searchQuery, localConfig.columns);
        });
      }
    }

    return results;
  });
  return Object(reselect__WEBPACK_IMPORTED_MODULE_1__["createSelector"])([getFilteredList, getComponentState], function (items) {
    return items;
  });
}
function compare(sortBy) {
  return function (a, b) {
    if (a.get(sortBy)) {
      var aValue = a.get(sortBy);
      var bValue = b.get(sortBy);

      if (typeof aValue === 'string' && typeof bValue === 'string') {
        aValue = aValue.toLowerCase();
        bValue = bValue.toLowerCase();
        return aValue.localeCompare(bValue);
      }

      if (aValue < bValue) {
        return -1;
      }

      if (aValue > bValue) {
        return 1;
      }

      return 0;
    }

    if (!b[sortBy]) {
      return 0;
    }

    return -1;
  };
}
function getSortedResults(componentState, config, listItems) {
  if (!immutable__WEBPACK_IMPORTED_MODULE_2__["List"].isList(listItems)) {
    return new immutable__WEBPACK_IMPORTED_MODULE_2__["List"]();
  }

  var results = listItems;

  if (!Object(lodash__WEBPACK_IMPORTED_MODULE_3__["isEmpty"])(componentState)) {
    var sortBy = componentState.get('sortOn');
    var sortAsc = componentState.get('sortAsc');
    var sortedColumn = Object(lodash__WEBPACK_IMPORTED_MODULE_3__["get"])(config, 'columns', []).find(function (column) {
      return column.key === sortBy;
    });

    if (Object(lodash__WEBPACK_IMPORTED_MODULE_3__["get"])(sortedColumn, 'sortFunction')) {
      // Immutable sort method returns sorted array
      results = results.sort(_talend_react_cmf__WEBPACK_IMPORTED_MODULE_0___default.a.registry.getFromRegistry(sortedColumn.sortFunction)(sortBy, sortAsc));
    } else {
      results = results.sort(compare(sortBy));
    }

    if (!sortAsc) {
      results = results.reverse();
    }
  }

  return results;
}
function configureGetSortedItems(config, listItems) {
  var getSortedList = Object(reselect__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(getComponentState(config.collectionId), function (componentState) {
    return getSortedResults(componentState, config, listItems);
  });
  return Object(reselect__WEBPACK_IMPORTED_MODULE_1__["createSelector"])([getSortedList, getComponentState], function (items) {
    return items;
  });
}
function configureGetPagedItems(configure, listItems) {
  var getPagedList = Object(reselect__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(getComponentState(configure.collectionId), function (componentState) {
    var results = listItems;

    if (componentState) {
      var startIndex = componentState.get('startIndex');
      var itemsPerPage = componentState.get('itemsPerPage');

      if (itemsPerPage > 0 && startIndex > 0) {
        results = results.slice(startIndex - 1, Math.min(startIndex + itemsPerPage - 1, results.size));
      }
    }

    return results;
  });
  return Object(reselect__WEBPACK_IMPORTED_MODULE_1__["createSelector"])([getPagedList, getComponentState], function (items) {
    return items;
  });
}

/***/ }),

/***/ "./src/Notification/Notification.actions.js":
/*!**************************************************!*\
  !*** ./src/Notification/Notification.actions.js ***!
  \**************************************************/
/*! exports provided: pushGeneric, pushInfo, pushWarning, pushError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pushGeneric", function() { return pushGeneric; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pushInfo", function() { return pushInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pushWarning", function() { return pushWarning; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pushError", function() { return pushError; });
/* harmony import */ var _Notification_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Notification.constants */ "./src/Notification/Notification.constants.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/**
 * Action to push a generic notification
 * @param {Object} notification Notification to push
 * @returns {Object}
 */

function pushGeneric(notification) {
  return {
    type: _Notification_constants__WEBPACK_IMPORTED_MODULE_0__["default"].PUSH_NOTIFICATION,
    notification: notification
  };
}
/**
 * Action to specifically push an info notification
 * @param {Object} notification Notification to push
 * @returns {Object}
 */

function pushInfo(notification) {
  return pushGeneric(_objectSpread(_objectSpread({}, notification), {}, {
    type: _Notification_constants__WEBPACK_IMPORTED_MODULE_0__["default"].TYPE_INFO
  }));
}
/**
 * Action to specifically push a warning notification
 * @param {Object} notification Notification to push
 * @returns {Object}
 */

function pushWarning(notification) {
  return pushGeneric(_objectSpread(_objectSpread({}, notification), {}, {
    type: _Notification_constants__WEBPACK_IMPORTED_MODULE_0__["default"].TYPE_WARNING
  }));
}
/**
 * Action to specifically push an error notification
 * @param {Object} notification Notification to push
 * @returns {Object}
 */

function pushError(notification) {
  return pushGeneric(_objectSpread(_objectSpread({}, notification), {}, {
    type: _Notification_constants__WEBPACK_IMPORTED_MODULE_0__["default"].TYPE_ERROR
  }));
}

/***/ }),

/***/ "./src/Notification/Notification.connect.js":
/*!**************************************************!*\
  !*** ./src/Notification/Notification.connect.js ***!
  \**************************************************/
/*! exports provided: componentId, deleteNotification, mergeProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "componentId", function() { return componentId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteNotification", function() { return _deleteNotification; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeProps", function() { return mergeProps; });
/* harmony import */ var _talend_react_cmf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @talend/react-cmf */ "@talend/react-cmf");
/* harmony import */ var _talend_react_cmf__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_talend_react_cmf__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! invariant */ "../../node_modules/invariant/browser.js");
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(invariant__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Notification_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Notification.container */ "./src/Notification/Notification.container.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function componentId(ownProps) {
  return ownProps && ownProps.id || 'Notification';
}

function _deleteNotification(indexNotification) {
  return function mutator(prevStateProps) {
    var notifications = prevStateProps.state.get('notifications');
    var index = notifications.indexOf(indexNotification);

    if (index === -1) {
      invariant__WEBPACK_IMPORTED_MODULE_1___default()(true, "notification not found ".concat(JSON.stringify(indexNotification)));
    }

    var newNotif = notifications["delete"](index);
    return prevStateProps.state.set('notifications', newNotif);
  };
}


function mergeProps(stateProps, dispatchProps, ownProps) {
  return _objectSpread(_objectSpread(_objectSpread({
    deleteNotification: function deleteNotification(i) {
      dispatchProps.setState(_deleteNotification(i));
    }
  }, ownProps), stateProps), dispatchProps);
}
/* harmony default export */ __webpack_exports__["default"] = (Object(_talend_react_cmf__WEBPACK_IMPORTED_MODULE_0__["cmfConnect"])({
  componentId: componentId,
  defaultState: _Notification_container__WEBPACK_IMPORTED_MODULE_2__["DEFAULT_STATE"],
  defaultProps: {
    saga: 'Notification#default'
  },
  mergeProps: mergeProps,
  omitCMFProps: true,
  withComponentRegistry: true,
  withDispatch: true,
  withDispatchActionCreator: true,
  withComponentId: true
})(_Notification_container__WEBPACK_IMPORTED_MODULE_2__["default"]));

/***/ }),

/***/ "./src/Notification/Notification.constants.js":
/*!****************************************************!*\
  !*** ./src/Notification/Notification.constants.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  PUSH_NOTIFICATION: 'PUSH_NOTIFICATION',
  TYPE_INFO: 'info',
  TYPE_WARNING: 'warning',
  TYPE_ERROR: 'error'
});

/***/ }),

/***/ "./src/Notification/Notification.container.js":
/*!****************************************************!*\
  !*** ./src/Notification/Notification.container.js ***!
  \****************************************************/
/*! exports provided: DEFAULT_STATE, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_STATE", function() { return DEFAULT_STATE; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! immutable */ "immutable");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _talend_react_cmf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @talend/react-cmf */ "@talend/react-cmf");
/* harmony import */ var _talend_react_cmf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_talend_react_cmf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _talend_react_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @talend/react-components */ "@talend/react-components");
/* harmony import */ var _talend_react_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_talend_react_components__WEBPACK_IMPORTED_MODULE_4__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var DEFAULT_STATE = new immutable__WEBPACK_IMPORTED_MODULE_2__["Map"]({
  notifications: new immutable__WEBPACK_IMPORTED_MODULE_2__["List"]()
});

function Notification(props) {
  var state = (props.state || DEFAULT_STATE).toJS();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_talend_react_components__WEBPACK_IMPORTED_MODULE_4__["Notification"], {
    leaveFn: function leaveFn(i) {
      return props.deleteNotification(i);
    },
    notifications: state.notifications,
    autoLeaveError: props.autoLeaveError
  });
}

Notification.displayName = 'Container(Notification)';
Notification.propTypes = _objectSpread({
  deleteNotification: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  autoLeaveError: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool
}, _talend_react_cmf__WEBPACK_IMPORTED_MODULE_3__["cmfConnect"].propTypes);
/* harmony default export */ __webpack_exports__["default"] = (Notification);

/***/ }),

/***/ "./src/Notification/Notification.sagas.js":
/*!************************************************!*\
  !*** ./src/Notification/Notification.sagas.js ***!
  \************************************************/
/*! exports provided: onPushNotification, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onPushNotification", function() { return onPushNotification; });
/* harmony import */ var uuid_v4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid/v4 */ "../../node_modules/uuid/v4.js");
/* harmony import */ var uuid_v4__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uuid_v4__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _talend_react_cmf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @talend/react-cmf */ "@talend/react-cmf");
/* harmony import */ var _talend_react_cmf__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_talend_react_cmf__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Notification_connect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Notification.connect */ "./src/Notification/Notification.connect.js");
/* harmony import */ var _Notification_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Notification.constants */ "./src/Notification/Notification.constants.js");
/* harmony import */ var _Notification_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Notification.actions */ "./src/Notification/Notification.actions.js");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! redux-saga */ "redux-saga");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_5__);
var _marked = /*#__PURE__*/regeneratorRuntime.mark(onPushNotification),
    _marked2 = /*#__PURE__*/regeneratorRuntime.mark(onCMFError),
    _marked3 = /*#__PURE__*/regeneratorRuntime.mark(defaultHandler);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var _effects = redux_saga__WEBPACK_IMPORTED_MODULE_5__["effects"],
    put = _effects.put,
    select = _effects.select,
    takeEvery = _effects.takeEvery;
var CMF_CONST = _talend_react_cmf__WEBPACK_IMPORTED_MODULE_1___default.a.constants;
var onError = _talend_react_cmf__WEBPACK_IMPORTED_MODULE_1___default.a.onError;
var DEFAULT_COMPONENT_ID = 'Notification';
function onPushNotification(action) {
  var componentState, newComponentState, updateStateAction;
  return regeneratorRuntime.wrap(function onPushNotification$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return select(function (state) {
            return _Notification_connect__WEBPACK_IMPORTED_MODULE_2__["default"].getState(state, DEFAULT_COMPONENT_ID);
          });

        case 2:
          componentState = _context.sent;
          newComponentState = componentState.updateIn(['notifications'], function (notifications) {
            return notifications.push(_objectSpread({
              id: uuid_v4__WEBPACK_IMPORTED_MODULE_0___default()()
            }, action.notification));
          });
          updateStateAction = _Notification_connect__WEBPACK_IMPORTED_MODULE_2__["default"].setStateAction(newComponentState, DEFAULT_COMPONENT_ID);
          _context.next = 7;
          return put(updateStateAction);

        case 7:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}

function onCMFError(action) {
  var error, download, notification;
  return regeneratorRuntime.wrap(function onCMFError$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          if (!(process.env.DISABLE_JS_ERROR_NOTIFICATION && "development" === 'production')) {
            _context2.next = 2;
            break;
          }

          return _context2.abrupt("return");

        case 2:
          error = action.error;
          download = {
            href: onError.createObjectURL(error),
            label: 'Download details',
            download: 'report.json',
            'data-feature': 'download-on-error-details'
          };
          notification = {
            type: 'error',
            title: error.name,
            message: error.message,
            action: download
          };
          _context2.next = 7;
          return put(Object(_Notification_actions__WEBPACK_IMPORTED_MODULE_4__["pushError"])(notification));

        case 7:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2);
}

function defaultHandler() {
  return regeneratorRuntime.wrap(function defaultHandler$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return takeEvery(_Notification_constants__WEBPACK_IMPORTED_MODULE_3__["default"].PUSH_NOTIFICATION, onPushNotification);

        case 2:
          _context3.next = 4;
          return takeEvery(CMF_CONST.ERROR, onCMFError);

        case 4:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3);
}

/* harmony default export */ __webpack_exports__["default"] = ({
  'Notification#default': defaultHandler
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/process/browser.js */ "../../node_modules/process/browser.js")))

/***/ }),

/***/ "./src/Notification/clearNotifications.js":
/*!************************************************!*\
  !*** ./src/Notification/clearNotifications.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return clearNotifications; });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function clearNotifications(state) {
  var path = ['Container(Notification)', 'Notification', 'notifications'];
  var notifs = state.cmf.components.getIn(path);

  if (!notifs) {
    return state;
  }

  notifs = notifs.clear();

  var newState = _objectSpread({}, state);

  newState.cmf.components = state.cmf.components.setIn(path, notifs);
  return newState;
}

/***/ }),

/***/ "./src/Notification/index.js":
/*!***********************************!*\
  !*** ./src/Notification/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Notification_connect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Notification.connect */ "./src/Notification/Notification.connect.js");
/* harmony import */ var _pushNotification__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pushNotification */ "./src/Notification/pushNotification.js");
/* harmony import */ var _clearNotifications__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./clearNotifications */ "./src/Notification/clearNotifications.js");
/* harmony import */ var _Notification_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Notification.actions */ "./src/Notification/Notification.actions.js");
/* harmony import */ var _Notification_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Notification.constants */ "./src/Notification/Notification.constants.js");
/* harmony import */ var _Notification_sagas__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Notification.sagas */ "./src/Notification/Notification.sagas.js");






_Notification_connect__WEBPACK_IMPORTED_MODULE_0__["default"].push = _pushNotification__WEBPACK_IMPORTED_MODULE_1__["default"];
_Notification_connect__WEBPACK_IMPORTED_MODULE_0__["default"].clear = _clearNotifications__WEBPACK_IMPORTED_MODULE_2__["default"];
_Notification_connect__WEBPACK_IMPORTED_MODULE_0__["default"].actions = _Notification_actions__WEBPACK_IMPORTED_MODULE_3__;
_Notification_connect__WEBPACK_IMPORTED_MODULE_0__["default"].constants = _Notification_constants__WEBPACK_IMPORTED_MODULE_4__["default"];
_Notification_connect__WEBPACK_IMPORTED_MODULE_0__["default"].sagas = _Notification_sagas__WEBPACK_IMPORTED_MODULE_5__["default"];
/* harmony default export */ __webpack_exports__["default"] = (_Notification_connect__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/Notification/pushNotification.js":
/*!**********************************************!*\
  !*** ./src/Notification/pushNotification.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return pushNotification; });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ "../../node_modules/uuid/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! immutable */ "immutable");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



/**
 * transform the APP state to push notification into the Notification component state slot on redux
 * even if this component is not already mounted.
 * @param {state} state
 * @param {*} notification
 * @returns {state}
 */


function pushNotification(state, notification) {
  if (!Object(lodash__WEBPACK_IMPORTED_MODULE_2__["get"])(notification, 'message')) {
    return state;
  }

  var path = ['Container(Notification)', 'Notification', 'notifications'];
  var notifs = state.cmf.components.getIn(path, new immutable__WEBPACK_IMPORTED_MODULE_1___default.a.List());
  notifs = notifs.push(_objectSpread({
    id: uuid__WEBPACK_IMPORTED_MODULE_0___default.a.v4()
  }, notification));

  var newState = _objectSpread({}, state);

  newState.cmf.components = state.cmf.components.setIn(path, notifs);
  return newState;
}

/***/ }),

/***/ "./src/ObjectViewer/ObjectViewer.connect.js":
/*!**************************************************!*\
  !*** ./src/ObjectViewer/ObjectViewer.connect.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _talend_react_cmf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @talend/react-cmf */ "@talend/react-cmf");
/* harmony import */ var _talend_react_cmf__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_talend_react_cmf__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ObjectViewer_container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ObjectViewer.container */ "./src/ObjectViewer/ObjectViewer.container.js");


/* harmony default export */ __webpack_exports__["default"] = (Object(_talend_react_cmf__WEBPACK_IMPORTED_MODULE_0__["cmfConnect"])({
  defaultState: _ObjectViewer_container__WEBPACK_IMPORTED_MODULE_1__["DEFAULT_STATE"],
  componentId: function componentId(ownProps) {
    return ownProps.id || 'ObjectViewer';
  },
  omitCMFProps: true,
  withComponentRegistry: true,
  withDispatch: true,
  withDispatchActionCreator: true,
  withComponentId: true
})(_ObjectViewer_container__WEBPACK_IMPORTED_MODULE_1__["default"]));

/***/ }),

/***/ "./src/ObjectViewer/ObjectViewer.container.js":
/*!****************************************************!*\
  !*** ./src/ObjectViewer/ObjectViewer.container.js ***!
  \****************************************************/
/*! exports provided: DEFAULT_STATE, open, select, close, edit, change, toggleState, openAllState, selectWrapper, editWrapper, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_STATE", function() { return DEFAULT_STATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "open", function() { return open; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "select", function() { return select; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "close", function() { return close; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "edit", function() { return edit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "change", function() { return change; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleState", function() { return toggleState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openAllState", function() { return openAllState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectWrapper", function() { return selectWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "editWrapper", function() { return editWrapper; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! immutable */ "immutable");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _talend_react_cmf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @talend/react-cmf */ "@talend/react-cmf");
/* harmony import */ var _talend_react_cmf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_talend_react_cmf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _talend_react_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @talend/react-components */ "@talend/react-components");
/* harmony import */ var _talend_react_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_talend_react_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }







var DEFAULT_STATE = new immutable__WEBPACK_IMPORTED_MODULE_2__["Map"]({
  edited: new immutable__WEBPACK_IMPORTED_MODULE_2__["List"](),
  // Array of JSONPath
  opened: new immutable__WEBPACK_IMPORTED_MODULE_2__["List"](),
  // Array of JSONPath
  selectedJsonpath: '',
  // Selected JSONPath
  modified: new immutable__WEBPACK_IMPORTED_MODULE_2__["Map"]() // Store the onChange

});
function open(path, state) {
  return state.set('opened', state.get('opened').push(path));
}
function select(path, state) {
  return state.set('selectedJsonpath', path);
}
function close(path, state) {
  var opened = state.get('opened');
  return state.set('opened', opened["delete"](opened.indexOf(path)));
}
function edit(path, state) {
  return state.set('edited', state.get('edited').push(path));
}
function change(path, state, value) {
  return state.set('modified', state.get('modified').set(path, value));
}
function toggleState(prevState, data) {
  if (data.isOpened) {
    return close(data.jsonpath, prevState.state);
  } else if (data.isOpened === false) {
    // we don't want to match on undefined as false
    return open(data.jsonpath, prevState.state);
  }

  return prevState;
}
function openAllState(prevState, siblings) {
  var openedIds = prevState.state.get('opened');
  siblings.filter(function (_ref) {
    var data = _ref.data;
    return _typeof(data) === 'object';
  }).forEach(function (_ref2) {
    var jsonpath = _ref2.jsonpath;

    if (!openedIds.includes(jsonpath)) {
      openedIds = openedIds.push(jsonpath);
    }
  });
  return prevState.state.set('opened', openedIds);
}
function selectWrapper(prevState, data) {
  return select(data.jsonpath, prevState.state);
}
function editWrapper(prevState, data) {
  if (data.edit === false) {
    return edit(data.jsonpath, prevState.state);
  }

  return prevState;
}

var ObjectViewer = /*#__PURE__*/function (_React$Component) {
  _inherits(ObjectViewer, _React$Component);

  var _super = _createSuper(ObjectViewer);

  function ObjectViewer(props) {
    var _this;

    _classCallCheck(this, ObjectViewer);

    _this = _super.call(this, props);
    _this.onToggle = _this.onToggle.bind(_assertThisInitialized(_this));
    _this.onToggleAllSiblings = _this.onToggleAllSiblings.bind(_assertThisInitialized(_this));
    _this.onEdit = _this.onEdit.bind(_assertThisInitialized(_this));
    _this.onChange = _this.onChange.bind(_assertThisInitialized(_this));
    _this.onSelect = _this.onSelect.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(ObjectViewer, [{
    key: "onToggle",
    value: function onToggle(event, data) {
      this.props.setState(function (prevState) {
        return toggleState(prevState, data);
      });
    }
  }, {
    key: "onToggleAllSiblings",
    value: function onToggleAllSiblings(event, data) {
      this.props.setState(function (prevState) {
        return openAllState(prevState, data);
      });
    }
  }, {
    key: "onEdit",
    value: function onEdit(event, data) {
      this.props.setState(function (prevState) {
        return editWrapper(prevState, data);
      });
    }
  }, {
    key: "onChange",
    value: function onChange(event, data) {
      this.props.setState(function (prevState) {
        return change(data.jsonpath, prevState.state, event.target.value);
      });
    }
  }, {
    key: "onSelect",
    value: function onSelect(event, data) {
      this.props.setState(function (prevState) {
        return selectWrapper(prevState, data);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var state = (this.props.state || DEFAULT_STATE).toJS();
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_talend_react_components__WEBPACK_IMPORTED_MODULE_4__["ObjectViewer"], _extends({}, this.props, {
        onChange: this.props.onSubmit ? this.onChange : undefined,
        onSelect: this.onSelect,
        onEdit: this.onEdit,
        onToggle: this.onToggle,
        onToggleAllSiblings: this.onToggleAllSiblings,
        selectedJsonpath: state.selectedJsonpath,
        opened: state.opened,
        edited: state.edited
      }));
    }
  }]);

  return ObjectViewer;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

_defineProperty(ObjectViewer, "displayName", 'CMFContainer(ObjectViewer)');

_defineProperty(ObjectViewer, "propTypes", _objectSpread({
  id: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  data: Object(lodash__WEBPACK_IMPORTED_MODULE_5__["get"])(_talend_react_components__WEBPACK_IMPORTED_MODULE_4__["ObjectViewer"], 'propTypes.data', prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.any),
  displayMode: Object(lodash__WEBPACK_IMPORTED_MODULE_5__["get"])(_talend_react_components__WEBPACK_IMPORTED_MODULE_4__["ObjectViewer"], 'propTypes.displayMode', prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func),
  onSubmit: Object(lodash__WEBPACK_IMPORTED_MODULE_5__["get"])(_talend_react_components__WEBPACK_IMPORTED_MODULE_4__["ObjectViewer"], 'propTypes.onSubmit', prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func)
}, _talend_react_cmf__WEBPACK_IMPORTED_MODULE_3__["cmfConnect"].propTypes));

/* harmony default export */ __webpack_exports__["default"] = (ObjectViewer);

/***/ }),

/***/ "./src/ObjectViewer/index.js":
/*!***********************************!*\
  !*** ./src/ObjectViewer/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ObjectViewer_connect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ObjectViewer.connect */ "./src/ObjectViewer/ObjectViewer.connect.js");

/* harmony default export */ __webpack_exports__["default"] = (_ObjectViewer_connect__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/Redirect/Redirect.container.js":
/*!********************************************!*\
  !*** ./src/Redirect/Redirect.container.js ***!
  \********************************************/
/*! exports provided: REDIRECT_ACTION_TYPE, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REDIRECT_ACTION_TYPE", function() { return REDIRECT_ACTION_TYPE; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _talend_react_cmf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @talend/react-cmf */ "@talend/react-cmf");
/* harmony import */ var _talend_react_cmf__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_talend_react_cmf__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _talend_react_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @talend/react-components */ "@talend/react-components");
/* harmony import */ var _talend_react_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_talend_react_components__WEBPACK_IMPORTED_MODULE_3__);




var REDIRECT_ACTION_TYPE = 'REDIRECT';
/**
 * @param {object} props react props
 * @example
<Redirect name="Hello world"></Redirect>
 */

function Redirect(_ref) {
  var path = _ref.path,
      to = _ref.to,
      dispatch = _ref.dispatch,
      componentId = _ref.componentId;
  dispatch({
    type: REDIRECT_ACTION_TYPE,
    componentId: componentId,
    cmf: {
      routerReplace: to || path
    }
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_talend_react_components__WEBPACK_IMPORTED_MODULE_3__["AppLoader"], null);
}

Redirect.propTypes = {
  path: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  to: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  dispatch: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  componentId: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string
};
Redirect.displayName = 'Redirect';
/* harmony default export */ __webpack_exports__["default"] = (Object(_talend_react_cmf__WEBPACK_IMPORTED_MODULE_2__["cmfConnect"])({
  omitCMFProps: true,
  withDispatch: true,
  withComponentId: true
})(Redirect));

/***/ }),

/***/ "./src/Redirect/index.js":
/*!*******************************!*\
  !*** ./src/Redirect/index.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Redirect_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Redirect.container */ "./src/Redirect/Redirect.container.js");

/* harmony default export */ __webpack_exports__["default"] = (_Redirect_container__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/SelectObject/SelectObject.component.js":
/*!****************************************************!*\
  !*** ./src/SelectObject/SelectObject.component.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_immutable_proptypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-immutable-proptypes */ "../../node_modules/react-immutable-proptypes/dist/ImmutablePropTypes.js");
/* harmony import */ var react_immutable_proptypes__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_immutable_proptypes__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _FilterBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../FilterBar */ "./src/FilterBar/index.js");
/* harmony import */ var _List__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../List */ "./src/List/index.js");
/* harmony import */ var _TreeView__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../TreeView */ "./src/TreeView/index.js");
/* harmony import */ var _SelectObject_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./SelectObject.scss */ "./src/SelectObject/SelectObject.scss");
/* harmony import */ var _SelectObject_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_SelectObject_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _talend_react_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @talend/react-components */ "@talend/react-components");
/* harmony import */ var _talend_react_components__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_talend_react_components__WEBPACK_IMPORTED_MODULE_9__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }












function SelectObject(_ref) {
  var filteredData = _ref.filteredData,
      idAttr = _ref.idAttr,
      nameAttr = _ref.nameAttr,
      results = _ref.results,
      sourceData = _ref.sourceData,
      tree = _ref.tree,
      _ref$filter = _ref.filter,
      filter = _ref$filter === void 0 ? {} : _ref$filter,
      props = _objectWithoutProperties(_ref, ["filteredData", "idAttr", "nameAttr", "results", "sourceData", "tree", "filter"]);

  var schema;

  if (props.schema && props.selected) {
    schema = _objectSpread({
      properties: props.selected
    }, props.schema);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "tc-select-object ".concat(_SelectObject_scss__WEBPACK_IMPORTED_MODULE_7___default.a.wrapper)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_FilterBar__WEBPACK_IMPORTED_MODULE_4__["default"], _extends({}, filter, {
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(filter.className, _SelectObject_scss__WEBPACK_IMPORTED_MODULE_7___default.a.filter),
    id: props.id,
    dockable: false,
    navbar: false
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: _SelectObject_scss__WEBPACK_IMPORTED_MODULE_7___default.a.container
  }, !tree && !filteredData && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_List__WEBPACK_IMPORTED_MODULE_5__["default"], _extends({}, props.list, {
    id: "".concat(props.id, "-list"),
    data: sourceData,
    className: _SelectObject_scss__WEBPACK_IMPORTED_MODULE_7___default.a.list
  })), tree && !filteredData && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_TreeView__WEBPACK_IMPORTED_MODULE_6__["default"], _extends({}, tree, {
    componentId: props.id,
    noHeader: true,
    data: sourceData,
    className: _SelectObject_scss__WEBPACK_IMPORTED_MODULE_7___default.a.tree
  })), filteredData && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["ListGroup"], {
    className: _SelectObject_scss__WEBPACK_IMPORTED_MODULE_7___default.a.results
  }, filteredData.map(function (data) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["ListGroupItem"], {
      key: data.get(idAttr),
      header: data.get(nameAttr),
      onClick: function onClick(event) {
        return results.onClick(event, data);
      },
      active: results.selectedId === data.get(idAttr)
    }, data.get('currentPosition'));
  })), schema && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_talend_react_components__WEBPACK_IMPORTED_MODULE_9__["JSONSchemaRenderer"], {
    schema: schema,
    className: _SelectObject_scss__WEBPACK_IMPORTED_MODULE_7___default.a.preview
  })));
}

SelectObject.displayName = 'SelectObject';
SelectObject.propTypes = {
  id: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  idAttr: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  nameAttr: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  tree: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  list: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  filter: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  schema: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  filteredData: react_immutable_proptypes__WEBPACK_IMPORTED_MODULE_3___default.a.List,
  results: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
    selectedId: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
    onClick: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func
  }),
  sourceData: react_immutable_proptypes__WEBPACK_IMPORTED_MODULE_3___default.a.List,
  selected: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
};
SelectObject.defaultProps = {
  idAttr: 'id'
};
/* harmony default export */ __webpack_exports__["default"] = (SelectObject);

/***/ }),

/***/ "./src/SelectObject/SelectObject.connect.js":
/*!**************************************************!*\
  !*** ./src/SelectObject/SelectObject.connect.js ***!
  \**************************************************/
/*! exports provided: mapStateToProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapStateToProps", function() { return mapStateToProps; });
/* harmony import */ var _talend_react_cmf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @talend/react-cmf */ "@talend/react-cmf");
/* harmony import */ var _talend_react_cmf__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_talend_react_cmf__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SelectObject_container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SelectObject.container */ "./src/SelectObject/SelectObject.container.js");
/* harmony import */ var _FilterBar_FilterBar_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../FilterBar/FilterBar.container */ "./src/FilterBar/FilterBar.container.js");
/* harmony import */ var _TreeView_TreeView_container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../TreeView/TreeView.container */ "./src/TreeView/TreeView.container.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





function mapStateToProps(state, ownProps) {
  var props = {};

  if (ownProps.source) {
    props.sourceData = state.cmf.collections.getIn(ownProps.source.split('.'));
  }

  if (ownProps.nameAttr && ownProps.tree) {
    props.tree = _objectSpread({
      nameAttr: ownProps.nameAttr
    }, ownProps.tree);
  }

  var filterState = state.cmf.components.getIn([_FilterBar_FilterBar_container__WEBPACK_IMPORTED_MODULE_2__["DISPLAY_NAME"], ownProps.id]);

  if (filterState) {
    props.query = filterState.get(_FilterBar_FilterBar_container__WEBPACK_IMPORTED_MODULE_2__["QUERY_ATTR"], '');
  } else {
    props.query = '';
  }

  var treeState = state.cmf.components.getIn([_TreeView_TreeView_container__WEBPACK_IMPORTED_MODULE_3__["DISPLAY_NAME"], ownProps.id]);

  if (treeState) {
    props.selectedId = treeState.get('selectedId');
  }

  return props;
}
/* harmony default export */ __webpack_exports__["default"] = (Object(_talend_react_cmf__WEBPACK_IMPORTED_MODULE_0__["cmfConnect"])({
  mapStateToProps: mapStateToProps,
  defaultState: _SelectObject_container__WEBPACK_IMPORTED_MODULE_1__["DEFAULT_STATE"],
  omitCMFProps: true,
  withComponentRegistry: true,
  withDispatch: true,
  withDispatchActionCreator: true,
  withComponentId: true
})(_SelectObject_container__WEBPACK_IMPORTED_MODULE_1__["default"]));

/***/ }),

/***/ "./src/SelectObject/SelectObject.container.js":
/*!****************************************************!*\
  !*** ./src/SelectObject/SelectObject.container.js ***!
  \****************************************************/
/*! exports provided: DISPLAY_NAME, DEFAULT_STATE, getById, filter, filterAll, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DISPLAY_NAME", function() { return DISPLAY_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_STATE", function() { return DEFAULT_STATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getById", function() { return getById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filter", function() { return filter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterAll", function() { return filterAll; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _talend_react_cmf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @talend/react-cmf */ "@talend/react-cmf");
/* harmony import */ var _talend_react_cmf__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_talend_react_cmf__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! immutable */ "immutable");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _SelectObject_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SelectObject.component */ "./src/SelectObject/SelectObject.component.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var DISPLAY_NAME = 'Container(SelectObject)';
var DEFAULT_STATE = new immutable__WEBPACK_IMPORTED_MODULE_3___default.a.Map({});

function noop() {}
/**
 * Internal
 * @return item in items found with the id
 * @param {Object} options {id, items, idAttr }
 */


function getById(items, id) {
  var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      _ref$idAttr = _ref.idAttr,
      idAttr = _ref$idAttr === void 0 ? 'id' : _ref$idAttr;

  var found;
  items.forEach(function (item) {
    if (item.get(idAttr) === id) {
      found = item.toJS();
    } else if (!found && item.get('children', new immutable__WEBPACK_IMPORTED_MODULE_3__["List"]()).size > 0) {
      found = getById(item.get('children'), id, {
        idAttr: idAttr
      });
    }
  });
  return found;
}
/**
 * Check if an `item` is a leaf element, by checking if it
 * has a non empty `children`
 * @param {Object} item to be checked if it has children attribute
 * @return {Boolean}
 */

function isLeafElement(item) {
  return item.get('children', new immutable__WEBPACK_IMPORTED_MODULE_3__["List"]()).size === 0;
}
/**
 * if item match the query it will be concatened into the accumulator
 * else the accumulator is returned without modification
 * @param {Object} item the item on which the matching will happen
 * @param {String} currentPosition the element position inside the parsed tree
 * @param {String} query the query element used to match
 * @param {String} nameAttr the attribute of item on which should be matched
 * @param {callback} onMatch callback to call if match happen
 * @param {List<Object>} accumulator
 */


function matchOnLeaf(item, currentPosition, query, nameAttr, onMatch, accumulator) {
  var currentElementName = item.get(nameAttr, '');

  if (currentElementName.toLowerCase().includes(query.toLowerCase())) {
    var withElementPosition = item.set('currentPosition', currentPosition);
    onMatch(item);
    return accumulator.push(withElementPosition);
  }

  return accumulator;
}
/**
 * apply query only on leaf elements, return them on a single list,
 * not taking into account the deepth of matched elements.
 * @return item in items found with the id
 * @param {Object} options {query, items, idAttr }
 */


function filter() {
  var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new immutable__WEBPACK_IMPORTED_MODULE_3__["List"]();
  var query = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  var _ref2 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      _ref2$nameAttr = _ref2.nameAttr,
      nameAttr = _ref2$nameAttr === void 0 ? 'name' : _ref2$nameAttr,
      _ref2$onMatch = _ref2.onMatch,
      onMatch = _ref2$onMatch === void 0 ? noop : _ref2$onMatch;

  var currentPosition = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'root';

  if (query) {
    return items.reduce(function (accumulator, item) {
      if (isLeafElement(item)) {
        return matchOnLeaf(item, currentPosition, query, nameAttr, onMatch, accumulator);
      }

      var currentElementName = item.get(nameAttr, '');
      var result = filter(item.get('children'), query, {
        nameAttr: nameAttr
      }, "".concat(currentPosition, " > ").concat(currentElementName));
      return accumulator.concat(result);
    }, new immutable__WEBPACK_IMPORTED_MODULE_3__["List"]());
  }

  return items;
}
/**
 * apply query on every elements, return them on a single list,
 * @return item in items found with the id
 * @param {Object} options {query, items, idAttr }
 */

function filterAll() {
  var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new immutable__WEBPACK_IMPORTED_MODULE_3__["List"]();
  var query = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  var _ref3 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      _ref3$nameAttr = _ref3.nameAttr,
      nameAttr = _ref3$nameAttr === void 0 ? 'name' : _ref3$nameAttr,
      _ref3$onMatch = _ref3.onMatch,
      onMatch = _ref3$onMatch === void 0 ? noop : _ref3$onMatch;

  var currentPosition = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'root';
  var result = new immutable__WEBPACK_IMPORTED_MODULE_3__["List"]();

  if (query) {
    return items.reduce(function (acc, item) {
      var name = item.get(nameAttr, '');
      var children = item.get('children', null);
      var results = acc;

      if (name.toLowerCase().includes(query.toLowerCase())) {
        onMatch(item);
        results = acc.push(item.set('currentPosition', currentPosition));
      }

      if (children) {
        results = results.concat(filterAll(children, query, {
          nameAttr: nameAttr
        }, "".concat(currentPosition, " > ").concat(name)));
      }

      return results;
    }, result);
  }

  return result;
}

var SelectObject = /*#__PURE__*/function (_React$Component) {
  _inherits(SelectObject, _React$Component);

  var _super = _createSuper(SelectObject);

  function SelectObject(props) {
    var _this;

    _classCallCheck(this, SelectObject);

    _this = _super.call(this, props);
    _this.state = {};
    _this.filter = filter;
    _this.filterAll = filterAll;
    _this.getById = getById;
    _this.onTreeClick = _this.onTreeClick.bind(_assertThisInitialized(_this));
    _this.onResultsClick = _this.onResultsClick.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(SelectObject, [{
    key: "onTreeClick",
    value: function onTreeClick(data) {
      this.props.setState({
        selectedId: data[this.props.idAttr]
      });
    }
  }, {
    key: "onResultsClick",
    value: function onResultsClick(event, item) {
      this.props.setState({
        selectedId: item.get(this.props.idAttr)
      });
    }
  }, {
    key: "render",
    value: function render() {
      var state = this.props.state || DEFAULT_STATE;
      var props = Object(lodash__WEBPACK_IMPORTED_MODULE_5__["omit"])(this.props, _talend_react_cmf__WEBPACK_IMPORTED_MODULE_2__["cmfConnect"].INJECTED_PROPS);
      var filterMethod = this.props.filterMode === SelectObject.FILTER_MODE.ALL ? this.filterAll : this.filter;
      var matches = [];
      var selectedId = state.get('selectedId') || props.selectedId;

      function addMatch(item) {
        matches.push(item);
      }

      if (props.query) {
        props.filteredData = filterMethod(props.sourceData, props.query, _objectSpread(_objectSpread({}, props), {}, {
          onMatch: addMatch
        }), props.breadCrumbsRootLabel);
        delete props.tree;

        if (!selectedId && matches.length === 1) {
          selectedId = matches[0].get('id');
        }

        props.results = {
          onClick: this.onResultsClick,
          idAttr: this.props.idAttr,
          nameAttr: this.props.nameAttr,
          selectedId: selectedId
        };
      }

      if (selectedId) {
        props.selected = this.getById(props.sourceData, selectedId, props);
      }

      if (props.tree) {
        props.tree.selectedId = selectedId;
        props.tree.onSelect = this.onTreeClick;
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SelectObject_component__WEBPACK_IMPORTED_MODULE_4__["default"], props);
    }
  }]);

  return SelectObject;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

_defineProperty(SelectObject, "displayName", DISPLAY_NAME);

_defineProperty(SelectObject, "FILTER_MODE", {
  ALL: 'ALL',
  LEAF: 'LEAF'
});

_defineProperty(SelectObject, "propTypes", _objectSpread(_objectSpread({}, _talend_react_cmf__WEBPACK_IMPORTED_MODULE_2__["cmfConnect"].propTypes), {}, {
  sourceData: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,
  selectedId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  tree: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  idAttr: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  nameAttr: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  breadCrumbsRootLabel: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  filterMode: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf([SelectObject.FILTER_MODE.ALL, SelectObject.FILTER_MODE.LEAF])
}));

_defineProperty(SelectObject, "defaultProps", {
  sourceData: new immutable__WEBPACK_IMPORTED_MODULE_3___default.a.List(),
  idAttr: 'id',
  nameAttr: 'name',
  breadCrumbsRootLabel: 'root'
});

/* harmony default export */ __webpack_exports__["default"] = (SelectObject);

/***/ }),

/***/ "./src/SelectObject/SelectObject.scss":
/*!********************************************!*\
  !*** ./src/SelectObject/SelectObject.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"wrapper":"_1UUjBTPhmtxK6PGB4t2Uzx","filter":"KzacEFkhtViDB1a9m0dup","container":"_2sBjE-UR5YByxrYtt-wxAc","list":"_33mtXEB_kwpSWp5RFg_oxz","tree":"zN32VF1zYsVpSDMYRsOi1","results":"_2a1CWV8Ys5cqQEb1OwVCw0","preview":"_25ZU54Ff38m4whG9zCQYtL"};

/***/ }),

/***/ "./src/SelectObject/index.js":
/*!***********************************!*\
  !*** ./src/SelectObject/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SelectObject_connect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SelectObject.connect */ "./src/SelectObject/SelectObject.connect.js");

/* harmony default export */ __webpack_exports__["default"] = (_SelectObject_connect__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/ShortcutManager/ShortcutManager.connect.js":
/*!********************************************************!*\
  !*** ./src/ShortcutManager/ShortcutManager.connect.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _talend_react_cmf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @talend/react-cmf */ "@talend/react-cmf");
/* harmony import */ var _talend_react_cmf__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_talend_react_cmf__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _talend_react_cmf_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @talend/react-cmf-router */ "@talend/react-cmf-router");
/* harmony import */ var _talend_react_cmf_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_talend_react_cmf_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ShortcutManager_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ShortcutManager.container */ "./src/ShortcutManager/ShortcutManager.container.js");




function mapStateToProps(state) {
  return {
    pathname: _talend_react_cmf_router__WEBPACK_IMPORTED_MODULE_1__["routerAPI"].selectors.getPath(state)
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(_talend_react_cmf__WEBPACK_IMPORTED_MODULE_0__["cmfConnect"])({
  omitCMFProps: true,
  withComponentRegistry: true,
  withDispatch: true,
  withDispatchActionCreator: true,
  withComponentId: true,
  mapStateToProps: mapStateToProps
})(_ShortcutManager_container__WEBPACK_IMPORTED_MODULE_2__["default"]));

/***/ }),

/***/ "./src/ShortcutManager/ShortcutManager.container.js":
/*!**********************************************************!*\
  !*** ./src/ShortcutManager/ShortcutManager.container.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var keycode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! keycode */ "../../node_modules/keycode/index.js");
/* harmony import */ var keycode__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(keycode__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _talend_react_cmf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @talend/react-cmf */ "@talend/react-cmf");
/* harmony import */ var _talend_react_cmf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_talend_react_cmf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





/**
 * ShortcutManager matches shortcuts to the current route to redirect to a new
 * one
 *
 * @extends {React}
 */



var ShortcutManager = /*#__PURE__*/function (_React$Component) {
  _inherits(ShortcutManager, _React$Component);

  var _super = _createSuper(ShortcutManager);

  function ShortcutManager(props) {
    var _this;

    _classCallCheck(this, ShortcutManager);

    _this = _super.call(this, props);
    _this.redirect = _this.redirect.bind(_assertThisInitialized(_this));
    _this.handleKeyPress = _this.handleKeyPress.bind(_assertThisInitialized(_this));
    _this.handleRegexMatching = _this.handleRegexMatching.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(ShortcutManager, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      document.addEventListener('keydown', this.handleKeyPress);
    } // eslint-disable-next-line class-methods-use-this

  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener('keydown', this.handleKeyPress);
    }
  }, {
    key: "redirect",
    value: function redirect(event, path) {
      this.props.dispatchActionCreator('redirect', event, {
        action: {
          path: path
        }
      });
    }
  }, {
    key: "handleRegexMatching",
    value: function handleRegexMatching(event, redirectMap, pathname) {
      var match = Object(lodash__WEBPACK_IMPORTED_MODULE_4__["keys"])(redirectMap).find(function (key) {
        return RegExp(key, 'm').test(pathname);
      });

      if (match) {
        if (redirectMap[match].startsWith('/')) {
          this.redirect(event, redirectMap[match]);
        } else {
          this.props.dispatchActionCreator(redirectMap[match], event);
        }
      }
    }
  }, {
    key: "handleKeyPress",
    value: function handleKeyPress(event) {
      var redirectMap = this.props.redirectMap[keycode__WEBPACK_IMPORTED_MODULE_2___default()(event.keyCode)];

      if (redirectMap) {
        if (redirectMap[this.props.pathname]) {
          this.redirect(event, redirectMap[this.props.pathname]);
        } else {
          this.handleRegexMatching(event, redirectMap, this.props.pathname);
        }
      }
    } // eslint-disable-next-line class-methods-use-this

  }, {
    key: "render",
    value: function render() {
      return null;
    }
  }]);

  return ShortcutManager;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

_defineProperty(ShortcutManager, "displayName", 'Container(ShortcutManager)');

_defineProperty(ShortcutManager, "propTypes", _objectSpread({}, _talend_react_cmf__WEBPACK_IMPORTED_MODULE_3__["cmfConnect"].propTypes));

_defineProperty(ShortcutManager, "contextTypes", {
  store: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
});

/* harmony default export */ __webpack_exports__["default"] = (ShortcutManager);

/***/ }),

/***/ "./src/ShortcutManager/index.js":
/*!**************************************!*\
  !*** ./src/ShortcutManager/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ShortcutManager_connect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ShortcutManager.connect */ "./src/ShortcutManager/ShortcutManager.connect.js");

/* harmony default export */ __webpack_exports__["default"] = (_ShortcutManager_connect__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/SidePanel/SidePanel.connect.js":
/*!********************************************!*\
  !*** ./src/SidePanel/SidePanel.connect.js ***!
  \********************************************/
/*! exports provided: mapStateToProps, mergeProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapStateToProps", function() { return mapStateToProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeProps", function() { return mergeProps; });
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-router */ "react-router");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _talend_react_cmf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @talend/react-cmf */ "@talend/react-cmf");
/* harmony import */ var _talend_react_cmf__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_talend_react_cmf__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _talend_react_cmf_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @talend/react-cmf-router */ "@talend/react-cmf-router");
/* harmony import */ var _talend_react_cmf_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_talend_react_cmf_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _SidePanel_container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SidePanel.container */ "./src/SidePanel/SidePanel.container.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants */ "./src/SidePanel/constants.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var cache = {};
/**
 * return the cache structure to support one cache per componentId
 * @param componentId used to create entry in the cache
 * @param currentRoute used as cache key
 * @param actions the current actions used as cacheKey by reference
 */

function getCache() {
  var componentId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'default';
  var currentRoute = arguments.length > 1 ? arguments[1] : undefined;
  var actions = arguments.length > 2 ? arguments[2] : undefined;

  if (!cache[componentId]) {
    cache[componentId] = {};
  }

  if (cache[componentId].route !== currentRoute || cache[componentId].actions !== actions) {
    // invalidate the cache
    cache[componentId] = {
      route: currentRoute,
      actions: actions
    };
  }

  return cache[componentId];
}
/**
 * This function check if our current action point to a route which is the parent of the current
 * @param {string} actionPath the path of the action
 * @param {string} currentPath the pathname in the browser location
 */


function isBasePathOf(actionPath, currentPath) {
  var length = actionPath.length;

  if (currentPath.length + 1 === length) {
    return "".concat(currentPath, "/") === actionPath;
  }

  if (currentPath.length === length) {
    return currentPath === actionPath;
  }

  if (currentPath.length < length) {
    return false;
  }

  return actionPath === currentPath.slice(0, length) && ['/', '#'].includes(currentPath[length]);
}
/**
 * This function use on each action the attribute href to build the onClick
 * @param {Array} actions the list of all Action props you want.
 * @return a new actions Array ready to be used by the SidePanel
 */


function getActionsWrapped(actions) {
  return actions.map(function (action) {
    if (action.href && !action.onClick && !action.onClickDispatch && !action.onClickActionCreator) {
      return _objectSpread(_objectSpread({}, action), {}, {
        onClick: function onClick(event) {
          if (!event.metaKey && !event.ctrlKey) {
            event.preventDefault();
            event.stopPropagation();
          }
        },
        onClickDispatch: {
          type: _constants__WEBPACK_IMPORTED_MODULE_4__["ACTION_TYPE_LINK"],
          cmf: {
            routerPush: action.href
          }
        }
      });
    }

    return action;
  });
}

function getSelectedAction(currentRoute, actions) {
  return actions.find(function (action) {
    return action.href && isBasePathOf(action.href, currentRoute);
  });
}
/**
 * DEPRECATED: This is kept to not create any breaking change.
 * This function use the deprecated api `cmf.action.getActionInfo`
 * @param {string} id the action id you want to get in your settings
 * @param {string} currentRoute the pathname in the browser location
 * @param {Object} state redux state to create fake context for getActionInfo
 * @return a new actions Array ready to be used by the SidePanel
 */


function getAction(id, currentRoute, state) {
  var action = {
    actionId: id
  };
  var info = _talend_react_cmf__WEBPACK_IMPORTED_MODULE_1___default.a.action.getActionInfo({
    registry: _talend_react_cmf__WEBPACK_IMPORTED_MODULE_1___default.a.registry.getRegistry(),
    store: {
      getState: function getState() {
        return state;
      }
    }
  }, id);
  action.label = info.label;
  action.id = info.id;
  var route = Object(lodash__WEBPACK_IMPORTED_MODULE_5__["get"])(info, 'payload.cmf.routerReplace', Object(lodash__WEBPACK_IMPORTED_MODULE_5__["get"])(info, 'payload.cmf.routerPush', Object(lodash__WEBPACK_IMPORTED_MODULE_5__["get"])(info, 'href')));

  if (route && isBasePathOf(route, currentRoute)) {
    action.active = true;
  }

  return action;
}
/**
 * This function take care of perfomance to ensure we give the same array of actions
 * if we are on the same route for the same component with the same props
 * @param {Object} state the redux state
 * @param {Object} ownProps the props applied to the current component instance
 * @param {string} currentRoute the pathname in the browser location
 * @return {Array} array of actions ready for the sidepanel and cached to keep good performance
 */


function getActions(state, ownProps, currentRoute) {
  if (ownProps.actions) {
    var cacheAction = getCache(ownProps.componentId, currentRoute, ownProps.actions);

    if (!cacheAction.value) {
      cacheAction.value = getActionsWrapped(ownProps.actions);
    }

    return cacheAction.value;
  } else if (ownProps.actionIds) {
    var _cacheAction = getCache(ownProps.componentId, currentRoute, ownProps.actionIds);

    if (!_cacheAction.value) {
      _cacheAction.value = ownProps.actionIds.map(function (id) {
        return getAction(id, currentRoute, state);
      });
    }

    return _cacheAction.value;
  }

  return undefined;
}

function mapStateToProps(state, ownProps) {
  var props = {};
  var currentRoute = _talend_react_cmf_router__WEBPACK_IMPORTED_MODULE_2__["routerAPI"].selectors.getPath(state, true
  /* with hash */
  );
  props.actions = getActions(state, ownProps, currentRoute);

  if (ownProps.actions) {
    props.selected = getSelectedAction(currentRoute, props.actions);
  }

  return props;
}
function mergeProps(stateProps, dispatchProps, ownProps) {
  var props = _objectSpread(_objectSpread(_objectSpread({}, ownProps), stateProps), dispatchProps);

  if (props.actionIds) {
    delete props.actionIds;
  }

  return props;
}
/* harmony default export */ __webpack_exports__["default"] = (Object(react_router__WEBPACK_IMPORTED_MODULE_0__["withRouter"])(Object(_talend_react_cmf__WEBPACK_IMPORTED_MODULE_1__["cmfConnect"])({
  defaultState: _SidePanel_container__WEBPACK_IMPORTED_MODULE_3__["DEFAULT_STATE"],
  omitCMFProps: true,
  withComponentRegistry: true,
  withDispatch: true,
  withDispatchActionCreator: true,
  withComponentId: true,
  keepComponentState: true,
  mapStateToProps: mapStateToProps,
  mergeProps: mergeProps
})(_SidePanel_container__WEBPACK_IMPORTED_MODULE_3__["default"])));

/***/ }),

/***/ "./src/SidePanel/SidePanel.container.js":
/*!**********************************************!*\
  !*** ./src/SidePanel/SidePanel.container.js ***!
  \**********************************************/
/*! exports provided: DEFAULT_STATE, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_STATE", function() { return DEFAULT_STATE; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _talend_react_cmf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @talend/react-cmf */ "@talend/react-cmf");
/* harmony import */ var _talend_react_cmf__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_talend_react_cmf__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! immutable */ "immutable");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants */ "./src/SidePanel/constants.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _talend_react_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @talend/react-components */ "@talend/react-components");
/* harmony import */ var _talend_react_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_talend_react_components__WEBPACK_IMPORTED_MODULE_5__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var DEFAULT_STATE = new immutable__WEBPACK_IMPORTED_MODULE_2__["Map"]({
  docked: false
});
/**
 * Checkout the {@link http://talend.surge.sh/containers/?selectedKind=SidePanelExample&selectedStory=Default|examples}
 * @param {object} props react props
 */

var SidePanel = /*#__PURE__*/function (_React$Component) {
  _inherits(SidePanel, _React$Component);

  var _super = _createSuper(SidePanel);

  function SidePanel(props, context) {
    var _this;

    _classCallCheck(this, SidePanel);

    _this = _super.call(this, props, context);
    _this.onToggleDock = _this.onToggleDock.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(SidePanel, [{
    key: "onToggleDock",
    value: function onToggleDock() {
      var state = this.props.state || DEFAULT_STATE;
      this.props.setState({
        docked: !state.get('docked')
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props$state = this.props.state,
          state = _this$props$state === void 0 ? DEFAULT_STATE : _this$props$state;

      var props = _objectSpread({
        docked: state.get('docked'),
        onToggleDock: this.onToggleDock
      }, Object(lodash__WEBPACK_IMPORTED_MODULE_4__["omit"])(this.props, _talend_react_cmf__WEBPACK_IMPORTED_MODULE_1__["cmfConnect"].INJECTED_PROPS));

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_talend_react_components__WEBPACK_IMPORTED_MODULE_5__["SidePanel"], props);
    }
  }]);

  return SidePanel;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

_defineProperty(SidePanel, "displayName", 'Container(SidePanel)');

_defineProperty(SidePanel, "propTypes", _objectSpread({}, _talend_react_cmf__WEBPACK_IMPORTED_MODULE_1__["cmfConnect"].propTypes));

SidePanel.ACTION_TYPE_LINK = _constants__WEBPACK_IMPORTED_MODULE_3__["ACTION_TYPE_LINK"];
/* harmony default export */ __webpack_exports__["default"] = (SidePanel);

/***/ }),

/***/ "./src/SidePanel/constants.js":
/*!************************************!*\
  !*** ./src/SidePanel/constants.js ***!
  \************************************/
/*! exports provided: ACTION_TYPE_LINK */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACTION_TYPE_LINK", function() { return ACTION_TYPE_LINK; });
// eslint-disable-next-line import/prefer-default-export
var ACTION_TYPE_LINK = 'MENU_LINK';

/***/ }),

/***/ "./src/SidePanel/index.js":
/*!********************************!*\
  !*** ./src/SidePanel/index.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SidePanel_connect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SidePanel.connect */ "./src/SidePanel/SidePanel.connect.js");

/* harmony default export */ __webpack_exports__["default"] = (_SidePanel_connect__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/Slider/Slider.connect.js":
/*!**************************************!*\
  !*** ./src/Slider/Slider.connect.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _talend_react_cmf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @talend/react-cmf */ "@talend/react-cmf");
/* harmony import */ var _talend_react_cmf__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_talend_react_cmf__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Slider_container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Slider.container */ "./src/Slider/Slider.container.js");


/* harmony default export */ __webpack_exports__["default"] = (Object(_talend_react_cmf__WEBPACK_IMPORTED_MODULE_0__["cmfConnect"])({
  componentId: function componentId(ownProps) {
    return ownProps.id;
  },
  defaultState: _Slider_container__WEBPACK_IMPORTED_MODULE_1__["DEFAULT_STATE"],
  omitCMFProps: true,
  withComponentRegistry: true,
  withDispatch: true,
  withDispatchActionCreator: true,
  withComponentId: true
})(_Slider_container__WEBPACK_IMPORTED_MODULE_1__["default"]));

/***/ }),

/***/ "./src/Slider/Slider.container.js":
/*!****************************************!*\
  !*** ./src/Slider/Slider.container.js ***!
  \****************************************/
/*! exports provided: VALUE_ATTR, DEFAULT_STATE, DISPLAY_NAME, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VALUE_ATTR", function() { return VALUE_ATTR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_STATE", function() { return DEFAULT_STATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DISPLAY_NAME", function() { return DISPLAY_NAME; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _talend_react_cmf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @talend/react-cmf */ "@talend/react-cmf");
/* harmony import */ var _talend_react_cmf__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_talend_react_cmf__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! immutable */ "immutable");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _talend_react_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @talend/react-components */ "@talend/react-components");
/* harmony import */ var _talend_react_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_talend_react_components__WEBPACK_IMPORTED_MODULE_5__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var VALUE_ATTR = 'value';
var DEFAULT_STATE = new immutable__WEBPACK_IMPORTED_MODULE_2___default.a.Map(_defineProperty({}, VALUE_ATTR, undefined));
var DISPLAY_NAME = 'Container(Slider)';

var Slider = /*#__PURE__*/function (_React$Component) {
  _inherits(Slider, _React$Component);

  var _super = _createSuper(Slider);

  function Slider(props) {
    var _this;

    _classCallCheck(this, Slider);

    _this = _super.call(this, props);
    _this.onChange = _this.onChange.bind(_assertThisInitialized(_this));
    _this.onAfterChange = _this.onAfterChange.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Slider, [{
    key: "onAfterChange",
    value: function onAfterChange(value) {
      if (this.props.onAfterChange) {
        this.props.onAfterChange(value);
      }
    }
  }, {
    key: "onChange",
    value: function onChange(value) {
      this.props.setState(function (prevState) {
        return prevState.state.set(VALUE_ATTR, value);
      });

      if (this.props.onChange) {
        this.props.onChange(value);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var state = this.props.state || DEFAULT_STATE;

      var props = _objectSpread(_objectSpread({}, Object(lodash__WEBPACK_IMPORTED_MODULE_4__["omit"])(this.props, _talend_react_cmf__WEBPACK_IMPORTED_MODULE_1__["cmfConnect"].INJECTED_PROPS)), {}, {
        value: state.get(VALUE_ATTR, this.props.value),
        onChange: this.onChange,
        onAfterChange: this.onAfterChange
      });

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_talend_react_components__WEBPACK_IMPORTED_MODULE_5__["Slider"], props);
    }
  }]);

  return Slider;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

_defineProperty(Slider, "displayName", DISPLAY_NAME);

_defineProperty(Slider, "contextTypes", {
  registry: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
  store: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object
});

_defineProperty(Slider, "propTypes", _objectSpread(_objectSpread({}, _talend_react_cmf__WEBPACK_IMPORTED_MODULE_1__["cmfConnect"].propTypes), {}, {
  id: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  value: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number
}));

_defineProperty(Slider, "defaultProps", {
  value: 0
});

/* harmony default export */ __webpack_exports__["default"] = (Slider);

/***/ }),

/***/ "./src/Slider/Slider.selectors.js":
/*!****************************************!*\
  !*** ./src/Slider/Slider.selectors.js ***!
  \****************************************/
/*! exports provided: getComponentState, getValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getComponentState", function() { return getComponentState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getValue", function() { return getValue; });
/* harmony import */ var _Slider_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Slider.container */ "./src/Slider/Slider.container.js");

/**
 * Selector on the state from the filter id given.
 * @param {object} state
 * @param {string} idComponent
 */

function getComponentState(state, idComponent) {
  return state.cmf.components.getIn([_Slider_container__WEBPACK_IMPORTED_MODULE_0__["DISPLAY_NAME"], idComponent], _Slider_container__WEBPACK_IMPORTED_MODULE_0__["DEFAULT_STATE"]);
}
/**
 * Return the slider value
 * @param {object} state
 * @param {string} idComponent
 */

function getValue(state, idComponent) {
  return getComponentState(state, idComponent).get(_Slider_container__WEBPACK_IMPORTED_MODULE_0__["VALUE_ATTR"], '');
}

/***/ }),

/***/ "./src/Slider/index.js":
/*!*****************************!*\
  !*** ./src/Slider/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Slider_connect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Slider.connect */ "./src/Slider/Slider.connect.js");
/* harmony import */ var _Slider_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Slider.selectors */ "./src/Slider/Slider.selectors.js");


_Slider_connect__WEBPACK_IMPORTED_MODULE_0__["default"].selectors = {
  getComponentState: _Slider_selectors__WEBPACK_IMPORTED_MODULE_1__["getComponentState"],
  getValue: _Slider_selectors__WEBPACK_IMPORTED_MODULE_1__["getValue"]
};
/* harmony default export */ __webpack_exports__["default"] = (_Slider_connect__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/SubHeaderBar/SubHeaderBar.connect.js":
/*!**************************************************!*\
  !*** ./src/SubHeaderBar/SubHeaderBar.connect.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _talend_react_cmf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @talend/react-cmf */ "@talend/react-cmf");
/* harmony import */ var _talend_react_cmf__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_talend_react_cmf__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SubHeaderBar_container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SubHeaderBar.container */ "./src/SubHeaderBar/SubHeaderBar.container.js");


/* harmony default export */ __webpack_exports__["default"] = (Object(_talend_react_cmf__WEBPACK_IMPORTED_MODULE_0__["cmfConnect"])({
  componentId: function componentId(ownProps) {
    return ownProps.componentId || ownProps.id;
  },
  defaultState: _SubHeaderBar_container__WEBPACK_IMPORTED_MODULE_1__["DEFAULT_STATE"],
  omitCMFProps: true,
  withComponentRegistry: true,
  withDispatch: true,
  withDispatchActionCreator: true,
  withComponentId: true
})(_SubHeaderBar_container__WEBPACK_IMPORTED_MODULE_1__["default"]));

/***/ }),

/***/ "./src/SubHeaderBar/SubHeaderBar.container.js":
/*!****************************************************!*\
  !*** ./src/SubHeaderBar/SubHeaderBar.container.js ***!
  \****************************************************/
/*! exports provided: DISPLAY_NAME, DEFAULT_STATE, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DISPLAY_NAME", function() { return DISPLAY_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_STATE", function() { return DEFAULT_STATE; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! immutable */ "immutable");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _talend_react_cmf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @talend/react-cmf */ "@talend/react-cmf");
/* harmony import */ var _talend_react_cmf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_talend_react_cmf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _talend_react_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @talend/react-components */ "@talend/react-components");
/* harmony import */ var _talend_react_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_talend_react_components__WEBPACK_IMPORTED_MODULE_5__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var DISPLAY_NAME = 'Container(SubHeaderBar)';
var DEFAULT_STATE = new immutable__WEBPACK_IMPORTED_MODULE_2___default.a.Map({});

var SubHeaderBar = /*#__PURE__*/function (_React$Component) {
  _inherits(SubHeaderBar, _React$Component);

  var _super = _createSuper(SubHeaderBar);

  function SubHeaderBar(props) {
    var _this;

    _classCallCheck(this, SubHeaderBar);

    _this = _super.call(this, props);
    _this.onGoBack = _this.onGoBack.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(SubHeaderBar, [{
    key: "onGoBack",
    value: function onGoBack(event) {
      if (this.props.onGoBack) {
        this.props.onGoBack(event);
      }

      if (this.props.actionCreatorGoBack) {
        this.props.dispatchActionCreator(this.props.actionCreatorGoBack, event, {
          props: this.props
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var state = this.props.state || DEFAULT_STATE;
      var hasGoBack = this.props.onGoBack || this.props.actionCreatorGoBack;
      var _this$props = this.props,
          onEdit = _this$props.onEdit,
          onCancel = _this$props.onCancel,
          onSubmit = _this$props.onSubmit,
          onChange = _this$props.onChange;
      var eventHandlerProps = {};

      if (onEdit) {
        eventHandlerProps.onEdit = onEdit;
      }

      if (onCancel) {
        eventHandlerProps.onCancel = onCancel;
      }

      if (onSubmit) {
        eventHandlerProps.onSubmit = onSubmit;
      }

      if (onChange) {
        eventHandlerProps.onChange = onChange;
      }

      if (hasGoBack) {
        eventHandlerProps.onGoBack = this.onGoBack;
      }

      var props = _objectSpread(_objectSpread(_objectSpread({}, Object(lodash__WEBPACK_IMPORTED_MODULE_4__["omit"])(this.props, _talend_react_cmf__WEBPACK_IMPORTED_MODULE_3__["cmfConnect"].INJECTED_PROPS)), eventHandlerProps), state.toJS());

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_talend_react_components__WEBPACK_IMPORTED_MODULE_5__["SubHeaderBar"], props);
    }
  }]);

  return SubHeaderBar;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

_defineProperty(SubHeaderBar, "displayName", DISPLAY_NAME);

_defineProperty(SubHeaderBar, "propTypes", _objectSpread(_objectSpread({}, _talend_react_cmf__WEBPACK_IMPORTED_MODULE_3__["cmfConnect"].propTypes), {}, {
  actionCreatorCancel: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  actionCreatorEdit: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  actionCreatorSubmit: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  actionCreatorChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  actionCreatorGoBack: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  onCancel: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onEdit: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onSubmit: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onGoBack: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
}));

_defineProperty(SubHeaderBar, "contextTypes", {
  registry: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  store: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
});

/* harmony default export */ __webpack_exports__["default"] = (SubHeaderBar);

/***/ }),

/***/ "./src/SubHeaderBar/SubHeaderBar.selectors.js":
/*!****************************************************!*\
  !*** ./src/SubHeaderBar/SubHeaderBar.selectors.js ***!
  \****************************************************/
/*! exports provided: getComponentState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getComponentState", function() { return getComponentState; });
/* harmony import */ var _SubHeaderBar_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SubHeaderBar.container */ "./src/SubHeaderBar/SubHeaderBar.container.js");

/**
 * Selector on the state from the subheader bar id given.
 * @param {object} state
 * @param {string} idComponent
 */
// eslint-disable-next-line import/prefer-default-export

function getComponentState(state, idComponent) {
  return state.cmf.components.getIn([_SubHeaderBar_container__WEBPACK_IMPORTED_MODULE_0__["DISPLAY_NAME"], idComponent], _SubHeaderBar_container__WEBPACK_IMPORTED_MODULE_0__["DEFAULT_STATE"]);
}

/***/ }),

/***/ "./src/SubHeaderBar/index.js":
/*!***********************************!*\
  !*** ./src/SubHeaderBar/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SubHeaderBar_connect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SubHeaderBar.connect */ "./src/SubHeaderBar/SubHeaderBar.connect.js");
/* harmony import */ var _SubHeaderBar_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SubHeaderBar.selectors */ "./src/SubHeaderBar/SubHeaderBar.selectors.js");


_SubHeaderBar_connect__WEBPACK_IMPORTED_MODULE_0__["default"].selectors = _SubHeaderBar_selectors__WEBPACK_IMPORTED_MODULE_1__;
/* harmony default export */ __webpack_exports__["default"] = (_SubHeaderBar_connect__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/TabBar/TabBar.connect.js":
/*!**************************************!*\
  !*** ./src/TabBar/TabBar.connect.js ***!
  \**************************************/
/*! exports provided: DEFAULT_STATE, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_STATE", function() { return DEFAULT_STATE; });
/* harmony import */ var _talend_react_cmf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @talend/react-cmf */ "@talend/react-cmf");
/* harmony import */ var _talend_react_cmf__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_talend_react_cmf__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! immutable */ "immutable");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _talend_react_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @talend/react-components */ "@talend/react-components");
/* harmony import */ var _talend_react_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_talend_react_components__WEBPACK_IMPORTED_MODULE_2__);



var DEFAULT_STATE = new immutable__WEBPACK_IMPORTED_MODULE_1___default.a.Map({});
/* harmony default export */ __webpack_exports__["default"] = (Object(_talend_react_cmf__WEBPACK_IMPORTED_MODULE_0__["cmfConnect"])({
  componentId: function componentId(ownProps) {
    return ownProps.componentId || ownProps.id;
  },
  defaultProps: {
    initialState: {},
    onSelectSetState: {
      selectedKey: [1, 'key']
    }
  },
  defaultState: DEFAULT_STATE,
  omitCMFProps: true,
  withComponentRegistry: true,
  withDispatch: true,
  withDispatchActionCreator: true,
  withComponentId: true
})(_talend_react_components__WEBPACK_IMPORTED_MODULE_2__["TabBar"]));

/***/ }),

/***/ "./src/TabBar/TabBar.selectors.js":
/*!****************************************!*\
  !*** ./src/TabBar/TabBar.selectors.js ***!
  \****************************************/
/*! exports provided: getComponentState, getSelectedKey */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getComponentState", function() { return getComponentState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSelectedKey", function() { return getSelectedKey; });
/* harmony import */ var _TabBar_connect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TabBar.connect */ "./src/TabBar/TabBar.connect.js");
/* harmony import */ var _talend_react_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @talend/react-components */ "@talend/react-components");
/* harmony import */ var _talend_react_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_talend_react_components__WEBPACK_IMPORTED_MODULE_1__);

/**
 * Selector on the state from the tabbar id given.
 * @param {object} state
 * @param {string} idComponent
 */


function getComponentState(state, idComponent) {
  return state.cmf.components.getIn([_talend_react_components__WEBPACK_IMPORTED_MODULE_1__["TabBar"].displayName, idComponent], _TabBar_connect__WEBPACK_IMPORTED_MODULE_0__["DEFAULT_STATE"]);
}
/**
 * Return the selectedKey attr from the state of tabbar id given.
 * @param {object} state
 * @param {string} idComponent
 */

function getSelectedKey(state, idComponent) {
  return getComponentState(state, idComponent).get('selectedKey', undefined);
}

/***/ }),

/***/ "./src/TabBar/index.js":
/*!*****************************!*\
  !*** ./src/TabBar/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TabBar_connect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TabBar.connect */ "./src/TabBar/TabBar.connect.js");
/* harmony import */ var _TabBar_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TabBar.selectors */ "./src/TabBar/TabBar.selectors.js");


_TabBar_connect__WEBPACK_IMPORTED_MODULE_0__["default"].selectors = _TabBar_selectors__WEBPACK_IMPORTED_MODULE_1__;
/* harmony default export */ __webpack_exports__["default"] = (_TabBar_connect__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/TreeView/TreeView.container.js":
/*!********************************************!*\
  !*** ./src/TreeView/TreeView.container.js ***!
  \********************************************/
/*! exports provided: DISPLAY_NAME, DEFAULT_PROPS, DEFAULT_STATE, transform, mapStateToProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DISPLAY_NAME", function() { return DISPLAY_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_PROPS", function() { return DEFAULT_PROPS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_STATE", function() { return DEFAULT_STATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transform", function() { return transform; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapStateToProps", function() { return mapStateToProps; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _talend_react_cmf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @talend/react-cmf */ "@talend/react-cmf");
/* harmony import */ var _talend_react_cmf__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_talend_react_cmf__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_immutable_proptypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-immutable-proptypes */ "../../node_modules/react-immutable-proptypes/dist/ImmutablePropTypes.js");
/* harmony import */ var react_immutable_proptypes__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_immutable_proptypes__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! immutable */ "immutable");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _talend_react_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @talend/react-components */ "@talend/react-components");
/* harmony import */ var _talend_react_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_talend_react_components__WEBPACK_IMPORTED_MODULE_6__);
var _Immutable$Map;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








var OPENED_ATTR = 'opened';
var SELECTED_ATTR = 'selectedId';
var DISPLAY_NAME = 'Container(TreeView)';
var DEFAULT_PROPS = {
  idAttr: 'id',
  nameAttr: 'name',
  childrenAttr: 'children'
};
var DEFAULT_STATE = new immutable__WEBPACK_IMPORTED_MODULE_4___default.a.Map((_Immutable$Map = {}, _defineProperty(_Immutable$Map, OPENED_ATTR, new immutable__WEBPACK_IMPORTED_MODULE_4___default.a.List()), _defineProperty(_Immutable$Map, SELECTED_ATTR, undefined), _Immutable$Map));

function itemHasChildId(data, idAttr, idToMatch) {
  if (!data.children || !data.children.length) {
    return false;
  }

  return data.children.some(function (child) {
    return child[idAttr] === idToMatch || itemHasChildId(child, idAttr, idToMatch);
  });
}

function toggleState(prevProps, data, idAttr) {
  var id = data[idAttr];
  var opened = prevProps.state.get(OPENED_ATTR);
  var index = opened.indexOf(id);

  if (index !== -1) {
    var nextState = prevProps.state.set(OPENED_ATTR, opened["delete"](index));
    var selectedId = nextState.get(SELECTED_ATTR);

    if (selectedId !== undefined && itemHasChildId(data, idAttr, selectedId)) {
      nextState = nextState.set(SELECTED_ATTR, undefined);
    }

    return nextState;
  }

  return prevProps.state.set(OPENED_ATTR, prevProps.state.get(OPENED_ATTR).push(id));
}

function openAllState(prevProps, data, idAttr) {
  var nextOpened = data.reduce(function (accu, item) {
    return accu.add(item[idAttr]);
  }, prevProps.state.get(OPENED_ATTR).toSet()).toList();
  return prevProps.state.set(OPENED_ATTR, nextOpened);
}

function selectWrapper(prevProps, id) {
  var selected = prevProps.state.get(SELECTED_ATTR);

  if (id === selected) {
    return prevProps.state.set(SELECTED_ATTR, undefined);
  }

  return prevProps.state.set(SELECTED_ATTR, id);
}
/**
 * recursive function to apply change on all data and support attr mapping
 * @param {Array<Object>} items is the list of pure items, your data
 * @param {Object} props the configuration of the Tree container
 * @return {Array} of items ready to be put as the structure of TreeView component
 */


function transform(items, props, parent) {
  if (!items) {
    return undefined;
  }

  var state = props.state || DEFAULT_STATE;
  var selectedId = state.get(SELECTED_ATTR);
  var opened = state.get(OPENED_ATTR);
  return items.map(function (item) {
    var elem = _objectSpread(_objectSpread({}, item), {}, {
      id: item[props.idAttr],
      isOpened: item.isOpened || opened.includes(item[props.idAttr]),
      name: item[props.nameAttr],
      parent: parent
    });

    elem.children = transform(item[props.childrenAttr], props, elem);

    if (item[props.idAttr] === selectedId) {
      for (var current = elem; current.parent; current = current.parent) {
        current.parent.isOpened = true;
      }
    }

    return elem;
  });
}
/**
 * The TreeView React container
 */

var TreeView = /*#__PURE__*/function (_React$Component) {
  _inherits(TreeView, _React$Component);

  var _super = _createSuper(TreeView);

  function TreeView(props) {
    var _this;

    _classCallCheck(this, TreeView);

    _this = _super.call(this, props);
    _this.onSelect = _this.onSelect.bind(_assertThisInitialized(_this));
    _this.onToggle = _this.onToggle.bind(_assertThisInitialized(_this));
    _this.onToggleAllSiblings = _this.onToggleAllSiblings.bind(_assertThisInitialized(_this));

    if (props.onClick && "development" !== 'production') {
      // eslint-disable-next-line no-console
      console.warn('Treeview container: props.onClick is deprecated please use onToggle that is way more explicit');
    }

    return _this;
  }

  _createClass(TreeView, [{
    key: "onSelect",
    value: function onSelect(event, data) {
      var _this2 = this;

      this.props.setState(function (prevState) {
        return selectWrapper(prevState, data[_this2.props.idAttr]);
      });

      if (this.props.onSelectActionCreator) {
        this.props.dispatchActionCreator(this.props.onSelectActionCreator, {
          type: 'select',
          source: 'TreeView',
          props: this.props
        }, data);
      }

      if (this.props.onSelect) {
        this.props.onSelect(data);
      }
    }
  }, {
    key: "onToggle",
    value: function onToggle(event, data) {
      var _this3 = this;

      this.props.setState(function (prevState) {
        return toggleState(prevState, data, _this3.props.idAttr);
      });

      if (this.props.onClickActionCreator) {
        this.props.dispatchActionCreator(this.props.onClickActionCreator, {
          type: 'toggle',
          source: 'TreeView',
          props: this.props
        }, data);
      }

      if (this.props.onToggle) {
        this.props.onToggle(data);
      } // deprecated


      if (this.props.onClick) {
        this.props.onClick(data);
      }
    }
  }, {
    key: "onToggleAllSiblings",
    value: function onToggleAllSiblings(event, data) {
      var _this4 = this;

      this.props.setState(function (prevState) {
        return openAllState(prevState, data, _this4.props.idAttr);
      });
    }
  }, {
    key: "getSelectedId",
    value: function getSelectedId() {
      var selectedId = this.props[SELECTED_ATTR];

      if (selectedId !== undefined) {
        return selectedId;
      }

      var state = this.props.state || DEFAULT_STATE;
      return state.get(SELECTED_ATTR);
    }
  }, {
    key: "render",
    value: function render() {
      if (!this.props.data) {
        return null;
      }

      var structure = transform(this.props.data.toJS(), this.props);
      var props = Object(lodash__WEBPACK_IMPORTED_MODULE_5__["omit"])(this.props, _talend_react_cmf__WEBPACK_IMPORTED_MODULE_2__["cmfConnect"].INJECTED_PROPS);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_talend_react_components__WEBPACK_IMPORTED_MODULE_6__["TreeView"], _extends({}, props, {
        structure: structure,
        onSelect: this.onSelect,
        onToggle: this.onToggle,
        onToggleAllSiblings: this.onToggleAllSiblings,
        selectedId: this.getSelectedId()
      }));
    }
  }]);

  return TreeView;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

_defineProperty(TreeView, "displayName", DISPLAY_NAME);

_defineProperty(TreeView, "propTypes", _objectSpread({
  childrenAttr: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  data: react_immutable_proptypes__WEBPACK_IMPORTED_MODULE_3___default.a.list,
  idAttr: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  nameAttr: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onToggle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onSelect: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onClickActionCreator: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  onSelectActionCreator: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
}, _talend_react_cmf__WEBPACK_IMPORTED_MODULE_2__["cmfConnect"].propTypes));

_defineProperty(TreeView, "defaultProps", DEFAULT_PROPS);

function mapStateToProps(state, ownProps) {
  var props = {};

  if (ownProps.collection) {
    props.data = state.cmf.collections.getIn(ownProps.collection.split('.'));

    if (!props.data) {
      // eslint-disable-next-line no-console
      console.warn('TreeView.collection not found');
    }
  }

  return props;
}
/* harmony default export */ __webpack_exports__["default"] = (Object(_talend_react_cmf__WEBPACK_IMPORTED_MODULE_2__["cmfConnect"])({
  defaultState: DEFAULT_STATE,
  mapStateToProps: mapStateToProps,
  omitCMFProps: true,
  withComponentRegistry: true,
  withDispatch: true,
  withDispatchActionCreator: true,
  withComponentId: true
})(TreeView));

/***/ }),

/***/ "./src/TreeView/index.js":
/*!*******************************!*\
  !*** ./src/TreeView/index.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TreeView_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TreeView.container */ "./src/TreeView/TreeView.container.js");

/* harmony default export */ __webpack_exports__["default"] = (_TreeView_container__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/Typeahead/Typeahead.connect.js":
/*!********************************************!*\
  !*** ./src/Typeahead/Typeahead.connect.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _talend_react_cmf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @talend/react-cmf */ "@talend/react-cmf");
/* harmony import */ var _talend_react_cmf__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_talend_react_cmf__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Typeahead_container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Typeahead.container */ "./src/Typeahead/Typeahead.container.js");


/* harmony default export */ __webpack_exports__["default"] = (Object(_talend_react_cmf__WEBPACK_IMPORTED_MODULE_0__["cmfConnect"])({
  defaultState: _Typeahead_container__WEBPACK_IMPORTED_MODULE_1__["DEFAULT_STATE"],
  omitCMFProps: true,
  withComponentRegistry: true,
  withDispatch: true,
  withDispatchActionCreator: true,
  withComponentId: true
})(_Typeahead_container__WEBPACK_IMPORTED_MODULE_1__["default"]));

/***/ }),

/***/ "./src/Typeahead/Typeahead.container.js":
/*!**********************************************!*\
  !*** ./src/Typeahead/Typeahead.container.js ***!
  \**********************************************/
/*! exports provided: DISPLAY_NAME, DEFAULT_STATE, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DISPLAY_NAME", function() { return DISPLAY_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_STATE", function() { return DEFAULT_STATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Typeahead; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! immutable */ "immutable");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _talend_react_cmf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @talend/react-cmf */ "@talend/react-cmf");
/* harmony import */ var _talend_react_cmf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_talend_react_cmf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var keycode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! keycode */ "../../node_modules/keycode/index.js");
/* harmony import */ var keycode__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(keycode__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _talend_react_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @talend/react-components */ "@talend/react-components");
/* harmony import */ var _talend_react_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_talend_react_components__WEBPACK_IMPORTED_MODULE_6__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








var DISPLAY_NAME = 'Container(Typeahead)';
var DEFAULT_STATE = new immutable__WEBPACK_IMPORTED_MODULE_2___default.a.Map({
  docked: true,
  searching: false,
  focusedSectionIndex: null,
  focusedItemIndex: null,
  items: null
});
/**
 * The Typeahead React container
 */

var Typeahead = /*#__PURE__*/function (_React$Component) {
  _inherits(Typeahead, _React$Component);

  var _super = _createSuper(Typeahead);

  function Typeahead(props) {
    var _this;

    _classCallCheck(this, Typeahead);

    _this = _super.call(this, props);
    _this.onToggle = _this.onToggle.bind(_assertThisInitialized(_this));
    _this.onKeyDown = _this.onKeyDown.bind(_assertThisInitialized(_this));
    _this.onBlur = _this.onBlur.bind(_assertThisInitialized(_this));
    _this.onSelect = _this.onSelect.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Typeahead, [{
    key: "onToggle",
    value: function onToggle() {
      var _this2 = this;

      this.props.setState(function () {
        return {
          docked: !_this2.props.state.get('docked', true),
          focusedSectionIndex: null,
          focusedItemIndex: null,
          items: null
        };
      });
    }
  }, {
    key: "onBlur",
    value: function onBlur(event) {
      var onBlur = this.props.onBlur;
      this.onToggle();

      if (onBlur) {
        onBlur(event);
      }
    }
  }, {
    key: "onSelect",
    value: function onSelect(event, value) {
      var onSelect = this.props.onSelect;

      if (onSelect) {
        onSelect(event, value);
      }
    }
  }, {
    key: "onKeyDown",
    value: function onKeyDown(event, data) {
      var onKeyDown = this.props.onKeyDown;
      var highlightedItemIndex = data.highlightedItemIndex,
          newHighlightedItemIndex = data.newHighlightedItemIndex,
          highlightedSectionIndex = data.highlightedSectionIndex,
          newHighlightedSectionIndex = data.newHighlightedSectionIndex;

      if (onKeyDown) {
        onKeyDown(event, data);
      }

      switch (event.which) {
        case keycode__WEBPACK_IMPORTED_MODULE_4___default.a.codes.down:
        case keycode__WEBPACK_IMPORTED_MODULE_4___default.a.codes.up:
          event.preventDefault();
          this.props.setState(function () {
            return {
              focusedSectionIndex: newHighlightedSectionIndex,
              focusedItemIndex: newHighlightedItemIndex
            };
          });
          break;

        case keycode__WEBPACK_IMPORTED_MODULE_4___default.a.codes.enter:
          event.preventDefault();

          if (highlightedItemIndex !== null && highlightedItemIndex !== null) {
            this.onSelect(event, {
              sectionIndex: highlightedSectionIndex,
              itemIndex: highlightedItemIndex
            });
          }

          break;

        case keycode__WEBPACK_IMPORTED_MODULE_4___default.a.codes.esc:
          event.preventDefault();
          this.onBlur(event);
          break;

        default:
      }
    }
  }, {
    key: "render",
    value: function render() {
      var items = this.props.items;

      var props = _objectSpread(_objectSpread(_objectSpread({}, Object(lodash__WEBPACK_IMPORTED_MODULE_5__["omit"])(this.props, _talend_react_cmf__WEBPACK_IMPORTED_MODULE_3__["cmfConnect"].INJECTED_PROPS)), this.props.state.toJS()), {}, {
        onToggle: this.onToggle,
        onBlur: this.onBlur,
        onSelect: this.onSelect,
        onKeyDown: this.onKeyDown,
        items: items && items.toJS ? items.toJS() : items
      });

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_talend_react_components__WEBPACK_IMPORTED_MODULE_6__["Typeahead"], props);
    }
  }]);

  return Typeahead;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

_defineProperty(Typeahead, "displayName", DISPLAY_NAME);

_defineProperty(Typeahead, "propTypes", _objectSpread(_objectSpread({}, _talend_react_cmf__WEBPACK_IMPORTED_MODULE_3__["componentState"].propTypes), {}, {
  onSelect: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onBlur: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
}));



/***/ }),

/***/ "./src/Typeahead/index.js":
/*!********************************!*\
  !*** ./src/Typeahead/index.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Typeahead_connect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Typeahead.connect */ "./src/Typeahead/Typeahead.connect.js");

/* harmony default export */ __webpack_exports__["default"] = (_Typeahead_connect__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/actionAPI.js":
/*!**************************!*\
  !*** ./src/actionAPI.js ***!
  \**************************/
/*! exports provided: getActionsProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getActionsProps", function() { return getActionsProps; });
/* harmony import */ var _talend_react_cmf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @talend/react-cmf */ "@talend/react-cmf");
/* harmony import */ var _talend_react_cmf__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_talend_react_cmf__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }


/**
 * add support for expression in actions.
 * it change the action props by their expression value
 * it support the following props in the action
 * * available
 * * disabled
 * * inProgress
 * * labelExpression
 */

function evalExpressions(action, context) {
  var payload = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var newAction = _talend_react_cmf__WEBPACK_IMPORTED_MODULE_0___default.a.expression.getProps(action, ['active', 'available', 'disabled', 'inProgress'], context, payload);
  return newAction;
}

function getActionsProps(context, ids, model) {
  if (!ids) {
    return [];
  }

  var tmpIds = ids;
  var onlyOne = typeof ids === 'string' || _typeof(ids) === 'object' && !Array.isArray(ids);

  if (onlyOne) {
    tmpIds = [ids];
  }

  var infos = tmpIds.map(function (id) {
    if (typeof id === 'string') {
      return _talend_react_cmf__WEBPACK_IMPORTED_MODULE_0___default.a.action.getActionInfo(context, id);
    }

    return id;
  });
  var props = infos.map(function (info) {
    return _objectSpread({
      onClick: function onClick(event, data) {
        if (info.actionCreator) {
          context.store.dispatch(_talend_react_cmf__WEBPACK_IMPORTED_MODULE_0___default.a.action.getActionObject(context, info.id, event, data));
        } else {
          context.store.dispatch(_objectSpread({
            model: model
          }, info.payload));
        }
      }
    }, evalExpressions(info, context, {
      model: model
    }));
  });

  if (onlyOne) {
    return props[0];
  }

  return props;
}
/* harmony default export */ __webpack_exports__["default"] = ({
  getProps: getActionsProps,
  evalExpressions: evalExpressions
});

/***/ }),

/***/ "./src/actionOnClick.js":
/*!******************************!*\
  !*** ./src/actionOnClick.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getOnClick; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


function getOnClick(item, props) {
  if (item.href) {
    return {};
  }

  if (!item.actionCreator && !Object(lodash__WEBPACK_IMPORTED_MODULE_0__["get"])(item, 'payload.type')) {
    return {};
  }

  return {
    onClick: function onClick(event, data) {
      if (item.actionCreator) {
        props.dispatchActionCreator(item.actionCreator, event, data);
      } else {
        props.dispatch(_objectSpread({
          model: props.model
        }, item.payload));
      }
    }
  };
}

/***/ }),

/***/ "./src/cmfModule.js":
/*!**************************!*\
  !*** ./src/cmfModule.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _talend_react_cmf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @talend/react-cmf */ "@talend/react-cmf");
/* harmony import */ var _talend_react_cmf__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_talend_react_cmf__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _containers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./containers */ "./src/containers.js");
/* harmony import */ var _talend_react_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @talend/react-components */ "@talend/react-components");
/* harmony import */ var _talend_react_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_talend_react_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);




var components = Object.keys(_talend_react_components__WEBPACK_IMPORTED_MODULE_2__).reduce(function (acc, key) {
  if (!acc[key] && typeof _talend_react_components__WEBPACK_IMPORTED_MODULE_2__[key] === 'function') {
    var options = {};

    if (['ActionList', 'AppSwitcher', 'Layout', 'RichLayout', 'Dialog'].includes(key)) {
      options.withComponentRegistry = true;
    }

    if (!_talend_react_components__WEBPACK_IMPORTED_MODULE_2__[key].displayName) {
      _talend_react_components__WEBPACK_IMPORTED_MODULE_2__[key].displayName = key;
    } // eslint-disable-next-line no-param-reassign


    acc[key] = Object(_talend_react_cmf__WEBPACK_IMPORTED_MODULE_0__["cmfConnect"])(options)(_talend_react_components__WEBPACK_IMPORTED_MODULE_2__[key]);
  }

  return acc;
}, Object(lodash__WEBPACK_IMPORTED_MODULE_3__["omit"])(_containers__WEBPACK_IMPORTED_MODULE_1__, ['actionAPI']));
/* harmony default export */ __webpack_exports__["default"] = ({
  id: 'containers',
  components: components
});

/***/ }),

/***/ "./src/constant.js":
/*!*************************!*\
  !*** ./src/constant.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var I18N_DOMAIN_CONTAINERS = 'tui-containers';
/* harmony default export */ __webpack_exports__["default"] = (I18N_DOMAIN_CONTAINERS);

/***/ }),

/***/ "./src/containers.js":
/*!***************************!*\
  !*** ./src/containers.js ***!
  \***************************/
/*! exports provided: AboutDialog, Action, ActionBar, ActionButton, ActionDropdown, ActionFile, ActionIconToggle, Actions, ActionSplitDropdown, AppLoader, Badge, Breadcrumbs, ConfirmDialog, FilterBar, GuidedTour, HeaderBar, HomeListView, List, Notification, ObjectViewer, Redirect, ShortcutManager, SelectObject, SidePanel, TreeView, DeleteResource, SubHeaderBar, EditableText, Typeahead, TabBar, Slider, ComponentForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AboutDialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AboutDialog */ "./src/AboutDialog/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AboutDialog", function() { return _AboutDialog__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _Action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Action */ "./src/Action/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Action", function() { return _Action__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _ActionBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ActionBar */ "./src/ActionBar/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActionBar", function() { return _ActionBar__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _ActionButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ActionButton */ "./src/ActionButton/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActionButton", function() { return _ActionButton__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _ActionDropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ActionDropdown */ "./src/ActionDropdown/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActionDropdown", function() { return _ActionDropdown__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _ActionFile__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ActionFile */ "./src/ActionFile/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActionFile", function() { return _ActionFile__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _ActionIconToggle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ActionIconToggle */ "./src/ActionIconToggle/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActionIconToggle", function() { return _ActionIconToggle__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _Actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Actions */ "./src/Actions/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Actions", function() { return _Actions__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _ActionSplitDropdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ActionSplitDropdown */ "./src/ActionSplitDropdown/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActionSplitDropdown", function() { return _ActionSplitDropdown__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _AppLoader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./AppLoader */ "./src/AppLoader/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppLoader", function() { return _AppLoader__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _Badge__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Badge */ "./src/Badge/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Badge", function() { return _Badge__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _Breadcrumbs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Breadcrumbs */ "./src/Breadcrumbs/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Breadcrumbs", function() { return _Breadcrumbs__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _ConfirmDialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ConfirmDialog */ "./src/ConfirmDialog/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ConfirmDialog", function() { return _ConfirmDialog__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony import */ var _FilterBar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./FilterBar */ "./src/FilterBar/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FilterBar", function() { return _FilterBar__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* harmony import */ var _GuidedTour__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./GuidedTour */ "./src/GuidedTour/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GuidedTour", function() { return _GuidedTour__WEBPACK_IMPORTED_MODULE_14__["default"]; });

/* harmony import */ var _HeaderBar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./HeaderBar */ "./src/HeaderBar/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HeaderBar", function() { return _HeaderBar__WEBPACK_IMPORTED_MODULE_15__["default"]; });

/* harmony import */ var _HomeListView__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./HomeListView */ "./src/HomeListView/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HomeListView", function() { return _HomeListView__WEBPACK_IMPORTED_MODULE_16__["default"]; });

/* harmony import */ var _List__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./List */ "./src/List/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "List", function() { return _List__WEBPACK_IMPORTED_MODULE_17__["default"]; });

/* harmony import */ var _Notification__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./Notification */ "./src/Notification/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Notification", function() { return _Notification__WEBPACK_IMPORTED_MODULE_18__["default"]; });

/* harmony import */ var _ObjectViewer__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./ObjectViewer */ "./src/ObjectViewer/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ObjectViewer", function() { return _ObjectViewer__WEBPACK_IMPORTED_MODULE_19__["default"]; });

/* harmony import */ var _Redirect__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./Redirect */ "./src/Redirect/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Redirect", function() { return _Redirect__WEBPACK_IMPORTED_MODULE_20__["default"]; });

/* harmony import */ var _ShortcutManager__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./ShortcutManager */ "./src/ShortcutManager/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ShortcutManager", function() { return _ShortcutManager__WEBPACK_IMPORTED_MODULE_21__["default"]; });

/* harmony import */ var _SelectObject__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./SelectObject */ "./src/SelectObject/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectObject", function() { return _SelectObject__WEBPACK_IMPORTED_MODULE_22__["default"]; });

/* harmony import */ var _SidePanel__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./SidePanel */ "./src/SidePanel/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SidePanel", function() { return _SidePanel__WEBPACK_IMPORTED_MODULE_23__["default"]; });

/* harmony import */ var _TreeView__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./TreeView */ "./src/TreeView/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TreeView", function() { return _TreeView__WEBPACK_IMPORTED_MODULE_24__["default"]; });

/* harmony import */ var _DeleteResource__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./DeleteResource */ "./src/DeleteResource/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DeleteResource", function() { return _DeleteResource__WEBPACK_IMPORTED_MODULE_25__["default"]; });

/* harmony import */ var _SubHeaderBar__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./SubHeaderBar */ "./src/SubHeaderBar/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SubHeaderBar", function() { return _SubHeaderBar__WEBPACK_IMPORTED_MODULE_26__["default"]; });

/* harmony import */ var _EditableText__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./EditableText */ "./src/EditableText/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditableText", function() { return _EditableText__WEBPACK_IMPORTED_MODULE_27__["default"]; });

/* harmony import */ var _Typeahead__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./Typeahead */ "./src/Typeahead/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Typeahead", function() { return _Typeahead__WEBPACK_IMPORTED_MODULE_28__["default"]; });

/* harmony import */ var _TabBar__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./TabBar */ "./src/TabBar/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TabBar", function() { return _TabBar__WEBPACK_IMPORTED_MODULE_29__["default"]; });

/* harmony import */ var _Slider__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./Slider */ "./src/Slider/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Slider", function() { return _Slider__WEBPACK_IMPORTED_MODULE_30__["default"]; });

/* harmony import */ var _ComponentForm__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./ComponentForm */ "./src/ComponentForm/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ComponentForm", function() { return _ComponentForm__WEBPACK_IMPORTED_MODULE_31__["default"]; });


































/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: AboutDialog, Action, ActionBar, ActionButton, ActionDropdown, ActionFile, ActionIconToggle, Actions, ActionSplitDropdown, AppLoader, Badge, Breadcrumbs, ConfirmDialog, FilterBar, GuidedTour, HeaderBar, HomeListView, List, Notification, ObjectViewer, Redirect, ShortcutManager, SelectObject, SidePanel, TreeView, DeleteResource, SubHeaderBar, EditableText, Typeahead, TabBar, Slider, ComponentForm, actionAPI, registerAllContainers, Layout, CircularProgress, Drawer, Icon, IconsProvider, TooltipTrigger, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Layout", function() { return Layout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CircularProgress", function() { return CircularProgress; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Drawer", function() { return Drawer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Icon", function() { return Icon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconsProvider", function() { return IconsProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipTrigger", function() { return TooltipTrigger; });
/* harmony import */ var _talend_react_cmf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @talend/react-cmf */ "@talend/react-cmf");
/* harmony import */ var _talend_react_cmf__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_talend_react_cmf__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _cmfModule__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cmfModule */ "./src/cmfModule.js");
/* harmony import */ var _talend_react_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @talend/react-components */ "@talend/react-components");
/* harmony import */ var _talend_react_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_talend_react_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _containers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./containers */ "./src/containers.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AboutDialog", function() { return _containers__WEBPACK_IMPORTED_MODULE_3__["AboutDialog"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Action", function() { return _containers__WEBPACK_IMPORTED_MODULE_3__["Action"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActionBar", function() { return _containers__WEBPACK_IMPORTED_MODULE_3__["ActionBar"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActionButton", function() { return _containers__WEBPACK_IMPORTED_MODULE_3__["ActionButton"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActionDropdown", function() { return _containers__WEBPACK_IMPORTED_MODULE_3__["ActionDropdown"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActionFile", function() { return _containers__WEBPACK_IMPORTED_MODULE_3__["ActionFile"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActionIconToggle", function() { return _containers__WEBPACK_IMPORTED_MODULE_3__["ActionIconToggle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Actions", function() { return _containers__WEBPACK_IMPORTED_MODULE_3__["Actions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActionSplitDropdown", function() { return _containers__WEBPACK_IMPORTED_MODULE_3__["ActionSplitDropdown"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppLoader", function() { return _containers__WEBPACK_IMPORTED_MODULE_3__["AppLoader"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Badge", function() { return _containers__WEBPACK_IMPORTED_MODULE_3__["Badge"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Breadcrumbs", function() { return _containers__WEBPACK_IMPORTED_MODULE_3__["Breadcrumbs"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ConfirmDialog", function() { return _containers__WEBPACK_IMPORTED_MODULE_3__["ConfirmDialog"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FilterBar", function() { return _containers__WEBPACK_IMPORTED_MODULE_3__["FilterBar"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GuidedTour", function() { return _containers__WEBPACK_IMPORTED_MODULE_3__["GuidedTour"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HeaderBar", function() { return _containers__WEBPACK_IMPORTED_MODULE_3__["HeaderBar"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HomeListView", function() { return _containers__WEBPACK_IMPORTED_MODULE_3__["HomeListView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "List", function() { return _containers__WEBPACK_IMPORTED_MODULE_3__["List"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Notification", function() { return _containers__WEBPACK_IMPORTED_MODULE_3__["Notification"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ObjectViewer", function() { return _containers__WEBPACK_IMPORTED_MODULE_3__["ObjectViewer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Redirect", function() { return _containers__WEBPACK_IMPORTED_MODULE_3__["Redirect"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ShortcutManager", function() { return _containers__WEBPACK_IMPORTED_MODULE_3__["ShortcutManager"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectObject", function() { return _containers__WEBPACK_IMPORTED_MODULE_3__["SelectObject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SidePanel", function() { return _containers__WEBPACK_IMPORTED_MODULE_3__["SidePanel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TreeView", function() { return _containers__WEBPACK_IMPORTED_MODULE_3__["TreeView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DeleteResource", function() { return _containers__WEBPACK_IMPORTED_MODULE_3__["DeleteResource"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SubHeaderBar", function() { return _containers__WEBPACK_IMPORTED_MODULE_3__["SubHeaderBar"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditableText", function() { return _containers__WEBPACK_IMPORTED_MODULE_3__["EditableText"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Typeahead", function() { return _containers__WEBPACK_IMPORTED_MODULE_3__["Typeahead"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TabBar", function() { return _containers__WEBPACK_IMPORTED_MODULE_3__["TabBar"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Slider", function() { return _containers__WEBPACK_IMPORTED_MODULE_3__["Slider"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ComponentForm", function() { return _containers__WEBPACK_IMPORTED_MODULE_3__["ComponentForm"]; });

/* harmony import */ var _actionAPI__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./actionAPI */ "./src/actionAPI.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "actionAPI", function() { return _actionAPI__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _register__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register */ "./src/register.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "registerAllContainers", function() { return _register__WEBPACK_IMPORTED_MODULE_5__["registerAllContainers"]; });







var Layout = Object(_talend_react_cmf__WEBPACK_IMPORTED_MODULE_0__["cmfConnect"])({
  omitCMFProps: true,
  withComponentRegistry: true
})(_talend_react_components__WEBPACK_IMPORTED_MODULE_2__["Layout"]);
var CircularProgress = Object(_talend_react_cmf__WEBPACK_IMPORTED_MODULE_0__["cmfConnect"])({
  omitCMFProps: true
})(_talend_react_components__WEBPACK_IMPORTED_MODULE_2__["CircularProgress"]);
var Drawer = Object(_talend_react_cmf__WEBPACK_IMPORTED_MODULE_0__["cmfConnect"])({
  omitCMFProps: true,
  withComponentRegistry: true
})(_talend_react_components__WEBPACK_IMPORTED_MODULE_2__["Drawer"]);
var Icon = Object(_talend_react_cmf__WEBPACK_IMPORTED_MODULE_0__["cmfConnect"])({
  omitCMFProps: true
})(_talend_react_components__WEBPACK_IMPORTED_MODULE_2__["Icon"]);
var IconsProvider = Object(_talend_react_cmf__WEBPACK_IMPORTED_MODULE_0__["cmfConnect"])({
  omitCMFProps: true
})(_talend_react_components__WEBPACK_IMPORTED_MODULE_2__["IconsProvider"]);
var TooltipTrigger = Object(_talend_react_cmf__WEBPACK_IMPORTED_MODULE_0__["cmfConnect"])({
  omitCMFProps: true
})(_talend_react_components__WEBPACK_IMPORTED_MODULE_2__["TooltipTrigger"]);
/* harmony default export */ __webpack_exports__["default"] = (_cmfModule__WEBPACK_IMPORTED_MODULE_1__["default"]);

/***/ }),

/***/ "./src/register.js":
/*!*************************!*\
  !*** ./src/register.js ***!
  \*************************/
/*! exports provided: registerAllContainers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerAllContainers", function() { return registerAllContainers; });
/* harmony import */ var _talend_react_cmf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @talend/react-cmf */ "@talend/react-cmf");
/* harmony import */ var _talend_react_cmf__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_talend_react_cmf__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _cmfModule__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cmfModule */ "./src/cmfModule.js");

 // TODO 6.0: remove this function
// eslint-disable-next-line import/prefer-default-export

function registerAllContainers() {
  console.warn('@talend/react-containers > registerAllContainers() is deprecated. Use the cmf module instead to register the components. This function may be removed in 6.0');
  _talend_react_cmf__WEBPACK_IMPORTED_MODULE_0___default.a.component.registerMany(_cmfModule__WEBPACK_IMPORTED_MODULE_1__["default"].components);
}

/***/ }),

/***/ "./src/renderers.js":
/*!**************************!*\
  !*** ./src/renderers.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getRenderers; });
/* harmony import */ var _talend_react_cmf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @talend/react-cmf */ "@talend/react-cmf");
/* harmony import */ var _talend_react_cmf__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_talend_react_cmf__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


function getRenderers(fromImports) {
  var renderers = _objectSpread({}, fromImports);

  Object.keys(renderers).forEach(function (key) {
    if (_talend_react_cmf__WEBPACK_IMPORTED_MODULE_0___default.a.component.has(key)) {
      var component = _talend_react_cmf__WEBPACK_IMPORTED_MODULE_0___default.a.component.get(key);

      if (component && renderers[key] && renderers[key] !== component) {
        renderers[key] = component;
      }
    }
  });
  return renderers;
}

/***/ }),

/***/ "./src/translate.js":
/*!**************************!*\
  !*** ./src/translate.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getDefaultT; });
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! i18next */ "i18next");
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(i18next__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ "react-i18next");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_1__);


function getDefaultT() {
  return Object(react_i18next__WEBPACK_IMPORTED_MODULE_1__["getI18n"])().t.bind(Object(react_i18next__WEBPACK_IMPORTED_MODULE_1__["getI18n"])());
}

if (!Object(react_i18next__WEBPACK_IMPORTED_MODULE_1__["getI18n"])()) {
  // eslint-disable-next-line no-console
  console.warn('@talend/react-containers used without i18n host.');
  Object(react_i18next__WEBPACK_IMPORTED_MODULE_1__["setI18n"])(Object(i18next__WEBPACK_IMPORTED_MODULE_0__["createInstance"])({}, function () {}));
}

/***/ }),

/***/ "@talend/react-cmf":
/*!*********************************!*\
  !*** external "TalendReactCmf" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = TalendReactCmf;

/***/ }),

/***/ "@talend/react-cmf-router":
/*!***************************************!*\
  !*** external "TalendReactCmfRouter" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = TalendReactCmfRouter;

/***/ }),

/***/ "@talend/react-components":
/*!****************************************!*\
  !*** external "TalendReactComponents" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = TalendReactComponents;

/***/ }),

/***/ "@talend/react-forms":
/*!***********************************!*\
  !*** external "TalendReactForms" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = TalendReactForms;

/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classNames" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = classNames;

/***/ }),

/***/ "i18next":
/*!**************************!*\
  !*** external "i18next" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = i18next;

/***/ }),

/***/ "immutable":
/*!****************************!*\
  !*** external "Immutable" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = Immutable;

/***/ }),

/***/ "lodash":
/*!********************!*\
  !*** external "_" ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = _;

/***/ }),

/***/ "prop-types":
/*!****************************!*\
  !*** external "PropTypes" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = PropTypes;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),

/***/ "react-bootstrap":
/*!*********************************!*\
  !*** external "ReactBootstrap" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ReactBootstrap;

/***/ }),

/***/ "react-i18next":
/*!*******************************!*\
  !*** external "ReactI18next" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ReactI18next;

/***/ }),

/***/ "react-router":
/*!******************************!*\
  !*** external "ReactRouter" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ReactRouter;

/***/ }),

/***/ "redux-saga":
/*!****************************!*\
  !*** external "ReduxSaga" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ReduxSaga;

/***/ })

/******/ });
});
//# sourceMappingURL=TalendReactContainers.js.map