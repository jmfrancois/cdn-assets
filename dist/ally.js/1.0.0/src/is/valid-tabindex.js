
// determine if an element's tabindex attribute has a valid value

import allowsInvalidValue from '../supports/focus-invalid-tabindex';
import allowsTrailingCharacters from '../supports/focus-tabindex-trailing-characters';

// http://www.w3.org/TR/html5/infrastructure.html#rules-for-parsing-integers
// NOTE: all browsers agree to allow trailing spaces as well
const validIntegerPattern = allowsTrailingCharacters ? /^\s*(-|\+)?[0-9]+.*$/ : /^\s*(-|\+)?[0-9]+\s*$/;

export default function(element) {
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
  if (allowsInvalidValue) {
    return true;
  }
  // an element matches the tabindex selector even if its value is invalid
  const tabindex = element.getAttribute('tabindex');
  // IE11 parses tabindex="" as the value "-32768"
  // @browser-issue Trident https://connect.microsoft.com/IE/feedback/details/1072965
  if (tabindex === '-32768') {
    return false;
  }

  return Boolean(tabindex && validIntegerPattern.test(tabindex));
}
