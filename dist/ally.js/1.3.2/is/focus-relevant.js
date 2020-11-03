
// determine if an element supports.can be focused by script regardless
// of the element actually being focusable at the time of execution
// i.e. <input disabled> is conisdered focus-relevant, but not focusable

'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _getParents = require('../get/parents');

var _getParents2 = _interopRequireDefault(_getParents);

var _utilContextToElement = require('../util/context-to-element');

var _utilContextToElement2 = _interopRequireDefault(_utilContextToElement);

var _utilElementMatches = require('../util/element-matches');

var _utilElementMatches2 = _interopRequireDefault(_utilElementMatches);

var _validTabindex = require('./valid-tabindex');

var _validTabindex2 = _interopRequireDefault(_validTabindex);

var _isUtil = require('./is.util');

var _supportsSupports = require('../supports/supports');

var _supportsSupports2 = _interopRequireDefault(_supportsSupports);

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
    supports = (0, _supportsSupports2['default'])();
  }

  var element = (0, _utilContextToElement2['default'])({
    label: 'is/focus-relevant',
    resolveDocument: true,
    context: context
  });

  if (!except.shadow && element.shadowRoot) {
    // a ShadowDOM host receives focus when the focus moves to its content
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

  if (nodeName === 'legend' && supports.focusRedirectLegend) {
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
    if (!supports.focusObjectSvg && svgType === 'image/svg+xml') {
      // object[type="image/svg+xml"] is not focusable in Internet Explorer
      return false;
    } else if (!supports.focusObjectSwf && svgType === 'application/x-shockwave-flash') {
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

  if (nodeName === 'audio' && (supports.focusAudioWithoutControls || element.hasAttribute('controls'))) {
    return true;
  }

  if (nodeName === 'video' && (supports.focusVideoWithoutControls || element.hasAttribute('controls'))) {
    return true;
  }

  if (supports.focusSummary && nodeName === 'summary') {
    return true;
  }

  var validTabindex = (0, _validTabindex2['default'])(element);

  if (nodeName === 'img' && element.hasAttribute('usemap')) {
    // Gecko, Trident and Edge do not allow an image with an image map and tabindex to be focused,
    // it appears the tabindex is overruled so focus is still forwarded to the <map>
    return validTabindex && supports.focusImgUsemapTabindex || supports.focusRedirectImgUsemap;
  }

  if (supports.focusTable && (nodeName === 'table' || nodeName === 'td')) {
    // IE10-11 supports.can focus <table> and <td>
    return true;
  }

  if (supports.focusFieldset && nodeName === 'fieldset') {
    // IE10-11 supports.can focus <fieldset>
    return true;
  }

  var focusableAttribute = element.getAttribute('focusable');

  if (nodeName === 'svg') {
    return validTabindex || supports.focusSvg
    // Internet Explorer understands the focusable attribute introduced in SVG Tiny 1.2
     || Boolean(supports.focusSvgFocusableAttribute && focusableAttribute && focusableAttribute === 'true');
  }

  if ((0, _utilElementMatches2['default'])(element, 'svg a') && element.hasAttribute('xlink:href')) {
    return true;
  }

  if (supports.focusSvgFocusableAttribute && element.ownerSVGElement) {
    // Internet Explorer understands the focusable attribute introduced in SVG Tiny 1.2
    return Boolean(focusableAttribute && focusableAttribute === 'true');
  }

  // https://www.w3.org/TR/html5/editing.html#sequential-focus-navigation-and-the-tabindex-attribute
  if (validTabindex) {
    return true;
  }

  var style = window.getComputedStyle(element, null);
  if ((0, _isUtil.isUserModifyWritable)(style)) {
    return true;
  }

  if (supports.focusImgIsmap && nodeName === 'img' && element.hasAttribute('ismap')) {
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
  if (!except.scrollable && supports.focusScrollContainer) {
    if (supports.focusScrollContainerWithoutOverflow) {
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

  if (!except.flexbox && supports.focusFlexboxContainer && (0, _isUtil.hasCssDisplayFlex)(style)) {
    // elements with display:flex are focusable in IE10-11
    return true;
  }

  var parent = element.parentElement;
  if (!except.scrollable && parent) {
    var parentNodeName = parent.nodeName.toLowerCase();
    var parentStyle = window.getComputedStyle(parent, null);
    if (supports.focusScrollBody && (0, _isUtil.isScrollableContainer)(parent, nodeName, parentNodeName, parentStyle)) {
      // scrollable bodies are focusable Internet Explorer
      // https://github.com/medialize/ally.js/issues/21
      return true;
    }

    // Children of focusable elements with display:flex are focusable in IE10-11
    if (supports.focusChildrenOfFocusableFlexbox) {
      if ((0, _isUtil.hasCssDisplayFlex)(parentStyle)) {
        return true;
      }
    }
  }

  // NOTE: elements marked as inert are not focusable,
  // but that property is not exposed to the DOM
  // https://www.w3.org/TR/html5/editing.html#inert

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
exports['default'] = isFocusRelevant;
module.exports = exports['default'];
//# sourceMappingURL=focus-relevant.js.map