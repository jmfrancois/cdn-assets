define(['exports', 'module', '../is/focusable', '../query/focusable', '../query/tabbable', '../util/context-to-element', '../util/get-document', '../util/merge-dom-order', '../util/image-map', '../supports/supports'], function (exports, module, _isFocusable, _queryFocusable, _queryTabbable, _utilContextToElement, _utilGetDocument, _utilMergeDomOrder, _utilImageMap, _supportsSupports) {
  'use strict';

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _isFocusable2 = _interopRequireDefault(_isFocusable);

  var _queryFocusable2 = _interopRequireDefault(_queryFocusable);

  var _queryTabbable2 = _interopRequireDefault(_queryTabbable);

  var _contextToElement = _interopRequireDefault(_utilContextToElement);

  var _getDocument = _interopRequireDefault(_utilGetDocument);

  var _mergeInDomOrder = _interopRequireDefault(_utilMergeDomOrder);

  var _supports2 = _interopRequireDefault(_supportsSupports);

  var supports = undefined;

  function formControlElement(element) {
    var nodeName = element.nodeName.toLowerCase();
    return nodeName === 'input' || nodeName === 'textarea' || nodeName === 'select' || nodeName === 'button';
  }

  function resolveLabelElement(element, _document) {
    var forId = element.getAttribute('for');
    if (forId) {
      // <label for="…"> - referenced form control
      return _document.getElementById(forId);
    }

    // <label><input - nested form control
    return element.querySelector('input, select, textarea');
  }

  function resolveLegendWithinFieldset(element) {
    // Chrome: first focusable input/select/textarea/button within <fieldset>
    var fieldset = element.parentNode;
    var focusable = (0, _queryFocusable2['default'])({
      context: fieldset,
      strategy: 'strict'
    });

    return focusable.filter(formControlElement)[0] || null;
  }

  function resolveLegendWithinDocument(element, _document) {
    // Firefox: *next* tabbable (in DOM order)
    var tabbable = (0, _queryTabbable2['default'])({
      // Firefox apparently needs to query from the body element,
      // not the document, looking inside a dynamically written iframe
      context: _document.body,
      strategy: 'strict'
    });

    if (!tabbable.length) {
      return null;
    }

    // sort <legend> into the list of tabbable elements
    // so that we can identify the next element
    var merged = (0, _mergeInDomOrder['default'])({
      list: tabbable,
      elements: [element]
    });

    var offset = merged.indexOf(element);
    if (offset === merged.length - 1) {
      return null;
    }

    return merged[offset + 1];
  }

  function resolveLegendElement(element, _document) {
    // <legend> - first <input> in <fieldset>
    if (!supports.focusRedirectLegend) {
      return null;
    }

    // legend must be the first child of a <fieldset>
    var fieldset = element.parentNode;
    if (fieldset.nodeName.toLowerCase() !== 'fieldset') {
      return null;
    }

    if (supports.focusRedirectLegend === 'tabbable') {
      // Firefox goes for *next* tabbable (in DOM order)
      return resolveLegendWithinDocument(element, _document);
    }

    // Chrome goes for first focusable input/select/textarea/button within <fieldset>
    return resolveLegendWithinFieldset(element, _document);
  }

  function resolveImgElement(element) {
    if (!supports.focusRedirectImgUsemap) {
      return null;
    }

    // IE9-11: <img usemap="#…" src="…"> - first <area>
    var map = (0, _utilImageMap.getMapOfImage)(element);
    return map && map.querySelector('area') || null;
  }

  module.exports = function () {
    var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    var context = _ref.context;
    var skipFocusable = _ref.skipFocusable;

    if (!supports) {
      supports = (0, _supports2['default'])();
    }

    var element = (0, _contextToElement['default'])({
      label: 'get/focus-redirect-target',
      context: context
    });

    if (!skipFocusable && (0, _isFocusable2['default'])(element)) {
      return null;
    }

    var nodeName = element.nodeName.toLowerCase();
    var _document = (0, _getDocument['default'])(element);

    if (nodeName === 'label') {
      return resolveLabelElement(element, _document);
    }

    if (nodeName === 'legend') {
      return resolveLegendElement(element, _document);
    }

    if (nodeName === 'img') {
      return resolveImgElement(element, _document);
    }

    return null;
  };
});
//# sourceMappingURL=focus-redirect-target.js.map