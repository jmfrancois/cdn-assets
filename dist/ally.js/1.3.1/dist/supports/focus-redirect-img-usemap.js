'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _mediaGif = require('./media/gif');

var _mediaGif2 = _interopRequireDefault(_mediaGif);

exports['default'] = {
  element: 'div',
  mutate: function mutate(element) {
    element.innerHTML = '<map name="focus-redirect-img-usemap"><area href="#void" shape="rect" coords="63,19,144,45"></map>' + '<img usemap="#focus-redirect-img-usemap" alt="" ' + 'src="' + _mediaGif2['default'] + '">';

    // focus the <img>, not the <div>
    return element.querySelector('img');
  },
  validate: function validate(element, _document) {
    var target = element.querySelector('area');
    return _document.activeElement === target;
  }
};
module.exports = exports['default'];
//# sourceMappingURL=focus-redirect-img-usemap.js.map