import {__} from '@wordpress/i18n';
import {useBlockProps} from '@wordpress/block-editor';
import {useEffect, Fragment} from "@wordpress/element";
import {useSelect} from '@wordpress/data';
import Inspector from './inspector';
import generateDynamicStyle from "./style";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';
import { mergeWrapperProps } from '../../common/utils.js';

export default function Edit(props) {

	const {attributes, setAttributes, clientId} = props,
	wrapArgs = attributes?.ID && mergeWrapperProps( { 
		className: `wpmozo-post-ticker${ attributes?.wrapIsHover ? ' is_hover' : '' }` ,
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
                            
		if ( attributes.ID ) {
			if ( wrapStyle && wrapStyle !== attributes.wrapStyle ) {
				updates.wrapStyle = wrapStyle;
			}
		}

		if ( Object.keys( updates ).length ) {
			setAttributes( updates );
		}
	}, [ clientId, JSON.stringify( attributes ) ] ); // eslint-disable-line react-hooks/exhaustive-deps.

	useEffect(() => {
		const event = new CustomEvent('WPMozoPostTickerPropsChanged');
		window.dispatchEvent(event);
		const iframe = document.querySelector( 'iframe[name="editor-canvas"]' );
		if ( iframe?.contentWindow ) {
			iframe.contentWindow.dispatchEvent( event );
		}
	}, [props]);

	const postsToShow = parseInt(attributes.postsToShow) ?? 5;
	const postOrder = attributes.postOrder ?? 'DESC';
	const postOrderBy = attributes.postOrderBy ?? 'date';
	const sticky = attributes.ignoreStickyPosts ?? false;
	const postType = attributes.postType ?? 'post';

	const stickyQuery = {
		per_page: -1,
		order: postOrder,
		orderby: postOrderBy,
		_embed: true,
		sticky: true,
		_fields: 'id,title.rendered',
	};
	const stickyPosts = useSelect(
		(select) =>
			select('core').getEntityRecords('postType', postType, stickyQuery),
		[stickyQuery]
	);

	const queryArgs = {
		order: postOrder,
		orderby: postOrderBy,
		_embed: true,
		_fields: 'id,title.rendered',
	};
	if(stickyPosts){
		queryArgs.per_page= postsToShow - (stickyPosts?.length || 0);
	}
	if(sticky){
		queryArgs.per_page = postsToShow;
	}else{
		queryArgs.sticky = false;
	}
				
	const posts = useSelect(
		(select) =>
			select('core').getEntityRecords('postType', postType, queryArgs),
		[queryArgs]
	);
	let allPosts = {};
	if(posts){
		allPosts = [...posts];
		if(!sticky && stickyPosts){
			allPosts = [...stickyPosts, ...posts];
		}
	}

	let postTitles = [];
	if (allPosts && allPosts.length > 0) {
		postTitles = allPosts.map((post) => {
			let postTitle = post.title && typeof post.title.rendered === 'string' ? post.title.rendered : '';

			// Show title if showTitle is true, otherwise show empty string
			return postTitle;
		});
	}

	let dataAttr = {};
	if ('scroll' === attributes.tickerEffect) {
		dataAttr.ticker_effect = attributes.tickerEffect;
		dataAttr.scroll_effect_delay = attributes.scrollEffectSpeed;
	} else if ('fade' === attributes.tickerEffect) {
		dataAttr.ticker_effect = attributes.tickerEffect;
		dataAttr.fade_effect_delay = attributes.effectDelay;
		dataAttr.fade_effect_transition = attributes.transitionDuration;
		dataAttr.show_arrow = attributes.showArrows;
	} else {
		dataAttr.ticker_effect = attributes.tickerEffect;
		dataAttr.fade_effect_delay = attributes.effectDelay;
		dataAttr.fade_effect_transition = attributes.transitionDuration;
		dataAttr.show_arrow = attributes.showArrows;
		dataAttr.slide_align = attributes.slideAlignment;
	}

	const Effect = attributes.tickerEffect === 'scroll' ? 'scroll' : 'slide';

	return (
		<Fragment>
			<Inspector attributes={attributes} setAttributes={setAttributes}/>
			<style>{generateDynamicStyle({attributes, isEdit})}</style>

			<div {...blockProps} id={`block-${attributes.ID}`}>
				<div className='wpmozo_post_ticker'>
					<div
						className={`wpmozo_post_ticker_wrap wpmozo_ticker_effect_${attributes.tickerEffect}`}
						data-attr={JSON.stringify(dataAttr)}
					>
						{postTitles.length > 0 ? (<>
							{'' !== attributes.tickerLabel && <div className="wpmozo_post_ticker_label">{attributes.tickerLabel}</div>}
							<div className="wpmozo_post_ticker_items">
								<div className="wpmozo_post_ticker_bar" style={{ animationDuration: "11.89s" }}>
									{ 'scroll' === attributes.tickerEffect ? (
										postTitles && postTitles.length > 0 && postTitles.some(title => title) ? (
											postTitles.map((title, idx) =>
												title ? (
													<div className="wpmozo_post_ticker_item" key={idx}>
														<a className="wpmozo_post_ticker_post_title" href="#">{title}</a>
														{'scroll' === attributes.tickerEffect && 'icon' === attributes.separatorType && idx !== postTitles.length - 1 && (
															<span className="wpmozo_ticker_icon_separator">
																<i className={`${attributes.separatorIcon}`}></i>
															</span>
														)}
													</div>
												) : null
											)
										) : null
									) : (
										<>
											<div className="swiper-container" data-order-id={attributes.ID} data-type={`${attributes.tickerEffect}`}>
												<div className="swiper-wrapper">
													{postTitles && postTitles.length > 0 && postTitles.some(title => title) ? (
														postTitles.map((title, idx) =>
															title ? (
																<div className="wpmozo_post_ticker_item swiper-slide" key={idx}>
																	<a className="wpmozo_post_ticker_post_title"
																	href="#">{title}</a>
																	{'scroll' === attributes.tickerEffect && 'icon' === attributes.separatorType && (
																		<span className="wpmozo_ticker_icon_separator">
																			<i className={`${attributes.separatorIcon}`}></i>
																		</span>
																	)}
																</div>
															) : null
														)
													) : null}
												</div>
											</div>
											{attributes.showArrows && (
												<div className="wpmozo_swiper_navigation wpmozo_arrows_position">
													<span className="swiper-button-prev wpmozo_swiper_icon_prev">
														<i className={`${attributes.previousArrow}`}></i>
													</span>
													<span className="swiper-button-next wpmozo_swiper_icon_next">
														<i className={`${attributes.nextArrow}`}></i>
													</span>
												</div>
											)}
										</>
									)}
								</div>
							</div></>) : 
							<div className="wpmozo_post_ticker_items">
								<span className="no_result">
									{attributes?.noResultText ? attributes?.noResultText : 'No Results Found'}
								</span>
							</div>
						}
					</div>
				</div>
			</div>
		</Fragment>
	);
}
