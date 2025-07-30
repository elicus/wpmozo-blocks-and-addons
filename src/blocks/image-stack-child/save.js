import classnames from 'classnames';
import { RichText } from '@wordpress/block-editor';

export default function save(props) {

	const { attributes, setAttributes, clientId } = props;

	const ID = attributes.ID ?? clientId;
	if (attributes.ID !== ID) setAttributes({ ID });

	const {
		image,
		tooltipText,
		showTooltip
	} = attributes;

	const imageSrc = image && image.url ? image.url : (typeof wpmozo_bna_editor_object !== 'undefined' ? wpmozo_bna_editor_object.placeholderImg : '');
	const defaultedAlt = image && image.alt ? image.alt : '';

	return (
		<>
			<div
				className={classnames('wpmozo-image-stack-item'
				)} data-id={ID}
			>
				<span className={`wpmozo-stack-item-wrapper stack-item-type-image`}>
					<img
						className="wpmozo-stack-item-img"
						alt={defaultedAlt}
						src={imageSrc}
						loading="lazy"
					/>
				</span>
			</div>
			{true === showTooltip && (
				<div className={`wpmozo-image-stack-tooltip-content`}  data-id={ID}>
					<RichText.Content tagName="p" value={tooltipText} className="wpmozo-image-stack-tooltip-content"/>
				</div>
			)}
		</>
	);
}
