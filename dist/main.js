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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Lato&family=Poppins:wght@400;500;600;700;800&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \":root {\\n  --primary-color: #21637b;\\n  --secondary-color: rgb(0, 0, -19);\\n  --white-color: #fff;\\n  --tertiary-color: wheat;\\n}\\n\\n* {\\n  outline: none;\\n  border: none;\\n  list-style-type: none;\\n  text-decoration: none;\\n  transition: 0.3s linear;\\n  margin: 0;\\n  padding: 0;\\n  box-sizing: border-box;\\n  font-family: 'Poppins', sans-serif;\\n}\\n\\nbody {\\n  background-color: rgb(0, 0, -19);\\n  color: #fff;\\n  font-weight: bolder;\\n}\\n\\n.flex {\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  gap: 60px;\\n}\\n\\n/* header section */\\nheader {\\n  height: 85px;\\n}\\n\\n.header-container {\\n  background-color: var(--primary-color);\\n  height: 80px;\\n  position: fixed;\\n  width: 100%;\\n  z-index: 10;\\n}\\n\\n.container {\\n  width: 90%;\\n  height: 100%;\\n  margin: auto;\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n}\\n\\nh1 {\\n  font-size: 22px;\\n}\\n\\nh1 a {\\n  color: red;\\n  width: fit-content;\\n  background-color: var(--secondary-color);\\n  padding: 8px 25px;\\n  border-radius: 10px;\\n  border: 2px solid var(--white-color);\\n}\\n\\nh1 span:nth-child(1) {\\n  color: var(--tertiary-color);\\n}\\n\\n.nav-links .nav-link a.active {\\n  border-bottom: 2px solid var(--white-color);\\n}\\n\\n.nav-link a {\\n  font-weight: bold;\\n  color: var(--white-color);\\n  font-size: 15px;\\n  letter-spacing: 2px;\\n}\\n\\n.nav-link:hover {\\n  padding: 8px 16px;\\n  border: 1px solid var(--white-color);\\n  border-radius: 10px;\\n  cursor: pointer;\\n  color: var(--tertiary-color);\\n}\\n\\n/* show container section */\\n.show-container {\\n  display: grid;\\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\\n  place-items: center;\\n  margin: 30px 0;\\n}\\n\\n.show-container .cards {\\n  margin: 10px 0;\\n  width: 250px;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n}\\n\\n.card-image {\\n  width: 100%;\\n}\\n\\n.card-image img {\\n  width: 100%;\\n}\\n\\n/* modal image */\\n.modal-image img {\\n  width: 600px;\\n  height: 500px;\\n}\\n\\n.card-image img:hover {\\n  animation: shadow 0.8s linear backwards;\\n}\\n\\n@keyframes shadow {\\n  50% {\\n    transform: scale(1.1);\\n  }\\n}\\n\\n.card-body {\\n  display: flex;\\n  width: 100%;\\n  justify-content: space-between;\\n  margin: 10px 0 15px;\\n  font-size: 20px;\\n  font-weight: normal;\\n}\\n\\n.likes-container {\\n  display: flex;\\n  width: 80%;\\n  justify-content: space-between;\\n}\\n\\n.likes-container p:nth-child(1) {\\n  width: 90%;\\n  line-height: 25px;\\n  font-size: 18px;\\n}\\n\\n.like-btn i {\\n  cursor: pointer;\\n  color: red;\\n  font-size: 20px;\\n}\\n\\n.btn-comment button {\\n  background-color: var(--primary-color);\\n  color: var(--white-color);\\n  font-weight: bold;\\n  padding: 6px 12px;\\n  font-size: 15px;\\n  cursor: pointer;\\n}\\n\\n/* footer section */\\nfooter {\\n  width: 100%;\\n}\\n\\nfooter .header-container {\\n  position: relative;\\n}\\n\\nfooter .container {\\n  justify-content: space-around;\\n}\\n\\n.authors,\\n.authors a {\\n  font-size: 20px;\\n  color: var(--white-color);\\n}\\n\\n.authors a {\\n  color: var(--tertiary-color);\\n  text-decoration: underline;\\n}\\n\\n/* modal section */\\n#modal.hidden {\\n  /* display: none; */\\n  opacity: 0;\\n  animation: slideOUT 0.6s linear both;\\n}\\n\\n/* #modal.slide-out */\\n\\n#modal {\\n  position: fixed;\\n  top: 0;\\n  width: 100%;\\n  height: 100%;\\n  z-index: 15;\\n  padding: 3rem  7rem;\\n  overflow-y: auto;\\n  color: #fff;\\n  opacity: 1;\\n  background-color: rgba(0, 0, 0, 0.93);\\n  animation: slideIN 0.6s linear both;\\n}\\n\\n@keyframes slideIN {\\n  from {\\n    transform: scale(0);\\n  }\\n\\n  to {\\n    transform: scale(1);\\n  }\\n}\\n\\n@keyframes slideOUT {\\n  from {\\n    transform: scale(1);\\n  }\\n\\n  to {\\n    transform: scale(0);\\n  }\\n}\\n\\n.overflow {\\n  overflow: hidden;\\n}\\n\\n.close-modal-btn {\\n  text-align: right;\\n}\\n\\n.close-modal-btn button {\\n  font-size: 20px;\\n  background-color: red;\\n  padding: 10px;\\n  font-weight: bolder;\\n  border-radius: 5px;\\n  color: var(--white-color);\\n  border: 2px solid var(--tertiary-color);\\n  cursor: pointer;\\n}\\n\\n.close-modal-btn button:hover {\\n  animation: shadow 0.8s linear infinite;\\n}\\n\\n.modal-image {\\n  text-align: center;\\n}\\n\\n.modal-image img:hover {\\n  animation: shadow 0.8s linear forwards;\\n}\\n\\n.modal-title {\\n  text-align: center;\\n  margin: 15px;\\n  color: var(--tertiary-color);\\n}\\n\\n.modal-body {\\n  font-weight: 100;\\n  text-align: justify;\\n  color: var(--tertiary-color);\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://group-capstone-project/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://group-capstone-project/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://group-capstone-project/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://group-capstone-project/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://group-capstone-project/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://group-capstone-project/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://group-capstone-project/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://group-capstone-project/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://group-capstone-project/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://group-capstone-project/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_homepage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/homepage.js */ \"./src/modules/homepage.js\");\n/* harmony import */ var _modules_modal_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal.js */ \"./src/modules/modal.js\");\n\n// import { getLikesData, postLike } from './modules/likeApi.js';\n\n\n\n\n(0,_modules_homepage_js__WEBPACK_IMPORTED_MODULE_1__.DISPLAY)();\n\nsetInterval(() => {\n  const commentButton = document.querySelectorAll('button.comment');\n\n  commentButton.forEach((button) => {\n    button.addEventListener('click', () => {\n      const buttonID = button.parentNode.parentNode.getAttribute('id');\n      (0,_modules_modal_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(parseInt(buttonID, 10));\n    });\n  });\n}, 1000);\n\n// postLike({ item_id: 'Like1' });\n// let index = 1;\n// const postLiked = (ID) => {\n//   if (index === 1) {\n//     console.log(ID);\n//     index -= 1;\n//   } else {\n//     return 'error';\n//   }\n// };\n\n// const index = 1;\n// setInterval(() => {\n//   const likeBtnIcon = document.querySelectorAll('i.like-btn-icon');\n//   likeBtnIcon.forEach((button) => {\n//     button.addEventListener('click', () => {\n//       const likeID = button.parentNode.parentNode.parentNode.parentNode.getAttribute('id');\n//       // console.log(likeID);\n//       // postLiked(likeID);\n//       postLike({ item_id: likeID });\n//     });\n//   });\n// }, 15000);\n\n// const activateLikes = () => {\n//   const id = [];\n//   setInterval(() => {\n//     const likeBtnIcon = document.querySelectorAll('i.like-btn-icon');\n\n//     likeBtnIcon.forEach((button) => {\n//       button.addEventListener('click', () => {\n//         const likeID = button.parentNode.parentNode.parentNode.parentNode.getAttribute('id');\n//         // console.log(likeID);\n//         id.push(likeID);\n//       });\n//     });\n//   }, 10000);\n// };\n\n// activateLikes();\n\n//# sourceURL=webpack://group-capstone-project/./src/index.js?");

