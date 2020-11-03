
// http://www.w3.org/TR/html5/editing.html#sequential-focus-navigation-and-the-tabindex-attribute
// http://www.w3.org/WAI/PF/aria-practices/#keyboard

'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _tabbable = require('./tabbable');

var _tabbable2 = _interopRequireDefault(_tabbable);

var _utilSortElementsByTabindex = require('../util/sort-elements-by-tabindex');

var _utilSortElementsByTabindex2 = _interopRequireDefault(_utilSortElementsByTabindex);

function moveContextToBeginning(elements, context) {
  var pos = elements.indexOf(context);
  if (pos > 0) {
    var tmp = elements.splice(pos, 1);
    return tmp.concat(elements);
  }

  return elements;
}

exports['default'] = function () {
  var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  var context = _ref.context;
  var includeContext = _ref.includeContext;
  var strategy = _ref.strategy;

  var elements = (0, _tabbable2['default'])({ context: context, includeContext: includeContext, strategy: strategy });
  elements = (0, _utilSortElementsByTabindex2['default'])(elements);

  if (includeContext) {
    // if we include the context itself, it has to be the first
    // element of the sequence
    elements = moveContextToBeginning(elements, context);
  }

  return elements;
};

module.exports = exports['default'];
//# sourceMappingURL=tabsequence.js.map