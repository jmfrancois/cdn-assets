'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _detectFocus = require('./detect-focus');

var _detectFocus2 = _interopRequireDefault(_detectFocus);

var _memorizeResult = require('./memorize-result');

var _memorizeResult2 = _interopRequireDefault(_memorizeResult);

// form[tabindex=0][disabled] should be focusable as the
// specification doesn't know the disabled attribute on the form element
// @specification http://www.w3.org/TR/html5/forms.html#the-form-element
exports['default'] = (0, _memorizeResult2['default'])(function () {
  return (0, _detectFocus2['default'])({
    name: 'can-focus-disabled-form',
    element: 'form',
    mutate: function mutate(element) {
      element.setAttribute('tabindex', 0);
      element.setAttribute('disabled', 'disabled');
    }
  });
});
module.exports = exports['default'];
//# sourceMappingURL=focus-form-disabled.js.map