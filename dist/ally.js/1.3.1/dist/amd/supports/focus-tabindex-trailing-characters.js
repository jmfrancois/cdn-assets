define(['exports', 'module'], function (exports, module) {
  // Firefox allows *any* value and treats invalid values like tabindex="-1"
  // @browser-issue Gecko https://bugzilla.mozilla.org/show_bug.cgi?id=1128054
  'use strict';

  module.exports = {
    element: 'div',
    mutate: function mutate(element) {
      element.setAttribute('tabindex', '3x');
    }
  };
});
//# sourceMappingURL=focus-tabindex-trailing-characters.js.map