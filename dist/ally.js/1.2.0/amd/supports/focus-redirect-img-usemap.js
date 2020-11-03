define(['exports', 'module', './detect-focus', './memorize-result', './media/gif'], function (exports, module, _detectFocus, _memorizeResult, _mediaGif) {
  'use strict';

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _detectFocus2 = _interopRequireDefault(_detectFocus);

  var _memorizeResult2 = _interopRequireDefault(_memorizeResult);

  var _gif = _interopRequireDefault(_mediaGif);

  module.exports = (0, _memorizeResult2['default'])(function () {
    return (0, _detectFocus2['default'])({
      name: 'can-focus-redirect-img-usemap',
      element: 'div',
      mutate: function mutate(element) {
        element.innerHTML = '<map name="focus-redirect-img-usemap"><area href="#void" shape="rect" coords="63,19,144,45"></map>' + '<img usemap="#focus-redirect-img-usemap" alt="" ' + 'src="' + _gif['default'] + '">';
      },
      validate: function validate(element) {
        var focus = element.querySelector('img');
        var target = element.querySelector('area');

        focus.focus();
        return document.activeElement === target;
      }
    });
  });
});
//# sourceMappingURL=focus-redirect-img-usemap.js.map