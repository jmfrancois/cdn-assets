'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _supportsMemorizeResult = require('../supports/memorize-result');

var _supportsMemorizeResult2 = _interopRequireDefault(_supportsMemorizeResult);

var _supportsFocusFormDisabled = require('../supports/focus-form-disabled');

var _supportsFocusFormDisabled2 = _interopRequireDefault(_supportsFocusFormDisabled);

exports['default'] = (0, _supportsMemorizeResult2['default'])(function () {
  return {
    canFocusDisabledForm: (0, _supportsFocusFormDisabled2['default'])()
  };
});
module.exports = exports['default'];
//# sourceMappingURL=disabled.supports.js.map