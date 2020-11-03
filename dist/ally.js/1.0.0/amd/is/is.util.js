define(['exports', 'css.escape'], function (exports, _cssEscape) {
  // this is a shared utility file for focus-relevant.js and tabbable.js
  // separate testing of this file's functions is not necessary,
  // as they're implicitly tested by way of the consumers

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  exports.isUserModifyWritable = isUserModifyWritable;
  exports.hasCssOverflowScroll = hasCssOverflowScroll;
  exports.isScrollableContainer = isScrollableContainer;
  exports.getImageOfArea = getImageOfArea;

  function isUserModifyWritable(style) {
    // http://www.w3.org/TR/1999/WD-css3-userint-19990916#user-modify
    // https://github.com/medialize/ally.js/issues/17
    var userModify = style.webkitUserModify || '';
    return Boolean(userModify && userModify.indexOf('write') !== -1);
  }

  function hasCssOverflowScroll(style) {
    return [style.getPropertyValue('overflow'), style.getPropertyValue('overflow-x'), style.getPropertyValue('overflow-y')].some(function (overflow) {
      return overflow === 'auto' || overflow === 'scroll';
    });
  }

  function isScrollableContainer(element, nodeName) {
    if (nodeName !== 'div' && nodeName !== 'span') {
      // Internet Explorer advances scrollable containers and bodies to focusable
      // only if the scrollable container is <div> or <span> - this does *not*
      // happen for <section>, <article>, …
      return false;
    }

    return element.offsetHeight < element.scrollHeight || element.offsetWidth < element.scrollWidth;
  }

  function getImageOfArea(element) {
    var map = element.parentElement;

    // an <area> matches the area[href] selector even if it is not applicable
    if (!map.name || !element.href || map.nodeName.toLowerCase() !== 'map') {
      return null;
    }

    // NOTE: image maps can also be applied to <object> with image content,
    // but no browser supports this at the moment

    // HTML5 specifies HTMLMapElement.images to be an HTMLCollection of all
    // <img> and <object> referencing the <map> element, but no browser implements this
    //   http://www.w3.org/TR/html5/embedded-content-0.html#the-map-element
    //   https://developer.mozilla.org/en-US/docs/Web/API/HTMLMapElement
    // the image must be valid and loaded for the map to take effect
    return document.querySelector('img[usemap="#' + CSS.escape(map.name) + '"]') || null;
  }
});
//# sourceMappingURL=is.util.js.map