'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _mediaMp3 = require('./media/mp3');

var _mediaMp32 = _interopRequireDefault(_mediaMp3);

exports['default'] = {
  name: 'can-focus-audio-without-controls',
  element: 'audio',
  mutate: function mutate(element) {
    try {
      // invalid media file can trigger warning in console, data-uri to prevent HTTP request
      element.setAttribute('src', _mediaMp32['default']);
    } catch (e) {
      // IE9 may throw "Error: Not implemented"
    }
  }
};
module.exports = exports['default'];
//# sourceMappingURL=focus-audio-without-controls.js.map