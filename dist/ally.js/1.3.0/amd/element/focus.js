define(['exports', 'module', '../get/focus-target', '../is/active-element', '../is/focusable', '../util/context-to-element', '../util/get-window', '../util/reset-scrolling'], function (exports, module, _getFocusTarget, _isActiveElement, _isFocusable, _utilContextToElement, _utilGetWindow, _utilResetScrolling) {
  // wrapper for HTMLElement.prototype.focus

  'use strict';

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _getFocusTarget2 = _interopRequireDefault(_getFocusTarget);

  var _isActiveElement2 = _interopRequireDefault(_isActiveElement);

  var _isFocusable2 = _interopRequireDefault(_isFocusable);

  var _contextToElement = _interopRequireDefault(_utilContextToElement);

  var _getWindow = _interopRequireDefault(_utilGetWindow);

  var _resetScrolling = _interopRequireDefault(_utilResetScrolling);

  function focus(element) {
    if (element.focus) {
      element.focus();
      return (0, _isActiveElement2['default'])(element) ? element : null;
    }

    var _window = (0, _getWindow['default'])(element);

    try {
      // The element itself does not have a focus method.
      // This is true for SVG elements in Firefox and IE,
      // as well as MathML elements in every browser.
      // IE9 - 11 will let us abuse HTMLElement's focus method,
      // Firefox and Edge will throw an error.
      _window.HTMLElement.prototype.focus.call(element);
      return element;
    } catch (e) {
      return null;
    }
  }

  var except = {
    // exclude elements affected by the IE flexbox bug
    flexbox: true,
    // exclude overflowing elements that are not intentionally
    // made focusable by adding a tabindex attribute
    scrollable: true,
    // include elements that don't have a focus() method
    onlyTabbable: true
  };

  module.exports = function (context) {
    var _ref = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    var defaultToAncestor = _ref.defaultToAncestor;
    var undoScrolling = _ref.undoScrolling;

    var element = (0, _contextToElement['default'])({
      label: 'element/focus',
      context: context
    });

    var targetIsFocusable = _isFocusable2['default'].rules({
      context: element,
      except: except
    });

    if (!defaultToAncestor && !targetIsFocusable) {
      return null;
    }

    var target = (0, _getFocusTarget2['default'])({
      context: element,
      except: except
    });

    if (!target) {
      return null;
    }

    if ((0, _isActiveElement2['default'])(target)) {
      return target;
    }

    var _undoScrolling = undefined;
    if (undoScrolling) {
      _undoScrolling = (0, _resetScrolling['default'])(target);
    }

    var result = focus(target);

    _undoScrolling && _undoScrolling();

    return result;
  };
});
//# sourceMappingURL=focus.js.map