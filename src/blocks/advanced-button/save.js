import { InnerBlocks, useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';
import generateDynamicStyle from './style';
import { mergeWrapperProps } from '../../common/utils.js';

export default function save({ attributes }) {
	const clientId = attributes.ID,
		TEMPLATE = [
			[ 'wpmozo/advanced-button-child', {} ] // Prefills a child block when parent is inserted
		],
		wrapArgs = attributes?.ID && mergeWrapperProps( { 
			className: 'wpmozo-advanced-button' ,
			style: {}
		}, attributes ),
		wrapProps = wrapArgs?.wrapprops,
		blockProps = useBlockProps.save(wrapProps),
		wrapStyle = wrapArgs?.wrapStyle;


	return (
		<>
			<style>
				{ `${ generateDynamicStyle({ attributes }) }` }
			</style>
			{/* Save function output for Advanced Button block */}
			<div {...blockProps} id={`block-${clientId}`}>

				{/* Inner wrapper for child blocks (drop zone area in editor) */}
				<div class="block-editor-block-list__layout" data-is-drop-zone="true">

					{/* Renders all nested child blocks inside the parent block */}
					<InnerBlocks.Content/>
				</div>
			</div>
		</>
	);
}
