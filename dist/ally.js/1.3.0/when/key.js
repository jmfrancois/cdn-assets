'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _keyBinding = require('./key.binding');

var _keyBinding2 = _interopRequireDefault(_keyBinding);

var _utilNodeArray = require('../util/node-array');

var _utilNodeArray2 = _interopRequireDefault(_utilNodeArray);

var _utilComparePosition = require('../util/compare-position');

// Bug 286933 - Key events in the autocomplete popup should be hidden from page scripts
// @browser-issue Gecko https://bugzilla.mozilla.org/show_bug.cgi?id=286933

exports['default'] = function () {
  var map = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  var bindings = {};

  var context = (0, _utilNodeArray2['default'])(map.context)[0] || document.documentElement;
  delete map.context;
  var filter = (0, _utilNodeArray2['default'])(map.filter);
  delete map.filter;

  var mapKeys = Object.keys(map);
  if (!mapKeys.length) {
    throw new TypeError('when/key requires at least one option key');
  }

  var registerBinding = function registerBinding(event) {
    event.keyCodes.forEach(function (code) {
      if (!bindings[code]) {
        bindings[code] = [];
      }

      bindings[code].push(event);
    });
  };

  mapKeys.forEach(function (text) {
    if (typeof map[text] !== 'function') {
      throw new TypeError('when/key requires option["' + text + '"] to be a function');
    }

    var addCallback = function addCallback(event) {
      event.callback = map[text];
      return event;
    };

    (0, _keyBinding2['default'])(text).map(addCallback).forEach(registerBinding);
  });

  var handleKeyDown = function handleKeyDown(event) {
    if (event.defaultPrevented) {
      return;
    }

    if (filter.length) {
      // ignore elements within the exempted sub-trees
      var isParentOfElement = (0, _utilComparePosition.getParentComparator)({ element: event.target, includeSelf: true });
      if (filter.some(isParentOfElement)) {
        return;
      }
    }

    var key = event.keyCode || event.which;
    if (!bindings[key]) {
      return;
    }

    bindings[key].forEach(function (_event) {
      if (!_event.matchModifiers(event)) {
        return;
      }

      _event.callback.call(context, event, disengage);
    });
  };

  context.addEventListener('keydown', handleKeyDown, false);

  var disengage = function disengage() {
    context.removeEventListener('keydown', handleKeyDown, false);
  };

  return { disengage: disengage };
};

module.exports = exports['default'];
//# sourceMappingURL=key.js.map