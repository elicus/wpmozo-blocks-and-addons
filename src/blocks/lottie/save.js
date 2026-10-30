import { useBlockProps } from '@wordpress/block-editor';
import { mergeWrapperProps } from '../../common/utils.js';

export default function save({ attributes }) {
	const uniqueID = attributes.ID || attributes.clientId || '';
	const ID = attributes.ID || attributes.clientId || '',
		wrapArgs = attributes?.ID && mergeWrapperProps( { 
			className: 'wpmozo-bna-lottie-main' ,
			style: {}
		}, attributes ),
		wrapProps = wrapArgs?.wrapprops,
		blockProps = useBlockProps.save(wrapProps),
		wrapStyle = wrapArgs?.wrapStyle;

	let dataAttr = {
		animationTrigger: attributes.animationTrigger,
		direction: attributes.direction,
		loop: attributes.loop,
		animationSpeed: attributes.animationSpeed,
		filePath: attributes.filePath,
		clientId: attributes.ID
	}

	return (
		<div {...blockProps} id={ID ? `block-${ID}` : undefined}>
			<div className="wpmozo-bna-lottie" id={uniqueID}>
				<div className="wpmozo-bna-lottie-wrapper">
					<div
						className="wpmozo-bna-lottie-params"
						id={`wpmozo-bna-lottie-params-${uniqueID}`}
						data-attr={JSON.stringify(dataAttr)}
					></div>
				</div>
			</div>
		</div>
	);
}
