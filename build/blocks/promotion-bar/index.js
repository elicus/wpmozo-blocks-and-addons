<<<<<<< HEAD
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/promotion-bar/block.json":
/*!*********************************************!*\
  !*** ./src/blocks/promotion-bar/block.json ***!
  \*********************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"wpmozo/promotion-bar","version":"0.1.0","title":"Promotion Bar","category":"wpmozo","icon":"smiley","description":"The Promotion Bar helps you create eye-catching banners with customizable countdown timer.","example":{},"supports":{"html":false,"customClassName":false},"attributes":{"ID":{"type":"string"},"className":{"type":"string"},"dateTime":{"type":"string"},"dateTimeUTC":{"type":"string"},"dateTimeTimestamp":{"type":"number"},"title":{"type":"string","default":"Your title goes here."},"titleLevel":{"type":"string","default":"h2"},"hideTitle":{"type":"boolean","default":false},"titleColor":{"type":"string"},"titleFontSize":{"type":"string","default":"26px"},"titleLetterSpacing":{"type":"string"},"titleDecoration":{"type":"string"},"titleLetterCase":{"type":"string"},"titleLineHeight":{"type":"string"},"titleFontAppearance":{"type":"object","default":{"fontStyle":"","fontWeight":""}},"titleFontStyle":{"type":"string"},"titleFontWeight":{"type":"string"},"titleHoverColor":{"type":"string"},"titleHoverFontSize":{"type":"string","default":"26px"},"titleHoverLetterSpacing":{"type":"string"},"titleHoverDecoration":{"type":"string"},"titleHoverLetterCase":{"type":"string"},"titleHoverLineHeight":{"type":"string"},"titleHoverFontAppearance":{"type":"object","default":{"fontStyle":"","fontWeight":""}},"titleHoverFontStyle":{"type":"string"},"titleHoverFontWeight":{"type":"string"},"description":{"type":"string"},"descriptionColor":{"type":"string"},"descriptionFontSize":{"type":"string"},"descriptionLetterSpacing":{"type":"string"},"descriptionDecoration":{"type":"string"},"descriptionLetterCase":{"type":"string"},"descriptionLineHeight":{"type":"string"},"descriptionFontAppearance":{"type":"object","default":{"fontStyle":"","fontWeight":""}},"descriptionFontStyle":{"type":"string"},"descriptionFontWeight":{"type":"string"},"descriptionHoverColor":{"type":"string"},"descriptionHoverFontSize":{"type":"string"},"descriptionHoverLetterSpacing":{"type":"string"},"descriptionHoverDecoration":{"type":"string"},"descriptionHoverLetterCase":{"type":"string"},"descriptionHoverLineHeight":{"type":"string"},"descriptionHoverFontAppearance":{"type":"object","default":{"fontStyle":"","fontWeight":""}},"descriptionHoverFontStyle":{"type":"string"},"descriptionHoverFontWeight":{"type":"string"},"showImage":{"type":"boolean","default":false},"image":{"type":"string","default":""},"imageAlt":{"type":"string","default":""},"imagepadding":{"type":"object"},"imageEnableCustomSize":{"type":"boolean","default":false},"imageMinWidth":{"type":"number","default":100},"imageMaxWidth":{"type":"number"},"imageborder":{"type":"object"},"imageborderRadius":{"type":"string"},"showButton":{"type":"boolean","default":true},"buttonText":{"type":"string","default":"Get the deal"},"buttonUrl":{"type":"string","default":"#"},"buttonLinkTarget":{"type":"string","default":"same"},"buttonBackground":{"type":"string","default":""},"buttonBGGradient":{"type":"string"},"buttonUseIcon":{"type":"boolean","default":true},"buttonIcon":{"type":"string","default":"fas fa-arrow-right"},"buttonIconPosition":{"type":"string","default":"after"},"buttonIconOnHover":{"type":"boolean","default":false},"buttonpadding":{"type":"object","default":{"top":"10px","right":"20px","bottom":"10px","left":"20px"}},"buttonmargin":{"type":"object"},"buttonborder":{"type":"object","default":{"width":"2px","style":"solid","color":"#313131"}},"buttonborderRadius":{"type":"string","default":"3px"},"buttonColor":{"type":"string"},"buttonFontSize":{"type":"string"},"buttonLetterSpacing":{"type":"string"},"buttonDecoration":{"type":"string"},"buttonLetterCase":{"type":"string"},"buttonLineHeight":{"type":"string"},"buttonFontAppearance":{"type":"object","default":{"fontStyle":"","fontWeight":""}},"buttonFontStyle":{"type":"string"},"buttonFontWeight":{"type":"string"},"buttonHoverBackground":{"type":"string","default":""},"buttonHoverBGGradient":{"type":"string"},"buttonHoverborder":{"type":"object"},"buttonHoverborderRadius":{"type":"string"},"buttonHoverColor":{"type":"string"},"buttonHoverFontSize":{"type":"string"},"buttonHoverLetterSpacing":{"type":"string"},"buttonHoverDecoration":{"type":"string"},"buttonHoverLetterCase":{"type":"string"},"buttonHoverLineHeight":{"type":"string"},"buttonHoverFontAppearance":{"type":"object","default":{"fontStyle":"","fontWeight":""}},"buttonHoverFontStyle":{"type":"string"},"buttonHoverFontWeight":{"type":"string"},"layout":{"type":"string","default":"layout1"},"hideDays":{"type":"boolean","default":false},"displayLabel":{"type":"string","default":"full"},"stackLabel":{"type":"string","default":true},"contentBoxAlign":{"type":"string"},"contentBoxWidth":{"type":"number","default":50},"timerBoxAlign":{"type":"string"},"timerBoxBackground":{"type":"string","default":""},"timerBoxBGGradient":{"type":"string"},"timerBoxpadding":{"type":"object","default":{"top":"10px","right":"5px","bottom":"10px","left":"5px"}},"timerBoxmargin":{"type":"object","default":{"top":"5px","right":"5px","bottom":"5px","left":"5px"}},"timerBoxborder":{"type":"object"},"timerBoxborderRadius":{"type":"string"},"digitsBackgroundColor":{"type":"string"},"digitspadding":{"type":"object"},"digitsmargin":{"type":"object"},"digitsborder":{"type":"object"},"digitsborderRadius":{"type":"string"},"digitsColor":{"type":"string"},"digitsFontSize":{"type":"string"},"digitsLetterSpacing":{"type":"string"},"digitsDecoration":{"type":"string"},"digitsLetterCase":{"type":"string"},"digitsLineHeight":{"type":"string"},"digitsFontAppearance":{"type":"object","default":{"fontStyle":"","fontWeight":""}},"digitsFontStyle":{"type":"string"},"digitsFontWeight":{"type":"string"},"digitsBoxWidth":{"type":"number","default":100},"labelsBackgroundColor":{"type":"string"},"labelspadding":{"type":"object"},"labelsmargin":{"type":"object"},"labelsborder":{"type":"object"},"labelsborderRadius":{"type":"string"},"labelsColor":{"type":"string"},"labelsFontSize":{"type":"string"},"labelsLetterSpacing":{"type":"string"},"labelsDecoration":{"type":"string"},"labelsLetterCase":{"type":"string"},"labelsLineHeight":{"type":"string"},"labelsFontAppearance":{"type":"object","default":{"fontStyle":"","fontWeight":""}},"labelsFontStyle":{"type":"string"},"labelsFontWeight":{"type":"string"},"showSeparator":{"type":"boolean","default":false},"separatorText":{"type":"string","default":":"},"separatorColor":{"type":"string"},"separatorFontSize":{"type":"string"},"separatorLetterSpacing":{"type":"string"},"separatorDecoration":{"type":"string"},"separatorLetterCase":{"type":"string"},"separatorLineHeight":{"type":"string"},"separatorFontAppearance":{"type":"object","default":{"fontStyle":"","fontWeight":""}},"separatorFontStyle":{"type":"string"},"separatorFontWeight":{"type":"string"}},"textdomain":"wpmozo-blocks-and-addons","editorScript":"file:./index.js","style":"file:./style-index.css","script":["file:./script.js"]}');

/***/ }),

/***/ "./src/blocks/promotion-bar/edit.js":
/*!******************************************!*\
  !*** ./src/blocks/promotion-bar/edit.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _inspector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inspector */ "./src/blocks/promotion-bar/inspector.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style */ "./src/blocks/promotion-bar/style.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);





/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */


const Edit = props => {
  var _attributes$layout, _attributes$displayLa, _attributes$hideDays;
  const {
    attributes,
    setAttributes,
    clientId
  } = props;

  // Ensure ID is set once (no render-time mutation).
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (!attributes.ID && clientId) {
      setAttributes({
        ID: clientId
      });
    }
  }, [clientId]); // eslint-disable-line react-hooks/exhaustive-deps.

  const layout = (_attributes$layout = attributes.layout) !== null && _attributes$layout !== void 0 ? _attributes$layout : 'layout1';
  const displayLabel = (_attributes$displayLa = attributes.displayLabel) !== null && _attributes$displayLa !== void 0 ? _attributes$displayLa : 'full';
  const hideDays = (_attributes$hideDays = attributes.hideDays) !== null && _attributes$hideDays !== void 0 ? _attributes$hideDays : false;

  // Render image.
  let $image = '';
  if (attributes.showImage && '' !== attributes.image) {
    $image = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
      className: "wpmozo-image-wrap",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("img", {
        src: attributes.image,
        alt: attributes.imageAlt,
        className: "wpmozo-promotion-bar-image"
      })
    });
  }

  // Render title and description.
  let $title = '';
  if (attributes.title && '' !== attributes.title) {
    $title = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
      className: "wpmozo-pb-title",
      tagName: attributes.titleLevel,
      value: attributes.title,
      onChange: newValue => setAttributes({
        title: newValue
      }),
      placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Your title goes here', 'wpmozo-blocks-and-addons')
    });
  }
  let $description = '';
  if (attributes.description && '' !== attributes.description) {
    $description = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
      className: "wpmozo-pb-desc",
      tagName: "div",
      value: attributes.description,
      onChange: newValue => setAttributes({
        description: newValue
      })
    });
  }
  let $button = '';
  if (attributes.showButton && attributes.buttonUrl) {
    let $buttonIcon = '';
    if (attributes.buttonUseIcon && attributes.buttonIcon) {
      $buttonIcon = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("i", {
        className: 'wpmozo-icon ' + attributes.buttonIcon
      });
    }
    $button = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
      className: "wpmozo-button-wrap",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("a", {
        href: "javascript:void(0)",
        target: 'external' === attributes.buttonLinkTarget ? '_blank' : false,
        className: ['wpmozo-button', 'wpmozo_promotion_bar_button', attributes.buttonUseIcon && attributes.buttonIconOnHover ? 'wpmozo-icon-on-hover' : '', attributes.buttonUseIcon && 'before' === attributes.buttonIconPosition ? 'wpmozo-icon-at-before' : 'wpmozo-icon-at-after'].join(" "),
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
          className: "wpmozo-btn-text",
          children: attributes.buttonText && (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Get the deal', 'wpmozo-blocks-and-addons')
        }), $buttonIcon]
      })
    });
  }
  let $separator = '';
  if (attributes.showSeparator) {
    var _attributes$separator;
    $separator = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
      class: "wpmozo-pb-separator",
      children: (_attributes$separator = attributes.separatorText) !== null && _attributes$separator !== void 0 ? _attributes$separator : ':'
    });
  }

  // List of labels.
  const labels = {
    days: {
      full: 'Days',
      short: 'Days',
      single: 'D'
    },
    hours: {
      full: 'Hours',
      short: 'Hrs',
      single: 'H'
    },
    minutes: {
      full: 'Minutes',
      short: 'Min',
      single: 'M'
    },
    seconds: {
      full: 'Seconds',
      short: 'Sec',
      single: 'S'
    }
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_inspector__WEBPACK_IMPORTED_MODULE_3__["default"], {
      attributes: attributes,
      setAttributes: setAttributes
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("style", {
      children: (0,_style__WEBPACK_IMPORTED_MODULE_4__["default"])({
        attributes,
        clientId
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
      ...(0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)(),
      id: `block-${attributes.ID}`,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "wpmozo-promotion-bar-wrap " + layout,
        "data-timestamp": attributes.dateTimeTimestamp,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "wpmozo-promotion-bar-inner",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            className: "wpmozo-promotion-bar-content",
            children: [$image, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              className: "wpmozo-promotion-bar-content-inner",
              children: [$title, $description]
            }), 'layout2' === layout ? $button : '']
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            className: "wpmozo-promotion-bar-timer",
            children: [false === hideDays ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              className: "wpmozo-pb-timer-box wpmozo-pb-days",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                className: "wpmozo-pb-number",
                children: "00"
              }), 'none' !== displayLabel ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                className: "wpmozo-pb-label",
                children: labels.days[displayLabel]
              }) : '']
            }) : '', false === hideDays ? $separator : '', /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              className: "wpmozo-pb-timer-box wpmozo-pb-hours",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                className: "wpmozo-pb-number",
                children: "00"
              }), 'none' !== displayLabel ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                className: "wpmozo-pb-label",
                children: labels.hours[displayLabel]
              }) : '']
            }), $separator, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              className: "wpmozo-pb-timer-box wpmozo-pb-minutes",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                className: "wpmozo-pb-number",
                children: "00"
              }), 'none' !== displayLabel ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                className: "wpmozo-pb-label",
                children: labels.minutes[displayLabel]
              }) : '']
            }), $separator, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              className: "wpmozo-pb-timer-box wpmozo-pb-seconds",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                className: "wpmozo-pb-number",
                children: "00"
              }), 'none' !== displayLabel ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                className: "wpmozo-pb-label",
                children: labels.seconds[displayLabel]
              }) : '']
            })]
          }), 'layout2' !== layout ? $button : '']
        })
      })
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Edit);

/***/ }),

