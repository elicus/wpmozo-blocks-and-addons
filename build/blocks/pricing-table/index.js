/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/pricing-table/block.json":
/*!*********************************************!*\
  !*** ./src/blocks/pricing-table/block.json ***!
  \*********************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"wpmozo/pricing-table","version":"0.1.0","title":"Pricing Table","category":"wpmozo","icon":"smiley","description":"A Pricing Table Block displays side-by-side plans to compare features and pricing at a glance.","example":{},"supports":{"html":false,"customClassName":false},"attributes":{"ID":{"type":"string"},"className":{"type":"string"},"wrapperborder":{"type":"object"},"wrapperborderRadius":{"type":"string"},"title":{"type":"string","default":"WPMozo Pricing"},"titleLeval":{"type":"string","default":"h2"},"subtitle":{"type":"string","default":"Ultimate plan"},"headerGraphics":{"type":"string","default":"icon"},"headerIcon":{"type":"string","default":"fas fa-star"},"headerImage":{"type":"string"},"currencySymbol":{"type":"string","default":"$"},"customSymbol":{"type":"string"},"price":{"type":"string","default":99},"period":{"type":"string","default":"Year"},"features":{"type":"array","default":[{"list":"feature 1","icon":"fas fa-check"},{"list":"feature 2","icon":"fas fa-check"},{"list":"feature 3","icon":"fas fa-check"}]},"featuresIconFontSize":{"type":"number"},"featuresSpacing":{"type":"number"},"featuresMargin":{"type":"number"},"showButton":{"type":"boolean","default":false},"buttonText":{"type":"string","default":"Read More"},"buttonUrl":{"type":"string"},"buttonLinkTarget":{"type":"string","default":"same"},"buttonIconType":{"type":"string","default":"icon"},"buttonIcon":{"type":"string","default":""},"buttonIconImage":{"type":"string"},"buttonIconPosition":{"type":"string","default":"icon-after"},"showIconOnHover":{"type":"boolean","default":false},"titleLavel":{"type":"string","default":"h2"},"titleAlign":{"type":"string","default":"center"},"titleColor":{"type":"string"},"titleFontSize":{"type":"string"},"titleFontAppearance":{"type":"object","fontStyle":{"type":"string"},"fontWeight":{"type":"string"},"default":{"fontStyle":"","fontWeight":""}},"titleLetterSpacing":{"type":"string"},"titleDecoration":{"type":"string"},"titleLetterCase":{"type":"string"},"titleLineHeight":{"type":"string"},"subTitleColor":{"type":"string"},"subTitleAlign":{"type":"string","default":"center"},"subTitleFontSize":{"type":"string"},"subTitleFontAppearance":{"type":"object","fontStyle":{"type":"string"},"fontWeight":{"type":"string"},"default":{"fontStyle":"","fontWeight":""}},"subTitleLetterSpacing":{"type":"string"},"subTitleDecoration":{"type":"string"},"subTitleLetterCase":{"type":"string"},"subTitleLineHeight":{"type":"string"},"useIconFontSize":{"type":"boolean","default":false},"iconFontSize":{"type":"string"},"imageWidth":{"type":"string","default":"100px"},"imageHeight":{"type":"string","default":"100px"},"iconAlign":{"type":"string","default":"center"},"iconColor":{"type":"string"},"headerGraphicsDimensionspadding":{"type":"object"},"headerGraphicsDimensionsmargin":{"type":"object"},"backgroundColor":{"type":"string"},"mainDimensionspadding":{"type":"object"},"mainDimensionsmargin":{"type":"object"},"currencyColor":{"type":"string"},"currencyFontAppearance":{"type":"object","fontStyle":{"type":"string"},"fontWeight":{"type":"string"},"default":{"fontStyle":"","fontWeight":""}},"currencyLetterSpacing":{"type":"string"},"currencyDecoration":{"type":"string"},"currencyLetterCase":{"type":"string"},"currencyLineHeight":{"type":"string"},"currencyFontSize":{"type":"string"},"priceColor":{"type":"string"},"priceFontAppearance":{"type":"object","fontStyle":{"type":"string"},"fontWeight":{"type":"string"},"default":{"fontStyle":"","fontWeight":""}},"pricealign":{"type":"string"},"priceLetterSpacing":{"type":"string"},"priceDecoration":{"type":"string"},"priceLetterCase":{"type":"string"},"priceLineHeight":{"type":"string"},"priceFontSize":{"type":"string"},"periodColor":{"type":"string"},"periodFontAppearance":{"type":"object","fontStyle":{"type":"string"},"fontWeight":{"type":"string"},"default":{"fontStyle":"","fontWeight":""}},"periodLetterSpacing":{"type":"string"},"periodDecoration":{"type":"string"},"periodLetterCase":{"type":"string"},"periodLineHeight":{"type":"string"},"periodFontSize":{"type":"string"},"featuresAlign":{"type":"string"},"featuresFontAppearance":{"type":"object","fontStyle":{"type":"string"},"fontWeight":{"type":"string"},"default":{"fontStyle":"","fontWeight":""}},"featuresLetterSpacing":{"type":"string"},"featuresDecoration":{"type":"string"},"featuresLetterCase":{"type":"string"},"featuresLineHeight":{"type":"string"},"featuresFontSize":{"type":"string"},"featuresColor":{"type":"string"},"featuresBackground":{"type":"string"},"feturesAlign":{"type":"string","default":"center"},"showFeaturesIcon":{"type":"boolean","default":false},"featuresIconsColor":{"type":"string"},"featuresIconsSpacing":{"type":"string","default":"5px"},"featuresDimensionspadding":{"type":"object"},"featuresDimensionsmargin":{"type":"object"},"buttonAlign":{"type":"string"},"buttonStyle":{"type":"string","default":"normal"},"buttonTextColor":{"type":"string"},"buttonTextBackground":{"type":"string"},"iconTextColor":{"type":"string"},"iconTextBackground":{"type":"string"},"borderSelection":{"type":"string","default":"solid"},"borderWidth":{"type":"string"},"borderRadius":{"type":"string"},"borderColor":{"type":"string"},"buttonTextHoverColor":{"type":"string"},"buttonTextHoverBackground":{"type":"string"},"iconTextHoverColor":{"type":"string"},"iconTextHoverBackground":{"type":"string"},"borderSelectionHover":{"type":"string","default":"solid"},"borderWidthHover":{"type":"string"},"borderRadiusHover":{"type":"string"},"borderHoverColor":{"type":"string"},"borderDimensionspadding":{"type":"object"},"borderDimensionsmargin":{"type":"object"},"buttonFontSize":{"type":"number"}},"textdomain":"wpmozo-blocks-and-addons","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css"}');

/***/ }),

/***/ "./src/blocks/pricing-table/edit.js":
/*!******************************************!*\
  !*** ./src/blocks/pricing-table/edit.js ***!
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
/* harmony import */ var _inspector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inspector */ "./src/blocks/pricing-table/inspector.js");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/pricing-table/editor.scss");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style */ "./src/blocks/pricing-table/style.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);





/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */



