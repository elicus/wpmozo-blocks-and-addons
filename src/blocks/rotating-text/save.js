import { useBlockProps } from "@wordpress/block-editor";
import generateDynamicStyle from './style';

export default function save({attributes}) {
	const ID = attributes.ID;
	let image = (attributes.image) ? attributes.image : wpmozo_bna_editor_object.placeholderImg;

	return ( <>
		<style>{ generateDynamicStyle( { attributes } ) }</style>

		<div { ...useBlockProps.save( {className: 'wpmozo-bna-rotating-text ' + ( attributes.className || '' ) } ) }
			id={`block-${ID}`}
			data-speed={attributes.lenseSpeed}
			data-src={image}
		>
			<div className={`wpmozo-bna-rotating-text-wrapper`}>
				<div className="magnify">
					<img className="wpmozo-bna-rotating-text-image zoom" src={image} />
				</div>
			</div>
		</div>
	</> );
}
