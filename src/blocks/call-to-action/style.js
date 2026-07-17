import { convertInlineStyleStr } from '../../common/utils.js';

const generateDynamicStyle = ( { attributes, isEdit } ) => {
	const toConvertStyles = [
		'block',
		'title',
		'description',
		'button',
		'buttonHover'
	];
	let convertedStyle = convertInlineStyleStr( toConvertStyles, attributes );

    let normalcss = [],
	hovercss = [],
	cssExtras = [];
	const isEditor = (selector) => {return isEdit ? `,&.is_hover ${selector}` : ''};


	normalcss.push(
		(attributes.blockBGGradient || attributes.blockBackground || convertedStyle.block) 
		? `.wpmozo-bna-cta-wrap{
				${attributes.blockBGGradient ? `background:`+ attributes.blockBGGradient + `;` : ''}
				${attributes.blockBackground ? `background:`+ attributes.blockBackground + `;` : ''}
				${convertedStyle.block || ''}
			}`
		: ''
	);

	// Inner alignment.
	normalcss.push(
		attributes.blockVerticleAlign 
		? `.wpmozo-bna-cta-inner{ align-items: ${attributes.blockVerticleAlign}; }` : ''
	);

	// Title.
	normalcss.push(
		(attributes.titleAlign || attributes.titleColor || convertedStyle.title) 
		? `.wpmozo-bna-cta-title{
				${attributes.titleAlign ? `text-align: ${attributes.titleAlign};` : ''}
				${attributes.titleColor ? `color: ${attributes.titleColor};` : ''}
				${convertedStyle.title || ''}
			}`
		: ''
	);

	// Description.
	normalcss.push(
		(attributes.descriptionAlign || attributes.descriptionColor || convertedStyle.description) 
		? `.wpmozo-bna-cta-desc{
				${attributes.descriptionAlign ? `text-align: ${attributes.descriptionAlign};` : ''}
				${attributes.descriptionColor ? `color: ${attributes.descriptionColor};` : ''}
				${convertedStyle.description || ''}
			}`
		: ''
	);

	// Button.
	if ( attributes.showButton ) { 
		normalcss.push(
			(attributes.buttonAlign || attributes.buttonContainerSize) 
			? `.wpmozo-bna-button-wrap{
					${attributes.buttonAlign ? `text-align: ${attributes.buttonAlign}!important;` : ''}
					${attributes.buttonContainerSize ? `width: ${attributes.buttonContainerSize}%;` : ''}
				}`
			: ''
		);

		normalcss.push(
			`.wpmozo-bna-button-wrap .wpmozo-bna-button{
				${attributes.buttonBGGradient ? `background:`+ attributes.buttonBGGradient + `;` : ''}
				${attributes.buttonBackground ? `background:`+ attributes.buttonBackground + `;` : ''}
				${attributes.buttonColor ? `color: ${attributes.buttonColor};` : ''}
				${convertedStyle.button || ''}
				transition: all 300ms;
			}`
		);
		hovercss.push(
			(attributes.buttonHoverBGGradient || attributes.buttonHoverBackground || attributes.buttonHoverColor || convertedStyle.buttonHover) 
			? `.wpmozo-bna-button-wrap .wpmozo-bna-button:hover${isEditor('.wpmozo-bna-button-wrap .wpmozo-bna-button')}{
					${attributes.buttonHoverBGGradient ? `background:`+ attributes.buttonHoverBGGradient + `;` : ''}
					${attributes.buttonHoverBackground ? `background:`+ attributes.buttonHoverBackground + `;` : ''}
					${attributes.buttonHoverColor ? `color: ${attributes.buttonHoverColor};` : ''}
					${convertedStyle.buttonHover || ''}
				}`
			: ''
		);
	}

	// Stack on.
	if ( attributes.buttonStackOn && 'desktop' === attributes.buttonStackOn ) {
		normalcss.push(`.wpmozo-bna-cta-wrap{ flex-direction: column; text-align: center; }.wpmozo-bna-button-wrap{ width: 100% !important; text-align: center; }`
		);
	}
	if ( attributes.buttonStackOn && 'tablet' === attributes.buttonStackOn ) {
		normalcss.push(`@media only screen and (max-width: 976px) { .wpmozo-bna-cta-wrap{ flex-direction: column; text-align: center; } .wpmozo-bna-button-wrap{ width: 100% !important; text-align: center; }`
		);
	}
	if ( attributes.buttonStackOn && 'mobile' === attributes.buttonStackOn ) {
		normalcss.push(`@media only screen and (max-width: 767px) { .wpmozo-bna-cta-wrap{ flex-direction: column; text-align: center; } .wpmozo-bna-button-wrap{ width: 100% !important; text-align: center; }`
		);
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