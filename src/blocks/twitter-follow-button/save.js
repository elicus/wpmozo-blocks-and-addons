import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import generateDynamicStyle from "./style";
import { mergeWrapperProps } from '../../common/utils.js';

const Save = ( { attributes } ) => {

	const { ID, className } = attributes
		wrapArgs = attributes?.ID && mergeWrapperProps( { 
			className: 'wpmozo-twitter-follow-button' ,
			style: {}
		}, attributes ),
		wrapProps = wrapArgs?.wrapprops,
		blockProps = useBlockProps.save(wrapProps),
		wrapStyle = wrapArgs?.wrapStyle;

	// Get attributes.
	const twitterUsername = attributes.twitterUsername ?? '';
	const buttonSize      = attributes.buttonSize ?? 'small';
	const doNotTrack      = ( false === attributes.doNotTrack ) ? 0 : 1;
	const showUsername    = attributes.showUsername ?? false;
	
	return ( <>
		{/* Only output <style> if ID exists. */}
		{ ( ID && '' !== ID ) && (
			<style>{ generateDynamicStyle( { attributes } ) }</style>
		) }

		<div { ...blockProps } id={`block-${ ID }`}>
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
