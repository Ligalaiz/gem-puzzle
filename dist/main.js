/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"vendors~main"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_main_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/main.js */ "./js/main.js");
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/main.scss */ "./styles/main.scss");
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_main_scss__WEBPACK_IMPORTED_MODULE_1__);



/***/ }),

/***/ "./js/layouts/generateField.js":
/*!*************************************!*\
  !*** ./js/layouts/generateField.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return generateField; });
/* harmony import */ var _utils_storage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/storage.js */ "./js/utils/storage.js");

function generateField() {
  var field = null;

  if (Object(_utils_storage_js__WEBPACK_IMPORTED_MODULE_0__["get"])('select') === 'three') {
    field = [1, 2, 3, 4, 5, 6, 7, 8, 0];
  }

  if (Object(_utils_storage_js__WEBPACK_IMPORTED_MODULE_0__["get"])('select') === 'four') {
    field = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 0];
  }

  if (Object(_utils_storage_js__WEBPACK_IMPORTED_MODULE_0__["get"])('select') === 'five') {
    field = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 0];
  }

  if (Object(_utils_storage_js__WEBPACK_IMPORTED_MODULE_0__["get"])('select') === 'six') {
    field = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 0];
  }

  if (Object(_utils_storage_js__WEBPACK_IMPORTED_MODULE_0__["get"])('select') === 'seven') {
    field = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 0];
  }

  if (Object(_utils_storage_js__WEBPACK_IMPORTED_MODULE_0__["get"])('select') === 'eight') {
    field = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 0];
  }

  Object(_utils_storage_js__WEBPACK_IMPORTED_MODULE_0__["set"])('field', field);
  return field;
}

/***/ }),

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _layouts_generateField_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layouts/generateField.js */ "./js/layouts/generateField.js");
/* harmony import */ var _utils_Table_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/Table.js */ "./js/utils/Table.js");
/* harmony import */ var _utils_clickHandler_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/clickHandler.js */ "./js/utils/clickHandler.js");
/* harmony import */ var _utils_storage_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/storage.js */ "./js/utils/storage.js");
/* harmony import */ var _utils_logIn_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/logIn.js */ "./js/utils/logIn.js");
/* harmony import */ var _utils_animationBtns_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/animationBtns.js */ "./js/utils/animationBtns.js");
/* harmony import */ var _utils_game_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/game.js */ "./js/utils/game.js");
/* harmony import */ var _utils_checkState_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/checkState.js */ "./js/utils/checkState.js");
/* harmony import */ var _utils_scoreData_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/scoreData.js */ "./js/utils/scoreData.js");

 // import DragAndDrop from './utils/DragAndDrop.js';







 // Check table state

if (!Object(_utils_storage_js__WEBPACK_IMPORTED_MODULE_3__["get"])('select')) Object(_utils_storage_js__WEBPACK_IMPORTED_MODULE_3__["set"])('select', 'three');
if (!Object(_utils_storage_js__WEBPACK_IMPORTED_MODULE_3__["get"])('step')) Object(_utils_storage_js__WEBPACK_IMPORTED_MODULE_3__["set"])('step', '0');
if (!Object(_utils_storage_js__WEBPACK_IMPORTED_MODULE_3__["get"])('min')) Object(_utils_storage_js__WEBPACK_IMPORTED_MODULE_3__["set"])('min', '0');
if (!Object(_utils_storage_js__WEBPACK_IMPORTED_MODULE_3__["get"])('sec')) Object(_utils_storage_js__WEBPACK_IMPORTED_MODULE_3__["set"])('sec', '0');
if (!Object(_utils_storage_js__WEBPACK_IMPORTED_MODULE_3__["get"])('score')) Object(_utils_storage_js__WEBPACK_IMPORTED_MODULE_3__["set"])('score', 'off');
if (!Object(_utils_storage_js__WEBPACK_IMPORTED_MODULE_3__["get"])('pauseState')) Object(_utils_storage_js__WEBPACK_IMPORTED_MODULE_3__["set"])('pauseState', 'off'); // Score storage

Object(_utils_scoreData_js__WEBPACK_IMPORTED_MODULE_8__["default"])(); // Create Table

var field = Object(_utils_storage_js__WEBPACK_IMPORTED_MODULE_3__["get"])('field') || Object(_layouts_generateField_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
var table = new _utils_Table_js__WEBPACK_IMPORTED_MODULE_1__["Table"](field); // Render

table.init().generateLayout();
var overlay = document.querySelector('.puzzle__overlay'),
    start = document.querySelector('.start'),
    pause = document.querySelector('.pause'),
    stop = document.querySelector('.stop'),
    shuffleBtn = document.querySelector('.shuffle'),
    select = document.querySelector('.select'),
    score = document.querySelector('.score'),
    puzzles = document.querySelectorAll('.puzzle__item'),
    wrap = document.querySelector('.wrap'); // Check state

Object(_utils_checkState_js__WEBPACK_IMPORTED_MODULE_7__["default"])({
  overlay: overlay,
  puzzles: puzzles,
  pause: pause,
  start: start,
  stop: stop,
  shuffleBtn: shuffleBtn,
  select: select,
  score: score
}); // Add Drag And Drop
// const dragAndDrop = new DragAndDrop();
// function dragAndDropHandler(e) {
//   const { type } = e;
//   if (type.match(/mousedown/)) {
//     dragAndDrop.setDraggable(e);
// }
// if (type.match(/mouseup/)) {
//   dragAndDrop.removeDraggable(e);
// }
// if (type.match(/mouseover/)) {
//   dragAndDrop.changePuzzlePlace(e);
// }
// if (type.match(/dragstart/)) {
//   dragAndDrop.dragStart(e);
//   console.log('dragstart');
// }
// if (type.match(/dragend/)) {
//   dragAndDrop.dragEnd(e, table);
//   console.log('dragend');
// }
// if (type.match(/dragover/)) {
//   e.preventDefault();
// }
// if (type.match(/dragleave/)) {
//   dragAndDrop.dragLeave(e, table);
//   // console.log('dragleave')
// }
// if (type.match(/dragenter/)) {
//   dragAndDrop.dragEnter(e);
//   // console.log('dragenter')
// }
// if (type.match(/drop/)) {
//   dragAndDrop.dragDrop(e, wrap);
//   console.log('drop');
// }
// }
// main.addEventListener('dragstart', dragAndDropHandler);
// main.addEventListener('dragover', dragAndDropHandler);
// main.addEventListener('dragleave', dragAndDropHandler);
// main.addEventListener('dragenter', dragAndDropHandler);
// main.addEventListener('dragend', dragAndDropHandler);
// main.addEventListener('drop', dragAndDropHandler);
// main.addEventListener('mousedown', dragAndDropHandler);
// main.addEventListener('mouseup', dragAndDropHandler);
//  Add click Handler

function mouseHandler(e) {
  var type = e.type,
      target = e.target;
  Object(_utils_animationBtns_js__WEBPACK_IMPORTED_MODULE_5__["default"])(target, type, pause);

  if (type.match(/click/)) {
    if (target.closest('div[data-num]') === null) return;

    if (target.closest('div[data-num]').dataset.num) {
      Object(_utils_clickHandler_js__WEBPACK_IMPORTED_MODULE_2__["default"])(e, table);
    }
  }

  if (type.match(/mousedown|change/)) {
    Object(_utils_logIn_js__WEBPACK_IMPORTED_MODULE_4__["default"])({
      target: target,
      overlay: overlay,
      start: start,
      pause: pause,
      stop: stop
    });
    Object(_utils_game_js__WEBPACK_IMPORTED_MODULE_6__["default"])({
      type: type,
      target: target,
      table: table,
      start: start,
      pause: pause,
      stop: stop,
      shuffleBtn: shuffleBtn,
      select: select,
      score: score
    });
  }
}

wrap.addEventListener('click', mouseHandler);
wrap.addEventListener('mousedown', mouseHandler);
wrap.addEventListener('mouseup', mouseHandler);
wrap.addEventListener('change', mouseHandler);

function keyHandler(e) {
  var type = e.type,
      target = e.target,
      code = e.code;

  if (type.match(/keydown/)) {
    Object(_utils_logIn_js__WEBPACK_IMPORTED_MODULE_4__["default"])({
      target: target,
      overlay: overlay,
      start: start,
      code: code,
      pause: pause,
      stop: stop
    });
  }
}

wrap.addEventListener('keydown', keyHandler);

/***/ }),

