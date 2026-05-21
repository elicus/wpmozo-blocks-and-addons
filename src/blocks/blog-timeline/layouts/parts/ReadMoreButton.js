import { __ } from '@wordpress/i18n';

const ReadMoreButton = ( { post, attributes } ) => {

	// If do not show.
	if ( ! attributes.showReadMore ) {
		return null;
	}

	let $buttonIcon = '';
	if ( attributes.buttonUseIcon && attributes.buttonIcon ) {
		$buttonIcon = <i className={ 'wpmozo-bna-icon ' + attributes.buttonIcon }></i>;
	}

	return (
		<div className="wpmozo-bna-button-wrap wpmozo_bna_blog_timeline_read_more_link">
			<a href={ post.link }
				className={ [
					'wpmozo-bna-button',
					( attributes.buttonUseIcon && attributes.buttonIconOnHover ) ? 'wpmozo-icon-on-hover' : '',
					( attributes.buttonUseIcon && 'before' === attributes.buttonIconPosition ) ? 'wpmozo-icon-at-before' : 'wpmozo-icon-at-after'
				].join(" ") }
			>
				<span className='wpmozo-bna-btn-text'>{ attributes.readMoreText }</span>
				{ $buttonIcon }
			</a>
		</div>
	);
};

export default ReadMoreButton;
