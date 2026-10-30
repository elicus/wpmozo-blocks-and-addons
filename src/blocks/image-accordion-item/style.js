import {convertInlineStyleStr, wpmozo_is_empty} from '../../common/utils.js';

const generateDynamicStyle = ({ attributes }) => {

	const toConvertStyles = [
		"title",
		"titleHover",
		"description",
		"descriptionHover",
		"icon",
		"iconHover",
		"button",
		"buttonHover",
		"contentWrapper",
		"Container"
	];
    let convertedStyle = convertInlineStyleStr( toConvertStyles, attributes ),
    	parentAtts = attributes.parentAtts;

    let {
    	normalAccordionBackground,
    	normalUseBackgroundImage,
    	normalBackgroundImage,
    	activeAccordionBackground,
    	activeUseBackgroundImage,
    	activeBackgroundImage,
    	textAlignment,
    	textColor,
    	titleColor,
    	titleAlign,
    	descriptionColor,
		descriptionAlign,
		iconColor,
		iconFontSize,
		buttonTextColor,
		buttonBackgroundColor,
		buttonAlignment,
		iconShapBackground,
		itemIcon,
		buttonIconColor
    } = attributes;


	let normalcss = [],
		hovercss = [],
		cssExtras = [];
	const isEditor = (selector) => {return isEdit ? `,&.is_hover ${selector}` : ''};

	if ( normalUseBackgroundImage && ! wpmozo_is_empty( normalBackgroundImage ) ) {
		let bgColor = ! wpmozo_is_empty( normalAccordionBackground ) ? ', ' + normalAccordionBackground : '';
		normalcss.push(`background: url('${normalBackgroundImage}')${bgColor};`);
	}
	if ( ! normalUseBackgroundImage && ! wpmozo_is_empty( normalAccordionBackground ) ) {
		normalcss.push(`background: ${normalAccordionBackground};`);
	}
	normalcss.push(`
		${attributes.normalItemBGImageSize ? `background-size: ${attributes.normalItemBGImageSize};` : '' }
		${attributes.normalItemBGImagePosition ? `background-position: ${attributes.normalItemBGImagePosition.replace(/_/g, ' ')};` : '' }
		${attributes.normalItemBGImageRepeat ? `background-repeat: ${attributes.normalItemBGImageRepeat};` : '' }
		${attributes.normalItemBGImageBlend ? `background-blend-mode: ${attributes.normalItemBGImageBlend};` : '' }
	`);

	normalcss.push(
		( convertedStyle.contentWrapper || convertedStyle.Container ) 
		? `.wpmozo-bna-image-accordion-item-content-wrapper {
			${convertedStyle.contentWrapper || ''}
			${convertedStyle.Container || ''}
		}`
		: ''
	);

	normalcss.push(
		( titleColor || titleAlign || convertedStyle.title )
		? `.wpmozo-bna-image-accordion-item-title {
			${titleColor ? `color: ${titleColor};` : ''}
			${titleAlign ? `text-align: ${titleAlign};` : ''}
			${convertedStyle.title || ''}
		}`
		: ''
	);

	normalcss.push(
		( descriptionColor || descriptionAlign || convertedStyle.description )
		? `.wpmozo-bna-image-accordion-item-desc {
			${descriptionColor ? `color: ${descriptionColor};` : ''}
			${descriptionAlign ? `text-align: ${descriptionAlign};` : ''}
			${convertedStyle.description || ''}
		}`
		: ''
	);

	normalcss.push( convertedStyle.icon ? `.wpmozo-bna-image-accordion-item-icon { ${convertedStyle.icon}}` : '' );

	normalcss.push(
		( iconColor || iconFontSize )
		? `.wpmozo-bna-image-accordion-item-icon .icon-wrapper i{
			${iconColor ? `color: ${iconColor};` : ''}
			${iconFontSize ? `font-size: ${iconFontSize};` : ''}
		}`
		: ''
	);

	normalcss.push(
		( buttonTextColor || buttonBackgroundColor || convertedStyle.button )
		? `.wpmozo-bna-button{
			${buttonTextColor ? `color: ${buttonTextColor};` : ''}
			${buttonBackgroundColor ? `background-color: ${buttonBackgroundColor};` : ''}
			${convertedStyle.button || ''}
		}`
		: ''
	);

	normalcss.push( buttonAlignment ? `.wpmozo-bna-button-wrap{ text-align: ${buttonAlignment}; }` : '' );
	
	normalcss.push( buttonIconColor ? `.wpmozo-bna-button i{ color: ${buttonIconColor}; }` : '' );

	if ( ! wpmozo_is_empty( itemIcon ) ) {
		normalcss.push( attributes.iconColor ? `.wpmozo-bna-image-accordion-item-icon i{ color: ${attributes.iconColor}; }` : '' );

		if ( attributes.styleIcon ){
			normalcss.push( attributes.iconShapBackground ? `.wpmozo-bna-icon-shape-circle,
			.wpmozo-bna-icon-shape-square,
			.wpmozo-bna-icon-hexagon {
				background-color: ${attributes.iconShapBackground};
			}` : '' );
		}

	}

	cssExtras.push( textAlignment ? `#block-${attributes.ID}.wp-block-wpmozo-image-accordion-item {
			text-align: ${textAlignment};
		}` : '' 
	);

	if ( 'global' != textColor ) {
		let textColorStyle = ( 'dark' === textColor ) ? '#666' : '#fff';
		cssExtras.push(`#block-${attributes.ID}.wp-block-wpmozo-image-accordion-item, 
			#block-${attributes.ID}.wp-block-wpmozo-image-accordion-item h1, h2, h3, h4, h5, h6, a {
				color: ${textColorStyle};
			}`
		);
	}

	if ( activeUseBackgroundImage && ! wpmozo_is_empty( activeBackgroundImage ) ) {
		let bgColor = ! wpmozo_is_empty( activeAccordionBackground ) ? ', ' + activeAccordionBackground : '';
		cssExtras.push(`#block-${attributes.ID}.wpmozo-bna-active-image-accordion-item {
				background: url('${activeBackgroundImage}')${bgColor};
			}`
		);
	}
	if ( ! activeUseBackgroundImage && ! wpmozo_is_empty( activeAccordionBackground ) ) {
		cssExtras.push(`#block-${attributes.ID}.wpmozo-bna-active-image-accordion-item {
				background: ${activeAccordionBackground};
			}`
		);
	}
	normalcss.push(
		( attributes.activeItemBGImageSize || attributes.activeItemBGImagePosition || attributes.activeItemBGImageRepeat || attributes.activeItemBGImageBlend )
			? `#block-${attributes.ID}.wpmozo-bna-active-image-accordion-item {
				${attributes.activeItemBGImageSize ? `background-size: ${attributes.activeItemBGImageSize};` : ''}
				${attributes.activeItemBGImagePosition ? `background-position: ${attributes.activeItemBGImagePosition.replace(/_/g, ' ')};` : ''}
				${attributes.activeItemBGImageRepeat ? `background-repeat: ${attributes.activeItemBGImageRepeat};` : ''}
				${attributes.activeItemBGImageBlend ? `background-blend-mode: ${attributes.activeItemBGImageBlend};` : ''}
			}`
			: ''
	);
	hovercss.push(
		( attributes.titleHoverColor || convertedStyle.titleHover ) 
		? `.wpmozo-bna-image-accordion-item-title:hover{
				${ attributes.titleHoverColor ? `color: ${attributes.titleHoverColor};` : '' }
				${ convertedStyle.titleHover || '' }
			}`
		: ''
	);
	hovercss.push(
		( attributes.descriptionHoverColor || convertedStyle.descriptionHover ) 
		? `.wpmozo-bna-image-accordion-item-desc:hover{
				${ attributes.descriptionHoverColor ? `color: ${attributes.descriptionHoverColor};` : '' }
				${ convertedStyle.descriptionHover || '' }
			}`
		: ''
	);
	hovercss.push(
		( attributes.iconHoverColor || convertedStyle.iconHover ) 
		? `.wpmozo-bna-image-accordion-item-icon .icon-wrapper i:hover{
				${ attributes.iconHoverColor ? `color: ${attributes.iconHoverColor};` : '' }
				${ convertedStyle.iconHover || '' }
			}`
		: ''
	);
	if ( attributes.styleIcon && attributes.iconHoverShapBackground ) {
		hovercss.push(`
			.wpmozo-bna-icon-shape-circle:hover,
			.wpmozo-bna-icon-shape-square:hover,
			.wpmozo-bna-icon-hexagon:hover {
				background-color: ${attributes.iconHoverShapBackground};
			}
		`);
	}
	hovercss.push(
		( attributes.buttonHoverTextColor || attributes.buttonHoverBackgroundColor || convertedStyle.buttonHover ) 
		? `.wpmozo-bna-button:hover{
				${ attributes.buttonHoverTextColor ? `color: ${attributes.buttonHoverTextColor};` : '' }
				${ attributes.buttonHoverBackgroundColor ? `background-color: ${attributes.buttonHoverBackgroundColor};` : '' }
				${ convertedStyle.buttonHover || '' }
			}`
		: ''
	);
	const hasStyles = normalcss.some(Boolean) || hovercss.some(Boolean);
	
	let styles = hasStyles ? `.wp-block-wpmozo-image-accordion #block-${attributes.ID}{${normalcss.filter(Boolean).join('\n')} ${hovercss.filter(Boolean).join('\n')}}` : '';
	
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