define(['exports', 'module', './detect-focus'], function (exports, module, _detectFocus) {
  'use strict';

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _detectFocus2 = _interopRequireDefault(_detectFocus);

  // NOTE: https://github.com/medialize/ally.js/issues/35
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attr-usemap
  module.exports = (0, _detectFocus2['default'])({
    name: 'can-focus-broken-image-map',
    element: 'div',
    mutate: function mutate(element) {
      element.innerHTML = '<map name="broken-image-map-test"><area href="#void" shape="rect" coords="63,19,144,45"></map>' + '<img usemap="#broken-image-map-test" alt="" src="data:image/png;base64,broken-image-test">';

      return element.querySelector('area');
    }
  });
});
//# sourceMappingURL=focus-broken-image-map.js.map