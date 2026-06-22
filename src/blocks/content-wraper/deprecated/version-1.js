// deprecated/version-1.js
import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";

const V1 = {
    attributes: {},
    save( { attributes } ) {
        return (
            <div {...useBlockProps.save()}>
                <InnerBlocks.Content />
            </div>
        );
    },
};

export default V1;