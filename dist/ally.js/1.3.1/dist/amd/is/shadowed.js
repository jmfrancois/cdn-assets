define(['exports', 'module', '../util/context-to-element', '../get/shadow-host'], function (exports, module, _utilContextToElement, _getShadowHost) {
  // determine if an element is the child of a ShadowRoot

  'use strict';

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _contextToElement = _interopRequireDefault(_utilContextToElement);

  var _getShadowHost2 = _interopRequireDefault(_getShadowHost);

  module.exports = function (context) {
    var element = (0, _contextToElement['default'])({
      label: 'is/shadowed',
      resolveDocument: true,
      context: context
    });

    return Boolean((0, _getShadowHost2['default'])({ context: element }));
  };
});
//# sourceMappingURL=shadowed.js.map