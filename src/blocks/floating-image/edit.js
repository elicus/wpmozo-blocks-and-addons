import { __ } from '@wordpress/i18n';
import { 
    InnerBlocks,
    useBlockProps,
    MediaPlaceholder
} from '@wordpress/block-editor';
import Inspector from './inspector';
import generateDynamicStyle from './style';
import { Fragment, useMemo } from "@wordpress/element";
import { wpmozo_is_empty } from '../../common/utils.js';

export default function Edit(props) {
    const { attributes, setAttributes, clientId } = props;
    attributes.ID = clientId;
    const blockProps = useBlockProps({ className: 'wpmozo-bna-floating-image' });

    const { images = [] } = attributes;
    const TEMPLATE = useMemo(() => {
        if (!wpmozo_is_empty(images)) {
            return images.map((image) => [
                'wpmozo/floating-image-item',
                { image },
            ]);
        }
        return [];
    }, [images]);

    return (
        <Fragment>
            { wpmozo_is_empty(images) &&
                <MediaPlaceholder
                    multiple={true}
                    gallery={false}
                    onSelect={(media) =>
                        setAttributes({ images: media })
                    }
                    onFilesPreUpload={(media) =>
                        setAttributes({ images: media })
                    }
                    onSelectURL={false}
                    allowedTypes={['-','image']}
                    labels={{
                        title: __('Add Images', 'wpmozo-blocks-and-addons'),
                    }}
                    accept="image/*"
                />
            }

            { !wpmozo_is_empty(images) &&
                <Fragment>
                    <Inspector attributes={attributes} setAttributes={setAttributes} />
                    <div {...blockProps}>
                        <div className="wpmozo-bna-floating-image-wrapper">
                            <InnerBlocks
                                template={TEMPLATE}
                                templateLock={false}
                                allowedBlocks={['wpmozo/floating-image-item']}
                            />
                        </div>
                    </div>
                    <style>
                        { generateDynamicStyle({ attributes, clientId }) }
                    </style>
                </Fragment>
            }
        </Fragment>
    );
}
