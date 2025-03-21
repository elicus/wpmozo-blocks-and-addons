/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/before-after-slider/attributes.js":
/*!******************************************************!*\
  !*** ./src/blocks/before-after-slider/attributes.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);

const attributes = {
  ID: {
    type: "string"
  },
  globalcolorHandle: {
    type: "string"
  },
  globalcolorOverlay: {
    type: "string"
  },
  sliderOrientation: {
    type: "string",
    default: "horizontal"
  },
  handleOffset: {
    type: "number"
  },
  moveHandleOnHover: {
    type: "boolean",
    default: false
  },
  moveHandleOnClick: {
    type: "boolean",
    default: false
  },
  overlayOnHover: {
    type: "boolean",
    default: false
  },
  beforeImage: {
    type: "string"
  },
  beforeHasLabel: {
    type: "boolean",
    default: false
  },
  beforeLabelOnHover: {
    type: "boolean",
    default: false
  },
  beforeLabel: {
    type: "string",
    default: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Before', 'wpmozo-addons-lite-for-gutenberg')
  },
  beforeLabelbackground: {
    type: "string"
  },
  beforeLabeltext: {
    type: "string"
  },
  beforeLabelFontSize: {
    type: "string"
  },
  beforeLabelFontAppearance: {
    type: "object",
    fontStyle: {
      type: "string"
    },
    fontWeight: {
      type: "string"
    },
    default: {
      fontStyle: "",
      fontWeight: ""
    }
  },
  beforeLabelLetterSpacing: {
    type: "string"
  },
  beforeLabelDecoration: {
    type: "string"
  },
  beforeLabelLetterCase: {
    type: "string"
  },
  beforeLabelLineHeight: {
    type: "string"
  },
  afterImage: {
    type: "string"
  },
  afterHasLabel: {
    type: "boolean",
    default: false
  },
  afterLabelOnHover: {
    type: "boolean",
    default: false
  },
  afterLabel: {
    type: "string",
    default: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('After', 'wpmozo-addons-lite-for-gutenberg')
  },
  afterLabelbackground: {
    type: "string"
  },
  afterLabeltext: {
    type: "string"
  },
  afterLabelFontSize: {
    type: "string"
  },
  afterLabelFontAppearance: {
    type: "object",
    fontStyle: {
      type: "string"
    },
    fontWeight: {
      type: "string"
    },
    default: {
      fontStyle: "",
      fontWeight: ""
    }
  },
  afterLabelLetterSpacing: {
    type: "string"
  },
  afterLabelDecoration: {
    type: "string"
  },
  afterLabelLetterCase: {
    type: "string"
  },
  afterLabelLineHeight: {
    type: "string"
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (attributes);

/***/ }),

/***/ "./src/blocks/before-after-slider/edit.js":
/*!************************************************!*\
  !*** ./src/blocks/before-after-slider/edit.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _inspector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inspector */ "./src/blocks/before-after-slider/inspector.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style */ "./src/blocks/before-after-slider/style.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__);






const WPMozoEditorObj = wpmozo_adfgu_editor_object;
const Edit = props => {
  const attributes = props.attributes,
    clientId = props.clientId,
    ID = window.wpmozo.getIdByClientid(clientId);
  attributes.ID = ID;
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.useBlockProps)({
    className: 'wpmozo-adfgu-before-after-main'
  });
  let init = false;
  let beforeImage = attributes.beforeImage ? attributes.beforeImage : WPMozoEditorObj.placeholderImg,
    afterImage = attributes.afterImage ? attributes.afterImage : WPMozoEditorObj.placeholderImg,
    beforeLabel = attributes.beforeHasLabel ? attributes.beforeLabel : '',
    afterLabel = attributes.afterHasLabel ? attributes.afterLabel : '';
  function wpmozo_before_init(main) {
    main.find('.twentytwenty-wrapper').removeClass('twentytwenty-wrapper');
    main.find('.twentytwenty-horizontal').removeClass('twentytwenty-horizontal');
    main.find('.wpmozo-adfgu-before-after-image-wrapper').unwrap();
    main.find('.wpmozo-adfgu-before-after-image-wrapper').unbind();
    main.find('.wpmozo-adfgu-before-after-image-wrapper').removeClass('twentytwenty-container');
    let beforeSrc = !window.wpmozo.wpmozo_is_empty(beforeImage) ? beforeImage : main.find('.wpmozo-adfgu-before-after-image-wrapper .twentytwenty-before').attr('src');
    main.find('.wpmozo-adfgu-before-after-image-wrapper .twentytwenty-before').remove();
    let afterSrc = !window.wpmozo.wpmozo_is_empty(afterImage) ? afterImage : main.find('.wpmozo-adfgu-before-after-image-wrapper .twentytwenty-after').attr('src');
    main.find('.wpmozo-adfgu-before-after-image-wrapper .twentytwenty-after').remove();
    main.find('.wpmozo-adfgu-before-after-image-wrapper').append('<img src="' + beforeSrc + '">');
    main.find('.wpmozo-adfgu-before-after-image-wrapper').append('<img src="' + afterSrc + '">');
    main.find('.wpmozo-adfgu-before-after-image-wrapper .twentytwenty-before').removeClass('twentytwenty-before');
    main.find('.wpmozo-adfgu-before-after-image-wrapper .twentytwenty-after').removeClass('twentytwenty-after');
    main.find('.wpmozo-adfgu-before-after-image-wrapper .twentytwenty-overlay').remove();
    main.find('.wpmozo-adfgu-before-after-image-wrapper .twentytwenty-handle').remove();
  }
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
    let editorIfram = jQuery('body').find('[name="editor-canvas"]').contents(),
      mainFromIfram = editorIfram.find('body').find('#block-' + clientId),
      mainFromBody = jQuery('body').find('#block-' + clientId),
      main = mainFromIfram.length > 0 ? mainFromIfram : mainFromBody,
      imgWrap = main.find('.wpmozo-adfgu-before-after-image-wrapper');
    if (main.find('.twentytwenty-wrapper').length < 1) {
      init = true;
      if (main.find('.twentytwenty-wrapper').length > 0) {
        wpmozo_before_init(main);
      }
      if (main.find('.wpmozo-adfgu-before-after-image-wrapper').length > 0) {
        jQuery('.wpmozo-adfgu-before-after-image-wrapper').imagesLoaded(function () {
          main.find('.wpmozo-adfgu-before-after-image-wrapper').twentytwenty({
            default_offset_pct: attributes.handleOffset,
            orientation: attributes.sliderOrientation,
            before_label: beforeLabel,
            after_label: afterLabel,
            move_slider_on_hover: attributes.moveHandleOnHover,
            move_with_handle_only: true,
            click_to_move: attributes.moveHandleOnClick
          });
        });
      }
    }
  });
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
    let editorIfram = jQuery('body').find('[name="editor-canvas"]').contents(),
      mainFromIfram = editorIfram.find('body').find('#block-' + clientId),
      mainFromBody = jQuery('body').find('#block-' + clientId),
      main = mainFromIfram.length > 0 ? mainFromIfram : mainFromBody,
      imgWrap = main.find('.wpmozo-adfgu-before-after-image-wrapper');
    if (!init) {
      if (main.find('.twentytwenty-wrapper').length > 0) {
        wpmozo_before_init(main);
      }
      if (main.find('.wpmozo-adfgu-before-after-image-wrapper').length > 0) {
        jQuery('.wpmozo-adfgu-before-after-image-wrapper').imagesLoaded(function () {
          main.find('.wpmozo-adfgu-before-after-image-wrapper').twentytwenty({
            default_offset_pct: attributes.handleOffset,
            orientation: attributes.sliderOrientation,
            before_label: beforeLabel,
            after_label: afterLabel,
            move_slider_on_hover: attributes.moveHandleOnHover,
            move_with_handle_only: true,
            click_to_move: attributes.moveHandleOnClick
          });
        });
      }
    }
  }, [attributes.handleOffset, attributes.sliderOrientation, attributes.beforeHasLabel, attributes.beforeLabel, attributes.afterHasLabel, attributes.afterLabel, attributes.moveHandleOnHover, attributes.moveHandleOnClick, attributes.overlayOnHover, attributes.beforeImage, attributes.afterImage]);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_inspector__WEBPACK_IMPORTED_MODULE_1__["default"], {
    ...props
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...blockProps
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_style__WEBPACK_IMPORTED_MODULE_2__["default"], {
    attributes: attributes,
    ID: ID,
    clientId: clientId
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wpmozo-adfgu-before-after-image-wrapper"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: beforeImage
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: afterImage
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Edit);

/***/ }),

/***/ "./src/blocks/before-after-slider/icon.js":
/*!************************************************!*\
  !*** ./src/blocks/before-after-slider/icon.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const Icon = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  version: "1.1",
  width: "1024",
  height: "1024",
  viewBox: "0 0 1024 1024"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
  id: "icomoon-ignore"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  fill: "#000",
  d: "M458.667 906.667h-192c-117.333 0-213.333-96-213.333-213.333v-362.667c0-117.333 96-213.333 213.333-213.333h192zM458.667 74.667v0h-192c-140.8 0-256 115.2-256 256v362.667c0 140.8 115.2 256 256 256h192z"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  fill: "#000",
  d: "M757.333 74.667h-192v42.667h192v-42.667zM721.067 906.667h-149.333v42.667h149.333v-42.667zM930.133 819.2c-27.733 38.4-68.267 66.133-115.2 78.933l10.667 40.533c42.667-12.8 83.2-36.267 113.067-68.267v0c0 0 0 0 0 0s0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0v0c0 0 0 0 0 0s0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0c4.267-6.4 10.667-12.8 14.933-19.2l-23.467-32zM1013.333 578.133h-42.667v115.2c0 14.933-2.133 29.867-4.267 44.8l42.667 8.533c0 0 0 0 0 0s0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0-2.133c0 0 0 0 0 0s0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0v-166.4h4.267zM1011.2 300.8l-42.667 4.267c0 8.533 2.133 17.067 2.133 25.6v140.8h42.667v-140.8c0 0 0 0 0 0s0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0v0c0 0 0 0 0 0s0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0v0c0 0 0 0 0 0s0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0v0c0 0 0 0 0-2.133v0c0-17.067-2.133-23.467-2.133-27.733v0zM849.067 91.733l-14.933 40.533c44.8 17.067 83.2 49.067 106.667 89.6l36.267-21.333c-6.4-12.8-14.933-23.467-25.6-34.133v0c0 0 0 0 0 0s0 0 0 0 0 0 0 0v0c0 0 0 0 0 0s0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0v0c0 0 0 0 0 0s0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0v0c0 0 0 0 0 0s0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0v0c0 0 0 0 0 0s0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0v0c0 0 0 0 0 0v0c0 0 0 0 0 0v0c0 0 0 0 0 0v0c0 0-2.133-2.133-2.133-2.133v0c-12.8-12.8-27.733-23.467-42.667-32v0c0 0 0 0 0 0v0c0 0 0 0 0 0v0c0 0 0 0 0 0s0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0v0c0 0 0 0 0 0s0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0v0c0 0 0 0 0 0s0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0v0c0 0 0 0 0 0s0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0v0c0 0 0 0 0 0s0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0c-42.667-34.133-49.067-38.4-57.6-40.533v0z"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  fill: "#000",
  d: "M512 1013.333v0c-12.8 0-21.333-8.533-21.333-21.333v-960c0-12.8 8.533-21.333 21.333-21.333v0c12.8 0 21.333 8.533 21.333 21.333v960c0 12.8-8.533 21.333-21.333 21.333z"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  fill: "#000",
  d: "M672 633.6v0c-8.533-8.533-8.533-21.333 0-29.867l81.067-81.067c4.267-4.267 4.267-12.8 0-19.2l-81.067-81.067c-8.533-8.533-8.533-21.333 0-29.867v0c8.533-8.533 21.333-8.533 29.867 0l81.067 81.067c21.333 21.333 21.333 57.6 0 78.933l-81.067 81.067c-8.533 8.533-21.333 8.533-29.867 0z"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  fill: "#000",
  d: "M322.133 633.6l-81.067-81.067c-21.333-21.333-21.333-57.6 0-78.933l81.067-81.067c8.533-8.533 21.333-8.533 29.867 0v0c8.533 8.533 8.533 21.333 0 29.867l-81.067 81.067c-4.267 4.267-4.267 12.8 0 17.067l81.067 81.067c8.533 8.533 8.533 21.333 0 29.867v0c-8.533 8.533-21.333 8.533-29.867 2.133z"
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Icon);

/***/ }),

/***/ "./src/blocks/before-after-slider/index.js":
/*!*************************************************!*\
  !*** ./src/blocks/before-after-slider/index.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./attributes */ "./src/blocks/before-after-slider/attributes.js");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./src/blocks/before-after-slider/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ "./src/blocks/before-after-slider/save.js");
/* harmony import */ var _icon_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icon.js */ "./src/blocks/before-after-slider/icon.js");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__);






(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__.registerBlockType)('wpmozo/before-after-slider', {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Before After Slider', 'wpmozo-addons-lite-for-gutenberg'),
  icon: _icon_js__WEBPACK_IMPORTED_MODULE_3__["default"],
  apiVersion: 3,
  category: 'wpmozo',
  keywords: ['wpmozo', 'before-after-slider', 'before-after'],
  attributes: _attributes__WEBPACK_IMPORTED_MODULE_0__["default"],
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_2__["default"]
});

/***/ }),

/***/ "./src/blocks/before-after-slider/inspector.js":
/*!*****************************************************!*\
  !*** ./src/blocks/before-after-slider/inspector.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/index */ "./src/components/index.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);





const Inspector = props => {
  const beforeTitle = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Before', 'wpmozo-addons-lite-for-gutenberg'),
    afterTitle = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('After', 'wpmozo-addons-lite-for-gutenberg'),
    attributes = props.attributes,
    setAttributes = props.setAttributes,
    globalColorTypes = [{
      key: 'Handle',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Handle Color', 'wpmozo-addons-lite-for-gutenberg')
    }, ...(attributes.overlayOnHover ? [{
      key: 'Overlay',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Overlay Color', 'wpmozo-addons-lite-for-gutenberg')
    }] : [])];
  props = Object.assign({}, props, {
    preAttributes: {}
  });
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, {
    key: "controls"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('General', 'wpmozo-addons-lite-for-gutenberg'),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Slider Orientation', 'wpmozo-addons-lite-for-gutenberg'),
    value: attributes.sliderOrientation,
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Horizontal', 'wpmozo-addons-lite-for-gutenberg'),
      value: 'horizontal'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Vertical', 'wpmozo-addons-lite-for-gutenberg'),
      value: 'vertical'
    }],
    onChange: newValue => setAttributes({
      sliderOrientation: newValue
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Handle Offset', 'wpmozo-addons-lite-for-gutenberg'),
    value: attributes.handleOffset,
    onChange: newValue => setAttributes({
      handleOffset: newValue
    }),
    min: 0,
    step: 0.1,
    max: 1,
    allowReset: true,
    initialPosition: 0.5,
    resetFallbackValue: 0.5
  }), !attributes.moveHandleOnClick && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Move Handle on Hover', 'wpmozo-addons-lite-for-gutenberg'),
    checked: attributes.moveHandleOnHover,
    onChange: newValue => setAttributes({
      moveHandleOnHover: newValue
    })
  })), !attributes.moveHandleOnHover && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Move Handle on Click', 'wpmozo-addons-lite-for-gutenberg'),
    checked: attributes.moveHandleOnClick,
    onChange: newValue => setAttributes({
      moveHandleOnClick: newValue
    })
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: beforeTitle,
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoMediaUploader, {
    attrKye: "beforeImage",
    props: props
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Show Label', 'wpmozo-addons-lite-for-gutenberg'),
    checked: attributes.beforeHasLabel,
    onChange: newValue => setAttributes({
      beforeHasLabel: newValue
    })
  }), attributes.beforeHasLabel && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Show Label Only on Hover', 'wpmozo-addons-lite-for-gutenberg'),
    checked: attributes.beforeLabelOnHover,
    onChange: newValue => setAttributes({
      beforeLabelOnHover: newValue
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Enter Label', 'wpmozo-addons-lite-for-gutenberg'),
    value: attributes.beforeLabel,
    onChange: newValue => setAttributes({
      beforeLabel: newValue
    })
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: afterTitle,
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoMediaUploader, {
    attrKye: "afterImage",
    props: props
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Show Label', 'wpmozo-addons-lite-for-gutenberg'),
    checked: attributes.afterHasLabel,
    onChange: newValue => setAttributes({
      afterHasLabel: newValue
    })
  }), attributes.afterHasLabel && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Show Label Only on Hover', 'wpmozo-addons-lite-for-gutenberg'),
    checked: attributes.afterLabelOnHover,
    onChange: newValue => setAttributes({
      afterLabelOnHover: newValue
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Enter Label', 'wpmozo-addons-lite-for-gutenberg'),
    value: attributes.afterLabel,
    onChange: newValue => setAttributes({
      afterLabel: newValue
    })
  })))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, {
    key: "styles",
    group: "styles"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('General Style'),
    className: "wpmozo-typography-panel",
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Overlay on Hover', 'wpmozo-addons-lite-for-gutenberg'),
    checked: attributes.overlayOnHover,
    onChange: newValue => setAttributes({
      overlayOnHover: newValue
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoColorPicker, {
    ColorKey: "globalcolor",
    props: props,
    ColorTypes: globalColorTypes
  })), attributes.beforeHasLabel && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Before Label Style'),
    className: "wpmozo-typography-panel",
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoColorPicker, {
    ColorKey: "beforeLabel",
    props: props,
    ColorTypes: [{
      key: 'text',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Label Color', 'wpmozo-addons-lite-for-gutenberg')
    }, {
      key: 'background',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Label Background', 'wpmozo-addons-lite-for-gutenberg')
    }]
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoTypography, {
    TypographyKey: "beforeLabel",
    props: props
  }))), attributes.afterHasLabel && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('After Label Style'),
    className: "wpmozo-typography-panel",
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoColorPicker, {
    ColorKey: "afterLabel",
    props: props,
    ColorTypes: [{
      key: 'text',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Label Color', 'wpmozo-addons-lite-for-gutenberg')
    }, {
      key: 'background',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Label Background', 'wpmozo-addons-lite-for-gutenberg')
    }]
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoTypography, {
    TypographyKey: "afterLabel",
    props: props
  })))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Inspector);

/***/ }),

/***/ "./src/blocks/before-after-slider/save.js":
/*!************************************************!*\
  !*** ./src/blocks/before-after-slider/save.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const {
  useBlockProps
} = window.wp.blockEditor;
const WPMozoEditorObj = wpmozo_adfgu_editor_object;
const Save = ({
  attributes
}) => {
  const elId = `block-${attributes.ID}`;
  let beforeImage = attributes.beforeImage ? attributes.beforeImage : WPMozoEditorObj.placeholderImg,
    afterImage = attributes.afterImage ? attributes.afterImage : WPMozoEditorObj.placeholderImg,
    beforeLabel = attributes.beforeHasLabel ? attributes.beforeLabel : '',
    afterLabel = attributes.afterHasLabel ? attributes.afterLabel : '',
    no_overlay = attributes.overlayOnHover ? false : true,
    handleOffset = attributes.handleOffset,
    sliderOrientation = attributes.sliderOrientation,
    moveHandleOnHover = attributes.moveHandleOnHover,
    moveHandleOnClick = attributes.moveHandleOnClick;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...useBlockProps.save()
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wpmozo-adfgu-before-after-image-wrapper",
    id: elId,
    "data-before-label": beforeLabel,
    "data-after-label": afterLabel,
    "data-handle-offset": handleOffset,
    "data-slider-orientation": sliderOrientation,
    "data-move-onhover": moveHandleOnHover,
    "data-move-onclick": moveHandleOnClick,
    "data-no-overlay": no_overlay
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: beforeImage
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: afterImage
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Save);

/***/ }),

/***/ "./src/blocks/before-after-slider/style.js":
/*!*************************************************!*\
  !*** ./src/blocks/before-after-slider/style.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const Style = ({
  attributes,
  ID,
  clientId
}) => {
  const parent = '#block-' + clientId,
    toConvertStyles = ['beforeLabel', 'afterLabel'],
    convertedStyle = window.wpmozo.convetInlineStyleStr(toConvertStyles, attributes),
    no_overlay = attributes.overlayOnHover ? false : true;
  let css = '',
    beforeLabelStyle = convertedStyle['beforeLabel'],
    afterLabelStyle = convertedStyle['afterLabel'],
    handleStyle = {
      'background-color': {
        value: attributes.globalcolorHandle,
        suffix: '!important'
      }
    };
  if (!window.wpmozo.wpmozo_is_empty(attributes.globalcolorHandle) && 'horizontal' === attributes.sliderOrientation) {
    handleStyle['-webkit-box-shadow'] = `0 3px 0 ${attributes.globalcolorHandle}, 0px 0px 12px rgba(51, 51, 51, 0.5)`;
    handleStyle['-moz-box-shadow'] = `0 3px 0 ${attributes.globalcolorHandle}, 0px 0px 12px rgba(51, 51, 51, 0.5)`;
    handleStyle['box-shadow'] = `0 3px 0 ${attributes.globalcolorHandle}, 0px 0px 12px rgba(51, 51, 51, 0.5)`;
  }
  let allInline = [{
    selector: '.twentytwenty-handle:before, .twentytwenty-handle:after',
    style: handleStyle
  }, {
    selector: '.twentytwenty-handle',
    style: {
      'border-color': attributes.globalcolorHandle
    }
  }, {
    selector: '.twentytwenty-left-arrow',
    style: {
      'border-right-color': attributes.globalcolorHandle
    }
  }, {
    selector: '.twentytwenty-right-arrow',
    style: {
      'border-left-color': attributes.globalcolorHandle
    }
  }, {
    selector: '.twentytwenty-overlay:hover',
    style: {
      'background-color': attributes.globalcolorOverlay
    }
  }, {
    selector: '.twentytwenty-before-label:before',
    additional: beforeLabelStyle
  }, {
    selector: '.twentytwenty-after-label:before',
    additional: afterLabelStyle
  }];
  if ('horizontal' === attributes.sliderOrientation) {
    allInline.push({
      selector: '.twentytwenty-left-arrow',
      style: {
        'border-right-color': attributes.globalcolorHandle
      }
    });
    allInline.push({
      selector: '.twentytwenty-right-arrow',
      style: {
        'border-left-color': attributes.globalcolorHandle
      }
    });
  } else {
    allInline.push({
      selector: '.twentytwenty-down-arrow',
      style: {
        'border-top-color': attributes.globalcolorHandle
      }
    });
    allInline.push({
      selector: '.twentytwenty-up-arrow',
      style: {
        'border-bottom-color': attributes.globalcolorHandle
      }
    });
  }
  let generateStyle = window.wpmozo.wpmozo_generate_style(allInline);
  if (no_overlay) {
    generateStyle += `
            .twentytwenty-overlay:hover{
                background: unset;
            }
        `;
  }
  if (!attributes.beforeLabelOnHover) {
    generateStyle += `
            .twentytwenty-before-label{
                opacity: 1;
            }
        `;
  }
  if (!attributes.afterLabelOnHover) {
    generateStyle += `
            .twentytwenty-after-label{
                opacity: 1;
            }
        `;
  }
  if (!window.wpmozo.wpmozo_is_empty(generateStyle)) {
    css += `
            ${parent} {
                ${generateStyle}
            }
        `;
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, !window.wpmozo.wpmozo_is_empty(css) && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("style", {
    className: "wpmozo-dynamic-style",
    "data-id": ID,
    "data-client-id": clientId
  }, css));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Style);

/***/ }),

/***/ "./src/blocks/content-toggle/attributes.js":
/*!*************************************************!*\
  !*** ./src/blocks/content-toggle/attributes.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);

const attributes = {
  ID: {
    type: "string"
  },
  toggleSwitchType: {
    type: "string",
    default: 'rounded'
  },
  toggleSwitchAlignment: {
    type: "string"
  },
  toggleSwitchColor: {
    type: "string"
  },
  toggleSwitchOnState: {
    type: "string"
  },
  toggleSwitchBackground: {
    type: "string"
  },
  toggleSwitchOnStateBackground: {
    type: "string"
  },
  toggleSwitchHoverColor: {
    type: "string"
  },
  toggleSwitchHoverOnState: {
    type: "string"
  },
  toggleSwitchHoverBackground: {
    type: "string"
  },
  toggleSwitchHoverOnStateBackground: {
    type: "string"
  },
  toggleSwitchDimensionspadding: {
    type: "object"
  },
  toggleSwitchDimensionsmargin: {
    type: "object"
  },
  toggleOneTitle: {
    type: "string",
    default: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Title One', 'wpmozo-addons-lite-for-gutenberg')
  },
  titleOneColor: {
    type: "string"
  },
  titleOneIconSize: {
    type: "number"
  },
  titleOneIconSpacing: {
    type: "number"
  },
  titleOneIconColor: {
    type: "string"
  },
  titleOneFontSize: {
    type: "string"
  },
  titleOneFontAppearance: {
    type: "object",
    fontStyle: {
      type: "string"
    },
    fontWeight: {
      type: "string"
    },
    default: {
      fontStyle: "",
      fontWeight: ""
    }
  },
  titleOneLetterSpacing: {
    type: "string"
  },
  titleOneDecoration: {
    type: "string"
  },
  titleOneLetterCase: {
    type: "string"
  },
  titleOneLineHeight: {
    type: "string"
  },
  toggleOneIcon: {
    type: "string"
  },
  toggleOneIconPostion: {
    type: "string",
    default: "before"
  },
  toggleTwoTitle: {
    type: "string",
    default: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Title Two', 'wpmozo-addons-lite-for-gutenberg')
  },
  toggleTwoIcon: {
    type: "string"
  },
  toggleTwoIconPostion: {
    type: "string",
    default: "before"
  },
  titleTwoColor: {
    type: "string"
  },
  titleTwoIconSize: {
    type: "number"
  },
  titleTwoIconSpacing: {
    type: "number"
  },
  titleTwoIconColor: {
    type: "string"
  },
  titleTwoFontSize: {
    type: "string"
  },
  titleTwoFontAppearance: {
    type: "object",
    fontStyle: {
      type: "string"
    },
    fontWeight: {
      type: "string"
    },
    default: {
      fontStyle: "",
      fontWeight: ""
    }
  },
  titleTwoLetterSpacing: {
    type: "string"
  },
  titleTwoDecoration: {
    type: "string"
  },
  titleTwoLetterCase: {
    type: "string"
  },
  titleTwoLineHeight: {
    type: "string"
  },
  toggleTwoIcon: {
    type: "string"
  },
  toggleTwoIconPostion: {
    type: "string",
    default: "before"
  },
  contentOneColor: {
    type: "string"
  },
  contentOneBackground: {
    type: "string"
  },
  contentOneFontSize: {
    type: "string"
  },
  contentOneFontAppearance: {
    type: "object",
    fontStyle: {
      type: "string"
    },
    fontWeight: {
      type: "string"
    },
    default: {
      fontStyle: "",
      fontWeight: ""
    }
  },
  contentOneLetterSpacing: {
    type: "string"
  },
  contentOneDecoration: {
    type: "string"
  },
  contentOneLetterCase: {
    type: "string"
  },
  contentOneLineHeight: {
    type: "string"
  },
  contentOneDimensionspadding: {
    type: "object",
    default: {
      bottom: '20px',
      left: '20px',
      right: '20px',
      top: '20px'
    }
  },
  contentOneDimensionsmargin: {
    type: "object"
  },
  contentOneAlignment: {
    type: "string"
  },
  contentTwoColor: {
    type: "string"
  },
  contentTwoBackground: {
    type: "string"
  },
  contentTwoFontSize: {
    type: "string"
  },
  contentTwoFontAppearance: {
    type: "object",
    fontStyle: {
      type: "string"
    },
    fontWeight: {
      type: "string"
    },
    default: {
      fontStyle: "",
      fontWeight: ""
    }
  },
  contentTwoLetterSpacing: {
    type: "string"
  },
  contentTwoDecoration: {
    type: "string"
  },
  contentTwoLetterCase: {
    type: "string"
  },
  contentTwoLineHeight: {
    type: "string"
  },
  contentTwoDimensionspadding: {
    type: "object",
    default: {
      bottom: '20px',
      left: '20px',
      right: '20px',
      top: '20px'
    }
  },
  contentTwoDimensionsmargin: {
    type: "object"
  },
  contentTwoAlignment: {
    type: "string"
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (attributes);

/***/ }),

/***/ "./src/blocks/content-toggle/edit.js":
/*!*******************************************!*\
  !*** ./src/blocks/content-toggle/edit.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _inspector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inspector */ "./src/blocks/content-toggle/inspector.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style */ "./src/blocks/content-toggle/style.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__);






const Edit = props => {
  const attributes = props.attributes,
    clientId = props.clientId,
    ID = window.wpmozo.getIdByClientid(clientId),
    toggleSwitchTypeClass = ' wpmozo_' + attributes.toggleSwitchType,
    titleWrapClass = 'toggle' === attributes.toggleSwitchType ? ' wpmozo_switch_trigger' : '';
  attributes.ID = ID;
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.useBlockProps)({
    className: 'wpmozo-adfgu-content-toggle-main'
  });
  const wraperTemplate = [['wpmozo/content-wraper', {
    className: 'wpmozo-adfgu-content-toggle-one wpmozo-adfgu-content-toggle-active',
    lock: {
      remove: true
    }
  }], ['wpmozo/content-wraper', {
    className: 'wpmozo-adfgu-content-toggle-two',
    lock: {
      remove: true
    }
  }]];
  jQuery('.wpmozo-adfgu-toggle-field').change(function (e) {
    let selector = jQuery(this).closest('.wpmozo-adfgu-content-toggle-main');
    wpmozo_toggle_switch(jQuery(this), selector);
  });
  jQuery('.wpmozo-adfgu-toggle-title-wrap > :header').click(function (e) {
    let wrap = jQuery(this).closest('.wpmozo-adfgu-toggle-title-wrap'),
      selector = jQuery(this).closest('.wpmozo-adfgu-content-toggle-main'),
      input = selector.find('.wpmozo-adfgu-toggle-field');
    if (wrap.hasClass('wpmozo-adfgu-toggle-title-one')) {
      input.prop('checked', false);
    } else {
      input.prop('checked', true);
    }
    wpmozo_toggle_switch(input, selector);
  });
  jQuery('.wpmozo_switch_trigger').click(function (e) {
    let selector = jQuery(this).closest('.wpmozo-adfgu-content-toggle-main'),
      input = selector.find('.wpmozo-adfgu-toggle-field');
    if (jQuery(this).hasClass('wpmozo-adfgu-toggle-title-one')) {
      input.prop('checked', false);
    } else {
      input.prop('checked', true);
    }
    wpmozo_toggle_switch(input, selector);
  });
  jQuery(document).ready(function ($) {
    jQuery('.wpmozo-adfgu-toggle-field').each(function (keym, el) {
      let selector = jQuery(this).closest('.wpmozo-adfgu-content-toggle-main');
      wpmozo_toggle_switch(jQuery(this), selector);
    });
  });
  function wpmozo_toggle_switch(input, main) {
    if (input.is(':checked')) {
      main.find('.wpmozo-adfgu-content-toggle-one').removeClass('wpmozo-adfgu-content-toggle-active');
      main.find('.wpmozo-adfgu-content-toggle-two').addClass('wpmozo-adfgu-content-toggle-active');
    } else {
      main.find('.wpmozo-adfgu-content-toggle-one').addClass('wpmozo-adfgu-content-toggle-active');
      main.find('.wpmozo-adfgu-content-toggle-two').removeClass('wpmozo-adfgu-content-toggle-active');
    }
  }
  const iconOne = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "icon-wrapper"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
    className: `${attributes.toggleOneIcon}`
  }));
  const iconTwo = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "icon-wrapper"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
    className: `${attributes.toggleTwoIcon}`
  }));
  const titleOne = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `wpmozo-adfgu-toggle-title-wrap wpmozo-adfgu-toggle-title-one${titleWrapClass}`
  }, 'before' === attributes.toggleOneIconPostion && iconOne, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h5", null, attributes.toggleOneTitle), 'after' === attributes.toggleOneIconPostion && iconOne);
  const titleTwo = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `wpmozo-adfgu-toggle-title-wrap wpmozo-adfgu-toggle-title-two${titleWrapClass}`
  }, 'before' === attributes.toggleTwoIconPostion && iconTwo, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h5", null, attributes.toggleTwoTitle), 'after' === attributes.toggleTwoIconPostion && iconTwo);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_inspector__WEBPACK_IMPORTED_MODULE_1__["default"], {
    ...props
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_style__WEBPACK_IMPORTED_MODULE_2__["default"], {
    attributes: attributes,
    ID: ID,
    clientId: clientId
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...blockProps
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `wpmozo-adfgu-toggle-button-wrap${toggleSwitchTypeClass}`
  }, 'toggle' === attributes.toggleSwitchType && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    className: "wpmozo-adfgu-toggle-field",
    type: "checkbox",
    value: ""
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    className: `wpmozo-adfgu-toggle-switch`
  }, titleOne, titleTwo)), 'toggle' !== attributes.toggleSwitchType && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.Fragment, null, titleOne, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `wpmozo-adfgu-toggle-button${toggleSwitchTypeClass}`
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    className: "wpmozo-adfgu-toggle-button-inner"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    className: "wpmozo-adfgu-toggle-field",
    type: "checkbox",
    value: ""
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `wpmozo-adfgu-toggle-switch${toggleSwitchTypeClass}`
  }))), titleTwo)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wpmozo-adfgu-content-toggle-content-wrap"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.InnerBlocks, {
    template: wraperTemplate,
    allowedBlocks: false
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Edit);

/***/ }),

/***/ "./src/blocks/content-toggle/icon.js":
/*!*******************************************!*\
  !*** ./src/blocks/content-toggle/icon.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const Icon = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  version: "1.1",
  width: "1024",
  height: "1024",
  viewBox: "0 0 1024 1024"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
  id: "icomoon-ignore"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  fill: "#000",
  d: "M725.333 281.6c134.4 0 245.333 110.933 245.333 245.333s-110.933 245.333-245.333 245.333h-426.667c-134.4 0-245.333-110.933-245.333-245.333s110.933-245.333 245.333-245.333h426.667zM725.333 238.933h-426.667c-160 0-288 128-288 288v0c0 160 128 288 288 288h426.667c160 0 288-128 288-288v0c0-160-128-288-288-288v0z"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  fill: "#000",
  d: "M727.467 420.267c59.733 0 106.667 46.933 106.667 106.667s-46.933 106.667-106.667 106.667-106.667-46.933-106.667-106.667 46.933-106.667 106.667-106.667zM727.467 377.6c-83.2 0-149.333 66.133-149.333 149.333s66.133 149.333 149.333 149.333 149.333-66.133 149.333-149.333-68.267-149.333-149.333-149.333v0z"
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Icon);

/***/ }),

/***/ "./src/blocks/content-toggle/index.js":
/*!********************************************!*\
  !*** ./src/blocks/content-toggle/index.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./attributes */ "./src/blocks/content-toggle/attributes.js");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./src/blocks/content-toggle/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ "./src/blocks/content-toggle/save.js");
/* harmony import */ var _icon_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icon.js */ "./src/blocks/content-toggle/icon.js");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__);






(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__.registerBlockType)('wpmozo/content-toggle', {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Content Toggle', 'wpmozo-addons-lite-for-gutenberg'),
  apiVersion: 2,
  icon: _icon_js__WEBPACK_IMPORTED_MODULE_3__["default"],
  category: 'wpmozo',
  keywords: ['wpmozo', 'content-toggle', 'content'],
  attributes: _attributes__WEBPACK_IMPORTED_MODULE_0__["default"],
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_2__["default"],
  example: {}
});

/***/ }),

/***/ "./src/blocks/content-toggle/inspector.js":
/*!************************************************!*\
  !*** ./src/blocks/content-toggle/inspector.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/index */ "./src/components/index.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);





const Inspector = props => {
  const attributes = props.attributes,
    setAttributes = props.setAttributes;
  const positionValues = [{
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Before', 'wpmozo-addons-lite-for-gutenberg'),
    value: 'before'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('After', 'wpmozo-addons-lite-for-gutenberg'),
    value: 'after'
  }];
  const switchTypeValues = [{
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Rounded', 'wpmozo-addons-lite-for-gutenberg'),
    value: 'rounded'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Rectangle', 'wpmozo-addons-lite-for-gutenberg'),
    value: 'rectangle'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Toggle', 'wpmozo-addons-lite-for-gutenberg'),
    value: 'toggle'
  }];
  props = Object.assign({}, props, {
    preAttributes: {}
  });
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, {
    key: "controls"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Toggle One Content', 'wpmozo-addons-lite-for-gutenberg'),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Toggle Title', 'wpmozo-addons-lite-for-gutenberg'),
    value: attributes.toggleOneTitle,
    onChange: newValue => setAttributes({
      toggleOneTitle: newValue
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoIconpicker, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Icon', 'wpmozo-addons-lite-for-gutenberg'),
    iconPickerKey: "toggleOneIcon",
    props: props,
    value: attributes.toggleOneIcon,
    onChange: newValue => setAttributes({
      toggleOneIcon: newValue
    })
  }), !window.wpmozo.wpmozo_is_empty(attributes.toggleOneIcon) && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Icon Position', 'wpmozo-addons-lite-for-gutenberg'),
    value: attributes.toggleOneIconPostion,
    options: positionValues,
    onChange: newValue => setAttributes({
      toggleOneIconPostion: newValue
    })
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Toggle Two Content', 'wpmozo-addons-lite-for-gutenberg'),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Toggle Title', 'wpmozo-addons-lite-for-gutenberg'),
    value: attributes.toggleTwoTitle,
    onChange: newValue => setAttributes({
      toggleTwoTitle: newValue
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoIconpicker, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Icon', 'wpmozo-addons-lite-for-gutenberg'),
    iconPickerKey: "toggleTwoIcon",
    props: props,
    value: attributes.toggleTwoIcon,
    onChange: newValue => setAttributes({
      toggleTwoIcon: newValue
    })
  }), !window.wpmozo.wpmozo_is_empty(attributes.toggleTwoIcon) && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Icon Position', 'wpmozo-addons-lite-for-gutenberg'),
    value: attributes.toggleTwoIconPostion,
    options: positionValues,
    onChange: newValue => setAttributes({
      toggleTwoIconPostion: newValue
    })
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, {
    key: "styles",
    group: "styles"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Toggle Switch'),
    className: "wpmozo-typography-panel",
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Switch Type', 'wpmozo-addons-lite-for-gutenberg'),
    value: attributes.toggleSwitchType,
    options: switchTypeValues,
    onChange: newValue => setAttributes({
      toggleSwitchType: newValue
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoColorCombo, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Switch Color', 'wpmozo-addons-lite-for-gutenberg'),
    normal: {
      ColorKey: "toggleSwitch",
      props: props,
      ColorTypes: [{
        key: 'Color',
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Switch Color', 'wpmozo-addons-lite-for-gutenberg')
      }, {
        key: 'OnState',
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Switch Color (on state)', 'wpmozo-addons-lite-for-gutenberg')
      }, {
        key: 'Background',
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Switch Background', 'wpmozo-addons-lite-for-gutenberg')
      }, {
        key: 'OnStateBackground',
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Switch Background (on state)', 'wpmozo-addons-lite-for-gutenberg')
      }]
    },
    hover: {
      ColorKey: "toggleSwitch",
      props: props,
      ColorTypes: [{
        key: 'HoverColor',
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Switch Color', 'wpmozo-addons-lite-for-gutenberg')
      }, {
        key: 'HoverOnState',
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Switch Color (on state)', 'wpmozo-addons-lite-for-gutenberg')
      }, {
        key: 'HoverBackground',
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Switch Background', 'wpmozo-addons-lite-for-gutenberg')
      }, {
        key: 'HoverOnStateBackground',
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Switch Background (on state)', 'wpmozo-addons-lite-for-gutenberg')
      }]
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoAlignment, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Switch Alignment', 'wpmozo-addons-lite-for-gutenberg'),
    onChange: newValue => setAttributes({
      toggleSwitchAlignment: newValue
    }),
    value: attributes.toggleSwitchAlignment
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoDimensions, {
    DimensionKey: "toggleSwitchDimensions",
    DimensionsTypes: {
      padding: true,
      margin: true
    },
    props: props
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Title One'),
    className: "wpmozo-typography-panel",
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoColorPicker, {
    ColorKey: "titleOne",
    props: props,
    ColorTypes: [{
      key: 'Color',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Title Color', 'wpmozo-addons-lite-for-gutenberg')
    }]
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoTypography, {
    TypographyKey: "titleOne",
    props: props
  }), !window.wpmozo.wpmozo_is_empty(attributes.toggleOneIcon) && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Icon Size', 'wpmozo-addons-lite-for-gutenberg'),
    value: attributes.titleOneIconSize,
    onChange: newValue => setAttributes({
      titleOneIconSize: newValue
    }),
    min: 0,
    max: 200
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Icon Spacing', 'wpmozo-addons-lite-for-gutenberg'),
    value: attributes.titleOneIconSpacing,
    onChange: newValue => setAttributes({
      titleOneIconSpacing: newValue
    }),
    min: 0,
    max: 200
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoColorPicker, {
    ColorKey: "titleOneIcon",
    props: props,
    ColorTypes: [{
      key: 'Color',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Icon Color', 'wpmozo-addons-lite-for-gutenberg')
    }]
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Title Two'),
    className: "wpmozo-typography-panel",
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoColorPicker, {
    ColorKey: "titleTwo",
    props: props,
    ColorTypes: [{
      key: 'Color',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Title Color', 'wpmozo-addons-lite-for-gutenberg')
    }]
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoTypography, {
    TypographyKey: "titleTwo",
    props: props
  }), !window.wpmozo.wpmozo_is_empty(attributes.toggleTwoIcon) && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Icon Size', 'wpmozo-addons-lite-for-gutenberg'),
    value: attributes.titleTwoIconSize,
    onChange: newValue => setAttributes({
      titleTwoIconSize: newValue
    }),
    min: 0,
    max: 200
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Icon Spacing', 'wpmozo-addons-lite-for-gutenberg'),
    value: attributes.titleTwoIconSpacing,
    onChange: newValue => setAttributes({
      titleTwoIconSpacing: newValue
    }),
    min: 0,
    max: 200
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoColorPicker, {
    ColorKey: "titleTwoIcon",
    props: props,
    ColorTypes: [{
      key: 'Color',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Icon Color', 'wpmozo-addons-lite-for-gutenberg')
    }]
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Content One'),
    className: "wpmozo-typography-panel",
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoColorPicker, {
    ColorKey: "contentOne",
    props: props,
    ColorTypes: [{
      key: 'Color',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Content Color', 'wpmozo-addons-lite-for-gutenberg')
    }, {
      key: 'Background',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Content Background Color', 'wpmozo-addons-lite-for-gutenberg')
    }]
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoAlignment, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Content One Alignment', 'wpmozo-addons-lite-for-gutenberg'),
    onChange: newValue => setAttributes({
      contentOneAlignment: newValue
    }),
    value: attributes.contentOneAlignment
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoTypography, {
    TypographyKey: "contentOne",
    props: props
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoDimensions, {
    DimensionKey: "contentOneDimensions",
    DimensionsTypes: {
      padding: true,
      margin: true
    },
    onChange: (type, NewPadding) => {
      if ('padding' === type) {
        setAttributes({
          contentOneDimensionspadding: NewPadding
        });
      } else {
        setAttributes({
          contentOneDimensionsmargin: NewPadding
        });
      }
    },
    props: props
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Content Two'),
    className: "wpmozo-typography-panel",
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoColorPicker, {
    ColorKey: "contentTwo",
    props: props,
    ColorTypes: [{
      key: 'Color',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Content Color', 'wpmozo-addons-lite-for-gutenberg')
    }, {
      key: 'Background',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Content Background Color', 'wpmozo-addons-lite-for-gutenberg')
    }]
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoAlignment, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Content Two Alignment', 'wpmozo-addons-lite-for-gutenberg'),
    onChange: newValue => setAttributes({
      contentTwoAlignment: newValue
    }),
    value: attributes.contentTwoAlignment
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoTypography, {
    TypographyKey: "contentTwo",
    props: props
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoDimensions, {
    DimensionKey: "contentTwoDimensions",
    DimensionsTypes: {
      padding: true,
      margin: true
    },
    props: props
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Inspector);

/***/ }),

/***/ "./src/blocks/content-toggle/save.js":
/*!*******************************************!*\
  !*** ./src/blocks/content-toggle/save.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);


const Save = ({
  attributes
}) => {
  const ID = attributes.ID,
    toggleSwitchTypeClass = ' wpmozo_' + attributes.toggleSwitchType,
    titleWrapClass = 'toggle' === attributes.toggleSwitchType ? ' wpmozo_switch_trigger' : '';
  const iconOne = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "icon-wrapper"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
    className: `${attributes.toggleOneIcon}`
  }));
  const iconTwo = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "icon-wrapper"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
    className: `${attributes.toggleTwoIcon}`
  }));
  const titleOne = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `wpmozo-adfgu-toggle-title-wrap wpmozo-adfgu-toggle-title-one${titleWrapClass}`
  }, 'before' === attributes.toggleOneIconPostion && iconOne, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h5", null, attributes.toggleOneTitle), 'after' === attributes.toggleOneIconPostion && iconOne);
  const titleTwo = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `wpmozo-adfgu-toggle-title-wrap wpmozo-adfgu-toggle-title-two${titleWrapClass}`
  }, 'before' === attributes.toggleTwoIconPostion && iconTwo, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h5", null, attributes.toggleTwoTitle), 'after' === attributes.toggleTwoIconPostion && iconTwo);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ..._wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save({
      className: 'wpmozo-adfgu-content-toggle-main'
    }),
    id: `block-${ID}`
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `wpmozo-adfgu-toggle-button-wrap${toggleSwitchTypeClass}`
  }, 'toggle' === attributes.toggleSwitchType && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    className: "wpmozo-adfgu-toggle-field",
    type: "checkbox",
    value: ""
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    className: `wpmozo-adfgu-toggle-switch`
  }, titleOne, titleTwo)), 'toggle' !== attributes.toggleSwitchType && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, titleOne, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `wpmozo-adfgu-toggle-button${toggleSwitchTypeClass}`
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    className: "wpmozo-adfgu-toggle-button-inner"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    className: "wpmozo-adfgu-toggle-field",
    type: "checkbox",
    value: ""
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `wpmozo-adfgu-toggle-switch${toggleSwitchTypeClass}`
  }))), titleTwo)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wpmozo-adfgu-content-toggle-content-wrap"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InnerBlocks.Content, null)));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Save);

/***/ }),

/***/ "./src/blocks/content-toggle/style.js":
/*!********************************************!*\
  !*** ./src/blocks/content-toggle/style.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const Style = ({
  attributes,
  ID,
  clientId
}) => {
  const parent = '#block-' + clientId,
    toConvertStyles = ['titleOne', 'titleTwo', 'toggleSwitchDimensions', 'contentOne', 'contentOneDimensions', 'contentTwo', 'contentTwoDimensions'];
  let css = '',
    convertedStyle = window.wpmozo.convetInlineStyleStr(toConvertStyles, attributes),
    contentOneAddi = convertedStyle.contentOne + convertedStyle.contentOneDimensions,
    contentTwoAddi = convertedStyle.contentTwo + convertedStyle.contentTwoDimensions;
  let allInline = [{
      selector: '.wpmozo-adfgu-toggle-button-wrap .wpmozo-adfgu-toggle-switch:before',
      style: {
        'background-color': attributes.toggleSwitchColor
      }
    }, {
      selector: '.wpmozo-adfgu-toggle-button-wrap input:checked + .wpmozo-adfgu-toggle-switch:before',
      style: {
        'background-color': attributes.toggleSwitchOnState
      }
    }, {
      selector: '.wpmozo-adfgu-toggle-button-wrap .wpmozo-adfgu-toggle-switch',
      style: {
        'background-color': attributes.toggleSwitchBackground
      }
    }, {
      selector: '.wpmozo-adfgu-toggle-button-wrap input:checked + .wpmozo-adfgu-toggle-switch',
      style: {
        'background-color': attributes.toggleSwitchOnStateBackground
      }
    }, {
      selector: '.wpmozo-adfgu-toggle-button-wrap .wpmozo-adfgu-toggle-switch:hover::before',
      style: {
        'background-color': attributes.toggleSwitchHoverColor
      }
    }, {
      selector: '.wpmozo-adfgu-toggle-button-wrap input:checked + .wpmozo-adfgu-toggle-switch:hover::before',
      style: {
        'background-color': attributes.toggleSwitchHoverOnState
      }
    }, {
      selector: '.wpmozo-adfgu-toggle-button-wrap .wpmozo-adfgu-toggle-switch:hover',
      style: {
        'background-color': attributes.toggleSwitchHoverBackground
      }
    }, {
      selector: '.wpmozo-adfgu-toggle-button-wrap input:checked + .wpmozo-adfgu-toggle-switch:hover',
      style: {
        'background-color': attributes.toggleSwitchHoverOnStateBackground
      }
    }, {
      selector: '.wpmozo-adfgu-toggle-button-wrap',
      style: {
        'justify-content': attributes.toggleSwitchAlignment
      },
      additional: convertedStyle.toggleSwitchDimensions
    }, {
      selector: '.wpmozo-adfgu-toggle-title-one, .wpmozo-adfgu-toggle-title-one > h5',
      style: {
        'color': attributes.titleOneColor,
        'gap': {
          value: attributes.titleOneIconSpacing,
          suffix: 'px'
        }
      },
      additional: convertedStyle.titleOne
    }, {
      selector: '.wpmozo-adfgu-toggle-title-two, .wpmozo-adfgu-toggle-title-two > h5',
      style: {
        'color': attributes.titleTwoColor,
        'gap': {
          value: attributes.titleTwoIconSpacing,
          suffix: 'px'
        }
      },
      additional: convertedStyle.titleTwo
    }, {
      selector: '.wpmozo-adfgu-toggle-title-one .icon-wrapper i',
      style: {
        'font-size': {
          value: attributes.titleOneIconSize,
          suffix: 'px'
        },
        'color': attributes.titleOneIconColor
      }
    }, {
      selector: '.wpmozo-adfgu-toggle-title-two .icon-wrapper i',
      style: {
        'font-size': {
          value: attributes.titleTwoIconSize,
          suffix: 'px'
        },
        'color': attributes.titleTwoIconColor
      }
    }, {
      selector: '.wpmozo-adfgu-content-toggle-one',
      style: {
        'background-color': attributes.contentOneBackground,
        'text-align': attributes.contentOneAlignment,
        'color': attributes.contentOneColor
      },
      additional: contentOneAddi
    }, {
      selector: '.wpmozo-adfgu-content-toggle-two',
      style: {
        'background-color': attributes.contentTwoBackground,
        'text-align': attributes.contentTwoAlignment,
        'color': attributes.contentTwoColor
      },
      additional: contentTwoAddi
    }],
    generateStyle = window.wpmozo.wpmozo_generate_style(allInline);
  if (!window.wpmozo.wpmozo_is_empty(generateStyle)) {
    css += `
            ${parent} {
                ${generateStyle}
            }
        `;
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, !window.wpmozo.wpmozo_is_empty(css) && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("style", {
    className: "wpmozo-dynamic-style",
    "data-id": ID,
    "data-client-id": clientId
  }, css));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Style);

/***/ }),

/***/ "./src/blocks/content-wraper/attributes.js":
/*!*************************************************!*\
  !*** ./src/blocks/content-wraper/attributes.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const attributes = {};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (attributes);

/***/ }),

/***/ "./src/blocks/content-wraper/edit.js":
/*!*******************************************!*\
  !*** ./src/blocks/content-wraper/edit.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);




const Edit = props => {
  const {
    clientId
  } = props;
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)({
    className: 'wpmozo-content-wraper'
  });
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...blockProps
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InnerBlocks, {
    renderAppender: (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.select)("core/block-editor").getBlockOrder(clientId).length > 0 ? undefined : _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InnerBlocks.ButtonBlockAppender
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Edit);

/***/ }),

/***/ "./src/blocks/content-wraper/index.js":
/*!********************************************!*\
  !*** ./src/blocks/content-wraper/index.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./attributes */ "./src/blocks/content-wraper/attributes.js");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./src/blocks/content-wraper/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ "./src/blocks/content-wraper/save.js");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);





(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__.registerBlockType)('wpmozo/content-wraper', {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Content Wraper', 'wpmozo-addons-lite-for-gutenberg'),
  icon: '',
  apiVersion: 3,
  attributes: _attributes__WEBPACK_IMPORTED_MODULE_0__["default"],
  parent: ['wpmozo'],
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_2__["default"],
  supports: {
    lock: false,
    html: false
  }
});

/***/ }),

/***/ "./src/blocks/content-wraper/save.js":
/*!*******************************************!*\
  !*** ./src/blocks/content-wraper/save.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);


const Save = ({
  attributes
}) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ..._wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save()
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InnerBlocks.Content, null));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Save);

/***/ }),

/***/ "./src/blocks/fancy-heading/attributes.js":
/*!************************************************!*\
  !*** ./src/blocks/fancy-heading/attributes.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);

const attributes = {
  ID: {
    type: "string"
  },
  preHeading: {
    type: "string",
    default: 'Pre'
  },
  mainHeading: {
    type: "string",
    default: 'Main'
  },
  postHeading: {
    type: "string",
    default: 'Post'
  },
  displayInStack: {
    type: "boolean"
  },
  headingLavel: {
    type: "string",
    default: "h2"
  },
  headingAlignment: {
    type: "string",
    default: "center"
  },
  headingColor: {
    type: "string"
  },
  headingBackground: {
    type: "string"
  },
  preTextAlignment: {
    type: "string",
    default: "center"
  },
  preTextColor: {
    type: "string"
  },
  preTextBackground: {
    type: "string"
  },
  preTextHoverColor: {
    type: "string"
  },
  preTextHoverBackground: {
    type: "string"
  },
  preTextDimensionspadding: {
    type: "object"
  },
  preTextDimensionsmargin: {
    type: "object"
  },
  preTextFontSize: {
    type: "string"
  },
  preTextFontAppearance: {
    type: "object",
    fontStyle: {
      type: "string"
    },
    fontWeight: {
      type: "string"
    },
    default: {
      fontStyle: "",
      fontWeight: ""
    }
  },
  preTextLetterSpacing: {
    type: "string"
  },
  preTextDecoration: {
    type: "string"
  },
  preTextLetterCase: {
    type: "string"
  },
  preTextLineHeight: {
    type: "string"
  },
  mainTextColor: {
    type: "string"
  },
  mainTextAlignment: {
    type: "string",
    default: "center"
  },
  mainTextBackground: {
    type: "string"
  },
  mainTextHoverColor: {
    type: "string"
  },
  mainTextHoverBackground: {
    type: "string"
  },
  mainTextDimensionspadding: {
    type: "object"
  },
  mainTextDimensionsmargin: {
    type: "object"
  },
  mainTextFontSize: {
    type: "string"
  },
  mainTextFontAppearance: {
    type: "object",
    fontStyle: {
      type: "string"
    },
    fontWeight: {
      type: "string"
    },
    default: {
      fontStyle: "",
      fontWeight: ""
    }
  },
  mainTextLetterSpacing: {
    type: "string"
  },
  mainTextDecoration: {
    type: "string"
  },
  mainTextLetterCase: {
    type: "string"
  },
  mainTextLineHeight: {
    type: "string"
  },
  postTextColor: {
    type: "string"
  },
  postTextAlignment: {
    type: "string",
    default: "center"
  },
  postTextBackground: {
    type: "string"
  },
  postTextHoverColor: {
    type: "string"
  },
  postTextHoverBackground: {
    type: "string"
  },
  postTextDimensionspadding: {
    type: "object"
  },
  postTextDimensionsmargin: {
    type: "object"
  },
  postTextFontSize: {
    type: "string"
  },
  postTextFontAppearance: {
    type: "object",
    fontStyle: {
      type: "string"
    },
    fontWeight: {
      type: "string"
    },
    default: {
      fontStyle: "",
      fontWeight: ""
    }
  },
  postTextLetterSpacing: {
    type: "string"
  },
  postTextDecoration: {
    type: "string"
  },
  postTextLetterCase: {
    type: "string"
  },
  postTextLineHeight: {
    type: "string"
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (attributes);

/***/ }),

/***/ "./src/blocks/fancy-heading/edit.js":
/*!******************************************!*\
  !*** ./src/blocks/fancy-heading/edit.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _inspector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inspector */ "./src/blocks/fancy-heading/inspector.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style */ "./src/blocks/fancy-heading/style.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__);







const Edit = props => {
  const attributes = props.attributes,
    clientId = props.clientId,
    ID = window.wpmozo.getIdByClientid(clientId),
    isSelected = props.isSelected,
    setAttributes = props.setAttributes;
  attributes.ID = ID;
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.useBlockProps)();
  const [currentHeadingType, setcurrentHeadingType] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)('');
  const isActiveType = type => {
    return isSelected && type === currentHeadingType ? 'wpmozo-active-sub-block' : '';
  };
  const activeTypeText = () => {
    let type = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Pre', 'wpmozo-addons-lite-for-gutenberg');
    if ('t1' === currentHeadingType) {
      type = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Pre', 'wpmozo-addons-lite-for-gutenberg');
    } else if ('t2' === currentHeadingType) {
      type = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Main', 'wpmozo-addons-lite-for-gutenberg');
    } else if ('t3' === currentHeadingType) {
      type = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Post', 'wpmozo-addons-lite-for-gutenberg');
    }
    return type;
  };
  const allText = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.RichText, {
    className: `wpmozo-adfgu-pre-text ${isActiveType('t1')}`,
    allowedFormats: [],
    tagName: "span",
    value: attributes.preHeading,
    onChange: newValue => setAttributes({
      preHeading: newValue
    }),
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Pre', 'wpmozo-addons-lite-for-gutenberg'),
    onFocus: () => setcurrentHeadingType('t1')
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.RichText, {
    className: `wpmozo-adfgu-main-text ${isActiveType('t2')}`,
    allowedFormats: [],
    tagName: "span",
    value: attributes.mainHeading,
    onChange: newValue => setAttributes({
      mainHeading: newValue
    }),
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Main', 'wpmozo-addons-lite-for-gutenberg'),
    onFocus: () => setcurrentHeadingType('t2')
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.RichText, {
    className: `wpmozo-adfgu-post-text ${isActiveType('t3')}`,
    allowedFormats: [],
    tagName: "span",
    value: attributes.postHeading,
    onChange: newValue => setAttributes({
      postHeading: newValue
    }),
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Post', 'wpmozo-addons-lite-for-gutenberg'),
    onFocus: () => setcurrentHeadingType('t3')
  }));
  const heading = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.createElement)(attributes.headingLavel, {
    className: 'wpmozo-adfgu-fancy-heading-inner'
  }, allText);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.createElement)(_inspector__WEBPACK_IMPORTED_MODULE_0__["default"], {
    ...props
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.createElement)(_style__WEBPACK_IMPORTED_MODULE_1__["default"], {
    attributes: attributes,
    ID: ID,
    clientId: clientId
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.BlockControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ToolbarGroup, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.createElement)("p", null, activeTypeText()))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.createElement)("div", {
    ...blockProps
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.createElement)("div", {
    className: "wpmozo-adfgu-fancy-heading-wrap"
  }, heading)));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Edit);

/***/ }),

/***/ "./src/blocks/fancy-heading/icon.js":
/*!******************************************!*\
  !*** ./src/blocks/fancy-heading/icon.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const Icon = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  version: "1.1",
  width: "1024",
  height: "1024",
  viewBox: "0 0 1024 1024"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
  id: "icomoon-ignore"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  fill: "#000",
  d: "M418.133 102.4h12.8c8.533 0 12.8 4.267 12.8 12.8v797.867c0 8.533-4.267 12.8-12.8 12.8h-12.8c-8.533 0-12.8-4.267-12.8-12.8v-381.867c0-2.133-2.133-4.267-4.267-4.267h-349.867c-2.133 0-4.267 2.133-4.267 4.267v379.733c0 8.533-4.267 12.8-12.8 12.8h-10.667c-8.533 0-12.8-4.267-12.8-12.8v-797.867c0-8.533 4.267-12.8 12.8-12.8h12.8c8.533 0 12.8 4.267 12.8 12.8v377.6c0 2.133 2.133 4.267 4.267 4.267h349.867c2.133 0 4.267-2.133 4.267-4.267v-377.6c0-8.533 4.267-10.667 10.667-10.667z"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  fill: "#000",
  d: "M942.933 102.4h59.733c8.533 0 10.667 4.267 10.667 10.667v797.867c0 8.533-4.267 10.667-10.667 10.667h-59.733c-8.533 0-10.667-4.267-10.667-10.667v-358.4c0-2.133-2.133-4.267-4.267-4.267h-292.267c-2.133 0-4.267 2.133-4.267 4.267v358.4c0 8.533-4.267 10.667-12.8 10.667h-59.733c-8.533 0-12.8-4.267-12.8-10.667v-797.867c0-8.533 4.267-10.667 12.8-10.667h59.733c8.533 0 12.8 4.267 12.8 10.667v356.267c0 2.133 2.133 4.267 4.267 4.267h290.133c2.133 0 4.267-2.133 4.267-4.267v-356.267c0-8.533 4.267-10.667 12.8-10.667z"
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Icon);

/***/ }),

/***/ "./src/blocks/fancy-heading/index.js":
/*!*******************************************!*\
  !*** ./src/blocks/fancy-heading/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./attributes */ "./src/blocks/fancy-heading/attributes.js");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./src/blocks/fancy-heading/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ "./src/blocks/fancy-heading/save.js");
/* harmony import */ var _icon_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icon.js */ "./src/blocks/fancy-heading/icon.js");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__);






(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__.registerBlockType)('wpmozo/fancy-heading', {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Fancy Heading', 'wpmozo-addons-lite-for-gutenberg'),
  icon: _icon_js__WEBPACK_IMPORTED_MODULE_3__["default"],
  apiVersion: 2,
  category: 'wpmozo',
  keywords: ['wpmozo', 'fancy-heading', 'heading'],
  attributes: _attributes__WEBPACK_IMPORTED_MODULE_0__["default"],
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_2__["default"],
  example: {}
});

/***/ }),

/***/ "./src/blocks/fancy-heading/inspector.js":
/*!***********************************************!*\
  !*** ./src/blocks/fancy-heading/inspector.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/index */ "./src/components/index.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);





const Inspector = props => {
  const attributes = props.attributes,
    setAttributes = props.setAttributes;
  props = Object.assign({}, props, {
    preAttributes: {}
  });
  const headingLavels = [{
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('H1', 'wpmozo-addons-lite-for-gutenberg'),
    value: 'h1'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('H2', 'wpmozo-addons-lite-for-gutenberg'),
    value: 'h2'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('H3', 'wpmozo-addons-lite-for-gutenberg'),
    value: 'h3'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('H4', 'wpmozo-addons-lite-for-gutenberg'),
    value: 'h4'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('H5', 'wpmozo-addons-lite-for-gutenberg'),
    value: 'h5'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('H6', 'wpmozo-addons-lite-for-gutenberg'),
    value: 'h6'
  }];
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, {
    key: "controls"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Heading Content', 'wpmozo-addons-lite-for-gutenberg'),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Pre Heading', 'wpmozo-addons-lite-for-gutenberg'),
    value: attributes.preHeading,
    onChange: newValue => setAttributes({
      preHeading: newValue
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Main Heading', 'wpmozo-addons-lite-for-gutenberg'),
    value: attributes.mainHeading,
    onChange: newValue => setAttributes({
      mainHeading: newValue
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Post Heading', 'wpmozo-addons-lite-for-gutenberg'),
    value: attributes.postHeading,
    onChange: newValue => setAttributes({
      postHeading: newValue
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Display In Stack', 'wpmozo-addons-lite-for-gutenberg'),
    checked: attributes.displayInStack,
    onChange: newValue => setAttributes({
      displayInStack: newValue
    })
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, {
    key: "styles",
    group: "styles"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Global Text Settings', 'wpmozo-addons-lite-for-gutenberg'),
    className: "wpmozo-typography-panel",
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoColorPicker, {
    ColorKey: "heading",
    props: props,
    ColorTypes: [{
      key: 'Color',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Color', 'wpmozo-addons-lite-for-gutenberg')
    }, {
      key: 'Background',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Background', 'wpmozo-addons-lite-for-gutenberg')
    }]
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoAlignment, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Heading Alignment', 'wpmozo-addons-lite-for-gutenberg'),
    onChange: newValue => setAttributes({
      headingAlignment: newValue
    }),
    value: attributes.headingAlignment
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.BaseControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Heading Lavel', 'wpmozo-addons-lite-for-gutenberg')
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ButtonGroup, null, headingLavels.map((item, key) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
    isPressed: item.value === attributes.headingLavel ? true : false,
    onClick: newValue => setAttributes({
      headingLavel: item.value
    })
  }, item.label))))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Pre Text Settings', 'wpmozo-addons-lite-for-gutenberg'),
    className: "wpmozo-typography-panel",
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoColorCombo, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Pre Text Color', 'wpmozo-addons-lite-for-gutenberg'),
    normal: {
      ColorKey: "preText",
      props: props,
      ColorTypes: [{
        key: 'Color',
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Color', 'wpmozo-addons-lite-for-gutenberg')
      }, {
        key: 'Background',
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Background', 'wpmozo-addons-lite-for-gutenberg')
      }]
    },
    hover: {
      ColorKey: "preTextHover",
      props: props,
      ColorTypes: [{
        key: 'Color',
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Color', 'wpmozo-addons-lite-for-gutenberg')
      }, {
        key: 'Background',
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Background', 'wpmozo-addons-lite-for-gutenberg')
      }]
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoAlignment, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Pre Text Alignment', 'wpmozo-addons-lite-for-gutenberg'),
    onChange: newValue => setAttributes({
      preTextAlignment: newValue
    }),
    value: attributes.preTextAlignment
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoTypography, {
    TypographyKey: "preText",
    props: props
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoDimensions, {
    DimensionKey: "preTextDimensions",
    DimensionsTypes: {
      padding: true,
      margin: true
    },
    props: props
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Main Text Settings', 'wpmozo-addons-lite-for-gutenberg'),
    className: "wpmozo-typography-panel",
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoColorCombo, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Main Text Color', 'wpmozo-addons-lite-for-gutenberg'),
    normal: {
      ColorKey: "mainText",
      props: props,
      ColorTypes: [{
        key: 'Color',
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Color', 'wpmozo-addons-lite-for-gutenberg')
      }, {
        key: 'Background',
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Background', 'wpmozo-addons-lite-for-gutenberg')
      }]
    },
    hover: {
      ColorKey: "mainTextHover",
      props: props,
      ColorTypes: [{
        key: 'Color',
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Color', 'wpmozo-addons-lite-for-gutenberg')
      }, {
        key: 'Background',
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Background', 'wpmozo-addons-lite-for-gutenberg')
      }]
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoAlignment, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Main Text Alignment', 'wpmozo-addons-lite-for-gutenberg'),
    onChange: newValue => setAttributes({
      mainTextAlignment: newValue
    }),
    value: attributes.mainTextAlignment
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoTypography, {
    TypographyKey: "mainText",
    props: props
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoDimensions, {
    DimensionKey: "mainTextDimensions",
    DimensionsTypes: {
      padding: true,
      margin: true
    },
    props: props
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Post Text Settings', 'wpmozo-addons-lite-for-gutenberg'),
    className: "wpmozo-typography-panel",
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoColorCombo, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Post Text Color', 'wpmozo-addons-lite-for-gutenberg'),
    normal: {
      ColorKey: "postText",
      props: props,
      ColorTypes: [{
        key: 'Color',
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Color', 'wpmozo-addons-lite-for-gutenberg')
      }, {
        key: 'Background',
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Background', 'wpmozo-addons-lite-for-gutenberg')
      }]
    },
    hover: {
      ColorKey: "postTextHover",
      props: props,
      ColorTypes: [{
        key: 'Color',
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Color', 'wpmozo-addons-lite-for-gutenberg')
      }, {
        key: 'Background',
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Background', 'wpmozo-addons-lite-for-gutenberg')
      }]
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoAlignment, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Post Text Alignment', 'wpmozo-addons-lite-for-gutenberg'),
    onChange: newValue => setAttributes({
      postTextAlignment: newValue
    }),
    value: attributes.postTextAlignment
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoTypography, {
    TypographyKey: "postText",
    props: props
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoDimensions, {
    DimensionKey: "postTextDimensions",
    DimensionsTypes: {
      padding: true,
      margin: true
    },
    props: props
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Inspector);

/***/ }),

/***/ "./src/blocks/fancy-heading/save.js":
/*!******************************************!*\
  !*** ./src/blocks/fancy-heading/save.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);



const Save = ({
  attributes
}) => {
  const ID = attributes.ID;
  const allText = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)("span", {
    className: "wpmozo-adfgu-pre-text"
  }, attributes.preHeading), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)("span", {
    className: "wpmozo-adfgu-main-text"
  }, attributes.mainHeading), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)("span", {
    className: "wpmozo-adfgu-post-text"
  }, attributes.postHeading));
  const heading = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)(attributes.headingLavel, {
    className: 'wpmozo-adfgu-fancy-heading-inner'
  }, allText);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)("div", {
    ..._wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save({
      className: 'wpmozo-adfgu-fancy-heading-wrap'
    }),
    id: `block-${ID}`
  }, heading);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Save);

/***/ }),

/***/ "./src/blocks/fancy-heading/style.js":
/*!*******************************************!*\
  !*** ./src/blocks/fancy-heading/style.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const Style = ({
  attributes,
  ID,
  clientId
}) => {
  const parent = '#block-' + clientId,
    toConvertStyles = ['preText', 'preTextDimensions', 'mainText', 'mainTextDimensions', 'postText', 'postTextDimensions'];
  let css = '',
    convertedStyle = window.wpmozo.convetInlineStyleStr(toConvertStyles, attributes),
    flexDirection = attributes.displayInStack ? 'column' : 'initial',
    headingAlignment = 'left' === attributes.headingAlignment ? 'flex-start' : 'flex-end',
    preTextAlignment = 'left' === attributes.preTextAlignment ? 'flex-start' : 'flex-end',
    mainTextAlignment = 'left' === attributes.mainTextAlignment ? 'flex-start' : 'flex-end',
    postTextAlignment = 'left' === attributes.postTextAlignment ? 'flex-start' : 'flex-end',
    preTextAddi = convertedStyle.preText + convertedStyle.preTextDimensions,
    mainTextAddi = convertedStyle.mainText + convertedStyle.mainTextDimensions,
    postTextAddi = convertedStyle.postText + convertedStyle.postTextDimensions;
  if ('center' === attributes.headingAlignment) {
    headingAlignment = 'center';
  }
  if ('center' === attributes.preTextAlignment) {
    preTextAlignment = 'center';
  }
  if ('center' === attributes.mainTextAlignment) {
    mainTextAlignment = 'center';
  }
  if ('center' === attributes.postTextAlignment) {
    postTextAlignment = 'center';
  }
  let allInline = [{
      selector: '.wpmozo-adfgu-fancy-heading-inner',
      style: {
        'display': 'flex',
        'line-height': 1,
        'padding': 0,
        'margin': 0,
        'align-items': headingAlignment,
        'white-space': 'pre-wrap',
        'flex-wrap': 'wrap',
        'justify-content': headingAlignment,
        'flex-direction': flexDirection
      }
    }, {
      selector: '.wpmozo-adfgu-fancy-heading-inner span',
      style: {
        'display': 'inline-block',
        'color': attributes.headingColor,
        'background': attributes.headingBackground
      }
    }, {
      selector: 'span.wpmozo-adfgu-pre-text',
      style: {
        'color': attributes.preTextColor,
        'background': attributes.preTextBackground,
        'align-self': preTextAlignment
      },
      additional: preTextAddi
    }, {
      selector: 'span.wpmozo-adfgu-pre-text:hover',
      style: {
        'color': attributes.preTextHoverColor,
        'background': attributes.preTextHoverBackground
      }
    }, {
      selector: 'span.wpmozo-adfgu-main-text',
      style: {
        'color': attributes.mainTextColor,
        'background': attributes.mainTextBackground,
        'align-self': mainTextAlignment
      },
      additional: mainTextAddi
    }, {
      selector: 'span.wpmozo-adfgu-main-text:hover',
      style: {
        'color': attributes.mainTextHoverColor,
        'background': attributes.mainTextHoverBackground
      }
    }, {
      selector: 'span.wpmozo-adfgu-post-text',
      style: {
        'color': attributes.postTextColor,
        'background': attributes.postTextBackground,
        'align-self': postTextAlignment
      },
      additional: postTextAddi
    }, {
      selector: 'span.wpmozo-adfgu-post-text:hover',
      style: {
        'color': attributes.postTextHoverColor,
        'background': attributes.postTextHoverBackground
      }
    }],
    generateStyle = window.wpmozo.wpmozo_generate_style(allInline);
  if (!window.wpmozo.wpmozo_is_empty(generateStyle)) {
    css += `
	    	${parent} {
	    		${generateStyle}
	    	}
	    `;
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, !window.wpmozo.wpmozo_is_empty(css) && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("style", {
    className: "wpmozo-dynamic-style",
    "data-id": ID,
    "data-client-id": clientId
  }, css));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Style);

/***/ }),

/***/ "./src/blocks/fancy-text/attributes.js":
/*!*********************************************!*\
  !*** ./src/blocks/fancy-text/attributes.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);

const WPMozoEditorObj = wpmozo_adfgu_editor_object;
const attributes = {
  ID: {
    type: "string"
  },
  fancyText: {
    type: "string",
    default: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Here you can set text.', 'wpmozo-addons-lite-for-gutenberg')
  },
  textStyle: {
    type: "string",
    default: 'gradient'
  },
  fancyTextBackground: {
    type: "string",
    default: "linear-gradient(135deg,rgba(6,147,227,1) 0%,rgb(155,81,224) 100%)"
  },
  fancyTextBackgroundImg: {
    type: "string",
    default: WPMozoEditorObj.placeholderImg
  },
  textBgSize: {
    type: "string",
    default: "cover"
  },
  textBgPosition: {
    type: "string",
    default: "center"
  },
  textBgRepeat: {
    type: "string",
    default: "initial"
  },
  textBgOverlay: {
    type: "string",
    default: "none"
  },
  textBgOverlayColor: {
    type: "string"
  },
  textBgOverlayColorSolid: {
    type: "string"
  },
  textBgOverlayColorGradient: {
    type: "string"
  },
  textBgDimensionspadding: {
    type: "object"
  },
  textAlignment: {
    type: "string",
    default: "center"
  },
  textFontSize: {
    type: "string"
  },
  textFontAppearance: {
    type: "object",
    fontStyle: {
      type: "string"
    },
    fontWeight: {
      type: "string"
    },
    default: {
      fontStyle: "",
      fontWeight: ""
    }
  },
  textLetterSpacing: {
    type: "string"
  },
  textDecoration: {
    type: "string"
  },
  textLetterCase: {
    type: "string"
  },
  textLineHeight: {
    type: "string"
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (attributes);

/***/ }),

/***/ "./src/blocks/fancy-text/edit.js":
/*!***************************************!*\
  !*** ./src/blocks/fancy-text/edit.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _inspector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inspector */ "./src/blocks/fancy-text/inspector.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style */ "./src/blocks/fancy-text/style.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__);






const Edit = props => {
  const attributes = props.attributes,
    clientId = props.clientId,
    ID = window.wpmozo.getIdByClientid(clientId),
    setAttributes = props.setAttributes;
  attributes.ID = ID;
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.useBlockProps)({
    className: 'wpmozo-adfgu-fancy-text-wrap'
  });
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_inspector__WEBPACK_IMPORTED_MODULE_1__["default"], {
    ...props
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_style__WEBPACK_IMPORTED_MODULE_2__["default"], {
    attributes: attributes,
    ID: ID,
    clientId: clientId
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...blockProps
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.RichText, {
    className: `wpmozo-adfgu-fancy-text-inner ${attributes.textStyle}`,
    tagName: "div",
    value: attributes.fancyText,
    onChange: newValue => setAttributes({
      fancyText: newValue
    }),
    placeholder: attributes.fancyText
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Edit);

/***/ }),

/***/ "./src/blocks/fancy-text/icon.js":
/*!***************************************!*\
  !*** ./src/blocks/fancy-text/icon.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const Icon = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  version: "1.1",
  width: "1024",
  height: "1024",
  viewBox: "0 0 1024 1024"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
  id: "icomoon-ignore"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  fill: "#000",
  d: "M631.467 957.867l-8.533 42.667c-23.467 6.4-51.2 10.667-81.067 12.8v0c-21.333 0-55.467-4.267-102.4-8.533-23.467-2.133-53.333-4.267-81.067-4.267-4.267 0-8.533 0-12.8 0v0c-53.333 0-104.533 4.267-153.6 12.8h6.4l8.533-38.4c38.4-2.133 76.8-12.8 108.8-29.867h-2.133c19.2-14.933 32-34.133 42.667-55.467v0c27.733-76.8 53.333-170.667 74.667-266.667l2.133-14.933 89.6-392.533 4.267-17.067c-29.867 0-51.2-4.267-64-4.267-8.533 0-17.067 0-27.733 0-66.133 0-130.133 10.667-189.867 32l4.267-2.133c-49.067 14.933-89.6 44.8-119.467 85.333v0c-23.467 34.133-38.4 74.667-38.4 119.467v0c0 14.933 4.267 29.867 8.533 42.667v0c8.533 17.067 21.333 29.867 34.133 42.667v0c14.933 12.8 25.6 29.867 27.733 51.2v0c0 0 0 0 0 2.133 0 12.8-4.267 23.467-12.8 32v0c-8.533 8.533-19.2 12.8-32 12.8 0 0 0 0-2.133 0v0c0 0-2.133 0-2.133 0-21.333 0-40.533-12.8-49.067-29.867v0c-17.067-29.867-25.6-64-25.6-102.4 0-4.267 0-6.4 0-10.667v0c0-8.533-2.133-19.2-2.133-27.733 0-53.333 19.2-104.533 49.067-142.933v0c36.267-55.467 87.467-98.133 147.2-128h2.133c66.133-29.867 140.8-46.933 221.867-46.933 4.267 0 8.533 0 12.8 0v0c74.667 2.133 147.2 8.533 217.6 19.2l-8.533-2.133c42.667 6.4 93.867 10.667 147.2 12.8h2.133c4.267 0 6.4 0 10.667 0 19.2 0 38.4-6.4 53.333-17.067v0c10.667-8.533 17.067-23.467 17.067-38.4 0-2.133 0-4.267 0-4.267v0c0-8.533-2.133-14.933-4.267-21.333v0c0-6.4-2.133-12.8-4.267-17.067v0c0 0 0 0 0-2.133 0-12.8 4.267-23.467 12.8-32v0c8.533-6.4 19.2-12.8 29.867-12.8v0c0 0 2.133 0 2.133 0 12.8 0 25.6 6.4 32 17.067v0c8.533 10.667 12.8 25.6 12.8 40.533 0 0 0 2.133 0 2.133v0c-2.133 40.533-25.6 74.667-59.733 93.867v0c-49.067 25.6-106.667 38.4-168.533 38.4-10.667 0-19.2 0-29.867-2.133h2.133c-4.267 0-10.667 0-17.067 0-32 0-64-2.133-93.867-4.267h4.267c-4.267 17.067-21.333 76.8-46.933 179.2l-64 251.733-38.4 153.6-38.4 174.933c21.333 2.133 46.933 4.267 72.533 4.267 2.133 0 6.4 0 8.533 0v0c14.933 2.133 29.867 4.267 46.933 4.267 21.333 4.267 44.8 0 64-4.267v0 0z"
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Icon);

/***/ }),

/***/ "./src/blocks/fancy-text/index.js":
/*!****************************************!*\
  !*** ./src/blocks/fancy-text/index.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./attributes */ "./src/blocks/fancy-text/attributes.js");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./src/blocks/fancy-text/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ "./src/blocks/fancy-text/save.js");
/* harmony import */ var _icon_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icon.js */ "./src/blocks/fancy-text/icon.js");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__);






(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__.registerBlockType)('wpmozo/fancy-text', {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Fancy Text', 'wpmozo-addons-lite-for-gutenberg'),
  icon: _icon_js__WEBPACK_IMPORTED_MODULE_3__["default"],
  apiVersion: 3,
  category: 'wpmozo',
  keywords: ['wpmozo', 'fancy-text', 'text'],
  attributes: _attributes__WEBPACK_IMPORTED_MODULE_0__["default"],
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_2__["default"],
  example: {}
});

/***/ }),

/***/ "./src/blocks/fancy-text/inspector.js":
/*!********************************************!*\
  !*** ./src/blocks/fancy-text/inspector.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/index */ "./src/components/index.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./attributes */ "./src/blocks/fancy-text/attributes.js");





const WPMozoEditorObj = wpmozo_adfgu_editor_object;

const Inspector = props => {
  const attributes = props.attributes,
    setAttributes = props.setAttributes,
    clientId = attributes.clientId,
    bgAllSize = [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Cover', 'wpmozo-addons-lite-for-gutenberg'),
      value: 'cover'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Contain', 'wpmozo-addons-lite-for-gutenberg'),
      value: 'contain'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Auto', 'wpmozo-addons-lite-for-gutenberg'),
      value: 'auto'
    }],
    bgAllPositions = [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Top Left', 'wpmozo-addons-lite-for-gutenberg'),
      value: 'top left'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Top Center', 'wpmozo-addons-lite-for-gutenberg'),
      value: 'top center'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Top Right', 'wpmozo-addons-lite-for-gutenberg'),
      value: 'top right'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Center Left', 'wpmozo-addons-lite-for-gutenberg'),
      value: 'center left'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Center', 'wpmozo-addons-lite-for-gutenberg'),
      value: 'center'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Center Right', 'wpmozo-addons-lite-for-gutenberg'),
      value: 'center right'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Bottom Left', 'wpmozo-addons-lite-for-gutenberg'),
      value: 'bottom left'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Bottom Center', 'wpmozo-addons-lite-for-gutenberg'),
      value: 'bottom center'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Bottom Right', 'wpmozo-addons-lite-for-gutenberg'),
      value: 'bottom right'
    }],
    bgAllRepeat = [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('No Repeat', 'wpmozo-addons-lite-for-gutenberg'),
      value: 'no-repeat'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Repeat', 'wpmozo-addons-lite-for-gutenberg'),
      value: 'repeat'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Repeat X (horizontal)', 'wpmozo-addons-lite-for-gutenberg'),
      value: 'repeat-x'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Repeat Y (vertical)', 'wpmozo-addons-lite-for-gutenberg'),
      value: 'repeat-y'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Space', 'wpmozo-addons-lite-for-gutenberg'),
      value: 'space'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Round', 'wpmozo-addons-lite-for-gutenberg'),
      value: 'round'
    }],
    bgAllOverlay = [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('None', 'wpmozo-addons-lite-for-gutenberg'),
      value: 'none'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Color', 'wpmozo-addons-lite-for-gutenberg'),
      value: 'color'
    }];
  props = Object.assign({}, props, {
    preAttributes: _attributes__WEBPACK_IMPORTED_MODULE_5__["default"]
  });
  let backImage = attributes.fancyTextBackgroundImg ? attributes.fancyTextBackgroundImg : WPMozoEditorObj.placeholderImg;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, {
    key: "controls"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Fancy Text Content', 'wpmozo-addons-lite-for-gutenberg'),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Text Style', 'wpmozo-addons-lite-for-gutenberg'),
    value: attributes.textStyle,
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Gradient', 'wpmozo-addons-lite-for-gutenberg'),
      value: 'gradient'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Background Clipping', 'wpmozo-addons-lite-for-gutenberg'),
      value: 'clipping'
    }],
    onChange: newValue => setAttributes({
      textStyle: newValue
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextareaControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Fancy Text', 'wpmozo-addons-lite-for-gutenberg'),
    onChange: newValue => setAttributes({
      fancyText: newValue
    }),
    value: attributes.fancyText
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, {
    key: "styles",
    group: "styles"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Fancy Text Style', 'wpmozo-addons-lite-for-gutenberg'),
    className: "wpmozo-typography-panel",
    initialOpen: false
  }, 'gradient' === attributes.textStyle && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoColorPicker, {
    ColorKey: "fancyText",
    props: props,
    ColorTypes: [{
      key: 'Background',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Background', 'wpmozo-addons-lite-for-gutenberg'),
      onlyGradient: true
    }]
  })), 'clipping' === attributes.textStyle && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.BaseControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Background Image', 'wpmozo-addons-lite-for-gutenberg')
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.MediaUploadCheck, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.MediaUpload, {
    allowedTypes: ["image"],
    accept: "image/*",
    value: backImage,
    onSelect: media => {
      setAttributes({
        fancyTextBackgroundImg: media.url
      });
    },
    render: ({
      open
    }) => {
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
        className: "wpmozo-background-img-selction-wrap components-button block-editor-block-styles__item"
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "wpmozo-background-img-selction-overlay",
        onClick: event => {
          event.stopPropagation();
          open();
        }
      }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Select Image', 'wpmozo-addons-lite-for-gutenberg')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: backImage
      })));
    }
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Background Size', 'wpmozo-addons-lite-for-gutenberg'),
    value: attributes.textBgSize,
    options: bgAllSize,
    onChange: newValue => setAttributes({
      textBgSize: newValue
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Background Position', 'wpmozo-addons-lite-for-gutenberg'),
    value: attributes.textBgPosition,
    options: bgAllPositions,
    onChange: newValue => setAttributes({
      textBgPosition: newValue
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Background Repeat', 'wpmozo-addons-lite-for-gutenberg'),
    value: attributes.textBgRepeat,
    options: bgAllRepeat,
    onChange: newValue => setAttributes({
      textBgRepeat: newValue
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Background Overlay', 'wpmozo-addons-lite-for-gutenberg'),
    value: attributes.textBgOverlay,
    options: bgAllOverlay,
    onChange: newValue => setAttributes({
      textBgOverlay: newValue
    })
  }), 'none' !== attributes.textBgOverlay && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoColorPicker, {
    ColorKey: "textBgOverlay",
    props: props,
    ColorTypes: [{
      key: 'Color',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Clip Background Color', 'wpmozo-addons-lite-for-gutenberg'),
      withGradient: true
    }]
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoDimensions, {
    DimensionKey: "textBgDimensions",
    DimensionsTypes: {
      padding: true
    },
    props: props
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoAlignment, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Text Alignment', 'wpmozo-addons-lite-for-gutenberg'),
    onChange: newValue => setAttributes({
      textAlignment: newValue
    }),
    value: attributes.textAlignment
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Fancy Text Typography', 'wpmozo-addons-lite-for-gutenberg'),
    className: "wpmozo-typography-panel",
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoTypography, {
    TypographyKey: "text",
    props: props,
    TypoTypes: {
      'FontSize': true,
      'FontAppearance': true,
      'LetterSpacing': true,
      'LetterCase': true,
      'LineHeight': true
    }
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Inspector);

/***/ }),

/***/ "./src/blocks/fancy-text/save.js":
/*!***************************************!*\
  !*** ./src/blocks/fancy-text/save.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);


const Save = ({
  attributes
}) => {
  const ID = attributes.ID;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ..._wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save({
      className: 'wpmozo-adfgu-fancy-text-wrap'
    }),
    id: `block-${ID}`
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `wpmozo-adfgu-fancy-text-inner ${attributes.textStyle}`
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
    tagName: "",
    value: attributes.fancyText
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Save);

/***/ }),

/***/ "./src/blocks/fancy-text/style.js":
/*!****************************************!*\
  !*** ./src/blocks/fancy-text/style.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const Style = ({
  attributes,
  ID,
  clientId
}) => {
  const wpmozoCoreFun = window.wpmozo,
    parent = '#block-' + clientId,
    toConvertStyles = ['text', 'textBgDimensions'];
  let css = '',
    convertedStyle = wpmozoCoreFun.convetInlineStyleStr(toConvertStyles, attributes);
  let allInline = [{
    selector: '.wpmozo-adfgu-fancy-text-inner',
    style: {
      'background-clip': 'border-box',
      '-webkit-background-clip': 'text',
      '-webkit-text-fill-color': 'transparent',
      'text-align': attributes.textAlignment
    },
    additional: convertedStyle.text
  }];
  if ('gradient' === attributes.textStyle) {
    allInline.push({
      selector: '.wpmozo-adfgu-fancy-text-inner',
      style: {
        'background-color': 'transparent',
        'background-image': attributes.fancyTextBackground
      }
    });
  } else {
    let escURL = encodeURI(attributes.fancyTextBackgroundImg);
    allInline.push({
      selector: '.wpmozo-adfgu-fancy-text-inner',
      style: {
        'background-image': 'url("' + escURL + '")',
        'background-size': attributes.textBgSize,
        'background-position': attributes.textBgPosition,
        'background-repeat': attributes.textBgRepeat
      }
    });
    if ('none' !== attributes.textBgOverlay) {
      allInline.push({
        selector: '.wpmozo-adfgu-fancy-text-inner:before',
        style: {
          'content': '""',
          'position': 'absolute',
          'top': '0',
          'right': '0',
          'bottom': '0',
          'left': '0',
          'z-index': '-2',
          'background-image': 'inherit',
          'background-size': attributes.textBgSize,
          'background-position': attributes.textBgPosition,
          'background-repeat': attributes.textBgRepeat
        }
      });
      allInline.push({
        selector: '.wpmozo-adfgu-fancy-text-inner:after',
        style: {
          'content': '""',
          'position': 'absolute',
          'top': '0',
          'right': '0',
          'bottom': '0',
          'left': '0',
          'z-index': '-1',
          ...(!wpmozoCoreFun.wpmozo_is_empty(attributes.textBgOverlayColorSolid) && {
            'background-color': attributes.textBgOverlayColor
          }),
          ...(!wpmozoCoreFun.wpmozo_is_empty(attributes.textBgOverlayColorGradient) && {
            'background': attributes.textBgOverlayColor
          })
        }
      });
      css += `
		    	${parent} {
		    		z-index: 0;
		    		position: relative;
		    	}
		    `;
    }
  }
  let generateStyle = wpmozoCoreFun.wpmozo_generate_style(allInline);
  if (!wpmozoCoreFun.wpmozo_is_empty(generateStyle)) {
    css += `
	    	${parent} {
	    		${generateStyle}
	    	}
	    `;
  }
  if (!wpmozoCoreFun.wpmozo_is_empty(convertedStyle.textBgDimensions) && 'none' !== attributes.textBgOverlay) {
    css += `
	    	${parent} {
	    		${convertedStyle.textBgDimensions}
	    	}
	    `;
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, !wpmozoCoreFun.wpmozo_is_empty(css) && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("style", {
    className: "wpmozo-dynamic-style",
    "data-id": ID,
    "data-client-id": clientId
  }, css));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Style);

/***/ }),

/***/ "./src/blocks/flip-box/attributes.js":
/*!*******************************************!*\
  !*** ./src/blocks/flip-box/attributes.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);

const attributes = {
  ID: {
    type: "string"
  },
  animationType: {
    type: "string",
    default: 'flip'
  },
  flipDirection: {
    type: "string",
    default: 'top'
  },
  depth3dEffect: {
    type: "boolean",
    default: true
  },
  shakeOnFlip: {
    type: "boolean",
    default: false
  },
  flipSpeed: {
    type: "number",
    default: 700
  },
  frontTitle: {
    type: "string",
    default: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Front Title', 'wpmozo-addons-lite-for-gutenberg')
  },
  frontContnet: {
    type: "string",
    default: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Here you can set front text.', 'wpmozo-addons-lite-for-gutenberg')
  },
  backTitle: {
    type: "string",
    default: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Back Title', 'wpmozo-addons-lite-for-gutenberg')
  },
  backContnet: {
    type: "string",
    default: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Here you can set back text.', 'wpmozo-addons-lite-for-gutenberg')
  },
  frontElType: {
    type: "string",
    default: 'icon'
  },
  frontElIcon: {
    type: "string",
    default: "fas fa-star"
  },
  frontElImage: {
    type: "string"
  },
  backElType: {
    type: "string",
    default: 'icon'
  },
  backElIcon: {
    type: "string",
    default: "fas fa-star"
  },
  backElImage: {
    type: "string"
  },
  globalTitleColor: {
    type: "string",
    default: "#fff"
  },
  globalContentColor: {
    type: "string",
    default: "#fff"
  },
  globalTitletext: {
    type: "string"
  },
  globalTitleFontSize: {
    type: "string"
  },
  globalTitleFontAppearance: {
    type: "object",
    fontStyle: {
      type: "string"
    },
    fontWeight: {
      type: "string"
    },
    default: {
      fontStyle: "",
      fontWeight: ""
    }
  },
  globalTitleLetterSpacing: {
    type: "string"
  },
  globalTitleDecoration: {
    type: "string"
  },
  globalTitleLetterCase: {
    type: "string"
  },
  globalTitleLineHeight: {
    type: "string"
  },
  globalContenttext: {
    type: "string"
  },
  globalContentFontSize: {
    type: "string"
  },
  globalContentFontAppearance: {
    type: "object",
    fontStyle: {
      type: "string"
    },
    fontWeight: {
      type: "string"
    },
    default: {
      fontStyle: "",
      fontWeight: ""
    }
  },
  globalContentLetterSpacing: {
    type: "string"
  },
  globalContentDecoration: {
    type: "string"
  },
  globalContentLetterCase: {
    type: "string"
  },
  globalContentLineHeight: {
    type: "string"
  },
  frontHeadingLavel: {
    type: "string",
    default: "h2"
  },
  frontTitleColor: {
    type: "string"
  },
  frontContentColor: {
    type: "string"
  },
  frontBackgroundColor: {
    type: "string",
    default: "#543EC4"
  },
  frontTitletext: {
    type: "string"
  },
  frontTitleFontSize: {
    type: "string"
  },
  frontTitleFontAppearance: {
    type: "object",
    fontStyle: {
      type: "string"
    },
    fontWeight: {
      type: "string"
    },
    default: {
      fontStyle: "",
      fontWeight: ""
    }
  },
  frontTitleLetterSpacing: {
    type: "string"
  },
  frontTitleDecoration: {
    type: "string"
  },
  frontTitleLetterCase: {
    type: "string"
  },
  frontTitleLineHeight: {
    type: "string"
  },
  frontContenttext: {
    type: "string"
  },
  frontContentFontSize: {
    type: "string"
  },
  frontContentFontAppearance: {
    type: "object",
    fontStyle: {
      type: "string"
    },
    fontWeight: {
      type: "string"
    },
    default: {
      fontStyle: "",
      fontWeight: ""
    }
  },
  frontContentLetterSpacing: {
    type: "string"
  },
  frontContentDecoration: {
    type: "string"
  },
  frontContentLetterCase: {
    type: "string"
  },
  frontContentLineHeight: {
    type: "string"
  },
  backHeadingLavel: {
    type: "string",
    default: "h2"
  },
  backTitleColor: {
    type: "string"
  },
  backContentColor: {
    type: "string"
  },
  backBackgroundColor: {
    type: "string",
    default: "#863AD0"
  },
  backTitletext: {
    type: "string"
  },
  backTitleFontSize: {
    type: "string"
  },
  backTitleFontAppearance: {
    type: "object",
    fontStyle: {
      type: "string"
    },
    fontWeight: {
      type: "string"
    },
    default: {
      fontStyle: "",
      fontWeight: ""
    }
  },
  backTitleLetterSpacing: {
    type: "string"
  },
  backTitleDecoration: {
    type: "string"
  },
  backTitleLetterCase: {
    type: "string"
  },
  backTitleLineHeight: {
    type: "string"
  },
  backContenttext: {
    type: "string"
  },
  backContentFontSize: {
    type: "string"
  },
  backContentFontAppearance: {
    type: "object",
    fontStyle: {
      type: "string"
    },
    fontWeight: {
      type: "string"
    },
    default: {
      fontStyle: "",
      fontWeight: ""
    }
  },
  backContentLetterSpacing: {
    type: "string"
  },
  backContentDecoration: {
    type: "string"
  },
  backContentLetterCase: {
    type: "string"
  },
  backContentLineHeight: {
    type: "string"
  },
  frontElementAlign: {
    type: "string",
    default: "top"
  },
  frontIconColor: {
    type: "string",
    default: "#fff"
  },
  frontIconSize: {
    type: "string"
  },
  frontIconSizeUnit: {
    type: "string"
  },
  frontImageAlignment: {
    type: "string",
    default: "center"
  },
  frontImageWidth: {
    type: "string",
    default: "100px"
  },
  frontImageWidthUnit: {
    type: "string",
    default: "px"
  },
  frontIconStyle: {
    type: "boolean",
    default: false
  },
  frontIconShape: {
    type: "string",
    default: "square"
  },
  frontIconShapeBackground: {
    type: "string",
    default: "#000000"
  },
  frontIconHasShapeBorder: {
    type: "boolean",
    default: false
  },
  frontIconShapeborderRadius: {
    type: "string"
  },
  frontIconShapeborder: {
    type: "object"
  },
  backElementAlign: {
    type: "string",
    default: "top"
  },
  backIconColor: {
    type: "string",
    default: "#fff"
  },
  backIconSize: {
    type: "string"
  },
  backIconSizeUnit: {
    type: "string"
  },
  backImageAlignment: {
    type: "string",
    default: "center"
  },
  backImageWidth: {
    type: "string",
    default: "100px"
  },
  backImageWidthUnit: {
    type: "string",
    default: "px"
  },
  backIconStyle: {
    type: "boolean",
    default: false
  },
  backIconShape: {
    type: "string",
    default: "square"
  },
  backIconShapeBackground: {
    type: "string",
    default: "#000000"
  },
  backIconHasShapeBorder: {
    type: "boolean",
    default: false
  },
  backIconShapeborderRadius: {
    type: "string"
  },
  backIconShapeborder: {
    type: "object"
  },
  frontContentHorAlignment: {
    type: "string",
    default: "center"
  },
  frontContentVerAlignment: {
    type: "string",
    default: "center"
  },
  backContentHorAlignment: {
    type: "string",
    default: "center"
  },
  backContentVerAlignment: {
    type: "string",
    default: "center"
  },
  frontFlipboxborder: {
    type: "object"
  },
  frontFlipboxborderRadius: {
    type: "string"
  },
  backFlipboxborder: {
    type: "object"
  },
  backFlipboxborderRadius: {
    type: "string"
  },
  frontFlipboxBackground: {
    type: "string",
    default: "#543EC4"
  },
  backFlipboxBackground: {
    type: "string",
    default: "#863AD0"
  },
  flipboxWidth: {
    type: "string",
    default: "100%"
  },
  flipboxWidthUnit: {
    type: "string",
    default: "%"
  },
  backHasButton: {
    type: "boolean",
    default: false
  },
  backBtnText: {
    type: "string",
    default: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Click ME!', 'wpmozo-addons-lite-for-gutenberg')
  },
  backBtnUrl: {
    type: "string",
    default: '#'
  },
  backBtnIcon: {
    type: "string",
    default: 'fas fa-arrow-right'
  },
  backBtnIconPosition: {
    type: "string",
    default: 'after'
  },
  backBtnIconOnHover: {
    type: "boolean",
    default: false
  },
  backBtnColor: {
    type: "string",
    default: '#fff'
  },
  backBtnBackground: {
    type: "string"
  },
  backBtntext: {
    type: "string"
  },
  backBtnFontSize: {
    type: "string"
  },
  backBtnFontAppearance: {
    type: "object",
    fontStyle: {
      type: "string"
    },
    fontWeight: {
      type: "string"
    },
    default: {
      fontStyle: "",
      fontWeight: ""
    }
  },
  backBtnLetterSpacing: {
    type: "string"
  },
  backBtnDecoration: {
    type: "string",
    default: "none"
  },
  backBtnLetterCase: {
    type: "string"
  },
  backBtnLineHeight: {
    type: "string"
  },
  backBtnborder: {
    type: "object",
    default: {
      "width": "1px",
      "style": "solid",
      "color": "#fff"
    }
  },
  backBtnborderRadius: {
    type: "string",
    default: "3px"
  },
  backBtnDimensionspadding: {
    type: "object",
    default: {
      "top": '5px',
      "right": '8px',
      "bottom": '5px',
      "left": '8px'
    }
  },
  backBtnDimensionsmargin: {
    type: "object"
  },
  frontIconShapeBorderColor: {
    type: "string"
  },
  backIconShapeBorderColor: {
    type: "string"
  },
  frontDimensionspadding: {
    type: "object",
    default: {
      "top": '10px',
      "right": '10px',
      "bottom": '10px',
      "left": '10px'
    }
  },
  backDimensionspadding: {
    type: "object",
    default: {
      "top": '10px',
      "right": '10px',
      "bottom": '10px',
      "left": '10px'
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (attributes);

/***/ }),

/***/ "./src/blocks/flip-box/edit.js":
/*!*************************************!*\
  !*** ./src/blocks/flip-box/edit.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _inspector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inspector */ "./src/blocks/flip-box/inspector.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style */ "./src/blocks/flip-box/style.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__);







const Edit = props => {
  const wpmozoCoreFun = window.wpmozo,
    attributes = props.attributes,
    clientId = props.clientId,
    ID = window.wpmozo.getIdByClientid(clientId),
    isSelected = props.isSelected,
    setAttributes = props.setAttributes,
    layoutType = 'flip' === attributes.animationType ? ' layout1' : ' layout2',
    blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.useBlockProps)({
      className: 'wpmozo-adfgu-flip-box-main'
    }),
    [editMode, setEditMode] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)(false),
    editModeLabel = !editMode ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Front', 'wpmozo-addons-lite-for-gutenberg') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Back', 'wpmozo-addons-lite-for-gutenberg');
  attributes.ID = ID;
  let editModeSide = !editMode ? ' edit-front' : ' edit-back';
  if (!isSelected) {
    editModeSide = '';
  }
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
    jQuery('body').find('.wpmozo-adfgu-flip-box-wrap').each(function () {
      jQuery(this).find('.wpmozo-adfgu-flip-box-side').each(function () {
        jQuery(this).removeAttr('style');
      });
      let $this = jQuery(this);
      var maxHeight = Math.max.apply(null, $this.find('.wpmozo-adfgu-flip-box-side').map(function () {
        return jQuery(this).outerHeight();
      }).get());
      jQuery(this).find('.wpmozo-adfgu-flip-box-side').each(function () {
        jQuery(this).css('height', maxHeight + 'px');
      });
    });
  });
  let backBtnIcon = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
      className: attributes.backBtnIcon
    }),
    backBtnOnHover = attributes.backBtnIconOnHover ? ' show-on-hover' : '',
    frontHexagonIcon = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "wpmozo-adfgu-hexagon-wrap"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "wpmozo-adfgu-hexagon-shape"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
      className: attributes.frontElIcon
    }))),
    backHexagonIcon = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "wpmozo-adfgu-hexagon-wrap"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "wpmozo-adfgu-hexagon-shape"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
      className: attributes.backElIcon
    })));
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_inspector__WEBPACK_IMPORTED_MODULE_1__["default"], {
    ...props
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_style__WEBPACK_IMPORTED_MODULE_2__["default"], {
    attributes: attributes,
    ID: ID,
    clientId: clientId
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.BlockControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.ToolbarGroup, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.ToolbarButton, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.ToggleControl, {
    className: "wpmozo-adfgu-flip-box-edit-control",
    label: editModeLabel,
    checked: editMode,
    onChange: newValue => setEditMode(newValue)
  })))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...blockProps
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `wpmozo-adfgu-flip-box-wrap${layoutType}${editModeSide}`,
    "flip-direction": attributes.flipDirection
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wpmozo-adfgu-flip-box-side wpmozo-adfgu-flip-box-front"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wpmozo-adfgu-flip-box-inner"
  }, 'none' !== attributes.frontElType && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: 'icon' === attributes.frontElType ? "wpmozo-adfgu-flip-box-icon-wrap" : "wpmozo-adfgu-flip-box-image-wrap"
  }, 'icon' === attributes.frontElType && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.Fragment, null, "hexagon" !== attributes.frontIconShape && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
    className: attributes.frontElIcon
  }), "hexagon" === attributes.frontIconShape && frontHexagonIcon), 'image' === attributes.frontElType && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: attributes.frontElImage
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wpmozo-adfgu-flip-box-content-wrap"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wpmozo-adfgu-flip-box-heading-wrap"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.RichText, {
    className: "wpmozo-adfgu-flip-box-title",
    tagName: attributes.frontHeadingLavel,
    value: attributes.frontTitle,
    onChange: newValue => setAttributes({
      frontTitle: newValue
    }),
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Front Title', 'wpmozo-addons-lite-for-gutenberg')
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wpmozo-adfgu-flip-box-description"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.RichText, {
    value: attributes.frontContnet,
    onChange: newValue => setAttributes({
      frontContnet: newValue
    }),
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Here you can set front text.', 'wpmozo-addons-lite-for-gutenberg')
  }))))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wpmozo-adfgu-flip-box-side wpmozo-adfgu-flip-box-back"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wpmozo-adfgu-flip-box-inner"
  }, 'none' !== attributes.backElType && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: 'icon' === attributes.backElType ? "wpmozo-adfgu-flip-box-icon-wrap" : "wpmozo-adfgu-flip-box-image-wrap"
  }, 'icon' === attributes.backElType && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.Fragment, null, "hexagon" !== attributes.backIconShape && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
    className: attributes.backElIcon
  }), "hexagon" === attributes.backIconShape && backHexagonIcon), 'image' === attributes.backElType && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: attributes.backElImage
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wpmozo-adfgu-flip-box-content-wrap"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wpmozo-adfgu-flip-box-heading-wrap"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.RichText, {
    className: "wpmozo-adfgu-flip-box-title",
    tagName: attributes.backHeadingLavel,
    value: attributes.backTitle,
    onChange: newValue => setAttributes({
      backTitle: newValue
    }),
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Back Title', 'wpmozo-addons-lite-for-gutenberg')
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wpmozo-adfgu-flip-box-description"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.RichText, {
    value: attributes.backContnet,
    onChange: newValue => setAttributes({
      backContnet: newValue
    }),
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Here you can set back text.', 'wpmozo-addons-lite-for-gutenberg')
  })), attributes.backHasButton && !wpmozoCoreFun.wpmozo_is_empty(attributes.backBtnText) && !wpmozoCoreFun.wpmozo_is_empty(attributes.backBtnUrl) && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wpmozo-adfgu-flip-box-button-wrap"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wpmozo-adfgu-flip-box-button-wrap-inner"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    className: `wpmozo-adfgu-flip-box-button${backBtnOnHover}`,
    target: "_blank",
    href: attributes.backBtnUrl
  }, !wpmozoCoreFun.wpmozo_is_empty(backBtnIcon) && 'before' === attributes.backBtnIconPosition && backBtnIcon, attributes.backBtnText, !wpmozoCoreFun.wpmozo_is_empty(backBtnIcon) && 'after' === attributes.backBtnIconPosition && backBtnIcon)))))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Edit);

/***/ }),

/***/ "./src/blocks/flip-box/icon.js":
/*!*************************************!*\
  !*** ./src/blocks/flip-box/icon.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const Icon = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  version: "1.1",
  width: "1024",
  height: "1024",
  viewBox: "0 0 1024 1024"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
  id: "icomoon-ignore"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  fill: "#000",
  d: "M445.867 66.133l-371.2 181.333c-14.933 8.533-14.933 29.867 0 38.4l373.333 189.867c6.4 2.133 12.8 2.133 19.2 0l369.067-185.6c14.933-8.533 14.933-29.867 0-38.4l-371.2-185.6c-6.4-4.267-12.8-4.267-19.2 0zM130.133 266.667l324.267-160 322.133 162.133-322.133 162.133-324.267-164.267z"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  fill: "#000",
  d: "M1013.333 524.8c0 4.267-4.267 8.533-6.4 12.8l-8.533 8.533c-10.667 10.667-23.467 17.067-34.133 23.467s-21.333 10.667-32 14.933c-8.533 4.267-17.067 6.4-23.467 10.667-14.933 6.4-27.733 10.667-42.667 14.933-4.267 2.133-8.533 4.267-14.933 4.267-10.667 4.267-21.333 6.4-29.867 10.667-34.133 10.667-68.267 21.333-104.533 29.867l6.4 44.8c2.133 10.667-10.667 17.067-19.2 10.667l-83.2-64c-4.267-4.267-6.4-10.667-2.133-17.067l64-83.2c6.4-8.533 19.2-4.267 21.333 6.4l6.4 46.933c34.133-6.4 66.133-10.667 98.133-17.067 14.933-2.133 27.733-6.4 42.667-8.533 4.267 0 10.667-2.133 14.933-4.267 14.933-4.267 29.867-6.4 42.667-10.667 8.533-2.133 14.933-4.267 21.333-6.4s12.8-4.267 19.2-8.533c10.667-4.267 21.333-10.667 29.867-17.067 2.133-2.133 4.267-2.133 4.267-4.267s2.133-2.133 2.133-4.267c0-2.133 0-4.267-2.133-6.4-4.267-6.4-14.933-12.8-25.6-19.2s-21.333-10.667-34.133-14.933c-6.4-2.133-12.8-4.267-19.2-6.4v42.667c-19.2 6.4-32 8.533-42.667 10.667v-66.133c-27.733-6.4-55.467-12.8-83.2-19.2 27.733 2.133 55.467 6.4 83.2 10.667v-83.2l-349.867 179.2v345.6l349.867-179.2v-53.333c14.933-2.133 29.867-6.4 42.667-10.667v76.8c0 8.533-4.267 14.933-10.667 19.2l-392.533 202.667c-14.933 6.4-32-2.133-32-19.2v-394.667c0-8.533 4.267-14.933 10.667-19.2l392.533-200.533c14.933-6.4 32 2.133 32 19.2v125.867c8.533 2.133 14.933 2.133 23.467 4.267 12.8 2.133 25.6 6.4 36.267 10.667 12.8 4.267 25.6 10.667 36.267 23.467 10.667 6.4 14.933 17.067 12.8 27.733z"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  fill: "#000",
  d: "M422.4 514.133l-379.733-200.533c-14.933-6.4-32 2.133-32 19.2v394.667c0 8.533 4.267 14.933 10.667 19.2l381.867 200.533c14.933 6.4 32-2.133 32-19.2v-394.667c0-8.533-4.267-14.933-12.8-19.2zM53.333 369.067l339.2 177.067v219.733l-51.2-104.533c-10.667-23.467-40.533-32-61.867-17.067l-51.2 38.4-29.867-128c-8.533-29.867-44.8-40.533-68.267-21.333l-74.667 85.333v-249.6zM392.533 891.733l-339.2-177.067v-36.267l102.4-108.8 29.867 128c8.533 27.733 40.533 38.4 64 23.467l53.333-38.4 87.467 183.467v25.6z"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  fill: "#000",
  d: "M309.333 567.467c0 17.673-14.327 32-32 32s-32-14.327-32-32c0-17.673 14.327-32 32-32s32 14.327 32 32z"
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Icon);

/***/ }),

/***/ "./src/blocks/flip-box/index.js":
/*!**************************************!*\
  !*** ./src/blocks/flip-box/index.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./attributes */ "./src/blocks/flip-box/attributes.js");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./src/blocks/flip-box/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ "./src/blocks/flip-box/save.js");
/* harmony import */ var _icon_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icon.js */ "./src/blocks/flip-box/icon.js");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__);






(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__.registerBlockType)('wpmozo/flip-box', {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Flip Box', 'wpmozo-addons-lite-for-gutenberg'),
  icon: _icon_js__WEBPACK_IMPORTED_MODULE_3__["default"],
  apiVersion: 3,
  category: 'wpmozo',
  keywords: ['wpmozo', 'flip-box', 'box'],
  attributes: _attributes__WEBPACK_IMPORTED_MODULE_0__["default"],
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_2__["default"]
});

/***/ }),

/***/ "./src/blocks/flip-box/inspector.js":
/*!******************************************!*\
  !*** ./src/blocks/flip-box/inspector.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/index */ "./src/components/index.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./attributes */ "./src/blocks/flip-box/attributes.js");







const Inspector = props => {
  const attributes = props.attributes,
    setAttributes = props.setAttributes,
    flipAllDirection = [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Top', 'wpmozo-addons-lite-for-gutenberg'),
      value: 'top'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Bottom', 'wpmozo-addons-lite-for-gutenberg'),
      value: 'bottom'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Left', 'wpmozo-addons-lite-for-gutenberg'),
      value: 'left'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Right', 'wpmozo-addons-lite-for-gutenberg'),
      value: 'right'
    }, ...('flip' === attributes.animationType ? [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Diagonal Left', 'wpmozo-addons-lite-for-gutenberg'),
      value: 'diagonal-left'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Diagonal Right', 'wpmozo-addons-lite-for-gutenberg'),
      value: 'diagonal-right'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Diagonal Left Inverted', 'wpmozo-addons-lite-for-gutenberg'),
      value: 'diagonal-left-inverted'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Diagonal Right Inverted', 'wpmozo-addons-lite-for-gutenberg'),
      value: 'diagonal-right-inverted'
    }] : [])];
  props = Object.assign({}, props, {
    preAttributes: _attributes__WEBPACK_IMPORTED_MODULE_6__["default"]
  });
  const [contentType, setContentType] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)('front'),
    [elementType, setElementType] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)('front'),
    [typographyType, setTypographyType] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)('title'),
    [flipBoxType, setFlipBoxType] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)('front'),
    [frontTypographyType, setFrontTypographyType] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)('title'),
    [backTypographyType, setBackTypographyType] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)('title'),
    [elementStyleType, setelEmentStyleType] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)('front'),
    [contentAlignType, setContentAlignType] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)('front'),
    [flipboxBorderType, setFlipboxBorderType] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)('front'),
    [flipboxWidthType, setFlipboxWidthType] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)('front'),
    [flipboxDimensionsType, setFlipboxDimensionsType] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)('front');
  const headingLavels = [{
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('H1', 'wpmozo-addons-lite-for-gutenberg'),
    value: 'h1'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('H2', 'wpmozo-addons-lite-for-gutenberg'),
    value: 'h2'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('H3', 'wpmozo-addons-lite-for-gutenberg'),
    value: 'h3'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('H4', 'wpmozo-addons-lite-for-gutenberg'),
    value: 'h4'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('H5', 'wpmozo-addons-lite-for-gutenberg'),
    value: 'h5'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('H6', 'wpmozo-addons-lite-for-gutenberg'),
    value: 'h6'
  }];
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, {
    key: "controls"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Flip Box Layout', 'wpmozo-addons-lite-for-gutenberg'),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Animation Type', 'wpmozo-addons-lite-for-gutenberg'),
    value: attributes.animationType,
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Flip', 'wpmozo-addons-lite-for-gutenberg'),
      value: 'flip'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('3D Cube', 'wpmozo-addons-lite-for-gutenberg'),
      value: 'cube'
    }],
    onChange: newValue => setAttributes({
      animationType: newValue
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Flip Direction', 'wpmozo-addons-lite-for-gutenberg'),
    value: attributes.flipDirection,
    options: flipAllDirection,
    onChange: newValue => setAttributes({
      flipDirection: newValue
    })
  }), 'flip' === attributes.animationType && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('3D Depth Effect', 'wpmozo-addons-lite-for-gutenberg'),
    checked: attributes.depth3dEffect,
    onChange: newValue => setAttributes({
      depth3dEffect: newValue
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Shake On Flip', 'wpmozo-addons-lite-for-gutenberg'),
    checked: attributes.shakeOnFlip,
    onChange: newValue => setAttributes({
      shakeOnFlip: newValue
    })
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Flip Speed(in ms)', 'wpmozo-addons-lite-for-gutenberg'),
    value: attributes.flipSpeed,
    onChange: newValue => setAttributes({
      flipSpeed: newValue
    }),
    min: 100,
    step: 100,
    max: 10000
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Flip Box Content', 'wpmozo-addons-lite-for-gutenberg'),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.BaseControl, {
    className: "wpmozo-button-tabs-wrap"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ButtonGroup, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Button, {
    className: "wpmozo-button-tabs-btn",
    isPressed: 'front' === contentType ? true : false,
    onClick: () => setContentType('front')
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Front', 'wpmozo-addons-lite-for-gutenberg')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Button, {
    className: "wpmozo-button-tabs-btn",
    isPressed: 'back' === contentType ? true : false,
    onClick: () => setContentType('back')
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Back', 'wpmozo-addons-lite-for-gutenberg'))), 'front' === contentType && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Title', 'wpmozo-addons-lite-for-gutenberg'),
    value: attributes.frontTitle,
    onChange: newValue => setAttributes({
      frontTitle: newValue
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.TextareaControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Content', 'wpmozo-addons-lite-for-gutenberg'),
    onChange: newValue => setAttributes({
      frontContnet: newValue
    }),
    value: attributes.frontContnet
  })), 'back' === contentType && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Title', 'wpmozo-addons-lite-for-gutenberg'),
    value: attributes.backTitle,
    onChange: newValue => setAttributes({
      backTitle: newValue
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.TextareaControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Content', 'wpmozo-addons-lite-for-gutenberg'),
    onChange: newValue => setAttributes({
      backContnet: newValue
    }),
    value: attributes.backContnet
  })))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Flip Box Elements', 'wpmozo-addons-lite-for-gutenberg'),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.BaseControl, {
    className: "wpmozo-button-tabs-wrap"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ButtonGroup, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Button, {
    className: "wpmozo-button-tabs-btn",
    isPressed: 'front' === elementType ? true : false,
    onClick: () => setElementType('front')
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Front', 'wpmozo-addons-lite-for-gutenberg')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Button, {
    className: "wpmozo-button-tabs-btn",
    isPressed: 'back' === elementType ? true : false,
    onClick: () => setElementType('back')
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Back', 'wpmozo-addons-lite-for-gutenberg'))), 'front' === elementType && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Element Type', 'wpmozo-addons-lite-for-gutenberg'),
    value: attributes.frontElType,
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('None', 'wpmozo-addons-lite-for-gutenberg'),
      value: 'none'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Icon', 'wpmozo-addons-lite-for-gutenberg'),
      value: 'icon'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Image', 'wpmozo-addons-lite-for-gutenberg'),
      value: 'image'
    }],
    onChange: newValue => setAttributes({
      frontElType: newValue
    })
  }), 'icon' === attributes.frontElType && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoIconpicker, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Icon', 'wpmozo-addons-lite-for-gutenberg'),
    iconPickerKey: "frontElIcon",
    props: props,
    value: attributes.frontElIcon,
    onChange: newValue => setAttributes({
      frontElIcon: newValue
    })
  }), 'image' === attributes.frontElType && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoMediaUploader, {
    attrKye: "frontElImage",
    props: props
  })), 'back' === elementType && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Element Type', 'wpmozo-addons-lite-for-gutenberg'),
    value: attributes.backElType,
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('None', 'wpmozo-addons-lite-for-gutenberg'),
      value: 'none'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Icon', 'wpmozo-addons-lite-for-gutenberg'),
      value: 'icon'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Image', 'wpmozo-addons-lite-for-gutenberg'),
      value: 'image'
    }],
    onChange: newValue => setAttributes({
      backElType: newValue
    })
  }), 'icon' === attributes.backElType && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoIconpicker, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Icon', 'wpmozo-addons-lite-for-gutenberg'),
    iconPickerKey: "backElIcon",
    props: props,
    value: attributes.backElIcon,
    onChange: newValue => setAttributes({
      backElIcon: newValue
    })
  }), 'image' === attributes.backElType && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoMediaUploader, {
    attrKye: "backElImage",
    props: props
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Show Button', 'wpmozo-addons-lite-for-gutenberg'),
    checked: attributes.backHasButton,
    onChange: newValue => setAttributes({
      backHasButton: newValue
    })
  }), attributes.backHasButton && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Button Text', 'wpmozo-addons-lite-for-gutenberg'),
    value: attributes.backBtnText,
    onChange: newValue => setAttributes({
      backBtnText: newValue
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Button Url', 'wpmozo-addons-lite-for-gutenberg'),
    value: attributes.backBtnUrl,
    onChange: newValue => setAttributes({
      backBtnUrl: newValue
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoIconpicker, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Button Icon', 'wpmozo-addons-lite-for-gutenberg'),
    iconPickerKey: "backBtnIcon",
    props: props,
    value: attributes.backBtnIcon,
    onChange: newValue => setAttributes({
      backBtnIcon: newValue
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Element Type', 'wpmozo-addons-lite-for-gutenberg'),
    value: attributes.backBtnIconPosition,
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Before', 'wpmozo-addons-lite-for-gutenberg'),
      value: 'before'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('After', 'wpmozo-addons-lite-for-gutenberg'),
      value: 'after'
    }],
    onChange: newValue => setAttributes({
      backBtnIconPosition: newValue
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Show Icon On Hover', 'wpmozo-addons-lite-for-gutenberg'),
    checked: attributes.backBtnIconOnHover,
    onChange: newValue => setAttributes({
      backBtnIconOnHover: newValue
    })
  })))))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, {
    key: "styles",
    group: "styles"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Global Styling', 'wpmozo-addons-lite-for-gutenberg'),
    className: "wpmozo-typography-panel",
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoRangeSize, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Content Width', 'wpmozo-addons-lite-for-gutenberg'),
    rangeSizeKey: "flipboxWidth",
    props: props
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoColorPicker, {
    ColorKey: "global",
    props: props,
    ColorTypes: [{
      key: 'TitleColor',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Title Color', 'wpmozo-addons-lite-for-gutenberg')
    }, {
      key: 'ContentColor',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Content Color', 'wpmozo-addons-lite-for-gutenberg')
    }]
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.BaseControl, {
    className: "wpmozo-button-tabs-wrap"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ButtonGroup, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Button, {
    className: "wpmozo-button-tabs-btn",
    isPressed: 'title' === typographyType ? true : false,
    onClick: () => setTypographyType('title')
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Title', 'wpmozo-addons-lite-for-gutenberg')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Button, {
    className: "wpmozo-button-tabs-btn",
    isPressed: 'content' === typographyType ? true : false,
    onClick: () => setTypographyType('content')
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Content', 'wpmozo-addons-lite-for-gutenberg'))), 'title' === typographyType && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoTypography, {
    TypographyKey: "globalTitle",
    props: props
  }), 'content' === typographyType && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoTypography, {
    TypographyKey: "globalContent",
    props: props
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('FlipBox Style', 'wpmozo-addons-lite-for-gutenberg'),
    className: "wpmozo-typography-panel",
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.BaseControl, {
    className: "wpmozo-button-tabs-wrap"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ButtonGroup, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Button, {
    className: "wpmozo-button-tabs-btn",
    isPressed: 'front' === flipBoxType ? true : false,
    onClick: () => setFlipBoxType('front')
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Front', 'wpmozo-addons-lite-for-gutenberg')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Button, {
    className: "wpmozo-button-tabs-btn",
    isPressed: 'back' === flipBoxType ? true : false,
    onClick: () => setFlipBoxType('back')
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Back', 'wpmozo-addons-lite-for-gutenberg'))), 'front' === flipBoxType && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.BaseControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Heading Lavel', 'wpmozo-addons-lite-for-gutenberg')
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ButtonGroup, null, headingLavels.map((item, key) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Button, {
    key: 'front-label-' + item.value,
    isPressed: item.value === attributes.frontHeadingLavel ? true : false,
    onClick: newValue => setAttributes({
      frontHeadingLavel: item.value
    })
  }, item.label)))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoColorPicker, {
    ColorKey: "front",
    props: props,
    ColorTypes: [{
      key: 'TitleColor',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Title Color', 'wpmozo-addons-lite-for-gutenberg')
    }, {
      key: 'ContentColor',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Content Color', 'wpmozo-addons-lite-for-gutenberg')
    }, {
      key: 'BackgroundColor',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Background Color', 'wpmozo-addons-lite-for-gutenberg')
    }]
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.BaseControl, {
    className: "wpmozo-button-tabs-wrap"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ButtonGroup, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Button, {
    className: "wpmozo-button-tabs-btn",
    isPressed: 'title' === frontTypographyType ? true : false,
    onClick: () => setFrontTypographyType('title')
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Title', 'wpmozo-addons-lite-for-gutenberg')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Button, {
    className: "wpmozo-button-tabs-btn",
    isPressed: 'content' === frontTypographyType ? true : false,
    onClick: () => setFrontTypographyType('content')
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Content', 'wpmozo-addons-lite-for-gutenberg'))), 'title' === frontTypographyType && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoTypography, {
    TypographyKey: "frontTitle",
    props: props
  }), 'content' === frontTypographyType && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoTypography, {
    TypographyKey: "frontContent",
    props: props
  }))), 'back' === flipBoxType && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.BaseControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Heading Lavel', 'wpmozo-addons-lite-for-gutenberg')
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ButtonGroup, null, headingLavels.map((item, key) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Button, {
    key: 'back-label-' + item.value,
    isPressed: item.value === attributes.backHeadingLavel ? true : false,
    onClick: newValue => setAttributes({
      backHeadingLavel: item.value
    })
  }, item.label)))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoColorPicker, {
    ColorKey: "back",
    props: props,
    ColorTypes: [{
      key: 'TitleColor',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Title Color', 'wpmozo-addons-lite-for-gutenberg')
    }, {
      key: 'ContentColor',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Content Color', 'wpmozo-addons-lite-for-gutenberg')
    }, {
      key: 'BackgroundColor',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Background Color', 'wpmozo-addons-lite-for-gutenberg')
    }]
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.BaseControl, {
    className: "wpmozo-button-tabs-wrap"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ButtonGroup, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Button, {
    className: "wpmozo-button-tabs-btn",
    isPressed: 'title' === backTypographyType ? true : false,
    onClick: () => setBackTypographyType('title')
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Title', 'wpmozo-addons-lite-for-gutenberg')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Button, {
    className: "wpmozo-button-tabs-btn",
    isPressed: 'content' === backTypographyType ? true : false,
    onClick: () => setBackTypographyType('content')
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Content', 'wpmozo-addons-lite-for-gutenberg'))), 'title' === backTypographyType && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoTypography, {
    TypographyKey: "backTitle",
    props: props
  }), 'content' === backTypographyType && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoTypography, {
    TypographyKey: "backContent",
    props: props
  }))))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('FlipBox Image/Icon Style', 'wpmozo-addons-lite-for-gutenberg'),
    className: "wpmozo-typography-panel",
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.BaseControl, {
    className: "wpmozo-button-tabs-wrap"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ButtonGroup, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Button, {
    className: "wpmozo-button-tabs-btn",
    isPressed: 'front' === elementStyleType ? true : false,
    onClick: () => setelEmentStyleType('front')
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Front', 'wpmozo-addons-lite-for-gutenberg')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Button, {
    className: "wpmozo-button-tabs-btn",
    isPressed: 'back' === elementStyleType ? true : false,
    onClick: () => setelEmentStyleType('back')
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Back', 'wpmozo-addons-lite-for-gutenberg'))), 'front' === elementStyleType && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, 'icon' === attributes.frontElType && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoColorPicker, {
    ColorKey: "front",
    props: props,
    ColorTypes: [{
      key: 'IconColor',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Icon Color', 'wpmozo-addons-lite-for-gutenberg')
    }]
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoRangeSize, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Icon Size', 'wpmozo-addons-lite-for-gutenberg'),
    rangeSizeKey: "frontIconSize",
    props: props
  })), 'image' === attributes.frontElType && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoRangeSize, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Front Image Width', 'wpmozo-addons-lite-for-gutenberg'),
    rangeSizeKey: "frontImageWidth",
    props: props
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoAlignment, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Front Image Alignment', 'wpmozo-addons-lite-for-gutenberg'),
    onChange: newValue => setAttributes({
      frontImageAlignment: newValue
    }),
    value: attributes.frontImageAlignment
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Image/Icon Placment', 'wpmozo-addons-lite-for-gutenberg'),
    value: attributes.frontElementAlign,
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Top', 'wpmozo-addons-lite-for-gutenberg'),
      value: 'top'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Left', 'wpmozo-addons-lite-for-gutenberg'),
      value: 'left'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Right', 'wpmozo-addons-lite-for-gutenberg'),
      value: 'right'
    }],
    onChange: newValue => setAttributes({
      frontElementAlign: newValue
    })
  }), 'icon' === attributes.frontElType && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Style Icon', 'wpmozo-addons-lite-for-gutenberg'),
    checked: attributes.frontIconStyle,
    onChange: newValue => setAttributes({
      frontIconStyle: newValue
    })
  }), attributes.frontIconStyle && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Display Shape Border', 'wpmozo-addons-lite-for-gutenberg'),
    checked: attributes.frontIconHasShapeBorder,
    onChange: newValue => setAttributes({
      frontIconHasShapeBorder: newValue
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Shape', 'wpmozo-addons-lite-for-gutenberg'),
    value: attributes.frontIconShape,
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Square', 'wpmozo-addons-lite-for-gutenberg'),
      value: 'square'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Circle', 'wpmozo-addons-lite-for-gutenberg'),
      value: 'circle'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Hexagon', 'wpmozo-addons-lite-for-gutenberg'),
      value: 'hexagon'
    }],
    onChange: newValue => {
      setAttributes({
        frontIconShapeborderRadius: ''
      });
      setAttributes({
        frontIconShape: newValue
      });
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoColorPicker, {
    ColorKey: "front",
    props: props,
    ColorTypes: [{
      key: 'IconShapeBackground',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Shape Background Color', 'wpmozo-addons-lite-for-gutenberg')
    }]
  }), attributes.frontIconHasShapeBorder && 'hexagon' !== attributes.frontIconShape && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoBorder, {
    BorderKey: "frontIconShape",
    props: props,
    BorderTypes: 'square' !== attributes.frontIconShape ? {
      border: true
    } : {
      border: true,
      radius: true
    }
  })), attributes.frontIconHasShapeBorder && 'hexagon' === attributes.frontIconShape && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoColorPicker, {
    ColorKey: "front",
    props: props,
    ColorTypes: [{
      key: 'IconShapeBorderColor',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Shape Border Color', 'wpmozo-addons-lite-for-gutenberg')
    }]
  }))))), 'back' === elementStyleType && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, 'icon' === attributes.backElType && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoColorPicker, {
    ColorKey: "back",
    props: props,
    ColorTypes: [{
      key: 'IconColor',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Icon Color', 'wpmozo-addons-lite-for-gutenberg')
    }]
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoRangeSize, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Icon Size', 'wpmozo-addons-lite-for-gutenberg'),
    rangeSizeKey: "backIconSize",
    props: props
  })), 'image' === attributes.backElType && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoRangeSize, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Back Image Width', 'wpmozo-addons-lite-for-gutenberg'),
    rangeSizeKey: "backImageWidth",
    props: props
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoAlignment, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Front Image Alignment', 'wpmozo-addons-lite-for-gutenberg'),
    onChange: newValue => setAttributes({
      backImageAlignment: newValue
    }),
    value: attributes.backImageAlignment
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Image/Icon Placment', 'wpmozo-addons-lite-for-gutenberg'),
    value: attributes.backElementAlign,
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Top', 'wpmozo-addons-lite-for-gutenberg'),
      value: 'top'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Left', 'wpmozo-addons-lite-for-gutenberg'),
      value: 'left'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Right', 'wpmozo-addons-lite-for-gutenberg'),
      value: 'right'
    }],
    onChange: newValue => setAttributes({
      backElementAlign: newValue
    })
  }), 'icon' === attributes.backElType && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Style Icon', 'wpmozo-addons-lite-for-gutenberg'),
    checked: attributes.backIconStyle,
    onChange: newValue => setAttributes({
      backIconStyle: newValue
    })
  }), attributes.backIconStyle && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Display Shape Border', 'wpmozo-addons-lite-for-gutenberg'),
    checked: attributes.backIconHasShapeBorder,
    onChange: newValue => setAttributes({
      backIconHasShapeBorder: newValue
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Shape', 'wpmozo-addons-lite-for-gutenberg'),
    value: attributes.backIconShape,
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Square', 'wpmozo-addons-lite-for-gutenberg'),
      value: 'square'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Circle', 'wpmozo-addons-lite-for-gutenberg'),
      value: 'circle'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Hexagon', 'wpmozo-addons-lite-for-gutenberg'),
      value: 'hexagon'
    }],
    onChange: newValue => {
      setAttributes({
        backIconShapeborderRadius: ''
      });
      setAttributes({
        backIconShape: newValue
      });
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoColorPicker, {
    ColorKey: "back",
    props: props,
    ColorTypes: [{
      key: 'IconShapeBackground',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Shape Background Color', 'wpmozo-addons-lite-for-gutenberg')
    }]
  }), attributes.backIconHasShapeBorder && 'hexagon' !== attributes.backIconShape && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoBorder, {
    BorderKey: "backIconShape",
    props: props,
    BorderTypes: 'square' !== attributes.backIconShape ? {
      border: true
    } : {
      border: true,
      radius: true
    }
  })), attributes.backIconHasShapeBorder && 'hexagon' === attributes.backIconShape && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoColorPicker, {
    ColorKey: "back",
    props: props,
    ColorTypes: [{
      key: 'IconShapeBorderColor',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Shape Border Color', 'wpmozo-addons-lite-for-gutenberg')
    }]
  }))))))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('FlipBox Content Alignment', 'wpmozo-addons-lite-for-gutenberg'),
    className: "wpmozo-typography-panel",
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.BaseControl, {
    className: "wpmozo-button-tabs-wrap"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ButtonGroup, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Button, {
    className: "wpmozo-button-tabs-btn",
    isPressed: 'front' === contentAlignType ? true : false,
    onClick: () => setContentAlignType('front')
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Front', 'wpmozo-addons-lite-for-gutenberg')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Button, {
    className: "wpmozo-button-tabs-btn",
    isPressed: 'back' === contentAlignType ? true : false,
    onClick: () => setContentAlignType('back')
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Back', 'wpmozo-addons-lite-for-gutenberg'))), 'front' === contentAlignType && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoAlignment, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Content Alignment', 'wpmozo-addons-lite-for-gutenberg'),
    onChange: newValue => setAttributes({
      frontContentHorAlignment: newValue
    }),
    value: attributes.frontContentHorAlignment
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoAlignment, {
    type: "vertical",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Vertical Alignment', 'wpmozo-addons-lite-for-gutenberg'),
    onChange: newValue => setAttributes({
      frontContentVerAlignment: newValue
    }),
    value: attributes.frontContentVerAlignment
  })), 'back' === contentAlignType && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoAlignment, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Content Alignment', 'wpmozo-addons-lite-for-gutenberg'),
    onChange: newValue => setAttributes({
      backContentHorAlignment: newValue
    }),
    value: attributes.backContentHorAlignment
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoAlignment, {
    type: "vertical",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Vertical Alignment', 'wpmozo-addons-lite-for-gutenberg'),
    onChange: newValue => setAttributes({
      backContentVerAlignment: newValue
    }),
    value: attributes.backContentVerAlignment
  })))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('FlipBox Border', 'wpmozo-addons-lite-for-gutenberg'),
    className: "wpmozo-typography-panel",
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.BaseControl, {
    className: "wpmozo-button-tabs-wrap"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ButtonGroup, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Button, {
    className: "wpmozo-button-tabs-btn",
    isPressed: 'front' === flipboxBorderType ? true : false,
    onClick: () => setFlipboxBorderType('front')
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Front', 'wpmozo-addons-lite-for-gutenberg')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Button, {
    className: "wpmozo-button-tabs-btn",
    isPressed: 'back' === flipboxBorderType ? true : false,
    onClick: () => setFlipboxBorderType('back')
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Back', 'wpmozo-addons-lite-for-gutenberg'))), 'front' === flipboxBorderType && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoBorder, {
    BorderKey: "frontFlipbox",
    props: props
  }), 'back' === flipboxBorderType && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoBorder, {
    BorderKey: "backFlipbox",
    props: props
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Flip Box Elements', 'wpmozo-addons-lite-for-gutenberg'),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.BaseControl, {
    className: "wpmozo-button-tabs-wrap"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ButtonGroup, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Button, {
    className: "wpmozo-button-tabs-btn",
    isPressed: 'front' === elementType ? true : false,
    onClick: () => setElementType('front')
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Front', 'wpmozo-addons-lite-for-gutenberg')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Button, {
    className: "wpmozo-button-tabs-btn",
    isPressed: 'back' === elementType ? true : false,
    onClick: () => setElementType('back')
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Back', 'wpmozo-addons-lite-for-gutenberg'))), 'front' === elementType && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Element Type', 'wpmozo-addons-lite-for-gutenberg'),
    value: attributes.frontElType,
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('None', 'wpmozo-addons-lite-for-gutenberg'),
      value: 'none'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Icon', 'wpmozo-addons-lite-for-gutenberg'),
      value: 'icon'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Image', 'wpmozo-addons-lite-for-gutenberg'),
      value: 'image'
    }],
    onChange: newValue => setAttributes({
      frontElType: newValue
    })
  }), 'icon' === attributes.frontElType && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoIconpicker, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Icon', 'wpmozo-addons-lite-for-gutenberg'),
    iconPickerKey: "frontElIcon",
    props: props,
    value: attributes.frontElIcon,
    onChange: newValue => setAttributes({
      frontElIcon: newValue
    })
  }), 'image' === attributes.frontElType && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoMediaUploader, {
    attrKye: "frontElImage",
    props: props
  })), 'back' === elementType && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Element Type', 'wpmozo-addons-lite-for-gutenberg'),
    value: attributes.backElType,
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('None', 'wpmozo-addons-lite-for-gutenberg'),
      value: 'none'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Icon', 'wpmozo-addons-lite-for-gutenberg'),
      value: 'icon'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Image', 'wpmozo-addons-lite-for-gutenberg'),
      value: 'image'
    }],
    onChange: newValue => setAttributes({
      backElType: newValue
    })
  }), 'icon' === attributes.backElType && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoIconpicker, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Icon', 'wpmozo-addons-lite-for-gutenberg'),
    iconPickerKey: "backElIcon",
    props: props,
    value: attributes.backElIcon,
    onChange: newValue => setAttributes({
      backElIcon: newValue
    })
  }), 'image' === attributes.backElType && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoMediaUploader, {
    attrKye: "backElImage",
    props: props
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Show Button', 'wpmozo-addons-lite-for-gutenberg'),
    checked: attributes.backHasButton,
    onChange: newValue => setAttributes({
      backHasButton: newValue
    })
  }), attributes.backHasButton && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Button Text', 'wpmozo-addons-lite-for-gutenberg'),
    value: attributes.backBtnText,
    onChange: newValue => setAttributes({
      backBtnText: newValue
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Button Url', 'wpmozo-addons-lite-for-gutenberg'),
    value: attributes.backBtnUrl,
    onChange: newValue => setAttributes({
      backBtnUrl: newValue
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoIconpicker, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Button Icon', 'wpmozo-addons-lite-for-gutenberg'),
    iconPickerKey: "backBtnIcon",
    props: props,
    value: attributes.backBtnIcon,
    onChange: newValue => setAttributes({
      backBtnIcon: newValue
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Element Type', 'wpmozo-addons-lite-for-gutenberg'),
    value: attributes.backBtnIconPosition,
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Before', 'wpmozo-addons-lite-for-gutenberg'),
      value: 'before'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('After', 'wpmozo-addons-lite-for-gutenberg'),
      value: 'after'
    }],
    onChange: newValue => setAttributes({
      backBtnIconPosition: newValue
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Show Icon On Hover', 'wpmozo-addons-lite-for-gutenberg'),
    checked: attributes.backBtnIconOnHover,
    onChange: newValue => setAttributes({
      backBtnIconOnHover: newValue
    })
  }))))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('FlipBox Padding', 'wpmozo-addons-lite-for-gutenberg'),
    className: "wpmozo-typography-panel",
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.BaseControl, {
    className: "wpmozo-button-tabs-wrap"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ButtonGroup, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Button, {
    className: "wpmozo-button-tabs-btn",
    isPressed: 'front' === flipboxDimensionsType ? true : false,
    onClick: () => setFlipboxDimensionsType('front')
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Front', 'wpmozo-addons-lite-for-gutenberg')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Button, {
    className: "wpmozo-button-tabs-btn",
    isPressed: 'back' === flipboxDimensionsType ? true : false,
    onClick: () => setFlipboxDimensionsType('back')
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Back', 'wpmozo-addons-lite-for-gutenberg'))), 'front' === flipboxDimensionsType && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoDimensions, {
    DimensionKey: "frontDimensions",
    DimensionsTypes: {
      padding: true
    },
    props: props
  }), 'back' === flipboxDimensionsType && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoDimensions, {
    DimensionKey: "backDimensions",
    DimensionsTypes: {
      padding: true
    },
    props: props
  }))), attributes.backHasButton && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('FlipBox Button', 'wpmozo-addons-lite-for-gutenberg'),
    className: "wpmozo-typography-panel",
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoColorPicker, {
    ColorKey: "back",
    props: props,
    ColorTypes: [{
      key: 'BtnColor',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Color', 'wpmozo-addons-lite-for-gutenberg')
    }, {
      key: 'BtnBackground',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Background', 'wpmozo-addons-lite-for-gutenberg')
    }]
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoTypography, {
    TypographyKey: "backBtn",
    props: props
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoBorder, {
    BorderKey: "backBtn",
    props: props
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoDimensions, {
    DimensionKey: "backBtnDimensions",
    DimensionsTypes: {
      padding: true,
      margin: true
    },
    props: props
  })))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Inspector);

/***/ }),

/***/ "./src/blocks/flip-box/save.js":
/*!*************************************!*\
  !*** ./src/blocks/flip-box/save.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);


const Save = ({
  attributes
}) => {
  const ID = attributes.ID,
    wpmozoCoreFun = window.wpmozo,
    layoutType = 'flip' === attributes.animationType ? ' layout1' : ' layout2';
  let backBtnIcon = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
      className: attributes.backBtnIcon
    }),
    backBtnOnHover = attributes.backBtnIconOnHover ? ' show-on-hover' : '',
    frontHexagonIcon = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "wpmozo-adfgu-hexagon-wrap"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "wpmozo-adfgu-hexagon-shape"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
      className: attributes.frontElIcon
    }))),
    backHexagonIcon = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "wpmozo-adfgu-hexagon-wrap"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "wpmozo-adfgu-hexagon-shape"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
      className: attributes.backElIcon
    })));
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ..._wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save({
      className: 'wpmozo-adfgu-flip-box-main'
    }),
    id: `block-${ID}`
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `wpmozo-adfgu-flip-box-wrap${layoutType}`,
    "flip-direction": attributes.flipDirection
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wpmozo-adfgu-flip-box-side wpmozo-adfgu-flip-box-front"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wpmozo-adfgu-flip-box-inner"
  }, 'none' !== attributes.frontElType && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: 'icon' === attributes.frontElType ? "wpmozo-adfgu-flip-box-icon-wrap" : "wpmozo-adfgu-flip-box-image-wrap"
  }, 'icon' === attributes.frontElType && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, "hexagon" !== attributes.frontIconShape && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
    className: attributes.frontElIcon
  }), "hexagon" === attributes.frontIconShape && frontHexagonIcon), 'image' === attributes.frontElType && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: attributes.frontElImage
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wpmozo-adfgu-flip-box-content-wrap"
  }, !wpmozoCoreFun.wpmozo_is_empty(attributes.frontTitle) && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wpmozo-adfgu-flip-box-heading-wrap"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
    className: "wpmozo-adfgu-flip-box-title",
    tagName: attributes.frontHeadingLavel,
    value: attributes.frontTitle
  })), !wpmozoCoreFun.wpmozo_is_empty(attributes.frontContnet) && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wpmozo-adfgu-flip-box-description"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
    value: attributes.frontContnet
  }))))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wpmozo-adfgu-flip-box-side wpmozo-adfgu-flip-box-back"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wpmozo-adfgu-flip-box-inner"
  }, 'none' !== attributes.backElType && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: 'icon' === attributes.backElType ? "wpmozo-adfgu-flip-box-icon-wrap" : "wpmozo-adfgu-flip-box-image-wrap"
  }, 'icon' === attributes.backElType && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, "hexagon" !== attributes.backIconShape && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
    className: attributes.backElIcon
  }), "hexagon" === attributes.backIconShape && backHexagonIcon), 'image' === attributes.backElType && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: attributes.backElImage
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wpmozo-adfgu-flip-box-content-wrap"
  }, !wpmozoCoreFun.wpmozo_is_empty(attributes.backTitle) && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wpmozo-adfgu-flip-box-heading-wrap"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
    className: "wpmozo-adfgu-flip-box-title",
    tagName: attributes.backHeadingLavel,
    value: attributes.backTitle
  })), !wpmozoCoreFun.wpmozo_is_empty(attributes.backContnet) && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wpmozo-adfgu-flip-box-description"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
    value: attributes.backContnet
  }))), attributes.backHasButton && !wpmozoCoreFun.wpmozo_is_empty(attributes.backBtnText) && !wpmozoCoreFun.wpmozo_is_empty(attributes.backBtnUrl) && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wpmozo-adfgu-flip-box-button-wrap"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wpmozo-adfgu-flip-box-button-wrap-inner"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    className: `wpmozo-adfgu-flip-box-button${backBtnOnHover}`,
    target: "_blank",
    href: attributes.backBtnUrl
  }, !wpmozoCoreFun.wpmozo_is_empty(backBtnIcon) && 'before' === attributes.backBtnIconPosition && backBtnIcon, attributes.backBtnText, !wpmozoCoreFun.wpmozo_is_empty(backBtnIcon) && 'after' === attributes.backBtnIconPosition && backBtnIcon)))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Save);

/***/ }),

/***/ "./src/blocks/flip-box/style.js":
/*!**************************************!*\
  !*** ./src/blocks/flip-box/style.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const Style = ({
  attributes,
  ID,
  clientId
}) => {
  const wpmozoCoreFun = window.wpmozo,
    parent = '#block-' + clientId,
    toConvertStyles = ['globalTitle', 'globalContent', 'frontTitle', 'frontContent', 'backTitle', 'backContent', 'frontIconShape', 'backIconShape', 'frontFlipbox', 'backFlipbox', 'backBtn', 'backBtnDimensions', 'frontDimensions', 'backDimensions'];
  let css = '',
    frontVerticalAlign = attributes.frontContentVerAlignment,
    backVerticalAlign = attributes.backContentVerAlignment,
    convertedStyle = wpmozoCoreFun.convetInlineStyleStr(toConvertStyles, attributes),
    backBtnAddi = convertedStyle.backBtn + convertedStyle.backBtnDimensions;
  if ('top' === attributes.frontContentVerAlignment) {
    frontVerticalAlign = 'flex-start';
  } else if ('bottom' === attributes.frontContentVerAlignment) {
    frontVerticalAlign = 'flex-end';
  }
  if ('top' === attributes.backContentVerAlignment) {
    backVerticalAlign = 'flex-start';
  } else if ('bottom' === attributes.backContentVerAlignment) {
    backVerticalAlign = 'flex-end';
  }
  let allInline = [{
    selector: '.wpmozo-adfgu-flip-box-wrap',
    style: {
      'width': attributes.flipboxWidth
    }
  }, {
    selector: '.wpmozo-adfgu-flip-box-side .wpmozo-adfgu-flip-box-title',
    style: {
      'color': attributes.globalTitleColor
    }
  }, {
    selector: '.wpmozo-adfgu-flip-box-side .wpmozo-adfgu-flip-box-description',
    style: {
      'color': attributes.globalContentColor
    }
  }, {
    selector: '.wpmozo-adfgu-flip-box-front',
    style: {
      'background-color': attributes.frontBackgroundColor,
      'align-items': frontVerticalAlign
    },
    additional: convertedStyle.frontFlipbox
  }, {
    selector: '.wpmozo-adfgu-flip-box-back',
    style: {
      'background-color': attributes.backBackgroundColor,
      'align-items': backVerticalAlign
    },
    additional: convertedStyle.backFlipbox
  }, {
    selector: `
    		.wpmozo-adfgu-flip-box-front .wpmozo-adfgu-flip-box-icon-wrap, 
    		.wpmozo-adfgu-flip-box-front .wpmozo-adfgu-flip-box-title,
    		.wpmozo-adfgu-flip-box-front .wpmozo-adfgu-flip-box-description`,
    style: {
      'text-align': attributes.frontContentHorAlignment
    }
  }, {
    selector: `
    		.wpmozo-adfgu-flip-box-back .wpmozo-adfgu-flip-box-icon-wrap, 
    		.wpmozo-adfgu-flip-box-back .wpmozo-adfgu-flip-box-title,
    		.wpmozo-adfgu-flip-box-back .wpmozo-adfgu-flip-box-description, 
    		.wpmozo-adfgu-flip-box-back .wpmozo-adfgu-flip-box-button-wrap`,
    style: {
      'text-align': attributes.backContentHorAlignment
    }
  }, {
    selector: '.wpmozo-adfgu-flip-box-side .wpmozo-adfgu-flip-box-title',
    additional: convertedStyle.globalTitle
  }, {
    selector: '.wpmozo-adfgu-flip-box-side .wpmozo-adfgu-flip-box-description',
    additional: convertedStyle.globalContent
  }, {
    selector: '.wpmozo-adfgu-flip-box-front .wpmozo-adfgu-flip-box-title',
    style: {
      'color': attributes.frontTitleColor
    },
    additional: convertedStyle.frontTitle
  }, {
    selector: '.wpmozo-adfgu-flip-box-front .wpmozo-adfgu-flip-box-description',
    style: {
      'color': attributes.frontContentColor
    },
    additional: convertedStyle.frontContent
  }, {
    selector: '.wpmozo-adfgu-flip-box-back .wpmozo-adfgu-flip-box-title',
    style: {
      'color': attributes.backTitleColor
    },
    additional: convertedStyle.backTitle
  }, {
    selector: '.wpmozo-adfgu-flip-box-back .wpmozo-adfgu-flip-box-description',
    style: {
      'color': attributes.backContentColor
    },
    additional: convertedStyle.backContent
  }, {
    selector: '.wpmozo-adfgu-flip-box-front .wpmozo-adfgu-flip-box-inner',
    additional: convertedStyle.frontDimensions
  }, {
    selector: '.wpmozo-adfgu-flip-box-back .wpmozo-adfgu-flip-box-inner',
    additional: convertedStyle.backDimensions
  }];
  if (attributes.depth3dEffect) {
    allInline.push({
      selector: '.wpmozo-adfgu-flip-box-side .wpmozo-adfgu-flip-box-inner',
      style: {
        'transform': 'translateZ(50px) scale(0.95)'
      }
    });
  }
  if ('flip' === attributes.animationType) {
    if (attributes.shakeOnFlip) {
      allInline.push({
        selector: '.wpmozo-adfgu-flip-box-wrap.layout1 .wpmozo-adfgu-flip-box-side',
        style: {
          'transition': `transform ${attributes.flipSpeed}ms cubic-bezier(0.3, 0.9, 0.40, 1.3)`,
          '-moz-transition': `transform ${attributes.flipSpeed}ms cubic-bezier(0.3, 0.9, 0.40, 1.3)`,
          '-webkit-transition': `transform ${attributes.flipSpeed}ms cubic-bezier(0.3, 0.9, 0.40, 1.3)`
        }
      });
    } else {
      allInline.push({
        selector: '.wpmozo-adfgu-flip-box-wrap.layout1 .wpmozo-adfgu-flip-box-side',
        style: {
          'transition': `transform ${attributes.flipSpeed}ms cubic-bezier(.5, .3, .3, 1)`,
          '-moz-transition': `transform ${attributes.flipSpeed}ms cubic-bezier(.5, .3, .3, 1)`,
          '-webkit-transition': `transform ${attributes.flipSpeed}ms cubic-bezier(.5, .3, .3, 1)`
        }
      });
    }
  } else {
    allInline.push({
      selector: '.wpmozo-adfgu-flip-box-wrap.layout2',
      style: {
        'transition': `transform ${attributes.flipSpeed}ms ease`,
        '-moz-transition': `transform ${attributes.flipSpeed}ms ease`,
        '-webkit-transition': `transform ${attributes.flipSpeed}ms ease`
      }
    });
  }
  if ('top' === attributes.frontElementAlign) {
    allInline.push({
      selector: '.wpmozo-adfgu-flip-box-front .wpmozo-adfgu-flip-box-inner',
      style: {
        'flex-direction': 'column'
      }
    });
  }
  if ('left' === attributes.frontElementAlign) {
    allInline.push({
      selector: `
	    		.wpmozo-adfgu-flip-box-front .wpmozo-adfgu-flip-box-icon-wrap,
	    		.wpmozo-adfgu-flip-box-front .wpmozo-adfgu-flip-box-image-wrap`,
      style: {
        'margin-right': '20px'
      }
    }, {
      selector: '.wpmozo-adfgu-flip-box-front .wpmozo-adfgu-flip-box-content-wrap',
      style: {
        'width': 'calc( 100% - 20px )'
      }
    });
  }
  if ('right' === attributes.frontElementAlign) {
    allInline.push({
      selector: '.wpmozo-adfgu-flip-box-front .wpmozo-adfgu-flip-box-inner',
      style: {
        'flex-direction': 'row-reverse'
      }
    }, {
      selector: `
	    		.wpmozo-adfgu-flip-box-front .wpmozo-adfgu-flip-box-icon-wrap,
	    		.wpmozo-adfgu-flip-box-front .wpmozo-adfgu-flip-box-image-wrap`,
      style: {
        'margin-left': '20px'
      }
    }, {
      selector: '.wpmozo-adfgu-flip-box-front .wpmozo-adfgu-flip-box-content-wrap',
      style: {
        'width': 'calc( 100% - 20px )'
      }
    });
  }
  if ('top' === attributes.backElementAlign) {
    allInline.push({
      selector: '.wpmozo-adfgu-flip-box-back .wpmozo-adfgu-flip-box-inner',
      style: {
        'flex-direction': 'column'
      }
    });
  }
  if ('left' === attributes.backElementAlign) {
    allInline.push({
      selector: `
	    		.wpmozo-adfgu-flip-box-back .wpmozo-adfgu-flip-box-icon-wrap,
	    		.wpmozo-adfgu-flip-box-back .wpmozo-adfgu-flip-box-image-wrap`,
      style: {
        'margin-right': '20px'
      }
    }, {
      selector: '.wpmozo-adfgu-flip-box-back .wpmozo-adfgu-flip-box-content-wrap',
      style: {
        'width': 'calc( 100% - 20px )'
      }
    });
  }
  if ('right' === attributes.backElementAlign) {
    allInline.push({
      selector: '.wpmozo-adfgu-flip-box-back .wpmozo-adfgu-flip-box-inner',
      style: {
        'flex-direction': 'row-reverse'
      }
    }, {
      selector: `
	    		.wpmozo-adfgu-flip-box-back .wpmozo-adfgu-flip-box-icon-wrap,
	    		.wpmozo-adfgu-flip-box-back .wpmozo-adfgu-flip-box-image-wrap`,
      style: {
        'margin-left': '20px'
      }
    }, {
      selector: '.wpmozo-adfgu-flip-box-back .wpmozo-adfgu-flip-box-content-wrap',
      style: {
        'width': 'calc( 100% - 20px )'
      }
    });
  }
  if ('icon' === attributes.frontElType) {
    allInline.push({
      selector: '.wpmozo-adfgu-flip-box-front .wpmozo-adfgu-flip-box-icon-wrap i',
      style: {
        'color': attributes.frontIconColor,
        'font-size': attributes.frontIconSize
      }
    }, attributes.frontIconStyle && 'hexagon' !== attributes.frontIconShape ? {
      selector: '.wpmozo-adfgu-flip-box-front .wpmozo-adfgu-flip-box-icon-wrap i',
      style: {
        'padding': '16px',
        'background-color': attributes.frontIconShapeBackground,
        ...('square' === attributes.frontIconShape && {
          'border-radius': attributes.frontIconShapeborderRadius
        }),
        ...('circle' === attributes.frontIconShape && {
          'border-radius': '50%'
        })
      },
      additional: convertedStyle.frontIconShape
    } : {}, attributes.frontIconStyle && 'hexagon' === attributes.frontIconShape ? {
      selector: '.wpmozo-adfgu-flip-box-front .wpmozo-adfgu-hexagon-wrap:before',
      style: {
        'background-color': attributes.frontIconShapeBackground
      }
    } : {}, attributes.frontIconStyle && attributes.frontIconHasShapeBorder && 'hexagon' === attributes.frontIconShape ? {
      selector: '.wpmozo-adfgu-flip-box-front .wpmozo-adfgu-hexagon-wrap',
      style: {
        'background-color': attributes.frontIconShapeBorderColor
      }
    } : {});
  }
  if ('icon' === attributes.backElType) {
    allInline.push({
      selector: '.wpmozo-adfgu-flip-box-back .wpmozo-adfgu-flip-box-icon-wrap i',
      style: {
        'color': attributes.backIconColor,
        'font-size': attributes.backIconSize
      }
    }, attributes.backIconStyle && 'hexagon' !== attributes.backIconShape ? {
      selector: '.wpmozo-adfgu-flip-box-back .wpmozo-adfgu-flip-box-icon-wrap i',
      style: {
        'padding': '16px',
        'background-color': attributes.backIconShapeBackground,
        ...('circle' === attributes.backIconShape && {
          'border-radius': '50%'
        })
      },
      additional: convertedStyle.backIconShape
    } : {}, attributes.backIconStyle && 'hexagon' === attributes.backIconShape ? {
      selector: '.wpmozo-adfgu-flip-box-back .wpmozo-adfgu-hexagon-wrap:before',
      style: {
        'background-color': attributes.backIconShapeBackground
      }
    } : {}, attributes.backIconStyle && attributes.backIconHasShapeBorder && 'hexagon' === attributes.backIconShape ? {
      selector: '.wpmozo-adfgu-flip-box-back .wpmozo-adfgu-hexagon-wrap',
      style: {
        'background-color': attributes.backIconShapeBorderColor
      }
    } : {});
  }
  if ('image' === attributes.frontElType) {
    allInline.push({
      selector: '.wpmozo-adfgu-flip-box-front .wpmozo-adfgu-flip-box-image-wrap img',
      style: {
        'width': attributes.frontImageWidth,
        'height': attributes.frontImageWidth,
        'object-fit': 'cover',
        'display': 'block',
        ...('left' === attributes.frontImageAlignment && {
          'margin-right': 'auto'
        }),
        ...('center' === attributes.frontImageAlignment && {
          'margin-left': 'auto',
          'margin-right': 'auto'
        }),
        ...('right' === attributes.frontImageAlignment && {
          'margin-left': 'auto'
        })
      }
    });
  }
  if ('image' === attributes.backElType) {
    allInline.push({
      selector: '.wpmozo-adfgu-flip-box-back .wpmozo-adfgu-flip-box-image-wrap img',
      style: {
        'width': attributes.backImageWidth,
        'height': attributes.backImageWidth,
        'object-fit': 'cover',
        'display': 'block',
        ...('left' === attributes.backImageAlignment && {
          'margin-right': 'auto'
        }),
        ...('center' === attributes.backImageAlignment && {
          'margin-left': 'auto',
          'margin-right': 'auto'
        }),
        ...('right' === attributes.backImageAlignment && {
          'margin-left': 'auto'
        })
      }
    });
  }
  if (attributes.backHasButton) {
    allInline.push({
      selector: '.wpmozo-adfgu-flip-box-button',
      style: {
        'color': attributes.backBtnColor,
        'background-color': attributes.backBtnBackground
      },
      additional: backBtnAddi
    });
  }
  let generateStyle = wpmozoCoreFun.wpmozo_generate_style(allInline);
  if (!wpmozoCoreFun.wpmozo_is_empty(generateStyle)) {
    css += `
	    	${parent} {
	    		${generateStyle}
	    	}
	    `;
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("style", {
    className: "wpmozo-dynamic-style",
    "data-id": ID,
    "data-client-id": clientId
  }, css);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Style);

/***/ }),

/***/ "./src/blocks/floating-image-item/attributes.js":
/*!******************************************************!*\
  !*** ./src/blocks/floating-image-item/attributes.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);

const attributes = {
  ID: {
    type: "string"
  },
  image: {
    type: "object"
  },
  imagewidth: {
    type: "string"
  },
  imageheight: {
    type: "string"
  },
  altText: {
    type: "string"
  },
  horizontalAlign: {
    type: "string"
  },
  verticalAlign: {
    type: "string"
  },
  animationEffect: {
    type: "string",
    default: "no_effect"
  },
  animationDelay: {
    type: "number",
    default: 0
  },
  animationDuration: {
    type: "number",
    default: 4000
  },
  animationRepeat: {
    type: "string",
    default: "infinite"
  },
  speedCurve: {
    type: "string"
  },
  imageborderRadius: {
    type: "string"
  },
  imageborder: {
    type: "object"
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (attributes);

/***/ }),

/***/ "./src/blocks/floating-image-item/edit.js":
/*!************************************************!*\
  !*** ./src/blocks/floating-image-item/edit.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _inspector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inspector */ "./src/blocks/floating-image-item/inspector.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style */ "./src/blocks/floating-image-item/style.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);






const Edit = props => {
  const attributes = props.attributes,
    setAttributes = props.setAttributes,
    clientId = props.clientId,
    ID = window.wpmozo.getIdByClientid(clientId),
    altText = !window.wpmozo.wpmozo_is_empty(attributes.altText) ? attributes.altText : 'alt';
  attributes.ID = ID;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_inspector__WEBPACK_IMPORTED_MODULE_1__["default"], {
    ...props
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "floating-image-item",
    id: `block-${clientId}`
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_style__WEBPACK_IMPORTED_MODULE_2__["default"], {
    attributes: attributes,
    ID: ID,
    clientId: clientId
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    className: "floating-image",
    src: attributes.image.url,
    alt: altText
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Edit);

/***/ }),

/***/ "./src/blocks/floating-image-item/index.js":
/*!*************************************************!*\
  !*** ./src/blocks/floating-image-item/index.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./attributes */ "./src/blocks/floating-image-item/attributes.js");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./src/blocks/floating-image-item/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ "./src/blocks/floating-image-item/save.js");
/* harmony import */ var _floating_image_icon_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../floating-image/icon.js */ "./src/blocks/floating-image/icon.js");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__);






(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__.registerBlockType)('wpmozo/floating-image-item', {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Floating Image Item', 'wpmozo-addons-lite-for-gutenberg'),
  icon: _floating_image_icon_js__WEBPACK_IMPORTED_MODULE_3__["default"],
  apiVersion: 2,
  category: 'wpmozo',
  parent: ['wpmozo/floating-image'],
  attributes: _attributes__WEBPACK_IMPORTED_MODULE_0__["default"],
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_2__["default"]
});

/***/ }),

/***/ "./src/blocks/floating-image-item/inspector.js":
/*!*****************************************************!*\
  !*** ./src/blocks/floating-image-item/inspector.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/index */ "./src/components/index.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);






const Inspector = props => {
  const attributes = props.attributes,
    setAttributes = props.setAttributes;
  props = Object.assign({}, props, {
    preAttributes: {}
  });
  const [contentType, setContentType] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_5__.useState)('front');
  const floatingImageEffects = [{
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Up Down', 'wpmozo-addons-lite-for-gutenberg'),
    value: 'up_down'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Left Right', 'wpmozo-addons-lite-for-gutenberg'),
    value: 'left_right'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('No Effect', 'wpmozo-addons-lite-for-gutenberg'),
    value: 'no_effect'
  }];
  const speedCurveOptions = [{
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Ease-In-Out', 'wpmozo-addons-lite-for-gutenberg'),
    value: 'ease-in-out'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Ease', 'wpmozo-addons-lite-for-gutenberg'),
    value: 'ease'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Ease-In', 'wpmozo-addons-lite-for-gutenberg'),
    value: 'ease-in'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Ease-Out', 'wpmozo-addons-lite-for-gutenberg'),
    value: 'ease-out'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Linear', 'wpmozo-addons-lite-for-gutenberg'),
    value: 'linear'
  }];
  const animationRepeat = [{
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Infinite', 'wpmozo-addons-lite-for-gutenberg'),
    value: 'infinite'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Initial', 'wpmozo-addons-lite-for-gutenberg'),
    value: 'initial'
  }];
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, {
    key: "controls"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('General Settings', 'wpmozo-addons-lite-for-gutenberg'),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoMediaUploader, {
    attrKye: "image",
    props: props,
    imageSrc: attributes.image.url,
    onSelect: media => setAttributes({
      image: media
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Alt Text', 'wpmozo-addons-lite-for-gutenberg'),
    value: attributes.altText,
    onChange: newValue => setAttributes({
      altText: newValue
    })
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, {
    key: "styles",
    group: "styles"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Image Position', 'wpmozo-addons-lite-for-gutenberg'),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.__experimentalUnitControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Horizontal Align', 'wpmozo-addons-lite-for-gutenberg'),
    value: attributes.horizontalAlign,
    onChange: newValue => setAttributes({
      horizontalAlign: newValue
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.__experimentalUnitControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Vertical Align', 'wpmozo-addons-lite-for-gutenberg'),
    value: attributes.verticalAlign,
    onChange: newValue => setAttributes({
      verticalAlign: newValue
    })
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Image Animation', 'wpmozo-addons-lite-for-gutenberg'),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Floating Effect', 'wpmozo-addons-lite-for-gutenberg'),
    value: attributes.animationEffect,
    options: floatingImageEffects,
    onChange: newValue => setAttributes({
      animationEffect: newValue
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Animation Delay', 'wpmozo-addons-lite-for-gutenberg'),
    value: attributes.animationDelay,
    onChange: newValue => setAttributes({
      animationDelay: newValue
    }),
    min: 0,
    step: 1,
    max: 5000
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Animation Duration', 'wpmozo-addons-lite-for-gutenberg'),
    value: attributes.animationDuration,
    onChange: newValue => setAttributes({
      animationDuration: newValue
    }),
    min: 0,
    step: 1,
    max: 9000
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Animation Speed Curve', 'wpmozo-addons-lite-for-gutenberg'),
    value: attributes.speedCurve,
    options: speedCurveOptions,
    onChange: newValue => setAttributes({
      speedCurve: newValue
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Animation Repeat', 'wpmozo-addons-lite-for-gutenberg'),
    value: attributes.animationRepeat,
    options: animationRepeat,
    onChange: newValue => setAttributes({
      animationRepeat: newValue
    })
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Image Sizing', 'wpmozo-addons-lite-for-gutenberg'),
    className: "wpmozo-typography-panel",
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoSize, {
    SizeKey: "image",
    props: props
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Image Border', 'wpmozo-addons-lite-for-gutenberg'),
    className: "wpmozo-typography-panel",
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoBorder, {
    BorderKey: "image",
    props: props
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Inspector);

/***/ }),

/***/ "./src/blocks/floating-image-item/save.js":
/*!************************************************!*\
  !*** ./src/blocks/floating-image-item/save.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);


const Save = ({
  attributes
}) => {
  const ID = attributes.ID,
    altText = !window.wpmozo.wpmozo_is_empty(attributes.altText) ? attributes.altText : 'alt';
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "floating-image-item",
    id: `block-${ID}`
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    className: "floating-image",
    src: attributes.image.url,
    alt: altText
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Save);

/***/ }),

/***/ "./src/blocks/floating-image-item/style.js":
/*!*************************************************!*\
  !*** ./src/blocks/floating-image-item/style.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const Style = ({
  attributes,
  ID,
  clientId
}) => {
  const parent = '#block-' + clientId,
    wpmozoCoreFun = window.wpmozo,
    wpmozo_is_empty = wpmozoCoreFun.wpmozo_is_empty,
    toConvertStyles = ['image'];
  let css = '',
    convertedStyle = wpmozoCoreFun.convetInlineStyleStr(toConvertStyles, attributes);
  let allInline = [{
    selector: '.floating-image',
    style: {
      'width': attributes.imagewidth,
      'height': attributes.imageheight
    },
    additional: convertedStyle.image
  }];
  let generateStyle = wpmozoCoreFun.wpmozo_generate_style([{
    selector: parent,
    style: {
      'top': attributes.verticalAlign,
      'left': attributes.horizontalAlign,
      'animation-name': `wpmozo_float_${attributes.animationEffect}`,
      'animation-duration': attributes.animationDuration + 'ms',
      'animation-direction': 'alternate',
      'animation-iteration-count': attributes.animationRepeat,
      'animation-timing-function': attributes.speedCurve,
      'animation-delay': attributes.animationDelay + 'ms'
    }
  }]);
  css += generateStyle;
  generateStyle = wpmozoCoreFun.wpmozo_generate_style(allInline);
  if (!wpmozoCoreFun.wpmozo_is_empty(generateStyle)) {
    css += `
            ${parent} {
                ${generateStyle}
            }
        `;
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("style", {
    className: "wpmozo-dynamic-style",
    "data-id": ID,
    "data-client-id": clientId
  }, css);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Style);

/***/ }),

/***/ "./src/blocks/floating-image/attributes.js":
/*!*************************************************!*\
  !*** ./src/blocks/floating-image/attributes.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);

const attributes = {
  ID: {
    type: "string"
  },
  images: {
    type: "array"
  },
  containerHeight: {
    type: "string",
    default: "450px"
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (attributes);

/***/ }),

/***/ "./src/blocks/floating-image/edit.js":
/*!*******************************************!*\
  !*** ./src/blocks/floating-image/edit.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _inspector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inspector */ "./src/blocks/floating-image/inspector.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style */ "./src/blocks/floating-image/style.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__);







const Edit = props => {
  const wpmozoCoreFun = window.wpmozo,
    attributes = props.attributes,
    setAttributes = props.setAttributes,
    clientId = props.clientId,
    ID = window.wpmozo.getIdByClientid(clientId),
    blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.useBlockProps)();
  attributes.ID = ID;
  let innerBlocks = [];
  if (!wpmozoCoreFun.wpmozo_is_empty(attributes.images)) {
    attributes.images.map(image => {
      innerBlocks.push(['wpmozo/floating-image-item', {
        image: image
      }]);
    });
  }
  const innerBlocksProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.useInnerBlocksProps)(blockProps, {
    allowedBlocks: ['wpmozo/floating-image-item'],
    template: innerBlocks
  });
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.Fragment, null, wpmozoCoreFun.wpmozo_is_empty(attributes.images) && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.MediaPlaceholder, {
    multiple: true,
    gallery: false,
    onSelect: media => setAttributes({
      images: media
    }),
    onFilesPreUpload: media => setAttributes({
      images: media
    }),
    onSelectURL: false,
    allowedTypes: ['-', 'image'],
    labels: {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Add Images', 'wpmozo-addons-lite-for-gutenberg')
    },
    accept: "image/*"
  }), !wpmozoCoreFun.wpmozo_is_empty(innerBlocks) && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_inspector__WEBPACK_IMPORTED_MODULE_1__["default"], {
    ...props
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...blockProps,
    id: `block-${clientId}`
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_style__WEBPACK_IMPORTED_MODULE_2__["default"], {
    attributes: attributes,
    ID: ID,
    clientId: clientId
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wpmozo-adfgu-floating-image-wrapper"
  }, innerBlocksProps.children))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Edit);

/***/ }),

/***/ "./src/blocks/floating-image/icon.js":
/*!*******************************************!*\
  !*** ./src/blocks/floating-image/icon.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const Icon = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  version: "1.1",
  width: "1024",
  height: "1024",
  viewBox: "0 0 1024 1024"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
  id: "icomoon-ignore"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  fill: "#000",
  d: "M635.733 185.6h-247.467c-106.667 0-192 85.333-192 192v270.933c0 106.667 85.333 192 192 192h249.6c106.667 0 192-85.333 192-192v-270.933c-2.133-106.667-87.467-192-194.133-192zM635.733 795.733h-247.467c-70.4 0-128-49.067-145.067-113.067l185.6-183.467 121.6 142.933c8.533 10.667 23.467 10.667 32 0l74.667-91.733 123.733 132.267c-14.933 64-74.667 113.067-145.067 113.067zM785.067 622.933l-110.933-121.6c-8.533-10.667-23.467-10.667-32 0l-76.8 91.733-119.467-140.8c-8.533-10.667-23.467-10.667-32 0l-174.933 174.933v-249.6c0-83.2 66.133-149.333 149.333-149.333h249.6c83.2 0 149.333 66.133 149.333 149.333v245.333z"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  fill: "#000",
  d: "M582.4 300.8c-32 0-59.733 25.6-59.733 59.733 0 32 25.6 59.733 59.733 59.733 32 0 59.733-25.6 59.733-59.733s-27.733-59.733-59.733-59.733zM582.4 386.133c-14.933 0-27.733-12.8-27.733-27.733s12.8-27.733 27.733-27.733 27.733 12.8 27.733 27.733c0 14.933-12.8 27.733-27.733 27.733z"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  fill: "#000",
  d: "M650.667 96h-277.333c-12.8 0-21.333-8.533-21.333-21.333v0c0-12.8 8.533-21.333 21.333-21.333h277.333c12.8 0 21.333 8.533 21.333 21.333v0c0 12.8-8.533 21.333-21.333 21.333z"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  fill: "#000",
  d: "M650.667 970.667h-277.333c-12.8 0-21.333-8.533-21.333-21.333v0c0-12.8 8.533-21.333 21.333-21.333h277.333c12.8 0 21.333 8.533 21.333 21.333v0c0 12.8-8.533 21.333-21.333 21.333z"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  fill: "#000",
  d: "M155.733 433.067c-2.133 2.133-6.4 4.267-8.533 4.267-4.267 0-6.4-2.133-8.533-4.267l-36.267-36.267v264.533c0 8.533-6.4 17.067-17.067 17.067s-17.067-6.4-17.067-17.067v-264.533l-36.267 36.267c-4.267 4.267-12.8 4.267-19.2 0-2.133-2.133-4.267-6.4-4.267-8.533 0-4.267 2.133-6.4 4.267-8.533l61.867-61.867c4.267-6.4 12.8-6.4 19.2 0l61.867 61.867c6.4 2.133 6.4 10.667 0 17.067z"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  fill: "#000",
  d: "M1009.067 610.133l-61.867 61.867c-4.267 6.4-12.8 6.4-19.2 0l-61.867-61.867c-2.133-2.133-4.267-6.4-4.267-8.533 0-4.267 2.133-6.4 4.267-8.533 6.4-4.267 12.8-4.267 19.2 0l36.267 36.267v-264.533c0-8.533 6.4-17.067 17.067-17.067s17.067 6.4 17.067 17.067v264.533l36.267-36.267c2.133-2.133 6.4-4.267 8.533-4.267 4.267 0 6.4 2.133 8.533 4.267 6.4 4.267 6.4 12.8 0 17.067z"
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Icon);

/***/ }),

/***/ "./src/blocks/floating-image/index.js":
/*!********************************************!*\
  !*** ./src/blocks/floating-image/index.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./attributes */ "./src/blocks/floating-image/attributes.js");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./src/blocks/floating-image/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ "./src/blocks/floating-image/save.js");
/* harmony import */ var _icon_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icon.js */ "./src/blocks/floating-image/icon.js");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__);






(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__.registerBlockType)('wpmozo/floating-image', {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Floating Image', 'wpmozo-addons-lite-for-gutenberg'),
  icon: _icon_js__WEBPACK_IMPORTED_MODULE_3__["default"],
  apiVersion: 2,
  category: 'wpmozo',
  keywords: ['wpmozo', 'floating-image', 'floating', 'image'],
  attributes: _attributes__WEBPACK_IMPORTED_MODULE_0__["default"],
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_2__["default"]
});

/***/ }),

/***/ "./src/blocks/floating-image/inspector.js":
/*!************************************************!*\
  !*** ./src/blocks/floating-image/inspector.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);




const Inspector = props => {
  const attributes = props.attributes,
    setAttributes = props.setAttributes;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, {
    key: "controls"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Container', 'wpmozo-addons-lite-for-gutenberg'),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.HeightControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Container Height', 'wpmozo-addons-lite-for-gutenberg'),
    value: attributes.containerHeight,
    onChange: newValue => setAttributes({
      containerHeight: newValue
    })
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Inspector);

/***/ }),

/***/ "./src/blocks/floating-image/save.js":
/*!*******************************************!*\
  !*** ./src/blocks/floating-image/save.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);


const Save = ({
  attributes
}) => {
  const wpmozoCoreFun = window.wpmozo,
    ID = attributes.ID,
    blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save();
  let innerBlocks = [],
    innerBlocksProps = null;
  if (!wpmozoCoreFun.wpmozo_is_empty(attributes.images)) {
    attributes.images.map(image => {
      innerBlocks.push(['wpmozo/floating-image-item', {
        image: image
      }]);
    });
    innerBlocksProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useInnerBlocksProps.save(blockProps, {
      allowedBlocks: ['wpmozo/floating-image-item'],
      template: innerBlocks
    });
  }
  if (wpmozoCoreFun.wpmozo_is_empty(innerBlocks)) {
    return null;
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...innerBlocksProps,
    id: `block-${ID}`
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wpmozo-adfgu-floating-image-wrapper"
  }, innerBlocksProps.children));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Save);

/***/ }),

/***/ "./src/blocks/floating-image/style.js":
/*!********************************************!*\
  !*** ./src/blocks/floating-image/style.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const Style = ({
  attributes,
  ID,
  clientId
}) => {
  const parent = '#block-' + clientId,
    toConvertStyles = [],
    wpmozoCoreFun = window.wpmozo;
  let css = '';
  let allInline = [{
    selector: '.wpmozo-adfgu-floating-image-wrapper',
    style: {
      'height': attributes.containerHeight
    }
  }, {
    selector: '.floating-image-item img',
    style: {
      'max-height': attributes.containerHeight
    }
  }];
  let generateStyle = wpmozoCoreFun.wpmozo_generate_style(allInline);
  if (!wpmozoCoreFun.wpmozo_is_empty(generateStyle)) {
    css += `
            ${parent} {
                ${generateStyle}
            }
        `;
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("style", {
    className: "wpmozo-dynamic-style",
    "data-id": ID,
    "data-client-id": clientId
  }, css);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Style);

/***/ }),

/***/ "./src/blocks/interactive-image-card/attributes.js":
/*!*********************************************************!*\
  !*** ./src/blocks/interactive-image-card/attributes.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);

const attributes = {
  ID: {
    type: "string"
  },
  title: {
    type: "string",
    default: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Image Card Title', 'wpmozo-addons-lite-for-gutenberg')
  },
  content: {
    type: "string",
    default: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Your content goes here. Edit this text inline or in the widget Content settings. You can also style every aspect of this content in the widget Design settings.', 'wpmozo-addons-lite-for-gutenberg')
  },
  backImage: {
    type: "string"
  },
  layout: {
    type: "string",
    default: "lily"
  },
  imageOpacity: {
    type: "number",
    default: 0.7
  },
  layoutborder: {
    type: "object",
    default: {
      color: "#000000",
      width: "1px",
      style: "solid"
    }
  },
  overlayColor: {
    type: "string"
  },
  titleLavel: {
    type: "string",
    default: "h2"
  },
  titleNormalColor: {
    type: "string",
    default: "#222222"
  },
  titleHoverColor: {
    type: "string",
    default: "#000000"
  },
  titleNormalFontSize: {
    type: "string"
  },
  titleNormalFontAppearance: {
    type: "object",
    fontStyle: {
      type: "string"
    },
    fontWeight: {
      type: "string"
    },
    default: {
      fontStyle: "",
      fontWeight: ""
    }
  },
  titleNormalLetterSpacing: {
    type: "string"
  },
  titleNormalDecoration: {
    type: "string"
  },
  titleNormalLetterCase: {
    type: "string"
  },
  titleNormalLineHeight: {
    type: "string"
  },
  titleHoverFontSize: {
    type: "string"
  },
  titleHoverFontAppearance: {
    type: "object",
    fontStyle: {
      type: "string"
    },
    fontWeight: {
      type: "string"
    },
    default: {
      fontStyle: "",
      fontWeight: ""
    }
  },
  titleHoverLetterSpacing: {
    type: "string"
  },
  titleHoverDecoration: {
    type: "string"
  },
  titleHoverLetterCase: {
    type: "string"
  },
  titleHoverLineHeight: {
    type: "string"
  },
  titleAlign: {
    type: "string",
    default: "center"
  },
  contentColor: {
    type: "string",
    default: "#222222"
  },
  contentFontSize: {
    type: "string"
  },
  contentFontAppearance: {
    type: "object",
    fontStyle: {
      type: "string"
    },
    fontWeight: {
      type: "string"
    },
    default: {
      fontStyle: "",
      fontWeight: ""
    }
  },
  contentLetterSpacing: {
    type: "string"
  },
  contentDecoration: {
    type: "string"
  },
  contentLetterCase: {
    type: "string"
  },
  contentLineHeight: {
    type: "string"
  },
  contentAlign: {
    type: "string",
    default: "center"
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (attributes);

/***/ }),

/***/ "./src/blocks/interactive-image-card/edit.js":
/*!***************************************************!*\
  !*** ./src/blocks/interactive-image-card/edit.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _inspector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inspector */ "./src/blocks/interactive-image-card/inspector.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style */ "./src/blocks/interactive-image-card/style.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__);






const WPMozoEditorObj = wpmozo_adfgu_editor_object;
const Edit = props => {
  const attributes = props.attributes,
    clientId = props.clientId,
    ID = window.wpmozo.getIdByClientid(clientId),
    setAttributes = props.setAttributes,
    blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.useBlockProps)({
      className: 'wpmozo-adfgu-interactive-image-card-main'
    });
  let backImage = attributes.backImage ? attributes.backImage : WPMozoEditorObj.placeholderImg;
  attributes.ID = ID;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_inspector__WEBPACK_IMPORTED_MODULE_1__["default"], {
    ...props
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_style__WEBPACK_IMPORTED_MODULE_2__["default"], {
    attributes: attributes,
    ID: ID,
    clientId: clientId
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...blockProps
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wpmozo-adfgu-interactive-image-card-wrap wpmozo-editor"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("figure", {
    className: `effect-${attributes.layout}`
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    className: "wpmozo-adfgu-interactive-image-card-image",
    src: backImage
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("figcaption", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wpmozo-adfgu-interactive-image-card-inner"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.RichText, {
    className: "wpmozo-adfgu-interactive-image-card-title",
    tagName: attributes.titleLavel,
    value: attributes.title,
    onChange: newValue => setAttributes({
      title: newValue
    }),
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Image Card Title', 'wpmozo-addons-lite-for-gutenberg')
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.RichText, {
    className: "wpmozo-adfgu-interactive-image-card-content",
    tagName: "div",
    value: attributes.content,
    onChange: newValue => setAttributes({
      content: newValue
    }),
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Your content goes here. Edit this text inline or in the widget Content settings. You can also style every aspect of this content in the widget Design settings.', 'wpmozo-addons-lite-for-gutenberg')
  })))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Edit);

/***/ }),

/***/ "./src/blocks/interactive-image-card/icon.js":
/*!***************************************************!*\
  !*** ./src/blocks/interactive-image-card/icon.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const Icon = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  version: "1.1",
  width: "1024",
  height: "1024",
  viewBox: "0 0 1024 1024"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
  id: "icomoon-ignore"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  fill: "#000",
  d: "M757.333 10.667h-490.667c-140.8 0-256 115.2-256 256v490.667c0 140.8 115.2 256 256 256h315.733l-21.333-42.667h-294.4c-117.333 0-213.333-96-213.333-213.333v-183.467h315.733l-2.133-42.667h-313.6v-23.467l345.6-262.4 181.333 181.333c4.267 4.267 10.667 6.4 14.933 6.4s10.667-2.133 14.933-4.267l155.733-136.533 204.8 170.667v68.267h-328.533l55.467 42.667h273.067v183.467c0 98.133-66.133 179.2-155.733 204.8l27.733 36.267c100.267-34.133 170.667-130.133 170.667-241.067v-490.667c0-140.8-115.2-256-256-256v0zM53.333 454.4v-187.733c0-117.333 96-213.333 213.333-213.333h490.667c117.333 0 213.333 96 213.333 213.333v140.8l-189.867-157.867c-4.267-4.267-8.533-4.267-12.8-4.267s-10.667 2.133-14.933 4.267l-155.733 134.4-181.333-181.333c-4.267-4.267-8.533-6.4-14.933-6.4-4.267 0-8.533 2.133-12.8 4.267l-334.933 253.867z"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  fill: "#000",
  d: "M375.467 686.933h-183.467c-10.667 0-21.333 8.533-21.333 21.333 0 10.667 10.667 21.333 21.333 21.333h185.6l-2.133-42.667z"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  fill: "#000",
  d: "M379.733 812.8h-187.733c-10.667 0-21.333 10.667-21.333 21.333v0c0 10.667 10.667 21.333 21.333 21.333h189.867l-2.133-42.667z"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  fill: "#000",
  d: "M612.267 121.6c-10.667 4.267-19.2 12.8-23.467 23.467-23.467 49.067 19.2 96 66.133 85.333 21.333-4.267 38.4-21.333 42.667-42.667 10.667-46.933-36.267-89.6-85.333-66.133zM640 200.533c-14.933 0-27.733-12.8-27.733-27.733s12.8-27.733 27.733-27.733 27.733 12.8 27.733 27.733-12.8 27.733-27.733 27.733z"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  fill: "#000",
  d: "M680.533 778.667l115.2-12.8c19.2-2.133 25.6-25.6 10.667-38.4l-4.267-2.133-49.067-38.4-145.067-113.067-55.467-42.667-121.6-96 6.4 96 2.133 42.667 6.4 113.067 2.133 42.667 4.267 83.2 2.133 42.667 2.133 51.2c2.133 19.2 23.467 27.733 36.267 12.8l59.733-66.133 17.067-17.067 66.133 132.267 17.067 32c4.267 6.4 10.667 10.667 17.067 10.667 2.133 0 6.4 0 8.533-2.133l78.933-40.533c8.533-4.267 12.8-17.067 8.533-25.6l-85.333-164.267zM680.533 968.533l-74.667-147.2-25.6-49.067-36.267 40.533-38.4 42.667-10.667 10.667v-10.667l-2.133-42.667-4.267-83.2-2.133-42.667-6.4-113.067-2.133-42.667v-12.8l17.067 12.8 55.467 42.667 145.067 113.067 53.333 42.667 6.4 4.267-72.533 8.533-61.867 4.267 25.6 49.067 76.8 149.333-42.667 23.467z"
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Icon);

/***/ }),

/***/ "./src/blocks/interactive-image-card/index.js":
/*!****************************************************!*\
  !*** ./src/blocks/interactive-image-card/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./attributes */ "./src/blocks/interactive-image-card/attributes.js");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./src/blocks/interactive-image-card/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ "./src/blocks/interactive-image-card/save.js");
/* harmony import */ var _icon_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icon.js */ "./src/blocks/interactive-image-card/icon.js");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__);






(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__.registerBlockType)('wpmozo/interactive-image-card', {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Interactive Image Card', 'wpmozo-addons-lite-for-gutenberg'),
  icon: _icon_js__WEBPACK_IMPORTED_MODULE_3__["default"],
  apiVersion: 3,
  category: 'wpmozo',
  keywords: ['wpmozo', 'interactive-image-card', 'image', 'card'],
  attributes: _attributes__WEBPACK_IMPORTED_MODULE_0__["default"],
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_2__["default"]
});

/***/ }),

/***/ "./src/blocks/interactive-image-card/inspector.js":
/*!********************************************************!*\
  !*** ./src/blocks/interactive-image-card/inspector.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/index */ "./src/components/index.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__);






const Inspector = props => {
  const attributes = props.attributes,
    setAttributes = props.setAttributes,
    allLayouts = [{
      value: 'lily',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Lily', 'wpmozo-addons-lite-for-gutenberg')
    }, {
      value: 'sadie',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Sadie', 'wpmozo-addons-lite-for-gutenberg')
    }, {
      value: 'roxy',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Roxy', 'wpmozo-addons-lite-for-gutenberg')
    }, {
      value: 'bubba',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Bubba', 'wpmozo-addons-lite-for-gutenberg')
    }, {
      value: 'romeo',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Romeo', 'wpmozo-addons-lite-for-gutenberg')
    }, {
      value: 'layla',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Layla', 'wpmozo-addons-lite-for-gutenberg')
    }, {
      value: 'oscar',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Oscar', 'wpmozo-addons-lite-for-gutenberg')
    }, {
      value: 'marley',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Marley', 'wpmozo-addons-lite-for-gutenberg')
    }, {
      value: 'ruby',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Ruby', 'wpmozo-addons-lite-for-gutenberg')
    }, {
      value: 'milo',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Milo', 'wpmozo-addons-lite-for-gutenberg')
    }],
    headingLavels = [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('H1', 'wpmozo-addons-lite-for-gutenberg'),
      value: 'h1'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('H2', 'wpmozo-addons-lite-for-gutenberg'),
      value: 'h2'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('H3', 'wpmozo-addons-lite-for-gutenberg'),
      value: 'h3'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('H4', 'wpmozo-addons-lite-for-gutenberg'),
      value: 'h4'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('H5', 'wpmozo-addons-lite-for-gutenberg'),
      value: 'h5'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('H6', 'wpmozo-addons-lite-for-gutenberg'),
      value: 'h6'
    }];
  props = Object.assign({}, props, {
    preAttributes: {}
  });
  const [titleStyleType, setTitleStyleType] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)('normal');
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, {
    key: "controls"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Content', 'wpmozo-addons-lite-for-gutenberg'),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Title', 'wpmozo-addons-lite-for-gutenberg'),
    value: attributes.title,
    onChange: newValue => setAttributes({
      title: newValue
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.TextareaControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Content', 'wpmozo-addons-lite-for-gutenberg'),
    onChange: newValue => setAttributes({
      content: newValue
    }),
    value: attributes.content
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Image', 'wpmozo-addons-lite-for-gutenberg'),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoMediaUploader, {
    attrKye: "backImage",
    props: props
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, {
    key: "styles",
    group: "styles"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Layout', 'wpmozo-addons-lite-for-gutenberg'),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Select Layout', 'wpmozo-addons-lite-for-gutenberg'),
    value: attributes.layout,
    options: allLayouts,
    onChange: newValue => setAttributes({
      layout: newValue
    })
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Layout Settings', 'wpmozo-addons-lite-for-gutenberg'),
    className: "wpmozo-typography-panel",
    initialOpen: false
  }, 'romeo' !== attributes.layout && 'marley' !== attributes.layout && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoColorPicker, {
    ColorKey: "overlay",
    props: props,
    ColorTypes: [{
      key: 'Color',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Overlay Color', 'wpmozo-addons-lite-for-gutenberg')
    }]
  }), 'lily' !== attributes.layout && 'sadie' !== attributes.layout && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoBorder, {
    BorderKey: "layout",
    props: props,
    BorderTypes: {
      border: true
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Image Opacity', 'wpmozo-addons-lite-for-gutenberg'),
    value: attributes.imageOpacity,
    onChange: newValue => setAttributes({
      imageOpacity: newValue
    }),
    min: 0,
    step: 0.1,
    max: 1
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Title', 'wpmozo-addons-lite-for-gutenberg'),
    className: "wpmozo-typography-panel",
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.BaseControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Title Heading Lavel', 'wpmozo-addons-lite-for-gutenberg')
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ButtonGroup, null, headingLavels.map((item, key) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Button, {
    key: 'title-lavel-' + item.value,
    isPressed: item.value === attributes.titleLavel ? true : false,
    onClick: newValue => setAttributes({
      titleLavel: item.value
    })
  }, item.label)))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.BaseControl, {
    className: "wpmozo-button-tabs-wrap"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ButtonGroup, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Button, {
    className: "wpmozo-button-tabs-btn",
    isPressed: 'normal' === titleStyleType ? true : false,
    onClick: () => setTitleStyleType('normal')
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Normal', 'wpmozo-addons-lite-for-gutenberg')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Button, {
    className: "wpmozo-button-tabs-btn",
    isPressed: 'hover' === titleStyleType ? true : false,
    onClick: () => setTitleStyleType('hover')
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Hover', 'wpmozo-addons-lite-for-gutenberg'))), 'normal' === titleStyleType && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoColorPicker, {
    ColorKey: "titleNormal",
    props: props,
    ColorTypes: [{
      key: 'Color',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Title Color', 'wpmozo-addons-lite-for-gutenberg')
    }]
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoTypography, {
    TypographyKey: "titleNormal",
    props: props
  })), 'hover' === titleStyleType && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoColorPicker, {
    ColorKey: "titleHover",
    props: props,
    ColorTypes: [{
      key: 'Color',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Title Color', 'wpmozo-addons-lite-for-gutenberg')
    }]
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoTypography, {
    TypographyKey: "titleHover",
    props: props
  }))), 'milo' !== attributes.layout && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoAlignment, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Title Alignment', 'wpmozo-addons-lite-for-gutenberg'),
    onChange: newValue => setAttributes({
      titleAlign: newValue
    }),
    value: attributes.titleAlign
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Content', 'wpmozo-addons-lite-for-gutenberg'),
    className: "wpmozo-typography-panel",
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoColorPicker, {
    ColorKey: "content",
    props: props,
    ColorTypes: [{
      key: 'Color',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Text Color', 'wpmozo-addons-lite-for-gutenberg')
    }]
  }), 'milo' !== attributes.layout && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoAlignment, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Content Alignment', 'wpmozo-addons-lite-for-gutenberg'),
    onChange: newValue => setAttributes({
      contentAlign: newValue
    }),
    value: attributes.contentAlign
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoTypography, {
    TypographyKey: "content",
    props: props
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Inspector);

/***/ }),

/***/ "./src/blocks/interactive-image-card/save.js":
/*!***************************************************!*\
  !*** ./src/blocks/interactive-image-card/save.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);


const WPMozoEditorObj = wpmozo_adfgu_editor_object;
const Save = ({
  attributes
}) => {
  const ID = attributes.ID;
  let backImage = attributes.backImage ? attributes.backImage : WPMozoEditorObj.placeholderImg;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ..._wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save({
      className: 'wpmozo-adfgu-interactive-image-card-main'
    }),
    id: `block-${ID}`
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wpmozo-adfgu-interactive-image-card-wrap"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("figure", {
    className: `effect-${attributes.layout}`
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    className: "wpmozo-adfgu-interactive-image-card-image",
    src: backImage
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("figcaption", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wpmozo-adfgu-interactive-image-card-inner"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
    className: "wpmozo-adfgu-interactive-image-card-title",
    tagName: attributes.titleLavel,
    value: attributes.title
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
    className: "wpmozo-adfgu-interactive-image-card-content",
    tagName: "div",
    value: attributes.content
  }))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Save);

/***/ }),

/***/ "./src/blocks/interactive-image-card/style.js":
/*!****************************************************!*\
  !*** ./src/blocks/interactive-image-card/style.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const Style = ({
  attributes,
  ID,
  clientId
}) => {
  const wpmozoCoreFun = window.wpmozo,
    parent = '#block-' + clientId,
    toConvertStyles = ['titleNormal', 'titleHover', 'content', 'layout'];
  let css = '',
    convertedStyle = wpmozoCoreFun.convetInlineStyleStr(toConvertStyles, attributes);
  let allInline = [{
    selector: '.wpmozo-adfgu-interactive-image-card-image',
    style: {
      'opacity': attributes.imageOpacity
    }
  }, {
    selector: '.wpmozo-adfgu-interactive-image-card-title',
    style: {
      'color': attributes.titleNormalColor
    },
    additional: convertedStyle.titleNormal
  }, {
    selector: '.wpmozo-adfgu-interactive-image-card-wrap figure:hover .wpmozo-adfgu-interactive-image-card-title',
    style: {
      'color': attributes.titleHoverColor
    },
    additional: convertedStyle.titleHover
  }, {
    selector: '.wpmozo-adfgu-interactive-image-card-content',
    style: {
      'color': attributes.contentColor
    },
    additional: convertedStyle.content
  }];
  if ('milo' !== attributes.layout) {
    allInline.push({
      selector: '.wpmozo-adfgu-interactive-image-card-title',
      style: {
        'text-align': attributes.titleAlign
      }
    }, {
      selector: '.wpmozo-adfgu-interactive-image-card-content',
      style: {
        'text-align': attributes.contentAlign
      }
    });
  }
  if ('romeo' !== attributes.layout && 'marley' !== attributes.layout) {
    allInline.push({
      selector: '.wpmozo-adfgu-interactive-image-card-wrap figure',
      style: {
        'background': attributes.overlayColor
      }
    });
  }
  if ('roxy' === attributes.layout) {
    allInline.push({
      selector: '.wpmozo-adfgu-interactive-image-card-wrap figure.effect-roxy figcaption::before',
      additional: convertedStyle.layout
    });
  }
  if ('bubba' === attributes.layout) {
    allInline.push({
      selector: '.wpmozo-adfgu-interactive-image-card-wrap figure.effect-bubba figcaption::before',
      style: {
        'border-top': attributes.layoutborder.width + ' ' + attributes.layoutborder.style + ' ' + attributes.layoutborder.color,
        'border-bottom': attributes.layoutborder.width + ' ' + attributes.layoutborder.style + ' ' + attributes.layoutborder.color
      }
    }, {
      selector: '.wpmozo-adfgu-interactive-image-card-wrap figure.effect-bubba figcaption::after',
      style: {
        'border-right': attributes.layoutborder.width + ' ' + attributes.layoutborder.style + ' ' + attributes.layoutborder.color,
        'border-left': attributes.layoutborder.width + ' ' + attributes.layoutborder.style + ' ' + attributes.layoutborder.color
      }
    });
  }
  if ('romeo' === attributes.layout) {
    allInline.push({
      selector: `
	    		.wpmozo-adfgu-interactive-image-card-wrap figure.effect-romeo figcaption::after, 
	    		.wpmozo-adfgu-interactive-image-card-wrap figure.effect-romeo figcaption::before
	    		`,
      style: {
        'height': attributes.layoutborder.width,
        'background': attributes.layoutborder.color
      }
    });
  }
  if ('layla' === attributes.layout) {
    allInline.push({
      selector: '.wpmozo-adfgu-interactive-image-card-wrap figure.effect-layla figcaption::before',
      style: {
        'border-top': attributes.layoutborder.width + ' ' + attributes.layoutborder.style + ' ' + attributes.layoutborder.color,
        'border-bottom': attributes.layoutborder.width + ' ' + attributes.layoutborder.style + ' ' + attributes.layoutborder.color
      }
    }, {
      selector: '.wpmozo-adfgu-interactive-image-card-wrap figure.effect-layla figcaption::after',
      style: {
        'border-right': attributes.layoutborder.width + ' ' + attributes.layoutborder.style + ' ' + attributes.layoutborder.color,
        'border-left': attributes.layoutborder.width + ' ' + attributes.layoutborder.style + ' ' + attributes.layoutborder.color
      }
    });
  }
  if ('oscar' === attributes.layout) {
    allInline.push({
      selector: '.wpmozo-adfgu-interactive-image-card-wrap figure.effect-oscar figcaption::before',
      additional: convertedStyle.layout
    });
  }
  if ('marley' === attributes.layout) {
    allInline.push({
      selector: `
	    		.wpmozo-adfgu-interactive-image-card-wrap figure.effect-marley .wpmozo-adfgu-interactive-image-card-title::after
	    		`,
      style: {
        'height': attributes.layoutborder.width,
        'background': attributes.layoutborder.color
      }
    });
  }
  if ('ruby' === attributes.layout) {
    allInline.push({
      selector: '.wpmozo-adfgu-interactive-image-card-wrap figure.effect-ruby .wpmozo-adfgu-interactive-image-card-content',
      additional: convertedStyle.layout
    });
  }
  if ('milo' === attributes.layout) {
    allInline.push({
      selector: '.wpmozo-adfgu-interactive-image-card-wrap figure.effect-milo .wpmozo-adfgu-interactive-image-card-content',
      style: {
        'border-right': attributes.layoutborder.width + ' ' + attributes.layoutborder.style + ' ' + attributes.layoutborder.color
      }
    });
  }
  let generateStyle = wpmozoCoreFun.wpmozo_generate_style(allInline);
  if (!wpmozoCoreFun.wpmozo_is_empty(generateStyle)) {
    css += `
	    	${parent} {
	    		${generateStyle}
	    	}
	    `;
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, !wpmozoCoreFun.wpmozo_is_empty(css) && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("style", {
    className: "wpmozo-dynamic-style",
    "data-id": ID,
    "data-client-id": clientId
  }, css));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Style);

/***/ }),

/***/ "./src/blocks/list-item/attributes.js":
/*!********************************************!*\
  !*** ./src/blocks/list-item/attributes.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);

const attributes = {
  ID: {
    type: "string"
  },
  itemmargin: {
    type: "object"
  },
  itempadding: {
    type: "object"
  },
  text: {
    type: "rich-text",
    source: "rich-text",
    selector: "p",
    role: "text"
  },
  markerType: {
    type: "string",
    default: "icon"
  },
  markerIcon: {
    type: "string",
    default: "fas fa-check"
  },
  styleIcon: {
    type: "boolean",
    default: false
  },
  iconShape: {
    type: "string",
    default: "square"
  },
  iconColor: {
    type: "string"
  },
  shapeBackground: {
    type: "string"
  },
  enableShapeBorder: {
    type: "boolean",
    default: false
  },
  shapeBorderColor: {
    type: "string"
  },
  markerImage: {
    type: "string",
    default: ""
  },
  textNormalColor: {
    type: "string",
    default: ""
  },
  textHoverColor: {
    type: "string",
    default: ""
  },
  textNormalFontSize: {
    type: "string",
    default: ""
  },
  textNormalFontAppearance: {
    type: "object",
    fontStyle: {
      type: "string"
    },
    fontWeight: {
      type: "string"
    },
    default: {
      fontStyle: "",
      fontWeight: ""
    }
  },
  textNormalLetterSpacing: {
    type: "string",
    default: ""
  },
  textNormalDecoration: {
    type: "string",
    default: ""
  },
  textNormalLetterCase: {
    type: "string",
    default: ""
  },
  textNormalLineHeight: {
    type: "string",
    default: ""
  },
  textHoverFontSize: {
    type: "string",
    default: ""
  },
  textHoverFontAppearance: {
    type: "object",
    fontStyle: {
      type: "string"
    },
    fontWeight: {
      type: "string"
    },
    default: {
      fontStyle: "",
      fontWeight: ""
    }
  },
  textHoverLetterSpacing: {
    type: "string",
    default: ""
  },
  textHoverDecoration: {
    type: "string",
    default: ""
  },
  textHoverLetterCase: {
    type: "string",
    default: ""
  },
  textHoverLineHeight: {
    type: "string",
    default: ""
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (attributes);

/***/ }),

/***/ "./src/blocks/list-item/edit.js":
/*!**************************************!*\
  !*** ./src/blocks/list-item/edit.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _inspector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inspector */ "./src/blocks/list-item/inspector.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style */ "./src/blocks/list-item/style.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _use_enter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./use-enter */ "./src/blocks/list-item/use-enter.js");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_7__);









const WPMozoEditorObj = wpmozo_adfgu_editor_object;
const Edit = props => {
  const {
    attributes,
    setAttributes,
    clientId
  } = props;
  const ID = window.wpmozo.getIdByClientid(clientId);
  const content = attributes.text;
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.useBlockProps)({
    ref: (0,_use_enter__WEBPACK_IMPORTED_MODULE_6__.useOnEnter)({
      clientId,
      content
    })
  });
  const textRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();

  // Handle KeyDown (Backspace in Empty Block)
  const handleKeyDown = event => {
    if (event.key === "Backspace" && _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.RichText.isEmpty(attributes.text)) {
      (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_7__.dispatch)("core/block-editor").removeBlock(clientId);
    }
  };
  attributes.ID = ID;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_inspector__WEBPACK_IMPORTED_MODULE_1__["default"], {
    ...props
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wpmozo-adfgu-list-item"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "list-item-wrap",
    id: `block-${clientId}`
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_style__WEBPACK_IMPORTED_MODULE_2__["default"], {
    attributes: attributes,
    ID: ID,
    clientId: clientId
  }), "icon" === attributes.markerType && true !== attributes.styleIcon && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wpmozo-adfgu-list-icon use-icon"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
    className: attributes.markerIcon
  })), "icon" === attributes.markerType && true === attributes.styleIcon && ('square' === attributes.iconShape || 'circle' === attributes.iconShape) && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wpmozo-adfgu-list-icon use-icon use-" + attributes.iconShape
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
    className: attributes.markerIcon + ' wpmozo-adfgu-icon-' + attributes.iconShape + (true === attributes.enableShapeBorder ? ' wpmozo-adfgu-icon-shape-border' : '')
  })), "icon" === attributes.markerType && true === attributes.styleIcon && 'hexagon' === attributes.iconShape && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wpmozo-adfgu-list-icon use-icon shape-hexagon use-" + attributes.iconShape
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "hexagon" + (true === attributes.enableShapeBorder ? ' wpmozo-adfgu-border-hex' : '')
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
    className: attributes.markerIcon
  }))), "image" === attributes.markerType && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    className: "wpmozo-adfgu-marker-image",
    src: attributes.markerImage ? attributes.markerImage : WPMozoEditorObj.placeholderImg
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wpmozo-adfgu-list-item-text"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.RichText, {
    ...blockProps,
    identifier: "text",
    tagName: "p",
    value: attributes.text,
    onChange: newContent => setAttributes({
      text: newContent
    }),
    key: "editable",
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Enter list item…", "wpmozo-addons-lite-for-gutenberg"),
    onKeyDown: handleKeyDown,
    ref: textRef,
    inlineToolbar: true
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wpmozo-adfgu-list-divider"
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Edit);

/***/ }),

/***/ "./src/blocks/list-item/icon.js":
/*!**************************************!*\
  !*** ./src/blocks/list-item/icon.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const Icon = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 23.94 19"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("title", null, "Asset 1"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
  id: "Layer_2",
  "data-name": "Layer 2"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
  id: "Layer_1-2",
  "data-name": "Layer 1"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M17,19H7a1.5,1.5,0,0,1-1.5-1.5V1.5A1.5,1.5,0,0,1,7,0H17a1.5,1.5,0,0,1,1.5,1.5v16A1.5,1.5,0,0,1,17,19ZM7,1a.5.5,0,0,0-.5.5v16A.5.5,0,0,0,7,18H17a.5.5,0,0,0,.5-.5V1.5A.5.5,0,0,0,17,1Z"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M14.7,12.54a1.88,1.88,0,0,1-.07.55,1.72,1.72,0,0,1-.21.43,1.54,1.54,0,0,1-.3.32,1.31,1.31,0,0,1-.36.21,1.82,1.82,0,0,1-.37.13l-.36,0H10.87a1.84,1.84,0,0,1-.55-.07,1.91,1.91,0,0,1-.43-.21,1.54,1.54,0,0,1-.32-.3,1.68,1.68,0,0,1-.21-.36,1.9,1.9,0,0,1-.13-.38,2.26,2.26,0,0,1,0-.35V10.13a1.73,1.73,0,0,1,.16-.78,1.66,1.66,0,0,1,.42-.52,1.71,1.71,0,0,1,.55-.29,2.14,2.14,0,0,1,.54-.08h1.37V9.65H10.88a.45.45,0,0,0-.36.13.45.45,0,0,0-.13.35v2.4a.49.49,0,0,0,.12.36.45.45,0,0,0,.36.13H13a.45.45,0,0,0,.36-.13.48.48,0,0,0,.12-.35V4.79H14.7Z"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M21,12.84l2.77-2.92a.62.62,0,0,0,0-.84L21,6.16a.62.62,0,1,0-.89.85L22.47,9.5,20.11,12a.61.61,0,0,0,0,.87.58.58,0,0,0,.42.17A.6.6,0,0,0,21,12.84Z"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M3.38,13a.59.59,0,0,0,.43-.17.62.62,0,0,0,0-.87L1.47,9.5,3.83,7a.62.62,0,0,0,0-.87.61.61,0,0,0-.87,0L.17,9.08a.6.6,0,0,0,0,.84l2.77,2.92A.59.59,0,0,0,3.38,13Z"
}))));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Icon);

/***/ }),

/***/ "./src/blocks/list-item/index.js":
/*!***************************************!*\
  !*** ./src/blocks/list-item/index.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./attributes */ "./src/blocks/list-item/attributes.js");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./src/blocks/list-item/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ "./src/blocks/list-item/save.js");
/* harmony import */ var _icon_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icon.js */ "./src/blocks/list-item/icon.js");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__);






(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__.registerBlockType)('wpmozo/list-item', {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('List Item', 'wpmozo-addons-lite-for-gutenberg'),
  icon: _icon_js__WEBPACK_IMPORTED_MODULE_3__["default"],
  apiVersion: 2,
  category: 'wpmozo',
  parent: ['wpmozo/list'],
  attributes: _attributes__WEBPACK_IMPORTED_MODULE_0__["default"],
  supports: {
    splitting: true
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_2__["default"]
});

/***/ }),

/***/ "./src/blocks/list-item/inspector.js":
/*!*******************************************!*\
  !*** ./src/blocks/list-item/inspector.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/index */ "./src/components/index.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);






const Inspector = props => {
  const attributes = props.attributes,
    setAttributes = props.setAttributes;
  const [contentType, setContentType] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_5__.useState)('front');
  props = Object.assign({}, props, {
    preAttributes: {}
  });
  const [textType, setTextType] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_5__.useState)('normal');
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, {
    key: "controls"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Content', 'wpmozo-addons-lite-for-gutenberg'),
    initialOpen: true
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Text', 'wpmozo-addons-lite-for-gutenberg'),
    value: attributes.text,
    onChange: newValue => setAttributes({
      text: newValue
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Image/Icon as Thumbnail', 'wpmozo-addons-lite-for-gutenberg'),
    value: attributes.markerType,
    options: [{
      value: 'icon',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Use Icon', 'wpmozo-addons-lite-for-gutenberg')
    }, {
      value: 'image',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Use Image', 'wpmozo-addons-lite-for-gutenberg')
    }],
    onChange: newValue => setAttributes({
      markerType: newValue
    })
  }), 'icon' === attributes.markerType && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoIconpicker, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Icon', 'wpmozo-addons-lite-for-gutenberg'),
    iconPickerKey: "markerIcon",
    props: props,
    value: attributes.markerIcon,
    onChange: newValue => setAttributes({
      markerIcon: newValue
    })
  }), 'image' === attributes.markerType && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoMediaUploader, {
    attrKye: "markerImage",
    props: props
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, {
    key: "styles",
    group: "styles"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Item Text', 'wpmozo-addons-lite-for-gutenberg'),
    className: "wpmozo-text-styling-panel wpmozo-typography-panel",
    initialOpen: true
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.BaseControl, {
    className: "wpmozo-button-tabs-wrap"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ButtonGroup, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
    className: "wpmozo-button-tabs-btn",
    isPressed: 'normal' === textType ? true : false,
    onClick: () => setTextType('normal')
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Normal', 'wpmozo-addons-lite-for-gutenberg')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
    className: "wpmozo-button-tabs-btn",
    isPressed: 'hover' === textType ? true : false,
    onClick: () => setTextType('hover')
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Hover', 'wpmozo-addons-lite-for-gutenberg'))), 'normal' === textType && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoColorPicker, {
    ColorKey: "textNormal",
    props: props,
    ColorTypes: [{
      key: 'Color',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Text Color', 'wpmozo-addons-lite-for-gutenberg')
    }]
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoTypography, {
    TypographyKey: "textNormal",
    props: props
  })), 'hover' === textType && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoColorPicker, {
    ColorKey: "textHover",
    props: props,
    ColorTypes: [{
      key: 'Color',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Text Color', 'wpmozo-addons-lite-for-gutenberg')
    }]
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoTypography, {
    TypographyKey: "textHover",
    props: props
  })))), 'icon' === attributes.markerType && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Icon', 'wpmozo-addons-lite-for-gutenberg'),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Style Icon', 'wpmozo-addons-lite-for-gutenberg'),
    checked: attributes.styleIcon,
    onChange: newValue => setAttributes({
      styleIcon: newValue
    })
  }), true === attributes.styleIcon && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Shape', 'wpmozo-addons-lite-for-gutenberg'),
    value: attributes.iconShape,
    options: [{
      value: 'square',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Square', 'wpmozo-addons-lite-for-gutenberg')
    }, {
      value: 'circle',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Circle', 'wpmozo-addons-lite-for-gutenberg')
    }, {
      value: 'hexagon',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Hexagon', 'wpmozo-addons-lite-for-gutenberg')
    }],
    onChange: newValue => setAttributes({
      iconShape: newValue
    })
  }), true === attributes.styleIcon && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoColorPicker, {
    ColorKey: "shape",
    props: props,
    ColorTypes: [{
      key: 'Background',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Shape Background', 'wpmozo-addons-lite-for-gutenberg')
    }]
  }), true === attributes.styleIcon && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoColorPicker, {
    ColorKey: "icon",
    props: props,
    ColorTypes: [{
      key: 'Color',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Icon Color', 'wpmozo-addons-lite-for-gutenberg')
    }]
  }), true === attributes.styleIcon && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Display Shape Border', 'wpmozo-addons-lite-for-gutenberg'),
    checked: attributes.enableShapeBorder,
    onChange: newValue => setAttributes({
      enableShapeBorder: newValue
    })
  }), true === attributes.styleIcon && true === attributes.enableShapeBorder && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoColorPicker, {
    ColorKey: "shapeBorder",
    props: props,
    ColorTypes: [{
      key: 'Color',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Shape Border Color', 'wpmozo-addons-lite-for-gutenberg')
    }]
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Spacing', 'wpmozo-addons-lite-for-gutenberg'),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoDimensions, {
    DimensionKey: "item",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Item Spacing', 'wpmozo-addons-lite-for-gutenberg'),
    DimensionsTypes: {
      margin: true,
      padding: true
    },
    props: props
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Inspector);

/***/ }),

/***/ "./src/blocks/list-item/save.js":
/*!**************************************!*\
  !*** ./src/blocks/list-item/save.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);


const Save = props => {
  const {
    attributes
  } = props;
  const clientId = attributes.ID;
  const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save({
    className: "wpmozo-adfgu-list-item"
  });
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...blockProps
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "list-item-wrap",
    id: `block-${clientId}`
  }, attributes.markerType === "icon" && !attributes.styleIcon && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wpmozo-adfgu-list-icon use-icon"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
    className: attributes.markerIcon
  })), attributes.markerType === "icon" && attributes.styleIcon && (attributes.iconShape === "square" || attributes.iconShape === "circle") && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `wpmozo-adfgu-list-icon use-icon use-${attributes.iconShape}`
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
    className: `${attributes.markerIcon} wpmozo-adfgu-icon-${attributes.iconShape} 
                        ${attributes.enableShapeBorder ? "wpmozo-adfgu-icon-shape-border" : ""}`
  })), attributes.markerType === "icon" && attributes.styleIcon && attributes.iconShape === "hexagon" && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wpmozo-adfgu-list-icon use-icon shape-hexagon"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `hexagon ${attributes.enableShapeBorder ? "wpmozo-adfgu-border-hex" : ""}`
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
    className: attributes.markerIcon
  }))), attributes.markerType === "image" && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    className: "wpmozo-adfgu-marker-image",
    src: attributes.markerImage,
    alt: ""
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wpmozo-adfgu-list-item-text"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
    tagName: "p",
    value: attributes.text
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wpmozo-adfgu-list-divider"
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Save);

/***/ }),

/***/ "./src/blocks/list-item/style.js":
/*!***************************************!*\
  !*** ./src/blocks/list-item/style.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);


const Style = ({
  attributes,
  ID,
  clientId
}) => {
  const wpmozoCoreFun = window.wpmozo,
    parent = '#block-' + clientId,
    toConvertStyles = ['textNormal', 'textHover', 'item'],
    convertedStyle = wpmozoCoreFun.convetInlineStyleStr(toConvertStyles, attributes);
  const parentAttributes = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useSelect)(select => {
    const {
      getBlockRootClientId,
      getBlock
    } = select('core/block-editor');
    const parentId = getBlockRootClientId(clientId);
    return parentId ? getBlock(parentId)?.attributes : null;
  }, [clientId]); // Re-run when clientId changes

  let css = '';
  let allInline = [{
    selector: `.wpmozo-adfgu-list-item:has(#block-${clientId})`,
    additional: convertedStyle.item
  }, {
    selector: `#block-${clientId} .wpmozo-adfgu-list-item-text p`,
    style: {
      'color': attributes.textNormalColor
    },
    additional: convertedStyle.textNormal
  }, {
    selector: `#block-${clientId} .wpmozo-adfgu-list-item-text p:hover`,
    style: {
      'color': attributes.textHoverColor
    },
    additional: convertedStyle.textHover
  }];
  if ('icon' === attributes.markerType) {
    allInline.push({
      selector: `#block-${clientId} .wpmozo-adfgu-list-icon i`,
      style: {
        'color': attributes.iconColor
      }
    });
    if (true === attributes.styleIcon) {
      if ('hexagon' === attributes.iconShape) {
        if (true === attributes.enableShapeBorder) {
          allInline.push({
            selector: `#block-${clientId} .wpmozo-adfgu-list-icon .hexagon.wpmozo-adfgu-border-hex`,
            style: {
              'box-shadow': `2px 0px 0px 0px inset ${attributes.shapeBorderColor}, -2px 0px 0px 0px inset ${attributes.shapeBorderColor}`
            }
          }, {
            selector: `#block-${clientId} .wpmozo-adfgu-list-icon .hexagon.wpmozo-adfgu-border-hex:after`,
            style: {
              'border-right': `2px solid ${attributes.shapeBorderColor}`,
              'border-bottom': `2px solid ${attributes.shapeBorderColor}`,
              'transform': 'rotate(45deg) skew(-15.8deg, -15.8deg) translate( 72%, 27%)',
              'width': 55 + "%",
              'height': 100 + "%"
            }
          }, {
            selector: `#block-${clientId} .wpmozo-adfgu-list-icon .hexagon.wpmozo-adfgu-border-hex:before`,
            style: {
              'border-top': `2px solid ${attributes.shapeBorderColor}`,
              'border-left': `2px solid ${attributes.shapeBorderColor}`,
              'transform': 'rotate(45deg) skew(-15.8deg, -15.8deg) translate(-27%, -72%)',
              'width': 55 + "%",
              'height': 100 + "%"
            }
          });
        } else {
          allInline.push({
            selector: `#block-${clientId} .wpmozo-adfgu-list-icon .hexagon`,
            style: {}
          }, {
            selector: `#block-${clientId} .wpmozo-adfgu-list-icon .hexagon:after`,
            style: {
              'transform': 'rotate(45deg) skew(-16deg, -16deg) translate( 72%, 27%)',
              'width': 55 + "%"
            }
          }, {
            selector: `#block-${clientId} .wpmozo-adfgu-list-icon .hexagon:before`,
            style: {
              'transform': 'rotate(45deg) skew(-16deg, -16deg) translate(-27%, -72%)',
              'width': 55 + "%"
            }
          });
        }
        allInline.push({
          selector: `#block-${clientId} .wpmozo-adfgu-list-icon`,
          style: {
            'width': `calc( ${parentAttributes.iconFontSize}px + ${parentAttributes.iconFontSize / 1.15}px )`
          }
        }, {
          selector: `#block-${clientId} .wpmozo-adfgu-list-icon i`,
          style: {
            'font-size': `${parentAttributes.iconFontSize}px`
          }
        }, {
          selector: `#block-${clientId} .wpmozo-adfgu-list-icon .hexagon:before,#block-${clientId} .wpmozo-adfgu-list-icon .hexagon:after, .wpmozo-adfgu-list-icon .hexagon`,
          style: {
            'background-color': attributes.shapeBackground
          }
        });
      } else {
        if (true === attributes.enableShapeBorder) {
          allInline.push({
            selector: `#block-${clientId} .wpmozo-adfgu-list-icon i`,
            style: {
              'border': `2px solid ${attributes.shapeBorderColor}`
            }
          }, {
            selector: `#block-${clientId} .wpmozo-adfgu-list-icon i`,
            style: {
              'font-size': `${parentAttributes.iconFontSize}px`
            }
          });
        } else {}
        allInline.push({
          selector: `#block-${clientId} .wpmozo-adfgu-list-icon i`,
          style: {
            'font-size': `${parentAttributes.iconFontSize}px`
          }
        });
      }
      allInline.push({
        selector: `#block-${clientId} .wpmozo-adfgu-list-icon i`,
        style: {
          'background-color': attributes.shapeBackground
        }
      });
    } else if (true !== attributes.styleIcon) {
      allInline.push({
        selector: `#block-${clientId} .wpmozo-adfgu-list-icon i`,
        style: {
          'font-size': `${parentAttributes.iconFontSize}px`
        }
      });
    } else {}
  }
  let generateStyle = wpmozoCoreFun.wpmozo_generate_style(allInline);
  if (!wpmozoCoreFun.wpmozo_is_empty(generateStyle)) {
    css += `
            ${generateStyle}
        `;
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("style", {
    className: "wpmozo-dynamic-style",
    "data-id": ID,
    "data-client-id": clientId
  }, css);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Style);

/***/ }),

/***/ "./src/blocks/list-item/use-enter.js":
/*!*******************************************!*\
  !*** ./src/blocks/list-item/use-enter.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useOnEnter: () => (/* binding */ useOnEnter)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/keycodes */ "@wordpress/keycodes");
/* harmony import */ var _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_keycodes__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_5__);
/**
 * WordPress dependencies
 */






function useOnEnter(props) {
  const {
    batch
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useRegistry)();
  const {
    moveBlocksToPosition,
    replaceInnerBlocks,
    duplicateBlocks,
    insertBlock
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useDispatch)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.store);
  const {
    getBlockRootClientId,
    getBlockIndex,
    getBlockOrder,
    getBlockName,
    getBlock,
    getNextBlockClientId,
    canInsertBlockType
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.store);
  const propsRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)(props);
  propsRef.current = props;
  return (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__.useRefEffect)(element => {
    function onKeyDown(event) {
      if (event.defaultPrevented) {
        return;
      }
      if (event.keyCode !== _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_2__.ENTER) {
        return;
      }
      const {
        content,
        clientId
      } = propsRef.current;

      // The paragraph should be empty.
      if (content.length) {
        return;
      }
      const wrapperClientId = getBlockRootClientId(clientId);
      if (!(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_5__.hasBlockSupport)(getBlockName(wrapperClientId), '__experimentalOnEnter', false)) {
        return;
      }
      const order = getBlockOrder(wrapperClientId);
      const position = order.indexOf(clientId);

      // If it is the last block, exit.
      if (position === order.length - 1) {
        let newWrapperClientId = wrapperClientId;
        while (!canInsertBlockType(getBlockName(clientId), getBlockRootClientId(newWrapperClientId))) {
          newWrapperClientId = getBlockRootClientId(newWrapperClientId);
        }
        if (typeof newWrapperClientId === 'string') {
          event.preventDefault();
          moveBlocksToPosition([clientId], wrapperClientId, getBlockRootClientId(newWrapperClientId), getBlockIndex(newWrapperClientId) + 1);
        }
        return;
      }
      const defaultBlockName = (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_5__.getDefaultBlockName)();
      if (!canInsertBlockType(defaultBlockName, getBlockRootClientId(wrapperClientId))) {
        return;
      }
      event.preventDefault();

      // If it is in the middle, split the block in two.
      const wrapperBlock = getBlock(wrapperClientId);
      batch(() => {
        duplicateBlocks([wrapperClientId]);
        const blockIndex = getBlockIndex(wrapperClientId);
        replaceInnerBlocks(wrapperClientId, wrapperBlock.innerBlocks.slice(0, position));
        replaceInnerBlocks(getNextBlockClientId(wrapperClientId), wrapperBlock.innerBlocks.slice(position + 1));
        insertBlock((0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_5__.createBlock)(defaultBlockName), blockIndex + 1, getBlockRootClientId(wrapperClientId), true);
      });
    }
    element.addEventListener('keydown', onKeyDown);
    return () => {
      element.removeEventListener('keydown', onKeyDown);
    };
  }, []);
}

/***/ }),

/***/ "./src/blocks/list/attributes.js":
/*!***************************************!*\
  !*** ./src/blocks/list/attributes.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);

const attributes = {
  ID: {
    type: "string"
  },
  layout: {
    type: "string",
    default: "default"
  },
  listAlignment: {
    type: "string",
    default: "center"
  },
  iconFontSize: {
    type: "number",
    default: 22
  },
  iconColor: {
    type: "string"
  },
  imageWidth: {
    type: "number",
    default: 40
  },
  dividerSize: {
    type: "number",
    default: 0
  },
  dividerStyle: {
    type: "string",
    default: 'solid'
  },
  dividerColor: {
    type: "string",
    default: '#d3d3d3'
  },
  dividermargin: {
    type: "object"
  },
  lastDivider: {
    type: "boolean",
    default: true
  },
  indentation: {
    type: "number"
  },
  textColor: {
    type: "string",
    default: "#222222"
  },
  linkColor: {
    type: "string",
    default: "#000000"
  },
  textFontSize: {
    type: "string"
  },
  textFontAppearance: {
    type: "object",
    fontStyle: {
      type: "string"
    },
    fontWeight: {
      type: "string"
    },
    default: {
      fontStyle: "",
      fontWeight: ""
    }
  },
  textLetterSpacing: {
    type: "string"
  },
  textDecoration: {
    type: "string"
  },
  textLetterCase: {
    type: "string"
  },
  textLineHeight: {
    type: "string"
  },
  linkFontSize: {
    type: "string"
  },
  linkFontAppearance: {
    type: "object",
    fontStyle: {
      type: "string"
    },
    fontWeight: {
      type: "string"
    },
    default: {
      fontStyle: "",
      fontWeight: ""
    }
  },
  linkLetterSpacing: {
    type: "string"
  },
  linkDecoration: {
    type: "string"
  },
  linkLetterCase: {
    type: "string"
  },
  linkLineHeight: {
    type: "string"
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (attributes);

/***/ }),

/***/ "./src/blocks/list/edit.js":
/*!*********************************!*\
  !*** ./src/blocks/list/edit.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _inspector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inspector */ "./src/blocks/list/inspector.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style */ "./src/blocks/list/style.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_6__);








const Edit = props => {
  const wpmozoCoreFun = window.wpmozo,
    attributes = props.attributes,
    setAttributes = props.setAttributes,
    clientId = props.clientId,
    ID = window.wpmozo.getIdByClientid(clientId),
    blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.useBlockProps)({
      className: 'wpmozo-adfgu-list'
    });
  const childBlocks = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_6__.useSelect)(select => {
    return select('core/block-editor').getBlocks(clientId);
  }, [clientId]);
  const childAttributes = childBlocks.map(block => block.attributes);
  const TEMPLATE = [['wpmozo/list-item', {
    text: childAttributes.text
  }] // Prefills a child block when parent is inserted
  ];
  attributes.ID = ID;
  const hideDivider = true === attributes.lastDivider ? "wpmozo-adfgu-hide-last-divider" : "";
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_inspector__WEBPACK_IMPORTED_MODULE_1__["default"], {
    ...props
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...blockProps,
    id: `block-${clientId}`
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_style__WEBPACK_IMPORTED_MODULE_2__["default"], {
    attributes: attributes,
    ID: ID,
    clientId: clientId
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wpmozo-adfgu-list-wrapper"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wpmozo-adfgu-list-layout wpmozo-adfgu-list-" + attributes.layout + " " + hideDivider
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.InnerBlocks, {
    allowedBlocks: ['wpmozo/list-item'],
    templateLock: false
  }))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Edit);

/***/ }),

/***/ "./src/blocks/list/icon.js":
/*!*********************************!*\
  !*** ./src/blocks/list/icon.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const Icon = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  width: "1024",
  height: "1024",
  viewBox: "0 0 1024 1024"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
  id: "icomoon-ignore"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  fill: "#000",
  d: "M117.333 224c-59.733 0-106.667-46.933-106.667-106.667s46.933-106.667 106.667-106.667 106.667 46.933 106.667 106.667-46.933 106.667-106.667 106.667zM117.333 53.333c-36.267 0-64 27.733-64 64s27.733 64 64 64 64-27.733 64-64-27.733-64-64-64z"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  fill: "#000",
  d: "M117.333 618.667c-59.733 0-106.667-46.933-106.667-106.667s46.933-106.667 106.667-106.667 106.667 46.933 106.667 106.667-46.933 106.667-106.667 106.667zM117.333 448c-36.267 0-64 27.733-64 64s27.733 64 64 64 64-27.733 64-64-27.733-64-64-64z"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  fill: "#000",
  d: "M117.333 1013.333c-59.733 0-106.667-46.933-106.667-106.667s46.933-106.667 106.667-106.667 106.667 46.933 106.667 106.667-46.933 106.667-106.667 106.667zM117.333 842.667c-36.267 0-64 27.733-64 64s27.733 64 64 64 64-27.733 64-64-27.733-64-64-64z"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  fill: "#000",
  d: "M970.667 160h-640c-23.467 0-42.667-19.2-42.667-42.667v0c0-23.467 19.2-42.667 42.667-42.667h640c23.467 0 42.667 19.2 42.667 42.667v0c0 23.467-19.2 42.667-42.667 42.667z"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  fill: "#000",
  d: "M970.667 554.667h-640c-23.467 0-42.667-19.2-42.667-42.667v0c0-23.467 19.2-42.667 42.667-42.667h640c23.467 0 42.667 19.2 42.667 42.667v0c0 23.467-19.2 42.667-42.667 42.667z"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  fill: "#000",
  d: "M800 949.333h-469.333c-23.467 0-42.667-19.2-42.667-42.667v0c0-23.467 19.2-42.667 42.667-42.667h469.333c23.467 0 42.667 19.2 42.667 42.667v0c0 23.467-19.2 42.667-42.667 42.667z"
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Icon);

/***/ }),

/***/ "./src/blocks/list/index.js":
/*!**********************************!*\
  !*** ./src/blocks/list/index.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./attributes */ "./src/blocks/list/attributes.js");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./src/blocks/list/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ "./src/blocks/list/save.js");
/* harmony import */ var _icon_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icon.js */ "./src/blocks/list/icon.js");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__);






(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__.registerBlockType)('wpmozo/list', {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('List', 'wpmozo-addons-lite-for-gutenberg'),
  icon: _icon_js__WEBPACK_IMPORTED_MODULE_3__["default"],
  apiVersion: 2,
  category: 'wpmozo',
  keywords: ['wpmozo', 'list'],
  attributes: _attributes__WEBPACK_IMPORTED_MODULE_0__["default"],
  supports: {
    splitting: true
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_2__["default"]
});

/***/ }),

/***/ "./src/blocks/list/inspector.js":
/*!**************************************!*\
  !*** ./src/blocks/list/inspector.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/index */ "./src/components/index.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);






const Inspector = props => {
  const attributes = props.attributes,
    setAttributes = props.setAttributes,
    [deviceType, setDeviceType] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_5__.useState)('tablet');
  const [textType, setTextType] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_5__.useState)('text');
  props = Object.assign({}, props, {
    preAttributes: {}
  });
  const dividerStyle = [{
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Solid', 'wpmozo-addons-lite-for-gutenberg'),
    value: 'solid'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Dashed', 'wpmozo-addons-lite-for-gutenberg'),
    value: 'dashed'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Dotted', 'wpmozo-addons-lite-for-gutenberg'),
    value: 'dotted'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Double', 'wpmozo-addons-lite-for-gutenberg'),
    value: 'double'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Groove', 'wpmozo-addons-lite-for-gutenberg'),
    value: 'groove'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Ridge', 'wpmozo-addons-lite-for-gutenberg'),
    value: 'ridge'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Inset', 'wpmozo-addons-lite-for-gutenberg'),
    value: 'inset'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Outset', 'wpmozo-addons-lite-for-gutenberg'),
    value: 'outset'
  }];
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, {
    key: "controls"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Configuration', 'wpmozo-addons-lite-for-gutenberg'),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Layout', 'wpmozo-addons-lite-for-gutenberg'),
    value: attributes.layout,
    options: [{
      value: 'default',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Default', 'wpmozo-addons-lite-for-gutenberg')
    }, {
      value: 'inline',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Inline', 'wpmozo-addons-lite-for-gutenberg')
    }],
    onChange: newValue => setAttributes({
      layout: newValue
    })
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, {
    key: "styles",
    group: "styles"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('List', 'wpmozo-addons-lite-for-gutenberg'),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoAlignment, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Alignment', 'wpmozo-addons-lite-for-gutenberg'),
    onChange: newValue => setAttributes({
      listAlignment: newValue
    }),
    value: attributes.listAlignment
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Item Text', 'wpmozo-addons-lite-for-gutenberg'),
    className: "wpmozo-text-styling-panel wpmozo-typography-panel",
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Indentation', 'wpmozo-addons-lite-for-gutenberg'),
    value: attributes.indentation,
    onChange: newValue => setAttributes({
      indentation: newValue
    }),
    min: 0,
    step: 1,
    max: 100
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.BaseControl, {
    className: "wpmozo-button-tabs-wrap"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ButtonGroup, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
    className: "wpmozo-button-tabs-btn",
    isPressed: 'text' === textType ? true : false,
    onClick: () => setTextType('text')
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Text', 'wpmozo-addons-lite-for-gutenberg')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
    className: "wpmozo-button-tabs-btn",
    isPressed: 'link' === textType ? true : false,
    onClick: () => setTextType('link')
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Link', 'wpmozo-addons-lite-for-gutenberg'))), 'text' === textType && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoColorPicker, {
    ColorKey: "text",
    props: props,
    ColorTypes: [{
      key: 'Color',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Text Color', 'wpmozo-addons-lite-for-gutenberg')
    }]
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoTypography, {
    TypographyKey: "text",
    props: props
  })), 'link' === textType && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoColorPicker, {
    ColorKey: "link",
    props: props,
    ColorTypes: [{
      key: 'Color',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Link Color', 'wpmozo-addons-lite-for-gutenberg')
    }]
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoTypography, {
    TypographyKey: "link",
    props: props
  })))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Icon', 'wpmozo-addons-lite-for-gutenberg'),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Icon Font Size', 'wpmozo-addons-lite-for-gutenberg'),
    value: attributes.iconFontSize,
    onChange: newValue => setAttributes({
      iconFontSize: newValue
    }),
    min: 0,
    step: 1,
    max: 100
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoColorPicker, {
    ColorKey: "icon",
    props: props,
    ColorTypes: [{
      key: 'Color',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Icon Color', 'wpmozo-addons-lite-for-gutenberg')
    }]
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Image', 'wpmozo-addons-lite-for-gutenberg'),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Thumbnail Width', 'wpmozo-addons-lite-for-gutenberg'),
    value: attributes.imageWidth,
    onChange: newValue => setAttributes({
      imageWidth: newValue
    }),
    min: 0,
    step: 1,
    max: 100
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Divider', 'wpmozo-addons-lite-for-gutenberg'),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Divider Size', 'wpmozo-addons-lite-for-gutenberg'),
    value: attributes.dividerSize,
    onChange: newValue => setAttributes({
      dividerSize: newValue
    }),
    min: 0,
    step: 1,
    max: 100
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Divider Style', 'wpmozo-addons-lite-for-gutenberg'),
    value: attributes.dividerStyle,
    options: dividerStyle,
    onChange: newValue => setAttributes({
      dividerStyle: newValue
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoColorPicker, {
    ColorKey: "divider",
    props: props,
    ColorTypes: [{
      key: 'Color',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Divider Color', 'wpmozo-addons-lite-for-gutenberg')
    }]
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Hide Last Divider?', 'wpmozo-addons-lite-for-gutenberg'),
    checked: attributes.lastDivider,
    onChange: newValue => setAttributes({
      lastDivider: newValue
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoDimensions, {
    DimensionKey: "divider",
    DimensionsTypes: {
      margin: true
    },
    props: props
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Inspector);

/***/ }),

/***/ "./src/blocks/list/save.js":
/*!*********************************!*\
  !*** ./src/blocks/list/save.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);


const Save = props => {
  const wpmozoCoreFun = window.wpmozo,
    attributes = props.attributes,
    ID = attributes.ID,
    blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save({
      className: 'wpmozo-adfgu-list'
    });
  const TEMPLATE = [['wpmozo/list-item', {}] // Prefills a child block when parent is inserted
  ];
  const hideDivider = true === attributes.lastDivider ? "wpmozo-adfgu-hide-last-divider" : "";
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...blockProps,
    id: `block-${ID}`
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wpmozo-adfgu-list-wrapper"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wpmozo-adfgu-list-layout wpmozo-adfgu-list-" + attributes.layout + " " + hideDivider
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InnerBlocks.Content, null)))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Save);

/***/ }),

/***/ "./src/blocks/list/style.js":
/*!**********************************!*\
  !*** ./src/blocks/list/style.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const Style = ({
  attributes,
  ID,
  clientId
}) => {
  const wpmozoCoreFun = window.wpmozo,
    parent = '#block-' + clientId,
    toConvertStyles = ['text', 'link', 'divider'],
    convertedStyle = wpmozoCoreFun.convetInlineStyleStr(toConvertStyles, attributes);
  let css = '';
  let allInline = [{
    selector: '.wpmozo-adfgu-list-icon i',
    style: {
      'font-size': `${attributes.iconFontSize}px`,
      'color': attributes.iconColor
    }
  }, {
    selector: '.wpmozo-adfgu-list-layout.wpmozo-adfgu-list-default',
    style: {
      'align-items': 'right' === attributes.listAlignment ? 'flex-end' : 'left' === attributes.listAlignment ? 'flex-start' : attributes.listAlignment
    }
  }, {
    selector: '.wpmozo-adfgu-list-layout.wpmozo-adfgu-list-inline, .wpmozo-adfgu-list-layout.wpmozo-adfgu-list-inline .block-editor-block-list__layout',
    style: {
      'display': 'flex',
      'justify-content': 'right' === attributes.listAlignment ? 'flex-end' : 'left' === attributes.listAlignment ? 'flex-start' : attributes.listAlignment,
      'flex-flow': 'row wrap'
    }
  }, {
    selector: '.wpmozo-adfgu-list-item-text',
    style: {
      'color': attributes.textColor,
      'text-indent': `${attributes.indentation}px`
    },
    additional: convertedStyle.text
  }, {
    selector: '.wpmozo-adfgu-list-item-text a',
    style: {
      'color': attributes.linkColor
    },
    additional: convertedStyle.link
  }, {
    selector: '.wpmozo-adfgu-marker-image',
    style: {
      'width': `${attributes.imageWidth}px`
    }
  }];
  if ('default' === attributes.layout) {
    allInline.push({
      selector: '.wpmozo-adfgu-list-divider',
      style: {
        'border-top-width': `${attributes.dividerSize}px`,
        'border-style': attributes.dividerStyle,
        'border-color': attributes.dividerColor
      },
      additional: convertedStyle['divider']
    });
  } else {
    allInline.push({
      selector: '.wpmozo-adfgu-list-divider',
      style: {
        'border-right-width': `${attributes.dividerSize}px`,
        'border-style': attributes.dividerStyle,
        'border-color': attributes.dividerColor
      },
      additional: convertedStyle['divider']
    });
  }
  let generateStyle = wpmozoCoreFun.wpmozo_generate_style(allInline);
  if (!wpmozoCoreFun.wpmozo_is_empty(generateStyle)) {
    css += `
            ${parent} {
                ${generateStyle}
            }
        `;
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("style", {
    className: "wpmozo-dynamic-style",
    "data-id": ID,
    "data-client-id": clientId
  }, css);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Style);

/***/ }),

/***/ "./src/blocks/logo-slide/attributes.js":
/*!*********************************************!*\
  !*** ./src/blocks/logo-slide/attributes.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);

const attributes = {
  ID: {
    type: "string"
  },
  logo: {
    type: "object"
  },
  altText: {
    type: "string"
  },
  link: {
    type: "string"
  },
  linkTarget: {
    type: "string",
    default: "same"
  },
  logoBackground: {
    type: "string"
  },
  logopadding: {
    type: "object"
  },
  logoborderRadius: {
    type: "string"
  },
  logoborder: {
    type: "object"
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (attributes);

/***/ }),

/***/ "./src/blocks/logo-slide/edit.js":
/*!***************************************!*\
  !*** ./src/blocks/logo-slide/edit.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _inspector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inspector */ "./src/blocks/logo-slide/inspector.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style */ "./src/blocks/logo-slide/style.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);






const Edit = props => {
  const wpmozoCoreFun = window.wpmozo,
    attributes = props.attributes,
    clientId = props.clientId,
    ID = wpmozoCoreFun.getIdByClientid(clientId),
    altText = !wpmozoCoreFun.wpmozo_is_empty(attributes.altText) ? attributes.altText : 'alt',
    blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.useBlockProps)({
      className: "swiper-slide"
    });
  attributes.ID = ID;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_inspector__WEBPACK_IMPORTED_MODULE_1__["default"], {
    ...props
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "swiper-slide",
    id: `block-${clientId}`,
    "data-client-id": clientId
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_style__WEBPACK_IMPORTED_MODULE_2__["default"], {
    attributes: attributes,
    ID: ID,
    clientId: clientId
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "logo-wrap"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    className: "logo-img",
    src: attributes.logo.url,
    alt: altText
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Edit);

/***/ }),

/***/ "./src/blocks/logo-slide/index.js":
/*!****************************************!*\
  !*** ./src/blocks/logo-slide/index.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./attributes */ "./src/blocks/logo-slide/attributes.js");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./src/blocks/logo-slide/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ "./src/blocks/logo-slide/save.js");
/* harmony import */ var _logo_slider_icon_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../logo-slider/icon.js */ "./src/blocks/logo-slider/icon.js");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__);






(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__.registerBlockType)('wpmozo/logo-slide', {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Logo Slide', 'wpmozo-addons-lite-for-gutenberg'),
  icon: _logo_slider_icon_js__WEBPACK_IMPORTED_MODULE_3__["default"],
  apiVersion: 2,
  category: 'wpmozo',
  parent: ['wpmozo/logo-slider'],
  attributes: _attributes__WEBPACK_IMPORTED_MODULE_0__["default"],
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_2__["default"]
});

/***/ }),

/***/ "./src/blocks/logo-slide/inspector.js":
/*!********************************************!*\
  !*** ./src/blocks/logo-slide/inspector.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/index */ "./src/components/index.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);






const Inspector = props => {
  const attributes = props.attributes,
    setAttributes = props.setAttributes;
  const [contentType, setContentType] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_5__.useState)('front');
  props = Object.assign({}, props, {
    preAttributes: {}
  });
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, {
    key: "controls"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('General Settings', 'wpmozo-addons-lite-for-gutenberg'),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoMediaUploader, {
    attrKye: "logo",
    props: props,
    imageSrc: attributes.logo.url,
    onSelect: media => setAttributes({
      logo: media
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Alt Text', 'wpmozo-addons-lite-for-gutenberg'),
    value: attributes.altText,
    onChange: newValue => setAttributes({
      altText: newValue
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Link', 'wpmozo-addons-lite-for-gutenberg'),
    value: attributes.link,
    onChange: newValue => setAttributes({
      link: newValue
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.BaseControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Link Target', 'wpmozo-addons-lite-for-gutenberg'),
    className: "wpmozo-button-tabs-wrap"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ButtonGroup, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
    className: "wpmozo-button-tabs-btn",
    isPressed: 'same' === attributes.linkTarget ? true : false,
    onClick: () => setAttributes({
      linkTarget: 'same'
    }),
    icon: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Icon, {
      icon: "admin-links"
    }),
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Same Window', 'wpmozo-addons-lite-for-gutenberg')
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
    className: "wpmozo-button-tabs-btn",
    isPressed: 'external' === attributes.linkTarget ? true : false,
    onClick: () => setAttributes({
      linkTarget: 'external'
    }),
    icon: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Icon, {
      icon: "external"
    }),
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('External', 'wpmozo-addons-lite-for-gutenberg')
  }))))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, {
    key: "styles",
    group: "styles"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Logo Style', 'wpmozo-addons-lite-for-gutenberg'),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoColorPicker, {
    ColorKey: "logo",
    props: props,
    ColorTypes: [{
      key: 'Background',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Background Color', 'wpmozo-addons-lite-for-gutenberg')
    }]
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoDimensions, {
    DimensionKey: "logo",
    DimensionsTypes: {
      padding: true
    },
    props: props
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoBorder, {
    BorderKey: "logo",
    props: props
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Inspector);

/***/ }),

/***/ "./src/blocks/logo-slide/save.js":
/*!***************************************!*\
  !*** ./src/blocks/logo-slide/save.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const Save = ({
  attributes
}) => {
  const wpmozoCoreFun = window.wpmozo,
    ID = attributes.ID,
    altText = !wpmozoCoreFun.wpmozo_is_empty(attributes.altText) ? attributes.altText : 'alt',
    linkTarget = 'external' === attributes.linkTarget ? '_blank' : '_self';
  let logo = '';
  if (!wpmozoCoreFun.wpmozo_is_empty(attributes.link)) {
    logo = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: attributes.link,
      target: linkTarget
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "logo-wrap"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      className: "logo-img",
      src: attributes.logo.url,
      alt: altText
    })));
  } else {
    logo = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "logo-wrap"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      className: "logo-img",
      src: attributes.logo.url,
      alt: altText
    }));
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "swiper-slide",
    id: `block-${ID}`
  }, logo);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Save);

/***/ }),

/***/ "./src/blocks/logo-slide/style.js":
/*!****************************************!*\
  !*** ./src/blocks/logo-slide/style.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const Style = ({
  attributes,
  ID,
  clientId
}) => {
  const wpmozoCoreFun = window.wpmozo,
    parent = '#block-' + clientId,
    toConvertStyles = ['logo'],
    convertedStyle = wpmozoCoreFun.convetInlineStyleStr(toConvertStyles, attributes);
  let css = '';
  let allInline = [{
    selector: parent,
    style: {
      'background': attributes.logoBackground
    },
    additional: convertedStyle['logo']
  }];
  let generateStyle = wpmozoCoreFun.wpmozo_generate_style(allInline);
  if (!wpmozoCoreFun.wpmozo_is_empty(generateStyle)) {
    css += `
            ${generateStyle}
        `;
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("style", {
    className: "wpmozo-dynamic-style",
    "data-id": ID,
    "data-client-id": clientId
  }, css);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Style);

/***/ }),

/***/ "./src/blocks/logo-slider/attributes.js":
/*!**********************************************!*\
  !*** ./src/blocks/logo-slider/attributes.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);

const attributes = {
  ID: {
    type: "string"
  },
  images: {
    type: "array"
  },
  logoPerSlide: {
    type: "string",
    default: "4"
  },
  slidesPerGroup: {
    type: "string",
    default: "1"
  },
  spaceBetweenSlides: {
    type: "number",
    default: 20
  },
  sliderLoop: {
    type: "boolean",
    default: false
  },
  autoplay: {
    type: "boolean",
    default: true
  },
  enableLinearTransition: {
    type: "boolean"
  },
  autoplaySpeed: {
    type: "string",
    default: "3000"
  },
  pauseOnHover: {
    type: "boolean",
    default: true
  },
  transitionDuration: {
    type: "string",
    default: "1000"
  },
  showArrow: {
    type: "boolean",
    default: true
  },
  previousSlideArrow: {
    type: "string"
  },
  nextSlideArrow: {
    type: "string"
  },
  showArrowOnHover: {
    type: "boolean"
  },
  arrowsPosition: {
    type: "string",
    default: "inside"
  },
  showControlDot: {
    type: "boolean",
    default: true
  },
  controlDotStyle: {
    type: "string",
    default: "solid_dot"
  },
  enableDynamicDots: {
    type: "boolean",
    default: false
  },
  containerbackground: {
    type: "string"
  },
  containerpadding: {
    type: "object"
  },
  sliderArrowColor: {
    type: "string"
  },
  sliderArrowBackground: {
    type: "string"
  },
  sliderActiveDoteColor: {
    type: "string"
  },
  sliderInactiveDoteColor: {
    type: "string"
  },
  arrowFontSize: {
    type: "string"
  },
  arrowpadding: {
    type: "object"
  },
  logoWidth: {
    type: "number",
    default: 150
  },
  logoHeight: {
    type: "number",
    default: 150
  },
  tabletLogoPerSlide: {
    type: "string",
    default: "3"
  },
  tabletSlidesPerGroup: {
    type: "string",
    default: "1"
  },
  tabletSpaceBetweenSlides: {
    type: "number",
    default: 20
  },
  mobileLogoPerSlide: {
    type: "string",
    default: "1"
  },
  mobileSlidesPerGroup: {
    type: "string",
    default: "1"
  },
  mobileSpaceBetweenSlides: {
    type: "number",
    default: 20
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (attributes);

/***/ }),

/***/ "./src/blocks/logo-slider/edit.js":
/*!****************************************!*\
  !*** ./src/blocks/logo-slider/edit.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _inspector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inspector */ "./src/blocks/logo-slider/inspector.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style */ "./src/blocks/logo-slider/style.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_6__);








const Edit = props => {
  const wpmozoCoreFun = window.wpmozo,
    attributes = props.attributes,
    setAttributes = props.setAttributes,
    clientId = props.clientId,
    ID = wpmozoCoreFun.getIdByClientid(clientId),
    blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.useBlockProps)({
      className: 'wpmozo-adfgu-logo-slider-main'
    }),
    buttonNextClass = !wpmozoCoreFun.wpmozo_is_empty(attributes.nextSlideArrow) ? `custom-swiper-button-next swiper-button-next ${attributes.nextSlideArrow}` : 'swiper-button-next',
    buttonPrevClass = !wpmozoCoreFun.wpmozo_is_empty(attributes.previousSlideArrow) ? `custom-swiper-button-prev swiper-button-prev ${attributes.previousSlideArrow}` : 'swiper-button-prev';
  attributes.ID = ID;
  let innerBlocks = [],
    swiperInstance = null,
    paginationClass = attributes.enableDynamicDots ? ' swiper-pagination-bullets-dynamic' : '';
  if (attributes.enableDynamicDots && ('stretched_dot' === attributes.controlDotStyle || 'line' === attributes.controlDotStyle || 'rounded_line' === attributes.controlDotStyle)) {
    paginationClass = '';
  }
  if (!wpmozoCoreFun.wpmozo_is_empty(attributes.images)) {
    attributes.images.map(logo => {
      innerBlocks.push(['wpmozo/logo-slide', {
        logo: logo,
        lock: {
          remove: true,
          move: false
        }
      }]);
    });
  }
  const innerBlocksProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.useInnerBlocksProps)(blockProps, {
    allowedBlocks: ['wpmozo/logo-slide'],
    template: innerBlocks
  });
  const initSwiper = (attributes, props) => {
    let productsPerSlide = parseInt(attributes.logoPerSlide),
      spaceBetweenSlides = parseInt(attributes.spaceBetweenSlides),
      slidesPerGroup = parseInt(attributes.slidesPerGroup),
      tabletLogoPerSlide = parseInt(attributes.tabletLogoPerSlide),
      tabletSlidesPerGroup = parseInt(attributes.tabletSlidesPerGroup),
      tabletSpaceBetweenSlides = parseInt(attributes.tabletSpaceBetweenSlides),
      mobileLogoPerSlide = parseInt(attributes.mobileLogoPerSlide),
      mobileSpaceBetweenSlides = parseInt(attributes.mobileSpaceBetweenSlides),
      mobileSlidesPerGroup = parseInt(attributes.mobileSlidesPerGroup),
      buttonNextClass = !wpmozoCoreFun.wpmozo_is_empty(attributes.nextSlideArrow) ? '.custom-swiper-button-next' : '.swiper-button-next',
      buttonPrevClass = !wpmozoCoreFun.wpmozo_is_empty(attributes.previousSlideArrow) ? '.custom-swiper-button-prev' : '.swiper-button-prev';
    let loop = attributes.sliderLoop,
      speed = attributes.transitionDuration,
      arrows = false,
      dots = false,
      autoplaySlides = false,
      slidesPerGroupSkip = 0;
    if (productsPerSlide > slidesPerGroup && 1 !== slidesPerGroup) {
      slidesPerGroupSkip = productsPerSlide - slidesPerGroup;
    }
    if (attributes.showArrow) {
      arrows = {
        nextEl: '#block-' + props.clientId + ' ' + buttonNextClass,
        prevEl: '#block-' + props.clientId + ' ' + buttonPrevClass
      };
    }
    if (attributes.showControlDot) {
      dots = {
        el: '#block-' + props.clientId + ' .swiper-pagination',
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
      spaceBetween: slidesPerGroup,
      slidesPerGroup: slidesPerGroup,
      on: {
        tap: function (swiper, event) {
          (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_6__.dispatch)('core/block-editor').selectBlock(props.clientId);
        }
      },
      autoplay: autoplaySlides,
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
    const swiper = new Swiper('.swiper[data-client-id="' + props.clientId + '"]', options);
    jQuery(document).on("mouseenter", '.swiper[data-client-id="' + clientId + '"]', function (e) {
      let swiperContainer = jQuery(this)[0],
        swiper = swiperContainer.hasOwnProperty('swiper') ? swiperContainer.swiper : null;
      if (swiper.params.autoplay.disableOnInteraction && typeof swiper.autoplay.stop === "function") {
        swiper.autoplay.stop();
      }
    });
    jQuery(document).on("mouseleave", '.swiper[data-client-id="' + clientId + '"]', function (e) {
      let swiperContainer = jQuery(this)[0],
        swiper = swiperContainer.hasOwnProperty('swiper') ? swiperContainer.swiper : null;
      if (swiper.params.autoplay.disableOnInteraction && typeof swiper.autoplay.start === "function") {
        swiper.autoplay.start();
      }
    });
    return swiper;
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!wpmozoCoreFun.wpmozo_is_empty(innerBlocks) && !jQuery('.swiper[data-client-id="' + clientId + '"]').hasClass('swiper-initialized')) {
      swiperInstance = initSwiper(attributes, props);
    }
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!wpmozoCoreFun.wpmozo_is_empty(innerBlocks)) {
      let el = jQuery('.swiper[data-client-id="' + clientId + '"]')[0],
        swiperInstance = el.hasOwnProperty('swiper') ? el.swiper : null;
      if (!wpmozoCoreFun.wpmozo_is_empty(swiperInstance)) {
        swiperInstance.destroy(true, true);
        swiperInstance = initSwiper(attributes, props);
      }
    }
  }, [attributes.logoPerSlide, attributes.spaceBetweenSlides, attributes.slidesPerGroup, attributes.tabletLogoPerSlide, attributes.tabletSlidesPerGroup, attributes.tabletSpaceBetweenSlides, attributes.mobileLogoPerSlide, attributes.mobileSpaceBetweenSlides, attributes.mobileSlidesPerGroup, attributes.nextSlideArrow, attributes.previousSlideArrow, attributes.sliderLoop, attributes.showArrow, attributes.showControlDot, attributes.enableDynamicDots, attributes.autoplay, attributes.autoplaySpeed, attributes.transitionDuration, attributes.pauseOnHover]);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.Fragment, null, wpmozoCoreFun.wpmozo_is_empty(attributes.images) && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.MediaPlaceholder, {
    multiple: true,
    onSelect: media => setAttributes({
      images: media
    }),
    onFilesPreUpload: media => setAttributes({
      images: media
    }),
    onSelectURL: false,
    allowedTypes: ['-', 'image'],
    labels: {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Add Logos', 'wpmozo-addons-lite-for-gutenberg')
    }
  }), !wpmozoCoreFun.wpmozo_is_empty(innerBlocks) && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_inspector__WEBPACK_IMPORTED_MODULE_1__["default"], {
    ...props
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...blockProps,
    id: `block-${clientId}`
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_style__WEBPACK_IMPORTED_MODULE_2__["default"], {
    attributes: attributes,
    ID: ID,
    clientId: clientId
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wpmozo-adfgu-logo-slider-wrap"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wpmozo-adfgu-logo-slider-inner-wrap"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "swiper swiper-container",
    "data-client-id": clientId
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "swiper-wrapper"
  }, innerBlocksProps.children)), attributes.showArrow && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `wpmozo-adfgu-logo-slider-navigation wpmozo-adfgu-arrows-${attributes.arrowsPosition}`
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: buttonNextClass
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: buttonPrevClass
  }))), attributes.showControlDot && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wpmozo-adfgu-logo-slider-pagination"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `swiper-pagination ${attributes.controlDotStyle}${paginationClass}`
  }))))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Edit);

/***/ }),

/***/ "./src/blocks/logo-slider/icon.js":
/*!****************************************!*\
  !*** ./src/blocks/logo-slider/icon.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const Icon = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  version: "1.1",
  width: "1024",
  height: "1024",
  viewBox: "0 0 1024 1024"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
  id: "icomoon-ignore"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  fill: "#000",
  d: "M117.333 635.733l-96-96c-17.067-17.067-17.067-42.667 0-57.6l96-96c8.533-8.533 23.467-8.533 32 0v0c8.533 8.533 8.533 23.467 0 32l-87.467 93.867 89.6 89.6c8.533 8.533 8.533 23.467 0 32v0c-8.533 12.8-23.467 12.8-34.133 2.133z"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  fill: "#000",
  d: "M904.533 637.867l96-96c17.067-17.067 17.067-42.667 0-59.733l-96-96c-8.533-8.533-23.467-8.533-32 0v0c-8.533 8.533-8.533 23.467 0 32l91.733 91.733-91.733 91.733c-8.533 8.533-8.533 23.467 0 32v0c6.4 14.933 21.333 14.933 32 4.267z"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  fill: "#000",
  d: "M608 170.667c93.867 0 170.667 76.8 170.667 170.667v341.333c0 93.867-76.8 170.667-170.667 170.667h-192c-93.867 0-170.667-76.8-170.667-170.667v-341.333c0-93.867 76.8-170.667 170.667-170.667h192zM608 128h-192c-117.333 0-213.333 96-213.333 213.333v341.333c0 117.333 96 213.333 213.333 213.333h192c117.333 0 213.333-96 213.333-213.333v-341.333c0-117.333-96-213.333-213.333-213.333v0z"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  fill: "#000",
  d: "M392.533 460.8h93.867v27.733h-130.133v-206.933h36.267v179.2z"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  fill: "#000",
  d: "M497.067 714.667c-6.4 10.667-17.067 17.067-32 21.333s-27.733 8.533-44.8 8.533c-17.067 0-32-4.267-44.8-12.8s-23.467-19.2-29.867-34.133c-6.4-14.933-10.667-32-10.667-51.2v-17.067c0-32 6.4-55.467 21.333-72.533s36.267-25.6 61.867-25.6c23.467 0 40.533 6.4 55.467 17.067 12.8 10.667 21.333 27.733 23.467 49.067h-34.133c-4.267-25.6-19.2-36.267-42.667-36.267-17.067 0-27.733 6.4-36.267 17.067s-12.8 27.733-12.8 51.2v14.933c0 21.333 4.267 40.533 14.933 51.2 8.533 12.8 23.467 19.2 38.4 19.2 19.2 0 32-4.267 38.4-12.8v-40.533h-42.667v-27.733h78.933v81.067z"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  fill: "#000",
  d: "M689.067 392.533c0 19.2-4.267 38.4-10.667 53.333s-17.067 27.733-29.867 34.133c-12.8 8.533-27.733 12.8-44.8 12.8s-32-4.267-44.8-12.8c-12.8-8.533-23.467-19.2-29.867-34.133s-10.667-32-10.667-51.2v-10.667c0-19.2 4.267-38.4 10.667-53.333s17.067-27.733 29.867-36.267c12.8-8.533 27.733-12.8 44.8-12.8s32 4.267 44.8 12.8c12.8 8.533 23.467 19.2 29.867 34.133s10.667 32 10.667 53.333v10.667zM654.933 379.733c0-23.467-4.267-40.533-12.8-53.333s-21.333-19.2-36.267-19.2c-14.933 0-27.733 6.4-36.267 19.2-10.667 14.933-14.933 32-14.933 53.333v12.8c0 23.467 4.267 40.533 12.8 53.333s21.333 19.2 36.267 19.2c14.933 0 27.733-6.4 36.267-17.067s12.8-29.867 12.8-53.333v-14.933z"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  fill: "#000",
  d: "M689.067 644.267c0 19.2-4.267 38.4-10.667 53.333s-17.067 27.733-29.867 34.133c-12.8 8.533-27.733 12.8-44.8 12.8s-32-4.267-44.8-12.8c-12.8-8.533-23.467-19.2-29.867-34.133s-10.667-32-10.667-51.2v-10.667c0-19.2 4.267-38.4 10.667-53.333s17.067-27.733 29.867-36.267c12.8-8.533 27.733-12.8 44.8-12.8s32 4.267 44.8 12.8c12.8 8.533 23.467 19.2 29.867 34.133s10.667 32 10.667 53.333v10.667zM654.933 631.467c0-23.467-4.267-40.533-12.8-53.333s-21.333-19.2-36.267-19.2c-14.933 0-27.733 6.4-36.267 19.2s-12.8 29.867-12.8 51.2v12.8c0 23.467 4.267 40.533 12.8 53.333s21.333 19.2 36.267 19.2c14.933 0 27.733-6.4 36.267-17.067s12.8-29.867 12.8-53.333v-12.8z"
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Icon);

/***/ }),

/***/ "./src/blocks/logo-slider/index.js":
/*!*****************************************!*\
  !*** ./src/blocks/logo-slider/index.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./attributes */ "./src/blocks/logo-slider/attributes.js");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./src/blocks/logo-slider/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ "./src/blocks/logo-slider/save.js");
/* harmony import */ var _icon_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icon.js */ "./src/blocks/logo-slider/icon.js");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__);






(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__.registerBlockType)('wpmozo/logo-slider', {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Logo Slider', 'wpmozo-addons-lite-for-gutenberg'),
  icon: _icon_js__WEBPACK_IMPORTED_MODULE_3__["default"],
  apiVersion: 2,
  category: 'wpmozo',
  keywords: ['wpmozo', 'logo-slider', 'slider', 'logo'],
  attributes: _attributes__WEBPACK_IMPORTED_MODULE_0__["default"],
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_2__["default"]
});

/***/ }),

/***/ "./src/blocks/logo-slider/inspector.js":
/*!*********************************************!*\
  !*** ./src/blocks/logo-slider/inspector.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/index */ "./src/components/index.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);






const Inspector = props => {
  const attributes = props.attributes,
    setAttributes = props.setAttributes,
    [deviceType, setDeviceType] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_5__.useState)('tablet');
  props = Object.assign({}, props, {
    preAttributes: {}
  });
  const oneToTwenty = [{
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('1', 'wpmozo-addons-lite-for-gutenberg'),
    value: '1'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('2', 'wpmozo-addons-lite-for-gutenberg'),
    value: '2'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('3', 'wpmozo-addons-lite-for-gutenberg'),
    value: '3'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('4', 'wpmozo-addons-lite-for-gutenberg'),
    value: '4'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('5', 'wpmozo-addons-lite-for-gutenberg'),
    value: '5'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('6', 'wpmozo-addons-lite-for-gutenberg'),
    value: '6'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('7', 'wpmozo-addons-lite-for-gutenberg'),
    value: '7'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('8', 'wpmozo-addons-lite-for-gutenberg'),
    value: '8'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('9', 'wpmozo-addons-lite-for-gutenberg'),
    value: '9'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('10', 'wpmozo-addons-lite-for-gutenberg'),
    value: '10'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('11', 'wpmozo-addons-lite-for-gutenberg'),
    value: '11'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('12', 'wpmozo-addons-lite-for-gutenberg'),
    value: '12'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('13', 'wpmozo-addons-lite-for-gutenberg'),
    value: '13'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('14', 'wpmozo-addons-lite-for-gutenberg'),
    value: '14'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('15', 'wpmozo-addons-lite-for-gutenberg'),
    value: '15'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('16', 'wpmozo-addons-lite-for-gutenberg'),
    value: '16'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('17', 'wpmozo-addons-lite-for-gutenberg'),
    value: '17'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('18', 'wpmozo-addons-lite-for-gutenberg'),
    value: '18'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('19', 'wpmozo-addons-lite-for-gutenberg'),
    value: '19'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('20', 'wpmozo-addons-lite-for-gutenberg'),
    value: '20'
  }];
  const arrowsPositions = [{
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Inside', 'wpmozo-addons-lite-for-gutenberg'),
    value: 'inside'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Outside', 'wpmozo-addons-lite-for-gutenberg'),
    value: 'outside'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Top Left', 'wpmozo-addons-lite-for-gutenberg'),
    value: 'top_left'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Top Right', 'wpmozo-addons-lite-for-gutenberg'),
    value: 'top_right'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Top Center', 'wpmozo-addons-lite-for-gutenberg'),
    value: 'top_center'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Bottom Left', 'wpmozo-addons-lite-for-gutenberg'),
    value: 'bottom_left'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Bottom Right', 'wpmozo-addons-lite-for-gutenberg'),
    value: 'bottom_right'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Bottom Center', 'wpmozo-addons-lite-for-gutenberg'),
    value: 'bottom_center'
  }];
  const controlDotStyles = [{
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Solid Dot', 'wpmozo-addons-lite-for-gutenberg'),
    value: 'solid_dot'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Transparent Dot', 'wpmozo-addons-lite-for-gutenberg'),
    value: 'transparent_dot'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Stretched Dot', 'wpmozo-addons-lite-for-gutenberg'),
    value: 'stretched_dot'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Line', 'wpmozo-addons-lite-for-gutenberg'),
    value: 'line'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Rounded Line', 'wpmozo-addons-lite-for-gutenberg'),
    value: 'rounded_line'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Squared Dot', 'wpmozo-addons-lite-for-gutenberg'),
    value: 'square_dot'
  }];
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, {
    key: "controls"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Slider', 'wpmozo-addons-lite-for-gutenberg'),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Number of Logo Per View', 'wpmozo-addons-lite-for-gutenberg'),
    value: attributes.logoPerSlide,
    options: oneToTwenty,
    onChange: newValue => setAttributes({
      logoPerSlide: newValue
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Number of Slides Per Group', 'wpmozo-addons-lite-for-gutenberg'),
    value: attributes.slidesPerGroup,
    options: oneToTwenty,
    onChange: newValue => setAttributes({
      slidesPerGroup: newValue
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Space between Slides', 'wpmozo-addons-lite-for-gutenberg'),
    value: attributes.spaceBetweenSlides,
    onChange: newValue => setAttributes({
      spaceBetweenSlides: newValue
    }),
    min: 0,
    step: 1,
    max: 100
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Enable Loop', 'wpmozo-addons-lite-for-gutenberg'),
    checked: attributes.sliderLoop,
    onChange: newValue => setAttributes({
      sliderLoop: newValue
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Autoplay', 'wpmozo-addons-lite-for-gutenberg'),
    checked: attributes.autoplay,
    onChange: newValue => setAttributes({
      autoplay: newValue
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Enable Linear Transition', 'wpmozo-addons-lite-for-gutenberg'),
    checked: attributes.enableLinearTransition,
    onChange: newValue => setAttributes({
      enableLinearTransition: newValue
    })
  }), attributes.autoplay && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Autoplay Delay', 'wpmozo-addons-lite-for-gutenberg'),
    value: attributes.autoplaySpeed,
    onChange: newValue => setAttributes({
      autoplaySpeed: newValue
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Pause On Hover', 'wpmozo-addons-lite-for-gutenberg'),
    checked: attributes.pauseOnHover,
    onChange: newValue => setAttributes({
      pauseOnHover: newValue
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Transition Duration', 'wpmozo-addons-lite-for-gutenberg'),
    value: attributes.transitionDuration,
    onChange: newValue => setAttributes({
      transitionDuration: newValue
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Show Arrows', 'wpmozo-addons-lite-for-gutenberg'),
    checked: attributes.showArrow,
    onChange: newValue => setAttributes({
      showArrow: newValue
    })
  }), attributes.showArrow && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoIconpicker, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Previous Arrow', 'wpmozo-addons-lite-for-gutenberg'),
    iconPickerKey: "previousSlideArrow",
    props: props,
    value: attributes.previousSlideArrow,
    onChange: newValue => setAttributes({
      previousSlideArrow: newValue
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoIconpicker, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Next Arrow', 'wpmozo-addons-lite-for-gutenberg'),
    iconPickerKey: "nextSlideArrow",
    props: props,
    value: attributes.nextSlideArrow,
    onChange: newValue => setAttributes({
      nextSlideArrow: newValue
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Show Arrows Only On Hover', 'wpmozo-addons-lite-for-gutenberg'),
    checked: attributes.showArrowOnHover,
    onChange: newValue => setAttributes({
      showArrowOnHover: newValue
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Arrows Position', 'wpmozo-addons-lite-for-gutenberg'),
    value: attributes.arrowsPosition,
    options: arrowsPositions,
    onChange: newValue => setAttributes({
      arrowsPosition: newValue
    })
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Show Dots Pagination', 'wpmozo-addons-lite-for-gutenberg'),
    checked: attributes.showControlDot,
    onChange: newValue => setAttributes({
      showControlDot: newValue
    })
  }), attributes.showControlDot && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Dots Pagination Style', 'wpmozo-addons-lite-for-gutenberg'),
    value: attributes.controlDotStyle,
    options: controlDotStyles,
    onChange: newValue => setAttributes({
      controlDotStyle: newValue
    })
  }), 'stretched_dot' != attributes.controlDotStyle && 'line' != attributes.controlDotStyle && 'rounded_line' != attributes.controlDotStyle && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Enable Dynamic Dots', 'wpmozo-addons-lite-for-gutenberg'),
    checked: attributes.enableDynamicDots,
    onChange: newValue => setAttributes({
      enableDynamicDots: newValue
    })
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Slider Responsive', 'wpmozo-addons-lite-for-gutenberg'),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.BaseControl, {
    className: "wpmozo-color-combo-wrap"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ButtonGroup, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
    className: "wpmozo-color-combo-type",
    isPressed: 'tablet' === deviceType ? true : false,
    onClick: () => setDeviceType('tablet')
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Tablet', 'wpmozo-addons-lite-for-gutenberg')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
    className: "wpmozo-color-combo-type",
    isPressed: 'mobile' === deviceType ? true : false,
    onClick: () => setDeviceType('mobile')
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Mobile', 'wpmozo-addons-lite-for-gutenberg'))), 'tablet' === deviceType && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Number of Logo Per View', 'wpmozo-addons-lite-for-gutenberg'),
    value: attributes.tabletLogoPerSlide,
    options: oneToTwenty,
    onChange: newValue => setAttributes({
      tabletLogoPerSlide: newValue
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Number of Slides Per Group', 'wpmozo-addons-lite-for-gutenberg'),
    value: attributes.tabletSlidesPerGroup,
    options: oneToTwenty,
    onChange: newValue => setAttributes({
      tabletSlidesPerGroup: newValue
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Space between Slides', 'wpmozo-addons-lite-for-gutenberg'),
    value: attributes.tabletSpaceBetweenSlides,
    onChange: newValue => setAttributes({
      tabletSpaceBetweenSlides: newValue
    }),
    min: 0,
    step: 1,
    max: 100
  })), 'mobile' === deviceType && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Number of Logo Per View', 'wpmozo-addons-lite-for-gutenberg'),
    value: attributes.mobileLogoPerSlide,
    options: oneToTwenty,
    onChange: newValue => setAttributes({
      mobileLogoPerSlide: newValue
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Number of Slides Per Group', 'wpmozo-addons-lite-for-gutenberg'),
    value: attributes.mobileSlidesPerGroup,
    options: oneToTwenty,
    onChange: newValue => setAttributes({
      mobileSlidesPerGroup: newValue
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Space between Slides', 'wpmozo-addons-lite-for-gutenberg'),
    value: attributes.mobileSpaceBetweenSlides,
    onChange: newValue => setAttributes({
      mobileSpaceBetweenSlides: newValue
    }),
    min: 0,
    step: 1,
    max: 100
  }))))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, {
    key: "styles",
    group: "styles"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Container', 'wpmozo-addons-lite-for-gutenberg'),
    className: "wpmozo-typography-panel",
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoColorPicker, {
    ColorKey: "container",
    props: props,
    ColorTypes: [{
      key: 'background',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Background Color', 'wpmozo-addons-lite-for-gutenberg')
    }]
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoDimensions, {
    DimensionKey: "container",
    DimensionsTypes: {
      padding: true
    },
    props: props
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Slider', 'wpmozo-addons-lite-for-gutenberg'),
    className: "wpmozo-typography-panel",
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoColorPicker, {
    ColorKey: "slider",
    props: props,
    ColorTypes: [{
      key: 'ArrowColor',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Arrow Color', 'wpmozo-addons-lite-for-gutenberg')
    }, {
      key: 'ArrowBackground',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Arrow Background', 'wpmozo-addons-lite-for-gutenberg')
    }, {
      key: 'ActiveDoteColor',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Active Dot Pagination Color', 'wpmozo-addons-lite-for-gutenberg')
    }, {
      key: 'InactiveDoteColor',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Inactive Dot Pagination Color', 'wpmozo-addons-lite-for-gutenberg')
    }]
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoTypography, {
    TypographyKey: "arrow",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Arrow Font Size', 'wpmozo-addons-lite-for-gutenberg'),
    props: props,
    TypoTypes: {
      'FontSize': true
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoDimensions, {
    DimensionKey: "arrow",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Arrows Padding', 'wpmozo-addons-lite-for-gutenberg'),
    DimensionsTypes: {
      padding: true
    },
    props: props
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Logo', 'wpmozo-addons-lite-for-gutenberg'),
    className: "wpmozo-typography-panel",
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Logo Width', 'wpmozo-addons-lite-for-gutenberg'),
    value: attributes.logoWidth,
    onChange: newValue => setAttributes({
      logoWidth: newValue
    }),
    min: 100,
    step: 1,
    max: 500
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Logo Height', 'wpmozo-addons-lite-for-gutenberg'),
    value: attributes.logoHeight,
    onChange: newValue => setAttributes({
      logoHeight: newValue
    }),
    min: 100,
    step: 1,
    max: 500
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Inspector);

/***/ }),

/***/ "./src/blocks/logo-slider/save.js":
/*!****************************************!*\
  !*** ./src/blocks/logo-slider/save.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);


const Save = ({
  attributes
}) => {
  const wpmozoCoreFun = window.wpmozo,
    ID = attributes.ID,
    blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save({
      className: 'wpmozo-adfgu-logo-slider-main'
    });
  let innerBlocks = [],
    innerBlocksProps = null,
    buttonNextClass = !wpmozoCoreFun.wpmozo_is_empty(attributes.nextSlideArrow) ? `custom-swiper-button-next swiper-button-next ${attributes.nextSlideArrow}` : 'swiper-button-next',
    buttonPrevClass = !wpmozoCoreFun.wpmozo_is_empty(attributes.previousSlideArrow) ? `custom-swiper-button-prev swiper-button-prev ${attributes.previousSlideArrow}` : 'swiper-button-prev',
    paginationClass = attributes.enableDynamicDots ? ' swiper-pagination-bullets-dynamic' : '';
  if (!wpmozoCoreFun.wpmozo_is_empty(attributes.images)) {
    attributes.images.map(logo => {
      innerBlocks.push(['wpmozo/logo-slide', {
        logo: logo,
        lock: {
          remove: true
        }
      }]);
    });
    innerBlocksProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useInnerBlocksProps.save(blockProps, {
      allowedBlocks: ['wpmozo/logo-slide'],
      template: innerBlocks
    });
  }
  if (wpmozoCoreFun.wpmozo_is_empty(innerBlocks)) {
    return null;
  }
  let dataAttr = {
    logoPerSlide: attributes.logoPerSlide,
    spaceBetweenSlides: attributes.spaceBetweenSlides,
    slidesPerGroup: attributes.slidesPerGroup,
    tabletLogoPerSlide: attributes.tabletLogoPerSlide,
    tabletSlidesPerGroup: attributes.tabletSlidesPerGroup,
    tabletSpaceBetweenSlides: attributes.tabletSpaceBetweenSlides,
    mobileLogoPerSlide: attributes.mobileLogoPerSlide,
    mobileSpaceBetweenSlides: attributes.mobileSpaceBetweenSlides,
    mobileSlidesPerGroup: attributes.mobileSlidesPerGroup,
    nextSlideArrow: attributes.nextSlideArrow,
    previousSlideArrow: attributes.previousSlideArrow,
    sliderLoop: attributes.sliderLoop,
    transitionDuration: attributes.transitionDuration,
    showArrow: attributes.showArrow,
    showControlDot: attributes.showControlDot,
    dynamicBullets: attributes.dynamicBullets,
    autoplay: attributes.autoplay,
    pauseOnHover: attributes.pauseOnHover,
    autoplaySpeed: attributes.autoplaySpeed
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...innerBlocksProps,
    id: `block-${ID}`
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wpmozo-adfgu-logo-slider-wrap",
    "data-attr": JSON.stringify(dataAttr)
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wpmozo-adfgu-logo-slider-inner-wrap"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "swiper swiper-container"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "swiper-wrapper"
  }, innerBlocksProps.children)), attributes.showControlDot && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wpmozo-adfgu-logo-slider-pagination"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `swiper-pagination ${attributes.controlDotStyle}${paginationClass}`
  })), attributes.showArrow && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `wpmozo-adfgu-logo-slider-navigation wpmozo-adfgu-arrows-${attributes.arrowsPosition}`
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: buttonNextClass
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: buttonPrevClass
  }))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Save);

/***/ }),

/***/ "./src/blocks/logo-slider/style.js":
/*!*****************************************!*\
  !*** ./src/blocks/logo-slider/style.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const Style = ({
  attributes,
  ID,
  clientId
}) => {
  const wpmozoCoreFun = window.wpmozo,
    parent = '#block-' + clientId,
    toConvertStyles = ['container', 'arrow'],
    convertedStyle = wpmozoCoreFun.convetInlineStyleStr(toConvertStyles, attributes);
  let css = '';
  let allInline = [{
    selector: '.logo-img',
    style: {
      'width': attributes.logoWidth + 'px',
      'height': attributes.logoHeight + 'px'
    }
  }, {
    selector: '.wpmozo-adfgu-logo-slider-inner-wrap',
    additional: convertedStyle['container']
  }, {
    selector: '.swiper-button-next:after, .swiper-button-next:before, .swiper-button-prev:after, .swiper-button-prev:before',
    style: {
      'color': attributes.sliderArrowColor,
      'font-size': attributes.arrowFontSize
    }
  }, {
    selector: '.swiper-button-next, .swiper-button-prev',
    style: {
      'background': attributes.sliderArrowBackground
    },
    additional: convertedStyle['arrow']
  }, {
    selector: '.swiper-pagination-bullet.swiper-pagination-bullet-active',
    style: {
      'background': attributes.sliderActiveDoteColor
    }
  }, {
    selector: '.swiper-pagination-bullet',
    style: {
      'background': attributes.sliderInactiveDoteColor
    }
  }];
  if (!wpmozoCoreFun.wpmozo_is_empty(attributes.nextSlideArrow)) {
    allInline.push({
      selector: '.custom-swiper-button-next:after',
      style: {
        'display': 'none !important;'
      }
    });
  }
  if (!wpmozoCoreFun.wpmozo_is_empty(attributes.previousSlideArrow)) {
    allInline.push({
      selector: '.custom-swiper-button-prev:after',
      style: {
        'display': 'none !important;'
      }
    });
  }
  if (attributes.enableLinearTransition) {
    allInline.push({
      selector: '.swiper-wrapper',
      style: {
        'transition-timing-function': 'linear !important'
      }
    });
  }
  if (attributes.showArrowOnHover) {
    allInline.push({
      selector: '.wpmozo-adfgu-logo-slider-navigation .swiper-button-prev',
      additional: `visibility: hidden; opacity: 0; transition: all 300ms ease;`
    });
    allInline.push({
      selector: '.wpmozo-adfgu-logo-slider-navigation .swiper-button-next',
      additional: `visibility: hidden; opacity: 0; transition: all 300ms ease;`
    });
    allInline.push({
      selector: '.wpmozo-adfgu-logo-slider-wrap:hover .wpmozo-adfgu-logo-slider-navigation .swiper-button-prev, .wpmozo-adfgu-logo-slider-wrap:hover .wpmozo-adfgu-logo-slider-navigation .swiper-button-next',
      additional: `visibility: visible; opacity: 1;`
    });
    allInline.push({
      selector: '.wpmozo-adfgu-logo-slider-wrap:hover .wpmozo-adfgu-logo-slider-navigation .swiper-button-prev.swiper-button-disabled, .wpmozo-adfgu-logo-slider-wrap:hover .wpmozo-adfgu-logo-slider-navigation .swiper-button-next.swiper-button-disabled',
      additional: `opacity: 0.35;`
    });
    /* Outside Slider */
    allInline.push({
      selector: '.wpmozo-adfgu-arrows-outside .swiper-button-prev',
      additional: `left: 50px;`
    });
    allInline.push({
      selector: '.wpmozo-adfgu-arrows-outside .swiper-button-next',
      additional: `right: 50px;`
    });
    allInline.push({
      selector: '.wpmozo-adfgu-logo-slider-wrap:hover .wpmozo-adfgu-arrows-outside .swiper-button-prev',
      additional: `left: 0;`
    });
    allInline.push({
      selector: '.wpmozo-adfgu-logo-slider-wrap:hover .wpmozo-adfgu-arrows-outside .swiper-button-next',
      additional: `right: 0;`
    });
    /* Inside Slider */
    allInline.push({
      selector: '.wpmozo-adfgu-arrows-inside .swiper-button-prev',
      additional: `left: -50px;`
    });
    allInline.push({
      selector: '.wpmozo-adfgu-arrows-inside .swiper-button-next',
      additional: `right: -50px;`
    });
    allInline.push({
      selector: '.wpmozo-adfgu-logo-slider-wrap:hover .wpmozo-adfgu-arrows-inside .swiper-button-prev',
      additional: `left: 0;`
    });
    allInline.push({
      selector: '.wpmozo-adfgu-logo-slider-wrap:hover .wpmozo-adfgu-arrows-inside .swiper-button-next',
      additional: `right: 0;`
    });
  }
  let generateStyle = wpmozoCoreFun.wpmozo_generate_style(allInline);
  if (!wpmozoCoreFun.wpmozo_is_empty(generateStyle)) {
    css += `
            ${parent} {
                ${generateStyle}
            }
        `;
  }
  if (!wpmozoCoreFun.wpmozo_is_empty(attributes.containerbackground)) {
    css += `
            ${parent} {
                background: ${attributes.containerbackground};
            }
        `;
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("style", {
    className: "wpmozo-dynamic-style",
    "data-id": ID,
    "data-client-id": clientId
  }, css);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Style);

/***/ }),

/***/ "./src/blocks/separator/attributes.js":
/*!********************************************!*\
  !*** ./src/blocks/separator/attributes.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);

const attributes = {
  ID: {
    type: "string"
  },
  title: {
    type: "string",
    default: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Separator Title', 'wpmozo-addons-lite-for-gutenberg')
  },
  separatorType: {
    type: "string",
    default: "line"
  },
  lineUseWith: {
    type: "string",
    default: "onlySeparator"
  },
  separatorText: {
    type: "string",
    default: ""
  },
  separatorIcon: {
    type: "string",
    default: ""
  },
  iconPosition: {
    type: "string",
    default: "center"
  },
  enableIconFontSize: {
    type: "boolean",
    default: false
  },
  iconFontSize: {
    type: "number",
    default: 32
  },
  iconColor: {
    type: "string"
  },
  styleIcon: {
    type: "boolean",
    default: false
  },
  iconShape: {
    type: "string",
    default: "square"
  },
  shapeBackground: {
    type: "string"
  },
  enableShapeBorder: {
    type: "boolean",
    default: false
  },
  shapeBorderColor: {
    type: "string"
  },
  separatorImage: {
    type: "string",
    default: ""
  },
  imageWidth: {
    type: "number"
  },
  imagePosition: {
    type: "string",
    default: "center"
  },
  lineStyle: {
    type: "string",
    default: "solid"
  },
  separatorThickness: {
    type: "number",
    default: 3
  },
  separatorGradient: {
    type: "string"
  },
  separatorColor: {
    type: "string",
    default: "#2b87da"
  },
  shadowColor: {
    type: "string",
    default: "#2b87da"
  },
  textNormalColor: {
    type: "string",
    default: "#222222"
  },
  textHoverColor: {
    type: "string",
    default: "#000000"
  },
  textNormalFontSize: {
    type: "string"
  },
  textNormalFontAppearance: {
    type: "object",
    fontStyle: {
      type: "string"
    },
    fontWeight: {
      type: "string"
    },
    default: {
      fontStyle: "",
      fontWeight: ""
    }
  },
  textNormalLetterSpacing: {
    type: "string"
  },
  textNormalDecoration: {
    type: "string"
  },
  textNormalLetterCase: {
    type: "string"
  },
  textNormalLineHeight: {
    type: "string"
  },
  textHoverFontSize: {
    type: "string"
  },
  textHoverFontAppearance: {
    type: "object",
    fontStyle: {
      type: "string"
    },
    fontWeight: {
      type: "string"
    },
    default: {
      fontStyle: "",
      fontWeight: ""
    }
  },
  textHoverLetterSpacing: {
    type: "string"
  },
  textHoverDecoration: {
    type: "string"
  },
  textHoverLetterCase: {
    type: "string"
  },
  textHoverLineHeight: {
    type: "string"
  },
  textAlign: {
    type: "string",
    default: "center"
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (attributes);

/***/ }),

/***/ "./src/blocks/separator/edit.js":
/*!**************************************!*\
  !*** ./src/blocks/separator/edit.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _inspector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inspector */ "./src/blocks/separator/inspector.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style */ "./src/blocks/separator/style.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__);






const WPMozoEditorObj = wpmozo_adfgu_editor_object;
const Edit = props => {
  const attributes = props.attributes,
    clientId = props.clientId,
    ID = window.wpmozo.getIdByClientid(clientId),
    setAttributes = props.setAttributes,
    blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.useBlockProps)({
      className: 'wpmozo-adfgu-separator'
    });
  attributes.ID = ID;
  let position = '';
  if ('line' === attributes.separatorType) {
    if ('onlySeparator' === attributes.lineUseWith) {
      position = 'align-none';
    } else if ('textSeparator' === attributes.lineUseWith) {
      position = `align-${undefined !== attributes.textAlign ? attributes.textAlign : 'none'}`;
    } else if ('iconSeparator' === attributes.lineUseWith) {
      position = `align-${attributes.iconPosition}`;
    } else {
      position = `align-${attributes.imagePosition}`;
    }
  } else {
    position = '';
  }
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
    jQuery(document).ready(function ($) {
      if (jQuery('body').find('.wpmozo-adfgu-separator').length > 0) {
        $('body').find('.wpmozo-adfgu-separator').each(function () {
          let height = $(this).find('.wpmozo-adfgu-icon-wrapper').outerHeight(true);
          let padding = height / 2;
          $(this).css('padding-top', padding + 'px');
          $(this).css('padding-bottom', padding + 'px');
        });
      }
    });
  });
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_inspector__WEBPACK_IMPORTED_MODULE_1__["default"], {
    ...props
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_style__WEBPACK_IMPORTED_MODULE_2__["default"], {
    attributes: attributes,
    ID: ID,
    clientId: clientId
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...blockProps
  }, "line" === attributes.separatorType && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `wpmozo-adfgu-separator-container ${position}`
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wpmozo-adfgu-line wpmozo-adfgu-line-before"
  }), "textSeparator" === attributes.lineUseWith && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wpmozo-adfgu-text-wrapper"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, `${attributes.separatorText}`)), "iconSeparator" === attributes.lineUseWith && true !== attributes.styleIcon && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wpmozo-adfgu-icon-wrapper"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
    className: attributes.separatorIcon
  })), "iconSeparator" === attributes.lineUseWith && true === attributes.styleIcon && ('square' === attributes.iconShape || 'circle' === attributes.iconShape) && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wpmozo-adfgu-icon-wrapper"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
    className: attributes.separatorIcon + ' wpmozo-adfgu-icon-' + attributes.iconShape + (true === attributes.enableShapeBorder ? ' wpmozo-adfgu-icon-shape-border' : '')
  })), "iconSeparator" === attributes.lineUseWith && true === attributes.styleIcon && 'hexagon' === attributes.iconShape && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wpmozo-adfgu-icon-wrapper shape-hexagon"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "hexagon" + (true === attributes.enableShapeBorder ? ' wpmozo-adfgu-border-hex' : '')
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
    className: attributes.separatorIcon
  }))), "imageSeparator" === attributes.lineUseWith && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    className: "wpmozo-adfgu-separator-image",
    src: attributes.separatorImage ? attributes.separatorImage : WPMozoEditorObj.placeholderImg
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wpmozo-adfgu-line wpmozo-adfgu-line-after"
  })), "shadow" === attributes.separatorType && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wpmozo-adfgu-shadow"
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Edit);

/***/ }),

/***/ "./src/blocks/separator/icon.js":
/*!**************************************!*\
  !*** ./src/blocks/separator/icon.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const Icon = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  width: "1024",
  height: "1024",
  viewBox: "0 0 1024 1024"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
  id: "icomoon-ignore"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  fill: "#000",
  d: "M411.733 247.467h-123.733l-21.333 59.733h-51.2l106.667-296.533h55.467l106.667 296.533h-51.2l-21.333-59.733zM398.933 206.933l-49.067-138.667-49.067 138.667h98.133z"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  fill: "#000",
  d: "M772.267 179.2c10.667 14.933 17.067 29.867 17.067 46.933 0 14.933-4.267 27.733-10.667 40.533-8.533 12.8-19.2 21.333-34.133 27.733s-32 10.667-51.2 10.667h-119.467v-294.4h113.067c19.2 0 38.4 4.267 51.2 10.667 14.933 6.4 25.6 17.067 32 27.733s10.667 23.467 10.667 38.4c0 17.067-4.267 32-12.8 42.667s-21.333 19.2-36.267 25.6c17.067 2.133 29.867 10.667 40.533 23.467zM622.933 134.4h59.733c14.933 0 27.733-4.267 38.4-10.667 8.533-6.4 12.8-17.067 12.8-32 0-12.8-4.267-23.467-12.8-32s-21.333-10.667-38.4-10.667h-59.733v85.333zM727.467 256c8.533-8.533 14.933-19.2 14.933-34.133s-4.267-25.6-14.933-34.133-23.467-12.8-40.533-12.8h-64v91.733h66.133c14.933 0 27.733-2.133 38.4-10.667z"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  fill: "#000",
  d: "M215.467 782.933c12.8-23.467 32-40.533 55.467-53.333s49.067-19.2 76.8-19.2c32 0 59.733 8.533 85.333 23.467s42.667 38.4 53.333 66.133h-59.733c-8.533-14.933-19.2-27.733-32-34.133-12.8-8.533-29.867-10.667-46.933-10.667-19.2 0-36.267 4.267-53.333 12.8-14.933 8.533-27.733 21.333-36.267 38.4s-12.8 36.267-12.8 57.6c0 21.333 4.267 40.533 12.8 57.6s21.333 29.867 36.267 38.4c14.933 8.533 32 12.8 53.333 12.8 17.067 0 34.133-4.267 46.933-10.667 12.8-8.533 23.467-19.2 32-34.133h57.6c-10.667 27.733-29.867 51.2-53.333 66.133-25.6 14.933-53.333 23.467-85.333 23.467-27.733 0-53.333-6.4-76.8-19.2s-40.533-32-55.467-53.333-19.2-49.067-19.2-78.933c2.133-34.133 8.533-59.733 21.333-83.2z"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  fill: "#000",
  d: "M753.067 736c23.467 12.8 42.667 29.867 55.467 51.2 12.8 23.467 19.2 49.067 19.2 78.933s-6.4 55.467-19.2 78.933c-12.8 21.333-32 38.4-55.467 51.2s-51.2 17.067-83.2 17.067h-96v-296.533h96c32 0 59.733 6.4 83.2 19.2zM750.933 945.067c19.2-19.2 27.733-44.8 27.733-78.933s-8.533-61.867-27.733-81.067c-19.2-19.2-44.8-29.867-78.933-29.867h-49.067v217.6h49.067c34.133 0 59.733-8.533 78.933-27.733z"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  fill: "#000",
  d: "M384 416c-46.933 0-83.2 32-93.867 74.667h-258.133c-10.667 0-21.333 10.667-21.333 21.333s10.667 21.333 21.333 21.333h258.133c10.667 42.667 46.933 74.667 93.867 74.667 53.333 0 96-42.667 96-96s-42.667-96-96-96zM384 565.333c-21.333 0-40.533-12.8-49.067-32-2.133-6.4-4.267-14.933-4.267-21.333s2.133-14.933 4.267-21.333c8.533-19.2 27.733-32 49.067-32 29.867 0 53.333 23.467 53.333 53.333s-23.467 53.333-53.333 53.333z"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  fill: "#000",
  d: "M992 490.667h-258.133c-10.667-42.667-46.933-74.667-93.867-74.667-53.333 0-96 42.667-96 96s42.667 96 96 96c46.933 0 83.2-32 93.867-74.667h258.133c10.667 0 21.333-10.667 21.333-21.333s-10.667-21.333-21.333-21.333zM689.067 533.333c-8.533 19.2-27.733 32-49.067 32-29.867 0-53.333-23.467-53.333-53.333s23.467-53.333 53.333-53.333c21.333 0 40.533 12.8 49.067 32 2.133 6.4 4.267 14.933 4.267 21.333s-2.133 14.933-4.267 21.333z"
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Icon);

/***/ }),

/***/ "./src/blocks/separator/index.js":
/*!***************************************!*\
  !*** ./src/blocks/separator/index.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./attributes */ "./src/blocks/separator/attributes.js");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./src/blocks/separator/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ "./src/blocks/separator/save.js");
/* harmony import */ var _icon_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icon.js */ "./src/blocks/separator/icon.js");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__);






(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__.registerBlockType)('wpmozo/separator', {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Separator', 'wpmozo-addons-lite-for-gutenberg'),
  icon: _icon_js__WEBPACK_IMPORTED_MODULE_3__["default"],
  apiVersion: 3,
  category: 'wpmozo',
  keywords: ['wpmozo', 'separator', 'divider', 'wpmz'],
  attributes: _attributes__WEBPACK_IMPORTED_MODULE_0__["default"],
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_2__["default"]
});

/***/ }),

/***/ "./src/blocks/separator/inspector.js":
/*!*******************************************!*\
  !*** ./src/blocks/separator/inspector.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/index */ "./src/components/index.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__);






const Inspector = props => {
  const attributes = props.attributes,
    setAttributes = props.setAttributes,
    allLineStyles = [{
      value: 'solid',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Solid', 'wpmozo-addons-lite-for-gutenberg')
    }, {
      value: 'dashed',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Dashed', 'wpmozo-addons-lite-for-gutenberg')
    }, {
      value: 'double',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Double', 'wpmozo-addons-lite-for-gutenberg')
    }, {
      value: 'dotted',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Dotted', 'wpmozo-addons-lite-for-gutenberg')
    }, {
      value: 'ridge',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Ridge', 'wpmozo-addons-lite-for-gutenberg')
    }, {
      value: 'groove',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Groove', 'wpmozo-addons-lite-for-gutenberg')
    }, {
      value: 'inset',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Inset', 'wpmozo-addons-lite-for-gutenberg')
    }, {
      value: 'outset',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Outset', 'wpmozo-addons-lite-for-gutenberg')
    }, {
      value: 'none',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('None', 'wpmozo-addons-lite-for-gutenberg')
    }],
    headingLavels = [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('H1', 'wpmozo-addons-lite-for-gutenberg'),
      value: 'h1'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('H2', 'wpmozo-addons-lite-for-gutenberg'),
      value: 'h2'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('H3', 'wpmozo-addons-lite-for-gutenberg'),
      value: 'h3'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('H4', 'wpmozo-addons-lite-for-gutenberg'),
      value: 'h4'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('H5', 'wpmozo-addons-lite-for-gutenberg'),
      value: 'h5'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('H6', 'wpmozo-addons-lite-for-gutenberg'),
      value: 'h6'
    }];
  props = Object.assign({}, props, {
    preAttributes: {}
  });
  const [textStyleType, setTextStyleType] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)('normal');
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, {
    key: "controls"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Separator Content', 'wpmozo-addons-lite-for-gutenberg'),
    initialOpen: true
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Separator Type', 'wpmozo-addons-lite-for-gutenberg'),
    value: attributes.separatorType,
    options: [{
      value: 'line',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Line', 'wpmozo-addons-lite-for-gutenberg')
    }, {
      value: 'shadow',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Shadow', 'wpmozo-addons-lite-for-gutenberg')
    }],
    onChange: newValue => setAttributes({
      separatorType: newValue
    })
  }), 'line' === attributes.separatorType && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Select Line Style', 'wpmozo-addons-lite-for-gutenberg'),
    value: attributes.lineStyle,
    options: allLineStyles,
    onChange: newValue => setAttributes({
      lineStyle: newValue
    })
  }), 'line' === attributes.separatorType && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Use With', 'wpmozo-addons-lite-for-gutenberg'),
    value: attributes.lineUseWith,
    options: [{
      value: 'onlySeparator',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Only Separator', 'wpmozo-addons-lite-for-gutenberg')
    }, {
      value: 'textSeparator',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Separator With Text', 'wpmozo-addons-lite-for-gutenberg')
    }, {
      value: 'iconSeparator',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Separator With Icon', 'wpmozo-addons-lite-for-gutenberg')
    }, {
      value: 'imageSeparator',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Separator With Image', 'wpmozo-addons-lite-for-gutenberg')
    }],
    onChange: newValue => setAttributes({
      lineUseWith: newValue
    })
  }), 'line' === attributes.separatorType && 'textSeparator' === attributes.lineUseWith && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.TextareaControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Separator Text', 'wpmozo-addons-lite-for-gutenberg'),
    onChange: newValue => setAttributes({
      separatorText: newValue
    }),
    value: attributes.separatorText
  }), 'line' === attributes.separatorType && 'iconSeparator' === attributes.lineUseWith && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoIconpicker, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Icon', 'wpmozo-addons-lite-for-gutenberg'),
    iconPickerKey: "separatorIcon",
    props: props,
    value: attributes.separatorIcon,
    onChange: newValue => setAttributes({
      separatorIcon: newValue
    })
  }), 'line' === attributes.separatorType && 'imageSeparator' === attributes.lineUseWith && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoMediaUploader, {
    attrKye: "separatorImage",
    props: props
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, {
    key: "styles",
    group: "styles"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Separator Styling', 'wpmozo-addons-lite-for-gutenberg'),
    initialOpen: true
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Separator Thickness', 'wpmozo-addons-lite-for-gutenberg'),
    value: attributes.separatorThickness,
    onChange: newValue => setAttributes({
      separatorThickness: newValue
    }),
    min: 0,
    step: 1,
    max: 100
  }), 'line' === attributes.separatorType && 'solid' === attributes.lineStyle && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.__experimentalColorGradientControl, {
    colorValue: attributes.separatorColor,
    gradientValue: attributes.separatorGradient,
    colors: [{
      name: 'red',
      color: '#f00'
    }, {
      name: 'white',
      color: '#fff'
    }, {
      name: 'blue',
      color: '#00f'
    }],
    gradients: [{
      name: 'Vivid cyan blue to vivid purple',
      gradient: 'linear-gradient(135deg,rgba(6,147,227,1) 0%,rgb(155,81,224) 100%)',
      slug: 'vivid-cyan-blue-to-vivid-purple'
    }, {
      name: 'Light green cyan to vivid green cyan',
      gradient: 'linear-gradient(135deg,rgb(122,220,180) 0%,rgb(0,208,130) 100%)',
      slug: 'light-green-cyan-to-vivid-green-cyan'
    }, {
      name: 'Luminous vivid amber to luminous vivid orange',
      gradient: 'linear-gradient(135deg,rgba(252,185,0,1) 0%,rgba(255,105,0,1) 100%)',
      slug: 'luminous-vivid-amber-to-luminous-vivid-orange'
    }],
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Separator Color"),
    onColorChange: newValue => setAttributes({
      separatorColor: newValue
    }),
    onGradientChange: newValue => setAttributes({
      separatorGradient: newValue
    })
  }), ('shadow' === attributes.separatorType || 'line' === attributes.separatorType && 'solid' !== attributes.lineStyle) && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoColorPicker, {
    ColorKey: "shadow",
    props: props,
    ColorTypes: [{
      key: 'Color',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Separator Color', 'wpmozo-addons-lite-for-gutenberg')
    }]
  })), 'line' === attributes.separatorType && 'imageSeparator' === attributes.lineUseWith && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Image Styling', 'wpmozo-addons-lite-for-gutenberg'),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Image Position', 'wpmozo-addons-lite-for-gutenberg'),
    value: attributes.imagePosition,
    options: [{
      value: 'center',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Center', 'wpmozo-addons-lite-for-gutenberg')
    }, {
      value: 'left',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Left', 'wpmozo-addons-lite-for-gutenberg')
    }, {
      value: 'right',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Right', 'wpmozo-addons-lite-for-gutenberg')
    }],
    onChange: newValue => setAttributes({
      imagePosition: newValue
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Image Width', 'wpmozo-addons-lite-for-gutenberg'),
    value: attributes.imageWidth,
    onChange: newValue => setAttributes({
      imageWidth: newValue
    }),
    min: 0,
    step: 1,
    max: 100
  })), 'line' === attributes.separatorType && 'iconSeparator' === attributes.lineUseWith && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Icon Styling', 'wpmozo-addons-lite-for-gutenberg'),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Icon Position', 'wpmozo-addons-lite-for-gutenberg'),
    value: attributes.iconPosition,
    options: [{
      value: 'center',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Center', 'wpmozo-addons-lite-for-gutenberg')
    }, {
      value: 'left',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Left', 'wpmozo-addons-lite-for-gutenberg')
    }, {
      value: 'right',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Right', 'wpmozo-addons-lite-for-gutenberg')
    }],
    onChange: newValue => setAttributes({
      iconPosition: newValue
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoColorPicker, {
    ColorKey: "icon",
    props: props,
    ColorTypes: [{
      key: 'Color',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Icon Color', 'wpmozo-addons-lite-for-gutenberg')
    }]
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Use Icon Font Size', 'wpmozo-addons-lite-for-gutenberg'),
    checked: attributes.enableIconFontSize,
    onChange: newValue => setAttributes({
      enableIconFontSize: newValue
    })
  }), true === attributes.enableIconFontSize && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Icon Font Size', 'wpmozo-addons-lite-for-gutenberg'),
    value: attributes.iconFontSize,
    onChange: newValue => setAttributes({
      iconFontSize: newValue
    }),
    min: 0,
    step: 1,
    max: 120
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Style Icon', 'wpmozo-addons-lite-for-gutenberg'),
    checked: attributes.styleIcon,
    onChange: newValue => setAttributes({
      styleIcon: newValue
    })
  }), true === attributes.styleIcon && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Shape', 'wpmozo-addons-lite-for-gutenberg'),
    value: attributes.iconShape,
    options: [{
      value: 'square',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Square', 'wpmozo-addons-lite-for-gutenberg')
    }, {
      value: 'circle',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Circle', 'wpmozo-addons-lite-for-gutenberg')
    }, {
      value: 'hexagon',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Hexagon', 'wpmozo-addons-lite-for-gutenberg')
    }],
    onChange: newValue => setAttributes({
      iconShape: newValue
    })
  }), true === attributes.styleIcon && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoColorPicker, {
    ColorKey: "shape",
    props: props,
    ColorTypes: [{
      key: 'Background',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Shape Background', 'wpmozo-addons-lite-for-gutenberg')
    }]
  }), true === attributes.styleIcon && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Display Shape Border', 'wpmozo-addons-lite-for-gutenberg'),
    checked: attributes.enableShapeBorder,
    onChange: newValue => setAttributes({
      enableShapeBorder: newValue
    })
  }), true === attributes.styleIcon && true === attributes.enableShapeBorder && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoColorPicker, {
    ColorKey: "shapeBorder",
    props: props,
    ColorTypes: [{
      key: 'Color',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Shape Border Color', 'wpmozo-addons-lite-for-gutenberg')
    }]
  })), 'line' === attributes.separatorType && 'textSeparator' === attributes.lineUseWith && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Text Styling', 'wpmozo-addons-lite-for-gutenberg'),
    className: "wpmozo-text-styling-panel wpmozo-typography-panel",
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.BaseControl, {
    className: "wpmozo-button-tabs-wrap"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ButtonGroup, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Button, {
    className: "wpmozo-button-tabs-btn",
    isPressed: 'normal' === textStyleType ? true : false,
    onClick: () => setTextStyleType('normal')
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Normal', 'wpmozo-addons-lite-for-gutenberg')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Button, {
    className: "wpmozo-button-tabs-btn",
    isPressed: 'hover' === textStyleType ? true : false,
    onClick: () => setTextStyleType('hover')
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Hover', 'wpmozo-addons-lite-for-gutenberg'))), 'normal' === textStyleType && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoColorPicker, {
    ColorKey: "textNormal",
    props: props,
    ColorTypes: [{
      key: 'Color',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Text Color', 'wpmozo-addons-lite-for-gutenberg')
    }]
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoTypography, {
    TypographyKey: "textNormal",
    props: props
  })), 'hover' === textStyleType && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoColorPicker, {
    ColorKey: "textHover",
    props: props,
    ColorTypes: [{
      key: 'Color',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Text Color', 'wpmozo-addons-lite-for-gutenberg')
    }]
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoTypography, {
    TypographyKey: "textHover",
    props: props
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoAlignment, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Text Alignment', 'wpmozo-addons-lite-for-gutenberg'),
    onChange: newValue => setAttributes({
      textAlign: newValue
    }),
    value: attributes.textAlign
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Inspector);

/***/ }),

/***/ "./src/blocks/separator/save.js":
/*!**************************************!*\
  !*** ./src/blocks/separator/save.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);


const WPMozoEditorObj = wpmozo_adfgu_editor_object;
const Save = ({
  attributes
}) => {
  const ID = attributes.ID;
  let position = '';
  if ('line' === attributes.separatorType) {
    if ('onlySeparator' === attributes.lineUseWith) {
      position = 'align-none';
    } else if ('textSeparator' === attributes.lineUseWith) {
      position = `align-${undefined !== attributes.textAlign ? attributes.textAlign : 'none'}`;
    } else if ('iconSeparator' === attributes.lineUseWith) {
      position = `align-${attributes.iconPosition}`;
    } else {
      position = `align-${attributes.imagePosition}`;
    }
  } else {
    position = '';
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ..._wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save({
      className: 'wpmozo-adfgu-separator'
    }),
    id: `block-${ID}`
  }, "line" === attributes.separatorType && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `wpmozo-adfgu-separator-container ${position}`
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wpmozo-adfgu-line wpmozo-adfgu-line-before"
  }), "textSeparator" === attributes.lineUseWith && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wpmozo-adfgu-text-wrapper"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, `${attributes.separatorText}`)), "iconSeparator" === attributes.lineUseWith && true !== attributes.styleIcon && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wpmozo-adfgu-icon-wrapper"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
    className: attributes.separatorIcon
  })), "iconSeparator" === attributes.lineUseWith && true === attributes.styleIcon && ('square' === attributes.iconShape || 'circle' === attributes.iconShape) && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wpmozo-adfgu-icon-wrapper"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
    className: attributes.separatorIcon + ' wpmozo-adfgu-icon-' + attributes.iconShape + (true === attributes.enableShapeBorder ? ' wpmozo-adfgu-icon-shape-border' : '')
  })), "iconSeparator" === attributes.lineUseWith && true === attributes.styleIcon && 'hexagon' === attributes.iconShape && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wpmozo-adfgu-icon-wrapper shape-hexagon"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "hexagon" + (true === attributes.enableShapeBorder ? ' wpmozo-adfgu-border-hex' : '')
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
    className: attributes.separatorIcon
  }))), "imageSeparator" === attributes.lineUseWith && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    className: "wpmozo-adfgu-separator-image",
    src: attributes.separatorImage ? attributes.separatorImage : WPMozoEditorObj.placeholderImg
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wpmozo-adfgu-line wpmozo-adfgu-line-after"
  })), "shadow" === attributes.separatorType && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wpmozo-adfgu-shadow"
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Save);

/***/ }),

/***/ "./src/blocks/separator/style.js":
/*!***************************************!*\
  !*** ./src/blocks/separator/style.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const Style = ({
  attributes,
  ID,
  clientId
}) => {
  const wpmozoCoreFun = window.wpmozo,
    parent = '#block-' + clientId,
    toConvertStyles = ['textNormal', 'textHover', 'content', 'layout'];
  let css = '',
    convertedStyle = wpmozoCoreFun.convetInlineStyleStr(toConvertStyles, attributes);
  let allInline = [{
    selector: '.wpmozo-adfgu-text-wrapper',
    style: {
      'color': attributes.textNormalColor
    },
    additional: convertedStyle.textNormal
  }, {
    selector: '.wpmozo-adfgu-text-wrapper:hover',
    style: {
      'color': attributes.textHoverColor
    },
    additional: convertedStyle.textHover
  }];
  if ('line' === attributes.separatorType) {
    allInline.push({
      selector: '.wpmozo-adfgu-line',
      style: {
        'border-top-width': `${attributes.separatorThickness}px`,
        'border-top-color': attributes.separatorColor,
        'border-top-style': attributes.lineStyle
      }
    });
    if ('solid' === attributes.lineStyle && undefined === attributes.separatorColor) {
      allInline.push({
        selector: '.wpmozo-adfgu-line',
        style: {
          'border-top-width': `${attributes.separatorThickness}px`,
          'border-image-slice': 1,
          'border-image-source': attributes.separatorGradient,
          'border-top-style': attributes.lineStyle
        }
      });
    }
    if ('solid' !== attributes.lineStyle) {
      allInline.push({
        selector: '.wpmozo-adfgu-line',
        style: {
          'border-top-color': attributes.shadowColor
        }
      });
    }
    if ('iconSeparator' === attributes.lineUseWith) {
      allInline.push({
        selector: '.wpmozo-adfgu-icon-wrapper i',
        style: {
          'color': attributes.iconColor
        }
      });
      if (true === attributes.enableIconFontSize && true === attributes.styleIcon) {
        if ('hexagon' === attributes.iconShape) {
          if (true === attributes.enableShapeBorder) {
            allInline.push({
              selector: '.wpmozo-adfgu-icon-wrapper .hexagon.wpmozo-adfgu-border-hex',
              style: {
                'box-shadow': `2px 0px 0px 0px inset ${attributes.shapeBorderColor}, -2px 0px 0px 0px inset ${attributes.shapeBorderColor}`
              }
            }, {
              selector: '.wpmozo-adfgu-icon-wrapper .hexagon.wpmozo-adfgu-border-hex:after',
              style: {
                'border-right': `2px solid ${attributes.shapeBorderColor}`,
                'border-bottom': `2px solid ${attributes.shapeBorderColor}`,
                'transform': 'rotate(45deg) skew(-15.8deg, -15.8deg) translate( 72%, 27%)',
                'width': 55 + "%",
                'height': 100 + "%"
              }
            }, {
              selector: '.wpmozo-adfgu-icon-wrapper .hexagon.wpmozo-adfgu-border-hex:before',
              style: {
                'border-top': `2px solid ${attributes.shapeBorderColor}`,
                'border-left': `2px solid ${attributes.shapeBorderColor}`,
                'transform': 'rotate(45deg) skew(-15.8deg, -15.8deg) translate(-27%, -72%)',
                'width': 55 + "%",
                'height': 100 + "%"
              }
            });
          } else {
            allInline.push({
              selector: '.wpmozo-adfgu-icon-wrapper .hexagon',
              style: {}
            }, {
              selector: '.wpmozo-adfgu-icon-wrapper .hexagon:after',
              style: {
                'transform': 'rotate(45deg) skew(-16deg, -16deg) translate( 72%, 27%)',
                'width': 55 + "%"
              }
            }, {
              selector: '.wpmozo-adfgu-icon-wrapper .hexagon:before',
              style: {
                'transform': 'rotate(45deg) skew(-16deg, -16deg) translate(-27%, -72%)',
                'width': 55 + "%"
              }
            });
          }
          allInline.push({
            selector: '.wpmozo-adfgu-icon-wrapper',
            style: {
              'width': `calc( ${attributes.iconFontSize}px + ${attributes.iconFontSize / 1.15}px )`
            }
          }, {
            selector: '.wpmozo-adfgu-icon-wrapper i',
            style: {
              'font-size': `${attributes.iconFontSize}px`
            }
          }, {
            selector: '.wpmozo-adfgu-icon-wrapper .hexagon:before, .wpmozo-adfgu-icon-wrapper .hexagon:after, .wpmozo-adfgu-icon-wrapper .hexagon',
            style: {
              'background-color': attributes.shapeBackground
            }
          });
        } else {
          if (true === attributes.enableShapeBorder) {
            allInline.push({
              selector: '.wpmozo-adfgu-icon-wrapper i',
              style: {
                'border': `2px solid ${attributes.shapeBorderColor}`
              }
            }, {
              selector: '.wpmozo-adfgu-icon-wrapper i',
              style: {
                'font-size': `${attributes.iconFontSize}px`
              }
            });
          } else {}
          allInline.push({
            selector: '.wpmozo-adfgu-icon-wrapper i',
            style: {
              'font-size': `${attributes.iconFontSize}px`
            }
          });
        }
        allInline.push({
          selector: '.wpmozo-adfgu-icon-wrapper i',
          style: {
            'background-color': attributes.shapeBackground
          }
        });
      } else if (true === attributes.enableIconFontSize && true !== attributes.styleIcon) {
        allInline.push({
          selector: '.wpmozo-adfgu-icon-wrapper i',
          style: {
            'font-size': `${attributes.iconFontSize}px`
          }
        });
      } else if (true !== attributes.enableIconFontSize && true === attributes.styleIcon) {
        if ('hexagon' === attributes.iconShape) {
          if (true === attributes.enableShapeBorder) {
            allInline.push({
              selector: '.wpmozo-adfgu-icon-wrapper .hexagon.wpmozo-adfgu-border-hex',
              style: {
                'border-left': `2px solid ${attributes.shapeBorderColor}`,
                'border-right': `2px solid ${attributes.shapeBorderColor}`
              }
            }, {
              selector: '.wpmozo-adfgu-icon-wrapper .hexagon.wpmozo-adfgu-border-hex:after',
              style: {
                'border-right': `2px solid ${attributes.shapeBorderColor}`,
                'border-bottom': `2px solid ${attributes.shapeBorderColor}`,
                'transform': 'rotate(45deg) skew(-13deg, -13deg) translate( 57%, 19%)',
                'width': 'calc( ' + 55 + "% + 4px )",
                'height': 'calc( ' + 100 + "% + 4px )"
              }
            }, {
              selector: '.wpmozo-adfgu-icon-wrapper .hexagon.wpmozo-adfgu-border-hex:before',
              style: {
                'border-top': `2px solid ${attributes.shapeBorderColor}`,
                'border-left': `2px solid ${attributes.shapeBorderColor}`,
                'transform': 'rotate(45deg) skew(-13deg, -13deg) translate(-28%, -65%)',
                'width': 'calc( ' + 55 + "% + 4px )",
                'height': 'calc( ' + 100 + "% + 4px )"
              }
            });
          } else {
            allInline.push({
              selector: '.wpmozo-adfgu-icon-wrapper .hexagon.wpmozo-adfgu-icon-border-hex',
              style: {}
            }, {
              selector: '.wpmozo-adfgu-icon-wrapper .hexagon:before',
              style: {
                'transform': 'rotate(45deg) skew(-16deg, -16deg) translate(-27%, -72%)',
                'width': 55 + "%"
              }
            }, {
              selector: '.wpmozo-adfgu-icon-wrapper .hexagon:after',
              style: {
                'transform': 'rotate(45deg) skew(-16deg, -16deg) translate( 72%, 27%)',
                'width': 55 + "%"
              }
            });
          }
          allInline.push({
            selector: '.wpmozo-adfgu-icon-wrapper',
            style: {
              'width': 72 + 'px'
            }
          }, {
            selector: '.wpmozo-adfgu-icon-wrapper .hexagon, .wpmozo-adfgu-icon-wrapper .hexagon:before, .wpmozo-adfgu-icon-wrapper .hexagon:after ',
            style: {
              'background-color': attributes.shapeBackground
            }
          });
        } else {
          if (true === attributes.enableShapeBorder) {
            allInline.push({
              selector: '.wpmozo-adfgu-icon-wrapper .wpmozo-adfgu-icon-square.wpmozo-adfgu-icon-shape-border, .wpmozo-adfgu-icon-wrapper .wpmozo-adfgu-icon-circle.wpmozo-adfgu-icon-shape-border',
              style: {
                'border': `2px solid ${attributes.shapeBorderColor}`
              }
            });
          } else {}
          allInline.push({
            selector: '.wpmozo-adfgu-icon-wrapper .wpmozo-adfgu-icon-square, .wpmozo-adfgu-icon-wrapper .wpmozo-adfgu-icon-circle',
            style: {
              'background-color': attributes.shapeBackground
            }
          });
        }
      } else {}
    }
    if ('imageSeparator' === attributes.lineUseWith) {
      allInline.push({
        selector: '.wpmozo-adfgu-separator-image',
        style: {
          'width': `${attributes.imageWidth}px`
        }
      });
    }
  }
  if ('shadow' === attributes.separatorType) {
    allInline.push({
      selector: '.wpmozo-adfgu-shadow',
      style: {
        'height': `${attributes.separatorThickness}px`,
        'background': `radial-gradient(ellipse at 50% -50% ,${attributes.shadowColor} 0%, rgba(0, 0, 0, 0) 75%), repeat scroll`
      }
    }, {
      selector: '.wpmozo-adfgu-interactive-image-card-content',
      style: {
        'text-align': attributes.contentAlign
      }
    });
  }
  let generateStyle = wpmozoCoreFun.wpmozo_generate_style(allInline);
  if (!wpmozoCoreFun.wpmozo_is_empty(generateStyle)) {
    css += `
	    	${parent} {
	    		${generateStyle}
	    	}
	    `;
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, !wpmozoCoreFun.wpmozo_is_empty(css) && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("style", {
    className: "wpmozo-dynamic-style",
    "data-id": ID,
    "data-client-id": clientId
  }, css));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Style);

/***/ }),

/***/ "./src/blocks/team-slider/attributes.js":
/*!**********************************************!*\
  !*** ./src/blocks/team-slider/attributes.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _attributes_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./attributes.json */ "./src/blocks/team-slider/attributes.json");


let translatKeys = ['noResultText'];
for (var i = 0; i < translatKeys.length; i++) {
  let attr = translatKeys[i],
    defaultValue = _attributes_json__WEBPACK_IMPORTED_MODULE_1__[attr]['default'];
  let translated = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)(defaultValue, 'wpmozo-addons-lite-for-gutenberg');
  _attributes_json__WEBPACK_IMPORTED_MODULE_1__[attr]['default'] = translated;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_attributes_json__WEBPACK_IMPORTED_MODULE_1__);

/***/ }),

/***/ "./src/blocks/team-slider/edit.js":
/*!****************************************!*\
  !*** ./src/blocks/team-slider/edit.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _inspector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inspector */ "./src/blocks/team-slider/inspector.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style */ "./src/blocks/team-slider/style.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/server-side-render */ "@wordpress/server-side-render");
/* harmony import */ var _wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__);










const initSwiper = attributes => {
  let wpmozoCoreFun = window.wpmozo,
    clientId = attributes.clientId,
    teamPerSlide = parseInt(attributes.memberPerSlide),
    spaceBetweenSlides = parseInt(attributes.spaceBetweenSlides),
    slidesPerGroup = parseInt(attributes.slidesPerGroup),
    tabletTeamPerSlide = parseInt(attributes.tabletTeamPerSlide),
    tabletSlidesPerGroup = parseInt(attributes.tabletSlidesPerGroup),
    tabletSpaceBetweenSlides = parseInt(attributes.tabletSpaceBetweenSlides),
    mobileTeamPerSlide = parseInt(attributes.mobileTeamPerSlide),
    mobileSpaceBetweenSlides = parseInt(attributes.mobileSpaceBetweenSlides),
    mobileSlidesPerGroup = parseInt(attributes.mobileSlidesPerGroup),
    buttonNextClass = !wpmozoCoreFun.wpmozo_is_empty(attributes.nextSlideArrow) ? '.custom-swiper-button-next' : '.swiper-button-next',
    buttonPrevClass = !wpmozoCoreFun.wpmozo_is_empty(attributes.previousSlideArrow) ? '.custom-swiper-button-prev' : '.swiper-button-prev';
  let loop = attributes.sliderLoop,
    speed = attributes.transitionDuration,
    slideEffect = attributes.slideEffect,
    arrows = false,
    dots = false,
    autoplaySlides = false,
    slidesPerGroupSkip = 0,
    $cubeEffect = false,
    $coverflowEffect = false,
    $fadeEffect = false,
    autoHeight = attributes.autoHeightSlider,
    enableDynamicDots = attributes.enableDynamicDots;
  teamPerSlide = 'slide' === slideEffect || 'coverflow' === slideEffect ? teamPerSlide : 1;
  if (teamPerSlide > slidesPerGroup && 1 !== slidesPerGroup) {
    slidesPerGroupSkip = teamPerSlide - slidesPerGroup;
  }
  if ('cube' === slideEffect) {
    $cubeEffect = {
      shadow: false,
      slideShadows: false
    };
  }
  if ('coverflow' === slideEffect) {
    $coverflowEffect = {
      rotate: attributes.coverflowRotate,
      stretch: 0,
      depth: attributes.coverflowDepth,
      modifier: 1,
      slideShadows: attributes.enableCoverflowShadow
    };
  }
  if ('fade' === slideEffect) {
    $fadeEffect = {
      crossFade: true
    };
  }
  if (attributes.showArrow) {
    arrows = {
      nextEl: '#block-' + clientId + ' ' + buttonNextClass,
      prevEl: '#block-' + clientId + ' ' + buttonPrevClass
    };
  }
  if (attributes.showControlDot) {
    let controlDotStyle = attributes.controlDotStyle;
    enableDynamicDots = 'solid_dot' === controlDotStyle || 'transparent_dot' === controlDotStyle || 'square_dot' === controlDotStyle ? enableDynamicDots : false;
    dots = {
      el: '#block-' + clientId + ' .swiper-pagination',
      dynamicBullets: enableDynamicDots,
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
    slidesPerView: teamPerSlide,
    spaceBetween: spaceBetweenSlides,
    slidesPerGroup: slidesPerGroup,
    on: {
      tap: function (swiper, event) {
        (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_6__.dispatch)('core/block-editor').selectBlock(clientId);
      }
    },
    autoplay: autoplaySlides,
    loop: loop,
    speed: speed,
    effect: slideEffect,
    cubeEffect: $cubeEffect,
    coverflowEffect: $coverflowEffect,
    fadeEffect: $fadeEffect,
    pagination: dots,
    navigation: arrows,
    grabCursor: true,
    observer: true,
    observeParents: true,
    autoHeight: autoHeight,
    breakpoints: {
      981: {
        slidesPerView: teamPerSlide,
        spaceBetween: spaceBetweenSlides,
        slidesPerGroup: slidesPerGroup
      },
      768: {
        slidesPerView: tabletTeamPerSlide,
        spaceBetween: tabletSpaceBetweenSlides,
        slidesPerGroup: tabletSlidesPerGroup
      },
      0: {
        slidesPerView: mobileTeamPerSlide,
        spaceBetween: mobileSpaceBetweenSlides,
        slidesPerGroup: mobileSlidesPerGroup
      }
    }
  };
  const swiper = new Swiper('.swiper[data-client-id="' + clientId + '"]', options);
  jQuery(document).on("mouseenter", '.swiper[data-client-id="' + clientId + '"]', function (e) {
    let swiperContainer = jQuery(this)[0],
      swiper = swiperContainer.hasOwnProperty('swiper') ? swiperContainer.swiper : null;
    if (swiper.params.autoplay.disableOnInteraction && typeof swiper.autoplay.stop === "function") {
      swiper.autoplay.stop();
    }
  });
  jQuery(document).on("mouseleave", '.swiper[data-client-id="' + clientId + '"]', function (e) {
    let swiperContainer = jQuery(this)[0],
      swiper = swiperContainer.hasOwnProperty('swiper') ? swiperContainer.swiper : null;
    if (swiper.params.autoplay.disableOnInteraction && typeof swiper.autoplay.start === "function") {
      swiper.autoplay.start();
    }
  });
  jQuery(document).find('.swiper[data-client-id="' + clientId + '"] .wpmozo-adfgu-team-member-card').each(function () {
    jQuery(this).find('.wpmozo-adfgu-filled-bar').each(function () {
      let $this = jQuery(this);
      $this.animate({
        width: $this.data('skill')
      }, 1000, 'linear');
    });
  });
  return swiper;
};
const SwiperLoader = args => {
  let attributes = args.attributes,
    clientId = attributes.clientId;
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
    return () => {
      if (jQuery('.swiper[data-client-id="' + clientId + '"]').length > 0) {
        initSwiper(attributes);
      }
    };
  });
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      position: 'relative'
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      marginTop: '-9px',
      marginLeft: '-9px'
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__.Spinner, null)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      opacity: 0.3
    }
  })));
};
const Edit = props => {
  let wpmozoCoreFun = window.wpmozo,
    attributes = props.attributes,
    clientId = props.clientId,
    ID = wpmozoCoreFun.getIdByClientid(clientId),
    blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.useBlockProps)({
      className: 'wpmozo-adfgu-team-slider-main'
    });
  attributes.ID = ID;
  attributes.clientId = clientId;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_inspector__WEBPACK_IMPORTED_MODULE_1__["default"], {
    ...props
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...blockProps
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_style__WEBPACK_IMPORTED_MODULE_2__["default"], {
    attributes: attributes,
    ID: ID,
    clientId: clientId
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)((_wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_7___default()), {
    block: "wpmozo/team-slider",
    attributes: attributes,
    httpMethod: "POST",
    LoadingResponsePlaceholder: SwiperLoader,
    EmptyResponsePlaceholder: SwiperLoader
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Edit);

/***/ }),

/***/ "./src/blocks/team-slider/index.js":
/*!*****************************************!*\
  !*** ./src/blocks/team-slider/index.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./attributes */ "./src/blocks/team-slider/attributes.js");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./src/blocks/team-slider/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ "./src/blocks/team-slider/save.js");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);





(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__.registerBlockType)('wpmozo/team-slider', {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Team Slider', 'wpmozo-addons-lite-for-gutenberg'),
  icon: '',
  apiVersion: 2,
  category: 'wpmozo',
  keywords: ['wpmozo', 'team-slider', 'slider', 'team'],
  attributes: _attributes__WEBPACK_IMPORTED_MODULE_0__["default"],
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_2__["default"]
});

/***/ }),

/***/ "./src/blocks/team-slider/inspector.js":
/*!*********************************************!*\
  !*** ./src/blocks/team-slider/inspector.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/index */ "./src/components/index.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);






const Inspector = props => {
  const attributes = props.attributes,
    setAttributes = props.setAttributes,
    [deviceType, setDeviceType] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_5__.useState)('tablet');
  let teamMemberCats = wp.data.select('core').getEntityRecords('taxonomy', 'wpmozo-team-member-category'),
    teamMemberCatOptions = [];
  if (teamMemberCats) {
    teamMemberCatOptions = teamMemberCats.map(value => value.name);
  }
  props = Object.assign({}, props, {
    preAttributes: {}
  });
  const headingLavels = [{
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('H1', 'wpmozo-addons-lite-for-gutenberg'),
    value: 'h1'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('H2', 'wpmozo-addons-lite-for-gutenberg'),
    value: 'h2'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('H3', 'wpmozo-addons-lite-for-gutenberg'),
    value: 'h3'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('H4', 'wpmozo-addons-lite-for-gutenberg'),
    value: 'h4'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('H5', 'wpmozo-addons-lite-for-gutenberg'),
    value: 'h5'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('H6', 'wpmozo-addons-lite-for-gutenberg'),
    value: 'h6'
  }];
  const oneToTen = [{
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('1', 'wpmozo-addons-lite-for-gutenberg'),
    value: '1'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('2', 'wpmozo-addons-lite-for-gutenberg'),
    value: '2'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('3', 'wpmozo-addons-lite-for-gutenberg'),
    value: '3'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('4', 'wpmozo-addons-lite-for-gutenberg'),
    value: '4'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('5', 'wpmozo-addons-lite-for-gutenberg'),
    value: '5'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('6', 'wpmozo-addons-lite-for-gutenberg'),
    value: '6'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('7', 'wpmozo-addons-lite-for-gutenberg'),
    value: '7'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('8', 'wpmozo-addons-lite-for-gutenberg'),
    value: '8'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('9', 'wpmozo-addons-lite-for-gutenberg'),
    value: '9'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('10', 'wpmozo-addons-lite-for-gutenberg'),
    value: '10'
  }];
  const arrowsPositions = [{
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Inside', 'wpmozo-addons-lite-for-gutenberg'),
    value: 'inside'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Outside', 'wpmozo-addons-lite-for-gutenberg'),
    value: 'outside'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Top Left', 'wpmozo-addons-lite-for-gutenberg'),
    value: 'top_left'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Top Right', 'wpmozo-addons-lite-for-gutenberg'),
    value: 'top_right'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Top Center', 'wpmozo-addons-lite-for-gutenberg'),
    value: 'top_center'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Bottom Left', 'wpmozo-addons-lite-for-gutenberg'),
    value: 'bottom_left'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Bottom Right', 'wpmozo-addons-lite-for-gutenberg'),
    value: 'bottom_right'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Bottom Center', 'wpmozo-addons-lite-for-gutenberg'),
    value: 'bottom_center'
  }];
  const controlDotStyles = [{
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Solid Dot', 'wpmozo-addons-lite-for-gutenberg'),
    value: 'solid_dot'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Transparent Dot', 'wpmozo-addons-lite-for-gutenberg'),
    value: 'transparent_dot'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Stretched Dot', 'wpmozo-addons-lite-for-gutenberg'),
    value: 'stretched_dot'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Line', 'wpmozo-addons-lite-for-gutenberg'),
    value: 'line'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Rounded Line', 'wpmozo-addons-lite-for-gutenberg'),
    value: 'rounded_line'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Squared Dot', 'wpmozo-addons-lite-for-gutenberg'),
    value: 'square_dot'
  }];
  const postOrderByOptions = [{
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Date', 'wpmozo-addons-lite-for-gutenberg'),
    value: 'date'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Modified', 'wpmozo-addons-lite-for-gutenberg'),
    value: 'modified'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Title', 'wpmozo-addons-lite-for-gutenberg'),
    value: 'title'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Slug', 'wpmozo-addons-lite-for-gutenberg'),
    value: 'name'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('ID', 'wpmozo-addons-lite-for-gutenberg'),
    value: 'ID'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Random', 'wpmozo-addons-lite-for-gutenberg'),
    value: 'rand'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Relevance', 'wpmozo-addons-lite-for-gutenberg'),
    value: 'relevance'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('None', 'wpmozo-addons-lite-for-gutenberg'),
    value: 'none'
  }];
  const slideEffects = [{
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Slide', 'wpmozo-addons-lite-for-gutenberg'),
    value: 'slide'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Coverflow', 'wpmozo-addons-lite-for-gutenberg'),
    value: 'coverflow'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Cube', 'wpmozo-addons-lite-for-gutenberg'),
    value: 'cube'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Flip', 'wpmozo-addons-lite-for-gutenberg'),
    value: 'flip'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Fade', 'wpmozo-addons-lite-for-gutenberg'),
    value: 'fade'
  }];
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, {
    key: "controls"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Content', 'wpmozo-addons-lite-for-gutenberg'),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Number of Members', 'wpmozo-addons-lite-for-gutenberg'),
    value: attributes.postsNumber,
    onChange: newValue => setAttributes({
      postsNumber: newValue
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Order', 'wpmozo-addons-lite-for-gutenberg'),
    value: attributes.postOrder,
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Ascending', 'wpmozo-addons-lite-for-gutenberg'),
      value: 'ASC'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Descending', 'wpmozo-addons-lite-for-gutenberg'),
      value: 'DESC'
    }],
    onChange: newValue => setAttributes({
      postOrder: newValue
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Order by', 'wpmozo-addons-lite-for-gutenberg'),
    value: attributes.postOrderBy,
    options: postOrderByOptions,
    onChange: newValue => setAttributes({
      postOrderBy: newValue
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.FormTokenField, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Select Categories', 'wpmozo-addons-lite-for-gutenberg'),
    value: attributes.includeCategories,
    suggestions: teamMemberCatOptions,
    onChange: newValue => setAttributes({
      includeCategories: newValue
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('No Result Text', 'wpmozo-addons-lite-for-gutenberg'),
    value: attributes.noResultText,
    onChange: newValue => setAttributes({
      noResultText: newValue
    })
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Elements', 'wpmozo-addons-lite-for-gutenberg'),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Show Short Description', 'wpmozo-addons-lite-for-gutenberg'),
    checked: attributes.showShortDesc,
    onChange: newValue => setAttributes({
      showShortDesc: newValue
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Show Designation', 'wpmozo-addons-lite-for-gutenberg'),
    checked: attributes.showDesignation,
    onChange: newValue => setAttributes({
      showDesignation: newValue
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Show Social Icon', 'wpmozo-addons-lite-for-gutenberg'),
    checked: attributes.showSocialIcon,
    onChange: newValue => setAttributes({
      showSocialIcon: newValue
    })
  }), attributes.showSocialIcon && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.BaseControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Social Icon Link Target', 'wpmozo-addons-lite-for-gutenberg'),
    className: "wpmozo-button-tabs-wrap"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ButtonGroup, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
    className: "wpmozo-button-tabs-btn",
    isPressed: 'same' === attributes.socialIconLinkTarget ? true : false,
    onClick: () => setAttributes({
      socialIconLinkTarget: 'same'
    }),
    icon: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Icon, {
      icon: "admin-links"
    }),
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Same Window', 'wpmozo-addons-lite-for-gutenberg')
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
    className: "wpmozo-button-tabs-btn",
    isPressed: 'external' === attributes.socialIconLinkTarget ? true : false,
    onClick: () => setAttributes({
      socialIconLinkTarget: 'external'
    }),
    icon: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Icon, {
      icon: "external"
    }),
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('External', 'wpmozo-addons-lite-for-gutenberg')
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Show Skills', 'wpmozo-addons-lite-for-gutenberg'),
    checked: attributes.showSkills,
    onChange: newValue => setAttributes({
      showSkills: newValue
    })
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Slider', 'wpmozo-addons-lite-for-gutenberg'),
    className: "wpmozo-typography-panel",
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Layout', 'wpmozo-addons-lite-for-gutenberg'),
    value: attributes.sliderLayout,
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Layout 1', 'wpmozo-addons-lite-for-gutenberg'),
      value: 'layout1'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Layout 2', 'wpmozo-addons-lite-for-gutenberg'),
      value: 'layout2'
    }],
    onChange: newValue => setAttributes({
      sliderLayout: newValue
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Slide Effect', 'wpmozo-addons-lite-for-gutenberg'),
    value: attributes.slideEffect,
    options: slideEffects,
    onChange: newValue => setAttributes({
      slideEffect: newValue
    })
  }), ('coverflow' === attributes.slideEffect || 'slide' === attributes.slideEffect) && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Number of Members Per View', 'wpmozo-addons-lite-for-gutenberg'),
    value: attributes.memberPerSlide,
    options: oneToTen,
    onChange: newValue => setAttributes({
      memberPerSlide: newValue
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Number of Slides Per Group', 'wpmozo-addons-lite-for-gutenberg'),
    value: attributes.slidesPerGroup,
    options: oneToTen,
    onChange: newValue => setAttributes({
      slidesPerGroup: newValue
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Space between Slides', 'wpmozo-addons-lite-for-gutenberg'),
    value: attributes.spaceBetweenSlides,
    onChange: newValue => setAttributes({
      spaceBetweenSlides: newValue
    }),
    min: 0,
    step: 1,
    max: 100
  })), 'coverflow' === attributes.slideEffect && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Enable Slide Shadow', 'wpmozo-addons-lite-for-gutenberg'),
    checked: attributes.enableCoverflowShadow,
    onChange: newValue => setAttributes({
      enableCoverflowShadow: newValue
    })
  }), 'coverflow' === attributes.slideEffect && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoColorPicker, {
    ColorKey: "coverflow",
    props: props,
    ColorTypes: [{
      key: 'ShadowColor',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Shadow Color', 'wpmozo-addons-lite-for-gutenberg')
    }]
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Coverflow Rotate', 'wpmozo-addons-lite-for-gutenberg'),
    value: attributes.coverflowRotate,
    onChange: newValue => setAttributes({
      coverflowRotate: newValue
    }),
    min: 1,
    max: 360
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Coverflow Depth', 'wpmozo-addons-lite-for-gutenberg'),
    value: attributes.coverflowDepth,
    onChange: newValue => setAttributes({
      coverflowDepth: newValue
    }),
    min: 1,
    max: 1000
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Equalize Slide Height', 'wpmozo-addons-lite-for-gutenberg'),
    checked: attributes.equalizeHeight,
    onChange: newValue => setAttributes({
      equalizeHeight: newValue
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Auto Height Slider', 'wpmozo-addons-lite-for-gutenberg'),
    checked: attributes.autoHeightSlider,
    onChange: newValue => setAttributes({
      autoHeightSlider: newValue
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Enable Loop', 'wpmozo-addons-lite-for-gutenberg'),
    checked: attributes.sliderLoop,
    onChange: newValue => setAttributes({
      sliderLoop: newValue
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Autoplay', 'wpmozo-addons-lite-for-gutenberg'),
    checked: attributes.autoplay,
    onChange: newValue => setAttributes({
      autoplay: newValue
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Enable Linear Transition', 'wpmozo-addons-lite-for-gutenberg'),
    checked: attributes.enableLinearTransition,
    onChange: newValue => setAttributes({
      enableLinearTransition: newValue
    })
  }), attributes.autoplay && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Autoplay Delay', 'wpmozo-addons-lite-for-gutenberg'),
    value: attributes.autoplaySpeed,
    onChange: newValue => setAttributes({
      autoplaySpeed: newValue
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Pause On Hover', 'wpmozo-addons-lite-for-gutenberg'),
    checked: attributes.pauseOnHover,
    onChange: newValue => setAttributes({
      pauseOnHover: newValue
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Transition Duration', 'wpmozo-addons-lite-for-gutenberg'),
    value: attributes.transitionDuration,
    onChange: newValue => setAttributes({
      transitionDuration: newValue
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Show Arrows', 'wpmozo-addons-lite-for-gutenberg'),
    checked: attributes.showArrow,
    onChange: newValue => setAttributes({
      showArrow: newValue
    })
  }), attributes.showArrow && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoIconpicker, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Previous Arrow', 'wpmozo-addons-lite-for-gutenberg'),
    iconPickerKey: "previousSlideArrow",
    props: props,
    value: attributes.previousSlideArrow,
    onChange: newValue => setAttributes({
      previousSlideArrow: newValue
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoIconpicker, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Next Arrow', 'wpmozo-addons-lite-for-gutenberg'),
    iconPickerKey: "nextSlideArrow",
    props: props,
    value: attributes.nextSlideArrow,
    onChange: newValue => setAttributes({
      nextSlideArrow: newValue
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Show Arrows Only On Hover', 'wpmozo-addons-lite-for-gutenberg'),
    checked: attributes.showArrowOnHover,
    onChange: newValue => setAttributes({
      showArrowOnHover: newValue
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Arrows Position', 'wpmozo-addons-lite-for-gutenberg'),
    value: attributes.arrowsPosition,
    options: arrowsPositions,
    onChange: newValue => setAttributes({
      arrowsPosition: newValue
    })
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Show Dots Pagination', 'wpmozo-addons-lite-for-gutenberg'),
    checked: attributes.showControlDot,
    onChange: newValue => setAttributes({
      showControlDot: newValue
    })
  }), attributes.showControlDot && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Dots Pagination Style', 'wpmozo-addons-lite-for-gutenberg'),
    value: attributes.controlDotStyle,
    options: controlDotStyles,
    onChange: newValue => setAttributes({
      controlDotStyle: newValue
    })
  }), 'stretched_dot' != attributes.controlDotStyle && 'line' != attributes.controlDotStyle && 'rounded_line' != attributes.controlDotStyle && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Enable Dynamic Dots', 'wpmozo-addons-lite-for-gutenberg'),
    checked: attributes.enableDynamicDots,
    onChange: newValue => setAttributes({
      enableDynamicDots: newValue
    })
  }))), ('coverflow' === attributes.slideEffect || 'slide' === attributes.slideEffect) && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Slider Responsive', 'wpmozo-addons-lite-for-gutenberg'),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.BaseControl, {
    className: "wpmozo-color-combo-wrap"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ButtonGroup, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
    className: "wpmozo-color-combo-type",
    isPressed: 'tablet' === deviceType ? true : false,
    onClick: () => setDeviceType('tablet')
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Tablet', 'wpmozo-addons-lite-for-gutenberg')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
    className: "wpmozo-color-combo-type",
    isPressed: 'mobile' === deviceType ? true : false,
    onClick: () => setDeviceType('mobile')
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Mobile', 'wpmozo-addons-lite-for-gutenberg'))), 'tablet' === deviceType && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Number of Members Per View', 'wpmozo-addons-lite-for-gutenberg'),
    value: attributes.tabletMemberPerSlide,
    options: oneToTen,
    onChange: newValue => setAttributes({
      tabletMemberPerSlide: newValue
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Number of Slides Per Group', 'wpmozo-addons-lite-for-gutenberg'),
    value: attributes.tabletSlidesPerGroup,
    options: oneToTen,
    onChange: newValue => setAttributes({
      tabletSlidesPerGroup: newValue
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Space between Slides', 'wpmozo-addons-lite-for-gutenberg'),
    value: attributes.tabletSpaceBetweenSlides,
    onChange: newValue => setAttributes({
      tabletSpaceBetweenSlides: newValue
    }),
    min: 0,
    step: 1,
    max: 100
  })), 'mobile' === deviceType && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Number of Members Per View', 'wpmozo-addons-lite-for-gutenberg'),
    value: attributes.mobileMemberPerSlide,
    options: oneToTen,
    onChange: newValue => setAttributes({
      mobileMemberPerSlide: newValue
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Number of Slides Per Group', 'wpmozo-addons-lite-for-gutenberg'),
    value: attributes.mobileSlidesPerGroup,
    options: oneToTen,
    onChange: newValue => setAttributes({
      mobileSlidesPerGroup: newValue
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Space between Slides', 'wpmozo-addons-lite-for-gutenberg'),
    value: attributes.mobileSpaceBetweenSlides,
    onChange: newValue => setAttributes({
      mobileSpaceBetweenSlides: newValue
    }),
    min: 0,
    step: 1,
    max: 100
  }))))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, {
    key: "styles",
    group: "styles"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Container', 'wpmozo-addons-lite-for-gutenberg'),
    className: "wpmozo-typography-panel",
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoColorPicker, {
    ColorKey: "container",
    props: props,
    ColorTypes: [{
      key: 'Background',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Background Color', 'wpmozo-addons-lite-for-gutenberg')
    }]
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoDimensions, {
    DimensionKey: "container",
    DimensionsTypes: {
      padding: true
    },
    props: props
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Slide', 'wpmozo-addons-lite-for-gutenberg'),
    className: "wpmozo-typography-panel",
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoColorPicker, {
    ColorKey: "slide",
    props: props,
    ColorTypes: [{
      key: 'Background',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Background Color', 'wpmozo-addons-lite-for-gutenberg')
    }]
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoDimensions, {
    DimensionKey: "slide",
    DimensionsTypes: {
      padding: true
    },
    props: props
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoBorder, {
    BorderKey: "slide",
    props: props
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Text Alignment', 'wpmozo-addons-lite-for-gutenberg'),
    className: "wpmozo-typography-panel",
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoAlignment, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Alignment', 'wpmozo-addons-lite-for-gutenberg'),
    onChange: newValue => setAttributes({
      textAlignment: newValue
    }),
    value: attributes.textAlignment
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Image', 'wpmozo-addons-lite-for-gutenberg'),
    className: "wpmozo-typography-panel",
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.HeightControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Image Height', 'wpmozo-addons-lite-for-gutenberg'),
    onChange: newValue => setAttributes({
      imageHeight: newValue
    }),
    value: attributes.imageHeight
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoBorder, {
    BorderKey: "image",
    props: props
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Name Text', 'wpmozo-addons-lite-for-gutenberg'),
    className: "wpmozo-typography-panel",
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoColorPicker, {
    ColorKey: "name",
    props: props,
    ColorTypes: [{
      key: 'text',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Name Text Color', 'wpmozo-addons-lite-for-gutenberg')
    }]
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.BaseControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Name Heading Lavel', 'wpmozo-addons-lite-for-gutenberg')
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ButtonGroup, null, headingLavels.map((item, key) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
    isPressed: item.value === attributes.nameHeadingLavel ? true : false,
    onClick: newValue => setAttributes({
      nameHeadingLavel: item.value
    })
  }, item.label)))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoAlignment, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Name Text Alignment', 'wpmozo-addons-lite-for-gutenberg'),
    onChange: newValue => setAttributes({
      nameTextAlignment: newValue
    }),
    value: attributes.nameTextAlignment
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoTypography, {
    TypographyKey: "name",
    props: props
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Designation Text', 'wpmozo-addons-lite-for-gutenberg'),
    className: "wpmozo-typography-panel",
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoColorPicker, {
    ColorKey: "designation",
    props: props,
    ColorTypes: [{
      key: 'text',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Designation Text Color', 'wpmozo-addons-lite-for-gutenberg')
    }]
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.BaseControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Designation Heading Lavel', 'wpmozo-addons-lite-for-gutenberg')
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ButtonGroup, null, headingLavels.map((item, key) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
    isPressed: item.value === attributes.designationHeadingLavel ? true : false,
    onClick: newValue => setAttributes({
      designationHeadingLavel: item.value
    })
  }, item.label)))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoAlignment, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Designation Text Alignment', 'wpmozo-addons-lite-for-gutenberg'),
    onChange: newValue => setAttributes({
      designationTextAlignment: newValue
    }),
    value: attributes.designationTextAlignment
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoTypography, {
    TypographyKey: "designation",
    props: props
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Description Text', 'wpmozo-addons-lite-for-gutenberg'),
    className: "wpmozo-typography-panel",
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoColorPicker, {
    ColorKey: "description",
    props: props,
    ColorTypes: [{
      key: 'text',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Description Text Color', 'wpmozo-addons-lite-for-gutenberg')
    }]
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoAlignment, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Description Text Alignment', 'wpmozo-addons-lite-for-gutenberg'),
    onChange: newValue => setAttributes({
      descriptionTextAlignment: newValue
    }),
    value: attributes.descriptionTextAlignment
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoTypography, {
    TypographyKey: "description",
    props: props
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Skill Text', 'wpmozo-addons-lite-for-gutenberg'),
    className: "wpmozo-typography-panel",
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoColorPicker, {
    ColorKey: "skill",
    props: props,
    ColorTypes: [{
      key: 'text',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Skill Text Color', 'wpmozo-addons-lite-for-gutenberg')
    }]
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoAlignment, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Skill Text Alignment', 'wpmozo-addons-lite-for-gutenberg'),
    onChange: newValue => setAttributes({
      skillTextAlignment: newValue
    }),
    value: attributes.skillTextAlignment,
    ColorKey: "bar",
    props: props,
    ColorTypes: [{
      key: 'EmptyColor',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Empty Bar Color', 'wpmozo-addons-lite-for-gutenberg')
    }, {
      key: 'FilledColor',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Empty Bar Color', 'wpmozo-addons-lite-for-gutenberg')
    }]
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.HeightControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Bar Height', 'wpmozo-addons-lite-for-gutenberg'),
    onChange: newValue => setAttributes({
      barHeight: newValue
    }),
    value: attributes.barHeight
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Social Icons', 'wpmozo-addons-lite-for-gutenberg'),
    className: "wpmozo-typography-panel",
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoColorPicker, {
    ColorKey: "icon",
    props: props,
    ColorTypes: [{
      key: 'SeparatorColor',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Icon Separator Color', 'wpmozo-addons-lite-for-gutenberg')
    }, {
      key: 'Color',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Icon Color', 'wpmozo-addons-lite-for-gutenberg')
    }, {
      key: 'Background',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Icon Background Color', 'wpmozo-addons-lite-for-gutenberg')
    }]
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoAlignment, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Skill Text Alignment', 'wpmozo-addons-lite-for-gutenberg'),
    onChange: newValue => setAttributes({
      socialIconsAlignment: newValue
    }),
    value: attributes.socialIconsAlignment
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.HeightControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Separator Size', 'wpmozo-addons-lite-for-gutenberg'),
    onChange: newValue => setAttributes({
      separatorSize: newValue
    }),
    value: attributes.separatorSize
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.HeightControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Icon Size', 'wpmozo-addons-lite-for-gutenberg'),
    onChange: newValue => setAttributes({
      iconSize: newValue
    }),
    value: attributes.iconSize
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoBorder, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Social Icons Border', 'wpmozo-addons-lite-for-gutenberg'),
    BorderKey: "icon",
    props: props
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Slider', 'wpmozo-addons-lite-for-gutenberg'),
    className: "wpmozo-typography-panel",
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoColorPicker, {
    ColorKey: "slider",
    props: props,
    ColorTypes: [{
      key: 'ArrowColor',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Arrow Color', 'wpmozo-addons-lite-for-gutenberg')
    }, {
      key: 'ArrowBackground',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Arrow Background', 'wpmozo-addons-lite-for-gutenberg')
    }, {
      key: 'ArrowBackgroundBorderColor',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Arrow Background Border Color', 'wpmozo-addons-lite-for-gutenberg')
    }, {
      key: 'ActiveDoteColor',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Active Dot Pagination Color', 'wpmozo-addons-lite-for-gutenberg')
    }, {
      key: 'InactiveDoteColor',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Inactive Dot Pagination Color', 'wpmozo-addons-lite-for-gutenberg')
    }]
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoTypography, {
    TypographyKey: "arrow",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Arrow Font Size', 'wpmozo-addons-lite-for-gutenberg'),
    props: props,
    TypoTypes: {
      'FontSize': true
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoDimensions, {
    DimensionKey: "arrow",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Arrows Padding', 'wpmozo-addons-lite-for-gutenberg'),
    DimensionsTypes: {
      padding: true
    },
    props: props
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.HeightControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Arrow Size', 'wpmozo-addons-lite-for-gutenberg'),
    onChange: newValue => setAttributes({
      iconSize: newValue
    }),
    value: attributes.iconSize
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoBorder, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Arrow Background Border', 'wpmozo-addons-lite-for-gutenberg'),
    BorderKey: "arrow",
    props: props
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Inspector);

/***/ }),

/***/ "./src/blocks/team-slider/save.js":
/*!****************************************!*\
  !*** ./src/blocks/team-slider/save.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const Save = ({
  attributes
}) => {
  return null;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Save);

/***/ }),

/***/ "./src/blocks/team-slider/style.js":
/*!*****************************************!*\
  !*** ./src/blocks/team-slider/style.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const Style = ({
  attributes,
  ID,
  clientId
}) => {
  const wpmozoCoreFun = window.wpmozo,
    parent = '#block-' + clientId,
    toConvertStyles = ['container', 'slide'],
    convertedStyle = wpmozoCoreFun.convetInlineStyleStr(toConvertStyles, attributes);
  let css = '';
  let allInline = [{
    selector: '.wpmozo-adfgu-team-slider-wrap',
    style: {
      'background': attributes.containerBackground,
      'text-align': attributes.textAlignment
    }
  }, {
    selector: '.wpmozo-adfgu-team-slider-wrap .swiper-container',
    additional: convertedStyle['container']
  }, {
    selector: '.wpmozo-adfgu-team-member-card',
    style: {
      'background': attributes.slideBackground
    },
    additional: convertedStyle['slide']
  }];
  if (!wpmozoCoreFun.wpmozo_is_empty(attributes.nextSlideArrow)) {
    allInline.push({
      selector: '.custom-swiper-button-next:after',
      style: {
        'display': 'none !important;'
      }
    });
  }
  if (!wpmozoCoreFun.wpmozo_is_empty(attributes.previousSlideArrow)) {
    allInline.push({
      selector: '.custom-swiper-button-prev:after',
      style: {
        'display': 'none !important;'
      }
    });
  }
  if (attributes.enableLinearTransition) {
    allInline.push({
      selector: '.swiper-wrapper',
      style: {
        'transition-timing-function': 'linear !important'
      }
    });
  }
  if (attributes.showArrowOnHover) {
    allInline.push({
      selector: '.wpmozo-adfgu-team-slider-navigation .swiper-button-prev',
      additional: `visibility: hidden; opacity: 0; transition: all 300ms ease;`
    });
    allInline.push({
      selector: '.wpmozo-adfgu-team-slider-navigation .swiper-button-next',
      additional: `visibility: hidden; opacity: 0; transition: all 300ms ease;`
    });
    allInline.push({
      selector: '.wpmozo-adfgu-team-slider-wrap:hover .wpmozo-adfgu-team-slider-navigation .swiper-button-prev, .wpmozo-adfgu-team-slider-wrap:hover .wpmozo-adfgu-team-slider-navigation .swiper-button-next',
      additional: `visibility: visible; opacity: 1;`
    });
    allInline.push({
      selector: '.wpmozo-adfgu-team-slider-wrap:hover .wpmozo-adfgu-team-slider-navigation .swiper-button-prev.swiper-button-disabled, .wpmozo-adfgu-team-slider-wrap:hover .wpmozo-adfgu-team-slider-navigation .swiper-button-next.swiper-button-disabled',
      additional: `opacity: 0.35;`
    });
    /* Outside Slider */
    allInline.push({
      selector: '.wpmozo-adfgu-arrows-outside .swiper-button-prev',
      additional: `left: 50px;`
    });
    allInline.push({
      selector: '.wpmozo-adfgu-arrows-outside .swiper-button-next',
      additional: `right: 50px;`
    });
    allInline.push({
      selector: '.wpmozo-adfgu-team-slider-wrap:hover .wpmozo-adfgu-arrows-outside .swiper-button-prev',
      additional: `left: 0;`
    });
    allInline.push({
      selector: '.wpmozo-adfgu-team-slider-wrap:hover .wpmozo-adfgu-arrows-outside .swiper-button-next',
      additional: `right: 0;`
    });
    /* Inside Slider */
    allInline.push({
      selector: '.wpmozo-adfgu-arrows-inside .swiper-button-prev',
      additional: `left: -50px;`
    });
    allInline.push({
      selector: '.wpmozo-adfgu-arrows-inside .swiper-button-next',
      additional: `right: -50px;`
    });
    allInline.push({
      selector: '.wpmozo-adfgu-team-slider-wrap:hover .wpmozo-adfgu-arrows-inside .swiper-button-prev',
      additional: `left: 0;`
    });
    allInline.push({
      selector: '.wpmozo-adfgu-team-slider-wrap:hover .wpmozo-adfgu-arrows-inside .swiper-button-next',
      additional: `right: 0;`
    });
  }
  if ('on' === attributes.equalizeHeight) {
    allInline.push({
      selector: '.swiper-wrapper',
      style: {
        'align-items': 'stretch'
      }
    });
    allInline.push({
      selector: '.swiper-slide',
      style: {
        'height': 'auto'
      }
    });
    allInline.push({
      selector: '.wpmozo-adfgu-team-member-card',
      style: {
        'height': '100%'
      }
    });
  } else {
    if (1 === attributes.memberPerSlide) {
      allInline.push({
        selector: '.swiper-wrapper',
        style: {
          'align-items': 'center'
        }
      });
    }
  }
  let generateStyle = wpmozoCoreFun.wpmozo_generate_style(allInline);
  if (!wpmozoCoreFun.wpmozo_is_empty(generateStyle)) {
    css += `
            ${parent} {
                ${generateStyle}
            }
        `;
  }
  if (!wpmozoCoreFun.wpmozo_is_empty(attributes.containerbackground)) {
    css += `
            ${parent} {
                background: ${attributes.containerbackground};
            }
        `;
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("style", {
    className: "wpmozo-dynamic-style",
    "data-id": ID,
    "data-client-id": clientId
  }, css);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Style);

/***/ }),

/***/ "./src/blocks/tilt-image/attributes.js":
/*!*********************************************!*\
  !*** ./src/blocks/tilt-image/attributes.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);

const attributes = {
  ID: {
    type: "string"
  },
  image: {
    type: "string"
  },
  title: {
    type: "string"
  },
  content: {
    type: "string"
  },
  overlayColor: {
    type: "string"
  },
  titleLavel: {
    type: "string",
    default: "h2"
  },
  titleColor: {
    type: "string"
  },
  titleFontSize: {
    type: "string"
  },
  titleFontAppearance: {
    type: "object",
    fontStyle: {
      type: "string"
    },
    fontWeight: {
      type: "string"
    },
    default: {
      fontStyle: "",
      fontWeight: ""
    }
  },
  titleLetterSpacing: {
    type: "string"
  },
  titleDecoration: {
    type: "string"
  },
  titleLetterCase: {
    type: "string"
  },
  titleLineHeight: {
    type: "string"
  },
  titleAlign: {
    type: "string",
    default: "left"
  },
  descriptionColor: {
    type: "String"
  },
  descriptionFontSize: {
    type: "string"
  },
  descriptionFontAppearance: {
    type: "object",
    fontStyle: {
      type: "string"
    },
    fontWeight: {
      type: "string"
    },
    default: {
      fontStyle: "",
      fontWeight: ""
    }
  },
  descriptionLetterSpacing: {
    type: "string"
  },
  descriptionDecoration: {
    type: "string"
  },
  descriptionLetterCase: {
    type: "string"
  },
  descriptionLineHeight: {
    type: "string"
  },
  descriptionAlign: {
    type: "string",
    default: "left"
  },
  useIcon: {
    type: "boolean",
    default: false
  },
  icon: {
    type: "string"
  },
  showButton: {
    type: "boolean",
    default: false
  },
  buttonText: {
    type: "string",
    default: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Read More', 'wpmozo-addons-lite-for-gutenberg')
  },
  buttonUrl: {
    type: "string"
  },
  buttonLinkTarget: {
    type: "string",
    default: "same"
  },
  tiltMax: {
    type: "number",
    default: 20
  },
  tiltPerspective: {
    type: "number",
    default: 1000
  },
  tiltScale: {
    type: "number",
    default: 1
  },
  tiltSpeed: {
    type: "number",
    default: 300
  },
  tiltMobile: {
    type: "boolean",
    default: false
  },
  useGlare: {
    type: "boolean",
    default: false
  },
  tiltMaxGlare: {
    type: "number",
    default: 1
  },
  use3dEffect: {
    type: "boolean",
    default: false
  },
  tilt3dValue: {
    type: "number",
    default: 1
  },
  useDisableAxis: {
    type: "boolean",
    default: false
  },
  tiltDisableAxis: {
    type: "string"
  },
  useOverlay: {
    type: "boolean",
    default: false
  },
  overlayColor: {
    type: "string"
  },
  iconColor: {
    type: "string"
  },
  iconAlign: {
    type: "string",
    default: "center"
  },
  useIconFontSize: {
    type: "boolean",
    default: false
  },
  iconFontSize: {
    type: "string"
  },
  contentOnHover: {
    type: "boolean",
    default: false
  },
  contentAlignment: {
    type: "string",
    default: "center"
  },
  contentAnimationDirection: {
    type: "string",
    default: "off"
  },
  contentpadding: {
    type: "object"
  },
  buttonTextColor: {
    type: "string"
  },
  buttonBackgroundColor: {
    type: "string"
  },
  buttonFontSize: {
    type: "string"
  },
  buttonFontAppearance: {
    type: "object",
    fontStyle: {
      type: "string"
    },
    fontWeight: {
      type: "string"
    },
    default: {
      fontStyle: "",
      fontWeight: ""
    }
  },
  buttonLetterSpacing: {
    type: "string"
  },
  buttonDecoration: {
    type: "string"
  },
  buttonLetterCase: {
    type: "string"
  },
  buttonLineHeight: {
    type: "string"
  },
  buttonborder: {
    type: "object"
  },
  buttonborderRadius: {
    type: "string"
  },
  buttonpadding: {
    type: "object"
  },
  buttonmargin: {
    type: "object"
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (attributes);

/***/ }),

/***/ "./src/blocks/tilt-image/edit.js":
/*!***************************************!*\
  !*** ./src/blocks/tilt-image/edit.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _inspector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inspector */ "./src/blocks/tilt-image/inspector.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style */ "./src/blocks/tilt-image/style.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__);






const WPMozoEditorObj = wpmozo_adfgu_editor_object;
const Edit = props => {
  const coreFunc = window.wpmozo,
    attributes = props.attributes,
    clientId = props.clientId,
    ID = window.wpmozo.getIdByClientid(clientId),
    setAttributes = props.setAttributes,
    blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.useBlockProps)({
      className: 'wpmozo-adfgu-tilt-image'
    });
  let image = attributes.image ? attributes.image : WPMozoEditorObj.placeholderImg,
    contentAlignment = attributes.contentAlignment,
    linkTarget = 'external' === attributes.buttonLinkTarget ? '_blank' : '_self',
    animationDirection = attributes.contentAnimationDirection,
    animationClass = attributes.contentOnHover && 'off' !== animationDirection ? ` wpmozo-animation wpmozo-animation-${attributes.contentAnimationDirection}` : '';
  attributes.ID = ID;
  let wpmozo_init_tilt_img = (element, attributes) => {
    let axis = attributes.useDisableAxis ? attributes.tiltDisableAxis : null,
      glare = attributes.useGlare ? attributes.tiltMaxGlare : false;
    element.find('.wpmozo-adfgu-tilt-image-wrapper').tilt({
      maxTilt: attributes.tiltMax,
      perspective: attributes.tiltPerspective,
      scale: attributes.tiltScale,
      speed: attributes.tiltSpeed,
      disableAxis: axis,
      reset: true,
      glare: glare,
      maxGlare: attributes.tiltMaxGlare
    });
  };
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
    let $this = coreFunc.getMainEl(clientId);
    wpmozo_init_tilt_img($this, attributes);
  });
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
    let $this = coreFunc.getMainEl(clientId);
    wpmozo_init_tilt_img($this, attributes);
  }, [attributes.tiltMax, attributes.tiltPerspective, attributes.tiltScale, attributes.tiltSpeed, attributes.useDisableAxis, attributes.useGlare, attributes.tiltMaxGlare]);
  const icon = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "wpmozo-adfgu-tilt-icon"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
    className: `${attributes.icon}`
  }));
  const button = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wpmozo-adfgu-tilt-image-button-wrapper"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: attributes.buttonUrl,
    className: "wpmozo-adfgu-tilt-image-button wp-block-button__link wp-element-button",
    target: linkTarget
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.RichText, {
    value: attributes.buttonText,
    onChange: newValue => setAttributes({
      buttonText: newValue
    })
  })));
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_inspector__WEBPACK_IMPORTED_MODULE_1__["default"], {
    ...props
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_style__WEBPACK_IMPORTED_MODULE_2__["default"], {
    attributes: attributes,
    ID: ID,
    clientId: clientId
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...blockProps
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `wpmozo-adfgu-tilt-image-wrapper wpmozo-editor wpmozo-adfgu-tilt-align-${contentAlignment}`
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wpmozo-adfgu-tilt-image-inner-wrapper"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    className: "wpmozo-adfgu-tilt-image-image",
    src: image
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `wpmozo-adfgu-tilt-content-wrapper${animationClass}`
  }, attributes.useIcon && icon, !coreFunc.wpmozo_is_empty(attributes.title) && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.RichText, {
    className: "wpmozo-adfgu-tilt-title",
    tagName: attributes.titleLavel,
    value: attributes.title,
    onChange: newValue => setAttributes({
      title: newValue
    })
  }), !coreFunc.wpmozo_is_empty(attributes.content) && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.RichText, {
    className: "wpmozo-adfgu-tilt-desc",
    tagName: "div",
    value: attributes.content,
    onChange: newValue => setAttributes({
      content: newValue
    })
  }), attributes.showButton && !coreFunc.wpmozo_is_empty(attributes.buttonText) && button)))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Edit);

/***/ }),

/***/ "./src/blocks/tilt-image/icon.js":
/*!***************************************!*\
  !*** ./src/blocks/tilt-image/icon.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const Icon = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  version: "1.1",
  width: "1024",
  height: "1024",
  viewBox: "0 0 1024 1024"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
  id: "icomoon-ignore"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  fill: "#000",
  d: "M885.333 490.667c0 0 0 42.667 0 42.667h64c0 0 0 0 0 0s42.667 0 42.667 0c12.8 0 21.333-8.533 21.333-21.333v0c0-12.8-8.533-21.333-21.333-21.333h-106.667c0 0 0 0 0 0zM821.333 490.667h-128v42.667h128v-42.667zM629.333 490.667h-128v42.667h128v-42.667zM437.333 490.667h-128v42.667h128v-42.667zM245.333 490.667h-128v42.667h128v-42.667zM53.333 490.667h-21.333c-12.8 0-21.333 8.533-21.333 21.333v0c0 12.8 8.533 21.333 21.333 21.333h21.333v-42.667z"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  fill: "#000",
  d: "M942.933 674.133l-10.667-44.8h-42.667l12.8 53.333c21.333 91.733-36.267 183.467-128 204.8l-332.8 76.8c-12.8 2.133-25.6 4.267-38.4 4.267-81.067 0-149.333-53.333-166.4-132.267l-49.067-206.933h-42.667l49.067 217.6c23.467 98.133 110.933 166.4 206.933 166.4 14.933 0 32-2.133 49.067-6.4l332.8-76.8c115.2-25.6 187.733-140.8 160-256zM249.6 134.4l332.8-76.8c12.8-2.133 25.6-4.267 38.4-4.267 81.067 0 149.333 53.333 166.4 132.267l49.067 206.933h42.667l-51.2-215.467c-23.467-98.133-110.933-166.4-206.933-166.4-14.933 0-32 2.133-49.067 6.4l-330.667 76.8c-115.2 27.733-185.6 140.8-160 256l10.667 44.8h42.667l-12.8-53.333c-21.333-93.867 36.267-185.6 128-206.933z"
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Icon);

/***/ }),

/***/ "./src/blocks/tilt-image/index.js":
/*!****************************************!*\
  !*** ./src/blocks/tilt-image/index.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./attributes */ "./src/blocks/tilt-image/attributes.js");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./src/blocks/tilt-image/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ "./src/blocks/tilt-image/save.js");
/* harmony import */ var _icon_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icon.js */ "./src/blocks/tilt-image/icon.js");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__);






(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__.registerBlockType)('wpmozo/tilt-image', {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Tilt Image', 'wpmozo-addons-lite-for-gutenberg'),
  icon: _icon_js__WEBPACK_IMPORTED_MODULE_3__["default"],
  apiVersion: 3,
  category: 'wpmozo',
  keywords: ['wpmozo', 'tilt-image', 'tilt', 'image'],
  attributes: _attributes__WEBPACK_IMPORTED_MODULE_0__["default"],
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_2__["default"]
});

/***/ }),

/***/ "./src/blocks/tilt-image/inspector.js":
/*!********************************************!*\
  !*** ./src/blocks/tilt-image/inspector.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/index */ "./src/components/index.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__);






const Inspector = props => {
  props = Object.assign({}, props, {
    preAttributes: {}
  });
  const attributes = props.attributes,
    setAttributes = props.setAttributes,
    headingLavels = [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('H1', 'wpmozo-addons-lite-for-gutenberg'),
      value: 'h1'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('H2', 'wpmozo-addons-lite-for-gutenberg'),
      value: 'h2'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('H3', 'wpmozo-addons-lite-for-gutenberg'),
      value: 'h3'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('H4', 'wpmozo-addons-lite-for-gutenberg'),
      value: 'h4'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('H5', 'wpmozo-addons-lite-for-gutenberg'),
      value: 'h5'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('H6', 'wpmozo-addons-lite-for-gutenberg'),
      value: 'h6'
    }],
    contentAlignment = [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Top Left', 'wpmozo-addons-lite-for-gutenberg'),
      value: 'top-left'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Top Center', 'wpmozo-addons-lite-for-gutenberg'),
      value: 'top-center'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Top Right', 'wpmozo-addons-lite-for-gutenberg'),
      value: 'top-right'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Center Left', 'wpmozo-addons-lite-for-gutenberg'),
      value: 'center-left'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Center', 'wpmozo-addons-lite-for-gutenberg'),
      value: 'center'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Center Right', 'wpmozo-addons-lite-for-gutenberg'),
      value: 'center-right'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Bottom Left', 'wpmozo-addons-lite-for-gutenberg'),
      value: 'bottom-left'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Bottom Center', 'wpmozo-addons-lite-for-gutenberg'),
      value: 'bottom-center'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Bottom Right', 'wpmozo-addons-lite-for-gutenberg'),
      value: 'bottom-right'
    }],
    contentAnimationDirection = [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Top To Bottom', 'wpmozo-addons-lite-for-gutenberg'),
      value: 'top'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Left To Right', 'wpmozo-addons-lite-for-gutenberg'),
      value: 'left'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Right To Left', 'wpmozo-addons-lite-for-gutenberg'),
      value: 'right'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Bottom To Top', 'wpmozo-addons-lite-for-gutenberg'),
      value: 'bottom'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('No Animation', 'wpmozo-addons-lite-for-gutenberg'),
      value: 'off'
    }];
  const [titleStyleType, setTitleStyleType] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)('normal');
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, {
    key: "controls"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Tilt Image', 'wpmozo-addons-lite-for-gutenberg'),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoMediaUploader, {
    attrKye: "image",
    props: props
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Content', 'wpmozo-addons-lite-for-gutenberg'),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Title', 'wpmozo-addons-lite-for-gutenberg'),
    value: attributes.title,
    onChange: newValue => setAttributes({
      title: newValue
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.TextareaControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Content', 'wpmozo-addons-lite-for-gutenberg'),
    onChange: newValue => setAttributes({
      content: newValue
    }),
    value: attributes.content
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Use Icon', 'wpmozo-addons-lite-for-gutenberg'),
    checked: attributes.useIcon,
    onChange: newValue => setAttributes({
      useIcon: newValue
    })
  }), attributes.useIcon && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoIconpicker, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Icon', 'wpmozo-addons-lite-for-gutenberg'),
    iconPickerKey: "icon",
    props: props,
    value: attributes.icon,
    onChange: newValue => setAttributes({
      icon: newValue
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Show Button', 'wpmozo-addons-lite-for-gutenberg'),
    checked: attributes.showButton,
    onChange: newValue => setAttributes({
      showButton: newValue
    })
  }), attributes.showButton && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Button Text', 'wpmozo-addons-lite-for-gutenberg'),
    value: attributes.buttonText,
    onChange: newValue => setAttributes({
      buttonText: newValue
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Button Url', 'wpmozo-addons-lite-for-gutenberg'),
    onChange: newValue => setAttributes({
      buttonUrl: newValue
    }),
    value: attributes.buttonUrl
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.BaseControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Link Target', 'wpmozo-addons-lite-for-gutenberg'),
    className: "wpmozo-button-tabs-wrap"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ButtonGroup, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Button, {
    className: "wpmozo-button-tabs-btn",
    isPressed: 'same' === attributes.buttonLinkTarget ? true : false,
    onClick: () => setAttributes({
      buttonLinkTarget: 'same'
    }),
    icon: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Icon, {
      icon: "admin-links"
    }),
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Same Window', 'wpmozo-addons-lite-for-gutenberg')
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Button, {
    className: "wpmozo-button-tabs-btn",
    isPressed: 'external' === attributes.buttonLinkTarget ? true : false,
    onClick: () => setAttributes({
      buttonLinkTarget: 'external'
    }),
    icon: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Icon, {
      icon: "external"
    }),
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('External', 'wpmozo-addons-lite-for-gutenberg')
  })))))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, {
    key: "styles",
    group: "styles"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Tilt Setting', 'wpmozo-addons-lite-for-gutenberg'),
    className: "wpmozo-typography-panel",
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Max Rotation', 'wpmozo-addons-lite-for-gutenberg'),
    value: attributes.tiltMax,
    onChange: newValue => setAttributes({
      tiltMax: newValue
    }),
    min: 1,
    max: 100
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Perspective', 'wpmozo-addons-lite-for-gutenberg'),
    value: attributes.tiltPerspective,
    onChange: newValue => setAttributes({
      tiltPerspective: newValue
    }),
    min: 100,
    max: 2000
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Scale on Hover', 'wpmozo-addons-lite-for-gutenberg'),
    value: attributes.tiltScale,
    onChange: newValue => setAttributes({
      tiltScale: newValue
    }),
    min: 1,
    step: 0.1,
    max: 3
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Speed', 'wpmozo-addons-lite-for-gutenberg'),
    value: attributes.tiltSpeed,
    onChange: newValue => setAttributes({
      tiltSpeed: newValue
    }),
    min: 10,
    max: 1000
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Disable on Mobile', 'wpmozo-addons-lite-for-gutenberg'),
    checked: attributes.tiltMobile,
    onChange: newValue => setAttributes({
      tiltMobile: newValue
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Use Glare', 'wpmozo-addons-lite-for-gutenberg'),
    checked: attributes.useGlare,
    onChange: newValue => setAttributes({
      useGlare: newValue
    })
  }), attributes.useGlare && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Max Glare', 'wpmozo-addons-lite-for-gutenberg'),
    value: attributes.tiltMaxGlare,
    onChange: newValue => setAttributes({
      tiltMaxGlare: newValue
    }),
    min: 0.1,
    max: 1,
    step: 0.1
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Use 3D Effect', 'wpmozo-addons-lite-for-gutenberg'),
    checked: attributes.use3dEffect,
    onChange: newValue => setAttributes({
      use3dEffect: newValue
    })
  }), attributes.use3dEffect && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('3D Effect', 'wpmozo-addons-lite-for-gutenberg'),
    value: attributes.tilt3dValue,
    onChange: newValue => setAttributes({
      tilt3dValue: newValue
    }),
    min: 10,
    max: 100
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Use Disable X/Y axis', 'wpmozo-addons-lite-for-gutenberg'),
    checked: attributes.useDisableAxis,
    onChange: newValue => setAttributes({
      useDisableAxis: newValue
    })
  }), attributes.useDisableAxis && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.BaseControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Disable X/Y axis', 'wpmozo-addons-lite-for-gutenberg'),
    className: "wpmozo-button-tabs-wrap"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ButtonGroup, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Button, {
    className: "wpmozo-button-tabs-btn",
    isPressed: 'x' === attributes.tiltDisableAxis ? true : false,
    onClick: () => setAttributes({
      tiltDisableAxis: 'x'
    }),
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('X axis', 'wpmozo-addons-lite-for-gutenberg'),
    text: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('X axis', 'wpmozo-addons-lite-for-gutenberg')
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Button, {
    className: "wpmozo-button-tabs-btn",
    isPressed: 'y' === attributes.tiltDisableAxis ? true : false,
    onClick: () => setAttributes({
      tiltDisableAxis: 'y'
    }),
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Y axis', 'wpmozo-addons-lite-for-gutenberg'),
    text: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Y axis', 'wpmozo-addons-lite-for-gutenberg')
  })))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Overlay', 'wpmozo-addons-lite-for-gutenberg'),
    className: "wpmozo-typography-panel",
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Image Overlay', 'wpmozo-addons-lite-for-gutenberg'),
    checked: attributes.useOverlay,
    onChange: newValue => setAttributes({
      useOverlay: newValue
    })
  }), attributes.useOverlay && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoColorPicker, {
    ColorKey: "overlay",
    props: props,
    ColorTypes: [{
      key: 'Color',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Overlay Color', 'wpmozo-addons-lite-for-gutenberg')
    }]
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Icon', 'wpmozo-addons-lite-for-gutenberg'),
    className: "wpmozo-typography-panel",
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoColorPicker, {
    ColorKey: "icon",
    props: props,
    ColorTypes: [{
      key: 'Color',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Icon Color', 'wpmozo-addons-lite-for-gutenberg')
    }]
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoAlignment, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Icon Alignment', 'wpmozo-addons-lite-for-gutenberg'),
    onChange: newValue => setAttributes({
      iconAlign: newValue
    }),
    value: attributes.iconAlign
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Use Icon Font Size', 'wpmozo-addons-lite-for-gutenberg'),
    checked: attributes.useIconFontSize,
    onChange: newValue => setAttributes({
      useIconFontSize: newValue
    })
  }), attributes.useIconFontSize && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.HeightControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Icon Font Size', 'wpmozo-addons-lite-for-gutenberg'),
    value: attributes.iconFontSize,
    onChange: newValue => setAttributes({
      iconFontSize: newValue
    })
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Content Styling', 'wpmozo-addons-lite-for-gutenberg'),
    className: "wpmozo-typography-panel",
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoDimensions, {
    DimensionKey: "content",
    DimensionsTypes: {
      padding: true
    },
    props: props
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Content Alignment', 'wpmozo-addons-lite-for-gutenberg'),
    value: attributes.contentAlignment,
    options: contentAlignment,
    onChange: newValue => setAttributes({
      contentAlignment: newValue
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Content on Hover', 'wpmozo-addons-lite-for-gutenberg'),
    checked: attributes.contentOnHover,
    onChange: newValue => setAttributes({
      contentOnHover: newValue
    })
  }), attributes.contentOnHover && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Content Alignment', 'wpmozo-addons-lite-for-gutenberg'),
    value: attributes.contentAnimationDirection,
    options: contentAnimationDirection,
    onChange: newValue => setAttributes({
      contentAnimationDirection: newValue
    })
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Title', 'wpmozo-addons-lite-for-gutenberg'),
    className: "wpmozo-typography-panel",
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoColorPicker, {
    ColorKey: "title",
    props: props,
    ColorTypes: [{
      key: 'Color',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Title Color', 'wpmozo-addons-lite-for-gutenberg')
    }]
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.BaseControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Heading Lavel', 'wpmozo-addons-lite-for-gutenberg')
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ButtonGroup, null, headingLavels.map((item, key) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Button, {
    isPressed: item.value === attributes.titleLavel ? true : false,
    onClick: newValue => setAttributes({
      titleLavel: item.value
    })
  }, item.label)))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoAlignment, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Title Alignment', 'wpmozo-addons-lite-for-gutenberg'),
    onChange: newValue => setAttributes({
      titleAlign: newValue
    }),
    value: attributes.titleAlign
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoTypography, {
    TypographyKey: "title",
    props: props
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Description', 'wpmozo-addons-lite-for-gutenberg'),
    className: "wpmozo-typography-panel",
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoColorPicker, {
    ColorKey: "description",
    props: props,
    ColorTypes: [{
      key: 'Color',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Text Color', 'wpmozo-addons-lite-for-gutenberg')
    }]
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoAlignment, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Description Alignment', 'wpmozo-addons-lite-for-gutenberg'),
    onChange: newValue => setAttributes({
      descriptionAlign: newValue
    }),
    value: attributes.descriptionAlign
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoTypography, {
    TypographyKey: "description",
    props: props
  })), attributes.showButton && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Button Style', 'wpmozo-addons-lite-for-gutenberg'),
    className: "wpmozo-typography-panel",
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoColorPicker, {
    ColorKey: "button",
    props: props,
    ColorTypes: [{
      key: 'TextColor',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Text Color', 'wpmozo-addons-lite-for-gutenberg')
    }, {
      key: 'BackgroundColor',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Background Color', 'wpmozo-addons-lite-for-gutenberg')
    }]
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoTypography, {
    TypographyKey: "button",
    props: props
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoBorder, {
    BorderKey: "button",
    props: props
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoDimensions, {
    DimensionKey: "button",
    props: props,
    DimensionsTypes: {
      padding: true,
      margin: true
    }
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Inspector);

/***/ }),

/***/ "./src/blocks/tilt-image/save.js":
/*!***************************************!*\
  !*** ./src/blocks/tilt-image/save.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);


const WPMozoEditorObj = wpmozo_adfgu_editor_object;
const Save = ({
  attributes
}) => {
  const coreFunc = window.wpmozo,
    ID = attributes.ID;
  let image = attributes.image ? attributes.image : WPMozoEditorObj.placeholderImg,
    contentAlignment = attributes.contentAlignment,
    linkTarget = 'external' === attributes.buttonLinkTarget ? '_blank' : '_self',
    animationDirection = attributes.contentAnimationDirection,
    animationClass = attributes.contentOnHover && 'off' !== animationDirection ? ` wpmozo-animation wpmozo-animation-${attributes.contentAnimationDirection}` : '',
    axis = attributes.useDisableAxis ? attributes.tiltDisableAxis : null,
    glare = attributes.useGlare ? attributes.tiltMaxGlare : false;
  const icon = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "wpmozo-adfgu-tilt-icon"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
    className: `${attributes.icon}`
  }));
  const button = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wpmozo-adfgu-tilt-image-button-wrapper"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: attributes.buttonUrl,
    className: "wpmozo-adfgu-tilt-image-button wp-block-button__link wp-element-button",
    target: linkTarget
  }, attributes.buttonText));
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ..._wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save({
      className: 'wpmozo-adfgu-tilt-image'
    }),
    id: `block-${ID}`,
    "data-max-tilt": attributes.tiltMax,
    "data-perspective": attributes.tiltPerspective,
    "data-scale": attributes.tiltScale,
    "data-speed": attributes.tiltSpeed,
    "data-disable-axis": axis,
    "data-glare": attributes.useGlare,
    "data-max-alare": attributes.tiltMaxGlare,
    "data-disable-mobile": attributes.tiltMobile
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `wpmozo-adfgu-tilt-image-wrapper wpmozo-editor wpmozo-adfgu-tilt-align-${contentAlignment}`
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wpmozo-adfgu-tilt-image-inner-wrapper"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    className: "wpmozo-adfgu-tilt-image-image",
    src: image
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `wpmozo-adfgu-tilt-content-wrapper${animationClass}`
  }, attributes.useIcon && icon, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
    className: "wpmozo-adfgu-tilt-title",
    tagName: attributes.titleLavel,
    value: attributes.title
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
    className: "wpmozo-adfgu-tilt-desc",
    tagName: "div",
    value: attributes.content
  }), attributes.showButton && !coreFunc.wpmozo_is_empty(attributes.buttonText) && button))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Save);

/***/ }),

/***/ "./src/blocks/tilt-image/style.js":
/*!****************************************!*\
  !*** ./src/blocks/tilt-image/style.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const Style = ({
  attributes,
  ID,
  clientId
}) => {
  const wpmozoCoreFun = window.wpmozo,
    parent = '#block-' + clientId,
    toConvertStyles = ['title', 'description', 'content', 'button'];
  let css = '',
    convertedStyle = wpmozoCoreFun.convetInlineStyleStr(toConvertStyles, attributes);
  let allInline = [{
    selector: '.wpmozo-adfgu-tilt-image-inner-wrapper:before',
    style: {
      'background-color': attributes.overlayColor
    }
  }, {
    selector: '.wpmozo-adfgu-tilt-icon',
    style: {
      'text-align': attributes.iconAlign
    }
  }, {
    selector: '.wpmozo-adfgu-tilt-icon i',
    style: {
      'color': attributes.iconColor,
      'font-size': attributes.iconFontSize
    }
  }, {
    selector: '.wpmozo-adfgu-tilt-content-wrapper',
    additional: convertedStyle.content
  }, {
    selector: '.wpmozo-adfgu-tilt-title',
    style: {
      'color': attributes.titleColor,
      'text-align': attributes.titleAlign
    },
    additional: convertedStyle.title
  }, {
    selector: '.wpmozo-adfgu-tilt-desc',
    style: {
      'color': attributes.descriptionColor,
      'text-align': attributes.descriptionAlign
    },
    additional: convertedStyle.description
  }, {
    selector: '.wpmozo-adfgu-tilt-image-button',
    style: {
      'color': attributes.buttonTextColor,
      'background': attributes.buttonBackgroundColor
    },
    additional: convertedStyle.button
  }];
  if (attributes.use3dEffect) {
    allInline.push({
      selector: '.wpmozo-adfgu-tilt-image-wrapper',
      style: {
        'transform-style': 'preserve-3d'
      }
    });
    allInline.push({
      selector: '.wpmozo-adfgu-tilt-image-inner-wrapper',
      style: {
        'transform-style': 'preserve-3d'
      }
    });
    allInline.push({
      selector: '.wpmozo-adfgu-tilt-content-wrapper',
      style: {
        'transform': `translateZ(${attributes.tilt3dValue}px)`
      }
    });
  }
  if (!attributes.tiltMobile) {
    allInline.push({
      selector: '.wpmozo-adfgu-tilt-image .wpmozo-adfgu-tilt-image-inner-wrapper',
      style: {
        'transform': 'unset !important'
      }
    });
  }
  let generateStyle = wpmozoCoreFun.wpmozo_generate_style(allInline);
  if (!wpmozoCoreFun.wpmozo_is_empty(generateStyle)) {
    css += `
	    	${parent} {
	    		${generateStyle}
	    	}
	    `;
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, !wpmozoCoreFun.wpmozo_is_empty(css) && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("style", {
    className: "wpmozo-dynamic-style",
    "data-id": ID,
    "data-client-id": clientId
  }, css));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Style);

/***/ }),

/***/ "./src/components/index.js":
/*!*********************************!*\
  !*** ./src/components/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WpmozoAlignment: () => (/* reexport safe */ _wpmozo_alignment_wpmozo_alignment__WEBPACK_IMPORTED_MODULE_7__["default"]),
/* harmony export */   WpmozoBorder: () => (/* reexport safe */ _wpmozo_border_wpmozo_border__WEBPACK_IMPORTED_MODULE_4__["default"]),
/* harmony export */   WpmozoColorCombo: () => (/* reexport safe */ _wpmozo_colorcombo_wpmozo_colorcombo__WEBPACK_IMPORTED_MODULE_8__["default"]),
/* harmony export */   WpmozoColorPicker: () => (/* reexport safe */ _wpmozo_colorpicker_wpmozo_colorpicker__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   WpmozoDimensions: () => (/* reexport safe */ _wpmozo_dimensions_wpmozo_dimensions__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   WpmozoIconpicker: () => (/* reexport safe */ _wpmozo_iconpicker_wpmozo_iconpicker__WEBPACK_IMPORTED_MODULE_6__["default"]),
/* harmony export */   WpmozoMediaUploader: () => (/* reexport safe */ _wpmozo_media_uploader_wpmozo_media_uploader__WEBPACK_IMPORTED_MODULE_5__["default"]),
/* harmony export */   WpmozoRangeSize: () => (/* reexport safe */ _wpmozo_range_size_wpmozo_range_size__WEBPACK_IMPORTED_MODULE_9__["default"]),
/* harmony export */   WpmozoSize: () => (/* reexport safe */ _wpmozo_size_wpmozo_size__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   WpmozoTypography: () => (/* reexport safe */ _wpmozo_typography_wpmozo_typography__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _wpmozo_typography_wpmozo_typography__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wpmozo-typography/wpmozo-typography */ "./src/components/wpmozo-typography/wpmozo-typography.js");
/* harmony import */ var _wpmozo_colorpicker_wpmozo_colorpicker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wpmozo-colorpicker/wpmozo-colorpicker */ "./src/components/wpmozo-colorpicker/wpmozo-colorpicker.js");
/* harmony import */ var _wpmozo_dimensions_wpmozo_dimensions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./wpmozo-dimensions/wpmozo-dimensions */ "./src/components/wpmozo-dimensions/wpmozo-dimensions.js");
/* harmony import */ var _wpmozo_size_wpmozo_size__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./wpmozo-size/wpmozo-size */ "./src/components/wpmozo-size/wpmozo-size.js");
/* harmony import */ var _wpmozo_border_wpmozo_border__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./wpmozo-border/wpmozo-border */ "./src/components/wpmozo-border/wpmozo-border.js");
/* harmony import */ var _wpmozo_media_uploader_wpmozo_media_uploader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./wpmozo-media-uploader/wpmozo-media-uploader */ "./src/components/wpmozo-media-uploader/wpmozo-media-uploader.js");
/* harmony import */ var _wpmozo_iconpicker_wpmozo_iconpicker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./wpmozo-iconpicker/wpmozo-iconpicker */ "./src/components/wpmozo-iconpicker/wpmozo-iconpicker.js");
/* harmony import */ var _wpmozo_alignment_wpmozo_alignment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./wpmozo-alignment/wpmozo-alignment */ "./src/components/wpmozo-alignment/wpmozo-alignment.js");
/* harmony import */ var _wpmozo_colorcombo_wpmozo_colorcombo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./wpmozo-colorcombo/wpmozo-colorcombo */ "./src/components/wpmozo-colorcombo/wpmozo-colorcombo.js");
/* harmony import */ var _wpmozo_range_size_wpmozo_range_size__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./wpmozo-range-size/wpmozo-range-size */ "./src/components/wpmozo-range-size/wpmozo-range-size.js");












/***/ }),

/***/ "./src/components/wpmozo-alignment/wpmozo-alignment.js":
/*!*************************************************************!*\
  !*** ./src/components/wpmozo-alignment/wpmozo-alignment.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const el = window.wp.element.createElement;
const __ = wp.i18n.__;
const {
  Icon,
  __experimentalToggleGroupControlOptionIcon,
  __experimentalToggleGroupControl,
  SVG,
  Path
} = window.wp.components;
const WpmozoAlignment = function (args) {
  const {
    alignmentKey
  } = args;
  let elAlignment = '';
  if (!args.hasOwnProperty('type') || args.hasOwnProperty('type') && 'horizontal' === args.type) {
    let label = args.hasOwnProperty('label') ? args.label : __('Alignment', 'wpmozo-addons-lite-for-gutenberg'),
      className = args.hasOwnProperty('className') ? args.className : 'wpmozo-alignment-compo horizontal',
      aignments = {
        left: el(__experimentalToggleGroupControlOptionIcon, {
          key: 'wpmozo-alignment-left-' + alignmentKey,
          value: "left",
          icon: el(Icon, {
            icon: 'editor-alignleft'
          }),
          label: __('Left', 'wpmozo-addons-lite-for-gutenberg')
        }),
        center: el(__experimentalToggleGroupControlOptionIcon, {
          key: 'wpmozo-alignment-center-' + alignmentKey,
          value: "center",
          icon: el(Icon, {
            icon: 'editor-aligncenter'
          }),
          label: __('Center', 'wpmozo-addons-lite-for-gutenberg')
        }),
        right: el(__experimentalToggleGroupControlOptionIcon, {
          key: 'wpmozo-alignment-right-' + alignmentKey,
          value: "right",
          icon: el(Icon, {
            icon: 'editor-alignright'
          }),
          label: __('Right', 'wpmozo-addons-lite-for-gutenberg')
        })
      },
      typeSetAlign = [aignments.left, aignments.center, aignments.right];
    if (args.hasOwnProperty('alignments')) {
      typeSetAlign = [];
      args.alignments.map(alignment => typeSetAlign.push(aignments[alignment]));
    }
    elAlignment = el(__experimentalToggleGroupControl, {
      key: 'wpmozo-alignment-horizontal-' + alignmentKey,
      className: className,
      onChange: args.onChange,
      label: label,
      isDeselectable: true,
      isBlock: true,
      value: args.value,
      children: typeSetAlign
    });
  } else if (args.hasOwnProperty('type') && 'vertical' === args.type) {
    let label = args.hasOwnProperty('label') ? args.label : __('Alignment', 'wpmozo-addons-lite-for-gutenberg'),
      className = args.hasOwnProperty('className') ? args.className : 'wpmozo-alignment-compo vertical',
      aignments = {
        top: el(__experimentalToggleGroupControlOptionIcon, {
          key: 'wpmozo-alignment-top-' + alignmentKey,
          value: "top",
          icon: el(SVG, {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            children: el(Path, {
              d: "M9 20h6V9H9v11zM4 4v1.5h16V4H4z"
            })
          }),
          label: __('Top', 'wpmozo-addons-lite-for-gutenberg')
        }),
        center: el(__experimentalToggleGroupControlOptionIcon, {
          key: 'wpmozo-alignment-center-' + alignmentKey,
          value: "center",
          icon: el(SVG, {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            children: el(Path, {
              d: "M20 11h-5V4H9v7H4v1.5h5V20h6v-7.5h5z"
            })
          }),
          label: __('Center', 'wpmozo-addons-lite-for-gutenberg')
        }),
        bottom: el(__experimentalToggleGroupControlOptionIcon, {
          key: 'wpmozo-alignment-bottom-' + alignmentKey,
          value: "bottom",
          icon: el(SVG, {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            children: el(Path, {
              d: "M15 4H9v11h6V4zM4 18.5V20h16v-1.5H4z"
            })
          }),
          label: __('bottom', 'wpmozo-addons-lite-for-gutenberg')
        })
      },
      typeSetAlign = [aignments.top, aignments.center, aignments.bottom];
    if (args.hasOwnProperty('alignments')) {
      typeSetAlign = [];
      args.alignments.map(alignment => typeSetAlign.push(aignments[alignment]));
    }
    elAlignment = el(__experimentalToggleGroupControl, {
      key: 'wpmozo-alignment-vertical-' + alignmentKey,
      className: className,
      onChange: args.onChange,
      label: label,
      isDeselectable: true,
      isBlock: true,
      value: args.value,
      children: typeSetAlign
    });
  }
  return elAlignment;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WpmozoAlignment);

/***/ }),

/***/ "./src/components/wpmozo-border/wpmozo-border.js":
/*!*******************************************************!*\
  !*** ./src/components/wpmozo-border/wpmozo-border.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const el = window.wp.element.createElement;
const __ = wp.i18n.__;
const {
  __experimentalBorderRadiusControl
} = window.wp.blockEditor;
const {
  __experimentalToolsPanel,
  __experimentalToolsPanelItem,
  __experimentalBorderBoxControl
} = window.wp.components;
const WpmozoBorder = function (args) {
  const {
      BorderKey,
      props
    } = args,
    preAttributes = props.preAttributes,
    label = args.hasOwnProperty('label') ? args.label : __('Border', 'wpmozo-addons-lite-for-gutenberg');
  let BorderTypes = args.hasOwnProperty('BorderTypes') ? args.BorderTypes : null;
  const borderSetValue = function (styleType, value = null) {
    value = setValue(styleType, value);
    props.setAttributes({
      [BorderKey + styleType]: value
    });
    if (args.hasOwnProperty('afterOnChange')) {
      args.afterOnChange(props);
    }
  };
  const setValue = function (styleType, value) {
    if (null === value && 'undefined' !== typeof preAttributes[BorderKey + styleType] && preAttributes[BorderKey + styleType].hasOwnProperty('default')) {
      value = preAttributes[BorderKey + styleType].default;
    }
    value = null !== value ? value : '';
    return value;
  };
  const onChange = args.hasOwnProperty('onChange') ? args.onChange : borderSetValue;
  return [el(__experimentalToolsPanel, {
    key: 'wpmozo-border-panel-' + BorderKey,
    label: label,
    resetAll: () => {
      if (null === BorderTypes) {
        BorderTypes = {
          'border': '',
          'borderRadius': ''
        };
      }
      for (const type in BorderTypes) {
        let value = setValue(type, null);
        props.setAttributes({
          [BorderKey + type]: value
        });
      }
      if (args.hasOwnProperty('afterOnChange')) {
        args.afterOnChange(props);
      }
    }
  }, (null == BorderTypes || BorderTypes.hasOwnProperty('border')) && el(__experimentalToolsPanelItem, {
    label: __('Border', 'wpmozo-addons-lite-for-gutenberg'),
    hasValue: () => true,
    isShownByDefault: true,
    onDeselect: () => borderSetValue('border')
  }, el(__experimentalBorderBoxControl, {
    label: 'Border',
    value: props.attributes[BorderKey + 'border'],
    onChange: NewBorder => onChange('border', NewBorder)
  })), (null == BorderTypes || BorderTypes.hasOwnProperty('radius')) && el(__experimentalToolsPanelItem, {
    label: __('Radius', 'wpmozo-addons-lite-for-gutenberg'),
    hasValue: () => true,
    isShownByDefault: true,
    onDeselect: () => borderSetValue('borderRadius')
  }, el(__experimentalBorderRadiusControl, {
    label: 'Radius',
    values: props.attributes[BorderKey + 'borderRadius'],
    onChange: NewRadius => onChange('borderRadius', NewRadius)
  })))];
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WpmozoBorder);

/***/ }),

/***/ "./src/components/wpmozo-colorcombo/wpmozo-colorcombo.js":
/*!***************************************************************!*\
  !*** ./src/components/wpmozo-colorcombo/wpmozo-colorcombo.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wpmozo_colorpicker_wpmozo_colorpicker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../wpmozo-colorpicker/wpmozo-colorpicker */ "./src/components/wpmozo-colorpicker/wpmozo-colorpicker.js");

const el = window.wp.element.createElement;
const {
  useState
} = window.wp.element;
const __ = wp.i18n.__;
const {
  BaseControl,
  ButtonGroup,
  Button
} = window.wp.components;

const WpmozoColorCombo = function (args) {
  const [colorType, setColorType] = useState('normal'),
    label = args.hasOwnProperty('label') ? args.label : '';
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(BaseControl, {
    label: label,
    className: "wpmozo-color-combo-wrap"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ButtonGroup, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Button, {
    className: "wpmozo-color-combo-type",
    isPressed: 'normal' === colorType ? true : false,
    onClick: () => setColorType('normal')
  }, __('Normal', 'wpmozo-addons-lite-for-gutenberg')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Button, {
    className: "wpmozo-color-combo-type",
    isPressed: 'hover' === colorType ? true : false,
    onClick: () => setColorType('hover')
  }, __('Hover', 'wpmozo-addons-lite-for-gutenberg'))), 'normal' === colorType && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wpmozo_colorpicker_wpmozo_colorpicker__WEBPACK_IMPORTED_MODULE_1__["default"], {
    ...args.normal
  }), 'hover' === colorType && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wpmozo_colorpicker_wpmozo_colorpicker__WEBPACK_IMPORTED_MODULE_1__["default"], {
    ...args.hover
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WpmozoColorCombo);

/***/ }),

/***/ "./src/components/wpmozo-colorpicker/wpmozo-colorpicker.js":
/*!*****************************************************************!*\
  !*** ./src/components/wpmozo-colorpicker/wpmozo-colorpicker.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const el = window.wp.element.createElement;
const __ = wp.i18n.__;
const {
  __experimentalUseMultipleOriginColorsAndGradients
} = window.wp.blockEditor;
const {
  __experimentalToolsPanel,
  __experimentalToolsPanelItem,
  Dropdown,
  Button,
  ColorIndicator,
  ColorPalette,
  TabPanel,
  GradientPicker
} = window.wp.components;
const WpmozoColorPicker = function (args) {
  const {
      ColorKey,
      ColorTypes,
      props
    } = args,
    preAttributes = props.preAttributes,
    withToolPanel = args.hasOwnProperty('withToolPanel') ? args.withToolPanel : true,
    AllColors = __experimentalUseMultipleOriginColorsAndGradients(),
    defaultGradientColor = 'linear-gradient(135deg,rgba(6,147,227,1) 0%,rgb(155,81,224) 100%)',
    label = args.hasOwnProperty('label') ? args.label : __('Color', 'wpmozo-addons-lite-for-gutenberg');
  const colorSetValue = function (styleType, value = null) {
    value = setValue(styleType, value);
    props.setAttributes({
      [ColorKey + styleType]: value
    });
    if (args.hasOwnProperty('afterOnChange')) {
      args.afterOnChange(props);
    }
  };
  const setValue = function (styleType, value) {
    if (null === value && 'undefined' !== typeof preAttributes[ColorKey + styleType] && preAttributes[ColorKey + styleType].hasOwnProperty('default')) {
      value = preAttributes[ColorKey + styleType].default;
    }
    value = null !== value ? value : '';
    return value;
  };
  const onChange = args.hasOwnProperty('onChange') ? args.onChange : colorSetValue;
  if (withToolPanel) {
    const colorDropdown = function (colorType, label, colorTypeObj) {
      let _color = props.attributes[ColorKey + colorType],
        fullKey = ColorKey + '-' + colorType,
        colorPlateKey = 'wpmozo-color-palette-' + fullKey;
      const withGradient = colorTypeObj.hasOwnProperty('withGradient') ? colorTypeObj.withGradient : false;
      const onlyGradient = colorTypeObj.hasOwnProperty('onlyGradient') ? colorTypeObj.onlyGradient : false;
      if ('' === _color && args.hasOwnProperty('default')) {
        _color = args.default[colorType];
      }
      return el(Dropdown, {
        key: 'wpmozo-color-dropdown-container-' + fullKey,
        className: "wpmozo-color-dropdown-container",
        contentClassName: "wpmozo-color-popover-content",
        popoverProps: {
          placement: 'left-start',
          offset: 36,
          shift: true
        },
        renderToggle: ({
          isOpen,
          onToggle
        }) => el(Button, {
          key: 'wpmozo-color-dropdown-button-' + fullKey,
          onClick: onToggle,
          "aria-expanded": isOpen,
          children: [el(ColorIndicator, {
            key: 'wpmozo-color-dropdown-indicator-' + fullKey,
            colorValue: _color
          }), label]
        }),
        renderContent: () => {
          if (!withGradient && !onlyGradient) {
            return el(ColorPalette, {
              key: colorPlateKey,
              colors: AllColors.colors,
              value: _color,
              onChange: NewColor => onChange(colorType, NewColor),
              enableAlpha: true
            });
          } else if (withGradient) {
            return el(TabPanel, {
              key: colorPlateKey,
              className: "wpmozo-color-tabs",
              tabs: [{
                name: "solid",
                title: __('Solid', 'wpmozo-addons-lite-for-gutenberg'),
                className: "wpmozo-color-tab-solid"
              }, {
                name: "gradient",
                title: __('Gradient', 'wpmozo-addons-lite-for-gutenberg'),
                className: "wpmozo-color-tab-gradient"
              }],
              children: currentTab => {
                let tabContent;
                let _colorSolid = props.attributes[ColorKey + colorType + 'Solid'];
                if ('' === _colorSolid && args.hasOwnProperty('default')) {
                  _colorSolid = args.default[colorType + 'Solid'];
                }
                let _colorGradient = props.attributes[ColorKey + colorType + 'Gradient'];
                if ('' === _colorGradient && args.hasOwnProperty('default')) {
                  _colorGradient = args.default[colorType + 'Gradient'];
                }
                if ('solid' === currentTab.name) {
                  tabContent = el(ColorPalette, {
                    colors: AllColors.colors,
                    value: _colorSolid,
                    onChange: NewColor => {
                      onChange(colorType, NewColor);
                      onChange(colorType + 'Solid', NewColor);
                      onChange(colorType + 'Gradient', defaultGradientColor);
                    },
                    enableAlpha: true
                  });
                } else {
                  tabContent = el(GradientPicker, {
                    gradients: AllColors.gradients,
                    value: _colorGradient,
                    onChange: NewColor => {
                      onChange(colorType + 'Solid', '');
                      if ('undefined' === typeof NewColor) {
                        onChange(colorType + 'Gradient', defaultGradientColor);
                        onChange(colorType, null);
                      } else {
                        onChange(colorType + 'Gradient', NewColor);
                        onChange(colorType, NewColor);
                      }
                    }
                  });
                }
                return tabContent;
              }
            });
          } else {
            let onlyGradientValue = _color;
            if ('' === onlyGradientValue) {
              onlyGradientValue = defaultGradientColor;
            }
            return el(GradientPicker, {
              key: colorPlateKey,
              gradients: AllColors.gradients,
              value: onlyGradientValue,
              onChange: NewColor => {
                if ('undefined' === typeof NewColor) {
                  onChange(colorType, null);
                } else {
                  onChange(colorType, NewColor);
                }
              }
            });
          }
        }
      });
    };
    const Panels = [];
    for (var i = 0; i < ColorTypes.length; i++) {
      let ct = ColorTypes[i],
        fullKey = ColorKey + '-' + ct.key;
      let Panel = el(__experimentalToolsPanelItem, {
        key: 'wpmozo-color-tools-panel-item-' + fullKey,
        label: ct.label,
        hasValue: () => true,
        isShownByDefault: true,
        onDeselect: () => colorSetValue(ct.key)
      }, colorDropdown(ct.key, ct.label, ct));
      Panels.push(Panel);
    }
    return [el(__experimentalToolsPanel, {
      key: 'wpmozo-color-tools-panel-' + ColorKey,
      label: label,
      className: 'wpmozo-color-tools-panel',
      resetAll: () => {
        ColorTypes.map(type => {
          let value = setValue(type.key, null);
          props.setAttributes({
            [ColorKey + type.key]: value
          });
        });
        if (args.hasOwnProperty('afterOnChange')) {
          args.afterOnChange(props);
        }
      }
    }, Panels)];
  } else {
    const Panels = [];
    for (var i = 0; i < ColorTypes.length; i++) {
      let ct = ColorTypes[i],
        colorType = ct.key,
        label = ct.label,
        fullKey = ColorKey + '-' + colorType,
        _color = props.attributes[ColorKey + colorType];
      if ('' === _color && args.hasOwnProperty('default')) {
        _color = args.default[colorType];
      }
      let Panel = el(ColorPalette, {
        key: 'wpmozo-color-palette-' + fullKey,
        colors: AllColors.colors,
        value: _color,
        onChange: NewColor => onChange(colorType, NewColor)
      });
      Panels.push(Panel);
    }
    return [Panels];
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WpmozoColorPicker);

/***/ }),

/***/ "./src/components/wpmozo-dimensions/wpmozo-dimensions.js":
/*!***************************************************************!*\
  !*** ./src/components/wpmozo-dimensions/wpmozo-dimensions.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const el = window.wp.element.createElement;
const __ = wp.i18n.__;
const {
  __experimentalSpacingSizesControl
} = window.wp.blockEditor;
const {
  __experimentalToolsPanel,
  __experimentalToolsPanelItem
} = window.wp.components;
const WpmozoDimensions = function (args) {
  const {
      DimensionKey,
      props
    } = args,
    preAttributes = props.preAttributes,
    label = args.hasOwnProperty('label') ? args.label : __('Dimensions', 'wpmozo-addons-lite-for-gutenberg');
  let DimensionsTypes = args.hasOwnProperty('DimensionsTypes') ? args.DimensionsTypes : null;
  const dimensionsSetValue = function (styleType, value = null) {
    value = setValue(styleType, value);
    props.setAttributes({
      [DimensionKey + styleType]: value
    });
    if (args.hasOwnProperty('afterOnChange')) {
      args.afterOnChange(props);
    }
  };
  const setValue = function (styleType, value) {
    if (null === value && 'undefined' !== typeof preAttributes[DimensionKey + styleType] && preAttributes[DimensionKey + styleType].hasOwnProperty('default')) {
      value = preAttributes[DimensionKey + styleType].default;
    }
    value = null !== value ? value : '';
    return value;
  };
  const onChange = args.hasOwnProperty('onChange') ? args.onChange : dimensionsSetValue;
  return [el(__experimentalToolsPanel, {
    key: 'wpmozo-dimensions-panel-' + DimensionKey,
    label: label,
    resetAll: () => {
      if (null === DimensionsTypes) {
        DimensionsTypes = {
          'padding': '',
          'margin': '',
          'position': ''
        };
      }
      for (const type in DimensionsTypes) {
        let value = setValue(type, null);
        props.setAttributes({
          [DimensionKey + type]: value
        });
      }
      if (args.hasOwnProperty('afterOnChange')) {
        args.afterOnChange(props);
      }
    }
  }, (null == DimensionsTypes || DimensionsTypes.hasOwnProperty('padding')) && el(__experimentalToolsPanelItem, {
    label: __('Padding', 'wpmozo-addons-lite-for-gutenberg'),
    hasValue: () => true,
    isShownByDefault: true,
    className: 'tools-panel-item-spacing',
    onDeselect: () => dimensionsSetValue('padding')
  }, el(__experimentalSpacingSizesControl, {
    label: 'Padding',
    values: props.attributes[DimensionKey + 'padding'],
    onChange: NewPadding => onChange('padding', NewPadding)
  })), (null == DimensionsTypes || DimensionsTypes.hasOwnProperty('margin')) && el(__experimentalToolsPanelItem, {
    label: __('Margin', 'wpmozo-addons-lite-for-gutenberg'),
    hasValue: () => true,
    isShownByDefault: true,
    className: 'tools-panel-item-spacing',
    onDeselect: () => dimensionsSetValue('margin')
  }, el(__experimentalSpacingSizesControl, {
    label: 'Margin',
    values: props.attributes[DimensionKey + 'margin'],
    onChange: NewMargin => onChange('margin', NewMargin)
  })), (null == DimensionsTypes || DimensionsTypes.hasOwnProperty('position')) && el(__experimentalToolsPanelItem, {
    label: __('Position', 'wpmozo-addons-lite-for-gutenberg'),
    hasValue: () => true,
    isShownByDefault: true,
    className: 'tools-panel-item-spacing',
    onDeselect: () => dimensionsSetValue('position')
  }, el(__experimentalSpacingSizesControl, {
    label: 'Position',
    values: props.attributes[DimensionKey + 'position'],
    onChange: NewPosition => onChange('position', NewPosition)
  })))];
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WpmozoDimensions);

/***/ }),

/***/ "./src/components/wpmozo-iconpicker/wpmozo-iconpicker.js":
/*!***************************************************************!*\
  !*** ./src/components/wpmozo-iconpicker/wpmozo-iconpicker.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const {
  compose
} = wp.compose;
const {
  ComboboxControl
} = wp.components;
const el = wp.element.createElement;
const options = wpmozo_adfgu_editor_object.icons;
const WpmozoIconpicker = function (args) {
  const iconSetValue = function (value = null) {
    props.setAttributes({
      [args.iconPickerKey]: value
    });
    if (args.hasOwnProperty('afterOnChange')) {
      args.afterOnChange(props);
    }
  };
  const {
      iconPickerKey,
      props,
      label
    } = args,
    attributes = props.attributes,
    value = '' !== args.value ? args.value : '',
    icon = 'undefined' !== typeof attributes[args.iconPickerKey] && '' !== attributes[args.iconPickerKey] ? attributes[args.iconPickerKey] : 'fas fa-ban',
    onChange = args.hasOwnProperty('onChange') ? args.onChange : iconSetValue;
  return [el('div', {
    key: 'wpmozo-icon-picker-' + iconPickerKey,
    className: 'wpmozo-icon-picker'
  }, el(ComboboxControl, {
    key: 'wpmozo-icon-combobox-' + iconPickerKey,
    label: label,
    value: value,
    allowReset: false,
    onChange: onChange,
    options: options,
    __experimentalRenderItem: function (option) {
      let iconClass = option.item.value;
      return el("span", {
        key: 'wpmozo-icon-span-' + iconPickerKey,
        children: [el("i", {
          key: 'wpmozo-icon-el-' + iconPickerKey,
          className: iconClass
        }), " ", option.item.label]
      });
    }
  }), el('div', {
    key: 'wpmozo-icon-wrap-' + iconPickerKey,
    className: 'wpmozo-icon-wraper'
  }, el('i', {
    className: icon
  })))];
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WpmozoIconpicker);

/***/ }),

/***/ "./src/components/wpmozo-media-uploader/wpmozo-media-uploader.js":
/*!***********************************************************************!*\
  !*** ./src/components/wpmozo-media-uploader/wpmozo-media-uploader.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);




const el = window.wp.element.createElement;
const WpmozoMediaUploader = function (args) {
  const editImage = args.hasOwnProperty('edit') ? args.edit : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Edit Image", "wpmozo-addons-lite-for-gutenberg"),
    selectImage = args.hasOwnProperty('select') ? args.select : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Select Image", "wpmozo-addons-lite-for-gutenberg"),
    allowedTypes = args.hasOwnProperty('allowedTypes') ? args.allowedTypes : ["image"],
    accept = args.hasOwnProperty('accept') ? args.accept : "image/*",
    props = args.props,
    attrKye = args.attrKye,
    imageSrc = args.hasOwnProperty('imageSrc') ? args.imageSrc : props.attributes[attrKye];
  const onSelect = function (media) {
    props.setAttributes({
      [attrKye]: media.url
    });
  };
  return [el(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUploadCheck, {
    key: 'wpmozo-media-uploader-check'
  }, el(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUpload, {
    key: 'wpmozo-media-uploader-el',
    onSelect: media => {
      if (args.hasOwnProperty('onSelect')) {
        args.onSelect(media);
      } else {
        onSelect(media);
      }
    },
    allowedTypes: allowedTypes,
    accept: accept,
    value: imageSrc,
    render: ({
      open
    }) => {
      return el(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
        key: 'wpmozo-media-uploader-fragment'
      }, el('div', {
        key: 'wpmozo-media-uploader-wrap',
        className: "components-base-control wpmozo-media-uploader-wrap",
        children: [imageSrc && el('img', {
          key: 'wpmozo-media-uploader-img',
          className: "wpmozo-media-uploader",
          src: imageSrc
        }), el(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Button, {
          key: 'wpmozo-media-uploader-btn',
          isPrimary: true,
          onClick: event => {
            event.stopPropagation();
            open();
          },
          children: imageSrc ? editImage : selectImage
        })]
      }));
    }
  }))];
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WpmozoMediaUploader);

/***/ }),

/***/ "./src/components/wpmozo-range-size/wpmozo-range-size.js":
/*!***************************************************************!*\
  !*** ./src/components/wpmozo-range-size/wpmozo-range-size.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const el = window.wp.element.createElement;
const __ = wp.i18n.__;
const {
  useState
} = window.wp.element;
const {
  __experimentalToolsPanel,
  __experimentalToolsPanelItem,
  __experimentalUnitControl,
  RangeControl,
  BaseControl,
  Button
} = window.wp.components;
const wpmozoCoreFun = window.wpmozo;
const WpmozoRangeSize = function (args) {
  const {
      rangeSizeKey,
      props
    } = args,
    preAttributes = props.preAttributes;
  let element = '';
  const sizeSetValue = function (valueType = 'value', value = null) {
    value = setValue(valueType, value);
    if ('value' === valueType) {
      props.setAttributes({
        [rangeSizeKey]: value
      });
    } else {
      props.setAttributes({
        [rangeSizeKey + 'Unit']: value
      });
    }
    if (args.hasOwnProperty('afterOnChange')) {
      args.afterOnChange(props);
    }
  };
  const setValue = function (valueType = 'value', value) {
    if ('value' === valueType) {
      if (null === value && 'undefined' !== typeof preAttributes[rangeSizeKey] && preAttributes[rangeSizeKey].hasOwnProperty('default')) {
        value = preAttributes[rangeSizeKey].default;
      }
    } else {
      if (null === value && 'undefined' !== typeof preAttributes[rangeSizeKey + 'Unit'] && preAttributes[rangeSizeKey + 'Unit'].hasOwnProperty('default')) {
        value = preAttributes[rangeSizeKey + 'Unit'].default;
      }
    }
    value = null !== value ? value : '';
    return value;
  };
  let unit = setValue('unit', props.attributes[rangeSizeKey + 'Unit']),
    getRange = setValue('value', props.attributes[rangeSizeKey]),
    defaultRange = !wpmozoCoreFun.wpmozo_is_empty(unit) && !wpmozoCoreFun.wpmozo_is_empty(getRange) ? parseFloat(getRange.replace(unit, '')) : 0;
  const [state, setState] = useState({
    range: defaultRange
  });
  const updateColSpacingRang = val => {
    let unit = jQuery('.wpmozo-range-size-' + rangeSizeKey + '-size .components-unit-control__select').val(),
      _range = parseFloat(val.replace(unit, ''));
    setState({
      ...state,
      range: _range
    });
  };
  const onChange = args.hasOwnProperty('onChange') ? args.onChange : sizeSetValue;
  if (args.hasOwnProperty('withToolsPanel')) {
    element = [el(__experimentalToolsPanel, {
      label: args.label,
      resetAll: () => {
        let sizeRange = setValue('value', null);
        updateColSpacingRang(sizeRange);
        sizeSetValue('value', null);
        sizeSetValue('unit', 'px');
      },
      key: 'wpmozo-range-size' + rangeSizeKey + '-panel',
      className: 'wpmozo-range-size' + rangeSizeKey + '-panel'
    }, el(__experimentalToolsPanelItem, {
      label: args.label,
      hasValue: () => true,
      isShownByDefault: true,
      onDeselect: () => {
        let sizeRange = setValue('value', null);
        updateColSpacingRang(sizeRange);
        sizeSetValue('value', null);
        sizeSetValue('unit', 'px');
      },
      key: 'wpmozo-range-size-' + rangeSizeKey + '-panel-item',
      className: 'wpmozo-range-size-' + rangeSizeKey + '-panel-item'
    }, el(RangeControl, {
      key: 'wpmozo-range-size-' + rangeSizeKey + '-range',
      value: state.range,
      allowReset: false,
      withInputField: false,
      onChange: function (NewSpacing) {
        let unit = jQuery('.wpmozo-range-size-' + rangeSizeKey + '-size .components-unit-control__select').val(),
          spacing = NewSpacing + unit;
        sizeSetValue('value', spacing);
        updateColSpacingRang(spacing);
      }
    }), el(__experimentalUnitControl, {
      key: 'wpmozo-range-size-' + rangeSizeKey + '-size',
      value: props.attributes[rangeSizeKey],
      className: 'wpmozo-range-size-' + rangeSizeKey + '-size',
      onChange: NewSpacing => {
        let unit = jQuery('.wpmozo-range-size-' + rangeSizeKey + '-size .components-unit-control__select').val();
        sizeSetValue('value', NewSpacing);
        sizeSetValue('unit', unit);
        updateColSpacingRang(NewSpacing + unit);
      }
    })))];
  } else {
    element = [el(BaseControl, {
      key: 'wpmozo-range-size-' + rangeSizeKey + '-basecontrol',
      label: args.label,
      className: 'wpmozo-range-size-basecontrol'
    }, el('div', {
      key: 'wpmozo-range-size-' + rangeSizeKey + '-inner',
      className: 'wpmozo-range-size-basecontrol-inner'
    }, el(RangeControl, {
      key: 'wpmozo-range-size-' + rangeSizeKey + '-range',
      value: state.range,
      allowReset: false,
      withInputField: false,
      onChange: function (NewSpacing) {
        let unit = jQuery('.wpmozo-range-size-' + rangeSizeKey + '-size .components-unit-control__select').val(),
          spacing = NewSpacing + unit;
        sizeSetValue('value', spacing);
        updateColSpacingRang(spacing);
      }
    }), el(__experimentalUnitControl, {
      key: 'wpmozo-range-size-' + rangeSizeKey + '-size',
      value: props.attributes[rangeSizeKey],
      className: 'wpmozo-range-size-' + rangeSizeKey + '-size',
      onChange: NewSpacing => {
        let unit = jQuery('.wpmozo-range-size-' + rangeSizeKey + '-size .components-unit-control__select').val();
        sizeSetValue('value', NewSpacing);
        sizeSetValue('unit', unit);
        updateColSpacingRang(NewSpacing + unit);
      }
    }), el(Button, {
      text: __('Reset', 'wpmozo-addons-lite-for-gutenberg'),
      variant: 'secondary',
      onClick: () => {
        let sizeRange = setValue('value', null);
        updateColSpacingRang(sizeRange);
        sizeSetValue('value', null);
        sizeSetValue('unit', 'px');
      }
    })))];
  }
  return element;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WpmozoRangeSize);

/***/ }),

/***/ "./src/components/wpmozo-size/wpmozo-size.js":
/*!***************************************************!*\
  !*** ./src/components/wpmozo-size/wpmozo-size.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const el = window.wp.element.createElement;
const __ = wp.i18n.__;
const {
  __experimentalToolsPanel,
  __experimentalToolsPanelItem,
  __experimentalUnitControl
} = window.wp.components;
const WpmozoSize = function (args) {
  const {
      SizeKey,
      props
    } = args,
    preAttributes = props.preAttributes,
    label = args.hasOwnProperty('label') ? args.label : __('Size', 'wpmozo-addons-lite-for-gutenberg');
  let SizeTypes = args.hasOwnProperty('SizeTypes') ? args.SizeTypes : null;
  const sizeSetValue = function (styleType, value = null) {
    value = setValue(styleType, value);
    props.setAttributes({
      [SizeKey + styleType]: value
    });
    if (args.hasOwnProperty('afterOnChange')) {
      args.afterOnChange(props);
    }
  };
  const setValue = function (styleType, value) {
    if (null === value && 'undefined' !== typeof preAttributes[SizeKey + styleType] && preAttributes[SizeKey + styleType].hasOwnProperty('default')) {
      value = preAttributes[SizeKey + styleType].default;
    }
    value = null !== value ? value : '';
    return value;
  };
  const onChange = args.hasOwnProperty('onChange') ? args.onChange : sizeSetValue;
  return [el(__experimentalToolsPanel, {
    key: 'wpmozo-size-panel-' + SizeKey,
    label: label,
    resetAll: () => {
      if (null === SizeTypes) {
        SizeTypes = {
          'width': '',
          'height': ''
        };
      }
      for (const type in SizeTypes) {
        let value = setValue(type, null);
        props.setAttributes({
          [SizeKey + type]: value
        });
      }
      if (args.hasOwnProperty('afterOnChange')) {
        args.afterOnChange(props);
      }
    }
  }, (null == SizeTypes || SizeTypes.hasOwnProperty('width')) && el(__experimentalToolsPanelItem, {
    label: __('Width', 'wpmozo-addons-lite-for-gutenberg'),
    hasValue: () => true,
    isShownByDefault: true,
    onDeselect: () => sizeSetValue('width')
  }, el(__experimentalUnitControl, {
    label: 'Width',
    labelPosition: 'side',
    value: props.attributes[SizeKey + 'width'],
    onChange: NewWidth => onChange('width', NewWidth)
  })), (null == SizeTypes || SizeTypes.hasOwnProperty('height')) && el(__experimentalToolsPanelItem, {
    label: __('Height', 'wpmozo-addons-lite-for-gutenberg'),
    hasValue: () => true,
    isShownByDefault: true,
    onDeselect: () => sizeSetValue('height')
  }, el(__experimentalUnitControl, {
    label: 'Height',
    labelPosition: 'side',
    value: props.attributes[SizeKey + 'height'],
    onChange: NewHeight => onChange('height', NewHeight)
  })))];
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WpmozoSize);

/***/ }),

/***/ "./src/components/wpmozo-typography/wpmozo-typography.js":
/*!***************************************************************!*\
  !*** ./src/components/wpmozo-typography/wpmozo-typography.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const el = window.wp.element.createElement;
const __ = wp.i18n.__;
const {
  __experimentalFontAppearanceControl,
  FontSizePicker,
  __experimentalLetterSpacingControl,
  __experimentalTextTransformControl,
  __experimentalTextDecorationControl,
  LineHeightControl
} = window.wp.blockEditor;
const {
  __experimentalToolsPanel,
  __experimentalToolsPanelItem
} = window.wp.components;
const {
  compose
} = wp.compose;
const WpmozoTypography = function (args) {
  const {
      TypographyKey,
      props
    } = args,
    preAttributes = props.preAttributes,
    label = args.hasOwnProperty('label') ? args.label : __('Typography', 'wpmozo-addons-lite-for-gutenberg');
  let TypoTypes = args.hasOwnProperty('TypoTypes') ? args.TypoTypes : null;
  const typoSetValue = function (styleType, value = null) {
    value = setValue(styleType, value);
    props.setAttributes({
      [TypographyKey + styleType]: value
    });
    if (args.hasOwnProperty('afterOnChange')) {
      args.afterOnChange(props);
    }
  };
  const setValue = function (styleType, value) {
    if (null === value && 'undefined' !== typeof preAttributes[TypographyKey + styleType] && preAttributes[TypographyKey + styleType].hasOwnProperty('default')) {
      value = preAttributes[TypographyKey + styleType].default;
    }
    value = null !== value ? value : '';
    return value;
  };
  const onChange = args.hasOwnProperty('onChange') ? args.onChange : typoSetValue;
  if (null == TypoTypes || TypoTypes.hasOwnProperty('FontAppearance')) {
    var hasFontStyles = args.hasOwnProperty('FontAppearance') && args.FontAppearance.hasOwnProperty('hasFontStyles') ? args.FontAppearance.hasFontStyles : true;
    var hasFontWeights = args.hasOwnProperty('FontAppearance') && args.FontAppearance.hasOwnProperty('hasFontWeights') ? args.FontAppearance.hasFontWeights : true;
    var _FontAppearanceValues = {};
    if (hasFontStyles) {
      _FontAppearanceValues['fontStyle'] = props.attributes[TypographyKey + 'FontAppearance'].fontStyle;
    }
    if (hasFontWeights) {
      _FontAppearanceValues['fontWeight'] = props.attributes[TypographyKey + 'FontAppearance'].fontWeight;
    }
  }
  return [el(__experimentalToolsPanel, {
    key: 'wpmozo-typography-panel-' + TypographyKey,
    label: label,
    resetAll: () => {
      if (null === TypoTypes) {
        TypoTypes = {
          'FontSize': '',
          'LetterSpacing': '',
          'Decoration': '',
          'FontAppearance': {
            'fontStyle': '',
            'fontWeight': ''
          },
          'LetterCase': '',
          'LineHeight': ''
        };
      }
      for (const type in TypoTypes) {
        let _typo = setValue(type, null);
        props.setAttributes({
          [TypographyKey + type]: _typo
        });
      }
      if (args.hasOwnProperty('afterOnChange')) {
        args.afterOnChange(props);
      }
    }
  }, (null == TypoTypes || TypoTypes.hasOwnProperty('FontSize')) && el(__experimentalToolsPanelItem, {
    label: __('Font Size', 'wpmozo-addons-lite-for-gutenberg'),
    hasValue: () => true,
    isShownByDefault: true,
    onDeselect: () => typoSetValue('FontSize')
  }, el(FontSizePicker, {
    value: props.attributes[TypographyKey + 'FontSize'],
    onChange: NewFontSize => onChange('FontSize', NewFontSize),
    __nextHasNoMarginBottom: true
  })), (null == TypoTypes || TypoTypes.hasOwnProperty('FontAppearance')) && el(__experimentalToolsPanelItem, {
    className: "single-column",
    label: __('Appearance', 'wpmozo-addons-lite-for-gutenberg'),
    hasValue: () => true,
    isShownByDefault: true,
    onDeselect: () => typoSetValue('FontAppearance')
  }, el(__experimentalFontAppearanceControl, {
    key: 'wpmozo-titleapp',
    hasFontStyles: hasFontStyles,
    hasFontWeights: hasFontWeights,
    value: _FontAppearanceValues,
    onChange: NewFontAppearance => onChange('FontAppearance', NewFontAppearance)
  })), (null == TypoTypes || TypoTypes.hasOwnProperty('LetterSpacing')) && el(__experimentalToolsPanelItem, {
    className: "single-column",
    label: __('Letter spacing', 'wpmozo-addons-lite-for-gutenberg'),
    hasValue: () => true,
    isShownByDefault: true,
    onDeselect: () => typoSetValue('LetterSpacing')
  }, el(__experimentalLetterSpacingControl, {
    value: props.attributes[TypographyKey + 'LetterSpacing'],
    onChange: NewLetterSpacing => onChange('LetterSpacing', NewLetterSpacing)
  })), (null == TypoTypes || TypoTypes.hasOwnProperty('Decoration')) && el(__experimentalToolsPanelItem, {
    label: __('Decoration', 'wpmozo-addons-lite-for-gutenberg'),
    hasValue: () => true,
    isShownByDefault: true,
    onDeselect: () => typoSetValue('Decoration')
  }, el(__experimentalTextDecorationControl, {
    value: props.attributes[TypographyKey + 'Decoration'],
    onChange: NewDecoration => onChange('Decoration', NewDecoration)
  })), (null == TypoTypes || TypoTypes.hasOwnProperty('LetterCase')) && el(__experimentalToolsPanelItem, {
    label: __('Letter case', 'wpmozo-addons-lite-for-gutenberg'),
    hasValue: () => true,
    isShownByDefault: true,
    onDeselect: () => typoSetValue('LetterCase')
  }, el(__experimentalTextTransformControl, {
    value: props.attributes[TypographyKey + 'LetterCase'],
    onChange: NewLetterCase => onChange('LetterCase', NewLetterCase)
  })), (null == TypoTypes || TypoTypes.hasOwnProperty('LineHeight')) && el(__experimentalToolsPanelItem, {
    className: "single-column",
    label: __('Line Height', 'wpmozo-addons-lite-for-gutenberg'),
    hasValue: () => true,
    isShownByDefault: true,
    onDeselect: () => typoSetValue('LineHeight')
  }, el(LineHeightControl, {
    value: props.attributes[TypographyKey + 'LineHeight'],
    onChange: NewLineHeight => onChange('LineHeight', NewLineHeight),
    __nextHasNoMarginBottom: true
  })))];
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (compose()(WpmozoTypography));

/***/ }),

/***/ "./src/save-dynamic-style.js":
/*!***********************************!*\
  !*** ./src/save-dynamic-style.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);

(0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.subscribe)(() => {
  const isSaving = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.select)('core/editor').isSavingPost(),
    isAutosaving = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.select)('core/editor').isAutosavingPost(),
    postId = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.select)('core/editor').getCurrentPostId(),
    postType = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.select)('core/editor').getCurrentPostType(),
    currentPost = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.select)('core/editor').getCurrentPost(),
    siteUrl = wpmozo_adfgu_editor_object.restUrl;
  if (!isSaving && !isAutosaving) {
    jQuery('body').removeClass('wpmozo-saving-dynamic-style');
  }
  if (isSaving && !isAutosaving) {
    if (window.wpmozo.wpmozo_is_empty(siteUrl)) {
      return;
    }
    const apiUrl = siteUrl + 'wpmozo/v1/save-dynamic-style';
    let style = window.wpmozo.extractCssByClass(),
      ID = currentPost.hasOwnProperty('wp_id') ? currentPost.wp_id : postId;
    if (!jQuery('body').hasClass('wpmozo-saving-dynamic-style')) {
      jQuery('body').addClass('wpmozo-saving-dynamic-style');
      fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          post_id: ID,
          style: style
        })
      });
    }
  }
});

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/compose":
/*!*********************************!*\
  !*** external ["wp","compose"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["compose"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "@wordpress/keycodes":
/*!**********************************!*\
  !*** external ["wp","keycodes"] ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["wp"]["keycodes"];

/***/ }),

/***/ "@wordpress/server-side-render":
/*!******************************************!*\
  !*** external ["wp","serverSideRender"] ***!
  \******************************************/
/***/ ((module) => {

module.exports = window["wp"]["serverSideRender"];

/***/ }),

/***/ "./src/blocks/team-slider/attributes.json":
/*!************************************************!*\
  !*** ./src/blocks/team-slider/attributes.json ***!
  \************************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"ID":{"type":"string"},"clientId":{"type":"string"},"postsNumber":{"type":"string","default":"10"},"postOrder":{"type":"string","default":"DESC"},"postOrderBy":{"type":"string","default":"date"},"includeCategories":{"type":"array"},"noResultText":{"type":"string","default":"The team member you requested could not be found. Try changing your module settings or create some new team members."},"showShortDesc":{"type":"boolean","default":true},"showDesignation":{"type":"boolean","default":true},"showSocialIcon":{"type":"boolean","default":true},"socialIconLinkTarget":{"type":"string"},"showSkills":{"type":"boolean","default":true},"sliderLayout":{"type":"string","default":"layout1"},"slideEffect":{"type":"string","default":"slide"},"memberPerSlide":{"type":"string","default":"3"},"slidesPerGroup":{"type":"string","default":"1"},"enableCoverflowShadow":{"type":"boolean","default":false},"coverflowShadowColor":{"type":"string","default":"#ccc"},"coverflowRotate":{"type":"number","default":40},"coverflowDepth":{"type":"number","default":100},"spaceBetweenSlides":{"type":"number","default":20},"equalizeHeight":{"type":"boolean","default":true},"autoHeightSlider":{"type":"boolean","default":false},"sliderLoop":{"type":"boolean","default":false},"autoplay":{"type":"boolean","default":true},"enableLinearTransition":{"type":"boolean","default":false},"autoplaySpeed":{"type":"string","default":"3000"},"pauseOnHover":{"type":"boolean","default":true},"transitionDuration":{"type":"string","default":"1000"},"showArrow":{"type":"boolean","default":true},"previousSlideArrow":{"type":"string"},"nextSlideArrow":{"type":"string"},"showArrowOnHover":{"type":"boolean","default":false},"arrowsPosition":{"type":"string","default":"inside"},"showControlDot":{"type":"boolean","default":true},"controlDotStyle":{"type":"string","default":"solid_dot"},"enableDynamicDots":{"type":"boolean","default":false},"containerBackground":{"type":"string"},"containerpadding":{"type":"object"},"sliderArrowColor":{"type":"string"},"sliderArrowBackground":{"type":"string"},"sliderActiveDoteColor":{"type":"string"},"sliderInactiveDoteColor":{"type":"string"},"arrowFontSize":{"type":"string"},"arrowpadding":{"type":"object"},"tabletMemberPerSlide":{"type":"string","default":"3"},"tabletSlidesPerGroup":{"type":"string","default":"1"},"tabletSpaceBetweenSlides":{"type":"number","default":20},"mobileMemberPerSlide":{"type":"string","default":"1"},"mobileSlidesPerGroup":{"type":"string","default":"1"},"mobileSpaceBetweenSlides":{"type":"number","default":20},"textAlignment":{"type":"string","default":"left"},"imageHeight":{"type":"string"},"imageborderRadius":{"type":"string"},"imageborder":{"type":"object"},"nametext":{"type":"string"},"nameFontSize":{"type":"string"},"nameFontAppearance":{"type":"object","fontStyle":{"type":"string"},"fontWeight":{"type":"string"},"default":{"fontStyle":"","fontWeight":""}},"nameLetterSpacing":{"type":"string"},"nameDecoration":{"type":"string"},"nameLetterCase":{"type":"string"},"nameLineHeight":{"type":"string"},"nameTextAlignment":{"type":"string","default":"left"},"nameHeadingLavel":{"type":"string","default":"h2"},"designationtext":{"type":"string"},"designationFontSize":{"type":"string"},"designationFontAppearance":{"type":"object","fontStyle":{"type":"string"},"fontWeight":{"type":"string"},"default":{"fontStyle":"","fontWeight":""}},"designationLetterSpacing":{"type":"string"},"designationDecoration":{"type":"string"},"designationLetterCase":{"type":"string"},"designationLineHeight":{"type":"string"},"designationTextAlignment":{"type":"string","default":"left"},"designationHeadingLavel":{"type":"string","default":"h4"},"skilltext":{"type":"string"},"skillFontSize":{"type":"string"},"skillFontAppearance":{"type":"object","fontStyle":{"type":"string"},"fontWeight":{"type":"string"},"default":{"fontStyle":"","fontWeight":""}},"skillLetterSpacing":{"type":"string"},"skillDecoration":{"type":"string"},"skillLetterCase":{"type":"string"},"skillLineHeight":{"type":"string"},"skillTextAlignment":{"type":"string","default":"left"},"descriptiontext":{"type":"string"},"descriptionFontSize":{"type":"string"},"descriptionFontAppearance":{"type":"object","fontStyle":{"type":"string"},"fontWeight":{"type":"string"},"default":{"fontStyle":"","fontWeight":""}},"descriptionLetterSpacing":{"type":"string"},"descriptionDecoration":{"type":"string"},"descriptionLetterCase":{"type":"string"},"descriptionLineHeight":{"type":"string"},"descriptionTextAlignment":{"type":"string","default":"left"},"barHeight":{"type":"string","default":"12px"},"barEmptyColor":{"type":"string","default":"#ccc"},"barFilledColor":{"type":"string","default":"#0c71c3"},"iconSeparatorColor":{"type":"string","default":"#cccccc"},"iconColor":{"type":"string"},"iconBackground":{"type":"string"},"separatorSize":{"type":"string","default":"10px"},"iconSize":{"type":"string","default":"16px"},"socialIconsAlignment":{"type":"string","default":"center"},"iconborderRadius":{"type":"string"},"iconborder":{"type":"object"},"arrowborderRadius":{"type":"string"},"arrowborder":{"type":"object"},"slideBackground":{"type":"string"},"slideborderRadius":{"type":"string"},"slideborder":{"type":"object"},"slidepadding":{"type":"object"}}');

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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _blocks_before_after_slider_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blocks/before-after-slider/index.js */ "./src/blocks/before-after-slider/index.js");
/* harmony import */ var _blocks_content_toggle_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blocks/content-toggle/index.js */ "./src/blocks/content-toggle/index.js");
/* harmony import */ var _blocks_content_wraper_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blocks/content-wraper/index.js */ "./src/blocks/content-wraper/index.js");
/* harmony import */ var _blocks_fancy_heading_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blocks/fancy-heading/index.js */ "./src/blocks/fancy-heading/index.js");
/* harmony import */ var _blocks_fancy_text_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./blocks/fancy-text/index.js */ "./src/blocks/fancy-text/index.js");
/* harmony import */ var _blocks_flip_box_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./blocks/flip-box/index.js */ "./src/blocks/flip-box/index.js");
/* harmony import */ var _blocks_interactive_image_card_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./blocks/interactive-image-card/index.js */ "./src/blocks/interactive-image-card/index.js");
/* harmony import */ var _blocks_logo_slider_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./blocks/logo-slider/index.js */ "./src/blocks/logo-slider/index.js");
/* harmony import */ var _blocks_logo_slide_index_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./blocks/logo-slide/index.js */ "./src/blocks/logo-slide/index.js");
/* harmony import */ var _blocks_floating_image_item_index_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./blocks/floating-image-item/index.js */ "./src/blocks/floating-image-item/index.js");
/* harmony import */ var _blocks_floating_image_index_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./blocks/floating-image/index.js */ "./src/blocks/floating-image/index.js");
/* harmony import */ var _blocks_tilt_image_index_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./blocks/tilt-image/index.js */ "./src/blocks/tilt-image/index.js");
/* harmony import */ var _blocks_separator_index_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./blocks/separator/index.js */ "./src/blocks/separator/index.js");
/* harmony import */ var _blocks_team_slider_index_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./blocks/team-slider/index.js */ "./src/blocks/team-slider/index.js");
/* harmony import */ var _blocks_list_index_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./blocks/list/index.js */ "./src/blocks/list/index.js");
/* harmony import */ var _blocks_list_item_index_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./blocks/list-item/index.js */ "./src/blocks/list-item/index.js");
/* harmony import */ var _save_dynamic_style_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./save-dynamic-style.js */ "./src/save-dynamic-style.js");
// Add all blocks

















// Add additional functionality

})();

/******/ })()
;
//# sourceMappingURL=index.js.map