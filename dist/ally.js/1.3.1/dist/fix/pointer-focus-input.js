/*
  Clicking on form field does not necessarily assign it focus in Safari and Firefox on Mac OS X.
  While not a browser bug, it may be considered undesired behavior.

  https://bugs.webkit.org/show_bug.cgi?id=22261
  https://bugs.webkit.org/show_bug.cgi?id=118043

  Note: This behavior can be turned off in Firefox by changing the
  option `accessibility.mouse_focuses_formcontrol` in about:config
*/

'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _getFocusTarget = require('../get/focus-target');

var _getFocusTarget2 = _interopRequireDefault(_getFocusTarget);

var _utilDecorateContext = require('../util/decorate-context');

var _utilDecorateContext2 = _interopRequireDefault(_utilDecorateContext);

var _utilElementMatches = require('../util/element-matches');

var _utilElementMatches2 = _interopRequireDefault(_utilElementMatches);

var _utilPlatform = require('../util/platform');

var _utilPlatform2 = _interopRequireDefault(_utilPlatform);

var engage = undefined;
var disengage = undefined;
// This fix is only relevant to Safari and Firefox on OSX
var relevantToCurrentBrowser = _utilPlatform2['default'].is.OSX && (_utilPlatform2['default'].is.GECKO || _utilPlatform2['default'].is.WEBKIT);

if (!relevantToCurrentBrowser) {
  engage = function () {};
} else {
  (function () {
    var handleMouseDownEvent = function handleMouseDownEvent(event) {
      if (event.defaultPrevented || !(0, _utilElementMatches2['default'])(event.target, 'input, button, button *')) {
        // abort if the mousedown event was cancelled,
        // or we're not dealing with an affected form control
        return;
      }

      var target = (0, _getFocusTarget2['default'])({
        context: event.target
      });

      // we need to set focus AFTER the mousedown finished, otherwise WebKit will ignore the call
      (window.setImmediate || window.setTimeout)(function () {
        target.focus();
      });
    };

    var handleMouseUpEvent = function handleMouseUpEvent(event) {
      if (event.defaultPrevented || !(0, _utilElementMatches2['default'])(event.target, 'label, label *')) {
        // abort if the mouseup event was cancelled,
        // or we're not dealing with a <label>
        return;
      }

      var target = (0, _getFocusTarget2['default'])({
        context: event.target
      });

      if (!target) {
        return;
      }

      target.focus();
    };

    engage = function (element) {
      element.addEventListener('mousedown', handleMouseDownEvent, false);
      // <label> elements redirect focus upon mouseup, not mousedown
      element.addEventListener('mouseup', handleMouseUpEvent, false);
    };

    disengage = function (element) {
      element.removeEventListener('mousedown', handleMouseDownEvent, false);
      element.removeEventListener('mouseup', handleMouseUpEvent, false);
    };
  })();
}

exports['default'] = (0, _utilDecorateContext2['default'])({ engage: engage, disengage: disengage });
module.exports = exports['default'];
//# sourceMappingURL=pointer-focus-input.js.map