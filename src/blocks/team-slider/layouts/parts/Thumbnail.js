import React from 'react';

const Thumbnail = ( { post, attributes } ) => {

	const featuredMedia = post?._embedded?.['wp:featuredmedia']?.[0];
	const imageUrl      = featuredMedia?.source_url ?? '';
	const altText       = featuredMedia?.alt_text ?? '';

	// If no image url found.
	if ( ! imageUrl ) {
		return null;
	}

	return (
		<div className="wpmozo_bna_team_member_image">
            <img src={imageUrl} alt={altText} />
		</div>
	);
};

export default Thumbnail;