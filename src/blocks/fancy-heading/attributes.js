
import { __ } from "@wordpress/i18n";

const attributes = {
    ID: {
        type: "string",
    },
    preHeading: {
        type: "string",
        default: 'Pre',
    },
    mainHeading: {
        type: "string",
        default: 'Main',
    },
    postHeading: {
        type: "string",
        default: 'Post',
    },
    displayInStack: {
        type: "boolean",
    },
    headingLavel: {
        type: "string",
        default: "h2",
    },
    headingAlignment: {
        type: "string",
        default: "center",
    },
    headingColor: {
        type: "string",
    },
    headingBackground: {
        type: "string",
    },
    preTextAlignment: {
        type: "string",
        default: "center"
    },
    preTextColor: {
        type: "string",
    },
    preTextBackground: {
        type: "string",
    },
    preTextHoverColor: {
        type: "string",
    },
    preTextHoverBackground: {
        type: "string",
    },
    preTextDimensionspadding: {
        type: "object",
    },
    preTextDimensionsmargin: {
        type: "object",
    },
    preTextFontSize: {
        type: "string",
    },
    preTextFontAppearance: {
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
    preTextLetterSpacing: {
        type: "string",
    },
    preTextDecoration: {
        type: "string",
    },
    preTextLetterCase: {
        type: "string",
    },
    preTextLineHeight: {
        type: "string",
    },
    mainTextColor: {
        type: "string",
    },
    mainTextAlignment: {
        type: "string",
        default: "center"
    },
    mainTextBackground: {
        type: "string",
    },
    mainTextHoverColor: {
        type: "string",
    },
    mainTextHoverBackground: {
        type: "string",
    },
    mainTextDimensionspadding: {
        type: "object",
    },
    mainTextDimensionsmargin: {
        type: "object",
    },
    mainTextFontSize: {
        type: "string",
    },
    mainTextFontAppearance: {
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
    mainTextLetterSpacing: {
        type: "string",
    },
    mainTextDecoration: {
        type: "string",
    },
    mainTextLetterCase: {
        type: "string",
    },
    mainTextLineHeight: {
        type: "string",
    },
    postTextColor: {
        type: "string",
    },
    postTextAlignment: {
        type: "string",
        default: "center"
    },
    postTextBackground: {
        type: "string",
    },
    postTextHoverColor: {
        type: "string",
    },
    postTextHoverBackground: {
        type: "string",
    },
    postTextDimensionspadding: {
        type: "object",
    },
    postTextDimensionsmargin: {
        type: "object",
    },
    postTextFontSize: {
        type: "string",
    },
    postTextFontAppearance: {
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
    postTextLetterSpacing: {
        type: "string",
    },
    postTextDecoration: {
        type: "string",
    },
    postTextLetterCase: {
        type: "string",
    },
    postTextLineHeight: {
        type: "string",
    },
};

export default attributes;