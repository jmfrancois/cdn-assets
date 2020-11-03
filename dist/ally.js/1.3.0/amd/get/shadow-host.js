define(['exports', 'module', '../util/context-to-element'], function (exports, module, _utilContextToElement) {
  'use strict';

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _contextToElement = _interopRequireDefault(_utilContextToElement);

  module.exports = function () {
    var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    var context = _ref.context;

    var element = (0, _contextToElement['default'])({
      label: 'get/shadow-host',
      context: context
    });

    // walk up to the root
    var container = null;

    while (element) {
      container = element;
      element = element.parentNode;
    }

    // https://developer.mozilla.org/en-US/docs/Web/API/Node.nodeType
    // NOTE: Firefox 34 does not expose ShadowRoot.host (but 37 does)
    if (container.nodeType === container.DOCUMENT_FRAGMENT_NODE && container.host) {
      // the root is attached to a fragment node that has a host
      return container.host;
    }

    return null;
  };
});
//# sourceMappingURL=shadow-host.js.map