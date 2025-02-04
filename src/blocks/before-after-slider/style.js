
const Style = (attributes) => {

	const clientId = attributes.clientId;

	const parent = '#block-'+clientId,
    toConvertStyles = [ 'beforeLabel', 'afterLabel' ],
    convertedStyle = window.wpmozo.convetInlineStyleStr( toConvertStyles, attributes ),
    no_overlay = attributes.overlayOnHover ? false : true;

    let css = '',
    beforeLabelStyle = convertedStyle['beforeLabel'],
    afterLabelStyle = convertedStyle['afterLabel'],
    handleStyle = {
        'background-color': {
            value: attributes.globalcolorHandle,
            suffix: '!important',
        }
    };

    if ( ! window.wpmozo.wpmozo_is_empty( attributes.globalcolorHandle ) && 'horizontal' === attributes.sliderOrientation ) {
        handleStyle['-webkit-box-shadow'] = `0 3px 0 ${attributes.globalcolorHandle}, 0px 0px 12px rgba(51, 51, 51, 0.5)`;
        handleStyle['-moz-box-shadow'] = `0 3px 0 ${attributes.globalcolorHandle}, 0px 0px 12px rgba(51, 51, 51, 0.5)`;
        handleStyle['box-shadow'] = `0 3px 0 ${attributes.globalcolorHandle}, 0px 0px 12px rgba(51, 51, 51, 0.5)`;
    }

    let allInline = [
        {
            selector: '.twentytwenty-handle:before, .twentytwenty-handle:after',
            style: handleStyle,
        },
        {
            selector: '.twentytwenty-handle',
            style: {
                'border-color': attributes.globalcolorHandle,
            },
        },
        {
            selector: '.twentytwenty-left-arrow',
            style: {
                'border-right-color': attributes.globalcolorHandle,
            },
        },
        {
            selector: '.twentytwenty-right-arrow',
            style: {
                'border-left-color': attributes.globalcolorHandle,
            },
        },
        {
            selector: '.twentytwenty-overlay:hover',
            style: {
                'background-color': attributes.globalcolorOverlay,
            },
        },
        {
            selector: '.twentytwenty-before-label:before',
            additional: beforeLabelStyle,
        },
        {
            selector: '.twentytwenty-after-label:before',
            additional: afterLabelStyle,
        },
    ];

    if ( 'horizontal' === attributes.sliderOrientation ) {
        allInline.push({
            selector: '.twentytwenty-left-arrow',
            style: {
                'border-right-color': attributes.globalcolorHandle,
            },
        });
        allInline.push({
            selector: '.twentytwenty-right-arrow',
            style: {
                'border-left-color': attributes.globalcolorHandle,
            },
        });
    }else{
        allInline.push({
            selector: '.twentytwenty-down-arrow',
            style: {
                'border-top-color': attributes.globalcolorHandle,
            },
        });
        allInline.push({
            selector: '.twentytwenty-up-arrow',
            style: {
                'border-bottom-color': attributes.globalcolorHandle,
            },
        });
    }

    let generateStyle = window.wpmozo.wpmozo_generate_style(allInline);

    if ( ! window.wpmozo.wpmozo_is_empty( generateStyle ) ) {
        css += `
            ${parent} {
                ${generateStyle}
            }
        `;
    }

    if ( no_overlay ) {
        css += `
        ${parent} {
            .twentytwenty-overlay:hover{
                background: unset;
            }
        }
        `
    }

    if ( ! attributes.beforeLabelOnHover ) {
        css += `
        ${parent} {
            .twentytwenty-before-label{
                opacity: 1;
            }
        }
        `
    }

    if ( ! attributes.afterLabelOnHover ) {
        css += `
        ${parent} {
            .twentytwenty-after-label{
                opacity: 1;
            }
        }
        `
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