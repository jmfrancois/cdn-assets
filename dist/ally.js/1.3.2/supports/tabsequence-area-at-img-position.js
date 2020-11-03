'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _utilPlatform = require('../util/platform');

var _utilPlatform2 = _interopRequireDefault(_utilPlatform);

// https://jsbin.com/vafaba/3/edit?html,js,console,output
var result = _utilPlatform2['default'].is.GECKO || _utilPlatform2['default'].is.TRIDENT || _utilPlatform2['default'].is.EDGE;

exports['default'] = function () {
  return result;
};

module.exports = exports['default'];
//# sourceMappingURL=tabsequence-area-at-img-position.js.map