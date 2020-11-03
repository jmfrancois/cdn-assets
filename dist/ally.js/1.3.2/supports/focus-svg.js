'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _utilPlatform = require('../util/platform');

var _utilPlatform2 = _interopRequireDefault(_utilPlatform);

exports['default'] = {
  element: 'div',
  mutate: function mutate(element) {
    element.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"></svg>';
    return element.firstChild;
  },
  validate: function validate(element, _document) {
    var focus = element.firstChild;
    if (_utilPlatform2['default'].is.TRIDENT || _utilPlatform2['default'].is.EDGE) {
      // Edge 13 does not allow polyfilling the missing SVGElement.prototype.focus anymore
      return true;
    }

    return _document.activeElement === focus;
  }
};
module.exports = exports['default'];
//# sourceMappingURL=focus-svg.js.map