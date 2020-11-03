// NOTE: this selector MUST *never* be used directly,
// always go through query/focusable or is/focusable.js
// there are too many edge cases that they could be covered in
// a simple CSS selector…

'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _utilSelectInShadows = require('../util/select-in-shadows');

var _utilSelectInShadows2 = _interopRequireDefault(_utilSelectInShadows);

var _supportsSupports = require('../supports/supports');

var _supportsSupports2 = _interopRequireDefault(_supportsSupports);

var supports = undefined;

var selector = undefined;

exports['default'] = function () {
  if (!supports) {
    supports = (0, _supportsSupports2['default'])();
  }

  if (typeof selector === 'string') {
    return selector;
  }

  // http://www.w3.org/TR/html5/editing.html#sequential-focus-navigation-and-the-tabindex-attribute
  selector = ''
  // IE11 supports.can focus <table> and <td>
   + (supports.focusTable ? 'table, td,' : '')
  // IE11 supports.can focus <fieldset>
   + (supports.focusFieldset ? 'fieldset,' : '')
  // Namespace problems of [xlink:href] explained in http://stackoverflow.com/a/23047888/515124
  // svg a[*|href] does not match in IE9, but since we're filtering
  // through is/focusable we can include all <a> from SVG
   + 'svg a,'
  // may behave as 'svg, svg *,' in chrome as *every* svg element with a focus event listener is focusable
  // navigational elements
   + 'a[href],'
  // validity determined by is/valid-area.js
   + 'area[href],'
  // validity determined by is/disabled.js
   + 'input, select, textarea, button,'
  // browsing context containers
   + 'iframe, object, embed,'
  // interactive content
   + 'keygen,' + (supports.focusAudioWithoutControls ? 'audio,' : 'audio[controls],') + (supports.focusVideoWithoutControls ? 'video,' : 'video[controls],') + (supports.focusSummary ? 'summary,' : '')
  // validity determined by is/valid-tabindex.js
   + '[tabindex],'
  // editing hosts
   + '[contenteditable]';

  // where ShadowDOM is supported, we also want the shadowed focusable elements (via ">>>" or "/deep/")
  selector = (0, _utilSelectInShadows2['default'])(selector);

  return selector;
};

module.exports = exports['default'];
//# sourceMappingURL=focusable.js.map