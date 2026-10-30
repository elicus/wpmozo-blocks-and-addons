import {convertInlineStyleStr} from '../../common/utils.js'

const generateDynamicStyle = ({attributes}) => {
	const toConvertStyles = [
		'button',
	];
	let convertedStyle = convertInlineStyleStr(toConvertStyles, attributes);

	let frontVerticalAlign = attributes.btnVerticalAlign;
	if ( 'top' === attributes.btnVerticalAlign ) {
		frontVerticalAlign = 'flex-start';
	}else if( 'bottom' === attributes.btnVerticalAlign ){
		frontVerticalAlign = 'flex-end';
	}

	let alignment = ( attributes.buttonAlignment ) ?? 'center';
	alignment = ( 'left' === alignment ) ? 'flex-start' : ( ( 'right' === alignment ) ? 'flex-end' : alignment );

	let styles = `#block-${attributes.ID}{`;

	if('horizontal' === attributes.btnOrientation){
		styles +=`
		.wpmozo-advanced-button-child{
			align-self:${frontVerticalAlign};
		}
		.block-editor-block-list__layout[data-is-drop-zone="true"] {
			display: flex;
			flex-wrap: wrap;
			justify-content: ${alignment};
			gap: 0.5rem;
		}`
	} else {
		styles +=`
		.block-editor-block-list__layout[data-is-drop-zone="true"] {
			display: flex;
			flex-direction: column;
  			align-items: ${alignment};
  			gap: 0.5rem;
		}`
	}

	styles += `}`
	return styles;
};

export default generateDynamicStyle;