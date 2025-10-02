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

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

export default function Edit(props) {

	const { attributes, setAttributes, clientId } = props;

	// Ensure ID is set once (no render-time mutation).
	useEffect( () => {
		if ( attributes.ID !== clientId ) {
			setAttributes( { ID: clientId } );
		}
	}, [ clientId ] ); // eslint-disable-line react-hooks/exhaustive-deps.

	const postsToShow        = parseInt( attributes.postsToShow ) ?? 5;
	const postOrder          = attributes.postOrder ?? 'DESC';
	const postOrderBy        = attributes.postOrderBy ?? 'date';

	// Get the post types.
	const posts = useSelect((select) =>
		select('core').getEntityRecords('postType', 'post', {
			per_page: postsToShow,
			order: postOrder,
			orderby: postOrderBy,
			_embed: true
		}),
	[postsToShow, postOrder, postOrderBy]);

	// Get props.
	const layout = attributes.layout ?? 'layout1';

	const truncateToWords = (text, wordLimit) => {
		if (!text) return '';
		const words = text.trim().split(/\s+/); // Split by whitespace
		if (words.length <= wordLimit) return text;
		return words.slice(0, wordLimit).join(' ') + '...';
	};


	let postData = [];
	if ( posts && posts.length > 0 ) {
		posts.map( ( post ) => {
			// console.log(post);

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
				showFeaturedImage = <div className="dipl_horizontal_scrolling_post_image_wrapper">
					<a href={post.link}>
						<img src={imageUrl} alt={altText} className="dipl_horizontal_scrolling_post_image"/>
					</a>
				</div>;
			}

			if(attributes.showCategories){
				categoriesData = categories;
			}

			if(attributes.showButton) {
				button = <div className="et_pb_button_wrapper">
					<a className="et_pb_button" href={post.link}>{attributes.buttonText}</a>
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
			postData.push( <div className={`dipl_horizontal_scrolling_post_item item_${attributes.layout}`}>{ $thisSlide }</div> );
		} );
	}

    return (
		<Fragment>
			<Inspector attributes={attributes} setAttributes={setAttributes}/>
			<style>{generateDynamicStyle({attributes})}</style>

			<div {...useBlockProps()} id={`block-${attributes.ID}`}>
				<div className={`dipl-sticky-posts-scroller`}>
					<div className={`dipl-sticky-posts-wrapper ${attributes.layout}`}>
						<div className={`dipl-sticky-posts-inner`}>
							{postData}
						</div>
					</div>
				</div>
			</div>

</Fragment>
)
	;
}
