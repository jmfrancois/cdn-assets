(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["TalendReactCmf"] = factory();
	else
		root["TalendReactCmf"] = factory();
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

/***/ "../../node_modules/invariant/browser.js":
/*!*****************************************************************!*\
  !*** /home/runner/work/ui/ui/node_modules/invariant/browser.js ***!
  \*****************************************************************/
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

/***/ "../../node_modules/lodash.get/index.js":
/*!****************************************************************!*\
  !*** /home/runner/work/ui/ui/node_modules/lodash.get/index.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** `Object#toString` result references. */
var funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    symbolTag = '[object Symbol]';

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/,
    reLeadingDot = /^\./,
    rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

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

/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */
function isHostObject(value) {
  // Many host objects are `Object` objects that can coerce to strings
  // despite having improperly defined `toString` methods.
  var result = false;
  if (value != null && typeof value.toString != 'function') {
    try {
      result = !!(value + '');
    } catch (e) {}
  }
  return result;
}

/** Used for built-in method references. */
var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/** Built-in value references. */
var Symbol = root.Symbol,
    splice = arrayProto.splice;

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map'),
    nativeCreate = getNative(Object, 'create');

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
}

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
  return this.has(key) && delete this.__data__[key];
}

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
  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}

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
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
}

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
  return true;
}

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
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

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
  return getMapData(this, key)['delete'](key);
}

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
  getMapData(this, key).set(key, value);
  return this;
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

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

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = isKey(path, object) ? [path] : castPath(path);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

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
  var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

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
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value) {
  return isArray(value) ? value : stringToPath(value);
}

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

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoize(function(string) {
  string = toString(string);

  var result = [];
  if (reLeadingDot.test(string)) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, string) {
    result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

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

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to process.
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
 * method interface of `delete`, `get`, `has`, and `set`.
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
  if (typeof func != 'function' || (resolver && typeof resolver != 'function')) {
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
    memoized.cache = cache.set(key, result);
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}

// Assign cache to `_.memoize`.
memoize.Cache = MapCache;

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
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

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
  return !!value && (type == 'object' || type == 'function');
}

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
  return !!value && typeof value == 'object';
}

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
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "../../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../../node_modules/lodash.isfunction/index.js":
/*!***********************************************************************!*\
  !*** /home/runner/work/ui/ui/node_modules/lodash.isfunction/index.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * Lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright JS Foundation and other contributors <https://js.foundation/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    nullTag = '[object Null]',
    proxyTag = '[object Proxy]',
    undefinedTag = '[object Undefined]';

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

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
var Symbol = root.Symbol,
    symToStringTag = Symbol ? Symbol.toStringTag : undefined;

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

module.exports = isFunction;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "../../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../../node_modules/lodash.isobject/index.js":
/*!*********************************************************************!*\
  !*** /home/runner/work/ui/ui/node_modules/lodash.isobject/index.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * lodash 3.0.2 (Custom Build) <https://lodash.com/>
 * Build: `lodash modern modularize exports="npm" -o ./`
 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */

/**
 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
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
 * _.isObject(1);
 * // => false
 */
function isObject(value) {
  // Avoid a V8 JIT bug in Chrome 19-20.
  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),

/***/ "../../node_modules/lodash.merge/index.js":
/*!******************************************************************!*\
  !*** /home/runner/work/ui/ui/node_modules/lodash.merge/index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, module) {/**
 * Lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used to detect hot functions by number of calls within a span of milliseconds. */
var HOT_COUNT = 800,
    HOT_SPAN = 16;

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    asyncTag = '[object AsyncFunction]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    nullTag = '[object Null]',
    objectTag = '[object Object]',
    proxyTag = '[object Proxy]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    undefinedTag = '[object Undefined]',
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

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

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

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

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

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

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

/** Used for built-in method references. */
var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined,
    Symbol = root.Symbol,
    Uint8Array = root.Uint8Array,
    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined,
    getPrototype = overArg(Object.getPrototypeOf, Object),
    objectCreate = Object.create,
    propertyIsEnumerable = objectProto.propertyIsEnumerable,
    splice = arrayProto.splice,
    symToStringTag = Symbol ? Symbol.toStringTag : undefined;

var defineProperty = (function() {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined,
    nativeMax = Math.max,
    nativeNow = Date.now;

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map'),
    nativeCreate = getNative(Object, 'create');

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

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

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

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

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

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

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

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

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

/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var setToString = shortOut(baseSetToString);

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

module.exports = merge;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "../../node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../webpack/buildin/module.js */ "../../node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "../../node_modules/lodash.reduce/index.js":
/*!*******************************************************************!*\
  !*** /home/runner/work/ui/ui/node_modules/lodash.reduce/index.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, module) {/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used to compose bitmasks for comparison styles. */
var UNORDERED_COMPARE_FLAG = 1,
    PARTIAL_COMPARE_FLAG = 2;

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0,
    MAX_SAFE_INTEGER = 9007199254740991;

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
    promiseTag = '[object Promise]',
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

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/,
    reLeadingDot = /^\./,
    rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

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

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

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
    return freeProcess && freeProcess.binding('util');
  } catch (e) {}
}());

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * A specialized version of `_.reduce` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @param {boolean} [initAccum] Specify using the first element of `array` as
 *  the initial value.
 * @returns {*} Returns the accumulated value.
 */
function arrayReduce(array, iteratee, accumulator, initAccum) {
  var index = -1,
      length = array ? array.length : 0;

  if (initAccum && length) {
    accumulator = array[++index];
  }
  while (++index < length) {
    accumulator = iteratee(accumulator, array[index], index, array);
  }
  return accumulator;
}

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
      length = array ? array.length : 0;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

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

/**
 * The base implementation of `_.reduce` and `_.reduceRight`, without support
 * for iteratee shorthands, which iterates over `collection` using `eachFunc`.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} accumulator The initial value.
 * @param {boolean} initAccum Specify using the first or last element of
 *  `collection` as the initial value.
 * @param {Function} eachFunc The function to iterate over `collection`.
 * @returns {*} Returns the accumulated value.
 */
function baseReduce(collection, iteratee, accumulator, initAccum, eachFunc) {
  eachFunc(collection, function(value, index, collection) {
    accumulator = initAccum
      ? (initAccum = false, value)
      : iteratee(accumulator, value, index, collection);
  });
  return accumulator;
}

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

/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */
function isHostObject(value) {
  // Many host objects are `Object` objects that can coerce to strings
  // despite having improperly defined `toString` methods.
  var result = false;
  if (value != null && typeof value.toString != 'function') {
    try {
      result = !!(value + '');
    } catch (e) {}
  }
  return result;
}

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

/** Used for built-in method references. */
var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/** Built-in value references. */
var Symbol = root.Symbol,
    Uint8Array = root.Uint8Array,
    propertyIsEnumerable = objectProto.propertyIsEnumerable,
    splice = arrayProto.splice;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView'),
    Map = getNative(root, 'Map'),
    Promise = getNative(root, 'Promise'),
    Set = getNative(root, 'Set'),
    WeakMap = getNative(root, 'WeakMap'),
    nativeCreate = getNative(Object, 'create');

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
}

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
  return this.has(key) && delete this.__data__[key];
}

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
  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}

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
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
}

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
  return true;
}

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
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

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
  return getMapData(this, key)['delete'](key);
}

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
  getMapData(this, key).set(key, value);
  return this;
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

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
      length = values ? values.length : 0;

  this.__data__ = new MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

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

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  this.__data__ = new ListCache(entries);
}

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
}

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
  return this.__data__['delete'](key);
}

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
  var cache = this.__data__;
  if (cache instanceof ListCache) {
    var pairs = cache.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      return this;
    }
    cache = this.__data__ = new MapCache(pairs);
  }
  cache.set(key, value);
  return this;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  // Safari 9 makes `arguments.length` enumerable in strict mode.
  var result = (isArray(value) || isArguments(value))
    ? baseTimes(value.length, String)
    : [];

  var length = result.length,
      skipIndexes = !!length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (key == 'length' || isIndex(key, length)))) {
      result.push(key);
    }
  }
  return result;
}

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

/**
 * The base implementation of `_.forEach` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 */
var baseEach = createBaseEach(baseForOwn);

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

/**
 * The base implementation of `_.forOwn` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns `object`.
 */
function baseForOwn(object, iteratee) {
  return object && baseFor(object, iteratee, keys);
}

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = isKey(path, object) ? [path] : castPath(path);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

/**
 * The base implementation of `getTag`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  return objectToString.call(value);
}

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

/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {boolean} [bitmask] The bitmask of comparison flags.
 *  The bitmask may be composed of the following flags:
 *     1 - Unordered comparison
 *     2 - Partial comparison
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, customizer, bitmask, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!isObject(value) && !isObjectLike(other))) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, baseIsEqual, customizer, bitmask, stack);
}

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {number} [bitmask] The bitmask of comparison flags. See `baseIsEqual`
 *  for more details.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, equalFunc, customizer, bitmask, stack) {
  var objIsArr = isArray(object),
      othIsArr = isArray(other),
      objTag = arrayTag,
      othTag = arrayTag;

  if (!objIsArr) {
    objTag = getTag(object);
    objTag = objTag == argsTag ? objectTag : objTag;
  }
  if (!othIsArr) {
    othTag = getTag(other);
    othTag = othTag == argsTag ? objectTag : othTag;
  }
  var objIsObj = objTag == objectTag && !isHostObject(object),
      othIsObj = othTag == objectTag && !isHostObject(other),
      isSameTag = objTag == othTag;

  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack);
    return (objIsArr || isTypedArray(object))
      ? equalArrays(object, other, equalFunc, customizer, bitmask, stack)
      : equalByTag(object, other, objTag, equalFunc, customizer, bitmask, stack);
  }
  if (!(bitmask & PARTIAL_COMPARE_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new Stack);
      return equalFunc(objUnwrapped, othUnwrapped, customizer, bitmask, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack);
  return equalObjects(object, other, equalFunc, customizer, bitmask, stack);
}

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
            ? baseIsEqual(srcValue, objValue, customizer, UNORDERED_COMPARE_FLAG | PARTIAL_COMPARE_FLAG, stack)
            : result
          )) {
        return false;
      }
    }
  }
  return true;
}

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
  var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[objectToString.call(value)];
}

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
      : baseIsEqual(srcValue, objValue, undefined, UNORDERED_COMPARE_FLAG | PARTIAL_COMPARE_FLAG);
  };
}

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
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value) {
  return isArray(value) ? value : stringToPath(value);
}

/**
 * Creates a `baseEach` or `baseEachRight` function.
 *
 * @private
 * @param {Function} eachFunc The function to iterate over a collection.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseEach(eachFunc, fromRight) {
  return function(collection, iteratee) {
    if (collection == null) {
      return collection;
    }
    if (!isArrayLike(collection)) {
      return eachFunc(collection, iteratee);
    }
    var length = collection.length,
        index = fromRight ? length : -1,
        iterable = Object(collection);

    while ((fromRight ? index-- : ++index < length)) {
      if (iteratee(iterable[index], index, iterable) === false) {
        break;
      }
    }
    return collection;
  };
}

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

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Function} customizer The function to customize comparisons.
 * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
 *  for more details.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, equalFunc, customizer, bitmask, stack) {
  var isPartial = bitmask & PARTIAL_COMPARE_FLAG,
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
      seen = (bitmask & UNORDERED_COMPARE_FLAG) ? new SetCache : undefined;

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
            if (!seen.has(othIndex) &&
                (arrValue === othValue || equalFunc(arrValue, othValue, customizer, bitmask, stack))) {
              return seen.add(othIndex);
            }
          })) {
        result = false;
        break;
      }
    } else if (!(
          arrValue === othValue ||
            equalFunc(arrValue, othValue, customizer, bitmask, stack)
        )) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

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
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Function} customizer The function to customize comparisons.
 * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
 *  for more details.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag(object, other, tag, equalFunc, customizer, bitmask, stack) {
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
      var isPartial = bitmask & PARTIAL_COMPARE_FLAG;
      convert || (convert = setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= UNORDERED_COMPARE_FLAG;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = equalArrays(convert(object), convert(other), equalFunc, customizer, bitmask, stack);
      stack['delete'](object);
      return result;

    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Function} customizer The function to customize comparisons.
 * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
 *  for more details.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, equalFunc, customizer, bitmask, stack) {
  var isPartial = bitmask & PARTIAL_COMPARE_FLAG,
      objProps = keys(object),
      objLength = objProps.length,
      othProps = keys(other),
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
          ? (objValue === othValue || equalFunc(objValue, othValue, customizer, bitmask, stack))
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

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11,
// for data views in Edge < 14, and promises in Node.js.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = objectToString.call(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : undefined;

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
  path = isKey(path, object) ? [path] : castPath(path);

  var result,
      index = -1,
      length = path.length;

  while (++index < length) {
    var key = toKey(path[index]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result) {
    return result;
  }
  var length = object ? object.length : 0;
  return !!length && isLength(length) && isIndex(key, length) &&
    (isArray(object) || isArguments(object));
}

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length &&
    (typeof value == 'number' || reIsUint.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
}

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

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoize(function(string) {
  string = toString(string);

  var result = [];
  if (reLeadingDot.test(string)) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, string) {
    result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

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

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to process.
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

/**
 * Reduces `collection` to a value which is the accumulated result of running
 * each element in `collection` thru `iteratee`, where each successive
 * invocation is supplied the return value of the previous. If `accumulator`
 * is not given, the first element of `collection` is used as the initial
 * value. The iteratee is invoked with four arguments:
 * (accumulator, value, index|key, collection).
 *
 * Many lodash methods are guarded to work as iteratees for methods like
 * `_.reduce`, `_.reduceRight`, and `_.transform`.
 *
 * The guarded methods are:
 * `assign`, `defaults`, `defaultsDeep`, `includes`, `merge`, `orderBy`,
 * and `sortBy`
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @returns {*} Returns the accumulated value.
 * @see _.reduceRight
 * @example
 *
 * _.reduce([1, 2], function(sum, n) {
 *   return sum + n;
 * }, 0);
 * // => 3
 *
 * _.reduce({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
 *   (result[value] || (result[value] = [])).push(key);
 *   return result;
 * }, {});
 * // => { '1': ['a', 'c'], '2': ['b'] } (iteration order is not guaranteed)
 */
function reduce(collection, iteratee, accumulator) {
  var func = isArray(collection) ? arrayReduce : baseReduce,
      initAccum = arguments.length < 3;

  return func(collection, baseIteratee(iteratee, 4), accumulator, initAccum, baseEach);
}

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
 * method interface of `delete`, `get`, `has`, and `set`.
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
  if (typeof func != 'function' || (resolver && typeof resolver != 'function')) {
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
    memoized.cache = cache.set(key, result);
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}

// Assign cache to `_.memoize`.
memoize.Cache = MapCache;

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
function isArguments(value) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
}

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
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

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
  return !!value && (type == 'object' || type == 'function');
}

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
  return !!value && typeof value == 'object';
}

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
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

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

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
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

module.exports = reduce;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "../../node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../webpack/buildin/module.js */ "../../node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "../../node_modules/lodash.set/index.js":
/*!****************************************************************!*\
  !*** /home/runner/work/ui/ui/node_modules/lodash.set/index.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0,
    MAX_SAFE_INTEGER = 9007199254740991;

/** `Object#toString` result references. */
var funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    symbolTag = '[object Symbol]';

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/,
    reLeadingDot = /^\./,
    rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

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

/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */
function isHostObject(value) {
  // Many host objects are `Object` objects that can coerce to strings
  // despite having improperly defined `toString` methods.
  var result = false;
  if (value != null && typeof value.toString != 'function') {
    try {
      result = !!(value + '');
    } catch (e) {}
  }
  return result;
}

/** Used for built-in method references. */
var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/** Built-in value references. */
var Symbol = root.Symbol,
    splice = arrayProto.splice;

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map'),
    nativeCreate = getNative(Object, 'create');

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
}

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
  return this.has(key) && delete this.__data__[key];
}

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
  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}

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
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
}

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
  return true;
}

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
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

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
  return getMapData(this, key)['delete'](key);
}

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
  getMapData(this, key).set(key, value);
  return this;
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

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
    object[key] = value;
  }
}

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
  var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

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
  path = isKey(path, object) ? [path] : castPath(path);

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
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value) {
  return isArray(value) ? value : stringToPath(value);
}

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

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length &&
    (typeof value == 'number' || reIsUint.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
}

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

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoize(function(string) {
  string = toString(string);

  var result = [];
  if (reLeadingDot.test(string)) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, string) {
    result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

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

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to process.
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
 * method interface of `delete`, `get`, `has`, and `set`.
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
  if (typeof func != 'function' || (resolver && typeof resolver != 'function')) {
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
    memoized.cache = cache.set(key, result);
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}

// Assign cache to `_.memoize`.
memoize.Cache = MapCache;

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
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

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
  return !!value && (type == 'object' || type == 'function');
}

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
  return !!value && typeof value == 'object';
}

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
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "../../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../../node_modules/lodash.unset/index.js":
/*!******************************************************************!*\
  !*** /home/runner/work/ui/ui/node_modules/lodash.unset/index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** `Object#toString` result references. */
var funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    symbolTag = '[object Symbol]';

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/,
    reLeadingDot = /^\./,
    rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

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

/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */
function isHostObject(value) {
  // Many host objects are `Object` objects that can coerce to strings
  // despite having improperly defined `toString` methods.
  var result = false;
  if (value != null && typeof value.toString != 'function') {
    try {
      result = !!(value + '');
    } catch (e) {}
  }
  return result;
}

/** Used for built-in method references. */
var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/** Built-in value references. */
var Symbol = root.Symbol,
    splice = arrayProto.splice;

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map'),
    nativeCreate = getNative(Object, 'create');

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
}

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
  return this.has(key) && delete this.__data__[key];
}

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
  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}

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
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
}

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
  return true;
}

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
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

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
  return getMapData(this, key)['delete'](key);
}

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
  getMapData(this, key).set(key, value);
  return this;
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

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

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = isKey(path, object) ? [path] : castPath(path);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

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
  var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

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
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/**
 * The base implementation of `_.unset`.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to unset.
 * @returns {boolean} Returns `true` if the property is deleted, else `false`.
 */
function baseUnset(object, path) {
  path = isKey(path, object) ? [path] : castPath(path);
  object = parent(object, path);

  var key = toKey(last(path));
  return !(object != null && hasOwnProperty.call(object, key)) || delete object[key];
}

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value) {
  return isArray(value) ? value : stringToPath(value);
}

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

/**
 * Gets the parent value at `path` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array} path The path to get the parent value of.
 * @returns {*} Returns the parent value.
 */
function parent(object, path) {
  return path.length == 1 ? object : baseGet(object, baseSlice(path, 0, -1));
}

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoize(function(string) {
  string = toString(string);

  var result = [];
  if (reLeadingDot.test(string)) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, string) {
    result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

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

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to process.
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
  var length = array ? array.length : 0;
  return length ? array[length - 1] : undefined;
}

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
 * method interface of `delete`, `get`, `has`, and `set`.
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
  if (typeof func != 'function' || (resolver && typeof resolver != 'function')) {
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
    memoized.cache = cache.set(key, result);
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}

// Assign cache to `_.memoize`.
memoize.Cache = MapCache;

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
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

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
  return !!value && (type == 'object' || type == 'function');
}

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
  return !!value && typeof value == 'object';
}

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
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
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

/**
 * Removes the property at `path` of `object`.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to unset.
 * @returns {boolean} Returns `true` if the property is deleted, else `false`.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 7 } }] };
 * _.unset(object, 'a[0].b.c');
 * // => true
 *
 * console.log(object);
 * // => { 'a': [{ 'b': {} }] };
 *
 * _.unset(object, ['a', '0', 'b', 'c']);
 * // => true
 *
 * console.log(object);
 * // => { 'a': [{ 'b': {} }] };
 */
function unset(object, path) {
  return object == null ? true : baseUnset(object, path);
}

module.exports = unset;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "../../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../../node_modules/path-to-regexp/index.js":
/*!********************************************************************!*\
  !*** /home/runner/work/ui/ui/node_modules/path-to-regexp/index.js ***!
  \********************************************************************/
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

/***/ "../../node_modules/react-immutable-proptypes/dist/ImmutablePropTypes.js":
/*!*************************************************************************************************!*\
  !*** /home/runner/work/ui/ui/node_modules/react-immutable-proptypes/dist/ImmutablePropTypes.js ***!
  \*************************************************************************************************/
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

var ImmutablePropTypes;

if (true) {
  ImmutablePropTypes = {
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
    orderedMapContains: createOrderedMapContainsChecker,
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
} else { var getProductionTypeChecker, productionTypeChecker; }

ImmutablePropTypes.iterable.indexed = createIterableSubclassTypeChecker("Indexed", Immutable.Iterable.isIndexed);
ImmutablePropTypes.iterable.keyed = createIterableSubclassTypeChecker("Keyed", Immutable.Iterable.isKeyed);

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

function createIterableSubclassTypeChecker(subclassName, validator) {
  return createImmutableTypeChecker("Iterable." + subclassName, function (propValue) {
    return Immutable.Iterable.isIterable(propValue) && validator(propValue);
  });
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

    var propValues = propValue.valueSeq().toArray();
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

function createOrderedMapContainsChecker(shapeTypes) {
  return createShapeTypeChecker(shapeTypes, "OrderedMap", Immutable.OrderedMap.isOrderedMap);
}

module.exports = ImmutablePropTypes;

/***/ }),

/***/ "../../node_modules/reduce-reducers/dist/index.js":
/*!**************************************************************************!*\
  !*** /home/runner/work/ui/ui/node_modules/reduce-reducers/dist/index.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  for (var _len = arguments.length, reducers = Array(_len), _key = 0; _key < _len; _key++) {
    reducers[_key] = arguments[_key];
  }

  return function (previous, current) {
    return reducers.reduce(function (p, r) {
      return r(p, current);
    }, previous);
  };
};

module.exports = exports["default"];

/***/ }),

/***/ "../../node_modules/redux-actions/lib/createAction.js":
/*!******************************************************************************!*\
  !*** /home/runner/work/ui/ui/node_modules/redux-actions/lib/createAction.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createAction;
function identity(t) {
  return t;
}

function createAction(type, actionCreator, metaCreator) {
  var finalActionCreator = typeof actionCreator === 'function' ? actionCreator : identity;

  var actionHandler = function actionHandler() {
    var hasError = (arguments.length <= 0 ? undefined : arguments[0]) instanceof Error;

    var action = {
      type: type
    };

    var payload = hasError ? arguments.length <= 0 ? undefined : arguments[0] : finalActionCreator.apply(undefined, arguments);
    if (!(payload === null || payload === undefined)) {
      action.payload = payload;
    }

    if (hasError) {
      // Handle FSA errors where the payload is an Error object. Set error.
      action.error = true;
    }

    if (typeof metaCreator === 'function') {
      action.meta = metaCreator.apply(undefined, arguments);
    }

    return action;
  };

  actionHandler.toString = function () {
    return type;
  };

  return actionHandler;
}

/***/ }),

