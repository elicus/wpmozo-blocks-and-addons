import { __ } from '@wordpress/i18n';
import { Fragment, useEffect } from "@wordpress/element";
import { useBlockProps, RichText } from '@wordpress/block-editor';

import Inspector from "./inspector";
import generateDynamicStyle from "./style";
import ServerSideRender from '@wordpress/server-side-render';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
export default function Edit(props) {

	const { attributes, setAttributes, clientId } = props;

	attributes.ID = clientId;

	const backImage = (attributes.backImage) ? attributes.backImage : wpmozo_bna_editor_object.placeholderImg;

	// Props change event.
	useEffect( () => {
		const event = new CustomEvent( 'WPMozoBreadcrumbPropsChanged', {
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

			<div id={`block-${attributes.ID}`} { ...useBlockProps( { className: 'wpmozo-bna-breadcrumb-main' } ) } >
				<ServerSideRender
					block="wpmozo/breadcrumb"
					attributes={attributes}
				/>
			</div>
		</Fragment>
	);
}
