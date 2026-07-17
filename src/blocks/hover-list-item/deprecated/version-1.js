// deprecated/version-1.js
import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText } from '@wordpress/block-editor';

import generateDynamicStyle from "../style";

const V1 = {
    attributes: {
        ID: { type: "string" },
		className: { type: "string" },
		isLastChild: { type: "boolean", default: false },
		blockpadding: { type: "object", default: { top: "15px", bottom: "15px", left: "15px", right: "15px" } },
		blockmargin: { type: "object" },
		blockBackground: { type: "string", default: "" },
		blockBGGradient: { type: "string" },

		title: { type: "string", default: "List Item" },
		subtitle: { type: "string", default: "" },
		description: { type: "string", default: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
		hoverImage: { type: "string", default: "" },

		showIcon: { type: "boolean", default: false },
		listIcon: { type: "string" },
		iconFontsize: { type: "number" },
		iconColor: { type: "string" },
		iconHoverColor: { type: "string" },

		showButton: { type: "boolean", default: false },
		buttonText: { type: "string", default: "Read more" },
		buttonUrl: { type: "string", default: "" },
		buttonLinkTarget: { type: "string", default: "same" },

		titleLevel: { type: "string", default: "h4" },
		titleAlign: { type: "string" },
		titleColor: { type: "string" },
		titleFontSize: { type: "string" },
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
		subtitleFontSize: { type: "string" },
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

		descriptionColor: { type: "string" },
		descriptionFontSize: { type: "string" },
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
		buttonFontAppearance: {
			type: "object",
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
		buttonHoverFontAppearance: {
			type: "object",
			default: { fontStyle: "", fontWeight: "" }
		},
		buttonHoverFontStyle: { type: "string" },
		buttonHoverFontWeight: { type: "string" }
    },
    save( { attributes } ) {
        const { ID, className, isLastChild } = attributes;

        // Get the title.
        let $title = '';
        if ( attributes.title ) {
            $title = <RichText.Content
                className="wpmozo_bna_hover_list_title"
                tagName={ attributes?.titleLevel || 'h4' }
                value={ attributes.title }
            />;
        }

        // Get the icon.
        let $icon = '';
        if ( attributes.showIcon && attributes.listIcon ) {
            $icon = <span class={ "wpmozo_bna_hover_list_icon " + attributes.listIcon } />;
        }

        // Get the description.
        let $description = '';
        if ( attributes.description ) {
            $description = <RichText.Content
                className="wpmozo_bna_hover_list_description"
                tagName={ 'div' }
                value={ attributes.description }
            />;
        }

        // Get the subtitle.
        let $subtitle = '';
        if ( attributes.subtitle ) {
            $subtitle = <RichText.Content
                className="wpmozo_bna_hover_list_subtitle"
                tagName={ 'div' }
                value={ attributes.subtitle }
            />;
        } else {
            $subtitle = <div className="wpmozo_bna_hover_list_subtitle"></div>;
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
            $button = <div className="wpmozo-bna-button-wrap">
                <a href={ attributes.buttonUrl }
                    target={ ( 'external' === attributes.buttonLinkTarget ) ? '_blank' : false }
                    className={ [
                        'wpmozo-bna-button',
                        ( attributes.buttonUseIcon && attributes.buttonIconOnHover ) ? 'wpmozo-icon-on-hover' : '',
                        ( attributes.buttonUseIcon && 'before' === attributes.buttonIconPosition ) ? 'wpmozo-icon-at-before' : 'wpmozo-icon-at-after'
                    ].join(" ") }
                >
                    <span className='wpmozo-bna-btn-text'>{ attributes.buttonText}</span>
                    { $buttonIcon }
                </a>
            </div>;
        }

        // Only add ID attribute if it exists.
        const blockProps = useBlockProps.save( {
            className: [
                className,
                isLastChild ? 'wpmozo-is-last-child' : '' // last child.
            ].filter( Boolean ).join( ' ' ),
            ...( ID ? { id: `block-${ ID }` } : {} ),
        } );

        return ( <>
            {/* Only output <style> if ID exists. */}
            { ( ID && '' !== ID ) && (
                <style>{ generateDynamicStyle( { attributes } ) }</style>
            ) }

            <div { ...blockProps }>
                <div className="wpmozo-bna-hover-list-item-wrapper"
                    data-image={ attributes.hoverImage || wpmozo_bna_editor_object.placeholderImg }
                >
                    <div className="wpmozo-bna-hover-list-item-inner">
                        <div className="wpmozo_bna_hover_list_title_wrapper">
                            { $icon }{ $title }
                        </div>
                        { $description }{ $subtitle }{ $button }
                    </div>
                    <div className="wpmozo-bna-hover-list-item-overlay"></div>
                    <div className="wpmozo-bna-hover-list-item-divider"></div>
                </div>
            </div>
        </> );
    },
};

export default V1;