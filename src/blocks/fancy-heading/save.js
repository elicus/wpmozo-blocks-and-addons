import { useBlockProps, RichText } from "@wordpress/block-editor";
import { createElement } from "@wordpress/element";
import generateDynamicStyle from './style';
import { mergeWrapperProps } from '../../common/utils.js';

export default function save( { attributes } ) {

	const ID = attributes.ID,
		wrapArgs = attributes?.ID && mergeWrapperProps( { 
			className: 'wpmozo-bna-fancy-heading-wrap ' + attributes.className,
			style: {}
		}, attributes ),
		wrapProps = wrapArgs?.wrapprops,
		blockProps = useBlockProps.save(wrapProps),
		wrapStyle = wrapArgs?.wrapStyle;

	const allText = ( <>
		<span className="wpmozo-bna-pre-text"><RichText.Content value={attributes.preHeading} /></span>
		<span className="wpmozo-bna-main-text"><RichText.Content value={attributes.mainHeading} /></span>
		<span className="wpmozo-bna-post-text"><RichText.Content value={attributes.postHeading} /></span>
	</> );

	const heading = createElement( attributes.headingLevel, {
		className: 'wpmozo-bna-fancy-heading-inner'
	}, allText );

	return ( <>
		<style>{ generateDynamicStyle( { attributes, ID } ) }</style>

		<div id={`block-${ID}`} { ...blockProps}>
			{ heading }
		</div>
	</> );
}
