
const Style = ({attributes, ID, clientId}) => {

	const wpmozoCoreFun = window.wpmozo,
        parent = '#block-'+clientId,
        toConvertStyles = [
        'text',
        'link',
        'divider'
        ],
        convertedStyle = wpmozoCoreFun.convetInlineStyleStr( toConvertStyles, attributes );

    let css = '';
    
    let allInline = [
        {
            selector: '.wpmozo-adfgu-list-icon i',
            style: {
                'font-size': `${attributes.iconFontSize}px`,
                'color': attributes.iconColor
            }
        },
        {
            selector: '.wpmozo-adfgu-list-layout.wpmozo-adfgu-list-default',
            style: {
                'align-items': 'right' === attributes.listAlignment ? 'flex-end' : ( 'left' === attributes.listAlignment ? 'flex-start' : attributes.listAlignment )
            }
        },
        {
            selector: '.wpmozo-adfgu-list-layout.wpmozo-adfgu-list-inline, .wpmozo-adfgu-list-layout.wpmozo-adfgu-list-inline .block-editor-block-list__layout',
            style: {
                'display' : 'flex',
                'justify-content': 'right' === attributes.listAlignment ? 'flex-end' : ( 'left' === attributes.listAlignment ? 'flex-start' : attributes.listAlignment ),
                'flex-flow': 'row wrap'
            }
        },
        {
            selector: '.wpmozo-adfgu-list-item-text',
            style: {
                'color': attributes.textColor,
                'text-indent' : `${attributes.indentation}px`
            },
            additional: convertedStyle.text,
        },
        {
            selector: '.wpmozo-adfgu-list-item-text a',
            style: {
                'color': attributes.linkColor,
            },
            additional: convertedStyle.link,
        },
        {
            selector: '.wpmozo-adfgu-marker-image',
            style: {
                'width': `${attributes.imageWidth}px`,
            }
        }
    ];

    if ( 'default' === attributes.layout ) {
        allInline.push({
            selector: '.wpmozo-adfgu-list-divider',
            style: {
                'border-top-width': `${attributes.dividerSize}px`,
                'border-style': attributes.dividerStyle,
                'border-color': attributes.dividerColor
            },
            additional: convertedStyle['divider']
        });
    } else{
        allInline.push({
            selector: '.wpmozo-adfgu-list-divider',
            style: {
                'border-right-width': `${attributes.dividerSize}px`,
                'border-style': attributes.dividerStyle,
                'border-color': attributes.dividerColor
            },
            additional: convertedStyle['divider']
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
		<style className="wpmozo-dynamic-style" data-id={ID} data-client-id={clientId}>{css}</style>
	);

}

export default Style;