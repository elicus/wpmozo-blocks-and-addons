import { useBlockProps, useInnerBlocksProps, InnerBlocks } from '@wordpress/block-editor';
import generateDynamicStyle from "./style";
import { mergeWrapperProps } from '../../common/utils.js';

export default function save( { attributes } ) {

	const ID = attributes.ID,
		wrapArgs = attributes?.ID && mergeWrapperProps( { 
			className: 'wpmozo-advanced-button' ,
			style: {}
		}, attributes ),
		wrapProps = wrapArgs?.wrapprops,
		blockProps = useBlockProps.save(wrapProps),
		wrapStyle = wrapArgs?.wrapStyle;

	const innerBlocksProps = useInnerBlocksProps.save( blockProps, {
		allowedBlocks: [ 'wpmozo/image-stack-child' ]
	});
	console.log(attributes);

	return (
		<>
			<style>{ generateDynamicStyle( { attributes, ID } ) }</style>

			<div {...innerBlocksProps} id={`block-${attributes.ID}`} className={ `wpmozo-bna-image-stack ` + attributes.className }>
				<div className={`wpmozo-image-stack-wrap`}>
					<div className={`wpmozo-image-stack-inner`}>
						{/*<InnerBlocks.Content />*/}
						{innerBlocksProps.children}
					</div>
				</div>
			</div>
		</>
	);
}
