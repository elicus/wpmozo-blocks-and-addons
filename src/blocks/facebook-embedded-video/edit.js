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
		setAttributes( { ID: clientId } );
	}, [ clientId ] ); // eslint-disable-line react-hooks/exhaustive-deps.

	// Get attributes.
	const fbAppId         = attributes.fbAppId ?? '';
	const videoURL        = attributes.videoURL ?? '';
	const frameWidth      = attributes.frameWidth ?? 450;
	const autoplay        = attributes.autoplay ?? false;
	const allowFullScreen = attributes.allowFullScreen ?? false;
	const displayText     = attributes.displayText ?? false;
	const displayCaption  = attributes.displayCaption ?? false;
	const lazyLoading     = attributes.lazyLoading ?? false;

	// Props change event.
	useEffect( () => {
		const event = new CustomEvent( 'WPMozoFacebookEmbeddedVideoPropsChanged', {
			detail: { clientId: attributes.ID }
		} );
		window.dispatchEvent( event );

		const iframe = document.querySelector( 'iframe[name="editor-canvas"]' );
		if ( iframe?.contentWindow ) {
			iframe.contentWindow.dispatchEvent( event );
		}
	}, [ props ] );

	return (
		<Fragment>
			<Inspector attributes={attributes} setAttributes={setAttributes} />
			<style>{ generateDynamicStyle( { attributes, clientId } ) }</style>

			<div {...useBlockProps()} id={`block-${attributes.ID}`}>
				{ ( fbAppId && '' !== fbAppId && videoURL && '' !== videoURL ) && (
					<div className="wpmozo_fb_embedded_video_wrapper">
						<div className="fb-video"
							data-fb-app={ fbAppId }
							data-href={ videoURL }
							data-width={ frameWidth + 'px' }
							data-autoplay={ autoplay }
							data-allowfullscreen={ allowFullScreen }
							data-show-text={ displayText }
							data-show-captions={ displayCaption }
							data-lazy={ lazyLoading }
						></div>
					</div>
				) }
				{ ( ! fbAppId || '' === fbAppId || ! videoURL || '' === videoURL ) && (
					<small>(Builder Placeholder) Please enter facebook app id and video URL to preview the facebook embedded video.</small>
				) }
			</div>
		</Fragment>
	);
}

export default Edit;
