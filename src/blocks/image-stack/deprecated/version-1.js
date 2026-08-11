// deprecated/version-1.js
import { useBlockProps, useInnerBlocksProps,InnerBlocks } from '@wordpress/block-editor';
import generateDynamicStyle from "./style";

const V1 = {
	attributes: {
		ID: { type: "string" },
		className: { type: "string" },

		alighment: { type: "string", default: "center" },
		stackItemSize: { type: "number", default: 100 },
		stackItemShrink: { type: "number", default: 40 },
		stackItemSpacing: { type: "number", default: 10 },

		iconSize: { type: "number", default: 38 },
		iconColor: { type: "string" },

		itempadding: { type: "object" },
		itemBorderType: { type: "string", default: "none" },
		itemBorderWidth: { type: "number" },
		borderColor: { type: "string" },
		itemBorderRadius: { type: "number", default: "" },

		tooltipColor: { type: "string",default: "" },
		tooltipBackgroundColor: { type: "string", default: "" },
		showTooltip: { type: "boolean", default: false }
	},
	save( { attributes } ) {
		const ID = attributes.ID,
            blockProps = useBlockProps.save();

        const innerBlocksProps = useInnerBlocksProps.save( blockProps, {
            allowedBlocks: [ 'wpmozo/image-stack-child' ]
        });

        return (
            <>
                <style>{ generateDynamicStyle( { attributes, ID } ) }</style>

                <div {...innerBlocksProps} id={`block-${attributes.ID}`} className={ `wpmozo-bna-image-stack ` + attributes.className }>
                    <div className={`wpmozo-image-stack-wrap`}>
                        <div className={`wpmozo-image-stack-inner`}>
                            {/*<InnerBlocks.Content />*/}
                            {innerBlocksProps.children}
                        </div>
                    </div>
                </div>
            </>
        );
	},
};

export default V1;