// style.js
import { convertInlineStyleStr } from '../../common/utils.js';

const generateDynamicStyle = ( { attributes, clientId } ) => {

	const toConvertStyles = [
		'body',
		'bodyHover',
		'title',
		'titleHover',
		'featuredImage',
		'arrow',
		'portfolio',
		'container',
	];
	let convertedStyle = convertInlineStyleStr( toConvertStyles, attributes );

	let styles = `#block-${attributes.ID} {`;

	// Global text align.
	if ( attributes?.globalTextAlign ) {
		styles += `text-align: ${attributes.globalTextAlign};`;
	}

	// Excerpt/content body.
	if ( attributes.showExcerpt || attributes.showContent ) {
		styles += `.wpmozo_portfolio_slider_excerpt, .wpmozo_portfolio_slider_excerpt p, .wpmozo_portfolio_slider_content, .wpmozo_portfolio_slider_content p{
			${attributes.bodyColor ? `color: ${attributes.bodyColor};` : ''}
			${convertedStyle.body}
		}
		.wpmozo_portfolio_slider_excerpt:hover, .wpmozo_portfolio_slider_excerpt:hover p, .wpmozo_portfolio_slider_content:hover, .wpmozo_portfolio_slider_content:hover p{
			${attributes.bodyHoverColor ? `color: ${attributes.bodyHoverColor};` : ''}
			${convertedStyle.bodyHover}
		}`;
	}

	// Featured Image.
	if ( attributes.showFeaturedImage ) {
		styles += `.wpmozo_portfolio_slider_image img{
			${convertedStyle.featuredImage}
		}`;
	}

	// Title.
	if ( attributes.showTitle ) {
		styles += `.wpmozo_portfolio_slider_title, .wpmozo_portfolio_slider_title a{
			${attributes.titleColor ? `color: ${attributes.titleColor};` : ''}
			${convertedStyle.title}
		}
		.wpmozo_portfolio_slider_title:hover, .wpmozo_portfolio_slider_title:hover a{
			${attributes.titleHoverColor ? `color: ${attributes.titleHoverColor};` : ''}
			${convertedStyle.titleHover}
		}`;
	}

	// Portfolio card wrapper.
	styles += `.wpmozo_portfolio_slider_item_card{
		${attributes.portfolioBGGradient ? `background:`+ attributes.portfolioBGGradient + `;` : ''}
		${attributes.portfolioBackground ? `background-color:`+ attributes.portfolioBackground + `;` : ''}
		${convertedStyle.portfolio}
	}`;

	// Slider arrows.
	if ( attributes.showArrows ) {
		styles += `.swiper-button-next, .swiper-button-prev{
			${attributes.arrowBackground ? `background-color: ${attributes.arrowBackground};` : ''}
			${attributes.arrowColor ? `color: ${attributes.arrowColor};` : ''}
			${convertedStyle.arrow}
		}
		.wpmozo_swiper_wrapper .swiper-button-next:after,
		.wpmozo_swiper_wrapper .swiper-button-prev:after{
			${attributes.arrowIconSize ? `font-size: ${attributes.arrowIconSize}px;` : ''}
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
		if ( attributes.controlDotColorInactive && 'transparent_dot' !== attributes.controlDotStyle ) {
			styles += `.swiper-pagination-bullet{
				background: ${attributes.controlDotColorInactive};
			}`;
		} else {
			styles += `.transparent_dot .swiper-pagination-bullet{
				border-color: ${attributes.controlDotColorInactive} !important;
			}`;
		}
		if ( attributes.controlDotColorActive && 'transparent_dot' !== attributes.controlDotStyle) {
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
