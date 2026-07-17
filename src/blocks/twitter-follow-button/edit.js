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
import { mergeWrapperProps } from '../../common/utils.js';

const Edit = ( props ) => {

	const { attributes, setAttributes, clientId } = props,
		wrapArgs = attributes?.ID && mergeWrapperProps( { 
			className: `wpmozo-twitter-follow-button${ attributes?.wrapIsHover ? ' is_hover' : '' }` ,
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
	const twitterUsername = attributes.twitterUsername ?? '';
	const buttonSize      = attributes.buttonSize ?? 'small';
	const doNotTrack      = ( false === attributes.doNotTrack ) ? 0 : 1;
	const showUsername    = attributes.showUsername ?? false;

	// Props change event.
	useEffect( () => {
		const event = new CustomEvent( 'WPMozoTwitterFollowButtonPropsChanged', {
			detail: { clientId: attributes.ID }
		} );
		window.dispatchEvent( event );

		const iframe = document.querySelector( 'iframe[name="editor-canvas"]' );
		if ( iframe?.contentWindow ) {
			iframe.contentWindow.dispatchEvent( event );
		}
	}, [ twitterUsername, buttonSize, doNotTrack, showUsername ] );

	return (
		<Fragment>
			<Inspector attributes={attributes} setAttributes={setAttributes} />
			<style>{ generateDynamicStyle( { attributes } ) }</style>

			<div {...blockProps} id={`block-${attributes.ID}`}>
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
				{ ( ! twitterUsername || '' === twitterUsername ) && (
					<small>(Builder Placeholder) Please enter tweet username to preview the Twitter Follow Button.</small>
				) }
			</div>
		</Fragment>
	);
}

export default Edit;
