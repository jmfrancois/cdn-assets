define(['exports', 'module', '../supports/memorize-result', '../supports/focus-form-disabled'], function (exports, module, _supportsMemorizeResult, _supportsFocusFormDisabled) {
  'use strict';

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _memorizeResult = _interopRequireDefault(_supportsMemorizeResult);

  var _canFocusDisabledForm = _interopRequireDefault(_supportsFocusFormDisabled);

  module.exports = (0, _memorizeResult['default'])(function () {
    return {
      canFocusDisabledForm: (0, _canFocusDisabledForm['default'])()
    };
  });
});
//# sourceMappingURL=disabled.supports.js.map