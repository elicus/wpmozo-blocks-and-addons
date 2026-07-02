import { useBlockProps } from "@wordpress/block-editor";
import generateDynamicStyle from './style';

export default function save({attributes}) {
	const ID = attributes.ID;
	let image = (attributes.image) ? attributes.image : wpmozo_bna_editor_object.placeholderImg;

	return ( <>
		<style>{ generateDynamicStyle( { attributes } ) }</style>

		<div { ...useBlockProps.save( {className: 'wpmozo-bna-image-magnifier ' + ( attributes.className || '' ) } ) }
			id={`block-${ID}`}
			data-speed={attributes.lenseSpeed}
			data-src={image}
		>
			<div className={`wpmozo-bna-image-magnifier-wrapper`}>
				<div className="magnify">
					<img className="wpmozo-bna-image-magnifier-image zoom" src={image} alt={attributes.imageAlt}/>
				</div>
			</div>
		</div>
	</> );
}
