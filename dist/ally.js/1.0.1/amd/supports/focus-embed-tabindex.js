define(['exports', 'module', './detect-focus'], function (exports, module, _detectFocus) {
  'use strict';

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _detectFocus2 = _interopRequireDefault(_detectFocus);

  module.exports = (0, _detectFocus2['default'])({
    name: 'can-focus-embed-tabindex',
    // <embed type="video/mp4" src="data:video/mp4;base64,embed-tabindex-focus-test" width="640" height="480" tabindex="-1">
    element: 'embed',
    mutate: function mutate(element) {
      element.setAttribute('tabindex', '-1');
    }
  });
});
//# sourceMappingURL=focus-embed-tabindex.js.map