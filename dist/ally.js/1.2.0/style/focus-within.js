
/*
  add .ally-focus-within class to parents of document.activeElement,
  to provide the functionality of :focus-within where it's not available
  see http://dev.w3.org/csswg/selectors-4/#the-focus-within-pseudo

  USAGE:
    style/focus-within()
*/

'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _utilToggleClass = require('../util/toggle-class');

var _eventShadowFocus = require('../event/shadow-focus');

var _eventShadowFocus2 = _interopRequireDefault(_eventShadowFocus);

var _getActiveElements = require('../get/active-elements');

var _getActiveElements2 = _interopRequireDefault(_getActiveElements);

var _getParents = require('../get/parents');

var _getParents2 = _interopRequireDefault(_getParents);

var _utilDecorateService = require('../util/decorate-service');

var _utilDecorateService2 = _interopRequireDefault(_utilDecorateService);

var _utilSelectInShadows = require('../util/select-in-shadows');

var _utilSelectInShadows2 = _interopRequireDefault(_utilSelectInShadows);

var _focusWithinSupports = require('./focus-within.supports');

var _focusWithinSupports2 = _interopRequireDefault(_focusWithinSupports);

var supports = undefined;

// preferring focusin/out because they are synchronous in IE10+11
var focusEventName = typeof document !== 'undefined' && ('onfocusin' in document ? 'focusin' : 'focus');
var blurEventName = typeof document !== 'undefined' && ('onfocusin' in document ? 'focusout' : 'blur');

var className = 'ally-focus-within';
// defined in engage();
var selector = undefined;
var blurTimer = undefined;
var shadowHandle = undefined;

function applyFocusWithinClass(active) {
  var _active = active || (0, _getActiveElements2['default'])();
  if (!supports.cssShadowPiercingDeepCombinator) {
    // no shadow-piercing descendant selector, no joy
    _active = _active.slice(-1);
  }

  // identify the elements that currently have :focus-within
  var _current = [].slice.call(document.querySelectorAll(selector), 0);
  // get the path (ancestry) of each ShadowRoot and merge them into a flat list
  var elements = _active.map(function (context) {
    return (0, _getParents2['default'])({ context: context });
  }).reduce(function (previous, current) {
    return current.concat(previous);
  }, []);

  // remove the class only from elements that would not receive it again (minimize dom action)
  _current.forEach(function (element) {
    if (elements.indexOf(element) !== -1) {
      return;
    }

    (0, _utilToggleClass.removeClass)(element, className);
  });

  // apply the class only to elements that do not yet have it (minimize dom action)
  elements.forEach(function (element) {
    if (_current.indexOf(element) !== -1) {
      return;
    }

    (0, _utilToggleClass.addClass)(element, className);
  });
}

function handleDocumentBlurEvent() {
  // we won't get a focus for <body>, but a delayed blur handler will achieve
  // the same thing listening for focus would've done, unless we get a focus, of course
  blurTimer = (window.setImmediate || window.setTimeout)(function () {
    applyFocusWithinClass();
  });
}

function handleDocumentFocusEvent() {
  // abort any handlers that come from document or element blur handlers
  (window.clearImmediate || window.clearTimeout)(blurTimer);
  // NOTE: we could overcome Firefox 34 issue of not supporting ShadowRoot.host by
  // passing event.target (which references the first-level ShadowHost), but that
  // would require applyFocusWithinClass() to distinguish between the argument and
  // getActiveElements().
  applyFocusWithinClass();
}

function handleShadowFocusEvent(event) {
  applyFocusWithinClass(event.detail.elements);
}

function disengage() {
  shadowHandle && shadowHandle.disengage();
  (window.clearImmediate || window.clearTimeout)(blurTimer);
  document.removeEventListener(blurEventName, handleDocumentBlurEvent, true);
  document.removeEventListener(focusEventName, handleDocumentFocusEvent, true);
  document.removeEventListener('shadow-focus', handleShadowFocusEvent, true);

  // remove any remaining ally-within-focus occurrences
  [].forEach.call(document.querySelectorAll(selector), function (element) {
    (0, _utilToggleClass.removeClass)(element, className);
  });
}

function engage() {
  if (!supports) {
    supports = (0, _focusWithinSupports2['default'])();
    selector = (0, _utilSelectInShadows2['default'])('.' + className);
  }

  shadowHandle = (0, _eventShadowFocus2['default'])();
  document.addEventListener(blurEventName, handleDocumentBlurEvent, true);
  document.addEventListener(focusEventName, handleDocumentFocusEvent, true);
  document.addEventListener('shadow-focus', handleShadowFocusEvent, true);
  applyFocusWithinClass();
}

exports['default'] = (0, _utilDecorateService2['default'])({ engage: engage, disengage: disengage });
module.exports = exports['default'];
//# sourceMappingURL=focus-within.js.map