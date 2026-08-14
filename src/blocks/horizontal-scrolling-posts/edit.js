import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import { useEffect, Fragment} from "@wordpress/element";
import { useSelect } from '@wordpress/data';
import Inspector from './inspector';
import generateDynamicStyle from "./style";
import {
	renderTestimonialLayoutOne,
	renderTestimonialLayoutTwo
} from './layouts';
import $, { post } from 'jquery'

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';
import { mergeWrapperProps } from '../../common/utils.js';

export default function Edit(props) {

	const { attributes, setAttributes, clientId } = props,
		wrapArgs = attributes?.ID && mergeWrapperProps( { 
			className: `wpmozo-horizontal-scrolling-posts${ attributes?.wrapIsHover ? ' is_hover' : '' }` ,
			style: {}
		}, attributes ),
		wrapProps = wrapArgs?.wrapprops,
		blockProps = useBlockProps(wrapProps),
		wrapStyle = wrapArgs?.wrapStyle;

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
	let sticky               = attributes.ignoreStickyPosts ?? false;

	const stickyQuery = {
		per_page: -1,
		order: postOrder,
		orderby: postOrderBy,
		_embed: true,
		sticky: true
	};
	const stickyPosts = useSelect(
		(select) =>
			select('core').getEntityRecords('postType', 'post', stickyQuery),
		[stickyQuery]
	);

	const queryArgs = {
		order: postOrder,
		orderby: postOrderBy,
		_embed: true
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
			select('core').getEntityRecords('postType', 'post', queryArgs),
		[queryArgs]
	);
	let allPosts = {};
	if(posts){
		allPosts = [...posts];
		if(!sticky && stickyPosts){
			allPosts = [...stickyPosts, ...posts];
		}
	}

	// Get props.
	const layout = attributes.layout ?? 'layout1';

	const truncateToWords = (text, wordLimit) => {
		if (!text) return '';
		const words = text.trim().split(/\s+/); // Split by whitespace
		if (words.length <= wordLimit) return text;
		return words.slice(0, wordLimit).join(' ') + '...';
	};


	let postData = [];
	if ( allPosts && allPosts.length > 0 ) {
		allPosts.map( ( post ) => {
			const rawContent      = post.content?.rendered || '';
			let postTitle      = post.title?.rendered || '';
			let date = post.date;
			let commentCount = post._embedded?.replies?.[0] || [];
			const categories = post._embedded?.['wp:term']?.[0] || [];

			let postExcerpt = '';
			if ( post.content.rendered ) {
				postExcerpt = <div dangerouslySetInnerHTML={{__html: truncateToWords(rawContent, attributes.excerptLength)}}/>
			}

			let showFeaturedImage = '';
			let imageUrl = '';
			let altText = '';
			let button = '';
			let categoriesData = '';

			// Safely check for _embedded and 'wp:featuredmedia'
			if (
				post._embedded &&
				Array.isArray(post._embedded['wp:featuredmedia']) &&
				post._embedded['wp:featuredmedia'][0]
			) {
				imageUrl = post._embedded['wp:featuredmedia'][0].source_url ?? '';
				altText = post._embedded['wp:featuredmedia'][0].alt_text || '';
			}

			if ( attributes.showFeaturedImage && imageUrl ) {
				showFeaturedImage = <div className="wpmozo_horizontal_scrolling_post_image_wrapper">
					<a href={post.link}>
						<img src={imageUrl} alt={altText} className="wpmozo_horizontal_scrolling_post_image"/>
					</a>
				</div>;
			}

			if(attributes.showCategories){
				categoriesData = categories;
			}

			if(attributes.showButton) {
				let $buttonIcon = '';
				if ( attributes.showButtonIcon && attributes.icon ) {
					$buttonIcon = <i className={ 'wpmozo-bna-icon ' + attributes.icon }></i>;
				}
				button = <div className="wpmozo-bna-button-wrap">
					<a href="javascript:void(0)"
					   className={[
						   'wpmozo-bna-button',
						   (attributes.showButtonIcon && attributes.showOnHover) ? 'wpmozo-icon-on-hover' : '',
						   (attributes.showButtonIcon && 'before' === attributes.buttonMediaPosition) ? 'wpmozo-icon-at-before' : 'wpmozo-icon-at-after'
					   ].join(" ")}
					>
						<span className='wpmozo-bna-btn-text'>{attributes.buttonText}</span>
						{$buttonIcon}
					</a>
				</div>;
			}


			let authorData = post._embedded?.author?.[0];
			let authorName = authorData?.name || 'Unknown Author';
			let authorLink = authorData?.link || '#';

			postTitle = (attributes.showTtile) ? postTitle : '';
			postExcerpt = (attributes.showExcerpt) ? postExcerpt : '';
			authorName = (attributes.showAuthorName) ? authorName : '';
			date = (attributes.showDate) ? date : '';
			commentCount = (attributes.showCommentCount) ? commentCount : '';

			const layoutArgs = {
				postTitle,
				postExcerpt,
				categoriesData,
				showFeaturedImage,
				authorName,
				authorLink,
				date,
				commentCount,
				post,
				button
			};

			let $thisSlide = '';
			if ( 'layout2' == layout ) {
				$thisSlide = renderTestimonialLayoutTwo( layoutArgs );
			} else {
				$thisSlide = renderTestimonialLayoutOne( layoutArgs );
			}

			// Add to the slides.
			postData.push( <div className={`wpmozo_horizontal_scrolling_post_item item_${attributes.layout}`}>{ $thisSlide }</div> );
		} );
	}
	useEffect( () => {
		if ( ! attributes.ID ) return;
		if ( null === posts) return;
		const event = new CustomEvent( 'WPMozoScrollPostsPropsChanged', {
			detail: { clientId: attributes.ID }
		} );
		const iframe = document.querySelector( 'iframe[name="editor-canvas"]' );
		iframe?.contentWindow?.dispatchEvent( event );
	}, [ posts, attributes ] );

    return (
		<Fragment>
			<Inspector attributes={attributes} setAttributes={setAttributes}/>
			<style>{generateDynamicStyle({attributes})}</style>

			<div {...blockProps} id={`block-${attributes.ID}`}>
				<div className={`wpmozo-sticky-posts-scroller`}>
					<div className={`wpmozo-sticky-posts-wrapper ${attributes.layout}`}>
						<div className={`wpmozo-sticky-posts-inner`}>
							{postData}
						</div>
					</div>
				</div>
			</div>

</Fragment>
)
	;
}
