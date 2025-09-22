import { dateI18n } from '@wordpress/date';

import Thumbnail from './parts/Thumbnail';
import PostMeta from './parts/PostMeta';
import ReadMoreButton from './parts/ReadMoreButton';

const Layout1 = ( { post, attributes } ) => {

	const postID     = post.id;
	const classLists = ( post.class_list ) ? ( post.class_list ).join( ' ' ) : '';
	const postLink   = post.link ?? 'javascript:void(0)';

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
		const dateFormat = attributes.dateFormat || 'M j, Y';
		postDate = <div className="wpmozo_bna_blog_timeline_meta_date">
			<span className="published">{ dateI18n( dateFormat, post.date ) }</span>
		</div>;
	}

	// Post Excerpt.
	let postExcerpt = '';
	if ( attributes.showExcerpt && post.excerpt.rendered ) {
		postExcerpt = <div className="wpmozo_bna_blog_timeline_post_content_inner"
			dangerouslySetInnerHTML={ {__html: post.excerpt.rendered } }
		/>;
	}

	return (
		<article id={`post-${postID}`} className={ 'wpmozo_bna_blog_timeline_post ' + classLists  }>
			{ stemIcon }
			<div className="wpmozo_bna_blog_timeline_post_content">
				<div className="wpmozo_bna_blog_timeline_content_wrapper">
					{ postDate }

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
				</div>
			</div>
			<div className="wpmozo_bna_blog_timeline_outer_container"></div>
		</article>
	);
};

export default Layout1;
