/******/ (function(modules) { // webpackBootstrap
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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sass_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sass/main.scss */ \"./src/sass/main.scss\");\n/* harmony import */ var _sass_main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sass_main_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _js_megaNav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/megaNav */ \"./src/js/megaNav.js\");\n/* harmony import */ var _js_slideNav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/slideNav */ \"./src/js/slideNav.js\");\n\n\n // Invoke all functions on load\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  // Instantiate Meganav Toggler\n  var megaNav = new _js_slideNav__WEBPACK_IMPORTED_MODULE_2__[\"default\"]('mega-nav', 'main-nav-burger', 'slide-nav');\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/js/megaNav.js":
/*!***************************!*\
  !*** ./src/js/megaNav.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MegaNav; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar MegaNav = function MegaNav(navId, toggleId) {\n  var _this = this;\n\n  _classCallCheck(this, MegaNav);\n\n  _defineProperty(this, \"init\", function () {\n    // Add the click event listener\n    _this.toggle.addEventListener('click', _this.toggleCollapse); // Add initial collapsed classes\n\n\n    _this.nav.classList.add(\"collapsed\");\n\n    console.log('initialized');\n  });\n\n  _defineProperty(this, \"toggleCollapse\", function () {\n    if (_this.state.isCollapsed) {\n      _this.state.isCollapsed = false;\n\n      _this.toggle.classList.add(\"is-active\");\n\n      _this.nav.classList.remove(\"collapsed\");\n    } else {\n      _this.state.isCollapsed = true;\n\n      _this.toggle.classList.remove(\"is-active\");\n\n      _this.nav.classList.add(\"collapsed\");\n    }\n  });\n\n  this.state = {\n    isCollapsed: true\n  }; // Get elements\n\n  this.toggle = document.getElementById(toggleId);\n  this.nav = document.getElementById(navId); // Initialize\n\n  this.init();\n};\n\n\n\n//# sourceURL=webpack:///./src/js/megaNav.js?");

/***/ }),

/***/ "./src/js/slideNav.js":
/*!****************************!*\
  !*** ./src/js/slideNav.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return SlideNav; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar SlideNav = function SlideNav(navId, toggleId, slideNavId) {\n  var _this = this;\n\n  _classCallCheck(this, SlideNav);\n\n  _defineProperty(this, \"init\", function () {\n    // Add the click event listener\n    _this.toggle.addEventListener('click', _this.toggleCollapse); // Add initial collapsed classes\n\n\n    _this.nav.classList.add(\"mega-collapsed\");\n\n    _this.slideNav.classList.add(\"slide-collapsed\");\n\n    console.log('initialized');\n  });\n\n  _defineProperty(this, \"toggleCollapse\", function () {\n    var isSmall = window.innerWidth < 1000;\n    console.log(window.innerWidth);\n\n    if (isSmall) {\n      console.log('toggle small');\n\n      if (_this.state.isCollapsed) {\n        _this.state.isCollapsed = false;\n\n        _this.toggle.classList.add(\"is-active\");\n\n        _this.slideNav.classList.remove(\"slide-collapsed\");\n      } else {\n        _this.state.isCollapsed = true;\n\n        _this.toggle.classList.remove(\"is-active\");\n\n        _this.slideNav.classList.add(\"slide-collapsed\");\n      }\n    } else {\n      console.log('toggle lg');\n\n      if (_this.state.isCollapsed) {\n        _this.state.isCollapsed = false;\n\n        _this.toggle.classList.add(\"is-active\");\n\n        _this.nav.classList.remove(\"mega-collapsed\");\n      } else {\n        _this.state.isCollapsed = true;\n\n        _this.toggle.classList.remove(\"is-active\");\n\n        _this.nav.classList.add(\"mega-collapsed\");\n      }\n    }\n  });\n\n  this.state = {\n    isCollapsed: true\n  }; // Get elements\n\n  this.toggle = document.getElementById(toggleId);\n  this.nav = document.getElementById(navId);\n  this.slideNav = document.getElementById(slideNavId); // Initialize\n\n  this.init();\n};\n\n\n\n//# sourceURL=webpack:///./src/js/slideNav.js?");

/***/ }),

/***/ "./src/sass/main.scss":
/*!****************************!*\
  !*** ./src/sass/main.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/sass/main.scss?");

/***/ })

/******/ });