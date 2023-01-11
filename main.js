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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  font-family: sans-serif;\n  font-size: 16px;\n\n  --bgColor1: #15202b;\n  --bgColor2: #192734;\n  --bgColor3: #22303c;\n  --bgColorPopUp: #273746;\n  --textColor: #eaebec;\n  --accent: #2abd67;\n  --accentDark: #1f8d4d;\n}\n.material-symbols-outlined {\n  font-variation-settings: \"FILL\" 0, \"wght\" 400, \"GRAD\" 0, \"opsz\" 48;\n}\n/* css when light mode is turned on */\nbody.light {\n  --bgColor2: #ececec;\n  --bgColor3: #f2f3f5;\n  --bgColor1: #fefcfe;\n  --bgColorPopUp: #f3f1f3;\n  --textColor: #374958;\n  --accentDark: #aeedc8;\n}\nbody {\n  background-color: var(--bgColor1);\n  height: 100vh;\n  color: var(--textColor);\n}\n.container {\n  display: grid;\n  grid-template-rows: 1fr 5fr;\n  grid-template-columns: 1fr 5fr;\n  min-width: 100vw;\n  min-height: 100vh;\n}\n.header {\n  grid-column: 1/-1;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0px 60px 0px 60px;\n  background-color: var(--bgColor2);\n}\n.logo {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 40px;\n  font-weight: 900;\n}\n#logo {\n  font-size: 40px;\n}\n\n.sidebar.active{\n  visibility: hidden;\n}\n.sidebar {\n  grid-row: 2/-1;\n  background-color: var(--bgColor3);\n  display: grid;\n  grid-template-rows: auto 1fr;\n  padding-left: 10px;\n  padding-top: 20px;\n  gap: 20px;\n}\nbutton {\n  border: none;\n  color: inherit;\n  background-color: inherit;\n  cursor: pointer;\n  outline: inherit;\n}\nbutton:hover {\n  background-color: var(--bgColor1);\n}\n.sideTop {\n  display: grid;\n  gap: 20px;\n}\n.sideItem,\n.addTask {\n  font-size: 15px;\n  background-color: var(--bgColor3);\n  display: grid;\n  grid-template-columns: 50px 100px;\n  gap: 15px;\n  align-items: center;\n  justify-items: start;\n  border-radius: 20px;\n  height: 35px;\n}\n.projectContainer > *.sideItem {\n  grid-template-columns: 50px 100px 1fr;\n}\n.projectContainer > .sideItem > span:last-child {\n  justify-self: end;\n  padding-right: 20px;\n  display: none;\n}\n.projectContainer > .sideItem:hover span#close {\n  display: block;\n}\n.sideBottom {\n  display: grid;\n  gap: 10px;\n  grid-auto-rows: max-content;\n}\n.sideBottom > .big {\n  font-size: 20px;\n  border-bottom: 2px solid var(--textColor);\n  padding-bottom: 3px;\n}\n.sideBottom > .projectContainer > .sideItem {\n  padding: 0;\n  width: 100%;\n}\n.project-modal {\n  display: none;\n}\n.project-modal.active {\n  display: block;\n}\n\ntextarea {\n  border: none;\n  overflow: auto;\n  outline: none;\n  resize: none; /*remove the resize handle on the bottom right*/\n}\n.input > input,\n.input > textarea {\n  all: unset;\n  min-height: 25px;\n  width: 96%;\n  background-color: var(--bgColor2);\n  border-bottom: 1px solid gray;\n}\n.buttons {\n  display: flex;\n  padding-top: 5px;\n}\n.buttons > button,\n#submit {\n  padding: 5px 15px;\n  border-radius: 20px;\n  background-color: var(--accentDark);\n  color: var(--textColor);\n  font-size: inherit;\n  font-weight: bold;\n}\n.buttons > #cancel,\n#cancel2 {\n  border: 1px solid #ee6d6d;\n  background-color: #ec4141;\n}\n.content {\n  display: grid;\n  grid-auto-rows: max-content;\n  padding: 20px;\n  gap: 20px;\n  justify-items: center;\n}\n.content > .Title {\n  height: 150px;\n  width: 90%;\n  font-size: 40px;\n  padding-left: 20px;\n  justify-self: center;\n  display: flex;\n  align-items: center;\n  background-color: var(--accentDark);\n  border-radius: 30px;\n}\n\nbutton.addTask:hover {\n  background-color: var(--bgColor2);\n}\n.content > .addTask {\n  justify-items: center;\n  width: 80%;\n  justify-self: center;\n}\n.taskModal.active {\n  display: block;\n}\n.taskModal {\n  display: none;\n}\n.taskModal.modal {\n  display: block;\n  transform: translate(-50%, -50%);\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  z-index: 2;\n  transition: 0.2s ease-in-out;\n}\n.modal-container {\n  background-color: var(--bgColor3);\n  display: grid;\n  grid-auto-rows: max-content;\n  gap: 20px;\n  justify-items: start;\n  justify-content: center;\n  font-size: 20px;\n  width: fit-content;\n  padding: 20px;\n  border-radius: 20px;\n}\n.modal-container > .buttons {\n  gap: 15px;\n}\n.input {\n  display: grid;\n  grid-auto-rows: max-content;\n}\n.taskContainer {\n  width: 70%;\n  display:grid;\n  gap:10px;\n}\n.task {\n  display: grid;\n  border: 1px solid var(--textColor);\n  border-radius: 15px;\n  padding: 10px 20px;\n  gap: 5px;\n}\n.task span {\n  cursor: pointer;\n}\nspan:hover{\n  cursor: pointer;\n}\n.task-shown {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.taskLeft {\n  display: flex;\n  gap: 10px;\n  align-items: center;\n}\n.taskRight {\n  display: flex;\n}\n.taskRight > #down.active {\n  display: none;\n}\n.taskRight > #up {\n  display: none;\n}\n.taskRight > #up.active {\n  display: block;\n}\n/*figure out how to add animation dropdown here*/\n.task-hidden.active {\n  display: block;\n}\n.task-hidden {\n  display: none;\n  transition: 0.5s ease-in-out;\n}\n.taskHiddenTop {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-right: 20px;\n  height: 25px;\n  border-bottom: 1px solid var(--accentDark);\n}\n.description {\n  margin-top: 5px;\n}\ninput[type=\"checkbox\"] {\n  appearance: none;\n  background-color: inherit;\n  margin: 0;\n  font: inherit;\n  color: currentColor;\n  width: 1.15em;\n  height: 1.15em;\n  border: 0.15em solid currentColor;\n  border-radius: 50%;\n  display: grid;\n  place-content: center;\n}\ninput[type=\"checkbox\"]::before {\n  content: \"\";\n  width: 0.65em;\n  height: 0.65em;\n  transform: scale(0);\n  transition: 120ms transform ease-in-out;\n  box-shadow: inset 1em 1em red;\n  transform-origin: bottom left;\n  clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);\n}\n\ninput[type=\"checkbox\"]:checked::before {\n  transform: scale(1);\n}\n.addTask.active{\n    display:none;\n}\n.overlay.active {\n  display: block;\n}\n.overlay {\n  display: none;\n  width: 100%; /* Full width */\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  background-color: rgba(9, 13, 14, 0.8);\n  align-content: center;\n}\n.mode{\n  background-color: var(--bgColor1);\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: 10px;\n    border-radius: 50px;\n    height: 40px;\n    width: 80px;\n    box-sizing: border-box;\n    position: relative;\n    transform: scale(0.8);\n    transition: background-color 0.2s ease-in;\n    border: solid 3px var(--accentDark);\n    cursor: pointer;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,uBAAuB;EACvB,eAAe;;EAEf,mBAAmB;EACnB,mBAAmB;EACnB,mBAAmB;EACnB,uBAAuB;EACvB,oBAAoB;EACpB,iBAAiB;EACjB,qBAAqB;AACvB;AACA;EACE,kEAAkE;AACpE;AACA,qCAAqC;AACrC;EACE,mBAAmB;EACnB,mBAAmB;EACnB,mBAAmB;EACnB,uBAAuB;EACvB,oBAAoB;EACpB,qBAAqB;AACvB;AACA;EACE,iCAAiC;EACjC,aAAa;EACb,uBAAuB;AACzB;AACA;EACE,aAAa;EACb,2BAA2B;EAC3B,8BAA8B;EAC9B,gBAAgB;EAChB,iBAAiB;AACnB;AACA;EACE,iBAAiB;EACjB,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,0BAA0B;EAC1B,iCAAiC;AACnC;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,SAAS;EACT,eAAe;EACf,gBAAgB;AAClB;AACA;EACE,eAAe;AACjB;;AAEA;EACE,kBAAkB;AACpB;AACA;EACE,cAAc;EACd,iCAAiC;EACjC,aAAa;EACb,4BAA4B;EAC5B,kBAAkB;EAClB,iBAAiB;EACjB,SAAS;AACX;AACA;EACE,YAAY;EACZ,cAAc;EACd,yBAAyB;EACzB,eAAe;EACf,gBAAgB;AAClB;AACA;EACE,iCAAiC;AACnC;AACA;EACE,aAAa;EACb,SAAS;AACX;AACA;;EAEE,eAAe;EACf,iCAAiC;EACjC,aAAa;EACb,iCAAiC;EACjC,SAAS;EACT,mBAAmB;EACnB,oBAAoB;EACpB,mBAAmB;EACnB,YAAY;AACd;AACA;EACE,qCAAqC;AACvC;AACA;EACE,iBAAiB;EACjB,mBAAmB;EACnB,aAAa;AACf;AACA;EACE,cAAc;AAChB;AACA;EACE,aAAa;EACb,SAAS;EACT,2BAA2B;AAC7B;AACA;EACE,eAAe;EACf,yCAAyC;EACzC,mBAAmB;AACrB;AACA;EACE,UAAU;EACV,WAAW;AACb;AACA;EACE,aAAa;AACf;AACA;EACE,cAAc;AAChB;;AAEA;EACE,YAAY;EACZ,cAAc;EACd,aAAa;EACb,YAAY,EAAE,+CAA+C;AAC/D;AACA;;EAEE,UAAU;EACV,gBAAgB;EAChB,UAAU;EACV,iCAAiC;EACjC,6BAA6B;AAC/B;AACA;EACE,aAAa;EACb,gBAAgB;AAClB;AACA;;EAEE,iBAAiB;EACjB,mBAAmB;EACnB,mCAAmC;EACnC,uBAAuB;EACvB,kBAAkB;EAClB,iBAAiB;AACnB;AACA;;EAEE,yBAAyB;EACzB,yBAAyB;AAC3B;AACA;EACE,aAAa;EACb,2BAA2B;EAC3B,aAAa;EACb,SAAS;EACT,qBAAqB;AACvB;AACA;EACE,aAAa;EACb,UAAU;EACV,eAAe;EACf,kBAAkB;EAClB,oBAAoB;EACpB,aAAa;EACb,mBAAmB;EACnB,mCAAmC;EACnC,mBAAmB;AACrB;;AAEA;EACE,iCAAiC;AACnC;AACA;EACE,qBAAqB;EACrB,UAAU;EACV,oBAAoB;AACtB;AACA;EACE,cAAc;AAChB;AACA;EACE,aAAa;AACf;AACA;EACE,cAAc;EACd,gCAAgC;EAChC,eAAe;EACf,QAAQ;EACR,SAAS;EACT,UAAU;EACV,4BAA4B;AAC9B;AACA;EACE,iCAAiC;EACjC,aAAa;EACb,2BAA2B;EAC3B,SAAS;EACT,oBAAoB;EACpB,uBAAuB;EACvB,eAAe;EACf,kBAAkB;EAClB,aAAa;EACb,mBAAmB;AACrB;AACA;EACE,SAAS;AACX;AACA;EACE,aAAa;EACb,2BAA2B;AAC7B;AACA;EACE,UAAU;EACV,YAAY;EACZ,QAAQ;AACV;AACA;EACE,aAAa;EACb,kCAAkC;EAClC,mBAAmB;EACnB,kBAAkB;EAClB,QAAQ;AACV;AACA;EACE,eAAe;AACjB;AACA;EACE,eAAe;AACjB;AACA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;AACrB;AACA;EACE,aAAa;EACb,SAAS;EACT,mBAAmB;AACrB;AACA;EACE,aAAa;AACf;AACA;EACE,aAAa;AACf;AACA;EACE,aAAa;AACf;AACA;EACE,cAAc;AAChB;AACA,gDAAgD;AAChD;EACE,cAAc;AAChB;AACA;EACE,aAAa;EACb,4BAA4B;AAC9B;AACA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,mBAAmB;EACnB,YAAY;EACZ,0CAA0C;AAC5C;AACA;EACE,eAAe;AACjB;AACA;EACE,gBAAgB;EAChB,yBAAyB;EACzB,SAAS;EACT,aAAa;EACb,mBAAmB;EACnB,aAAa;EACb,cAAc;EACd,iCAAiC;EACjC,kBAAkB;EAClB,aAAa;EACb,qBAAqB;AACvB;AACA;EACE,WAAW;EACX,aAAa;EACb,cAAc;EACd,mBAAmB;EACnB,uCAAuC;EACvC,6BAA6B;EAC7B,6BAA6B;EAC7B,uEAAuE;AACzE;;AAEA;EACE,mBAAmB;AACrB;AACA;IACI,YAAY;AAChB;AACA;EACE,cAAc;AAChB;AACA;EACE,aAAa;EACb,WAAW,EAAE,eAAe;EAC5B,YAAY;EACZ,kBAAkB;EAClB,MAAM;EACN,OAAO;EACP,sCAAsC;EACtC,qBAAqB;AACvB;AACA;EACE,iCAAiC;IAC/B,aAAa;IACb,mBAAmB;IACnB,8BAA8B;IAC9B,aAAa;IACb,mBAAmB;IACnB,YAAY;IACZ,WAAW;IACX,sBAAsB;IACtB,kBAAkB;IAClB,qBAAqB;IACrB,yCAAyC;IACzC,mCAAmC;IACnC,eAAe;AACnB","sourcesContent":[":root {\n  font-family: sans-serif;\n  font-size: 16px;\n\n  --bgColor1: #15202b;\n  --bgColor2: #192734;\n  --bgColor3: #22303c;\n  --bgColorPopUp: #273746;\n  --textColor: #eaebec;\n  --accent: #2abd67;\n  --accentDark: #1f8d4d;\n}\n.material-symbols-outlined {\n  font-variation-settings: \"FILL\" 0, \"wght\" 400, \"GRAD\" 0, \"opsz\" 48;\n}\n/* css when light mode is turned on */\nbody.light {\n  --bgColor2: #ececec;\n  --bgColor3: #f2f3f5;\n  --bgColor1: #fefcfe;\n  --bgColorPopUp: #f3f1f3;\n  --textColor: #374958;\n  --accentDark: #aeedc8;\n}\nbody {\n  background-color: var(--bgColor1);\n  height: 100vh;\n  color: var(--textColor);\n}\n.container {\n  display: grid;\n  grid-template-rows: 1fr 5fr;\n  grid-template-columns: 1fr 5fr;\n  min-width: 100vw;\n  min-height: 100vh;\n}\n.header {\n  grid-column: 1/-1;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0px 60px 0px 60px;\n  background-color: var(--bgColor2);\n}\n.logo {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 40px;\n  font-weight: 900;\n}\n#logo {\n  font-size: 40px;\n}\n\n.sidebar.active{\n  visibility: hidden;\n}\n.sidebar {\n  grid-row: 2/-1;\n  background-color: var(--bgColor3);\n  display: grid;\n  grid-template-rows: auto 1fr;\n  padding-left: 10px;\n  padding-top: 20px;\n  gap: 20px;\n}\nbutton {\n  border: none;\n  color: inherit;\n  background-color: inherit;\n  cursor: pointer;\n  outline: inherit;\n}\nbutton:hover {\n  background-color: var(--bgColor1);\n}\n.sideTop {\n  display: grid;\n  gap: 20px;\n}\n.sideItem,\n.addTask {\n  font-size: 15px;\n  background-color: var(--bgColor3);\n  display: grid;\n  grid-template-columns: 50px 100px;\n  gap: 15px;\n  align-items: center;\n  justify-items: start;\n  border-radius: 20px;\n  height: 35px;\n}\n.projectContainer > *.sideItem {\n  grid-template-columns: 50px 100px 1fr;\n}\n.projectContainer > .sideItem > span:last-child {\n  justify-self: end;\n  padding-right: 20px;\n  display: none;\n}\n.projectContainer > .sideItem:hover span#close {\n  display: block;\n}\n.sideBottom {\n  display: grid;\n  gap: 10px;\n  grid-auto-rows: max-content;\n}\n.sideBottom > .big {\n  font-size: 20px;\n  border-bottom: 2px solid var(--textColor);\n  padding-bottom: 3px;\n}\n.sideBottom > .projectContainer > .sideItem {\n  padding: 0;\n  width: 100%;\n}\n.project-modal {\n  display: none;\n}\n.project-modal.active {\n  display: block;\n}\n\ntextarea {\n  border: none;\n  overflow: auto;\n  outline: none;\n  resize: none; /*remove the resize handle on the bottom right*/\n}\n.input > input,\n.input > textarea {\n  all: unset;\n  min-height: 25px;\n  width: 96%;\n  background-color: var(--bgColor2);\n  border-bottom: 1px solid gray;\n}\n.buttons {\n  display: flex;\n  padding-top: 5px;\n}\n.buttons > button,\n#submit {\n  padding: 5px 15px;\n  border-radius: 20px;\n  background-color: var(--accentDark);\n  color: var(--textColor);\n  font-size: inherit;\n  font-weight: bold;\n}\n.buttons > #cancel,\n#cancel2 {\n  border: 1px solid #ee6d6d;\n  background-color: #ec4141;\n}\n.content {\n  display: grid;\n  grid-auto-rows: max-content;\n  padding: 20px;\n  gap: 20px;\n  justify-items: center;\n}\n.content > .Title {\n  height: 150px;\n  width: 90%;\n  font-size: 40px;\n  padding-left: 20px;\n  justify-self: center;\n  display: flex;\n  align-items: center;\n  background-color: var(--accentDark);\n  border-radius: 30px;\n}\n\nbutton.addTask:hover {\n  background-color: var(--bgColor2);\n}\n.content > .addTask {\n  justify-items: center;\n  width: 80%;\n  justify-self: center;\n}\n.taskModal.active {\n  display: block;\n}\n.taskModal {\n  display: none;\n}\n.taskModal.modal {\n  display: block;\n  transform: translate(-50%, -50%);\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  z-index: 2;\n  transition: 0.2s ease-in-out;\n}\n.modal-container {\n  background-color: var(--bgColor3);\n  display: grid;\n  grid-auto-rows: max-content;\n  gap: 20px;\n  justify-items: start;\n  justify-content: center;\n  font-size: 20px;\n  width: fit-content;\n  padding: 20px;\n  border-radius: 20px;\n}\n.modal-container > .buttons {\n  gap: 15px;\n}\n.input {\n  display: grid;\n  grid-auto-rows: max-content;\n}\n.taskContainer {\n  width: 70%;\n  display:grid;\n  gap:10px;\n}\n.task {\n  display: grid;\n  border: 1px solid var(--textColor);\n  border-radius: 15px;\n  padding: 10px 20px;\n  gap: 5px;\n}\n.task span {\n  cursor: pointer;\n}\nspan:hover{\n  cursor: pointer;\n}\n.task-shown {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.taskLeft {\n  display: flex;\n  gap: 10px;\n  align-items: center;\n}\n.taskRight {\n  display: flex;\n}\n.taskRight > #down.active {\n  display: none;\n}\n.taskRight > #up {\n  display: none;\n}\n.taskRight > #up.active {\n  display: block;\n}\n/*figure out how to add animation dropdown here*/\n.task-hidden.active {\n  display: block;\n}\n.task-hidden {\n  display: none;\n  transition: 0.5s ease-in-out;\n}\n.taskHiddenTop {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-right: 20px;\n  height: 25px;\n  border-bottom: 1px solid var(--accentDark);\n}\n.description {\n  margin-top: 5px;\n}\ninput[type=\"checkbox\"] {\n  appearance: none;\n  background-color: inherit;\n  margin: 0;\n  font: inherit;\n  color: currentColor;\n  width: 1.15em;\n  height: 1.15em;\n  border: 0.15em solid currentColor;\n  border-radius: 50%;\n  display: grid;\n  place-content: center;\n}\ninput[type=\"checkbox\"]::before {\n  content: \"\";\n  width: 0.65em;\n  height: 0.65em;\n  transform: scale(0);\n  transition: 120ms transform ease-in-out;\n  box-shadow: inset 1em 1em red;\n  transform-origin: bottom left;\n  clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);\n}\n\ninput[type=\"checkbox\"]:checked::before {\n  transform: scale(1);\n}\n.addTask.active{\n    display:none;\n}\n.overlay.active {\n  display: block;\n}\n.overlay {\n  display: none;\n  width: 100%; /* Full width */\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  background-color: rgba(9, 13, 14, 0.8);\n  align-content: center;\n}\n.mode{\n  background-color: var(--bgColor1);\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: 10px;\n    border-radius: 50px;\n    height: 40px;\n    width: 80px;\n    box-sizing: border-box;\n    position: relative;\n    transform: scale(0.8);\n    transition: background-color 0.2s ease-in;\n    border: solid 3px var(--accentDark);\n    cursor: pointer;\n}\n"],"sourceRoot":""}]);
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

