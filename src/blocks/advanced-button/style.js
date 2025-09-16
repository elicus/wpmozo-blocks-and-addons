import {convertInlineStyleStr} from '../../common/utils.js'

const generateDynamicStyle = ({attributes}) => {
	const toConvertStyles = [
		'button',
	];
	let convertedStyle = convertInlineStyleStr(toConvertStyles, attributes);

	let alignment = ( attributes.buttonAlignment ) ?? 'center';
	alignment = ( 'left' === alignment ) ? 'flex-start' : ( ( 'right' === alignment ) ? 'flex-end' : alignment );

	let styles = `#block-${attributes.ID}{`;

	if('horizontal' === attributes.btnOrientation){
		styles +=`
		.block-editor-block-list__layout[data-is-drop-zone="true"] {
			display: flex !important;
			flex-wrap: wrap !important;
			justify-content: ${alignment} !important;
			gap: 0.5rem;
		}`
	} else {
		styles +=`
		.block-editor-block-list__layout[data-is-drop-zone="true"] {
			display: flex !important;
			flex-direction: column !important;
  			align-items: ${alignment} !important;
  			gap: 0.5rem;
		}`
	}

	styles += `}`
	return styles;
};

export default generateDynamicStyle;
