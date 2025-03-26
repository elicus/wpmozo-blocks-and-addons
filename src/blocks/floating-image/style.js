
const Style = ({attributes, ID, clientId}) => {

	const parent = '#block-'+clientId,
    toConvertStyles = [],
    wpmozoCoreFun = window.wpmozo;

    let css = '';
    
    let allInline = [
        { 
            selector: '.wpmozo-bna-floating-image-wrapper',
            style: {
                'height': attributes.containerHeight,
            }
        },
        {
            selector: '.floating-image-item img',
            style: {
                'max-height': attributes.containerHeight,
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
		<style className="wpmozo-dynamic-style" data-id={ID} data-client-id={clientId}>{css}</style>
	);

}

export default Style;