/***/ "./src/blocks/promotion-bar/icon.js":
/*!******************************************!*\
  !*** ./src/blocks/promotion-bar/icon.js ***!
  \******************************************/
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
  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    fill: "#000",
    d: "M928 170.667h-21.333c-4.267-89.6-78.933-160-170.667-160h-448c-91.733 0-166.4 70.4-170.667 160h-21.333c-46.933 0-85.333 38.4-85.333 85.333v192c0 46.933 38.4 85.333 85.333 85.333h21.333v309.333c0 93.867 76.8 170.667 170.667 170.667h448c93.867 0 170.667-76.8 170.667-170.667v-309.333h21.333c46.933 0 85.333-38.4 85.333-85.333v-192c0-46.933-38.4-85.333-85.333-85.333zM288 53.333h448c68.267 0 123.733 51.2 128 117.333h-704c6.4-66.133 59.733-117.333 128-117.333zM864 842.667c0 70.4-57.6 128-128 128h-448c-70.4 0-128-57.6-128-128v-309.333h704v309.333zM970.667 448c0 23.467-19.2 42.667-42.667 42.667h-832c-23.467 0-42.667-19.2-42.667-42.667v-192c0-23.467 19.2-42.667 42.667-42.667h832c23.467 0 42.667 19.2 42.667 42.667v192z"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    fill: "#000",
    d: "M501.333 326.4h-341.333c-12.8 0-21.333-8.533-21.333-21.333v0c0-12.8 8.533-21.333 21.333-21.333h341.333c12.8 0 21.333 8.533 21.333 21.333v0c0 10.667-8.533 21.333-21.333 21.333z"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    fill: "#000",
    d: "M416 422.4h-256c-12.8 0-21.333-8.533-21.333-21.333v0c0-12.8 8.533-21.333 21.333-21.333h256c12.8 0 21.333 8.533 21.333 21.333v0c0 10.667-8.533 21.333-21.333 21.333z"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    fill: "#000",
    d: "M844.8 394.667h-128c-23.467 0-42.667-19.2-42.667-42.667v0c0-23.467 19.2-42.667 42.667-42.667h128c23.467 0 42.667 19.2 42.667 42.667v0c0 23.467-19.2 42.667-42.667 42.667z"
  })]
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Icon);

/***/ }),

/***/ "./src/blocks/promotion-bar/index.js":
/*!*******************************************!*\
  !*** ./src/blocks/promotion-bar/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block.json */ "./src/blocks/promotion-bar/block.json");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/blocks/promotion-bar/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/blocks/promotion-bar/save.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./icon */ "./src/blocks/promotion-bar/icon.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/promotion-bar/style.scss");






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

/***/ "./src/blocks/promotion-bar/inspector.js":
/*!***********************************************!*\
  !*** ./src/blocks/promotion-bar/inspector.js ***!
  \***********************************************/
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
/* harmony import */ var _common_utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/utils.js */ "./src/common/utils.js");
/* harmony import */ var _settings_generalPanel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./settings/generalPanel */ "./src/blocks/promotion-bar/settings/generalPanel.js");
/* harmony import */ var _settings_designPanel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./settings/designPanel */ "./src/blocks/promotion-bar/settings/designPanel.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);







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
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TabPanel, {
      className: "wpmozo-settings-tab-panel",
      activeClass: "is-active",
      tabs: (0,_common_utils_js__WEBPACK_IMPORTED_MODULE_3__.inspectorPanelTabs)(),
      children: tab => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: "wpmozo-settings-tab-panel-content",
        children: [tab.name === 'general' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_settings_generalPanel__WEBPACK_IMPORTED_MODULE_4__.GeneralPanel, {
          attributes: attributes,
          setAttributes: setAttributes
        }), tab.name === 'design' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_settings_designPanel__WEBPACK_IMPORTED_MODULE_5__.DesignPanel, {
          attributes: attributes,
          setAttributes: setAttributes
        }), tab.name === 'advanced' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Advanced', 'wpmozo-blocks-and-addons'),
          initialOpen: true,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Additional CSS Class(es)', 'wpmozo-blocks-and-addons'),
            value: attributes.className || '',
            onChange: value => setAttributes({
              className: value
            }),
            help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Separate multiple classes with spaces.', 'wpmozo-blocks-and-addons')
          })
        })]
      })
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Inspector);

/***/ }),

/***/ "./src/blocks/promotion-bar/save.js":
/*!******************************************!*\
  !*** ./src/blocks/promotion-bar/save.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style */ "./src/blocks/promotion-bar/style.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




const Save = ({
  attributes
}) => {
  var _attributes$layout, _attributes$displayLa, _attributes$hideDays;
  const clientId = attributes.ID;
  const layout = (_attributes$layout = attributes.layout) !== null && _attributes$layout !== void 0 ? _attributes$layout : 'layout1';
  const displayLabel = (_attributes$displayLa = attributes.displayLabel) !== null && _attributes$displayLa !== void 0 ? _attributes$displayLa : 'full';
  const hideDays = (_attributes$hideDays = attributes.hideDays) !== null && _attributes$hideDays !== void 0 ? _attributes$hideDays : false;

  // Render image.
  let $image = '';
  if (attributes.showImage && '' !== attributes.image) {
    $image = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      className: "wpmozo-image-wrap",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("img", {
        src: attributes.image,
        alt: attributes.imageAlt,
        className: "wpmozo-promotion-bar-image"
      })
    });
  }

  // Render title and description.
  let $title = '';
  if (attributes.title && '' !== attributes.title) {
    $title = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
      className: "wpmozo-pb-title",
      tagName: attributes.titleLevel,
      value: attributes.title
    });
  }
  let $description = '';
  if (attributes.description && '' !== attributes.description) {
    $description = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
      className: "wpmozo-pb-desc",
      tagName: "div",
      value: attributes.description
    });
  }
  let $button = '';
  if (attributes.showButton && attributes.buttonUrl) {
    let $buttonIcon = '';
    if (attributes.buttonUseIcon && attributes.buttonIcon) {
      $buttonIcon = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("i", {
        className: 'wpmozo-icon ' + attributes.buttonIcon
      });
    }
    $button = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      className: "wpmozo-button-wrap",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("a", {
        href: attributes.buttonUrl,
        target: 'external' === attributes.buttonLinkTarget ? '_blank' : false,
        className: ['wpmozo-button', 'wpmozo_promotion_bar_button', attributes.buttonUseIcon && attributes.buttonIconOnHover ? 'wpmozo-icon-on-hover' : '', attributes.buttonUseIcon && 'before' === attributes.buttonIconPosition ? 'wpmozo-icon-at-before' : 'wpmozo-icon-at-after'].join(" "),
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
          className: "wpmozo-btn-text",
          children: attributes.buttonText && (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Get the deal', 'wpmozo-blocks-and-addons')
        }), $buttonIcon]
      })
    });
  }
  let $separator = '';
  if (attributes.showSeparator) {
    var _attributes$separator;
    $separator = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
      class: "wpmozo-pb-separator",
      children: (_attributes$separator = attributes.separatorText) !== null && _attributes$separator !== void 0 ? _attributes$separator : ':'
    });
  }

  // List of labels.
  const labels = {
    days: {
      full: 'Days',
      short: 'Days',
      single: 'D'
    },
    hours: {
      full: 'Hours',
      short: 'Hrs',
      single: 'H'
    },
    minutes: {
      full: 'Minutes',
      short: 'Min',
      single: 'M'
    },
    seconds: {
      full: 'Seconds',
      short: 'Sec',
      single: 'S'
    }
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("style", {
      children: (0,_style__WEBPACK_IMPORTED_MODULE_2__["default"])({
        attributes,
        clientId
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      id: `block-${clientId}`,
      ..._wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save({
        className: attributes.className
      }),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        className: "wpmozo-promotion-bar-wrap " + layout,
        "data-timestamp": attributes.dateTimeTimestamp,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "wpmozo-promotion-bar-inner",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
            className: "wpmozo-promotion-bar-content",
            children: [$image, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              className: "wpmozo-promotion-bar-content-inner",
              children: [$title, $description]
            }), 'layout2' === layout ? $button : '']
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
            className: "wpmozo-promotion-bar-timer",
            children: [false === hideDays ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              className: "wpmozo-pb-timer-box wpmozo-pb-days",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                className: "wpmozo-pb-number",
                children: "00"
              }), 'none' !== displayLabel ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                className: "wpmozo-pb-label",
                children: labels.days[displayLabel]
              }) : '']
            }) : '', false === hideDays ? $separator : '', /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              className: "wpmozo-pb-timer-box wpmozo-pb-hours",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                className: "wpmozo-pb-number",
                children: "00"
              }), 'none' !== displayLabel ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                className: "wpmozo-pb-label",
                children: labels.hours[displayLabel]
              }) : '']
            }), $separator, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              className: "wpmozo-pb-timer-box wpmozo-pb-minutes",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                className: "wpmozo-pb-number",
                children: "00"
              }), 'none' !== displayLabel ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                className: "wpmozo-pb-label",
                children: labels.minutes[displayLabel]
              }) : '']
            }), $separator, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              className: "wpmozo-pb-timer-box wpmozo-pb-seconds",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                className: "wpmozo-pb-number",
                children: "00"
              }), 'none' !== displayLabel ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                className: "wpmozo-pb-label",
                children: labels.seconds[displayLabel]
              }) : '']
            })]
          }), 'layout2' !== layout ? $button : '']
        })
      })
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Save);

/***/ }),

/***/ "./src/blocks/promotion-bar/settings/designPanel.js":
/*!**********************************************************!*\
  !*** ./src/blocks/promotion-bar/settings/designPanel.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DesignPanel: () => (/* binding */ DesignPanel)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common_components_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/components/index.js */ "./src/common/components/index.js");
/* harmony import */ var _common_utils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/utils.js */ "./src/common/utils.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);







