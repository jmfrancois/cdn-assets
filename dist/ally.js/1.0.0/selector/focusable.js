// NOTE: this selector MUST *never* be used directly,
// always go through query/focusable or is/focusable.js
// there are too many edge cases that they could be covered in
// a simple CSS selector…

'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

require('../prototype/svgelement.prototype.focus');

var _supportsFocusAudioWithoutControls = require('../supports/focus-audio-without-controls');

var _supportsFocusAudioWithoutControls2 = _interopRequireDefault(_supportsFocusAudioWithoutControls);

var _supportsFocusVideoWithoutControls = require('../supports/focus-video-without-controls');

var _supportsFocusVideoWithoutControls2 = _interopRequireDefault(_supportsFocusVideoWithoutControls);

var _supportsSvgFocusMethod = require('../supports/svg-focus-method');

var _supportsSvgFocusMethod2 = _interopRequireDefault(_supportsSvgFocusMethod);

var _supportsFocusTable = require('../supports/focus-table');

var _supportsFocusTable2 = _interopRequireDefault(_supportsFocusTable);

var _supportsFocusFieldset = require('../supports/focus-fieldset');

var _supportsFocusFieldset2 = _interopRequireDefault(_supportsFocusFieldset);

var _supportsFocusSummary = require('../supports/focus-summary');

var _supportsFocusSummary2 = _interopRequireDefault(_supportsFocusSummary);

var _supportsCssShadowPiercingDeepCombinator = require('../supports/css-shadow-piercing-deep-combinator');

var _supportsCssShadowPiercingDeepCombinator2 = _interopRequireDefault(_supportsCssShadowPiercingDeepCombinator);

// http://www.w3.org/TR/html5/editing.html#sequential-focus-navigation-and-the-tabindex-attribute
var selector = ''
// IE11 can focus <table> and <td>
 + (_supportsFocusTable2['default'] ? 'table, td,' : '')
// IE11 can focus <fieldset>
 + (_supportsFocusFieldset2['default'] ? 'fieldset,' : '')
// Namespace problems of [xlink:href] explained in http://stackoverflow.com/a/23047888/515124
// Firefox cannot focus <svg> child elements from script
 + (_supportsSvgFocusMethod2['default'] ? 'svg a[*|href],' : '')
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
 + 'keygen,' + (_supportsFocusAudioWithoutControls2['default'] ? 'audio,' : 'audio[controls],') + (_supportsFocusVideoWithoutControls2['default'] ? 'video,' : 'video[controls],') + (_supportsFocusSummary2['default'] ? 'summary,' : '')
// validity determined by is/valid-tabindex.js
 + '[tabindex],'
// editing hosts
 + '[contenteditable]';

// where ShadowDOM is supported, we also want the shadowed focusable elements (via ">>>" or "/deep/")
if (_supportsCssShadowPiercingDeepCombinator2['default']) {
  selector += ', html ' + _supportsCssShadowPiercingDeepCombinator2['default'] + ' ' + selector.replace(/\s*,\s*/g, ',').split(',').join(', html ' + _supportsCssShadowPiercingDeepCombinator2['default'] + ' ');
}

exports['default'] = selector;
module.exports = exports['default'];
//# sourceMappingURL=focusable.js.map