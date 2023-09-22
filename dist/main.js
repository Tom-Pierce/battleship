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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `:root{\n    --board-height: 40vh\n}\n\n*{\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n}\n\nbody{\n    font-family: \"Roboto\", Arial, sans-serif;\n    width: 100vw;\n    height: 100vh;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    z-index: 1;\n}\n\n.game-window{\n    margin: 10vh;\n    padding: 10vh;\n    display: flex;\n    gap: 100px;\n}\n\n.player-board,\n.computer-board{\n    width: var(--board-height);\n    height: var(--board-height);\n    border: 1px solid black;\n    display: flex;\n    flex-direction: column;\n}\n\n.board-row{\n    display: flex;\n}\n\n.board-square{\n    width: calc(var(--board-height)/10);\n    height: calc(var(--board-height)/10);\n    border: 1px solid black;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 4rem;\n}\n\n.board-square.computer-square:not(.shot-square):hover{\n    background-color: lightgrey;\n}\n\n.ship-square{\n    background-color: grey;\n}\n\n.end-game-modal-wrapper{\n    position: absolute;\n    width: 100vw;\n    height: 100vh;\n    z-index: 2;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    backdrop-filter: brightness(80%);\n}\n\n.end-game-modal{\n    display: flex;\n    flex-direction: column;\n    background-color: grey;\n    width: 400px;\n    height: 300px;\n    justify-content: center;\n    align-items: center;\n    gap: 40%;\n    border-radius: 1rem;\n}\n\n.end-game-modal button{\n    width: 30%;\n    height: 20%;\n    font-size: 2rem;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleship/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://battleship/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/computer-ai/computer-guess.js":
/*!*******************************************!*\
  !*** ./src/computer-ai/computer-guess.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   computerGuess: () => (/* binding */ computerGuess)\n/* harmony export */ });\nconst getRandomCoords = () => [\n  Math.floor(Math.random() * 10),\n  Math.floor(Math.random() * 10),\n];\n\n// eslint-disable-next-line import/prefer-default-export\nconst computerGuess = (player) => {\n  const guess = getRandomCoords();\n  // If that square has already been shot at, recursively call till one has not been\n  if (player.gameboard.board[guess[1]][guess[0]].isShot) {\n    return computerGuess(player);\n  }\n  return guess;\n};\n\n\n//# sourceURL=webpack://battleship/./src/computer-ai/computer-guess.js?");

/***/ }),

/***/ "./src/end-game.js":
/*!*************************!*\
  !*** ./src/end-game.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helpers_create_DOM_elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers/create-DOM-elements */ \"./src/helpers/create-DOM-elements.js\");\n/* harmony import */ var _start_game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./start-game */ \"./src/start-game.js\");\n\n\n\nconst restartGame = () => {\n  document.body.innerHTML = \"\";\n  (0,_start_game__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n};\n\nconst createEndGameModal = (headerString) => {\n  const modalWrapper = (0,_helpers_create_DOM_elements__WEBPACK_IMPORTED_MODULE_0__.createDiv)(\"\", [\"end-game-modal-wrapper\"]);\n  const modal = (0,_helpers_create_DOM_elements__WEBPACK_IMPORTED_MODULE_0__.createDiv)(\"end-game-modal\", [\"end-game-modal\"]);\n  modal.appendChild((0,_helpers_create_DOM_elements__WEBPACK_IMPORTED_MODULE_0__.createHeader)(\"\", [\"end-game-header\"], \"h2\", headerString));\n  const restartButton = (0,_helpers_create_DOM_elements__WEBPACK_IMPORTED_MODULE_0__.createButton)(\n    \"\",\n    [\"restart-game-btn\"],\n    \"Restart\",\n    \"button\",\n  );\n  restartButton.addEventListener(\"click\", () => {\n    restartGame();\n  });\n  modal.appendChild(restartButton);\n  modalWrapper.appendChild(modal);\n  return modalWrapper;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((winner) => {\n  if (winner.isHuman)\n    document.body.insertAdjacentElement(\n      \"afterbegin\",\n      createEndGameModal(\"You won\"),\n    );\n  else\n    document.body.insertAdjacentElement(\n      \"afterbegin\",\n      createEndGameModal(\"Computer won\"),\n    );\n});\n\n\n//# sourceURL=webpack://battleship/./src/end-game.js?");

/***/ }),

/***/ "./src/factories/create-gameboard.js":
/*!*******************************************!*\
  !*** ./src/factories/create-gameboard.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _end_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../end-game */ \"./src/end-game.js\");\n/* harmony import */ var _create_ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-ship */ \"./src/factories/create-ship.js\");\n/* harmony import */ var _create_square__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create-square */ \"./src/factories/create-square.js\");\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {\n  const board = [];\n  const ships = [];\n  let gameOver = false;\n  // Create a 2D array of squares\n  for (let i = 0; i < 10; i += 1) {\n    const boardRow = [];\n    for (let j = 0; j < 10; j += 1) {\n      const square = (0,_create_square__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n      boardRow.push(square);\n    }\n    board.push(boardRow);\n  }\n\n  // Create a ship with the given parameters and place it on the board\n  const placeShip = (x, y, shipLength, isHorizontal) => {\n    const ship = (0,_create_ship__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(x, y, shipLength, isHorizontal);\n    ships.push(ship);\n    // Every part of the ship needs to be placed on the board\n    ship.positions.forEach((position) => {\n      board[position[1]][position[0]].placeShip();\n    });\n  };\n\n  const arraysAreEqual = (arr1, arr2) => {\n    // Loop through each element in the arrays and compare them, if any aren't equal, return false\n    for (let i = 0; i < arr1.length; i += 1) {\n      if (arr1[i] !== arr2[i]) {\n        return false;\n      }\n    }\n    return true;\n  };\n\n  const checkGameOver = (winner) => {\n    // If every ship is sunk, set gameOver to true\n    if (ships.every((ship) => ship.isSunk())) {\n      gameOver = true;\n      (0,_end_game__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(winner);\n    }\n  };\n\n  // Checks if the position has a ship, if it does find the ship and hit it\n  const receiveAttack = (x, y, loser) => {\n    if (board[y][x].isShip) {\n      ships.forEach((ship) => {\n        ship.positions.forEach((position) => {\n          if (arraysAreEqual(position, [x, y])) {\n            ship.hit();\n            board[y][x].shoot();\n          }\n        });\n      });\n    } else {\n      // If there is no ship, hit the water to mark the square as shot\n      board[y][x].shoot();\n    }\n    checkGameOver(loser.opponent);\n  };\n  return {\n    placeShip,\n    receiveAttack,\n    board,\n    ships,\n    get gameOver() {\n      return gameOver;\n    },\n  };\n});\n\n\n//# sourceURL=webpack://battleship/./src/factories/create-gameboard.js?");

/***/ }),

/***/ "./src/factories/create-player.js":
/*!****************************************!*\
  !*** ./src/factories/create-player.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _create_gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-gameboard */ \"./src/factories/create-gameboard.js\");\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((isHuman) => {\n  const gameboard = (0,_create_gameboard__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  let opponent;\n\n  const takeShot = (x, y) => {\n    opponent.gameboard.receiveAttack(x, y, opponent);\n  };\n  return {\n    takeShot,\n    get isHuman() {\n      return isHuman;\n    },\n    get gameboard() {\n      return gameboard;\n    },\n    get opponent() {\n      return opponent;\n    },\n    set opponent(player) {\n      opponent = player;\n    },\n  };\n});\n\n\n//# sourceURL=webpack://battleship/./src/factories/create-player.js?");

/***/ }),

/***/ "./src/factories/create-ship.js":
/*!**************************************!*\
  !*** ./src/factories/create-ship.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((x, y, shipLength, isHorizontal) => {\n  let hits = 0;\n\n  const hit = () => {\n    hits += 1;\n  };\n\n  const isSunk = () => {\n    if (shipLength === hits) return true;\n    return false;\n  };\n  // Returns an array of all the positions that the ship takes depending on length and direction is is placed\n  const getShipPosition = () => {\n    const positionsArr = [];\n    if (isHorizontal) {\n      for (let i = 0; i < shipLength; i += 1) {\n        const position = [];\n        position.push(x, y + i);\n        positionsArr.push(position);\n      }\n    } else {\n      for (let i = 0; i < shipLength; i += 1) {\n        const position = [];\n        position.push(x + i, y);\n        positionsArr.push(position);\n      }\n    }\n    return positionsArr;\n  };\n  const positions = getShipPosition();\n  return {\n    hit,\n    isSunk,\n    get positions() {\n      return positions;\n    },\n  };\n});\n\n\n//# sourceURL=webpack://battleship/./src/factories/create-ship.js?");

/***/ }),

/***/ "./src/factories/create-square.js":
/*!****************************************!*\
  !*** ./src/factories/create-square.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// The squares are used to fill the board and mark whether a slot has been shot at or contains a ship\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {\n  let isShot = false;\n  let isShip = false;\n\n  const shoot = () => {\n    isShot = true;\n  };\n\n  const placeShip = () => {\n    isShip = true;\n  };\n\n  return {\n    get isShot() {\n      return isShot;\n    },\n    get isShip() {\n      return isShip;\n    },\n    shoot,\n    placeShip,\n  };\n});\n\n\n//# sourceURL=webpack://battleship/./src/factories/create-square.js?");

/***/ }),

/***/ "./src/helpers/create-DOM-elements.js":
/*!********************************************!*\
  !*** ./src/helpers/create-DOM-elements.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createButton: () => (/* binding */ createButton),\n/* harmony export */   createDiv: () => (/* binding */ createDiv),\n/* harmony export */   createHeader: () => (/* binding */ createHeader),\n/* harmony export */   createImg: () => (/* binding */ createImg)\n/* harmony export */ });\nconst createDiv = (divId, divClasses) => {\n  const div = document.createElement(\"div\");\n  if (divId) div.id = divId;\n  divClasses.forEach((divClass) => {\n    div.classList.add(divClass);\n  });\n  return div;\n};\n\nconst createHeader = (headerId, headerClasses, headerType, text) => {\n  const header = document.createElement(headerType);\n  if (headerId) header.id = headerId;\n  headerClasses.forEach((headerClass) => {\n    header.classList.add(headerClass);\n  });\n  header.textContent = text;\n  return header;\n};\n\nconst createImg = (imgId, imgClasses, imgSrc) => {\n  const img = document.createElement(\"img\");\n  if (imgId) img.id = imgId;\n  imgClasses.forEach((imgClass) => {\n    img.classList.add(imgClass);\n  });\n  img.src = imgSrc;\n  return img;\n};\n\nconst createButton = (buttonId, buttonClasses, buttonText, buttonType) => {\n  const button = document.createElement(\"button\");\n  if (buttonId) button.id = buttonId;\n  buttonClasses.forEach((buttonClass) => {\n    button.classList.add(buttonClass);\n  });\n  button.textContent = buttonText;\n  button.type = buttonType;\n  return button;\n};\n\n\n\n\n//# sourceURL=webpack://battleship/./src/helpers/create-DOM-elements.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _start_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./start-game */ \"./src/start-game.js\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n\n\n\n(0,_start_game__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n\n//# sourceURL=webpack://battleship/./src/index.js?");

/***/ }),

/***/ "./src/load-html.js":
/*!**************************!*\
  !*** ./src/load-html.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadGameboard: () => (/* binding */ loadGameboard),\n/* harmony export */   loadHTML: () => (/* binding */ loadHTML)\n/* harmony export */ });\n/* harmony import */ var _helpers_create_DOM_elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers/create-DOM-elements */ \"./src/helpers/create-DOM-elements.js\");\n/* harmony import */ var _player_turn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player-turn */ \"./src/player-turn.js\");\n\n\n\nconst loadHTML = () => {\n  const titleDiv = (0,_helpers_create_DOM_elements__WEBPACK_IMPORTED_MODULE_0__.createDiv)(\"title-div\", [\"title-div\"]);\n  titleDiv.appendChild(\n    (0,_helpers_create_DOM_elements__WEBPACK_IMPORTED_MODULE_0__.createHeader)(\"title-header\", [\"title-header\"], \"h1\", \"BATTLESHIP\"),\n  );\n  document.body.appendChild(titleDiv);\n\n  const gameWindow = (0,_helpers_create_DOM_elements__WEBPACK_IMPORTED_MODULE_0__.createDiv)(\"game-window\", [\"game-window\"]);\n  document.body.appendChild(gameWindow);\n  const playerBoard = (0,_helpers_create_DOM_elements__WEBPACK_IMPORTED_MODULE_0__.createDiv)(\"player-board\", [\"player-board\"]);\n  const aiBoard = (0,_helpers_create_DOM_elements__WEBPACK_IMPORTED_MODULE_0__.createDiv)(\"computer-board\", [\"computer-board\"]);\n\n  gameWindow.appendChild(playerBoard);\n  gameWindow.appendChild(aiBoard);\n};\n\nconst renderShips = (player, boardDiv) => {\n  boardDiv.childNodes.forEach((rowDiv, i) => {\n    rowDiv.childNodes.forEach((squareDiv, j) => {\n      if (player.gameboard.board[j][i].isShip) {\n        squareDiv.classList.add(\"ship-square\");\n      }\n    });\n  });\n};\nconst loadGameboard = (player, boardDiv) => {\n  // For every square in the gameboard create a div\n  player.gameboard.board.forEach((row, i) => {\n    const rowDiv = (0,_helpers_create_DOM_elements__WEBPACK_IMPORTED_MODULE_0__.createDiv)(\"\", [\"board-row\"]);\n    row.forEach((square, j) => {\n      const squareDiv = (0,_helpers_create_DOM_elements__WEBPACK_IMPORTED_MODULE_0__.createDiv)(\"\", [\"board-square\"]);\n      if (player.isHuman) squareDiv.classList.add(\"human-square\");\n      else {\n        // If the \"player\" is the computer, add event listeners so we can shoot it\n        squareDiv.addEventListener(\"click\", () => {\n          squareDiv.classList.add(\"shot-square\");\n          (0,_player_turn__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(i, j, player.opponent);\n        });\n        squareDiv.classList.add(\"computer-square\");\n      }\n      rowDiv.appendChild(squareDiv);\n    });\n    boardDiv.appendChild(rowDiv);\n  });\n  if (player.isHuman) renderShips(player, boardDiv);\n};\n\n\n//# sourceURL=webpack://battleship/./src/load-html.js?");

/***/ }),

/***/ "./src/player-turn.js":
/*!****************************!*\
  !*** ./src/player-turn.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _computer_ai_computer_guess__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./computer-ai/computer-guess */ \"./src/computer-ai/computer-guess.js\");\n/* harmony import */ var _update_board__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./update-board */ \"./src/update-board.js\");\n\n\n\nconst computerTurn = (computer) => {\n  const guess = (0,_computer_ai_computer_guess__WEBPACK_IMPORTED_MODULE_0__.computerGuess)(computer.opponent);\n  computer.takeShot(guess[0], guess[1]);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((x, y, player) => {\n  if (player.opponent.gameboard.board[y][x].isShot) return;\n  player.takeShot(x, y);\n  computerTurn(player.opponent);\n  (0,_update_board__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(player, document.getElementById(\"player-board\"));\n  (0,_update_board__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(player.opponent, document.getElementById(\"computer-board\"));\n});\n\n\n//# sourceURL=webpack://battleship/./src/player-turn.js?");

/***/ }),

/***/ "./src/start-game.js":
/*!***************************!*\
  !*** ./src/start-game.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _factories_create_player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factories/create-player */ \"./src/factories/create-player.js\");\n/* harmony import */ var _load_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./load-html */ \"./src/load-html.js\");\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {\n  // Initiate HTMl and create players with ship layout\n  (0,_load_html__WEBPACK_IMPORTED_MODULE_1__.loadHTML)();\n  const player = (0,_factories_create_player__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(true);\n  const computer = (0,_factories_create_player__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(false);\n  player.opponent = computer;\n  computer.opponent = player;\n\n  player.gameboard.placeShip(4, 6, 2, true);\n  computer.gameboard.placeShip(4, 6, 2, true);\n\n  player.gameboard.placeShip(0, 0, 3, false);\n  computer.gameboard.placeShip(0, 0, 3, false);\n\n  player.gameboard.placeShip(6, 1, 5, true);\n  computer.gameboard.placeShip(6, 1, 5, true);\n\n  player.gameboard.placeShip(6, 8, 4, false);\n  computer.gameboard.placeShip(6, 8, 4, false);\n\n  (0,_load_html__WEBPACK_IMPORTED_MODULE_1__.loadGameboard)(player, document.getElementById(\"player-board\"));\n  (0,_load_html__WEBPACK_IMPORTED_MODULE_1__.loadGameboard)(computer, document.getElementById(\"computer-board\"));\n});\n\n\n//# sourceURL=webpack://battleship/./src/start-game.js?");

/***/ }),

/***/ "./src/update-board.js":
/*!*****************************!*\
  !*** ./src/update-board.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _assets_hit_no_ship_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/hit-no-ship.svg */ \"./src/assets/hit-no-ship.svg\");\n/* harmony import */ var _assets_hit_ship_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/hit-ship.svg */ \"./src/assets/hit-ship.svg\");\n/* harmony import */ var _helpers_create_DOM_elements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers/create-DOM-elements */ \"./src/helpers/create-DOM-elements.js\");\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((player, boardDiv) => {\n  boardDiv.childNodes.forEach((rowDiv, i) => {\n    rowDiv.childNodes.forEach((squareDiv, j) => {\n      // If there is already an image, there is no need to update it\n      if (squareDiv.firstChild) return;\n      // Depending on whether the square has a ship or is hit, append a different img\n      const square = player.gameboard.board[j][i];\n      if (square.isShot && square.isShip) {\n        squareDiv.appendChild((0,_helpers_create_DOM_elements__WEBPACK_IMPORTED_MODULE_2__.createImg)(\"\", [\"hit-ship\"], _assets_hit_ship_svg__WEBPACK_IMPORTED_MODULE_1__));\n      } else if (square.isShot && !square.isShip) {\n        squareDiv.appendChild((0,_helpers_create_DOM_elements__WEBPACK_IMPORTED_MODULE_2__.createImg)(\"\", [\"hit-no-ship\"], _assets_hit_no_ship_svg__WEBPACK_IMPORTED_MODULE_0__));\n      }\n    });\n  });\n});\n\n\n//# sourceURL=webpack://battleship/./src/update-board.js?");

/***/ }),

/***/ "./src/assets/hit-no-ship.svg":
/*!************************************!*\
  !*** ./src/assets/hit-no-ship.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"e5b6315ac05dc8529b76.svg\";\n\n//# sourceURL=webpack://battleship/./src/assets/hit-no-ship.svg?");

/***/ }),

/***/ "./src/assets/hit-ship.svg":
/*!*********************************!*\
  !*** ./src/assets/hit-ship.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"1ded1e99216871d2a3ae.svg\";\n\n//# sourceURL=webpack://battleship/./src/assets/hit-ship.svg?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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