
import { useBlockProps, useInnerBlocksProps } from "@wordpress/block-editor";
import { useSelect } from '@wordpress/data';
import { useEffect } from '@wordpress/element';

    const Save = ({ attributes }) => {

        const wpmozoCoreFun = window.wpmozo,
            ID = attributes.ID,
            blockProps = useBlockProps.save();

        let innerBlocks = [],
           innerBlocksProps = null;

        if (  ! wpmozoCoreFun.wpmozo_is_empty( attributes.images ) ) {
              
            attributes.images.map((logo) => {
                innerBlocks.push(
                    [ 
                        'wpmozo/logo-slide',
                        {
                            logo: logo,
                            lock: { 
                                remove: true 
                            }
                        },
                    ]
                )
            });

            innerBlocksProps = useInnerBlocksProps.save( blockProps, {
                allowedBlocks: [ 'wpmozo/logo-slide' ],
                template: innerBlocks,
            });

        }

        if( wpmozoCoreFun.wpmozo_is_empty( innerBlocks ) ) {
            return null;
        }

        return (
            <div {...innerBlocksProps} id={`block-${ID}`}>
                <div className="swiper" data-client-id={ID}>
                    <div className="swiper-wrapper">
                        { innerBlocksProps.children }
                    </div>
                    <div className="swiper-pagination"></div>
                    <div className="swiper-button-prev"></div>
                    <div className="swiper-button-next"></div>
                </div>
            </div>
        );

    };

export default Save;