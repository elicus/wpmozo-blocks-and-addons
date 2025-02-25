
const Style = ({attributes, ID, clientId}) => {

    const wpmozoCoreFun = window.wpmozo,
        parent = '#block-'+clientId,
        toConvertStyles = [
        'logo'
        ],
        convertedStyle = wpmozoCoreFun.convetInlineStyleStr( toConvertStyles, attributes );

    let css = '';
    
    let allInline = [
        {
            selector: parent,
            style: {
                'background': attributes.logoBackground
            },
            additional: convertedStyle['logo']
        }
    ];

    let generateStyle = wpmozoCoreFun.wpmozo_generate_style(allInline);
    
    if ( ! wpmozoCoreFun.wpmozo_is_empty( generateStyle ) ) {
        css += `
            ${generateStyle}
        `;
    }

    return (
        <style className="wpmozo-dynamic-style" data-id={ID} data-client-id={clientId}>{css}</style>
    );

}

export default Style;