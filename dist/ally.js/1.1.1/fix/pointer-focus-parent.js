/*
  Clicking on a link that has a focusable element in its ancestry [tabindex="-1"],
  can lead to that parental element gaining focus, instead of the link.

  Example:
    <div tabindex="-1">
      <a href="#foo">click me</a>
    </div>

  This (wrong) behavior was observed in Chrome 38, iOS8, Safari 6.2, WebKit r175131
  It is not a problem in Firefox 33, Internet Explorer 11, Chrome 39.
*/

'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _getFocusTarget = require('../get/focus-target');

var _getFocusTarget2 = _interopRequireDefault(_getFocusTarget);

var _isValidTabindex = require('../is/valid-tabindex');

var _isValidTabindex2 = _interopRequireDefault(_isValidTabindex);

var _utilDecorateContext = require('../util/decorate-context');

var _utilDecorateContext2 = _interopRequireDefault(_utilDecorateContext);

var _utilPlatform = require('../util/platform');

var _utilPlatform2 = _interopRequireDefault(_utilPlatform);

var engage = undefined;
var disengage = undefined;
// This fix is only relevant to WebKit
var relevantToCurrentBrowser = _utilPlatform2['default'].is.WEBKIT;

if (!relevantToCurrentBrowser) {
  engage = function () {};
} else {
  (function () {
    // add [tabindex="0"] to the (focusable) element that is about to be clicked
    // if it does not already have an explicit tabindex (attribute).
    // By applying an explicit tabindex, WebKit will not go look for
    // the first valid tabindex in the element's parents.
    var handleBeforeFocusEvent = function handleBeforeFocusEvent(event) {
      // find the element that would receive focus
      var target = (0, _getFocusTarget2['default'])({ context: event.target });
      if (!target || target.hasAttribute('tabindex') && (0, _isValidTabindex2['default'])(target)) {
        // there's nothing to focus, or the element already has tabindex, we're good
        return;
      }

      // assign explicit tabindex, as implicit tabindex is the problem
      target.setAttribute('tabindex', 0);

      // add cleanup to the RunLoop
      (window.setImmediate || window.setTimeout)(function () {
        target.removeAttribute('tabindex');
      }, 0);
    };

    engage = function (element) {
      element.addEventListener('mousedown', handleBeforeFocusEvent, true);
      element.addEventListener('touchstart', handleBeforeFocusEvent, true);
    };

    disengage = function (element) {
      element.removeEventListener('mousedown', handleBeforeFocusEvent, true);
      element.removeEventListener('touchstart', handleBeforeFocusEvent, true);
    };
  })();
}

exports['default'] = (0, _utilDecorateContext2['default'])({ engage: engage, disengage: disengage });
module.exports = exports['default'];
//# sourceMappingURL=pointer-focus-parent.js.map