
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
				<span className="wpmozo_bna_team_member_social_icon wpmozo_bna_team_website fas fa-globe" />
			</a>
		);
	}
	if ( post.facebook && '' !== post.facebook ) {
		$socialIcons.push(
			<a href={ post.facebook } target={ ( 'external' === linkTarge ) ? '_blank' : false }>
				<span className="wpmozo_bna_team_member_social_icon wpmozo_bna_team_facebook fab fa-facebook-f" />
			</a>
		);
	}
	if ( post.twitter && '' !== post.twitter ) {
		$socialIcons.push(
			<a href={ post.twitter } target={ ( 'external' === linkTarge ) ? '_blank' : false }>
				<span className="wpmozo_bna_team_member_social_icon wpmozo_bna_team_twitter fab fa-x-twitter" />
			</a>
		);
	}
	if ( post.linkedin && '' !== post.linkedin ) {
		$socialIcons.push(
			<a href={ post.linkedin } target={ ( 'external' === linkTarge ) ? '_blank' : false }>
				<span className="wpmozo_bna_team_member_social_icon wpmozo_bna_team_linkedin fab fa-linkedin-in" />
			</a>
		);
	}
	if ( post.instagram && '' !== post.instagram ) {
		$socialIcons.push(
			<a href={ post.instagram } target={ ( 'external' === linkTarge ) ? '_blank' : false }>
				<span className="wpmozo_bna_team_member_social_icon wpmozo_bna_team_instagram fab fa-instagram" />
			</a>
		);
	}
	if ( post.youtube && '' !== post.youtube ) {
		$socialIcons.push(
			<a href={ post.youtube } target={ ( 'external' === linkTarge ) ? '_blank' : false }>
				<span className="wpmozo_bna_team_member_social_icon wpmozo_bna_team_youtube fab fa-youtube" />
			</a>
		);
	}
	if ( post.email_address && '' !== post.email_address ) {
		$socialIcons.push(
			<a href={ 'mailto:' + post.email_address } target={ ( 'external' === linkTarge ) ? '_blank' : false }>
				<span className="wpmozo_bna_team_member_social_icon wpmozo_bna_team_email fas fa-envelope" />
			</a>
		);
	}
	if ( post.phone_number && '' !== post.phone_number ) {
		$socialIcons.push(
			<a href={ 'tel:' + post.phone_number } target={ ( 'external' === linkTarge ) ? '_blank' : false }>
				<span className="wpmozo_bna_team_member_social_icon wpmozo_bna_team_phone fas fa-phone" />
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
