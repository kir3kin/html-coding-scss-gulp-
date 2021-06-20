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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/js/autoresize.js":
/*!*************************************!*\
  !*** ./src/assets/js/autoresize.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const textArea = document.querySelectorAll('[data-autoresize]')\r\n\r\ntextArea.forEach(item => {\r\n\tlet originalHeight = item.offsetHeight\r\n\titem.addEventListener('input', e => {\r\n\t\tlet $this = e.target\r\n\r\n\t\t$this.style.height = `${originalHeight}px`\r\n\t\t$this.style.height = `${$this.scrollHeight}px`\r\n\t})\r\n})\n\n//# sourceURL=webpack:///./src/assets/js/autoresize.js?");

/***/ }),

/***/ "./src/assets/js/mobileNav.js":
/*!************************************!*\
  !*** ./src/assets/js/mobileNav.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const burgerMenu = {\r\n\tburger: document.getElementById('sidebarToggle'),\r\n\tpage: document.getElementById('page'),\r\n\tbody: document.body,\r\n\t_musk: false,\r\n\r\n\tget mask() {\r\n\t\tif (!this._musk) this.createMask()\r\n\t\treturn this._musk\r\n\t},\r\n\tcreateMask() {\r\n\t\tlet mask = document.createElement('div')\r\n\t\tmask.classList.add('page__musk')\r\n\t\tmask.addEventListener('click', () => this.closeSidebar())\r\n\t\tthis._musk = mask\r\n\t},\r\n\tshowSidebar() {\r\n\t\tthis.body.classList.add('show-sidebar')\r\n\t\tthis.page.appendChild(this.mask)\r\n\t},\r\n\tcloseSidebar() {\r\n\t\tthis.body.classList.remove('show-sidebar')\r\n\t\tthis.page.removeChild(this.mask)\r\n\t},\r\n\tinit() {\r\n\t\tthis.burger.addEventListener('click', () => {\r\n\t\t\tif (this.body.classList.contains('show-sidebar'))\r\n\t\t\t\tthis.closeSidebar()\r\n\t\t\telse\r\n\t\t\t\tthis.showSidebar()\r\n\t\t})\r\n\t}\r\n}\r\n\r\nburgerMenu.init()\r\n\r\n// const burger = document.getElementById('sidebarToggle')\r\n// const page = document.getElementById('page')\r\n// const body = document.body\r\n\r\n// burger.addEventListener('click', e => {\r\n// \tconst musk = createMask()\r\n// \tmusk.addEventListener('click', () => closeSidebar(body, page, musk))\r\n// \tif (body.classList.contains('show-sidebar'))\r\n// \t\tcloseSidebar(body, page, musk)\r\n// \telse\r\n// \t\tshowSidebar(body, page, musk)\r\n// })\r\n\r\n// function showSidebar(body, page, musk) {\r\n// \tbody.classList.add('show-sidebar')\r\n// \tpage.appendChild(musk)\r\n// }\r\n\r\n// function closeSidebar(body, page, musk) {\r\n// \tbody.classList.remove('show-sidebar')\r\n// \tpage.removeChild(musk)\r\n// }\r\n\r\n// function createMask() {\r\n// \tlet mask = document.createElement('div')\r\n// \tmask.classList.add('page__musk')\r\n// \treturn mask\r\n// }\n\n//# sourceURL=webpack:///./src/assets/js/mobileNav.js?");

/***/ }),

