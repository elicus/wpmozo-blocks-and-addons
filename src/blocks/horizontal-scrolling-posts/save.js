import {useBlockProps, InnerBlocks} from '@wordpress/block-editor';
import generateDynamicStyle from "./style";
import { mergeWrapperProps } from '../../common/utils.js';

export default function save({ attributes }) {

	const { ID, className } = attributes,
		wrapArgs = attributes?.ID && mergeWrapperProps( { 
			className: 'wpmozo-horizontal-scrolling-posts' ,
			style: {}
		}, attributes ),
		wrapProps = wrapArgs?.wrapprops,
		blockProps = useBlockProps.save(wrapProps),
		wrapStyle = wrapArgs?.wrapStyle;

    return (
		<>
			{/*Only output <style> if ID exists.*/}
			{(ID && '' !== ID) && (
				<style>{generateDynamicStyle({attributes})}</style>
			)}
			<div {...blockProps} id={`block-${ID}`}>
				<InnerBlocks.Content/>
			</div>
		</>
	);
}

