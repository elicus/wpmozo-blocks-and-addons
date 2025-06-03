/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/floating-image/block.json":
/*!**********************************************!*\
  !*** ./src/blocks/floating-image/block.json ***!
  \**********************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"wpmozo/floating-image","version":"1.1.0","title":"Floating Image","category":"wpmozo","icon":"smiley","description":"Example block scaffolded with Create Block tool.","allowedBlocks":["wpmozo/floating-image-item"],"example":{},"supports":{"html":false,"shadow":true,"spacing":{"margin":true,"padding":true},"color":{"gradients":true,"background":true,"text":false},"background":{"backgroundImage":true,"backgroundSize":true}},"attributes":{"ID":{"type":"string"},"images":{"type":"array"},"containerHeight":{"type":"string","default":"450px"}},"textdomain":"wpmozo-blocks-and-addons","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","viewScript":"file:./view.js"}');

/***/ }),

/***/ "./src/blocks/floating-image/edit.js":
/*!*******************************************!*\
  !*** ./src/blocks/floating-image/edit.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _inspector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inspector */ "./src/blocks/floating-image/inspector.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style */ "./src/blocks/floating-image/style.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _common_utils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/utils.js */ "./src/common/utils.js");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/floating-image/editor.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);








function Edit(props) {
  const {
    attributes,
    setAttributes,
    clientId
  } = props;
  attributes.ID = clientId;
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)({
    className: 'wpmozo-bna-floating-image'
  });
  const {
    images = []
  } = attributes;
  const TEMPLATE = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useMemo)(() => {
    if (!(0,_common_utils_js__WEBPACK_IMPORTED_MODULE_5__.wpmozo_is_empty)(images)) {
      return images.map(image => ['wpmozo/floating-image-item', {
        image
      }]);
    }
    return [];
  }, [images]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: [(0,_common_utils_js__WEBPACK_IMPORTED_MODULE_5__.wpmozo_is_empty)(images) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaPlaceholder, {
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
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Add Images', 'wpmozo-blocks-and-addons')
      },
      accept: "image/*"
    }), !(0,_common_utils_js__WEBPACK_IMPORTED_MODULE_5__.wpmozo_is_empty)(images) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_inspector__WEBPACK_IMPORTED_MODULE_2__["default"], {
        attributes: attributes,
        setAttributes: setAttributes
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
        ...blockProps,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
          className: "wpmozo-bna-floating-image-wrapper",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InnerBlocks, {
            template: TEMPLATE,
            templateLock: false,
            allowedBlocks: ['wpmozo/floating-image-item']
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("style", {
        children: (0,_style__WEBPACK_IMPORTED_MODULE_3__["default"])({
          attributes,
          clientId
        })
      })]
    })]
  });
}

/***/ }),

/***/ "./src/blocks/floating-image/editor.scss":
/*!***********************************************!*\
  !*** ./src/blocks/floating-image/editor.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const Icon = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  width: "1024",
  height: "1024",
  viewBox: "0 0 1024 1024",
  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("g", {
    id: "icomoon-ignore"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    fill: "#000",
    d: "M635.733 185.6h-247.467c-106.667 0-192 85.333-192 192v270.933c0 106.667 85.333 192 192 192h249.6c106.667 0 192-85.333 192-192v-270.933c-2.133-106.667-87.467-192-194.133-192zM635.733 795.733h-247.467c-70.4 0-128-49.067-145.067-113.067l185.6-183.467 121.6 142.933c8.533 10.667 23.467 10.667 32 0l74.667-91.733 123.733 132.267c-14.933 64-74.667 113.067-145.067 113.067zM785.067 622.933l-110.933-121.6c-8.533-10.667-23.467-10.667-32 0l-76.8 91.733-119.467-140.8c-8.533-10.667-23.467-10.667-32 0l-174.933 174.933v-249.6c0-83.2 66.133-149.333 149.333-149.333h249.6c83.2 0 149.333 66.133 149.333 149.333v245.333z"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    fill: "#000",
    d: "M582.4 300.8c-32 0-59.733 25.6-59.733 59.733 0 32 25.6 59.733 59.733 59.733 32 0 59.733-25.6 59.733-59.733s-27.733-59.733-59.733-59.733zM582.4 386.133c-14.933 0-27.733-12.8-27.733-27.733s12.8-27.733 27.733-27.733 27.733 12.8 27.733 27.733c0 14.933-12.8 27.733-27.733 27.733z"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    fill: "#000",
    d: "M650.667 96h-277.333c-12.8 0-21.333-8.533-21.333-21.333v0c0-12.8 8.533-21.333 21.333-21.333h277.333c12.8 0 21.333 8.533 21.333 21.333v0c0 12.8-8.533 21.333-21.333 21.333z"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    fill: "#000",
    d: "M650.667 970.667h-277.333c-12.8 0-21.333-8.533-21.333-21.333v0c0-12.8 8.533-21.333 21.333-21.333h277.333c12.8 0 21.333 8.533 21.333 21.333v0c0 12.8-8.533 21.333-21.333 21.333z"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    fill: "#000",
    d: "M155.733 433.067c-2.133 2.133-6.4 4.267-8.533 4.267-4.267 0-6.4-2.133-8.533-4.267l-36.267-36.267v264.533c0 8.533-6.4 17.067-17.067 17.067s-17.067-6.4-17.067-17.067v-264.533l-36.267 36.267c-4.267 4.267-12.8 4.267-19.2 0-2.133-2.133-4.267-6.4-4.267-8.533 0-4.267 2.133-6.4 4.267-8.533l61.867-61.867c4.267-6.4 12.8-6.4 19.2 0l61.867 61.867c6.4 2.133 6.4 10.667 0 17.067z"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    fill: "#000",
    d: "M1009.067 610.133l-61.867 61.867c-4.267 6.4-12.8 6.4-19.2 0l-61.867-61.867c-2.133-2.133-4.267-6.4-4.267-8.533 0-4.267 2.133-6.4 4.267-8.533 6.4-4.267 12.8-4.267 19.2 0l36.267 36.267v-264.533c0-8.533 6.4-17.067 17.067-17.067s17.067 6.4 17.067 17.067v264.533l36.267-36.267c2.133-2.133 6.4-4.267 8.533-4.267 4.267 0 6.4 2.133 8.533 4.267 6.4 4.267 6.4 12.8 0 17.067z"
  })]
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Icon);

/***/ }),

