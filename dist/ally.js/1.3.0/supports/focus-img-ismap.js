'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _mediaGif = require('./media/gif');

var _mediaGif2 = _interopRequireDefault(_mediaGif);

// NOTE: https://github.com/medialize/ally.js/issues/35
// fixes https://github.com/medialize/ally.js/issues/20
// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attr-ismap
exports['default'] = {
  element: 'a',
  mutate: function mutate(element) {
    element.href = '#void';
    element.innerHTML = '<img ismap src="' + _mediaGif2['default'] + '" alt="">';
    return element.querySelector('img');
  }
};
module.exports = exports['default'];
//# sourceMappingURL=focus-img-ismap.js.map