/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/testimonial-slider/block.json":
/*!**************************************************!*\
  !*** ./src/blocks/testimonial-slider/block.json ***!
  \**************************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"wpmozo/testimonial-slider","version":"0.1.0","title":"Testimonial Slider","category":"wpmozo","icon":"smiley","description":"Showcase client feedback beautifully with an interactive testimonial slider for engaging and trustworthy presentations.","example":{},"supports":{"html":false,"customClassName":false},"attributes":{"ID":{"type":"string"},"className":{"type":"string"},"layout":{"type":"string","default":"layout1"},"postsToShow":{"type":"number","default":5},"postOrder":{"type":"string","default":"desc"},"postOrderBy":{"type":"string","default":"date"},"includesCategories":{"type":"array","default":[]},"noResultText":{"type":"string","default":"The testimonials you requested could not be found. Try changing your module settings or create some new testimonials."},"showRating":{"type":"boolean","default":true},"starFontSize":{"type":"number","default":28},"starFilledColor":{"type":"string","default":"#fac917"},"starEmptyColor":{"type":"string","default":"#fac917"},"showAuthorImage":{"type":"boolean","default":true},"showDesignation":{"type":"boolean","default":true},"showCompany":{"type":"boolean","default":true},"slideEffect":{"type":"string","default":"slide"},"slidesPerView":{"type":"number","default":1},"slidesPerViewTablet":{"type":"number","default":1},"slidesPerViewMobile":{"type":"number","default":1},"slidesPerGroup":{"type":"number","default":1},"slidesPerGroupTablet":{"type":"number","default":1},"slidesPerGroupMobile":{"type":"number","default":1},"spaceBetweenSlides":{"type":"number","default":20},"spaceBetweenSlidesTablet":{"type":"number","default":20},"spaceBetweenSlidesMobile":{"type":"number","default":20},"equalHeight":{"type":"boolean","default":false},"autoHeight":{"type":"boolean","default":false},"enableLoop":{"type":"boolean","default":false},"autoplay":{"type":"boolean","default":true},"enableLinearTrans":{"type":"boolean","default":false},"autoplayDelay":{"type":"number","default":3000},"pauseOnHover":{"type":"boolean","default":true},"transDuration":{"type":"number","default":1000},"enableCoverflowShadow":{"type":"boolean","default":false},"coverflowShadowColor":{"type":"string","default":"#cccccc"},"coverflowRotate":{"type":"number","default":40},"coverflowDepth":{"type":"number","default":100},"showArrows":{"type":"boolean","default":false},"prevArrowIcon":{"type":"string","default":""},"nextArrowIcon":{"type":"string","default":""},"showArrowOnHover":{"type":"boolean","default":false},"arrowsPosition":{"type":"string","default":"inside"},"showControlDot":{"type":"boolean","default":false},"controlDotStyle":{"type":"string","default":"solid_dot"},"enableDynamicDots":{"type":"boolean","default":false},"controlDotColorActive":{"type":"string","default":"#000000"},"controlDotColorInactive":{"type":"string","default":"#cccccc"},"globalTextAlign":{"type":"string","default":"center"},"bodyColor":{"type":"string"},"bodyFontSize":{"type":"string"},"bodyLetterSpacing":{"type":"string"},"bodyDecoration":{"type":"string"},"bodyLetterCase":{"type":"string"},"bodyLineHeight":{"type":"string"},"bodyFontAppearance":{"type":"object","default":{"fontStyle":"","fontWeight":""}},"bodyFontStyle":{"type":"string"},"bodyFontWeight":{"type":"string"},"bodyHoverColor":{"type":"string"},"bodyHoverFontSize":{"type":"string"},"bodyHoverLetterSpacing":{"type":"string"},"bodyHoverDecoration":{"type":"string"},"bodyHoverLetterCase":{"type":"string"},"bodyHoverLineHeight":{"type":"string"},"bodyHoverFontAppearance":{"type":"object","default":{"fontStyle":"","fontWeight":""}},"bodyHoverFontStyle":{"type":"string"},"bodyHoverFontWeight":{"type":"string"},"authorNameColor":{"type":"string"},"authorNameFontSize":{"type":"string"},"authorNameLetterSpacing":{"type":"string"},"authorNameDecoration":{"type":"string"},"authorNameLetterCase":{"type":"string"},"authorNameLineHeight":{"type":"string"},"authorNameFontAppearance":{"type":"object","default":{"fontStyle":"","fontWeight":""}},"authorNameFontStyle":{"type":"string"},"authorNameFontWeight":{"type":"string"},"authorNameHoverColor":{"type":"string"},"authorNameHoverFontSize":{"type":"string"},"authorNameHoverLetterSpacing":{"type":"string"},"authorNameHoverDecoration":{"type":"string"},"authorNameHoverLetterCase":{"type":"string"},"authorNameHoverLineHeight":{"type":"string"},"authorNameHoverFontAppearance":{"type":"object","default":{"fontStyle":"","fontWeight":""}},"authorNameHoverFontStyle":{"type":"string"},"authorNameHoverFontWeight":{"type":"string"},"designationColor":{"type":"string"},"designationFontSize":{"type":"string"},"designationLetterSpacing":{"type":"string"},"designationDecoration":{"type":"string"},"designationLetterCase":{"type":"string"},"designationLineHeight":{"type":"string"},"designationFontAppearance":{"type":"object","default":{"fontStyle":"","fontWeight":""}},"designationFontStyle":{"type":"string"},"designationFontWeight":{"type":"string"},"designationHoverColor":{"type":"string"},"designationHoverFontSize":{"type":"string"},"designationHoverLetterSpacing":{"type":"string"},"designationHoverDecoration":{"type":"string"},"designationHoverLetterCase":{"type":"string"},"designationHoverLineHeight":{"type":"string"},"designationHoverFontAppearance":{"type":"object","default":{"fontStyle":"","fontWeight":""}},"designationHoverFontStyle":{"type":"string"},"designationHoverFontWeight":{"type":"string"},"companyNameColor":{"type":"string"},"companyNameFontSize":{"type":"string"},"companyNameLetterSpacing":{"type":"string"},"companyNameDecoration":{"type":"string"},"companyNameLetterCase":{"type":"string"},"companyNameLineHeight":{"type":"string"},"companyNameFontAppearance":{"type":"object","default":{"fontStyle":"","fontWeight":""}},"companyNameFontStyle":{"type":"string"},"companyNameFontWeight":{"type":"string"},"companyNameHoverColor":{"type":"string"},"companyNameHoverFontSize":{"type":"string"},"companyNameHoverLetterSpacing":{"type":"string"},"companyNameHoverDecoration":{"type":"string"},"companyNameHoverLetterCase":{"type":"string"},"companyNameHoverLineHeight":{"type":"string"},"companyNameHoverFontAppearance":{"type":"object","default":{"fontStyle":"","fontWeight":""}},"companyNameHoverFontStyle":{"type":"string"},"companyNameHoverFontWeight":{"type":"string"},"showOpenQuoteIcon":{"type":"boolean","default":true},"openQuoteIconSize":{"type":"number","default":42},"openQuoteIconColor":{"type":"string","default":""},"showCloseQuoteIcon":{"type":"boolean","default":false},"closeQuoteIconSize":{"type":"number","default":42},"closeQuoteIconColor":{"type":"string","default":""},"arrowpadding":{"type":"object"},"arrowIconSize":{"type":"number","default":24},"arrowColor":{"type":"string","default":""},"arrowBackground":{"type":"string","default":""},"arrowborder":{"type":"object"},"arrowborderRadius":{"type":"string"},"metaSeparatorColor":{"type":"string","default":"#dddddd"},"containerpadding":{"type":"object"},"testimonialpadding":{"type":"object"},"testimonialBackground":{"type":"string"},"testimonialBGGradient":{"type":"string"},"testimonialborder":{"type":"object"},"testimonialborderRadius":{"type":"string"},"authorImageborder":{"type":"object"},"authorImageborderRadius":{"type":"string"}},"textdomain":"wpmozo-blocks-and-addons","editorScript":"file:./index.js","style":["file:./style-index.css","wpmozo-blocks-and-addons-swiper-style","wpmozo-blocks-and-addons-swiper-wpmozo-style"],"script":["file:./script.js","wpmozo-blocks-and-addons-swiper-script"],"render":"file:./render.php"}');

/***/ }),

/***/ "./src/blocks/testimonial-slider/edit.js":
/*!***********************************************!*\
  !*** ./src/blocks/testimonial-slider/edit.js ***!
  \***********************************************/
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
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _inspector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./inspector */ "./src/blocks/testimonial-slider/inspector.js");
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/utils */ "./src/common/utils.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./style */ "./src/blocks/testimonial-slider/style.js");
/* harmony import */ var _layouts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./layouts */ "./src/blocks/testimonial-slider/layouts.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);









