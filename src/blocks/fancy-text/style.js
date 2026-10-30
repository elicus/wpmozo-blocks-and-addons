import {convertInlineStyleStr, wpmozo_is_empty} from '../../common/utils.js';

const generateDynamicStyle = ({attributes, clientId, isEdit}) => {
	const toConvertStyles = [
		'text',
		'textHover',
		'textBgDimensions'
	];
	let convertedStyle = convertInlineStyleStr(toConvertStyles, attributes);

	const parent = '#block-' + clientId;

	let normalcss = [],
	    hovercss  = [],
	    cssExtras = [];
	const isEditor = (selector) => {return isEdit ? `,&.is_hover ${selector}` : ''};

	normalcss.push(
		`.wpmozo-bna-fancy-text-inner {
			transition: all 300ms ease;
			${attributes.textAlignment ? `text-align: ${attributes.textAlignment};` : ''}
			${convertedStyle.text || ''}
		}`
	);

	if ( 'gradient' === attributes.textStyle ) {
		normalcss.push(
			`.wpmozo-bna-fancy-text-inner {
				background-color: transparent;
				${attributes.fancyTextBackground ? `background-image: ${attributes.fancyTextBackground};` : ''}
			}`
		);

		hovercss.push(
			(attributes.fancyTextHoverBackground || convertedStyle.textHover)
			? `.wpmozo-bna-fancy-text-inner:hover${isEditor('.wpmozo-bna-fancy-text-inner')} {
					${attributes.fancyTextHoverBackground ? `background-image: ${attributes.fancyTextHoverBackground};` : ''}
					${convertedStyle.textHover || ''}
				}`
			: ''
		);
	} else {
		let escURL = encodeURI( attributes.fancyTextBackgroundImg );

		normalcss.push(
			(escURL || attributes.textBgSize || attributes.textBgPosition || attributes.textBgRepeat)
			? `.wpmozo-bna-fancy-text-inner {
				${escURL ? `background-image: url(${escURL});` : ''}
				${attributes.textBgSize ? `background-size: ${attributes.textBgSize};` : ''}
				${attributes.textBgPosition ? `background-position: ${attributes.textBgPosition};` : ''}
				${attributes.textBgRepeat ? `background-repeat: ${attributes.textBgRepeat};` : ''}
			}`
			: ''
		);

		hovercss.push(
			(convertedStyle.textHover)
			? `.wpmozo-bna-fancy-text-inner:hover${isEditor('.wpmozo-bna-fancy-text-inner')} {
					${convertedStyle.textHover || ''}
				}`
			: ''
		);

		if ( 'none' !== attributes.textBgOverlay ) {
			normalcss.push(
				`.wpmozo-bna-fancy-text-inner:before {
					content: "";
					position: absolute;
					top: 0;
					right: 0;
					bottom: 0;
					left: 0;
					z-index: -2;
					background-image: inherit;
					${attributes.textBgSize ? `background-size: ${attributes.textBgSize};` : ''}
					${attributes.textBgPosition ? `background-position: ${attributes.textBgPosition};` : ''}
					${attributes.textBgRepeat ? `background-repeat: ${attributes.textBgRepeat};` : ''}
				}`
			);
			normalcss.push(
				`.wpmozo-bna-fancy-text-inner:after {
					content: "";
					position: absolute;
					top: 0;
					right: 0;
					bottom: 0;
					left: 0;
					z-index: -1;
					transition: all 300ms ease;
					${(attributes.textBgOverlayColorSolid) ? `background-color: ${attributes.textBgOverlayColorSolid};` : ''}
					${(!attributes.textBgOverlayColorSolid) ? `background: ${attributes.textBgOverlayColorGradient};` : ''}
				}`
			);

			hovercss.push(
				(attributes.textBgOverlayHoverColorSolid || attributes.textBgOverlayHoverColorGradient)
				? `.wpmozo-bna-fancy-text-inner:hover:after${isEditor('.wpmozo-bna-fancy-text-inner:after')} {
						${(attributes.textBgOverlayHoverColorSolid) ? `background-color: ${attributes.textBgOverlayHoverColorSolid};` : ''}
						${(!attributes.textBgOverlayHoverColorSolid && attributes.textBgOverlayHoverColorGradient) ? `background: ${attributes.textBgOverlayHoverColorGradient};` : ''}
					}`
				: ''
			);
		}
	}

	cssExtras.push(
		`${parent} {
			z-index: 0;
			position: relative;
		}`
	);
	
	if ( ! wpmozo_is_empty( convertedStyle.textBgDimensions ) && 'none' !== attributes.textBgOverlay) {
		cssExtras.push(
			`${parent} {
				${convertedStyle.textBgDimensions}
			}`
		);
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
