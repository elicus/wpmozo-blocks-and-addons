import { useBlockProps, useInnerBlocksProps,InnerBlocks } from '@wordpress/block-editor';
import generateDynamicStyle from "./style";

export default function save( { attributes } ) {

	const ID = attributes.ID,
		blockProps = useBlockProps.save();

	const innerBlocksProps = useInnerBlocksProps.save( blockProps, {
		allowedBlocks: [ 'wpmozo/image-stack-child' ]
	});

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
