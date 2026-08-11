import {convertInlineStyleStr} from '../../common/utils.js';

const generateDynamicStyle = ({attributes, isEdit}) => {
	const toConvertStyles = [
		'image',
		'imageHover'
	];
	let convertedStyle = convertInlineStyleStr( toConvertStyles, attributes );

	let image = ( attributes.image ) ? attributes.image : wpmozo_bna_editor_object.placeholderImg,
		hoverEffect = attributes.hoverEffect;

	let normalcss = [],
		hovercss = [],
		cssExtras = [];

	normalcss.push(
		( convertedStyle.image )
			? `.wpmozo-bna-image-hover-effect-inner { ${convertedStyle.image} }`
			: ''
	);

	hovercss.push(
		( convertedStyle.imageHover )
			? `.wpmozo-bna-image-hover-effect-inner:hover, #block-${attributes.ID}.is_hover .wpmozo-bna-image-hover-effect-inner { ${convertedStyle.imageHover} }`
			: ''
	);

	if ( 'glitch' === hoverEffect ) {
		normalcss.push(`.wpmozo-bna-glitch-image::before { background-image: url('${image}'); }`);
	}

	if ( 'slide_glitch' === hoverEffect ) {
		normalcss.push(`.wpmozo-bna-slide-glitch { background-image: url('${image}'); }`);
	}

	if ( attributes.forceFullwidth ) {
		normalcss.push(`
			width: 100%; max-width: 100% !important;
		`);
		cssExtras.push(`.wpmozo-bna-image-hover-effect-inner, .wpmozo-bna-image-hover-effect-inner img { width: 100%; }`);
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
