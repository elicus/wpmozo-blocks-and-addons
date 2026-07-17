// deprecated/version-1.js
import { InnerBlocks, useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';
import generateDynamicStyle from '../style';

const V1 = {
	attributes: {
		ID: { type: "string" },
		className: { type: "string" },
        layout: { type: "string", default: "vertical" },
        animationStartViewportPos: { type: "number", default: 0 },
        collapsedWidth: { type: "number", default: 200 },

        textColor: { type: "string", default: "dark" },
        textAlignment: { type: "string" },

        titleColor: { type: "string" },
        titleAlign: { type: "string" },
        titleLavel: { type: "string", default: "h4" },
        titleFontSize: { type: "string", default: "18px" },
        titleFontAppearance: {
            type: "object",
            fontStyle: { type: "string" },
            fontWeight: { type: "string" },
            default: {
                fontStyle: "",
                fontWeight: ""
            }
        },
        titleLetterSpacing: { type: "string" },
        titleDecoration: { type: "string" },
        titleLetterCase: { type: "string" },
        titleLineHeight: { type: "string" },
        titlepadding: { type: "object" },
        titlemargin: { type: "object" },

        descriptionColor: { type: "string" },
        descriptionAlign: { type: "string" },
        descriptionFontSize: { type: "string", default: "18px" },
        descriptionFontAppearance: {
            type: "object",
            fontStyle: { type: "string" },
            fontWeight: { type: "string" },
            default: {
                fontStyle: "",
                fontWeight: ""
            }
        },
        descriptionLetterSpacing: { type: "string" },
        descriptionDecoration: { type: "string" },
        descriptionLetterCase: { type: "string" },
        descriptionLineHeight: { type: "string" },
        descriptionpadding: { type: "object" },
        descriptionmargin: { type: "object" },

        iconColor: { type: "string" },
        iconFontSize: { type: "string", default: "32px" },
        iconpadding: { type: "object" },
        iconmargin: { type: "object" },

        imageborder: { type: "object" },
        imageborderRadius: { type: "string" },
        imageWrappadding: { type: "object" },
        imageSize: { type: "string", default: "30%" },

        contentWrapBackground: { type: "string" },
        contentWrapMarginRight: { type: "string" },
        contentWrapBackgroundGradient: {
            type: "string",
            default: "linear-gradient(135deg,rgba(6,147,227,1) 0%,rgb(155,81,224) 100%)"
        },
        contentWrapUseBackgroundImage: { type: "boolean", default: false },
        contentWrapBackgroundImage: { type: "string" },
        contentWrapborder: { type: "object" },
        contentWrapborderRadius: { type: "string" },
        contentWrappadding: { type: "object" },
        contentWrapItemBGImageSize: { type: "string", default: "cover" },
        contentWrapItemBGImagePosition: { type: "string", default: "center" },
        contentWrapItemBGImageRepeat: { type: "string", default: "no-repeat" },
        contentWrapItemBGImageBlend: { type: "string", default: "normal" },

        cardItemWidth: { type: "number",default: 300 },
        cardItemborder: { type: "object" },
        cardItemborderRadius: { type: "string" },
        cardItempadding: { type: "object" },

        buttonTextColor: { type: "string" },
        buttonBackgroundColor: { type: "string" },
        buttonAlignment: { type: "string" },
        buttonFontSize: { type: "string" },
        buttonFontAppearance: {
            type: "object",
            fontStyle: { type: "string" },
            fontWeight: { type: "string" },
            default: {
                fontStyle: "",
                fontWeight: ""
            }
        },
        buttonLetterSpacing: { type: "string" },
        buttonDecoration: { type: "string" },
        buttonLetterCase: { type: "string" },
        buttonLineHeight: { type: "string" },
        useButtonIcon: { type: "boolean", default: false },
        buttonIconColor: { type: "string" },
        buttonIcon: { type: "string" },
        buttonIconPlacement: { type: "string", default: "after" },
        buttonIconHover: { type: "boolean", default: false },
        buttonborder: { type: "object" },
        buttonborderRadius: { type: "string" },
        buttonpadding: { type: "object" },
        buttonmargin: { type: "object" }
	},
	save( { attributes } ) {
		const { 
            ID, 
            layout,
            animationStartViewportPos
        } = attributes;

        // Only add ID attribute if it exists
        const blockProps = useBlockProps.save( {
            className: attributes.className,
            ...( ID ? { id: `block-${ ID }` } : {} ),
        } );

        let dataCollapsedWidth = ( 'horizontal' === attributes.layout ) 
            ? { 'data-collapsed_width': `${attributes.collapsedWidth}px` } 
            : {};

        return (
            <>
                {/* Only output <style> if ID exists. */}
                { ( ID && '' !== ID ) && (
                    <style>{ generateDynamicStyle( { attributes } ) }</style>
                ) }
                <div { ...blockProps }>
                    <div 
                        className={`wpmozo-bna-scroll-stack-cards-wrapper layout-${layout}`}
                        data-layout={layout}
                        data-animation_start_viewport_pos={`${animationStartViewportPos}%`}
                        {...dataCollapsedWidth}
                    >
                        <div className="wpmozo-bna-scroll-stack-cards-items">
                            <InnerBlocks.Content/>
                        </div>
                    </div>
                </div>
            </>
        );
	},
};

export default V1;