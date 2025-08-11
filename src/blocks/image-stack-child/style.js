const generateDynamicStyle = ({attributes, clientId}) => {

	let styles = `#block-${attributes.ID}{`;
	
	// Background color
	styles += attributes.itemBackground ? `background:`+ attributes.itemBackground + `;` : ''
	styles += attributes.itemBGGradient ? `background-color:`+ attributes.itemBGGradient + `;` : ''

	styles += `}`;
	return styles;
};

export default generateDynamicStyle;
