define(['exports', 'module', './media/gif', '../util/platform'], function (exports, module, _mediaGif, _utilPlatform) {
  'use strict';

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _gif = _interopRequireDefault(_mediaGif);

  var _platform = _interopRequireDefault(_utilPlatform);

  // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attr-usemap
  module.exports = {
    element: 'div',
    mutate: function mutate(element) {
      element.innerHTML = '<map name="image-map-area-href-test">' + '<area shape="rect" coords="63,19,144,45"></map>' + '<img usemap="#image-map-area-href-test" alt="" src="' + _gif['default'] + '">';

      return element.querySelector('area');
    },
    validate: function validate(element, _document) {
      if (_platform['default'].is.GECKO) {
        // fixes https://github.com/medialize/ally.js/issues/35
        // Firefox loads the DataURI asynchronously, causing a false-negative
        return true;
      }

      var focus = element.querySelector('area');
      return _document.activeElement === focus;
    }
  };
});
//# sourceMappingURL=focus-area-without-href.js.map