// deprecated/version-2.js
import { useBlockProps } from '@wordpress/block-editor';
import generateDynamicStyle from '../style';

const V2 = {
	attributes: {
		ID: { type: "string" },
		className: { type: "string" },

		image: { type: "string" },
		imageAlignment: { type: "string" },
		imageTitle: { type: "string" },
		imageAlt: { type: "string" },

		scrollDirection: { type: "string", default: "top" },
		scrollSpeed: { type: "number", default: 5 },
		containerWidth: { type: "string" },
		containerWidthUnit: { type: "string", default: "%" },
		containerHeight: { type: "string" },
		containerHeightUnit: { type: "string", default: "px" }
	},
	save( { attributes } ) {
		const ID = attributes.ID;

        let image = (attributes.image) ? attributes.image : wpmozo_bna_editor_object.placeholderImg,
            title = attributes.imageTitle;

        return ( <>
            <style>{ generateDynamicStyle( { attributes } ) }</style>

            <div { ...useBlockProps.save( {className: 'wpmozo-bna-scroll-image ' + ( attributes.className || '' ) } ) }
                id={`block-${ID}`}
            >
                <div className="wpmozo-bna-scroll-image-wrapper">
                    <div className="wpmozo-bna-scroll-image-inner-wrap" data-direction={`${attributes.scrollDirection}`}>
                        <img className="wpmozo-bna-scroll-image-img" title={title} src={image} alt={attributes.imageAlt} />
                    </div>
                </div>
            </div>
        </> );
	},
};

export default V2;