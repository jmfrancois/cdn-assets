define(['exports', 'module', './detect-focus'], function (exports, module, _detectFocus) {
  'use strict';

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _detectFocus2 = _interopRequireDefault(_detectFocus);

  // https://github.com/medialize/ally.js/issues/21
  module.exports = (0, _detectFocus2['default'])({
    name: 'can-focus-scroll-body',
    element: 'div',
    mutate: function mutate(element) {
      element.setAttribute('style', 'width: 100px; height: 50px; overflow: auto;');
      element.innerHTML = '<div style="width: 500px; height: 40px;">scrollable content</div>';
      return element.querySelector('div');
    }
  });
});
//# sourceMappingURL=focus-scroll-body.js.map