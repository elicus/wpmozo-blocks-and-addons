
const Style = ({attributes, ID, clientId}) => {

    const parent = '#block-'+clientId,
    wpmozoCoreFun = window.wpmozo;
    
    let allInline = [],
    css = '';

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