/***/ "./js/utils/Key.js":
/*!*************************!*\
  !*** ./js/utils/Key.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Key; });
/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage.js */ "./js/utils/storage.js");
/* harmony import */ var _create_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create.js */ "./js/utils/create.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




var Key = function Key(num, parent) {
  _classCallCheck(this, Key);

  this.num = num;
  this.parent = parent;
  this.isZero = !!num;

  if (num && this.isZero) {
    var tableSze = Object(_storage_js__WEBPACK_IMPORTED_MODULE_0__["get"])('select');
    this.div = Object(_create_js__WEBPACK_IMPORTED_MODULE_1__["default"])('div', 'puzzle__item num', null, this.parent, ['num', this.num], ['size', tableSze]);
  } else {
    this.div = Object(_create_js__WEBPACK_IMPORTED_MODULE_1__["default"])('div', 'puzzle__item zero', null, this.parent, ['num', this.num]);
  }
};



/***/ }),

/***/ "./js/utils/Table.js":
/*!***************************!*\
  !*** ./js/utils/Table.js ***!
  \***************************/
/*! exports provided: main, Table */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "main", function() { return main; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Table", function() { return Table; });
/* harmony import */ var _create_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create.js */ "./js/utils/create.js");
/* harmony import */ var _Key_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Key.js */ "./js/utils/Key.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


 // import { get, set } from './storage.js';

