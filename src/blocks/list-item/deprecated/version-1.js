import { useBlockProps, RichText } from '@wordpress/block-editor';

const deprecatedSave = ({ attributes }) => {
    const clientId       = attributes.ID,
        blockProps = useBlockProps.save({ className: "wpmozo-bna-list-item", ID:`block-${clientId}` });

    return (
        <div { ...blockProps }>
            <div className="list-item-wrap">
                {attributes.markerType === "icon" && !attributes.styleIcon && (
                    <div className="wpmozo-bna-list-icon use-icon">
                        <i className={attributes.markerIcon}></i>
                    </div>
                )}
                {attributes.markerType === "icon" && attributes.styleIcon && 
                    (attributes.iconShape === "square" || attributes.iconShape === "circle") && (
                    <div className={`wpmozo-bna-list-icon use-icon use-${attributes.iconShape}`}>
                        <i className={`${attributes.markerIcon} wpmozo-bna-icon-${attributes.iconShape} 
                        ${attributes.enableShapeBorder ? "wpmozo-bna-icon-shape-border" : ""}`}></i>
                    </div>
                )}
                {attributes.markerType === "icon" && attributes.styleIcon && attributes.iconShape === "hexagon" && (
                    <div className="wpmozo-bna-list-icon use-icon shape-hexagon">
                        <div className={`hexagon ${attributes.enableShapeBorder ? "wpmozo-bna-border-hex" : ""}`}>
                            <i className={attributes.markerIcon}></i>
                        </div>
                    </div>
                )}
                {attributes.markerType === "image" && (
                    <img className="wpmozo-bna-marker-image" src={attributes.markerImage} alt="" />
                )}
                <div className="wpmozo-bna-list-item-text">
                    <RichText.Content tagName="p" value={attributes.text} />
                </div>
                <div className="wpmozo-bna-list-divider"></div>
            </div>
        </div>
    );
};

export default {
    attributes: {
        // Same as old v1.0.0 attributes
        ID: { type: "string" },
        itemmargin: { type: "object" },
        itempadding: { type: "object" },
        itemBackgroundColor: { type: "text" },
        itemBackgroundGradient: { type: "text" },
        text: { type: "rich-text", source: "rich-text", selector: "p", role: "text" },
        markerType: { type: "string", default: "icon" },
        markerIcon: { type: "string", default:"fas fa-check" },
        styleIcon: { type: "boolean", default:false },
        iconShape: { type: "string", default:"square" },
        iconColor: { type: "string" },
        shapeBackground: { type: "string" },
        enableShapeBorder: { type: "boolean", default: false },
        shapeBorderColor: { type: "string" },
        markerImage: { type: "string", default:"" },
        textNormalColor: { type: "string", default: "", },
        textHoverColor: { type: "string", default: "", },
        textNormalFontSize: { type: "string", default: "" },
        textNormalFontAppearance: { type: "object", fontStyle: { type: "string", }, fontWeight: { type: "string", }, default: { fontStyle: "", fontWeight: "", } },
        textNormalLetterSpacing: { type: "string", default: "" },
        textNormalDecoration: { type: "string", default: "" },
        textNormalLetterCase: { type: "string", default: "" },
        textNormalLineHeight: { type: "string", default: "" },
        textHoverFontSize: { type: "string", default: "" },
        textHoverFontAppearance: { type: "object", fontStyle: { type: "string", }, fontWeight: { type: "string", }, default: { fontStyle: "", fontWeight: "", } },
        textHoverLetterSpacing: { type: "string", default: "" },
        textHoverDecoration: { type: "string", default: "" },
        textHoverLetterCase: { type: "string", default: "" },
        textHoverLineHeight: { type: "string", default: "" },
    },
    save: deprecatedSave,
};
