'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _detectFocus = require('./detect-focus');

var _detectFocus2 = _interopRequireDefault(_detectFocus);

var _memorizeResult = require('./memorize-result');

var _memorizeResult2 = _interopRequireDefault(_memorizeResult);

// references to the iframe's browsing context
var _document = undefined;

exports['default'] = (0, _memorizeResult2['default'])(function () {
  return (0, _detectFocus2['default'])({
    name: 'can-focus-in-hidden-iframe',
    element: function element(wrapper) {
      var iframe = document.createElement('iframe');

      // iframe must be part of the DOM before accessing the contentWindow is possible
      wrapper.appendChild(iframe);

      var _window = iframe.contentWindow;
      _document = _window.document;

      return iframe;
    },
    mutate: function mutate(iframe) {
      iframe.style.visibility = 'hidden';

      // writing the iframe's content is synchronous
      _document.open();
      _document.write('<input>');
      _document.close();

      return _document.querySelector('input');
    },
    validate: function validate() {
      var focus = _document.querySelector('input');
      return _document.activeElement === focus;
    }
  });
});
module.exports = exports['default'];
//# sourceMappingURL=focus-in-hidden-iframe.js.map