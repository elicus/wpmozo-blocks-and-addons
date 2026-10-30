// deprecated/version-2.js
import { useBlockProps, RichText } from "@wordpress/block-editor";
import generateDynamicStyle from './style';

const V2 = {
    attributes: {
        ID: { type: "string" },
		className: { type: "string" },

		title: { type: "string", default: "Image Card Title" },
		titleLevel: { type: "string", default: "h2" },
		titleNormalColor: { type: "string", default: "#222222" },
		titleHoverColor: { type: "string", default: "" },
		titleNormalFontSize: { type: "string" },
		titleNormalFontAppearance: { type: "object", default: { fontStyle: "", fontWeight: "" } },
		titleNormalLetterSpacing: { type: "string" },
		titleNormalDecoration: { type: "string" },
		titleNormalLetterCase: { type: "string" },
		titleNormalLineHeight: { type: "string" },
		titleHoverFontSize: { type: "string" },
		titleHoverFontAppearance: { type: "object", default: { fontStyle: "", fontWeight: "" } },
		titleHoverLetterSpacing: { type: "string" },
		titleHoverDecoration: { type: "string" },
		titleHoverLetterCase: { type: "string" },
		titleHoverLineHeight: { type: "string" },
		titleAlign: { type: "string", default: "center" },

		content: { type: "string", default: "Your content goes here. Edit this text inline or in the widget Content settings. You can also style every aspect of this content in the widget Design settings." },
		contentColor: { type: "string", default: "#222222" },
		contentFontSize: { type: "string" },
		contentFontAppearance: { type: "object", default: { fontStyle: "", fontWeight: "" } },
		contentLetterSpacing: { type: "string" },
		contentDecoration: { type: "string" },
		contentLetterCase: { type: "string" },
		contentLineHeight: { type: "string" },
		contentAlign: { type: "string", default: "center" },

		backImage: { type: "string" },
		imageOpacity: { type: "number", default: 0.7 },

		layout: { type: "string", default: "lily" },
		layoutborder: {
			type: "object",
			default: { color: "#000000", width: "1px", style: "solid" }
		},

		overlayColor: { type: "string" }
    },
    save( { attributes } ) {
        const ID = attributes.ID;

        const backImage = ( attributes.backImage ) ? attributes.backImage : wpmozo_bna_editor_object.placeholderImg;

        return ( <>
            <style>{ generateDynamicStyle( { attributes } ) }</style>

            <div id={`block-${ID}`} { ...useBlockProps.save( { className: 'wpmozo-bna-interactive-image-card-main ' + attributes.className } ) }>
                <div className="wpmozo-bna-interactive-image-card-wrap">
                    <figure className={`effect-${attributes.layout}`}>
                        <img className="wpmozo-bna-interactive-image-card-image" src={backImage}/>
                        <figcaption>
                            <div className="wpmozo-bna-interactive-image-card-inner">
                                <RichText.Content
                                    className="wpmozo-bna-interactive-image-card-title"
                                    tagName={ attributes.titleLevel }
                                    value={ attributes.title }
                                />
                                <RichText.Content
                                    tagName="div"
                                    className="wpmozo-bna-interactive-image-card-content"
                                    value={ attributes.content }
                                />
                            </div>
                        </figcaption>
                    </figure>
                </div>
            </div>
        </> );
    },
};

export default V2;