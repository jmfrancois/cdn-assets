define(['exports', 'module', '../prototype/window.requestanimationframe', '../is/visible', '../util/visible-area', '../util/context-to-element'], function (exports, module, _prototypeWindowRequestanimationframe, _isVisible, _utilVisibleArea, _utilContextToElement) {
  /*
    execute a callback once an element became fully visible in the viewport
  */

  'use strict';

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _isVisible2 = _interopRequireDefault(_isVisible);

  var _visibleArea = _interopRequireDefault(_utilVisibleArea);

  var _contextToElement = _interopRequireDefault(_utilContextToElement);

  module.exports = function () {
    var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    var context = _ref.context;
    var callback = _ref.callback;
    var area = _ref.area;

    if (typeof callback !== 'function') {
      throw new TypeError('when/visible-area requires options.callback to be a function');
    }

    if (typeof area !== 'number') {
      area = 1;
    }

    var element = (0, _contextToElement['default'])({
      label: 'when/visible-area',
      context: context
    });

    var raf = undefined;
    var evaluate = null;
    var disengage = function disengage() {
      raf && cancelAnimationFrame(raf);
    };

    var predicate = function predicate() {
      return !(0, _isVisible2['default'])(element) || (0, _visibleArea['default'])(element) < area || callback(element) === false;
    };

    var checkPredicate = function checkPredicate() {
      if (predicate()) {
        evaluate();
        return;
      }

      disengage();
    };

    evaluate = function () {
      raf = requestAnimationFrame(checkPredicate);
    };

    evaluate();
    return { disengage: disengage };
  };
});
//# sourceMappingURL=visible-area.js.map