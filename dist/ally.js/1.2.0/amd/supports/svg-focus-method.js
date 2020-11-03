define(['exports', 'module'], function (exports, module) {
  'use strict';

  var _hasElement = typeof Element !== 'undefined';
  var _hasSVGElement = typeof SVGElement !== 'undefined';
  var result = _hasElement && _hasSVGElement && (function () {
    return Boolean(SVGElement.prototype.focus && !SVGElement.prototype.focus._polyfill);
  })();

  module.exports = function () {
    return result;
  };
});
//# sourceMappingURL=svg-focus-method.js.map