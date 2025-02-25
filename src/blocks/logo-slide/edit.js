
import Inspector from "./inspector";
import Style from "./style";

import { __ } from "@wordpress/i18n";
import {
    useBlockProps,
} from '@wordpress/block-editor';
import { Fragment } from "@wordpress/element";


const Edit = (props) => {

    const wpmozoCoreFun = window.wpmozo,
        attributes = props.attributes,
        clientId = props.clientId,
        ID = wpmozoCoreFun.getIdByClientid( clientId ),
        altText = ! wpmozoCoreFun.wpmozo_is_empty( attributes.altText ) 
            ? attributes.altText
            : 'alt',
        blockProps = useBlockProps({
            className:"swiper-slide"
        });

    attributes.ID = ID;

	return (
        <Fragment>
            <Inspector {...props} />
            <div className="swiper-slide" id={`block-${clientId}`} data-client-id={clientId}>
                <Style 
                attributes={attributes} 
                ID={ID}
                clientId={clientId}  
            />
                <div className="logo-wrap">
                    <img className="logo-img" src={ attributes.logo.url } alt={altText} />
                </div>
            </div>
        </Fragment>
    );

};

export default Edit;