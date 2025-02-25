
import { __ } from "@wordpress/i18n";

const attributes = {
    ID: {
        type: "string",
    },
    title: {
        type: "string",
    	default: __( 'Separator Title', 'wpmozo-addons-lite-for-gutenberg' ), 
    },
    separatorType: {
        type: "string",
        default: "line",
    },
    lineUseWith: {
        type: "string",
    	default: "onlySeparator"
    },
    separatorText: {
        type: "string",
        default: "",
    },
    separatorIcon: {
        type: "string",
        default: "",
    },
    iconPosition: {
        type: "string",
        default: "center",
    },
    enableIconFontSize: {
        type: "boolean",
        default: false,
    },
    iconFontSize: {
        type: "number",
        default: 32,
    },
    iconColor: {
        type: "string",
    },
    styleIcon: {
        type: "boolean",
        default: false,
    },
    iconShape: {
        type: "string",
        default: "square",
    },
    shapeBackground: {
        type: "string",
    },
    enableShapeBorder: {
        type: "boolean",
        default: false,
    },
    shapeBorderColor: {
        type: "string",
    },
    separatorImage: {
        type: "string",
        default: "",
    },
    imageWidth: {
        type: "number",
    },
    imagePosition: {
        type: "string",
        default: "center",
    },
    lineStyle: {
        type: "string",
        default: "solid",
    },
    separatorThickness: {
        type: "number",
        default: 3,
    },
    separatorGradient: {
        type: "string",
    },
    separatorColor: {
        type: "string",
        default: "#2b87da",
    },
    shadowColor: {
        type: "string",
        default: "#2b87da",
    },
    textNormalColor: {
        type: "string",
        default: "#222222",
    },
    textHoverColor: {
        type: "string",
        default: "#000000",
    },
    textNormalFontSize: {
        type: "string",
    },
    textNormalFontAppearance: {
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
    textNormalLetterSpacing: {
        type: "string",
    },
    textNormalDecoration: {
        type: "string",
    },
    textNormalLetterCase: {
        type: "string",
    },
    textNormalLineHeight: {
        type: "string",
    },
    textHoverFontSize: {
        type: "string",
    },
    textHoverFontAppearance: {
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
    textHoverLetterSpacing: {
        type: "string",
    },
    textHoverDecoration: {
        type: "string",
    },
    textHoverLetterCase: {
        type: "string",
    },
    textHoverLineHeight: {
        type: "string",
    },
    textAlign: {
        type: "string",
        default: "center",
    },
};

export default attributes;