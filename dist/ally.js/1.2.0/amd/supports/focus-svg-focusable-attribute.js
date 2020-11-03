define(['exports', 'module', '../prototype/svgelement.prototype.focus', './detect-focus', './memorize-result', '../util/platform'], function (exports, module, _prototypeSvgelementPrototypeFocus, _detectFocus, _memorizeResult, _utilPlatform) {
  'use strict';

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _detectFocus2 = _interopRequireDefault(_detectFocus);

  var _memorizeResult2 = _interopRequireDefault(_memorizeResult);

  var _platform = _interopRequireDefault(_utilPlatform);

  module.exports = (0, _memorizeResult2['default'])(function () {
    return (0, _detectFocus2['default'])({
      name: 'can-focus-svg-focusable-attribute',
      element: 'div',
      mutate: function mutate(element) {
        element.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">' + '<text focusable="true">a</text></svg>';
        return element.querySelector('text');
      },
      validate: function validate(element) {
        var focus = element.querySelector('text');
        if (_platform['default'].is.TRIDENT && (!focus.focus || focus.focus._polyfill === 'noop')) {
          // Edge 13 does not allow polyfilling the missing SVGElement.prototype.focus anymore
          return true;
        }

        return document.activeElement === focus;
      }
    });
  });
});
//# sourceMappingURL=focus-svg-focusable-attribute.js.map