var main = Object(_create_js__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'wrap');
var puzzle = Object(_create_js__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'puzzle', [Object(_create_js__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'puzzle__info', [Object(_create_js__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'time', [Object(_create_js__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'time__wrap', [Object(_create_js__WEBPACK_IMPORTED_MODULE_0__["default"])('div', null, 'time'), Object(_create_js__WEBPACK_IMPORTED_MODULE_0__["default"])('div', null, null, null, ['id', 'min']), Object(_create_js__WEBPACK_IMPORTED_MODULE_0__["default"])('div', null, ' : ', null), Object(_create_js__WEBPACK_IMPORTED_MODULE_0__["default"])('div', null, null, null, ['id', 'sec'])])]), Object(_create_js__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'step', [Object(_create_js__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'step__wrap', [Object(_create_js__WEBPACK_IMPORTED_MODULE_0__["default"])('div', null, 'step'), Object(_create_js__WEBPACK_IMPORTED_MODULE_0__["default"])('div', null, null, null, ['id', 'stepDisplay'])])])]), Object(_create_js__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'puzzle__control control', [Object(_create_js__WEBPACK_IMPORTED_MODULE_0__["default"])('button', 'control__item start', 'start'), Object(_create_js__WEBPACK_IMPORTED_MODULE_0__["default"])('button', 'control__item pause', 'pause'), Object(_create_js__WEBPACK_IMPORTED_MODULE_0__["default"])('button', 'control__item stop', 'stop'), Object(_create_js__WEBPACK_IMPORTED_MODULE_0__["default"])('button', 'control__item shuffle', 'shuffle'), Object(_create_js__WEBPACK_IMPORTED_MODULE_0__["default"])('select', 'control__item select', [Object(_create_js__WEBPACK_IMPORTED_MODULE_0__["default"])('option', null, '3X3', null, ['value', 'three']), Object(_create_js__WEBPACK_IMPORTED_MODULE_0__["default"])('option', null, '4X4', null, ['value', 'four']), Object(_create_js__WEBPACK_IMPORTED_MODULE_0__["default"])('option', null, '5X5', null, ['value', 'five']), Object(_create_js__WEBPACK_IMPORTED_MODULE_0__["default"])('option', null, '6X6', null, ['value', 'six']), Object(_create_js__WEBPACK_IMPORTED_MODULE_0__["default"])('option', null, '7X7', null, ['value', 'seven']), Object(_create_js__WEBPACK_IMPORTED_MODULE_0__["default"])('option', null, '8X8', null, ['value', 'eight'])]), Object(_create_js__WEBPACK_IMPORTED_MODULE_0__["default"])('button', 'control__item sound', 'sound'), Object(_create_js__WEBPACK_IMPORTED_MODULE_0__["default"])('button', 'control__item score', 'score')]), Object(_create_js__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'puzzle__overlay', [Object(_create_js__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'puzzle__form form', [Object(_create_js__WEBPACK_IMPORTED_MODULE_0__["default"])('input', 'form__field', null, null, ['placeholder', 'nickname'], ['autofocus', '']), Object(_create_js__WEBPACK_IMPORTED_MODULE_0__["default"])('button', 'form__btn', null, null)], null), Object(_create_js__WEBPACK_IMPORTED_MODULE_0__["default"])('p', 'form__message', 'nickname more than four letters or numbers', null)], null), Object(_create_js__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'puzzle__popup popup', [Object(_create_js__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'popup__wrap', [Object(_create_js__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'popup__item', [Object(_create_js__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'popup__position', '1', null), Object(_create_js__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'popup__steps', null, null), Object(_create_js__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'popup__time', null, null), Object(_create_js__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'popup__nickname', null, null)], null), Object(_create_js__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'popup__item', [Object(_create_js__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'popup__position', '2', null), Object(_create_js__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'popup__steps', null, null), Object(_create_js__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'popup__time', null, null), Object(_create_js__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'popup__nickname', null, null)], null), Object(_create_js__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'popup__item', [Object(_create_js__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'popup__position', '3', null), Object(_create_js__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'popup__steps', null, null), Object(_create_js__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'popup__time', null, null), Object(_create_js__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'popup__nickname', null, null)], null), Object(_create_js__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'popup__item', [Object(_create_js__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'popup__position', '4', null), Object(_create_js__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'popup__steps', null, null), Object(_create_js__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'popup__time', null, null), Object(_create_js__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'popup__nickname', null, null)], null), Object(_create_js__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'popup__item', [Object(_create_js__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'popup__position', '5', null), Object(_create_js__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'popup__steps', null, null), Object(_create_js__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'popup__time', null, null), Object(_create_js__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'popup__nickname', null, null)], null), Object(_create_js__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'popup__item', [Object(_create_js__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'popup__position', '6', null), Object(_create_js__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'popup__steps', null, null), Object(_create_js__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'popup__time', null, null), Object(_create_js__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'popup__nickname', null, null)], null), Object(_create_js__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'popup__item', [Object(_create_js__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'popup__position', '7', null), Object(_create_js__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'popup__steps', null, null), Object(_create_js__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'popup__time', null, null), Object(_create_js__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'popup__nickname', null, null)], null), Object(_create_js__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'popup__item', [Object(_create_js__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'popup__position', '8', null), Object(_create_js__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'popup__steps', null, null), Object(_create_js__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'popup__time', null, null), Object(_create_js__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'popup__nickname', null, null)], null), Object(_create_js__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'popup__item', [Object(_create_js__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'popup__position', '9', null), Object(_create_js__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'popup__steps', null, null), Object(_create_js__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'popup__time', null, null), Object(_create_js__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'popup__nickname', null, null)], null), Object(_create_js__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'popup__item', [Object(_create_js__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'popup__position', '10', null), Object(_create_js__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'popup__steps', null, null), Object(_create_js__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'popup__time', null, null), Object(_create_js__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'popup__nickname', null, null)], null)], null)], null), Object(_create_js__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'puzzle__message message', [Object(_create_js__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'message__wrap', [Object(_create_js__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'message__text', null, null)], null)], null)], main);
Object(_create_js__WEBPACK_IMPORTED_MODULE_0__["default"])('audio', null, [Object(_create_js__WEBPACK_IMPORTED_MODULE_0__["default"])('source', null, null, null, ['src', './move.mp3'], ['type', 'audio/mpeg'])], main, ['id', 'audioClick']);
var Table = /*#__PURE__*/function () {
  function Table(keyArr) {
    _classCallCheck(this, Table);

    this.keyArr = keyArr;
    this.chips = [];
  }

  _createClass(Table, [{
    key: "init",
    value: function init() {
      this.puzzleWrap = Object(_create_js__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'puzzle__wrap', null, puzzle);
      document.body.prepend(main);
      return this;
    }
  }, {
    key: "generateLayout",
    value: function generateLayout() {
      var _this = this;

      var cells = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.keyArr;
      this.keyArr = cells;
      cells.forEach(function (item) {
        var chip = new _Key_js__WEBPACK_IMPORTED_MODULE_1__["default"](item, _this.puzzleWrap);

        _this.chips.push(chip);
      });
    }
  }]);

  return Table;
}();

/***/ }),

/***/ "./js/utils/animationBtns.js":
/*!***********************************!*\
  !*** ./js/utils/animationBtns.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return animationBtns; });
function animationBtns(target, type) {
  if (type.match(/mousedown/)) {
    if (target.classList.contains('form__btn') || target.classList.contains('control__item') && !target.classList.contains('select')) {
      target.classList.add('shadow');
    }
  }

  if (type.match(/mouseup/)) {
    if (target.classList.contains('form__btn') || target.classList.contains('control__item') && !target.classList.contains('select')) {
      target.classList.remove('shadow');
    }
  }
}

/***/ }),

/***/ "./js/utils/calculateCountSteps.js":
/*!*****************************************!*\
  !*** ./js/utils/calculateCountSteps.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return calculateCountSteps; });
/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage.js */ "./js/utils/storage.js");

function calculateCountSteps(obj) {
  var gameClick = obj.gameClick,
      stepDisplay = document.querySelector('#stepDisplay');

  function addZero(num) {
    return num < 10 ? num = "0".concat(num) : num;
  }

  if (gameClick) {
    var step = parseInt(Object(_storage_js__WEBPACK_IMPORTED_MODULE_0__["get"])('step'));
    step += 1;
    Object(_storage_js__WEBPACK_IMPORTED_MODULE_0__["set"])('step', step);
    stepDisplay.innerText = addZero(step);
  }
}

/***/ }),

/***/ "./js/utils/checkState.js":
/*!********************************!*\
  !*** ./js/utils/checkState.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return checkState; });
/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage.js */ "./js/utils/storage.js");

