(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(typeof self !== 'undefined' ? self : this, function() {
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

/***/ "./src/array/filterBy.js":
/*!*******************************!*\
  !*** ./src/array/filterBy.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/index */ \"./src/util/index.js\");\n\n/**\r\n * Filter filter for arrays\r\n *\r\n * @param {Array} arr\r\n * @param {String} prop\r\n * @param {String|Number} search\r\n */\n\nfunction filterBy(arr, search) {\n  var arr = _util_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"].convertArray(arr);\n\n  if (search == null) {\n    return arr;\n  }\n\n  if (typeof search === 'function') {\n    return arr.filter(search);\n  } // cast to lowercase string\n\n\n  search = ('' + search).toLowerCase();\n  var n = 2; // extract and flatten keys\n\n  var keys = Array.prototype.concat.apply([], _util_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"].toArray(arguments, n));\n  var res = [];\n  var item, key, val, j;\n\n  for (var i = 0, l = arr.length; i < l; i++) {\n    item = arr[i];\n    val = item && item.$value || item;\n    j = keys.length;\n\n    if (j) {\n      while (j--) {\n        key = keys[j];\n\n        if (key === '$key' && contains(item.$key, search) || contains(_util_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getPath(val, key), search)) {\n          res.push(item);\n          break;\n        }\n      }\n    } else if (contains(item, search)) {\n      res.push(item);\n    }\n  }\n\n  return res;\n}\n\nfunction contains(val, search) {\n  var i;\n\n  if (_util_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"].isPlainObject(val)) {\n    var keys = Object.keys(val);\n    i = keys.length;\n\n    while (i--) {\n      if (contains(val[keys[i]], search)) {\n        return true;\n      }\n    }\n  } else if (_util_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"].isArray(val)) {\n    i = val.length;\n\n    while (i--) {\n      if (contains(val[i], search)) {\n        return true;\n      }\n    }\n  } else if (val != null) {\n    return val.toString().toLowerCase().indexOf(search) > -1;\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (filterBy);\n\n//# sourceURL=webpack:///./src/array/filterBy.js?");

/***/ }),

/***/ "./src/array/find.js":
/*!***************************!*\
  !*** ./src/array/find.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _filterBy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filterBy */ \"./src/array/filterBy.js\");\n\n/**\r\n * Get first matching element from a filtered array\r\n *\r\n * @param {Array} arr\r\n * @param {String|Number} search\r\n * @returns {mixed}\r\n */\n\nfunction find(arr, search) {\n  var array = _filterBy__WEBPACK_IMPORTED_MODULE_0__[\"default\"].apply(this, arguments);\n  array.splice(1);\n  return array;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (find);\n\n//# sourceURL=webpack:///./src/array/find.js?");

/***/ }),

/***/ "./src/array/index.js":
/*!****************************!*\
  !*** ./src/array/index.js ***!
  \****************************/
/*! exports provided: limitBy, filterBy, orderBy, find */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _limitBy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./limitBy */ \"./src/array/limitBy.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"limitBy\", function() { return _limitBy__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _filterBy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filterBy */ \"./src/array/filterBy.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"filterBy\", function() { return _filterBy__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n/* harmony import */ var _orderBy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./orderBy */ \"./src/array/orderBy.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"orderBy\", function() { return _orderBy__WEBPACK_IMPORTED_MODULE_2__[\"default\"]; });\n\n/* harmony import */ var _find__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./find */ \"./src/array/find.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"find\", function() { return _find__WEBPACK_IMPORTED_MODULE_3__[\"default\"]; });\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/array/index.js?");

/***/ }),

/***/ "./src/array/limitBy.js":
/*!******************************!*\
  !*** ./src/array/limitBy.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/index */ \"./src/util/index.js\");\n\n/**\r\n * Limit filter for arrays\r\n *\r\n * @param {Number|Array} arr (If Number, decimal expected)\r\n * @param {Number} n\r\n * @param {Number} offset (Decimal expected)\r\n */\n\nfunction limitBy(arr, n, offset) {\n  arr = _util_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"].isArray(arr) ? arr : _util_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"].convertRangeToArray(arr);\n  offset = offset ? parseInt(offset, 10) : 0;\n  n = _util_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"].toNumber(n);\n  return typeof n === 'number' ? arr.slice(offset, offset + n) : arr;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (limitBy);\n\n//# sourceURL=webpack:///./src/array/limitBy.js?");

/***/ }),

