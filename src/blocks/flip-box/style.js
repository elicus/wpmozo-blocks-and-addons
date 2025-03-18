
const Style = ({attributes, ID, clientId}) => {

	const wpmozoCoreFun = window.wpmozo,
	parent = '#block-'+clientId,
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
    	'backDimensions',
    ];

    let css = '',
    frontVerticalAlign = attributes.frontContentVerAlignment,
    backVerticalAlign = attributes.backContentVerAlignment, 
    convertedStyle = wpmozoCoreFun.convetInlineStyleStr( toConvertStyles, attributes ),
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
    
    let allInline = [
    	{
    		selector: '.wpmozo-adfgu-flip-box-wrap',
    		style: {
			    'width': attributes.flipboxWidth,
    		},
    	},
    	{
    		selector: '.wpmozo-adfgu-flip-box-side .wpmozo-adfgu-flip-box-title',
    		style: {
    			'color': attributes.globalTitleColor,
    		},
    	},
    	{
    		selector: '.wpmozo-adfgu-flip-box-side .wpmozo-adfgu-flip-box-description',
    		style: {
    			'color': attributes.globalContentColor,
    		},
    	},
    	{
    		selector: '.wpmozo-adfgu-flip-box-front',
    		style: {
    			'background-color': attributes.frontBackgroundColor,
    			'align-items': frontVerticalAlign
    		},
    		additional: convertedStyle.frontFlipbox,
    	},
    	{
    		selector: '.wpmozo-adfgu-flip-box-back',
    		style: {
    			'background-color': attributes.backBackgroundColor,
    			'align-items': backVerticalAlign
    		},
    		additional: convertedStyle.backFlipbox,
    	},
    	{
    		selector: `
    		.wpmozo-adfgu-flip-box-front .wpmozo-adfgu-flip-box-icon-wrap, 
    		.wpmozo-adfgu-flip-box-front .wpmozo-adfgu-flip-box-title,
    		.wpmozo-adfgu-flip-box-front .wpmozo-adfgu-flip-box-description`,
    		style: {
    			'text-align': attributes.frontContentHorAlignment,
    		},
    	},
    	{
    		selector: `
    		.wpmozo-adfgu-flip-box-back .wpmozo-adfgu-flip-box-icon-wrap, 
    		.wpmozo-adfgu-flip-box-back .wpmozo-adfgu-flip-box-title,
    		.wpmozo-adfgu-flip-box-back .wpmozo-adfgu-flip-box-description, 
    		.wpmozo-adfgu-flip-box-back .wpmozo-adfgu-flip-box-button-wrap`,
    		style: {
    			'text-align': attributes.backContentHorAlignment,
    		},
    	},
    	{
    		selector: '.wpmozo-adfgu-flip-box-side .wpmozo-adfgu-flip-box-title',
    		additional: convertedStyle.globalTitle
    	},
    	{
    		selector: '.wpmozo-adfgu-flip-box-side .wpmozo-adfgu-flip-box-description',
    		additional: convertedStyle.globalContent
    	},
    	{
    		selector: '.wpmozo-adfgu-flip-box-front .wpmozo-adfgu-flip-box-title',
    		style: {
    			'color': attributes.frontTitleColor,
    		},
    		additional: convertedStyle.frontTitle
    	},
    	{
    		selector: '.wpmozo-adfgu-flip-box-front .wpmozo-adfgu-flip-box-description',
    		style: {
    			'color': attributes.frontContentColor,
    		},
    		additional: convertedStyle.frontContent
    	},
    	{
    		selector: '.wpmozo-adfgu-flip-box-back .wpmozo-adfgu-flip-box-title',
    		style: {
    			'color': attributes.backTitleColor,
    		},
    		additional: convertedStyle.backTitle
    	},
    	{
    		selector: '.wpmozo-adfgu-flip-box-back .wpmozo-adfgu-flip-box-description',
    		style: {
    			'color': attributes.backContentColor,
    		},
    		additional: convertedStyle.backContent
    	},
    	{
    		selector: '.wpmozo-adfgu-flip-box-front .wpmozo-adfgu-flip-box-inner',
    		additional: convertedStyle.frontDimensions
    	},
    	{
    		selector: '.wpmozo-adfgu-flip-box-back .wpmozo-adfgu-flip-box-inner',
    		additional: convertedStyle.backDimensions
    	}
    ];

	if ( attributes.depth3dEffect ) {
		allInline.push({
    		selector: '.wpmozo-adfgu-flip-box-side .wpmozo-adfgu-flip-box-inner',
    		style: {
			    'transform': 'translateZ(50px) scale(0.95)'
    		}
    	})
	}

	if ( 'flip' === attributes.animationType ) {
		if ( attributes.shakeOnFlip ) {
			allInline.push({
	    		selector: '.wpmozo-adfgu-flip-box-wrap.layout1 .wpmozo-adfgu-flip-box-side',
	    		style: {
	    			'transition': `transform ${attributes.flipSpeed}ms cubic-bezier(0.3, 0.9, 0.40, 1.3)`,
				    '-moz-transition': `transform ${attributes.flipSpeed}ms cubic-bezier(0.3, 0.9, 0.40, 1.3)`,
				    '-webkit-transition': `transform ${attributes.flipSpeed}ms cubic-bezier(0.3, 0.9, 0.40, 1.3)`,
	    		},
	    	})
		}else{
			allInline.push({
	    		selector: '.wpmozo-adfgu-flip-box-wrap.layout1 .wpmozo-adfgu-flip-box-side',
	    		style: {
	    			'transition': `transform ${attributes.flipSpeed}ms cubic-bezier(.5, .3, .3, 1)`,
				    '-moz-transition': `transform ${attributes.flipSpeed}ms cubic-bezier(.5, .3, .3, 1)`,
				    '-webkit-transition': `transform ${attributes.flipSpeed}ms cubic-bezier(.5, .3, .3, 1)`,
	    		},
	    	})
		}
	}else {
		allInline.push({
    		selector: '.wpmozo-adfgu-flip-box-wrap.layout2',
    		style: {
    			'transition': `transform ${attributes.flipSpeed}ms ease`,
			    '-moz-transition': `transform ${attributes.flipSpeed}ms ease`,
			    '-webkit-transition': `transform ${attributes.flipSpeed}ms ease`,
    		},
    	})
	}
    
    if ( 'top' === attributes.frontElementAlign ) {
    	allInline.push({
    		selector: '.wpmozo-adfgu-flip-box-front .wpmozo-adfgu-flip-box-inner',
    		style: {
			    'flex-direction': 'column'
    		}
    	})
    }
    if ( 'left' === attributes.frontElementAlign ) {
    	allInline.push(
	    	{
	    		selector: `
	    		.wpmozo-adfgu-flip-box-front .wpmozo-adfgu-flip-box-icon-wrap,
	    		.wpmozo-adfgu-flip-box-front .wpmozo-adfgu-flip-box-image-wrap`,
	    		style: {
				    'margin-right': '20px'
	    		}
	    	},
	    	{
	    		selector: '.wpmozo-adfgu-flip-box-front .wpmozo-adfgu-flip-box-content-wrap',
	    		style: {
				    'width': 'calc( 100% - 20px )'
	    		}
	    	}
    	)
    }
    if ( 'right' === attributes.frontElementAlign ) {
    	allInline.push(
    		{
	    		selector: '.wpmozo-adfgu-flip-box-front .wpmozo-adfgu-flip-box-inner',
	    		style: {
				    'flex-direction': 'row-reverse'
	    		}
	    	},
	    	{
	    		selector: `
	    		.wpmozo-adfgu-flip-box-front .wpmozo-adfgu-flip-box-icon-wrap,
	    		.wpmozo-adfgu-flip-box-front .wpmozo-adfgu-flip-box-image-wrap`,
	    		style: {
				    'margin-left': '20px'
	    		}
	    	},
	    	{
	    		selector: '.wpmozo-adfgu-flip-box-front .wpmozo-adfgu-flip-box-content-wrap',
	    		style: {
				    'width': 'calc( 100% - 20px )'
	    		}
	    	}
    	)
    }
    if ( 'top' === attributes.backElementAlign ) {
    	allInline.push({
    		selector: '.wpmozo-adfgu-flip-box-back .wpmozo-adfgu-flip-box-inner',
    		style: {
			    'flex-direction': 'column'
    		}
    	})
    }
    if ( 'left' === attributes.backElementAlign ) {
    	allInline.push(
	    	{
	    		selector: `
	    		.wpmozo-adfgu-flip-box-back .wpmozo-adfgu-flip-box-icon-wrap,
	    		.wpmozo-adfgu-flip-box-back .wpmozo-adfgu-flip-box-image-wrap`,
	    		style: {
				    'margin-right': '20px'
	    		}
	    	},
	    	{
	    		selector: '.wpmozo-adfgu-flip-box-back .wpmozo-adfgu-flip-box-content-wrap',
	    		style: {
				    'width': 'calc( 100% - 20px )'
	    		}
	    	}
    	)
    }
    if ( 'right' === attributes.backElementAlign ) {
    	allInline.push(
    		{
	    		selector: '.wpmozo-adfgu-flip-box-back .wpmozo-adfgu-flip-box-inner',
	    		style: {
				    'flex-direction': 'row-reverse'
	    		}
	    	},
	    	{
	    		selector: `
	    		.wpmozo-adfgu-flip-box-back .wpmozo-adfgu-flip-box-icon-wrap,
	    		.wpmozo-adfgu-flip-box-back .wpmozo-adfgu-flip-box-image-wrap`,
	    		style: {
				    'margin-left': '20px'
	    		}
	    	},
	    	{
	    		selector: '.wpmozo-adfgu-flip-box-back .wpmozo-adfgu-flip-box-content-wrap',
	    		style: {
				    'width': 'calc( 100% - 20px )'
	    		}
	    	}
    	)
    }

    if ( 'icon' === attributes.frontElType ) {
    	allInline.push(
	    	{
	    		selector: '.wpmozo-adfgu-flip-box-front .wpmozo-adfgu-flip-box-icon-wrap i',
	    		style: {
	    			'color': attributes.frontIconColor,
	    			'font-size': attributes.frontIconSize,
	    		}
	    	},
	    	(attributes.frontIconStyle && 'hexagon' !== attributes.frontIconShape ) ? {
	    		selector: '.wpmozo-adfgu-flip-box-front .wpmozo-adfgu-flip-box-icon-wrap i',
	    		style: {
	    			'padding': '16px',
	    			'background-color': attributes.frontIconShapeBackground,
	    			...( 'square' === attributes.frontIconShape && {'border-radius': attributes.frontIconShapeborderRadius} ),
	    			...( 'circle' === attributes.frontIconShape && {'border-radius': '50%'} )
	    		},
	    		additional: convertedStyle.frontIconShape,
	    	} : {},
	    	(attributes.frontIconStyle && 'hexagon' === attributes.frontIconShape ) ? {
	    		selector: '.wpmozo-adfgu-flip-box-front .wpmozo-adfgu-hexagon-wrap:before',
	    		style: {
	    			'background-color': attributes.frontIconShapeBackground,
	    		},
	    	} : {},
	    	(attributes.frontIconStyle && attributes.frontIconHasShapeBorder && 'hexagon' === attributes.frontIconShape ) ? {
	    		selector: '.wpmozo-adfgu-flip-box-front .wpmozo-adfgu-hexagon-wrap',
	    		style: {
	    			'background-color': attributes.frontIconShapeBorderColor,
	    		},
	    	} : {}
    	)
    }
    if ( 'icon' === attributes.backElType ) {
    	allInline.push(
	    	{
	    		selector: '.wpmozo-adfgu-flip-box-back .wpmozo-adfgu-flip-box-icon-wrap i',
	    		style: {
	    			'color': attributes.backIconColor,
	    			'font-size': attributes.backIconSize,
	    		}
	    	},
	    	(attributes.backIconStyle && 'hexagon' !== attributes.backIconShape ) ? {
	    		selector: '.wpmozo-adfgu-flip-box-back .wpmozo-adfgu-flip-box-icon-wrap i',
	    		style: {
	    			'padding': '16px',
	    			'background-color': attributes.backIconShapeBackground,
	    			...( 'circle' === attributes.backIconShape && {'border-radius': '50%'} )
	    		},
	    		additional: convertedStyle.backIconShape,
	    	} : {},
	    	(attributes.backIconStyle && 'hexagon' === attributes.backIconShape ) ? {
	    		selector: '.wpmozo-adfgu-flip-box-back .wpmozo-adfgu-hexagon-wrap:before',
	    		style: {
	    			'background-color': attributes.backIconShapeBackground,
	    		},
	    	} : {},
	    	(attributes.backIconStyle && attributes.backIconHasShapeBorder && 'hexagon' === attributes.backIconShape ) ? {
	    		selector: '.wpmozo-adfgu-flip-box-back .wpmozo-adfgu-hexagon-wrap',
	    		style: {
	    			'background-color': attributes.backIconShapeBorderColor,
	    		},
	    	} : {}
    	)
    }

    if ( 'image' === attributes.frontElType ) {
    	allInline.push(
	    	{
	    		selector: '.wpmozo-adfgu-flip-box-front .wpmozo-adfgu-flip-box-image-wrap img',
	    		style: {
				    'width': attributes.frontImageWidth,
				    'height': attributes.frontImageWidth,
				    'object-fit': 'cover',
				    'display': 'block',
				    ...( 'left' === attributes.frontImageAlignment && {'margin-right': 'auto'} ),
				    ...( 'center' === attributes.frontImageAlignment && {'margin-left': 'auto','margin-right': 'auto'} ),
				    ...( 'right' === attributes.frontImageAlignment && {'margin-left': 'auto'} ),
	    		}
	    	},
    	)
    }
    if ( 'image' === attributes.backElType ) {
    	allInline.push({
    		selector: '.wpmozo-adfgu-flip-box-back .wpmozo-adfgu-flip-box-image-wrap img',
    		style: {
			    'width': attributes.backImageWidth,
			    'height': attributes.backImageWidth,
			    'object-fit': 'cover',
			    'display': 'block',
			    ...( 'left' === attributes.backImageAlignment && {'margin-right': 'auto'} ),
			    ...( 'center' === attributes.backImageAlignment && {'margin-left': 'auto','margin-right': 'auto'} ),
			    ...( 'right' === attributes.backImageAlignment && {'margin-left': 'auto'} ),
    		}
    	})
    }

    if ( attributes.backHasButton ) {
    	allInline.push(
    		{
	    		selector: '.wpmozo-adfgu-flip-box-button',
	    		style: {
	    			'color': attributes.backBtnColor,
	    			'background-color': attributes.backBtnBackground,
	    		},
	    		additional: backBtnAddi,
	    	},
	    );
    }

    let generateStyle = wpmozoCoreFun.wpmozo_generate_style(allInline);

    if ( ! wpmozoCoreFun.wpmozo_is_empty( generateStyle ) ) {
	    css += `
	    	${parent} {
	    		${generateStyle}
	    	}
	    `;
	}

	return (
		<style className="wpmozo-dynamic-style" data-id={ID} data-client-id={clientId}>{css}</style>
	);

}

export default Style;