define(['exports', 'module'], function (exports, module) {
  // form[tabindex=0][disabled] should be focusable as the
  // specification doesn't know the disabled attribute on the form element
  // @specification http://www.w3.org/TR/html5/forms.html#the-form-element
  'use strict';

  module.exports = {
    element: 'form',
    mutate: function mutate(element) {
      element.setAttribute('tabindex', 0);
      element.setAttribute('disabled', 'disabled');
    }
  };
});
//# sourceMappingURL=focus-form-disabled.js.map