/***/ "./node_modules/date-fns/esm/compareAsc/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/compareAsc/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ compareAsc)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name compareAsc
 * @category Common Helpers
 * @summary Compare the two dates and return -1, 0 or 1.
 *
 * @description
 * Compare the two dates and return 1 if the first date is after the second,
 * -1 if the first date is before the second or 0 if dates are equal.
 *
 * @param {Date|Number} dateLeft - the first date to compare
 * @param {Date|Number} dateRight - the second date to compare
 * @returns {Number} the result of the comparison
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Compare 11 February 1987 and 10 July 1989:
 * const result = compareAsc(new Date(1987, 1, 11), new Date(1989, 6, 10))
 * //=> -1
 *
 * @example
 * // Sort the array of dates:
 * const result = [
 *   new Date(1995, 6, 2),
 *   new Date(1987, 1, 11),
 *   new Date(1989, 6, 10)
 * ].sort(compareAsc)
 * //=> [
 * //   Wed Feb 11 1987 00:00:00,
 * //   Mon Jul 10 1989 00:00:00,
 * //   Sun Jul 02 1995 00:00:00
 * // ]
 */

function compareAsc(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);
  var dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);
  var diff = dateLeft.getTime() - dateRight.getTime();

  if (diff < 0) {
    return -1;
  } else if (diff > 0) {
    return 1; // Return 0 if diff is 0; return NaN if diff is NaN
  } else {
    return diff;
  }
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
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./storage */ "./src/modules/storage.js");







const UI = (() => {
  function initialUI() {
    initializeEventListeners();
    _storage__WEBPACK_IMPORTED_MODULE_5__["default"].getProjectList();
    const projectTitle = document.querySelector(".Title");
    const name = projectTitle.innerText;
    const project = _projectList__WEBPACK_IMPORTED_MODULE_2__["default"].getProject(name);
    (0,_taskUI__WEBPACK_IMPORTED_MODULE_4__.displayTaskList)(project.getTasks());
    (0,_projectModalUI__WEBPACK_IMPORTED_MODULE_3__.dpl)();
  }
  function addClass(dom){
    return dom.classList.contains('active')?false:
      dom.classList.add('active');
  }
  // main control structure here
  function initializeEventListeners() {
    const menu = document.querySelector('#menu');
    const sideBar = document.querySelector('.sidebar');
    const mode = document.querySelector(".mode");
    const addProject = document.querySelector("#addProject");
    const addTask = document.querySelector(".addTask");
    const Inbox = document.querySelector('[data-title="Inbox"]');
    const Today = document.querySelector('[data-title= "Today"]');
    const thisWeek = document.querySelector('[data-title= "This-Week"]');
    menu.addEventListener('click', ()=>sideBar.classList.toggle('active'));    
    Inbox.addEventListener("click", (e)=>{
      addTask.classList.remove('active');
      (0,_projectModalUI__WEBPACK_IMPORTED_MODULE_3__.goToProject)(e);
    });
    Today.addEventListener("click", (e)=>{
      addClass(addTask);
      _projectList__WEBPACK_IMPORTED_MODULE_2__["default"].updateTodayProject();
      (0,_projectModalUI__WEBPACK_IMPORTED_MODULE_3__.goToProject)(e);
    });
    thisWeek.addEventListener("click", (e)=>{
      addClass(addTask);
      _projectList__WEBPACK_IMPORTED_MODULE_2__["default"].updateWeekProject();
      console.log(_projectList__WEBPACK_IMPORTED_MODULE_2__["default"].getProject("This Week"));
      (0,_projectModalUI__WEBPACK_IMPORTED_MODULE_3__.goToProject)(e);
    });
    mode.addEventListener("click", ()=>{
      document.body.classList.toggle('light');
    });
    addProject.addEventListener("click", _projectModalUI__WEBPACK_IMPORTED_MODULE_3__.dpm);
    addTask.addEventListener("click", _taskUI__WEBPACK_IMPORTED_MODULE_4__.dtm);
    // projectTitle.addEventListener('click', )
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

  setTasks(tasks){
    this.tasks = tasks;
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
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/compareAsc/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/modules/project.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task */ "./src/modules/task.js");





const projectList = (() => {
  let projects = [];
  projects.push(new _project__WEBPACK_IMPORTED_MODULE_0__["default"]("Inbox"));
  projects.push(new _project__WEBPACK_IMPORTED_MODULE_0__["default"]("Today"));
  projects.push(new _project__WEBPACK_IMPORTED_MODULE_0__["default"]("This Week"));
  const getProjects = () => projects;
  const getProject = (projectName) =>
    projects.find((p) => projectName === p.getName());
  const contains = (name) => projects.some((p) => name === p.getName());
  function addProject(newProject) {
    if (contains(newProject.getName())) {
      alert("pls put diff title");
      return false;
    }
    projects.push(newProject);
    return true;
  }
  function removeProject(name) {
    projects = projects.filter((p) => p.getName() !== name);
  }
  function replaceProject(newProject) {
    if (contains(newProject.getName())) {
      removeProject(newProject.getName());
      addProject(newProject);
    } else {
      addProject(newProject);
    }
  }
  function deleteProject(project) {
    projects = projects.filter((p) => p.getName() !== project.getName());
  }
  function updateTodayProject() {
    getProject("Today").tasks = [];
    projects.forEach((project) => {
      if (project.getName() === "Today" || project.getName() === "This Week")
        return;
      const todayTasks = project.getTasksToday();
      todayTasks.forEach((task) => {
        const taskName = `${task.getName()} (${project.getName()})`;
        getProject("Today").addTask(new _task__WEBPACK_IMPORTED_MODULE_1__["default"](taskName, task.getDate()));
      });
    });
  }
  function updateWeekProject() {
    getProject("This Week").tasks = [];
    projects.forEach((project) => {
      if (project.getName() === "Today" || project.getName() === "This Week")
        return;
      const weekTasks = project.getTasksThisWeek();
      weekTasks.forEach((task) => {
        const taskName = `${task.getName()} (${project.getName()})`;
        getProject("This Week").addTask(
          new _task__WEBPACK_IMPORTED_MODULE_1__["default"](taskName, task.getDate())
        );
      });
    });
    getProject("This Week").setTasks(
      getProject("This Week")
        .getTasks()
        .sort((taskA, taskB) =>
          (0,date_fns__WEBPACK_IMPORTED_MODULE_2__["default"])(
            (0,date_fns__WEBPACK_IMPORTED_MODULE_3__["default"])(new Date(taskA.getDateFormatted())),
            (0,date_fns__WEBPACK_IMPORTED_MODULE_3__["default"])(new Date(taskB.getDateFormatted()))
          )
        )
    );
  }

  return {
    getProject,
    getProjects,
    contains,
    addProject,
    deleteProject,
    replaceProject,
    updateWeekProject,
    updateTodayProject,
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
/* harmony export */   "dpl": () => (/* binding */ displayProjectList),
/* harmony export */   "dpm": () => (/* binding */ displayProjectModal),
/* harmony export */   "goToProject": () => (/* binding */ goToProject)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/modules/project.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task */ "./src/modules/task.js");
/* harmony import */ var _projectList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectList */ "./src/modules/projectList.js");
/* harmony import */ var _taskUI__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./taskUI */ "./src/modules/taskUI.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./storage */ "./src/modules/storage.js");







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
  _storage__WEBPACK_IMPORTED_MODULE_4__["default"].setProjectList();
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
  const addTask = document.querySelector(".addTask");
  close.addEventListener('click', removeProject);
  button.addEventListener("click", (e)=>{
    addTask.classList.remove('active');
    goToProject(e);
  });
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
    _storage__WEBPACK_IMPORTED_MODULE_4__["default"].setProjectList();
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

/***/ "./src/modules/storage.js":
/*!********************************!*\
  !*** ./src/modules/storage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Storage)
/* harmony export */ });
/* harmony import */ var _projectList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectList */ "./src/modules/projectList.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ "./src/modules/project.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task */ "./src/modules/task.js");




class Storage {
  static setProjectList() {
    localStorage.setItem("pl", JSON.stringify(_projectList__WEBPACK_IMPORTED_MODULE_0__["default"].getProjects()));
  }

  static getProjectList() {
    const objArray = JSON.parse(localStorage.getItem("pl"));
    if(objArray==null){
      return;
    }
    objArray.forEach((p) => {
      const project2 = new _project__WEBPACK_IMPORTED_MODULE_1__["default"](p.name);
      const taskArray = p.tasks;
      // should draw out solution before attempting
      // newArray is a newArray.
      const newArray = [];
      taskArray.forEach((t) =>{
        const task = new _task__WEBPACK_IMPORTED_MODULE_2__["default"](t.name, t.dueDate, t.description);
        newArray.push(task);
      })
      project2.setTasks(newArray);
      _projectList__WEBPACK_IMPORTED_MODULE_0__["default"].replaceProject(project2);
    });
  }
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
    const day = this.dueDate.split("-")[2];
    const month = this.dueDate.split("-")[1];
    const year = this.dueDate.split("-")[0];
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
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./storage */ "./src/modules/storage.js");





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
  return task;
}
function removeTask(e) {
  const { name } = e.target.dataset;
  const project = getProjectFromTitle();
  const task = project.getTask(name);
  project.removeTask(task);
  _storage__WEBPACK_IMPORTED_MODULE_3__["default"].setProjectList();
  displayTaskList(project.getTasks());
}

