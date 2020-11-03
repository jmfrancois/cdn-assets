
// determine if an element can be focused by script regardless
// of the element actually being focusable at the time of execution
// i.e. <input disabled> is conisdered focus-relevant, but not focusable

'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

require('../prototype/svgelement.prototype.focus');

require('../prototype/element.prototype.matches');

var _getParents = require('../get/parents');

var _getParents2 = _interopRequireDefault(_getParents);

var _validTabindex = require('./valid-tabindex');

var _validTabindex2 = _interopRequireDefault(_validTabindex);

var _validArea = require('./valid-area');

var _validArea2 = _interopRequireDefault(_validArea);

var _isUtil = require('./is.util');

var _supportsFocusAreaTabindex = require('../supports/focus-area-tabindex');

var _supportsFocusAreaTabindex2 = _interopRequireDefault(_supportsFocusAreaTabindex);

var _supportsFocusAudioWithoutControls = require('../supports/focus-audio-without-controls');

var _supportsFocusAudioWithoutControls2 = _interopRequireDefault(_supportsFocusAudioWithoutControls);

var _supportsFocusChildrenOfFocusableFlexbox = require('../supports/focus-children-of-focusable-flexbox');

var _supportsFocusChildrenOfFocusableFlexbox2 = _interopRequireDefault(_supportsFocusChildrenOfFocusableFlexbox);

var _supportsFocusEmbed = require('../supports/focus-embed');

var _supportsFocusEmbed2 = _interopRequireDefault(_supportsFocusEmbed);

var _supportsFocusEmbedTabindex = require('../supports/focus-embed-tabindex');

var _supportsFocusEmbedTabindex2 = _interopRequireDefault(_supportsFocusEmbedTabindex);

var _supportsFocusFieldset = require('../supports/focus-fieldset');

var _supportsFocusFieldset2 = _interopRequireDefault(_supportsFocusFieldset);

var _supportsFocusImgIsmap = require('../supports/focus-img-ismap');

var _supportsFocusImgIsmap2 = _interopRequireDefault(_supportsFocusImgIsmap);

var _supportsFocusImgUsemapTabindex = require('../supports/focus-img-usemap-tabindex');

var _supportsFocusImgUsemapTabindex2 = _interopRequireDefault(_supportsFocusImgUsemapTabindex);

var _supportsFocusLabelTabindex = require('../supports/focus-label-tabindex');

var _supportsFocusLabelTabindex2 = _interopRequireDefault(_supportsFocusLabelTabindex);

var _supportsFocusObjectSvg = require('../supports/focus-object-svg');

var _supportsFocusObjectSvg2 = _interopRequireDefault(_supportsFocusObjectSvg);

var _supportsFocusScrollBody = require('../supports/focus-scroll-body');

var _supportsFocusScrollBody2 = _interopRequireDefault(_supportsFocusScrollBody);

var _supportsFocusScrollContainer = require('../supports/focus-scroll-container');

var _supportsFocusScrollContainer2 = _interopRequireDefault(_supportsFocusScrollContainer);

var _supportsFocusScrollContainerWithoutOverflow = require('../supports/focus-scroll-container-without-overflow');

var _supportsFocusScrollContainerWithoutOverflow2 = _interopRequireDefault(_supportsFocusScrollContainerWithoutOverflow);

var _supportsFocusSummary = require('../supports/focus-summary');

var _supportsFocusSummary2 = _interopRequireDefault(_supportsFocusSummary);

var _supportsSvgFocusMethod = require('../supports/svg-focus-method');

var _supportsSvgFocusMethod2 = _interopRequireDefault(_supportsSvgFocusMethod);

var _supportsFocusTable = require('../supports/focus-table');

var _supportsFocusTable2 = _interopRequireDefault(_supportsFocusTable);

var _supportsFocusVideoWithoutControls = require('../supports/focus-video-without-controls');

var _supportsFocusVideoWithoutControls2 = _interopRequireDefault(_supportsFocusVideoWithoutControls);

