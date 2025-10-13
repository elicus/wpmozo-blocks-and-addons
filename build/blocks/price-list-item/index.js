/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/price-list-item/block.json":
/*!***********************************************!*\
  !*** ./src/blocks/price-list-item/block.json ***!
  \***********************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"wpmozo/price-list-item","version":"0.1.0","title":"Price List Item","category":"wpmozo","icon":"smiley","description":"Easily create and organized price lists with the Price List block","example":{},"parent":["wpmozo/price-list"],"supports":{"html":false,"anchor":false,"customClassName":false,"inserter":false},"attributes":{"parentAtts":{"type":"object"},"ID":{"type":"string"},"className":{"type":"string"},"itemName":{"type":"string","default":"Item Name"},"itemCurrency":{"type":"string","default":"$"},"itemPrice":{"type":"string","default":"10"},"pricePeriod":{"type":"string"},"itemThumbnailOption":{"type":"string","default":"use_image"},"icon":{"type":"string"},"itemThumbnail":{"type":"string"},"content":{"type":"string"},"itemBackground":{"type":"string"},"itemborder":{"type":"object"},"itemborderRadius":{"type":"string"},"iconColor":{"type":"string"},"iconShapBackground":{"type":"string"},"styleIcon":{"type":"boolean","default":false},"iconShape":{"type":"string","default":"square"},"iconFontSize":{"type":"string"},"thumbnailAlignment":{"type":"string","default":"center"},"thumbnailborder":{"type":"object"},"thumbnailborderRadius":{"type":"string"},"nameHeadingLavel":{"type":"string","default":"h4"},"nameColor":{"type":"string"},"nameFontSize":{"type":"string"},"nameFontAppearance":{"type":"object","fontStyle":{"type":"string"},"fontWeight":{"type":"string"},"default":{"fontStyle":"","fontWeight":""}},"nameLetterSpacing":{"type":"string"},"nameDecoration":{"type":"string"},"nameLetterCase":{"type":"string"},"nameLineHeight":{"type":"string"},"priceColor":{"type":"string"},"priceFontSize":{"type":"string"},"priceFontAppearance":{"type":"object","fontStyle":{"type":"string"},"fontWeight":{"type":"string"},"default":{"fontStyle":"","fontWeight":""}},"priceLetterSpacing":{"type":"string"},"priceDecoration":{"type":"string"},"priceLetterCase":{"type":"string"},"priceLineHeight":{"type":"string"},"currencyColor":{"type":"string"},"currencyFontSize":{"type":"string"},"currencyFontAppearance":{"type":"object","fontStyle":{"type":"string"},"fontWeight":{"type":"string"},"default":{"fontStyle":"","fontWeight":""}},"currencyLetterSpacing":{"type":"string"},"currencyDecoration":{"type":"string"},"currencyLetterCase":{"type":"string"},"currencyLineHeight":{"type":"string"},"descriptionColor":{"type":"string"},"descriptionFontSize":{"type":"string"},"descriptionFontAppearance":{"type":"object","fontStyle":{"type":"string"},"fontWeight":{"type":"string"},"default":{"fontStyle":"","fontWeight":""}},"descriptionLetterSpacing":{"type":"string"},"descriptionDecoration":{"type":"string"},"descriptionLetterCase":{"type":"string"},"descriptionLineHeight":{"type":"string"},"periodColor":{"type":"string"},"periodFontSize":{"type":"string"},"periodFontAppearance":{"type":"object","fontStyle":{"type":"string"},"fontWeight":{"type":"string"},"default":{"fontStyle":"","fontWeight":""}},"periodLetterSpacing":{"type":"string"},"periodDecoration":{"type":"string"},"periodLetterCase":{"type":"string"},"periodLineHeight":{"type":"string"}},"textdomain":"wpmozo-blocks-and-addons","editorScript":"file:./index.js"}');

/***/ }),

