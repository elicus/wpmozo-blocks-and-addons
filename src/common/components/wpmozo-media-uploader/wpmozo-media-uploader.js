import { Button, BaseControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import { MediaUpload, MediaUploadCheck } from "@wordpress/block-editor";
import { Fragment } from "@wordpress/element";
import { Icon, image as imageIcon } from "@wordpress/icons";


const WpmozoMediaUploader = ( {
    props,
    attrKye,
    attrKey = attrKye, // Correctly spelled alias of `attrKye`.
    edit,
    select,
    allowedTypes,
    accept,
    imageSrc: customImageSrc,
    mediaId, // Optional attachment ID, so the media modal preselects the image.
    onSelect: customOnSelect,
    onRemove: customOnRemove, // Optional, for images not stored in a top-level attribute.
    label = '', // ← Default label
} ) => {
    const editImage = edit || __("Replace", "wpmozo-blocks-and-addons");
    const selectImage = select || __("Select Image", "wpmozo-blocks-and-addons");
    const allowed = allowedTypes || ["image"];
    const accepted = accept || "image/*";
    const imageSrc = customImageSrc || props.attributes[attrKey];
    const defaultOnSelect = (media) => {
        props.setAttributes( { [attrKey]: media.url } );
    };

    const handleSelect = ( media ) => {
        if (customOnSelect) {
            customOnSelect( media );
        } else {
            defaultOnSelect( media );
        }
    };

    const handleRemove = () => {
        if ( customOnRemove ) {
            customOnRemove();
        } else {
            props.setAttributes( { [attrKey]: '' } );
        }
    };

    return (
        <MediaUploadCheck>
            <MediaUpload
                onSelect={handleSelect}
                allowedTypes={allowed}
                accept={accepted}
                value={ mediaId || imageSrc }
                render={({ open }) => (
                    <Fragment>
                        <BaseControl label={ label }>
                        <div className="components-base-control wpmozo-media-uploader-wrap">
                            {imageSrc ? (
                                <Fragment>
                                    <Button onClick={(event) => {
                                        event.stopPropagation();
                                        open();
                                    }} className={'wpmozo-media-uploader-button'}>
                                        <img
                                            className="wpmozo-media-uploader"
                                            src={imageSrc}
                                            alt={__("Selected image", "wpmozo-blocks-and-addons")}
                                        />
                                    </Button>
                                    <div className="wpmozo-media-uploader-actions">
                                        <Button
                                            variant="secondary"
                                            size="compact"
                                            onClick={(event) => {
                                                event.stopPropagation();
                                                open();
                                            }}
                                        >
                                            {editImage}
                                        </Button>
                                        <Button
                                            variant="tertiary"
                                            size="compact"
                                            isDestructive
                                            onClick={handleRemove}
                                        >
                                            { __( "Remove", "wpmozo-blocks-and-addons" ) }
                                        </Button>
                                    </div>
                                </Fragment>
                            ) : (
                                <button
                                    type="button"
                                    className="wpmozo-media-uploader-dropzone"
                                    onClick={(event) => {
                                        event.stopPropagation();
                                        open();
                                    }}
                                >
                                    <Icon icon={ imageIcon } />
                                    {selectImage}
                                </button>
                            )}
                        </div>
                        </BaseControl>
                    </Fragment>
                )}
            />
        </MediaUploadCheck>
    );
};

export default WpmozoMediaUploader;
