define(['exports', 'module', '../util/context-to-element', './focusable.strict', './focusable.quick'], function (exports, module, _utilContextToElement, _focusableStrict, _focusableQuick) {
  // http://www.w3.org/TR/html5/editing.html#focusable
  // http://www.w3.org/WAI/PF/aria-practices/#keyboard

  'use strict';

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _contextToElement = _interopRequireDefault(_utilContextToElement);

  var _queryFocusableStrict = _interopRequireDefault(_focusableStrict);

  var _queryFocusableQuick = _interopRequireDefault(_focusableQuick);

  module.exports = function () {
    var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    var context = _ref.context;
    var includeContext = _ref.includeContext;
    var includeOnlyTabbable = _ref.includeOnlyTabbable;
    var _ref$strategy = _ref.strategy;
    var strategy = _ref$strategy === undefined ? 'quick' : _ref$strategy;

    var element = (0, _contextToElement['default'])({
      label: 'query/focusable',
      resolveDocument: true,
      defaultToDocument: true,
      context: context
    });

    var options = {
      context: element,
      includeContext: includeContext,
      includeOnlyTabbable: includeOnlyTabbable,
      strategy: strategy
    };

    if (strategy === 'quick') {
      return (0, _queryFocusableQuick['default'])(options);
    } else if (strategy === 'strict' || strategy === 'all') {
      return (0, _queryFocusableStrict['default'])(options);
    }

    throw new TypeError('query/focusable requires option.strategy to be one of ["quick", "strict", "all"]');
  };
});
//# sourceMappingURL=focusable.js.map