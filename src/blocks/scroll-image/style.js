import {convertInlineStyleStr} from '../../common/utils.js';

const generateDynamicStyle = ({attributes, clientId}) => {

	let styles = `#block-${attributes.ID}{`,
	toConvertStyles = [
		'image'
	];
	let convertedStyle = convertInlineStyleStr( toConvertStyles, attributes );

	let imageAlignment = attributes.imageAlignment,
		wrapperDimensions = '';

	if( 'left' == imageAlignment ) {
		wrapperDimensions = 'margin-left: 0px !important;margin-right: auto !important;';
	}else if( 'center' == imageAlignment ) {
		wrapperDimensions = 'margin-left: auto !important;margin-right: auto !important;';
	}else if( 'right' == imageAlignment ) {
		wrapperDimensions = 'margin-left: auto !important;margin-right: 0px !important;';
	}

	styles += `.wpmozo-bna-scroll-image-wrapper{
		width: ${attributes.containerWidth} !important;
		height: ${attributes.containerHeight} !important;
		${wrapperDimensions}
	}
	.wpmozo-bna-scroll-image-inner-wrap img{ 
		transition: all ${attributes.scrollSpeed}s ease-out;
	}
	.wpmozo-bna-scroll-image-wrapper{
		${convertedStyle.image}
	}`

	styles += `}`;
	return styles;
};

export default generateDynamicStyle;