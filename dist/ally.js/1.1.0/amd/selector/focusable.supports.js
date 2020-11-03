define(['exports', 'module', '../supports/memorize-result', '../supports/focus-audio-without-controls', '../supports/focus-video-without-controls', '../supports/focus-table', '../supports/focus-fieldset', '../supports/focus-summary'], function (exports, module, _supportsMemorizeResult, _supportsFocusAudioWithoutControls, _supportsFocusVideoWithoutControls, _supportsFocusTable, _supportsFocusFieldset, _supportsFocusSummary) {
  'use strict';

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _memorizeResult = _interopRequireDefault(_supportsMemorizeResult);

  var _canFocusAudioWithoutControls = _interopRequireDefault(_supportsFocusAudioWithoutControls);

  var _canFocusVideoWithoutControls = _interopRequireDefault(_supportsFocusVideoWithoutControls);

  var _canFocusTable = _interopRequireDefault(_supportsFocusTable);

  var _canFocusFieldset = _interopRequireDefault(_supportsFocusFieldset);

  var _canFocusSummary = _interopRequireDefault(_supportsFocusSummary);

  module.exports = (0, _memorizeResult['default'])(function () {
    return {
      canFocusAudioWithoutControls: (0, _canFocusAudioWithoutControls['default'])(),
      canFocusVideoWithoutControls: (0, _canFocusVideoWithoutControls['default'])(),
      canFocusTable: (0, _canFocusTable['default'])(),
      canFocusFieldset: (0, _canFocusFieldset['default'])(),
      canFocusSummary: (0, _canFocusSummary['default'])()
    };
  });
});
//# sourceMappingURL=focusable.supports.js.map