const Edit = props => {
  const setAttributes = props.setAttributes;
  let attributes = props.attributes,
    clientId = props.clientId,
    linkTarget = 'external' === attributes.buttonLinkTarget ? '_blank' : '_self',
    showIconOnHover = attributes.showIconOnHover ? ' show-on-hover' : '',
    buttonIconPosition = attributes.buttonIconPosition ? attributes.buttonIconPosition : ' icon-after';
  attributes.ID = clientId;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_inspector__WEBPACK_IMPORTED_MODULE_3__["default"], {
      attributes: attributes,
      setAttributes: setAttributes
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("style", {
      children: (0,_style__WEBPACK_IMPORTED_MODULE_5__["default"])({
        attributes
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
      ...(0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)(),
      id: `block-${attributes.ID}`,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
        className: "wpmozo-bna-pricing-table",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: "wpmozo-bna-pricing-table-wrapper",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            className: "wpmozo-bna-pricing-table-header-graphic",
            children: ['icon' === attributes.headerGraphics && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
              className: "wpmozo-bna-pricing-table-header-graphic-inner",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("i", {
                className: attributes.headerIcon
              })
            }), 'image' === attributes.headerGraphics && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
              className: "wpmozo-bna-pricing-table-header-graphic-inner wpmozo-bna-header-image-container",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("img", {
                src: attributes.headerImage,
                className: "wpmozo-bna-header-image"
              })
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            className: "wpmozo-bna-pricing-table-heading",
            children: ['' != attributes.title && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
              className: "wpmozo-bna-pricing-table-title",
              tagName: attributes.titleLeval,
              value: attributes.title,
              onChange: newValue => setAttributes({
                title: newValue
              })
            }), '' != attributes.subtitle && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
              className: "wpmozo-bna-pricing-table-subtitle",
              tagName: "span",
              value: attributes.subtitle,
              onChange: newValue => setAttributes({
                subtitle: newValue
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
              className: "wpmozo-bna-bar-container",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("hr", {
                className: "wpmozo-bna-bar"
              })
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            className: "wpmozo-bna-pricing-table-pricing",
            children: ['' !== attributes.currencySymbol && 'custom' !== attributes.currencySymbol && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("span", {
              className: "wpmozo-bna-pricing-table-currency-symbol",
              children: [attributes.currencySymbol, " "]
            }), 'custom' === attributes.currencySymbol && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("span", {
              className: "wpmozo-bna-pricing-table-currency-symbol",
              children: [attributes.customSymbol, " "]
            }), '' !== attributes.price && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
              className: "wpmozo-bna-pricing-table-price",
              children: parseFloat(attributes.price)
            }), '' !== attributes.period && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
                className: "wpmozo-bna-period-slash",
                children: " / "
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("span", {
                className: "wpmozo-bna-pricing-table-period",
                children: [" ", attributes.period, " "]
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("dl", {
            className: "wpmozo-bna-pricing-table-features",
            children: attributes?.features && attributes.features?.length > 0 && attributes.features.map((feature, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("dt", {
                className: "wpmozo-bna-pricing-table-features-list",
                children: [true === attributes.showFeaturesIcon && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
                  className: "wpmozo-bna-pricing-table-feature-icon",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("i", {
                    className: feature.icon
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
                  className: "wpmozo-bna-pricing-table-feature-text",
                  children: feature.list
                })]
              })
            }, `feature-${index}`))
          }), true === attributes.showButton && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
            className: "wpmozo-bna-pricing-table-button-wrapper",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("a", {
              href: attributes.buttonUrl,
              className: "wpmozo-bna-button " + buttonIconPosition + showIconOnHover,
              target: linkTarget,
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
                className: "button_text",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
                  value: attributes.buttonText,
                  onChange: newValue => setAttributes({
                    buttonText: newValue
                  })
                })
              }), 'none' !== attributes.buttonIconType && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                className: 'icon' === attributes.buttonIconType ? "wpmozo-bna-button-icon" : "wpmozo-bna-button-image",
                children: ['icon' === attributes.buttonIconType && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("i", {
                  className: attributes.buttonIcon
                }), 'image' === attributes.buttonIconType && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("img", {
                  src: attributes.buttonIconImage
                })]
              })]
            })
          })]
        })
      })
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Edit);

/***/ }),

