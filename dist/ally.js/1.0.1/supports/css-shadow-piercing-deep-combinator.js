// see http://dev.w3.org/csswg/css-scoping-1/#deep-combinator
// https://bugzilla.mozilla.org/show_bug.cgi?id=1117572
// https://code.google.com/p/chromium/issues/detail?id=446051

'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _supportsCache = require('./supports-cache');

var _supportsCache2 = _interopRequireDefault(_supportsCache);

var testName = 'supports-css-shadow-piercing-deep-combinator';
var combinator = _supportsCache2['default'].get(testName);

if (typeof combinator !== 'string') {
  try {
    document.querySelector('html >>> :first-child');
    combinator = '>>>';
  } catch (noArrowArrowArrow) {
    try {
      // old syntax supported at least up to Chrome 41
      // https://code.google.com/p/chromium/issues/detail?id=446051
      document.querySelector('html /deep/ :first-child');
      combinator = '/deep/';
    } catch (noDeep) {
      combinator = '';
    }
  }

  _supportsCache2['default'].set(testName, combinator);
}

exports['default'] = combinator;
module.exports = exports['default'];
//# sourceMappingURL=css-shadow-piercing-deep-combinator.js.map