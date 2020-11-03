define(['exports', 'module', './media/gif'], function (exports, module, _mediaGif) {
  'use strict';

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _gif = _interopRequireDefault(_mediaGif);

  // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attr-usemap
  module.exports = {
    element: 'div',
    mutate: function mutate(element) {
      element.innerHTML = '<map name="image-map-tabindex-test">' + '<area shape="rect" coords="63,19,144,45"></map>' + '<img usemap="#image-map-tabindex-test" tabindex="-1" alt="" src="' + _gif['default'] + '">';

      return element.querySelector('area');
    }
  };
});
//# sourceMappingURL=focus-area-img-tabindex.js.map