/***/ "../../node_modules/redux-actions/lib/handleAction.js":
/*!******************************************************************************!*\
  !*** /home/runner/work/ui/ui/node_modules/redux-actions/lib/handleAction.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = handleAction;
function isFunction(val) {
  return typeof val === 'function';
}

function handleAction(type, reducers, defaultState) {
  var typeValue = isFunction(type) ? type.toString() : type;

  return function () {
    var state = arguments.length <= 0 || arguments[0] === undefined ? defaultState : arguments[0];
    var action = arguments[1];

    // If action type does not match, return previous state
    if (action.type !== typeValue) return state;

    var handlerKey = action.error === true ? 'throw' : 'next';

    // If function is passed instead of map, use as reducer
    if (isFunction(reducers)) {
      reducers.next = reducers.throw = reducers;
    }

    // Otherwise, assume an action map was passed
    var reducer = reducers[handlerKey];

    return isFunction(reducer) ? reducer(state, action) : state;
  };
}

/***/ }),

/***/ "../../node_modules/redux-actions/lib/handleActions.js":
/*!*******************************************************************************!*\
  !*** /home/runner/work/ui/ui/node_modules/redux-actions/lib/handleActions.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = handleActions;

var _handleAction = __webpack_require__(/*! ./handleAction */ "../../node_modules/redux-actions/lib/handleAction.js");

var _handleAction2 = _interopRequireDefault(_handleAction);

var _ownKeys = __webpack_require__(/*! ./ownKeys */ "../../node_modules/redux-actions/lib/ownKeys.js");

var _ownKeys2 = _interopRequireDefault(_ownKeys);

var _reduceReducers = __webpack_require__(/*! reduce-reducers */ "../../node_modules/reduce-reducers/dist/index.js");

var _reduceReducers2 = _interopRequireDefault(_reduceReducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function handleActions(handlers, defaultState) {
  var reducers = (0, _ownKeys2.default)(handlers).map(function (type) {
    return (0, _handleAction2.default)(type, handlers[type]);
  });
  var reducer = _reduceReducers2.default.apply(undefined, _toConsumableArray(reducers));

  return typeof defaultState !== 'undefined' ? function () {
    var state = arguments.length <= 0 || arguments[0] === undefined ? defaultState : arguments[0];
    var action = arguments[1];
    return reducer(state, action);
  } : reducer;
}

/***/ }),

/***/ "../../node_modules/redux-actions/lib/index.js":
/*!***********************************************************************!*\
  !*** /home/runner/work/ui/ui/node_modules/redux-actions/lib/index.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleActions = exports.handleAction = exports.createAction = undefined;

var _createAction = __webpack_require__(/*! ./createAction */ "../../node_modules/redux-actions/lib/createAction.js");

var _createAction2 = _interopRequireDefault(_createAction);

var _handleAction = __webpack_require__(/*! ./handleAction */ "../../node_modules/redux-actions/lib/handleAction.js");

var _handleAction2 = _interopRequireDefault(_handleAction);

var _handleActions = __webpack_require__(/*! ./handleActions */ "../../node_modules/redux-actions/lib/handleActions.js");

var _handleActions2 = _interopRequireDefault(_handleActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.createAction = _createAction2.default;
exports.handleAction = _handleAction2.default;
exports.handleActions = _handleActions2.default;

/***/ }),

/***/ "../../node_modules/redux-actions/lib/ownKeys.js":
/*!*************************************************************************!*\
  !*** /home/runner/work/ui/ui/node_modules/redux-actions/lib/ownKeys.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ownKeys;
function ownKeys(object) {
  if (typeof Reflect !== 'undefined' && typeof Reflect.ownKeys === 'function') {
    return Reflect.ownKeys(object);
  }

  var keys = Object.getOwnPropertyNames(object);

  if (typeof Object.getOwnPropertySymbols === 'function') {
    keys = keys.concat(Object.getOwnPropertySymbols(object));
  }

  return keys;
}

/***/ }),

/***/ "../../node_modules/redux-batched-actions/lib/index.js":
/*!*******************************************************************************!*\
  !*** /home/runner/work/ui/ui/node_modules/redux-batched-actions/lib/index.js ***!
  \*******************************************************************************/
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

/***/ "../../node_modules/redux-batched-subscribe/lib/index.js":
/*!*********************************************************************************!*\
  !*** /home/runner/work/ui/ui/node_modules/redux-batched-subscribe/lib/index.js ***!
  \*********************************************************************************/
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

/***/ "../../node_modules/redux-storage-decorator-filter/build/index.js":
/*!******************************************************************************************!*\
  !*** /home/runner/work/ui/ui/node_modules/redux-storage-decorator-filter/build/index.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _lodash = __webpack_require__(/*! lodash.get */ "../../node_modules/lodash.get/index.js");

var _lodash2 = _interopRequireDefault(_lodash);

var _lodash3 = __webpack_require__(/*! lodash.reduce */ "../../node_modules/lodash.reduce/index.js");

var _lodash4 = _interopRequireDefault(_lodash3);

var _lodash5 = __webpack_require__(/*! lodash.isfunction */ "../../node_modules/lodash.isfunction/index.js");

var _lodash6 = _interopRequireDefault(_lodash5);

var _lodash7 = __webpack_require__(/*! lodash.isobject */ "../../node_modules/lodash.isobject/index.js");

var _lodash8 = _interopRequireDefault(_lodash7);

var _lodash9 = __webpack_require__(/*! lodash.set */ "../../node_modules/lodash.set/index.js");

var _lodash10 = _interopRequireDefault(_lodash9);

var _lodash11 = __webpack_require__(/*! lodash.unset */ "../../node_modules/lodash.unset/index.js");

var _lodash12 = _interopRequireDefault(_lodash11);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

exports['default'] = function (engine) {
    var whitelist = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    var blacklist = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

    whitelist = whitelist || []; // eslint-disable-line no-param-reassign

    return _extends({}, engine, {
        save: function save(state) {
            var saveState = {};

            // Copy the whole state if we're about to blacklist only
            if (whitelist.length === 0 && blacklist !== null) {
                saveState = _extends({}, state);
            }

            blacklist = blacklist || []; // eslint-disable-line no-param-reassign

            whitelist.forEach(function (key) {
                // Support strings for one-level paths
                if (typeof key === 'string') {
                    key = [key]; // eslint-disable-line no-param-reassign
                }

                var value = (0, _lodash4['default'])(key, function (result, keyPart) {
                    if (result) {
                        // Support immutable structures
                        if ((0, _lodash6['default'])(result.has) && (0, _lodash6['default'])(result.get)) {
                            return result.get(keyPart);
                        }

                        if (result.hasOwnProperty(keyPart)) {
                            return result[keyPart];
                        }
                    }
                }, state);

                if (value !== undefined) {
                    // done to support null values
                    (0, _lodash10['default'])(saveState, key, value);
                }
            });

            blacklist.forEach(function (key) {
                // Support strings for one-level paths
                if (typeof key === 'string') {
                    key = [key]; // eslint-disable-line no-param-reassign
                }

                // Support immutable structures
                var value = state[key[0]];
                var blacklistedState = saveState[key[0]] || value;

                if (blacklistedState && (0, _lodash6['default'])(blacklistedState.deleteIn)) {
                    // Handle multiple blacklist path with same key
                    saveState[key[0]] = blacklistedState.deleteIn(key.slice(1));
                    return;
                }

                // If we're a nested path ...
                if (key.length > 1) {
                    // ... and inside a object ...
                    var myKey = key.slice(0, -1);
                    var subValue = (0, _lodash2['default'])(saveState, myKey);
                    if ((0, _lodash8['default'])(subValue)) {
                        // ... clone it, as we don't want to change the state!
                        (0, _lodash10['default'])(saveState, myKey, _extends({}, subValue));
                    }
                }
                (0, _lodash12['default'])(saveState, key);
            });

            return engine.save(saveState);
        }
    });
};

/***/ }),

/***/ "../../node_modules/redux-storage-engine-localstorage/build/index.js":
/*!*********************************************************************************************!*\
  !*** /home/runner/work/ui/ui/node_modules/redux-storage-engine-localstorage/build/index.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
function rejectWithMessage(error) {
    return Promise.reject(error.message);
}

exports["default"] = function (key, replacer, reviver) {
    return {
        load: function load() {
            return new Promise(function (resolve) {
                var jsonState = localStorage.getItem(key);
                resolve(JSON.parse(jsonState, reviver) || {});
            })["catch"](rejectWithMessage);
        },
        save: function save(state) {
            return new Promise(function (resolve) {
                var jsonState = JSON.stringify(state, replacer);
                localStorage.setItem(key, jsonState);
                resolve();
            })["catch"](rejectWithMessage);
        }
    };
};

/***/ }),

/***/ "../../node_modules/redux-storage-merger-simple/build/index.js":
/*!***************************************************************************************!*\
  !*** /home/runner/work/ui/ui/node_modules/redux-storage-merger-simple/build/index.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _lodash = __webpack_require__(/*! lodash.isobject */ "../../node_modules/lodash.isobject/index.js");

var _lodash2 = _interopRequireDefault(_lodash);

var _lodash3 = __webpack_require__(/*! lodash.merge */ "../../node_modules/lodash.merge/index.js");

var _lodash4 = _interopRequireDefault(_lodash3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

exports['default'] = function (oldState, newState) {
    var result = _extends({}, oldState);

    for (var key in newState) {
        if (!newState.hasOwnProperty(key)) {
            continue;
        }
        var value = newState[key];

        // Assign if we don't need to merge at all
        if (!result.hasOwnProperty(key)) {
            result[key] = (0, _lodash2['default'])(value) && !Array.isArray(value) ? (0, _lodash4['default'])({}, value) : value;
            continue;
        }

        var oldValue = result[key];

        if ((0, _lodash2['default'])(value) && !Array.isArray(value)) {
            result[key] = (0, _lodash4['default'])({}, oldValue, value);
        } else {
            result[key] = value;
        }
    }

    return result;
};

/***/ }),

/***/ "../../node_modules/redux-storage/build/actions.js":
/*!***************************************************************************!*\
  !*** /home/runner/work/ui/ui/node_modules/redux-storage/build/actions.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.save = exports.load = undefined;

var _reduxActions = __webpack_require__(/*! redux-actions */ "../../node_modules/redux-actions/lib/index.js");

var _constants = __webpack_require__(/*! ./constants */ "../../node_modules/redux-storage/build/constants.js");

var constants = _interopRequireWildcard(_constants);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

var load = exports.load = (0, _reduxActions.createAction)(constants.LOAD);
var save = exports.save = (0, _reduxActions.createAction)(constants.SAVE);

/***/ }),

/***/ "../../node_modules/redux-storage/build/constants.js":
/*!*****************************************************************************!*\
  !*** /home/runner/work/ui/ui/node_modules/redux-storage/build/constants.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var LOAD = exports.LOAD = 'REDUX_STORAGE_LOAD';
var SAVE = exports.SAVE = 'REDUX_STORAGE_SAVE';

/***/ }),

/***/ "../../node_modules/redux-storage/build/createLoader.js":
/*!********************************************************************************!*\
  !*** /home/runner/work/ui/ui/node_modules/redux-storage/build/createLoader.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _actions = __webpack_require__(/*! ./actions */ "../../node_modules/redux-storage/build/actions.js");

exports['default'] = function (engine) {
    return function (store) {
        var dispatchLoad = function dispatchLoad(state) {
            return store.dispatch((0, _actions.load)(state));
        };
        return engine.load().then(function (newState) {
            dispatchLoad(newState);
            return newState;
        });
    };
};

/***/ }),

/***/ "../../node_modules/redux-storage/build/createMiddleware.js":
/*!************************************************************************************!*\
  !*** /home/runner/work/ui/ui/node_modules/redux-storage/build/createMiddleware.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _lodash = __webpack_require__(/*! lodash.isfunction */ "../../node_modules/lodash.isfunction/index.js");

var _lodash2 = _interopRequireDefault(_lodash);

var _lodash3 = __webpack_require__(/*! lodash.isobject */ "../../node_modules/lodash.isobject/index.js");

var _lodash4 = _interopRequireDefault(_lodash3);

var _actions = __webpack_require__(/*! ./actions */ "../../node_modules/redux-storage/build/actions.js");

var _constants = __webpack_require__(/*! ./constants */ "../../node_modules/redux-storage/build/constants.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function swallow() {}

function warnAboutConfusingFiltering(blacklist, whitelist) {
    blacklist.filter(function (item) {
        return whitelist.indexOf(item) !== -1;
    }).forEach(function (item) {
        console.warn( // eslint-disable-line no-console
        '[redux-storage] Action ' + item + ' is on BOTH black- and whitelist.' + ' This is most likely a mistake!');
    });
}

function isValidAction(action) {
    var isFunc = (0, _lodash2['default'])(action);
    var isObj = (0, _lodash4['default'])(action);
    var hasType = isObj && action.hasOwnProperty('type');

    if (!isFunc && isObj && hasType) {
        return true;
    }

    if (true) {
        if (isFunc) {
            console.warn( // eslint-disable-line no-console
            '[redux-storage] ACTION IGNORED! Actions should be objects' + ' with a type property but received a function! Your' + ' function resolving middleware (e.g. redux-thunk) must be' + ' placed BEFORE redux-storage!');
        } else if (!isObj) {
            console.warn( // eslint-disable-line no-console
            '[redux-storage] ACTION IGNORED! Actions should be objects' + (' with a type property but received: ' + action));
        } else if (!hasType) {
            console.warn( // eslint-disable-line no-console
            '[redux-storage] ACTION IGNORED! Action objects should have' + ' a type property.');
        }
    }

    return false;
}

function handleWhitelist(action, actionWhitelist) {
    if (Array.isArray(actionWhitelist)) {
        return actionWhitelist.length === 0 ? true // Don't filter if the whitelist is empty
        : actionWhitelist.indexOf(action.type) !== -1;
    }

    // actionWhitelist is a function that returns true or false
    return actionWhitelist(action);
}

exports['default'] = function (engine) {
    var actionBlacklist = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    var actionWhitelist = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

    // Also don't save if we process our own actions
    var blacklistedActions = [].concat(_toConsumableArray(actionBlacklist), [_constants.LOAD, _constants.SAVE]);

    if ( true && Array.isArray(actionWhitelist)) {
        warnAboutConfusingFiltering(actionBlacklist, actionWhitelist);
    }

    return function (_ref) {
        var dispatch = _ref.dispatch,
            getState = _ref.getState;

        return function (next) {
            return function (action) {
                var result = next(action);

                if (!isValidAction(action)) {
                    return result;
                }

                var isOnBlacklist = blacklistedActions.indexOf(action.type) !== -1;
                var isOnWhitelist = handleWhitelist(action, actionWhitelist);

                // Skip blacklisted actions
                if (!isOnBlacklist && isOnWhitelist) {
                    (function () {
                        var saveState = getState();
                        var saveAction = (0, _actions.save)(saveState);

                        if (true) {
                            if (!saveAction.meta) {
                                saveAction.meta = {};
                            }
                            saveAction.meta.origin = action;
                        }

                        var dispatchSave = function dispatchSave() {
                            return dispatch(saveAction);
                        };
                        engine.save(saveState).then(dispatchSave)['catch'](swallow);
                    })();
                }

                return result;
            };
        };
    };
};

/***/ }),

/***/ "../../node_modules/redux-storage/build/index.js":
/*!*************************************************************************!*\
  !*** /home/runner/work/ui/ui/node_modules/redux-storage/build/index.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createLoader = __webpack_require__(/*! ./createLoader */ "../../node_modules/redux-storage/build/createLoader.js");

Object.defineProperty(exports, 'createLoader', {
    enumerable: true,
    get: function get() {
        return _interopRequireDefault(_createLoader)['default'];
    }
});

var _createMiddleware = __webpack_require__(/*! ./createMiddleware */ "../../node_modules/redux-storage/build/createMiddleware.js");

Object.defineProperty(exports, 'createMiddleware', {
    enumerable: true,
    get: function get() {
        return _interopRequireDefault(_createMiddleware)['default'];
    }
});

var _reducer = __webpack_require__(/*! ./reducer */ "../../node_modules/redux-storage/build/reducer.js");

Object.defineProperty(exports, 'reducer', {
    enumerable: true,
    get: function get() {
        return _interopRequireDefault(_reducer)['default'];
    }
});

var _constants = __webpack_require__(/*! ./constants */ "../../node_modules/redux-storage/build/constants.js");

Object.defineProperty(exports, 'LOAD', {
    enumerable: true,
    get: function get() {
        return _constants.LOAD;
    }
});
Object.defineProperty(exports, 'SAVE', {
    enumerable: true,
    get: function get() {
        return _constants.SAVE;
    }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

// The full default export is required to be BC with redux-storage <= v1.3.2
exports['default'] = _extends({}, __webpack_require__(/*! ./constants */ "../../node_modules/redux-storage/build/constants.js"), {
    createLoader: __webpack_require__(/*! ./createLoader */ "../../node_modules/redux-storage/build/createLoader.js")['default'],
    createMiddleware: __webpack_require__(/*! ./createMiddleware */ "../../node_modules/redux-storage/build/createMiddleware.js")['default'],
    reducer: __webpack_require__(/*! ./reducer */ "../../node_modules/redux-storage/build/reducer.js")['default']
});

/***/ }),

/***/ "../../node_modules/redux-storage/build/reducer.js":
/*!***************************************************************************!*\
  !*** /home/runner/work/ui/ui/node_modules/redux-storage/build/reducer.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _reduxStorageMergerSimple = __webpack_require__(/*! redux-storage-merger-simple */ "../../node_modules/redux-storage-merger-simple/build/index.js");

var _reduxStorageMergerSimple2 = _interopRequireDefault(_reduxStorageMergerSimple);

var _constants = __webpack_require__(/*! ./constants */ "../../node_modules/redux-storage/build/constants.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

exports['default'] = function (reducer) {
    var merger = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _reduxStorageMergerSimple2['default'];

    return function (state, action) {
        return reducer(action.type === _constants.LOAD ? merger(state, action.payload) : state, action);
    };
};

/***/ }),

/***/ "../../node_modules/uuid/index.js":
/*!**********************************************************!*\
  !*** /home/runner/work/ui/ui/node_modules/uuid/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var v1 = __webpack_require__(/*! ./v1 */ "../../node_modules/uuid/v1.js");
var v4 = __webpack_require__(/*! ./v4 */ "../../node_modules/uuid/v4.js");

var uuid = v4;
uuid.v1 = v1;
uuid.v4 = v4;

module.exports = uuid;


/***/ }),

/***/ "../../node_modules/uuid/lib/bytesToUuid.js":
/*!********************************************************************!*\
  !*** /home/runner/work/ui/ui/node_modules/uuid/lib/bytesToUuid.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
var byteToHex = [];
for (var i = 0; i < 256; ++i) {
  byteToHex[i] = (i + 0x100).toString(16).substr(1);
}

function bytesToUuid(buf, offset) {
  var i = offset || 0;
  var bth = byteToHex;
  // join used to fix memory issue caused by concatenation: https://bugs.chromium.org/p/v8/issues/detail?id=3175#c4
  return ([
    bth[buf[i++]], bth[buf[i++]],
    bth[buf[i++]], bth[buf[i++]], '-',
    bth[buf[i++]], bth[buf[i++]], '-',
    bth[buf[i++]], bth[buf[i++]], '-',
    bth[buf[i++]], bth[buf[i++]], '-',
    bth[buf[i++]], bth[buf[i++]],
    bth[buf[i++]], bth[buf[i++]],
    bth[buf[i++]], bth[buf[i++]]
  ]).join('');
}

module.exports = bytesToUuid;


/***/ }),

/***/ "../../node_modules/uuid/lib/rng-browser.js":
/*!********************************************************************!*\
  !*** /home/runner/work/ui/ui/node_modules/uuid/lib/rng-browser.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Unique ID creation requires a high quality random # generator.  In the
// browser this is a little complicated due to unknown quality of Math.random()
// and inconsistent support for the `crypto` API.  We do the best we can via
// feature-detection

// getRandomValues needs to be invoked in a context where "this" is a Crypto
// implementation. Also, find the complete implementation of crypto on IE11.
var getRandomValues = (typeof(crypto) != 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)) ||
                      (typeof(msCrypto) != 'undefined' && typeof window.msCrypto.getRandomValues == 'function' && msCrypto.getRandomValues.bind(msCrypto));

if (getRandomValues) {
  // WHATWG crypto RNG - http://wiki.whatwg.org/wiki/Crypto
  var rnds8 = new Uint8Array(16); // eslint-disable-line no-undef

  module.exports = function whatwgRNG() {
    getRandomValues(rnds8);
    return rnds8;
  };
} else {
  // Math.random()-based (RNG)
  //
  // If all else fails, use Math.random().  It's fast, but is of unspecified
  // quality.
  var rnds = new Array(16);

  module.exports = function mathRNG() {
    for (var i = 0, r; i < 16; i++) {
      if ((i & 0x03) === 0) r = Math.random() * 0x100000000;
      rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;
    }

    return rnds;
  };
}


/***/ }),

/***/ "../../node_modules/uuid/v1.js":
/*!*******************************************************!*\
  !*** /home/runner/work/ui/ui/node_modules/uuid/v1.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var rng = __webpack_require__(/*! ./lib/rng */ "../../node_modules/uuid/lib/rng-browser.js");
var bytesToUuid = __webpack_require__(/*! ./lib/bytesToUuid */ "../../node_modules/uuid/lib/bytesToUuid.js");

// **`v1()` - Generate time-based UUID**
//
// Inspired by https://github.com/LiosK/UUID.js
// and http://docs.python.org/library/uuid.html

var _nodeId;
var _clockseq;

// Previous uuid creation time
var _lastMSecs = 0;
var _lastNSecs = 0;

