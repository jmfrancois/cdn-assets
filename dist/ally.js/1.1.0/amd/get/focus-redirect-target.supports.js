define(['exports', 'module', '../supports/memorize-result', '../supports/focus-redirect-img-usemap', '../supports/focus-redirect-legend'], function (exports, module, _supportsMemorizeResult, _supportsFocusRedirectImgUsemap, _supportsFocusRedirectLegend) {
  'use strict';

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _memorizeResult = _interopRequireDefault(_supportsMemorizeResult);

  var _canFocusRedirectImgUsemap = _interopRequireDefault(_supportsFocusRedirectImgUsemap);

  var _canFocusRedirectLegend = _interopRequireDefault(_supportsFocusRedirectLegend);

  module.exports = (0, _memorizeResult['default'])(function () {
    return {
      canFocusRedirectImgUsemap: (0, _canFocusRedirectImgUsemap['default'])(),
      canFocusRedirectLegend: (0, _canFocusRedirectLegend['default'])()
    };
  });
});
//# sourceMappingURL=focus-redirect-target.supports.js.map