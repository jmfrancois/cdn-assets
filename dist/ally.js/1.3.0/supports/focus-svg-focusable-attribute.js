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
    element.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">' + '<text focusable="true">a</text></svg>';
    return element.querySelector('text');
  },
  validate: function validate(element, _document) {
    var focus = element.querySelector('text');
    if (_utilPlatform2['default'].is.TRIDENT) {
      // Edge 13 does not allow polyfilling the missing SVGElement.prototype.focus anymore
      return true;
    }

    return _document.activeElement === focus;
  }
};
module.exports = exports['default'];
//# sourceMappingURL=focus-svg-focusable-attribute.js.map