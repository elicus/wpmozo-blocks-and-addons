import {convertInlineStyleStr, wpmozo_is_empty} from '../../common/utils.js';

const generateDynamicStyle = ({ attributes, clientId }) => {

	const { iconFontSize, separatorColor } = attributes,
	toConvertStyles = [
    	'beforeLabel', 
    	'afterLabel'
    ],
    no_overlay = attributes.overlayOnHover ? false : true;
    let convertedStyle = convertInlineStyleStr( toConvertStyles, attributes );

    let beforeLabelStyle = convertedStyle['beforeLabel'],
        afterLabelStyle = convertedStyle['afterLabel'],
        handleStyle = ` background-color: ${attributes.globalcolorHandle} !important;`;

    if ( ! wpmozo_is_empty( attributes.globalcolorHandle ) && 'horizontal' === attributes.sliderOrientation ) {
        handleStyle += `-webkit-box-shadow : 0 3px 0 ${attributes.globalcolorHandle}, 0px 0px 12px rgba(51, 51, 51, 0.5);-moz-box-shadow : 0 3px 0 ${attributes.globalcolorHandle}, 0px 0px 12px rgba(51, 51, 51, 0.5);box-shadow: 0 3px 0 ${attributes.globalcolorHandle}, 0px 0px 12px rgba(51, 51, 51, 0.5);`;
    }

	let styles = `#block-${clientId}{`;

	styles += `${handleStyle ? `.twentytwenty-handle:before, .twentytwenty-handle:after { ${handleStyle} }` : ''}`;

	styles += `${attributes.globalcolorHandle ? `.twentytwenty-handle { border-color: ${attributes.globalcolorHandle}; }` : ''}`;
	styles += `${attributes.globalcolorHandle ? `.twentytwenty-left-arrow { border-right-color: ${attributes.globalcolorHandle}; }` : ''}`;
	styles += `${attributes.globalcolorHandle ? `.twentytwenty-right-arrow { border-left-color: ${attributes.globalcolorHandle}; }` : ''}`;
	styles += `${attributes.globalcolorOverlay ? `.twentytwenty-overlay:hover { background-color: ${attributes.globalcolorOverlay}; }` : ''}`;

	styles += `${beforeLabelStyle ? `.twentytwenty-before-label:before { ${beforeLabelStyle} }` : ''}`;
	styles += `${afterLabelStyle ? `.twentytwenty-after-label:before { ${afterLabelStyle} }` : ''}`;

	if ( attributes.sliderOrientation === 'horizontal' ) {
	    styles += `${attributes.globalcolorHandle ? `.twentytwenty-left-arrow { border-right-color: ${attributes.globalcolorHandle}; }` : ''}`;
	    styles += `${attributes.globalcolorHandle ? `.twentytwenty-right-arrow { border-left-color: ${attributes.globalcolorHandle}; }` : ''}`;
	} else {
	    styles += `${attributes.globalcolorHandle ? `.twentytwenty-down-arrow { border-top-color: ${attributes.globalcolorHandle}; }` : ''}`;
	    styles += `${attributes.globalcolorHandle ? `.twentytwenty-up-arrow { border-bottom-color: ${attributes.globalcolorHandle}; }` : ''}`;
	}

	if ( no_overlay ) {
        styles += `.twentytwenty-overlay:hover{
            background: unset;
        }`;
    }
    if ( ! attributes.beforeLabelOnHover ) {
        styles += `.twentytwenty-before-label{
            opacity: 1;
        }`;
    }
    if ( ! attributes.afterLabelOnHover ) {
        styles += `.twentytwenty-after-label{
            opacity: 1;
        }`;
    }

	styles += `}`;
	return styles;
};

export default generateDynamicStyle;
