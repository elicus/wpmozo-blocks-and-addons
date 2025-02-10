
import { useBlockProps, useInnerBlocksProps } from "@wordpress/block-editor";

    const Save = ({ attributes }) => {

        const wpmozoCoreFun = window.wpmozo,
            ID = attributes.ID,
            blockProps = useBlockProps.save();

        let innerBlocks = [],
           innerBlocksProps = null;

        if (  ! wpmozoCoreFun.wpmozo_is_empty( attributes.images ) ) {
              
            attributes.images.map((image) => {
                innerBlocks.push(
                    [ 
                        'wpmozo/floating-image-item',
                        {
                            image: image
                        }
                    ]
                )
            });

            innerBlocksProps = useInnerBlocksProps.save( blockProps, {
                allowedBlocks: [ 'wpmozo/floating-image-item' ],
                template: innerBlocks,
            });

        }

        if( wpmozoCoreFun.wpmozo_is_empty( innerBlocks ) ) {
            return null;
        }

        return (
            <div {...innerBlocksProps} id={`block-${ID}`}>
                <div className="wpmozo-adfgu-floating-image-wrapper">
                    { innerBlocksProps.children }
                </div>
            </div>
        );

    };

export default Save;