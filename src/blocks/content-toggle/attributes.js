
import { __ } from "@wordpress/i18n";

const attributes = {
    ID: {
        type: "string",
    },
    toggleSwitchType: {
        type: "string",
        default: 'rounded',
    },
    toggleSwitchAlignment: {
        type: "string",
    },
    toggleSwitchColor: {
        type: "string",
    },
    toggleSwitchOnState: {
        type: "string",
    },
    toggleSwitchBackground: {
        type: "string",
    },
    toggleSwitchOnStateBackground: {
        type: "string",
    },
    toggleSwitchHoverColor: {
        type: "string",
    },
    toggleSwitchHoverOnState: {
        type: "string",
    },
    toggleSwitchHoverBackground: {
        type: "string",
    },
    toggleSwitchHoverOnStateBackground: {
        type: "string",
    },
    toggleSwitchDimensionspadding: {
        type: "object",
    },
    toggleSwitchDimensionsmargin: {
        type: "object",
    },
    toggleOneTitle: {
        type: "string",
        default: __('Title One', 'wpmozo-addons-lite-for-gutenberg')
    },
    titleOneColor: {
        type: "string",
    },
    titleOneIconSize: {
        type: "number",
    },
    titleOneIconSpacing: {
        type: "number",
    },
    titleOneIconColor: {
        type: "string",
    },
    titleOneFontSize: {
        type: "string",
    },
    titleOneFontAppearance: {
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
    titleOneLetterSpacing: {
        type: "string",
    },
    titleOneDecoration: {
        type: "string",
    },
    titleOneLetterCase: {
        type: "string",
    },
    titleOneLineHeight: {
        type: "string",
    },
    toggleOneIcon: {
        type: "string",
    },
    toggleOneIconPostion: {
        type: "string",
        default: "before",
    },
    toggleTwoTitle: {
        type: "string",
        default: __('Title Two', 'wpmozo-addons-lite-for-gutenberg')
    },
    toggleTwoIcon: {
        type: "string",
    },
    toggleTwoIconPostion: {
        type: "string",
        default: "before",
    },
    titleTwoColor: {
        type: "string",
    },
    titleTwoIconSize: {
        type: "number",
    },
    titleTwoIconSpacing: {
        type: "number",
    },
    titleTwoIconColor: {
        type: "string",
    },
    titleTwoFontSize: {
        type: "string",
    },
    titleTwoFontAppearance: {
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
    titleTwoLetterSpacing: {
        type: "string",
    },
    titleTwoDecoration: {
        type: "string",
    },
    titleTwoLetterCase: {
        type: "string",
    },
    titleTwoLineHeight: {
        type: "string",
    },
    toggleTwoIcon: {
        type: "string",
    },
    toggleTwoIconPostion: {
        type: "string",
        default: "before",
    },
    contentOneColor: {
        type: "string",
    },
    contentOneBackground: {
        type: "string",
    },
    contentOneFontSize: {
        type: "string",
    },
    contentOneFontAppearance: {
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
    contentOneLetterSpacing: {
        type: "string",
    },
    contentOneDecoration: {
        type: "string",
    },
    contentOneLetterCase: {
        type: "string",
    },
    contentOneLineHeight: {
        type: "string",
    },
    contentOneDimensionspadding: {
        type: "object",
    },
    contentOneDimensionsmargin: {
        type: "object",
    },
    contentOneAlignment: {
        type: "string",
    },
    contentTwoColor: {
        type: "string",
    },
    contentTwoBackground: {
        type: "string",
    },
    contentTwoFontSize: {
        type: "string",
    },
    contentTwoFontAppearance: {
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
    contentTwoLetterSpacing: {
        type: "string",
    },
    contentTwoDecoration: {
        type: "string",
    },
    contentTwoLetterCase: {
        type: "string",
    },
    contentTwoLineHeight: {
        type: "string",
    },
    contentTwoDimensionspadding: {
        type: "object",
    },
    contentTwoDimensionsmargin: {
        type: "object",
    },
    contentTwoAlignment: {
        type: "string",
    }
};

export default attributes;