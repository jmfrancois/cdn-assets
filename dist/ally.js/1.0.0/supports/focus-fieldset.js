'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _detectFocus = require('./detect-focus');

var _detectFocus2 = _interopRequireDefault(_detectFocus);

exports['default'] = (0, _detectFocus2['default'])({
  name: 'can-focus-fieldset',
  element: 'fieldset',
  mutate: function mutate(element) {
    element.innerHTML = '<legend>legend</legend><p>content</p>';
  }
});
module.exports = exports['default'];
//# sourceMappingURL=focus-fieldset.js.map