import {convertInlineStyleStr} from '../../common/utils.js'

const generateDynamicStyle = ( { attributes, clientId } ) => {
    const toConvertStyles = [
        'title',
        'titleHover',
        'description',
        'descriptionHover',
        'content',
        'contentHover',
        'buttonText',
		'buttonDimensions',
		'imageDimensions',
		'image'
    ];
    let convertedStyle = convertInlineStyleStr(toConvertStyles, attributes);

    let buttonMediaPosition = attributes.buttonMediaPosition, 
    	buttonAddi = convertedStyle.buttonText + convertedStyle.buttonDimensions;

    if ( 'before' === buttonMediaPosition ) {
    	buttonMediaPosition = 'row-reverse';
    }else if( 'after' === buttonMediaPosition ){
		buttonMediaPosition = 'row';
    }

    let styles = `#block-${attributes.ID}{`;
	styles += `.wpmozo-bna-image-card-icon-wrapper {
			${attributes.iconAlign ? `text-align : `+attributes.iconAlign+`;` : '' }
			${ attributes.iconShape && 'hexagon' === attributes.iconShape ? "display:flex;justify-content:" + attributes.iconAlign + ";": ''}
		}
		${ attributes.iconColor ?  `
			.wpmozo-bna-image-card-icon-wrapper i {
				color : `+attributes.iconColor+`;
			}` : ""
		}
		.wpmozo-bna-image-card-content-wrapper {
			${attributes.contentBackgroundColor ? `background-color: ${attributes.contentBackgroundColor};` : ''}
			${convertedStyle.content}
		}
		.wpmozo-bna-image-card-content-wrapper:hover {
			${attributes.contentHoverBackgroundColor ? `background-color: ${attributes.contentHoverBackgroundColor};` : ''}
			${convertedStyle.contentHover}
		}
		.wpmozo-bna-image-card-title {
			${attributes.titleColor ? `color: ${attributes.titleColor};` : ''}
			${attributes.titleAlign ? `text-align: ${attributes.titleAlign};` : ''}
			${convertedStyle.title}
		}
		.wpmozo-bna-image-card-title:hover {
			${attributes.titleHoverColor ? `color: ${attributes.titleHoverColor};` : ''}
			${convertedStyle.titleHover}
		}
		.wpmozo-bna-image-card-content {
			${attributes.contentColor ? `color: ${attributes.contentColor};` : ''}
			${attributes.contentAlign ? `text-align: ${attributes.contentAlign};` : ''}
			${convertedStyle.description}
		}
		.wpmozo-bna-image-card-content:hover {
			${attributes.contentHoverColor ? `color: ${attributes.contentHoverColor};` : ''}
			${convertedStyle.descriptionHover}
		}
		.wpmozo-bna-image-card-button {
			${attributes.buttonTextColor ? `color: ${attributes.buttonTextColor};` : ''}
			${attributes.buttonTextBackground ? `background: ${attributes.buttonTextBackground};` : ''}
		}
		${ attributes.buttonTextAlign ? `
			.wpmozo-bna-image-card-button-wrap { 
				text-align: ${attributes.buttonTextAlign}; 
			}` : ''
		}
		.wpmozo-bna-image-card-inner-content-wrapper {
			margin-top : ${(attributes.contentpadding.top ? attributes.contentpadding.top : "0px")};
		}
		.wpmozo-bna-image-card-wrapper-inner img {
			${convertedStyle.image}
			${convertedStyle.imageDimensions}
		}`;

	styles += `${attributes.showButton ? `
		.wpmozo-bna-image-card-button {
			color: ${attributes.buttonTextColor || 'inherit'};
			background-color: ${attributes.buttonTextBackground || 'transparent'};
			${ buttonAddi || '' }
		}
		${ 'image' === attributes.buttonMediaType ? `.wpmozo-bna-image-card-button-wrap .wpmozo-bna-image-card-button-wrap-inner .wpmozo-bna-image-card-button img { 
			width: ${attributes.buttonTextFontSize ? attributes.buttonTextFontSize : "20px"}; 
		}` : '' }

		${ attributes.showMediaOnHover ? `
			.wpmozo-bna-image-card-button-wrap .wpmozo-bna-image-card-button-wrap-inner .wpmozo-bna-image-card-button.show-on-hover:hover { 
				column-gap: 10px; 
			}
			.wpmozo-bna-image-card-button-wrap .wpmozo-bna-image-card-button-wrap-inner .wpmozo-bna-image-card-button.show-on-hover { 
				column-gap: 0px; 
			}`
		: '' }
		${ ( attributes.buttonMediaPosition ) ? `
			.wpmozo-bna-image-card-button-wrap .wpmozo-bna-image-card-button-wrap-inner .wpmozo-bna-image-card-button { 
				flex-direction: ${buttonMediaPosition}; 
			}`
		: '' }
		${ ( true === attributes.showMediaOnHover && 'before' === attributes.buttonMediaPosition ) ? `
			.wpmozo-bna-image-card-button-wrap .wpmozo-bna-image-card-button-wrap-inner .wpmozo-bna-image-card-button.show-on-hover i, 
			.wpmozo-bna-image-card-button-wrap .wpmozo-bna-image-card-button-wrap-inner .wpmozo-bna-image-card-button.show-on-hover img { 
				margin-right: -${ (attributes.buttonTextFontSize) ? attributes.buttonTextFontSize : '20px'}; 	
			}
			.wpmozo-bna-image-card-button-wrap .wpmozo-bna-image-card-button-wrap-inner .wpmozo-bna-image-card-button.show-on-hover:hover i,
			.wpmozo-bna-image-card-button-wrap .wpmozo-bna-image-card-button-wrap-inner .wpmozo-bna-image-card-button.show-on-hover:hover img { 
				margin-right: 0; 
			}`
		: '' }
		${ ( true === attributes.showMediaOnHover && 'after' === attributes.buttonMediaPosition ) ? `
			.wpmozo-bna-image-card-button-wrap .wpmozo-bna-image-card-button-wrap-inner .wpmozo-bna-image-card-button.show-on-hover i,
			.wpmozo-bna-image-card-button-wrap .wpmozo-bna-image-card-button-wrap-inner .wpmozo-bna-image-card-button.show-on-hover img { 
				margin-left: -${ (attributes.buttonTextFontSize) ? attributes.buttonTextFontSize : '20px'}; 
			}
			.wpmozo-bna-image-card-button-wrap .wpmozo-bna-image-card-button-wrap-inner .wpmozo-bna-image-card-button.show-on-hover:hover i,
			.wpmozo-bna-image-card-button-wrap .wpmozo-bna-image-card-button-wrap-inner .wpmozo-bna-image-card-button.show-on-hover:hover img { 
				margin-left: 0; 
			}`
		: '' }
	` : '' }`;

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
						styles += `.wpmozo-bna-image-card-icon-inner-wrap .hexagon.wpmozo-bna-border-hex {
							box-shadow: inset 2px 0px 0px 0px ${borderColor}, inset -2px 0px 0px 0px ${borderColor};
						}
						.wpmozo-bna-image-card-icon-inner-wrap .hexagon.wpmozo-bna-border-hex:after {
							border-right: 2px solid ${borderColor};
							border-bottom: 2px solid ${borderColor};
						}
						.wpmozo-bna-image-card-icon-inner-wrap .hexagon.wpmozo-bna-border-hex:before {
							border-top: 2px solid ${borderColor};
							border-left: 2px solid ${borderColor};
						}`;
						styles += `.wpmozo-bna-image-card-icon-wrapper {
							margin-top : calc( ${(attributes.iconFontSize ? "-"+attributes.iconFontSize/2+"px" : "-16px") + " - " + (attributes.contentpadding.top ? attributes.contentpadding.top : "0px") } ) ;
						}`;
					}
					styles += `.wpmozo-bna-image-card-icon-inner-wrap .hexagon.wpmozo-bna-border-hex:after {
						transform: rotate(45deg) skew(-15.8deg, -15.8deg) translate(72%, 27%);
						width: 55%;
						height: 100%;
					}
					.wpmozo-bna-image-card-icon-inner-wrap .hexagon.wpmozo-bna-border-hex:before {
						transform: rotate(45deg) skew(-15.8deg, -15.8deg) translate(-27%, -72%);
						width: 55%;
						height: 100%;
					}`;
					styles += `.wpmozo-bna-image-card-icon-wrapper {
						margin-top : calc( ${(attributes.iconFontSize ? "-"+attributes.iconFontSize/2+"px" : "-16px") + " - " + (attributes.contentpadding.top ? attributes.contentpadding.top : "0px") } ) ;
					}`;
				} else {
					styles += `.wpmozo-bna-image-card-icon-inner-wrap .hexagon:after,
					.wpmozo-bna-image-card-icon-inner-wrap .hexagon:before {
						transform: rotate(45deg) skew(-16deg, -16deg) translate(72%, 27%);
						width: 55%;
					}
					.wpmozo-bna-image-card-icon-inner-wrap .hexagon:before {
						transform: rotate(45deg) skew(-16deg, -16deg) translate(-27%, -72%);
					}`;
					styles += `.wpmozo-bna-image-card-icon-wrapper {
						margin-top : calc( ${(attributes.iconFontSize ? "-"+attributes.iconFontSize/2+"px" : "-16px") + " - " + (attributes.contentpadding.top ? attributes.contentpadding.top : "0px") } ) ;
					}`;
				}

				styles += `.wpmozo-bna-image-card-icon-inner-wrap {
					width: calc(${fontSize}px + ${fontSize / 1.15}px);
				}
				.wpmozo-bna-image-card-icon-inner-wrap i {
					font-size: ${fontSize}px;
				}`;

				if ( iconBg ) {
					styles += `.wpmozo-bna-image-card-icon-inner-wrap .hexagon,
					.wpmozo-bna-image-card-icon-inner-wrap .hexagon:before,
					.wpmozo-bna-image-card-icon-inner-wrap .hexagon:after {
						background-color: ${iconBg};
					}`;
				}
			} else {
				styles += `
				.wpmozo-bna-image-card-icon-wrapper i {
					${showBorder && borderColor ? `border: 2px solid ${borderColor};` : ''}
					font-size: ${fontSize}px;
					${iconBg ? `background-color: ${iconBg};` : ''}
				}`;
				styles += `
				.wpmozo-bna-image-card-icon-wrapper {
					margin-top : calc( ${(attributes.iconFontSize ? "-"+attributes.iconFontSize/2+"px" : "-16px") + " - " + (attributes.contentpadding.top ? attributes.contentpadding.top : "0px") } - ${showBorder ? "18px" : "16px"} ) ;
				}`;
			}
		} else if ( ! hasStyleIcon ) {
			if ( hasFontSize ) {
				styles += `.wpmozo-bna-image-card-icon-wrapper i { 
					font-size: ${fontSize}px; 
				}`;
				if ( showBorder ) {
					styles += `.wpmozo-bna-image-card-icon-wrapper {
						margin-top : calc( -${attributes.iconFontSize/2 + "px - " + (attributes.contentpadding.top ? attributes.contentpadding.top : "0px") } - 7px ) ;
					}`;
					styles += `.wpmozo-bna-image-card-icon-wrapper i { 
						border: 2px solid ${attributes.shapeBorderColor}; padding: 5px; 
					}`;
				} else {
					styles += `.wpmozo-bna-image-card-icon-wrapper {
						margin-top : calc( -${attributes.iconFontSize/2 + "px - " + (attributes.contentpadding.top ? attributes.contentpadding.top : "0px") } ) ;
					}`;
				}
			} else {
				styles += `.wpmozo-bna-image-card-icon-wrapper {
					margin-top : calc( -16px - ${ attributes.contentpadding.top ? attributes.contentpadding.top : "0px" } ) ;
				}`;
			}
		} else if ( hasStyleIcon && ! hasFontSize ) {
			if ( isHexagon ) {
				if ( showBorder && borderColor ) {
					styles += `.wpmozo-bna-image-card-icon-inner-wrap .hexagon.wpmozo-bna-border-hex {
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
					}
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
					}
					.wpmozo-bna-image-card-icon-wrapper {
						margin-top : calc( -20px - ${(attributes.contentpadding.top ? attributes.contentpadding.top : "0px")} );
					}`;
				} else if ( showBorder && !borderColor ) {
					styles += `.wpmozo-bna-image-card-icon-inner-wrap .hexagon.wpmozo-bna-border-hex {
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
					}
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
					}
					.wpmozo-bna-image-card-icon-wrapper {
						margin-top : calc( -20px - ${(attributes.contentpadding.top ? attributes.contentpadding.top : "0px")} );
					}`;
				} else {
					styles += `.wpmozo-bna-image-card-icon-inner-wrap {
						width: 72px;
					}
					.wpmozo-bna-image-card-icon-inner-wrap .hexagon:after {
						transform: rotate(45deg) skew(-16deg, -16deg) translate(72%, 27%);
						width: 55%;
					}
					.wpmozo-bna-image-card-icon-inner-wrap .hexagon:before {
						transform: rotate(45deg) skew(-16deg, -16deg) translate(-27%, -72%);
						width: 55%;
					}
					.wpmozo-bna-image-card-icon-wrapper {
						margin-top : calc( -20px - ${(attributes.contentpadding.top ? attributes.contentpadding.top : "0px")} );
					}`;
				}

				if ( iconBg ) {
					styles += `.wpmozo-bna-image-card-icon-inner-wrap .hexagon,
					.wpmozo-bna-image-card-icon-inner-wrap .hexagon:before,
					.wpmozo-bna-image-card-icon-inner-wrap .hexagon:after {
						background-color: ${iconBg};
					}`;
				}
			} else {
				if (showBorder && borderColor) {
					styles += `.wpmozo-bna-image-card-icon-wrapper .wpmozo-bna-icon-square.wpmozo-bna-icon-shape-border,
					.wpmozo-bna-image-card-icon-wrapper .wpmozo-bna-icon-circle.wpmozo-bna-icon-shape-border {
						border: 2px solid ${borderColor};
					}`;
					styles += `.wpmozo-bna-image-card-icon-wrapper {
						margin-top : calc( -16px - ${(attributes.contentpadding.top ? attributes.contentpadding.top : "0px")} - 18px ) ;
					}`;
				} else if ( showBorder && !borderColor ) {
					styles += `.wpmozo-bna-image-card-icon-wrapper {
						margin-top : calc( -16px - ${(attributes.contentpadding.top ? attributes.contentpadding.top : "0px")} - 18px ) ;
					}`;
				} else {
					styles += `.wpmozo-bna-image-card-icon-wrapper {
						margin-top : calc( -16px - ${(attributes.contentpadding.top ? attributes.contentpadding.top : "0px")} - 16px ) ;
					}`;
				}
				if ( iconBg ) {
					styles += `.wpmozo-bna-image-card-icon-wrapper .wpmozo-bna-icon-square,
					.wpmozo-bna-image-card-icon-wrapper .wpmozo-bna-icon-circle {
						background-color: ${iconBg};
					}`;
				}
			}
		}
	}
    styles += `}`;

    return styles;
};

export default generateDynamicStyle;