define(['exports', 'module', '../is/focusable', '../is/focus-relevant', '../is/only-tabbable'], function (exports, module, _isFocusable, _isFocusRelevant, _isOnlyTabbable) {
  // http://www.w3.org/TR/html5/editing.html#focusable
  // http://www.w3.org/WAI/PF/aria-practices/#keyboard

  'use strict';

  module.exports = queryFocusableStrict;

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _isFocusable2 = _interopRequireDefault(_isFocusable);

  var _isFocusRelevant2 = _interopRequireDefault(_isFocusRelevant);

  var _isOnlyTabbable2 = _interopRequireDefault(_isOnlyTabbable);

  // see https://developer.mozilla.org/en-US/docs/Web/API/NodeFilter
  var FocusableFilter = function FocusableFilter(node) {
    if (node.shadowRoot) {
      // return ShadowRoot elements regardless of them being focusable,
      // so they can be walked recursively later
      return NodeFilter.FILTER_ACCEPT;
    }

    if ((0, _isFocusable2['default'])(node)) {
      // finds elements that could have been found by document.querySelectorAll()
      return NodeFilter.FILTER_ACCEPT;
    }

    return NodeFilter.FILTER_SKIP;
  };
  // IE requires a function, Browsers require {acceptNode: function}
  // see http://www.bennadel.com/blog/2607-finding-html-comment-nodes-in-the-dom-using-treewalker.htm
  FocusableFilter.acceptNode = FocusableFilter;

  // see https://developer.mozilla.org/en-US/docs/Web/API/NodeFilter
  var PossiblyFocusableFilter = function PossiblyFocusableFilter(node) {
    if (node.shadowRoot) {
      // return ShadowRoot elements regardless of them being focusable,
      // so they can be walked recursively later
      return NodeFilter.FILTER_ACCEPT;
    }

    if ((0, _isOnlyTabbable2['default'])(node) || (0, _isFocusRelevant2['default'])(node)) {
      // finds elements that could have been found by document.querySelectorAll()
      return NodeFilter.FILTER_ACCEPT;
    }

    return NodeFilter.FILTER_SKIP;
  };
  // IE requires a function, Browsers require {acceptNode: function}
  // see http://www.bennadel.com/blog/2607-finding-html-comment-nodes-in-the-dom-using-treewalker.htm
  PossiblyFocusableFilter.acceptNode = PossiblyFocusableFilter;

  function queryFocusableStrict() {
    var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    var context = _ref.context;
    var includeContext = _ref.includeContext;
    var strategy = _ref.strategy;

    // see https://developer.mozilla.org/en-US/docs/Web/API/Document/createTreeWalker
    var walker = document.createTreeWalker(
    // root element to start search in
    context || document.documentElement,
    // element type filter
    NodeFilter.SHOW_ELEMENT,
    // custom NodeFilter filter
    strategy === 'all' ? PossiblyFocusableFilter : FocusableFilter,
    // deprecated, but IE requires it
    false);

    var list = [];

    while (walker.nextNode()) {
      if (walker.currentNode.shadowRoot) {
        if ((0, _isFocusable2['default'])(walker.currentNode)) {
          list.push(walker.currentNode);
        }

        list = list.concat(queryFocusableStrict({
          context: walker.currentNode.shadowRoot,
          strategy: strategy
        }));
      } else {
        list.push(walker.currentNode);
      }
    }

    // add context if requested and focusable
    if (includeContext) {
      if (strategy === 'all') {
        if ((0, _isOnlyTabbable2['default'])(context) || (0, _isFocusRelevant2['default'])(context)) {
          list.unshift(context);
        }
      } else if ((0, _isFocusable2['default'])(context)) {
        list.unshift(context);
      }
    }

    return list;
  }
});
//# sourceMappingURL=focusable.strict.js.map