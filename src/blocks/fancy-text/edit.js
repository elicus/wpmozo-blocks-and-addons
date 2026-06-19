import Inspector from "./inspector";
import generateDynamicStyle from "./style";

import {__} from "@wordpress/i18n";
import {Fragment, useEffect} from "@wordpress/element";
import {useBlockProps, RichText} from "@wordpress/block-editor";
import { mergeWrapperProps } from '../../common/utils.js';
/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */

export default function Edit(props) {

	let attributes = props.attributes,
		clientId = props.clientId,
		setAttributes = props.setAttributes,
		position = '',
		wrapArgs = attributes?.ID && mergeWrapperProps( { 
			className: `wpmozo-bna-fancy-text-wrap${ attributes?.wrapIsHover ? ' is_hover' : '' }` ,
			style: {}
		}, attributes ),
		wrapProps = wrapArgs?.wrapprops,
		blockProps = useBlockProps(wrapProps),
		wrapStyle = wrapArgs?.wrapStyle;

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


	if ('line' === attributes.separatorType) {
		if ('onlySeparator' === attributes.lineUseWith) {
			position = 'align-none';
		} else if ('textSeparator' === attributes.lineUseWith) {
			position = `align-${undefined !== attributes.textAlign ? attributes.textAlign : 'none'}`;
		} else if ('iconSeparator' === attributes.lineUseWith) {
			position = `align-${attributes.iconPosition}`;
		} else {
			position = `align-${attributes.imagePosition}`;
		}

	} else {
		position = '';
	}
	return (
		<Fragment>
			<Inspector attributes={attributes} setAttributes={setAttributes}/>
			<style>
				{generateDynamicStyle({attributes, clientId})}
			</style>
			<div {...blockProps} id={`block-${attributes.ID}`}>
				<RichText
					className={`wpmozo-bna-fancy-text-inner ${attributes.textStyle}`}
					tagName='div'
					value={attributes.fancyText}
					onChange={(newValue) => setAttributes({fancyText: newValue})}
					placeholder={attributes.fancyText}
				/>
			</div>
		</Fragment>
	);
}
