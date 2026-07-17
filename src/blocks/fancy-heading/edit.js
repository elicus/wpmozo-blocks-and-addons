import {__} from "@wordpress/i18n";
import {Fragment, createElement, useEffect} from "@wordpress/element";
import {useBlockProps, RichText, BlockControls} from "@wordpress/block-editor";
import {useState} from "@wordpress/element";
/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import Inspector from "./inspector";
import generateDynamicStyle from "./style";
import { mergeWrapperProps } from '../../common/utils.js';

export default function Edit(props) {

	const { attributes, setAttributes, clientId, isSelected } = props,
		wrapArgs = attributes?.ID && mergeWrapperProps( { 
			className: `wpmozo-fancy-heading${ attributes?.wrapIsHover ? ' is_hover' : '' }` ,
			style: {}
		}, attributes ),
		wrapProps = wrapArgs?.wrapprops,
		blockProps = useBlockProps(wrapProps),
		wrapStyle = wrapArgs?.wrapStyle,
		isEdit = true;

	const ID = clientId;
		// Ensure ID is set once (no render-time mutation).
	useEffect( () => {
		if ( attributes.ID !== clientId ) {
			setAttributes( { ID: clientId } );
		}
		const updates = {};
		if ( attributes.ID !== clientId ) {
			updates.ID = clientId;
		}

		// wrapStyle recalculate karke attribute mein store karo
		if ( attributes.ID ) {
			if ( wrapStyle && wrapStyle !== attributes.wrapStyle ) {
				updates.wrapStyle = wrapStyle;
			}
		}

		if ( Object.keys( updates ).length ) {
			setAttributes( updates );
		}
	}, [ clientId, JSON.stringify( attributes ) ] );

	const [currentHeadingType, setcurrentHeadingType] = useState('');
	const isActiveType = (type) => {
		return (isSelected && type === currentHeadingType) ? 'wpmozo-active-sub-block' : '';
	}

	const allText = ( <>
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
	</> );

	const heading = createElement(attributes.headingLevel, {
		className: 'wpmozo-bna-fancy-heading-inner'
	}, allText);

	return (
		<Fragment>
			<Inspector attributes={attributes} setAttributes={setAttributes} />
			<style>{ generateDynamicStyle( { attributes, clientId, isEdit } ) }</style>

			<div id={`block-${ID}`} { ...blockProps}>
				<div className="wpmozo-bna-fancy-heading-wrap">
					{heading}
				</div>
			</div>
		</Fragment>
	);
}
