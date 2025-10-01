import { convertInlineStyleStr } from '../../common/utils.js';

const generateDynamicStyle = ( { attributes } ) => {
	const toConvertStyles = [
		'video',
	];
	let convertedStyle = convertInlineStyleStr( toConvertStyles, attributes );

	let styles = `#block-${attributes.ID} {`;

	// Alignment.
	if ( attributes.videoAlign ) {
		styles += `text-align: ${attributes.videoAlign};`;
	}

	// Video styling.
	styles += `.wpmozo_fb_embedded_video_wrapper{
		position: relative;
		display: inline-block;
		max-width: 100%;
		overflow: hidden;
		${convertedStyle.video}
	}`;

	styles += `}`;
	return styles;
}

export default generateDynamicStyle;
