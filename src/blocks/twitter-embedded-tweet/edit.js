import { __ } from '@wordpress/i18n';
import { Fragment, useEffect } from "@wordpress/element";
import { useBlockProps } from '@wordpress/block-editor';
import Inspector from './inspector';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import generateDynamicStyle from "./style";
import { mergeWrapperProps } from '../../common/utils.js';

const Edit = ( props ) => {

	const { attributes, setAttributes, clientId } = props,
		wrapArgs = attributes?.ID && mergeWrapperProps( { 
			className: `wpmozo-twitter-embedded-tweet${ attributes?.wrapIsHover ? ' is_hover' : '' }` ,
			style: {}
		}, attributes ),
		wrapProps = wrapArgs?.wrapprops,
		blockProps = useBlockProps(wrapProps),
		wrapStyle = wrapArgs?.wrapStyle;
	// Ensure ID is set once (no render-time mutation).
	useEffect( () => {
		if ( attributes.ID !== clientId ) {
			setAttributes( { ID: clientId } );
		}
		const updates = {};
		if ( attributes.ID !== clientId ) {
			updates.ID = clientId;
		}

		// wrapStyle recalculate karke attribute mein store karo
		if ( attributes.ID ) {
			if ( wrapStyle && wrapStyle !== attributes.wrapStyle ) {
				updates.wrapStyle = wrapStyle;
			}
		}

		if ( Object.keys( updates ).length ) {
			setAttributes( updates );
		}
	}, [ clientId, JSON.stringify( attributes ) ] ); // eslint-disable-line react-hooks/exhaustive-deps.

	// Get attributes.
	const tweetId      = attributes.tweetId ?? '';
	const cards        = ( false === attributes.cards ) ? 'hidden' : 'visible';
	const conversation = ( false === attributes.conversation ) ? 'none' : 'all';
	const doNotTrack   = ( false === attributes.doNotTrack ) ? 0 : 1;
	const theme        = attributes.theme ?? 'light';
	const maxWidth     = attributes.maxWidth ?? 350;

	// Props change event.
	useEffect( () => {
		const event = new CustomEvent( 'WPMozoTwitterEmbeddedTweetPropsChanged', {
			detail: { clientId: attributes.ID }
		} );
		window.dispatchEvent( event );

		const iframe = document.querySelector( 'iframe[name="editor-canvas"]' );
		if ( iframe?.contentWindow ) {
			iframe.contentWindow.dispatchEvent( event );
		}
	}, [ tweetId, cards, conversation, doNotTrack, theme, maxWidth ] );

	return (
		<Fragment>
			<Inspector attributes={attributes} setAttributes={setAttributes} />
			<style>{ generateDynamicStyle( { attributes } ) }</style>

			<div {...blockProps} id={`block-${attributes.ID}`}>
				{ ( attributes.tweetId && '' !== attributes.tweetId ) && (
					<div className="wpmozo_twitter_embedded_tweet_wrapper">
						<blockquote className="wpmozo_tweet"
							data-id={ tweetId }
							data-cards={ cards }
							data-conversation={ conversation }
							data-theme={ theme }
							data-dnt={ doNotTrack }
							data-width={ maxWidth }
						>{ attributes.fallbackContent }</blockquote>
					</div>
				) }
				{ ( ! attributes.tweetId || '' === attributes.tweetId ) && (
					<small>(Builder Placeholder) Please enter tweet id to preview the Twitter Embedded Tweet.</small>
				) }
			</div>
		</Fragment>
	);
}

export default Edit;