/***/ "./src/array/orderBy.js":
/*!******************************!*\
  !*** ./src/array/orderBy.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/index */ \"./src/util/index.js\");\n\n/**\r\n * Filter filter for arrays\r\n *\r\n * @param {String|Array<String>|Function} ...sortKeys\r\n * @param {Number} [order]\r\n */\n\nfunction orderBy(arr) {\n  var _comparator = null;\n  var sortKeys;\n  arr = _util_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"].convertArray(arr); // determine order (last argument)\n\n  var args = _util_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"].toArray(arguments, 1);\n  var order = args[args.length - 1];\n\n  if (typeof order === 'number') {\n    order = order < 0 ? -1 : 1;\n    args = args.length > 1 ? args.slice(0, -1) : args;\n  } else {\n    order = 1;\n  } // determine sortKeys & comparator\n\n\n  var firstArg = args[0];\n\n  if (!firstArg) {\n    return arr;\n  } else if (typeof firstArg === 'function') {\n    // custom comparator\n    _comparator = function comparator(a, b) {\n      return firstArg(a, b) * order;\n    };\n  } else {\n    // string keys. flatten first\n    sortKeys = Array.prototype.concat.apply([], args);\n\n    _comparator = function comparator(a, b, i) {\n      i = i || 0;\n      return i >= sortKeys.length - 1 ? baseCompare(a, b, i) : baseCompare(a, b, i) || _comparator(a, b, i + 1);\n    };\n  }\n\n  function baseCompare(a, b, sortKeyIndex) {\n    var sortKey = sortKeys[sortKeyIndex];\n\n    if (sortKey) {\n      if (sortKey !== '$key') {\n        if (_util_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"].isObject(a) && '$value' in a) a = a.$value;\n        if (_util_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"].isObject(b) && '$value' in b) b = b.$value;\n      }\n\n      a = _util_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"].isObject(a) ? _util_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getPath(a, sortKey) : a;\n      b = _util_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"].isObject(b) ? _util_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getPath(b, sortKey) : b;\n      a = typeof a === 'string' ? a.toLowerCase() : a;\n      b = typeof b === 'string' ? b.toLowerCase() : b;\n    }\n\n    return a === b ? 0 : a > b ? order : -order;\n  } // sort on a copy to avoid mutating original array\n\n\n  return arr.slice().sort(_comparator);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (orderBy);\n\n//# sourceURL=webpack:///./src/array/orderBy.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util/index */ \"./src/util/index.js\");\n/* harmony import */ var _string_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./string/index */ \"./src/string/index.js\");\n/* harmony import */ var _array_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./array/index */ \"./src/array/index.js\");\n/* harmony import */ var _other_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./other/index */ \"./src/other/index.js\");\n\n\n\n\nvar Vue2Filters = {\n  install: function install(Vue, options) {\n    _util_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"].each(_string_index__WEBPACK_IMPORTED_MODULE_1__, function (value, key) {\n      Vue.filter(key, value.bind(options));\n    });\n    _util_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"].each(_other_index__WEBPACK_IMPORTED_MODULE_3__, function (value, key) {\n      Vue.filter(key, value.bind(options));\n    });\n  },\n  mixin: {\n    methods: {\n      limitBy: _array_index__WEBPACK_IMPORTED_MODULE_2__[\"limitBy\"],\n      filterBy: _array_index__WEBPACK_IMPORTED_MODULE_2__[\"filterBy\"],\n      orderBy: _array_index__WEBPACK_IMPORTED_MODULE_2__[\"orderBy\"],\n      find: _array_index__WEBPACK_IMPORTED_MODULE_2__[\"find\"]\n    }\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Vue2Filters);\n\nif (typeof window !== 'undefined' && window.Vue) {\n  window.Vue.use(Vue2Filters);\n  window.Vue2Filters = Vue2Filters;\n}\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/other/currency.js":