/***/ "./src/blocks/floating-image/index.js":
/*!********************************************!*\
  !*** ./src/blocks/floating-image/index.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block.json */ "./src/blocks/floating-image/block.json");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/blocks/floating-image/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/blocks/floating-image/save.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./icon */ "./src/blocks/floating-image/icon.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/floating-image/style.scss");





/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing  keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */

(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_1__.name, {
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  icon: _icon__WEBPACK_IMPORTED_MODULE_4__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_3__["default"]
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
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
// inspector.js




const Inspector = ({
  attributes,
  setAttributes
}) => {
  let props = {
    attributes,
    setAttributes
  };
  props = Object.assign({}, props, {
    preAttributes: {}
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Container', 'wpmozo-blocks-and-addons'),
        initialOpen: false,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.HeightControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Container Height', 'wpmozo-blocks-and-addons'),
          value: attributes.containerHeight,
          onChange: newValue => setAttributes({
            containerHeight: newValue
          })
        })
      })
    }, "controls")
  });
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
/* harmony export */   "default": () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/utils.js */ "./src/common/utils.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style */ "./src/blocks/floating-image/style.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




function save({
  attributes
}) {
  const clientId = attributes.ID;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      ..._wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps.save({
        className: 'wpmozo-bna-floating-image',
        ID: `block-${clientId}`
      }),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        className: "wpmozo-bna-floating-image-wrapper",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.InnerBlocks.Content, {})
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("style", {
      children: (0,_style__WEBPACK_IMPORTED_MODULE_2__["default"])({
        attributes,
        clientId
      })
    })]
  });
}

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
const generateDynamicStyle = ({
  attributes,
  clientId
}) => {
  let styles = `#block-${clientId}{`;
  styles += `${attributes.containerHeight ? `.wpmozo-bna-floating-image-wrapper { height:` + attributes.containerHeight + `; }.floating-image-item img { max-height:` + attributes.containerHeight + `; }` : ''}`;
  styles += `}`;
  return styles;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generateDynamicStyle);

/***/ }),

/***/ "./src/blocks/floating-image/style.scss":
/*!**********************************************!*\
  !*** ./src/blocks/floating-image/style.scss ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/common/utils.js":
/*!*****************************!*\
  !*** ./src/common/utils.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   convertInlineStyle: () => (/* binding */ convertInlineStyle),
/* harmony export */   convertInlineStyleStr: () => (/* binding */ convertInlineStyleStr),
/* harmony export */   convertVarStyle: () => (/* binding */ convertVarStyle),
/* harmony export */   extractCssByClass: () => (/* binding */ extractCssByClass),
/* harmony export */   getIdByClientid: () => (/* binding */ getIdByClientid),
/* harmony export */   getMainEl: () => (/* binding */ getMainEl),
/* harmony export */   minifyCSS: () => (/* binding */ minifyCSS),
/* harmony export */   wpmozo_generate_style: () => (/* binding */ wpmozo_generate_style),
/* harmony export */   wpmozo_get_styleAtts: () => (/* binding */ wpmozo_get_styleAtts),
/* harmony export */   wpmozo_is_empty: () => (/* binding */ wpmozo_is_empty),
/* harmony export */   wpmozo_parse_style: () => (/* binding */ wpmozo_parse_style)
/* harmony export */ });
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

/***/ "react/jsx-runtime":
/*!**********************************!*\
  !*** external "ReactJSXRuntime" ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["ReactJSXRuntime"];

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"blocks/floating-image/index": 0,
/******/ 			"blocks/floating-image/style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunkwpmozo_blocks_and_addons"] = globalThis["webpackChunkwpmozo_blocks_and_addons"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["blocks/floating-image/style-index"], () => (__webpack_require__("./src/blocks/floating-image/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map