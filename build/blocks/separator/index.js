/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/separator/block.json":
/*!*****************************************!*\
  !*** ./src/blocks/separator/block.json ***!
  \*****************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"wpmozo/separator","version":"0.1.0","title":"Separator","category":"wpmozo","icon":"smiley","description":"Example block scaffolded with Create Block tool.","example":{},"supports":{"html":false},"attributes":{"ID":{"type":"string"},"separatorType":{"type":"string","default":"line"},"lineUseWith":{"type":"string","default":"onlySeparator"},"separatorText":{"type":"string","default":"Add text here"},"separatorIcon":{"type":"string","default":""},"iconPosition":{"type":"string","default":"center"},"enableIconFontSize":{"type":"boolean","default":false},"iconFontSize":{"type":"number","default":32},"iconColor":{"type":"string"},"styleIcon":{"type":"boolean","default":false},"iconShape":{"type":"string","default":"square"},"shapeBackground":{"type":"string"},"enableShapeBorder":{"type":"boolean","default":false},"shapeBorderColor":{"type":"string"},"separatorImage":{"type":"string","default":""},"imageWidth":{"type":"number"},"imagePosition":{"type":"string","default":"center"},"lineStyle":{"type":"string","default":"solid"},"separatorThickness":{"type":"number","default":3},"separatorGradient":{"type":"string"},"separatorColor":{"type":"string","default":"#2b87da"},"shadowColor":{"type":"string","default":"#2b87da"},"textNormalColor":{"type":"string","default":"#222222"},"textHoverColor":{"type":"string","default":"#000000"},"textNormalFontSize":{"type":"string"},"textNormalFontAppearance":{"type":"object","fontStyle":{"type":"string"},"fontWeight":{"type":"string"},"default":{"fontStyle":"","fontWeight":""}},"textNormalLetterSpacing":{"type":"string"},"textNormalDecoration":{"type":"string"},"textNormalLetterCase":{"type":"string"},"textNormalLineHeight":{"type":"string"},"textHoverFontSize":{"type":"string"},"textHoverFontAppearance":{"type":"object","fontStyle":{"type":"string"},"fontWeight":{"type":"string"},"default":{"fontStyle":"","fontWeight":""}},"textHoverLetterSpacing":{"type":"string"},"textHoverDecoration":{"type":"string"},"textHoverLetterCase":{"type":"string"},"textHoverLineHeight":{"type":"string"},"textAlign":{"type":"string","default":"center"}},"textdomain":"wpmozo-blocks-and-addons","editorScript":"file:./index.js","editorStyle":["file:./index.css","wpmozo-blocks-and-addons-fontawesome-style"],"style":"file:./style-index.css","viewScript":"file:./view.js"}');

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
/* harmony import */ var _inspector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inspector */ "./src/blocks/separator/inspector.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style */ "./src/blocks/separator/style.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/separator/editor.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);





/*const WPMozoEditorObj = wpmozo_bna_editor_object;*/
/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */


const Edit = props => {
  const {
    iconFontSize
  } = props.attributes;

  // Add styles dynamically from attributes
  const blockStyles = {
    fontSize: iconFontSize
  };
  const attributes = props.attributes,
    clientId = props.clientId,
    setAttributes = props.setAttributes,
    blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.useBlockProps)({
      className: 'wpmozo-bna-separator'
    });
  attributes.ID = clientId;
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
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    jQuery(document).ready(function ($) {
      if (jQuery('body').find('.wpmozo-bna-separator').length > 0) {
        $('body').find('.wpmozo-bna-separator').each(function () {
          let height = $(this).find('.wpmozo-bna-icon-wrapper').outerHeight(true);
          let padding = height / 2;
          $(this).css('padding-top', padding + 'px');
          $(this).css('padding-bottom', padding + 'px');
        });
      }
    });
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_inspector__WEBPACK_IMPORTED_MODULE_0__["default"], {
      attributes: attributes,
      setAttributes: setAttributes
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("style", {
      children: (0,_style__WEBPACK_IMPORTED_MODULE_1__["default"])({
        attributes,
        clientId
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      ...(0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.useBlockProps)(),
      children: ["line" === attributes.separatorType && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: `wpmozo-bna-separator-container ${position}`,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
          className: "wpmozo-bna-line wpmozo-bna-line-before"
        }), "textSeparator" === attributes.lineUseWith && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
          className: "wpmozo-bna-text-wrapper",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
            children: `${attributes.separatorText}`
          })
        }), "iconSeparator" === attributes.lineUseWith && true !== attributes.styleIcon && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
          className: "wpmozo-bna-icon-wrapper",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("i", {
            className: attributes.separatorIcon
          })
        }), "iconSeparator" === attributes.lineUseWith && true === attributes.styleIcon && ('square' === attributes.iconShape || 'circle' === attributes.iconShape) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
          className: "wpmozo-bna-icon-wrapper",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("i", {
            className: attributes.separatorIcon + ' wpmozo-bna-icon-' + attributes.iconShape + (true === attributes.enableShapeBorder ? ' wpmozo-bna-icon-shape-border' : '')
          })
        }), "iconSeparator" === attributes.lineUseWith && true === attributes.styleIcon && 'hexagon' === attributes.iconShape && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
          className: "wpmozo-bna-icon-wrapper shape-hexagon",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
            className: "hexagon" + (true === attributes.enableShapeBorder ? ' wpmozo-bna-border-hex' : ''),
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("i", {
              className: attributes.separatorIcon
            })
          })
        }), "imageSeparator" === attributes.lineUseWith && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("img", {
          className: "wpmozo-bna-separator-image",
          src: attributes.separatorImage ? attributes.separatorImage : ""
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
          className: "wpmozo-bna-line wpmozo-bna-line-after"
        })]
      }), "shadow" === attributes.separatorType && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
        className: "wpmozo-bna-shadow"
      })]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Edit);

/***/ }),

/***/ "./src/blocks/separator/editor.scss":
/*!******************************************!*\
  !*** ./src/blocks/separator/editor.scss ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
    d: "M411.733 247.467h-123.733l-21.333 59.733h-51.2l106.667-296.533h55.467l106.667 296.533h-51.2l-21.333-59.733zM398.933 206.933l-49.067-138.667-49.067 138.667h98.133z"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    d: "M772.267 179.2c10.667 14.933 17.067 29.867 17.067 46.933 0 14.933-4.267 27.733-10.667 40.533-8.533 12.8-19.2 21.333-34.133 27.733s-32 10.667-51.2 10.667h-119.467v-294.4h113.067c19.2 0 38.4 4.267 51.2 10.667 14.933 6.4 25.6 17.067 32 27.733s10.667 23.467 10.667 38.4c0 17.067-4.267 32-12.8 42.667s-21.333 19.2-36.267 25.6c17.067 2.133 29.867 10.667 40.533 23.467zM622.933 134.4h59.733c14.933 0 27.733-4.267 38.4-10.667 8.533-6.4 12.8-17.067 12.8-32 0-12.8-4.267-23.467-12.8-32s-21.333-10.667-38.4-10.667h-59.733v85.333zM727.467 256c8.533-8.533 14.933-19.2 14.933-34.133s-4.267-25.6-14.933-34.133-23.467-12.8-40.533-12.8h-64v91.733h66.133c14.933 0 27.733-2.133 38.4-10.667z"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    d: "M215.467 782.933c12.8-23.467 32-40.533 55.467-53.333s49.067-19.2 76.8-19.2c32 0 59.733 8.533 85.333 23.467s42.667 38.4 53.333 66.133h-59.733c-8.533-14.933-19.2-27.733-32-34.133-12.8-8.533-29.867-10.667-46.933-10.667-19.2 0-36.267 4.267-53.333 12.8-14.933 8.533-27.733 21.333-36.267 38.4s-12.8 36.267-12.8 57.6c0 21.333 4.267 40.533 12.8 57.6s21.333 29.867 36.267 38.4c14.933 8.533 32 12.8 53.333 12.8 17.067 0 34.133-4.267 46.933-10.667 12.8-8.533 23.467-19.2 32-34.133h57.6c-10.667 27.733-29.867 51.2-53.333 66.133-25.6 14.933-53.333 23.467-85.333 23.467-27.733 0-53.333-6.4-76.8-19.2s-40.533-32-55.467-53.333-19.2-49.067-19.2-78.933c2.133-34.133 8.533-59.733 21.333-83.2z"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    d: "M753.067 736c23.467 12.8 42.667 29.867 55.467 51.2 12.8 23.467 19.2 49.067 19.2 78.933s-6.4 55.467-19.2 78.933c-12.8 21.333-32 38.4-55.467 51.2s-51.2 17.067-83.2 17.067h-96v-296.533h96c32 0 59.733 6.4 83.2 19.2zM750.933 945.067c19.2-19.2 27.733-44.8 27.733-78.933s-8.533-61.867-27.733-81.067c-19.2-19.2-44.8-29.867-78.933-29.867h-49.067v217.6h49.067c34.133 0 59.733-8.533 78.933-27.733z"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    d: "M384 416c-46.933 0-83.2 32-93.867 74.667h-258.133c-10.667 0-21.333 10.667-21.333 21.333s10.667 21.333 21.333 21.333h258.133c10.667 42.667 46.933 74.667 93.867 74.667 53.333 0 96-42.667 96-96s-42.667-96-96-96zM384 565.333c-21.333 0-40.533-12.8-49.067-32-2.133-6.4-4.267-14.933-4.267-21.333s2.133-14.933 4.267-21.333c8.533-19.2 27.733-32 49.067-32 29.867 0 53.333 23.467 53.333 53.333s-23.467 53.333-53.333 53.333z"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    d: "M992 490.667h-258.133c-10.667-42.667-46.933-74.667-93.867-74.667-53.333 0-96 42.667-96 96s42.667 96 96 96c46.933 0 83.2-32 93.867-74.667h258.133c10.667 0 21.333-10.667 21.333-21.333s-10.667-21.333-21.333-21.333zM689.067 533.333c-8.533 19.2-27.733 32-49.067 32-29.867 0-53.333-23.467-53.333-53.333s23.467-53.333 53.333-53.333c21.333 0 40.533 12.8 49.067 32 2.133 6.4 4.267 14.933 4.267 21.333s-2.133 14.933-4.267 21.333z"
  })]
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Icon);

/***/ }),