/*!*******************************!*\
  !*** ./src/other/currency.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/index */ \"./src/util/index.js\");\n\n/**\r\n * \r\n * 12345 => $12,345.00\r\n *\r\n * @param {String} symbol\r\n * @param {Number} decimals Decimal places\r\n * @param {Object} options\r\n */\n\nfunction currency(value, symbol, decimals, options) {\n  var globalOptions = this && this.currency ? this.currency : {};\n  symbol = _util_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"].exist(symbol) ? symbol : globalOptions.symbol;\n  decimals = _util_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"].exist(decimals) ? decimals : globalOptions.decimalDigits;\n  options = options || globalOptions;\n  var thousandsSeparator, symbolOnLeft, spaceBetweenAmountAndSymbol, showPlusSign;\n  var digitsRE = /(\\d{3})(?=\\d)/g;\n  value = parseFloat(value);\n  if (!isFinite(value) || !value && value !== 0) return '';\n  symbol = typeof symbol !== 'undefined' ? symbol : '$';\n  decimals = typeof decimals !== 'undefined' ? decimals : 2;\n  thousandsSeparator = options.thousandsSeparator != null ? options.thousandsSeparator : ',';\n  symbolOnLeft = options.symbolOnLeft != null ? options.symbolOnLeft : true;\n  spaceBetweenAmountAndSymbol = options.spaceBetweenAmountAndSymbol != null ? options.spaceBetweenAmountAndSymbol : false;\n  showPlusSign = options.showPlusSign != null ? options.showPlusSign : false;\n  var number = Math.abs(value);\n  var stringified = toFixed(number, decimals);\n  stringified = options.decimalSeparator ? stringified.replace('.', options.decimalSeparator) : stringified;\n\n  var _int = decimals ? stringified.slice(0, -1 - decimals) : stringified;\n\n  var i = _int.length % 3;\n  var head = i > 0 ? _int.slice(0, i) + (_int.length > 3 ? thousandsSeparator : '') : '';\n\n  var _float = decimals ? stringified.slice(-1 - decimals) : '';\n\n  symbol = spaceBetweenAmountAndSymbol ? symbolOnLeft ? symbol + ' ' : ' ' + symbol : symbol;\n  symbol = symbolOnLeft ? symbol + head + _int.slice(i).replace(digitsRE, '$1' + thousandsSeparator) + _float : head + _int.slice(i).replace(digitsRE, '$1' + thousandsSeparator) + _float + symbol;\n  var sign = value < 0 ? '-' : '';\n  var plusSign = value > 0 && showPlusSign ? '+' : '';\n  return plusSign + sign + symbol;\n}\n\nfunction toFixed(num, precision) {\n  return (+(Math.round(+(num + 'e' + precision)) + 'e' + -precision)).toFixed(precision);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (currency);\n\n//# sourceURL=webpack:///./src/other/currency.js?");

/***/ }),

/***/ "./src/other/fileSize.js":
/*!*******************************!*\
  !*** ./src/other/fileSize.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\r\n * 8                => '8 byte'\r\n * 1024             => '1.00 kb'\r\n * 2000000          => '1.90 MB'\r\n * 2000000000       => '1.86 GB'\r\n * 2000000000000    => '1.82 TB'\r\n *\r\n * @param {Number} valueInBytes The file size in bytes\r\n * @param {Number} decimals Decimal places (default: 2)\r\n */\nfunction fileSize(valueInBytes) {\n  var decimals = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;\n  valueInBytes = valueInBytes === null || isNaN(valueInBytes) ? 0 : valueInBytes;\n\n  if (valueInBytes >= Math.pow(1024, 4)) {\n    // TB\n    return \"\".concat((valueInBytes / Math.pow(1024, 4)).toFixed(decimals), \" TB\");\n  } else if (valueInBytes >= Math.pow(1024, 3)) {\n    // GB\n    return \"\".concat((valueInBytes / Math.pow(1024, 3)).toFixed(decimals), \" GB\");\n  } else if (valueInBytes >= Math.pow(1024, 2)) {\n    // MB\n    return \"\".concat((valueInBytes / Math.pow(1024, 2)).toFixed(decimals), \" MB\");\n  } else if (valueInBytes >= 1024) {\n    // kb\n    return \"\".concat((valueInBytes / 1024).toFixed(decimals), \" kb\");\n  } // byte\n\n\n  return \"\".concat(valueInBytes, \" byte\");\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (fileSize);\n\n//# sourceURL=webpack:///./src/other/fileSize.js?");

/***/ }),

/***/ "./src/other/index.js":
/*!****************************!*\
  !*** ./src/other/index.js ***!
  \****************************/
/*! exports provided: currency, fileSize, pluralize, ordinal, number */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _currency__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./currency */ \"./src/other/currency.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"currency\", function() { return _currency__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _fileSize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fileSize */ \"./src/other/fileSize.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"fileSize\", function() { return _fileSize__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n/* harmony import */ var _pluralize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pluralize */ \"./src/other/pluralize.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"pluralize\", function() { return _pluralize__WEBPACK_IMPORTED_MODULE_2__[\"default\"]; });\n\n/* harmony import */ var _ordinal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ordinal */ \"./src/other/ordinal.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"ordinal\", function() { return _ordinal__WEBPACK_IMPORTED_MODULE_3__[\"default\"]; });\n\n/* harmony import */ var _number__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./number */ \"./src/other/number.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"number\", function() { return _number__WEBPACK_IMPORTED_MODULE_4__[\"default\"]; });\n\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/other/index.js?");

