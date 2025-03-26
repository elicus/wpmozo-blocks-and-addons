
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
    		selector: '.wpmozo-bna-tilt-image-inner-wrapper:before',
    		style: {
    			'background-color': attributes.overlayColor,
    		}
    	},
        {
            selector: '.wpmozo-bna-tilt-icon',
            style: {
                'text-align': attributes.iconAlign
            }
        },
        {
            selector: '.wpmozo-bna-tilt-icon i',
            style: {
                'color': attributes.iconColor,
                'font-size': attributes.iconFontSize
            }
        },
        {
            selector: '.wpmozo-bna-tilt-content-wrapper',
            additional: convertedStyle.content
        },
        {
            selector: '.wpmozo-bna-tilt-title',
            style: {
                'color': attributes.titleColor,
                'text-align': attributes.titleAlign
            },
            additional: convertedStyle.title
        },
        {
            selector: '.wpmozo-bna-tilt-desc',
            style: {
                'color': attributes.descriptionColor,
                'text-align': attributes.descriptionAlign
            },
            additional: convertedStyle.description
        },
        {
            selector: '.wpmozo-bna-tilt-image-button',
            style: {
                'color': attributes.buttonTextColor,
                'background': attributes.buttonBackgroundColor
            },
            additional: convertedStyle.button
        },
    ];

    if ( attributes.use3dEffect ) {
        allInline.push({
            selector: '.wpmozo-bna-tilt-image-wrapper',
            style: {
                'transform-style': 'preserve-3d'
            }
        });
        allInline.push({
            selector: '.wpmozo-bna-tilt-image-inner-wrapper',
            style: {
                'transform-style': 'preserve-3d'
            }
        })
        allInline.push({
            selector: '.wpmozo-bna-tilt-content-wrapper',
            style: {
                'transform': `translateZ(${attributes.tilt3dValue}px)`
            }
        })
    }

    if ( ! attributes.tiltMobile ) {
        allInline.push({
            selector: '.wpmozo-bna-tilt-image .wpmozo-bna-tilt-image-inner-wrapper',
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