import { convertInlineStyleStr } from '../../../common/utils.js';

const generateDynamicStyle = ( { attributes } ) => {
	const toConvertStyles = [
		'lightboxTitle','container'
	];
	let convertedStyle = convertInlineStyleStr( toConvertStyles, attributes );

    let styles = `#block-${attributes.ID} {`;

	styles +=`
		.wpmozo_wavy_gallery_item{
			height:${attributes.imagesHeight}px;
			width:${attributes.imagesWidth}px;
		}
		.wpmozo_wavy_gallery_items{
			gap:${attributes.imagesGap}px;
		}
		.wpmozo_wavy_gallery_wrapper{
			${convertedStyle.container};
		}
	`;

    styles += `}`;

	styles +=`.block-${attributes.ID}{
		background:${attributes.lightboxBackgroundColor};
	}`

	styles +=`.block-${attributes.ID} .wpmozo_wavy_gallery_overlay_item_title{
		color:${attributes.lightboxTitleColor};
		text-align:${attributes.textAlign};
		${convertedStyle.lightboxTitle}
	}`
	return styles;
}

export default generateDynamicStyle;