// See https://github.com/uuidjs/uuid for API details
function v1(options, buf, offset) {
  var i = buf && offset || 0;
  var b = buf || [];

  options = options || {};
  var node = options.node || _nodeId;
  var clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq;

  // node and clockseq need to be initialized to random values if they're not
  // specified.  We do this lazily to minimize issues related to insufficient
  // system entropy.  See #189
  if (node == null || clockseq == null) {
    var seedBytes = rng();
    if (node == null) {
      // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
      node = _nodeId = [
        seedBytes[0] | 0x01,
        seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]
      ];
    }
    if (clockseq == null) {
      // Per 4.2.2, randomize (14 bit) clockseq
      clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff;
    }
  }

  // UUID timestamps are 100 nano-second units since the Gregorian epoch,
  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.
  var msecs = options.msecs !== undefined ? options.msecs : new Date().getTime();

  // Per 4.2.1.2, use count of uuid's generated during the current clock
  // cycle to simulate higher resolution clock
  var nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1;

  // Time since last uuid creation (in msecs)
  var dt = (msecs - _lastMSecs) + (nsecs - _lastNSecs)/10000;

  // Per 4.2.1.2, Bump clockseq on clock regression
  if (dt < 0 && options.clockseq === undefined) {
    clockseq = clockseq + 1 & 0x3fff;
  }

  // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
  // time interval
  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
    nsecs = 0;
  }

  // Per 4.2.1.2 Throw error if too many uuids are requested
  if (nsecs >= 10000) {
    throw new Error('uuid.v1(): Can\'t create more than 10M uuids/sec');
  }

  _lastMSecs = msecs;
  _lastNSecs = nsecs;
  _clockseq = clockseq;

  // Per 4.1.4 - Convert from unix epoch to Gregorian epoch
  msecs += 12219292800000;

  // `time_low`
  var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
  b[i++] = tl >>> 24 & 0xff;
  b[i++] = tl >>> 16 & 0xff;
  b[i++] = tl >>> 8 & 0xff;
  b[i++] = tl & 0xff;

  // `time_mid`
  var tmh = (msecs / 0x100000000 * 10000) & 0xfffffff;
  b[i++] = tmh >>> 8 & 0xff;
  b[i++] = tmh & 0xff;

  // `time_high_and_version`
  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version
  b[i++] = tmh >>> 16 & 0xff;

  // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)
  b[i++] = clockseq >>> 8 | 0x80;

  // `clock_seq_low`
  b[i++] = clockseq & 0xff;

  // `node`
  for (var n = 0; n < 6; ++n) {
    b[i + n] = node[n];
  }

  return buf ? buf : bytesToUuid(b);
}

module.exports = v1;


/***/ }),

/***/ "../../node_modules/uuid/v4.js":
/*!*******************************************************!*\
  !*** /home/runner/work/ui/ui/node_modules/uuid/v4.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var rng = __webpack_require__(/*! ./lib/rng */ "../../node_modules/uuid/lib/rng-browser.js");
var bytesToUuid = __webpack_require__(/*! ./lib/bytesToUuid */ "../../node_modules/uuid/lib/bytesToUuid.js");

function v4(options, buf, offset) {
  var i = buf && offset || 0;

  if (typeof(options) == 'string') {
    buf = options === 'binary' ? new Array(16) : null;
    options = null;
  }
  options = options || {};

  var rnds = options.random || (options.rng || rng)();

  // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
  rnds[6] = (rnds[6] & 0x0f) | 0x40;
  rnds[8] = (rnds[8] & 0x3f) | 0x80;

  // Copy bytes to buffer, if provided
  if (buf) {
    for (var ii = 0; ii < 16; ++ii) {
      buf[i + ii] = rnds[ii];
    }
  }

  return buf || bytesToUuid(rnds);
}

module.exports = v4;


/***/ }),

/***/ "../../node_modules/webpack/buildin/global.js":
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

/***/ "../../node_modules/webpack/buildin/module.js":
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

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return App; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _RegistryProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RegistryProvider */ "./src/RegistryProvider.js");
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./settings */ "./src/settings.js");
/* harmony import */ var _components_ErrorBoundary_ErrorBoundary_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/ErrorBoundary/ErrorBoundary.component */ "./src/components/ErrorBoundary/ErrorBoundary.component.js");
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
    content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_settings__WEBPACK_IMPORTED_MODULE_4__["WaitForSettings"], {
      loading: props.loading
    }, content);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_2__["Provider"], {
    store: props.store
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_RegistryProvider__WEBPACK_IMPORTED_MODULE_3__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_ErrorBoundary_ErrorBoundary_component__WEBPACK_IMPORTED_MODULE_5__["default"], {
    fullPage: true
  }, content)));
}
App.displayName = 'CMFApp';
App.propTypes = {
  store: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object.isRequired,
  children: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.node,
  withSettings: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  loading: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func
};
App.defaultProps = {
  loading: function loading() {
    return 'loading';
  }
};

/***/ }),

/***/ "./src/Dispatcher.js":
/*!***************************!*\
  !*** ./src/Dispatcher.js ***!
  \***************************/
/*! exports provided: Dispatcher, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dispatcher", function() { return Dispatcher; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _cmfConnect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cmfConnect */ "./src/cmfConnect.js");
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./action */ "./src/action.js");
/* harmony import */ var _actionCreator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./actionCreator */ "./src/actionCreator.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * This module expose Dispatcher component.
 * @module react-cmf/lib/Dispatcher
 * @see module:react-cmf/lib/action
 */





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

var Dispatcher = /*#__PURE__*/function (_React$Component) {
  _inherits(Dispatcher, _React$Component);

  var _super = _createSuper(Dispatcher);

  /**
   * @param  {object} props only one child under children
   */
  function Dispatcher(props) {
    var _this;

    _classCallCheck(this, Dispatcher);

    _this = _super.call(this, props);
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

      _action__WEBPACK_IMPORTED_MODULE_3__["default"].getOnProps(this.props).forEach(function (name) {
        if (typeof _this2.props[name] === 'string') {
          _actionCreator__WEBPACK_IMPORTED_MODULE_4__["default"].get(_this2.context, _this2.props[name]);
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
      var onProps = _action__WEBPACK_IMPORTED_MODULE_3__["default"].getOnProps(this.props);
      var childrenWithProps = react__WEBPACK_IMPORTED_MODULE_1___default.a.Children.map(this.props.children, function (child) {
        var props = {};
        onProps.forEach(function (name) {
          props[name] = function (event) {
            return _this3.onEvent(event, name);
          };
        });
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.cloneElement(child, props);
      });
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.Children.only(childrenWithProps[0]);
    }
  }]);

  return Dispatcher;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

_defineProperty(Dispatcher, "displayName", 'Dispatcher');

_defineProperty(Dispatcher, "propTypes", {
  children: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.node.isRequired,
  stopPropagation: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  preventDefault: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  dispatchActionCreator: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func
});

_defineProperty(Dispatcher, "contextTypes", {
  registry: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object.isRequired
});

Dispatcher.defaultProps = {
  stopPropagation: false,
  preventDefault: false
};
var ConnectedDispatcher = Object(_cmfConnect__WEBPACK_IMPORTED_MODULE_2__["default"])({
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

/* harmony default export */ __webpack_exports__["default"] = (ConnectedDispatcher);

/***/ }),

/***/ "./src/Inject.component.js":
/*!*********************************!*\
  !*** ./src/Inject.component.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./component */ "./src/component.js");
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
  // eslint-disable-next-line no-console
  console.error(error);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "alert alert-danger"
  }, error.message);
}

NotFoundComponent.propTypes = {
  error: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired
};

function Inject(_ref2, context) {
  var component = _ref2.component,
      props = _objectWithoutProperties(_ref2, ["component"]);

  try {
    var Component = _component__WEBPACK_IMPORTED_MODULE_2__["default"].get(component, context);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Component, props);
  } catch (error) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(NotFoundComponent, {
      error: error.message
    });
  }
}

Inject.contextTypes = {
  registry: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object.isRequired
};
Inject.propTypes = {
  component: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired
};
Inject.NotFoundComponent = NotFoundComponent;
/* harmony default export */ __webpack_exports__["default"] = (Inject);

/***/ }),

/***/ "./src/RegistryProvider.js":
/*!*********************************!*\
  !*** ./src/RegistryProvider.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RegistryProvider; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _registry__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./registry */ "./src/registry.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/**
 * Internal. This is the component which inject the registry as child context.
 * It is called by the App component
 * @module react-cmf/lib/RegistryProvider
 * @see module:react-cmf/lib/App
 */



/**
 * The provider is a JSX wrapper to inject the registry as a context var
 * You should never need to use this, it's an internal component
 */

var RegistryProvider = /*#__PURE__*/function (_React$Component) {
  _inherits(RegistryProvider, _React$Component);

  var _super = _createSuper(RegistryProvider);

  function RegistryProvider(props) {
    var _this;

    _classCallCheck(this, RegistryProvider);

    _this = _super.call(this, props);
    _this.registry = _registry__WEBPACK_IMPORTED_MODULE_2__["default"].getRegistry();
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
      return react__WEBPACK_IMPORTED_MODULE_1__["Children"].only(this.props.children);
    }
  }]);

  return RegistryProvider;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);


RegistryProvider.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.element.isRequired
};
RegistryProvider.childContextTypes = {
  registry: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object
};

/***/ }),

/***/ "./src/action.js":
/*!***********************!*\
  !*** ./src/action.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _deprecated__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deprecated */ "./src/deprecated.js");
/* harmony import */ var _actionCreator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actionCreator */ "./src/actionCreator.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



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
  return Object(lodash__WEBPACK_IMPORTED_MODULE_2__["get"])(state, 'cmf.settings.actions', {});
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
  return Object(lodash__WEBPACK_IMPORTED_MODULE_2__["get"])(state, "cmf.settings.contentTypes[".concat(contentType, ".actions[").concat(category, "]"), []);
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

  return _objectSpread({}, action);
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
    var actionCreator = _actionCreator__WEBPACK_IMPORTED_MODULE_1__["default"].get(context, actionInfo.actionCreator);
    return actionCreator(event, data, {
      store: context.store,
      getState: context.store.getState,
      registry: context.registry,
      actionInfo: actionInfo
    });
  }

  return _objectSpread(_objectSpread({}, actionInfo.payload), {}, {
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
  return _objectSpread(_objectSpread({}, props), resolvedActions);
}

var registerActionCreator = Object(_deprecated__WEBPACK_IMPORTED_MODULE_0__["default"])(function (id, actionCreator, context) {
  return _actionCreator__WEBPACK_IMPORTED_MODULE_1__["default"].register(id, actionCreator, context);
}, 'stop use cmf.action.registerActionCreator. please use cmf.actionCreator.register');
var getActionCreatorFunction = Object(_deprecated__WEBPACK_IMPORTED_MODULE_0__["default"])(function (context, id) {
  return _actionCreator__WEBPACK_IMPORTED_MODULE_1__["default"].get(context, id);
}, 'stop use cmf.action.getActionCreatorFunction. please use cmf.actionCreator.get');
/* harmony default export */ __webpack_exports__["default"] = ({
  getActionsById: getActionsById,
  getActionCreatorFunction: getActionCreatorFunction,
  getActionInfo: getActionInfo,
  getActionObject: getActionObject,
  getContentTypeActions: getContentTypeActions,
  getOnProps: getOnProps,
  mapDispatchToProps: mapDispatchToProps,
  registerActionCreator: registerActionCreator
});

/***/ }),

/***/ "./src/actionCreator.js":
/*!******************************!*\
  !*** ./src/actionCreator.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _registry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registry */ "./src/registry.js");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constant */ "./src/constant.js");


/**
 * return a function from the registry
 * @param  {object} context
 * @param  {string} id the id of the action creator
 * @return {function}
 */

function get(context, id) {
  var creator = context.registry["".concat(_constant__WEBPACK_IMPORTED_MODULE_1__["default"].REGISTRY_ACTION_CREATOR_PREFIX, ":").concat(id)];

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

  _registry__WEBPACK_IMPORTED_MODULE_0__["default"].addToRegistry("".concat(_constant__WEBPACK_IMPORTED_MODULE_1__["default"].REGISTRY_ACTION_CREATOR_PREFIX, ":").concat(id), actionCreator, context);
}
/**
 * This function allow to register an object with some action creators
 * @param {object} actionCreators map of action creators
 * @param {object} context optional context to get the registry
 */


var registerMany = _registry__WEBPACK_IMPORTED_MODULE_0__["default"].getRegisterMany(register);
/* harmony default export */ __webpack_exports__["default"] = ({
  get: get,
  register: register,
  registerMany: registerMany
});

/***/ }),

/***/ "./src/actions/collectionsActions.js":
/*!*******************************************!*\
  !*** ./src/actions/collectionsActions.js ***!
  \*******************************************/
/*! exports provided: COLLECTION_ADD_OR_REPLACE, COLLECTION_REMOVE, COLLECTION_MUTATE, addOrReplace, remove, mutate, addOrReplaceCollection, mutateCollection, removeCollection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLLECTION_ADD_OR_REPLACE", function() { return COLLECTION_ADD_OR_REPLACE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLLECTION_REMOVE", function() { return COLLECTION_REMOVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLLECTION_MUTATE", function() { return COLLECTION_MUTATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addOrReplace", function() { return addOrReplace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return remove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mutate", function() { return mutate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addOrReplaceCollection", function() { return addOrReplaceCollection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mutateCollection", function() { return mutateCollection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeCollection", function() { return removeCollection; });
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constant */ "./src/constant.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/**
 * @module react-cmf/lib/actions/collectionsActions
 */
 // keep backward compatibility


var COLLECTION_ADD_OR_REPLACE = _constant__WEBPACK_IMPORTED_MODULE_0__["default"].COLLECTION_ADD_OR_REPLACE,
    COLLECTION_REMOVE = _constant__WEBPACK_IMPORTED_MODULE_0__["default"].COLLECTION_REMOVE,
    COLLECTION_MUTATE = _constant__WEBPACK_IMPORTED_MODULE_0__["default"].COLLECTION_MUTATE;
/**
 * Add or replace collection data in store
 * curried function
 * @param {string | Array<string>} collectionId - path to collection
 * @param {any} data element that represent business data
 */


var addOrReplace = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["curry"])(function (collectionId, data) {
  return {
    type: _constant__WEBPACK_IMPORTED_MODULE_0__["default"].COLLECTION_ADD_OR_REPLACE,
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

function remove(collectionId) {
  return {
    type: _constant__WEBPACK_IMPORTED_MODULE_0__["default"].COLLECTION_REMOVE,
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

var mutate = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["curry"])(function (id, operations) {
  return {
    type: _constant__WEBPACK_IMPORTED_MODULE_0__["default"].COLLECTION_MUTATE,
    id: id,
    operations: operations
  };
}); // backward compatibility

var addOrReplaceCollection = addOrReplace;
var mutateCollection = mutate;
var removeCollection = remove;

/***/ }),

/***/ "./src/actions/componentsActions.js":
/*!******************************************!*\
  !*** ./src/actions/componentsActions.js ***!
  \******************************************/
/*! exports provided: COMPONENT_ADD_STATE, COMPONENT_MERGE_STATE, COMPONENT_REMOVE_STATE, addState, mergeState, removeState, addComponentState, removeComponentState, mergeComponentState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMPONENT_ADD_STATE", function() { return COMPONENT_ADD_STATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMPONENT_MERGE_STATE", function() { return COMPONENT_MERGE_STATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMPONENT_REMOVE_STATE", function() { return COMPONENT_REMOVE_STATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addState", function() { return addState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeState", function() { return mergeState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeState", function() { return removeState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addComponentState", function() { return addComponentState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeComponentState", function() { return removeComponentState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeComponentState", function() { return mergeComponentState; });
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constant */ "./src/constant.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/**
 * @module react-cmf/lib/actions/componentsActions
 */
 // keep backward compatibility


var COMPONENT_ADD_STATE = _constant__WEBPACK_IMPORTED_MODULE_0__["default"].COMPONENT_ADD_STATE,
    COMPONENT_MERGE_STATE = _constant__WEBPACK_IMPORTED_MODULE_0__["default"].COMPONENT_MERGE_STATE,
    COMPONENT_REMOVE_STATE = _constant__WEBPACK_IMPORTED_MODULE_0__["default"].COMPONENT_REMOVE_STATE;
/**
 * add a new component state with optional initialComponentState to the store
 *
 * @param {string} componentName : name of the component
 * @param {string} key : identifier of state used by this component
 * @param {object} initialComponentState : initial state of the component if required
 *
 * @throw if a component with this componentName associated to this key already exist
 */


function addState(componentName, key, initialComponentState) {
  return {
    type: _constant__WEBPACK_IMPORTED_MODULE_0__["default"].COMPONENT_ADD_STATE,
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

var mergeState = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["curry"])(function (componentName, key, componentState) {
  return {
    type: _constant__WEBPACK_IMPORTED_MODULE_0__["default"].COMPONENT_MERGE_STATE,
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

var removeState = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["curry"])(function (componentName, key) {
  return {
    type: _constant__WEBPACK_IMPORTED_MODULE_0__["default"].COMPONENT_REMOVE_STATE,
    componentName: componentName,
    key: key
  };
}); // backward compatbility

var addComponentState = addState;
var removeComponentState = removeState;
var mergeComponentState = mergeState;

/***/ }),

/***/ "./src/actions/http.js":
/*!*****************************!*\
  !*** ./src/actions/http.js ***!
  \*****************************/
/*! exports provided: DEFAULT_HTTP_HEADERS, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_HTTP_HEADERS", function() { return DEFAULT_HTTP_HEADERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return http; });
/* harmony import */ var _middlewares_http_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../middlewares/http/constants */ "./src/middlewares/http/constants.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }


var DEFAULT_HTTP_HEADERS = {
  Accept: 'application/json',
  'Content-Type': 'application/json'
};

function onError(error) {
  return {
    type: _middlewares_http_constants__WEBPACK_IMPORTED_MODULE_0__["ACTION_TYPE_HTTP_ERRORS"],
    error: error
  };
}

function onRequest(url, config) {
  return {
    type: _middlewares_http_constants__WEBPACK_IMPORTED_MODULE_0__["ACTION_TYPE_HTTP_REQUEST"],
    url: url,
    config: config
  };
}

function onJSError(error, action) {
  console.error(error); // eslint-disable-line no-console

  return {
    type: _middlewares_http_constants__WEBPACK_IMPORTED_MODULE_0__["ACTION_TYPE_HTTP_REDUCER_ERROR"],
    error: error,
    action: action
  };
}

function onResponse(response) {
  return {
    type: _middlewares_http_constants__WEBPACK_IMPORTED_MODULE_0__["ACTION_TYPE_HTTP_RESPONSE"],
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
    type: _middlewares_http_constants__WEBPACK_IMPORTED_MODULE_0__["HTTP_METHODS"][method],
    body: data,
    url: url
  }, rest);
}

http.get = function get(url, config) {
  return http(_objectSpread({
    method: _middlewares_http_constants__WEBPACK_IMPORTED_MODULE_0__["HTTP_METHODS"].GET,
    url: url
  }, config));
};

http.post = function post(url, data, config) {
  return http(_objectSpread({
    method: _middlewares_http_constants__WEBPACK_IMPORTED_MODULE_0__["HTTP_METHODS"].POST,
    body: data,
    url: url
  }, config));
};

http["delete"] = function httpDelete(url, config) {
  return http(_objectSpread({
    method: _middlewares_http_constants__WEBPACK_IMPORTED_MODULE_0__["HTTP_METHODS"].DELETE,
    url: url
  }, config));
};

http.patch = function patch(url, data, config) {
  return http(_objectSpread({
    method: _middlewares_http_constants__WEBPACK_IMPORTED_MODULE_0__["HTTP_METHODS"].PATCH,
    body: data,
    url: url
  }, config));
};

http.put = function put(url, data, config) {
  return http(_objectSpread({
    method: _middlewares_http_constants__WEBPACK_IMPORTED_MODULE_0__["HTTP_METHODS"].PUT,
    url: url,
    body: data
  }, config));
};

http.head = function head(url, config) {
  return http(_objectSpread({
    method: _middlewares_http_constants__WEBPACK_IMPORTED_MODULE_0__["HTTP_METHODS"].HEAD,
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

/***/ "./src/actions/index.js":
/*!******************************!*\
  !*** ./src/actions/index.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _collectionsActions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./collectionsActions */ "./src/actions/collectionsActions.js");
/* harmony import */ var _componentsActions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./componentsActions */ "./src/actions/componentsActions.js");
/* harmony import */ var _settingsActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settingsActions */ "./src/actions/settingsActions.js");
/* harmony import */ var _saga__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./saga */ "./src/actions/saga.js");
/* harmony import */ var _http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./http */ "./src/actions/http.js");
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

/* harmony default export */ __webpack_exports__["default"] = ({
  collectionsActions: _collectionsActions__WEBPACK_IMPORTED_MODULE_0__,
  componentsActions: _componentsActions__WEBPACK_IMPORTED_MODULE_1__,
  settingsActions: _settingsActions__WEBPACK_IMPORTED_MODULE_2__,
  http: _http__WEBPACK_IMPORTED_MODULE_4__["default"],
  collections: _collectionsActions__WEBPACK_IMPORTED_MODULE_0__,
  components: _componentsActions__WEBPACK_IMPORTED_MODULE_1__,
  settings: _settingsActions__WEBPACK_IMPORTED_MODULE_2__,
  saga: _saga__WEBPACK_IMPORTED_MODULE_3__
});

/***/ }),

/***/ "./src/actions/saga.js":
/*!*****************************!*\
  !*** ./src/actions/saga.js ***!
  \*****************************/
/*! exports provided: start, stop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "start", function() { return start; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stop", function() { return stop; });
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constant */ "./src/constant.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);


var propsToOmit = ['children', 'getComponent'].concat(_constant__WEBPACK_IMPORTED_MODULE_0__["default"].INJECTED_PROPS, _constant__WEBPACK_IMPORTED_MODULE_0__["default"].CMF_PROPS);
function start() {
  var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var data = arguments.length > 1 ? arguments[1] : undefined;
  return {
    type: _constant__WEBPACK_IMPORTED_MODULE_0__["default"].DID_MOUNT_SAGA_START,
    saga: data.saga,
    componentId: data.componentId,
    props: Object(lodash__WEBPACK_IMPORTED_MODULE_1__["omit"])(data, propsToOmit),
    // deprecated
    event: event
  };
}
function stop(event, data) {
  return {
    type: "".concat(_constant__WEBPACK_IMPORTED_MODULE_0__["default"].WILL_UNMOUNT_SAGA_STOP, "_").concat(data.saga),
    event: event
  };
}

/***/ }),

/***/ "./src/actions/settingsActions.js":
/*!****************************************!*\
  !*** ./src/actions/settingsActions.js ***!
  \****************************************/
/*! exports provided: REQUEST_OK, REQUEST_KO, REQUEST_SETTINGS, requestSettings, receiveSettings, errorWithSettings, fetchSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REQUEST_OK", function() { return REQUEST_OK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REQUEST_KO", function() { return REQUEST_KO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REQUEST_SETTINGS", function() { return REQUEST_SETTINGS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requestSettings", function() { return requestSettings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "receiveSettings", function() { return receiveSettings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "errorWithSettings", function() { return errorWithSettings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchSettings", function() { return fetchSettings; });
/* harmony import */ var _http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./http */ "./src/actions/http.js");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constant */ "./src/constant.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/**
 * @module react-cmf/lib/actions/settingsActions
 */

 // keep backward compatibility


