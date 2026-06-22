// deprecated/version-1.js
import { useBlockProps } from '@wordpress/block-editor';
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

		imagesWidth: {type: "number",default: 60},
		imagesHeight: {type: "number",default: 240},
		imagesGap: {type: "number",default: 15},
		showOverlayTitle: {type: "boolean",default: true},

		containermargin: {type: "object"},
		containerpadding: {type: "object"},
		containerborder: {type: "object"},
		containerborderRadius: {type: "string"},

		lightboxBackgroundColor: {type: "string"},

		textAlign: {type: "string",default: "left"},
		lightboxTitleColor: {type: "string"},
		lightboxTitleFontSize: { type: "string" },
		lightboxTitleFontAppearance: {
			type: "object",
			default: { fontStyle: "", fontWeight: "" }
		},
		lightboxTitleLetterSpacing: { type: "string" },
		lightboxTitleDecoration: { type: "string" },
		lightboxTitleLetterCase: { type: "string" },
		lightboxTitleLineHeight: { type: "string" }

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
                        <div className="wpmozo_wavy_gallery_wrapper" data-show_overlay_title={`${attributes.showOverlayTitle}`}>
                            <div className="wpmozo_wavy_gallery_items">
                                <div className="wpmozo_wavy_gallery_items">
                                    {attributes.images_data && attributes.images_data.length > 0 && (
                                        attributes.images_data.map((image, idx) => (
                                            <div className="wpmozo_wavy_gallery_item">
                                                <img className={`wpmozo_wavy_gallery_image`} src={image.url}
                                                    alt={image.alt || ''} title={image.caption || ''}/>
                                            </div>
                                        ))
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