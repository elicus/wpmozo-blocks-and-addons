
import { __ } from "@wordpress/i18n";

const attributes = {
    ID: {
        type: "string",
    },
    title: {
        type: "string",
    	default: __( 'Image Card Title', 'wpmozo-blocks-and-addons' ), 
    },
    content: {
        type: "string",
    	default: __( 'Your content goes here. Edit this text inline or in the widget Content settings. You can also style every aspect of this content in the widget Design settings.', 'wpmozo-blocks-and-addons' )
    },
    backImage: {
        type: "string",
    },
    layout: {
        type: "string",
        default: "lily",
    },
    imageOpacity: {
        type: "number",
        default: 0.7,
    },
    layoutborder: {
        type: "object",
        default: {
            color: "#000000",
            width: "1px",
            style: "solid",
        }
    },
    overlayColor: {
        type: "string",
    },
    titleLavel: {
        type: "string",
        default: "h2",
    },
    titleNormalColor: {
        type: "string",
        default: "#222222",
    },
    titleHoverColor: {
        type: "string",
        default: "#000000",
    },
    titleNormalFontSize: {
        type: "string",
    },
    titleNormalFontAppearance: {
        type: "object",
        fontStyle: {
            type: "string",
        },
        fontWeight: {
            type: "string",
        },
        default: {
            fontStyle: "",
            fontWeight: "",
        }
    },
    titleNormalLetterSpacing: {
        type: "string",
    },
    titleNormalDecoration: {
        type: "string",
    },
    titleNormalLetterCase: {
        type: "string",
    },
    titleNormalLineHeight: {
        type: "string",
    },
    titleHoverFontSize: {
        type: "string",
    },
    titleHoverFontAppearance: {
        type: "object",
        fontStyle: {
            type: "string",
        },
        fontWeight: {
            type: "string",
        },
        default: {
            fontStyle: "",
            fontWeight: "",
        }
    },
    titleHoverLetterSpacing: {
        type: "string",
    },
    titleHoverDecoration: {
        type: "string",
    },
    titleHoverLetterCase: {
        type: "string",
    },
    titleHoverLineHeight: {
        type: "string",
    },
    titleAlign: {
        type: "string",
        default: "center",
    },
    contentColor: {
        type: "string",
        default: "#222222",
    },
    contentFontSize: {
        type: "string",
    },
    contentFontAppearance: {
        type: "object",
        fontStyle: {
            type: "string",
        },
        fontWeight: {
            type: "string",
        },
        default: {
            fontStyle: "",
            fontWeight: "",
        }
    },
    contentLetterSpacing: {
        type: "string",
    },
    contentDecoration: {
        type: "string",
    },
    contentLetterCase: {
        type: "string",
    },
    contentLineHeight: {
        type: "string",
    },
    contentAlign: {
        type: "string",
        default: "center",
    },
};

export default attributes;