var REQUEST_OK = _constant__WEBPACK_IMPORTED_MODULE_1__["default"].REQUEST_OK,
    REQUEST_KO = _constant__WEBPACK_IMPORTED_MODULE_1__["default"].REQUEST_KO,
    REQUEST_SETTINGS = _constant__WEBPACK_IMPORTED_MODULE_1__["default"].REQUEST_SETTINGS;

function requestSettings() {
  return {
    type: _constant__WEBPACK_IMPORTED_MODULE_1__["default"].REQUEST_SETTINGS
  };
}
function receiveSettings(json) {
  return {
    type: _constant__WEBPACK_IMPORTED_MODULE_1__["default"].REQUEST_OK,
    settings: json,
    receivedAt: Date.now()
  };
}
function errorWithSettings(error) {
  return {
    type: _constant__WEBPACK_IMPORTED_MODULE_1__["default"].REQUEST_KO,
    error: {
      message: Object(lodash__WEBPACK_IMPORTED_MODULE_2__["get"])(error, 'message'),
      stack: Object(lodash__WEBPACK_IMPORTED_MODULE_2__["get"])(error, 'stack')
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
  return _http__WEBPACK_IMPORTED_MODULE_0__["default"].get(path, {
    onResponse: function onResponse(response) {
      return receiveSettings(response);
    },
    onError: function onError(error) {
      return errorWithSettings(error);
    }
  });
}

/***/ }),

/***/ "./src/assert.js":
/*!***********************!*\
  !*** ./src/assert.js ***!
  \***********************/
/*! exports provided: assertValueTypeOf, assertTypeOf */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assertValueTypeOf", function() { return assertValueTypeOf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assertTypeOf", function() { return assertTypeOf; });
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

/***/ "./src/bootstrap.js":
/*!**************************!*\
  !*** ./src/bootstrap.js ***!
  \**************************/
/*! exports provided: bactchedSubscribe, bootstrapRegistry, bootstrapSaga, bootstrapRedux, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bactchedSubscribe", function() { return bactchedSubscribe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bootstrapRegistry", function() { return bootstrapRegistry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bootstrapSaga", function() { return bootstrapSaga; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bootstrapRedux", function() { return bootstrapRedux; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return bootstrap; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_batched_subscribe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-batched-subscribe */ "../../node_modules/redux-batched-subscribe/lib/index.js");
/* harmony import */ var redux_batched_subscribe__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_batched_subscribe__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var _actionCreator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./actionCreator */ "./src/actionCreator.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./actions */ "./src/actions/index.js");
/* harmony import */ var _assert__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assert */ "./src/assert.js");
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./component */ "./src/component.js");
/* harmony import */ var _expression__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./expression */ "./src/expression.js");
/* harmony import */ var _onError__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./onError */ "./src/onError.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./store */ "./src/store.js");
/* harmony import */ var _registry__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./registry */ "./src/registry.js");
/* harmony import */ var _sagas__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./sagas */ "./src/sagas/index.js");
/* harmony import */ var _register__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./register */ "./src/register.js");
/* harmony import */ var _cmfModule__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./cmfModule */ "./src/cmfModule.js");
/* harmony import */ var _httpInterceptors__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./httpInterceptors */ "./src/httpInterceptors.js");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! redux-saga */ "redux-saga");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_17__);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



















var _effects = redux_saga__WEBPACK_IMPORTED_MODULE_17__["effects"],
    spawn = _effects.spawn;
var bactchedSubscribe = Object(redux_batched_subscribe__WEBPACK_IMPORTED_MODULE_2__["batchedSubscribe"])(function (notify) {
  requestAnimationFrame(notify);
});
function bootstrapRegistry(options) {
  Object(_assert__WEBPACK_IMPORTED_MODULE_7__["assertTypeOf"])(options, 'sagas', 'object');
  Object(_assert__WEBPACK_IMPORTED_MODULE_7__["assertTypeOf"])(options, 'components', 'object');
  Object(_assert__WEBPACK_IMPORTED_MODULE_7__["assertTypeOf"])(options, 'expressions', 'object');
  Object(_assert__WEBPACK_IMPORTED_MODULE_7__["assertTypeOf"])(options, 'actionCreators', 'object');
  Object(_assert__WEBPACK_IMPORTED_MODULE_7__["assertTypeOf"])(options, 'registry', 'object');
  Object(_register__WEBPACK_IMPORTED_MODULE_14__["registerInternals"])();

  if (options.registry) {
    _registry__WEBPACK_IMPORTED_MODULE_12__["default"].registerMany(options.registry);
  }

  if (options.components) {
    _component__WEBPACK_IMPORTED_MODULE_8__["default"].registerMany(options.components);
  }

  if (options.expressions) {
    _expression__WEBPACK_IMPORTED_MODULE_9__["default"].registerMany(options.expressions);
  }

  if (options.actionCreators) {
    _actionCreator__WEBPACK_IMPORTED_MODULE_5__["default"].registerMany(options.actionCreators);
  }

  if (options.sagas) {
    _sagas__WEBPACK_IMPORTED_MODULE_13__["default"].registerMany(options.sagas);
  }
}
function bootstrapSaga(options) {
  var _marked = /*#__PURE__*/regeneratorRuntime.mark(cmfSaga);

  Object(_assert__WEBPACK_IMPORTED_MODULE_7__["assertTypeOf"])(options, 'saga', 'function');

  function cmfSaga() {
    return regeneratorRuntime.wrap(function cmfSaga$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return spawn(_sagas__WEBPACK_IMPORTED_MODULE_13__["default"].component.handle);

          case 2:
            if (!(typeof options.saga === 'function')) {
              _context.next = 5;
              break;
            }

            _context.next = 5;
            return spawn(options.saga);

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _marked);
  } // https://chrome.google.com/webstore/detail/redux-saga-dev-tools/kclmpmjofefcpjlommdpokoccidafnbi
  // eslint-disable-next-line no-underscore-dangle


  var sagaMonitor = window.__SAGA_MONITOR_EXTENSION__;
  var middleware = redux_saga__WEBPACK_IMPORTED_MODULE_17___default()({
    onError: _onError__WEBPACK_IMPORTED_MODULE_10__["default"].report,
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
  Object(_assert__WEBPACK_IMPORTED_MODULE_7__["assertTypeOf"])(options, 'settingsURL', 'string');
  Object(_assert__WEBPACK_IMPORTED_MODULE_7__["assertTypeOf"])(options, 'preReducer', ['Array', 'function']);
  Object(_assert__WEBPACK_IMPORTED_MODULE_7__["assertTypeOf"])(options, 'httpMiddleware', 'function');
  Object(_assert__WEBPACK_IMPORTED_MODULE_7__["assertTypeOf"])(options, 'enhancer', 'function');
  Object(_assert__WEBPACK_IMPORTED_MODULE_7__["assertTypeOf"])(options, 'preloadedState', 'object');
  Object(_assert__WEBPACK_IMPORTED_MODULE_7__["assertTypeOf"])(options, 'middlewares', 'Array');
  Object(_assert__WEBPACK_IMPORTED_MODULE_7__["assertTypeOf"])(options, 'storeCallback', 'function');
  Object(_assert__WEBPACK_IMPORTED_MODULE_7__["assertTypeOf"])(options, 'reducer', 'object');

  if (options.preReducer) {
    _store__WEBPACK_IMPORTED_MODULE_11__["default"].addPreReducer(options.preReducer);
  }

  if (typeof options.httpMiddleware === 'function') {
    _store__WEBPACK_IMPORTED_MODULE_11__["default"].setHttpMiddleware(options.httpMiddleware);
  }

  var enhancer = bactchedSubscribe;

  if (typeof options.enhancer === 'function') {
    enhancer = redux__WEBPACK_IMPORTED_MODULE_3___default()(options.enhancer, bactchedSubscribe);
  }

  var middlewares = options.middlewares || [];
  var store = _store__WEBPACK_IMPORTED_MODULE_11__["default"].initialize(options.reducer, options.preloadedState, enhancer, [].concat(_toConsumableArray(middlewares), [sagaMiddleware]));

  if (options.settingsURL) {
    store.dispatch(_actions__WEBPACK_IMPORTED_MODULE_6__["default"].settings.fetchSettings(options.settingsURL));
  }

  if (typeof options.storeCallback === 'function') {
    options.storeCallback(store);
  }

  return store;
}

function bootstrapInterceptors(options) {
  if (options.httpInterceptors) {
    options.httpInterceptors.forEach(_httpInterceptors__WEBPACK_IMPORTED_MODULE_16__["default"].push);
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
  _bootstrap = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
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
            return Object(_cmfModule__WEBPACK_IMPORTED_MODULE_15__["default"])(appOptions);

          case 3:
            options = _context2.sent;
            Object(_assert__WEBPACK_IMPORTED_MODULE_7__["assertTypeOf"])(options, 'root', 'object');
            Object(_assert__WEBPACK_IMPORTED_MODULE_7__["assertTypeOf"])(options, 'appId', 'string');
            Object(_assert__WEBPACK_IMPORTED_MODULE_7__["assertTypeOf"])(options, 'RootComponent', 'function');
            bootstrapRegistry(options);
            bootstrapInterceptors(options);
            appId = options.appId || 'app';
            saga = bootstrapSaga(options);
            store = bootstrapRedux(options, saga.middleware);
            _onError__WEBPACK_IMPORTED_MODULE_10__["default"].bootstrap(options, store);
            saga.run();
            RootComponent = options.RootComponent || DefaultRootComponent;
            element = options.root || document.getElementById(appId);
            Object(react_dom__WEBPACK_IMPORTED_MODULE_1__["render"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_4__["default"], {
              store: store,
              loading: options.AppLoader,
              withSettings: !!options.settingsURL
            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(RootComponent, null)), element);

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

/***/ "./src/cmfConnect.js":
/*!***************************!*\
  !*** ./src/cmfConnect.js ***!
  \***************************/
/*! exports provided: getComponentName, getComponentId, getStateToProps, getDispatchToProps, getMergeProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getComponentName", function() { return getComponentName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getComponentId", function() { return getComponentId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStateToProps", function() { return getStateToProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDispatchToProps", function() { return getDispatchToProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMergeProps", function() { return getMergeProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return cmfConnect; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hoist-non-react-statics */ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_immutable_proptypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-immutable-proptypes */ "../../node_modules/react-immutable-proptypes/dist/ImmutablePropTypes.js");
/* harmony import */ var react_immutable_proptypes__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_immutable_proptypes__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! uuid */ "../../node_modules/uuid/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./actions */ "./src/actions/index.js");
/* harmony import */ var _actionCreator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./actionCreator */ "./src/actionCreator.js");
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./component */ "./src/component.js");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./constant */ "./src/constant.js");
/* harmony import */ var _expression__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./expression */ "./src/expression.js");
/* harmony import */ var _onEvent__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./onEvent */ "./src/onEvent.js");
/* harmony import */ var _componentState__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./componentState */ "./src/componentState.js");
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./settings */ "./src/settings.js");
/* harmony import */ var _omit__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./omit */ "./src/omit.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * This module connect your component in the CMF environment.
 * @module react-cmf/lib/cmfConnect
 * @example
import { cmfConnect } from '@talend/react-cmf';

class MyComponent extends React.Component {
	static displayName = 'MyComponent';
	constructor(props) {
		super(props);
		this.onClick = this.onClick.bind(this);
	}
	onClick(event) {
		return this.props.dispatchActionCreator('myaction', event, { props: this.props });
	}
	render() {
		return <button onClick={this.onClick}>Edit {this.props.foo.name}</button>;
	}
}

function mapStateToProps(state) {
	return {
		foo: state.cmf.collection.get('foo', { name: 'world' }),
	};
}

export default cmfConnect({
	mapStateToProps,
});
 */















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

  var props = _objectSpread({}, defaultProps);

  var cmfProps = Object(_componentState__WEBPACK_IMPORTED_MODULE_12__["getStateProps"])(state, getComponentName(WrappedComponent), getComponentId(componentId, ownProps));

  _extends(props, cmfProps);

  var viewProps = Object(_settings__WEBPACK_IMPORTED_MODULE_13__["mapStateToViewProps"])(state, ownProps, getComponentName(WrappedComponent), getComponentId(componentId, ownProps));

  _extends(props, viewProps);

  var userProps = {};

  if (mapStateToProps) {
    userProps = mapStateToProps(state, _objectSpread(_objectSpread({}, ownProps), props), cmfProps);
  }

  _extends(props, userProps);

  _extends(props, _expression__WEBPACK_IMPORTED_MODULE_10__["default"].mapStateToProps(state, _objectSpread(_objectSpread({}, ownProps), props)));

  return props;
}
function getDispatchToProps(_ref2) {
  var defaultState = _ref2.defaultState,
      dispatch = _ref2.dispatch,
      componentId = _ref2.componentId,
      mapDispatchToProps = _ref2.mapDispatchToProps,
      ownProps = _ref2.ownProps,
      WrappedComponent = _ref2.WrappedComponent;
  var cmfProps = Object(_componentState__WEBPACK_IMPORTED_MODULE_12__["getStateAccessors"])(dispatch, getComponentName(WrappedComponent), getComponentId(componentId, ownProps), defaultState);
  cmfProps.dispatch = dispatch;
  cmfProps.getComponent = _component__WEBPACK_IMPORTED_MODULE_8__["default"].get;

  cmfProps.dispatchActionCreator = function (actionId, event, data, context) {
    dispatch(_actionCreator__WEBPACK_IMPORTED_MODULE_7__["default"].get(context, actionId)(event, data, context));
  };

  var userProps = {};

  if (mapDispatchToProps) {
    if (true) {
      // eslint-disable-next-line no-console
      console.warn("DEPRECATION WARNING: mapDispatchToProps will be removed from cmfConnect.\n\t\t\tPlease use the injectedProps dispatchActionCreator or dispatch");
    }

    userProps = mapDispatchToProps(dispatch, ownProps, cmfProps);
  }

  return _objectSpread(_objectSpread({}, cmfProps), userProps);
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
    return mergeProps(_expression__WEBPACK_IMPORTED_MODULE_10__["default"].mergeProps(stateProps), _expression__WEBPACK_IMPORTED_MODULE_10__["default"].mergeProps(dispatchProps), _expression__WEBPACK_IMPORTED_MODULE_10__["default"].mergeProps(ownProps));
  }

  return _objectSpread(_objectSpread(_objectSpread({}, _expression__WEBPACK_IMPORTED_MODULE_10__["default"].mergeProps(ownProps)), _expression__WEBPACK_IMPORTED_MODULE_10__["default"].mergeProps(dispatchProps)), _expression__WEBPACK_IMPORTED_MODULE_10__["default"].mergeProps(stateProps));
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
  var _ref4 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      componentId = _ref4.componentId,
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
      propsToOmit.push.apply(propsToOmit, _toConsumableArray(_constant__WEBPACK_IMPORTED_MODULE_9__["default"].INJECTED_STATE_PROPS));
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
          componentState: _actions__WEBPACK_IMPORTED_MODULE_6__["default"].components.mergeState(getComponentName(WrappedComponent), id, state)
        }
      };
    }

    var CMFContainer = /*#__PURE__*/function (_React$Component) {
      _inherits(CMFContainer, _React$Component);

      var _super = _createSuper(CMFContainer);

      function CMFContainer(props, context) {
        var _this;

        _classCallCheck(this, CMFContainer);

        _this = _super.call(this, props, context);
        _this.dispatchActionCreator = _this.dispatchActionCreator.bind(_assertThisInitialized(_this));
        _this.getOnEventProps = _this.getOnEventProps.bind(_assertThisInitialized(_this));
        _this.id = Object(uuid__WEBPACK_IMPORTED_MODULE_5__["v4"])();
        return _this;
      }

      _createClass(CMFContainer, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          Object(_componentState__WEBPACK_IMPORTED_MODULE_12__["initState"])(this.props);

          if (this.props.saga) {
            this.dispatchActionCreator('cmf.saga.start', {
              type: 'DID_MOUNT',
              componentId: this.id
            }, _objectSpread(_objectSpread({}, this.props), {}, {
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
            _onEvent__WEBPACK_IMPORTED_MODULE_11__["default"].addOnEventSupport(_onEvent__WEBPACK_IMPORTED_MODULE_11__["default"].DISPATCH, _this2, props, key);
            _onEvent__WEBPACK_IMPORTED_MODULE_11__["default"].addOnEventSupport(_onEvent__WEBPACK_IMPORTED_MODULE_11__["default"].ACTION_CREATOR, _this2, props, key);
            _onEvent__WEBPACK_IMPORTED_MODULE_11__["default"].addOnEventSupport(_onEvent__WEBPACK_IMPORTED_MODULE_11__["default"].SETSTATE, _this2, props, key);
            return props;
          }, {
            toOmit: []
          });
        }
      }, {
        key: "dispatchActionCreator",
        value: function dispatchActionCreator(actionCreatorId, event, data, context) {
          var extendedContext = _objectSpread(_objectSpread({}, this.context), context);

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


          toOmit.push.apply(toOmit, _toConsumableArray(_constant__WEBPACK_IMPORTED_MODULE_9__["default"].CMF_PROPS).concat(propsToOmit));

          if (this.props.omitRouterProps) {
            toOmit.push.apply(toOmit, ['omitRouterProps'].concat(_toConsumableArray(_constant__WEBPACK_IMPORTED_MODULE_9__["default"].INJECTED_ROUTER_PROPS)));
          }

          var spreadedState = {};

          if ((spreadCMFState || this.props.spreadCMFState) && this.props.state) {
            spreadedState = this.props.state.toJS();
          }

          var props = _objectSpread(_objectSpread(_objectSpread({}, Object(_omit__WEBPACK_IMPORTED_MODULE_14__["default"])(this.props, toOmit)), handlers), spreadedState);

          if (props.dispatchActionCreator && props.dispatchActionCreator && toOmit.indexOf('dispatchActionCreator') === -1) {
            // override to inject CMFContainer context
            props.dispatchActionCreator = this.dispatchActionCreator;
          }

          if (!props.state && defaultState && toOmit.indexOf('state') === -1) {
            props.state = defaultState;
          }

          return /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(WrappedComponent, props);
        }
      }]);

      return CMFContainer;
    }(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

    _defineProperty(CMFContainer, "displayName", "CMF(".concat(getComponentName(WrappedComponent), ")"));

    _defineProperty(CMFContainer, "propTypes", _objectSpread({}, cmfConnect.propTypes));

    _defineProperty(CMFContainer, "contextTypes", {
      store: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object,
      registry: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object,
      router: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object
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

    var Connected = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(function (state, ownProps) {
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
    }, _objectSpread({}, rest))(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2___default()(CMFContainer, WrappedComponent));
    Connected.CMFContainer = CMFContainer;
    return Connected;
  };
}
cmfConnect.INJECTED_PROPS = _constant__WEBPACK_IMPORTED_MODULE_9__["default"].INJECTED_PROPS;
cmfConnect.INJECTED_STATE_PROPS = _constant__WEBPACK_IMPORTED_MODULE_9__["default"].INJECTED_STATE_PROPS;
cmfConnect.INJECTED_ROUTER_PROPS = _constant__WEBPACK_IMPORTED_MODULE_9__["default"].INJECTED_ROUTER_PROPS;
cmfConnect.ALL_INJECTED_PROPS = _constant__WEBPACK_IMPORTED_MODULE_9__["default"].INJECTED_PROPS.concat(['getComponent', 'componentId']);
cmfConnect.omit = _omit__WEBPACK_IMPORTED_MODULE_14__["default"];

cmfConnect.omitAllProps = function (props) {
  return cmfConnect.omit(props, cmfConnect.ALL_INJECTED_PROPS);
};

cmfConnect.propTypes = {
  state: react_immutable_proptypes__WEBPACK_IMPORTED_MODULE_3___default.a.map,
  initialState: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([react_immutable_proptypes__WEBPACK_IMPORTED_MODULE_3___default.a.map, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object]),
  getComponent: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  setState: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  initState: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  dispatchActionCreator: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  dispatch: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func
};

/***/ }),

/***/ "./src/cmfModule.js":
/*!**************************!*\
  !*** ./src/cmfModule.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return mergeModulesAndApp; });
/* harmony import */ var _cmfModule_merge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cmfModule.merge */ "./src/cmfModule.merge.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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
  _getModule = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(module) {
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
            return _context.abrupt("return", _objectSpread(_objectSpread({}, syncModule), asyncModule));

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
  _find = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(options) {
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
            _loop = /*#__PURE__*/regeneratorRuntime.mark(function _loop() {
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

                      // eslint-disable-next-line no-console
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

            if (!(!_iteratorNormalCompletion && _iterator["return"] != null)) {
              _context3.next = 30;
              break;
            }

            _context3.next = 30;
            return _iterator["return"]();

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
  _mergeModulesAndApp = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(options) {
    var modules;
    return regeneratorRuntime.wrap(function _callee3$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return find(options);

          case 2:
            modules = _context4.sent;
            return _context4.abrupt("return", _cmfModule_merge__WEBPACK_IMPORTED_MODULE_0__["default"].apply(void 0, _toConsumableArray(modules).concat([options])));

          case 4:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee3);
  }));
  return _mergeModulesAndApp.apply(this, arguments);
}

mergeModulesAndApp.merge = _cmfModule_merge__WEBPACK_IMPORTED_MODULE_0__["default"];

/***/ }),

/***/ "./src/cmfModule.merge.js":
/*!********************************!*\
  !*** ./src/cmfModule.merge.js ***!
  \********************************/
/*! exports provided: mergeObjects, getUnique, getReduceConfig, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeObjects", function() { return mergeObjects; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUnique", function() { return getUnique; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getReduceConfig", function() { return getReduceConfig; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assert */ "./src/assert.js");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-saga */ "redux-saga");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_2__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var _effects = redux_saga__WEBPACK_IMPORTED_MODULE_2__["effects"],
    spawn = _effects.spawn;
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

    return _objectSpread(_objectSpread({}, acc), {}, _defineProperty({}, key, obj2[key]));
  }, _objectSpread({}, obj1));
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
  Object(_assert__WEBPACK_IMPORTED_MODULE_1__["assertValueTypeOf"])(saga, 'function');
  Object(_assert__WEBPACK_IMPORTED_MODULE_1__["assertValueTypeOf"])(newSaga, 'function');

  if (saga && newSaga) {
    return /*#__PURE__*/regeneratorRuntime.mark(function mergedSaga() {
      return regeneratorRuntime.wrap(function mergedSaga$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return spawn(saga);

            case 2:
              _context.next = 4;
              return spawn(newSaga);

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, mergedSaga);
    });
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
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(RootComponent, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NestedRootComponent, null, children));
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

      return _objectSpread(_objectSpread({}, subacc), {}, _defineProperty({}, key, mergeConfig[key](acc[key], config[key], key)));
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

