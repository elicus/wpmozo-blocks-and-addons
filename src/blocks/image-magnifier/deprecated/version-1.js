// deprecated/version-1.js
import { useBlockProps } from '@wordpress/block-editor';
import generateDynamicStyle from '../style';

const V1 = {
	attributes: {
		ID: { type: "string" },
		className: { type: "string" },

		image: { type: "string" },
		imageAlignment: { type: "string", default: "center" },

		lensWidth: { type: "number", default: 200 },
		lenseSpeed: { type: "number", default: 100 },
		lenseBorderWidth: { type: "number", default: 7 },
		imageWidth: { type: "number", default: 50 },
		imageMaxWidth: { type: "number", default: 100 },
		lenseBorderColor: { type: "string" }
	},
	save( { attributes } ) {
		const ID = attributes.ID;
		let image = ( attributes.image ) ? attributes.image : wpmozo_bna_editor_object.placeholderImg;

		return ( <>
			<style>{ generateDynamicStyle( { attributes } ) }</style>

			<div { ...useBlockProps.save( { className: 'wpmozo-bna-image-magnifier ' + ( attributes.className || '' ) } ) }
				id={`block-${ID}`}
				data-speed={ attributes.lenseSpeed }
				data-src={ image }
			>
				<div className={`wpmozo-bna-image-magnifier-wrapper`}>
					<div className="magnify">
						<img className="wpmozo-bna-image-magnifier-image zoom" src={ image } />
					</div>
				</div>
			</div>
		</> );
	},
};

export default V1;