function checkState(obj) {
  var overlay = obj.overlay,
      puzzles = obj.puzzles,
      pause = obj.pause,
      start = obj.start,
      stop = obj.stop,
      shuffleBtn = obj.shuffleBtn,
      select = obj.select,
      score = obj.score; // Set default btn state

  Object(_storage_js__WEBPACK_IMPORTED_MODULE_0__["set"])('pauseBtn', 'off');
  Object(_storage_js__WEBPACK_IMPORTED_MODULE_0__["set"])('soundBtn', 'off');
  select.value = Object(_storage_js__WEBPACK_IMPORTED_MODULE_0__["get"])('select'); // Set grid settings

  var wrap = document.querySelector('.puzzle__wrap');
  var size = null;

  switch (Object(_storage_js__WEBPACK_IMPORTED_MODULE_0__["get"])('select')) {
    case 'three':
      size = 3;
      break;

    case 'four':
      size = 4;
      break;

    case 'five':
      size = 5;
      break;

    case 'six':
      size = 6;
      break;

    case 'seven':
      size = 7;
      break;

    case 'eight':
      size = 8;
      break;
  }

  wrap.style.gridTemplateColumns = "repeat(".concat(size, ", 1fr)"); // Check LogIn

  if (Object(_storage_js__WEBPACK_IMPORTED_MODULE_0__["get"])('logIn') === 'on') {
    overlay.classList.add('hide'); // Control panel interactivity

    if (Object(_storage_js__WEBPACK_IMPORTED_MODULE_0__["get"])('startGame') === 'on') {
      start.setAttribute('disabled', '');
      start.style.cursor = 'default';
      shuffleBtn.setAttribute('disabled', '');
      select.setAttribute('disabled', '');
      score.setAttribute('disabled', '');
      shuffleBtn.style.cursor = 'default';
      select.style.cursor = 'default';
      score.style.cursor = 'default';
      puzzles.forEach(function (item) {
        return item.classList.remove('index');
      });
    } else {
      Object(_storage_js__WEBPACK_IMPORTED_MODULE_0__["set"])('startBtn', 'on');
      pause.setAttribute('disabled', '');
      stop.setAttribute('disabled', '');
      pause.style.cursor = 'default';
      stop.style.cursor = 'default';
      puzzles.forEach(function (item) {
        return item.classList.add('index');
      });
    }
  } else {
    puzzles.forEach(function (item) {
      return item.classList.add('index');
    });
  }

  var stepDisplay = document.querySelector('#stepDisplay'),
      timeDisplayMimute = document.querySelector('#min'),
      timeDisplaySecond = document.querySelector('#sec'); // Step

  function addZero(num) {
    return num < 10 ? num = "0".concat(num) : num;
  }

  stepDisplay.innerText = addZero(Object(_storage_js__WEBPACK_IMPORTED_MODULE_0__["get"])('step')); // Time

  timeDisplayMimute.innerText = addZero(Object(_storage_js__WEBPACK_IMPORTED_MODULE_0__["get"])('min'));
  timeDisplaySecond.innerText = addZero(Object(_storage_js__WEBPACK_IMPORTED_MODULE_0__["get"])('sec')); // Score

  if (Object(_storage_js__WEBPACK_IMPORTED_MODULE_0__["get"])('score') === 'on') Object(_storage_js__WEBPACK_IMPORTED_MODULE_0__["set"])('score', 'off');
}

/***/ }),

/***/ "./js/utils/checkZero.js":
/*!*******************************!*\
  !*** ./js/utils/checkZero.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return checkZero; });
function checkZero(e) {
  var target = e.target;
  var widthEl = target.closest('div[data-num]').offsetWidth;
  var isZero = false;
  var side = '';
  var cellWithZero;
  var x = target.closest('div[data-num]').getBoundingClientRect()['x'],
      y = target.closest('div[data-num]').getBoundingClientRect()['y'];
  var widthField = document.querySelector('.puzzle__wrap').offsetWidth,
      fromTop = document.querySelector('.puzzle__wrap').getBoundingClientRect()['y'],
      fromLeft = document.querySelector('.puzzle__wrap').getBoundingClientRect()['x'];

  if (y !== fromTop) {
    cellWithZero = document.elementFromPoint(e.x, e.y - widthEl).dataset.num;

    if (cellWithZero === '0') {
      side = 'top';
      isZero = true;
    }
  }

  if (y + widthEl + 5 < fromTop + widthField) {
    cellWithZero = document.elementFromPoint(e.x, e.y + widthEl).dataset.num;

    if (cellWithZero === '0') {
      side = 'bottom';
      isZero = true;
    }
  }

  if (x !== fromLeft) {
    cellWithZero = document.elementFromPoint(e.x - widthEl, e.y).dataset.num;

    if (cellWithZero === '0') {
      side = 'left';
      isZero = true;
    }
  }

  if (x + widthEl + 5 < fromLeft + widthField) {
    cellWithZero = document.elementFromPoint(e.x + widthEl, e.y).dataset.num;

    if (cellWithZero === '0') {
      side = 'right';
      isZero = true;
    }
  }

  console.log({
    isZero: isZero,
    side: side
  });
  return {
    isZero: isZero,
    side: side
  };
}

/***/ }),

/***/ "./js/utils/clickHandler.js":
/*!**********************************!*\
  !*** ./js/utils/clickHandler.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return clickHandler; });
/* harmony import */ var _checkZero_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checkZero.js */ "./js/utils/checkZero.js");
/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage.js */ "./js/utils/storage.js");
/* harmony import */ var _sound_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sound.js */ "./js/utils/sound.js");
/* harmony import */ var _calculateCountSteps_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./calculateCountSteps.js */ "./js/utils/calculateCountSteps.js");
/* harmony import */ var _gameFunctions_checkWinner_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./gameFunctions/checkWinner.js */ "./js/utils/gameFunctions/checkWinner.js");
/* harmony import */ var _gameFunctions_stopFunction_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./gameFunctions/stopFunction.js */ "./js/utils/gameFunctions/stopFunction.js");
/* harmony import */ var _scoreStorage_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./scoreStorage.js */ "./js/utils/scoreStorage.js");
/* harmony import */ var _gameFunctions_showWinMessage_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./gameFunctions/showWinMessage.js */ "./js/utils/gameFunctions/showWinMessage.js");








