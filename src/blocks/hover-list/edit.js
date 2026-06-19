import { __ } from '@wordpress/i18n';
import { Fragment, useEffect } from "@wordpress/element";
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import { useSelect, useDispatch  } from '@wordpress/data';
import { createBlock } from '@wordpress/blocks';

import Inspector from './inspector';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';
import generateDynamicStyle from "./style";
import { mergeWrapperProps } from '../../common/utils.js';

const Edit = ( props ) => {

	const { attributes, setAttributes, clientId } = props,
		wrapArgs = attributes?.ID && mergeWrapperProps( { 
			className: `wpmozo-hover-list${ attributes?.wrapIsHover ? ' is_hover' : '' }` ,
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

	// Re-init the js.
	useEffect( () => {
		const event = new CustomEvent( 'WPMozoHoverListPropsChanged' );
		window.dispatchEvent( event );

		const iframe = document.querySelector( 'iframe[name="editor-canvas"]' );
		if ( iframe?.contentWindow ) {
			iframe.contentWindow.dispatchEvent( event );
		}
	}, [props] );

	// Child blocks.
	const childBlocks = useSelect( ( select ) => {
		return select( 'core/block-editor' ).getBlocks( clientId );
	}, [ clientId ] );

	const childAttributes = childBlocks.map( block => block.attributes );

	const innerBlocks = useSelect( ( select ) => 
		select( 'core/block-editor' ).getBlocks( clientId ),
	[ clientId ] );

	const { insertBlocks } = useDispatch( 'core/block-editor' );
	const addChildBlock = () => {
		const newBlock = createBlock( 'wpmozo/hover-list-item', { title: childAttributes.title } );
		insertBlocks( newBlock, innerBlocks.length, clientId );
	};

	return (
		<Fragment>
			<Inspector attributes={attributes} setAttributes={setAttributes} />
			<style>{ generateDynamicStyle( { attributes } ) }</style>

			<div {...blockProps} id={`block-${attributes.ID}`}>
				<div className="wpmozo-bna-hover-list-wrapper">
					<div className="wpmozo-bna-hover-list-cursor"></div>
					<div className="wpmozo-bna-hover-list-inner">
						{/* InnerBlocks allows adding child button blocks inside this parent */}
						<InnerBlocks
							templateLock={false} // Child blocks can be added/removed freely.
							orientation="horizontal"
							template={ [
								// Prefills a child block when parent is inserted.
								[ 'wpmozo/hover-list-item', { title: childAttributes.title } ],
								[ 'wpmozo/hover-list-item', { title: childAttributes.title } ],
								[ 'wpmozo/hover-list-item', { title: childAttributes.title } ],
							] } // Default block template (predefined structure).

							// Custom appender button for adding new child blocks.
							renderAppender={ () => (
								<button type="button"
									onClick={ addChildBlock } // Custom handler to add a new child button.
									className="components-button block-editor-button-block-appender" // Default Gutenberg button style.
									title={ __( 'Add New List Item', 'wpmozo-blocks-and-addons' ) } // Tooltip text.
								>
									{/* Plus (+) icon inside button. */}
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" focusable="false">
										<path d="M11 12.5V17.5H12.5V12.5H17.5V11H12.5V6H11V11H6V12.5H11Z"></path>
									</svg>
								</button>
							) }
						/>
					</div>
				</div>
			</div>
		</Fragment>
	);
}

export default Edit;