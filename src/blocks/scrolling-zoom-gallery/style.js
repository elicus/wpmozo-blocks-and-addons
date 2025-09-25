import { convertInlineStyleStr } from '../../common/utils.js';

const generateDynamicStyle = ( { attributes } ) => {
	const toConvertStyles = [
		'normal','hover'
	];
	let convertedStyle = convertInlineStyleStr( toConvertStyles, attributes );

	const classicBackgroundColor = (attributes.classicBackgroundColor) ? attributes.classicBackgroundColor : "",
		classicBackgroundImage = (attributes.classicBackgroundImage) ? attributes.classicBackgroundImage : "",
		gradientBackgroundColor = (attributes.gradientBackgroundColor) ? attributes.gradientBackgroundColor : "";

    let styles = `#block-${attributes.ID} {`;

	styles +=`
		.wpmozo_scroll_zoom_gallery_item img{
			${convertedStyle.normal}
		}
		.wpmozo_scroll_zoom_gallery_item img:hover{
			${convertedStyle.hover}
		}
	`;

	if('classic' === attributes.filledBackgroundType){
		styles +=`
			.wpmozo_scroll_zoom_gallery_scroller{
				background-color:${classicBackgroundColor};
				background-image:url(${classicBackgroundImage});
			}
		`;
	} else {
		styles +=`
			.wpmozo_scroll_zoom_gallery_scroller{
				background-color:transparent;
				background-image:${gradientBackgroundColor};
			}
		`;
	}


    styles += `}`;
	return styles;
}

export default generateDynamicStyle;
