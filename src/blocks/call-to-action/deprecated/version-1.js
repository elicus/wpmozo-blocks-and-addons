// deprecated/version-1.js
import { __ } from "@wordpress/i18n";
import { useBlockProps, RichText } from '@wordpress/block-editor';
import generateDynamicStyle from "./style";

const V1 = {
    attributes: {
        ID: { type: "string" },
		className: { type: "string" },
        blockVerticleAlign: { type: "object", default: "center" },
        blockpadding: { type: "object" },
		blockmargin: { type: "object" },
		blockBackground: { type: "string" },
		blockBGGradient: { type: "string" },
        blockborder: { type: "object" },
		blockborderRadius: { type: "object" },

        title: { type: "string", default: "Call To Action Title" },
        description: { type: "string", default: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever." },

        titleLevel: { type: "string", default: "h3" },
		titleAlign: { type: "string" },
		titleColor: { type: "string" },
		titleFontSize: { type: "string" },
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
		descriptionFontSize: { type: "string" },
		descriptionLetterSpacing: { type: "string" },
		descriptionDecoration: { type: "string" },
		descriptionLetterCase: { type: "string" },
		descriptionLineHeight: { type: "string" },
		descriptionFontAppearance: { type: "object",
			default: { fontStyle: "", fontWeight: "" }
		},
		descriptionFontStyle: { type: "string" },
		descriptionFontWeight: { type: "string" },

        showButton: { type: "boolean", default: true },
		buttonText: { type: "string", default: "Lean more" },
		buttonUrl: { type: "string", default: "#" },
		buttonLinkTarget: { type: "string", default: "same" },

        buttonContainerSize: { type: "number", default: 25 },
        buttonStackOn: { type: "string", default: "none" },
        buttonAlign: { type: "string" },
		buttonBackground: { type: "string", default: "" },
		buttonBGGradient: { type: "string" },
		buttonUseIcon: { type: "boolean", default: false },
		buttonIcon: { type: "string", default: "fas fa-arrow-right" },
		buttonIconPosition: { type: "string", default: "after" },
		buttonIconOnHover: { type: "boolean", default: false },
		buttonpadding: { type: "object", default: { top: "10px", right: "20px", bottom: "10px", left: "20px" } },
		buttonmargin: { type: "object" },
		buttonborder: { type: "object", default: { width: "2px", style: "solid", color: "#313131" } },
		buttonborderRadius: { type: "string", default: "3px" },
		buttonColor: { type: "string" },
		buttonFontSize: { type: "string" },
		buttonLetterSpacing: { type: "string" },
		buttonDecoration: { type: "string" },
		buttonLetterCase: { type: "string" },
		buttonLineHeight: { type: "string" },
		buttonFontAppearance: { type: "object",
			default: { fontStyle: "", fontWeight: "" }
		},
		buttonFontStyle: { type: "string" },
		buttonFontWeight: { type: "string" },

		buttonHoverBackground: { type: "string", default: "" },
		buttonHoverBGGradient: { type: "string" },
		buttonHoverborder: { type: "object" },
		buttonHoverborderRadius: { type: "string" },
		buttonHoverColor: { type: "string" },
		buttonHoverFontSize: { type: "string" },
		buttonHoverLetterSpacing: { type: "string" },
		buttonHoverDecoration: { type: "string" },
		buttonHoverLetterCase: { type: "string" },
		buttonHoverLineHeight: { type: "string" },
		buttonHoverFontAppearance: { type: "object",
			default: { fontStyle: "", fontWeight: "" }
		},
		buttonHoverFontStyle: { type: "string" },
		buttonHoverFontWeight: { type: "string" }
    },
    save( { attributes } ) {
        const clientId = attributes.ID;

        const { ID, className } = attributes;

        // Only add ID attribute if it exists.
        const blockProps = useBlockProps.save( {
            className: [
                className,
            ].filter( Boolean ).join( ' ' ),
            ...( ID ? { id: `block-${ ID }` } : {} ),
        } );

        // Get the title.
        let $title = '';
        if ( attributes.title ) {
            $title = <RichText.Content
                className="wpmozo-bna-cta-title"
                tagName={ attributes?.titleLevel || 'h3' }
                value={ attributes.title }
            />;
        }

        // Get the description.
        let $description = '';
        if ( attributes.description ) {
            $description = <RichText.Content
                className="wpmozo-bna-cta-desc"
                tagName= { 'div' }
                value={ attributes.description }
            />;
        }

        // Button.
        const showButton = attributes.showButton ?? false;
        const buttonUrl  = attributes.buttonUrl ?? '';

        let $button = '';
        if ( showButton && '' !== buttonUrl ) {
            let $buttonIcon = '';
            if ( attributes.buttonUseIcon && attributes.buttonIcon ) {
                $buttonIcon = <i className={ 'wpmozo-bna-icon ' + attributes.buttonIcon }></i>;
            }
            $button = <div className="wpmozo-bna-button-wrap wpmozo-bna-cta-button-wrap">
                <a href={ buttonUrl }
                    target={ ( 'external' === attributes.buttonLinkTarget ) ? '_blank' : false }
                    className={ [
                        'wpmozo-bna-button',
                        ( attributes.buttonUseIcon && attributes.buttonIconOnHover ) ? 'wpmozo-icon-on-hover' : '',
                        ( attributes.buttonUseIcon && 'before' === attributes.buttonIconPosition ) ? 'wpmozo-icon-at-before' : 'wpmozo-icon-at-after'
                    ].join(" ") }
                >
                    <span className='wpmozo-bna-btn-text'>{ attributes.buttonText }</span>
                    { $buttonIcon }
                </a>
            </div>;
        }

        return ( <>
            {/* Only output <style> if ID exists. */}
            { ( ID && '' !== ID ) && (
                <style>{ generateDynamicStyle( { attributes } ) }</style>
            ) }

            <div { ...blockProps }>
                <div className="wpmozo-bna-cta-wrap">
                    <div className="wpmozo-bna-cta-inner">
                        <div className="wpmozo-bna-cta-content-wrap">
                            { $title }
                            { $description }
                        </div>
                        { $button }
                    </div>
                </div>
            </div>
        </> );
    },
};

export default V1;