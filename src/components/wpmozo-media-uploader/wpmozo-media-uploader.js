
import {
    Button,
} from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import { MediaUpload, MediaUploadCheck } from "@wordpress/block-editor";
import { Fragment } from "@wordpress/element";
const el = window.wp.element.createElement;

const WpmozoMediaUploader = function(args){
	
    const editImage  = ( args.hasOwnProperty('edit') ) ? args.edit : __("Edit Image", "wpmozo-blocks-and-addons"),
        selectImage  = ( args.hasOwnProperty('select') ) ? args.select : __("Select Image", "wpmozo-blocks-and-addons"),
        allowedTypes = ( args.hasOwnProperty('allowedTypes') ) ? args.allowedTypes : ["image"],
        accept       = ( args.hasOwnProperty('accept') ) ? args.accept : "image/*",
        props        = args.props,
        attrKye      = args.attrKye,
        imageSrc     = ( args.hasOwnProperty('imageSrc') ) ? args.imageSrc : props.attributes[ attrKye ];

    const onSelect = function( media ){
        props.setAttributes( { [ attrKye ]: media.url} );
    }

	return [
        el(MediaUploadCheck, {
            key: 'wpmozo-media-uploader-check',
            }, 
            el(MediaUpload, {
                key: 'wpmozo-media-uploader-el',
                onSelect: (media) => {
                    if ( args.hasOwnProperty('onSelect') ) {
                        args.onSelect(media);
                    }else{
                       onSelect(media); 
                    }
                },
                allowedTypes: allowedTypes,
                accept: accept,
                value: imageSrc,
                render: ({ open }) => {
                    return el(Fragment, {
                        key: 'wpmozo-media-uploader-fragment',
                        },
                        el('div', {
                            key: 'wpmozo-media-uploader-wrap',
                            className: "components-base-control wpmozo-media-uploader-wrap",
                            children: [
                               imageSrc &&
                                el('img',
                                  {
                                    key: 'wpmozo-media-uploader-img',
                                    className: "wpmozo-media-uploader",
                                    src: imageSrc,
                                  },
                                ),
                                el(Button, {
                                  key: 'wpmozo-media-uploader-btn',
                                  isPrimary: true,
                                  onClick: (event) => {
                                    event.stopPropagation();
                                    open();
                                  },
                                  children:
                                   imageSrc
                                      ? editImage
                                      : selectImage
                                })
                            ],
                        })
                    );
                }
            })
        )
    ];

}

export default WpmozoMediaUploader;