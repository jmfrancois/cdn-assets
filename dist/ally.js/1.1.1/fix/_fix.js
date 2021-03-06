
// exporting modules to be included the UMD bundle

'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _pointerFocusChildren = require('./pointer-focus-children');

var _pointerFocusChildren2 = _interopRequireDefault(_pointerFocusChildren);

var _pointerFocusInput = require('./pointer-focus-input');

var _pointerFocusInput2 = _interopRequireDefault(_pointerFocusInput);

var _pointerFocusParent = require('./pointer-focus-parent');

var _pointerFocusParent2 = _interopRequireDefault(_pointerFocusParent);

exports['default'] = {
  pointerFocusChildren: _pointerFocusChildren2['default'],
  pointerFocusInput: _pointerFocusInput2['default'],
  pointerFocusParent: _pointerFocusParent2['default']
};
module.exports = exports['default'];
//# sourceMappingURL=_fix.js.map