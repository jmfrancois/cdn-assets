'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _utilPlatform = require('../util/platform');

var _utilPlatform2 = _interopRequireDefault(_utilPlatform);

// Every Environment except IE9 considers SWF objects focusable
var result = !_utilPlatform2['default'].is.IE9;

exports['default'] = function () {
  return result;
};

module.exports = exports['default'];
//# sourceMappingURL=focus-object-swf.js.map