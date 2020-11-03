'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _detectFocus = require('./detect-focus');

var _detectFocus2 = _interopRequireDefault(_detectFocus);

// https://github.com/medialize/ally.js/issues/21
exports['default'] = (0, _detectFocus2['default'])({
  name: 'can-focus-scroll-container-without-overflow',
  element: 'div',
  mutate: function mutate(element) {
    element.setAttribute('style', 'width: 100px; height: 50px;');
    element.innerHTML = '<div style="width: 500px; height: 40px;">scrollable content</div>';
  }
});
module.exports = exports['default'];
//# sourceMappingURL=focus-scroll-container-without-overflow.js.map