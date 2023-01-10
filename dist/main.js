/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  font-family: sans-serif;\n  font-size: 16px;\n\n  --bgColor1: #15202b;\n  --bgColor2: #192734;\n  --bgColor3: #22303c;\n  --bgColorPopUp: #273746;\n  --textColor: #eaebec;\n  --accent: #2abd67;\n  --accentDark: #1f8d4d;\n}\n.material-symbols-outlined {\n  font-variation-settings: \"FILL\" 0, \"wght\" 400, \"GRAD\" 0, \"opsz\" 48;\n}\n/* css when light mode is turned on */\nbody.light {\n  --bgColor2: #ececec;\n  --bgColor3: #f2f3f5;\n  --bgColor1: #fefcfe;\n  --bgColorPopUp: #f3f1f3;\n  --textColor: #374958;\n  --accentDark: #aeedc8;\n}\nbody {\n  background-color: var(--bgColor1);\n  height: 100vh;\n  color: var(--textColor);\n}\n.container {\n  display: grid;\n  grid-template-rows: 1fr 5fr;\n  grid-template-columns: 1fr 5fr;\n  min-width: 100vw;\n  min-height: 100vh;\n}\n.header {\n  grid-column: 1/-1;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0px 60px 0px 60px;\n  background-color: var(--bgColor2);\n}\n.logo {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 40px;\n  font-weight: 900;\n}\n#logo {\n  font-size: 40px;\n}\n.sidebar {\n  grid-row: 2/-1;\n  background-color: var(--bgColor3);\n  display: grid;\n  grid-template-rows: auto 1fr;\n  padding-left: 10px;\n  padding-top: 20px;\n  gap: 20px;\n}\nbutton {\n  border: none;\n  color: inherit;\n  background-color: inherit;\n  cursor: pointer;\n  outline: inherit;\n}\nbutton:hover {\n  background-color: var(--bgColor1);\n}\n.sideTop {\n  display: grid;\n  gap: 20px;\n}\n.sideItem,\n.addTask {\n  font-size: 15px;\n  background-color: var(--bgColor3);\n  display: grid;\n  grid-template-columns: 50px 100px;\n  gap: 15px;\n  align-items: center;\n  justify-items: start;\n  border-radius: 20px;\n  height: 35px;\n}\n.projectContainer > *.sideItem {\n  grid-template-columns: 50px 100px 1fr;\n}\n.projectContainer > .sideItem > span:last-child {\n  justify-self: end;\n  padding-right: 20px;\n  display: none;\n}\n.projectContainer > .sideItem:hover span#close {\n  display: block;\n}\n.sideBottom {\n  display: grid;\n  gap: 10px;\n  grid-auto-rows: max-content;\n}\n.sideBottom > .big {\n  font-size: 20px;\n  border-bottom: 2px solid var(--textColor);\n  padding-bottom: 3px;\n}\n.sideBottom > .projectContainer > .sideItem {\n  padding: 0;\n  width: 100%;\n}\n.project-modal {\n  display: none;\n}\n.project-modal.active {\n  display: block;\n}\n\ntextarea {\n  border: none;\n  overflow: auto;\n  outline: none;\n  resize: none; /*remove the resize handle on the bottom right*/\n}\n.input > input,\n.input > textarea {\n  all: unset;\n  min-height: 25px;\n  width: 96%;\n  background-color: var(--bgColor2);\n  border-bottom: 1px solid gray;\n}\n.buttons {\n  display: flex;\n  padding-top: 5px;\n}\n.buttons > button,\n#submit {\n  padding: 5px 15px;\n  border-radius: 20px;\n  background-color: var(--accentDark);\n  color: var(--textColor);\n  font-size: inherit;\n  font-weight: bold;\n}\n.buttons > #cancel,\n#cancel2 {\n  border: 1px solid #ee6d6d;\n  background-color: #ec4141;\n}\n.content {\n  display: grid;\n  grid-auto-rows: max-content;\n  padding: 20px;\n  gap: 20px;\n  justify-items: center;\n}\n.content > .Title {\n  height: 150px;\n  width: 90%;\n  font-size: 40px;\n  padding-left: 20px;\n  justify-self: center;\n  display: flex;\n  align-items: center;\n  background-color: var(--accentDark);\n  border-radius: 30px;\n}\n\nbutton.addTask:hover {\n  background-color: var(--bgColor2);\n}\n.content > .addTask {\n  justify-items: center;\n  width: 80%;\n  justify-self: center;\n}\n.taskModal.active {\n  display: block;\n}\n.taskModal {\n  display: none;\n}\n.taskModal.modal {\n  display: block;\n  transform: translate(-50%, -50%);\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  z-index: 2;\n  transition: 0.2s ease-in-out;\n}\n.modal-container {\n  background-color: var(--bgColor3);\n  display: grid;\n  grid-auto-rows: max-content;\n  gap: 20px;\n  justify-items: start;\n  justify-content: center;\n  font-size: 20px;\n  width: fit-content;\n  padding: 20px;\n  border-radius: 20px;\n}\n.modal-container > .buttons {\n  gap: 15px;\n}\n.input {\n  display: grid;\n  grid-auto-rows: max-content;\n}\n.taskContainer {\n  width: 70%;\n}\n.task {\n  display: grid;\n  border: 1px solid var(--textColor);\n  border-radius: 15px;\n  padding: 10px 20px;\n  gap: 5px;\n}\n.task span {\n  cursor: pointer;\n}\n.task-shown {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.taskLeft {\n  display: flex;\n  gap: 10px;\n  align-items: center;\n}\n.taskRight {\n  display: flex;\n}\n.taskRight > #down.active {\n  display: none;\n}\n.taskRight > #up {\n  display: none;\n}\n.taskRight > #up.active {\n  display: block;\n}\n/*figure out how to add animation dropdown here*/\n.task-hidden.active {\n  display: block;\n}\n.task-hidden {\n  display: none;\n  transition: 0.5s ease-in-out;\n}\n.taskHiddenTop {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-right: 20px;\n  height: 25px;\n  border-bottom: 1px solid var(--accentDark);\n}\n.description {\n  margin-top: 5px;\n}\ninput[type=\"checkbox\"] {\n  appearance: none;\n  background-color: inherit;\n  margin: 0;\n  font: inherit;\n  color: currentColor;\n  width: 1.15em;\n  height: 1.15em;\n  border: 0.15em solid currentColor;\n  border-radius: 50%;\n  display: grid;\n  place-content: center;\n}\ninput[type=\"checkbox\"]::before {\n  content: \"\";\n  width: 0.65em;\n  height: 0.65em;\n  transform: scale(0);\n  transition: 120ms transform ease-in-out;\n  box-shadow: inset 1em 1em red;\n  transform-origin: bottom left;\n  clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);\n}\n\ninput[type=\"checkbox\"]:checked::before {\n  transform: scale(1);\n}\n.overlay.active {\n  display: block;\n}\n.overlay {\n  display: none;\n  width: 100%; /* Full width */\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  background-color: rgba(9, 13, 14, 0.8);\n  align-content: center;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,uBAAuB;EACvB,eAAe;;EAEf,mBAAmB;EACnB,mBAAmB;EACnB,mBAAmB;EACnB,uBAAuB;EACvB,oBAAoB;EACpB,iBAAiB;EACjB,qBAAqB;AACvB;AACA;EACE,kEAAkE;AACpE;AACA,qCAAqC;AACrC;EACE,mBAAmB;EACnB,mBAAmB;EACnB,mBAAmB;EACnB,uBAAuB;EACvB,oBAAoB;EACpB,qBAAqB;AACvB;AACA;EACE,iCAAiC;EACjC,aAAa;EACb,uBAAuB;AACzB;AACA;EACE,aAAa;EACb,2BAA2B;EAC3B,8BAA8B;EAC9B,gBAAgB;EAChB,iBAAiB;AACnB;AACA;EACE,iBAAiB;EACjB,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,0BAA0B;EAC1B,iCAAiC;AACnC;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,SAAS;EACT,eAAe;EACf,gBAAgB;AAClB;AACA;EACE,eAAe;AACjB;AACA;EACE,cAAc;EACd,iCAAiC;EACjC,aAAa;EACb,4BAA4B;EAC5B,kBAAkB;EAClB,iBAAiB;EACjB,SAAS;AACX;AACA;EACE,YAAY;EACZ,cAAc;EACd,yBAAyB;EACzB,eAAe;EACf,gBAAgB;AAClB;AACA;EACE,iCAAiC;AACnC;AACA;EACE,aAAa;EACb,SAAS;AACX;AACA;;EAEE,eAAe;EACf,iCAAiC;EACjC,aAAa;EACb,iCAAiC;EACjC,SAAS;EACT,mBAAmB;EACnB,oBAAoB;EACpB,mBAAmB;EACnB,YAAY;AACd;AACA;EACE,qCAAqC;AACvC;AACA;EACE,iBAAiB;EACjB,mBAAmB;EACnB,aAAa;AACf;AACA;EACE,cAAc;AAChB;AACA;EACE,aAAa;EACb,SAAS;EACT,2BAA2B;AAC7B;AACA;EACE,eAAe;EACf,yCAAyC;EACzC,mBAAmB;AACrB;AACA;EACE,UAAU;EACV,WAAW;AACb;AACA;EACE,aAAa;AACf;AACA;EACE,cAAc;AAChB;;AAEA;EACE,YAAY;EACZ,cAAc;EACd,aAAa;EACb,YAAY,EAAE,+CAA+C;AAC/D;AACA;;EAEE,UAAU;EACV,gBAAgB;EAChB,UAAU;EACV,iCAAiC;EACjC,6BAA6B;AAC/B;AACA;EACE,aAAa;EACb,gBAAgB;AAClB;AACA;;EAEE,iBAAiB;EACjB,mBAAmB;EACnB,mCAAmC;EACnC,uBAAuB;EACvB,kBAAkB;EAClB,iBAAiB;AACnB;AACA;;EAEE,yBAAyB;EACzB,yBAAyB;AAC3B;AACA;EACE,aAAa;EACb,2BAA2B;EAC3B,aAAa;EACb,SAAS;EACT,qBAAqB;AACvB;AACA;EACE,aAAa;EACb,UAAU;EACV,eAAe;EACf,kBAAkB;EAClB,oBAAoB;EACpB,aAAa;EACb,mBAAmB;EACnB,mCAAmC;EACnC,mBAAmB;AACrB;;AAEA;EACE,iCAAiC;AACnC;AACA;EACE,qBAAqB;EACrB,UAAU;EACV,oBAAoB;AACtB;AACA;EACE,cAAc;AAChB;AACA;EACE,aAAa;AACf;AACA;EACE,cAAc;EACd,gCAAgC;EAChC,eAAe;EACf,QAAQ;EACR,SAAS;EACT,UAAU;EACV,4BAA4B;AAC9B;AACA;EACE,iCAAiC;EACjC,aAAa;EACb,2BAA2B;EAC3B,SAAS;EACT,oBAAoB;EACpB,uBAAuB;EACvB,eAAe;EACf,kBAAkB;EAClB,aAAa;EACb,mBAAmB;AACrB;AACA;EACE,SAAS;AACX;AACA;EACE,aAAa;EACb,2BAA2B;AAC7B;AACA;EACE,UAAU;AACZ;AACA;EACE,aAAa;EACb,kCAAkC;EAClC,mBAAmB;EACnB,kBAAkB;EAClB,QAAQ;AACV;AACA;EACE,eAAe;AACjB;AACA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;AACrB;AACA;EACE,aAAa;EACb,SAAS;EACT,mBAAmB;AACrB;AACA;EACE,aAAa;AACf;AACA;EACE,aAAa;AACf;AACA;EACE,aAAa;AACf;AACA;EACE,cAAc;AAChB;AACA,gDAAgD;AAChD;EACE,cAAc;AAChB;AACA;EACE,aAAa;EACb,4BAA4B;AAC9B;AACA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,mBAAmB;EACnB,YAAY;EACZ,0CAA0C;AAC5C;AACA;EACE,eAAe;AACjB;AACA;EACE,gBAAgB;EAChB,yBAAyB;EACzB,SAAS;EACT,aAAa;EACb,mBAAmB;EACnB,aAAa;EACb,cAAc;EACd,iCAAiC;EACjC,kBAAkB;EAClB,aAAa;EACb,qBAAqB;AACvB;AACA;EACE,WAAW;EACX,aAAa;EACb,cAAc;EACd,mBAAmB;EACnB,uCAAuC;EACvC,6BAA6B;EAC7B,6BAA6B;EAC7B,uEAAuE;AACzE;;AAEA;EACE,mBAAmB;AACrB;AACA;EACE,cAAc;AAChB;AACA;EACE,aAAa;EACb,WAAW,EAAE,eAAe;EAC5B,YAAY;EACZ,kBAAkB;EAClB,MAAM;EACN,OAAO;EACP,sCAAsC;EACtC,qBAAqB;AACvB","sourcesContent":[":root {\n  font-family: sans-serif;\n  font-size: 16px;\n\n  --bgColor1: #15202b;\n  --bgColor2: #192734;\n  --bgColor3: #22303c;\n  --bgColorPopUp: #273746;\n  --textColor: #eaebec;\n  --accent: #2abd67;\n  --accentDark: #1f8d4d;\n}\n.material-symbols-outlined {\n  font-variation-settings: \"FILL\" 0, \"wght\" 400, \"GRAD\" 0, \"opsz\" 48;\n}\n/* css when light mode is turned on */\nbody.light {\n  --bgColor2: #ececec;\n  --bgColor3: #f2f3f5;\n  --bgColor1: #fefcfe;\n  --bgColorPopUp: #f3f1f3;\n  --textColor: #374958;\n  --accentDark: #aeedc8;\n}\nbody {\n  background-color: var(--bgColor1);\n  height: 100vh;\n  color: var(--textColor);\n}\n.container {\n  display: grid;\n  grid-template-rows: 1fr 5fr;\n  grid-template-columns: 1fr 5fr;\n  min-width: 100vw;\n  min-height: 100vh;\n}\n.header {\n  grid-column: 1/-1;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0px 60px 0px 60px;\n  background-color: var(--bgColor2);\n}\n.logo {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 40px;\n  font-weight: 900;\n}\n#logo {\n  font-size: 40px;\n}\n.sidebar {\n  grid-row: 2/-1;\n  background-color: var(--bgColor3);\n  display: grid;\n  grid-template-rows: auto 1fr;\n  padding-left: 10px;\n  padding-top: 20px;\n  gap: 20px;\n}\nbutton {\n  border: none;\n  color: inherit;\n  background-color: inherit;\n  cursor: pointer;\n  outline: inherit;\n}\nbutton:hover {\n  background-color: var(--bgColor1);\n}\n.sideTop {\n  display: grid;\n  gap: 20px;\n}\n.sideItem,\n.addTask {\n  font-size: 15px;\n  background-color: var(--bgColor3);\n  display: grid;\n  grid-template-columns: 50px 100px;\n  gap: 15px;\n  align-items: center;\n  justify-items: start;\n  border-radius: 20px;\n  height: 35px;\n}\n.projectContainer > *.sideItem {\n  grid-template-columns: 50px 100px 1fr;\n}\n.projectContainer > .sideItem > span:last-child {\n  justify-self: end;\n  padding-right: 20px;\n  display: none;\n}\n.projectContainer > .sideItem:hover span#close {\n  display: block;\n}\n.sideBottom {\n  display: grid;\n  gap: 10px;\n  grid-auto-rows: max-content;\n}\n.sideBottom > .big {\n  font-size: 20px;\n  border-bottom: 2px solid var(--textColor);\n  padding-bottom: 3px;\n}\n.sideBottom > .projectContainer > .sideItem {\n  padding: 0;\n  width: 100%;\n}\n.project-modal {\n  display: none;\n}\n.project-modal.active {\n  display: block;\n}\n\ntextarea {\n  border: none;\n  overflow: auto;\n  outline: none;\n  resize: none; /*remove the resize handle on the bottom right*/\n}\n.input > input,\n.input > textarea {\n  all: unset;\n  min-height: 25px;\n  width: 96%;\n  background-color: var(--bgColor2);\n  border-bottom: 1px solid gray;\n}\n.buttons {\n  display: flex;\n  padding-top: 5px;\n}\n.buttons > button,\n#submit {\n  padding: 5px 15px;\n  border-radius: 20px;\n  background-color: var(--accentDark);\n  color: var(--textColor);\n  font-size: inherit;\n  font-weight: bold;\n}\n.buttons > #cancel,\n#cancel2 {\n  border: 1px solid #ee6d6d;\n  background-color: #ec4141;\n}\n.content {\n  display: grid;\n  grid-auto-rows: max-content;\n  padding: 20px;\n  gap: 20px;\n  justify-items: center;\n}\n.content > .Title {\n  height: 150px;\n  width: 90%;\n  font-size: 40px;\n  padding-left: 20px;\n  justify-self: center;\n  display: flex;\n  align-items: center;\n  background-color: var(--accentDark);\n  border-radius: 30px;\n}\n\nbutton.addTask:hover {\n  background-color: var(--bgColor2);\n}\n.content > .addTask {\n  justify-items: center;\n  width: 80%;\n  justify-self: center;\n}\n.taskModal.active {\n  display: block;\n}\n.taskModal {\n  display: none;\n}\n.taskModal.modal {\n  display: block;\n  transform: translate(-50%, -50%);\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  z-index: 2;\n  transition: 0.2s ease-in-out;\n}\n.modal-container {\n  background-color: var(--bgColor3);\n  display: grid;\n  grid-auto-rows: max-content;\n  gap: 20px;\n  justify-items: start;\n  justify-content: center;\n  font-size: 20px;\n  width: fit-content;\n  padding: 20px;\n  border-radius: 20px;\n}\n.modal-container > .buttons {\n  gap: 15px;\n}\n.input {\n  display: grid;\n  grid-auto-rows: max-content;\n}\n.taskContainer {\n  width: 70%;\n}\n.task {\n  display: grid;\n  border: 1px solid var(--textColor);\n  border-radius: 15px;\n  padding: 10px 20px;\n  gap: 5px;\n}\n.task span {\n  cursor: pointer;\n}\n.task-shown {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.taskLeft {\n  display: flex;\n  gap: 10px;\n  align-items: center;\n}\n.taskRight {\n  display: flex;\n}\n.taskRight > #down.active {\n  display: none;\n}\n.taskRight > #up {\n  display: none;\n}\n.taskRight > #up.active {\n  display: block;\n}\n/*figure out how to add animation dropdown here*/\n.task-hidden.active {\n  display: block;\n}\n.task-hidden {\n  display: none;\n  transition: 0.5s ease-in-out;\n}\n.taskHiddenTop {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-right: 20px;\n  height: 25px;\n  border-bottom: 1px solid var(--accentDark);\n}\n.description {\n  margin-top: 5px;\n}\ninput[type=\"checkbox\"] {\n  appearance: none;\n  background-color: inherit;\n  margin: 0;\n  font: inherit;\n  color: currentColor;\n  width: 1.15em;\n  height: 1.15em;\n  border: 0.15em solid currentColor;\n  border-radius: 50%;\n  display: grid;\n  place-content: center;\n}\ninput[type=\"checkbox\"]::before {\n  content: \"\";\n  width: 0.65em;\n  height: 0.65em;\n  transform: scale(0);\n  transition: 120ms transform ease-in-out;\n  box-shadow: inset 1em 1em red;\n  transform-origin: bottom left;\n  clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);\n}\n\ninput[type=\"checkbox\"]:checked::before {\n  transform: scale(1);\n}\n.overlay.active {\n  display: block;\n}\n.overlay {\n  display: none;\n  width: 100%; /* Full width */\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  background-color: rgba(9, 13, 14, 0.8);\n  align-content: center;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/defaultOptions/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getDefaultOptions": () => (/* binding */ getDefaultOptions),
/* harmony export */   "setDefaultOptions": () => (/* binding */ setDefaultOptions)
/* harmony export */ });
var defaultOptions = {};
function getDefaultOptions() {
  return defaultOptions;
}
function setDefaultOptions(newOptions) {
  defaultOptions = newOptions;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/toInteger/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/toInteger/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toInteger)
