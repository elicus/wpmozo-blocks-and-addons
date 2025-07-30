import {useBlockProps, RichText} from "@wordpress/block-editor";
import {createElement} from "@wordpress/element";
import generateDynamicStyle from './style';

export default function save({attributes}) {

	const ID = attributes.ID;

	const allText = (
		<>
			<span className="wpmozo-bna-pre-text"><RichText.Content value={attributes.preHeading} /></span>
			<span className="wpmozo-bna-main-text"><RichText.Content value={attributes.mainHeading} /></span>
			<span className="wpmozo-bna-post-text"><RichText.Content value={attributes.postHeading} /></span>
		</>
	);

	const heading = createElement(attributes.headingLevel, {
		className: 'wpmozo-bna-fancy-heading-inner'
	}, allText);

	return (
		<>
			<style>
				{generateDynamicStyle({attributes, ID})}
			</style>
			<div {...useBlockProps.save({className: 'wpmozo-bna-fancy-heading-wrap'})} id={`block-${ID}`}>
				{heading}
			</div>
		</>
	);
}
