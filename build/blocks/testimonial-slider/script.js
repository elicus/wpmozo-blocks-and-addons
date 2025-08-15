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
/*!*************************************************!*\
  !*** ./src/blocks/testimonial-slider/script.js ***!
  \*************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/utils */ "./src/common/utils.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);


jquery__WEBPACK_IMPORTED_MODULE_1___default()(document).ready(function (e) {
  // On change on props, update the slider again.
  window.addEventListener('WPMozoTestimonialPropsChanged', () => {
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('.wp-block-wpmozo-testimonial-slider').each(function () {
      initWPMozoTestimonialSlider(jquery__WEBPACK_IMPORTED_MODULE_1___default()(this));
    });
  });

  // Init on load.
  jquery__WEBPACK_IMPORTED_MODULE_1___default()('.wp-block-wpmozo-testimonial-slider').each(function () {
    initWPMozoTestimonialSlider(jquery__WEBPACK_IMPORTED_MODULE_1___default()(this));
  });
  if (jquery__WEBPACK_IMPORTED_MODULE_1___default()(document).find('.wp-block-wpmozo-testimonial-slider').length > 0) {
    jquery__WEBPACK_IMPORTED_MODULE_1___default()(document).find('.wp-block-wpmozo-testimonial-slider').each(function () {
      let $arrows = jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).find('.wpmozo_swiper_navigation').data();
      console.log('sss::', $arrows);
      if ($arrows) {
        if ($winWidth > 980 && typeof $arrows['arrows_desktop'] !== 'undefined') {
          wpmozo_remove_arrows_classes(jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).find('.wpmozo_swiper_navigation'));
          jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).find('.wpmozo_swiper_navigation').addClass('wpmozo_arrows_' + $arrows['arrows_desktop']);
        }
      }
    });
  }
  function wpmozo_get_arrows_classes() {
    return ['wpmozo_arrows_top_left', 'wpmozo_arrows_top_center', 'wpmozo_arrows_top_right', 'wpmozo_arrows_bottom_left', 'wpmozo_arrows_bottom_center', 'wpmozo_arrows_bottom_right', 'wpmozo_arrows_outside', 'wpmozo_arrows_inside'];
  }
  function wpmozo_remove_arrows_classes($element) {
    let $arrowClasses = wpmozo_get_arrows_classes();
    $element.removeClass($arrowClasses.join(' '));
  }
}); // Over document.ready.

let wpmozoTestimonialSwipers = {};

