define(['exports', 'module'], function (exports, module) {
  'use strict';

  module.exports = {
    element: 'div',
    mutate: function mutate(element) {
      element.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">' + '<text tabindex="-1">a</text></svg>';
      return element.querySelector('text');
    }
  };
});
//# sourceMappingURL=focus-svg-tabindex-attribute.js.map