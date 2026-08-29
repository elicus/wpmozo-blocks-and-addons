// style.js
import { convertInlineStyleStr, convertInlineStyle } from '../../common/utils.js';

const generateDynamicStyle = ( { attributes, clientId, isEdit } ) => {

	const toConvertStyles = [
		'body',
		'bodyHover',
		'title',
		'titleHover',
		'categories',
		'categoriesHover',
		'content',
		'contentHover',
		'excerpt',
		'excerptHover',
		'readMore',
		'readMoreHover',
		'projectUrl',
		'projectUrlHover',
		'featuredImage',
		'arrow',
		'portfolio',
		'portfolioHover',
		'container',
	];
	let convertedStyle = convertInlineStyleStr( toConvertStyles, attributes );

	const blockId = clientId || attributes.ID;
	let normalcss = [],
	    hovercss  = [],
	    cssExtras = [];
	const isEditor = (selector) => {return isEdit ? `,&.is_hover ${selector}` : ''};

	normalcss.push(
		attributes.globalTextAlign 
        ? `text-align: ${attributes.globalTextAlign};` 
		: ''
	);
	normalcss.push(
		( attributes?.containerWidth || attributes?.containerMaxWidth )
        ? `${attributes.containerWidth ? `width: ${attributes.containerWidth}%;` : ''}
        	${attributes.containerMaxWidth ? `max-width: ${attributes.containerMaxWidth}px;` : ''}
			margin-left: auto; margin-right: auto;
			`
		: ''
	);
	// Featured Image.
	if ( attributes.showFeaturedImage ) {
		if('layout1' === attributes.layout){
			normalcss.push(
			( attributes.featuredImageWidth || attributes.featuredImageHeight || convertedStyle.featuredImage )
				? `.wpmozo_portfolio_layout.layout1 .wpmozo_portfolio_slider_image_wrap{
						${attributes.featuredImageWidth ? `width: ${attributes.featuredImageWidth}px !important; max-width: 100%;`: ''}
						${attributes.featuredImageHeight ?`height: ${attributes.featuredImageHeight}px !important;` : ''}
						${convertedStyle.featuredImage || ''}
					}`
				: ''
			);
			normalcss.push(
			( attributes.featuredImageWidth || attributes.featuredImageHeight || attributes.featuredImageObjectFit )
				? `.wpmozo_portfolio_layout.layout1 .wpmozo_portfolio_slider_image_wrap img{
						${attributes.featuredImageWidth ? `width: ${attributes.featuredImageWidth}px !important; max-width: 100%;`: ''}
						${attributes.featuredImageHeight ?`height: ${attributes.featuredImageHeight}px !important;`: ''}
						${attributes.featuredImageObjectFit ?`object-fit: ${attributes.featuredImageObjectFit} !important;` : ''}
					}`
				: ''
			);
		}else if('layout2' === attributes.layout){
			normalcss.push(
				attributes.featuredImageObjectFit
				? `.wpmozo_portfolio_layout.layout2 .wpmozo_portfolio_slider_image_wrap img{
						object-fit: ${attributes.featuredImageObjectFit};
					}`
				: ''
			);
		}
	}
	// Title.
	if ( attributes.showTitle ) {
		normalcss.push(
			( attributes.titleColor || convertedStyle.title )
			? `	.wpmozo_portfolio_slider_title, .wpmozo_portfolio_slider_title a{
					${attributes.titleColor ?`color: ${attributes.titleColor};`: ''}
					${convertedStyle.title || ''}
				}`
			: ''
		);
		hovercss.push(
			( attributes.titleHoverColor || convertedStyle.titleHover )
			? `.wpmozo_portfolio_slider_title:hover${isEditor('.wpmozo_portfolio_slider_title')}, .wpmozo_portfolio_slider_title:hover a${isEditor('.wpmozo_portfolio_slider_title a')}{
					${attributes.titleHoverColor ?`color: ${attributes.titleHoverColor};` : ''}
					${convertedStyle.titleHover || ''}
				}`
			: ''
		);
	}
	// Categories.
	normalcss.push(
		(attributes.categoriesBackground || convertedStyle.categories)
		? `	.wpmozo_portfolio_slider_cat{
				${attributes.categoriesBackground ? `background-color: ${attributes.categoriesBackground};` : ''}
				${convertInlineStyle({
					padding: attributes.categoriespadding,
					margin: attributes.categoriesmargin,
					border: attributes.categoriesborder,
					borderRadius: attributes.categoriesborderRadius,
				})}
			}`
		: ''
	);
	hovercss.push( 
		(attributes.categoriesHoverBackground || convertedStyle.categoriesHover)
		? `	.wpmozo_portfolio_slider_cat:hover${isEditor('.wpmozo_portfolio_slider_cat')}{
				${attributes.categoriesHoverBackground ? `background-color: ${attributes.categoriesHoverBackground};` : ''} 
				${convertInlineStyle({
					padding: attributes.categoriesHoverpadding,
					border: attributes.categoriesHoverborder,
					borderRadius: attributes.categoriesHoverborderRadius,
				})}
			}` : '' );
	
	normalcss.push(
		( attributes.categoriesColor || convertedStyle.categories )
		? `	.wpmozo_portfolio_slider_cat a{
				${attributes.categoriesColor ? `color: ${attributes.categoriesColor};` : ''}
				${convertInlineStyle({
					FontSize: attributes.categoriesFontSize,
					LetterSpacing: attributes.categoriesLetterSpacing,
					Decoration: attributes.categoriesDecoration,
					LetterCase: attributes.categoriesLetterCase,
					LineHeight: attributes.categoriesLineHeight,
					FontAppearance: attributes.categoriesFontAppearance,
				})}
			}`
		: ''
	);
	hovercss.push( 
		( attributes.categoriesHoverColor || convertedStyle.categoriesHover )
		? `	.wpmozo_portfolio_slider_cat:hover a${isEditor('.wpmozo_portfolio_slider_cat a')}{ 
			${attributes.categoriesHoverColor ? `color: ${attributes.categoriesHoverColor};` : ''} 
			${convertInlineStyle({
				FontSize: attributes.categoriesHoverFontSize,
				LetterSpacing: attributes.categoriesHoverLetterSpacing,
				Decoration: attributes.categoriesHoverDecoration,
				LetterCase: attributes.categoriesHoverLetterCase,
				LineHeight: attributes.categoriesHoverLineHeight,
				FontAppearance: attributes.categoriesHoverFontAppearance,
			})}
		}` 
		: '' );

	// Content.
	if ( attributes.showContent ) {
		normalcss.push(
			( attributes.contentColor || convertedStyle.content )
			? `	.wpmozo_portfolio_slider_content, .wpmozo_portfolio_slider_content p{
					${attributes.contentColor ? `color: ${attributes.contentColor};` : ''}
					${convertedStyle.content}
				}`
			: ''
		);
		hovercss.push(
			( attributes.contentHoverColor || convertedStyle.contentHover )
			? `	.wpmozo_portfolio_slider_content:hover${isEditor('.wpmozo_portfolio_slider_content')}, .wpmozo_portfolio_slider_content:hover p${isEditor('.wpmozo_portfolio_slider_content p')}{
					${attributes.contentHoverColor ? `color: ${attributes.contentHoverColor};` : ''}
					${convertedStyle.contentHover}
				}`
			: ''
		);
	}
	
	// Excerpt.
	if ( attributes.showExcerpt ) {
		normalcss.push(
			( attributes.excerptColor || convertedStyle.excerpt )
			? `	.wpmozo_portfolio_slider_excerpt, .wpmozo_portfolio_slider_excerpt p{
					${attributes.excerptColor ? `color: ${attributes.excerptColor};` : ''}
					${convertedStyle.excerpt}
				}`
			: ''
		);
		hovercss.push(
			( attributes.excerptHoverColor || convertedStyle.excerptHover )
			? `	.wpmozo_portfolio_slider_excerpt:hover${isEditor('.wpmozo_portfolio_slider_excerpt')}, .wpmozo_portfolio_slider_excerpt:hover p${isEditor('.wpmozo_portfolio_slider_excerpt p')}{
					${attributes.excerptHoverColor ? `color: ${attributes.excerptHoverColor};` : ''}
					${convertedStyle.excerptHover}
				}`
			: ''
		);
	}
	
	// Read More.
	if ( attributes.showReadMore ) {
		normalcss.push(
			( attributes.readMoreColor || attributes.readMoreBackground || convertedStyle.readMore )
			? `	.wpmozo_portfolio_slider_readmore{
					${attributes.readMoreColor ? `color: ${attributes.readMoreColor};` : ''}
					${attributes.readMoreBackground ? `background-color: ${attributes.readMoreBackground};` : ''}
					${convertedStyle.readMore}
				}`
			: ''
		);
		hovercss.push(
			( attributes.readMoreHoverColor || attributes.readMoreHoverBackground || convertedStyle.readMoreHover )
			? `	.wpmozo_portfolio_slider_readmore:hover${isEditor('.wpmozo_portfolio_slider_readmore')}{
					${attributes.readMoreHoverColor ? `color: ${attributes.readMoreHoverColor};` : ''}
					${attributes.readMoreHoverBackground ? `background-color: ${attributes.readMoreHoverBackground};` : ''}
					${convertedStyle.readMoreHover}
				}`
			: ''
		);
	}

	// Project URL.
	if ( attributes.showProjectUrl ) {
		normalcss.push(
			( attributes.projectUrlColor || attributes.projectUrlBackground || convertedStyle.projectUrl )
			? `.wpmozo_portfolio_slider_projecturl{
					${attributes.projectUrlColor ? `color: ${attributes.projectUrlColor};`: ''}
					${attributes.projectUrlBackground ?`background-color: ${attributes.projectUrlBackground};` : ''}
					${convertedStyle.projectUrl || ''}
				}`
			: ''
		);

		hovercss.push(
			( attributes.projectUrlHoverColor || attributes.projectUrlHoverBackground || convertedStyle.projectUrlHover )
			? `.wpmozo_portfolio_slider_projecturl:hover${isEditor('.wpmozo_portfolio_slider_projecturl')}{
					${attributes.projectUrlHoverColor ? `color: ${attributes.projectUrlHoverColor};`: ''}
					${attributes.projectUrlHoverBackground ?`background-color: ${attributes.projectUrlHoverBackground};` : ''}
					${convertedStyle.projectUrlHover || ''}
				}`
			: ''
		);
	}

	// Portfolio card wrapper.
	if ( attributes.layout === 'layout2' ) {
		normalcss.push(
			( attributes.overlayBGGradient || attributes.overlayBackground )
			? `.wpmozo_portfolio_slider_content_wrap{
					${attributes.overlayBGGradient ? `background: ${attributes.overlayBGGradient};`: ''}
					${attributes.overlayBackground ?`background-color: ${attributes.overlayBackground};` : ''}
				}`
			: ''
		);
		hovercss.push(
			( attributes.overlayBackgroundHover || attributes.overlayBGGradientHover )
			? `.wpmozo_portfolio_slider_content_wrap:hover${isEditor('.wpmozo_portfolio_slider_content_wrap')}{
					${attributes.overlayBackgroundHover ? `background-color: ${attributes.overlayBackgroundHover};`: ''}
					${attributes.overlayBGGradientHover ?`background: ${attributes.overlayBGGradientHover};` : ''}
				}`
			: ''
		);
		
		normalcss.push( convertedStyle.portfolio ? `.wpmozo_portfolio_slider_item_card{${convertedStyle.portfolio}}` : '' );
		hovercss.push( convertedStyle.portfolioHover ? `.wpmozo_portfolio_slider_item_card:hover${isEditor('.wpmozo_portfolio_slider_item_card')}{${convertedStyle.portfolioHover}}` : '' );
	
	} else {
		normalcss.push(
			( attributes.portfolioBGGradient || attributes.portfolioBackground || convertedStyle.portfolio )
			? `.wpmozo_portfolio_slider_item_card{
					${attributes.portfolioBGGradient ? `background: ${attributes.portfolioBGGradient};`: ''}
					${attributes.portfolioBackground ?`background-color: ${attributes.portfolioBackground};` : ''}
					${convertedStyle.portfolio || ''}
				}`
			: ''
		);
		hovercss.push(
			( attributes.portfolioBackgroundHover || attributes.portfolioBGGradientHover || convertedStyle.portfolioHover )
			? `.wpmozo_portfolio_slider_item_card:hover${isEditor('.wpmozo_portfolio_slider_item_card')}{
					${attributes.portfolioBackgroundHover ? `background-color: ${attributes.portfolioBackgroundHover};` : ''}
					${attributes.portfolioBGGradientHover ? `background: ${attributes.portfolioBGGradientHover};` : ''}
					${convertedStyle.portfolioHover || ''}
				}`
			: ''
		);
	}
	
	// Slider Navigation controls.
	if ( attributes.showArrows ) {
		const arrowBgSize = attributes.arrowBgSize ?? 36;
		const arrowIconSize = attributes.arrowIconSize ?? 24;
		const finalBgSize = Math.max( arrowBgSize, arrowIconSize );
		const enableBg = attributes.arrowEnableBg ?? true;

		normalcss.push(
			( attributes.arrowIconSize || attributes.arrowColor || ( enableBg && ( finalBgSize || attributes.arrowBackground || convertedStyle.arrow ) ) )
			? `.wpmozo_swiper_wrapper .wpmozo_portfolio_layout .swiper-button-next,
				.wpmozo_swiper_wrapper .wpmozo_portfolio_layout .swiper-button-prev{
					${attributes.arrowIconSize ? `font-size: ${attributes.arrowIconSize}px;`: ''}
					${attributes.arrowColor ?`color: ${attributes.arrowColor};`: ''}
					${enableBg ?`
						width: ${finalBgSize}px;
						height: ${finalBgSize}px;
						${attributes.arrowBackground ? `background-color: ${attributes.arrowBackground};` : ''}
						${convertedStyle.arrow || ''}
					` : ''}
				}`
			: ''
		);

		normalcss.push( attributes.arrowIconSize ? `.wpmozo_swiper_wrapper .swiper-button-next:after,
			.wpmozo_swiper_wrapper .swiper-button-prev:after{font-size: ${attributes.arrowIconSize}px;}` : '' );

		if ( attributes.showArrowOnHover ) {
			normalcss.push( `
				.swiper-button-next, .swiper-button-prev{
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
				.wpmozo_swiper_wrapper:hover .wpmozo_arrows_inside .swiper-button-next{ right: 0; }
			`);
		}
	}

	// Control dot color.
	if ( attributes.showControlDot ) {
		normalcss.push( attributes.controlDotColorInactive && 'transparent_dot' !== attributes.controlDotStyle ? `.swiper-pagination-bullet{ background: ${attributes.controlDotColorInactive}; }` : '' );
		
		normalcss.push( attributes.controlDotColorInactive && 'transparent_dot' === attributes.controlDotStyle ? `.transparent_dot .swiper-pagination-bullet{ border-color: ${attributes.controlDotColorInactive}; }` : '' );

		normalcss.push( attributes.controlDotColorActive && 'transparent_dot' !== attributes.controlDotStyle ? `.swiper-pagination-bullet-active{ background: ${attributes.controlDotColorActive}; }` : '' );
		
		normalcss.push( attributes.controlDotColorInactive && 'transparent_dot' === attributes.controlDotStyle ? `.transparent_dot .swiper-pagination-bullet-active{ border-color: ${attributes.controlDotColorActive} !important;border-width: 2px;border-style: solid;background: transparent;}` : '' );

		normalcss.push( 'stretched_dot' === attributes.controlDotStyle && attributes.transDuration ? `.stretched_dot .swiper-pagination-bullet{ transition: all ${attributes.transDuration}ms ease; }` : '' );
	}

	// Coverflow shadow.
	if ( attributes.enableCoverflowShadow ) {
		normalcss.push( `
			.swiper-3d .swiper-slide-shadow-left{
				background-image: linear-gradient( to left, ${attributes.coverflowShadowColor}, rgba(0,0,0,0) );
			}
			.swiper-3d .swiper-slide-shadow-right{
				background-image: linear-gradient( to right, ${attributes.coverflowShadowColor}, rgba(0,0,0,0) );
			}
		`);
	} else {
		normalcss.push( `
			.swiper-3d .swiper-slide-shadow-left, .swiper-3d .swiper-slide-shadow-right{
				background-image: none;
			}
		`);
	}

	// Slider container.
	normalcss.push(convertedStyle.container 
		? `.swiper-container{
			${convertedStyle.container}
		}`
		: ''
	);

	// Linear transition.
	if ( attributes.enableLinearTrans ) {
		normalcss.push( `.swiper-wrapper{ transition-timing-function : linear; }`);
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
}

export default generateDynamicStyle;