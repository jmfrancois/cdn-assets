'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _detectFocus = require('./detect-focus');

var _detectFocus2 = _interopRequireDefault(_detectFocus);

exports['default'] = (0, _detectFocus2['default'])({
  name: 'can-focus-audio-without-controls',
  element: 'audio',
  mutate: function mutate(element) {
    // invalid media file can trigger warning in console, data-uri to prevent HTTP request
    element.setAttribute('src', 'data:audio/mp3;base64,' + 'audio-focus-test');
  }
});
module.exports = exports['default'];
//# sourceMappingURL=focus-audio-without-controls.js.map