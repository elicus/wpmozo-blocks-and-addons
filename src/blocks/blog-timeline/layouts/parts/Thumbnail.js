import React from 'react';

const Thumbnail = ( { post, attributes } ) => {

	// If do not show.
	if ( ! attributes.showThumbnail ) {
		return null;
	}

	const featuredMedia = post?._embedded?.['wp:featuredmedia']?.[0];
	const imageUrl      = featuredMedia?.source_url ?? '';
	const altText       = featuredMedia?.alt_text ?? '';

	// If no image url found.
	if ( ! imageUrl ) {
		return null;
	}

	return (
		<div className="wpmozo_bna_blog_timeline_image_wrapper">
			<a href={ post.link ?? 'javascript:void(0)' } className="wpmozo_bna_blog_timeline_image_link">
				<img src={imageUrl} alt={altText} />
			</a>
		</div>
	);
};

export default Thumbnail;