/* harmony default export */ __webpack_exports__["default"] = (merge);
merge.getReduceConfig = getReduceConfig;
merge.getUnique = getUnique;
merge.mergeObjects = mergeObjects;

/***/ }),

/***/ "./src/component.js":
/*!**************************!*\
  !*** ./src/component.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! invariant */ "../../node_modules/invariant/browser.js");
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(invariant__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actionCreator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actionCreator */ "./src/actionCreator.js");
/* harmony import */ var _expression__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./expression */ "./src/expression.js");
/* harmony import */ var _sagas__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sagas */ "./src/sagas/index.js");
/* harmony import */ var _registry__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./registry */ "./src/registry.js");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constant */ "./src/constant.js");






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
  var component = _registry__WEBPACK_IMPORTED_MODULE_4__["default"].getFromRegistry("".concat(_constant__WEBPACK_IMPORTED_MODULE_5__["default"].REGISTRY_COMPONENT_PREFIX, ":").concat(id), context);

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
    invariant__WEBPACK_IMPORTED_MODULE_0___default()("development" === 'production', 'You cannot register undefined as a component for id "%s"', id);
    return;
  }

  _registry__WEBPACK_IMPORTED_MODULE_4__["default"].addToRegistry("".concat(_constant__WEBPACK_IMPORTED_MODULE_5__["default"].REGISTRY_COMPONENT_PREFIX, ":").concat(id), component, context);

  if (component.actions) {
    _actionCreator__WEBPACK_IMPORTED_MODULE_1__["default"].registerMany(component.actions, context);
  }

  if (component.expressions) {
    _expression__WEBPACK_IMPORTED_MODULE_2__["default"].registerMany(component.expressions, context);
  }

  if (component.sagas) {
    _sagas__WEBPACK_IMPORTED_MODULE_3__["default"].registerMany(component.sagas, context);
  }
}

var registerMany = _registry__WEBPACK_IMPORTED_MODULE_4__["default"].getRegisterMany(register);

function has(id, context) {
  return _registry__WEBPACK_IMPORTED_MODULE_4__["default"].getFromRegistry("".concat(_constant__WEBPACK_IMPORTED_MODULE_5__["default"].REGISTRY_COMPONENT_PREFIX, ":").concat(id), context) !== undefined;
}

/* harmony default export */ __webpack_exports__["default"] = ({
  get: get,
  has: has,
  register: register,
  registerMany: registerMany
});

/***/ }),

/***/ "./src/componentState.js":
/*!*******************************!*\
  !*** ./src/componentState.js ***!
  \*******************************/
/*! exports provided: getStateProps, initState, getStateAccessors, statePropTypes, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStateProps", function() { return getStateProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initState", function() { return initState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStateAccessors", function() { return getStateAccessors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "statePropTypes", function() { return statePropTypes; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! immutable */ "immutable");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actions */ "./src/actions/index.js");



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

        var componentState = _actions__WEBPACK_IMPORTED_MODULE_2__["default"].components.mergeState(name, id, newState);
        dispatchAction('setState', componentState);
      });
    },
    initState: function initState(initialState) {
      var state;

      if (DEFAULT_STATE) {
        state = DEFAULT_STATE.merge(initialState);
      } else if (initialState) {
        state = immutable__WEBPACK_IMPORTED_MODULE_1___default.a.Map.isMap(initialState) ? initialState : immutable__WEBPACK_IMPORTED_MODULE_1___default.a.fromJS(initialState);
      }

      if (state) {
        var componentState = _actions__WEBPACK_IMPORTED_MODULE_2__["default"].components.addState(name, id, state);
        dispatchAction('initState', componentState);
      }
    },
    deleteState: function deleteState(initialState) {
      if (DEFAULT_STATE || initialState) {
        var componentState = _actions__WEBPACK_IMPORTED_MODULE_2__["default"].components.removeState(name, id);
        dispatchAction('deleteState', componentState);
      }
    }
  };

  accessors.updateState = function updateState(state) {
    // eslint-disable-next-line no-console
    console.warn('DEPRECATION WARNING: please use props.setState');
    accessors.setState(state);
  };

  return accessors;
} // DEPRECATION Warning: Please use cmfConnect.propTypes

var statePropTypes = {
  state: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object,
  initialState: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object,
  setState: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  initState: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func
};
/* harmony default export */ __webpack_exports__["default"] = ({
  propTypes: statePropTypes,
  init: initState,
  getProps: getStateProps,
  getAccessors: getStateAccessors
});

/***/ }),

/***/ "./src/components/ErrorBoundary/ErrorBoundary.component.js":
/*!*****************************************************************!*\
  !*** ./src/components/ErrorBoundary/ErrorBoundary.component.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ErrorBoundary; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ErrorFeedBack__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ErrorFeedBack */ "./src/components/ErrorFeedBack/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





var ErrorBoundary = /*#__PURE__*/function (_React$Component) {
  _inherits(ErrorBoundary, _React$Component);

  var _super = _createSuper(ErrorBoundary);

  function ErrorBoundary(props) {
    var _this;

    _classCallCheck(this, ErrorBoundary);

    _this = _super.call(this, props);
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
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);


ErrorBoundary.propTypes = {
  renderErrors: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  fullPage: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node
};
ErrorBoundary.defaultProps = {
  renderErrors: _ErrorFeedBack__WEBPACK_IMPORTED_MODULE_2__["default"]
};

/***/ }),

/***/ "./src/components/ErrorFeedBack/ErrorFeedBack.component.js":
/*!*****************************************************************!*\
  !*** ./src/components/ErrorFeedBack/ErrorFeedBack.component.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ErrorPanel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ErrorPanel */ "./src/components/ErrorPanel/index.js");




function ErrorFeedBack(props) {
  var content = props.errors.map(function (error) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ErrorPanel__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: error,
      error: error
    });
  });

  if (!props.fullPage) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, content);
  }

  var style = {
    overflowY: 'auto',
    height: '100vh'
  };

  if (props.errors.length === 1) {
    style.marginTop = 200;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-offset-3 col-md-6",
    style: style
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "An error occurred"), content)));
}

ErrorFeedBack.displayName = 'ErrorFeedBack';
ErrorFeedBack.propTypes = {
  fullPage: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  errors: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array
};
ErrorFeedBack.defaultProps = {
  errors: []
};
/* harmony default export */ __webpack_exports__["default"] = (ErrorFeedBack);

/***/ }),

/***/ "./src/components/ErrorFeedBack/index.js":
/*!***********************************************!*\
  !*** ./src/components/ErrorFeedBack/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ErrorFeedBack_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ErrorFeedBack.component */ "./src/components/ErrorFeedBack/ErrorFeedBack.component.js");

/* harmony default export */ __webpack_exports__["default"] = (_ErrorFeedBack_component__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/components/ErrorPanel/ErrorPanel.component.js":
/*!***********************************************************!*\
  !*** ./src/components/ErrorPanel/ErrorPanel.component.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _onError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../onError */ "./src/onError.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




/**
 * reload is an event handler. It will reload the current page
 */

function reload() {
  location.reload(true);
}

function ErrorPanel(_ref) {
  var _ref$error = _ref.error,
      error = _ref$error === void 0 ? {} : _ref$error;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      url = _React$useState2[0],
      setURL = _React$useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var newUrl = _onError__WEBPACK_IMPORTED_MODULE_2__["default"].createObjectURL(error);
    setURL(newUrl);
    return function () {
      _onError__WEBPACK_IMPORTED_MODULE_2__["default"].revokeObjectURL(newUrl);
    };
  }, [error]);
  var HAS_REPORT = _onError__WEBPACK_IMPORTED_MODULE_2__["default"].hasReportFeature();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "error-title"
  }, error.name, ": ", error.message), HAS_REPORT && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "The error report has been sent."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "From here you can either refresh or contact the support."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn btn-danger btn-inverse",
    onClick: reload,
    "data-feature": "refresh-on-error",
    style: {
      margin: 20
    }
  }, "Refresh"), !HAS_REPORT && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "btn btn-primary btn-inverse",
    href: url,
    download: "report.json",
    "data-feature": "download-on-error-details"
  }, "Download details"));
}

ErrorPanel.displayName = 'ErrorPanel';
ErrorPanel.propTypes = {
  error: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    message: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    stack: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
  }).isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (ErrorPanel);

/***/ }),

/***/ "./src/components/ErrorPanel/index.js":
/*!********************************************!*\
  !*** ./src/components/ErrorPanel/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ErrorPanel_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ErrorPanel.component */ "./src/components/ErrorPanel/ErrorPanel.component.js");

/* harmony default export */ __webpack_exports__["default"] = (_ErrorPanel_component__WEBPACK_IMPORTED_MODULE_0__["default"]);

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
});

/***/ }),

/***/ "./src/deprecated.js":
/*!***************************!*\
  !*** ./src/deprecated.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return deprecated; });
/**
 * Used to deprecate what ever you want
 * @module react-cmf/lib/deprecated
 */

/* eslint-disable prefer-rest-params */

/* eslint-disable no-console */

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

/***/ "./src/expression.js":
/*!***************************!*\
  !*** ./src/expression.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! invariant */ "../../node_modules/invariant/browser.js");
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(invariant__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constant */ "./src/constant.js");
/* harmony import */ var _registry__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./registry */ "./src/registry.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }







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
  _registry__WEBPACK_IMPORTED_MODULE_4__["default"].addToRegistry("".concat(_constant__WEBPACK_IMPORTED_MODULE_3__["default"].REGISTRY_EXPRESSION_PREFIX, ":").concat(id), func, context);
}
/**
 * get an expression from it's id
 * @param {string} id of the expression you want to get
 * @param {Context} context React context is optional
 */


function get(id, context) {
  return _registry__WEBPACK_IMPORTED_MODULE_4__["default"].getFromRegistry("".concat(_constant__WEBPACK_IMPORTED_MODULE_3__["default"].REGISTRY_EXPRESSION_PREFIX, ":").concat(id), context);
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
    invariant__WEBPACK_IMPORTED_MODULE_2___default()("development" === 'production', 'you must provide an expression id');
  }

  var check = get(id, context);

  if (!check) {
    invariant__WEBPACK_IMPORTED_MODULE_2___default()("development" === 'production', "you must register expression ".concat(id, " first"));
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

  var newProps = _objectSpread(_objectSpread({}, props), payload);

  attrs.forEach(function (attr) {
    var value = props[attr];

    if (typeof value === 'string' || _typeof(value) === 'object') {
      // eslint-disable-next-line
      console.warn("beware this is present just for the sake of backward compatibility,\n\t\t\t\tyou should use properties ending with Expression to see them evaluated\n\t\t\t\texample: instead of using ".concat(attr, ", ").concat(attr, "Expression will be evaluated\n\t\t\t\tand result put in ").concat(attr));
      newProps[attr] = call(value, context, newProps);
    }
  });
  Object(lodash__WEBPACK_IMPORTED_MODULE_5__["forIn"])(props, function (value, key) {
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
    registry: _registry__WEBPACK_IMPORTED_MODULE_4__["default"].getRegistry()
  }, ctx);

  Object(lodash__WEBPACK_IMPORTED_MODULE_5__["forIn"])(ownProps, function (value, key) {
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
  var newProps = _objectSpread({}, props);

  Object(lodash__WEBPACK_IMPORTED_MODULE_5__["forIn"])(newProps, function (value, key) {
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
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Component, getProps(props, attrs, context));
  }

  WithExpression.contextTypes = {
    registry: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object,
    store: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object,
    router: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object
  };
  WithExpression.displayName = "WithExpression(".concat(Component.displayName || Component.name, ")");
  return WithExpression;
}

var registerMany = _registry__WEBPACK_IMPORTED_MODULE_4__["default"].getRegisterMany(register);
/* harmony default export */ __webpack_exports__["default"] = ({
  register: register,
  registerMany: registerMany,
  get: get,
  call: call,
  getProps: getProps,
  withExpression: withExpression,
  mapStateToProps: mapStateToProps,
  mergeProps: mergeProps
});

/***/ }),

/***/ "./src/expressions/allOf.js":
/*!**********************************!*\
  !*** ./src/expressions/allOf.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getAllOfFunction; });
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immutable */ "immutable");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);


function getAllOfFunction(statePath) {
  return function includes(_ref, immutablePath, values) {
    var context = _ref.context;

    if (!Array.isArray(values)) {
      throw new Error('You should pass an array of values to check if all of them are present');
    }

    var arr = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["get"])(context.store.getState(), statePath, new immutable__WEBPACK_IMPORTED_MODULE_0___default.a.Map()).getIn(immutablePath.split('.'), new immutable__WEBPACK_IMPORTED_MODULE_0___default.a.List());
    return arr.size > 0 && arr.every(function (value) {
      return values.includes(value);
    });
  };
}

/***/ }),

/***/ "./src/expressions/getInState.js":
/*!***************************************!*\
  !*** ./src/expressions/getInState.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immutable */ "immutable");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);



function getInState(statePath, _ref, immutablePath, defaultValue) {
  var context = _ref.context;
  return Object(lodash__WEBPACK_IMPORTED_MODULE_1__["get"])(context.store.getState(), statePath, new immutable__WEBPACK_IMPORTED_MODULE_0___default.a.Map()).getIn(immutablePath.split('.'), defaultValue);
}

/* harmony default export */ __webpack_exports__["default"] = (Object(lodash__WEBPACK_IMPORTED_MODULE_1__["curry"])(getInState));

/***/ }),

/***/ "./src/expressions/includes.js":
/*!*************************************!*\
  !*** ./src/expressions/includes.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getIncludesFunction; });
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immutable */ "immutable");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);


function getIncludesFunction(statePath) {
  return function includes(_ref, immutablePath, value) {
    var context = _ref.context;
    return Object(lodash__WEBPACK_IMPORTED_MODULE_1__["get"])(context.store.getState(), statePath, new immutable__WEBPACK_IMPORTED_MODULE_0___default.a.Map()).getIn(immutablePath.split('.'), new immutable__WEBPACK_IMPORTED_MODULE_0___default.a.List()).includes(value);
  };
}

/***/ }),

/***/ "./src/expressions/index.js":
/*!**********************************!*\
  !*** ./src/expressions/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _allOf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./allOf */ "./src/expressions/allOf.js");
/* harmony import */ var _getInState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getInState */ "./src/expressions/getInState.js");
/* harmony import */ var _includes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./includes */ "./src/expressions/includes.js");
/* harmony import */ var _oneOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./oneOf */ "./src/expressions/oneOf.js");




/* harmony default export */ __webpack_exports__["default"] = ({
  'cmf.collections.get': Object(_getInState__WEBPACK_IMPORTED_MODULE_1__["default"])('cmf.collections'),
  'cmf.components.get': Object(_getInState__WEBPACK_IMPORTED_MODULE_1__["default"])('cmf.components'),
  'cmf.collections.includes': Object(_includes__WEBPACK_IMPORTED_MODULE_2__["default"])('cmf.collections'),
  'cmf.components.includes': Object(_includes__WEBPACK_IMPORTED_MODULE_2__["default"])('cmf.components'),
  'cmf.collections.oneOf': Object(_oneOf__WEBPACK_IMPORTED_MODULE_3__["default"])('cmf.collections'),
  'cmf.collections.allOf': Object(_allOf__WEBPACK_IMPORTED_MODULE_0__["default"])('cmf.collections')
});

/***/ }),

/***/ "./src/expressions/oneOf.js":
/*!**********************************!*\
  !*** ./src/expressions/oneOf.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getOneOfFunction; });
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immutable */ "immutable");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);


function getOneOfFunction(statePath) {
  return function includes(_ref, immutablePath, values) {
    var context = _ref.context;

    if (!Array.isArray(values)) {
      throw new Error('You should pass an array of values to check if one of them is present');
    }

    var arr = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["get"])(context.store.getState(), statePath, new immutable__WEBPACK_IMPORTED_MODULE_0___default.a.Map()).getIn(immutablePath.split('.'), new immutable__WEBPACK_IMPORTED_MODULE_0___default.a.List());
    return values.some(function (value) {
      return arr.includes(value);
    });
  };
}

/***/ }),

/***/ "./src/httpInterceptors.js":
/*!*********************************!*\
  !*** ./src/httpInterceptors.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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
        result = result["catch"](function (error) {
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

/* harmony default export */ __webpack_exports__["default"] = ({
  push: push,
  onRequest: onRequest,
  onResponse: onResponse,
  _clear: _clear
});

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: App, actions, cmfConnect, Dispatcher, ErrorBoundary, Inject, mock, reduxStorage, sagas, selectors, componentState, getErrorMiddleware, httpMiddleware, reducers, registry, RegistryProvider, store, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dispatcher", function() { return Dispatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getErrorMiddleware", function() { return getErrorMiddleware; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "httpMiddleware", function() { return httpMiddleware; });
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ "./src/actions/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "actions", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _actionCreator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actionCreator */ "./src/actionCreator.js");
/* harmony import */ var _bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bootstrap */ "./src/bootstrap.js");
/* harmony import */ var _cmfConnect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cmfConnect */ "./src/cmfConnect.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cmfConnect", function() { return _cmfConnect__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _cmfModule__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cmfModule */ "./src/cmfModule.js");
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./component */ "./src/component.js");
/* harmony import */ var _Dispatcher__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Dispatcher */ "./src/Dispatcher.js");
/* harmony import */ var _components_ErrorBoundary_ErrorBoundary_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/ErrorBoundary/ErrorBoundary.component */ "./src/components/ErrorBoundary/ErrorBoundary.component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorBoundary", function() { return _components_ErrorBoundary_ErrorBoundary_component__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _expression__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./expression */ "./src/expression.js");
/* harmony import */ var _expressions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./expressions */ "./src/expressions/index.js");
/* harmony import */ var _Inject_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Inject.component */ "./src/Inject.component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Inject", function() { return _Inject_component__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _matchPath__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./matchPath */ "./src/matchPath.js");
/* harmony import */ var _sagas__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./sagas */ "./src/sagas/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sagas", function() { return _sagas__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./selectors */ "./src/selectors/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectors", function() { return _selectors__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./settings */ "./src/settings.js");
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./localStorage */ "./src/localStorage.js");
/* harmony import */ var _onError__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./onError */ "./src/onError.js");
/* harmony import */ var _reduxstorage__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./reduxstorage */ "./src/reduxstorage/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reduxStorage", function() { return _reduxstorage__WEBPACK_IMPORTED_MODULE_17__["default"]; });

/* harmony import */ var _mock__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./mock */ "./src/mock/index.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "mock", function() { return _mock__WEBPACK_IMPORTED_MODULE_18__; });
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./action */ "./src/action.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "App", function() { return _App__WEBPACK_IMPORTED_MODULE_20__["default"]; });

/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./reducers */ "./src/reducers/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return _reducers__WEBPACK_IMPORTED_MODULE_21__["default"]; });

/* harmony import */ var _registry__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./registry */ "./src/registry.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "registry", function() { return _registry__WEBPACK_IMPORTED_MODULE_22__["default"]; });

/* harmony import */ var _RegistryProvider__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./RegistryProvider */ "./src/RegistryProvider.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RegistryProvider", function() { return _RegistryProvider__WEBPACK_IMPORTED_MODULE_23__["default"]; });

/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./store */ "./src/store.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "store", function() { return _store__WEBPACK_IMPORTED_MODULE_24__["default"]; });

/* harmony import */ var _middlewares__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./middlewares */ "./src/middlewares/index.js");
/* harmony import */ var _componentState__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./componentState */ "./src/componentState.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "componentState", function() { return _componentState__WEBPACK_IMPORTED_MODULE_26__["default"]; });

/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./constant */ "./src/constant.js");
/**
 * @module react-cmf
 */


















 // DEPRECATED APIs










var Dispatcher = _Dispatcher__WEBPACK_IMPORTED_MODULE_6__["default"];
var getErrorMiddleware = _middlewares__WEBPACK_IMPORTED_MODULE_25__["default"].error;
var httpMiddleware = _middlewares__WEBPACK_IMPORTED_MODULE_25__["default"].http;

function registerInternals(context) {
  _actionCreator__WEBPACK_IMPORTED_MODULE_1__["default"].register('cmf.saga.start', _actions__WEBPACK_IMPORTED_MODULE_0__["default"].saga.start, context);
  _actionCreator__WEBPACK_IMPORTED_MODULE_1__["default"].register('cmf.saga.stop', _actions__WEBPACK_IMPORTED_MODULE_0__["default"].saga.stop, context);
  _expression__WEBPACK_IMPORTED_MODULE_8__["default"].registerMany(_expressions__WEBPACK_IMPORTED_MODULE_9__["default"], context);
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

/* harmony default export */ __webpack_exports__["default"] = ({
  action: _action__WEBPACK_IMPORTED_MODULE_19__["default"],
  actions: _actions__WEBPACK_IMPORTED_MODULE_0__["default"],
  actionCreator: _actionCreator__WEBPACK_IMPORTED_MODULE_1__["default"],
  bootstrap: _bootstrap__WEBPACK_IMPORTED_MODULE_2__["default"],
  component: _component__WEBPACK_IMPORTED_MODULE_5__["default"],
  connect: _cmfConnect__WEBPACK_IMPORTED_MODULE_3__["default"],
  constants: _constant__WEBPACK_IMPORTED_MODULE_27__["default"],
  expression: _expression__WEBPACK_IMPORTED_MODULE_8__["default"],
  expressions: _expressions__WEBPACK_IMPORTED_MODULE_9__["default"],
  middlewares: _middlewares__WEBPACK_IMPORTED_MODULE_25__["default"],
  module: _cmfModule__WEBPACK_IMPORTED_MODULE_4__["default"],
  onError: _onError__WEBPACK_IMPORTED_MODULE_16__["default"],
  registerInternals: registerInternals,
  registry: _registry__WEBPACK_IMPORTED_MODULE_22__["default"],
  router: {
    matchPath: _matchPath__WEBPACK_IMPORTED_MODULE_11__["default"]
  },
  saga: _sagas__WEBPACK_IMPORTED_MODULE_12__["default"],
  sagas: _sagas__WEBPACK_IMPORTED_MODULE_12__["default"],
  selectors: _selectors__WEBPACK_IMPORTED_MODULE_13__["default"],
  settings: _settings__WEBPACK_IMPORTED_MODULE_14__["default"],
  localStorage: _localStorage__WEBPACK_IMPORTED_MODULE_15__["default"]
});

/***/ }),