const DesignPanel = ({
  attributes,
  setAttributes
}) => {
  const props = {
    attributes,
    setAttributes,
    preAttributes: {}
  };
  const [titleType, setTitleType] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)('normal');
  const [descType, setDescType] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)('normal');
  const [digitsType, setDigitsType] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)('general');
  const [labelsType, setLabelsType] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)('general');
  const [buttonType, setButtonType] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)('normal');
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Content Box', 'wpmozo-blocks-and-addons'),
      initialOpen: true,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_common_components_index_js__WEBPACK_IMPORTED_MODULE_4__.WpmozoAlignment, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Content Box Alignment', 'wpmozo-blocks-and-addons'),
        onChange: newValue => setAttributes({
          contentBoxAlign: newValue
        }),
        value: attributes.contentBoxAlign
      }), ['layout2', 'layout3'].includes(attributes.layout) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Content Box Width (in %)', 'wpmozo-blocks-and-addons'),
          value: attributes.contentBoxWidth,
          onChange: newValue => setAttributes({
            contentBoxWidth: newValue
          }),
          min: 1,
          max: 100,
          step: 1,
          allowReset: true,
          __next40pxDefaultSize: true,
          __nextHasNoMarginBottom: true
        })
      })]
    }), attributes.showImage && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Image', 'wpmozo-blocks-and-addons'),
        className: "wpmozo-typography-panel",
        initialOpen: false,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_common_components_index_js__WEBPACK_IMPORTED_MODULE_4__.WpmozoDimensions, {
          props: props,
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Image Dimensions', 'wpmozo-blocks-and-addons'),
          DimensionKey: "image",
          DimensionsTypes: {
            padding: true
          }
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("hr", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Enable Image Min/Max Width', 'wpmozo-blocks-and-addons'),
          checked: attributes.imageEnableCustomSize || false,
          onChange: newValue => setAttributes({
            imageEnableCustomSize: newValue
          }),
          __nextHasNoMarginBottom: true
        }), attributes.imageEnableCustomSize && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Image Minimum Width', 'wpmozo-blocks-and-addons'),
            value: attributes.imageMinWidth,
            onChange: newValue => setAttributes({
              imageMinWidth: newValue
            }),
            min: 1,
            max: 1000,
            step: 1,
            allowReset: true,
            __next40pxDefaultSize: true,
            __nextHasNoMarginBottom: true
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Image Maximum Width', 'wpmozo-blocks-and-addons'),
            value: attributes.imageMaxWidth,
            onChange: newValue => setAttributes({
              imageMaxWidth: newValue
            }),
            min: 1,
            max: 1000,
            step: 1,
            allowReset: true,
            __next40pxDefaultSize: true,
            __nextHasNoMarginBottom: true
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_common_components_index_js__WEBPACK_IMPORTED_MODULE_4__.WpmozoBorder, {
          props: props,
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Image Border', 'wpmozo-blocks-and-addons'),
          BorderKey: "image",
          BorderTypes: {
            border: true,
            radius: true
          }
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Title Text', 'wpmozo-blocks-and-addons'),
      className: "wpmozo-typography-panel",
      initialOpen: false,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.BaseControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Heading Level', 'wpmozo-blocks-and-addons'),
        __nextHasNoMarginBottom: true,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ButtonGroup, {
          children: _common_utils_js__WEBPACK_IMPORTED_MODULE_5__.headingLevelsList.map((item, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
            isPressed: item.value === attributes.titleLevel,
            onClick: () => setAttributes({
              titleLevel: item.value
            }),
            children: item.label
          }, item.value))
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.BaseControl, {
        className: "wpmozo-button-tabs-wrap",
        __nextHasNoMarginBottom: true,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ButtonGroup, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
            className: "wpmozo-button-tabs-btn",
            isPressed: 'normal' === titleType ? true : false,
            onClick: () => setTitleType('normal'),
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Normal', 'wpmozo-blocks-and-addons')
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
            className: "wpmozo-button-tabs-btn",
            isPressed: 'hover' === titleType ? true : false,
            onClick: () => setTitleType('hover'),
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Hover', 'wpmozo-blocks-and-addons')
          })]
        }), 'normal' === titleType && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_common_components_index_js__WEBPACK_IMPORTED_MODULE_4__.WpmozoColorPicker, {
            ColorKey: "title",
            props: props,
            ColorTypes: [{
              key: 'Color',
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Title Color', 'wpmozo-blocks-and-addons')
            }]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_common_components_index_js__WEBPACK_IMPORTED_MODULE_4__.WpmozoTypography, {
            props: props,
            TypographyKey: "title"
          })]
        }), 'hover' === titleType && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_common_components_index_js__WEBPACK_IMPORTED_MODULE_4__.WpmozoColorPicker, {
            ColorKey: "titleHover",
            props: props,
            ColorTypes: [{
              key: 'Color',
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Title Hover Color', 'wpmozo-blocks-and-addons')
            }]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_common_components_index_js__WEBPACK_IMPORTED_MODULE_4__.WpmozoTypography, {
            props: props,
            TypographyKey: "titleHover"
          })]
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Description Text', 'wpmozo-blocks-and-addons'),
      className: "wpmozo-typography-panel",
      initialOpen: false,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.BaseControl, {
        className: "wpmozo-button-tabs-wrap",
        __nextHasNoMarginBottom: true,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ButtonGroup, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
            className: "wpmozo-button-tabs-btn",
            isPressed: 'normal' === descType ? true : false,
            onClick: () => setDescType('normal'),
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Normal', 'wpmozo-blocks-and-addons')
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
            className: "wpmozo-button-tabs-btn",
            isPressed: 'hover' === descType ? true : false,
            onClick: () => setDescType('hover'),
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Hover', 'wpmozo-blocks-and-addons')
          })]
        }), 'normal' === descType && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_common_components_index_js__WEBPACK_IMPORTED_MODULE_4__.WpmozoColorPicker, {
            ColorKey: "description",
            props: props,
            ColorTypes: [{
              key: 'Color',
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Description Color', 'wpmozo-blocks-and-addons')
            }]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_common_components_index_js__WEBPACK_IMPORTED_MODULE_4__.WpmozoTypography, {
            props: props,
            TypographyKey: "description"
          })]
        }), 'hover' === descType && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_common_components_index_js__WEBPACK_IMPORTED_MODULE_4__.WpmozoColorPicker, {
            ColorKey: "descriptionHover",
            props: props,
            ColorTypes: [{
              key: 'Color',
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Description Hover Color', 'wpmozo-blocks-and-addons')
            }]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_common_components_index_js__WEBPACK_IMPORTED_MODULE_4__.WpmozoTypography, {
            props: props,
            TypographyKey: "descriptionHover"
          })]
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Timer/Clock Box', 'wpmozo-blocks-and-addons'),
      className: "wpmozo-typography-panel",
      initialOpen: false,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_common_components_index_js__WEBPACK_IMPORTED_MODULE_4__.WpmozoAlignment, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Timer Box Alignment', 'wpmozo-blocks-and-addons'),
        onChange: newValue => setAttributes({
          timerBoxAlign: newValue
        }),
        value: attributes.timerBoxAlign
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.__experimentalColorGradientControl, {
        colors: [],
        gradients: [],
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Timer Box Background', 'wpmozo-blocks-and-addons'),
        colorValue: attributes.timerBoxBackground,
        gradientValue: attributes.timerBoxBGGradient,
        onColorChange: newValue => setAttributes({
          timerBoxBackground: newValue
        }),
        onGradientChange: newValue => setAttributes({
          timerBoxBGGradient: newValue
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_common_components_index_js__WEBPACK_IMPORTED_MODULE_4__.WpmozoDimensions, {
        props: props,
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Timer Box Dimensions', 'wpmozo-blocks-and-addons'),
        DimensionKey: "timerBox",
        DimensionsTypes: {
          padding: true,
          margin: true
        }
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_common_components_index_js__WEBPACK_IMPORTED_MODULE_4__.WpmozoBorder, {
        props: props,
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Timer Box Border', 'wpmozo-blocks-and-addons'),
        BorderKey: "timerBox",
        BorderTypes: {
          border: true,
          radius: true
        }
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Timer/Clock Digits', 'wpmozo-blocks-and-addons'),
      className: "wpmozo-typography-panel",
      initialOpen: false,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.BaseControl, {
        className: "wpmozo-button-tabs-wrap",
        __nextHasNoMarginBottom: true,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ButtonGroup, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
            className: "wpmozo-button-tabs-btn",
            isPressed: 'general' === digitsType ? true : false,
            onClick: () => setDigitsType('general'),
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('General', 'wpmozo-blocks-and-addons')
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
            className: "wpmozo-button-tabs-btn",
            isPressed: 'text' === digitsType ? true : false,
            onClick: () => setDigitsType('text'),
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Text', 'wpmozo-blocks-and-addons')
          })]
        }), 'general' === digitsType && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_common_components_index_js__WEBPACK_IMPORTED_MODULE_4__.WpmozoColorPicker, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Background Color', 'wpmozo-blocks-and-addons'),
            ColorKey: "digits",
            props: props,
            ColorTypes: [{
              key: 'BackgroundColor',
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Digit Background Color', 'wpmozo-blocks-and-addons')
            }]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_common_components_index_js__WEBPACK_IMPORTED_MODULE_4__.WpmozoDimensions, {
            props: props,
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Digit Dimensions', 'wpmozo-blocks-and-addons'),
            DimensionKey: "digits",
            DimensionsTypes: {
              padding: true,
              margin: true
            }
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_common_components_index_js__WEBPACK_IMPORTED_MODULE_4__.WpmozoBorder, {
            props: props,
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Digit Border', 'wpmozo-blocks-and-addons'),
            BorderKey: "digits",
            BorderTypes: {
              border: true,
              radius: true
            }
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Digit Box Width', 'wpmozo-blocks-and-addons'),
            value: attributes.digitsBoxWidth,
            onChange: newValue => setAttributes({
              digitsBoxWidth: newValue
            }),
            min: 90,
            max: 350,
            step: 1,
            allowReset: true,
            __next40pxDefaultSize: true,
            __nextHasNoMarginBottom: true
          })]
        }), 'text' === digitsType && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_common_components_index_js__WEBPACK_IMPORTED_MODULE_4__.WpmozoColorPicker, {
            ColorKey: "digits",
            props: props,
            ColorTypes: [{
              key: 'Color',
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Digit Color', 'wpmozo-blocks-and-addons')
            }]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_common_components_index_js__WEBPACK_IMPORTED_MODULE_4__.WpmozoTypography, {
            props: props,
            TypographyKey: "digits"
          })]
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Timer/Clock Labels', 'wpmozo-blocks-and-addons'),
      className: "wpmozo-typography-panel",
      initialOpen: false,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.BaseControl, {
        className: "wpmozo-button-tabs-wrap",
        __nextHasNoMarginBottom: true,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ButtonGroup, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
            className: "wpmozo-button-tabs-btn",
            isPressed: 'general' === labelsType ? true : false,
            onClick: () => setLabelsType('general'),
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('General', 'wpmozo-blocks-and-addons')
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
            className: "wpmozo-button-tabs-btn",
            isPressed: 'text' === labelsType ? true : false,
            onClick: () => setLabelsType('text'),
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Text', 'wpmozo-blocks-and-addons')
          })]
        }), 'general' === labelsType && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_common_components_index_js__WEBPACK_IMPORTED_MODULE_4__.WpmozoColorPicker, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Background Color', 'wpmozo-blocks-and-addons'),
            ColorKey: "labels",
            props: props,
            ColorTypes: [{
              key: 'BackgroundColor',
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Label Background Color', 'wpmozo-blocks-and-addons')
            }]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_common_components_index_js__WEBPACK_IMPORTED_MODULE_4__.WpmozoDimensions, {
            props: props,
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Label Dimensions', 'wpmozo-blocks-and-addons'),
            DimensionKey: "labels",
            DimensionsTypes: {
              padding: true,
              margin: true
            }
          })]
        }), 'text' === labelsType && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_common_components_index_js__WEBPACK_IMPORTED_MODULE_4__.WpmozoColorPicker, {
            ColorKey: "labels",
            props: props,
            ColorTypes: [{
              key: 'Color',
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Label Color', 'wpmozo-blocks-and-addons')
            }]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_common_components_index_js__WEBPACK_IMPORTED_MODULE_4__.WpmozoTypography, {
            props: props,
            TypographyKey: "labels"
          })]
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Timer Separator', 'wpmozo-blocks-and-addons'),
      className: "wpmozo-typography-panel",
      initialOpen: false,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Show Separator', 'wpmozo-blocks-and-addons'),
        checked: attributes.showSeparator || false,
        onChange: newValue => setAttributes({
          showSeparator: newValue
        }),
        __nextHasNoMarginBottom: true
      }), attributes.showSeparator && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Separator Text', 'wpmozo-blocks-and-addons'),
          onChange: newValue => setAttributes({
            separatorText: newValue
          }),
          value: attributes.separatorText || ''
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.BaseControl, {
          className: "wpmozo-button-tabs-wrap",
          __nextHasNoMarginBottom: true,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_common_components_index_js__WEBPACK_IMPORTED_MODULE_4__.WpmozoColorPicker, {
            ColorKey: "separator",
            props: props,
            ColorTypes: [{
              key: 'Color',
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Separator Color', 'wpmozo-blocks-and-addons')
            }]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_common_components_index_js__WEBPACK_IMPORTED_MODULE_4__.WpmozoTypography, {
            props: props,
            TypographyKey: "separator"
          })]
        })]
      })]
    }), attributes.showButton && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Sale Button', 'wpmozo-blocks-and-addons'),
        className: "wpmozo-typography-panel",
        initialOpen: false,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.BaseControl, {
          className: "wpmozo-button-tabs-wrap",
          __nextHasNoMarginBottom: true,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ButtonGroup, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
              className: "wpmozo-button-tabs-btn",
              isPressed: 'normal' === buttonType ? true : false,
              onClick: () => setButtonType('normal'),
              children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Normal', 'wpmozo-blocks-and-addons')
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
              className: "wpmozo-button-tabs-btn",
              isPressed: 'hover' === buttonType ? true : false,
              onClick: () => setButtonType('hover'),
              children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Hover', 'wpmozo-blocks-and-addons')
            })]
          }), 'normal' === buttonType && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.__experimentalColorGradientControl, {
              colors: [],
              gradients: [],
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Button Background', 'wpmozo-blocks-and-addons'),
              colorValue: attributes.buttonBackground,
              gradientValue: attributes.buttonBGGradient,
              onColorChange: newValue => setAttributes({
                buttonBackground: newValue
              }),
              onGradientChange: newValue => setAttributes({
                buttonBGGradient: newValue
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("hr", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Show Button Icon', 'wpmozo-blocks-and-addons'),
              checked: attributes.buttonUseIcon || false,
              onChange: newValue => setAttributes({
                buttonUseIcon: newValue
              }),
              __nextHasNoMarginBottom: true
            }), attributes.buttonUseIcon && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_common_components_index_js__WEBPACK_IMPORTED_MODULE_4__.WpmozoIconpicker, {
                props: props,
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Icon', 'wpmozo-blocks-and-addons'),
                iconPickerKey: "buttonIcon",
                value: attributes.buttonIcon,
                onChange: newValue => setAttributes({
                  buttonIcon: newValue
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalToggleGroupControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Icon Position', 'wpmozo-blocks-and-addons'),
                value: attributes.buttonIconPosition,
                onChange: newValue => setAttributes({
                  buttonIconPosition: newValue
                }),
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalToggleGroupControlOption, {
                  value: "before",
                  label: "Before"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalToggleGroupControlOption, {
                  value: "after",
                  label: "After"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Show Icon On Hover', 'wpmozo-blocks-and-addons'),
                checked: attributes.buttonIconOnHover,
                onChange: newValue => setAttributes({
                  buttonIconOnHover: newValue
                })
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_common_components_index_js__WEBPACK_IMPORTED_MODULE_4__.WpmozoColorPicker, {
              props: props,
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Button Text Color', 'wpmozo-blocks-and-addons'),
              ColorKey: "button",
              ColorTypes: [{
                key: 'Color',
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Button Text Color', 'wpmozo-blocks-and-addons')
              }]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_common_components_index_js__WEBPACK_IMPORTED_MODULE_4__.WpmozoTypography, {
              props: props,
              TypographyKey: "button"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_common_components_index_js__WEBPACK_IMPORTED_MODULE_4__.WpmozoDimensions, {
              props: props,
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Button Dimensions', 'wpmozo-blocks-and-addons'),
              DimensionKey: "button",
              DimensionsTypes: {
                padding: true,
                margin: true
              }
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_common_components_index_js__WEBPACK_IMPORTED_MODULE_4__.WpmozoBorder, {
              props: props,
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Button Border', 'wpmozo-blocks-and-addons'),
              BorderKey: "button",
              BorderTypes: {
                border: true,
                radius: true
              }
            })]
          }), 'hover' === buttonType && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.__experimentalColorGradientControl, {
              colors: [],
              gradients: [],
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Button Hover Background', 'wpmozo-blocks-and-addons'),
              colorValue: attributes.buttonHoverBackground,
              gradientValue: attributes.buttonHoverBGGradient,
              onColorChange: newValue => setAttributes({
                buttonHoverBackground: newValue
              }),
              onGradientChange: newValue => setAttributes({
                buttonHoverBGGradient: newValue
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_common_components_index_js__WEBPACK_IMPORTED_MODULE_4__.WpmozoColorPicker, {
              props: props,
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Button Hover Text Color', 'wpmozo-blocks-and-addons'),
              ColorKey: "buttonHover",
              ColorTypes: [{
                key: 'Color',
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Button Hover Text Color', 'wpmozo-blocks-and-addons')
              }]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_common_components_index_js__WEBPACK_IMPORTED_MODULE_4__.WpmozoTypography, {
              props: props,
              TypographyKey: "buttonHover"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_common_components_index_js__WEBPACK_IMPORTED_MODULE_4__.WpmozoBorder, {
              props: props,
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Button Hover Border', 'wpmozo-blocks-and-addons'),
              BorderKey: "buttonHover",
              BorderTypes: {
                border: true,
                radius: true
              }
            })]
          })]
        })
      })
    })]
  });
};

/***/ }),

/***/ "./src/blocks/promotion-bar/settings/generalPanel.js":
/*!***********************************************************!*\
  !*** ./src/blocks/promotion-bar/settings/generalPanel.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GeneralPanel: () => (/* binding */ GeneralPanel)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_date__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/date */ "@wordpress/date");
/* harmony import */ var _wordpress_date__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_date__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/components */ "./src/common/components/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);





