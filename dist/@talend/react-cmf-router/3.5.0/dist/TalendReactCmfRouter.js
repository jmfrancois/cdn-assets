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
/* harmony import */ var _talend_react_cmf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @talend/react-cmf */ "@talend/react-cmf");
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
/* harmony import */ var _talend_react_cmf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @talend/react-cmf */ "@talend/react-cmf");
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
/* harmony import */ var _talend_react_cmf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @talend/react-cmf */ "@talend/react-cmf");
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
/* harmony import */ var _talend_react_cmf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @talend/react-cmf */ "@talend/react-cmf");
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
/* harmony import */ var _talend_react_cmf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @talend/react-cmf */ "@talend/react-cmf");
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
/* harmony import */ var _talend_react_cmf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @talend/react-cmf */ "@talend/react-cmf");
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
/* harmony import */ var _talend_react_cmf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @talend/react-cmf */ "@talend/react-cmf");
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

/***/ "@talend/react-cmf":
/*!*********************************!*\
  !*** external "TalendReactCmf" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = TalendReactCmf;

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

/***/ "redux-saga":
/*!****************************!*\
  !*** external "ReduxSaga" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ReduxSaga;

/***/ })

/******/ });
});
//# sourceMappingURL=TalendReactCmfRouter.js.map