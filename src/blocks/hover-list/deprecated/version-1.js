// deprecated/version-1.js
import { __ } from '@wordpress/i18n';
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import generateDynamicStyle from "./style";

const V1 = {
    attributes: {
        ID: { type: "string" },
		className: { type: "string" },
		isLastChild: { type: "boolean", default: false },

		dividerSize: { type: "number", default: 0 },
		dividerStyle: { type: "string", default: "solid" },
		dividerColor: { type: "string", default: "#d3d3d3" },
		dividermargin: { type: "object" },
		dividerHideLast: { type: "boolean", default: false },

		titleWidth: { type: "number", default: 20 },
		titleAlign: { type: "string" },
		titleColor: { type: "string" },
		titleFontSize: { type: "string", default: "20px" },
		titleLetterSpacing: { type: "string" },
		titleDecoration: { type: "string" },
		titleLetterCase: { type: "string" },
		titleLineHeight: { type: "string" },
		titleFontAppearance: {
			type: "object",
			default: { fontStyle: "", fontWeight: "" }
		},
		titleFontStyle: { type: "string" },
		titleFontWeight: { type: "string" },

		titleHoverColor: { type: "string" },
		titleHoverFontSize: { type: "string" },
		titleHoverLetterSpacing: { type: "string" },
		titleHoverDecoration: { type: "string" },
		titleHoverLetterCase: { type: "string" },
		titleHoverLineHeight: { type: "string" },
		titleHoverFontAppearance: {
			type: "object",
			default: { fontStyle: "", fontWeight: "" }
		},
		titleHoverFontStyle: { type: "string" },
		titleHoverFontWeight: { type: "string" },

		subtitleColor: { type: "string" },
		subtitleFontSize: { type: "string", default: "16px" },
		subtitleLetterSpacing: { type: "string" },
		subtitleDecoration: { type: "string" },
		subtitleLetterCase: { type: "string" },
		subtitleLineHeight: { type: "string" },
		subtitleFontAppearance: {
			type: "object",
			default: { fontStyle: "", fontWeight: "" }
		},
		subtitleFontStyle: { type: "string" },
		subtitleFontWeight: { type: "string" },

		subtitleHoverColor: { type: "string" },
		subtitleHoverFontSize: { type: "string" },
		subtitleHoverLetterSpacing: { type: "string" },
		subtitleHoverDecoration: { type: "string" },
		subtitleHoverLetterCase: { type: "string" },
		subtitleHoverLineHeight: { type: "string" },
		subtitleHoverFontAppearance: {
			type: "object",
			default: { fontStyle: "", fontWeight: "" }
		},
		subtitleHoverFontStyle: { type: "string" },
		subtitleHoverFontWeight: { type: "string" },

		descriptionWidth: { type: "number", default: 40 },
		descriptionpadding: { type: "object", default: { left: "10px", right: "10px" } },
		descriptionColor: { type: "string" },
		descriptionFontSize: { type: "string", default: "16px" },
		descriptionLetterSpacing: { type: "string" },
		descriptionDecoration: { type: "string" },
		descriptionLetterCase: { type: "string" },
		descriptionLineHeight: { type: "string" },
		descriptionFontAppearance: {
			type: "object",
			default: { fontStyle: "", fontWeight: "" }
		},
		descriptionFontStyle: { type: "string" },
		descriptionFontWeight: { type: "string" },

		descriptionHoverColor: { type: "string" },
		descriptionHoverFontSize: { type: "string" },
		descriptionHoverLetterSpacing: { type: "string" },
		descriptionHoverDecoration: { type: "string" },
		descriptionHoverLetterCase: { type: "string" },
		descriptionHoverLineHeight: { type: "string" },
		descriptionHoverFontAppearance: {
			type: "object",
			default: { fontStyle: "", fontWeight: "" }
		},
		descriptionHoverFontStyle: { type: "string" },
		descriptionHoverFontWeight: { type: "string" },

		hoverImageSize: { type: "number", default: 400 },
		hoverImageborder: { type: "object" },
		hoverImageborderRadius: { type: "string" },

		iconFontsize: { type: "number", default: 28 },
		iconColor: { type: "string" },
		iconHoverColor: { type: "string" }
    },
    save( { attributes } ) {
        const { ID, className } = attributes;


        // Only add ID attribute if it exists.
        const blockProps = useBlockProps.save( {
            className: className,
            ...( ID ? { id: `block-${ ID }` } : {} ),
        } );

        return ( <>
            {/* Only output <style> if ID exists. */}
            { ( ID && '' !== ID ) && (
                <style>{ generateDynamicStyle( { attributes } ) }</style>
            ) }

            <div { ...blockProps }>
                <div className="wpmozo-bna-hover-list-wrapper">
                    <div className="wpmozo-bna-hover-list-cursor"></div>
                    <div className="wpmozo-bna-hover-list-inner">
                        {/* Renders all nested child blocks inside the parent block. */}
                        <InnerBlocks.Content />
                    </div>
                </div>
            </div>
        </> );
    },
};

export default V1;