/***/ "./src/blocks/separator/index.js":
/*!***************************************!*\
  !*** ./src/blocks/separator/index.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block.json */ "./src/blocks/separator/block.json");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/blocks/separator/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/blocks/separator/save.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./icon */ "./src/blocks/separator/icon.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/separator/style.scss");





/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
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

/***/ "./src/blocks/separator/inspector.js":
/*!*******************************************!*\
  !*** ./src/blocks/separator/inspector.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common_components_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/components/index */ "./src/common/components/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);
// inspector.js






const Inspector = ({
  attributes,
  setAttributes
}) => {
  let props = {
      attributes,
      setAttributes
    },
    allLineStyles = [{
      value: 'solid',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Solid', 'wpmozo-blocks-and-addons')
    }, {
      value: 'dashed',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Dashed', 'wpmozo-blocks-and-addons')
    }, {
      value: 'double',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Double', 'wpmozo-blocks-and-addons')
    }, {
      value: 'dotted',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Dotted', 'wpmozo-blocks-and-addons')
    }, {
      value: 'ridge',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Ridge', 'wpmozo-blocks-and-addons')
    }, {
      value: 'groove',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Groove', 'wpmozo-blocks-and-addons')
    }, {
      value: 'inset',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Inset', 'wpmozo-blocks-and-addons')
    }, {
      value: 'outset',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Outset', 'wpmozo-blocks-and-addons')
    }, {
      value: 'none',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('None', 'wpmozo-blocks-and-addons')
    }],
    headingLavels = [{
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
  props = Object.assign({}, props, {
    preAttributes: {}
  });
  const [textStyleType, setTextStyleType] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)('normal');
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Separator Content', 'wpmozo-blocks-and-addons'),
        initialOpen: true,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Separator Type', 'wpmozo-blocks-and-addons'),
          value: attributes.separatorType,
          options: [{
            value: 'line',
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Line', 'wpmozo-blocks-and-addons')
          }, {
            value: 'shadow',
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Shadow', 'wpmozo-blocks-and-addons')
          }],
          onChange: newValue => setAttributes({
            separatorType: newValue
          })
        }), 'line' === attributes.separatorType && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Select Line Style', 'wpmozo-blocks-and-addons'),
          value: attributes.lineStyle,
          options: allLineStyles,
          onChange: newValue => setAttributes({
            lineStyle: newValue
          })
        }), 'line' === attributes.separatorType && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Use With', 'wpmozo-blocks-and-addons'),
          value: attributes.lineUseWith,
          options: [{
            value: 'onlySeparator',
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Only Separator', 'wpmozo-blocks-and-addons')
          }, {
            value: 'textSeparator',
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Separator With Text', 'wpmozo-blocks-and-addons')
          }, {
            value: 'iconSeparator',
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Separator With Icon', 'wpmozo-blocks-and-addons')
          }, {
            value: 'imageSeparator',
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Separator With Image', 'wpmozo-blocks-and-addons')
          }],
          onChange: newValue => setAttributes({
            lineUseWith: newValue
          })
        }), 'line' === attributes.separatorType && 'textSeparator' === attributes.lineUseWith && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextareaControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Separator Text', 'wpmozo-blocks-and-addons'),
          onChange: newValue => setAttributes({
            separatorText: newValue
          }),
          value: attributes.separatorText
        }), 'line' === attributes.separatorType && 'iconSeparator' === attributes.lineUseWith && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_common_components_index__WEBPACK_IMPORTED_MODULE_4__.WpmozoIconpicker, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Icon', 'wpmozo-blocks-and-addons'),
          iconPickerKey: "separatorIcon",
          props: props,
          value: attributes.separatorIcon,
          onChange: newValue => setAttributes({
            separatorIcon: newValue
          })
        }), 'line' === attributes.separatorType && 'imageSeparator' === attributes.lineUseWith && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_common_components_index__WEBPACK_IMPORTED_MODULE_4__.WpmozoMediaUploader, {
          attrKye: "separatorImage",
          props: props
        })]
      })
    }, "controls"), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, {
      group: "styles",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Separator Styling', 'wpmozo-blocks-and-addons'),
        initialOpen: true,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Separator Thickness', 'wpmozo-blocks-and-addons'),
          value: attributes.separatorThickness,
          onChange: newValue => setAttributes({
            separatorThickness: newValue
          }),
          min: 0,
          step: 1,
          max: 100
        }), 'line' === attributes.separatorType && 'solid' === attributes.lineStyle && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.__experimentalColorGradientControl, {
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
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Separator Color"),
          onColorChange: newValue => setAttributes({
            separatorColor: newValue
          }),
          onGradientChange: newValue => setAttributes({
            separatorGradient: newValue
          })
        }), ('shadow' === attributes.separatorType || 'line' === attributes.separatorType && 'solid' !== attributes.lineStyle) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_common_components_index__WEBPACK_IMPORTED_MODULE_4__.WpmozoColorPicker, {
          ColorKey: "shadow",
          props: props,
          ColorTypes: [{
            key: 'Color',
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Separator Color', 'wpmozo-blocks-and-addons')
          }]
        })]
      }), 'line' === attributes.separatorType && 'imageSeparator' === attributes.lineUseWith && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Image Styling', 'wpmozo-blocks-and-addons'),
        initialOpen: false,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Image Position', 'wpmozo-blocks-and-addons'),
          value: attributes.imagePosition,
          options: [{
            value: 'center',
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Center', 'wpmozo-blocks-and-addons')
          }, {
            value: 'left',
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Left', 'wpmozo-blocks-and-addons')
          }, {
            value: 'right',
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Right', 'wpmozo-blocks-and-addons')
          }],
          onChange: newValue => setAttributes({
            imagePosition: newValue
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Image Width', 'wpmozo-blocks-and-addons'),
          value: attributes.imageWidth,
          onChange: newValue => setAttributes({
            imageWidth: newValue
          }),
          min: 0,
          step: 1,
          max: 100
        })]
      }), 'line' === attributes.separatorType && 'iconSeparator' === attributes.lineUseWith && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Icon Styling', 'wpmozo-blocks-and-addons'),
        initialOpen: false,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Icon Position', 'wpmozo-blocks-and-addons'),
          value: attributes.iconPosition,
          options: [{
            value: 'center',
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Center', 'wpmozo-blocks-and-addons')
          }, {
            value: 'left',
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Left', 'wpmozo-blocks-and-addons')
          }, {
            value: 'right',
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Right', 'wpmozo-blocks-and-addons')
          }],
          onChange: newValue => setAttributes({
            iconPosition: newValue
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_common_components_index__WEBPACK_IMPORTED_MODULE_4__.WpmozoColorPicker, {
          ColorKey: "icon",
          props: props,
          ColorTypes: [{
            key: 'Color',
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Icon Color', 'wpmozo-blocks-and-addons')
          }]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Use Icon Font Size', 'wpmozo-blocks-and-addons'),
          checked: attributes.enableIconFontSize,
          onChange: newValue => setAttributes({
            enableIconFontSize: newValue
          })
        }), true === attributes.enableIconFontSize && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Icon Font Size', 'wpmozo-blocks-and-addons'),
          value: attributes.iconFontSize,
          onChange: newValue => setAttributes({
            iconFontSize: newValue
          }),
          min: 0,
          step: 1,
          max: 120
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Style Icon', 'wpmozo-blocks-and-addons'),
          checked: attributes.styleIcon,
          onChange: newValue => setAttributes({
            styleIcon: newValue
          })
        }), true === attributes.styleIcon && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Shape', 'wpmozo-blocks-and-addons'),
          value: attributes.iconShape,
          options: [{
            value: 'square',
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Square', 'wpmozo-blocks-and-addons')
          }, {
            value: 'circle',
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Circle', 'wpmozo-blocks-and-addons')
          }, {
            value: 'hexagon',
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Hexagon', 'wpmozo-blocks-and-addons')
          }],
          onChange: newValue => setAttributes({
            iconShape: newValue
          })
        }), true === attributes.styleIcon && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_common_components_index__WEBPACK_IMPORTED_MODULE_4__.WpmozoColorPicker, {
          ColorKey: "shape",
          props: props,
          ColorTypes: [{
            key: 'Background',
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Shape Background', 'wpmozo-blocks-and-addons')
          }]
        }), true === attributes.styleIcon && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Display Shape Border', 'wpmozo-blocks-and-addons'),
          checked: attributes.enableShapeBorder,
          onChange: newValue => setAttributes({
            enableShapeBorder: newValue
          })
        }), true === attributes.styleIcon && true === attributes.enableShapeBorder && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_common_components_index__WEBPACK_IMPORTED_MODULE_4__.WpmozoColorPicker, {
          ColorKey: "shapeBorder",
          props: props,
          ColorTypes: [{
            key: 'Color',
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Shape Border Color', 'wpmozo-blocks-and-addons')
          }]
        })]
      }), 'line' === attributes.separatorType && 'textSeparator' === attributes.lineUseWith && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Text Styling', 'wpmozo-blocks-and-addons'),
        className: "wpmozo-text-styling-panel wpmozo-typography-panel",
        initialOpen: false,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.BaseControl, {
          className: "wpmozo-button-tabs-wrap",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ButtonGroup, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
              className: "wpmozo-button-tabs-btn",
              isPressed: 'normal' === textStyleType ? true : false,
              onClick: () => setTextStyleType('normal'),
              children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Normal', 'wpmozo-blocks-and-addons')
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
              className: "wpmozo-button-tabs-btn",
              isPressed: 'hover' === textStyleType ? true : false,
              onClick: () => setTextStyleType('hover'),
              children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Hover', 'wpmozo-blocks-and-addons')
            })]
          }), 'normal' === textStyleType && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_common_components_index__WEBPACK_IMPORTED_MODULE_4__.WpmozoColorPicker, {
              ColorKey: "textNormal",
              props: props,
              ColorTypes: [{
                key: 'Color',
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Text Color', 'wpmozo-blocks-and-addons')
              }]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_common_components_index__WEBPACK_IMPORTED_MODULE_4__.WpmozoTypography, {
              TypographyKey: "textNormal",
              props: props
            })]
          }), 'hover' === textStyleType && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_common_components_index__WEBPACK_IMPORTED_MODULE_4__.WpmozoColorPicker, {
              ColorKey: "textHover",
              props: props,
              ColorTypes: [{
                key: 'Color',
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Text Color', 'wpmozo-blocks-and-addons')
              }]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_common_components_index__WEBPACK_IMPORTED_MODULE_4__.WpmozoTypography, {
              TypographyKey: "textHover",
              props: props
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_common_components_index__WEBPACK_IMPORTED_MODULE_4__.WpmozoAlignment, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Text Alignment', 'wpmozo-blocks-and-addons'),
          onChange: newValue => setAttributes({
            textAlign: newValue
          }),
          value: attributes.textAlign
        })]
      })]
    }, "styles")]
  });
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
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style */ "./src/blocks/separator/style.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);


