define(['exports', 'module', './media/svg'], function (exports, module, _mediaSvg) {
  'use strict';

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _svg = _interopRequireDefault(_mediaSvg);

  module.exports = {
    element: 'object',
    mutate: function mutate(element) {
      element.setAttribute('type', 'image/svg+xml');
      element.setAttribute('data', _svg['default']);
      element.setAttribute('width', '200');
      element.setAttribute('height', '50');
      element.style.visibility = 'hidden';
    }
  };
});
//# sourceMappingURL=focus-object-svg-hidden.js.map