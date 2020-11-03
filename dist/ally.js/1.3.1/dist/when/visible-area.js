
/*
  execute a callback once an element became fully visible in the viewport
*/

'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

require('../prototype/window.requestanimationframe');

var _isVisible = require('../is/visible');

var _isVisible2 = _interopRequireDefault(_isVisible);

var _utilVisibleArea = require('../util/visible-area');

var _utilVisibleArea2 = _interopRequireDefault(_utilVisibleArea);

var _utilContextToElement = require('../util/context-to-element');

var _utilContextToElement2 = _interopRequireDefault(_utilContextToElement);

exports['default'] = function () {
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

  var element = (0, _utilContextToElement2['default'])({
    label: 'when/visible-area',
    context: context
  });

  var raf = undefined;
  var evaluate = null;
  var disengage = function disengage() {
    raf && cancelAnimationFrame(raf);
  };

  var predicate = function predicate() {
    return !(0, _isVisible2['default'])(element) || (0, _utilVisibleArea2['default'])(element) < area || callback(element) === false;
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

module.exports = exports['default'];
//# sourceMappingURL=visible-area.js.map