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

export default function Edit(props) {

	const {attributes, setAttributes, clientId} = props;

	// Ensure ID is set once (no render-time mutation).
	useEffect(() => {
		if (attributes.ID !== clientId) {
			setAttributes({ID: clientId});
		}
	}, [clientId]); // eslint-disable-line react-hooks/exhaustive-deps.

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

	const queryArgs = {
		per_page: postsToShow,
		order: postOrder,
		orderby: postOrderBy,
		_fields: 'id,title.rendered', // ✅ only fetch id + title
	};

	if (true === attributes.ignoreStickyPosts) {
		queryArgs.sticky = false;
	}

	const posts = useSelect(
		(select) => select('core').getEntityRecords('postType', postType, queryArgs),
		[postType, postsToShow, postOrder, postOrderBy, sticky]
	);

	let postTitles = [];
	if (posts && posts.length > 0) {
		postTitles = posts.map((post) => {
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

	return (
		<Fragment>
			<Inspector attributes={attributes} setAttributes={setAttributes}/>
			<style>{generateDynamicStyle({attributes})}</style>

			<div {...useBlockProps()} id={`block-${attributes.ID}`}>
				<div className='wpmozo_post_ticker'>
					<div
						className={`wpmozo_post_ticker_wrap wpmozo_ticker_effect_${attributes.tickerEffect}`}
						data-attr={JSON.stringify(dataAttr)}
					>
						<div className="wpmozo_post_ticker_label">{attributes.tickerLabel}</div>
						<div className="wpmozo_post_ticker_items">
							<div className="wpmozo_post_ticker_bar" style={{ animationDuration: "11.89s" }}>
								{ 'scroll' === attributes.tickerEffect ? (
									postTitles && postTitles.length > 0 && postTitles.some(title => title) ? (
										postTitles.map((title, idx) =>
											title ? (
												<div className="wpmozo_post_ticker_item" key={idx}>
													<a className="wpmozo_post_ticker_post_title" href="#">{title}</a>
													{'scroll' === attributes.tickerEffect && 'icon' === attributes.separatorType && (
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
										<div className="swiper-container">
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
												<span className="wpmozo_swiper_icon_prev">
													<i className={`${attributes.previousArrow}`}></i>
												</span>
												<span className="wpmozo_swiper_icon_next">
													<i className={`${attributes.nextArrow}`}></i>
												</span>
											</div>
										)}
									</>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
}
