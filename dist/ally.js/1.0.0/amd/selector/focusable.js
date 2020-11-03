define(['exports', 'module', '../prototype/svgelement.prototype.focus', '../supports/focus-audio-without-controls', '../supports/focus-video-without-controls', '../supports/svg-focus-method', '../supports/focus-table', '../supports/focus-fieldset', '../supports/focus-summary', '../supports/css-shadow-piercing-deep-combinator'], function (exports, module, _prototypeSvgelementPrototypeFocus, _supportsFocusAudioWithoutControls, _supportsFocusVideoWithoutControls, _supportsSvgFocusMethod, _supportsFocusTable, _supportsFocusFieldset, _supportsFocusSummary, _supportsCssShadowPiercingDeepCombinator) {
  // NOTE: this selector MUST *never* be used directly,
  // always go through query/focusable or is/focusable.js
  // there are too many edge cases that they could be covered in
  // a simple CSS selector…

  'use strict';

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _canFocusAudioWithoutControls = _interopRequireDefault(_supportsFocusAudioWithoutControls);

  var _canFocusVideoWithoutControls = _interopRequireDefault(_supportsFocusVideoWithoutControls);

  var _canFocusSvgMethod = _interopRequireDefault(_supportsSvgFocusMethod);

  var _canFocusTable = _interopRequireDefault(_supportsFocusTable);

  var _canFocusFieldset = _interopRequireDefault(_supportsFocusFieldset);

  var _canFocusSummary = _interopRequireDefault(_supportsFocusSummary);

  var _cssShadowPiercingDeepCombinator = _interopRequireDefault(_supportsCssShadowPiercingDeepCombinator);

  // http://www.w3.org/TR/html5/editing.html#sequential-focus-navigation-and-the-tabindex-attribute
  var selector = ''
  // IE11 can focus <table> and <td>
   + (_canFocusTable['default'] ? 'table, td,' : '')
  // IE11 can focus <fieldset>
   + (_canFocusFieldset['default'] ? 'fieldset,' : '')
  // Namespace problems of [xlink:href] explained in http://stackoverflow.com/a/23047888/515124
  // Firefox cannot focus <svg> child elements from script
   + (_canFocusSvgMethod['default'] ? 'svg a[*|href],' : '')
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
   + 'keygen,' + (_canFocusAudioWithoutControls['default'] ? 'audio,' : 'audio[controls],') + (_canFocusVideoWithoutControls['default'] ? 'video,' : 'video[controls],') + (_canFocusSummary['default'] ? 'summary,' : '')
  // validity determined by is/valid-tabindex.js
   + '[tabindex],'
  // editing hosts
   + '[contenteditable]';

  // where ShadowDOM is supported, we also want the shadowed focusable elements (via ">>>" or "/deep/")
  if (_cssShadowPiercingDeepCombinator['default']) {
    selector += ', html ' + _cssShadowPiercingDeepCombinator['default'] + ' ' + selector.replace(/\s*,\s*/g, ',').split(',').join(', html ' + _cssShadowPiercingDeepCombinator['default'] + ' ');
  }

  module.exports = selector;
});
//# sourceMappingURL=focusable.js.map