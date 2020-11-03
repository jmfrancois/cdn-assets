
// Determines if an element is the activeElement within its context, i.e. its document iFrame or ShadowHost

'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _utilContextToElement = require('../util/context-to-element');

var _utilContextToElement2 = _interopRequireDefault(_utilContextToElement);

var _getShadowHost = require('../get/shadow-host');

var _getShadowHost2 = _interopRequireDefault(_getShadowHost);

var _utilGetDocument = require('../util/get-document');

var _utilGetDocument2 = _interopRequireDefault(_utilGetDocument);

exports['default'] = function (context) {
  var element = (0, _utilContextToElement2['default'])({
    label: 'is/active-element',
    resolveDocument: true,
    context: context
  });

  var _document = (0, _utilGetDocument2['default'])(element);
  if (_document.activeElement === element) {
    return true;
  }

  var shadowHost = (0, _getShadowHost2['default'])({ context: element });
  if (shadowHost && shadowHost.shadowRoot.activeElement === element) {
    return true;
  }

  return false;
};

module.exports = exports['default'];
//# sourceMappingURL=active-element.js.map