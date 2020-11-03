'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _detectFocus = require('./detect-focus');

var _detectFocus2 = _interopRequireDefault(_detectFocus);

// NOTE: https://github.com/medialize/ally.js/issues/35
// fixes https://github.com/medialize/ally.js/issues/20
// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attr-ismap
exports['default'] = (0, _detectFocus2['default'])({
  name: 'can-focus-img-ismap',
  element: 'a',
  mutate: function mutate(element) {
    element.href = '#void';
    element.innerHTML = '<img ismap src="data:image/png;base64,broken-image-test" alt="">';
    return element.querySelector('img');
  }
});
module.exports = exports['default'];
//# sourceMappingURL=focus-img-ismap.js.map