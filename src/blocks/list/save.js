import { InnerBlocks, useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';
import generateDynamicStyle from './style';
import { mergeWrapperProps } from '../../common/utils.js';

export default function save({ attributes }) {
    const clientId = attributes.ID,
        TEMPLATE = [
            [ 'wpmozo/list-item', {} ] // Prefills a child block when parent is inserted
        ],
        hideDivider = true === attributes.lastDivider ? "wpmozo-bna-hide-last-divider" : "",
        wrapArgs = attributes?.ID && mergeWrapperProps( { 
			className: 'wpmozo-bna-list' ,
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
