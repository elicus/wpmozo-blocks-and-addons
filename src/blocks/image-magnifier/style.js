
const generateDynamicStyle = ({attributes, clientId}) => {

	const lenseBorderColor = attributes.lenseBorderColor ?? '#000';

	let styles = `#block-${attributes.ID}{`;

	styles += `.wpmozo-bna-image-magnifier-wrapper .magnify{
		justify-content: ${attributes.imageAlignment};
	}
	.magnify > .magnify-lens{
		width: ${attributes.lensWidth}px !important;
		height: ${attributes.lensWidth}px !important;
	}
	.magnify .magnify-lens{
		box-shadow: 0 0 0 ${attributes.lenseBorderWidth}px ${lenseBorderColor};
	}
	.magnify img{
		width: ${attributes.imageWidth}% !important;
		max-width: ${attributes.imageMaxWidth}% !important;
	}
	`;

	styles += `}`;
	return styles;
};

export default generateDynamicStyle;
