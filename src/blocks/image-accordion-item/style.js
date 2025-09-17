import {convertInlineStyleStr, wpmozo_is_empty} from '../../common/utils.js';

const generateDynamicStyle = ({ attributes, clientId }) => {

	const toConvertStyles = [
	];
    let convertedStyle = convertInlineStyleStr( toConvertStyles, attributes ),
    	parentAtts = attributes.parentAtts,
    	iconFontSize = ( ! wpmozo_is_empty( attributes.iconFontSize ) ) ? attributes.iconFontSize : parentAtts.iconFontSize;

    let btnPos = '';
    if ( attributes.useButtonIcon ) {
	    if ( 'before' === attributes.buttonIconPlacement ) {
	    	btnPos = 'row-reverse';
	    }else{
			btnPos = 'row';
	    }
	}

	let styles = `#block-${clientId}.wpmozo-bna-image-accordion-item{`;
	styles += `
		${ (attributes.useButtonIcon) ? `.wpmozo-bna-btn { flex-direction: ${btnPos}; }` : '' }
	`;
	styles += `}`;

	return styles;
};

export default generateDynamicStyle;