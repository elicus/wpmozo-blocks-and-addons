import { InnerBlocks } from '@wordpress/block-editor';
import generateDynamicStyle from "./style";

export default function save({ attributes }) {

	const ID = attributes.ID;

	return (
		<>
			<style>
				{generateDynamicStyle({attributes, ID})}
			</style>
			<div className={`wpmozo-bna-image-stack`} id={`block-${attributes.ID}`} >
				<div className={`wpmozo-image-stack-wrap`}>
					<div className={`wpmozo-image-stack-inner`}>
						<InnerBlocks.Content />
					</div>
				</div>
			</div>
		</>
	);
}