const Edit = props => {
  var _parseInt, _attributes$postOrder, _attributes$postOrder2, _attributes$includesC, _attributes$layout, _attributes$autoHeigh, _attributes$enableCov;
  const attributes = props.attributes;
  const setAttributes = props.setAttributes;
  const clientId = props.clientId;
  attributes.ID = clientId;
  setAttributes({
    ID: clientId
  });
  const postsToShow = (_parseInt = parseInt(attributes.postsToShow)) !== null && _parseInt !== void 0 ? _parseInt : 5;
  const postOrder = (_attributes$postOrder = attributes.postOrder) !== null && _attributes$postOrder !== void 0 ? _attributes$postOrder : 'DESC';
  const postOrderBy = (_attributes$postOrder2 = attributes.postOrderBy) !== null && _attributes$postOrder2 !== void 0 ? _attributes$postOrder2 : 'date';
  const includesCategories = (_attributes$includesC = attributes.includesCategories) !== null && _attributes$includesC !== void 0 ? _attributes$includesC : [];

  // Get the post types.
  const posts = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(select => select('core').getEntityRecords('postType', 'mozo-testimonial', {
    per_page: postsToShow,
    order: postOrder,
    orderby: postOrderBy,
    categories: includesCategories.join(','),
    // author: 1,
    _embed: true
  }), [postsToShow, postOrder, postOrderBy, includesCategories.join(',')]);

  // Get props.
  const layout = (_attributes$layout = attributes.layout) !== null && _attributes$layout !== void 0 ? _attributes$layout : 'layout1';

  // Get slides.
  let $slides = [],
    $sliderArrows = '',
    $paginationDots = '';
  if (posts && posts.length > 0) {
    // Start quote.
    const startQuoteSvg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M13 6v6h5.2v4c0 .8-.2 1.4-.5 1.7-.6.6-1.6.6-2.5.5h-.3v1.5h.5c1 0 2.3-.1 3.3-1 .6-.6 1-1.6 1-2.8V6H13zm-9 6h5.2v4c0 .8-.2 1.4-.5 1.7-.6.6-1.6.6-2.5.5h-.3v1.5h.5c1 0 2.3-.1 3.3-1 .6-.6 1-1.6 1-2.8V6H4v6z"></path></svg>';
    let openingQuote = '';
    if (attributes.showOpenQuoteIcon) {
      openingQuote = '<span class="wpmozo_testimonial_quote_icon wpmozo_testimonial_opening_quote_icon">' + startQuoteSvg + '</span>';
    }
    let closingQuote = '';
    if (attributes.showCloseQuoteIcon) {
      closingQuote = '<span class="wpmozo_testimonial_quote_icon wpmozo_testimonial_closing_quote_icon">' + startQuoteSvg + '</span>';
    }
    posts.map(post => {
      var _parseFloat;
      const rawContent = post.content?.rendered || '';
      const modifiedContent = openingQuote + rawContent + closingQuote;
      const rateNumber = (_parseFloat = parseFloat(post.author_rating)) !== null && _parseFloat !== void 0 ? _parseFloat : 5;
      let postExcerpt = '';
      if (post.content.rendered) {
        postExcerpt = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
          className: "wpmozo_testimonial_desc",
          dangerouslySetInnerHTML: {
            __html: modifiedContent
          }
        });
      }
      let authorImage = '';
      let imageUrl = '';
      let altText = '';

      // Safely check for _embedded and 'wp:featuredmedia'
      if (post._embedded && Array.isArray(post._embedded['wp:featuredmedia']) && post._embedded['wp:featuredmedia'][0]) {
        var _post$_embedded$wpFe;
        imageUrl = (_post$_embedded$wpFe = post._embedded['wp:featuredmedia'][0].source_url) !== null && _post$_embedded$wpFe !== void 0 ? _post$_embedded$wpFe : '';
        altText = post._embedded['wp:featuredmedia'][0].alt_text || '';
      }
      if (attributes.showAuthorImage && imageUrl) {
        authorImage = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
          className: "wpmozo_testimonial_author_image",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("img", {
            src: imageUrl,
            alt: altText
          })
        });
      }
      let rating = '';
      if (attributes.showRating && rateNumber > 0) {
        const fullStars = Math.floor(rateNumber);
        const hasHalfStar = rateNumber % 1 !== 0;
        const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
        rating = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
          className: "wpmozo_testimonial_rating",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("span", {
            itemProp: "reviewRating",
            itemScope: true,
            itemType: "http://schema.org/Rating",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("span", {
              className: "wpmozo_testimonial_rating_value",
              itemProp: "ratingValue",
              children: rateNumber
            }), [...Array(fullStars)].map((_, i) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("span", {
              className: "wpmozo_testimonial_star wpmozo_testimonial_filled_star"
            }, `full-${i}`)), hasHalfStar && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("span", {
              className: "wpmozo_testimonial_star wpmozo_testimonial_half_filled_star"
            }), [...Array(emptyStars)].map((_, i) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("span", {
              className: "wpmozo_testimonial_star wpmozo_testimonial_empty_star"
            }, `empty-${i}`))]
          })
        });
      }
      let authorName = '';
      if (post.author_name) {
        authorName = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
          className: "wpmozo_testimonial_author_name",
          children: post.author_name
        });
      }
      let authorDesignation = '';
      if (attributes.showDesignation && post.author_designation) {
        authorDesignation = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
          className: "wpmozo_testimonial_author_designation",
          children: post.author_designation
        });
      }
      let companyName = '';
      if (attributes.showCompany && post.author_company) {
        companyName = post.author_company;
        if (post.author_company_url) {
          companyName = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("a", {
            href: post.author_company_url,
            target: "_blank",
            rel: "nofollow",
            children: companyName
          });
        }
        companyName = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
          className: "wpmozo_testimonial_author_company",
          children: companyName
        });
      }
      const layoutArgs = {
        postExcerpt,
        rating,
        authorImage,
        authorName,
        authorDesignation,
        companyName,
        post
      };
      let $thisSlide = '';
      if ('layout2' == layout) {
        $thisSlide = (0,_layouts__WEBPACK_IMPORTED_MODULE_7__.renderTestimonialLayoutTwo)(layoutArgs);
      } else {
        $thisSlide = (0,_layouts__WEBPACK_IMPORTED_MODULE_7__.renderTestimonialLayoutOne)(layoutArgs);
      }

      // Add to the slides.
      $slides.push(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
        className: "swiper-slide wpmozo_testimonial_slide",
        children: $thisSlide
      }));
    });

    // Slider arrows.
    if (attributes.showArrows) {
      let buttonNextClass = !(0,_common_utils__WEBPACK_IMPORTED_MODULE_5__.wpmozo_is_empty)(attributes.nextArrowIcon) ? `custom-swiper-button-next swiper-button-next ${attributes.nextArrowIcon}` : 'swiper-button-next',
        buttonPrevClass = !(0,_common_utils__WEBPACK_IMPORTED_MODULE_5__.wpmozo_is_empty)(attributes.prevArrowIcon) ? `custom-swiper-button-prev swiper-button-prev ${attributes.prevArrowIcon}` : 'swiper-button-prev';
      $sliderArrows = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
        className: `wpmozo_swiper_navigation wpmozo_arrows_${attributes.arrowsPosition}`,
        "data-arrows_desktop": attributes.arrowsPosition,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
          className: buttonNextClass
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
          className: buttonPrevClass
        })]
      });
    }

    // Slider control dots.
    if (attributes.showControlDot) {
      let paginationClass = '';
      if (attributes.enableDynamicDots && ('solid_dot' === attributes.controlDotStyle || 'transparent_dot' === attributes.controlDotStyle || 'square_dot' === attributes.controlDotStyle)) {
        paginationClass = attributes.enableDynamicDots ? ' swiper-pagination-bullets-dynamic' : '';
      }
      $paginationDots = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
        className: "wpmozo-bna-testimonial-slider-pagination",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
          className: `swiper-pagination ${attributes.controlDotStyle}${paginationClass}`
        })
      });
    }
  }

  // This need because of swiper init.
  const selectBlock = () => {
    if (wp && wp.data && wp.data.dispatch) {
      wp.data.dispatch('core/block-editor').selectBlock(clientId);
    }
  };
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    const event = new CustomEvent('WPMozoTestimonialPropsChanged');
    window.dispatchEvent(event);
    const iframe = document.querySelector('iframe[name="editor-canvas"]');
    if (iframe?.contentWindow) {
      iframe.contentWindow.dispatchEvent(event);
    }
  }, [props]);

  // Equal height testimonial class.
  const equalHeightClass = attributes.equalHeight ? ' wpmozo_equal_testimonial_height' : '';
  let autoHeight = (_attributes$autoHeigh = attributes.autoHeight) !== null && _attributes$autoHeigh !== void 0 ? _attributes$autoHeigh : 'false';
  autoHeight = attributes.equalHeight ? 'false' : autoHeight;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_inspector__WEBPACK_IMPORTED_MODULE_4__["default"], {
      attributes: attributes,
      setAttributes: setAttributes
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("style", {
      children: (0,_style__WEBPACK_IMPORTED_MODULE_6__["default"])({
        attributes,
        clientId
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
      ...(0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)(),
      onClick: selectBlock,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
        className: "wpmozo_swiper_wrapper" + equalHeightClass,
        "data-clientId": clientId,
        "data-slide_effect": attributes.slideEffect || 'slide',
        "data-slides_per_view": attributes.slidesPerView || '1',
        "data-slides_per_view_tablet": attributes.slidesPerViewTablet || '1',
        "data-slides_per_view_mobile": attributes.slidesPerViewMobile || '1',
        "data-slides_per_group": attributes.slidesPerGroup || '1',
        "data-slides_per_group_tablet": attributes.slidesPerGroupTablet || '1',
        "data-slides_per_group_mobile": attributes.slidesPerGroupMobile || '1',
        "data-space_between_slides": attributes.spaceBetweenSlides || '20',
        "data-space_between_slides_tablet": attributes.spaceBetweenSlidesTablet || '20',
        "data-space_between_slides_mobile": attributes.spaceBetweenSlidesMobile || '20',
        "data-enable_coverflow_shadow": (_attributes$enableCov = attributes.enableCoverflowShadow) !== null && _attributes$enableCov !== void 0 ? _attributes$enableCov : 'false',
        "data-enable_loop": attributes.enableLoop || 'false',
        "data-auto_height": autoHeight || 'false',
        "data-autoplay": attributes.autoplay || 'true',
        "data-autoplay_delay": attributes.autoplayDelay || '3000',
        "data-pause_on_hover": attributes.pauseOnHover || 'true',
        "data-enable_linear_trans": attributes.enableLinearTrans || 'false',
        "data-trans_duration": attributes.transDuration || '1000',
        "data-show_arrows": attributes.showArrows || 'false',
        "data-show_control_dot": attributes.showControlDot || 'false',
        "data-control_dot_style": attributes.controlDotStyle || 'solid_dot',
        "data-enable_dynamic_dots": attributes.enableDynamicDots || 'false',
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
          className: "wpmozo_testimonial_layout wpmozo_swiper_inner_wrap " + layout,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
            className: "swiper swiper-container",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
              className: "swiper-wrapper",
              children: $slides
            })
          }), $sliderArrows, $paginationDots]
        })
      })
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Edit);

