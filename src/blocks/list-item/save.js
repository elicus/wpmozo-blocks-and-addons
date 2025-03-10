import { useBlockProps, RichText } from "@wordpress/block-editor";

const Save = (props) => {
    const { attributes } = props;
    const clientId       = attributes.ID;
    const blockProps = useBlockProps.save({ className: "wpmozo-adfgu-list-item" });

    return (
        <div { ...blockProps }>
            <div className="list-item-wrap" id={`block-${clientId}`}>
                {attributes.markerType === "icon" && !attributes.styleIcon && (
                    <div className="wpmozo-adfgu-list-icon use-icon">
                        <i className={attributes.markerIcon}></i>
                    </div>
                )}
                {attributes.markerType === "icon" && attributes.styleIcon && 
                    (attributes.iconShape === "square" || attributes.iconShape === "circle") && (
                    <div className={`wpmozo-adfgu-list-icon use-icon use-${attributes.iconShape}`}>
                        <i className={`${attributes.markerIcon} wpmozo-adfgu-icon-${attributes.iconShape} 
                        ${attributes.enableShapeBorder ? "wpmozo-adfgu-icon-shape-border" : ""}`}></i>
                    </div>
                )}
                {attributes.markerType === "icon" && attributes.styleIcon && attributes.iconShape === "hexagon" && (
                    <div className="wpmozo-adfgu-list-icon use-icon shape-hexagon">
                        <div className={`hexagon ${attributes.enableShapeBorder ? "wpmozo-adfgu-border-hex" : ""}`}>
                            <i className={attributes.markerIcon}></i>
                        </div>
                    </div>
                )}
                {attributes.markerType === "image" && (
                    <img className="wpmozo-adfgu-marker-image" src={attributes.markerImage} alt="" />
                )}
                <div className="wpmozo-adfgu-list-item-text">
                    <RichText.Content tagName="p" value={attributes.text} />
                </div>
                <div className="wpmozo-adfgu-list-divider"></div>
            </div>
        </div>
    );
};

export default Save;
