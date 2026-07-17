import { useEffect, useCallback } from "@wordpress/element";
import {useBlockProps} from "@wordpress/block-editor";
import { useDispatch, useSelect } from '@wordpress/data';
import Inspector from './inspector';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */

import classnames from 'classnames';
import generateDynamicStyle from "./style";
import { mergeWrapperProps } from '../../common/utils.js';

export default function Edit(props) {

	const { attributes, setAttributes, isSelected, clientId } = props,
		wrapArgs = attributes?.ID && mergeWrapperProps( { 
			className: `wpmozo-image-stack-item${ attributes?.wrapIsHover ? ' is_hover' : '' }` ,
			style: {}
		}, attributes ),
		wrapProps = wrapArgs?.wrapprops,
		blockProps = useBlockProps(wrapProps),
		wrapStyle = wrapArgs?.wrapStyle;

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
	}, [ clientId, JSON.stringify( attributes ) ] ); // eslint-disable-line react-hooks/exhaustive-deps.

	const {
		image,
		tooltipText
	} = attributes;

	const imageSrc = image && image.url ? image.url : (typeof wpmozo_bna_editor_object !== 'undefined' ? wpmozo_bna_editor_object.placeholderImg : '');
	const defaultedAlt = image && image.alt ? image.alt : '';

	useEffect(() => {
		// Only update if imageSrc is different from the current image.url
		if (imageSrc && (!image || image.url !== imageSrc)) {
			setAttributes({
				image: {
					...(attributes.image || {}),
					url: imageSrc
				}
			});
		}
	}, [imageSrc, image]);

	const parentId = useSelect( ( select ) => {
        return select( 'core/block-editor' ).getBlockRootClientId( clientId );
    }, [ clientId ] );

	const selectedBlockId = useSelect( ( select ) =>
        select( 'core/block-editor' ).getSelectedBlockClientId(),
    [ ] );

	//const { selectBlock } = useDispatch('core/block-editor');

	const handleClick = useCallback( () => {
		// If the child isn't selected already, select it
		if (selectedBlockId !== clientId) {
			wp.data.dispatch('core/block-editor').selectBlock(clientId);

		}

		// If the child is already selected or not selectable, fallback to parent
		else if (parentId) {
			wp.data.dispatch('core/block-editor').selectBlock(parentId);
		}
	}, [selectedBlockId, clientId, parentId] );

	return ( <>
		{ isSelected && ( <Inspector attributes={attributes} setAttributes={setAttributes} /> ) }

		<div {...blockProps} onClick={handleClick}
			className={ classnames( 'wpmozo-image-stack-item', attributes.className ) }
		>
			<span className={`wpmozo-stack-item-wrapper stack-item-type-` + attributes.stackType}>
				{ 'image' === attributes.stackType && (
					<img className="wpmozo-stack-item-img"
						alt={defaultedAlt}
						title={tooltipText}
						src={imageSrc}
						loading="lazy"
					/>
				) }
				{ 'icon' === attributes.stackType && (
					<i className={attributes.stackIcon} title={tooltipText}></i>
				) }
			</span>
		</div>

		<style>{ generateDynamicStyle( { attributes, clientId } ) }</style>
	</> );
}
