define(['exports', 'module'], function (exports, module) {
  'use strict';

  module.exports = {
    element: 'details',
    mutate: function mutate(element) {
      element.innerHTML = '<summary>foo</summary><p>content</p>';
      return element.firstElementChild;
    }
  };
});
//# sourceMappingURL=focus-summary.js.map