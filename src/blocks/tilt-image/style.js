import { convertInlineStyleStr } from '../../common/utils.js';

const generateDynamicStyle = ({attributes, clientId, isEdit}) => {
	const toConvertStyles = [
		'title',
		'description',
		'content',
		'button',
		'buttonwrap'
	];
	const convertedStyle = convertInlineStyleStr( toConvertStyles, attributes );

	let normalcss = [],
	hovercss = [],
	cssExtras = [];
	const isEditor = (selector) => {return isEdit ? `,&.is_hover ${selector}` : ''};
	
	normalcss.push( attributes.overlayColor  ? `.wpmozo-bna-tilt-image-inner-wrapper:before{ background-color: ${attributes.overlayColor}; }`  : '' );

	normalcss.push( attributes.iconAlign  ? `.wpmozo-bna-tilt-icon{ text-align: ${attributes.iconAlign}; }`  : '' );

	normalcss.push( convertedStyle.content  ? `.wpmozo-bna-tilt-content-wrapper{ ${convertedStyle.content} }`  : '' );
	
	normalcss.push( convertedStyle.buttonwrap  ? `.wpmozo-bna-tilt-image-button-wrapper{ ${convertedStyle.buttonwrap} }`  : '' );

	normalcss.push(
		( attributes.iconColor || attributes.iconFontSize )
		? `.wpmozo-bna-tilt-icon i{
			${attributes.iconColor ? `color: ${attributes.iconColor};` : ''}
			${attributes.iconFontSize ? `font-size: ${attributes.iconFontSize}px;` : ''}
		}`
		: ''
	);

	normalcss.push(
		( attributes.titleColor || attributes.titleAlign || convertedStyle.title )
		? `.wpmozo-bna-tilt-title{
			${attributes.titleColor ? `color: ${attributes.titleColor};` : ''}
			${attributes.titleAlign ? `text-align: ${attributes.titleAlign};` : ''}
			${convertedStyle.title || ''}
		}`
		: ''
	);

	normalcss.push(
		( attributes.descriptionColor || attributes.descriptionAlign || convertedStyle.description )
		? `.wpmozo-bna-tilt-desc{
			${attributes.descriptionColor ? `color: ${attributes.descriptionColor};` : ''}
			${attributes.descriptionAlign ? `text-align: ${attributes.descriptionAlign};` : ''}
			${convertedStyle.description || ''}
		}`
		: ''
	);

	normalcss.push(
		( attributes.buttonTextColor || attributes.buttonBackgroundColor || convertedStyle.button )
		? `.wpmozo-bna-tilt-image-button{
			${attributes.buttonTextColor ? `color: ${attributes.buttonTextColor};` : ''}
			${attributes.buttonBackgroundColor ? `background-color: ${attributes.buttonBackgroundColor};` : ''}
			${convertedStyle.button || ''}
		}`
		: ''
	);

	if ( attributes.use3dEffect ) {
		normalcss.push(
			`.wpmozo-bna-tilt-image-wrapper {
				transform-style: preserve-3d;
			}
			.wpmozo-bna-tilt-image-inner-wrapper {
				transform-style: preserve-3d;
			}
			${attributes.tilt3dValue ? `.wpmozo-bna-tilt-content-wrapper { transform: translateZ(${attributes.tilt3dValue}px); }` : ''}`
		);
	}
	if ( ! attributes.tiltMobile ) {
		normalcss.push(
			`.wpmozo-bna-tilt-image .wpmozo-bna-tilt-image-inner-wrapper {
				transform: unset !important;
			}`
		);
	}

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
};

export default generateDynamicStyle;