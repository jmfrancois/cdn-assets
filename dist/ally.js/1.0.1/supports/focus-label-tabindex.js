'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _detectFocus = require('./detect-focus');

var _detectFocus2 = _interopRequireDefault(_detectFocus);

// only Trident and Edge are able to focus a <label tabindex="-1">,
// as all other browsers seem hardwired to forward focus to the target input, if possible
exports['default'] = (0, _detectFocus2['default'])({
  name: 'can-focus-label-tabindex',
  element: 'label',
  mutate: function mutate(element) {
    element.setAttribute('tabindex', '-1');
  }
});
module.exports = exports['default'];
//# sourceMappingURL=focus-label-tabindex.js.map