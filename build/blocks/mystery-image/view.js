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
/*!******************************************!*\
  !*** ./src/blocks/mystery-image/view.js ***!
  \******************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/**
 * Use this file for JavaScript code that you want to run in the front-end
 * on posts/pages that contain this block.
 *
 * When this file is defined as the value of the `viewScript` property
 * in `block.json` it will be enqueued on the front end of the site.
 *
 * Example:
 *
 * ```js
 * {
 *   "viewScript": "file:./view.js"
 * }
 * ```
 *
 * If you're not making any changes to this file because your project doesn't need any
 * JavaScript running in the front-end, then you should delete this file and remove
 * the `viewScript` property from `block.json`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/#view-script
 */

/* eslint-disable no-console */
var images = document.querySelectorAll('.wp-block-wpmozo-mystery-image .wp-block-image');
if (images.length > 0) {
  var idx = Math.floor(Math.random() * images.length);
  var selectedImage = images[idx];
  selectedImage.classList.add('mystery-show');

  // Add anchor tag if not already present and add overlay span
  var imgTag = selectedImage.querySelector('img');
  if (imgTag && !selectedImage.querySelector('a')) {
    var anchor = document.createElement('a');
    anchor.href = imgTag.src;
    anchor.className = 'wpmozo-mystery-image-anchor';
    // Move the img inside the anchor
    imgTag.parentNode.insertBefore(anchor, imgTag);
    anchor.appendChild(imgTag);
  }
  // If the parent .wp-block-wpmozo-mystery-image has the overlay class, add the overlay span
  var parentBlock = selectedImage.closest('.wp-block-wpmozo-mystery-image');
  if (parentBlock && parentBlock.classList.contains('wpmozo-mystery-image-overlay')) {
    // Add overlay span if not already present
    if (!anchor.querySelector('.wpmozo-overlay-icon')) {
      var overlay = document.createElement('span');
      overlay.className = 'wpmozo-overlay-icon';
      anchor.appendChild(overlay);
      var iTag = document.createElement('i');
      // Fetch the icon class from data-icon attribute of the parent .wp-block-wpmozo-mystery-image
      var iconClass = parentBlock ? parentBlock.getAttribute('data-icon') : '';
      iTag.className = iconClass || 'far fa-star';
      overlay.appendChild(iTag);
    }
  }
}
jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).ready(function (e) {
  // Updated JS code to initialize magnificPopup for the .mystery-show image inside .wpmozo-mystery-image-lightbox
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.wpmozo-mystery-image-lightbox').each(function () {
    const $container = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this);
    const clientId = $container.parent().attr('id') || '';
    const effect = $container.data('lightbox_effect') || 'none';
    const duration = effect !== 'none' ? parseInt($container.data('lightbox_transition_duration')) || 0 : 0;
    const zoomEnabled = effect === 'zoom';
    const mainClass = 'block-' + clientId + '_lightbox';

    // Only initialize if there is a .mystery-show image
    const $mysteryShowImg = $container.find('.mystery-show img');
    if ($mysteryShowImg.length > 0) {
      $container.magnificPopup({
        delegate: 'a.wpmozo-mystery-image-anchor',
        type: 'image',
        closeOnContentClick: false,
        closeBtnInside: false,
        mainClass: mainClass,
        removalDelay: duration,
        zoom: {
          enabled: zoomEnabled,
          duration: duration,
          easing: 'ease-in-out'
        },
        gallery: {
          enabled: false
        },
        image: {
          markup: '<div class="mfp-figure">' + '<div class="mfp-close"></div>' + '<div class="mfp-img"></div>' + '</div>',
          tError: '<a href="%url%">The image</a> could not be loaded.'
        }
      });
    }
  });
});

/* eslint-enable no-console */
})();

/******/ })()
;
//# sourceMappingURL=view.js.map