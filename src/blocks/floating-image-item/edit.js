import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import Inspector from './inspector';
import generateDynamicStyle from './style';
import { Fragment, useEffect } from "@wordpress/element";
import { wpmozo_is_empty, mergeWrapperProps } from '../../common/utils.js';
import { useSelect } from '@wordpress/data';
/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */

export default function Edit(props) {
const WPMozoEditorObj = wpmozo_bna_editor_object;
    const attributes = props.attributes,
        setAttributes = props.setAttributes,
        clientId = props.clientId,
        ID = clientId,
        altText = ! wpmozo_is_empty( attributes.altText ) 
            ? attributes.altText
            : (attributes?.image?.title ? attributes.image.title : 'alt'),
        wrapArgs = attributes?.ID && mergeWrapperProps( { 
			className: `floating-image-item wpmozo-bna-floating-image-item${ attributes?.wrapIsHover ? ' is_hover' : '' }` ,
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
    

    return (
        <Fragment>
            <Inspector attributes={attributes} setAttributes={setAttributes} />
            <style>
                { generateDynamicStyle({ attributes, clientId }) }
            </style>
            <div {...blockProps}>
                { attributes.image &&
                <img className="floating-image" src={( attributes.image.url ) ? attributes.image.url : "" } alt={altText} />
                }
                { !attributes.image &&
                <img className="floating-image" src={WPMozoEditorObj.placeholderImg } alt={altText} />
                }

            </div>
        </Fragment>
    );
}
