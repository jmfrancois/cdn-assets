'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.getMapByName = getMapByName;
exports.getMapOfImage = getMapOfImage;
exports.getImageOfArea = getImageOfArea;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _cssEscape = require('css.escape');

var _cssEscape2 = _interopRequireDefault(_cssEscape);

var _utilGetDocument = require('../util/get-document');

var _utilGetDocument2 = _interopRequireDefault(_utilGetDocument);

function getMapByName(name, _document) {
  // apparently getElementsByName() also considers id attribute in IE & opera
  // https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByName
  var map = _document.querySelector('map[name="' + (0, _cssEscape2['default'])(name) + '"]');
  return map || null;
}

function getMapOfImage(element) {
  var usemap = element.getAttribute('usemap');
  if (!usemap) {
    return null;
  }

  var _document = (0, _utilGetDocument2['default'])(element);
  return getMapByName(usemap.slice(1), _document);
}

function getImageOfArea(element) {
  var map = element.parentElement;

  if (!map.name || map.nodeName.toLowerCase() !== 'map') {
    return null;
  }

  // NOTE: image maps can also be applied to <object> with image content,
  // but no browser supports this at the moment

  // HTML5 specifies HTMLMapElement.images to be an HTMLCollection of all
  // <img> and <object> referencing the <map> element, but no browser implements this
  //   https://www.w3.org/TR/html5/embedded-content-0.html#the-map-element
  //   https://developer.mozilla.org/en-US/docs/Web/API/HTMLMapElement
  // the image must be valid and loaded for the map to take effect
  var _document = (0, _utilGetDocument2['default'])(element);
  return _document.querySelector('img[usemap="#' + (0, _cssEscape2['default'])(map.name) + '"]') || null;
}
//# sourceMappingURL=image-map.js.map