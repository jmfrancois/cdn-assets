
// find all highest elements within context that do not contain any of the filter elements.
// (basically the tree minus the parent paths of each filtered element reduced to the top most nodes)
// originally inspired by Marcy Sutton's Material Dialog Component:
// https://github.com/angular/material/blob/v0.11.1/src/components/dialog/dialog.js#L748-L783
// to avoid this behavior: http://marcysutton.com/slides/mobile-a11y-seattlejs/#/36

'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _utilContextToElement = require('../util/context-to-element');

var _utilContextToElement2 = _interopRequireDefault(_utilContextToElement);

var _utilNodeArray = require('../util/node-array');

var _utilNodeArray2 = _interopRequireDefault(_utilNodeArray);

var _utilComparePosition = require('../util/compare-position');

var _utilGetDocument = require('../util/get-document');

var _utilGetDocument2 = _interopRequireDefault(_utilGetDocument);

function queryInsignificantBranches(_ref) {
  var context = _ref.context;
  var filter = _ref.filter;

  var containsFilteredElement = function containsFilteredElement(node) {
    var containsNode = (0, _utilComparePosition.getParentComparator)({ parent: node });
    return filter.some(containsNode);
  };

  // We'd use a Set() for this, if we could
  var insiginificantBranches = [];

  // see https://developer.mozilla.org/en-US/docs/Web/API/NodeFilter
  var CollectInsignificantBranchesFilter = function CollectInsignificantBranchesFilter(node) {
    if (filter.some(function (element) {
      return node === element;
    })) {
      // we've hit a filtered element and can ignore its children
      return NodeFilter.FILTER_REJECT;
    }

    if (containsFilteredElement(node)) {
      // we've hit a significant tree, so we'll have to keep investigating
      return NodeFilter.FILTER_ACCEPT;
    }

    // we've found an insignificant tree
    insiginificantBranches.push(node);
    return NodeFilter.FILTER_REJECT;
  };
  // IE requires a function, Browsers require {acceptNode: function}
  // see http://www.bennadel.com/blog/2607-finding-html-comment-nodes-in-the-dom-using-treewalker.htm
  CollectInsignificantBranchesFilter.acceptNode = CollectInsignificantBranchesFilter;

  var _document = (0, _utilGetDocument2['default'])(context);
  // see https://developer.mozilla.org/en-US/docs/Web/API/Document/createTreeWalker
  var walker = _document.createTreeWalker(
  // root element to start search in
  context,
  // element type filter
  NodeFilter.SHOW_ELEMENT,
  // custom NodeFilter filter
  CollectInsignificantBranchesFilter,
  // deprecated, but IE requires it
  false);

  while (walker.nextNode()) {
    // collection things is happening through the filter method
  }

  return insiginificantBranches;
}

exports['default'] = function () {
  var _ref2 = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  var context = _ref2.context;
  var filter = _ref2.filter;

  context = (0, _utilContextToElement2['default'])({
    label: 'get/insignificant-branches',
    defaultToDocument: true,
    context: context
  });

  filter = (0, _utilNodeArray2['default'])(filter);
  if (!filter.length) {
    throw new TypeError('get/insignificant-branches requires valid options.filter');
  }

  return queryInsignificantBranches({
    context: context,
    filter: filter
  });
};

module.exports = exports['default'];
//# sourceMappingURL=insignificant-branches.js.map