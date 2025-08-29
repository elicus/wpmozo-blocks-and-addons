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