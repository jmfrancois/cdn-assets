
// Determine if an element is disabled (i.e. not editable)

'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _utilContextToElement = require('../util/context-to-element');

var _utilContextToElement2 = _interopRequireDefault(_utilContextToElement);

var _getParents = require('../get/parents');

var _getParents2 = _interopRequireDefault(_getParents);

var _nativeDisabledSupported = require('./native-disabled-supported');

var _nativeDisabledSupported2 = _interopRequireDefault(_nativeDisabledSupported);

var _disabledSupports = require('./disabled.supports');

var _disabledSupports2 = _interopRequireDefault(_disabledSupports);

var supports = undefined;

function isDisabledFieldset(element) {
  var nodeName = element.nodeName.toLowerCase();
  return nodeName === 'fieldset' && element.disabled;
}

function isDisabledForm(element) {
  var nodeName = element.nodeName.toLowerCase();
  return nodeName === 'form' && element.disabled;
}

exports['default'] = function (context) {
  if (!supports) {
    supports = (0, _disabledSupports2['default'])();
  }

  var element = (0, _utilContextToElement2['default'])({
    label: 'is/disabled',
    context: context
  });

  if (element.hasAttribute('data-ally-disabled')) {
    // treat ally's element/disabled like the DOM native element.disabled
    return true;
  }

  if (!(0, _nativeDisabledSupported2['default'])(element)) {
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

module.exports = exports['default'];
//# sourceMappingURL=disabled.js.map