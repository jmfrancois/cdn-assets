define(['exports', 'module', '../prototype/element.prototype.matches', '../prototype/svgelement.prototype.focus', '../get/parents', '../util/context-to-element', '../util/get-window', './valid-tabindex', './is.util', './focus-relevant.supports'], function (exports, module, _prototypeElementPrototypeMatches, _prototypeSvgelementPrototypeFocus, _getParents, _utilContextToElement, _utilGetWindow, _validTabindex, _isUtil, _focusRelevantSupports) {
  // determine if an element supports.can be focused by script regardless
  // of the element actually being focusable at the time of execution
  // i.e. <input disabled> is conisdered focus-relevant, but not focusable

  'use strict';

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _polyfillElementPrototypeMatches = _interopRequireDefault(_prototypeElementPrototypeMatches);

  var _polyfillSVGElementPrototypeFocus = _interopRequireDefault(_prototypeSvgelementPrototypeFocus);

  var _getParents2 = _interopRequireDefault(_getParents);

  var _contextToElement = _interopRequireDefault(_utilContextToElement);

  var _getWindow = _interopRequireDefault(_utilGetWindow);

  var _isValidTabindex = _interopRequireDefault(_validTabindex);

  var _supports2 = _interopRequireDefault(_focusRelevantSupports);

  var supports = undefined;

  function isFocusRelevantRules() {
    var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    var context = _ref.context;
    var _ref$except = _ref.except;
    var except = _ref$except === undefined ? {
      flexbox: false,
      scrollable: false,
      shadow: false
    } : _ref$except;

    if (!supports) {
      supports = (0, _supports2['default'])();
    }

    var element = (0, _contextToElement['default'])({
      label: 'is/focus-relevant',
      resolveDocument: true,
      context: context
    });

    if (!except.shadow && element.shadowRoot) {
      // a Shadow DOM host receives focus when the focus moves to its content
      return true;
    }

    var nodeName = element.nodeName.toLowerCase();

    if (nodeName === 'input' && element.type === 'hidden') {
      // input[type="hidden"] supports.cannot be focused
      return false;
    }

    if (nodeName === 'input' || nodeName === 'select' || nodeName === 'button' || nodeName === 'textarea') {
      return true;
    }

    if (nodeName === 'legend' && supports.canFocusRedirectLegend) {
      // specifics filtered in is/focusable
      return true;
    }

    if (nodeName === 'label') {
      // specifics filtered in is/focusable
      return true;
    }

    if (nodeName === 'area') {
      // specifics filtered in is/focusable
      return true;
    }

    if (nodeName === 'a' && element.hasAttribute('href')) {
      return true;
    }

    if (nodeName === 'object' && element.hasAttribute('usemap')) {
      // object[usemap] is not focusable in any browser
      return false;
    }

    if (nodeName === 'object') {
      var svgType = element.getAttribute('type');
      if (!supports.canFocusObjectSvg && svgType === 'image/svg+xml') {
        // object[type="image/svg+xml"] is not focusable in Internet Explorer
        return false;
      } else if (!supports.canFocusObjectSwf && svgType === 'application/x-shockwave-flash') {
        // object[type="application/x-shockwave-flash"] is not focusable in Internet Explorer 9
        return false;
      }
    }

    if (nodeName === 'iframe' || nodeName === 'object') {
      // browsing context containers
      return true;
    }

    if (nodeName === 'embed' || nodeName === 'keygen') {
      // embed is considered focus-relevant but not focusable
      // see https://github.com/medialize/ally.js/issues/82
      return true;
    }

    if (element.hasAttribute('contenteditable')) {
      // also see CSS property user-modify below
      return true;
    }

    if (nodeName === 'audio' && (supports.canFocusAudioWithoutControls || element.hasAttribute('controls'))) {
      return true;
    }

    if (nodeName === 'video' && (supports.canFocusVideoWithoutControls || element.hasAttribute('controls'))) {
      return true;
    }

    if (supports.canFocusSummary && nodeName === 'summary') {
      return true;
    }

    var validTabindex = (0, _isValidTabindex['default'])(element);

    if (nodeName === 'img' && element.hasAttribute('usemap')) {
      // Gecko, Trident and Edge do not allow an image with an image map and tabindex to be focused,
      // it appears the tabindex is overruled so focus is still forwarded to the <map>
      return validTabindex && supports.canFocusImgUsemapTabindex || supports.canFocusRedirectImgUsemap;
    }

    if (supports.canFocusTable && (nodeName === 'table' || nodeName === 'td')) {
      // IE10-11 supports.can focus <table> and <td>
      return true;
    }

    if (supports.canFocusFieldset && nodeName === 'fieldset') {
      // IE10-11 supports.can focus <fieldset>
      return true;
    }

    var focusableAttribute = element.getAttribute('focusable');

    if (nodeName === 'svg') {
      return validTabindex || supports.canFocusSvg
      // Internet Explorer understands the focusable attribute introduced in SVG Tiny 1.2
       || Boolean(supports.canFocusSvgFocusableAttribute && focusableAttribute && focusableAttribute === 'true');
    }

    var _window = (0, _getWindow['default'])(element);
    (0, _polyfillElementPrototypeMatches['default'])(_window);
    if (element.matches('svg a') && element.hasAttribute('xlink:href')) {
      return true;
    }

    (0, _polyfillSVGElementPrototypeFocus['default'])(_window);
    if (supports.canFocusSvgFocusableAttribute && element.ownerSVGElement) {
      // Internet Explorer understands the focusable attribute introduced in SVG Tiny 1.2
      return Boolean(focusableAttribute && focusableAttribute === 'true');
    }

    // http://www.w3.org/TR/html5/editing.html#sequential-focus-navigation-and-the-tabindex-attribute
    if (validTabindex) {
      return true;
    }

    var style = window.getComputedStyle(element, null);
    if ((0, _isUtil.isUserModifyWritable)(style)) {
      return true;
    }

    if (supports.canFocusImgIsmap && nodeName === 'img' && element.hasAttribute('ismap')) {
      // IE10-11 considers the <img> in <a href><img ismap> focusable
      // https://github.com/medialize/ally.js/issues/20
      var hasLinkParent = (0, _getParents2['default'])({ context: element }).some(function (parent) {
        return parent.nodeName.toLowerCase() === 'a' && parent.hasAttribute('href');
      });

      if (hasLinkParent) {
        return true;
      }
    }

    // https://github.com/medialize/ally.js/issues/21
    if (!except.scrollable && supports.canFocusScrollContainer) {
      if (supports.canFocusScrollContainerWithoutOverflow) {
        // Internet Explorer does will consider the scrollable area focusable
        // if the element is a <div> or a <span> and it is in fact scrollable,
        // regardless of the CSS overflow property
        if ((0, _isUtil.isScrollableContainer)(element, nodeName)) {
          return true;
        }
      } else if ((0, _isUtil.hasCssOverflowScroll)(style)) {
        // Firefox requires proper overflow setting, IE does not necessarily
        // https://developer.mozilla.org/en-US/docs/Web/CSS/overflow
        return true;
      }
    }

    if (!except.flexbox && supports.canFocusFlexboxContainer && (0, _isUtil.hasCssDisplayFlex)(style)) {
      // elements with display:flex are focusable in IE10-11
      return true;
    }

    var parent = element.parentElement;
    if (!except.scrollable && parent) {
      var parentNodeName = parent.nodeName.toLowerCase();
      var parentStyle = window.getComputedStyle(parent, null);
      if (supports.canFocusScrollBody && (0, _isUtil.isScrollableContainer)(parent, nodeName, parentNodeName, parentStyle)) {
        // scrollable bodies are focusable Internet Explorer
        // https://github.com/medialize/ally.js/issues/21
        return true;
      }

      // Children of focusable elements with display:flex are focusable in IE10-11
      if (supports.canFocusChildrenOfFocusableFlexbox) {
        if ((0, _isUtil.hasCssDisplayFlex)(parentStyle)) {
          return true;
        }
      }
    }

    // NOTE: elements marked as inert are not focusable,
    // but that property is not exposed to the DOM
    // http://www.w3.org/TR/html5/editing.html#inert

    return false;
  }

  // bind exceptions to an iterator callback
  isFocusRelevantRules.except = function () {
    var except = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    var isFocusRelevant = function isFocusRelevant(context) {
      return isFocusRelevantRules({
        context: context,
        except: except
      });
    };

    isFocusRelevant.rules = isFocusRelevantRules;
    return isFocusRelevant;
  };

  // provide isFocusRelevant(context) as default iterator callback
  var isFocusRelevant = isFocusRelevantRules.except({});
  module.exports = isFocusRelevant;
});
//# sourceMappingURL=focus-relevant.js.map