
// Element.prototype.matches may not be available under that name

'use strict';

if (!Element.prototype.matches) {
  // first try to unprefix an existing implementation
  'webkitMatchesSelector mozMatchesSelector msMatchesSelector'.split(' ').some(function (key) {
    if (!Element.prototype[key]) {
      return false;
    }

    Element.prototype.matches = Element.prototype[key];
    return true;
  });
}
//# sourceMappingURL=element.prototype.matches.js.map