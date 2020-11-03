define(['exports', 'module', '../util/platform'], function (exports, module, _utilPlatform) {
  'use strict';

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _platform = _interopRequireDefault(_utilPlatform);

  // https://jsbin.com/vafaba/3/edit?html,js,console,output
  var result = _platform['default'].is.GECKO || _platform['default'].is.TRIDENT || _platform['default'].is.EDGE;

  module.exports = function () {
    return result;
  };
});
//# sourceMappingURL=tabsequence-area-at-img-position.js.map