/*const WPMozoEditorObj = wpmozo_bna_editor_object;*/

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
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("style", {
      children: (0,_style__WEBPACK_IMPORTED_MODULE_1__["default"])({
        attributes
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      ..._wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps.save({
        className: 'wpmozo-bna-separator'
      }),
      id: `block-${ID}`,
      children: ["line" === attributes.separatorType && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: `wpmozo-bna-separator-container ${position}`,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: "wpmozo-bna-line wpmozo-bna-line-before"
        }), "textSeparator" === attributes.lineUseWith && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: "wpmozo-bna-text-wrapper",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
            children: `${attributes.separatorText}`
          })
        }), "iconSeparator" === attributes.lineUseWith && true !== attributes.styleIcon && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: "wpmozo-bna-icon-wrapper",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("i", {
            className: attributes.separatorIcon
          })
        }), "iconSeparator" === attributes.lineUseWith && true === attributes.styleIcon && ('square' === attributes.iconShape || 'circle' === attributes.iconShape) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: "wpmozo-bna-icon-wrapper",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("i", {
            className: attributes.separatorIcon + ' wpmozo-bna-icon-' + attributes.iconShape + (true === attributes.enableShapeBorder ? ' wpmozo-bna-icon-shape-border' : '')
          })
        }), "iconSeparator" === attributes.lineUseWith && true === attributes.styleIcon && 'hexagon' === attributes.iconShape && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: "wpmozo-bna-icon-wrapper shape-hexagon",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            className: "hexagon" + (true === attributes.enableShapeBorder ? ' wpmozo-bna-border-hex' : ''),
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("i", {
              className: attributes.separatorIcon
            })
          })
        }), "imageSeparator" === attributes.lineUseWith && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img", {
          className: "wpmozo-bna-separator-image",
          src: attributes.separatorImage ? attributes.separatorImage : "WPMozoEditorObj.placeholderImg"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: "wpmozo-bna-line wpmozo-bna-line-after"
        })]
      }), "shadow" === attributes.separatorType && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "wpmozo-bna-shadow"
      })]
    })]
  });
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
/* harmony import */ var _common_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/utils.js */ "./src/common/utils.js");

