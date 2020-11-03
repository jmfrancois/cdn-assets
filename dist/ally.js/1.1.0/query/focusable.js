
// http://www.w3.org/TR/html5/editing.html#focusable
// http://www.w3.org/WAI/PF/aria-practices/#keyboard

'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _utilContextToElement = require('../util/context-to-element');

var _utilContextToElement2 = _interopRequireDefault(_utilContextToElement);

var _focusableStrict = require('./focusable.strict');

var _focusableStrict2 = _interopRequireDefault(_focusableStrict);

var _focusableQuick = require('./focusable.quick');

var _focusableQuick2 = _interopRequireDefault(_focusableQuick);

exports['default'] = function () {
  var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  var context = _ref.context;
  var includeContext = _ref.includeContext;
  var includeOnlyTabbable = _ref.includeOnlyTabbable;
  var _ref$strategy = _ref.strategy;
  var strategy = _ref$strategy === undefined ? 'quick' : _ref$strategy;

  var element = (0, _utilContextToElement2['default'])({
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
    return (0, _focusableQuick2['default'])(options);
  } else if (strategy === 'strict' || strategy === 'all') {
    return (0, _focusableStrict2['default'])(options);
  }

  throw new TypeError('query/focusable requires option.strategy to be one of ["quick", "strict", "all"]');
};

module.exports = exports['default'];
//# sourceMappingURL=focusable.js.map