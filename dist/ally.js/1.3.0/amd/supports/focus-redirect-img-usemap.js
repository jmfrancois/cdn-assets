define(['exports', 'module', './media/gif'], function (exports, module, _mediaGif) {
  'use strict';

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _gif = _interopRequireDefault(_mediaGif);

  module.exports = {
    element: 'div',
    mutate: function mutate(element) {
      element.innerHTML = '<map name="focus-redirect-img-usemap"><area href="#void" shape="rect" coords="63,19,144,45"></map>' + '<img usemap="#focus-redirect-img-usemap" alt="" ' + 'src="' + _gif['default'] + '">';

      // focus the <img>, not the <div>
      return element.querySelector('img');
    },
    validate: function validate(element, _document) {
      var target = element.querySelector('area');
      return _document.activeElement === target;
    }
  };
});
//# sourceMappingURL=focus-redirect-img-usemap.js.map