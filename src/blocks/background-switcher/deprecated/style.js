import { convertInlineStyleStr } from '../../../common/utils.js';

const generateDynamicStyle = ( { attributes } ) => {
	const toConvertStyles = [
		'title',
		'description',
	];
	let convertedStyle = convertInlineStyleStr( toConvertStyles, attributes );
	let alignment = ( attributes.contentValign ) ?? 'center';
	alignment = ( 'left' === alignment ) ? 'flex-start' : ( ( 'right' === alignment ) ? 'flex-end' : alignment );


	let styles = `#block-${attributes.ID} {`;

	// Orientation.
	styles += `.wpmozo_bna_background_switcher_inner{
		${attributes.switcherOrientation ? `flex-direction: ${attributes.switcherOrientation};` : ''}
	}`;

	styles +=`
	@media only screen and (max-width: 980px) {
		.wpmozo_bna_background_switcher_inner {
			flex-direction: column !important;
		}
		.wp-block-wpmozo-background-switcher-item{
			min-height: ${attributes.responsiveHeight}px !important;
			height: ${attributes.responsiveHeight}px !important;
		}
	}
	`;

	if('row' === attributes.switcherOrientation && alignment){
		styles +=`
		.wpmozo_bna_bg_switcher_item_wrap{
			justify-content: ${alignment} !important;
		}`
	}
	if('column' === attributes.switcherOrientation && alignment){
		styles +=`
		.wpmozo_bna_bg_switcher_item_wrap{
			justify-content: ${alignment} !important;
		}`
	}



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