
const Style = (attributes) => {

	const clientId = attributes.clientId,
    parent = '#block-'+clientId,
    toConvertStyles = [],
    wpmozoCoreFun = window.wpmozo;

    let css = '';
    
    let allInline = [
        {
            selector: '.logo-img',
            style: {
                'width': attributes.logoWidth+'px',
                'height': attributes.logoHeight+'px',
            }
        }
    ];

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