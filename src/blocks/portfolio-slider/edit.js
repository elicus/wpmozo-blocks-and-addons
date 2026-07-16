// edit.js
import { __ } from '@wordpress/i18n';
import { Fragment, useEffect } from "@wordpress/element";
import { useBlockProps } from '@wordpress/block-editor';
import { useSelect } from '@wordpress/data';
import Inspector from './inspector';

import { wpmozo_is_empty } from "../../common/utils";
import generateDynamicStyle from "./style";

import {
	renderPortfolioLayoutOne,
	renderPortfolioLayoutTwo
} from './layouts';

const Edit = (props) => {

	const attributes    = props.attributes;
	const setAttributes = props.setAttributes;
	const clientId      = props.clientId;

	useEffect( () => {
		if ( attributes.ID !== clientId ) {
			setAttributes( { ID: clientId } );
		}
	}, [ clientId, attributes.ID ] );

	const postsToShow        = parseInt( attributes.postsToShow ) ?? 5;
	const offsetNumber       = parseInt( attributes.offsetNumber ) ?? 0;
	const postOrder          = attributes.postOrder ?? 'DESC';
	const postOrderBy        = attributes.postOrderBy ?? 'date';
	const includesCategories = attributes.includesCategories ?? [];

	// Get the portfolios.
	const posts = useSelect( (select) => {
		const queryArgs = {
			per_page: postsToShow,
			order: postOrder,
			orderby: postOrderBy,
			_embed: true
		};
		if ( offsetNumber > 0 ) {
			queryArgs.offset = offsetNumber;
		}
		if ( includesCategories.length > 0 ) {
			queryArgs['wpmozo-ae-portfolio-category'] = includesCategories;
		}
		return select( 'core' ).getEntityRecords( 'postType', 'wpmozoae-portfolio', queryArgs );
	}, [ postsToShow, offsetNumber, postOrder, postOrderBy, includesCategories ] );

	// Get taxonomy terms for mapping names.
	const terms = useSelect( (select) =>
		select( 'core' ).getEntityRecords( 'taxonomy', 'wpmozo-ae-portfolio-category', {
			per_page: -1,
		} ),
	[] );

	const layout = attributes.layout ?? 'layout1';

	// Get slides.
	let $slides         = [],
		$sliderArrows   = '',
		$paginationDots = '';

	if ( posts && posts.length > 0 ) {
		posts.map( ( post ) => {
			// Display options.
			const showTitle          = attributes.showTitle ?? true;
			const showContent        = attributes.showContent ?? false;
			const showFeaturedImage = attributes.showFeaturedImage ?? true;
			const showExcerpt        = attributes.showExcerpt ?? true;
			const excerptLength      = attributes.excerptLength ?? 120;
			const showReadMore      = attributes.showReadMore ?? false;
			const readMoreText      = attributes.readMoreText ?? 'Read more';
			const showProjectUrl    = attributes.showProjectUrl ?? false;
			const projectUrlText    = attributes.projectUrlText ?? 'View live';

			// Content processing.
			let portfolioContent = '';
			if ( showContent ) {
				const contentText = post.content?.rendered || '';
				if ( contentText ) {
					portfolioContent = (
						<div 
							className="wpmozo_portfolio_slider_content"
							dangerouslySetInnerHTML={ { __html: contentText } }
						/>
					);
				}
			}

			// Excerpt processing.
			let portfolioExcerpt = '';
			if ( showExcerpt ) {
				const rawContent = post.excerpt?.rendered || post.content?.rendered || '';
				const cleanText = rawContent.replace(/<\/?[^>]+(>|$)/g, ""); // strip HTML tags
				const excerptText = cleanText.substring(0, excerptLength) + (cleanText.length > excerptLength ? '...' : '');
				if ( excerptText ) {
					portfolioExcerpt = <div className="wpmozo_portfolio_slider_excerpt">{ excerptText }</div>;
				}
			}

			// Featured Image.
			let portfolioImage = '';
			let imageUrl = '';
			let altText = '';
			if (
				post._embedded &&
				Array.isArray(post._embedded['wp:featuredmedia']) &&
				post._embedded['wp:featuredmedia'][0]
			) {
				imageUrl = post._embedded['wp:featuredmedia'][0].source_url ?? '';
				altText = post._embedded['wp:featuredmedia'][0].alt_text || '';
			}
			if ( showFeaturedImage && imageUrl ) {
				portfolioImage = (
					<div className="wpmozo_portfolio_slider_image_wrap">
						<a href={ post.link || '#' }>
							<img className="wpmozo_portfolio_slider_image" src={ imageUrl } alt={ altText } />
						</a>
					</div>
				);
			}

			// Categories.
			let portfolioCats = '';
			const postTermIds = post['wpmozo-ae-portfolio-category'] || [];
			if ( terms && postTermIds.length > 0 ) {
				const matchedTerms = terms.filter( term => postTermIds.includes( term.id ) );
				if ( matchedTerms.length > 0 ) {
					portfolioCats = (
						<div className="wpmozo_portfolio_slider_categories">
							{ matchedTerms.map( (term, i) => (
								<span key={term.id} className="wpmozo_portfolio_slider_cat">
									<a href={ term.link || '#' }>{ term.name }</a>
								</span>
							) ) }
						</div>
					);
				}
			}

			// Title.
			let portfolioTitle = '';
			if ( showTitle ) {
				portfolioTitle = (
					<h3 className="wpmozo_portfolio_slider_title">
						<a href={ post.link || '#' }>{ post.title?.rendered || __( '(Untitled)', 'wpmozo-blocks-and-addons' ) }</a>
					</h3>
				);
			}

			// Buttons.
			let portfolioButtons = '';
			let buttonsHtml = [];
			if ( showReadMore ) {
				buttonsHtml.push(
					<a key="readmore" href={ post.link || '#' } className="wpmozo_portfolio_slider_btn wpmozo_portfolio_slider_readmore">
						{ readMoreText }
					</a>
				);
			}
			if ( showProjectUrl ) {
				const projectUrl = post.project_url || '';
				if ( projectUrl ) {
					buttonsHtml.push(
						<a key="projecturl" href={ projectUrl } className="wpmozo_portfolio_slider_btn wpmozo_portfolio_slider_projecturl" target="_blank" rel="noopener noreferrer">
							{ projectUrlText }
						</a>
					);
				}
			}
			if ( buttonsHtml.length > 0 ) {
				portfolioButtons = (
					<div className="wpmozo_portfolio_slider_button_wrap">
						{ buttonsHtml }
					</div>
				);
			}

			const layoutArgs = {
				portfolioImage,
				portfolioCats,
				portfolioTitle,
				portfolioContent,
				portfolioExcerpt,
				portfolioButtons,
				post
			};

			let $thisSlide = '';
			if ( 'layout2' === layout ) {
				$thisSlide = renderPortfolioLayoutTwo( layoutArgs );
			} else {
				$thisSlide = renderPortfolioLayoutOne( layoutArgs );
			}

			// Add to slides.
			$slides.push( <div key={post.id} className="swiper-slide wpmozo_portfolio_slide">{ $thisSlide }</div> );
		} );

		// Slider arrows.
		if ( attributes.showArrows ) {
			let buttonNextClass = ( ! wpmozo_is_empty( attributes.nextArrowIcon ) )
					? `custom-swiper-button-next swiper-button-next ${attributes.nextArrowIcon}`
					: 'swiper-button-next',
				buttonPrevClass = ( ! wpmozo_is_empty( attributes.prevArrowIcon ) )
					? `custom-swiper-button-prev swiper-button-prev ${attributes.prevArrowIcon}`
					: 'swiper-button-prev';

			const arrowBgDisabledClass = ( ! attributes.arrowEnableBg ) ? ' wpmozo_arrow_bg_disabled' : '';

			$sliderArrows = <div
				className={`wpmozo_swiper_navigation wpmozo_arrows_${attributes.arrowsPosition}${arrowBgDisabledClass}`}
				data-arrows_desktop={ attributes.arrowsPosition }
			>
				<div className={buttonNextClass}></div>
				<div className={buttonPrevClass}></div>
			</div>;
		}

		// Slider control dots.
		if ( attributes.showControlDot ) {
			let paginationClass = '';
			if ( attributes.enableDynamicDots && (
				'solid_dot' === attributes.controlDotStyle ||
				'transparent_dot' === attributes.controlDotStyle ||
				'square_dot' === attributes.controlDotStyle
			) ) {
				paginationClass = ( attributes.enableDynamicDots ) ? ' swiper-pagination-bullets-dynamic' : '';
			}

			$paginationDots = <div className="wpmozo_swiper_pagination wpmozo-bna-portfolio-slider-pagination">
				<div className={`swiper-pagination ${attributes.controlDotStyle}${paginationClass}`}></div>
			</div>;
		}
	}

	const selectBlock = () => {
	    if ( wp && wp.data && wp.data.dispatch ) {
			wp.data.dispatch( 'core/block-editor' ).selectBlock( clientId );
		}
	}

	useEffect( () => {
		const event = new CustomEvent( 'WPMozoPortfolioPropsChanged' );
		window.dispatchEvent( event );

		document.querySelectorAll( 'iframe' ).forEach( ( iframe ) => {
			if ( iframe.contentWindow ) {
				iframe.contentWindow.dispatchEvent( event );
			}
		} );
	}, [
		attributes.slidesPerView,
		attributes.slidesPerViewTablet,
		attributes.slidesPerViewMobile,
		attributes.slidesPerGroup,
		attributes.slidesPerGroupTablet,
		attributes.slidesPerGroupMobile,
		attributes.spaceBetweenSlides,
		attributes.spaceBetweenSlidesTablet,
		attributes.slideEffect,
		attributes.layout,
		attributes.arrowIconSize,
		attributes.featuredImageWidth,
		attributes.featuredImageHeight,
		attributes.containerWidth,
		attributes.containerMaxWidth,
		posts
	] );

	const equalHeightClass = ( attributes.equalHeight ) ? ' wpmozo_equal_portfolio_height' : '';

	let autoHeight = ( attributes.autoHeight ) ?? 'false';
		autoHeight = ( attributes.equalHeight ) ? 'false' : autoHeight;

	return (
		<Fragment>
			<Inspector attributes={attributes} setAttributes={setAttributes} />
			<style>{ generateDynamicStyle( { attributes, clientId } ) }</style>

			<div {...useBlockProps()} onClick={selectBlock}>
				<div className={"wpmozo_swiper_wrapper" + equalHeightClass}
					data-clientid={ clientId }
					data-slide_effect={ attributes.slideEffect || 'slide' }
					data-slides_per_view={ attributes.slidesPerView || '1' }
					data-slides_per_view_tablet={ attributes.slidesPerViewTablet || '1' }
					data-slides_per_view_mobile={ attributes.slidesPerViewMobile || '1' }
					data-slides_per_group={ attributes.slidesPerGroup || '1' }
					data-slides_per_group_tablet={ attributes.slidesPerGroupTablet || '1' }
					data-slides_per_group_mobile={ attributes.slidesPerGroupMobile || '1' }
					data-space_between_slides={ attributes.spaceBetweenSlides || '20' }
					data-space_between_slides_tablet={ attributes.spaceBetweenSlidesTablet || '20' }
					data-space_between_slides_mobile={ attributes.spaceBetweenSlidesMobile || '20' }

					data-enable_coverflow_shadow={ attributes.enableCoverflowShadow ?? 'false' }
					data-coverflow_rotate={ attributes.coverflowRotate ?? '40' }
					data-coverflow_depth={ attributes.coverflowDepth ?? '100' }
					data-enable_loop={ attributes.enableLoop || 'false' }
					data-auto_height={ autoHeight || 'false' }
					data-autoplay={ attributes.autoplay || 'true' }
					data-autoplay_delay={ attributes.autoplayDelay || '3000' }
					data-pause_on_hover={ attributes.pauseOnHover || 'true' }
					data-enable_linear_trans={ attributes.enableLinearTrans || 'false' }
					data-trans_duration={ attributes.transDuration || '1000' }

					data-show_arrows={ attributes.showArrows || 'false' }
					data-show_control_dot={ attributes.showControlDot || 'false' }
					data-control_dot_style={ attributes.controlDotStyle || 'solid_dot' }
					data-enable_dynamic_dots={ attributes.enableDynamicDots || 'false' }
				>
					<div className={"wpmozo_portfolio_layout wpmozo_swiper_inner_wrap " + layout}>
						<div className="swiper swiper-container">
							<div className="swiper-wrapper">{ $slides }</div>
						</div>
						{ $sliderArrows }
						{ $paginationDots }
					</div>
				</div>
			</div>
		</Fragment>
	);
}

export default Edit;
