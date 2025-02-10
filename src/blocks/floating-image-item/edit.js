
import Inspector from "./inspector";
import Style from "./style";

import { __ } from "@wordpress/i18n";
import {
    useBlockProps,
} from '@wordpress/block-editor';
import { Fragment } from "@wordpress/element";


const Edit = (props) => {

    const attributes = props.attributes,
    setAttributes = props.setAttributes,
    clientId = props.clientId,
    ID = window.wpmozo.getIdByClientid( clientId ),
    altText = ! window.wpmozo.wpmozo_is_empty( attributes.altText ) 
        ? attributes.altText
        : 'alt';
        
    attributes.ID = ID;

	return (
        <Fragment>
            <Inspector {...props} />
            <div className="floating-image-item" id={`block-${clientId}`}>
                <Style 
                attributes={attributes} 
                ID={ID}
                clientId={clientId}  
            />
                <img className="floating-image" src={ attributes.image.url } alt={altText} />
            </div>
        </Fragment>
    );

};

export default Edit;