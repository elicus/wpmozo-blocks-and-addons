import { convertInlineStyleStr } from '../../common/utils.js';

const generateDynamicStyle = ( { attributes } ) => {
	const toConvertStyles = [
		'title',
		'description',
		'button',
		'buttonHover',
	];
	let convertedStyle = convertInlineStyleStr( toConvertStyles, attributes );

	let styles = `.wp-block-wpmozo-background-switcher #block-${attributes.ID} {`;

	// Title.
	styles += `.wpmozo-bna-bg-switcher-title{
		${attributes.titleAlign ? `text-align: ${attributes.titleAlign};` : ''}
		${attributes.titleColor ? `color: ${attributes.titleColor};` : ''}
		${convertedStyle.title}
	}`
	// Description.
	styles += `.wpmozo-bna-bg-switcher-desc{
		${attributes.descriptionAlign ? `text-align: ${attributes.descriptionAlign};` : ''}
		${attributes.descriptionColor ? `color: ${attributes.descriptionColor};` : ''}
		${convertedStyle.description}
	}`

	// Button.
	if ( attributes.showButton ) {
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

	// Item background.
	let bgImage = [];
	if ( attributes.itemBGGradient ) {
		bgImage.push( attributes.itemBGGradient );
	}
	if ( attributes.itemBGImage ) {
		bgImage.push( 'url(' + attributes.itemBGImage + ')' );
	}
	styles += `+ .wpmozo_bna_background_switcher_image .wpmozo_bna_switcher_item_background {
		${attributes.itemBackground ? `background-color: ${attributes.itemBackground};` : ''}
		${bgImage && bgImage.length ? `background-image:` + bgImage.join( ', ' ) + `;` : ''}

		${attributes.itemBGImageSize ? `background-size: ${attributes.itemBGImageSize};` : '' }
		${attributes.itemBGImagePosition ? `background-position: ${attributes.itemBGImagePosition.replace(/_/g, ' ')};` : '' }
		${attributes.itemBGImageRepeat ? `background-repeat: ${attributes.itemBGImageRepeat};` : '' }
		${attributes.itemBGImageBlend ? `background-blend-mode: ${attributes.itemBGImageBlend};` : '' }
	}`;

	styles += `}`;

	return styles;
}

export default generateDynamicStyle;