/***/ "./src/blocks/price-list-item/edit-layout.jsx":
/*!****************************************************!*\
  !*** ./src/blocks/price-list-item/edit-layout.jsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



function WPMozoPriceListLayout({
  props
}) {
  const attributes = props.attributes,
    setAttributes = props.setAttributes;
  let {
    itemThumbnail,
    itemCurrency,
    itemPrice,
    itemThumbnailOption,
    iconShape,
    pricePeriod,
    itemName,
    icon,
    content,
    parentAtts,
    ID,
    styleIcon
  } = attributes;
  let thumbnail = null,
    price = null,
    currency = null,
    description = null;
  const iconElement = icon ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    className: "icon-wrapper",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("i", {
      className: icon
    })
  }) : null;
  let itmeHeadingTag = attributes.nameHeadingLavel,
    parentHeadingLavel = parentAtts.nameHeadingLavel,
    HeadingTag = 'h4' !== itmeHeadingTag ? itmeHeadingTag : parentHeadingLavel,
    iconShapeClass = styleIcon ? ' ' + iconShape : '';
  const title = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText, {
    className: "wpmozo-bna-price-list-item-name",
    tagName: HeadingTag,
    value: attributes.itemName,
    onChange: newValue => setAttributes({
      itemName: newValue
    }),
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Item Title', 'wpmozo-blocks-and-addons')
  });
  if (itemThumbnail && itemThumbnailOption === "use_image") {
    thumbnail = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img", {
      src: itemThumbnail,
      alt: ""
    });
  }
  if (iconElement && itemThumbnailOption === "use_icon") {
    thumbnail = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
      className: `wpmozo-bna-price-list-icon${iconShapeClass}`,
      children: iconElement
    });
  }
  if (itemPrice) {
    price = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
      className: "wpmozo-bna-price-list-item-price",
      children: itemPrice
    });
  }
  if (itemCurrency) {
    currency = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
      className: "wpmozo-bna-price-list-item-currency",
      children: itemCurrency
    });
  }
  description = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText, {
    className: "wpmozo-bna-price-list-item-description",
    tagName: "div",
    value: attributes.content,
    onChange: newValue => setAttributes({
      content: newValue
    }),
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Item Description', 'wpmozo-blocks-and-addons')
  });
  return parentAtts.layout === "layout1" ? layout1(thumbnail, currency, price, pricePeriod, title, description, ID, itemThumbnailOption, iconShape) : layout2(thumbnail, currency, price, pricePeriod, title, description, ID, itemThumbnailOption, iconShape);
}
function layout1(thumbnail, currency, price, pricePeriod, title, description, address, itemThumbnailOption, iconShape) {
  const noThumbnail = !thumbnail;
  const itemPriceWrap = [];
  const innerWrap = [];
  const itemNameWrap = [];
  if (thumbnail && itemThumbnailOption === "use_image") {
    innerWrap.push(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "wpmozo-bna-price-list-item-thumbnail",
      children: thumbnail
    }, `${address}_layout1_thumb`));
  }
  if (thumbnail && itemThumbnailOption === "use_icon") {
    let iconThumb = thumbnail;
    innerWrap.push(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "wpmozo-bna-price-list-item-icon",
      children: iconThumb
    }, `${address}_layout1_icon`));
  }
  if (price) {
    itemPriceWrap.push(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "wpmozo-bna-price-list-item-price-divider"
    }, `${address}_layout1_price_divider`));
    itemPriceWrap.push(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "wpmozo-bna-price-list-item-price-wrap",
      children: [currency, price]
    }, `${address}_layout1_price_wrapper`));
    if (pricePeriod) {
      itemPriceWrap.push(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "wpmozo-bna-price-list-item-price-period",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
          className: "wpmozo-bna-price-period-divider",
          children: "/"
        }), pricePeriod]
      }, `${address}_layout1_price_period`));
    }
  }
  itemNameWrap.push(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    className: "wpmozo-bna-price-list-item-name-wrap",
    children: [title, itemPriceWrap]
  }, `${address}_layout1_name_wrap`));
  innerWrap.push(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    className: "wpmozo-bna-price-list-item-details",
    children: [itemNameWrap, description]
  }, `${address}_layout1_desc`));
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    className: "wpmozo-bna-price-list-layout wpmozo-bna-price-list-layout1",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "wpmozo-bna-price-list-item-wrap",
      children: innerWrap
    })
  }, `${address}_layout1_item`);
}
function layout2(thumbnail, currency, price, pricePeriod, title, description, address, itemThumbnailOption, iconShape) {
  const innerWrap = [];
  let noThumbnail = false;
  if (!thumbnail) {
    noThumbnail = true;
  }
  if (thumbnail && itemThumbnailOption === "use_image") {
    innerWrap.push(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "wpmozo-bna-price-list-item-thumbnail",
      children: thumbnail
    }, `${address}_layout2_thumb`));
  }
  if (thumbnail && itemThumbnailOption === "use_icon") {
    let iconThumb = thumbnail;
    innerWrap.push(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "wpmozo-bna-price-list-item-icon",
      children: iconThumb
    }, `${address}_layout2_icon`));
  }
  if (price) {
    let pricePeriodHtml = null;
    if (pricePeriod) {
      pricePeriodHtml = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("span", {
        className: "wpmozo-bna-price-list-item-price-period",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
          className: "wpmozo-bna-price-period-divider",
          children: "/"
        }), pricePeriod]
      });
    }
    innerWrap.push(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "wpmozo-bna-price-list-item-price-wrap",
      children: [currency, price, pricePeriodHtml]
    }, `${address}_layout2_price_wrap`));
  }
  innerWrap.push(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    className: "wpmozo-bna-price-list-item-name-wrap",
    children: title
  }, `${address}_layout2_name_wrap`));
  if (description) {
    innerWrap.push(description);
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    className: "wpmozo-bna-price-list-layout wpmozo-bna-price-list-layout2",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "wpmozo-bna-price-list-item-wrap",
      children: innerWrap
    })
  }, `${address}_layout2_item`);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WPMozoPriceListLayout);

/***/ }),

/***/ "./src/blocks/price-list-item/edit.js":
/*!********************************************!*\
  !*** ./src/blocks/price-list-item/edit.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _inspector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inspector */ "./src/blocks/price-list-item/inspector.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style */ "./src/blocks/price-list-item/style.js");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _edit_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-layout */ "./src/blocks/price-list-item/edit-layout.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);








/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */

function Edit(props) {
  const attributes = props.attributes,
    setAttributes = props.setAttributes,
    clientId = props.clientId;
  const parentAttributes = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.useSelect)(select => {
    const {
      getBlockRootClientId,
      getBlock
    } = select('core/block-editor');
    const parentId = getBlockRootClientId(clientId);
    return parentId ? getBlock(parentId)?.attributes : null;
  }, [clientId]);
  attributes.parentAtts = parentAttributes;
  attributes.ID = clientId;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_inspector__WEBPACK_IMPORTED_MODULE_2__["default"], {
      attributes: attributes,
      setAttributes: setAttributes
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("style", {
      children: (0,_style__WEBPACK_IMPORTED_MODULE_4__["default"])({
        attributes,
        clientId,
        parentAttributes
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
      ...(0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)({
        className: 'wpmozo-bna-price-list-item',
        id: `block-${clientId}`
      }),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_edit_layout__WEBPACK_IMPORTED_MODULE_6__["default"], {
        props: props
      })
    })]
  });
}

