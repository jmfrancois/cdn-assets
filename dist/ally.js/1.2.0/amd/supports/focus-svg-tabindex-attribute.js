define(['exports', 'module', '../prototype/svgelement.prototype.focus', './detect-focus', './memorize-result'], function (exports, module, _prototypeSvgelementPrototypeFocus, _detectFocus, _memorizeResult) {
  'use strict';

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _detectFocus2 = _interopRequireDefault(_detectFocus);

  var _memorizeResult2 = _interopRequireDefault(_memorizeResult);

  module.exports = (0, _memorizeResult2['default'])(function () {
    return (0, _detectFocus2['default'])({
      name: 'can-focus-svg-tabindex-attribute',
      element: 'div',
      mutate: function mutate(element) {
        element.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">' + '<text tabindex="-1">a</text></svg>';
        return element.querySelector('text');
      }
    });
  });
});
//# sourceMappingURL=focus-svg-tabindex-attribute.js.map