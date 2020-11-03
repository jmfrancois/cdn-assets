'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = collectScrollPositions;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _getParents = require('../get/parents');

var _getParents2 = _interopRequireDefault(_getParents);

function collectScrollPositions(element) {
  var parents = (0, _getParents2['default'])({ context: element });
  var list = parents.slice(1).map(function (element) {
    return {
      element: element,
      scrollTop: element.scrollTop,
      scrollLeft: element.scrollLeft
    };
  });

  return function resetScrollPositions() {
    list.forEach(function (entry) {
      entry.element.scrollTop = entry.scrollTop;
      entry.element.scrollLeft = entry.scrollLeft;
    });
  };
}

module.exports = exports['default'];
//# sourceMappingURL=reset-scrolling.js.map