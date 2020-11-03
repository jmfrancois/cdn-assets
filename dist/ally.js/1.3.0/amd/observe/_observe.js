define(['exports', 'module', './interaction-type', './shadow-mutations'], function (exports, module, _interactionType, _shadowMutations) {
  // exporting modules to be included the UMD bundle

  'use strict';

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _interactionType2 = _interopRequireDefault(_interactionType);

  var _shadowMutations2 = _interopRequireDefault(_shadowMutations);

  module.exports = {
    interactionType: _interactionType2['default'],
    shadowMutations: _shadowMutations2['default']
  };
});
//# sourceMappingURL=_observe.js.map