import {convertInlineStyleStr} from '../../common/utils.js'

const generateDynamicStyle = ({attributes}) => {
	const toConvertStyles = [
		'button',
	];
	let convertedStyle = convertInlineStyleStr(toConvertStyles, attributes);

	let btnOrientation = attributes.btnOrientation === 'horizontal' ? 'inline-block' : 'block';

	let styles = `#block-${attributes.ID}{`;

	styles += `}
	.wp-block-wpmozo-advanced-button-child{
		display:${btnOrientation};
		text-align:${attributes.buttonAlignment};
	}
	`
	return styles;
};

export default generateDynamicStyle;
