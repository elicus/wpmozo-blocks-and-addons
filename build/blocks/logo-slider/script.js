/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/common/utils.js":
/*!*****************************!*\
  !*** ./src/common/utils.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WpmozoGetImageSizeAttributes: () => (/* binding */ WpmozoGetImageSizeAttributes),
/* harmony export */   convertInlineStyle: () => (/* binding */ convertInlineStyle),
/* harmony export */   convertInlineStyleStr: () => (/* binding */ convertInlineStyleStr),
/* harmony export */   convertVarStyle: () => (/* binding */ convertVarStyle),
/* harmony export */   extractCssByClass: () => (/* binding */ extractCssByClass),
/* harmony export */   getIdByClientid: () => (/* binding */ getIdByClientid),
/* harmony export */   getMainEl: () => (/* binding */ getMainEl),
/* harmony export */   headingLevelsList: () => (/* binding */ headingLevelsList),
/* harmony export */   inspectorPanelTabs: () => (/* binding */ inspectorPanelTabs),
/* harmony export */   minifyCSS: () => (/* binding */ minifyCSS),
/* harmony export */   wpmozo_generate_style: () => (/* binding */ wpmozo_generate_style),
/* harmony export */   wpmozo_get_styleAtts: () => (/* binding */ wpmozo_get_styleAtts),
/* harmony export */   wpmozo_is_empty: () => (/* binding */ wpmozo_is_empty),
/* harmony export */   wpmozo_parse_style: () => (/* binding */ wpmozo_parse_style)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
// src/utils.js

