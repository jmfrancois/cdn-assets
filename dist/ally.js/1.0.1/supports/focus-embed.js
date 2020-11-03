'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _detectFocus = require('./detect-focus');

var _detectFocus2 = _interopRequireDefault(_detectFocus);

exports['default'] = (0, _detectFocus2['default'])({
  name: 'can-focus-embed-tabindex',
  // <embed type="video/mp4" src="data:video/mp4;base64,embed-focus-test" width="640" height="480">
  element: 'embed'
});
module.exports = exports['default'];
//# sourceMappingURL=focus-embed.js.map