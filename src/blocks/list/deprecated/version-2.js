// deprecated/version-2.js
import { InnerBlocks, useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';
import generateDynamicStyle from './style';

const V2 = {
    attributes: {
        ID: { type: "string" },
		className: { type: "string" },

        layout: { type: "string", default: "default" },

        listAlignment: { type: "string", default: "center" },

        globalItemBackgroundGradient: { type: "string" },
        globalItemBackgroundColor: { type: "string" },

        iconFontSize: { type: "number", default: 22 },
        iconColor: {
            type: "string" },

        imageWidth: { type: "number", default: 40 },

        dividerSize: { type: "number", default: 0 },
        dividerStyle: { type: "string", default: "solid" },
        dividerColor: { type: "string", default: "#d3d3d3" },
        dividermargin: { type: "object" },
        lastDivider: { type: "boolean", default: true },

        indentation: { type: "number" },

        linkColor: { type: "string", default: "#000000" },
        linkFontSize: { type: "string" },
        linkFontAppearance: { type: "object", fontStyle: { type: "string" }, fontWeight: { type: "string" }, default: { fontStyle: "", fontWeight: "" } },
        linkLetterSpacing: { type: "string" },
        linkDecoration: { type: "string" },
        linkLetterCase: { type: "string" },
        linkLineHeight: { type: "string" },

        textColor: { type: "string", default: "#222222" },
        textFontSize: { type: "string" },
        textFontAppearance: { type: "object", fontStyle: { type: "string" }, fontWeight: { type: "string" }, default: { fontStyle: "", fontWeight: "" } },
        textLetterSpacing: { type: "string" },
        textDecoration: { type: "string" },
        textLetterCase: { type: "string" },
        textLineHeight: { type: "string" }
    },
    save( { attributes } ) {
        const clientId = attributes.ID,
            TEMPLATE = [
                [ 'wpmozo/list-item', {} ] // Prefills a child block when parent is inserted
            ],
            hideDivider = true === attributes.lastDivider ? "wpmozo-bna-hide-last-divider" : "";

        return (
            <>
                <style>
                    { generateDynamicStyle({ attributes, clientId }) }
                </style>
                <div {...useBlockProps.save({ className: 'wpmozo-bna-list' })} id={`block-${clientId}`}>
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
    },
};

export default V2;