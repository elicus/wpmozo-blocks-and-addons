import { convertInlineStyleStr } from '../../common/utils.js';

const generateDynamicStyle = ( { attributes, clientId, isEdit } ) => {
	const toConvertStyles = [
		'titleNormal',
		'titleHover',
		'content',
		'layout'
	];
	let convertedStyle = convertInlineStyleStr( toConvertStyles, attributes );

	let normalcss = [],
	hovercss = [],
	cssExtras = [];
	const isEditor = (selector) => {return isEdit ? `,&.is_hover ${selector}` : ''};

	normalcss.push( undefined !== attributes.imageOpacity ? `.wpmozo-bna-interactive-image-card-image { opacity: ${attributes.imageOpacity}; }` : '' );

	normalcss.push(
		( attributes.titleNormalColor || convertedStyle.titleNormal )
		? `.wpmozo-bna-interactive-image-card-title {
				${attributes.titleNormalColor ? `color: ${attributes.titleNormalColor};` : ''}
				${convertedStyle.titleNormal || ''}
			}`
		: ''
	);
	normalcss.push(
		( attributes.titleHoverColor || convertedStyle.titleHover )
		? `.wpmozo-bna-interactive-image-card-wrap figure:hover .wpmozo-bna-interactive-image-card-title {
				${attributes.titleHoverColor ? `color: ${attributes.titleHoverColor};` : ''}
				${convertedStyle.titleHover || ''}
			}`
		: ''
	);

	normalcss.push(
		( attributes.contentColor || convertedStyle.content )
		? `.wpmozo-bna-interactive-image-card-content {
				${attributes.contentColor ? `color: ${attributes.contentColor};` : ''}
				${convertedStyle.content || ''}
			}`
		: ''
	);

	if ( 'milo' !== attributes.layout ) {
		normalcss.push( attributes.titleAlign ? `.wpmozo-bna-interactive-image-card-title { text-align: ${attributes.titleAlign}; }` : '' );

		normalcss.push( attributes.contentAlign ? `.wpmozo-bna-interactive-image-card-content { text-align: ${attributes.contentAlign}; }` : '' );
	}
	if ( 'romeo' !== attributes.layout && 'marley' !== attributes.layout ) {
		normalcss.push(
			`.wpmozo-bna-interactive-image-card-wrap figure {
				${attributes.overlayColor ? `background: ${attributes.overlayColor};` : ''}
			}
			.wpmozo-bna-interactive-image-card-wrap:hover figure {
				background: transparent;
			}`
		);
	}
	if ( 'roxy' === attributes.layout ) {
		normalcss.push( convertedStyle.layout ? `.wpmozo-bna-interactive-image-card-wrap figure.effect-roxy figcaption::before { ${convertedStyle.layout}; }` : '' );
	}
	if ( 'bubba' === attributes.layout ) {
		normalcss.push(
			( attributes.layoutborder?.width && attributes.layoutborder?.style && attributes.layoutborder?.color )
			? `.wpmozo-bna-interactive-image-card-wrap figure.effect-bubba figcaption::before {
					border-top: ${attributes.layoutborder.width} ${attributes.layoutborder.style} ${attributes.layoutborder.color}; 
					border-bottom: ${attributes.layoutborder.width} ${attributes.layoutborder.style} ${attributes.layoutborder.color};
				}
				.wpmozo-bna-interactive-image-card-wrap figure.effect-bubba figcaption::after {
					border-right: ${attributes.layoutborder.width} ${attributes.layoutborder.style} ${attributes.layoutborder.color}; 
					border-left: ${attributes.layoutborder.width} ${attributes.layoutborder.style} ${attributes.layoutborder.color};
				}`
			: ''
		);
	}
	if ( 'romeo' === attributes.layout ) {
		normalcss.push(
			( attributes.layoutborder?.width || attributes.layoutborder?.color )
			? `.wpmozo-bna-interactive-image-card-wrap figure.effect-romeo figcaption::after,
				.wpmozo-bna-interactive-image-card-wrap figure.effect-romeo figcaption::before {
					${attributes.layoutborder?.width ? `border-right: ${attributes.layoutborder.width};` : ''}
					${attributes.layoutborder?.color ? `background: ${attributes.layoutborder.color};` : ''}
				}`
			: ''
		);
	}
	if ( 'layla' === attributes.layout ) {
		normalcss.push(
			( attributes.layoutborder?.width && attributes.layoutborder?.style && attributes.layoutborder?.color )
			? `.wpmozo-bna-interactive-image-card-wrap figure.effect-layla figcaption::before {
					border-top: ${attributes.layoutborder.width} ${attributes.layoutborder.style} ${attributes.layoutborder.color};
					border-bottom: ${attributes.layoutborder.width} ${attributes.layoutborder.style} ${attributes.layoutborder.color};
				}
				.wpmozo-bna-interactive-image-card-wrap figure.effect-layla figcaption::after {
					border-right: ${attributes.layoutborder.width} ${attributes.layoutborder.style} ${attributes.layoutborder.color};
					border-left: ${attributes.layoutborder.width} ${attributes.layoutborder.style} ${attributes.layoutborder.color};
				}`
			: ''
		);
	}
	if ( 'oscar' === attributes.layout ) {
		normalcss.push( convertedStyle.layout ? `.wpmozo-bna-interactive-image-card-wrap figure.effect-oscar figcaption::before { ${convertedStyle.layout}; }` : '' );
	}
	if ( 'marley' === attributes.layout ) {
		normalcss.push(
			( attributes.layoutborder?.width || attributes.layoutborder?.color )
			? `.wpmozo-bna-interactive-image-card-wrap figure.effect-marley .wpmozo-bna-interactive-image-card-title::after {
					${attributes.layoutborder?.width ? `height: ${attributes.layoutborder.width};` : ''}
					${attributes.layoutborder?.color ? `background: ${attributes.layoutborder.color};` : ''}
				}`
			: ''
		);
	}
	if ( 'ruby' === attributes.layout ) {
		normalcss.push( convertedStyle.layout ? `.wpmozo-bna-interactive-image-card-wrap figure.effect-ruby .wpmozo-bna-interactive-image-card-content { ${convertedStyle.layout}; }` : '' );
	}
	if ( 'milo' === attributes.layout ) {
		normalcss.push(
			( attributes.layoutborder?.width && attributes.layoutborder?.style && attributes.layoutborder?.color )
			? `.wpmozo-bna-interactive-image-card-wrap figure.effect-milo .wpmozo-bna-interactive-image-card-content {
					border-left: ${attributes.layoutborder.width}+''+${attributes.layoutborder.style}+''+${attributes.layoutborder.color};
				}`
			: ''
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