
const Style = ({attributes, ID, clientId}) => {

	const wpmozoCoreFun = window.wpmozo,
	parent = '#block-'+clientId,
    toConvertStyles = [
    	'text',
    	'textBgDimensions',
    ];

    let css = '', 
    convertedStyle = wpmozoCoreFun.convetInlineStyleStr( toConvertStyles, attributes );

    let allInline = [
		{
    		selector: '.wpmozo-adfgu-fancy-text-inner',
    		style: {
    			'background-clip': 'border-box',
    			'-webkit-background-clip': 'text',
    			'-webkit-text-fill-color': 'transparent',
			    'text-align': attributes.textAlignment,
    		},
    		additional: convertedStyle.text
    	},
    ];

    if ( 'gradient' === attributes.textStyle ) {

    	allInline.push({
    		selector: '.wpmozo-adfgu-fancy-text-inner',
    		style: {
    			'background-color': 'transparent',
			    'background-image': attributes.fancyTextBackground,
    		}
    	})

    }else{

    	allInline.push({
    		selector: '.wpmozo-adfgu-fancy-text-inner',
    		style: {
			    'background-image': 'url('+attributes.fancyTextBackgroundImg+')',
			    'background-size': attributes.textBgSize,
			    'background-position': attributes.textBgPosition,
			    'background-repeat': attributes.textBgRepeat,
    		}
    	})

    	if ( 'none' !== attributes.textBgOverlay ) {
			allInline.push({
	    		selector: '.wpmozo-adfgu-fancy-text-inner:before',
	    		style: {
	    			'content': '""',
	    			'position': 'absolute',
				    'top': '0',
				    'right': '0',
				    'bottom': '0',
				    'left': '0',
				    'z-index': '-2',
				    'background-image': 'inherit',
				    'background-size': attributes.textBgSize,
				    'background-position': attributes.textBgPosition,
				    'background-repeat': attributes.textBgRepeat,
	    		},
	    	})
	    	allInline.push({
	    		selector: '.wpmozo-adfgu-fancy-text-inner:after',
	    		style: {
	    			'content': '""',
	    			'position': 'absolute',
				    'top': '0',
				    'right': '0',
				    'bottom': '0',
				    'left': '0',
				    'z-index': '-1',
				    ...( ! wpmozoCoreFun.wpmozo_is_empty( attributes.textBgOverlayColorSolid ) && {'background-color': attributes.textBgOverlayColor}),
				    ...( ! wpmozoCoreFun.wpmozo_is_empty( attributes.textBgOverlayColorGradient ) && {'background': attributes.textBgOverlayColor})
	    		},
	    	})
	    	css += `
		    	${parent} {
		    		z-index: 0;
		    		position: relative;
		    	}
		    `;
	    }

    }

    let generateStyle = wpmozoCoreFun.wpmozo_generate_style(allInline);
    
    if ( ! wpmozoCoreFun.wpmozo_is_empty( generateStyle ) ) {
	    css += `
	    	${parent} {
	    		${generateStyle}
	    	}
	    `;
	}

	if ( ! wpmozoCoreFun.wpmozo_is_empty( convertedStyle.textBgDimensions ) && 'none' !== attributes.textBgOverlay ) {
		css += `
	    	${parent} {
	    		${convertedStyle.textBgDimensions}
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