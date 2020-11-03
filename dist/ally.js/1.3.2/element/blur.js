'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _isActiveElement = require('../is/active-element');

var _isActiveElement2 = _interopRequireDefault(_isActiveElement);

var _utilContextToElement = require('../util/context-to-element');

var _utilContextToElement2 = _interopRequireDefault(_utilContextToElement);

var _utilGetWindow = require('../util/get-window');

var _utilGetWindow2 = _interopRequireDefault(_utilGetWindow);

exports['default'] = function (context) {
  var element = (0, _utilContextToElement2['default'])({
    label: 'element/blur',
    context: context
  });

  if (!(0, _isActiveElement2['default'])(element)) {
    return null;
  }

  var nodeName = element.nodeName.toLowerCase();
  if (nodeName === 'body') {
    // prevent the browser window from losing focus in IE9
    // according to https://bugs.jqueryui.com/ticket/9420
    return null;
  }

  if (element.blur) {
    element.blur();
    return document.activeElement;
  }

  var _window = (0, _utilGetWindow2['default'])(element);

  try {
    // The element itself does not have a blur method.
    // This is true for SVG elements in Firefox and IE,
    // as well as MathML elements in every browser.
    // IE9 - 11 will let us abuse HTMLElement's blur method,
    // Firefox and Edge will throw an error.
    _window.HTMLElement.prototype.blur.call(element);
    return document.activeElement;
  } catch (e) {
    // we may want to try focusing <body> before giving up.
    // not sure how this works for an SVG document, though.
    return null;
  }
};

module.exports = exports['default'];
//# sourceMappingURL=blur.js.map