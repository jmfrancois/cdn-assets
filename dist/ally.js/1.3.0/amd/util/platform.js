define(['exports', 'module', 'platform'], function (exports, module, _platform2) {
  // sugar for https://github.com/bestiejs/platform.js
  // make sure to ALWAYS reference the layout engine,
  // even if it is not necessary for the condition,
  // as this makes grepping for this stuff simpler

  'use strict';

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _platform3 = _interopRequireDefault(_platform2);

  // deep clone of original platform
  var platform = JSON.parse(JSON.stringify(_platform3['default']));

  // operating system
  var os = platform.os.family || '';
  var ANDROID = os === 'Android';
  var WINDOWS = os.slice(0, 7) === 'Windows';
  var OSX = os === 'OS X';
  var IOS = os === 'iOS';

  // layout
  var BLINK = platform.layout === 'Blink';
  var GECKO = platform.layout === 'Gecko';
  var TRIDENT = platform.layout === 'Trident';
  var WEBKIT = platform.layout === 'WebKit';

  // browser version (not layout engine version!)
  var version = parseFloat(platform.version);
  var majorVersion = Math.floor(version);
  platform.majorVersion = majorVersion;

  platform.is = {
    // operating system
    ANDROID: ANDROID,
    WINDOWS: WINDOWS,
    OSX: OSX,
    IOS: IOS,
    // layout
    BLINK: BLINK, // "Chrome", "Chrome Mobile", "Opera"
    GECKO: GECKO, // "Firefox"
    TRIDENT: TRIDENT, // "Internet Explorer", ("Edge")
    WEBKIT: WEBKIT, // "Safari"
    // INTERNET EXPLORERS
    IE9: TRIDENT && majorVersion === 9,
    IE10: TRIDENT && majorVersion === 10,
    IE11: TRIDENT && majorVersion === 11
  };

  module.exports = platform;
});
//# sourceMappingURL=platform.js.map