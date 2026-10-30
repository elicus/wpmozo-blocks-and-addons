import { convertInlineStyleStr } from '../../common/utils.js';

const generateDynamicStyle = ( { attributes, isEdit } ) => {
	const toConvertStyles = [
		'container',
		'containerHover'
	];
	let convertedStyle = convertInlineStyleStr( toConvertStyles, attributes );

	let normalcss = [],
		hovercss = [],
		cssExtras = [];

	normalcss.push(
		( convertedStyle.container )
			? `.wpmozo_image_card_ticker_wrapper {
				${convertedStyle.container || ''}
			}`
			: ''
	);

	hovercss.push(
		( convertedStyle.containerHover )
			? `.wpmozo_image_card_ticker_wrapper:hover, #block-${attributes.ID}.is_hover .wpmozo_image_card_ticker_wrapper {
				${convertedStyle.containerHover || ''}
			}`
			: ''
	);

	normalcss.push(`
		.wpmozo_image_card_ticker_inner img{
			width:${attributes.image_width}px;
			height:${attributes.image_height}px;
		}
	`);

	if('marquee'===attributes.tickerLayout){
		if ( 'top' === attributes.marqueeDirection || 'bottom' === attributes.marqueeDirection ) {
			normalcss.push(`
				.wpmozo_image_card_ticker_inner{
					height:${attributes.marquee_wrap_height}px;
				}
			`);
		}
	}

	if('3d_circular'===attributes.tickerLayout){
		normalcss.push(`
			.wpmozo_image_card_ticker_inner{
				height:${attributes.circle3d_wrap_height}px;
			}
		`);
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
