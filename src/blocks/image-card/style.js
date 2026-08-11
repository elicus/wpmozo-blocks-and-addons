import {convertInlineStyleStr} from '../../common/utils.js'

const generateDynamicStyle = ( { attributes, clientId, isEdit } ) => {
	const toConvertStyles = [
        'title',
        'titleHover',
        'description',
        'descriptionHover',
        'content',
        'contentHover',
        'buttonText',
        'buttonTextHover',
		'buttonDimensions',
		'imageDimensions',
		'image',
		'imageHover',
		'container',
		'containerHover',
		'icon'
    ];
    let convertedStyle = convertInlineStyleStr(toConvertStyles, attributes);

    let buttonMediaPosition = attributes.buttonMediaPosition,
    	buttonAddi = convertedStyle.buttonText + convertedStyle.buttonDimensions;

    if ( 'before' === buttonMediaPosition ) {
    	buttonMediaPosition = 'row-reverse';
    }else if( 'after' === buttonMediaPosition ){
		buttonMediaPosition = 'row';
    }

    let normalcss = [],
		hovercss = [],
		cssExtras = [];
	const isEditor = (selector) => {return isEdit ? `,&.is_hover ${selector}` : ''};

	normalcss.push(
		( attributes.containerBackgroundColor || convertedStyle.container )
			? `.wpmozo-bna-image-card-wrapper{
				${attributes.containerBackgroundColor ? `background-color: ${attributes.containerBackgroundColor};` : ''}
				${convertedStyle.container || ''}
			}`
			: ''
	);

	hovercss.push(
		( attributes.containerHoverBackgroundColor || convertedStyle.containerHover )
			? `.wpmozo-bna-image-card-wrapper:hover${isEditor('.wpmozo-bna-image-card-wrapper')}{
				${attributes.containerHoverBackgroundColor ? `background-color: ${attributes.containerHoverBackgroundColor};` : ''}
				${convertedStyle.containerHover || ''}
			}`
			: ''
	);

	normalcss.push(
		( attributes.iconAlign || attributes.iconShape || convertedStyle.icon )
			? `.wpmozo-bna-image-card-icon-wrapper {
				${attributes.iconAlign ? `text-align: ${attributes.iconAlign};` : ''}
				${attributes.iconShape && attributes.iconShape === 'hexagon' ? `display:flex;justify-content:${attributes.iconAlign};` : ''}
				${convertedStyle.icon || ''}
			}`
			: ''
	);

	normalcss.push( attributes.iconColor ? `.wpmozo-bna-image-card-icon-wrapper i { color: ${attributes.iconColor}; }` : '' );

	hovercss.push( attributes.iconHoverColor ? `.wpmozo-bna-image-card-icon-wrapper i:hover${isEditor('.wpmozo-bna-image-card-icon-wrapper i')} { color: ${attributes.iconHoverColor}; }` : '' );

	normalcss.push(
		( attributes.contentBackgroundColor || convertedStyle.content )
			? `.wpmozo-bna-image-card-content-wrapper {
				${attributes.contentBackgroundColor ? `background-color: ${attributes.contentBackgroundColor};` : ''}
				${convertedStyle.content || ''}
			}`
			: ''
	);

	hovercss.push(
		( attributes.contentHoverBackgroundColor || convertedStyle.contentHover )
			? `.wpmozo-bna-image-card-content-wrapper:hover${isEditor('.wpmozo-bna-image-card-content-wrapper')} {
				${attributes.contentHoverBackgroundColor ? `background-color: ${attributes.contentHoverBackgroundColor};` : ''}
				${convertedStyle.contentHover || ''}
			}`
			: ''
	);

	normalcss.push(
	( attributes.titleColor || attributes.titleAlign || convertedStyle.title )
		? `.wpmozo-bna-image-card-title {
			${attributes.titleColor ? `color: ${attributes.titleColor};` : ''}
			${attributes.titleAlign ? `text-align: ${attributes.titleAlign};` : ''}
			${convertedStyle.title || ''}
		}`
		: ''
	);

	hovercss.push(
		( attributes.titleHoverColor || convertedStyle.titleHover )
			? `.wpmozo-bna-image-card-title:hover${isEditor('.wpmozo-bna-image-card-title')} {
				${attributes.titleHoverColor ? `color: ${attributes.titleHoverColor};` : ''}
				${convertedStyle.titleHover || ''}
			}`
			: ''
	);

	normalcss.push(
		( attributes.contentColor || attributes.contentAlign || convertedStyle.description )
			? `.wpmozo-bna-image-card-content {
				${attributes.contentColor ? `color: ${attributes.contentColor};` : ''}
				${attributes.contentAlign ? `text-align: ${attributes.contentAlign};` : ''}
				${convertedStyle.description || ''}
			}`
			: ''
	);

	hovercss.push(
		( attributes.contentHoverColor || convertedStyle.descriptionHover )
			? `.wpmozo-bna-image-card-content:hover${isEditor('.wpmozo-bna-image-card-content')} {
				${attributes.contentHoverColor ? `color: ${attributes.contentHoverColor};` : ''}
				${convertedStyle.descriptionHover || ''}
			}`
			: ''
	);

	if ( attributes.styleIcon && attributes.iconHoverBackground ) {
		hovercss.push(`
			.wpmozo-bna-image-card-icon-wrapper .wpmozo-bna-icon-square:hover${isEditor('.wpmozo-bna-image-card-icon-wrapper .wpmozo-bna-icon-square')},
			.wpmozo-bna-image-card-icon-wrapper .wpmozo-bna-icon-circle:hover${isEditor('.wpmozo-bna-image-card-icon-wrapper .wpmozo-bna-icon-circle')},
			.wpmozo-bna-image-card-icon-inner-wrap .hexagon:hover,
			.wpmozo-bna-image-card-icon-inner-wrap .hexagon:hover:before,
			.wpmozo-bna-image-card-icon-inner-wrap .hexagon:hover:after {
				background-color: ${attributes.iconHoverBackground};
			}
		`);
	}

	normalcss.push(
		( attributes.buttonTextColor || attributes.buttonTextBackground )
			? `.wpmozo-bna-image-card-button {
				${attributes.buttonTextColor ? `color: ${attributes.buttonTextColor};` : ''}
				${attributes.buttonTextBackground ? `background: ${attributes.buttonTextBackground};` : ''}
			}`
			: ''
	);

	hovercss.push(
		( attributes.buttonTextHoverColor || attributes.buttonTextHoverBackground || convertedStyle.buttonTextHover )
			? `.wpmozo-bna-image-card-button:hover${isEditor('.wpmozo-bna-image-card-button')} {
				${attributes.buttonTextHoverColor ? `color: ${attributes.buttonTextHoverColor};` : ''}
				${attributes.buttonTextHoverBackground ? `background: ${attributes.buttonTextHoverBackground};` : ''}
				${convertedStyle.buttonTextHover || ''}
			}`
			: ''
	);

	normalcss.push(attributes.buttonTextAlign? `.wpmozo-bna-image-card-button-wrap {text-align: ${attributes.buttonTextAlign};}`: '');

	normalcss.push(attributes.contentpadding?.top? `.wpmozo-bna-image-card-inner-content-wrapper {margin-top: ${attributes.contentpadding.top};}`: '');

	normalcss.push(
		( convertedStyle.image || convertedStyle.imageDimensions )
			? `.wpmozo-bna-image-card-image {
				${convertedStyle.image || ''}
				${convertedStyle.imageDimensions || ''}
			}`
			: ''
	);

	hovercss.push(
		( convertedStyle.imageHover )
			? `.wpmozo-bna-image-card-image:hover${isEditor('.wpmozo-bna-image-card-image')} {
				${convertedStyle.imageHover || ''}
			}`
			: ''
	);
	if( attributes.showButton ){
		normalcss.push(
			( attributes.buttonTextColor || attributes.buttonTextBackground || buttonAddi )
			? `.wpmozo-bna-image-card-button {
				${attributes.buttonTextColor ? `color: ${attributes.buttonTextColor};` : `color: inherit;`}
				${attributes.buttonTextBackground ? `background-color: ${attributes.buttonTextBackground};` : `background-color: transparent;`}
				${buttonAddi || ''}
			}`
			: ''
		);

		normalcss.push(
		( attributes.buttonTextHoverColor || attributes.buttonTextHoverBackground || buttonAddi )
			? `.wpmozo-bna-image-card-button:hover {
				${attributes.buttonTextHoverColor ? `color: ${attributes.buttonTextHoverColor};` : `color: inherit;`}
				${attributes.buttonTextHoverBackground ? `background-color: ${attributes.buttonTextHoverBackground};` : `background-color: transparent;`}
				${buttonAddi || ''}
			}`
			: ''
		);

		normalcss.push(
		attributes.buttonMediaType === 'image'
			? `.wpmozo-bna-image-card-button-wrap .wpmozo-bna-image-card-button-wrap-inner .wpmozo-bna-image-card-button img {
				width: ${attributes.buttonTextFontSize ? attributes.buttonTextFontSize : "20px"};
			}`
			: ''
		);

		normalcss.push(
		attributes.showMediaOnHover
			? `.wpmozo-bna-image-card-button-wrap .wpmozo-bna-image-card-button-wrap-inner .wpmozo-bna-image-card-button.show-on-hover:hover {
				column-gap: 10px;
			}
			.wpmozo-bna-image-card-button-wrap .wpmozo-bna-image-card-button-wrap-inner .wpmozo-bna-image-card-button.show-on-hover {
				column-gap: 0px;
			}`
			: ''
		);

		normalcss.push(
			attributes.buttonMediaPosition
				? `.wpmozo-bna-image-card-button-wrap .wpmozo-bna-image-card-button-wrap-inner .wpmozo-bna-image-card-button {
					flex-direction: ${buttonMediaPosition};
				}`
				: ''
		);

		normalcss.push(
			( attributes.showMediaOnHover === true && attributes.buttonMediaPosition === 'before' )
				? `.wpmozo-bna-image-card-button-wrap .wpmozo-bna-image-card-button-wrap-inner .wpmozo-bna-image-card-button.show-on-hover i,
				.wpmozo-bna-image-card-button-wrap .wpmozo-bna-image-card-button-wrap-inner .wpmozo-bna-image-card-button.show-on-hover img {
					margin-right: -${attributes.buttonTextFontSize ? attributes.buttonTextFontSize : '20px'};
				}
				.wpmozo-bna-image-card-button-wrap .wpmozo-bna-image-card-button-wrap-inner .wpmozo-bna-image-card-button.show-on-hover:hover i,
				.wpmozo-bna-image-card-button-wrap .wpmozo-bna-image-card-button-wrap-inner .wpmozo-bna-image-card-button.show-on-hover:hover img {
					margin-right: 0;
				}`
				: ''
		);
		normalcss.push(
			( attributes.showMediaOnHover === true && attributes.buttonMediaPosition === 'after' )
				? `.wpmozo-bna-image-card-button-wrap .wpmozo-bna-image-card-button-wrap-inner .wpmozo-bna-image-card-button.show-on-hover i,
				.wpmozo-bna-image-card-button-wrap .wpmozo-bna-image-card-button-wrap-inner .wpmozo-bna-image-card-button.show-on-hover img {
					margin-left: -${attributes.buttonTextFontSize ? attributes.buttonTextFontSize : '20px'};
				}
				.wpmozo-bna-image-card-button-wrap .wpmozo-bna-image-card-button-wrap-inner .wpmozo-bna-image-card-button.show-on-hover:hover i,
				.wpmozo-bna-image-card-button-wrap .wpmozo-bna-image-card-button-wrap-inner .wpmozo-bna-image-card-button.show-on-hover:hover img {
					margin-left: 0;
				}`
				: ''
		);
	}
	if ( attributes.icon ) {
		const hasFontSize = !!attributes.iconFontSize;
		const hasStyleIcon = !!attributes.styleIcon;
		const isHexagon = attributes.iconShape === 'hexagon';
		const showBorder = !!attributes.showShapeBorder;
		const borderColor = attributes.shapeBorderColor;
		const iconBg = attributes.iconBackground;
		const fontSize = attributes.iconFontSize;

		if ( hasFontSize && hasStyleIcon ) {
			if (isHexagon) {
				if (showBorder) {
					if (borderColor) {
						normalcss.push(
							( borderColor ) 
							? `.wpmozo-bna-image-card-icon-inner-wrap .hexagon.wpmozo-bna-border-hex:before {
									border-top: 2px solid ${borderColor};
									border-left: 2px solid ${borderColor};
								}
								.wpmozo-bna-image-card-icon-inner-wrap .hexagon.wpmozo-bna-border-hex {
									box-shadow: inset 2px 0px 0px 0px ${borderColor}, inset -2px 0px 0px 0px ${borderColor};
								}
								.wpmozo-bna-image-card-icon-inner-wrap .hexagon.wpmozo-bna-border-hex:after {
									border-right: 2px solid ${borderColor};
									border-bottom: 2px solid ${borderColor};
								}`
							: ''
						);
						normalcss.push(
							( attributes.iconFontSize || attributes.contentpadding?.top ) 
							? `.wpmozo-bna-image-card-icon-wrapper {
									margin-top : calc( ${(attributes.iconFontSize ? "-"+attributes.iconFontSize/2+"px" : "-16px") + " - " + (attributes.contentpadding?.top ? attributes.contentpadding.top : "0px") } ) ;
								}`
							: ''
						);
					}
					normalcss.push(`.wpmozo-bna-image-card-icon-inner-wrap .hexagon.wpmozo-bna-border-hex:after { transform: rotate(45deg) skew(-15.8deg, -15.8deg) translate(72%, 27%); width: 55%; height: 100%; } .wpmozo-bna-image-card-icon-inner-wrap .hexagon.wpmozo-bna-border-hex:before { transform: rotate(45deg) skew(-15.8deg, -15.8deg) translate(-27%, -72%); width: 55%; height: 100%;}`);

					normalcss.push(
						( attributes.iconFontSize || attributes.contentpadding.top ) 
						? `.wpmozo-bna-image-card-icon-wrapper {
								margin-top : calc( ${(attributes.iconFontSize ? "-"+attributes.iconFontSize/2+"px" : "-16px") + " - " + (attributes.contentpadding.top ? attributes.contentpadding.top : "0px") } ) ;
							}`
						: ''
					);
				} else {
					normalcss.push(` .wpmozo-bna-image-card-icon-inner-wrap .hexagon:after, .wpmozo-bna-image-card-icon-inner-wrap .hexagon:before { transform: rotate(45deg) skew(-16deg, -16deg) translate(72%, 27%); width: 55%; } .wpmozo-bna-image-card-icon-inner-wrap .hexagon:before { transform: rotate(45deg) skew(-16deg, -16deg) translate(-27%, -72%); } `);
					
					normalcss.push(
						( attributes.iconFontSize || attributes.contentpadding.top ) 
						? `.wpmozo-bna-image-card-icon-wrapper {
								margin-top : calc( ${(attributes.iconFontSize ? "-"+attributes.iconFontSize/2+"px" : "-16px") + " - " + (attributes.contentpadding.top ? attributes.contentpadding.top : "0px") } ) ;
							}`
						: ''
					);
				}
				normalcss.push(
					( fontSize ) 
					? `.wpmozo-bna-image-card-icon-inner-wrap {
							width: calc(${fontSize}px + ${fontSize / 1.15}px);
						}
						.wpmozo-bna-image-card-icon-inner-wrap i {
							font-size: ${fontSize}px;
						}`
					: ''
				);

				normalcss.push(
					( iconBg ) 
					? `.wpmozo-bna-image-card-icon-inner-wrap .hexagon,
						.wpmozo-bna-image-card-icon-inner-wrap .hexagon:before,
						.wpmozo-bna-image-card-icon-inner-wrap .hexagon:after {
							background-color: ${iconBg};
						}`
					: ''
				);
			} else {
				normalcss.push(
					( fontSize || (showBorder && borderColor) || iconBg ) 
					? `.wpmozo-bna-image-card-icon-wrapper i {
							${showBorder && borderColor ? `border: 2px solid ${borderColor};` : ''}
							${fontSize ? `font-size: ${fontSize}px;` : ''}
							${iconBg ? `background-color: ${iconBg};` : ''}
						}`
					: ''
				);
				normalcss.push(
					( attributes.iconFontSize || attributes.contentpadding.top || showBorder ) 
					? `.wpmozo-bna-image-card-icon-wrapper {
							margin-top : calc( ${(attributes.iconFontSize ? "-"+attributes.iconFontSize/2+"px" : "-16px") + " - " + (attributes.contentpadding.top ? attributes.contentpadding.top : "0px") } - ${showBorder ? "18px" : "16px"} ) ;
						}`
					: ''
				);
			}
		} else if ( ! hasStyleIcon ) {
			if ( hasFontSize ) {
				normalcss.push(fontSize ? `.wpmozo-bna-image-card-icon-wrapper i { font-size: ${fontSize}px; }` : '');
				
				if ( showBorder ) {
					normalcss.push(attributes.shapeBorderColor ? `.wpmozo-bna-image-card-icon-wrapper i {
						border: 2px solid ${attributes.shapeBorderColor}; padding: 5px;
					}` : '');
					normalcss.push(
						( attributes.iconFontSize || attributes.contentpadding.top ) 
						? `.wpmozo-bna-image-card-icon-wrapper {
								margin-top : calc( -${attributes.iconFontSize/2 + "px - " + (attributes.contentpadding.top ? attributes.contentpadding.top : "0px") } - 7px ) ;
							}`
						: ''
					);
				} else {
					normalcss.push(
						( attributes.iconFontSize || attributes.contentpadding.top ) 
						? `.wpmozo-bna-image-card-icon-wrapper {
								margin-top : calc( -${attributes.iconFontSize/2 + "px - " + (attributes.contentpadding.top ? attributes.contentpadding.top : "0px") } ) ;
							}`
						: ''
					);
				}
			} else {
				normalcss.push(attributes.contentpadding.top ? `.wpmozo-bna-image-card-icon-wrapper { margin-top : calc( -16px - ${ attributes.contentpadding.top ? attributes.contentpadding.top : "0px" } ) ; }` : '');
			}
		} else if ( hasStyleIcon && ! hasFontSize ) {
			if ( isHexagon ) {
				if ( showBorder && borderColor ) {
					normalcss.push(borderColor ? `.wpmozo-bna-image-card-icon-inner-wrap .hexagon.wpmozo-bna-border-hex {
							border-left: 2px solid ${borderColor};
							border-right: 2px solid ${borderColor};
						}
						.wpmozo-bna-image-card-icon-inner-wrap .hexagon.wpmozo-bna-border-hex:after {
							border-right: 2px solid ${borderColor};
							border-bottom: 2px solid ${borderColor};
						}
						.wpmozo-bna-image-card-icon-inner-wrap .hexagon.wpmozo-bna-border-hex:before {
							border-top: 2px solid ${borderColor};
							border-left: 2px solid ${borderColor};
						}` : ''
					);
					normalcss.push(`
						.wpmozo-bna-image-card-icon-inner-wrap {
							width: 72px;
						}
						.wpmozo-bna-image-card-icon-inner-wrap .hexagon:after {
							transform: rotate(45deg) skew(-13deg, -13deg) translate(57%, 19%);
							width: calc(55% + 4px);
							height: calc(100% + 4px);
						}
						.wpmozo-bna-image-card-icon-inner-wrap .hexagon:before {
							transform: rotate(45deg) skew(-13deg, -13deg) translate(-28%, -65%);
							width: calc(55% + 4px);
							height: calc(100% + 4px);
						}`
					);
					normalcss.push(attributes.contentpadding.top ? `.wpmozo-bna-image-card-icon-wrapper {
						margin-top : calc( -20px - ${(attributes.contentpadding.top ? attributes.contentpadding.top : "0px")} );
					}` : '')
				} else if ( showBorder && !borderColor ) {
					normalcss.push(borderColor ? `
						.wpmozo-bna-image-card-icon-inner-wrap .hexagon.wpmozo-bna-border-hex {
							border-left: 2px solid ${borderColor};
							border-right: 2px solid ${borderColor};
						}
						.wpmozo-bna-image-card-icon-inner-wrap .hexagon.wpmozo-bna-border-hex:after {
							border-right: 2px solid ${borderColor};
							border-bottom: 2px solid ${borderColor};
						}
						.wpmozo-bna-image-card-icon-inner-wrap .hexagon.wpmozo-bna-border-hex:before {
							border-top: 2px solid ${borderColor};
							border-left: 2px solid ${borderColor};
						}` : ''
					);
					normalcss.push(`
						.wpmozo-bna-image-card-icon-inner-wrap {
							width: 72px;
						}
						.wpmozo-bna-image-card-icon-inner-wrap .hexagon:after {
							transform: rotate(45deg) skew(-13deg, -13deg) translate(57%, 19%);
							width: calc(55% + 4px);
							height: calc(100% + 4px);
						}
						.wpmozo-bna-image-card-icon-inner-wrap .hexagon:before {
							transform: rotate(45deg) skew(-13deg, -13deg) translate(-28%, -65%);
							width: calc(55% + 4px);
							height: calc(100% + 4px);
						}`
					);
					normalcss.push(
						attributes.contentpadding.top ? 
							`.wpmozo-bna-image-card-icon-wrapper {
							margin-top : calc( -20px - ${(attributes.contentpadding.top ? attributes.contentpadding.top : "0px")} );
						}`: ''
					);
				} else {
					normalcss.push(
						`.wpmozo-bna-image-card-icon-inner-wrap {
							width: 72px;
						}
						.wpmozo-bna-image-card-icon-inner-wrap .hexagon:after {
							transform: rotate(45deg) skew(-16deg, -16deg) translate(72%, 27%);
							width: 55%;
						}
						.wpmozo-bna-image-card-icon-inner-wrap .hexagon:before {
							transform: rotate(45deg) skew(-16deg, -16deg) translate(-27%, -72%);
							width: 55%;
						}`
					);
					normalcss.push(attributes.contentpadding.top ?
						`.wpmozo-bna-image-card-icon-wrapper {
							margin-top : calc( -20px - ${(attributes.contentpadding.top ? attributes.contentpadding.top : "0px")} );
						}` : ''
					);
				}
				normalcss.push( iconBg ? 
					`.wpmozo-bna-image-card-icon-inner-wrap .hexagon,
					.wpmozo-bna-image-card-icon-inner-wrap .hexagon:before,
					.wpmozo-bna-image-card-icon-inner-wrap .hexagon:after {
						background-color: ${iconBg};
					}` : ''
				);
			} else {
				if (showBorder && borderColor) {

					normalcss.push(`.wpmozo-bna-image-card-icon-wrapper .wpmozo-bna-icon-square.wpmozo-bna-icon-shape-border,
						.wpmozo-bna-image-card-icon-wrapper .wpmozo-bna-icon-circle.wpmozo-bna-icon-shape-border {
							border: 2px solid ${borderColor};
						}`
					);
					normalcss.push(attributes.contentpadding.top ? 
						`.wpmozo-bna-image-card-icon-wrapper {
							margin-top : calc( -16px - ${(attributes.contentpadding.top ? attributes.contentpadding.top : "0px")} - 18px ) ;
						}`: ''
					);
				} else if ( showBorder && !borderColor ) {
					normalcss.push(attributes.contentpadding.top ? 
						`.wpmozo-bna-image-card-icon-wrapper {
							margin-top : calc( -16px - ${(attributes.contentpadding.top ? attributes.contentpadding.top : "0px")} - 18px ) ;
						}`
						:''
					);
				} else {
					normalcss.push(attributes.contentpadding.top ? 
						`.wpmozo-bna-image-card-icon-wrapper {
							margin-top : calc( -16px - ${(attributes.contentpadding.top ? attributes.contentpadding.top : "0px")} - 16px ) ;
						}`: ''
					);
				}
				normalcss.push(iconBg ? 
					`.wpmozo-bna-image-card-icon-wrapper .wpmozo-bna-icon-square,
					.wpmozo-bna-image-card-icon-wrapper .wpmozo-bna-icon-circle {
						background-color: ${iconBg};
					}` : ''
				);
			}
		}
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