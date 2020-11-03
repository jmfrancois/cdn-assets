define(['exports', 'module', '../util/platform'], function (exports, module, _utilPlatform) {
  'use strict';

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _platform = _interopRequireDefault(_utilPlatform);

  var result = !_platform['default'].is.WEBKIT;

  module.exports = function () {
    return result;
  };
});
//# sourceMappingURL=focus-in-zero-dimension-object.js.map