
const Style = (attributes) => {

	const clientId = attributes.clientId,
    parent = '#block-'+clientId,
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
            selector: '.wpmozo-adfgu-toggle-button-wrap .wpmozo-adfgu-toggle-switch:before',
            style: {
                'background-color': attributes.toggleSwitchColor,
            }
        },
        {
            selector: '.wpmozo-adfgu-toggle-button-wrap input:checked + .wpmozo-adfgu-toggle-switch:before',
            style: {
                'background-color': attributes.toggleSwitchOnState,
            }
        },
        {
            selector: '.wpmozo-adfgu-toggle-button-wrap .wpmozo-adfgu-toggle-switch',
            style: {
                'background-color': attributes.toggleSwitchBackground,
            }
        },
        {
            selector: '.wpmozo-adfgu-toggle-button-wrap input:checked + .wpmozo-adfgu-toggle-switch',
            style: {
                'background-color': attributes.toggleSwitchOnStateBackground,
            }
        },
        {
            selector: '.wpmozo-adfgu-toggle-button-wrap .wpmozo-adfgu-toggle-switch:hover::before',
            style: {
                'background-color': attributes.toggleSwitchHoverColor,
            }
        },
        {
            selector: '.wpmozo-adfgu-toggle-button-wrap input:checked + .wpmozo-adfgu-toggle-switch:hover::before',
            style: {
                'background-color': attributes.toggleSwitchHoverOnState,
            }
        },
        {
            selector: '.wpmozo-adfgu-toggle-button-wrap .wpmozo-adfgu-toggle-switch:hover',
            style: {
                'background-color': attributes.toggleSwitchHoverBackground,
            }
        },
        {
            selector: '.wpmozo-adfgu-toggle-button-wrap input:checked + .wpmozo-adfgu-toggle-switch:hover',
            style: {
                'background-color': attributes.toggleSwitchHoverOnStateBackground,
            }
        },
        {
            selector: '.wpmozo-adfgu-toggle-button-wrap',
            style: {
                'justify-content': attributes.toggleSwitchAlignment,
            },
            additional: convertedStyle.toggleSwitchDimensions
        },
        {
            selector: '.wpmozo-adfgu-toggle-title-one, .wpmozo-adfgu-toggle-title-one > h5',
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
            selector: '.wpmozo-adfgu-toggle-title-two, .wpmozo-adfgu-toggle-title-two > h5',
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
            selector: '.wpmozo-adfgu-toggle-title-one .icon-wrapper i',
            style: {
                'font-size': {
                    value: attributes.titleOneIconSize,
                    suffix: 'px',
                },
                'color': attributes.titleOneIconColor,
            },
        },
        {
            selector: '.wpmozo-adfgu-toggle-title-two .icon-wrapper i',
            style: {
                'font-size': {
                    value: attributes.titleTwoIconSize,
                    suffix: 'px',
                },
                'color': attributes.titleTwoIconColor,
            },
        },
        {
            selector: '.wpmozo-adfgu-content-toggle-one',
            style: {
                'background-color': attributes.contentOneBackground,
                'text-align': attributes.contentOneAlignment,
                'color': attributes.contentOneColor,
            },
            additional: contentOneAddi,
        },
        {
            selector: '.wpmozo-adfgu-content-toggle-two',
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
                <style>{css}</style>
            }
        </>
    );

}

export default Style;