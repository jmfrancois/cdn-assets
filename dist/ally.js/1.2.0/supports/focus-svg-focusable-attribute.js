'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

require('../prototype/svgelement.prototype.focus');

var _detectFocus = require('./detect-focus');

var _detectFocus2 = _interopRequireDefault(_detectFocus);

var _memorizeResult = require('./memorize-result');

var _memorizeResult2 = _interopRequireDefault(_memorizeResult);

var _utilPlatform = require('../util/platform');

var _utilPlatform2 = _interopRequireDefault(_utilPlatform);

exports['default'] = (0, _memorizeResult2['default'])(function () {
  return (0, _detectFocus2['default'])({
    name: 'can-focus-svg-focusable-attribute',
    element: 'div',
    mutate: function mutate(element) {
      element.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">' + '<text focusable="true">a</text></svg>';
      return element.querySelector('text');
    },
    validate: function validate(element) {
      var focus = element.querySelector('text');
      if (_utilPlatform2['default'].is.TRIDENT && (!focus.focus || focus.focus._polyfill === 'noop')) {
        // Edge 13 does not allow polyfilling the missing SVGElement.prototype.focus anymore
        return true;
      }

      return document.activeElement === focus;
    }
  });
});
module.exports = exports['default'];
//# sourceMappingURL=focus-svg-focusable-attribute.js.map