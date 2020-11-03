define(['exports', 'module', '../util/context-to-element'], function (exports, module, _utilContextToElement) {
  'use strict';

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _contextToElement = _interopRequireDefault(_utilContextToElement);

  // [elem, elem.parent, elem.parent.parent, …, html]
  // will not contain the shadowRoot (DOCUMENT_FRAGMENT_NODE) and shadowHost

  module.exports = function () {
    var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    var context = _ref.context;

    var list = [];
    var element = (0, _contextToElement['default'])({
      label: 'get/parents',
      context: context
    });

    while (element) {
      list.push(element);
      // IE does know support parentElement on SVGElement
      element = element.parentNode;
      if (element && element.nodeType !== Node.ELEMENT_NODE) {
        element = null;
      }
    }

    return list;
  };
});
//# sourceMappingURL=parents.js.map