/***/ "./src/localStorage.js":
/*!*****************************!*\
  !*** ./src/localStorage.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immutable */ "immutable");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);



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
      source.cmf.components = immutable__WEBPACK_IMPORTED_MODULE_0___default.a.fromJS(source.cmf.components);
    }

    if (source.cmf.collections) {
      source.cmf.collections = immutable__WEBPACK_IMPORTED_MODULE_0___default.a.fromJS(source.cmf.collections);
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
              Object(lodash__WEBPACK_IMPORTED_MODULE_1__["set"])(toKeep, path, value.toJS());
            }
          } else if (path[1] === 'collections') {
            var _value = state.cmf.collections.getIn(path.slice(2));

            if (_value) {
              Object(lodash__WEBPACK_IMPORTED_MODULE_1__["set"])(toKeep, path, _value.toJS());
            }
          }
        }
      });
      localStorage.setItem(key, JSON.stringify(toKeep));
    });
  };
}

/* harmony default export */ __webpack_exports__["default"] = ({
  getState: getState,
  getStoreCallback: getStoreCallback
});

/***/ }),

/***/ "./src/matchPath.js":
/*!**************************!*\
  !*** ./src/matchPath.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return matchPath; });
/* harmony import */ var path_to_regexp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path-to-regexp */ "../../node_modules/path-to-regexp/index.js");
/* harmony import */ var path_to_regexp__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path_to_regexp__WEBPACK_IMPORTED_MODULE_0__);
function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * Beware! Do not modify. Forked from react-router V4
 * Will be available as a dependency
 */

var patternCache = {};
var cacheLimit = 10000;
var cacheCount = 0;

var compilePath = function compilePath(pattern, options) {
  var cacheKey = "".concat(options.end).concat(options.strict);
  var cache = patternCache[cacheKey] || (patternCache[cacheKey] = {});
  if (cache[pattern]) return cache[pattern];
  var keys = [];
  var re = path_to_regexp__WEBPACK_IMPORTED_MODULE_0___default()(pattern, keys, options);
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

/***/ "./src/middlewares/cmf/index.js":
/*!**************************************!*\
  !*** ./src/middlewares/cmf/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../actions */ "./src/actions/index.js");


var cmfMiddleware = function cmfMiddleware(store) {
  return function (next) {
    return function (action) {
      var config = action.cmf;

      if (!config) {
        return next(action);
      }

      if (config.collectionId && action.response) {
        store.dispatch(_actions__WEBPACK_IMPORTED_MODULE_0__["default"].collections.addOrReplace(config.collectionId, action.response));
      }

      return next(action);
    };
  };
};

/* harmony default export */ __webpack_exports__["default"] = (cmfMiddleware);

/***/ }),

/***/ "./src/middlewares/error/index.js":
/*!****************************************!*\
  !*** ./src/middlewares/error/index.js ***!
  \****************************************/
/*! exports provided: URL_REQUIRED_MESSAGE, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "URL_REQUIRED_MESSAGE", function() { return URL_REQUIRED_MESSAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getErrorMiddleware; });
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! invariant */ "../../node_modules/invariant/browser.js");
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(invariant__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actions_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../actions/http */ "./src/actions/http.js");


var URL_REQUIRED_MESSAGE = 'url to post the error is required';
/**
 * create a middleware which post request to server
 * @param  {String} url or path of the api like /api/errors
 * @return {function}      middleware
 */

function getErrorMiddleware(url) {
  invariant__WEBPACK_IMPORTED_MODULE_0___default()(url, URL_REQUIRED_MESSAGE);
  return function (store) {
    return function (next) {
      return function (action) {
        try {
          return next(action);
        } catch (error) {
          return next(_actions_http__WEBPACK_IMPORTED_MODULE_1__["default"].post(url, {
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
getErrorMiddleware.URL_REQUIRED_MESSAGE = URL_REQUIRED_MESSAGE;

/***/ }),

/***/ "./src/middlewares/http/constants.js":
/*!*******************************************!*\
  !*** ./src/middlewares/http/constants.js ***!
  \*******************************************/
/*! exports provided: ACTION_TYPE_HTTP_REQUEST, ACTION_TYPE_HTTP_RESPONSE, ACTION_TYPE_HTTP_ERRORS, ACTION_TYPE_HTTP_REDUCER_ERROR, OPTIONS, GET, HEAD, PATCH, POST, PUT, DELETE, TRACE, CONNECT, HTTP_METHODS, HTTP_STATUS, isHTTPStatus, testHTTPCode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACTION_TYPE_HTTP_REQUEST", function() { return ACTION_TYPE_HTTP_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACTION_TYPE_HTTP_RESPONSE", function() { return ACTION_TYPE_HTTP_RESPONSE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACTION_TYPE_HTTP_ERRORS", function() { return ACTION_TYPE_HTTP_ERRORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACTION_TYPE_HTTP_REDUCER_ERROR", function() { return ACTION_TYPE_HTTP_REDUCER_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OPTIONS", function() { return OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET", function() { return GET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HEAD", function() { return HEAD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PATCH", function() { return PATCH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POST", function() { return POST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PUT", function() { return PUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE", function() { return DELETE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRACE", function() { return TRACE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONNECT", function() { return CONNECT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTTP_METHODS", function() { return HTTP_METHODS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTTP_STATUS", function() { return HTTP_STATUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isHTTPStatus", function() { return isHTTPStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "testHTTPCode", function() { return testHTTPCode; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);

var ACTION_TYPE_HTTP_REQUEST = '@@HTTP/REQUEST';
var ACTION_TYPE_HTTP_RESPONSE = '@@HTTP/RESPONSE';
var ACTION_TYPE_HTTP_ERRORS = '@@HTTP/ERRORS';
var ACTION_TYPE_HTTP_REDUCER_ERROR = 'HTTP_REDUCE_ERROR'; // equal for performance reason

var OPTIONS = 'OPTIONS';
var GET = 'GET';
var HEAD = 'HEAD';
var PATCH = 'PATCH';
var POST = 'POST';
var PUT = 'PUT';
var DELETE = 'DELETE';
var TRACE = 'TRACE';
var CONNECT = 'CONNECT';
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

var isHTTPStatus = function isHTTPStatus(code) {
  return Object(lodash__WEBPACK_IMPORTED_MODULE_0__["find"])(HTTP_STATUS, function (value) {
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

var testHTTPCode = {
  isInformational: function isInformational(code) {
    return !!Object(lodash__WEBPACK_IMPORTED_MODULE_0__["inRange"])(isHTTPStatus(code), 99, 200);
  },
  isSuccess: function isSuccess(code) {
    return !!Object(lodash__WEBPACK_IMPORTED_MODULE_0__["inRange"])(isHTTPStatus(code), 199, 300);
  },
  isRedirection: function isRedirection(code) {
    return !!Object(lodash__WEBPACK_IMPORTED_MODULE_0__["inRange"])(isHTTPStatus(code), 299, 400);
  },
  isClientError: function isClientError(code) {
    return !!Object(lodash__WEBPACK_IMPORTED_MODULE_0__["inRange"])(isHTTPStatus(code), 399, 500);
  },
  isServerError: function isServerError(code) {
    return !!Object(lodash__WEBPACK_IMPORTED_MODULE_0__["inRange"])(isHTTPStatus(code), 499, 600);
  }
};

/***/ }),

/***/ "./src/middlewares/http/csrfHandling.js":
/*!**********************************************!*\
  !*** ./src/middlewares/http/csrfHandling.js ***!
  \**********************************************/
/*! exports provided: getCookie, mergeCSRFToken */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCookie", function() { return getCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeCSRFToken", function() { return mergeCSRFToken; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



/**
 * @module csrfHandling
 * This module target to extract csrf token from a cookie,
 * and then merge it if available into a http config.
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


var findCSRFToken = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["curry"])(function (_ref, cookieValues) {
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

var mergeCSRFTokenConfig = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["curry"])(function (_ref2, httpConfig, csrfToken) {
  var _ref2$CSRFTokenHeader = _ref2.CSRFTokenHeaderKey,
      CSRFTokenHeaderKey = _ref2$CSRFTokenHeader === void 0 ? 'X-CSRF-Token' : _ref2$CSRFTokenHeader;

  if (csrfToken) {
    return Object(lodash__WEBPACK_IMPORTED_MODULE_0__["merge"])({}, httpConfig, {
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
    return Object(lodash__WEBPACK_IMPORTED_MODULE_0__["flow"])([getCookie, parseCookie, findCSRFToken(security), mergeCSRFTokenConfig(security, httpConfig)])();
  };
}

/***/ }),

/***/ "./src/middlewares/http/index.js":
/*!***************************************!*\
  !*** ./src/middlewares/http/index.js ***!
  \***************************************/
/*! exports provided: default, OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT, HTTP_METHODS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _middleware__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./middleware */ "./src/middlewares/http/middleware.js");
/* harmony import */ var _csrfHandling__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./csrfHandling */ "./src/middlewares/http/csrfHandling.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./src/middlewares/http/constants.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OPTIONS", function() { return _constants__WEBPACK_IMPORTED_MODULE_2__["OPTIONS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GET", function() { return _constants__WEBPACK_IMPORTED_MODULE_2__["GET"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HEAD", function() { return _constants__WEBPACK_IMPORTED_MODULE_2__["HEAD"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "POST", function() { return _constants__WEBPACK_IMPORTED_MODULE_2__["POST"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PUT", function() { return _constants__WEBPACK_IMPORTED_MODULE_2__["PUT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DELETE", function() { return _constants__WEBPACK_IMPORTED_MODULE_2__["DELETE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TRACE", function() { return _constants__WEBPACK_IMPORTED_MODULE_2__["TRACE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CONNECT", function() { return _constants__WEBPACK_IMPORTED_MODULE_2__["CONNECT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HTTP_METHODS", function() { return _constants__WEBPACK_IMPORTED_MODULE_2__["HTTP_METHODS"]; });





_middleware__WEBPACK_IMPORTED_MODULE_0__["httpMiddleware"].OPTIONS = _constants__WEBPACK_IMPORTED_MODULE_2__["OPTIONS"];
_middleware__WEBPACK_IMPORTED_MODULE_0__["httpMiddleware"].GET = _constants__WEBPACK_IMPORTED_MODULE_2__["GET"];
_middleware__WEBPACK_IMPORTED_MODULE_0__["httpMiddleware"].HEAD = _constants__WEBPACK_IMPORTED_MODULE_2__["HEAD"];
_middleware__WEBPACK_IMPORTED_MODULE_0__["httpMiddleware"].POST = _constants__WEBPACK_IMPORTED_MODULE_2__["GET"];
_middleware__WEBPACK_IMPORTED_MODULE_0__["httpMiddleware"].PUT = _constants__WEBPACK_IMPORTED_MODULE_2__["PUT"];
_middleware__WEBPACK_IMPORTED_MODULE_0__["httpMiddleware"].DELETE = _constants__WEBPACK_IMPORTED_MODULE_2__["DELETE"];
_middleware__WEBPACK_IMPORTED_MODULE_0__["httpMiddleware"].TRACE = _constants__WEBPACK_IMPORTED_MODULE_2__["TRACE"];
_middleware__WEBPACK_IMPORTED_MODULE_0__["httpMiddleware"].CONNECT = _constants__WEBPACK_IMPORTED_MODULE_2__["CONNECT"];
_middleware__WEBPACK_IMPORTED_MODULE_0__["httpMiddleware"].HTTP_METHODS = _constants__WEBPACK_IMPORTED_MODULE_2__["HTTP_METHODS"];
_middleware__WEBPACK_IMPORTED_MODULE_0__["httpMiddleware"].csrf = _csrfHandling__WEBPACK_IMPORTED_MODULE_1__;
_middleware__WEBPACK_IMPORTED_MODULE_0__["httpMiddleware"].constants = _constants__WEBPACK_IMPORTED_MODULE_2__;
/* harmony default export */ __webpack_exports__["default"] = (_middleware__WEBPACK_IMPORTED_MODULE_0__["httpMiddleware"]);


/***/ }),

/***/ "./src/middlewares/http/middleware.js":
/*!********************************************!*\
  !*** ./src/middlewares/http/middleware.js ***!
  \********************************************/
/*! exports provided: DEFAULT_HTTP_HEADERS, isHTTPRequest, getMethod, mergeConfiguredHeader, mergeOptions, HTTPError, status, handleResponse, httpMiddleware */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_HTTP_HEADERS", function() { return DEFAULT_HTTP_HEADERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isHTTPRequest", function() { return isHTTPRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMethod", function() { return getMethod; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeConfiguredHeader", function() { return mergeConfiguredHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeOptions", function() { return mergeOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTTPError", function() { return HTTPError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "status", function() { return status; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleResponse", function() { return handleResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "httpMiddleware", function() { return httpMiddleware; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/middlewares/http/constants.js");
/* harmony import */ var _csrfHandling__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./csrfHandling */ "./src/middlewares/http/csrfHandling.js");
/* harmony import */ var _actions_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../actions/http */ "./src/actions/http.js");
/* harmony import */ var _httpInterceptors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../httpInterceptors */ "./src/httpInterceptors.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

function isHTTPRequest(action) {
  return action.type in _constants__WEBPACK_IMPORTED_MODULE_0__["HTTP_METHODS"] || Object(lodash__WEBPACK_IMPORTED_MODULE_4__["has"])(action, 'cmf.http');
}
/**
 * @param  {Object} action redux action, sjhould cotains *method* attribute
 * @return {String}        in known HTTP methods
 */

function getMethod(action) {
  return _constants__WEBPACK_IMPORTED_MODULE_0__["HTTP_METHODS"][action.type];
}
function mergeConfiguredHeader(config) {
  // still need to keep the previous header added by action
  return function (options) {
    var headerMergedConfig = _objectSpread(_objectSpread({}, options), {}, {
      headers: _objectSpread(_objectSpread(_objectSpread({}, DEFAULT_HTTP_HEADERS), config.headers), options.headers)
    });

    if (headerMergedConfig.body instanceof FormData) {
      delete headerMergedConfig.headers['Content-Type'];
    }

    return headerMergedConfig;
  };
}
function mergeOptions(action) {
  var options = _objectSpread({
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
  var headers = Object(lodash__WEBPACK_IMPORTED_MODULE_4__["get"])(response, 'headers/values');

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
  if (_constants__WEBPACK_IMPORTED_MODULE_0__["testHTTPCode"].isSuccess(response.status)) {
    return Promise.resolve(response);
  }

  return Promise.reject(new HTTPError(response));
}
function handleResponse(response) {
  if (response.status === _constants__WEBPACK_IMPORTED_MODULE_0__["HTTP_STATUS"].NO_CONTENT) {
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
    var clone = Object(lodash__WEBPACK_IMPORTED_MODULE_4__["get"])(error, 'stack.response.clone');

    if (!clone) {
      dispatch(_actions_http__WEBPACK_IMPORTED_MODULE_2__["default"].onJSError(errorObject, httpAction));
    } else {
      // clone the response object else the next call to text or json
      // triggers an exception Already use
      error.stack.response.clone().text().then(function (response) {
        try {
          errorObject.stack.response = response;
          errorObject.stack.messageObject = JSON.parse(response);
        } finally {
          if (httpAction.onError) {
            dispatch(_actions_http__WEBPACK_IMPORTED_MODULE_2__["default"].onActionError(httpAction, errorObject));
          }

          if (typeof httpAction.onError !== 'function') {
            dispatch(_actions_http__WEBPACK_IMPORTED_MODULE_2__["default"].onError(errorObject));
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

        var httpAction = Object(lodash__WEBPACK_IMPORTED_MODULE_4__["get"])(action, 'cmf.http', action);
        var config = Object(lodash__WEBPACK_IMPORTED_MODULE_4__["flow"])([mergeOptions, mergeConfiguredHeader(middlewareDefaultConfig), Object(_csrfHandling__WEBPACK_IMPORTED_MODULE_1__["mergeCSRFToken"])(middlewareDefaultConfig)])(action);
        return _httpInterceptors__WEBPACK_IMPORTED_MODULE_3__["default"].onRequest(_objectSpread({
          url: httpAction.url
        }, config)).then(function (newConfig) {
          dispatch(_actions_http__WEBPACK_IMPORTED_MODULE_2__["default"].onRequest(newConfig.url, newConfig));

          if (httpAction.onSend) {
            dispatch({
              type: httpAction.onSend,
              httpAction: httpAction
            });
          }

          var onHTTPError = getOnError(dispatch, httpAction);
          return fetch(newConfig.url, newConfig).then(status).then(handleResponse).then(_httpInterceptors__WEBPACK_IMPORTED_MODULE_3__["default"].onResponse).then(function (response) {
            var newAction = _objectSpread({}, action);

            dispatch(_actions_http__WEBPACK_IMPORTED_MODULE_2__["default"].onResponse(response.data));

            if (newAction.transform) {
              newAction.response = newAction.transform(response.data);
            } else {
              newAction.response = response.data;
            }

            if (newAction.onResponse) {
              dispatch(_actions_http__WEBPACK_IMPORTED_MODULE_2__["default"].onActionResponse(newAction, newAction.response, response.headers));
            }

            return next(newAction);
          })["catch"](onHTTPError);
        });
      };
    };
  };
};

/***/ }),

/***/ "./src/middlewares/index.js":
/*!**********************************!*\
  !*** ./src/middlewares/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cmf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cmf */ "./src/middlewares/cmf/index.js");
/* harmony import */ var _http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./http */ "./src/middlewares/http/index.js");
/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./error */ "./src/middlewares/error/index.js");



/* harmony default export */ __webpack_exports__["default"] = ({
  cmf: _cmf__WEBPACK_IMPORTED_MODULE_0__["default"],
  http: _http__WEBPACK_IMPORTED_MODULE_1__["default"],
  error: _error__WEBPACK_IMPORTED_MODULE_2__["default"]
});

/***/ }),

/***/ "./src/mock/collections.js":
/*!*********************************!*\
  !*** ./src/mock/collections.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immutable */ "immutable");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (new immutable__WEBPACK_IMPORTED_MODULE_0__["Map"]());

/***/ }),

/***/ "./src/mock/components.js":
/*!********************************!*\
  !*** ./src/mock/components.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immutable */ "immutable");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_0__);

var components = {
  componentName: {
    componentKey: {
      id: 'componentState',
      open: true
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Object(immutable__WEBPACK_IMPORTED_MODULE_0__["fromJS"])(components));

/***/ }),

/***/ "./src/mock/index.js":
/*!***************************!*\
  !*** ./src/mock/index.js ***!
  \***************************/
/*! exports provided: default, store, Provider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store */ "./src/mock/store.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "store", function() { return _store__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./provider */ "./src/mock/provider.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Provider", function() { return _provider__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/**
 * The mock is in the src folder and there is reason for that
 * In the past without this we have added mocked states to other CMF libraries
 * and when we have let the state structure evolved, tests on those libs were still passing.
 * We believe they embed something that they are not responsible for.
 *
 * So mock are in the src folder because they are part of the library.
 * But they are not referenced in the index.js so they will not be in your build.
 * You have to import the mock from the complete path, ie:
 *
 * ```import mock from 'react-cmf/lib/mock';```
 */


/* harmony default export */ __webpack_exports__["default"] = (_store__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./src/mock/provider.js":
/*!******************************!*\
  !*** ./src/mock/provider.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./store */ "./src/mock/store.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var store = _store__WEBPACK_IMPORTED_MODULE_2__["default"].store();
/**
 * This component help you to mock the provider.
 * If you want to write a pure component that use an other which
 * is connected on CMF, you will need to provide a CMF store.
 * @example
import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-cmf/lib/mock';

import AppMenu from './AppMenu.component';

describe('AppMenu', () => {
	it('should render', () => {
		const wrapper = renderer.create(
			<Provider registry={customRegistry}>
				<AppMenu />
			</Provider>
		).toJSON();
		expect(wrapper).toMatchSnapshot();
	});
});
 */

var MockProvider = /*#__PURE__*/function (_React$Component) {
  _inherits(MockProvider, _React$Component);

  var _super = _createSuper(MockProvider);

  function MockProvider() {
    _classCallCheck(this, MockProvider);

    return _super.apply(this, arguments);
  }

  _createClass(MockProvider, [{
    key: "getChildContext",
    value: function getChildContext() {
      var _this = this;

      var st = this.props.store;

      if (!st) {
        st = store;
      }

      if (this.props.state) {
        st.state = this.props.state;

        st.getState = function () {
          return _this.props.state;
        };
      }

      var context = {
        store: st,
        registry: this.props.registry || {}
      };
      return context;
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "mock-provider"
      }, this.props.children);
    }
  }]);

  return MockProvider;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

MockProvider.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.node.isRequired,
  store: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object,
  state: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object,
  registry: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object
};
MockProvider.childContextTypes = {
  store: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object,
  registry: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (MockProvider);

/***/ }),

/***/ "./src/mock/settings.js":
/*!******************************!*\
  !*** ./src/mock/settings.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var settings = {
  contentTypes: {
    article: {
      id: 'article',
      name: 'Article',
      icon: 'icon-document',
      actions: {
        list: [{
          id: 'add',
          icon: 'icon-add-botton-3',
          name: 'Add article',
          type: 'form/DISPLAY_FORM'
        }],
        primary: [{
          id: 'edit',
          icon: 'fa-pencil',
          name: 'Edit article',
          type: 'form/DISPLAY_FORM'
        }, {
          id: 'delete',
          icon: 'fa-delete',
          name: 'Delete article',
          type: 'DELETE'
        }]
      }
    }
  },
  actions: {
    'menu:article': {
      id: 'menu:article',
      name: 'My article',
      icon: 'icon-article',
      payload: {
        type: '@@router/CALL_HISTORY_METHOD',
        method: 'push',
        args: ['/myarticle']
      }
    },
    'menu:article:items': {
      id: 'menu:article:items',
      name: 'My article',
      icon: 'icon-article',
      payload: {
        type: '@@router/CALL_HISTORY_METHOD',
        method: 'push',
        args: ['/myarticle']
      },
      displayMode: 'splitDropdown',
      actionIds: ['menu:demo', 'menu:actionCreator']
    },
    'menu:items': {
      id: 'menu:items',
      name: 'my items',
      itemsExpression: 'getItems'
    },
    'menu:demo': {
      id: 'menu',
      name: 'Menu',
      icon: 'fa-bars',
      payload: {
        type: 'TEST_MENU'
      }
    },
    'menu:actionCreator': {
      id: 'menu:actionCreator',
      actionCreator: 'action-creator',
      name: 'Action creator',
      icon: 'fa-bars',
      payload: {
        type: 'TEST_ACTION_CREATOR'
      }
    },
    'menu:routerReplace': {
      id: 'routerReplace',
      name: 'Menu',
      icon: 'fa-bars',
      payload: {
        type: 'TEST_MENU',
        cmf: {
          routerReplace: '/test'
        }
      }
    },
    'menu:routerPush': {
      id: 'routerPush',
      name: 'Menu',
      icon: 'fa-bars',
      payload: {
        type: 'TEST_MENU',
        cmf: {
          routerReplace: '/push'
        }
      }
    },
    'menu:href': {
      id: 'href',
      name: 'Menu',
      icon: 'fa-bars',
      actionCreator: 'redirect:conditional',
      href: '/href'
    }
  },
  props: {
    simple: {
      name: 'my app'
    },
    appmenu: {
      actions: ['menu:tuto', 'menu:forum', 'menu:settings'],
      userMenuActions: ['menu:preferences', 'menu:logout'],
      logo: {
        src: 'images/logo.png',
        alt: 'My blog'
      },
      app: 'article'
    },
    homepage: {
      sidemenu: {
        actions: ['menu:article', 'menu:about']
      },
      listview: {
        collectionId: 'article',
        contentType: 'article',
        searchLabel: 'find a article',
        columns: [{
          key: 'name',
          label: 'Name'
        }, {
          key: 'type',
          label: 'Type'
        }, {
          key: 'creator',
          label: 'Creator'
        }, {
          key: 'description',
          label: 'Description'
        }, {
          key: 'write_date',
          label: 'Last modification date',
          dateformat: 'YYYY/MM/DD'
        }],
        sortOn: []
      }
    }
  },
  routes: {
    path: '/',
    component: 'App',
    indexRoute: {
      component: 'SortableListWithSideMenu',
      view: 'homepage'
    },
    childRoutes: [{
      path: 'myarticle',
      component: 'SortableListWithSideMenu',
      view: 'homepage'
    }]
  }
};
/* harmony default export */ __webpack_exports__["default"] = (settings);

/***/ }),

/***/ "./src/mock/store.js":
/*!***************************!*\
  !*** ./src/mock/store.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings */ "./src/mock/settings.js");
