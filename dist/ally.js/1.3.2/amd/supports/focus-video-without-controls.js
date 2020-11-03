define(['exports', 'module', './media/mp4'], function (exports, module, _mediaMp4) {
  'use strict';

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _mp4 = _interopRequireDefault(_mediaMp4);

  module.exports = {
    element: 'video',
    mutate: function mutate(element) {
      try {
        // invalid media file can trigger warning in console, data-uri to prevent HTTP request
        element.setAttribute('src', _mp4['default']);
      } catch (e) {
        // IE9 may throw "Error: Not implemented"
      }
    }
  };
});
//# sourceMappingURL=focus-video-without-controls.js.map