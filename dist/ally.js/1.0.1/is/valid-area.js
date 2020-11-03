
// determine if an <area> element is being properly used by and <img> via a <map>

'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _visible = require('./visible');

var _visible2 = _interopRequireDefault(_visible);

var _getParents = require('../get/parents');

var _getParents2 = _interopRequireDefault(_getParents);

var _supportsFocusBrokenImageMap = require('../supports/focus-broken-image-map');

var _supportsFocusBrokenImageMap2 = _interopRequireDefault(_supportsFocusBrokenImageMap);

var _isUtil = require('./is.util');

// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/map
// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attr-usemap
// https://github.com/jquery/jquery-ui/blob/master/ui/core.js#L88-L107

exports['default'] = function (element) {
  if (!element || element.nodeType !== Node.ELEMENT_NODE) {
    throw new TypeError('is/valid-area requires an argument of type Element');
  }

  var nodeName = element.nodeName.toLowerCase();
  if (nodeName !== 'area') {
    return false;
  }

  var img = (0, _isUtil.getImageOfArea)(element);
  if (!img || !(0, _visible2['default'])(img)) {
    return false;
  }

  // Firefox only allows fully loaded images to reference image maps
  // https://stereochro.me/ideas/detecting-broken-images-js
  if (!_supportsFocusBrokenImageMap2['default'] && (!img.complete || !img.naturalHeight || img.offsetWidth <= 0 || img.offsetHeight <= 0)) {
    return false;
  }

  // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attr-usemap
  var childOfInteractive = (0, _getParents2['default'])({ context: img }).slice(1).some(function (_element) {
    var name = _element.nodeName.toLowerCase();
    return name === 'button' || name === 'a';
  });

  if (childOfInteractive) {
    return false;
  }

  return true;
};

module.exports = exports['default'];
//# sourceMappingURL=valid-area.js.map