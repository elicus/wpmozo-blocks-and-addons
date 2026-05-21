import { _n, sprintf } from '@wordpress/i18n';

const PostMeta = ( { post, attributes } ) => {
	const { showCategories, showAuthor, showComments } = attributes;

	// Categories.
	let categories = '';
	if ( post._embedded?.['wp:term']?.[0] ) {
		categories = post._embedded['wp:term'][0]
			.map( ( cat ) => `<a href="${ cat.link }">${ cat.name }</a>` )
			.join( ', ' );
	}

	// Author.
	const author = post._embedded?.author?.[0]?.name &&
		`<a href="${ post._embedded.author[0].link }">${ post._embedded.author[0].name }</a>`;

	// Comments.
	const commentsCount = post.comments_count ?? 0;
	const commentsLabel = sprintf(
		_n(
			'%s Comment',   // singular
			'%s Comments',  // plural
			commentsCount,
			'wpmozo-blocks-and-addons' // textdomain
		),
		commentsCount
	);

	return ( <>
		{ ( showCategories || showAuthor || showComments ) && (
			<p className="wpmozo_bna_blog_timeline_meta">
				{ ( showCategories && categories ) && ( <>
					<span className="wpmozo_bna_blog_timeline_meta_icon">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="1em" height="1em" fill="currentColor">
							<rect x="32"  y="32"  width="96" height="96" rx="24"/>
							<rect x="176" y="32"  width="96" height="96" rx="24"/>
							<rect x="320" y="32"  width="96" height="96" rx="24"/>

							<rect x="32"  y="176" width="96" height="96" rx="24"/>
							<rect x="176" y="176" width="96" height="96" rx="24"/>
							<rect x="320" y="176" width="96" height="96" rx="24"/>

							<rect x="32"  y="320" width="96" height="96" rx="24"/>
							<rect x="176" y="320" width="96" height="96" rx="24"/>
							<rect x="320" y="320" width="96" height="96" rx="24"/>
						</svg>
					</span>
					<span className="wpmozo_bna_blog_timeline_post_categories" dangerouslySetInnerHTML={ {__html: categories } } />
				</> ) }

				{ showAuthor && author && ( <>
					<span className="wpmozo_bna_blog_timeline_meta_icon">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="1em" height="1em" fill="currentColor">
							<path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-11.8c-22.2 10.3-46.9 16-73.8 16s-51.6-5.7-73.8-16h-11.8C62.1 288 0 350.1 0 426.7V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-37.3c0-76.6-62.1-138.7-134.4-138.7z" />
						</svg>
					</span>
					<span className="author" dangerouslySetInnerHTML={ {__html: author } } />
				</> ) }

				{ showComments && ( <>
					<span className="wpmozo_bna_blog_timeline_meta_icon">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="1em" height="1em" fill="currentColor">
							<path d="M256 32C114.6 32 0 125.1 0 240c0 49.6 24.3 95 64.9 130.1C59 421.3 27.4 454.1 27 454.5a24 24 0 0 0 17.3 40.9c63.5 0 114.4-19.4 150.5-39.7 19.4 3.3 39.6 5.3 61.2 5.3 141.4 0 256-93.1 256-208S397.4 32 256 32z"/>
						</svg>
					</span>
					<span className="comments" dangerouslySetInnerHTML={ {__html: commentsLabel } } />
				</> ) }
			</p>
		) }
	</> );
};

export default PostMeta;