/* harmony export */ });
function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }

  var number = Number(dirtyNumber);

  if (isNaN(number)) {
    return number;
  }

  return number < 0 ? Math.ceil(number) : Math.floor(number);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/addDays/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/addDays/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addDays)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name addDays
 * @category Day Helpers
 * @summary Add the specified number of days to the given date.
 *
 * @description
 * Add the specified number of days to the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of days to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} - the new date with the days added
 * @throws {TypeError} - 2 arguments required
 *
 * @example
 * // Add 10 days to 1 September 2014:
 * const result = addDays(new Date(2014, 8, 1), 10)
 * //=> Thu Sep 11 2014 00:00:00
 */

function addDays(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyAmount);

  if (isNaN(amount)) {
    return new Date(NaN);
  }

  if (!amount) {
    // If 0 days, no-op to avoid changing times in the hour before end of DST
    return date;
  }

  date.setDate(date.getDate() + amount);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isSameDay/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/isSameDay/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isSameDay)
/* harmony export */ });
/* harmony import */ var _startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfDay/index.js */ "./node_modules/date-fns/esm/startOfDay/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isSameDay
 * @category Day Helpers
 * @summary Are the given dates in the same day (and year and month)?
 *
 * @description
 * Are the given dates in the same day (and year and month)?
 *
 * @param {Date|Number} dateLeft - the first date to check
 * @param {Date|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same day (and year and month)
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Are 4 September 06:00:00 and 4 September 18:00:00 in the same day?
 * const result = isSameDay(new Date(2014, 8, 4, 6, 0), new Date(2014, 8, 4, 18, 0))
 * //=> true
 *
 * @example
 * // Are 4 September and 4 October in the same day?
 * const result = isSameDay(new Date(2014, 8, 4), new Date(2014, 9, 4))
 * //=> false
 *
 * @example
 * // Are 4 September, 2014 and 4 September, 2015 in the same day?
 * const result = isSameDay(new Date(2014, 8, 4), new Date(2015, 8, 4))
 * //=> false
 */

function isSameDay(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeftStartOfDay = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);
  var dateRightStartOfDay = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);
  return dateLeftStartOfDay.getTime() === dateRightStartOfDay.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isSameWeek/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/isSameWeek/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isSameWeek)
/* harmony export */ });
/* harmony import */ var _startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfWeek/index.js */ "./node_modules/date-fns/esm/startOfWeek/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name isSameWeek
 * @category Week Helpers
 * @summary Are the given dates in the same week (and month and year)?
 *
 * @description
 * Are the given dates in the same week (and month and year)?
 *
 * @param {Date|Number} dateLeft - the first date to check
 * @param {Date|Number} dateRight - the second date to check
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Boolean} the dates are in the same week (and month and year)
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // Are 31 August 2014 and 4 September 2014 in the same week?
 * const result = isSameWeek(new Date(2014, 7, 31), new Date(2014, 8, 4))
 * //=> true
 *
 * @example
 * // If week starts with Monday,
 * // are 31 August 2014 and 4 September 2014 in the same week?
 * const result = isSameWeek(new Date(2014, 7, 31), new Date(2014, 8, 4), {
 *   weekStartsOn: 1
 * })
 * //=> false
 *
 * @example
 * // Are 1 January 2014 and 1 January 2015 in the same week?
 * const result = isSameWeek(new Date(2014, 0, 1), new Date(2015, 0, 1))
 * //=> false
 */
function isSameWeek(dirtyDateLeft, dirtyDateRight, options) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeftStartOfWeek = (0,_startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft, options);
  var dateRightStartOfWeek = (0,_startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight, options);
  return dateLeftStartOfWeek.getTime() === dateRightStartOfWeek.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isThisWeek/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/isThisWeek/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isThisWeek)
/* harmony export */ });
/* harmony import */ var _isSameWeek_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isSameWeek/index.js */ "./node_modules/date-fns/esm/isSameWeek/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name isThisWeek
 * @category Week Helpers
 * @summary Is the given date in the same week as the current date?
 * @pure false
 *
 * @description
 * Is the given date in the same week as the current date?
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * @param {Date|Number} date - the date to check
 * @param {Object} [options] - the object with options
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Boolean} the date is in this week
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // If today is 25 September 2014, is 21 September 2014 in this week?
 * const result = isThisWeek(new Date(2014, 8, 21))
 * //=> true
 *
 * @example
 * // If today is 25 September 2014 and week starts with Monday
 * // is 21 September 2014 in this week?
 * const result = isThisWeek(new Date(2014, 8, 21), { weekStartsOn: 1 })
 * //=> false
 */
function isThisWeek(dirtyDate, options) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  return (0,_isSameWeek_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate, Date.now(), options);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isToday/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/isToday/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isToday)
/* harmony export */ });
/* harmony import */ var _isSameDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isSameDay/index.js */ "./node_modules/date-fns/esm/isSameDay/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isToday
 * @category Day Helpers
 * @summary Is the given date today?
 * @pure false
 *
 * @description
 * Is the given date today?
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date is today
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // If today is 6 October 2014, is 6 October 14:00:00 today?
 * const result = isToday(new Date(2014, 9, 6, 14, 0))
 * //=> true
 */

function isToday(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  return (0,_isSameDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate, Date.now());
}

/***/ }),

/***/ "./node_modules/date-fns/esm/startOfDay/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfDay/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfDay)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name startOfDay
 * @category Day Helpers
 * @summary Return the start of a day for the given date.
 *
 * @description
 * Return the start of a day for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of a day
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of a day for 2 September 2014 11:55:00:
 * const result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 00:00:00
 */

function startOfDay(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/startOfWeek/index.js":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfWeek/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js");




/**
 * @name startOfWeek
 * @category Week Helpers
 * @summary Return the start of a week for the given date.
 *
 * @description
 * Return the start of a week for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Date} the start of a week
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // The start of a week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sun Aug 31 2014 00:00:00
 *
 * @example
 * // If the week starts on Monday, the start of the week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0), { weekStartsOn: 1 })
 * //=> Mon Sep 01 2014 00:00:00
 */

function startOfWeek(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$weekStartsOn, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;

  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var defaultOptions = (0,_lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();
  var weekStartsOn = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])((_ref = (_ref2 = (_ref3 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.weekStartsOn) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.weekStartsOn) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.weekStartsOn) !== null && _ref !== void 0 ? _ref : 0); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(dirtyDate);
  var day = date.getDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setDate(date.getDate() - diff);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/subDays/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/subDays/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ subDays)
/* harmony export */ });
/* harmony import */ var _addDays_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../addDays/index.js */ "./node_modules/date-fns/esm/addDays/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");



/**
 * @name subDays
 * @category Day Helpers
 * @summary Subtract the specified number of days from the given date.
 *
 * @description
 * Subtract the specified number of days from the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of days to be subtracted. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the days subtracted
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Subtract 10 days from 1 September 2014:
 * const result = subDays(new Date(2014, 8, 1), 10)
 * //=> Fri Aug 22 2014 00:00:00
 */

function subDays(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyAmount);
  return (0,_addDays_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate, -amount);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }


/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */

function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var argStr = Object.prototype.toString.call(argument); // Clone the date

  if (argument instanceof Date || _typeof(argument) === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"); // eslint-disable-next-line no-console

      console.warn(new Error().stack);
    }

    return new Date(NaN);
  }
}

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/modules/UI.js":
/*!***************************!*\
  !*** ./src/modules/UI.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/modules/project.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task */ "./src/modules/task.js");
/* harmony import */ var _projectList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectList */ "./src/modules/projectList.js");
/* harmony import */ var _projectModalUI__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projectModalUI */ "./src/modules/projectModalUI.js");
/* harmony import */ var _taskUI__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./taskUI */ "./src/modules/taskUI.js");






const UI = (() => {
  function initialUI() {
    initializeEventListeners();
    const projectTitle = document.querySelector(".Title");
    const name = projectTitle.innerText;
    const project = _projectList__WEBPACK_IMPORTED_MODULE_2__["default"].getProject(name);
    (0,_taskUI__WEBPACK_IMPORTED_MODULE_4__.displayTaskList)(project.getTasks());
  }
  // main control structure here
  function initializeEventListeners() {
    const mode = document.querySelector(".mode");
    const addProject = document.querySelector("#addProject");
    const addTask = document.querySelector(".addTask");
    const Inbox = document.querySelector('[data-title="Inbox"]');
    const Today = document.querySelector('[data-title= "Today"]');
    const thisWeek = document.querySelector('[data-title= "This-Week"]');
    Inbox.addEventListener("click", _projectModalUI__WEBPACK_IMPORTED_MODULE_3__.goToProject);
    Today.addEventListener("click", _projectModalUI__WEBPACK_IMPORTED_MODULE_3__.goToProject);
    thisWeek.addEventListener("click", _projectModalUI__WEBPACK_IMPORTED_MODULE_3__.goToProject);
    mode.addEventListener("click", ()=>{
      document.body.classList.toggle('light');
    });
    addProject.addEventListener("click", _projectModalUI__WEBPACK_IMPORTED_MODULE_3__.dpm);
    addTask.addEventListener("click", _taskUI__WEBPACK_IMPORTED_MODULE_4__.dtm);
    // projectTitle.addEventListener('click', )
  }
  
  function clear(document) {}
  function foo() {
    console.log("bob");
  }
  return {
    initialUI,
  };
})();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UI);


/***/ }),

/***/ "./src/modules/project.js":
/*!********************************!*\
  !*** ./src/modules/project.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isToday/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isThisWeek/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/subDays/index.js");


class project {
  constructor(name) {
    this.name = name;
    this.tasks = [];
  }

  getName() {
    return this.name;
  }

  setName(name) {
    this.name = name;
  }

  getTasks() {
    return this.tasks;
  }

  getTask(name){
    return this.tasks.find((t)=>t.getName() === name);
  }
  
  contains(task) {
    return this.tasks.some((t) => task.getName() === t.getName());
  }

  addTask(task) {
    if (this.contains(task)) {
      alert("put different title for task");
      return false;
    }
    this.tasks.push(task);
    return true;
  }

  removeTask(task) {
    this.tasks = this.tasks.filter((t) => t.getName() !== task.getName());
  }

  getTasksToday() {
    return this.tasks.filter((task) => {
      const taskDate = new Date(task.getDateFormatted());
      return (0,date_fns__WEBPACK_IMPORTED_MODULE_0__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_1__["default"])(taskDate));
    });
  }

  getTasksThisWeek() {
    return this.tasks.filter((task) => {
      const taskDate = new Date(task.getDateFormatted());
      return (0,date_fns__WEBPACK_IMPORTED_MODULE_2__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_3__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_1__["default"])(taskDate), 1));
    });
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (project);


/***/ }),

