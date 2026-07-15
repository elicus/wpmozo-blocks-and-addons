import {convertInlineStyleStr} from '../../common/utils.js';

const generateDynamicStyle = ({ attributes, clientId }) => {

	const { iconFontSize, separatorColor } = attributes,
	toConvertStyles = [
    	'globalTitle',
    	'globalContent',
    	'frontTitle',
    	'frontContent',
    	'backTitle',
    	'backContent',
    	'frontIconShape',
    	'backIconShape',
    	'frontFlipbox',
    	'backFlipbox',
    	'backBtn',
    	'backBtnDimensions',
    	'frontDimensions',
    	'backDimensions'
    ];
    let convertedStyle = convertInlineStyleStr( toConvertStyles, attributes );
    let frontVerticalAlign = attributes.frontContentVerAlignment,
        backVerticalAlign = attributes.backContentVerAlignment, 
        backBtnPos = attributes.backBtnIconPosition, 
        backBtnAddi = convertedStyle.backBtn + convertedStyle.backBtnDimensions;

    if ( 'top' === attributes.frontContentVerAlignment ) {
    	frontVerticalAlign = 'flex-start';
    }else if( 'bottom' === attributes.frontContentVerAlignment ){
		frontVerticalAlign = 'flex-end';
    }

    if ( 'top' === attributes.backContentVerAlignment ) {
    	backVerticalAlign = 'flex-start';
    }else if( 'bottom' === attributes.backContentVerAlignment ){
		backVerticalAlign = 'flex-end';
    }

    if ( 'before' === attributes.backBtnIconPosition ) {
    	backBtnPos = 'row-reverse';
    }else if( 'after' === attributes.backBtnIconPosition ){
		backBtnPos = 'row';
    }

	let normalcss = [],
		hovercss  = [],
		cssExtras = [];
	const isEditor = (selector) => {return isEdit ? `,&.is_hover ${selector}` : ''};


	normalcss.push( (attributes.flipboxWidth) ? ` .wpmozo-bna-flip-box-wrap { width: ${attributes.flipboxWidth} ; }` : '' );

	normalcss.push( (attributes.globalTitleColor) ? ` .wpmozo-bna-flip-box-side .wpmozo-bna-flip-box-title { color: ${attributes.globalTitleColor}; }` : '' );

	normalcss.push( (attributes.globalContentColor) ? `.wpmozo-bna-flip-box-side .wpmozo-bna-flip-box-description { color: ${attributes.globalContentColor}; }` : '' );

	normalcss.push(
		( attributes.frontBackgroundColor || frontVerticalAlign || convertedStyle.frontFlipbox )
		? `.wpmozo-bna-flip-box-front { 
			${ (attributes.frontBackgroundColor) ? `background-color:${attributes.frontBackgroundColor} ;` : '' } 
			${ (frontVerticalAlign) ? `align-items:${frontVerticalAlign} ;` : '' } 
			${convertedStyle.frontFlipbox || ''}
		}`
		: ''
	);

	normalcss.push(
		( attributes.backBackgroundColor || backVerticalAlign || convertedStyle.backFlipbox )
		? `.wpmozo-bna-flip-box-back {
			${ (attributes.backBackgroundColor) ? `background-color:${attributes.backBackgroundColor};` : '' } 
			${ (backVerticalAlign) ? `align-items:${backVerticalAlign};` : '' } 
			${convertedStyle.backFlipbox || ''}
		}`
		: ''
	);

	normalcss.push(
		(attributes.frontContentHorAlignment) 
		? `.wpmozo-bna-flip-box-front .wpmozo-bna-flip-box-icon-wrap, 
	    	.wpmozo-bna-flip-box-front .wpmozo-bna-flip-box-title,
	    	.wpmozo-bna-flip-box-front .wpmozo-bna-flip-box-description { 
			text-align:${attributes.frontContentHorAlignment}; 
		}` 
		: ''
	);

	normalcss.push(
		(attributes.backContentHorAlignment) 
		? `.wpmozo-bna-flip-box-back .wpmozo-bna-flip-box-icon-wrap, 
			.wpmozo-bna-flip-box-back .wpmozo-bna-flip-box-title,
			.wpmozo-bna-flip-box-back .wpmozo-bna-flip-box-description { 
			text-align:${attributes.backContentHorAlignment}; 
		}` 
		: ''
	);
	
	normalcss.push( (convertedStyle.globalTitle) ? ` .wpmozo-bna-flip-box-side .wpmozo-bna-flip-box-title { ${convertedStyle.globalTitle }; }` : '' );
	
	normalcss.push( (convertedStyle.globalContent) ? ` .wpmozo-bna-flip-box-side .wpmozo-bna-flip-box-description { ${ convertedStyle.globalContent }; }` : '' );

	normalcss.push(
		( attributes.frontTitleColor || convertedStyle.frontTitle ) 
		? `.wpmozo-bna-flip-box-front .wpmozo-bna-flip-box-title { 
			${ (attributes.frontTitleColor) ? `color:${attributes.frontTitleColor};` : '' } 
			${convertedStyle.frontTitle || ''}
		}` 
		: ''
	);

	normalcss.push(
		( attributes.frontContentColor || convertedStyle.frontContent ) 
		? `.wpmozo-bna-flip-box-front .wpmozo-bna-flip-box-description {
			${ (attributes.frontContentColor) ? `color:${attributes.frontContentColor};` : '' } 
			${convertedStyle.frontContent || ''}
		}` 
		: ''
	);
	
	normalcss.push(
		( attributes.backTitleColor || convertedStyle.backTitle ) 
		? `.wpmozo-bna-flip-box-back .wpmozo-bna-flip-box-title {
			${ (attributes.backTitleColor) ? `color: ${attributes.backTitleColor};` : '' } 
			${convertedStyle.backTitle || ''}
		}` 
		: ''
	);
	
	normalcss.push(
		( attributes.backContentColor || convertedStyle.backContent ) 
		? `.wpmozo-bna-flip-box-back .wpmozo-bna-flip-box-description {
			${ (attributes.backContentColor) ? `color:${attributes.backContentColor};` : '' } 
			${convertedStyle.backContent || ''}
		}` 
		: ''
	);
	
	normalcss.push( (convertedStyle.frontDimensions) ? `.wpmozo-bna-flip-box-front .wpmozo-bna-flip-box-inner { ${convertedStyle.frontDimensions} }` : '' );

	normalcss.push( (convertedStyle.backDimensions) ? `.wpmozo-bna-flip-box-back .wpmozo-bna-flip-box-inner { ${convertedStyle.backDimensions} }` : '' );

	normalcss.push( (attributes.depth3dEffect) ? `.wpmozo-bna-flip-box-side .wpmozo-bna-flip-box-inner { transform: translateZ(50px) scale(0.95); }` : '');

	normalcss.push(
		attributes.flipSpeed
		? `.wpmozo-bna-flip-box-wrap.${attributes.animationType === 'flip' ? `layout1 .wpmozo-bna-flip-box-side` : `layout2`} {
			transition: transform ${attributes.flipSpeed}ms ${'flip' === attributes.animationType ? (attributes.shakeOnFlip ? 'cubic-bezier(0.3, 0.9, 0.40, 1.3)':'cubic-bezier(.5, .3, .3, 1)' ) :`ease`};

			-moz-transition: transform ${attributes.flipSpeed}ms ${'flip' === attributes.animationType ? (attributes.shakeOnFlip ? 'cubic-bezier(0.3, 0.9, 0.40, 1.3)':'cubic-bezier(.5, .3, .3, 1)' ) :`ease`};

			-webkit-transition: transform ${attributes.flipSpeed}ms ${'flip' === attributes.animationType ? (attributes.shakeOnFlip ? 'cubic-bezier(0.3, 0.9, 0.40, 1.3)':'cubic-bezier(.5, .3, .3, 1)' ) :`ease`};

		}` 
		: ''
	);

	normalcss.push(
		attributes.frontElementAlign === 'top'
		? `.wpmozo-bna-flip-box-front .wpmozo-bna-flip-box-inner {
			flex-direction: column;
		}` 
		: ''
	);

	normalcss.push(
		attributes.frontElementAlign === 'left'
		? `.wpmozo-bna-flip-box-front .wpmozo-bna-flip-box-icon-wrap,
		.wpmozo-bna-flip-box-front .wpmozo-bna-flip-box-image-wrap {
			margin-right: 20px;
		} .wpmozo-bna-flip-box-front .wpmozo-bna-flip-box-content-wrap {
			width: calc(100% - 20px);
		}` 
		: ''
	);

	normalcss.push(
		attributes.frontElementAlign === 'right'
		? `.wpmozo-bna-flip-box-front .wpmozo-bna-flip-box-inner {
			flex-direction: row-reverse;
		} .wpmozo-bna-flip-box-front .wpmozo-bna-flip-box-icon-wrap,
		.wpmozo-bna-flip-box-front .wpmozo-bna-flip-box-image-wrap {
			margin-left: 20px;
		} .wpmozo-bna-flip-box-front .wpmozo-bna-flip-box-content-wrap {
			width: calc(100% - 20px);
		}` 
		: ''
	);

	normalcss.push(
		attributes.backElementAlign === 'top'
		? `.wpmozo-bna-flip-box-back .wpmozo-bna-flip-box-inner {
			flex-direction: column;
		}` 
		: ''
	);

	normalcss.push(
		attributes.backElementAlign === 'left'
		? `.wpmozo-bna-flip-box-back .wpmozo-bna-flip-box-icon-wrap,
		.wpmozo-bna-flip-box-back .wpmozo-bna-flip-box-image-wrap {
			margin-right: 20px;
		} .wpmozo-bna-flip-box-back .wpmozo-bna-flip-box-content-wrap {
			width: calc(100% - 20px);
		}` 
		: ''
	);

	normalcss.push(
		attributes.backElementAlign === 'right'
		? `.wpmozo-bna-flip-box-back .wpmozo-bna-flip-box-inner {
			flex-direction: row-reverse;
		} .wpmozo-bna-flip-box-back .wpmozo-bna-flip-box-icon-wrap,
		.wpmozo-bna-flip-box-back .wpmozo-bna-flip-box-image-wrap {
			margin-left: 20px;
		} .wpmozo-bna-flip-box-back .wpmozo-bna-flip-box-content-wrap {
			width: calc(100% - 20px);
		}` 
		: ''
	);

	if( 'icon' === attributes.frontElType ) {
		normalcss.push(
			`.wpmozo-bna-flip-box-front .wpmozo-bna-flip-box-icon-wrap i {
				color: ${attributes.frontIconColor || 'inherit'};
				font-size: ${attributes.frontIconSize || 'inherit'};
			}`
		);

		if(attributes.frontIconStyle && 'hexagon' !== attributes.frontIconShape){
			normalcss.push(
				`.wpmozo-bna-flip-box-front .wpmozo-bna-flip-box-icon-wrap i {
					padding: 16px;
					color: ${attributes.frontIconColor || 'inherit'};
					background-color: ${attributes.frontIconShapeBackground || 'transparent'};
					${attributes.frontIconShape === 'square' ? `border-radius: ${attributes.frontIconShapeborderRadius || '0'};` : ''}
					${attributes.frontIconShape === 'circle' ? 'border-radius: 50%;' : ''}
					${convertedStyle.frontIconShape || ''}
				}`
			);
		}
		
		if(attributes.frontIconStyle && 'hexagon' === attributes.frontIconShape){
			normalcss.push(
				`.wpmozo-bna-flip-box-front .wpmozo-bna-hexagon-wrap:before {
					background-color: ${attributes.frontIconShapeBackground || 'transparent'};
				}`
			);
		}
		
		if(attributes.frontIconStyle && attributes.frontIconHasShapeBorder && 'hexagon' === attributes.frontIconShape){
			normalcss.push(
				`.wpmozo-bna-flip-box-front .wpmozo-bna-hexagon-wrap {
					background-color: ${attributes.frontIconShapeBorderColor || 'transparent'};
				}`
			);
		}
	}
	
	if( 'icon' === attributes.backElType ) {
		normalcss.push(
			`.wpmozo-bna-flip-box-back .wpmozo-bna-flip-box-icon-wrap i {
				color: ${attributes.backIconColor || 'inherit'};
				font-size: ${attributes.backIconSize || 'inherit'};
			}`
		);

		if(attributes.backIconStyle && 'hexagon' !== attributes.backIconShape){
			normalcss.push(
				`.wpmozo-bna-flip-box-back .wpmozo-bna-flip-box-icon-wrap i {
					padding: 16px;
					color: ${attributes.backIconColor || 'inherit'};
					background-color: ${attributes.backIconShapeBackground || 'transparent'};
					${attributes.backIconShape === 'square' ? `border-radius: ${attributes.backIconShapeborderRadius || '0'};` : ''}
					${attributes.backIconShape === 'circle' ? 'border-radius: 50%;' : ''}
					${convertedStyle.backIconShape || ''}
				}`
			);
		}
		
		if(attributes.backIconStyle && 'hexagon' === attributes.backIconShape){
			normalcss.push(
				`.wpmozo-bna-flip-box-back .wpmozo-bna-hexagon-wrap:before {
					background-color: ${attributes.backIconShapeBackground || 'transparent'};
				}`
			);
		}
		
		if(attributes.backIconStyle && attributes.backIconHasShapeBorder && 'hexagon' === attributes.backIconShape){
			normalcss.push(
				`.wpmozo-bna-flip-box-back .wpmozo-bna-hexagon-wrap {
					background-color: ${attributes.backIconShapeBorderColor || 'transparent'};
				}`
			);
		}
	}
	normalcss.push(( 'image' === attributes.frontElType )
		? 
		`.wpmozo-bna-flip-box-front .wpmozo-bna-flip-box-image-wrap img {
			width: ${attributes.frontImageWidth || 'auto'};
			height: ${attributes.frontImageWidth || 'auto'};
			object-fit: cover;
			display: block;
			${attributes.frontImageAlignment === 'left' ? 'margin-right: auto;' : ''}
			${attributes.frontImageAlignment === 'center' ? 'margin-left: auto; margin-right: auto;' : ''}
			${attributes.frontImageAlignment === 'right' ? 'margin-left: auto;' : ''}
		}`
		: ''
	);

	normalcss.push(( 'image' === attributes.backElType )
		? 
		`.wpmozo-bna-flip-box-back .wpmozo-bna-flip-box-image-wrap img {
			width: ${attributes.backImageWidth || 'auto'};
			height: ${attributes.backImageWidth || 'auto'};
			object-fit: cover;
			display: block;
			${attributes.backImageAlignment === 'left' ? 'margin-right: auto;' : ''}
			${attributes.backImageAlignment === 'center' ? 'margin-left: auto; margin-right: auto;' : ''}
			${attributes.backImageAlignment === 'right' ? 'margin-left: auto;' : ''}
		}`
		: ''
	);
	if( attributes.backHasButton ) {
		normalcss.push(
			`.wpmozo-bna-flip-box-button {
				color: ${attributes.backBtnColor || 'inherit'};
				background-color: ${attributes.backBtnBackground || 'transparent'};
				${backBtnAddi || ''}
			}${attributes.backBtnIconOnHover ? 
				`.wpmozo-bna-flip-box-button-wrap .wpmozo-bna-flip-box-button-wrap-inner .wpmozo-bna-flip-box-button.show-on-hover:hover { 
						column-gap: 10px; 
				}.wpmozo-bna-flip-box-button-wrap .wpmozo-bna-flip-box-button-wrap-inner .wpmozo-bna-flip-box-button.show-on-hover { 
					column-gap: 0px; 
				}` 
				: ''
			}`
		);

		normalcss.push(
			(attributes.backBtnIconPosition && backBtnPos)
			? `.wpmozo-bna-flip-box-button-wrap .wpmozo-bna-flip-box-button-wrap-inner .wpmozo-bna-flip-box-button { 
					flex-direction: ${backBtnPos}; 
				}`
			: ''
		);

		if( true === attributes.backBtnIconOnHover && 'before' === attributes.backBtnIconPosition ) {
			normalcss.push(
				`.wpmozo-bna-flip-box-button-wrap .wpmozo-bna-flip-box-button-wrap-inner .wpmozo-bna-flip-box-button.show-on-hover i { 
					margin-right: -${ (attributes.backBtnFontSize) ? attributes.backBtnFontSize : '20px'}; 
				}.wpmozo-bna-flip-box-button-wrap .wpmozo-bna-flip-box-button-wrap-inner .wpmozo-bna-flip-box-button.show-on-hover:hover i { 
					margin-right: 0; 
				}`
			);
		}

		if( true === attributes.backBtnIconOnHover && 'after' === attributes.backBtnIconPosition ) {
			normalcss.push(
				`.wpmozo-bna-flip-box-button-wrap .wpmozo-bna-flip-box-button-wrap-inner .wpmozo-bna-flip-box-button.show-on-hover i { 
					margin-left: -${ (attributes.backBtnFontSize) ? attributes.backBtnFontSize : '20px'}; 
				}.wpmozo-bna-flip-box-button-wrap .wpmozo-bna-flip-box-button-wrap-inner .wpmozo-bna-flip-box-button.show-on-hover:hover i { 
					margin-left: 0; 
				}`
			);
		}

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