function wpmozo_is_empty(value) {
  return value === '' || typeof value === 'undefined' || value === null || value === false || typeof value === 'object' && !Array.isArray(value) && Object.keys(value).length === 0 || Array.isArray(value) && value.length === 0;
}
function wpmozo_parse_style(property, style) {
  return !wpmozo_is_empty(style) ? `${property}: ${style};` : '';
}
function wpmozo_get_styleAtts(attributes, stylesKeys) {
  const stylesTypes = {
    FontSize: '',
    FontAppearance: {
      fontStyle: '',
      fontWeight: ''
    },
    LetterSpacing: '',
    Decoration: '',
    LetterCase: '',
    LineHeight: '',
    text: '',
    background: '',
    borderRadius: '',
    border: [],
    padding: '',
    margin: '',
    position: '',
    width: '',
    height: ''
  };
  let StyleAtts = {};
  for (const styleType in stylesTypes) {
    if (attributes.hasOwnProperty(stylesKeys + styleType)) {
      StyleAtts[styleType] = attributes[stylesKeys + styleType];
    }
  }
  return StyleAtts;
}
function convertVarStyle(options = {}) {
  const spacing = {
    ...options
  };
  for (const type in spacing) {
    const value = spacing[type];
    if (typeof value !== 'undefined' && value !== '' && value.startsWith('var:')) {
      spacing[type] = value.replace('var:', 'var(--wp--').replace(/\|/g, '--') + ')';
    }
  }
  return spacing;
}
function convertInlineStyle(options = {}, atts = {}) {
  let style = '';
  const append = (prop, value) => {
    if (typeof value !== 'undefined' && value !== '') style += `${prop}: ${value};`;
  };
  append('font-size', options.FontSize);
  append('letter-spacing', options.LetterSpacing);
  append('text-decoration', options.Decoration);
  append('text-transform', options.LetterCase);
  append('line-height', options.LineHeight);
  append('color', options.text);
  append('background', options.background);
  append('width', options.width);
  append('height', options.height);
  if (options.FontAppearance) {
    append('font-style', options.FontAppearance.fontStyle);
    append('font-weight', options.FontAppearance.fontWeight);
  }
  if (options.border) {
    if (options.border.width) {
      let str = options.border.width;
      str += ` ${options.border.style || 'solid'}`;
      if (options.border.color) str += ` ${options.border.color}`;
      append('border', str);
    }
    if (options.border.top) {
      for (const border in options.border) {
        for (const item in options.border[border]) {
          append(`border-${border}-${item}`, options.border[border][item]);
        }
        if (!options.border[border].hasOwnProperty('style')) {
          append(`border-${border}-style`, 'solid');
        }
      }
    }
  }
  if (options.borderRadius) {
    append('border-top-left-radius', options.borderRadius.topLeft);
    append('border-top-right-radius', options.borderRadius.topRight);
    append('border-bottom-left-radius', options.borderRadius.bottomLeft);
    append('border-bottom-right-radius', options.borderRadius.bottomRight);
    if (typeof options.borderRadius.topLeft === 'undefined') {
      append('border-radius', options.borderRadius);
    }
  }
  const handleSpacing = (prop, obj) => {
    const spacing = convertVarStyle(obj);
    for (const key in obj) {
      if (spacing[key]) append(`${prop}-${key}`, spacing[key]);
    }
  };
  if (options.padding) handleSpacing('padding', options.padding);
  if (options.margin) handleSpacing('margin', options.margin);
  if (options.position) {
    const spacing = convertVarStyle(options.position);
    for (const pos in options.position) {
      if (spacing[pos]) append(pos, spacing[pos]);
    }
    if (spacing.top && !spacing.bottom) append('bottom', 'auto');
    if (spacing.bottom && !spacing.top) append('top', 'auto');
    if (spacing.right && !spacing.left) append('left', 'auto');
    if (spacing.left && !spacing.right) append('right', 'auto');
    append('position', 'absolute');
  }
  return style;
}
function convertInlineStyleStr(options, attributes) {
  const styleStr = {};
  options.forEach(opt => {
    const styleAttr = wpmozo_get_styleAtts(attributes, opt);
    styleStr[opt] = convertInlineStyle(styleAttr, attributes);
  });
  return styleStr;
}
function wpmozo_generate_style(styles) {
  return styles.map(({
    style: styleObject,
    selector,
    additional = ''
  }) => {
    let singleStyle = '';
    for (const styleProp in styleObject) {
      const styleValue = styleObject[styleProp];
      let style = '';
      if (typeof styleValue === 'object' && styleValue.value !== undefined) {
        style = wpmozo_is_empty(styleValue.value) ? '' : `${styleProp}: ${styleValue.prefix || ''}${styleValue.value}${styleValue.suffix || ''};`;
      } else {
        style = wpmozo_parse_style(styleProp, styleValue);
      }
      if (!wpmozo_is_empty(style)) singleStyle += style;
    }
    return !wpmozo_is_empty(singleStyle) ? `${selector}{${singleStyle}${additional}}` : '';
  }).join('');
}
function extractCssByClass() {
  let extractedCSS = '';
  const editorIfram = jQuery('body').find('[name="editor-canvas"]').contents();
  const styleEl = editorIfram.length > 0 ? jQuery(editorIfram).find('.wpmozo-dynamic-style') : jQuery('.wpmozo-dynamic-style');
  styleEl.each((key, el) => {
    const css = jQuery(el).html(),
      ID = jQuery(el).data('id'),
      clientId = jQuery(el).data('client-id'),
      minifiedCss = minifyCSS(css),
      regExp = new RegExp(`block-${clientId}`, "gi");
    extractedCSS += minifiedCss.replace(regExp, `block-${ID}`);
  });
  return extractedCSS;
}
function minifyCSS(css) {
  return css.replace(/\/\*[\s\S]*?\*\//g, '').replace(/url\(\s*(['"]?)(.*?)\1\s*\)/g, 'url($1$2$1)').replace(/\s+/g, ' ').replace(/\s*({|}|;|:|,)\s*/g, '$1').replace(/;}+/g, '}').trim();
}
function getIdByClientid(clientId) {
  if (wpmozo_is_empty(clientId)) return '';
  const clientIdArr = clientId.split('-');
  return clientIdArr[4] || '';
}
function getMainEl(clientId) {
  const editorIfram = jQuery('body').find('[name="editor-canvas"]').contents();
  const mainFromIfram = editorIfram.find('body').find(`#block-${clientId}`);
  const mainFromBody = jQuery('body').find(`#block-${clientId}`);
  return mainFromIfram.length > 0 ? mainFromIfram : mainFromBody;
}
function WpmozoGetImageSizeAttributes(image, size) {
  const url = get(image, ['media_details', 'sizes', size, 'source_url']);
  if (url) {
    return {
      height: undefined,
      sizeSlug: size,
      url,
      width: undefined
    };
  }
  return {};
}
const headingLevelsList = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('H1', 'wpmozo-blocks-and-addons'),
  value: 'h1'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('H2', 'wpmozo-blocks-and-addons'),
  value: 'h2'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('H3', 'wpmozo-blocks-and-addons'),
  value: 'h3'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('H4', 'wpmozo-blocks-and-addons'),
  value: 'h4'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('H5', 'wpmozo-blocks-and-addons'),
  value: 'h5'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('H6', 'wpmozo-blocks-and-addons'),
  value: 'h6'
}];
const inspectorPanelTabs = () => {
  return [{
    name: 'general',
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('General', 'wpmozo-blocks-and-addons'),
    className: 'wpmozo-inspector-tab-general'
  }, {
    name: 'design',
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Design', 'wpmozo-blocks-and-addons'),
    className: 'wpmozo-inspector-tab-design'
  }, {
    name: 'advanced',
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Advanced', 'wpmozo-blocks-and-addons'),
    className: 'wpmozo-inspector-tab-advanced'
  }];
};

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

/***/ }),

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
  !*** ./src/blocks/logo-slider/script.js ***!
  \******************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/utils */ "./src/common/utils.js");


