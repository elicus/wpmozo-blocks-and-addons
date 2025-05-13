import { InnerBlocks, useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';
import generateDynamicStyle from './style';

export default function save({ attributes }) {
    const ID = attributes.ID,
        TEMPLATE = [
            [ 'wpmozo/list-item', {} ] // Prefills a child block when parent is inserted
        ],
        hideDivider = true === attributes.lastDivider ? "wpmozo-bna-hide-last-divider" : "";

    return (
        <>
            <style>
                { generateDynamicStyle({ attributes }) }
            </style> 
            <div {...useBlockProps.save({ className: 'wpmozo-bna-list' })} id={`block-${ID}`}>
                <div>
                    <div className="wpmozo-bna-list-wrapper">
                        <div className={"wpmozo-bna-list-layout wpmozo-bna-list-"+attributes.layout+ " " + hideDivider}>
                            <InnerBlocks.Content/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
