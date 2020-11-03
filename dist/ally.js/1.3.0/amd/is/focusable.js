define(['exports', 'module', './focus-relevant', './valid-area', './visible', './disabled', './only-tabbable', '../util/context-to-element', '../util/get-frame-element', '../util/tabindex-value', '../supports/supports'], function (exports, module, _focusRelevant, _validArea, _visible, _disabled, _onlyTabbable, _utilContextToElement, _utilGetFrameElement, _utilTabindexValue, _supportsSupports) {
  // determine if an element can be focused

  // http://www.w3.org/TR/html5/editing.html#focus-management

  // NOTE: The following known issues exist:
  //   Gecko: `svg a[xlink|href]` is not identified as focusable (because SVGElement.prototype.focus is missing)
  //   Blink, WebKit: SVGElements that have been made focusable by adding a focus event listener are not identified as focusable

  'use strict';

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _isFocusRelevant = _interopRequireDefault(_focusRelevant);

  var _isValidArea = _interopRequireDefault(_validArea);

  var _isVisible = _interopRequireDefault(_visible);

  var _isDisabled = _interopRequireDefault(_disabled);

  var _isOnlyTabbable2 = _interopRequireDefault(_onlyTabbable);

  var _contextToElement = _interopRequireDefault(_utilContextToElement);

  var _getFrameElement = _interopRequireDefault(_utilGetFrameElement);

  var _tabindexValue = _interopRequireDefault(_utilTabindexValue);

  var _supports2 = _interopRequireDefault(_supportsSupports);

  var supports = undefined;

  function isOnlyFocusRelevant(element) {
    var nodeName = element.nodeName.toLowerCase();
    if (nodeName === 'embed' || nodeName === 'keygen') {
      // embed is considered focus-relevant but not focusable
      // see https://github.com/medialize/ally.js/issues/82
      return true;
    }

    var _tabindex = (0, _tabindexValue['default'])(element);
    if (element.shadowRoot && _tabindex === null) {
      // ShadowDOM host elements *may* receive focus
      // even though they are not considered focuable
      return true;
    }

    if (nodeName === 'label') {
      // <label tabindex="0"> is only tabbable in Firefox, not script-focusable
      // there's no way to make an element focusable other than by adding a tabindex,
      // and focus behavior of the label element seems hard-wired to ignore tabindex
      // in some browsers (like Gecko, Blink and WebKit)
      return !supports.focusLabelTabindex || _tabindex === null;
    }

    if (nodeName === 'legend') {
      return _tabindex === null;
    }

    if (supports.focusSvgFocusableAttribute && (element.ownerSVGElement || nodeName === 'svg')) {
      // Internet Explorer understands the focusable attribute introduced in SVG Tiny 1.2
      var focusableAttribute = element.getAttribute('focusable');
      return focusableAttribute && focusableAttribute === 'false';
    }

    if (nodeName === 'img' && element.hasAttribute('usemap')) {
      // Gecko, Trident and Edge do not allow an image with an image map and tabindex to be focused,
      // it appears the tabindex is overruled so focus is still forwarded to the <map>
      return _tabindex === null || !supports.focusImgUsemapTabindex;
    }

    if (nodeName === 'area') {
      // all <area>s are considered relevant,
      // but only the valid <area>s are focusable
      return !(0, _isValidArea['default'])(element);
    }

    return false;
  }

  function isFocusableRules() {
    var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    var context = _ref.context;
    var _ref$except = _ref.except;
    var except = _ref$except === undefined ? {
      disabled: false,
      visible: false,
      onlyTabbable: false
    } : _ref$except;

    if (!supports) {
      supports = (0, _supports2['default'])();
    }

    var _isOnlyTabbable = _isOnlyTabbable2['default'].rules.except({
      onlyFocusableBrowsingContext: true,
      visible: except.visible
    });

    var element = (0, _contextToElement['default'])({
      label: 'is/focusable',
      resolveDocument: true,
      context: context
    });

    var focusRelevant = _isFocusRelevant['default'].rules({
      context: element,
      except: except
    });

    if (!focusRelevant || isOnlyFocusRelevant(element)) {
      return false;
    }

    if (!except.disabled && (0, _isDisabled['default'])(element)) {
      return false;
    }

    if (!except.onlyTabbable && _isOnlyTabbable(element)) {
      // some elements may be keyboard focusable, but not script focusable
      return false;
    }

    // elements that are not rendered, cannot be focused
    if (!except.visible) {
      var visibilityOptions = {
        context: element,
        except: {}
      };

      if (supports.focusInHiddenIframe) {
        // WebKit and Blink can focus content in hidden <iframe> and <object>
        visibilityOptions.except.browsingContext = true;
      }

      if (supports.focusObjectSvgHidden) {
        // Blink allows focusing the object element, even if it has visibility: hidden;
        // @browser-issue Blink https://code.google.com/p/chromium/issues/detail?id=586191
        var nodeName = element.nodeName.toLowerCase();
        if (nodeName === 'object') {
          visibilityOptions.except.cssVisibility = true;
        }
      }

      if (!_isVisible['default'].rules(visibilityOptions)) {
        return false;
      }
    }

    var frameElement = (0, _getFrameElement['default'])(element);
    if (frameElement) {
      var _nodeName = frameElement.nodeName.toLowerCase();
      if (_nodeName === 'object' && !supports.focusInZeroDimensionObject) {
        if (!frameElement.offsetWidth || !frameElement.offsetHeight) {
          // WebKit can not focus content in <object> if it doesn't have dimensions
          return false;
        }
      }
    }

    return true;
  }

  // bind exceptions to an iterator callback
  isFocusableRules.except = function () {
    var except = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    var isFocusable = function isFocusable(context) {
      return isFocusableRules({
        context: context,
        except: except
      });
    };

    isFocusable.rules = isFocusableRules;
    return isFocusable;
  };

  // provide isFocusRelevant(context) as default iterator callback
  var isFocusable = isFocusableRules.except({});
  module.exports = isFocusable;
});
//# sourceMappingURL=focusable.js.map