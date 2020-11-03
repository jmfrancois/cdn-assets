/*
  Children of focusable elements with display:flex are focusable.
  Because focus can be given to focusable (not tabbable) elements
  by mouse, we have to counter this behavior, so the correct element
  becomes the activeElement (i.e. receives focus).

  Example:
    <div tabindex="-1" style="display:flex">
      <span>I would receive focus</span>
    </div>

  This (wrong) behavior was observed in Internet Explorer 10 and 11.
  It is fixed in IE12 (Win10 IE Tec Preview)
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

var _utilPlatform = require('../util/platform');

var _utilPlatform2 = _interopRequireDefault(_utilPlatform);

var engage = undefined;
var disengage = undefined;
// This fix is only relevant to IE10 (Trident/6) and IE11 (Trident/7)
var relevantToCurrentBrowser = _utilPlatform2['default'].is.TRIDENT && (_utilPlatform2['default'].is.IE10 || _utilPlatform2['default'].is.IE11);

if (!relevantToCurrentBrowser) {
  engage = function () {};
} else {
  (function () {
    var handleBeforeFocusEvent = function handleBeforeFocusEvent(event) {
      // find the element that would receive focus
      var target = (0, _getFocusTarget2['default'])({
        context: event.target,
        except: {
          flexbox: true,
          scrollable: true
        }
      });

      if (!target || target === event.target) {
        // there's nothing to focus, or we're focusing the element clicked on
        return;
      }

      window.setImmediate(function () {
        target.focus();
      });

      // hide all children, because hidden elements can't get focus
      // remember previous element style (not necessarily computed style)
      // to undo hiding later. Reset transitions as well, in case visibility
      // is to be transitioned. This will effectively kill all transitions
      // that are executed on mousedown / :active
      var reverse = [].map.call(target.children, function (element) {
        var visibility = element.style.visibility || '';
        var transition = element.style.transition || '';
        element.style.visibility = 'hidden';
        element.style.transition = 'none';
        return [element, visibility, transition];
      });

      // add cleanup (undo hide) to the RunLoop
      window.setImmediate(function () {
        reverse.forEach(function (item) {
          item[0].style.visibility = item[1];
          item[0].style.transition = item[2];
        });
      });
    };

    engage = function (element) {
      // WebDriver does not reliably dispatch PointerEvents so we'll go with
      // mousedown, which shouldn't be a problem since we're targeting the
      // focus handling which immediately follows mousedown.
      element.addEventListener('mousedown', handleBeforeFocusEvent, true);
    };

    disengage = function (element) {
      element.removeEventListener('mousedown', handleBeforeFocusEvent, true);
    };
  })();
}

exports['default'] = (0, _utilDecorateContext2['default'])({ engage: engage, disengage: disengage });
module.exports = exports['default'];
//# sourceMappingURL=pointer-focus-children.js.map