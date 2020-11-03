define(['exports', 'module', '../is/active-element', '../util/context-to-element', '../util/get-window'], function (exports, module, _isActiveElement, _utilContextToElement, _utilGetWindow) {
  'use strict';

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _isActiveElement2 = _interopRequireDefault(_isActiveElement);

  var _contextToElement = _interopRequireDefault(_utilContextToElement);

  var _getWindow = _interopRequireDefault(_utilGetWindow);

  module.exports = function (context) {
    var element = (0, _contextToElement['default'])({
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

    var _window = (0, _getWindow['default'])(element);

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
});
//# sourceMappingURL=blur.js.map