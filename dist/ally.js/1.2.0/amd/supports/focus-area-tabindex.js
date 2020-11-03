define(['exports', 'module', './detect-focus', './memorize-result', './media/gif', '../util/platform'], function (exports, module, _detectFocus, _memorizeResult, _mediaGif, _utilPlatform) {
  'use strict';

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _detectFocus2 = _interopRequireDefault(_detectFocus);

  var _memorizeResult2 = _interopRequireDefault(_memorizeResult);

  var _gif = _interopRequireDefault(_mediaGif);

  var _platform = _interopRequireDefault(_utilPlatform);

  // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attr-usemap
  module.exports = (0, _memorizeResult2['default'])(function () {
    return (0, _detectFocus2['default'])({
      name: 'can-focus-area-tabindex',
      element: 'div',
      mutate: function mutate(element) {
        element.innerHTML = '<map name="image-map-tabindex-test">' + '<area href="#void" tabindex="-1" shape="rect" coords="63,19,144,45"></map>' + '<img usemap="#image-map-tabindex-test" alt="" src="' + _gif['default'] + '">';

        return element.querySelector('area');
      },
      validate: function validate(element) {
        if (_platform['default'].is.GECKO) {
          // fixes https://github.com/medialize/ally.js/issues/35
          // Firefox loads the DataURI asynchronously, causing a false-negative
          return true;
        }

        var focus = element.querySelector('area');
        return document.activeElement === focus;
      }
    });
  });
});
//# sourceMappingURL=focus-area-tabindex.js.map