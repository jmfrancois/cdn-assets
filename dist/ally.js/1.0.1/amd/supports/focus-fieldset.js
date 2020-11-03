define(['exports', 'module', './detect-focus'], function (exports, module, _detectFocus) {
  'use strict';

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _detectFocus2 = _interopRequireDefault(_detectFocus);

  module.exports = (0, _detectFocus2['default'])({
    name: 'can-focus-fieldset',
    element: 'fieldset',
    mutate: function mutate(element) {
      element.innerHTML = '<legend>legend</legend><p>content</p>';
    }
  });
});
//# sourceMappingURL=focus-fieldset.js.map