const generateDynamicStyle = ({
  attributes,
  clientId
}) => {
  const {
      iconFontSize,
      separatorColor
    } = attributes,
    toConvertStyles = ['textNormal', 'textHover', 'content', 'layout'];
  let convertedStyle = (0,_common_utils_js__WEBPACK_IMPORTED_MODULE_0__.convertInlineStyleStr)(toConvertStyles, attributes);
  let styles = `#block-${attributes.ID}{`;
  styles += `
		.wpmozo-bna-text-wrapper {
			color : ${attributes.textNormalColor};
			${convertedStyle.textNormal}
		}
		.wpmozo-bna-text-wrapper:hover {
			color : ${attributes.textHoverColor};
			${convertedStyle.textHover}
		}
	`;
  if ('line' === attributes.separatorType) {
    styles += `
			.wpmozo-bna-line {
				border-top-width: ${attributes.separatorThickness}px;
				border-top-style: ${attributes.lineStyle};
			}
		`;
    if ('solid' === attributes.lineStyle && undefined === attributes.separatorColor) {
      styles += `
				.wpmozo-bna-line {
					border-top-width: ${attributes.separatorThickness}px;
					border-image-slice: 1;
					border-image-source: ${attributes.separatorGradient};
					border-top-style: ${attributes.lineStyle};
				}
			`;
    }
    if ('solid' !== attributes.lineStyle) {
      styles += `
				${attributes.shadowColor ? `.wpmozo-bna-line {
					border-top-color: ` + attributes.shadowColor + `;
				}` : ''}
			`;
    } else {
      styles += `
				${attributes.separatorColor ? `.wpmozo-bna-line {
					border-top-color: ` + attributes.separatorColor + `;
				}` : ''}
			`;
    }
    if ('iconSeparator' === attributes.lineUseWith) {
      styles += `
				${attributes.iconColor ? `.wpmozo-bna-icon-wrapper i {
					color: ` + attributes.iconColor + `;
				}` : ''}
			`;
      if (true === attributes.enableIconFontSize && true === attributes.styleIcon) {
        if ('hexagon' === attributes.iconShape) {
          if (true === attributes.enableShapeBorder) {
            styles += `
							${attributes.shapeBorderColor ? `.wpmozo-bna-icon-wrapper .hexagon.wpmozo-bna-border-hex {
								box-shadow: inset 2px 0px 0px 0px ` + attributes.shapeBorderColor + `, inset -2px 0px 0px 0px ` + attributes.shapeBorderColor + `;
							}` : ''}
							.wpmozo-bna-icon-wrapper .hexagon.wpmozo-bna-border-hex:after {
								${attributes.shapeBorderColor ? `
									border-right: 2px solid ` + attributes.shapeBorderColor + `;
									border-bottom: 2px solid ` + attributes.shapeBorderColor + `;` : ''}
								transform: rotate(45deg) skew(-15.8deg, -15.8deg) translate(72%, 27%);
								width: 55%;
								height: 100%;
							}
							.wpmozo-bna-icon-wrapper .hexagon.wpmozo-bna-border-hex:before {
								${attributes.shapeBorderColor ? `
									border-top: 2px solid ` + attributes.shapeBorderColor + `;
									border-left: 2px solid ` + attributes.shapeBorderColor + `;` : ''}
								transform: rotate(45deg) skew(-15.8deg, -15.8deg) translate(-27%, -72%);
								width: 55%;
								height: 100%;
							}
						`;
          } else {
            styles += `
							.wpmozo-bna-icon-wrapper .hexagon:after {
								transform: rotate(45deg) skew(-16deg, -16deg) translate(72%, 27%);
								width: 55%;
							}
							.wpmozo-bna-icon-wrapper .hexagon:before {
								transform: rotate(45deg) skew(-16deg, -16deg) translate(-27%, -72%);
								width: 55%;
							}
						`;
          }
          styles += `
						${attributes.iconFontSize ? `.wpmozo-bna-icon-wrapper {
							width: calc(${attributes.iconFontSize}px + ${attributes.iconFontSize / 1.15}px);
						}
						.wpmozo-bna-icon-wrapper i {
							font-size: ` + attributes.iconFontSize + `px;
						}` : ''}
						${attributes.shapeBackground ? `.wpmozo-bna-icon-wrapper .hexagon,
						.wpmozo-bna-icon-wrapper .hexagon:before,
						.wpmozo-bna-icon-wrapper .hexagon:after {
							background-color: ` + attributes.shapeBackground + `;
						}` : ''}
					`;
        } else {
          if (true === attributes.enableShapeBorder) {
            styles += `
							.wpmozo-bna-icon-wrapper i {
								${attributes.shapeBorderColor ? `border: 2px solid ` + attributes.shapeBorderColor + `;` : ''}
								${attributes.iconFontSize ? `font-size: ` + attributes.iconFontSize + `px;` : ''}
							}
						`;
          }
          styles += `
						.wpmozo-bna-icon-wrapper i {
							${attributes.iconFontSize ? `font-size: ` + attributes.iconFontSize + `px;` : ''}
							${attributes.shapeBackground ? `background-color: ` + attributes.shapeBackground + `;` : ''}
						}
					`;
        }
      } else if (true === attributes.enableIconFontSize && true !== attributes.styleIcon) {
        styles += `
					${attributes.iconFontSize ? `.wpmozo-bna-icon-wrapper i { font-size: ` + attributes.iconFontSize + `px; }` : ''}
				`;
      } else if (true !== attributes.enableIconFontSize && true === attributes.styleIcon) {
        if ('hexagon' === attributes.iconShape) {
          if (true === attributes.enableShapeBorder) {
            styles += `
							.wpmozo-bna-icon-wrapper .hexagon.wpmozo-bna-border-hex {
								${attributes.shapeBorderColor ? `
									border-left: 2px solid ` + attributes.shapeBorderColor + `;
									border-right: 2px solid ` + attributes.shapeBorderColor + `;` : ''}
							}
							.wpmozo-bna-icon-wrapper .hexagon.wpmozo-bna-border-hex:after {
								${attributes.shapeBorderColor ? `
									border-right: 2px solid ` + attributes.shapeBorderColor + `;
									border-bottom: 2px solid ` + attributes.shapeBorderColor + `;` : ''}
								transform: rotate(45deg) skew(-13deg, -13deg) translate(57%, 19%);
								width: calc(55% + 4px);
								height: calc(100% + 4px);
							}
							.wpmozo-bna-icon-wrapper .hexagon.wpmozo-bna-border-hex:before {
								${attributes.shapeBorderColor ? `
									border-top: 2px solid ` + attributes.shapeBorderColor + `;
								border-left: 2px solid ` + attributes.shapeBorderColor + `;` : ''}
								transform: rotate(45deg) skew(-13deg, -13deg) translate(-28%, -65%);
								width: calc(55% + 4px);
								height: calc(100% + 4px);
							}
						`;
          } else {
            styles += `
							.wpmozo-bna-icon-wrapper .hexagon:before {
								transform: rotate(45deg) skew(-16deg, -16deg) translate(-27%, -72%);
								width: 55%;
							}
							.wpmozo-bna-icon-wrapper .hexagon:after {
								transform: rotate(45deg) skew(-16deg, -16deg) translate(72%, 27%);
								width: 55%;
							}
						`;
          }
          styles += `
						.wpmozo-bna-icon-wrapper {
							width: 72px;
						}
						${attributes.shapeBackground ? `.wpmozo-bna-icon-wrapper .hexagon,
						.wpmozo-bna-icon-wrapper .hexagon:before,
						.wpmozo-bna-icon-wrapper .hexagon:after {
							background-color: ` + attributes.shapeBackground + `;
						}` : ''}
					`;
        } else {
          if (true === attributes.enableShapeBorder) {
            styles += `
							${attributes.shapeBorderColor ? `.wpmozo-bna-icon-wrapper .wpmozo-bna-icon-square.wpmozo-bna-icon-shape-border,
							.wpmozo-bna-icon-wrapper .wpmozo-bna-icon-circle.wpmozo-bna-icon-shape-border {
								border: 2px solid ` + attributes.shapeBorderColor + `;
							}` : ''}
						`;
          }
          styles += `
						${attributes.shapeBackground ? `.wpmozo-bna-icon-wrapper .wpmozo-bna-icon-square,
						.wpmozo-bna-icon-wrapper .wpmozo-bna-icon-circle {
							background-color: ` + attributes.shapeBackground + `;
						}` : ''}
					`;
        }
      }
    }
    if ('imageSeparator' === attributes.lineUseWith) {
      styles += `
				${attributes.imageWidth ? `.wpmozo-bna-separator-image {
					width: ` + attributes.imageWidth + `px;
				}` : ''}
			`;
    }
  }
  if ('shadow' === attributes.separatorType) {
    styles += ` .wpmozo-bna-shadow { ${attributes.separatorThickness ? `height: ` + attributes.separatorThickness + `px;` : ''} ${attributes.shadowColor ? `background: radial-gradient(ellipse at 50% -50%, ` + attributes.shadowColor + ` 0%, rgba(0, 0, 0, 0) 75%), repeat scroll;` : ''} }
			${attributes.contentAlign ? `.wpmozo-bna-interactive-image-card-content {
				text-align: ` + attributes.contentAlign + `;}` : ''} `;
  }
  styles += `}`;
  return styles;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generateDynamicStyle);

/***/ }),

/***/ "./src/blocks/separator/style.scss":
/*!*****************************************!*\
  !*** ./src/blocks/separator/style.scss ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/common/components/index.js":
/*!****************************************!*\
  !*** ./src/common/components/index.js ***!
  \****************************************/
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
/* harmony import */ var _wpmozo_typography_wpmozo_typography__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wpmozo-typography/wpmozo-typography */ "./src/common/components/wpmozo-typography/wpmozo-typography.js");
/* harmony import */ var _wpmozo_colorpicker_wpmozo_colorpicker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wpmozo-colorpicker/wpmozo-colorpicker */ "./src/common/components/wpmozo-colorpicker/wpmozo-colorpicker.js");
/* harmony import */ var _wpmozo_dimensions_wpmozo_dimensions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./wpmozo-dimensions/wpmozo-dimensions */ "./src/common/components/wpmozo-dimensions/wpmozo-dimensions.js");
/* harmony import */ var _wpmozo_size_wpmozo_size__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./wpmozo-size/wpmozo-size */ "./src/common/components/wpmozo-size/wpmozo-size.js");
/* harmony import */ var _wpmozo_border_wpmozo_border__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./wpmozo-border/wpmozo-border */ "./src/common/components/wpmozo-border/wpmozo-border.js");
/* harmony import */ var _wpmozo_media_uploader_wpmozo_media_uploader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./wpmozo-media-uploader/wpmozo-media-uploader */ "./src/common/components/wpmozo-media-uploader/wpmozo-media-uploader.js");
/* harmony import */ var _wpmozo_iconpicker_wpmozo_iconpicker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./wpmozo-iconpicker/wpmozo-iconpicker */ "./src/common/components/wpmozo-iconpicker/wpmozo-iconpicker.js");
/* harmony import */ var _wpmozo_alignment_wpmozo_alignment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./wpmozo-alignment/wpmozo-alignment */ "./src/common/components/wpmozo-alignment/wpmozo-alignment.js");
/* harmony import */ var _wpmozo_colorcombo_wpmozo_colorcombo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./wpmozo-colorcombo/wpmozo-colorcombo */ "./src/common/components/wpmozo-colorcombo/wpmozo-colorcombo.js");
/* harmony import */ var _wpmozo_range_size_wpmozo_range_size__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./wpmozo-range-size/wpmozo-range-size */ "./src/common/components/wpmozo-range-size/wpmozo-range-size.js");












