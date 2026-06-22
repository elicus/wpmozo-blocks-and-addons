// deprecated/version-2.js
import { useBlockProps, useInnerBlocksProps } from "@wordpress/block-editor";
import { wpmozo_is_empty } from "../../../common/utils";
import generateDynamicStyle from '../style';

const V2 = {
    attributes: {
        ID: { type: "string" },
		className: { type: "string" },
		images: { type: "array" },

		logoPerSlide: { type: "string", default: "4" },
		slidesPerGroup: { type: "string", default: "1" },
		spaceBetweenSlides: { type: "number", default: 20 },
		sliderLoop: { type: "boolean", default: false },
		autoplay: { type: "boolean", default: true },
		enableLinearTransition: { type: "boolean", default: false },
		autoplaySpeed: { type: "string", default: 3000 },
		pauseOnHover: { type: "boolean", default: true },
		transitionDuration: { type: "string", default: 1000 },
		showArrow: { type: "boolean", default: true },
		previousSlideArrow: { type: "string", default: "" },
		nextSlideArrow: { type: "string", default: "" },
		showArrowOnHover: { type: "boolean", default: false },
		arrowsPosition: { type: "string", default: "inside" },
		showControlDot: { type: "boolean", default: true },
		controlDotStyle: { type: "string", default: "solid_dot" },
		enableDynamicDots: { type: "boolean", default: false },

		containerbackground: { type: "string" },
		containerpadding: { type: "object" },

		sliderArrowColor: { type: "string" },
		sliderArrowBackground: { type: "string" },
		sliderActiveDoteColor: { type: "string" },
		sliderInactiveDoteColor: { type: "string" },
		arrowFontSize: { type: "string" },
		arrowpadding: { type: "object" },

		logoWidth: { type: "number", default: 150 },
		logoHeight: { type: "number", default: 150 },

		tabletLogoPerSlide: { type: "string", default: "3" },
		tabletSlidesPerGroup: { type: "string", default: "1" },
		tabletSpaceBetweenSlides: { type: "number", default: 20 },

		mobileLogoPerSlide: { type: "string", default: "1" },
		mobileSlidesPerGroup: { type: "string", default: "1" },
		mobileSpaceBetweenSlides: { type: "number", default: 20 }
    },
    save( { attributes } ) {
        const ID = attributes.ID,
            blockProps = useBlockProps.save({ className: 'wpmozo-bna-logo-slider-main' });

        let innerBlocks = [],
            innerBlocksProps = null,
            buttonNextClass = ( ! wpmozo_is_empty( attributes.nextSlideArrow ) )
                ? `custom-swiper-button-next swiper-button-next ${attributes.nextSlideArrow}`
                : 'swiper-button-next',
            buttonPrevClass = ( ! wpmozo_is_empty( attributes.previousSlideArrow ) )
                ? `custom-swiper-button-prev swiper-button-prev ${attributes.previousSlideArrow}`
                : 'swiper-button-prev',
            paginationClass = ( attributes.enableDynamicDots ) ? ' swiper-pagination-bullets-dynamic' : '';


        if (  ! wpmozo_is_empty( attributes.images ) ) {

            attributes.images.map((logo) => {
                innerBlocks.push(
                    [
                        'wpmozo/logo-slider-item',
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
                allowedBlocks: [ 'wpmozo/logo-slider-item' ],
                template: innerBlocks,
            });

        }

        if( wpmozo_is_empty( innerBlocks ) ) {
            return null;
        }

        let autoplay = 'false';

        if ( attributes.autoplay ) {
            autoplay = 'true';
        }

        let dataAttr = {
            logoPerSlide: attributes.logoPerSlide,
            spaceBetweenSlides: attributes.spaceBetweenSlides,
            slidesPerGroup: attributes.slidesPerGroup,
            tabletLogoPerSlide: attributes.tabletLogoPerSlide,
            tabletSlidesPerGroup: attributes.tabletSlidesPerGroup,
            tabletSpaceBetweenSlides: attributes.tabletSpaceBetweenSlides,
            mobileLogoPerSlide: attributes.mobileLogoPerSlide,
            mobileSpaceBetweenSlides: attributes.mobileSpaceBetweenSlides,
            mobileSlidesPerGroup: attributes.mobileSlidesPerGroup,
            nextSlideArrow: attributes.nextSlideArrow,
            previousSlideArrow: attributes.previousSlideArrow,
            sliderLoop: attributes.sliderLoop,
            transitionDuration: attributes.transitionDuration,
            showArrow: attributes.showArrow,
            showControlDot: attributes.showControlDot,
            dynamicBullets: attributes.dynamicBullets,
            autoplay: autoplay,
            pauseOnHover: attributes.pauseOnHover,
            autoplaySpeed: attributes.autoplaySpeed,
            clientId: ID
        }

        return (
            <>
                <style>
                    {generateDynamicStyle({attributes, ID})}
                </style>
                <div {...innerBlocksProps} id={`block-${ID}`}>
                    <div className="wpmozo-bna-logo-slider-wrap" data-attr={JSON.stringify(dataAttr)}>
                        <div className="wpmozo-bna-logo-slider-inner-wrap">
                            <div className="swiper swiper-container" data-client-id={ID}>
                                <div className="swiper-wrapper">
                                    {innerBlocksProps.children}
                                </div>
                            </div>
                            {attributes.showControlDot &&
                                <div className="wpmozo-bna-logo-slider-pagination">
                                    <div
                                        className={`swiper-pagination ${attributes.controlDotStyle}${paginationClass}`}></div>
                                </div>
                            }
                            {attributes.showArrow &&
                                <>
                                    <div
                                        className={`wpmozo-bna-logo-slider-navigation wpmozo-bna-arrows-${attributes.arrowsPosition}`}>
                                        <div className={buttonNextClass}></div>
                                        <div className={buttonPrevClass}></div>
                                    </div>
                                </>
                            }
                        </div>
                    </div>
                </div>
            </>
        );
    },
};

export default V2;