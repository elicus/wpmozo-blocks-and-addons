import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import Inspector from './inspector';
import generateDynamicStyle from './style';
import { Fragment } from "@wordpress/element";
import {wpmozo_is_empty} from '../../common/utils.js';
import { useSelect } from '@wordpress/data';
/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

export default function Edit(props) {
const WPMozoEditorObj = wpmozo_bna_editor_object;
    const attributes = props.attributes,
        setAttributes = props.setAttributes,
        clientId = props.clientId,
        ID = clientId,
        altText = ! wpmozo_is_empty( attributes.altText ) 
            ? attributes.altText
            : 'alt';
        attributes.ID = ID;

    return (
        <Fragment>
            <Inspector attributes={attributes} setAttributes={setAttributes} />
            <style>
                { generateDynamicStyle({ attributes, clientId }) }
            </style>
            <div { ...useBlockProps({ className: 'floating-image-item' }) }>
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
