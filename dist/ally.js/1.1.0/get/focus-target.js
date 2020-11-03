
/*
  Identify the first focusable element in the element's ancestry, including itself
*/

'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _focusRedirectTarget = require('./focus-redirect-target');

var _focusRedirectTarget2 = _interopRequireDefault(_focusRedirectTarget);

var _getParents = require('../get/parents');

var _getParents2 = _interopRequireDefault(_getParents);

var _isFocusable = require('../is/focusable');

var _isFocusable2 = _interopRequireDefault(_isFocusable);

var _utilContextToElement = require('../util/context-to-element');

var _utilContextToElement2 = _interopRequireDefault(_utilContextToElement);

exports['default'] = function () {
  var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  var context = _ref.context;
  var except = _ref.except;

  var element = (0, _utilContextToElement2['default'])({
    label: 'get/focus-target',
    context: context
  });

  var result = null;
  var getTarget = function getTarget(_element) {
    var focusable = _isFocusable2['default'].rules({
      context: _element,
      except: except
    });

    if (focusable) {
      result = _element;
      return true;
    }

    result = (0, _focusRedirectTarget2['default'])({
      context: _element,
      skipFocusable: true
    });

    return Boolean(result);
  };

  if (getTarget(element)) {
    return result;
  }

  (0, _getParents2['default'])({ context: element }).slice(1).some(getTarget);
  return result;
};

module.exports = exports['default'];
//# sourceMappingURL=focus-target.js.map