/***/ }),

/***/ "./src/blocks/price-list-item/icon.js":
/*!********************************************!*\
  !*** ./src/blocks/price-list-item/icon.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const Icon = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
  className: "wpmozo-block-icon",
  xmlns: "http://www.w3.org/2000/svg",
  version: "1.1",
  width: "1024",
  height: "1024",
  viewBox: "0 0 1024 1024",
  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    fill: "#000",
    d: "M584.533 326.4c-6.4 10.667-12.8 17.067-23.467 25.6-10.667 6.4-23.467 10.667-38.4 12.8v27.733h-21.333v-27.733c-21.333-2.133-38.4-8.533-51.2-19.2s-19.2-25.6-19.2-44.8h40.533c0 8.533 4.267 14.933 8.533 21.333s12.8 8.533 21.333 10.667v-72.533c-14.933-4.267-27.733-8.533-36.267-10.667-8.533-4.267-17.067-10.667-23.467-19.2s-10.667-19.2-10.667-34.133c0-19.2 6.4-34.133 19.2-46.933s29.867-19.2 51.2-21.333v-27.733h21.333v27.733c19.2 2.133 36.267 8.533 46.933 19.2 12.8 10.667 19.2 25.6 19.2 42.667h-40.533c0-6.4-4.267-12.8-8.533-19.2s-10.667-8.533-19.2-10.667v72.533c14.933 4.267 27.733 6.4 36.267 10.667s17.067 10.667 23.467 19.2c6.4 8.533 10.667 19.2 10.667 34.133 2.133 10.667 0 21.333-6.4 29.867zM477.867 213.333c6.4 4.267 12.8 8.533 23.467 12.8v-68.267c-8.533 2.133-17.067 4.267-23.467 10.667-4.267 6.4-8.533 12.8-8.533 23.467 0 8.533 4.267 17.067 8.533 21.333zM546.133 320c6.4-6.4 8.533-14.933 8.533-23.467s-2.133-14.933-8.533-21.333c-6.4-4.267-12.8-8.533-23.467-12.8v68.267c10.667 0 17.067-4.267 23.467-10.667z"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    fill: "#000",
    d: "M757.333 605.867h-298.667c-12.8 0-21.333-8.533-21.333-21.333v0c0-12.8 8.533-21.333 21.333-21.333h298.667c12.8 0 21.333 8.533 21.333 21.333v0c0 10.667-8.533 21.333-21.333 21.333z"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    fill: "#000",
    d: "M757.333 733.867h-298.667c-12.8 0-21.333-8.533-21.333-21.333v0c0-12.8 8.533-21.333 21.333-21.333h298.667c12.8 0 21.333 8.533 21.333 21.333v0c0 10.667-8.533 21.333-21.333 21.333z"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    fill: "#000",
    d: "M761.6 864h-298.667c-12.8 0-21.333-8.533-21.333-21.333v0c0-12.8 8.533-21.333 21.333-21.333h298.667c12.8 0 21.333 8.533 21.333 21.333v0c0 12.8-10.667 21.333-21.333 21.333z"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    fill: "#000",
    d: "M384 554.667c0 4.267-2.133 10.667-6.4 12.8l-78.933 59.733c-6.4 4.267-14.933 4.267-21.333 0-2.133 0-2.133-2.133-4.267-4.267l-21.333-25.6c-6.4-6.4-4.267-17.067 2.133-23.467 2.133-2.133 6.4-4.267 10.667-4.267s10.667 2.133 12.8 6.4l10.667 14.933 66.133-51.2c6.4-6.4 17.067-4.267 23.467 2.133 4.267 4.267 6.4 8.533 6.4 12.8z"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    fill: "#000",
    d: "M384 682.667c0 4.267-2.133 10.667-6.4 12.8l-78.933 59.733c-6.4 4.267-14.933 4.267-21.333 0-2.133 0-2.133-2.133-4.267-4.267l-21.333-25.6c-6.4-6.4-4.267-17.067 2.133-23.467 2.133-2.133 6.4-4.267 10.667-4.267s10.667 2.133 12.8 6.4l10.667 14.933 66.133-51.2c6.4-6.4 17.067-4.267 23.467 2.133 4.267 4.267 6.4 8.533 6.4 12.8z"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    fill: "#000",
    d: "M390.4 812.8c0 4.267-2.133 10.667-6.4 12.8l-78.933 61.867c-6.4 4.267-14.933 4.267-21.333 0-2.133 0-2.133-2.133-4.267-4.267l-21.333-25.6c-6.4-6.4-4.267-17.067 2.133-23.467 2.133-2.133 6.4-4.267 10.667-4.267s10.667 2.133 12.8 6.4l10.667 14.933 66.133-51.2c6.4-6.4 17.067-4.267 23.467 2.133 4.267 4.267 6.4 6.4 6.4 10.667z"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    fill: "#000",
    d: "M746.667 224c-10.667-119.467-110.933-213.333-234.667-213.333s-221.867 93.867-234.667 213.333c-87.467 19.2-151.467 96-151.467 187.733v411.733c0 106.667 85.333 192 192 192h386.133c106.667 0 192-85.333 192-192v-411.733c2.133-93.867-64-170.667-149.333-187.733zM512 53.333c96 0 177.067 72.533 189.867 166.4 2.133 8.533 2.133 17.067 2.133 27.733 0 6.4 0 10.667 0 17.067-8.533 98.133-91.733 177.067-192 177.067s-183.467-76.8-192-177.067c0-6.4 0-10.667 0-17.067 0-8.533 0-17.067 2.133-27.733 12.8-93.867 93.867-166.4 189.867-166.4zM855.467 821.333c0 83.2-66.133 149.333-149.333 149.333h-388.267c-83.2 0-149.333-66.133-149.333-149.333v-409.6c0-68.267 46.933-125.867 108.8-142.933 10.667 119.467 110.933 213.333 234.667 213.333s221.867-93.867 234.667-213.333c64 17.067 108.8 74.667 108.8 142.933v409.6z"
  })]
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Icon);

/***/ }),

