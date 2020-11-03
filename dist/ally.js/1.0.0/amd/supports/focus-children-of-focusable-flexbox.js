define(['exports', 'module', './detect-focus'], function (exports, module, _detectFocus) {
  'use strict';

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _detectFocus2 = _interopRequireDefault(_detectFocus);

  // Children of focusable elements with display:flex are focusable in IE10-11
  module.exports = (0, _detectFocus2['default'])({
    name: 'can-focus-children-of-focusable-flexbox',
    element: 'div',
    mutate: function mutate(element) {
      element.setAttribute('tabindex', '-1');
      element.setAttribute('style', 'display: -ms-flexbox; display: flex;');
      element.innerHTML = '<span style="display: block;">hello</span>';
      return element.querySelector('span');
    }
  });
});
//# sourceMappingURL=focus-children-of-focusable-flexbox.js.map