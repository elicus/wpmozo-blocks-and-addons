
import Inspector from "./inspector";
import Style from "./style";

import { __ } from "@wordpress/i18n";
import { Fragment } from "@wordpress/element";
import {
    InnerBlocks,
    useBlockProps,
    MediaPlaceholder,
    useInnerBlocksProps
} from '@wordpress/block-editor';

import { useRef, useEffect } from 'react';
import { useSelect } from '@wordpress/data';

const Edit = (props) => {

    const wpmozoCoreFun = window.wpmozo,
    attributes = props.attributes,
    setAttributes = props.setAttributes,
    clientId = props.clientId,
    ID = window.wpmozo.getIdByClientid( clientId ),
    blockProps = useBlockProps({ className: 'wpmozo-adfgu-list' });

    const childBlocks = useSelect((select) => {
        return select('core/block-editor').getBlocks(clientId);
    }, [clientId]);

    const childAttributes = childBlocks.map(block => block.attributes);

    const TEMPLATE = [
        [ 'wpmozo/list-item', { text: childAttributes.text} ] // Prefills a child block when parent is inserted
    ];

    attributes.ID = ID;
    const hideDivider = true === attributes.lastDivider ? "wpmozo-adfgu-hide-last-divider" : "";

    return (
        <Fragment>
            <Inspector {...props} />
            <div { ...blockProps } id={`block-${clientId}`}>
                <Style 
                    attributes={attributes} 
                    ID={ID}
                    clientId={clientId}  
                />  
                <div>
                    <div className="wpmozo-adfgu-list-wrapper">
                        <div className={"wpmozo-adfgu-list-layout wpmozo-adfgu-list-" + attributes.layout + " " + hideDivider}>
                            <InnerBlocks allowedBlocks={[ 'wpmozo/list-item' ]} templateLock={false}/>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );

};

export default Edit;