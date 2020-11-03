'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _isActiveElement = require('../is/active-element');

var _isActiveElement2 = _interopRequireDefault(_isActiveElement);

var _queryTabsequence = require('../query/tabsequence');

var _queryTabsequence2 = _interopRequireDefault(_queryTabsequence);

var _whenKey = require('../when/key');

var _whenKey2 = _interopRequireDefault(_whenKey);

exports['default'] = function () {
  var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  var context = _ref.context;

  if (!context) {
    context = document.documentElement;
  }

  // Make sure the supports tests are run before intercepting the Tab key,
  // or IE10 and IE11 will fail to process the first Tab key event. Not
  // limiting this warm-up to IE because it may be a problem elsewhere, too.
  (0, _queryTabsequence2['default'])();

  return (0, _whenKey2['default'])({
    '?shift+tab': function shiftTab(event) {
      // we're completely taking over the Tab key handling
      event.preventDefault();

      var sequence = (0, _queryTabsequence2['default'])({
        context: context
      });

      var backward = event.shiftKey;
      var first = sequence[0];
      var last = sequence[sequence.length - 1];

      // wrap around first to last, last to first
      var source = backward ? first : last;
      var target = backward ? last : first;
      if ((0, _isActiveElement2['default'])(source)) {
        target.focus();
        return;
      }

      // find current position in tabsequence
      var currentIndex = undefined;
      var found = sequence.some(function (element, index) {
        if (!(0, _isActiveElement2['default'])(element)) {
          return false;
        }

        currentIndex = index;
        return true;
      });

      if (!found) {
        // redirect to first as we're not in our tabsequence
        first.focus();
        return;
      }

      // shift focus to previous/next element in the sequence
      var offset = backward ? -1 : 1;
      sequence[currentIndex + offset].focus();
    }
  });
};

module.exports = exports['default'];
//# sourceMappingURL=tab-focus.js.map