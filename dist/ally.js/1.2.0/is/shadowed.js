
// determine if an element is the child of a ShadowRoot

'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _utilContextToElement = require('../util/context-to-element');

var _utilContextToElement2 = _interopRequireDefault(_utilContextToElement);

var _getShadowHost = require('../get/shadow-host');

var _getShadowHost2 = _interopRequireDefault(_getShadowHost);

exports['default'] = function (context) {
  var element = (0, _utilContextToElement2['default'])({
    label: 'is/shadowed',
    resolveDocument: true,
    context: context
  });

  return Boolean((0, _getShadowHost2['default'])({ context: element }));
};

module.exports = exports['default'];
//# sourceMappingURL=shadowed.js.map