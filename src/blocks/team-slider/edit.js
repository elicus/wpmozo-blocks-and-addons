
import Inspector from "./inspector";
import Style from "./style";

import { __ } from "@wordpress/i18n";
import { Fragment } from "@wordpress/element";
import {
    useBlockProps,
    MediaPlaceholder,
    useInnerBlocksProps
} from '@wordpress/block-editor';

import { useEffect } from 'react';
import { dispatch } from "@wordpress/data";

const Edit = (props) => {

    const wpmozoCoreFun = window.wpmozo,
    attributes = props.attributes,
    setAttributes = props.setAttributes,
    clientId = props.clientId,
    ID = wpmozoCoreFun.getIdByClientid( clientId ),
    blockProps = useBlockProps({ className: 'wpmozo-adfgu-team-slider-main' }),
    buttonNextClass = ( ! wpmozoCoreFun.wpmozo_is_empty( attributes.nextSlideArrow ) ) 
            ? `custom-swiper-button-next swiper-button-next ${attributes.nextSlideArrow}`
            : 'swiper-button-next',
    buttonPrevClass = ( ! wpmozoCoreFun.wpmozo_is_empty( attributes.previousSlideArrow ) ) 
            ? `custom-swiper-button-prev swiper-button-prev ${attributes.previousSlideArrow}`
            : 'swiper-button-prev';

    attributes.ID = ID;

    let innerBlocks = [],
    swiperInstance = null,
    paginationClass = ( attributes.enableDynamicDots ) ? ' swiper-pagination-bullets-dynamic' : '';

    if ( 
        attributes.enableDynamicDots &&
        ( 
            'stretched_dot' === attributes.controlDotStyle || 
            'line' === attributes.controlDotStyle ||
            'rounded_line' === attributes.controlDotStyle
        )
    ) {
        paginationClass = '';
    }

    if (  ! wpmozoCoreFun.wpmozo_is_empty( attributes.images ) ) {
        attributes.images.map((logo) => {
            innerBlocks.push(
                [ 
                    'wpmozo/logo-slide', 
                    {
                        logo: logo,
                        lock: { 
                            remove: true,
                            move: false
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

    const initSwiper = ( attributes, props ) => {

        let productsPerSlide = parseInt( attributes.memberPerSlide ),
        spaceBetweenSlides = parseInt( attributes.spaceBetweenSlides ),
        slidesPerGroup = parseInt( attributes.slidesPerGroup ),
        tabletMemberPerSlide = parseInt( attributes.tabletMemberPerSlide ),
        tabletSlidesPerGroup = parseInt( attributes.tabletSlidesPerGroup ),
        tabletSpaceBetweenSlides = parseInt( attributes.tabletSpaceBetweenSlides ),
        mobileMemberPerSlide = parseInt( attributes.mobileMemberPerSlide ),
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
                nextEl: '#block-'+props.clientId+' '+buttonNextClass,
                prevEl: '#block-'+props.clientId+' '+buttonPrevClass
            };
        }

        if ( attributes.showControlDot ) {
            dots = {
                el: '#block-'+props.clientId+' .swiper-pagination',
                dynamicBullets: attributes.enableDynamicDots,
                clickable: true,
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
            on: {
                tap: function(swiper, event){
                    dispatch( 'core/block-editor' ).selectBlock( props.clientId );
                }
            },
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
                    slidesPerView: tabletMemberPerSlide,
                    spaceBetween: tabletSpaceBetweenSlides,
                    slidesPerGroup: tabletSlidesPerGroup,
                },
                0: {
                    slidesPerView: mobileMemberPerSlide,
                    spaceBetween: mobileSpaceBetweenSlides,
                    slidesPerGroup: mobileSlidesPerGroup
                }
            },
        };

        const swiper = new Swiper('.swiper[data-client-id="'+props.clientId+'"]', options );

        return swiper;
    }

    useEffect(() => {
        if ( ! wpmozoCoreFun.wpmozo_is_empty( innerBlocks ) && ! jQuery('.swiper[data-client-id="'+clientId+'"]').hasClass('swiper-initialized') ) {
            swiperInstance = initSwiper( attributes, props );
        }
    });

    useEffect(() => {

        if ( ! wpmozoCoreFun.wpmozo_is_empty( innerBlocks ) ) {

            let el = jQuery( '.swiper[data-client-id="'+clientId+'"]' )[0],
                swiperInstance = ( el.hasOwnProperty( 'swiper' ) ) ? el.swiper : null;
            if ( ! wpmozoCoreFun.wpmozo_is_empty( swiperInstance ) ) {
                swiperInstance.destroy(true, true);
                initSwiper( attributes, props );
            }

        }

    }, [
        attributes.memberPerSlide,
        attributes.spaceBetweenSlides,
        attributes.slidesPerGroup,
        attributes.tabletMemberPerSlide,
        attributes.tabletSlidesPerGroup,
        attributes.tabletSpaceBetweenSlides,
        attributes.mobileMemberPerSlide,
        attributes.mobileSpaceBetweenSlides,
        attributes.mobileSlidesPerGroup,
        attributes.nextSlideArrow,
        attributes.previousSlideArrow,
        attributes.sliderLoop,
        attributes.showArrow,
        attributes.showControlDot,
        attributes.enableDynamicDots,
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
                    allowedTypes={['-','image']}
                    labels={{
                        title: __(
                            'Add Logos',
                            'wpmozo-addons-lite-for-gutenberg'
                        ),
                    }}
                />
            }
            { ! wpmozoCoreFun.wpmozo_is_empty( innerBlocks ) &&
                <>
                    <Inspector {...props} />
                    <div { ...blockProps } id={`block-${clientId}`}>
                        <Style 
                            attributes={attributes} 
                            ID={ID}
                            clientId={clientId}  
                        />
                        <div className="wpmozo-adfgu-team-slider-wrap">
                            <div className="wpmozo-adfgu-team-slider-inner-wrap">
                                <div className="swiper swiper-container" data-client-id={clientId}>
                                    <div className="swiper-wrapper">
                                        { innerBlocksProps.children }
                                    </div>
                                </div>
                                { attributes.showArrow && 
                                    <>
                                        <div className={`wpmozo-adfgu-team-slider-navigation wpmozo-adfgu-arrows-${attributes.arrowsPosition}`}>
                                            <div className={buttonNextClass}></div>
                                            <div className={buttonPrevClass}></div>
                                        </div>
                                    </>
                                }
                                { attributes.showControlDot &&
                                    <>
                                        <div className="wpmozo-adfgu-team-slider-pagination">
                                            <div className={`swiper-pagination ${attributes.controlDotStyle}${paginationClass}`}></div>
                                        </div>
                                    </>
                                }
                            </div>
                        </div>
                    </div>
                </>
            }
        </Fragment>
    );

};

export default Edit;