'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _hasElement = typeof Element !== 'undefined';
var _hasSVGElement = typeof SVGElement !== 'undefined';
var result = _hasElement && _hasSVGElement && (function () {
  return Boolean(SVGElement.prototype.focus && !SVGElement.prototype.focus._polyfill);
})();

exports['default'] = function () {
  return result;
};

module.exports = exports['default'];
//# sourceMappingURL=svg-focus-method.js.map