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
			className: `wpmozo-facebook-live${ attributes?.wrapIsHover ? ' is_hover' : '' }` ,
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
	const fbAppId      = attributes.fbAppId ?? '';
	const buttonLayout = attributes.buttonLayout ?? '';
	const pageURL      = attributes.pageURL ?? 'https://wpmozoblocks.com/';
	const lazyLoading  = attributes.lazyLoading ?? '';
	const buttonSize   = attributes.buttonSize ?? 'small';

	// Props change event.
	useEffect( () => {
		const event = new CustomEvent( 'WPMozoFacebookLikePropsChanged', {
			detail: { clientId: clientId }
		} );
		window.dispatchEvent( event );

		const iframe = document.querySelector( 'iframe[name="editor-canvas"]' );
		if ( iframe?.contentWindow ) {
			iframe.contentWindow.dispatchEvent( event );
		}
	}, [ fbAppId, buttonLayout, pageURL, buttonSize ] );

	return (
		<Fragment>
			<Inspector attributes={attributes} setAttributes={setAttributes} />
			<style>{ generateDynamicStyle( { attributes, isEdit: true } ) }</style>

			<div {...blockProps} id={`block-${attributes.ID}`}>
				{ ( fbAppId && '' !== fbAppId ) && (
					<div className="fb-like"
						data-fb-app={ fbAppId }
						data-href={ pageURL }
						data-layout={ buttonLayout }
						data-size={ buttonSize }
						data-lazy={ lazyLoading }
					></div>
				) }
				{ ( ! fbAppId || '' === fbAppId ) && (
					<small>(Builder Placeholder) Please enter facebook app id to preview the facebook share.</small>
				) }
			</div>
		</Fragment>
	);
}

export default Edit;
