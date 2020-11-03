
// helper to turn
//  <div some-attribute="original">
// into
//  <div data-cached-some-attribute="original">
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

exports['default'] = function (_ref) {
  var // and back

  element = _ref.element;
  var attribute = _ref.attribute;

  var temporaryAttribute = 'data-cached-' + attribute;
  var temporaryAttributeValue = element.getAttribute(temporaryAttribute);

  if (temporaryAttributeValue === null) {
    var _value = element.getAttribute(attribute);
    if (_value === null) {
      // can't remove what's not there
      return;
    }

    element.setAttribute(temporaryAttribute, _value || '');
    element.removeAttribute(attribute);
  } else {
    var _value = element.getAttribute(temporaryAttribute);
    element.removeAttribute(temporaryAttribute);
    element.setAttribute(attribute, _value);
  }
};

module.exports = exports['default'];
//# sourceMappingURL=toggle-attribute.js.map