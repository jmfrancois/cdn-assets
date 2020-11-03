define(['exports', 'module', 'platform', './detect-focus'], function (exports, module, _platform, _detectFocus) {
  'use strict';

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _platform2 = _interopRequireDefault(_platform);

  var _detectFocus2 = _interopRequireDefault(_detectFocus);

  // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attr-usemap
  module.exports = (0, _detectFocus2['default'])({
    name: 'can-focus-area-tabindex',
    element: 'div',
    mutate: function mutate(element) {
      element.innerHTML = '<map name="image-map-tabindex-test">' + '<area href="#void" tabindex="-1" shape="rect" coords="63,19,144,45"></map>' + '<img usemap="#image-map-tabindex-test" tabindex="-1" alt="" ' + 'src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7">';

      return element.querySelector('area');
    },
    validate: function validate(element) {
      if (_platform2['default'].name === 'Firefox') {
        // fixes https://github.com/medialize/ally.js/issues/35
        // Firefox loads the DataURI asynchronously, causing a false-negative
        return true;
      }

      var focus = element.querySelector('area');
      return document.activeElement === focus;
    }
  });
});
//# sourceMappingURL=focus-area-tabindex.js.map