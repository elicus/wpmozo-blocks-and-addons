// deprecated/version-2.js
import { InnerBlocks, useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';
import {wpmozo_is_empty} from '../../../common/utils.js';
import generateDynamicStyle from '../style';

const V2 = {
    attributes: {
        ID: { type: "string" },
		className: { type: "string" },
        images: { type: "array" },
        containerHeight: { type: "string", default: "450px" }
    },
    save( { attributes } ) {
        const clientId = attributes.ID;

        return (
            <>
                <div {...useBlockProps.save({ className: 'wpmozo-bna-floating-image', ID:`block-${clientId}` })}>
                    <div className="wpmozo-bna-floating-image-wrapper">
                        <InnerBlocks.Content/>
                    </div>
                </div>
                <style>
                    { generateDynamicStyle({ attributes, clientId }) }
                </style>
            </>
        );
    },
};

export default V2;