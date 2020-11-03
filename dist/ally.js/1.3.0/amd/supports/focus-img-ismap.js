define(['exports', 'module', './media/gif'], function (exports, module, _mediaGif) {
  'use strict';

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _gif = _interopRequireDefault(_mediaGif);

  // NOTE: https://github.com/medialize/ally.js/issues/35
  // fixes https://github.com/medialize/ally.js/issues/20
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attr-ismap
  module.exports = {
    element: 'a',
    mutate: function mutate(element) {
      element.href = '#void';
      element.innerHTML = '<img ismap src="' + _gif['default'] + '" alt="">';
      return element.querySelector('img');
    }
  };
});
//# sourceMappingURL=focus-img-ismap.js.map