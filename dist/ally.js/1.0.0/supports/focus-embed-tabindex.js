'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _detectFocus = require('./detect-focus');

var _detectFocus2 = _interopRequireDefault(_detectFocus);

exports['default'] = (0, _detectFocus2['default'])({
  name: 'can-focus-embed-tabindex',
  // <embed type="video/mp4" src="data:video/mp4;base64,embed-tabindex-focus-test" width="640" height="480" tabindex="-1">
  element: 'embed',
  mutate: function mutate(element) {
    element.setAttribute('tabindex', '-1');
  }
});
module.exports = exports['default'];
//# sourceMappingURL=focus-embed-tabindex.js.map