// deprecated/version-1.js
import generateDynamicStyle from './style';
import { InnerBlocks, useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';

const V1 = {
    attributes: {
        ID: { type: "string" },
		className: { type: "string" },
		btnOrientation: {type: "string",default: "horizontal"},
		buttonAlignment: { type: "string",default:"left" },
		btnVerticalAlign: {type:"string",default: "center"}
    },
    save( { attributes } ) {
        const clientId = attributes.ID,
            TEMPLATE = [
                [ 'wpmozo/advanced-button-child', {} ] // Prefills a child block when parent is inserted
            ];

        return (
            <>
                <style>
                    { generateDynamicStyle({ attributes }) }
                </style>
                {/* Save function output for Advanced Button block */}
                <div {...useBlockProps.save({ className: 'wpmozo-advanced-button' })} id={`block-${clientId}`}>

                    {/* Inner wrapper for child blocks (drop zone area in editor) */}
                    <div class="block-editor-block-list__layout" data-is-drop-zone="true">

                        {/* Renders all nested child blocks inside the parent block */}
                        <InnerBlocks.Content/>
                    </div>
                </div>
            </>
        );
    },
};

export default V1;