/***/ "./src/blocks/price-list-item/index.js":
/*!*********************************************!*\
  !*** ./src/blocks/price-list-item/index.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block.json */ "./src/blocks/price-list-item/block.json");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/blocks/price-list-item/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/blocks/price-list-item/save.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./icon */ "./src/blocks/price-list-item/icon.js");





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

/***/ "./src/blocks/price-list-item/inspector.js":
/*!*************************************************!*\
  !*** ./src/blocks/price-list-item/inspector.js ***!
  \*************************************************/
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
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/utils */ "./src/common/utils.js");
/* harmony import */ var _settings_generalPanel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./settings/generalPanel */ "./src/blocks/price-list-item/settings/generalPanel.js");
/* harmony import */ var _settings_designPanel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./settings/designPanel */ "./src/blocks/price-list-item/settings/designPanel.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);
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
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TabPanel, {
      className: "wpmozo-settings-tab-panel",
      activeClass: "is-active",
      tabs: (0,_common_utils__WEBPACK_IMPORTED_MODULE_3__.inspectorPanelTabs)(),
      children: tab => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: "wpmozo-settings-tab-panel-content",
        children: [tab.name === 'general' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_settings_generalPanel__WEBPACK_IMPORTED_MODULE_4__.GeneralPanel, {
          attributes: attributes,
          setAttributes: setAttributes
        }), tab.name === 'design' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_settings_designPanel__WEBPACK_IMPORTED_MODULE_5__.DesignPanel, {
          attributes: attributes,
          setAttributes: setAttributes
        }), tab.name === 'advanced' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Advanced', 'wpmozo-blocks-and-addons'),
          initialOpen: true,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('HTML Anchor', 'wpmozo-blocks-and-addons'),
            value: attributes.anchor || '',
            onChange: value => setAttributes({
              anchor: value
            }),
            help: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
              children: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Enter a word or two — without spaces — to make a unique web address just for this block, called an “anchor”. Then, you’ll be able to link directly to this section of your page.', 'wpmozo-blocks-and-addons'), ' ', /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ExternalLink, {
                href: "https://wordpress.org/documentation/article/page-jumps/",
                children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Learn more about anchors', 'wpmozo-blocks-and-addons')
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Additional CSS Class(es)', 'wpmozo-blocks-and-addons'),
            value: attributes.className || '',
            onChange: value => setAttributes({
              className: value
            }),
            help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Separate multiple classes with spaces.', 'wpmozo-blocks-and-addons')
          })]
        })]
      })
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Inspector);

/***/ }),

