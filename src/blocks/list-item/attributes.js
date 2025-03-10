
import { __ } from "@wordpress/i18n";

const attributes = {
    ID: {
        type: "string"
    },
    itemmargin: {
        type: "object"
    },
    itempadding: {
        type: "object"
    },
	text: {
		type: "rich-text",
		source: "rich-text",
		selector: "p",
		role: "text"				
	},
	markerType: {
		type: "string",
		default: "icon"
	},
	markerIcon: {
		type: "string",
		default:"fas fa-check"
	},
	styleIcon: {
		type: "boolean",
		default:false
	},
	iconShape: {
		type: "string",
		default:"square"
	},
	iconColor: {
		type: "string"
	},
	shapeBackground: {
		type: "string"
	},
	enableShapeBorder: {
		type: "boolean",
		default: false
	},
	shapeBorderColor: {
		type: "string"
	},
	markerImage: {
		type: "string",
		default:""
	},
    textNormalColor: {
        type: "string",
        default: "",
    },
    textHoverColor: {
        type: "string",
        default: "",
    },
    textNormalFontSize: {
        type: "string",
        default: ""
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
        default: ""
    },
    textNormalDecoration: {
        type: "string",
        default: ""
    },
    textNormalLetterCase: {
        type: "string",
        default: ""
    },
    textNormalLineHeight: {
        type: "string",
        default: ""
    },
    textHoverFontSize: {
        type: "string",
        default: ""
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
        default: ""
    },
    textHoverDecoration: {
        type: "string",
        default: ""
    },
    textHoverLetterCase: {
        type: "string",
        default: ""
    },
    textHoverLineHeight: {
        type: "string",
        default: ""
    },
};

export default attributes;