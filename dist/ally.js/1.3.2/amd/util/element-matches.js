define(['exports', 'module'], function (exports, module) {
  // Element.prototype.matches may be available at a different name
  // https://developer.mozilla.org/en/docs/Web/API/Element/matches

  'use strict';

  module.exports = elementMatches;
  var names = ['matches', 'webkitMatchesSelector', 'mozMatchesSelector', 'msMatchesSelector'];
  var name = null;

  function findMethodName(element) {
    names.some(function (_name) {
      if (!element[_name]) {
        return false;
      }

      name = _name;
      return true;
    });
  }

  function elementMatches(element, selector) {
    if (!name) {
      findMethodName(element);
    }

    return element[name](selector);
  }
});
//# sourceMappingURL=element-matches.js.map