define(['exports', 'module', './detect-focus'], function (exports, module, _detectFocus) {
  'use strict';

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _detectFocus2 = _interopRequireDefault(_detectFocus);

  module.exports = (0, _detectFocus2['default'])({
    name: 'can-focus-summary',
    element: 'details',
    mutate: function mutate(element) {
      element.innerHTML = '<summary>foo</summary><p>content</p>';
      return element.firstElementChild;
    }
  });
});
//# sourceMappingURL=focus-summary.js.map