function clickHandler(e, table) {
  var target = e.target;
  var field = Object(_storage_js__WEBPACK_IMPORTED_MODULE_1__["get"])('field');

  if (!target.closest('div[data-num]').dataset.num.match(/^0/)) {
    var isZeroObj = Object(_checkZero_js__WEBPACK_IMPORTED_MODULE_0__["default"])(e),
        num = parseInt(target.closest('div[data-num]').dataset.num);
    var isZero = isZeroObj.isZero,
        side = isZeroObj.side;
    console.log(isZero, side);

    if (isZero) {
      var items = document.querySelectorAll('.puzzle__item');
      var zeroIndex = field.findIndex(function (i) {
        return i === 0;
      }),
          targetIndex = field.findIndex(function (i) {
        return i === num;
      });
      field[zeroIndex] = num;
      field[targetIndex] = 0;
      target.classList.add("to-".concat(side));
      setTimeout(function () {
        if (Object(_storage_js__WEBPACK_IMPORTED_MODULE_1__["get"])('soundBtn') === 'on') Object(_sound_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
        Array.from(items).forEach(function (i) {
          return i.remove();
        });
        table.generateLayout(field);
        var gameClick = true;
        Object(_calculateCountSteps_js__WEBPACK_IMPORTED_MODULE_3__["default"])({
          gameClick: gameClick
        });
        Object(_storage_js__WEBPACK_IMPORTED_MODULE_1__["set"])('field', field);

        if (Object(_gameFunctions_checkWinner_js__WEBPACK_IMPORTED_MODULE_4__["default"])()) {
          Object(_gameFunctions_stopFunction_js__WEBPACK_IMPORTED_MODULE_5__["default"])();
          Object(_scoreStorage_js__WEBPACK_IMPORTED_MODULE_6__["default"])();
          Object(_gameFunctions_showWinMessage_js__WEBPACK_IMPORTED_MODULE_7__["default"])();
        }
      }, 1000);
    }
  }
}

/***/ }),

/***/ "./js/utils/create.js":
/*!****************************!*\
  !*** ./js/utils/create.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return create; });
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function create(element, className, child, parent) {
  var el = document.createElement(element);

  if (className) {
    var _el$classList;

    (_el$classList = el.classList).add.apply(_el$classList, _toConsumableArray(className.split(' ')));
  }

  if (child && Array.isArray(child)) {
    child.forEach(function (item) {
      return item && el.appendChild(item);
    });
  } else if (child && _typeof(child) === 'object') {
    el.appendChild(child);
  } else if (child && typeof child === 'string') {
    el.innerHTML = child;
  }

  if (parent) {
    parent.appendChild(el);
  }

  for (var _len = arguments.length, dataAttr = new Array(_len > 4 ? _len - 4 : 0), _key = 4; _key < _len; _key++) {
    dataAttr[_key - 4] = arguments[_key];
  }

  if (dataAttr.length) {
    dataAttr.forEach(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          attrName = _ref2[0],
          attrValue = _ref2[1];

      if (attrValue === '') {
        el.setAttribute(attrName, '');
      } else {
        if (attrName.match(/id|draggable|value|src|type|placeholder|autofocus/)) {
          el.setAttribute(attrName, attrValue);
        } else {
          el.dataset[attrName] = attrValue;
        }
      }
    });
  }

  return el;
}

/***/ }),

/***/ "./js/utils/game.js":
/*!**************************!*\
  !*** ./js/utils/game.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return game; });
/* harmony import */ var _shuffle_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shuffle.js */ "./js/utils/shuffle.js");
/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage.js */ "./js/utils/storage.js");
/* harmony import */ var _layouts_generateField_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../layouts/generateField.js */ "./js/layouts/generateField.js");
/* harmony import */ var _timer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./timer.js */ "./js/utils/timer.js");
/* harmony import */ var _gameFunctions_stopFunction_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./gameFunctions/stopFunction.js */ "./js/utils/gameFunctions/stopFunction.js");
/* harmony import */ var _gameFunctions_showScoreFunction_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./gameFunctions/showScoreFunction.js */ "./js/utils/gameFunctions/showScoreFunction.js");






function game(obj) {
  var type = obj.type,
      target = obj.target,
      table = obj.table,
      pause = obj.pause,
      start = obj.start,
      stop = obj.stop,
      shuffleBtn = obj.shuffleBtn,
      select = obj.select,
      score = obj.score;
  var puzzles = document.querySelectorAll('.puzzle__item');
  var minutesDisplay = document.querySelector('#min');
  var secondsDisplay = document.querySelector('#sec');
  var stepDisplay = document.querySelector('#stepDisplay');

  if (type.match(/mousedown/)) {
    // Start button
    if (target.classList.contains('start')) {
      // Control changes
      Object(_storage_js__WEBPACK_IMPORTED_MODULE_1__["set"])('startGame', 'on');
      Object(_storage_js__WEBPACK_IMPORTED_MODULE_1__["set"])('startBtn', 'on');
      Object(_storage_js__WEBPACK_IMPORTED_MODULE_1__["set"])('pauseBtn', 'off');
      Object(_storage_js__WEBPACK_IMPORTED_MODULE_1__["set"])('shuffleBtn', 'off');
      Object(_storage_js__WEBPACK_IMPORTED_MODULE_1__["set"])('score', 'off');
      Object(_storage_js__WEBPACK_IMPORTED_MODULE_1__["set"])('min', '0');
      Object(_storage_js__WEBPACK_IMPORTED_MODULE_1__["set"])('sec', '0');
      Object(_storage_js__WEBPACK_IMPORTED_MODULE_1__["set"])('step', '0');
      start.setAttribute('disabled', '');
      start.style.cursor = 'default';
      pause.removeAttribute('disabled');
      stop.removeAttribute('disabled');
      pause.style.cursor = 'pointer';
      stop.style.cursor = 'pointer';
      shuffleBtn.setAttribute('disabled', '');
      select.setAttribute('disabled', '');
      score.setAttribute('disabled', '');
      shuffleBtn.style.cursor = 'default';
      select.style.cursor = 'default';
      score.style.cursor = 'default';
      minutesDisplay.innerText = '00';
      secondsDisplay.innerText = '00';
      stepDisplay.innerText = '00';
      var startState = true;
      Object(_timer_js__WEBPACK_IMPORTED_MODULE_3__["default"])({
        startState: startState
      }); // Shuffle

      var getField = Object(_storage_js__WEBPACK_IMPORTED_MODULE_1__["get"])('field');
      getField.pop();
      var needShuffle = true;
      getField.forEach(function (i, index) {
        if (i !== index + 1) {
          needShuffle = false;
        }
      });
      if (needShuffle) Object(_shuffle_js__WEBPACK_IMPORTED_MODULE_0__["default"])(table); // Play board changes

      puzzles.forEach(function (item) {
        return item.classList.remove('index');
      });
    } // Pause button


    if (target.classList.contains('pause')) {
      if (Object(_storage_js__WEBPACK_IMPORTED_MODULE_1__["get"])('pauseBtn') === 'on') {
        Object(_storage_js__WEBPACK_IMPORTED_MODULE_1__["set"])('pauseBtn', 'off');
        puzzles.forEach(function (item) {
          return item.classList.remove('index');
        });
      } else {
        Object(_storage_js__WEBPACK_IMPORTED_MODULE_1__["set"])('pauseBtn', 'on');
        puzzles.forEach(function (item) {
          return item.classList.add('index');
        });
      }

      var pauseState = Object(_storage_js__WEBPACK_IMPORTED_MODULE_1__["get"])('pauseState') === 'on' ? 'off' : 'on';
      Object(_storage_js__WEBPACK_IMPORTED_MODULE_1__["set"])('pauseState', pauseState);
      Object(_timer_js__WEBPACK_IMPORTED_MODULE_3__["default"])({
        pauseState: pauseState
      });
    } // Stop button


    if (target.classList.contains('stop')) {
      Object(_gameFunctions_stopFunction_js__WEBPACK_IMPORTED_MODULE_4__["default"])();
    } // Shuffle button


    if (target.classList.contains('shuffle')) {
      Object(_shuffle_js__WEBPACK_IMPORTED_MODULE_0__["default"])(table);
      document.querySelectorAll('.puzzle__item').forEach(function (item) {
        return item.classList.add('index');
      });
    } // Sound button


    if (target.classList.contains('sound')) {
      if (Object(_storage_js__WEBPACK_IMPORTED_MODULE_1__["get"])('soundBtn') === 'on') {
        Object(_storage_js__WEBPACK_IMPORTED_MODULE_1__["set"])('soundBtn', 'off');
      } else {
        Object(_storage_js__WEBPACK_IMPORTED_MODULE_1__["set"])('soundBtn', 'on');
      }
    } // Score button


    if (target.classList.contains('score')) {
      Object(_gameFunctions_showScoreFunction_js__WEBPACK_IMPORTED_MODULE_5__["default"])();
    }
  }

  if (type.match(/change/)) {
    // Select
    if (target.classList.contains('select')) {
      Object(_storage_js__WEBPACK_IMPORTED_MODULE_1__["set"])('select', "".concat(select.value));
      var items = document.querySelectorAll('.puzzle__item');
      var wrap = document.querySelector('.puzzle__wrap');
      var size = null;

      switch (Object(_storage_js__WEBPACK_IMPORTED_MODULE_1__["get"])('select')) {
        case 'three':
          size = 3;
          break;

        case 'four':
          size = 4;
          break;

        case 'five':
          size = 5;
          break;

        case 'six':
          size = 6;
          break;

        case 'seven':
          size = 7;
          break;

        case 'eight':
          size = 8;
          break;
      }

      wrap.style.gridTemplateColumns = "repeat(".concat(size, ", 1fr)");
      Array.from(items).forEach(function (i) {
        return i.remove();
      });
      var field = Object(_layouts_generateField_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
      table.generateLayout(field);
      Object(_storage_js__WEBPACK_IMPORTED_MODULE_1__["set"])('field', field);
      document.querySelectorAll('.puzzle__item').forEach(function (item) {
        return item.classList.add('index');
      });
    }
  }
}

/***/ }),

