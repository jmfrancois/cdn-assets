define(['exports', 'module', '../util/platform'], function (exports, module, _utilPlatform) {
  'use strict';

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _platform = _interopRequireDefault(_utilPlatform);

  // Every Environment except IE9 considers SWF objects focusable
  var result = !_platform['default'].is.IE9;

  module.exports = function () {
    return result;
  };
});
//# sourceMappingURL=focus-object-swf.js.map