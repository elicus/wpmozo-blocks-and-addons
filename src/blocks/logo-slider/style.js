import {wpmozo_is_empty,convertInlineStyleStr} from '../../common/utils.js';

const generateDynamicStyle = ({attributes, clientId, isEdit}) => {

	const {iconFontSize, separatorColor} = attributes,
		toConvertStyles = [
			'container',
			'arrow'
		];
	let convertedStyle = convertInlineStyleStr(toConvertStyles, attributes);

	let normalcss = [],
	hovercss = [],
	cssExtras = [];
	const isEditor = (selector) => {return isEdit ? `,&.is_hover ${selector}` : ''};

	normalcss.push(
		( attributes.logoWidth || attributes.logoHeight )
		? `.logo-img {
				${attributes.logoWidth ? `width: ${attributes.logoWidth}px;` : ''}
				${attributes.logoHeight ? `height: ${attributes.logoHeight}px;` : ''}
			}`
		: ''
	);

	normalcss.push( convertedStyle.container ? `.wpmozo-bna-logo-slider-inner-wrap { ${convertedStyle.container || ''} }` : '' );
	
	normalcss.push( attributes.sliderActiveDoteColor ? `.swiper-pagination-bullet.swiper-pagination-bullet-active { background: ${attributes.sliderActiveDoteColor}; }` : '' );
	
	normalcss.push( attributes.sliderInactiveDoteColor ? `.swiper-pagination-bullet { background: ${attributes.sliderInactiveDoteColor}; }` : '' );
	
	normalcss.push(
		( attributes.sliderArrowColor || attributes.arrowFontSize )
		? `.swiper-button-next:after, .swiper-button-next:before, .swiper-button-prev:after, .swiper-button-prev:before {
				${attributes.sliderArrowColor ? `color: ${attributes.sliderArrowColor};` : ''}
				${attributes.arrowFontSize ? `font-size: ${attributes.arrowFontSize};` : ''}
			}`
		: ''
	);

	normalcss.push(
		( attributes.sliderArrowBackground || convertedStyle.arrow )
		? `.swiper-button-next, .swiper-button-prev {
				${attributes.sliderArrowBackground ? `background: ${attributes.sliderArrowBackground};` : ''}
				${convertedStyle.arrow || ''}
			}`
		: ''
	);

	normalcss.push( ! wpmozo_is_empty( attributes.nextSlideArrow ) ? `.custom-swiper-button-next:after { display: none !important; }` : '' );
	
	normalcss.push( ! wpmozo_is_empty( attributes.previousSlideArrow ) ? `.custom-swiper-button-prev:after { display: none !important; }` : '' );
	
	normalcss.push( attributes.enableLinearTransition ? `.swiper-wrapper { transition-timing-function: linear !important; }` : '' );


	if ( 'outside' === attributes.arrowsPosition ) {
		normalcss.push( `
			.wpmozo-bna-arrows-outside::before{ 
				width: ${attributes.arrowFontSize ?? '18px'}; 
				left: -${attributes.arrowFontSize ?? '18px'};
			}
			.wpmozo-bna-arrows-outside::after{ 
				width: ${attributes.arrowFontSize ?? '18px'}; 
				right: -${attributes.arrowFontSize ?? '18px'};
			}
		`);
	}

	if ( attributes.showArrowOnHover ) {
		normalcss.push(`
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

		`);
	}

	const hasStyles = normalcss.some(Boolean) || hovercss.some(Boolean);
	
	let styles = hasStyles ? `#block-${attributes.ID}{${normalcss.filter(Boolean).join('\n')} ${hovercss.filter(Boolean).join('\n')}}` : '';
	
	styles += cssExtras.some(Boolean) ? cssExtras.filter(Boolean).join('\n') : '';
	styles = styles.replace(/\s+/g, ' ')
    .replace(/\s*{\s*/g, '{')
    .replace(/\s*}\s*/g, '}')
    .replace(/\s*:\s*/g, ':')
    .replace(/\s*;\s*/g, ';')
    .replace(/\s*,\s*/g, ',')    
    .trim();

	return styles;
};

export default generateDynamicStyle;