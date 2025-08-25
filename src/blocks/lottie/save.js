import { useBlockProps } from '@wordpress/block-editor';

export default function save({ attributes }) {
	const blockProps = useBlockProps.save({ className: 'wpmozo-bna-lottie-main' });
	const uniqueID = attributes.ID || attributes.clientId || '';
	const ID = attributes.ID || attributes.clientId || '';

	let dataAttr = {
		animationTrigger: attributes.animationTrigger,
		direction: attributes.direction,
		loop: attributes.loop,
		animationSpeed: attributes.animationSpeed,
		filePath: attributes.filePath,
		clientId: attributes.ID
	}

	return (
		<div {...useBlockProps.save({ className: 'wpmozo-bna-lottie-main' })} id={ID ? `block-${ID}` : undefined}>
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
