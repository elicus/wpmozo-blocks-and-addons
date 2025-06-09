import { useBlockProps, useInnerBlocksProps } from "@wordpress/block-editor";
import { wpmozo_is_empty } from "../../common/utils";
import generateDynamicStyle from './style';

export default function save({ attributes }) {

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
}
