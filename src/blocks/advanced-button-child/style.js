import { convertInlineStyleStr } from '../../common/utils.js';

const generateDynamicStyle = ({ attributes }) => {
	const toConvertStyles = [
		'button',
		'buttonContainer',
		'icon',
		'secondaryText'
	];
	const convertedStyle = convertInlineStyleStr(toConvertStyles, attributes);

	const alignmentMap = { left: 'flex-start', right: 'flex-end', center: 'center' };
	let alignment = alignmentMap[attributes.buttonAlign] || 'auto';

	let buttonMediaPosition = attributes.buttonMediaPosition;
	if (buttonMediaPosition === 'before') {
		buttonMediaPosition = 'row-reverse';
	} else if (buttonMediaPosition === 'after') {
		buttonMediaPosition = 'row';
	}

	let styles = `#block-${attributes.ID} {`;

	styles += `
		.wpmozo-button-link {
			${convertedStyle.buttonContainer}
		}
		.wpmozo-button-text {
			color: ${attributes.buttonColor};
			${convertedStyle.button}
		}
		.wpmozo-bna-button-icon {
			color: ${attributes.iconColor};
			font-size: ${attributes.iconFontSize}px;
			${convertedStyle.icon}
		}
		.wpmozo-button-secondary-text {
			color: ${attributes.secondaryTextColor};
			display: flex;
			justify-content: ${attributes.secAlign};
			${convertedStyle.secondaryText}
		}
		.wpmozo-primary-text-with-icon {
			flex-direction: ${buttonMediaPosition};
			display:flex;
			justify-content: ${attributes.primaryAlign};
		}
		.wpmozo-bna-button-icon{
			transition:all 0.3s ease-in-out;
		}
	`;

	if (attributes.showMediaOnHover) {
		styles += `
		.wpmozo-button-link.show-on-hover {
			transition: column-gap 0.3s;
			column-gap: 0px;
		}
		.wpmozo-button-link.show-on-hover:hover {
			column-gap: 10px;
		}
		`;
	}

	if (true === attributes.showMediaOnHover && 'before' === attributes.buttonMediaPosition) {
		styles += `
		.wpmozo-button-link.show-on-hover i{
			margin-right: -${attributes.buttonTextFontSize ? attributes.buttonTextFontSize : '20px'};
		}
		.wpmozo-button-link.show-on-hover:hover i{
			margin-right: 0;
		}
		`;
	}
	if (true === attributes.showMediaOnHover && 'after' === attributes.buttonMediaPosition) {
		styles += `
		.wpmozo-button-link.show-on-hover i{
			margin-left: -${attributes.buttonTextFontSize ? attributes.buttonTextFontSize : '20px'};
		}
		.wpmozo-button-link.show-on-hover:hover i{
			margin-left: 0;
		}
		`;
	}

	// Button background
	if (attributes.filledBackgroundType === 'classic') {
		styles += `
		.wpmozo-button-link {
			background-color: ${attributes.classicBackgroundColor};
		}

		`;
	} else {
		styles += `
		.wpmozo-button-link {
			background-image: ${attributes.gradientBackgroundColor};
		}
		`;
	}

	// Button background image
	if (attributes.classicBackgroundImage) {
		styles += `
		.wpmozo-button-link {
			background-image: url(${attributes.classicBackgroundImage});
			background-color: transparent;
			background-repeat: no-repeat;
		}
		`;
	}

	// Hover background
	if (attributes.filledBackgroundTypeHover === 'classic') {
		if (attributes.classicBackgroundImageHover) {
			styles += `
		.wpmozo-button-link:hover {
			background-image: url(${attributes.classicBackgroundImageHover});
		}
		.wpmozo-button-link::before,
		.wpmozo-button-link::after{
			background-color:transparent;
			background-image:url(${attributes.classicBackgroundImageHover});
		}
		`;
		} else {
			styles += `
			.wpmozo-button-link:hover {
				background-color: ${attributes.classicBackgroundColorHover};
				background-image: none !important;
			}
			.wpmozo-button-link::before,
			.wpmozo-button-link::after{
				background-color:${attributes.classicBackgroundColorHover}
			}
			`;
		}
	} else {
		styles += `
		.wpmozo-button-link:hover {
			background-image: ${attributes.gradientBackgroundColorHover};
		}
		.wpmozo-button-link::before,
		.wpmozo-button-link::after{
			background-color:transparent;
			background-image:${attributes.gradientBackgroundColorHover}
		}
		`;
	}

	// Hover background image


	// Primary text hover color
	if (attributes.ButtonHoverColor) {
		styles += `
		.wpmozo-button-link:hover .wpmozo-button-text {
			color: ${attributes.ButtonHoverColor};
		}
		`;
	}

	// Secondary text hover color
	if (attributes.ButtonHoversecColor) {
		styles += `
		.wpmozo-button-link:hover .wpmozo-button-secondary-text {
			color: ${attributes.ButtonHoversecColor};
		}
		`;
	}

	// Icon hover color
	if (attributes.ButtonHoverIconColor) {
		styles += `
		.wpmozo-button-link:hover .wpmozo-bna-button-icon {
			color: ${attributes.ButtonHoverIconColor};
		}
		`;
	}

	styles += `}`;

	return styles;
};

export default generateDynamicStyle;