function editTask(e) {
  const { name } = e.target.dataset;
  const project = getProjectFromTitle();
  const task = project.getTask(name);

  const taskModal = document.querySelector(".taskModal");
  taskModal.classList.toggle("modal");
  const overlay = document.querySelector(".overlay");
  overlay.classList.toggle("active");
  const taskCancel = document.querySelector("#cancel2");
  taskCancel.onclick = () => {
    taskModal.classList.toggle("modal");
    overlay.classList.toggle("active");
  };
  taskModal.onsubmit = (event) => {
    event.preventDefault();
    const newTask = getTaskFromInput();
    task.setName(newTask.getName());
    task.setDate(newTask.getDate());
    task.setDescription(newTask.getDescription());
    taskModal.classList.toggle("modal");
    overlay.classList.toggle("active");
    displayTaskList(project.getTasks());
    _storage__WEBPACK_IMPORTED_MODULE_3__["default"].setProjectList();
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
    displayTaskList(project.getTasks());
    _storage__WEBPACK_IMPORTED_MODULE_3__["default"].setProjectList();
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

const task1 = new _modules_task_js__WEBPACK_IMPORTED_MODULE_2__["default"]('bob', '2/4/22');
const project = _modules_projectList_js__WEBPACK_IMPORTED_MODULE_3__["default"].getProject('Inbox');
project.addTask(task1);
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


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsc0JBQXNCLE1BQU0sTUFBTSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLE1BQU0sWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxNQUFNLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxLQUFLLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLE1BQU0sWUFBWSxNQUFNLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcs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Ozs7Ozs7Ozs7O0FDQXFCO0FBQ1c7QUFDVztBQUNOO0FBQ2M7QUFDbEI7QUFDakMsWUFBWSxNQUFNOztBQUVsQixrQkFBa0Isd0RBQUk7QUFDdEIsZ0JBQWdCLDBFQUFzQjtBQUN0QztBQUNBLGdFQUFZO0FBQ1o7QUFDQTtBQUNBLGdCQUFnQixNQUFNO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZGVmYXVsdE9wdGlvbnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vYWRkRGF5cy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2NvbXBhcmVBc2MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc1NhbWVEYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc1NhbWVXZWVrL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNUaGlzV2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzVG9kYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9zdGFydE9mRGF5L2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vc3RhcnRPZldlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9zdWJEYXlzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vdG9EYXRlL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL1VJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvcHJvamVjdExpc3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvcHJvamVjdE1vZGFsVUkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy90YXNrLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3Rhc2tVSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG5cXG4gIC0tYmdDb2xvcjE6ICMxNTIwMmI7XFxuICAtLWJnQ29sb3IyOiAjMTkyNzM0O1xcbiAgLS1iZ0NvbG9yMzogIzIyMzAzYztcXG4gIC0tYmdDb2xvclBvcFVwOiAjMjczNzQ2O1xcbiAgLS10ZXh0Q29sb3I6ICNlYWViZWM7XFxuICAtLWFjY2VudDogIzJhYmQ2NztcXG4gIC0tYWNjZW50RGFyazogIzFmOGQ0ZDtcXG59XFxuLm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWQge1xcbiAgZm9udC12YXJpYXRpb24tc2V0dGluZ3M6IFxcXCJGSUxMXFxcIiAwLCBcXFwid2dodFxcXCIgNDAwLCBcXFwiR1JBRFxcXCIgMCwgXFxcIm9wc3pcXFwiIDQ4O1xcbn1cXG4vKiBjc3Mgd2hlbiBsaWdodCBtb2RlIGlzIHR1cm5lZCBvbiAqL1xcbmJvZHkubGlnaHQge1xcbiAgLS1iZ0NvbG9yMjogI2VjZWNlYztcXG4gIC0tYmdDb2xvcjM6ICNmMmYzZjU7XFxuICAtLWJnQ29sb3IxOiAjZmVmY2ZlO1xcbiAgLS1iZ0NvbG9yUG9wVXA6ICNmM2YxZjM7XFxuICAtLXRleHRDb2xvcjogIzM3NDk1ODtcXG4gIC0tYWNjZW50RGFyazogI2FlZWRjODtcXG59XFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZ0NvbG9yMSk7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgY29sb3I6IHZhcigtLXRleHRDb2xvcik7XFxufVxcbi5jb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDVmcjtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDVmcjtcXG4gIG1pbi13aWR0aDogMTAwdnc7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG59XFxuLmhlYWRlciB7XFxuICBncmlkLWNvbHVtbjogMS8tMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMHB4IDYwcHggMHB4IDYwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZ0NvbG9yMik7XFxufVxcbi5sb2dvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxMHB4O1xcbiAgZm9udC1zaXplOiA0MHB4O1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG59XFxuI2xvZ28ge1xcbiAgZm9udC1zaXplOiA0MHB4O1xcbn1cXG5cXG4uc2lkZWJhci5hY3RpdmV7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcbi5zaWRlYmFyIHtcXG4gIGdyaWQtcm93OiAyLy0xO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmdDb2xvcjMpO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnI7XFxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuICBwYWRkaW5nLXRvcDogMjBweDtcXG4gIGdhcDogMjBweDtcXG59XFxuYnV0dG9uIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG91dGxpbmU6IGluaGVyaXQ7XFxufVxcbmJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZ0NvbG9yMSk7XFxufVxcbi5zaWRlVG9wIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBnYXA6IDIwcHg7XFxufVxcbi5zaWRlSXRlbSxcXG4uYWRkVGFzayB7XFxuICBmb250LXNpemU6IDE1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZ0NvbG9yMyk7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1MHB4IDEwMHB4O1xcbiAgZ2FwOiAxNXB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktaXRlbXM6IHN0YXJ0O1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gIGhlaWdodDogMzVweDtcXG59XFxuLnByb2plY3RDb250YWluZXIgPiAqLnNpZGVJdGVtIHtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNTBweCAxMDBweCAxZnI7XFxufVxcbi5wcm9qZWN0Q29udGFpbmVyID4gLnNpZGVJdGVtID4gc3BhbjpsYXN0LWNoaWxkIHtcXG4gIGp1c3RpZnktc2VsZjogZW5kO1xcbiAgcGFkZGluZy1yaWdodDogMjBweDtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5wcm9qZWN0Q29udGFpbmVyID4gLnNpZGVJdGVtOmhvdmVyIHNwYW4jY2xvc2Uge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcbi5zaWRlQm90dG9tIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBnYXA6IDEwcHg7XFxuICBncmlkLWF1dG8tcm93czogbWF4LWNvbnRlbnQ7XFxufVxcbi5zaWRlQm90dG9tID4gLmJpZyB7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tdGV4dENvbG9yKTtcXG4gIHBhZGRpbmctYm90dG9tOiAzcHg7XFxufVxcbi5zaWRlQm90dG9tID4gLnByb2plY3RDb250YWluZXIgPiAuc2lkZUl0ZW0ge1xcbiAgcGFkZGluZzogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4ucHJvamVjdC1tb2RhbCB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4ucHJvamVjdC1tb2RhbC5hY3RpdmUge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbnRleHRhcmVhIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIHJlc2l6ZTogbm9uZTsgLypyZW1vdmUgdGhlIHJlc2l6ZSBoYW5kbGUgb24gdGhlIGJvdHRvbSByaWdodCovXFxufVxcbi5pbnB1dCA+IGlucHV0LFxcbi5pbnB1dCA+IHRleHRhcmVhIHtcXG4gIGFsbDogdW5zZXQ7XFxuICBtaW4taGVpZ2h0OiAyNXB4O1xcbiAgd2lkdGg6IDk2JTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnQ29sb3IyKTtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBncmF5O1xcbn1cXG4uYnV0dG9ucyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcGFkZGluZy10b3A6IDVweDtcXG59XFxuLmJ1dHRvbnMgPiBidXR0b24sXFxuI3N1Ym1pdCB7XFxuICBwYWRkaW5nOiA1cHggMTVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnREYXJrKTtcXG4gIGNvbG9yOiB2YXIoLS10ZXh0Q29sb3IpO1xcbiAgZm9udC1zaXplOiBpbmhlcml0O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcbi5idXR0b25zID4gI2NhbmNlbCxcXG4jY2FuY2VsMiB7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZWU2ZDZkO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VjNDE0MTtcXG59XFxuLmNvbnRlbnQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtYXV0by1yb3dzOiBtYXgtY29udGVudDtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBnYXA6IDIwcHg7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5jb250ZW50ID4gLlRpdGxlIHtcXG4gIGhlaWdodDogMTUwcHg7XFxuICB3aWR0aDogOTAlO1xcbiAgZm9udC1zaXplOiA0MHB4O1xcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudERhcmspO1xcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcXG59XFxuXFxuYnV0dG9uLmFkZFRhc2s6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmdDb2xvcjIpO1xcbn1cXG4uY29udGVudCA+IC5hZGRUYXNrIHtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiA4MCU7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG59XFxuLnRhc2tNb2RhbC5hY3RpdmUge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcbi50YXNrTW9kYWwge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLnRhc2tNb2RhbC5tb2RhbCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICB6LWluZGV4OiAyO1xcbiAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLWluLW91dDtcXG59XFxuLm1vZGFsLWNvbnRhaW5lciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZ0NvbG9yMyk7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC1hdXRvLXJvd3M6IG1heC1jb250ZW50O1xcbiAgZ2FwOiAyMHB4O1xcbiAganVzdGlmeS1pdGVtczogc3RhcnQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbn1cXG4ubW9kYWwtY29udGFpbmVyID4gLmJ1dHRvbnMge1xcbiAgZ2FwOiAxNXB4O1xcbn1cXG4uaW5wdXQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtYXV0by1yb3dzOiBtYXgtY29udGVudDtcXG59XFxuLnRhc2tDb250YWluZXIge1xcbiAgd2lkdGg6IDcwJTtcXG4gIGRpc3BsYXk6Z3JpZDtcXG4gIGdhcDoxMHB4O1xcbn1cXG4udGFzayB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tdGV4dENvbG9yKTtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxuICBnYXA6IDVweDtcXG59XFxuLnRhc2sgc3BhbiB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbnNwYW46aG92ZXJ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi50YXNrLXNob3duIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4udGFza0xlZnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMTBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi50YXNrUmlnaHQge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuLnRhc2tSaWdodCA+ICNkb3duLmFjdGl2ZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4udGFza1JpZ2h0ID4gI3VwIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi50YXNrUmlnaHQgPiAjdXAuYWN0aXZlIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG4vKmZpZ3VyZSBvdXQgaG93IHRvIGFkZCBhbmltYXRpb24gZHJvcGRvd24gaGVyZSovXFxuLnRhc2staGlkZGVuLmFjdGl2ZSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuLnRhc2staGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICB0cmFuc2l0aW9uOiAwLjVzIGVhc2UtaW4tb3V0O1xcbn1cXG4udGFza0hpZGRlblRvcCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XFxuICBoZWlnaHQ6IDI1cHg7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYWNjZW50RGFyayk7XFxufVxcbi5kZXNjcmlwdGlvbiB7XFxuICBtYXJnaW4tdG9wOiA1cHg7XFxufVxcbmlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl0ge1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxuICBtYXJnaW46IDA7XFxuICBmb250OiBpbmhlcml0O1xcbiAgY29sb3I6IGN1cnJlbnRDb2xvcjtcXG4gIHdpZHRoOiAxLjE1ZW07XFxuICBoZWlnaHQ6IDEuMTVlbTtcXG4gIGJvcmRlcjogMC4xNWVtIHNvbGlkIGN1cnJlbnRDb2xvcjtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxufVxcbmlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHdpZHRoOiAwLjY1ZW07XFxuICBoZWlnaHQ6IDAuNjVlbTtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxuICB0cmFuc2l0aW9uOiAxMjBtcyB0cmFuc2Zvcm0gZWFzZS1pbi1vdXQ7XFxuICBib3gtc2hhZG93OiBpbnNldCAxZW0gMWVtIHJlZDtcXG4gIHRyYW5zZm9ybS1vcmlnaW46IGJvdHRvbSBsZWZ0O1xcbiAgY2xpcC1wYXRoOiBwb2x5Z29uKDE0JSA0NCUsIDAgNjUlLCA1MCUgMTAwJSwgMTAwJSAxNiUsIDgwJSAwJSwgNDMlIDYyJSk7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06Y2hlY2tlZDo6YmVmb3JlIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxufVxcbi5hZGRUYXNrLmFjdGl2ZXtcXG4gICAgZGlzcGxheTpub25lO1xcbn1cXG4ub3ZlcmxheS5hY3RpdmUge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcbi5vdmVybGF5IHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICB3aWR0aDogMTAwJTsgLyogRnVsbCB3aWR0aCAqL1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoOSwgMTMsIDE0LCAwLjgpO1xcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbn1cXG4ubW9kZXtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnQ29sb3IxKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIHdpZHRoOiA4MHB4O1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC44KTtcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzIGVhc2UtaW47XFxuICAgIGJvcmRlcjogc29saWQgM3B4IHZhcigtLWFjY2VudERhcmspO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSx1QkFBdUI7RUFDdkIsZUFBZTs7RUFFZixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsb0JBQW9CO0VBQ3BCLGlCQUFpQjtFQUNqQixxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLGtFQUFrRTtBQUNwRTtBQUNBLHFDQUFxQztBQUNyQztFQUNFLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixvQkFBb0I7RUFDcEIscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSxpQ0FBaUM7RUFDakMsYUFBYTtFQUNiLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0UsYUFBYTtFQUNiLDJCQUEyQjtFQUMzQiw4QkFBOEI7RUFDOUIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLDBCQUEwQjtFQUMxQixpQ0FBaUM7QUFDbkM7QUFDQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsU0FBUztFQUNULGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGNBQWM7RUFDZCxpQ0FBaUM7RUFDakMsYUFBYTtFQUNiLDRCQUE0QjtFQUM1QixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLFNBQVM7QUFDWDtBQUNBO0VBQ0UsWUFBWTtFQUNaLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsaUNBQWlDO0FBQ25DO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsU0FBUztBQUNYO0FBQ0E7O0VBRUUsZUFBZTtFQUNmLGlDQUFpQztFQUNqQyxh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QkFBcUI7QUFDdkI7QUFDQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsY0FBYztFQUNkLG1CQUFtQjtFQUNuQix1Q0FBdUM7RUFDdkMsNkJBQTZCO0VBQzdCLDZCQUE2QjtFQUM3Qix1RUFBdUU7QUFDekU7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7QUFDQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGFBQWE7RUFDYixXQUFXLEVBQUUsZUFBZTtFQUM1QixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1Asc0NBQXNDO0VBQ3RDLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UsaUNBQWlDO0lBQy9CLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsOEJBQThCO0lBQzlCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQix5Q0FBeUM7SUFDekMsbUNBQW1DO0lBQ25DLGVBQWU7QUFDbkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDE2cHg7XFxuXFxuICAtLWJnQ29sb3IxOiAjMTUyMDJiO1xcbiAgLS1iZ0NvbG9yMjogIzE5MjczNDtcXG4gIC0tYmdDb2xvcjM6ICMyMjMwM2M7XFxuICAtLWJnQ29sb3JQb3BVcDogIzI3Mzc0NjtcXG4gIC0tdGV4dENvbG9yOiAjZWFlYmVjO1xcbiAgLS1hY2NlbnQ6ICMyYWJkNjc7XFxuICAtLWFjY2VudERhcms6ICMxZjhkNGQ7XFxufVxcbi5tYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkIHtcXG4gIGZvbnQtdmFyaWF0aW9uLXNldHRpbmdzOiBcXFwiRklMTFxcXCIgMCwgXFxcIndnaHRcXFwiIDQwMCwgXFxcIkdSQURcXFwiIDAsIFxcXCJvcHN6XFxcIiA0ODtcXG59XFxuLyogY3NzIHdoZW4gbGlnaHQgbW9kZSBpcyB0dXJuZWQgb24gKi9cXG5ib2R5LmxpZ2h0IHtcXG4gIC0tYmdDb2xvcjI6ICNlY2VjZWM7XFxuICAtLWJnQ29sb3IzOiAjZjJmM2Y1O1xcbiAgLS1iZ0NvbG9yMTogI2ZlZmNmZTtcXG4gIC0tYmdDb2xvclBvcFVwOiAjZjNmMWYzO1xcbiAgLS10ZXh0Q29sb3I6ICMzNzQ5NTg7XFxuICAtLWFjY2VudERhcms6ICNhZWVkYzg7XFxufVxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmdDb2xvcjEpO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGNvbG9yOiB2YXIoLS10ZXh0Q29sb3IpO1xcbn1cXG4uY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciA1ZnI7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA1ZnI7XFxuICBtaW4td2lkdGg6IDEwMHZ3O1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxufVxcbi5oZWFkZXIge1xcbiAgZ3JpZC1jb2x1bW46IDEvLTE7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDBweCA2MHB4IDBweCA2MHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmdDb2xvcjIpO1xcbn1cXG4ubG9nbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMTBweDtcXG4gIGZvbnQtc2l6ZTogNDBweDtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxufVxcbiNsb2dvIHtcXG4gIGZvbnQtc2l6ZTogNDBweDtcXG59XFxuXFxuLnNpZGViYXIuYWN0aXZle1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG4uc2lkZWJhciB7XFxuICBncmlkLXJvdzogMi8tMTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnQ29sb3IzKTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyO1xcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbiAgcGFkZGluZy10b3A6IDIwcHg7XFxuICBnYXA6IDIwcHg7XFxufVxcbmJ1dHRvbiB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBvdXRsaW5lOiBpbmhlcml0O1xcbn1cXG5idXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmdDb2xvcjEpO1xcbn1cXG4uc2lkZVRvcCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ2FwOiAyMHB4O1xcbn1cXG4uc2lkZUl0ZW0sXFxuLmFkZFRhc2sge1xcbiAgZm9udC1zaXplOiAxNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmdDb2xvcjMpO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNTBweCAxMDBweDtcXG4gIGdhcDogMTVweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWl0ZW1zOiBzdGFydDtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBoZWlnaHQ6IDM1cHg7XFxufVxcbi5wcm9qZWN0Q29udGFpbmVyID4gKi5zaWRlSXRlbSB7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDUwcHggMTAwcHggMWZyO1xcbn1cXG4ucHJvamVjdENvbnRhaW5lciA+IC5zaWRlSXRlbSA+IHNwYW46bGFzdC1jaGlsZCB7XFxuICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4ucHJvamVjdENvbnRhaW5lciA+IC5zaWRlSXRlbTpob3ZlciBzcGFuI2Nsb3NlIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG4uc2lkZUJvdHRvbSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ2FwOiAxMHB4O1xcbiAgZ3JpZC1hdXRvLXJvd3M6IG1heC1jb250ZW50O1xcbn1cXG4uc2lkZUJvdHRvbSA+IC5iaWcge1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLXRleHRDb2xvcik7XFxuICBwYWRkaW5nLWJvdHRvbTogM3B4O1xcbn1cXG4uc2lkZUJvdHRvbSA+IC5wcm9qZWN0Q29udGFpbmVyID4gLnNpZGVJdGVtIHtcXG4gIHBhZGRpbmc6IDA7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLnByb2plY3QtbW9kYWwge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLnByb2plY3QtbW9kYWwuYWN0aXZlIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG50ZXh0YXJlYSB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBvdmVyZmxvdzogYXV0bztcXG4gIG91dGxpbmU6IG5vbmU7XFxuICByZXNpemU6IG5vbmU7IC8qcmVtb3ZlIHRoZSByZXNpemUgaGFuZGxlIG9uIHRoZSBib3R0b20gcmlnaHQqL1xcbn1cXG4uaW5wdXQgPiBpbnB1dCxcXG4uaW5wdXQgPiB0ZXh0YXJlYSB7XFxuICBhbGw6IHVuc2V0O1xcbiAgbWluLWhlaWdodDogMjVweDtcXG4gIHdpZHRoOiA5NiU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZ0NvbG9yMik7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgZ3JheTtcXG59XFxuLmJ1dHRvbnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHBhZGRpbmctdG9wOiA1cHg7XFxufVxcbi5idXR0b25zID4gYnV0dG9uLFxcbiNzdWJtaXQge1xcbiAgcGFkZGluZzogNXB4IDE1cHg7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50RGFyayk7XFxuICBjb2xvcjogdmFyKC0tdGV4dENvbG9yKTtcXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG4uYnV0dG9ucyA+ICNjYW5jZWwsXFxuI2NhbmNlbDIge1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2VlNmQ2ZDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlYzQxNDE7XFxufVxcbi5jb250ZW50IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLWF1dG8tcm93czogbWF4LWNvbnRlbnQ7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgZ2FwOiAyMHB4O1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbn1cXG4uY29udGVudCA+IC5UaXRsZSB7XFxuICBoZWlnaHQ6IDE1MHB4O1xcbiAgd2lkdGg6IDkwJTtcXG4gIGZvbnQtc2l6ZTogNDBweDtcXG4gIHBhZGRpbmctbGVmdDogMjBweDtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnREYXJrKTtcXG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxufVxcblxcbmJ1dHRvbi5hZGRUYXNrOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnQ29sb3IyKTtcXG59XFxuLmNvbnRlbnQgPiAuYWRkVGFzayB7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogODAlO1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxufVxcbi50YXNrTW9kYWwuYWN0aXZlIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG4udGFza01vZGFsIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi50YXNrTW9kYWwubW9kYWwge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgei1pbmRleDogMjtcXG4gIHRyYW5zaXRpb246IDAuMnMgZWFzZS1pbi1vdXQ7XFxufVxcbi5tb2RhbC1jb250YWluZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmdDb2xvcjMpO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtYXV0by1yb3dzOiBtYXgtY29udGVudDtcXG4gIGdhcDogMjBweDtcXG4gIGp1c3RpZnktaXRlbXM6IHN0YXJ0O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG59XFxuLm1vZGFsLWNvbnRhaW5lciA+IC5idXR0b25zIHtcXG4gIGdhcDogMTVweDtcXG59XFxuLmlucHV0IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLWF1dG8tcm93czogbWF4LWNvbnRlbnQ7XFxufVxcbi50YXNrQ29udGFpbmVyIHtcXG4gIHdpZHRoOiA3MCU7XFxuICBkaXNwbGF5OmdyaWQ7XFxuICBnYXA6MTBweDtcXG59XFxuLnRhc2sge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXRleHRDb2xvcik7XFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgcGFkZGluZzogMTBweCAyMHB4O1xcbiAgZ2FwOiA1cHg7XFxufVxcbi50YXNrIHNwYW4ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5zcGFuOmhvdmVye1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4udGFzay1zaG93biB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLnRhc2tMZWZ0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDEwcHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4udGFza1JpZ2h0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcbi50YXNrUmlnaHQgPiAjZG93bi5hY3RpdmUge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLnRhc2tSaWdodCA+ICN1cCB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4udGFza1JpZ2h0ID4gI3VwLmFjdGl2ZSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuLypmaWd1cmUgb3V0IGhvdyB0byBhZGQgYW5pbWF0aW9uIGRyb3Bkb3duIGhlcmUqL1xcbi50YXNrLWhpZGRlbi5hY3RpdmUge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcbi50YXNrLWhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgdHJhbnNpdGlvbjogMC41cyBlYXNlLWluLW91dDtcXG59XFxuLnRhc2tIaWRkZW5Ub3Age1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xcbiAgaGVpZ2h0OiAyNXB4O1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWFjY2VudERhcmspO1xcbn1cXG4uZGVzY3JpcHRpb24ge1xcbiAgbWFyZ2luLXRvcDogNXB4O1xcbn1cXG5pbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdIHtcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udDogaW5oZXJpdDtcXG4gIGNvbG9yOiBjdXJyZW50Q29sb3I7XFxuICB3aWR0aDogMS4xNWVtO1xcbiAgaGVpZ2h0OiAxLjE1ZW07XFxuICBib3JkZXI6IDAuMTVlbSBzb2xpZCBjdXJyZW50Q29sb3I7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcGxhY2UtY29udGVudDogY2VudGVyO1xcbn1cXG5pbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICB3aWR0aDogMC42NWVtO1xcbiAgaGVpZ2h0OiAwLjY1ZW07XFxuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xcbiAgdHJhbnNpdGlvbjogMTIwbXMgdHJhbnNmb3JtIGVhc2UtaW4tb3V0O1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMWVtIDFlbSByZWQ7XFxuICB0cmFuc2Zvcm0tb3JpZ2luOiBib3R0b20gbGVmdDtcXG4gIGNsaXAtcGF0aDogcG9seWdvbigxNCUgNDQlLCAwIDY1JSwgNTAlIDEwMCUsIDEwMCUgMTYlLCA4MCUgMCUsIDQzJSA2MiUpO1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmNoZWNrZWQ6OmJlZm9yZSB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbn1cXG4uYWRkVGFzay5hY3RpdmV7XFxuICAgIGRpc3BsYXk6bm9uZTtcXG59XFxuLm92ZXJsYXkuYWN0aXZlIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG4ub3ZlcmxheSB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgd2lkdGg6IDEwMCU7IC8qIEZ1bGwgd2lkdGggKi9cXG4gIGhlaWdodDogMTAwJTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDksIDEzLCAxNCwgMC44KTtcXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLm1vZGV7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZ0NvbG9yMSk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICB3aWR0aDogODBweDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOCk7XFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlLWluO1xcbiAgICBib3JkZXI6IHNvbGlkIDNweCB2YXIoLS1hY2NlbnREYXJrKTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsInZhciBkZWZhdWx0T3B0aW9ucyA9IHt9O1xuZXhwb3J0IGZ1bmN0aW9uIGdldERlZmF1bHRPcHRpb25zKCkge1xuICByZXR1cm4gZGVmYXVsdE9wdGlvbnM7XG59XG5leHBvcnQgZnVuY3Rpb24gc2V0RGVmYXVsdE9wdGlvbnMobmV3T3B0aW9ucykge1xuICBkZWZhdWx0T3B0aW9ucyA9IG5ld09wdGlvbnM7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVxdWlyZWRBcmdzKHJlcXVpcmVkLCBhcmdzKSB7XG4gIGlmIChhcmdzLmxlbmd0aCA8IHJlcXVpcmVkKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihyZXF1aXJlZCArICcgYXJndW1lbnQnICsgKHJlcXVpcmVkID4gMSA/ICdzJyA6ICcnKSArICcgcmVxdWlyZWQsIGJ1dCBvbmx5ICcgKyBhcmdzLmxlbmd0aCArICcgcHJlc2VudCcpO1xuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9JbnRlZ2VyKGRpcnR5TnVtYmVyKSB7XG4gIGlmIChkaXJ0eU51bWJlciA9PT0gbnVsbCB8fCBkaXJ0eU51bWJlciA9PT0gdHJ1ZSB8fCBkaXJ0eU51bWJlciA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm4gTmFOO1xuICB9XG5cbiAgdmFyIG51bWJlciA9IE51bWJlcihkaXJ0eU51bWJlcik7XG5cbiAgaWYgKGlzTmFOKG51bWJlcikpIHtcbiAgICByZXR1cm4gbnVtYmVyO1xuICB9XG5cbiAgcmV0dXJuIG51bWJlciA8IDAgPyBNYXRoLmNlaWwobnVtYmVyKSA6IE1hdGguZmxvb3IobnVtYmVyKTtcbn0iLCJpbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBhZGREYXlzXG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEFkZCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBkYXlzIHRvIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQWRkIHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIGRheXMgdG8gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGJlIGNoYW5nZWRcbiAqIEBwYXJhbSB7TnVtYmVyfSBhbW91bnQgLSB0aGUgYW1vdW50IG9mIGRheXMgdG8gYmUgYWRkZWQuIFBvc2l0aXZlIGRlY2ltYWxzIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5mbG9vcmAsIGRlY2ltYWxzIGxlc3MgdGhhbiB6ZXJvIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5jZWlsYC5cbiAqIEByZXR1cm5zIHtEYXRlfSAtIHRoZSBuZXcgZGF0ZSB3aXRoIHRoZSBkYXlzIGFkZGVkXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IC0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQWRkIDEwIGRheXMgdG8gMSBTZXB0ZW1iZXIgMjAxNDpcbiAqIGNvbnN0IHJlc3VsdCA9IGFkZERheXMobmV3IERhdGUoMjAxNCwgOCwgMSksIDEwKVxuICogLy89PiBUaHUgU2VwIDExIDIwMTQgMDA6MDA6MDBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGREYXlzKGRpcnR5RGF0ZSwgZGlydHlBbW91bnQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBhbW91bnQgPSB0b0ludGVnZXIoZGlydHlBbW91bnQpO1xuXG4gIGlmIChpc05hTihhbW91bnQpKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cblxuICBpZiAoIWFtb3VudCkge1xuICAgIC8vIElmIDAgZGF5cywgbm8tb3AgdG8gYXZvaWQgY2hhbmdpbmcgdGltZXMgaW4gdGhlIGhvdXIgYmVmb3JlIGVuZCBvZiBEU1RcbiAgICByZXR1cm4gZGF0ZTtcbiAgfVxuXG4gIGRhdGUuc2V0RGF0ZShkYXRlLmdldERhdGUoKSArIGFtb3VudCk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgY29tcGFyZUFzY1xuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb21wYXJlIHRoZSB0d28gZGF0ZXMgYW5kIHJldHVybiAtMSwgMCBvciAxLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQ29tcGFyZSB0aGUgdHdvIGRhdGVzIGFuZCByZXR1cm4gMSBpZiB0aGUgZmlyc3QgZGF0ZSBpcyBhZnRlciB0aGUgc2Vjb25kLFxuICogLTEgaWYgdGhlIGZpcnN0IGRhdGUgaXMgYmVmb3JlIHRoZSBzZWNvbmQgb3IgMCBpZiBkYXRlcyBhcmUgZXF1YWwuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZUxlZnQgLSB0aGUgZmlyc3QgZGF0ZSB0byBjb21wYXJlXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlUmlnaHQgLSB0aGUgc2Vjb25kIGRhdGUgdG8gY29tcGFyZVxuICogQHJldHVybnMge051bWJlcn0gdGhlIHJlc3VsdCBvZiB0aGUgY29tcGFyaXNvblxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb21wYXJlIDExIEZlYnJ1YXJ5IDE5ODcgYW5kIDEwIEp1bHkgMTk4OTpcbiAqIGNvbnN0IHJlc3VsdCA9IGNvbXBhcmVBc2MobmV3IERhdGUoMTk4NywgMSwgMTEpLCBuZXcgRGF0ZSgxOTg5LCA2LCAxMCkpXG4gKiAvLz0+IC0xXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFNvcnQgdGhlIGFycmF5IG9mIGRhdGVzOlxuICogY29uc3QgcmVzdWx0ID0gW1xuICogICBuZXcgRGF0ZSgxOTk1LCA2LCAyKSxcbiAqICAgbmV3IERhdGUoMTk4NywgMSwgMTEpLFxuICogICBuZXcgRGF0ZSgxOTg5LCA2LCAxMClcbiAqIF0uc29ydChjb21wYXJlQXNjKVxuICogLy89PiBbXG4gKiAvLyAgIFdlZCBGZWIgMTEgMTk4NyAwMDowMDowMCxcbiAqIC8vICAgTW9uIEp1bCAxMCAxOTg5IDAwOjAwOjAwLFxuICogLy8gICBTdW4gSnVsIDAyIDE5OTUgMDA6MDA6MDBcbiAqIC8vIF1cbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb21wYXJlQXNjKGRpcnR5RGF0ZUxlZnQsIGRpcnR5RGF0ZVJpZ2h0KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZUxlZnQgPSB0b0RhdGUoZGlydHlEYXRlTGVmdCk7XG4gIHZhciBkYXRlUmlnaHQgPSB0b0RhdGUoZGlydHlEYXRlUmlnaHQpO1xuICB2YXIgZGlmZiA9IGRhdGVMZWZ0LmdldFRpbWUoKSAtIGRhdGVSaWdodC5nZXRUaW1lKCk7XG5cbiAgaWYgKGRpZmYgPCAwKSB7XG4gICAgcmV0dXJuIC0xO1xuICB9IGVsc2UgaWYgKGRpZmYgPiAwKSB7XG4gICAgcmV0dXJuIDE7IC8vIFJldHVybiAwIGlmIGRpZmYgaXMgMDsgcmV0dXJuIE5hTiBpZiBkaWZmIGlzIE5hTlxuICB9IGVsc2Uge1xuICAgIHJldHVybiBkaWZmO1xuICB9XG59IiwiaW1wb3J0IHN0YXJ0T2ZEYXkgZnJvbSBcIi4uL3N0YXJ0T2ZEYXkvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzU2FtZURheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBBcmUgdGhlIGdpdmVuIGRhdGVzIGluIHRoZSBzYW1lIGRheSAoYW5kIHllYXIgYW5kIG1vbnRoKT9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgaW4gdGhlIHNhbWUgZGF5IChhbmQgeWVhciBhbmQgbW9udGgpP1xuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVMZWZ0IC0gdGhlIGZpcnN0IGRhdGUgdG8gY2hlY2tcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVSaWdodCAtIHRoZSBzZWNvbmQgZGF0ZSB0byBjaGVja1xuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlcyBhcmUgaW4gdGhlIHNhbWUgZGF5IChhbmQgeWVhciBhbmQgbW9udGgpXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSA0IFNlcHRlbWJlciAwNjowMDowMCBhbmQgNCBTZXB0ZW1iZXIgMTg6MDA6MDAgaW4gdGhlIHNhbWUgZGF5P1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDQsIDYsIDApLCBuZXcgRGF0ZSgyMDE0LCA4LCA0LCAxOCwgMCkpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDQgU2VwdGVtYmVyIGFuZCA0IE9jdG9iZXIgaW4gdGhlIHNhbWUgZGF5P1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDQpLCBuZXcgRGF0ZSgyMDE0LCA5LCA0KSlcbiAqIC8vPT4gZmFsc2VcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDQgU2VwdGVtYmVyLCAyMDE0IGFuZCA0IFNlcHRlbWJlciwgMjAxNSBpbiB0aGUgc2FtZSBkYXk/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVEYXkobmV3IERhdGUoMjAxNCwgOCwgNCksIG5ldyBEYXRlKDIwMTUsIDgsIDQpKVxuICogLy89PiBmYWxzZVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzU2FtZURheShkaXJ0eURhdGVMZWZ0LCBkaXJ0eURhdGVSaWdodCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGVMZWZ0U3RhcnRPZkRheSA9IHN0YXJ0T2ZEYXkoZGlydHlEYXRlTGVmdCk7XG4gIHZhciBkYXRlUmlnaHRTdGFydE9mRGF5ID0gc3RhcnRPZkRheShkaXJ0eURhdGVSaWdodCk7XG4gIHJldHVybiBkYXRlTGVmdFN0YXJ0T2ZEYXkuZ2V0VGltZSgpID09PSBkYXRlUmlnaHRTdGFydE9mRGF5LmdldFRpbWUoKTtcbn0iLCJpbXBvcnQgc3RhcnRPZldlZWsgZnJvbSBcIi4uL3N0YXJ0T2ZXZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuXG4vKipcbiAqIEBuYW1lIGlzU2FtZVdlZWtcbiAqIEBjYXRlZ29yeSBXZWVrIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgaW4gdGhlIHNhbWUgd2VlayAoYW5kIG1vbnRoIGFuZCB5ZWFyKT9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgaW4gdGhlIHNhbWUgd2VlayAoYW5kIG1vbnRoIGFuZCB5ZWFyKT9cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlTGVmdCAtIHRoZSBmaXJzdCBkYXRlIHRvIGNoZWNrXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlUmlnaHQgLSB0aGUgc2Vjb25kIGRhdGUgdG8gY2hlY2tcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSBhbiBvYmplY3Qgd2l0aCBvcHRpb25zLlxuICogQHBhcmFtIHtMb2NhbGV9IFtvcHRpb25zLmxvY2FsZT1kZWZhdWx0TG9jYWxlXSAtIHRoZSBsb2NhbGUgb2JqZWN0LiBTZWUgW0xvY2FsZV17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9Mb2NhbGV9XG4gKiBAcGFyYW0gezB8MXwyfDN8NHw1fDZ9IFtvcHRpb25zLndlZWtTdGFydHNPbj0wXSAtIHRoZSBpbmRleCBvZiB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrICgwIC0gU3VuZGF5KVxuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlcyBhcmUgaW4gdGhlIHNhbWUgd2VlayAoYW5kIG1vbnRoIGFuZCB5ZWFyKVxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMud2Vla1N0YXJ0c09uYCBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgMzEgQXVndXN0IDIwMTQgYW5kIDQgU2VwdGVtYmVyIDIwMTQgaW4gdGhlIHNhbWUgd2Vlaz9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZVdlZWsobmV3IERhdGUoMjAxNCwgNywgMzEpLCBuZXcgRGF0ZSgyMDE0LCA4LCA0KSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB3ZWVrIHN0YXJ0cyB3aXRoIE1vbmRheSxcbiAqIC8vIGFyZSAzMSBBdWd1c3QgMjAxNCBhbmQgNCBTZXB0ZW1iZXIgMjAxNCBpbiB0aGUgc2FtZSB3ZWVrP1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lV2VlayhuZXcgRGF0ZSgyMDE0LCA3LCAzMSksIG5ldyBEYXRlKDIwMTQsIDgsIDQpLCB7XG4gKiAgIHdlZWtTdGFydHNPbjogMVxuICogfSlcbiAqIC8vPT4gZmFsc2VcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDEgSmFudWFyeSAyMDE0IGFuZCAxIEphbnVhcnkgMjAxNSBpbiB0aGUgc2FtZSB3ZWVrP1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lV2VlayhuZXcgRGF0ZSgyMDE0LCAwLCAxKSwgbmV3IERhdGUoMjAxNSwgMCwgMSkpXG4gKiAvLz0+IGZhbHNlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzU2FtZVdlZWsoZGlydHlEYXRlTGVmdCwgZGlydHlEYXRlUmlnaHQsIG9wdGlvbnMpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlTGVmdFN0YXJ0T2ZXZWVrID0gc3RhcnRPZldlZWsoZGlydHlEYXRlTGVmdCwgb3B0aW9ucyk7XG4gIHZhciBkYXRlUmlnaHRTdGFydE9mV2VlayA9IHN0YXJ0T2ZXZWVrKGRpcnR5RGF0ZVJpZ2h0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGRhdGVMZWZ0U3RhcnRPZldlZWsuZ2V0VGltZSgpID09PSBkYXRlUmlnaHRTdGFydE9mV2Vlay5nZXRUaW1lKCk7XG59IiwiaW1wb3J0IGlzU2FtZVdlZWsgZnJvbSBcIi4uL2lzU2FtZVdlZWsvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5cbi8qKlxuICogQG5hbWUgaXNUaGlzV2Vla1xuICogQGNhdGVnb3J5IFdlZWsgSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIGRhdGUgaW4gdGhlIHNhbWUgd2VlayBhcyB0aGUgY3VycmVudCBkYXRlP1xuICogQHB1cmUgZmFsc2VcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIElzIHRoZSBnaXZlbiBkYXRlIGluIHRoZSBzYW1lIHdlZWsgYXMgdGhlIGN1cnJlbnQgZGF0ZT9cbiAqXG4gKiA+IOKaoO+4jyBQbGVhc2Ugbm90ZSB0aGF0IHRoaXMgZnVuY3Rpb24gaXMgbm90IHByZXNlbnQgaW4gdGhlIEZQIHN1Ym1vZHVsZSBhc1xuICogPiBpdCB1c2VzIGBEYXRlLm5vdygpYCBpbnRlcm5hbGx5IGhlbmNlIGltcHVyZSBhbmQgY2FuJ3QgYmUgc2FmZWx5IGN1cnJpZWQuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGNoZWNrXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gdGhlIG9iamVjdCB3aXRoIG9wdGlvbnNcbiAqIEBwYXJhbSB7TG9jYWxlfSBbb3B0aW9ucy5sb2NhbGU9ZGVmYXVsdExvY2FsZV0gLSB0aGUgbG9jYWxlIG9iamVjdC4gU2VlIFtMb2NhbGVde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvTG9jYWxlfVxuICogQHBhcmFtIHswfDF8MnwzfDR8NXw2fSBbb3B0aW9ucy53ZWVrU3RhcnRzT249MF0gLSB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2VlayAoMCAtIFN1bmRheSlcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZSBpcyBpbiB0aGlzIHdlZWtcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMud2Vla1N0YXJ0c09uYCBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0b2RheSBpcyAyNSBTZXB0ZW1iZXIgMjAxNCwgaXMgMjEgU2VwdGVtYmVyIDIwMTQgaW4gdGhpcyB3ZWVrP1xuICogY29uc3QgcmVzdWx0ID0gaXNUaGlzV2VlayhuZXcgRGF0ZSgyMDE0LCA4LCAyMSkpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdG9kYXkgaXMgMjUgU2VwdGVtYmVyIDIwMTQgYW5kIHdlZWsgc3RhcnRzIHdpdGggTW9uZGF5XG4gKiAvLyBpcyAyMSBTZXB0ZW1iZXIgMjAxNCBpbiB0aGlzIHdlZWs/XG4gKiBjb25zdCByZXN1bHQgPSBpc1RoaXNXZWVrKG5ldyBEYXRlKDIwMTQsIDgsIDIxKSwgeyB3ZWVrU3RhcnRzT246IDEgfSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNUaGlzV2VlayhkaXJ0eURhdGUsIG9wdGlvbnMpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHJldHVybiBpc1NhbWVXZWVrKGRpcnR5RGF0ZSwgRGF0ZS5ub3coKSwgb3B0aW9ucyk7XG59IiwiaW1wb3J0IGlzU2FtZURheSBmcm9tIFwiLi4vaXNTYW1lRGF5L2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc1RvZGF5XG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiBkYXRlIHRvZGF5P1xuICogQHB1cmUgZmFsc2VcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIElzIHRoZSBnaXZlbiBkYXRlIHRvZGF5P1xuICpcbiAqID4g4pqg77iPIFBsZWFzZSBub3RlIHRoYXQgdGhpcyBmdW5jdGlvbiBpcyBub3QgcHJlc2VudCBpbiB0aGUgRlAgc3VibW9kdWxlIGFzXG4gKiA+IGl0IHVzZXMgYERhdGUubm93KClgIGludGVybmFsbHkgaGVuY2UgaW1wdXJlIGFuZCBjYW4ndCBiZSBzYWZlbHkgY3VycmllZC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZSBpcyB0b2RheVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRvZGF5IGlzIDYgT2N0b2JlciAyMDE0LCBpcyA2IE9jdG9iZXIgMTQ6MDA6MDAgdG9kYXk/XG4gKiBjb25zdCByZXN1bHQgPSBpc1RvZGF5KG5ldyBEYXRlKDIwMTQsIDksIDYsIDE0LCAwKSlcbiAqIC8vPT4gdHJ1ZVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzVG9kYXkoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICByZXR1cm4gaXNTYW1lRGF5KGRpcnR5RGF0ZSwgRGF0ZS5ub3coKSk7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBzdGFydE9mRGF5XG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgc3RhcnQgb2YgYSBkYXkgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBzdGFydCBvZiBhIGRheSBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgb3JpZ2luYWwgZGF0ZVxuICogQHJldHVybnMge0RhdGV9IHRoZSBzdGFydCBvZiBhIGRheVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBzdGFydCBvZiBhIGRheSBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZEYXkobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSlcbiAqIC8vPT4gVHVlIFNlcCAwMiAyMDE0IDAwOjAwOjAwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZkRheShkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIGRhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgeyBnZXREZWZhdWx0T3B0aW9ucyB9IGZyb20gXCIuLi9fbGliL2RlZmF1bHRPcHRpb25zL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHN0YXJ0T2ZXZWVrXG4gKiBAY2F0ZWdvcnkgV2VlayBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgd2VlayBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgd2VlayBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgb3JpZ2luYWwgZGF0ZVxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIGFuIG9iamVjdCB3aXRoIG9wdGlvbnMuXG4gKiBAcGFyYW0ge0xvY2FsZX0gW29wdGlvbnMubG9jYWxlPWRlZmF1bHRMb2NhbGVdIC0gdGhlIGxvY2FsZSBvYmplY3QuIFNlZSBbTG9jYWxlXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL0xvY2FsZX1cbiAqIEBwYXJhbSB7MHwxfDJ8M3w0fDV8Nn0gW29wdGlvbnMud2Vla1N0YXJ0c09uPTBdIC0gdGhlIGluZGV4IG9mIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsgKDAgLSBTdW5kYXkpXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHN0YXJ0IG9mIGEgd2Vla1xuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy53ZWVrU3RhcnRzT25gIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBzdGFydCBvZiBhIHdlZWsgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mV2VlayhuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApKVxuICogLy89PiBTdW4gQXVnIDMxIDIwMTQgMDA6MDA6MDBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdGhlIHdlZWsgc3RhcnRzIG9uIE1vbmRheSwgdGhlIHN0YXJ0IG9mIHRoZSB3ZWVrIGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZldlZWsobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSwgeyB3ZWVrU3RhcnRzT246IDEgfSlcbiAqIC8vPT4gTW9uIFNlcCAwMSAyMDE0IDAwOjAwOjAwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZldlZWsoZGlydHlEYXRlLCBvcHRpb25zKSB7XG4gIHZhciBfcmVmLCBfcmVmMiwgX3JlZjMsIF9vcHRpb25zJHdlZWtTdGFydHNPbiwgX29wdGlvbnMkbG9jYWxlLCBfb3B0aW9ucyRsb2NhbGUkb3B0aW8sIF9kZWZhdWx0T3B0aW9ucyRsb2NhbCwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMjtcblxuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRlZmF1bHRPcHRpb25zID0gZ2V0RGVmYXVsdE9wdGlvbnMoKTtcbiAgdmFyIHdlZWtTdGFydHNPbiA9IHRvSW50ZWdlcigoX3JlZiA9IChfcmVmMiA9IChfcmVmMyA9IChfb3B0aW9ucyR3ZWVrU3RhcnRzT24gPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfb3B0aW9ucyR3ZWVrU3RhcnRzT24gIT09IHZvaWQgMCA/IF9vcHRpb25zJHdlZWtTdGFydHNPbiA6IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZSA9IG9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUkb3B0aW8gPSBfb3B0aW9ucyRsb2NhbGUub3B0aW9ucykgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlJG9wdGlvID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfb3B0aW9ucyRsb2NhbGUkb3B0aW8ud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmMyAhPT0gdm9pZCAwID8gX3JlZjMgOiBkZWZhdWx0T3B0aW9ucy53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9yZWYyICE9PSB2b2lkIDAgPyBfcmVmMiA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPSBkZWZhdWx0T3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPSBfZGVmYXVsdE9wdGlvbnMkbG9jYWwub3B0aW9ucykgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2RlZmF1bHRPcHRpb25zJGxvY2FsMi53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9yZWYgIT09IHZvaWQgMCA/IF9yZWYgOiAwKTsgLy8gVGVzdCBpZiB3ZWVrU3RhcnRzT24gaXMgYmV0d2VlbiAwIGFuZCA2IF9hbmRfIGlzIG5vdCBOYU5cblxuICBpZiAoISh3ZWVrU3RhcnRzT24gPj0gMCAmJiB3ZWVrU3RhcnRzT24gPD0gNikpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignd2Vla1N0YXJ0c09uIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2IGluY2x1c2l2ZWx5Jyk7XG4gIH1cblxuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgZGF5ID0gZGF0ZS5nZXREYXkoKTtcbiAgdmFyIGRpZmYgPSAoZGF5IDwgd2Vla1N0YXJ0c09uID8gNyA6IDApICsgZGF5IC0gd2Vla1N0YXJ0c09uO1xuICBkYXRlLnNldERhdGUoZGF0ZS5nZXREYXRlKCkgLSBkaWZmKTtcbiAgZGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IGFkZERheXMgZnJvbSBcIi4uL2FkZERheXMvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBzdWJEYXlzXG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFN1YnRyYWN0IHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIGRheXMgZnJvbSB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFN1YnRyYWN0IHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIGRheXMgZnJvbSB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gYmUgY2hhbmdlZFxuICogQHBhcmFtIHtOdW1iZXJ9IGFtb3VudCAtIHRoZSBhbW91bnQgb2YgZGF5cyB0byBiZSBzdWJ0cmFjdGVkLiBQb3NpdGl2ZSBkZWNpbWFscyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguZmxvb3JgLCBkZWNpbWFscyBsZXNzIHRoYW4gemVybyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguY2VpbGAuXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIG5ldyBkYXRlIHdpdGggdGhlIGRheXMgc3VidHJhY3RlZFxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBTdWJ0cmFjdCAxMCBkYXlzIGZyb20gMSBTZXB0ZW1iZXIgMjAxNDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN1YkRheXMobmV3IERhdGUoMjAxNCwgOCwgMSksIDEwKVxuICogLy89PiBGcmkgQXVnIDIyIDIwMTQgMDA6MDA6MDBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdWJEYXlzKGRpcnR5RGF0ZSwgZGlydHlBbW91bnQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBhbW91bnQgPSB0b0ludGVnZXIoZGlydHlBbW91bnQpO1xuICByZXR1cm4gYWRkRGF5cyhkaXJ0eURhdGUsIC1hbW91bnQpO1xufSIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgdG9EYXRlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhbiBpbnN0YW5jZSBvZiBEYXRlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBpdHMgY2xvbmUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGEgbnVtYmVyLCBpdCBpcyB0cmVhdGVkIGFzIGEgdGltZXN0YW1wLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBub25lIG9mIHRoZSBhYm92ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgSW52YWxpZCBEYXRlLlxuICpcbiAqICoqTm90ZSoqOiAqYWxsKiBEYXRlIGFyZ3VtZW50cyBwYXNzZWQgdG8gYW55ICpkYXRlLWZucyogZnVuY3Rpb24gaXMgcHJvY2Vzc2VkIGJ5IGB0b0RhdGVgLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGFyZ3VtZW50IC0gdGhlIHZhbHVlIHRvIGNvbnZlcnRcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgcGFyc2VkIGRhdGUgaW4gdGhlIGxvY2FsIHRpbWUgem9uZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENsb25lIHRoZSBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKG5ldyBEYXRlKDIwMTQsIDEsIDExLCAxMSwgMzAsIDMwKSlcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgdGhlIHRpbWVzdGFtcCB0byBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKDEzOTIwOTg0MzAwMDApXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvRGF0ZShhcmd1bWVudCkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGFyZ1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudCk7IC8vIENsb25lIHRoZSBkYXRlXG5cbiAgaWYgKGFyZ3VtZW50IGluc3RhbmNlb2YgRGF0ZSB8fCBfdHlwZW9mKGFyZ3VtZW50KSA9PT0gJ29iamVjdCcgJiYgYXJnU3RyID09PSAnW29iamVjdCBEYXRlXScpIHtcbiAgICAvLyBQcmV2ZW50IHRoZSBkYXRlIHRvIGxvc2UgdGhlIG1pbGxpc2Vjb25kcyB3aGVuIHBhc3NlZCB0byBuZXcgRGF0ZSgpIGluIElFMTBcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQuZ2V0VGltZSgpKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgYXJndW1lbnQgPT09ICdudW1iZXInIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgTnVtYmVyXScpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQpO1xuICB9IGVsc2Uge1xuICAgIGlmICgodHlwZW9mIGFyZ3VtZW50ID09PSAnc3RyaW5nJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IFN0cmluZ10nKSAmJiB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLndhcm4oXCJTdGFydGluZyB3aXRoIHYyLjAuMC1iZXRhLjEgZGF0ZS1mbnMgZG9lc24ndCBhY2NlcHQgc3RyaW5ncyBhcyBkYXRlIGFyZ3VtZW50cy4gUGxlYXNlIHVzZSBgcGFyc2VJU09gIHRvIHBhcnNlIHN0cmluZ3MuIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI3N0cmluZy1hcmd1bWVudHNcIik7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG5cbiAgICAgIGNvbnNvbGUud2FybihuZXcgRXJyb3IoKS5zdGFjayk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cbn0iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IFByb2plY3QgZnJvbSBcIi4vcHJvamVjdFwiO1xuaW1wb3J0IFRhc2sgZnJvbSBcIi4vdGFza1wiO1xuaW1wb3J0IHByb2plY3RMaXN0IGZyb20gXCIuL3Byb2plY3RMaXN0XCI7XG5pbXBvcnQgeyBnb1RvUHJvamVjdCwgZHBtLCBkcGx9IGZyb20gXCIuL3Byb2plY3RNb2RhbFVJXCI7XG5pbXBvcnQge2R0bSwgZGlzcGxheVRhc2tMaXN0fSBmcm9tIFwiLi90YXNrVUlcIjtcbmltcG9ydCBTdG9yYWdlIGZyb20gJy4vc3RvcmFnZSc7XG5cbmNvbnN0IFVJID0gKCgpID0+IHtcbiAgZnVuY3Rpb24gaW5pdGlhbFVJKCkge1xuICAgIGluaXRpYWxpemVFdmVudExpc3RlbmVycygpO1xuICAgIFN0b3JhZ2UuZ2V0UHJvamVjdExpc3QoKTtcbiAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLlRpdGxlXCIpO1xuICAgIGNvbnN0IG5hbWUgPSBwcm9qZWN0VGl0bGUuaW5uZXJUZXh0O1xuICAgIGNvbnN0IHByb2plY3QgPSBwcm9qZWN0TGlzdC5nZXRQcm9qZWN0KG5hbWUpO1xuICAgIGRpc3BsYXlUYXNrTGlzdChwcm9qZWN0LmdldFRhc2tzKCkpO1xuICAgIGRwbCgpO1xuICB9XG4gIGZ1bmN0aW9uIGFkZENsYXNzKGRvbSl7XG4gICAgcmV0dXJuIGRvbS5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpP2ZhbHNlOlxuICAgICAgZG9tLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICB9XG4gIC8vIG1haW4gY29udHJvbCBzdHJ1Y3R1cmUgaGVyZVxuICBmdW5jdGlvbiBpbml0aWFsaXplRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgY29uc3QgbWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtZW51Jyk7XG4gICAgY29uc3Qgc2lkZUJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyJyk7XG4gICAgY29uc3QgbW9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kZVwiKTtcbiAgICBjb25zdCBhZGRQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGRQcm9qZWN0XCIpO1xuICAgIGNvbnN0IGFkZFRhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZFRhc2tcIik7XG4gICAgY29uc3QgSW5ib3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS10aXRsZT1cIkluYm94XCJdJyk7XG4gICAgY29uc3QgVG9kYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS10aXRsZT0gXCJUb2RheVwiXScpO1xuICAgIGNvbnN0IHRoaXNXZWVrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtdGl0bGU9IFwiVGhpcy1XZWVrXCJdJyk7XG4gICAgbWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT5zaWRlQmFyLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpKTsgICAgXG4gICAgSW5ib3guYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKT0+e1xuICAgICAgYWRkVGFzay5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgIGdvVG9Qcm9qZWN0KGUpO1xuICAgIH0pO1xuICAgIFRvZGF5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSk9PntcbiAgICAgIGFkZENsYXNzKGFkZFRhc2spO1xuICAgICAgcHJvamVjdExpc3QudXBkYXRlVG9kYXlQcm9qZWN0KCk7XG4gICAgICBnb1RvUHJvamVjdChlKTtcbiAgICB9KTtcbiAgICB0aGlzV2Vlay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpPT57XG4gICAgICBhZGRDbGFzcyhhZGRUYXNrKTtcbiAgICAgIHByb2plY3RMaXN0LnVwZGF0ZVdlZWtQcm9qZWN0KCk7XG4gICAgICBjb25zb2xlLmxvZyhwcm9qZWN0TGlzdC5nZXRQcm9qZWN0KFwiVGhpcyBXZWVrXCIpKTtcbiAgICAgIGdvVG9Qcm9qZWN0KGUpO1xuICAgIH0pO1xuICAgIG1vZGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpPT57XG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC50b2dnbGUoJ2xpZ2h0Jyk7XG4gICAgfSk7XG4gICAgYWRkUHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZHBtKTtcbiAgICBhZGRUYXNrLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkdG0pO1xuICAgIC8vIHByb2plY3RUaXRsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIClcbiAgfVxuICByZXR1cm4ge1xuICAgIGluaXRpYWxVSSxcbiAgfTtcbn0pKCk7XG5leHBvcnQgZGVmYXVsdCBVSTtcbiIsImltcG9ydCB7IHRvRGF0ZSwgaXNUb2RheSwgaXNUaGlzV2Vlaywgc3ViRGF5cyB9IGZyb20gXCJkYXRlLWZuc1wiO1xuXG5jbGFzcyBwcm9qZWN0IHtcbiAgY29uc3RydWN0b3IobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy50YXNrcyA9IFtdO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgc2V0TmFtZShuYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgfVxuXG4gIGdldFRhc2tzKCkge1xuICAgIHJldHVybiB0aGlzLnRhc2tzO1xuICB9XG5cbiAgc2V0VGFza3ModGFza3Mpe1xuICAgIHRoaXMudGFza3MgPSB0YXNrcztcbiAgfVxuXG4gIGdldFRhc2sobmFtZSl7XG4gICAgcmV0dXJuIHRoaXMudGFza3MuZmluZCgodCk9PnQuZ2V0TmFtZSgpID09PSBuYW1lKTtcbiAgfVxuICBcbiAgY29udGFpbnModGFzaykge1xuICAgIHJldHVybiB0aGlzLnRhc2tzLnNvbWUoKHQpID0+IHRhc2suZ2V0TmFtZSgpID09PSB0LmdldE5hbWUoKSk7XG4gIH1cblxuICBhZGRUYXNrKHRhc2spIHtcbiAgICBpZiAodGhpcy5jb250YWlucyh0YXNrKSkge1xuICAgICAgYWxlcnQoXCJwdXQgZGlmZmVyZW50IHRpdGxlIGZvciB0YXNrXCIpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICB0aGlzLnRhc2tzLnB1c2godGFzayk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICByZW1vdmVUYXNrKHRhc2spIHtcbiAgICB0aGlzLnRhc2tzID0gdGhpcy50YXNrcy5maWx0ZXIoKHQpID0+IHQuZ2V0TmFtZSgpICE9PSB0YXNrLmdldE5hbWUoKSk7XG4gIH1cblxuICBnZXRUYXNrc1RvZGF5KCkge1xuICAgIHJldHVybiB0aGlzLnRhc2tzLmZpbHRlcigodGFzaykgPT4ge1xuICAgICAgY29uc3QgdGFza0RhdGUgPSBuZXcgRGF0ZSh0YXNrLmdldERhdGVGb3JtYXR0ZWQoKSk7XG4gICAgICByZXR1cm4gaXNUb2RheSh0b0RhdGUodGFza0RhdGUpKTtcbiAgICB9KTtcbiAgfVxuXG4gIGdldFRhc2tzVGhpc1dlZWsoKSB7XG4gICAgcmV0dXJuIHRoaXMudGFza3MuZmlsdGVyKCh0YXNrKSA9PiB7XG4gICAgICBjb25zdCB0YXNrRGF0ZSA9IG5ldyBEYXRlKHRhc2suZ2V0RGF0ZUZvcm1hdHRlZCgpKTtcbiAgICAgIHJldHVybiBpc1RoaXNXZWVrKHN1YkRheXModG9EYXRlKHRhc2tEYXRlKSwgMSkpO1xuICAgIH0pO1xuICB9XG59XG5leHBvcnQgZGVmYXVsdCBwcm9qZWN0O1xuIiwiaW1wb3J0IHsgY29tcGFyZUFzYywgdG9EYXRlIH0gZnJvbSAnZGF0ZS1mbnMnXG5pbXBvcnQgUHJvamVjdCBmcm9tIFwiLi9wcm9qZWN0XCI7XG5pbXBvcnQgVGFzayBmcm9tIFwiLi90YXNrXCI7XG5cblxuY29uc3QgcHJvamVjdExpc3QgPSAoKCkgPT4ge1xuICBsZXQgcHJvamVjdHMgPSBbXTtcbiAgcHJvamVjdHMucHVzaChuZXcgUHJvamVjdChcIkluYm94XCIpKTtcbiAgcHJvamVjdHMucHVzaChuZXcgUHJvamVjdChcIlRvZGF5XCIpKTtcbiAgcHJvamVjdHMucHVzaChuZXcgUHJvamVjdChcIlRoaXMgV2Vla1wiKSk7XG4gIGNvbnN0IGdldFByb2plY3RzID0gKCkgPT4gcHJvamVjdHM7XG4gIGNvbnN0IGdldFByb2plY3QgPSAocHJvamVjdE5hbWUpID0+XG4gICAgcHJvamVjdHMuZmluZCgocCkgPT4gcHJvamVjdE5hbWUgPT09IHAuZ2V0TmFtZSgpKTtcbiAgY29uc3QgY29udGFpbnMgPSAobmFtZSkgPT4gcHJvamVjdHMuc29tZSgocCkgPT4gbmFtZSA9PT0gcC5nZXROYW1lKCkpO1xuICBmdW5jdGlvbiBhZGRQcm9qZWN0KG5ld1Byb2plY3QpIHtcbiAgICBpZiAoY29udGFpbnMobmV3UHJvamVjdC5nZXROYW1lKCkpKSB7XG4gICAgICBhbGVydChcInBscyBwdXQgZGlmZiB0aXRsZVwiKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcHJvamVjdHMucHVzaChuZXdQcm9qZWN0KTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBmdW5jdGlvbiByZW1vdmVQcm9qZWN0KG5hbWUpIHtcbiAgICBwcm9qZWN0cyA9IHByb2plY3RzLmZpbHRlcigocCkgPT4gcC5nZXROYW1lKCkgIT09IG5hbWUpO1xuICB9XG4gIGZ1bmN0aW9uIHJlcGxhY2VQcm9qZWN0KG5ld1Byb2plY3QpIHtcbiAgICBpZiAoY29udGFpbnMobmV3UHJvamVjdC5nZXROYW1lKCkpKSB7XG4gICAgICByZW1vdmVQcm9qZWN0KG5ld1Byb2plY3QuZ2V0TmFtZSgpKTtcbiAgICAgIGFkZFByb2plY3QobmV3UHJvamVjdCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFkZFByb2plY3QobmV3UHJvamVjdCk7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIGRlbGV0ZVByb2plY3QocHJvamVjdCkge1xuICAgIHByb2plY3RzID0gcHJvamVjdHMuZmlsdGVyKChwKSA9PiBwLmdldE5hbWUoKSAhPT0gcHJvamVjdC5nZXROYW1lKCkpO1xuICB9XG4gIGZ1bmN0aW9uIHVwZGF0ZVRvZGF5UHJvamVjdCgpIHtcbiAgICBnZXRQcm9qZWN0KFwiVG9kYXlcIikudGFza3MgPSBbXTtcbiAgICBwcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICBpZiAocHJvamVjdC5nZXROYW1lKCkgPT09IFwiVG9kYXlcIiB8fCBwcm9qZWN0LmdldE5hbWUoKSA9PT0gXCJUaGlzIFdlZWtcIilcbiAgICAgICAgcmV0dXJuO1xuICAgICAgY29uc3QgdG9kYXlUYXNrcyA9IHByb2plY3QuZ2V0VGFza3NUb2RheSgpO1xuICAgICAgdG9kYXlUYXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICAgIGNvbnN0IHRhc2tOYW1lID0gYCR7dGFzay5nZXROYW1lKCl9ICgke3Byb2plY3QuZ2V0TmFtZSgpfSlgO1xuICAgICAgICBnZXRQcm9qZWN0KFwiVG9kYXlcIikuYWRkVGFzayhuZXcgVGFzayh0YXNrTmFtZSwgdGFzay5nZXREYXRlKCkpKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG4gIGZ1bmN0aW9uIHVwZGF0ZVdlZWtQcm9qZWN0KCkge1xuICAgIGdldFByb2plY3QoXCJUaGlzIFdlZWtcIikudGFza3MgPSBbXTtcbiAgICBwcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICBpZiAocHJvamVjdC5nZXROYW1lKCkgPT09IFwiVG9kYXlcIiB8fCBwcm9qZWN0LmdldE5hbWUoKSA9PT0gXCJUaGlzIFdlZWtcIilcbiAgICAgICAgcmV0dXJuO1xuICAgICAgY29uc3Qgd2Vla1Rhc2tzID0gcHJvamVjdC5nZXRUYXNrc1RoaXNXZWVrKCk7XG4gICAgICB3ZWVrVGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgICBjb25zdCB0YXNrTmFtZSA9IGAke3Rhc2suZ2V0TmFtZSgpfSAoJHtwcm9qZWN0LmdldE5hbWUoKX0pYDtcbiAgICAgICAgZ2V0UHJvamVjdChcIlRoaXMgV2Vla1wiKS5hZGRUYXNrKFxuICAgICAgICAgIG5ldyBUYXNrKHRhc2tOYW1lLCB0YXNrLmdldERhdGUoKSlcbiAgICAgICAgKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIGdldFByb2plY3QoXCJUaGlzIFdlZWtcIikuc2V0VGFza3MoXG4gICAgICBnZXRQcm9qZWN0KFwiVGhpcyBXZWVrXCIpXG4gICAgICAgIC5nZXRUYXNrcygpXG4gICAgICAgIC5zb3J0KCh0YXNrQSwgdGFza0IpID0+XG4gICAgICAgICAgY29tcGFyZUFzYyhcbiAgICAgICAgICAgIHRvRGF0ZShuZXcgRGF0ZSh0YXNrQS5nZXREYXRlRm9ybWF0dGVkKCkpKSxcbiAgICAgICAgICAgIHRvRGF0ZShuZXcgRGF0ZSh0YXNrQi5nZXREYXRlRm9ybWF0dGVkKCkpKVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGdldFByb2plY3QsXG4gICAgZ2V0UHJvamVjdHMsXG4gICAgY29udGFpbnMsXG4gICAgYWRkUHJvamVjdCxcbiAgICBkZWxldGVQcm9qZWN0LFxuICAgIHJlcGxhY2VQcm9qZWN0LFxuICAgIHVwZGF0ZVdlZWtQcm9qZWN0LFxuICAgIHVwZGF0ZVRvZGF5UHJvamVjdCxcbiAgfTtcbn0pKCk7XG5leHBvcnQgZGVmYXVsdCBwcm9qZWN0TGlzdDtcbiIsImltcG9ydCBQcm9qZWN0IGZyb20gXCIuL3Byb2plY3RcIjtcbmltcG9ydCBUYXNrIGZyb20gXCIuL3Rhc2tcIjtcbmltcG9ydCBwcm9qZWN0TGlzdCBmcm9tIFwiLi9wcm9qZWN0TGlzdFwiO1xuaW1wb3J0IHtkdG0sIGRpc3BsYXlUYXNrTGlzdH0gZnJvbSBcIi4vdGFza1VJXCI7XG5pbXBvcnQgU3RvcmFnZSBmcm9tICcuL3N0b3JhZ2UnO1xuXG5cbmZ1bmN0aW9uIGdldFByb2plY3RGcm9tSW5wdXQoKSB7XG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aXRsZVwiKS52YWx1ZS50cmltKCk7XG4gIGNvbnN0IHByb2plY3QgPSBuZXcgUHJvamVjdCh0aXRsZSk7XG4gIHJldHVybiBwcm9qZWN0O1xufVxuZnVuY3Rpb24gcHJvamVjdE1vZGFsVG9nZ2xlKCkge1xuICBjb25zdCBwcm9qZWN0TW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtbW9kYWxcIik7XG4gIHByb2plY3RNb2RhbC5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xufVxuZnVuY3Rpb24gZ29Ub1Byb2plY3QoZSkge1xuICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLlRpdGxlXCIpO1xuICBsZXQgbmFtZSA9IGUudGFyZ2V0LmRhdGFzZXQudGl0bGU7XG4gIG5hbWUgPSBuYW1lLnJlcGxhY2VBbGwoXCItXCIsIFwiIFwiKTtcbiAgaWYoIXByb2plY3RMaXN0LmNvbnRhaW5zKG5hbWUpKXtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgcHJvamVjdCA9IHByb2plY3RMaXN0LmdldFByb2plY3QobmFtZSk7XG4gIHByb2plY3RUaXRsZS50ZXh0Q29udGVudCA9IG5hbWU7XG4gIGRpc3BsYXlUYXNrTGlzdChwcm9qZWN0LmdldFRhc2tzKCkpO1xufVxuZnVuY3Rpb24gZ29Ub0luYm94KCkge1xuICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLlRpdGxlXCIpO1xuICBjb25zdCBwcm9qZWN0ID0gcHJvamVjdExpc3QuZ2V0UHJvamVjdCgnSW5ib3gnKTtcbiAgcHJvamVjdFRpdGxlLnRleHRDb250ZW50ID0gcHJvamVjdC5nZXROYW1lKCk7XG4gIGRpc3BsYXlUYXNrTGlzdChwcm9qZWN0LmdldFRhc2tzKCkpO1xufVxuZnVuY3Rpb24gcmVtb3ZlUHJvamVjdChlKXtcbiAgbGV0IG5hbWUgPSBlLnRhcmdldC5kYXRhc2V0LnRpdGxlO1xuICBuYW1lID0gbmFtZS5yZXBsYWNlQWxsKFwiLVwiLCBcIiBcIik7XG4gIGNvbnN0IHByb2plY3QgPSBwcm9qZWN0TGlzdC5nZXRQcm9qZWN0KG5hbWUpO1xuICBwcm9qZWN0TGlzdC5kZWxldGVQcm9qZWN0KHByb2plY3QpO1xuICBkaXNwbGF5UHJvamVjdExpc3QoKTtcbiAgZ29Ub0luYm94KCk7XG4gIFN0b3JhZ2Uuc2V0UHJvamVjdExpc3QoKTtcbn1cbmZ1bmN0aW9uIGRpc3BsYXlQcm9qZWN0KHByb2plY3QpIHtcbiAgY29uc3QgcHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdENvbnRhaW5lclwiKTtcbiAgbGV0IG5hbWUgPSBwcm9qZWN0LmdldE5hbWUoKTtcbiAgaWYgKG5hbWUgPT09IFwiSW5ib3hcIiB8fCBuYW1lID09PSBcIlRvZGF5XCIgfHwgbmFtZSA9PT0gXCJUaGlzIFdlZWtcIikge1xuICAgIHJldHVybjtcbiAgfVxuICAvLyBoYWQgdG8gZG8gdGhpcyBiZWNhdXNlIHF1ZXJ5U2VsZWN0b3Igd291bGRuJ3Qgd29ya1xuICBpZiAobmFtZS5pbmRleE9mKFwiIFwiKSA+PSAwKSB7XG4gICAgbmFtZSA9IG5hbWUucmVwbGFjZUFsbCgvXFxzL2csIFwiLVwiKS50cmltKCk7XG4gIH1cbiAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJzaWRlSXRlbVwiKTtcbiAgYnV0dG9uLnNldEF0dHJpYnV0ZShcImRhdGEtdGl0bGVcIiwgbmFtZSk7XG4gIGNvbnN0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgaWNvbi5jbGFzc0xpc3QuYWRkKFwibWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZFwiKTtcbiAgaWNvbi50ZXh0Q29udGVudCA9IFwibGlzdFwiO1xuICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHByb2plY3ROYW1lLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0XCIpO1xuICBwcm9qZWN0TmFtZS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXRpdGxlXCIsIG5hbWUpO1xuICBwcm9qZWN0TmFtZS50ZXh0Q29udGVudCA9IG5hbWUucmVwbGFjZSgvLS9nLCBcIiBcIik7XG4gIGNvbnN0IGNsb3NlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIGNsb3NlLmNsYXNzTGlzdC5hZGQoXCJtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkXCIpO1xuICBjbG9zZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImNsb3NlXCIpO1xuICBjbG9zZS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXRpdGxlXCIsIG5hbWUpO1xuICBjbG9zZS50ZXh0Q29udGVudCA9IFwiY2xvc2VcIjtcbiAgYnV0dG9uLmFwcGVuZENoaWxkKGljb24pO1xuICBidXR0b24uYXBwZW5kQ2hpbGQocHJvamVjdE5hbWUpO1xuICBidXR0b24uYXBwZW5kQ2hpbGQoY2xvc2UpO1xuICBjb25zdCBhZGRUYXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGRUYXNrXCIpO1xuICBjbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlbW92ZVByb2plY3QpO1xuICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKT0+e1xuICAgIGFkZFRhc2suY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgZ29Ub1Byb2plY3QoZSk7XG4gIH0pO1xuICBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGJ1dHRvbik7XG59XG5mdW5jdGlvbiBkaXNwbGF5UHJvamVjdExpc3QoKSB7XG4gIGNvbnN0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RDb250YWluZXJcIik7XG4gIHByb2plY3RDb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcbiAgcHJvamVjdExpc3QuZ2V0UHJvamVjdHMoKS5mb3JFYWNoKChwcm9qZWN0KSA9PiBkaXNwbGF5UHJvamVjdChwcm9qZWN0KSk7XG59XG5cbmZ1bmN0aW9uIHN1Ym1pdFByb2plY3QoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIGNvbnN0IHByb2plY3QgPSBnZXRQcm9qZWN0RnJvbUlucHV0KCk7XG4gIHByb2plY3RNb2RhbFRvZ2dsZSgpO1xuICBpZiAocHJvamVjdExpc3QuYWRkUHJvamVjdChwcm9qZWN0KSkge1xuICAgIGRpc3BsYXlQcm9qZWN0TGlzdCgpO1xuICAgIFN0b3JhZ2Uuc2V0UHJvamVjdExpc3QoKTtcbiAgfVxufVxuZnVuY3Rpb24gZGlzcGxheVByb2plY3RNb2RhbCgpIHtcbiAgcHJvamVjdE1vZGFsVG9nZ2xlKCk7XG4gIGNvbnN0IHByb2plY3RNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1tb2RhbFwiKTtcbiAgY29uc3QgcHJvamVjdENhbmNlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2FuY2VsXCIpO1xuICBwcm9qZWN0Q2FuY2VsLm9uY2xpY2sgPSAoKSA9PiBwcm9qZWN0TW9kYWxUb2dnbGUoKTtcbiAgcHJvamVjdE1vZGFsLm9uc3VibWl0ID0gc3VibWl0UHJvamVjdDtcbiAgLy8gcmVtZW1iZXIgdGhhdCBvbnN1Ym1pdCBpcyB1c2VkIGZvciBmb3JtIG5vdCBidXR0b25cbn1cblxuZXhwb3J0e2dvVG9Qcm9qZWN0LCBkaXNwbGF5UHJvamVjdE1vZGFsIGFzIGRwbSxcbiAgZGlzcGxheVByb2plY3RMaXN0IGFzIGRwbH07IiwiaW1wb3J0IHByb2plY3RMaXN0IGZyb20gXCIuL3Byb2plY3RMaXN0XCI7XG5pbXBvcnQgUHJvamVjdCBmcm9tIFwiLi9wcm9qZWN0XCI7XG5pbXBvcnQgVGFzayBmcm9tIFwiLi90YXNrXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0b3JhZ2Uge1xuICBzdGF0aWMgc2V0UHJvamVjdExpc3QoKSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwbFwiLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0TGlzdC5nZXRQcm9qZWN0cygpKSk7XG4gIH1cblxuICBzdGF0aWMgZ2V0UHJvamVjdExpc3QoKSB7XG4gICAgY29uc3Qgb2JqQXJyYXkgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicGxcIikpO1xuICAgIGlmKG9iakFycmF5PT1udWxsKXtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgb2JqQXJyYXkuZm9yRWFjaCgocCkgPT4ge1xuICAgICAgY29uc3QgcHJvamVjdDIgPSBuZXcgUHJvamVjdChwLm5hbWUpO1xuICAgICAgY29uc3QgdGFza0FycmF5ID0gcC50YXNrcztcbiAgICAgIC8vIHNob3VsZCBkcmF3IG91dCBzb2x1dGlvbiBiZWZvcmUgYXR0ZW1wdGluZ1xuICAgICAgLy8gbmV3QXJyYXkgaXMgYSBuZXdBcnJheS5cbiAgICAgIGNvbnN0IG5ld0FycmF5ID0gW107XG4gICAgICB0YXNrQXJyYXkuZm9yRWFjaCgodCkgPT57XG4gICAgICAgIGNvbnN0IHRhc2sgPSBuZXcgVGFzayh0Lm5hbWUsIHQuZHVlRGF0ZSwgdC5kZXNjcmlwdGlvbik7XG4gICAgICAgIG5ld0FycmF5LnB1c2godGFzayk7XG4gICAgICB9KVxuICAgICAgcHJvamVjdDIuc2V0VGFza3MobmV3QXJyYXkpO1xuICAgICAgcHJvamVjdExpc3QucmVwbGFjZVByb2plY3QocHJvamVjdDIpO1xuICAgIH0pO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyB0YXNrIHtcbiAgY29uc3RydWN0b3IobmFtZSwgZHVlRGF0ZSA9IFwiTm8gZGF0ZVwiLCBkZXNjcmlwdGlvbiA9IFwiXCIpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICB9XG5cbiAgc2V0TmFtZShuYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIHNldERhdGUoZHVlRGF0ZSkge1xuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gIH1cblxuICBnZXREYXRlKCkge1xuICAgIHJldHVybiB0aGlzLmR1ZURhdGU7XG4gIH1cblxuICBnZXREYXRlRm9ybWF0dGVkKCkge1xuICAgIGNvbnN0IGRheSA9IHRoaXMuZHVlRGF0ZS5zcGxpdChcIi1cIilbMl07XG4gICAgY29uc3QgbW9udGggPSB0aGlzLmR1ZURhdGUuc3BsaXQoXCItXCIpWzFdO1xuICAgIGNvbnN0IHllYXIgPSB0aGlzLmR1ZURhdGUuc3BsaXQoXCItXCIpWzBdO1xuICAgIHJldHVybiBgJHttb250aH0vJHtkYXl9LyR7eWVhcn1gO1xuICB9XG5cbiAgZ2V0RGVzY3JpcHRpb24oKXtcbiAgICByZXR1cm4gdGhpcy5kZXNjcmlwdGlvbjtcbiAgfVxuXG4gIHNldERlc2NyaXB0aW9uKGRlc2NyaXB0aW9uKXtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gIH1cbn1cbi8vIGNvbnN0IGdldERlc2NyaXB0aW9uID0gKCkgPT4gZGVzY3JpcHRpb247XG4vLyBjb25zdCBnZXRQcmlvcml0eSA9ICgpID0+IHByaW9yaXR5O1xuLy8gY29uc3QgZ2V0SXNEb25lID0gKCkgPT4gaXNEb25lO1xuLy8gZnVuY3Rpb24gc2V0RGVzY3JpcHRpb24oZGVzY3JpcHRpb24pe3RoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbn1cbi8vIGNvbnN0IHRvZ2dsZURvbmUgPSAoKSA9PiB7XG4vLyAgICAgdGhpcy5pc0RvbmUgPSAhaXNEb25lO1xuLy8gfVxuLy8gZ2V0RGVzY3JpcHRpb24sZ2V0UHJpb3JpdHksIGdldElzRG9uZSxzZXREZXNjcmlwdGlvbix0b2dnbGVEb25lLFxuIiwiaW1wb3J0IFByb2plY3QgZnJvbSBcIi4vcHJvamVjdFwiO1xuaW1wb3J0IFRhc2sgZnJvbSBcIi4vdGFza1wiO1xuaW1wb3J0IHByb2plY3RMaXN0IGZyb20gXCIuL3Byb2plY3RMaXN0XCI7XG5pbXBvcnQgU3RvcmFnZSBmcm9tIFwiLi9zdG9yYWdlXCI7XG5cbmZ1bmN0aW9uIGdldFByb2plY3RGcm9tVGl0bGUoKSB7XG4gIGNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuVGl0bGVcIik7XG4gIGNvbnN0IG5hbWUgPSBwcm9qZWN0VGl0bGUuaW5uZXJUZXh0O1xuICBjb25zdCBwcm9qZWN0ID0gcHJvamVjdExpc3QuZ2V0UHJvamVjdChuYW1lKTtcbiAgcmV0dXJuIHByb2plY3Q7XG59XG5mdW5jdGlvbiB0YXNrTW9kYWxUb2dnbGUoKSB7XG4gIGNvbnN0IHRhc2tNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFza01vZGFsXCIpO1xuICB0YXNrTW9kYWwuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcbn1cbmZ1bmN0aW9uIGdldFRhc2tGcm9tSW5wdXQoKSB7XG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aXRsZTJcIikudmFsdWUudHJpbSgpO1xuICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVzY3JpcHRpb25cIikudmFsdWU7XG4gIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRhdGVcIikudmFsdWU7XG4gIGNvbnN0IHRhc2sgPSBuZXcgVGFzayh0aXRsZSwgZGF0ZSwgZGVzY3JpcHRpb24pO1xuICByZXR1cm4gdGFzaztcbn1cbmZ1bmN0aW9uIHJlbW92ZVRhc2soZSkge1xuICBjb25zdCB7IG5hbWUgfSA9IGUudGFyZ2V0LmRhdGFzZXQ7XG4gIGNvbnN0IHByb2plY3QgPSBnZXRQcm9qZWN0RnJvbVRpdGxlKCk7XG4gIGNvbnN0IHRhc2sgPSBwcm9qZWN0LmdldFRhc2sobmFtZSk7XG4gIHByb2plY3QucmVtb3ZlVGFzayh0YXNrKTtcbiAgU3RvcmFnZS5zZXRQcm9qZWN0TGlzdCgpO1xuICBkaXNwbGF5VGFza0xpc3QocHJvamVjdC5nZXRUYXNrcygpKTtcbn1cblxuZnVuY3Rpb24gZWRpdFRhc2soZSkge1xuICBjb25zdCB7IG5hbWUgfSA9IGUudGFyZ2V0LmRhdGFzZXQ7XG4gIGNvbnN0IHByb2plY3QgPSBnZXRQcm9qZWN0RnJvbVRpdGxlKCk7XG4gIGNvbnN0IHRhc2sgPSBwcm9qZWN0LmdldFRhc2sobmFtZSk7XG5cbiAgY29uc3QgdGFza01vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrTW9kYWxcIik7XG4gIHRhc2tNb2RhbC5jbGFzc0xpc3QudG9nZ2xlKFwibW9kYWxcIik7XG4gIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm92ZXJsYXlcIik7XG4gIG92ZXJsYXkuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcbiAgY29uc3QgdGFza0NhbmNlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2FuY2VsMlwiKTtcbiAgdGFza0NhbmNlbC5vbmNsaWNrID0gKCkgPT4ge1xuICAgIHRhc2tNb2RhbC5jbGFzc0xpc3QudG9nZ2xlKFwibW9kYWxcIik7XG4gICAgb3ZlcmxheS5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xuICB9O1xuICB0YXNrTW9kYWwub25zdWJtaXQgPSAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IG5ld1Rhc2sgPSBnZXRUYXNrRnJvbUlucHV0KCk7XG4gICAgdGFzay5zZXROYW1lKG5ld1Rhc2suZ2V0TmFtZSgpKTtcbiAgICB0YXNrLnNldERhdGUobmV3VGFzay5nZXREYXRlKCkpO1xuICAgIHRhc2suc2V0RGVzY3JpcHRpb24obmV3VGFzay5nZXREZXNjcmlwdGlvbigpKTtcbiAgICB0YXNrTW9kYWwuY2xhc3NMaXN0LnRvZ2dsZShcIm1vZGFsXCIpO1xuICAgIG92ZXJsYXkuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcbiAgICBkaXNwbGF5VGFza0xpc3QocHJvamVjdC5nZXRUYXNrcygpKTtcbiAgICBTdG9yYWdlLnNldFByb2plY3RMaXN0KCk7XG4gIH07XG59XG5mdW5jdGlvbiBkaXNwbGF5VGFzayh0YXNrKSB7XG4gIGNvbnN0IHRhc2tDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2tDb250YWluZXJcIik7XG4gIGNvbnN0IHRhc2syID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdGFzazIuY2xhc3NMaXN0LmFkZChcInRhc2tcIik7XG4gIGNvbnN0IHRhc2tTaG93biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRhc2tTaG93bi5jbGFzc0xpc3QuYWRkKFwidGFzay1zaG93blwiKTtcbiAgdGFzazIuYXBwZW5kQ2hpbGQodGFza1Nob3duKTtcbiAgY29uc3QgdGFza0xlZnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0YXNrTGVmdC5jbGFzc0xpc3QuYWRkKFwidGFza0xlZnRcIik7XG4gIHRhc2tTaG93bi5hcHBlbmRDaGlsZCh0YXNrTGVmdCk7XG4gIGNvbnN0IGNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBjaGVja2JveC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiY2hlY2tib3hcIik7XG4gIHRhc2tMZWZ0LmFwcGVuZENoaWxkKGNoZWNrYm94KTtcbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0aXRsZS5jbGFzc0xpc3QuYWRkKFwidGl0bGVcIik7XG4gIHRpdGxlLmlubmVyVGV4dCA9IHRhc2suZ2V0TmFtZSgpO1xuICB0YXNrTGVmdC5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBkYXRlLmNsYXNzTGlzdC5hZGQoXCJkYXRlXCIpO1xuICBkYXRlLmlubmVyVGV4dCA9IHRhc2suZ2V0RGF0ZSgpO1xuICB0YXNrU2hvd24uYXBwZW5kQ2hpbGQoZGF0ZSk7XG4gIGNvbnN0IHRhc2tSaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRhc2tSaWdodC5jbGFzc0xpc3QuYWRkKFwidGFza1JpZ2h0XCIpO1xuICB0YXNrU2hvd24uYXBwZW5kQ2hpbGQodGFza1JpZ2h0KTtcbiAgLy8gZXhwYW5kTW9yZVxuICBjb25zdCBleHBhbmRNb3JlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIGV4cGFuZE1vcmUuY2xhc3NMaXN0LmFkZChcIm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWRcIik7XG4gIGV4cGFuZE1vcmUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJkb3duXCIpO1xuICBleHBhbmRNb3JlLmlubmVyVGV4dCA9IFwiZXhwYW5kX21vcmVcIjtcbiAgdGFza1JpZ2h0LmFwcGVuZENoaWxkKGV4cGFuZE1vcmUpO1xuICBjb25zdCB1cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICB1cC5jbGFzc0xpc3QuYWRkKFwibWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZFwiKTtcbiAgdXAuaW5uZXJUZXh0ID0gXCJrZXlib2FyZF9hcnJvd191cFwiO1xuICB1cC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInVwXCIpO1xuICB0YXNrUmlnaHQuYXBwZW5kQ2hpbGQodXApO1xuICAvLyBkZWxldGVFbFxuICBjb25zdCBkZWxldGVFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBkZWxldGVFbC5jbGFzc0xpc3QuYWRkKFwibWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZFwiKTtcbiAgZGVsZXRlRWwuc2V0QXR0cmlidXRlKFwiZGF0YS1uYW1lXCIsIHRhc2suZ2V0TmFtZSgpKTtcbiAgZGVsZXRlRWwuaW5uZXJUZXh0ID0gXCJkZWxldGVcIjtcbiAgdGFza1JpZ2h0LmFwcGVuZENoaWxkKGRlbGV0ZUVsKTtcbiAgY29uc3QgdGFza0hpZGRlbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRhc2tIaWRkZW4uY2xhc3NMaXN0LmFkZChcInRhc2staGlkZGVuXCIpO1xuICB0YXNrMi5hcHBlbmRDaGlsZCh0YXNrSGlkZGVuKTtcbiAgY29uc3QgdGFza0hpZGRlblRvcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRhc2tIaWRkZW5Ub3AuY2xhc3NMaXN0LmFkZChcInRhc2tIaWRkZW5Ub3BcIik7XG4gIHRhc2tIaWRkZW4uYXBwZW5kQ2hpbGQodGFza0hpZGRlblRvcCk7XG4gIGNvbnN0IGRlc2NyaXB0aW9uVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDRcIik7XG4gIGRlc2NyaXB0aW9uVGl0bGUuaW5uZXJUZXh0ID0gXCJEZXNjcmlwdGlvbjpcIjtcbiAgdGFza0hpZGRlblRvcC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvblRpdGxlKTtcbiAgLy8gZWRpdFxuICBjb25zdCBlZGl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIGVkaXQuY2xhc3NMaXN0LmFkZChcIm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWRcIik7XG4gIGVkaXQuc2V0QXR0cmlidXRlKFwiZGF0YS1uYW1lXCIsIHRhc2suZ2V0TmFtZSgpKTtcbiAgZWRpdC5pbm5lclRleHQgPSBcImVkaXRcIjtcbiAgdGFza0hpZGRlblRvcC5hcHBlbmRDaGlsZChlZGl0KTtcbiAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBkZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKFwiZGVzY3JpcHRpb25cIik7XG4gIGRlc2NyaXB0aW9uLmlubmVyVGV4dCA9IHRhc2suZ2V0RGVzY3JpcHRpb24oKTtcbiAgdGFza0hpZGRlbi5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XG4gIGV4cGFuZE1vcmUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICB0YXNrSGlkZGVuLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgZXhwYW5kTW9yZS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgIHVwLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gIH0pO1xuICB1cC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGV4cGFuZE1vcmUuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICB0YXNrSGlkZGVuLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgdXAuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgfSk7XG4gIGRlbGV0ZUVsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCByZW1vdmVUYXNrKTtcbiAgZWRpdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZWRpdFRhc2spO1xuICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2syKTtcbn1cbmZ1bmN0aW9uIGRpc3BsYXlUYXNrTGlzdCh0YXNrcykge1xuICBjb25zdCB0YXNrQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrQ29udGFpbmVyXCIpO1xuICB0YXNrQ29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XG4gIHRhc2tzLmZvckVhY2goKHRhc2spID0+IGRpc3BsYXlUYXNrKHRhc2spKTtcbn1cbmZ1bmN0aW9uIHN1Ym1pdFRhc2soZSkge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIGNvbnN0IHByb2plY3QgPSBnZXRQcm9qZWN0RnJvbVRpdGxlKCk7XG4gIGNvbnN0IHRhc2sgPSBnZXRUYXNrRnJvbUlucHV0KCk7XG4gIHRhc2tNb2RhbFRvZ2dsZSgpO1xuICBpZiAocHJvamVjdC5hZGRUYXNrKHRhc2spKSB7XG4gICAgZGlzcGxheVRhc2tMaXN0KHByb2plY3QuZ2V0VGFza3MoKSk7XG4gICAgU3RvcmFnZS5zZXRQcm9qZWN0TGlzdCgpO1xuICB9XG59XG5mdW5jdGlvbiBkdG0oKSB7XG4gIHRhc2tNb2RhbFRvZ2dsZSgpO1xuICBjb25zdCB0YXNrTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2tNb2RhbFwiKTtcbiAgY29uc3QgdGFza0NhbmNlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2FuY2VsMlwiKTtcbiAgdGFza0NhbmNlbC5vbmNsaWNrID0gKCkgPT4gdGFza01vZGFsVG9nZ2xlKCk7XG4gIHRhc2tNb2RhbC5vbnN1Ym1pdCA9IHN1Ym1pdFRhc2s7XG59XG5cbmV4cG9ydCB7IGR0bSwgZGlzcGxheVRhc2tMaXN0IH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7dG9EYXRlfSBmcm9tICdkYXRlLWZucyc7XG5pbXBvcnQgUHJvamVjdCBmcm9tICcuL21vZHVsZXMvcHJvamVjdC5qcyc7XG5pbXBvcnQgVGFzayBmcm9tICcuL21vZHVsZXMvdGFzay5qcyc7XG5pbXBvcnQgcHJvamVjdExpc3QgZnJvbSAnLi9tb2R1bGVzL3Byb2plY3RMaXN0LmpzJztcbmltcG9ydCBVSSBmcm9tICcuL21vZHVsZXMvVUkuanMnO1xuLy8gLWltcG9ydCB7dG9Eb30gZnJvbSAnLi9vYmplY3RzLmpzJztcblxuY29uc3QgdGFzazEgPSBuZXcgVGFzaygnYm9iJywgJzIvNC8yMicpO1xuY29uc3QgcHJvamVjdCA9IHByb2plY3RMaXN0LmdldFByb2plY3QoJ0luYm94Jyk7XG5wcm9qZWN0LmFkZFRhc2sodGFzazEpO1xuVUkuaW5pdGlhbFVJKCk7XG4vLyBjb25zdCB0YXNrMSA9IG5ldyBUYXNrKCdib2InLCAnMi80LzIyJyk7XG4vLyBjb25zb2xlLmxvZyh0YXNrMS5zZXROYW1lKCdoZGlkZCcpKTtcbi8vIGNvbnNvbGUubG9nKHt0YXNrMX0pO1xuLy8gY29uc29sZS5sb2codGFzazEuZ2V0TmFtZSgpKTtcbi8vIGNvbnNvbGUubG9nKHRhc2sxLmdldERhdGUoKSk7XG4vLyBjb25zdCBwcm9qZWN0MSA9IG5ldyBQcm9qZWN0KCdib2InKTtcbi8vIHByb2plY3QxLmFkZFRhc2sodGFzazEpO1xuLy8gY29uc29sZS5sb2cocHJvamVjdDEuZ2V0VGFza3MoKSk7XG4vLyBwcm9qZWN0MS5yZW1vdmVUYXNrKHRhc2sxKTtcbi8vIGNvbnNvbGUubG9nKHByb2plY3QxLmdldFRhc2tzKCkpO1xuLy8gcHJvamVjdExpc3QuYWRkUHJvamVjdChwcm9qZWN0MSk7XG4vLyBjb25zb2xlLmxvZyhwcm9qZWN0TGlzdC5nZXRQcm9qZWN0cygpKTtcblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9