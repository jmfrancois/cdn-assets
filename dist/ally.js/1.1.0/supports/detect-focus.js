'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _supportsCache = require('./supports-cache');

var _supportsCache2 = _interopRequireDefault(_supportsCache);

// options.element:
//  {string} element name
// options.mutate: (optional)
//  {function} callback(element, wrapper) to manipulate element prior to focus-test.
//             Can return DOMElement to define focus target (default: element)
// options.validate: (optional)
//  {function} callback(element) to manipulate test-result
function detectFocus(options) {
  // wrap tests in an element hidden from screen readers to prevent them
  // from announcing focus, which can be quite irritating to the user
  var wrapper = document.createElement('div');
  wrapper.setAttribute('style', 'position:fixed; position:absolute; top:0; left:-2px; width:1px; height:1px; overflow:hidden;');
  wrapper.setAttribute('aria-live', 'off');
  wrapper.setAttribute('aria-busy', 'true');
  wrapper.setAttribute('aria-hidden', 'true');
  document.body.appendChild(wrapper);
  // create dummy element to test focusability of
  var element = typeof options.element === 'string' ? document.createElement(options.element) : options.element(wrapper);
  // allow callback to further specify dummy element
  var focus = options.mutate && options.mutate(element, wrapper) || element;
  // element needs to be part of the DOM to be focusable
  !element.parentNode && wrapper.appendChild(element);
  // remember what had focus to restore after test
  var previousActiveElement = document.activeElement;
  // remember scroll positions to restore after test
  var previousScrollTop = window.scrollTop;
  var previousScrollLeft = window.scrollLeft;
  var previousBodyScrollTop = document.body.scrollTop;
  var previousBodyScrollLeft = document.body.scrollLeft;
  // test if the element with invalid tabindex can be focused
  focus.focus && focus.focus();
  // validate test's result
  var allowsFocus = options.validate ? options.validate(element) : document.activeElement === focus;
  // restore focus to what it was before test and cleanup
  // IE10 does not redirect focus to <body> when the activeElement is removed
  document.activeElement && document.activeElement.blur();
  previousActiveElement && previousActiveElement.focus() || document.body.focus();
  document.body.removeChild(wrapper);
  // restore scroll position
  window.scrollTop !== previousScrollTop && (window.scrollTop = previousScrollTop);
  window.scrollLeft !== previousScrollLeft && (window.scrollLeft = previousScrollLeft);
  document.body.scrollTop !== previousBodyScrollTop && (document.body.scrollTop = previousBodyScrollTop);
  document.body.scrollLeft !== previousBodyScrollLeft && (document.body.scrollLeft = previousBodyScrollLeft);
  return allowsFocus;
}

// cache detected support so we don't have to bother screen readers with unstoppable focus changes

exports['default'] = function (options) {
  var value = _supportsCache2['default'].get(options.name);
  if (value === undefined) {
    value = detectFocus(options);
    _supportsCache2['default'].set(options.name, value);
  }

  return value;
};

module.exports = exports['default'];
//# sourceMappingURL=detect-focus.js.map