import { convertInlineStyleStr } from '../../common/utils.js';

const generateDynamicStyle = ( { attributes, clientId } ) => {
	const toConvertStyles = [
		'titleNormal',
		'titleHover',
		'content',
		'layout'
	];
	let convertedStyle = convertInlineStyleStr( toConvertStyles, attributes );

	let styles = `#block-${attributes.ID}{`;

	styles += `.wpmozo-bna-breadcrumb-image {
		opacity: ${attributes.imageOpacity};
	}
	.wpmozo-bna-breadcrumb-title {
		color: ${attributes.titleNormalColor};
		${convertedStyle.titleNormal}
	}
	.wpmozo-bna-breadcrumb-wrap figure:hover .wpmozo-bna-breadcrumb-title {
		color: ${attributes.titleHoverColor};
		${convertedStyle.titleHover}
	}
	.wpmozo-bna-breadcrumb-content {
		color: ${attributes.contentColor};
		${convertedStyle.content}
	}`;

	if ( 'milo' !== attributes.layout ) {
		styles += `.wpmozo-bna-breadcrumb-title {
			text-align: ${attributes.titleAlign};
		}
		.wpmozo-bna-breadcrumb-content {
			text-align: ${attributes.contentAlign};
		}`;
	}
	if ( 'romeo' !== attributes.layout && 'marley' !== attributes.layout ) {
		styles += `.wpmozo-bna-breadcrumb-wrap figure {
			background: ${attributes.overlayColor};
		}
		.wpmozo-bna-breadcrumb-wrap:hover figure {
			background: transparent;
		}`;
	}
	if ( 'roxy' === attributes.layout ) {
		styles += `.wpmozo-bna-breadcrumb-wrap figure.effect-roxy figcaption::before {
			${convertedStyle.layout};
		}`;
	}
	if ( 'bubba' === attributes.layout ) {
		styles += `.wpmozo-bna-breadcrumb-wrap figure.effect-bubba figcaption::before {
			border-top: ${attributes.layoutborder.width} ${attributes.layoutborder.style} ${attributes.layoutborder.color};
			border-bottom: ${attributes.layoutborder.width} ${attributes.layoutborder.style} ${attributes.layoutborder.color};
		}
		.wpmozo-bna-breadcrumb-wrap figure.effect-bubba figcaption::after {
			border-right: ${attributes.layoutborder.width} ${attributes.layoutborder.style} ${attributes.layoutborder.color};
			border-left: ${attributes.layoutborder.width} ${attributes.layoutborder.style} ${attributes.layoutborder.color};
		}`;
	}
	if ( 'romeo' === attributes.layout ) {
		styles += `.wpmozo-bna-breadcrumb-wrap figure.effect-romeo figcaption::after,
		.wpmozo-bna-breadcrumb-wrap figure.effect-romeo figcaption::before {
			border-right: ${attributes.layoutborder.width};
			background: ${attributes.layoutborder.color};
		}`;
	}
	if ( 'layla' === attributes.layout ) {
		styles += `.wpmozo-bna-breadcrumb-wrap figure.effect-layla figcaption::before {
			border-top: ${attributes.layoutborder.width} ${attributes.layoutborder.style} ${attributes.layoutborder.color};
			border-bottom: ${attributes.layoutborder.width} ${attributes.layoutborder.style} ${attributes.layoutborder.color};
		}
		.wpmozo-bna-breadcrumb-wrap figure.effect-layla figcaption::after {
			border-right: ${attributes.layoutborder.width} ${attributes.layoutborder.style} ${attributes.layoutborder.color};
			border-left: ${attributes.layoutborder.width} ${attributes.layoutborder.style} ${attributes.layoutborder.color};
		}`;
	}
	if ( 'oscar' === attributes.layout ) {
		styles += `.wpmozo-bna-breadcrumb-wrap figure.effect-oscar figcaption::before {
			${convertedStyle.layout}
		}`;
	}
	if ( 'marley' === attributes.layout ) {
		styles += `.wpmozo-bna-breadcrumb-wrap figure.effect-marley .wpmozo-bna-breadcrumb-title::after {
			height: ${attributes.layoutborder.width};
			background: ${attributes.layoutborder.color};
		}`;
	}
	if ( 'ruby' === attributes.layout ) {
		styles += `.wpmozo-bna-breadcrumb-wrap figure.effect-ruby .wpmozo-bna-breadcrumb-content {
			${convertedStyle.layout}
		}`;
	}
	if ( 'milo' === attributes.layout ) {
		styles += `.wpmozo-bna-breadcrumb-wrap figure.effect-milo .wpmozo-bna-breadcrumb-content {
			border-left: ${attributes.layoutborder.width}+''+${attributes.layoutborder.style}+''+${attributes.layoutborder.color};
		}`;
	}

	styles += `}`;
	return styles;
};

export default generateDynamicStyle;
