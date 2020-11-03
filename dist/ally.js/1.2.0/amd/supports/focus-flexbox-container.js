define(['exports', 'module', './detect-focus', './memorize-result'], function (exports, module, _detectFocus, _memorizeResult) {
  'use strict';

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _detectFocus2 = _interopRequireDefault(_detectFocus);

  var _memorizeResult2 = _interopRequireDefault(_memorizeResult);

  // elements with display:flex are focusable in IE10-11
  module.exports = (0, _memorizeResult2['default'])(function () {
    return (0, _detectFocus2['default'])({
      name: 'can-focus-flexbox-container',
      element: 'span',
      mutate: function mutate(element) {
        element.setAttribute('style', 'display: -webkit-flex; display: -ms-flexbox; display: flex;');
        element.innerHTML = '<span style="display: block;">hello</span>';
      }
    });
  });
});
//# sourceMappingURL=focus-flexbox-container.js.map