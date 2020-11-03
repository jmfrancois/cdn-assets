define(['exports', 'module', '../util/context-to-element', '../get/parents', './native-disabled-supported', './disabled.supports'], function (exports, module, _utilContextToElement, _getParents, _nativeDisabledSupported, _disabledSupports) {
  // Determine if an element is disabled (i.e. not editable)

  'use strict';

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _contextToElement = _interopRequireDefault(_utilContextToElement);

  var _getParents2 = _interopRequireDefault(_getParents);

  var _isNativeDisabledSupported = _interopRequireDefault(_nativeDisabledSupported);

  var _supports2 = _interopRequireDefault(_disabledSupports);

  var supports = undefined;

  function isDisabledFieldset(element) {
    var nodeName = element.nodeName.toLowerCase();
    return nodeName === 'fieldset' && element.disabled;
  }

  function isDisabledForm(element) {
    var nodeName = element.nodeName.toLowerCase();
    return nodeName === 'form' && element.disabled;
  }

  module.exports = function (context) {
    if (!supports) {
      supports = (0, _supports2['default'])();
    }

    var element = (0, _contextToElement['default'])({
      label: 'is/disabled',
      context: context
    });

    if (element.hasAttribute('data-ally-disabled')) {
      // treat ally's element/disabled like the DOM native element.disabled
      return true;
    }

    if (!(0, _isNativeDisabledSupported['default'])(element)) {
      // non-form elements do not support the disabled attribute
      return false;
    }

    if (element.disabled) {
      // the element itself is disabled
      return true;
    }

    var parents = (0, _getParents2['default'])({ context: element });
    if (parents.some(isDisabledFieldset)) {
      // a parental <fieldset> is disabld and inherits the state onto this element
      return true;
    }

    if (!supports.canFocusDisabledForm && parents.some(isDisabledForm)) {
      // a parental <form> is disabld and inherits the state onto this element
      return true;
    }

    return false;
  };
});
//# sourceMappingURL=disabled.js.map