// deprecated/version-1.js
import { useBlockProps } from '@wordpress/block-editor';
import generateDynamicStyle from '../style';

const V1 = {
    attributes: {
        ID: { type: "string" },
		className: { type: "string" },

		trigerAction: {type: "string", default: "mouseenter"},
		trigerElement: {type: "string", default: "button"},

		triggerButtonText: {type: "string",default: "Button"},
		triggerButtonUrl: {type: "string"},
		buttonLinkTarget: {type: "string",default: "external"},
		image: {type: "object", default: { "url": "/wp-content/plugins/wpmozo-blocks-and-addons/includes/assets/images/placeholder.webp" }},
		icon: { type: "string", default: "far fa-star" },
		triggerText: {type: "string",default: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},

		buttonAlign: {type: "string"},
		customButtonStyle: {type: "boolean", default: false},
		buttonIconStyle: {type: "boolean", default: false},
		buttonIcon: {type: "string",default: "far fa-star"},
		buttonIconPosition: {type: "string",default: "before"},
		buttonIconOnHover: {type: "boolean", default: false},
		buttonColor: {type: "string"},
		buttonBackground: {type: "string"},
		buttonHoverColor: {type: "string"},
		buttonHoverBackground: {type: "string"},
		buttonFontSize: { type: "string" },
		buttonLetterSpacing: { type: "string" },
		buttonDecoration: { type: "string",default: "none" },
		buttonLetterCase: { type: "string" },
		buttonLineHeight: { type: "string" },
		buttonFontAppearance: { type: "object",
			default: {
				"fontStyle": "",
				"fontWeight": ""
			}
		},
		buttonpadding: { type: "object", default: { "top": "10px", "right": "20px", "bottom": "10px", "left": "20px" } },
		buttonmargin: { type: "object" },
		buttonborder: { type: "object", default: { "width": "2px", "style": "solid", "color": "#313131" } },
		buttonborderRadius: { type: "string", default: "3px" },

		triggerImageWidth: {type: "number"},

		triggerIconAlign: {type: "string"},
		triggerIconColor: {type: "string"},
		triggerIconHoverColor: {type: "string"},
		triggerIconSize: {type: "number"},
		triggerIconSizeHover: {type: "number"},

		TriggerTextAlign: {type: "string",default: "left"},
		TriggerTextColor: {type: "string"},
		TriggerTextHoverColor: {type: "string"},
		TriggerTextFontSize: { type: "string" },
		TriggerTextLetterSpacing: { type: "string" },
		TriggerTextDecoration: { type: "string",default: "none" },
		TriggerTextLetterCase: { type: "string" },
		TriggerTextLineHeight: { type: "string" },
		TriggerTextFontAppearance: { type: "object",
			default: {
				"fontStyle": "",
				"fontWeight": ""
			}
		},
		triggerTextHoverColor: {type: "string"},
		triggerTextHoverFontSize: { type: "string" },
		triggerTextHoverLetterSpacing: { type: "string" },
		triggerTextHoverDecoration: { type: "string",default: "none" },
		triggerTextHoverLetterCase: { type: "string" },
		triggerTextHoverLineHeight: { type: "string" },
		triggerTextHoverFontAppearance: { type: "object",
			default: {
				"fontStyle": "",
				"fontWeight": ""
			}
		},

		entranceAnimation: {type: "string",default: "fade"},
		animationDuration: {type: "number",default: 350},
		showSpeechBubble: {type: "boolean",default: true},
		makeInteractiveTooltip: {type: "boolean",default: false},
		tooltipWidth: {type: "number",default: 350},
		tooltipBackgroundColor: {type: "string"},
		tooltipborder: { type: "object" },
		tooltipborderRadius: { type: "string" },
		tooltippadding: { type: "object" },
		tooltipmargin: { type: "object" },

		"showTooltip": {"type": "boolean",default: true}
    },
    save( { attributes } ) {
        return (
            <>
                <style>
                    {generateDynamicStyle({attributes})}
                </style>
                <div {...useBlockProps.save()}>
                    <InnerBlocks.Content/>
                </div>
            </>
        );
    },
};

export default V1;