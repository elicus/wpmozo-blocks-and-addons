
import { __ } from "@wordpress/i18n";

const attributes = {
    clientId: {
        type: "string",
    },
    accessToken: {
        type: "string",
        default: '',
    },
	cache: {
        type: "integer",
    },
    numberOfPosts: {
        type: "integer",
    },
    posts: {
        type: "object",
        source: 'post',
        post: {type: "object"},
        id: {type: "string"},
        media_url: {type: "string"},
        caption: {type: "string"},
        media_type: {type: "string"},
        timestamp: {type: "string"},
        username: {type: "string"},
        permalink: {type: "string"},
        default: {
            post: { id:'17861060075949818', media_url: "https://scontent.cdninstagram.com/v/t51.29350-15/351781048_630660295786652_5781753493604604306_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=18de74&_nc_ohc=A2QLSuY7hk8AX-tXNOM&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfBu2cIJeh19hQQEwUKg7ayHCGT-WL7BNVYn-ypd1Pklqw&oe=661090D8", caption: "Palm Tree by The Beach🌴", media_type: "IMAGE", timestamp: "2023-06-07T07:51:35+0000", username: "click_click_1999", permalink: "https://www.instagram.com/p/CtLnG3MIRgL/" }
        }

    },
    linkPostToInstagram: {
        type: "boolean",
        default: false
    },
    displayCaption: {
        type: "boolean",
        default: false
    },
    displayButton: {
        type: "boolean",
        default: false
    },
    buttonText: {
        type: "string",
    },
    buttonIcon: {
        type: "string",
    },
    iconPosition: {
        type: "string",
        default: "before"
    },
    iconOnHover: {
        type: "boolean",
        default: false
    },
    postLayout: {
        type: "string",
        default: 'Grid',
    },
    columns: {
        type: "integer",
        default: 3
    },
    columnSpacing: {
        type: "integer",
        default: 30
    },
    captionState: {
        type: "string",
    },
    captionNormalColor: {
        type: "string",
    },
    captionNormalColor: {
        type: "string",
    },
    captionNormalBackground: {
        type: "string",
    },
    captionHoverColor: {
        type: "string",
    },
    captionHoverBackground: {
        type: "string",
    },
    postBorder: {
        type: "object",
        color: {type: "string"},
        style: {type: "string"},
        width: {type: "string"},
        default: {
            color: "#72aee6",
            style: "solid",
            width: "2px", 
        }
    },
    roundedCorners: {
        type: "object",
    },
    captionTypographytext: {
        type: "string",
    },
    captionTypographyFontSize: {
        type: "string",
    },
    captionTypographyFontAppearance: {
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
    captionTypographyLetterSpacing: {
        type: "string",
    },
    captionTypographyDecoration: {
        type: "string",
    },
    captionTypographyLetterCase: {
        type: "string",
    },
    captionTypographyLineHeight: {
        type: "string",
    },
    captionTextDimensionspadding: {
        type: "object",
    },
    captionTextDimensionsmargin: {
        type: "object",
    },
    buttonBorder: {
        type: "object",
        color: {type: "string"},
        style: {type: "string"},
        width: {type: "string"},
        default: {
            color: "#72aee6",
            style: "solid",
            width: "2px", 
        }
    },
    buttonBorderRadius: {
        type: "object",
    },
    buttonNormalColor: {
        type: "string",
    },
    buttonNormalBackground: {
        type: "string",
    },
    buttonHoverColor: {
        type: "string",
    },
    buttonHoverBackground: {
        type: "string",
    },
    buttonFontSize: {
        type: "integer",
    },
    buttonDimensionspadding: {
        type: "object",
    },
    buttonDimensionsmargin: {
        type: "object",
    },
    farziAttribute:{
        type:"object",
        default: "mai hu farzi",
    }
};

export default attributes;