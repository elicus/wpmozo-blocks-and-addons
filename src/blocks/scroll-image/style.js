
const generateDynamicStyle = ({attributes, clientId}) => {

	let styles = `#block-${attributes.ID}{`;

	styles += `.wpmozo-bna-scroll-image-wrapper{
		width: ${attributes.containerWidth} !important;
		height: ${attributes.containerHeight} !important;
	}
	.wpmozo-bna-scroll-image-inner-wrap img{
		transition: all ${attributes.scrollSpeed}s ease-out;
	}`;
	
	styles += `}`;
	return styles;
};

export default generateDynamicStyle;
