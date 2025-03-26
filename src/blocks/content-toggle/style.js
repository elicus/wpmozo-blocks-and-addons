
const Style = ({attributes, ID, clientId}) => {

	const parent = '#block-'+clientId,
    toConvertStyles = [ 
    	'titleOne', 
    	'titleTwo', 
    	'toggleSwitchDimensions', 
    	'contentOne', 
    	'contentOneDimensions', 
    	'contentTwo', 
    	'contentTwoDimensions' 
    ];

    let css = '', 
    convertedStyle = window.wpmozo.convetInlineStyleStr( toConvertStyles, attributes ),
    contentOneAddi = convertedStyle.contentOne + convertedStyle.contentOneDimensions,
    contentTwoAddi = convertedStyle.contentTwo + convertedStyle.contentTwoDimensions;

    let allInline = [
        {
            selector: '.wpmozo-bna-toggle-button-wrap .wpmozo-bna-toggle-switch:before',
            style: {
                'background-color': attributes.toggleSwitchColor,
            }
        },
        {
            selector: '.wpmozo-bna-toggle-button-wrap input:checked + .wpmozo-bna-toggle-switch:before',
            style: {
                'background-color': attributes.toggleSwitchOnState,
            }
        },
        {
            selector: '.wpmozo-bna-toggle-button-wrap .wpmozo-bna-toggle-switch',
            style: {
                'background-color': attributes.toggleSwitchBackground,
            }
        },
        {
            selector: '.wpmozo-bna-toggle-button-wrap input:checked + .wpmozo-bna-toggle-switch',
            style: {
                'background-color': attributes.toggleSwitchOnStateBackground,
            }
        },
        {
            selector: '.wpmozo-bna-toggle-button-wrap .wpmozo-bna-toggle-switch:hover::before',
            style: {
                'background-color': attributes.toggleSwitchHoverColor,
            }
        },
        {
            selector: '.wpmozo-bna-toggle-button-wrap input:checked + .wpmozo-bna-toggle-switch:hover::before',
            style: {
                'background-color': attributes.toggleSwitchHoverOnState,
            }
        },
        {
            selector: '.wpmozo-bna-toggle-button-wrap .wpmozo-bna-toggle-switch:hover',
            style: {
                'background-color': attributes.toggleSwitchHoverBackground,
            }
        },
        {
            selector: '.wpmozo-bna-toggle-button-wrap input:checked + .wpmozo-bna-toggle-switch:hover',
            style: {
                'background-color': attributes.toggleSwitchHoverOnStateBackground,
            }
        },
        {
            selector: '.wpmozo-bna-toggle-button-wrap',
            style: {
                'justify-content': attributes.toggleSwitchAlignment,
            },
            additional: convertedStyle.toggleSwitchDimensions
        },
        {
            selector: '.wpmozo-bna-toggle-title-one, .wpmozo-bna-toggle-title-one > h5',
            style: {
                'color': attributes.titleOneColor,
                'gap': {
                    value: attributes.titleOneIconSpacing,
                    suffix: 'px',
                },
            },
            additional: convertedStyle.titleOne
        },
        {
            selector: '.wpmozo-bna-toggle-title-two, .wpmozo-bna-toggle-title-two > h5',
            style: {
                'color': attributes.titleTwoColor,
                'gap': {
                    value: attributes.titleTwoIconSpacing,
                    suffix: 'px',
                },
            },
            additional: convertedStyle.titleTwo
        },
        {
            selector: '.wpmozo-bna-toggle-title-one .icon-wrapper i',
            style: {
                'font-size': {
                    value: attributes.titleOneIconSize,
                    suffix: 'px',
                },
                'color': attributes.titleOneIconColor,
            },
        },
        {
            selector: '.wpmozo-bna-toggle-title-two .icon-wrapper i',
            style: {
                'font-size': {
                    value: attributes.titleTwoIconSize,
                    suffix: 'px',
                },
                'color': attributes.titleTwoIconColor,
            },
        },
        {
            selector: '.wpmozo-bna-content-toggle-one',
            style: {
                'background-color': attributes.contentOneBackground,
                'text-align': attributes.contentOneAlignment,
                'color': attributes.contentOneColor,
            },
            additional: contentOneAddi,
        },
        {
            selector: '.wpmozo-bna-content-toggle-two',
            style: {
                'background-color': attributes.contentTwoBackground,
                'text-align': attributes.contentTwoAlignment,
                'color': attributes.contentTwoColor,
            },
            additional: contentTwoAddi,
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
                <style className="wpmozo-dynamic-style" data-id={ID} data-client-id={clientId}>{css}</style>
            }
        </>
    );

}

export default Style;