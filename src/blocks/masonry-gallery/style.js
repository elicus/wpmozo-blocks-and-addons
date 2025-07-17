import { convertInlineStyleStr } from '../../common/utils.js';

const generateDynamicStyle = ({ attributes, clientId }) => {
	const { iconFontSize, separatorColor } = attributes,
		parent = '#block-' + clientId,
		toConvertStyles = [];
	let convertedStyle = convertInlineStyleStr(toConvertStyles, attributes);

	let styles = `#block-${attributes.ID}{`;

	const numberOfColumns = attributes.numberOfColumns;

	styles += `
		.masonry-grid {
			column-count: ${numberOfColumns} !important;
			column-gap: 1rem;
			padding: 1rem;
		}

	`;


	// Gutter variables
	const gutterSmall = '10px';
	const gutterMedium = '20px';
	const gutterLarge = '30px';
	const gutterCustom = attributes.customGutterSize+'px';

	if (attributes.gutterSize === 's') {
		styles += `
			@media (max-width: 600px) {
				.masonry-grid .masonry-brick:not(:last-child) {
					margin-bottom: calc(${gutterSmall} * 2);
				}
			}
			.masonry-grid .masonry-brick:not(:last-child) {
				margin-bottom: calc(${gutterSmall});
			}

		`;
	}

	if (attributes.gutterSize === 'm') {
		styles += `
			@media (max-width: 600px) {
				.masonry-grid .masonry-brick:not(:last-child) {
					margin-bottom: calc(${gutterMedium} * 2);
				}
			}
			.masonry-grid .masonry-brick:not(:last-child) {
				margin-bottom: calc(${gutterMedium});
			}
		`;
	}

	if (attributes.gutterSize === 'l') {
		styles += `
			@media (max-width: 600px) {
				 .masonry-grid .masonry-brick:not(:last-child) {
					margin-bottom: calc(${gutterLarge} * 2);
				}
			}
			.masonry-grid .masonry-brick:not(:last-child) {
				margin-bottom: calc(${gutterLarge});
			}

		`;
	}
	if (attributes.gutterSize === 'custom') {
		styles += `
			@media (max-width: 600px) {
				.masonry-grid .masonry-brick:not(:last-child) {
					margin-bottom: calc(${gutterCustom} * 2);
				}
			}
			.masonry-grid .masonry-brick:not(:last-child) {
				margin-bottom: calc(${gutterCustom});
			}

		`;
	}
	if (false === attributes.showCaption ) {
		styles += `.masonry-brick figcaption {
				display: none;
		}`;
	}

	styles += `}`;

	return styles;
};

export default generateDynamicStyle;
