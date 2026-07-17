import { InnerBlocks, useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';
import { wpmozo_is_empty, mergeWrapperProps } from '../../common/utils.js';
import generateDynamicStyle from './style';

export default function save({ attributes }) {

    const clientId = attributes.ID,
        wrapArgs = attributes?.ID && mergeWrapperProps( { 
			className: 'wpmozo-bna-floating-image' ,
			style: {}
		}, attributes ),
		wrapProps = wrapArgs?.wrapprops,
		blockProps = useBlockProps.save(wrapProps),
		wrapStyle = wrapArgs?.wrapStyle;

    
    return (
        <>
            <div {...blockProps} id={`block-${clientId}`}>
                <div className="wpmozo-bna-floating-image-wrapper">
                    <InnerBlocks.Content/>
                </div>
            </div>
            <style>
                { generateDynamicStyle({ attributes, clientId }) }
            </style>
        </>
    );
}
