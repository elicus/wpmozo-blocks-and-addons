import { convertInlineStyleStr } from '../../common/utils.js';

const generateDynamicStyle = ( { attributes } ) => {
	const toConvertStyles = [
		'title',
		'description',
	];
	let convertedStyle = convertInlineStyleStr( toConvertStyles, attributes );

	let styles = `#block-${attributes.ID} {`;

	// Orientation.
	styles += `.wpmozo_bna_background_switcher_inner{
		${attributes.switcherOrientation ? `flex-direction: ${attributes.switcherOrientation};` : ''}
	}`;

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

	// Item style.
	styles += `.wp-block-wpmozo-background-switcher-item{
		${attributes.itemHeight ? `min-height: ${attributes.itemHeight}px;` : ''}
		${attributes.itemHeight ? `height: ${attributes.itemHeight}px;` : ''}
	}`;
	if ( attributes.hoverBlurLevel ) {
		styles += `.wp-block-wpmozo-background-switcher-item:hover{
			${attributes.itemHeight ? `backdrop-filter: blur( ${attributes.hoverBlurLevel}px );` : ''}
		}`;
	}
	if ( attributes.transitionDuration ) {
		styles += `.wpmozo_bns_background_switcher_image{
			${attributes.itemHeight ? `transition-duration: ${attributes.transitionDuration}ms;` : ''}
		}`;
	}

	styles += `}`;

	return styles;
}

export default generateDynamicStyle;
