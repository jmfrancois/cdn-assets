define(['exports', 'module', './tabbable', '../util/sort-elements-by-tabindex'], function (exports, module, _tabbable, _utilSortElementsByTabindex) {
  // http://www.w3.org/TR/html5/editing.html#sequential-focus-navigation-and-the-tabindex-attribute
  // http://www.w3.org/WAI/PF/aria-practices/#keyboard

  'use strict';

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _queryTabbable = _interopRequireDefault(_tabbable);

  var _sortTabindex = _interopRequireDefault(_utilSortElementsByTabindex);

  function moveContextToBeginning(elements, context) {
    var pos = elements.indexOf(context);
    if (pos > 0) {
      var tmp = elements.splice(pos, 1);
      return tmp.concat(elements);
    }

    return elements;
  }

  module.exports = function () {
    var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    var context = _ref.context;
    var includeContext = _ref.includeContext;
    var strategy = _ref.strategy;

    var elements = (0, _queryTabbable['default'])({ context: context, includeContext: includeContext, strategy: strategy });
    elements = (0, _sortTabindex['default'])(elements);

    if (includeContext) {
      // if we include the context itself, it has to be the first
      // element of the sequence
      elements = moveContextToBeginning(elements, context);
    }

    return elements;
  };
});
//# sourceMappingURL=tabsequence.js.map