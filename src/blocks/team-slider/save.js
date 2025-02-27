
import { useBlockProps, useInnerBlocksProps } from "@wordpress/block-editor";

    const Save = ({ attributes }) => {

        const wpmozoCoreFun = window.wpmozo,
            ID = attributes.ID,
            blockProps = useBlockProps.save({ className: 'wpmozo-adfgu-team-slider-main' });

        let innerBlocks = [],
            innerBlocksProps = null,
            buttonNextClass = ( ! wpmozoCoreFun.wpmozo_is_empty( attributes.nextSlideArrow ) ) 
                ? `custom-swiper-button-next swiper-button-next ${attributes.nextSlideArrow}`
                : 'swiper-button-next',
            buttonPrevClass = ( ! wpmozoCoreFun.wpmozo_is_empty( attributes.previousSlideArrow ) ) 
                ? `custom-swiper-button-prev swiper-button-prev ${attributes.previousSlideArrow}`
                : 'swiper-button-prev',
            paginationClass = ( attributes.enableDynamicDots ) ? ' swiper-pagination-bullets-dynamic' : '';

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

            innerBlocksProps = useInnerBlocksProps.save( blockProps, {
                allowedBlocks: [ 'wpmozo/logo-slide' ],
                template: innerBlocks,
            });

        }

        if( wpmozoCoreFun.wpmozo_is_empty( innerBlocks ) ) {
            return null;
        }

        let dataAttr = {
            memberPerSlide: attributes.memberPerSlide,
            spaceBetweenSlides: attributes.spaceBetweenSlides,
            slidesPerGroup: attributes.slidesPerGroup,
            tabletMemberPerSlide: attributes.tabletMemberPerSlide,
            tabletSlidesPerGroup: attributes.tabletSlidesPerGroup,
            tabletSpaceBetweenSlides: attributes.tabletSpaceBetweenSlides,
            mobileMemberPerSlide: attributes.mobileMemberPerSlide,
            mobileSpaceBetweenSlides: attributes.mobileSpaceBetweenSlides,
            mobileSlidesPerGroup: attributes.mobileSlidesPerGroup,
            nextSlideArrow: attributes.nextSlideArrow,
            previousSlideArrow: attributes.previousSlideArrow,
            sliderLoop: attributes.sliderLoop,
            transitionDuration: attributes.transitionDuration,
            showArrow: attributes.showArrow,
            showControlDot: attributes.showControlDot,
            dynamicBullets: attributes.dynamicBullets,
            autoplay: attributes.autoplay,
            pauseOnHover: attributes.pauseOnHover,
            autoplaySpeed: attributes.autoplaySpeed
        }

        return (
            <div { ...innerBlocksProps } id={`block-${ID}`}>
                <div className="wpmozo-adfgu-team-slider-wrap" data-attr={JSON.stringify(dataAttr)}>
                    <div className="wpmozo-adfgu-team-slider-inner-wrap">
                        <div className="swiper swiper-container">
                            <div className="swiper-wrapper">
                                { innerBlocksProps.children }
                            </div>
                        </div>
                        { attributes.showControlDot &&
                            <div className="wpmozo-adfgu-team-slider-pagination">
                                <div className={`swiper-pagination ${attributes.controlDotStyle}${paginationClass}`}></div>
                            </div>
                        }
                        { attributes.showArrow && 
                            <>
                                <div className={`wpmozo-adfgu-team-slider-navigation wpmozo-adfgu-arrows-${attributes.arrowsPosition}`}>
                                    <div className={buttonNextClass}></div>
                                    <div className={buttonPrevClass}></div>
                                </div>
                            </>
                        }
                    </div>
                </div>
            </div>
        );

    };

export default Save;