import {convertInlineStyleStr, wpmozo_is_empty} from '../../common/utils.js';

const generateDynamicStyle = ({ attributes }) => {

	const toConvertStyles = [
		"title",
		"description",
		"icon",
		"button"
	];
    let convertedStyle = convertInlineStyleStr( toConvertStyles, attributes );

    let { 
    	inactiveState,
    	accordionOrientation,
    	activeAccordionSize,
    	accordionTransitionDuration,
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
		buttonIconColor,
		buttonIconHover,
		buttonIconPlacement,
		accordionSpacing
    } = attributes,
    flexDirection = ( 'horizontal' === accordionOrientation ) ? 'row' : 'column',
    textColorStyle = ( 'dark' === textColor ) ? '#666' : '#fff';

	let normalcss = [],
		hovercss = [],
		cssExtras = [];
	const isEditor = (selector) => {return isEdit ? `,&.is_hover ${selector}` : ''};
	
	normalcss.push(
		( flexDirection || attributes.accordionHeight ) 
		? `.wpmozo-bna-image-accordion-wrapper .block-editor-block-list__layout {
				${ flexDirection ? `flex-direction: ${flexDirection};` : '' }
				${ attributes.accordionHeight ? `height: ${attributes.accordionHeight};` : '' }
			}`
		: ''
	);

	normalcss.push( flexDirection ? `.wpmozo-bna-image-accordion-wrapper {flex-direction: ${flexDirection};}`: '' );
	
	normalcss.push( activeAccordionSize ? `.wpmozo-bna-image-accordion-wrapper .wpmozo-bna-active-image-accordion-item { flex: ${activeAccordionSize} 0 auto !important; }`: '' );
	
	normalcss.push( attributes.accordionHeight ? `.wpmozo-bna-image-accordion-wrapper { height: ${attributes.accordionHeight}; }`: '' );

	normalcss.push( accordionTransitionDuration ? `.wp-block-wpmozo-image-accordion-item { transition-duration: ${accordionTransitionDuration}ms !important; }`: '' );

	normalcss.push(
		( titleColor || titleAlign || convertedStyle.title ) 
		? `.wpmozo-bna-image-accordion-item-title {
				${ titleColor ? `color: ${titleColor};` : '' }
				${ titleAlign ? `text-align: ${titleAlign};` : '' }
				${ convertedStyle.title || '' }
			}`
		: ''
	);

	normalcss.push(
		( descriptionColor || descriptionAlign || convertedStyle.description ) 
		? `.wpmozo-bna-image-accordion-item-desc {
				${ descriptionColor ? `color: ${descriptionColor};` : '' }
				${ descriptionAlign ? `text-align: ${descriptionAlign};` : '' }
				${ convertedStyle.description || '' }
			}`
		: ''
	);

	normalcss.push(
		( iconColor || iconFontSize ) 
		? `.wpmozo-bna-image-accordion-item-icon .icon-wrapper i{
				${ iconColor ? `color: ${iconColor};` : '' }
				${ iconFontSize ? `font-size: ${iconFontSize};` : '' }
			}`
		: ''
	);

	normalcss.push(
		( buttonTextColor || buttonBackgroundColor || convertedStyle.button ) 
		? `.wpmozo-bna-button{
				${ buttonTextColor ? `color: ${buttonTextColor};` : '' }
				${ buttonBackgroundColor ? `background-color: ${buttonBackgroundColor};` : '' }
				${ convertedStyle.button || '' }
			}`
		: ''
	);

	normalcss.push( convertedStyle.icon ? `.wpmozo-bna-image-accordion-item-icon { ${convertedStyle.icon} }`: '' );
	
	normalcss.push( buttonAlignment ? `.wpmozo-bna-button-wrap{ text-align: ${buttonAlignment}; }`: '' );

	normalcss.push( buttonIconColor ? `.wpmozo-bna-button i{ color: ${buttonIconColor}; }`: '' );
	
	! wpmozo_is_empty(textAlignment) && (normalcss.push( `text-align: ${textAlignment};`));
	
	normalcss.push( textColorStyle ? `color: ${textColorStyle};h1, h2, h3, h4, h5, h6, a { color: ${textColorStyle}; }`: '' );

	if ( ! wpmozo_is_empty( accordionSpacing ) ) {
		if ( 'horizontal' === accordionOrientation ) {
			normalcss.push(
				( accordionSpacing ) 
				? `.wp-block-wpmozo-image-accordion-item{
						${ accordionSpacing ? `margin-right: ${accordionSpacing} !important;` : '' }
					}
					.wp-block-wpmozo-image-accordion-item:last-of-type, 
					.block-editor-block-list__layout .wp-block-wpmozo-image-accordion-item:not(:has(~ .wp-block-wpmozo-image-accordion-item)){
						margin-right: 0px !important;
					}`
				: ''
			);
		} else {
			normalcss.push(
				accordionSpacing
					? `.wp-block-wpmozo-image-accordion-item{ margin-bottom: ${accordionSpacing} !important; }.wp-block-wpmozo-image-accordion-item:last-of-type, .block-editor-block-list__layout .wp-block-wpmozo-image-accordion-item:not(:has(~ .wp-block-wpmozo-image-accordion-item)){ margin-bottom: 0px !important; }`
					: ''
			);
		}
	}

	if ( ! wpmozo_is_empty( inactiveState ) ) {
		normalcss.push(
			`.wpmozo-bna-image-accordion-item-content-wrapper {
				visibility: visible !important;
				opacity: 1 !important;
			}
			.wp-block-wpmozo-image-accordion-item:not(.wpmozo-bna-active-image-accordion-item) .wpmozo-bna-image-accordion-item-icon, 
			.wp-block-wpmozo-image-accordion-item:not(.wpmozo-bna-active-image-accordion-item) .wpmozo-bna-image-accordion-item-title, 
			.wp-block-wpmozo-image-accordion-item .wpmozo-bna-image-accordion-item-desc, 
			.wp-block-wpmozo-image-accordion-item .wpmozo-bna-button-wrap {
				display: none;
			}
			.wpmozo-bna-active-image-accordion-item .wpmozo-bna-image-accordion-item-desc, 
			.wpmozo-bna-active-image-accordion-item .wpmozo-bna-button-wrap {
				display: block !important;
			}`
		);
		if ( inactiveState.includes( 'title' ) ) {
			normalcss.push(
				`.wp-block-wpmozo-image-accordion-item .wpmozo-bna-image-accordion-item-title {
					display: block !important;
				}`
			);
		}

		if ( inactiveState.includes( 'icon' ) ) {
			normalcss.push(
				`.wp-block-wpmozo-image-accordion-item .wpmozo-bna-image-accordion-item-icon {
					display: block !important;
				}`
			);
		}
	}

	if ( buttonIconHover ) {
		normalcss.push( `.wpmozo-bna-btn i { opacity: 0 !important; }.wpmozo-bna-btn:hover i { opacity: 1 !important; }` );
		
		if ( 'after' === buttonIconPlacement ) {
			normalcss.push( `.wpmozo-bna-btn i {margin-left: -15px !important;}.wpmozo-bna-btn:hover i {margin-left: 0px !important;}` );
		}else{
			normalcss.push( `.wpmozo-bna-btn i {margin-right: -15px !important;}.wpmozo-bna-btn:hover i {margin-right: 0px !important;}` );
		}
	}
	const hasStyles = normalcss.some(Boolean) || hovercss.some(Boolean);
	
	let styles = hasStyles ? `#block-${attributes.ID}.wp-block-wpmozo-image-accordion{${normalcss.filter(Boolean).join('\n')} ${hovercss.filter(Boolean).join('\n')}}` : '';
	
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