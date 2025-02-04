
const Style = (attributes) => {

    const clientId = attributes.clientId,
    parent = '#block-'+clientId,
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
        <style className="wpmozo-dynamic-style">{css}</style>
    );

}

export default Style;