/***/ "./src/modules/projectList.js":
/*!************************************!*\
  !*** ./src/modules/projectList.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/modules/project.js");



const projectList = (() => {
  let projects = [];
  projects.push(new _project__WEBPACK_IMPORTED_MODULE_0__["default"]("Inbox"));
  projects.push(new _project__WEBPACK_IMPORTED_MODULE_0__["default"]("Today"));
  projects.push(new _project__WEBPACK_IMPORTED_MODULE_0__["default"]("This Week"));
  const getProjects = () => projects;
  const getProject = (projectName) =>
    projects.find((p) => projectName === p.getName());
  const contains = (name) =>
    projects.some((p) => name === p.getName());
  function addProject(newProject) {
    if (contains(newProject.getName())){
      alert('pls put diff title');
      return false;
    }
    projects.push(newProject);
    return true;
  }
  function deleteProject(project) {
    projects = projects.filter(
      (p) => p.getName() !== project.getName()
    );
  }

  return {
    getProject,
    getProjects,
    contains,
    addProject,
    deleteProject,
  };
})();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projectList);


/***/ }),

/***/ "./src/modules/projectModalUI.js":
/*!***************************************!*\
  !*** ./src/modules/projectModalUI.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dpm": () => (/* binding */ displayProjectModal),
/* harmony export */   "goToProject": () => (/* binding */ goToProject)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/modules/project.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task */ "./src/modules/task.js");
/* harmony import */ var _projectList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectList */ "./src/modules/projectList.js");
/* harmony import */ var _taskUI__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./taskUI */ "./src/modules/taskUI.js");





function getProjectFromInput() {
  const title = document.getElementById("title").value.trim();
  const project = new _project__WEBPACK_IMPORTED_MODULE_0__["default"](title);
  return project;
}
function projectModalToggle() {
  const projectModal = document.querySelector(".project-modal");
  projectModal.classList.toggle("active");
}
function goToProject(e) {
  const projectTitle = document.querySelector(".Title");
  let name = e.target.dataset.title;
  console.log(name);
  name = name.replaceAll("-", " ");
  if(!_projectList__WEBPACK_IMPORTED_MODULE_2__["default"].contains(name)){
    return;
  }
  const project = _projectList__WEBPACK_IMPORTED_MODULE_2__["default"].getProject(name);
  projectTitle.textContent = name;
  (0,_taskUI__WEBPACK_IMPORTED_MODULE_3__.displayTaskList)(project.getTasks());
}
function goToInbox() {
  const projectTitle = document.querySelector(".Title");
  const project = _projectList__WEBPACK_IMPORTED_MODULE_2__["default"].getProject('Inbox');
  projectTitle.textContent = project.getName();
  (0,_taskUI__WEBPACK_IMPORTED_MODULE_3__.displayTaskList)(project.getTasks());
}
function removeProject(e){
  let name = e.target.dataset.title;
  name = name.replaceAll("-", " ");
  const project = _projectList__WEBPACK_IMPORTED_MODULE_2__["default"].getProject(name);
  _projectList__WEBPACK_IMPORTED_MODULE_2__["default"].deleteProject(project);
  displayProjectList();
  goToInbox();
}
function displayProject(project) {
  const projectContainer = document.querySelector(".projectContainer");
  let name = project.getName();
  if (name === "Inbox" || name === "Today" || name === "This Week") {
    return;
  }
  // had to do this because querySelector wouldn't work
  if (name.indexOf(" ") >= 0) {
    name = name.replaceAll(/\s/g, "-").trim();
  }
  const button = document.createElement("button");
  button.classList.add("sideItem");
  button.setAttribute("data-title", name);
  const icon = document.createElement("span");
  icon.classList.add("material-symbols-outlined");
  icon.textContent = "list";
  const projectName = document.createElement("div");
  projectName.classList.add("project");
  projectName.setAttribute("data-title", name);
  projectName.textContent = name.replace(/-/g, " ");
  const close = document.createElement("span");
  close.classList.add("material-symbols-outlined");
  close.setAttribute("id", "close");
  close.setAttribute("data-title", name);
  close.textContent = "close";
  button.appendChild(icon);
  button.appendChild(projectName);
  button.appendChild(close);
  close.addEventListener('click', removeProject);
  button.addEventListener("click", goToProject);
  projectContainer.appendChild(button);
}
function displayProjectList() {
  const projectContainer = document.querySelector(".projectContainer");
  projectContainer.innerHTML = "";
  _projectList__WEBPACK_IMPORTED_MODULE_2__["default"].getProjects().forEach((project) => displayProject(project));
}

function submitProject(e) {
  e.preventDefault();
  const project = getProjectFromInput();
  projectModalToggle();
  if (_projectList__WEBPACK_IMPORTED_MODULE_2__["default"].addProject(project)) {
    displayProjectList();
  }
}
function displayProjectModal() {
  projectModalToggle();
  const projectModal = document.querySelector(".project-modal");
  const projectCancel = document.querySelector("#cancel");
  projectCancel.onclick = () => projectModalToggle();
  projectModal.onsubmit = submitProject;
  // remember that onsubmit is used for form not button
}



/***/ }),

/***/ "./src/modules/task.js":
/*!*****************************!*\
  !*** ./src/modules/task.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ task)
/* harmony export */ });
class task {
  constructor(name, dueDate = "No date", description = "") {
    this.name = name;
    this.dueDate = dueDate;
    this.description = description;
  }

  setName(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  setDate(dueDate) {
    this.dueDate = dueDate;
  }

  getDate() {
    return this.dueDate;
  }

  getDateFormatted() {
    const day = this.dueDate.split("/")[0];
    const month = this.dueDate.split("/")[1];
    const year = this.dueDate.split("/")[2];
    return `${month}/${day}/${year}`;
  }

  getDescription(){
    return this.description;
  }

  setDescription(description){
    this.description = description;
  }
}
// const getDescription = () => description;
// const getPriority = () => priority;
// const getIsDone = () => isDone;
// function setDescription(description){this.description = description}
// const toggleDone = () => {
//     this.isDone = !isDone;
// }
// getDescription,getPriority, getIsDone,setDescription,toggleDone,


/***/ }),

/***/ "./src/modules/taskUI.js":
/*!*******************************!*\
  !*** ./src/modules/taskUI.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayTaskList": () => (/* binding */ displayTaskList),
/* harmony export */   "dtm": () => (/* binding */ dtm)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/modules/project.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task */ "./src/modules/task.js");
/* harmony import */ var _projectList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectList */ "./src/modules/projectList.js");




function getProjectFromTitle() {
  const projectTitle = document.querySelector(".Title");
  const name = projectTitle.innerText;
  const project = _projectList__WEBPACK_IMPORTED_MODULE_2__["default"].getProject(name);
  return project;
}
function taskModalToggle() {
  const taskModal = document.querySelector(".taskModal");
  taskModal.classList.toggle("active");
}
function getTaskFromInput() {
  const title = document.getElementById("title2").value.trim();
  const description = document.getElementById("description").value;
  const date = document.getElementById("date").value;
  const task = new _task__WEBPACK_IMPORTED_MODULE_1__["default"](title, date, description);
  console.log(task);
  return task;
}
function removeTask(e) {
  const { name } = e.target.dataset;
  const project = getProjectFromTitle();
  const task = project.getTask(name);
  project.removeTask(task);
  displayTaskList(project.getTasks());
}

function editTask(e) {
  const {name} = e.target.dataset;
  const project = getProjectFromTitle();
  const task = project.getTask(name);

  const taskModal = document.querySelector(".taskModal");
  taskModal.classList.toggle("modal");
  const overlay = document.querySelector('.overlay');
  overlay.classList.toggle('active');
  const taskCancel = document.querySelector("#cancel2");
  taskCancel.onclick = () => {
    taskModal.classList.toggle("modal");
    overlay.classList.toggle('active');
  }
  taskModal.onsubmit = (event) => {
    event.preventDefault();
    const newTask = getTaskFromInput();
    task.setName(newTask.getName());
    task.setDate(newTask.getDate());
    task.setDescription(newTask.getDescription());
    taskModal.classList.toggle("modal");
    overlay.classList.toggle('active');
    displayTaskList(project.getTasks());
  };
}
function displayTask(task) {
  const taskContainer = document.querySelector(".taskContainer");
  const task2 = document.createElement("div");
  task2.classList.add("task");
  const taskShown = document.createElement("div");
  taskShown.classList.add("task-shown");
  task2.appendChild(taskShown);
  const taskLeft = document.createElement("div");
  taskLeft.classList.add("taskLeft");
  taskShown.appendChild(taskLeft);
  const checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  taskLeft.appendChild(checkbox);
  const title = document.createElement("div");
  title.classList.add("title");
  title.innerText = task.getName();
  taskLeft.appendChild(title);
  const date = document.createElement("div");
  date.classList.add("date");
  date.innerText = task.getDate();
  taskShown.appendChild(date);
  const taskRight = document.createElement("div");
  taskRight.classList.add("taskRight");
  taskShown.appendChild(taskRight);
  // expandMore
  const expandMore = document.createElement("span");
  expandMore.classList.add("material-symbols-outlined");
  expandMore.setAttribute("id", "down");
  expandMore.innerText = "expand_more";
  taskRight.appendChild(expandMore);
  const up = document.createElement("span");
  up.classList.add("material-symbols-outlined");
  up.innerText = "keyboard_arrow_up";
  up.setAttribute("id", "up");
  taskRight.appendChild(up);
  // deleteEl
  const deleteEl = document.createElement("span");
  deleteEl.classList.add("material-symbols-outlined");
  deleteEl.setAttribute("data-name", task.getName());
  deleteEl.innerText = "delete";
  taskRight.appendChild(deleteEl);
  const taskHidden = document.createElement("div");
  taskHidden.classList.add("task-hidden");
  task2.appendChild(taskHidden);
  const taskHiddenTop = document.createElement("div");
  taskHiddenTop.classList.add("taskHiddenTop");
  taskHidden.appendChild(taskHiddenTop);
  const descriptionTitle = document.createElement("h4");
  descriptionTitle.innerText = "Description:";
  taskHiddenTop.appendChild(descriptionTitle);
  // edit
  const edit = document.createElement("span");
  edit.classList.add("material-symbols-outlined");
  edit.setAttribute("data-name", task.getName());
  edit.innerText = "edit";
  taskHiddenTop.appendChild(edit);
  const description = document.createElement("div");
  description.classList.add("description");
  description.innerText = task.getDescription();
  taskHidden.appendChild(description);
  expandMore.addEventListener("click", () => {
    taskHidden.classList.add("active");
    expandMore.classList.add("active");
    up.classList.add("active");
  });
  up.addEventListener("click", () => {
    expandMore.classList.remove("active");
    taskHidden.classList.remove("active");
    up.classList.remove("active");
  });
  deleteEl.addEventListener("click", removeTask);
  edit.addEventListener("click", editTask);
  taskContainer.appendChild(task2);
}
function displayTaskList(tasks) {
  const taskContainer = document.querySelector(".taskContainer");
  taskContainer.innerHTML = "";
  tasks.forEach((task) => displayTask(task));
}
function submitTask(e) {
  e.preventDefault();
  const project = getProjectFromTitle();
  const task = getTaskFromInput();
  taskModalToggle();
  if (project.addTask(task)) {
    console.log(project.getTasks());
    displayTaskList(project.getTasks());
  }
}
function dtm() {
  taskModalToggle();
  const taskModal = document.querySelector(".taskModal");
  const taskCancel = document.querySelector("#cancel2");
  taskCancel.onclick = () => taskModalToggle();
  taskModal.onsubmit = submitTask;
}




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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _modules_project_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/project.js */ "./src/modules/project.js");
/* harmony import */ var _modules_task_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/task.js */ "./src/modules/task.js");
/* harmony import */ var _modules_projectList_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/projectList.js */ "./src/modules/projectList.js");
/* harmony import */ var _modules_UI_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/UI.js */ "./src/modules/UI.js");






// -import {toDo} from './objects.js';
console.log(_modules_projectList_js__WEBPACK_IMPORTED_MODULE_3__["default"]);
const task1 = new _modules_task_js__WEBPACK_IMPORTED_MODULE_2__["default"]('bob', '2/4/22');
const project = _modules_projectList_js__WEBPACK_IMPORTED_MODULE_3__["default"].getProject('Inbox');
project.addTask(task1);
console.log(_modules_UI_js__WEBPACK_IMPORTED_MODULE_4__["default"]);
_modules_UI_js__WEBPACK_IMPORTED_MODULE_4__["default"].initialUI();
// const task1 = new Task('bob', '2/4/22');
// console.log(task1.setName('hdidd'));
// console.log({task1});
// console.log(task1.getName());
// console.log(task1.getDate());
// const project1 = new Project('bob');
// project1.addTask(task1);
// console.log(project1.getTasks());
// project1.removeTask(task1);
// console.log(project1.getTasks());
// projectList.addProject(project1);
// console.log(projectList.getProjects());

