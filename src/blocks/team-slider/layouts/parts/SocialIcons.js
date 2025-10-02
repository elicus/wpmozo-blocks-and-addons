
const SocialIcons = ( { post, attributes } ) => {

	// If do not show.
	if ( ! attributes.showSocialIcon ) {
		return null;
	}

	const linkTarge = attributes.socialIconTarget ?? 'external';

	let $socialIcons = [];

	if ( post.website && '' !== post.website ) {
		$socialIcons.push(
			<a href={ post.website } target={ ( 'external' === linkTarge ) ? '_blank' : false }>
				<span className="wpmozo_bna_team_member_social_icon wpmozo_bna_team_website">&#xe0e3;</span>
			</a>
		);
	}
	if ( post.facebook && '' !== post.facebook ) {
		$socialIcons.push(
			<a href={ post.facebook } target={ ( 'external' === linkTarge ) ? '_blank' : false }>
				<span className="wpmozo_bna_team_member_social_icon wpmozo_bna_team_facebook">&#xe093;</span>
			</a>
		);
	}
	if ( post.twitter && '' !== post.twitter ) {
		$socialIcons.push(
			<a href={ post.twitter } target={ ( 'external' === linkTarge ) ? '_blank' : false }>
				<span className="wpmozo_bna_team_member_social_icon wpmozo_bna_team_twitter">&#xe094;</span>
			</a>
		);
	}
	if ( post.linkedin && '' !== post.linkedin ) {
		$socialIcons.push(
			<a href={ post.linkedin } target={ ( 'external' === linkTarge ) ? '_blank' : false }>
				<span className="wpmozo_bna_team_member_social_icon wpmozo_bna_team_linkedin">&#xe09d;</span>
			</a>
		);
	}
	if ( post.instagram && '' !== post.instagram ) {
		$socialIcons.push(
			<a href={ post.instagram } target={ ( 'external' === linkTarge ) ? '_blank' : false }>
				<span className="wpmozo_bna_team_member_social_icon wpmozo_bna_team_instagram">&#xe09a;</span>
			</a>
		);
	}
	if ( post.youtube && '' !== post.youtube ) {
		$socialIcons.push(
			<a href={ post.youtube } target={ ( 'external' === linkTarge ) ? '_blank' : false }>
				<span className="wpmozo_bna_team_member_social_icon wpmozo_bna_team_youtube">&#xe0a3;</span>
			</a>
		);
	}
	if ( post.email_address && '' !== post.email_address ) {
		$socialIcons.push(
			<a href={ 'mailto:' + post.email_address } target={ ( 'external' === linkTarge ) ? '_blank' : false }>
				<span className="wpmozo_bna_team_member_social_icon wpmozo_bna_team_email">&#xe076;</span>
			</a>
		);
	}
	if ( post.phone_number && '' !== post.phone_number ) {
		$socialIcons.push(
			<a href={ 'tel:' + post.phone_number } target={ ( 'external' === linkTarge ) ? '_blank' : false }>
				<span className="wpmozo_bna_team_member_social_icon wpmozo_bna_team_phone">&#xe090;</span>
			</a>
		);
	}

	// If not social icons.
	if ( $socialIcons.length < 1 ) {
		return null
	}

	return ( <div className="wpmozo_bna_team_social_wrapper">{ $socialIcons }</div> );
};

export default SocialIcons;
