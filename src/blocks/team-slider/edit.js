
import Inspector from "./inspector";
import Style from "./style";

import { __ } from "@wordpress/i18n";
import { Fragment } from "@wordpress/element";
import {
    useBlockProps
} from '@wordpress/block-editor';

import { useEffect } from '@wordpress/element';
import { dispatch } from "@wordpress/data";
import ServerSideRender from '@wordpress/server-side-render';
import { Spinner } from '@wordpress/components';

const initSwiper = ( attributes ) => {

    let wpmozoCoreFun = window.wpmozo,
    clientId = attributes.clientId,
    teamPerSlide = parseInt( attributes.memberPerSlide ),
    spaceBetweenSlides = parseInt( attributes.spaceBetweenSlides ),
    slidesPerGroup = parseInt( attributes.slidesPerGroup ),
    tabletTeamPerSlide = parseInt( attributes.tabletTeamPerSlide ),
    tabletSlidesPerGroup = parseInt( attributes.tabletSlidesPerGroup ),
    tabletSpaceBetweenSlides = parseInt( attributes.tabletSpaceBetweenSlides ),
    mobileTeamPerSlide = parseInt( attributes.mobileTeamPerSlide ),
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

    if ( teamPerSlide > slidesPerGroup && 1 !== slidesPerGroup ) {
        slidesPerGroupSkip = teamPerSlide - slidesPerGroup;
    }

    if ( attributes.showArrow ) {
        arrows = {
            nextEl: '#block-'+clientId+' '+buttonNextClass,
            prevEl: '#block-'+clientId+' '+buttonPrevClass
        };
    }

    if ( attributes.showControlDot ) {
        dots = {
            el: '#block-'+clientId+' .swiper-pagination',
            dynamicBullets: attributes.enableDynamicDots,
            clickable: true,
        };
    }

    if ( attributes.autoplay ) {
        if ( attributes.pauseOnHover ) {
            autoplaySlides = {
                delay: attributes.autoplaySpeed,
                disableOnInteraction: true,
                pauseOnMouseEnter: true,
            }
        }else{
            autoplaySlides = {
                delay: attributes.autoplaySpeed,
                disableOnInteraction: false,
                pauseOnMouseEnter: false
            }
        }
    }

    let options = {
        slidesPerView: teamPerSlide,
        spaceBetween: spaceBetweenSlides, 
        slidesPerGroup: slidesPerGroup,
        on: {
            tap: function(swiper, event){
                dispatch( 'core/block-editor' ).selectBlock( clientId );
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
                slidesPerView: teamPerSlide,
                spaceBetween: spaceBetweenSlides,
                slidesPerGroup: slidesPerGroup,
            },
            768: {
                slidesPerView: tabletTeamPerSlide,
                spaceBetween: tabletSpaceBetweenSlides,
                slidesPerGroup: tabletSlidesPerGroup,
            },
            0: {
                slidesPerView: mobileTeamPerSlide,
                spaceBetween: mobileSpaceBetweenSlides,
                slidesPerGroup: mobileSlidesPerGroup
            }
        },
    };

    const swiper = new Swiper('.swiper[data-client-id="'+clientId+'"]', options );

    // jQuery(document).on("mouseenter", '.swiper[data-client-id="'+clientId+'"]', function(e) {

    //     let swiperContainer = jQuery(this)[0],
    //     swiper = ( swiperContainer.hasOwnProperty( 'swiper' ) ) ? swiperContainer.swiper : null;

    //     if ( swiper.params.autoplay.disableOnInteraction && typeof swiper.autoplay.stop === "function" ) {
    //         swiper.autoplay.stop();
    //     }

    // });

    // jQuery(document).on("mouseleave", '.swiper[data-client-id="'+clientId+'"]', function(e) {

    //     let swiperContainer = jQuery(this)[0],
    //     swiper = ( swiperContainer.hasOwnProperty( 'swiper' ) ) ? swiperContainer.swiper : null;

    //     if ( swiper.params.autoplay.disableOnInteraction && typeof swiper.autoplay.start === "function" ) {
    //         swiper.autoplay.start();
    //     }
      
    // });

    return swiper;
}

const SwiperLoader = (args) => {

    let attributes = args.attributes,
        clientId = attributes.clientId;

    useEffect(() => {
        return () => {
            if ( 
                jQuery('.swiper[data-client-id="'+clientId+'"]').length > 0
            ) {
                initSwiper( attributes );
            }
        };
    });

    return (
        <Fragment>
            <div style={{ position: 'relative' }}>
                <div style={{ position: 'absolute', top: '50%', left: '50%', marginTop: '-9px', marginLeft: '-9px' }}>
                    <Spinner />
                </div>
                <div style={{ opacity: 0.3 }}></div>
            </div>
        </Fragment>
    );

}

const Edit = ( props ) => {

    let wpmozoCoreFun = window.wpmozo,
        attributes = props.attributes,
        clientId = props.clientId,
        ID = wpmozoCoreFun.getIdByClientid( clientId ),
        blockProps = useBlockProps({ className: 'wpmozo-adfgu-team-slider-main' });

    attributes.ID       = ID;
    attributes.clientId = clientId;

    return (
        <Fragment>
            <Inspector {...props} />
            <div { ...blockProps }>
                <ServerSideRender
                    block="wpmozo/team-slider"
                    attributes={ attributes }
                    httpMethod="POST"
                    LoadingResponsePlaceholder={SwiperLoader}
                    EmptyResponsePlaceholder={SwiperLoader}
                />
            </div>
        </Fragment>
    );

};

export default Edit;