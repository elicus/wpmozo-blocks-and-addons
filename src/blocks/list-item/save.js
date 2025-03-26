import { useBlockProps, RichText } from "@wordpress/block-editor";

const Save = (props) => {
    const { attributes } = props;
    const clientId       = attributes.ID;
    const blockProps = useBlockProps.save({ className: "wpmozo-bna-list-item", ID:`block-${clientId}` });

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

export default Save;
