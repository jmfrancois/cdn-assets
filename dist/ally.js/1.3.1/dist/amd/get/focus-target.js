define(['exports', 'module', './focus-redirect-target', '../get/parents', '../is/focusable', '../util/context-to-element'], function (exports, module, _focusRedirectTarget, _getParents, _isFocusable, _utilContextToElement) {
  /*
    Identify the first focusable element in the element's ancestry, including itself
  */

  'use strict';

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _getFocusRedirectTarget = _interopRequireDefault(_focusRedirectTarget);

  var _getParents2 = _interopRequireDefault(_getParents);

  var _isFocusable2 = _interopRequireDefault(_isFocusable);

  var _contextToElement = _interopRequireDefault(_utilContextToElement);

  module.exports = function () {
    var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    var context = _ref.context;
    var except = _ref.except;

    var element = (0, _contextToElement['default'])({
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

      result = (0, _getFocusRedirectTarget['default'])({
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
});
//# sourceMappingURL=focus-target.js.map