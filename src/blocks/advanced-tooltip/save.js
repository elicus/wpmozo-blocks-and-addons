import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import generateDynamicStyle from "./style";
import { mergeWrapperProps } from '../../common/utils.js';

export default function save(attributes) {
	const wrapArgs = attributes?.ID && mergeWrapperProps( { 
			className: 'wpmozo-advanced-tooltip' ,
			style: {}
		}, attributes ),
		wrapProps = wrapArgs?.wrapprops,
		blockProps = useBlockProps.save(wrapProps),
		wrapStyle = wrapArgs?.wrapStyle;
	return (
		<>
			<style>
				{generateDynamicStyle({attributes})}
			</style>
			<div {...blockProps}>
				<InnerBlocks.Content/>
			</div>
		</>
	);
}
