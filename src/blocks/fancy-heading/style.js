import { convertInlineStyleStr } from '../../common/utils.js';

const generateDynamicStyle = ( { attributes, clientId, isEdit } ) => {
	const toConvertStyles = [
		'heading',
		'headingHover',
		'preText',
		'preTextHover',
		'preTextDimensions',
		'mainText',
		'mainTextHover',
		'mainTextDimensions',
		'postText',
		'postTextHover',
		'postTextDimensions',
	];
	const convertedStyle = convertInlineStyleStr( toConvertStyles, attributes );

	const alignMap = {
		left: 'flex-start',
		center: 'center',
		right: 'flex-end'
	};

	let	flexDirection     = attributes.displayInStack ? 'column' : 'initial',
		headingAlignment  = alignMap[ attributes.headingAlignment ] || '',
		preTextAlignment  = alignMap[ attributes.preTextAlignment ] || '',
		mainTextAlignment = alignMap[ attributes.mainTextAlignment ] || '',
		postTextAlignment = alignMap[ attributes.postTextAlignment ] || '',
		headingAddi       = convertedStyle.heading || '',
		headingHoverAddi  = convertedStyle.headingHover || '',
		preTextAddi       = convertedStyle.preText + convertedStyle.preTextDimensions,
		preTextHoverAddi  = convertedStyle.preTextHover || '',
		mainTextAddi      = convertedStyle.mainText + convertedStyle.mainTextDimensions,
		mainTextHoverAddi = convertedStyle.mainTextHover || '',
		postTextAddi      = convertedStyle.postText + convertedStyle.postTextDimensions,
		postTextHoverAddi = convertedStyle.postTextHover || '';

	let normalcss = [],
	    hovercss  = [],
	    cssExtras = [];
	const isEditor = (selector) => {return isEdit ? `,&.is_hover ${selector}` : ''};

	// 1. Global Heading Normal CSS (Base Fallback)
    normalcss.push(
		`.wpmozo-bna-fancy-heading-inner{
			display: flex;
			align-items: center;
			line-height: 1;
			padding: 0;
			margin: 0;
			white-space: pre-wrap;
			flex-wrap: wrap;
			${ flexDirection ? `flex-direction: ${flexDirection};` : ''}
			${ attributes.headingAlignment ? `text-align: ${headingAlignment};` : ''}
			${ attributes.headingAlignment ? `justify-content: ${headingAlignment};` : ''}
			${ ( attributes.displayInStack && attributes.headingAlignment ) ? `align-items: ${headingAlignment};` : ''}
		} .wpmozo-bna-fancy-heading-inner span {
			display: inline-block;
			transition: all 300ms ease;
			${attributes.headingColor ? `color: ${attributes.headingColor};` : ''}
			${attributes.headingBackground ? `background: ${attributes.headingBackground};` : ''}
			${headingAddi}
		}`
	);

	// 2. Global Heading Hover CSS
	hovercss.push(
		(attributes.headingHoverColor || attributes.headingHoverBackground || headingHoverAddi) 
		? `.wpmozo-bna-fancy-heading-inner span:hover${isEditor('.wpmozo-bna-fancy-heading-inner span')}{
				${attributes.headingHoverColor ? `color: ${attributes.headingHoverColor};` : ''}
				${attributes.headingHoverBackground ? `background: ${attributes.headingHoverBackground};` : ''}
				${headingHoverAddi}
			}`
		: ''
	);

	// 3. Pre Text Normal & Hover CSS
	normalcss.push(
		`span.wpmozo-bna-pre-text {
            transition: all 300ms ease;
			${ attributes.preTextColor ? `color: ${attributes.preTextColor};` : ''}
			${ attributes.preTextBackground ? `background: ${attributes.preTextBackground};` : ''}
            ${ ( attributes.displayInStack && attributes.preTextAlignment ) ? `align-self: ${preTextAlignment};`: ''}
            ${ attributes.preTextAlignment ? `text-align: ${preTextAlignment};` : ''}
			${ preTextAddi || '' }
		}`
	);
	hovercss.push(
		(attributes.preTextHoverColor || attributes.preTextHoverBackground || preTextHoverAddi) 
		? `span.wpmozo-bna-pre-text:hover${isEditor('span.wpmozo-bna-pre-text')}{
				${attributes.preTextHoverColor ? `color: ${attributes.preTextHoverColor};` : ''}
				${attributes.preTextHoverBackground ? `background: ${attributes.preTextHoverBackground};` : ''}
				${preTextHoverAddi}
			}`
		: ''
	);

	// 4. Main Text Normal & Hover CSS
	normalcss.push(
		`span.wpmozo-bna-main-text {
    		transition: all 300ms ease;
			${ attributes.mainTextColor ? `color: ${attributes.mainTextColor};` : ''}
			${ attributes.mainTextBackground ? `background: ${attributes.mainTextBackground};` : ''}
			${ ( attributes.displayInStack && attributes.mainTextAlignment ) ? `align-self: ${mainTextAlignment};`: ''}
    		${attributes.mainTextAlignment ? `text-align: ${attributes.mainTextAlignment};` : ''}
			${mainTextAddi || ''}
		}`
	);
	hovercss.push(
		(attributes.mainTextHoverColor || attributes.mainTextHoverBackground || mainTextHoverAddi) 
		? `span.wpmozo-bna-main-text:hover${isEditor('span.wpmozo-bna-main-text')}{
				${attributes.mainTextHoverColor ? `color: ${attributes.mainTextHoverColor};` : ''}
				${attributes.mainTextHoverBackground ? `background: ${attributes.mainTextHoverBackground};` : ''}
				${mainTextHoverAddi}
			}`
		: ''
	);

	// 5. Post Text Normal & Hover CSS
	normalcss.push(
		`span.wpmozo-bna-post-text {
    		transition: all 300ms ease;
			${ attributes.postTextColor ? `color: ${attributes.postTextColor};` : ''}
			${ attributes.postTextBackground ? `background: ${attributes.postTextBackground};` : ''}
			${ ( attributes.displayInStack && attributes.postTextAlignment ) ? `align-self: ${postTextAlignment};`: ''}
    		${attributes.postTextAlignment ? `text-align: ${attributes.postTextAlignment};` : ''}
			${postTextAddi || ''}
		}`
	);
	hovercss.push(
		(attributes.postTextHoverColor || attributes.postTextHoverBackground || postTextHoverAddi) 
		? `span.wpmozo-bna-post-text:hover${isEditor('span.wpmozo-bna-post-text')}{
				${attributes.postTextHoverColor ? `color: ${attributes.postTextHoverColor};` : ''}
				${attributes.postTextHoverBackground ? `background: ${attributes.postTextHoverBackground};` : ''}
				${postTextHoverAddi}
			}`
		: ''
	);

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
