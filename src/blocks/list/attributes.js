
import { __ } from "@wordpress/i18n";

const attributes = {
    ID: {
        type: "string"
    },
    layout: {
        type: "string",
        default: "default",
    },
    listAlignment: {
        type: "string",
        default: "center",
    },
	iconFontSize: {
		type: "number",
        default: 22,
	},
    iconColor: {
        type: "string",
    },
    imageWidth: {
        type: "number",
        default: 40,
    },
    dividerSize: {
        type: "number",
        default: 0,
    },
    dividerStyle: {
        type: "string",
        default: 'solid',
    },
    dividerColor: {
        type: "string",
        default: '#d3d3d3',
    },
    dividermargin: {
        type: "object",
    },
    lastDivider: {
        type: "boolean",
        default: true,
    },
    indentation: {
        type: "number"
    },
    textColor: {
        type: "string",
        default: "#222222",
    },
    linkColor: {
        type: "string",
        default: "#000000",
    },
    textFontSize: {
        type: "string",
    },
    textFontAppearance: {
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
    textLetterSpacing: {
        type: "string",
    },
    textDecoration: {
        type: "string",
    },
    textLetterCase: {
        type: "string",
    },
    textLineHeight: {
        type: "string",
    },
    linkFontSize: {
        type: "string",
    },
    linkFontAppearance: {
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
    linkLetterSpacing: {
        type: "string",
    },
    linkDecoration: {
        type: "string",
    },
    linkLetterCase: {
        type: "string",
    },
    linkLineHeight: {
        type: "string",
    }
};

export default attributes;