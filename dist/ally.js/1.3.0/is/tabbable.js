
// determine if an element can be focused by keyboard (i.e. is part of the document's sequential focus navigation order)

'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _visible = require('./visible');

var _visible2 = _interopRequireDefault(_visible);

var _utilContextToElement = require('../util/context-to-element');

var _utilContextToElement2 = _interopRequireDefault(_utilContextToElement);

var _utilTabindexValue = require('../util/tabindex-value');

var _utilTabindexValue2 = _interopRequireDefault(_utilTabindexValue);

var _focusRelevant = require('./focus-relevant');

var _focusRelevant2 = _interopRequireDefault(_focusRelevant);

var _utilGetFrameElement = require('../util/get-frame-element');

var _utilGetFrameElement2 = _interopRequireDefault(_utilGetFrameElement);

var _utilPlatform = require('../util/platform');

var _utilPlatform2 = _interopRequireDefault(_utilPlatform);

var _utilImageMap = require('../util/image-map');

var _isUtil = require('./is.util');

// Internet Explorer 11 considers fieldset, table, td focusable, but not tabbable
// Internet Explorer 11 considers body to have [tabindex=0], but does not allow tabbing to it
var focusableElementsPattern = /^(fieldset|table|td|body)$/;

function isTabbableRules() {
  var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  var context = _ref.context;
  var _ref$except = _ref.except;
  var except = _ref$except === undefined ? {
    flexbox: false,
    scrollable: false,
    shadow: false,
    visible: false,
    onlyTabbable: false
  } : _ref$except;

  var element = (0, _utilContextToElement2['default'])({
    label: 'is/tabbable',
    resolveDocument: true,
    context: context
  });

  if (_utilPlatform2['default'].is.BLINK && _utilPlatform2['default'].is.ANDROID && _utilPlatform2['default'].majorVersion > 42) {
    // External keyboard support worked fine in CHrome 42, but stopped working in Chrome 45.
    // The on-screen keyboard does not provide a way to focus the next input element (like iOS does).
    // That leaves us with no option to advance focus by keyboard, ergo nothing is tabbable (keyboard focusable).
    return false;
  }

  var frameElement = (0, _utilGetFrameElement2['default'])(element);
  if (frameElement) {
    if (_utilPlatform2['default'].is.WEBKIT && _utilPlatform2['default'].is.IOS && _utilPlatform2['default'].majorVersion < 10) {
      // iOS only does not consider anything from another browsing context keyboard focusable
      return false;
    }

    // iframe[tabindex="-1"] and object[tabindex="-1"] inherit the
    // tabbable demotion onto elements of their browsing contexts
    if ((0, _utilTabindexValue2['default'])(frameElement) < 0) {
      return false;
    }

    if (!except.visible && (_utilPlatform2['default'].is.BLINK || _utilPlatform2['default'].is.WEBKIT) && !(0, _visible2['default'])(frameElement)) {
      // Blink and WebKit consider elements in hidden browsing contexts focusable, but not tabbable
      return false;
    }

    // Webkit and Blink don't consider anything in <object> tabbable
    var frameNodeName = frameElement.nodeName.toLowerCase();
    if (frameNodeName === 'object' && (_utilPlatform2['default'].is.BLINK || _utilPlatform2['default'].is.WEBKIT)) {
      return false;
    }
  }

  var nodeName = element.nodeName.toLowerCase();
  var _tabindex = (0, _utilTabindexValue2['default'])(element);
  var tabindex = _tabindex === null ? null : _tabindex >= 0;
  var hasTabbableTabindexOrNone = tabindex !== false;
  var hasTabbableTabindex = _tabindex !== null && _tabindex >= 0;

  // NOTE: Firefox 31 considers [contenteditable] to have [tabindex=-1], but allows tabbing to it
  // fixed in Firefox 40 the latest - https://bugzilla.mozilla.org/show_bug.cgi?id=1185657
  if (element.hasAttribute('contenteditable')) {
    // tabbing can still be disabled by explicitly providing [tabindex="-1"]
    return hasTabbableTabindexOrNone;
  }

  if (focusableElementsPattern.test(nodeName) && tabindex !== true) {
    return false;
  }

  // in Trident and Gecko SVGElement does not know about the tabIndex property
  if (element.tabIndex === undefined) {
    return Boolean(except.onlyTabbable);
  }

  if (nodeName === 'audio') {
    if (!element.hasAttribute('controls')) {
      // In Internet Explorer the <audio> element is focusable, but not tabbable, and tabIndex property is wrong
      return false;
    } else if (_utilPlatform2['default'].is.BLINK) {
      // In Chrome <audio controls tabindex="-1"> remains keyboard focusable
      return true;
    }
  }

  if (nodeName === 'video') {
    if (!element.hasAttribute('controls')) {
      if (_utilPlatform2['default'].is.TRIDENT) {
        // In Internet Explorer the <video> element is focusable, but not tabbable, and tabIndex property is wrong
        return false;
      }
    } else if (_utilPlatform2['default'].is.BLINK || _utilPlatform2['default'].is.GECKO) {
      // In Chrome and Firefox <video controls tabindex="-1"> remains keyboard focusable
      return true;
    }
  }

  if (nodeName === 'object') {
    if (_utilPlatform2['default'].is.BLINK || _utilPlatform2['default'].is.WEBKIT) {
      // In all Blink and WebKit based browsers <embed> and <object> are never keyboard focusable, even with tabindex="0" set
      return false;
    }
  }

  if (nodeName === 'iframe') {
    // In Internet Explorer all iframes are only focusable
    // In WebKit, Blink and Gecko iframes may be tabbable depending on content.
    // Since we can't reliably investigate iframe documents because of the
    // SameOriginPolicy, we're declaring everything only focusable.
    return false;
  }

  if (_utilPlatform2['default'].is.WEBKIT && _utilPlatform2['default'].is.IOS) {
    // iOS only considers a hand full of elements tabbable (keyboard focusable)
    // this holds true even with external keyboards
    var potentiallyTabbable = nodeName === 'input' && element.type === 'text' || element.type === 'password' || nodeName === 'select' || nodeName === 'textarea' || element.hasAttribute('contenteditable');

    if (!potentiallyTabbable) {
      var style = window.getComputedStyle(element, null);
      potentiallyTabbable = (0, _isUtil.isUserModifyWritable)(style);
    }

    if (!potentiallyTabbable) {
      return false;
    }
  }

  if (!except.scrollable && _utilPlatform2['default'].is.GECKO) {
    // Firefox considers scrollable containers keyboard focusable,
    // even though their tabIndex property is -1
    var style = window.getComputedStyle(element, null);
    if ((0, _isUtil.hasCssOverflowScroll)(style)) {
      return hasTabbableTabindexOrNone;
    }
  }

  if (_utilPlatform2['default'].is.TRIDENT) {
    // IE degrades <area> to script focusable, if the image
    // using the <map> has been given tabindex="-1"
    if (nodeName === 'area') {
      var img = (0, _utilImageMap.getImageOfArea)(element);
      if (img && (0, _utilTabindexValue2['default'])(img) < 0) {
        return false;
      }
    }

    var style = window.getComputedStyle(element, null);
    if ((0, _isUtil.isUserModifyWritable)(style)) {
      // prevent being swallowed by the overzealous isScrollableContainer() below
      return element.tabIndex >= 0;
    }

    if (!except.flexbox && (0, _isUtil.hasCssDisplayFlex)(style)) {
      if (_tabindex !== null) {
        return hasTabbableTabindex;
      }

      return isFocusRelevantWithoutFlexbox(element) && isTabbableWithoutFlexbox(element);
    }

    // IE considers scrollable containers script focusable only,
    // even though their tabIndex property is 0
    if ((0, _isUtil.isScrollableContainer)(element, nodeName)) {
      return false;
    }

    var _parent = element.parentElement;
    if (_parent) {
      var parentNodeName = _parent.nodeName.toLowerCase();
      var parentStyle = window.getComputedStyle(_parent, null);
      // IE considers scrollable bodies script focusable only,
      if ((0, _isUtil.isScrollableContainer)(_parent, nodeName, parentNodeName, parentStyle)) {
        return false;
      }

      // Children of focusable elements with display:flex are focusable in IE10-11,
      // even though their tabIndex property suggests otherwise
      if ((0, _isUtil.hasCssDisplayFlex)(parentStyle)) {
        // value of tabindex takes precedence
        return hasTabbableTabindex;
      }
    }
  }

  // http://www.w3.org/WAI/PF/aria-practices/#focus_tabindex
  return element.tabIndex >= 0;
}

// bind exceptions to an iterator callback
isTabbableRules.except = function () {
  var except = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  var isTabbable = function isTabbable(context) {
    return isTabbableRules({
      context: context,
      except: except
    });
  };

  isTabbable.rules = isTabbableRules;
  return isTabbable;
};

var isFocusRelevantWithoutFlexbox = _focusRelevant2['default'].rules.except({ flexbox: true });
var isTabbableWithoutFlexbox = isTabbableRules.except({ flexbox: true });

// provide isTabbable(context) as default iterator callback
var isTabbable = isTabbableRules.except({});
exports['default'] = isTabbable;
module.exports = exports['default'];
//# sourceMappingURL=tabbable.js.map