const generateDynamicStyle = ( { attributes } ) => {

	let styles = `#block-${attributes.ID} {`;

	// Alignment.
	if ( attributes.buttonAlign ) {
		styles += `text-align: ${attributes.buttonAlign};`;
	}

	styles += `}`;
	return styles;
}

export default generateDynamicStyle;