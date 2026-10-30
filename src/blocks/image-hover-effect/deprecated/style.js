import {convertInlineStyleStr} from '../../../common/utils.js';

const generateDynamicStyle = ({attributes}) => {
	const toConvertStyles = [
		'image'
	];
    let convertedStyle = convertInlineStyleStr( toConvertStyles, attributes );

    let image = ( attributes.image ) ? attributes.image : wpmozo_bna_editor_object.placeholderImg,
    	hoverEffect = attributes.hoverEffect;

	let styles = `#block-${attributes.ID}{`;

	styles += `.wpmozo-bna-image-hover-effect-inner{ ${convertedStyle.image} }`;
		if ( 'glitch' === hoverEffect ) {
			styles += `
				.wpmozo-bna-glitch-image::before {
					background-image: url('${image}');
				}
			`;
		}

		if ( 'slide_glitch' === hoverEffect ) {
			styles += `
				.wpmozo-bna-slide-glitch{
					background-image: url('${image}');
				}
			`;
		}
	styles += `}`;

	if ( attributes.forceFullwidth ) {
		styles += `#block-${attributes.ID}{width: 100%; max-width: 100% !important;}.wpmozo-bna-image-hover-effect-inner, .wpmozo-bna-image-hover-effect-inner img{width: 100%;}`;
	}

	return styles;
};

export default generateDynamicStyle;