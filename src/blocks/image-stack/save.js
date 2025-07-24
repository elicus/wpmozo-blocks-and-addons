import { InnerBlocks } from '@wordpress/block-editor';
import generateDynamicStyle from "./style";

export default function save(props) {
	const attributes = props.attributes,
		clientId = props.clientId;

	attributes.ID = clientId;

	return (
		<>
			<style>
				{generateDynamicStyle({attributes, clientId})}
			</style>
			<div className={`wpmozo-bna-image-stack`} >
				<div className={`wpmozo-image-stack-wrap`}>
					<InnerBlocks.Content />
				</div>
			</div>
		</>
	);
}
