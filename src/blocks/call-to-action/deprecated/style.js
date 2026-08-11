import { convertInlineStyleStr } from '../../../common/utils.js';

const generateDynamicStyle = ( { attributes } ) => {
	const toConvertStyles = [
		'block',
		'title',
		'description',
		'button',
		'buttonHover'
	];
	let convertedStyle = convertInlineStyleStr( toConvertStyles, attributes );

    let styles = `#block-${attributes.ID} {`;

	// Default block.
	styles += `.wpmozo-bna-cta-wrap{
		${attributes.blockBGGradient ? `background:`+ attributes.blockBGGradient + `;` : ''}
		${attributes.blockBackground ? `background:`+ attributes.blockBackground + `;` : ''}
		${convertedStyle.block}
	}`;

	// Inner alignment.
	styles += `.wpmozo-bna-cta-inner{
		${attributes.blockVerticleAlign ? `align-items:`+ attributes.blockVerticleAlign + `;` : ''}
	}`;

	// Title.
	styles += `.wpmozo-bna-cta-title{
		${attributes.titleAlign ? `text-align: ${attributes.titleAlign};` : ''}
		${attributes.titleColor ? `color: ${attributes.titleColor};` : ''}
		${convertedStyle.title}
	}`
	// Description.
	styles += `.wpmozo-bna-cta-desc{
		${attributes.descriptionAlign ? `text-align: ${attributes.descriptionAlign};` : ''}
		${attributes.descriptionColor ? `color: ${attributes.descriptionColor};` : ''}
		${convertedStyle.description}
	}`

	// Button.
	if ( attributes.showButton ) {
		styles += `.wpmozo-bna-button-wrap{
			${attributes.buttonAlign ? `text-align: ${attributes.buttonAlign}!important;` : ''}
			${attributes.buttonContainerSize ? `width: ${attributes.buttonContainerSize}%;` : ''}
		}`;
		styles += `.wpmozo-bna-button-wrap .wpmozo-bna-button{
			${attributes.buttonBGGradient ? `background:`+ attributes.buttonBGGradient + `;` : ''}
			${attributes.buttonBackground ? `background:`+ attributes.buttonBackground + `;` : ''}
			${attributes.buttonColor ? `color: ${attributes.buttonColor};` : ''}
			${convertedStyle.button}
		}`;
		styles += `.wpmozo-bna-button-wrap .wpmozo-bna-button:hover{
			${attributes.buttonHoverBGGradient ? `background:`+ attributes.buttonHoverBGGradient + `;` : ''}
			${attributes.buttonHoverBackground ? `background:`+ attributes.buttonHoverBackground + `;` : ''}
			${attributes.buttonHoverColor ? `color: ${attributes.buttonHoverColor};` : ''}
			${convertedStyle.buttonHover}
		}`;
	}

	// Stack on.
	if ( attributes.buttonStackOn && 'desktop' === attributes.buttonStackOn ) {
		styles += `.wpmozo-bna-cta-wrap{ flex-direction: column; text-align: center; }`;
		styles += `.wpmozo-bna-button-wrap{ width: 100% !important; text-align: center; }`;
	}
	if ( attributes.buttonStackOn && 'tablet' === attributes.buttonStackOn ) {
		styles += `@media only screen and (max-width: 976px) {`;
			styles += `.wpmozo-bna-cta-wrap{ flex-direction: column; text-align: center; }`;
			styles += `.wpmozo-bna-button-wrap{ width: 100% !important; text-align: center; }`;
		`}`;
	}
	if ( attributes.buttonStackOn && 'mobile' === attributes.buttonStackOn ) {
		styles += `@media only screen and (max-width: 767px) {`;
			styles += `.wpmozo-bna-cta-wrap{ flex-direction: column; text-align: center; }`;
			styles += `.wpmozo-bna-button-wrap{ width: 100% !important; text-align: center; }`;
		`}`;
	}

    styles += `}`;
	return styles;
}

export default generateDynamicStyle;