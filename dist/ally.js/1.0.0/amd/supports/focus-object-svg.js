define(['exports', 'module', 'platform', './detect-focus'], function (exports, module, _platform, _detectFocus) {
  'use strict';

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _platform2 = _interopRequireDefault(_platform);

  var _detectFocus2 = _interopRequireDefault(_detectFocus);

  var support = (0, _detectFocus2['default'])({
    name: 'can-focus-object-svg',
    element: 'object',
    mutate: function mutate(element) {
      var svg = 'PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk' + '5L3hsaW5rIiBpZD0ic3ZnIj48dGV4dCB4PSIxMCIgeT0iMjAiIGlkPSJzdmctbGluay10ZXh0Ij50ZXh0PC90ZXh0Pjwvc3ZnPg==';

      element.setAttribute('type', 'image/svg+xml');
      element.setAttribute('data', 'data:image/svg+xml,base64,' + svg);
      element.setAttribute('width', '200');
      element.setAttribute('height', '50');
    }
  });

  // Firefox seems to be handling the object creation asynchronously and thereby produces a false negative test result.
  // Because we know Firefox is able to focus object elements referencing SVGs, we simply cheat by sniffing the user agent string
  if (_platform2['default'].name === 'Firefox') {
    support = true;
  }

  module.exports = support;
});
//# sourceMappingURL=focus-object-svg.js.map