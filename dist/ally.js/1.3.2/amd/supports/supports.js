define(['exports', 'module', './detect-focus', './supports-cache', './css-shadow-piercing-deep-combinator', './focus-area-img-tabindex', './focus-area-tabindex', './focus-area-without-href', './focus-audio-without-controls', './focus-broken-image-map', './focus-children-of-focusable-flexbox', './focus-fieldset-disabled', './focus-fieldset', './focus-flexbox-container', './focus-form-disabled', './focus-img-ismap', './focus-img-usemap-tabindex', './focus-in-hidden-iframe', './focus-in-zero-dimension-object', './focus-invalid-tabindex', './focus-label-tabindex', './focus-object-svg-hidden', './focus-object-svg', './focus-object-swf', './focus-redirect-img-usemap', './focus-redirect-legend', './focus-scroll-body', './focus-scroll-container-without-overflow', './focus-scroll-container', './focus-summary', './focus-svg-focusable-attribute', './focus-svg-tabindex-attribute', './focus-svg', './focus-tabindex-trailing-characters', './focus-table', './focus-video-without-controls', './tabsequence-area-at-img-position'], function (exports, module, _detectFocus, _supportsCache, _cssShadowPiercingDeepCombinator, _focusAreaImgTabindex, _focusAreaTabindex, _focusAreaWithoutHref, _focusAudioWithoutControls, _focusBrokenImageMap, _focusChildrenOfFocusableFlexbox, _focusFieldsetDisabled, _focusFieldset, _focusFlexboxContainer, _focusFormDisabled, _focusImgIsmap, _focusImgUsemapTabindex, _focusInHiddenIframe, _focusInZeroDimensionObject, _focusInvalidTabindex, _focusLabelTabindex, _focusObjectSvgHidden, _focusObjectSvg, _focusObjectSwf, _focusRedirectImgUsemap, _focusRedirectLegend, _focusScrollBody, _focusScrollContainerWithoutOverflow, _focusScrollContainer, _focusSummary, _focusSvgFocusableAttribute, _focusSvgTabindexAttribute, _focusSvg, _focusTabindexTrailingCharacters, _focusTable, _focusVideoWithoutControls, _tabsequenceAreaAtImgPosition) {
  'use strict';

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _detectFocus2 = _interopRequireDefault(_detectFocus);

  var _cache = _interopRequireDefault(_supportsCache);

  var _cssShadowPiercingDeepCombinator2 = _interopRequireDefault(_cssShadowPiercingDeepCombinator);

  var _focusAreaImgTabindex2 = _interopRequireDefault(_focusAreaImgTabindex);

  var _focusAreaTabindex2 = _interopRequireDefault(_focusAreaTabindex);

  var _focusAreaWithoutHref2 = _interopRequireDefault(_focusAreaWithoutHref);

  var _focusAudioWithoutControls2 = _interopRequireDefault(_focusAudioWithoutControls);

  var _focusBrokenImageMap2 = _interopRequireDefault(_focusBrokenImageMap);

  var _focusChildrenOfFocusableFlexbox2 = _interopRequireDefault(_focusChildrenOfFocusableFlexbox);

  var _focusFieldsetDisabled2 = _interopRequireDefault(_focusFieldsetDisabled);

  var _focusFieldset2 = _interopRequireDefault(_focusFieldset);

  var _focusFlexboxContainer2 = _interopRequireDefault(_focusFlexboxContainer);

  var _focusFormDisabled2 = _interopRequireDefault(_focusFormDisabled);

  var _focusImgIsmap2 = _interopRequireDefault(_focusImgIsmap);

  var _focusImgUsemapTabindex2 = _interopRequireDefault(_focusImgUsemapTabindex);

  var _focusInHiddenIframe2 = _interopRequireDefault(_focusInHiddenIframe);

  var _focusInZeroDimensionObject2 = _interopRequireDefault(_focusInZeroDimensionObject);

  var _focusInvalidTabindex2 = _interopRequireDefault(_focusInvalidTabindex);

  var _focusLabelTabindex2 = _interopRequireDefault(_focusLabelTabindex);

  var _focusObjectSvgHidden2 = _interopRequireDefault(_focusObjectSvgHidden);

  var _focusObjectSvg2 = _interopRequireDefault(_focusObjectSvg);

  var _focusObjectSwf2 = _interopRequireDefault(_focusObjectSwf);

  var _focusRedirectImgUsemap2 = _interopRequireDefault(_focusRedirectImgUsemap);

  var _focusRedirectLegend2 = _interopRequireDefault(_focusRedirectLegend);

  var _focusScrollBody2 = _interopRequireDefault(_focusScrollBody);

  var _focusScrollContainerWithoutOverflow2 = _interopRequireDefault(_focusScrollContainerWithoutOverflow);

  var _focusScrollContainer2 = _interopRequireDefault(_focusScrollContainer);

  var _focusSummary2 = _interopRequireDefault(_focusSummary);

  var _focusSvgFocusableAttribute2 = _interopRequireDefault(_focusSvgFocusableAttribute);

  var _focusSvgTabindexAttribute2 = _interopRequireDefault(_focusSvgTabindexAttribute);

  var _focusSvg2 = _interopRequireDefault(_focusSvg);

  var _focusTabindexTrailingCharacters2 = _interopRequireDefault(_focusTabindexTrailingCharacters);

  var _focusTable2 = _interopRequireDefault(_focusTable);

  var _focusVideoWithoutControls2 = _interopRequireDefault(_focusVideoWithoutControls);

  var _tabsequenceAreaAtImgPosition2 = _interopRequireDefault(_tabsequenceAreaAtImgPosition);

  var testCallbacks = {
    cssShadowPiercingDeepCombinator: _cssShadowPiercingDeepCombinator2['default'],
    focusInZeroDimensionObject: _focusInZeroDimensionObject2['default'],
    focusObjectSwf: _focusObjectSwf2['default'],
    tabsequenceAreaAtImgPosition: _tabsequenceAreaAtImgPosition2['default']
  };

  var testDescriptions = {
    focusAreaImgTabindex: _focusAreaImgTabindex2['default'],
    focusAreaTabindex: _focusAreaTabindex2['default'],
    focusAreaWithoutHref: _focusAreaWithoutHref2['default'],
    focusAudioWithoutControls: _focusAudioWithoutControls2['default'],
    focusBrokenImageMap: _focusBrokenImageMap2['default'],
    focusChildrenOfFocusableFlexbox: _focusChildrenOfFocusableFlexbox2['default'],
    focusFieldsetDisabled: _focusFieldsetDisabled2['default'],
    focusFieldset: _focusFieldset2['default'],
    focusFlexboxContainer: _focusFlexboxContainer2['default'],
    focusFormDisabled: _focusFormDisabled2['default'],
    focusImgIsmap: _focusImgIsmap2['default'],
    focusImgUsemapTabindex: _focusImgUsemapTabindex2['default'],
    focusInHiddenIframe: _focusInHiddenIframe2['default'],
    focusInvalidTabindex: _focusInvalidTabindex2['default'],
    focusLabelTabindex: _focusLabelTabindex2['default'],
    focusObjectSvg: _focusObjectSvg2['default'],
    focusObjectSvgHidden: _focusObjectSvgHidden2['default'],
    focusRedirectImgUsemap: _focusRedirectImgUsemap2['default'],
    focusRedirectLegend: _focusRedirectLegend2['default'],
    focusScrollBody: _focusScrollBody2['default'],
    focusScrollContainerWithoutOverflow: _focusScrollContainerWithoutOverflow2['default'],
    focusScrollContainer: _focusScrollContainer2['default'],
    focusSummary: _focusSummary2['default'],
    focusSvgFocusableAttribute: _focusSvgFocusableAttribute2['default'],
    focusSvgTabindexAttribute: _focusSvgTabindexAttribute2['default'],
    focusSvg: _focusSvg2['default'],
    focusTabindexTrailingCharacters: _focusTabindexTrailingCharacters2['default'],
    focusTable: _focusTable2['default'],
    focusVideoWithoutControls: _focusVideoWithoutControls2['default']
  };

  function executeTests() {
    var results = (0, _detectFocus2['default'])(testDescriptions);
    Object.keys(testCallbacks).forEach(function (key) {
      results[key] = testCallbacks[key]();
    });

    return results;
  }

  var supportsCache = null;

  module.exports = function () {
    if (supportsCache) {
      return supportsCache;
    }

    supportsCache = _cache['default'].get();
    if (!supportsCache.time) {
      _cache['default'].set(executeTests());
      supportsCache = _cache['default'].get();
    }

    return supportsCache;
  };
});
//# sourceMappingURL=supports.js.map