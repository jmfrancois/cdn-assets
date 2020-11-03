define(['exports', 'module', '../supports/focus-invalid-tabindex', '../supports/focus-tabindex-trailing-characters'], function (exports, module, _supportsFocusInvalidTabindex, _supportsFocusTabindexTrailingCharacters) {
  // determine if an element's tabindex attribute has a valid value

  'use strict';

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _allowsInvalidValue = _interopRequireDefault(_supportsFocusInvalidTabindex);

  var _allowsTrailingCharacters = _interopRequireDefault(_supportsFocusTabindexTrailingCharacters);

  // http://www.w3.org/TR/html5/infrastructure.html#rules-for-parsing-integers
  // NOTE: all browsers agree to allow trailing spaces as well
  var validIntegerPattern = _allowsTrailingCharacters['default'] ? /^\s*(-|\+)?[0-9]+.*$/ : /^\s*(-|\+)?[0-9]+\s*$/;

  module.exports = function (element) {
    if (element === document) {
      element = document.documentElement;
    }

    if (!element || element.nodeType !== Node.ELEMENT_NODE) {
      throw new TypeError('is/valid-tabindex requires an argument of type Element');
    }

    if (!element.hasAttribute('tabindex')) {
      return false;
    }

    // SVGElement does not support tabIndex, so it cannot be considered valid
    if (element.tabIndex === undefined) {
      return false;
    }

    // @browser-issue Gecko https://bugzilla.mozilla.org/show_bug.cgi?id=1128054
    if (_allowsInvalidValue['default']) {
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
});
//# sourceMappingURL=valid-tabindex.js.map