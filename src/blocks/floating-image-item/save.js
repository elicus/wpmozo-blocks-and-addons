import { useBlockProps } from '@wordpress/block-editor';
import generateDynamicStyle from './style';
import {wpmozo_is_empty} from '../../common/utils.js';

export default function save({ attributes }) {
    const WPMozoEditorObj = wpmozo_bna_editor_object;

    const ID = attributes.ID,
        clientId = ID,
        altText = ! wpmozo_is_empty( attributes.altText ) 
            ? attributes.altText
            : 'alt';

    return (
    <>
        <style>
            { generateDynamicStyle({ attributes, clientId }) }
        </style>
        <div { ...useBlockProps.save({ className: 'floating-image-item' })} id={`block-${ID}`}>
            { attributes.image &&
            <img className="floating-image" src={( attributes.image.url ) ? attributes.image.url : "" } alt={altText} />
            }
            { !attributes.image &&
                <img className="floating-image" src={WPMozoEditorObj.placeholderImg } alt={altText} />
            }
        </div>
    </>
    );
}
