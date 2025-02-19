
const Style = ({attributes, ID, clientId}) => {

	const parent = '#block-'+clientId,
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

    if ( ! wpmozoCoreFun.wpmozo_is_empty( attributes.nextSlideArrow ) ) {
        allInline.push({
            selector: '.custom-swiper-button-next:after',
            style: {
                'display': 'none !important;',
            },
        });
    }

    if ( ! wpmozoCoreFun.wpmozo_is_empty( attributes.previousSlideArrow ) ) {
        allInline.push({
            selector: '.custom-swiper-button-prev:after',
            style: {
                'display': 'none !important;',
            },
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