/* harmony import */ var _collections__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./collections */ "./src/mock/collections.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components */ "./src/mock/components.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);





var _state = {
  cmf: {
    settings: _settings__WEBPACK_IMPORTED_MODULE_1__["default"],
    collections: _collections__WEBPACK_IMPORTED_MODULE_2__["default"],
    components: _components__WEBPACK_IMPORTED_MODULE_3__["default"]
  }
};
var _notInitializedState = {
  initialized: false,
  cmf: {
    settings: {
      contentTypes: {},
      actions: {},
      views: {},
      props: {}
    }
  }
};
var _store = {
  getState: function getState() {
    return _state;
  },
  dispatch: function dispatch() {
    return 'dispatch';
  },
  subscribe: function subscribe() {}
};
var _registry = {
  '_.route.component:component': function _RouteComponentComponent() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "mock");
  },
  'actionCreator:myactionCreator': function actionCreatorMyactionCreator() {}
};
var _context = {
  store: _store,
  registry: _registry
};
var _emptyContext = {
  store: {
    getState: function getState() {
      return _notInitializedState;
    }
  }
};

function copy(obj) {
  return Object(lodash__WEBPACK_IMPORTED_MODULE_4__["cloneDeep"])(obj);
}

var mock = {
  context: function context(myState, myRegistry) {
    var myContext = copy(_context);

    if (myState) {
      myContext.store.getState = function () {
        return myState;
      };
    }

    if (myRegistry) {
      myContext.registry = myRegistry;
    }

    return myContext;
  },
  emptyContext: function emptyContext() {
    return copy(_emptyContext);
  },
  notInitializedState: function notInitializedState() {
    return copy(_notInitializedState);
  },
  registry: function registry() {
    return copy(_registry);
  },
  state: function state() {
    return copy(_state);
  },
  settings: function settings() {
    return copy(_settings__WEBPACK_IMPORTED_MODULE_1__["default"]);
  },
  store: function store(myState) {
    var myStore = copy(_store);

    if (myState) {
      myStore.getState = function () {
        return myState;
      };
    }

    return myStore;
  }
};
/* harmony default export */ __webpack_exports__["default"] = (mock);

/***/ }),

/***/ "./src/omit.js":
/*!*********************!*\
  !*** ./src/omit.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return omit; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);

// https://github.com/lodash/lodash/issues/2930
function omit(props, keyToOmit) {
  return Object(lodash__WEBPACK_IMPORTED_MODULE_0__["pickBy"])(props, function (v, key) {
    return keyToOmit.indexOf(key) === -1;
  });
}

/***/ }),

/***/ "./src/onError.js":
/*!************************!*\
  !*** ./src/onError.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sentry_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sentry/browser */ "@sentry/browser");
/* harmony import */ var _sentry_browser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sentry_browser__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assert */ "./src/assert.js");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constant */ "./src/constant.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./actions */ "./src/actions/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
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
      Object(_sentry_browser__WEBPACK_IMPORTED_MODULE_0__["withScope"])(function (scope) {
        options.tags.forEach(function (tag) {
          return scope.setTag(tag.key, tag.value);
        });
        Object(_sentry_browser__WEBPACK_IMPORTED_MODULE_0__["captureException"])(error);
      });
    } else {
      Object(_sentry_browser__WEBPACK_IMPORTED_MODULE_0__["captureException"])(error);
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
        type: _constant__WEBPACK_IMPORTED_MODULE_2__["default"].ERROR
      }, info));
    } else {
      ref.store.dispatch(_actions__WEBPACK_IMPORTED_MODULE_3__["default"].http.post(ref.serverURL, info.context, {
        onError: function onError(err) {
          info.reported = false;
          info.reason = serialize(err);
          return _objectSpread({
            type: _constant__WEBPACK_IMPORTED_MODULE_2__["default"].ERROR
          }, info);
        },
        onResponse: function onResponse(response) {
          info.reported = true;
          info.response = response;
          return _objectSpread({
            type: _constant__WEBPACK_IMPORTED_MODULE_2__["default"].ERROR_REPORTED
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
    Object(_sentry_browser__WEBPACK_IMPORTED_MODULE_0__["init"])(_objectSpread({
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
  Object(_assert__WEBPACK_IMPORTED_MODULE_1__["assertTypeOf"])(options, 'onError', 'object');
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
      Object(_sentry_browser__WEBPACK_IMPORTED_MODULE_0__["configureScope"])(function (scope) {
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
  var dsn = Object(lodash__WEBPACK_IMPORTED_MODULE_4__["get"])(settings, 'env.SENTRY_DSN');

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

        ref.actions.push(Object(lodash__WEBPACK_IMPORTED_MODULE_4__["get"])(action, 'type', 'UNKNOWN'));
      }

      if (action.type === _constant__WEBPACK_IMPORTED_MODULE_2__["default"].REQUEST_OK) {
        setupFromSettings(action.settings);
      }

      try {
        return next(action);
      } catch (error) {
        report(error, {
          tags: [{
            key: 'redux-action-type',
            value: Object(lodash__WEBPACK_IMPORTED_MODULE_4__["get"])(action, 'type', 'UNKNOWN')
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

/* harmony default export */ __webpack_exports__["default"] = ({
  bootstrap: bootstrap,
  hasReportURL: hasReportURL,
  hasReportFeature: hasReportFeature,
  getReportInfo: getReportInfo,
  report: report,
  getErrors: getErrors,
  middleware: middleware,
  createObjectURL: createObjectURL,
  revokeObjectURL: revokeObjectURL
});

/***/ }),

/***/ "./src/onEvent.js":
/*!************************!*\
  !*** ./src/onEvent.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immutable */ "immutable");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constant */ "./src/constant.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }





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
    instance.dispatchActionCreator(actionCreator, serializeEvent(arguments.length <= 0 ? undefined : arguments[0]), _objectSpread(_objectSpread({
      props: instance.props
    }, arguments.length <= 1 ? undefined : arguments[1]), config.data || {}));

    if (currentHandler) {
      currentHandler.apply(void 0, arguments);
    }
  };
}

function getOnEventDispatchHandler(instance, config, currentHandler) {
  return function onEventDispatch() {
    var payload = _objectSpread({
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
          acc[key] = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["get"])(args[value[0]], value[1]);
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
var INITIAL_STATE = new immutable__WEBPACK_IMPORTED_MODULE_0___default.a.Map();

function addOnEventSupport(handlerType, instance, props, key) {
  if (_constant__WEBPACK_IMPORTED_MODULE_1__["default"]["IS_HANDLER_".concat(handlerType, "_REGEX")].test(key)) {
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
    var handlerKey = key.replace(_constant__WEBPACK_IMPORTED_MODULE_1__["default"]["IS_HANDLER_".concat(handlerType)], '');
    var originalEventHandler = props[handlerKey] || instance.props[handlerKey]; // eslint-disable-next-line no-param-reassign

    props[handlerKey] = GET_HANDLER[handlerType](instance, instance.props[key], originalEventHandler);
  }
}

/* harmony default export */ __webpack_exports__["default"] = ({
  getOnEventActionCreatorHandler: getOnEventActionCreatorHandler,
  getOnEventDispatchHandler: getOnEventDispatchHandler,
  getOnEventSetStateHandler: getOnEventSetStateHandler,
  addOnEventSupport: addOnEventSupport,
  ACTION_CREATOR: ACTION_CREATOR,
  DISPATCH: DISPATCH,
  SETSTATE: SETSTATE
});

/***/ }),

/***/ "./src/reducers/collectionsReducers.js":
/*!*********************************************!*\
  !*** ./src/reducers/collectionsReducers.js ***!
  \*********************************************/
/*! exports provided: defaultState, getId, getActionWithCollectionIdAsArray, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultState", function() { return defaultState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getId", function() { return getId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getActionWithCollectionIdAsArray", function() { return getActionWithCollectionIdAsArray; });
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immutable */ "immutable");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! invariant */ "../../node_modules/invariant/browser.js");
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(invariant__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constant */ "./src/constant.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * @module react-cmf/lib/reducers/collectionsReducers
 */



var defaultState = new immutable__WEBPACK_IMPORTED_MODULE_0__["Map"]();
/**
 * Get element id. If it doesn't have "id" property, we consider it as immutable.
 */

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
    return _objectSpread(_objectSpread({}, action), {}, {
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

      if (immutable__WEBPACK_IMPORTED_MODULE_0__["List"].isList(element)) {
        return s.setIn(action.collectionId, element.push(e));
      }

      if (immutable__WEBPACK_IMPORTED_MODULE_0__["Map"].isMap(element)) {
        return s.setIn(action.collectionId, element.merge(e));
      }

      return state;
    }, state);
  }

  return state;
}

function deleteListElements(state, action) {
  function shouldBeRemoved(element) {
    return action.operations["delete"].indexOf(getId(element)) >= 0;
  }

  var collection = state.getIn(action.collectionId);

  if (collection.some(shouldBeRemoved)) {
    return state.setIn(action.collectionId, collection.filterNot(shouldBeRemoved));
  }

  return state;
}

function deleteMapElements(state, action) {
  var collection = state.getIn(action.collectionId);

  if (action.operations["delete"].some(function (id) {
    return collection.has(id);
  })) {
    var changedCollection = action.operations["delete"].reduce(function (collectionAccu, element) {
      return collectionAccu["delete"](element);
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
  if (action.operations["delete"]) {
    var collection = state.getIn(action.collectionId);

    if (immutable__WEBPACK_IMPORTED_MODULE_0__["Map"].isMap(collection)) {
      return deleteMapElements(state, action);
    } else if (immutable__WEBPACK_IMPORTED_MODULE_0__["List"].isList(collection)) {
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

    if (immutable__WEBPACK_IMPORTED_MODULE_0__["Map"].isMap(collection)) {
      return updateMapElements(state, action);
    } else if (immutable__WEBPACK_IMPORTED_MODULE_0__["List"].isList(collection)) {
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
    case _constant__WEBPACK_IMPORTED_MODULE_2__["default"].COLLECTION_ADD_OR_REPLACE:
      return state.setIn(newAction.collectionId, Object(immutable__WEBPACK_IMPORTED_MODULE_0__["fromJS"])(newAction.data));

    case _constant__WEBPACK_IMPORTED_MODULE_2__["default"].COLLECTION_REMOVE:
      if (!state.getIn(newAction.collectionId)) {
        invariant__WEBPACK_IMPORTED_MODULE_1___default()("development" === 'production', "Can't remove collection ".concat(newAction.collectionId, " since it doesn't exist."));
        return state;
      }

      return state.deleteIn(newAction.collectionId);

    case _constant__WEBPACK_IMPORTED_MODULE_2__["default"].COLLECTION_MUTATE:
      return mutateCollection(state, newAction);

    default:
      return state;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (collectionsReducers);

/***/ }),

/***/ "./src/reducers/componentsReducers.js":
/*!********************************************!*\
  !*** ./src/reducers/componentsReducers.js ***!
  \********************************************/
/*! exports provided: defaultState, warnIfAnotherComponentBind, warnIfRemovingStateDoesntExist, errorIfMergingStateDoesntExist, componentsReducers, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultState", function() { return defaultState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "warnIfAnotherComponentBind", function() { return warnIfAnotherComponentBind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "warnIfRemovingStateDoesntExist", function() { return warnIfRemovingStateDoesntExist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "errorIfMergingStateDoesntExist", function() { return errorIfMergingStateDoesntExist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "componentsReducers", function() { return componentsReducers; });
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immutable */ "immutable");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! invariant */ "../../node_modules/invariant/browser.js");
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(invariant__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constant */ "./src/constant.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* eslint no-console: ["error", { allow: ["warn"] }] */

/**
 * @module react-cmf/lib/reducers/componentsReducers
 */




var defaultState = new immutable__WEBPACK_IMPORTED_MODULE_0__["Map"]();
/**
 * given the state and action, determine if another component try to bind to a specific
 * component name space state and warn the user about this behaviour
 * @param {Object} state the CMF application state
 * @param {Object} action a redux action
 */

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
    invariant__WEBPACK_IMPORTED_MODULE_1___default()("development" === 'production', "Error, the component ".concat(action.componentName, " try to mutate a non existing\n State namespace ").concat(action.key, ", this namespace may be not yet created or already removed."));
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
    case _constant__WEBPACK_IMPORTED_MODULE_2__["default"].COMPONENT_ADD_STATE:
      warnIfAnotherComponentBind(state, action);

      if (action.initialComponentState) {
        return state.setIn([action.componentName, action.key], Object(immutable__WEBPACK_IMPORTED_MODULE_0__["fromJS"])(action.initialComponentState));
      }

      return state.setIn([action.componentName, action.key], new immutable__WEBPACK_IMPORTED_MODULE_0__["Map"]());

    case _constant__WEBPACK_IMPORTED_MODULE_2__["default"].COMPONENT_MERGE_STATE:
      errorIfMergingStateDoesntExist(state, action);
      return state.mergeIn([action.componentName, action.key], Object(immutable__WEBPACK_IMPORTED_MODULE_0__["fromJS"])(action.componentState));

    case _constant__WEBPACK_IMPORTED_MODULE_2__["default"].COMPONENT_REMOVE_STATE:
      warnIfRemovingStateDoesntExist(state, action);
      return state.deleteIn([action.componentName, action.key]);

    default:
      {
        var subAction = Object(lodash__WEBPACK_IMPORTED_MODULE_3__["get"])(action, 'cmf.componentState');

        if (subAction) {
          return componentsReducers(state, subAction);
        }

        return state;
      }
  }
}
/* harmony default export */ __webpack_exports__["default"] = (componentsReducers);

/***/ }),

/***/ "./src/reducers/index.js":
/*!*******************************!*\
  !*** ./src/reducers/index.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _collectionsReducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./collectionsReducers */ "./src/reducers/collectionsReducers.js");
/* harmony import */ var _componentsReducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./componentsReducers */ "./src/reducers/componentsReducers.js");
/* harmony import */ var _settingsReducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./settingsReducers */ "./src/reducers/settingsReducers.js");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constant */ "./src/constant.js");
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

  if (action.type === _constant__WEBPACK_IMPORTED_MODULE_4__["default"].ERROR) {
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


/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  collections: _collectionsReducers__WEBPACK_IMPORTED_MODULE_1__["default"],
  components: _componentsReducers__WEBPACK_IMPORTED_MODULE_2__["componentsReducers"],
  settings: _settingsReducers__WEBPACK_IMPORTED_MODULE_3__["settingsReducers"],
  errors: errorsReducer
}));

/***/ }),

/***/ "./src/reducers/settingsReducers.js":
/*!******************************************!*\
  !*** ./src/reducers/settingsReducers.js ***!
  \******************************************/
/*! exports provided: defaultState, attachRef, attachRefs, settingsReducers, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultState", function() { return defaultState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "attachRef", function() { return attachRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "attachRefs", function() { return attachRefs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settingsReducers", function() { return settingsReducers; });
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! invariant */ "../../node_modules/invariant/browser.js");
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(invariant__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constant */ "./src/constant.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * @module react-cmf/lib/reducers/settingsReducers
 */

/* eslint no-underscore-dangle: ["error", {"allow": ["_ref"] }] */



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

function attachRef(refs, obj) {
  if (obj === null || _typeof(obj) !== 'object' || Array.isArray(obj)) {
    return obj;
  }

  var props = _objectSpread({}, obj);

  if (props._ref) {
    invariant__WEBPACK_IMPORTED_MODULE_0___default()(refs[props._ref], "CMF/Settings: Reference '".concat(props._ref, "' not found"));
    props = _objectSpread(_objectSpread({}, refs[props._ref]), obj);
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

  var settings = _objectSpread({
    props: {}
  }, rest);

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
    case _constant__WEBPACK_IMPORTED_MODULE_1__["default"].REQUEST_OK:
      return _objectSpread(_objectSpread({}, state), {}, {
        initialized: true
      }, prepareSettings(action.settings));

    case _constant__WEBPACK_IMPORTED_MODULE_1__["default"].REQUEST_KO:
      // eslint-disable-next-line no-console
      console.error("Settings can't be loaded ".concat(Object(lodash__WEBPACK_IMPORTED_MODULE_2__["get"])(action, 'error.message')), action.error);
      return state;

    default:
      return state;
  }
}
/* harmony default export */ __webpack_exports__["default"] = (settingsReducers);

/***/ }),

/***/ "./src/reduxstorage/index.js":
/*!***********************************!*\
  !*** ./src/reduxstorage/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _reduxLocalStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reduxLocalStorage */ "./src/reduxstorage/reduxLocalStorage.js");
/**
 * This is a CMF plugin that let you configure your store
 */

/* harmony default export */ __webpack_exports__["default"] = ({
  localStorage: _reduxLocalStorage__WEBPACK_IMPORTED_MODULE_0__
});

/***/ }),

/***/ "./src/reduxstorage/redux-storage-decorator-immutablejs.js":
/*!*****************************************************************!*\
  !*** ./src/reduxstorage/redux-storage-decorator-immutablejs.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immutable */ "immutable");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// FIXME: should be contribution

/* harmony default export */ __webpack_exports__["default"] = (function (engine) {
  var whitelist = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  return _objectSpread(_objectSpread({}, engine), {}, {
    load: function load() {
      if (true) {
        // eslint-disable-next-line no-console
        console.warn('DEPRECATED: this API will be removed in the next major release');
      }

      return engine.load().then(function (result) {
        whitelist.forEach(function (keys) {
          if (typeof keys === 'string') {
            keys = [keys]; // eslint-disable-line no-param-reassign
          }

          var tmp = result;
          keys.forEach(function (key, index) {
            if (tmp && index === keys.length - 1) {
              tmp[key] = Object(immutable__WEBPACK_IMPORTED_MODULE_0__["fromJS"])(tmp[key]);
            } else if (tmp) {
              tmp = tmp[key];
            }
          });
        });
        return result;
      });
    }
  });
});

/***/ }),

/***/ "./src/reduxstorage/reduxLocalStorage.js":
/*!***********************************************!*\
  !*** ./src/reduxstorage/reduxLocalStorage.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-storage */ "../../node_modules/redux-storage/build/index.js");
/* harmony import */ var redux_storage__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_storage__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_storage_engine_localstorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-storage-engine-localstorage */ "../../node_modules/redux-storage-engine-localstorage/build/index.js");
/* harmony import */ var redux_storage_engine_localstorage__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_storage_engine_localstorage__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_storage_decorator_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-storage-decorator-filter */ "../../node_modules/redux-storage-decorator-filter/build/index.js");
/* harmony import */ var redux_storage_decorator_filter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_storage_decorator_filter__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _redux_storage_decorator_immutablejs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./redux-storage-decorator-immutablejs */ "./src/reduxstorage/redux-storage-decorator-immutablejs.js");




var CMF_IMMUTABLE_PATHS = [['cmf', 'components'], ['cmf', 'collections']];
var CMF_MIDDLEWARE_BLACK_LIST = ['@@INIT', '@@router/LOCATION_CHANGE'];

function loadInitialState() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  if (true) {
    // eslint-disable-next-line no-console
    console.warn('DEPRECATED: this API will be removed in the next major release');
  }

  var key = options.key,
      _options$immutables = options.immutables,
      immutables = _options$immutables === void 0 ? [] : _options$immutables,
      _options$whitelist = options.whitelist,
      whitelist = _options$whitelist === void 0 ? [] : _options$whitelist,
      _options$blacklist = options.blacklist,
      blacklist = _options$blacklist === void 0 ? [] : _options$blacklist,
      _options$middlewareWh = options.middlewareWhitelist,
      middlewareWhitelist = _options$middlewareWh === void 0 ? [] : _options$middlewareWh,
      _options$middlewareBl = options.middlewareBlacklist,
      middlewareBlacklist = _options$middlewareBl === void 0 ? [] : _options$middlewareBl;
  var engine = redux_storage_engine_localstorage__WEBPACK_IMPORTED_MODULE_1___default()(key);
  engine = redux_storage_decorator_filter__WEBPACK_IMPORTED_MODULE_2___default()(engine, whitelist, blacklist);
  var ipaths = [];
  CMF_IMMUTABLE_PATHS.forEach(function (p) {
    return ipaths.push(p);
  });
  immutables.forEach(function (p) {
    return ipaths.push(p);
  });
  engine = Object(_redux_storage_decorator_immutablejs__WEBPACK_IMPORTED_MODULE_3__["default"])(engine, ipaths);
  var mblack = [];
  CMF_MIDDLEWARE_BLACK_LIST.forEach(function (m) {
    return mblack.push(m);
  });
  middlewareBlacklist.forEach(function (m) {
    return mblack.push(m);
  });
  var storageMiddleware = redux_storage__WEBPACK_IMPORTED_MODULE_0__["createMiddleware"](engine, mblack, middlewareWhitelist);
  return redux_storage__WEBPACK_IMPORTED_MODULE_0__["createLoader"](engine)({
    dispatch: function dispatch() {}
  }).then(function (initialState) {
    return {
      initialState: initialState,
      storageMiddleware: storageMiddleware,
      engine: engine
    };
  });
}

function saveOnReload(_ref) {
  var engine = _ref.engine,
      store = _ref.store;

  if (true) {
    // eslint-disable-next-line no-console
    console.warn('DEPRECATED: this API will be removed in the next major release');
  }

  window.addEventListener('beforeunload', function () {
    engine.save(store.getState()); // localstorage is sync
  });
}

