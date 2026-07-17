import { __ } from '@wordpress/i18n';
import { 
    InnerBlocks,
    useBlockProps,
    MediaPlaceholder
} from '@wordpress/block-editor';
import Inspector from './inspector';
import generateDynamicStyle from './style';
import { Fragment, useMemo, useEffect } from "@wordpress/element";
import { wpmozo_is_empty, mergeWrapperProps } from '../../common/utils.js';

export default function Edit(props) {
    const { attributes, setAttributes, clientId } = props;
    const wrapArgs = attributes?.ID && mergeWrapperProps( { 
        className: `wpmozo-bna-floating-image${ attributes?.wrapIsHover ? ' is_hover' : '' }` ,
        style: {}
    }, attributes ),
    wrapProps = wrapArgs?.wrapprops,
    blockProps = useBlockProps(wrapProps),
    wrapStyle = wrapArgs?.wrapStyle;
    
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
    useEffect( () => {
        if ( attributes.ID !== clientId ) {
            setAttributes( { ID: clientId } );
        }
        const updates = {};
        if ( attributes.ID !== clientId ) {
            updates.ID = clientId;
        }

        // wrapStyle recalculate karke attribute mein store karo
        if ( attributes.ID ) {
            if ( wrapStyle && wrapStyle !== attributes.wrapStyle ) {
                updates.wrapStyle = wrapStyle;
            }
        }

        if ( Object.keys( updates ).length ) {
            setAttributes( updates );
        }
    }, [ clientId, JSON.stringify( attributes ) ] );
    
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
