define(['exports', 'module', '../util/context-to-element', '../get/shadow-host', '../util/get-document'], function (exports, module, _utilContextToElement, _getShadowHost, _utilGetDocument) {
  // Determines if an element is the activeElement within its context, i.e. its document iFrame or ShadowHost

  'use strict';

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _contextToElement = _interopRequireDefault(_utilContextToElement);

  var _getShadowHost2 = _interopRequireDefault(_getShadowHost);

  var _getDocument = _interopRequireDefault(_utilGetDocument);

  module.exports = function (context) {
    var element = (0, _contextToElement['default'])({
      label: 'is/active-element',
      resolveDocument: true,
      context: context
    });

    var _document = (0, _getDocument['default'])(element);
    if (_document.activeElement === element) {
      return true;
    }

    var shadowHost = (0, _getShadowHost2['default'])({ context: element });
    if (shadowHost && shadowHost.shadowRoot.activeElement === element) {
      return true;
    }

    return false;
  };
});
//# sourceMappingURL=active-element.js.map