/* harmony default export */ __webpack_exports__["default"] = ({
  loadInitialState: loadInitialState,
  saveOnReload: saveOnReload
});

/***/ }),

/***/ "./src/register.js":
/*!*************************!*\
  !*** ./src/register.js ***!
  \*************************/
/*! exports provided: registerInternals */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerInternals", function() { return registerInternals; });
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ "./src/actions/index.js");
/* harmony import */ var _actionCreator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actionCreator */ "./src/actionCreator.js");
/* harmony import */ var _expression__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./expression */ "./src/expression.js");
/* harmony import */ var _expressions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./expressions */ "./src/expressions/index.js");



 // eslint-disable-next-line import/prefer-default-export

function registerInternals(context) {
  _actionCreator__WEBPACK_IMPORTED_MODULE_1__["default"].register('cmf.saga.start', _actions__WEBPACK_IMPORTED_MODULE_0__["default"].saga.start, context);
  _actionCreator__WEBPACK_IMPORTED_MODULE_1__["default"].register('cmf.saga.stop', _actions__WEBPACK_IMPORTED_MODULE_0__["default"].saga.stop, context);
  _expression__WEBPACK_IMPORTED_MODULE_2__["default"].registerMany(_expressions__WEBPACK_IMPORTED_MODULE_3__["default"], context);
}

/***/ }),

/***/ "./src/registry.js":
/*!*************************!*\
  !*** ./src/registry.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Internal. This is the core of react-cmf.
 * The registry will register everything from a react component to redux action.
 * @module react-cmf/lib/registry
 */

/* eslint no-underscore-dangle: ["error", {"allow": ["_registry", "_isLocked"] }] */

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

/* harmony default export */ __webpack_exports__["default"] = ({
  Registry: Registry,
  addToRegistry: addToRegistry,
  getRegistry: getRegistry,
  getFromRegistry: getFromRegistry,
  getRegisterMany: getRegisterMany,
  lock: lock,
  registerMany: registerMany
});

/***/ }),

/***/ "./src/sagas/collection.js":
/*!*********************************!*\
  !*** ./src/sagas/collection.js ***!
  \*********************************/
/*! exports provided: waitFor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "waitFor", function() { return waitFor; });
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../selectors */ "./src/selectors/index.js");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga */ "redux-saga");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_1__);
var _marked = /*#__PURE__*/regeneratorRuntime.mark(waitFor);


/**
 * this saga ends when the collection is available
 * @param {string} id of the collection to wait for
 * @param {number} interval in ms
 */


var _effects = redux_saga__WEBPACK_IMPORTED_MODULE_1__["effects"],
    call = _effects.call,
    select = _effects.select;
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
          return select(_selectors__WEBPACK_IMPORTED_MODULE_0__["default"].collections.get, id);

        case 4:
          collection = _context.sent;

          if (!(collection !== undefined)) {
            _context.next = 7;
            break;
          }

          return _context.abrupt("break", 11);

        case 7:
          _context.next = 9;
          return call(redux_saga__WEBPACK_IMPORTED_MODULE_1__["delay"], interval);

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

/***/ "./src/sagas/component.js":
/*!********************************!*\
  !*** ./src/sagas/component.js ***!
  \********************************/
/*! exports provided: register, get, registerMany, isActionCancelable, onSagaStart, handle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get", function() { return get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerMany", function() { return registerMany; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isActionCancelable", function() { return isActionCancelable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onSagaStart", function() { return onSagaStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handle", function() { return handle; });
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constant */ "./src/constant.js");
/* harmony import */ var _registry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../registry */ "./src/registry.js");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-saga */ "redux-saga");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_2__);
var _marked = /*#__PURE__*/regeneratorRuntime.mark(onSagaStart),
    _marked2 = /*#__PURE__*/regeneratorRuntime.mark(handle);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }



/**
 * This function register a saga in the cmf registry
 * @param {string} id the saga id you want
 * @param {generator} saga the saga generator
 * @param {object} context optional context to get the registry
 */


var _effects = redux_saga__WEBPACK_IMPORTED_MODULE_2__["effects"],
    spawn = _effects.spawn,
    cancel = _effects.cancel,
    take = _effects.take,
    takeEvery = _effects.takeEvery;
function register(id, saga, context) {
  _registry__WEBPACK_IMPORTED_MODULE_1__["default"].addToRegistry("SAGA:".concat(id), saga, context);
}
/**
 * This function allow to get a saga from the registry
 * @param {string} id the saga id you want
 * @param {object} context optional context to get the registry
 */

function get(id, context) {
  return _registry__WEBPACK_IMPORTED_MODULE_1__["default"].getFromRegistry("SAGA:".concat(id), context);
}
var registerMany = _registry__WEBPACK_IMPORTED_MODULE_1__["default"].getRegisterMany(register);
var isActionCancelable = function isActionCancelable(startAction) {
  return function (action) {
    return action.type === "".concat(_constant__WEBPACK_IMPORTED_MODULE_0__["default"].WILL_UNMOUNT_SAGA_STOP, "_").concat(startAction.saga) && startAction.event.componentId === action.event.componentId;
  };
};
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
          return spawn.apply(void 0, [saga, _objectSpread(_objectSpread({}, action.props), {}, {
            // deprecated: you should only read { componentId }
            componentId: action.componentId
          })].concat(_toConsumableArray(sagaArgs)));

        case 10:
          task = _context.sent;
          _context.next = 13;
          return take(isActionCancelable(action));

        case 13:
          _context.next = 15;
          return cancel(task);

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
          return takeEvery(_constant__WEBPACK_IMPORTED_MODULE_0__["default"].DID_MOUNT_SAGA_START, onSagaStart);

        case 2:
          _context2.next = 4;
          return take('DO_NOT_QUIT');

        case 4:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2);
}

/***/ }),

/***/ "./src/sagas/http.js":
/*!***************************!*\
  !*** ./src/sagas/http.js ***!
  \***************************/
/*! exports provided: HTTP, handleCSRFToken, HTTPError, handleBody, handleError, handleHttpResponse, encodePayload, httpFetch, wrapFetch, httpPost, httpPatch, httpPut, httpDelete, httpGet, setDefaultConfig, setDefaultLanguage, handleDefaultHttpConfiguration, getDefaultConfig, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTTP", function() { return HTTP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleCSRFToken", function() { return handleCSRFToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTTPError", function() { return HTTPError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleBody", function() { return handleBody; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleError", function() { return handleError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleHttpResponse", function() { return handleHttpResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "encodePayload", function() { return encodePayload; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "httpFetch", function() { return httpFetch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrapFetch", function() { return wrapFetch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "httpPost", function() { return httpPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "httpPatch", function() { return httpPatch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "httpPut", function() { return httpPut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "httpDelete", function() { return httpDelete; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "httpGet", function() { return httpGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setDefaultConfig", function() { return setDefaultConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setDefaultLanguage", function() { return setDefaultLanguage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleDefaultHttpConfiguration", function() { return handleDefaultHttpConfiguration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDefaultConfig", function() { return getDefaultConfig; });
/* harmony import */ var _middlewares_http_csrfHandling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../middlewares/http/csrfHandling */ "./src/middlewares/http/csrfHandling.js");
/* harmony import */ var _middlewares_http_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../middlewares/http/constants */ "./src/middlewares/http/constants.js");
/* harmony import */ var _httpInterceptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../httpInterceptors */ "./src/httpInterceptors.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux-saga */ "redux-saga");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_4__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _marked = /*#__PURE__*/regeneratorRuntime.mark(wrapFetch),
    _marked2 = /*#__PURE__*/regeneratorRuntime.mark(httpPost),
    _marked3 = /*#__PURE__*/regeneratorRuntime.mark(httpPatch),
    _marked4 = /*#__PURE__*/regeneratorRuntime.mark(httpPut),
    _marked5 = /*#__PURE__*/regeneratorRuntime.mark(httpDelete),
    _marked6 = /*#__PURE__*/regeneratorRuntime.mark(httpGet);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




/**
 * Storage point for the doc setup using `setDefaultConfig`
 */



var _effects = redux_saga__WEBPACK_IMPORTED_MODULE_4__["effects"],
    call = _effects.call,
    put = _effects.put;
var HTTP = {
  defaultConfig: null
};
/**
 * merge the CSRFToken handling rule from the module defaultConfig
 * into config argument
 * @param {Object} config
 * @returns {Function}
 */

function handleCSRFToken(config) {
  return Object(_middlewares_http_csrfHandling__WEBPACK_IMPORTED_MODULE_0__["mergeCSRFToken"])({
    security: config.security
  })(config);
}
var HTTPError = /*#__PURE__*/function (_Error) {
  _inherits(HTTPError, _Error);

  var _super = _createSuper(HTTPError);

  function HTTPError(_ref) {
    var _this;

    var data = _ref.data,
        response = _ref.response;

    _classCallCheck(this, HTTPError);

    _this = _super.call(this, response.statusText);
    _this.name = "HTTP ".concat(response.status);
    _this.data = data;
    _this.response = response;
    return _this;
  }

  return HTTPError;
}( /*#__PURE__*/_wrapNativeSuper(Error));
/**
 * handleHttpResponse - handle the http body
 *
 * @param  {Response} response A response object
 * @return {Promise}           A promise that resolves with the result of parsing the body
 */

function handleBody(response) {
  var methodBody = 'text';
  var headers = Object(lodash__WEBPACK_IMPORTED_MODULE_3__["get"])(response, 'headers', new Headers());
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
  if (!_middlewares_http_constants__WEBPACK_IMPORTED_MODULE_1__["testHTTPCode"].isSuccess(response.status)) {
    return Promise.reject(response);
  }

  if (response.status === _middlewares_http_constants__WEBPACK_IMPORTED_MODULE_1__["HTTP_STATUS"].NO_CONTENT) {
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

  var params = Object(lodash__WEBPACK_IMPORTED_MODULE_3__["merge"])({
    credentials: 'same-origin',
    headers: defaultHeaders,
    method: method
  }, _objectSpread(_objectSpread({}, HTTP.defaultConfig), config));
  return fetch(url, handleCSRFToken(_objectSpread(_objectSpread({}, params), {}, {
    body: encodePayload(params.headers, payload)
  }))).then(handleHttpResponse)["catch"](handleError);
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
          method = _args.length > 2 && _args[2] !== undefined ? _args[2] : _middlewares_http_constants__WEBPACK_IMPORTED_MODULE_1__["HTTP_METHODS"].GET;
          payload = _args.length > 3 ? _args[3] : undefined;
          options = _args.length > 4 ? _args[4] : undefined;
          _context.next = 5;
          return call(_httpInterceptors__WEBPACK_IMPORTED_MODULE_2__["default"].onRequest, _objectSpread({
            url: url,
            method: method,
            payload: payload
          }, config));

        case 5:
          newConfig = _context.sent;
          _context.next = 8;
          return call(httpFetch, newConfig.url, newConfig, newConfig.method, newConfig.payload);

        case 8:
          answer = _context.sent;
          _context.next = 11;
          return call(_httpInterceptors__WEBPACK_IMPORTED_MODULE_2__["default"].onResponse, answer);

        case 11:
          silent = Object(lodash__WEBPACK_IMPORTED_MODULE_3__["get"])(options, 'silent');

          if (!(silent !== true && answer instanceof Error)) {
            _context.next = 15;
            break;
          }

          _context.next = 15;
          return put({
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
            type: _middlewares_http_constants__WEBPACK_IMPORTED_MODULE_1__["ACTION_TYPE_HTTP_ERRORS"]
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
          return _context2.delegateYield(wrapFetch(url, config, _middlewares_http_constants__WEBPACK_IMPORTED_MODULE_1__["HTTP_METHODS"].POST, payload, options), "t0", 1);

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
          return _context3.delegateYield(wrapFetch(url, config, _middlewares_http_constants__WEBPACK_IMPORTED_MODULE_1__["HTTP_METHODS"].PATCH, payload, options), "t0", 1);

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
          return _context4.delegateYield(wrapFetch(url, config, _middlewares_http_constants__WEBPACK_IMPORTED_MODULE_1__["HTTP_METHODS"].PUT, payload, options), "t0", 1);

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
          return _context5.delegateYield(wrapFetch(url, config, _middlewares_http_constants__WEBPACK_IMPORTED_MODULE_1__["HTTP_METHODS"].DELETE, undefined, options), "t0", 1);

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
          return _context6.delegateYield(wrapFetch(url, config, _middlewares_http_constants__WEBPACK_IMPORTED_MODULE_1__["HTTP_METHODS"].GET, undefined, options), "t0", 1);

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
  if (Object(lodash__WEBPACK_IMPORTED_MODULE_3__["get"])(HTTP, 'defaultConfig.headers')) {
    HTTP.defaultConfig.headers['Accept-Language'] = language;
  } else {
    // eslint-disable-next-line no-console
    throw new Error('ERROR: you should call setDefaultConfig.');
  }
}
var handleDefaultHttpConfiguration = Object(lodash__WEBPACK_IMPORTED_MODULE_3__["curry"])(function (defaultHttpConfig, httpConfig) {
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
    Object(lodash__WEBPACK_IMPORTED_MODULE_3__["merge"])({}, defaultHttpConfig, httpConfig)
  );
});
/**
 * getDefaultConfig - return the defaultConfig
 *
 * @return {object}  the defaultConfig used by cmf
 */

function getDefaultConfig() {
  return HTTP.defaultConfig;
}
/* harmony default export */ __webpack_exports__["default"] = ({
  "delete": httpDelete,
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
      "delete": /*#__PURE__*/regeneratorRuntime.mark(function configuredDelete(url) {
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
                return call(httpDelete, url, configEnhancer(config), options);

              case 4:
                return _context7.abrupt("return", _context7.sent);

              case 5:
              case "end":
                return _context7.stop();
            }
          }
        }, configuredDelete);
      }),
      get: /*#__PURE__*/regeneratorRuntime.mark(function configuredGet(url) {
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
                return call(httpGet, url, configEnhancer(config), options);

              case 4:
                return _context8.abrupt("return", _context8.sent);

              case 5:
              case "end":
                return _context8.stop();
            }
          }
        }, configuredGet);
      }),
      post: /*#__PURE__*/regeneratorRuntime.mark(function configuredPost(url, payload) {
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
                return call(httpPost, url, payload, configEnhancer(config), options);

              case 4:
                return _context9.abrupt("return", _context9.sent);

              case 5:
              case "end":
                return _context9.stop();
            }
          }
        }, configuredPost);
      }),
      put: /*#__PURE__*/regeneratorRuntime.mark(function configuredPut(url, payload) {
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
                return call(httpPut, url, payload, configEnhancer(config), options);

              case 4:
                return _context10.abrupt("return", _context10.sent);

              case 5:
              case "end":
                return _context10.stop();
            }
          }
        }, configuredPut);
      }),
      patch: /*#__PURE__*/regeneratorRuntime.mark(function configuredPatch(url, payload) {
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
                return call(httpPatch, url, payload, configEnhancer(config), options);

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
});

/***/ }),

/***/ "./src/sagas/index.js":
/*!****************************!*\
  !*** ./src/sagas/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./http */ "./src/sagas/http.js");
/* harmony import */ var _putActionCreator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./putActionCreator */ "./src/sagas/putActionCreator.js");
/* harmony import */ var _collection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./collection */ "./src/sagas/collection.js");
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component */ "./src/sagas/component.js");




/* harmony default export */ __webpack_exports__["default"] = ({
  // shortcut
  get: _component__WEBPACK_IMPORTED_MODULE_3__["get"],
  register: _component__WEBPACK_IMPORTED_MODULE_3__["register"],
  registerMany: _component__WEBPACK_IMPORTED_MODULE_3__["registerMany"],
  collection: _collection__WEBPACK_IMPORTED_MODULE_2__,
  component: _component__WEBPACK_IMPORTED_MODULE_3__,
  http: _http__WEBPACK_IMPORTED_MODULE_0__["default"],
  putActionCreator: _putActionCreator__WEBPACK_IMPORTED_MODULE_1__["default"]
});

/***/ }),

/***/ "./src/sagas/putActionCreator.js":
/*!***************************************!*\
  !*** ./src/sagas/putActionCreator.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actionCreator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actionCreator */ "./src/actionCreator.js");
/* harmony import */ var _registry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../registry */ "./src/registry.js");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-saga */ "redux-saga");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_2__);
var _marked = /*#__PURE__*/regeneratorRuntime.mark(putActionCreator);

/**
 * This module provide helpers to use redux-saga in the CMF context
 * @module react-cmf/lib/saga
 * @example
import cmf from '@talend/react-cmf';

cmf.saga.putActionCreator('myaction', {}, {});
 */



var _effects = redux_saga__WEBPACK_IMPORTED_MODULE_2__["effects"],
    put = _effects.put,
    select = _effects.select;

function putActionCreator(actionCreatorId, event, data, optContext) {
  var state, context, actionCreator;
  return regeneratorRuntime.wrap(function putActionCreator$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return select();

        case 2:
          state = _context.sent;
          context = optContext || {
            registry: _registry__WEBPACK_IMPORTED_MODULE_1__["default"].getRegistry(),
            store: {
              getState: function getState() {
                return state;
              }
            }
          };
          actionCreator = _actionCreator__WEBPACK_IMPORTED_MODULE_0__["default"].get(context, actionCreatorId);
          _context.next = 7;
          return put(actionCreator(event, data, context));

        case 7:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}

/* harmony default export */ __webpack_exports__["default"] = (putActionCreator);

/***/ }),

/***/ "./src/selectors/collections.js":
/*!**************************************!*\
  !*** ./src/selectors/collections.js ***!
  \**************************************/
/*! exports provided: getAll, get, findListItem, toJS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAll", function() { return getAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get", function() { return get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findListItem", function() { return findListItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toJS", function() { return toJS; });
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immutable */ "immutable");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _toJS__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toJS */ "./src/selectors/toJS.js");


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

  if (immutable__WEBPACK_IMPORTED_MODULE_0__["List"].isList(collectionOrCollectionSubset)) {
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
    selectors[joinedPath] = Object(_toJS__WEBPACK_IMPORTED_MODULE_1__["default"])(function (calledState) {
      return get(calledState, path);
    });
  }

  return selectors[joinedPath](state);
}

/***/ }),

/***/ "./src/selectors/index.js":
/*!********************************!*\
  !*** ./src/selectors/index.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _collections__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./collections */ "./src/selectors/collections.js");
/* harmony import */ var _toJS__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toJS */ "./src/selectors/toJS.js");


/* harmony default export */ __webpack_exports__["default"] = ({
  collections: _collections__WEBPACK_IMPORTED_MODULE_0__,
  toJS: _toJS__WEBPACK_IMPORTED_MODULE_1__["default"]
});

/***/ }),

/***/ "./src/selectors/toJS.js":
/*!*******************************!*\
  !*** ./src/selectors/toJS.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getToJSMemoized; });
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

/***/ "./src/settings.js":
/*!*************************!*\
  !*** ./src/settings.js ***!
  \*************************/
/*! exports provided: generateDefaultViewId, nonMemoized, mapStateToViewProps, WaitForSettings, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateDefaultViewId", function() { return generateDefaultViewId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nonMemoized", function() { return nonMemoized; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapStateToViewProps", function() { return mapStateToViewProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WaitForSettings", function() { return WaitForSettings; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
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

var mapStateToViewProps = Object(lodash__WEBPACK_IMPORTED_MODULE_3__["memoize"])(nonMemoized, function (state, ownProps, componentName, componentId) {
  return "".concat(ownProps.view, "-").concat(componentName, "-").concat(componentId, "-").concat(state.cmf.settings.initialized);
});

function PureWaitForSettings(props) {
  if (!props.initialized) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(props.loading, null);
  }

  return props.children;
}

PureWaitForSettings.propTypes = {
  initialized: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  children: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.node
};
PureWaitForSettings.defaultProps = {
  loading: function loading() {
    return 'loading';
  }
};
var WaitForSettings = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(function (state) {
  return {
    initialized: state.cmf.settings.initialized
  };
})(PureWaitForSettings);
/* harmony default export */ __webpack_exports__["default"] = ({
  mapStateToViewProps: mapStateToViewProps
});

/***/ }),

/***/ "./src/store.js":
/*!**********************!*\
  !*** ./src/store.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_batched_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-batched-actions */ "../../node_modules/redux-batched-actions/lib/index.js");
/* harmony import */ var redux_batched_actions__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_batched_actions__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-thunk */ "redux-thunk");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! invariant */ "../../node_modules/invariant/browser.js");
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(invariant__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reducers */ "./src/reducers/index.js");
/* harmony import */ var _middlewares_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./middlewares/http */ "./src/middlewares/http/index.js");
/* harmony import */ var _middlewares_cmf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./middlewares/cmf */ "./src/middlewares/cmf/index.js");
/* harmony import */ var _onError__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./onError */ "./src/onError.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/**
 * This module is here to help app to create the redux store
 * @module react-cmf/lib/store
 */








/**
 * @typedef {Object} Store
 */

var preReducers = [];
var enhancers = [];
var middlewares = [redux_thunk__WEBPACK_IMPORTED_MODULE_2___default.a, _middlewares_cmf__WEBPACK_IMPORTED_MODULE_6__["default"], _onError__WEBPACK_IMPORTED_MODULE_7__["default"].middleware];

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
  var cmfMiddlewareIndex = middlewares.indexOf(_middlewares_cmf__WEBPACK_IMPORTED_MODULE_6__["default"]);
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
      reducerObject = _objectSpread({}, appReducer);
    } else if (typeof appReducer === 'function') {
      reducerObject = {
        app: appReducer
      };
    }
  } else {
    invariant__WEBPACK_IMPORTED_MODULE_3___default()(true, 'Are you sure you want to bootstrap an app without reducers ?');
  }

  if (!reducerObject.cmf) {
    reducerObject.cmf = _reducers__WEBPACK_IMPORTED_MODULE_4__["default"];
  }

  return Object(redux_batched_actions__WEBPACK_IMPORTED_MODULE_1__["enableBatching"])(preApplyReducer(Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])(reducerObject)));
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
    setHttpMiddleware(Object(_middlewares_http__WEBPACK_IMPORTED_MODULE_5__["default"])());
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
  var store = redux__WEBPACK_IMPORTED_MODULE_0__["compose"].apply(void 0, [redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"].apply(void 0, _toConsumableArray(middles))].concat(enhancers))(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(reducer, preloadedState);
  return store;
}

/* harmony default export */ __webpack_exports__["default"] = ({
  addPreReducer: addPreReducer,
  setHttpMiddleware: setHttpMiddleware,
  initialize: initialize,
  // for testing purepose only
  getReducer: getReducer,
  getMiddlewares: getMiddlewares
});

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

/***/ })

/******/ });
});
//# sourceMappingURL=TalendReactCmf.js.map