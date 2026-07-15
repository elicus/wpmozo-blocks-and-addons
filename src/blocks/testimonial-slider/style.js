import { convertInlineStyleStr } from '../../common/utils.js';

const generateDynamicStyle = ( { attributes, clientId, isEdit } ) => {

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

	let normalcss = [],
	hovercss = [],
	cssExtras = [];
	const isEditor = (selector) => {return isEdit ? `,&.is_hover ${selector}` : ''};

	normalcss.push(attributes.globalTextAlign ? `text-align: ${attributes.globalTextAlign};` : '');	
	
	normalcss.push(
	( attributes.bodyColor || convertedStyle.body ) 
		? `.wpmozo_testimonial_desc, .wpmozo_testimonial_desc p{
				${attributes.bodyColor ? `color: ${attributes.bodyColor};` : ''}
				${convertedStyle.body || ''}
			}`
		: ''
	);
	hovercss.push(
		( attributes.bodyHoverColor || convertedStyle.bodyHover ) 
		? `.wpmozo_testimonial_desc:hover, .wpmozo_testimonial_desc:hover p${isEditor('.wpmozo_testimonial_desc')}${isEditor('.wpmozo_testimonial_desc p')}{
				${attributes.bodyHoverColor ? `color: ${attributes.bodyHoverColor};` : ''}
				${convertedStyle.bodyHover || ''}
			}`
		: ''
	);

	if ( attributes.showAuthorImage ) {
		normalcss.push(convertedStyle.authorImage ? `.wpmozo_testimonial_author_image img{ ${convertedStyle.authorImage} }` : '');
	}

	normalcss.push(
		( attributes.authorNameColor || convertedStyle.authorName ) 
		? `.wpmozo_testimonial_author_name{
				${attributes.authorNameColor ? `color: ${attributes.authorNameColor};` : ''}
				${convertedStyle.authorName || ''}
			}`
		: ''
	);
	hovercss.push(
		( attributes.authorNameHoverColor || convertedStyle.authorNameHover ) 
		? `.wpmozo_testimonial_author_name:hover${isEditor('.wpmozo_testimonial_author_name')}{
				${attributes.authorNameHoverColor ? `color: ${attributes.authorNameHoverColor};` : ''}
				${convertedStyle.authorNameHover || ''}
			}`
		: ''
	);

	if ( attributes.showDesignation ) {
		normalcss.push(
			( attributes.designationColor || convertedStyle.designation ) 
			? `.wpmozo_testimonial_author_designation{
					${attributes.designationColor ? `color: ${attributes.designationColor};` : ''}
					${convertedStyle.designation || ''}
				}`
			: ''
		);
		hovercss.push(
			( attributes.designationHoverColor || convertedStyle.designationHover ) 
			? `.wpmozo_testimonial_author_designation:hover${isEditor('.wpmozo_testimonial_author_designation')}{
					${attributes.designationHoverColor ? `color: ${attributes.designationHoverColor};` : ''}
					${convertedStyle.designationHover || ''}
				}`
			: ''
		);
	}

	if ( attributes.showCompany ) {
		normalcss.push(
			( attributes.companyNameColor || convertedStyle.companyName ) 
			? `.wpmozo_testimonial_author_company, .wpmozo_testimonial_author_company a{
					${attributes.companyNameColor ? `color: ${attributes.companyNameColor};` : ''}
					${convertedStyle.companyName || ''}
				}`
			: ''
		);
		hovercss.push(
			( attributes.companyNameHoverColor || convertedStyle.companyNameHover ) 
			? `.wpmozo_testimonial_author_company:hover${isEditor('.wpmozo_testimonial_author_company')}, .wpmozo_testimonial_author_company:hover a${isEditor('.wpmozo_testimonial_author_company a')}{
					${attributes.companyNameHoverColor ? `color: ${attributes.companyNameHoverColor};` : ''}
					${convertedStyle.companyNameHover || ''}
				}`
			: ''
		);
	}

	if ( attributes.showRating ) {
		
		normalcss.push(attributes.starFontSize ? `.wpmozo_testimonial_star{ font-size: ${attributes.starFontSize}px; }` : '');
		
		normalcss.push(attributes.starFilledColor ? `.wpmozo_testimonial_filled_star, .wpmozo_testimonial_half_filled_star{ color: ${attributes.starFilledColor}; }` : '');
		
		normalcss.push(attributes.starEmptyColor ? `.wpmozo_testimonial_empty_star{ color: ${attributes.starEmptyColor}; }` : '');
		
	}

	// Opening quote.
	if ( attributes.showOpenQuoteIcon ) {
		normalcss.push(
			( attributes.openQuoteIconSize || attributes.openQuoteIconColor ) 
			? `.wpmozo_testimonial_opening_quote_icon svg{
					${attributes.openQuoteIconSize ? `width: ${attributes.openQuoteIconSize}px;` : ''}
					${attributes.openQuoteIconColor ? `fill: ${attributes.openQuoteIconColor};` : ''}
				}`
			: ''
		);
	}
	// Closing quote.
	if ( attributes.showCloseQuoteIcon ) {
		normalcss.push(
			( attributes.closeQuoteIconSize || attributes.closeQuoteIconColor ) 
			? `.wpmozo_testimonial_closing_quote_icon svg{
					${attributes.closeQuoteIconSize ? `width: ${attributes.closeQuoteIconSize}px;` : ''}
					${attributes.closeQuoteIconColor ? `fill: ${attributes.closeQuoteIconColor};` : ''}
				}`
			: ''
		);
	}

	// Meta.
	normalcss.push('layout1' === attributes.layout && attributes.metaSeparatorColor ? `.wpmozo_testimonial_meta{ border-color: ${attributes.metaSeparatorColor} !important; }` : '');
	
	normalcss.push(
		( attributes.testimonialBGGradient || attributes.testimonialBackground || convertedStyle.testimonial )
		? `.wpmozo_testimonial_slide{
			${attributes.testimonialBGGradient ? `background: ${attributes.testimonialBGGradient};` : ''}
			${attributes.testimonialBackground && !attributes.testimonialBGGradient ? `background-color: ${attributes.testimonialBackground};` : ''}
			${convertedStyle.testimonial || ''}
			}`
		: ''
	);
		
	if ( attributes.showArrows ) {
		normalcss.push(
			( attributes.arrowBackground || attributes.arrowColor || convertedStyle.arrow ) 
			? `.swiper-button-next, .swiper-button-prev{
				${attributes.arrowBackground ? `background-color: ${attributes.arrowBackground};` : ''}
				${attributes.arrowColor ? `color: ${attributes.arrowColor};` : ''}
				${convertedStyle.arrow || ''}
				}`
				: ''
		);
		
		normalcss.push(attributes.arrowIconSize ? `.wpmozo_swiper_wrapper .swiper-button-next:before,
		.wpmozo_swiper_wrapper .swiper-button-prev:before{
			${attributes.arrowIconSize ? `font-size: ${attributes.arrowIconSize}px;` : ''}
		}` : '');
		if ( attributes.showArrowOnHover ) {
			normalcss.push(
				`.swiper-button-next, .swiper-button-prev{
					visibility: hidden; opacity: 0; transition: all 300ms ease;
				}
				.wpmozo_swiper_wrapper:hover .swiper-button-next,.wpmozo_swiper_wrapper:hover .swiper-button-prev{
								visibility: visible; opacity: 1;
							}
				.wpmozo_swiper_wrapper:hover .swiper-button-next.swiper-button-disabled,.wpmozo_swiper_wrapper:hover .swiper-button-prev.swiper-button-disabled{
								opacity: 0.35;
							}
				.wpmozo_arrows_outside .swiper-button-prev{ left: 50px; }
				.wpmozo_arrows_outside .swiper-button-next{ right: 50px; }
				.wpmozo_swiper_wrapper:hover .wpmozo_arrows_outside .swiper-button-prev{ left: 0; }
				.wpmozo_swiper_wrapper:hover .wpmozo_arrows_outside .swiper-button-next{ right: 0; }
				.wpmozo_arrows_inside .swiper-button-prev{ left: -50px; }
				.wpmozo_arrows_inside .swiper-button-next{ right: -50px; }
				.wpmozo_swiper_wrapper:hover .wpmozo_arrows_inside .swiper-button-prev{ left: 0; }
				.wpmozo_swiper_wrapper:hover .wpmozo_arrows_inside .swiper-button-next{ right: 0; }`
			);
		}
	}

	// Control dot color.
	if ( attributes.showControlDot ) {
		normalcss.push(attributes.controlDotColorInactive && 'transparent_dot' != attributes.controlDotStyle
			? `.swiper-pagination-bullet{
					background: ${attributes.controlDotColorInactive};
				}` 
			: `.transparent_dot .swiper-pagination-bullet{
					border-color: ${attributes.controlDotColorInactive} !important;
				}`
		);
		
		normalcss.push(attributes.controlDotColorActive && 'transparent_dot' != attributes.controlDotStyle
			? `.swiper-pagination-bullet-active{
					background: ${attributes.controlDotColorActive};
				}` 
			: `.transparent_dot .swiper-pagination-bullet-active{
					border-color: ${attributes.controlDotColorActive} !important;border-width: 2px;border-style: solid;background: transparent;
				}`
		);
		
		normalcss.push('stretched_dot' === attributes.controlDotStyle && attributes.transDuration ? `.stretched_dot .swiper-pagination-bullet{ transition: all ${attributes.transDuration}ms ease; }` : '' );
	}
	normalcss.push(attributes.enableCoverflowShadow && attributes.coverflowShadowColor
		? `.swiper-3d .swiper-slide-shadow-left{
				background-image: linear-gradient( to left, ${attributes.coverflowShadowColor}, rgba(0,0,0,0) );
			}.swiper-3d .swiper-slide-shadow-right{
				background-image: linear-gradient( to right, ${attributes.coverflowShadowColor}, rgba(0,0,0,0) );
			}` 
		: `.swiper-3d .swiper-slide-shadow-left, .swiper-3d .swiper-slide-shadow-right{
				background-image: none;
			}`
	);

	normalcss.push(convertedStyle.container ? `.swiper-container{ ${convertedStyle.container} }` : '' );

	normalcss.push(attributes.enableLinearTrans ? `.swiper-wrapper{ transition-timing-function : linear !important; }` : '' );

	const hasStyles = normalcss.some(Boolean) || hovercss.some(Boolean);
	
	let styles = hasStyles ? `#block-${attributes.ID} {${normalcss.filter(Boolean).join('\n')} ${hovercss.filter(Boolean).join('\n')}}` : '';
	
	styles += cssExtras.some(Boolean) ? cssExtras.filter(Boolean).join('\n') : '';
	styles = styles.replace(/\s+/g, ' ')
	.replace(/\s*{\s*/g, '{')
	.replace(/\s*}\s*/g, '}')
	.replace(/\s*:\s*/g, ':')
	.replace(/\s*;\s*/g, ';')
	.replace(/\s*,\s*/g, ',')    
	.trim();
	return styles;
}

export default generateDynamicStyle;