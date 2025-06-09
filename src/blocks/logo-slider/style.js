import {wpmozo_is_empty,convertInlineStyleStr} from '../../common/utils.js';

const generateDynamicStyle = ({attributes, clientId}) => {

	const {iconFontSize, separatorColor} = attributes,
		toConvertStyles = [
			'container',
			'arrow'
		];
	let convertedStyle = convertInlineStyleStr(toConvertStyles, attributes);

	let styles = `#block-${attributes.ID}{`;

	styles += `
		.logo-img {
			width: ${attributes.logoWidth}px;
			height: ${attributes.logoHeight}px;
		}
		.wpmozo-bna-logo-slider-inner-wrap {
			${convertedStyle.container}
		}
		.swiper-button-next:after, .swiper-button-next:before, .swiper-button-prev:after, .swiper-button-prev:before {
			color: ${attributes.sliderArrowColor};
            font-size: ${attributes.arrowFontSize};
		}
		.swiper-button-next, .swiper-button-prev {
			background: ${attributes.sliderArrowBackground};
			${convertedStyle.arrow}
		}
		.swiper-pagination-bullet.swiper-pagination-bullet-active {
			background: ${attributes.sliderActiveDoteColor};
		}
		.swiper-pagination-bullet {
			background: ${attributes.sliderInactiveDoteColor};
		}

	`;

	if ( ! wpmozo_is_empty( attributes.nextSlideArrow ) ) {
		styles += `
		.custom-swiper-button-next:after {
			display: none !important;
		}
		`;
	}

	if ( ! wpmozo_is_empty( attributes.previousSlideArrow ) ) {
		styles += `
		.custom-swiper-button-prev:after {
			display: none !important;
		}
		`;
	}

	if ( attributes.enableLinearTransition ) {
		styles += `
		.swiper-wrapper {
			transition-timing-function: linear !important;
		}
		`;
	}

	if ( 'outside' === attributes.arrowsPosition ) {
		styles += `
		.wpmozo-bna-arrows-outside::before{ width: ${attributes.arrowFontSize ? attributes.arrowFontSize : '18px'}; left: -${attributes.arrowFontSize ? attributes.arrowFontSize : '18px'};}
		.wpmozo-bna-arrows-outside::after{ width: ${attributes.arrowFontSize ? attributes.arrowFontSize : '18px'}; right: -${attributes.arrowFontSize ? attributes.arrowFontSize : '18px'};}`;
	}

	if ( attributes.showArrowOnHover ) {
		styles += `
			.wpmozo-bna-logo-slider-navigation .swiper-button-prev {
				visibility: hidden; opacity: 0; transition: all 300ms ease;
			}
			.wpmozo-bna-logo-slider-navigation .swiper-button-next {
				visibility: hidden; opacity: 0; transition: all 300ms ease;
			}
			.wpmozo-bna-logo-slider-wrap:hover .wpmozo-bna-logo-slider-navigation .swiper-button-prev, .wpmozo-bna-logo-slider-wrap:hover .wpmozo-bna-logo-slider-navigation .swiper-button-next {
				visibility: visible; opacity: 1;
			}
			.wpmozo-bna-logo-slider-wrap:hover .wpmozo-bna-logo-slider-navigation .swiper-button-prev.swiper-button-disabled, .wpmozo-bna-logo-slider-wrap:hover .wpmozo-bna-logo-slider-navigation .swiper-button-next.swiper-button-disabled {
				opacity: 0.35;
			}
			.wpmozo-bna-arrows-outside .swiper-button-prev {
				left: 50px;
			}
			.wpmozo-bna-arrows-outside .swiper-button-next {
				right: 50px;
			}
			.wpmozo-bna-logo-slider-wrap:hover .wpmozo-bna-arrows-outside .swiper-button-prev {
				left: 0;
			}
			.wpmozo-bna-logo-slider-wrap:hover .wpmozo-bna-arrows-outside .swiper-button-next {
				right: 0;
			}
			.wpmozo-bna-arrows-inside .swiper-button-prev {
				left: -50px;
			}
			.wpmozo-bna-arrows-inside .swiper-button-next {
				right: -50px;
			}
			.wpmozo-bna-logo-slider-wrap:hover .wpmozo-bna-arrows-inside .swiper-button-prev{
				left: 0;
			}
			.wpmozo-bna-logo-slider-wrap:hover .wpmozo-bna-arrows-inside .swiper-button-next{
				right: 0;
			}
			.wpmozo-bna-logo-slider-wrap .wpmozo-bna-arrows-outside:before, .wpmozo-bna-logo-slider-wrap .wpmozo-bna-arrows-outside:after {
				content: '';
				position: absolute;
				top: 0;
				height: 100%;
			}

		`;

	}

	styles += `}`;

	return styles;
};

export default generateDynamicStyle;
