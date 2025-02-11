import { __ } from "@wordpress/i18n";

const attributes = {
    ID: {
        type: "string",
    },
    globalcolorHandle: {
        type: "string",
    },
    globalcolorOverlay: {
        type: "string",
    },
    sliderOrientation: {
        type: "string",
        default: "horizontal",
    },
    handleOffset: {
        type: "number",
    },
    moveHandleOnHover: {
        type: "boolean",
        default: false,
    },
    moveHandleOnClick: {
        type: "boolean",
        default: false,
    },
    overlayOnHover: {
        type: "boolean",
        default: false,
    },
	beforeImage: {
        type: "string",
    },
    beforeHasLabel: {
        type: "boolean",
        default: false,
    },
    beforeLabelOnHover: {
        type: "boolean",
        default: false,
    },
    beforeLabel: {
        type: "string",
        default: __( 'Before', 'wpmozo-addons-lite-for-gutenberg' )
    },
    beforeLabelbackground: {
        type: "string",
    },
    beforeLabeltext: {
        type: "string",
    },
    beforeLabelFontSize: {
        type: "string",
    },
    beforeLabelFontAppearance: {
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
    beforeLabelLetterSpacing: {
        type: "string",
    },
    beforeLabelDecoration: {
        type: "string",
    },
    beforeLabelLetterCase: {
        type: "string",
    },
    beforeLabelLineHeight: {
        type: "string",
    },
    afterImage: {
        type: "string",
    },
    afterHasLabel: {
        type: "boolean",
        default: false,
    },
    afterLabelOnHover: {
        type: "boolean",
        default: false,
    },
    afterLabel: {
        type: "string",
        default: __( 'After', 'wpmozo-addons-lite-for-gutenberg' )
    },
    afterLabelbackground: {
        type: "string",
    },
    afterLabeltext: {
        type: "string",
    },
    afterLabelFontSize: {
        type: "string",
    },
    afterLabelFontAppearance: {
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
    afterLabelLetterSpacing: {
        type: "string",
    },
    afterLabelDecoration: {
        type: "string",
    },
    afterLabelLetterCase: {
        type: "string",
    },
    afterLabelLineHeight: {
        type: "string",
    },
};

export default attributes;