import {convertInlineStyleStr, wpmozo_is_empty} from '../../common/utils.js';

const generateDynamicStyle = ({ attributes }) => {

	const toConvertStyles = [
		"title",
		"description",
		"button"
	];
    let convertedStyle = convertInlineStyleStr( toConvertStyles, attributes ),
    	parentAtts = attributes.parentAtts;


	let styles = `.wp-block-wpmozo-scroll-stack-cards #block-${attributes.ID}{`;

		// Title style
		styles += `
		.wpmozo-bna-scroll-stack-cards-title {
			color: ${attributes.titleColor};
			text-align: ${attributes.titleAlign};
			${convertedStyle.title}
		}`;

		// Description style
		styles += `
		.wpmozo-bna-scroll-stack-cards-content {
			color: ${attributes.descriptionColor};
			text-align: ${attributes.descriptionAlign};
			${convertedStyle.description}
		}`;

		// Icon style
		styles += `
		.wpmozo-bna-scroll-stack-cards-icon-wrapper .icon-wrapper i {
			color: ${attributes.iconColor};
			font-size: ${attributes.iconFontSize};
		}`;

		// Button style
		styles += `
		.wpmozo-bna-button{
			color: ${attributes.buttonTextColor};
			background-color: ${attributes.buttonBackgroundColor};
			${convertedStyle.button}
		}
		.wpmozo-bna-button-wrap{
			text-align: ${attributes.buttonAlignment};
		}
		.wpmozo-bna-button i{
			color: ${attributes.buttonIconColor};
		}
		`;

	styles += `}`;


	return styles;
};

export default generateDynamicStyle;