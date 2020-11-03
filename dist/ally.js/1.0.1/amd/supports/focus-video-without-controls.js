define(['exports', 'module', './detect-focus'], function (exports, module, _detectFocus) {
  'use strict';

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _detectFocus2 = _interopRequireDefault(_detectFocus);

  module.exports = (0, _detectFocus2['default'])({
    name: 'can-focus-video-without-controls',
    element: 'video',
    mutate: function mutate(element) {
      // invalid media file can trigger warning in console, data-uri to prevent HTTP request
      element.setAttribute('src', 'data:video/mp4;base64,' + 'video-focus-test');
    }
  });
});
//# sourceMappingURL=focus-video-without-controls.js.map