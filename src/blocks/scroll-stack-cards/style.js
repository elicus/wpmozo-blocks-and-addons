import {convertInlineStyleStr, wpmozo_is_empty} from '../../common/utils.js';

const generateDynamicStyle = ({ attributes, isEdit }) => {

	const toConvertStyles = [
		"title",
		"description",
		"image",
		"imageWrap",
		"contentWrap",
		"cardItem",
		"button",
		"icon"
	];
    let convertedStyle = convertInlineStyleStr( toConvertStyles, attributes ),
    	textColorStyle = ( 'dark' === attributes.textColor ) ? '#666' : '#fff';;

	let normalcss = [],
	hovercss = [],
	cssExtras = [];
	const isEditor = (selector) => {return isEdit ? `,&.is_hover ${selector}` : ''};

	normalcss.push(
		( attributes.textAlignment || textColorStyle )
		? `${ attributes.textAlignment ? `text-align: ${attributes.textAlignment};` : ''}
			${ textColorStyle ? `color: ${textColorStyle};` : ''}`
		: ''
	);
	
	normalcss.push(
		( attributes.titleColor || attributes.titleAlign || convertedStyle.title )
		? `.wpmozo-bna-scroll-stack-cards-title{
				${attributes.titleColor ? `color: ${attributes.titleColor};` : ''}
				${attributes.titleAlign ? `text-align: ${attributes.titleAlign};` : ''}
				${convertedStyle.title || ''}
		  }`
		: ''
	);

	normalcss.push(
		( attributes.descriptionColor || attributes.descriptionAlign || convertedStyle.description )
		? `.wpmozo-bna-scroll-stack-cards-content{
				${attributes.descriptionColor ? `color: ${attributes.descriptionColor};` : ''}
				${attributes.descriptionAlign ? `text-align: ${attributes.descriptionAlign};` : ''}
				${convertedStyle.description || ''}
		  }`
		: ''
	);

	normalcss.push(
		( attributes.iconColor || attributes.iconFontSize )
		? `.wpmozo-bna-scroll-stack-cards-icon-wrapper .icon-wrapper i{
				${attributes.iconColor ? `color: ${attributes.iconColor};` : ''}
				${attributes.iconFontSize ? `font-size: ${attributes.iconFontSize};` : ''}
		  }`
		: ''
	);

	normalcss.push( convertedStyle.icon ? `.wpmozo-bna-scroll-stack-cards-icon-wrapper{ ${convertedStyle.icon} }` : '');
	
	normalcss.push( convertedStyle.imageWrap ? `.wpmozo-bna-scroll-stack-cards-image-wrapper{ ${convertedStyle.imageWrap} }` : '');
	
	normalcss.push( convertedStyle.image ? `.wpmozo-bna-scroll-stack-cards-image { ${convertedStyle.image} }` : '');
	
	if ( 'vertical' === attributes.layout  ) {
		normalcss.push( attributes.imageSize ? `.wpmozo-bna-scroll-stack-cards-image-wrapper{ flex: 0 0 ${attributes.imageSize} !important; }` : '');
	}

	// Content wrapper style
	let background = ! wpmozo_is_empty( attributes.contentWrapBackground ) ? `background-color: ${attributes.contentWrapBackground};` : '';
	if ( attributes.contentWrapUseBackgroundImage){ 
		if( ! wpmozo_is_empty( attributes.contentWrapBackgroundImage ) ) {
			background = ! wpmozo_is_empty( attributes.contentWrapBackground ) ? `background: url('${attributes.contentWrapBackgroundImage}'),${attributes.contentWrapBackground};` : `background: url('${attributes.contentWrapBackgroundImage}');`;
		}
	}
	normalcss.push(
		( attributes.contentWrapMarginRight || attributes.contentWrapBackground || attributes.contentWrapBackgroundImage || attributes.contentWrapItemBGImageSize || attributes.contentWrapItemBGImagePosition || attributes.contentWrapItemBGImageRepeat || attributes.contentWrapItemBGImageBlend ||convertedStyle.contentWrap )
		? `.wpmozo-bna-scroll-stack-cards-content-wrapper{
				${'vertical' === attributes.layout && attributes.contentWrapMarginRight ? `margin-right: ${attributes.contentWrapMarginRight};` : ''}	
				${background}
				${attributes.contentWrapItemBGImageSize ? `background-size: ${attributes.contentWrapItemBGImageSize};` : '' }
				${attributes.contentWrapItemBGImagePosition ? `background-position: ${attributes.contentWrapItemBGImagePosition.replace(/_/g, ' ')};` : '' }
				${attributes.contentWrapItemBGImageRepeat ? `background-repeat: ${attributes.contentWrapItemBGImageRepeat};` : '' }
				${attributes.contentWrapItemBGImageBlend ? `background-blend-mode: ${attributes.contentWrapItemBGImageBlend};` : '' }
				${convertedStyle.contentWrap || ''}
		  }`
		: ''
	);

	//Card Item style
	normalcss.push(convertedStyle.cardItem ? `.wp-block-wpmozo-scroll-stack-cards-item{${convertedStyle.cardItem}}`: '');
	
	normalcss.push('horizontal' === attributes.layout && attributes.cardItemWidth ? `.wpmozo-bna-scroll-stack-cards-item-inner { width: ${attributes.cardItemWidth}px; `: '');

	normalcss.push(
		( attributes.buttonTextColor || attributes.buttonBackgroundColor || convertedStyle.button )
		? `.wpmozo-bna-button{
				${attributes.buttonTextColor ? `color: ${attributes.buttonTextColor};` : ''}
				${attributes.buttonBackgroundColor ? `background-color: ${attributes.buttonBackgroundColor};` : ''}
				${convertedStyle.button || ''}
		  }`
		: ''
	);
	normalcss.push(attributes.buttonAlignment ? `.wpmozo-bna-button-wrap{ text-align: ${attributes.buttonAlignment}; }`: '');
	normalcss.push(attributes.buttonIconColor ? `.wpmozo-bna-button i{ color: ${attributes.buttonIconColor}; }`: '');

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