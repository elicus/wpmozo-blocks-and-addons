import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import generateDynamicStyle from "./style";

const Save = ( { attributes } ) => {

	const { ID, className } = attributes;

	// Get attributes.
	const twitterUsername = attributes.twitterUsername ?? '';
	const buttonSize      = attributes.buttonSize ?? 'small';
	const doNotTrack      = ( false === attributes.doNotTrack ) ? 0 : 1;
	const showUsername    = attributes.showUsername ?? false;

	// Only add ID attribute if it exists
	const blockProps = useBlockProps.save( {
		className: className,
		...( ID ? { id: `block-${ ID }` } : {} ),
	} );
	
	return ( <>
		{/* Only output <style> if ID exists. */}
		{ ( ID && '' !== ID ) && (
			<style>{ generateDynamicStyle( { attributes } ) }</style>
		) }

		<div { ...blockProps }>
			{ ( twitterUsername && '' !== twitterUsername ) && (
				<div className="wpmozo_twitter_embedded_follow_button">
					<a className="wpmozo_twitter_embed_follow_button"
						href={ "https://twitter.com/" + twitterUsername }
						data-show-screen-name={ showUsername }
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
