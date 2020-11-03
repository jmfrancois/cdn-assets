define(['exports', 'module', './detect-focus'], function (exports, module, _detectFocus) {
  'use strict';

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _detectFocus2 = _interopRequireDefault(_detectFocus);

  // only Trident and Edge are able to focus a <label tabindex="-1">,
  // as all other browsers seem hardwired to forward focus to the target input, if possible
  module.exports = (0, _detectFocus2['default'])({
    name: 'can-focus-label-tabindex',
    element: 'label',
    mutate: function mutate(element) {
      element.setAttribute('tabindex', '-1');
    }
  });
});
//# sourceMappingURL=focus-label-tabindex.js.map