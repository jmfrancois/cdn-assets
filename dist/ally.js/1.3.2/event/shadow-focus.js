
/*
  Utility to observe focus changes within ShadowDOMs.

  USAGE:
    engage();
    document.body.addEventListener('shadow-focus', function(event) {
      // event.detail.elements: complete focus ancestry (array of nodes)
      // event.detail.active: the actually focused element within the ShadowDOM
      // event.detail.hosts: the shadow host ancestry of the active element
    }, false);

  Alternate implementation: https://github.com/cdata/focus-observer
*/

'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _getActiveElements = require('../get/active-elements');

var _getActiveElements2 = _interopRequireDefault(_getActiveElements);

var _utilDecorateService = require('../util/decorate-service');

var _utilDecorateService2 = _interopRequireDefault(_utilDecorateService);

var engage = undefined;
var disengage = undefined;

if (typeof document === 'undefined' || !document.documentElement.createShadowRoot) {
  // no need to initialize any of this if we don't have ShadowDOM available
  engage = disengage = function () {};
} else {
  (function () {
    var blurTimer = undefined;
    var blurElement = undefined;

    var handleElementBlurEvent = function handleElementBlurEvent() {
      stopHandleElementBlurEvent();
      // abort any handlers that come from document blur handler
      (window.clearImmediate || window.clearTimeout)(blurTimer);
      blurTimer = (window.setImmediate || window.setTimeout)(function () {
        handleFocusChange();
      });
    };

    var observeElementBlurEvent = function observeElementBlurEvent(element) {
      // call us when we're leaving the element
      element.addEventListener('blur', handleElementBlurEvent, true);
      blurElement = element;
    };

    var stopHandleElementBlurEvent = function stopHandleElementBlurEvent() {
      // once() - sometimes I miss jQuery's simplicity…
      blurElement && blurElement.removeEventListener('blur', handleElementBlurEvent, true);
      blurElement = null;
    };

    var handleFocusChange = function handleFocusChange() {
      var _active = (0, _getActiveElements2['default'])();
      if (_active.length === 1) {
        stopHandleElementBlurEvent();
        return;
      }

      // listen for blur so we know when to re-validate
      observeElementBlurEvent(_active[0]);
      var shadowFocusEvent = new CustomEvent('shadow-focus', {
        bubbles: false,
        cancelable: false,
        detail: {
          // complete focus ancestry
          elements: _active,
          // the actually focused element
          active: _active[0],
          // shadow host ancestry
          hosts: _active.slice(1)
        }
      });

      document.dispatchEvent(shadowFocusEvent);
    };

    var handleDocumentFocusEvent = function handleDocumentFocusEvent() {
      (window.clearImmediate || window.clearTimeout)(blurTimer);
      handleFocusChange();
    };

    engage = function () {
      document.addEventListener('focus', handleDocumentFocusEvent, true);
    };

    disengage = function () {
      (window.clearImmediate || window.clearTimeout)(blurTimer);
      blurElement && blurElement.removeEventListener('blur', handleElementBlurEvent, true);
      document.removeEventListener('focus', handleDocumentFocusEvent, true);
    };
  })();
}

exports['default'] = (0, _utilDecorateService2['default'])({ engage: engage, disengage: disengage });
module.exports = exports['default'];
//# sourceMappingURL=shadow-focus.js.map