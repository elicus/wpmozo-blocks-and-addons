import { __ } from "@wordpress/i18n";
import { Fragment, useEffect } from "@wordpress/element";
import {
	useBlockProps,
	MediaPlaceholder,
	useInnerBlocksProps
} from '@wordpress/block-editor';
import Inspector from './inspector';
import generateDynamicStyle from "./style";
import {wpmozo_is_empty} from "../../common/utils";
/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */

export default function Edit(props) {

	const attributes = props.attributes,
		setAttributes = props.setAttributes,
		clientId = props.clientId,
		ID = clientId,
		blockProps = useBlockProps({ className: 'wpmozo-bna-logo-slider-main' }),
		buttonNextClass = ( !wpmozo_is_empty( attributes.nextSlideArrow ) )
			? `custom-swiper-button-next swiper-button-next ${attributes.nextSlideArrow}`
			: 'swiper-button-next',
		buttonPrevClass = ( !wpmozo_is_empty( attributes.previousSlideArrow ) )
			? `custom-swiper-button-prev swiper-button-prev ${attributes.previousSlideArrow}`
			: 'swiper-button-prev';

	attributes.ID = ID;
	useEffect(() => {
		const event = new CustomEvent('propsChanged');
		window.dispatchEvent(event);
		const iframe = document.querySelector('iframe[name="editor-canvas"]');
		if (iframe?.contentWindow) {
			iframe.contentWindow.dispatchEvent(event);
		}
	}, [props]);

	let paginationClass = ( attributes.enableDynamicDots ) ? ' swiper-pagination-bullets-dynamic' : '';

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

	const innerBlocks = !wpmozo_is_empty(attributes.images)
	? attributes.images.map((logo) => [
		'wpmozo/logo-slider-item',
		{
			logo,
			lock: {
				remove: true,
				move: false,
			},
		},
	])
	: [];

	const innerBlocksProps = useInnerBlocksProps( blockProps, {
		allowedBlocks: [ 'wpmozo/logo-slider-item' ],
		template: innerBlocks,
	});

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
		<Fragment>
			{ wpmozo_is_empty( attributes.images ) &&
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
							'wpmozo-blocks-and-addons'
						),
					}}
				/>
			}
			{ ! wpmozo_is_empty( innerBlocks ) &&
				<>
					<Inspector attributes={attributes} setAttributes={setAttributes} />
					<style>
						{ generateDynamicStyle({ attributes, clientId }) }
					</style>
					<div {...blockProps} id={`block-${clientId}`}>
						<div className="wpmozo-bna-logo-slider-wrap" data-attr={JSON.stringify(dataAttr)}>
							<div className="wpmozo-bna-logo-slider-inner-wrap">
								<div className="swiper swiper-container" data-client-id={clientId}>
									<div className="swiper-wrapper">
										{innerBlocksProps.children}
									</div>
								</div>
								{attributes.showArrow &&
									<div
										className={`wpmozo-bna-logo-slider-navigation wpmozo-bna-arrows-${attributes.arrowsPosition}`}>
										<div className={buttonNextClass}></div>
										<div className={buttonPrevClass}></div>
									</div>
								}
								{attributes.showControlDot &&
									<div className="wpmozo-bna-logo-slider-pagination">
										<div
											className={`swiper-pagination ${attributes.controlDotStyle}${paginationClass}`}></div>
									</div>
								}
							</div>
						</div>
					</div>
				</>
			}
		</Fragment>
	);
}