/***/ }),

/***/ "./src/blocks/testimonial-slider/icon.js":
/*!***********************************************!*\
  !*** ./src/blocks/testimonial-slider/icon.js ***!
  \***********************************************/
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
    d: "M490.667 115.2h-19.2l14.933-32c4.267-8.533-2.133-17.067-10.667-17.067h-36.267c-4.267 0-8.533 2.133-10.667 6.4l-23.467 46.933c-2.133 2.133-2.133 4.267-2.133 6.4v72.533c0 6.4 6.4 10.667 10.667 10.667h76.8c6.4 0 10.667-6.4 10.667-10.667v-72.533c0-4.267-4.267-10.667-10.667-10.667zM480 187.733h-51.2v-59.733l19.2-38.4h10.667l-14.933 32c-4.267 8.533 2.133 17.067 10.667 17.067h25.6c0-2.133 0 49.067 0 49.067z"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    fill: "#000",
    d: "M605.867 115.2h-19.2l14.933-32c4.267-8.533-2.133-17.067-10.667-17.067h-36.267c-4.267 0-8.533 2.133-10.667 6.4l-23.467 46.933c-2.133 2.133-2.133 4.267-2.133 6.4v72.533c0 6.4 6.4 10.667 10.667 10.667h72.533c6.4 0 10.667-6.4 10.667-10.667v-72.533c4.267-4.267 0-10.667-6.4-10.667zM595.2 187.733h-51.2v-59.733l19.2-38.4h12.8l-14.933 32c-4.267 8.533 2.133 17.067 10.667 17.067h25.6v49.067z"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    fill: "#000",
    d: "M864 377.6v234.667c0 117.333-96 213.333-213.333 213.333h-23.467v108.8c0 17.067-21.333 27.733-34.133 17.067l-219.733-125.867c-117.333 0-213.333-96-213.333-213.333v-234.667c0-117.333 96-213.333 213.333-213.333h21.333v42.667h-21.333c-93.867 0-170.667 76.8-170.667 170.667v234.667c0 93.867 76.8 170.667 170.667 170.667h6.4c4.267 0 8.533 2.133 12.8 4.267l70.4 38.4 119.467 66.133v-87.467c0-12.8 8.533-21.333 21.333-21.333h44.8c93.867 0 170.667-76.8 170.667-170.667v-234.667c0-93.867-76.8-170.667-170.667-170.667h-21.333v-42.667h21.333c119.467 0 215.467 96 215.467 213.333z"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    fill: "#000",
    d: "M704 494.933h-384c-12.8 0-21.333-8.533-21.333-21.333v0c0-12.8 8.533-21.333 21.333-21.333h384c12.8 0 21.333 8.533 21.333 21.333v0c0 12.8-8.533 21.333-21.333 21.333z"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    fill: "#000",
    d: "M650.667 597.333h-277.333c-12.8 0-21.333-8.533-21.333-21.333v0c0-12.8 8.533-21.333 21.333-21.333h277.333c12.8 0 21.333 8.533 21.333 21.333v0c0 12.8-8.533 21.333-21.333 21.333z"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    fill: "#000",
    d: "M597.333 697.6h-170.667c-12.8 0-21.333-8.533-21.333-21.333v0c0-12.8 8.533-21.333 21.333-21.333h170.667c12.8 0 21.333 8.533 21.333 21.333v0c0 12.8-8.533 21.333-21.333 21.333z"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    fill: "#000",
    d: "M512 305.067c17.067 0 32 14.933 32 32 0 4.267-2.133 8.533-2.133 12.8-4.267 10.667-14.933 19.2-27.733 19.2s-23.467-6.4-27.733-19.2c-2.133-2.133-2.133-8.533-2.133-12.8-4.267-17.067 10.667-32 27.733-32zM512 273.067c-34.133 0-61.867 27.733-61.867 61.867 0 8.533 2.133 19.2 6.4 25.6 8.533 21.333 32 36.267 55.467 36.267s46.933-14.933 55.467-36.267c4.267-8.533 6.4-17.067 6.4-25.6 0-32-27.733-61.867-61.867-61.867v0z"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    fill: "#000",
    d: "M896 612.267v0c-6.4-6.4-6.4-19.2 0-25.6l72.533-72.533-70.4-76.8c-6.4-6.4-6.4-19.2 0-25.6v0c6.4-6.4 19.2-6.4 25.6 0l78.933 78.933c14.933 12.8 14.933 32 0 46.933l-78.933 78.933c-8.533 6.4-19.2 6.4-27.733-4.267z"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    fill: "#000",
    d: "M100.267 612.267l-78.933-76.8c-14.933-14.933-14.933-34.133 0-46.933l78.933-78.933c6.4-6.4 19.2-6.4 25.6 0v0c6.4 6.4 6.4 19.2 0 25.6l-72.533 76.8 74.667 72.533c6.4 6.4 6.4 19.2 0 25.6v0c-8.533 12.8-19.2 12.8-27.733 2.133z"
  })]
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Icon);

/***/ }),

/***/ "./src/blocks/testimonial-slider/index.js":
/*!************************************************!*\
  !*** ./src/blocks/testimonial-slider/index.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block.json */ "./src/blocks/testimonial-slider/block.json");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/blocks/testimonial-slider/edit.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icon */ "./src/blocks/testimonial-slider/icon.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/testimonial-slider/style.scss");




/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing  keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */

(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_1__.name, {
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  icon: _icon__WEBPACK_IMPORTED_MODULE_3__["default"],
  save: () => null
});

/***/ }),

/***/ "./src/blocks/testimonial-slider/inspector.js":
/*!****************************************************!*\
  !*** ./src/blocks/testimonial-slider/inspector.js ***!
  \****************************************************/
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
/* harmony import */ var _settings_generalPanel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./settings/generalPanel */ "./src/blocks/testimonial-slider/settings/generalPanel.js");
/* harmony import */ var _settings_designPanel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./settings/designPanel */ "./src/blocks/testimonial-slider/settings/designPanel.js");
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

/***/ "./src/blocks/testimonial-slider/layouts.js":
/*!**************************************************!*\
  !*** ./src/blocks/testimonial-slider/layouts.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderTestimonialLayoutOne: () => (/* binding */ renderTestimonialLayoutOne),
/* harmony export */   renderTestimonialLayoutTwo: () => (/* binding */ renderTestimonialLayoutTwo)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

// Render layout one.
const renderTestimonialLayoutOne = ({
  postExcerpt,
  rating,
  authorImage,
  authorName,
  authorDesignation,
  companyName,
  post
}) => {
  const classLists = post.class_list ? post.class_list.join(' ') : '';
  let authorData = '';
  if ('' !== authorName || '' !== authorDesignation || '' !== companyName) {
    authorData = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: "wpmozo_testimonial_author_details",
      children: [authorName, authorDesignation, companyName]
    });
  }
  let $meta = '';
  if ('' !== authorImage || '' !== authorData) {
    $meta = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: "wpmozo_testimonial_meta",
      children: [authorImage, authorData]
    });
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    id: 'womozo_single_testimonial_' + post.id,
    className: "wpmozo_single_testimonial_card " + classLists,
    children: [postExcerpt, rating, $meta]
  });
};

