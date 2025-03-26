
const Style = ({attributes, ID, clientId}) => {

	const wpmozoCoreFun = window.wpmozo,
        parent = '#block-'+clientId,
        toConvertStyles = [
        'container',
        'arrow'
        ],
        convertedStyle = wpmozoCoreFun.convetInlineStyleStr( toConvertStyles, attributes );

    let css = '';
    
    let allInline = [
        {
            selector: '.logo-img',
            style: {
                'width': attributes.logoWidth+'px',
                'height': attributes.logoHeight+'px',
            }
        },
        {
            selector: '.wpmozo-bna-logo-slider-inner-wrap',
            additional: convertedStyle['container']
        },
        {
            selector: '.swiper-button-next:after, .swiper-button-next:before, .swiper-button-prev:after, .swiper-button-prev:before',
            style: {
                'color': attributes.sliderArrowColor,
                'font-size': attributes.arrowFontSize
            }
        },
        {
            selector: '.swiper-button-next, .swiper-button-prev',
            style: {
                'background': attributes.sliderArrowBackground
            },
            additional: convertedStyle['arrow']
        },
        {
            selector: '.swiper-pagination-bullet.swiper-pagination-bullet-active',
            style: {
                'background': attributes.sliderActiveDoteColor
            }
        },
        {
            selector: '.swiper-pagination-bullet',
            style: {
                'background': attributes.sliderInactiveDoteColor
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

    if ( attributes.enableLinearTransition ) {
        allInline.push({
            selector: '.swiper-wrapper',
            style: {
                'transition-timing-function': 'linear !important',
            },
        });
    }


    if ( attributes.showArrowOnHover ) {
        allInline.push({
            selector:     '.wpmozo-bna-logo-slider-navigation .swiper-button-prev',
            additional:  `visibility: hidden; opacity: 0; transition: all 300ms ease;`,
        });
        allInline.push({
            selector:     '.wpmozo-bna-logo-slider-navigation .swiper-button-next',
            additional:  `visibility: hidden; opacity: 0; transition: all 300ms ease;`,
        });
         allInline.push({
            selector:     '.wpmozo-bna-logo-slider-wrap:hover .wpmozo-bna-logo-slider-navigation .swiper-button-prev, .wpmozo-bna-logo-slider-wrap:hover .wpmozo-bna-logo-slider-navigation .swiper-button-next',
            additional:  `visibility: visible; opacity: 1;`,
        });
        allInline.push({
            selector:     '.wpmozo-bna-logo-slider-wrap:hover .wpmozo-bna-logo-slider-navigation .swiper-button-prev.swiper-button-disabled, .wpmozo-bna-logo-slider-wrap:hover .wpmozo-bna-logo-slider-navigation .swiper-button-next.swiper-button-disabled',
            additional:  `opacity: 0.35;`,
        });
        /* Outside Slider */
        allInline.push({
            selector:     '.wpmozo-bna-arrows-outside .swiper-button-prev',
            additional:  `left: 50px;`,
        });
        allInline.push({
            selector:     '.wpmozo-bna-arrows-outside .swiper-button-next',
            additional:  `right: 50px;`,
        });
        allInline.push({
            selector:     '.wpmozo-bna-logo-slider-wrap:hover .wpmozo-bna-arrows-outside .swiper-button-prev',
            additional:  `left: 0;`,
        });
        allInline.push({
            selector:     '.wpmozo-bna-logo-slider-wrap:hover .wpmozo-bna-arrows-outside .swiper-button-next',
            additional:  `right: 0;`,
        });
        /* Inside Slider */
        allInline.push({
            selector:     '.wpmozo-bna-arrows-inside .swiper-button-prev',
            additional:  `left: -50px;`,
        });
        allInline.push({
            selector:     '.wpmozo-bna-arrows-inside .swiper-button-next',
            additional:  `right: -50px;`,
        });
        allInline.push({
            selector:     '.wpmozo-bna-logo-slider-wrap:hover .wpmozo-bna-arrows-inside .swiper-button-prev',
            additional:  `left: 0;`,
        });
        allInline.push({
            selector:     '.wpmozo-bna-logo-slider-wrap:hover .wpmozo-bna-arrows-inside .swiper-button-next',
            additional:  `right: 0;`,
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

    if ( ! wpmozoCoreFun.wpmozo_is_empty( attributes.containerbackground ) ) {
        css += `
            ${parent} {
                background: ${attributes.containerbackground};
            }
        `;
    }

	return (
		<style className="wpmozo-dynamic-style" data-id={ID} data-client-id={clientId}>{css}</style>
	);

}

export default Style;