// init testimonial slider.
function initWPMozoTestimonialSlider(blockObj) {
  var _settings$slide_effec, _settings$autoplay_de, _settings$pause_on_ho, _settings$trans_durat;
  const wrapObj = blockObj.find('.wpmozo_swiper_wrapper');
  const clientId = wrapObj.attr('data-clientId');

  // Destroy if already exists.
  if (wpmozoTestimonialSwipers[clientId] && !(0,_common_utils__WEBPACK_IMPORTED_MODULE_0__.wpmozo_is_empty)(wpmozoTestimonialSwipers[clientId])) {
    wpmozoTestimonialSwipers[clientId].destroy(true, true);
  }

  // Get the settings.
  const settings = {
    'slide_effect': wrapObj.attr('data-slide_effect'),
    'show_arrow': wrapObj.attr('data-show_arrows'),
    'show_control_dot': wrapObj.attr('data-show_control_dot'),
    'enable_loop': wrapObj.attr('data-enable_loop'),
    'auto_height': wrapObj.attr('data-auto_height'),
    'autoplay': wrapObj.attr('data-autoplay'),
    'autoplay_delay': wrapObj.attr('data-autoplay_delay'),
    'trans_duration': wrapObj.attr('data-trans_duration'),
    'pause_on_hover': wrapObj.attr('data-pause_on_hover'),
    'enable_coverflow_shadow': wrapObj.attr('data-enable_coverflow_shadow'),
    'coverflow_rotate': wrapObj.attr('data-coverflow_rotate'),
    'coverflow_depth': wrapObj.attr('data-coverflow_depth'),
    'enable_dynamic_dots': wrapObj.attr('data-enable_dynamic_dots'),
    'per_view': wrapObj.attr('data-slides_per_view'),
    'per_view_tablet': wrapObj.attr('data-slides_per_view_tablet'),
    'per_view_mobile': wrapObj.attr('data-slides_per_view_mobile'),
    'per_group': wrapObj.attr('data-slides_per_group'),
    'per_group_tablet': wrapObj.attr('data-slides_per_group_tablet'),
    'per_group_mobile': wrapObj.attr('data-slides_per_group_mobile'),
    'space_between_slides': wrapObj.attr('data-space_between_slides'),
    'space_between_slides_tablet': wrapObj.attr('data-space_between_slides_tablet'),
    'space_between_slides_mobile': wrapObj.attr('data-space_between_slides_mobile')
  };
  let $orderId = 'block-' + clientId,
    $slidesPerGroup = 1,
    $slidesPerGroupIpad = 1,
    $slidesPerGroupMobile = 1,
    $slidesPerGroupSkip = 0,
    $slidesPerGroupSkipIpad = 0,
    $slidesPerGroupSkipMobile = 0,
    $slides_per_view = 1,
    $slides_per_view_ipad = 1,
    $slides_per_view_mobile = 1,
    $space_between_slides = 0,
    $space_between_slides_ipad = 0,
    $space_between_slides_mobile = 0;
  let slideEffect = (_settings$slide_effec = settings.slide_effect) !== null && _settings$slide_effec !== void 0 ? _settings$slide_effec : 'slide';
  if ('slide' === slideEffect || 'coverflow' === slideEffect) {
    $slides_per_view = settings?.per_view ? settings.per_view : '1';
    $slides_per_view_ipad = settings?.per_view_tablet ? settings.per_view_tablet : $slides_per_view;
    $slides_per_view_mobile = settings?.per_view_mobile ? settings.per_view_mobile : $slides_per_view_ipad;
    $space_between_slides = settings?.space_between_slides ? settings.space_between_slides : '20px';
    $space_between_slides_ipad = settings?.space_between_slides_tablet ? settings.space_between_slides_tablet : $space_between_slides;
    $space_between_slides_mobile = settings?.space_between_slides_mobile ? settings.space_between_slides_mobile : $space_between_slides_ipad;
    $slidesPerGroup = settings?.per_group ? settings.per_group : '1';
    $slidesPerGroupIpad = settings?.per_group_tablet ? settings.per_group_tablet : $slidesPerGroup;
    $slidesPerGroupMobile = settings?.per_group_phone ? settings.per_group_phone : $slidesPerGroupIpad;
    if ($slides_per_view > $slidesPerGroup && 1 !== $slidesPerGroup) {
      $slidesPerGroupSkip = parseInt($slides_per_view) - parseInt($slidesPerGroup);
    }
    if ($slides_per_view_ipad > $slidesPerGroupIpad && 1 !== $slidesPerGroupIpad) {
      $slidesPerGroupSkipIpad = parseInt($slides_per_view_ipad) - parseInt($slidesPerGroupIpad);
    }
    if ($slides_per_view_mobile > $slidesPerGroupMobile && 1 !== $slidesPerGroupMobile) {
      $slidesPerGroupSkipMobile = parseInt($slides_per_view_mobile) - parseInt($slidesPerGroupMobile);
    }
  }
  let autoplay_speed = (_settings$autoplay_de = settings?.autoplay_delay) !== null && _settings$autoplay_de !== void 0 ? _settings$autoplay_de : 3000,
    pause_on_hover = (_settings$pause_on_ho = settings?.pause_on_hover) !== null && _settings$pause_on_ho !== void 0 ? _settings$pause_on_ho : 'true',
    transition_duration = (_settings$trans_durat = settings?.trans_duration) !== null && _settings$trans_durat !== void 0 ? _settings$trans_durat : 1000,
    loop_param = 'true' === settings?.enable_loop ? true : false,
    dynamic_bullets = 'true' === settings?.enable_dynamic_dots ? true : false;
  let $arrow_params = 'false';
  if ('true' === settings?.show_arrow) {
    $arrow_params = {
      nextEl: '#' + $orderId + ' .swiper-button-next',
      prevEl: '#' + $orderId + ' .swiper-button-prev'
    };
  }
  let $control_dot_params = false;
  if ('true' === settings?.show_control_dot) {
    $control_dot_params = {
      el: '#' + $orderId + ' .swiper-pagination',
      dynamicBullets: dynamic_bullets,
      clickable: true
    };
  }
  let $autoplay_param = 0;
  if ('true' === settings?.autoplay) {
    $autoplay_param = {
      delay: parseInt(autoplay_speed),
      disableOnInteraction: 'on' === pause_on_hover ? true : false
    };
  }
  let $slide_setting_cube = false;
  if ('cube' === slideEffect) {
    $slide_setting_cube = {
      shadow: false,
      slideShadows: false
    };
  }
  let $slide_setting_coverflow = false;
  if ('coverflow' === slideEffect) {
    var _settings$coverflow_r, _settings$coverflow_d, _settings$enable_cove;
    $slide_setting_coverflow = {
      rotate: (_settings$coverflow_r = settings?.coverflow_rotate) !== null && _settings$coverflow_r !== void 0 ? _settings$coverflow_r : 40,
      stretch: 0,
      depth: (_settings$coverflow_d = settings?.coverflow_depth) !== null && _settings$coverflow_d !== void 0 ? _settings$coverflow_d : 100,
      modifier: 1,
      slideShadows: (_settings$enable_cove = settings?.enable_coverflow_shadow) !== null && _settings$enable_cove !== void 0 ? _settings$enable_cove : false
    };
    loop_param = true;
  }
  let $fade = false;
  if ('fade' === slideEffect) {
    $fade = {
      crossFade: true
    };
  }
  var swipperSlider = new Swiper('#' + $orderId + ' .swiper-container', {
    slidesPerView: parseInt($slides_per_view),
    autoplay: $autoplay_param,
    spaceBetween: parseInt($space_between_slides),
    slidesPerGroup: parseInt($slidesPerGroup),
    slidesPerGroupSkip: parseInt($slidesPerGroupSkip),
    effect: slideEffect,
    cubeEffect: $slide_setting_cube,
    coverflowEffect: $slide_setting_coverflow,
    fadeEffect: $fade,
    autoHeight: 'true' === settings?.auto_height ? true : false,
    speed: parseInt(transition_duration),
    loop: loop_param,
    pagination: $control_dot_params,
    navigation: $arrow_params,
    grabCursor: true,
    observer: true,
    observeParents: true,
    breakpoints: {
      1080: {
        slidesPerView: parseInt($slides_per_view),
        spaceBetween: parseInt($space_between_slides),
        slidesPerGroup: parseInt($slidesPerGroup),
        slidesPerGroupSkip: parseInt($slidesPerGroupSkip)
      },
      767: {
        slidesPerView: parseInt($slides_per_view_ipad),
        spaceBetween: parseInt($space_between_slides_ipad),
        slidesPerGroup: parseInt($slidesPerGroupIpad),
        slidesPerGroupSkip: parseInt($slidesPerGroupSkipIpad)
      },
      0: {
        slidesPerView: parseInt($slides_per_view_mobile),
        spaceBetween: parseInt($space_between_slides_mobile),
        slidesPerGroup: parseInt($slidesPerGroupMobile),
        slidesPerGroupSkip: parseInt($slidesPerGroupSkipMobile)
      }
    }
  });
  wrapObj.addClass('wpmozo-slider-initialized');
  if ('true' === pause_on_hover && 'true' === settings?.autoplay) {
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('#' + $orderId + ' .swiper-container').on('mouseleave', function (e) {
      if (typeof swipperSlider?.autoplay?.stop === "function") {
        swipperSlider.autoplay.stop();
      }
    });
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('#' + $orderId + ' .swiper-container').on('mouseenter', function (e) {
      if (typeof swipperSlider?.autoplay?.start === "function") {
        swipperSlider.autoplay.start();
      }
    });
  }
  if ('true' !== settings?.enable_loop) {
    swipperSlider.on('reachEnd', function () {
      swipperSlider.autoplay = false;
    });
  }

  // Add the swipers object to global vars.
  wpmozoTestimonialSwipers[clientId] = swipperSlider;
}
})();

/******/ })()
;
//# sourceMappingURL=script.js.map