/***/ "./src/assets/js/modal.js":
/*!********************************!*\
  !*** ./src/assets/js/modal.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const modalWindows = {\r\n\tbody: document.body,\r\n\tmodalBtn: document.querySelectorAll('[data-modal]'),\r\n\tmodalClose: document.querySelectorAll('.modal__close'),\r\n\tmodalWrapp: document.querySelectorAll('.modal'),\r\n\tmodalStoryImage: document.querySelector('.modal__video'),\r\n\r\n\tmodalContentProp: {\r\n\t\ttranslateY: -50,//px\r\n\t\topacity: 0,\r\n\t\tcloseTime: 300,//ms\r\n\t\ttimingFunc: 'linear'\r\n\t},\r\n\r\n\tinitModalContentAnimation(modalContent) {\r\n\t\tmodalContent.style.transform = `translateY(${this.modalContentProp.translateY}px)`\r\n\t\tmodalContent.style.opacity = this.modalContentProp.opacity\r\n\r\n\t\tif (!modalContent.style.transition)\r\n\t\t\tmodalContent.style.transition = `transform ${this.modalContentProp.closeTime}ms ${this.modalContentProp.timingFunc}, opacity ${this.modalContentProp.closeTime}ms ${this.modalContentProp.timingFunc}`\r\n\t},\r\n\r\n\tcloseModal(currentModal) {\r\n\t\t// currentModal.querySelector('.modal__content').removeAttribute('style')\r\n\t\tthis.initModalContentAnimation(currentModal.querySelector('.modal__content'))\r\n\t\tsetTimeout(() => {\r\n\t\t\tcurrentModal.classList.remove('show')\r\n\t\t\tthis.body.classList.remove('no-scroll')\r\n\t\t}, this.modalContentProp.closeTime)\r\n\t},\r\n\r\n\tchangeStoryImage(target) {\r\n\t\tconst imagePath = target.querySelector('img').getAttribute('src')\r\n\t\tthis.modalStoryImage.setAttribute('poster', imagePath)\r\n\t},\r\n\r\n\tinit() {\r\n\t\tthis.modalBtn.forEach(item => {\r\n\t\t\titem.addEventListener('click', e => {\r\n\t\t\t\tlet modal = document.getElementById(e.currentTarget.getAttribute('data-modal'))\r\n\t\t\t\tlet modalContent = modal.querySelector('.modal__content')\r\n\t\t\t\tthis.initModalContentAnimation(modalContent)\r\n\r\n\t\t\t\tmodal.classList.add('show')\r\n\t\t\t\tthis.body.classList.add('no-scroll')\r\n\t\t\t\tmodalContent.addEventListener('click', e => e.stopPropagation())\r\n\r\n\t\t\t\tsetTimeout(() => {\r\n\t\t\t\t\tmodalContent.style.transform = 'none'\r\n\t\t\t\t\tmodalContent.style.opacity = 1\r\n\t\t\t\t}, 0)\r\n\r\n\r\n\t\t\t\tif (e.currentTarget.getAttribute('data-modal') === 'story-modal') {\r\n\t\t\t\t\tthis.changeStoryImage(e.currentTarget)\r\n\t\t\t\t}\r\n\r\n\t\t\t})\r\n\t\t})\r\n\r\n\t\tthis.modalClose.forEach(item => {\r\n\t\t\titem.addEventListener('click', e => {\r\n\t\t\t\tthis.closeModal(e.currentTarget.closest('.modal'))\r\n\t\t\t})\r\n\t\t})\r\n\r\n\t\tthis.modalWrapp.forEach(item => {\r\n\t\t\titem.addEventListener('click', e => {\r\n\t\t\t\tthis.closeModal(e.currentTarget)\r\n\t\t\t})\r\n\t\t})\r\n\t}\r\n}\r\n\r\nmodalWindows.init();\r\n\r\n\r\n// const modalBtn = document.querySelectorAll('[data-modal]')\r\n// const body = document.body\r\n// const modalClose = document.querySelectorAll('.modal__close')\r\n// const modalWrapp = document.querySelectorAll('.modal')\r\n\r\n// modalBtn.forEach(item => {\r\n// \titem.addEventListener('click', e => {\r\n// \t\tlet modal = document.getElementById(e.currentTarget.getAttribute('data-modal'))\r\n// \t\tlet modalContent = modal.querySelector('.modal__content')\r\n\r\n// \t\tmodalContent.addEventListener('click', e => e.stopPropagation())\r\n// \t\tmodal.classList.add('show')\r\n// \t\tbody.classList.add('no-scroll')\r\n\r\n// \t\tsetTimeout(() => {\r\n// \t\t\tmodalContent.style.transform = 'none'\r\n// \t\t\tmodalContent.style.opacity = 1\r\n// \t\t}, 0)\r\n// \t})\r\n// })\r\n\r\n// modalClose.forEach(item => {\r\n// \titem.addEventListener('click', e => {\r\n// \t\tcloseModal(e.currentTarget.closest('.modal'))\r\n// \t})\r\n// })\r\n\r\n// modalWrapp.forEach(item => {\r\n// \titem.addEventListener('click', e => {\r\n// \t\tcloseModal(e.currentTarget)\r\n// \t})\r\n// })\r\n\r\n// function closeModal(currentModal) {\r\n// \tcurrentModal.querySelector('.modal__content').removeAttribute('style')\r\n// \tsetTimeout(() => {\r\n// \t\tcurrentModal.classList.remove('show')\r\n// \t\tbody.classList.remove('no-scroll')\r\n// \t}, 300)\r\n// }\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/assets/js/modal.js?");

/***/ }),

/***/ "./src/assets/js/video.js":
/*!********************************!*\
  !*** ./src/assets/js/video.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function lazyVideo() {\r\n\tconst video = document.querySelectorAll('[data-video=youtube]')\r\n\r\n\tvideo && video.forEach(el => {\r\n\t\tconst iFrame = el.querySelector('iframe')\r\n\t\tiFrame && iFrame.setAttribute('src', 'https://www.youtube.com/embed/stFOy0Noahg')\r\n\t})\r\n}\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", lazyVideo);\n\n//# sourceURL=webpack:///./src/assets/js/video.js?");

/***/ }),

/***/ 0:
/*!**************************************************************************************************************************!*\
  !*** multi ./src/assets/js/autoresize.js ./src/assets/js/mobileNav.js ./src/assets/js/modal.js ./src/assets/js/video.js ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! F:\\serv\\xampp\\htdocs\\portfolio\\src\\assets\\js\\autoresize.js */\"./src/assets/js/autoresize.js\");\n__webpack_require__(/*! F:\\serv\\xampp\\htdocs\\portfolio\\src\\assets\\js\\mobileNav.js */\"./src/assets/js/mobileNav.js\");\n__webpack_require__(/*! F:\\serv\\xampp\\htdocs\\portfolio\\src\\assets\\js\\modal.js */\"./src/assets/js/modal.js\");\nmodule.exports = __webpack_require__(/*! F:\\serv\\xampp\\htdocs\\portfolio\\src\\assets\\js\\video.js */\"./src/assets/js/video.js\");\n\n\n//# sourceURL=webpack:///multi_./src/assets/js/autoresize.js_./src/assets/js/mobileNav.js_./src/assets/js/modal.js_./src/assets/js/video.js?");

/***/ })

/******/ });