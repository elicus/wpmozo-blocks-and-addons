import { convertInlineStyleStr } from '../../common/utils.js';

const generateDynamicStyle = ( { attributes, clientId } ) => {

	const toConvertStyles = [
		'body',
		'bodyHover',
		'authorName',
		'authorNameHover',
		'designation',
		'designationHover',
		'companyName',
		'companyNameHover',
		'authorImage',
		'arrow',
		'testimonial',
		'container',
	];
	let convertedStyle = convertInlineStyleStr( toConvertStyles, attributes );

	let styles = `#block-${attributes.ID} {`;

	// Global text align.
	if ( attributes?.globalTextAlign ) {
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
	if ( attributes.showAuthorImage ) {
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
	if ( attributes.showDesignation ) {
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
	if ( attributes.showCompany ) {
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
	if ( attributes.showRating ) {
		if ( attributes.starFontSize ) {
			styles += `.wpmozo_testimonial_star{ font-size: ${attributes.starFontSize}px; }`;
		}
		if ( attributes.starFilledColor ) {
			styles += `.wpmozo_testimonial_filled_star, .wpmozo_testimonial_half_filled_star{ color: ${attributes.starFilledColor}; }`;
		}
		if ( attributes.starEmptyColor ) {
			styles += `.wpmozo_testimonial_empty_star{ color: ${attributes.starEmptyColor}; }`;
		}
	}

	// Opening quote.
	if ( attributes.showOpenQuoteIcon ) {
		styles += `.wpmozo_testimonial_opening_quote_icon svg{
			${attributes.openQuoteIconSize ? `width: ${attributes.openQuoteIconSize}px;` : ''}
			${attributes.openQuoteIconColor ? `fill: ${attributes.openQuoteIconColor};` : ''}
		}`;
	}
	// Closing quote.
	if ( attributes.showCloseQuoteIcon ) {
		styles += `.wpmozo_testimonial_closing_quote_icon svg{
			${attributes.closeQuoteIconSize ? `width: ${attributes.closeQuoteIconSize}px;` : ''}
			${attributes.closeQuoteIconColor ? `fill: ${attributes.closeQuoteIconColor};` : ''}
		}`;
	}

	// Meta.
	if ( 'layout1' === attributes.layout && attributes.metaSeparatorColor ) {
		styles += `.wpmozo_testimonial_meta{
			border-color: ${attributes.metaSeparatorColor} !important;
		}`;
	}

	// Simple testimonial.
	styles += `.wpmozo_testimonial_slide{
		${attributes.testimonialBGGradient ? `background:`+ attributes.testimonialBGGradient + `;` : ''}
		${attributes.testimonialBackground ? `background-color:`+ attributes.testimonialBackground + `;` : ''}
		${convertedStyle.testimonial}
	}`;

	// Slider arrows.
	if ( attributes.showArrows ) {
		styles += `.swiper-button-next, .swiper-button-prev{
			${attributes.arrowIconSize ? `font-size: ${attributes.arrowIconSize}px;` : ''}
			${attributes.arrowBackground ? `background-color: ${attributes.arrowBackground};` : ''}
			${attributes.arrowColor ? `color: ${attributes.arrowColor};` : ''}
			${convertedStyle.arrow}
		}`;
		if ( attributes.showArrowOnHover ) {
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
	if ( attributes.showControlDot ) {
		if ( attributes.controlDotColorInactive && 'transparent_dot' != attributes.controlDotStyle ) {
			styles += `.swiper-pagination-bullet{
				background: ${attributes.controlDotColorInactive};
			}`;

		} else {
			styles += `.transparent_dot .swiper-pagination-bullet{
				border-color: ${attributes.controlDotColorInactive} !important;
			}`;
		}
		if ( attributes.controlDotColorActive && 'transparent_dot' != attributes.controlDotStyle) {
			styles += `.swiper-pagination-bullet-active{
				background: ${attributes.controlDotColorActive};
			}`;
		} else {
			styles += `.transparent_dot .swiper-pagination-bullet-active{
				border-color: ${attributes.controlDotColorActive} !important;border-width: 2px;border-style: solid;background: transparent;
			}`;
		}
		if ( 'stretched_dot' === attributes.controlDotStyle && attributes.transDuration ) {
			styles += `.stretched_dot .swiper-pagination-bullet{
				transition: all ${attributes.transDuration}ms ease;
			}`;
		}
	}

	// Coverflow shadow.
	if ( attributes.enableCoverflowShadow ) {
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
	if ( attributes.enableLinearTrans ) {
		styles += `.swiper-wrapper{ transition-timing-function : linear !important; }`;
	}

	styles += `}`;
	return styles;
}

export default generateDynamicStyle;
