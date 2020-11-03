define(['exports', 'module'], function (exports, module) {
  'use strict';

  module.exports = {
    element: 'fieldset',
    mutate: function mutate(element) {
      element.innerHTML = '<legend>legend</legend><p>content</p>';
    }
  };
});
//# sourceMappingURL=focus-fieldset.js.map