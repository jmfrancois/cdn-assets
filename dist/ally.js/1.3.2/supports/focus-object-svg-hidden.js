'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _mediaSvg = require('./media/svg');

var _mediaSvg2 = _interopRequireDefault(_mediaSvg);

// Note: IE10 on BrowserStack does not like this test

exports['default'] = {
  element: 'object',
  mutate: function mutate(element) {
    element.setAttribute('type', 'image/svg+xml');
    element.setAttribute('data', _mediaSvg2['default']);
    element.setAttribute('width', '200');
    element.setAttribute('height', '50');
    element.style.visibility = 'hidden';
  }
};
module.exports = exports['default'];
//# sourceMappingURL=focus-object-svg-hidden.js.map