import { convertInlineStyleStr, wpmozo_get_text_shadow } from '../../common/utils.js';

const generateDynamicStyle = ( { attributes } ) => {
	const toConvertStyles = [
		'block',
		'title',
		'description',
		'button',
		'buttonHover',
		'element'
	];
	let convertedStyle = convertInlineStyleStr( toConvertStyles, attributes );

	let styles = `#block-${attributes.ID} {`;

	// Outer Block Container
	styles += `.wpmozo-bna-alert-box-wrap {
		${attributes.blockBGGradient ? `background: ${attributes.blockBGGradient};` : ''}
		${attributes.blockBackground ? `background: ${attributes.blockBackground};` : ''}
		${convertedStyle.block}
	}`;

	// Inner Alignment
	styles += `.wpmozo-bna-alert-box-inner {
		${attributes.globalVerticalAlign ? `align-items: ${attributes.globalVerticalAlign};` : ''}
	}`;

	// Image / Icon Wrapper
	styles += `.wpmozo-bna-alert-box-image-wrap {
		${attributes.elementBackground ? `background-color: ${attributes.elementBackground};` : ''}
		${attributes.elementWrapperSize ? `width: ${attributes.elementWrapperSize}px; height: ${attributes.elementWrapperSize}px; display: flex; align-items: center; justify-content: center;` : ''}
		${convertedStyle.element}
	}`;

	if ( attributes.useImage ) {
		styles += `.wpmozo-bna-alert-box-image-wrap.wpmozo-bna-used-image img {
			${attributes.imageWidth ? `width: ${attributes.imageWidth}px;` : ''}
			display: block;
		}`;
	} else {
		styles += `.wpmozo-bna-alert-box-image-wrap .wpmozo-bna-icon {
			${attributes.elementColor ? `color: ${attributes.elementColor};` : ''}
			${attributes.iconSize ? `font-size: ${attributes.iconSize}px;` : ''}
			display: block;
		}`;
	}

	// Title
	styles += `.wpmozo-bna-alert-box-title {
		${attributes.titleAlign ? `text-align: ${attributes.titleAlign};` : ''}
		${attributes.titleColor ? `color: ${attributes.titleColor};` : ''}
		${wpmozo_get_text_shadow(attributes, 'titleTextShadow') ? `text-shadow: ${wpmozo_get_text_shadow(attributes, 'titleTextShadow')};` : ''}
		${convertedStyle.title}
	}`;

	// Description
	styles += `.wpmozo-bna-alert-box-desc {
		${attributes.descriptionAlign ? `text-align: ${attributes.descriptionAlign};` : ''}
		${attributes.descriptionColor ? `color: ${attributes.descriptionColor};` : ''}
		${wpmozo_get_text_shadow(attributes, 'descriptionTextShadow') ? `text-shadow: ${wpmozo_get_text_shadow(attributes, 'descriptionTextShadow')};` : ''}
		${convertedStyle.description}
	}`;

	// Close Icon
	if ( attributes.showCloseButton ) {
		styles += `.wpmozo-bna-alert-box-close-btn .wpmozo-bna-icon {
			${attributes.closeIconColor ? `color: ${attributes.closeIconColor};` : ''}
			${attributes.closeIconSize ? `font-size: ${attributes.closeIconSize}px;` : ''}
			display: block;
		}`;
	}

	// Action Button
	if ( attributes.showButton ) {
		styles += `.wpmozo-bna-button-wrap {
			${attributes.buttonAlign ? `text-align: ${attributes.buttonAlign} !important;` : ''}
			${attributes.buttonContainerSize ? `width: ${attributes.buttonContainerSize}%;` : ''}
		}`;
		styles += `.wpmozo-bna-button-wrap .wpmozo-bna-button {
			${attributes.buttonBGGradient ? `background: ${attributes.buttonBGGradient};` : ''}
			${attributes.buttonBackground ? `background: ${attributes.buttonBackground};` : ''}
			${attributes.buttonColor ? `color: ${attributes.buttonColor};` : ''}
			${convertedStyle.button}
		}`;
		styles += `.wpmozo-bna-button-wrap .wpmozo-bna-button:hover {
			${attributes.buttonHoverBGGradient ? `background: ${attributes.buttonHoverBGGradient};` : ''}
			${attributes.buttonHoverBackground ? `background: ${attributes.buttonHoverBackground};` : ''}
			${attributes.buttonHoverColor ? `color: ${attributes.buttonHoverColor};` : ''}
			${convertedStyle.buttonHover}
		}`;
	}

	// Button stack on queries
	if ( attributes.buttonStackOn && 'desktop' === attributes.buttonStackOn ) {
		styles += `.wpmozo-bna-alert-box-inner { flex-direction: column; text-align: center; }`;
		styles += `.wpmozo-bna-button-wrap { width: 100% !important; text-align: center; }`;
	}
	if ( attributes.buttonStackOn && 'tablet' === attributes.buttonStackOn ) {
		styles += `@media only screen and (max-width: 976px) {`;
		styles += `.wpmozo-bna-alert-box-inner { flex-direction: column; text-align: center; }`;
		styles += `.wpmozo-bna-button-wrap { width: 100% !important; text-align: center; }`;
		styles += `}`;
	}
	if ( attributes.buttonStackOn && 'mobile' === attributes.buttonStackOn ) {
		styles += `@media only screen and (max-width: 767px) {`;
		styles += `.wpmozo-bna-alert-box-inner { flex-direction: column; text-align: center; }`;
		styles += `.wpmozo-bna-button-wrap { width: 100% !important; text-align: center; }`;
		styles += `}`;
	}

	styles += `}`;
	return styles;
}

export default generateDynamicStyle;
