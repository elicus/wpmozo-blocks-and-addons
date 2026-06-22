// deprecated/version-1.js
import { useBlockProps } from "@wordpress/block-editor";
import generateDynamicStyle from '../style';

const V1 = {
    attributes: {
        ID: { type: "string" },
		className: { type: "string" },

		image: { type: "string" },
		icon: { type: "string", default: "fas fa-house" },
		rotatingText: { type: "string", default: "Your content goes here" },
		useImage: { type: "boolean", default: false },

		wrapperBackground: { type: "string" },
		rotatingAlign: {type: "string",default: "left"},
		circleSize: { type: "string", default: "150px" },
		circleAnimationSpeed: { type: "number", default: 8000 },
		textRotation: {type: "string",default: "clockwise"},

		wrapperborder: { type: "object" },
        wrapperborderRadius: { type: "string" },

        textColor: { type: "string" },
        textFontSize: { type: "string" },
		textFontAppearance: {
			type: "object",
			fontStyle: { type: "string" },
			fontWeight: { type: "string" },
			default: {
				fontStyle: "",
				fontWeight: ""
			}
		},
		textLetterSpacing: { type: "string" },
		textDecoration: { type: "string" },
		textLetterCase: { type: "string" },
		textLineHeight: { type: "string" },

		elementColor: { type: "string" },
		elementBackground: { type: "string" },
		elementWrapperSize: { type: "string" },
		iconSize: { type: "string" },
		elementpadding: { type: "object" },
		elementborder: { type: "object" },
        elementborderRadius: { type: "string" }
    },
    save( { attributes } ) {
        const { ID, className } = attributes;

        let image = ( attributes.image ) ? attributes.image : wpmozo_bna_editor_object.placeholderImg,
            useImage = attributes.useImage,
            text = attributes.rotatingText,
            iconImage = null;

        if ( useImage ) {
            iconImage = (
                <img
                    src={image}
                    alt=""
                    className="wpmozo-bna-rotating-text-img-img_icon"
                />
            );
        } else if ( attributes.icon ) {
            iconImage = (
                <div className="icon-wrapper">
                    <i className={attributes.icon}></i>
                </div>
            );
        }

        // Only add ID attribute if it exists
        const blockProps = useBlockProps.save( {
            className: 'wpmozo-bna-rotating-text ' + ( className || '' ),
            ...( ID ? { id: `block-${ ID }` } : {} ),
        } );

        return ( <>
            {/* Only output <style> if ID exists. */}
            { ( ID && '' !== ID ) && (
                <style>{ generateDynamicStyle( { attributes } ) }</style>
            ) }
            <div {...blockProps}>
                <div className="wpmozo-bna-rotating-text-wrap">
                    <div className="wpmozo-bna-rotating-text-inner">
                        <p>{text}</p>
                    </div>
                    {iconImage && (
                        <div className="wpmozo-bna-rotating-text-icon-wrapper">
                            {iconImage}
                        </div>
                    )}
                </div>
            </div>
        </>);
    },
};

export default V1;