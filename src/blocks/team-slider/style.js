
const Style = ({attributes, ID, clientId}) => {

	const wpmozoCoreFun = window.wpmozo,
        parent = '#block-'+clientId,
        toConvertStyles = [
        'container',
        'slide',
        'image',
        'name',
        'designation',
        'description',
        'skill',
        'icon',
        'arrow'
        ],
        convertedStyle = wpmozoCoreFun.convetInlineStyleStr( toConvertStyles, attributes );

    let css = '',
    socialIconsAlignment = ( 'left' === attributes.socialIconsAlignment ) ? 'flex-start' : 'flex-end';

    if ( 'center' === attributes.socialIconsAlignment ) {
        socialIconsAlignment = 'center';
    }
    
    let allInline = [
        {
            selector: '.wpmozo-bna-team-slider-wrap',
            style: {
                'background': attributes.containerBackground,
                'text-align': attributes.textAlignment
            }
        },
        {
            selector: '.wpmozo-bna-team-slider-inner-wrap',
            additional: convertedStyle['container']
        },
        {
            selector: '.wpmozo-bna-team-member-card',
            style: {
                'background': attributes.slideBackground,
            },
            additional: convertedStyle['slide']
        },
        {
            selector: '.wpmozo-bna-team-member-image img',
            style: {
                'height': attributes.imageHeight,
            },
            additional: convertedStyle['image']
        },
        {
            selector: '.wpmozo-bna-team-member-name-text',
            style: {
                'color': attributes.nameText,
                'text-align': attributes.nameTextAlignment
            },
            additional: convertedStyle['name']
        },
        {
            selector: '.wpmozo-bna-team-member-designation-text',
            style: {
                'color': attributes.designationText,
                'text-align': attributes.designationTextAlignment
            },
            additional: convertedStyle['designation']
        },
        {
            selector: '.wpmozo-bna-team-member-short-desc',
            style: {
                'color': attributes.descriptionText,
                'text-align': attributes.descriptionTextAlignment
            },
            additional: convertedStyle['description']
        },
        {
            selector: '.wpmozo-bna-skill-name',
            style: {
                'color': attributes.skillText,
                'text-align': attributes.skillTextAlignment
            },
            additional: convertedStyle['skill']
        },
        {
            selector: '.wpmozo-bna-empty-bar',
            style: {
                'background-color': attributes.skillEmptyColor,
                'height': attributes.barHeight
            }
        },
        {
            selector: '.wpmozo-bna-filled-bar',
            style: {
                'background-color': attributes.skillFilledColor
            }
        },
        {
            selector: '.wpmozo-bna-team-social-wrapper',
            style: {
                'border-color': attributes.iconSeparatorColor,
                'border-width': attributes.separatorSize,
                'justify-content': socialIconsAlignment
            }
        },
        {
            selector: '.wpmozo-bna-team-member-social-icon',
            style: {
                'color': attributes.iconColor,
                'font-size': attributes.iconSize,
                'background-color': attributes.iconBackground
            },
            additional: convertedStyle['icon']
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

    if ( ! wpmozoCoreFun.wpmozo_is_empty( attributes.iconColor ) ) {
        allInline.push({
            selector: '.wpmozo-bna-team-instagram',
            style: {
                '-webkit-text-fill-color': 'unset !important;',
            },
        });
    }

    if ( ! wpmozoCoreFun.wpmozo_is_empty( attributes.iconBackground ) ) {
        allInline.push({
            selector: '.wpmozo-bna-team-instagram',
            style: {
                'background': 'unset',
                '-webkit-background-clip': 'unset',
                'background-clip': 'unset',
                '-webkit-text-fill-color': 'unset',
                'background-color': attributes.iconBackground+' !important'
            },
        });
    }

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
            selector:     '.wpmozo-bna-team-slider-navigation .swiper-button-prev',
            additional:  `visibility: hidden; opacity: 0; transition: all 300ms ease;`,
        });
        allInline.push({
            selector:     '.wpmozo-bna-team-slider-navigation .swiper-button-next',
            additional:  `visibility: hidden; opacity: 0; transition: all 300ms ease;`,
        });
         allInline.push({
            selector:     '.wpmozo-bna-team-slider-wrap:hover .wpmozo-bna-team-slider-navigation .swiper-button-prev, .wpmozo-bna-team-slider-wrap:hover .wpmozo-bna-team-slider-navigation .swiper-button-next',
            additional:  `visibility: visible; opacity: 1;`,
        });
        allInline.push({
            selector:     '.wpmozo-bna-team-slider-wrap:hover .wpmozo-bna-team-slider-navigation .swiper-button-prev.swiper-button-disabled, .wpmozo-bna-team-slider-wrap:hover .wpmozo-bna-team-slider-navigation .swiper-button-next.swiper-button-disabled',
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
            selector:     '.wpmozo-bna-team-slider-wrap:hover .wpmozo-bna-arrows-outside .swiper-button-prev',
            additional:  `left: 0;`,
        });
        allInline.push({
            selector:     '.wpmozo-bna-team-slider-wrap:hover .wpmozo-bna-arrows-outside .swiper-button-next',
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
            selector:     '.wpmozo-bna-team-slider-wrap:hover .wpmozo-bna-arrows-inside .swiper-button-prev',
            additional:  `left: 0;`,
        });
        allInline.push({
            selector:     '.wpmozo-bna-team-slider-wrap:hover .wpmozo-bna-arrows-inside .swiper-button-next',
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
            selector: '.wpmozo-bna-team-member-card',
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