const generateDynamicStyle = ( { attributes, clientId } ) => {

	let styles = `#block-${clientId} {`;

	// Alignment.
	if ( attributes.buttonAlign ) {
		styles += `text-align: ${attributes.buttonAlign};`;
	}

	styles += `}`;
	return styles;
}

export default generateDynamicStyle;
