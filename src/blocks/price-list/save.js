import { InnerBlocks, useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';
import generateDynamicStyle from './style';
import { mergeWrapperProps } from '../../common/utils.js';

export default function save({ attributes }) {
    const clientId = attributes.ID,
        TEMPLATE = [
            [ 'wpmozo/price-list-item', {} ] // Prefills a child block when parent is inserted
        ],
        wrapArgs = attributes?.ID && mergeWrapperProps( { 
			className: 'wpmozo-bna-price-list' ,
			style: {}
		}, attributes ),
		wrapProps = wrapArgs?.wrapprops,
		blockProps = useBlockProps.save(wrapProps),
		wrapStyle = wrapArgs?.wrapStyle;

    return (
        <>
            <style>
                { generateDynamicStyle({ attributes, clientId }) }
            </style>
            <div {...blockProps} id={`block-${clientId}`}>
                <InnerBlocks.Content/>
            </div>
        </>
    );
}
