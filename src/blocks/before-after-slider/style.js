import {convertInlineStyleStr, wpmozo_is_empty} from '../../common/utils.js';

const generateDynamicStyle = ({ attributes, clientId, isEdit }) => {

	const { iconFontSize, separatorColor } = attributes,
	toConvertStyles = [
    	'beforeLabel', 
    	'afterLabel'
    ],
    no_overlay = attributes.overlayOnHover ? false : true;
    let convertedStyle = convertInlineStyleStr( toConvertStyles, attributes );

    let beforeLabelStyle = convertedStyle['beforeLabel'],
        afterLabelStyle = convertedStyle['afterLabel'],
        handleStyle = attributes.globalcolorHandle ? `background-color: ${attributes.globalcolorHandle} !important;`:'';

    if ( ! wpmozo_is_empty( attributes.globalcolorHandle ) && 'horizontal' === attributes.sliderOrientation ) {
        handleStyle += `-webkit-box-shadow : 0 3px 0 ${attributes.globalcolorHandle}, 0px 0px 12px rgba(51, 51, 51, 0.5);-moz-box-shadow : 0 3px 0 ${attributes.globalcolorHandle}, 0px 0px 12px rgba(51, 51, 51, 0.5);box-shadow: 0 3px 0 ${attributes.globalcolorHandle}, 0px 0px 12px rgba(51, 51, 51, 0.5);`;
    }
    let normalcss = [],
	    hovercss = [],
	    cssExtras = [];
	const isEditor = (selector) => {return isEdit ? `,&.is_hover ${selector}` : ''};

    normalcss.push(
		handleStyle
		? `.twentytwenty-handle:before, .twentytwenty-handle:after { ${handleStyle} }` : ''
	);
    normalcss.push(
		attributes.globalcolorHandle
		? `.twentytwenty-handle { border-color: ${attributes.globalcolorHandle}; }` : ''
	);
    normalcss.push(
		attributes.globalcolorHandle
		? `.twentytwenty-handle { border-color: ${attributes.globalcolorHandle}; }.twentytwenty-left-arrow { border-right-color: ${attributes.globalcolorHandle}; }.twentytwenty-right-arrow { border-left-color: ${attributes.globalcolorHandle}; }` : ''
	);
    
    normalcss.push(
		beforeLabelStyle
		? `.twentytwenty-before-label:before { ${beforeLabelStyle} }` : ''
	);
    normalcss.push(
		afterLabelStyle
		? `.twentytwenty-after-label:before { ${afterLabelStyle} }` : ''
	);
    if ( attributes.sliderOrientation === 'horizontal' ) {
	    normalcss.push(
            attributes.globalcolorHandle
            ? `.twentytwenty-left-arrow { border-right-color: ${attributes.globalcolorHandle}; }.twentytwenty-right-arrow { border-left-color: ${attributes.globalcolorHandle}; }` : ''
        );
	} else {
        normalcss.push(
            attributes.globalcolorHandle
            ? `.twentytwenty-down-arrow { border-top-color: ${attributes.globalcolorHandle}; }.twentytwenty-up-arrow { border-bottom-color: ${attributes.globalcolorHandle}; }` : ''
        );
	}
    if ( no_overlay ) {
	    normalcss.push(`.twentytwenty-overlay:hover{ background: unset;}`);
	}
    if ( attributes.overlayOnHover ) {
        hovercss.push(
            attributes.globalcolorOverlay 
            ? `.twentytwenty-overlay:hover${isEditor('.twentytwenty-overlay')} { background-color: ${attributes.globalcolorOverlay}; }` : ''
        );
    }
    if ( ! attributes.beforeLabelOnHover ) {
	    normalcss.push(`.twentytwenty-before-label{opacity: 1;}`);
	}
    if ( ! attributes.afterLabelOnHover ) {
	    normalcss.push(`.twentytwenty-after-label{opacity: 1;}`);
	}
    const hasStyles = normalcss.some(Boolean) || hovercss.some(Boolean);
	
	let styles = hasStyles ? `#block-${attributes.ID}{${normalcss.filter(Boolean).join('\n')} ${hovercss.filter(Boolean).join('\n')}}` : '';
	
	styles += cssExtras.some(Boolean) ? cssExtras.filter(Boolean).join('\n') : '';
	styles = styles.replace(/\s+/g, ' ')
    .replace(/\s*{\s*/g, '{')
    .replace(/\s*}\s*/g, '}')
    .replace(/\s*:\s*/g, ':')
    .replace(/\s*;\s*/g, ';')
    .replace(/\s*,\s*/g, ',')    
    .trim();

	
	return styles;
};

export default generateDynamicStyle;