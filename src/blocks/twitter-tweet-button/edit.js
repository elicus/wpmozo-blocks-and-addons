import { __ } from '@wordpress/i18n';
import { Fragment, useEffect } from '@wordpress/element';
import { useBlockProps } from '@wordpress/block-editor';
import Inspector from './inspector';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import generateDynamicStyle from "./style";

const Edit = ( props ) => {

	const { attributes, setAttributes, clientId } = props;

	// Ensure ID is set once (no render-time mutation).
	useEffect( () => {
		if ( attributes.ID !== clientId ) {
			setAttributes( { ID: clientId } );
		}
	}, [ clientId ] ); // eslint-disable-line react-hooks/exhaustive-deps.

	// Get attributes.
	const customText = attributes.customText ?? '';
	const customUrl  = attributes.customUrl ?? '';
	const hashtags   = attributes.hashtags ?? '';
	const via        = attributes.via ?? '';
	const related    = attributes.related ?? '';
	const doNotTrack = ( false === attributes.doNotTrack ) ? 0 : 1;
	
	const buttonSize = attributes.buttonSize ?? 'small';

	// Props change event.
	useEffect( () => {
		const event = new CustomEvent( 'WPMozoTwitterShareButtonPropsChanged', {
			detail: { clientId: attributes.ID }
		} );
		window.dispatchEvent( event );

		const iframe = document.querySelector( 'iframe[name="editor-canvas"]' );
		if ( iframe?.contentWindow ) {
			iframe.contentWindow.dispatchEvent( event );
		}
	}, [ customText, customUrl, hashtags, via, related, doNotTrack, buttonSize ] );

	return (
		<Fragment>
			<Inspector attributes={attributes} setAttributes={setAttributes} />
			<style>{ generateDynamicStyle( { attributes } ) }</style>

			<div {...useBlockProps()} id={`block-${attributes.ID}`}>
				<div className="wpmozo_twitter_embedded_tweet_button">
					<a className="wpmozo_twitter_embed_tweet_button"
						href="https://x.com/intent/tweet"
						data-text={ customText }
						data-url={ customUrl }
						data-size={ buttonSize }
						data-dnt={ doNotTrack }
						data-hashtags={ hashtags }
						data-via={ via }
						data-related={ related }
					>Tweet</a>
				</div>
			</div>
		</Fragment>
	);
}

export default Edit;