/***/ }),

/***/ "./src/other/number.js":
/*!*****************************!*\
  !*** ./src/other/number.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/index */ \"./src/util/index.js\");\n\n/**\r\n * 123456 => '123,456'\r\n *\r\n * @params {Object} options\r\n * \r\n */\n\nfunction number(value, format, options) {\n  var globalOptions = this && this.number ? this.number : {};\n  format = _util_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"].exist(format) ? format : globalOptions.format;\n  options = options || globalOptions;\n  var config = parseFormat(format);\n  var number = parseNumber(value);\n  var thousandsSeparator = options.thousandsSeparator != null ? options.thousandsSeparator : ',';\n  var decimalSeparator = options.decimalSeparator != null ? options.decimalSeparator : '.';\n  config.sign = config.sign || number.sign;\n\n  if (config.unit) {\n    var numberWithUnit = addUnit(number.float, config);\n    return config.sign + numberWithUnit;\n  }\n\n  var int = config.decimals === 0 ? toFixed(number.float, 0) : number.int;\n\n  switch (config.base) {\n    case '':\n      int = '';\n      break;\n\n    case '0,0':\n      int = addSeparator(int, thousandsSeparator);\n      break;\n  }\n\n  var fraction = getFraction(number.float, config.decimals, decimalSeparator);\n  return config.sign + int + fraction;\n}\n\nfunction parseNumber(num) {\n  return {\n    float: Math.abs(parseFloat(num)),\n    int: Math.abs(parseInt(num)),\n    sign: Math.sign(num) < 0 ? '-' : ''\n  };\n}\n\nfunction parseFormat() {\n  var string = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '0';\n  var regex = /([\\+\\-])?([0-9\\,]+)?([\\.0-9]+)?([a\\s]+)?/;\n  var matches = string ? string.match(regex) : ['', '', '', '', ''];\n  var float = matches[3];\n  var decimals = float ? float.match(/0/g).length : 0;\n  return {\n    sign: matches[1] || '',\n    base: matches[2] || '',\n    decimals: decimals,\n    unit: matches[4] || ''\n  };\n}\n\nfunction addUnit(num, config) {\n  var rx = /\\.0+$|(\\.[0-9]*[1-9])0+$/;\n  var si = [{\n    value: 1,\n    symbol: \"\"\n  }, {\n    value: 1E3,\n    symbol: \"K\"\n  }, {\n    value: 1E6,\n    symbol: \"M\"\n  }];\n  var i;\n\n  for (i = si.length - 1; i > 0; i--) {\n    if (num >= si[i].value) {\n      break;\n    }\n  }\n\n  num = (num / si[i].value).toFixed(config.decimals).replace(rx, \"$1\");\n  return num + config.unit.replace('a', si[i].symbol);\n}\n\nfunction addSeparator(num, separator) {\n  var regex = /(\\d+)(\\d{3})/;\n  var string = num.toString();\n  var x = string.split('.');\n  var x1 = x[0];\n  var x2 = x.length > 1 ? '.' + x[1] : '';\n\n  while (regex.test(x1)) {\n    x1 = x1.replace(regex, '$1' + separator + '$2');\n  }\n\n  return x1 + x2;\n}\n\nfunction getFraction(num, decimals, separator) {\n  var fraction = toFixed(num, decimals).toString().split('.')[1];\n  return fraction ? separator + fraction : '';\n}\n\nfunction toFixed(num, precision) {\n  return (+(Math.round(+(num + 'e' + precision)) + 'e' + -precision)).toFixed(precision);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (number);\n\n//# sourceURL=webpack:///./src/other/number.js?");

/***/ }),

/***/ "./src/other/ordinal.js":
/*!******************************!*\
  !*** ./src/other/ordinal.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/index */ \"./src/util/index.js\");\n\n/**\r\n * 42 => 'nd'\r\n *\r\n * @params {Object} options\r\n * \r\n */\n\nfunction ordinal(value, options) {\n  var globalOptions = this && this.ordinal ? this.ordinal : {};\n  options = options || globalOptions;\n  var output = '';\n  var includeNumber = options.includeNumber != null ? options.includeNumber : false;\n  if (includeNumber === true) output += value;\n  var j = value % 10,\n      k = value % 100;\n  if (j == 1 && k != 11) output += 'st';else if (j == 2 && k != 12) output += 'nd';else if (j == 3 && k != 13) output += 'rd';else output += 'th';\n  return output;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ordinal);\n\n//# sourceURL=webpack:///./src/other/ordinal.js?");

