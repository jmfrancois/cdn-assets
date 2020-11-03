define(['exports', 'module', './detect-focus'], function (exports, module, _detectFocus) {
  'use strict';

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _detectFocus2 = _interopRequireDefault(_detectFocus);

  module.exports = (0, _detectFocus2['default'])({
    name: 'can-focus-audio-without-controls',
    element: 'audio',
    mutate: function mutate(element) {
      // invalid media file can trigger warning in console, data-uri to prevent HTTP request
      element.setAttribute('src', 'data:audio/mp3;base64,' + 'audio-focus-test');
    }
  });
});
//# sourceMappingURL=focus-audio-without-controls.js.map