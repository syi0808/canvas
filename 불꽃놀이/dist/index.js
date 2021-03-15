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

/***/ "./Entity.js":
/*!*******************!*\
  !*** ./Entity.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Entity)\n/* harmony export */ });\n/* harmony import */ var _Vector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Vector */ \"./Vector.js\");\n\nclass Entity {\n  constructor(position) {\n    this.position = position;\n  }\n\n  update() {}\n\n  render(context) {}\n\n}\n\n//# sourceURL=webpack://firework/./Entity.js?");

/***/ }),

/***/ "./EntityManager.js":
/*!**************************!*\
  !*** ./EntityManager.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ EntityManager)\n/* harmony export */ });\n/* harmony import */ var _Entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Entity */ \"./Entity.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\nclass EntityManager {\n  static addEntity(entity) {\n    EntityManager.instance.addEntity(entity);\n  }\n\n  static removeEntity(entity) {\n    EntityManager.instance.removeEntity(entity);\n  }\n\n  constructor() {\n    EntityManager.instance = this;\n    this.entities = [];\n  }\n\n  update() {\n    for (let i = 0; i < this.entities.length; i++) {\n      this.entities[i].update();\n    }\n  }\n\n  render(context) {\n    context.beginPath();\n    context.fillStyle = \"rgba(0, 0, 0, .2)\";\n    context.fillRect(0, 0, context.canvas.width, context.canvas.height);\n    context.fill();\n\n    for (let i = 0; i < this.entities.length; i++) {\n      this.entities[i].render(context);\n    }\n  }\n\n  addEntity(entity) {\n    this.entities.push(entity);\n  }\n\n  removeEntity(entity) {\n    const entityIndex = this.entities.indexOf(entity);\n\n    if (entityIndex > -1) {\n      this.entities.splice(entityIndex, 1);\n    }\n  }\n\n}\n\n_defineProperty(EntityManager, \"instance\", void 0);\n\n//# sourceURL=webpack://firework/./EntityManager.js?");

/***/ }),

/***/ "./Firework.js":
/*!*********************!*\
  !*** ./Firework.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Firework)\n/* harmony export */ });\n/* harmony import */ var _Entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Entity */ \"./Entity.js\");\n/* harmony import */ var _Vector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Vector */ \"./Vector.js\");\n/* harmony import */ var _Time__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Time */ \"./Time.js\");\n/* harmony import */ var _EntityManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./EntityManager */ \"./EntityManager.js\");\n// import Entity from \"./Entity\";\n// import Vector from \"./Vector\";\n// import Time from \"./Time\";\n// import EntityManager from \"./EntityManager\";\n// const PI2 = Math.PI * 2;\n// const createRandomColor = () => {\n//   const r = Math.round(Math.random() * 120) + 120;\n//   const g = Math.round(Math.random() * 120) + 120;\n//   const b = Math.round(Math.random() * 120) + 120;\n//   return `rgb(${r}, ${g}, ${b})`;\n// };\n// function sleep(ms) {\n//   return new Promise((resolve) => {\n//     setTimeout(() => {\n//       resolve();\n//     }, ms);\n//   });\n// }\n// function parabola(u) {\n//   return -(u - 3.2) * -(u - 3.2) + 10;\n// }\n// export default class Firework extends Entity {\n//   constructor(props) {\n//     super(props.position);\n//     this.angle = -Math.PI * 0.5;\n//     this.speed = Math.random() * 15 + 15;\n//     this.radius = Math.random() + 1;\n//     this.velocity = Math.random() * 15 + 5;\n//     this.color = createRandomColor();\n//     this.gravity = 0;\n//   }\n//   createFireworks(speed, size = 50) {\n//     const angle = PI2 / size;\n//     const velocity = 10;\n//     const color = this.color;\n//     for (let i = 0; i < size; i++) {\n//       const firework = new Firework({\n//         position: new Vector(this.position.x, this.position.y),\n//       });\n//       firework.angle = angle * i;\n//       firework.isBurst = true;\n//       firework.speed = speed;\n//       firework.velocity = velocity;\n//       firework.color = color;\n//       firework.radius = this.radius;\n//       EntityManager.addEntity(firework);\n//     }\n//   }\n//   async update() {\n//     const speedVelocity = this.speed * this.velocity * Time.delta;\n//     this.position.x += Math.cos(this.angle) * speedVelocity;\n//     this.position.y += Math.sin(this.angle) * speedVelocity;\n//     this.velocity *= 0.98;\n//     if (!this.isBurst && this.velocity <= 1) {\n//       this.isBurst = true;\n//       this.createFireworks(16, 30);\n//       await sleep(150);\n//       this.createFireworks(12, 20);\n//       await sleep(150);\n//       this.createFireworks(10, 10);\n//     } else if (this.isBurst) {\n//       this.gravity += 0.3;\n//       this.position.y += this.speed * Time.delta + 0.98;\n//       this.position.y += parabola(this.gravity);\n//       if (this.velocity <= 1) {\n//         EntityManager.removeEntity(this);\n//       }\n//     }\n//   }\n//   render(context) {\n//     context.beginPath();\n//     context.fillStyle = this.color;\n//     context.arc(this.position.x, this.position.y, this.radius, 0, PI2);\n//     context.fill();\n//   }\n// }\n\n\n\n\nconst PI2 = Math.PI * 2;\n\nconst createRandomColor = () => {\n  const r = Math.round(Math.random() * 120) + 120;\n  const g = Math.round(Math.random() * 120) + 120;\n  const b = Math.round(Math.random() * 120) + 120;\n  return `rgb(${r}, ${g}, ${b})`;\n};\n\nfunction sleep(ms) {\n  return new Promise(resolve => {\n    setTimeout(() => {\n      resolve();\n    }, ms);\n  });\n}\n\nfunction parabola(u) {\n  return 1 / 20 * (u * u) - 1.5;\n}\n\nclass Firework extends _Entity__WEBPACK_IMPORTED_MODULE_0__.default {\n  constructor(props) {\n    super(props.position);\n    this.angle = -Math.PI * 0.5;\n    this.speed = Math.random() * 15 + 20;\n    this.radius = Math.random() + 1;\n    this.velocity = Math.random() * 15 + 10;\n    this.color = createRandomColor();\n    this.gravity = 0;\n    this.gravityVelocity = 1;\n  }\n\n  createFireworks(speed, size = 50) {\n    const angle = PI2 / size;\n    const velocity = 10;\n    const color = this.color;\n\n    for (let i = 0; i < size; i++) {\n      const firework = new Firework({\n        position: new _Vector__WEBPACK_IMPORTED_MODULE_1__.default(this.position.x, this.position.y)\n      });\n      firework.angle = angle * i;\n      firework.isBurst = true;\n      firework.speed = speed;\n      firework.velocity = velocity;\n      firework.color = color;\n      firework.radius = this.radius;\n      _EntityManager__WEBPACK_IMPORTED_MODULE_3__.default.addEntity(firework);\n    }\n  }\n\n  async update() {\n    const speedVelocity = this.speed * this.velocity * _Time__WEBPACK_IMPORTED_MODULE_2__.default.delta;\n    this.position.x += Math.cos(this.angle) * speedVelocity;\n    this.position.y += Math.sin(this.angle) * speedVelocity;\n\n    if (this.isBurst) {\n      this.velocity *= 0.99;\n    } else {\n      this.velocity *= 0.98;\n    }\n\n    if (!this.isBurst && this.velocity <= 1) {\n      this.isBurst = true;\n      this.createFireworks(14, 30);\n      await sleep(150);\n      this.createFireworks(12, 20);\n      await sleep(150);\n      this.createFireworks(10, 10);\n    } else if (this.isBurst) {\n      this.gravity += 0.1;\n      this.position.y += this.speed * _Time__WEBPACK_IMPORTED_MODULE_2__.default.delta + parabola(this.gravity);\n\n      if (this.velocity <= 3.5) {\n        _EntityManager__WEBPACK_IMPORTED_MODULE_3__.default.removeEntity(this);\n      }\n    }\n  }\n\n  render(context) {\n    context.beginPath();\n    context.fillStyle = this.color;\n    context.arc(this.position.x, this.position.y, this.radius, 0, PI2);\n    context.fill();\n  }\n\n}\n\n//# sourceURL=webpack://firework/./Firework.js?");

