import {convertInlineStyleStr} from '../../common/utils.js'

const generateDynamicStyle = ({attributes}) => {
	const toConvertStyles = [
		'button',
		'buttonContainer',
		'icon',
		'secondaryText'
	];
	let convertedStyle = convertInlineStyleStr(toConvertStyles, attributes);

	let buttonMediaPosition = attributes.buttonMediaPosition;

	if ('before' === buttonMediaPosition) {
		buttonMediaPosition = 'row-reverse';
	} else if ('after' === buttonMediaPosition) {
		buttonMediaPosition = 'row';
	}

	let styles = `#block-${attributes.ID}{`;
	styles += `
		.wpmozo-button-wrapper{
			text-align: ${attributes.buttonAlign};
		}
		.wpmozo-button-link{
			${convertedStyle.buttonContainer}
		}
		.wpmozo-button-text{
			color: ${attributes.buttonColor};
			${convertedStyle.button}
		}
		.wpmozo-bna-button-icon{
			color: ${attributes.iconColor};
			font-size: ${attributes.iconFontSize}px;
			${convertedStyle.icon}
		}
		.wpmozo-button-secondary-text{
			color: ${attributes.secondaryTextColor};
			${convertedStyle.secondaryText}
		}
		.wpmozo-primary-text-with-icon{
			flex-direction:${buttonMediaPosition};
		}
		`;

	//Button
	if ('classic' === attributes.filledBackgroundType) {
		styles += `
		.wpmozo-button-link{
			background-color:${attributes.classicBackgroundColor}
		}`
	} else {
		styles += `
		.wpmozo-button-link{
			background-image:${attributes.gradientBackgroundColor}
		}`
	}

	//button
	if (attributes.classicBackgroundImage) {
		styles += `
		.wpmozo-button-link{
			background-image:url(${attributes.classicBackgroundImage});
		}`
	}

	//Background color
	if ('classic' === attributes.filledBackgroundTypeHover) {
		styles += `
		.wpmozo-button-link:hover{
			background-color:${attributes.classicBackgroundColorHover}
		}`
	} else {
		styles += `
		.wpmozo-button-link:hover{
			background-image:${attributes.gradientBackgroundColorHover}
		}`
	}

	//Background Image
	if (attributes.classicBackgroundImageHover) {
		styles += `
		.wpmozo-button-link:hover{
			background-image:url(${attributes.classicBackgroundImageHover});
		}`
	}

	//primary text color
	if (attributes.ButtonHoverColor) {
		styles += `
		.wpmozo-button-link:hover .wpmozo-button-text{
			color:${attributes.ButtonHoverColor}
		}`
	}

	//secondary text color
	if (attributes.ButtonHoversecColor) {
		styles += `
		.wpmozo-button-link:hover .wpmozo-button-secondary-text{
			color:${attributes.ButtonHoversecColor}
		}`
	}

	//icon hover color
	if (attributes.ButtonHoverIconColor) {
		styles += `
		.wpmozo-button-link:hover .wpmozo-bna-button-icon{
			color:${attributes.ButtonHoverIconColor}
		}`
	}

	styles += `}`;

	return styles;
};

export default generateDynamicStyle;
