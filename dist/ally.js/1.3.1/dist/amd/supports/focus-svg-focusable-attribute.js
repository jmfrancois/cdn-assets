define(['exports', 'module', '../util/platform'], function (exports, module, _utilPlatform) {
  'use strict';

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _platform = _interopRequireDefault(_utilPlatform);

  module.exports = {
    element: 'div',
    mutate: function mutate(element) {
      element.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">' + '<text focusable="true">a</text></svg>';
      return element.querySelector('text');
    },
    validate: function validate(element, _document) {
      var focus = element.querySelector('text');
      if (_platform['default'].is.TRIDENT || _platform['default'].is.EDGE) {
        // Edge 13 does not allow polyfilling the missing SVGElement.prototype.focus anymore
        return true;
      }

      return _document.activeElement === focus;
    }
  };
});
//# sourceMappingURL=focus-svg-focusable-attribute.js.map