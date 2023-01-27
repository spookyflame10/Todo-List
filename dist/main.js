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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  font-family: sans-serif;\n  font-size: 16px;\n\n  --bgColor1: #15202b;\n  --bgColor2: #192734;\n  --bgColor3: #22303c;\n  --bgColorPopUp: #273746;\n  --textColor: #eaebec;\n  --accent: #2abd67;\n  --accentDark: #1f8d4d;\n}\n.material-symbols-outlined {\n  font-variation-settings: \"FILL\" 0, \"wght\" 400, \"GRAD\" 0, \"opsz\" 48;\n}\n/* css when light mode is turned on */\nbody.light {\n  --bgColor2: #ececec;\n  --bgColor3: #f2f3f5;\n  --bgColor1: #fefcfe;\n  --bgColorPopUp: #f3f1f3;\n  --textColor: #374958;\n  --accentDark: #aeedc8;\n}\nbody {\n  background-color: var(--bgColor1);\n  height: 100vh;\n  color: var(--textColor);\n  margin: 0;\n  padding: 0;\n}\n.container {\n  display: grid;\n  grid-template-rows: 1fr 5fr;\n  grid-template-columns: 1fr 5fr;\n  min-width: 100vw;\n  min-height: 100vh;\n}\n.header {\n  grid-column: 1/-1;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0px 60px 0px 60px;\n  background-color: var(--bgColor2);\n}\n.logo {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 40px;\n  font-weight: 900;\n}\n#logo {\n  font-size: 40px;\n}\n\n.sidebar.active{\n  visibility: hidden;\n}\n.sidebar {\n  grid-row: 2/-1;\n  background-color: var(--bgColor3);\n  display: grid;\n  grid-template-rows: auto 1fr;\n  padding-left: 10px;\n  padding-top: 20px;\n  gap: 20px;\n}\nbutton {\n  border: none;\n  color: inherit;\n  background-color: inherit;\n  cursor: pointer;\n  outline: inherit;\n}\nbutton:hover {\n  background-color: var(--bgColor1);\n}\n.sideTop {\n  display: grid;\n  gap: 20px;\n}\n.sideItem,\n.addTask {\n  font-size: 15px;\n  background-color: var(--bgColor3);\n  display: grid;\n  grid-template-columns: 50px 100px;\n  gap: 15px;\n  align-items: center;\n  justify-items: start;\n  border-radius: 20px;\n  height: 35px;\n}\n.projectContainer > *.sideItem {\n  grid-template-columns: 50px 100px 1fr;\n}\n.projectContainer > .sideItem > span:last-child {\n  justify-self: end;\n  padding-right: 20px;\n  display: none;\n}\n.projectContainer > .sideItem:hover span#close {\n  display: block;\n}\n.sideBottom {\n  display: grid;\n  gap: 10px;\n  grid-auto-rows: max-content;\n}\n.sideBottom > .big {\n  font-size: 20px;\n  border-bottom: 2px solid var(--textColor);\n  padding-bottom: 3px;\n}\n.sideBottom > .projectContainer > .sideItem {\n  padding: 0;\n  width: 100%;\n}\n.project-modal {\n  display: none;\n}\n.project-modal.active {\n  display: block;\n}\n\ntextarea {\n  border: none;\n  overflow: auto;\n  outline: none;\n  resize: none; /*remove the resize handle on the bottom right*/\n}\n.input > input,\n.input > textarea {\n  all: unset;\n  min-height: 25px;\n  width: 96%;\n  background-color: var(--bgColor2);\n  border-bottom: 1px solid gray;\n}\n.buttons {\n  display: flex;\n  padding-top: 5px;\n}\n.buttons > button,\n#submit {\n  padding: 5px 15px;\n  border-radius: 20px;\n  background-color: var(--accentDark);\n  color: var(--textColor);\n  font-size: inherit;\n  font-weight: bold;\n}\n.buttons > #cancel,\n#cancel2 {\n  border: 1px solid #ee6d6d;\n  background-color: #ec4141;\n}\n.content {\n  display: grid;\n  grid-auto-rows: max-content;\n  padding: 20px;\n  gap: 20px;\n  justify-items: center;\n}\n.content > .Title {\n  height: 150px;\n  width: 90%;\n  font-size: 40px;\n  padding-left: 20px;\n  justify-self: center;\n  display: flex;\n  align-items: center;\n  background-color: var(--accentDark);\n  border-radius: 30px;\n}\n\nbutton.addTask:hover {\n  background-color: var(--bgColor2);\n}\n.content > .addTask {\n  justify-items: center;\n  width: 80%;\n  justify-self: center;\n}\n.taskModal.active {\n  display: block;\n}\n.taskModal {\n  display: none;\n}\n.taskModal.modal {\n  display: block;\n  transform: translate(-50%, -50%);\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  z-index: 2;\n  transition: 0.2s ease-in-out;\n}\n.modal-container {\n  background-color: var(--bgColor3);\n  display: grid;\n  grid-auto-rows: max-content;\n  gap: 20px;\n  justify-items: start;\n  justify-content: center;\n  font-size: 20px;\n  width: fit-content;\n  padding: 20px;\n  border-radius: 20px;\n}\n.modal-container > .buttons {\n  gap: 15px;\n}\n.input {\n  display: grid;\n  grid-auto-rows: max-content;\n}\n.taskContainer {\n  width: 90%;\n  display:grid;\n  gap:10px;\n}\n.task {\n  display: grid;\n  border: 1px solid var(--textColor);\n  border-radius: 15px;\n  padding: 10px 20px;\n  gap: 5px;\n}\n.task span {\n  cursor: pointer;\n}\nspan:hover{\n  cursor: pointer;\n}\n.task-shown {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.taskLeft {\n  display: flex;\n  gap: 10px;\n  align-items: center;\n}\n.taskRight {\n  display: flex;\n}\n.taskRight > #down.active {\n  display: none;\n}\n.taskRight > #up {\n  display: none;\n}\n.taskRight > #up.active {\n  display: block;\n}\n/*figure out how to add animation dropdown here*/\n.task-hidden.active {\n  display: block;\n}\n.task-hidden {\n  display: none;\n  transition: 0.5s ease-in-out;\n}\n.taskHiddenTop {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-right: 20px;\n  height: 25px;\n  border-bottom: 1px solid var(--accentDark);\n}\n.description {\n  margin-top: 5px;\n}\ninput[type=\"checkbox\"] {\n  appearance: none;\n  background-color: inherit;\n  margin: 0;\n  font: inherit;\n  color: currentColor;\n  width: 1.15em;\n  height: 1.15em;\n  border: 0.15em solid currentColor;\n  border-radius: 50%;\n  display: grid;\n  place-content: center;\n}\ninput[type=\"checkbox\"]::before {\n  content: \"\";\n  width: 0.65em;\n  height: 0.65em;\n  transform: scale(0);\n  transition: 120ms transform ease-in-out;\n  box-shadow: inset 1em 1em red;\n  transform-origin: bottom left;\n  clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);\n}\n\ninput[type=\"checkbox\"]:checked::before {\n  transform: scale(1);\n}\n.addTask.active{\n    display:none;\n}\n.overlay.active {\n  display: block;\n}\n.overlay {\n  display: none;\n  width: 100%; /* Full width */\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  background-color: rgba(9, 13, 14, 0.8);\n  align-content: center;\n}\n.mode{\n  background-color: var(--bgColor1);\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: 10px;\n    border-radius: 50px;\n    height: 40px;\n    width: 80px;\n    box-sizing: border-box;\n    position: relative;\n    transform: scale(0.8);\n    transition: background-color 0.2s ease-in;\n    border: solid 3px var(--accentDark);\n    cursor: pointer;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,uBAAuB;EACvB,eAAe;;EAEf,mBAAmB;EACnB,mBAAmB;EACnB,mBAAmB;EACnB,uBAAuB;EACvB,oBAAoB;EACpB,iBAAiB;EACjB,qBAAqB;AACvB;AACA;EACE,kEAAkE;AACpE;AACA,qCAAqC;AACrC;EACE,mBAAmB;EACnB,mBAAmB;EACnB,mBAAmB;EACnB,uBAAuB;EACvB,oBAAoB;EACpB,qBAAqB;AACvB;AACA;EACE,iCAAiC;EACjC,aAAa;EACb,uBAAuB;EACvB,SAAS;EACT,UAAU;AACZ;AACA;EACE,aAAa;EACb,2BAA2B;EAC3B,8BAA8B;EAC9B,gBAAgB;EAChB,iBAAiB;AACnB;AACA;EACE,iBAAiB;EACjB,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,0BAA0B;EAC1B,iCAAiC;AACnC;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,SAAS;EACT,eAAe;EACf,gBAAgB;AAClB;AACA;EACE,eAAe;AACjB;;AAEA;EACE,kBAAkB;AACpB;AACA;EACE,cAAc;EACd,iCAAiC;EACjC,aAAa;EACb,4BAA4B;EAC5B,kBAAkB;EAClB,iBAAiB;EACjB,SAAS;AACX;AACA;EACE,YAAY;EACZ,cAAc;EACd,yBAAyB;EACzB,eAAe;EACf,gBAAgB;AAClB;AACA;EACE,iCAAiC;AACnC;AACA;EACE,aAAa;EACb,SAAS;AACX;AACA;;EAEE,eAAe;EACf,iCAAiC;EACjC,aAAa;EACb,iCAAiC;EACjC,SAAS;EACT,mBAAmB;EACnB,oBAAoB;EACpB,mBAAmB;EACnB,YAAY;AACd;AACA;EACE,qCAAqC;AACvC;AACA;EACE,iBAAiB;EACjB,mBAAmB;EACnB,aAAa;AACf;AACA;EACE,cAAc;AAChB;AACA;EACE,aAAa;EACb,SAAS;EACT,2BAA2B;AAC7B;AACA;EACE,eAAe;EACf,yCAAyC;EACzC,mBAAmB;AACrB;AACA;EACE,UAAU;EACV,WAAW;AACb;AACA;EACE,aAAa;AACf;AACA;EACE,cAAc;AAChB;;AAEA;EACE,YAAY;EACZ,cAAc;EACd,aAAa;EACb,YAAY,EAAE,+CAA+C;AAC/D;AACA;;EAEE,UAAU;EACV,gBAAgB;EAChB,UAAU;EACV,iCAAiC;EACjC,6BAA6B;AAC/B;AACA;EACE,aAAa;EACb,gBAAgB;AAClB;AACA;;EAEE,iBAAiB;EACjB,mBAAmB;EACnB,mCAAmC;EACnC,uBAAuB;EACvB,kBAAkB;EAClB,iBAAiB;AACnB;AACA;;EAEE,yBAAyB;EACzB,yBAAyB;AAC3B;AACA;EACE,aAAa;EACb,2BAA2B;EAC3B,aAAa;EACb,SAAS;EACT,qBAAqB;AACvB;AACA;EACE,aAAa;EACb,UAAU;EACV,eAAe;EACf,kBAAkB;EAClB,oBAAoB;EACpB,aAAa;EACb,mBAAmB;EACnB,mCAAmC;EACnC,mBAAmB;AACrB;;AAEA;EACE,iCAAiC;AACnC;AACA;EACE,qBAAqB;EACrB,UAAU;EACV,oBAAoB;AACtB;AACA;EACE,cAAc;AAChB;AACA;EACE,aAAa;AACf;AACA;EACE,cAAc;EACd,gCAAgC;EAChC,eAAe;EACf,QAAQ;EACR,SAAS;EACT,UAAU;EACV,4BAA4B;AAC9B;AACA;EACE,iCAAiC;EACjC,aAAa;EACb,2BAA2B;EAC3B,SAAS;EACT,oBAAoB;EACpB,uBAAuB;EACvB,eAAe;EACf,kBAAkB;EAClB,aAAa;EACb,mBAAmB;AACrB;AACA;EACE,SAAS;AACX;AACA;EACE,aAAa;EACb,2BAA2B;AAC7B;AACA;EACE,UAAU;EACV,YAAY;EACZ,QAAQ;AACV;AACA;EACE,aAAa;EACb,kCAAkC;EAClC,mBAAmB;EACnB,kBAAkB;EAClB,QAAQ;AACV;AACA;EACE,eAAe;AACjB;AACA;EACE,eAAe;AACjB;AACA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;AACrB;AACA;EACE,aAAa;EACb,SAAS;EACT,mBAAmB;AACrB;AACA;EACE,aAAa;AACf;AACA;EACE,aAAa;AACf;AACA;EACE,aAAa;AACf;AACA;EACE,cAAc;AAChB;AACA,gDAAgD;AAChD;EACE,cAAc;AAChB;AACA;EACE,aAAa;EACb,4BAA4B;AAC9B;AACA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,mBAAmB;EACnB,YAAY;EACZ,0CAA0C;AAC5C;AACA;EACE,eAAe;AACjB;AACA;EACE,gBAAgB;EAChB,yBAAyB;EACzB,SAAS;EACT,aAAa;EACb,mBAAmB;EACnB,aAAa;EACb,cAAc;EACd,iCAAiC;EACjC,kBAAkB;EAClB,aAAa;EACb,qBAAqB;AACvB;AACA;EACE,WAAW;EACX,aAAa;EACb,cAAc;EACd,mBAAmB;EACnB,uCAAuC;EACvC,6BAA6B;EAC7B,6BAA6B;EAC7B,uEAAuE;AACzE;;AAEA;EACE,mBAAmB;AACrB;AACA;IACI,YAAY;AAChB;AACA;EACE,cAAc;AAChB;AACA;EACE,aAAa;EACb,WAAW,EAAE,eAAe;EAC5B,YAAY;EACZ,kBAAkB;EAClB,MAAM;EACN,OAAO;EACP,sCAAsC;EACtC,qBAAqB;AACvB;AACA;EACE,iCAAiC;IAC/B,aAAa;IACb,mBAAmB;IACnB,8BAA8B;IAC9B,aAAa;IACb,mBAAmB;IACnB,YAAY;IACZ,WAAW;IACX,sBAAsB;IACtB,kBAAkB;IAClB,qBAAqB;IACrB,yCAAyC;IACzC,mCAAmC;IACnC,eAAe;AACnB","sourcesContent":[":root {\n  font-family: sans-serif;\n  font-size: 16px;\n\n  --bgColor1: #15202b;\n  --bgColor2: #192734;\n  --bgColor3: #22303c;\n  --bgColorPopUp: #273746;\n  --textColor: #eaebec;\n  --accent: #2abd67;\n  --accentDark: #1f8d4d;\n}\n.material-symbols-outlined {\n  font-variation-settings: \"FILL\" 0, \"wght\" 400, \"GRAD\" 0, \"opsz\" 48;\n}\n/* css when light mode is turned on */\nbody.light {\n  --bgColor2: #ececec;\n  --bgColor3: #f2f3f5;\n  --bgColor1: #fefcfe;\n  --bgColorPopUp: #f3f1f3;\n  --textColor: #374958;\n  --accentDark: #aeedc8;\n}\nbody {\n  background-color: var(--bgColor1);\n  height: 100vh;\n  color: var(--textColor);\n  margin: 0;\n  padding: 0;\n}\n.container {\n  display: grid;\n  grid-template-rows: 1fr 5fr;\n  grid-template-columns: 1fr 5fr;\n  min-width: 100vw;\n  min-height: 100vh;\n}\n.header {\n  grid-column: 1/-1;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0px 60px 0px 60px;\n  background-color: var(--bgColor2);\n}\n.logo {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 40px;\n  font-weight: 900;\n}\n#logo {\n  font-size: 40px;\n}\n\n.sidebar.active{\n  visibility: hidden;\n}\n.sidebar {\n  grid-row: 2/-1;\n  background-color: var(--bgColor3);\n  display: grid;\n  grid-template-rows: auto 1fr;\n  padding-left: 10px;\n  padding-top: 20px;\n  gap: 20px;\n}\nbutton {\n  border: none;\n  color: inherit;\n  background-color: inherit;\n  cursor: pointer;\n  outline: inherit;\n}\nbutton:hover {\n  background-color: var(--bgColor1);\n}\n.sideTop {\n  display: grid;\n  gap: 20px;\n}\n.sideItem,\n.addTask {\n  font-size: 15px;\n  background-color: var(--bgColor3);\n  display: grid;\n  grid-template-columns: 50px 100px;\n  gap: 15px;\n  align-items: center;\n  justify-items: start;\n  border-radius: 20px;\n  height: 35px;\n}\n.projectContainer > *.sideItem {\n  grid-template-columns: 50px 100px 1fr;\n}\n.projectContainer > .sideItem > span:last-child {\n  justify-self: end;\n  padding-right: 20px;\n  display: none;\n}\n.projectContainer > .sideItem:hover span#close {\n  display: block;\n}\n.sideBottom {\n  display: grid;\n  gap: 10px;\n  grid-auto-rows: max-content;\n}\n.sideBottom > .big {\n  font-size: 20px;\n  border-bottom: 2px solid var(--textColor);\n  padding-bottom: 3px;\n}\n.sideBottom > .projectContainer > .sideItem {\n  padding: 0;\n  width: 100%;\n}\n.project-modal {\n  display: none;\n}\n.project-modal.active {\n  display: block;\n}\n\ntextarea {\n  border: none;\n  overflow: auto;\n  outline: none;\n  resize: none; /*remove the resize handle on the bottom right*/\n}\n.input > input,\n.input > textarea {\n  all: unset;\n  min-height: 25px;\n  width: 96%;\n  background-color: var(--bgColor2);\n  border-bottom: 1px solid gray;\n}\n.buttons {\n  display: flex;\n  padding-top: 5px;\n}\n.buttons > button,\n#submit {\n  padding: 5px 15px;\n  border-radius: 20px;\n  background-color: var(--accentDark);\n  color: var(--textColor);\n  font-size: inherit;\n  font-weight: bold;\n}\n.buttons > #cancel,\n#cancel2 {\n  border: 1px solid #ee6d6d;\n  background-color: #ec4141;\n}\n.content {\n  display: grid;\n  grid-auto-rows: max-content;\n  padding: 20px;\n  gap: 20px;\n  justify-items: center;\n}\n.content > .Title {\n  height: 150px;\n  width: 90%;\n  font-size: 40px;\n  padding-left: 20px;\n  justify-self: center;\n  display: flex;\n  align-items: center;\n  background-color: var(--accentDark);\n  border-radius: 30px;\n}\n\nbutton.addTask:hover {\n  background-color: var(--bgColor2);\n}\n.content > .addTask {\n  justify-items: center;\n  width: 80%;\n  justify-self: center;\n}\n.taskModal.active {\n  display: block;\n}\n.taskModal {\n  display: none;\n}\n.taskModal.modal {\n  display: block;\n  transform: translate(-50%, -50%);\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  z-index: 2;\n  transition: 0.2s ease-in-out;\n}\n.modal-container {\n  background-color: var(--bgColor3);\n  display: grid;\n  grid-auto-rows: max-content;\n  gap: 20px;\n  justify-items: start;\n  justify-content: center;\n  font-size: 20px;\n  width: fit-content;\n  padding: 20px;\n  border-radius: 20px;\n}\n.modal-container > .buttons {\n  gap: 15px;\n}\n.input {\n  display: grid;\n  grid-auto-rows: max-content;\n}\n.taskContainer {\n  width: 90%;\n  display:grid;\n  gap:10px;\n}\n.task {\n  display: grid;\n  border: 1px solid var(--textColor);\n  border-radius: 15px;\n  padding: 10px 20px;\n  gap: 5px;\n}\n.task span {\n  cursor: pointer;\n}\nspan:hover{\n  cursor: pointer;\n}\n.task-shown {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.taskLeft {\n  display: flex;\n  gap: 10px;\n  align-items: center;\n}\n.taskRight {\n  display: flex;\n}\n.taskRight > #down.active {\n  display: none;\n}\n.taskRight > #up {\n  display: none;\n}\n.taskRight > #up.active {\n  display: block;\n}\n/*figure out how to add animation dropdown here*/\n.task-hidden.active {\n  display: block;\n}\n.task-hidden {\n  display: none;\n  transition: 0.5s ease-in-out;\n}\n.taskHiddenTop {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-right: 20px;\n  height: 25px;\n  border-bottom: 1px solid var(--accentDark);\n}\n.description {\n  margin-top: 5px;\n}\ninput[type=\"checkbox\"] {\n  appearance: none;\n  background-color: inherit;\n  margin: 0;\n  font: inherit;\n  color: currentColor;\n  width: 1.15em;\n  height: 1.15em;\n  border: 0.15em solid currentColor;\n  border-radius: 50%;\n  display: grid;\n  place-content: center;\n}\ninput[type=\"checkbox\"]::before {\n  content: \"\";\n  width: 0.65em;\n  height: 0.65em;\n  transform: scale(0);\n  transition: 120ms transform ease-in-out;\n  box-shadow: inset 1em 1em red;\n  transform-origin: bottom left;\n  clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);\n}\n\ninput[type=\"checkbox\"]:checked::before {\n  transform: scale(1);\n}\n.addTask.active{\n    display:none;\n}\n.overlay.active {\n  display: block;\n}\n.overlay {\n  display: none;\n  width: 100%; /* Full width */\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  background-color: rgba(9, 13, 14, 0.8);\n  align-content: center;\n}\n.mode{\n  background-color: var(--bgColor1);\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: 10px;\n    border-radius: 50px;\n    height: 40px;\n    width: 80px;\n    box-sizing: border-box;\n    position: relative;\n    transform: scale(0.8);\n    transition: background-color 0.2s ease-in;\n    border: solid 3px var(--accentDark);\n    cursor: pointer;\n}\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVcsS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxzQkFBc0IsTUFBTSxNQUFNLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sTUFBTSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLE1BQU0sWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsTUFBTSxZQUFZLE1BQU0sVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcs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QUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQ1c7QUFDVztBQUNOO0FBQ2M7QUFDbEI7QUFDakMsWUFBWSxNQUFNOztBQUVsQixrQkFBa0Isd0RBQUk7QUFDdEIsZ0JBQWdCLDBFQUFzQjtBQUN0QztBQUNBLGdFQUFZO0FBQ1o7QUFDQTtBQUNBLGdCQUFnQixNQUFNO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZGVmYXVsdE9wdGlvbnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vYWRkRGF5cy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2NvbXBhcmVBc2MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc1NhbWVEYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc1NhbWVXZWVrL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNUaGlzV2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzVG9kYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9zdGFydE9mRGF5L2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vc3RhcnRPZldlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9zdWJEYXlzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vdG9EYXRlL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL1VJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvcHJvamVjdExpc3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvcHJvamVjdE1vZGFsVUkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy90YXNrLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3Rhc2tVSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG5cXG4gIC0tYmdDb2xvcjE6ICMxNTIwMmI7XFxuICAtLWJnQ29sb3IyOiAjMTkyNzM0O1xcbiAgLS1iZ0NvbG9yMzogIzIyMzAzYztcXG4gIC0tYmdDb2xvclBvcFVwOiAjMjczNzQ2O1xcbiAgLS10ZXh0Q29sb3I6ICNlYWViZWM7XFxuICAtLWFjY2VudDogIzJhYmQ2NztcXG4gIC0tYWNjZW50RGFyazogIzFmOGQ0ZDtcXG59XFxuLm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWQge1xcbiAgZm9udC12YXJpYXRpb24tc2V0dGluZ3M6IFxcXCJGSUxMXFxcIiAwLCBcXFwid2dodFxcXCIgNDAwLCBcXFwiR1JBRFxcXCIgMCwgXFxcIm9wc3pcXFwiIDQ4O1xcbn1cXG4vKiBjc3Mgd2hlbiBsaWdodCBtb2RlIGlzIHR1cm5lZCBvbiAqL1xcbmJvZHkubGlnaHQge1xcbiAgLS1iZ0NvbG9yMjogI2VjZWNlYztcXG4gIC0tYmdDb2xvcjM6ICNmMmYzZjU7XFxuICAtLWJnQ29sb3IxOiAjZmVmY2ZlO1xcbiAgLS1iZ0NvbG9yUG9wVXA6ICNmM2YxZjM7XFxuICAtLXRleHRDb2xvcjogIzM3NDk1ODtcXG4gIC0tYWNjZW50RGFyazogI2FlZWRjODtcXG59XFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZ0NvbG9yMSk7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgY29sb3I6IHZhcigtLXRleHRDb2xvcik7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG4uY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciA1ZnI7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA1ZnI7XFxuICBtaW4td2lkdGg6IDEwMHZ3O1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxufVxcbi5oZWFkZXIge1xcbiAgZ3JpZC1jb2x1bW46IDEvLTE7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDBweCA2MHB4IDBweCA2MHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmdDb2xvcjIpO1xcbn1cXG4ubG9nbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMTBweDtcXG4gIGZvbnQtc2l6ZTogNDBweDtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxufVxcbiNsb2dvIHtcXG4gIGZvbnQtc2l6ZTogNDBweDtcXG59XFxuXFxuLnNpZGViYXIuYWN0aXZle1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG4uc2lkZWJhciB7XFxuICBncmlkLXJvdzogMi8tMTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnQ29sb3IzKTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyO1xcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbiAgcGFkZGluZy10b3A6IDIwcHg7XFxuICBnYXA6IDIwcHg7XFxufVxcbmJ1dHRvbiB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBvdXRsaW5lOiBpbmhlcml0O1xcbn1cXG5idXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmdDb2xvcjEpO1xcbn1cXG4uc2lkZVRvcCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ2FwOiAyMHB4O1xcbn1cXG4uc2lkZUl0ZW0sXFxuLmFkZFRhc2sge1xcbiAgZm9udC1zaXplOiAxNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmdDb2xvcjMpO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNTBweCAxMDBweDtcXG4gIGdhcDogMTVweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWl0ZW1zOiBzdGFydDtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBoZWlnaHQ6IDM1cHg7XFxufVxcbi5wcm9qZWN0Q29udGFpbmVyID4gKi5zaWRlSXRlbSB7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDUwcHggMTAwcHggMWZyO1xcbn1cXG4ucHJvamVjdENvbnRhaW5lciA+IC5zaWRlSXRlbSA+IHNwYW46bGFzdC1jaGlsZCB7XFxuICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4ucHJvamVjdENvbnRhaW5lciA+IC5zaWRlSXRlbTpob3ZlciBzcGFuI2Nsb3NlIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG4uc2lkZUJvdHRvbSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ2FwOiAxMHB4O1xcbiAgZ3JpZC1hdXRvLXJvd3M6IG1heC1jb250ZW50O1xcbn1cXG4uc2lkZUJvdHRvbSA+IC5iaWcge1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLXRleHRDb2xvcik7XFxuICBwYWRkaW5nLWJvdHRvbTogM3B4O1xcbn1cXG4uc2lkZUJvdHRvbSA+IC5wcm9qZWN0Q29udGFpbmVyID4gLnNpZGVJdGVtIHtcXG4gIHBhZGRpbmc6IDA7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLnByb2plY3QtbW9kYWwge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLnByb2plY3QtbW9kYWwuYWN0aXZlIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG50ZXh0YXJlYSB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBvdmVyZmxvdzogYXV0bztcXG4gIG91dGxpbmU6IG5vbmU7XFxuICByZXNpemU6IG5vbmU7IC8qcmVtb3ZlIHRoZSByZXNpemUgaGFuZGxlIG9uIHRoZSBib3R0b20gcmlnaHQqL1xcbn1cXG4uaW5wdXQgPiBpbnB1dCxcXG4uaW5wdXQgPiB0ZXh0YXJlYSB7XFxuICBhbGw6IHVuc2V0O1xcbiAgbWluLWhlaWdodDogMjVweDtcXG4gIHdpZHRoOiA5NiU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZ0NvbG9yMik7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgZ3JheTtcXG59XFxuLmJ1dHRvbnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHBhZGRpbmctdG9wOiA1cHg7XFxufVxcbi5idXR0b25zID4gYnV0dG9uLFxcbiNzdWJtaXQge1xcbiAgcGFkZGluZzogNXB4IDE1cHg7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50RGFyayk7XFxuICBjb2xvcjogdmFyKC0tdGV4dENvbG9yKTtcXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG4uYnV0dG9ucyA+ICNjYW5jZWwsXFxuI2NhbmNlbDIge1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2VlNmQ2ZDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlYzQxNDE7XFxufVxcbi5jb250ZW50IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLWF1dG8tcm93czogbWF4LWNvbnRlbnQ7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgZ2FwOiAyMHB4O1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbn1cXG4uY29udGVudCA+IC5UaXRsZSB7XFxuICBoZWlnaHQ6IDE1MHB4O1xcbiAgd2lkdGg6IDkwJTtcXG4gIGZvbnQtc2l6ZTogNDBweDtcXG4gIHBhZGRpbmctbGVmdDogMjBweDtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnREYXJrKTtcXG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxufVxcblxcbmJ1dHRvbi5hZGRUYXNrOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnQ29sb3IyKTtcXG59XFxuLmNvbnRlbnQgPiAuYWRkVGFzayB7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogODAlO1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxufVxcbi50YXNrTW9kYWwuYWN0aXZlIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG4udGFza01vZGFsIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi50YXNrTW9kYWwubW9kYWwge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgei1pbmRleDogMjtcXG4gIHRyYW5zaXRpb246IDAuMnMgZWFzZS1pbi1vdXQ7XFxufVxcbi5tb2RhbC1jb250YWluZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmdDb2xvcjMpO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtYXV0by1yb3dzOiBtYXgtY29udGVudDtcXG4gIGdhcDogMjBweDtcXG4gIGp1c3RpZnktaXRlbXM6IHN0YXJ0O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG59XFxuLm1vZGFsLWNvbnRhaW5lciA+IC5idXR0b25zIHtcXG4gIGdhcDogMTVweDtcXG59XFxuLmlucHV0IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLWF1dG8tcm93czogbWF4LWNvbnRlbnQ7XFxufVxcbi50YXNrQ29udGFpbmVyIHtcXG4gIHdpZHRoOiA5MCU7XFxuICBkaXNwbGF5OmdyaWQ7XFxuICBnYXA6MTBweDtcXG59XFxuLnRhc2sge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXRleHRDb2xvcik7XFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgcGFkZGluZzogMTBweCAyMHB4O1xcbiAgZ2FwOiA1cHg7XFxufVxcbi50YXNrIHNwYW4ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5zcGFuOmhvdmVye1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4udGFzay1zaG93biB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLnRhc2tMZWZ0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDEwcHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4udGFza1JpZ2h0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcbi50YXNrUmlnaHQgPiAjZG93bi5hY3RpdmUge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLnRhc2tSaWdodCA+ICN1cCB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4udGFza1JpZ2h0ID4gI3VwLmFjdGl2ZSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuLypmaWd1cmUgb3V0IGhvdyB0byBhZGQgYW5pbWF0aW9uIGRyb3Bkb3duIGhlcmUqL1xcbi50YXNrLWhpZGRlbi5hY3RpdmUge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcbi50YXNrLWhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgdHJhbnNpdGlvbjogMC41cyBlYXNlLWluLW91dDtcXG59XFxuLnRhc2tIaWRkZW5Ub3Age1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xcbiAgaGVpZ2h0OiAyNXB4O1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWFjY2VudERhcmspO1xcbn1cXG4uZGVzY3JpcHRpb24ge1xcbiAgbWFyZ2luLXRvcDogNXB4O1xcbn1cXG5pbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdIHtcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udDogaW5oZXJpdDtcXG4gIGNvbG9yOiBjdXJyZW50Q29sb3I7XFxuICB3aWR0aDogMS4xNWVtO1xcbiAgaGVpZ2h0OiAxLjE1ZW07XFxuICBib3JkZXI6IDAuMTVlbSBzb2xpZCBjdXJyZW50Q29sb3I7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcGxhY2UtY29udGVudDogY2VudGVyO1xcbn1cXG5pbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICB3aWR0aDogMC42NWVtO1xcbiAgaGVpZ2h0OiAwLjY1ZW07XFxuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xcbiAgdHJhbnNpdGlvbjogMTIwbXMgdHJhbnNmb3JtIGVhc2UtaW4tb3V0O1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMWVtIDFlbSByZWQ7XFxuICB0cmFuc2Zvcm0tb3JpZ2luOiBib3R0b20gbGVmdDtcXG4gIGNsaXAtcGF0aDogcG9seWdvbigxNCUgNDQlLCAwIDY1JSwgNTAlIDEwMCUsIDEwMCUgMTYlLCA4MCUgMCUsIDQzJSA2MiUpO1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmNoZWNrZWQ6OmJlZm9yZSB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbn1cXG4uYWRkVGFzay5hY3RpdmV7XFxuICAgIGRpc3BsYXk6bm9uZTtcXG59XFxuLm92ZXJsYXkuYWN0aXZlIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG4ub3ZlcmxheSB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgd2lkdGg6IDEwMCU7IC8qIEZ1bGwgd2lkdGggKi9cXG4gIGhlaWdodDogMTAwJTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDksIDEzLCAxNCwgMC44KTtcXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLm1vZGV7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZ0NvbG9yMSk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICB3aWR0aDogODBweDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOCk7XFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlLWluO1xcbiAgICBib3JkZXI6IHNvbGlkIDNweCB2YXIoLS1hY2NlbnREYXJrKTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGVBQWU7O0VBRWYsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLG9CQUFvQjtFQUNwQixpQkFBaUI7RUFDakIscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSxrRUFBa0U7QUFDcEU7QUFDQSxxQ0FBcUM7QUFDckM7RUFDRSxtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsb0JBQW9CO0VBQ3BCLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UsaUNBQWlDO0VBQ2pDLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsU0FBUztFQUNULFVBQVU7QUFDWjtBQUNBO0VBQ0UsYUFBYTtFQUNiLDJCQUEyQjtFQUMzQiw4QkFBOEI7RUFDOUIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLDBCQUEwQjtFQUMxQixpQ0FBaUM7QUFDbkM7QUFDQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsU0FBUztFQUNULGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGNBQWM7RUFDZCxpQ0FBaUM7RUFDakMsYUFBYTtFQUNiLDRCQUE0QjtFQUM1QixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLFNBQVM7QUFDWDtBQUNBO0VBQ0UsWUFBWTtFQUNaLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjtBQUNBO0VB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LGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLGNBQWM7RUFDZCxpQ0FBaUM7RUFDakMsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsY0FBYztFQUNkLG1CQUFtQjtFQUNuQix1Q0FBdUM7RUFDdkMsNkJBQTZCO0VBQzdCLDZCQUE2QjtFQUM3Qix1RUFBdUU7QUFDekU7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7QUFDQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGFBQWE7RUFDYixXQUFXLEVBQUUsZUFBZTtFQUM1QixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1Asc0NBQXNDO0VBQ3RDLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UsaUNBQWlDO0lBQy9CLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsOEJBQThCO0lBQzlCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQix5Q0FBeUM7SUFDekMsbUNBQW1DO0lBQ25DLGVBQWU7QUFDbkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDE2cHg7XFxuXFxuICAtLWJnQ29sb3IxOiAjMTUyMDJiO1xcbiAgLS1iZ0NvbG9yMjogIzE5MjczNDtcXG4gIC0tYmdDb2xvcjM6ICMyMjMwM2M7XFxuICAtLWJnQ29sb3JQb3BVcDogIzI3Mzc0NjtcXG4gIC0tdGV4dENvbG9yOiAjZWFlYmVjO1xcbiAgLS1hY2NlbnQ6ICMyYWJkNjc7XFxuICAtLWFjY2VudERhcms6ICMxZjhkNGQ7XFxufVxcbi5tYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkIHtcXG4gIGZvbnQtdmFyaWF0aW9uLXNldHRpbmdzOiBcXFwiRklMTFxcXCIgMCwgXFxcIndnaHRcXFwiIDQwMCwgXFxcIkdSQURcXFwiIDAsIFxcXCJvcHN6XFxcIiA0ODtcXG59XFxuLyogY3NzIHdoZW4gbGlnaHQgbW9kZSBpcyB0dXJuZWQgb24gKi9cXG5ib2R5LmxpZ2h0IHtcXG4gIC0tYmdDb2xvcjI6ICNlY2VjZWM7XFxuICAtLWJnQ29sb3IzOiAjZjJmM2Y1O1xcbiAgLS1iZ0NvbG9yMTogI2ZlZmNmZTtcXG4gIC0tYmdDb2xvclBvcFVwOiAjZjNmMWYzO1xcbiAgLS10ZXh0Q29sb3I6ICMzNzQ5NTg7XFxuICAtLWFjY2VudERhcms6ICNhZWVkYzg7XFxufVxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmdDb2xvcjEpO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGNvbG9yOiB2YXIoLS10ZXh0Q29sb3IpO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuLmNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgNWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNWZyO1xcbiAgbWluLXdpZHRoOiAxMDB2dztcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbn1cXG4uaGVhZGVyIHtcXG4gIGdyaWQtY29sdW1uOiAxLy0xO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAwcHggNjBweCAwcHggNjBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnQ29sb3IyKTtcXG59XFxuLmxvZ28ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDEwcHg7XFxuICBmb250LXNpemU6IDQwcHg7XFxuICBmb250LXdlaWdodDogOTAwO1xcbn1cXG4jbG9nbyB7XFxuICBmb250LXNpemU6IDQwcHg7XFxufVxcblxcbi5zaWRlYmFyLmFjdGl2ZXtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuLnNpZGViYXIge1xcbiAgZ3JpZC1yb3c6IDIvLTE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZ0NvbG9yMyk7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmcjtcXG4gIHBhZGRpbmctbGVmdDogMTBweDtcXG4gIHBhZGRpbmctdG9wOiAyMHB4O1xcbiAgZ2FwOiAyMHB4O1xcbn1cXG5idXR0b24ge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgb3V0bGluZTogaW5oZXJpdDtcXG59XFxuYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnQ29sb3IxKTtcXG59XFxuLnNpZGVUb3Age1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdhcDogMjBweDtcXG59XFxuLnNpZGVJdGVtLFxcbi5hZGRUYXNrIHtcXG4gIGZvbnQtc2l6ZTogMTVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnQ29sb3IzKTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDUwcHggMTAwcHg7XFxuICBnYXA6IDE1cHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1pdGVtczogc3RhcnQ7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgaGVpZ2h0OiAzNXB4O1xcbn1cXG4ucHJvamVjdENvbnRhaW5lciA+ICouc2lkZUl0ZW0ge1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1MHB4IDEwMHB4IDFmcjtcXG59XFxuLnByb2plY3RDb250YWluZXIgPiAuc2lkZUl0ZW0gPiBzcGFuOmxhc3QtY2hpbGQge1xcbiAganVzdGlmeS1zZWxmOiBlbmQ7XFxuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLnByb2plY3RDb250YWluZXIgPiAuc2lkZUl0ZW06aG92ZXIgc3BhbiNjbG9zZSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuLnNpZGVCb3R0b20ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdhcDogMTBweDtcXG4gIGdyaWQtYXV0by1yb3dzOiBtYXgtY29udGVudDtcXG59XFxuLnNpZGVCb3R0b20gPiAuYmlnIHtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS10ZXh0Q29sb3IpO1xcbiAgcGFkZGluZy1ib3R0b206IDNweDtcXG59XFxuLnNpZGVCb3R0b20gPiAucHJvamVjdENvbnRhaW5lciA+IC5zaWRlSXRlbSB7XFxuICBwYWRkaW5nOiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi5wcm9qZWN0LW1vZGFsIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5wcm9qZWN0LW1vZGFsLmFjdGl2ZSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxudGV4dGFyZWEge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxuICBvdXRsaW5lOiBub25lO1xcbiAgcmVzaXplOiBub25lOyAvKnJlbW92ZSB0aGUgcmVzaXplIGhhbmRsZSBvbiB0aGUgYm90dG9tIHJpZ2h0Ki9cXG59XFxuLmlucHV0ID4gaW5wdXQsXFxuLmlucHV0ID4gdGV4dGFyZWEge1xcbiAgYWxsOiB1bnNldDtcXG4gIG1pbi1oZWlnaHQ6IDI1cHg7XFxuICB3aWR0aDogOTYlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmdDb2xvcjIpO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGdyYXk7XFxufVxcbi5idXR0b25zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwYWRkaW5nLXRvcDogNXB4O1xcbn1cXG4uYnV0dG9ucyA+IGJ1dHRvbixcXG4jc3VibWl0IHtcXG4gIHBhZGRpbmc6IDVweCAxNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudERhcmspO1xcbiAgY29sb3I6IHZhcigtLXRleHRDb2xvcik7XFxuICBmb250LXNpemU6IGluaGVyaXQ7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuLmJ1dHRvbnMgPiAjY2FuY2VsLFxcbiNjYW5jZWwyIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlZTZkNmQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWM0MTQxO1xcbn1cXG4uY29udGVudCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC1hdXRvLXJvd3M6IG1heC1jb250ZW50O1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGdhcDogMjBweDtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG59XFxuLmNvbnRlbnQgPiAuVGl0bGUge1xcbiAgaGVpZ2h0OiAxNTBweDtcXG4gIHdpZHRoOiA5MCU7XFxuICBmb250LXNpemU6IDQwcHg7XFxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50RGFyayk7XFxuICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbn1cXG5cXG5idXR0b24uYWRkVGFzazpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZ0NvbG9yMik7XFxufVxcbi5jb250ZW50ID4gLmFkZFRhc2sge1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDgwJTtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbn1cXG4udGFza01vZGFsLmFjdGl2ZSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuLnRhc2tNb2RhbCB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4udGFza01vZGFsLm1vZGFsIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHotaW5kZXg6IDI7XFxuICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UtaW4tb3V0O1xcbn1cXG4ubW9kYWwtY29udGFpbmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnQ29sb3IzKTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLWF1dG8tcm93czogbWF4LWNvbnRlbnQ7XFxuICBnYXA6IDIwcHg7XFxuICBqdXN0aWZ5LWl0ZW1zOiBzdGFydDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxufVxcbi5tb2RhbC1jb250YWluZXIgPiAuYnV0dG9ucyB7XFxuICBnYXA6IDE1cHg7XFxufVxcbi5pbnB1dCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC1hdXRvLXJvd3M6IG1heC1jb250ZW50O1xcbn1cXG4udGFza0NvbnRhaW5lciB7XFxuICB3aWR0aDogOTAlO1xcbiAgZGlzcGxheTpncmlkO1xcbiAgZ2FwOjEwcHg7XFxufVxcbi50YXNrIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS10ZXh0Q29sb3IpO1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXG4gIGdhcDogNXB4O1xcbn1cXG4udGFzayBzcGFuIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuc3Bhbjpob3ZlcntcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLnRhc2stc2hvd24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi50YXNrTGVmdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxMHB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLnRhc2tSaWdodCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4udGFza1JpZ2h0ID4gI2Rvd24uYWN0aXZlIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi50YXNrUmlnaHQgPiAjdXAge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLnRhc2tSaWdodCA+ICN1cC5hY3RpdmUge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcbi8qZmlndXJlIG91dCBob3cgdG8gYWRkIGFuaW1hdGlvbiBkcm9wZG93biBoZXJlKi9cXG4udGFzay1oaWRkZW4uYWN0aXZlIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG4udGFzay1oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHRyYW5zaXRpb246IDAuNXMgZWFzZS1pbi1vdXQ7XFxufVxcbi50YXNrSGlkZGVuVG9wIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZy1yaWdodDogMjBweDtcXG4gIGhlaWdodDogMjVweDtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1hY2NlbnREYXJrKTtcXG59XFxuLmRlc2NyaXB0aW9uIHtcXG4gIG1hcmdpbi10b3A6IDVweDtcXG59XFxuaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSB7XFxuICBhcHBlYXJhbmNlOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQ6IGluaGVyaXQ7XFxuICBjb2xvcjogY3VycmVudENvbG9yO1xcbiAgd2lkdGg6IDEuMTVlbTtcXG4gIGhlaWdodDogMS4xNWVtO1xcbiAgYm9yZGVyOiAwLjE1ZW0gc29saWQgY3VycmVudENvbG9yO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgd2lkdGg6IDAuNjVlbTtcXG4gIGhlaWdodDogMC42NWVtO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcXG4gIHRyYW5zaXRpb246IDEyMG1zIHRyYW5zZm9ybSBlYXNlLWluLW91dDtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDFlbSAxZW0gcmVkO1xcbiAgdHJhbnNmb3JtLW9yaWdpbjogYm90dG9tIGxlZnQ7XFxuICBjbGlwLXBhdGg6IHBvbHlnb24oMTQlIDQ0JSwgMCA2NSUsIDUwJSAxMDAlLCAxMDAlIDE2JSwgODAlIDAlLCA0MyUgNjIlKTtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXTpjaGVja2VkOjpiZWZvcmUge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG59XFxuLmFkZFRhc2suYWN0aXZle1xcbiAgICBkaXNwbGF5Om5vbmU7XFxufVxcbi5vdmVybGF5LmFjdGl2ZSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuLm92ZXJsYXkge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHdpZHRoOiAxMDAlOyAvKiBGdWxsIHdpZHRoICovXFxuICBoZWlnaHQ6IDEwMCU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg5LCAxMywgMTQsIDAuOCk7XFxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5tb2Rle1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmdDb2xvcjEpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgd2lkdGg6IDgwcHg7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgZWFzZS1pbjtcXG4gICAgYm9yZGVyOiBzb2xpZCAzcHggdmFyKC0tYWNjZW50RGFyayk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJ2YXIgZGVmYXVsdE9wdGlvbnMgPSB7fTtcbmV4cG9ydCBmdW5jdGlvbiBnZXREZWZhdWx0T3B0aW9ucygpIHtcbiAgcmV0dXJuIGRlZmF1bHRPcHRpb25zO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHNldERlZmF1bHRPcHRpb25zKG5ld09wdGlvbnMpIHtcbiAgZGVmYXVsdE9wdGlvbnMgPSBuZXdPcHRpb25zO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlcXVpcmVkQXJncyhyZXF1aXJlZCwgYXJncykge1xuICBpZiAoYXJncy5sZW5ndGggPCByZXF1aXJlZCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocmVxdWlyZWQgKyAnIGFyZ3VtZW50JyArIChyZXF1aXJlZCA+IDEgPyAncycgOiAnJykgKyAnIHJlcXVpcmVkLCBidXQgb25seSAnICsgYXJncy5sZW5ndGggKyAnIHByZXNlbnQnKTtcbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvSW50ZWdlcihkaXJ0eU51bWJlcikge1xuICBpZiAoZGlydHlOdW1iZXIgPT09IG51bGwgfHwgZGlydHlOdW1iZXIgPT09IHRydWUgfHwgZGlydHlOdW1iZXIgPT09IGZhbHNlKSB7XG4gICAgcmV0dXJuIE5hTjtcbiAgfVxuXG4gIHZhciBudW1iZXIgPSBOdW1iZXIoZGlydHlOdW1iZXIpO1xuXG4gIGlmIChpc05hTihudW1iZXIpKSB7XG4gICAgcmV0dXJuIG51bWJlcjtcbiAgfVxuXG4gIHJldHVybiBudW1iZXIgPCAwID8gTWF0aC5jZWlsKG51bWJlcikgOiBNYXRoLmZsb29yKG51bWJlcik7XG59IiwiaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgYWRkRGF5c1xuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBBZGQgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgZGF5cyB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFkZCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBkYXlzIHRvIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBiZSBjaGFuZ2VkXG4gKiBAcGFyYW0ge051bWJlcn0gYW1vdW50IC0gdGhlIGFtb3VudCBvZiBkYXlzIHRvIGJlIGFkZGVkLiBQb3NpdGl2ZSBkZWNpbWFscyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguZmxvb3JgLCBkZWNpbWFscyBsZXNzIHRoYW4gemVybyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguY2VpbGAuXG4gKiBAcmV0dXJucyB7RGF0ZX0gLSB0aGUgbmV3IGRhdGUgd2l0aCB0aGUgZGF5cyBhZGRlZFxuICogQHRocm93cyB7VHlwZUVycm9yfSAtIDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFkZCAxMCBkYXlzIHRvIDEgU2VwdGVtYmVyIDIwMTQ6XG4gKiBjb25zdCByZXN1bHQgPSBhZGREYXlzKG5ldyBEYXRlKDIwMTQsIDgsIDEpLCAxMClcbiAqIC8vPT4gVGh1IFNlcCAxMSAyMDE0IDAwOjAwOjAwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkRGF5cyhkaXJ0eURhdGUsIGRpcnR5QW1vdW50KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgYW1vdW50ID0gdG9JbnRlZ2VyKGRpcnR5QW1vdW50KTtcblxuICBpZiAoaXNOYU4oYW1vdW50KSkge1xuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG5cbiAgaWYgKCFhbW91bnQpIHtcbiAgICAvLyBJZiAwIGRheXMsIG5vLW9wIHRvIGF2b2lkIGNoYW5naW5nIHRpbWVzIGluIHRoZSBob3VyIGJlZm9yZSBlbmQgb2YgRFNUXG4gICAgcmV0dXJuIGRhdGU7XG4gIH1cblxuICBkYXRlLnNldERhdGUoZGF0ZS5nZXREYXRlKCkgKyBhbW91bnQpO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGNvbXBhcmVBc2NcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgQ29tcGFyZSB0aGUgdHdvIGRhdGVzIGFuZCByZXR1cm4gLTEsIDAgb3IgMS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbXBhcmUgdGhlIHR3byBkYXRlcyBhbmQgcmV0dXJuIDEgaWYgdGhlIGZpcnN0IGRhdGUgaXMgYWZ0ZXIgdGhlIHNlY29uZCxcbiAqIC0xIGlmIHRoZSBmaXJzdCBkYXRlIGlzIGJlZm9yZSB0aGUgc2Vjb25kIG9yIDAgaWYgZGF0ZXMgYXJlIGVxdWFsLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVMZWZ0IC0gdGhlIGZpcnN0IGRhdGUgdG8gY29tcGFyZVxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZVJpZ2h0IC0gdGhlIHNlY29uZCBkYXRlIHRvIGNvbXBhcmVcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IHRoZSByZXN1bHQgb2YgdGhlIGNvbXBhcmlzb25cbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29tcGFyZSAxMSBGZWJydWFyeSAxOTg3IGFuZCAxMCBKdWx5IDE5ODk6XG4gKiBjb25zdCByZXN1bHQgPSBjb21wYXJlQXNjKG5ldyBEYXRlKDE5ODcsIDEsIDExKSwgbmV3IERhdGUoMTk4OSwgNiwgMTApKVxuICogLy89PiAtMVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBTb3J0IHRoZSBhcnJheSBvZiBkYXRlczpcbiAqIGNvbnN0IHJlc3VsdCA9IFtcbiAqICAgbmV3IERhdGUoMTk5NSwgNiwgMiksXG4gKiAgIG5ldyBEYXRlKDE5ODcsIDEsIDExKSxcbiAqICAgbmV3IERhdGUoMTk4OSwgNiwgMTApXG4gKiBdLnNvcnQoY29tcGFyZUFzYylcbiAqIC8vPT4gW1xuICogLy8gICBXZWQgRmViIDExIDE5ODcgMDA6MDA6MDAsXG4gKiAvLyAgIE1vbiBKdWwgMTAgMTk4OSAwMDowMDowMCxcbiAqIC8vICAgU3VuIEp1bCAwMiAxOTk1IDAwOjAwOjAwXG4gKiAvLyBdXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29tcGFyZUFzYyhkaXJ0eURhdGVMZWZ0LCBkaXJ0eURhdGVSaWdodCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGVMZWZ0ID0gdG9EYXRlKGRpcnR5RGF0ZUxlZnQpO1xuICB2YXIgZGF0ZVJpZ2h0ID0gdG9EYXRlKGRpcnR5RGF0ZVJpZ2h0KTtcbiAgdmFyIGRpZmYgPSBkYXRlTGVmdC5nZXRUaW1lKCkgLSBkYXRlUmlnaHQuZ2V0VGltZSgpO1xuXG4gIGlmIChkaWZmIDwgMCkge1xuICAgIHJldHVybiAtMTtcbiAgfSBlbHNlIGlmIChkaWZmID4gMCkge1xuICAgIHJldHVybiAxOyAvLyBSZXR1cm4gMCBpZiBkaWZmIGlzIDA7IHJldHVybiBOYU4gaWYgZGlmZiBpcyBOYU5cbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZGlmZjtcbiAgfVxufSIsImltcG9ydCBzdGFydE9mRGF5IGZyb20gXCIuLi9zdGFydE9mRGF5L2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc1NhbWVEYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgQXJlIHRoZSBnaXZlbiBkYXRlcyBpbiB0aGUgc2FtZSBkYXkgKGFuZCB5ZWFyIGFuZCBtb250aCk/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBBcmUgdGhlIGdpdmVuIGRhdGVzIGluIHRoZSBzYW1lIGRheSAoYW5kIHllYXIgYW5kIG1vbnRoKT9cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlTGVmdCAtIHRoZSBmaXJzdCBkYXRlIHRvIGNoZWNrXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlUmlnaHQgLSB0aGUgc2Vjb25kIGRhdGUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZXMgYXJlIGluIHRoZSBzYW1lIGRheSAoYW5kIHllYXIgYW5kIG1vbnRoKVxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgNCBTZXB0ZW1iZXIgMDY6MDA6MDAgYW5kIDQgU2VwdGVtYmVyIDE4OjAwOjAwIGluIHRoZSBzYW1lIGRheT9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZURheShuZXcgRGF0ZSgyMDE0LCA4LCA0LCA2LCAwKSwgbmV3IERhdGUoMjAxNCwgOCwgNCwgMTgsIDApKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSA0IFNlcHRlbWJlciBhbmQgNCBPY3RvYmVyIGluIHRoZSBzYW1lIGRheT9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZURheShuZXcgRGF0ZSgyMDE0LCA4LCA0KSwgbmV3IERhdGUoMjAxNCwgOSwgNCkpXG4gKiAvLz0+IGZhbHNlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSA0IFNlcHRlbWJlciwgMjAxNCBhbmQgNCBTZXB0ZW1iZXIsIDIwMTUgaW4gdGhlIHNhbWUgZGF5P1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDQpLCBuZXcgRGF0ZSgyMDE1LCA4LCA0KSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1NhbWVEYXkoZGlydHlEYXRlTGVmdCwgZGlydHlEYXRlUmlnaHQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlTGVmdFN0YXJ0T2ZEYXkgPSBzdGFydE9mRGF5KGRpcnR5RGF0ZUxlZnQpO1xuICB2YXIgZGF0ZVJpZ2h0U3RhcnRPZkRheSA9IHN0YXJ0T2ZEYXkoZGlydHlEYXRlUmlnaHQpO1xuICByZXR1cm4gZGF0ZUxlZnRTdGFydE9mRGF5LmdldFRpbWUoKSA9PT0gZGF0ZVJpZ2h0U3RhcnRPZkRheS5nZXRUaW1lKCk7XG59IiwiaW1wb3J0IHN0YXJ0T2ZXZWVrIGZyb20gXCIuLi9zdGFydE9mV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcblxuLyoqXG4gKiBAbmFtZSBpc1NhbWVXZWVrXG4gKiBAY2F0ZWdvcnkgV2VlayBIZWxwZXJzXG4gKiBAc3VtbWFyeSBBcmUgdGhlIGdpdmVuIGRhdGVzIGluIHRoZSBzYW1lIHdlZWsgKGFuZCBtb250aCBhbmQgeWVhcik/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBBcmUgdGhlIGdpdmVuIGRhdGVzIGluIHRoZSBzYW1lIHdlZWsgKGFuZCBtb250aCBhbmQgeWVhcik/XG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZUxlZnQgLSB0aGUgZmlyc3QgZGF0ZSB0byBjaGVja1xuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZVJpZ2h0IC0gdGhlIHNlY29uZCBkYXRlIHRvIGNoZWNrXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gYW4gb2JqZWN0IHdpdGggb3B0aW9ucy5cbiAqIEBwYXJhbSB7TG9jYWxlfSBbb3B0aW9ucy5sb2NhbGU9ZGVmYXVsdExvY2FsZV0gLSB0aGUgbG9jYWxlIG9iamVjdC4gU2VlIFtMb2NhbGVde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvTG9jYWxlfVxuICogQHBhcmFtIHswfDF8MnwzfDR8NXw2fSBbb3B0aW9ucy53ZWVrU3RhcnRzT249MF0gLSB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2VlayAoMCAtIFN1bmRheSlcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZXMgYXJlIGluIHRoZSBzYW1lIHdlZWsgKGFuZCBtb250aCBhbmQgeWVhcilcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLndlZWtTdGFydHNPbmAgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDZcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDMxIEF1Z3VzdCAyMDE0IGFuZCA0IFNlcHRlbWJlciAyMDE0IGluIHRoZSBzYW1lIHdlZWs/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVXZWVrKG5ldyBEYXRlKDIwMTQsIDcsIDMxKSwgbmV3IERhdGUoMjAxNCwgOCwgNCkpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgd2VlayBzdGFydHMgd2l0aCBNb25kYXksXG4gKiAvLyBhcmUgMzEgQXVndXN0IDIwMTQgYW5kIDQgU2VwdGVtYmVyIDIwMTQgaW4gdGhlIHNhbWUgd2Vlaz9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZVdlZWsobmV3IERhdGUoMjAxNCwgNywgMzEpLCBuZXcgRGF0ZSgyMDE0LCA4LCA0KSwge1xuICogICB3ZWVrU3RhcnRzT246IDFcbiAqIH0pXG4gKiAvLz0+IGZhbHNlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSAxIEphbnVhcnkgMjAxNCBhbmQgMSBKYW51YXJ5IDIwMTUgaW4gdGhlIHNhbWUgd2Vlaz9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZVdlZWsobmV3IERhdGUoMjAxNCwgMCwgMSksIG5ldyBEYXRlKDIwMTUsIDAsIDEpKVxuICogLy89PiBmYWxzZVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1NhbWVXZWVrKGRpcnR5RGF0ZUxlZnQsIGRpcnR5RGF0ZVJpZ2h0LCBvcHRpb25zKSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZUxlZnRTdGFydE9mV2VlayA9IHN0YXJ0T2ZXZWVrKGRpcnR5RGF0ZUxlZnQsIG9wdGlvbnMpO1xuICB2YXIgZGF0ZVJpZ2h0U3RhcnRPZldlZWsgPSBzdGFydE9mV2VlayhkaXJ0eURhdGVSaWdodCwgb3B0aW9ucyk7XG4gIHJldHVybiBkYXRlTGVmdFN0YXJ0T2ZXZWVrLmdldFRpbWUoKSA9PT0gZGF0ZVJpZ2h0U3RhcnRPZldlZWsuZ2V0VGltZSgpO1xufSIsImltcG9ydCBpc1NhbWVXZWVrIGZyb20gXCIuLi9pc1NhbWVXZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuXG4vKipcbiAqIEBuYW1lIGlzVGhpc1dlZWtcbiAqIEBjYXRlZ29yeSBXZWVrIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiBkYXRlIGluIHRoZSBzYW1lIHdlZWsgYXMgdGhlIGN1cnJlbnQgZGF0ZT9cbiAqIEBwdXJlIGZhbHNlXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBJcyB0aGUgZ2l2ZW4gZGF0ZSBpbiB0aGUgc2FtZSB3ZWVrIGFzIHRoZSBjdXJyZW50IGRhdGU/XG4gKlxuICogPiDimqDvuI8gUGxlYXNlIG5vdGUgdGhhdCB0aGlzIGZ1bmN0aW9uIGlzIG5vdCBwcmVzZW50IGluIHRoZSBGUCBzdWJtb2R1bGUgYXNcbiAqID4gaXQgdXNlcyBgRGF0ZS5ub3coKWAgaW50ZXJuYWxseSBoZW5jZSBpbXB1cmUgYW5kIGNhbid0IGJlIHNhZmVseSBjdXJyaWVkLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBjaGVja1xuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIHRoZSBvYmplY3Qgd2l0aCBvcHRpb25zXG4gKiBAcGFyYW0ge0xvY2FsZX0gW29wdGlvbnMubG9jYWxlPWRlZmF1bHRMb2NhbGVdIC0gdGhlIGxvY2FsZSBvYmplY3QuIFNlZSBbTG9jYWxlXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL0xvY2FsZX1cbiAqIEBwYXJhbSB7MHwxfDJ8M3w0fDV8Nn0gW29wdGlvbnMud2Vla1N0YXJ0c09uPTBdIC0gdGhlIGluZGV4IG9mIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsgKDAgLSBTdW5kYXkpXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGUgaXMgaW4gdGhpcyB3ZWVrXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLndlZWtTdGFydHNPbmAgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDZcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdG9kYXkgaXMgMjUgU2VwdGVtYmVyIDIwMTQsIGlzIDIxIFNlcHRlbWJlciAyMDE0IGluIHRoaXMgd2Vlaz9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzVGhpc1dlZWsobmV3IERhdGUoMjAxNCwgOCwgMjEpKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRvZGF5IGlzIDI1IFNlcHRlbWJlciAyMDE0IGFuZCB3ZWVrIHN0YXJ0cyB3aXRoIE1vbmRheVxuICogLy8gaXMgMjEgU2VwdGVtYmVyIDIwMTQgaW4gdGhpcyB3ZWVrP1xuICogY29uc3QgcmVzdWx0ID0gaXNUaGlzV2VlayhuZXcgRGF0ZSgyMDE0LCA4LCAyMSksIHsgd2Vla1N0YXJ0c09uOiAxIH0pXG4gKiAvLz0+IGZhbHNlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzVGhpc1dlZWsoZGlydHlEYXRlLCBvcHRpb25zKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICByZXR1cm4gaXNTYW1lV2VlayhkaXJ0eURhdGUsIERhdGUubm93KCksIG9wdGlvbnMpO1xufSIsImltcG9ydCBpc1NhbWVEYXkgZnJvbSBcIi4uL2lzU2FtZURheS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgaXNUb2RheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gZGF0ZSB0b2RheT9cbiAqIEBwdXJlIGZhbHNlXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBJcyB0aGUgZ2l2ZW4gZGF0ZSB0b2RheT9cbiAqXG4gKiA+IOKaoO+4jyBQbGVhc2Ugbm90ZSB0aGF0IHRoaXMgZnVuY3Rpb24gaXMgbm90IHByZXNlbnQgaW4gdGhlIEZQIHN1Ym1vZHVsZSBhc1xuICogPiBpdCB1c2VzIGBEYXRlLm5vdygpYCBpbnRlcm5hbGx5IGhlbmNlIGltcHVyZSBhbmQgY2FuJ3QgYmUgc2FmZWx5IGN1cnJpZWQuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGUgaXMgdG9kYXlcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0b2RheSBpcyA2IE9jdG9iZXIgMjAxNCwgaXMgNiBPY3RvYmVyIDE0OjAwOjAwIHRvZGF5P1xuICogY29uc3QgcmVzdWx0ID0gaXNUb2RheShuZXcgRGF0ZSgyMDE0LCA5LCA2LCAxNCwgMCkpXG4gKiAvLz0+IHRydWVcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1RvZGF5KGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgcmV0dXJuIGlzU2FtZURheShkaXJ0eURhdGUsIERhdGUubm93KCkpO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgc3RhcnRPZkRheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgZGF5IGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgc3RhcnQgb2YgYSBkYXkgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIG9yaWdpbmFsIGRhdGVcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgc3RhcnQgb2YgYSBkYXlcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgc3RhcnQgb2YgYSBkYXkgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCkpXG4gKiAvLz0+IFR1ZSBTZXAgMDIgMjAxNCAwMDowMDowMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZEYXkoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICBkYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuaW1wb3J0IHsgZ2V0RGVmYXVsdE9wdGlvbnMgfSBmcm9tIFwiLi4vX2xpYi9kZWZhdWx0T3B0aW9ucy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBzdGFydE9mV2Vla1xuICogQGNhdGVnb3J5IFdlZWsgSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBzdGFydCBvZiBhIHdlZWsgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBzdGFydCBvZiBhIHdlZWsgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIG9yaWdpbmFsIGRhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSBhbiBvYmplY3Qgd2l0aCBvcHRpb25zLlxuICogQHBhcmFtIHtMb2NhbGV9IFtvcHRpb25zLmxvY2FsZT1kZWZhdWx0TG9jYWxlXSAtIHRoZSBsb2NhbGUgb2JqZWN0LiBTZWUgW0xvY2FsZV17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9Mb2NhbGV9XG4gKiBAcGFyYW0gezB8MXwyfDN8NHw1fDZ9IFtvcHRpb25zLndlZWtTdGFydHNPbj0wXSAtIHRoZSBpbmRleCBvZiB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrICgwIC0gU3VuZGF5KVxuICogQHJldHVybnMge0RhdGV9IHRoZSBzdGFydCBvZiBhIHdlZWtcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMud2Vla1N0YXJ0c09uYCBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgc3RhcnQgb2YgYSB3ZWVrIGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZldlZWsobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSlcbiAqIC8vPT4gU3VuIEF1ZyAzMSAyMDE0IDAwOjAwOjAwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRoZSB3ZWVrIHN0YXJ0cyBvbiBNb25kYXksIHRoZSBzdGFydCBvZiB0aGUgd2VlayBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZXZWVrKG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCksIHsgd2Vla1N0YXJ0c09uOiAxIH0pXG4gKiAvLz0+IE1vbiBTZXAgMDEgMjAxNCAwMDowMDowMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZXZWVrKGRpcnR5RGF0ZSwgb3B0aW9ucykge1xuICB2YXIgX3JlZiwgX3JlZjIsIF9yZWYzLCBfb3B0aW9ucyR3ZWVrU3RhcnRzT24sIF9vcHRpb25zJGxvY2FsZSwgX29wdGlvbnMkbG9jYWxlJG9wdGlvLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwsIF9kZWZhdWx0T3B0aW9ucyRsb2NhbDI7XG5cbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkZWZhdWx0T3B0aW9ucyA9IGdldERlZmF1bHRPcHRpb25zKCk7XG4gIHZhciB3ZWVrU3RhcnRzT24gPSB0b0ludGVnZXIoKF9yZWYgPSAoX3JlZjIgPSAoX3JlZjMgPSAoX29wdGlvbnMkd2Vla1N0YXJ0c09uID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX29wdGlvbnMkd2Vla1N0YXJ0c09uICE9PSB2b2lkIDAgPyBfb3B0aW9ucyR3ZWVrU3RhcnRzT24gOiBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUgPSBvcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlJG9wdGlvID0gX29wdGlvbnMkbG9jYWxlLm9wdGlvbnMpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZSRvcHRpbyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX29wdGlvbnMkbG9jYWxlJG9wdGlvLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZjMgIT09IHZvaWQgMCA/IF9yZWYzIDogZGVmYXVsdE9wdGlvbnMud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmMiAhPT0gdm9pZCAwID8gX3JlZjIgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsID0gZGVmYXVsdE9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID0gX2RlZmF1bHRPcHRpb25zJGxvY2FsLm9wdGlvbnMpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmICE9PSB2b2lkIDAgPyBfcmVmIDogMCk7IC8vIFRlc3QgaWYgd2Vla1N0YXJ0c09uIGlzIGJldHdlZW4gMCBhbmQgNiBfYW5kXyBpcyBub3QgTmFOXG5cbiAgaWYgKCEod2Vla1N0YXJ0c09uID49IDAgJiYgd2Vla1N0YXJ0c09uIDw9IDYpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3dlZWtTdGFydHNPbiBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNiBpbmNsdXNpdmVseScpO1xuICB9XG5cbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGRheSA9IGRhdGUuZ2V0RGF5KCk7XG4gIHZhciBkaWZmID0gKGRheSA8IHdlZWtTdGFydHNPbiA/IDcgOiAwKSArIGRheSAtIHdlZWtTdGFydHNPbjtcbiAgZGF0ZS5zZXREYXRlKGRhdGUuZ2V0RGF0ZSgpIC0gZGlmZik7XG4gIGRhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCBhZGREYXlzIGZyb20gXCIuLi9hZGREYXlzL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgc3ViRGF5c1xuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBTdWJ0cmFjdCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBkYXlzIGZyb20gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBTdWJ0cmFjdCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBkYXlzIGZyb20gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGJlIGNoYW5nZWRcbiAqIEBwYXJhbSB7TnVtYmVyfSBhbW91bnQgLSB0aGUgYW1vdW50IG9mIGRheXMgdG8gYmUgc3VidHJhY3RlZC4gUG9zaXRpdmUgZGVjaW1hbHMgd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmZsb29yYCwgZGVjaW1hbHMgbGVzcyB0aGFuIHplcm8gd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmNlaWxgLlxuICogQHJldHVybnMge0RhdGV9IHRoZSBuZXcgZGF0ZSB3aXRoIHRoZSBkYXlzIHN1YnRyYWN0ZWRcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gU3VidHJhY3QgMTAgZGF5cyBmcm9tIDEgU2VwdGVtYmVyIDIwMTQ6XG4gKiBjb25zdCByZXN1bHQgPSBzdWJEYXlzKG5ldyBEYXRlKDIwMTQsIDgsIDEpLCAxMClcbiAqIC8vPT4gRnJpIEF1ZyAyMiAyMDE0IDAwOjAwOjAwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3ViRGF5cyhkaXJ0eURhdGUsIGRpcnR5QW1vdW50KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgYW1vdW50ID0gdG9JbnRlZ2VyKGRpcnR5QW1vdW50KTtcbiAgcmV0dXJuIGFkZERheXMoZGlydHlEYXRlLCAtYW1vdW50KTtcbn0iLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHRvRGF0ZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYW4gaW5zdGFuY2Ugb2YgRGF0ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgaXRzIGNsb25lLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhIG51bWJlciwgaXQgaXMgdHJlYXRlZCBhcyBhIHRpbWVzdGFtcC5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgbm9uZSBvZiB0aGUgYWJvdmUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIEludmFsaWQgRGF0ZS5cbiAqXG4gKiAqKk5vdGUqKjogKmFsbCogRGF0ZSBhcmd1bWVudHMgcGFzc2VkIHRvIGFueSAqZGF0ZS1mbnMqIGZ1bmN0aW9uIGlzIHByb2Nlc3NlZCBieSBgdG9EYXRlYC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBhcmd1bWVudCAtIHRoZSB2YWx1ZSB0byBjb252ZXJ0XG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHBhcnNlZCBkYXRlIGluIHRoZSBsb2NhbCB0aW1lIHpvbmVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDbG9uZSB0aGUgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZShuZXcgRGF0ZSgyMDE0LCAxLCAxMSwgMTEsIDMwLCAzMCkpXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHRoZSB0aW1lc3RhbXAgdG8gZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZSgxMzkyMDk4NDMwMDAwKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0RhdGUoYXJndW1lbnQpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBhcmdTdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJndW1lbnQpOyAvLyBDbG9uZSB0aGUgZGF0ZVxuXG4gIGlmIChhcmd1bWVudCBpbnN0YW5jZW9mIERhdGUgfHwgX3R5cGVvZihhcmd1bWVudCkgPT09ICdvYmplY3QnICYmIGFyZ1N0ciA9PT0gJ1tvYmplY3QgRGF0ZV0nKSB7XG4gICAgLy8gUHJldmVudCB0aGUgZGF0ZSB0byBsb3NlIHRoZSBtaWxsaXNlY29uZHMgd2hlbiBwYXNzZWQgdG8gbmV3IERhdGUoKSBpbiBJRTEwXG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50LmdldFRpbWUoKSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGFyZ3VtZW50ID09PSAnbnVtYmVyJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IE51bWJlcl0nKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50KTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoKHR5cGVvZiBhcmd1bWVudCA9PT0gJ3N0cmluZycgfHwgYXJnU3RyID09PSAnW29iamVjdCBTdHJpbmddJykgJiYgdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS53YXJuKFwiU3RhcnRpbmcgd2l0aCB2Mi4wLjAtYmV0YS4xIGRhdGUtZm5zIGRvZXNuJ3QgYWNjZXB0IHN0cmluZ3MgYXMgZGF0ZSBhcmd1bWVudHMuIFBsZWFzZSB1c2UgYHBhcnNlSVNPYCB0byBwYXJzZSBzdHJpbmdzLiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNzdHJpbmctYXJndW1lbnRzXCIpOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuXG4gICAgICBjb25zb2xlLndhcm4obmV3IEVycm9yKCkuc3RhY2spO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG59IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBQcm9qZWN0IGZyb20gXCIuL3Byb2plY3RcIjtcbmltcG9ydCBUYXNrIGZyb20gXCIuL3Rhc2tcIjtcbmltcG9ydCBwcm9qZWN0TGlzdCBmcm9tIFwiLi9wcm9qZWN0TGlzdFwiO1xuaW1wb3J0IHsgZ29Ub1Byb2plY3QsIGRwbSwgZHBsfSBmcm9tIFwiLi9wcm9qZWN0TW9kYWxVSVwiO1xuaW1wb3J0IHtkdG0sIGRpc3BsYXlUYXNrTGlzdH0gZnJvbSBcIi4vdGFza1VJXCI7XG5pbXBvcnQgU3RvcmFnZSBmcm9tICcuL3N0b3JhZ2UnO1xuXG5jb25zdCBVSSA9ICgoKSA9PiB7XG4gIGZ1bmN0aW9uIGluaXRpYWxVSSgpIHtcbiAgICBpbml0aWFsaXplRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICBTdG9yYWdlLmdldFByb2plY3RMaXN0KCk7XG4gICAgY29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5UaXRsZVwiKTtcbiAgICBjb25zdCBuYW1lID0gcHJvamVjdFRpdGxlLmlubmVyVGV4dDtcbiAgICBjb25zdCBwcm9qZWN0ID0gcHJvamVjdExpc3QuZ2V0UHJvamVjdChuYW1lKTtcbiAgICBkaXNwbGF5VGFza0xpc3QocHJvamVjdC5nZXRUYXNrcygpKTtcbiAgICBkcGwoKTtcbiAgfVxuICBmdW5jdGlvbiBhZGRDbGFzcyhkb20pe1xuICAgIHJldHVybiBkb20uY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKT9mYWxzZTpcbiAgICAgIGRvbS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgfVxuICAvLyBtYWluIGNvbnRyb2wgc3RydWN0dXJlIGhlcmVcbiAgZnVuY3Rpb24gaW5pdGlhbGl6ZUV2ZW50TGlzdGVuZXJzKCkge1xuICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWVudScpO1xuICAgIGNvbnN0IHNpZGVCYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhcicpO1xuICAgIGNvbnN0IG1vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGVcIik7XG4gICAgY29uc3QgYWRkUHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkUHJvamVjdFwiKTtcbiAgICBjb25zdCBhZGRUYXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGRUYXNrXCIpO1xuICAgIGNvbnN0IEluYm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtdGl0bGU9XCJJbmJveFwiXScpO1xuICAgIGNvbnN0IFRvZGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtdGl0bGU9IFwiVG9kYXlcIl0nKTtcbiAgICBjb25zdCB0aGlzV2VlayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXRpdGxlPSBcIlRoaXMtV2Vla1wiXScpO1xuICAgIG1lbnUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+c2lkZUJhci5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKSk7ICAgIFxuICAgIEluYm94LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSk9PntcbiAgICAgIGFkZFRhc2suY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICBnb1RvUHJvamVjdChlKTtcbiAgICB9KTtcbiAgICBUb2RheS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpPT57XG4gICAgICBhZGRDbGFzcyhhZGRUYXNrKTtcbiAgICAgIHByb2plY3RMaXN0LnVwZGF0ZVRvZGF5UHJvamVjdCgpO1xuICAgICAgZ29Ub1Byb2plY3QoZSk7XG4gICAgfSk7XG4gICAgdGhpc1dlZWsuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKT0+e1xuICAgICAgYWRkQ2xhc3MoYWRkVGFzayk7XG4gICAgICBwcm9qZWN0TGlzdC51cGRhdGVXZWVrUHJvamVjdCgpO1xuICAgICAgY29uc29sZS5sb2cocHJvamVjdExpc3QuZ2V0UHJvamVjdChcIlRoaXMgV2Vla1wiKSk7XG4gICAgICBnb1RvUHJvamVjdChlKTtcbiAgICB9KTtcbiAgICBtb2RlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKT0+e1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QudG9nZ2xlKCdsaWdodCcpO1xuICAgIH0pO1xuICAgIGFkZFByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRwbSk7XG4gICAgYWRkVGFzay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZHRtKTtcbiAgICAvLyBwcm9qZWN0VGl0bGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCApXG4gIH1cbiAgcmV0dXJuIHtcbiAgICBpbml0aWFsVUksXG4gIH07XG59KSgpO1xuZXhwb3J0IGRlZmF1bHQgVUk7XG4iLCJpbXBvcnQgeyB0b0RhdGUsIGlzVG9kYXksIGlzVGhpc1dlZWssIHN1YkRheXMgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcblxuY2xhc3MgcHJvamVjdCB7XG4gIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMudGFza3MgPSBbXTtcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIHNldE5hbWUobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gIH1cblxuICBnZXRUYXNrcygpIHtcbiAgICByZXR1cm4gdGhpcy50YXNrcztcbiAgfVxuXG4gIHNldFRhc2tzKHRhc2tzKXtcbiAgICB0aGlzLnRhc2tzID0gdGFza3M7XG4gIH1cblxuICBnZXRUYXNrKG5hbWUpe1xuICAgIHJldHVybiB0aGlzLnRhc2tzLmZpbmQoKHQpPT50LmdldE5hbWUoKSA9PT0gbmFtZSk7XG4gIH1cbiAgXG4gIGNvbnRhaW5zKHRhc2spIHtcbiAgICByZXR1cm4gdGhpcy50YXNrcy5zb21lKCh0KSA9PiB0YXNrLmdldE5hbWUoKSA9PT0gdC5nZXROYW1lKCkpO1xuICB9XG5cbiAgYWRkVGFzayh0YXNrKSB7XG4gICAgaWYgKHRoaXMuY29udGFpbnModGFzaykpIHtcbiAgICAgIGFsZXJ0KFwicHV0IGRpZmZlcmVudCB0aXRsZSBmb3IgdGFza1wiKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgdGhpcy50YXNrcy5wdXNoKHRhc2spO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcmVtb3ZlVGFzayh0YXNrKSB7XG4gICAgdGhpcy50YXNrcyA9IHRoaXMudGFza3MuZmlsdGVyKCh0KSA9PiB0LmdldE5hbWUoKSAhPT0gdGFzay5nZXROYW1lKCkpO1xuICB9XG5cbiAgZ2V0VGFza3NUb2RheSgpIHtcbiAgICByZXR1cm4gdGhpcy50YXNrcy5maWx0ZXIoKHRhc2spID0+IHtcbiAgICAgIGNvbnN0IHRhc2tEYXRlID0gbmV3IERhdGUodGFzay5nZXREYXRlRm9ybWF0dGVkKCkpO1xuICAgICAgcmV0dXJuIGlzVG9kYXkodG9EYXRlKHRhc2tEYXRlKSk7XG4gICAgfSk7XG4gIH1cblxuICBnZXRUYXNrc1RoaXNXZWVrKCkge1xuICAgIHJldHVybiB0aGlzLnRhc2tzLmZpbHRlcigodGFzaykgPT4ge1xuICAgICAgY29uc3QgdGFza0RhdGUgPSBuZXcgRGF0ZSh0YXNrLmdldERhdGVGb3JtYXR0ZWQoKSk7XG4gICAgICByZXR1cm4gaXNUaGlzV2VlayhzdWJEYXlzKHRvRGF0ZSh0YXNrRGF0ZSksIDEpKTtcbiAgICB9KTtcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgcHJvamVjdDtcbiIsImltcG9ydCB7IGNvbXBhcmVBc2MsIHRvRGF0ZSB9IGZyb20gJ2RhdGUtZm5zJ1xuaW1wb3J0IFByb2plY3QgZnJvbSBcIi4vcHJvamVjdFwiO1xuaW1wb3J0IFRhc2sgZnJvbSBcIi4vdGFza1wiO1xuXG5cbmNvbnN0IHByb2plY3RMaXN0ID0gKCgpID0+IHtcbiAgbGV0IHByb2plY3RzID0gW107XG4gIHByb2plY3RzLnB1c2gobmV3IFByb2plY3QoXCJJbmJveFwiKSk7XG4gIHByb2plY3RzLnB1c2gobmV3IFByb2plY3QoXCJUb2RheVwiKSk7XG4gIHByb2plY3RzLnB1c2gobmV3IFByb2plY3QoXCJUaGlzIFdlZWtcIikpO1xuICBjb25zdCBnZXRQcm9qZWN0cyA9ICgpID0+IHByb2plY3RzO1xuICBjb25zdCBnZXRQcm9qZWN0ID0gKHByb2plY3ROYW1lKSA9PlxuICAgIHByb2plY3RzLmZpbmQoKHApID0+IHByb2plY3ROYW1lID09PSBwLmdldE5hbWUoKSk7XG4gIGNvbnN0IGNvbnRhaW5zID0gKG5hbWUpID0+IHByb2plY3RzLnNvbWUoKHApID0+IG5hbWUgPT09IHAuZ2V0TmFtZSgpKTtcbiAgZnVuY3Rpb24gYWRkUHJvamVjdChuZXdQcm9qZWN0KSB7XG4gICAgaWYgKGNvbnRhaW5zKG5ld1Byb2plY3QuZ2V0TmFtZSgpKSkge1xuICAgICAgYWxlcnQoXCJwbHMgcHV0IGRpZmYgdGl0bGVcIik7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHByb2plY3RzLnB1c2gobmV3UHJvamVjdCk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgZnVuY3Rpb24gcmVtb3ZlUHJvamVjdChuYW1lKSB7XG4gICAgcHJvamVjdHMgPSBwcm9qZWN0cy5maWx0ZXIoKHApID0+IHAuZ2V0TmFtZSgpICE9PSBuYW1lKTtcbiAgfVxuICBmdW5jdGlvbiByZXBsYWNlUHJvamVjdChuZXdQcm9qZWN0KSB7XG4gICAgaWYgKGNvbnRhaW5zKG5ld1Byb2plY3QuZ2V0TmFtZSgpKSkge1xuICAgICAgcmVtb3ZlUHJvamVjdChuZXdQcm9qZWN0LmdldE5hbWUoKSk7XG4gICAgICBhZGRQcm9qZWN0KG5ld1Byb2plY3QpO1xuICAgIH0gZWxzZSB7XG4gICAgICBhZGRQcm9qZWN0KG5ld1Byb2plY3QpO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBkZWxldGVQcm9qZWN0KHByb2plY3QpIHtcbiAgICBwcm9qZWN0cyA9IHByb2plY3RzLmZpbHRlcigocCkgPT4gcC5nZXROYW1lKCkgIT09IHByb2plY3QuZ2V0TmFtZSgpKTtcbiAgfVxuICBmdW5jdGlvbiB1cGRhdGVUb2RheVByb2plY3QoKSB7XG4gICAgZ2V0UHJvamVjdChcIlRvZGF5XCIpLnRhc2tzID0gW107XG4gICAgcHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgICAgaWYgKHByb2plY3QuZ2V0TmFtZSgpID09PSBcIlRvZGF5XCIgfHwgcHJvamVjdC5nZXROYW1lKCkgPT09IFwiVGhpcyBXZWVrXCIpXG4gICAgICAgIHJldHVybjtcbiAgICAgIGNvbnN0IHRvZGF5VGFza3MgPSBwcm9qZWN0LmdldFRhc2tzVG9kYXkoKTtcbiAgICAgIHRvZGF5VGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgICBjb25zdCB0YXNrTmFtZSA9IGAke3Rhc2suZ2V0TmFtZSgpfSAoJHtwcm9qZWN0LmdldE5hbWUoKX0pYDtcbiAgICAgICAgZ2V0UHJvamVjdChcIlRvZGF5XCIpLmFkZFRhc2sobmV3IFRhc2sodGFza05hbWUsIHRhc2suZ2V0RGF0ZSgpKSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuICBmdW5jdGlvbiB1cGRhdGVXZWVrUHJvamVjdCgpIHtcbiAgICBnZXRQcm9qZWN0KFwiVGhpcyBXZWVrXCIpLnRhc2tzID0gW107XG4gICAgcHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgICAgaWYgKHByb2plY3QuZ2V0TmFtZSgpID09PSBcIlRvZGF5XCIgfHwgcHJvamVjdC5nZXROYW1lKCkgPT09IFwiVGhpcyBXZWVrXCIpXG4gICAgICAgIHJldHVybjtcbiAgICAgIGNvbnN0IHdlZWtUYXNrcyA9IHByb2plY3QuZ2V0VGFza3NUaGlzV2VlaygpO1xuICAgICAgd2Vla1Rhc2tzLmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgICAgY29uc3QgdGFza05hbWUgPSBgJHt0YXNrLmdldE5hbWUoKX0gKCR7cHJvamVjdC5nZXROYW1lKCl9KWA7XG4gICAgICAgIGdldFByb2plY3QoXCJUaGlzIFdlZWtcIikuYWRkVGFzayhcbiAgICAgICAgICBuZXcgVGFzayh0YXNrTmFtZSwgdGFzay5nZXREYXRlKCkpXG4gICAgICAgICk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBnZXRQcm9qZWN0KFwiVGhpcyBXZWVrXCIpLnNldFRhc2tzKFxuICAgICAgZ2V0UHJvamVjdChcIlRoaXMgV2Vla1wiKVxuICAgICAgICAuZ2V0VGFza3MoKVxuICAgICAgICAuc29ydCgodGFza0EsIHRhc2tCKSA9PlxuICAgICAgICAgIGNvbXBhcmVBc2MoXG4gICAgICAgICAgICB0b0RhdGUobmV3IERhdGUodGFza0EuZ2V0RGF0ZUZvcm1hdHRlZCgpKSksXG4gICAgICAgICAgICB0b0RhdGUobmV3IERhdGUodGFza0IuZ2V0RGF0ZUZvcm1hdHRlZCgpKSlcbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBnZXRQcm9qZWN0LFxuICAgIGdldFByb2plY3RzLFxuICAgIGNvbnRhaW5zLFxuICAgIGFkZFByb2plY3QsXG4gICAgZGVsZXRlUHJvamVjdCxcbiAgICByZXBsYWNlUHJvamVjdCxcbiAgICB1cGRhdGVXZWVrUHJvamVjdCxcbiAgICB1cGRhdGVUb2RheVByb2plY3QsXG4gIH07XG59KSgpO1xuZXhwb3J0IGRlZmF1bHQgcHJvamVjdExpc3Q7XG4iLCJpbXBvcnQgUHJvamVjdCBmcm9tIFwiLi9wcm9qZWN0XCI7XG5pbXBvcnQgVGFzayBmcm9tIFwiLi90YXNrXCI7XG5pbXBvcnQgcHJvamVjdExpc3QgZnJvbSBcIi4vcHJvamVjdExpc3RcIjtcbmltcG9ydCB7ZHRtLCBkaXNwbGF5VGFza0xpc3R9IGZyb20gXCIuL3Rhc2tVSVwiO1xuaW1wb3J0IFN0b3JhZ2UgZnJvbSAnLi9zdG9yYWdlJztcblxuXG5mdW5jdGlvbiBnZXRQcm9qZWN0RnJvbUlucHV0KCkge1xuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGl0bGVcIikudmFsdWUudHJpbSgpO1xuICBjb25zdCBwcm9qZWN0ID0gbmV3IFByb2plY3QodGl0bGUpO1xuICByZXR1cm4gcHJvamVjdDtcbn1cbmZ1bmN0aW9uIHByb2plY3RNb2RhbFRvZ2dsZSgpIHtcbiAgY29uc3QgcHJvamVjdE1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LW1vZGFsXCIpO1xuICBwcm9qZWN0TW9kYWwuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcbn1cbmZ1bmN0aW9uIGdvVG9Qcm9qZWN0KGUpIHtcbiAgY29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5UaXRsZVwiKTtcbiAgbGV0IG5hbWUgPSBlLnRhcmdldC5kYXRhc2V0LnRpdGxlO1xuICBuYW1lID0gbmFtZS5yZXBsYWNlQWxsKFwiLVwiLCBcIiBcIik7XG4gIGlmKCFwcm9qZWN0TGlzdC5jb250YWlucyhuYW1lKSl7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IHByb2plY3QgPSBwcm9qZWN0TGlzdC5nZXRQcm9qZWN0KG5hbWUpO1xuICBwcm9qZWN0VGl0bGUudGV4dENvbnRlbnQgPSBuYW1lO1xuICBkaXNwbGF5VGFza0xpc3QocHJvamVjdC5nZXRUYXNrcygpKTtcbn1cbmZ1bmN0aW9uIGdvVG9JbmJveCgpIHtcbiAgY29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5UaXRsZVwiKTtcbiAgY29uc3QgcHJvamVjdCA9IHByb2plY3RMaXN0LmdldFByb2plY3QoJ0luYm94Jyk7XG4gIHByb2plY3RUaXRsZS50ZXh0Q29udGVudCA9IHByb2plY3QuZ2V0TmFtZSgpO1xuICBkaXNwbGF5VGFza0xpc3QocHJvamVjdC5nZXRUYXNrcygpKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVByb2plY3QoZSl7XG4gIGxldCBuYW1lID0gZS50YXJnZXQuZGF0YXNldC50aXRsZTtcbiAgbmFtZSA9IG5hbWUucmVwbGFjZUFsbChcIi1cIiwgXCIgXCIpO1xuICBjb25zdCBwcm9qZWN0ID0gcHJvamVjdExpc3QuZ2V0UHJvamVjdChuYW1lKTtcbiAgcHJvamVjdExpc3QuZGVsZXRlUHJvamVjdChwcm9qZWN0KTtcbiAgZGlzcGxheVByb2plY3RMaXN0KCk7XG4gIGdvVG9JbmJveCgpO1xuICBTdG9yYWdlLnNldFByb2plY3RMaXN0KCk7XG59XG5mdW5jdGlvbiBkaXNwbGF5UHJvamVjdChwcm9qZWN0KSB7XG4gIGNvbnN0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RDb250YWluZXJcIik7XG4gIGxldCBuYW1lID0gcHJvamVjdC5nZXROYW1lKCk7XG4gIGlmIChuYW1lID09PSBcIkluYm94XCIgfHwgbmFtZSA9PT0gXCJUb2RheVwiIHx8IG5hbWUgPT09IFwiVGhpcyBXZWVrXCIpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgLy8gaGFkIHRvIGRvIHRoaXMgYmVjYXVzZSBxdWVyeVNlbGVjdG9yIHdvdWxkbid0IHdvcmtcbiAgaWYgKG5hbWUuaW5kZXhPZihcIiBcIikgPj0gMCkge1xuICAgIG5hbWUgPSBuYW1lLnJlcGxhY2VBbGwoL1xccy9nLCBcIi1cIikudHJpbSgpO1xuICB9XG4gIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwic2lkZUl0ZW1cIik7XG4gIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJkYXRhLXRpdGxlXCIsIG5hbWUpO1xuICBjb25zdCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIGljb24uY2xhc3NMaXN0LmFkZChcIm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWRcIik7XG4gIGljb24udGV4dENvbnRlbnQgPSBcImxpc3RcIjtcbiAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBwcm9qZWN0TmFtZS5jbGFzc0xpc3QuYWRkKFwicHJvamVjdFwiKTtcbiAgcHJvamVjdE5hbWUuc2V0QXR0cmlidXRlKFwiZGF0YS10aXRsZVwiLCBuYW1lKTtcbiAgcHJvamVjdE5hbWUudGV4dENvbnRlbnQgPSBuYW1lLnJlcGxhY2UoLy0vZywgXCIgXCIpO1xuICBjb25zdCBjbG9zZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBjbG9zZS5jbGFzc0xpc3QuYWRkKFwibWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZFwiKTtcbiAgY2xvc2Uuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjbG9zZVwiKTtcbiAgY2xvc2Uuc2V0QXR0cmlidXRlKFwiZGF0YS10aXRsZVwiLCBuYW1lKTtcbiAgY2xvc2UudGV4dENvbnRlbnQgPSBcImNsb3NlXCI7XG4gIGJ1dHRvbi5hcHBlbmRDaGlsZChpY29uKTtcbiAgYnV0dG9uLmFwcGVuZENoaWxkKHByb2plY3ROYW1lKTtcbiAgYnV0dG9uLmFwcGVuZENoaWxkKGNsb3NlKTtcbiAgY29uc3QgYWRkVGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkVGFza1wiKTtcbiAgY2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZW1vdmVQcm9qZWN0KTtcbiAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSk9PntcbiAgICBhZGRUYXNrLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgIGdvVG9Qcm9qZWN0KGUpO1xuICB9KTtcbiAgcHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChidXR0b24pO1xufVxuZnVuY3Rpb24gZGlzcGxheVByb2plY3RMaXN0KCkge1xuICBjb25zdCBwcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0Q29udGFpbmVyXCIpO1xuICBwcm9qZWN0Q29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XG4gIHByb2plY3RMaXN0LmdldFByb2plY3RzKCkuZm9yRWFjaCgocHJvamVjdCkgPT4gZGlzcGxheVByb2plY3QocHJvamVjdCkpO1xufVxuXG5mdW5jdGlvbiBzdWJtaXRQcm9qZWN0KGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBjb25zdCBwcm9qZWN0ID0gZ2V0UHJvamVjdEZyb21JbnB1dCgpO1xuICBwcm9qZWN0TW9kYWxUb2dnbGUoKTtcbiAgaWYgKHByb2plY3RMaXN0LmFkZFByb2plY3QocHJvamVjdCkpIHtcbiAgICBkaXNwbGF5UHJvamVjdExpc3QoKTtcbiAgICBTdG9yYWdlLnNldFByb2plY3RMaXN0KCk7XG4gIH1cbn1cbmZ1bmN0aW9uIGRpc3BsYXlQcm9qZWN0TW9kYWwoKSB7XG4gIHByb2plY3RNb2RhbFRvZ2dsZSgpO1xuICBjb25zdCBwcm9qZWN0TW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtbW9kYWxcIik7XG4gIGNvbnN0IHByb2plY3RDYW5jZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NhbmNlbFwiKTtcbiAgcHJvamVjdENhbmNlbC5vbmNsaWNrID0gKCkgPT4gcHJvamVjdE1vZGFsVG9nZ2xlKCk7XG4gIHByb2plY3RNb2RhbC5vbnN1Ym1pdCA9IHN1Ym1pdFByb2plY3Q7XG4gIC8vIHJlbWVtYmVyIHRoYXQgb25zdWJtaXQgaXMgdXNlZCBmb3IgZm9ybSBub3QgYnV0dG9uXG59XG5cbmV4cG9ydHtnb1RvUHJvamVjdCwgZGlzcGxheVByb2plY3RNb2RhbCBhcyBkcG0sXG4gIGRpc3BsYXlQcm9qZWN0TGlzdCBhcyBkcGx9OyIsImltcG9ydCBwcm9qZWN0TGlzdCBmcm9tIFwiLi9wcm9qZWN0TGlzdFwiO1xuaW1wb3J0IFByb2plY3QgZnJvbSBcIi4vcHJvamVjdFwiO1xuaW1wb3J0IFRhc2sgZnJvbSBcIi4vdGFza1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdG9yYWdlIHtcbiAgc3RhdGljIHNldFByb2plY3RMaXN0KCkge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicGxcIiwgSlNPTi5zdHJpbmdpZnkocHJvamVjdExpc3QuZ2V0UHJvamVjdHMoKSkpO1xuICB9XG5cbiAgc3RhdGljIGdldFByb2plY3RMaXN0KCkge1xuICAgIGNvbnN0IG9iakFycmF5ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInBsXCIpKTtcbiAgICBpZihvYmpBcnJheT09bnVsbCl7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIG9iakFycmF5LmZvckVhY2goKHApID0+IHtcbiAgICAgIGNvbnN0IHByb2plY3QyID0gbmV3IFByb2plY3QocC5uYW1lKTtcbiAgICAgIGNvbnN0IHRhc2tBcnJheSA9IHAudGFza3M7XG4gICAgICAvLyBzaG91bGQgZHJhdyBvdXQgc29sdXRpb24gYmVmb3JlIGF0dGVtcHRpbmdcbiAgICAgIC8vIG5ld0FycmF5IGlzIGEgbmV3QXJyYXkuXG4gICAgICBjb25zdCBuZXdBcnJheSA9IFtdO1xuICAgICAgdGFza0FycmF5LmZvckVhY2goKHQpID0+e1xuICAgICAgICBjb25zdCB0YXNrID0gbmV3IFRhc2sodC5uYW1lLCB0LmR1ZURhdGUsIHQuZGVzY3JpcHRpb24pO1xuICAgICAgICBuZXdBcnJheS5wdXNoKHRhc2spO1xuICAgICAgfSlcbiAgICAgIHByb2plY3QyLnNldFRhc2tzKG5ld0FycmF5KTtcbiAgICAgIHByb2plY3RMaXN0LnJlcGxhY2VQcm9qZWN0KHByb2plY3QyKTtcbiAgICB9KTtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgdGFzayB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIGR1ZURhdGUgPSBcIk5vIGRhdGVcIiwgZGVzY3JpcHRpb24gPSBcIlwiKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgfVxuXG4gIHNldE5hbWUobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gIH1cblxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cblxuICBzZXREYXRlKGR1ZURhdGUpIHtcbiAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICB9XG5cbiAgZ2V0RGF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5kdWVEYXRlO1xuICB9XG5cbiAgZ2V0RGF0ZUZvcm1hdHRlZCgpIHtcbiAgICBjb25zdCBkYXkgPSB0aGlzLmR1ZURhdGUuc3BsaXQoXCItXCIpWzJdO1xuICAgIGNvbnN0IG1vbnRoID0gdGhpcy5kdWVEYXRlLnNwbGl0KFwiLVwiKVsxXTtcbiAgICBjb25zdCB5ZWFyID0gdGhpcy5kdWVEYXRlLnNwbGl0KFwiLVwiKVswXTtcbiAgICByZXR1cm4gYCR7bW9udGh9LyR7ZGF5fS8ke3llYXJ9YDtcbiAgfVxuXG4gIGdldERlc2NyaXB0aW9uKCl7XG4gICAgcmV0dXJuIHRoaXMuZGVzY3JpcHRpb247XG4gIH1cblxuICBzZXREZXNjcmlwdGlvbihkZXNjcmlwdGlvbil7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICB9XG59XG4vLyBjb25zdCBnZXREZXNjcmlwdGlvbiA9ICgpID0+IGRlc2NyaXB0aW9uO1xuLy8gY29uc3QgZ2V0UHJpb3JpdHkgPSAoKSA9PiBwcmlvcml0eTtcbi8vIGNvbnN0IGdldElzRG9uZSA9ICgpID0+IGlzRG9uZTtcbi8vIGZ1bmN0aW9uIHNldERlc2NyaXB0aW9uKGRlc2NyaXB0aW9uKXt0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb259XG4vLyBjb25zdCB0b2dnbGVEb25lID0gKCkgPT4ge1xuLy8gICAgIHRoaXMuaXNEb25lID0gIWlzRG9uZTtcbi8vIH1cbi8vIGdldERlc2NyaXB0aW9uLGdldFByaW9yaXR5LCBnZXRJc0RvbmUsc2V0RGVzY3JpcHRpb24sdG9nZ2xlRG9uZSxcbiIsImltcG9ydCBQcm9qZWN0IGZyb20gXCIuL3Byb2plY3RcIjtcbmltcG9ydCBUYXNrIGZyb20gXCIuL3Rhc2tcIjtcbmltcG9ydCBwcm9qZWN0TGlzdCBmcm9tIFwiLi9wcm9qZWN0TGlzdFwiO1xuaW1wb3J0IFN0b3JhZ2UgZnJvbSBcIi4vc3RvcmFnZVwiO1xuXG5mdW5jdGlvbiBnZXRQcm9qZWN0RnJvbVRpdGxlKCkge1xuICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLlRpdGxlXCIpO1xuICBjb25zdCBuYW1lID0gcHJvamVjdFRpdGxlLmlubmVyVGV4dDtcbiAgY29uc3QgcHJvamVjdCA9IHByb2plY3RMaXN0LmdldFByb2plY3QobmFtZSk7XG4gIHJldHVybiBwcm9qZWN0O1xufVxuZnVuY3Rpb24gdGFza01vZGFsVG9nZ2xlKCkge1xuICBjb25zdCB0YXNrTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2tNb2RhbFwiKTtcbiAgdGFza01vZGFsLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG59XG5mdW5jdGlvbiBnZXRUYXNrRnJvbUlucHV0KCkge1xuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGl0bGUyXCIpLnZhbHVlLnRyaW0oKTtcbiAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlc2NyaXB0aW9uXCIpLnZhbHVlO1xuICBjb25zdCBkYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkYXRlXCIpLnZhbHVlO1xuICBjb25zdCB0YXNrID0gbmV3IFRhc2sodGl0bGUsIGRhdGUsIGRlc2NyaXB0aW9uKTtcbiAgcmV0dXJuIHRhc2s7XG59XG5mdW5jdGlvbiByZW1vdmVUYXNrKGUpIHtcbiAgY29uc3QgeyBuYW1lIH0gPSBlLnRhcmdldC5kYXRhc2V0O1xuICBjb25zdCBwcm9qZWN0ID0gZ2V0UHJvamVjdEZyb21UaXRsZSgpO1xuICBjb25zdCB0YXNrID0gcHJvamVjdC5nZXRUYXNrKG5hbWUpO1xuICBwcm9qZWN0LnJlbW92ZVRhc2sodGFzayk7XG4gIFN0b3JhZ2Uuc2V0UHJvamVjdExpc3QoKTtcbiAgZGlzcGxheVRhc2tMaXN0KHByb2plY3QuZ2V0VGFza3MoKSk7XG59XG5cbmZ1bmN0aW9uIGVkaXRUYXNrKGUpIHtcbiAgY29uc3QgeyBuYW1lIH0gPSBlLnRhcmdldC5kYXRhc2V0O1xuICBjb25zdCBwcm9qZWN0ID0gZ2V0UHJvamVjdEZyb21UaXRsZSgpO1xuICBjb25zdCB0YXNrID0gcHJvamVjdC5nZXRUYXNrKG5hbWUpO1xuXG4gIGNvbnN0IHRhc2tNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFza01vZGFsXCIpO1xuICB0YXNrTW9kYWwuY2xhc3NMaXN0LnRvZ2dsZShcIm1vZGFsXCIpO1xuICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vdmVybGF5XCIpO1xuICBvdmVybGF5LmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG4gIGNvbnN0IHRhc2tDYW5jZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NhbmNlbDJcIik7XG4gIHRhc2tDYW5jZWwub25jbGljayA9ICgpID0+IHtcbiAgICB0YXNrTW9kYWwuY2xhc3NMaXN0LnRvZ2dsZShcIm1vZGFsXCIpO1xuICAgIG92ZXJsYXkuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcbiAgfTtcbiAgdGFza01vZGFsLm9uc3VibWl0ID0gKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBuZXdUYXNrID0gZ2V0VGFza0Zyb21JbnB1dCgpO1xuICAgIHRhc2suc2V0TmFtZShuZXdUYXNrLmdldE5hbWUoKSk7XG4gICAgdGFzay5zZXREYXRlKG5ld1Rhc2suZ2V0RGF0ZSgpKTtcbiAgICB0YXNrLnNldERlc2NyaXB0aW9uKG5ld1Rhc2suZ2V0RGVzY3JpcHRpb24oKSk7XG4gICAgdGFza01vZGFsLmNsYXNzTGlzdC50b2dnbGUoXCJtb2RhbFwiKTtcbiAgICBvdmVybGF5LmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG4gICAgZGlzcGxheVRhc2tMaXN0KHByb2plY3QuZ2V0VGFza3MoKSk7XG4gICAgU3RvcmFnZS5zZXRQcm9qZWN0TGlzdCgpO1xuICB9O1xufVxuZnVuY3Rpb24gZGlzcGxheVRhc2sodGFzaykge1xuICBjb25zdCB0YXNrQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrQ29udGFpbmVyXCIpO1xuICBjb25zdCB0YXNrMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRhc2syLmNsYXNzTGlzdC5hZGQoXCJ0YXNrXCIpO1xuICBjb25zdCB0YXNrU2hvd24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0YXNrU2hvd24uY2xhc3NMaXN0LmFkZChcInRhc2stc2hvd25cIik7XG4gIHRhc2syLmFwcGVuZENoaWxkKHRhc2tTaG93bik7XG4gIGNvbnN0IHRhc2tMZWZ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdGFza0xlZnQuY2xhc3NMaXN0LmFkZChcInRhc2tMZWZ0XCIpO1xuICB0YXNrU2hvd24uYXBwZW5kQ2hpbGQodGFza0xlZnQpO1xuICBjb25zdCBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgY2hlY2tib3guc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImNoZWNrYm94XCIpO1xuICB0YXNrTGVmdC5hcHBlbmRDaGlsZChjaGVja2JveCk7XG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdGl0bGUuY2xhc3NMaXN0LmFkZChcInRpdGxlXCIpO1xuICB0aXRsZS5pbm5lclRleHQgPSB0YXNrLmdldE5hbWUoKTtcbiAgdGFza0xlZnQuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICBjb25zdCBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZGF0ZS5jbGFzc0xpc3QuYWRkKFwiZGF0ZVwiKTtcbiAgZGF0ZS5pbm5lclRleHQgPSB0YXNrLmdldERhdGUoKTtcbiAgdGFza1Nob3duLmFwcGVuZENoaWxkKGRhdGUpO1xuICBjb25zdCB0YXNrUmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0YXNrUmlnaHQuY2xhc3NMaXN0LmFkZChcInRhc2tSaWdodFwiKTtcbiAgdGFza1Nob3duLmFwcGVuZENoaWxkKHRhc2tSaWdodCk7XG4gIC8vIGV4cGFuZE1vcmVcbiAgY29uc3QgZXhwYW5kTW9yZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBleHBhbmRNb3JlLmNsYXNzTGlzdC5hZGQoXCJtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkXCIpO1xuICBleHBhbmRNb3JlLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZG93blwiKTtcbiAgZXhwYW5kTW9yZS5pbm5lclRleHQgPSBcImV4cGFuZF9tb3JlXCI7XG4gIHRhc2tSaWdodC5hcHBlbmRDaGlsZChleHBhbmRNb3JlKTtcbiAgY29uc3QgdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgdXAuY2xhc3NMaXN0LmFkZChcIm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWRcIik7XG4gIHVwLmlubmVyVGV4dCA9IFwia2V5Ym9hcmRfYXJyb3dfdXBcIjtcbiAgdXAuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ1cFwiKTtcbiAgdGFza1JpZ2h0LmFwcGVuZENoaWxkKHVwKTtcbiAgLy8gZGVsZXRlRWxcbiAgY29uc3QgZGVsZXRlRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgZGVsZXRlRWwuY2xhc3NMaXN0LmFkZChcIm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWRcIik7XG4gIGRlbGV0ZUVsLnNldEF0dHJpYnV0ZShcImRhdGEtbmFtZVwiLCB0YXNrLmdldE5hbWUoKSk7XG4gIGRlbGV0ZUVsLmlubmVyVGV4dCA9IFwiZGVsZXRlXCI7XG4gIHRhc2tSaWdodC5hcHBlbmRDaGlsZChkZWxldGVFbCk7XG4gIGNvbnN0IHRhc2tIaWRkZW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0YXNrSGlkZGVuLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWhpZGRlblwiKTtcbiAgdGFzazIuYXBwZW5kQ2hpbGQodGFza0hpZGRlbik7XG4gIGNvbnN0IHRhc2tIaWRkZW5Ub3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0YXNrSGlkZGVuVG9wLmNsYXNzTGlzdC5hZGQoXCJ0YXNrSGlkZGVuVG9wXCIpO1xuICB0YXNrSGlkZGVuLmFwcGVuZENoaWxkKHRhc2tIaWRkZW5Ub3ApO1xuICBjb25zdCBkZXNjcmlwdGlvblRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg0XCIpO1xuICBkZXNjcmlwdGlvblRpdGxlLmlubmVyVGV4dCA9IFwiRGVzY3JpcHRpb246XCI7XG4gIHRhc2tIaWRkZW5Ub3AuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25UaXRsZSk7XG4gIC8vIGVkaXRcbiAgY29uc3QgZWRpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBlZGl0LmNsYXNzTGlzdC5hZGQoXCJtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkXCIpO1xuICBlZGl0LnNldEF0dHJpYnV0ZShcImRhdGEtbmFtZVwiLCB0YXNrLmdldE5hbWUoKSk7XG4gIGVkaXQuaW5uZXJUZXh0ID0gXCJlZGl0XCI7XG4gIHRhc2tIaWRkZW5Ub3AuYXBwZW5kQ2hpbGQoZWRpdCk7XG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZChcImRlc2NyaXB0aW9uXCIpO1xuICBkZXNjcmlwdGlvbi5pbm5lclRleHQgPSB0YXNrLmdldERlc2NyaXB0aW9uKCk7XG4gIHRhc2tIaWRkZW4uYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuICBleHBhbmRNb3JlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgdGFza0hpZGRlbi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgIGV4cGFuZE1vcmUuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICB1cC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICB9KTtcbiAgdXAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBleHBhbmRNb3JlLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgdGFza0hpZGRlbi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgIHVwLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gIH0pO1xuICBkZWxldGVFbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcmVtb3ZlVGFzayk7XG4gIGVkaXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGVkaXRUYXNrKTtcbiAgdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrMik7XG59XG5mdW5jdGlvbiBkaXNwbGF5VGFza0xpc3QodGFza3MpIHtcbiAgY29uc3QgdGFza0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFza0NvbnRhaW5lclwiKTtcbiAgdGFza0NvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuICB0YXNrcy5mb3JFYWNoKCh0YXNrKSA9PiBkaXNwbGF5VGFzayh0YXNrKSk7XG59XG5mdW5jdGlvbiBzdWJtaXRUYXNrKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBjb25zdCBwcm9qZWN0ID0gZ2V0UHJvamVjdEZyb21UaXRsZSgpO1xuICBjb25zdCB0YXNrID0gZ2V0VGFza0Zyb21JbnB1dCgpO1xuICB0YXNrTW9kYWxUb2dnbGUoKTtcbiAgaWYgKHByb2plY3QuYWRkVGFzayh0YXNrKSkge1xuICAgIGRpc3BsYXlUYXNrTGlzdChwcm9qZWN0LmdldFRhc2tzKCkpO1xuICAgIFN0b3JhZ2Uuc2V0UHJvamVjdExpc3QoKTtcbiAgfVxufVxuZnVuY3Rpb24gZHRtKCkge1xuICB0YXNrTW9kYWxUb2dnbGUoKTtcbiAgY29uc3QgdGFza01vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrTW9kYWxcIik7XG4gIGNvbnN0IHRhc2tDYW5jZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NhbmNlbDJcIik7XG4gIHRhc2tDYW5jZWwub25jbGljayA9ICgpID0+IHRhc2tNb2RhbFRvZ2dsZSgpO1xuICB0YXNrTW9kYWwub25zdWJtaXQgPSBzdWJtaXRUYXNrO1xufVxuXG5leHBvcnQgeyBkdG0sIGRpc3BsYXlUYXNrTGlzdCB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQge3RvRGF0ZX0gZnJvbSAnZGF0ZS1mbnMnO1xuaW1wb3J0IFByb2plY3QgZnJvbSAnLi9tb2R1bGVzL3Byb2plY3QuanMnO1xuaW1wb3J0IFRhc2sgZnJvbSAnLi9tb2R1bGVzL3Rhc2suanMnO1xuaW1wb3J0IHByb2plY3RMaXN0IGZyb20gJy4vbW9kdWxlcy9wcm9qZWN0TGlzdC5qcyc7XG5pbXBvcnQgVUkgZnJvbSAnLi9tb2R1bGVzL1VJLmpzJztcbi8vIC1pbXBvcnQge3RvRG99IGZyb20gJy4vb2JqZWN0cy5qcyc7XG5cbmNvbnN0IHRhc2sxID0gbmV3IFRhc2soJ2JvYicsICcyLzQvMjInKTtcbmNvbnN0IHByb2plY3QgPSBwcm9qZWN0TGlzdC5nZXRQcm9qZWN0KCdJbmJveCcpO1xucHJvamVjdC5hZGRUYXNrKHRhc2sxKTtcblVJLmluaXRpYWxVSSgpO1xuLy8gY29uc3QgdGFzazEgPSBuZXcgVGFzaygnYm9iJywgJzIvNC8yMicpO1xuLy8gY29uc29sZS5sb2codGFzazEuc2V0TmFtZSgnaGRpZGQnKSk7XG4vLyBjb25zb2xlLmxvZyh7dGFzazF9KTtcbi8vIGNvbnNvbGUubG9nKHRhc2sxLmdldE5hbWUoKSk7XG4vLyBjb25zb2xlLmxvZyh0YXNrMS5nZXREYXRlKCkpO1xuLy8gY29uc3QgcHJvamVjdDEgPSBuZXcgUHJvamVjdCgnYm9iJyk7XG4vLyBwcm9qZWN0MS5hZGRUYXNrKHRhc2sxKTtcbi8vIGNvbnNvbGUubG9nKHByb2plY3QxLmdldFRhc2tzKCkpO1xuLy8gcHJvamVjdDEucmVtb3ZlVGFzayh0YXNrMSk7XG4vLyBjb25zb2xlLmxvZyhwcm9qZWN0MS5nZXRUYXNrcygpKTtcbi8vIHByb2plY3RMaXN0LmFkZFByb2plY3QocHJvamVjdDEpO1xuLy8gY29uc29sZS5sb2cocHJvamVjdExpc3QuZ2V0UHJvamVjdHMoKSk7XG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==