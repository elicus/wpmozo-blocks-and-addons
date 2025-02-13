
import { __ } from "@wordpress/i18n";

const attributes = {
	ID: {
        type: "string"
    },
    image: {
        type: "string"
    },
    title: {
        type: "string"
    },
    content: {
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
    descriptionColor: {
        type: "String"
    },
    descriptionFontSize: {
        type: "string"
    },
    descriptionFontAppearance: {
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
    descriptionLetterSpacing: {
        type: "string"
    },
    descriptionDecoration: {
        type: "string"
    },
    descriptionLetterCase: {
        type: "string"
    },
    descriptionLineHeight: {
        type: "string"
    },
    descriptionAlign: {
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
    buttonText: {
        type: "string",
        default: __( 'Read More', 'wpmozo-addons-lite-for-gutenberg' )
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
    },
    contentOnHover: {
        type: "boolean",
        default: false,
    },
    contentAlignment: {
        type: "string",
        default: "center"
    },
    contentAnimationDirection: {
        type: "string",
        default: "off"
    },
    contentpadding: {
        type: "object"
    }
};

export default attributes;