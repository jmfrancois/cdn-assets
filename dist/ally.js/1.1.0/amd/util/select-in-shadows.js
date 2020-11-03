define(['exports', 'module', '../supports/css-shadow-piercing-deep-combinator'], function (exports, module, _supportsCssShadowPiercingDeepCombinator) {
  // convert a CSS selector so that it also pierces ShadowDOM
  // takes ".a, #b" and turns it into ".a, #b, html >>> .a, html >>> #b"

  'use strict';

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _cssShadowPiercingDeepCombinator = _interopRequireDefault(_supportsCssShadowPiercingDeepCombinator);

  var shadowPrefix = undefined;

  module.exports = function (selector) {
    if (typeof shadowPrefix !== 'string') {
      var operator = (0, _cssShadowPiercingDeepCombinator['default'])();
      if (operator) {
        shadowPrefix = ', html ' + operator + ' ';
      }
    }

    if (!shadowPrefix) {
      return selector;
    }

    return selector + shadowPrefix + selector.replace(/\s*,\s*/g, ',').split(',').join(shadowPrefix);
  };
});
//# sourceMappingURL=select-in-shadows.js.map