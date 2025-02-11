
import { __ } from "@wordpress/i18n";

const attributes = {
	ID: {
        type: "string"
    },
    image: {
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
    useIcon: {
        type: "boolean",
        default: false,
    },
    icon: {
        type: "string",
    },
    showButton: {
        type: "boolean",
        default: false,
    },
    buttonUrl: {
        type: "string",
    },
    buttonLinkTarget: {
        type: "string",
        default: "same"
    },
    tiltMax: {
        type: "number",
        default: 20
    },
    tiltPerspective: {
        type: "number",
        default: 1000
    },
    tiltScale: {
        type: "number",
        default: 1
    },
    tiltSpeed: {
        type: "number",
        default: 300
    },
    tiltMobile: {
        type: "boolean",
        default: false,
    },
    useGlare: {
        type: "boolean",
        default: false,
    },
    tiltMaxGlare: {
        type: "number",
        default: 1
    },
    use3dEffect: {
        type: "boolean",
        default: false,
    },
    tilt3dValue: {
        type: "number",
        default: 1
    },
    useDisableAxis: {
        type: "boolean",
        default: false,
    },
    tiltDisableAxis: {
        type: "string"
    },
    useOverlay: {
        type: "boolean",
        default: false,
    },
    overlayColor: {
        type: "string"
    },
    iconColor: {
        type: "string"
    },
    useIconFontSize: {
        type: "boolean",
        default: false,
    },
    iconFontSize: {
        type: "string"
    }
};

export default attributes;