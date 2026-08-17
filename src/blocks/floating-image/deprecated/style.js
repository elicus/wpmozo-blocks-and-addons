
const generateDynamicStyle = ({ attributes, clientId }) => {

	let styles = `#block-${clientId}{`;
	
	styles += `${ (attributes.containerHeight) ? `.wpmozo-bna-floating-image-wrapper { height:`+ attributes.containerHeight + `; }.floating-image-item img { max-height:`+ attributes.containerHeight + `; }` : '' }`;

	styles += `}`;

	return styles;
};

export default generateDynamicStyle;