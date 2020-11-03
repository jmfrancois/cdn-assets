'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _supportsMemorizeResult = require('../supports/memorize-result');

var _supportsMemorizeResult2 = _interopRequireDefault(_supportsMemorizeResult);

var _supportsFocusRedirectImgUsemap = require('../supports/focus-redirect-img-usemap');

var _supportsFocusRedirectImgUsemap2 = _interopRequireDefault(_supportsFocusRedirectImgUsemap);

var _supportsFocusRedirectLegend = require('../supports/focus-redirect-legend');

var _supportsFocusRedirectLegend2 = _interopRequireDefault(_supportsFocusRedirectLegend);

exports['default'] = (0, _supportsMemorizeResult2['default'])(function () {
  return {
    canFocusRedirectImgUsemap: (0, _supportsFocusRedirectImgUsemap2['default'])(),
    canFocusRedirectLegend: (0, _supportsFocusRedirectLegend2['default'])()
  };
});
module.exports = exports['default'];
//# sourceMappingURL=focus-redirect-target.supports.js.map