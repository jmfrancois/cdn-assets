'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _mapKeycode = require('../map/keycode');

var _mapKeycode2 = _interopRequireDefault(_mapKeycode);

// Bug 286933 - Key events in the autocomplete popup should be hidden from page scripts
// @browser-issue Gecko https://bugzilla.mozilla.org/show_bug.cgi?id=286933

exports['default'] = function () {
  var map = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  var disengage = undefined;

  var keys = {};
  var mapKeys = Object.keys(map);
  if (!mapKeys.length) {
    throw new TypeError('when/key requires at least one option key');
  }

  mapKeys.forEach(function (key) {
    var code = _mapKeycode2['default'][key] || parseInt(key, 10);
    if (!code || typeof code !== 'number' || isNaN(code)) {
      throw new TypeError('when/key requires option keys to be numeric or references to map/keycode, but "' + key + '" is neither');
    }

    if (typeof map[key] !== 'function') {
      throw new TypeError('when/key requires option.' + key + ' to be a function');
    }

    keys[code] = map[key];
  });

  var handleKeyDown = function handleKeyDown(event) {
    if (event.defaultPrevented) {
      return;
    }

    var callback = keys[event.keyCode];
    if (!callback) {
      return;
    }

    callback.call(this, event, disengage);
  };

  document.documentElement.addEventListener('keydown', handleKeyDown, false);

  disengage = function () {
    document.documentElement.removeEventListener('keydown', handleKeyDown, false);
  };

  return { disengage: disengage };
};

module.exports = exports['default'];
//# sourceMappingURL=key.js.map