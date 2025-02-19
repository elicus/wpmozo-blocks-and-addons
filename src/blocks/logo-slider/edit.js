
import Inspector from "./inspector";
import Style from "./style";

import { __ } from "@wordpress/i18n";
import { Fragment } from "@wordpress/element";
import {
    useBlockProps,
    MediaPlaceholder,
    MediaUpload,
    MediaUploadCheck,
    BlockControls,
    InnerBlocks,
    useInnerBlocksProps
} from '@wordpress/block-editor';

import { useRef, useEffect } from 'react';

const Edit = (props) => {

    const wpmozoCoreFun = window.wpmozo,
    attributes = props.attributes,
    setAttributes = props.setAttributes,
    clientId = props.clientId,
    ID = wpmozoCoreFun.getIdByClientid( clientId ),
    blockProps = useBlockProps({ className: 'wpmozo-adfgu-logo-slider-main' }),
    swiperElRef = useRef(null),
    buttonNextClass = ( ! wpmozoCoreFun.wpmozo_is_empty( attributes.nextSlideArrow ) ) 
            ? `custom-swiper-button-next swiper-button-next ${attributes.nextSlideArrow}`
            : 'swiper-button-next',
    buttonPrevClass = ( ! wpmozoCoreFun.wpmozo_is_empty( attributes.previousSlideArrow ) ) 
            ? `custom-swiper-button-prev swiper-button-prev ${attributes.previousSlideArrow}`
            : 'swiper-button-prev',
    paginationClass = ( attributes.enableDynamicDots ) ? ' swiper-pagination-bullets-dynamic' : '';

    attributes.ID = ID;

    let innerBlocks = [],
    swiperInstance = null;

    if (  ! wpmozoCoreFun.wpmozo_is_empty( attributes.images ) ) {
        attributes.images.map((logo) => {
            innerBlocks.push(
                [ 
                    'wpmozo/logo-slide', 
                    {
                        logo: logo,
                        lock: { 
                            remove: true 
                        }
                    },
                ]
            )
        });
    }

    const innerBlocksProps = useInnerBlocksProps( blockProps, {
        allowedBlocks: [ 'wpmozo/logo-slide' ],
        template: innerBlocks,
    });

    const initSwiper = ( attributes ) => {

        let productsPerSlide = parseInt( attributes.logoPerSlide ),
        spaceBetweenSlides = parseInt( attributes.spaceBetweenSlides ),
        slidesPerGroup = parseInt( attributes.slidesPerGroup ),
        tabletLogoPerSlide = parseInt( attributes.tabletLogoPerSlide ),
        tabletSlidesPerGroup = parseInt( attributes.tabletSlidesPerGroup ),
        tabletSpaceBetweenSlides = parseInt( attributes.tabletSpaceBetweenSlides ),
        mobileLogoPerSlide = parseInt( attributes.mobileLogoPerSlide ),
        mobileSpaceBetweenSlides = parseInt( attributes.mobileSpaceBetweenSlides ),
        mobileSlidesPerGroup = parseInt( attributes.mobileSlidesPerGroup ),
        buttonNextClass = ( ! wpmozoCoreFun.wpmozo_is_empty( attributes.nextSlideArrow ) ) 
            ? '.custom-swiper-button-next'
            : '.swiper-button-next',
        buttonPrevClass = ( ! wpmozoCoreFun.wpmozo_is_empty( attributes.previousSlideArrow ) ) 
            ? '.custom-swiper-button-prev'
            : '.swiper-button-prev';

        let loop =  attributes.sliderLoop,
            speed = attributes.transitionDuration,
            arrows = false,
            dots = false,
            autoplaySlides = false,
            slidesPerGroupSkip = 0;

        if ( productsPerSlide > slidesPerGroup && 1 !== slidesPerGroup ) {
            slidesPerGroupSkip = productsPerSlide - slidesPerGroup;
        }

        if ( attributes.showArrow ) {
            arrows = {
                nextEl: buttonNextClass,
                prevEl: buttonPrevClass
            };
        }

        if ( attributes.showControlDot ) {
            const dynamicBullets = false;
            dots = {
                el: '.swiper-pagination',
                dynamicBullets: attributes.dynamicBullets,
                clickable: true
            };
        }

        if ( attributes.autoplay ) {
            if ( attributes.pauseOnHover ) {
                autoplaySlides = {
                    delay: attributes.autoplaySpeed,
                    disableOnInteraction: true,
                }
            }else{
                autoplaySlides = {
                    delay: attributes.autoplaySpeed,
                    disableOnInteraction: false,
                }
            }
        }

        let options = {
            slidesPerView: productsPerSlide,
            spaceBetween: slidesPerGroup,
            slidesPerGroup: slidesPerGroup,
            autoplay: autoplaySlides,
            loop: loop,
            speed: speed,
            pagination: dots,
            navigation: arrows,
            grabCursor: true,
            observer: true,
            observeParents: true,
            breakpoints: {
                981: {
                    slidesPerView: productsPerSlide,
                    spaceBetween: spaceBetweenSlides,
                    slidesPerGroup: slidesPerGroup,
                },
                768: {
                    slidesPerView: tabletLogoPerSlide,
                    spaceBetween: tabletSlidesPerGroup,
                    slidesPerGroup: tabletSpaceBetweenSlides,
                },
                0: {
                    slidesPerView: mobileLogoPerSlide,
                    spaceBetween: mobileSpaceBetweenSlides,
                    slidesPerGroup: mobileSlidesPerGroup
                }
            },
        };

        const swiper = new Swiper('.swiper[data-client-id="'+clientId+'"]', options );

        return swiper;
    }

    useEffect(() => {
        if ( ! wpmozoCoreFun.wpmozo_is_empty( innerBlocks ) && ! jQuery('.swiper[data-client-id="'+clientId+'"]').hasClass('swiper-initialized') ) {
            swiperInstance = initSwiper( attributes );
        }
    });

    useEffect(() => {

        let el = jQuery( '.swiper[data-client-id="'+clientId+'"]' )[0],
            swiperInstance = ( el.hasOwnProperty( 'swiper' ) ) ? el.swiper : null;
        if ( ! wpmozoCoreFun.wpmozo_is_empty( innerBlocks ) && ! wpmozoCoreFun.wpmozo_is_empty( swiperInstance ) ) {
            swiperInstance.destroy(true, true);
            initSwiper( attributes );
        }

    }, [
        attributes.logoPerSlide,
        attributes.spaceBetweenSlides,
        attributes.slidesPerGroup,
        attributes.tabletLogoPerSlide,
        attributes.tabletSlidesPerGroup,
        attributes.tabletSpaceBetweenSlides,
        attributes.mobileLogoPerSlide,
        attributes.mobileSpaceBetweenSlides,
        attributes.mobileSlidesPerGroup,
        attributes.nextSlideArrow,
        attributes.previousSlideArrow,
        attributes.sliderLoop,
        attributes.showArrow,
        attributes.showControlDot,
        attributes.dynamicBullets,
        attributes.autoplay,
        attributes.autoplaySpeed,
        attributes.transitionDuration
    ]);

	return (
        <Fragment>
        { wpmozoCoreFun.wpmozo_is_empty( attributes.images ) &&
           <MediaPlaceholder
                multiple={true}
                onSelect={(media) =>
                    setAttributes({
                        images: media,
                    })
                }
                onFilesPreUpload={(media) =>
                    setAttributes({
                        images: media,
                    })
                }
                onSelectURL={false}
                allowedTypes={['image']}
                labels={{
                    title: __(
                        'Add Logos',
                        'wpmozo-addons-lite-for-gutenberg'
                    ),
                }}
            />
        }
            <Inspector {...props} />
            <div { ...blockProps } id={`block-${clientId}`}>
                <Style 
                    attributes={attributes} 
                    ID={ID}
                    clientId={clientId}  
                />
                <div className="wpmozo-adfgu-logo-slider-inner-wrap">
                    <div className="swiper swiper-container" ref={swiperElRef} data-client-id={clientId}>
                        <div className="swiper-wrapper">
                            { ! wpmozoCoreFun.wpmozo_is_empty( innerBlocks ) &&
                                innerBlocksProps.children
                            }
                        </div>
                        { attributes.showControlDot &&
                            <div className="wpmozo-adfgu-logo-slider-pagination">
                                <div className={`swiper-pagination ${attributes.controlDotStyle}${paginationClass}`}></div>
                            </div>
                        }
                        { attributes.showArrow && 
                            <>
                                <div className={`wpmozo-adfgu-logo-slider-navigation wpmozo-adfgu-arrows-${attributes.arrowsPosition}`}>
                                    <div className={buttonPrevClass}></div>
                                    <div className={buttonNextClass}></div>
                                </div>
                            </>
                        }
                    </div>
                </div>
            </div>
        </Fragment>
    );

};

export default Edit;