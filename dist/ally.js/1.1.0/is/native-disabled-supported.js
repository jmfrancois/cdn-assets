
// Determine if an element supports the disabled attribute

'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _utilContextToElement = require('../util/context-to-element');

var _utilContextToElement2 = _interopRequireDefault(_utilContextToElement);

var _nativeDisabledSupportedSupports = require('./native-disabled-supported.supports');

var _nativeDisabledSupportedSupports2 = _interopRequireDefault(_nativeDisabledSupportedSupports);

var supports = undefined;

// http://www.w3.org/TR/html5/disabled-elements.html#concept-element-disabled
var disabledElementsPattern = undefined;
var disabledElements = {
  input: true,
  select: true,
  textarea: true,
  button: true,
  fieldset: true,
  form: true
};

exports['default'] = function (context) {
  if (!supports) {
    supports = (0, _nativeDisabledSupportedSupports2['default'])();

    if (supports.canFocusDisabledFieldset) {
      delete disabledElements.fieldset;
    }

    if (supports.canFocusDisabledForm) {
      delete disabledElements.form;
    }

    disabledElementsPattern = new RegExp('^(' + Object.keys(disabledElements).join('|') + ')$');
  }

  var element = (0, _utilContextToElement2['default'])({
    label: 'is/native-disabled-supported',
    context: context
  });

  var nodeName = element.nodeName.toLowerCase();
  return Boolean(disabledElementsPattern.test(nodeName));
};

module.exports = exports['default'];
//# sourceMappingURL=native-disabled-supported.js.map