'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _isFocusable = require('../is/focusable');

var _isFocusable2 = _interopRequireDefault(_isFocusable);

var _queryFocusable = require('../query/focusable');

var _queryFocusable2 = _interopRequireDefault(_queryFocusable);

var _queryTabbable = require('../query/tabbable');

var _queryTabbable2 = _interopRequireDefault(_queryTabbable);

var _utilContextToElement = require('../util/context-to-element');

var _utilContextToElement2 = _interopRequireDefault(_utilContextToElement);

var _utilGetDocument = require('../util/get-document');

var _utilGetDocument2 = _interopRequireDefault(_utilGetDocument);

var _utilMergeDomOrder = require('../util/merge-dom-order');

var _utilMergeDomOrder2 = _interopRequireDefault(_utilMergeDomOrder);

var _utilImageMap = require('../util/image-map');

var _focusRedirectTargetSupports = require('./focus-redirect-target.supports');

var _focusRedirectTargetSupports2 = _interopRequireDefault(_focusRedirectTargetSupports);

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
  var merged = (0, _utilMergeDomOrder2['default'])({
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
  if (!supports.canFocusRedirectLegend) {
    return null;
  }

  // legend must be the first child of a <fieldset>
  var fieldset = element.parentNode;
  if (fieldset.nodeName.toLowerCase() !== 'fieldset') {
    return null;
  }

  if (supports.canFocusRedirectLegend === 'tabbable') {
    // Firefox goes for *next* tabbable (in DOM order)
    return resolveLegendWithinDocument(element, _document);
  }

  // Chrome goes for first focusable input/select/textarea/button within <fieldset>
  return resolveLegendWithinFieldset(element, _document);
}

function resolveImgElement(element) {
  if (!supports.canFocusRedirectImgUsemap) {
    return null;
  }

  // IE9-11: <img usemap="#…" src="…"> - first <area>
  var map = (0, _utilImageMap.getMapOfImage)(element);
  return map && map.querySelector('area') || null;
}

exports['default'] = function () {
  var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  var context = _ref.context;
  var skipFocusable = _ref.skipFocusable;

  if (!supports) {
    supports = (0, _focusRedirectTargetSupports2['default'])();
  }

  var element = (0, _utilContextToElement2['default'])({
    label: 'get/focus-redirect-target',
    context: context
  });

  if (!skipFocusable && (0, _isFocusable2['default'])(element)) {
    return null;
  }

  var nodeName = element.nodeName.toLowerCase();
  var _document = (0, _utilGetDocument2['default'])(element);

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

module.exports = exports['default'];
//# sourceMappingURL=focus-redirect-target.js.map