import { convertInlineStyleStr } from '../../common/utils.js';

const generateDynamicStyle = ( { attributes, isEdit } ) => {
	const toConvertStyles = [
		'video',
		'videoHover',
	];
	let convertedStyle = convertInlineStyleStr( toConvertStyles, attributes );

	let normalcss = [],
	    hovercss  = [];
	const isEditor = (selector) => { return isEdit ? `,&.is_hover ${selector}` : '' };

	// 1. Base Container & Video Wrapper Normal CSS
	normalcss.push(
		`#block-${attributes.ID} {
			${ attributes.videoAlign ? `text-align: ${attributes.videoAlign};` : '' }
		}
		#block-${attributes.ID} .wpmozo_fb_embedded_video_wrapper {
			position: relative;
			display: inline-block;
			max-width: 100%;
			overflow: hidden;
			transition: all 300ms ease;
			${ convertedStyle.video || '' }
		}`
	);

	// 2. Video Wrapper Hover CSS
	hovercss.push(
		(convertedStyle.videoHover) 
		? `#block-${attributes.ID} .wpmozo_fb_embedded_video_wrapper:hover${isEditor('#block-' + attributes.ID + ' .wpmozo_fb_embedded_video_wrapper')} {
				${ convertedStyle.videoHover || '' }
			}`
		: ''
	);

	const hasStyles = normalcss.some(Boolean) || hovercss.some(Boolean);
	let styles = hasStyles ? `${normalcss.filter(Boolean).join('\n')} ${hovercss.filter(Boolean).join('\n')}` : '';

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