/***/ "./src/blocks/pricing-table/editor.scss":
/*!**********************************************!*\
  !*** ./src/blocks/pricing-table/editor.scss ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/pricing-table/icon.js":
/*!******************************************!*\
  !*** ./src/blocks/pricing-table/icon.js ***!
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
  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("g", {
    id: "icomoon-ignore"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    fill: "#000",
    d: "M597.333 53.333c59.733 0 106.667 46.933 106.667 106.667v704c0 59.733-46.933 106.667-106.667 106.667h-170.667c-59.733 0-106.667-46.933-106.667-106.667v-704c0-59.733 46.933-106.667 106.667-106.667h170.667zM597.333 10.667h-170.667c-83.2 0-149.333 66.133-149.333 149.333v704c0 83.2 66.133 149.333 149.333 149.333h170.667c83.2 0 149.333-66.133 149.333-149.333v-704c0-83.2-66.133-149.333-149.333-149.333v0z"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    fill: "#000",
    d: "M842.667 885.333h-42.667v-42.667h42.667c70.4 0 128-57.6 128-128v-405.333c0-70.4-57.6-128-128-128h-42.667v-42.667h42.667c93.867 0 170.667 76.8 170.667 170.667v405.333c0 93.867-76.8 170.667-170.667 170.667z"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    fill: "#000",
    d: "M181.333 885.333h42.667v-42.667h-42.667c-70.4 0-128-57.6-128-128v-405.333c0-70.4 57.6-128 128-128h42.667v-42.667h-42.667c-93.867 0-170.667 76.8-170.667 170.667v405.333c0 93.867 76.8 170.667 170.667 170.667z"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    fill: "#000",
    d: "M224 597.333h-74.667c-10.667 0-19.2-8.533-19.2-19.2v0c0-10.667 8.533-19.2 19.2-19.2h74.667z"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    fill: "#000",
    d: "M224 731.733h-74.667c-10.667 0-19.2-8.533-19.2-19.2v0c0-10.667 8.533-19.2 19.2-19.2h74.667z"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    fill: "#000",
    d: "M800 597.333h74.667c10.667 0 19.2-8.533 19.2-19.2v0c0-10.667-8.533-19.2-19.2-19.2h-74.667z"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    fill: "#000",
    d: "M800 731.733h74.667c10.667 0 19.2-8.533 19.2-19.2v0c0-10.667-8.533-19.2-19.2-19.2h-74.667z"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    fill: "#000",
    d: "M618.667 693.333h-213.333c-12.8 0-21.333-8.533-21.333-21.333v0c0-12.8 8.533-21.333 21.333-21.333h213.333c12.8 0 21.333 8.533 21.333 21.333v0c0 12.8-8.533 21.333-21.333 21.333z"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    fill: "#000",
    d: "M618.667 838.4h-213.333c-12.8 0-21.333-8.533-21.333-21.333v0c0-12.8 8.533-21.333 21.333-21.333h213.333c12.8 0 21.333 8.533 21.333 21.333v0c0 10.667-8.533 21.333-21.333 21.333z"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    fill: "#000",
    d: "M499.2 550.4v-40.533c-21.333-2.133-38.4-6.4-51.2-12.8s-23.467-17.067-34.133-32c-8.533-14.933-14.933-32-17.067-53.333l40.533-8.533c4.267 21.333 8.533 38.4 17.067 49.067 10.667 14.933 25.6 23.467 42.667 23.467v-132.267c-17.067-4.267-34.133-10.667-51.2-19.2-12.8-6.4-23.467-17.067-29.867-29.867s-10.667-27.733-10.667-44.8c0-29.867 10.667-53.333 32-70.4 14.933-12.8 34.133-19.2 61.867-23.467v-19.2h23.467v19.2c23.467 2.133 42.667 8.533 57.6 21.333 17.067 14.933 29.867 36.267 32 61.867l-42.667 6.4c-2.133-17.067-8.533-27.733-14.933-36.267-8.533-8.533-19.2-14.933-32-17.067v119.467c21.333 4.267 34.133 8.533 40.533 12.8 12.8 6.4 23.467 12.8 32 21.333s14.933 17.067 19.2 29.867c4.267 10.667 6.4 23.467 6.4 36.267 0 27.733-8.533 53.333-27.733 72.533s-42.667 29.867-70.4 29.867v42.667h-23.467zM499.2 189.867c-17.067 2.133-29.867 8.533-38.4 19.2s-14.933 23.467-14.933 36.267c0 14.933 4.267 25.6 12.8 36.267 8.533 8.533 21.333 17.067 40.533 23.467v-115.2zM522.667 475.733c17.067-2.133 29.867-8.533 40.533-21.333s14.933-25.6 14.933-44.8c0-14.933-4.267-27.733-10.667-36.267s-21.333-17.067-44.8-23.467v125.867z"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    fill: "#000",
    d: "M170.667 475.733v-19.2c-8.533-2.133-17.067-2.133-21.333-6.4s-10.667-8.533-14.933-14.933c-4.267-6.4-6.4-14.933-6.4-23.467l19.2-4.267c2.133 10.667 4.267 17.067 8.533 21.333 4.267 6.4 10.667 10.667 19.2 10.667v-55.467c-8.533-2.133-14.933-4.267-23.467-8.533-6.4-4.267-10.667-8.533-12.8-12.8s-10.667-12.8-10.667-21.333c0-12.8 4.267-23.467 12.8-32 8.533-4.267 17.067-6.4 29.867-8.533v-8.533h10.667v8.533c10.667 0 19.2 4.267 25.6 8.533 8.533 6.4 12.8 14.933 14.933 27.733l-19.2 2.133c-2.133-6.4-4.267-12.8-6.4-17.067-4.267-2.133-8.533-4.267-14.933-6.4v53.333c8.533 2.133 14.933 4.267 19.2 6.4 6.4 2.133 10.667 6.4 12.8 8.533 4.267 4.267 6.4 8.533 8.533 12.8s2.133 10.667 2.133 14.933c0 12.8-4.267 23.467-12.8 32s-19.2 12.8-32 12.8v19.2h-8.533zM170.667 315.733c-6.4 2.133-12.8 4.267-17.067 8.533s-6.4 10.667-6.4 17.067c0 6.4 2.133 10.667 4.267 14.933s8.533 8.533 17.067 10.667v-51.2zM181.333 441.6c6.4 0 12.8-4.267 17.067-8.533s6.4-12.8 6.4-19.2c0-6.4-2.133-12.8-4.267-14.933-4.267-4.267-10.667-8.533-19.2-10.667v53.333z"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    fill: "#000",
    d: "M844.8 475.733v-19.2c-8.533-2.133-17.067-2.133-21.333-6.4-6.4-2.133-10.667-8.533-14.933-14.933s-6.4-14.933-6.4-23.467l19.2-4.267c2.133 10.667 4.267 17.067 8.533 21.333 4.267 6.4 10.667 10.667 19.2 10.667v-55.467c-8.533-2.133-14.933-4.267-23.467-8.533-6.4-4.267-10.667-8.533-12.8-12.8-2.133-6.4-4.267-12.8-4.267-19.2 0-12.8 4.267-23.467 12.8-32 6.4-6.4 14.933-8.533 27.733-10.667v-8.533h10.667v8.533c10.667 0 19.2 4.267 25.6 8.533 8.533 6.4 12.8 14.933 14.933 27.733l-25.6 2.133c-2.133-6.4-4.267-12.8-6.4-17.067-4.267-4.267-8.533-6.4-14.933-8.533v53.333c8.533 2.133 14.933 4.267 19.2 6.4 6.4 2.133 10.667 6.4 12.8 8.533s6.4 8.533 8.533 12.8 2.133 10.667 2.133 14.933c0 12.8-4.267 23.467-12.8 32s-19.2 12.8-32 12.8v19.2h-6.4zM844.8 315.733c-6.4 2.133-12.8 4.267-17.067 8.533s-6.4 10.667-6.4 17.067c0 6.4 2.133 10.667 4.267 14.933s8.533 8.533 17.067 10.667v-51.2zM855.467 441.6c6.4 0 12.8-4.267 17.067-8.533s6.4-12.8 6.4-19.2c0-6.4-2.133-12.8-4.267-14.933-4.267-4.267-10.667-8.533-19.2-10.667v53.333z"
  })]
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Icon);

/***/ }),

/***/ "./src/blocks/pricing-table/index.js":
/*!*******************************************!*\
  !*** ./src/blocks/pricing-table/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block.json */ "./src/blocks/pricing-table/block.json");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/blocks/pricing-table/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/blocks/pricing-table/save.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./icon */ "./src/blocks/pricing-table/icon.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/pricing-table/style.scss");





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

/***/ "./src/blocks/pricing-table/inspector.js":
/*!***********************************************!*\
  !*** ./src/blocks/pricing-table/inspector.js ***!
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
/* harmony import */ var _settings_generalPanel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./settings/generalPanel */ "./src/blocks/pricing-table/settings/generalPanel.js");
/* harmony import */ var _settings_designPanel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./settings/designPanel */ "./src/blocks/pricing-table/settings/designPanel.js");
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

/***/ "./src/blocks/pricing-table/save.js":
/*!******************************************!*\
  !*** ./src/blocks/pricing-table/save.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style */ "./src/blocks/pricing-table/style.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



