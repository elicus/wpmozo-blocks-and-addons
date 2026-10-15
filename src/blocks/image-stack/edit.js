import { __ } from '@wordpress/i18n';
import { useInnerBlocksProps } from '@wordpress/block-editor';
import {useBlockProps} from "@wordpress/block-editor";
import Inspector from './inspector';
import { Fragment, useEffect } from "@wordpress/element";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

import generateDynamicStyle from "./style";
import { mergeWrapperProps } from '../../common/utils.js';
const ALLOWED_BLOCKS = [ 'wpmozo/image-stack-child' ];
import { createBlock } from '@wordpress/blocks';
import { useSelect, useDispatch } from '@wordpress/data';

export default function Edit(props) {

	const { attributes, setAttributes, isSelected, clientId } = props,
		wrapArgs = attributes?.ID && mergeWrapperProps( { 
			className: `wpmozo-bna-image-stack${ attributes?.wrapIsHover ? ' is_hover' : '' }` ,
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

	const TEMPLATE = [
        [ 'wpmozo/image-stack-child' ] // Prefills a child block when parent is inserted.
    ];
	const { insertBlocks } = useDispatch('core/block-editor');
	const innerBlocks = useSelect(
		(select) => select('core/block-editor').getBlocks(clientId),
		[clientId]
	);
    const addChildBlock = () => {
        const newBlock = createBlock('wpmozo/image-stack-child');
        insertBlocks( newBlock, innerBlocks.length, clientId );
    };
	const innerBlocksProps = useInnerBlocksProps( blockProps, {
		allowedBlocks: ALLOWED_BLOCKS,
		template:TEMPLATE,
		renderAppender:() => (
			<button
				onClick={addChildBlock} // Custom handler to add a new child button
				type="button"
				className="wpmozo-bna-appender components-button block-editor-button-block-appender" // Default Gutenberg button style
				title={ __('Add List Item', 'wpmozo-blocks-and-addons') } // Tooltip text
			>
				{/* Plus (+) icon inside button */}
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" focusable="false">
					<path d="M11 12.5V17.5H12.5V12.5H17.5V11H12.5V6H11V11H6V12.5H11Z"></path>
				</svg>
			</button>
		)}
	)
	useEffect( () => {
		const event = new CustomEvent( 'WPMozoImageStackPropsChanged' );
		window.dispatchEvent( event );

		const iframe = document.querySelector( 'iframe[name="editor-canvas"]' );
		if ( iframe?.contentWindow ) {
			iframe.contentWindow.dispatchEvent( event );
		}
	}, [JSON.stringify(attributes)] );

	return (
		<Fragment>
			<Inspector attributes={attributes} setAttributes={setAttributes} />
			<style>{ generateDynamicStyle( { attributes, clientId, isEdit: true } ) }</style>

			<div {...blockProps}  data-client-id={clientId} data-tooltip-enable={attributes.showTooltip} data-show-arrow={attributes.showArrow} data-trigger={attributes.tooltipTrigger}  >
				<div className={`wpmozo-image-stack-wrap`}>
					<div className={`wpmozo-image-stack-inner`}>
						{innerBlocksProps.children}
					</div>
				</div>
			</div>
		</Fragment>
	);
}
