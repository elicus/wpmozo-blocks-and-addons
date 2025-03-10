
const Style = ({attributes, ID, clientId}) => {

	const wpmozoCoreFun = window.wpmozo,
    parent = '#block-'+clientId,
    toConvertStyles = [
    	'title',
    	'description',
    	'content',
        'button'
    ];

    let css = '', 
    convertedStyle = wpmozoCoreFun.convetInlineStyleStr( toConvertStyles, attributes );

    let allInline = [
    	{
    		selector: '.wpmozo-adfgu-tilt-image-inner-wrapper:before',
    		style: {
    			'background-color': attributes.overlayColor,
    		}
    	},
        {
            selector: '.wpmozo-adfgu-tilt-icon i',
            style: {
                'color': attributes.iconColor,
                'font-size': attributes.iconFontSize
            }
        },
        {
            selector: '.wpmozo-adfgu-tilt-content-wrapper',
            additional: convertedStyle.content
        },
        {
            selector: '.wpmozo-adfgu-tilt-title',
            style: {
                'color': attributes.titleColor,
                'text-align': attributes.titleAlign
            },
            additional: convertedStyle.title
        },
        {
            selector: '.wpmozo-adfgu-tilt-desc',
            style: {
                'color': attributes.descriptionColor,
                'text-align': attributes.descriptionAlign
            },
            additional: convertedStyle.description
        },
        {
            selector: '.wpmozo-adfgu-tilt-image-button',
            style: {
                'color': attributes.buttonTextColor,
                'background': attributes.buttonBackgroundColor
            },
            additional: convertedStyle.button
        },
    ];

    if ( attributes.use3dEffect ) {
        allInline.push({
            selector: '.wpmozo-adfgu-tilt-image-wrapper',
            style: {
                'transform-style': 'preserve-3d'
            }
        });
        allInline.push({
            selector: '.wpmozo-adfgu-tilt-image-inner-wrapper',
            style: {
                'transform-style': 'preserve-3d'
            }
        })
        allInline.push({
            selector: '.wpmozo-adfgu-tilt-content-wrapper',
            style: {
                'transform': `translateZ(${attributes.tilt3dValue}px)`
            }
        })
    }

    if ( ! attributes.tiltMobile ) {
        allInline.push({
            selector: '.wpmozo-adfgu-tilt-image .wpmozo-adfgu-tilt-image-inner-wrapper',
            style: {
                'transform': 'unset !important'
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
				<style className="wpmozo-dynamic-style" data-id={ID} data-client-id={clientId}>{css}</style>
			}
		</>
	);

}

export default Style;