/***/ "./src/blocks/price-list-item/save-layout.jsx":
/*!****************************************************!*\
  !*** ./src/blocks/price-list-item/save-layout.jsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



function WPMozoPriceListLayout({
  attributes
}) {
  let {
    itemThumbnail,
    itemCurrency,
    itemPrice,
    itemThumbnailOption,
    iconShape,
    pricePeriod,
    itemName,
    icon,
    content,
    parentAtts,
    ID,
    styleIcon
  } = attributes;
  let thumbnail = null,
    price = null,
    currency = null,
    description = null;
  const iconElement = icon ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    className: "icon-wrapper",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("i", {
      className: icon
    })
  }) : null;
  let itmeHeadingTag = attributes.nameHeadingLavel,
    parentHeadingLavel = parentAtts.nameHeadingLavel,
    HeadingTag = 'h4' !== itmeHeadingTag ? itmeHeadingTag : parentHeadingLavel,
    iconShapeClass = styleIcon ? ' ' + iconShape : '';
  const title = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText.Content, {
    className: "wpmozo-bna-price-list-item-name",
    tagName: HeadingTag,
    value: attributes.itemName
  });
  if (itemThumbnail && itemThumbnailOption === "use_image") {
    thumbnail = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img", {
      src: itemThumbnail,
      alt: ""
    });
  }
  if (iconElement && itemThumbnailOption === "use_icon") {
    thumbnail = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
      className: `wpmozo-bna-price-list-icon${iconShapeClass}`,
      children: iconElement
    });
  }
  if (itemPrice) {
    price = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
      className: "wpmozo-bna-price-list-item-price",
      children: itemPrice
    });
  }
  if (itemCurrency) {
    currency = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
      className: "wpmozo-bna-price-list-item-currency",
      children: itemCurrency
    });
  }
  description = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText.Content, {
    className: "wpmozo-bna-price-list-item-description",
    tagName: "div",
    value: attributes.content
  });
  return parentAtts.layout === "layout1" ? layout1(thumbnail, currency, price, pricePeriod, title, description, ID, itemThumbnailOption, iconShape) : layout2(thumbnail, currency, price, pricePeriod, title, description, ID, itemThumbnailOption, iconShape);
}
function layout1(thumbnail, currency, price, pricePeriod, title, description, address, itemThumbnailOption, iconShape) {
  const noThumbnail = !thumbnail;
  const itemPriceWrap = [];
  const innerWrap = [];
  const itemNameWrap = [];
  if (thumbnail && itemThumbnailOption === "use_image") {
    innerWrap.push(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "wpmozo-bna-price-list-item-thumbnail",
      children: thumbnail
    }, `${address}_layout1_thumb`));
  }
  if (thumbnail && itemThumbnailOption === "use_icon") {
    let iconThumb = thumbnail;
    innerWrap.push(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "wpmozo-bna-price-list-item-icon",
      children: iconThumb
    }, `${address}_layout1_icon`));
  }
  if (price) {
    itemPriceWrap.push(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "wpmozo-bna-price-list-item-price-divider"
    }, `${address}_layout1_price_divider`));
    itemPriceWrap.push(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "wpmozo-bna-price-list-item-price-wrap",
      children: [currency, price]
    }, `${address}_layout1_price_wrapper`));
    if (pricePeriod) {
      itemPriceWrap.push(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "wpmozo-bna-price-list-item-price-period",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
          className: "wpmozo-bna-price-period-divider",
          children: "/"
        }), pricePeriod]
      }, `${address}_layout1_price_period`));
    }
  }
  itemNameWrap.push(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    className: "wpmozo-bna-price-list-item-name-wrap",
    children: [title, itemPriceWrap]
  }, `${address}_layout1_name_wrap`));
  innerWrap.push(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    className: "wpmozo-bna-price-list-item-details",
    children: [itemNameWrap, description]
  }, `${address}_layout1_desc`));
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    className: "wpmozo-bna-price-list-layout wpmozo-bna-price-list-layout1",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "wpmozo-bna-price-list-item-wrap",
      children: innerWrap
    })
  }, `${address}_layout1_item`);
}
function layout2(thumbnail, currency, price, pricePeriod, title, description, address, itemThumbnailOption, iconShape) {
  const innerWrap = [];
  let noThumbnail = false;
  if (!thumbnail) {
    noThumbnail = true;
  }
  if (thumbnail && itemThumbnailOption === "use_image") {
    innerWrap.push(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "wpmozo-bna-price-list-item-thumbnail",
      children: thumbnail
    }, `${address}_layout2_thumb`));
  }
  if (thumbnail && itemThumbnailOption === "use_icon") {
    let iconThumb = thumbnail;
    innerWrap.push(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "wpmozo-bna-price-list-item-icon",
      children: iconThumb
    }, `${address}_layout2_icon`));
  }
  if (price) {
    let pricePeriodHtml = null;
    if (pricePeriod) {
      pricePeriodHtml = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("span", {
        className: "wpmozo-bna-price-list-item-price-period",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
          className: "wpmozo-bna-price-period-divider",
          children: "/"
        }), pricePeriod]
      });
    }
    innerWrap.push(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "wpmozo-bna-price-list-item-price-wrap",
      children: [currency, price, pricePeriodHtml]
    }, `${address}_layout2_price_wrap`));
  }
  innerWrap.push(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    className: "wpmozo-bna-price-list-item-name-wrap",
    children: title
  }, `${address}_layout2_name_wrap`));
  if (description) {
    innerWrap.push(description);
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    className: "wpmozo-bna-price-list-layout wpmozo-bna-price-list-layout2",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "wpmozo-bna-price-list-item-wrap",
      children: innerWrap
    })
  }, `${address}_layout2_item`);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WPMozoPriceListLayout);

/***/ }),

/***/ "./src/blocks/price-list-item/save.js":
/*!********************************************!*\
  !*** ./src/blocks/price-list-item/save.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style */ "./src/blocks/price-list-item/style.js");
/* harmony import */ var _save_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save-layout */ "./src/blocks/price-list-item/save-layout.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




function save({
  attributes
}) {
  const clientId = attributes.ID;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("style", {
      children: (0,_style__WEBPACK_IMPORTED_MODULE_1__["default"])({
        attributes,
        clientId
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      ..._wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps.save({
        className: "wpmozo-bna-price-list-item",
        id: `block-${clientId}`
      }),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_save_layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
        attributes: attributes
      })
    })]
  });
}

/***/ }),