// Render layout two.
const renderTestimonialLayoutTwo = ({
  postExcerpt,
  rating,
  authorImage,
  authorName,
  authorDesignation,
  companyName,
  post
}) => {
  const classLists = post.class_list ? post.class_list.join(' ') : '';
  let $meta = '';
  if ('' !== authorName || '' !== authorDesignation || '' !== companyName) {
    $meta = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
      className: "wpmozo_testimonial_meta",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "wpmozo_testimonial_author_details",
        children: [authorName, authorDesignation, companyName]
      })
    });
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    id: 'womozo_single_testimonial_' + post.id,
    className: "wpmozo_single_testimonial_card " + classLists,
    children: [authorImage, postExcerpt, rating, $meta]
  });
};

/***/ }),

/***/ "./src/blocks/testimonial-slider/settings/designPanel.js":
/*!***************************************************************!*\
  !*** ./src/blocks/testimonial-slider/settings/designPanel.js ***!
  \***************************************************************/
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
/* harmony import */ var _common_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/components */ "./src/common/components/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);
// inspector.js






const DesignPanel = ({
  attributes,
  setAttributes
}) => {
  const props = {
    attributes,
    setAttributes,
    preAttributes: {}
  };
  const [quoteIconTab, setQuoteIconTab] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)('opening');
  const [bodyTextTab, setBodyTextTab] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)('normal');
  const [authorNameTab, setAuthorNameTab] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)('normal');
  const [designationTab, setDesignationTab] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)('normal');
  const [companyNameTab, setCompanyNameTab] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)('normal');
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Alignment', 'wpmozo-blocks-and-addons'),
      initialOpen: true,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_common_components__WEBPACK_IMPORTED_MODULE_4__.WpmozoAlignment, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Text Alignment', 'wpmozo-blocks-and-addons'),
        value: attributes.globalTextAlign,
        showJustify: true,
        onChange: newValue => setAttributes({
          globalTextAlign: newValue
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Body', 'wpmozo-blocks-and-addons'),
      className: "wpmozo-typography-panel",
      initialOpen: false,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.BaseControl, {
        className: "wpmozo-button-tabs-wrap",
        __nextHasNoMarginBottom: true,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ButtonGroup, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
            className: "wpmozo-button-tabs-btn",
            isPressed: 'normal' === bodyTextTab ? true : false,
            onClick: () => setBodyTextTab('normal'),
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Normal', 'wpmozo-blocks-and-addons')
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
            className: "wpmozo-button-tabs-btn",
            isPressed: 'hover' === bodyTextTab ? true : false,
            onClick: () => setBodyTextTab('hover'),
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Hover', 'wpmozo-blocks-and-addons')
          })]
        }), 'normal' === bodyTextTab && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_common_components__WEBPACK_IMPORTED_MODULE_4__.WpmozoColorPicker, {
            ColorKey: "body",
            props: props,
            ColorTypes: [{
              key: 'Color',
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Body Color', 'wpmozo-blocks-and-addons')
            }]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_common_components__WEBPACK_IMPORTED_MODULE_4__.WpmozoTypography, {
            TypographyKey: "body",
            props: props
          })]
        }), 'hover' === bodyTextTab && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_common_components__WEBPACK_IMPORTED_MODULE_4__.WpmozoColorPicker, {
            ColorKey: "bodyHover",
            props: props,
            ColorTypes: [{
              key: 'Color',
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Body Color', 'wpmozo-blocks-and-addons')
            }]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_common_components__WEBPACK_IMPORTED_MODULE_4__.WpmozoTypography, {
            TypographyKey: "bodyHover",
            props: props
          })]
        })]
      })
    }), attributes.showAuthorImage && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Author Image', 'wpmozo-blocks-and-addons'),
      className: "wpmozo-typography-panel",
      initialOpen: false,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_common_components__WEBPACK_IMPORTED_MODULE_4__.WpmozoBorder, {
        props: props,
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Image Border', 'wpmozo-blocks-and-addons'),
        BorderKey: "authorImage",
        BorderTypes: {
          border: true,
          radius: true
        }
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Author Name', 'wpmozo-blocks-and-addons'),
      className: "wpmozo-typography-panel",
      initialOpen: false,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.BaseControl, {
        className: "wpmozo-button-tabs-wrap",
        __nextHasNoMarginBottom: true,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ButtonGroup, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
            className: "wpmozo-button-tabs-btn",
            isPressed: 'normal' === authorNameTab ? true : false,
            onClick: () => setAuthorNameTab('normal'),
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Normal', 'wpmozo-blocks-and-addons')
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
            className: "wpmozo-button-tabs-btn",
            isPressed: 'hover' === authorNameTab ? true : false,
            onClick: () => setAuthorNameTab('hover'),
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Hover', 'wpmozo-blocks-and-addons')
          })]
        }), 'normal' === authorNameTab && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_common_components__WEBPACK_IMPORTED_MODULE_4__.WpmozoColorPicker, {
            ColorKey: "authorName",
            props: props,
            ColorTypes: [{
              key: 'Color',
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Author Name Color', 'wpmozo-blocks-and-addons')
            }]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_common_components__WEBPACK_IMPORTED_MODULE_4__.WpmozoTypography, {
            TypographyKey: "authorName",
            props: props
          })]
        }), 'hover' === authorNameTab && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_common_components__WEBPACK_IMPORTED_MODULE_4__.WpmozoColorPicker, {
            ColorKey: "authorNameHover",
            props: props,
            ColorTypes: [{
              key: 'Color',
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Author Name Color', 'wpmozo-blocks-and-addons')
            }]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_common_components__WEBPACK_IMPORTED_MODULE_4__.WpmozoTypography, {
            TypographyKey: "authorNameHover",
            props: props
          })]
        })]
      })
    }), attributes.showDesignation && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Designation', 'wpmozo-blocks-and-addons'),
      className: "wpmozo-typography-panel",
      initialOpen: false,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.BaseControl, {
        className: "wpmozo-button-tabs-wrap",
        __nextHasNoMarginBottom: true,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ButtonGroup, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
            className: "wpmozo-button-tabs-btn",
            isPressed: 'normal' === designationTab ? true : false,
            onClick: () => setDesignationTab('normal'),
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Normal', 'wpmozo-blocks-and-addons')
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
            className: "wpmozo-button-tabs-btn",
            isPressed: 'hover' === designationTab ? true : false,
            onClick: () => setDesignationTab('hover'),
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Hover', 'wpmozo-blocks-and-addons')
          })]
        }), 'normal' === designationTab && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_common_components__WEBPACK_IMPORTED_MODULE_4__.WpmozoColorPicker, {
            ColorKey: "designation",
            props: props,
            ColorTypes: [{
              key: 'Color',
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Designation Color', 'wpmozo-blocks-and-addons')
            }]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_common_components__WEBPACK_IMPORTED_MODULE_4__.WpmozoTypography, {
            TypographyKey: "designation",
            props: props
          })]
        }), 'hover' === designationTab && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_common_components__WEBPACK_IMPORTED_MODULE_4__.WpmozoColorPicker, {
            ColorKey: "designationHover",
            props: props,
            ColorTypes: [{
              key: 'Color',
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Designation Color', 'wpmozo-blocks-and-addons')
            }]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_common_components__WEBPACK_IMPORTED_MODULE_4__.WpmozoTypography, {
            TypographyKey: "designationHover",
            props: props
          })]
        })]
      })
    }), attributes.showCompany && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Company Name', 'wpmozo-blocks-and-addons'),
      className: "wpmozo-typography-panel",
      initialOpen: false,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.BaseControl, {
        className: "wpmozo-button-tabs-wrap",
        __nextHasNoMarginBottom: true,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ButtonGroup, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
            className: "wpmozo-button-tabs-btn",
            isPressed: 'normal' === companyNameTab ? true : false,
            onClick: () => setCompanyNameTab('normal'),
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Normal', 'wpmozo-blocks-and-addons')
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
            className: "wpmozo-button-tabs-btn",
            isPressed: 'hover' === companyNameTab ? true : false,
            onClick: () => setCompanyNameTab('hover'),
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Hover', 'wpmozo-blocks-and-addons')
          })]
        }), 'normal' === companyNameTab && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_common_components__WEBPACK_IMPORTED_MODULE_4__.WpmozoColorPicker, {
            ColorKey: "companyName",
            props: props,
            ColorTypes: [{
              key: 'Color',
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Company Name Color', 'wpmozo-blocks-and-addons')
            }]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_common_components__WEBPACK_IMPORTED_MODULE_4__.WpmozoTypography, {
            TypographyKey: "companyName",
            props: props
          })]
        }), 'hover' === companyNameTab && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_common_components__WEBPACK_IMPORTED_MODULE_4__.WpmozoColorPicker, {
            ColorKey: "companyNameHover",
            props: props,
            ColorTypes: [{
              key: 'Color',
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Designation Color', 'wpmozo-blocks-and-addons')
            }]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_common_components__WEBPACK_IMPORTED_MODULE_4__.WpmozoTypography, {
            TypographyKey: "companyNameHover",
            props: props
          })]
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Star Rating', 'wpmozo-blocks-and-addons'),
      className: "wpmozo-typography-panel",
      initialOpen: false,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Star Font Size', 'wpmozo-blocks-and-addons'),
        value: attributes.starFontSize,
        onChange: newValue => setAttributes({
          starFontSize: newValue
        }),
        min: 10,
        max: 100,
        step: 1
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_common_components__WEBPACK_IMPORTED_MODULE_4__.WpmozoColorPicker, {
        props: props,
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Star Color', 'wpmozo-blocks-and-addons'),
        ColorKey: "star",
        ColorTypes: [{
          key: 'FilledColor',
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Star Filled Color', 'wpmozo-blocks-and-addons')
        }, {
          key: 'EmptyColor',
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Star Empty Color', 'wpmozo-blocks-and-addons')
        }]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Quote Icon', 'wpmozo-blocks-and-addons'),
      className: "wpmozo-typography-panel",
      initialOpen: false,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.BaseControl, {
        className: "wpmozo-color-combo-wrap",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ButtonGroup, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
            className: "wpmozo-color-combo-type",
            isPressed: 'opening' === quoteIconTab ? true : false,
            onClick: () => setQuoteIconTab('opening'),
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Opening', 'wpmozo-blocks-and-addons')
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
            className: "wpmozo-color-combo-type",
            isPressed: 'closing' === quoteIconTab ? true : false,
            onClick: () => setQuoteIconTab('closing'),
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Closing', 'wpmozo-blocks-and-addons')
          })]
        }), 'opening' === quoteIconTab && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Show Opening Quote Icon', 'wpmozo-blocks-and-addons'),
            checked: attributes.showOpenQuoteIcon,
            onChange: newValue => setAttributes({
              showOpenQuoteIcon: newValue
            })
          }), attributes.showOpenQuoteIcon && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Quote Icon Size', 'wpmozo-blocks-and-addons'),
              value: attributes.openQuoteIconSize,
              onChange: newValue => setAttributes({
                openQuoteIconSize: newValue
              }),
              min: 1,
              max: 350,
              step: 1
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_common_components__WEBPACK_IMPORTED_MODULE_4__.WpmozoColorPicker, {
              ColorKey: "openQuoteIcon",
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Quote Icon Color', 'wpmozo-blocks-and-addons'),
              props: props,
              ColorTypes: [{
                key: 'Color',
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Quote Icon Color', 'wpmozo-blocks-and-addons')
              }]
            })]
          })]
        }), 'closing' === quoteIconTab && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Show Closing Quote Icon', 'wpmozo-blocks-and-addons'),
            checked: attributes.showCloseQuoteIcon,
            onChange: newValue => setAttributes({
              showCloseQuoteIcon: newValue
            })
          }), attributes.showCloseQuoteIcon && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Quote Icon Size', 'wpmozo-blocks-and-addons'),
              value: attributes.closeQuoteIconSize,
              onChange: newValue => setAttributes({
                closeQuoteIconSize: newValue
              }),
              min: 1,
              max: 350,
              step: 1
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_common_components__WEBPACK_IMPORTED_MODULE_4__.WpmozoColorPicker, {
              ColorKey: "closeQuoteIcon",
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Quote Icon Color', 'wpmozo-blocks-and-addons'),
              props: props,
              ColorTypes: [{
                key: 'Color',
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Quote Icon Color', 'wpmozo-blocks-and-addons')
              }]
            })]
          })]
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Slider', 'wpmozo-blocks-and-addons'),
      className: "wpmozo-typography-panel",
      initialOpen: false,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_common_components__WEBPACK_IMPORTED_MODULE_4__.WpmozoDimensions, {
        props: props,
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Arrows Dimensions', 'wpmozo-blocks-and-addons'),
        DimensionKey: "arrow",
        DimensionsTypes: {
          padding: true
        }
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Arrow Font Size', 'wpmozo-blocks-and-addons'),
        value: attributes.arrowIconSize,
        onChange: newValue => setAttributes({
          arrowIconSize: newValue
        }),
        min: 10,
        max: 100,
        step: 1
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_common_components__WEBPACK_IMPORTED_MODULE_4__.WpmozoColorPicker, {
        props: props,
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Arrows Color', 'wpmozo-blocks-and-addons'),
        ColorKey: "arrow",
        ColorTypes: [{
          key: 'Color',
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Arrow Color', 'wpmozo-blocks-and-addons')
        }, {
          key: 'Background',
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Arrow Background Color', 'wpmozo-blocks-and-addons')
        }]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_common_components__WEBPACK_IMPORTED_MODULE_4__.WpmozoBorder, {
        props: props,
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Arrows Border', 'wpmozo-blocks-and-addons'),
        BorderKey: "arrow",
        BorderTypes: {
          border: true,
          radius: true
        }
      }), attributes.showControlDot && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_common_components__WEBPACK_IMPORTED_MODULE_4__.WpmozoColorPicker, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Control Dot Color', 'wpmozo-blocks-and-addons'),
          ColorKey: "controlDot",
          props: props,
          ColorTypes: [{
            key: 'ColorActive',
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Active Dot Color', 'wpmozo-blocks-and-addons')
          }, {
            key: 'ColorInactive',
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Inactive Dot Color', 'wpmozo-blocks-and-addons')
          }]
        })
      })]
    }), 'layout1' === attributes.layout && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Meta', 'wpmozo-blocks-and-addons'),
      className: "wpmozo-typography-panel",
      initialOpen: false,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_common_components__WEBPACK_IMPORTED_MODULE_4__.WpmozoColorPicker, {
        props: props,
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Meta Separator', 'wpmozo-blocks-and-addons'),
        ColorKey: "metaSeparator",
        ColorTypes: [{
          key: 'Color',
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Select Color', 'wpmozo-blocks-and-addons')
        }]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Testimonial', 'wpmozo-blocks-and-addons'),
      className: "wpmozo-typography-panel",
      initialOpen: false,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.__experimentalColorGradientControl, {
        colors: [],
        gradients: [],
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Background Color', 'wpmozo-blocks-and-addons'),
        colorValue: attributes.testimonialBackground,
        gradientValue: attributes.testimonialBGGradient,
        onColorChange: newValue => setAttributes({
          testimonialBackground: newValue
        }),
        onGradientChange: newValue => setAttributes({
          testimonialBGGradient: newValue
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_common_components__WEBPACK_IMPORTED_MODULE_4__.WpmozoDimensions, {
        props: props,
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Testimonial Dimensions', 'wpmozo-blocks-and-addons'),
        DimensionKey: "testimonial",
        DimensionsTypes: {
          padding: true
        }
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_common_components__WEBPACK_IMPORTED_MODULE_4__.WpmozoBorder, {
        props: props,
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Testimonial Border', 'wpmozo-blocks-and-addons'),
        BorderKey: "testimonial",
        BorderTypes: {
          border: true,
          radius: true
        }
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Slider Container', 'wpmozo-blocks-and-addons'),
      className: "wpmozo-typography-panel",
      initialOpen: false,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_common_components__WEBPACK_IMPORTED_MODULE_4__.WpmozoDimensions, {
        props: props,
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Container Dimensions', 'wpmozo-blocks-and-addons'),
        DimensionKey: "container",
        DimensionsTypes: {
          padding: true
        }
      })
    })]
  });
};

