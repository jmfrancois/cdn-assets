'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _detectFocus = require('./detect-focus');

var _detectFocus2 = _interopRequireDefault(_detectFocus);

var _memorizeResult = require('./memorize-result');

var _memorizeResult2 = _interopRequireDefault(_memorizeResult);

var _mediaGif = require('./media/gif');

var _mediaGif2 = _interopRequireDefault(_mediaGif);

exports['default'] = (0, _memorizeResult2['default'])(function () {
  return (0, _detectFocus2['default'])({
    name: 'can-focus-redirect-img-usemap',
    element: 'div',
    mutate: function mutate(element) {
      element.innerHTML = '<map name="focus-redirect-img-usemap"><area href="#void" shape="rect" coords="63,19,144,45"></map>' + '<img usemap="#focus-redirect-img-usemap" alt="" ' + 'src="' + _mediaGif2['default'] + '">';
    },
    validate: function validate(element) {
      var focus = element.querySelector('img');
      var target = element.querySelector('area');

      focus.focus();
      return document.activeElement === target;
    }
  });
});
module.exports = exports['default'];
//# sourceMappingURL=focus-redirect-img-usemap.js.map