/***/ "./src/blocks/price-list-item/settings/designPanel.js":
/*!************************************************************!*\
  !*** ./src/blocks/price-list-item/settings/designPanel.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DesignPanel: () => (/* binding */ DesignPanel)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common_components_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/components/index */ "./src/common/components/index.js");
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
  const [deviceType, setDeviceType] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)('tablet'),
    [textType, setTextType] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)('text'),
    iconShapes = [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Square', 'wpmozo-blocks-and-addons'),
      value: 'square'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Circle', 'wpmozo-blocks-and-addons'),
      value: 'circle'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Hexagon', 'wpmozo-blocks-and-addons'),
      value: 'hexagon'
    }];
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Price Item', 'wpmozo-blocks-and-addons'),
      className: "wpmozo-typography-panel",
      initialOpen: false,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_common_components_index__WEBPACK_IMPORTED_MODULE_4__.WpmozoColorPicker, {
        props: props,
        ColorKey: "",
        ColorTypes: [{
          key: 'itemBackground',
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Item Background', 'wpmozo-blocks-and-addons')
        }]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_common_components_index__WEBPACK_IMPORTED_MODULE_4__.WpmozoBorder, {
        props: props,
        BorderKey: "item",
        BorderTypes: {
          border: true,
          radius: true
        }
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Alignment', 'wpmozo-blocks-and-addons'),
      initialOpen: false,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_common_components_index__WEBPACK_IMPORTED_MODULE_4__.WpmozoAlignment, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Text Alignment', 'wpmozo-blocks-and-addons'),
        onChange: newValue => setAttributes({
          textAlignment: newValue
        }),
        value: attributes.textAlignment
      })
    }), 'use_icon' === attributes.itemThumbnailOption && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Icon', 'wpmozo-blocks-and-addons'),
        className: "wpmozo-typography-panel",
        initialOpen: false,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_common_components_index__WEBPACK_IMPORTED_MODULE_4__.WpmozoColorPicker, {
          props: props,
          ColorKey: "icon",
          ColorTypes: [{
            key: 'Color',
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Icon Color', 'wpmozo-blocks-and-addons')
          }, ...(attributes.styleIcon ? [{
            key: 'ShapBackground',
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Shape Background', 'wpmozo-blocks-and-addons')
          }] : [])]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_common_components_index__WEBPACK_IMPORTED_MODULE_4__.WpmozoTypography, {
          TypographyKey: "icon",
          props: props,
          TypoTypes: {
            'FontSize': true
          }
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Style Icon', 'wpmozo-blocks-and-addons'),
          checked: attributes.styleIcon,
          onChange: newValue => setAttributes({
            styleIcon: newValue
          }),
          __nextHasNoMarginBottom: true
        }), attributes.styleIcon && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Shape', 'wpmozo-blocks-and-addons'),
            value: attributes.iconShape,
            options: iconShapes,
            onChange: newValue => setAttributes({
              iconShape: newValue
            }),
            __next40pxDefaultSize: true,
            __nextHasNoMarginBottom: true
          })
        })]
      })
    }), 'use_image' === attributes.itemThumbnailOption && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Thumbnail', 'wpmozo-blocks-and-addons'),
        className: "wpmozo-typography-panel",
        initialOpen: false,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_common_components_index__WEBPACK_IMPORTED_MODULE_4__.WpmozoAlignment, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Thumbnail Alignment', 'wpmozo-blocks-and-addons'),
          onChange: newValue => setAttributes({
            thumbnailAlignment: newValue
          }),
          value: attributes.thumbnailAlignment
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_common_components_index__WEBPACK_IMPORTED_MODULE_4__.WpmozoRangeSize, {
          props: props,
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Thumbnail Width', 'wpmozo-blocks-and-addons'),
          rangeSizeKey: "thumbnailWidth"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_common_components_index__WEBPACK_IMPORTED_MODULE_4__.WpmozoBorder, {
          props: props,
          BorderKey: "thumbnail",
          BorderTypes: {
            border: true,
            radius: true
          }
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Name', 'wpmozo-blocks-and-addons'),
      className: "wpmozo-typography-panel",
      initialOpen: false,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_common_components_index__WEBPACK_IMPORTED_MODULE_4__.WpmozoColorPicker, {
        props: props,
        ColorKey: "name",
        ColorTypes: [{
          key: 'Color',
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Name Color', 'wpmozo-blocks-and-addons')
        }]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.BaseControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Heading Lavel', 'wpmozo-blocks-and-addons'),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ButtonGroup, {
          children: _common_utils_js__WEBPACK_IMPORTED_MODULE_5__.headingLevelsList.map((item, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
            isPressed: item.value === attributes.nameHeadingLavel,
            onClick: () => setAttributes({
              nameHeadingLavel: item.value
            }),
            children: item.label
          }, `heading-level-${index}`))
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_common_components_index__WEBPACK_IMPORTED_MODULE_4__.WpmozoTypography, {
        TypographyKey: "name",
        props: props
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Price', 'wpmozo-blocks-and-addons'),
      className: "wpmozo-typography-panel",
      initialOpen: false,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_common_components_index__WEBPACK_IMPORTED_MODULE_4__.WpmozoColorPicker, {
        props: props,
        ColorKey: "price",
        ColorTypes: [{
          key: 'Color',
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Price Color', 'wpmozo-blocks-and-addons')
        }]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_common_components_index__WEBPACK_IMPORTED_MODULE_4__.WpmozoTypography, {
        TypographyKey: "price",
        props: props
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Currency', 'wpmozo-blocks-and-addons'),
      className: "wpmozo-typography-panel",
      initialOpen: false,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_common_components_index__WEBPACK_IMPORTED_MODULE_4__.WpmozoColorPicker, {
        props: props,
        ColorKey: "currency",
        ColorTypes: [{
          key: 'Color',
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Currency Symbol Color', 'wpmozo-blocks-and-addons')
        }]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_common_components_index__WEBPACK_IMPORTED_MODULE_4__.WpmozoTypography, {
        TypographyKey: "currency",
        props: props
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Description', 'wpmozo-blocks-and-addons'),
      className: "wpmozo-typography-panel",
      initialOpen: false,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_common_components_index__WEBPACK_IMPORTED_MODULE_4__.WpmozoColorPicker, {
        props: props,
        ColorKey: "description",
        ColorTypes: [{
          key: 'Color',
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Description Color', 'wpmozo-blocks-and-addons')
        }]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_common_components_index__WEBPACK_IMPORTED_MODULE_4__.WpmozoTypography, {
        TypographyKey: "description",
        props: props
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Period', 'wpmozo-blocks-and-addons'),
      className: "wpmozo-typography-panel",
      initialOpen: false,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_common_components_index__WEBPACK_IMPORTED_MODULE_4__.WpmozoColorPicker, {
        props: props,
        ColorKey: "period",
        ColorTypes: [{
          key: 'Color',
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Period Color', 'wpmozo-blocks-and-addons')
        }]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_common_components_index__WEBPACK_IMPORTED_MODULE_4__.WpmozoTypography, {
        TypographyKey: "period",
        props: props
      })]
    })]
  });
};

/***/ }),