/***/ }),

/***/ "./src/common/components/wpmozo-alignment/style.scss":
/*!***********************************************************!*\
  !*** ./src/common/components/wpmozo-alignment/style.scss ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/common/components/wpmozo-alignment/wpmozo-alignment.js":
/*!********************************************************************!*\
  !*** ./src/common/components/wpmozo-alignment/wpmozo-alignment.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./src/common/components/wpmozo-alignment/style.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




const WpmozoAlignment = args => {
  const {
    alignmentKey,
    type = 'horizontal',
    value,
    onChange,
    label = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Alignment', 'wpmozo-blocks-and-addons'),
    className = `wpmozo-alignment-compo ${type}`,
    alignments
  } = args;
  const horizontalAlignments = {
    left: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalToggleGroupControlOptionIcon, {
      value: "left",
      icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Icon, {
        icon: "editor-alignleft"
      }),
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Left', 'wpmozo-blocks-and-addons')
    }, `wpmozo-alignment-left-${alignmentKey}`),
    center: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalToggleGroupControlOptionIcon, {
      value: "center",
      icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Icon, {
        icon: "editor-aligncenter"
      }),
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Center', 'wpmozo-blocks-and-addons')
    }, `wpmozo-alignment-center-${alignmentKey}`),
    right: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalToggleGroupControlOptionIcon, {
      value: "right",
      icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Icon, {
        icon: "editor-alignright"
      }),
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Right', 'wpmozo-blocks-and-addons')
    }, `wpmozo-alignment-right-${alignmentKey}`)
  };
  const verticalAlignments = {
    top: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalToggleGroupControlOptionIcon, {
      value: "top",
      icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SVG, {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
          d: "M9 20h6V9H9v11zM4 4v1.5h16V4H4z"
        })
      }),
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Top', 'wpmozo-blocks-and-addons')
    }, `wpmozo-alignment-top-${alignmentKey}`),
    center: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalToggleGroupControlOptionIcon, {
      value: "center",
      icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SVG, {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
          d: "M20 11h-5V4H9v7H4v1.5h5V20h6v-7.5h5z"
        })
      }),
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Center', 'wpmozo-blocks-and-addons')
    }, `wpmozo-alignment-center-${alignmentKey}`),
    bottom: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalToggleGroupControlOptionIcon, {
      value: "bottom",
      icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SVG, {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
          d: "M15 4H9v11h6V4zM4 18.5V20h16v-1.5H4z"
        })
      }),
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Bottom', 'wpmozo-blocks-and-addons')
    }, `wpmozo-alignment-bottom-${alignmentKey}`)
  };
  const alignmentOptions = type === 'vertical' ? verticalAlignments : horizontalAlignments;
  const renderAlignments = alignments ? alignments.map(key => alignmentOptions[key]) : Object.values(alignmentOptions);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalToggleGroupControl, {
    className: className,
    onChange: onChange,
    label: label,
    isDeselectable: true,
    isBlock: true,
    value: value,
    children: renderAlignments
  }, `wpmozo-alignment-${type}-${alignmentKey}`);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WpmozoAlignment);

/***/ }),

/***/ "./src/common/components/wpmozo-border/wpmozo-border.js":
/*!**************************************************************!*\
  !*** ./src/common/components/wpmozo-border/wpmozo-border.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




const WpmozoBorder = args => {
  const {
    BorderKey,
    props
  } = args;
  const preAttributes = props.preAttributes;
  const label = args.label || (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Border', 'wpmozo-blocks-and-addons');
  let BorderTypes = args.BorderTypes || null;
  const setValue = (styleType, value) => {
    if (value === null && typeof preAttributes[BorderKey + styleType] !== 'undefined' && preAttributes[BorderKey + styleType].hasOwnProperty('default')) {
      value = preAttributes[BorderKey + styleType].default;
    }
    return value !== null ? value : '';
  };
  const borderSetValue = (styleType, value = null) => {
    const newValue = setValue(styleType, value);
    props.setAttributes({
      [BorderKey + styleType]: newValue
    });
    if (typeof args.afterOnChange === 'function') {
      args.afterOnChange(props);
    }
  };
  const onChange = args.onChange || borderSetValue;
  const resetAll = () => {
    if (BorderTypes === null) {
      BorderTypes = {
        border: '',
        borderRadius: ''
      };
    }
    for (const type in BorderTypes) {
      const value = setValue(type, null);
      props.setAttributes({
        [BorderKey + type]: value
      });
    }
    if (typeof args.afterOnChange === 'function') {
      args.afterOnChange(props);
    }
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalToolsPanel, {
    label: label,
    resetAll: resetAll,
    children: [(BorderTypes === null || BorderTypes.hasOwnProperty('border')) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalToolsPanelItem, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Border', 'wpmozo-blocks-and-addons'),
      hasValue: () => true,
      isShownByDefault: true,
      onDeselect: () => borderSetValue('border'),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalBorderBoxControl, {
        label: "Border",
        value: props.attributes[BorderKey + 'border'],
        onChange: NewBorder => onChange('border', NewBorder)
      })
    }), (BorderTypes === null || BorderTypes.hasOwnProperty('radius')) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalToolsPanelItem, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Radius', 'wpmozo-blocks-and-addons'),
      hasValue: () => true,
      isShownByDefault: true,
      onDeselect: () => borderSetValue('borderRadius'),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.__experimentalBorderRadiusControl, {
        label: "Radius",
        values: props.attributes[BorderKey + 'borderRadius'],
        onChange: NewRadius => onChange('borderRadius', NewRadius)
      })
    })]
  }, `wpmozo-border-panel-${BorderKey}`);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WpmozoBorder);

/***/ }),

/***/ "./src/common/components/wpmozo-colorcombo/wpmozo-colorcombo.js":
/*!**********************************************************************!*\
  !*** ./src/common/components/wpmozo-colorcombo/wpmozo-colorcombo.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wpmozo_colorpicker_wpmozo_colorpicker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../wpmozo-colorpicker/wpmozo-colorpicker */ "./src/common/components/wpmozo-colorpicker/wpmozo-colorpicker.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);





const WpmozoColorCombo = args => {
  const [colorType, setColorType] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)('normal');
  const label = args.hasOwnProperty('label') ? args.label : '';
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.BaseControl, {
    label: label,
    className: "wpmozo-color-combo-wrap",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ButtonGroup, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
        className: "wpmozo-color-combo-type",
        isPressed: colorType === 'normal',
        onClick: () => setColorType('normal'),
        children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Normal', 'wpmozo-blocks-and-addons')
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
        className: "wpmozo-color-combo-type",
        isPressed: colorType === 'hover',
        onClick: () => setColorType('hover'),
        children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Hover', 'wpmozo-blocks-and-addons')
      })]
    }), colorType === 'normal' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wpmozo_colorpicker_wpmozo_colorpicker__WEBPACK_IMPORTED_MODULE_3__["default"], {
      ...args.normal
    }), colorType === 'hover' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wpmozo_colorpicker_wpmozo_colorpicker__WEBPACK_IMPORTED_MODULE_3__["default"], {
      ...args.hover
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WpmozoColorCombo);

/***/ }),

/***/ "./src/common/components/wpmozo-colorpicker/style.scss":
/*!*************************************************************!*\
  !*** ./src/common/components/wpmozo-colorpicker/style.scss ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/common/components/wpmozo-colorpicker/wpmozo-colorpicker.js":
/*!************************************************************************!*\
  !*** ./src/common/components/wpmozo-colorpicker/wpmozo-colorpicker.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.scss */ "./src/common/components/wpmozo-colorpicker/style.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);






