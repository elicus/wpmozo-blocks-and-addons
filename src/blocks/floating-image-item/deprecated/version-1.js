// deprecated/version-1.js
import { useBlockProps } from '@wordpress/block-editor';
import {wpmozo_is_empty} from "../../../common/utils";

const V1 = {
    attributes: {
        // Same as old v1.0.0 attributes
        ID: { type: "string", },
        image: { type: "object", },
        imagewidth: { type: "string", },
        imageheight: { type: "string", },
        altText: { type: "string", },
        horizontalAlign: { type: "string", },
        verticalAlign: { type: "string", },
        animationEffect: { type: "string", default: "no_effect" },
        animationDelay: { type: "number", default: 0 },
        animationDuration: { type: "number", default: 4000 },
        animationRepeat: { type: "string", default: "infinite" },
        speedCurve: { type: "string", },
        imageborderRadius: { type: "string", },
        imageborder: { type: "object", }
    },
    save( { attributes } ) {
        const ID = attributes.ID,
            altText = !wpmozo_is_empty( attributes.altText ) 
                ? attributes.altText
                : 'alt';
        
        return (
        <div className="floating-image-item" id={`block-${ID}`}>
                <img className="floating-image" src={ attributes.image.url } alt={altText} />
            </div>
        );
    },
};

export default V1;