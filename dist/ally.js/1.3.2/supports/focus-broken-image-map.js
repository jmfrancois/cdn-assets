'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _mediaGifInvalid = require('./media/gif.invalid');

var _mediaGifInvalid2 = _interopRequireDefault(_mediaGifInvalid);

// NOTE: https://github.com/medialize/ally.js/issues/35
// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attr-usemap
exports['default'] = {
  element: 'div',
  mutate: function mutate(element) {
    element.innerHTML = '<map name="broken-image-map-test"><area href="#void" shape="rect" coords="63,19,144,45"></map>' + '<img usemap="#broken-image-map-test" alt="" src="' + _mediaGifInvalid2['default'] + '">';

    return element.querySelector('area');
  }
};
module.exports = exports['default'];
//# sourceMappingURL=focus-broken-image-map.js.map