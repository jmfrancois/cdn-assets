'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _mediaGif = require('./media/gif');

var _mediaGif2 = _interopRequireDefault(_mediaGif);

var _utilPlatform = require('../util/platform');

var _utilPlatform2 = _interopRequireDefault(_utilPlatform);

// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attr-usemap
exports['default'] = {
  element: 'div',
  mutate: function mutate(element) {
    element.innerHTML = '<map name="image-map-tabindex-test">' + '<area href="#void" tabindex="-1" shape="rect" coords="63,19,144,45"></map>' + '<img usemap="#image-map-tabindex-test" alt="" src="' + _mediaGif2['default'] + '">';

    return false;
  },
  validate: function validate(element, _document) {
    if (_utilPlatform2['default'].is.GECKO) {
      // fixes https://github.com/medialize/ally.js/issues/35
      // Firefox loads the DataURI asynchronously, causing a false-negative
      return true;
    }

    var focus = element.querySelector('area');
    focus.focus();
    return _document.activeElement === focus;
  }
};
module.exports = exports['default'];
//# sourceMappingURL=focus-area-tabindex.js.map