/***/ "./js/utils/gameFunctions/checkWinner.js":
/*!***********************************************!*\
  !*** ./js/utils/gameFunctions/checkWinner.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return checkWinner; });
/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../storage.js */ "./js/utils/storage.js");

function checkWinner() {
  var currentGameState = Object(_storage_js__WEBPACK_IMPORTED_MODULE_0__["get"])('field');
  currentGameState.pop();
  var isWrong = currentGameState.find(function (item, index) {
    return item !== index + 1;
  });
  return isWrong === 0 || isWrong ? false : true;
}

/***/ }),

/***/ "./js/utils/gameFunctions/showScoreFunction.js":
/*!*****************************************************!*\
  !*** ./js/utils/gameFunctions/showScoreFunction.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return showScoreFunction; });
/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../storage.js */ "./js/utils/storage.js");

function showScoreFunction() {
  Object(_storage_js__WEBPACK_IMPORTED_MODULE_0__["get"])('score') === 'on' ? Object(_storage_js__WEBPACK_IMPORTED_MODULE_0__["set"])('score', 'off') : Object(_storage_js__WEBPACK_IMPORTED_MODULE_0__["set"])('score', 'on');
  var scoreDisplay = document.querySelector('.popup'),
      popupNickname = document.querySelectorAll('.popup__nickname'),
      popupSteps = document.querySelectorAll('.popup__steps'),
      popupTime = document.querySelectorAll('.popup__time');

  if (Object(_storage_js__WEBPACK_IMPORTED_MODULE_0__["get"])('score') === 'on') {
    var currentTableSize = Object(_storage_js__WEBPACK_IMPORTED_MODULE_0__["get"])('select'),
        arrScore = [];

    switch (currentTableSize) {
      case 'three':
        arrScore = Object(_storage_js__WEBPACK_IMPORTED_MODULE_0__["get"])('threeStorage');
        break;

      case 'four':
        arrScore = Object(_storage_js__WEBPACK_IMPORTED_MODULE_0__["get"])('fourStorage');
        break;

      case 'five':
        arrScore = Object(_storage_js__WEBPACK_IMPORTED_MODULE_0__["get"])('fiveStorage');
        break;

      case 'six':
        arrScore = Object(_storage_js__WEBPACK_IMPORTED_MODULE_0__["get"])('sixStorage');
        break;

      case 'seven':
        arrScore = Object(_storage_js__WEBPACK_IMPORTED_MODULE_0__["get"])('sevenStorage');
        break;

      case 'eight':
        arrScore = Object(_storage_js__WEBPACK_IMPORTED_MODULE_0__["get"])('eightStorage');
        break;
    }

    for (var i = 0; i < popupNickname.length; i++) {
      popupNickname[i].innerText = arrScore[i].nickname;
    }

    for (var _i = 0; _i < popupSteps.length; _i++) {
      popupSteps[_i].innerText = arrScore[_i].steps;
    }

    for (var _i2 = 0; _i2 < popupTime.length; _i2++) {
      popupTime[_i2].innerText = arrScore[_i2].time;
    }

    scoreDisplay.classList.add('popup--active');
  } else if (Object(_storage_js__WEBPACK_IMPORTED_MODULE_0__["get"])('score') === 'off') {
    scoreDisplay.classList.remove('popup--active');
  }
}

/***/ }),

/***/ "./js/utils/gameFunctions/showWinMessage.js":
/*!**************************************************!*\
  !*** ./js/utils/gameFunctions/showWinMessage.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return showWinMessage; });
/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../storage.js */ "./js/utils/storage.js");

