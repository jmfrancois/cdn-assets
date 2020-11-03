define(['exports', 'module', '../util/context-to-element', './visible', '../get/parents', '../util/image-map', './valid-area.supports'], function (exports, module, _utilContextToElement, _visible, _getParents, _utilImageMap, _validAreaSupports) {
  // determine if an <area> element is being properly used by and <img> via a <map>

  'use strict';

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _contextToElement = _interopRequireDefault(_utilContextToElement);

  var _isVisible = _interopRequireDefault(_visible);

  var _getParents2 = _interopRequireDefault(_getParents);

  var _supports2 = _interopRequireDefault(_validAreaSupports);

  var supports = undefined;

  // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/map
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attr-usemap
  // https://github.com/jquery/jquery-ui/blob/master/ui/core.js#L88-L107

  module.exports = function (context) {
    if (!supports) {
      supports = (0, _supports2['default'])();
    }

    var element = (0, _contextToElement['default'])({
      label: 'is/valid-area',
      context: context
    });

    var nodeName = element.nodeName.toLowerCase();
    if (nodeName !== 'area') {
      return false;
    }

    var hasTabindex = element.hasAttribute('tabindex');
    if (!supports.canFocusAreaTabindex && hasTabindex) {
      // Blink and WebKit do not consider <area tabindex="-1" href="#void"> focusable
      return false;
    }

    var img = (0, _utilImageMap.getImageOfArea)(element);
    if (!img || !(0, _isVisible['default'])(img)) {
      return false;
    }

    // Firefox only allows fully loaded images to reference image maps
    // https://stereochro.me/ideas/detecting-broken-images-js
    if (!supports.canFocusBrokenImageMaps && (!img.complete || !img.naturalHeight || img.offsetWidth <= 0 || img.offsetHeight <= 0)) {
      return false;
    }

    // Firefox supports.can focus area elements even if they don't have an href attribute
    if (!supports.canFocusAreaWithoutHref && !element.href) {
      // Internet explorer supports.can focus area elements without href if either
      // the area element or the image element has a tabindex attribute
      return supports.canFocusAreaTabindex && hasTabindex || supports.canFocusAreaImgTabindex && img.hasAttribute('tabindex');
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
});
//# sourceMappingURL=valid-area.js.map