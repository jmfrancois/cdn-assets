define(['exports', 'module', './media/svg', '../util/platform'], function (exports, module, _mediaSvg, _utilPlatform) {
  'use strict';

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _svg = _interopRequireDefault(_mediaSvg);

  var _platform = _interopRequireDefault(_utilPlatform);

  // Note: IE10 on BrowserStack does not like this test

  module.exports = {
    name: 'can-focus-object-svg',
    element: 'object',
    mutate: function mutate(element) {
      element.setAttribute('type', 'image/svg+xml');
      element.setAttribute('data', _svg['default']);
      element.setAttribute('width', '200');
      element.setAttribute('height', '50');
    },
    validate: function validate(element, _document) {
      if (_platform['default'].is.GECKO) {
        // Firefox seems to be handling the object creation asynchronously and thereby produces a false negative test result.
        // Because we know Firefox is able to focus object elements referencing SVGs, we simply cheat by sniffing the user agent string
        return true;
      }

      return _document.activeElement === element;
    }
  };
});
//# sourceMappingURL=focus-object-svg.js.map