/***/ }),

/***/ "./src/other/pluralize.js":
/*!********************************!*\
  !*** ./src/other/pluralize.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/index */ \"./src/util/index.js\");\n\n/**\r\n * 'item' => 'items'\r\n *\r\n * @param {String|Array} word\r\n * @param {Object} options\r\n *\r\n */\n\nfunction pluralize(value, word, options) {\n  var globalOptions = this && this.pluralize ? this.pluralize : {};\n  options = options || globalOptions;\n  var output = '';\n  var includeNumber = options.includeNumber != null ? options.includeNumber : false;\n  if (includeNumber === true) output += value + ' ';\n  if (!value && value !== 0 || !word) return output;\n\n  if (Array.isArray(word)) {\n    output += word[value - 1] || word[word.length - 1];\n  } else {\n    output += word + (value === 1 ? '' : 's');\n  }\n\n  return output;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (pluralize);\n\n//# sourceURL=webpack:///./src/other/pluralize.js?");

/***/ }),

/***/ "./src/string/capitalize.js":
/*!**********************************!*\
  !*** ./src/string/capitalize.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\r\n *  Converts a string into Capitalize\r\n * \r\n * 'abc' => 'Abc'\r\n * \r\n * @param {Object} options\r\n */\nfunction capitalize(value, options) {\n  var globalOptions = this && this.capitalize ? this.capitalize : {};\n  options = options || globalOptions;\n  var onlyFirstLetter = options.onlyFirstLetter != null ? options.onlyFirstLetter : false;\n  if (!value && value !== 0) return '';\n\n  if (onlyFirstLetter === true) {\n    return value.toString().charAt(0).toUpperCase() + value.toString().slice(1);\n  } else {\n    value = value.toString().toLowerCase().split(' ');\n    return value.map(function (item) {\n      return item.charAt(0).toUpperCase() + item.slice(1);\n    }).join(' ');\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (capitalize);\n\n//# sourceURL=webpack:///./src/string/capitalize.js?");

/***/ }),

/***/ "./src/string/index.js":
/*!*****************************!*\
  !*** ./src/string/index.js ***!
  \*****************************/
/*! exports provided: capitalize, uppercase, lowercase, placeholder, truncate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _capitalize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./capitalize */ \"./src/string/capitalize.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"capitalize\", function() { return _capitalize__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _uppercase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./uppercase */ \"./src/string/uppercase.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"uppercase\", function() { return _uppercase__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n/* harmony import */ var _lowercase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lowercase */ \"./src/string/lowercase.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"lowercase\", function() { return _lowercase__WEBPACK_IMPORTED_MODULE_2__[\"default\"]; });\n\n/* harmony import */ var _placeholder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./placeholder */ \"./src/string/placeholder.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"placeholder\", function() { return _placeholder__WEBPACK_IMPORTED_MODULE_3__[\"default\"]; });\n\n/* harmony import */ var _truncate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./truncate */ \"./src/string/truncate.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"truncate\", function() { return _truncate__WEBPACK_IMPORTED_MODULE_4__[\"default\"]; });\n\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/string/index.js?");

/***/ }),

/***/ "./src/string/lowercase.js":
/*!*********************************!*\
  !*** ./src/string/lowercase.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\r\n * Converts a string to lowercase\r\n * \r\n * 'AbC' => 'abc'\r\n */\nfunction lowercase(value) {\n  return value || value === 0 ? value.toString().toLowerCase() : '';\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (lowercase);\n\n//# sourceURL=webpack:///./src/string/lowercase.js?");

/***/ }),

/***/ "./src/string/placeholder.js":
/*!***********************************!*\
  !*** ./src/string/placeholder.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\r\n *  If the value is missing outputs the placeholder text\r\n * \r\n * '' => {placeholder}\r\n * 'foo' => 'foo'\r\n */\nfunction placeholder(input, property) {\n  return input === undefined || input === '' || input === null ? property : input;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (placeholder);\n\n//# sourceURL=webpack:///./src/string/placeholder.js?");

/***/ }),

