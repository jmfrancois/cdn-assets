define(['exports', 'module', './detect-focus', './memorize-result', './media/svg'], function (exports, module, _detectFocus, _memorizeResult, _mediaSvg) {
  'use strict';

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _detectFocus2 = _interopRequireDefault(_detectFocus);

  var _memorizeResult2 = _interopRequireDefault(_memorizeResult);

  var _svg = _interopRequireDefault(_mediaSvg);

  module.exports = (0, _memorizeResult2['default'])(function () {
    return (0, _detectFocus2['default'])({
      name: 'can-focus-object-svg-hidden',
      element: 'object',
      mutate: function mutate(element) {
        element.setAttribute('type', 'image/svg+xml');
        element.setAttribute('data', _svg['default']);
        element.setAttribute('width', '200');
        element.setAttribute('height', '50');
        element.style.visibility = 'hidden';
      }
    });
  });
});
//# sourceMappingURL=focus-object-svg-hidden.js.map