define(['exports', 'module', './supports-cache'], function (exports, module, _supportsCache) {
  'use strict';

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _cache = _interopRequireDefault(_supportsCache);

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
    wrapper.setAttribute('aria-live', 'off');
    wrapper.setAttribute('aria-busy', 'true');
    wrapper.setAttribute('aria-hidden', 'true');
    document.body.appendChild(wrapper);
    // create dummy element to test focusability of
    var element = typeof options.element === 'string' ? document.createElement(options.element) : options.element();
    // allow callback to further specify dummy element
    var focus = options.mutate && options.mutate(element, wrapper) || element;
    // element needs to be part of the DOM to be focusable
    !element.parentNode && wrapper.appendChild(element);
    // remember what had focus to restore after test
    var previousActiveElement = document.activeElement;
    // test if the element with invalid tabindex can be focused
    focus.focus && focus.focus();
    // validate test's result
    var allowsFocus = options.validate ? options.validate(element) : document.activeElement === focus;
    // restore focus to what it was before test and cleanup
    // IE10 does not redirect focus to <body> when the activeElement is removed
    document.activeElement && document.activeElement.blur();
    previousActiveElement && previousActiveElement.focus() || document.body.focus();
    document.body.removeChild(wrapper);
    return allowsFocus;
  }

  // cache detected support so we don't have to bother screen readers with unstoppable focus changes
  // and flood the console with net::ERR_INVALID_URL errors for audio/video tests

  module.exports = function (options) {
    var value = _cache['default'].get(options.name);
    if (typeof value !== 'boolean') {
      value = detectFocus(options);
      _cache['default'].set(options.name, value);
    }

    return value;
  };
});
//# sourceMappingURL=detect-focus.js.map