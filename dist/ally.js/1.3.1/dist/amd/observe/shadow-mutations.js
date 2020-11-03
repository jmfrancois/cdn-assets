define(['exports', 'module', '../util/node-array', '../query/shadow-hosts', '../util/context-to-element'], function (exports, module, _utilNodeArray, _queryShadowHosts, _utilContextToElement) {
  'use strict';

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var _nodeArray = _interopRequireDefault(_utilNodeArray);

  var _queryShadowHosts2 = _interopRequireDefault(_queryShadowHosts);

  var _contextToElement = _interopRequireDefault(_utilContextToElement);

  var shadowObserverConfig = {
    childList: true,
    subtree: true
  };

  var ShadowMutationObserver = (function () {
    function ShadowMutationObserver() {
      var _this = this;

      var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

      var context = _ref.context;
      var callback = _ref.callback;
      var config = _ref.config;

      _classCallCheck(this, ShadowMutationObserver);

      this.config = config;

      this.disengage = this.disengage.bind(this);

      this.clientObserver = new MutationObserver(callback);
      this.hostObserver = new MutationObserver(function (mutations) {
        return mutations.forEach(_this.handleHostMutation, _this);
      });

      this.observeContext(context);
      this.observeShadowHosts(context);
    }

    _createClass(ShadowMutationObserver, [{
      key: 'disengage',
      value: function disengage() {
        this.clientObserver && this.clientObserver.disconnect();
        this.clientObserver = null;
        this.hostObserver && this.hostObserver.disconnect();
        this.hostObserver = null;
      }
    }, {
      key: 'observeShadowHosts',
      value: function observeShadowHosts(context) {
        var _this2 = this;

        var hosts = (0, _queryShadowHosts2['default'])({
          context: context
        });

        hosts.forEach(function (element) {
          return _this2.observeContext(element.shadowRoot);
        });
      }
    }, {
      key: 'observeContext',
      value: function observeContext(context) {
        this.clientObserver.observe(context, this.config);
        this.hostObserver.observe(context, shadowObserverConfig);
      }
    }, {
      key: 'handleHostMutation',
      value: function handleHostMutation(mutation) {
        if (mutation.type !== 'childList') {
          return;
        }

        var addedElements = (0, _nodeArray['default'])(mutation.addedNodes).filter(function (element) {
          return element.nodeType === Node.ELEMENT_NODE;
        });
        addedElements.forEach(this.observeShadowHosts, this);
      }
    }]);

    return ShadowMutationObserver;
  })();

  module.exports = function () {
    var _ref2 = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    var context = _ref2.context;
    var callback = _ref2.callback;
    var config = _ref2.config;

    if (typeof callback !== 'function') {
      throw new TypeError('observe/shadow-mutations requires options.callback to be a function');
    }

    if (typeof config !== 'object') {
      throw new TypeError('observe/shadow-mutations requires options.config to be an object');
    }

    if (!window.MutationObserver) {
      // not supporting IE10 via Mutation Events, because they're too expensive
      // https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Mutation_events
      return {
        disengage: function disengage() {}
      };
    }

    var element = (0, _contextToElement['default'])({
      label: 'observe/shadow-mutations',
      resolveDocument: true,
      defaultToDocument: true,
      context: context
    });

    var service = new ShadowMutationObserver({
      context: element,
      callback: callback,
      config: config
    });

    return {
      disengage: service.disengage
    };
  };
});
//# sourceMappingURL=shadow-mutations.js.map