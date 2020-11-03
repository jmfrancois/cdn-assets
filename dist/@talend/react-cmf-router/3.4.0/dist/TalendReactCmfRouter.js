(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["TalendReactCmfRouter"] = factory();
	else
		root["TalendReactCmfRouter"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@talend/react-cmf/lib/App.js":
/*!***************************************************!*\
  !*** ./node_modules/@talend/react-cmf/lib/App.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = App;

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

var _RegistryProvider = _interopRequireDefault(__webpack_require__(/*! ./RegistryProvider */ "./node_modules/@talend/react-cmf/lib/RegistryProvider.js"));

var _settings = __webpack_require__(/*! ./settings */ "./node_modules/@talend/react-cmf/lib/settings.js");

var _ErrorBoundary = _interopRequireDefault(__webpack_require__(/*! ./components/ErrorBoundary/ErrorBoundary.component */ "./node_modules/@talend/react-cmf/lib/components/ErrorBoundary/ErrorBoundary.component.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Internal module, you should not use it directly
 * @module react-cmf/lib/App
 */

/**
 * The React component that render your app and provide CMF environment.
 * @param  {object} props { store }
 * @return {object} ReactElement
 */
function App(props) {
  var content = props.children;

  if (props.withSettings) {
    content = _react.default.createElement(_settings.WaitForSettings, {
      loading: props.loading
    }, content);
  }

  return _react.default.createElement(_reactRedux.Provider, {
    store: props.store
  }, _react.default.createElement(_RegistryProvider.default, null, _react.default.createElement(_ErrorBoundary.default, {
    fullPage: true
  }, content)));
}

App.displayName = 'CMFApp';
App.propTypes = {
  store: _propTypes.default.object.isRequired,
  children: _propTypes.default.node,
  withSettings: _propTypes.default.bool,
  loading: _propTypes.default.func
};
App.defaultProps = {
  loading: function loading() {
    return 'loading';
  }
};

/***/ }),

/***/ "./node_modules/@talend/react-cmf/lib/Dispatcher.js":
/*!**********************************************************!*\
  !*** ./node_modules/@talend/react-cmf/lib/Dispatcher.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Dispatcher = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _cmfConnect = _interopRequireDefault(__webpack_require__(/*! ./cmfConnect */ "./node_modules/@talend/react-cmf/lib/cmfConnect.js"));

var _action = _interopRequireDefault(__webpack_require__(/*! ./action */ "./node_modules/@talend/react-cmf/lib/action.js"));

var _actionCreator = _interopRequireDefault(__webpack_require__(/*! ./actionCreator */ "./node_modules/@talend/react-cmf/lib/actionCreator.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * This component purpose is to decorate any component and map an user event
 * to an action to be dispatched
 * @example
function myfunc(event, props, context) {
}
<Dispatcher onClick={myfunc}>
	<ChildrenElement />
</Dispatcher>
 */
var Dispatcher =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Dispatcher, _React$Component);

  /**
   * @param  {object} props only one child under children
   */
  function Dispatcher(props) {
    var _this;

    _classCallCheck(this, Dispatcher);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Dispatcher).call(this, props));
    _this.onEvent = _this.onEvent.bind(_assertThisInitialized(_this));
    return _this;
  }
  /**
   * on any even just try to find a onTHEEVENT props.
   * If found execute it with the common stuff
   * (event, props, context)
   * @param  {object} event     the react event dispatched event
   * @param  {string} eventName the name of the event
   */


  _createClass(Dispatcher, [{
    key: "onEvent",
    value: function onEvent(event, eventName) {
      if (this.props.stopPropagation) {
        event.stopPropagation();
      }

      if (this.props.preventDefault) {
        event.preventDefault();
      }

      if (this.props[eventName]) {
        this.props.dispatchActionCreator(this.props[eventName], event, this.props);
      }
    }
  }, {
    key: "checkIfActionInfoExist",
    value: function checkIfActionInfoExist() {
      var _this2 = this;

      _action.default.getOnProps(this.props).forEach(function (name) {
        if (typeof _this2.props[name] === 'string') {
          _actionCreator.default.get(_this2.context, _this2.props[name]);
        }
      });
    }
    /**
     * @return {object} ReactElement
     */

  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      this.checkIfActionInfoExist();

      var onProps = _action.default.getOnProps(this.props);

      var childrenWithProps = _react.default.Children.map(this.props.children, function (child) {
        var props = {};
        onProps.forEach(function (name) {
          props[name] = function (event) {
            return _this3.onEvent(event, name);
          };
        });
        return _react.default.cloneElement(child, props);
      });

      return _react.default.Children.only(childrenWithProps[0]);
    }
  }]);

  return Dispatcher;
}(_react.default.Component);

exports.Dispatcher = Dispatcher;

_defineProperty(Dispatcher, "displayName", 'Dispatcher');

_defineProperty(Dispatcher, "propTypes", {
  children: _propTypes.default.node.isRequired,
  stopPropagation: _propTypes.default.bool,
  preventDefault: _propTypes.default.bool,
  dispatchActionCreator: _propTypes.default.func
});

_defineProperty(Dispatcher, "contextTypes", {
  registry: _propTypes.default.object.isRequired
});

Dispatcher.defaultProps = {
  stopPropagation: false,
  preventDefault: false
};
var ConnectedDispatcher = (0, _cmfConnect.default)({
  withDispatchActionCreator: true
})(Dispatcher);
/**
 * This component purpose is to decorate any component and map an user event
 * to an action to be dispatched
 * @example
<Dispatcher onClick="actionCreator:identifier" onDrag="actionCreator:anotherid">
	<ChildrenElement />
</Dispatcher>
 */

var _default = ConnectedDispatcher;
exports.default = _default;

/***/ }),

/***/ "./node_modules/@talend/react-cmf/lib/Inject.component.js":
/*!****************************************************************!*\
  !*** ./node_modules/@talend/react-cmf/lib/Inject.component.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _component = _interopRequireDefault(__webpack_require__(/*! ./component */ "./node_modules/@talend/react-cmf/lib/component.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * The Inject component let you use the registry to render named component
 * using the registry. It will not break the app if component is not found
 * but it will display an error.
 * @module react-cmf/lib/Inject
 * @example
import { Inject } from '@talend/react-cmf';
// this is not the best example but it show the concept
function MyComponent(props) {
	return (
		<Inject component="Action" onClick={props.onClick}>
			<Inject component="Icon" icon={props.icon} />
		</Inject>
	);
}
 */
function NotFoundComponent(_ref) {
  var error = _ref.error;
  console.error(error);
  return _react.default.createElement("div", {
    className: "alert alert-danger"
  }, error.message);
}

NotFoundComponent.propTypes = {
  error: _propTypes.default.string.isRequired
};

function Inject(_ref2, context) {
  var component = _ref2.component,
      props = _objectWithoutProperties(_ref2, ["component"]);

  try {
    var Component = _component.default.get(component, context);

    return _react.default.createElement(Component, props);
  } catch (error) {
    return _react.default.createElement(NotFoundComponent, {
      error: error.message
    });
  }
}

Inject.contextTypes = {
  registry: _propTypes.default.object.isRequired
};
Inject.propTypes = {
  component: _propTypes.default.string.isRequired
};
Inject.NotFoundComponent = NotFoundComponent;
var _default = Inject;
exports.default = _default;

/***/ }),

/***/ "./node_modules/@talend/react-cmf/lib/RegistryProvider.js":
/*!****************************************************************!*\
  !*** ./node_modules/@talend/react-cmf/lib/RegistryProvider.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _registry = _interopRequireDefault(__webpack_require__(/*! ./registry */ "./node_modules/@talend/react-cmf/lib/registry.js"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * The provider is a JSX wrapper to inject the registry as a context var
 * You should never need to use this, it's an internal component
 */
var RegistryProvider =
/*#__PURE__*/
function (_React$Component) {
  _inherits(RegistryProvider, _React$Component);

  function RegistryProvider(props) {
    var _this;

    _classCallCheck(this, RegistryProvider);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(RegistryProvider).call(this, props));
    _this.registry = _registry.default.getRegistry();
    return _this;
  }
  /**
   * @return {object} child with registry as only key
   */


  _createClass(RegistryProvider, [{
    key: "getChildContext",
    value: function getChildContext() {
      return {
        registry: this.registry
      };
    }
    /**
     * react rendering
     * @return {object} ReactElement
     */

  }, {
    key: "render",
    value: function render() {
      return _react.Children.only(this.props.children);
    }
  }]);

  return RegistryProvider;
}(_react.default.Component);

exports.default = RegistryProvider;
RegistryProvider.propTypes = {
  children: _propTypes.default.element.isRequired
};
RegistryProvider.childContextTypes = {
  registry: _propTypes.default.object
};

/***/ }),

/***/ "./node_modules/@talend/react-cmf/lib/action.js":
/*!******************************************************!*\
  !*** ./node_modules/@talend/react-cmf/lib/action.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _get = _interopRequireDefault(__webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js"));

var _deprecated = _interopRequireDefault(__webpack_require__(/*! ./deprecated */ "./node_modules/@talend/react-cmf/lib/deprecated.js"));

var _actionCreator = _interopRequireDefault(__webpack_require__(/*! ./actionCreator */ "./node_modules/@talend/react-cmf/lib/actionCreator.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * This module is DEPRECATED and will be removed in future version.
 * it provide low level api to register and handle action in a CMF App.
 * @module react-cmf/lib/action
 * @see module:react-cmf/lib/Dispatcher
 */

/**
 * get the global actions registered in the settings
 * @param  {object} context
 * @return {object} actions with key === action id
 */
function getActionsById(context) {
  var state = context.store.getState();
  return (0, _get.default)(state, 'cmf.settings.actions', {});
}
/**
 * return actions registered for a given content type
 * @param  {object} context
 * @param  {String} contentType
 * @param  {String} category
 * @return {Array} actions
 */


function getContentTypeActions(context, contentType, category) {
  var state = context.store.getState();
  return (0, _get.default)(state, "cmf.settings.contentTypes[".concat(contentType, ".actions[").concat(category, "]"), []);
}
/**
 * Return information available about this action
 * @param  {object} context
 * @param  {String} id
 * @return {object}
 */


function getActionInfo(context, id) {
  var action = getActionsById(context)[id];

  if (!action) {
    throw new Error("action not found id: ".concat(id));
  }

  return _extends({}, action);
}
/**
 * Return the action object ready to be dispatched
 * This is supposed to be used outside of content type
 * @param  {object} context
 * @param  {String|Object} action or the action
 * @param  {object} event event which have trigger this action
 * @param  {object} data data attached to the action
 */


function getActionObject(context, action, event, data) {
  var actionInfo;

  if (typeof action === 'string') {
    actionInfo = getActionInfo(context, action);
  } else {
    actionInfo = action;
  }

  if (actionInfo.actionCreator) {
    var actionCreator = _actionCreator.default.get(context, actionInfo.actionCreator);

    return actionCreator(event, data, {
      store: context.store,
      getState: context.store.getState,
      registry: context.registry,
      actionInfo: actionInfo
    });
  }

  return _extends({}, actionInfo.payload, {
    event: event,
    data: data,
    context: context
  });
}
/**
 * return every props name that start with 'on'
 * @param  {object} props react props
 * @return {Array}       of string
 */


function getOnProps(props) {
  return Object.keys(props).filter(function (name) {
    return {}.hasOwnProperty.call(props, name) && /^on.+/.test(name);
  });
}
/**
 * create a map dispatchable action function expecting event object, props, and context information
 * merge this map with non event properties
 * @param  {Function} dispatch the dispatch function
 * @param  {object} props    props object containing maybe on(event) with string
 *                           or action creator function]
 * @return {object}          the connected object
 * @throws if an action is unknown in configuration, throw
 */


function mapDispatchToProps(dispatch, props) {
  var resolvedActions = {};
  getOnProps(props).forEach(function (name) {
    resolvedActions[name] = function (event, data, context) {
      var action = props[name];

      if (typeof action === 'string') {
        action = getActionObject(context, action, event, data);
      }

      dispatch(action);
    };
  });
  return _extends({}, props, resolvedActions);
}

var registerActionCreator = (0, _deprecated.default)(function (id, actionCreator, context) {
  return _actionCreator.default.register(id, actionCreator, context);
}, 'stop use cmf.action.registerActionCreator. please use cmf.actionCreator.register');
var getActionCreatorFunction = (0, _deprecated.default)(function (context, id) {
  return _actionCreator.default.get(context, id);
}, 'stop use cmf.action.getActionCreatorFunction. please use cmf.actionCreator.get');
var _default = {
  getActionsById: getActionsById,
  getActionCreatorFunction: getActionCreatorFunction,
  getActionInfo: getActionInfo,
  getActionObject: getActionObject,
  getContentTypeActions: getContentTypeActions,
  getOnProps: getOnProps,
  mapDispatchToProps: mapDispatchToProps,
  registerActionCreator: registerActionCreator
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/@talend/react-cmf/lib/actionCreator.js":
/*!*************************************************************!*\
  !*** ./node_modules/@talend/react-cmf/lib/actionCreator.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _registry = _interopRequireDefault(__webpack_require__(/*! ./registry */ "./node_modules/@talend/react-cmf/lib/registry.js"));

var _constant = _interopRequireDefault(__webpack_require__(/*! ./constant */ "./node_modules/@talend/react-cmf/lib/constant.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * return a function from the registry
 * @param  {object} context
 * @param  {string} id the id of the action creator
 * @return {function}
 */
function get(context, id) {
  var creator = context.registry["".concat(_constant.default.REGISTRY_ACTION_CREATOR_PREFIX, ":").concat(id)];

  if (!creator) {
    throw new Error("actionCreator not found in the registry: ".concat(id));
  }

  return creator;
}
/**
 * register your action creator. The action creator is a function with
 * the following arguments:
 * - event which trigger this action
 * - data attached to the action (could contains anything)
 * - context of the current react app (could contains registry, getState, ...)
 * @param  {String} id
 * @param  {Function} actionCreator (event, data, context)
 */


function register(id, actionCreator, context) {
  if (actionCreator === undefined) {
    throw new Error("CMF: you can't register an undefined value for the following action creator: '".concat(id, "'.\n\t\t\tYou may have an import error in your code. Check the stack trace and your bootstrap config imports.\n\t\t\thttps://github.com/Talend/ui/tree/master/packages/cmf/src/bootstrap.md"));
  }

  _registry.default.addToRegistry("".concat(_constant.default.REGISTRY_ACTION_CREATOR_PREFIX, ":").concat(id), actionCreator, context);
}
/**
 * This function allow to register an object with some action creators
 * @param {object} actionCreators map of action creators
 * @param {object} context optional context to get the registry
 */


var registerMany = _registry.default.getRegisterMany(register);

var _default = {
  get: get,
  register: register,
  registerMany: registerMany
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/@talend/react-cmf/lib/actions/collectionsActions.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@talend/react-cmf/lib/actions/collectionsActions.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.remove = remove;
exports.removeCollection = exports.mutateCollection = exports.addOrReplaceCollection = exports.mutate = exports.addOrReplace = exports.COLLECTION_MUTATE = exports.COLLECTION_REMOVE = exports.COLLECTION_ADD_OR_REPLACE = void 0;

var _curry = _interopRequireDefault(__webpack_require__(/*! lodash/curry */ "./node_modules/lodash/curry.js"));

var _constant = _interopRequireDefault(__webpack_require__(/*! ../constant */ "./node_modules/@talend/react-cmf/lib/constant.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @module react-cmf/lib/actions/collectionsActions
 */
// keep backward compatibility
var COLLECTION_ADD_OR_REPLACE = _constant.default.COLLECTION_ADD_OR_REPLACE,
    COLLECTION_REMOVE = _constant.default.COLLECTION_REMOVE,
    COLLECTION_MUTATE = _constant.default.COLLECTION_MUTATE;
/**
 * Add or replace collection data in store
 * curried function
 * @param {string | Array<string>} collectionId - path to collection
 * @param {any} data element that represent business data
 */

exports.COLLECTION_MUTATE = COLLECTION_MUTATE;
exports.COLLECTION_REMOVE = COLLECTION_REMOVE;
exports.COLLECTION_ADD_OR_REPLACE = COLLECTION_ADD_OR_REPLACE;
var addOrReplace = (0, _curry.default)(function (collectionId, data) {
  return {
    type: _constant.default.COLLECTION_ADD_OR_REPLACE,
    collectionId: collectionId,
    data: data
  };
});
/**
 * Remove collection data in store to free space
 * @param {string | Array<string>} collectionId - path to collection
 *
 * @throws if you try to remove non existent collection
 */

exports.addOrReplace = addOrReplace;

function remove(collectionId) {
  return {
    type: _constant.default.COLLECTION_REMOVE,
    collectionId: collectionId
  };
}
/**
 * mutateCollection let's you apply operations on a given collection
 * curried function
 * @param {string | Array<string>} collectionId - path to collection
 * @param {object} operations operations to be applied on the collection
 * {
 * 		add: [],
 * 		update: {},
 * 		delete: []
 * }
 */


var mutate = (0, _curry.default)(function (id, operations) {
  return {
    type: _constant.default.COLLECTION_MUTATE,
    id: id,
    operations: operations
  };
}); // backward compatibility

exports.mutate = mutate;
var addOrReplaceCollection = addOrReplace;
exports.addOrReplaceCollection = addOrReplaceCollection;
var mutateCollection = mutate;
exports.mutateCollection = mutateCollection;
var removeCollection = remove;
exports.removeCollection = removeCollection;

/***/ }),

/***/ "./node_modules/@talend/react-cmf/lib/actions/componentsActions.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@talend/react-cmf/lib/actions/componentsActions.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addState = addState;
exports.mergeComponentState = exports.removeComponentState = exports.addComponentState = exports.removeState = exports.mergeState = exports.COMPONENT_REMOVE_STATE = exports.COMPONENT_MERGE_STATE = exports.COMPONENT_ADD_STATE = void 0;

var _curry = _interopRequireDefault(__webpack_require__(/*! lodash/curry */ "./node_modules/lodash/curry.js"));

var _constant = _interopRequireDefault(__webpack_require__(/*! ../constant */ "./node_modules/@talend/react-cmf/lib/constant.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @module react-cmf/lib/actions/componentsActions
 */
// keep backward compatibility
var COMPONENT_ADD_STATE = _constant.default.COMPONENT_ADD_STATE,
    COMPONENT_MERGE_STATE = _constant.default.COMPONENT_MERGE_STATE,
    COMPONENT_REMOVE_STATE = _constant.default.COMPONENT_REMOVE_STATE;
/**
 * add a new component state with optional initialComponentState to the store
 *
 * @param {string} componentName : name of the component
 * @param {string} key : identifier of state used by this component
 * @param {object} initialComponentState : initial state of the component if required
 *
 * @throw if a component with this componentName associated to this key already exist
 */

exports.COMPONENT_REMOVE_STATE = COMPONENT_REMOVE_STATE;
exports.COMPONENT_MERGE_STATE = COMPONENT_MERGE_STATE;
exports.COMPONENT_ADD_STATE = COMPONENT_ADD_STATE;

function addState(componentName, key, initialComponentState) {
  return {
    type: _constant.default.COMPONENT_ADD_STATE,
    componentName: componentName,
    key: key,
    initialComponentState: initialComponentState
  };
}
/**
 * Merge new component state into actual component state in the store
 * curried function
 * @param {string} componentName : name of the component
 * @param {string} key : identifier of state used by this component
 * @param {object} componentState	: initial state of the component if required
 *
 * @throw if no componentName associated with this collectionId exist
 */


var mergeState = (0, _curry.default)(function (componentName, key, componentState) {
  return {
    type: _constant.default.COMPONENT_MERGE_STATE,
    componentName: componentName,
    key: key,
    componentState: componentState
  };
});
/**
 * Remove component state from the store
 * curried function
 * @param {string} componentName : name of the component
 * @param {string} key	: identifier of collection used by the component
 *
 * @throw if no componentName associated with this collectionId exist
 */

exports.mergeState = mergeState;
var removeState = (0, _curry.default)(function (componentName, key) {
  return {
    type: _constant.default.COMPONENT_REMOVE_STATE,
    componentName: componentName,
    key: key
  };
}); // backward compatbility

exports.removeState = removeState;
var addComponentState = addState;
exports.addComponentState = addComponentState;
var removeComponentState = removeState;
exports.removeComponentState = removeComponentState;
var mergeComponentState = mergeState;
exports.mergeComponentState = mergeComponentState;

/***/ }),

/***/ "./node_modules/@talend/react-cmf/lib/actions/http.js":
/*!************************************************************!*\
  !*** ./node_modules/@talend/react-cmf/lib/actions/http.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = http;
exports.DEFAULT_HTTP_HEADERS = void 0;

var _constants = __webpack_require__(/*! ../middlewares/http/constants */ "./node_modules/@talend/react-cmf/lib/middlewares/http/constants.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var DEFAULT_HTTP_HEADERS = {
  Accept: 'application/json',
  'Content-Type': 'application/json'
};
exports.DEFAULT_HTTP_HEADERS = DEFAULT_HTTP_HEADERS;

function onError(error) {
  return {
    type: _constants.ACTION_TYPE_HTTP_ERRORS,
    error: error
  };
}

function onRequest(url, config) {
  return {
    type: _constants.ACTION_TYPE_HTTP_REQUEST,
    url: url,
    config: config
  };
}

function onJSError(error, action) {
  console.error(error); // eslint-disable-line no-console

  return {
    type: _constants.ACTION_TYPE_HTTP_REDUCER_ERROR,
    error: error,
    action: action
  };
}

function onResponse(response) {
  return {
    type: _constants.ACTION_TYPE_HTTP_RESPONSE,
    data: response
  };
}

function onActionResponse(action, response, headers) {
  if (typeof action.onResponse === 'function') {
    return action.onResponse(response, headers);
  }

  return {
    type: action.onResponse,
    response: response,
    headers: headers
  };
}

function onActionError(action, error) {
  if (typeof action.onError === 'function') {
    return action.onError(error);
  }

  return {
    type: action.onError,
    error: error
  };
}

function http(config) {
  var method = config.method,
      url = config.url,
      data = config.data,
      rest = _objectWithoutProperties(config, ["method", "url", "data"]);

  return _objectSpread({
    type: _constants.HTTP_METHODS[method],
    body: data,
    url: url
  }, rest);
}

http.get = function get(url, config) {
  return http(_objectSpread({
    method: _constants.HTTP_METHODS.GET,
    url: url
  }, config));
};

http.post = function post(url, data, config) {
  return http(_objectSpread({
    method: _constants.HTTP_METHODS.POST,
    body: data,
    url: url
  }, config));
};

http.delete = function httpDelete(url, config) {
  return http(_objectSpread({
    method: _constants.HTTP_METHODS.DELETE,
    url: url
  }, config));
};

http.patch = function patch(url, data, config) {
  return http(_objectSpread({
    method: _constants.HTTP_METHODS.PATCH,
    body: data,
    url: url
  }, config));
};

http.put = function put(url, data, config) {
  return http(_objectSpread({
    method: _constants.HTTP_METHODS.PUT,
    url: url,
    body: data
  }, config));
};

http.head = function head(url, config) {
  return http(_objectSpread({
    method: _constants.HTTP_METHODS.HEAD,
    url: url
  }, config));
};

http.onError = onError;
http.onActionError = onActionError;
http.onJSError = onJSError;
http.onRequest = onRequest;
http.onResponse = onResponse;
http.onActionResponse = onActionResponse;

/***/ }),

/***/ "./node_modules/@talend/react-cmf/lib/actions/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/@talend/react-cmf/lib/actions/index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var collectionsActions = _interopRequireWildcard(__webpack_require__(/*! ./collectionsActions */ "./node_modules/@talend/react-cmf/lib/actions/collectionsActions.js"));

var componentsActions = _interopRequireWildcard(__webpack_require__(/*! ./componentsActions */ "./node_modules/@talend/react-cmf/lib/actions/componentsActions.js"));

var settingsActions = _interopRequireWildcard(__webpack_require__(/*! ./settingsActions */ "./node_modules/@talend/react-cmf/lib/actions/settingsActions.js"));

var saga = _interopRequireWildcard(__webpack_require__(/*! ./saga */ "./node_modules/@talend/react-cmf/lib/actions/saga.js"));

var _http = _interopRequireDefault(__webpack_require__(/*! ./http */ "./node_modules/@talend/react-cmf/lib/actions/http.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * @module react-cmf/lib/actions
 * @see module:react-cmf/lib/actions/collectionsActions
 * @see module:react-cmf/lib/actions/componentsActions
 * @see module:react-cmf/lib/actions/settingsActions
 */

/**
 * exported API
 * @example
	import {
	collectionsActions,
	componentsActions,
	settingsActions
} from 'react-cmf/lib/actions';
 * @type {Object}
 */
var _default = {
  collectionsActions: collectionsActions,
  componentsActions: componentsActions,
  settingsActions: settingsActions,
  http: _http.default,
  collections: collectionsActions,
  components: componentsActions,
  settings: settingsActions,
  saga: saga
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/@talend/react-cmf/lib/actions/saga.js":
/*!************************************************************!*\
  !*** ./node_modules/@talend/react-cmf/lib/actions/saga.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.start = start;
exports.stop = stop;

var _omit = _interopRequireDefault(__webpack_require__(/*! lodash/omit */ "./node_modules/lodash/omit.js"));

var _constant = _interopRequireDefault(__webpack_require__(/*! ../constant */ "./node_modules/@talend/react-cmf/lib/constant.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propsToOmit = ['children', 'getComponent'].concat(_constant.default.INJECTED_PROPS, _constant.default.CMF_PROPS);

function start() {
  var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var data = arguments.length > 1 ? arguments[1] : undefined;
  return {
    type: _constant.default.DID_MOUNT_SAGA_START,
    saga: data.saga,
    componentId: data.componentId,
    props: (0, _omit.default)(data, propsToOmit),
    // deprecated
    event: event
  };
}

function stop(event, data) {
  return {
    type: "".concat(_constant.default.WILL_UNMOUNT_SAGA_STOP, "_").concat(data.saga),
    event: event
  };
}

/***/ }),

/***/ "./node_modules/@talend/react-cmf/lib/actions/settingsActions.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@talend/react-cmf/lib/actions/settingsActions.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.requestSettings = requestSettings;
exports.receiveSettings = receiveSettings;
exports.errorWithSettings = errorWithSettings;
exports.fetchSettings = fetchSettings;
exports.REQUEST_SETTINGS = exports.REQUEST_KO = exports.REQUEST_OK = void 0;

var _get = _interopRequireDefault(__webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js"));

var _http = _interopRequireDefault(__webpack_require__(/*! ./http */ "./node_modules/@talend/react-cmf/lib/actions/http.js"));

var _constant = _interopRequireDefault(__webpack_require__(/*! ../constant */ "./node_modules/@talend/react-cmf/lib/constant.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @module react-cmf/lib/actions/settingsActions
 */
// keep backward compatibility
var REQUEST_OK = _constant.default.REQUEST_OK,
    REQUEST_KO = _constant.default.REQUEST_KO,
    REQUEST_SETTINGS = _constant.default.REQUEST_SETTINGS;
exports.REQUEST_SETTINGS = REQUEST_SETTINGS;
exports.REQUEST_KO = REQUEST_KO;
exports.REQUEST_OK = REQUEST_OK;

function requestSettings() {
  return {
    type: _constant.default.REQUEST_SETTINGS
  };
}

function receiveSettings(json) {
  return {
    type: _constant.default.REQUEST_OK,
    settings: json,
    receivedAt: Date.now()
  };
}

function errorWithSettings(error) {
  return {
    type: _constant.default.REQUEST_KO,
    error: {
      message: (0, _get.default)(error, 'message'),
      stack: (0, _get.default)(error, 'stack')
    }
  };
}
/**
 * get the settings on the server and dispatch the corresponding actions
 * this should be executed during the bootstrap of the App.
 * @param path Path of the settings.json file to fetch. Default 'settings.json'
 * @return {function} with the fetch process results
 */


function fetchSettings() {
  var path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'settings.json';
  return _http.default.get(path, {
    onResponse: function onResponse(response) {
      return receiveSettings(response);
    },
    onError: function onError(error) {
      return errorWithSettings(error);
    }
  });
}

/***/ }),

/***/ "./node_modules/@talend/react-cmf/lib/assert.js":
/*!******************************************************!*\
  !*** ./node_modules/@talend/react-cmf/lib/assert.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.assertValueTypeOf = assertValueTypeOf;
exports.assertTypeOf = assertTypeOf;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function assertValueTypeOf(value, type) {
  var toThrow = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

  if (value === undefined) {
    return true;
  }

  if (type === 'Array' && Array.isArray(value)) {
    return true;
  }

  var isTypeCorrect;

  if (Array.isArray(type)) {
    isTypeCorrect = type.some(function (currentType) {
      return assertValueTypeOf(value, currentType, false);
    });
  } else {
    // eslint-disable-next-line valid-typeof
    isTypeCorrect = _typeof(value) === type && !Array.isArray(value);
  }

  if (toThrow && isTypeCorrect === false) {
    throw new Error("".concat(value, " must be a ").concat(type, " but got ").concat(_typeof(value)));
  }

  return isTypeCorrect;
}

function assertTypeOf(options, attr, type) {
  var isTypeCorrect = assertValueTypeOf(options[attr], type, false);

  if (isTypeCorrect === false) {
    throw new Error("".concat(attr, " must be a ").concat(type, " but got ").concat(_typeof(options[attr])));
  }

  return isTypeCorrect;
}

/***/ }),

/***/ "./node_modules/@talend/react-cmf/lib/bootstrap.js":
/*!*********************************************************!*\
  !*** ./node_modules/@talend/react-cmf/lib/bootstrap.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bootstrapRegistry = bootstrapRegistry;
exports.bootstrapSaga = bootstrapSaga;
exports.bootstrapRedux = bootstrapRedux;
exports.default = bootstrap;
exports.bactchedSubscribe = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _reactDom = __webpack_require__(/*! react-dom */ "react-dom");

var _reduxSaga = _interopRequireDefault(__webpack_require__(/*! redux-saga */ "redux-saga"));

var _reduxBatchedSubscribe = __webpack_require__(/*! redux-batched-subscribe */ "./node_modules/redux-batched-subscribe/lib/index.js");

var _effects = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/es/effects.js");

var _redux = _interopRequireDefault(__webpack_require__(/*! redux */ "redux"));

var _App = _interopRequireDefault(__webpack_require__(/*! ./App */ "./node_modules/@talend/react-cmf/lib/App.js"));

var _actionCreator = _interopRequireDefault(__webpack_require__(/*! ./actionCreator */ "./node_modules/@talend/react-cmf/lib/actionCreator.js"));

var _actions = _interopRequireDefault(__webpack_require__(/*! ./actions */ "./node_modules/@talend/react-cmf/lib/actions/index.js"));

var _assert = __webpack_require__(/*! ./assert */ "./node_modules/@talend/react-cmf/lib/assert.js");

var _component = _interopRequireDefault(__webpack_require__(/*! ./component */ "./node_modules/@talend/react-cmf/lib/component.js"));

var _expression = _interopRequireDefault(__webpack_require__(/*! ./expression */ "./node_modules/@talend/react-cmf/lib/expression.js"));

var _onError = _interopRequireDefault(__webpack_require__(/*! ./onError */ "./node_modules/@talend/react-cmf/lib/onError.js"));

var _store = _interopRequireDefault(__webpack_require__(/*! ./store */ "./node_modules/@talend/react-cmf/lib/store.js"));

var _registry = _interopRequireDefault(__webpack_require__(/*! ./registry */ "./node_modules/@talend/react-cmf/lib/registry.js"));

var _sagas = _interopRequireDefault(__webpack_require__(/*! ./sagas */ "./node_modules/@talend/react-cmf/lib/sagas/index.js"));

var _register = __webpack_require__(/*! ./register */ "./node_modules/@talend/react-cmf/lib/register.js");

var _cmfModule = _interopRequireDefault(__webpack_require__(/*! ./cmfModule */ "./node_modules/@talend/react-cmf/lib/cmfModule.js"));

var _httpInterceptors = _interopRequireDefault(__webpack_require__(/*! ./httpInterceptors */ "./node_modules/@talend/react-cmf/lib/httpInterceptors.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var bactchedSubscribe = (0, _reduxBatchedSubscribe.batchedSubscribe)(function (notify) {
  requestAnimationFrame(notify);
});
exports.bactchedSubscribe = bactchedSubscribe;

function bootstrapRegistry(options) {
  (0, _assert.assertTypeOf)(options, 'sagas', 'object');
  (0, _assert.assertTypeOf)(options, 'components', 'object');
  (0, _assert.assertTypeOf)(options, 'expressions', 'object');
  (0, _assert.assertTypeOf)(options, 'actionCreators', 'object');
  (0, _assert.assertTypeOf)(options, 'registry', 'object');
  (0, _register.registerInternals)();

  if (options.registry) {
    _registry.default.registerMany(options.registry);
  }

  if (options.components) {
    _component.default.registerMany(options.components);
  }

  if (options.expressions) {
    _expression.default.registerMany(options.expressions);
  }

  if (options.actionCreators) {
    _actionCreator.default.registerMany(options.actionCreators);
  }

  if (options.sagas) {
    _sagas.default.registerMany(options.sagas);
  }
}

function bootstrapSaga(options) {
  var _marked =
  /*#__PURE__*/
  regeneratorRuntime.mark(cmfSaga);

  (0, _assert.assertTypeOf)(options, 'saga', 'function');

  function cmfSaga() {
    return regeneratorRuntime.wrap(function cmfSaga$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _effects.spawn)(_sagas.default.component.handle);

          case 2:
            if (!(typeof options.saga === 'function')) {
              _context.next = 5;
              break;
            }

            _context.next = 5;
            return (0, _effects.spawn)(options.saga);

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _marked);
  } // https://chrome.google.com/webstore/detail/redux-saga-dev-tools/kclmpmjofefcpjlommdpokoccidafnbi
  // eslint-disable-next-line no-underscore-dangle


  var sagaMonitor = window.__SAGA_MONITOR_EXTENSION__;
  var middleware = (0, _reduxSaga.default)({
    onError: _onError.default.report,
    sagaMonitor: sagaMonitor
  });
  return {
    middleware: middleware,
    run: function run() {
      return middleware.run(cmfSaga);
    }
  };
}

function bootstrapRedux(options, sagaMiddleware) {
  (0, _assert.assertTypeOf)(options, 'settingsURL', 'string');
  (0, _assert.assertTypeOf)(options, 'preReducer', ['Array', 'function']);
  (0, _assert.assertTypeOf)(options, 'httpMiddleware', 'function');
  (0, _assert.assertTypeOf)(options, 'enhancer', 'function');
  (0, _assert.assertTypeOf)(options, 'preloadedState', 'object');
  (0, _assert.assertTypeOf)(options, 'middlewares', 'Array');
  (0, _assert.assertTypeOf)(options, 'storeCallback', 'function');
  (0, _assert.assertTypeOf)(options, 'reducer', 'object');

  if (options.preReducer) {
    _store.default.addPreReducer(options.preReducer);
  }

  if (typeof options.httpMiddleware === 'function') {
    _store.default.setHttpMiddleware(options.httpMiddleware);
  }

  var enhancer = bactchedSubscribe;

  if (typeof options.enhancer === 'function') {
    enhancer = (0, _redux.default)(options.enhancer, bactchedSubscribe);
  }

  var middlewares = options.middlewares || [];

  var store = _store.default.initialize(options.reducer, options.preloadedState, enhancer, [].concat(_toConsumableArray(middlewares), [sagaMiddleware]));

  if (options.settingsURL) {
    store.dispatch(_actions.default.settings.fetchSettings(options.settingsURL));
  }

  if (typeof options.storeCallback === 'function') {
    options.storeCallback(store);
  }

  return store;
}

function bootstrapInterceptors(options) {
  if (options.httpInterceptors) {
    options.httpInterceptors.forEach(_httpInterceptors.default.push);
  }
}

function DefaultRootComponent() {
  return 'RootComponent is required';
}
/**
 * Bootstrap your cmf app
 * It takes your configuration and provides a very good default one.
 * By default it starts react with the following addons:
 * - redux
 * - redux-saga
 * @param {object} options the set of supported options
 * @returns {object} app object with render function
 */


function bootstrap() {
  return _bootstrap.apply(this, arguments);
}

function _bootstrap() {
  _bootstrap = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee() {
    var appOptions,
        options,
        appId,
        saga,
        store,
        RootComponent,
        element,
        _args2 = arguments;
    return regeneratorRuntime.wrap(function _callee$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            appOptions = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : {};
            _context2.next = 3;
            return (0, _cmfModule.default)(appOptions);

          case 3:
            options = _context2.sent;
            (0, _assert.assertTypeOf)(options, 'root', 'object');
            (0, _assert.assertTypeOf)(options, 'appId', 'string');
            (0, _assert.assertTypeOf)(options, 'RootComponent', 'function');
            bootstrapRegistry(options);
            bootstrapInterceptors(options);
            appId = options.appId || 'app';
            saga = bootstrapSaga(options);
            store = bootstrapRedux(options, saga.middleware);

            _onError.default.bootstrap(options, store);

            saga.run();
            RootComponent = options.RootComponent || DefaultRootComponent;
            element = options.root || document.getElementById(appId);
            (0, _reactDom.render)(_react.default.createElement(_App.default, {
              store: store,
              loading: options.AppLoader,
              withSettings: !!options.settingsURL
            }, _react.default.createElement(RootComponent, null)), element);

          case 17:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee);
  }));
  return _bootstrap.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@talend/react-cmf/lib/cmfConnect.js":
/*!**********************************************************!*\
  !*** ./node_modules/@talend/react-cmf/lib/cmfConnect.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getComponentName = getComponentName;
exports.getComponentId = getComponentId;
exports.getStateToProps = getStateToProps;
exports.getDispatchToProps = getDispatchToProps;
exports.getMergeProps = getMergeProps;
exports.default = cmfConnect;

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _hoistNonReactStatics = _interopRequireDefault(__webpack_require__(/*! hoist-non-react-statics */ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js"));

var _reactImmutableProptypes = _interopRequireDefault(__webpack_require__(/*! react-immutable-proptypes */ "./node_modules/react-immutable-proptypes/dist/ImmutablePropTypes.js"));

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

var _uuid = __webpack_require__(/*! uuid */ "uuid");

var _actions = _interopRequireDefault(__webpack_require__(/*! ./actions */ "./node_modules/@talend/react-cmf/lib/actions/index.js"));

var _actionCreator = _interopRequireDefault(__webpack_require__(/*! ./actionCreator */ "./node_modules/@talend/react-cmf/lib/actionCreator.js"));

var _component = _interopRequireDefault(__webpack_require__(/*! ./component */ "./node_modules/@talend/react-cmf/lib/component.js"));

var _constant = _interopRequireDefault(__webpack_require__(/*! ./constant */ "./node_modules/@talend/react-cmf/lib/constant.js"));

var _expression = _interopRequireDefault(__webpack_require__(/*! ./expression */ "./node_modules/@talend/react-cmf/lib/expression.js"));

var _onEvent = _interopRequireDefault(__webpack_require__(/*! ./onEvent */ "./node_modules/@talend/react-cmf/lib/onEvent.js"));

var _componentState = __webpack_require__(/*! ./componentState */ "./node_modules/@talend/react-cmf/lib/componentState.js");

var _settings = __webpack_require__(/*! ./settings */ "./node_modules/@talend/react-cmf/lib/settings.js");

var _omit = _interopRequireDefault(__webpack_require__(/*! ./omit */ "./node_modules/@talend/react-cmf/lib/omit.js"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function getComponentName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

function getComponentId(componentId, props) {
  if (typeof componentId === 'function') {
    return componentId(props) || 'default';
  } else if (typeof componentId === 'string') {
    return componentId;
  } else if (props.componentId) {
    return props.componentId;
  }

  return 'default';
}

function getStateToProps(_ref) {
  var defaultProps = _ref.defaultProps,
      componentId = _ref.componentId,
      ownProps = _ref.ownProps,
      state = _ref.state,
      mapStateToProps = _ref.mapStateToProps,
      WrappedComponent = _ref.WrappedComponent;

  var props = _extends({}, defaultProps);

  var cmfProps = (0, _componentState.getStateProps)(state, getComponentName(WrappedComponent), getComponentId(componentId, ownProps));

  _extends(props, cmfProps);

  var viewProps = (0, _settings.mapStateToViewProps)(state, ownProps, getComponentName(WrappedComponent), getComponentId(componentId, ownProps));

  _extends(props, viewProps);

  var userProps = {};

  if (mapStateToProps) {
    userProps = mapStateToProps(state, _objectSpread({}, ownProps, {}, props), cmfProps);
  }

  _extends(props, userProps);

  _extends(props, _expression.default.mapStateToProps(state, _objectSpread({}, ownProps, {}, props)));

  return props;
}

function getDispatchToProps(_ref2) {
  var defaultState = _ref2.defaultState,
      dispatch = _ref2.dispatch,
      componentId = _ref2.componentId,
      mapDispatchToProps = _ref2.mapDispatchToProps,
      ownProps = _ref2.ownProps,
      WrappedComponent = _ref2.WrappedComponent;
  var cmfProps = (0, _componentState.getStateAccessors)(dispatch, getComponentName(WrappedComponent), getComponentId(componentId, ownProps), defaultState);
  cmfProps.dispatch = dispatch;
  cmfProps.getComponent = _component.default.get;

  cmfProps.dispatchActionCreator = function (actionId, event, data, context) {
    dispatch(_actionCreator.default.get(context, actionId)(event, data, context));
  };

  var userProps = {};

  if (mapDispatchToProps) {
    if (true) {
      // eslint-disable-next-line no-console
      console.warn("DEPRECATION WARNING: mapDispatchToProps will be removed from cmfConnect.\n\t\t\tPlease use the injectedProps dispatchActionCreator or dispatch");
    }

    userProps = mapDispatchToProps(dispatch, ownProps, cmfProps);
  }

  return _objectSpread({}, cmfProps, {}, userProps);
}
/**
 * Internal: you should not have to use this
 * return the merged props which cleanup expression props
 * call mergeProps if exists after the cleanup
 * @param {object} options { mergeProps, stateProps, dispatchProps, ownProps }
 */


function getMergeProps(_ref3) {
  var mergeProps = _ref3.mergeProps,
      stateProps = _ref3.stateProps,
      dispatchProps = _ref3.dispatchProps,
      ownProps = _ref3.ownProps;

  if (mergeProps) {
    return mergeProps(_expression.default.mergeProps(stateProps), _expression.default.mergeProps(dispatchProps), _expression.default.mergeProps(ownProps));
  }

  return _objectSpread({}, _expression.default.mergeProps(ownProps), {}, _expression.default.mergeProps(dispatchProps), {}, _expression.default.mergeProps(stateProps));
}
/**
 * this function wrap your component to inject CMF props
 * @example
 * The following props are injected:
 * - props.state
 * - props.setState
 * - props.initState (you should never have to call it your self)
 * - dispatch(action)
 * - dispatchActionCreator(id, event, data, [context])
 *
 * support for the following props
 * - initialState (called by props.initState)
 * - didMountActionCreator (id or array of id)
 * - willUnMountActionCreator (id or array of id)
 * - componentId (or will use uuid)
 * - keepComponentState (boolean, overrides the keepComponentState defined in container)
 * - didMountActionCreator (string called as action creator in didMount)
 * - view (string to inject the settings as props with ref support)
 * - whateverExpression (will inject `whatever` props and will remove it)
 * @example
 * options has the following shape:
{
	componentId,  // string or function(props) to compute the id in the store
	defaultState,  // the default state when the component is mount
	keepComponent,  // boolean, when the component is unmount, to keep it's state in redux store
	mapStateToProps,  // function(state, ownProps) that should return the props (same as redux)
	mapDispatchToProps,  // same as redux connect arg, you should use dispatchActionCreator instead
	mergeProps,  // same as redux connect
}
 * @param {object} options Option objects to configure the redux connect
 * @return {ReactComponent}
 */


function cmfConnect() {
  var _ref4 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var componentId = _ref4.componentId,
      defaultState = _ref4.defaultState,
      defaultProps = _ref4.defaultProps,
      keepComponentState = _ref4.keepComponentState,
      mapStateToProps = _ref4.mapStateToProps,
      mapDispatchToProps = _ref4.mapDispatchToProps,
      mergeProps = _ref4.mergeProps,
      _ref4$omitCMFProps = _ref4.omitCMFProps,
      omitCMFProps = _ref4$omitCMFProps === void 0 ? true : _ref4$omitCMFProps,
      _ref4$withComponentRe = _ref4.withComponentRegistry,
      withComponentRegistry = _ref4$withComponentRe === void 0 ? false : _ref4$withComponentRe,
      _ref4$withDispatch = _ref4.withDispatch,
      withDispatch = _ref4$withDispatch === void 0 ? false : _ref4$withDispatch,
      _ref4$withDispatchAct = _ref4.withDispatchActionCreator,
      withDispatchActionCreator = _ref4$withDispatchAct === void 0 ? false : _ref4$withDispatchAct,
      _ref4$withComponentId = _ref4.withComponentId,
      withComponentId = _ref4$withComponentId === void 0 ? false : _ref4$withComponentId,
      rest = _objectWithoutProperties(_ref4, ["componentId", "defaultState", "defaultProps", "keepComponentState", "mapStateToProps", "mapDispatchToProps", "mergeProps", "omitCMFProps", "withComponentRegistry", "withDispatch", "withDispatchActionCreator", "withComponentId"]);

  var propsToOmit = [];

  if (omitCMFProps) {
    if (!defaultState) {
      propsToOmit.push.apply(propsToOmit, _toConsumableArray(_constant.default.INJECTED_STATE_PROPS));
    }

    if (!withComponentRegistry) {
      propsToOmit.push('getComponent');
    }

    if (!withComponentId) {
      propsToOmit.push('componentId');
    }

    if (!withDispatch) {
      propsToOmit.push('dispatch');
    }

    if (!withDispatchActionCreator) {
      propsToOmit.push('dispatchActionCreator');
    }
  }

  var displayNameWarning = true;
  return function wrapWithCMF(WrappedComponent) {
    if (!WrappedComponent.displayName && displayNameWarning) {
      displayNameWarning = false; // eslint-disable-next-line no-console

      console.warn("".concat(WrappedComponent.name, " has no displayName. Please read https://jira.talendforge.org/browse/TUI-302"));
    }

    function getState(state) {
      var id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'default';
      return state.cmf.components.getIn([getComponentName(WrappedComponent), id], defaultState);
    }

    function getSetStateAction(state, id, type) {
      return {
        type: type || "".concat(getComponentName(WrappedComponent), ".setState"),
        cmf: {
          componentState: _actions.default.components.mergeState(getComponentName(WrappedComponent), id, state)
        }
      };
    }

    var CMFContainer =
    /*#__PURE__*/
    function (_React$Component) {
      _inherits(CMFContainer, _React$Component);

      function CMFContainer(props, context) {
        var _this;

        _classCallCheck(this, CMFContainer);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(CMFContainer).call(this, props, context));
        _this.dispatchActionCreator = _this.dispatchActionCreator.bind(_assertThisInitialized(_this));
        _this.getOnEventProps = _this.getOnEventProps.bind(_assertThisInitialized(_this));
        _this.id = (0, _uuid.v4)();
        return _this;
      }

      _createClass(CMFContainer, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          (0, _componentState.initState)(this.props);

          if (this.props.saga) {
            this.dispatchActionCreator('cmf.saga.start', {
              type: 'DID_MOUNT',
              componentId: this.id
            }, _objectSpread({}, this.props, {
              // DEPRECATED
              componentId: getComponentId(componentId, this.props)
            }));
          }

          if (this.props.didMountActionCreator) {
            this.dispatchActionCreator(this.props.didMountActionCreator, null, this.props);
          }
        }
      }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          if (this.props.willUnmountActionCreator) {
            this.dispatchActionCreator(this.props.willUnmountActionCreator, null, this.props);
          } // if the props.keepComponentState is present we have to stick to it


          if (this.props.keepComponentState === false || this.props.keepComponentState === undefined && !keepComponentState) {
            this.props.deleteState(this.props.initialState);
          }

          if (this.props.saga) {
            this.dispatchActionCreator('cmf.saga.stop', {
              type: 'WILL_UNMOUNT',
              componentId: this.id
            }, this.props);
          }
        }
      }, {
        key: "getOnEventProps",
        value: function getOnEventProps() {
          var _this2 = this;

          return Object.keys(this.props).reduce(function (props, key) {
            _onEvent.default.addOnEventSupport(_onEvent.default.DISPATCH, _this2, props, key);

            _onEvent.default.addOnEventSupport(_onEvent.default.ACTION_CREATOR, _this2, props, key);

            _onEvent.default.addOnEventSupport(_onEvent.default.SETSTATE, _this2, props, key);

            return props;
          }, {
            toOmit: []
          });
        }
      }, {
        key: "dispatchActionCreator",
        value: function dispatchActionCreator(actionCreatorId, event, data, context) {
          var extendedContext = _extends({}, this.context, context);

          this.props.dispatchActionCreator(actionCreatorId, event, data, extendedContext);
        }
      }, {
        key: "render",
        value: function render() {
          if (this.props.renderIf === false) {
            return null;
          }

          var _this$getOnEventProps = this.getOnEventProps(),
              toOmit = _this$getOnEventProps.toOmit,
              spreadCMFState = _this$getOnEventProps.spreadCMFState,
              handlers = _objectWithoutProperties(_this$getOnEventProps, ["toOmit", "spreadCMFState"]); // remove all internal props already used by the container


          toOmit.push.apply(toOmit, _toConsumableArray(_constant.default.CMF_PROPS).concat(propsToOmit));

          if (this.props.omitRouterProps) {
            toOmit.push.apply(toOmit, ['omitRouterProps'].concat(_toConsumableArray(_constant.default.INJECTED_ROUTER_PROPS)));
          }

          var spreadedState = {};

          if ((spreadCMFState || this.props.spreadCMFState) && this.props.state) {
            spreadedState = this.props.state.toJS();
          }

          var props = _objectSpread({}, (0, _omit.default)(this.props, toOmit), {}, handlers, {}, spreadedState);

          if (props.dispatchActionCreator && props.dispatchActionCreator && toOmit.indexOf('dispatchActionCreator') === -1) {
            // override to inject CMFContainer context
            props.dispatchActionCreator = this.dispatchActionCreator;
          }

          if (!props.state && defaultState && toOmit.indexOf('state') === -1) {
            props.state = defaultState;
          }

          return (0, _react.createElement)(WrappedComponent, props);
        }
      }]);

      return CMFContainer;
    }(_react.default.Component);

    _defineProperty(CMFContainer, "displayName", "CMF(".concat(getComponentName(WrappedComponent), ")"));

    _defineProperty(CMFContainer, "propTypes", _objectSpread({}, cmfConnect.propTypes));

    _defineProperty(CMFContainer, "contextTypes", {
      store: _propTypes.default.object,
      registry: _propTypes.default.object,
      router: _propTypes.default.object
    });

    _defineProperty(CMFContainer, "WrappedComponent", WrappedComponent);

    _defineProperty(CMFContainer, "getState", getState);

    _defineProperty(CMFContainer, "setStateAction", function setStateAction(state) {
      var id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'default';
      var type = arguments.length > 2 ? arguments[2] : undefined;

      if (typeof state !== 'function') {
        return getSetStateAction(state, id, type);
      }

      return function (_, getReduxState) {
        return getSetStateAction(state(getState(getReduxState(), id)), id, type);
      };
    });

    var Connected = (0, _reactRedux.connect)(function (state, ownProps) {
      return getStateToProps({
        componentId: componentId,
        defaultProps: defaultProps,
        defaultState: defaultState,
        ownProps: ownProps,
        state: state,
        mapStateToProps: mapStateToProps,
        WrappedComponent: WrappedComponent
      });
    }, function (dispatch, ownProps) {
      return getDispatchToProps({
        defaultState: defaultState,
        dispatch: dispatch,
        componentId: componentId,
        mapDispatchToProps: mapDispatchToProps,
        ownProps: ownProps,
        WrappedComponent: WrappedComponent
      });
    }, function (stateProps, dispatchProps, ownProps) {
      return getMergeProps({
        mergeProps: mergeProps,
        stateProps: stateProps,
        dispatchProps: dispatchProps,
        ownProps: ownProps
      });
    }, _objectSpread({}, rest))((0, _hoistNonReactStatics.default)(CMFContainer, WrappedComponent));
    Connected.CMFContainer = CMFContainer;
    return Connected;
  };
}

cmfConnect.INJECTED_PROPS = _constant.default.INJECTED_PROPS;
cmfConnect.INJECTED_STATE_PROPS = _constant.default.INJECTED_STATE_PROPS;
cmfConnect.INJECTED_ROUTER_PROPS = _constant.default.INJECTED_ROUTER_PROPS;
cmfConnect.ALL_INJECTED_PROPS = _constant.default.INJECTED_PROPS.concat(['getComponent', 'componentId']);
cmfConnect.omit = _omit.default;

cmfConnect.omitAllProps = function (props) {
  return cmfConnect.omit(props, cmfConnect.ALL_INJECTED_PROPS);
};

cmfConnect.propTypes = {
  state: _reactImmutableProptypes.default.map,
  initialState: _propTypes.default.oneOfType([_reactImmutableProptypes.default.map, _propTypes.default.object]),
  getComponent: _propTypes.default.func,
  setState: _propTypes.default.func,
  initState: _propTypes.default.func,
  dispatchActionCreator: _propTypes.default.func,
  dispatch: _propTypes.default.func
};

/***/ }),

/***/ "./node_modules/@talend/react-cmf/lib/cmfModule.js":
/*!*********************************************************!*\
  !*** ./node_modules/@talend/react-cmf/lib/cmfModule.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = mergeModulesAndApp;

var _cmfModule = _interopRequireDefault(__webpack_require__(/*! ./cmfModule.merge */ "./node_modules/@talend/react-cmf/lib/cmfModule.merge.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _asyncIterator(iterable) { var method; if (typeof Symbol !== "undefined") { if (Symbol.asyncIterator) { method = iterable[Symbol.asyncIterator]; if (method != null) return method.call(iterable); } if (Symbol.iterator) { method = iterable[Symbol.iterator]; if (method != null) return method.call(iterable); } } throw new TypeError("Object is not async iterable"); }

function getModule(_x) {
  return _getModule.apply(this, arguments);
}

function _getModule() {
  _getModule = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(module) {
    var init, syncModule, asyncModule;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            init = module.init, syncModule = _objectWithoutProperties(module, ["init"]);

            if (!init) {
              _context.next = 6;
              break;
            }

            _context.next = 4;
            return init();

          case 4:
            asyncModule = _context.sent;
            return _context.abrupt("return", _objectSpread({}, syncModule, {}, asyncModule));

          case 6:
            return _context.abrupt("return", syncModule);

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getModule.apply(this, arguments);
}

function find(_x2) {
  return _find.apply(this, arguments);
}
/**
 * This function find all modules then it merge all configurations
 * @return {Object} the configuration for cmf.bootstrap
 */


function _find() {
  _find = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(options) {
    var buff,
        _iteratorNormalCompletion,
        _didIteratorError,
        _iteratorError,
        _loop,
        _iterator,
        _step,
        _value,
        _args3 = arguments;

    return regeneratorRuntime.wrap(function _callee2$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            buff = _args3.length > 1 && _args3[1] !== undefined ? _args3[1] : [];

            if (!options.modules) {
              _context3.next = 35;
              break;
            }

            _iteratorNormalCompletion = true;
            _didIteratorError = false;
            _context3.prev = 4;
            _loop =
            /*#__PURE__*/
            regeneratorRuntime.mark(function _loop() {
              var current, module;
              return regeneratorRuntime.wrap(function _loop$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      current = _value;

                      if (current.id) {
                        _context2.next = 3;
                        break;
                      }

                      throw new Error('a cmf.module must have an id');

                    case 3:
                      if (!buff.some(function (_ref) {
                        var id = _ref.id;
                        return current.id === id;
                      })) {
                        _context2.next = 7;
                        break;
                      }

                      console.warn("cmf.bootstrap: 2 modules have the same id ".concat(current.id, ". This duplicated module will be skipped."));
                      _context2.next = 13;
                      break;

                    case 7:
                      _context2.next = 9;
                      return getModule(current);

                    case 9:
                      module = _context2.sent;
                      buff.push(module);
                      _context2.next = 13;
                      return find(module, buff);

                    case 13:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _loop);
            });
            _iterator = _asyncIterator(options.modules);

          case 7:
            _context3.next = 9;
            return _iterator.next();

          case 9:
            _step = _context3.sent;
            _iteratorNormalCompletion = _step.done;
            _context3.next = 13;
            return _step.value;

          case 13:
            _value = _context3.sent;

            if (_iteratorNormalCompletion) {
              _context3.next = 19;
              break;
            }

            return _context3.delegateYield(_loop(), "t0", 16);

          case 16:
            _iteratorNormalCompletion = true;
            _context3.next = 7;
            break;

          case 19:
            _context3.next = 25;
            break;

          case 21:
            _context3.prev = 21;
            _context3.t1 = _context3["catch"](4);
            _didIteratorError = true;
            _iteratorError = _context3.t1;

          case 25:
            _context3.prev = 25;
            _context3.prev = 26;

            if (!(!_iteratorNormalCompletion && _iterator.return != null)) {
              _context3.next = 30;
              break;
            }

            _context3.next = 30;
            return _iterator.return();

          case 30:
            _context3.prev = 30;

            if (!_didIteratorError) {
              _context3.next = 33;
              break;
            }

            throw _iteratorError;

          case 33:
            return _context3.finish(30);

          case 34:
            return _context3.finish(25);

          case 35:
            return _context3.abrupt("return", buff);

          case 36:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee2, null, [[4, 21, 25, 35], [26,, 30, 34]]);
  }));
  return _find.apply(this, arguments);
}

function mergeModulesAndApp(_x3) {
  return _mergeModulesAndApp.apply(this, arguments);
}

function _mergeModulesAndApp() {
  _mergeModulesAndApp = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3(options) {
    var modules;
    return regeneratorRuntime.wrap(function _callee3$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return find(options);

          case 2:
            modules = _context4.sent;
            return _context4.abrupt("return", _cmfModule.default.apply(void 0, _toConsumableArray(modules).concat([options])));

          case 4:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee3);
  }));
  return _mergeModulesAndApp.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@talend/react-cmf/lib/cmfModule.merge.js":
/*!***************************************************************!*\
  !*** ./node_modules/@talend/react-cmf/lib/cmfModule.merge.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mergeObjects = mergeObjects;
exports.getUnique = getUnique;
exports.getReduceConfig = getReduceConfig;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _effects = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/es/effects.js");

var _assert = __webpack_require__(/*! ./assert */ "./node_modules/@talend/react-cmf/lib/assert.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function mergeObjects(obj1, obj2) {
  if (!obj2) {
    return obj1;
  }

  if (!obj1) {
    return obj2;
  }

  return Object.keys(obj2).reduce(function (acc, key) {
    if (obj2[key] === undefined) {
      throw new TypeError("".concat(key, " value is undefined. You may have a bad import here"));
    }

    if (obj1[key] !== undefined && obj1[key] !== obj2[key]) {
      // eslint-disable-next-line no-console
      console.warn("override detected ".concat(key));
    }

    return _objectSpread({}, acc, _defineProperty({}, key, obj2[key]));
  }, _extends({}, obj1));
}

function mergeFns(fn1, fn2) {
  if (!fn2) {
    return fn1;
  }

  if (!fn1) {
    return fn2;
  }

  return function mergedFn() {
    fn1.apply(void 0, arguments);
    fn2.apply(void 0, arguments);
  };
}

function throwIfBothExists(obj1, obj2, name) {
  if (obj1 && obj2) {
    throw new Error("Can't merge both config that both have ".concat(name, " attribute. Only one is accepted."));
  }
}

function getUnique(obj1, obj2, name) {
  throwIfBothExists(obj1, obj2, name);

  if (obj1) {
    return obj1;
  }

  return obj2;
}

function mergeSaga(saga, newSaga) {
  (0, _assert.assertValueTypeOf)(saga, 'function');
  (0, _assert.assertValueTypeOf)(newSaga, 'function');

  if (saga && newSaga) {
    return (
      /*#__PURE__*/
      regeneratorRuntime.mark(function mergedSaga() {
        return regeneratorRuntime.wrap(function mergedSaga$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _effects.spawn)(saga);

              case 2:
                _context.next = 4;
                return (0, _effects.spawn)(newSaga);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, mergedSaga);
      })
    );
  }

  if (newSaga) {
    return newSaga;
  }

  return saga;
}

function mergeArrays(preReducer, newPreReducer) {
  if (preReducer && newPreReducer) {
    return [].concat(preReducer).concat(newPreReducer);
  }

  if (newPreReducer) {
    return newPreReducer;
  }

  return preReducer;
}

function composeComponents(RootComponent, NestedRootComponent) {
  if (!RootComponent) {
    return NestedRootComponent;
  } // eslint-disable-next-line react/prop-types


  return function (_ref) {
    var children = _ref.children;
    return _react.default.createElement(RootComponent, null, _react.default.createElement(NestedRootComponent, null, children));
  };
}

var MERGE_FNS = {
  id: function id() {
    return undefined;
  },
  modules: function modules() {
    return undefined;
  },
  init: function init() {
    return undefined;
  },
  onError: getUnique,
  root: getUnique,
  appId: getUnique,
  RootComponent: composeComponents,
  AppLoader: getUnique,
  saga: mergeSaga,
  httpMiddleware: getUnique,
  preReducer: mergeArrays,
  enhancer: mergeFns,
  middlewares: mergeArrays,
  storeCallback: mergeFns,
  reducer: mergeObjects,
  preloadedState: getUnique,
  settingsURL: getUnique,
  registry: mergeObjects,
  sagas: mergeObjects,
  components: mergeObjects,
  expressions: mergeObjects,
  actionCreators: mergeObjects,
  httpInterceptors: mergeArrays
};

function getReduceConfig() {
  var mergeConfig = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : MERGE_FNS;
  return function reduceConfig(acc, config) {
    return Object.keys(config).reduce(function (subacc, key) {
      if (!mergeConfig[key]) {
        throw new Error("".concat(key, " is not supported"));
      }

      return _objectSpread({}, subacc, _defineProperty({}, key, mergeConfig[key](acc[key], config[key], key)));
    }, acc);
  };
}
/**
 * this function help you to merge multiple cmfModule together
 * before passing them to cmf.bootstrap
 */


function merge() {
  for (var _len = arguments.length, configs = new Array(_len), _key = 0; _key < _len; _key++) {
    configs[_key] = arguments[_key];
  }

  return configs.reduce(getReduceConfig(), {});
}

var _default = merge;
exports.default = _default;

/***/ }),

/***/ "./node_modules/@talend/react-cmf/lib/component.js":
/*!*********************************************************!*\
  !*** ./node_modules/@talend/react-cmf/lib/component.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _invariant = _interopRequireDefault(__webpack_require__(/*! invariant */ "./node_modules/invariant/browser.js"));

var _actionCreator = _interopRequireDefault(__webpack_require__(/*! ./actionCreator */ "./node_modules/@talend/react-cmf/lib/actionCreator.js"));

var _expression = _interopRequireDefault(__webpack_require__(/*! ./expression */ "./node_modules/@talend/react-cmf/lib/expression.js"));

var _sagas = _interopRequireDefault(__webpack_require__(/*! ./sagas */ "./node_modules/@talend/react-cmf/lib/sagas/index.js"));

var _registry = _interopRequireDefault(__webpack_require__(/*! ./registry */ "./node_modules/@talend/react-cmf/lib/registry.js"));

var _constant = _interopRequireDefault(__webpack_require__(/*! ./constant */ "./node_modules/@talend/react-cmf/lib/constant.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * All stuff related to the routing in CMF
 * @module react-cmf/lib/component
 * @see module:react-cmf/lib/component
 */

/**
 * return a component from the registry
 * @param  {string} id the component id you want
 * @param  {object} context optional context to get the registry
 * @return {function} the react component
 */
function get(id, context) {
  var component = _registry.default.getFromRegistry("".concat(_constant.default.REGISTRY_COMPONENT_PREFIX, ":").concat(id), context);

  if (!component) {
    throw new Error("component not found in the registry: ".concat(id));
  }

  return component;
}
/**
 * register a component to let CMF be able to Inject it.
 * @param  {string} id the component id you want to register
 * @param  {any} component the component you want to register
 * @param  {object} context optional context to get the registry
 */


function register(id, component, context) {
  if (!component) {
    (0, _invariant.default)("development" === 'production', 'You cannot register undefined as a component for id "%s"', id);
    return;
  }

  _registry.default.addToRegistry("".concat(_constant.default.REGISTRY_COMPONENT_PREFIX, ":").concat(id), component, context);

  if (component.actions) {
    _actionCreator.default.registerMany(component.actions, context);
  }

  if (component.expressions) {
    _expression.default.registerMany(component.expressions, context);
  }

  if (component.sagas) {
    _sagas.default.registerMany(component.sagas, context);
  }
}

var registerMany = _registry.default.getRegisterMany(register);

function has(id, context) {
  return _registry.default.getFromRegistry("".concat(_constant.default.REGISTRY_COMPONENT_PREFIX, ":").concat(id), context) !== undefined;
}

var _default = {
  get: get,
  has: has,
  register: register,
  registerMany: registerMany
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/@talend/react-cmf/lib/componentState.js":
/*!**************************************************************!*\
  !*** ./node_modules/@talend/react-cmf/lib/componentState.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getStateProps = getStateProps;
exports.initState = initState;
exports.getStateAccessors = getStateAccessors;
exports.default = exports.statePropTypes = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _immutable = _interopRequireDefault(__webpack_require__(/*! immutable */ "immutable"));

var _actions = _interopRequireDefault(__webpack_require__(/*! ./actions */ "./node_modules/@talend/react-cmf/lib/actions/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * This module provide props.setState and props.state into
 * cmfConnected component. It exposes CMF propTypes
 * @module react-cmf/lib/componentState
 * @see module:react-cmf/lib/cmfConnect
 * @example
import { cmfConnect, componentState } from '@talend/react-cmf';

class MyComponent extends React.Component {
	static propTypes = {
		...componentState.propTypes,
	};
	render() {
		// ...
	}
}
export default cmfConnect({})(MyComponent);
 */
function getStateProps(state, name) {
  var id = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'default';
  return {
    state: state.cmf.components.getIn([name, id])
  };
}

function initState(props) {
  if (!props.state && props.initState) {
    props.initState(props.initialState);
  }
}

function getAction(_ref) {
  var name = _ref.name,
      id = _ref.id,
      operation = _ref.operation,
      componentState = _ref.componentState;
  return {
    id: id,
    type: "".concat(name, ".").concat(operation),
    cmf: {
      componentState: componentState
    }
  };
}

function getStateAccessors(dispatch, name, id, DEFAULT_STATE) {
  var dispatchAction = function dispatchAction(operation, componentState) {
    dispatch(getAction({
      id: id,
      name: name,
      componentState: componentState,
      operation: operation
    }));
  };

  var accessors = {
    setState: function setState(state) {
      dispatch(function (_, getState) {
        var newState = state;

        if (typeof newState === 'function') {
          newState = state(getStateProps(getState(), name, id));
        }

        var componentState = _actions.default.components.mergeState(name, id, newState);

        dispatchAction('setState', componentState);
      });
    },
    initState: function initState(initialState) {
      var state;

      if (DEFAULT_STATE) {
        state = DEFAULT_STATE.merge(initialState);
      } else if (initialState) {
        state = _immutable.default.Map.isMap(initialState) ? initialState : _immutable.default.fromJS(initialState);
      }

      if (state) {
        var componentState = _actions.default.components.addState(name, id, state);

        dispatchAction('initState', componentState);
      }
    },
    deleteState: function deleteState(initialState) {
      if (DEFAULT_STATE || initialState) {
        var componentState = _actions.default.components.removeState(name, id);

        dispatchAction('deleteState', componentState);
      }
    }
  };

  accessors.updateState = function updateState(state) {
    console.warn('DEPRECATION WARNING: please use props.setState');
    accessors.setState(state);
  };

  return accessors;
} // DEPRECATION Warning: Please use cmfConnect.propTypes


var statePropTypes = {
  state: _propTypes.default.object,
  initialState: _propTypes.default.object,
  setState: _propTypes.default.func,
  initState: _propTypes.default.func
};
exports.statePropTypes = statePropTypes;
var _default = {
  propTypes: statePropTypes,
  init: initState,
  getProps: getStateProps,
  getAccessors: getStateAccessors
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/@talend/react-cmf/lib/components/ErrorBoundary/ErrorBoundary.component.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@talend/react-cmf/lib/components/ErrorBoundary/ErrorBoundary.component.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _ErrorFeedBack = _interopRequireDefault(__webpack_require__(/*! ../ErrorFeedBack */ "./node_modules/@talend/react-cmf/lib/components/ErrorFeedBack/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var ErrorBoundary =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ErrorBoundary, _React$Component);

  function ErrorBoundary(props) {
    var _this;

    _classCallCheck(this, ErrorBoundary);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ErrorBoundary).call(this, props));
    _this.state = {
      errors: []
    };
    return _this;
  }

  _createClass(ErrorBoundary, [{
    key: "componentDidCatch",
    value: function componentDidCatch(error) {
      this.setState(function (state) {
        return {
          errors: state.errors.concat(error)
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      if (this.state.errors.length > 0) {
        return this.props.renderErrors({
          errors: this.state.errors,
          fullPage: this.props.fullPage
        });
      }

      return this.props.children;
    }
  }]);

  return ErrorBoundary;
}(_react.default.Component);

exports.default = ErrorBoundary;
ErrorBoundary.propTypes = {
  renderErrors: _propTypes.default.func,
  fullPage: _propTypes.default.bool,
  children: _propTypes.default.node
};
ErrorBoundary.defaultProps = {
  renderErrors: _ErrorFeedBack.default
};

/***/ }),

/***/ "./node_modules/@talend/react-cmf/lib/components/ErrorFeedBack/ErrorFeedBack.component.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@talend/react-cmf/lib/components/ErrorFeedBack/ErrorFeedBack.component.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _ErrorPanel = _interopRequireDefault(__webpack_require__(/*! ../ErrorPanel */ "./node_modules/@talend/react-cmf/lib/components/ErrorPanel/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ErrorFeedBack(props) {
  var content = props.errors.map(function (error) {
    return _react.default.createElement(_ErrorPanel.default, {
      key: error,
      error: error
    });
  });

  if (!props.fullPage) {
    return _react.default.createElement(_react.default.Fragment, null, content);
  }

  var style = {
    overflowY: 'auto',
    height: '100vh'
  };

  if (props.errors.length === 1) {
    style.marginTop = 200;
  }

  return _react.default.createElement("div", {
    className: "container"
  }, _react.default.createElement("div", {
    className: "row"
  }, _react.default.createElement("div", {
    className: "col-md-offset-3 col-md-6",
    style: style
  }, _react.default.createElement("h1", null, "An error occurred"), content)));
}

ErrorFeedBack.displayName = 'ErrorFeedBack';
ErrorFeedBack.propTypes = {
  fullPage: _propTypes.default.bool,
  errors: _propTypes.default.array
};
ErrorFeedBack.defaultProps = {
  errors: []
};
var _default = ErrorFeedBack;
exports.default = _default;

/***/ }),

/***/ "./node_modules/@talend/react-cmf/lib/components/ErrorFeedBack/index.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@talend/react-cmf/lib/components/ErrorFeedBack/index.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ErrorFeedBack = _interopRequireDefault(__webpack_require__(/*! ./ErrorFeedBack.component */ "./node_modules/@talend/react-cmf/lib/components/ErrorFeedBack/ErrorFeedBack.component.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = _ErrorFeedBack.default;
exports.default = _default;

/***/ }),

/***/ "./node_modules/@talend/react-cmf/lib/components/ErrorPanel/ErrorPanel.component.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@talend/react-cmf/lib/components/ErrorPanel/ErrorPanel.component.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _onError = _interopRequireDefault(__webpack_require__(/*! ../../onError */ "./node_modules/@talend/react-cmf/lib/onError.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * reload is an event handler. It will reload the current page
 */
function reload() {
  location.reload(true);
}

function ErrorPanel(props) {
  var _React$useState = _react.default.useState(),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      url = _React$useState2[0],
      setURL = _React$useState2[1];

  (0, _react.useEffect)(function () {
    setURL(_onError.default.createObjectURL(props.error));
    return function () {
      _onError.default.revokeObjectURL(url);
    };
  }, [props.error]);

  var HAS_REPORT = _onError.default.hasReportFeature();

  return _react.default.createElement("div", null, _react.default.createElement("p", {
    className: "error-title"
  }, props.error.name, ": ", props.error.message), HAS_REPORT && _react.default.createElement("p", null, "The error report has been sent."), _react.default.createElement("p", null, "From here you can either refresh or contact the support."), _react.default.createElement("button", {
    className: "btn btn-danger btn-inverse",
    onClick: reload,
    "data-feature": "refresh-on-error",
    style: {
      margin: 20
    }
  }, "Refresh"), !HAS_REPORT && _react.default.createElement("a", {
    className: "btn btn-primary btn-inverse",
    href: url,
    download: "report.json",
    "data-feature": "download-on-error-details"
  }, "Download details"));
}

ErrorPanel.displayName = 'ErrorPanel';
ErrorPanel.propTypes = {
  error: _propTypes.default.shape({
    name: _propTypes.default.string,
    message: _propTypes.default.string,
    stack: _propTypes.default.string
  }).isRequired
};
ErrorPanel.defaultProps = {
  error: {}
};
var _default = ErrorPanel;
exports.default = _default;

/***/ }),

/***/ "./node_modules/@talend/react-cmf/lib/components/ErrorPanel/index.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@talend/react-cmf/lib/components/ErrorPanel/index.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ErrorPanelComponent = _interopRequireDefault(__webpack_require__(/*! ./ErrorPanel.component.js */ "./node_modules/@talend/react-cmf/lib/components/ErrorPanel/ErrorPanel.component.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = _ErrorPanelComponent.default;
exports.default = _default;

/***/ }),

/***/ "./node_modules/@talend/react-cmf/lib/constant.js":
/*!********************************************************!*\
  !*** ./node_modules/@talend/react-cmf/lib/constant.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  ERROR: 'REACT_CMF.ERROR',
  ERROR_REPORTED: 'REACT_CMF.ERROR_REPORTED',
  REGISTRY_EXPRESSION_PREFIX: 'expression',
  REGISTRY_COMPONENT_PREFIX: '_.route.component',
  REGISTRY_ACTION_CREATOR_PREFIX: 'actionCreator',
  SAGA_PREFIX: 'saga',
  DID_MOUNT_SAGA_START: 'DID_MOUNT_SAGA_START',
  WILL_UNMOUNT_SAGA_STOP: 'WILL_UNMOUNT_SAGA_STOP',
  IS_HANDLER: 'on',
  IS_HANDLER_DISPATCH: 'Dispatch',
  IS_HANDLER_ACTION_CREATOR: 'ActionCreator',
  IS_HANDLER_DISPATCH_REGEX: /^(on).*(Dispatch)$/,
  IS_HANDLER_ACTION_CREATOR_REGEX: /^(on).*(ActionCreator)$/,
  IS_HANDLER_SETSTATE: 'SetState',
  IS_HANDLER_SETSTATE_REGEX: /^(on).*(SetState)$/,
  COLLECTION_ADD_OR_REPLACE: 'REACT_CMF.COLLECTION_ADD_OR_REPLACE',
  COLLECTION_REMOVE: 'REACT_CMF.COLLECTION_REMOVE',
  COLLECTION_MUTATE: 'REACT_CMF.COLLECTION_MUTATE',
  COMPONENT_ADD_STATE: 'REACT_CMF.COMPONENT_ADD_STATE',
  COMPONENT_MERGE_STATE: 'REACT_CMF.COMPONENT_MERGE_STATE',
  COMPONENT_REMOVE_STATE: 'REACT_CMF.COMPONENT_REMOVE_STATE',
  REQUEST_SETTINGS: 'REACT_CMF.REQUEST_SETTINGS',
  REQUEST_KO: 'REACT_CMF.REQUEST_SETTINGS_KO',
  REQUEST_OK: 'REACT_CMF.REQUEST_SETTINGS_OK',
  CMF_PROPS: ['didMountActionCreator', // componentDidMount action creator id in registry
  'keepComponentState', // redux state management on unmount
  'view', // view component id in registry
  'saga', 'willUnMountActionCreator', // componentWillUnmount action creator id in registry
  'initialState', 'renderIf'],
  INJECTED_STATE_PROPS: ['setState', 'deleteState', 'updateState', 'state', 'initState'],
  INJECTED_ROUTER_PROPS: ['location', 'params', 'route', 'routeParams', 'router', 'routes'],
  INJECTED_PROPS: ['setState', 'deleteState', 'updateState', 'componentId', 'state', 'initState', 'dispatch', 'dispatchActionCreator']
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/@talend/react-cmf/lib/deprecated.js":
/*!**********************************************************!*\
  !*** ./node_modules/@talend/react-cmf/lib/deprecated.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = deprecated;

/**
 * Used to deprecate what ever you want
 * @module react-cmf/lib/deprecated
 */

/* eslint-disable prefer-rest-params */

/* eslint-disable no-console*/

/**
 * display a deprecated message on the first call of a function.
 * @param  {Function} fn  the function to deprecate
 * @param  {String}   msg the message to display
 * @param  {function}   log [description]
 * @return {any}       the content of fn;
 */
function deprecated(fn, msg, log) {
  var called = false;

  function wrapper() {
    if (!called) {
      called = true;
      var message = msg;

      if (typeof msg === 'function') {
        message = msg(arguments);
      }

      message = "DEPRECATED: ".concat(message);

      if (log) {
        log(message);
      } else if (console) {
        if (console.warn) {
          console.warn(message);
        } else if (console.log) {
          console.log(message);
        }
      }
    }

    return fn.apply(this, arguments);
  }

  wrapper.wrappedFunction = fn;
  return wrapper;
}

/***/ }),

/***/ "./node_modules/@talend/react-cmf/lib/expression.js":
/*!**********************************************************!*\
  !*** ./node_modules/@talend/react-cmf/lib/expression.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _invariant = _interopRequireDefault(__webpack_require__(/*! invariant */ "./node_modules/invariant/browser.js"));

var _forIn = _interopRequireDefault(__webpack_require__(/*! lodash/forIn */ "./node_modules/lodash/forIn.js"));

var _constant = _interopRequireDefault(__webpack_require__(/*! ./constant */ "./node_modules/@talend/react-cmf/lib/constant.js"));

var _registry = _interopRequireDefault(__webpack_require__(/*! ./registry */ "./node_modules/@talend/react-cmf/lib/registry.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var regexExpression = new RegExp('(.*)Expression');
/**
 * @typedef {Object} Context
 * @property {string} store
 * @property {string} registry
 */

/**
 * This module define expression which are just function
 * used to be called in the way you want in your APP with a context and a payload as params
 * @module react-cmf/lib/expression
 */

/**
 * register an expression
 * @param {string} id the id of the expression to call it later
 * @param {function} func the function you want to register under this id
 * @param {Context} context React context is optional
 */

function register(id, func, context) {
  _registry.default.addToRegistry("".concat(_constant.default.REGISTRY_EXPRESSION_PREFIX, ":").concat(id), func, context);
}
/**
 * get an expression from it's id
 * @param {string} id of the expression you want to get
 * @param {Context} context React context is optional
 */


function get(id, context) {
  return _registry.default.getFromRegistry("".concat(_constant.default.REGISTRY_EXPRESSION_PREFIX, ":").concat(id), context);
}
/**
 * expressions are registred function which can be called through configuration
 * @param {string|object} expression to call
 * @param {object} React context
 * @param {object} payload will be in expression argument
 */


function call(expression, context, payload) {
  var id;
  var args;

  if (_typeof(expression) === 'object') {
    id = expression.id;
    args = expression.args;
  } else if (typeof expression === 'string') {
    id = expression;
    args = [];
  }

  if (!id) {
    (0, _invariant.default)("development" === 'production', 'you must provide an expression id');
  }

  var check = get(id, context);

  if (!check) {
    (0, _invariant.default)("development" === 'production', "you must register expression ".concat(id, " first"));
  }

  return check.apply(void 0, [{
    context: context,
    payload: payload
  }].concat(_toConsumableArray(args)));
}
/**
 * this function will try to find all props.properties that should be evaluated agains
 * a registered function, the attrs parameter will be deprecated.
 * Each parameter name ending with Expression will be automaticaly evaluated
 * against their registered Expression and the result put inside a properties with name
 * matching the original expression attributes minus the 'Expression' part
 *
 * @param {Object.<string, *>} props React props
 * @param {Array.<string>} attrs of attribute to get
 * @param {Context} context React context
 * @param {payload} payload optional payload to pass
 * @deprecated the array param will be deprecated and replaced with context
 * @deprecated the context will be replaced by the payload
 */


function getProps(props, attrs, context) {
  var payload = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

  var newProps = _extends({}, props, payload);

  attrs.forEach(function (attr) {
    var value = props[attr];

    if (typeof value === 'string' || _typeof(value) === 'object') {
      // eslint-disable-next-line
      console.warn("beware this is present just for the sake of backward compatibility,\n\t\t\t\tyou should use properties ending with Expression to see them evaluated\n\t\t\t\texample: instead of using ".concat(attr, ", ").concat(attr, "Expression will be evaluated\n\t\t\t\tand result put in ").concat(attr));
      newProps[attr] = call(value, context, newProps);
    }
  });
  (0, _forIn.default)(props, function (value, key) {
    var match = regexExpression.exec(key);

    if (match) {
      newProps[match[1]] = call(props[match[0]], context, newProps);
      delete newProps[match[0]];
    }
  });
  return newProps;
}
/**
 * Internal: you should not have to use it
 * This function will compute a new props object with extra props
 * using the convention `fooExpression` will return { foo };
 * @param {object} state redux state
 * @param {object} ownProps any props you want to process with expression
 */


function mapStateToProps(state, ownProps) {
  var ctx = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var props = {};

  var context = _objectSpread({
    store: {
      getState: function getState() {
        return state;
      }
    },
    registry: _registry.default.getRegistry()
  }, ctx);

  (0, _forIn.default)(ownProps, function (value, key) {
    var match = regexExpression.exec(key);

    if (match) {
      props[match[1]] = call(ownProps[match[0]], context, ownProps);
    }
  });
  return props;
}
/**
 * Internal: you should not have to use it
 * this function cleanup the object by returning a new one by removing
 * all key that finish with Expression (ie `fooExpression`);
 * @param {object} props any props object
 */


function mergeProps(props) {
  var newProps = _extends({}, props);

  (0, _forIn.default)(newProps, function (value, key) {
    var match = regexExpression.exec(key);

    if (match) {
      delete newProps[match[0]];
    }
  });
  return newProps;
}
/**
 *
 * @param {any} Component
 * @param {*} attrs
 */


function withExpression(Component, attrs) {
  function WithExpression(props, context) {
    return _react.default.createElement(Component, getProps(props, attrs, context));
  }

  WithExpression.contextTypes = {
    registry: _propTypes.default.object,
    store: _propTypes.default.object,
    router: _propTypes.default.object
  };
  WithExpression.displayName = "WithExpression(".concat(Component.displayName || Component.name, ")");
  return WithExpression;
}

var registerMany = _registry.default.getRegisterMany(register);

var _default = {
  register: register,
  registerMany: registerMany,
  get: get,
  call: call,
  getProps: getProps,
  withExpression: withExpression,
  mapStateToProps: mapStateToProps,
  mergeProps: mergeProps
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/@talend/react-cmf/lib/expressions/allOf.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@talend/react-cmf/lib/expressions/allOf.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getAllOfFunction;

var _get = _interopRequireDefault(__webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js"));

var _immutable = _interopRequireDefault(__webpack_require__(/*! immutable */ "immutable"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getAllOfFunction(statePath) {
  return function includes(_ref, immutablePath, values) {
    var context = _ref.context;

    if (!Array.isArray(values)) {
      throw new Error('You should pass an array of values to check if all of them are present');
    }

    var arr = (0, _get.default)(context.store.getState(), statePath, new _immutable.default.Map()).getIn(immutablePath.split('.'), new _immutable.default.List());
    return arr.size > 0 && arr.every(function (value) {
      return values.includes(value);
    });
  };
}

/***/ }),

/***/ "./node_modules/@talend/react-cmf/lib/expressions/getInState.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@talend/react-cmf/lib/expressions/getInState.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _get2 = _interopRequireDefault(__webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js"));

var _immutable = _interopRequireDefault(__webpack_require__(/*! immutable */ "immutable"));

var _curry = _interopRequireDefault(__webpack_require__(/*! lodash/curry */ "./node_modules/lodash/curry.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getInState(statePath, _ref, immutablePath, defaultValue) {
  var context = _ref.context;
  return (0, _get2.default)(context.store.getState(), statePath, new _immutable.default.Map()).getIn(immutablePath.split('.'), defaultValue);
}

var _default = (0, _curry.default)(getInState);

exports.default = _default;

/***/ }),

/***/ "./node_modules/@talend/react-cmf/lib/expressions/includes.js":
/*!********************************************************************!*\
  !*** ./node_modules/@talend/react-cmf/lib/expressions/includes.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getIncludesFunction;

var _get2 = _interopRequireDefault(__webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js"));

var _immutable = _interopRequireDefault(__webpack_require__(/*! immutable */ "immutable"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getIncludesFunction(statePath) {
  return function includes(_ref, immutablePath, value) {
    var context = _ref.context;
    return (0, _get2.default)(context.store.getState(), statePath, new _immutable.default.Map()).getIn(immutablePath.split('.'), new _immutable.default.List()).includes(value);
  };
}

/***/ }),

/***/ "./node_modules/@talend/react-cmf/lib/expressions/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@talend/react-cmf/lib/expressions/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _allOf = _interopRequireDefault(__webpack_require__(/*! ./allOf */ "./node_modules/@talend/react-cmf/lib/expressions/allOf.js"));

var _getInState = _interopRequireDefault(__webpack_require__(/*! ./getInState */ "./node_modules/@talend/react-cmf/lib/expressions/getInState.js"));

var _includes = _interopRequireDefault(__webpack_require__(/*! ./includes */ "./node_modules/@talend/react-cmf/lib/expressions/includes.js"));

var _oneOf = _interopRequireDefault(__webpack_require__(/*! ./oneOf */ "./node_modules/@talend/react-cmf/lib/expressions/oneOf.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  'cmf.collections.get': (0, _getInState.default)('cmf.collections'),
  'cmf.components.get': (0, _getInState.default)('cmf.components'),
  'cmf.collections.includes': (0, _includes.default)('cmf.collections'),
  'cmf.components.includes': (0, _includes.default)('cmf.components'),
  'cmf.collections.oneOf': (0, _oneOf.default)('cmf.collections'),
  'cmf.collections.allOf': (0, _allOf.default)('cmf.collections')
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/@talend/react-cmf/lib/expressions/oneOf.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@talend/react-cmf/lib/expressions/oneOf.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getOneOfFunction;

var _get = _interopRequireDefault(__webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js"));

var _immutable = _interopRequireDefault(__webpack_require__(/*! immutable */ "immutable"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getOneOfFunction(statePath) {
  return function includes(_ref, immutablePath, values) {
    var context = _ref.context;

    if (!Array.isArray(values)) {
      throw new Error('You should pass an array of values to check if one of them is present');
    }

    var arr = (0, _get.default)(context.store.getState(), statePath, new _immutable.default.Map()).getIn(immutablePath.split('.'), new _immutable.default.List());
    return values.some(function (value) {
      return arr.includes(value);
    });
  };
}

/***/ }),

/***/ "./node_modules/@talend/react-cmf/lib/httpInterceptors.js":
/*!****************************************************************!*\
  !*** ./node_modules/@talend/react-cmf/lib/httpInterceptors.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/* eslint-disable no-console */

/* eslint-disable no-underscore-dangle */
var interceptors = [];
/**
 * @private
 * this function remove all interceptors. Should be used only in tests.
 */

function _clear() {
  interceptors.length = 0;
}
/**
 * @private
 * isInterceptor do some check on the interceptor: -
 * - must be an Object
 * - must have either 'request' or 'response' attribute
 * - interceptor.request must be a function
 * - interceptor.response must be a function
 * - interceptor.requestError must be a function
 * - interceptor.responseError must be a function
 * @param {object} interceptor to check
 * @return {boolean} true if interceptor is compliant with requirements
 */


function isInterceptor(interceptor) {
  if (!interceptor) {
    return false;
  }

  if (_typeof(interceptor) !== 'object') {
    return false;
  }

  if (!interceptor.request && !interceptor.response && !interceptor.requestError && !interceptor.responseError) {
    return false;
  }

  if (interceptor.request && typeof interceptor.request !== 'function') {
    return false;
  }

  if (interceptor.response && typeof interceptor.response !== 'function') {
    return false;
  }

  if (interceptor.requestError && typeof interceptor.requestError !== 'function') {
    return false;
  }

  if (interceptor.responseError && typeof interceptor.responseError !== 'function') {
    return false;
  }

  return true;
}
/**
 * interceptors.push let you add an interceptor
 * An interceptor is an object with the following keys: request, response.
 * Both are simple functions which take the config, response and returns enriched value
 * @param {Object} interceptor object to configure the interception
 */


function push(interceptor) {
  if (isInterceptor(interceptor)) {
    interceptors.push(interceptor);
  } else {
    console.error('CMF.interceptors.push not a valid interceptor', interceptor);
  }
}
/**
 * @private
 * onData is the common caller to interceptors
 * @param {string} event one of ['request', 'response']
 * @param {Object}
 */


function onData(array, data) {
  // const copy = interceptors.slice(0);
  return array.reduce(function (acc, current) {
    var result = acc;

    if (current.on) {
      try {
        result = acc.then(function (prev) {
          return current.on(prev);
        });
      } catch (error) {
        result = Promise.reject(error);
      }
    }

    if (current.onError) {
      try {
        result = result.catch(function (error) {
          return current.onError(error);
        });
      } catch (error) {
        result = Promise.reject(error);
      }
    }

    return Promise.resolve(result);
  }, Promise.resolve(data));
}
/**
 * onRequest consume all interceptors to enrich the config argument
 * @param {Object} config http config object
 * @return {Promise} config object
 */


function onRequest(config) {
  var array = interceptors.filter(function (i) {
    return i.request || i.requestError;
  }).map(function (i) {
    return {
      on: i.request,
      onError: i.requestError
    };
  });
  return onData(array, config);
}
/**
 * onResponse consume all interceptors to enrich the response object
 * @param {Object} response http response object
 * @return {Promise} response object
 */


function onResponse(response) {
  var array = interceptors.filter(function (i) {
    return i.response || i.responseError;
  }).map(function (i) {
    return {
      on: i.response,
      onError: i.responseError
    };
  }).reverse();
  return onData(array, response);
}

var _default = {
  push: push,
  onRequest: onRequest,
  onResponse: onResponse,
  _clear: _clear
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/@talend/react-cmf/lib/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/@talend/react-cmf/lib/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "actions", {
  enumerable: true,
  get: function get() {
    return _actions.default;
  }
});
Object.defineProperty(exports, "cmfConnect", {
  enumerable: true,
  get: function get() {
    return _cmfConnect.default;
  }
});
Object.defineProperty(exports, "ErrorBoundary", {
  enumerable: true,
  get: function get() {
    return _ErrorBoundary.default;
  }
});
Object.defineProperty(exports, "Inject", {
  enumerable: true,
  get: function get() {
    return _InjectComponent.default;
  }
});
Object.defineProperty(exports, "sagas", {
  enumerable: true,
  get: function get() {
    return _sagas.default;
  }
});
Object.defineProperty(exports, "selectors", {
  enumerable: true,
  get: function get() {
    return _selectors.default;
  }
});
Object.defineProperty(exports, "App", {
  enumerable: true,
  get: function get() {
    return _App.default;
  }
});
Object.defineProperty(exports, "reducers", {
  enumerable: true,
  get: function get() {
    return _reducers.default;
  }
});
Object.defineProperty(exports, "registry", {
  enumerable: true,
  get: function get() {
    return _registry.default;
  }
});
Object.defineProperty(exports, "RegistryProvider", {
  enumerable: true,
  get: function get() {
    return _RegistryProvider.default;
  }
});
Object.defineProperty(exports, "store", {
  enumerable: true,
  get: function get() {
    return _store.default;
  }
});
Object.defineProperty(exports, "getErrorMiddleware", {
  enumerable: true,
  get: function get() {
    return _error.default;
  }
});
Object.defineProperty(exports, "httpMiddleware", {
  enumerable: true,
  get: function get() {
    return _http.default;
  }
});
Object.defineProperty(exports, "componentState", {
  enumerable: true,
  get: function get() {
    return _componentState.default;
  }
});
exports.default = exports.Dispatcher = void 0;

var _actions = _interopRequireDefault(__webpack_require__(/*! ./actions/ */ "./node_modules/@talend/react-cmf/lib/actions/index.js"));

var _actionCreator = _interopRequireDefault(__webpack_require__(/*! ./actionCreator */ "./node_modules/@talend/react-cmf/lib/actionCreator.js"));

var _bootstrap = _interopRequireDefault(__webpack_require__(/*! ./bootstrap */ "./node_modules/@talend/react-cmf/lib/bootstrap.js"));

var _cmfConnect = _interopRequireDefault(__webpack_require__(/*! ./cmfConnect */ "./node_modules/@talend/react-cmf/lib/cmfConnect.js"));

var _component = _interopRequireDefault(__webpack_require__(/*! ./component */ "./node_modules/@talend/react-cmf/lib/component.js"));

var _Dispatcher = _interopRequireDefault(__webpack_require__(/*! ./Dispatcher */ "./node_modules/@talend/react-cmf/lib/Dispatcher.js"));

var _ErrorBoundary = _interopRequireDefault(__webpack_require__(/*! ./components/ErrorBoundary/ErrorBoundary.component */ "./node_modules/@talend/react-cmf/lib/components/ErrorBoundary/ErrorBoundary.component.js"));

var _expression = _interopRequireDefault(__webpack_require__(/*! ./expression */ "./node_modules/@talend/react-cmf/lib/expression.js"));

var _expressions = _interopRequireDefault(__webpack_require__(/*! ./expressions */ "./node_modules/@talend/react-cmf/lib/expressions/index.js"));

var _InjectComponent = _interopRequireDefault(__webpack_require__(/*! ./Inject.component.js */ "./node_modules/@talend/react-cmf/lib/Inject.component.js"));

var _matchPath = _interopRequireDefault(__webpack_require__(/*! ./matchPath */ "./node_modules/@talend/react-cmf/lib/matchPath.js"));

var _sagas = _interopRequireDefault(__webpack_require__(/*! ./sagas */ "./node_modules/@talend/react-cmf/lib/sagas/index.js"));

var _selectors = _interopRequireDefault(__webpack_require__(/*! ./selectors */ "./node_modules/@talend/react-cmf/lib/selectors/index.js"));

var _localStorage = _interopRequireDefault(__webpack_require__(/*! ./localStorage */ "./node_modules/@talend/react-cmf/lib/localStorage.js"));

var _action = _interopRequireDefault(__webpack_require__(/*! ./action */ "./node_modules/@talend/react-cmf/lib/action.js"));

var _App = _interopRequireDefault(__webpack_require__(/*! ./App */ "./node_modules/@talend/react-cmf/lib/App.js"));

var _reducers = _interopRequireDefault(__webpack_require__(/*! ./reducers */ "./node_modules/@talend/react-cmf/lib/reducers/index.js"));

var _registry = _interopRequireDefault(__webpack_require__(/*! ./registry */ "./node_modules/@talend/react-cmf/lib/registry.js"));

var _RegistryProvider = _interopRequireDefault(__webpack_require__(/*! ./RegistryProvider */ "./node_modules/@talend/react-cmf/lib/RegistryProvider.js"));

var _store = _interopRequireDefault(__webpack_require__(/*! ./store */ "./node_modules/@talend/react-cmf/lib/store.js"));

var _error = _interopRequireDefault(__webpack_require__(/*! ./middlewares/error */ "./node_modules/@talend/react-cmf/lib/middlewares/error/index.js"));

var _http = _interopRequireDefault(__webpack_require__(/*! ./middlewares/http */ "./node_modules/@talend/react-cmf/lib/middlewares/http/index.js"));

var _componentState = _interopRequireDefault(__webpack_require__(/*! ./componentState */ "./node_modules/@talend/react-cmf/lib/componentState.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @module react-cmf
 */
// DEPRECATED APIs
var Dispatcher = _Dispatcher.default;
exports.Dispatcher = Dispatcher;

function registerInternals(context) {
  _actionCreator.default.register('cmf.saga.start', _actions.default.saga.start, context);

  _actionCreator.default.register('cmf.saga.stop', _actions.default.saga.stop, context);

  _expression.default.registerMany(_expressions.default, context);
}

/**
 * API exported
 * @type {Object}
 * @example
import cmf from '@talend/react-cmf';
cmf.actionCreator.register(...);
cmf.connect()(MyComponent);
cmf.actions.collections.addOrReplace(...);
 * @example
import { Inject } from '@talend/react-cmf';
import { Dispatcher } from '@talend/react-cmf';
 * @see module:react-cmf/lib/api
 */
var _default = {
  action: _action.default,
  actions: _actions.default,
  actionCreator: _actionCreator.default,
  bootstrap: _bootstrap.default,
  component: _component.default,
  connect: _cmfConnect.default,
  expression: _expression.default,
  expressions: _expressions.default,
  registerInternals: registerInternals,
  registry: _registry.default,
  router: {
    matchPath: _matchPath.default
  },
  saga: _sagas.default,
  sagas: _sagas.default,
  selectors: _selectors.default,
  localStorage: _localStorage.default
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/@talend/react-cmf/lib/localStorage.js":
/*!************************************************************!*\
  !*** ./node_modules/@talend/react-cmf/lib/localStorage.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _immutable = _interopRequireDefault(__webpack_require__(/*! immutable */ "immutable"));

var _set = _interopRequireDefault(__webpack_require__(/*! lodash/set */ "./node_modules/lodash/set.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * getState read localStorage and create a initilState for redux
 * @param {string} key the localStorage key where to read
 * @return {Object} initialState for redux
 */
function getState(key) {
  var source = localStorage[key];

  if (!source) {
    return {};
  }

  source = JSON.parse(source);

  if (source.cmf) {
    if (source.cmf.components) {
      source.cmf.components = _immutable.default.fromJS(source.cmf.components);
    }

    if (source.cmf.collections) {
      source.cmf.collections = _immutable.default.fromJS(source.cmf.collections);
    }
  }

  return source;
}
/**
 * getStoreCallback read localStorage and create a initialState for redux
 * @param {string} key the localStorage key where to read
 * @param {Array} paths the list of paths (Array) to serialize in localStorage
 * @return {Object} initialState for redux
 * @example

 const storeCallback = getStoreCallback('myappV1', [
	 ['cmf', 'components', 'Container(List)', 'foo'],
	 ['cmf', 'components', 'Container(SidePanel)'],
 ]);
 cmf.bootstrap({
	 ...
	 storeCallback,
 });
 */


function getStoreCallback(key, paths) {
  return function (store) {
    window.addEventListener('beforeunload', function () {
      var toKeep = {};
      var state = store.getState();
      paths.forEach(function (path) {
        if (path.length > 2) {
          if (path[1] === 'components') {
            var value = state.cmf.components.getIn(path.slice(2));

            if (value) {
              (0, _set.default)(toKeep, path, value.toJS());
            }
          } else if (path[1] === 'collections') {
            var _value = state.cmf.collections.getIn(path.slice(2));

            if (_value) {
              (0, _set.default)(toKeep, path, _value.toJS());
            }
          }
        }
      });
      localStorage.setItem(key, JSON.stringify(toKeep));
    });
  };
}

var _default = {
  getState: getState,
  getStoreCallback: getStoreCallback
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/@talend/react-cmf/lib/matchPath.js":
/*!*********************************************************!*\
  !*** ./node_modules/@talend/react-cmf/lib/matchPath.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = matchPath;

var _pathToRegexp = _interopRequireDefault(__webpack_require__(/*! path-to-regexp */ "./node_modules/path-to-regexp/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var patternCache = {};
var cacheLimit = 10000;
var cacheCount = 0;

var compilePath = function compilePath(pattern, options) {
  var cacheKey = "".concat(options.end).concat(options.strict);
  var cache = patternCache[cacheKey] || (patternCache[cacheKey] = {});
  if (cache[pattern]) return cache[pattern];
  var keys = [];
  var re = (0, _pathToRegexp.default)(pattern, keys, options);
  var compiledPattern = {
    re: re,
    keys: keys
  };

  if (cacheCount < cacheLimit) {
    cache[pattern] = compiledPattern;
    cacheCount += 1;
  }

  return compiledPattern;
};
/**
 * Public API for matching a URL pathname to a path pattern.
 */


function matchPath(pathname) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  if (typeof options === 'string') options = {
    path: options
  }; // eslint-disable-line no-param-reassign

  var _options = options,
      _options$path = _options.path,
      path = _options$path === void 0 ? '/' : _options$path,
      _options$exact = _options.exact,
      exact = _options$exact === void 0 ? false : _options$exact,
      _options$strict = _options.strict,
      strict = _options$strict === void 0 ? false : _options$strict;

  var _compilePath = compilePath(path, {
    end: exact,
    strict: strict
  }),
      re = _compilePath.re,
      keys = _compilePath.keys;

  var match = re.exec(pathname);
  if (!match) return null;

  var _match = _toArray(match),
      url = _match[0],
      values = _match.slice(1);

  var isExact = pathname === url;
  if (exact && !isExact) return null;
  return {
    path: path,
    // the path pattern used to match
    url: path === '/' && url === '' ? '/' : url,
    // the matched portion of the URL
    isExact: isExact,
    // whether or not we matched exactly
    params: keys.reduce(function (memo, key, index) {
      memo[key.name] = values[index]; // eslint-disable-line no-param-reassign

      return memo;
    }, {})
  };
}

/***/ }),

/***/ "./node_modules/@talend/react-cmf/lib/middlewares/cmf/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@talend/react-cmf/lib/middlewares/cmf/index.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _actions = _interopRequireDefault(__webpack_require__(/*! ../../actions */ "./node_modules/@talend/react-cmf/lib/actions/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cmfMiddleware = function cmfMiddleware(store) {
  return function (next) {
    return function (action) {
      var config = action.cmf;

      if (!config) {
        return next(action);
      }

      if (config.collectionId && action.response) {
        store.dispatch(_actions.default.collections.addOrReplace(config.collectionId, action.response));
      }

      return next(action);
    };
  };
};

var _default = cmfMiddleware;
exports.default = _default;

/***/ }),

/***/ "./node_modules/@talend/react-cmf/lib/middlewares/error/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@talend/react-cmf/lib/middlewares/error/index.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getErrorMiddleware;
exports.URL_REQUIRED_MESSAGE = void 0;

var _invariant = _interopRequireDefault(__webpack_require__(/*! invariant */ "./node_modules/invariant/browser.js"));

var _http = _interopRequireDefault(__webpack_require__(/*! ../../actions/http */ "./node_modules/@talend/react-cmf/lib/actions/http.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var URL_REQUIRED_MESSAGE = 'url to post the error is required';
/**
 * create a middleware which post request to server
 * @param  {String} url or path of the api like /api/errors
 * @return {function}      middleware
 */

exports.URL_REQUIRED_MESSAGE = URL_REQUIRED_MESSAGE;

function getErrorMiddleware(url) {
  (0, _invariant.default)(url, URL_REQUIRED_MESSAGE);
  return function (store) {
    return function (next) {
      return function (action) {
        try {
          return next(action);
        } catch (error) {
          return next(_http.default.post(url, {
            userAgent: navigator ? navigator.userAgent : 'unknown',
            reduxState: store.state,
            action: action,
            error: error
          }));
        }
      };
    };
  };
}

/***/ }),

/***/ "./node_modules/@talend/react-cmf/lib/middlewares/http/constants.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@talend/react-cmf/lib/middlewares/http/constants.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.testHTTPCode = exports.isHTTPStatus = exports.HTTP_STATUS = exports.HTTP_METHODS = exports.CONNECT = exports.TRACE = exports.DELETE = exports.PUT = exports.POST = exports.PATCH = exports.HEAD = exports.GET = exports.OPTIONS = exports.ACTION_TYPE_HTTP_REDUCER_ERROR = exports.ACTION_TYPE_HTTP_ERRORS = exports.ACTION_TYPE_HTTP_RESPONSE = exports.ACTION_TYPE_HTTP_REQUEST = void 0;

var _find = _interopRequireDefault(__webpack_require__(/*! lodash/find */ "./node_modules/lodash/find.js"));

var _inRange = _interopRequireDefault(__webpack_require__(/*! lodash/inRange */ "./node_modules/lodash/inRange.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ACTION_TYPE_HTTP_REQUEST = '@@HTTP/REQUEST';
exports.ACTION_TYPE_HTTP_REQUEST = ACTION_TYPE_HTTP_REQUEST;
var ACTION_TYPE_HTTP_RESPONSE = '@@HTTP/RESPONSE';
exports.ACTION_TYPE_HTTP_RESPONSE = ACTION_TYPE_HTTP_RESPONSE;
var ACTION_TYPE_HTTP_ERRORS = '@@HTTP/ERRORS';
exports.ACTION_TYPE_HTTP_ERRORS = ACTION_TYPE_HTTP_ERRORS;
var ACTION_TYPE_HTTP_REDUCER_ERROR = 'HTTP_REDUCE_ERROR'; // equal for performance reason

exports.ACTION_TYPE_HTTP_REDUCER_ERROR = ACTION_TYPE_HTTP_REDUCER_ERROR;
var OPTIONS = 'OPTIONS';
exports.OPTIONS = OPTIONS;
var GET = 'GET';
exports.GET = GET;
var HEAD = 'HEAD';
exports.HEAD = HEAD;
var PATCH = 'PATCH';
exports.PATCH = PATCH;
var POST = 'POST';
exports.POST = POST;
var PUT = 'PUT';
exports.PUT = PUT;
var DELETE = 'DELETE';
exports.DELETE = DELETE;
var TRACE = 'TRACE';
exports.TRACE = TRACE;
var CONNECT = 'CONNECT';
exports.CONNECT = CONNECT;
var HTTP_METHODS = {
  OPTIONS: OPTIONS,
  GET: GET,
  HEAD: HEAD,
  PATCH: PATCH,
  POST: POST,
  PUT: PUT,
  DELETE: DELETE,
  TRACE: TRACE,
  CONNECT: CONNECT
};
exports.HTTP_METHODS = HTTP_METHODS;
var HTTP_STATUS = {
  ACCEPTED: 202,
  BAD_GATEWAY: 502,
  BAD_REQUEST: 400,
  CONFLICT: 409,
  CONTINUE: 100,
  CREATED: 201,
  EXPECTATION_FAILED: 417,
  FAILED_DEPENDENCY: 424,
  FORBIDDEN: 403,
  GATEWAY_TIMEOUT: 504,
  GONE: 410,
  HTTP_VERSION_NOT_SUPPORTED: 505,
  IM_A_TEAPOT: 418,
  INSUFFICIENT_SPACE_ON_RESOURCE: 419,
  INSUFFICIENT_STORAGE: 507,
  INTERNAL_SERVER_ERROR: 500,
  LENGTH_REQUIRED: 411,
  LOCKED: 423,
  METHOD_FAILURE: 420,
  METHOD_NOT_ALLOWED: 405,
  MOVED_PERMANENTLY: 301,
  MOVED_TEMPORARILY: 302,
  MULTI_STATUS: 207,
  MULTIPLE_CHOICES: 300,
  NETWORK_AUTHENTICATION_REQUIRED: 511,
  NO_CONTENT: 204,
  NON_AUTHORITATIVE_INFORMATION: 203,
  NOT_ACCEPTABLE: 406,
  NOT_FOUND: 404,
  NOT_IMPLEMENTED: 501,
  NOT_MODIFIED: 304,
  OK: 200,
  PARTIAL_CONTENT: 206,
  PAYMENT_REQUIRED: 402,
  PERMANENT_REDIRECT: 308,
  PRECONDITION_FAILED: 412,
  PRECONDITION_REQUIRED: 428,
  PROCESSING: 102,
  PROXY_AUTHENTICATION_REQUIRED: 407,
  REQUEST_HEADER_FIELDS_TOO_LARGE: 431,
  REQUEST_TIMEOUT: 408,
  REQUEST_TOO_LONG: 413,
  REQUEST_URI_TOO_LONG: 414,
  REQUESTED_RANGE_NOT_SATISFIABLE: 416,
  RESET_CONTENT: 205,
  SEE_OTHER: 303,
  SERVICE_UNAVAILABLE: 503,
  SWITCHING_PROTOCOLS: 101,
  TEMPORARY_REDIRECT: 307,
  TOO_MANY_REQUESTS: 429,
  UNAUTHORIZED: 401,
  UNPROCESSABLE_ENTITY: 422,
  UNSUPPORTED_MEDIA_TYPE: 415,
  USE_PROXY: 305,
  IM_USED: 226,
  UNAVAILABLE_FOR_LEGAL_REASONS: 451
};
/**
 * match the status code with the HTTP_STATUS collection
 * @param {number} code
 */

exports.HTTP_STATUS = HTTP_STATUS;

var isHTTPStatus = function isHTTPStatus(code) {
  return (0, _find.default)(HTTP_STATUS, function (value) {
    return value === code;
  });
};
/**
 * suite of test to see if status code match in the following categories of status
 * informational
 * success
 * redirection
 * client error
 * server error
 */


exports.isHTTPStatus = isHTTPStatus;
var testHTTPCode = {
  isInformational: function isInformational(code) {
    return !!(0, _inRange.default)(isHTTPStatus(code), 99, 200);
  },
  isSuccess: function isSuccess(code) {
    return !!(0, _inRange.default)(isHTTPStatus(code), 199, 300);
  },
  isRedirection: function isRedirection(code) {
    return !!(0, _inRange.default)(isHTTPStatus(code), 299, 400);
  },
  isClientError: function isClientError(code) {
    return !!(0, _inRange.default)(isHTTPStatus(code), 399, 500);
  },
  isServerError: function isServerError(code) {
    return !!(0, _inRange.default)(isHTTPStatus(code), 499, 600);
  }
};
exports.testHTTPCode = testHTTPCode;

/***/ }),

/***/ "./node_modules/@talend/react-cmf/lib/middlewares/http/csrfHandling.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@talend/react-cmf/lib/middlewares/http/csrfHandling.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCookie = getCookie;
exports.mergeCSRFToken = mergeCSRFToken;

var _merge = _interopRequireDefault(__webpack_require__(/*! lodash/merge */ "./node_modules/lodash/merge.js"));

var _flow = _interopRequireDefault(__webpack_require__(/*! lodash/flow */ "./node_modules/lodash/flow.js"));

var _curry = _interopRequireDefault(__webpack_require__(/*! lodash/curry */ "./node_modules/lodash/curry.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * @typedef {Object} HTTPConfig
 * @property {string} body
 * @property {string} credentials
 * @property {Headers} headers
 * @property {string} method - See ./constants.js for a list of suitable method
 * @property {onError | string} onError
 * @property {onResponse | string} onResponse
 * @property {string} onSend - a redux action type
 */

/**
 * regexp to extract key value elements from a cookie
 * be carefull when touching this regexp shape could break
 * regexp matching on test unexpectedly
 */
var cookieElementRegexp = new RegExp(/(.*)=(.*)/);
/**
 * retrieve the cookie from the document
 */

function getCookie() {
  if (document.cookie) {
    return document.cookie;
  }

  return '';
}
/**
 * parse the content of the cookie to key value map
 * @param {string} cookie
 * @returns {Map.<string, string>}
 */


function parseCookie(cookie) {
  var cookieValue = cookie.split(';').reduce(function (map, line) {
    var match = cookieElementRegexp.exec(line.trim());

    if (match && match[1] && match[2]) {
      return map.set(match[1], match[2]);
    }

    return map;
  }, new Map());
  return cookieValue;
}
/**
 * retrieve the csrf token from the cookie content
 * @param {Object.CSRFTokenCookieKey} CSRFTokenCookieKey - default `csrfToken`
 * @param {Map.<string, string>} cookieValues
 */


var findCSRFToken = (0, _curry.default)(function (_ref, cookieValues) {
  var _ref$CSRFTokenCookieK = _ref.CSRFTokenCookieKey,
      CSRFTokenCookieKey = _ref$CSRFTokenCookieK === void 0 ? 'csrfToken' : _ref$CSRFTokenCookieK;

  if (cookieValues instanceof Map) {
    return cookieValues.get(CSRFTokenCookieKey);
  }

  return undefined;
});
/**
 * effectively merge the csrf token into the http configuration
 * @param {Object.CSRFTokenHeaderKey} CSRFTokenCookieKey - default `X-CSRF-Token`
 * @param {Object} config
 * @param {string} csrfToken
 * @return {function}
 */

var mergeCSRFTokenConfig = (0, _curry.default)(function (_ref2, httpConfig, csrfToken) {
  var _ref2$CSRFTokenHeader = _ref2.CSRFTokenHeaderKey,
      CSRFTokenHeaderKey = _ref2$CSRFTokenHeader === void 0 ? 'X-CSRF-Token' : _ref2$CSRFTokenHeader;

  if (csrfToken) {
    return (0, _merge.default)({}, httpConfig, {
      headers: _defineProperty({}, CSRFTokenHeaderKey, csrfToken)
    });
  }

  return httpConfig;
});
/**
 * if a CSRF token is found in csrfToken cookie, merge it in the headers
 * under key X-CSRF-Token
 * @param {Object.security} security
 * @param {HTTPConfig} config
 * @return {HTTPConfig}
 */

function mergeCSRFToken(_ref3) {
  var _ref3$security = _ref3.security,
      security = _ref3$security === void 0 ? {} : _ref3$security;
  return function (httpConfig) {
    return (0, _flow.default)([getCookie, parseCookie, findCSRFToken(security), mergeCSRFTokenConfig(security, httpConfig)])();
  };
}

/***/ }),

/***/ "./node_modules/@talend/react-cmf/lib/middlewares/http/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@talend/react-cmf/lib/middlewares/http/index.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "OPTIONS", {
  enumerable: true,
  get: function get() {
    return _constants.OPTIONS;
  }
});
Object.defineProperty(exports, "GET", {
  enumerable: true,
  get: function get() {
    return _constants.GET;
  }
});
Object.defineProperty(exports, "HEAD", {
  enumerable: true,
  get: function get() {
    return _constants.HEAD;
  }
});
Object.defineProperty(exports, "POST", {
  enumerable: true,
  get: function get() {
    return _constants.POST;
  }
});
Object.defineProperty(exports, "PUT", {
  enumerable: true,
  get: function get() {
    return _constants.PUT;
  }
});
Object.defineProperty(exports, "DELETE", {
  enumerable: true,
  get: function get() {
    return _constants.DELETE;
  }
});
Object.defineProperty(exports, "TRACE", {
  enumerable: true,
  get: function get() {
    return _constants.TRACE;
  }
});
Object.defineProperty(exports, "CONNECT", {
  enumerable: true,
  get: function get() {
    return _constants.CONNECT;
  }
});
Object.defineProperty(exports, "HTTP_METHODS", {
  enumerable: true,
  get: function get() {
    return _constants.HTTP_METHODS;
  }
});
exports.default = void 0;

var _middleware = __webpack_require__(/*! ./middleware */ "./node_modules/@talend/react-cmf/lib/middlewares/http/middleware.js");

var _constants = __webpack_require__(/*! ./constants */ "./node_modules/@talend/react-cmf/lib/middlewares/http/constants.js");

var _default = _middleware.httpMiddleware;
exports.default = _default;

/***/ }),

/***/ "./node_modules/@talend/react-cmf/lib/middlewares/http/middleware.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@talend/react-cmf/lib/middlewares/http/middleware.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isHTTPRequest = isHTTPRequest;
exports.getMethod = getMethod;
exports.mergeConfiguredHeader = mergeConfiguredHeader;
exports.mergeOptions = mergeOptions;
exports.HTTPError = HTTPError;
exports.status = status;
exports.handleResponse = handleResponse;
exports.httpMiddleware = exports.DEFAULT_HTTP_HEADERS = void 0;

var _flow = _interopRequireDefault(__webpack_require__(/*! lodash/flow */ "./node_modules/lodash/flow.js"));

var _has = _interopRequireDefault(__webpack_require__(/*! lodash/has */ "./node_modules/lodash/has.js"));

var _get = _interopRequireDefault(__webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js"));

var _constants = __webpack_require__(/*! ./constants */ "./node_modules/@talend/react-cmf/lib/middlewares/http/constants.js");

var _csrfHandling = __webpack_require__(/*! ./csrfHandling */ "./node_modules/@talend/react-cmf/lib/middlewares/http/csrfHandling.js");

var _http = _interopRequireDefault(__webpack_require__(/*! ../../actions/http */ "./node_modules/@talend/react-cmf/lib/actions/http.js"));

var _httpInterceptors = _interopRequireDefault(__webpack_require__(/*! ../../httpInterceptors */ "./node_modules/@talend/react-cmf/lib/httpInterceptors.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * @typedef {Object} Action
 * @property {string} type - Action type
 */

/**
 * @typedef {Object} Response
 * @property {string} status
 * @property {string} statusText
 * @property {string} ok
 * @property {string} redirected
 * @property {string} type
 * @property {string} url
 */

/**
 * @typedef {Object} Stack
 * @property {Object} response
 * @property {Object} message
 */

/**
 * @typedef {Object} HttpError
 * @property {string} name
 * @property {string} message
 * @property {string} number
 * @property {Stack} stack
 */

/**
 * @typedef {Object.<string, string>} Headers
 */

/**
 * @callback onError
 * @param {HTTPConfig} action
 * @param {HttpError} error
 * @return {Action}
 */

/**
 * @callback onResponse
 * @param {HTTPConfig} action
 * @param {Object} response
 * @return {Action}
 */

/**
 * @typedef {Object} HTTPConfig
 * @property {string} body
 * @property {string} credentials
 * @property {Headers} headers
 * @property {string} method - See ./constants.js for a list of suitable method
 * @property {onError | string} onError
 * @property {onResponse | string} onResponse
 * @property {string} onSend - a redux action type
 */

/**
 * @typedef {Object} Security
 * @property {String} CSRFTokenCookieKey - on which value the token should be found in the cookie
 * @property {String} CSRFTokenHeaderKey - on which header key the token should be sent
 */

/**
 * @typedef {Object} Config
 * @property {Security} security
 */
var DEFAULT_HTTP_HEADERS = {
  Accept: 'application/json',
  'Content-Type': 'application/json'
};
/**
 * check if the provided redux action contain element relative to a
 * fetch side effect.
 * If the Action contain nested keys 'cmf.http' it is a fetch descriptor
 * thus return True
 * @param {Action} action
 * @returns {bool}
 */

exports.DEFAULT_HTTP_HEADERS = DEFAULT_HTTP_HEADERS;

function isHTTPRequest(action) {
  return action.type in _constants.HTTP_METHODS || (0, _has.default)(action, 'cmf.http');
}
/**
 * @param  {Object} action redux action, sjhould cotains *method* attribute
 * @return {String}        in known HTTP methods
 */


function getMethod(action) {
  return _constants.HTTP_METHODS[action.type];
}

function mergeConfiguredHeader(config) {
  // still need to keep the previous header added by action
  return function (options) {
    var headerMergedConfig = _objectSpread({}, options, {
      headers: _objectSpread({}, DEFAULT_HTTP_HEADERS, {}, config.headers, {}, options.headers)
    });

    if (headerMergedConfig.body instanceof FormData) {
      delete headerMergedConfig.headers['Content-Type'];
    }

    return headerMergedConfig;
  };
}

function mergeOptions(action) {
  var options = _extends({
    method: getMethod(action),
    credentials: 'same-origin'
  }, action);

  if (_typeof(options.body) === 'object' && !(options.body instanceof FormData)) {
    options.body = JSON.stringify(options.body);
  }

  delete options.type;
  return options;
}

function HTTPError(response) {
  var headers = (0, _get.default)(response, 'headers/values');

  if (headers) {
    headers = _toConsumableArray(headers());
  }

  this.name = "HTTP ".concat(response.status);
  this.message = response.statusText;
  this.stack = {
    response: response,
    headers: headers,
    status: response.status,
    statusText: response.statusText,
    ok: response.ok,
    redirected: response.redirected,
    type: response.type,
    // basic, cors
    url: response.url
  };
}

HTTPError.prototype = Object.create(Error.prototype);
HTTPError.prototype.constructor = HTTPError;

function status(response) {
  if (_constants.testHTTPCode.isSuccess(response.status)) {
    return Promise.resolve(response);
  }

  return Promise.reject(new HTTPError(response));
}

function handleResponse(response) {
  if (response.status === _constants.HTTP_STATUS.NO_CONTENT) {
    return Promise.resolve({});
  }

  if (response.json) {
    return response.json().then(function (json) {
      return {
        data: json,
        headers: response.headers
      };
    });
  }

  return Promise.reject(new HTTPError(response));
}
/**
 * Factory to create error handler.
 * The provided function will dispatch action with the following types
 * @param {function} dispatch
 * @param {Object} httpAction
 */


function getOnError(dispatch, httpAction) {
  return function onHTTPError(error) {
    var errorObject = {
      name: error.name,
      message: error.description || error.message,
      number: error.number,
      stack: error.stack
    };
    var clone = (0, _get.default)(error, 'stack.response.clone');

    if (!clone) {
      dispatch(_http.default.onJSError(errorObject, httpAction));
    } else {
      // clone the response object else the next call to text or json
      // triggers an exception Already use
      error.stack.response.clone().text().then(function (response) {
        try {
          errorObject.stack.response = response;
          errorObject.stack.messageObject = JSON.parse(response);
        } finally {
          if (httpAction.onError) {
            dispatch(_http.default.onActionError(httpAction, errorObject));
          }

          if (typeof httpAction.onError !== 'function') {
            dispatch(_http.default.onError(errorObject));
          }
        }
      });
    }
  };
}
/**
 * @param {Config} middlewareDefaultConfig
 */


var httpMiddleware = function httpMiddleware() {
  var middlewareDefaultConfig = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return function (_ref) {
    var dispatch = _ref.dispatch;
    return function (next) {
      return function (action) {
        if (!isHTTPRequest(action)) {
          return next(action);
        }

        var httpAction = (0, _get.default)(action, 'cmf.http', action);
        var config = (0, _flow.default)([mergeOptions, mergeConfiguredHeader(middlewareDefaultConfig), (0, _csrfHandling.mergeCSRFToken)(middlewareDefaultConfig)])(action);
        return _httpInterceptors.default.onRequest(_objectSpread({
          url: httpAction.url
        }, config)).then(function (newConfig) {
          dispatch(_http.default.onRequest(newConfig.url, newConfig));

          if (httpAction.onSend) {
            dispatch({
              type: httpAction.onSend,
              httpAction: httpAction
            });
          }

          var onHTTPError = getOnError(dispatch, httpAction);
          return fetch(newConfig.url, newConfig).then(status).then(handleResponse).then(_httpInterceptors.default.onResponse).then(function (response) {
            var newAction = _extends({}, action);

            dispatch(_http.default.onResponse(response.data));

            if (newAction.transform) {
              newAction.response = newAction.transform(response.data);
            } else {
              newAction.response = response.data;
            }

            if (newAction.onResponse) {
              dispatch(_http.default.onActionResponse(newAction, newAction.response, response.headers));
            }

            return next(newAction);
          }).catch(onHTTPError);
        });
      };
    };
  };
};

exports.httpMiddleware = httpMiddleware;

/***/ }),

/***/ "./node_modules/@talend/react-cmf/lib/omit.js":
/*!****************************************************!*\
  !*** ./node_modules/@talend/react-cmf/lib/omit.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = omit;

var _pickBy = _interopRequireDefault(__webpack_require__(/*! lodash/pickBy */ "./node_modules/lodash/pickBy.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// https://github.com/lodash/lodash/issues/2930
function omit(props, keyToOmit) {
  return (0, _pickBy.default)(props, function (v, key) {
    return keyToOmit.indexOf(key) === -1;
  });
}

/***/ }),

/***/ "./node_modules/@talend/react-cmf/lib/onError.js":
/*!*******************************************************!*\
  !*** ./node_modules/@talend/react-cmf/lib/onError.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _get = _interopRequireDefault(__webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js"));

var _browser = __webpack_require__(/*! @sentry/browser */ "@sentry/browser");

var _assert = __webpack_require__(/*! ./assert */ "./node_modules/@talend/react-cmf/lib/assert.js");

var _constant = _interopRequireDefault(__webpack_require__(/*! ./constant */ "./node_modules/@talend/react-cmf/lib/constant.js"));

var _actions = _interopRequireDefault(__webpack_require__(/*! ./actions */ "./node_modules/@talend/react-cmf/lib/actions/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable no-param-reassign */

/**
 * the ref will contains a reference to
 * store
 * actions
 * reportURL
 * error
 * errors
 */
var ref = {
  errors: [],
  actions: [],
  store: {
    getState: function getState() {
      return {};
    }
  }
};

function serialize(error) {
  var std = {
    name: error.name,
    message: error.message,
    fileName: error.fileName,
    lineNumber: error.lineNumber,
    columnNumber: error.columnNumber,
    stack: error.stack
  }; // support dynamic properties

  Object.keys(error).reduce(function (acc, key) {
    acc[key] = error[key];
    return acc;
  }, std);
  return std;
}
/**
 * getReportInfo serialize the error and enrich it
 * so as the dev will have as much information as possible
 */


function getReportInfo(error) {
  return {
    time: new Date().toISOString(),
    browser: navigator.userAgent,
    location: location.href,
    error: serialize(error),
    actions: ref.actions
  };
}
/**
 * @return {Boolean} true if we can do report to backend using reportURL configuration
 */


function hasReportURL() {
  return !!ref.serverURL;
}
/**
 * @return {Boolean} true if we can do report to Sentry
 */


function hasReportFeature() {
  return !!ref.SENTRY_DSN || hasReportURL();
}
/**
 * report function create a serilized error and dispatch action.
 * @param {Error} error instance of Error
 */


function report(error) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (ref.SENTRY_DSN) {
    if (options.tags) {
      (0, _browser.withScope)(function (scope) {
        options.tags.forEach(function (tag) {
          return scope.setTag(tag.key, tag.value);
        });
        (0, _browser.captureException)(error);
      });
    } else {
      (0, _browser.captureException)(error);
    }
  } else {
    var info = {
      error: serialize(error),
      context: JSON.stringify(getReportInfo(error)),
      reported: false,
      reason: 'Draft'
    };
    ref.error = info;
    ref.errors.push(info);

    if (!ref.serverURL) {
      ref.store.dispatch(_objectSpread({
        type: _constant.default.ERROR
      }, info));
    } else {
      ref.store.dispatch(_actions.default.http.post(ref.serverURL, info.context, {
        onError: function onError(err) {
          info.reported = false;
          info.reason = serialize(err);
          return _objectSpread({
            type: _constant.default.ERROR
          }, info);
        },
        onResponse: function onResponse(response) {
          info.reported = true;
          info.response = response;
          return _objectSpread({
            type: _constant.default.ERROR_REPORTED
          }, info);
        }
      }));
    }
  }
}

function onJSError(event) {
  var error = event.error;

  if (!error) {
    return;
  } // remove duplicate in dev mode
  // SEE: https://github.com/facebook/react/issues/10474


  if (true) {
    if (error.ALREADY_THROWN) {
      return;
    }

    error.ALREADY_THROWN = true;
  }

  report(error);
}
/**
 * init Sentry lib
 * @return {[type]} [description]
 */


function setupSentry() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  if (true) {
    delete ref.SENTRY_DSN;
  }

  if (!ref.SENTRY_DSN) {
    return;
  }

  window.removeEventListener('error', onJSError);

  try {
    (0, _browser.init)(_objectSpread({
      dsn: ref.SENTRY_DSN
    }, options));
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
    delete ref.SENTRY_DSN;
    window.addEventListener('error', onJSError);
  }
}
/**
 * bootstrap configure onError
 * @param {Object} options to configure
 * @param {Object} store redux
 */


function bootstrap(options, store) {
  window.addEventListener('error', onJSError);
  (0, _assert.assertTypeOf)(options, 'onError', 'object');
  ref.SENTRY_DSN = undefined;
  ref.actions = [];
  ref.errors = [];
  ref.store = store;
  var opt = options.onError || {};
  ref.serverURL = opt.reportURL;

  if (opt.SENTRY_DSN) {
    ref.SENTRY_DSN = opt.SENTRY_DSN;
    setupSentry(opt.sentry);

    if (ref.SENTRY_DSN && opt.onSentryScope) {
      (0, _browser.configureScope)(function (scope) {
        opt.onSentryScope(scope);
      });
    }
  }
}
/**
 * return reference to the array of errors
 */


function getErrors() {
  return ref.errors;
}

function setupFromSettings(settings) {
  var dsn = (0, _get.default)(settings, 'env.SENTRY_DSN');

  if (!ref.SENTRY_DSN && ref.SENTRY_DSN !== dsn) {
    ref.SENTRY_DSN = dsn;
    setupSentry();
  }
}
/**
 * onError redux middleware.
 * it store last 20 actions
 * it catch settings fetch OK to try to setup Sentry
 * it try catch every sub actions effect to report error
 */


function middleware() {
  return function (next) {
    return function (action) {
      if (!ref.SENTRY_DSN) {
        if (ref.actions.length >= 20) {
          ref.actions.shift();
        }

        ref.actions.push((0, _get.default)(action, 'type', 'UNKNOWN'));
      }

      if (action.type === _constant.default.REQUEST_OK) {
        setupFromSettings(action.settings);
      }

      try {
        return next(action);
      } catch (error) {
        report(error, {
          tags: [{
            key: 'redux-action-type',
            value: (0, _get.default)(action, 'type', 'UNKNOWN')
          }]
        }); // eslint-disable-next-line no-console

        console.error(error);
        return undefined;
      }
    };
  };
}

function createObjectURL(error) {
  var data = getReportInfo(error);
  var strData = JSON.stringify(data);
  var MIME_TYPE = 'application/json'; // For IE11, you can use the Blob class to construct a File object.
  // This seems to be the most portable solution.

  var blob = new Blob([strData], {
    type: MIME_TYPE
  });
  blob.name = 'report.json';
  return window.URL.createObjectURL(blob);
}

function revokeObjectURL(url) {
  window.URL.revokeObjectURL(url);
}

var _default = {
  bootstrap: bootstrap,
  hasReportURL: hasReportURL,
  hasReportFeature: hasReportFeature,
  getReportInfo: getReportInfo,
  report: report,
  getErrors: getErrors,
  middleware: middleware,
  createObjectURL: createObjectURL,
  revokeObjectURL: revokeObjectURL
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/@talend/react-cmf/lib/onEvent.js":
/*!*******************************************************!*\
  !*** ./node_modules/@talend/react-cmf/lib/onEvent.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _get = _interopRequireDefault(__webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js"));

var _immutable = _interopRequireDefault(__webpack_require__(/*! immutable */ "immutable"));

var _constant = _interopRequireDefault(__webpack_require__(/*! ./constant */ "./node_modules/@talend/react-cmf/lib/constant.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function serializeEvent(event) {
  if (event.persist) {
    return {};
  }

  return event;
}

function getOnEventActionCreatorHandler(instance, config, currentHandler) {
  var actionCreator = config;

  if (_typeof(config) === 'object') {
    actionCreator = config.id;
  }

  return function onEventActionCreator() {
    instance.dispatchActionCreator(actionCreator, serializeEvent(arguments.length <= 0 ? undefined : arguments[0]), _objectSpread({
      props: instance.props
    }, arguments.length <= 1 ? undefined : arguments[1], {}, config.data || {}));

    if (currentHandler) {
      currentHandler.apply(void 0, arguments);
    }
  };
}

function getOnEventDispatchHandler(instance, config, currentHandler) {
  return function onEventDispatch() {
    var payload = _extends({
      event: serializeEvent(arguments.length <= 0 ? undefined : arguments[0]),
      data: arguments.length <= 1 ? undefined : arguments[1]
    }, config);

    instance.props.dispatch(payload);

    if (currentHandler) {
      currentHandler.apply(void 0, arguments);
    }
  };
}

function getOnEventSetStateHandler(instance, config, currentHandler) {
  return function onEventSetState() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (typeof currentHandler === 'function') {
      currentHandler.apply(void 0, args);
    }

    var state = Object.keys(config).reduce(function (acc, key) {
      var value = config[key];

      if (Array.isArray(value)) {
        if (value.length === 1) {
          // eslint-disable-next-line no-param-reassign
          acc[key] = args[value[0]];
        } else if (value.length === 2) {
          // eslint-disable-next-line no-param-reassign
          acc[key] = (0, _get.default)(args[value[0]], value[1]);
        } else {
          throw new Error('onEventSetState array must have 1 or 2 element for ', key, args);
        }
      } else if (value === 'toggle') {
        // because toggle need to read the state we dispatch it with a function
        instance.props.setState(function (props) {
          return instance.props.setState(_defineProperty({}, key, !props.state.get(key)));
        });
      } else {
        // eslint-disable-next-line no-param-reassign
        acc[key] = value;
      }

      return acc;
    }, {});

    if (Object.keys(state).length > 0) {
      instance.props.setState(state);
    }
  };
}

var GET_HANDLER = {
  DISPATCH: getOnEventDispatchHandler,
  ACTION_CREATOR: getOnEventActionCreatorHandler,
  SETSTATE: getOnEventSetStateHandler
};
var ACTION_CREATOR = 'ACTION_CREATOR';
var DISPATCH = 'DISPATCH';
var SETSTATE = 'SETSTATE';
var INITIAL_STATE = new _immutable.default.Map();

function addOnEventSupport(handlerType, instance, props, key) {
  if (_constant.default["IS_HANDLER_".concat(handlerType, "_REGEX")].test(key)) {
    if (handlerType === SETSTATE) {
      if (!props.spreadCMFState) {
        // eslint-disable-next-line no-param-reassign
        props.spreadCMFState = true;
      }

      if (!props.initialState) {
        // eslint-disable-next-line no-param-reassign
        props.initialState = INITIAL_STATE;
      }
    }

    props.toOmit.push(key);
    var handlerKey = key.replace(_constant.default["IS_HANDLER_".concat(handlerType)], '');
    var originalEventHandler = props[handlerKey] || instance.props[handlerKey]; // eslint-disable-next-line no-param-reassign

    props[handlerKey] = GET_HANDLER[handlerType](instance, instance.props[key], originalEventHandler);
  }
}

var _default = {
  getOnEventActionCreatorHandler: getOnEventActionCreatorHandler,
  getOnEventDispatchHandler: getOnEventDispatchHandler,
  getOnEventSetStateHandler: getOnEventSetStateHandler,
  addOnEventSupport: addOnEventSupport,
  ACTION_CREATOR: ACTION_CREATOR,
  DISPATCH: DISPATCH,
  SETSTATE: SETSTATE
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/@talend/react-cmf/lib/reducers/collectionsReducers.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@talend/react-cmf/lib/reducers/collectionsReducers.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getId = getId;
exports.getActionWithCollectionIdAsArray = getActionWithCollectionIdAsArray;
exports.default = exports.defaultState = void 0;

var _immutable = __webpack_require__(/*! immutable */ "immutable");

var _invariant = _interopRequireDefault(__webpack_require__(/*! invariant */ "./node_modules/invariant/browser.js"));

var _constant = _interopRequireDefault(__webpack_require__(/*! ../constant */ "./node_modules/@talend/react-cmf/lib/constant.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var defaultState = new _immutable.Map();
/**
 * Get element id. If it doesn't have "id" property, we consider it as immutable.
 */

exports.defaultState = defaultState;

function getId(element) {
  var id = element.id;

  if (id === undefined) {
    return element.get('id');
  }

  return id;
}
/*
 * backward compatibility, as mutateCollection action creator still use 'id' field
 * to represent path to collection
 */


function getActionWithCollectionIdAsArray(action) {
  if (action.collectionId || action.id) {
    var collectionId = action.collectionId || action.id;
    return _objectSpread({}, action, {
      collectionId: Array.isArray(collectionId) ? collectionId : collectionId.split('.')
    });
  }

  return action;
}
/**
 * addElementToCollection
 *
 * @param state current redux state
 * @param action redux action
 * @returns {object} the new state
 */


function addCollectionElement(state, action) {
  if (action.operations.add) {
    return action.operations.add.reduce(function (s, e) {
      var element = s.getIn(action.collectionId);

      if (_immutable.List.isList(element)) {
        return s.setIn(action.collectionId, element.push(e));
      }

      if (_immutable.Map.isMap(element)) {
        return s.setIn(action.collectionId, element.merge(e));
      }

      return state;
    }, state);
  }

  return state;
}

function deleteListElements(state, action) {
  function shouldBeRemoved(element) {
    return action.operations.delete.indexOf(getId(element)) >= 0;
  }

  var collection = state.getIn(action.collectionId);

  if (collection.some(shouldBeRemoved)) {
    return state.setIn(action.collectionId, collection.filterNot(shouldBeRemoved));
  }

  return state;
}

function deleteMapElements(state, action) {
  var collection = state.getIn(action.collectionId);

  if (action.operations.delete.some(function (id) {
    return collection.has(id);
  })) {
    var changedCollection = action.operations.delete.reduce(function (collectionAccu, element) {
      return collectionAccu.delete(element);
    }, collection);
    return state.setIn(action.collectionId, changedCollection);
  }

  return state;
}
/**
 * deleteElementFromCollection
 *
 * @param state current redux state
 * @param action redux action
 * @returns {object} the new state
 */


function deleteCollectionElement(state, action) {
  if (action.operations.delete) {
    var collection = state.getIn(action.collectionId);

    if (_immutable.Map.isMap(collection)) {
      return deleteMapElements(state, action);
    } else if (_immutable.List.isList(collection)) {
      return deleteListElements(state, action);
    }

    throw new Error('CMF collection deletion is only compatible with ImmutableJs List and Map');
  }

  return state;
}

function updateListElements(state, action) {
  var updates = action.operations.update;
  var changedCollection = state.getIn(action.collectionId).map(function (element) {
    return updates[getId(element)] || element;
  });
  return state.setIn(action.collectionId, changedCollection);
}

function updateMapElements(state, action) {
  var updates = action.operations.update;
  var changedCollection = Object.keys(updates).reduce(function (collectionAccu, id) {
    return collectionAccu.set(id, updates[id]);
  }, state.getIn(action.collectionId));
  return state.setIn(action.collectionId, changedCollection);
}
/**
 * updateCollectionElement
 *
 * @param state current redux state
 * @param action redux action
 * @returns {object} the new state
 */


function updateCollectionElement(state, action) {
  if (action.operations.update) {
    var collection = state.getIn(action.collectionId);

    if (_immutable.Map.isMap(collection)) {
      return updateMapElements(state, action);
    } else if (_immutable.List.isList(collection)) {
      return updateListElements(state, action);
    }

    throw new Error('CMF collection update is only compatible with ImmutableJs List and Map');
  }

  return state;
}
/**
 * mutateCollection
 *
 * @param {object} state the current redux state
 * @param {object} action redux action
 * @returns {object} the new state
 */


function mutateCollection(state, action) {
  if (!action.operations || !state.hasIn(action.collectionId) || state.isEmpty()) {
    return state;
  }

  var newState = addCollectionElement(state, action);
  newState = deleteCollectionElement(newState, action);
  return updateCollectionElement(newState, action);
}
/**
 * @param  {object} state  the state
 * @param  {object} action redux action
 * @return {object}        the new state
 */


function collectionsReducers() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    type: ''
  };
  var newAction = getActionWithCollectionIdAsArray(action);

  switch (newAction.type) {
    case _constant.default.COLLECTION_ADD_OR_REPLACE:
      return state.setIn(newAction.collectionId, (0, _immutable.fromJS)(newAction.data));

    case _constant.default.COLLECTION_REMOVE:
      if (!state.getIn(newAction.collectionId)) {
        (0, _invariant.default)("development" === 'production', "Can't remove collection ".concat(newAction.collectionId, " since it doesn't exist."));
        return state;
      }

      return state.deleteIn(newAction.collectionId);

    case _constant.default.COLLECTION_MUTATE:
      return mutateCollection(state, newAction);

    default:
      return state;
  }
}

var _default = collectionsReducers;
exports.default = _default;

/***/ }),

/***/ "./node_modules/@talend/react-cmf/lib/reducers/componentsReducers.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@talend/react-cmf/lib/reducers/componentsReducers.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.warnIfAnotherComponentBind = warnIfAnotherComponentBind;
exports.warnIfRemovingStateDoesntExist = warnIfRemovingStateDoesntExist;
exports.errorIfMergingStateDoesntExist = errorIfMergingStateDoesntExist;
exports.componentsReducers = componentsReducers;
exports.default = exports.defaultState = void 0;

var _get = _interopRequireDefault(__webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js"));

var _immutable = __webpack_require__(/*! immutable */ "immutable");

var _invariant = _interopRequireDefault(__webpack_require__(/*! invariant */ "./node_modules/invariant/browser.js"));

var _constant = _interopRequireDefault(__webpack_require__(/*! ../constant */ "./node_modules/@talend/react-cmf/lib/constant.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint no-console: ["error", { allow: ["warn"] }] */

/**
 * @module react-cmf/lib/reducers/componentsReducers
 */
var defaultState = new _immutable.Map();
/**
 * given the state and action, determine if another component try to bind to a specific
 * component name space state and warn the user about this behaviour
 * @param {Object} state the CMF application state
 * @param {Object} action a redux action
 */

exports.defaultState = defaultState;

function warnIfAnotherComponentBind(state, action) {
  if (true) {
    if (state.getIn([action.componentName, action.key])) {
      console.warn("Beware component ".concat(action.componentName, " try to recreate an existing\n State namespace ").concat(action.key, ", meaning that the original one will be overloaded"));
    }
  }
}
/**
 * given the state and action, determine if a component at unmount try to delete
 * a state namespace that doesn't exist anymore and warn the user about this behavior
 * @param {Object} state the CMF application state
 * @param {Object} action a redux action
 */


function warnIfRemovingStateDoesntExist(state, action) {
  if (true) {
    if (!state.getIn([action.componentName, action.key])) {
      console.warn("Beware the component ".concat(action.componentName, " try to remove a non existing\n State namespace ").concat(action.key, ", it isn't a normal behavior execpt if two component are binded\n to this specific namespace"));
    }
  }
}
/**
 * given the state and action, determine if a component try to update a state namespace that
 * doesn't exist, throw an errror at dev time since such a behavior may lead to unintended bug
 * or runtime errors later on app execution.
 * @param {Object} state the CMF application state
 * @param {Object} action a redux action
 */


function errorIfMergingStateDoesntExist(state, action) {
  if (!state.getIn([action.componentName, action.key])) {
    (0, _invariant.default)("development" === 'production', "Error, the component ".concat(action.componentName, " try to mutate a non existing\n State namespace ").concat(action.key, ", this namespace may be not yet created or already removed."));
  }
}
/**
 * Reducer on charge to manage component remote state.
 * @param  {object} state  initial state
 * @param  {object} action the executed action
 * @return {object}        the new state
 */


function componentsReducers() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _constant.default.COMPONENT_ADD_STATE:
      warnIfAnotherComponentBind(state, action);

      if (action.initialComponentState) {
        return state.setIn([action.componentName, action.key], (0, _immutable.fromJS)(action.initialComponentState));
      }

      return state.setIn([action.componentName, action.key], new _immutable.Map());

    case _constant.default.COMPONENT_MERGE_STATE:
      errorIfMergingStateDoesntExist(state, action);
      return state.mergeIn([action.componentName, action.key], (0, _immutable.fromJS)(action.componentState));

    case _constant.default.COMPONENT_REMOVE_STATE:
      warnIfRemovingStateDoesntExist(state, action);
      return state.deleteIn([action.componentName, action.key]);

    default:
      {
        var subAction = (0, _get.default)(action, 'cmf.componentState');

        if (subAction) {
          return componentsReducers(state, subAction);
        }

        return state;
      }
  }
}

var _default = componentsReducers;
exports.default = _default;

/***/ }),

/***/ "./node_modules/@talend/react-cmf/lib/reducers/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/@talend/react-cmf/lib/reducers/index.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _redux = __webpack_require__(/*! redux */ "redux");

var _collectionsReducers = _interopRequireDefault(__webpack_require__(/*! ./collectionsReducers */ "./node_modules/@talend/react-cmf/lib/reducers/collectionsReducers.js"));

var _componentsReducers = __webpack_require__(/*! ./componentsReducers */ "./node_modules/@talend/react-cmf/lib/reducers/componentsReducers.js");

var _settingsReducers = __webpack_require__(/*! ./settingsReducers */ "./node_modules/@talend/react-cmf/lib/reducers/settingsReducers.js");

var _constant = _interopRequireDefault(__webpack_require__(/*! ../constant */ "./node_modules/@talend/react-cmf/lib/constant.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @module react-cmf/lib/reducers
 * @see module:react-cmf/lib/reducers/collectionsReducers
 * @see module:react-cmf/lib/reducers/componentsReducers
 * @see module:react-cmf/lib/reducers/settingsReducers
 */
var defaultState = [];
/**
 * errorsReducer
 */

function errorsReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  if (action.type === _constant.default.ERROR) {
    return state.concat(action.error);
  }

  return state;
}
/**
 * exported API
 * @type {object}
 * @example
	import reducer from 'react-cmf/lib/reducers';
 */


var _default = (0, _redux.combineReducers)({
  collections: _collectionsReducers.default,
  components: _componentsReducers.componentsReducers,
  settings: _settingsReducers.settingsReducers,
  errors: errorsReducer
});

exports.default = _default;

/***/ }),

/***/ "./node_modules/@talend/react-cmf/lib/reducers/settingsReducers.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@talend/react-cmf/lib/reducers/settingsReducers.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.attachRef = attachRef;
exports.attachRefs = attachRefs;
exports.settingsReducers = settingsReducers;
exports.default = exports.defaultState = void 0;

var _get = _interopRequireDefault(__webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js"));

var _invariant = _interopRequireDefault(__webpack_require__(/*! invariant */ "./node_modules/invariant/browser.js"));

var _constant = _interopRequireDefault(__webpack_require__(/*! ../constant */ "./node_modules/@talend/react-cmf/lib/constant.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var defaultState = {
  initialized: false,
  contentTypes: {},
  actions: {},
  props: {},
  routes: {}
};
/**
 * if an object try to find _ref property and resolve it
 */

exports.defaultState = defaultState;

function attachRef(refs, obj) {
  if (obj === null || _typeof(obj) !== 'object' || Array.isArray(obj)) {
    return obj;
  }

  var props = _extends({}, obj);

  if (props._ref) {
    (0, _invariant.default)(refs[props._ref], "CMF/Settings: Reference '".concat(props._ref, "' not found"));
    props = _extends({}, refs[props._ref], obj);
    delete props._ref;
  }

  return props;
}

function attachRefs(refs, props) {
  var attachedProps = attachRef(refs, props);
  Object.keys(attachedProps).forEach(function (key) {
    attachedProps[key] = attachRef(refs, attachedProps[key]);
  });
  return attachedProps;
}
/**
 * attach reference to produce a ready to use freezed object
 * @param {object} originalSettings the full settings with `props` and `ref` attribute
 * @return {object} frozen settings with ref computed
 */


function prepareSettings(_ref) {
  var views = _ref.views,
      props = _ref.props,
      ref = _ref.ref,
      rest = _objectWithoutProperties(_ref, ["views", "props", "ref"]);

  var settings = _extends({
    props: {}
  }, _objectSpread({}, rest));

  if (views) {
    if (true) {
      // eslint-disable-next-line no-console
      console.warn('settings.view is deprecated, please use settings.props');
    }

    Object.keys(views).forEach(function (id) {
      settings.props[id] = attachRefs(ref, views[id]);
    });
  }

  if (props) {
    Object.keys(props).forEach(function (id) {
      settings.props[id] = attachRefs(ref, props[id]);
    });
  }

  if (typeof settings.freeze === 'function') {
    settings.freeze();
  }

  return settings;
}
/**
 * handle actions related to the settings
 * @param  {object} state  initial state
 * @param  {object} action redux aciton
 * @return {object}        new state
 */


function settingsReducers() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _constant.default.REQUEST_OK:
      return _extends({}, state, {
        initialized: true
      }, prepareSettings(action.settings));

    case _constant.default.REQUEST_KO:
      // eslint-disable-next-line no-console
      console.error("Settings can't be loaded ".concat((0, _get.default)(action, 'error.message')), action.error);
      return state;

    default:
      return state;
  }
}

var _default = settingsReducers;
exports.default = _default;

/***/ }),

/***/ "./node_modules/@talend/react-cmf/lib/register.js":
/*!********************************************************!*\
  !*** ./node_modules/@talend/react-cmf/lib/register.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registerInternals = registerInternals;

var _actions = _interopRequireDefault(__webpack_require__(/*! ./actions */ "./node_modules/@talend/react-cmf/lib/actions/index.js"));

var _actionCreator = _interopRequireDefault(__webpack_require__(/*! ./actionCreator */ "./node_modules/@talend/react-cmf/lib/actionCreator.js"));

var _expression = _interopRequireDefault(__webpack_require__(/*! ./expression */ "./node_modules/@talend/react-cmf/lib/expression.js"));

var _expressions = _interopRequireDefault(__webpack_require__(/*! ./expressions */ "./node_modules/@talend/react-cmf/lib/expressions/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-next-line import/prefer-default-export
function registerInternals(context) {
  _actionCreator.default.register('cmf.saga.start', _actions.default.saga.start, context);

  _actionCreator.default.register('cmf.saga.stop', _actions.default.saga.stop, context);

  _expression.default.registerMany(_expressions.default, context);
}

/***/ }),

/***/ "./node_modules/@talend/react-cmf/lib/registry.js":
/*!********************************************************!*\
  !*** ./node_modules/@talend/react-cmf/lib/registry.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * Internal. This is the core of react-cmf.
 * The registry will register everything from a react component to redux action.
 * @module react-cmf/lib/registry
 */

/* eslint no-underscore-dangle: ["error", {"allow": ["_registry", "_isLocked"] }]*/

/**
 * @typedef {Object<string, *>} Registry
 */

/**
 * The registry that will have the singleton
 * - getRegistry() -> the registry which is a simple key/value POJO
 * @type {Registry}
 */
var Registry = {
  _registry: {},
  _isLocked: false,
  getRegistry: function getRegistry() {
    return this._registry;
  },
  lock: function lock() {
    this._isLocked = true;
  },
  isLocked: function isLocked() {
    return this._isLocked;
  }
};
/**
 * Returns the global registry if no context found. If count is found it returns
 * the context.registry
 * @param {object} context React context
 * @return {Registry} the registry singleton instance
 */

function getRegistry(context) {
  if (context && context.registry) {
    return context.registry;
  }

  return Registry.getRegistry();
}
/**
 * Internal. Call this one to add anything you want into the registry.
 * It will be added only if not locked.
 * Be warned any existing content will be overridden.
 * You should use this to add a new configurable concept to CMF.
 * By default it's internally used to register expression, component and actionCreator
 * @param {string} id Where you want it to store in the registry to get it later
 * @param {any} item Everything you want, a function, an object or whatever
 */


function addToRegistry(id, item, context) {
  if (Registry.isLocked()) {
    throw new Error("CMF: The registry is locked, you cannot therefore add '".concat(id, "' in it. ") + 'Please check your CMF configuration, it should not move after the initial ' + 'configuration before bootstrap.');
  }

  var registry = getRegistry(context);

  if (registry[id]) {
    // eslint-disable-next-line no-console
    console.warn("CMF: The '".concat(id, "' object is registered, overriding an existing '").concat(id, "' object. ") + 'Please check your CMF configuration, you might not want that.');
  }

  if (item === undefined) {
    throw new Error("CMF: you can't register undefined in '".concat(id, "'.\n\t\t\tYou may have an import error in your configuration"));
  }

  registry[id] = item;
}
/**
 * Internal: return element registred under the ID.
 * @param  {string} id the object's id in the registry you want to get
 * @param  {object} context cmf context
 * @return {any}    the object you are looking for
 */


function getFromRegistry(id, context) {
  return getRegistry(context)[id];
}
/**
 * This function is a curry that return a generic function to register components in registry
 * @param {function} registerFn a function that register a item in the registry
 */


function getRegisterMany(registerFn) {
  return function (itemsToRegister, context) {
    Object.keys(itemsToRegister).forEach(function (key) {
      registerFn(key, itemsToRegister[key], context);
    });
  };
}

var registerMany = getRegisterMany(addToRegistry);
/**
 * Lock the registry
 */

function lock() {
  Registry.lock();
}

var _default = {
  Registry: Registry,
  addToRegistry: addToRegistry,
  getRegistry: getRegistry,
  getFromRegistry: getFromRegistry,
  getRegisterMany: getRegisterMany,
  lock: lock,
  registerMany: registerMany
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/@talend/react-cmf/lib/sagas/collection.js":
/*!****************************************************************!*\
  !*** ./node_modules/@talend/react-cmf/lib/sagas/collection.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.waitFor = waitFor;

var _effects = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/es/effects.js");

var _reduxSaga = __webpack_require__(/*! redux-saga */ "redux-saga");

var _selectors = _interopRequireDefault(__webpack_require__(/*! ../selectors */ "./node_modules/@talend/react-cmf/lib/selectors/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked =
/*#__PURE__*/
regeneratorRuntime.mark(waitFor);

/**
 * this saga ends when the collection is available
 * @param {string} id of the collection to wait for
 * @param {number} interval in ms
 */
function waitFor(id) {
  var interval,
      collection,
      _args = arguments;
  return regeneratorRuntime.wrap(function waitFor$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          interval = _args.length > 1 && _args[1] !== undefined ? _args[1] : 10;

        case 1:
          if (false) {}

          _context.next = 4;
          return (0, _effects.select)(_selectors.default.collections.get, id);

        case 4:
          collection = _context.sent;

          if (!(collection !== undefined)) {
            _context.next = 7;
            break;
          }

          return _context.abrupt("break", 11);

        case 7:
          _context.next = 9;
          return (0, _effects.call)(_reduxSaga.delay, interval);

        case 9:
          _context.next = 1;
          break;

        case 11:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}

/***/ }),

/***/ "./node_modules/@talend/react-cmf/lib/sagas/component.js":
/*!***************************************************************!*\
  !*** ./node_modules/@talend/react-cmf/lib/sagas/component.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.register = register;
exports.get = get;
exports.onSagaStart = onSagaStart;
exports.handle = handle;
exports.isActionCancelable = exports.registerMany = void 0;

var _effects = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/es/effects.js");

var _constant = _interopRequireDefault(__webpack_require__(/*! ../constant */ "./node_modules/@talend/react-cmf/lib/constant.js"));

var _registry = _interopRequireDefault(__webpack_require__(/*! ../registry */ "./node_modules/@talend/react-cmf/lib/registry.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked =
/*#__PURE__*/
regeneratorRuntime.mark(onSagaStart),
    _marked2 =
/*#__PURE__*/
regeneratorRuntime.mark(handle);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * This function register a saga in the cmf registry
 * @param {string} id the saga id you want
 * @param {generator} saga the saga generator
 * @param {object} context optional context to get the registry
 */
function register(id, saga, context) {
  _registry.default.addToRegistry("SAGA:".concat(id), saga, context);
}
/**
 * This function allow to get a saga from the registry
 * @param {string} id the saga id you want
 * @param {object} context optional context to get the registry
 */


function get(id, context) {
  return _registry.default.getFromRegistry("SAGA:".concat(id), context);
}

var registerMany = _registry.default.getRegisterMany(register);

exports.registerMany = registerMany;

var isActionCancelable = function isActionCancelable(startAction) {
  return function (action) {
    return action.type === "".concat(_constant.default.WILL_UNMOUNT_SAGA_STOP, "_").concat(startAction.saga) && startAction.event.componentId === action.event.componentId;
  };
};

exports.isActionCancelable = isActionCancelable;

function onSagaStart(action) {
  var isSagaInfoAnObject, sagaId, sagaArgs, saga, task;
  return regeneratorRuntime.wrap(function onSagaStart$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          isSagaInfoAnObject = _typeof(action.saga) === 'object';
          sagaId = isSagaInfoAnObject ? action.saga.id : action.saga;

          if (sagaId) {
            _context.next = 4;
            break;
          }

          throw new Error("no saga id found in action: ".concat(JSON.stringify(action)));

        case 4:
          sagaArgs = isSagaInfoAnObject ? action.saga.args : [];
          saga = get(sagaId);

          if (saga) {
            _context.next = 8;
            break;
          }

          throw new Error("saga not found: ".concat(sagaId));

        case 8:
          _context.next = 10;
          return _effects.spawn.apply(void 0, [saga, _objectSpread({}, action.props, {
            // deprecated: you should only read { componentId }
            componentId: action.componentId
          })].concat(_toConsumableArray(sagaArgs)));

        case 10:
          task = _context.sent;
          _context.next = 13;
          return (0, _effects.take)(isActionCancelable(action));

        case 13:
          _context.next = 15;
          return (0, _effects.cancel)(task);

        case 15:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}

function handle() {
  return regeneratorRuntime.wrap(function handle$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return (0, _effects.takeEvery)(_constant.default.DID_MOUNT_SAGA_START, onSagaStart);

        case 2:
          _context2.next = 4;
          return (0, _effects.take)('DO_NOT_QUIT');

        case 4:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2);
}

/***/ }),

/***/ "./node_modules/@talend/react-cmf/lib/sagas/http.js":
/*!**********************************************************!*\
  !*** ./node_modules/@talend/react-cmf/lib/sagas/http.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleCSRFToken = handleCSRFToken;
exports.handleBody = handleBody;
exports.handleError = handleError;
exports.handleHttpResponse = handleHttpResponse;
exports.encodePayload = encodePayload;
exports.httpFetch = httpFetch;
exports.wrapFetch = wrapFetch;
exports.httpPost = httpPost;
exports.httpPatch = httpPatch;
exports.httpPut = httpPut;
exports.httpDelete = httpDelete;
exports.httpGet = httpGet;
exports.setDefaultConfig = setDefaultConfig;
exports.setDefaultLanguage = setDefaultLanguage;
exports.getDefaultConfig = getDefaultConfig;
exports.default = exports.handleDefaultHttpConfiguration = exports.HTTPError = exports.HTTP = void 0;

var _effects = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/es/effects.js");

var _merge = _interopRequireDefault(__webpack_require__(/*! lodash/merge */ "./node_modules/lodash/merge.js"));

var _get = _interopRequireDefault(__webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js"));

var _curry = _interopRequireDefault(__webpack_require__(/*! lodash/curry */ "./node_modules/lodash/curry.js"));

var _csrfHandling = __webpack_require__(/*! ../middlewares/http/csrfHandling */ "./node_modules/@talend/react-cmf/lib/middlewares/http/csrfHandling.js");

var _constants = __webpack_require__(/*! ../middlewares/http/constants */ "./node_modules/@talend/react-cmf/lib/middlewares/http/constants.js");

var _httpInterceptors = _interopRequireDefault(__webpack_require__(/*! ../httpInterceptors */ "./node_modules/@talend/react-cmf/lib/httpInterceptors.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _marked =
/*#__PURE__*/
regeneratorRuntime.mark(wrapFetch),
    _marked2 =
/*#__PURE__*/
regeneratorRuntime.mark(httpPost),
    _marked3 =
/*#__PURE__*/
regeneratorRuntime.mark(httpPatch),
    _marked4 =
/*#__PURE__*/
regeneratorRuntime.mark(httpPut),
    _marked5 =
/*#__PURE__*/
regeneratorRuntime.mark(httpDelete),
    _marked6 =
/*#__PURE__*/
regeneratorRuntime.mark(httpGet);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/**
 * Storage point for the doc setup using `setDefaultConfig`
 */
var HTTP = {
  defaultConfig: null
};
/**
 * merge the CSRFToken handling rule from the module defaultConfig
 * into config argument
 * @param {Object} config
 * @returns {Function}
 */

exports.HTTP = HTTP;

function handleCSRFToken(config) {
  return (0, _csrfHandling.mergeCSRFToken)({
    security: config.security
  })(config);
}

var HTTPError =
/*#__PURE__*/
function (_Error) {
  _inherits(HTTPError, _Error);

  function HTTPError(_ref) {
    var _this;

    var data = _ref.data,
        response = _ref.response;

    _classCallCheck(this, HTTPError);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(HTTPError).call(this, response.statusText));
    _this.name = "HTTP ".concat(response.status);
    _this.data = data;
    _this.response = response;
    return _this;
  }

  return HTTPError;
}(_wrapNativeSuper(Error));
/**
 * handleHttpResponse - handle the http body
 *
 * @param  {Response} response A response object
 * @return {Promise}           A promise that resolves with the result of parsing the body
 */


exports.HTTPError = HTTPError;

function handleBody(response) {
  var methodBody = 'text';
  var headers = (0, _get.default)(response, 'headers', new Headers());
  var contentType = headers.get('Content-Type');

  if (contentType && contentType.includes('application/json')) {
    methodBody = 'json';
  }

  if (contentType && contentType.includes('application/zip')) {
    methodBody = 'blob';
  }

  return response[methodBody]().then(function (data) {
    return {
      data: data,
      response: response
    };
  });
}
/**
 * handleHttpResponse - handle the http error
 *
 * @param  {Response} response A response object
 * @return {Promise}           A promise that reject with the result of parsing the body
 */


function handleError(response) {
  // in case of network issue
  if (response instanceof Error) {
    return new HTTPError({
      response: response,
      data: response
    });
  }

  return handleBody(response).then(function (body) {
    return new HTTPError(body);
  });
}
/**
 * handleHttpResponse - handle the http response
 *
 * @param  {Response} response A response object
 * @return {Promise}           A promise that:
 * - resolves with the result of parsing the body
 * - reject the response
 */


function handleHttpResponse(response) {
  if (!_constants.testHTTPCode.isSuccess(response.status)) {
    return Promise.reject(response);
  }

  if (response.status === _constants.HTTP_STATUS.NO_CONTENT) {
    return Promise.resolve({
      data: '',
      response: response
    });
  }

  return handleBody(response);
}
/**
 * encodePayload - encore the payload if necessary
 *
 * @param  {object} headers request headers
 * @param  {object} payload payload to send with the request
 * @return {string|FormData} The encoded payload.
 */


function encodePayload(headers, payload) {
  var type = headers['Content-Type'];

  if (payload instanceof FormData || typeof payload === 'string') {
    return payload;
  } else if (type && type.includes('json')) {
    return JSON.stringify(payload);
  }

  return payload;
}
/**
 * httpFetch - call the api fetch to request the url
 *
 * @param  {string} url                       url to request
 * @param  {object} config                    option that you want apply to the request
 * @param  {string} method = HTTP_METHODS.GET method to apply
 * @param  {object} payload                   payload to send with the request
 * @return {Promise}                          A Promise that resolves to a Response object.
 */


function httpFetch(url, config, method, payload) {
  var defaultHeaders = {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  };
  /**
   * If the playload is an instance of FormData the body should be set to this object
   * and the Content-type header should be stripped since the browser
   * have to build a special headers with file boundary in if said FormData is used to upload file
   */

  if (payload instanceof FormData) {
    delete defaultHeaders['Content-Type'];
  }

  var params = (0, _merge.default)({
    credentials: 'same-origin',
    headers: defaultHeaders,
    method: method
  }, _objectSpread({}, HTTP.defaultConfig, {}, config));
  return fetch(url, handleCSRFToken(_objectSpread({}, params, {
    body: encodePayload(params.headers, payload)
  }))).then(handleHttpResponse).catch(handleError);
}
/**
 * function - wrap the fetch request with the actions errors
 *
 * @param  {string} url                       url to request
 * @param  {object} config                    option that you want apply to the request
 * @param  {string} method = HTTP_METHODS.GET method to apply
 * @param  {object} payload                   payload to send with the request
 * @param  {object} options                   options to deal with cmf automatically
 * @return {object}                           the response of the request
 */


function wrapFetch(url, config) {
  var method,
      payload,
      options,
      newConfig,
      answer,
      silent,
      _args = arguments;
  return regeneratorRuntime.wrap(function wrapFetch$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          method = _args.length > 2 && _args[2] !== undefined ? _args[2] : _constants.HTTP_METHODS.GET;
          payload = _args.length > 3 ? _args[3] : undefined;
          options = _args.length > 4 ? _args[4] : undefined;
          _context.next = 5;
          return (0, _effects.call)(_httpInterceptors.default.onRequest, _objectSpread({
            url: url,
            method: method,
            payload: payload
          }, config));

        case 5:
          newConfig = _context.sent;
          _context.next = 8;
          return (0, _effects.call)(httpFetch, newConfig.url, newConfig, newConfig.method, newConfig.payload);

        case 8:
          answer = _context.sent;
          _context.next = 11;
          return (0, _effects.call)(_httpInterceptors.default.onResponse, answer);

        case 11:
          silent = (0, _get.default)(options, 'silent');

          if (!(silent !== true && answer instanceof Error)) {
            _context.next = 15;
            break;
          }

          _context.next = 15;
          return (0, _effects.put)({
            error: {
              message: answer.data.message,
              stack: {
                status: answer.response.status
              }
            },
            url: url,
            config: config,
            method: method,
            payload: payload,
            options: options,
            type: _constants.ACTION_TYPE_HTTP_ERRORS
          });

        case 15:
          return _context.abrupt("return", answer);

        case 16:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}
/**
 * function - fetch a url with POST method
 *
 * @param  {string} url     url to request
 * @param  {object} payload payload to send with the request
 * @param  {object} config  option that you want apply to the request
 * @param  {object} options options to deal with cmf automatically
 * @example
 * import { sagas } from '@talend/react-cmf';
 * import { call } from 'redux-saga/effects'
 * yield call(sagas.http.post, '/foo', {foo: 42});
 */


function httpPost(url, payload, config, options) {
  return regeneratorRuntime.wrap(function httpPost$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          return _context2.delegateYield(wrapFetch(url, config, _constants.HTTP_METHODS.POST, payload, options), "t0", 1);

        case 1:
          return _context2.abrupt("return", _context2.t0);

        case 2:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2);
}
/**
 * function - fetch a url with PATCH method
 *
 * @param  {string} url     url to request
 * @param  {object} payload payload to send with the request
 * @param  {object} config  option that you want apply to the request
 * @param  {object} options options to deal with cmf automatically
 * @example
 * import { sagas } from '@talend/react-cmf';
 * import { call } from 'redux-saga/effects'
 * yield call(sagas.http.patch, '/foo', {foo: 42});
 */


function httpPatch(url, payload, config, options) {
  return regeneratorRuntime.wrap(function httpPatch$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          return _context3.delegateYield(wrapFetch(url, config, _constants.HTTP_METHODS.PATCH, payload, options), "t0", 1);

        case 1:
          return _context3.abrupt("return", _context3.t0);

        case 2:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3);
}
/**
 * function - fetch a url with PUT method
 *
 * @param  {string} url     url to request
 * @param  {object} payload payload to send with the request
 * @param  {object} config  option that you want apply to the request
 * @param  {object} options options to deal with cmf automatically
 * @example
 * import { sagas } from '@talend/react-cmf';
 * import { call } from 'redux-saga/effects'
 * yield call(sagas.http.put, '/foo', {foo: 42});
 */


function httpPut(url, payload, config, options) {
  return regeneratorRuntime.wrap(function httpPut$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          return _context4.delegateYield(wrapFetch(url, config, _constants.HTTP_METHODS.PUT, payload, options), "t0", 1);

        case 1:
          return _context4.abrupt("return", _context4.t0);

        case 2:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked4);
}
/**
 * function - fetch a url with DELETE method
 *
 * @param  {string} url     url to request
 * @param  {object} config  option that you want apply to the request
 * @param  {object} options options to deal with cmf automatically
 * @example
 * import { sagas } from '@talend/react-cmf';
 * import { call } from 'redux-saga/effects'
 * yield call(sagas.http.delete, '/foo');
 */


function httpDelete(url, config, options) {
  return regeneratorRuntime.wrap(function httpDelete$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          return _context5.delegateYield(wrapFetch(url, config, _constants.HTTP_METHODS.DELETE, undefined, options), "t0", 1);

        case 1:
          return _context5.abrupt("return", _context5.t0);

        case 2:
        case "end":
          return _context5.stop();
      }
    }
  }, _marked5);
}
/**
 * function - fetch a url with GET method
 *
 * @param  {string} url     url to request
 * @param  {object} config  option that you want apply to the request
 * @param  {object} options options to deal with cmf automatically
 * @example
 * import { sagas } from '@talend/react-cmf';
 * import { call } from 'redux-saga/effects'
 * yield call(sagas.http.get, '/foo');
 */


function httpGet(url, config, options) {
  return regeneratorRuntime.wrap(function httpGet$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          return _context6.delegateYield(wrapFetch(url, config, _constants.HTTP_METHODS.GET, undefined, options), "t0", 1);

        case 1:
          return _context6.abrupt("return", _context6.t0);

        case 2:
        case "end":
          return _context6.stop();
      }
    }
  }, _marked6);
}
/**
 * setDefaultHeader - define a default config to use with the saga http
 * this default config is stored in this module for the whole application
 *
 * @param  {object} config key/value of header to apply
 * @example
 * import { setDefaultConfig } from '@talend/react-cmf/sagas/http';
 * setDefaultConfig({headers: {
 *  'Accept-Language': preferredLanguage,
 * }});
 */


function setDefaultConfig(config) {
  if (HTTP.defaultConfig) {
    throw new Error('ERROR: setDefaultConfig should not be called twice, if you wish to change the language use setDefaultLanguage api.');
  }

  HTTP.defaultConfig = config;
}
/**
 * To change only the Accept-Language default headers
 * on the global http defaultConfig
 * @param {String} language
 */


function setDefaultLanguage(language) {
  if ((0, _get.default)(HTTP, 'defaultConfig.headers')) {
    HTTP.defaultConfig.headers['Accept-Language'] = language;
  } else {
    // eslint-disable-next-line no-console
    throw new Error('ERROR: you should call setDefaultConfig.');
  }
}

var handleDefaultHttpConfiguration = (0, _curry.default)(function (defaultHttpConfig, httpConfig) {
  return (
    /**
     * Wall of explain
     * merge mutate your object see https://lodash.com/docs/4.17.10#merge little note at the
     * end of the documentation, so why ? don't know but its bad.
     *
     * so defaultHttpConfig was mutated inside the curried function and applied to
     * all other call providing httpConfig, leading to interesting bug like having one time
     * httpConfig override merged into defaultHttConfig.
     * a test with two sccessive call will detect this issue.
     */
    (0, _merge.default)({}, defaultHttpConfig, httpConfig)
  );
});
/**
 * getDefaultConfig - return the defaultConfig
 *
 * @return {object}  the defaultConfig used by cmf
 */

exports.handleDefaultHttpConfiguration = handleDefaultHttpConfiguration;

function getDefaultConfig() {
  return HTTP.defaultConfig;
}

var _default = {
  delete: httpDelete,
  get: httpGet,
  post: httpPost,
  put: httpPut,
  patch: httpPatch,
  setDefaultConfig: setDefaultConfig,
  setDefaultLanguage: setDefaultLanguage,
  getDefaultConfig: getDefaultConfig,
  create: function create() {
    var createConfig = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var configEnhancer = handleDefaultHttpConfiguration(createConfig);
    return {
      delete:
      /*#__PURE__*/
      regeneratorRuntime.mark(function configuredDelete(url) {
        var config,
            options,
            _args7 = arguments;
        return regeneratorRuntime.wrap(function configuredDelete$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                config = _args7.length > 1 && _args7[1] !== undefined ? _args7[1] : {};
                options = _args7.length > 2 && _args7[2] !== undefined ? _args7[2] : {};
                _context7.next = 4;
                return (0, _effects.call)(httpDelete, url, configEnhancer(config), options);

              case 4:
                return _context7.abrupt("return", _context7.sent);

              case 5:
              case "end":
                return _context7.stop();
            }
          }
        }, configuredDelete);
      }),
      get:
      /*#__PURE__*/
      regeneratorRuntime.mark(function configuredGet(url) {
        var config,
            options,
            _args8 = arguments;
        return regeneratorRuntime.wrap(function configuredGet$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                config = _args8.length > 1 && _args8[1] !== undefined ? _args8[1] : {};
                options = _args8.length > 2 && _args8[2] !== undefined ? _args8[2] : {};
                _context8.next = 4;
                return (0, _effects.call)(httpGet, url, configEnhancer(config), options);

              case 4:
                return _context8.abrupt("return", _context8.sent);

              case 5:
              case "end":
                return _context8.stop();
            }
          }
        }, configuredGet);
      }),
      post:
      /*#__PURE__*/
      regeneratorRuntime.mark(function configuredPost(url, payload) {
        var config,
            options,
            _args9 = arguments;
        return regeneratorRuntime.wrap(function configuredPost$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                config = _args9.length > 2 && _args9[2] !== undefined ? _args9[2] : {};
                options = _args9.length > 3 && _args9[3] !== undefined ? _args9[3] : {};
                _context9.next = 4;
                return (0, _effects.call)(httpPost, url, payload, configEnhancer(config), options);

              case 4:
                return _context9.abrupt("return", _context9.sent);

              case 5:
              case "end":
                return _context9.stop();
            }
          }
        }, configuredPost);
      }),
      put:
      /*#__PURE__*/
      regeneratorRuntime.mark(function configuredPut(url, payload) {
        var config,
            options,
            _args10 = arguments;
        return regeneratorRuntime.wrap(function configuredPut$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                config = _args10.length > 2 && _args10[2] !== undefined ? _args10[2] : {};
                options = _args10.length > 3 && _args10[3] !== undefined ? _args10[3] : {};
                _context10.next = 4;
                return (0, _effects.call)(httpPut, url, payload, configEnhancer(config), options);

              case 4:
                return _context10.abrupt("return", _context10.sent);

              case 5:
              case "end":
                return _context10.stop();
            }
          }
        }, configuredPut);
      }),
      patch:
      /*#__PURE__*/
      regeneratorRuntime.mark(function configuredPatch(url, payload) {
        var config,
            options,
            _args11 = arguments;
        return regeneratorRuntime.wrap(function configuredPatch$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                config = _args11.length > 2 && _args11[2] !== undefined ? _args11[2] : {};
                options = _args11.length > 3 && _args11[3] !== undefined ? _args11[3] : {};
                _context11.next = 4;
                return (0, _effects.call)(httpPatch, url, payload, configEnhancer(config), options);

              case 4:
                return _context11.abrupt("return", _context11.sent);

              case 5:
              case "end":
                return _context11.stop();
            }
          }
        }, configuredPatch);
      })
    };
  }
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/@talend/react-cmf/lib/sagas/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/@talend/react-cmf/lib/sagas/index.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _http = _interopRequireDefault(__webpack_require__(/*! ./http */ "./node_modules/@talend/react-cmf/lib/sagas/http.js"));

var _putActionCreator = _interopRequireDefault(__webpack_require__(/*! ./putActionCreator */ "./node_modules/@talend/react-cmf/lib/sagas/putActionCreator.js"));

var collection = _interopRequireWildcard(__webpack_require__(/*! ./collection */ "./node_modules/@talend/react-cmf/lib/sagas/collection.js"));

var component = _interopRequireWildcard(__webpack_require__(/*! ./component */ "./node_modules/@talend/react-cmf/lib/sagas/component.js"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  // shortcut
  get: component.get,
  register: component.register,
  registerMany: component.registerMany,
  collection: collection,
  component: component,
  http: _http.default,
  putActionCreator: _putActionCreator.default
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/@talend/react-cmf/lib/sagas/putActionCreator.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@talend/react-cmf/lib/sagas/putActionCreator.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _effects = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/es/effects.js");

var _actionCreator = _interopRequireDefault(__webpack_require__(/*! ../actionCreator */ "./node_modules/@talend/react-cmf/lib/actionCreator.js"));

var _registry = _interopRequireDefault(__webpack_require__(/*! ../registry */ "./node_modules/@talend/react-cmf/lib/registry.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked =
/*#__PURE__*/
regeneratorRuntime.mark(putActionCreator);

function putActionCreator(actionCreatorId, event, data, optContext) {
  var state, context, actionCreator;
  return regeneratorRuntime.wrap(function putActionCreator$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return (0, _effects.select)();

        case 2:
          state = _context.sent;
          context = optContext || {
            registry: _registry.default.getRegistry(),
            store: {
              getState: function getState() {
                return state;
              }
            }
          };
          actionCreator = _actionCreator.default.get(context, actionCreatorId);
          _context.next = 7;
          return (0, _effects.put)(actionCreator(event, data, context));

        case 7:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}

var _default = putActionCreator;
exports.default = _default;

/***/ }),

/***/ "./node_modules/@talend/react-cmf/lib/selectors/collections.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@talend/react-cmf/lib/selectors/collections.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAll = getAll;
exports.get = get;
exports.findListItem = findListItem;
exports.toJS = toJS;

var _immutable = __webpack_require__(/*! immutable */ "immutable");

var _toJS = _interopRequireDefault(__webpack_require__(/*! ./toJS */ "./node_modules/@talend/react-cmf/lib/selectors/toJS.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getAll(state) {
  return state.cmf.collections;
}
/**
 * return a collection or subset of a collection from a cmf store
 * @param {Object} state
 * @param {String or Array<String>} collectionPath
 * @example
 *  get('foo.bar', true) === state.cmf.collections.getIn(['foo', 'bar'], true)
 */


function get(state, collectionPath, defaultValue) {
  var path;

  if (typeof collectionPath === 'string') {
    path = collectionPath.split('.');
  } else if (Array.isArray(collectionPath)) {
    path = collectionPath;
  }

  if (path) {
    return state.cmf.collections.getIn(path, defaultValue);
  }

  throw Error("Type mismatch: collectionPath should be a string or an array of string\ngot ".concat(collectionPath));
}
/**
 * for a collectionId and an id find and return the an item from this
 * collection if it is a list
 * @param {Object} state
 * @param {String} collectionId
 * @param {String} itemId
 */


function findListItem(state, collectionPath, itemId) {
  var collectionOrCollectionSubset = get(state, collectionPath);

  if (_immutable.List.isList(collectionOrCollectionSubset)) {
    return collectionOrCollectionSubset.find(function (element) {
      return element && element.get('id') === itemId;
    });
  }

  throw Error("Type mismatch: ".concat(collectionPath, " does not resolve as an instance of Immutable.List,\ngot ").concat(collectionOrCollectionSubset));
}

var selectors = {};

function toJS(state, path) {
  var joinedPath = Array.isArray(path) ? path.join('.') : path;

  if (!selectors[joinedPath]) {
    selectors[joinedPath] = (0, _toJS.default)(function (calledState) {
      return get(calledState, path);
    });
  }

  return selectors[joinedPath](state);
}

/***/ }),

/***/ "./node_modules/@talend/react-cmf/lib/selectors/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/@talend/react-cmf/lib/selectors/index.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var collections = _interopRequireWildcard(__webpack_require__(/*! ./collections */ "./node_modules/@talend/react-cmf/lib/selectors/collections.js"));

var _toJS = _interopRequireDefault(__webpack_require__(/*! ./toJS */ "./node_modules/@talend/react-cmf/lib/selectors/toJS.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var _default = {
  collections: collections,
  toJS: _toJS.default
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/@talend/react-cmf/lib/selectors/toJS.js":
/*!**************************************************************!*\
  !*** ./node_modules/@talend/react-cmf/lib/selectors/toJS.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getToJSMemoized;

function toJS(data) {
  if (data) {
    if (typeof data.toJS === 'function') {
      return data.toJS();
    }

    throw new Error('the selector return a data which is not an immutable');
  }

  return undefined;
}
/**
 * toJS is an higher order selector.
 * It modify a given selector to return the value as a POJO
 * Note: your selector must use only one selector
 * @param {function} selector the selector
 * @returns the POJO associated to the given selector
 */


function getToJSMemoized(selector) {
  if (typeof selector !== 'function') {
    throw new Error('selector must be a function in cmf.selectors.toJS(selector)');
  }

  var cache = {};

  function memoize(func) {
    return function () {
      if (cache.key === (arguments.length <= 0 ? undefined : arguments[0])) {
        return cache.value;
      }

      cache.key = arguments.length <= 0 ? undefined : arguments[0];
      cache.value = func.apply(void 0, arguments);
      return cache.value;
    };
  }

  var toJSMemoized = memoize(toJS);
  return function (state) {
    return toJSMemoized(selector(state));
  };
}

/***/ }),

/***/ "./node_modules/@talend/react-cmf/lib/settings.js":
/*!********************************************************!*\
  !*** ./node_modules/@talend/react-cmf/lib/settings.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateDefaultViewId = generateDefaultViewId;
exports.nonMemoized = nonMemoized;
exports.default = exports.WaitForSettings = exports.mapStateToViewProps = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

var _memoize = _interopRequireDefault(__webpack_require__(/*! lodash/memoize */ "./node_modules/lodash/memoize.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Internal. All stuff related to the settings handling in CMF.
 * @module react-cmf/lib/settings
 */

/**
 * if viewId is undefined, try to generate a meaningfull one
 * else return given viewId
 * @param {string} viewId
 * @param {strign} componentName
 * @param {string} componentId
 */
function generateDefaultViewId(viewId, componentName, componentId) {
  if (!viewId) {
    if (componentName && componentId) {
      return "".concat(componentName, "#").concat(componentId);
    } else if (componentName) {
      return componentName;
    }
  }

  return viewId;
}
/**
 * Extract component name without HOC
 * @param {String} viewId Connect(CMF(Container(MyComponent)))
 * @return {String} MyComponent
 */


function withoutHOC(componentName) {
  return componentName.match(/.*\((.*?)\)/)[1];
}
/**
 * try to retrieve view settings for a cmfconnected component
 * @param {Object} state the application state
 * @param {*} ownProps props given to the cmfConnected component
 * @param {*} componentName name of the cmfConnect component
 * @param {*} componentId componentId, can be undefined
 */


function nonMemoized(state, ownProps, componentName, componentId) {
  var viewProps;
  var viewId = ownProps.view;
  viewId = generateDefaultViewId(viewId, componentName, componentId);

  if (viewId && state.cmf.settings.props[viewId]) {
    viewProps = state.cmf.settings.props[viewId] || {};
  } else if (componentName && componentName.includes('(')) {
    viewId = generateDefaultViewId(null, withoutHOC(componentName), componentId);

    if (viewId && state.cmf.settings.props[viewId]) {
      viewProps = state.cmf.settings.props[viewId] || {};
    }
  }

  return viewProps;
}
/**
 * return props for a given view with reference and override support
 * this function is memoized and the map key is computed using
 * `${ownProps.view}-${componentName}-${componentId}`
 *
 * @example

// state.cmf.settings should look like this

  "views":{
	"homepage": {
	  "sidemenu": {
		"_ref": "SidePanel#default"
	  },
	  "listview": {
		"_ref": "List#default",
		"collectionId": "streams"
	  }
	}
  },
  "ref": {
	 "SidePanel#default": {
	   "actions": ["menu:1", "menu:2", ...]
	 }
  }

//in that case you will have the following props for the homepage view

  {
	sidemenu: {
	  "actions": ["menu:1", "menu:2", ...]
	},
	listview: {
	  ...
	}
  }

 *
 * @param  {Object} state     redux state
 * @param  {Object} ownProps   the props passed to the component. may have a view attribute
 * @return {Object}           React props for the component injected from the settings
 */


var mapStateToViewProps = (0, _memoize.default)(nonMemoized, function (state, ownProps, componentName, componentId) {
  return "".concat(ownProps.view, "-").concat(componentName, "-").concat(componentId, "-").concat(state.cmf.settings.initialized);
});
exports.mapStateToViewProps = mapStateToViewProps;

function PureWaitForSettings(props) {
  if (!props.initialized) {
    return _react.default.createElement(props.loading, null);
  }

  return props.children;
}

PureWaitForSettings.propTypes = {
  initialized: _propTypes.default.bool,
  children: _propTypes.default.node
};
PureWaitForSettings.defaultProps = {
  loading: function loading() {
    return 'loading';
  }
};
var WaitForSettings = (0, _reactRedux.connect)(function (state) {
  return {
    initialized: state.cmf.settings.initialized
  };
})(PureWaitForSettings);
exports.WaitForSettings = WaitForSettings;
var _default = {
  mapStateToViewProps: mapStateToViewProps
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/@talend/react-cmf/lib/store.js":
/*!*****************************************************!*\
  !*** ./node_modules/@talend/react-cmf/lib/store.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _redux = __webpack_require__(/*! redux */ "redux");

var _reduxBatchedActions = __webpack_require__(/*! redux-batched-actions */ "./node_modules/redux-batched-actions/lib/index.js");

var _reduxThunk = _interopRequireDefault(__webpack_require__(/*! redux-thunk */ "redux-thunk"));

var _invariant = _interopRequireDefault(__webpack_require__(/*! invariant */ "./node_modules/invariant/browser.js"));

var _reducers = _interopRequireDefault(__webpack_require__(/*! ./reducers */ "./node_modules/@talend/react-cmf/lib/reducers/index.js"));

var _http = _interopRequireDefault(__webpack_require__(/*! ./middlewares/http */ "./node_modules/@talend/react-cmf/lib/middlewares/http/index.js"));

var _cmf = _interopRequireDefault(__webpack_require__(/*! ./middlewares/cmf */ "./node_modules/@talend/react-cmf/lib/middlewares/cmf/index.js"));

var _onError = _interopRequireDefault(__webpack_require__(/*! ./onError */ "./node_modules/@talend/react-cmf/lib/onError.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

/**
 * @typedef {Object} Store
 */
var preReducers = [];
var enhancers = [];
var middlewares = [_reduxThunk.default, _cmf.default, _onError.default.middleware];

if (window) {
  // eslint-disable-next-line no-underscore-dangle
  if (window.__REDUX_DEVTOOLS_EXTENSION__) {
    // eslint-disable-next-line no-underscore-dangle
    enhancers.push(window.__REDUX_DEVTOOLS_EXTENSION__());
  } else if (window.devToolsExtension) {
    enhancers.push(window.devToolsExtension());
  }
}

var defaultHttpMiddlewareOverwrite = false;
/**
 * setHttpMiddleware overwrites the default http middleware
 * httpMiddleware NEED to be executed before cmfMiddleware
 *
 * @param middleware a http middleware
 */

function setHttpMiddleware(middleware) {
  var cmfMiddlewareIndex = middlewares.indexOf(_cmf.default);
  middlewares.splice(cmfMiddlewareIndex - 1, 0, middleware);
  defaultHttpMiddlewareOverwrite = true;
}

function addPreReducer(reducers) {
  if (typeof reducers === 'function') {
    preReducers.push(reducers);
  } else if (Array.isArray(reducers)) {
    preReducers.push.apply(preReducers, _toConsumableArray(reducers));
  }
}

function preApplyReducer(reducer) {
  if (preReducers.length === 0) {
    return reducer;
  }

  var newReducer = function newReducer(state, action) {
    var newState = preReducers.reduce(function (accumulatedState, r) {
      return r(accumulatedState, action);
    }, state);
    return reducer(newState, action);
  };

  return newReducer;
}
/**
 * Return the CMF reducer
 * @param  {function|Object} appReducer [description]
 * @return {function}            [description]
 */


function getReducer(appReducer) {
  var reducerObject = {};

  if (appReducer) {
    if (_typeof(appReducer) === 'object') {
      reducerObject = _extends({}, appReducer);
    } else if (typeof appReducer === 'function') {
      reducerObject = {
        app: appReducer
      };
    }
  } else {
    (0, _invariant.default)(true, 'Are you sure you want to bootstrap an app without reducers ?');
  }

  if (!reducerObject.cmf) {
    reducerObject.cmf = _reducers.default;
  }

  return (0, _reduxBatchedActions.enableBatching)(preApplyReducer((0, _redux.combineReducers)(reducerObject)));
}
/**
 * return the array of all middleware needed for CMF to run
 * @param {array|function} middleware
 * @returns {array} of middlewares
 */


function getMiddlewares(middleware) {
  if (Array.isArray(middleware)) {
    middleware.forEach(function (mid) {
      if (middlewares.indexOf(mid) === -1) {
        middlewares.push(mid);
      }
    });
  } else if (middleware) {
    middlewares.push(middleware);
  }

  if (!defaultHttpMiddlewareOverwrite) {
    setHttpMiddleware((0, _http.default)());
  }

  return middlewares;
}
/**
 * helper to create the store with all the things needed by CMF
 * the store look like this:
 * - root
 * |- app (with appReducer)
 * |- cmf (for the internals)
 *
 * @param  {function} appReducer   the reducer for your app.
 * @param  {any} preloadedState if you want to create your state tree with initial values.
 *                              This is usefull for server side renderring
 * @param  {function} enhancer     The store enhancer
 * @param  {Array|function} middleware   redux middleware: http://redux.js.org/docs/api/applyMiddleware.html
 * @return {Object}              The created store
 */


function initialize(appReducer, preloadedState, enhancer, middleware) {
  var reducer = getReducer(appReducer);

  if (typeof enhancer === 'function') {
    enhancers.push(enhancer);
  }

  var middles = getMiddlewares(middleware);

  var store = _redux.compose.apply(void 0, [_redux.applyMiddleware.apply(void 0, _toConsumableArray(middles))].concat(enhancers))(_redux.createStore)(reducer, preloadedState);

  return store;
}

var _default = {
  addPreReducer: addPreReducer,
  setHttpMiddleware: setHttpMiddleware,
  initialize: initialize,
  // for testing purepose only
  getReducer: getReducer,
  getMiddlewares: getMiddlewares
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var REACT_STATICS = {
    childContextTypes: true,
    contextTypes: true,
    defaultProps: true,
    displayName: true,
    getDefaultProps: true,
    getDerivedStateFromProps: true,
    mixins: true,
    propTypes: true,
    type: true
};

var KNOWN_STATICS = {
    name: true,
    length: true,
    prototype: true,
    caller: true,
    callee: true,
    arguments: true,
    arity: true
};

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = getPrototypeOf && getPrototypeOf(Object);

function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
    if (typeof sourceComponent !== 'string') { // don't hoist over string (html) components

        if (objectPrototype) {
            var inheritedComponent = getPrototypeOf(sourceComponent);
            if (inheritedComponent && inheritedComponent !== objectPrototype) {
                hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
            }
        }

        var keys = getOwnPropertyNames(sourceComponent);

        if (getOwnPropertySymbols) {
            keys = keys.concat(getOwnPropertySymbols(sourceComponent));
        }

        for (var i = 0; i < keys.length; ++i) {
            var key = keys[i];
            if (!REACT_STATICS[key] && !KNOWN_STATICS[key] && (!blacklist || !blacklist[key])) {
                var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
                try { // Avoid failures from read-only properties
                    defineProperty(targetComponent, key, descriptor);
                } catch (e) {}
            }
        }

        return targetComponent;
    }

    return targetComponent;
}

module.exports = hoistNonReactStatics;


/***/ }),

/***/ "./node_modules/invariant/browser.js":
/*!*******************************************!*\
  !*** ./node_modules/invariant/browser.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var invariant = function(condition, format, a, b, c, d, e, f) {
  if (true) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;


/***/ }),

/***/ "./node_modules/lodash/_DataView.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_DataView.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView');

module.exports = DataView;


/***/ }),

/***/ "./node_modules/lodash/_Hash.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/_Hash.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var hashClear = __webpack_require__(/*! ./_hashClear */ "./node_modules/lodash/_hashClear.js"),
    hashDelete = __webpack_require__(/*! ./_hashDelete */ "./node_modules/lodash/_hashDelete.js"),
    hashGet = __webpack_require__(/*! ./_hashGet */ "./node_modules/lodash/_hashGet.js"),
    hashHas = __webpack_require__(/*! ./_hashHas */ "./node_modules/lodash/_hashHas.js"),
    hashSet = __webpack_require__(/*! ./_hashSet */ "./node_modules/lodash/_hashSet.js");

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

module.exports = Hash;


/***/ }),

/***/ "./node_modules/lodash/_LazyWrapper.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_LazyWrapper.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseCreate = __webpack_require__(/*! ./_baseCreate */ "./node_modules/lodash/_baseCreate.js"),
    baseLodash = __webpack_require__(/*! ./_baseLodash */ "./node_modules/lodash/_baseLodash.js");

/** Used as references for the maximum length and index of an array. */
var MAX_ARRAY_LENGTH = 4294967295;

/**
 * Creates a lazy wrapper object which wraps `value` to enable lazy evaluation.
 *
 * @private
 * @constructor
 * @param {*} value The value to wrap.
 */
function LazyWrapper(value) {
  this.__wrapped__ = value;
  this.__actions__ = [];
  this.__dir__ = 1;
  this.__filtered__ = false;
  this.__iteratees__ = [];
  this.__takeCount__ = MAX_ARRAY_LENGTH;
  this.__views__ = [];
}

// Ensure `LazyWrapper` is an instance of `baseLodash`.
LazyWrapper.prototype = baseCreate(baseLodash.prototype);
LazyWrapper.prototype.constructor = LazyWrapper;

module.exports = LazyWrapper;


/***/ }),

/***/ "./node_modules/lodash/_ListCache.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_ListCache.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var listCacheClear = __webpack_require__(/*! ./_listCacheClear */ "./node_modules/lodash/_listCacheClear.js"),
    listCacheDelete = __webpack_require__(/*! ./_listCacheDelete */ "./node_modules/lodash/_listCacheDelete.js"),
    listCacheGet = __webpack_require__(/*! ./_listCacheGet */ "./node_modules/lodash/_listCacheGet.js"),
    listCacheHas = __webpack_require__(/*! ./_listCacheHas */ "./node_modules/lodash/_listCacheHas.js"),
    listCacheSet = __webpack_require__(/*! ./_listCacheSet */ "./node_modules/lodash/_listCacheSet.js");

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

module.exports = ListCache;


/***/ }),

/***/ "./node_modules/lodash/_LodashWrapper.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_LodashWrapper.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseCreate = __webpack_require__(/*! ./_baseCreate */ "./node_modules/lodash/_baseCreate.js"),
    baseLodash = __webpack_require__(/*! ./_baseLodash */ "./node_modules/lodash/_baseLodash.js");

/**
 * The base constructor for creating `lodash` wrapper objects.
 *
 * @private
 * @param {*} value The value to wrap.
 * @param {boolean} [chainAll] Enable explicit method chain sequences.
 */
function LodashWrapper(value, chainAll) {
  this.__wrapped__ = value;
  this.__actions__ = [];
  this.__chain__ = !!chainAll;
  this.__index__ = 0;
  this.__values__ = undefined;
}

LodashWrapper.prototype = baseCreate(baseLodash.prototype);
LodashWrapper.prototype.constructor = LodashWrapper;

module.exports = LodashWrapper;


/***/ }),

/***/ "./node_modules/lodash/_Map.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/_Map.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');

module.exports = Map;


/***/ }),

/***/ "./node_modules/lodash/_MapCache.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_MapCache.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var mapCacheClear = __webpack_require__(/*! ./_mapCacheClear */ "./node_modules/lodash/_mapCacheClear.js"),
    mapCacheDelete = __webpack_require__(/*! ./_mapCacheDelete */ "./node_modules/lodash/_mapCacheDelete.js"),
    mapCacheGet = __webpack_require__(/*! ./_mapCacheGet */ "./node_modules/lodash/_mapCacheGet.js"),
    mapCacheHas = __webpack_require__(/*! ./_mapCacheHas */ "./node_modules/lodash/_mapCacheHas.js"),
    mapCacheSet = __webpack_require__(/*! ./_mapCacheSet */ "./node_modules/lodash/_mapCacheSet.js");

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

module.exports = MapCache;


/***/ }),

/***/ "./node_modules/lodash/_Promise.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_Promise.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var Promise = getNative(root, 'Promise');

module.exports = Promise;


/***/ }),

/***/ "./node_modules/lodash/_Set.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/_Set.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var Set = getNative(root, 'Set');

module.exports = Set;


/***/ }),

/***/ "./node_modules/lodash/_SetCache.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_SetCache.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var MapCache = __webpack_require__(/*! ./_MapCache */ "./node_modules/lodash/_MapCache.js"),
    setCacheAdd = __webpack_require__(/*! ./_setCacheAdd */ "./node_modules/lodash/_setCacheAdd.js"),
    setCacheHas = __webpack_require__(/*! ./_setCacheHas */ "./node_modules/lodash/_setCacheHas.js");

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values == null ? 0 : values.length;

  this.__data__ = new MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

module.exports = SetCache;


/***/ }),

/***/ "./node_modules/lodash/_Stack.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/_Stack.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/lodash/_ListCache.js"),
    stackClear = __webpack_require__(/*! ./_stackClear */ "./node_modules/lodash/_stackClear.js"),
    stackDelete = __webpack_require__(/*! ./_stackDelete */ "./node_modules/lodash/_stackDelete.js"),
    stackGet = __webpack_require__(/*! ./_stackGet */ "./node_modules/lodash/_stackGet.js"),
    stackHas = __webpack_require__(/*! ./_stackHas */ "./node_modules/lodash/_stackHas.js"),
    stackSet = __webpack_require__(/*! ./_stackSet */ "./node_modules/lodash/_stackSet.js");

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

module.exports = Stack;


/***/ }),

/***/ "./node_modules/lodash/_Symbol.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/_Symbol.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),

/***/ "./node_modules/lodash/_Uint8Array.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_Uint8Array.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Built-in value references. */
var Uint8Array = root.Uint8Array;

module.exports = Uint8Array;


/***/ }),

/***/ "./node_modules/lodash/_WeakMap.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_WeakMap.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var WeakMap = getNative(root, 'WeakMap');

module.exports = WeakMap;


/***/ }),

/***/ "./node_modules/lodash/_apply.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/_apply.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

module.exports = apply;


/***/ }),

/***/ "./node_modules/lodash/_arrayEach.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_arrayEach.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

module.exports = arrayEach;


/***/ }),

/***/ "./node_modules/lodash/_arrayFilter.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_arrayFilter.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

module.exports = arrayFilter;


/***/ }),

/***/ "./node_modules/lodash/_arrayIncludes.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_arrayIncludes.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIndexOf = __webpack_require__(/*! ./_baseIndexOf */ "./node_modules/lodash/_baseIndexOf.js");

/**
 * A specialized version of `_.includes` for arrays without support for
 * specifying an index to search from.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludes(array, value) {
  var length = array == null ? 0 : array.length;
  return !!length && baseIndexOf(array, value, 0) > -1;
}

module.exports = arrayIncludes;


/***/ }),

/***/ "./node_modules/lodash/_arrayLikeKeys.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_arrayLikeKeys.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseTimes = __webpack_require__(/*! ./_baseTimes */ "./node_modules/lodash/_baseTimes.js"),
    isArguments = __webpack_require__(/*! ./isArguments */ "./node_modules/lodash/isArguments.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isBuffer = __webpack_require__(/*! ./isBuffer */ "./node_modules/lodash/isBuffer.js"),
    isIndex = __webpack_require__(/*! ./_isIndex */ "./node_modules/lodash/_isIndex.js"),
    isTypedArray = __webpack_require__(/*! ./isTypedArray */ "./node_modules/lodash/isTypedArray.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = arrayLikeKeys;


/***/ }),

/***/ "./node_modules/lodash/_arrayMap.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_arrayMap.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

module.exports = arrayMap;


/***/ }),

/***/ "./node_modules/lodash/_arrayPush.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_arrayPush.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

module.exports = arrayPush;


/***/ }),

/***/ "./node_modules/lodash/_arraySome.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_arraySome.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

module.exports = arraySome;


/***/ }),

/***/ "./node_modules/lodash/_assignMergeValue.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash/_assignMergeValue.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseAssignValue = __webpack_require__(/*! ./_baseAssignValue */ "./node_modules/lodash/_baseAssignValue.js"),
    eq = __webpack_require__(/*! ./eq */ "./node_modules/lodash/eq.js");

/**
 * This function is like `assignValue` except that it doesn't assign
 * `undefined` values.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignMergeValue(object, key, value) {
  if ((value !== undefined && !eq(object[key], value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

module.exports = assignMergeValue;


/***/ }),

/***/ "./node_modules/lodash/_assignValue.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_assignValue.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseAssignValue = __webpack_require__(/*! ./_baseAssignValue */ "./node_modules/lodash/_baseAssignValue.js"),
    eq = __webpack_require__(/*! ./eq */ "./node_modules/lodash/eq.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

module.exports = assignValue;


/***/ }),

/***/ "./node_modules/lodash/_assocIndexOf.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_assocIndexOf.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(/*! ./eq */ "./node_modules/lodash/eq.js");

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

module.exports = assocIndexOf;


/***/ }),

/***/ "./node_modules/lodash/_baseAssign.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseAssign.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(/*! ./_copyObject */ "./node_modules/lodash/_copyObject.js"),
    keys = __webpack_require__(/*! ./keys */ "./node_modules/lodash/keys.js");

/**
 * The base implementation of `_.assign` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssign(object, source) {
  return object && copyObject(source, keys(source), object);
}

module.exports = baseAssign;


/***/ }),

/***/ "./node_modules/lodash/_baseAssignIn.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseAssignIn.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(/*! ./_copyObject */ "./node_modules/lodash/_copyObject.js"),
    keysIn = __webpack_require__(/*! ./keysIn */ "./node_modules/lodash/keysIn.js");

/**
 * The base implementation of `_.assignIn` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssignIn(object, source) {
  return object && copyObject(source, keysIn(source), object);
}

module.exports = baseAssignIn;


/***/ }),

/***/ "./node_modules/lodash/_baseAssignValue.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_baseAssignValue.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(/*! ./_defineProperty */ "./node_modules/lodash/_defineProperty.js");

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && defineProperty) {
    defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

module.exports = baseAssignValue;


/***/ }),

/***/ "./node_modules/lodash/_baseClone.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseClone.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(/*! ./_Stack */ "./node_modules/lodash/_Stack.js"),
    arrayEach = __webpack_require__(/*! ./_arrayEach */ "./node_modules/lodash/_arrayEach.js"),
    assignValue = __webpack_require__(/*! ./_assignValue */ "./node_modules/lodash/_assignValue.js"),
    baseAssign = __webpack_require__(/*! ./_baseAssign */ "./node_modules/lodash/_baseAssign.js"),
    baseAssignIn = __webpack_require__(/*! ./_baseAssignIn */ "./node_modules/lodash/_baseAssignIn.js"),
    cloneBuffer = __webpack_require__(/*! ./_cloneBuffer */ "./node_modules/lodash/_cloneBuffer.js"),
    copyArray = __webpack_require__(/*! ./_copyArray */ "./node_modules/lodash/_copyArray.js"),
    copySymbols = __webpack_require__(/*! ./_copySymbols */ "./node_modules/lodash/_copySymbols.js"),
    copySymbolsIn = __webpack_require__(/*! ./_copySymbolsIn */ "./node_modules/lodash/_copySymbolsIn.js"),
    getAllKeys = __webpack_require__(/*! ./_getAllKeys */ "./node_modules/lodash/_getAllKeys.js"),
    getAllKeysIn = __webpack_require__(/*! ./_getAllKeysIn */ "./node_modules/lodash/_getAllKeysIn.js"),
    getTag = __webpack_require__(/*! ./_getTag */ "./node_modules/lodash/_getTag.js"),
    initCloneArray = __webpack_require__(/*! ./_initCloneArray */ "./node_modules/lodash/_initCloneArray.js"),
    initCloneByTag = __webpack_require__(/*! ./_initCloneByTag */ "./node_modules/lodash/_initCloneByTag.js"),
    initCloneObject = __webpack_require__(/*! ./_initCloneObject */ "./node_modules/lodash/_initCloneObject.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isBuffer = __webpack_require__(/*! ./isBuffer */ "./node_modules/lodash/isBuffer.js"),
    isMap = __webpack_require__(/*! ./isMap */ "./node_modules/lodash/isMap.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    isSet = __webpack_require__(/*! ./isSet */ "./node_modules/lodash/isSet.js"),
    keys = __webpack_require__(/*! ./keys */ "./node_modules/lodash/keys.js");

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1,
    CLONE_FLAT_FLAG = 2,
    CLONE_SYMBOLS_FLAG = 4;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values supported by `_.clone`. */
var cloneableTags = {};
cloneableTags[argsTag] = cloneableTags[arrayTag] =
cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
cloneableTags[boolTag] = cloneableTags[dateTag] =
cloneableTags[float32Tag] = cloneableTags[float64Tag] =
cloneableTags[int8Tag] = cloneableTags[int16Tag] =
cloneableTags[int32Tag] = cloneableTags[mapTag] =
cloneableTags[numberTag] = cloneableTags[objectTag] =
cloneableTags[regexpTag] = cloneableTags[setTag] =
cloneableTags[stringTag] = cloneableTags[symbolTag] =
cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag] = cloneableTags[funcTag] =
cloneableTags[weakMapTag] = false;

/**
 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
 * traversed objects.
 *
 * @private
 * @param {*} value The value to clone.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Deep clone
 *  2 - Flatten inherited properties
 *  4 - Clone symbols
 * @param {Function} [customizer] The function to customize cloning.
 * @param {string} [key] The key of `value`.
 * @param {Object} [object] The parent object of `value`.
 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
 * @returns {*} Returns the cloned value.
 */
function baseClone(value, bitmask, customizer, key, object, stack) {
  var result,
      isDeep = bitmask & CLONE_DEEP_FLAG,
      isFlat = bitmask & CLONE_FLAT_FLAG,
      isFull = bitmask & CLONE_SYMBOLS_FLAG;

  if (customizer) {
    result = object ? customizer(value, key, object, stack) : customizer(value);
  }
  if (result !== undefined) {
    return result;
  }
  if (!isObject(value)) {
    return value;
  }
  var isArr = isArray(value);
  if (isArr) {
    result = initCloneArray(value);
    if (!isDeep) {
      return copyArray(value, result);
    }
  } else {
    var tag = getTag(value),
        isFunc = tag == funcTag || tag == genTag;

    if (isBuffer(value)) {
      return cloneBuffer(value, isDeep);
    }
    if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
      result = (isFlat || isFunc) ? {} : initCloneObject(value);
      if (!isDeep) {
        return isFlat
          ? copySymbolsIn(value, baseAssignIn(result, value))
          : copySymbols(value, baseAssign(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }
      result = initCloneByTag(value, tag, isDeep);
    }
  }
  // Check for circular references and return its corresponding clone.
  stack || (stack = new Stack);
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);

  if (isSet(value)) {
    value.forEach(function(subValue) {
      result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
    });
  } else if (isMap(value)) {
    value.forEach(function(subValue, key) {
      result.set(key, baseClone(subValue, bitmask, customizer, key, value, stack));
    });
  }

  var keysFunc = isFull
    ? (isFlat ? getAllKeysIn : getAllKeys)
    : (isFlat ? keysIn : keys);

  var props = isArr ? undefined : keysFunc(value);
  arrayEach(props || value, function(subValue, key) {
    if (props) {
      key = subValue;
      subValue = value[key];
    }
    // Recursively populate clone (susceptible to call stack limits).
    assignValue(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
  });
  return result;
}

module.exports = baseClone;


/***/ }),

/***/ "./node_modules/lodash/_baseCreate.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseCreate.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js");

/** Built-in value references. */
var objectCreate = Object.create;

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */
var baseCreate = (function() {
  function object() {}
  return function(proto) {
    if (!isObject(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object;
    object.prototype = undefined;
    return result;
  };
}());

module.exports = baseCreate;


/***/ }),

/***/ "./node_modules/lodash/_baseFindIndex.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_baseFindIndex.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseFindIndex(array, predicate, fromIndex, fromRight) {
  var length = array.length,
      index = fromIndex + (fromRight ? 1 : -1);

  while ((fromRight ? index-- : ++index < length)) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}

module.exports = baseFindIndex;


/***/ }),

/***/ "./node_modules/lodash/_baseFlatten.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_baseFlatten.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__(/*! ./_arrayPush */ "./node_modules/lodash/_arrayPush.js"),
    isFlattenable = __webpack_require__(/*! ./_isFlattenable */ "./node_modules/lodash/_isFlattenable.js");

/**
 * The base implementation of `_.flatten` with support for restricting flattening.
 *
 * @private
 * @param {Array} array The array to flatten.
 * @param {number} depth The maximum recursion depth.
 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
 * @param {Array} [result=[]] The initial result value.
 * @returns {Array} Returns the new flattened array.
 */
function baseFlatten(array, depth, predicate, isStrict, result) {
  var index = -1,
      length = array.length;

  predicate || (predicate = isFlattenable);
  result || (result = []);

  while (++index < length) {
    var value = array[index];
    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        // Recursively flatten arrays (susceptible to call stack limits).
        baseFlatten(value, depth - 1, predicate, isStrict, result);
      } else {
        arrayPush(result, value);
      }
    } else if (!isStrict) {
      result[result.length] = value;
    }
  }
  return result;
}

module.exports = baseFlatten;


/***/ }),

/***/ "./node_modules/lodash/_baseFor.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_baseFor.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var createBaseFor = __webpack_require__(/*! ./_createBaseFor */ "./node_modules/lodash/_createBaseFor.js");

/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = createBaseFor();

module.exports = baseFor;


/***/ }),

/***/ "./node_modules/lodash/_baseGet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_baseGet.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__(/*! ./_castPath */ "./node_modules/lodash/_castPath.js"),
    toKey = __webpack_require__(/*! ./_toKey */ "./node_modules/lodash/_toKey.js");

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = castPath(path, object);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

module.exports = baseGet;


/***/ }),

/***/ "./node_modules/lodash/_baseGetAllKeys.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_baseGetAllKeys.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__(/*! ./_arrayPush */ "./node_modules/lodash/_arrayPush.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js");

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

module.exports = baseGetAllKeys;


/***/ }),

/***/ "./node_modules/lodash/_baseGetTag.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseGetTag.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js"),
    getRawTag = __webpack_require__(/*! ./_getRawTag */ "./node_modules/lodash/_getRawTag.js"),
    objectToString = __webpack_require__(/*! ./_objectToString */ "./node_modules/lodash/_objectToString.js");

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),

/***/ "./node_modules/lodash/_baseHas.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_baseHas.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.has` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */
function baseHas(object, key) {
  return object != null && hasOwnProperty.call(object, key);
}

module.exports = baseHas;


/***/ }),

/***/ "./node_modules/lodash/_baseHasIn.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseHasIn.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.hasIn` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */
function baseHasIn(object, key) {
  return object != null && key in Object(object);
}

module.exports = baseHasIn;


/***/ }),

/***/ "./node_modules/lodash/_baseInRange.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_baseInRange.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * The base implementation of `_.inRange` which doesn't coerce arguments.
 *
 * @private
 * @param {number} number The number to check.
 * @param {number} start The start of the range.
 * @param {number} end The end of the range.
 * @returns {boolean} Returns `true` if `number` is in the range, else `false`.
 */
function baseInRange(number, start, end) {
  return number >= nativeMin(start, end) && number < nativeMax(start, end);
}

module.exports = baseInRange;


/***/ }),

/***/ "./node_modules/lodash/_baseIndexOf.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_baseIndexOf.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseFindIndex = __webpack_require__(/*! ./_baseFindIndex */ "./node_modules/lodash/_baseFindIndex.js"),
    baseIsNaN = __webpack_require__(/*! ./_baseIsNaN */ "./node_modules/lodash/_baseIsNaN.js"),
    strictIndexOf = __webpack_require__(/*! ./_strictIndexOf */ "./node_modules/lodash/_strictIndexOf.js");

/**
 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseIndexOf(array, value, fromIndex) {
  return value === value
    ? strictIndexOf(array, value, fromIndex)
    : baseFindIndex(array, baseIsNaN, fromIndex);
}

module.exports = baseIndexOf;


/***/ }),

/***/ "./node_modules/lodash/_baseIsArguments.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_baseIsArguments.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

module.exports = baseIsArguments;


/***/ }),

/***/ "./node_modules/lodash/_baseIsEqual.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_baseIsEqual.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsEqualDeep = __webpack_require__(/*! ./_baseIsEqualDeep */ "./node_modules/lodash/_baseIsEqualDeep.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}

module.exports = baseIsEqual;


/***/ }),

/***/ "./node_modules/lodash/_baseIsEqualDeep.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_baseIsEqualDeep.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(/*! ./_Stack */ "./node_modules/lodash/_Stack.js"),
    equalArrays = __webpack_require__(/*! ./_equalArrays */ "./node_modules/lodash/_equalArrays.js"),
    equalByTag = __webpack_require__(/*! ./_equalByTag */ "./node_modules/lodash/_equalByTag.js"),
    equalObjects = __webpack_require__(/*! ./_equalObjects */ "./node_modules/lodash/_equalObjects.js"),
    getTag = __webpack_require__(/*! ./_getTag */ "./node_modules/lodash/_getTag.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isBuffer = __webpack_require__(/*! ./isBuffer */ "./node_modules/lodash/isBuffer.js"),
    isTypedArray = __webpack_require__(/*! ./isTypedArray */ "./node_modules/lodash/isTypedArray.js");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    objectTag = '[object Object]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray(object),
      othIsArr = isArray(other),
      objTag = objIsArr ? arrayTag : getTag(object),
      othTag = othIsArr ? arrayTag : getTag(other);

  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;

  var objIsObj = objTag == objectTag,
      othIsObj = othTag == objectTag,
      isSameTag = objTag == othTag;

  if (isSameTag && isBuffer(object)) {
    if (!isBuffer(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack);
    return (objIsArr || isTypedArray(object))
      ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
      : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new Stack);
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack);
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}

module.exports = baseIsEqualDeep;


/***/ }),

/***/ "./node_modules/lodash/_baseIsMap.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseIsMap.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getTag = __webpack_require__(/*! ./_getTag */ "./node_modules/lodash/_getTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var mapTag = '[object Map]';

/**
 * The base implementation of `_.isMap` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 */
function baseIsMap(value) {
  return isObjectLike(value) && getTag(value) == mapTag;
}

module.exports = baseIsMap;


/***/ }),

/***/ "./node_modules/lodash/_baseIsMatch.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_baseIsMatch.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(/*! ./_Stack */ "./node_modules/lodash/_Stack.js"),
    baseIsEqual = __webpack_require__(/*! ./_baseIsEqual */ "./node_modules/lodash/_baseIsEqual.js");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.isMatch` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to inspect.
 * @param {Object} source The object of property values to match.
 * @param {Array} matchData The property names, values, and compare flags to match.
 * @param {Function} [customizer] The function to customize comparisons.
 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
 */
function baseIsMatch(object, source, matchData, customizer) {
  var index = matchData.length,
      length = index,
      noCustomizer = !customizer;

  if (object == null) {
    return !length;
  }
  object = Object(object);
  while (index--) {
    var data = matchData[index];
    if ((noCustomizer && data[2])
          ? data[1] !== object[data[0]]
          : !(data[0] in object)
        ) {
      return false;
    }
  }
  while (++index < length) {
    data = matchData[index];
    var key = data[0],
        objValue = object[key],
        srcValue = data[1];

    if (noCustomizer && data[2]) {
      if (objValue === undefined && !(key in object)) {
        return false;
      }
    } else {
      var stack = new Stack;
      if (customizer) {
        var result = customizer(objValue, srcValue, key, object, source, stack);
      }
      if (!(result === undefined
            ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack)
            : result
          )) {
        return false;
      }
    }
  }
  return true;
}

module.exports = baseIsMatch;


/***/ }),

/***/ "./node_modules/lodash/_baseIsNaN.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseIsNaN.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.isNaN` without support for number objects.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
 */
function baseIsNaN(value) {
  return value !== value;
}

module.exports = baseIsNaN;


/***/ }),

/***/ "./node_modules/lodash/_baseIsNative.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseIsNative.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(/*! ./isFunction */ "./node_modules/lodash/isFunction.js"),
    isMasked = __webpack_require__(/*! ./_isMasked */ "./node_modules/lodash/_isMasked.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    toSource = __webpack_require__(/*! ./_toSource */ "./node_modules/lodash/_toSource.js");

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

module.exports = baseIsNative;


/***/ }),

/***/ "./node_modules/lodash/_baseIsSet.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseIsSet.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getTag = __webpack_require__(/*! ./_getTag */ "./node_modules/lodash/_getTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var setTag = '[object Set]';

/**
 * The base implementation of `_.isSet` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 */
function baseIsSet(value) {
  return isObjectLike(value) && getTag(value) == setTag;
}

module.exports = baseIsSet;


/***/ }),

/***/ "./node_modules/lodash/_baseIsTypedArray.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash/_baseIsTypedArray.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isLength = __webpack_require__(/*! ./isLength */ "./node_modules/lodash/isLength.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

module.exports = baseIsTypedArray;


/***/ }),

/***/ "./node_modules/lodash/_baseIteratee.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseIteratee.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseMatches = __webpack_require__(/*! ./_baseMatches */ "./node_modules/lodash/_baseMatches.js"),
    baseMatchesProperty = __webpack_require__(/*! ./_baseMatchesProperty */ "./node_modules/lodash/_baseMatchesProperty.js"),
    identity = __webpack_require__(/*! ./identity */ "./node_modules/lodash/identity.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    property = __webpack_require__(/*! ./property */ "./node_modules/lodash/property.js");

/**
 * The base implementation of `_.iteratee`.
 *
 * @private
 * @param {*} [value=_.identity] The value to convert to an iteratee.
 * @returns {Function} Returns the iteratee.
 */
function baseIteratee(value) {
  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
  if (typeof value == 'function') {
    return value;
  }
  if (value == null) {
    return identity;
  }
  if (typeof value == 'object') {
    return isArray(value)
      ? baseMatchesProperty(value[0], value[1])
      : baseMatches(value);
  }
  return property(value);
}

module.exports = baseIteratee;


/***/ }),

/***/ "./node_modules/lodash/_baseKeys.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_baseKeys.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isPrototype = __webpack_require__(/*! ./_isPrototype */ "./node_modules/lodash/_isPrototype.js"),
    nativeKeys = __webpack_require__(/*! ./_nativeKeys */ "./node_modules/lodash/_nativeKeys.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeys;


/***/ }),

/***/ "./node_modules/lodash/_baseKeysIn.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseKeysIn.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    isPrototype = __webpack_require__(/*! ./_isPrototype */ "./node_modules/lodash/_isPrototype.js"),
    nativeKeysIn = __webpack_require__(/*! ./_nativeKeysIn */ "./node_modules/lodash/_nativeKeysIn.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn(object) {
  if (!isObject(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeysIn;


/***/ }),

/***/ "./node_modules/lodash/_baseLodash.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseLodash.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * The function whose prototype chain sequence wrappers inherit from.
 *
 * @private
 */
function baseLodash() {
  // No operation performed.
}

module.exports = baseLodash;


/***/ }),

/***/ "./node_modules/lodash/_baseMatches.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_baseMatches.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsMatch = __webpack_require__(/*! ./_baseIsMatch */ "./node_modules/lodash/_baseIsMatch.js"),
    getMatchData = __webpack_require__(/*! ./_getMatchData */ "./node_modules/lodash/_getMatchData.js"),
    matchesStrictComparable = __webpack_require__(/*! ./_matchesStrictComparable */ "./node_modules/lodash/_matchesStrictComparable.js");

/**
 * The base implementation of `_.matches` which doesn't clone `source`.
 *
 * @private
 * @param {Object} source The object of property values to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatches(source) {
  var matchData = getMatchData(source);
  if (matchData.length == 1 && matchData[0][2]) {
    return matchesStrictComparable(matchData[0][0], matchData[0][1]);
  }
  return function(object) {
    return object === source || baseIsMatch(object, source, matchData);
  };
}

module.exports = baseMatches;


/***/ }),

/***/ "./node_modules/lodash/_baseMatchesProperty.js":
/*!*****************************************************!*\
  !*** ./node_modules/lodash/_baseMatchesProperty.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsEqual = __webpack_require__(/*! ./_baseIsEqual */ "./node_modules/lodash/_baseIsEqual.js"),
    get = __webpack_require__(/*! ./get */ "./node_modules/lodash/get.js"),
    hasIn = __webpack_require__(/*! ./hasIn */ "./node_modules/lodash/hasIn.js"),
    isKey = __webpack_require__(/*! ./_isKey */ "./node_modules/lodash/_isKey.js"),
    isStrictComparable = __webpack_require__(/*! ./_isStrictComparable */ "./node_modules/lodash/_isStrictComparable.js"),
    matchesStrictComparable = __webpack_require__(/*! ./_matchesStrictComparable */ "./node_modules/lodash/_matchesStrictComparable.js"),
    toKey = __webpack_require__(/*! ./_toKey */ "./node_modules/lodash/_toKey.js");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
 *
 * @private
 * @param {string} path The path of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatchesProperty(path, srcValue) {
  if (isKey(path) && isStrictComparable(srcValue)) {
    return matchesStrictComparable(toKey(path), srcValue);
  }
  return function(object) {
    var objValue = get(object, path);
    return (objValue === undefined && objValue === srcValue)
      ? hasIn(object, path)
      : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
  };
}

module.exports = baseMatchesProperty;


/***/ }),

/***/ "./node_modules/lodash/_baseMerge.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseMerge.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(/*! ./_Stack */ "./node_modules/lodash/_Stack.js"),
    assignMergeValue = __webpack_require__(/*! ./_assignMergeValue */ "./node_modules/lodash/_assignMergeValue.js"),
    baseFor = __webpack_require__(/*! ./_baseFor */ "./node_modules/lodash/_baseFor.js"),
    baseMergeDeep = __webpack_require__(/*! ./_baseMergeDeep */ "./node_modules/lodash/_baseMergeDeep.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    keysIn = __webpack_require__(/*! ./keysIn */ "./node_modules/lodash/keysIn.js"),
    safeGet = __webpack_require__(/*! ./_safeGet */ "./node_modules/lodash/_safeGet.js");

/**
 * The base implementation of `_.merge` without support for multiple sources.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} [customizer] The function to customize merged values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */
function baseMerge(object, source, srcIndex, customizer, stack) {
  if (object === source) {
    return;
  }
  baseFor(source, function(srcValue, key) {
    stack || (stack = new Stack);
    if (isObject(srcValue)) {
      baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
    }
    else {
      var newValue = customizer
        ? customizer(safeGet(object, key), srcValue, (key + ''), object, source, stack)
        : undefined;

      if (newValue === undefined) {
        newValue = srcValue;
      }
      assignMergeValue(object, key, newValue);
    }
  }, keysIn);
}

module.exports = baseMerge;


/***/ }),

/***/ "./node_modules/lodash/_baseMergeDeep.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_baseMergeDeep.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assignMergeValue = __webpack_require__(/*! ./_assignMergeValue */ "./node_modules/lodash/_assignMergeValue.js"),
    cloneBuffer = __webpack_require__(/*! ./_cloneBuffer */ "./node_modules/lodash/_cloneBuffer.js"),
    cloneTypedArray = __webpack_require__(/*! ./_cloneTypedArray */ "./node_modules/lodash/_cloneTypedArray.js"),
    copyArray = __webpack_require__(/*! ./_copyArray */ "./node_modules/lodash/_copyArray.js"),
    initCloneObject = __webpack_require__(/*! ./_initCloneObject */ "./node_modules/lodash/_initCloneObject.js"),
    isArguments = __webpack_require__(/*! ./isArguments */ "./node_modules/lodash/isArguments.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isArrayLikeObject = __webpack_require__(/*! ./isArrayLikeObject */ "./node_modules/lodash/isArrayLikeObject.js"),
    isBuffer = __webpack_require__(/*! ./isBuffer */ "./node_modules/lodash/isBuffer.js"),
    isFunction = __webpack_require__(/*! ./isFunction */ "./node_modules/lodash/isFunction.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    isPlainObject = __webpack_require__(/*! ./isPlainObject */ "./node_modules/lodash/isPlainObject.js"),
    isTypedArray = __webpack_require__(/*! ./isTypedArray */ "./node_modules/lodash/isTypedArray.js"),
    safeGet = __webpack_require__(/*! ./_safeGet */ "./node_modules/lodash/_safeGet.js"),
    toPlainObject = __webpack_require__(/*! ./toPlainObject */ "./node_modules/lodash/toPlainObject.js");

/**
 * A specialized version of `baseMerge` for arrays and objects which performs
 * deep merges and tracks traversed objects enabling objects with circular
 * references to be merged.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {string} key The key of the value to merge.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} mergeFunc The function to merge values.
 * @param {Function} [customizer] The function to customize assigned values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */
function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
  var objValue = safeGet(object, key),
      srcValue = safeGet(source, key),
      stacked = stack.get(srcValue);

  if (stacked) {
    assignMergeValue(object, key, stacked);
    return;
  }
  var newValue = customizer
    ? customizer(objValue, srcValue, (key + ''), object, source, stack)
    : undefined;

  var isCommon = newValue === undefined;

  if (isCommon) {
    var isArr = isArray(srcValue),
        isBuff = !isArr && isBuffer(srcValue),
        isTyped = !isArr && !isBuff && isTypedArray(srcValue);

    newValue = srcValue;
    if (isArr || isBuff || isTyped) {
      if (isArray(objValue)) {
        newValue = objValue;
      }
      else if (isArrayLikeObject(objValue)) {
        newValue = copyArray(objValue);
      }
      else if (isBuff) {
        isCommon = false;
        newValue = cloneBuffer(srcValue, true);
      }
      else if (isTyped) {
        isCommon = false;
        newValue = cloneTypedArray(srcValue, true);
      }
      else {
        newValue = [];
      }
    }
    else if (isPlainObject(srcValue) || isArguments(srcValue)) {
      newValue = objValue;
      if (isArguments(objValue)) {
        newValue = toPlainObject(objValue);
      }
      else if (!isObject(objValue) || isFunction(objValue)) {
        newValue = initCloneObject(srcValue);
      }
    }
    else {
      isCommon = false;
    }
  }
  if (isCommon) {
    // Recursively merge objects and arrays (susceptible to call stack limits).
    stack.set(srcValue, newValue);
    mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
    stack['delete'](srcValue);
  }
  assignMergeValue(object, key, newValue);
}

module.exports = baseMergeDeep;


/***/ }),

/***/ "./node_modules/lodash/_basePickBy.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_basePickBy.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__(/*! ./_baseGet */ "./node_modules/lodash/_baseGet.js"),
    baseSet = __webpack_require__(/*! ./_baseSet */ "./node_modules/lodash/_baseSet.js"),
    castPath = __webpack_require__(/*! ./_castPath */ "./node_modules/lodash/_castPath.js");

/**
 * The base implementation of  `_.pickBy` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The source object.
 * @param {string[]} paths The property paths to pick.
 * @param {Function} predicate The function invoked per property.
 * @returns {Object} Returns the new object.
 */
function basePickBy(object, paths, predicate) {
  var index = -1,
      length = paths.length,
      result = {};

  while (++index < length) {
    var path = paths[index],
        value = baseGet(object, path);

    if (predicate(value, path)) {
      baseSet(result, castPath(path, object), value);
    }
  }
  return result;
}

module.exports = basePickBy;


/***/ }),

/***/ "./node_modules/lodash/_baseProperty.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseProperty.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function baseProperty(key) {
  return function(object) {
    return object == null ? undefined : object[key];
  };
}

module.exports = baseProperty;


/***/ }),

/***/ "./node_modules/lodash/_basePropertyDeep.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash/_basePropertyDeep.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__(/*! ./_baseGet */ "./node_modules/lodash/_baseGet.js");

/**
 * A specialized version of `baseProperty` which supports deep paths.
 *
 * @private
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyDeep(path) {
  return function(object) {
    return baseGet(object, path);
  };
}

module.exports = basePropertyDeep;


/***/ }),

/***/ "./node_modules/lodash/_baseRest.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_baseRest.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var identity = __webpack_require__(/*! ./identity */ "./node_modules/lodash/identity.js"),
    overRest = __webpack_require__(/*! ./_overRest */ "./node_modules/lodash/_overRest.js"),
    setToString = __webpack_require__(/*! ./_setToString */ "./node_modules/lodash/_setToString.js");

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  return setToString(overRest(func, start, identity), func + '');
}

module.exports = baseRest;


/***/ }),

/***/ "./node_modules/lodash/_baseSet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_baseSet.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assignValue = __webpack_require__(/*! ./_assignValue */ "./node_modules/lodash/_assignValue.js"),
    castPath = __webpack_require__(/*! ./_castPath */ "./node_modules/lodash/_castPath.js"),
    isIndex = __webpack_require__(/*! ./_isIndex */ "./node_modules/lodash/_isIndex.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    toKey = __webpack_require__(/*! ./_toKey */ "./node_modules/lodash/_toKey.js");

/**
 * The base implementation of `_.set`.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to set.
 * @param {*} value The value to set.
 * @param {Function} [customizer] The function to customize path creation.
 * @returns {Object} Returns `object`.
 */
function baseSet(object, path, value, customizer) {
  if (!isObject(object)) {
    return object;
  }
  path = castPath(path, object);

  var index = -1,
      length = path.length,
      lastIndex = length - 1,
      nested = object;

  while (nested != null && ++index < length) {
    var key = toKey(path[index]),
        newValue = value;

    if (index != lastIndex) {
      var objValue = nested[key];
      newValue = customizer ? customizer(objValue, key, nested) : undefined;
      if (newValue === undefined) {
        newValue = isObject(objValue)
          ? objValue
          : (isIndex(path[index + 1]) ? [] : {});
      }
    }
    assignValue(nested, key, newValue);
    nested = nested[key];
  }
  return object;
}

module.exports = baseSet;


/***/ }),

/***/ "./node_modules/lodash/_baseSetData.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_baseSetData.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var identity = __webpack_require__(/*! ./identity */ "./node_modules/lodash/identity.js"),
    metaMap = __webpack_require__(/*! ./_metaMap */ "./node_modules/lodash/_metaMap.js");

/**
 * The base implementation of `setData` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to associate metadata with.
 * @param {*} data The metadata.
 * @returns {Function} Returns `func`.
 */
var baseSetData = !metaMap ? identity : function(func, data) {
  metaMap.set(func, data);
  return func;
};

module.exports = baseSetData;


/***/ }),

/***/ "./node_modules/lodash/_baseSetToString.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_baseSetToString.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var constant = __webpack_require__(/*! ./constant */ "./node_modules/lodash/constant.js"),
    defineProperty = __webpack_require__(/*! ./_defineProperty */ "./node_modules/lodash/_defineProperty.js"),
    identity = __webpack_require__(/*! ./identity */ "./node_modules/lodash/identity.js");

/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var baseSetToString = !defineProperty ? identity : function(func, string) {
  return defineProperty(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': constant(string),
    'writable': true
  });
};

module.exports = baseSetToString;


/***/ }),

/***/ "./node_modules/lodash/_baseSlice.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseSlice.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.slice` without an iteratee call guard.
 *
 * @private
 * @param {Array} array The array to slice.
 * @param {number} [start=0] The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the slice of `array`.
 */
function baseSlice(array, start, end) {
  var index = -1,
      length = array.length;

  if (start < 0) {
    start = -start > length ? 0 : (length + start);
  }
  end = end > length ? length : end;
  if (end < 0) {
    end += length;
  }
  length = start > end ? 0 : ((end - start) >>> 0);
  start >>>= 0;

  var result = Array(length);
  while (++index < length) {
    result[index] = array[index + start];
  }
  return result;
}

module.exports = baseSlice;


/***/ }),

/***/ "./node_modules/lodash/_baseTimes.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseTimes.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

module.exports = baseTimes;


/***/ }),

/***/ "./node_modules/lodash/_baseToString.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseToString.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js"),
    arrayMap = __webpack_require__(/*! ./_arrayMap */ "./node_modules/lodash/_arrayMap.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isSymbol = __webpack_require__(/*! ./isSymbol */ "./node_modules/lodash/isSymbol.js");

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString) + '';
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = baseToString;


/***/ }),

/***/ "./node_modules/lodash/_baseUnary.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseUnary.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

module.exports = baseUnary;


/***/ }),

/***/ "./node_modules/lodash/_baseUnset.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseUnset.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__(/*! ./_castPath */ "./node_modules/lodash/_castPath.js"),
    last = __webpack_require__(/*! ./last */ "./node_modules/lodash/last.js"),
    parent = __webpack_require__(/*! ./_parent */ "./node_modules/lodash/_parent.js"),
    toKey = __webpack_require__(/*! ./_toKey */ "./node_modules/lodash/_toKey.js");

/**
 * The base implementation of `_.unset`.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {Array|string} path The property path to unset.
 * @returns {boolean} Returns `true` if the property is deleted, else `false`.
 */
function baseUnset(object, path) {
  path = castPath(path, object);
  object = parent(object, path);
  return object == null || delete object[toKey(last(path))];
}

module.exports = baseUnset;


/***/ }),

/***/ "./node_modules/lodash/_cacheHas.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_cacheHas.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

module.exports = cacheHas;


/***/ }),

/***/ "./node_modules/lodash/_castFunction.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_castFunction.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var identity = __webpack_require__(/*! ./identity */ "./node_modules/lodash/identity.js");

/**
 * Casts `value` to `identity` if it's not a function.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {Function} Returns cast function.
 */
function castFunction(value) {
  return typeof value == 'function' ? value : identity;
}

module.exports = castFunction;


/***/ }),

/***/ "./node_modules/lodash/_castPath.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_castPath.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isKey = __webpack_require__(/*! ./_isKey */ "./node_modules/lodash/_isKey.js"),
    stringToPath = __webpack_require__(/*! ./_stringToPath */ "./node_modules/lodash/_stringToPath.js"),
    toString = __webpack_require__(/*! ./toString */ "./node_modules/lodash/toString.js");

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value, object) {
  if (isArray(value)) {
    return value;
  }
  return isKey(value, object) ? [value] : stringToPath(toString(value));
}

module.exports = castPath;


/***/ }),

/***/ "./node_modules/lodash/_cloneArrayBuffer.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash/_cloneArrayBuffer.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Uint8Array = __webpack_require__(/*! ./_Uint8Array */ "./node_modules/lodash/_Uint8Array.js");

/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
  return result;
}

module.exports = cloneArrayBuffer;


/***/ }),

/***/ "./node_modules/lodash/_cloneBuffer.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_cloneBuffer.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined,
    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;

/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var length = buffer.length,
      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

  buffer.copy(result);
  return result;
}

module.exports = cloneBuffer;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/lodash/_cloneDataView.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_cloneDataView.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var cloneArrayBuffer = __webpack_require__(/*! ./_cloneArrayBuffer */ "./node_modules/lodash/_cloneArrayBuffer.js");

/**
 * Creates a clone of `dataView`.
 *
 * @private
 * @param {Object} dataView The data view to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned data view.
 */
function cloneDataView(dataView, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}

module.exports = cloneDataView;


/***/ }),

/***/ "./node_modules/lodash/_cloneRegExp.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_cloneRegExp.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used to match `RegExp` flags from their coerced string values. */
var reFlags = /\w*$/;

/**
 * Creates a clone of `regexp`.
 *
 * @private
 * @param {Object} regexp The regexp to clone.
 * @returns {Object} Returns the cloned regexp.
 */
function cloneRegExp(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}

module.exports = cloneRegExp;


/***/ }),

/***/ "./node_modules/lodash/_cloneSymbol.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_cloneSymbol.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js");

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * Creates a clone of the `symbol` object.
 *
 * @private
 * @param {Object} symbol The symbol object to clone.
 * @returns {Object} Returns the cloned symbol object.
 */
function cloneSymbol(symbol) {
  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
}

module.exports = cloneSymbol;


/***/ }),

/***/ "./node_modules/lodash/_cloneTypedArray.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_cloneTypedArray.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var cloneArrayBuffer = __webpack_require__(/*! ./_cloneArrayBuffer */ "./node_modules/lodash/_cloneArrayBuffer.js");

/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

module.exports = cloneTypedArray;


/***/ }),

/***/ "./node_modules/lodash/_composeArgs.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_composeArgs.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * Creates an array that is the composition of partially applied arguments,
 * placeholders, and provided arguments into a single array of arguments.
 *
 * @private
 * @param {Array} args The provided arguments.
 * @param {Array} partials The arguments to prepend to those provided.
 * @param {Array} holders The `partials` placeholder indexes.
 * @params {boolean} [isCurried] Specify composing for a curried function.
 * @returns {Array} Returns the new array of composed arguments.
 */
function composeArgs(args, partials, holders, isCurried) {
  var argsIndex = -1,
      argsLength = args.length,
      holdersLength = holders.length,
      leftIndex = -1,
      leftLength = partials.length,
      rangeLength = nativeMax(argsLength - holdersLength, 0),
      result = Array(leftLength + rangeLength),
      isUncurried = !isCurried;

  while (++leftIndex < leftLength) {
    result[leftIndex] = partials[leftIndex];
  }
  while (++argsIndex < holdersLength) {
    if (isUncurried || argsIndex < argsLength) {
      result[holders[argsIndex]] = args[argsIndex];
    }
  }
  while (rangeLength--) {
    result[leftIndex++] = args[argsIndex++];
  }
  return result;
}

module.exports = composeArgs;


/***/ }),

/***/ "./node_modules/lodash/_composeArgsRight.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash/_composeArgsRight.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * This function is like `composeArgs` except that the arguments composition
 * is tailored for `_.partialRight`.
 *
 * @private
 * @param {Array} args The provided arguments.
 * @param {Array} partials The arguments to append to those provided.
 * @param {Array} holders The `partials` placeholder indexes.
 * @params {boolean} [isCurried] Specify composing for a curried function.
 * @returns {Array} Returns the new array of composed arguments.
 */
function composeArgsRight(args, partials, holders, isCurried) {
  var argsIndex = -1,
      argsLength = args.length,
      holdersIndex = -1,
      holdersLength = holders.length,
      rightIndex = -1,
      rightLength = partials.length,
      rangeLength = nativeMax(argsLength - holdersLength, 0),
      result = Array(rangeLength + rightLength),
      isUncurried = !isCurried;

  while (++argsIndex < rangeLength) {
    result[argsIndex] = args[argsIndex];
  }
  var offset = argsIndex;
  while (++rightIndex < rightLength) {
    result[offset + rightIndex] = partials[rightIndex];
  }
  while (++holdersIndex < holdersLength) {
    if (isUncurried || argsIndex < argsLength) {
      result[offset + holders[holdersIndex]] = args[argsIndex++];
    }
  }
  return result;
}

module.exports = composeArgsRight;


/***/ }),

/***/ "./node_modules/lodash/_copyArray.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_copyArray.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

module.exports = copyArray;


/***/ }),

/***/ "./node_modules/lodash/_copyObject.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_copyObject.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assignValue = __webpack_require__(/*! ./_assignValue */ "./node_modules/lodash/_assignValue.js"),
    baseAssignValue = __webpack_require__(/*! ./_baseAssignValue */ "./node_modules/lodash/_baseAssignValue.js");

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue(object, key, newValue);
    } else {
      assignValue(object, key, newValue);
    }
  }
  return object;
}

module.exports = copyObject;


/***/ }),

/***/ "./node_modules/lodash/_copySymbols.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_copySymbols.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(/*! ./_copyObject */ "./node_modules/lodash/_copyObject.js"),
    getSymbols = __webpack_require__(/*! ./_getSymbols */ "./node_modules/lodash/_getSymbols.js");

/**
 * Copies own symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbols(source, object) {
  return copyObject(source, getSymbols(source), object);
}

module.exports = copySymbols;


/***/ }),

/***/ "./node_modules/lodash/_copySymbolsIn.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_copySymbolsIn.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(/*! ./_copyObject */ "./node_modules/lodash/_copyObject.js"),
    getSymbolsIn = __webpack_require__(/*! ./_getSymbolsIn */ "./node_modules/lodash/_getSymbolsIn.js");

/**
 * Copies own and inherited symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbolsIn(source, object) {
  return copyObject(source, getSymbolsIn(source), object);
}

module.exports = copySymbolsIn;


/***/ }),

/***/ "./node_modules/lodash/_coreJsData.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_coreJsData.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

module.exports = coreJsData;


/***/ }),

/***/ "./node_modules/lodash/_countHolders.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_countHolders.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Gets the number of `placeholder` occurrences in `array`.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} placeholder The placeholder to search for.
 * @returns {number} Returns the placeholder count.
 */
function countHolders(array, placeholder) {
  var length = array.length,
      result = 0;

  while (length--) {
    if (array[length] === placeholder) {
      ++result;
    }
  }
  return result;
}

module.exports = countHolders;


/***/ }),

/***/ "./node_modules/lodash/_createAssigner.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_createAssigner.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseRest = __webpack_require__(/*! ./_baseRest */ "./node_modules/lodash/_baseRest.js"),
    isIterateeCall = __webpack_require__(/*! ./_isIterateeCall */ "./node_modules/lodash/_isIterateeCall.js");

/**
 * Creates a function like `_.assign`.
 *
 * @private
 * @param {Function} assigner The function to assign values.
 * @returns {Function} Returns the new assigner function.
 */
function createAssigner(assigner) {
  return baseRest(function(object, sources) {
    var index = -1,
        length = sources.length,
        customizer = length > 1 ? sources[length - 1] : undefined,
        guard = length > 2 ? sources[2] : undefined;

    customizer = (assigner.length > 3 && typeof customizer == 'function')
      ? (length--, customizer)
      : undefined;

    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
      customizer = length < 3 ? undefined : customizer;
      length = 1;
    }
    object = Object(object);
    while (++index < length) {
      var source = sources[index];
      if (source) {
        assigner(object, source, index, customizer);
      }
    }
    return object;
  });
}

module.exports = createAssigner;


/***/ }),

/***/ "./node_modules/lodash/_createBaseFor.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_createBaseFor.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

module.exports = createBaseFor;


/***/ }),

/***/ "./node_modules/lodash/_createBind.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_createBind.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var createCtor = __webpack_require__(/*! ./_createCtor */ "./node_modules/lodash/_createCtor.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Used to compose bitmasks for function metadata. */
var WRAP_BIND_FLAG = 1;

/**
 * Creates a function that wraps `func` to invoke it with the optional `this`
 * binding of `thisArg`.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @param {*} [thisArg] The `this` binding of `func`.
 * @returns {Function} Returns the new wrapped function.
 */
function createBind(func, bitmask, thisArg) {
  var isBind = bitmask & WRAP_BIND_FLAG,
      Ctor = createCtor(func);

  function wrapper() {
    var fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;
    return fn.apply(isBind ? thisArg : this, arguments);
  }
  return wrapper;
}

module.exports = createBind;


/***/ }),

/***/ "./node_modules/lodash/_createCtor.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_createCtor.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseCreate = __webpack_require__(/*! ./_baseCreate */ "./node_modules/lodash/_baseCreate.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js");

/**
 * Creates a function that produces an instance of `Ctor` regardless of
 * whether it was invoked as part of a `new` expression or by `call` or `apply`.
 *
 * @private
 * @param {Function} Ctor The constructor to wrap.
 * @returns {Function} Returns the new wrapped function.
 */
function createCtor(Ctor) {
  return function() {
    // Use a `switch` statement to work with class constructors. See
    // http://ecma-international.org/ecma-262/7.0/#sec-ecmascript-function-objects-call-thisargument-argumentslist
    // for more details.
    var args = arguments;
    switch (args.length) {
      case 0: return new Ctor;
      case 1: return new Ctor(args[0]);
      case 2: return new Ctor(args[0], args[1]);
      case 3: return new Ctor(args[0], args[1], args[2]);
      case 4: return new Ctor(args[0], args[1], args[2], args[3]);
      case 5: return new Ctor(args[0], args[1], args[2], args[3], args[4]);
      case 6: return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5]);
      case 7: return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
    }
    var thisBinding = baseCreate(Ctor.prototype),
        result = Ctor.apply(thisBinding, args);

    // Mimic the constructor's `return` behavior.
    // See https://es5.github.io/#x13.2.2 for more details.
    return isObject(result) ? result : thisBinding;
  };
}

module.exports = createCtor;


/***/ }),

/***/ "./node_modules/lodash/_createCurry.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_createCurry.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var apply = __webpack_require__(/*! ./_apply */ "./node_modules/lodash/_apply.js"),
    createCtor = __webpack_require__(/*! ./_createCtor */ "./node_modules/lodash/_createCtor.js"),
    createHybrid = __webpack_require__(/*! ./_createHybrid */ "./node_modules/lodash/_createHybrid.js"),
    createRecurry = __webpack_require__(/*! ./_createRecurry */ "./node_modules/lodash/_createRecurry.js"),
    getHolder = __webpack_require__(/*! ./_getHolder */ "./node_modules/lodash/_getHolder.js"),
    replaceHolders = __webpack_require__(/*! ./_replaceHolders */ "./node_modules/lodash/_replaceHolders.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/**
 * Creates a function that wraps `func` to enable currying.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @param {number} arity The arity of `func`.
 * @returns {Function} Returns the new wrapped function.
 */
function createCurry(func, bitmask, arity) {
  var Ctor = createCtor(func);

  function wrapper() {
    var length = arguments.length,
        args = Array(length),
        index = length,
        placeholder = getHolder(wrapper);

    while (index--) {
      args[index] = arguments[index];
    }
    var holders = (length < 3 && args[0] !== placeholder && args[length - 1] !== placeholder)
      ? []
      : replaceHolders(args, placeholder);

    length -= holders.length;
    if (length < arity) {
      return createRecurry(
        func, bitmask, createHybrid, wrapper.placeholder, undefined,
        args, holders, undefined, undefined, arity - length);
    }
    var fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;
    return apply(fn, this, args);
  }
  return wrapper;
}

module.exports = createCurry;


/***/ }),

/***/ "./node_modules/lodash/_createFind.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_createFind.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIteratee = __webpack_require__(/*! ./_baseIteratee */ "./node_modules/lodash/_baseIteratee.js"),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/lodash/isArrayLike.js"),
    keys = __webpack_require__(/*! ./keys */ "./node_modules/lodash/keys.js");

/**
 * Creates a `_.find` or `_.findLast` function.
 *
 * @private
 * @param {Function} findIndexFunc The function to find the collection index.
 * @returns {Function} Returns the new find function.
 */
function createFind(findIndexFunc) {
  return function(collection, predicate, fromIndex) {
    var iterable = Object(collection);
    if (!isArrayLike(collection)) {
      var iteratee = baseIteratee(predicate, 3);
      collection = keys(collection);
      predicate = function(key) { return iteratee(iterable[key], key, iterable); };
    }
    var index = findIndexFunc(collection, predicate, fromIndex);
    return index > -1 ? iterable[iteratee ? collection[index] : index] : undefined;
  };
}

module.exports = createFind;


/***/ }),

/***/ "./node_modules/lodash/_createFlow.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_createFlow.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var LodashWrapper = __webpack_require__(/*! ./_LodashWrapper */ "./node_modules/lodash/_LodashWrapper.js"),
    flatRest = __webpack_require__(/*! ./_flatRest */ "./node_modules/lodash/_flatRest.js"),
    getData = __webpack_require__(/*! ./_getData */ "./node_modules/lodash/_getData.js"),
    getFuncName = __webpack_require__(/*! ./_getFuncName */ "./node_modules/lodash/_getFuncName.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isLaziable = __webpack_require__(/*! ./_isLaziable */ "./node_modules/lodash/_isLaziable.js");

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used to compose bitmasks for function metadata. */
var WRAP_CURRY_FLAG = 8,
    WRAP_PARTIAL_FLAG = 32,
    WRAP_ARY_FLAG = 128,
    WRAP_REARG_FLAG = 256;

/**
 * Creates a `_.flow` or `_.flowRight` function.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new flow function.
 */
function createFlow(fromRight) {
  return flatRest(function(funcs) {
    var length = funcs.length,
        index = length,
        prereq = LodashWrapper.prototype.thru;

    if (fromRight) {
      funcs.reverse();
    }
    while (index--) {
      var func = funcs[index];
      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      if (prereq && !wrapper && getFuncName(func) == 'wrapper') {
        var wrapper = new LodashWrapper([], true);
      }
    }
    index = wrapper ? index : length;
    while (++index < length) {
      func = funcs[index];

      var funcName = getFuncName(func),
          data = funcName == 'wrapper' ? getData(func) : undefined;

      if (data && isLaziable(data[0]) &&
            data[1] == (WRAP_ARY_FLAG | WRAP_CURRY_FLAG | WRAP_PARTIAL_FLAG | WRAP_REARG_FLAG) &&
            !data[4].length && data[9] == 1
          ) {
        wrapper = wrapper[getFuncName(data[0])].apply(wrapper, data[3]);
      } else {
        wrapper = (func.length == 1 && isLaziable(func))
          ? wrapper[funcName]()
          : wrapper.thru(func);
      }
    }
    return function() {
      var args = arguments,
          value = args[0];

      if (wrapper && args.length == 1 && isArray(value)) {
        return wrapper.plant(value).value();
      }
      var index = 0,
          result = length ? funcs[index].apply(this, args) : value;

      while (++index < length) {
        result = funcs[index].call(this, result);
      }
      return result;
    };
  });
}

module.exports = createFlow;


/***/ }),

/***/ "./node_modules/lodash/_createHybrid.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_createHybrid.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var composeArgs = __webpack_require__(/*! ./_composeArgs */ "./node_modules/lodash/_composeArgs.js"),
    composeArgsRight = __webpack_require__(/*! ./_composeArgsRight */ "./node_modules/lodash/_composeArgsRight.js"),
    countHolders = __webpack_require__(/*! ./_countHolders */ "./node_modules/lodash/_countHolders.js"),
    createCtor = __webpack_require__(/*! ./_createCtor */ "./node_modules/lodash/_createCtor.js"),
    createRecurry = __webpack_require__(/*! ./_createRecurry */ "./node_modules/lodash/_createRecurry.js"),
    getHolder = __webpack_require__(/*! ./_getHolder */ "./node_modules/lodash/_getHolder.js"),
    reorder = __webpack_require__(/*! ./_reorder */ "./node_modules/lodash/_reorder.js"),
    replaceHolders = __webpack_require__(/*! ./_replaceHolders */ "./node_modules/lodash/_replaceHolders.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Used to compose bitmasks for function metadata. */
var WRAP_BIND_FLAG = 1,
    WRAP_BIND_KEY_FLAG = 2,
    WRAP_CURRY_FLAG = 8,
    WRAP_CURRY_RIGHT_FLAG = 16,
    WRAP_ARY_FLAG = 128,
    WRAP_FLIP_FLAG = 512;

/**
 * Creates a function that wraps `func` to invoke it with optional `this`
 * binding of `thisArg`, partial application, and currying.
 *
 * @private
 * @param {Function|string} func The function or method name to wrap.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @param {*} [thisArg] The `this` binding of `func`.
 * @param {Array} [partials] The arguments to prepend to those provided to
 *  the new function.
 * @param {Array} [holders] The `partials` placeholder indexes.
 * @param {Array} [partialsRight] The arguments to append to those provided
 *  to the new function.
 * @param {Array} [holdersRight] The `partialsRight` placeholder indexes.
 * @param {Array} [argPos] The argument positions of the new function.
 * @param {number} [ary] The arity cap of `func`.
 * @param {number} [arity] The arity of `func`.
 * @returns {Function} Returns the new wrapped function.
 */
function createHybrid(func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary, arity) {
  var isAry = bitmask & WRAP_ARY_FLAG,
      isBind = bitmask & WRAP_BIND_FLAG,
      isBindKey = bitmask & WRAP_BIND_KEY_FLAG,
      isCurried = bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG),
      isFlip = bitmask & WRAP_FLIP_FLAG,
      Ctor = isBindKey ? undefined : createCtor(func);

  function wrapper() {
    var length = arguments.length,
        args = Array(length),
        index = length;

    while (index--) {
      args[index] = arguments[index];
    }
    if (isCurried) {
      var placeholder = getHolder(wrapper),
          holdersCount = countHolders(args, placeholder);
    }
    if (partials) {
      args = composeArgs(args, partials, holders, isCurried);
    }
    if (partialsRight) {
      args = composeArgsRight(args, partialsRight, holdersRight, isCurried);
    }
    length -= holdersCount;
    if (isCurried && length < arity) {
      var newHolders = replaceHolders(args, placeholder);
      return createRecurry(
        func, bitmask, createHybrid, wrapper.placeholder, thisArg,
        args, newHolders, argPos, ary, arity - length
      );
    }
    var thisBinding = isBind ? thisArg : this,
        fn = isBindKey ? thisBinding[func] : func;

    length = args.length;
    if (argPos) {
      args = reorder(args, argPos);
    } else if (isFlip && length > 1) {
      args.reverse();
    }
    if (isAry && ary < length) {
      args.length = ary;
    }
    if (this && this !== root && this instanceof wrapper) {
      fn = Ctor || createCtor(fn);
    }
    return fn.apply(thisBinding, args);
  }
  return wrapper;
}

module.exports = createHybrid;


/***/ }),

/***/ "./node_modules/lodash/_createPartial.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_createPartial.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var apply = __webpack_require__(/*! ./_apply */ "./node_modules/lodash/_apply.js"),
    createCtor = __webpack_require__(/*! ./_createCtor */ "./node_modules/lodash/_createCtor.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Used to compose bitmasks for function metadata. */
var WRAP_BIND_FLAG = 1;

/**
 * Creates a function that wraps `func` to invoke it with the `this` binding
 * of `thisArg` and `partials` prepended to the arguments it receives.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} partials The arguments to prepend to those provided to
 *  the new function.
 * @returns {Function} Returns the new wrapped function.
 */
function createPartial(func, bitmask, thisArg, partials) {
  var isBind = bitmask & WRAP_BIND_FLAG,
      Ctor = createCtor(func);

  function wrapper() {
    var argsIndex = -1,
        argsLength = arguments.length,
        leftIndex = -1,
        leftLength = partials.length,
        args = Array(leftLength + argsLength),
        fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;

    while (++leftIndex < leftLength) {
      args[leftIndex] = partials[leftIndex];
    }
    while (argsLength--) {
      args[leftIndex++] = arguments[++argsIndex];
    }
    return apply(fn, isBind ? thisArg : this, args);
  }
  return wrapper;
}

module.exports = createPartial;


/***/ }),

/***/ "./node_modules/lodash/_createRecurry.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_createRecurry.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isLaziable = __webpack_require__(/*! ./_isLaziable */ "./node_modules/lodash/_isLaziable.js"),
    setData = __webpack_require__(/*! ./_setData */ "./node_modules/lodash/_setData.js"),
    setWrapToString = __webpack_require__(/*! ./_setWrapToString */ "./node_modules/lodash/_setWrapToString.js");

/** Used to compose bitmasks for function metadata. */
var WRAP_BIND_FLAG = 1,
    WRAP_BIND_KEY_FLAG = 2,
    WRAP_CURRY_BOUND_FLAG = 4,
    WRAP_CURRY_FLAG = 8,
    WRAP_PARTIAL_FLAG = 32,
    WRAP_PARTIAL_RIGHT_FLAG = 64;

/**
 * Creates a function that wraps `func` to continue currying.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @param {Function} wrapFunc The function to create the `func` wrapper.
 * @param {*} placeholder The placeholder value.
 * @param {*} [thisArg] The `this` binding of `func`.
 * @param {Array} [partials] The arguments to prepend to those provided to
 *  the new function.
 * @param {Array} [holders] The `partials` placeholder indexes.
 * @param {Array} [argPos] The argument positions of the new function.
 * @param {number} [ary] The arity cap of `func`.
 * @param {number} [arity] The arity of `func`.
 * @returns {Function} Returns the new wrapped function.
 */
function createRecurry(func, bitmask, wrapFunc, placeholder, thisArg, partials, holders, argPos, ary, arity) {
  var isCurry = bitmask & WRAP_CURRY_FLAG,
      newHolders = isCurry ? holders : undefined,
      newHoldersRight = isCurry ? undefined : holders,
      newPartials = isCurry ? partials : undefined,
      newPartialsRight = isCurry ? undefined : partials;

  bitmask |= (isCurry ? WRAP_PARTIAL_FLAG : WRAP_PARTIAL_RIGHT_FLAG);
  bitmask &= ~(isCurry ? WRAP_PARTIAL_RIGHT_FLAG : WRAP_PARTIAL_FLAG);

  if (!(bitmask & WRAP_CURRY_BOUND_FLAG)) {
    bitmask &= ~(WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG);
  }
  var newData = [
    func, bitmask, thisArg, newPartials, newHolders, newPartialsRight,
    newHoldersRight, argPos, ary, arity
  ];

  var result = wrapFunc.apply(undefined, newData);
  if (isLaziable(func)) {
    setData(result, newData);
  }
  result.placeholder = placeholder;
  return setWrapToString(result, func, bitmask);
}

module.exports = createRecurry;


/***/ }),

/***/ "./node_modules/lodash/_createWrap.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_createWrap.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseSetData = __webpack_require__(/*! ./_baseSetData */ "./node_modules/lodash/_baseSetData.js"),
    createBind = __webpack_require__(/*! ./_createBind */ "./node_modules/lodash/_createBind.js"),
    createCurry = __webpack_require__(/*! ./_createCurry */ "./node_modules/lodash/_createCurry.js"),
    createHybrid = __webpack_require__(/*! ./_createHybrid */ "./node_modules/lodash/_createHybrid.js"),
    createPartial = __webpack_require__(/*! ./_createPartial */ "./node_modules/lodash/_createPartial.js"),
    getData = __webpack_require__(/*! ./_getData */ "./node_modules/lodash/_getData.js"),
    mergeData = __webpack_require__(/*! ./_mergeData */ "./node_modules/lodash/_mergeData.js"),
    setData = __webpack_require__(/*! ./_setData */ "./node_modules/lodash/_setData.js"),
    setWrapToString = __webpack_require__(/*! ./_setWrapToString */ "./node_modules/lodash/_setWrapToString.js"),
    toInteger = __webpack_require__(/*! ./toInteger */ "./node_modules/lodash/toInteger.js");

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used to compose bitmasks for function metadata. */
var WRAP_BIND_FLAG = 1,
    WRAP_BIND_KEY_FLAG = 2,
    WRAP_CURRY_FLAG = 8,
    WRAP_CURRY_RIGHT_FLAG = 16,
    WRAP_PARTIAL_FLAG = 32,
    WRAP_PARTIAL_RIGHT_FLAG = 64;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * Creates a function that either curries or invokes `func` with optional
 * `this` binding and partially applied arguments.
 *
 * @private
 * @param {Function|string} func The function or method name to wrap.
 * @param {number} bitmask The bitmask flags.
 *    1 - `_.bind`
 *    2 - `_.bindKey`
 *    4 - `_.curry` or `_.curryRight` of a bound function
 *    8 - `_.curry`
 *   16 - `_.curryRight`
 *   32 - `_.partial`
 *   64 - `_.partialRight`
 *  128 - `_.rearg`
 *  256 - `_.ary`
 *  512 - `_.flip`
 * @param {*} [thisArg] The `this` binding of `func`.
 * @param {Array} [partials] The arguments to be partially applied.
 * @param {Array} [holders] The `partials` placeholder indexes.
 * @param {Array} [argPos] The argument positions of the new function.
 * @param {number} [ary] The arity cap of `func`.
 * @param {number} [arity] The arity of `func`.
 * @returns {Function} Returns the new wrapped function.
 */
function createWrap(func, bitmask, thisArg, partials, holders, argPos, ary, arity) {
  var isBindKey = bitmask & WRAP_BIND_KEY_FLAG;
  if (!isBindKey && typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var length = partials ? partials.length : 0;
  if (!length) {
    bitmask &= ~(WRAP_PARTIAL_FLAG | WRAP_PARTIAL_RIGHT_FLAG);
    partials = holders = undefined;
  }
  ary = ary === undefined ? ary : nativeMax(toInteger(ary), 0);
  arity = arity === undefined ? arity : toInteger(arity);
  length -= holders ? holders.length : 0;

  if (bitmask & WRAP_PARTIAL_RIGHT_FLAG) {
    var partialsRight = partials,
        holdersRight = holders;

    partials = holders = undefined;
  }
  var data = isBindKey ? undefined : getData(func);

  var newData = [
    func, bitmask, thisArg, partials, holders, partialsRight, holdersRight,
    argPos, ary, arity
  ];

  if (data) {
    mergeData(newData, data);
  }
  func = newData[0];
  bitmask = newData[1];
  thisArg = newData[2];
  partials = newData[3];
  holders = newData[4];
  arity = newData[9] = newData[9] === undefined
    ? (isBindKey ? 0 : func.length)
    : nativeMax(newData[9] - length, 0);

  if (!arity && bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG)) {
    bitmask &= ~(WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG);
  }
  if (!bitmask || bitmask == WRAP_BIND_FLAG) {
    var result = createBind(func, bitmask, thisArg);
  } else if (bitmask == WRAP_CURRY_FLAG || bitmask == WRAP_CURRY_RIGHT_FLAG) {
    result = createCurry(func, bitmask, arity);
  } else if ((bitmask == WRAP_PARTIAL_FLAG || bitmask == (WRAP_BIND_FLAG | WRAP_PARTIAL_FLAG)) && !holders.length) {
    result = createPartial(func, bitmask, thisArg, partials);
  } else {
    result = createHybrid.apply(undefined, newData);
  }
  var setter = data ? baseSetData : setData;
  return setWrapToString(setter(result, newData), func, bitmask);
}

module.exports = createWrap;


/***/ }),

/***/ "./node_modules/lodash/_customOmitClone.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_customOmitClone.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isPlainObject = __webpack_require__(/*! ./isPlainObject */ "./node_modules/lodash/isPlainObject.js");

/**
 * Used by `_.omit` to customize its `_.cloneDeep` use to only clone plain
 * objects.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {string} key The key of the property to inspect.
 * @returns {*} Returns the uncloned value or `undefined` to defer cloning to `_.cloneDeep`.
 */
function customOmitClone(value) {
  return isPlainObject(value) ? undefined : value;
}

module.exports = customOmitClone;


/***/ }),

/***/ "./node_modules/lodash/_defineProperty.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_defineProperty.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js");

var defineProperty = (function() {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

module.exports = defineProperty;


/***/ }),

/***/ "./node_modules/lodash/_equalArrays.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_equalArrays.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var SetCache = __webpack_require__(/*! ./_SetCache */ "./node_modules/lodash/_SetCache.js"),
    arraySome = __webpack_require__(/*! ./_arraySome */ "./node_modules/lodash/_arraySome.js"),
    cacheHas = __webpack_require__(/*! ./_cacheHas */ "./node_modules/lodash/_cacheHas.js");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(array);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var index = -1,
      result = true,
      seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, arrValue, index, other, array, stack)
        : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!arraySome(other, function(othValue, othIndex) {
            if (!cacheHas(seen, othIndex) &&
                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
        result = false;
        break;
      }
    } else if (!(
          arrValue === othValue ||
            equalFunc(arrValue, othValue, bitmask, customizer, stack)
        )) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

module.exports = equalArrays;


/***/ }),

/***/ "./node_modules/lodash/_equalByTag.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_equalByTag.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js"),
    Uint8Array = __webpack_require__(/*! ./_Uint8Array */ "./node_modules/lodash/_Uint8Array.js"),
    eq = __webpack_require__(/*! ./eq */ "./node_modules/lodash/eq.js"),
    equalArrays = __webpack_require__(/*! ./_equalArrays */ "./node_modules/lodash/_equalArrays.js"),
    mapToArray = __webpack_require__(/*! ./_mapToArray */ "./node_modules/lodash/_mapToArray.js"),
    setToArray = __webpack_require__(/*! ./_setToArray */ "./node_modules/lodash/_setToArray.js");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]';

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag:
      if ((object.byteLength != other.byteLength) ||
          (object.byteOffset != other.byteOffset)) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag:
      if ((object.byteLength != other.byteLength) ||
          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
        return false;
      }
      return true;

    case boolTag:
    case dateTag:
    case numberTag:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq(+object, +other);

    case errorTag:
      return object.name == other.name && object.message == other.message;

    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == (other + '');

    case mapTag:
      var convert = mapToArray;

    case setTag:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
      convert || (convert = setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack['delete'](object);
      return result;

    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}

module.exports = equalByTag;


/***/ }),

/***/ "./node_modules/lodash/_equalObjects.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_equalObjects.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getAllKeys = __webpack_require__(/*! ./_getAllKeys */ "./node_modules/lodash/_getAllKeys.js");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      objProps = getAllKeys(object),
      objLength = objProps.length,
      othProps = getAllKeys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
      return false;
    }
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(object);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);

  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, objValue, key, other, object, stack)
        : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined
          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
          : compared
        )) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor &&
        ('constructor' in object && 'constructor' in other) &&
        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

module.exports = equalObjects;


/***/ }),

/***/ "./node_modules/lodash/_flatRest.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_flatRest.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var flatten = __webpack_require__(/*! ./flatten */ "./node_modules/lodash/flatten.js"),
    overRest = __webpack_require__(/*! ./_overRest */ "./node_modules/lodash/_overRest.js"),
    setToString = __webpack_require__(/*! ./_setToString */ "./node_modules/lodash/_setToString.js");

/**
 * A specialized version of `baseRest` which flattens the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @returns {Function} Returns the new function.
 */
function flatRest(func) {
  return setToString(overRest(func, undefined, flatten), func + '');
}

module.exports = flatRest;


/***/ }),

/***/ "./node_modules/lodash/_freeGlobal.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_freeGlobal.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/lodash/_getAllKeys.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_getAllKeys.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetAllKeys = __webpack_require__(/*! ./_baseGetAllKeys */ "./node_modules/lodash/_baseGetAllKeys.js"),
    getSymbols = __webpack_require__(/*! ./_getSymbols */ "./node_modules/lodash/_getSymbols.js"),
    keys = __webpack_require__(/*! ./keys */ "./node_modules/lodash/keys.js");

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

module.exports = getAllKeys;


/***/ }),

/***/ "./node_modules/lodash/_getAllKeysIn.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_getAllKeysIn.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetAllKeys = __webpack_require__(/*! ./_baseGetAllKeys */ "./node_modules/lodash/_baseGetAllKeys.js"),
    getSymbolsIn = __webpack_require__(/*! ./_getSymbolsIn */ "./node_modules/lodash/_getSymbolsIn.js"),
    keysIn = __webpack_require__(/*! ./keysIn */ "./node_modules/lodash/keysIn.js");

/**
 * Creates an array of own and inherited enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeysIn(object) {
  return baseGetAllKeys(object, keysIn, getSymbolsIn);
}

module.exports = getAllKeysIn;


/***/ }),

/***/ "./node_modules/lodash/_getData.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_getData.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var metaMap = __webpack_require__(/*! ./_metaMap */ "./node_modules/lodash/_metaMap.js"),
    noop = __webpack_require__(/*! ./noop */ "./node_modules/lodash/noop.js");

/**
 * Gets metadata for `func`.
 *
 * @private
 * @param {Function} func The function to query.
 * @returns {*} Returns the metadata for `func`.
 */
var getData = !metaMap ? noop : function(func) {
  return metaMap.get(func);
};

module.exports = getData;


/***/ }),

/***/ "./node_modules/lodash/_getFuncName.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_getFuncName.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var realNames = __webpack_require__(/*! ./_realNames */ "./node_modules/lodash/_realNames.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the name of `func`.
 *
 * @private
 * @param {Function} func The function to query.
 * @returns {string} Returns the function name.
 */
function getFuncName(func) {
  var result = (func.name + ''),
      array = realNames[result],
      length = hasOwnProperty.call(realNames, result) ? array.length : 0;

  while (length--) {
    var data = array[length],
        otherFunc = data.func;
    if (otherFunc == null || otherFunc == func) {
      return data.name;
    }
  }
  return result;
}

module.exports = getFuncName;


/***/ }),

/***/ "./node_modules/lodash/_getHolder.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getHolder.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Gets the argument placeholder value for `func`.
 *
 * @private
 * @param {Function} func The function to inspect.
 * @returns {*} Returns the placeholder value.
 */
function getHolder(func) {
  var object = func;
  return object.placeholder;
}

module.exports = getHolder;


/***/ }),

/***/ "./node_modules/lodash/_getMapData.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_getMapData.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isKeyable = __webpack_require__(/*! ./_isKeyable */ "./node_modules/lodash/_isKeyable.js");

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

module.exports = getMapData;


/***/ }),

/***/ "./node_modules/lodash/_getMatchData.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_getMatchData.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isStrictComparable = __webpack_require__(/*! ./_isStrictComparable */ "./node_modules/lodash/_isStrictComparable.js"),
    keys = __webpack_require__(/*! ./keys */ "./node_modules/lodash/keys.js");

/**
 * Gets the property names, values, and compare flags of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the match data of `object`.
 */
function getMatchData(object) {
  var result = keys(object),
      length = result.length;

  while (length--) {
    var key = result[length],
        value = object[key];

    result[length] = [key, value, isStrictComparable(value)];
  }
  return result;
}

module.exports = getMatchData;


/***/ }),

/***/ "./node_modules/lodash/_getNative.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getNative.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsNative = __webpack_require__(/*! ./_baseIsNative */ "./node_modules/lodash/_baseIsNative.js"),
    getValue = __webpack_require__(/*! ./_getValue */ "./node_modules/lodash/_getValue.js");

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

module.exports = getNative;


/***/ }),

/***/ "./node_modules/lodash/_getPrototype.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_getPrototype.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(/*! ./_overArg */ "./node_modules/lodash/_overArg.js");

/** Built-in value references. */
var getPrototype = overArg(Object.getPrototypeOf, Object);

module.exports = getPrototype;


/***/ }),

/***/ "./node_modules/lodash/_getRawTag.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getRawTag.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),

/***/ "./node_modules/lodash/_getSymbols.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_getSymbols.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayFilter = __webpack_require__(/*! ./_arrayFilter */ "./node_modules/lodash/_arrayFilter.js"),
    stubArray = __webpack_require__(/*! ./stubArray */ "./node_modules/lodash/stubArray.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};

module.exports = getSymbols;


/***/ }),

/***/ "./node_modules/lodash/_getSymbolsIn.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_getSymbolsIn.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__(/*! ./_arrayPush */ "./node_modules/lodash/_arrayPush.js"),
    getPrototype = __webpack_require__(/*! ./_getPrototype */ "./node_modules/lodash/_getPrototype.js"),
    getSymbols = __webpack_require__(/*! ./_getSymbols */ "./node_modules/lodash/_getSymbols.js"),
    stubArray = __webpack_require__(/*! ./stubArray */ "./node_modules/lodash/stubArray.js");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own and inherited enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
  var result = [];
  while (object) {
    arrayPush(result, getSymbols(object));
    object = getPrototype(object);
  }
  return result;
};

module.exports = getSymbolsIn;


/***/ }),

/***/ "./node_modules/lodash/_getTag.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/_getTag.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DataView = __webpack_require__(/*! ./_DataView */ "./node_modules/lodash/_DataView.js"),
    Map = __webpack_require__(/*! ./_Map */ "./node_modules/lodash/_Map.js"),
    Promise = __webpack_require__(/*! ./_Promise */ "./node_modules/lodash/_Promise.js"),
    Set = __webpack_require__(/*! ./_Set */ "./node_modules/lodash/_Set.js"),
    WeakMap = __webpack_require__(/*! ./_WeakMap */ "./node_modules/lodash/_WeakMap.js"),
    baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    toSource = __webpack_require__(/*! ./_toSource */ "./node_modules/lodash/_toSource.js");

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    setTag = '[object Set]',
    weakMapTag = '[object WeakMap]';

var dataViewTag = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = baseGetTag(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

module.exports = getTag;


/***/ }),

/***/ "./node_modules/lodash/_getValue.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_getValue.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;


/***/ }),

/***/ "./node_modules/lodash/_getWrapDetails.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_getWrapDetails.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used to match wrap detail comments. */
var reWrapDetails = /\{\n\/\* \[wrapped with (.+)\] \*/,
    reSplitDetails = /,? & /;

/**
 * Extracts wrapper details from the `source` body comment.
 *
 * @private
 * @param {string} source The source to inspect.
 * @returns {Array} Returns the wrapper details.
 */
function getWrapDetails(source) {
  var match = source.match(reWrapDetails);
  return match ? match[1].split(reSplitDetails) : [];
}

module.exports = getWrapDetails;


/***/ }),

/***/ "./node_modules/lodash/_hasPath.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hasPath.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__(/*! ./_castPath */ "./node_modules/lodash/_castPath.js"),
    isArguments = __webpack_require__(/*! ./isArguments */ "./node_modules/lodash/isArguments.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isIndex = __webpack_require__(/*! ./_isIndex */ "./node_modules/lodash/_isIndex.js"),
    isLength = __webpack_require__(/*! ./isLength */ "./node_modules/lodash/isLength.js"),
    toKey = __webpack_require__(/*! ./_toKey */ "./node_modules/lodash/_toKey.js");

/**
 * Checks if `path` exists on `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @param {Function} hasFunc The function to check properties.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 */
function hasPath(object, path, hasFunc) {
  path = castPath(path, object);

  var index = -1,
      length = path.length,
      result = false;

  while (++index < length) {
    var key = toKey(path[index]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result || ++index != length) {
    return result;
  }
  length = object == null ? 0 : object.length;
  return !!length && isLength(length) && isIndex(key, length) &&
    (isArray(object) || isArguments(object));
}

module.exports = hasPath;


/***/ }),

/***/ "./node_modules/lodash/_hashClear.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_hashClear.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

module.exports = hashClear;


/***/ }),

/***/ "./node_modules/lodash/_hashDelete.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_hashDelete.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = hashDelete;


/***/ }),

/***/ "./node_modules/lodash/_hashGet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashGet.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

module.exports = hashGet;


/***/ }),

/***/ "./node_modules/lodash/_hashHas.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashHas.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

module.exports = hashHas;


/***/ }),

/***/ "./node_modules/lodash/_hashSet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashSet.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

module.exports = hashSet;


/***/ }),

/***/ "./node_modules/lodash/_initCloneArray.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_initCloneArray.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Initializes an array clone.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the initialized clone.
 */
function initCloneArray(array) {
  var length = array.length,
      result = new array.constructor(length);

  // Add properties assigned by `RegExp#exec`.
  if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}

module.exports = initCloneArray;


/***/ }),

/***/ "./node_modules/lodash/_initCloneByTag.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_initCloneByTag.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var cloneArrayBuffer = __webpack_require__(/*! ./_cloneArrayBuffer */ "./node_modules/lodash/_cloneArrayBuffer.js"),
    cloneDataView = __webpack_require__(/*! ./_cloneDataView */ "./node_modules/lodash/_cloneDataView.js"),
    cloneRegExp = __webpack_require__(/*! ./_cloneRegExp */ "./node_modules/lodash/_cloneRegExp.js"),
    cloneSymbol = __webpack_require__(/*! ./_cloneSymbol */ "./node_modules/lodash/_cloneSymbol.js"),
    cloneTypedArray = __webpack_require__(/*! ./_cloneTypedArray */ "./node_modules/lodash/_cloneTypedArray.js");

/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/**
 * Initializes an object clone based on its `toStringTag`.
 *
 * **Note:** This function only supports cloning values with tags of
 * `Boolean`, `Date`, `Error`, `Map`, `Number`, `RegExp`, `Set`, or `String`.
 *
 * @private
 * @param {Object} object The object to clone.
 * @param {string} tag The `toStringTag` of the object to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneByTag(object, tag, isDeep) {
  var Ctor = object.constructor;
  switch (tag) {
    case arrayBufferTag:
      return cloneArrayBuffer(object);

    case boolTag:
    case dateTag:
      return new Ctor(+object);

    case dataViewTag:
      return cloneDataView(object, isDeep);

    case float32Tag: case float64Tag:
    case int8Tag: case int16Tag: case int32Tag:
    case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
      return cloneTypedArray(object, isDeep);

    case mapTag:
      return new Ctor;

    case numberTag:
    case stringTag:
      return new Ctor(object);

    case regexpTag:
      return cloneRegExp(object);

    case setTag:
      return new Ctor;

    case symbolTag:
      return cloneSymbol(object);
  }
}

module.exports = initCloneByTag;


/***/ }),

/***/ "./node_modules/lodash/_initCloneObject.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_initCloneObject.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseCreate = __webpack_require__(/*! ./_baseCreate */ "./node_modules/lodash/_baseCreate.js"),
    getPrototype = __webpack_require__(/*! ./_getPrototype */ "./node_modules/lodash/_getPrototype.js"),
    isPrototype = __webpack_require__(/*! ./_isPrototype */ "./node_modules/lodash/_isPrototype.js");

/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  return (typeof object.constructor == 'function' && !isPrototype(object))
    ? baseCreate(getPrototype(object))
    : {};
}

module.exports = initCloneObject;


/***/ }),

/***/ "./node_modules/lodash/_insertWrapDetails.js":
/*!***************************************************!*\
  !*** ./node_modules/lodash/_insertWrapDetails.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used to match wrap detail comments. */
var reWrapComment = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/;

/**
 * Inserts wrapper `details` in a comment at the top of the `source` body.
 *
 * @private
 * @param {string} source The source to modify.
 * @returns {Array} details The details to insert.
 * @returns {string} Returns the modified source.
 */
function insertWrapDetails(source, details) {
  var length = details.length;
  if (!length) {
    return source;
  }
  var lastIndex = length - 1;
  details[lastIndex] = (length > 1 ? '& ' : '') + details[lastIndex];
  details = details.join(length > 2 ? ', ' : ' ');
  return source.replace(reWrapComment, '{\n/* [wrapped with ' + details + '] */\n');
}

module.exports = insertWrapDetails;


/***/ }),

/***/ "./node_modules/lodash/_isFlattenable.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_isFlattenable.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js"),
    isArguments = __webpack_require__(/*! ./isArguments */ "./node_modules/lodash/isArguments.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js");

/** Built-in value references. */
var spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined;

/**
 * Checks if `value` is a flattenable `arguments` object or array.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
 */
function isFlattenable(value) {
  return isArray(value) || isArguments(value) ||
    !!(spreadableSymbol && value && value[spreadableSymbol]);
}

module.exports = isFlattenable;


/***/ }),

/***/ "./node_modules/lodash/_isIndex.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_isIndex.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

module.exports = isIndex;


/***/ }),

/***/ "./node_modules/lodash/_isIterateeCall.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_isIterateeCall.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(/*! ./eq */ "./node_modules/lodash/eq.js"),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/lodash/isArrayLike.js"),
    isIndex = __webpack_require__(/*! ./_isIndex */ "./node_modules/lodash/_isIndex.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js");

/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!isObject(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number'
        ? (isArrayLike(object) && isIndex(index, object.length))
        : (type == 'string' && index in object)
      ) {
    return eq(object[index], value);
  }
  return false;
}

module.exports = isIterateeCall;


/***/ }),

/***/ "./node_modules/lodash/_isKey.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/_isKey.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isSymbol = __webpack_require__(/*! ./isSymbol */ "./node_modules/lodash/isSymbol.js");

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

module.exports = isKey;


/***/ }),

/***/ "./node_modules/lodash/_isKeyable.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_isKeyable.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

module.exports = isKeyable;


/***/ }),

/***/ "./node_modules/lodash/_isLaziable.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_isLaziable.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var LazyWrapper = __webpack_require__(/*! ./_LazyWrapper */ "./node_modules/lodash/_LazyWrapper.js"),
    getData = __webpack_require__(/*! ./_getData */ "./node_modules/lodash/_getData.js"),
    getFuncName = __webpack_require__(/*! ./_getFuncName */ "./node_modules/lodash/_getFuncName.js"),
    lodash = __webpack_require__(/*! ./wrapperLodash */ "./node_modules/lodash/wrapperLodash.js");

/**
 * Checks if `func` has a lazy counterpart.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` has a lazy counterpart,
 *  else `false`.
 */
function isLaziable(func) {
  var funcName = getFuncName(func),
      other = lodash[funcName];

  if (typeof other != 'function' || !(funcName in LazyWrapper.prototype)) {
    return false;
  }
  if (func === other) {
    return true;
  }
  var data = getData(other);
  return !!data && func === data[0];
}

module.exports = isLaziable;


/***/ }),

/***/ "./node_modules/lodash/_isMasked.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_isMasked.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var coreJsData = __webpack_require__(/*! ./_coreJsData */ "./node_modules/lodash/_coreJsData.js");

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

module.exports = isMasked;


/***/ }),

/***/ "./node_modules/lodash/_isPrototype.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_isPrototype.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

module.exports = isPrototype;


/***/ }),

/***/ "./node_modules/lodash/_isStrictComparable.js":
/*!****************************************************!*\
  !*** ./node_modules/lodash/_isStrictComparable.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js");

/**
 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` if suitable for strict
 *  equality comparisons, else `false`.
 */
function isStrictComparable(value) {
  return value === value && !isObject(value);
}

module.exports = isStrictComparable;


/***/ }),

/***/ "./node_modules/lodash/_listCacheClear.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_listCacheClear.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

module.exports = listCacheClear;


/***/ }),

/***/ "./node_modules/lodash/_listCacheDelete.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_listCacheDelete.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

module.exports = listCacheDelete;


/***/ }),

/***/ "./node_modules/lodash/_listCacheGet.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheGet.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

module.exports = listCacheGet;


/***/ }),

/***/ "./node_modules/lodash/_listCacheHas.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheHas.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

module.exports = listCacheHas;


/***/ }),

/***/ "./node_modules/lodash/_listCacheSet.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheSet.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

module.exports = listCacheSet;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheClear.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_mapCacheClear.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Hash = __webpack_require__(/*! ./_Hash */ "./node_modules/lodash/_Hash.js"),
    ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/lodash/_ListCache.js"),
    Map = __webpack_require__(/*! ./_Map */ "./node_modules/lodash/_Map.js");

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

module.exports = mapCacheClear;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheDelete.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_mapCacheDelete.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = mapCacheDelete;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheGet.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheGet.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

module.exports = mapCacheGet;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheHas.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheHas.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

module.exports = mapCacheHas;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheSet.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheSet.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

module.exports = mapCacheSet;


/***/ }),

/***/ "./node_modules/lodash/_mapToArray.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_mapToArray.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

module.exports = mapToArray;


/***/ }),

/***/ "./node_modules/lodash/_matchesStrictComparable.js":
/*!*********************************************************!*\
  !*** ./node_modules/lodash/_matchesStrictComparable.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * A specialized version of `matchesProperty` for source values suitable
 * for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function matchesStrictComparable(key, srcValue) {
  return function(object) {
    if (object == null) {
      return false;
    }
    return object[key] === srcValue &&
      (srcValue !== undefined || (key in Object(object)));
  };
}

module.exports = matchesStrictComparable;


/***/ }),

/***/ "./node_modules/lodash/_memoizeCapped.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_memoizeCapped.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var memoize = __webpack_require__(/*! ./memoize */ "./node_modules/lodash/memoize.js");

/** Used as the maximum memoize cache size. */
var MAX_MEMOIZE_SIZE = 500;

/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */
function memoizeCapped(func) {
  var result = memoize(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });

  var cache = result.cache;
  return result;
}

module.exports = memoizeCapped;


/***/ }),

/***/ "./node_modules/lodash/_mergeData.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_mergeData.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var composeArgs = __webpack_require__(/*! ./_composeArgs */ "./node_modules/lodash/_composeArgs.js"),
    composeArgsRight = __webpack_require__(/*! ./_composeArgsRight */ "./node_modules/lodash/_composeArgsRight.js"),
    replaceHolders = __webpack_require__(/*! ./_replaceHolders */ "./node_modules/lodash/_replaceHolders.js");

/** Used as the internal argument placeholder. */
var PLACEHOLDER = '__lodash_placeholder__';

/** Used to compose bitmasks for function metadata. */
var WRAP_BIND_FLAG = 1,
    WRAP_BIND_KEY_FLAG = 2,
    WRAP_CURRY_BOUND_FLAG = 4,
    WRAP_CURRY_FLAG = 8,
    WRAP_ARY_FLAG = 128,
    WRAP_REARG_FLAG = 256;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMin = Math.min;

/**
 * Merges the function metadata of `source` into `data`.
 *
 * Merging metadata reduces the number of wrappers used to invoke a function.
 * This is possible because methods like `_.bind`, `_.curry`, and `_.partial`
 * may be applied regardless of execution order. Methods like `_.ary` and
 * `_.rearg` modify function arguments, making the order in which they are
 * executed important, preventing the merging of metadata. However, we make
 * an exception for a safe combined case where curried functions have `_.ary`
 * and or `_.rearg` applied.
 *
 * @private
 * @param {Array} data The destination metadata.
 * @param {Array} source The source metadata.
 * @returns {Array} Returns `data`.
 */
function mergeData(data, source) {
  var bitmask = data[1],
      srcBitmask = source[1],
      newBitmask = bitmask | srcBitmask,
      isCommon = newBitmask < (WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG | WRAP_ARY_FLAG);

  var isCombo =
    ((srcBitmask == WRAP_ARY_FLAG) && (bitmask == WRAP_CURRY_FLAG)) ||
    ((srcBitmask == WRAP_ARY_FLAG) && (bitmask == WRAP_REARG_FLAG) && (data[7].length <= source[8])) ||
    ((srcBitmask == (WRAP_ARY_FLAG | WRAP_REARG_FLAG)) && (source[7].length <= source[8]) && (bitmask == WRAP_CURRY_FLAG));

  // Exit early if metadata can't be merged.
  if (!(isCommon || isCombo)) {
    return data;
  }
  // Use source `thisArg` if available.
  if (srcBitmask & WRAP_BIND_FLAG) {
    data[2] = source[2];
    // Set when currying a bound function.
    newBitmask |= bitmask & WRAP_BIND_FLAG ? 0 : WRAP_CURRY_BOUND_FLAG;
  }
  // Compose partial arguments.
  var value = source[3];
  if (value) {
    var partials = data[3];
    data[3] = partials ? composeArgs(partials, value, source[4]) : value;
    data[4] = partials ? replaceHolders(data[3], PLACEHOLDER) : source[4];
  }
  // Compose partial right arguments.
  value = source[5];
  if (value) {
    partials = data[5];
    data[5] = partials ? composeArgsRight(partials, value, source[6]) : value;
    data[6] = partials ? replaceHolders(data[5], PLACEHOLDER) : source[6];
  }
  // Use source `argPos` if available.
  value = source[7];
  if (value) {
    data[7] = value;
  }
  // Use source `ary` if it's smaller.
  if (srcBitmask & WRAP_ARY_FLAG) {
    data[8] = data[8] == null ? source[8] : nativeMin(data[8], source[8]);
  }
  // Use source `arity` if one is not provided.
  if (data[9] == null) {
    data[9] = source[9];
  }
  // Use source `func` and merge bitmasks.
  data[0] = source[0];
  data[1] = newBitmask;

  return data;
}

module.exports = mergeData;


/***/ }),

/***/ "./node_modules/lodash/_metaMap.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_metaMap.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var WeakMap = __webpack_require__(/*! ./_WeakMap */ "./node_modules/lodash/_WeakMap.js");

/** Used to store function metadata. */
var metaMap = WeakMap && new WeakMap;

module.exports = metaMap;


/***/ }),

/***/ "./node_modules/lodash/_nativeCreate.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_nativeCreate.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js");

/* Built-in method references that are verified to be native. */
var nativeCreate = getNative(Object, 'create');

module.exports = nativeCreate;


/***/ }),

/***/ "./node_modules/lodash/_nativeKeys.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_nativeKeys.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(/*! ./_overArg */ "./node_modules/lodash/_overArg.js");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

module.exports = nativeKeys;


/***/ }),

/***/ "./node_modules/lodash/_nativeKeysIn.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_nativeKeysIn.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

module.exports = nativeKeysIn;


/***/ }),

/***/ "./node_modules/lodash/_nodeUtil.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_nodeUtil.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "./node_modules/lodash/_freeGlobal.js");

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/lodash/_objectToString.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_objectToString.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),

/***/ "./node_modules/lodash/_overArg.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_overArg.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;


/***/ }),

/***/ "./node_modules/lodash/_overRest.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_overRest.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var apply = __webpack_require__(/*! ./_apply */ "./node_modules/lodash/_apply.js");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */
function overRest(func, start, transform) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return apply(func, this, otherArgs);
  };
}

module.exports = overRest;


/***/ }),

/***/ "./node_modules/lodash/_parent.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/_parent.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__(/*! ./_baseGet */ "./node_modules/lodash/_baseGet.js"),
    baseSlice = __webpack_require__(/*! ./_baseSlice */ "./node_modules/lodash/_baseSlice.js");

/**
 * Gets the parent value at `path` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array} path The path to get the parent value of.
 * @returns {*} Returns the parent value.
 */
function parent(object, path) {
  return path.length < 2 ? object : baseGet(object, baseSlice(path, 0, -1));
}

module.exports = parent;


/***/ }),

/***/ "./node_modules/lodash/_realNames.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_realNames.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used to lookup unminified function names. */
var realNames = {};

module.exports = realNames;


/***/ }),

/***/ "./node_modules/lodash/_reorder.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_reorder.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var copyArray = __webpack_require__(/*! ./_copyArray */ "./node_modules/lodash/_copyArray.js"),
    isIndex = __webpack_require__(/*! ./_isIndex */ "./node_modules/lodash/_isIndex.js");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMin = Math.min;

/**
 * Reorder `array` according to the specified indexes where the element at
 * the first index is assigned as the first element, the element at
 * the second index is assigned as the second element, and so on.
 *
 * @private
 * @param {Array} array The array to reorder.
 * @param {Array} indexes The arranged array indexes.
 * @returns {Array} Returns `array`.
 */
function reorder(array, indexes) {
  var arrLength = array.length,
      length = nativeMin(indexes.length, arrLength),
      oldArray = copyArray(array);

  while (length--) {
    var index = indexes[length];
    array[length] = isIndex(index, arrLength) ? oldArray[index] : undefined;
  }
  return array;
}

module.exports = reorder;


/***/ }),

/***/ "./node_modules/lodash/_replaceHolders.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_replaceHolders.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used as the internal argument placeholder. */
var PLACEHOLDER = '__lodash_placeholder__';

/**
 * Replaces all `placeholder` elements in `array` with an internal placeholder
 * and returns an array of their indexes.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {*} placeholder The placeholder to replace.
 * @returns {Array} Returns the new array of placeholder indexes.
 */
function replaceHolders(array, placeholder) {
  var index = -1,
      length = array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (value === placeholder || value === PLACEHOLDER) {
      array[index] = PLACEHOLDER;
      result[resIndex++] = index;
    }
  }
  return result;
}

module.exports = replaceHolders;


/***/ }),

/***/ "./node_modules/lodash/_root.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/_root.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "./node_modules/lodash/_freeGlobal.js");

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),

/***/ "./node_modules/lodash/_safeGet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_safeGet.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Gets the value at `key`, unless `key` is "__proto__" or "constructor".
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function safeGet(object, key) {
  if (key === 'constructor' && typeof object[key] === 'function') {
    return;
  }

  if (key == '__proto__') {
    return;
  }

  return object[key];
}

module.exports = safeGet;


/***/ }),

/***/ "./node_modules/lodash/_setCacheAdd.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_setCacheAdd.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

module.exports = setCacheAdd;


/***/ }),

/***/ "./node_modules/lodash/_setCacheHas.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_setCacheHas.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

module.exports = setCacheHas;


/***/ }),

/***/ "./node_modules/lodash/_setData.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_setData.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseSetData = __webpack_require__(/*! ./_baseSetData */ "./node_modules/lodash/_baseSetData.js"),
    shortOut = __webpack_require__(/*! ./_shortOut */ "./node_modules/lodash/_shortOut.js");

/**
 * Sets metadata for `func`.
 *
 * **Note:** If this function becomes hot, i.e. is invoked a lot in a short
 * period of time, it will trip its breaker and transition to an identity
 * function to avoid garbage collection pauses in V8. See
 * [V8 issue 2070](https://bugs.chromium.org/p/v8/issues/detail?id=2070)
 * for more details.
 *
 * @private
 * @param {Function} func The function to associate metadata with.
 * @param {*} data The metadata.
 * @returns {Function} Returns `func`.
 */
var setData = shortOut(baseSetData);

module.exports = setData;


/***/ }),

/***/ "./node_modules/lodash/_setToArray.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_setToArray.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

module.exports = setToArray;


/***/ }),

/***/ "./node_modules/lodash/_setToString.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_setToString.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseSetToString = __webpack_require__(/*! ./_baseSetToString */ "./node_modules/lodash/_baseSetToString.js"),
    shortOut = __webpack_require__(/*! ./_shortOut */ "./node_modules/lodash/_shortOut.js");

/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var setToString = shortOut(baseSetToString);

module.exports = setToString;


/***/ }),

/***/ "./node_modules/lodash/_setWrapToString.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_setWrapToString.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getWrapDetails = __webpack_require__(/*! ./_getWrapDetails */ "./node_modules/lodash/_getWrapDetails.js"),
    insertWrapDetails = __webpack_require__(/*! ./_insertWrapDetails */ "./node_modules/lodash/_insertWrapDetails.js"),
    setToString = __webpack_require__(/*! ./_setToString */ "./node_modules/lodash/_setToString.js"),
    updateWrapDetails = __webpack_require__(/*! ./_updateWrapDetails */ "./node_modules/lodash/_updateWrapDetails.js");

/**
 * Sets the `toString` method of `wrapper` to mimic the source of `reference`
 * with wrapper details in a comment at the top of the source body.
 *
 * @private
 * @param {Function} wrapper The function to modify.
 * @param {Function} reference The reference function.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @returns {Function} Returns `wrapper`.
 */
function setWrapToString(wrapper, reference, bitmask) {
  var source = (reference + '');
  return setToString(wrapper, insertWrapDetails(source, updateWrapDetails(getWrapDetails(source), bitmask)));
}

module.exports = setWrapToString;


/***/ }),

/***/ "./node_modules/lodash/_shortOut.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_shortOut.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used to detect hot functions by number of calls within a span of milliseconds. */
var HOT_COUNT = 800,
    HOT_SPAN = 16;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeNow = Date.now;

/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */
function shortOut(func) {
  var count = 0,
      lastCalled = 0;

  return function() {
    var stamp = nativeNow(),
        remaining = HOT_SPAN - (stamp - lastCalled);

    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(undefined, arguments);
  };
}

module.exports = shortOut;


/***/ }),

/***/ "./node_modules/lodash/_stackClear.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_stackClear.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/lodash/_ListCache.js");

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
  this.size = 0;
}

module.exports = stackClear;


/***/ }),

/***/ "./node_modules/lodash/_stackDelete.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_stackDelete.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

module.exports = stackDelete;


/***/ }),

/***/ "./node_modules/lodash/_stackGet.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_stackGet.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

module.exports = stackGet;


/***/ }),

/***/ "./node_modules/lodash/_stackHas.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_stackHas.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

module.exports = stackHas;


/***/ }),

/***/ "./node_modules/lodash/_stackSet.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_stackSet.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/lodash/_ListCache.js"),
    Map = __webpack_require__(/*! ./_Map */ "./node_modules/lodash/_Map.js"),
    MapCache = __webpack_require__(/*! ./_MapCache */ "./node_modules/lodash/_MapCache.js");

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

module.exports = stackSet;


/***/ }),

/***/ "./node_modules/lodash/_strictIndexOf.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_strictIndexOf.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.indexOf` which performs strict equality
 * comparisons of values, i.e. `===`.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function strictIndexOf(array, value, fromIndex) {
  var index = fromIndex - 1,
      length = array.length;

  while (++index < length) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
}

module.exports = strictIndexOf;


/***/ }),

/***/ "./node_modules/lodash/_stringToPath.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_stringToPath.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var memoizeCapped = __webpack_require__(/*! ./_memoizeCapped */ "./node_modules/lodash/_memoizeCapped.js");

/** Used to match property names within property paths. */
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoizeCapped(function(string) {
  var result = [];
  if (string.charCodeAt(0) === 46 /* . */) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

module.exports = stringToPath;


/***/ }),

/***/ "./node_modules/lodash/_toKey.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/_toKey.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isSymbol = __webpack_require__(/*! ./isSymbol */ "./node_modules/lodash/isSymbol.js");

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = toKey;


/***/ }),

/***/ "./node_modules/lodash/_toSource.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_toSource.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

module.exports = toSource;


/***/ }),

/***/ "./node_modules/lodash/_updateWrapDetails.js":
/*!***************************************************!*\
  !*** ./node_modules/lodash/_updateWrapDetails.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayEach = __webpack_require__(/*! ./_arrayEach */ "./node_modules/lodash/_arrayEach.js"),
    arrayIncludes = __webpack_require__(/*! ./_arrayIncludes */ "./node_modules/lodash/_arrayIncludes.js");

/** Used to compose bitmasks for function metadata. */
var WRAP_BIND_FLAG = 1,
    WRAP_BIND_KEY_FLAG = 2,
    WRAP_CURRY_FLAG = 8,
    WRAP_CURRY_RIGHT_FLAG = 16,
    WRAP_PARTIAL_FLAG = 32,
    WRAP_PARTIAL_RIGHT_FLAG = 64,
    WRAP_ARY_FLAG = 128,
    WRAP_REARG_FLAG = 256,
    WRAP_FLIP_FLAG = 512;

/** Used to associate wrap methods with their bit flags. */
var wrapFlags = [
  ['ary', WRAP_ARY_FLAG],
  ['bind', WRAP_BIND_FLAG],
  ['bindKey', WRAP_BIND_KEY_FLAG],
  ['curry', WRAP_CURRY_FLAG],
  ['curryRight', WRAP_CURRY_RIGHT_FLAG],
  ['flip', WRAP_FLIP_FLAG],
  ['partial', WRAP_PARTIAL_FLAG],
  ['partialRight', WRAP_PARTIAL_RIGHT_FLAG],
  ['rearg', WRAP_REARG_FLAG]
];

/**
 * Updates wrapper `details` based on `bitmask` flags.
 *
 * @private
 * @returns {Array} details The details to modify.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @returns {Array} Returns `details`.
 */
function updateWrapDetails(details, bitmask) {
  arrayEach(wrapFlags, function(pair) {
    var value = '_.' + pair[0];
    if ((bitmask & pair[1]) && !arrayIncludes(details, value)) {
      details.push(value);
    }
  });
  return details.sort();
}

module.exports = updateWrapDetails;


/***/ }),

/***/ "./node_modules/lodash/_wrapperClone.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_wrapperClone.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var LazyWrapper = __webpack_require__(/*! ./_LazyWrapper */ "./node_modules/lodash/_LazyWrapper.js"),
    LodashWrapper = __webpack_require__(/*! ./_LodashWrapper */ "./node_modules/lodash/_LodashWrapper.js"),
    copyArray = __webpack_require__(/*! ./_copyArray */ "./node_modules/lodash/_copyArray.js");

/**
 * Creates a clone of `wrapper`.
 *
 * @private
 * @param {Object} wrapper The wrapper to clone.
 * @returns {Object} Returns the cloned wrapper.
 */
function wrapperClone(wrapper) {
  if (wrapper instanceof LazyWrapper) {
    return wrapper.clone();
  }
  var result = new LodashWrapper(wrapper.__wrapped__, wrapper.__chain__);
  result.__actions__ = copyArray(wrapper.__actions__);
  result.__index__  = wrapper.__index__;
  result.__values__ = wrapper.__values__;
  return result;
}

module.exports = wrapperClone;


/***/ }),

/***/ "./node_modules/lodash/constant.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/constant.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant(value) {
  return function() {
    return value;
  };
}

module.exports = constant;


/***/ }),

/***/ "./node_modules/lodash/curry.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/curry.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var createWrap = __webpack_require__(/*! ./_createWrap */ "./node_modules/lodash/_createWrap.js");

/** Used to compose bitmasks for function metadata. */
var WRAP_CURRY_FLAG = 8;

/**
 * Creates a function that accepts arguments of `func` and either invokes
 * `func` returning its result, if at least `arity` number of arguments have
 * been provided, or returns a function that accepts the remaining `func`
 * arguments, and so on. The arity of `func` may be specified if `func.length`
 * is not sufficient.
 *
 * The `_.curry.placeholder` value, which defaults to `_` in monolithic builds,
 * may be used as a placeholder for provided arguments.
 *
 * **Note:** This method doesn't set the "length" property of curried functions.
 *
 * @static
 * @memberOf _
 * @since 2.0.0
 * @category Function
 * @param {Function} func The function to curry.
 * @param {number} [arity=func.length] The arity of `func`.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {Function} Returns the new curried function.
 * @example
 *
 * var abc = function(a, b, c) {
 *   return [a, b, c];
 * };
 *
 * var curried = _.curry(abc);
 *
 * curried(1)(2)(3);
 * // => [1, 2, 3]
 *
 * curried(1, 2)(3);
 * // => [1, 2, 3]
 *
 * curried(1, 2, 3);
 * // => [1, 2, 3]
 *
 * // Curried with placeholders.
 * curried(1)(_, 3)(2);
 * // => [1, 2, 3]
 */
function curry(func, arity, guard) {
  arity = guard ? undefined : arity;
  var result = createWrap(func, WRAP_CURRY_FLAG, undefined, undefined, undefined, undefined, undefined, arity);
  result.placeholder = curry.placeholder;
  return result;
}

// Assign default placeholders.
curry.placeholder = {};

module.exports = curry;


/***/ }),

/***/ "./node_modules/lodash/eq.js":
/*!***********************************!*\
  !*** ./node_modules/lodash/eq.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

module.exports = eq;


/***/ }),

/***/ "./node_modules/lodash/find.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/find.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var createFind = __webpack_require__(/*! ./_createFind */ "./node_modules/lodash/_createFind.js"),
    findIndex = __webpack_require__(/*! ./findIndex */ "./node_modules/lodash/findIndex.js");

/**
 * Iterates over elements of `collection`, returning the first element
 * `predicate` returns truthy for. The predicate is invoked with three
 * arguments: (value, index|key, collection).
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to inspect.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param {number} [fromIndex=0] The index to search from.
 * @returns {*} Returns the matched element, else `undefined`.
 * @example
 *
 * var users = [
 *   { 'user': 'barney',  'age': 36, 'active': true },
 *   { 'user': 'fred',    'age': 40, 'active': false },
 *   { 'user': 'pebbles', 'age': 1,  'active': true }
 * ];
 *
 * _.find(users, function(o) { return o.age < 40; });
 * // => object for 'barney'
 *
 * // The `_.matches` iteratee shorthand.
 * _.find(users, { 'age': 1, 'active': true });
 * // => object for 'pebbles'
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.find(users, ['active', false]);
 * // => object for 'fred'
 *
 * // The `_.property` iteratee shorthand.
 * _.find(users, 'active');
 * // => object for 'barney'
 */
var find = createFind(findIndex);

module.exports = find;


/***/ }),

/***/ "./node_modules/lodash/findIndex.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/findIndex.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseFindIndex = __webpack_require__(/*! ./_baseFindIndex */ "./node_modules/lodash/_baseFindIndex.js"),
    baseIteratee = __webpack_require__(/*! ./_baseIteratee */ "./node_modules/lodash/_baseIteratee.js"),
    toInteger = __webpack_require__(/*! ./toInteger */ "./node_modules/lodash/toInteger.js");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * This method is like `_.find` except that it returns the index of the first
 * element `predicate` returns truthy for instead of the element itself.
 *
 * @static
 * @memberOf _
 * @since 1.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param {number} [fromIndex=0] The index to search from.
 * @returns {number} Returns the index of the found element, else `-1`.
 * @example
 *
 * var users = [
 *   { 'user': 'barney',  'active': false },
 *   { 'user': 'fred',    'active': false },
 *   { 'user': 'pebbles', 'active': true }
 * ];
 *
 * _.findIndex(users, function(o) { return o.user == 'barney'; });
 * // => 0
 *
 * // The `_.matches` iteratee shorthand.
 * _.findIndex(users, { 'user': 'fred', 'active': false });
 * // => 1
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.findIndex(users, ['active', false]);
 * // => 0
 *
 * // The `_.property` iteratee shorthand.
 * _.findIndex(users, 'active');
 * // => 2
 */
function findIndex(array, predicate, fromIndex) {
  var length = array == null ? 0 : array.length;
  if (!length) {
    return -1;
  }
  var index = fromIndex == null ? 0 : toInteger(fromIndex);
  if (index < 0) {
    index = nativeMax(length + index, 0);
  }
  return baseFindIndex(array, baseIteratee(predicate, 3), index);
}

module.exports = findIndex;


/***/ }),

/***/ "./node_modules/lodash/flatten.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/flatten.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseFlatten = __webpack_require__(/*! ./_baseFlatten */ "./node_modules/lodash/_baseFlatten.js");

/**
 * Flattens `array` a single level deep.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to flatten.
 * @returns {Array} Returns the new flattened array.
 * @example
 *
 * _.flatten([1, [2, [3, [4]], 5]]);
 * // => [1, 2, [3, [4]], 5]
 */
function flatten(array) {
  var length = array == null ? 0 : array.length;
  return length ? baseFlatten(array, 1) : [];
}

module.exports = flatten;


/***/ }),

/***/ "./node_modules/lodash/flow.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/flow.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var createFlow = __webpack_require__(/*! ./_createFlow */ "./node_modules/lodash/_createFlow.js");

/**
 * Creates a function that returns the result of invoking the given functions
 * with the `this` binding of the created function, where each successive
 * invocation is supplied the return value of the previous.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Util
 * @param {...(Function|Function[])} [funcs] The functions to invoke.
 * @returns {Function} Returns the new composite function.
 * @see _.flowRight
 * @example
 *
 * function square(n) {
 *   return n * n;
 * }
 *
 * var addSquare = _.flow([_.add, square]);
 * addSquare(1, 2);
 * // => 9
 */
var flow = createFlow();

module.exports = flow;


/***/ }),

/***/ "./node_modules/lodash/forIn.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/forIn.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseFor = __webpack_require__(/*! ./_baseFor */ "./node_modules/lodash/_baseFor.js"),
    castFunction = __webpack_require__(/*! ./_castFunction */ "./node_modules/lodash/_castFunction.js"),
    keysIn = __webpack_require__(/*! ./keysIn */ "./node_modules/lodash/keysIn.js");

/**
 * Iterates over own and inherited enumerable string keyed properties of an
 * object and invokes `iteratee` for each property. The iteratee is invoked
 * with three arguments: (value, key, object). Iteratee functions may exit
 * iteration early by explicitly returning `false`.
 *
 * @static
 * @memberOf _
 * @since 0.3.0
 * @category Object
 * @param {Object} object The object to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Object} Returns `object`.
 * @see _.forInRight
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.forIn(new Foo, function(value, key) {
 *   console.log(key);
 * });
 * // => Logs 'a', 'b', then 'c' (iteration order is not guaranteed).
 */
function forIn(object, iteratee) {
  return object == null
    ? object
    : baseFor(object, castFunction(iteratee), keysIn);
}

module.exports = forIn;


/***/ }),

/***/ "./node_modules/lodash/get.js":
/*!************************************!*\
  !*** ./node_modules/lodash/get.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__(/*! ./_baseGet */ "./node_modules/lodash/_baseGet.js");

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get(object, path, defaultValue) {
  var result = object == null ? undefined : baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

module.exports = get;


/***/ }),

/***/ "./node_modules/lodash/has.js":
/*!************************************!*\
  !*** ./node_modules/lodash/has.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseHas = __webpack_require__(/*! ./_baseHas */ "./node_modules/lodash/_baseHas.js"),
    hasPath = __webpack_require__(/*! ./_hasPath */ "./node_modules/lodash/_hasPath.js");

/**
 * Checks if `path` is a direct property of `object`.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = { 'a': { 'b': 2 } };
 * var other = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.has(object, 'a');
 * // => true
 *
 * _.has(object, 'a.b');
 * // => true
 *
 * _.has(object, ['a', 'b']);
 * // => true
 *
 * _.has(other, 'a');
 * // => false
 */
function has(object, path) {
  return object != null && hasPath(object, path, baseHas);
}

module.exports = has;


/***/ }),

/***/ "./node_modules/lodash/hasIn.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/hasIn.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseHasIn = __webpack_require__(/*! ./_baseHasIn */ "./node_modules/lodash/_baseHasIn.js"),
    hasPath = __webpack_require__(/*! ./_hasPath */ "./node_modules/lodash/_hasPath.js");

/**
 * Checks if `path` is a direct or inherited property of `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.hasIn(object, 'a');
 * // => true
 *
 * _.hasIn(object, 'a.b');
 * // => true
 *
 * _.hasIn(object, ['a', 'b']);
 * // => true
 *
 * _.hasIn(object, 'b');
 * // => false
 */
function hasIn(object, path) {
  return object != null && hasPath(object, path, baseHasIn);
}

module.exports = hasIn;


/***/ }),

/***/ "./node_modules/lodash/identity.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/identity.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;


/***/ }),

/***/ "./node_modules/lodash/inRange.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/inRange.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseInRange = __webpack_require__(/*! ./_baseInRange */ "./node_modules/lodash/_baseInRange.js"),
    toFinite = __webpack_require__(/*! ./toFinite */ "./node_modules/lodash/toFinite.js"),
    toNumber = __webpack_require__(/*! ./toNumber */ "./node_modules/lodash/toNumber.js");

/**
 * Checks if `n` is between `start` and up to, but not including, `end`. If
 * `end` is not specified, it's set to `start` with `start` then set to `0`.
 * If `start` is greater than `end` the params are swapped to support
 * negative ranges.
 *
 * @static
 * @memberOf _
 * @since 3.3.0
 * @category Number
 * @param {number} number The number to check.
 * @param {number} [start=0] The start of the range.
 * @param {number} end The end of the range.
 * @returns {boolean} Returns `true` if `number` is in the range, else `false`.
 * @see _.range, _.rangeRight
 * @example
 *
 * _.inRange(3, 2, 4);
 * // => true
 *
 * _.inRange(4, 8);
 * // => true
 *
 * _.inRange(4, 2);
 * // => false
 *
 * _.inRange(2, 2);
 * // => false
 *
 * _.inRange(1.2, 2);
 * // => true
 *
 * _.inRange(5.2, 4);
 * // => false
 *
 * _.inRange(-3, -2, -6);
 * // => true
 */
function inRange(number, start, end) {
  start = toFinite(start);
  if (end === undefined) {
    end = start;
    start = 0;
  } else {
    end = toFinite(end);
  }
  number = toNumber(number);
  return baseInRange(number, start, end);
}

module.exports = inRange;


/***/ }),

/***/ "./node_modules/lodash/isArguments.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/isArguments.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsArguments = __webpack_require__(/*! ./_baseIsArguments */ "./node_modules/lodash/_baseIsArguments.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

module.exports = isArguments;


/***/ }),

/***/ "./node_modules/lodash/isArray.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/isArray.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;


/***/ }),

/***/ "./node_modules/lodash/isArrayLike.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/isArrayLike.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(/*! ./isFunction */ "./node_modules/lodash/isFunction.js"),
    isLength = __webpack_require__(/*! ./isLength */ "./node_modules/lodash/isLength.js");

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

module.exports = isArrayLike;


/***/ }),

/***/ "./node_modules/lodash/isArrayLikeObject.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash/isArrayLikeObject.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/lodash/isArrayLike.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

module.exports = isArrayLikeObject;


/***/ }),

/***/ "./node_modules/lodash/isBuffer.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isBuffer.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js"),
    stubFalse = __webpack_require__(/*! ./stubFalse */ "./node_modules/lodash/stubFalse.js");

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

module.exports = isBuffer;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/lodash/isFunction.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/isFunction.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js");

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;


/***/ }),

/***/ "./node_modules/lodash/isLength.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isLength.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;


/***/ }),

/***/ "./node_modules/lodash/isMap.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/isMap.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsMap = __webpack_require__(/*! ./_baseIsMap */ "./node_modules/lodash/_baseIsMap.js"),
    baseUnary = __webpack_require__(/*! ./_baseUnary */ "./node_modules/lodash/_baseUnary.js"),
    nodeUtil = __webpack_require__(/*! ./_nodeUtil */ "./node_modules/lodash/_nodeUtil.js");

/* Node.js helper references. */
var nodeIsMap = nodeUtil && nodeUtil.isMap;

/**
 * Checks if `value` is classified as a `Map` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 * @example
 *
 * _.isMap(new Map);
 * // => true
 *
 * _.isMap(new WeakMap);
 * // => false
 */
var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;

module.exports = isMap;


/***/ }),

/***/ "./node_modules/lodash/isObject.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isObject.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),

/***/ "./node_modules/lodash/isObjectLike.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/isObjectLike.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),

/***/ "./node_modules/lodash/isPlainObject.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/isPlainObject.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    getPrototype = __webpack_require__(/*! ./_getPrototype */ "./node_modules/lodash/_getPrototype.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var objectTag = '[object Object]';

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
    return false;
  }
  var proto = getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    funcToString.call(Ctor) == objectCtorString;
}

module.exports = isPlainObject;


/***/ }),

/***/ "./node_modules/lodash/isSet.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/isSet.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsSet = __webpack_require__(/*! ./_baseIsSet */ "./node_modules/lodash/_baseIsSet.js"),
    baseUnary = __webpack_require__(/*! ./_baseUnary */ "./node_modules/lodash/_baseUnary.js"),
    nodeUtil = __webpack_require__(/*! ./_nodeUtil */ "./node_modules/lodash/_nodeUtil.js");

/* Node.js helper references. */
var nodeIsSet = nodeUtil && nodeUtil.isSet;

/**
 * Checks if `value` is classified as a `Set` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 * @example
 *
 * _.isSet(new Set);
 * // => true
 *
 * _.isSet(new WeakSet);
 * // => false
 */
var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;

module.exports = isSet;


/***/ }),

/***/ "./node_modules/lodash/isSymbol.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isSymbol.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


/***/ }),

/***/ "./node_modules/lodash/isTypedArray.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/isTypedArray.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsTypedArray = __webpack_require__(/*! ./_baseIsTypedArray */ "./node_modules/lodash/_baseIsTypedArray.js"),
    baseUnary = __webpack_require__(/*! ./_baseUnary */ "./node_modules/lodash/_baseUnary.js"),
    nodeUtil = __webpack_require__(/*! ./_nodeUtil */ "./node_modules/lodash/_nodeUtil.js");

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

module.exports = isTypedArray;


/***/ }),

/***/ "./node_modules/lodash/keys.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/keys.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__(/*! ./_arrayLikeKeys */ "./node_modules/lodash/_arrayLikeKeys.js"),
    baseKeys = __webpack_require__(/*! ./_baseKeys */ "./node_modules/lodash/_baseKeys.js"),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/lodash/isArrayLike.js");

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

module.exports = keys;


/***/ }),

/***/ "./node_modules/lodash/keysIn.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/keysIn.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__(/*! ./_arrayLikeKeys */ "./node_modules/lodash/_arrayLikeKeys.js"),
    baseKeysIn = __webpack_require__(/*! ./_baseKeysIn */ "./node_modules/lodash/_baseKeysIn.js"),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/lodash/isArrayLike.js");

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}

module.exports = keysIn;


/***/ }),

/***/ "./node_modules/lodash/last.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/last.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Gets the last element of `array`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to query.
 * @returns {*} Returns the last element of `array`.
 * @example
 *
 * _.last([1, 2, 3]);
 * // => 3
 */
function last(array) {
  var length = array == null ? 0 : array.length;
  return length ? array[length - 1] : undefined;
}

module.exports = last;


/***/ }),

/***/ "./node_modules/lodash/memoize.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/memoize.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var MapCache = __webpack_require__(/*! ./_MapCache */ "./node_modules/lodash/_MapCache.js");

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}

// Expose `MapCache`.
memoize.Cache = MapCache;

module.exports = memoize;


/***/ }),

/***/ "./node_modules/lodash/merge.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/merge.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseMerge = __webpack_require__(/*! ./_baseMerge */ "./node_modules/lodash/_baseMerge.js"),
    createAssigner = __webpack_require__(/*! ./_createAssigner */ "./node_modules/lodash/_createAssigner.js");

/**
 * This method is like `_.assign` except that it recursively merges own and
 * inherited enumerable string keyed properties of source objects into the
 * destination object. Source properties that resolve to `undefined` are
 * skipped if a destination value exists. Array and plain object properties
 * are merged recursively. Other objects and value types are overridden by
 * assignment. Source objects are applied from left to right. Subsequent
 * sources overwrite property assignments of previous sources.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 0.5.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @example
 *
 * var object = {
 *   'a': [{ 'b': 2 }, { 'd': 4 }]
 * };
 *
 * var other = {
 *   'a': [{ 'c': 3 }, { 'e': 5 }]
 * };
 *
 * _.merge(object, other);
 * // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
 */
var merge = createAssigner(function(object, source, srcIndex) {
  baseMerge(object, source, srcIndex);
});

module.exports = merge;


/***/ }),

/***/ "./node_modules/lodash/noop.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/noop.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * This method returns `undefined`.
 *
 * @static
 * @memberOf _
 * @since 2.3.0
 * @category Util
 * @example
 *
 * _.times(2, _.noop);
 * // => [undefined, undefined]
 */
function noop() {
  // No operation performed.
}

module.exports = noop;


/***/ }),

/***/ "./node_modules/lodash/omit.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/omit.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayMap = __webpack_require__(/*! ./_arrayMap */ "./node_modules/lodash/_arrayMap.js"),
    baseClone = __webpack_require__(/*! ./_baseClone */ "./node_modules/lodash/_baseClone.js"),
    baseUnset = __webpack_require__(/*! ./_baseUnset */ "./node_modules/lodash/_baseUnset.js"),
    castPath = __webpack_require__(/*! ./_castPath */ "./node_modules/lodash/_castPath.js"),
    copyObject = __webpack_require__(/*! ./_copyObject */ "./node_modules/lodash/_copyObject.js"),
    customOmitClone = __webpack_require__(/*! ./_customOmitClone */ "./node_modules/lodash/_customOmitClone.js"),
    flatRest = __webpack_require__(/*! ./_flatRest */ "./node_modules/lodash/_flatRest.js"),
    getAllKeysIn = __webpack_require__(/*! ./_getAllKeysIn */ "./node_modules/lodash/_getAllKeysIn.js");

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1,
    CLONE_FLAT_FLAG = 2,
    CLONE_SYMBOLS_FLAG = 4;

/**
 * The opposite of `_.pick`; this method creates an object composed of the
 * own and inherited enumerable property paths of `object` that are not omitted.
 *
 * **Note:** This method is considerably slower than `_.pick`.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The source object.
 * @param {...(string|string[])} [paths] The property paths to omit.
 * @returns {Object} Returns the new object.
 * @example
 *
 * var object = { 'a': 1, 'b': '2', 'c': 3 };
 *
 * _.omit(object, ['a', 'c']);
 * // => { 'b': '2' }
 */
var omit = flatRest(function(object, paths) {
  var result = {};
  if (object == null) {
    return result;
  }
  var isDeep = false;
  paths = arrayMap(paths, function(path) {
    path = castPath(path, object);
    isDeep || (isDeep = path.length > 1);
    return path;
  });
  copyObject(object, getAllKeysIn(object), result);
  if (isDeep) {
    result = baseClone(result, CLONE_DEEP_FLAG | CLONE_FLAT_FLAG | CLONE_SYMBOLS_FLAG, customOmitClone);
  }
  var length = paths.length;
  while (length--) {
    baseUnset(result, paths[length]);
  }
  return result;
});

module.exports = omit;


/***/ }),

/***/ "./node_modules/lodash/pickBy.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/pickBy.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayMap = __webpack_require__(/*! ./_arrayMap */ "./node_modules/lodash/_arrayMap.js"),
    baseIteratee = __webpack_require__(/*! ./_baseIteratee */ "./node_modules/lodash/_baseIteratee.js"),
    basePickBy = __webpack_require__(/*! ./_basePickBy */ "./node_modules/lodash/_basePickBy.js"),
    getAllKeysIn = __webpack_require__(/*! ./_getAllKeysIn */ "./node_modules/lodash/_getAllKeysIn.js");

/**
 * Creates an object composed of the `object` properties `predicate` returns
 * truthy for. The predicate is invoked with two arguments: (value, key).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The source object.
 * @param {Function} [predicate=_.identity] The function invoked per property.
 * @returns {Object} Returns the new object.
 * @example
 *
 * var object = { 'a': 1, 'b': '2', 'c': 3 };
 *
 * _.pickBy(object, _.isNumber);
 * // => { 'a': 1, 'c': 3 }
 */
function pickBy(object, predicate) {
  if (object == null) {
    return {};
  }
  var props = arrayMap(getAllKeysIn(object), function(prop) {
    return [prop];
  });
  predicate = baseIteratee(predicate);
  return basePickBy(object, props, function(value, path) {
    return predicate(value, path[0]);
  });
}

module.exports = pickBy;


/***/ }),

/***/ "./node_modules/lodash/property.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/property.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseProperty = __webpack_require__(/*! ./_baseProperty */ "./node_modules/lodash/_baseProperty.js"),
    basePropertyDeep = __webpack_require__(/*! ./_basePropertyDeep */ "./node_modules/lodash/_basePropertyDeep.js"),
    isKey = __webpack_require__(/*! ./_isKey */ "./node_modules/lodash/_isKey.js"),
    toKey = __webpack_require__(/*! ./_toKey */ "./node_modules/lodash/_toKey.js");

/**
 * Creates a function that returns the value at `path` of a given object.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 * @example
 *
 * var objects = [
 *   { 'a': { 'b': 2 } },
 *   { 'a': { 'b': 1 } }
 * ];
 *
 * _.map(objects, _.property('a.b'));
 * // => [2, 1]
 *
 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
 * // => [1, 2]
 */
function property(path) {
  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
}

module.exports = property;


/***/ }),

/***/ "./node_modules/lodash/set.js":
/*!************************************!*\
  !*** ./node_modules/lodash/set.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseSet = __webpack_require__(/*! ./_baseSet */ "./node_modules/lodash/_baseSet.js");

/**
 * Sets the value at `path` of `object`. If a portion of `path` doesn't exist,
 * it's created. Arrays are created for missing index properties while objects
 * are created for all other missing properties. Use `_.setWith` to customize
 * `path` creation.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns `object`.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.set(object, 'a[0].b.c', 4);
 * console.log(object.a[0].b.c);
 * // => 4
 *
 * _.set(object, ['x', '0', 'y', 'z'], 5);
 * console.log(object.x[0].y.z);
 * // => 5
 */
function set(object, path, value) {
  return object == null ? object : baseSet(object, path, value);
}

module.exports = set;


/***/ }),

/***/ "./node_modules/lodash/stubArray.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/stubArray.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

module.exports = stubArray;


/***/ }),

/***/ "./node_modules/lodash/stubFalse.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/stubFalse.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),

/***/ "./node_modules/lodash/toFinite.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/toFinite.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toNumber = __webpack_require__(/*! ./toNumber */ "./node_modules/lodash/toNumber.js");

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0,
    MAX_INTEGER = 1.7976931348623157e+308;

/**
 * Converts `value` to a finite number.
 *
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */
function toFinite(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = toNumber(value);
  if (value === INFINITY || value === -INFINITY) {
    var sign = (value < 0 ? -1 : 1);
    return sign * MAX_INTEGER;
  }
  return value === value ? value : 0;
}

module.exports = toFinite;


/***/ }),

/***/ "./node_modules/lodash/toInteger.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/toInteger.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toFinite = __webpack_require__(/*! ./toFinite */ "./node_modules/lodash/toFinite.js");

/**
 * Converts `value` to an integer.
 *
 * **Note:** This method is loosely based on
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.toInteger(3.2);
 * // => 3
 *
 * _.toInteger(Number.MIN_VALUE);
 * // => 0
 *
 * _.toInteger(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toInteger('3.2');
 * // => 3
 */
function toInteger(value) {
  var result = toFinite(value),
      remainder = result % 1;

  return result === result ? (remainder ? result - remainder : result) : 0;
}

module.exports = toInteger;


/***/ }),

/***/ "./node_modules/lodash/toNumber.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/toNumber.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    isSymbol = __webpack_require__(/*! ./isSymbol */ "./node_modules/lodash/isSymbol.js");

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = toNumber;


/***/ }),

/***/ "./node_modules/lodash/toPlainObject.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/toPlainObject.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(/*! ./_copyObject */ "./node_modules/lodash/_copyObject.js"),
    keysIn = __webpack_require__(/*! ./keysIn */ "./node_modules/lodash/keysIn.js");

/**
 * Converts `value` to a plain object flattening inherited enumerable string
 * keyed properties of `value` to own properties of the plain object.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {Object} Returns the converted plain object.
 * @example
 *
 * function Foo() {
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.assign({ 'a': 1 }, new Foo);
 * // => { 'a': 1, 'b': 2 }
 *
 * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
 * // => { 'a': 1, 'b': 2, 'c': 3 }
 */
function toPlainObject(value) {
  return copyObject(value, keysIn(value));
}

module.exports = toPlainObject;


/***/ }),

/***/ "./node_modules/lodash/toString.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/toString.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseToString = __webpack_require__(/*! ./_baseToString */ "./node_modules/lodash/_baseToString.js");

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

module.exports = toString;


/***/ }),

/***/ "./node_modules/lodash/wrapperLodash.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/wrapperLodash.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var LazyWrapper = __webpack_require__(/*! ./_LazyWrapper */ "./node_modules/lodash/_LazyWrapper.js"),
    LodashWrapper = __webpack_require__(/*! ./_LodashWrapper */ "./node_modules/lodash/_LodashWrapper.js"),
    baseLodash = __webpack_require__(/*! ./_baseLodash */ "./node_modules/lodash/_baseLodash.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js"),
    wrapperClone = __webpack_require__(/*! ./_wrapperClone */ "./node_modules/lodash/_wrapperClone.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates a `lodash` object which wraps `value` to enable implicit method
 * chain sequences. Methods that operate on and return arrays, collections,
 * and functions can be chained together. Methods that retrieve a single value
 * or may return a primitive value will automatically end the chain sequence
 * and return the unwrapped value. Otherwise, the value must be unwrapped
 * with `_#value`.
 *
 * Explicit chain sequences, which must be unwrapped with `_#value`, may be
 * enabled using `_.chain`.
 *
 * The execution of chained methods is lazy, that is, it's deferred until
 * `_#value` is implicitly or explicitly called.
 *
 * Lazy evaluation allows several methods to support shortcut fusion.
 * Shortcut fusion is an optimization to merge iteratee calls; this avoids
 * the creation of intermediate arrays and can greatly reduce the number of
 * iteratee executions. Sections of a chain sequence qualify for shortcut
 * fusion if the section is applied to an array and iteratees accept only
 * one argument. The heuristic for whether a section qualifies for shortcut
 * fusion is subject to change.
 *
 * Chaining is supported in custom builds as long as the `_#value` method is
 * directly or indirectly included in the build.
 *
 * In addition to lodash methods, wrappers have `Array` and `String` methods.
 *
 * The wrapper `Array` methods are:
 * `concat`, `join`, `pop`, `push`, `shift`, `sort`, `splice`, and `unshift`
 *
 * The wrapper `String` methods are:
 * `replace` and `split`
 *
 * The wrapper methods that support shortcut fusion are:
 * `at`, `compact`, `drop`, `dropRight`, `dropWhile`, `filter`, `find`,
 * `findLast`, `head`, `initial`, `last`, `map`, `reject`, `reverse`, `slice`,
 * `tail`, `take`, `takeRight`, `takeRightWhile`, `takeWhile`, and `toArray`
 *
 * The chainable wrapper methods are:
 * `after`, `ary`, `assign`, `assignIn`, `assignInWith`, `assignWith`, `at`,
 * `before`, `bind`, `bindAll`, `bindKey`, `castArray`, `chain`, `chunk`,
 * `commit`, `compact`, `concat`, `conforms`, `constant`, `countBy`, `create`,
 * `curry`, `debounce`, `defaults`, `defaultsDeep`, `defer`, `delay`,
 * `difference`, `differenceBy`, `differenceWith`, `drop`, `dropRight`,
 * `dropRightWhile`, `dropWhile`, `extend`, `extendWith`, `fill`, `filter`,
 * `flatMap`, `flatMapDeep`, `flatMapDepth`, `flatten`, `flattenDeep`,
 * `flattenDepth`, `flip`, `flow`, `flowRight`, `fromPairs`, `functions`,
 * `functionsIn`, `groupBy`, `initial`, `intersection`, `intersectionBy`,
 * `intersectionWith`, `invert`, `invertBy`, `invokeMap`, `iteratee`, `keyBy`,
 * `keys`, `keysIn`, `map`, `mapKeys`, `mapValues`, `matches`, `matchesProperty`,
 * `memoize`, `merge`, `mergeWith`, `method`, `methodOf`, `mixin`, `negate`,
 * `nthArg`, `omit`, `omitBy`, `once`, `orderBy`, `over`, `overArgs`,
 * `overEvery`, `overSome`, `partial`, `partialRight`, `partition`, `pick`,
 * `pickBy`, `plant`, `property`, `propertyOf`, `pull`, `pullAll`, `pullAllBy`,
 * `pullAllWith`, `pullAt`, `push`, `range`, `rangeRight`, `rearg`, `reject`,
 * `remove`, `rest`, `reverse`, `sampleSize`, `set`, `setWith`, `shuffle`,
 * `slice`, `sort`, `sortBy`, `splice`, `spread`, `tail`, `take`, `takeRight`,
 * `takeRightWhile`, `takeWhile`, `tap`, `throttle`, `thru`, `toArray`,
 * `toPairs`, `toPairsIn`, `toPath`, `toPlainObject`, `transform`, `unary`,
 * `union`, `unionBy`, `unionWith`, `uniq`, `uniqBy`, `uniqWith`, `unset`,
 * `unshift`, `unzip`, `unzipWith`, `update`, `updateWith`, `values`,
 * `valuesIn`, `without`, `wrap`, `xor`, `xorBy`, `xorWith`, `zip`,
 * `zipObject`, `zipObjectDeep`, and `zipWith`
 *
 * The wrapper methods that are **not** chainable by default are:
 * `add`, `attempt`, `camelCase`, `capitalize`, `ceil`, `clamp`, `clone`,
 * `cloneDeep`, `cloneDeepWith`, `cloneWith`, `conformsTo`, `deburr`,
 * `defaultTo`, `divide`, `each`, `eachRight`, `endsWith`, `eq`, `escape`,
 * `escapeRegExp`, `every`, `find`, `findIndex`, `findKey`, `findLast`,
 * `findLastIndex`, `findLastKey`, `first`, `floor`, `forEach`, `forEachRight`,
 * `forIn`, `forInRight`, `forOwn`, `forOwnRight`, `get`, `gt`, `gte`, `has`,
 * `hasIn`, `head`, `identity`, `includes`, `indexOf`, `inRange`, `invoke`,
 * `isArguments`, `isArray`, `isArrayBuffer`, `isArrayLike`, `isArrayLikeObject`,
 * `isBoolean`, `isBuffer`, `isDate`, `isElement`, `isEmpty`, `isEqual`,
 * `isEqualWith`, `isError`, `isFinite`, `isFunction`, `isInteger`, `isLength`,
 * `isMap`, `isMatch`, `isMatchWith`, `isNaN`, `isNative`, `isNil`, `isNull`,
 * `isNumber`, `isObject`, `isObjectLike`, `isPlainObject`, `isRegExp`,
 * `isSafeInteger`, `isSet`, `isString`, `isUndefined`, `isTypedArray`,
 * `isWeakMap`, `isWeakSet`, `join`, `kebabCase`, `last`, `lastIndexOf`,
 * `lowerCase`, `lowerFirst`, `lt`, `lte`, `max`, `maxBy`, `mean`, `meanBy`,
 * `min`, `minBy`, `multiply`, `noConflict`, `noop`, `now`, `nth`, `pad`,
 * `padEnd`, `padStart`, `parseInt`, `pop`, `random`, `reduce`, `reduceRight`,
 * `repeat`, `result`, `round`, `runInContext`, `sample`, `shift`, `size`,
 * `snakeCase`, `some`, `sortedIndex`, `sortedIndexBy`, `sortedLastIndex`,
 * `sortedLastIndexBy`, `startCase`, `startsWith`, `stubArray`, `stubFalse`,
 * `stubObject`, `stubString`, `stubTrue`, `subtract`, `sum`, `sumBy`,
 * `template`, `times`, `toFinite`, `toInteger`, `toJSON`, `toLength`,
 * `toLower`, `toNumber`, `toSafeInteger`, `toString`, `toUpper`, `trim`,
 * `trimEnd`, `trimStart`, `truncate`, `unescape`, `uniqueId`, `upperCase`,
 * `upperFirst`, `value`, and `words`
 *
 * @name _
 * @constructor
 * @category Seq
 * @param {*} value The value to wrap in a `lodash` instance.
 * @returns {Object} Returns the new `lodash` wrapper instance.
 * @example
 *
 * function square(n) {
 *   return n * n;
 * }
 *
 * var wrapped = _([1, 2, 3]);
 *
 * // Returns an unwrapped value.
 * wrapped.reduce(_.add);
 * // => 6
 *
 * // Returns a wrapped value.
 * var squares = wrapped.map(square);
 *
 * _.isArray(squares);
 * // => false
 *
 * _.isArray(squares.value());
 * // => true
 */
function lodash(value) {
  if (isObjectLike(value) && !isArray(value) && !(value instanceof LazyWrapper)) {
    if (value instanceof LodashWrapper) {
      return value;
    }
    if (hasOwnProperty.call(value, '__wrapped__')) {
      return wrapperClone(value);
    }
  }
  return new LodashWrapper(value);
}

// Ensure wrappers are instances of `baseLodash`.
lodash.prototype = baseLodash.prototype;
lodash.prototype.constructor = lodash;

module.exports = lodash;


/***/ }),

/***/ "./node_modules/path-to-regexp/index.js":
/*!**********************************************!*\
  !*** ./node_modules/path-to-regexp/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Expose `pathToRegexp`.
 */
module.exports = pathToRegexp
module.exports.parse = parse
module.exports.compile = compile
module.exports.tokensToFunction = tokensToFunction
module.exports.tokensToRegExp = tokensToRegExp

/**
 * Default configs.
 */
var DEFAULT_DELIMITER = '/'
var DEFAULT_DELIMITERS = './'

/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
var PATH_REGEXP = new RegExp([
  // Match escaped characters that would otherwise appear in future matches.
  // This allows the user to escape special characters that won't transform.
  '(\\\\.)',
  // Match Express-style parameters and un-named parameters with a prefix
  // and optional suffixes. Matches appear as:
  //
  // ":test(\\d+)?" => ["test", "\d+", undefined, "?"]
  // "(\\d+)"  => [undefined, undefined, "\d+", undefined]
  '(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?'
].join('|'), 'g')

/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */
function parse (str, options) {
  var tokens = []
  var key = 0
  var index = 0
  var path = ''
  var defaultDelimiter = (options && options.delimiter) || DEFAULT_DELIMITER
  var delimiters = (options && options.delimiters) || DEFAULT_DELIMITERS
  var pathEscaped = false
  var res

  while ((res = PATH_REGEXP.exec(str)) !== null) {
    var m = res[0]
    var escaped = res[1]
    var offset = res.index
    path += str.slice(index, offset)
    index = offset + m.length

    // Ignore already escaped sequences.
    if (escaped) {
      path += escaped[1]
      pathEscaped = true
      continue
    }

    var prev = ''
    var next = str[index]
    var name = res[2]
    var capture = res[3]
    var group = res[4]
    var modifier = res[5]

    if (!pathEscaped && path.length) {
      var k = path.length - 1

      if (delimiters.indexOf(path[k]) > -1) {
        prev = path[k]
        path = path.slice(0, k)
      }
    }

    // Push the current path onto the tokens.
    if (path) {
      tokens.push(path)
      path = ''
      pathEscaped = false
    }

    var partial = prev !== '' && next !== undefined && next !== prev
    var repeat = modifier === '+' || modifier === '*'
    var optional = modifier === '?' || modifier === '*'
    var delimiter = prev || defaultDelimiter
    var pattern = capture || group

    tokens.push({
      name: name || key++,
      prefix: prev,
      delimiter: delimiter,
      optional: optional,
      repeat: repeat,
      partial: partial,
      pattern: pattern ? escapeGroup(pattern) : '[^' + escapeString(delimiter) + ']+?'
    })
  }

  // Push any remaining characters.
  if (path || index < str.length) {
    tokens.push(path + str.substr(index))
  }

  return tokens
}

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */
function compile (str, options) {
  return tokensToFunction(parse(str, options))
}

/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction (tokens) {
  // Compile all the tokens into regexps.
  var matches = new Array(tokens.length)

  // Compile all the patterns before compilation.
  for (var i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$')
    }
  }

  return function (data, options) {
    var path = ''
    var encode = (options && options.encode) || encodeURIComponent

    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i]

      if (typeof token === 'string') {
        path += token
        continue
      }

      var value = data ? data[token.name] : undefined
      var segment

      if (Array.isArray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but got array')
        }

        if (value.length === 0) {
          if (token.optional) continue

          throw new TypeError('Expected "' + token.name + '" to not be empty')
        }

        for (var j = 0; j < value.length; j++) {
          segment = encode(value[j], token)

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '"')
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment
        }

        continue
      }

      if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
        segment = encode(String(value), token)

        if (!matches[i].test(segment)) {
          throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but got "' + segment + '"')
        }

        path += token.prefix + segment
        continue
      }

      if (token.optional) {
        // Prepend partial segment prefixes.
        if (token.partial) path += token.prefix

        continue
      }

      throw new TypeError('Expected "' + token.name + '" to be ' + (token.repeat ? 'an array' : 'a string'))
    }

    return path
  }
}

/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */
function escapeString (str) {
  return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, '\\$1')
}

/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */
function escapeGroup (group) {
  return group.replace(/([=!:$/()])/g, '\\$1')
}

/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */
function flags (options) {
  return options && options.sensitive ? '' : 'i'
}

/**
 * Pull out keys from a regexp.
 *
 * @param  {!RegExp} path
 * @param  {Array=}  keys
 * @return {!RegExp}
 */
function regexpToRegexp (path, keys) {
  if (!keys) return path

  // Use a negative lookahead to match only capturing groups.
  var groups = path.source.match(/\((?!\?)/g)

  if (groups) {
    for (var i = 0; i < groups.length; i++) {
      keys.push({
        name: i,
        prefix: null,
        delimiter: null,
        optional: false,
        repeat: false,
        partial: false,
        pattern: null
      })
    }
  }

  return path
}

/**
 * Transform an array into a regexp.
 *
 * @param  {!Array}  path
 * @param  {Array=}  keys
 * @param  {Object=} options
 * @return {!RegExp}
 */
function arrayToRegexp (path, keys, options) {
  var parts = []

  for (var i = 0; i < path.length; i++) {
    parts.push(pathToRegexp(path[i], keys, options).source)
  }

  return new RegExp('(?:' + parts.join('|') + ')', flags(options))
}

/**
 * Create a path regexp from string input.
 *
 * @param  {string}  path
 * @param  {Array=}  keys
 * @param  {Object=} options
 * @return {!RegExp}
 */
function stringToRegexp (path, keys, options) {
  return tokensToRegExp(parse(path, options), keys, options)
}

/**
 * Expose a function for taking tokens and returning a RegExp.
 *
 * @param  {!Array}  tokens
 * @param  {Array=}  keys
 * @param  {Object=} options
 * @return {!RegExp}
 */
function tokensToRegExp (tokens, keys, options) {
  options = options || {}

  var strict = options.strict
  var start = options.start !== false
  var end = options.end !== false
  var delimiter = escapeString(options.delimiter || DEFAULT_DELIMITER)
  var delimiters = options.delimiters || DEFAULT_DELIMITERS
  var endsWith = [].concat(options.endsWith || []).map(escapeString).concat('$').join('|')
  var route = start ? '^' : ''
  var isEndDelimited = tokens.length === 0

  // Iterate over the tokens and create our regexp string.
  for (var i = 0; i < tokens.length; i++) {
    var token = tokens[i]

    if (typeof token === 'string') {
      route += escapeString(token)
      isEndDelimited = i === tokens.length - 1 && delimiters.indexOf(token[token.length - 1]) > -1
    } else {
      var capture = token.repeat
        ? '(?:' + token.pattern + ')(?:' + escapeString(token.delimiter) + '(?:' + token.pattern + '))*'
        : token.pattern

      if (keys) keys.push(token)

      if (token.optional) {
        if (token.partial) {
          route += escapeString(token.prefix) + '(' + capture + ')?'
        } else {
          route += '(?:' + escapeString(token.prefix) + '(' + capture + '))?'
        }
      } else {
        route += escapeString(token.prefix) + '(' + capture + ')'
      }
    }
  }

  if (end) {
    if (!strict) route += '(?:' + delimiter + ')?'

    route += endsWith === '$' ? '$' : '(?=' + endsWith + ')'
  } else {
    if (!strict) route += '(?:' + delimiter + '(?=' + endsWith + '))?'
    if (!isEndDelimited) route += '(?=' + delimiter + '|' + endsWith + ')'
  }

  return new RegExp(route, flags(options))
}

/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 *
 * @param  {(string|RegExp|Array)} path
 * @param  {Array=}                keys
 * @param  {Object=}               options
 * @return {!RegExp}
 */
function pathToRegexp (path, keys, options) {
  if (path instanceof RegExp) {
    return regexpToRegexp(path, keys)
  }

  if (Array.isArray(path)) {
    return arrayToRegexp(/** @type {!Array} */ (path), keys, options)
  }

  return stringToRegexp(/** @type {string} */ (path), keys, options)
}


/***/ }),

/***/ "./node_modules/react-immutable-proptypes/dist/ImmutablePropTypes.js":
/*!***************************************************************************!*\
  !*** ./node_modules/react-immutable-proptypes/dist/ImmutablePropTypes.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * This is a straight rip-off of the React.js ReactPropTypes.js proptype validators,
 * modified to make it possible to validate Immutable.js data.
 *     ImmutableTypes.listOf is patterned after React.PropTypes.arrayOf, but for Immutable.List
 *     ImmutableTypes.shape  is based on React.PropTypes.shape, but for any Immutable.Iterable
 */


var Immutable = __webpack_require__(/*! immutable */ "immutable");

var ANONYMOUS = "<<anonymous>>";

var ImmutablePropTypes = {
  listOf: createListOfTypeChecker,
  mapOf: createMapOfTypeChecker,
  orderedMapOf: createOrderedMapOfTypeChecker,
  setOf: createSetOfTypeChecker,
  orderedSetOf: createOrderedSetOfTypeChecker,
  stackOf: createStackOfTypeChecker,
  iterableOf: createIterableOfTypeChecker,
  recordOf: createRecordOfTypeChecker,
  shape: createShapeChecker,
  contains: createShapeChecker,
  mapContains: createMapContainsChecker,
  // Primitive Types
  list: createImmutableTypeChecker("List", Immutable.List.isList),
  map: createImmutableTypeChecker("Map", Immutable.Map.isMap),
  orderedMap: createImmutableTypeChecker("OrderedMap", Immutable.OrderedMap.isOrderedMap),
  set: createImmutableTypeChecker("Set", Immutable.Set.isSet),
  orderedSet: createImmutableTypeChecker("OrderedSet", Immutable.OrderedSet.isOrderedSet),
  stack: createImmutableTypeChecker("Stack", Immutable.Stack.isStack),
  seq: createImmutableTypeChecker("Seq", Immutable.Seq.isSeq),
  record: createImmutableTypeChecker("Record", function (isRecord) {
    return isRecord instanceof Immutable.Record;
  }),
  iterable: createImmutableTypeChecker("Iterable", Immutable.Iterable.isIterable)
};

function getPropType(propValue) {
  var propType = typeof propValue;
  if (Array.isArray(propValue)) {
    return "array";
  }
  if (propValue instanceof RegExp) {
    // Old webkits (at least until Android 4.0) return 'function' rather than
    // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
    // passes PropTypes.object.
    return "object";
  }
  if (propValue instanceof Immutable.Iterable) {
    return "Immutable." + propValue.toSource().split(" ")[0];
  }
  return propType;
}

function createChainableTypeChecker(validate) {
  function checkType(isRequired, props, propName, componentName, location, propFullName) {
    for (var _len = arguments.length, rest = Array(_len > 6 ? _len - 6 : 0), _key = 6; _key < _len; _key++) {
      rest[_key - 6] = arguments[_key];
    }

    propFullName = propFullName || propName;
    componentName = componentName || ANONYMOUS;
    if (props[propName] == null) {
      var locationName = location;
      if (isRequired) {
        return new Error("Required " + locationName + " `" + propFullName + "` was not specified in " + ("`" + componentName + "`."));
      }
    } else {
      return validate.apply(undefined, [props, propName, componentName, location, propFullName].concat(rest));
    }
  }

  var chainedCheckType = checkType.bind(null, false);
  chainedCheckType.isRequired = checkType.bind(null, true);

  return chainedCheckType;
}

function createImmutableTypeChecker(immutableClassName, immutableClassTypeValidator) {
  function validate(props, propName, componentName, location, propFullName) {
    var propValue = props[propName];
    if (!immutableClassTypeValidator(propValue)) {
      var propType = getPropType(propValue);
      return new Error("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `" + immutableClassName + "`."));
    }
    return null;
  }
  return createChainableTypeChecker(validate);
}

function createIterableTypeChecker(typeChecker, immutableClassName, immutableClassTypeValidator) {

  function validate(props, propName, componentName, location, propFullName) {
    for (var _len = arguments.length, rest = Array(_len > 5 ? _len - 5 : 0), _key = 5; _key < _len; _key++) {
      rest[_key - 5] = arguments[_key];
    }

    var propValue = props[propName];
    if (!immutableClassTypeValidator(propValue)) {
      var locationName = location;
      var propType = getPropType(propValue);
      return new Error("Invalid " + locationName + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an Immutable.js " + immutableClassName + "."));
    }

    if (typeof typeChecker !== "function") {
      return new Error("Invalid typeChecker supplied to `" + componentName + "` " + ("for propType `" + propFullName + "`, expected a function."));
    }

    var propValues = propValue.toArray();
    for (var i = 0, len = propValues.length; i < len; i++) {
      var error = typeChecker.apply(undefined, [propValues, i, componentName, location, "" + propFullName + "[" + i + "]"].concat(rest));
      if (error instanceof Error) {
        return error;
      }
    }
  }
  return createChainableTypeChecker(validate);
}

function createKeysTypeChecker(typeChecker) {

  function validate(props, propName, componentName, location, propFullName) {
    for (var _len = arguments.length, rest = Array(_len > 5 ? _len - 5 : 0), _key = 5; _key < _len; _key++) {
      rest[_key - 5] = arguments[_key];
    }

    var propValue = props[propName];
    if (typeof typeChecker !== "function") {
      return new Error("Invalid keysTypeChecker (optional second argument) supplied to `" + componentName + "` " + ("for propType `" + propFullName + "`, expected a function."));
    }

    var keys = propValue.keySeq().toArray();
    for (var i = 0, len = keys.length; i < len; i++) {
      var error = typeChecker.apply(undefined, [keys, i, componentName, location, "" + propFullName + " -> key(" + keys[i] + ")"].concat(rest));
      if (error instanceof Error) {
        return error;
      }
    }
  }
  return createChainableTypeChecker(validate);
}

function createListOfTypeChecker(typeChecker) {
  return createIterableTypeChecker(typeChecker, "List", Immutable.List.isList);
}

function createMapOfTypeCheckerFactory(valuesTypeChecker, keysTypeChecker, immutableClassName, immutableClassTypeValidator) {
  function validate() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return createIterableTypeChecker(valuesTypeChecker, immutableClassName, immutableClassTypeValidator).apply(undefined, args) || keysTypeChecker && createKeysTypeChecker(keysTypeChecker).apply(undefined, args);
  }

  return createChainableTypeChecker(validate);
}

function createMapOfTypeChecker(valuesTypeChecker, keysTypeChecker) {
  return createMapOfTypeCheckerFactory(valuesTypeChecker, keysTypeChecker, "Map", Immutable.Map.isMap);
}

function createOrderedMapOfTypeChecker(valuesTypeChecker, keysTypeChecker) {
  return createMapOfTypeCheckerFactory(valuesTypeChecker, keysTypeChecker, "OrderedMap", Immutable.OrderedMap.isOrderedMap);
}

function createSetOfTypeChecker(typeChecker) {
  return createIterableTypeChecker(typeChecker, "Set", Immutable.Set.isSet);
}

function createOrderedSetOfTypeChecker(typeChecker) {
  return createIterableTypeChecker(typeChecker, "OrderedSet", Immutable.OrderedSet.isOrderedSet);
}

function createStackOfTypeChecker(typeChecker) {
  return createIterableTypeChecker(typeChecker, "Stack", Immutable.Stack.isStack);
}

function createIterableOfTypeChecker(typeChecker) {
  return createIterableTypeChecker(typeChecker, "Iterable", Immutable.Iterable.isIterable);
}

function createRecordOfTypeChecker(recordKeys) {
  function validate(props, propName, componentName, location, propFullName) {
    for (var _len = arguments.length, rest = Array(_len > 5 ? _len - 5 : 0), _key = 5; _key < _len; _key++) {
      rest[_key - 5] = arguments[_key];
    }

    var propValue = props[propName];
    if (!(propValue instanceof Immutable.Record)) {
      var propType = getPropType(propValue);
      var locationName = location;
      return new Error("Invalid " + locationName + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected an Immutable.js Record."));
    }
    for (var key in recordKeys) {
      var checker = recordKeys[key];
      if (!checker) {
        continue;
      }
      var mutablePropValue = propValue.toObject();
      var error = checker.apply(undefined, [mutablePropValue, key, componentName, location, "" + propFullName + "." + key].concat(rest));
      if (error) {
        return error;
      }
    }
  }
  return createChainableTypeChecker(validate);
}

// there is some irony in the fact that shapeTypes is a standard hash and not an immutable collection
function createShapeTypeChecker(shapeTypes) {
  var immutableClassName = arguments[1] === undefined ? "Iterable" : arguments[1];
  var immutableClassTypeValidator = arguments[2] === undefined ? Immutable.Iterable.isIterable : arguments[2];

  function validate(props, propName, componentName, location, propFullName) {
    for (var _len = arguments.length, rest = Array(_len > 5 ? _len - 5 : 0), _key = 5; _key < _len; _key++) {
      rest[_key - 5] = arguments[_key];
    }

    var propValue = props[propName];
    if (!immutableClassTypeValidator(propValue)) {
      var propType = getPropType(propValue);
      var locationName = location;
      return new Error("Invalid " + locationName + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected an Immutable.js " + immutableClassName + "."));
    }
    var mutablePropValue = propValue.toObject();
    for (var key in shapeTypes) {
      var checker = shapeTypes[key];
      if (!checker) {
        continue;
      }
      var error = checker.apply(undefined, [mutablePropValue, key, componentName, location, "" + propFullName + "." + key].concat(rest));
      if (error) {
        return error;
      }
    }
  }
  return createChainableTypeChecker(validate);
}

function createShapeChecker(shapeTypes) {
  return createShapeTypeChecker(shapeTypes);
}

function createMapContainsChecker(shapeTypes) {
  return createShapeTypeChecker(shapeTypes, "Map", Immutable.Map.isMap);
}

module.exports = ImmutablePropTypes;

/***/ }),

/***/ "./node_modules/react-router-redux/lib/actions.js":
/*!********************************************************!*\
  !*** ./node_modules/react-router-redux/lib/actions.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * This action type will be dispatched by the history actions below.
 * If you're writing a middleware to watch for navigation events, be sure to
 * look for actions of this type.
 */
var CALL_HISTORY_METHOD = exports.CALL_HISTORY_METHOD = '@@router/CALL_HISTORY_METHOD';

function updateLocation(method) {
  return function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return {
      type: CALL_HISTORY_METHOD,
      payload: { method: method, args: args }
    };
  };
}

/**
 * These actions correspond to the history API.
 * The associated routerMiddleware will capture these events before they get to
 * your reducer and reissue them as the matching function on your history.
 */
var push = exports.push = updateLocation('push');
var replace = exports.replace = updateLocation('replace');
var go = exports.go = updateLocation('go');
var goBack = exports.goBack = updateLocation('goBack');
var goForward = exports.goForward = updateLocation('goForward');

var routerActions = exports.routerActions = { push: push, replace: replace, go: go, goBack: goBack, goForward: goForward };

/***/ }),

/***/ "./node_modules/react-router-redux/lib/index.js":
/*!******************************************************!*\
  !*** ./node_modules/react-router-redux/lib/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.routerMiddleware = exports.routerActions = exports.goForward = exports.goBack = exports.go = exports.replace = exports.push = exports.CALL_HISTORY_METHOD = exports.routerReducer = exports.LOCATION_CHANGE = exports.syncHistoryWithStore = undefined;

var _reducer = __webpack_require__(/*! ./reducer */ "./node_modules/react-router-redux/lib/reducer.js");

Object.defineProperty(exports, 'LOCATION_CHANGE', {
  enumerable: true,
  get: function get() {
    return _reducer.LOCATION_CHANGE;
  }
});
Object.defineProperty(exports, 'routerReducer', {
  enumerable: true,
  get: function get() {
    return _reducer.routerReducer;
  }
});

var _actions = __webpack_require__(/*! ./actions */ "./node_modules/react-router-redux/lib/actions.js");

Object.defineProperty(exports, 'CALL_HISTORY_METHOD', {
  enumerable: true,
  get: function get() {
    return _actions.CALL_HISTORY_METHOD;
  }
});
Object.defineProperty(exports, 'push', {
  enumerable: true,
  get: function get() {
    return _actions.push;
  }
});
Object.defineProperty(exports, 'replace', {
  enumerable: true,
  get: function get() {
    return _actions.replace;
  }
});
Object.defineProperty(exports, 'go', {
  enumerable: true,
  get: function get() {
    return _actions.go;
  }
});
Object.defineProperty(exports, 'goBack', {
  enumerable: true,
  get: function get() {
    return _actions.goBack;
  }
});
Object.defineProperty(exports, 'goForward', {
  enumerable: true,
  get: function get() {
    return _actions.goForward;
  }
});
Object.defineProperty(exports, 'routerActions', {
  enumerable: true,
  get: function get() {
    return _actions.routerActions;
  }
});

var _sync = __webpack_require__(/*! ./sync */ "./node_modules/react-router-redux/lib/sync.js");

var _sync2 = _interopRequireDefault(_sync);

var _middleware = __webpack_require__(/*! ./middleware */ "./node_modules/react-router-redux/lib/middleware.js");

var _middleware2 = _interopRequireDefault(_middleware);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

exports.syncHistoryWithStore = _sync2['default'];
exports.routerMiddleware = _middleware2['default'];

/***/ }),

/***/ "./node_modules/react-router-redux/lib/middleware.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-router-redux/lib/middleware.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = routerMiddleware;

var _actions = __webpack_require__(/*! ./actions */ "./node_modules/react-router-redux/lib/actions.js");

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
 * This middleware captures CALL_HISTORY_METHOD actions to redirect to the
 * provided history object. This will prevent these actions from reaching your
 * reducer or any middleware that comes after this one.
 */
function routerMiddleware(history) {
  return function () {
    return function (next) {
      return function (action) {
        if (action.type !== _actions.CALL_HISTORY_METHOD) {
          return next(action);
        }

        var _action$payload = action.payload,
            method = _action$payload.method,
            args = _action$payload.args;

        history[method].apply(history, _toConsumableArray(args));
      };
    };
  };
}

/***/ }),

/***/ "./node_modules/react-router-redux/lib/reducer.js":
/*!********************************************************!*\
  !*** ./node_modules/react-router-redux/lib/reducer.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.routerReducer = routerReducer;
/**
 * This action type will be dispatched when your history
 * receives a location change.
 */
var LOCATION_CHANGE = exports.LOCATION_CHANGE = '@@router/LOCATION_CHANGE';

var initialState = {
  locationBeforeTransitions: null
};

/**
 * This reducer will update the state with the most recent location history
 * has transitioned to. This may not be in sync with the router, particularly
 * if you have asynchronously-loaded routes, so reading from and relying on
 * this state is discouraged.
 */
function routerReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;

  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      type = _ref.type,
      payload = _ref.payload;

  if (type === LOCATION_CHANGE) {
    return _extends({}, state, { locationBeforeTransitions: payload });
  }

  return state;
}

/***/ }),

/***/ "./node_modules/react-router-redux/lib/sync.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-router-redux/lib/sync.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports['default'] = syncHistoryWithStore;

var _reducer = __webpack_require__(/*! ./reducer */ "./node_modules/react-router-redux/lib/reducer.js");

var defaultSelectLocationState = function defaultSelectLocationState(state) {
  return state.routing;
};

/**
 * This function synchronizes your history state with the Redux store.
 * Location changes flow from history to the store. An enhanced history is
 * returned with a listen method that responds to store updates for location.
 *
 * When this history is provided to the router, this means the location data
 * will flow like this:
 * history.push -> store.dispatch -> enhancedHistory.listen -> router
 * This ensures that when the store state changes due to a replay or other
 * event, the router will be updated appropriately and can transition to the
 * correct router state.
 */
function syncHistoryWithStore(history, store) {
  var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      _ref$selectLocationSt = _ref.selectLocationState,
      selectLocationState = _ref$selectLocationSt === undefined ? defaultSelectLocationState : _ref$selectLocationSt,
      _ref$adjustUrlOnRepla = _ref.adjustUrlOnReplay,
      adjustUrlOnReplay = _ref$adjustUrlOnRepla === undefined ? true : _ref$adjustUrlOnRepla;

  // Ensure that the reducer is mounted on the store and functioning properly.
  if (typeof selectLocationState(store.getState()) === 'undefined') {
    throw new Error('Expected the routing state to be available either as `state.routing` ' + 'or as the custom expression you can specify as `selectLocationState` ' + 'in the `syncHistoryWithStore()` options. ' + 'Ensure you have added the `routerReducer` to your store\'s ' + 'reducers via `combineReducers` or whatever method you use to isolate ' + 'your reducers.');
  }

  var initialLocation = void 0;
  var isTimeTraveling = void 0;
  var unsubscribeFromStore = void 0;
  var unsubscribeFromHistory = void 0;
  var currentLocation = void 0;

  // What does the store say about current location?
  var getLocationInStore = function getLocationInStore(useInitialIfEmpty) {
    var locationState = selectLocationState(store.getState());
    return locationState.locationBeforeTransitions || (useInitialIfEmpty ? initialLocation : undefined);
  };

  // Init initialLocation with potential location in store
  initialLocation = getLocationInStore();

  // If the store is replayed, update the URL in the browser to match.
  if (adjustUrlOnReplay) {
    var handleStoreChange = function handleStoreChange() {
      var locationInStore = getLocationInStore(true);
      if (currentLocation === locationInStore || initialLocation === locationInStore) {
        return;
      }

      // Update address bar to reflect store state
      isTimeTraveling = true;
      currentLocation = locationInStore;
      history.transitionTo(_extends({}, locationInStore, {
        action: 'PUSH'
      }));
      isTimeTraveling = false;
    };

    unsubscribeFromStore = store.subscribe(handleStoreChange);
    handleStoreChange();
  }

  // Whenever location changes, dispatch an action to get it in the store
  var handleLocationChange = function handleLocationChange(location) {
    // ... unless we just caused that location change
    if (isTimeTraveling) {
      return;
    }

    // Remember where we are
    currentLocation = location;

    // Are we being called for the first time?
    if (!initialLocation) {
      // Remember as a fallback in case state is reset
      initialLocation = location;

      // Respect persisted location, if any
      if (getLocationInStore()) {
        return;
      }
    }

    // Tell the store to update by dispatching an action
    store.dispatch({
      type: _reducer.LOCATION_CHANGE,
      payload: location
    });
  };
  unsubscribeFromHistory = history.listen(handleLocationChange);

  // History 3.x doesn't call listen synchronously, so fire the initial location change ourselves
  if (history.getCurrentLocation) {
    handleLocationChange(history.getCurrentLocation());
  }

  // The enhanced history uses store as source of truth
  return _extends({}, history, {
    // The listeners are subscribed to the store instead of history
    listen: function listen(listener) {
      // Copy of last location.
      var lastPublishedLocation = getLocationInStore(true);

      // Keep track of whether we unsubscribed, as Redux store
      // only applies changes in subscriptions on next dispatch
      var unsubscribed = false;
      var unsubscribeFromStore = store.subscribe(function () {
        var currentLocation = getLocationInStore(true);
        if (currentLocation === lastPublishedLocation) {
          return;
        }
        lastPublishedLocation = currentLocation;
        if (!unsubscribed) {
          listener(lastPublishedLocation);
        }
      });

      // History 2.x listeners expect a synchronous call. Make the first call to the
      // listener after subscribing to the store, in case the listener causes a
      // location change (e.g. when it redirects)
      if (!history.getCurrentLocation) {
        listener(lastPublishedLocation);
      }

      // Let user unsubscribe later
      return function () {
        unsubscribed = true;
        unsubscribeFromStore();
      };
    },


    // It also provides a way to destroy internal listeners
    unsubscribe: function unsubscribe() {
      if (adjustUrlOnReplay) {
        unsubscribeFromStore();
      }
      unsubscribeFromHistory();
    }
  });
}

/***/ }),

/***/ "./node_modules/redux-batched-actions/lib/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/redux-batched-actions/lib/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.batchActions = batchActions;
exports.enableBatching = enableBatching;
exports.batchDispatchMiddleware = batchDispatchMiddleware;
var BATCH = exports.BATCH = 'BATCHING_REDUCER.BATCH';

function batchActions(actions) {
	var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : BATCH;

	return { type: type, meta: { batch: true }, payload: actions };
}

function enableBatching(reduce) {
	return function batchingReducer(state, action) {
		if (action && action.meta && action.meta.batch) {
			return action.payload.reduce(batchingReducer, state);
		}
		return reduce(state, action);
	};
}

function batchDispatchMiddleware(store) {
	function dispatchChildActions(store, action) {
		if (action.meta && action.meta.batch) {
			action.payload.forEach(function (childAction) {
				dispatchChildActions(store, childAction);
			});
		} else {
			store.dispatch(action);
		}
	}

	return function (next) {
		return function (action) {
			dispatchChildActions(store, action);
			next(action);
		};
	};
}

/***/ }),

/***/ "./node_modules/redux-batched-subscribe/lib/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/redux-batched-subscribe/lib/index.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.batchedSubscribe = batchedSubscribe;

function batchedSubscribe(batch) {
  if (typeof batch !== 'function') {
    throw new Error('Expected batch to be a function.');
  }

  var currentListeners = [];
  var nextListeners = currentListeners;

  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice();
    }
  }

  function subscribe(listener) {
    if (typeof listener !== 'function') {
      throw new Error('Expected listener to be a function.');
    }

    var isSubscribed = true;

    ensureCanMutateNextListeners();
    nextListeners.push(listener);

    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }

      isSubscribed = false;

      ensureCanMutateNextListeners();
      var index = nextListeners.indexOf(listener);
      nextListeners.splice(index, 1);
    };
  }

  function notifyListeners() {
    var listeners = currentListeners = nextListeners;
    for (var i = 0; i < listeners.length; i++) {
      listeners[i]();
    }
  }

  function notifyListenersBatched() {
    batch(notifyListeners);
  }

  return function (next) {
    return function () {
      var store = next.apply(undefined, arguments);
      var subscribeImmediate = store.subscribe;

      function dispatch() {
        var res = store.dispatch.apply(store, arguments);
        notifyListenersBatched();
        return res;
      }

      return _extends({}, store, {
        dispatch: dispatch,
        subscribe: subscribe,
        subscribeImmediate: subscribeImmediate
      });
    };
  };
}

/***/ }),

/***/ "./node_modules/redux-saga/es/effects.js":
/*!***********************************************!*\
  !*** ./node_modules/redux-saga/es/effects.js ***!
  \***********************************************/
/*! exports provided: take, takem, put, all, race, call, apply, cps, fork, spawn, join, cancel, select, actionChannel, cancelled, flush, getContext, setContext, takeEvery, takeLatest, throttle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_io__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/io */ "./node_modules/redux-saga/es/internal/io.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "take", function() { return _internal_io__WEBPACK_IMPORTED_MODULE_0__["take"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "takem", function() { return _internal_io__WEBPACK_IMPORTED_MODULE_0__["takem"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "put", function() { return _internal_io__WEBPACK_IMPORTED_MODULE_0__["put"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "all", function() { return _internal_io__WEBPACK_IMPORTED_MODULE_0__["all"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "race", function() { return _internal_io__WEBPACK_IMPORTED_MODULE_0__["race"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "call", function() { return _internal_io__WEBPACK_IMPORTED_MODULE_0__["call"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "apply", function() { return _internal_io__WEBPACK_IMPORTED_MODULE_0__["apply"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cps", function() { return _internal_io__WEBPACK_IMPORTED_MODULE_0__["cps"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fork", function() { return _internal_io__WEBPACK_IMPORTED_MODULE_0__["fork"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "spawn", function() { return _internal_io__WEBPACK_IMPORTED_MODULE_0__["spawn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "join", function() { return _internal_io__WEBPACK_IMPORTED_MODULE_0__["join"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cancel", function() { return _internal_io__WEBPACK_IMPORTED_MODULE_0__["cancel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "select", function() { return _internal_io__WEBPACK_IMPORTED_MODULE_0__["select"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "actionChannel", function() { return _internal_io__WEBPACK_IMPORTED_MODULE_0__["actionChannel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cancelled", function() { return _internal_io__WEBPACK_IMPORTED_MODULE_0__["cancelled"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "flush", function() { return _internal_io__WEBPACK_IMPORTED_MODULE_0__["flush"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getContext", function() { return _internal_io__WEBPACK_IMPORTED_MODULE_0__["getContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setContext", function() { return _internal_io__WEBPACK_IMPORTED_MODULE_0__["setContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "takeEvery", function() { return _internal_io__WEBPACK_IMPORTED_MODULE_0__["takeEvery"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "takeLatest", function() { return _internal_io__WEBPACK_IMPORTED_MODULE_0__["takeLatest"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "throttle", function() { return _internal_io__WEBPACK_IMPORTED_MODULE_0__["throttle"]; });



/***/ }),

/***/ "./node_modules/redux-saga/es/internal/buffers.js":
/*!********************************************************!*\
  !*** ./node_modules/redux-saga/es/internal/buffers.js ***!
  \********************************************************/
/*! exports provided: BUFFER_OVERFLOW, buffers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BUFFER_OVERFLOW", function() { return BUFFER_OVERFLOW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buffers", function() { return buffers; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./node_modules/redux-saga/es/internal/utils.js");


var BUFFER_OVERFLOW = "Channel's Buffer overflow!";

var ON_OVERFLOW_THROW = 1;
var ON_OVERFLOW_DROP = 2;
var ON_OVERFLOW_SLIDE = 3;
var ON_OVERFLOW_EXPAND = 4;

var zeroBuffer = { isEmpty: _utils__WEBPACK_IMPORTED_MODULE_0__["kTrue"], put: _utils__WEBPACK_IMPORTED_MODULE_0__["noop"], take: _utils__WEBPACK_IMPORTED_MODULE_0__["noop"] };

function ringBuffer() {
  var limit = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;
  var overflowAction = arguments[1];

  var arr = new Array(limit);
  var length = 0;
  var pushIndex = 0;
  var popIndex = 0;

  var push = function push(it) {
    arr[pushIndex] = it;
    pushIndex = (pushIndex + 1) % limit;
    length++;
  };

  var take = function take() {
    if (length != 0) {
      var it = arr[popIndex];
      arr[popIndex] = null;
      length--;
      popIndex = (popIndex + 1) % limit;
      return it;
    }
  };

  var flush = function flush() {
    var items = [];
    while (length) {
      items.push(take());
    }
    return items;
  };

  return {
    isEmpty: function isEmpty() {
      return length == 0;
    },
    put: function put(it) {
      if (length < limit) {
        push(it);
      } else {
        var doubledLimit = void 0;
        switch (overflowAction) {
          case ON_OVERFLOW_THROW:
            throw new Error(BUFFER_OVERFLOW);
          case ON_OVERFLOW_SLIDE:
            arr[pushIndex] = it;
            pushIndex = (pushIndex + 1) % limit;
            popIndex = pushIndex;
            break;
          case ON_OVERFLOW_EXPAND:
            doubledLimit = 2 * limit;

            arr = flush();

            length = arr.length;
            pushIndex = arr.length;
            popIndex = 0;

            arr.length = doubledLimit;
            limit = doubledLimit;

            push(it);
            break;
          default:
          // DROP
        }
      }
    },
    take: take,
    flush: flush
  };
}

var buffers = {
  none: function none() {
    return zeroBuffer;
  },
  fixed: function fixed(limit) {
    return ringBuffer(limit, ON_OVERFLOW_THROW);
  },
  dropping: function dropping(limit) {
    return ringBuffer(limit, ON_OVERFLOW_DROP);
  },
  sliding: function sliding(limit) {
    return ringBuffer(limit, ON_OVERFLOW_SLIDE);
  },
  expanding: function expanding(initialSize) {
    return ringBuffer(initialSize, ON_OVERFLOW_EXPAND);
  }
};

/***/ }),

/***/ "./node_modules/redux-saga/es/internal/channel.js":
/*!********************************************************!*\
  !*** ./node_modules/redux-saga/es/internal/channel.js ***!
  \********************************************************/
/*! exports provided: END, isEnd, emitter, INVALID_BUFFER, UNDEFINED_INPUT_ERROR, channel, eventChannel, stdChannel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "END", function() { return END; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEnd", function() { return isEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "emitter", function() { return emitter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INVALID_BUFFER", function() { return INVALID_BUFFER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNDEFINED_INPUT_ERROR", function() { return UNDEFINED_INPUT_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "channel", function() { return channel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eventChannel", function() { return eventChannel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stdChannel", function() { return stdChannel; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./node_modules/redux-saga/es/internal/utils.js");
/* harmony import */ var _buffers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./buffers */ "./node_modules/redux-saga/es/internal/buffers.js");
/* harmony import */ var _scheduler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scheduler */ "./node_modules/redux-saga/es/internal/scheduler.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };





var CHANNEL_END_TYPE = '@@redux-saga/CHANNEL_END';
var END = { type: CHANNEL_END_TYPE };
var isEnd = function isEnd(a) {
  return a && a.type === CHANNEL_END_TYPE;
};

function emitter() {
  var subscribers = [];

  function subscribe(sub) {
    subscribers.push(sub);
    return function () {
      return Object(_utils__WEBPACK_IMPORTED_MODULE_0__["remove"])(subscribers, sub);
    };
  }

  function emit(item) {
    var arr = subscribers.slice();
    for (var i = 0, len = arr.length; i < len; i++) {
      arr[i](item);
    }
  }

  return {
    subscribe: subscribe,
    emit: emit
  };
}

var INVALID_BUFFER = 'invalid buffer passed to channel factory function';
var UNDEFINED_INPUT_ERROR = 'Saga was provided with an undefined action';

if (true) {
  UNDEFINED_INPUT_ERROR += '\nHints:\n    - check that your Action Creator returns a non-undefined value\n    - if the Saga was started using runSaga, check that your subscribe source provides the action to its listeners\n  ';
}

function channel() {
  var buffer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _buffers__WEBPACK_IMPORTED_MODULE_1__["buffers"].fixed();

  var closed = false;
  var takers = [];

  Object(_utils__WEBPACK_IMPORTED_MODULE_0__["check"])(buffer, _utils__WEBPACK_IMPORTED_MODULE_0__["is"].buffer, INVALID_BUFFER);

  function checkForbiddenStates() {
    if (closed && takers.length) {
      throw Object(_utils__WEBPACK_IMPORTED_MODULE_0__["internalErr"])('Cannot have a closed channel with pending takers');
    }
    if (takers.length && !buffer.isEmpty()) {
      throw Object(_utils__WEBPACK_IMPORTED_MODULE_0__["internalErr"])('Cannot have pending takers with non empty buffer');
    }
  }

  function put(input) {
    checkForbiddenStates();
    Object(_utils__WEBPACK_IMPORTED_MODULE_0__["check"])(input, _utils__WEBPACK_IMPORTED_MODULE_0__["is"].notUndef, UNDEFINED_INPUT_ERROR);
    if (closed) {
      return;
    }
    if (!takers.length) {
      return buffer.put(input);
    }
    for (var i = 0; i < takers.length; i++) {
      var cb = takers[i];
      if (!cb[_utils__WEBPACK_IMPORTED_MODULE_0__["MATCH"]] || cb[_utils__WEBPACK_IMPORTED_MODULE_0__["MATCH"]](input)) {
        takers.splice(i, 1);
        return cb(input);
      }
    }
  }

  function take(cb) {
    checkForbiddenStates();
    Object(_utils__WEBPACK_IMPORTED_MODULE_0__["check"])(cb, _utils__WEBPACK_IMPORTED_MODULE_0__["is"].func, "channel.take's callback must be a function");

    if (closed && buffer.isEmpty()) {
      cb(END);
    } else if (!buffer.isEmpty()) {
      cb(buffer.take());
    } else {
      takers.push(cb);
      cb.cancel = function () {
        return Object(_utils__WEBPACK_IMPORTED_MODULE_0__["remove"])(takers, cb);
      };
    }
  }

  function flush(cb) {
    checkForbiddenStates(); // TODO: check if some new state should be forbidden now
    Object(_utils__WEBPACK_IMPORTED_MODULE_0__["check"])(cb, _utils__WEBPACK_IMPORTED_MODULE_0__["is"].func, "channel.flush' callback must be a function");
    if (closed && buffer.isEmpty()) {
      cb(END);
      return;
    }
    cb(buffer.flush());
  }

  function close() {
    checkForbiddenStates();
    if (!closed) {
      closed = true;
      if (takers.length) {
        var arr = takers;
        takers = [];
        for (var i = 0, len = arr.length; i < len; i++) {
          arr[i](END);
        }
      }
    }
  }

  return {
    take: take,
    put: put,
    flush: flush,
    close: close,
    get __takers__() {
      return takers;
    },
    get __closed__() {
      return closed;
    }
  };
}

function eventChannel(subscribe) {
  var buffer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _buffers__WEBPACK_IMPORTED_MODULE_1__["buffers"].none();
  var matcher = arguments[2];

  /**
    should be if(typeof matcher !== undefined) instead?
    see PR #273 for a background discussion
  **/
  if (arguments.length > 2) {
    Object(_utils__WEBPACK_IMPORTED_MODULE_0__["check"])(matcher, _utils__WEBPACK_IMPORTED_MODULE_0__["is"].func, 'Invalid match function passed to eventChannel');
  }

  var chan = channel(buffer);
  var close = function close() {
    if (!chan.__closed__) {
      if (unsubscribe) {
        unsubscribe();
      }
      chan.close();
    }
  };
  var unsubscribe = subscribe(function (input) {
    if (isEnd(input)) {
      close();
      return;
    }
    if (matcher && !matcher(input)) {
      return;
    }
    chan.put(input);
  });
  if (chan.__closed__) {
    unsubscribe();
  }

  if (!_utils__WEBPACK_IMPORTED_MODULE_0__["is"].func(unsubscribe)) {
    throw new Error('in eventChannel: subscribe should return a function to unsubscribe');
  }

  return {
    take: chan.take,
    flush: chan.flush,
    close: close
  };
}

function stdChannel(subscribe) {
  var chan = eventChannel(function (cb) {
    return subscribe(function (input) {
      if (input[_utils__WEBPACK_IMPORTED_MODULE_0__["SAGA_ACTION"]]) {
        cb(input);
        return;
      }
      Object(_scheduler__WEBPACK_IMPORTED_MODULE_2__["asap"])(function () {
        return cb(input);
      });
    });
  });

  return _extends({}, chan, {
    take: function take(cb, matcher) {
      if (arguments.length > 1) {
        Object(_utils__WEBPACK_IMPORTED_MODULE_0__["check"])(matcher, _utils__WEBPACK_IMPORTED_MODULE_0__["is"].func, "channel.take's matcher argument must be a function");
        cb[_utils__WEBPACK_IMPORTED_MODULE_0__["MATCH"]] = matcher;
      }
      chan.take(cb);
    }
  });
}

/***/ }),

/***/ "./node_modules/redux-saga/es/internal/io.js":
/*!***************************************************!*\
  !*** ./node_modules/redux-saga/es/internal/io.js ***!
  \***************************************************/
/*! exports provided: take, takem, put, all, race, call, apply, cps, fork, spawn, join, cancel, select, actionChannel, cancelled, flush, getContext, setContext, takeEvery, takeLatest, throttle, asEffect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "take", function() { return take; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "takem", function() { return takem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "put", function() { return put; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "all", function() { return all; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "race", function() { return race; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "call", function() { return call; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apply", function() { return apply; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cps", function() { return cps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fork", function() { return fork; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spawn", function() { return spawn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "join", function() { return join; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cancel", function() { return cancel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "select", function() { return select; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionChannel", function() { return actionChannel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cancelled", function() { return cancelled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flush", function() { return flush; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getContext", function() { return getContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setContext", function() { return setContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "takeEvery", function() { return takeEvery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "takeLatest", function() { return takeLatest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throttle", function() { return throttle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "asEffect", function() { return asEffect; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./node_modules/redux-saga/es/internal/utils.js");
/* harmony import */ var _sagaHelpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sagaHelpers */ "./node_modules/redux-saga/es/internal/sagaHelpers/index.js");



var IO = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["sym"])('IO');
var TAKE = 'TAKE';
var PUT = 'PUT';
var ALL = 'ALL';
var RACE = 'RACE';
var CALL = 'CALL';
var CPS = 'CPS';
var FORK = 'FORK';
var JOIN = 'JOIN';
var CANCEL = 'CANCEL';
var SELECT = 'SELECT';
var ACTION_CHANNEL = 'ACTION_CHANNEL';
var CANCELLED = 'CANCELLED';
var FLUSH = 'FLUSH';
var GET_CONTEXT = 'GET_CONTEXT';
var SET_CONTEXT = 'SET_CONTEXT';

var TEST_HINT = '\n(HINT: if you are getting this errors in tests, consider using createMockTask from redux-saga/utils)';

var effect = function effect(type, payload) {
  var _ref;

  return _ref = {}, _ref[IO] = true, _ref[type] = payload, _ref;
};

function take() {
  var patternOrChannel = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '*';

  if (arguments.length) {
    Object(_utils__WEBPACK_IMPORTED_MODULE_0__["check"])(arguments[0], _utils__WEBPACK_IMPORTED_MODULE_0__["is"].notUndef, 'take(patternOrChannel): patternOrChannel is undefined');
  }
  if (_utils__WEBPACK_IMPORTED_MODULE_0__["is"].pattern(patternOrChannel)) {
    return effect(TAKE, { pattern: patternOrChannel });
  }
  if (_utils__WEBPACK_IMPORTED_MODULE_0__["is"].channel(patternOrChannel)) {
    return effect(TAKE, { channel: patternOrChannel });
  }
  throw new Error('take(patternOrChannel): argument ' + String(patternOrChannel) + ' is not valid channel or a valid pattern');
}

take.maybe = function () {
  var eff = take.apply(undefined, arguments);
  eff[TAKE].maybe = true;
  return eff;
};

var takem = /*#__PURE__*/Object(_utils__WEBPACK_IMPORTED_MODULE_0__["deprecate"])(take.maybe, /*#__PURE__*/Object(_utils__WEBPACK_IMPORTED_MODULE_0__["updateIncentive"])('takem', 'take.maybe'));

function put(channel, action) {
  if (arguments.length > 1) {
    Object(_utils__WEBPACK_IMPORTED_MODULE_0__["check"])(channel, _utils__WEBPACK_IMPORTED_MODULE_0__["is"].notUndef, 'put(channel, action): argument channel is undefined');
    Object(_utils__WEBPACK_IMPORTED_MODULE_0__["check"])(channel, _utils__WEBPACK_IMPORTED_MODULE_0__["is"].channel, 'put(channel, action): argument ' + channel + ' is not a valid channel');
    Object(_utils__WEBPACK_IMPORTED_MODULE_0__["check"])(action, _utils__WEBPACK_IMPORTED_MODULE_0__["is"].notUndef, 'put(channel, action): argument action is undefined');
  } else {
    Object(_utils__WEBPACK_IMPORTED_MODULE_0__["check"])(channel, _utils__WEBPACK_IMPORTED_MODULE_0__["is"].notUndef, 'put(action): argument action is undefined');
    action = channel;
    channel = null;
  }
  return effect(PUT, { channel: channel, action: action });
}

put.resolve = function () {
  var eff = put.apply(undefined, arguments);
  eff[PUT].resolve = true;
  return eff;
};

put.sync = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["deprecate"])(put.resolve, Object(_utils__WEBPACK_IMPORTED_MODULE_0__["updateIncentive"])('put.sync', 'put.resolve'));

function all(effects) {
  return effect(ALL, effects);
}

function race(effects) {
  return effect(RACE, effects);
}

function getFnCallDesc(meth, fn, args) {
  Object(_utils__WEBPACK_IMPORTED_MODULE_0__["check"])(fn, _utils__WEBPACK_IMPORTED_MODULE_0__["is"].notUndef, meth + ': argument fn is undefined');

  var context = null;
  if (_utils__WEBPACK_IMPORTED_MODULE_0__["is"].array(fn)) {
    var _fn = fn;
    context = _fn[0];
    fn = _fn[1];
  } else if (fn.fn) {
    var _fn2 = fn;
    context = _fn2.context;
    fn = _fn2.fn;
  }
  if (context && _utils__WEBPACK_IMPORTED_MODULE_0__["is"].string(fn) && _utils__WEBPACK_IMPORTED_MODULE_0__["is"].func(context[fn])) {
    fn = context[fn];
  }
  Object(_utils__WEBPACK_IMPORTED_MODULE_0__["check"])(fn, _utils__WEBPACK_IMPORTED_MODULE_0__["is"].func, meth + ': argument ' + fn + ' is not a function');

  return { context: context, fn: fn, args: args };
}

function call(fn) {
  for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  return effect(CALL, getFnCallDesc('call', fn, args));
}

function apply(context, fn) {
  var args = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

  return effect(CALL, getFnCallDesc('apply', { context: context, fn: fn }, args));
}

function cps(fn) {
  for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    args[_key2 - 1] = arguments[_key2];
  }

  return effect(CPS, getFnCallDesc('cps', fn, args));
}

function fork(fn) {
  for (var _len3 = arguments.length, args = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
    args[_key3 - 1] = arguments[_key3];
  }

  return effect(FORK, getFnCallDesc('fork', fn, args));
}

function spawn(fn) {
  for (var _len4 = arguments.length, args = Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
    args[_key4 - 1] = arguments[_key4];
  }

  var eff = fork.apply(undefined, [fn].concat(args));
  eff[FORK].detached = true;
  return eff;
}

function join() {
  for (var _len5 = arguments.length, tasks = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
    tasks[_key5] = arguments[_key5];
  }

  if (tasks.length > 1) {
    return all(tasks.map(function (t) {
      return join(t);
    }));
  }
  var task = tasks[0];
  Object(_utils__WEBPACK_IMPORTED_MODULE_0__["check"])(task, _utils__WEBPACK_IMPORTED_MODULE_0__["is"].notUndef, 'join(task): argument task is undefined');
  Object(_utils__WEBPACK_IMPORTED_MODULE_0__["check"])(task, _utils__WEBPACK_IMPORTED_MODULE_0__["is"].task, 'join(task): argument ' + task + ' is not a valid Task object ' + TEST_HINT);
  return effect(JOIN, task);
}

function cancel() {
  for (var _len6 = arguments.length, tasks = Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
    tasks[_key6] = arguments[_key6];
  }

  if (tasks.length > 1) {
    return all(tasks.map(function (t) {
      return cancel(t);
    }));
  }
  var task = tasks[0];
  if (tasks.length === 1) {
    Object(_utils__WEBPACK_IMPORTED_MODULE_0__["check"])(task, _utils__WEBPACK_IMPORTED_MODULE_0__["is"].notUndef, 'cancel(task): argument task is undefined');
    Object(_utils__WEBPACK_IMPORTED_MODULE_0__["check"])(task, _utils__WEBPACK_IMPORTED_MODULE_0__["is"].task, 'cancel(task): argument ' + task + ' is not a valid Task object ' + TEST_HINT);
  }
  return effect(CANCEL, task || _utils__WEBPACK_IMPORTED_MODULE_0__["SELF_CANCELLATION"]);
}

function select(selector) {
  for (var _len7 = arguments.length, args = Array(_len7 > 1 ? _len7 - 1 : 0), _key7 = 1; _key7 < _len7; _key7++) {
    args[_key7 - 1] = arguments[_key7];
  }

  if (arguments.length === 0) {
    selector = _utils__WEBPACK_IMPORTED_MODULE_0__["ident"];
  } else {
    Object(_utils__WEBPACK_IMPORTED_MODULE_0__["check"])(selector, _utils__WEBPACK_IMPORTED_MODULE_0__["is"].notUndef, 'select(selector,[...]): argument selector is undefined');
    Object(_utils__WEBPACK_IMPORTED_MODULE_0__["check"])(selector, _utils__WEBPACK_IMPORTED_MODULE_0__["is"].func, 'select(selector,[...]): argument ' + selector + ' is not a function');
  }
  return effect(SELECT, { selector: selector, args: args });
}

/**
  channel(pattern, [buffer])    => creates an event channel for store actions
**/
function actionChannel(pattern, buffer) {
  Object(_utils__WEBPACK_IMPORTED_MODULE_0__["check"])(pattern, _utils__WEBPACK_IMPORTED_MODULE_0__["is"].notUndef, 'actionChannel(pattern,...): argument pattern is undefined');
  if (arguments.length > 1) {
    Object(_utils__WEBPACK_IMPORTED_MODULE_0__["check"])(buffer, _utils__WEBPACK_IMPORTED_MODULE_0__["is"].notUndef, 'actionChannel(pattern, buffer): argument buffer is undefined');
    Object(_utils__WEBPACK_IMPORTED_MODULE_0__["check"])(buffer, _utils__WEBPACK_IMPORTED_MODULE_0__["is"].buffer, 'actionChannel(pattern, buffer): argument ' + buffer + ' is not a valid buffer');
  }
  return effect(ACTION_CHANNEL, { pattern: pattern, buffer: buffer });
}

function cancelled() {
  return effect(CANCELLED, {});
}

function flush(channel) {
  Object(_utils__WEBPACK_IMPORTED_MODULE_0__["check"])(channel, _utils__WEBPACK_IMPORTED_MODULE_0__["is"].channel, 'flush(channel): argument ' + channel + ' is not valid channel');
  return effect(FLUSH, channel);
}

function getContext(prop) {
  Object(_utils__WEBPACK_IMPORTED_MODULE_0__["check"])(prop, _utils__WEBPACK_IMPORTED_MODULE_0__["is"].string, 'getContext(prop): argument ' + prop + ' is not a string');
  return effect(GET_CONTEXT, prop);
}

function setContext(props) {
  Object(_utils__WEBPACK_IMPORTED_MODULE_0__["check"])(props, _utils__WEBPACK_IMPORTED_MODULE_0__["is"].object, Object(_utils__WEBPACK_IMPORTED_MODULE_0__["createSetContextWarning"])(null, props));
  return effect(SET_CONTEXT, props);
}

function takeEvery(patternOrChannel, worker) {
  for (var _len8 = arguments.length, args = Array(_len8 > 2 ? _len8 - 2 : 0), _key8 = 2; _key8 < _len8; _key8++) {
    args[_key8 - 2] = arguments[_key8];
  }

  return fork.apply(undefined, [_sagaHelpers__WEBPACK_IMPORTED_MODULE_1__["takeEveryHelper"], patternOrChannel, worker].concat(args));
}

function takeLatest(patternOrChannel, worker) {
  for (var _len9 = arguments.length, args = Array(_len9 > 2 ? _len9 - 2 : 0), _key9 = 2; _key9 < _len9; _key9++) {
    args[_key9 - 2] = arguments[_key9];
  }

  return fork.apply(undefined, [_sagaHelpers__WEBPACK_IMPORTED_MODULE_1__["takeLatestHelper"], patternOrChannel, worker].concat(args));
}

function throttle(ms, pattern, worker) {
  for (var _len10 = arguments.length, args = Array(_len10 > 3 ? _len10 - 3 : 0), _key10 = 3; _key10 < _len10; _key10++) {
    args[_key10 - 3] = arguments[_key10];
  }

  return fork.apply(undefined, [_sagaHelpers__WEBPACK_IMPORTED_MODULE_1__["throttleHelper"], ms, pattern, worker].concat(args));
}

var createAsEffectType = function createAsEffectType(type) {
  return function (effect) {
    return effect && effect[IO] && effect[type];
  };
};

var asEffect = {
  take: createAsEffectType(TAKE),
  put: createAsEffectType(PUT),
  all: createAsEffectType(ALL),
  race: createAsEffectType(RACE),
  call: createAsEffectType(CALL),
  cps: createAsEffectType(CPS),
  fork: createAsEffectType(FORK),
  join: createAsEffectType(JOIN),
  cancel: createAsEffectType(CANCEL),
  select: createAsEffectType(SELECT),
  actionChannel: createAsEffectType(ACTION_CHANNEL),
  cancelled: createAsEffectType(CANCELLED),
  flush: createAsEffectType(FLUSH),
  getContext: createAsEffectType(GET_CONTEXT),
  setContext: createAsEffectType(SET_CONTEXT)
};

/***/ }),

/***/ "./node_modules/redux-saga/es/internal/sagaHelpers/fsmIterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/redux-saga/es/internal/sagaHelpers/fsmIterator.js ***!
  \************************************************************************/
/*! exports provided: qEnd, safeName, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "qEnd", function() { return qEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "safeName", function() { return safeName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return fsmIterator; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./node_modules/redux-saga/es/internal/utils.js");


var done = { done: true, value: undefined };
var qEnd = {};

function safeName(patternOrChannel) {
  if (_utils__WEBPACK_IMPORTED_MODULE_0__["is"].channel(patternOrChannel)) {
    return 'channel';
  } else if (Array.isArray(patternOrChannel)) {
    return String(patternOrChannel.map(function (entry) {
      return String(entry);
    }));
  } else {
    return String(patternOrChannel);
  }
}

function fsmIterator(fsm, q0) {
  var name = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'iterator';

  var updateState = void 0,
      qNext = q0;

  function next(arg, error) {
    if (qNext === qEnd) {
      return done;
    }

    if (error) {
      qNext = qEnd;
      throw error;
    } else {
      updateState && updateState(arg);

      var _fsm$qNext = fsm[qNext](),
          q = _fsm$qNext[0],
          output = _fsm$qNext[1],
          _updateState = _fsm$qNext[2];

      qNext = q;
      updateState = _updateState;
      return qNext === qEnd ? done : output;
    }
  }

  return Object(_utils__WEBPACK_IMPORTED_MODULE_0__["makeIterator"])(next, function (error) {
    return next(null, error);
  }, name, true);
}

/***/ }),

/***/ "./node_modules/redux-saga/es/internal/sagaHelpers/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/redux-saga/es/internal/sagaHelpers/index.js ***!
  \******************************************************************/
/*! exports provided: takeEvery, takeLatest, throttle, takeEveryHelper, takeLatestHelper, throttleHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "takeEvery", function() { return takeEvery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "takeLatest", function() { return takeLatest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throttle", function() { return throttle; });
/* harmony import */ var _takeEvery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./takeEvery */ "./node_modules/redux-saga/es/internal/sagaHelpers/takeEvery.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "takeEveryHelper", function() { return _takeEvery__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _takeLatest__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./takeLatest */ "./node_modules/redux-saga/es/internal/sagaHelpers/takeLatest.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "takeLatestHelper", function() { return _takeLatest__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _throttle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./throttle */ "./node_modules/redux-saga/es/internal/sagaHelpers/throttle.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "throttleHelper", function() { return _throttle__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils */ "./node_modules/redux-saga/es/internal/utils.js");






var deprecationWarning = function deprecationWarning(helperName) {
  return 'import { ' + helperName + ' } from \'redux-saga\' has been deprecated in favor of import { ' + helperName + ' } from \'redux-saga/effects\'.\nThe latter will not work with yield*, as helper effects are wrapped automatically for you in fork effect.\nTherefore yield ' + helperName + ' will return task descriptor to your saga and execute next lines of code.';
};

var takeEvery = /*#__PURE__*/Object(_utils__WEBPACK_IMPORTED_MODULE_3__["deprecate"])(_takeEvery__WEBPACK_IMPORTED_MODULE_0__["default"], /*#__PURE__*/deprecationWarning('takeEvery'));
var takeLatest = /*#__PURE__*/Object(_utils__WEBPACK_IMPORTED_MODULE_3__["deprecate"])(_takeLatest__WEBPACK_IMPORTED_MODULE_1__["default"], /*#__PURE__*/deprecationWarning('takeLatest'));
var throttle = /*#__PURE__*/Object(_utils__WEBPACK_IMPORTED_MODULE_3__["deprecate"])(_throttle__WEBPACK_IMPORTED_MODULE_2__["default"], /*#__PURE__*/deprecationWarning('throttle'));



/***/ }),

/***/ "./node_modules/redux-saga/es/internal/sagaHelpers/takeEvery.js":
/*!**********************************************************************!*\
  !*** ./node_modules/redux-saga/es/internal/sagaHelpers/takeEvery.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return takeEvery; });
/* harmony import */ var _fsmIterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fsmIterator */ "./node_modules/redux-saga/es/internal/sagaHelpers/fsmIterator.js");
/* harmony import */ var _io__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../io */ "./node_modules/redux-saga/es/internal/io.js");
/* harmony import */ var _channel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../channel */ "./node_modules/redux-saga/es/internal/channel.js");




function takeEvery(patternOrChannel, worker) {
  for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  var yTake = { done: false, value: Object(_io__WEBPACK_IMPORTED_MODULE_1__["take"])(patternOrChannel) };
  var yFork = function yFork(ac) {
    return { done: false, value: _io__WEBPACK_IMPORTED_MODULE_1__["fork"].apply(undefined, [worker].concat(args, [ac])) };
  };

  var action = void 0,
      setAction = function setAction(ac) {
    return action = ac;
  };

  return Object(_fsmIterator__WEBPACK_IMPORTED_MODULE_0__["default"])({
    q1: function q1() {
      return ['q2', yTake, setAction];
    },
    q2: function q2() {
      return action === _channel__WEBPACK_IMPORTED_MODULE_2__["END"] ? [_fsmIterator__WEBPACK_IMPORTED_MODULE_0__["qEnd"]] : ['q1', yFork(action)];
    }
  }, 'q1', 'takeEvery(' + Object(_fsmIterator__WEBPACK_IMPORTED_MODULE_0__["safeName"])(patternOrChannel) + ', ' + worker.name + ')');
}

/***/ }),

/***/ "./node_modules/redux-saga/es/internal/sagaHelpers/takeLatest.js":
/*!***********************************************************************!*\
  !*** ./node_modules/redux-saga/es/internal/sagaHelpers/takeLatest.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return takeLatest; });
/* harmony import */ var _fsmIterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fsmIterator */ "./node_modules/redux-saga/es/internal/sagaHelpers/fsmIterator.js");
/* harmony import */ var _io__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../io */ "./node_modules/redux-saga/es/internal/io.js");
/* harmony import */ var _channel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../channel */ "./node_modules/redux-saga/es/internal/channel.js");




function takeLatest(patternOrChannel, worker) {
  for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  var yTake = { done: false, value: Object(_io__WEBPACK_IMPORTED_MODULE_1__["take"])(patternOrChannel) };
  var yFork = function yFork(ac) {
    return { done: false, value: _io__WEBPACK_IMPORTED_MODULE_1__["fork"].apply(undefined, [worker].concat(args, [ac])) };
  };
  var yCancel = function yCancel(task) {
    return { done: false, value: Object(_io__WEBPACK_IMPORTED_MODULE_1__["cancel"])(task) };
  };

  var task = void 0,
      action = void 0;
  var setTask = function setTask(t) {
    return task = t;
  };
  var setAction = function setAction(ac) {
    return action = ac;
  };

  return Object(_fsmIterator__WEBPACK_IMPORTED_MODULE_0__["default"])({
    q1: function q1() {
      return ['q2', yTake, setAction];
    },
    q2: function q2() {
      return action === _channel__WEBPACK_IMPORTED_MODULE_2__["END"] ? [_fsmIterator__WEBPACK_IMPORTED_MODULE_0__["qEnd"]] : task ? ['q3', yCancel(task)] : ['q1', yFork(action), setTask];
    },
    q3: function q3() {
      return ['q1', yFork(action), setTask];
    }
  }, 'q1', 'takeLatest(' + Object(_fsmIterator__WEBPACK_IMPORTED_MODULE_0__["safeName"])(patternOrChannel) + ', ' + worker.name + ')');
}

/***/ }),

/***/ "./node_modules/redux-saga/es/internal/sagaHelpers/throttle.js":
/*!*********************************************************************!*\
  !*** ./node_modules/redux-saga/es/internal/sagaHelpers/throttle.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return throttle; });
/* harmony import */ var _fsmIterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fsmIterator */ "./node_modules/redux-saga/es/internal/sagaHelpers/fsmIterator.js");
/* harmony import */ var _io__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../io */ "./node_modules/redux-saga/es/internal/io.js");
/* harmony import */ var _channel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../channel */ "./node_modules/redux-saga/es/internal/channel.js");
/* harmony import */ var _buffers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../buffers */ "./node_modules/redux-saga/es/internal/buffers.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils */ "./node_modules/redux-saga/es/internal/utils.js");






function throttle(delayLength, pattern, worker) {
  for (var _len = arguments.length, args = Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
    args[_key - 3] = arguments[_key];
  }

  var action = void 0,
      channel = void 0;

  var yActionChannel = { done: false, value: Object(_io__WEBPACK_IMPORTED_MODULE_1__["actionChannel"])(pattern, _buffers__WEBPACK_IMPORTED_MODULE_3__["buffers"].sliding(1)) };
  var yTake = function yTake() {
    return { done: false, value: Object(_io__WEBPACK_IMPORTED_MODULE_1__["take"])(channel) };
  };
  var yFork = function yFork(ac) {
    return { done: false, value: _io__WEBPACK_IMPORTED_MODULE_1__["fork"].apply(undefined, [worker].concat(args, [ac])) };
  };
  var yDelay = { done: false, value: Object(_io__WEBPACK_IMPORTED_MODULE_1__["call"])(_utils__WEBPACK_IMPORTED_MODULE_4__["delay"], delayLength) };

  var setAction = function setAction(ac) {
    return action = ac;
  };
  var setChannel = function setChannel(ch) {
    return channel = ch;
  };

  return Object(_fsmIterator__WEBPACK_IMPORTED_MODULE_0__["default"])({
    q1: function q1() {
      return ['q2', yActionChannel, setChannel];
    },
    q2: function q2() {
      return ['q3', yTake(), setAction];
    },
    q3: function q3() {
      return action === _channel__WEBPACK_IMPORTED_MODULE_2__["END"] ? [_fsmIterator__WEBPACK_IMPORTED_MODULE_0__["qEnd"]] : ['q4', yFork(action)];
    },
    q4: function q4() {
      return ['q2', yDelay];
    }
  }, 'q1', 'throttle(' + Object(_fsmIterator__WEBPACK_IMPORTED_MODULE_0__["safeName"])(pattern) + ', ' + worker.name + ')');
}

/***/ }),

/***/ "./node_modules/redux-saga/es/internal/scheduler.js":
/*!**********************************************************!*\
  !*** ./node_modules/redux-saga/es/internal/scheduler.js ***!
  \**********************************************************/
/*! exports provided: asap, suspend, flush */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "asap", function() { return asap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "suspend", function() { return suspend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flush", function() { return flush; });
var queue = [];
/**
  Variable to hold a counting semaphore
  - Incrementing adds a lock and puts the scheduler in a `suspended` state (if it's not
    already suspended)
  - Decrementing releases a lock. Zero locks puts the scheduler in a `released` state. This
    triggers flushing the queued tasks.
**/
var semaphore = 0;

/**
  Executes a task 'atomically'. Tasks scheduled during this execution will be queued
  and flushed after this task has finished (assuming the scheduler endup in a released
  state).
**/
function exec(task) {
  try {
    suspend();
    task();
  } finally {
    release();
  }
}

/**
  Executes or queues a task depending on the state of the scheduler (`suspended` or `released`)
**/
function asap(task) {
  queue.push(task);

  if (!semaphore) {
    suspend();
    flush();
  }
}

/**
  Puts the scheduler in a `suspended` state. Scheduled tasks will be queued until the
  scheduler is released.
**/
function suspend() {
  semaphore++;
}

/**
  Puts the scheduler in a `released` state.
**/
function release() {
  semaphore--;
}

/**
  Releases the current lock. Executes all queued tasks if the scheduler is in the released state.
**/
function flush() {
  release();

  var task = void 0;
  while (!semaphore && (task = queue.shift()) !== undefined) {
    exec(task);
  }
}

/***/ }),

/***/ "./node_modules/redux-saga/es/internal/utils.js":
/*!******************************************************!*\
  !*** ./node_modules/redux-saga/es/internal/utils.js ***!
  \******************************************************/
/*! exports provided: sym, TASK, HELPER, MATCH, CANCEL, SAGA_ACTION, SELF_CANCELLATION, konst, kTrue, kFalse, noop, ident, check, hasOwn, is, object, remove, array, deferred, arrayOfDeffered, delay, createMockTask, autoInc, uid, makeIterator, log, deprecate, updateIncentive, internalErr, createSetContextWarning, wrapSagaDispatch, cloneableGenerator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sym", function() { return sym; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TASK", function() { return TASK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HELPER", function() { return HELPER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MATCH", function() { return MATCH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CANCEL", function() { return CANCEL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SAGA_ACTION", function() { return SAGA_ACTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELF_CANCELLATION", function() { return SELF_CANCELLATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "konst", function() { return konst; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "kTrue", function() { return kTrue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "kFalse", function() { return kFalse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noop", function() { return noop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ident", function() { return ident; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "check", function() { return check; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasOwn", function() { return hasOwn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "is", function() { return is; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "object", function() { return object; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return remove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "array", function() { return array; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deferred", function() { return deferred; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrayOfDeffered", function() { return arrayOfDeffered; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "delay", function() { return delay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMockTask", function() { return createMockTask; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "autoInc", function() { return autoInc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uid", function() { return uid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeIterator", function() { return makeIterator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "log", function() { return log; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deprecate", function() { return deprecate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateIncentive", function() { return updateIncentive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "internalErr", function() { return internalErr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSetContextWarning", function() { return createSetContextWarning; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrapSagaDispatch", function() { return wrapSagaDispatch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cloneableGenerator", function() { return cloneableGenerator; });
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var sym = function sym(id) {
  return '@@redux-saga/' + id;
};

var TASK = sym('TASK');
var HELPER = sym('HELPER');
var MATCH = sym('MATCH');
var CANCEL = sym('CANCEL_PROMISE');
var SAGA_ACTION = sym('SAGA_ACTION');
var SELF_CANCELLATION = sym('SELF_CANCELLATION');
var konst = function konst(v) {
  return function () {
    return v;
  };
};
var kTrue = konst(true);
var kFalse = konst(false);
var noop = function noop() {};
var ident = function ident(v) {
  return v;
};

function check(value, predicate, error) {
  if (!predicate(value)) {
    log('error', 'uncaught at check', error);
    throw new Error(error);
  }
}

var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn(object, property) {
  return is.notUndef(object) && hasOwnProperty.call(object, property);
}

var is = {
  undef: function undef(v) {
    return v === null || v === undefined;
  },
  notUndef: function notUndef(v) {
    return v !== null && v !== undefined;
  },
  func: function func(f) {
    return typeof f === 'function';
  },
  number: function number(n) {
    return typeof n === 'number';
  },
  string: function string(s) {
    return typeof s === 'string';
  },
  array: Array.isArray,
  object: function object(obj) {
    return obj && !is.array(obj) && (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object';
  },
  promise: function promise(p) {
    return p && is.func(p.then);
  },
  iterator: function iterator(it) {
    return it && is.func(it.next) && is.func(it.throw);
  },
  iterable: function iterable(it) {
    return it && is.func(Symbol) ? is.func(it[Symbol.iterator]) : is.array(it);
  },
  task: function task(t) {
    return t && t[TASK];
  },
  observable: function observable(ob) {
    return ob && is.func(ob.subscribe);
  },
  buffer: function buffer(buf) {
    return buf && is.func(buf.isEmpty) && is.func(buf.take) && is.func(buf.put);
  },
  pattern: function pattern(pat) {
    return pat && (is.string(pat) || (typeof pat === 'undefined' ? 'undefined' : _typeof(pat)) === 'symbol' || is.func(pat) || is.array(pat));
  },
  channel: function channel(ch) {
    return ch && is.func(ch.take) && is.func(ch.close);
  },
  helper: function helper(it) {
    return it && it[HELPER];
  },
  stringableFunc: function stringableFunc(f) {
    return is.func(f) && hasOwn(f, 'toString');
  }
};

var object = {
  assign: function assign(target, source) {
    for (var i in source) {
      if (hasOwn(source, i)) {
        target[i] = source[i];
      }
    }
  }
};

function remove(array, item) {
  var index = array.indexOf(item);
  if (index >= 0) {
    array.splice(index, 1);
  }
}

var array = {
  from: function from(obj) {
    var arr = Array(obj.length);
    for (var i in obj) {
      if (hasOwn(obj, i)) {
        arr[i] = obj[i];
      }
    }
    return arr;
  }
};

function deferred() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var def = _extends({}, props);
  var promise = new Promise(function (resolve, reject) {
    def.resolve = resolve;
    def.reject = reject;
  });
  def.promise = promise;
  return def;
}

function arrayOfDeffered(length) {
  var arr = [];
  for (var i = 0; i < length; i++) {
    arr.push(deferred());
  }
  return arr;
}

function delay(ms) {
  var val = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  var timeoutId = void 0;
  var promise = new Promise(function (resolve) {
    timeoutId = setTimeout(function () {
      return resolve(val);
    }, ms);
  });

  promise[CANCEL] = function () {
    return clearTimeout(timeoutId);
  };

  return promise;
}

function createMockTask() {
  var _ref;

  var running = true;
  var _result = void 0,
      _error = void 0;

  return _ref = {}, _ref[TASK] = true, _ref.isRunning = function isRunning() {
    return running;
  }, _ref.result = function result() {
    return _result;
  }, _ref.error = function error() {
    return _error;
  }, _ref.setRunning = function setRunning(b) {
    return running = b;
  }, _ref.setResult = function setResult(r) {
    return _result = r;
  }, _ref.setError = function setError(e) {
    return _error = e;
  }, _ref;
}

function autoInc() {
  var seed = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

  return function () {
    return ++seed;
  };
}

var uid = autoInc();

var kThrow = function kThrow(err) {
  throw err;
};
var kReturn = function kReturn(value) {
  return { value: value, done: true };
};
function makeIterator(next) {
  var thro = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : kThrow;
  var name = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var isHelper = arguments[3];

  var iterator = { name: name, next: next, throw: thro, return: kReturn };

  if (isHelper) {
    iterator[HELPER] = true;
  }
  if (typeof Symbol !== 'undefined') {
    iterator[Symbol.iterator] = function () {
      return iterator;
    };
  }
  return iterator;
}

/**
  Print error in a useful way whether in a browser environment
  (with expandable error stack traces), or in a node.js environment
  (text-only log output)
 **/
function log(level, message) {
  var error = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

  /*eslint-disable no-console*/
  if (typeof window === 'undefined') {
    console.log('redux-saga ' + level + ': ' + message + '\n' + (error && error.stack || error));
  } else {
    console[level](message, error);
  }
}

function deprecate(fn, deprecationWarning) {
  return function () {
    if (true) log('warn', deprecationWarning);
    return fn.apply(undefined, arguments);
  };
}

var updateIncentive = function updateIncentive(deprecated, preferred) {
  return deprecated + ' has been deprecated in favor of ' + preferred + ', please update your code';
};

var internalErr = function internalErr(err) {
  return new Error('\n  redux-saga: Error checking hooks detected an inconsistent state. This is likely a bug\n  in redux-saga code and not yours. Thanks for reporting this in the project\'s github repo.\n  Error: ' + err + '\n');
};

var createSetContextWarning = function createSetContextWarning(ctx, props) {
  return (ctx ? ctx + '.' : '') + 'setContext(props): argument ' + props + ' is not a plain object';
};

var wrapSagaDispatch = function wrapSagaDispatch(dispatch) {
  return function (action) {
    return dispatch(Object.defineProperty(action, SAGA_ACTION, { value: true }));
  };
};

var cloneableGenerator = function cloneableGenerator(generatorFunc) {
  return function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var history = [];
    var gen = generatorFunc.apply(undefined, args);
    return {
      next: function next(arg) {
        history.push(arg);
        return gen.next(arg);
      },
      clone: function clone() {
        var clonedGen = cloneableGenerator(generatorFunc).apply(undefined, args);
        history.forEach(function (arg) {
          return clonedGen.next(arg);
        });
        return clonedGen;
      },
      return: function _return(value) {
        return gen.return(value);
      },
      throw: function _throw(exception) {
        return gen.throw(exception);
      }
    };
  };
};

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./src/UIRouter.js":
/*!*************************!*\
  !*** ./src/UIRouter.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router */ "react-router");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _talend_react_cmf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @talend/react-cmf */ "./node_modules/@talend/react-cmf/lib/index.js");
/* harmony import */ var _talend_react_cmf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_talend_react_cmf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _route__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./route */ "./src/route.js");
/**
 * Internal. It contains the wrapper to make react-router run with the CMF
 * settings
 * @module react-cmf/lib/UIRouter
 * @see react-cmf/lib/route
 * @see react-cmf/lib/settings
 */






/**
 * @typedef {Object} Router
 */

/**
 * pure arrow function that render the router component.
 * You should never need to use this, it's an internal component
 * @param  {object} props   The waited props (history and routes)
 * @param  {object} context The react context with the registry
 * @return {object} ReactElement
 */

function Router(props, context) {
  var routes = _route__WEBPACK_IMPORTED_MODULE_5__["default"].getRoutesFromSettings(context, props.routes, props.dispatch);

  if (routes.path === '/' && routes.component) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_2__["Router"], {
      routes: routes,
      history: props.history
    });
  }

  if (props.loading) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_talend_react_cmf__WEBPACK_IMPORTED_MODULE_4__["Inject"], {
      component: props.loading
    });
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "is-loading"
  }, "loading");
}

Router.propTypes = {
  dispatch: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  history: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object,
  routes: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object,
  loading: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.node
};
Router.contextTypes = {
  registry: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object
};
Router.displayName = 'Router';

var mapStateToProps = function mapStateToProps(state) {
  return {
    routes: state.cmf.settings.routes
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps)(Router));

/***/ }),

/***/ "./src/constant.js":
/*!*************************!*\
  !*** ./src/constant.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  REGISTRY_HOOK_PREFIX: '_.route.hook'
});

/***/ }),

/***/ "./src/expressions.js":
/*!****************************!*\
  !*** ./src/expressions.js ***!
  \****************************/
/*! exports provided: matchPath, location, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matchPath", function() { return matchPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "location", function() { return location; });
/* harmony import */ var _talend_react_cmf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @talend/react-cmf */ "./node_modules/@talend/react-cmf/lib/index.js");
/* harmony import */ var _talend_react_cmf__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_talend_react_cmf__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constant */ "./src/constant.js");
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./selectors */ "./src/selectors.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);




function matchPath(_ref, options, getPathArg, defaultValue) {
  var context = _ref.context;
  var state = context.store.getState();
  var currentPath = Object(_selectors__WEBPACK_IMPORTED_MODULE_2__["getPath"])(state);
  var match = _talend_react_cmf__WEBPACK_IMPORTED_MODULE_0___default.a.router.matchPath(currentPath, options);

  if (getPathArg) {
    if (getPathArg === 'params') {
      throw new Error(_constant__WEBPACK_IMPORTED_MODULE_1__["default"].ERROR_ROUTER_DONT_GET_PARAMS);
    }

    return Object(lodash__WEBPACK_IMPORTED_MODULE_3__["get"])(match, getPathArg, defaultValue);
  }

  return match !== null;
}
function location(_ref2, getPathArg) {
  var context = _ref2.context;
  var state = context.store.getState();
  var loc = Object(_selectors__WEBPACK_IMPORTED_MODULE_2__["getLocation"])(state);

  if (getPathArg) {
    return Object(lodash__WEBPACK_IMPORTED_MODULE_3__["get"])(loc, getPathArg);
  }

  return loc;
}
/* harmony default export */ __webpack_exports__["default"] = ({
  'cmf.router.matchPath': matchPath,
  'cmf.router.location': location
});

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default, routerAPI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routerAPI", function() { return routerAPI; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router */ "react-router");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-redux */ "./node_modules/react-router-redux/lib/index.js");
/* harmony import */ var react_router_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _talend_react_cmf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @talend/react-cmf */ "./node_modules/@talend/react-cmf/lib/index.js");
/* harmony import */ var _talend_react_cmf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_talend_react_cmf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _UIRouter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./UIRouter */ "./src/UIRouter.js");
/* harmony import */ var _expressions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./expressions */ "./src/expressions.js");
/* harmony import */ var _sagaRouter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sagaRouter */ "./src/sagaRouter.js");
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./selectors */ "./src/selectors.js");
/* harmony import */ var _sagas_documentTitle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sagas/documentTitle */ "./src/sagas/documentTitle.js");
/* harmony import */ var _middleware__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./middleware */ "./src/middleware.js");
/* harmony import */ var _route__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./route */ "./src/route.js");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! redux-saga */ "redux-saga");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_11__);












var _effects = redux_saga__WEBPACK_IMPORTED_MODULE_11__["effects"],
    fork = _effects.fork,
    takeLatest = _effects.takeLatest;
var mergeConfig = {
  history: _talend_react_cmf__WEBPACK_IMPORTED_MODULE_3___default.a.module.merge.getUnique,
  sagaRouterConfig: _talend_react_cmf__WEBPACK_IMPORTED_MODULE_3___default.a.module.merge.mergeObjects,
  routerFunctions: _talend_react_cmf__WEBPACK_IMPORTED_MODULE_3___default.a.module.merge.mergeObjects,
  startOnAction: _talend_react_cmf__WEBPACK_IMPORTED_MODULE_3___default.a.module.merge.getUnique
};

function mergeRouterConfig() {
  for (var _len = arguments.length, configs = new Array(_len), _key = 0; _key < _len; _key++) {
    configs[_key] = arguments[_key];
  }

  return configs.reduce(_talend_react_cmf__WEBPACK_IMPORTED_MODULE_3___default.a.module.merge.getReduceConfig(mergeConfig), {});
}

function getModule() {
  var _marked = /*#__PURE__*/regeneratorRuntime.mark(saga);

  var options = mergeRouterConfig.apply(void 0, arguments);
  var history = options.history || react_router__WEBPACK_IMPORTED_MODULE_1__["hashHistory"];
  var registry = {};

  if (options.routerFunctions) {
    Object.keys(options.routerFunctions).reduce(function (acc, key) {
      // eslint-disable-next-line no-param-reassign
      acc["".concat(_route__WEBPACK_IMPORTED_MODULE_10__["REGISTRY_HOOK_PREFIX"], ":").concat(key)] = options.routerFunctions[key];
      return acc;
    }, registry);
  }

  function saga() {
    var routerStarted;
    return regeneratorRuntime.wrap(function saga$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            routerStarted = false;
            _context2.next = 3;
            return fork(_sagas_documentTitle__WEBPACK_IMPORTED_MODULE_8__["default"]);

          case 3:
            if (!options.sagaRouterConfig) {
              _context2.next = 11;
              break;
            }

            if (!options.startOnAction) {
              _context2.next = 9;
              break;
            }

            _context2.next = 7;
            return takeLatest(options.startOnAction, /*#__PURE__*/regeneratorRuntime.mark(function startRouter() {
              return regeneratorRuntime.wrap(function startRouter$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      if (routerStarted) {
                        _context.next = 4;
                        break;
                      }

                      _context.next = 3;
                      return fork(_sagaRouter__WEBPACK_IMPORTED_MODULE_6__["default"], history, options.sagaRouterConfig);

                    case 3:
                      routerStarted = true;

                    case 4:
                    case "end":
                      return _context.stop();
                  }
                }
              }, startRouter);
            }));

          case 7:
            _context2.next = 11;
            break;

          case 9:
            _context2.next = 11;
            return fork(_sagaRouter__WEBPACK_IMPORTED_MODULE_6__["default"], history, options.sagaRouterConfig);

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, _marked);
  }

  var middlewares = [Object(react_router_redux__WEBPACK_IMPORTED_MODULE_2__["routerMiddleware"])(history), _middleware__WEBPACK_IMPORTED_MODULE_9__["default"]];
  var routerHistory;

  function storeCallback(store) {
    routerHistory = Object(react_router_redux__WEBPACK_IMPORTED_MODULE_2__["syncHistoryWithStore"])(history, store);
  } // router is renderer after the store is created so we refer to routerHistory


  function Router() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_UIRouter__WEBPACK_IMPORTED_MODULE_4__["default"], {
      history: routerHistory
    });
  }

  return {
    cmfModule: {
      id: 'react-cmf-router',
      expressions: _expressions__WEBPACK_IMPORTED_MODULE_5__["default"],
      reducer: {
        routing: react_router_redux__WEBPACK_IMPORTED_MODULE_2__["routerReducer"]
      },
      middlewares: middlewares,
      saga: saga,
      storeCallback: storeCallback,
      registry: registry
    },
    RootComponent: Router
  };
}

/* harmony default export */ __webpack_exports__["default"] = (getModule);
var routerAPI = {
  selectors: _selectors__WEBPACK_IMPORTED_MODULE_7__,
  matchPath: _talend_react_cmf__WEBPACK_IMPORTED_MODULE_3___default.a.router.matchPath
};


/***/ }),

/***/ "./src/middleware.js":
/*!***************************!*\
  !*** ./src/middleware.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var cmfMiddleware = function cmfMiddleware(store) {
  return function (next) {
    return function (action) {
      var config = action.cmf;

      if (!config) {
        return next(action);
      }

      if (config.routerPush || config.routerReplace) {
        var route = config.routerPush || config.routerReplace;

        if (typeof route === 'function') {
          route = route(action);
        }

        store.dispatch({
          type: '@@router/CALL_HISTORY_METHOD',
          payload: {
            method: config.routerPush ? 'push' : 'replace',
            args: [route]
          }
        });
      }

      return next(action);
    };
  };
};

/* harmony default export */ __webpack_exports__["default"] = (cmfMiddleware);

/***/ }),

/***/ "./src/route.js":
/*!**********************!*\
  !*** ./src/route.js ***!
  \**********************/
/*! exports provided: REGISTRY_HOOK_PREFIX, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REGISTRY_HOOK_PREFIX", function() { return REGISTRY_HOOK_PREFIX; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _talend_react_cmf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @talend/react-cmf */ "./node_modules/@talend/react-cmf/lib/index.js");
/* harmony import */ var _talend_react_cmf__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_talend_react_cmf__WEBPACK_IMPORTED_MODULE_2__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * Internal. Provide low level function to configure CMF to drive react-router.
 * @module react-cmf/lib/route
 */

/* eslint no-underscore-dangle: ["error", {"allow": ["_ref"] }] */



var REGISTRY_HOOK_PREFIX = '_.route.hook';
/**
 * register a function for the router configuration
 * @param  {string} id
 * @param  {function} func
 */

function registerFunction(id, func) {
  if (typeof func !== 'function') {
    throw new Error('registerFunction wait for a function');
  }

  _talend_react_cmf__WEBPACK_IMPORTED_MODULE_2___default.a.registry.addToRegistry("".concat(REGISTRY_HOOK_PREFIX, ":").concat(id), func);
}
/**
 * return a function from the router configuration
 * @param  {string} id
 * @param  {object} contextcmf context
 */


function getFunction(id, context) {
  return _talend_react_cmf__WEBPACK_IMPORTED_MODULE_2___default.a.registry.getFromRegistry("".concat(REGISTRY_HOOK_PREFIX, ":").concat(id), context);
}

function withProps(Component, item) {
  if (item.view) {
    // eslint-disable-next-line no-console
    console.warn('DEPRECATED: view is deprecated please use componentId');
  }

  var CMFComponent = Component;

  if (!Component.CMFContainer) {
    CMFComponent = Object(_talend_react_cmf__WEBPACK_IMPORTED_MODULE_2__["cmfConnect"])({})(Component);
  }

  var WithProps = function WithProps(props) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(CMFComponent, _extends({
      view: item.view,
      componentId: item.componentId
    }, props));
  };

  WithProps.displayName = 'WithProps';
  WithProps.WrappedComponent = CMFComponent;
  WithProps.propTypes = {
    view: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
    componentId: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string
  };
  return WithProps;
}
/**
 * Internal. Is here to replace all 'component' from an object by their
 * value in the registry. It configures react-router
 * @param  {object} context The react context
 * @param  {object} item The route to adapt
 * @param  {object} dispatch The redux dispatcher
 */


function loadComponents(context, item, dispatch) {
  /* eslint no-param-reassign: ["error", { "props": false }] */
  if (item.component) {
    // we create an HOC to pass item.componentId
    item.component = withProps(_talend_react_cmf__WEBPACK_IMPORTED_MODULE_2___default.a.component.get(item.component, context), item);
  }

  if (item.components) {// TODO: iterate over all keys to call loadComponents
  }

  if (item.getComponent) {
    item.getComponent = getFunction(item.getComponent, context);
  }

  if (item.getComponents) {
    item.getComponents = getFunction(item.getComponents, context);
  }

  if (item.onEnter) {
    var onEnterFn = getFunction(item.onEnter, context);

    item.onEnter = function onEnter(nextState, replace) {
      return onEnterFn({
        router: {
          nextState: nextState,
          replace: replace
        },
        dispatch: dispatch
      });
    };
  }

  if (item.onLeave) {
    var onLeaveFn = getFunction(item.onLeave, context);

    item.onLeave = function onLeave(nextState, replace) {
      return onLeaveFn({
        router: {
          nextState: nextState,
          replace: replace
        },
        dispatch: dispatch
      });
    };
  }

  if (item.childRoutes) {
    item.childRoutes.forEach(function (route) {
      return loadComponents(context, route, dispatch);
    });
  }

  if (item.indexRoute) {
    loadComponents(context, item.indexRoute, dispatch);
  }
}
/**
 * get the react router configuration 'routes' from our settings
 * @param  {object} context The react context
 * @param  {object} settings The route settings
 * @param  {object} dispatch The redux dispatcher
 * @return {object} react router config
 */


function getRoutesFromSettings(context, settings, dispatch) {
  var copy = _objectSpread({}, settings);

  loadComponents(context, copy, dispatch);
  return copy;
}

/* harmony default export */ __webpack_exports__["default"] = ({
  loadComponents: loadComponents,
  getRoutesFromSettings: getRoutesFromSettings,
  registerFunction: registerFunction,
  getFunction: getFunction
});

/***/ }),

/***/ "./src/sagaRouter.js":
/*!***************************!*\
  !*** ./src/sagaRouter.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return sagaRouter; });
/* harmony import */ var _talend_react_cmf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @talend/react-cmf */ "./node_modules/@talend/react-cmf/lib/index.js");
/* harmony import */ var _talend_react_cmf__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_talend_react_cmf__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-saga */ "redux-saga");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_2__);
var _marked = /*#__PURE__*/regeneratorRuntime.mark(sagaRouter);

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * @module react-cmf/lib/sagaRouter
 * @example
 *	import { sagaRouter } from '@talend/react-cmf';
 *	import { browserHistory as history } from 'react-router';

 *	const CANCEL_ACTION = 'CANCEL_ACTION';
 *	// route configuration, a url fragment match with a generator
 *	const routes = {
 *		"/datasets/add": function* addDataset() {
 *			yield take(CANCEL_ACTION);
 *			yield put({
 *				type: REDIRECT_ADD_DATASET_CANCEL,
 *				cmf: {
 *					routerReplace: "/datasets"
 *				}
 *			});
 *		},
 *		"/connections/:datastoreId/edit/add-dataset": function* addDataset({
 *			datastoreId
 *		}) {
 *			yield take(CANCEL_ACTION);
 *			yield put({
 *				type: REDIRECT_CONNECTION_ADD_DATASET_CANCEL,
 *				cmf: {
 *					routerReplace: `/connections/${datastoreId}/edit`
 *				}
 *			});
 *		}
 *	};
 *	// router saga is spawned and given router history, and route configuration
 *	yield spawn(routerSaga, history, routes);
 */
 // TODO: Maybe saga shuld be implemented as a complete Maybe Monad

/**
 * @typedef {Object} Location
 * @param {string} pathname
 */

/**
 * @typedef {Object.<string, number>} RouteParams
 */

/**
 * @typedef {Object.<string, Task>} RunningTasks
 */

/**
 * @function RouteSaga
 * @param {RouteParams} params
 */

/**
 * @typedef {Object} MaybeSaga
 * @property {Task} saga - non optionalref on a Task
 */

/**
 * @typedef {Object.<string, RouteSaga>} RoutesConfig
 */

/**
 * The Match object resulting from matching a saga route fragment and an URL
 * @typedef {Object} Match
 * @property {string} path - the path pattern used to match the saga.
 * @property {string} url - the matched portion of the application URL.
 * @property {boolean} isExact - whether or not the saga matched exactly.
 * @property {RouteParams} params - ad dictionnary of the resolved parameters.
 */

/**
 * Determine if a saga should be restarted with the following rules :
 *
 * @param {MaybeSaga} maybeSaga
 * @param {Match} match
 * @param {RouteSaga} routeSaga
 */



var _effects = redux_saga__WEBPACK_IMPORTED_MODULE_2__["effects"],
    spawn = _effects.spawn,
    take = _effects.take,
    cancel = _effects.cancel;

function shouldStartSaga(maybeSaga, match, routeSaga) {
  if (match) {
    if (!maybeSaga || maybeSaga && maybeSaga.saga && !maybeSaga.saga.isRunning()) {
      if (routeSaga.runOnExactMatch === true) {
        return match.isExact;
      }

      return true;
    }
  }

  return false;
}
/**
 * Determine if a saga should be canceled with the following rules :
 *
 * @param {MaybeSaga} maybeSaga
 * @param {Match} match
 * @param {RouteSaga} routeSaga
 */


function shouldCancelSaga(maybeSaga, match, routeSaga) {
  if (maybeSaga && maybeSaga.saga.isRunning()) {
    if (!match || routeSaga.runOnExactMatch === true) {
      return true;
    }
  }

  return false;
}
/**
 * Determine if a saga should be restarted with the following rules:
 *
 * @param {MaybeSaga} maybeSaga
 * @param {Match} match
 * @param {RouteSaga} routeSaga
 */


function shouldRestartSaga(maybeSaga, match, routeSaga) {
  if (match) {
    if (maybeSaga) {
      if (routeSaga.restartOnRouteChange === true || !Object(lodash__WEBPACK_IMPORTED_MODULE_1__["isEqual"])(maybeSaga.match.params, match.params)) {
        return true;
      }
    }
  }

  return false;
}
/**
 * for a route a list of running saga and current location return a
 * match object and a saga
 *
 * @param {string} routeFragments - the route fragment associated to a saga
 * @param {RunningTasks} sagas
 * @param {Location} currentLocation
 * @param {int} index
 */


function parseSagaState(routeFragment, sagas, currentLocation) {
  return {
    match: _talend_react_cmf__WEBPACK_IMPORTED_MODULE_0___default.a.router.matchPath(currentLocation.pathname, {
      path: routeFragment
    }),
    maybeSaga: sagas[routeFragment]
  };
}
/**
 * responsible to start and cancel saga based on application current url,
 * restart saga if necessary
 * @param {object} history - react router history
 * @param {RoutesConfig} routes
 */


function sagaRouter(history, routes) {
  var sagas, routeFragments, shouldStart, currentLocation, index, routeFragment, routeSaga, _parseSagaState, match, maybeSaga, _index, _shouldStart$_index, _routeFragment, _match, _routeSaga;

  return regeneratorRuntime.wrap(function sagaRouter$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          sagas = {};
          routeFragments = Object.keys(routes);

        case 2:
          if (false) {}

          shouldStart = [];
          currentLocation = history.getCurrentLocation();
          index = 0;

        case 6:
          if (!(index < routeFragments.length)) {
            _context.next = 25;
            break;
          }

          routeFragment = routeFragments[index];
          routeSaga = routes[routeFragment];
          _parseSagaState = parseSagaState(routeFragment, sagas, currentLocation), match = _parseSagaState.match, maybeSaga = _parseSagaState.maybeSaga;

          if (!shouldCancelSaga(maybeSaga, match, routeSaga)) {
            _context.next = 15;
            break;
          }

          _context.next = 13;
          return cancel(maybeSaga.saga);

        case 13:
          _context.next = 22;
          break;

        case 15:
          if (!shouldRestartSaga(maybeSaga, match, routeSaga)) {
            _context.next = 21;
            break;
          }

          _context.next = 18;
          return cancel(maybeSaga.saga);

        case 18:
          shouldStart.push({
            routeFragment: routeFragment,
            match: match
          });
          _context.next = 22;
          break;

        case 21:
          if (shouldStartSaga(maybeSaga, match, routeSaga)) {
            shouldStart.push({
              routeFragment: routeFragment,
              match: match
            });
          }

        case 22:
          index += 1;

        case 23:
          _context.next = 6;
          break;

        case 25:
          _index = 0;

        case 26:
          if (!(_index < shouldStart.length)) {
            _context.next = 38;
            break;
          }

          _shouldStart$_index = shouldStart[_index], _routeFragment = _shouldStart$_index.routeFragment, _match = _shouldStart$_index.match;
          _routeSaga = routes[_routeFragment];

          if (_typeof(routes[_routeFragment]) === 'object') {
            _routeSaga = routes[_routeFragment].saga;
          }

          _context.next = 32;
          return spawn(_routeSaga, _match.params, _match.isExact);

        case 32:
          _context.t0 = _context.sent;
          _context.t1 = _match;
          sagas[_routeFragment] = {
            saga: _context.t0,
            match: _context.t1
          };
          _index += 1;

        case 36:
          _context.next = 26;
          break;

        case 38:
          _context.next = 40;
          return take('@@router/LOCATION_CHANGE');

        case 40:
          _context.next = 2;
          break;

        case 42:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}

/***/ }),

/***/ "./src/sagas/documentTitle.js":
/*!************************************!*\
  !*** ./src/sagas/documentTitle.js ***!
  \************************************/
/*! exports provided: formatPath, buildMapFromRoutes, getTitleFromRoutes, assignDocTitle, handleDocumentTitle, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatPath", function() { return formatPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildMapFromRoutes", function() { return buildMapFromRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTitleFromRoutes", function() { return getTitleFromRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assignDocTitle", function() { return assignDocTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleDocumentTitle", function() { return handleDocumentTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return changeDocumentTitle; });
/* harmony import */ var _talend_react_cmf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @talend/react-cmf */ "./node_modules/@talend/react-cmf/lib/index.js");
/* harmony import */ var _talend_react_cmf__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_talend_react_cmf__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga */ "redux-saga");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_1__);
var _marked = /*#__PURE__*/regeneratorRuntime.mark(handleDocumentTitle),
    _marked2 = /*#__PURE__*/regeneratorRuntime.mark(changeDocumentTitle);


/**
 * Format the current full path
 * @param {string} path current path name (ex: foo)
 * @param {string} parentPath parent path name (ex: /foo)
 */


var _effects = redux_saga__WEBPACK_IMPORTED_MODULE_1__["effects"],
    take = _effects.take,
    takeLatest = _effects.takeLatest;
function formatPath(path, parentPath) {
  var fPath = path;

  if (parentPath) {
    fPath = parentPath.endsWith('/') ? "".concat(parentPath).concat(path) : "".concat(parentPath, "/").concat(path);
  } // Convert optional url parameters to React Router V2 --> V4 (:param) --> :param?


  return fPath.replace(/[(]/g, '').replace(/[)]/g, '?');
}
/**
 * Build a map from the settings routes object recursively
 * @param {object} routes
 * @param {array} mapRoutes
 * @param {string} parentPath
 */

function buildMapFromRoutes(routes, mapRoutes, parentPath) {
  var path = formatPath(routes.path, parentPath);

  if (routes.documentTitle) {
    mapRoutes.set(path, routes.documentTitle);
  }

  var childRoutes = routes.childRoutes;

  if (childRoutes && childRoutes instanceof Array) {
    childRoutes.forEach(function (route) {
      buildMapFromRoutes(route, mapRoutes, path);
    });
  }

  return mapRoutes;
}
/**
 * Iterate over the routes map to find a match with the given location.
 * The value map return the correct document title.
 * If none is found we return the default document title.
 * @param {array} mapRoutes
 * @param {string} location
 * @param {string} defaultDocTitle
 */

function getTitleFromRoutes(mapRoutes, location, defaultDocTitle) {
  var title = defaultDocTitle;
  mapRoutes.forEach(function (value, key) {
    var ret = _talend_react_cmf__WEBPACK_IMPORTED_MODULE_0___default.a.router.matchPath(location, {
      path: key
    });

    if (ret && ret.isExact) {
      title = value;
    }
  });
  return title;
}
/**
 * If not null|undefined we assign a new title to the document.
 * @param {string} title
 */

function assignDocTitle(title) {
  if (title) {
    document.title = title;
  }
}
function handleDocumentTitle(_ref) {
  var settings, mapRoutes, defaultDocTitle, router, docTitle;
  return regeneratorRuntime.wrap(function handleDocumentTitle$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          settings = _ref.settings;
          mapRoutes = buildMapFromRoutes(settings.routes, new Map());
          defaultDocTitle = mapRoutes.get('/');
          assignDocTitle(defaultDocTitle);

        case 4:
          _context.next = 6;
          return take('@@router/LOCATION_CHANGE');

        case 6:
          router = _context.sent;
          docTitle = getTitleFromRoutes(mapRoutes, router.payload.pathname, defaultDocTitle);
          assignDocTitle(docTitle);

        case 9:
          _context.next = 4;
          break;

        case 11:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}
/**
 * A saga which listen to the REQUEST_SETTINGS_OK.
 * We use the routes of the settings to build a map [route: documentTitle].
 * We use the root path '/' to get the default document title and we assign it.
 * When the location changes @@router/LOCATION_CHANGE we update the document title.
 */

function changeDocumentTitle() {
  return regeneratorRuntime.wrap(function changeDocumentTitle$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return takeLatest('REACT_CMF.REQUEST_SETTINGS_OK', handleDocumentTitle);

        case 2:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2);
}

/***/ }),

/***/ "./src/selectors.js":
/*!**************************!*\
  !*** ./src/selectors.js ***!
  \**************************/
/*! exports provided: getLocation, getPath, matchPath */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLocation", function() { return getLocation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPath", function() { return getPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matchPath", function() { return matchPath; });
/* harmony import */ var _talend_react_cmf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @talend/react-cmf */ "./node_modules/@talend/react-cmf/lib/index.js");
/* harmony import */ var _talend_react_cmf__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_talend_react_cmf__WEBPACK_IMPORTED_MODULE_0__);

/**
 * getLocation selector return the location from the redux state object.
 * @param {Object} state the redux state
 * @return {Object} location descriptor https://github.com/ReactTraining/react-router/blob/v3/docs/Glossary.md#locationdescriptor
 */

function getLocation(state) {
  return state.routing.locationBeforeTransitions;
}
/**
 * getPath selector return the path from the redux state object.
 * @param {Object} state the redux state
 * @return {string} path
 */

function getPath(state) {
  var withHash = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var location = getLocation(state);
  return withHash && location.hash ? "".concat(location.pathname).concat(location.hash) : location.pathname;
}
/**
 * matchPath selector provide higher API to match the current path.
 * It give you in one call the composition of matchPath and getPath.
 * @param {Object} state the redux state
 * @param {Object} options matchPath options.
 */

function matchPath(state, options) {
  return _talend_react_cmf__WEBPACK_IMPORTED_MODULE_0___default.a.router.matchPath(getPath(state), options);
}

/***/ }),

/***/ "@sentry/browser":
/*!*************************!*\
  !*** external "Sentry" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = Sentry;

/***/ }),

/***/ "immutable":
/*!****************************!*\
  !*** external "Immutable" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = Immutable;

/***/ }),

/***/ "lodash":
/*!********************!*\
  !*** external "_" ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = _;

/***/ }),

/***/ "prop-types":
/*!****************************!*\
  !*** external "PropTypes" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = PropTypes;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ }),

/***/ "react-redux":
/*!*****************************!*\
  !*** external "ReactRedux" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ReactRedux;

/***/ }),

/***/ "react-router":
/*!******************************!*\
  !*** external "ReactRouter" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ReactRouter;

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "Redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = Redux;

/***/ }),

/***/ "redux-saga":
/*!****************************!*\
  !*** external "ReduxSaga" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ReduxSaga;

/***/ }),

/***/ "redux-thunk":
/*!*****************************!*\
  !*** external "ReduxThunk" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ReduxThunk;

/***/ }),

/***/ "uuid":
/*!***********************!*\
  !*** external "uuid" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = uuid;

/***/ })

/******/ });
});
//# sourceMappingURL=TalendReactCmfRouter.js.map