// deprecated/version-1.js
import { useBlockProps } from '@wordpress/block-editor';
import generateDynamicStyle from '../style';
import { __ } from "@wordpress/i18n";

const V1 = {
    attributes: {
        ID: { type: "string" },
		className: { type: "string" },

		breadcrumbLayout: { type: "string", default: "layout1" },
		linkTarget: {type: "boolean", default: false},
		breadcrumbsNavBackground: { type: "string", default: "#7ebec5" },
		breadcrumbsNavLastItemBackground: { type: "string", default: "#cccccc" },
		enableDifferentBg: {type: "boolean", default: false},
		enableFade: {type: "boolean", default: false},
		fadeRange: {type: "number", default: 0.01},
		breadcrumbItempadding: {type: "object", default: { right: "10px", left: "10px" } },

		separatorColor: { type: "string" },
		separatorType: { type: "string", default: "text_separator" },
		separatorText: { type: "string", default: "|" },
		separatorIcon: { type: "string" },
		separatorSizeFontSize: { type: "string" },

		useHomeLinkText: {type: "boolean", default: false},
		homeLinkText: {type: "string", default: "Home"},
		useHomeLinkIcon: {type: "boolean", default: false},
		hideHomeText: {type: "boolean", default: false},
		homeIconColor: {type: "string"},
		homeLinkIcon: { type: "string" },
		homeLinkIconSizeFontSize: { type: "string" },

		textColor: { type: "string", default: "" },
		textFontSize: { type: "string", default: "1rem" },
		textFontAppearance: { type: "object", default: { fontStyle: "", fontWeight: "" } },
		textLetterSpacing: { type: "string" },
		textDecoration: { type: "string" },
		textLetterCase: { type: "string" },
		textLineHeight: { type: "string" },
		textAlign: { type: "string",default: "left" }
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

            {/* Render wrapper only — PHP render.php will fill content. */}
            <div { ...blockProps }></div>
        </> );
    },
};

export default V1;