/***/ }),

/***/ "./src/modules/apiUrl.js":
/*!*******************************!*\
  !*** ./src/modules/apiUrl.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst CARD_API = 'https://api.tvmaze.com/shows';\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CARD_API);\n\n\n//# sourceURL=webpack://group-capstone-project/./src/modules/apiUrl.js?");

/***/ }),

/***/ "./src/modules/homepage.js":
/*!*********************************!*\
  !*** ./src/modules/homepage.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"DISPLAY\": () => (/* binding */ DISPLAY),\n/* harmony export */   \"getApiData\": () => (/* binding */ getApiData)\n/* harmony export */ });\n/* harmony import */ var _apiUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apiUrl.js */ \"./src/modules/apiUrl.js\");\n/* harmony import */ var _likeApi_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./likeApi.js */ \"./src/modules/likeApi.js\");\n\n\n\nconst getApiData = async (URL) => {\n  const res = await fetch(URL);\n  const result = await res.json();\n  return result;\n};\n\nconst showContainer = document.querySelector('.show-container');\n\nconst renderLikes = async () => {\n  const likesData = await (0,_likeApi_js__WEBPACK_IMPORTED_MODULE_1__.getLikesData)(_apiUrl_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n  const cards = document.querySelectorAll('.cards');\n  cards.forEach((card) => {\n    const cardIDs = card.getAttribute('id');\n    likesData.forEach((data) => {\n      const likesDataID = data.item_id;\n      const { likes } = data;\n      if (cardIDs === likesDataID) {\n        const likeCount = card.childNodes[3].childNodes[3];\n        likeCount.innerHTML = likes;\n      }\n    });\n  });\n};\n\nconst DISPLAY = async () => {\n  const shows = await getApiData(_apiUrl_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n  const showLength = 30;\n  for (let i = showLength; i > 0; i -= 1) {\n    const index = Math.floor(Math.random() * 50);\n    showContainer.innerHTML += ` \n    <li class=\"cards\" id=\"${shows[index].id}\">\n      <div class=\"card-image\">\n      <a href=\"${shows[index].url}\" target=\"blank\">\n        <img\n        src=\"${shows[index].image.medium}\"\n        alt=\"${shows[index].name} image\" />\n      </a>\n      </div>\n      <ul class=\"card-body\">\n        <li class=\"likes-container\">\n        <p>${shows[index].name}</p>\n        <p class=\"like-btn\"><i class=\"fa-regular fa-heart like-btn-icon\"></i></p>\n        </li>\n        <p class=\"likes\"></p> \n      </ul>\n      <div class=\"btn-comment\">\n        <button class=\"comment\" >Comments</button>\n      </div>\n    </li>\n    `;\n  }\n\n  renderLikes();\n\n  const likeBtnIcon = document.querySelectorAll('i.like-btn-icon');\n  likeBtnIcon.forEach((button) => {\n    button.addEventListener('click', async () => {\n      const parentDiv = button.parentNode.parentNode.parentNode.parentNode;\n      const likeID = parentDiv.getAttribute('id');\n      const likeCount = parentDiv.childNodes[3].childNodes[3];\n      const likeCountValue = parseInt((likeCount.innerHTML), 10);\n      if (likeCount.innerHTML === '') {\n        likeCount.innerHTML = 1;\n      } else {\n        likeCount.innerHTML = likeCountValue + 1;\n      }\n      (0,_likeApi_js__WEBPACK_IMPORTED_MODULE_1__.postLike)({ item_id: likeID });\n    });\n  });\n};\n\n//# sourceURL=webpack://group-capstone-project/./src/modules/homepage.js?");

