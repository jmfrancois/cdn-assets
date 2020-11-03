define(['exports', 'module', './visible-area', '../is/focusable', '../util/context-to-element', '../util/get-document'], function (exports, module, _visibleArea, _isFocusable, _utilContextToElement, _utilGetDocument) {
  /*
    trigger a callback once the context element is focusable and is fully visible in the viewport
  */

  'use strict';

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _whenVisibleArea = _interopRequireDefault(_visibleArea);

  var _isFocusable2 = _interopRequireDefault(_isFocusable);

  var _contextToElement = _interopRequireDefault(_utilContextToElement);

  var _getDocument = _interopRequireDefault(_utilGetDocument);

  module.exports = function () {
    var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    var context = _ref.context;
    var callback = _ref.callback;
    var area = _ref.area;

    if (typeof callback !== 'function') {
      throw new TypeError('when/focusable requires options.callback to be a function');
    }

    var element = (0, _contextToElement['default'])({
      label: 'when/focusable',
      context: context
    });

    var filterCallback = function filterCallback(target) {
      if (!(0, _isFocusable2['default'])(target)) {
        return false;
      }

      return callback(target);
    };

    var _document = (0, _getDocument['default'])(element);
    var handle = (0, _whenVisibleArea['default'])({ context: element, callback: filterCallback, area: area });
    var disengage = function disengage() {
      _document.removeEventListener('focus', disengage, true);
      handle && handle.disengage();
    };

    _document.addEventListener('focus', disengage, true);

    return { disengage: disengage };
  };
});
//# sourceMappingURL=focusable.js.map