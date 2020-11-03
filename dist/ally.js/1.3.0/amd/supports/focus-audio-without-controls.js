define(['exports', 'module', './media/mp3'], function (exports, module, _mediaMp3) {
  'use strict';

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _mp3 = _interopRequireDefault(_mediaMp3);

  module.exports = {
    name: 'can-focus-audio-without-controls',
    element: 'audio',
    mutate: function mutate(element) {
      try {
        // invalid media file can trigger warning in console, data-uri to prevent HTTP request
        element.setAttribute('src', _mp3['default']);
      } catch (e) {
        // IE9 may throw "Error: Not implemented"
      }
    }
  };
});
//# sourceMappingURL=focus-audio-without-controls.js.map