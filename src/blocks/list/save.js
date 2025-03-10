
import { InnerBlocks, useBlockProps, useInnerBlocksProps } from "@wordpress/block-editor";

    const Save = (props) => {

        const wpmozoCoreFun = window.wpmozo,
        attributes = props.attributes,
        ID = attributes.ID,
        blockProps = useBlockProps.save({ className: 'wpmozo-adfgu-list' });
        const TEMPLATE = [
            [ 'wpmozo/list-item', {} ] // Prefills a child block when parent is inserted
        ];
        const hideDivider = true === attributes.lastDivider ? "wpmozo-adfgu-hide-last-divider" : "";

        return (
            <div { ...blockProps } id={`block-${ID}`}>
                <div>
                    <div className="wpmozo-adfgu-list-wrapper">
                        <div className={"wpmozo-adfgu-list-layout wpmozo-adfgu-list-"+attributes.layout+ " " + hideDivider}>
                            <InnerBlocks.Content/>
                        </div>
                    </div>
                </div>
            </div>
        );

    };

export default Save;