define(['exports', 'module', '../prototype/svgelement.prototype.focus', '../prototype/element.prototype.matches', '../get/parents', './valid-tabindex', './valid-area', './is.util', '../supports/focus-area-tabindex', '../supports/focus-audio-without-controls', '../supports/focus-children-of-focusable-flexbox', '../supports/focus-embed', '../supports/focus-embed-tabindex', '../supports/focus-fieldset', '../supports/focus-img-ismap', '../supports/focus-img-usemap-tabindex', '../supports/focus-label-tabindex', '../supports/focus-object-svg', '../supports/focus-scroll-body', '../supports/focus-scroll-container', '../supports/focus-scroll-container-without-overflow', '../supports/focus-summary', '../supports/svg-focus-method', '../supports/focus-table', '../supports/focus-video-without-controls'], function (exports, module, _prototypeSvgelementPrototypeFocus, _prototypeElementPrototypeMatches, _getParents, _validTabindex, _validArea, _isUtil, _supportsFocusAreaTabindex, _supportsFocusAudioWithoutControls, _supportsFocusChildrenOfFocusableFlexbox, _supportsFocusEmbed, _supportsFocusEmbedTabindex, _supportsFocusFieldset, _supportsFocusImgIsmap, _supportsFocusImgUsemapTabindex, _supportsFocusLabelTabindex, _supportsFocusObjectSvg, _supportsFocusScrollBody, _supportsFocusScrollContainer, _supportsFocusScrollContainerWithoutOverflow, _supportsFocusSummary, _supportsSvgFocusMethod, _supportsFocusTable, _supportsFocusVideoWithoutControls) {
  // determine if an element can be focused by script regardless
  // of the element actually being focusable at the time of execution
  // i.e. <input disabled> is conisdered focus-relevant, but not focusable

  'use strict';

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _getParents2 = _interopRequireDefault(_getParents);

  var _isValidTabindex = _interopRequireDefault(_validTabindex);

  var _isValidArea = _interopRequireDefault(_validArea);

  var _canFocusAreaTabindex = _interopRequireDefault(_supportsFocusAreaTabindex);

  var _canFocusAudioWithoutControls = _interopRequireDefault(_supportsFocusAudioWithoutControls);

  var _canFocusChildrenOfFocusableFlexbox = _interopRequireDefault(_supportsFocusChildrenOfFocusableFlexbox);

  var _canFocusEmbed = _interopRequireDefault(_supportsFocusEmbed);

  var _canFocusEmbedTabindex = _interopRequireDefault(_supportsFocusEmbedTabindex);

  var _canFocusFieldset = _interopRequireDefault(_supportsFocusFieldset);

  var _canFocusImgIsmap = _interopRequireDefault(_supportsFocusImgIsmap);

  var _canFocusImgUsemapTabindex = _interopRequireDefault(_supportsFocusImgUsemapTabindex);

  var _canFocusLabelTabindex = _interopRequireDefault(_supportsFocusLabelTabindex);

  var _canFocusObjectSvg = _interopRequireDefault(_supportsFocusObjectSvg);

  var _canFocusScrollBody = _interopRequireDefault(_supportsFocusScrollBody);

  var _canFocusScrollContainer = _interopRequireDefault(_supportsFocusScrollContainer);

  var _canFocusScrollContainerWithoutOverflow = _interopRequireDefault(_supportsFocusScrollContainerWithoutOverflow);

  var _canFocusSummary = _interopRequireDefault(_supportsFocusSummary);

  var _canFocusSvgMethod = _interopRequireDefault(_supportsSvgFocusMethod);

  var _canFocusTable = _interopRequireDefault(_supportsFocusTable);

  var _canFocusVideoWithoutControls = _interopRequireDefault(_supportsFocusVideoWithoutControls);

  module.exports = function (element) {
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

    if (nodeName === 'label' && !_canFocusLabelTabindex['default']) {
      // <label tabindex="0"> is only tabbable in Firefox, not script-focusable
      // there's no way to make an element focusable other than by adding a tabindex,
      // and focus behavior of the label element seems hard-wired to ignore tabindex
      // in some browsers (like Gecko, Blink and WebKit)
      return false;
    }

    if (nodeName === 'area') {
      if (!_canFocusAreaTabindex['default'] && element.hasAttribute('tabindex')) {
        // Blink and WebKit do not consider <area tabindex="-1" href="#void"> focusable
        return false;
      }

      return (0, _isValidArea['default'])(element);
    }

    if (nodeName === 'a' && element.hasAttribute('href')) {
      return true;
    }

    if (nodeName === 'object' && element.hasAttribute('usemap')) {
      // object[usemap] is not focusable in any browser
      return false;
    }

    if (!_canFocusObjectSvg['default'] && nodeName === 'object' && element.getAttribute('type') === 'image/svg+xml') {
      // object[type="image/svg+xml"] is not focusable in Internet Explorer
      return false;
    }

    if (nodeName === 'iframe' || nodeName === 'object') {
      // browsing context containers
      return true;
    }

    var validTabindex = (0, _isValidTabindex['default'])(element);

    if (nodeName === 'embed') {
      if (_canFocusEmbed['default'] || _canFocusEmbedTabindex['default'] && validTabindex) {
        return true;
      }

      return false;
    }

    if (element.hasAttribute('contenteditable')) {
      // also see CSS property user-modify below
      return true;
    }

    if (nodeName === 'audio' && (_canFocusAudioWithoutControls['default'] || element.hasAttribute('controls'))) {
      return true;
    }

    if (nodeName === 'video' && (_canFocusVideoWithoutControls['default'] || element.hasAttribute('controls'))) {
      return true;
    }

    if (_canFocusSummary['default'] && nodeName === 'summary') {
      return true;
    }

    if (nodeName === 'img' && element.hasAttribute('usemap') && validTabindex) {
      // Gecko, Trident and Edge do not allow an image with an image map and tabindex to be focused,
      // it appears the tabindex is overruled so focus is still forwarded to the <map>
      return _canFocusImgUsemapTabindex['default'];
    }

    if (_canFocusTable['default'] && (nodeName === 'table' || nodeName === 'td')) {
      // IE10-11 can focus <table> and <td>
      return true;
    }

    if (_canFocusFieldset['default'] && nodeName === 'fieldset') {
      // IE10-11 can focus <fieldset>
      return true;
    }

    if (nodeName === 'svg') {
      if (!_canFocusSvgMethod['default']) {
        // Firefox and IE cannot focus SVG elements because SVGElement.prototype.focus is missing
        return false;
      }
      // NOTE: in Chrome this would be something like 'svg, svg *,' as *every* svg element with a focus event listener is focusable
      return validTabindex;
    }

    if (element.matches('svg a[*|href]')) {
      // Namespace problems of [xlink:href] explained in http://stackoverflow.com/a/23047888/515124
      // Firefox cannot focus <svg> child elements from script
      return _canFocusSvgMethod['default'];
    }

    // http://www.w3.org/TR/html5/editing.html#sequential-focus-navigation-and-the-tabindex-attribute
    if (validTabindex) {
      return true;
    }

    var style = window.getComputedStyle(element, null);
    if ((0, _isUtil.isUserModifyWritable)(style)) {
      return true;
    }

    if (_canFocusImgIsmap['default'] && nodeName === 'img' && element.hasAttribute('ismap')) {
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
    if (_canFocusScrollContainer['default']) {
      if (_canFocusScrollContainerWithoutOverflow['default']) {
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
      if (_canFocusScrollBody['default'] && (0, _isUtil.isScrollableContainer)(parent, nodeName)) {
        // scrollable bodies are focusable Internet Explorer
        // https://github.com/medialize/ally.js/issues/21
        return true;
      }

      // Children of focusable elements with display:flex are focusable in IE10-11
      if (_canFocusChildrenOfFocusableFlexbox['default']) {
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
});
//# sourceMappingURL=focus-relevant.js.map