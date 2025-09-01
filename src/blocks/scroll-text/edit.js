import { __ } from "@wordpress/i18n";
import { Fragment, useEffect } from "@wordpress/element";
import { useBlockProps } from "@wordpress/block-editor";

import Inspector from "./inspector";
import generateDynamicStyle from "./style";

const Edit = (props) => {

	const { attributes, setAttributes, clientId } = props;

	// Ensure ID is set once (no render-time mutation).
	useEffect( () => {
		if ( ! attributes.ID && clientId ) {
			setAttributes( { ID: clientId } );
		}
	}, [ clientId ] ); // eslint-disable-line react-hooks/exhaustive-deps.

	useEffect( () => {
		const event = new CustomEvent( 'WPMozoScrollTextPropsChanged' );
		window.dispatchEvent( event );

		const iframe = document.querySelector( 'iframe[name="editor-canvas"]' );
		if ( iframe?.contentWindow ) {
			iframe.contentWindow.dispatchEvent( event );
		}
	}, [props] );

	return (
		<Fragment>
			<Inspector attributes={attributes} setAttributes={setAttributes} />
			<style>{ generateDynamicStyle( { attributes, clientId } ) }</style>

			<div { ...useBlockProps() } id={`block-${attributes.ID}`}>
				<div className="wpmozo-scroll-text-wrap"
					data-scroll_effect={ attributes.scrollEffect || 'fade' }
					data-split={ attributes.splitBy || 'word' }
					data-animation_start_element_pos={ attributes.animationStartElementPos || '0%' }
					data-animation_start_viewport_pos={ attributes.animationStartViewportPos || '80%' }
					data-animation_end_element_pos={ attributes.animationEndElementPos || '0%' }
					data-animation_end_viewport_pos={ attributes.animationEndViewportPos || '40%' }
				>
					<div className="wpmozo-scroll-text-inner">
						{ attributes.scrollText || __( 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non augue eget est vestibulum ultrices eu in leo. Quisque sem diam, finibus ac condimentum eu, finibus id arcu', 'wpmozo-blocks-and-addons' ) }
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default Edit;
