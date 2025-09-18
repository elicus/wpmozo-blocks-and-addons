import { InnerBlocks, useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';
import generateDynamicStyle from './style';

export default function save({ attributes }) {
	const clientId = attributes.ID,
		TEMPLATE = [
			[ 'wpmozo/advanced-button-child', {} ] // Prefills a child block when parent is inserted
		];

	return (
		<>
			<style>
				{ generateDynamicStyle({ attributes }) }
			</style>
			{/* Save function output for Advanced Button block */}
			<div {...useBlockProps.save({ className: 'wpmozo-advanced-button' })} id={`block-${clientId}`}>

				{/* Inner wrapper for child blocks (drop zone area in editor) */}
				<div class="block-editor-block-list__layout" data-is-drop-zone="true">

					{/* Renders all nested child blocks inside the parent block */}
					<InnerBlocks.Content/>
				</div>
			</div>
		</>
	);
}
