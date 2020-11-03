define(['exports', 'module', './detect-focus', './memorize-result'], function (exports, module, _detectFocus, _memorizeResult) {
  'use strict';

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _detectFocus2 = _interopRequireDefault(_detectFocus);

  var _memorizeResult2 = _interopRequireDefault(_memorizeResult);

  // form[tabindex=0][disabled] should be focusable as the
  // specification doesn't know the disabled attribute on the form element
  // @specification http://www.w3.org/TR/html5/forms.html#the-form-element
  module.exports = (0, _memorizeResult2['default'])(function () {
    return (0, _detectFocus2['default'])({
      name: 'can-focus-disabled-form',
      element: 'form',
      mutate: function mutate(element) {
        element.setAttribute('tabindex', 0);
        element.setAttribute('disabled', 'disabled');
      }
    });
  });
});
//# sourceMappingURL=focus-form-disabled.js.map