'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _mediaSvg = require('./media/svg');

var _mediaSvg2 = _interopRequireDefault(_mediaSvg);

var _utilPlatform = require('../util/platform');

var _utilPlatform2 = _interopRequireDefault(_utilPlatform);

// Note: IE10 on BrowserStack does not like this test

exports['default'] = {
  name: 'can-focus-object-svg',
  element: 'object',
  mutate: function mutate(element) {
    element.setAttribute('type', 'image/svg+xml');
    element.setAttribute('data', _mediaSvg2['default']);
    element.setAttribute('width', '200');
    element.setAttribute('height', '50');
  },
  validate: function validate(element, _document) {
    if (_utilPlatform2['default'].is.GECKO) {
      // Firefox seems to be handling the object creation asynchronously and thereby produces a false negative test result.
      // Because we know Firefox is able to focus object elements referencing SVGs, we simply cheat by sniffing the user agent string
      return true;
    }

    return _document.activeElement === element;
  }
};
module.exports = exports['default'];
//# sourceMappingURL=focus-object-svg.js.map