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
			<div {...useBlockProps.save({ className: 'wpmozo-advanced-button' })} id={`block-${clientId}`}>
				<div class="block-editor-block-list__layout" data-is-drop-zone="true">
					<InnerBlocks.Content/>
				</div>
			</div>
		</>
	);
}
