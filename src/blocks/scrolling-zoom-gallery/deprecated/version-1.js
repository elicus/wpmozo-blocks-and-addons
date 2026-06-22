// deprecated/version-1.js
import { useBlockProps } from "@wordpress/block-editor";
import generateDynamicStyle from "../style";

const V1 = {
    attributes: {
        ID: { type: "string" },
		className: { type: "string" },
		images: {
			type: "array",
			default: [],
			source: "query",
			selector: ".wpmozo-blocks-and-addons-gallery--item",
			query: {
				url: {
					source: "attribute",
					selector: "img",
					attribute: "src"
				}
			}
		},
		images_data: {
			type: "array"
		},

		onLoadVisibility: {type: "number",default: 0.1},
		noImagesText: {type: "string",default:"No images found. Please try uploading again."},

		normalborder: {type: "object"},
		normalborderRadius: {type: "string"},
		hoverborder: {type: "object"},
		hoverborderRadius: {type: "string"},

		filledBackgroundType: {type: "string",default: "classic"},
		classicBackgroundColor: {type: "string"},
		classicBackgroundImage: {type: "string"},
		gradientBackgroundColor: {type: "string"}
    },
    save( { attributes } ) {
        const { ID, className } = attributes;

        // Only add ID attribute if it exists.
        const blockProps = useBlockProps.save( {
            className: className,
            ...( ID ? { id: `block-${ ID }` } : {} ),
        } );


        return (<>
            {attributes.images_data && (
                <>
                    {/*Only output <style> if ID exists.*/}
                    { ( ID && '' !== ID ) && (
                        <style>{ generateDynamicStyle( { attributes } ) }</style>
                    ) }

                    <div {...blockProps}>
                        <div className="wpmozo_scroll_zoom_gallery_scroller" data-start_opacity={attributes.onLoadVisibility}>
                            <div className="wpmozo_scroll_zoom_gallery_wrapper">
                                <div className="wpmozo_scroll_zoom_gallery_inner">
                                    {attributes.images_data && attributes.images_data.length > 0 && (
                                        attributes.images_data.map((image, idx) => (
                                            <div className="wpmozo_scroll_zoom_gallery_item">
                                                <img className={`wpmozo_scroll_zoom_gallery_image`} src={image.url}
                                                    alt={image.alt || ''}/>
                                            </div>
                                        ))
                                    )}
                                    {!attributes.images_data && (
                                        <div className="wpmozo_scroll_zoom_gallery_no_item">
                                            <h3>{attributes.noImagesText}</h3>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>);
    },
};

export default V1;