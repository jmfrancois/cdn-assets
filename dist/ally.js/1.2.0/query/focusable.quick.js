
// http://www.w3.org/TR/html5/editing.html#focusable
// http://www.w3.org/WAI/PF/aria-practices/#keyboard

'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = queryFocusableQuick;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _selectorFocusable = require('../selector/focusable');

var _selectorFocusable2 = _interopRequireDefault(_selectorFocusable);

var _isFocusable2 = require('../is/focusable');

var _isFocusable3 = _interopRequireDefault(_isFocusable2);

function queryFocusableQuick() {
  var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  var context = _ref.context;
  var includeContext = _ref.includeContext;
  var includeOnlyTabbable = _ref.includeOnlyTabbable;

  var _selector = (0, _selectorFocusable2['default'])();
  var elements = context.querySelectorAll(_selector);
  // the selector potentially matches more than really is focusable

  var _isFocusable = _isFocusable3['default'].rules.except({
    onlyTabbable: includeOnlyTabbable
  });

  var result = [].filter.call(elements, _isFocusable);

  // add context if requested and focusable
  if (includeContext && _isFocusable(context)) {
    result.unshift(context);
  }

  return result;
}

module.exports = exports['default'];
//# sourceMappingURL=focusable.quick.js.map