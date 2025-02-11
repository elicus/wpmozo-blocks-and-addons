
const Style = (attributes) => {

	const wpmozoCoreFun = window.wpmozo,
	clientId = attributes.clientId,
    parent = '#block-'+clientId,
    toConvertStyles = [
    	'titleNormal',
    	'titleHover',
    	'content',
    	'layout'
    ];

    let css = '', 
    convertedStyle = wpmozoCoreFun.convetInlineStyleStr( toConvertStyles, attributes );

    let allInline = [
    	{
    		selector: '.wpmozo-adfgu-interactive-image-card-image',
    		style: {
    			'opacity': attributes.imageOpacity,
    		}
    	},
    	{
    		selector: '.wpmozo-adfgu-interactive-image-card-title',
    		style: {
    			'color': attributes.titleNormalColor,
    		},
    		additional: convertedStyle.titleNormal,
    	},
    	{
    		selector: '.wpmozo-adfgu-interactive-image-card-wrap figure:hover .wpmozo-adfgu-interactive-image-card-title',
    		style: {
    			'color': attributes.titleHoverColor,
    		},
    		additional: convertedStyle.titleHover,
    	},
		{
    		selector: '.wpmozo-adfgu-interactive-image-card-content',
    		style: {
    			'color': attributes.contentColor,
    		},
    		additional: convertedStyle.content,
    	},
    ];

    if ( 'milo' !== attributes.layout ) {
    	allInline.push(
	    	{
	    		selector: '.wpmozo-adfgu-interactive-image-card-title',
	    		style: {
	    			'text-align': attributes.titleAlign,
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

    if ('romeo' !== attributes.layout && 'marley' !== attributes.layout ) {
    	allInline.push({
    		selector: '.wpmozo-adfgu-interactive-image-card-wrap figure',
    		style: {
    			'background': attributes.overlayColor,
    		}
    	});
    }

    if ( 'roxy' === attributes.layout ) {
    	allInline.push({
    		selector: '.wpmozo-adfgu-interactive-image-card-wrap figure.effect-roxy figcaption::before',
    		additional: convertedStyle.layout
    	});
    }
    if ( 'bubba' === attributes.layout ) {
    	allInline.push(
	    	{
	    		selector: '.wpmozo-adfgu-interactive-image-card-wrap figure.effect-bubba figcaption::before',
	    		style: {
	    			'border-top': attributes.layoutborder.width+' '+attributes.layoutborder.style+' '+attributes.layoutborder.color,
	    			'border-bottom': attributes.layoutborder.width+' '+attributes.layoutborder.style+' '+attributes.layoutborder.color,
	    		}
	    	},
	    	{
	    		selector: '.wpmozo-adfgu-interactive-image-card-wrap figure.effect-bubba figcaption::after',
	    		style: {
	    			'border-right': attributes.layoutborder.width+' '+attributes.layoutborder.style+' '+attributes.layoutborder.color,
	    			'border-left': attributes.layoutborder.width+' '+attributes.layoutborder.style+' '+attributes.layoutborder.color,
	    		}
	    	}
    	);
    }
    if ( 'romeo' === attributes.layout ) {
    	allInline.push(
	    	{
	    		selector: `
	    		.wpmozo-adfgu-interactive-image-card-wrap figure.effect-romeo figcaption::after, 
	    		.wpmozo-adfgu-interactive-image-card-wrap figure.effect-romeo figcaption::before
	    		`,
	    		style: {
	    			'height': attributes.layoutborder.width,
	    			'background': attributes.layoutborder.color,
	    		}
	    	},
    	);
    }
    if ( 'layla' === attributes.layout ) {
    	allInline.push(
	    	{
	    		selector: '.wpmozo-adfgu-interactive-image-card-wrap figure.effect-layla figcaption::before',
	    		style: {
	    			'border-top': attributes.layoutborder.width+' '+attributes.layoutborder.style+' '+attributes.layoutborder.color,
	    			'border-bottom': attributes.layoutborder.width+' '+attributes.layoutborder.style+' '+attributes.layoutborder.color,
	    		}
	    	},
	    	{
	    		selector: '.wpmozo-adfgu-interactive-image-card-wrap figure.effect-layla figcaption::after',
	    		style: {
	    			'border-right': attributes.layoutborder.width+' '+attributes.layoutborder.style+' '+attributes.layoutborder.color,
	    			'border-left': attributes.layoutborder.width+' '+attributes.layoutborder.style+' '+attributes.layoutborder.color,
	    		}
	    	}
    	);
    }
    if ( 'oscar' === attributes.layout ) {
    	allInline.push({
    		selector: '.wpmozo-adfgu-interactive-image-card-wrap figure.effect-oscar figcaption::before',
    		additional: convertedStyle.layout
    	});
    }
    if ( 'marley' === attributes.layout ) {
    	allInline.push(
	    	{
	    		selector: `
	    		.wpmozo-adfgu-interactive-image-card-wrap figure.effect-marley .wpmozo-adfgu-interactive-image-card-title::after
	    		`,
	    		style: {
	    			'height': attributes.layoutborder.width,
	    			'background': attributes.layoutborder.color,
	    		}
	    	},
    	);
    }
    if ( 'ruby' === attributes.layout ) {
    	allInline.push({
    		selector: '.wpmozo-adfgu-interactive-image-card-wrap figure.effect-ruby .wpmozo-adfgu-interactive-image-card-content',
    		additional: convertedStyle.layout
    	});
    }
    if ( 'milo' === attributes.layout ) {
    	allInline.push({
    		selector: '.wpmozo-adfgu-interactive-image-card-wrap figure.effect-milo .wpmozo-adfgu-interactive-image-card-content',
    		style: {
    			'border-right': attributes.layoutborder.width+' '+attributes.layoutborder.style+' '+attributes.layoutborder.color,
    		}
    	});
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
				<style>{css}</style>
			}
		</>
	);

}

export default Style;