define(['exports', 'module', './detect-focus'], function (exports, module, _detectFocus) {
  'use strict';

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _detectFocus2 = _interopRequireDefault(_detectFocus);

  // NOTE: https://github.com/medialize/ally.js/issues/35
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attr-usemap
  module.exports = (0, _detectFocus2['default'])({
    name: 'can-focus-img-usemap-tabindex',
    element: 'div',
    mutate: function mutate(element) {
      element.innerHTML = '<map name="image-map-tabindex-test"><area href="#void" shape="rect" coords="63,19,144,45"></map>' + '<img usemap="#image-map-tabindex-test" tabindex="-1" alt="" ' + 'src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7">';

      return element.querySelector('img');
    }
  });
});
//# sourceMappingURL=focus-img-usemap-tabindex.js.map