function showWinMessage() {
  var message = document.querySelector('.message'),
      text = document.querySelector('.message__text');

  function addZero(num) {
    return num < 10 ? num = "0".concat(num) : num;
  }

  function changeWord(steps) {
    if (parseInt(steps) === 1) {
      return '';
    } else if (parseInt(steps) <= 4) {
      return 'a';
    } else {
      return 'ов';
    }
  }

  var minutes = Object(_storage_js__WEBPACK_IMPORTED_MODULE_0__["get"])('min'),
      seconds = Object(_storage_js__WEBPACK_IMPORTED_MODULE_0__["get"])('sec'),
      steps = Object(_storage_js__WEBPACK_IMPORTED_MODULE_0__["get"])('step');
  message.classList.add('message--active');
  text.innerText = "\u0423\u0440\u0430! \u0412\u044B \u0440\u0435\u0448\u0438\u043B\u0438 \u0433\u043E\u043B\u043E\u0432\u043E\u043B\u043E\u043C\u043A\u0443 \u0437\u0430 ".concat(addZero(minutes), ":").concat(addZero(seconds), " \u0438 ").concat(addZero(steps), " \u0445\u043E\u0434").concat(changeWord(steps));
  setTimeout(function () {
    message.classList.remove('message--active');
  }, 3000);
}

/***/ }),

/***/ "./js/utils/gameFunctions/stopFunction.js":
/*!************************************************!*\
  !*** ./js/utils/gameFunctions/stopFunction.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return stopFunction; });
/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../storage.js */ "./js/utils/storage.js");
/* harmony import */ var _calculateCountSteps_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../calculateCountSteps.js */ "./js/utils/calculateCountSteps.js");
/* harmony import */ var _timer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../timer.js */ "./js/utils/timer.js");



function stopFunction() {
  var start = document.querySelector('.start');
  var stop = document.querySelector('.stop');
  var pause = document.querySelector('.pause'),
      shuffleBtn = document.querySelector('.shuffle'),
      select = document.querySelector('.select'),
      score = document.querySelector('.score'),
      puzzles = document.querySelectorAll('.puzzle__item');
  Object(_storage_js__WEBPACK_IMPORTED_MODULE_0__["set"])('startGame', 'off');
  Object(_storage_js__WEBPACK_IMPORTED_MODULE_0__["set"])('startBtn', 'off');
  Object(_storage_js__WEBPACK_IMPORTED_MODULE_0__["set"])('pauseBtn', 'off');
  start.removeAttribute('disabled');
  start.style.cursor = 'pointer';
  pause.setAttribute('disabled', '');
  stop.setAttribute('disabled', '');
  pause.style.cursor = 'default';
  stop.style.cursor = 'default';
  shuffleBtn.removeAttribute('disabled');
  select.removeAttribute('disabled');
  score.removeAttribute('disabled');
  shuffleBtn.style.cursor = 'pointer';
  select.style.cursor = 'pointer';
  score.style.cursor = 'pointer';
  puzzles.forEach(function (item) {
    return item.classList.add('index');
  });
  var stopState = true;
  Object(_calculateCountSteps_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    stopState: stopState
  });
  Object(_timer_js__WEBPACK_IMPORTED_MODULE_2__["default"])({
    stopState: stopState
  });
  Object(_storage_js__WEBPACK_IMPORTED_MODULE_0__["set"])('pauseState', 'off');
}

/***/ }),

/***/ "./js/utils/logIn.js":
/*!***************************!*\
  !*** ./js/utils/logIn.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return logIn; });
/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage.js */ "./js/utils/storage.js");

function logIn(obj) {
  var target = obj.target,
      overlay = obj.overlay,
      code = obj.code,
      pause = obj.pause,
      stop = obj.stop;

  if (target.classList.contains('form__btn') || code === 'Enter') {
    var nickname = document.querySelector('.form__field');

    if (nickname.value && nickname.value.length > 4 && nickname.value.match(/[a-zA-Zа-яА-ЯёЁ0-9]/g)) {
      Object(_storage_js__WEBPACK_IMPORTED_MODULE_0__["set"])('currentUser', nickname.value);
      Object(_storage_js__WEBPACK_IMPORTED_MODULE_0__["set"])('logIn', 'on');
      pause.setAttribute('disabled', '');
      stop.setAttribute('disabled', '');
      pause.style.cursor = 'default';
      stop.style.cursor = 'default';
      overlay.classList.add('hide');
    }
  }
}

/***/ }),

/***/ "./js/utils/scoreData.js":
/*!*******************************!*\
  !*** ./js/utils/scoreData.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return scoreData; });
/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage.js */ "./js/utils/storage.js");

function scoreData() {
  var person = {
    nickname: '',
    steps: 0,
    time: 0
  },
      data = [];

  for (var i = 0; i < 10; i++) {
    data.push(person);
  }

  if (!Object(_storage_js__WEBPACK_IMPORTED_MODULE_0__["get"])('threeStorage')) Object(_storage_js__WEBPACK_IMPORTED_MODULE_0__["set"])('threeStorage', data);
  if (!Object(_storage_js__WEBPACK_IMPORTED_MODULE_0__["get"])('fourStorage')) Object(_storage_js__WEBPACK_IMPORTED_MODULE_0__["set"])('fourStorage', data);
  if (!Object(_storage_js__WEBPACK_IMPORTED_MODULE_0__["get"])('fiveStorage')) Object(_storage_js__WEBPACK_IMPORTED_MODULE_0__["set"])('fiveStorage', data);
  if (!Object(_storage_js__WEBPACK_IMPORTED_MODULE_0__["get"])('sixStorage')) Object(_storage_js__WEBPACK_IMPORTED_MODULE_0__["set"])('sixStorage', data);
  if (!Object(_storage_js__WEBPACK_IMPORTED_MODULE_0__["get"])('sevenStorage')) Object(_storage_js__WEBPACK_IMPORTED_MODULE_0__["set"])('sevenStorage', data);
  if (!Object(_storage_js__WEBPACK_IMPORTED_MODULE_0__["get"])('eightStorage')) Object(_storage_js__WEBPACK_IMPORTED_MODULE_0__["set"])('eightStorage', data);
}

/***/ }),

/***/ "./js/utils/scoreStorage.js":
/*!**********************************!*\
  !*** ./js/utils/scoreStorage.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return scoreStorage; });
/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage.js */ "./js/utils/storage.js");