console.log('hidllssdd');

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQ1c7QUFDVztBQUNOO0FBQ2M7QUFDbEI7QUFDakMsWUFBWSxNQUFNO0FBQ2xCLFlBQVksK0RBQVc7QUFDdkIsa0JBQWtCLHdEQUFJO0FBQ3RCLGdCQUFnQiwwRUFBc0I7QUFDdEM7QUFDQSxZQUFZLHNEQUFFO0FBQ2QsZ0VBQVk7QUFDWjtBQUNBO0FBQ0EsZ0JBQWdCLE1BQU07QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9kZWZhdWx0T3B0aW9ucy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi90b0ludGVnZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9hZGREYXlzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNTYW1lRGF5L2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNTYW1lV2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzVGhpc1dlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc1RvZGF5L2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vc3RhcnRPZkRheS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3N0YXJ0T2ZXZWVrL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vc3ViRGF5cy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3RvRGF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9VSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3Byb2plY3RMaXN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3Byb2plY3RNb2RhbFVJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3Rhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvdGFza1VJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcblxcbiAgLS1iZ0NvbG9yMTogIzE1MjAyYjtcXG4gIC0tYmdDb2xvcjI6ICMxOTI3MzQ7XFxuICAtLWJnQ29sb3IzOiAjMjIzMDNjO1xcbiAgLS1iZ0NvbG9yUG9wVXA6ICMyNzM3NDY7XFxuICAtLXRleHRDb2xvcjogI2VhZWJlYztcXG4gIC0tYWNjZW50OiAjMmFiZDY3O1xcbiAgLS1hY2NlbnREYXJrOiAjMWY4ZDRkO1xcbn1cXG4ubWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZCB7XFxuICBmb250LXZhcmlhdGlvbi1zZXR0aW5nczogXFxcIkZJTExcXFwiIDAsIFxcXCJ3Z2h0XFxcIiA0MDAsIFxcXCJHUkFEXFxcIiAwLCBcXFwib3BzelxcXCIgNDg7XFxufVxcbi8qIGNzcyB3aGVuIGxpZ2h0IG1vZGUgaXMgdHVybmVkIG9uICovXFxuYm9keS5saWdodCB7XFxuICAtLWJnQ29sb3IyOiAjZWNlY2VjO1xcbiAgLS1iZ0NvbG9yMzogI2YyZjNmNTtcXG4gIC0tYmdDb2xvcjE6ICNmZWZjZmU7XFxuICAtLWJnQ29sb3JQb3BVcDogI2YzZjFmMztcXG4gIC0tdGV4dENvbG9yOiAjMzc0OTU4O1xcbiAgLS1hY2NlbnREYXJrOiAjYWVlZGM4O1xcbn1cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnQ29sb3IxKTtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBjb2xvcjogdmFyKC0tdGV4dENvbG9yKTtcXG59XFxuLmNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgNWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNWZyO1xcbiAgbWluLXdpZHRoOiAxMDB2dztcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbn1cXG4uaGVhZGVyIHtcXG4gIGdyaWQtY29sdW1uOiAxLy0xO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAwcHggNjBweCAwcHggNjBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnQ29sb3IyKTtcXG59XFxuLmxvZ28ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDEwcHg7XFxuICBmb250LXNpemU6IDQwcHg7XFxuICBmb250LXdlaWdodDogOTAwO1xcbn1cXG4jbG9nbyB7XFxuICBmb250LXNpemU6IDQwcHg7XFxufVxcbi5zaWRlYmFyIHtcXG4gIGdyaWQtcm93OiAyLy0xO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmdDb2xvcjMpO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnI7XFxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuICBwYWRkaW5nLXRvcDogMjBweDtcXG4gIGdhcDogMjBweDtcXG59XFxuYnV0dG9uIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG91dGxpbmU6IGluaGVyaXQ7XFxufVxcbmJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZ0NvbG9yMSk7XFxufVxcbi5zaWRlVG9wIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBnYXA6IDIwcHg7XFxufVxcbi5zaWRlSXRlbSxcXG4uYWRkVGFzayB7XFxuICBmb250LXNpemU6IDE1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZ0NvbG9yMyk7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1MHB4IDEwMHB4O1xcbiAgZ2FwOiAxNXB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktaXRlbXM6IHN0YXJ0O1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gIGhlaWdodDogMzVweDtcXG59XFxuLnByb2plY3RDb250YWluZXIgPiAqLnNpZGVJdGVtIHtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNTBweCAxMDBweCAxZnI7XFxufVxcbi5wcm9qZWN0Q29udGFpbmVyID4gLnNpZGVJdGVtID4gc3BhbjpsYXN0LWNoaWxkIHtcXG4gIGp1c3RpZnktc2VsZjogZW5kO1xcbiAgcGFkZGluZy1yaWdodDogMjBweDtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5wcm9qZWN0Q29udGFpbmVyID4gLnNpZGVJdGVtOmhvdmVyIHNwYW4jY2xvc2Uge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcbi5zaWRlQm90dG9tIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBnYXA6IDEwcHg7XFxuICBncmlkLWF1dG8tcm93czogbWF4LWNvbnRlbnQ7XFxufVxcbi5zaWRlQm90dG9tID4gLmJpZyB7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tdGV4dENvbG9yKTtcXG4gIHBhZGRpbmctYm90dG9tOiAzcHg7XFxufVxcbi5zaWRlQm90dG9tID4gLnByb2plY3RDb250YWluZXIgPiAuc2lkZUl0ZW0ge1xcbiAgcGFkZGluZzogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4ucHJvamVjdC1tb2RhbCB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4ucHJvamVjdC1tb2RhbC5hY3RpdmUge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbnRleHRhcmVhIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIHJlc2l6ZTogbm9uZTsgLypyZW1vdmUgdGhlIHJlc2l6ZSBoYW5kbGUgb24gdGhlIGJvdHRvbSByaWdodCovXFxufVxcbi5pbnB1dCA+IGlucHV0LFxcbi5pbnB1dCA+IHRleHRhcmVhIHtcXG4gIGFsbDogdW5zZXQ7XFxuICBtaW4taGVpZ2h0OiAyNXB4O1xcbiAgd2lkdGg6IDk2JTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnQ29sb3IyKTtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBncmF5O1xcbn1cXG4uYnV0dG9ucyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcGFkZGluZy10b3A6IDVweDtcXG59XFxuLmJ1dHRvbnMgPiBidXR0b24sXFxuI3N1Ym1pdCB7XFxuICBwYWRkaW5nOiA1cHggMTVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnREYXJrKTtcXG4gIGNvbG9yOiB2YXIoLS10ZXh0Q29sb3IpO1xcbiAgZm9udC1zaXplOiBpbmhlcml0O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcbi5idXR0b25zID4gI2NhbmNlbCxcXG4jY2FuY2VsMiB7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZWU2ZDZkO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VjNDE0MTtcXG59XFxuLmNvbnRlbnQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtYXV0by1yb3dzOiBtYXgtY29udGVudDtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBnYXA6IDIwcHg7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5jb250ZW50ID4gLlRpdGxlIHtcXG4gIGhlaWdodDogMTUwcHg7XFxuICB3aWR0aDogOTAlO1xcbiAgZm9udC1zaXplOiA0MHB4O1xcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudERhcmspO1xcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcXG59XFxuXFxuYnV0dG9uLmFkZFRhc2s6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmdDb2xvcjIpO1xcbn1cXG4uY29udGVudCA+IC5hZGRUYXNrIHtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiA4MCU7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG59XFxuLnRhc2tNb2RhbC5hY3RpdmUge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcbi50YXNrTW9kYWwge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLnRhc2tNb2RhbC5tb2RhbCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICB6LWluZGV4OiAyO1xcbiAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLWluLW91dDtcXG59XFxuLm1vZGFsLWNvbnRhaW5lciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZ0NvbG9yMyk7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC1hdXRvLXJvd3M6IG1heC1jb250ZW50O1xcbiAgZ2FwOiAyMHB4O1xcbiAganVzdGlmeS1pdGVtczogc3RhcnQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbn1cXG4ubW9kYWwtY29udGFpbmVyID4gLmJ1dHRvbnMge1xcbiAgZ2FwOiAxNXB4O1xcbn1cXG4uaW5wdXQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtYXV0by1yb3dzOiBtYXgtY29udGVudDtcXG59XFxuLnRhc2tDb250YWluZXIge1xcbiAgd2lkdGg6IDcwJTtcXG59XFxuLnRhc2sge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXRleHRDb2xvcik7XFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgcGFkZGluZzogMTBweCAyMHB4O1xcbiAgZ2FwOiA1cHg7XFxufVxcbi50YXNrIHNwYW4ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4udGFzay1zaG93biB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLnRhc2tMZWZ0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDEwcHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4udGFza1JpZ2h0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcbi50YXNrUmlnaHQgPiAjZG93bi5hY3RpdmUge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLnRhc2tSaWdodCA+ICN1cCB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4udGFza1JpZ2h0ID4gI3VwLmFjdGl2ZSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuLypmaWd1cmUgb3V0IGhvdyB0byBhZGQgYW5pbWF0aW9uIGRyb3Bkb3duIGhlcmUqL1xcbi50YXNrLWhpZGRlbi5hY3RpdmUge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcbi50YXNrLWhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgdHJhbnNpdGlvbjogMC41cyBlYXNlLWluLW91dDtcXG59XFxuLnRhc2tIaWRkZW5Ub3Age1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xcbiAgaGVpZ2h0OiAyNXB4O1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWFjY2VudERhcmspO1xcbn1cXG4uZGVzY3JpcHRpb24ge1xcbiAgbWFyZ2luLXRvcDogNXB4O1xcbn1cXG5pbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdIHtcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udDogaW5oZXJpdDtcXG4gIGNvbG9yOiBjdXJyZW50Q29sb3I7XFxuICB3aWR0aDogMS4xNWVtO1xcbiAgaGVpZ2h0OiAxLjE1ZW07XFxuICBib3JkZXI6IDAuMTVlbSBzb2xpZCBjdXJyZW50Q29sb3I7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcGxhY2UtY29udGVudDogY2VudGVyO1xcbn1cXG5pbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICB3aWR0aDogMC42NWVtO1xcbiAgaGVpZ2h0OiAwLjY1ZW07XFxuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xcbiAgdHJhbnNpdGlvbjogMTIwbXMgdHJhbnNmb3JtIGVhc2UtaW4tb3V0O1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMWVtIDFlbSByZWQ7XFxuICB0cmFuc2Zvcm0tb3JpZ2luOiBib3R0b20gbGVmdDtcXG4gIGNsaXAtcGF0aDogcG9seWdvbigxNCUgNDQlLCAwIDY1JSwgNTAlIDEwMCUsIDEwMCUgMTYlLCA4MCUgMCUsIDQzJSA2MiUpO1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmNoZWNrZWQ6OmJlZm9yZSB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbn1cXG4ub3ZlcmxheS5hY3RpdmUge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcbi5vdmVybGF5IHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICB3aWR0aDogMTAwJTsgLyogRnVsbCB3aWR0aCAqL1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoOSwgMTMsIDE0LCAwLjgpO1xcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGVBQWU7O0VBRWYsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLG9CQUFvQjtFQUNwQixpQkFBaUI7RUFDakIscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSxrRUFBa0U7QUFDcEU7QUFDQSxxQ0FBcUM7QUFDckM7RUFDRSxtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsb0JBQW9CO0VBQ3BCLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UsaUNBQWlDO0VBQ2pDLGFBQWE7RUFDYix1QkFBdUI7QUFDekI7QUFDQTtFQUNFLGFBQWE7RUFDYiwyQkFBMkI7RUFDM0IsOEJBQThCO0VBQzlCLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQiwwQkFBMEI7RUFDMUIsaUNBQWlDO0FBQ25DO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCxlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxl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O0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLDBDQUEwQztBQUM1QztBQUNBO0VBQ0UsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6QixTQUFTO0VBQ1QsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsY0FBYztFQUNkLGlDQUFpQztFQUNqQyxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLHVDQUF1QztFQUN2Qyw2QkFBNkI7RUFDN0IsNkJBQTZCO0VBQzdCLHVFQUF1RTtBQUN6RTs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsY0FBYztBQUNoQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLFdBQVcsRUFBRSxlQUFlO0VBQzVCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxzQ0FBc0M7RUFDdEMscUJBQXFCO0FBQ3ZCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcblxcbiAgLS1iZ0NvbG9yMTogIzE1MjAyYjtcXG4gIC0tYmdDb2xvcjI6ICMxOTI3MzQ7XFxuICAtLWJnQ29sb3IzOiAjMjIzMDNjO1xcbiAgLS1iZ0NvbG9yUG9wVXA6ICMyNzM3NDY7XFxuICAtLXRleHRDb2xvcjogI2VhZWJlYztcXG4gIC0tYWNjZW50OiAjMmFiZDY3O1xcbiAgLS1hY2NlbnREYXJrOiAjMWY4ZDRkO1xcbn1cXG4ubWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZCB7XFxuICBmb250LXZhcmlhdGlvbi1zZXR0aW5nczogXFxcIkZJTExcXFwiIDAsIFxcXCJ3Z2h0XFxcIiA0MDAsIFxcXCJHUkFEXFxcIiAwLCBcXFwib3BzelxcXCIgNDg7XFxufVxcbi8qIGNzcyB3aGVuIGxpZ2h0IG1vZGUgaXMgdHVybmVkIG9uICovXFxuYm9keS5saWdodCB7XFxuICAtLWJnQ29sb3IyOiAjZWNlY2VjO1xcbiAgLS1iZ0NvbG9yMzogI2YyZjNmNTtcXG4gIC0tYmdDb2xvcjE6ICNmZWZjZmU7XFxuICAtLWJnQ29sb3JQb3BVcDogI2YzZjFmMztcXG4gIC0tdGV4dENvbG9yOiAjMzc0OTU4O1xcbiAgLS1hY2NlbnREYXJrOiAjYWVlZGM4O1xcbn1cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnQ29sb3IxKTtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBjb2xvcjogdmFyKC0tdGV4dENvbG9yKTtcXG59XFxuLmNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgNWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNWZyO1xcbiAgbWluLXdpZHRoOiAxMDB2dztcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbn1cXG4uaGVhZGVyIHtcXG4gIGdyaWQtY29sdW1uOiAxLy0xO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAwcHggNjBweCAwcHggNjBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnQ29sb3IyKTtcXG59XFxuLmxvZ28ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDEwcHg7XFxuICBmb250LXNpemU6IDQwcHg7XFxuICBmb250LXdlaWdodDogOTAwO1xcbn1cXG4jbG9nbyB7XFxuICBmb250LXNpemU6IDQwcHg7XFxufVxcbi5zaWRlYmFyIHtcXG4gIGdyaWQtcm93OiAyLy0xO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmdDb2xvcjMpO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnI7XFxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuICBwYWRkaW5nLXRvcDogMjBweDtcXG4gIGdhcDogMjBweDtcXG59XFxuYnV0dG9uIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG91dGxpbmU6IGluaGVyaXQ7XFxufVxcbmJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZ0NvbG9yMSk7XFxufVxcbi5zaWRlVG9wIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBnYXA6IDIwcHg7XFxufVxcbi5zaWRlSXRlbSxcXG4uYWRkVGFzayB7XFxuICBmb250LXNpemU6IDE1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZ0NvbG9yMyk7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1MHB4IDEwMHB4O1xcbiAgZ2FwOiAxNXB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktaXRlbXM6IHN0YXJ0O1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gIGhlaWdodDogMzVweDtcXG59XFxuLnByb2plY3RDb250YWluZXIgPiAqLnNpZGVJdGVtIHtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNTBweCAxMDBweCAxZnI7XFxufVxcbi5wcm9qZWN0Q29udGFpbmVyID4gLnNpZGVJdGVtID4gc3BhbjpsYXN0LWNoaWxkIHtcXG4gIGp1c3RpZnktc2VsZjogZW5kO1xcbiAgcGFkZGluZy1yaWdodDogMjBweDtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5wcm9qZWN0Q29udGFpbmVyID4gLnNpZGVJdGVtOmhvdmVyIHNwYW4jY2xvc2Uge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcbi5zaWRlQm90dG9tIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBnYXA6IDEwcHg7XFxuICBncmlkLWF1dG8tcm93czogbWF4LWNvbnRlbnQ7XFxufVxcbi5zaWRlQm90dG9tID4gLmJpZyB7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tdGV4dENvbG9yKTtcXG4gIHBhZGRpbmctYm90dG9tOiAzcHg7XFxufVxcbi5zaWRlQm90dG9tID4gLnByb2plY3RDb250YWluZXIgPiAuc2lkZUl0ZW0ge1xcbiAgcGFkZGluZzogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4ucHJvamVjdC1tb2RhbCB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4ucHJvamVjdC1tb2RhbC5hY3RpdmUge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbnRleHRhcmVhIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIHJlc2l6ZTogbm9uZTsgLypyZW1vdmUgdGhlIHJlc2l6ZSBoYW5kbGUgb24gdGhlIGJvdHRvbSByaWdodCovXFxufVxcbi5pbnB1dCA+IGlucHV0LFxcbi5pbnB1dCA+IHRleHRhcmVhIHtcXG4gIGFsbDogdW5zZXQ7XFxuICBtaW4taGVpZ2h0OiAyNXB4O1xcbiAgd2lkdGg6IDk2JTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnQ29sb3IyKTtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBncmF5O1xcbn1cXG4uYnV0dG9ucyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcGFkZGluZy10b3A6IDVweDtcXG59XFxuLmJ1dHRvbnMgPiBidXR0b24sXFxuI3N1Ym1pdCB7XFxuICBwYWRkaW5nOiA1cHggMTVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnREYXJrKTtcXG4gIGNvbG9yOiB2YXIoLS10ZXh0Q29sb3IpO1xcbiAgZm9udC1zaXplOiBpbmhlcml0O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcbi5idXR0b25zID4gI2NhbmNlbCxcXG4jY2FuY2VsMiB7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZWU2ZDZkO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VjNDE0MTtcXG59XFxuLmNvbnRlbnQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtYXV0by1yb3dzOiBtYXgtY29udGVudDtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBnYXA6IDIwcHg7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5jb250ZW50ID4gLlRpdGxlIHtcXG4gIGhlaWdodDogMTUwcHg7XFxuICB3aWR0aDogOTAlO1xcbiAgZm9udC1zaXplOiA0MHB4O1xcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudERhcmspO1xcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcXG59XFxuXFxuYnV0dG9uLmFkZFRhc2s6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmdDb2xvcjIpO1xcbn1cXG4uY29udGVudCA+IC5hZGRUYXNrIHtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiA4MCU7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG59XFxuLnRhc2tNb2RhbC5hY3RpdmUge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcbi50YXNrTW9kYWwge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLnRhc2tNb2RhbC5tb2RhbCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICB6LWluZGV4OiAyO1xcbiAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLWluLW91dDtcXG59XFxuLm1vZGFsLWNvbnRhaW5lciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZ0NvbG9yMyk7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC1hdXRvLXJvd3M6IG1heC1jb250ZW50O1xcbiAgZ2FwOiAyMHB4O1xcbiAganVzdGlmeS1pdGVtczogc3RhcnQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbn1cXG4ubW9kYWwtY29udGFpbmVyID4gLmJ1dHRvbnMge1xcbiAgZ2FwOiAxNXB4O1xcbn1cXG4uaW5wdXQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtYXV0by1yb3dzOiBtYXgtY29udGVudDtcXG59XFxuLnRhc2tDb250YWluZXIge1xcbiAgd2lkdGg6IDcwJTtcXG59XFxuLnRhc2sge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXRleHRDb2xvcik7XFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgcGFkZGluZzogMTBweCAyMHB4O1xcbiAgZ2FwOiA1cHg7XFxufVxcbi50YXNrIHNwYW4ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4udGFzay1zaG93biB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLnRhc2tMZWZ0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDEwcHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4udGFza1JpZ2h0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcbi50YXNrUmlnaHQgPiAjZG93bi5hY3RpdmUge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLnRhc2tSaWdodCA+ICN1cCB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4udGFza1JpZ2h0ID4gI3VwLmFjdGl2ZSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuLypmaWd1cmUgb3V0IGhvdyB0byBhZGQgYW5pbWF0aW9uIGRyb3Bkb3duIGhlcmUqL1xcbi50YXNrLWhpZGRlbi5hY3RpdmUge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcbi50YXNrLWhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgdHJhbnNpdGlvbjogMC41cyBlYXNlLWluLW91dDtcXG59XFxuLnRhc2tIaWRkZW5Ub3Age1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xcbiAgaGVpZ2h0OiAyNXB4O1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWFjY2VudERhcmspO1xcbn1cXG4uZGVzY3JpcHRpb24ge1xcbiAgbWFyZ2luLXRvcDogNXB4O1xcbn1cXG5pbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdIHtcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udDogaW5oZXJpdDtcXG4gIGNvbG9yOiBjdXJyZW50Q29sb3I7XFxuICB3aWR0aDogMS4xNWVtO1xcbiAgaGVpZ2h0OiAxLjE1ZW07XFxuICBib3JkZXI6IDAuMTVlbSBzb2xpZCBjdXJyZW50Q29sb3I7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcGxhY2UtY29udGVudDogY2VudGVyO1xcbn1cXG5pbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICB3aWR0aDogMC42NWVtO1xcbiAgaGVpZ2h0OiAwLjY1ZW07XFxuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xcbiAgdHJhbnNpdGlvbjogMTIwbXMgdHJhbnNmb3JtIGVhc2UtaW4tb3V0O1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMWVtIDFlbSByZWQ7XFxuICB0cmFuc2Zvcm0tb3JpZ2luOiBib3R0b20gbGVmdDtcXG4gIGNsaXAtcGF0aDogcG9seWdvbigxNCUgNDQlLCAwIDY1JSwgNTAlIDEwMCUsIDEwMCUgMTYlLCA4MCUgMCUsIDQzJSA2MiUpO1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmNoZWNrZWQ6OmJlZm9yZSB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbn1cXG4ub3ZlcmxheS5hY3RpdmUge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcbi5vdmVybGF5IHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICB3aWR0aDogMTAwJTsgLyogRnVsbCB3aWR0aCAqL1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoOSwgMTMsIDE0LCAwLjgpO1xcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsInZhciBkZWZhdWx0T3B0aW9ucyA9IHt9O1xuZXhwb3J0IGZ1bmN0aW9uIGdldERlZmF1bHRPcHRpb25zKCkge1xuICByZXR1cm4gZGVmYXVsdE9wdGlvbnM7XG59XG5leHBvcnQgZnVuY3Rpb24gc2V0RGVmYXVsdE9wdGlvbnMobmV3T3B0aW9ucykge1xuICBkZWZhdWx0T3B0aW9ucyA9IG5ld09wdGlvbnM7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVxdWlyZWRBcmdzKHJlcXVpcmVkLCBhcmdzKSB7XG4gIGlmIChhcmdzLmxlbmd0aCA8IHJlcXVpcmVkKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihyZXF1aXJlZCArICcgYXJndW1lbnQnICsgKHJlcXVpcmVkID4gMSA/ICdzJyA6ICcnKSArICcgcmVxdWlyZWQsIGJ1dCBvbmx5ICcgKyBhcmdzLmxlbmd0aCArICcgcHJlc2VudCcpO1xuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9JbnRlZ2VyKGRpcnR5TnVtYmVyKSB7XG4gIGlmIChkaXJ0eU51bWJlciA9PT0gbnVsbCB8fCBkaXJ0eU51bWJlciA9PT0gdHJ1ZSB8fCBkaXJ0eU51bWJlciA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm4gTmFOO1xuICB9XG5cbiAgdmFyIG51bWJlciA9IE51bWJlcihkaXJ0eU51bWJlcik7XG5cbiAgaWYgKGlzTmFOKG51bWJlcikpIHtcbiAgICByZXR1cm4gbnVtYmVyO1xuICB9XG5cbiAgcmV0dXJuIG51bWJlciA8IDAgPyBNYXRoLmNlaWwobnVtYmVyKSA6IE1hdGguZmxvb3IobnVtYmVyKTtcbn0iLCJpbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBhZGREYXlzXG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEFkZCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBkYXlzIHRvIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQWRkIHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIGRheXMgdG8gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGJlIGNoYW5nZWRcbiAqIEBwYXJhbSB7TnVtYmVyfSBhbW91bnQgLSB0aGUgYW1vdW50IG9mIGRheXMgdG8gYmUgYWRkZWQuIFBvc2l0aXZlIGRlY2ltYWxzIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5mbG9vcmAsIGRlY2ltYWxzIGxlc3MgdGhhbiB6ZXJvIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5jZWlsYC5cbiAqIEByZXR1cm5zIHtEYXRlfSAtIHRoZSBuZXcgZGF0ZSB3aXRoIHRoZSBkYXlzIGFkZGVkXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IC0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQWRkIDEwIGRheXMgdG8gMSBTZXB0ZW1iZXIgMjAxNDpcbiAqIGNvbnN0IHJlc3VsdCA9IGFkZERheXMobmV3IERhdGUoMjAxNCwgOCwgMSksIDEwKVxuICogLy89PiBUaHUgU2VwIDExIDIwMTQgMDA6MDA6MDBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGREYXlzKGRpcnR5RGF0ZSwgZGlydHlBbW91bnQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBhbW91bnQgPSB0b0ludGVnZXIoZGlydHlBbW91bnQpO1xuXG4gIGlmIChpc05hTihhbW91bnQpKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cblxuICBpZiAoIWFtb3VudCkge1xuICAgIC8vIElmIDAgZGF5cywgbm8tb3AgdG8gYXZvaWQgY2hhbmdpbmcgdGltZXMgaW4gdGhlIGhvdXIgYmVmb3JlIGVuZCBvZiBEU1RcbiAgICByZXR1cm4gZGF0ZTtcbiAgfVxuXG4gIGRhdGUuc2V0RGF0ZShkYXRlLmdldERhdGUoKSArIGFtb3VudCk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCBzdGFydE9mRGF5IGZyb20gXCIuLi9zdGFydE9mRGF5L2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc1NhbWVEYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgQXJlIHRoZSBnaXZlbiBkYXRlcyBpbiB0aGUgc2FtZSBkYXkgKGFuZCB5ZWFyIGFuZCBtb250aCk/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBBcmUgdGhlIGdpdmVuIGRhdGVzIGluIHRoZSBzYW1lIGRheSAoYW5kIHllYXIgYW5kIG1vbnRoKT9cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlTGVmdCAtIHRoZSBmaXJzdCBkYXRlIHRvIGNoZWNrXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlUmlnaHQgLSB0aGUgc2Vjb25kIGRhdGUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZXMgYXJlIGluIHRoZSBzYW1lIGRheSAoYW5kIHllYXIgYW5kIG1vbnRoKVxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgNCBTZXB0ZW1iZXIgMDY6MDA6MDAgYW5kIDQgU2VwdGVtYmVyIDE4OjAwOjAwIGluIHRoZSBzYW1lIGRheT9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZURheShuZXcgRGF0ZSgyMDE0LCA4LCA0LCA2LCAwKSwgbmV3IERhdGUoMjAxNCwgOCwgNCwgMTgsIDApKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSA0IFNlcHRlbWJlciBhbmQgNCBPY3RvYmVyIGluIHRoZSBzYW1lIGRheT9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZURheShuZXcgRGF0ZSgyMDE0LCA4LCA0KSwgbmV3IERhdGUoMjAxNCwgOSwgNCkpXG4gKiAvLz0+IGZhbHNlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSA0IFNlcHRlbWJlciwgMjAxNCBhbmQgNCBTZXB0ZW1iZXIsIDIwMTUgaW4gdGhlIHNhbWUgZGF5P1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDQpLCBuZXcgRGF0ZSgyMDE1LCA4LCA0KSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1NhbWVEYXkoZGlydHlEYXRlTGVmdCwgZGlydHlEYXRlUmlnaHQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlTGVmdFN0YXJ0T2ZEYXkgPSBzdGFydE9mRGF5KGRpcnR5RGF0ZUxlZnQpO1xuICB2YXIgZGF0ZVJpZ2h0U3RhcnRPZkRheSA9IHN0YXJ0T2ZEYXkoZGlydHlEYXRlUmlnaHQpO1xuICByZXR1cm4gZGF0ZUxlZnRTdGFydE9mRGF5LmdldFRpbWUoKSA9PT0gZGF0ZVJpZ2h0U3RhcnRPZkRheS5nZXRUaW1lKCk7XG59IiwiaW1wb3J0IHN0YXJ0T2ZXZWVrIGZyb20gXCIuLi9zdGFydE9mV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcblxuLyoqXG4gKiBAbmFtZSBpc1NhbWVXZWVrXG4gKiBAY2F0ZWdvcnkgV2VlayBIZWxwZXJzXG4gKiBAc3VtbWFyeSBBcmUgdGhlIGdpdmVuIGRhdGVzIGluIHRoZSBzYW1lIHdlZWsgKGFuZCBtb250aCBhbmQgeWVhcik/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBBcmUgdGhlIGdpdmVuIGRhdGVzIGluIHRoZSBzYW1lIHdlZWsgKGFuZCBtb250aCBhbmQgeWVhcik/XG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZUxlZnQgLSB0aGUgZmlyc3QgZGF0ZSB0byBjaGVja1xuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZVJpZ2h0IC0gdGhlIHNlY29uZCBkYXRlIHRvIGNoZWNrXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gYW4gb2JqZWN0IHdpdGggb3B0aW9ucy5cbiAqIEBwYXJhbSB7TG9jYWxlfSBbb3B0aW9ucy5sb2NhbGU9ZGVmYXVsdExvY2FsZV0gLSB0aGUgbG9jYWxlIG9iamVjdC4gU2VlIFtMb2NhbGVde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvTG9jYWxlfVxuICogQHBhcmFtIHswfDF8MnwzfDR8NXw2fSBbb3B0aW9ucy53ZWVrU3RhcnRzT249MF0gLSB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2VlayAoMCAtIFN1bmRheSlcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZXMgYXJlIGluIHRoZSBzYW1lIHdlZWsgKGFuZCBtb250aCBhbmQgeWVhcilcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLndlZWtTdGFydHNPbmAgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDZcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDMxIEF1Z3VzdCAyMDE0IGFuZCA0IFNlcHRlbWJlciAyMDE0IGluIHRoZSBzYW1lIHdlZWs/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVXZWVrKG5ldyBEYXRlKDIwMTQsIDcsIDMxKSwgbmV3IERhdGUoMjAxNCwgOCwgNCkpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgd2VlayBzdGFydHMgd2l0aCBNb25kYXksXG4gKiAvLyBhcmUgMzEgQXVndXN0IDIwMTQgYW5kIDQgU2VwdGVtYmVyIDIwMTQgaW4gdGhlIHNhbWUgd2Vlaz9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZVdlZWsobmV3IERhdGUoMjAxNCwgNywgMzEpLCBuZXcgRGF0ZSgyMDE0LCA4LCA0KSwge1xuICogICB3ZWVrU3RhcnRzT246IDFcbiAqIH0pXG4gKiAvLz0+IGZhbHNlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSAxIEphbnVhcnkgMjAxNCBhbmQgMSBKYW51YXJ5IDIwMTUgaW4gdGhlIHNhbWUgd2Vlaz9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZVdlZWsobmV3IERhdGUoMjAxNCwgMCwgMSksIG5ldyBEYXRlKDIwMTUsIDAsIDEpKVxuICogLy89PiBmYWxzZVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1NhbWVXZWVrKGRpcnR5RGF0ZUxlZnQsIGRpcnR5RGF0ZVJpZ2h0LCBvcHRpb25zKSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZUxlZnRTdGFydE9mV2VlayA9IHN0YXJ0T2ZXZWVrKGRpcnR5RGF0ZUxlZnQsIG9wdGlvbnMpO1xuICB2YXIgZGF0ZVJpZ2h0U3RhcnRPZldlZWsgPSBzdGFydE9mV2VlayhkaXJ0eURhdGVSaWdodCwgb3B0aW9ucyk7XG4gIHJldHVybiBkYXRlTGVmdFN0YXJ0T2ZXZWVrLmdldFRpbWUoKSA9PT0gZGF0ZVJpZ2h0U3RhcnRPZldlZWsuZ2V0VGltZSgpO1xufSIsImltcG9ydCBpc1NhbWVXZWVrIGZyb20gXCIuLi9pc1NhbWVXZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuXG4vKipcbiAqIEBuYW1lIGlzVGhpc1dlZWtcbiAqIEBjYXRlZ29yeSBXZWVrIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiBkYXRlIGluIHRoZSBzYW1lIHdlZWsgYXMgdGhlIGN1cnJlbnQgZGF0ZT9cbiAqIEBwdXJlIGZhbHNlXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBJcyB0aGUgZ2l2ZW4gZGF0ZSBpbiB0aGUgc2FtZSB3ZWVrIGFzIHRoZSBjdXJyZW50IGRhdGU/XG4gKlxuICogPiDimqDvuI8gUGxlYXNlIG5vdGUgdGhhdCB0aGlzIGZ1bmN0aW9uIGlzIG5vdCBwcmVzZW50IGluIHRoZSBGUCBzdWJtb2R1bGUgYXNcbiAqID4gaXQgdXNlcyBgRGF0ZS5ub3coKWAgaW50ZXJuYWxseSBoZW5jZSBpbXB1cmUgYW5kIGNhbid0IGJlIHNhZmVseSBjdXJyaWVkLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBjaGVja1xuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIHRoZSBvYmplY3Qgd2l0aCBvcHRpb25zXG4gKiBAcGFyYW0ge0xvY2FsZX0gW29wdGlvbnMubG9jYWxlPWRlZmF1bHRMb2NhbGVdIC0gdGhlIGxvY2FsZSBvYmplY3QuIFNlZSBbTG9jYWxlXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL0xvY2FsZX1cbiAqIEBwYXJhbSB7MHwxfDJ8M3w0fDV8Nn0gW29wdGlvbnMud2Vla1N0YXJ0c09uPTBdIC0gdGhlIGluZGV4IG9mIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsgKDAgLSBTdW5kYXkpXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGUgaXMgaW4gdGhpcyB3ZWVrXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLndlZWtTdGFydHNPbmAgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDZcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdG9kYXkgaXMgMjUgU2VwdGVtYmVyIDIwMTQsIGlzIDIxIFNlcHRlbWJlciAyMDE0IGluIHRoaXMgd2Vlaz9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzVGhpc1dlZWsobmV3IERhdGUoMjAxNCwgOCwgMjEpKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRvZGF5IGlzIDI1IFNlcHRlbWJlciAyMDE0IGFuZCB3ZWVrIHN0YXJ0cyB3aXRoIE1vbmRheVxuICogLy8gaXMgMjEgU2VwdGVtYmVyIDIwMTQgaW4gdGhpcyB3ZWVrP1xuICogY29uc3QgcmVzdWx0ID0gaXNUaGlzV2VlayhuZXcgRGF0ZSgyMDE0LCA4LCAyMSksIHsgd2Vla1N0YXJ0c09uOiAxIH0pXG4gKiAvLz0+IGZhbHNlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzVGhpc1dlZWsoZGlydHlEYXRlLCBvcHRpb25zKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICByZXR1cm4gaXNTYW1lV2VlayhkaXJ0eURhdGUsIERhdGUubm93KCksIG9wdGlvbnMpO1xufSIsImltcG9ydCBpc1NhbWVEYXkgZnJvbSBcIi4uL2lzU2FtZURheS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgaXNUb2RheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gZGF0ZSB0b2RheT9cbiAqIEBwdXJlIGZhbHNlXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBJcyB0aGUgZ2l2ZW4gZGF0ZSB0b2RheT9cbiAqXG4gKiA+IOKaoO+4jyBQbGVhc2Ugbm90ZSB0aGF0IHRoaXMgZnVuY3Rpb24gaXMgbm90IHByZXNlbnQgaW4gdGhlIEZQIHN1Ym1vZHVsZSBhc1xuICogPiBpdCB1c2VzIGBEYXRlLm5vdygpYCBpbnRlcm5hbGx5IGhlbmNlIGltcHVyZSBhbmQgY2FuJ3QgYmUgc2FmZWx5IGN1cnJpZWQuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGUgaXMgdG9kYXlcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0b2RheSBpcyA2IE9jdG9iZXIgMjAxNCwgaXMgNiBPY3RvYmVyIDE0OjAwOjAwIHRvZGF5P1xuICogY29uc3QgcmVzdWx0ID0gaXNUb2RheShuZXcgRGF0ZSgyMDE0LCA5LCA2LCAxNCwgMCkpXG4gKiAvLz0+IHRydWVcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1RvZGF5KGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgcmV0dXJuIGlzU2FtZURheShkaXJ0eURhdGUsIERhdGUubm93KCkpO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgc3RhcnRPZkRheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgZGF5IGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgc3RhcnQgb2YgYSBkYXkgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIG9yaWdpbmFsIGRhdGVcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgc3RhcnQgb2YgYSBkYXlcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgc3RhcnQgb2YgYSBkYXkgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCkpXG4gKiAvLz0+IFR1ZSBTZXAgMDIgMjAxNCAwMDowMDowMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZEYXkoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICBkYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuaW1wb3J0IHsgZ2V0RGVmYXVsdE9wdGlvbnMgfSBmcm9tIFwiLi4vX2xpYi9kZWZhdWx0T3B0aW9ucy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBzdGFydE9mV2Vla1xuICogQGNhdGVnb3J5IFdlZWsgSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBzdGFydCBvZiBhIHdlZWsgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBzdGFydCBvZiBhIHdlZWsgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIG9yaWdpbmFsIGRhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSBhbiBvYmplY3Qgd2l0aCBvcHRpb25zLlxuICogQHBhcmFtIHtMb2NhbGV9IFtvcHRpb25zLmxvY2FsZT1kZWZhdWx0TG9jYWxlXSAtIHRoZSBsb2NhbGUgb2JqZWN0LiBTZWUgW0xvY2FsZV17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9Mb2NhbGV9XG4gKiBAcGFyYW0gezB8MXwyfDN8NHw1fDZ9IFtvcHRpb25zLndlZWtTdGFydHNPbj0wXSAtIHRoZSBpbmRleCBvZiB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrICgwIC0gU3VuZGF5KVxuICogQHJldHVybnMge0RhdGV9IHRoZSBzdGFydCBvZiBhIHdlZWtcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMud2Vla1N0YXJ0c09uYCBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgc3RhcnQgb2YgYSB3ZWVrIGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZldlZWsobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSlcbiAqIC8vPT4gU3VuIEF1ZyAzMSAyMDE0IDAwOjAwOjAwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRoZSB3ZWVrIHN0YXJ0cyBvbiBNb25kYXksIHRoZSBzdGFydCBvZiB0aGUgd2VlayBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZXZWVrKG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCksIHsgd2Vla1N0YXJ0c09uOiAxIH0pXG4gKiAvLz0+IE1vbiBTZXAgMDEgMjAxNCAwMDowMDowMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZXZWVrKGRpcnR5RGF0ZSwgb3B0aW9ucykge1xuICB2YXIgX3JlZiwgX3JlZjIsIF9yZWYzLCBfb3B0aW9ucyR3ZWVrU3RhcnRzT24sIF9vcHRpb25zJGxvY2FsZSwgX29wdGlvbnMkbG9jYWxlJG9wdGlvLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwsIF9kZWZhdWx0T3B0aW9ucyRsb2NhbDI7XG5cbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkZWZhdWx0T3B0aW9ucyA9IGdldERlZmF1bHRPcHRpb25zKCk7XG4gIHZhciB3ZWVrU3RhcnRzT24gPSB0b0ludGVnZXIoKF9yZWYgPSAoX3JlZjIgPSAoX3JlZjMgPSAoX29wdGlvbnMkd2Vla1N0YXJ0c09uID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX29wdGlvbnMkd2Vla1N0YXJ0c09uICE9PSB2b2lkIDAgPyBfb3B0aW9ucyR3ZWVrU3RhcnRzT24gOiBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUgPSBvcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlJG9wdGlvID0gX29wdGlvbnMkbG9jYWxlLm9wdGlvbnMpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZSRvcHRpbyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX29wdGlvbnMkbG9jYWxlJG9wdGlvLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZjMgIT09IHZvaWQgMCA/IF9yZWYzIDogZGVmYXVsdE9wdGlvbnMud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmMiAhPT0gdm9pZCAwID8gX3JlZjIgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsID0gZGVmYXVsdE9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID0gX2RlZmF1bHRPcHRpb25zJGxvY2FsLm9wdGlvbnMpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmICE9PSB2b2lkIDAgPyBfcmVmIDogMCk7IC8vIFRlc3QgaWYgd2Vla1N0YXJ0c09uIGlzIGJldHdlZW4gMCBhbmQgNiBfYW5kXyBpcyBub3QgTmFOXG5cbiAgaWYgKCEod2Vla1N0YXJ0c09uID49IDAgJiYgd2Vla1N0YXJ0c09uIDw9IDYpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3dlZWtTdGFydHNPbiBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNiBpbmNsdXNpdmVseScpO1xuICB9XG5cbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGRheSA9IGRhdGUuZ2V0RGF5KCk7XG4gIHZhciBkaWZmID0gKGRheSA8IHdlZWtTdGFydHNPbiA/IDcgOiAwKSArIGRheSAtIHdlZWtTdGFydHNPbjtcbiAgZGF0ZS5zZXREYXRlKGRhdGUuZ2V0RGF0ZSgpIC0gZGlmZik7XG4gIGRhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCBhZGREYXlzIGZyb20gXCIuLi9hZGREYXlzL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgc3ViRGF5c1xuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBTdWJ0cmFjdCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBkYXlzIGZyb20gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBTdWJ0cmFjdCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBkYXlzIGZyb20gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGJlIGNoYW5nZWRcbiAqIEBwYXJhbSB7TnVtYmVyfSBhbW91bnQgLSB0aGUgYW1vdW50IG9mIGRheXMgdG8gYmUgc3VidHJhY3RlZC4gUG9zaXRpdmUgZGVjaW1hbHMgd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmZsb29yYCwgZGVjaW1hbHMgbGVzcyB0aGFuIHplcm8gd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmNlaWxgLlxuICogQHJldHVybnMge0RhdGV9IHRoZSBuZXcgZGF0ZSB3aXRoIHRoZSBkYXlzIHN1YnRyYWN0ZWRcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gU3VidHJhY3QgMTAgZGF5cyBmcm9tIDEgU2VwdGVtYmVyIDIwMTQ6XG4gKiBjb25zdCByZXN1bHQgPSBzdWJEYXlzKG5ldyBEYXRlKDIwMTQsIDgsIDEpLCAxMClcbiAqIC8vPT4gRnJpIEF1ZyAyMiAyMDE0IDAwOjAwOjAwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3ViRGF5cyhkaXJ0eURhdGUsIGRpcnR5QW1vdW50KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgYW1vdW50ID0gdG9JbnRlZ2VyKGRpcnR5QW1vdW50KTtcbiAgcmV0dXJuIGFkZERheXMoZGlydHlEYXRlLCAtYW1vdW50KTtcbn0iLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHRvRGF0ZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYW4gaW5zdGFuY2Ugb2YgRGF0ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgaXRzIGNsb25lLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhIG51bWJlciwgaXQgaXMgdHJlYXRlZCBhcyBhIHRpbWVzdGFtcC5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgbm9uZSBvZiB0aGUgYWJvdmUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIEludmFsaWQgRGF0ZS5cbiAqXG4gKiAqKk5vdGUqKjogKmFsbCogRGF0ZSBhcmd1bWVudHMgcGFzc2VkIHRvIGFueSAqZGF0ZS1mbnMqIGZ1bmN0aW9uIGlzIHByb2Nlc3NlZCBieSBgdG9EYXRlYC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBhcmd1bWVudCAtIHRoZSB2YWx1ZSB0byBjb252ZXJ0XG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHBhcnNlZCBkYXRlIGluIHRoZSBsb2NhbCB0aW1lIHpvbmVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDbG9uZSB0aGUgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZShuZXcgRGF0ZSgyMDE0LCAxLCAxMSwgMTEsIDMwLCAzMCkpXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHRoZSB0aW1lc3RhbXAgdG8gZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZSgxMzkyMDk4NDMwMDAwKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0RhdGUoYXJndW1lbnQpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBhcmdTdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJndW1lbnQpOyAvLyBDbG9uZSB0aGUgZGF0ZVxuXG4gIGlmIChhcmd1bWVudCBpbnN0YW5jZW9mIERhdGUgfHwgX3R5cGVvZihhcmd1bWVudCkgPT09ICdvYmplY3QnICYmIGFyZ1N0ciA9PT0gJ1tvYmplY3QgRGF0ZV0nKSB7XG4gICAgLy8gUHJldmVudCB0aGUgZGF0ZSB0byBsb3NlIHRoZSBtaWxsaXNlY29uZHMgd2hlbiBwYXNzZWQgdG8gbmV3IERhdGUoKSBpbiBJRTEwXG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50LmdldFRpbWUoKSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGFyZ3VtZW50ID09PSAnbnVtYmVyJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IE51bWJlcl0nKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50KTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoKHR5cGVvZiBhcmd1bWVudCA9PT0gJ3N0cmluZycgfHwgYXJnU3RyID09PSAnW29iamVjdCBTdHJpbmddJykgJiYgdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS53YXJuKFwiU3RhcnRpbmcgd2l0aCB2Mi4wLjAtYmV0YS4xIGRhdGUtZm5zIGRvZXNuJ3QgYWNjZXB0IHN0cmluZ3MgYXMgZGF0ZSBhcmd1bWVudHMuIFBsZWFzZSB1c2UgYHBhcnNlSVNPYCB0byBwYXJzZSBzdHJpbmdzLiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNzdHJpbmctYXJndW1lbnRzXCIpOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuXG4gICAgICBjb25zb2xlLndhcm4obmV3IEVycm9yKCkuc3RhY2spO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG59IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBQcm9qZWN0IGZyb20gXCIuL3Byb2plY3RcIjtcbmltcG9ydCBUYXNrIGZyb20gXCIuL3Rhc2tcIjtcbmltcG9ydCBwcm9qZWN0TGlzdCBmcm9tIFwiLi9wcm9qZWN0TGlzdFwiO1xuaW1wb3J0IHsgZ29Ub1Byb2plY3QsIGRwbSB9IGZyb20gXCIuL3Byb2plY3RNb2RhbFVJXCI7XG5pbXBvcnQge2R0bSwgZGlzcGxheVRhc2tMaXN0fSBmcm9tIFwiLi90YXNrVUlcIjtcblxuY29uc3QgVUkgPSAoKCkgPT4ge1xuICBmdW5jdGlvbiBpbml0aWFsVUkoKSB7XG4gICAgaW5pdGlhbGl6ZUV2ZW50TGlzdGVuZXJzKCk7XG4gICAgY29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5UaXRsZVwiKTtcbiAgICBjb25zdCBuYW1lID0gcHJvamVjdFRpdGxlLmlubmVyVGV4dDtcbiAgICBjb25zdCBwcm9qZWN0ID0gcHJvamVjdExpc3QuZ2V0UHJvamVjdChuYW1lKTtcbiAgICBkaXNwbGF5VGFza0xpc3QocHJvamVjdC5nZXRUYXNrcygpKTtcbiAgfVxuICAvLyBtYWluIGNvbnRyb2wgc3RydWN0dXJlIGhlcmVcbiAgZnVuY3Rpb24gaW5pdGlhbGl6ZUV2ZW50TGlzdGVuZXJzKCkge1xuICAgIGNvbnN0IG1vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGVcIik7XG4gICAgY29uc3QgYWRkUHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkUHJvamVjdFwiKTtcbiAgICBjb25zdCBhZGRUYXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGRUYXNrXCIpO1xuICAgIGNvbnN0IEluYm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtdGl0bGU9XCJJbmJveFwiXScpO1xuICAgIGNvbnN0IFRvZGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtdGl0bGU9IFwiVG9kYXlcIl0nKTtcbiAgICBjb25zdCB0aGlzV2VlayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXRpdGxlPSBcIlRoaXMtV2Vla1wiXScpO1xuICAgIEluYm94LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBnb1RvUHJvamVjdCk7XG4gICAgVG9kYXkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGdvVG9Qcm9qZWN0KTtcbiAgICB0aGlzV2Vlay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZ29Ub1Byb2plY3QpO1xuICAgIG1vZGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpPT57XG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC50b2dnbGUoJ2xpZ2h0Jyk7XG4gICAgfSk7XG4gICAgYWRkUHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZHBtKTtcbiAgICBhZGRUYXNrLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkdG0pO1xuICAgIC8vIHByb2plY3RUaXRsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIClcbiAgfVxuICBcbiAgZnVuY3Rpb24gY2xlYXIoZG9jdW1lbnQpIHt9XG4gIGZ1bmN0aW9uIGZvbygpIHtcbiAgICBjb25zb2xlLmxvZyhcImJvYlwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGluaXRpYWxVSSxcbiAgfTtcbn0pKCk7XG5leHBvcnQgZGVmYXVsdCBVSTtcbiIsImltcG9ydCB7IHRvRGF0ZSwgaXNUb2RheSwgaXNUaGlzV2Vlaywgc3ViRGF5cyB9IGZyb20gXCJkYXRlLWZuc1wiO1xuXG5jbGFzcyBwcm9qZWN0IHtcbiAgY29uc3RydWN0b3IobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy50YXNrcyA9IFtdO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgc2V0TmFtZShuYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgfVxuXG4gIGdldFRhc2tzKCkge1xuICAgIHJldHVybiB0aGlzLnRhc2tzO1xuICB9XG5cbiAgZ2V0VGFzayhuYW1lKXtcbiAgICByZXR1cm4gdGhpcy50YXNrcy5maW5kKCh0KT0+dC5nZXROYW1lKCkgPT09IG5hbWUpO1xuICB9XG4gIFxuICBjb250YWlucyh0YXNrKSB7XG4gICAgcmV0dXJuIHRoaXMudGFza3Muc29tZSgodCkgPT4gdGFzay5nZXROYW1lKCkgPT09IHQuZ2V0TmFtZSgpKTtcbiAgfVxuXG4gIGFkZFRhc2sodGFzaykge1xuICAgIGlmICh0aGlzLmNvbnRhaW5zKHRhc2spKSB7XG4gICAgICBhbGVydChcInB1dCBkaWZmZXJlbnQgdGl0bGUgZm9yIHRhc2tcIik7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHRoaXMudGFza3MucHVzaCh0YXNrKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHJlbW92ZVRhc2sodGFzaykge1xuICAgIHRoaXMudGFza3MgPSB0aGlzLnRhc2tzLmZpbHRlcigodCkgPT4gdC5nZXROYW1lKCkgIT09IHRhc2suZ2V0TmFtZSgpKTtcbiAgfVxuXG4gIGdldFRhc2tzVG9kYXkoKSB7XG4gICAgcmV0dXJuIHRoaXMudGFza3MuZmlsdGVyKCh0YXNrKSA9PiB7XG4gICAgICBjb25zdCB0YXNrRGF0ZSA9IG5ldyBEYXRlKHRhc2suZ2V0RGF0ZUZvcm1hdHRlZCgpKTtcbiAgICAgIHJldHVybiBpc1RvZGF5KHRvRGF0ZSh0YXNrRGF0ZSkpO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0VGFza3NUaGlzV2VlaygpIHtcbiAgICByZXR1cm4gdGhpcy50YXNrcy5maWx0ZXIoKHRhc2spID0+IHtcbiAgICAgIGNvbnN0IHRhc2tEYXRlID0gbmV3IERhdGUodGFzay5nZXREYXRlRm9ybWF0dGVkKCkpO1xuICAgICAgcmV0dXJuIGlzVGhpc1dlZWsoc3ViRGF5cyh0b0RhdGUodGFza0RhdGUpLCAxKSk7XG4gICAgfSk7XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IHByb2plY3Q7XG4iLCJcbmltcG9ydCBQcm9qZWN0IGZyb20gXCIuL3Byb2plY3RcIjtcblxuY29uc3QgcHJvamVjdExpc3QgPSAoKCkgPT4ge1xuICBsZXQgcHJvamVjdHMgPSBbXTtcbiAgcHJvamVjdHMucHVzaChuZXcgUHJvamVjdChcIkluYm94XCIpKTtcbiAgcHJvamVjdHMucHVzaChuZXcgUHJvamVjdChcIlRvZGF5XCIpKTtcbiAgcHJvamVjdHMucHVzaChuZXcgUHJvamVjdChcIlRoaXMgV2Vla1wiKSk7XG4gIGNvbnN0IGdldFByb2plY3RzID0gKCkgPT4gcHJvamVjdHM7XG4gIGNvbnN0IGdldFByb2plY3QgPSAocHJvamVjdE5hbWUpID0+XG4gICAgcHJvamVjdHMuZmluZCgocCkgPT4gcHJvamVjdE5hbWUgPT09IHAuZ2V0TmFtZSgpKTtcbiAgY29uc3QgY29udGFpbnMgPSAobmFtZSkgPT5cbiAgICBwcm9qZWN0cy5zb21lKChwKSA9PiBuYW1lID09PSBwLmdldE5hbWUoKSk7XG4gIGZ1bmN0aW9uIGFkZFByb2plY3QobmV3UHJvamVjdCkge1xuICAgIGlmIChjb250YWlucyhuZXdQcm9qZWN0LmdldE5hbWUoKSkpe1xuICAgICAgYWxlcnQoJ3BscyBwdXQgZGlmZiB0aXRsZScpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBwcm9qZWN0cy5wdXNoKG5ld1Byb2plY3QpO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGZ1bmN0aW9uIGRlbGV0ZVByb2plY3QocHJvamVjdCkge1xuICAgIHByb2plY3RzID0gcHJvamVjdHMuZmlsdGVyKFxuICAgICAgKHApID0+IHAuZ2V0TmFtZSgpICE9PSBwcm9qZWN0LmdldE5hbWUoKVxuICAgICk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGdldFByb2plY3QsXG4gICAgZ2V0UHJvamVjdHMsXG4gICAgY29udGFpbnMsXG4gICAgYWRkUHJvamVjdCxcbiAgICBkZWxldGVQcm9qZWN0LFxuICB9O1xufSkoKTtcbmV4cG9ydCBkZWZhdWx0IHByb2plY3RMaXN0O1xuIiwiaW1wb3J0IFByb2plY3QgZnJvbSBcIi4vcHJvamVjdFwiO1xuaW1wb3J0IFRhc2sgZnJvbSBcIi4vdGFza1wiO1xuaW1wb3J0IHByb2plY3RMaXN0IGZyb20gXCIuL3Byb2plY3RMaXN0XCI7XG5pbXBvcnQge2R0bSwgZGlzcGxheVRhc2tMaXN0fSBmcm9tIFwiLi90YXNrVUlcIjtcblxuZnVuY3Rpb24gZ2V0UHJvamVjdEZyb21JbnB1dCgpIHtcbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRpdGxlXCIpLnZhbHVlLnRyaW0oKTtcbiAgY29uc3QgcHJvamVjdCA9IG5ldyBQcm9qZWN0KHRpdGxlKTtcbiAgcmV0dXJuIHByb2plY3Q7XG59XG5mdW5jdGlvbiBwcm9qZWN0TW9kYWxUb2dnbGUoKSB7XG4gIGNvbnN0IHByb2plY3RNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1tb2RhbFwiKTtcbiAgcHJvamVjdE1vZGFsLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG59XG5mdW5jdGlvbiBnb1RvUHJvamVjdChlKSB7XG4gIGNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuVGl0bGVcIik7XG4gIGxldCBuYW1lID0gZS50YXJnZXQuZGF0YXNldC50aXRsZTtcbiAgY29uc29sZS5sb2cobmFtZSk7XG4gIG5hbWUgPSBuYW1lLnJlcGxhY2VBbGwoXCItXCIsIFwiIFwiKTtcbiAgaWYoIXByb2plY3RMaXN0LmNvbnRhaW5zKG5hbWUpKXtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgcHJvamVjdCA9IHByb2plY3RMaXN0LmdldFByb2plY3QobmFtZSk7XG4gIHByb2plY3RUaXRsZS50ZXh0Q29udGVudCA9IG5hbWU7XG4gIGRpc3BsYXlUYXNrTGlzdChwcm9qZWN0LmdldFRhc2tzKCkpO1xufVxuZnVuY3Rpb24gZ29Ub0luYm94KCkge1xuICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLlRpdGxlXCIpO1xuICBjb25zdCBwcm9qZWN0ID0gcHJvamVjdExpc3QuZ2V0UHJvamVjdCgnSW5ib3gnKTtcbiAgcHJvamVjdFRpdGxlLnRleHRDb250ZW50ID0gcHJvamVjdC5nZXROYW1lKCk7XG4gIGRpc3BsYXlUYXNrTGlzdChwcm9qZWN0LmdldFRhc2tzKCkpO1xufVxuZnVuY3Rpb24gcmVtb3ZlUHJvamVjdChlKXtcbiAgbGV0IG5hbWUgPSBlLnRhcmdldC5kYXRhc2V0LnRpdGxlO1xuICBuYW1lID0gbmFtZS5yZXBsYWNlQWxsKFwiLVwiLCBcIiBcIik7XG4gIGNvbnN0IHByb2plY3QgPSBwcm9qZWN0TGlzdC5nZXRQcm9qZWN0KG5hbWUpO1xuICBwcm9qZWN0TGlzdC5kZWxldGVQcm9qZWN0KHByb2plY3QpO1xuICBkaXNwbGF5UHJvamVjdExpc3QoKTtcbiAgZ29Ub0luYm94KCk7XG59XG5mdW5jdGlvbiBkaXNwbGF5UHJvamVjdChwcm9qZWN0KSB7XG4gIGNvbnN0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RDb250YWluZXJcIik7XG4gIGxldCBuYW1lID0gcHJvamVjdC5nZXROYW1lKCk7XG4gIGlmIChuYW1lID09PSBcIkluYm94XCIgfHwgbmFtZSA9PT0gXCJUb2RheVwiIHx8IG5hbWUgPT09IFwiVGhpcyBXZWVrXCIpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgLy8gaGFkIHRvIGRvIHRoaXMgYmVjYXVzZSBxdWVyeVNlbGVjdG9yIHdvdWxkbid0IHdvcmtcbiAgaWYgKG5hbWUuaW5kZXhPZihcIiBcIikgPj0gMCkge1xuICAgIG5hbWUgPSBuYW1lLnJlcGxhY2VBbGwoL1xccy9nLCBcIi1cIikudHJpbSgpO1xuICB9XG4gIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwic2lkZUl0ZW1cIik7XG4gIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJkYXRhLXRpdGxlXCIsIG5hbWUpO1xuICBjb25zdCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIGljb24uY2xhc3NMaXN0LmFkZChcIm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWRcIik7XG4gIGljb24udGV4dENvbnRlbnQgPSBcImxpc3RcIjtcbiAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBwcm9qZWN0TmFtZS5jbGFzc0xpc3QuYWRkKFwicHJvamVjdFwiKTtcbiAgcHJvamVjdE5hbWUuc2V0QXR0cmlidXRlKFwiZGF0YS10aXRsZVwiLCBuYW1lKTtcbiAgcHJvamVjdE5hbWUudGV4dENvbnRlbnQgPSBuYW1lLnJlcGxhY2UoLy0vZywgXCIgXCIpO1xuICBjb25zdCBjbG9zZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBjbG9zZS5jbGFzc0xpc3QuYWRkKFwibWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZFwiKTtcbiAgY2xvc2Uuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjbG9zZVwiKTtcbiAgY2xvc2Uuc2V0QXR0cmlidXRlKFwiZGF0YS10aXRsZVwiLCBuYW1lKTtcbiAgY2xvc2UudGV4dENvbnRlbnQgPSBcImNsb3NlXCI7XG4gIGJ1dHRvbi5hcHBlbmRDaGlsZChpY29uKTtcbiAgYnV0dG9uLmFwcGVuZENoaWxkKHByb2plY3ROYW1lKTtcbiAgYnV0dG9uLmFwcGVuZENoaWxkKGNsb3NlKTtcbiAgY2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZW1vdmVQcm9qZWN0KTtcbiAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBnb1RvUHJvamVjdCk7XG4gIHByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbn1cbmZ1bmN0aW9uIGRpc3BsYXlQcm9qZWN0TGlzdCgpIHtcbiAgY29uc3QgcHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdENvbnRhaW5lclwiKTtcbiAgcHJvamVjdENvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuICBwcm9qZWN0TGlzdC5nZXRQcm9qZWN0cygpLmZvckVhY2goKHByb2plY3QpID0+IGRpc3BsYXlQcm9qZWN0KHByb2plY3QpKTtcbn1cblxuZnVuY3Rpb24gc3VibWl0UHJvamVjdChlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgY29uc3QgcHJvamVjdCA9IGdldFByb2plY3RGcm9tSW5wdXQoKTtcbiAgcHJvamVjdE1vZGFsVG9nZ2xlKCk7XG4gIGlmIChwcm9qZWN0TGlzdC5hZGRQcm9qZWN0KHByb2plY3QpKSB7XG4gICAgZGlzcGxheVByb2plY3RMaXN0KCk7XG4gIH1cbn1cbmZ1bmN0aW9uIGRpc3BsYXlQcm9qZWN0TW9kYWwoKSB7XG4gIHByb2plY3RNb2RhbFRvZ2dsZSgpO1xuICBjb25zdCBwcm9qZWN0TW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtbW9kYWxcIik7XG4gIGNvbnN0IHByb2plY3RDYW5jZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NhbmNlbFwiKTtcbiAgcHJvamVjdENhbmNlbC5vbmNsaWNrID0gKCkgPT4gcHJvamVjdE1vZGFsVG9nZ2xlKCk7XG4gIHByb2plY3RNb2RhbC5vbnN1Ym1pdCA9IHN1Ym1pdFByb2plY3Q7XG4gIC8vIHJlbWVtYmVyIHRoYXQgb25zdWJtaXQgaXMgdXNlZCBmb3IgZm9ybSBub3QgYnV0dG9uXG59XG5cbmV4cG9ydHtnb1RvUHJvamVjdCwgZGlzcGxheVByb2plY3RNb2RhbCBhcyBkcG19OyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIHRhc2sge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBkdWVEYXRlID0gXCJObyBkYXRlXCIsIGRlc2NyaXB0aW9uID0gXCJcIikge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gIH1cblxuICBzZXROYW1lKG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgc2V0RGF0ZShkdWVEYXRlKSB7XG4gICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgfVxuXG4gIGdldERhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZHVlRGF0ZTtcbiAgfVxuXG4gIGdldERhdGVGb3JtYXR0ZWQoKSB7XG4gICAgY29uc3QgZGF5ID0gdGhpcy5kdWVEYXRlLnNwbGl0KFwiL1wiKVswXTtcbiAgICBjb25zdCBtb250aCA9IHRoaXMuZHVlRGF0ZS5zcGxpdChcIi9cIilbMV07XG4gICAgY29uc3QgeWVhciA9IHRoaXMuZHVlRGF0ZS5zcGxpdChcIi9cIilbMl07XG4gICAgcmV0dXJuIGAke21vbnRofS8ke2RheX0vJHt5ZWFyfWA7XG4gIH1cblxuICBnZXREZXNjcmlwdGlvbigpe1xuICAgIHJldHVybiB0aGlzLmRlc2NyaXB0aW9uO1xuICB9XG5cbiAgc2V0RGVzY3JpcHRpb24oZGVzY3JpcHRpb24pe1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgfVxufVxuLy8gY29uc3QgZ2V0RGVzY3JpcHRpb24gPSAoKSA9PiBkZXNjcmlwdGlvbjtcbi8vIGNvbnN0IGdldFByaW9yaXR5ID0gKCkgPT4gcHJpb3JpdHk7XG4vLyBjb25zdCBnZXRJc0RvbmUgPSAoKSA9PiBpc0RvbmU7XG4vLyBmdW5jdGlvbiBzZXREZXNjcmlwdGlvbihkZXNjcmlwdGlvbil7dGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9ufVxuLy8gY29uc3QgdG9nZ2xlRG9uZSA9ICgpID0+IHtcbi8vICAgICB0aGlzLmlzRG9uZSA9ICFpc0RvbmU7XG4vLyB9XG4vLyBnZXREZXNjcmlwdGlvbixnZXRQcmlvcml0eSwgZ2V0SXNEb25lLHNldERlc2NyaXB0aW9uLHRvZ2dsZURvbmUsXG4iLCJpbXBvcnQgUHJvamVjdCBmcm9tIFwiLi9wcm9qZWN0XCI7XG5pbXBvcnQgVGFzayBmcm9tIFwiLi90YXNrXCI7XG5pbXBvcnQgcHJvamVjdExpc3QgZnJvbSBcIi4vcHJvamVjdExpc3RcIjtcblxuZnVuY3Rpb24gZ2V0UHJvamVjdEZyb21UaXRsZSgpIHtcbiAgY29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5UaXRsZVwiKTtcbiAgY29uc3QgbmFtZSA9IHByb2plY3RUaXRsZS5pbm5lclRleHQ7XG4gIGNvbnN0IHByb2plY3QgPSBwcm9qZWN0TGlzdC5nZXRQcm9qZWN0KG5hbWUpO1xuICByZXR1cm4gcHJvamVjdDtcbn1cbmZ1bmN0aW9uIHRhc2tNb2RhbFRvZ2dsZSgpIHtcbiAgY29uc3QgdGFza01vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrTW9kYWxcIik7XG4gIHRhc2tNb2RhbC5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xufVxuZnVuY3Rpb24gZ2V0VGFza0Zyb21JbnB1dCgpIHtcbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRpdGxlMlwiKS52YWx1ZS50cmltKCk7XG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZXNjcmlwdGlvblwiKS52YWx1ZTtcbiAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGF0ZVwiKS52YWx1ZTtcbiAgY29uc3QgdGFzayA9IG5ldyBUYXNrKHRpdGxlLCBkYXRlLCBkZXNjcmlwdGlvbik7XG4gIGNvbnNvbGUubG9nKHRhc2spO1xuICByZXR1cm4gdGFzaztcbn1cbmZ1bmN0aW9uIHJlbW92ZVRhc2soZSkge1xuICBjb25zdCB7IG5hbWUgfSA9IGUudGFyZ2V0LmRhdGFzZXQ7XG4gIGNvbnN0IHByb2plY3QgPSBnZXRQcm9qZWN0RnJvbVRpdGxlKCk7XG4gIGNvbnN0IHRhc2sgPSBwcm9qZWN0LmdldFRhc2sobmFtZSk7XG4gIHByb2plY3QucmVtb3ZlVGFzayh0YXNrKTtcbiAgZGlzcGxheVRhc2tMaXN0KHByb2plY3QuZ2V0VGFza3MoKSk7XG59XG5cbmZ1bmN0aW9uIGVkaXRUYXNrKGUpIHtcbiAgY29uc3Qge25hbWV9ID0gZS50YXJnZXQuZGF0YXNldDtcbiAgY29uc3QgcHJvamVjdCA9IGdldFByb2plY3RGcm9tVGl0bGUoKTtcbiAgY29uc3QgdGFzayA9IHByb2plY3QuZ2V0VGFzayhuYW1lKTtcblxuICBjb25zdCB0YXNrTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2tNb2RhbFwiKTtcbiAgdGFza01vZGFsLmNsYXNzTGlzdC50b2dnbGUoXCJtb2RhbFwiKTtcbiAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vdmVybGF5Jyk7XG4gIG92ZXJsYXkuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XG4gIGNvbnN0IHRhc2tDYW5jZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NhbmNlbDJcIik7XG4gIHRhc2tDYW5jZWwub25jbGljayA9ICgpID0+IHtcbiAgICB0YXNrTW9kYWwuY2xhc3NMaXN0LnRvZ2dsZShcIm1vZGFsXCIpO1xuICAgIG92ZXJsYXkuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XG4gIH1cbiAgdGFza01vZGFsLm9uc3VibWl0ID0gKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBuZXdUYXNrID0gZ2V0VGFza0Zyb21JbnB1dCgpO1xuICAgIHRhc2suc2V0TmFtZShuZXdUYXNrLmdldE5hbWUoKSk7XG4gICAgdGFzay5zZXREYXRlKG5ld1Rhc2suZ2V0RGF0ZSgpKTtcbiAgICB0YXNrLnNldERlc2NyaXB0aW9uKG5ld1Rhc2suZ2V0RGVzY3JpcHRpb24oKSk7XG4gICAgdGFza01vZGFsLmNsYXNzTGlzdC50b2dnbGUoXCJtb2RhbFwiKTtcbiAgICBvdmVybGF5LmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xuICAgIGRpc3BsYXlUYXNrTGlzdChwcm9qZWN0LmdldFRhc2tzKCkpO1xuICB9O1xufVxuZnVuY3Rpb24gZGlzcGxheVRhc2sodGFzaykge1xuICBjb25zdCB0YXNrQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrQ29udGFpbmVyXCIpO1xuICBjb25zdCB0YXNrMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRhc2syLmNsYXNzTGlzdC5hZGQoXCJ0YXNrXCIpO1xuICBjb25zdCB0YXNrU2hvd24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0YXNrU2hvd24uY2xhc3NMaXN0LmFkZChcInRhc2stc2hvd25cIik7XG4gIHRhc2syLmFwcGVuZENoaWxkKHRhc2tTaG93bik7XG4gIGNvbnN0IHRhc2tMZWZ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdGFza0xlZnQuY2xhc3NMaXN0LmFkZChcInRhc2tMZWZ0XCIpO1xuICB0YXNrU2hvd24uYXBwZW5kQ2hpbGQodGFza0xlZnQpO1xuICBjb25zdCBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgY2hlY2tib3guc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImNoZWNrYm94XCIpO1xuICB0YXNrTGVmdC5hcHBlbmRDaGlsZChjaGVja2JveCk7XG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdGl0bGUuY2xhc3NMaXN0LmFkZChcInRpdGxlXCIpO1xuICB0aXRsZS5pbm5lclRleHQgPSB0YXNrLmdldE5hbWUoKTtcbiAgdGFza0xlZnQuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICBjb25zdCBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZGF0ZS5jbGFzc0xpc3QuYWRkKFwiZGF0ZVwiKTtcbiAgZGF0ZS5pbm5lclRleHQgPSB0YXNrLmdldERhdGUoKTtcbiAgdGFza1Nob3duLmFwcGVuZENoaWxkKGRhdGUpO1xuICBjb25zdCB0YXNrUmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0YXNrUmlnaHQuY2xhc3NMaXN0LmFkZChcInRhc2tSaWdodFwiKTtcbiAgdGFza1Nob3duLmFwcGVuZENoaWxkKHRhc2tSaWdodCk7XG4gIC8vIGV4cGFuZE1vcmVcbiAgY29uc3QgZXhwYW5kTW9yZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBleHBhbmRNb3JlLmNsYXNzTGlzdC5hZGQoXCJtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkXCIpO1xuICBleHBhbmRNb3JlLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZG93blwiKTtcbiAgZXhwYW5kTW9yZS5pbm5lclRleHQgPSBcImV4cGFuZF9tb3JlXCI7XG4gIHRhc2tSaWdodC5hcHBlbmRDaGlsZChleHBhbmRNb3JlKTtcbiAgY29uc3QgdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgdXAuY2xhc3NMaXN0LmFkZChcIm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWRcIik7XG4gIHVwLmlubmVyVGV4dCA9IFwia2V5Ym9hcmRfYXJyb3dfdXBcIjtcbiAgdXAuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ1cFwiKTtcbiAgdGFza1JpZ2h0LmFwcGVuZENoaWxkKHVwKTtcbiAgLy8gZGVsZXRlRWxcbiAgY29uc3QgZGVsZXRlRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgZGVsZXRlRWwuY2xhc3NMaXN0LmFkZChcIm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWRcIik7XG4gIGRlbGV0ZUVsLnNldEF0dHJpYnV0ZShcImRhdGEtbmFtZVwiLCB0YXNrLmdldE5hbWUoKSk7XG4gIGRlbGV0ZUVsLmlubmVyVGV4dCA9IFwiZGVsZXRlXCI7XG4gIHRhc2tSaWdodC5hcHBlbmRDaGlsZChkZWxldGVFbCk7XG4gIGNvbnN0IHRhc2tIaWRkZW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0YXNrSGlkZGVuLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWhpZGRlblwiKTtcbiAgdGFzazIuYXBwZW5kQ2hpbGQodGFza0hpZGRlbik7XG4gIGNvbnN0IHRhc2tIaWRkZW5Ub3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0YXNrSGlkZGVuVG9wLmNsYXNzTGlzdC5hZGQoXCJ0YXNrSGlkZGVuVG9wXCIpO1xuICB0YXNrSGlkZGVuLmFwcGVuZENoaWxkKHRhc2tIaWRkZW5Ub3ApO1xuICBjb25zdCBkZXNjcmlwdGlvblRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg0XCIpO1xuICBkZXNjcmlwdGlvblRpdGxlLmlubmVyVGV4dCA9IFwiRGVzY3JpcHRpb246XCI7XG4gIHRhc2tIaWRkZW5Ub3AuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25UaXRsZSk7XG4gIC8vIGVkaXRcbiAgY29uc3QgZWRpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBlZGl0LmNsYXNzTGlzdC5hZGQoXCJtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkXCIpO1xuICBlZGl0LnNldEF0dHJpYnV0ZShcImRhdGEtbmFtZVwiLCB0YXNrLmdldE5hbWUoKSk7XG4gIGVkaXQuaW5uZXJUZXh0ID0gXCJlZGl0XCI7XG4gIHRhc2tIaWRkZW5Ub3AuYXBwZW5kQ2hpbGQoZWRpdCk7XG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZChcImRlc2NyaXB0aW9uXCIpO1xuICBkZXNjcmlwdGlvbi5pbm5lclRleHQgPSB0YXNrLmdldERlc2NyaXB0aW9uKCk7XG4gIHRhc2tIaWRkZW4uYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuICBleHBhbmRNb3JlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgdGFza0hpZGRlbi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgIGV4cGFuZE1vcmUuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICB1cC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICB9KTtcbiAgdXAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBleHBhbmRNb3JlLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgdGFza0hpZGRlbi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgIHVwLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gIH0pO1xuICBkZWxldGVFbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcmVtb3ZlVGFzayk7XG4gIGVkaXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGVkaXRUYXNrKTtcbiAgdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrMik7XG59XG5mdW5jdGlvbiBkaXNwbGF5VGFza0xpc3QodGFza3MpIHtcbiAgY29uc3QgdGFza0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFza0NvbnRhaW5lclwiKTtcbiAgdGFza0NvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuICB0YXNrcy5mb3JFYWNoKCh0YXNrKSA9PiBkaXNwbGF5VGFzayh0YXNrKSk7XG59XG5mdW5jdGlvbiBzdWJtaXRUYXNrKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBjb25zdCBwcm9qZWN0ID0gZ2V0UHJvamVjdEZyb21UaXRsZSgpO1xuICBjb25zdCB0YXNrID0gZ2V0VGFza0Zyb21JbnB1dCgpO1xuICB0YXNrTW9kYWxUb2dnbGUoKTtcbiAgaWYgKHByb2plY3QuYWRkVGFzayh0YXNrKSkge1xuICAgIGNvbnNvbGUubG9nKHByb2plY3QuZ2V0VGFza3MoKSk7XG4gICAgZGlzcGxheVRhc2tMaXN0KHByb2plY3QuZ2V0VGFza3MoKSk7XG4gIH1cbn1cbmZ1bmN0aW9uIGR0bSgpIHtcbiAgdGFza01vZGFsVG9nZ2xlKCk7XG4gIGNvbnN0IHRhc2tNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFza01vZGFsXCIpO1xuICBjb25zdCB0YXNrQ2FuY2VsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjYW5jZWwyXCIpO1xuICB0YXNrQ2FuY2VsLm9uY2xpY2sgPSAoKSA9PiB0YXNrTW9kYWxUb2dnbGUoKTtcbiAgdGFza01vZGFsLm9uc3VibWl0ID0gc3VibWl0VGFzaztcbn1cblxuZXhwb3J0IHsgZHRtLCBkaXNwbGF5VGFza0xpc3QgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHt0b0RhdGV9IGZyb20gJ2RhdGUtZm5zJztcbmltcG9ydCBQcm9qZWN0IGZyb20gJy4vbW9kdWxlcy9wcm9qZWN0LmpzJztcbmltcG9ydCBUYXNrIGZyb20gJy4vbW9kdWxlcy90YXNrLmpzJztcbmltcG9ydCBwcm9qZWN0TGlzdCBmcm9tICcuL21vZHVsZXMvcHJvamVjdExpc3QuanMnO1xuaW1wb3J0IFVJIGZyb20gJy4vbW9kdWxlcy9VSS5qcyc7XG4vLyAtaW1wb3J0IHt0b0RvfSBmcm9tICcuL29iamVjdHMuanMnO1xuY29uc29sZS5sb2cocHJvamVjdExpc3QpO1xuY29uc3QgdGFzazEgPSBuZXcgVGFzaygnYm9iJywgJzIvNC8yMicpO1xuY29uc3QgcHJvamVjdCA9IHByb2plY3RMaXN0LmdldFByb2plY3QoJ0luYm94Jyk7XG5wcm9qZWN0LmFkZFRhc2sodGFzazEpO1xuY29uc29sZS5sb2coVUkpO1xuVUkuaW5pdGlhbFVJKCk7XG4vLyBjb25zdCB0YXNrMSA9IG5ldyBUYXNrKCdib2InLCAnMi80LzIyJyk7XG4vLyBjb25zb2xlLmxvZyh0YXNrMS5zZXROYW1lKCdoZGlkZCcpKTtcbi8vIGNvbnNvbGUubG9nKHt0YXNrMX0pO1xuLy8gY29uc29sZS5sb2codGFzazEuZ2V0TmFtZSgpKTtcbi8vIGNvbnNvbGUubG9nKHRhc2sxLmdldERhdGUoKSk7XG4vLyBjb25zdCBwcm9qZWN0MSA9IG5ldyBQcm9qZWN0KCdib2InKTtcbi8vIHByb2plY3QxLmFkZFRhc2sodGFzazEpO1xuLy8gY29uc29sZS5sb2cocHJvamVjdDEuZ2V0VGFza3MoKSk7XG4vLyBwcm9qZWN0MS5yZW1vdmVUYXNrKHRhc2sxKTtcbi8vIGNvbnNvbGUubG9nKHByb2plY3QxLmdldFRhc2tzKCkpO1xuLy8gcHJvamVjdExpc3QuYWRkUHJvamVjdChwcm9qZWN0MSk7XG4vLyBjb25zb2xlLmxvZyhwcm9qZWN0TGlzdC5nZXRQcm9qZWN0cygpKTtcblxuY29uc29sZS5sb2coJ2hpZGxsc3NkZCcpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9