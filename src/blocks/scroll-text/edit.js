import { __ } from "@wordpress/i18n";
import { Fragment, useEffect } from "@wordpress/element";
import { useBlockProps } from "@wordpress/block-editor";

import Inspector from "./inspector";
import generateDynamicStyle from "./style";
import { mergeWrapperProps } from '../../common/utils.js';

const Edit = (props) => {

	const { attributes, setAttributes, clientId } = props,
		wrapArgs = attributes?.ID && mergeWrapperProps( { 
			className: `wpmozo-scroll-text${ attributes?.wrapIsHover ? ' is_hover' : '' }` ,
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
			<style>{ generateDynamicStyle( { attributes } ) }</style>

			<div { ...blockProps} id={`block-${attributes.ID}`}>
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
