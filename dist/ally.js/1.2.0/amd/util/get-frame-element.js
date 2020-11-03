define(['exports', 'module', './get-content-document', './get-window', './select-in-shadows'], function (exports, module, _getContentDocument, _getWindow, _selectInShadows) {
  'use strict';

  module.exports = getFrameElement;

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _getContentDocument2 = _interopRequireDefault(_getContentDocument);

  var _getWindow2 = _interopRequireDefault(_getWindow);

  var _selectInShadows2 = _interopRequireDefault(_selectInShadows);

  var selector = undefined;

  function findDocumentHostElement(_window) {
    if (!selector) {
      selector = (0, _selectInShadows2['default'])('object, iframe');
    }

    if (_window._frameElement !== undefined) {
      return _window._frameElement;
    }

    _window._frameElement = null;

    var potentialHosts = _window.parent.document.querySelectorAll(selector);
    [].some.call(potentialHosts, function (element) {
      var _document = (0, _getContentDocument2['default'])(element);
      if (_document !== _window.document) {
        return false;
      }

      _window._frameElement = element;
      return true;
    });

    return _window._frameElement;
  }

  function getFrameElement(element) {
    var _window = (0, _getWindow2['default'])(element);
    if (!_window.parent || _window.parent === _window) {
      // if there is no parent browsing context,
      // we're not going to get a frameElement either way
      return null;
    }

    try {
      // see https://developer.mozilla.org/en-US/docs/Web/API/Window/frameElement
      // does not work within <embed> anywhere, and not within in <object> in IE
      return _window.frameElement || findDocumentHostElement(_window);
    } catch (e) {
      return null;
    }
  }
});
//# sourceMappingURL=get-frame-element.js.map