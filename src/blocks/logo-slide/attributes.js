
import { __ } from "@wordpress/i18n";

const attributes = {
    ID: {
        type: "string"
    },
	logo: {
		type: "object"
	},
	altText: {
		type: "string"
	},
	link: {
		type: "string"
	},
	linkTarget: {
		type: "string",
		default: "same"
	},
	logoBackground: {
		type: "string"
	},
	logopadding: {
		type: "object"
	},
	logoborderRadius: {
        type: "string"
    },
    logoborder: {
        type: "object"
    }
};

export default attributes;