const Save = ({
  attributes
}) => {
  let linkTarget = 'external' === attributes.buttonLinkTarget ? '_blank' : '_self',
    showIconOnHover = attributes.showIconOnHover ? ' show-on-hover' : '',
    buttonIconPosition = attributes.buttonIconPosition ? attributes.buttonIconPosition : ' icon-after';
  const ID = attributes.ID;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("style", {
      children: (0,_style__WEBPACK_IMPORTED_MODULE_1__["default"])({
        attributes
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      ..._wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps.save({
        className: attributes.className
      }),
      id: `block-${ID}`,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "wpmozo-bna-pricing-table",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: "wpmozo-bna-pricing-table-wrapper",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "wpmozo-bna-pricing-table-header-graphic",
            children: ['icon' === attributes.headerGraphics && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
              className: "wpmozo-bna-pricing-table-header-graphic-inner",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("i", {
                className: attributes.headerIcon
              })
            }), 'image' === attributes.headerGraphics && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
              className: "wpmozo-bna-pricing-table-header-graphic-inner wpmozo-bna-header-image-container",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img", {
                src: attributes.headerImage,
                className: "wpmozo-bna-header-image"
              })
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "wpmozo-bna-pricing-table-heading",
            children: ['' != attributes.title && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText.Content, {
              className: "wpmozo-bna-pricing-table-title",
              tagName: attributes.titleLeval,
              value: attributes.title
            }), '' != attributes.subtitle && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText.Content, {
              className: "wpmozo-bna-pricing-table-subtitle",
              tagName: "span",
              value: attributes.subtitle
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
              className: "wpmozo-bna-bar-container",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("hr", {
                className: "wpmozo-bna-bar"
              })
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "wpmozo-bna-pricing-table-pricing",
            children: ['' !== attributes.currencySymbol && 'custom' !== attributes.currencySymbol && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("span", {
              className: "wpmozo-bna-pricing-table-currency-symbol",
              children: [attributes.currencySymbol, " "]
            }), 'custom' === attributes.currencySymbol && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("span", {
              className: "wpmozo-bna-pricing-table-currency-symbol",
              children: [attributes.customSymbol, " "]
            }), '' !== attributes.price && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
              className: "wpmozo-bna-pricing-table-price",
              children: parseFloat(attributes.price)
            }), '' !== attributes.period && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
                className: "wpmozo-bna-period-slash",
                children: " / "
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("span", {
                className: "wpmozo-bna-pricing-table-period",
                children: [" ", attributes.period, " "]
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("dl", {
            className: "wpmozo-bna-pricing-table-features",
            children: attributes.features && attributes.features.length > 0 && attributes.features.map((feature, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("dt", {
                className: "wpmozo-bna-pricing-table-features-list",
                children: [true === attributes.showFeaturesIcon && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
                  className: "wpmozo-bna-pricing-table-feature-icon",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("i", {
                    className: feature.icon
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
                  className: "wpmozo-bna-pricing-table-feature-text",
                  children: feature.list
                })]
              })
            }, `feature-${index}`))
          }), true === attributes.showButton && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            className: "wpmozo-bna-pricing-table-button-wrapper",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("a", {
              href: attributes.buttonUrl,
              className: "wpmozo-bna-button " + buttonIconPosition + showIconOnHover,
              target: linkTarget,
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
                className: "button_text",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText.Content, {
                  value: attributes.buttonText
                })
              }), 'none' !== attributes.buttonIconType && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                className: 'icon' === attributes.buttonIconType ? "wpmozo-bna-button-icon" : "wpmozo-bna-button-image",
                children: ['icon' === attributes.buttonIconType && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("i", {
                  className: attributes.buttonIcon
                }), 'image' === attributes.buttonIconType && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img", {
                  src: attributes.buttonIconImage
                })]
              })]
            })
          })]
        })
      })
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Save);

/***/ }),

/***/ "./src/blocks/pricing-table/settings/designPanel.js":
/*!**********************************************************!*\
  !*** ./src/blocks/pricing-table/settings/designPanel.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DesignPanel: () => (/* binding */ DesignPanel)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/components */ "./src/common/components/index.js");
/* harmony import */ var _common_utils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/utils.js */ "./src/common/utils.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);