const defaultGradientColor = 'linear-gradient(135deg,rgba(6,147,227,1) 0%,rgb(155,81,224) 100%)';
const WpmozoColorPicker = args => {
  const {
    ColorKey,
    ColorTypes,
    props,
    withToolPanel = true,
    label = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Color', 'wpmozo-blocks-and-addons')
  } = args;
  const preAttributes = props.preAttributes;
  const AllColors = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.__experimentalUseMultipleOriginColorsAndGradients)();
  const setValue = (styleType, value) => {
    if (value === null && typeof preAttributes[ColorKey + styleType] !== 'undefined' && preAttributes[ColorKey + styleType].hasOwnProperty('default')) {
      value = preAttributes[ColorKey + styleType].default;
    }
    return value !== null ? value : '';
  };
  const colorSetValue = (styleType, value = null) => {
    const updatedValue = setValue(styleType, value);
    props.setAttributes({
      [ColorKey + styleType]: updatedValue
    });
    if (args.afterOnChange) {
      args.afterOnChange(props);
    }
  };
  const onChange = args.onChange || colorSetValue;
  const ColorDropdown = (colorType, label, colorTypeObj) => {
    let _color = props.attributes[ColorKey + colorType];
    const fullKey = `${ColorKey}-${colorType}`;
    const colorPlateKey = `wpmozo-color-palette-${fullKey}`;
    const withGradient = colorTypeObj?.withGradient || false;
    const onlyGradient = colorTypeObj?.onlyGradient || false;
    if (_color === '' && args.default) {
      _color = args.default[colorType];
    }
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Dropdown, {
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
      }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Button, {
        onClick: onToggle,
        "aria-expanded": isOpen,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.ColorIndicator, {
          colorValue: _color
        }, `wpmozo-color-dropdown-indicator-${fullKey}`), label]
      }, `wpmozo-color-dropdown-button-${fullKey}`),
      renderContent: () => {
        if (!withGradient && !onlyGradient) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.ColorPalette, {
            colors: AllColors.colors,
            value: _color,
            onChange: newColor => onChange(colorType, newColor),
            enableAlpha: true
          }, colorPlateKey);
        } else if (withGradient) {
          let _colorSolid = props.attributes[ColorKey + colorType + 'Solid'] || '';
          let _colorGradient = props.attributes[ColorKey + colorType + 'Gradient'] || '';
          if (_colorSolid === '' && args.default) {
            _colorSolid = args.default[colorType + 'Solid'];
          }
          if (_colorGradient === '' && args.default) {
            _colorGradient = args.default[colorType + 'Gradient'];
          }
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.TabPanel, {
            className: "wpmozo-color-tabs",
            tabs: [{
              name: 'solid',
              title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Solid', 'wpmozo-blocks-and-addons')
            }, {
              name: 'gradient',
              title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Gradient', 'wpmozo-blocks-and-addons')
            }],
            children: tab => {
              if (tab.name === 'solid') {
                return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.ColorPalette, {
                  colors: AllColors.colors,
                  value: _colorSolid,
                  onChange: newColor => {
                    onChange(colorType, newColor);
                    onChange(colorType + 'Solid', newColor);
                    onChange(colorType + 'Gradient', defaultGradientColor);
                  },
                  enableAlpha: true
                });
              } else {
                return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.GradientPicker, {
                  gradients: AllColors.gradients,
                  value: _colorGradient,
                  onChange: newColor => {
                    onChange(colorType + 'Solid', '');
                    if (typeof newColor === 'undefined') {
                      onChange(colorType + 'Gradient', defaultGradientColor);
                      onChange(colorType, null);
                    } else {
                      onChange(colorType + 'Gradient', newColor);
                      onChange(colorType, newColor);
                    }
                  }
                });
              }
            }
          }, colorPlateKey);
        } else {
          const onlyGradientValue = _color || defaultGradientColor;
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.GradientPicker, {
            gradients: AllColors.gradients,
            value: onlyGradientValue,
            onChange: newColor => {
              onChange(colorType, typeof newColor === 'undefined' ? null : newColor);
            }
          }, colorPlateKey);
        }
      }
    }, `wpmozo-color-dropdown-container-${fullKey}`);
  };
  if (withToolPanel) {
    const Panels = ColorTypes.map(ct => {
      const fullKey = `${ColorKey}-${ct.key}`;
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.__experimentalToolsPanelItem, {
        label: ct.label,
        hasValue: () => true,
        isShownByDefault: true,
        onDeselect: () => colorSetValue(ct.key),
        children: ColorDropdown(ct.key, ct.label, ct)
      }, `wpmozo-color-tools-panel-item-${fullKey}`);
    });
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.__experimentalToolsPanel, {
      label: label,
      className: "wpmozo-color-tools-panel",
      resetAll: () => {
        ColorTypes.forEach(type => {
          const value = setValue(type.key, null);
          props.setAttributes({
            [ColorKey + type.key]: value
          });
        });
        if (args.afterOnChange) {
          args.afterOnChange(props);
        }
      },
      children: Panels
    }, `wpmozo-color-tools-panel-${ColorKey}`);
  } else {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
      children: ColorTypes.map(ct => {
        const colorType = ct.key;
        const fullKey = `${ColorKey}-${colorType}`;
        let _color = props.attributes[ColorKey + colorType] || '';
        if (_color === '' && args.default) {
          _color = args.default[colorType];
        }
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.ColorPalette, {
          colors: AllColors.colors,
          value: _color,
          onChange: newColor => onChange(colorType, newColor)
        }, `wpmozo-color-palette-${fullKey}`);
      })
    });
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WpmozoColorPicker);

/***/ }),

/***/ "./src/common/components/wpmozo-dimensions/wpmozo-dimensions.js":
/*!**********************************************************************!*\
  !*** ./src/common/components/wpmozo-dimensions/wpmozo-dimensions.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




const WpmozoDimensions = args => {
  const {
    DimensionKey,
    props
  } = args;
  const preAttributes = props.preAttributes;
  const label = args.label || (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Dimensions', 'wpmozo-blocks-and-addons');
  let DimensionsTypes = args.DimensionsTypes || null;
  const setValue = (styleType, value) => {
    if (value === null && typeof preAttributes[DimensionKey + styleType] !== 'undefined' && preAttributes[DimensionKey + styleType].hasOwnProperty('default')) {
      value = preAttributes[DimensionKey + styleType].default;
    }
    return value !== null ? value : '';
  };
  const dimensionsSetValue = (styleType, value = null) => {
    const newValue = setValue(styleType, value);
    props.setAttributes({
      [DimensionKey + styleType]: newValue
    });
    if (typeof args.afterOnChange === 'function') {
      args.afterOnChange(props);
    }
  };
  const onChange = args.onChange || dimensionsSetValue;
  const resetAll = () => {
    if (DimensionsTypes === null) {
      DimensionsTypes = {
        padding: '',
        margin: '',
        position: ''
      };
    }
    for (const type in DimensionsTypes) {
      const value = setValue(type, null);
      props.setAttributes({
        [DimensionKey + type]: value
      });
    }
    if (typeof args.afterOnChange === 'function') {
      args.afterOnChange(props);
    }
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalToolsPanel, {
    label: label,
    resetAll: resetAll,
    children: [(DimensionsTypes === null || DimensionsTypes.hasOwnProperty('padding')) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalToolsPanelItem, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Padding', 'wpmozo-blocks-and-addons'),
      hasValue: () => true,
      isShownByDefault: true,
      className: "tools-panel-item-spacing",
      onDeselect: () => dimensionsSetValue('padding'),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.__experimentalSpacingSizesControl, {
        label: "Padding",
        values: props.attributes[DimensionKey + 'padding'],
        onChange: NewPadding => onChange('padding', NewPadding)
      })
    }), (DimensionsTypes === null || DimensionsTypes.hasOwnProperty('margin')) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalToolsPanelItem, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Margin', 'wpmozo-blocks-and-addons'),
      hasValue: () => true,
      isShownByDefault: true,
      className: "tools-panel-item-spacing",
      onDeselect: () => dimensionsSetValue('margin'),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.__experimentalSpacingSizesControl, {
        label: "Margin",
        values: props.attributes[DimensionKey + 'margin'],
        onChange: NewMargin => onChange('margin', NewMargin)
      })
    }), (DimensionsTypes === null || DimensionsTypes.hasOwnProperty('position')) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalToolsPanelItem, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Position', 'wpmozo-blocks-and-addons'),
      hasValue: () => true,
      isShownByDefault: true,
      className: "tools-panel-item-spacing",
      onDeselect: () => dimensionsSetValue('position'),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.__experimentalSpacingSizesControl, {
        label: "Position",
        values: props.attributes[DimensionKey + 'position'],
        onChange: NewPosition => onChange('position', NewPosition)
      })
    })]
  }, `wpmozo-dimensions-panel-${DimensionKey}`);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WpmozoDimensions);

/***/ }),

