// deprecated/version-1.js
import { InnerBlocks, useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';
import generateDynamicStyle from './style';

const V1 = {
    attributes: {
        ID: { type: "string" },
"ID": { "type": "string" },
		"className": { "type": "string" },
        "accordionTrigger": { "type": "string", "default": "hover" },
        "accordionOrientation" : { "type": "string", "default": "horizontal" },
        "contentAlignment" : { "type": "string", "default": "center"  },
        "inactiveState": { "type": "array", "default": [] },
        "accordionSpacing": { "type": "string" },
        "activeAccordionSize" : { "number": "string", "default": 4 },
        "activeAccordion" : { "type": "number" },
        "accordionTransitionDuration" : { "type": "number", "default": 500 },
        "accordionHeight": { "type": "string", "default": "350px" },

        "textColor": { "type": "string", "default": "dark" },
        "textAlignment": { "type": "string" },

        "titleColor": { "type": "string" },
        "titleAlign": { "type": "string" },
        "titleLavel": { "type": "string", "default": "h4" },
        "titleFontSize": { "type": "string", "default": "18px" },
        "titleFontAppearance": {
            "type": "object",
            "fontStyle": { "type": "string" },
            "fontWeight": { "type": "string" },
            "default": {
                "fontStyle": "",
                "fontWeight": ""
            }
        },
        "titleLetterSpacing": { "type": "string" },
        "titleDecoration": { "type": "string" },
        "titleLetterCase": { "type": "string" },
        "titleLineHeight": { "type": "string" },
        "titlepadding": { "type": "object" },
        "titlemargin": { "type": "object" },

        "descriptionColor": { "type": "string" },
        "descriptionAlign": { "type": "string" },
        "descriptionFontSize": { "type": "string", "default": "18px" },
        "descriptionFontAppearance": {
            "type": "object",
            "fontStyle": { "type": "string" },
            "fontWeight": { "type": "string" },
            "default": {
                "fontStyle": "",
                "fontWeight": ""
            }
        },
        "descriptionLetterSpacing": { "type": "string" },
        "descriptionDecoration": { "type": "string" },
        "descriptionLetterCase": { "type": "string" },
        "descriptionLineHeight": { "type": "string" },
        "descriptionpadding": { "type": "object" },
        "descriptionmargin": { "type": "object" },

        "iconColor": { "type": "string" },
        "iconFontSize": { "type": "string", "default": "32px" },
        "iconpadding": { "type": "object" },
        "iconmargin": { "type": "object" },

        "buttonTextColor": { "type": "string" },
        "buttonBackgroundColor": { "type": "string" },
        "buttonAlignment": { "type": "string" },
        "buttonFontSize": { "type": "string", "default": "18px" },
        "buttonFontAppearance": {
            "type": "object",
            "fontStyle": { "type": "string" },
            "fontWeight": { "type": "string" },
            "default": {
                "fontStyle": "",
                "fontWeight": ""
            }
        },
        "buttonLetterSpacing": { "type": "string" },
        "buttonDecoration": { "type": "string" },
        "buttonLetterCase": { "type": "string" },
        "buttonLineHeight": { "type": "string" },
        "useButtonIcon": { "type": "boolean", "default": false },
        "buttonIconColor": { "type": "string" },
        "buttonIcon": { "type": "string" },
        "buttonIconPlacement": { "type": "string", "default": "after" },
        "buttonIconHover": { "type": "boolean", "default": false },
        "buttonborder": { "type": "object" },
        "buttonborderRadius": { "type": "string" },
        "buttonpadding": { "type": "object" },
        "buttonmargin": { "type": "object" }
    },
    save( { attributes } ) {
        const { ID, className } = attributes;

        // Only add ID attribute if it exists.
        const blockProps = useBlockProps.save( {
            className: className,
            ...( ID ? { id: `block-${ ID }` } : {} ),
        } );

        return (
            <>
                {/* Only output <style> if ID exists. */}
                { ( ID && '' !== ID ) && (
                    <style>{ generateDynamicStyle( { attributes } ) }</style>
                ) }
                <div { ...blockProps }>
                    <div 
                        className={`wpmozo-bna-image-accordion-wrapper wpmozo-bna-image-accordion-content-${attributes.contentAlignment} ${attributes.accordionOrientation}`}
                        data-trigger={attributes.accordionTrigger}
                        data-default-active={attributes.activeAccordion}
                    >
                        <InnerBlocks.Content/>
                    </div>
                </div>
            </>
        );
    },
};

export default V1;