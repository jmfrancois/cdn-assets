define(['exports', 'module', './visible', '../util/context-to-element', '../util/get-frame-element', '../util/get-window', '../util/tabindex-value', '../util/platform'], function (exports, module, _visible, _utilContextToElement, _utilGetFrameElement, _utilGetWindow, _utilTabindexValue, _utilPlatform) {
  'use strict';

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _isVisible = _interopRequireDefault(_visible);

  var _contextToElement = _interopRequireDefault(_utilContextToElement);

  var _getFrameElement = _interopRequireDefault(_utilGetFrameElement);

  var _getWindow = _interopRequireDefault(_utilGetWindow);

  var _tabindexValue = _interopRequireDefault(_utilTabindexValue);

  var _platform = _interopRequireDefault(_utilPlatform);

  function isOnlyTabbableRules() {
    var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    var context = _ref.context;
    var _ref$except = _ref.except;
    var except = _ref$except === undefined ? {
      onlyFocusableBrowsingContext: false,
      visible: false
    } : _ref$except;

    var element = (0, _contextToElement['default'])({
      label: 'is/only-tabbable',
      resolveDocument: true,
      context: context
    });

    if (!except.visible && !(0, _isVisible['default'])(element)) {
      return false;
    }

    if (!except.onlyFocusableBrowsingContext && (_platform['default'].is.GECKO || _platform['default'].is.TRIDENT)) {
      var _frameElement = (0, _getFrameElement['default'])(element);
      if (_frameElement) {
        if ((0, _tabindexValue['default'])(_frameElement) < 0) {
          // iframe[tabindex="-1"] and object[tabindex="-1"] inherit the
          // tabbable demotion onto elements of their browsing contexts
          return false;
        }
      }
    }

    var nodeName = element.nodeName.toLowerCase();
    var tabindex = (0, _tabindexValue['default'])(element);

    if (nodeName === 'label' && _platform['default'].is.GECKO) {
      // Firefox cannot focus, but tab to: label[tabindex=0]
      return tabindex !== null && tabindex >= 0;
    }

    if (nodeName === 'svg' && _platform['default'].is.TRIDENT) {
      return element.getAttribute('focusable') !== 'false';
    }

    var _window = (0, _getWindow['default'])(element);
    if (element instanceof _window.SVGElement) {
      if (nodeName === 'a' && element.hasAttribute('xlink:href')) {
        // any focusable child of <svg> cannot be focused, but tabbed to
        if (_platform['default'].is.GECKO) {
          return true;
        }
        if (_platform['default'].is.TRIDENT) {
          return element.getAttribute('focusable') !== 'false';
        }
      }
      if (_platform['default'].is.TRIDENT) {
        return element.getAttribute('focusable') === 'true';
      }
    }

    return false;
  }

  // bind exceptions to an iterator callback
  isOnlyTabbableRules.except = function () {
    var except = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    var isOnlyTabbable = function isOnlyTabbable(context) {
      return isOnlyTabbableRules({
        context: context,
        except: except
      });
    };

    isOnlyTabbable.rules = isOnlyTabbableRules;
    return isOnlyTabbable;
  };

  // provide isOnlyTabbable(context) as default iterator callback
  var isOnlyTabbable = isOnlyTabbableRules.except({});
  module.exports = isOnlyTabbable;
});
//# sourceMappingURL=only-tabbable.js.map