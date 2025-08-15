/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/***/ ((module) => {

module.exports = window["jQuery"];

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
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!*********************************************!*\
  !*** ./src/blocks/content-toggle/script.js ***!
  \*********************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).load(function () {
  window.addEventListener('toggleAdded', () => {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.wpmozo-bna-toggle-field').trigger('change');
  });
});
// Change event - recommended way
jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on('change', '.wpmozo-bna-toggle-field', function (e) {
  const selector = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).closest('.wpmozo-bna-content-toggle-main');
  wpmozo_toggle_switch(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this), selector);
});

// Click event on title wrap headers
jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on('click', '.wpmozo-bna-toggle-title-wrap', function (e) {
  const wrap = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).closest('.wpmozo-bna-toggle-title-wrap');
  const selector = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).closest('.wpmozo-bna-content-toggle-main');
  const input = selector.find('.wpmozo-bna-toggle-field');
  if (wrap.hasClass('wpmozo-bna-toggle-title-one')) {
    input.prop('checked', false);
  } else {
    input.prop('checked', true);
  }
  wpmozo_toggle_switch(input, selector);
});

// Click event on switch trigger
jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on('click', '.wpmozo_switch_trigger', function (e) {
  const selector = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).closest('.wpmozo-bna-content-toggle-main');
  const input = selector.find('.wpmozo-bna-toggle-field');
  if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).hasClass('wpmozo-bna-toggle-title-one')) {
    input.prop('checked', false);
  } else {
    input.prop('checked', true);
  }
  wpmozo_toggle_switch(input, selector);
});

// Initialize toggle switch on page load
jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).ready(function () {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.wpmozo-bna-toggle-field').each(function (keym, el) {
    const selector = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).closest('.wpmozo-bna-content-toggle-main');
    wpmozo_toggle_switch(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this), selector);
  });
});

// Toggle switch function
function wpmozo_toggle_switch(input, main) {
  if (input.prop('checked')) {
    main.find('.wpmozo-bna-content-toggle-one').removeClass('wpmozo-bna-content-toggle-active');
    main.find('.wpmozo-bna-content-toggle-two').addClass('wpmozo-bna-content-toggle-active');
  } else {
    jQuery('.wpmozo-bna-content-toggle-two').removeClass('wpmozo-bna-content-toggle-active');
    jQuery('.wpmozo-bna-content-toggle-one').addClass('wpmozo-bna-content-toggle-active');
  }
}
})();

/******/ })()
;
//# sourceMappingURL=script.js.map