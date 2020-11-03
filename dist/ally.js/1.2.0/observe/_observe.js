
// exporting modules to be included the UMD bundle

'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _interactionType = require('./interaction-type');

var _interactionType2 = _interopRequireDefault(_interactionType);

var _shadowMutations = require('./shadow-mutations');

var _shadowMutations2 = _interopRequireDefault(_shadowMutations);

exports['default'] = {
  interactionType: _interactionType2['default'],
  shadowMutations: _shadowMutations2['default']
};
module.exports = exports['default'];
//# sourceMappingURL=_observe.js.map