'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _detectFocus = require('./detect-focus');

var _detectFocus2 = _interopRequireDefault(_detectFocus);

var _memorizeResult = require('./memorize-result');

var _memorizeResult2 = _interopRequireDefault(_memorizeResult);

exports['default'] = (0, _memorizeResult2['default'])(function () {
  return (0, _detectFocus2['default'])({
    name: 'can-focus-redirect-legend',
    element: 'fieldset',
    mutate: function mutate(element) {
      element.innerHTML = '<legend>legend</legend><input tabindex="-1"><input tabindex="0">';
    },
    validate: function validate(element) {
      var focus = element.querySelector('legend');
      var focusable = element.querySelector('input[tabindex="-1"]');
      var tabbable = element.querySelector('input[tabindex="0"]');

      focus.focus();
      return document.activeElement === focusable && 'focusable' || document.activeElement === tabbable && 'tabbable' || '';
    }
  });
});
module.exports = exports['default'];
//# sourceMappingURL=focus-redirect-legend.js.map