// deprecated/version-1.js
import classnames from 'classnames';
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import generateDynamicStyle from "../style";

const V1 = {
    attributes: {
        ID: { type: "string" },
		className: { type: "string" },

		images_data: {
			type: "array",
			default: [],
			source: "query",
			selector: ".wpmozo-blocks-and-addons-gallery--item",
			query: { url: {
				source: "attribute",
				selector: "img",
				attribute: "src"
			} }
		},
		showLightbox: { type: "boolean", default: false },
		lightboxBackgroundColor: { type: "string", default: "" },
		lightboxCloseIconColor: { type: "string", default: "" },
		enableOverlay: { type: "boolean", default: false },
		overlayBackgroundColor: { type: "string" },
		overlayIconSize: { type: "number" },
		overlayIconColor: { type: "string" },
		overlayIcon: { type: "string" }
    },
    save( { attributes } ) {
        let clientId = attributes.ID;

        const className = classnames( 'wpmozo-mystery-image' );

        const hasLightbox = attributes.showLightbox === true,
            hasOverlay = attributes.enableOverlay === true;

        return (
            <>
                <style>{ generateDynamicStyle( { attributes, clientId } ) }</style>

                <div id={ `block-${clientId}`} >
                    <div
                        { ...useBlockProps.save( {
                            className: classnames( className, attributes.className, {
                                'wpmozo-mystery-image-lightbox': hasLightbox,
                                'wpmozo-mystery-image-overlay': hasOverlay
                            } )
                        } ) }
                        data-lightbox_effect="none"
                        data-lightbox_transition_duration="300"
                        data-icon={attributes.overlayIcon}
                    >
                        <InnerBlocks.Content />
                    </div>
                </div>
            </>
        );
    },
};

export default V1;