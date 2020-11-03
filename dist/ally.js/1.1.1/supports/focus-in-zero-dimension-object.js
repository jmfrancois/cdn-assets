'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _utilPlatform = require('../util/platform');

var _utilPlatform2 = _interopRequireDefault(_utilPlatform);

var result = !_utilPlatform2['default'].is.WEBKIT;

exports['default'] = function () {
  return result;
};

module.exports = exports['default'];
//# sourceMappingURL=focus-in-zero-dimension-object.js.map