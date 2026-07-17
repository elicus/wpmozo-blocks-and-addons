import { convertInlineStyleStr } from '../../common/utils.js';

const generateDynamicStyle = ( { attributes, clientId, isEdit } ) => {
	const toConvertStyles = [
		'preText',
		'preTextDimensions',
		'mainText',
		'mainTextDimensions',
		'postText',
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
		preTextAddi       = convertedStyle.preText + convertedStyle.preTextDimensions,
		mainTextAddi      = convertedStyle.mainText + convertedStyle.mainTextDimensions,
		postTextAddi      = convertedStyle.postText + convertedStyle.postTextDimensions;

	let normalcss = [],
	    hovercss  = [],
	    cssExtras = [];
	const isEditor = (selector) => {return isEdit ? `,&.is_hover ${selector}` : ''};


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
			${attributes.headingColor ? `color: ${attributes.headingColor};` : ''}
			${attributes.headingBackground ? `background: ${attributes.headingBackground};` : ''}
			
		}.wpmozo-bna-fancy-heading-inner span {
			display: inline-block;
			${attributes.headingColor ? `color: ${attributes.headingColor};` : ''}
			${attributes.headingBackground ? `background: ${attributes.headingBackground};` : ''}
			
		}
		span.wpmozo-bna-pre-text {
            transition: all 300ms;
			${ attributes.preTextColor ? `color: ${attributes.preTextColor};` : ''}
			${ attributes.preTextBackground ? `background: ${attributes.preTextBackground};` : ''}
            ${ ( attributes.displayInStack && attributes.preTextAlignment ) ? `align-self: ${preTextAlignment};`: ''}
            ${ attributes.preTextAlignment ? `text-align: ${preTextAlignment};` : ''}
			${ preTextAddi || '' }
		}`
	);
	hovercss.push(
		(attributes.preTextHoverColor || attributes.preTextHoverBackground) 
		? `span.wpmozo-bna-pre-text:hover${isEditor('span.wpmozo-bna-pre-text')}{
				${attributes.preTextHoverColor ? `color:`+ attributes.preTextHoverColor + `;` : ''}
				${attributes.preTextHoverBackground ? `background:`+ attributes.preTextHoverBackground + `;` : ''}
			}`
		: ''
	);

	normalcss.push(
		`span.wpmozo-bna-main-text {
    		transition: all 300ms;
			${ attributes.mainTextColor ? `color: ${attributes.mainTextColor};` : ''}
			${ attributes.mainTextBackground ? `background: ${attributes.mainTextBackground};` : ''}
			${ ( attributes.displayInStack && attributes.mainTextAlignment ) ? `align-self: ${mainTextAlignment};`: ''}
    		${attributes.mainTextAlignment ? `text-align: ${attributes.mainTextAlignment};` : ''}\
			${mainTextAddi || ''}
		}`
	);
	hovercss.push(
		(attributes.mainTextHoverColor || attributes.mainTextHoverBackground) 
		? `span.wpmozo-bna-main-text:hover${isEditor('span.wpmozo-bna-main-text')}{
				${attributes.mainTextHoverColor ? `color:`+ attributes.mainTextHoverColor + `;` : ''}
				${attributes.mainTextHoverBackground ? `background:`+ attributes.mainTextHoverBackground + `;` : ''}
			}`
		: ''
	);

	normalcss.push(
		`span.wpmozo-bna-post-text {
    		transition: all 300ms;
			${ attributes.postTextColor ? `color: ${attributes.postTextColor};` : ''}
			${ attributes.postTextBackground ? `background: ${attributes.postTextBackground};` : ''}
			${ ( attributes.displayInStack && attributes.postTextAlignment ) ? `align-self: ${postTextAlignment};`: ''}
    		${attributes.postTextAlignment ? `text-align: ${attributes.postTextAlignment};` : ''}\
			${postTextAddi || ''}
		}`
	);
	hovercss.push(
		(attributes.postTextHoverColor || attributes.postTextHoverBackground) 
		? `span.wpmozo-bna-post-text:hover${isEditor('span.wpmozo-bna-post-text')}{
				${attributes.postTextHoverColor ? `color:`+ attributes.postTextHoverColor + `;` : ''}
				${attributes.postTextHoverBackground ? `background:`+ attributes.postTextHoverBackground + `;` : ''}
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