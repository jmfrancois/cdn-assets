
// http://www.w3.org/TR/html5/editing.html#sequential-focus-navigation-and-the-tabindex-attribute
// http://www.w3.org/WAI/PF/aria-practices/#keyboard

'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _tabbable = require('./tabbable');

var _tabbable2 = _interopRequireDefault(_tabbable);

var _utilNodeArray = require('../util/node-array');

var _utilNodeArray2 = _interopRequireDefault(_utilNodeArray);

var _utilPlatform = require('../util/platform');

var _utilPlatform2 = _interopRequireDefault(_utilPlatform);

var _tabsequenceSortArea = require('./tabsequence.sort-area');

var _tabsequenceSortArea2 = _interopRequireDefault(_tabsequenceSortArea);

var _tabsequenceSortShadowed = require('./tabsequence.sort-shadowed');

var _tabsequenceSortShadowed2 = _interopRequireDefault(_tabsequenceSortShadowed);

var _tabsequenceSortTabindex = require('./tabsequence.sort-tabindex');

var _tabsequenceSortTabindex2 = _interopRequireDefault(_tabsequenceSortTabindex);

var _supportsSupports = require('../supports/supports');

var _supportsSupports2 = _interopRequireDefault(_supportsSupports);

var supports = undefined;

function moveContextToBeginning(elements, context) {
  var pos = elements.indexOf(context);
  if (pos > 0) {
    var tmp = elements.splice(pos, 1);
    return tmp.concat(elements);
  }

  return elements;
}

function sortElements(elements, _context) {
  if (supports.tabsequenceAreaAtImgPosition) {
    // Some browsers sort <area> in DOM order, some place the <area>s
    // where the <img> referecing them would've been in DOM order.
    // https://github.com/medialize/ally.js/issues/5
    elements = (0, _tabsequenceSortArea2['default'])(elements, _context);
  }

  elements = (0, _tabsequenceSortTabindex2['default'])(elements);
  return elements;
}

exports['default'] = function () {
  var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  var context = _ref.context;
  var includeContext = _ref.includeContext;
  var includeOnlyTabbable = _ref.includeOnlyTabbable;
  var strategy = _ref.strategy;

  if (!supports) {
    supports = (0, _supportsSupports2['default'])();
  }

  var _context = (0, _utilNodeArray2['default'])(context)[0] || document.documentElement;
  var elements = (0, _tabbable2['default'])({
    context: _context,
    includeContext: includeContext,
    includeOnlyTabbable: includeOnlyTabbable,
    strategy: strategy
  });

  if (document.body.createShadowRoot && _utilPlatform2['default'].is.BLINK) {
    // sort tabindex localized to shadow dom
    // see https://github.com/medialize/ally.js/issues/6
    elements = (0, _tabsequenceSortShadowed2['default'])(elements, _context, sortElements);
  } else {
    elements = sortElements(elements, _context);
  }

  if (includeContext) {
    // if we include the context itself, it has to be the first
    // element of the sequence
    elements = moveContextToBeginning(elements, _context);
  }

  return elements;
};

module.exports = exports['default'];
//# sourceMappingURL=tabsequence.js.map