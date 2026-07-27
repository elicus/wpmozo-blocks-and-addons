import { __ } from '@wordpress/i18n';
import { Fragment, useEffect } from "@wordpress/element";
import { useBlockProps } from '@wordpress/block-editor';
import { useSelect } from '@wordpress/data';
import Inspector from './inspector';

import { wpmozo_is_empty, mergeWrapperProps } from '../../common/utils';
import generateDynamicStyle from "./style";

import {
	renderTestimonialLayoutOne,
	renderTestimonialLayoutTwo
} from './layouts';

const Edit = (props) => {

	const attributes    = props.attributes;
	const setAttributes = props.setAttributes;
	const clientId      = props.clientId,
		wrapArgs = attributes?.ID && mergeWrapperProps( { 
			className: `wpmozo-testimonial-slider${ attributes?.wrapIsHover ? ' is_hover' : '' }` ,
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

	const postsToShow        = parseInt( attributes.postsToShow ) ?? 5;
	const postOrder          = attributes.postOrder ?? 'DESC';
	const postOrderBy        = attributes.postOrderBy ?? 'date';
	const includesCategories = attributes.includesCategories ?? [];

	// Get the post types.
	const posts = useSelect( (select) =>
		select( 'core' ).getEntityRecords( 'postType', 'wpmozoae-testimonial', {
			per_page: postsToShow,
			order: postOrder,
			orderby: postOrderBy,
			categories: includesCategories.join( ',' ),
			_embed: true
		} ),
	[ postsToShow, postOrder, postOrderBy, includesCategories.join(',') ] );

	// Get props.
	const layout = attributes.layout ?? 'layout1';

	// Get slides.
	let $slides         = [],
		$sliderArrows   = '',
		$paginationDots = '';
	if ( posts && posts.length > 0 ) {

		// Start quote.
		const startQuoteSvg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M13 6v6h5.2v4c0 .8-.2 1.4-.5 1.7-.6.6-1.6.6-2.5.5h-.3v1.5h.5c1 0 2.3-.1 3.3-1 .6-.6 1-1.6 1-2.8V6H13zm-9 6h5.2v4c0 .8-.2 1.4-.5 1.7-.6.6-1.6.6-2.5.5h-.3v1.5h.5c1 0 2.3-.1 3.3-1 .6-.6 1-1.6 1-2.8V6H4v6z"></path></svg>';

		let openingQuote = '';
		if ( attributes.showOpenQuoteIcon ) {
			openingQuote = '<span class="wpmozo_testimonial_quote_icon wpmozo_testimonial_opening_quote_icon">' + startQuoteSvg + '</span>';
		}
		let closingQuote = '';
		if ( attributes.showCloseQuoteIcon ) {
			closingQuote = '<span class="wpmozo_testimonial_quote_icon wpmozo_testimonial_closing_quote_icon">' + startQuoteSvg + '</span>';
		}

		posts.map( ( post ) => {

			const rawContent      = post.content?.rendered || '';
			const modifiedContent = openingQuote + rawContent + closingQuote;
			const rateNumber      = parseFloat( post.author_rating ) ?? 5;

			let postExcerpt = '';
			if ( post.content.rendered ) {
				postExcerpt = <div className="wpmozo_testimonial_desc"
					dangerouslySetInnerHTML={ {__html: modifiedContent } }
				/>;
			}

			let authorImage = '';
			let imageUrl = '';
			let altText = '';

			// Safely check for _embedded and 'wp:featuredmedia'
			if (
				post._embedded &&
				Array.isArray(post._embedded['wp:featuredmedia']) &&
				post._embedded['wp:featuredmedia'][0]
			) {
				imageUrl = post._embedded['wp:featuredmedia'][0].source_url ?? '';
				altText = post._embedded['wp:featuredmedia'][0].alt_text || '';
			}

			if ( attributes.showAuthorImage && imageUrl ) {
				authorImage = <div className="wpmozo_testimonial_author_image">
					<img src={ imageUrl } alt={ altText } />
				</div>;
			}


			let rating = '';
			if ( attributes.showRating && rateNumber > 0 ) {
				const fullStars   = Math.floor( rateNumber );
				const hasHalfStar = rateNumber % 1 !== 0;
				const emptyStars  = 5 - fullStars - ( hasHalfStar ? 1 : 0 );

				rating = (
					<div className="wpmozo_testimonial_rating">
						<span itemProp="reviewRating" itemScope itemType="http://schema.org/Rating">
							<span className="wpmozo_testimonial_rating_value" itemProp="ratingValue">
								{ rateNumber }
							</span>
							{ [...Array( fullStars ) ].map( ( _, i ) => (
								<span key={`full-${i}`} className="wpmozo_testimonial_star wpmozo_testimonial_filled_star"></span>
							) ) }
							{ hasHalfStar && (
								<span className="wpmozo_testimonial_star wpmozo_testimonial_half_filled_star"></span>
							) }
							{ [ ...Array(emptyStars)].map( ( _, i ) => (
								<span key={`empty-${i}`} className="wpmozo_testimonial_star wpmozo_testimonial_empty_star"></span>
							) ) }
						</span>
					</div>
				);
			}

			let authorName = '';
			if ( post.author_name ) {
				authorName = <div className="wpmozo_testimonial_author_name">{ post.author_name }</div>
			}
			let authorDesignation = '';
			if ( attributes.showDesignation && post.author_designation ) {
				authorDesignation = <div className="wpmozo_testimonial_author_designation">{ post.author_designation }</div>
			}
			let companyName = '';
			if ( attributes.showCompany && post.author_company ) {
				companyName = post.author_company;
				if ( post.author_company_url ) {
					companyName = <a href={ post.author_company_url } target="_blank" rel="nofollow">{ companyName }</a>;
				}
				companyName = <div className="wpmozo_testimonial_author_company">{ companyName }</div>
			}

			const layoutArgs = {
				postExcerpt,
				rating,
				authorImage,
				authorName,
				authorDesignation,
				companyName,
				post
			};

			let $thisSlide = '';
			if ( 'layout2' == layout ) {
				$thisSlide = renderTestimonialLayoutTwo( layoutArgs );
			} else {
				$thisSlide = renderTestimonialLayoutOne( layoutArgs );
			}

			// Add to the slides.
			$slides.push( <div className="swiper-slide wpmozo_testimonial_slide">{ $thisSlide }</div> );
		} );

		// Slider arrows.
		if ( attributes.showArrows ) {
			let buttonNextClass = ( ! wpmozo_is_empty( attributes.nextArrowIcon ) )
					? `custom-swiper-button-next swiper-button-next ${attributes.nextArrowIcon}`
					: 'swiper-button-next',
				buttonPrevClass = ( ! wpmozo_is_empty( attributes.prevArrowIcon ) )
					? `custom-swiper-button-prev swiper-button-prev ${attributes.prevArrowIcon}`
					: 'swiper-button-prev';

			$sliderArrows = <div
				className={`wpmozo_swiper_navigation wpmozo_arrows_${attributes.arrowsPosition}`}
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

			$paginationDots = <div className="wpmozo-bna-testimonial-slider-pagination">
				<div className={`swiper-pagination ${attributes.controlDotStyle}${paginationClass}`}></div>
			</div>;
		}
	}

	// This need because of swiper init.
	const selectBlock = () => {
	    if ( wp && wp.data && wp.data.dispatch ) {
			wp.data.dispatch( 'core/block-editor' ).selectBlock( clientId );
		}
	}

	useEffect( () => {
		const event = new CustomEvent( 'WPMozoTestimonialPropsChanged' );
		const iframe = document.querySelector( 'iframe[name="editor-canvas"]' );
		if ( iframe?.contentWindow ) {
			iframe.contentWindow.dispatchEvent( event );
		}
	}, [JSON.stringify(attributes), posts] );

	// Equal height testimonial class.
	const equalHeightClass = ( attributes.equalHeight ) ? ' wpmozo_equal_testimonial_height' : '';

	let autoHeight = ( attributes.autoHeight ) ?? 'false';
		autoHeight = ( attributes.equalHeight ) ? 'false' : autoHeight;


	return (
		<Fragment>
			<Inspector attributes={attributes} setAttributes={setAttributes} />
			<style>{ generateDynamicStyle( { attributes, clientId, isEdit } ) }</style>

			<div {...blockProps} onClick={selectBlock}>
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
					
					data-coverflow_rotate={attributes.coverflowRotate || '40'}
					data-coverflow_depth={attributes.coverflowDepth || '100'}
					data-enable_coverflow_shadow={ attributes.enableCoverflowShadow ?? 'false' }

					data-enable_loop={ attributes.enableLoop ?? 'false' }
					data-auto_height={ autoHeight ?? 'false' }
					data-autoplay={ attributes.autoplay ?? 'false' }
					data-autoplay_delay={ attributes.autoplayDelay ?? '3000' }
					data-pause_on_hover={ attributes.pauseOnHover ?? 'false' }
					// data-mousewheel={ attributes.enableMouse ?? 'false' }
					// data-free-mode={ attributes.enableFree ?? 'false' }
					data-enable_linear_trans={ attributes.enableLinearTrans ?? 'false' }
					data-trans_duration={ attributes.transDuration || '1000' }

					data-show_arrows={ attributes.showArrows ?? 'false' }
					data-show_control_dot={ attributes.showControlDot ?? 'false' }
					data-control_dot_style={ attributes.controlDotStyle || 'solid_dot' }
					data-enable_dynamic_dots={ attributes.enableDynamicDots ?? 'false' }
				>
					<div className={"wpmozo_testimonial_layout wpmozo_swiper_inner_wrap " + layout}>
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
