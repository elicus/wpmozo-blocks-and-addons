import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';
import {wpmozo_is_empty} from "../../../common/utils";

const deprecatedSave = ({ attributes }) => {
    const ID = attributes.ID,
        blockProps = useBlockProps.save();

    let innerBlocks = [],
       innerBlocksProps = null;

    if (  !wpmozo_is_empty( attributes.images ) ) {
          
        attributes.images.map((image) => {
            innerBlocks.push(
                [ 
                    'wpmozo/floating-image-item',
                    {
                        image: image
                    }
                ]
            )
        });

        innerBlocksProps = useInnerBlocksProps.save( blockProps, {
            allowedBlocks: [ 'wpmozo/floating-image-item' ],
            template: innerBlocks,
        });

    }

    if( wpmozo_is_empty( innerBlocks ) ) {
        return null;
    }

    return (
        <div {...innerBlocksProps} id={`block-${ID}`}>
            <div className="wpmozo-bna-floating-image-wrapper">
                { innerBlocksProps.children }
            </div>
        </div>
    );
};

export default {
    attributes: {
        // Same as old v1.0.0 attributes
        ID: { type: "string", },
        images: { type: "array", },
        containerHeight: { type: "string", default: "450px" }
    },
    save: deprecatedSave,
};
