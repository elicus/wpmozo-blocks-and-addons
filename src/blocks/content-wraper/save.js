import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";
import { mergeWrapperProps } from '../../common/utils.js';

export default function save({ attributes }) {
    return (
        <div {...useBlockProps.save( mergeWrapperProps( {}, attributes ) )}>
            <InnerBlocks.Content />
        </div>
    );
}
