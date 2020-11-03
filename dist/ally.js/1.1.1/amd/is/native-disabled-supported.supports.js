define(['exports', 'module', '../supports/memorize-result', '../supports/focus-fieldset-disabled', '../supports/focus-form-disabled'], function (exports, module, _supportsMemorizeResult, _supportsFocusFieldsetDisabled, _supportsFocusFormDisabled) {
  'use strict';

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _memorizeResult = _interopRequireDefault(_supportsMemorizeResult);

  var _canFocusDisabledFieldset = _interopRequireDefault(_supportsFocusFieldsetDisabled);

  var _canFocusDisabledForm = _interopRequireDefault(_supportsFocusFormDisabled);

  module.exports = (0, _memorizeResult['default'])(function () {
    return {
      canFocusDisabledFieldset: (0, _canFocusDisabledFieldset['default'])(),
      canFocusDisabledForm: (0, _canFocusDisabledForm['default'])()
    };
  });
});
//# sourceMappingURL=native-disabled-supported.supports.js.map