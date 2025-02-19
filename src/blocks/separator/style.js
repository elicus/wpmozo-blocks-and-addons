
const Style = ({attributes, ID, clientId}) => {

	const wpmozoCoreFun = window.wpmozo,
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
    ];

    if ( 'line' === attributes.separatorType ) {
    	allInline.push(
	    	{
	    		selector: '.wpmozo-adfgu-line',
	    		style: {
	    			'border-top-width': attributes.separatorThickness+'px',
	    		}
	    	},
	    	{
	    		selector: '.wpmozo-adfgu-line',
	    		style: {
	    			'border-color': attributes.separatorColor,
	    		}
	    	},
	    	{
	    		selector: '.wpmozo-adfgu-line',
	    		style: {
	    			'border-style': attributes.lineStyle,
	    		}
	    	},
    	);
    }
    if ( 'shadow' === attributes.separatorType ) {
    	allInline.push(
	    	{
	    		selector: '.wpmozo-adfgu-shadow',
	    		style: {
	    			'height': attributes.separatorThickness+'px',
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