const DesignPanel = ({
  attributes,
  setAttributes
}) => {
  const props = {
    attributes,
    setAttributes,
    preAttributes: {}
  };
  let borderSelection = [{
    value: 'none',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('None', 'wpmozo-blocks-and-addons')
  }, {
    value: 'solid',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Solid', 'wpmozo-blocks-and-addons')
  }, {
    value: 'double',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Double', 'wpmozo-blocks-and-addons')
  }, {
    value: 'dotted',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Dotted', 'wpmozo-blocks-and-addons')
  }, {
    value: 'dashed',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Dashed', 'wpmozo-blocks-and-addons')
  }, {
    value: 'groove',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Groove', 'wpmozo-blocks-and-addons')
  }];
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Global Style', 'wpmozo-blocks-and-addons'),
      className: "wpmozo-typography-panel",
      initialOpen: true,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_common_components__WEBPACK_IMPORTED_MODULE_3__.WpmozoColorPicker, {
        ColorKey: "background",
        props: props,
        ColorTypes: [{
          key: 'Color',
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Background Color', 'wpmozo-blocks-and-addons')
        }]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_common_components__WEBPACK_IMPORTED_MODULE_3__.WpmozoDimensions, {
        DimensionKey: "mainDimensions",
        DimensionsTypes: {
          padding: true,
          margin: true
        },
        props: props
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_common_components__WEBPACK_IMPORTED_MODULE_3__.WpmozoBorder, {
        props: props,
        BorderKey: "wrapper"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Title', 'wpmozo-blocks-and-addons'),
      className: "wpmozo-typography-panel",
      initialOpen: false,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_common_components__WEBPACK_IMPORTED_MODULE_3__.WpmozoColorPicker, {
        ColorKey: "title",
        props: props,
        ColorTypes: [{
          key: 'Color',
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Title Color', 'wpmozo-blocks-and-addons')
        }]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.BaseControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Heading Lavel', 'wpmozo-blocks-and-addons'),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ButtonGroup, {
          children: _common_utils_js__WEBPACK_IMPORTED_MODULE_4__.headingLevelsList.map((item, key) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
            isPressed: item.value === attributes.titleLavel ? true : false,
            onClick: newValue => setAttributes({
              titleLavel: item.value
            }),
            children: item.label
          }, `heading-level-${item.value}`))
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_common_components__WEBPACK_IMPORTED_MODULE_3__.WpmozoAlignment, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Title Alignment', 'wpmozo-blocks-and-addons'),
        onChange: newValue => setAttributes({
          titleAlign: newValue
        }),
        value: attributes.titleAlign
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_common_components__WEBPACK_IMPORTED_MODULE_3__.WpmozoTypography, {
        TypographyKey: "title",
        props: props
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Subtitle', 'wpmozo-blocks-and-addons'),
      className: "wpmozo-typography-panel",
      initialOpen: false,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_common_components__WEBPACK_IMPORTED_MODULE_3__.WpmozoColorPicker, {
        ColorKey: "subTitle",
        props: props,
        ColorTypes: [{
          key: 'Color',
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Title Color', 'wpmozo-blocks-and-addons')
        }]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_common_components__WEBPACK_IMPORTED_MODULE_3__.WpmozoAlignment, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Title Alignment', 'wpmozo-blocks-and-addons'),
        onChange: newValue => setAttributes({
          subTitleAlign: newValue
        }),
        value: attributes.subTitleAlign
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_common_components__WEBPACK_IMPORTED_MODULE_3__.WpmozoTypography, {
        TypographyKey: "subTitle",
        props: props
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Header icon', 'wpmozo-blocks-and-addons'),
      className: "wpmozo-typography-panel",
      initialOpen: false,
      children: ['icon' === attributes.headerGraphics && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_common_components__WEBPACK_IMPORTED_MODULE_3__.WpmozoColorPicker, {
        ColorKey: "icon",
        props: props,
        ColorTypes: [{
          key: 'Color',
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Icon Color', 'wpmozo-blocks-and-addons')
        }]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_common_components__WEBPACK_IMPORTED_MODULE_3__.WpmozoAlignment, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Icon Alignment', 'wpmozo-blocks-and-addons'),
        onChange: newValue => setAttributes({
          iconAlign: newValue
        }),
        value: attributes.iconAlign
      }), 'icon' === attributes.headerGraphics && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Use Icon Font Size', 'wpmozo-blocks-and-addons'),
        checked: attributes.useIconFontSize,
        onChange: newValue => setAttributes({
          useIconFontSize: newValue
        })
      }), 'icon' === attributes.headerGraphics && attributes.useIconFontSize && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.HeightControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Icon Font Size', 'wpmozo-blocks-and-addons'),
        value: attributes.iconFontSize,
        onChange: newValue => setAttributes({
          iconFontSize: newValue
        })
      }), 'image' === attributes.headerGraphics && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_common_components__WEBPACK_IMPORTED_MODULE_3__.WpmozoRangeSize, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Image Width', 'wpmozo-blocks-and-addons'),
          rangeSizeKey: "imageWidth",
          props: props
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_common_components__WEBPACK_IMPORTED_MODULE_3__.WpmozoRangeSize, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Image Height', 'wpmozo-blocks-and-addons'),
          rangeSizeKey: "imageHeight",
          props: props
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_common_components__WEBPACK_IMPORTED_MODULE_3__.WpmozoDimensions, {
        DimensionKey: "headerGraphicsDimensions",
        DimensionsTypes: {
          padding: true,
          margin: true
        },
        props: props
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Pricing', 'wpmozo-blocks-and-addons'),
      className: "wpmozo-typography-panel",
      initialOpen: false,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_common_components__WEBPACK_IMPORTED_MODULE_3__.WpmozoColorPicker, {
        ColorKey: "currency",
        props: props,
        label: "Currency Color",
        ColorTypes: [{
          key: 'Color',
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Currency Text Color', 'wpmozo-blocks-and-addons')
        }]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_common_components__WEBPACK_IMPORTED_MODULE_3__.WpmozoAlignment, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Alignment', 'wpmozo-blocks-and-addons'),
        onChange: newValue => setAttributes({
          pricealign: newValue
        }),
        value: attributes.pricealign
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_common_components__WEBPACK_IMPORTED_MODULE_3__.WpmozoTypography, {
        TypographyKey: "currency",
        props: props,
        label: "Currency Typography"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_common_components__WEBPACK_IMPORTED_MODULE_3__.WpmozoColorPicker, {
        ColorKey: "period",
        props: props,
        label: "Period Color",
        ColorTypes: [{
          key: 'Color',
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Period Text Color', 'wpmozo-blocks-and-addons')
        }]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_common_components__WEBPACK_IMPORTED_MODULE_3__.WpmozoTypography, {
        TypographyKey: "price",
        props: props,
        label: "Price Typography"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_common_components__WEBPACK_IMPORTED_MODULE_3__.WpmozoTypography, {
        TypographyKey: "period",
        props: props,
        label: "Period Typography"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Features', 'wpmozo-blocks-and-addons'),
      className: "wpmozo-typography-panel",
      initialOpen: false,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_common_components__WEBPACK_IMPORTED_MODULE_3__.WpmozoColorPicker, {
        ColorKey: "features",
        props: props,
        ColorTypes: [{
          key: 'Color',
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Features Text Color', 'wpmozo-blocks-and-addons')
        }, {
          key: 'Background',
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Features Background Color', 'wpmozo-blocks-and-addons')
        }]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_common_components__WEBPACK_IMPORTED_MODULE_3__.WpmozoAlignment, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Alignment', 'wpmozo-blocks-and-addons'),
        onChange: newValue => setAttributes({
          feturesAlign: newValue
        }),
        value: attributes.feturesAlign
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Features Spacing (px)', 'wpmozo-blocks-and-addons'),
        value: attributes.featuresSpacing,
        onChange: newValue => setAttributes({
          featuresSpacing: newValue
        }),
        min: 0,
        step: 1,
        max: 100
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Features Margin (px)', 'wpmozo-blocks-and-addons'),
        value: attributes.featuresMargin,
        onChange: newValue => setAttributes({
          featuresMargin: newValue
        }),
        min: 0,
        step: 1,
        max: 100
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Icon Font Size (px)', 'wpmozo-blocks-and-addons'),
        value: attributes.featuresIconFontSize,
        onChange: newValue => setAttributes({
          featuresIconFontSize: newValue
        }),
        min: 0,
        step: 1,
        max: 100
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_common_components__WEBPACK_IMPORTED_MODULE_3__.WpmozoColorPicker, {
        ColorKey: "featuresIcons",
        props: props,
        label: "Icons Color",
        ColorTypes: [{
          key: 'Color',
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Icons Color', 'wpmozo-blocks-and-addons')
        }]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_common_components__WEBPACK_IMPORTED_MODULE_3__.WpmozoRangeSize, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Icon Spacing', 'wpmozo-blocks-and-addons'),
        rangeSizeKey: "featuresIconsSpacing",
        props: props
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_common_components__WEBPACK_IMPORTED_MODULE_3__.WpmozoTypography, {
        TypographyKey: "features",
        props: props
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_common_components__WEBPACK_IMPORTED_MODULE_3__.WpmozoDimensions, {
        DimensionKey: "featuresDimensions",
        DimensionsTypes: {
          padding: true,
          margin: true
        },
        props: props
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Button', 'wpmozo-blocks-and-addons'),
      className: "wpmozo-typography-panel",
      initialOpen: false,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_common_components__WEBPACK_IMPORTED_MODULE_3__.WpmozoAlignment, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Button Alignment', 'wpmozo-blocks-and-addons'),
        onChange: newValue => setAttributes({
          buttonAlign: newValue
        }),
        value: attributes.buttonAlign
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Button Font Size (px)', 'wpmozo-blocks-and-addons'),
        value: attributes.buttonFontSize,
        onChange: newValue => setAttributes({
          buttonFontSize: newValue
        }),
        min: 0,
        step: 1,
        max: 100
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.BaseControl, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ButtonGroup, {
          style: {
            display: 'flex'
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
            style: {
              flex: 1,
              justifyContent: 'center'
            },
            className: "wpmozo-button-tabs-btn",
            isPressed: 'normal' === attributes.buttonStyle ? true : false,
            onClick: () => setAttributes({
              buttonStyle: 'normal'
            }),
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Normal', 'wpmozo-blocks-and-addons'),
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Normal', 'wpmozo-blocks-and-addons')
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
            style: {
              flex: 1,
              justifyContent: 'center'
            },
            className: "wpmozo-button-tabs-btn",
            isPressed: 'hover' === attributes.buttonStyle ? true : false,
            onClick: () => setAttributes({
              buttonStyle: 'hover'
            }),
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Hover', 'wpmozo-blocks-and-addons'),
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Hover', 'wpmozo-blocks-and-addons')
          })]
        }), 'normal' === attributes.buttonStyle && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_common_components__WEBPACK_IMPORTED_MODULE_3__.WpmozoColorPicker, {
            ColorKey: "buttonText",
            label: "Button Color",
            props: props,
            ColorTypes: [{
              key: 'Color',
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Text Color', 'wpmozo-blocks-and-addons')
            }, {
              key: 'Background',
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Background Color', 'wpmozo-blocks-and-addons')
            }]
          }), 'icon' === attributes.buttonIconType && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_common_components__WEBPACK_IMPORTED_MODULE_3__.WpmozoColorPicker, {
            ColorKey: "iconText",
            label: "Icon Color",
            props: props,
            ColorTypes: [{
              key: 'Color',
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Text Color', 'wpmozo-blocks-and-addons')
            }, {
              key: 'Background',
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Background Color', 'wpmozo-blocks-and-addons')
            }]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Border Type', 'wpmozo-blocks-and-addons'),
            value: attributes.borderSelection,
            options: borderSelection,
            onChange: newValue => setAttributes({
              borderSelection: newValue
            }),
            __next40pxDefaultSize: true,
            __nextHasNoMarginBottom: true
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_common_components__WEBPACK_IMPORTED_MODULE_3__.WpmozoRangeSize, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Border Width', 'wpmozo-blocks-and-addons'),
            rangeSizeKey: "borderWidth",
            props: props
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_common_components__WEBPACK_IMPORTED_MODULE_3__.WpmozoRangeSize, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Border Radius', 'wpmozo-blocks-and-addons'),
            rangeSizeKey: "borderRadius",
            props: props
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_common_components__WEBPACK_IMPORTED_MODULE_3__.WpmozoColorPicker, {
            ColorKey: "border",
            label: "Border Color",
            props: props,
            ColorTypes: [{
              key: 'Color',
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Border Color', 'wpmozo-blocks-and-addons')
            }]
          })]
        }), 'hover' === attributes.buttonStyle && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_common_components__WEBPACK_IMPORTED_MODULE_3__.WpmozoColorPicker, {
            ColorKey: "buttonTextHover",
            label: "Button Color",
            props: props,
            ColorTypes: [{
              key: 'Color',
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Text Color', 'wpmozo-blocks-and-addons')
            }, {
              key: 'Background',
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Background Color', 'wpmozo-blocks-and-addons')
            }]
          }), 'icon' === attributes.buttonIconType && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_common_components__WEBPACK_IMPORTED_MODULE_3__.WpmozoColorPicker, {
            ColorKey: "iconTextHover",
            label: "Icon Color",
            props: props,
            ColorTypes: [{
              key: 'Color',
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Text Color', 'wpmozo-blocks-and-addons')
            }, {
              key: 'Background',
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Background Color', 'wpmozo-blocks-and-addons')
            }]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Border Type', 'wpmozo-blocks-and-addons'),
            value: attributes.borderSelectionHover,
            options: borderSelection,
            onChange: newValue => setAttributes({
              borderSelectionHover: newValue
            }),
            __next40pxDefaultSize: true
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_common_components__WEBPACK_IMPORTED_MODULE_3__.WpmozoRangeSize, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Border Width', 'wpmozo-blocks-and-addons'),
            rangeSizeKey: "borderWidthHover",
            props: props
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_common_components__WEBPACK_IMPORTED_MODULE_3__.WpmozoRangeSize, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Border Radius', 'wpmozo-blocks-and-addons'),
            rangeSizeKey: "borderRadiusHover",
            props: props
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_common_components__WEBPACK_IMPORTED_MODULE_3__.WpmozoColorPicker, {
            ColorKey: "borderHover",
            label: "Border Color",
            props: props,
            ColorTypes: [{
              key: 'Color',
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Border Color', 'wpmozo-blocks-and-addons')
            }]
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_common_components__WEBPACK_IMPORTED_MODULE_3__.WpmozoDimensions, {
        DimensionKey: "borderDimensions",
        DimensionsTypes: {
          padding: true,
          margin: true
        },
        props: props
      })]
    })]
  });
};

