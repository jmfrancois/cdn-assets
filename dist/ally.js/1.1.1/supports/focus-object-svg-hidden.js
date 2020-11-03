'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _detectFocus = require('./detect-focus');

var _detectFocus2 = _interopRequireDefault(_detectFocus);

var _memorizeResult = require('./memorize-result');

var _memorizeResult2 = _interopRequireDefault(_memorizeResult);

var _mediaSvg = require('./media/svg');

var _mediaSvg2 = _interopRequireDefault(_mediaSvg);

exports['default'] = (0, _memorizeResult2['default'])(function () {
  return (0, _detectFocus2['default'])({
    name: 'can-focus-object-svg-hidden',
    element: 'object',
    mutate: function mutate(element) {
      element.setAttribute('type', 'image/svg+xml');
      element.setAttribute('data', _mediaSvg2['default']);
      element.setAttribute('width', '200');
      element.setAttribute('height', '50');
      element.style.visibility = 'hidden';
    }
  });
});
module.exports = exports['default'];
//# sourceMappingURL=focus-object-svg-hidden.js.map