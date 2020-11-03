'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _mediaMp4 = require('./media/mp4');

var _mediaMp42 = _interopRequireDefault(_mediaMp4);

exports['default'] = {
  element: 'video',
  mutate: function mutate(element) {
    try {
      // invalid media file can trigger warning in console, data-uri to prevent HTTP request
      element.setAttribute('src', _mediaMp42['default']);
    } catch (e) {
      // IE9 may throw "Error: Not implemented"
    }
  }
};
module.exports = exports['default'];
//# sourceMappingURL=focus-video-without-controls.js.map