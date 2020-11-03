
// determine if an element's tabindex attribute has a valid value

'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _utilContextToElement = require('../util/context-to-element');

var _utilContextToElement2 = _interopRequireDefault(_utilContextToElement);

var _supportsSupports = require('../supports/supports');

var _supportsSupports2 = _interopRequireDefault(_supportsSupports);

var supports = undefined;

// https://www.w3.org/TR/html5/infrastructure.html#rules-for-parsing-integers
// NOTE: all browsers agree to allow trailing spaces as well
var validIntegerPatternNoTrailing = /^\s*(-|\+)?[0-9]+\s*$/;
var validIntegerPatternWithTrailing = /^\s*(-|\+)?[0-9]+.*$/;

exports['default'] = function (context) {
  if (!supports) {
    supports = (0, _supportsSupports2['default'])();
  }

  var validIntegerPattern = supports.focusTabindexTrailingCharacters ? validIntegerPatternWithTrailing : validIntegerPatternNoTrailing;

  var element = (0, _utilContextToElement2['default'])({
    label: 'is/valid-tabindex',
    resolveDocument: true,
    context: context
  });

  if (!element.hasAttribute('tabindex')) {
    return false;
  }

  // SVGElement does not support tabIndex, so it cannot be considered valid
  if (element.tabIndex === undefined) {
    return false;
  }

  // @browser-issue Gecko https://bugzilla.mozilla.org/show_bug.cgi?id=1128054
  if (supports.focusInvalidTabindex) {
    return true;
  }
  // an element matches the tabindex selector even if its value is invalid
  var tabindex = element.getAttribute('tabindex');
  // IE11 parses tabindex="" as the value "-32768"
  // @browser-issue Trident https://connect.microsoft.com/IE/feedback/details/1072965
  if (tabindex === '-32768') {
    return false;
  }

  return Boolean(tabindex && validIntegerPattern.test(tabindex));
};

module.exports = exports['default'];
//# sourceMappingURL=valid-tabindex.js.map