/***/ }),

/***/ "./src/blocks/pricing-table/settings/generalPanel.js":
/*!***********************************************************!*\
  !*** ./src/blocks/pricing-table/settings/generalPanel.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GeneralPanel: () => (/* binding */ GeneralPanel)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/components */ "./src/common/components/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




const GeneralPanel = ({
  attributes,
  setAttributes
}) => {
  const props = {
    attributes,
    setAttributes,
    preAttributes: {}
  };
  let currencySymbol = [{
    value: '',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('None', 'wpmozo-blocks-and-addons')
  }, {
    value: '$',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('$ Dollar', 'wpmozo-blocks-and-addons')
  }, {
    value: '€',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('€ Euro', 'wpmozo-blocks-and-addons')
  }, {
    value: '฿',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('฿ Baht', 'wpmozo-blocks-and-addons')
  }, {
    value: '₣',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('₣ Franc', 'wpmozo-blocks-and-addons')
  }, {
    value: 'ƒ',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('ƒ Guilder', 'wpmozo-blocks-and-addons')
  }, {
    value: 'kr',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('kr Krona', 'wpmozo-blocks-and-addons')
  }, {
    value: '₤',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('₤ Lira', 'wpmozo-blocks-and-addons')
  }, {
    value: '₧',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('₧ Peseta', 'wpmozo-blocks-and-addons')
  }, {
    value: '₱',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('₱ Peso', 'wpmozo-blocks-and-addons')
  }, {
    value: '£',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('£ Pound Sterling', 'wpmozo-blocks-and-addons')
  }, {
    value: 'R$',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('R$ Real', 'wpmozo-blocks-and-addons')
  }, {
    value: '₽',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('₽ Ruble', 'wpmozo-blocks-and-addons')
  }, {
    value: '₨',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('₨ Rupee', 'wpmozo-blocks-and-addons')
  }, {
    value: '₹',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('₹ Rupee ( Indian )', 'wpmozo-blocks-and-addons')
  }, {
    value: '₪',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('₪ Shekel', 'wpmozo-blocks-and-addons')
  }, {
    value: '¥',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('¥ Yen/Yuan', 'wpmozo-blocks-and-addons')
  }, {
    value: '₩',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('₩ Won', 'wpmozo-blocks-and-addons')
  }, {
    value: 'custom',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Custom', 'wpmozo-blocks-and-addons')
  }];
  console.log(attributes.features);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Header', 'wpmozo-blocks-and-addons'),
      initialOpen: true,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Title', 'wpmozo-blocks-and-addons'),
        value: attributes.title,
        onChange: newValue => setAttributes({
          title: newValue
        }),
        __next40pxDefaultSize: true,
        __nextHasNoMarginBottom: true
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Subtitle', 'wpmozo-blocks-and-addons'),
        onChange: newValue => setAttributes({
          subtitle: newValue
        }),
        value: attributes.subtitle,
        __next40pxDefaultSize: true,
        __nextHasNoMarginBottom: true
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Header Graphics', 'wpmozo-blocks-and-addons'),
        value: attributes.headerGraphics,
        options: [{
          value: 'none',
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('None', 'wpmozo-blocks-and-addons')
        }, {
          value: 'icon',
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Icon', 'wpmozo-blocks-and-addons')
        }, {
          value: 'image',
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Image', 'wpmozo-blocks-and-addons')
        }],
        onChange: newValue => setAttributes({
          headerGraphics: newValue
        }),
        __next40pxDefaultSize: true,
        __nextHasNoMarginBottom: true
      }), attributes.headerGraphics && 'icon' === attributes.headerGraphics && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_common_components__WEBPACK_IMPORTED_MODULE_2__.WpmozoIconpicker, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Icon', 'wpmozo-blocks-and-addons'),
        iconPickerKey: "icon",
        props: props,
        value: attributes.headerIcon,
        onChange: newValue => setAttributes({
          headerIcon: newValue
        })
      }), 'image' === attributes.headerGraphics && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_common_components__WEBPACK_IMPORTED_MODULE_2__.WpmozoMediaUploader, {
        attrKye: "headerImage",
        props: props
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Table Pricing', 'wpmozo-blocks-and-addons'),
      initialOpen: false,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Currency Symbol', 'wpmozo-blocks-and-addons'),
        value: attributes.currencySymbol,
        options: currencySymbol,
        onChange: newValue => setAttributes({
          currencySymbol: newValue
        }),
        __next40pxDefaultSize: true,
        __nextHasNoMarginBottom: true
      }), 'custom' === attributes.currencySymbol && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Custom Symbol', 'wpmozo-blocks-and-addons'),
        placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Enter Custom Symbol', 'wpmozo-blocks-and-addons'),
        onChange: newValue => setAttributes({
          customSymbol: newValue
        }),
        value: attributes.customSymbol,
        __next40pxDefaultSize: true,
        __nextHasNoMarginBottom: true
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Price', 'wpmozo-blocks-and-addons'),
        placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Enter your price', 'wpmozo-blocks-and-addons'),
        onChange: newValue => setAttributes({
          price: newValue
        }),
        value: attributes.price,
        __next40pxDefaultSize: true,
        __nextHasNoMarginBottom: true
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Period', 'wpmozo-blocks-and-addons'),
        placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Enter your period', 'wpmozo-blocks-and-addons'),
        onChange: newValue => setAttributes({
          period: newValue
        }),
        value: attributes.period,
        __next40pxDefaultSize: true,
        __nextHasNoMarginBottom: true
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Features', 'wpmozo-blocks-and-addons'),
      initialOpen: false,
      children: [(attributes.features || []).map((feature, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: "wpmozo-feature-row",
        style: {
          gridTemplateColumns: '1fr auto auto',
          gap: '12px',
          alignItems: 'center',
          marginBottom: '12px',
          background: '#f8f9fa',
          padding: '12px 16px',
          borderRadius: '6px',
          boxShadow: '0 1px 2px rgba(0,0,0,0.03)'
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)(`Feature ${index + 1}`, 'wpmozo-blocks-and-addons'),
          value: feature['list'] || '',
          onChange: value => {
            const newFeatures = [...(attributes.features || [])];
            newFeatures[index] = {
              ...newFeatures[index],
              list: value
            };
            setAttributes({
              features: newFeatures
            });
          },
          __next40pxDefaultSize: true,
          __nextHasNoMarginBottom: true,
          style: {
            minWidth: 0
          }
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_common_components__WEBPACK_IMPORTED_MODULE_2__.WpmozoIconpicker, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)(`Icon ${index + 1}`, 'wpmozo-blocks-and-addons'),
            value: feature['icon'] || '',
            props: props,
            onChange: value => {
              const newFeatures = [...(attributes.features || [])];
              newFeatures[index] = {
                ...newFeatures[index],
                icon: value
              };
              setAttributes({
                features: newFeatures
              });
            }
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
          isDestructive: true,
          variant: "secondary",
          icon: "trash",
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Remove', 'wpmozo-blocks-and-addons'),
          onClick: () => {
            const newFeatures = (attributes.features || []).filter((_, innerIndex) => innerIndex !== index);
            setAttributes({
              features: newFeatures
            });
          },
          style: {
            marginLeft: 'auto',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center'
          },
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
            className: "screen-reader-text",
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Remove', 'wpmozo-blocks-and-addons')
          })
        })]
      }, index)), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
        style: {
          marginBottom: '20px'
        },
        isPrimary: true,
        onClick: () => {
          const newFeature = {
            list: ''
          }; // You can add more default fields here if needed
          const newFeatures = [...(attributes.features || []), newFeature];
          setAttributes({
            features: newFeatures
          });
        },
        children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Add Item', 'wpmozo-blocks-and-addons')
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Show Icon', 'wpmozo-blocks-and-addons'),
        checked: attributes.showFeaturesIcon || false,
        onChange: newValue => setAttributes({
          showFeaturesIcon: newValue
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Button', 'wpmozo-blocks-and-addons'),
      initialOpen: false,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Show Button', 'wpmozo-blocks-and-addons'),
        checked: attributes.showButton,
        onChange: newValue => setAttributes({
          showButton: newValue
        })
      }), attributes.showButton && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Button Text', 'wpmozo-blocks-and-addons'),
          value: attributes.buttonText,
          onChange: newValue => setAttributes({
            buttonText: newValue
          }),
          __next40pxDefaultSize: true,
          __nextHasNoMarginBottom: true
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Button Url', 'wpmozo-blocks-and-addons'),
          onChange: newValue => setAttributes({
            buttonUrl: newValue
          }),
          value: attributes.buttonUrl,
          __next40pxDefaultSize: true,
          __nextHasNoMarginBottom: true
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.BaseControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Link Target', 'wpmozo-blocks-and-addons'),
          className: "wpmozo-button-tabs-wrap",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ButtonGroup, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
              className: "wpmozo-button-tabs-btn",
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Same Window', 'wpmozo-blocks-and-addons'),
              isPressed: 'same' === attributes.buttonLinkTarget ? true : false,
              onClick: () => setAttributes({
                buttonLinkTarget: 'same'
              }),
              icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Icon, {
                icon: "admin-links"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
              className: "wpmozo-button-tabs-btn",
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('External', 'wpmozo-blocks-and-addons'),
              isPressed: 'external' === attributes.buttonLinkTarget ? true : false,
              onClick: () => setAttributes({
                buttonLinkTarget: 'external'
              }),
              icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Icon, {
                icon: "external"
              })
            })]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Button Icon Type', 'wpmozo-blocks-and-addons'),
          value: attributes.buttonIconType,
          options: [{
            value: 'none',
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('None', 'wpmozo-blocks-and-addons')
          }, {
            value: 'icon',
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Icon', 'wpmozo-blocks-and-addons')
          }, {
            value: 'image',
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Image', 'wpmozo-blocks-and-addons')
          }],
          onChange: newValue => setAttributes({
            buttonIconType: newValue
          }),
          __next40pxDefaultSize: true,
          __nextHasNoMarginBottom: true
        }), 'none' !== attributes.buttonIconType && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
          children: ['icon' === attributes.buttonIconType && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_common_components__WEBPACK_IMPORTED_MODULE_2__.WpmozoIconpicker, {
            props: props,
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Icon', 'wpmozo-blocks-and-addons'),
            iconPickerKey: "buttonIcon",
            value: attributes.buttonIcon,
            onChange: newValue => setAttributes({
              buttonIcon: newValue
            })
          }), 'image' === attributes.buttonIconType && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_common_components__WEBPACK_IMPORTED_MODULE_2__.WpmozoMediaUploader, {
            attrKye: "buttonIconImage",
            props: props
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.BaseControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Button Icon Position', 'wpmozo-blocks-and-addons'),
            className: "wpmozo-button-tabs-wrap",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ButtonGroup, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
                className: "wpmozo-button-tabs-btn",
                isPressed: 'icon-before' === attributes.buttonIconPosition ? true : false,
                onClick: () => setAttributes({
                  buttonIconPosition: 'icon-before'
                }),
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Before', 'wpmozo-blocks-and-addons'),
                children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Before', 'wpmozo-blocks-and-addons')
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
                className: "wpmozo-button-tabs-btn",
                isPressed: 'icon-after' === attributes.buttonIconPosition ? true : false,
                onClick: () => setAttributes({
                  buttonIconPosition: 'icon-after'
                }),
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('After', 'wpmozo-blocks-and-addons'),
                children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('After', 'wpmozo-blocks-and-addons')
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Show Icon On Hover', 'wpmozo-blocks-and-addons'),
            checked: attributes.showIconOnHover,
            onChange: newValue => setAttributes({
              showIconOnHover: newValue
            })
          })]
        })]
      })]
    })]
  });
};