/***/ }),

/***/ "./src/blocks/testimonial-slider/settings/generalPanel.js":
/*!****************************************************************!*\
  !*** ./src/blocks/testimonial-slider/settings/generalPanel.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GeneralPanel: () => (/* binding */ GeneralPanel)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _common_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/components */ "./src/common/components/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);
// inspector.js







const GeneralPanel = ({
  attributes,
  setAttributes
}) => {
  const props = {
    attributes,
    setAttributes,
    preAttributes: {}
  };

  // Get the terms.
  const terms = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useSelect)(select => select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_3__.store).getEntityRecords('taxonomy', 'mozo-testimonial-category', {
    per_page: -1
  }), []);
  const options = terms?.map(term => ({
    label: term.name,
    value: term.id
  })) || [];
  const [deviceType, setDeviceType] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)('tablet');
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Content', 'wpmozo-blocks-and-addons'),
      initialOpen: true,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Testimonial Layout', 'wpmozo-blocks-and-addons'),
        value: attributes.layout,
        options: [{
          value: 'layout1',
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Layout 1', 'wpmozo-blocks-and-addons')
        }, {
          value: 'layout2',
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Layout 2', 'wpmozo-blocks-and-addons')
        }],
        onChange: newValue => setAttributes({
          layout: newValue
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Number of Testimonials', 'wpmozo-blocks-and-addons'),
        value: attributes.postsToShow,
        onChange: newValue => setAttributes({
          postsToShow: newValue
        }),
        min: 1,
        max: 50,
        step: 1
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Order', 'wpmozo-blocks-and-addons'),
        value: attributes.postOrder,
        options: [{
          value: 'desc',
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('DESC', 'wpmozo-blocks-and-addons')
        }, {
          value: 'asc',
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('ASC', 'wpmozo-blocks-and-addons')
        }],
        onChange: newValue => setAttributes({
          postOrder: newValue
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Order by', 'wpmozo-blocks-and-addons'),
        value: attributes.postOrderBy,
        options: [{
          value: 'date',
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Date', 'wpmozo-blocks-and-addons')
        }, {
          value: 'modified',
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Modified Date', 'wpmozo-blocks-and-addons')
        }, {
          value: 'title',
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Title', 'wpmozo-blocks-and-addons')
        }, {
          value: 'name',
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Slug', 'wpmozo-blocks-and-addons')
        }, {
          value: 'ID',
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('ID', 'wpmozo-blocks-and-addons')
        }, {
          value: 'rand',
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Random', 'wpmozo-blocks-and-addons')
        }, {
          value: 'none',
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('None', 'wpmozo-blocks-and-addons')
        }],
        onChange: newValue => setAttributes({
          postOrderBy: newValue
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
        multiple: true,
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Includes Categories', 'wpmozo-blocks-and-addons'),
        value: attributes.includesCategories,
        options: options,
        onChange: newValue => setAttributes({
          includesCategories: newValue
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('No Result Text', 'wpmozo-blocks-and-addons'),
        value: attributes.noResultText,
        onChange: newValue => setAttributes({
          noResultText: newValue
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Display', 'wpmozo-blocks-and-addons'),
      initialOpen: false,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Show Rating', 'wpmozo-blocks-and-addons'),
        checked: attributes.showRating,
        onChange: newValue => setAttributes({
          showRating: newValue
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Show Author Image', 'wpmozo-blocks-and-addons'),
        checked: attributes.showAuthorImage,
        onChange: newValue => setAttributes({
          showAuthorImage: newValue
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Show Designation', 'wpmozo-blocks-and-addons'),
        checked: attributes.showDesignation,
        onChange: newValue => setAttributes({
          showDesignation: newValue
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Show Company Name', 'wpmozo-blocks-and-addons'),
        checked: attributes.showCompany,
        onChange: newValue => setAttributes({
          showCompany: newValue
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Slider', 'wpmozo-blocks-and-addons'),
      className: "wpmozo-typography-panel",
      initialOpen: false,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Slide Effect', 'wpmozo-blocks-and-addons'),
        value: attributes.slideEffect,
        options: [{
          value: 'slide',
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Slide', 'wpmozo-blocks-and-addons')
        }, {
          value: 'cube',
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Cube', 'wpmozo-blocks-and-addons')
        }, {
          value: 'coverflow',
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Coverflow', 'wpmozo-blocks-and-addons')
        }, {
          value: 'flip',
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Flip', 'wpmozo-blocks-and-addons')
        }, {
          value: 'fade',
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Fade', 'wpmozo-blocks-and-addons')
        }],
        onChange: newValue => setAttributes({
          slideEffect: newValue
        })
      }), ('slide' === attributes.slideEffect || 'coverflow' === attributes.slideEffect) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Number of Testimonials Per View', 'wpmozo-blocks-and-addons'),
          value: attributes.slidesPerView,
          options: [{
            value: 1,
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('1', 'wpmozo-blocks-and-addons')
          }, {
            value: 2,
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('2', 'wpmozo-blocks-and-addons')
          }, {
            value: 3,
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('3', 'wpmozo-blocks-and-addons')
          }, {
            value: 4,
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('4', 'wpmozo-blocks-and-addons')
          }, {
            value: 5,
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('5', 'wpmozo-blocks-and-addons')
          }, {
            value: 6,
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('6', 'wpmozo-blocks-and-addons')
          }, {
            value: 7,
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('7', 'wpmozo-blocks-and-addons')
          }, {
            value: 8,
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('8', 'wpmozo-blocks-and-addons')
          }, {
            value: 9,
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('9', 'wpmozo-blocks-and-addons')
          }, {
            value: 10,
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('10', 'wpmozo-blocks-and-addons')
          }],
          onChange: newValue => setAttributes({
            slidesPerView: parseInt(newValue)
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Number of Slides Per Group', 'wpmozo-blocks-and-addons'),
          value: attributes.slidesPerGroup,
          options: [{
            value: 1,
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('1', 'wpmozo-blocks-and-addons')
          }, {
            value: 2,
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('2', 'wpmozo-blocks-and-addons')
          }, {
            value: 3,
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('3', 'wpmozo-blocks-and-addons')
          }, {
            value: 4,
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('4', 'wpmozo-blocks-and-addons')
          }, {
            value: 5,
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('5', 'wpmozo-blocks-and-addons')
          }, {
            value: 6,
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('6', 'wpmozo-blocks-and-addons')
          }, {
            value: 7,
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('7', 'wpmozo-blocks-and-addons')
          }, {
            value: 8,
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('8', 'wpmozo-blocks-and-addons')
          }, {
            value: 9,
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('9', 'wpmozo-blocks-and-addons')
          }, {
            value: 10,
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('10', 'wpmozo-blocks-and-addons')
          }],
          onChange: newValue => setAttributes({
            slidesPerGroup: parseInt(newValue)
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Space Between Slides', 'wpmozo-blocks-and-addons'),
          value: attributes.spaceBetweenSlides,
          onChange: newValue => setAttributes({
            spaceBetweenSlides: newValue
          }),
          min: 1,
          max: 100,
          step: 1
        })]
      }), 'coverflow' === attributes.slideEffect && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Enable Slide Shadow', 'wpmozo-blocks-and-addons'),
          checked: attributes.enableCoverflowShadow,
          onChange: newValue => setAttributes({
            enableCoverflowShadow: newValue
          })
        }), attributes.enableCoverflowShadow && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_common_components__WEBPACK_IMPORTED_MODULE_5__.WpmozoColorPicker, {
          ColorKey: "coverflowShadow",
          props: props,
          ColorTypes: [{
            key: 'Color',
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Shadow Color', 'wpmozo-blocks-and-addons')
          }]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Coverflow Rotate', 'wpmozo-blocks-and-addons'),
          value: attributes.coverflowRotate,
          onChange: newValue => setAttributes({
            coverflowRotate: newValue
          }),
          min: 1,
          max: 360,
          step: 1
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Coverflow Depth', 'wpmozo-blocks-and-addons'),
          value: attributes.coverflowDepth,
          onChange: newValue => setAttributes({
            coverflowDepth: newValue
          }),
          min: 1,
          max: 1000,
          step: 1
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Equalize Testimonials Height', 'wpmozo-blocks-and-addons'),
        checked: attributes.equalHeight,
        onChange: newValue => setAttributes({
          equalHeight: newValue
        })
      }), false === attributes.equalHeight && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Auto Height Slider', 'wpmozo-blocks-and-addons'),
        checked: attributes.autoHeight,
        onChange: newValue => setAttributes({
          autoHeight: newValue
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Enable Loop', 'wpmozo-blocks-and-addons'),
        checked: attributes.enableLoop,
        onChange: newValue => setAttributes({
          enableLoop: newValue
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Autoplay', 'wpmozo-blocks-and-addons'),
        checked: attributes.autoplay,
        onChange: newValue => setAttributes({
          autoplay: newValue
        })
      }), attributes.autoplay && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Autoplay Delay', 'wpmozo-blocks-and-addons'),
          value: attributes.autoplayDelay,
          onChange: newValue => setAttributes({
            autoplayDelay: newValue
          }),
          min: 0,
          max: 10000,
          step: 100
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Pause on Hover', 'wpmozo-blocks-and-addons'),
          checked: attributes.pauseOnHover,
          onChange: newValue => setAttributes({
            pauseOnHover: newValue
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Enable Linear Transition', 'wpmozo-blocks-and-addons'),
        checked: attributes.enableLinearTrans,
        onChange: newValue => setAttributes({
          enableLinearTrans: newValue
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Transition Duration', 'wpmozo-blocks-and-addons'),
        value: attributes.transDuration,
        onChange: newValue => setAttributes({
          transDuration: newValue
        }),
        min: 0,
        max: 10000,
        step: 100
      }), ('slide' === attributes.slideEffect || 'coverflow' === attributes.slideEffect) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.BaseControl, {
        className: "wpmozo-color-combo-wrap",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ButtonGroup, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
            className: "wpmozo-color-combo-type",
            isPressed: 'tablet' === deviceType ? true : false,
            onClick: () => setDeviceType('tablet'),
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Tablet', 'wpmozo-blocks-and-addons')
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
            className: "wpmozo-color-combo-type",
            isPressed: 'mobile' === deviceType ? true : false,
            onClick: () => setDeviceType('mobile'),
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Mobile', 'wpmozo-blocks-and-addons')
          })]
        }), 'tablet' === deviceType && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Number of Testimonials Per View', 'wpmozo-blocks-and-addons'),
            value: attributes.slidesPerViewTablet,
            options: [{
              value: 1,
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('1', 'wpmozo-blocks-and-addons')
            }, {
              value: 2,
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('2', 'wpmozo-blocks-and-addons')
            }, {
              value: 3,
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('3', 'wpmozo-blocks-and-addons')
            }, {
              value: 4,
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('4', 'wpmozo-blocks-and-addons')
            }, {
              value: 5,
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('5', 'wpmozo-blocks-and-addons')
            }, {
              value: 6,
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('6', 'wpmozo-blocks-and-addons')
            }, {
              value: 7,
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('7', 'wpmozo-blocks-and-addons')
            }, {
              value: 8,
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('8', 'wpmozo-blocks-and-addons')
            }, {
              value: 9,
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('9', 'wpmozo-blocks-and-addons')
            }, {
              value: 10,
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('10', 'wpmozo-blocks-and-addons')
            }],
            onChange: newValue => setAttributes({
              slidesPerViewTablet: parseInt(newValue)
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Number of Slides Per Group', 'wpmozo-blocks-and-addons'),
            value: attributes.slidesPerGroupTablet,
            options: [{
              value: 1,
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('1', 'wpmozo-blocks-and-addons')
            }, {
              value: 2,
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('2', 'wpmozo-blocks-and-addons')
            }, {
              value: 3,
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('3', 'wpmozo-blocks-and-addons')
            }, {
              value: 4,
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('4', 'wpmozo-blocks-and-addons')
            }, {
              value: 5,
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('5', 'wpmozo-blocks-and-addons')
            }, {
              value: 6,
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('6', 'wpmozo-blocks-and-addons')
            }, {
              value: 7,
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('7', 'wpmozo-blocks-and-addons')
            }, {
              value: 8,
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('8', 'wpmozo-blocks-and-addons')
            }, {
              value: 9,
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('9', 'wpmozo-blocks-and-addons')
            }, {
              value: 10,
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('10', 'wpmozo-blocks-and-addons')
            }],
            onChange: newValue => setAttributes({
              slidesPerGroupTablet: parseInt(newValue)
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Space Between Slides', 'wpmozo-blocks-and-addons'),
            value: attributes.spaceBetweenSlidesTablet,
            onChange: newValue => setAttributes({
              spaceBetweenSlidesTablet: newValue
            }),
            min: 1,
            max: 100,
            step: 1
          })]
        }), 'mobile' === deviceType && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Number of Testimonials Per View', 'wpmozo-blocks-and-addons'),
            value: attributes.slidesPerViewMobile,
            options: [{
              value: 1,
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('1', 'wpmozo-blocks-and-addons')
            }, {
              value: 2,
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('2', 'wpmozo-blocks-and-addons')
            }, {
              value: 3,
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('3', 'wpmozo-blocks-and-addons')
            }, {
              value: 4,
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('4', 'wpmozo-blocks-and-addons')
            }, {
              value: 5,
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('5', 'wpmozo-blocks-and-addons')
            }, {
              value: 6,
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('6', 'wpmozo-blocks-and-addons')
            }, {
              value: 7,
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('7', 'wpmozo-blocks-and-addons')
            }, {
              value: 8,
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('8', 'wpmozo-blocks-and-addons')
            }, {
              value: 9,
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('9', 'wpmozo-blocks-and-addons')
            }, {
              value: 10,
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('10', 'wpmozo-blocks-and-addons')
            }],
            onChange: newValue => setAttributes({
              slidesPerViewMobile: parseInt(newValue)
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Number of Slides Per Group', 'wpmozo-blocks-and-addons'),
            value: attributes.slidesPerGroupMobile,
            options: [{
              value: 1,
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('1', 'wpmozo-blocks-and-addons')
            }, {
              value: 2,
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('2', 'wpmozo-blocks-and-addons')
            }, {
              value: 3,
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('3', 'wpmozo-blocks-and-addons')
            }, {
              value: 4,
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('4', 'wpmozo-blocks-and-addons')
            }, {
              value: 5,
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('5', 'wpmozo-blocks-and-addons')
            }, {
              value: 6,
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('6', 'wpmozo-blocks-and-addons')
            }, {
              value: 7,
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('7', 'wpmozo-blocks-and-addons')
            }, {
              value: 8,
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('8', 'wpmozo-blocks-and-addons')
            }, {
              value: 9,
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('9', 'wpmozo-blocks-and-addons')
            }, {
              value: 10,
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('10', 'wpmozo-blocks-and-addons')
            }],
            onChange: newValue => setAttributes({
              slidesPerGroupMobile: parseInt(newValue)
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Space Between Slides', 'wpmozo-blocks-and-addons'),
            value: attributes.spaceBetweenSlidesMobile,
            onChange: newValue => setAttributes({
              spaceBetweenSlidesMobile: newValue
            }),
            min: 1,
            max: 100,
            step: 1
          })]
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Slider Navigation', 'wpmozo-blocks-and-addons'),
      initialOpen: false,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Show Arrows', 'wpmozo-blocks-and-addons'),
        checked: attributes.showArrows,
        onChange: newValue => setAttributes({
          showArrows: newValue
        })
      }), attributes.showArrows && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_common_components__WEBPACK_IMPORTED_MODULE_5__.WpmozoIconpicker, {
          props: props,
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Previous Arrow', 'wpmozo-blocks-and-addons'),
          iconPickerKey: "prevArrowIcon",
          value: attributes.prevArrowIcon,
          onChange: newValue => setAttributes({
            prevArrowIcon: newValue
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_common_components__WEBPACK_IMPORTED_MODULE_5__.WpmozoIconpicker, {
          props: props,
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Next Arrow', 'wpmozo-blocks-and-addons'),
          iconPickerKey: "nextArrowIcon",
          value: attributes.nextArrowIcon,
          onChange: newValue => setAttributes({
            nextArrowIcon: newValue
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Show Arrows On Hover', 'wpmozo-blocks-and-addons'),
          checked: attributes.showArrowOnHover,
          onChange: newValue => setAttributes({
            showArrowOnHover: newValue
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Arrows Position', 'wpmozo-blocks-and-addons'),
          value: attributes.arrowsPosition,
          options: [{
            value: 'inside',
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Inside', 'wpmozo-blocks-and-addons')
          }, {
            value: 'outside',
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Outside', 'wpmozo-blocks-and-addons')
          }, {
            value: 'top_left',
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Top Left', 'wpmozo-blocks-and-addons')
          }, {
            value: 'top_right',
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Top Right', 'wpmozo-blocks-and-addons')
          }, {
            value: 'top_center',
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Top Center', 'wpmozo-blocks-and-addons')
          }, {
            value: 'bottom_left',
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Bottom Left', 'wpmozo-blocks-and-addons')
          }, {
            value: 'bottom_right',
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Bottom Right', 'wpmozo-blocks-and-addons')
          }, {
            value: 'bottom_center',
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Bottom Center', 'wpmozo-blocks-and-addons')
          }],
          onChange: newValue => setAttributes({
            arrowsPosition: newValue
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Show Dots Pagination', 'wpmozo-blocks-and-addons'),
        checked: attributes.showControlDot,
        onChange: newValue => setAttributes({
          showControlDot: newValue
        })
      }), attributes.showControlDot && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Dots Pagination Style', 'wpmozo-blocks-and-addons'),
          value: attributes.controlDotStyle,
          options: [{
            value: 'solid_dot',
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Solid Dot', 'wpmozo-blocks-and-addons')
          }, {
            value: 'transparent_dot',
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Transparent Dot', 'wpmozo-blocks-and-addons')
          }, {
            value: 'stretched_dot',
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Stretched Dot', 'wpmozo-blocks-and-addons')
          }, {
            value: 'line',
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Line', 'wpmozo-blocks-and-addons')
          }, {
            value: 'rounded_line',
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Rounded Line', 'wpmozo-blocks-and-addons')
          }, {
            value: 'square_dot',
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Squared Dot', 'wpmozo-blocks-and-addons')
          }],
          onChange: newValue => setAttributes({
            controlDotStyle: newValue
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Enable Dynamic Dots', 'wpmozo-blocks-and-addons'),
          checked: attributes.enableDynamicDots,
          onChange: newValue => setAttributes({
            enableDynamicDots: newValue
          })
        })]
      })]
    })]
  });
};

/***/ }),

/***/ "./src/blocks/testimonial-slider/style.js":
/*!************************************************!*\
  !*** ./src/blocks/testimonial-slider/style.js ***!
  \************************************************/
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
  const toConvertStyles = ['body', 'bodyHover', 'authorName', 'authorNameHover', 'designation', 'designationHover', 'companyName', 'companyNameHover', 'authorImage', 'arrow', 'testimonial', 'container'];
  let convertedStyle = (0,_common_utils_js__WEBPACK_IMPORTED_MODULE_0__.convertInlineStyleStr)(toConvertStyles, attributes);
  let styles = `#block-${attributes.ID} {`;

  // Global text align.
  if (attributes?.globalTextAlign) {
    styles += `text-align: ${attributes.globalTextAlign};`;
  }

  // Testimonial content body.
  styles += `.wpmozo_testimonial_desc, .wpmozo_testimonial_desc p{
		${attributes.bodyColor ? `color: ${attributes.bodyColor};` : ''}
		${convertedStyle.body}
	}
	.wpmozo_testimonial_desc:hover, .wpmozo_testimonial_desc:hover p{
		${attributes.bodyHoverColor ? `color: ${attributes.bodyHoverColor};` : ''}
		${convertedStyle.bodyHover}
	}`;

  // Author Image.
  if (attributes.showAuthorImage) {
    styles += `.wpmozo_testimonial_author_image img{
			${convertedStyle.authorImage}
		}`;
  }

  // Author Name.
  styles += `.wpmozo_testimonial_author_name{
		${attributes.authorNameColor ? `color: ${attributes.authorNameColor};` : ''}
		${convertedStyle.authorName}
	}
	.wpmozo_testimonial_author_name:hover{
		${attributes.authorNameHoverColor ? `color: ${attributes.authorNameHoverColor};` : ''}
		${convertedStyle.authorNameHover}
	}`;

  // Designation.
  if (attributes.showDesignation) {
    styles += `.wpmozo_testimonial_author_designation{
			${attributes.designationColor ? `color: ${attributes.designationColor};` : ''}
			${convertedStyle.designation}
		}
		.wpmozo_testimonial_author_designation:hover{
			${attributes.designationHoverColor ? `color: ${attributes.designationHoverColor};` : ''}
			${convertedStyle.designationHover}
		}`;
  }

  // Company Name.
  if (attributes.showCompany) {
    styles += `.wpmozo_testimonial_author_company, .wpmozo_testimonial_author_company a{
			${attributes.companyNameColor ? `color: ${attributes.companyNameColor};` : ''}
			${convertedStyle.companyName}
		}
		.wpmozo_testimonial_author_company:hover, .wpmozo_testimonial_author_company:hover a{
			${attributes.companyNameHoverColor ? `color: ${attributes.companyNameHoverColor};` : ''}
			${convertedStyle.companyNameHover}
		}`;
  }

  // Star Rating.
  if (attributes.showRating) {
    if (attributes.starFontSize) {
      styles += `.wpmozo_testimonial_star{ font-size: ${attributes.starFontSize}px; }`;
    }
    if (attributes.starFilledColor) {
      styles += `.wpmozo_testimonial_filled_star, .wpmozo_testimonial_half_filled_star{ color: ${attributes.starFilledColor}; }`;
    }
    if (attributes.starEmptyColor) {
      styles += `.wpmozo_testimonial_empty_star{ color: ${attributes.starEmptyColor}; }`;
    }
  }

  // Opening quote.
  if (attributes.showOpenQuoteIcon) {
    styles += `.wpmozo_testimonial_opening_quote_icon svg{
			${attributes.openQuoteIconSize ? `width: ${attributes.openQuoteIconSize}px;` : ''}
			${attributes.openQuoteIconColor ? `fill: ${attributes.openQuoteIconColor};` : ''}
		}`;
  }
  // Closing quote.
  if (attributes.showCloseQuoteIcon) {
    styles += `.wpmozo_testimonial_closing_quote_icon svg{
			${attributes.closeQuoteIconSize ? `width: ${attributes.closeQuoteIconSize}px;` : ''}
			${attributes.closeQuoteIconColor ? `fill: ${attributes.closeQuoteIconColor};` : ''}
		}`;
  }

  // Meta.
  if ('layout1' === attributes.layout && attributes.metaSeparatorColor) {
    styles += `.wpmozo_testimonial_meta{
			border-color: ${attributes.metaSeparatorColor} !important;
		}`;
  }

  // Simple testimonial.
  styles += `.wpmozo_testimonial_slide{
		${attributes.testimonialBGGradient ? `background:` + attributes.testimonialBGGradient + `;` : ''}
		${attributes.testimonialBackground ? `background-color:` + attributes.testimonialBackground + `;` : ''}
		${convertedStyle.testimonial}
	}`;

  // Slider arrows.
  if (attributes.showArrows) {
    styles += `.swiper-button-next, .swiper-button-prev{
			${attributes.arrowBackground ? `background-color: ${attributes.arrowBackground};` : ''}
			${attributes.arrowColor ? `color: ${attributes.arrowColor};` : ''}
			${convertedStyle.arrow}
		}
		.wpmozo_swiper_wrapper .swiper-button-next:after,
		.wpmozo_swiper_wrapper .swiper-button-prev:after{
			${attributes.arrowIconSize ? `font-size: ${attributes.arrowIconSize}px;` : ''}
		}`;
    if (attributes.showArrowOnHover) {
      styles += `.swiper-button-next, .swiper-button-prev{
				visibility: hidden; opacity: 0; transition: all 300ms ease;
			}`;
      styles += `.wpmozo_swiper_wrapper:hover .swiper-button-next,.wpmozo_swiper_wrapper:hover .swiper-button-prev{
				visibility: visible; opacity: 1;
			}`;
      styles += `.wpmozo_swiper_wrapper:hover .swiper-button-next.swiper-button-disabled,.wpmozo_swiper_wrapper:hover .swiper-button-prev.swiper-button-disabled{
				opacity: 0.35;
			}`;
      // Outside arrows.
      styles += `.wpmozo_arrows_outside .swiper-button-prev{ left: 50px; }`;
      styles += `.wpmozo_arrows_outside .swiper-button-next{ right: 50px; }`;
      styles += `.wpmozo_swiper_wrapper:hover .wpmozo_arrows_outside .swiper-button-prev{ left: 0; }`;
      styles += `.wpmozo_swiper_wrapper:hover .wpmozo_arrows_outside .swiper-button-next{ right: 0; }`;
      // Inside arrows.
      styles += `.wpmozo_arrows_inside .swiper-button-prev{ left: -50px; }`;
      styles += `.wpmozo_arrows_inside .swiper-button-next{ right: -50px; }`;
      styles += `.wpmozo_swiper_wrapper:hover .wpmozo_arrows_inside .swiper-button-prev{ left: 0; }`;
      styles += `.wpmozo_swiper_wrapper:hover .wpmozo_arrows_inside .swiper-button-next{ right: 0; }`;
    }
  }

  // Control dot color.
  if (attributes.showControlDot) {
    if (attributes.controlDotColorInactive && 'transparent_dot' != attributes.controlDotStyle) {
      styles += `.swiper-pagination-bullet{
				background: ${attributes.controlDotColorInactive};
			}`;
    } else {
      styles += `.transparent_dot .swiper-pagination-bullet{
				border-color: ${attributes.controlDotColorInactive} !important;
			}`;
    }
    if (attributes.controlDotColorActive && 'transparent_dot' != attributes.controlDotStyle) {
      styles += `.swiper-pagination-bullet-active{
				background: ${attributes.controlDotColorActive};
			}`;
    } else {
      styles += `.transparent_dot .swiper-pagination-bullet-active{
				border-color: ${attributes.controlDotColorActive} !important;border-width: 2px;border-style: solid;background: transparent;
			}`;
    }
    if ('stretched_dot' === attributes.controlDotStyle && attributes.transDuration) {
      styles += `.stretched_dot .swiper-pagination-bullet{
				transition: all ${attributes.transDuration}ms ease;
			}`;
    }
  }

  // Coverflow shadow.
  if (attributes.enableCoverflowShadow) {
    styles += `.swiper-3d .swiper-slide-shadow-left{
			background-image: linear-gradient( to left, ${attributes.coverflowShadowColor}, rgba(0,0,0,0) );
		}`;
    styles += `.swiper-3d .swiper-slide-shadow-right{
			background-image: linear-gradient( to right, ${attributes.coverflowShadowColor}, rgba(0,0,0,0) );
		}`;
  } else {
    styles += `.swiper-3d .swiper-slide-shadow-left, .swiper-3d .swiper-slide-shadow-right{
			background-image: none;
		}`;
  }

  // Slider container.
  styles += `.swiper-container{
		${convertedStyle.container}
	}`;

  // Linear transition.
  if (attributes.enableLinearTrans) {
    styles += `.swiper-wrapper{ transition-timing-function : linear !important; }`;
  }
  styles += `}`;
  return styles;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generateDynamicStyle);

/***/ }),

/***/ "./src/blocks/testimonial-slider/style.scss":
/*!**************************************************!*\
  !*** ./src/blocks/testimonial-slider/style.scss ***!
  \**************************************************/
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

/***/ "@wordpress/core-data":
/*!**********************************!*\
  !*** external ["wp","coreData"] ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["wp"]["coreData"];

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
/******/ 			"blocks/testimonial-slider/index": 0,
/******/ 			"blocks/bar-counter/style-index": 0,
/******/ 			"blocks/testimonial-slider/style-index": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["blocks/bar-counter/style-index","blocks/testimonial-slider/style-index"], () => (__webpack_require__("./src/blocks/testimonial-slider/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map