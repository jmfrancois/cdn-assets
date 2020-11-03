define(['exports', 'module', '../util/context-to-element', '../util/get-document'], function (exports, module, _utilContextToElement, _utilGetDocument) {
  'use strict';

  module.exports = queryShadowHosts;

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _contextToElement = _interopRequireDefault(_utilContextToElement);

  var _getDocument = _interopRequireDefault(_utilGetDocument);

  // see https://developer.mozilla.org/en-US/docs/Web/API/NodeFilter
  var filter = function filter(node) {
    if (node.shadowRoot) {
      return NodeFilter.FILTER_ACCEPT;
    }

    return NodeFilter.FILTER_SKIP;
  };
  // IE requires a function, Browsers require {acceptNode: function}
  // see http://www.bennadel.com/blog/2607-finding-html-comment-nodes-in-the-dom-using-treewalker.htm
  filter.acceptNode = filter;

  function queryShadowHosts() {
    var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    var context = _ref.context;

    var element = (0, _contextToElement['default'])({
      label: 'query/shadow-hosts',
      resolveDocument: true,
      defaultToDocument: true,
      context: context
    });

    var _document = (0, _getDocument['default'])(context);
    // see https://developer.mozilla.org/en-US/docs/Web/API/Document/createTreeWalker
    var walker = _document.createTreeWalker(
    // root element to start search in
    element,
    // element type filter
    NodeFilter.SHOW_ELEMENT,
    // custom NodeFilter filter
    filter,
    // deprecated, but IE requires it
    false);

    var list = [];

    if (element.shadowRoot) {
      // TreeWalker does not run the filter on the context element
      list.push(element);
      list = list.concat(queryShadowHosts({
        context: element.shadowRoot
      }));
    }

    while (walker.nextNode()) {
      list.push(walker.currentNode);
      list = list.concat(queryShadowHosts({
        context: walker.currentNode.shadowRoot
      }));
    }

    return list;
  }
});
//# sourceMappingURL=shadow-hosts.js.map