/***/ "./src/string/truncate.js":
/*!********************************!*\
  !*** ./src/string/truncate.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\r\n *  Truncate at the given || default length\r\n *\r\n * 'lorem ipsum dolor' => 'lorem ipsum dol...'\r\n */\nfunction truncate(value, length) {\n  length = length || 15;\n  if (!value || typeof value !== 'string') return '';\n  if (value.length <= length) return value;\n  return value.substring(0, length) + '...';\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (truncate);\n\n//# sourceURL=webpack:///./src/string/truncate.js?");

/***/ }),

/***/ "./src/string/uppercase.js":
/*!*********************************!*\
  !*** ./src/string/uppercase.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\r\n * Converts a string to UPPERCASE\r\n * \r\n * 'abc' => 'ABC'\r\n */\nfunction uppercase(value) {\n  return value || value === 0 ? value.toString().toUpperCase() : '';\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (uppercase);\n\n//# sourceURL=webpack:///./src/string/uppercase.js?");

/***/ }),

/***/ "./src/util/index.js":
/*!***************************!*\
  !*** ./src/util/index.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nvar ArrayProto = Array.prototype,\n    ObjProto = Object.prototype;\nvar slice = ArrayProto.slice,\n    toString = ObjProto.toString;\nvar util = {};\n\nutil.isArray = function (obj) {\n  return Array.isArray(obj);\n};\n\nvar MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;\n\nutil.isArrayLike = function (obj) {\n  if (_typeof(obj) !== 'object' || !obj) {\n    return false;\n  }\n\n  var length = obj.length;\n  return typeof length === 'number' && length % 1 === 0 && length >= 0 && length <= MAX_ARRAY_INDEX;\n};\n\nutil.isObject = function (obj) {\n  var type = _typeof(obj);\n\n  return type === 'function' || type === 'object' && !!obj;\n};\n\nutil.each = function (obj, callback) {\n  var i, len;\n\n  if (util.isArray(obj)) {\n    for (i = 0, len = obj.length; i < len; i++) {\n      if (callback(obj[i], i, obj) === false) {\n        break;\n      }\n    }\n  } else {\n    for (i in obj) {\n      if (callback(obj[i], i, obj) === false) {\n        break;\n      }\n    }\n  }\n\n  return obj;\n};\n\nutil.each(['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp', 'Error'], function (name) {\n  util['is' + name] = function (obj) {\n    return toString.call(obj) === '[object ' + name + ']';\n  };\n});\n\nutil.toArray = function (list, start) {\n  start = start || 0;\n  var i = list.length - start;\n  var ret = new Array(i);\n\n  while (i--) {\n    ret[i] = list[i + start];\n  }\n\n  return ret;\n};\n\nutil.toNumber = function (value) {\n  if (typeof value !== 'string') {\n    return value;\n  } else {\n    var parsed = Number(value);\n    return isNaN(parsed) ? value : parsed;\n  }\n};\n\nutil.convertRangeToArray = function (range) {\n  return _toConsumableArray(Array(range + 1).keys()).slice(1);\n};\n\nutil.convertArray = function (value) {\n  if (util.isArray(value)) {\n    return value;\n  } else if (util.isPlainObject(value)) {\n    // convert plain object to array.\n    var keys = Object.keys(value);\n    var i = keys.length;\n    var res = new Array(i);\n    var key;\n\n    while (i--) {\n      key = keys[i];\n      res[i] = {\n        $key: key,\n        $value: value[key]\n      };\n    }\n\n    return res;\n  } else {\n    return value || [];\n  }\n};\n\nfunction multiIndex(obj, is) {\n  // obj,['1','2','3'] -> ((obj['1'])['2'])['3']\n  return is.length ? multiIndex(obj[is[0]], is.slice(1)) : obj;\n}\n\nutil.getPath = function (obj, is) {\n  // obj,'1.2.3' -> multiIndex(obj,['1','2','3'])\n  return multiIndex(obj, is.split('.'));\n};\n/**\r\n * Strict object type check. Only returns true\r\n * for plain JavaScript objects.\r\n *\r\n * @param {*} obj\r\n * @return {Boolean}\r\n */\n\n\nvar toString = Object.prototype.toString;\nvar OBJECT_STRING = '[object Object]';\n\nutil.isPlainObject = function (obj) {\n  return toString.call(obj) === OBJECT_STRING;\n};\n\nutil.exist = function (value) {\n  return value !== null && typeof value !== 'undefined';\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (util);\n\n//# sourceURL=webpack:///./src/util/index.js?");

/***/ })

/******/ });
});