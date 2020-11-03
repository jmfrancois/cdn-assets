define(['exports', 'module', './media/gif.invalid'], function (exports, module, _mediaGifInvalid) {
  'use strict';

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _invalidGif = _interopRequireDefault(_mediaGifInvalid);

  // NOTE: https://github.com/medialize/ally.js/issues/35
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attr-usemap
  module.exports = {
    element: 'div',
    mutate: function mutate(element) {
      element.innerHTML = '<map name="broken-image-map-test"><area href="#void" shape="rect" coords="63,19,144,45"></map>' + '<img usemap="#broken-image-map-test" alt="" src="' + _invalidGif['default'] + '">';

      return element.querySelector('area');
    }
  };
});
//# sourceMappingURL=focus-broken-image-map.js.map