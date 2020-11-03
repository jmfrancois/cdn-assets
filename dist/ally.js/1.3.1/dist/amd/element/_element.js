define(['exports', 'module', './blur', './disabled', './focus'], function (exports, module, _blur, _disabled, _focus) {
  // exporting modules to be included the UMD bundle

  'use strict';

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _blur2 = _interopRequireDefault(_blur);

  var _disabled2 = _interopRequireDefault(_disabled);

  var _focus2 = _interopRequireDefault(_focus);

  module.exports = {
    blur: _blur2['default'],
    disabled: _disabled2['default'],
    focus: _focus2['default']
  };
});
//# sourceMappingURL=_element.js.map