/***/ }),

/***/ "./Time.js":
/*!*****************!*\
  !*** ./Time.js ***!
  \*****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Time)\n/* harmony export */ });\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nclass Time {\n  static start() {\n    Time.startTime = Date.now();\n  }\n\n  static update() {\n    const currentTime = Date.now();\n    Time.delta = (currentTime - Time.startTime) * 0.001;\n    Time.startTime = currentTime;\n  }\n\n}\n\n_defineProperty(Time, \"delta\", 0);\n\n_defineProperty(Time, \"startTime\", 0);\n\n//# sourceURL=webpack://firework/./Time.js?");

/***/ }),

/***/ "./Vector.js":
/*!*******************!*\
  !*** ./Vector.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Vector)\n/* harmony export */ });\nclass Vector {\n  constructor(x, y) {\n    this.x = x;\n    this.y = y;\n  }\n\n}\n\n//# sourceURL=webpack://firework/./Vector.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Time__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Time */ \"./Time.js\");\n/* harmony import */ var _EntityManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EntityManager */ \"./EntityManager.js\");\n/* harmony import */ var _Firework__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Firework */ \"./Firework.js\");\n/* harmony import */ var _Vector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Vector */ \"./Vector.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\nclass App {\n  constructor(props) {\n    _defineProperty(this, \"play\", () => {\n      _Time__WEBPACK_IMPORTED_MODULE_0__.default.start();\n      this.handleRequestFrame = window.requestAnimationFrame(this.onEnterFrame);\n    });\n\n    _defineProperty(this, \"pause\", () => {\n      if (this.handleRequestFrame === null) {\n        return;\n      }\n\n      window.cancelAnimationFrame(this.handleRequestFrame);\n    });\n\n    _defineProperty(this, \"onEnterFrame\", () => {\n      _Time__WEBPACK_IMPORTED_MODULE_0__.default.update();\n      this.entityManager.update();\n      this.entityManager.render(this.context);\n      this.handleRequestFrame = window.requestAnimationFrame(this.onEnterFrame);\n    });\n\n    this.ref = props;\n    this.canvas = document.createElement(\"canvas\");\n    this.context = this.canvas.getContext(\"2d\");\n    this.ref.appendChild(this.canvas);\n    this.canvas.width = document.body.clientWidth * 2;\n    this.canvas.height = document.body.clientHeight * 2;\n    this.entityManager = new _EntityManager__WEBPACK_IMPORTED_MODULE_1__.default();\n  }\n\n}\n\nwindow.addEventListener(\"load\", () => {\n  const app = new App(document.body);\n\n  const createFirework = () => {\n    const firework = new _Firework__WEBPACK_IMPORTED_MODULE_2__.default({\n      position: new _Vector__WEBPACK_IMPORTED_MODULE_3__.default(document.body.clientWidth * Math.random(), document.body.clientHeight)\n    });\n    app.entityManager.addEntity(firework);\n  };\n\n  createFirework();\n  setInterval(() => {\n    createFirework();\n  }, 700);\n  app.play();\n});\n\n//# sourceURL=webpack://firework/./index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;