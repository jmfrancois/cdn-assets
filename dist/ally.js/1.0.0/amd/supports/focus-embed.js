define(['exports', 'module', './detect-focus'], function (exports, module, _detectFocus) {
  'use strict';

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _detectFocus2 = _interopRequireDefault(_detectFocus);

  module.exports = (0, _detectFocus2['default'])({
    name: 'can-focus-embed-tabindex',
    // <embed type="video/mp4" src="data:video/mp4;base64,embed-focus-test" width="640" height="480">
    element: 'embed'
  });
});
//# sourceMappingURL=focus-embed.js.map