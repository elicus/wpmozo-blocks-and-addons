import { dateI18n } from '@wordpress/date';

import Thumbnail from './parts/Thumbnail';
import PostMeta from './parts/PostMeta';
import ReadMoreButton from './parts/ReadMoreButton';

const Layout2 = ( { post, attributes } ) => {

	const postID     = post.id;
	const classLists = ( post.class_list ) ? ( post.class_list ).join( ' ' ) : '';
	const postLink   = post.link ?? 'javascript:void(0)';

	const dateFormat = attributes.dateFormat || 'M j, Y';
	const TitleLevel = attributes.titleLevel ?? 'h3';

	// Stem/bar post Icon.
	let stemIcon = '';
	if ( attributes.timelineIcon && '' !== attributes.timelineIcon ) {
		stemIcon = <div className="wpmozo_bna_blog_timeline_stem_center">
			<span className={`wpmozo_bna_blog_timeline_post_icon ${attributes.timelineIcon}`} />
		</div>;
	}

	// Post Date.
	let postDate = '';
	if ( attributes.showDate ) {
		postDate = <div className="wpmozo_bna_blog_timeline_meta_date wpmozo_bna_mobile_date">
			<span className="published">{ dateI18n( dateFormat, post.date ) }</span>
		</div>;
	}

	// Post Excerpt.
	let postExcerpt = '';
	if ( attributes.showExcerpt && attributes.excerptLength && post.excerpt.rendered ) {
		// Process post.excerpt.rendered with excerptLength
		let excerptContent = post.excerpt.rendered;
		const tmpDiv = document.createElement('div');
		tmpDiv.innerHTML = excerptContent;
		const textContent = tmpDiv.textContent || tmpDiv.innerText || '';
		const words = textContent.split(' ');
		let trimmedExcerpt = words.slice(0, attributes.excerptLength).join(' ').trim();
		if (words.length > attributes.excerptLength) {
			trimmedExcerpt += '...';
		}
		postExcerpt = (
			<div className="wpmozo_bna_blog_timeline_post_content_inner">
				{ trimmedExcerpt }
			</div>
		);
	}

	return (
		<article id={`post-${postID}`} className={ 'wpmozo_bna_blog_timeline_post ' + classLists  }>
			{ stemIcon }
			<div className="wpmozo_bna_blog_timeline_post_content">
				{ postDate }
				<div className="wpmozo_bna_blog_timeline_content_wrapper">
					{/* Post Image. */}
					<Thumbnail post={ post } attributes={ attributes } />

					{/* Post title. */}
					{ ( post.title.rendered ) &&
						<TitleLevel className="wpmozo_bna_blog_timeline_post_title">
							<a href={ postLink }>{ post.title.rendered }</a>
						</TitleLevel>
					}

					{/* Post meta. */}
					<PostMeta post={ post } attributes={ attributes } />
					{ postExcerpt }
					<ReadMoreButton post={ post } attributes={ attributes } />

					<span className="wpmozo_bna_blog_timeline_triangle"></span>
				</div>
			</div>
			<div className="wpmozo_bna_blog_timeline_outer_container">
				{ ( attributes.showDate ) && (
					<div className="wpmozo_bna_blog_timeline_meta_date">
						<span className="published">{ dateI18n( dateFormat, post.date ) }</span>
					</div>
				) }
			</div>
		</article>
	)
};

export default Layout2;
