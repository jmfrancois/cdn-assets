define(['exports', 'module', '../supports/focus-fieldset-disabled'], function (exports, module, _supportsFocusFieldsetDisabled) {
  // Determine if an element supports the disabled attribute

  'use strict';

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _canFocusDisabledFieldset = _interopRequireDefault(_supportsFocusFieldsetDisabled);

  // http://www.w3.org/TR/html5/disabled-elements.html#concept-element-disabled
  var disabledElementsPattern = /^(input|select|textarea|button|fieldset)$/;

  // fieldset[tabindex=0][disabled] should not be focusable, but Blink and WebKit disagree
  // @specification http://www.w3.org/TR/html5/disabled-elements.html#concept-element-disabled
  // @browser-issue Chromium https://crbug.com/453847
  // @browser-issue WebKit https://bugs.webkit.org/show_bug.cgi?id=141086
  if (_canFocusDisabledFieldset['default']) {
    disabledElementsPattern = /^(input|select|textarea|button)$/;
  }

  module.exports = function (element) {
    if (!element || element.nodeType !== Node.ELEMENT_NODE) {
      throw new TypeError('is/native-disabled-supported requires an argument of type Element');
    }

    var nodeName = element.nodeName.toLowerCase();
    return Boolean(disabledElementsPattern.test(nodeName));
  };
});
//# sourceMappingURL=native-disabled-supported.js.map