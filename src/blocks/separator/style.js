
const Style = ({attributes, ID, clientId}) => {

	const wpmozoCoreFun = window.wpmozo,
    parent = '#block-'+clientId,
    toConvertStyles = [
    	'textNormal',
    	'textHover',
    	'content',
    	'layout'
    ];

    let css = '', 
    convertedStyle = wpmozoCoreFun.convetInlineStyleStr( toConvertStyles, attributes );

    let allInline = [
    	{
    		selector: '.wpmozo-adfgu-text-wrapper',
    		style: {
    			'color': attributes.textNormalColor,
    		},
    		additional: convertedStyle.textNormal,
    	},
    	{
    		selector: '.wpmozo-adfgu-text-wrapper:hover',
    		style: {
    			'color': attributes.textHoverColor,
    		},
    		additional: convertedStyle.textHover,
    	},
    ];

    if ( 'line' === attributes.separatorType ) {
    	allInline.push(
	    	{
	    		selector: '.wpmozo-adfgu-line',
	    		style: {
	    			'border-top-width': `${attributes.separatorThickness}px`,
	    			'border-top-color': attributes.separatorColor,
	    			'border-top-style': attributes.lineStyle,
	    		}
	    	},
    	);
    	if ( 'solid' === attributes.lineStyle && undefined === attributes.separatorColor ) {
	    	allInline.push(
		    	{
		    		selector: '.wpmozo-adfgu-line',
		    		style: {
		    			'border-top-width': `${attributes.separatorThickness}px`,
		    			'border-image-slice' : 1,
		    			'border-image-source': attributes.separatorGradient,
		    			'border-top-style': attributes.lineStyle,
		    		}
		    	},
	    	);
	    }
    	if ( 'solid' !== attributes.lineStyle ) {
	    	allInline.push(
		    	{
		    		selector: '.wpmozo-adfgu-line',
		    		style: {
		    			'border-top-color': attributes.shadowColor,
		    		}
		    	},
	    	);
	    }
    	if ( 'iconSeparator' === attributes.lineUseWith ) {
    		allInline.push(
		    	{
		    		selector: '.wpmozo-adfgu-icon-wrapper i',
		    		style: {
		    			'color': attributes.iconColor,
		    		}
		    	},
	    	);
    		if ( true === attributes.enableIconFontSize && true === attributes.styleIcon ) { 
    			if ( 'hexagon' === attributes.iconShape ) { 
    				if( true === attributes.enableShapeBorder ){ 
		    	    	allInline.push(
		    		    	{
		    		    		selector: '.wpmozo-adfgu-icon-wrapper .hexagon.wpmozo-adfgu-border-hex',
		    		    		style: {
		    		    			'box-shadow': `2px 0px 0px 0px inset ${attributes.shapeBorderColor}, -2px 0px 0px 0px inset ${attributes.shapeBorderColor}`,
		    		    		}
		    		    	},
		    		    	{
		    		    		selector: '.wpmozo-adfgu-icon-wrapper .hexagon.wpmozo-adfgu-border-hex:after',
		    		    		style: {
		    		    			'border-right': `2px solid ${attributes.shapeBorderColor}`,
		    		    			'border-bottom': `2px solid ${attributes.shapeBorderColor}`,
		    		    			'transform': 'rotate(45deg) skew(-15.8deg, -15.8deg) translate( 72%, 27%)',
		    		    			'width': 55+"%",
		    		    			'height': 100+"%",
		    		    		}
		    		    	},
		    		    	{
		    		    		selector: '.wpmozo-adfgu-icon-wrapper .hexagon.wpmozo-adfgu-border-hex:before',
		    		    		style: {
		    		    			'border-top': `2px solid ${attributes.shapeBorderColor}`,
		    		    			'border-left': `2px solid ${attributes.shapeBorderColor}`,
		    		    			'transform': 'rotate(45deg) skew(-15.8deg, -15.8deg) translate(-27%, -72%)',
		    		    			'width': 55+"%",
		    		    			'height': 100+"%",
		    		    		}
		    		    	},
		    	    	);

    				} else {
		    	    	allInline.push(
		    		    	{
		    		    		selector: '.wpmozo-adfgu-icon-wrapper .hexagon',
		    		    		style: {
		    		    		}
		    		    	},
		    		    	{
		    		    		selector: '.wpmozo-adfgu-icon-wrapper .hexagon:after',
		    		    		style: {
		    		    			'transform': 'rotate(45deg) skew(-16deg, -16deg) translate( 72%, 27%)',
					    			'width': 55+"%"
		    		    		}
		    		    	},
		    		    	{
		    		    		selector: '.wpmozo-adfgu-icon-wrapper .hexagon:before',
		    		    		style: {
		    		    			'transform': 'rotate(45deg) skew(-16deg, -16deg) translate(-27%, -72%)',
					    			'width': 55+"%"
		    		    		}
		    		    	},
		    	    	);
    				}
			    	allInline.push(
				    	{
				    		selector: '.wpmozo-adfgu-icon-wrapper',
				    		style: {
				    			'width': `calc( ${attributes.iconFontSize}px + ${(attributes.iconFontSize/1.15)}px )`,
				    		}
				    	},
				    	{
				    		selector: '.wpmozo-adfgu-icon-wrapper i',
				    		style: {
				    			'font-size': `${attributes.iconFontSize}px`,
				    		}
				    	},
				    	{
				    		selector: '.wpmozo-adfgu-icon-wrapper .hexagon:before, .wpmozo-adfgu-icon-wrapper .hexagon:after, .wpmozo-adfgu-icon-wrapper .hexagon',
				    		style: {
				    			'background-color': attributes.shapeBackground,
				    		}
				    	}
			    	);
    			} else { 
    				if( true === attributes.enableShapeBorder ){ 
				    	allInline.push(
					    	{
					    		selector: '.wpmozo-adfgu-icon-wrapper i',
					    		style: {
					    			'border': `2px solid ${attributes.shapeBorderColor}`,
					    		}
					    	},
					    	{
					    		selector: '.wpmozo-adfgu-icon-wrapper i',
					    		style: {
					    			'font-size': `${attributes.iconFontSize}px`,
					    		}
					    	},
				    	);
    				} else { 

    				}
			    	allInline.push(
				    	{
				    		selector: '.wpmozo-adfgu-icon-wrapper i',
				    		style: {
				    			'font-size': `${attributes.iconFontSize}px`,
				    		}
				    	},
			    	);
    			}
		    	allInline.push(
			    	{
			    		selector: '.wpmozo-adfgu-icon-wrapper i',
			    		style: {
			    			'background-color': attributes.shapeBackground,
			    		}
			    	}
		    	);
    		} else if ( true === attributes.enableIconFontSize && true !== attributes.styleIcon ) {
		    	allInline.push(
			    	{
			    		selector: '.wpmozo-adfgu-icon-wrapper i',
			    		style: {
			    			'font-size': `${attributes.iconFontSize}px`,
			    		}
			    	},
		    	);
    		} else if ( true !== attributes.enableIconFontSize && true === attributes.styleIcon ) {
    			if ( 'hexagon' === attributes.iconShape ) { 
    				if( true === attributes.enableShapeBorder ){ 
				    	allInline.push(
					    	{
					    		selector: '.wpmozo-adfgu-icon-wrapper .hexagon.wpmozo-adfgu-border-hex',
					    		style: {
					    			'border-left': `2px solid ${attributes.shapeBorderColor}`,
					    			'border-right': `2px solid ${attributes.shapeBorderColor}`,
					    		}
					    	},
					    	{
					    		selector: '.wpmozo-adfgu-icon-wrapper .hexagon.wpmozo-adfgu-border-hex:after',
					    		style: {
					    			'border-right': `2px solid ${attributes.shapeBorderColor}`,
					    			'border-bottom': `2px solid ${attributes.shapeBorderColor}`,
					    			'transform': 'rotate(45deg) skew(-13deg, -13deg) translate( 57%, 19%)',
					    			'width': 'calc( '+ 55+"% + 4px )",
					    			'height': 'calc( '+ 100+"% + 4px )",
					    		}
					    	},
					    	{
					    		selector: '.wpmozo-adfgu-icon-wrapper .hexagon.wpmozo-adfgu-border-hex:before',
					    		style: {
					    			'border-top': `2px solid ${attributes.shapeBorderColor}`,
					    			'border-left': `2px solid ${attributes.shapeBorderColor}`,
					    			'transform': 'rotate(45deg) skew(-13deg, -13deg) translate(-28%, -65%)',
					    			'width': 'calc( '+ 55+"% + 4px )",
					    			'height': 'calc( '+ 100+"% + 4px )",
					    		}
					    	},
				    	);
    				} else { 
				    	allInline.push(
					    	{
					    		selector: '.wpmozo-adfgu-icon-wrapper .hexagon.wpmozo-adfgu-icon-border-hex',
					    		style: {
					    		}
					    	},
					    	{
					    		selector: '.wpmozo-adfgu-icon-wrapper .hexagon:before',
					    		style: {
					    			'transform': 'rotate(45deg) skew(-16deg, -16deg) translate(-27%, -72%)',
					    			'width': 55+"%"
					    		}
					    	},
					    	{
					    		selector: '.wpmozo-adfgu-icon-wrapper .hexagon:after',
					    		style: {
					    			'transform': 'rotate(45deg) skew(-16deg, -16deg) translate( 72%, 27%)',
					    			'width': 55+"%"
					    		}
					    	},
				    	);

    				}
			    	allInline.push(
				    	{
				    		selector: '.wpmozo-adfgu-icon-wrapper',
				    		style: {
				    			'width': 72+'px',
				    		}
				    	},
				    	{
				    		selector: '.wpmozo-adfgu-icon-wrapper .hexagon, .wpmozo-adfgu-icon-wrapper .hexagon:before, .wpmozo-adfgu-icon-wrapper .hexagon:after ',
				    		style: {
				    			'background-color': attributes.shapeBackground,
				    		}
				    	},
			    	);
    			} else { 
    				if( true === attributes.enableShapeBorder ){ 
	    				allInline.push(
					    	{
					    		selector: '.wpmozo-adfgu-icon-wrapper .wpmozo-adfgu-icon-square.wpmozo-adfgu-icon-shape-border, .wpmozo-adfgu-icon-wrapper .wpmozo-adfgu-icon-circle.wpmozo-adfgu-icon-shape-border',
					    		style: {
					    			'border': `2px solid ${attributes.shapeBorderColor}`,
					    		}
					    	},
				    	);
    				} else { 

    				}
    				allInline.push(
				    	{
				    		selector: '.wpmozo-adfgu-icon-wrapper .wpmozo-adfgu-icon-square, .wpmozo-adfgu-icon-wrapper .wpmozo-adfgu-icon-circle',
				    		style: {
				    			'background-color': attributes.shapeBackground,
				    		}
				    	},
			    	);

    			}
    		} else {

    		}
	    }
    	if ( 'imageSeparator' === attributes.lineUseWith ) {
    		allInline.push(
		    	{
		    		selector: '.wpmozo-adfgu-separator-image',
		    		style: {
		    			'width': `${attributes.imageWidth}px`,
		    		}
		    	},
	    	);
	    }
    }
    if ( 'shadow' === attributes.separatorType ) {
    	allInline.push(
	    	{
	    		selector: '.wpmozo-adfgu-shadow',
	    		style: {
	    			'height': `${attributes.separatorThickness}px`,
	    			'background':`radial-gradient(ellipse at 50% -50% ,${attributes.shadowColor} 0%, rgba(0, 0, 0, 0) 75%), repeat scroll`,
	    		}
	    	},
	    	{
	    		selector: '.wpmozo-adfgu-interactive-image-card-content',
	    		style: {
	    			'text-align': attributes.contentAlign,
	    		}
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
		<>
			{ ! wpmozoCoreFun.wpmozo_is_empty( css ) &&
				<style className="wpmozo-dynamic-style" data-id={ID} data-client-id={clientId}>{css}</style>
			}
		</>
	);
}

export default Style;