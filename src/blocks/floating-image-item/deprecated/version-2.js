// deprecated/version-2.js
import { useBlockProps } from '@wordpress/block-editor';
import generateDynamicStyle from '../style';
import {wpmozo_is_empty} from '../../../common/utils.js';

const V2 = {
    attributes: {
        ID: { type: "string" },
		className: { type: "string" },
        image: { type: "object" },
        imagewidth: { type: "string", default: "200px" },
        imageheight: { type: "string" },
        altText: { type: "string", default: "" },
        horizontalAlign: { type: "string" },
        verticalAlign: { type: "string" },
        animationEffect: { type: "string", default: "up_down" },
        animationDelay: { type: "number", default: 0 },
        animationDuration: { type: "number", default: 4000 },
        animationRepeat: { type: "string", default: "infinite" },
        speedCurve: { type: "string" },
        imageborderRadius: { type: "string" },
        imageborder: { type: "object" }
    },
    save( { attributes } ) {
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
                <div className="floating-image-item" id={`block-${ID}`}>
                    { attributes.image &&
                    <img className="floating-image" src={( attributes.image.url ) ? attributes.image.url : "" } alt={altText} />
                    }
                    { !attributes.image &&
                        <img className="floating-image" src={WPMozoEditorObj.placeholderImg } alt={altText} />
                    }
                </div>
            </>
        );
    },
};

export default V2;