/***/ "./src/common/components/wpmozo-iconpicker/style.scss":
/*!************************************************************!*\
  !*** ./src/common/components/wpmozo-iconpicker/style.scss ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/common/components/wpmozo-iconpicker/wpmozo-iconpicker.js":
/*!**********************************************************************!*\
  !*** ./src/common/components/wpmozo-iconpicker/wpmozo-iconpicker.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./src/common/components/wpmozo-iconpicker/style.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




const WpmozoIconpicker = args => {
  const options = wpmozo_bna_editor_object.icons;
  const {
    iconPickerKey,
    props,
    label
  } = args;
  const {
    attributes,
    setAttributes
  } = props;
  const value = args.value !== '' ? args.value : '';
  const icon = typeof attributes[iconPickerKey] !== 'undefined' && attributes[iconPickerKey] !== '' ? attributes[iconPickerKey] : 'fas fa-ban';
  const iconSetValue = (value = null) => {
    setAttributes({
      [iconPickerKey]: value
    });
    if (args.hasOwnProperty('afterOnChange')) {
      args.afterOnChange(props);
    }
  };
  const onChange = args.hasOwnProperty('onChange') ? args.onChange : iconSetValue;
  const renderItem = option => {
    const iconClass = option.item.value;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("span", {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("i", {
        className: iconClass
      }, `wpmozo-icon-el-${iconPickerKey}`), " ", option.item.label]
    }, `wpmozo-icon-span-${iconPickerKey}`);
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    className: "wpmozo-icon-picker",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.ComboboxControl, {
      label: label,
      value: value,
      allowReset: false,
      onChange: onChange,
      options: options,
      __experimentalRenderItem: renderItem
    }, `wpmozo-icon-combobox-${iconPickerKey}`), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      className: "wpmozo-icon-wraper",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("i", {
        className: icon
      })
    }, `wpmozo-icon-wrap-${iconPickerKey}`)]
  }, `wpmozo-icon-picker-${iconPickerKey}`);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WpmozoIconpicker);

/***/ }),

/***/ "./src/common/components/wpmozo-media-uploader/style.scss":
/*!****************************************************************!*\
  !*** ./src/common/components/wpmozo-media-uploader/style.scss ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/common/components/wpmozo-media-uploader/wpmozo-media-uploader.js":
/*!******************************************************************************!*\
  !*** ./src/common/components/wpmozo-media-uploader/wpmozo-media-uploader.js ***!
  \******************************************************************************/
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
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.scss */ "./src/common/components/wpmozo-media-uploader/style.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);






const WpmozoMediaUploader = ({
  props,
  attrKye,
  edit,
  select,
  allowedTypes,
  accept,
  imageSrc: customImageSrc,
  onSelect: customOnSelect
}) => {
  const editImage = edit || (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Edit Image", "wpmozo-blocks-and-addons");
  const selectImage = select || (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Select Image", "wpmozo-blocks-and-addons");
  const allowed = allowedTypes || ["image"];
  const accepted = accept || "image/*";
  const imageSrc = customImageSrc || props.attributes[attrKye];
  const defaultOnSelect = media => {
    props.setAttributes({
      [attrKye]: media.url
    });
  };
  const handleSelect = media => {
    if (customOnSelect) {
      customOnSelect(media);
    } else {
      defaultOnSelect(media);
    }
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUploadCheck, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUpload, {
      onSelect: handleSelect,
      allowedTypes: allowed,
      accept: accepted,
      value: imageSrc,
      render: ({
        open
      }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "components-base-control wpmozo-media-uploader-wrap",
          children: [imageSrc && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("img", {
            className: "wpmozo-media-uploader",
            src: imageSrc,
            alt: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Selected image", "wpmozo-blocks-and-addons")
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Button, {
            isPrimary: true,
            onClick: event => {
              event.stopPropagation();
              open();
            },
            children: imageSrc ? editImage : selectImage
          })]
        })
      })
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WpmozoMediaUploader);

/***/ }),

/***/ "./src/common/components/wpmozo-range-size/style.scss":
/*!************************************************************!*\
  !*** ./src/common/components/wpmozo-range-size/style.scss ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/common/components/wpmozo-range-size/wpmozo-range-size.js":
/*!**********************************************************************!*\
  !*** ./src/common/components/wpmozo-range-size/wpmozo-range-size.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.scss */ "./src/common/components/wpmozo-range-size/style.scss");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils.js */ "./src/common/utils.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);






const WpmozoRangeSize = args => {
  const {
    rangeSizeKey,
    props
  } = args;
  const preAttributes = props.preAttributes;
  const setValue = (valueType = 'value', value) => {
    if (valueType === 'value') {
      if (value === null && typeof preAttributes[rangeSizeKey] !== 'undefined' && preAttributes[rangeSizeKey].hasOwnProperty('default')) {
        value = preAttributes[rangeSizeKey].default;
      }
    } else {
      if (value === null && typeof preAttributes[rangeSizeKey + 'Unit'] !== 'undefined' && preAttributes[rangeSizeKey + 'Unit'].hasOwnProperty('default')) {
        value = preAttributes[rangeSizeKey + 'Unit'].default;
      }
    }
    return value !== null ? value : '';
  };
  const sizeSetValue = (valueType = 'value', value = null) => {
    value = setValue(valueType, value);
    if (valueType === 'value') {
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
  let unit = setValue('unit', props.attributes[rangeSizeKey + 'Unit']);
  let getRange = setValue('value', props.attributes[rangeSizeKey]);
  const defaultRange = !(0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.wpmozo_is_empty)(unit) && !(0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.wpmozo_is_empty)(getRange) ? parseFloat(getRange.replace(unit, '')) : 0;
  const [state, setState] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)({
    range: defaultRange
  });
  const updateColSpacingRange = val => {
    const unit = jQuery(`.wpmozo-range-size-${rangeSizeKey}-size .components-unit-control__select`).val();
    const _range = parseFloat(val.replace(unit, ''));
    setState({
      ...state,
      range: _range
    });
  };
  const onChange = args.hasOwnProperty('onChange') ? args.onChange : sizeSetValue;
  const rangeControl = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
    value: state.range,
    allowReset: false,
    withInputField: false,
    onChange: newSpacing => {
      const unit = jQuery(`.wpmozo-range-size-${rangeSizeKey}-size .components-unit-control__select`).val();
      const spacing = newSpacing + unit;
      sizeSetValue('value', spacing);
      updateColSpacingRange(spacing);
    }
  }, `wpmozo-range-size-${rangeSizeKey}-range`);
  const unitControl = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalUnitControl, {
    value: props.attributes[rangeSizeKey],
    className: `wpmozo-range-size-${rangeSizeKey}-size`,
    onChange: newSpacing => {
      const unit = jQuery(`.wpmozo-range-size-${rangeSizeKey}-size .components-unit-control__select`).val();
      sizeSetValue('value', newSpacing);
      sizeSetValue('unit', unit);
      updateColSpacingRange(newSpacing + unit);
    }
  }, `wpmozo-range-size-${rangeSizeKey}-size`);
  if (args.hasOwnProperty('withToolsPanel')) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalToolsPanel, {
      label: args.label,
      resetAll: () => {
        const sizeRange = setValue('value', null);
        updateColSpacingRange(sizeRange);
        sizeSetValue('value', null);
        sizeSetValue('unit', 'px');
      },
      className: `wpmozo-range-size${rangeSizeKey}-panel`,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalToolsPanelItem, {
        label: args.label,
        hasValue: () => true,
        isShownByDefault: true,
        onDeselect: () => {
          const sizeRange = setValue('value', null);
          updateColSpacingRange(sizeRange);
          sizeSetValue('value', null);
          sizeSetValue('unit', 'px');
        },
        className: `wpmozo-range-size-${rangeSizeKey}-panel-item`,
        children: [rangeControl, unitControl]
      }, `wpmozo-range-size-${rangeSizeKey}-panel-item`)
    }, `wpmozo-range-size${rangeSizeKey}-panel`);
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.BaseControl, {
    label: args.label,
    className: "wpmozo-range-size-basecontrol",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: "wpmozo-range-size-basecontrol-inner",
      children: [rangeControl, unitControl, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
        text: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Reset', 'wpmozo-blocks-and-addons'),
        variant: "secondary",
        onClick: () => {
          const sizeRange = setValue('value', null);
          updateColSpacingRange(sizeRange);
          sizeSetValue('value', null);
          sizeSetValue('unit', 'px');
        }
      })]
    }, `wpmozo-range-size-${rangeSizeKey}-inner`)
  }, `wpmozo-range-size-${rangeSizeKey}-basecontrol`);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WpmozoRangeSize);

