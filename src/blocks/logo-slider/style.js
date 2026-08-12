import {wpmozo_is_empty,convertInlineStyleStr} from '../../common/utils.js';

const generateDynamicStyle = ({attributes, clientId, isEdit}) => {

	const {iconFontSize, separatorColor} = attributes,
		toConvertStyles = [
			'container',
			'containerHover',
			'arrow'
		];
	let convertedStyle = convertInlineStyleStr(toConvertStyles, attributes);

	let normalcss = [],
	hovercss = [],
	cssExtras = [];

	const blockID = `#block-${attributes.ID}`;

	normalcss.push(
		( attributes.logoWidth || attributes.logoHeight )
		? `${blockID} .logo-img {
				${attributes.logoWidth ? `width: ${attributes.logoWidth}px;` : ''}
				${attributes.logoHeight ? `height: ${attributes.logoHeight}px;` : ''}
			}`
		: ''
	);

	normalcss.push(
		( attributes.containerBackground || convertedStyle.container )
		? `${blockID} .wpmozo-bna-logo-slider-inner-wrap {
				${attributes.containerBackground ? `background: ${attributes.containerBackground};` : ''}
				${convertedStyle.container || ''}
			}`
		: ''
	);

	if ( attributes.containerHoverBackground || convertedStyle.containerHover ) {
		hovercss.push(
			`${blockID} .wpmozo-bna-logo-slider-inner-wrap:hover, ${blockID}.is_hover .wpmozo-bna-logo-slider-inner-wrap {
				${attributes.containerHoverBackground ? `background: ${attributes.containerHoverBackground};` : ''}
				${convertedStyle.containerHover || ''}
			}`
		);
	}
	
	normalcss.push( attributes.sliderActiveDoteColor ? `${blockID} .swiper-pagination-bullet.swiper-pagination-bullet-active { background: ${attributes.sliderActiveDoteColor}; }` : '' );

	if ( attributes.sliderActiveDoteHoverColor ) {
		hovercss.push( `${blockID} .swiper-pagination-bullet.swiper-pagination-bullet-active:hover, ${blockID}.is_hover .swiper-pagination-bullet.swiper-pagination-bullet-active { background: ${attributes.sliderActiveDoteHoverColor}; }` );
	}
	
	normalcss.push( attributes.sliderInactiveDoteColor ? `${blockID} .swiper-pagination-bullet:not(.swiper-pagination-bullet-active) { background: ${attributes.sliderInactiveDoteColor}; }` : '' );

	if ( attributes.sliderInactiveDoteHoverColor ) {
		hovercss.push( `${blockID} .swiper-pagination-bullet:not(.swiper-pagination-bullet-active):hover, ${blockID}.is_hover .swiper-pagination-bullet:not(.swiper-pagination-bullet-active) { background: ${attributes.sliderInactiveDoteHoverColor}; }` );
	}
	
	const formattedArrowFontSize = attributes.arrowFontSize 
	? ( isNaN( attributes.arrowFontSize ) ? attributes.arrowFontSize : `${attributes.arrowFontSize}px` ) 
	: '';

	const formattedArrowHoverFontSize = attributes.arrowHoverFontSize 
	? ( isNaN( attributes.arrowHoverFontSize ) ? attributes.arrowHoverFontSize : `${attributes.arrowHoverFontSize}px` ) 
	: '';

	normalcss.push(
		( attributes.sliderArrowColor || formattedArrowFontSize )
		? `${blockID} .swiper-button-next:after, ${blockID} .swiper-button-next:before, ${blockID} .swiper-button-prev:after, ${blockID} .swiper-button-prev:before, ${blockID} .swiper-button-next i, ${blockID} .swiper-button-prev i {
				${attributes.sliderArrowColor ? `color: ${attributes.sliderArrowColor};` : ''}
				${formattedArrowFontSize ? `font-size: ${formattedArrowFontSize} !important;` : ''}
			}`
		: ''
	);

	if ( attributes.sliderArrowHoverColor || formattedArrowHoverFontSize ) {
		hovercss.push(
			`${blockID} .swiper-button-next:hover:after, ${blockID} .swiper-button-next:hover:before, ${blockID} .swiper-button-prev:hover:after, ${blockID} .swiper-button-prev:hover:before, ${blockID} .swiper-button-next:hover i, ${blockID} .swiper-button-prev:hover i, ${blockID}.is_hover .swiper-button-next:after, ${blockID}.is_hover .swiper-button-next:before, ${blockID}.is_hover .swiper-button-prev:after, ${blockID}.is_hover .swiper-button-prev:before, ${blockID}.is_hover .swiper-button-next i, ${blockID}.is_hover .swiper-button-prev i {
				${attributes.sliderArrowHoverColor ? `color: ${attributes.sliderArrowHoverColor};` : ''}
				${formattedArrowHoverFontSize ? `font-size: ${formattedArrowHoverFontSize} !important;` : ''}
			}`
		);
	}

	normalcss.push(
		( attributes.sliderArrowBackground || convertedStyle.arrow )
		? `${blockID} .swiper-button-next, ${blockID} .swiper-button-prev {
				${attributes.sliderArrowBackground ? `background: ${attributes.sliderArrowBackground};` : ''}
				${convertedStyle.arrow || ''}
			}`
		: ''
	);

	if ( attributes.sliderArrowHoverBackground ) {
		hovercss.push(
			`${blockID} .swiper-button-next:hover, ${blockID} .swiper-button-prev:hover, ${blockID}.is_hover .swiper-button-next, ${blockID}.is_hover .swiper-button-prev {
				background: ${attributes.sliderArrowHoverBackground};
			}`
		);
	}

	normalcss.push( ! wpmozo_is_empty( attributes.nextSlideArrow ) ? `${blockID} .custom-swiper-button-next:after { display: none !important; }` : '' );
	
	normalcss.push( ! wpmozo_is_empty( attributes.previousSlideArrow ) ? `${blockID} .custom-swiper-button-prev:after { display: none !important; }` : '' );
	
	normalcss.push( attributes.enableLinearTransition ? `${blockID} .swiper-wrapper { transition-timing-function: linear !important; }` : '' );


	if ( 'outside' === attributes.arrowsPosition ) {
		normalcss.push( `
			${blockID} .wpmozo-bna-arrows-outside::before{ 
				width: ${attributes.arrowFontSize ?? '18px'}; 
				left: -${attributes.arrowFontSize ?? '18px'};
			}
			${blockID} .wpmozo-bna-arrows-outside::after{ 
				width: ${attributes.arrowFontSize ?? '18px'}; 
				right: -${attributes.arrowFontSize ?? '18px'};
			}
		`);
	}

	if ( attributes.showArrowOnHover ) {
		normalcss.push(`
			${blockID} .wpmozo-bna-logo-slider-navigation .swiper-button-prev {
				visibility: hidden; opacity: 0; transition: all 300ms ease;
			}
			${blockID} .wpmozo-bna-logo-slider-navigation .swiper-button-next {
				visibility: hidden; opacity: 0; transition: all 300ms ease;
			}
			${blockID} .wpmozo-bna-logo-slider-wrap:hover .wpmozo-bna-logo-slider-navigation .swiper-button-prev, ${blockID} .wpmozo-bna-logo-slider-wrap:hover .wpmozo-bna-logo-slider-navigation .swiper-button-next {
				visibility: visible; opacity: 1;
			}
			${blockID} .wpmozo-bna-logo-slider-wrap:hover .wpmozo-bna-logo-slider-navigation .swiper-button-prev.swiper-button-disabled, ${blockID} .wpmozo-bna-logo-slider-wrap:hover .wpmozo-bna-logo-slider-navigation .swiper-button-next.swiper-button-disabled {
				opacity: 0.35;
			}
			${blockID} .wpmozo-bna-arrows-outside .swiper-button-prev {
				left: 50px;
			}
			${blockID} .wpmozo-bna-arrows-outside .swiper-button-next {
				right: 50px;
			}
			${blockID} .wpmozo-bna-logo-slider-wrap:hover .wpmozo-bna-arrows-outside .swiper-button-prev {
				left: 0;
			}
			${blockID} .wpmozo-bna-logo-slider-wrap:hover .wpmozo-bna-arrows-outside .swiper-button-next {
				right: 0;
			}
			${blockID} .wpmozo-bna-arrows-inside .swiper-button-prev {
				left: -50px;
			}
			${blockID} .wpmozo-bna-arrows-inside .swiper-button-next {
				right: -50px;
			}
			${blockID} .wpmozo-bna-logo-slider-wrap:hover .wpmozo-bna-arrows-inside .swiper-button-prev{
				left: 0;
			}
			${blockID} .wpmozo-bna-logo-slider-wrap:hover .wpmozo-bna-arrows-inside .swiper-button-next{
				right: 0;
			}
			${blockID} .wpmozo-bna-logo-slider-wrap .wpmozo-bna-arrows-outside:before, ${blockID} .wpmozo-bna-logo-slider-wrap .wpmozo-bna-arrows-outside:after {
				content: '';
				position: absolute;
				top: 0;
				height: 100%;
			}

		`);
	}

	const hasStyles = normalcss.some(Boolean) || hovercss.some(Boolean);
	
	let styles = hasStyles ? `${normalcss.filter(Boolean).join('\n')}\n${hovercss.filter(Boolean).join('\n')}` : '';
	
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