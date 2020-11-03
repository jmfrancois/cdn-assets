define(['exports', 'module', '../util/node-array'], function (exports, module, _utilNodeArray) {
  'use strict';

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _nodeArray = _interopRequireDefault(_utilNodeArray);

  module.exports = function (_ref) {
    var context = _ref.context;
    var _ref$label = _ref.label;
    var label = _ref$label === undefined ? 'context-to-element' : _ref$label;
    var resolveDocument = _ref.resolveDocument;
    var defaultToDocument = _ref.defaultToDocument;

    var element = (0, _nodeArray['default'])(context)[0];

    if (resolveDocument && element && element.nodeType === Node.DOCUMENT_NODE) {
      element = element.documentElement;
    }

    if (!element && defaultToDocument) {
      return document.documentElement;
    }

    if (!element) {
      throw new TypeError(label + ' requires valid options.context');
    }

    if (element.nodeType !== Node.ELEMENT_NODE && element.nodeType !== Node.DOCUMENT_FRAGMENT_NODE) {
      throw new TypeError(label + ' requires options.context to be an Element');
    }

    return element;
  };
});
//# sourceMappingURL=context-to-element.js.map