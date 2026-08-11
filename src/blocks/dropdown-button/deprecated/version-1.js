// deprecated/version-1.js
import { __ } from "@wordpress/i18n";
import { useBlockProps } from '@wordpress/block-editor';
import generateDynamicStyle from "./style";

const V1 = {
    attributes: {
        ID: { type: "string" },
		className: { type: "string" },

		linkItems: {
			type: "array",
			default: [
				{ text: "Dropdown item 1", link: "#", target: "same" },
				{ text: "Dropdown item 2", link: "#", target: "same" }
			]
		},
		buttonText: { type: "string", default: "Click here" },
		triggerType: { type: "string", default: "click" },
		dropdownDirection: { type: "string", default: "bottom" },

		buttonBackground: { type: "string", default: "" },
		buttonBGGradient: { type: "string" },
		buttonUseIcon: { type: "boolean", default: false },
		buttonIcon: { type: "string", default: "fas fa-circle-chevron-right" },
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
		buttonHoverFontWeight: { type: "string" },

		submenuMinwidth: { type: "number", default: 180 },
		submenupadding: { type: "object", default: { top: "5px", bottom: "5px" } },
		submenuBackground: { type: "string", default: "" },
		submenuBGGradient: { type: "string" },
		submenuborder: { type: "object" },
		submenuborderRadius: { type: "string" },

		linkTextColor: { type: "string" },
		linkTextBackground: { type: "string" },
		linkTextFontSize: { type: "string" },
		linkTextLetterSpacing: { type: "string" },
		linkTextDecoration: { type: "string" },
		linkTextLetterCase: { type: "string" },
		linkTextLineHeight: { type: "string" },
		linkTextFontAppearance: {
			type: "object",
			default: { fontStyle: "", fontWeight: "" }
		},
		linkTextFontStyle: { type: "string" },
		linkTextFontWeight: { type: "string" },

		linkTextHoverColor: { type: "string" },
		linkTextHoverBackground: { type: "string", default: "#f0f0f0" },
		linkTextHoverFontSize: { type: "string" },
		linkTextHoverLetterSpacing: { type: "string" },
		linkTextHoverDecoration: { type: "string" },
		linkTextHoverLetterCase: { type: "string" },
		linkTextHoverLineHeight: { type: "string" },
		linkTextHoverFontAppearance: {
			type: "object",
			default: { fontStyle: "", fontWeight: "" }
		},
		linkTextHoverFontStyle: { type: "string" },
		linkTextHoverFontWeight: { type: "string" },

		buttonAlign: {type: "default",default: "left"}
    },
    save( { attributes } ) {
        const clientId = attributes.ID;

        // Dropdown button.
        let $buttonIcon = '';
        if ( attributes.buttonUseIcon && attributes.buttonIcon ) {
            $buttonIcon = <i className={ 'wpmozo-icon ' + attributes.buttonIcon }></i>;
        }
        let $button = <a href="javascript:void(0)"
            target={ ( 'external' === attributes.buttonLinkTarget ) ? '_blank' : false }
            className={ [
                'wpmozo-button',
                'wpmozo_dropdown_button',
                ( attributes.buttonUseIcon && attributes.buttonIconOnHover ) ? 'wpmozo-icon-on-hover' : '',
                ( attributes.buttonUseIcon && 'before' === attributes.buttonIconPosition ) ? 'wpmozo-icon-at-before' : ( ( attributes.buttonUseIcon ) ? 'wpmozo-icon-at-after' : '' )
            ].filter( Boolean ).join(" ") } // Filter to remove blank space.
        >
            <span className='wpmozo-btn-text'>{ attributes.buttonText || __( 'Click here', 'wpmozo-blocks-and-addons' ) }</span>
            { $buttonIcon }
        </a>;

        let dropdownItems = [];
        ( attributes.linkItems || [] ).map( ( linkItem, index ) => {
            dropdownItems.push(
                <div key={ index } className="wpmozo_dropdown_button_item">
                    <a href={ linkItem.link }
                        target={ ( 'external' === linkItem.target ) ? '_blank' : false }
                    >{ linkItem.text }</a>
                </div>
            );
        } );

        return ( <>
            <style>{ generateDynamicStyle( { attributes } ) }</style>

            <div id={`block-${clientId}`} { ...useBlockProps.save( { className: attributes.className } ) }>
                <div className="wpmozo_dropdown_button_wrap"
                    data-trigger-type={ attributes.triggerType || 'click' }
                    data-direction={ attributes.dropdownDirection || 'bottom' }
                >
                    <div className="wpmozo_dropdown_button_inner">
                        { $button }
                        <div className="wpmozo_dropdown_menu_items">{ dropdownItems }</div>
                    </div>
                </div>
            </div>
        </> );
    },
};

export default V1;