define(['exports', 'module', './visible-area', '../is/focusable'], function (exports, module, _visibleArea, _isFocusable) {
  /*
    trigger a callback once the context element is focusable and is fully visible in the viewport
  */

  'use strict';

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _whenVisibleArea = _interopRequireDefault(_visibleArea);

  var _isFocusable2 = _interopRequireDefault(_isFocusable);

  module.exports = function () {
    var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    var context = _ref.context;
    var callback = _ref.callback;
    var area = _ref.area;

    if (typeof callback !== 'function') {
      throw new TypeError('when/focusable requires options.callback to be a function');
    }

    var filterCallback = function filterCallback(element) {
      if (!(0, _isFocusable2['default'])(element)) {
        return false;
      }

      return callback(element);
    };

    var handle = (0, _whenVisibleArea['default'])({ context: context, callback: filterCallback, area: area });
    var disengage = function disengage() {
      document.body.removeEventListener('focus', disengage, true);
      handle && handle.disengage();
    };

    document.body.addEventListener('focus', disengage, true);

    return { disengage: disengage };
  };
});
//# sourceMappingURL=focusable.js.map