
import { __ } from "@wordpress/i18n";

const attributes = {
	clientId: {
        type: "string"
    },
    title: {
        type: "string",
        default: __( 'Tilt Image Title', 'wpmozo-addons-lite-for-gutenberg' ),
    },
    content: {
        type: "string",
        default: __( 'Your content goes here. Edit this text inline or in the widget Content settings. You can also style every aspect of this content in the widget Design settings.', 'wpmozo-addons-lite-for-gutenberg' )
    },
    image: {
        type: "string"
    },
    overlayColor: {
        type: "string"
    },
    titleLavel: {
        type: "string",
        default: "h2"
    },
    titleColor: {
        type: "string"
    },
    titleFontSize: {
        type: "string"
    },
    titleFontAppearance: {
        type: "object",
        fontStyle: {
            type: "string"
        },
        fontWeight: {
            type: "string"
        },
        default: {
            fontStyle: "",
            fontWeight: ""
        }
    },
    titleLetterSpacing: {
        type: "string"
    },
    titleDecoration: {
        type: "string"
    },
    titleLetterCase: {
        type: "string"
    },
    titleLineHeight: {
        type: "string"
    },
    titleAlign: {
        type: "string",
        default: "left"
    },
    contentColor: {
        type: "String"
    },
    contentFontSize: {
        type: "string"
    },
    contentFontAppearance: {
        type: "object",
        fontStyle: {
            type: "string"
        },
        fontWeight: {
            type: "string"
        },
        default: {
            fontStyle: "",
            fontWeight: ""
        }
    },
    contentLetterSpacing: {
        type: "string"
    },
    contentDecoration: {
        type: "string"
    },
    contentLetterCase: {
        type: "string"
    },
    contentLineHeight: {
        type: "string"
    },
    contentAlign: {
        type: "string",
        default: "left"
    },
};

export default attributes;