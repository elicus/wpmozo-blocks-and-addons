import { InnerBlocks, useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';
import generateDynamicStyle from './style';

export default function save({ attributes }) {
    const clientId = attributes.ID,
        TEMPLATE = [
            [ 'wpmozo/image-accordion-item', {} ] // Prefills a child block when parent is inserted
        ];

    return (
        <>
            <style>
                { generateDynamicStyle({ attributes, clientId }) }
            </style>
            <div {...useBlockProps.save({ className: 'wpmozo-bna-image-accordion' })} id={`block-${clientId}`}>
                <InnerBlocks.Content/>
            </div>
        </>
    );
}
