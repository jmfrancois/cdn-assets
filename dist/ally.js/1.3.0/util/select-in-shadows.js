
// convert a CSS selector so that it also pierces ShadowDOM
// takes ".a, #b" and turns it into ".a, #b, html >>> .a, html >>> #b"

'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _supportsCssShadowPiercingDeepCombinator = require('../supports/css-shadow-piercing-deep-combinator');

var _supportsCssShadowPiercingDeepCombinator2 = _interopRequireDefault(_supportsCssShadowPiercingDeepCombinator);

var shadowPrefix = undefined;

exports['default'] = function (selector) {
  if (typeof shadowPrefix !== 'string') {
    var operator = (0, _supportsCssShadowPiercingDeepCombinator2['default'])();
    if (operator) {
      shadowPrefix = ', html ' + operator + ' ';
    }
  }

  if (!shadowPrefix) {
    return selector;
  }

  return selector + shadowPrefix + selector.replace(/\s*,\s*/g, ',').split(',').join(shadowPrefix);
};

module.exports = exports['default'];
//# sourceMappingURL=select-in-shadows.js.map