define(['exports', 'module', './detect-focus', './memorize-result'], function (exports, module, _detectFocus, _memorizeResult) {
  'use strict';

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _detectFocus2 = _interopRequireDefault(_detectFocus);

  var _memorizeResult2 = _interopRequireDefault(_memorizeResult);

  module.exports = (0, _memorizeResult2['default'])(function () {
    return (0, _detectFocus2['default'])({
      name: 'can-focus-redirect-legend',
      element: 'fieldset',
      mutate: function mutate(element) {
        element.innerHTML = '<legend>legend</legend><input tabindex="-1"><input tabindex="0">';
      },
      validate: function validate(element) {
        var focus = element.querySelector('legend');
        var focusable = element.querySelector('input[tabindex="-1"]');
        var tabbable = element.querySelector('input[tabindex="0"]');

        focus.focus();
        return document.activeElement === focusable && 'focusable' || document.activeElement === tabbable && 'tabbable' || '';
      }
    });
  });
});
//# sourceMappingURL=focus-redirect-legend.js.map