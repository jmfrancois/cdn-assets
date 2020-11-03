define(['exports', 'module', '../util/platform'], function (exports, module, _utilPlatform) {
  'use strict';

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _platform = _interopRequireDefault(_utilPlatform);

  module.exports = {
    element: 'div',
    mutate: function mutate(element) {
      element.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"></svg>';
      return element.firstChild;
    },
    validate: function validate(element, _document) {
      var focus = element.firstChild;
      if (_platform['default'].is.TRIDENT) {
        // Edge 13 does not allow polyfilling the missing SVGElement.prototype.focus anymore
        return true;
      }

      return _document.activeElement === focus;
    }
  };
});
//# sourceMappingURL=focus-svg.js.map