function scoreStorage() {
  function addZero(num) {
    return num < 10 ? "0".concat(num) : num;
  }

  var currentTableSize = Object(_storage_js__WEBPACK_IMPORTED_MODULE_0__["get"])('select'),
      currentSteps = Object(_storage_js__WEBPACK_IMPORTED_MODULE_0__["get"])('step'),
      currentNickname = Object(_storage_js__WEBPACK_IMPORTED_MODULE_0__["get"])('currentUser'),
      currentTime = "".concat(addZero(Object(_storage_js__WEBPACK_IMPORTED_MODULE_0__["get"])('min')), " : ").concat(addZero(Object(_storage_js__WEBPACK_IMPORTED_MODULE_0__["get"])('sec'))),
      arrScore = [];

  switch (currentTableSize) {
    case 'three':
      arrScore = Object(_storage_js__WEBPACK_IMPORTED_MODULE_0__["get"])('threeStorage');
      break;

    case 'four':
      arrScore = Object(_storage_js__WEBPACK_IMPORTED_MODULE_0__["get"])('fourStorage');
      break;

    case 'five':
      arrScore = Object(_storage_js__WEBPACK_IMPORTED_MODULE_0__["get"])('fiveStorage');
      break;

    case 'six':
      arrScore = Object(_storage_js__WEBPACK_IMPORTED_MODULE_0__["get"])('sixStorage');
      break;

    case 'seven':
      arrScore = Object(_storage_js__WEBPACK_IMPORTED_MODULE_0__["get"])('sevenStorage');
      break;

    case 'eight':
      arrScore = Object(_storage_js__WEBPACK_IMPORTED_MODULE_0__["get"])('eightStorage');
      break;
  }

  var findScorePlace = arrScore.findIndex(function (item) {
    return !item.steps || item.steps > currentSteps;
  });
  arrScore.splice(findScorePlace, 0, {
    nickname: currentNickname,
    steps: currentSteps,
    time: currentTime
  }).slice(0, 10);
  Object(_storage_js__WEBPACK_IMPORTED_MODULE_0__["set"])("".concat(currentTableSize, "Storage"), arrScore);
}

/***/ }),

/***/ "./js/utils/shuffle.js":
/*!*****************************!*\
  !*** ./js/utils/shuffle.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return shuffle; });
/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage.js */ "./js/utils/storage.js");

function shuffle(table) {
  var items = document.querySelectorAll('.puzzle__item');
  Array.from(items).forEach(function (i) {
    return i.remove();
  });
  var field = Object(_storage_js__WEBPACK_IMPORTED_MODULE_0__["get"])('field');
  field = field.sort(function () {
    return Math.random() - 0.5;
  });
  table.generateLayout(field);
  Object(_storage_js__WEBPACK_IMPORTED_MODULE_0__["set"])('field', field);
}

/***/ }),

/***/ "./js/utils/sound.js":
/*!***************************!*\
  !*** ./js/utils/sound.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return sound; });
function sound() {
  var keyAudio = document.getElementById('audioClick');
  keyAudio.currentTime = 0;
  keyAudio.play();
}

/***/ }),

/***/ "./js/utils/storage.js":
/*!*****************************!*\
  !*** ./js/utils/storage.js ***!
  \*****************************/
/*! exports provided: set, get */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set", function() { return set; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get", function() { return get; });
function set(name, value) {
  window.localStorage.setItem(name, JSON.stringify(value));
}
function get(name) {
  var dafault = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  return JSON.parse(window.localStorage.getItem(name) || dafault);
}

/***/ }),

/***/ "./js/utils/timer.js":
/*!***************************!*\
  !*** ./js/utils/timer.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return timer; });
/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage.js */ "./js/utils/storage.js");

var timerId;
function timer(obj) {
  var startState = obj.startState,
      pauseState = obj.pauseState,
      stopState = obj.stopState;

  function addZero(num) {
    return num < 10 ? "0".concat(num) : num;
  }

  var minutesDisplay = document.querySelector('#min'),
      secondsDisplay = document.querySelector('#sec');
  var minutes = 0,
      seconds = 0;

  if (startState) {
    timerId = setInterval(function () {
      seconds += 1;

      if (seconds === 60) {
        minutes += 1;
        seconds = 0;
      }

      minutesDisplay.innerText = addZero(minutes);
      secondsDisplay.innerText = addZero(seconds);
      Object(_storage_js__WEBPACK_IMPORTED_MODULE_0__["set"])('min', minutes);
      Object(_storage_js__WEBPACK_IMPORTED_MODULE_0__["set"])('sec', seconds);
    }, 1000);
    Object(_storage_js__WEBPACK_IMPORTED_MODULE_0__["set"])('timer', timerId);
  }

  if (pauseState === 'on') {
    clearInterval(parseInt(Object(_storage_js__WEBPACK_IMPORTED_MODULE_0__["get"])('timer')));
    localStorage.removeItem('timer');
  } else if (pauseState === 'off') {
    minutes = parseInt(Object(_storage_js__WEBPACK_IMPORTED_MODULE_0__["get"])('min'));
    seconds = parseInt(Object(_storage_js__WEBPACK_IMPORTED_MODULE_0__["get"])('sec'));
    timerId = setInterval(function () {
      seconds += 1;

      if (seconds === 60) {
        minutes += 1;
        seconds = 0;
      }

      minutesDisplay.innerText = addZero(minutes);
      secondsDisplay.innerText = addZero(seconds);
      Object(_storage_js__WEBPACK_IMPORTED_MODULE_0__["set"])('min', minutes);
      Object(_storage_js__WEBPACK_IMPORTED_MODULE_0__["set"])('sec', seconds);
    }, 1000);
    Object(_storage_js__WEBPACK_IMPORTED_MODULE_0__["set"])('timer', timerId);
  }

  if (stopState) {
    clearInterval(parseInt(Object(_storage_js__WEBPACK_IMPORTED_MODULE_0__["get"])('timer')));
    localStorage.removeItem('timer');
  }
}

/***/ }),

/***/ "./styles/main.scss":
/*!**************************!*\
  !*** ./styles/main.scss ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi @babel/polyfill ./index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! @babel/polyfill */"../node_modules/@babel/polyfill/lib/index.js");
module.exports = __webpack_require__(/*! ./index.js */"./index.js");


/***/ })

/******/ });
//# sourceMappingURL=main.js.map