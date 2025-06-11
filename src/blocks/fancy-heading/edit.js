import {__} from "@wordpress/i18n";
import {Fragment, createElement} from "@wordpress/element";
import {useBlockProps, RichText, BlockControls} from "@wordpress/block-editor";
import {useState} from "@wordpress/element";
import {getIdByClientid} from '../../common/utils';
/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import Inspector from "./inspector";
import generateDynamicStyle from "./style";

export default function Edit(props) {

	let attributes = props.attributes,
		clientId = props.clientId,
		ID = getIdByClientid(clientId),
		blockProps = useBlockProps(),
		isSelected = props.isSelected,
		setAttributes = props.setAttributes;

	attributes.ID = ID;

	const [currentHeadingType, setcurrentHeadingType] = useState('');
	const isActiveType = (type) => {
		return (isSelected && type === currentHeadingType) ? 'wpmozo-active-sub-block' : '';
	}
	const activeTypeText = () => {
		let type = __('Pre', 'wpmozo-blocks-and-addons');
		if ('t1' === currentHeadingType) {
			type = __('Pre', 'wpmozo-blocks-and-addons');
		} else if ('t2' === currentHeadingType) {
			type = __('Main', 'wpmozo-blocks-and-addons');
		} else if ('t3' === currentHeadingType) {
			type = __('Post', 'wpmozo-blocks-and-addons');
		}
		return type;
	}

	const allText = (
		<>
			<RichText
				className={`wpmozo-bna-pre-text ${isActiveType('t1')}`}
				tagName='span'
				value={attributes.preHeading}
				onChange={(newValue) => setAttributes({preHeading: newValue})}
				placeholder={__('Pre', 'wpmozo-blocks-and-addons')}
				onFocus={() => setcurrentHeadingType('t1')}
			/>
			<RichText
				className={`wpmozo-bna-main-text ${isActiveType('t2')}`}
				tagName='span'
				value={attributes.mainHeading}
				onChange={(newValue) => setAttributes({mainHeading: newValue})}
				placeholder={__('Main', 'wpmozo-blocks-and-addons')}
				onFocus={() => setcurrentHeadingType('t2')}
			/>
			<RichText
				className={`wpmozo-bna-post-text ${isActiveType('t3')}`}
				tagName='span'
				value={attributes.postHeading}
				onChange={(newValue) => setAttributes({postHeading: newValue})}
				placeholder={__('Post', 'wpmozo-blocks-and-addons')}
				onFocus={() => setcurrentHeadingType('t3')}
			/>
		</>
	);

	const heading = createElement(attributes.headingLevel, {
		className: 'wpmozo-bna-fancy-heading-inner'
	}, allText);

	return (
		<Fragment>
			<Inspector attributes={attributes} setAttributes={setAttributes}/>
			<style>
				{generateDynamicStyle({attributes, clientId})}
			</style>
			<div {...blockProps} id={`block-${attributes.ID}`}>
				<div className="wpmozo-bna-fancy-heading-wrap">
					{heading}
				</div>
			</div>
		</Fragment>
	);
}
