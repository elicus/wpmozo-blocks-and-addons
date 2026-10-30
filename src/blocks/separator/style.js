import { convertInlineStyleStr } from '../../common/utils.js';

const generateDynamicStyle = ({ attributes, clientId, isEdit }) => {
	const toConvertStyles = [
    	'textNormal',
    	'textHover',
    	'content',
    	'layout'
    ];
    let convertedStyle = convertInlineStyleStr( toConvertStyles, attributes );

	let normalcss = [],
	hovercss = [],
	cssExtras = [];
	const isEditor = (selector) => {return isEdit ? `,&.is_hover ${selector}` : ''};

	normalcss.push(`.wpmozo-bna-text-wrapper {
				${attributes.textNormalColor ? `color: ${attributes.textNormalColor};` : ''}
				${convertedStyle.textNormal || ''}
				transition: all 300ms;
			}`);
	hovercss.push(
		( attributes.textHoverColor || convertedStyle.textHover ) 
		? `.wpmozo-bna-text-wrapper:hover${isEditor('.wpmozo-bna-text-wrapper')} {
				${attributes.textHoverColor ? `color: ${attributes.textHoverColor};` : ''}
				${convertedStyle.textHover || ''}
			}`
		: ''
	);

	if ( 'line' === attributes.separatorType ) {

		normalcss.push(
			( attributes.separatorThickness || attributes.lineStyle ) 
			? `.wpmozo-bna-line {
					${attributes.separatorThickness ? `border-top-width: ${attributes.separatorThickness}px;` : ''}
					${attributes.lineStyle ? `border-top-style: ${attributes.lineStyle};` : ''}
				}`
			: ''
		);

		if ( 'solid' === attributes.lineStyle && undefined === attributes.separatorColor ) {
			normalcss.push(
				( attributes.separatorThickness || attributes.separatorGradient || attributes.lineStyle ) 
				? `.wpmozo-bna-line {
						${attributes.separatorThickness ? `border-top-width: ${attributes.separatorThickness}px;` : ''}
						${attributes.lineStyle ? `border-top-style: ${attributes.lineStyle};` : ''}
						${attributes.separatorGradient ? `border-image-slice: 1; border-image-source: ${attributes.separatorGradient};` : ''}
					}`
				: ''
			);
		}

		
		normalcss.push(attributes.separatorColor ? `.wpmozo-bna-line { border-top-color: ${attributes.separatorColor }; }` : '');

		if ( 'iconSeparator' === attributes.lineUseWith ) {
			normalcss.push(attributes.iconColor ? `.wpmozo-bna-icon-wrapper i { color: ${attributes.iconColor}; }` : '');

			if ( true === attributes.enableIconFontSize && true === attributes.styleIcon ) {
				if ( 'hexagon' === attributes.iconShape ) {
					if ( true === attributes.enableShapeBorder ) {
						normalcss.push(attributes.shapeBorderColor ? `.wpmozo-bna-icon-wrapper .hexagon.wpmozo-bna-border-hex { box-shadow: inset 2px 0px 0px 0px ${attributes.shapeBorderColor}, inset -2px 0px 0px 0px ${attributes.shapeBorderColor}; }` : '');

						normalcss.push(`
							.wpmozo-bna-icon-wrapper .hexagon.wpmozo-bna-border-hex:after {
								${attributes.shapeBorderColor ? `
								border-right: 2px solid ${attributes.shapeBorderColor};
								border-bottom: 2px solid ${attributes.shapeBorderColor};` : '' }
								transform: rotate(45deg) skew(-15.8deg, -15.8deg) translate(72%, 27%);
								width: 55%;
								height: 100%;
							}
							.wpmozo-bna-icon-wrapper .hexagon.wpmozo-bna-border-hex:before {
								${attributes.shapeBorderColor ? `
								border-top: 2px solid ${attributes.shapeBorderColor};
								border-left: 2px solid ${attributes.shapeBorderColor};` : '' }
								transform: rotate(45deg) skew(-15.8deg, -15.8deg) translate(-27%, -72%);
								width: 55%;
								height: 100%;
							}
						`);
					} else {
						normalcss.push(`
						.wpmozo-bna-icon-wrapper .hexagon:after {
							transform: rotate(45deg) skew(-16deg, -16deg) translate(72%, 27%);
							width: 55%;
						}
						.wpmozo-bna-icon-wrapper .hexagon:before {
							transform: rotate(45deg) skew(-16deg, -16deg) translate(-27%, -72%);
							width: 55%;
						}`);
					}

					normalcss.push(attributes.iconFontSize ? `.wpmozo-bna-icon-wrapper { width: calc(${attributes.iconFontSize}px + ${attributes.iconFontSize / 1.15}px); } .wpmozo-bna-icon-wrapper i { font-size: ${attributes.iconFontSize}px; }` : '' );
					
					normalcss.push(attributes.shapeBackground ? `.wpmozo-bna-icon-wrapper .hexagon, .wpmozo-bna-icon-wrapper .hexagon:before, .wpmozo-bna-icon-wrapper .hexagon:after { background-color: ${attributes.shapeBackground}; }` : '');
				} else {
					if (true === attributes.enableShapeBorder) {
						normalcss.push(
							( attributes.shapeBorderColor || attributes.iconFontSize ) 
							? `.wpmozo-bna-icon-wrapper i {
									${attributes.shapeBorderColor ? `border: 2px solid ${attributes.shapeBorderColor};` : ''}
									${attributes.iconFontSize ? `font-size: ${attributes.iconFontSize}px;` : ''}
								}`
							: ''
						);
					}

					normalcss.push(
						( attributes.iconFontSize || attributes.shapeBackground ) 
						? `.wpmozo-bna-icon-wrapper i {
								${attributes.iconFontSize ? `font-size: ${attributes.iconFontSize}px;` : ''}
								${attributes.shapeBackground ? `background-color: ${attributes.shapeBackground};` : ''}
							}`
						: ''
					);
				}
			} else if ( true === attributes.enableIconFontSize && true !== attributes.styleIcon ) {
				normalcss.push(attributes.iconFontSize ? `.wpmozo-bna-icon-wrapper i { font-size: ${attributes.iconFontSize}px; }` : '' );
			} else if ( true !== attributes.enableIconFontSize && true === attributes.styleIcon ) {
				if ( 'hexagon' === attributes.iconShape ) {
					if ( true === attributes.enableShapeBorder ) {
						normalcss.push(
							`.wpmozo-bna-icon-wrapper .hexagon.wpmozo-bna-border-hex {
								${(attributes.shapeBorderColor) ? `
								border-left: 2px solid ${attributes.shapeBorderColor};
								border-right: 2px solid ${attributes.shapeBorderColor};` : '' }
							}
							.wpmozo-bna-icon-wrapper .hexagon.wpmozo-bna-border-hex:after {
								${(attributes.shapeBorderColor) ? `
								border-right: 2px solid ${attributes.shapeBorderColor};
								border-bottom: 2px solid ${attributes.shapeBorderColor};` : '' }
								transform: rotate(45deg) skew(-13deg, -13deg) translate(57%, 19%);
								width: calc(55% + 4px);
								height: calc(100% + 4px);
							}
							.wpmozo-bna-icon-wrapper .hexagon.wpmozo-bna-border-hex:before {
								${(attributes.shapeBorderColor) ? `
								border-top: 2px solid ${attributes.shapeBorderColor};
							border-left: 2px solid ${attributes.shapeBorderColor};` : '' }
								transform: rotate(45deg) skew(-13deg, -13deg) translate(-28%, -65%);
								width: calc(55% + 4px);
								height: calc(100% + 4px);
							}`
						);
					} else {
						normalcss.push(`.wpmozo-bna-icon-wrapper .hexagon:before {
							transform: rotate(45deg) skew(-16deg, -16deg) translate(-27%, -72%);
							width: 55%;
						}
						.wpmozo-bna-icon-wrapper .hexagon:after {
							transform: rotate(45deg) skew(-16deg, -16deg) translate(72%, 27%);
							width: 55%;
						}`);
					}

					normalcss.push(`
					.wpmozo-bna-icon-wrapper {
						width: 72px;
					}
					${attributes.shapeBackground ? `.wpmozo-bna-icon-wrapper .hexagon,
					.wpmozo-bna-icon-wrapper .hexagon:before,
					.wpmozo-bna-icon-wrapper .hexagon:after {
						background-color: ${attributes.shapeBackground};
					}` : '' }`);
				} else {
					if ( true === attributes.enableShapeBorder ) {
						normalcss.push(attributes.shapeBorderColor ? `.wpmozo-bna-icon-wrapper .wpmozo-bna-icon-square.wpmozo-bna-icon-shape-border,
						.wpmozo-bna-icon-wrapper .wpmozo-bna-icon-circle.wpmozo-bna-icon-shape-border {
							border: 2px solid ${attributes.shapeBorderColor};
						}` : '');
					}

					normalcss.push(attributes.shapeBackground ? `.wpmozo-bna-icon-wrapper .wpmozo-bna-icon-square,
					.wpmozo-bna-icon-wrapper .wpmozo-bna-icon-circle {
						background-color: ` + attributes.shapeBackground + `;
					}` : '' );
				}
			}
		}

		if ( 'imageSeparator' === attributes.lineUseWith ) {
			normalcss.push(attributes.imageWidth ? `.wpmozo-bna-separator-image {
				width: ${attributes.imageWidth}px;
			}` : '' );
		}
	}

	if ( 'shadow' === attributes.separatorType ) {
		normalcss.push(
			( attributes.separatorThickness || attributes.separatorColor ) 
			? `.wpmozo-bna-shadow { 
					${attributes.separatorThickness ? `height: ${attributes.separatorThickness}px;` : ''} 
					${attributes.separatorColor ? `background: radial-gradient(ellipse at 50% -50%, ${attributes.separatorColor} 0%, rgba(0, 0, 0, 0) 75%), repeat scroll;` : ''} 
				}`
			: ''
		);
		normalcss.push( attributes.contentAlign ? ` .wpmozo-bna-interactive-image-card-content { text-align: ` + attributes.contentAlign + `; }`: '' );
	}

	const hasStyles = normalcss.some(Boolean) || hovercss.some(Boolean);
	
	let styles = hasStyles ? `#block-${attributes.ID} {${normalcss.filter(Boolean).join('\n')} ${hovercss.filter(Boolean).join('\n')}}` : '';
	
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