/***/ "./src/blocks/price-list-item/settings/generalPanel.js":
/*!*************************************************************!*\
  !*** ./src/blocks/price-list-item/settings/generalPanel.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GeneralPanel: () => (/* binding */ GeneralPanel)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common_components_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/components/index */ "./src/common/components/index.js");
/* harmony import */ var _common_utils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/utils.js */ "./src/common/utils.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);







const GeneralPanel = ({
  attributes,
  setAttributes
}) => {
  const props = {
    attributes,
    setAttributes,
    preAttributes: {}
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Content', 'wpmozo-blocks-and-addons'),
      initialOpen: false,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Item Name', 'wpmozo-blocks-and-addons'),
        value: attributes.itemName,
        placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Item Name', 'wpmozo-blocks-and-addons'),
        onChange: newValue => setAttributes({
          itemName: newValue
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Currency', 'wpmozo-blocks-and-addons'),
        value: attributes.itemCurrency,
        placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('$', 'wpmozo-blocks-and-addons'),
        onChange: newValue => setAttributes({
          itemCurrency: newValue
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Item Price', 'wpmozo-blocks-and-addons'),
        value: attributes.itemPrice,
        placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('10', 'wpmozo-blocks-and-addons'),
        onChange: newValue => setAttributes({
          itemPrice: newValue
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Item Price Period', 'wpmozo-blocks-and-addons'),
        value: attributes.pricePeriod,
        onChange: newValue => setAttributes({
          pricePeriod: newValue
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Image/Icon as thumbnail', 'wpmozo-blocks-and-addons'),
        value: attributes.itemThumbnailOption,
        options: [{
          value: 'use_image',
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Use Image', 'wpmozo-blocks-and-addons')
        }, {
          value: 'use_icon',
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Use Icon', 'wpmozo-blocks-and-addons')
        }],
        onChange: newValue => setAttributes({
          itemThumbnailOption: newValue
        }),
        __next40pxDefaultSize: true,
        __nextHasNoMarginBottom: true
      }), 'use_icon' === attributes.itemThumbnailOption && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_common_components_index__WEBPACK_IMPORTED_MODULE_4__.WpmozoIconpicker, {
          props: props,
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Icon', 'wpmozo-blocks-and-addons'),
          iconPickerKey: "icon",
          value: attributes.icon,
          onChange: newValue => setAttributes({
            icon: newValue
          })
        })
      }), 'use_image' === attributes.itemThumbnailOption && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_common_components_index__WEBPACK_IMPORTED_MODULE_4__.WpmozoMediaUploader, {
          props: props,
          attrKye: "itemThumbnail",
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Item Thumbnail', 'wpmozo-blocks-and-addons')
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextareaControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Item description', 'wpmozo-blocks-and-addons'),
        onChange: newValue => setAttributes({
          content: newValue
        }),
        value: attributes.content
      })]
    })
  });
};

/***/ }),