/***/ }),

/***/ "./src/common/components/wpmozo-size/wpmozo-size.js":
/*!**********************************************************!*\
  !*** ./src/common/components/wpmozo-size/wpmozo-size.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



const WpmozoSize = args => {
  const {
    SizeKey,
    props
  } = args;
  const preAttributes = props.preAttributes;
  const label = args.label || (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Size', 'wpmozo-blocks-and-addons');
  let SizeTypes = args.SizeTypes || null;
  const setValue = (styleType, value) => {
    if (value === null && typeof preAttributes[SizeKey + styleType] !== 'undefined' && preAttributes[SizeKey + styleType].hasOwnProperty('default')) {
      value = preAttributes[SizeKey + styleType].default;
    }
    return value !== null ? value : '';
  };
  const sizeSetValue = (styleType, value = null) => {
    const newValue = setValue(styleType, value);
    props.setAttributes({
      [SizeKey + styleType]: newValue
    });
    if (typeof args.afterOnChange === 'function') {
      args.afterOnChange(props);
    }
  };
  const onChange = args.onChange || sizeSetValue;
  const resetAll = () => {
    if (SizeTypes === null) {
      SizeTypes = {
        width: '',
        height: ''
      };
    }
    for (const type in SizeTypes) {
      const value = setValue(type, null);
      props.setAttributes({
        [SizeKey + type]: value
      });
    }
    if (typeof args.afterOnChange === 'function') {
      args.afterOnChange(props);
    }
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalToolsPanel, {
    label: label,
    resetAll: resetAll,
    children: [(SizeTypes === null || SizeTypes.hasOwnProperty('width')) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalToolsPanelItem, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Width', 'wpmozo-blocks-and-addons'),
      hasValue: () => true,
      isShownByDefault: true,
      onDeselect: () => sizeSetValue('width'),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalUnitControl, {
        label: "Width",
        labelPosition: "side",
        value: props.attributes[SizeKey + 'width'],
        onChange: NewWidth => onChange('width', NewWidth)
      })
    }), (SizeTypes === null || SizeTypes.hasOwnProperty('height')) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalToolsPanelItem, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Height', 'wpmozo-blocks-and-addons'),
      hasValue: () => true,
      isShownByDefault: true,
      onDeselect: () => sizeSetValue('height'),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalUnitControl, {
        label: "Height",
        labelPosition: "side",
        value: props.attributes[SizeKey + 'height'],
        onChange: NewHeight => onChange('height', NewHeight)
      })
    })]
  }, `wpmozo-size-panel-${SizeKey}`);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WpmozoSize);

/***/ }),

/***/ "./src/common/components/wpmozo-typography/style.scss":
/*!************************************************************!*\
  !*** ./src/common/components/wpmozo-typography/style.scss ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/common/components/wpmozo-typography/wpmozo-typography.js":
/*!**********************************************************************!*\
  !*** ./src/common/components/wpmozo-typography/wpmozo-typography.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.scss */ "./src/common/components/wpmozo-typography/style.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);







const WpmozoTypography = args => {
  const {
    TypographyKey,
    props
  } = args;
  const preAttributes = props.preAttributes;
  const label = args.label || (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Typography', 'wpmozo-blocks-and-addons');
  let TypoTypes = args.TypoTypes || null;
  const setValue = (styleType, value) => {
    if (value === null && typeof preAttributes[TypographyKey + styleType] !== 'undefined' && preAttributes[TypographyKey + styleType].hasOwnProperty('default')) {
      value = preAttributes[TypographyKey + styleType].default;
    }
    return value !== null ? value : '';
  };
  const typoSetValue = (styleType, value = null) => {
    const val = setValue(styleType, value);
    props.setAttributes({
      [TypographyKey + styleType]: val
    });
    if (args.afterOnChange) {
      args.afterOnChange(props);
    }
  };
  const onChange = args.onChange || typoSetValue;

  // Font Appearance default value building
  let _FontAppearanceValues = {};
  let hasFontStyles = true;
  let hasFontWeights = true;
  if (!TypoTypes || TypoTypes.hasOwnProperty('FontAppearance')) {
    if (args.FontAppearance) {
      hasFontStyles = args.FontAppearance.hasFontStyles !== false;
      hasFontWeights = args.FontAppearance.hasFontWeights !== false;
    }
    if (hasFontStyles) {
      _FontAppearanceValues.fontStyle = props.attributes[TypographyKey + 'FontAppearance']?.fontStyle;
    }
    if (hasFontWeights) {
      _FontAppearanceValues.fontWeight = props.attributes[TypographyKey + 'FontAppearance']?.fontWeight;
    }
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalToolsPanel, {
    label: label,
    resetAll: () => {
      if (TypoTypes === null) {
        TypoTypes = {
          FontSize: '',
          LetterSpacing: '',
          Decoration: '',
          FontAppearance: {
            fontStyle: '',
            fontWeight: ''
          },
          LetterCase: '',
          LineHeight: ''
        };
      }
      for (const type in TypoTypes) {
        const resetValue = setValue(type, null);
        props.setAttributes({
          [TypographyKey + type]: resetValue
        });
      }
      if (args.afterOnChange) {
        args.afterOnChange(props);
      }
    },
    children: [(!TypoTypes || TypoTypes.FontSize !== undefined) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalToolsPanelItem, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Font Size', 'wpmozo-blocks-and-addons'),
      hasValue: () => true,
      isShownByDefault: true,
      onDeselect: () => typoSetValue('FontSize'),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.FontSizePicker, {
        value: props.attributes[TypographyKey + 'FontSize'],
        onChange: val => onChange('FontSize', val),
        __nextHasNoMarginBottom: true
      })
    }), (!TypoTypes || TypoTypes.FontAppearance !== undefined) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalToolsPanelItem, {
      className: "single-column",
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Appearance', 'wpmozo-blocks-and-addons'),
      hasValue: () => true,
      isShownByDefault: true,
      onDeselect: () => typoSetValue('FontAppearance'),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.__experimentalFontAppearanceControl, {
        hasFontStyles: hasFontStyles,
        hasFontWeights: hasFontWeights,
        value: _FontAppearanceValues,
        onChange: val => onChange('FontAppearance', val)
      }, "wpmozo-titleapp")
    }), (!TypoTypes || TypoTypes.LetterSpacing !== undefined) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalToolsPanelItem, {
      className: "single-column",
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Letter spacing', 'wpmozo-blocks-and-addons'),
      hasValue: () => true,
      isShownByDefault: true,
      onDeselect: () => typoSetValue('LetterSpacing'),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.__experimentalLetterSpacingControl, {
        value: props.attributes[TypographyKey + 'LetterSpacing'],
        onChange: val => onChange('LetterSpacing', val)
      })
    }), (!TypoTypes || TypoTypes.Decoration !== undefined) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalToolsPanelItem, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Decoration', 'wpmozo-blocks-and-addons'),
      hasValue: () => true,
      isShownByDefault: true,
      onDeselect: () => typoSetValue('Decoration'),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.__experimentalTextDecorationControl, {
        value: props.attributes[TypographyKey + 'Decoration'],
        onChange: val => onChange('Decoration', val)
      })
    }), (!TypoTypes || TypoTypes.LetterCase !== undefined) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalToolsPanelItem, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Letter case', 'wpmozo-blocks-and-addons'),
      hasValue: () => true,
      isShownByDefault: true,
      onDeselect: () => typoSetValue('LetterCase'),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.__experimentalTextTransformControl, {
        value: props.attributes[TypographyKey + 'LetterCase'],
        onChange: val => onChange('LetterCase', val)
      })
    }), (!TypoTypes || TypoTypes.LineHeight !== undefined) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalToolsPanelItem, {
      className: "single-column",
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Line Height', 'wpmozo-blocks-and-addons'),
      hasValue: () => true,
      isShownByDefault: true,
      onDeselect: () => typoSetValue('LineHeight'),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.LineHeightControl, {
        value: props.attributes[TypographyKey + 'LineHeight'],
        onChange: val => onChange('LineHeight', val),
        __nextHasNoMarginBottom: true
      })
    })]
  }, `wpmozo-typography-panel-${TypographyKey}`);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__.compose)()(WpmozoTypography));

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

/***/ "@wordpress/compose":
/*!*********************************!*\
  !*** external ["wp","compose"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["compose"];

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
/******/ 			"blocks/separator/index": 0,
/******/ 			"blocks/before-after-slider/style-index": 0,
/******/ 			"blocks/separator/style-index": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["blocks/before-after-slider/style-index","blocks/separator/style-index"], () => (__webpack_require__("./src/blocks/separator/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map