
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
    ID = window.wpmozo.getIdByClientid( clientId ),
    blockProps = useBlockProps({ className: 'wpmozo-adfgu-logo-slider-main' }),
    swiperElRef = useRef(null);

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
        autoHeightSlider = false;

        let loop =  false,
            arrows = false,
            dots = false,
            autoplaySlides = false,
            cube = false,
            coverflow = false,
            fade = false,
            slidesPerGroupSkip = 0,
            slidesPerGroupIpad = 1,
            slidesPerGroupMobile = 1,
            slidesPerGroupSkipIpad = 0,
            slidesPerGroupSkipMobile = 0;

        if ( productsPerSlide > slidesPerGroup && 1 !== slidesPerGroup ) {
            slidesPerGroupSkip = productsPerSlide - slidesPerGroup;
        }

        //if ('on' === showArrow) {
            arrows = {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            };
        //}

        //if ('on' === showControlDot) {
            const dynamicBullets = false;
            dots = {
                el: '.swiper-pagination',
                dynamicBullets: dynamicBullets,
                clickable: true
            };
        //}

        let options = {
            slidesPerView: productsPerSlide,
            spaceBetween: spaceBetweenSlides,
            slidesPerGroup: slidesPerGroup,
            cubeEffect: cube,
            coverflowEffect: coverflow,
            fadeEffect: fade,
            loop: loop,
            autoHeight: autoHeightSlider,
            pagination: dots,
            navigation: arrows,
            grabCursor   : true,
            observer: true,
            observeParents: true,
            breakpoints: {
                981: {
                    slidesPerView: productsPerSlide,
                    spaceBetween: spaceBetweenSlides,
                    slidesPerGroup: slidesPerGroup,
                },
                768: {
                    slidesPerView: productsPerSlide,
                    spaceBetween: spaceBetweenSlides,
                    slidesPerGroup: slidesPerGroup,
                    slidesPerGroupSkip: slidesPerGroupSkip,
                },
                0: {
                    slidesPerView: productsPerSlide,
                    spaceBetween: spaceBetweenSlides,
                    slidesPerGroup: slidesPerGroup,
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
        attributes.logoPerSlide
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
                <div className="swiper" ref={swiperElRef} data-client-id={clientId}>
                    <div className="swiper-wrapper">
                        { ! wpmozoCoreFun.wpmozo_is_empty( innerBlocks ) &&
                            innerBlocksProps.children
                        }
                    </div>
                    <div className="swiper-pagination"></div>
                    <div className="swiper-button-prev"></div>
                    <div className="swiper-button-next"></div>
                </div>
            </div>
        </Fragment>
    );

};

export default Edit;