const GeneralPanel = ({
  attributes,
  setAttributes
}) => {
  const props = {
    attributes,
    setAttributes,
    preAttributes: {}
  };
  const {
    timezone
  } = (0,_wordpress_date__WEBPACK_IMPORTED_MODULE_1__.getSettings)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Date & Time', 'wpmozo-blocks-and-addons'),
      initialOpen: true,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.DateTimePicker, {
        className: "wpmozo-date-time-picker",
        currentDate: attributes.dateTime || new Date(),
        onChange: value => {
          // Make sure the time is set in UTC, so that we can easily remove the timezone offset from WP Settings.
          const UTCValue = value + 'Z';
          const UTCdate = new Date(UTCValue);

          // Remove the timezone offset received from WP Settings.
          UTCdate.setMilliseconds(UTCdate.getMilliseconds() - timezone.offset * 60 * 60 * 1000);

          // Convert to Unix timestamp (seconds, not ms)
          const timestamp = Math.floor(UTCdate.getTime() / 1000);
          console.log('timestamp:: ', timestamp);
          setAttributes({
            dateTimeUTC: UTCdate,
            // full Date object
            dateTime: value,
            // original value string
            dateTimeTimestamp: timestamp // Unix timestamp
          });
        },
        is12Hour: true,
        __nextRemoveResetButton: true,
        __nextRemoveHelpButton: true
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Content', 'wpmozo-blocks-and-addons'),
      initialOpen: false,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Title', 'wpmozo-blocks-and-addons'),
        onChange: newValue => setAttributes({
          title: newValue
        }),
        value: attributes.title || ''
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextareaControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Description', 'wpmozo-blocks-and-addons'),
        onChange: newValue => setAttributes({
          description: newValue
        }),
        value: attributes.description || ''
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("hr", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Show Image', 'wpmozo-blocks-and-addons'),
        checked: attributes.showImage || false,
        onChange: newValue => setAttributes({
          showImage: newValue
        }),
        __nextHasNoMarginBottom: true
      }), attributes.showImage && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_common_components__WEBPACK_IMPORTED_MODULE_3__.WpmozoMediaUploader, {
          attrKye: "image",
          props: props,
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Image', 'wpmozo-blocks-and-addons')
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Image Alt Text', 'wpmozo-blocks-and-addons'),
          value: attributes.imageAlt,
          onChange: newValue => setAttributes({
            imageAlt: newValue
          }),
          __next40pxDefaultSize: true,
          __nextHasNoMarginBottom: true
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("hr", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Show Button', 'wpmozo-blocks-and-addons'),
        checked: attributes.showButton,
        onChange: newValue => setAttributes({
          showButton: newValue
        })
      }), attributes.showButton && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Button Text', 'wpmozo-blocks-and-addons'),
          value: attributes.buttonText,
          onChange: newValue => setAttributes({
            buttonText: newValue
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Button URL', 'wpmozo-blocks-and-addons'),
          onChange: newValue => setAttributes({
            buttonUrl: newValue
          }),
          value: attributes.buttonUrl
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalToggleGroupControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Button Link Target', 'wpmozo-blocks-and-addons'),
          value: attributes.buttonLinkTarget,
          onChange: newValue => setAttributes({
            buttonLinkTarget: newValue
          }),
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalToggleGroupControlOptionIcon, {
            value: "external",
            icon: "external",
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('New Window', 'wpmozo-blocks-and-addons')
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalToggleGroupControlOptionIcon, {
            value: "same",
            icon: "admin-links",
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Same Window', 'wpmozo-blocks-and-addons')
          })]
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Display', 'wpmozo-blocks-and-addons'),
      initialOpen: false,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Layout', 'wpmozo-blocks-and-addons'),
        value: attributes.layout,
        options: [{
          value: 'layout1',
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Layout 1', 'wpmozo-blocks-and-addons')
        }, {
          value: 'layout2',
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Layout 2', 'wpmozo-blocks-and-addons')
        }, {
          value: 'layout3',
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Layout 3', 'wpmozo-blocks-and-addons')
        }],
        onChange: newValue => setAttributes({
          layout: newValue
        }),
        __next40pxDefaultSize: true,
        __nextHasNoMarginBottom: true
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.BaseControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Hide Days', 'wpmozo-blocks-and-addons'),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Hide/Show days box in timer.', 'wpmozo-blocks-and-addons'),
          checked: attributes.hideDays,
          onChange: newValue => setAttributes({
            hideDays: newValue
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Display Labels', 'wpmozo-blocks-and-addons'),
        value: attributes.displayLabel,
        options: [{
          value: 'none',
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('None', 'wpmozo-blocks-and-addons')
        }, {
          value: 'full',
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Full Label', 'wpmozo-blocks-and-addons')
        }, {
          value: 'short',
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Short Label', 'wpmozo-blocks-and-addons')
        }, {
          value: 'single',
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Single Character', 'wpmozo-blocks-and-addons')
        }],
        onChange: newValue => setAttributes({
          displayLabel: newValue
        }),
        __next40pxDefaultSize: true,
        __nextHasNoMarginBottom: true
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.BaseControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Display Labels In Stack', 'wpmozo-blocks-and-addons'),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Show stacked (In new line) label.', 'wpmozo-blocks-and-addons'),
          checked: attributes.stackLabel,
          onChange: newValue => setAttributes({
            stackLabel: newValue
          })
        })
      })]
    })]
  });
};

/***/ }),

/***/ "./src/blocks/promotion-bar/style.js":
/*!*******************************************!*\
  !*** ./src/blocks/promotion-bar/style.js ***!
  \*******************************************/
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
  const toConvertStyles = ['image', 'title', 'titleHover', 'description', 'descriptionHover', 'button', 'buttonHover', 'timerBox', 'digits', 'labels', 'separator'];
  let convertedStyle = (0,_common_utils_js__WEBPACK_IMPORTED_MODULE_0__.convertInlineStyleStr)(toConvertStyles, attributes);
  let styles = `#block-${attributes.ID} {`;

  // Content box align.
  if (attributes.contentBoxAlign) {
    styles += `.wpmozo-promotion-bar-content{
			text-align: ${attributes.contentBoxAlign};
			${!attributes.layout ? `background:` + attributes.timerBoxBGGradient + `;` : ''}
		}`;
    // Content box width.
    if (attributes.layout && 'layout1' !== attributes.layout && attributes.contentBoxWidth) {
      styles += `.wpmozo-promotion-bar-wrap.layout2 .wpmozo-promotion-bar-content, .wpmozo-promotion-bar-wrap.layout3 .wpmozo-promotion-bar-content{
				width: ${attributes.contentBoxWidth}%;
			}`;
    }
  }
  // Timer box align.
  if (attributes.timerBoxAlign) {
    styles += `.wpmozo-promotion-bar-timer{
			justify-content: ${'left' === attributes.timerBoxAlign ? 'flex-start' : 'right' === attributes.timerBoxAlign ? 'flex-end' : attributes.timerBoxAlign};
		}`;
  }

  // Stack labels.
  if (false === attributes.stackLabel) {
    styles += `.wpmozo-pb-timer-box{display: flex; align-items: center; justify-content: center;}`;
  }
  // Timerbox.
  styles += `.wpmozo-pb-timer-box{
		${attributes.timerBoxBGGradient ? `background:` + attributes.timerBoxBGGradient + `;` : ''}
		${attributes.timerBoxBackground ? `background-color:` + attributes.timerBoxBackground + `;` : ''}
		${convertedStyle.timerBox}
	}`;

  // Image.
  if (attributes.showImage) {
    styles += `.wpmozo-image-wrap .wpmozo-promotion-bar-image{
			${attributes.imageEnableCustomSize && attributes.imageMinWidth ? `min-width: ${attributes.imageMinWidth}px;` : ''}
			${attributes.imageEnableCustomSize && attributes.imageMaxWidth ? `max-width: ${attributes.imageMaxWidth}px;` : ''}
			${convertedStyle.image}
		}`;
  }

  // Title.
  styles += `.wpmozo-pb-title{
		${attributes.titleColor ? `color: ${attributes.titleColor};` : ''}
		${convertedStyle.title}
	}`;
  styles += `.wpmozo-pb-title:hover{
		${attributes.titleHoverColor ? `color: ${attributes.titleHoverColor};` : ''}
		${convertedStyle.titleHover}
	}`;

  // Description.
  styles += `.wpmozo-pb-desc{
		${attributes.descriptionColor ? `color: ${attributes.descriptionColor};` : ''}
		${convertedStyle.description}
	}`;
  styles += `.wpmozo-pb-desc:hover{
		${attributes.descriptionHoverColor ? `color: ${attributes.descriptionHoverColor};` : ''}
		${convertedStyle.descriptionHover}
	}`;

  // Digits CSS.
  styles += `.wpmozo-pb-timer-box .wpmozo-pb-number{
		${attributes.digitsColor ? `color: ${attributes.digitsColor};` : ''}
		${attributes.digitsBoxWidth ? `min-width: ${attributes.digitsBoxWidth}px;` : ''}
		${attributes.digitsBackgroundColor ? `background-color: ${attributes.digitsBackgroundColor};` : ''}
		${convertedStyle.digits}
	}`;

  // Labels CSS.
  if (attributes.displayLabel && 'none' !== attributes.displayLabel) {
    styles += `.wpmozo-pb-timer-box .wpmozo-pb-label{
			${attributes.labelsColor ? `color: ${attributes.labelsColor};` : ''}
			${attributes.labelsBackgroundColor ? `background-color: ${attributes.labelsBackgroundColor};` : ''}
			${convertedStyle.labels}
		}`;
  }

  // Separator.
  if (attributes.showSeparator) {
    styles += `.wpmozo-promotion-bar-timer .wpmozo-pb-separator{
			${attributes.separatorColor ? `color: ${attributes.separatorColor};` : ''}
			${convertedStyle.separator}
		}`;
  }

  // Sale Button.
  if (attributes.showButton) {
    styles += `.wpmozo-button-wrap .wpmozo-button{
			${attributes.buttonBGGradient ? `background:` + attributes.buttonBGGradient + `;` : ''}
			${attributes.buttonBackground ? `background:` + attributes.buttonBackground + `;` : ''}
			${attributes.buttonColor ? `color: ${attributes.buttonColor};` : ''}
			${convertedStyle.button}
		}`;
    styles += `.wpmozo-button-wrap .wpmozo-button:hover{
			${attributes.buttonHoverBGGradient ? `background:` + attributes.buttonHoverBGGradient + `;` : ''}
			${attributes.buttonHoverBackground ? `background:` + attributes.buttonHoverBackground + `;` : ''}
			${attributes.buttonHoverColor ? `color: ${attributes.buttonHoverColor};` : ''}
			${convertedStyle.buttonHover}
		}`;
  }
  styles += `}`;
  return styles;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generateDynamicStyle);

/***/ }),