exports['default'] = function (element) {
  if (element === document) {
    element = document.documentElement;
  }

  if (!element || element.nodeType !== Node.ELEMENT_NODE) {
    throw new TypeError('is/focus-relevant requires an argument of type Element');
  }

  var nodeName = element.nodeName.toLowerCase();

  if (nodeName === 'input' && element.type === 'hidden') {
    // input[type="hidden"] cannot be focused
    return false;
  }

  if (nodeName === 'input' || nodeName === 'select' || nodeName === 'button' || nodeName === 'textarea') {
    return true;
  }

  if (nodeName === 'label' && !_supportsFocusLabelTabindex2['default']) {
    // <label tabindex="0"> is only tabbable in Firefox, not script-focusable
    // there's no way to make an element focusable other than by adding a tabindex,
    // and focus behavior of the label element seems hard-wired to ignore tabindex
    // in some browsers (like Gecko, Blink and WebKit)
    return false;
  }

  if (nodeName === 'area') {
    if (!_supportsFocusAreaTabindex2['default'] && element.hasAttribute('tabindex')) {
      // Blink and WebKit do not consider <area tabindex="-1" href="#void"> focusable
      return false;
    }

    return (0, _validArea2['default'])(element);
  }

  if (nodeName === 'a' && element.hasAttribute('href')) {
    return true;
  }

  if (nodeName === 'object' && element.hasAttribute('usemap')) {
    // object[usemap] is not focusable in any browser
    return false;
  }

  if (!_supportsFocusObjectSvg2['default'] && nodeName === 'object' && element.getAttribute('type') === 'image/svg+xml') {
    // object[type="image/svg+xml"] is not focusable in Internet Explorer
    return false;
  }

  if (nodeName === 'iframe' || nodeName === 'object') {
    // browsing context containers
    return true;
  }

  var validTabindex = (0, _validTabindex2['default'])(element);

  if (nodeName === 'embed') {
    if (_supportsFocusEmbed2['default'] || _supportsFocusEmbedTabindex2['default'] && validTabindex) {
      return true;
    }

    return false;
  }

  if (element.hasAttribute('contenteditable')) {
    // also see CSS property user-modify below
    return true;
  }

  if (nodeName === 'audio' && (_supportsFocusAudioWithoutControls2['default'] || element.hasAttribute('controls'))) {
    return true;
  }

  if (nodeName === 'video' && (_supportsFocusVideoWithoutControls2['default'] || element.hasAttribute('controls'))) {
    return true;
  }

  if (_supportsFocusSummary2['default'] && nodeName === 'summary') {
    return true;
  }

  if (nodeName === 'img' && element.hasAttribute('usemap') && validTabindex) {
    // Gecko, Trident and Edge do not allow an image with an image map and tabindex to be focused,
    // it appears the tabindex is overruled so focus is still forwarded to the <map>
    return _supportsFocusImgUsemapTabindex2['default'];
  }

  if (_supportsFocusTable2['default'] && (nodeName === 'table' || nodeName === 'td')) {
    // IE10-11 can focus <table> and <td>
    return true;
  }

  if (_supportsFocusFieldset2['default'] && nodeName === 'fieldset') {
    // IE10-11 can focus <fieldset>
    return true;
  }

  if (nodeName === 'svg') {
    if (!_supportsSvgFocusMethod2['default']) {
      // Firefox and IE cannot focus SVG elements because SVGElement.prototype.focus is missing
      return false;
    }
    // NOTE: in Chrome this would be something like 'svg, svg *,' as *every* svg element with a focus event listener is focusable
    return validTabindex;
  }

  if (element.matches('svg a[*|href]')) {
    // Namespace problems of [xlink:href] explained in http://stackoverflow.com/a/23047888/515124
    // Firefox cannot focus <svg> child elements from script
    return _supportsSvgFocusMethod2['default'];
  }

  // http://www.w3.org/TR/html5/editing.html#sequential-focus-navigation-and-the-tabindex-attribute
  if (validTabindex) {
    return true;
  }

  var style = window.getComputedStyle(element, null);
  if ((0, _isUtil.isUserModifyWritable)(style)) {
    return true;
  }

  if (_supportsFocusImgIsmap2['default'] && nodeName === 'img' && element.hasAttribute('ismap')) {
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
  if (_supportsFocusScrollContainer2['default']) {
    if (_supportsFocusScrollContainerWithoutOverflow2['default']) {
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

  var parent = element.parentElement;
  if (parent) {
    if (_supportsFocusScrollBody2['default'] && (0, _isUtil.isScrollableContainer)(parent, nodeName)) {
      // scrollable bodies are focusable Internet Explorer
      // https://github.com/medialize/ally.js/issues/21
      return true;
    }

    // Children of focusable elements with display:flex are focusable in IE10-11
    if (_supportsFocusChildrenOfFocusableFlexbox2['default']) {
      var parentStyle = window.getComputedStyle(parent, null);
      if (parentStyle.display.indexOf('flex') > -1) {
        return true;
      }
    }
  }

  // NOTE: elements marked as inert are not focusable,
  // but that property is not exposed to the DOM
  // http://www.w3.org/TR/html5/editing.html#inert

  return false;
};

module.exports = exports['default'];
//# sourceMappingURL=focus-relevant.js.map