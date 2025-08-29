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
/*!**********************************************!*\
  !*** ./src/blocks/masonry-gallery/script.js ***!
  \**********************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).ready(function (e) {
  window.addEventListener('WPMozoMasonryGalleryPropsChanged', () => {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.wp-block-wpmozo-masonry-gallery').each(function () {
      initMasonryGallery(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this));
    });
  });

  // Initial gallery setup
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.wp-block-wpmozo-masonry-gallery').each(function () {
    initMasonryGallery(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this));
  });
});
function initMasonryGallery($galleryContainer) {
  let $this = $galleryContainer.find('.wpmozo_masonry_gallery_wrapper');
  let $gallery = $this.isotope({
    itemSelector: '.wpmozo_masonry_gallery_item',
    layoutMode: 'masonry',
    percentPosition: true,
    resize: true,
    masonry: {
      columnWidth: '.wpmozo_masonry_gallery_item',
      gutter: '.wpmozo_masonry_gallery_item_gutter'
    }
  });
  $gallery.imagesLoaded(function () {
    $gallery.isotope('layout');
    $gallery.isotope('reloadItems');
  });

  // Remove previous magnificPopup to avoid duplicates
  if ($this.data('magnificPopup')) {
    $this.magnificPopup('destroy');
  }
  if ($this.find('.wpmozo_masonry_gallery_item').is('a') && $galleryContainer.hasClass('wpmozo-masonry-image-lightbox')) {
    const clientId = $galleryContainer.attr('id') || '';
    const mainClass = clientId + '-lightbox';
    $this.magnificPopup({
      delegate: 'a',
      type: 'image',
      closeOnContentClick: false,
      closeBtnInside: false,
      mainClass: 'mfp-with-zoom mfp-img-mobile wpmozo_masonry_gallery_lightbox ' + mainClass,
      gallery: {
        enabled: true,
        tPrev: '',
        tNext: '',
        tCounter: ''
      },
      image: {
        markup: '<div class="mfp-figure">' + '<div class="mfp-close"></div>' + '<div class="mfp-img"></div>' + '<div class="mfp-bottom-bar">' + '<div class="mfp-title"></div>' + '</div>' + '</div>',
        titleSrc: function (item) {
          return item.el.find('.wpmozo_masonry_gallery_title_caption_wrapper').length > 0 ? item.el.find('.wpmozo_masonry_gallery_title_caption_wrapper').html() : '';
        },
        tError: '<a href="%url%">The image</a> could not be loaded.'
      },
      allowHTMLInTemplate: true
    });
  } else {
    // Prevent default link behavior for <a> tags inside the gallery
    $this.off('click.wpmozoMasonryGallery').on('click.wpmozoMasonryGallery', 'a', function (e) {
      e.preventDefault();
    });
  }

  // Remove previous resize handler to avoid stacking
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).off('resize.wpmozoMasonryGallery-' + $galleryContainer.attr('id'));
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('resize.wpmozoMasonryGallery-' + $galleryContainer.attr('id'), function () {
    $gallery.isotope('layout');
  });
}
})();

/******/ })()
;
//# sourceMappingURL=script.js.map