let swiperInstances = {};
jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).load(function () {
  window.addEventListener('propsChanged', () => {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.wpmozo-bna-logo-slider-wrap').trigger('change');
  });
});
jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on('change', '.wpmozo-bna-logo-slider-wrap', function (e) {
  let newAttributes = JSON.parse(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr('data-attr'));
  const clientId = newAttributes.clientId;
  if (swiperInstances[clientId] && !(0,_common_utils__WEBPACK_IMPORTED_MODULE_1__.wpmozo_is_empty)(swiperInstances[clientId])) {
    swiperInstances[clientId].destroy(true, true);
    swiperInstances[clientId] = initSwiper(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this), newAttributes);
  } else {
    swiperInstances[clientId] = initSwiper(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this), newAttributes);
  }
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).find('.wp-block-wpmozo-logo-slider-item').on('click', function () {
    // Trigger block selection in the editor (only works in editor context)
    if (window.wp && wp.data && wp.data.dispatch) {
      wp.data.dispatch('core/block-editor').selectBlock(clientId);
    }
  });
});
jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).ready(function (e) {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.wpmozo-bna-logo-slider-wrap').each(function () {
    let newAttributes = JSON.parse(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr('data-attr'));
    const clientId = newAttributes.clientId;
    if (swiperInstances[clientId] && !(0,_common_utils__WEBPACK_IMPORTED_MODULE_1__.wpmozo_is_empty)(swiperInstances[clientId])) {
      swiperInstances[clientId].destroy(true, true);
      swiperInstances[clientId] = initSwiper(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this), newAttributes);
    } else {
      swiperInstances[clientId] = initSwiper(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this), newAttributes);
    }
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).find('.wp-block-wpmozo-logo-slider-item').on('click', function () {
      // Trigger block selection in the editor (only works in editor context)
      if (window.wp && wp.data && wp.data.dispatch) {
        wp.data.dispatch('core/block-editor').selectBlock(clientId);
      }
    });
  });
});
function initSwiper(el, attributes) {
  let block = el;
  let productsPerSlide = parseInt(attributes.logoPerSlide),
    spaceBetweenSlides = parseInt(attributes.spaceBetweenSlides),
    slidesPerGroup = parseInt(attributes.slidesPerGroup),
    tabletLogoPerSlide = parseInt(attributes.tabletLogoPerSlide),
    tabletSlidesPerGroup = parseInt(attributes.tabletSlidesPerGroup),
    tabletSpaceBetweenSlides = parseInt(attributes.tabletSpaceBetweenSlides),
    mobileLogoPerSlide = parseInt(attributes.mobileLogoPerSlide),
    mobileSpaceBetweenSlides = parseInt(attributes.mobileSpaceBetweenSlides),
    mobileSlidesPerGroup = parseInt(attributes.mobileSlidesPerGroup),
    buttonNextClass = !(0,_common_utils__WEBPACK_IMPORTED_MODULE_1__.wpmozo_is_empty)(attributes.nextSlideArrow) ? '.custom-swiper-button-next' : '.swiper-button-next',
    buttonPrevClass = !(0,_common_utils__WEBPACK_IMPORTED_MODULE_1__.wpmozo_is_empty)(attributes.previousSlideArrow) ? '.custom-swiper-button-prev' : '.swiper-button-prev',
    slidesPerGroupSkip;
  let loop = attributes.sliderLoop,
    speed = attributes.transitionDuration,
    arrows = false,
    dots = false,
    autoplaySlides = false;
  if (productsPerSlide > slidesPerGroup && 1 !== slidesPerGroup) {
    slidesPerGroupSkip = productsPerSlide - slidesPerGroup;
  }
  if (attributes.showArrow) {
    arrows = {
      nextEl: '#block-' + attributes.clientId + ' ' + buttonNextClass,
      prevEl: '#block-' + attributes.clientId + ' ' + buttonPrevClass
    };
  }
  if (attributes.showControlDot) {
    dots = {
      el: '#block-' + attributes.clientId + ' .swiper-pagination',
      dynamicBullets: attributes.enableDynamicDots,
      clickable: true
    };
  }
  if (attributes.autoplay) {
    if (attributes.pauseOnHover) {
      autoplaySlides = {
        delay: attributes.autoplaySpeed,
        disableOnInteraction: true,
        pauseOnMouseEnter: true
      };
    } else {
      autoplaySlides = {
        delay: attributes.autoplaySpeed,
        disableOnInteraction: false,
        pauseOnMouseEnter: false
      };
    }
  }
  let options = {
    slidesPerView: productsPerSlide,
    spaceBetween: spaceBetweenSlides,
    slidesPerGroup: slidesPerGroup,
    loop: loop,
    speed: speed,
    pagination: dots,
    navigation: arrows,
    grabCursor: true,
    observer: true,
    observeParents: true,
    breakpoints: {
      981: {
        slidesPerView: productsPerSlide,
        spaceBetween: spaceBetweenSlides,
        slidesPerGroup: slidesPerGroup
      },
      768: {
        slidesPerView: tabletLogoPerSlide,
        spaceBetween: tabletSpaceBetweenSlides,
        slidesPerGroup: tabletSlidesPerGroup
      },
      0: {
        slidesPerView: mobileLogoPerSlide,
        spaceBetween: mobileSpaceBetweenSlides,
        slidesPerGroup: mobileSlidesPerGroup
      }
    }
  };
  if ('true' === attributes.autoplay) {
    options.autoplay = autoplaySlides;
  }
  return new Swiper(block.find(`.swiper-container[data-client-id="${attributes.clientId}"`).get(0), options);
}
})();

/******/ })()
;
//# sourceMappingURL=script.js.map