/***/ "./src/blocks/price-list-item/style.js":
/*!*********************************************!*\
  !*** ./src/blocks/price-list-item/style.js ***!
  \*********************************************/
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
  const toConvertStyles = ['thumbnail', 'name', 'price', 'currency', 'description', 'period', 'item'];
  let convertedStyle = (0,_common_utils_js__WEBPACK_IMPORTED_MODULE_0__.convertInlineStyleStr)(toConvertStyles, attributes),
    parentAtts = attributes.parentAtts,
    iconFontSize = !(0,_common_utils_js__WEBPACK_IMPORTED_MODULE_0__.wpmozo_is_empty)(attributes.iconFontSize) ? attributes.iconFontSize : parentAtts.iconFontSize;
  const imageAlign = attributes.thumbnailAlignment === 'left' ? 'flex-start' : attributes.thumbnailAlignment === 'right' ? 'flex-end' : 'center';
  let styles = `#block-${clientId}.wpmozo-bna-price-list-item{`;
  styles += `
		.wpmozo-bna-price-list-item-wrap {
			align-items: ${imageAlign};
		}
		.wpmozo-bna-price-list-item-thumbnail img{
			width: ${attributes.thumbnailWidth};
			${convertedStyle.thumbnail}
		}
		.wpmozo-bna-price-list-item-name{
			color: ${attributes.nameColor};
			${convertedStyle.name}
		}
		.wpmozo-bna-price-list-item-price{
			color: ${attributes.priceColor};
			${convertedStyle.price}
		}
		.wpmozo-bna-price-list-item-currency{
			color: ${attributes.currencyColor};
			${convertedStyle.currency}
		}
		.wpmozo-bna-price-list-item-description{
			color: ${attributes.descriptionColor};
			${convertedStyle.description}
		}
		.wpmozo-bna-price-list-item-price-period{
			color: ${attributes.periodColor};
			${convertedStyle.period}
		}
		.wpmozo-bna-price-list-item-name-wrap h4.wpmozo-bna-price-list-item-name{
			margin: 0;
		}
	`;
  if ('use_icon' === attributes.itemThumbnailOption) {
    styles += `
		.wpmozo-bna-price-list-icon i{
			color: ${attributes.iconColor};
		}`;
    if (attributes.styleIcon) {
      styles += `
			.wpmozo-bna-price-list-layout2 .wpmozo-bna-price-list-item-icon{
				display: inline-block;
			}`;
    }
    if (!attributes.styleIcon || attributes.styleIcon && 'hexagon' !== attributes.iconShape) {
      styles += `
			.wpmozo-bna-price-list-icon i{
				font-size: ${iconFontSize};
				width: ${iconFontSize};
			}`;
    }

    // Icon shape style
    if (attributes.styleIcon && 'circle' === attributes.iconShape) {
      styles += `
			.wpmozo-bna-price-list-icon .icon-wrapper{
				padding: 12px;
	    		border-radius: 50%;
			    background-color: ${attributes.iconShapBackground};
			}`;
    }
    if (attributes.styleIcon && 'square' === attributes.iconShape) {
      styles += `
			.wpmozo-bna-price-list-icon .icon-wrapper{
				padding: 9px;
			    background-color: ${attributes.iconShapBackground};
			}`;
    }
    if (attributes.styleIcon && 'hexagon' === attributes.iconShape) {
      styles += `
			.wpmozo-bna-price-list-icon.hexagon{
				font-size: ${iconFontSize};
			}
			.wpmozo-bna-price-list-icon i{
				font-size: inherit !important;
			}
			.wpmozo-bna-price-list-icon.hexagon::before{
				background-color: ${attributes.iconShapBackground};
			}
			.wpmozo-bna-price-list-item-icon {
			  flex: 0 0 auto;
			}
			.wpmozo-bna-price-list-item-details {
			  flex: 1 1 0;
			  min-width: 0;
			}`;
    }
  }
  styles += `}`;
  if (!(0,_common_utils_js__WEBPACK_IMPORTED_MODULE_0__.wpmozo_is_empty)(attributes.textAlignment)) {
    styles += `#block-${clientId}.wpmozo-bna-price-list-item{
			text-align: ${attributes.textAlignment};
		}`;
  }
  if (!(0,_common_utils_js__WEBPACK_IMPORTED_MODULE_0__.wpmozo_is_empty)(attributes.itemBackground)) {
    styles += `#block-${clientId}.wpmozo-bna-price-list-item{
			background-color: ${attributes.itemBackground} !important;
		}`;
  }
  if (!(0,_common_utils_js__WEBPACK_IMPORTED_MODULE_0__.wpmozo_is_empty)(convertedStyle.item)) {
    styles += `#block-${clientId}.wpmozo-bna-price-list-item{
			${convertedStyle.item}
		}`;
  }
  return styles;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generateDynamicStyle);

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












// Export them globally for pro plugin.
if (typeof window !== 'undefined') {
  window.WPMozoBNAComponents = window.WPMozoBNAComponents || {};
  Object.assign(window.WPMozoBNAComponents, {
    WpmozoTypography: _wpmozo_typography_wpmozo_typography__WEBPACK_IMPORTED_MODULE_0__["default"],
    WpmozoColorPicker: _wpmozo_colorpicker_wpmozo_colorpicker__WEBPACK_IMPORTED_MODULE_1__["default"],
    WpmozoDimensions: _wpmozo_dimensions_wpmozo_dimensions__WEBPACK_IMPORTED_MODULE_2__["default"],
    WpmozoSize: _wpmozo_size_wpmozo_size__WEBPACK_IMPORTED_MODULE_3__["default"],
    WpmozoBorder: _wpmozo_border_wpmozo_border__WEBPACK_IMPORTED_MODULE_4__["default"],
    WpmozoMediaUploader: _wpmozo_media_uploader_wpmozo_media_uploader__WEBPACK_IMPORTED_MODULE_5__["default"],
    WpmozoIconpicker: _wpmozo_iconpicker_wpmozo_iconpicker__WEBPACK_IMPORTED_MODULE_6__["default"],
    WpmozoAlignment: _wpmozo_alignment_wpmozo_alignment__WEBPACK_IMPORTED_MODULE_7__["default"],
    WpmozoColorCombo: _wpmozo_colorcombo_wpmozo_colorcombo__WEBPACK_IMPORTED_MODULE_8__["default"],
    WpmozoRangeSize: _wpmozo_range_size_wpmozo_range_size__WEBPACK_IMPORTED_MODULE_9__["default"]
  });
}

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WpmozoTypography);

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
    if (options.border.top || options.border.bottom || options.border.left || options.border.right) {
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
const inspectorPanelTabs = ({
  showGeneral = true,
  showDesign = true,
  showAdvanced = true
} = {}) => {
  const tabs = [];
  if (showGeneral) {
    tabs.push({
      name: 'general',
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('General', 'wpmozo-blocks-and-addons'),
      className: 'wpmozo-inspector-tab-general'
    });
  }
  if (showDesign) {
    tabs.push({
      name: 'design',
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Design', 'wpmozo-blocks-and-addons'),
      className: 'wpmozo-inspector-tab-design'
    });
  }
  if (showAdvanced) {
    tabs.push({
      name: 'advanced',
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Advanced', 'wpmozo-blocks-and-addons'),
      className: 'wpmozo-inspector-tab-advanced'
    });
  }
  return tabs;
};

// Export only selected functions for Pro plugin
if (typeof window !== 'undefined') {
  window.WPMozoBNAUtils = window.WPMozoBNAUtils || {};
  Object.assign(window.WPMozoBNAUtils, {
    inspectorPanelTabs,
    convertInlineStyleStr
    // Add more functions here if needed.
  });
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
/******/ 			"blocks/price-list-item/index": 0,
/******/ 			"blocks/advanced-button/style-index": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["blocks/advanced-button/style-index"], () => (__webpack_require__("./src/blocks/price-list-item/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map