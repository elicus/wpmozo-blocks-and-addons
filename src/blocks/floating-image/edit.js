
import Inspector from "./inspector";
import Style from "./style";

import { __ } from "@wordpress/i18n";
import { Fragment } from "@wordpress/element";
import {
    useBlockProps,
    MediaPlaceholder,
    useInnerBlocksProps
} from '@wordpress/block-editor';

import { useRef, useEffect } from 'react';

const Edit = (props) => {

    const wpmozoCoreFun = window.wpmozo,
    attributes = props.attributes,
    setAttributes = props.setAttributes,
    clientId = props.clientId,
    ID = window.wpmozo.getIdByClientid( clientId ),
    blockProps = useBlockProps();

    attributes.ID = ID;

    let innerBlocks = [];

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
    }

    const innerBlocksProps = useInnerBlocksProps( blockProps, {
        allowedBlocks: [ 'wpmozo/floating-image-item' ],
        template: innerBlocks,
    });

	return (
        <Fragment>
        { wpmozoCoreFun.wpmozo_is_empty( attributes.images ) &&
           <MediaPlaceholder
                multiple={true}
                gallery={false}
                onSelect={(media) =>
                    setAttributes({
                        images: media,
                    })
                }
                onFilesPreUpload={(media) =>
                    setAttributes({
                        images: media,
                    })
                }
                onSelectURL={false}
                allowedTypes={['-','image']}
                labels={{
                    title: __(
                        'Add Images',
                        'wpmozo-addons-lite-for-gutenberg'
                    ),
                }}
                accept="image/*"
            />
        }
        { ! wpmozoCoreFun.wpmozo_is_empty( innerBlocks ) &&
            <Fragment>
                <Inspector {...props} />
                <div { ...blockProps } id={`block-${clientId}`}>
                    <Style 
                attributes={attributes} 
                ID={ID}
                clientId={clientId}  
            />
                    <div className="wpmozo-adfgu-floating-image-wrapper">
                        { innerBlocksProps.children }
                    </div>
                </div>
            </Fragment>
        }
        </Fragment>
    );

};

export default Edit;