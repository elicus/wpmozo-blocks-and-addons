import { __ } from '@wordpress/i18n';

const LinkButton = ( { post, attributes } ) => {

	// If do not show.
	if ( ! attributes.enableLink || 'button' !== attributes.linkType ) {
		return null;
	}

	let $buttonIcon = '';
	if ( attributes.buttonUseIcon && attributes.buttonIcon ) {
		$buttonIcon = <i className={ 'wpmozo-bna-icon ' + attributes.buttonIcon }></i>;
	}

	return (
		<div className="wpmozo-bna-button-wrap wpmozo-bna-team-item-link-btn-wrap">
			<a href={ post.link }
				target={ 'external' === attributes.linkTarget ? '_blank' : false }
				className={ [
					'wpmozo-bna-button',
					'wpmozo-bna-team-item-link-btn',
					( attributes.usePopup ) ? 'wpmozo_bna_team_popup' : '',
					( attributes.buttonUseIcon && attributes.buttonIconOnHover ) ? 'wpmozo-icon-on-hover' : '',
					( attributes.buttonUseIcon && 'before' === attributes.buttonIconPosition ) ? 'wpmozo-icon-at-before' : 'wpmozo-icon-at-after'
				].join(" ") }
			>
				<span className='wpmozo-bna-btn-text'>{ attributes.linkButtonText && __( 'Read More', 'wpmozo-blocks-and-addons' ) }</span>
				{ $buttonIcon }
			</a>
		</div>
	);
};

export default LinkButton;