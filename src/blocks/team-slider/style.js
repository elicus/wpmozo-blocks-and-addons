
const Style = ({attributes, ID, clientId}) => {

	const wpmozoCoreFun = window.wpmozo,
        parent = '#block-'+clientId,
        toConvertStyles = [
        'container',
        'slide'
        ],
        convertedStyle = wpmozoCoreFun.convetInlineStyleStr( toConvertStyles, attributes );

    let css = '';
    
    let allInline = [
        {
            selector: '.wpmozo-adfgu-team-slider-wrap',
            style: {
                'background': attributes.containerBackground,
                'text-align': attributes.textAlignment
            }
        },
        {
            selector: '.wpmozo-adfgu-team-slider-wrap .swiper-container',
            additional: convertedStyle['container']
        },
        {
            selector: '.wpmozo-adfgu-team-member-card',
            style: {
                'background': attributes.slideBackground,
            },
            additional: convertedStyle['slide']
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
            selector:     '.wpmozo-adfgu-team-slider-navigation .swiper-button-prev',
            additional:  `visibility: hidden; opacity: 0; transition: all 300ms ease;`,
        });
        allInline.push({
            selector:     '.wpmozo-adfgu-team-slider-navigation .swiper-button-next',
            additional:  `visibility: hidden; opacity: 0; transition: all 300ms ease;`,
        });
         allInline.push({
            selector:     '.wpmozo-adfgu-team-slider-wrap:hover .wpmozo-adfgu-team-slider-navigation .swiper-button-prev, .wpmozo-adfgu-team-slider-wrap:hover .wpmozo-adfgu-team-slider-navigation .swiper-button-next',
            additional:  `visibility: visible; opacity: 1;`,
        });
        allInline.push({
            selector:     '.wpmozo-adfgu-team-slider-wrap:hover .wpmozo-adfgu-team-slider-navigation .swiper-button-prev.swiper-button-disabled, .wpmozo-adfgu-team-slider-wrap:hover .wpmozo-adfgu-team-slider-navigation .swiper-button-next.swiper-button-disabled',
            additional:  `opacity: 0.35;`,
        });
        /* Outside Slider */
        allInline.push({
            selector:     '.wpmozo-adfgu-arrows-outside .swiper-button-prev',
            additional:  `left: 50px;`,
        });
        allInline.push({
            selector:     '.wpmozo-adfgu-arrows-outside .swiper-button-next',
            additional:  `right: 50px;`,
        });
        allInline.push({
            selector:     '.wpmozo-adfgu-team-slider-wrap:hover .wpmozo-adfgu-arrows-outside .swiper-button-prev',
            additional:  `left: 0;`,
        });
        allInline.push({
            selector:     '.wpmozo-adfgu-team-slider-wrap:hover .wpmozo-adfgu-arrows-outside .swiper-button-next',
            additional:  `right: 0;`,
        });
        /* Inside Slider */
        allInline.push({
            selector:     '.wpmozo-adfgu-arrows-inside .swiper-button-prev',
            additional:  `left: -50px;`,
        });
        allInline.push({
            selector:     '.wpmozo-adfgu-arrows-inside .swiper-button-next',
            additional:  `right: -50px;`,
        });
        allInline.push({
            selector:     '.wpmozo-adfgu-team-slider-wrap:hover .wpmozo-adfgu-arrows-inside .swiper-button-prev',
            additional:  `left: 0;`,
        });
        allInline.push({
            selector:     '.wpmozo-adfgu-team-slider-wrap:hover .wpmozo-adfgu-arrows-inside .swiper-button-next',
            additional:  `right: 0;`,
        });
    }

    if ( 'on' === attributes.equalizeHeight ) {
        allInline.push({
            selector: '.swiper-wrapper',
            style: { 
                'align-items': 'stretch'
            }
        });
        allInline.push({
            selector: '.swiper-slide',
            style: { 
                'height': 'auto'
            }
        });
        allInline.push({
            selector: '.wpmozo-adfgu-team-member-card',
            style: { 
                'height': '100%'
            }
        });
    }else{
        if ( 1 === attributes.memberPerSlide ) {
            allInline.push({
                selector: '.swiper-wrapper',
                style: { 
                    'align-items': 'center'
                }
            });
        }
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