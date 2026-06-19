import { useBlockProps } from '@wordpress/block-editor';
import generateDynamicStyle from './style';
import { wpmozo_is_empty, mergeWrapperProps } from '../../common/utils.js';

export default function save({ attributes }) {
    const WPMozoEditorObj = wpmozo_bna_editor_object;

    const ID = attributes.ID,
        clientId = ID,
        altText = ! wpmozo_is_empty( attributes.altText ) 
            ? attributes.altText
            : 'alt',
        wrapArgs = attributes?.ID && mergeWrapperProps( { 
			className: 'wpmozo-bna-floating-image-item' ,
			style: {}
		}, attributes ),
		wrapProps = wrapArgs?.wrapprops,
		blockProps = useBlockProps.save(wrapProps),
		wrapStyle = wrapArgs?.wrapStyle;

    return (
    <>
        <style>
            { generateDynamicStyle({ attributes, clientId }) }
        </style>
        <div {...blockProps} id={`block-${ID}`}>
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
