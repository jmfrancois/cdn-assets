'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _visible = require('./visible');

var _visible2 = _interopRequireDefault(_visible);

var _utilContextToElement = require('../util/context-to-element');

var _utilContextToElement2 = _interopRequireDefault(_utilContextToElement);

var _utilGetFrameElement = require('../util/get-frame-element');

var _utilGetFrameElement2 = _interopRequireDefault(_utilGetFrameElement);

var _utilGetWindow = require('../util/get-window');

var _utilGetWindow2 = _interopRequireDefault(_utilGetWindow);

var _utilTabindexValue = require('../util/tabindex-value');

var _utilTabindexValue2 = _interopRequireDefault(_utilTabindexValue);

var _utilPlatform = require('../util/platform');

var _utilPlatform2 = _interopRequireDefault(_utilPlatform);

function isOnlyTabbableRules() {
  var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  var context = _ref.context;
  var _ref$except = _ref.except;
  var except = _ref$except === undefined ? {
    onlyFocusableBrowsingContext: false,
    visible: false
  } : _ref$except;

  var element = (0, _utilContextToElement2['default'])({
    label: 'is/only-tabbable',
    resolveDocument: true,
    context: context
  });

  if (!except.visible && !(0, _visible2['default'])(element)) {
    return false;
  }

  if (!except.onlyFocusableBrowsingContext && (_utilPlatform2['default'].is.GECKO || _utilPlatform2['default'].is.TRIDENT)) {
    var _frameElement = (0, _utilGetFrameElement2['default'])(element);
    if (_frameElement) {
      if ((0, _utilTabindexValue2['default'])(_frameElement) < 0) {
        // iframe[tabindex="-1"] and object[tabindex="-1"] inherit the
        // tabbable demotion onto elements of their browsing contexts
        return false;
      }
    }
  }

  var nodeName = element.nodeName.toLowerCase();
  var tabindex = (0, _utilTabindexValue2['default'])(element);

  if (nodeName === 'label' && _utilPlatform2['default'].is.GECKO) {
    // Firefox cannot focus, but tab to: label[tabindex=0]
    return tabindex !== null && tabindex >= 0;
  }

  if (nodeName === 'svg' && _utilPlatform2['default'].is.TRIDENT) {
    return element.getAttribute('focusable') !== 'false';
  }

  var _window = (0, _utilGetWindow2['default'])(element);
  if (element instanceof _window.SVGElement) {
    if (nodeName === 'a' && element.hasAttribute('xlink:href')) {
      // any focusable child of <svg> cannot be focused, but tabbed to
      if (_utilPlatform2['default'].is.GECKO) {
        return true;
      }
      if (_utilPlatform2['default'].is.TRIDENT) {
        return element.getAttribute('focusable') !== 'false';
      }
    }
    if (_utilPlatform2['default'].is.TRIDENT) {
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
exports['default'] = isOnlyTabbable;
module.exports = exports['default'];
//# sourceMappingURL=only-tabbable.js.map