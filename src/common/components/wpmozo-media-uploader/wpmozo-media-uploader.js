import { Button, BaseControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import { MediaUpload, MediaUploadCheck } from "@wordpress/block-editor";
import { Fragment } from "@wordpress/element";
import './style.scss';

const WpmozoMediaUploader = ( {
    props,
    attrKye,
    edit,
    select,
    allowedTypes,
    accept,
    imageSrc: customImageSrc,
    onSelect: customOnSelect,
    label = '', // ← Default label
} ) => {
    const editImage = edit || __("Edit Image", "wpmozo-blocks-and-addons");
    const selectImage = select || __("Select Image", "wpmozo-blocks-and-addons");
    const allowed = allowedTypes || ["image"];
    const accepted = accept || "image/*";
    const imageSrc = customImageSrc || props.attributes[attrKye];

    const defaultOnSelect = (media) => {
        props.setAttributes( { [attrKye]: media.url } );
    };

    const handleSelect = ( media ) => {
        if (customOnSelect) {
            customOnSelect( media );
        } else {
            defaultOnSelect( media );
        }
    };

    const handleRemove = () => {
        props.setAttributes( { [attrKye]: '' } );
    };

    return (
        <MediaUploadCheck>
            <MediaUpload
                onSelect={handleSelect}
                allowedTypes={allowed}
                accept={accepted}
                value={imageSrc}
                render={({ open }) => (
                    <Fragment>
                        <BaseControl label={ label }>
                        <div className="components-base-control wpmozo-media-uploader-wrap">
                            {imageSrc && (
                                <img
                                    className="wpmozo-media-uploader"
                                    src={imageSrc}
                                    alt={__("Selected image", "wpmozo-blocks-and-addons")}
                                />
                            )}
                            <Button
                                isPrimary
                                onClick={(event) => {
                                    event.stopPropagation();
                                    open();
                                }}
                            >
                                {imageSrc ? editImage : selectImage}
                            </Button>
                            { imageSrc && (
                                <Button
                                    isLink
                                    isDestructive
                                    onClick={handleRemove}
                                    style={ { marginLeft: '10px', verticalAlign: 'super' } }
                                >
                                    { __( "Remove Image", "wpmozo-blocks-and-addons" ) }
                                </Button>
                            ) }
                        </div>
                        </BaseControl>
                    </Fragment>
                )}
            />
        </MediaUploadCheck>
    );
};

export default WpmozoMediaUploader;
