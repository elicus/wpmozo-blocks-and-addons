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
	// const twitterUsername = attributes.twitterUsername ?? '';

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
	}, [  ] );

	return (
		<Fragment>
			<Inspector attributes={attributes} setAttributes={setAttributes} />
			<style>{ generateDynamicStyle( { attributes, clientId } ) }</style>

			<div {...useBlockProps()} id={`block-${clientId}`}>
				{ ( 1 === 1 ) && (
					<div>Working on module !!</div>
				) }
				{/* { ( ! twitterUsername || '' === twitterUsername ) && ( */}
					{/* <small>(Builder Placeholder) Please enter tweet username to preview the Twitter Follow Button.</small> */}
				{/* ) } */}
			</div>
		</Fragment>
	);
}

export default Edit;
