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


	let styles = `#block-${clientId}{`;

	styles += `${ (attributes.flipboxWidth) ? ` .wpmozo-bna-flip-box-wrap { width:`+ attributes.flipboxWidth + `; }` : '' }
		${ (attributes.globalTitleColor) ? ` .wpmozo-bna-flip-box-side .wpmozo-bna-flip-box-title { color: ${attributes.globalTitleColor}; }` : '' }

		${ (attributes.globalContentColor) ? `.wpmozo-bna-flip-box-side .wpmozo-bna-flip-box-description { color: ${attributes.globalContentColor}; }` : '' }`;

	styles += `.wpmozo-bna-flip-box-front { ${ (attributes.frontBackgroundColor) ? `background-color:`+ attributes.frontBackgroundColor + `;` : '' } ${ (attributes.backVerticalAlign) ? `align-items:`+ attributes.frontVerticalAlign + `;` : '' } ${convertedStyle.frontFlipbox || ''} } .wpmozo-bna-flip-box-back { ${ (attributes.backBackgroundColor) ? `background-color:`+ attributes.backBackgroundColor + `;` : '' } ${ (attributes.backVerticalAlign) ? `align-items:`+ attributes.backVerticalAlign + `;` : '' } ${convertedStyle.backFlipbox || ''} }

	${ (attributes.frontContentHorAlignment) ? ` .wpmozo-bna-flip-box-front .wpmozo-bna-flip-box-icon-wrap, 
	    		.wpmozo-bna-flip-box-front .wpmozo-bna-flip-box-title,
	    		.wpmozo-bna-flip-box-front .wpmozo-bna-flip-box-description { text-align:`+ attributes.frontContentHorAlignment + `; }` : '' }
	${ (attributes.backContentHorAlignment) ? ` .wpmozo-bna-flip-box-back .wpmozo-bna-flip-box-icon-wrap, 
	    		.wpmozo-bna-flip-box-back .wpmozo-bna-flip-box-title,
	    		.wpmozo-bna-flip-box-back .wpmozo-bna-flip-box-description { text-align:`+ attributes.backContentHorAlignment + `; }` : '' }

	${ (convertedStyle.globalTitle) ? ` .wpmozo-bna-flip-box-side .wpmozo-bna-flip-box-title { `+ convertedStyle.globalTitle + `; }` : '' }
	${ (convertedStyle.globalContent) ? ` .wpmozo-bna-flip-box-side .wpmozo-bna-flip-box-description { `+ convertedStyle.globalContent + `; }` : '' }

	.wpmozo-bna-flip-box-front .wpmozo-bna-flip-box-title { ${ (attributes.frontTitleColor) ? `color:`+ attributes.frontTitleColor + `;` : '' } ${convertedStyle.frontTitle || ''} }

	.wpmozo-bna-flip-box-front .wpmozo-bna-flip-box-description { ${ (attributes.frontContentColor) ? `color:`+ attributes.frontContentColor + `;` : '' } ${convertedStyle.frontContent || ''} }

	.wpmozo-bna-flip-box-back .wpmozo-bna-flip-box-title { ${ (attributes.backTitleColor) ? `color:`+ attributes.backTitleColor + `;` : '' } ${convertedStyle.backTitle || ''} }

	.wpmozo-bna-flip-box-back .wpmozo-bna-flip-box-description { ${ (attributes.backContentColor) ? `color:`+ attributes.backContentColor + `;` : '' } ${convertedStyle.backContent || ''} }

	.wpmozo-bna-flip-box-back .wpmozo-bna-flip-box-title { ${ attributes.backTitleColor ? `color: ${attributes.backTitleColor};` : '' } ${convertedStyle.backTitle || ''} }

	.wpmozo-bna-flip-box-back .wpmozo-bna-flip-box-description { ${ attributes.backContentColor ? `color: ${attributes.backContentColor};` : '' } ${convertedStyle.backContent || ''} }

	.wpmozo-bna-flip-box-front .wpmozo-bna-flip-box-inner { ${convertedStyle.frontDimensions || ''} }

	.wpmozo-bna-flip-box-back .wpmozo-bna-flip-box-inner { ${convertedStyle.backDimensions || ''} }`;


	styles += `${attributes.depth3dEffect ? `
		.wpmozo-bna-flip-box-side .wpmozo-bna-flip-box-inner { transform: translateZ(50px) scale(0.95); }
		` : ''}`;

	styles += `${attributes.animationType === 'flip' ? `
		.wpmozo-bna-flip-box-wrap.layout1 .wpmozo-bna-flip-box-side {
			transition: transform ${attributes.flipSpeed}ms ${attributes.shakeOnFlip ? 'cubic-bezier(0.3, 0.9, 0.40, 1.3)' : 'cubic-bezier(.5, .3, .3, 1)'};
			-moz-transition: transform ${attributes.flipSpeed}ms ${attributes.shakeOnFlip ? 'cubic-bezier(0.3, 0.9, 0.40, 1.3)' : 'cubic-bezier(.5, .3, .3, 1)'};
			-webkit-transition: transform ${attributes.flipSpeed}ms ${attributes.shakeOnFlip ? 'cubic-bezier(0.3, 0.9, 0.40, 1.3)' : 'cubic-bezier(.5, .3, .3, 1)'};
		}
		` : `
		.wpmozo-bna-flip-box-wrap.layout2 {
			transition: transform ${attributes.flipSpeed}ms ease;
			-moz-transition: transform ${attributes.flipSpeed}ms ease;
			-webkit-transition: transform ${attributes.flipSpeed}ms ease;
		}
		`}`;
	
	styles += `${attributes.frontElementAlign === 'top' ? `
		.wpmozo-bna-flip-box-front .wpmozo-bna-flip-box-inner {
			flex-direction: column;
		}
		` : ''}`;

	styles += `${attributes.frontElementAlign === 'left' ? `
		.wpmozo-bna-flip-box-front .wpmozo-bna-flip-box-icon-wrap,
		.wpmozo-bna-flip-box-front .wpmozo-bna-flip-box-image-wrap {
			margin-right: 20px;
		}

		.wpmozo-bna-flip-box-front .wpmozo-bna-flip-box-content-wrap {
			width: calc(100% - 20px);
		}
		` : ''}`;
	
	styles += `${attributes.frontElementAlign === 'right' ? `
		.wpmozo-bna-flip-box-front .wpmozo-bna-flip-box-inner {
			flex-direction: row-reverse;
		}

		.wpmozo-bna-flip-box-front .wpmozo-bna-flip-box-icon-wrap,
		.wpmozo-bna-flip-box-front .wpmozo-bna-flip-box-image-wrap {
			margin-left: 20px;
		}

		.wpmozo-bna-flip-box-front .wpmozo-bna-flip-box-content-wrap {
			width: calc(100% - 20px);
		}
		` : ''}`;
	
	styles += `${attributes.backElementAlign === 'top' ? `
		.wpmozo-bna-flip-box-back .wpmozo-bna-flip-box-inner {
			flex-direction: column;
		}
		` : ''}`;
	
	styles += `${attributes.backElementAlign === 'left' ? `
		.wpmozo-bna-flip-box-back .wpmozo-bna-flip-box-icon-wrap,
		.wpmozo-bna-flip-box-back .wpmozo-bna-flip-box-image-wrap {
			margin-right: 20px;
		}

		.wpmozo-bna-flip-box-back .wpmozo-bna-flip-box-content-wrap {
			width: calc(100% - 20px);
		}
		` : ''}`;

	styles += `${attributes.backElementAlign === 'right' ? `
		.wpmozo-bna-flip-box-back .wpmozo-bna-flip-box-inner {
			flex-direction: row-reverse;
		}

		.wpmozo-bna-flip-box-back .wpmozo-bna-flip-box-icon-wrap,
		.wpmozo-bna-flip-box-back .wpmozo-bna-flip-box-image-wrap {
			margin-left: 20px;
		}

		.wpmozo-bna-flip-box-back .wpmozo-bna-flip-box-content-wrap {
			width: calc(100% - 20px);
		}
		` : ''}`;

	styles += `${attributes.frontElType === 'icon' ? `
		.wpmozo-bna-flip-box-front .wpmozo-bna-flip-box-icon-wrap i {
			color: ${attributes.frontIconColor || 'inherit'};
			font-size: ${attributes.frontIconSize || 'inherit'};
		}

		${attributes.frontIconStyle && attributes.frontIconShape !== 'hexagon' ? `
		.wpmozo-bna-flip-box-front .wpmozo-bna-flip-box-icon-wrap i {
			padding: 16px;
			background-color: ${attributes.frontIconShapeBackground || 'transparent'};
			${attributes.frontIconShape === 'square' ? `border-radius: ${attributes.frontIconShapeborderRadius || '0'};` : ''}
			${attributes.frontIconShape === 'circle' ? 'border-radius: 50%;' : ''}
			${convertedStyle.frontIconShape || ''}
		}
		` : ''}

		${attributes.frontIconStyle && attributes.frontIconShape === 'hexagon' ? `
		.wpmozo-bna-flip-box-front .wpmozo-bna-hexagon-wrap:before {
			background-color: ${attributes.frontIconShapeBackground || 'transparent'};
		}
		` : ''}

		${attributes.frontIconStyle && attributes.frontIconHasShapeBorder && attributes.frontIconShape === 'hexagon' ? `
		.wpmozo-bna-flip-box-front .wpmozo-bna-hexagon-wrap {
			background-color: ${attributes.frontIconShapeBorderColor || 'transparent'};
		}
		` : ''}
		` : ''}`;
	
	styles += `${attributes.backElType === 'icon' ? `
		.wpmozo-bna-flip-box-back .wpmozo-bna-flip-box-icon-wrap i {
			color: ${attributes.backIconColor || 'inherit'};
			font-size: ${attributes.backIconSize || 'inherit'};
		}

		${attributes.backIconStyle && attributes.backIconShape !== 'hexagon' ? `
		.wpmozo-bna-flip-box-back .wpmozo-bna-flip-box-icon-wrap i {
			padding: 16px;
			background-color: ${attributes.backIconShapeBackground || 'transparent'};
			${attributes.backIconShape === 'circle' ? 'border-radius: 50%;' : ''}
			${convertedStyle.backIconShape || ''}
		}
		` : ''}

		${attributes.backIconStyle && attributes.backIconShape === 'hexagon' ? `
		.wpmozo-bna-flip-box-back .wpmozo-bna-hexagon-wrap:before {
			background-color: ${attributes.backIconShapeBackground || 'transparent'};
		}
		` : ''}

		${attributes.backIconStyle && attributes.backIconHasShapeBorder && attributes.backIconShape === 'hexagon' ? `
		.wpmozo-bna-flip-box-back .wpmozo-bna-hexagon-wrap {
			background-color: ${attributes.backIconShapeBorderColor || 'transparent'};
		}
		` : ''}
		` : ''}`;
	
	styles += `${attributes.frontElType === 'image' ? `
		.wpmozo-bna-flip-box-front .wpmozo-bna-flip-box-image-wrap img {
			width: ${attributes.frontImageWidth || 'auto'};
			height: ${attributes.frontImageWidth || 'auto'};
			object-fit: cover;
			display: block;
			${attributes.frontImageAlignment === 'left' ? 'margin-right: auto;' : ''}
			${attributes.frontImageAlignment === 'center' ? 'margin-left: auto; margin-right: auto;' : ''}
			${attributes.frontImageAlignment === 'right' ? 'margin-left: auto;' : ''}
		}
		` : ''}`;
	
	styles += `${attributes.backElType === 'image' ? `
		.wpmozo-bna-flip-box-back .wpmozo-bna-flip-box-image-wrap img {
			width: ${attributes.backImageWidth || 'auto'};
			height: ${attributes.backImageWidth || 'auto'};
			object-fit: cover;
			display: block;
			${attributes.backImageAlignment === 'left' ? 'margin-right: auto;' : ''}
			${attributes.backImageAlignment === 'center' ? 'margin-left: auto; margin-right: auto;' : ''}
			${attributes.backImageAlignment === 'right' ? 'margin-left: auto;' : ''}
		}
		` : ''}`;

	styles += `${attributes.backHasButton ? `
		.wpmozo-bna-flip-box-button {
			color: ${attributes.backBtnColor || 'inherit'};
			background-color: ${attributes.backBtnBackground || 'transparent'};
			${backBtnAddi || ''}
		}
		${attributes.backBtnIconOnHover ? `.wpmozo-bna-flip-box-button-wrap .wpmozo-bna-flip-box-button-wrap-inner .wpmozo-bna-flip-box-button.show-on-hover:hover { column-gap: 10px; }.wpmozo-bna-flip-box-button-wrap .wpmozo-bna-flip-box-button-wrap-inner .wpmozo-bna-flip-box-button.show-on-hover { column-gap: 0px; }` : '' }
		
		${ (attributes.backBtnIconPosition) ? `.wpmozo-bna-flip-box-button-wrap .wpmozo-bna-flip-box-button-wrap-inner .wpmozo-bna-flip-box-button { flex-direction: ${backBtnPos}; }` : '' }

		${ (true === attributes.backBtnIconOnHover && 'before' === attributes.backBtnIconPosition ) ? `.wpmozo-bna-flip-box-button-wrap .wpmozo-bna-flip-box-button-wrap-inner .wpmozo-bna-flip-box-button.show-on-hover i { margin-right: -${ (attributes.backBtnFontSize) ? attributes.backBtnFontSize : '20px'}; }.wpmozo-bna-flip-box-button-wrap .wpmozo-bna-flip-box-button-wrap-inner .wpmozo-bna-flip-box-button.show-on-hover:hover i { margin-right: 0; }` : '' }
		
		${ (true === attributes.backBtnIconOnHover && 'after' === attributes.backBtnIconPosition ) ? `.wpmozo-bna-flip-box-button-wrap .wpmozo-bna-flip-box-button-wrap-inner .wpmozo-bna-flip-box-button.show-on-hover i { margin-left: -${ (attributes.backBtnFontSize) ? attributes.backBtnFontSize : '20px'}; }
		.wpmozo-bna-flip-box-button-wrap .wpmozo-bna-flip-box-button-wrap-inner .wpmozo-bna-flip-box-button.show-on-hover:hover i { margin-left: 0; }` : '' }

		` : ''}`;
	styles += `}`;

	return styles;

};

export default generateDynamicStyle;