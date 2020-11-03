'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _detectFocus = require('./detect-focus');

var _detectFocus2 = _interopRequireDefault(_detectFocus);

exports['default'] = (0, _detectFocus2['default'])({
  name: 'can-focus-table',
  element: 'table',
  mutate: function mutate(element) {
    element.innerHTML = '<tr><td>cell</td></tr>';
  }
});
module.exports = exports['default'];
//# sourceMappingURL=focus-table.js.map