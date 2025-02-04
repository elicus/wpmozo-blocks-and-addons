
const Style = (attributes) => {

	const clientId = attributes.clientId,
    parent = '#block-'+clientId,
    toConvertStyles = [
    	'preText',
    	'preTextDimensions',
    	'mainText',
    	'mainTextDimensions',
    	'postText',
    	'postTextDimensions',
    ];

    let css = '', 
    convertedStyle = window.wpmozo.convetInlineStyleStr( toConvertStyles, attributes ),
    flexDirection = attributes.displayInStack ? 'column' : 'initial',
    headingAlignment = ( 'left' === attributes.headingAlignment ) ? 'flex-start' : 'flex-end',
    preTextAddi = convertedStyle.preText + convertedStyle.preTextDimensions,
    mainTextAddi = convertedStyle.mainText + convertedStyle.mainTextDimensions,
    postTextAddi = convertedStyle.postText + convertedStyle.postTextDimensions;

    if ( 'center' === attributes.headingAlignment ) {
    	headingAlignment = 'center';
    }

    let allInline = [
    	{
    		selector: '.wpmozo-adfgu-fancy-heading-inner',
    		style: {
    			'display': 'flex',
			    'line-height': 1,
			    'padding': 0,
			    'margin': 0,
			    'align-items': headingAlignment,
			    'white-space': 'pre-wrap',
			    'flex-wrap': 'wrap',
			    'justify-content': headingAlignment,
			    'flex-direction': flexDirection,
    		}
    	},
    	{
    		selector: '.wpmozo-adfgu-fancy-heading-inner span',
    		style: {
    			'display': 'inline-block',
    			'color': attributes.headingColor,
    			'background': attributes.headingBackground,
    		}
    	},
    	{
    		selector: 'span.wpmozo-adfgu-pre-text',
    		style: {
    			'color': attributes.preTextColor,
    			'background': attributes.preTextBackground,
    		},
    		additional: preTextAddi,
    	},
    	{
    		selector: 'span.wpmozo-adfgu-pre-text:hover',
    		style: {
    			'color': attributes.preTextHoverColor,
    			'background': attributes.preTextHoverBackground,
    		}
    	},
    	{
    		selector: 'span.wpmozo-adfgu-main-text',
    		style: {
    			'color': attributes.mainTextColor,
    			'background': attributes.mainTextBackground,
    		},
    		additional: mainTextAddi,
    	},
    	{
    		selector: 'span.wpmozo-adfgu-main-text:hover',
    		style: {
    			'color': attributes.mainTextHoverColor,
    			'background': attributes.mainTextHoverBackground,
    		}
    	},
    	{
    		selector: 'span.wpmozo-adfgu-post-text',
    		style: {
    			'color': attributes.postTextColor,
    			'background': attributes.postTextBackground,
    		},
    		additional: postTextAddi,
    	},
    	{
    		selector: 'span.wpmozo-adfgu-post-text:hover',
    		style: {
    			'color': attributes.postTextHoverColor,
    			'background': attributes.postTextHoverBackground,
    		}
    	},
    ],
    generateStyle = window.wpmozo.wpmozo_generate_style(allInline);
    
    if ( ! window.wpmozo.wpmozo_is_empty( generateStyle ) ) {
	    css += `
	    	${parent} {
	    		${generateStyle}
	    	}
	    `;
	}

	return (
		<>
			{ ! window.wpmozo.wpmozo_is_empty( css ) &&
				<style className="wpmozo-dynamic-style">{css}</style>
			}
		</>
	);

}

export default Style;