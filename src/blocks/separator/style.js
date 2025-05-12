import {convertInlineStyleStr} from '../../common/utils.js';

const generateDynamicStyle = ({ attributes, clientId }) => {

	const { iconFontSize, separatorColor } = attributes,
	toConvertStyles = [
    	'textNormal',
    	'textHover',
    	'content',
    	'layout'
    ];
    let convertedStyle = convertInlineStyleStr( toConvertStyles, attributes );

	let styles = `#block-${attributes.ID}{`;

	styles += `
		.wpmozo-bna-text-wrapper {
			color : ${attributes.textNormalColor};
			${convertedStyle.textNormal}
		}
		.wpmozo-bna-text-wrapper:hover {
			color : ${attributes.textHoverColor};
			${convertedStyle.textHover}
		}
	`;

	if ('line' === attributes.separatorType) {
		styles += `
			.wpmozo-bna-line {
				border-top-width: ${attributes.separatorThickness}px;
				border-top-color: ${attributes.separatorColor};
				border-top-style: ${attributes.lineStyle};
			}
		`;

		if ('solid' === attributes.lineStyle && undefined === attributes.separatorColor) {
			styles += `
				.wpmozo-bna-line {
					border-top-width: ${attributes.separatorThickness}px;
					border-image-slice: 1;
					border-image-source: ${attributes.separatorGradient};
					border-top-style: ${attributes.lineStyle};
				}
			`;
		}

		if ('solid' !== attributes.lineStyle) {
			styles += `
				.wpmozo-bna-line {
					border-top-color: ${attributes.shadowColor};
				}
			`;
		}

		if ('iconSeparator' === attributes.lineUseWith) {
			styles += `
				.wpmozo-bna-icon-wrapper i {
					color: ${attributes.iconColor};
				}
			`;

			if (true === attributes.enableIconFontSize && true === attributes.styleIcon) {
				if ('hexagon' === attributes.iconShape) {
					if (true === attributes.enableShapeBorder) {
						styles += `
							.wpmozo-bna-icon-wrapper .hexagon.wpmozo-bna-border-hex {
								box-shadow: inset 2px 0px 0px 0px ${attributes.shapeBorderColor}, inset -2px 0px 0px 0px ${attributes.shapeBorderColor};
							}
							.wpmozo-bna-icon-wrapper .hexagon.wpmozo-bna-border-hex:after {
								border-right: 2px solid ${attributes.shapeBorderColor};
								border-bottom: 2px solid ${attributes.shapeBorderColor};
								transform: rotate(45deg) skew(-15.8deg, -15.8deg) translate(72%, 27%);
								width: 55%;
								height: 100%;
							}
							.wpmozo-bna-icon-wrapper .hexagon.wpmozo-bna-border-hex:before {
								border-top: 2px solid ${attributes.shapeBorderColor};
								border-left: 2px solid ${attributes.shapeBorderColor};
								transform: rotate(45deg) skew(-15.8deg, -15.8deg) translate(-27%, -72%);
								width: 55%;
								height: 100%;
							}
						`;
					} else {
						styles += `
							.wpmozo-bna-icon-wrapper .hexagon:after {
								transform: rotate(45deg) skew(-16deg, -16deg) translate(72%, 27%);
								width: 55%;
							}
							.wpmozo-bna-icon-wrapper .hexagon:before {
								transform: rotate(45deg) skew(-16deg, -16deg) translate(-27%, -72%);
								width: 55%;
							}
						`;
					}

					styles += `
						.wpmozo-bna-icon-wrapper {
							width: calc(${attributes.iconFontSize}px + ${attributes.iconFontSize / 1.15}px);
						}
						.wpmozo-bna-icon-wrapper i {
							font-size: ${attributes.iconFontSize}px;
						}
						.wpmozo-bna-icon-wrapper .hexagon,
						.wpmozo-bna-icon-wrapper .hexagon:before,
						.wpmozo-bna-icon-wrapper .hexagon:after {
							background-color: ${attributes.shapeBackground};
						}
					`;
				} else {
					if (true === attributes.enableShapeBorder) {
						styles += `
							.wpmozo-bna-icon-wrapper i {
								border: 2px solid ${attributes.shapeBorderColor};
								font-size: ${attributes.iconFontSize}px;
							}
						`;
					}

					styles += `
						.wpmozo-bna-icon-wrapper i {
							font-size: ${attributes.iconFontSize}px;
							background-color: ${attributes.shapeBackground};
						}
					`;
				}
			} else if (true === attributes.enableIconFontSize && true !== attributes.styleIcon) {
				styles += `
					.wpmozo-bna-icon-wrapper i {
						font-size: ${attributes.iconFontSize}px;
					}
				`;
			} else if (true !== attributes.enableIconFontSize && true === attributes.styleIcon) {
				if ('hexagon' === attributes.iconShape) {
					if (true === attributes.enableShapeBorder) {
						styles += `
							.wpmozo-bna-icon-wrapper .hexagon.wpmozo-bna-border-hex {
								border-left: 2px solid ${attributes.shapeBorderColor};
								border-right: 2px solid ${attributes.shapeBorderColor};
							}
							.wpmozo-bna-icon-wrapper .hexagon.wpmozo-bna-border-hex:after {
								border-right: 2px solid ${attributes.shapeBorderColor};
								border-bottom: 2px solid ${attributes.shapeBorderColor};
								transform: rotate(45deg) skew(-13deg, -13deg) translate(57%, 19%);
								width: calc(55% + 4px);
								height: calc(100% + 4px);
							}
							.wpmozo-bna-icon-wrapper .hexagon.wpmozo-bna-border-hex:before {
								border-top: 2px solid ${attributes.shapeBorderColor};
								border-left: 2px solid ${attributes.shapeBorderColor};
								transform: rotate(45deg) skew(-13deg, -13deg) translate(-28%, -65%);
								width: calc(55% + 4px);
								height: calc(100% + 4px);
							}
						`;
					} else {
						styles += `
							.wpmozo-bna-icon-wrapper .hexagon:before {
								transform: rotate(45deg) skew(-16deg, -16deg) translate(-27%, -72%);
								width: 55%;
							}
							.wpmozo-bna-icon-wrapper .hexagon:after {
								transform: rotate(45deg) skew(-16deg, -16deg) translate(72%, 27%);
								width: 55%;
							}
						`;
					}

					styles += `
						.wpmozo-bna-icon-wrapper {
							width: 72px;
						}
						.wpmozo-bna-icon-wrapper .hexagon,
						.wpmozo-bna-icon-wrapper .hexagon:before,
						.wpmozo-bna-icon-wrapper .hexagon:after {
							background-color: ${attributes.shapeBackground};
						}
					`;
				} else {
					if (true === attributes.enableShapeBorder) {
						styles += `
							.wpmozo-bna-icon-wrapper .wpmozo-bna-icon-square.wpmozo-bna-icon-shape-border,
							.wpmozo-bna-icon-wrapper .wpmozo-bna-icon-circle.wpmozo-bna-icon-shape-border {
								border: 2px solid ${attributes.shapeBorderColor};
							}
						`;
					}

					styles += `
						.wpmozo-bna-icon-wrapper .wpmozo-bna-icon-square,
						.wpmozo-bna-icon-wrapper .wpmozo-bna-icon-circle {
							background-color: ${attributes.shapeBackground};
						}
					`;
				}
			}
		}

		if ('imageSeparator' === attributes.lineUseWith) {
			styles += `
				.wpmozo-bna-separator-image {
					width: ${attributes.imageWidth}px;
				}
			`;
		}
	}

	if ('shadow' === attributes.separatorType) {
		styles += `
			.wpmozo-bna-shadow {
				height: ${attributes.separatorThickness}px;
				background: radial-gradient(ellipse at 50% -50%, ${attributes.shadowColor} 0%, rgba(0, 0, 0, 0) 75%), repeat scroll;
			}
			.wpmozo-bna-interactive-image-card-content {
				text-align: ${attributes.contentAlign};
			}
		`;
	}
	
	styles += `}`;

	return styles;
};

export default generateDynamicStyle;