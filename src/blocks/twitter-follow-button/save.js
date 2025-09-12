import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import generateDynamicStyle from "./style";

const Save = ( { attributes } ) => {

	const clientId = attributes.ID;

	// Get attributes.
	const twitterUsername = attributes.twitterUsername ?? '';
	const buttonSize      = attributes.buttonSize ?? 'small';
	const doNotTrack      = ( false === attributes.doNotTrack ) ? 0 : 1;
	const showUsername    = attributes.showUsername ?? false;
	const showCount       = attributes.showCount ?? false;
	
	return ( <>
		<style>{ generateDynamicStyle( { attributes, clientId } ) }</style>

		<div {...useBlockProps.save( { className: attributes.className } )} id={`block-${clientId}`}>
			{ ( twitterUsername && '' !== twitterUsername ) && (
				<div className="wpmozo_twitter_embedded_follow_button">
					<a className="wpmozo_twitter_embed_follow_button"
						href={ "https://twitter.com/" + twitterUsername }
						data-show-screen-name={ showUsername }
						data-show-count={ showCount }
						data-size={ buttonSize }
						data-dnt={ doNotTrack }
						data-name={ twitterUsername }
					>
						{ __( 'Follow', 'wpmozo-blocks-and-addons' ) }
						{ ( true === showUsername ) && ' @' + twitterUsername }
					</a>
				</div>
			) }
		</div>
	</> );
}

export default Save;
