/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_addUserScore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/addUserScore.js */ \"./src/modules/addUserScore.js\");\n/* harmony import */ var _modules_getUserScores_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/getUserScores.js */ \"./src/modules/getUserScores.js\");\n/* harmony import */ var _modules_userScore_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/userScore.js */ \"./src/modules/userScore.js\");\n/* eslint-disable linebreak-style */\r\n\r\n\r\n\r\n\r\n/* eslint-disable linebreak-style */\r\nconst baseUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';\r\nconst addScoreUrl = `${baseUrl}games/`;\r\nconst getScoresUrl = `${baseUrl}games/scores/`;\r\n\r\nconst btnSave = document.getElementById('btn-save');\r\nconst btnGet = document.getElementById('btn-get');\r\n\r\nbtnGet.addEventListener('click', () => {\r\n  const listTag = document.querySelector('ul');\r\n  const userScores = (0,_modules_getUserScores_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(getScoresUrl);\r\n  [...userScores].forEach((score) => {\r\n    const li = document.createElement('li');\r\n    li.innerHTML = `<span>${score.user}</span>: <span>${score.score}</span>`;\r\n    listTag.insertAdjacentHTML('beforeend', li);\r\n  });\r\n});\r\n\r\nbtnSave.addEventListener('click', () => {\r\n  const user = document.forms.frmScore.user.value;\r\n  const score = document.forms.frmScore.score.value;\r\n  const userScore = new _modules_userScore_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](user, score)\r\n  const response = (0,_modules_addUserScore_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(userScore, addScoreUrl);\r\n});\r\n\r\n\n\n//# sourceURL=webpack://todolist/./src/index.js?");

/***/ }),

/***/ "./src/modules/addUserScore.js":
/*!*************************************!*\
  !*** ./src/modules/addUserScore.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* eslint-disable linebreak-style */\r\n\r\nconst addUserScore = async (userScor, url) => {\r\n  await fetch(url, {\r\n    method: 'POST',\r\n    headers: { 'Content-Type': 'application/json' },\r\n    body: JSON.stringify(userScor),\r\n  }).then((res) => res.json()).catch((err) => err);\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addUserScore);\n\n//# sourceURL=webpack://todolist/./src/modules/addUserScore.js?");

/***/ }),

/***/ "./src/modules/getUserScores.js":
/*!**************************************!*\
  !*** ./src/modules/getUserScores.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* eslint-disable linebreak-style */\r\nconst getUserScores = async (url) => {\r\n  await fetch(url, {\r\n    method: 'GET',\r\n    headers: { 'Content-Type': 'application/json' },\r\n  }).then((res) => res.json()).catch((err) => err);\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getUserScores);\n\n//# sourceURL=webpack://todolist/./src/modules/getUserScores.js?");

/***/ }),

/***/ "./src/modules/userScore.js":
/*!**********************************!*\
  !*** ./src/modules/userScore.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* eslint-disable linebreak-style */\r\nclass UserScore {\r\n  constructor(user, score) {\r\n    this.user = user;\r\n    this.score = score;\r\n  }\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserScore);\n\n//# sourceURL=webpack://todolist/./src/modules/userScore.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;