/***/ }),

/***/ "./src/modules/likeApi.js":
/*!********************************!*\
  !*** ./src/modules/likeApi.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getLikesData\": () => (/* binding */ getLikesData),\n/* harmony export */   \"postLike\": () => (/* binding */ postLike)\n/* harmony export */ });\nconst API_URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/W3X13mPi4LXKYt13LQLN/likes';\n\nconst getLikesData = async () => {\n  const res = await fetch(API_URL);\n  const result = await res.json();\n  return result;\n};\n\nconst postLike = async (userInput) => fetch(API_URL, {\n  method: 'POST',\n  headers: {\n    'content-type': 'application/json',\n  },\n  body: JSON.stringify(userInput),\n})\n  .then((response) => response.json())\n  .then((data) => data.result);\n\n//# sourceURL=webpack://group-capstone-project/./src/modules/likeApi.js?");

/***/ }),

/***/ "./src/modules/modal.js":
/*!******************************!*\
  !*** ./src/modules/modal.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _apiUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apiUrl.js */ \"./src/modules/apiUrl.js\");\n/* harmony import */ var _homepage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./homepage.js */ \"./src/modules/homepage.js\");\n\n\n\nconst modal = document.querySelector('#modal');\nconst body = document.querySelector('body');\n\nconst modalDisplay = (movie) => {\n  modal.innerHTML = '';\n  modal.innerHTML += `\n  <div class=\"close-modal-btn\">\n      <button class=\"close-modal\">X</button>\n    </div>\n    <div class=\"modal-image\">\n      <img src=\"${movie.image.medium}\" alt=\"${movie.name} image\">\n    </div>\n    <div class=\"modal-body\">\n      <h2 class=\"modal-title\">${movie.name}</h2>\n      <p class=\"modal-description\">${movie.summary}</p>\n    </div>\n  `;\n  modal.classList.remove('hidden');\n  body.classList.add('overflow');\n\n  const closeModalBtn = document.querySelector('.close-modal');\n  closeModalBtn.addEventListener('click', () => {\n    modal.classList.add('hidden');\n    body.classList.remove('overflow');\n  });\n};\n\nconst selectedCardDetails = async (id) => {\n  const shows = await (0,_homepage_js__WEBPACK_IMPORTED_MODULE_1__.getApiData)(_apiUrl_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n  shows.forEach((show) => {\n    if (show.id === id) {\n      modalDisplay(show);\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (selectedCardDetails);\n\n//# sourceURL=webpack://group-capstone-project/./src/modules/modal.js?");

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