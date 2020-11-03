
// http://www.w3.org/TR/html5/editing.html#sequential-focus-navigation-and-the-tabindex-attribute
// http://www.w3.org/WAI/PF/aria-practices/#keyboard

'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _focusable = require('./focusable');

var _focusable2 = _interopRequireDefault(_focusable);

var _isTabbable2 = require('../is/tabbable');

var _isTabbable3 = _interopRequireDefault(_isTabbable2);

exports['default'] = function () {
  var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  var context = _ref.context;
  var includeContext = _ref.includeContext;
  var includeOnlyTabbable = _ref.includeOnlyTabbable;
  var strategy = _ref.strategy;

  var _isTabbable = _isTabbable3['default'].rules.except({
    onlyTabbable: includeOnlyTabbable
  });

  return (0, _focusable2['default'])({
    context: context,
    includeContext: includeContext,
    includeOnlyTabbable: includeOnlyTabbable,
    strategy: strategy
  }).filter(_isTabbable);
};

module.exports = exports['default'];
//# sourceMappingURL=tabbable.js.map