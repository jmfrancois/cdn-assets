define(['exports', 'module', '../util/context-to-element', '../supports/supports'], function (exports, module, _utilContextToElement, _supportsSupports) {
  // Determine if an element supports the disabled attribute

  'use strict';

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _contextToElement = _interopRequireDefault(_utilContextToElement);

  var _supports2 = _interopRequireDefault(_supportsSupports);

  var supports = undefined;

  // https://www.w3.org/TR/html5/disabled-elements.html#concept-element-disabled
  var disabledElementsPattern = undefined;
  var disabledElements = {
    input: true,
    select: true,
    textarea: true,
    button: true,
    fieldset: true,
    form: true
  };

  module.exports = function (context) {
    if (!supports) {
      supports = (0, _supports2['default'])();

      if (supports.focusFieldsetDisabled) {
        delete disabledElements.fieldset;
      }

      if (supports.focusFormDisabled) {
        delete disabledElements.form;
      }

      disabledElementsPattern = new RegExp('^(' + Object.keys(disabledElements).join('|') + ')$');
    }

    var element = (0, _contextToElement['default'])({
      label: 'is/native-disabled-supported',
      context: context
    });

    var nodeName = element.nodeName.toLowerCase();
    return Boolean(disabledElementsPattern.test(nodeName));
  };
});
//# sourceMappingURL=native-disabled-supported.js.map