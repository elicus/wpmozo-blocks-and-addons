// deprecated/version-1.js
import {InnerBlocks, useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';

const V1 = {
    attributes: {
        // Same as old v1.0.0 attributes
        ID: { type: "string" },
        layout: { type: "string", default: "default", },
        listAlignment: { type: "string", default: "center", },
        globalItemBackgroundGradient: { type: "string", },
        globalItemBackgroundColor: { type: "string", },
        iconFontSize: { type: "number", default: 22, },
        iconColor: { type: "string", },
        imageWidth: { type: "number", default: 40, },
        dividerSize: { type: "number", default: 0, },
        dividerStyle: { type: "string", default: 'solid', },
        dividerColor: { type: "string", default: '#d3d3d3', },
        dividermargin: { type: "object", },
        lastDivider: { type: "boolean", default: true, },
        indentation: { type: "number" },
        textColor: { type: "string", default: "#222222", },
        linkColor: { type: "string", default: "#000000", },
        textFontSize: { type: "string", },
        textFontAppearance: { type: "object", fontStyle: { type: "string", }, fontWeight: { type: "string", }, default: { fontStyle: "", fontWeight: "", } },
        textLetterSpacing: { type: "string", },
        textDecoration: { type: "string", },
        textLetterCase: { type: "string", },
        textLineHeight: { type: "string", },
        linkFontSize: { type: "string", },
        linkFontAppearance: { type: "object", fontStyle: { type: "string", }, fontWeight: { type: "string", }, default: { fontStyle: "", fontWeight: "", } },
        linkLetterSpacing: { type: "string", },
        linkDecoration: { type: "string", },
        linkLetterCase: { type: "string", },
        linkLineHeight: { type: "string", }
    },
    save( { attributes } ) {
        const ID = attributes.ID,
            blockProps = useBlockProps.save({ className: 'wpmozo-bna-list' });
        const TEMPLATE = [
                [ 'wpmozo/list-item', {} ] // Prefills a child block when parent is inserted
            ];
        const hideDivider = true === attributes.lastDivider ? "wpmozo-bna-hide-last-divider" : "";

        return (
            <div { ...blockProps } id={`block-${ID}`}>
                <div>
                    <div className="wpmozo-bna-list-wrapper">
                        <div className={"wpmozo-bna-list-layout wpmozo-bna-list-"+attributes.layout+ " " + hideDivider}>
                            <InnerBlocks.Content/>
                        </div>
                    </div>
                </div>
            </div>
        );
    },
};

export default V1;