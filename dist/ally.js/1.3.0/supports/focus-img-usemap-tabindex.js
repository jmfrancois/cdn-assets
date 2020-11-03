'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _mediaGif = require('./media/gif');

var _mediaGif2 = _interopRequireDefault(_mediaGif);

// NOTE: https://github.com/medialize/ally.js/issues/35
// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attr-usemap
exports['default'] = {
  element: 'div',
  mutate: function mutate(element) {
    element.innerHTML = '<map name="image-map-tabindex-test"><area href="#void" shape="rect" coords="63,19,144,45"></map>' + '<img usemap="#image-map-tabindex-test" tabindex="-1" alt="" ' + 'src="' + _mediaGif2['default'] + '">';

    return element.querySelector('img');
  }
};
module.exports = exports['default'];
//# sourceMappingURL=focus-img-usemap-tabindex.js.map