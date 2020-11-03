define(['exports', 'module', './detect-focus'], function (exports, module, _detectFocus) {
  'use strict';

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _detectFocus2 = _interopRequireDefault(_detectFocus);

  module.exports = (0, _detectFocus2['default'])({
    name: 'can-focus-table',
    element: 'table',
    mutate: function mutate(element) {
      element.innerHTML = '<tr><td>cell</td></tr>';
    }
  });
});
//# sourceMappingURL=focus-table.js.map