/***/ }),

/***/ "./src/blocks/pricing-table/style.js":
/*!*******************************************!*\
  !*** ./src/blocks/pricing-table/style.js ***!
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
  const {
      iconFontSize,
      separatorColor
    } = attributes,
    toConvertStyles = ['title', 'subTitle', 'icon', 'headerGraphicsDimensions', 'mainDimensions', 'currency', 'price', 'period', 'features', 'featuresDimensions', 'borderDimensions', 'wrapper'];
  let convertedStyle = (0,_common_utils_js__WEBPACK_IMPORTED_MODULE_0__.convertInlineStyleStr)(toConvertStyles, attributes);
  let styles = `#block-${attributes.ID}{`;
  styles += `
		.wpmozo-bna-pricing-table-wrapper{
			background-color : ${attributes.backgroundColor};
			${convertedStyle.mainDimensions}
			${convertedStyle.wrapper}
		}
		.wpmozo-bna-pricing-table-title{
			color: ${attributes.titleColor};
			text-align: ${attributes.titleAlign};
			${convertedStyle.title}
		}
		.wpmozo-bna-pricing-table-subtitle{
			color: ${attributes.subTitleColor};
			text-align: ${attributes.subTitleAlign};
			${convertedStyle.subTitle}
		}

		.wpmozo-bna-pricing-table-header-graphic{
			text-align: ${attributes.iconAlign};
			font-size: ${attributes.iconFontSize};
			color: ${attributes.iconColor};
			${convertedStyle.icon}
			${convertedStyle.headerGraphicsDimensions}
		}

		.wpmozo-bna-pricing-table-header-graphic-inner img{
			width: ${attributes.imageWidth};
			height: ${attributes.imageHeight};
			${convertedStyle.headerGraphicsDimensions}
		}

		.wpmozo-bna-pricing-table-pricing{
			text-align: ${attributes.pricealign};
			${convertedStyle.currency}
		}
		.wpmozo-bna-pricing-table-currency-symbol{
			color: ${attributes.currencyColor};
		}

		.wpmozo-bna-pricing-table-price{
			color: ${attributes.periodColor};
			${convertedStyle.price}
		}
		.wpmozo-bna-pricing-table-period{
			color: ${attributes.periodColor};
			${convertedStyle.period}
		}

		.wpmozo-bna-pricing-table-feature-text{
			color: ${attributes.featuresColor};
			${convertedStyle.features}
		}

		.wpmozo-bna-pricing-table-features{
			background-color: ${attributes.featuresBackground};
			text-align: ${attributes.feturesAlign};
			${convertedStyle.featuresDimensions}
		}

		.wpmozo-bna-pricing-table-feature-icon {
			color: ${attributes.featuresIconsColor};
			margin-right: ${attributes.featuresIconsSpacing};
		}

		.wpmozo-bna-pricing-table-button-wrapper {
			text-align: ${attributes.buttonAlign};
		}

		.wpmozo-bna-button{
			${attributes.buttonTextColor ? `color: ${attributes.buttonTextColor};` : ''}
			${attributes.buttonTextBackground ? `background-color: ${attributes.buttonTextBackground};` : ''}
			${attributes.borderSelection ? `border-style: ${attributes.borderSelection};` : ''}
			${attributes.borderWidth ? `border-width: ${attributes.borderWidth};` : ''}
			${attributes.borderRadius ? `border-radius: ${attributes.borderRadius};` : ''}
			${attributes.borderColor ? `border-color: ${attributes.borderColor};` : ''}
			${convertedStyle.borderDimensions}
		}
		.wpmozo-bna-button:hover{
			${attributes.buttonTextHoverColor ? `color: ${attributes.buttonTextHoverColor};` : ''}
			${attributes.buttonTextHoverBackground ? `background-color: ${attributes.buttonTextHoverBackground};` : ''}
			${attributes.borderSelectionHover ? `border-style: ${attributes.borderSelectionHover};` : ''}
			${attributes.borderWidthHover ? `border-width: ${attributes.borderWidthHover};` : ''}
			${attributes.borderRadiusHover ? `border-radius: ${attributes.borderRadiusHover};` : ''}
			${attributes.borderHoverColor ? `border-color: ${attributes.borderHoverColor};` : ''}
		}

		.wpmozo-bna-button-icon{
			color: ${attributes.iconTextColor};
			background-color: ${attributes.iconTextBackground};
		}

		.wpmozo-bna-pricing-table-button-wrapper .wpmozo-bna-button{
			font-size: ${attributes.buttonFontSize}px;
		}
		.wpmozo-bna-pricing-table-feature-icon{
			font-size: ${attributes.featuresIconFontSize}px;
		}
		.wpmozo-bna-pricing-table-features-list{
			padding: ${attributes.featuresSpacing}px 0;
		}
		.wpmozo-bna-pricing-table-features div{
			margin: ${attributes.featuresMargin}px 0;
		}

	`;
  styles += `}`;
  return styles;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generateDynamicStyle);

/***/ }),

/***/ "./src/blocks/pricing-table/style.scss":
/*!*********************************************!*\
  !*** ./src/blocks/pricing-table/style.scss ***!
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
/******/ 			"blocks/pricing-table/index": 0,
/******/ 			"blocks/bar-counter/style-index": 0,
/******/ 			"blocks/pricing-table/style-index": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["blocks/bar-counter/style-index","blocks/pricing-table/style-index"], () => (__webpack_require__("./src/blocks/pricing-table/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map