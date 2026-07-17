import {__} from '@wordpress/i18n';
import {Fragment, useEffect, renderToString} from "@wordpress/element";
import {useBlockProps} from '@wordpress/block-editor';
import {useSelect} from '@wordpress/data';
import {Notice} from '@wordpress/components';

import Inspector from './inspector';
import generateDynamicStyle from "./style";

import Layout1 from './layouts/layout1';
import Layout2 from './layouts/layout2';
import { mergeWrapperProps } from '../../common/utils.js';

const Edit = (props) => {

	const {attributes, setAttributes, clientId} = props,
		wrapArgs = attributes?.ID && mergeWrapperProps( { 
			className: `wpmozo-team-slider${ attributes?.wrapIsHover ? ' is_hover' : '' }` ,
			style: {}
		}, attributes ),
		wrapProps = wrapArgs?.wrapprops,
		blockProps = useBlockProps(wrapProps),
		wrapStyle = wrapArgs?.wrapStyle,
		isEdit = true;
	// Ensure ID is set once (no render-time mutation).
	useEffect( () => {
		if ( attributes.ID !== clientId ) {
			setAttributes( { ID: clientId } );
		}
		const updates = {};
		if ( attributes.ID !== clientId ) {
			updates.ID = clientId;
		}

		// wrapStyle recalculate karke attribute mein store karo
		if ( attributes.ID ) {
			if ( wrapStyle && wrapStyle !== attributes.wrapStyle ) {
				updates.wrapStyle = wrapStyle;
			}
		}

		if ( Object.keys( updates ).length ) {
			setAttributes( updates );
		}
	}, [ clientId, JSON.stringify( attributes ) ] ); // eslint-disable-line react-hooks/exhaustive-deps.

	const postsNumber = parseInt(attributes.postsNumber) ?? 10;
	const postOrder = attributes.postOrder ?? 'desc';
	const postOrderBy = attributes.postOrderBy ?? 'date';
	const includesCategories = attributes.includesCategories ?? [];

	// Get the post types.
	const posts = useSelect((select) =>
			select('core').getEntityRecords('postType', 'wpmozoae-team-member', {
				per_page: postsNumber,
				order: postOrder,
				orderby: postOrderBy,
				categories: includesCategories.join(','),
				// author: 1,
				_embed: true
			}),
		[postsNumber, postOrder, postOrderBy, includesCategories.join(',')]);

	const layout = attributes.layout ?? 'layout1';

	let $postItems = [],
		$sliderArrows = '',
		$paginationDots = '';
	if (posts && posts.length > 0) {

		$postItems = posts.map((post) => {
			if ('layout2' === layout) {
				return renderToString(<Layout2 key={post.id} post={post} attributes={attributes}/>);
			}
			// default to layout1
			return renderToString(<Layout1 key={post.id} post={post} attributes={attributes}/>);
		}).join('');

		// Slider arrows.
		if (attributes.showArrows) {
			let buttonNextClass = (attributes.nextArrowIcon)
					? `custom-swiper-button-next swiper-button-next ${attributes.nextArrowIcon}`
					: 'swiper-button-next',
				buttonPrevClass = (attributes.prevArrowIcon)
					? `custom-swiper-button-prev swiper-button-prev ${attributes.prevArrowIcon}`
					: 'swiper-button-prev';

			$sliderArrows = <div
				className={`wpmozo_swiper_navigation wpmozo_arrows_${attributes.arrowsPosition}`}
				data-arrows_desktop={attributes.arrowsPosition}
			>
				<div className={buttonNextClass}></div>
				<div className={buttonPrevClass}></div>
			</div>;
		}

		// Slider control dots.
		if (attributes.showControlDot) {
			let paginationClass = '';
			if (attributes.enableDynamicDots && (
				'solid_dot' === attributes.controlDotStyle ||
				'transparent_dot' === attributes.controlDotStyle ||
				'square_dot' === attributes.controlDotStyle
			)) {
				paginationClass = (attributes.enableDynamicDots) ? ' swiper-pagination-bullets-dynamic' : ' swiper-pagination-bullets';
			}
			$paginationDots = <div className="wpmozo-bna-testimonial-slider-pagination">
				<div className={`swiper-pagination ${attributes.controlDotStyle} ${paginationClass}`}></div>
			</div>;
		}
	}

	// This need because of swiper init.
	const selectBlock = () => {
		if (wp && wp.data && wp.data.dispatch) {
			wp.data.dispatch('core/block-editor').selectBlock(clientId);
		}
	}

	useEffect(() => {
		const event = new CustomEvent('WPMozoTeamSliderPropsChanged');
		window.dispatchEvent(event);

		const iframe = document.querySelector('iframe[name="editor-canvas"]');
		if (iframe?.contentWindow) {
			iframe.contentWindow.dispatchEvent(event);
		}
	}, [props]);

	// Get attrs.
	const displayInPopup = attributes.displayInPopup ?? ["image", "designation", "social_icons", "content", "skills_bars"];

	// Equal height testimonial class.
	const equalHeightClass = (attributes.equalHeight) ? ' wpmozo_equal_team_member_height' : '';

	let autoHeight = (attributes.autoHeight) ?? 'false';
	autoHeight = (attributes.equalHeight) ? 'false' : autoHeight;

	return (
		<Fragment>
			<Inspector attributes={attributes} setAttributes={setAttributes}/>
			<style>{generateDynamicStyle({attributes, clientId, isEdit})}</style>

			<div {...blockProps} id={`block-${attributes.ID}`} onClick={selectBlock}>
				<div className={`wpmozo_swiper_wrapper ${equalHeightClass}`}
					 data-clientId={clientId}
					 data-slide_effect={attributes.slideEffect || 'slide'}
					 data-slides_per_view={attributes.slidesPerView || '1'}
					 data-slides_per_view_tablet={attributes.slidesPerViewTablet || '1'}
					 data-slides_per_view_mobile={attributes.slidesPerViewMobile || '1'}
					 data-slides_per_group={attributes.slidesPerGroup || '1'}
					 data-slides_per_group_tablet={attributes.slidesPerGroupTablet || '1'}
					 data-slides_per_group_mobile={attributes.slidesPerGroupMobile || '1'}
					 data-space_between_slides={attributes.spaceBetweenSlides || '20'}
					 data-space_between_slides_tablet={attributes.spaceBetweenSlidesTablet || '20'}
					 data-space_between_slides_mobile={attributes.spaceBetweenSlidesMobile || '20'}
					 data-coverflow_rotate={attributes.coverflowRotate || '40'}
					 data-coverflow_depth={attributes.coverflowDepth || '100'}

					 data-enable_coverflow_shadow={attributes.enableCoverflowShadow ?? 'false'}
					 data-enable_loop={attributes.enableLoop ?? 'false'}
					 data-auto_height={autoHeight ?? 'false'}
					 data-autoplay={attributes.autoplay ?? 'true'}
					 data-autoplay_delay={attributes.autoplayDelay || '3000'}
					 data-pause_on_hover={attributes.pauseOnHover ?? 'true'}
					 data-enable_linear_trans={attributes.enableLinearTrans ?? 'false'}
					 data-trans_duration={attributes.transDuration || '1000'}

					 data-show_arrows={attributes.showArrows ?? 'false'}
					 data-show_control_dot={attributes.showControlDot ?? 'false'}
					 data-control_dot_style={attributes.controlDotStyle || 'solid_dot'}
					 data-enable_dynamic_dots={attributes.enableDynamicDots ?? 'false'}
					 data-social_icons_target={attributes.socialIconTarget || 'same'}

					 data-show_designation={displayInPopup.includes('designation') ? 'on' : 'off'}
					 data-show_content={displayInPopup.includes('content') ? 'on' : 'off'}
					 data-show_skills_bars={displayInPopup.includes('skills_bars') ? 'on' : 'off'}
					 data-show_social_icons={displayInPopup.includes('social_icons') ? 'on' : 'off'}
					 data-show_image={displayInPopup.includes('image') ? 'on' : 'off'}
					 data-bar_layout={attributes.layout ?? 'layout1'}
					 data-use_stripes={attributes.popupBarUseStripe ? 'on' : 'off'}
					 data-popup_name_level={attributes.popupNameLevel ?? 'h2'}
				>
					<div className={"wpmozo_bna_team_slider_container wpmozo_swiper_inner_wrap " + layout}>
						{$postItems.length > 0 ? (
							<div className="swiper swiper-container">
								<div className="swiper-wrapper" dangerouslySetInnerHTML={{__html: $postItems}}/>
							</div>
						) : (
							<Notice status="warning" isDismissible={false}>
								{__("No team members found. Please add some team members.", "wpmozo-blocks-and-addons")}
							</Notice>
						)}
						{$sliderArrows}
						{$paginationDots}
					</div>
				</div>
			</div>
		</Fragment>
	);
}

export default Edit;
