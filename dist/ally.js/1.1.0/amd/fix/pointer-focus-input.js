define(['exports', 'module', '../prototype/element.prototype.matches', '../get/focus-target', '../util/decorate-context', '../util/get-window', '../util/platform'], function (exports, module, _prototypeElementPrototypeMatches, _getFocusTarget, _utilDecorateContext, _utilGetWindow, _utilPlatform) {
  /*
    Clicking on form field does not necessarily assign it focus in Safari and Firefox on Mac OS X.
    While not a browser bug, it may be considered undesired behavior.
  
    https://bugs.webkit.org/show_bug.cgi?id=22261
    https://bugs.webkit.org/show_bug.cgi?id=118043
  
    Note: This behavior can be turned off in Firefox by changing the
    option `accessibility.mouse_focuses_formcontrol` in about:config
  */

  'use strict';

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _polyfillElementPrototypeMatches = _interopRequireDefault(_prototypeElementPrototypeMatches);

  var _getFocusTarget2 = _interopRequireDefault(_getFocusTarget);

  var _decorateContext = _interopRequireDefault(_utilDecorateContext);

  var _getWindow = _interopRequireDefault(_utilGetWindow);

  var _platform = _interopRequireDefault(_utilPlatform);

  var engage = undefined;
  var disengage = undefined;
  // This fix is only relevant to Safari and Firefox on OSX
  var relevantToCurrentBrowser = _platform['default'].is.OSX && (_platform['default'].is.GECKO || _platform['default'].is.WEBKIT);

  if (!relevantToCurrentBrowser) {
    engage = function () {};
  } else {
    (function () {
      var handleMouseDownEvent = function handleMouseDownEvent(event) {
        var _window = (0, _getWindow['default'])(event.target);
        (0, _polyfillElementPrototypeMatches['default'])(_window);
        if (event.defaultPrevented || !event.target.matches('input, button, button *')) {
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
        var _window = (0, _getWindow['default'])(event.target);
        (0, _polyfillElementPrototypeMatches['default'])(_window);
        if (event.defaultPrevented || !event.target.matches('label, label *')) {
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

  module.exports = (0, _decorateContext['default'])({ engage: engage, disengage: disengage });
});
//# sourceMappingURL=pointer-focus-input.js.map