// deprecated/version-1.js
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import generateDynamicStyle from '../style';

const V1 = {
    attributes: {
        ID: { type: "string" },
		className: { type: "string" },

		switcherOrientation: { type: "string", default: "row" },
		contentValign: { type: "string", default: "flex-end" },
		itemHeight: { type: "number", default: 350 },
		responsiveHeight: { type: "number", default: 200 },

		hoverBlurLevel: { type: "number", default: 5 },
		transitionDuration: { type: "number", default: 300 },

		titleAlign: { type: "string" },
		titleColor: { type: "string" },
		titleFontSize: { type: "string", default: "22px" },
		titleLetterSpacing: { type: "string" },
		titleDecoration: { type: "string" },
		titleLetterCase: { type: "string" },
		titleLineHeight: { type: "string" },
		titleFontAppearance: { type: "object",
			default: { fontStyle: "", fontWeight: "" }
		},
		titleFontStyle: { type: "string" },
		titleFontWeight: { type: "string" },

		descriptionAlign: { type: "string" },
		descriptionColor: { type: "string" },
		descriptionFontSize: { type: "string", default: "16px" },
		descriptionLetterSpacing: { type: "string" },
		descriptionDecoration: { type: "string" },
		descriptionLetterCase: { type: "string" },
		descriptionLineHeight: { type: "string" },
		descriptionFontAppearance: { type: "object",
			default: { fontStyle: "", fontWeight: "" }
		},
		descriptionFontStyle: { type: "string" },
		descriptionFontWeight: { type: "string" }
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
                <div className="wpmozo_bna_background_switcher_wrap">
                    <div className="wpmozo_bna_background_switcher_inner">
                        {/* Renders all nested child blocks inside the parent block. */}
                        <InnerBlocks.Content />
                    </div>
                </div>
            </div>
        </> );
    },
};

export default V1;