/***/ "./src/blocks/promotion-bar/style.scss":
/*!*********************************************!*\
  !*** ./src/blocks/promotion-bar/style.scss ***!
  \*********************************************/
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
    alignments,
    showJustify = false
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

  // Add justify option only if showJustify is true
  if (showJustify) {
    horizontalAlignments.justify = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalToggleGroupControlOptionIcon, {
      value: "justify",
      icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Icon, {
        icon: "editor-justify"
      }),
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Justify', 'wpmozo-blocks-and-addons')
    }, `wpmozo-alignment-justify-${alignmentKey}`);
  }
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
      className: `wpmozo-color-dropdown-container wpmozo-color-dropdown-container-${fullKey}`,
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
      __experimentalRenderItem: renderItem,
      __next40pxDefaultSize: true,
      __nextHasNoMarginBottom: true
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
  onSelect: customOnSelect,
  label = '' // ← Default label
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
  const handleRemove = () => {
    props.setAttributes({
      [attrKye]: ''
    });
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
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.BaseControl, {
          label: label,
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
            }), imageSrc && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Button, {
              isLink: true,
              isDestructive: true,
              onClick: handleRemove,
              style: {
                marginLeft: '10px',
                verticalAlign: 'super'
              },
              children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Remove Image", "wpmozo-blocks-and-addons")
            })]
          })
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
        __nextHasNoMarginBottom: true,
        __next40pxDefaultSize: true
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
        onChange: val => onChange('FontAppearance', val),
        __next40pxDefaultSize: true
      }, "wpmozo-titleapp")
    }), (!TypoTypes || TypoTypes.LetterSpacing !== undefined) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalToolsPanelItem, {
      className: "single-column",
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Letter spacing', 'wpmozo-blocks-and-addons'),
      hasValue: () => true,
      isShownByDefault: true,
      onDeselect: () => typoSetValue('LetterSpacing'),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.__experimentalLetterSpacingControl, {
        value: props.attributes[TypographyKey + 'LetterSpacing'],
        onChange: val => onChange('LetterSpacing', val),
        __next40pxDefaultSize: true
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
        __nextHasNoMarginBottom: true,
        __next40pxDefaultSize: true
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

/***/ "@wordpress/date":
/*!******************************!*\
  !*** external ["wp","date"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["date"];

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
/******/ 			"blocks/promotion-bar/index": 0,
/******/ 			"blocks/bar-counter/style-index": 0,
/******/ 			"blocks/promotion-bar/style-index": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["blocks/bar-counter/style-index","blocks/promotion-bar/style-index"], () => (__webpack_require__("./src/blocks/promotion-bar/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map
=======
(()=>{"use strict";var o,e={766:()=>{const o=window.wp.blocks,e=JSON.parse('{"UU":"wpmozo/promotion-bar"}'),t=window.wp.i18n,n=window.wp.element,a=window.wp.blockEditor,l=window.wp.components;function s(o={}){const e={...o};for(const o in e){const t=e[o];void 0!==t&&""!==t&&t.startsWith("var:")&&(e[o]=t.replace("var:","var(--wp--").replace(/\|/g,"--")+")")}return e}const r=[{label:(0,t.__)("H1","wpmozo-blocks-and-addons"),value:"h1"},{label:(0,t.__)("H2","wpmozo-blocks-and-addons"),value:"h2"},{label:(0,t.__)("H3","wpmozo-blocks-and-addons"),value:"h3"},{label:(0,t.__)("H4","wpmozo-blocks-and-addons"),value:"h4"},{label:(0,t.__)("H5","wpmozo-blocks-and-addons"),value:"h5"},{label:(0,t.__)("H6","wpmozo-blocks-and-addons"),value:"h6"}],i=window.wp.date,d=window.wp.compose,p=window.ReactJSXRuntime,c=(0,d.compose)()((o=>{const{TypographyKey:e,props:n}=o,s=n.preAttributes,r=o.label||(0,t.__)("Typography","wpmozo-blocks-and-addons");let i=o.TypoTypes||null;const d=(o,t)=>(null===t&&void 0!==s[e+o]&&s[e+o].hasOwnProperty("default")&&(t=s[e+o].default),null!==t?t:""),c=(t,a=null)=>{const l=d(t,a);n.setAttributes({[e+t]:l}),o.afterOnChange&&o.afterOnChange(n)},m=o.onChange||c;let b={},u=!0,h=!0;return i&&!i.hasOwnProperty("FontAppearance")||(o.FontAppearance&&(u=!1!==o.FontAppearance.hasFontStyles,h=!1!==o.FontAppearance.hasFontWeights),u&&(b.fontStyle=n.attributes[e+"FontAppearance"]?.fontStyle),h&&(b.fontWeight=n.attributes[e+"FontAppearance"]?.fontWeight)),(0,p.jsxs)(l.__experimentalToolsPanel,{label:r,resetAll:()=>{null===i&&(i={FontSize:"",LetterSpacing:"",Decoration:"",FontAppearance:{fontStyle:"",fontWeight:""},LetterCase:"",LineHeight:""});for(const o in i){const t=d(o,null);n.setAttributes({[e+o]:t})}o.afterOnChange&&o.afterOnChange(n)},children:[(!i||void 0!==i.FontSize)&&(0,p.jsx)(l.__experimentalToolsPanelItem,{label:(0,t.__)("Font Size","wpmozo-blocks-and-addons"),hasValue:()=>!0,isShownByDefault:!0,onDeselect:()=>c("FontSize"),children:(0,p.jsx)(a.FontSizePicker,{value:n.attributes[e+"FontSize"],onChange:o=>m("FontSize",o),__nextHasNoMarginBottom:!0,__next40pxDefaultSize:!0})}),(!i||void 0!==i.FontAppearance)&&(0,p.jsx)(l.__experimentalToolsPanelItem,{className:"single-column",label:(0,t.__)("Appearance","wpmozo-blocks-and-addons"),hasValue:()=>!0,isShownByDefault:!0,onDeselect:()=>c("FontAppearance"),children:(0,p.jsx)(a.__experimentalFontAppearanceControl,{hasFontStyles:u,hasFontWeights:h,value:b,onChange:o=>m("FontAppearance",o),__next40pxDefaultSize:!0},"wpmozo-titleapp")}),(!i||void 0!==i.LetterSpacing)&&(0,p.jsx)(l.__experimentalToolsPanelItem,{className:"single-column",label:(0,t.__)("Letter spacing","wpmozo-blocks-and-addons"),hasValue:()=>!0,isShownByDefault:!0,onDeselect:()=>c("LetterSpacing"),children:(0,p.jsx)(a.__experimentalLetterSpacingControl,{value:n.attributes[e+"LetterSpacing"],onChange:o=>m("LetterSpacing",o),__next40pxDefaultSize:!0})}),(!i||void 0!==i.Decoration)&&(0,p.jsx)(l.__experimentalToolsPanelItem,{label:(0,t.__)("Decoration","wpmozo-blocks-and-addons"),hasValue:()=>!0,isShownByDefault:!0,onDeselect:()=>c("Decoration"),children:(0,p.jsx)(a.__experimentalTextDecorationControl,{value:n.attributes[e+"Decoration"],onChange:o=>m("Decoration",o)})}),(!i||void 0!==i.LetterCase)&&(0,p.jsx)(l.__experimentalToolsPanelItem,{label:(0,t.__)("Letter case","wpmozo-blocks-and-addons"),hasValue:()=>!0,isShownByDefault:!0,onDeselect:()=>c("LetterCase"),children:(0,p.jsx)(a.__experimentalTextTransformControl,{value:n.attributes[e+"LetterCase"],onChange:o=>m("LetterCase",o)})}),(!i||void 0!==i.LineHeight)&&(0,p.jsx)(l.__experimentalToolsPanelItem,{className:"single-column",label:(0,t.__)("Line Height","wpmozo-blocks-and-addons"),hasValue:()=>!0,isShownByDefault:!0,onDeselect:()=>c("LineHeight"),children:(0,p.jsx)(a.LineHeightControl,{value:n.attributes[e+"LineHeight"],onChange:o=>m("LineHeight",o),__nextHasNoMarginBottom:!0,__next40pxDefaultSize:!0})})]},`wpmozo-typography-panel-${e}`)})),m="linear-gradient(135deg,rgba(6,147,227,1) 0%,rgb(155,81,224) 100%)",b=o=>{const{ColorKey:e,ColorTypes:s,props:r,withToolPanel:i=!0,label:d=(0,t.__)("Color","wpmozo-blocks-and-addons")}=o,c=r.preAttributes,b=(0,a.__experimentalUseMultipleOriginColorsAndGradients)(),u=(o,t)=>(null===t&&void 0!==c[e+o]&&c[e+o].hasOwnProperty("default")&&(t=c[e+o].default),null!==t?t:""),h=(t,n=null)=>{const a=u(t,n);r.setAttributes({[e+t]:a}),o.afterOnChange&&o.afterOnChange(r)},g=o.onChange||h,x=(n,a,s)=>{let i=r.attributes[e+n];const d=`${e}-${n}`,c=`wpmozo-color-palette-${d}`,u=s?.withGradient||!1,h=s?.onlyGradient||!1;return""===i&&o.default&&(i=o.default[n]),(0,p.jsx)(l.Dropdown,{className:`wpmozo-color-dropdown-container wpmozo-color-dropdown-container-${d}`,contentClassName:"wpmozo-color-popover-content",popoverProps:{placement:"left-start",offset:36,shift:!0},renderToggle:({isOpen:o,onToggle:e})=>(0,p.jsxs)(l.Button,{onClick:e,"aria-expanded":o,children:[(0,p.jsx)(l.ColorIndicator,{colorValue:i},`wpmozo-color-dropdown-indicator-${d}`),a]},`wpmozo-color-dropdown-button-${d}`),renderContent:()=>{if(u||h){if(u){let a=r.attributes[e+n+"Solid"]||"",s=r.attributes[e+n+"Gradient"]||"";return""===a&&o.default&&(a=o.default[n+"Solid"]),""===s&&o.default&&(s=o.default[n+"Gradient"]),(0,p.jsx)(l.TabPanel,{className:"wpmozo-color-tabs",tabs:[{name:"solid",title:(0,t.__)("Solid","wpmozo-blocks-and-addons")},{name:"gradient",title:(0,t.__)("Gradient","wpmozo-blocks-and-addons")}],children:o=>"solid"===o.name?(0,p.jsx)(l.ColorPalette,{colors:b.colors,value:a,onChange:o=>{g(n,o),g(n+"Solid",o),g(n+"Gradient",m)},enableAlpha:!0}):(0,p.jsx)(l.GradientPicker,{gradients:b.gradients,value:s,onChange:o=>{g(n+"Solid",""),void 0===o?(g(n+"Gradient",m),g(n,null)):(g(n+"Gradient",o),g(n,o))}})},c)}{const o=i||m;return(0,p.jsx)(l.GradientPicker,{gradients:b.gradients,value:o,onChange:o=>{g(n,void 0===o?null:o)}},c)}}return(0,p.jsx)(l.ColorPalette,{colors:b.colors,value:i,onChange:o=>g(n,o),enableAlpha:!0},c)}},`wpmozo-color-dropdown-container-${d}`)};if(i){const t=s.map((o=>{const t=`${e}-${o.key}`;return(0,p.jsx)(l.__experimentalToolsPanelItem,{label:o.label,hasValue:()=>!0,isShownByDefault:!0,onDeselect:()=>h(o.key),children:x(o.key,o.label,o)},`wpmozo-color-tools-panel-item-${t}`)}));return(0,p.jsx)(l.__experimentalToolsPanel,{label:d,className:"wpmozo-color-tools-panel",resetAll:()=>{s.forEach((o=>{const t=u(o.key,null);r.setAttributes({[e+o.key]:t})})),o.afterOnChange&&o.afterOnChange(r)},children:t},`wpmozo-color-tools-panel-${e}`)}return(0,p.jsx)(n.Fragment,{children:s.map((t=>{const n=t.key,a=`${e}-${n}`;let s=r.attributes[e+n]||"";return""===s&&o.default&&(s=o.default[n]),(0,p.jsx)(l.ColorPalette,{colors:b.colors,value:s,onChange:o=>g(n,o)},`wpmozo-color-palette-${a}`)}))})},u=o=>{const{DimensionKey:e,props:n}=o,s=n.preAttributes,r=o.label||(0,t.__)("Dimensions","wpmozo-blocks-and-addons");let i=o.DimensionsTypes||null;const d=(o,t)=>(null===t&&void 0!==s[e+o]&&s[e+o].hasOwnProperty("default")&&(t=s[e+o].default),null!==t?t:""),c=(t,a=null)=>{const l=d(t,a);n.setAttributes({[e+t]:l}),"function"==typeof o.afterOnChange&&o.afterOnChange(n)},m=o.onChange||c;return(0,p.jsxs)(l.__experimentalToolsPanel,{label:r,resetAll:()=>{null===i&&(i={padding:"",margin:"",position:""});for(const o in i){const t=d(o,null);n.setAttributes({[e+o]:t})}"function"==typeof o.afterOnChange&&o.afterOnChange(n)},children:[(null===i||i.hasOwnProperty("padding"))&&(0,p.jsx)(l.__experimentalToolsPanelItem,{label:(0,t.__)("Padding","wpmozo-blocks-and-addons"),hasValue:()=>!0,isShownByDefault:!0,className:"tools-panel-item-spacing",onDeselect:()=>c("padding"),children:(0,p.jsx)(a.__experimentalSpacingSizesControl,{label:"Padding",values:n.attributes[e+"padding"],onChange:o=>m("padding",o)})}),(null===i||i.hasOwnProperty("margin"))&&(0,p.jsx)(l.__experimentalToolsPanelItem,{label:(0,t.__)("Margin","wpmozo-blocks-and-addons"),hasValue:()=>!0,isShownByDefault:!0,className:"tools-panel-item-spacing",onDeselect:()=>c("margin"),children:(0,p.jsx)(a.__experimentalSpacingSizesControl,{label:"Margin",values:n.attributes[e+"margin"],onChange:o=>m("margin",o)})}),(null===i||i.hasOwnProperty("position"))&&(0,p.jsx)(l.__experimentalToolsPanelItem,{label:(0,t.__)("Position","wpmozo-blocks-and-addons"),hasValue:()=>!0,isShownByDefault:!0,className:"tools-panel-item-spacing",onDeselect:()=>c("position"),children:(0,p.jsx)(a.__experimentalSpacingSizesControl,{label:"Position",values:n.attributes[e+"position"],onChange:o=>m("position",o)})})]},`wpmozo-dimensions-panel-${e}`)},h=o=>{const{BorderKey:e,props:n}=o,s=n.preAttributes,r=o.label||(0,t.__)("Border","wpmozo-blocks-and-addons");let i=o.BorderTypes||null;const d=(o,t)=>(null===t&&void 0!==s[e+o]&&s[e+o].hasOwnProperty("default")&&(t=s[e+o].default),null!==t?t:""),c=(t,a=null)=>{const l=d(t,a);n.setAttributes({[e+t]:l}),"function"==typeof o.afterOnChange&&o.afterOnChange(n)},m=o.onChange||c;return(0,p.jsxs)(l.__experimentalToolsPanel,{label:r,resetAll:()=>{null===i&&(i={border:"",borderRadius:""});for(const o in i){const t=d(o,null);n.setAttributes({[e+o]:t})}"function"==typeof o.afterOnChange&&o.afterOnChange(n)},children:[(null===i||i.hasOwnProperty("border"))&&(0,p.jsx)(l.__experimentalToolsPanelItem,{label:(0,t.__)("Border","wpmozo-blocks-and-addons"),hasValue:()=>!0,isShownByDefault:!0,onDeselect:()=>c("border"),children:(0,p.jsx)(l.__experimentalBorderBoxControl,{label:"Border",value:n.attributes[e+"border"],onChange:o=>m("border",o)})}),(null===i||i.hasOwnProperty("radius"))&&(0,p.jsx)(l.__experimentalToolsPanelItem,{label:(0,t.__)("Radius","wpmozo-blocks-and-addons"),hasValue:()=>!0,isShownByDefault:!0,onDeselect:()=>c("borderRadius"),children:(0,p.jsx)(a.__experimentalBorderRadiusControl,{label:"Radius",values:n.attributes[e+"borderRadius"],onChange:o=>m("borderRadius",o)})})]},`wpmozo-border-panel-${e}`)},g=({props:o,attrKye:e,edit:s,select:r,allowedTypes:i,accept:d,imageSrc:c,onSelect:m,label:b=""})=>{const u=s||(0,t.__)("Edit Image","wpmozo-blocks-and-addons"),h=r||(0,t.__)("Select Image","wpmozo-blocks-and-addons"),g=i||["image"],x=d||"image/*",w=c||o.attributes[e],_=()=>{o.setAttributes({[e]:""})};return(0,p.jsx)(a.MediaUploadCheck,{children:(0,p.jsx)(a.MediaUpload,{onSelect:t=>{m?m(t):(t=>{o.setAttributes({[e]:t.url})})(t)},allowedTypes:g,accept:x,value:w,render:({open:o})=>(0,p.jsx)(n.Fragment,{children:(0,p.jsx)(l.BaseControl,{label:b,children:(0,p.jsxs)("div",{className:"components-base-control wpmozo-media-uploader-wrap",children:[w&&(0,p.jsx)("img",{className:"wpmozo-media-uploader",src:w,alt:(0,t.__)("Selected image","wpmozo-blocks-and-addons")}),(0,p.jsx)(l.Button,{isPrimary:!0,onClick:e=>{e.stopPropagation(),o()},children:w?u:h}),w&&(0,p.jsx)(l.Button,{isLink:!0,isDestructive:!0,onClick:_,style:{marginLeft:"10px",verticalAlign:"super"},children:(0,t.__)("Remove Image","wpmozo-blocks-and-addons")})]})})})})})},x=o=>{const e=wpmozo_bna_editor_object.icons,{iconPickerKey:t,props:n,label:a}=o,{attributes:s,setAttributes:r}=n,i=""!==o.value?o.value:"",d=void 0!==s[t]&&""!==s[t]?s[t]:"fas fa-ban",c=o.hasOwnProperty("onChange")?o.onChange:(e=null)=>{r({[t]:e}),o.hasOwnProperty("afterOnChange")&&o.afterOnChange(n)};return(0,p.jsxs)("div",{className:"wpmozo-icon-picker",children:[(0,p.jsx)(l.ComboboxControl,{label:a,value:i,allowReset:!1,onChange:c,options:e,__experimentalRenderItem:o=>{const e=o.item.value;return(0,p.jsxs)("span",{children:[(0,p.jsx)("i",{className:e},`wpmozo-icon-el-${t}`)," ",o.item.label]},`wpmozo-icon-span-${t}`)},__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0},`wpmozo-icon-combobox-${t}`),(0,p.jsx)("div",{className:"wpmozo-icon-wraper",children:(0,p.jsx)("i",{className:d})},`wpmozo-icon-wrap-${t}`)]},`wpmozo-icon-picker-${t}`)},w=o=>{const{alignmentKey:e,type:n="horizontal",value:a,onChange:s,label:r=(0,t.__)("Alignment","wpmozo-blocks-and-addons"),className:i=`wpmozo-alignment-compo ${n}`,alignments:d,showJustify:c=!1}=o,m={left:(0,p.jsx)(l.__experimentalToggleGroupControlOptionIcon,{value:"left",icon:(0,p.jsx)(l.Icon,{icon:"editor-alignleft"}),label:(0,t.__)("Left","wpmozo-blocks-and-addons")},`wpmozo-alignment-left-${e}`),center:(0,p.jsx)(l.__experimentalToggleGroupControlOptionIcon,{value:"center",icon:(0,p.jsx)(l.Icon,{icon:"editor-aligncenter"}),label:(0,t.__)("Center","wpmozo-blocks-and-addons")},`wpmozo-alignment-center-${e}`),right:(0,p.jsx)(l.__experimentalToggleGroupControlOptionIcon,{value:"right",icon:(0,p.jsx)(l.Icon,{icon:"editor-alignright"}),label:(0,t.__)("Right","wpmozo-blocks-and-addons")},`wpmozo-alignment-right-${e}`)};c&&(m.justify=(0,p.jsx)(l.__experimentalToggleGroupControlOptionIcon,{value:"justify",icon:(0,p.jsx)(l.Icon,{icon:"editor-justify"}),label:(0,t.__)("Justify","wpmozo-blocks-and-addons")},`wpmozo-alignment-justify-${e}`));const b={top:(0,p.jsx)(l.__experimentalToggleGroupControlOptionIcon,{value:"top",icon:(0,p.jsx)(l.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,p.jsx)(l.Path,{d:"M9 20h6V9H9v11zM4 4v1.5h16V4H4z"})}),label:(0,t.__)("Top","wpmozo-blocks-and-addons")},`wpmozo-alignment-top-${e}`),center:(0,p.jsx)(l.__experimentalToggleGroupControlOptionIcon,{value:"center",icon:(0,p.jsx)(l.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,p.jsx)(l.Path,{d:"M20 11h-5V4H9v7H4v1.5h5V20h6v-7.5h5z"})}),label:(0,t.__)("Center","wpmozo-blocks-and-addons")},`wpmozo-alignment-center-${e}`),bottom:(0,p.jsx)(l.__experimentalToggleGroupControlOptionIcon,{value:"bottom",icon:(0,p.jsx)(l.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,p.jsx)(l.Path,{d:"M15 4H9v11h6V4zM4 18.5V20h16v-1.5H4z"})}),label:(0,t.__)("Bottom","wpmozo-blocks-and-addons")},`wpmozo-alignment-bottom-${e}`)},u="vertical"===n?b:m,h=d?d.map((o=>u[o])):Object.values(u);return(0,p.jsx)(l.__experimentalToggleGroupControl,{className:i,onChange:s,label:r,isDeselectable:!0,isBlock:!0,value:a,children:h},`wpmozo-alignment-${n}-${e}`)},_=({attributes:o,setAttributes:e})=>{const n={attributes:o,setAttributes:e,preAttributes:{}},{timezone:a}=(0,i.getSettings)();return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(l.PanelBody,{title:(0,t.__)("Date & Time","wpmozo-blocks-and-addons"),initialOpen:!0,children:(0,p.jsx)(l.DateTimePicker,{className:"wpmozo-date-time-picker",currentDate:o.dateTime||new Date,onChange:o=>{const t=new Date(o+"Z");t.setMilliseconds(t.getMilliseconds()-60*a.offset*60*1e3);const n=Math.floor(t.getTime()/1e3);console.log("timestamp:: ",n),e({dateTimeUTC:t,dateTime:o,dateTimeTimestamp:n})},is12Hour:!0,__nextRemoveResetButton:!0,__nextRemoveHelpButton:!0})}),(0,p.jsxs)(l.PanelBody,{title:(0,t.__)("Content","wpmozo-blocks-and-addons"),initialOpen:!1,children:[(0,p.jsx)(l.TextControl,{label:(0,t.__)("Title","wpmozo-blocks-and-addons"),onChange:o=>e({title:o}),value:o.title||""}),(0,p.jsx)(l.TextareaControl,{label:(0,t.__)("Description","wpmozo-blocks-and-addons"),onChange:o=>e({description:o}),value:o.description||""}),(0,p.jsx)("hr",{}),(0,p.jsx)(l.ToggleControl,{label:(0,t.__)("Show Image","wpmozo-blocks-and-addons"),checked:o.showImage||!1,onChange:o=>e({showImage:o}),__nextHasNoMarginBottom:!0}),o.showImage&&(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(g,{attrKye:"image",props:n,label:(0,t.__)("Image","wpmozo-blocks-and-addons")}),(0,p.jsx)(l.TextControl,{label:(0,t.__)("Image Alt Text","wpmozo-blocks-and-addons"),value:o.imageAlt,onChange:o=>e({imageAlt:o}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})]}),(0,p.jsx)("hr",{}),(0,p.jsx)(l.ToggleControl,{label:(0,t.__)("Show Button","wpmozo-blocks-and-addons"),checked:o.showButton,onChange:o=>e({showButton:o})}),o.showButton&&(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(l.TextControl,{label:(0,t.__)("Button Text","wpmozo-blocks-and-addons"),value:o.buttonText,onChange:o=>e({buttonText:o})}),(0,p.jsx)(l.TextControl,{label:(0,t.__)("Button URL","wpmozo-blocks-and-addons"),onChange:o=>e({buttonUrl:o}),value:o.buttonUrl}),(0,p.jsxs)(l.__experimentalToggleGroupControl,{label:(0,t.__)("Button Link Target","wpmozo-blocks-and-addons"),value:o.buttonLinkTarget,onChange:o=>e({buttonLinkTarget:o}),children:[(0,p.jsx)(l.__experimentalToggleGroupControlOptionIcon,{value:"external",icon:"external",label:(0,t.__)("New Window","wpmozo-blocks-and-addons")}),(0,p.jsx)(l.__experimentalToggleGroupControlOptionIcon,{value:"same",icon:"admin-links",label:(0,t.__)("Same Window","wpmozo-blocks-and-addons")})]})]})]}),(0,p.jsxs)(l.PanelBody,{title:(0,t.__)("Display","wpmozo-blocks-and-addons"),initialOpen:!1,children:[(0,p.jsx)(l.SelectControl,{label:(0,t.__)("Layout","wpmozo-blocks-and-addons"),value:o.layout,options:[{value:"layout1",label:(0,t.__)("Layout 1","wpmozo-blocks-and-addons")},{value:"layout2",label:(0,t.__)("Layout 2","wpmozo-blocks-and-addons")},{value:"layout3",label:(0,t.__)("Layout 3","wpmozo-blocks-and-addons")}],onChange:o=>e({layout:o}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),(0,p.jsx)(l.BaseControl,{label:(0,t.__)("Hide Days","wpmozo-blocks-and-addons"),children:(0,p.jsx)(l.ToggleControl,{label:(0,t.__)("Hide/Show days box in timer.","wpmozo-blocks-and-addons"),checked:o.hideDays,onChange:o=>e({hideDays:o})})}),(0,p.jsx)(l.SelectControl,{label:(0,t.__)("Display Labels","wpmozo-blocks-and-addons"),value:o.displayLabel,options:[{value:"none",label:(0,t.__)("None","wpmozo-blocks-and-addons")},{value:"full",label:(0,t.__)("Full Label","wpmozo-blocks-and-addons")},{value:"short",label:(0,t.__)("Short Label","wpmozo-blocks-and-addons")},{value:"single",label:(0,t.__)("Single Character","wpmozo-blocks-and-addons")}],onChange:o=>e({displayLabel:o}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),(0,p.jsx)(l.BaseControl,{label:(0,t.__)("Display Labels In Stack","wpmozo-blocks-and-addons"),children:(0,p.jsx)(l.ToggleControl,{label:(0,t.__)("Show stacked (In new line) label.","wpmozo-blocks-and-addons"),checked:o.stackLabel,onChange:o=>e({stackLabel:o})})})]})]})},z=({attributes:o,setAttributes:e})=>{const s={attributes:o,setAttributes:e,preAttributes:{}},[i,d]=(0,n.useState)("normal"),[m,g]=(0,n.useState)("normal"),[_,z]=(0,n.useState)("general"),[j,C]=(0,n.useState)("general"),[v,k]=(0,n.useState)("normal");return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)(l.PanelBody,{title:(0,t.__)("Content Box","wpmozo-blocks-and-addons"),initialOpen:!0,children:[(0,p.jsx)(w,{label:(0,t.__)("Content Box Alignment","wpmozo-blocks-and-addons"),onChange:o=>e({contentBoxAlign:o}),value:o.contentBoxAlign}),["layout2","layout3"].includes(o.layout)&&(0,p.jsx)(p.Fragment,{children:(0,p.jsx)(l.RangeControl,{label:(0,t.__)("Content Box Width (in %)","wpmozo-blocks-and-addons"),value:o.contentBoxWidth,onChange:o=>e({contentBoxWidth:o}),min:1,max:100,step:1,allowReset:!0,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})})]}),o.showImage&&(0,p.jsx)(p.Fragment,{children:(0,p.jsxs)(l.PanelBody,{title:(0,t.__)("Image","wpmozo-blocks-and-addons"),className:"wpmozo-typography-panel",initialOpen:!1,children:[(0,p.jsx)(u,{props:s,label:(0,t.__)("Image Dimensions","wpmozo-blocks-and-addons"),DimensionKey:"image",DimensionsTypes:{padding:!0}}),(0,p.jsx)("hr",{}),(0,p.jsx)(l.ToggleControl,{label:(0,t.__)("Enable Image Min/Max Width","wpmozo-blocks-and-addons"),checked:o.imageEnableCustomSize||!1,onChange:o=>e({imageEnableCustomSize:o}),__nextHasNoMarginBottom:!0}),o.imageEnableCustomSize&&(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(l.RangeControl,{label:(0,t.__)("Image Minimum Width","wpmozo-blocks-and-addons"),value:o.imageMinWidth,onChange:o=>e({imageMinWidth:o}),min:1,max:1e3,step:1,allowReset:!0,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),(0,p.jsx)(l.RangeControl,{label:(0,t.__)("Image Maximum Width","wpmozo-blocks-and-addons"),value:o.imageMaxWidth,onChange:o=>e({imageMaxWidth:o}),min:1,max:1e3,step:1,allowReset:!0,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})]}),(0,p.jsx)(h,{props:s,label:(0,t.__)("Image Border","wpmozo-blocks-and-addons"),BorderKey:"image",BorderTypes:{border:!0,radius:!0}})]})}),(0,p.jsxs)(l.PanelBody,{title:(0,t.__)("Title Text","wpmozo-blocks-and-addons"),className:"wpmozo-typography-panel",initialOpen:!1,children:[(0,p.jsx)(l.BaseControl,{label:(0,t.__)("Heading Level","wpmozo-blocks-and-addons"),__nextHasNoMarginBottom:!0,children:(0,p.jsx)(l.ButtonGroup,{children:r.map(((t,n)=>(0,p.jsx)(l.Button,{isPressed:t.value===o.titleLevel,onClick:()=>e({titleLevel:t.value}),children:t.label},t.value)))})}),(0,p.jsxs)(l.BaseControl,{className:"wpmozo-button-tabs-wrap",__nextHasNoMarginBottom:!0,children:[(0,p.jsxs)(l.ButtonGroup,{children:[(0,p.jsx)(l.Button,{className:"wpmozo-button-tabs-btn",isPressed:"normal"===i,onClick:()=>d("normal"),children:(0,t.__)("Normal","wpmozo-blocks-and-addons")}),(0,p.jsx)(l.Button,{className:"wpmozo-button-tabs-btn",isPressed:"hover"===i,onClick:()=>d("hover"),children:(0,t.__)("Hover","wpmozo-blocks-and-addons")})]}),"normal"===i&&(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(b,{ColorKey:"title",props:s,ColorTypes:[{key:"Color",label:(0,t.__)("Title Color","wpmozo-blocks-and-addons")}]}),(0,p.jsx)(c,{props:s,TypographyKey:"title"})]}),"hover"===i&&(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(b,{ColorKey:"titleHover",props:s,ColorTypes:[{key:"Color",label:(0,t.__)("Title Hover Color","wpmozo-blocks-and-addons")}]}),(0,p.jsx)(c,{props:s,TypographyKey:"titleHover"})]})]})]}),(0,p.jsx)(l.PanelBody,{title:(0,t.__)("Description Text","wpmozo-blocks-and-addons"),className:"wpmozo-typography-panel",initialOpen:!1,children:(0,p.jsxs)(l.BaseControl,{className:"wpmozo-button-tabs-wrap",__nextHasNoMarginBottom:!0,children:[(0,p.jsxs)(l.ButtonGroup,{children:[(0,p.jsx)(l.Button,{className:"wpmozo-button-tabs-btn",isPressed:"normal"===m,onClick:()=>g("normal"),children:(0,t.__)("Normal","wpmozo-blocks-and-addons")}),(0,p.jsx)(l.Button,{className:"wpmozo-button-tabs-btn",isPressed:"hover"===m,onClick:()=>g("hover"),children:(0,t.__)("Hover","wpmozo-blocks-and-addons")})]}),"normal"===m&&(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(b,{ColorKey:"description",props:s,ColorTypes:[{key:"Color",label:(0,t.__)("Description Color","wpmozo-blocks-and-addons")}]}),(0,p.jsx)(c,{props:s,TypographyKey:"description"})]}),"hover"===m&&(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(b,{ColorKey:"descriptionHover",props:s,ColorTypes:[{key:"Color",label:(0,t.__)("Description Hover Color","wpmozo-blocks-and-addons")}]}),(0,p.jsx)(c,{props:s,TypographyKey:"descriptionHover"})]})]})}),(0,p.jsxs)(l.PanelBody,{title:(0,t.__)("Timer/Clock Box","wpmozo-blocks-and-addons"),className:"wpmozo-typography-panel",initialOpen:!1,children:[(0,p.jsx)(w,{label:(0,t.__)("Timer Box Alignment","wpmozo-blocks-and-addons"),onChange:o=>e({timerBoxAlign:o}),value:o.timerBoxAlign}),(0,p.jsx)(a.__experimentalColorGradientControl,{colors:[],gradients:[],label:(0,t.__)("Timer Box Background","wpmozo-blocks-and-addons"),colorValue:o.timerBoxBackground,gradientValue:o.timerBoxBGGradient,onColorChange:o=>e({timerBoxBackground:o}),onGradientChange:o=>e({timerBoxBGGradient:o})}),(0,p.jsx)(u,{props:s,label:(0,t.__)("Timer Box Dimensions","wpmozo-blocks-and-addons"),DimensionKey:"timerBox",DimensionsTypes:{padding:!0,margin:!0}}),(0,p.jsx)(h,{props:s,label:(0,t.__)("Timer Box Border","wpmozo-blocks-and-addons"),BorderKey:"timerBox",BorderTypes:{border:!0,radius:!0}})]}),(0,p.jsx)(l.PanelBody,{title:(0,t.__)("Timer/Clock Digits","wpmozo-blocks-and-addons"),className:"wpmozo-typography-panel",initialOpen:!1,children:(0,p.jsxs)(l.BaseControl,{className:"wpmozo-button-tabs-wrap",__nextHasNoMarginBottom:!0,children:[(0,p.jsxs)(l.ButtonGroup,{children:[(0,p.jsx)(l.Button,{className:"wpmozo-button-tabs-btn",isPressed:"general"===_,onClick:()=>z("general"),children:(0,t.__)("General","wpmozo-blocks-and-addons")}),(0,p.jsx)(l.Button,{className:"wpmozo-button-tabs-btn",isPressed:"text"===_,onClick:()=>z("text"),children:(0,t.__)("Text","wpmozo-blocks-and-addons")})]}),"general"===_&&(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(b,{label:(0,t.__)("Background Color","wpmozo-blocks-and-addons"),ColorKey:"digits",props:s,ColorTypes:[{key:"BackgroundColor",label:(0,t.__)("Digit Background Color","wpmozo-blocks-and-addons")}]}),(0,p.jsx)(u,{props:s,label:(0,t.__)("Digit Dimensions","wpmozo-blocks-and-addons"),DimensionKey:"digits",DimensionsTypes:{padding:!0,margin:!0}}),(0,p.jsx)(h,{props:s,label:(0,t.__)("Digit Border","wpmozo-blocks-and-addons"),BorderKey:"digits",BorderTypes:{border:!0,radius:!0}}),(0,p.jsx)(l.RangeControl,{label:(0,t.__)("Digit Box Width","wpmozo-blocks-and-addons"),value:o.digitsBoxWidth,onChange:o=>e({digitsBoxWidth:o}),min:90,max:350,step:1,allowReset:!0,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})]}),"text"===_&&(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(b,{ColorKey:"digits",props:s,ColorTypes:[{key:"Color",label:(0,t.__)("Digit Color","wpmozo-blocks-and-addons")}]}),(0,p.jsx)(c,{props:s,TypographyKey:"digits"})]})]})}),(0,p.jsx)(l.PanelBody,{title:(0,t.__)("Timer/Clock Labels","wpmozo-blocks-and-addons"),className:"wpmozo-typography-panel",initialOpen:!1,children:(0,p.jsxs)(l.BaseControl,{className:"wpmozo-button-tabs-wrap",__nextHasNoMarginBottom:!0,children:[(0,p.jsxs)(l.ButtonGroup,{children:[(0,p.jsx)(l.Button,{className:"wpmozo-button-tabs-btn",isPressed:"general"===j,onClick:()=>C("general"),children:(0,t.__)("General","wpmozo-blocks-and-addons")}),(0,p.jsx)(l.Button,{className:"wpmozo-button-tabs-btn",isPressed:"text"===j,onClick:()=>C("text"),children:(0,t.__)("Text","wpmozo-blocks-and-addons")})]}),"general"===j&&(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(b,{label:(0,t.__)("Background Color","wpmozo-blocks-and-addons"),ColorKey:"labels",props:s,ColorTypes:[{key:"BackgroundColor",label:(0,t.__)("Label Background Color","wpmozo-blocks-and-addons")}]}),(0,p.jsx)(u,{props:s,label:(0,t.__)("Label Dimensions","wpmozo-blocks-and-addons"),DimensionKey:"labels",DimensionsTypes:{padding:!0,margin:!0}})]}),"text"===j&&(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(b,{ColorKey:"labels",props:s,ColorTypes:[{key:"Color",label:(0,t.__)("Label Color","wpmozo-blocks-and-addons")}]}),(0,p.jsx)(c,{props:s,TypographyKey:"labels"})]})]})}),(0,p.jsxs)(l.PanelBody,{title:(0,t.__)("Timer Separator","wpmozo-blocks-and-addons"),className:"wpmozo-typography-panel",initialOpen:!1,children:[(0,p.jsx)(l.ToggleControl,{label:(0,t.__)("Show Separator","wpmozo-blocks-and-addons"),checked:o.showSeparator||!1,onChange:o=>e({showSeparator:o}),__nextHasNoMarginBottom:!0}),o.showSeparator&&(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(l.TextControl,{label:(0,t.__)("Separator Text","wpmozo-blocks-and-addons"),onChange:o=>e({separatorText:o}),value:o.separatorText||""}),(0,p.jsxs)(l.BaseControl,{className:"wpmozo-button-tabs-wrap",__nextHasNoMarginBottom:!0,children:[(0,p.jsx)(b,{ColorKey:"separator",props:s,ColorTypes:[{key:"Color",label:(0,t.__)("Separator Color","wpmozo-blocks-and-addons")}]}),(0,p.jsx)(c,{props:s,TypographyKey:"separator"})]})]})]}),o.showButton&&(0,p.jsx)(p.Fragment,{children:(0,p.jsx)(l.PanelBody,{title:(0,t.__)("Sale Button","wpmozo-blocks-and-addons"),className:"wpmozo-typography-panel",initialOpen:!1,children:(0,p.jsxs)(l.BaseControl,{className:"wpmozo-button-tabs-wrap",__nextHasNoMarginBottom:!0,children:[(0,p.jsxs)(l.ButtonGroup,{children:[(0,p.jsx)(l.Button,{className:"wpmozo-button-tabs-btn",isPressed:"normal"===v,onClick:()=>k("normal"),children:(0,t.__)("Normal","wpmozo-blocks-and-addons")}),(0,p.jsx)(l.Button,{className:"wpmozo-button-tabs-btn",isPressed:"hover"===v,onClick:()=>k("hover"),children:(0,t.__)("Hover","wpmozo-blocks-and-addons")})]}),"normal"===v&&(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(a.__experimentalColorGradientControl,{colors:[],gradients:[],label:(0,t.__)("Button Background","wpmozo-blocks-and-addons"),colorValue:o.buttonBackground,gradientValue:o.buttonBGGradient,onColorChange:o=>e({buttonBackground:o}),onGradientChange:o=>e({buttonBGGradient:o})}),(0,p.jsx)("hr",{}),(0,p.jsx)(l.ToggleControl,{label:(0,t.__)("Show Button Icon","wpmozo-blocks-and-addons"),checked:o.buttonUseIcon||!1,onChange:o=>e({buttonUseIcon:o}),__nextHasNoMarginBottom:!0}),o.buttonUseIcon&&(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(x,{props:s,label:(0,t.__)("Icon","wpmozo-blocks-and-addons"),iconPickerKey:"buttonIcon",value:o.buttonIcon,onChange:o=>e({buttonIcon:o})}),(0,p.jsxs)(l.__experimentalToggleGroupControl,{label:(0,t.__)("Icon Position","wpmozo-blocks-and-addons"),value:o.buttonIconPosition,onChange:o=>e({buttonIconPosition:o}),children:[(0,p.jsx)(l.__experimentalToggleGroupControlOption,{value:"before",label:"Before"}),(0,p.jsx)(l.__experimentalToggleGroupControlOption,{value:"after",label:"After"})]}),(0,p.jsx)(l.ToggleControl,{label:(0,t.__)("Show Icon On Hover","wpmozo-blocks-and-addons"),checked:o.buttonIconOnHover,onChange:o=>e({buttonIconOnHover:o})})]}),(0,p.jsx)(b,{props:s,label:(0,t.__)("Button Text Color","wpmozo-blocks-and-addons"),ColorKey:"button",ColorTypes:[{key:"Color",label:(0,t.__)("Button Text Color","wpmozo-blocks-and-addons")}]}),(0,p.jsx)(c,{props:s,TypographyKey:"button"}),(0,p.jsx)(u,{props:s,label:(0,t.__)("Button Dimensions","wpmozo-blocks-and-addons"),DimensionKey:"button",DimensionsTypes:{padding:!0,margin:!0}}),(0,p.jsx)(h,{props:s,label:(0,t.__)("Button Border","wpmozo-blocks-and-addons"),BorderKey:"button",BorderTypes:{border:!0,radius:!0}})]}),"hover"===v&&(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(a.__experimentalColorGradientControl,{colors:[],gradients:[],label:(0,t.__)("Button Hover Background","wpmozo-blocks-and-addons"),colorValue:o.buttonHoverBackground,gradientValue:o.buttonHoverBGGradient,onColorChange:o=>e({buttonHoverBackground:o}),onGradientChange:o=>e({buttonHoverBGGradient:o})}),(0,p.jsx)(b,{props:s,label:(0,t.__)("Button Hover Text Color","wpmozo-blocks-and-addons"),ColorKey:"buttonHover",ColorTypes:[{key:"Color",label:(0,t.__)("Button Hover Text Color","wpmozo-blocks-and-addons")}]}),(0,p.jsx)(c,{props:s,TypographyKey:"buttonHover"}),(0,p.jsx)(h,{props:s,label:(0,t.__)("Button Hover Border","wpmozo-blocks-and-addons"),BorderKey:"buttonHover",BorderTypes:{border:!0,radius:!0}})]})]})})})]})},j=({attributes:o,setAttributes:e})=>{let n={attributes:o,setAttributes:e};return n=Object.assign({},n,{preAttributes:{}}),(0,p.jsx)(a.InspectorControls,{children:(0,p.jsx)(l.TabPanel,{className:"wpmozo-settings-tab-panel",activeClass:"is-active",tabs:[{name:"general",title:(0,t.__)("General","wpmozo-blocks-and-addons"),className:"wpmozo-inspector-tab-general"},{name:"design",title:(0,t.__)("Design","wpmozo-blocks-and-addons"),className:"wpmozo-inspector-tab-design"},{name:"advanced",title:(0,t.__)("Advanced","wpmozo-blocks-and-addons"),className:"wpmozo-inspector-tab-advanced"}],children:n=>(0,p.jsxs)("div",{className:"wpmozo-settings-tab-panel-content",children:["general"===n.name&&(0,p.jsx)(_,{attributes:o,setAttributes:e}),"design"===n.name&&(0,p.jsx)(z,{attributes:o,setAttributes:e}),"advanced"===n.name&&(0,p.jsx)(l.PanelBody,{title:(0,t.__)("Advanced","wpmozo-blocks-and-addons"),initialOpen:!0,children:(0,p.jsx)(l.TextControl,{label:(0,t.__)("Additional CSS Class(es)","wpmozo-blocks-and-addons"),value:o.className||"",onChange:o=>e({className:o}),help:(0,t.__)("Separate multiple classes with spaces.","wpmozo-blocks-and-addons")})})]})})})},C=({attributes:o,clientId:e})=>{let t=function(o,e){const t={};return o.forEach((o=>{const n=function(o,e){const t={FontSize:"",FontAppearance:{fontStyle:"",fontWeight:""},LetterSpacing:"",Decoration:"",LetterCase:"",LineHeight:"",text:"",background:"",borderRadius:"",border:[],padding:"",margin:"",position:"",width:"",height:""};let n={};for(const a in t)o.hasOwnProperty(e+a)&&(n[a]=o[e+a]);return n}(e,o);t[o]=function(o={}){let e="";const t=(o,t)=>{void 0!==t&&""!==t&&(e+=`${o}: ${t};`)};if(t("font-size",o.FontSize),t("letter-spacing",o.LetterSpacing),t("text-decoration",o.Decoration),t("text-transform",o.LetterCase),t("line-height",o.LineHeight),t("color",o.text),t("background",o.background),t("width",o.width),t("height",o.height),o.FontAppearance&&(t("font-style",o.FontAppearance.fontStyle),t("font-weight",o.FontAppearance.fontWeight)),o.border){if(o.border.width){let e=o.border.width;e+=` ${o.border.style||"solid"}`,o.border.color&&(e+=` ${o.border.color}`),t("border",e)}if(o.border.top)for(const e in o.border){for(const n in o.border[e])t(`border-${e}-${n}`,o.border[e][n]);o.border[e].hasOwnProperty("style")||t(`border-${e}-style`,"solid")}}o.borderRadius&&(t("border-top-left-radius",o.borderRadius.topLeft),t("border-top-right-radius",o.borderRadius.topRight),t("border-bottom-left-radius",o.borderRadius.bottomLeft),t("border-bottom-right-radius",o.borderRadius.bottomRight),void 0===o.borderRadius.topLeft&&t("border-radius",o.borderRadius));const n=(o,e)=>{const n=s(e);for(const a in e)n[a]&&t(`${o}-${a}`,n[a])};if(o.padding&&n("padding",o.padding),o.margin&&n("margin",o.margin),o.position){const e=s(o.position);for(const n in o.position)e[n]&&t(n,e[n]);e.top&&!e.bottom&&t("bottom","auto"),e.bottom&&!e.top&&t("top","auto"),e.right&&!e.left&&t("left","auto"),e.left&&!e.right&&t("right","auto"),t("position","absolute")}return e}(n)})),t}(["image","title","titleHover","description","descriptionHover","button","buttonHover","timerBox","digits","labels","separator"],o),n=`#block-${o.ID} {`;return o.contentBoxAlign&&(n+=`.wpmozo-promotion-bar-content{\n\t\t\ttext-align: ${o.contentBoxAlign};\n\t\t\t${o.layout?"":"background:"+o.timerBoxBGGradient+";"}\n\t\t}`,o.layout&&"layout1"!==o.layout&&o.contentBoxWidth&&(n+=`.wpmozo-promotion-bar-wrap.layout2 .wpmozo-promotion-bar-content, .wpmozo-promotion-bar-wrap.layout3 .wpmozo-promotion-bar-content{\n\t\t\t\twidth: ${o.contentBoxWidth}%;\n\t\t\t}`)),o.timerBoxAlign&&(n+=`.wpmozo-promotion-bar-timer{\n\t\t\tjustify-content: ${"left"===o.timerBoxAlign?"flex-start":"right"===o.timerBoxAlign?"flex-end":o.timerBoxAlign};\n\t\t}`),!1===o.stackLabel&&(n+=".wpmozo-pb-timer-box{display: flex; align-items: center; justify-content: center;}"),n+=`.wpmozo-pb-timer-box{\n\t\t${o.timerBoxBGGradient?"background:"+o.timerBoxBGGradient+";":""}\n\t\t${o.timerBoxBackground?"background-color:"+o.timerBoxBackground+";":""}\n\t\t${t.timerBox}\n\t}`,o.showImage&&(n+=`.wpmozo-image-wrap .wpmozo-promotion-bar-image{\n\t\t\t${o.imageEnableCustomSize&&o.imageMinWidth?`min-width: ${o.imageMinWidth}px;`:""}\n\t\t\t${o.imageEnableCustomSize&&o.imageMaxWidth?`max-width: ${o.imageMaxWidth}px;`:""}\n\t\t\t${t.image}\n\t\t}`),n+=`.wpmozo-pb-title{\n\t\t${o.titleColor?`color: ${o.titleColor};`:""}\n\t\t${t.title}\n\t}`,n+=`.wpmozo-pb-title:hover{\n\t\t${o.titleHoverColor?`color: ${o.titleHoverColor};`:""}\n\t\t${t.titleHover}\n\t}`,n+=`.wpmozo-pb-desc{\n\t\t${o.descriptionColor?`color: ${o.descriptionColor};`:""}\n\t\t${t.description}\n\t}`,n+=`.wpmozo-pb-desc:hover{\n\t\t${o.descriptionHoverColor?`color: ${o.descriptionHoverColor};`:""}\n\t\t${t.descriptionHover}\n\t}`,n+=`.wpmozo-pb-timer-box .wpmozo-pb-number{\n\t\t${o.digitsColor?`color: ${o.digitsColor};`:""}\n\t\t${o.digitsBoxWidth?`min-width: ${o.digitsBoxWidth}px;`:""}\n\t\t${o.digitsBackgroundColor?`background-color: ${o.digitsBackgroundColor};`:""}\n\t\t${t.digits}\n\t}`,o.displayLabel&&"none"!==o.displayLabel&&(n+=`.wpmozo-pb-timer-box .wpmozo-pb-label{\n\t\t\t${o.labelsColor?`color: ${o.labelsColor};`:""}\n\t\t\t${o.labelsBackgroundColor?`background-color: ${o.labelsBackgroundColor};`:""}\n\t\t\t${t.labels}\n\t\t}`),o.showSeparator&&(n+=`.wpmozo-promotion-bar-timer .wpmozo-pb-separator{\n\t\t\t${o.separatorColor?`color: ${o.separatorColor};`:""}\n\t\t\t${t.separator}\n\t\t}`),o.showButton&&(n+=`.wpmozo-button-wrap .wpmozo-button{\n\t\t\t${o.buttonBGGradient?"background:"+o.buttonBGGradient+";":""}\n\t\t\t${o.buttonBackground?"background:"+o.buttonBackground+";":""}\n\t\t\t${o.buttonColor?`color: ${o.buttonColor};`:""}\n\t\t\t${t.button}\n\t\t}`,n+=`.wpmozo-button-wrap .wpmozo-button:hover{\n\t\t\t${o.buttonHoverBGGradient?"background:"+o.buttonHoverBGGradient+";":""}\n\t\t\t${o.buttonHoverBackground?"background:"+o.buttonHoverBackground+";":""}\n\t\t\t${o.buttonHoverColor?`color: ${o.buttonHoverColor};`:""}\n\t\t\t${t.buttonHover}\n\t\t}`),n+="}",n},v=(0,p.jsxs)("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:"1024",height:"1024",viewBox:"0 0 1024 1024",children:[(0,p.jsx)("path",{fill:"#000",d:"M928 170.667h-21.333c-4.267-89.6-78.933-160-170.667-160h-448c-91.733 0-166.4 70.4-170.667 160h-21.333c-46.933 0-85.333 38.4-85.333 85.333v192c0 46.933 38.4 85.333 85.333 85.333h21.333v309.333c0 93.867 76.8 170.667 170.667 170.667h448c93.867 0 170.667-76.8 170.667-170.667v-309.333h21.333c46.933 0 85.333-38.4 85.333-85.333v-192c0-46.933-38.4-85.333-85.333-85.333zM288 53.333h448c68.267 0 123.733 51.2 128 117.333h-704c6.4-66.133 59.733-117.333 128-117.333zM864 842.667c0 70.4-57.6 128-128 128h-448c-70.4 0-128-57.6-128-128v-309.333h704v309.333zM970.667 448c0 23.467-19.2 42.667-42.667 42.667h-832c-23.467 0-42.667-19.2-42.667-42.667v-192c0-23.467 19.2-42.667 42.667-42.667h832c23.467 0 42.667 19.2 42.667 42.667v192z"}),(0,p.jsx)("path",{fill:"#000",d:"M501.333 326.4h-341.333c-12.8 0-21.333-8.533-21.333-21.333v0c0-12.8 8.533-21.333 21.333-21.333h341.333c12.8 0 21.333 8.533 21.333 21.333v0c0 10.667-8.533 21.333-21.333 21.333z"}),(0,p.jsx)("path",{fill:"#000",d:"M416 422.4h-256c-12.8 0-21.333-8.533-21.333-21.333v0c0-12.8 8.533-21.333 21.333-21.333h256c12.8 0 21.333 8.533 21.333 21.333v0c0 10.667-8.533 21.333-21.333 21.333z"}),(0,p.jsx)("path",{fill:"#000",d:"M844.8 394.667h-128c-23.467 0-42.667-19.2-42.667-42.667v0c0-23.467 19.2-42.667 42.667-42.667h128c23.467 0 42.667 19.2 42.667 42.667v0c0 23.467-19.2 42.667-42.667 42.667z"})]});(0,o.registerBlockType)(e.UU,{edit:o=>{var e,l,s;const{attributes:r,setAttributes:i,clientId:d}=o;(0,n.useEffect)((()=>{!r.ID&&d&&i({ID:d})}),[d]);const c=null!==(e=r.layout)&&void 0!==e?e:"layout1",m=null!==(l=r.displayLabel)&&void 0!==l?l:"full",b=null!==(s=r.hideDays)&&void 0!==s&&s;let u="";r.showImage&&""!==r.image&&(u=(0,p.jsx)("div",{className:"wpmozo-image-wrap",children:(0,p.jsx)("img",{src:r.image,alt:r.imageAlt,className:"wpmozo-promotion-bar-image"})}));let h="";r.title&&""!==r.title&&(h=(0,p.jsx)(a.RichText,{className:"wpmozo-pb-title",tagName:r.titleLevel,value:r.title,onChange:o=>i({title:o}),placeholder:(0,t.__)("Your title goes here","wpmozo-blocks-and-addons")}));let g="";r.description&&""!==r.description&&(g=(0,p.jsx)(a.RichText,{className:"wpmozo-pb-desc",tagName:"div",value:r.description,onChange:o=>i({description:o})}));let x="";if(r.showButton&&r.buttonUrl){let o="";r.buttonUseIcon&&r.buttonIcon&&(o=(0,p.jsx)("i",{className:"wpmozo-icon "+r.buttonIcon})),x=(0,p.jsx)("div",{className:"wpmozo-button-wrap",children:(0,p.jsxs)("a",{href:r.buttonUrl,target:"external"===r.buttonLinkTarget&&"_blank",className:["wpmozo-button","wpmozo_promotion_bar_button",r.buttonUseIcon&&r.buttonIconOnHover?"wpmozo-icon-on-hover":"",r.buttonUseIcon&&"before"===r.buttonIconPosition?"wpmozo-icon-at-before":"wpmozo-icon-at-after"].join(" "),children:[(0,p.jsx)("span",{className:"wpmozo-btn-text",children:r.buttonText&&(0,t.__)("Get the deal","wpmozo-blocks-and-addons")}),o]})})}let w="";var _;r.showSeparator&&(w=(0,p.jsx)("span",{class:"wpmozo-pb-separator",children:null!==(_=r.separatorText)&&void 0!==_?_:":"}));const z={days:{full:"Days",short:"Days",single:"D"},hours:{full:"Hours",short:"Hrs",single:"H"},minutes:{full:"Minutes",short:"Min",single:"M"},seconds:{full:"Seconds",short:"Sec",single:"S"}};return(0,p.jsxs)(n.Fragment,{children:[(0,p.jsx)(j,{attributes:r,setAttributes:i}),(0,p.jsx)("style",{children:C({attributes:r,clientId:d})}),(0,p.jsx)("div",{...(0,a.useBlockProps)(),id:`block-${r.ID}`,children:(0,p.jsx)("div",{className:"wpmozo-promotion-bar-wrap "+c,"data-timestamp":r.dateTimeTimestamp,children:(0,p.jsxs)("div",{className:"wpmozo-promotion-bar-inner",children:[(0,p.jsxs)("div",{className:"wpmozo-promotion-bar-content",children:[u,(0,p.jsxs)("div",{className:"wpmozo-promotion-bar-content-inner",children:[h,g]}),"layout2"===c?x:""]}),(0,p.jsxs)("div",{className:"wpmozo-promotion-bar-timer",children:[!1===b?(0,p.jsxs)("div",{className:"wpmozo-pb-timer-box wpmozo-pb-days",children:[(0,p.jsx)("span",{className:"wpmozo-pb-number",children:"00"}),"none"!==m?(0,p.jsx)("span",{className:"wpmozo-pb-label",children:z.days[m]}):""]}):"",!1===b?w:"",(0,p.jsxs)("div",{className:"wpmozo-pb-timer-box wpmozo-pb-hours",children:[(0,p.jsx)("span",{className:"wpmozo-pb-number",children:"00"}),"none"!==m?(0,p.jsx)("span",{className:"wpmozo-pb-label",children:z.hours[m]}):""]}),w,(0,p.jsxs)("div",{className:"wpmozo-pb-timer-box wpmozo-pb-minutes",children:[(0,p.jsx)("span",{className:"wpmozo-pb-number",children:"00"}),"none"!==m?(0,p.jsx)("span",{className:"wpmozo-pb-label",children:z.minutes[m]}):""]}),w,(0,p.jsxs)("div",{className:"wpmozo-pb-timer-box wpmozo-pb-seconds",children:[(0,p.jsx)("span",{className:"wpmozo-pb-number",children:"00"}),"none"!==m?(0,p.jsx)("span",{className:"wpmozo-pb-label",children:z.seconds[m]}):""]})]}),"layout2"!==c?x:""]})})})]})},icon:v,save:({attributes:o})=>{var e,n,l;const s=o.ID,r=null!==(e=o.layout)&&void 0!==e?e:"layout1",i=null!==(n=o.displayLabel)&&void 0!==n?n:"full",d=null!==(l=o.hideDays)&&void 0!==l&&l;let c="";o.showImage&&""!==o.image&&(c=(0,p.jsx)("div",{className:"wpmozo-image-wrap",children:(0,p.jsx)("img",{src:o.image,alt:o.imageAlt,className:"wpmozo-promotion-bar-image"})}));let m="";o.title&&""!==o.title&&(m=(0,p.jsx)(a.RichText.Content,{className:"wpmozo-pb-title",tagName:o.titleLevel,value:o.title}));let b="";o.description&&""!==o.description&&(b=(0,p.jsx)(a.RichText.Content,{className:"wpmozo-pb-desc",tagName:"div",value:o.description}));let u="";if(o.showButton&&o.buttonUrl){let e="";o.buttonUseIcon&&o.buttonIcon&&(e=(0,p.jsx)("i",{className:"wpmozo-icon "+o.buttonIcon})),u=(0,p.jsx)("div",{className:"wpmozo-button-wrap",children:(0,p.jsxs)("a",{href:o.buttonUrl,target:"external"===o.buttonLinkTarget&&"_blank",className:["wpmozo-button","wpmozo_promotion_bar_button",o.buttonUseIcon&&o.buttonIconOnHover?"wpmozo-icon-on-hover":"",o.buttonUseIcon&&"before"===o.buttonIconPosition?"wpmozo-icon-at-before":"wpmozo-icon-at-after"].join(" "),children:[(0,p.jsx)("span",{className:"wpmozo-btn-text",children:o.buttonText&&(0,t.__)("Get the deal","wpmozo-blocks-and-addons")}),e]})})}let h="";var g;o.showSeparator&&(h=(0,p.jsx)("span",{class:"wpmozo-pb-separator",children:null!==(g=o.separatorText)&&void 0!==g?g:":"}));const x={days:{full:"Days",short:"Days",single:"D"},hours:{full:"Hours",short:"Hrs",single:"H"},minutes:{full:"Minutes",short:"Min",single:"M"},seconds:{full:"Seconds",short:"Sec",single:"S"}};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("style",{children:C({attributes:o,clientId:s})}),(0,p.jsx)("div",{id:`block-${s}`,...a.useBlockProps.save({className:o.className}),children:(0,p.jsx)("div",{className:"wpmozo-promotion-bar-wrap "+r,"data-timestamp":o.dateTimeTimestamp,children:(0,p.jsxs)("div",{className:"wpmozo-promotion-bar-inner",children:[(0,p.jsxs)("div",{className:"wpmozo-promotion-bar-content",children:[c,(0,p.jsxs)("div",{className:"wpmozo-promotion-bar-content-inner",children:[m,b]}),"layout2"===r?u:""]}),(0,p.jsxs)("div",{className:"wpmozo-promotion-bar-timer",children:[!1===d?(0,p.jsxs)("div",{className:"wpmozo-pb-timer-box wpmozo-pb-days",children:[(0,p.jsx)("span",{className:"wpmozo-pb-number",children:"00"}),"none"!==i?(0,p.jsx)("span",{className:"wpmozo-pb-label",children:x.days[i]}):""]}):"",!1===d?h:"",(0,p.jsxs)("div",{className:"wpmozo-pb-timer-box wpmozo-pb-hours",children:[(0,p.jsx)("span",{className:"wpmozo-pb-number",children:"00"}),"none"!==i?(0,p.jsx)("span",{className:"wpmozo-pb-label",children:x.hours[i]}):""]}),h,(0,p.jsxs)("div",{className:"wpmozo-pb-timer-box wpmozo-pb-minutes",children:[(0,p.jsx)("span",{className:"wpmozo-pb-number",children:"00"}),"none"!==i?(0,p.jsx)("span",{className:"wpmozo-pb-label",children:x.minutes[i]}):""]}),h,(0,p.jsxs)("div",{className:"wpmozo-pb-timer-box wpmozo-pb-seconds",children:[(0,p.jsx)("span",{className:"wpmozo-pb-number",children:"00"}),"none"!==i?(0,p.jsx)("span",{className:"wpmozo-pb-label",children:x.seconds[i]}):""]})]}),"layout2"!==r?u:""]})})})]})}})}},t={};function n(o){var a=t[o];if(void 0!==a)return a.exports;var l=t[o]={exports:{}};return e[o](l,l.exports,n),l.exports}n.m=e,o=[],n.O=(e,t,a,l)=>{if(!t){var s=1/0;for(p=0;p<o.length;p++){for(var[t,a,l]=o[p],r=!0,i=0;i<t.length;i++)(!1&l||s>=l)&&Object.keys(n.O).every((o=>n.O[o](t[i])))?t.splice(i--,1):(r=!1,l<s&&(s=l));if(r){o.splice(p--,1);var d=a();void 0!==d&&(e=d)}}return e}l=l||0;for(var p=o.length;p>0&&o[p-1][2]>l;p--)o[p]=o[p-1];o[p]=[t,a,l]},n.o=(o,e)=>Object.prototype.hasOwnProperty.call(o,e),(()=>{var o={2606:0,2469:0,6114:0};n.O.j=e=>0===o[e];var e=(e,t)=>{var a,l,[s,r,i]=t,d=0;if(s.some((e=>0!==o[e]))){for(a in r)n.o(r,a)&&(n.m[a]=r[a]);if(i)var p=i(n)}for(e&&e(t);d<s.length;d++)l=s[d],n.o(o,l)&&o[l]&&o[l][0](),o[l]=0;return n.O(p)},t=globalThis.webpackChunkwpmozo_blocks_and_addons=globalThis.webpackChunkwpmozo_blocks_and_addons||[];t.forEach(e.bind(null,0)),t.push=e.bind(null,t.push.bind(t))})();var a=n.O(void 0,[2469,6114],(()=>n(766)));a=n.O(a)})();
>>>>>>> f3e4499 (Promotion bar completed/)
