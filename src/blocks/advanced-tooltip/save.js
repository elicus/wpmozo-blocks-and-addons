import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import generateDynamicStyle from "./style";

export default function save(attributes) {
	return (
		<>
			<style>
				{generateDynamicStyle({attributes})}
			</style>
			<div {...useBlockProps.save()}>
				<InnerBlocks.Content/>
			</div>
		</>
	);
}
