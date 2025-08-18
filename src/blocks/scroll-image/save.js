import { useBlockProps } from "@wordpress/block-editor";
import generateDynamicStyle from './style';

export default function save({attributes}) {
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
					<img className="wpmozo-bna-scroll-image-img" title={title} src={image} />
				</div>
			</div>
		</div>
	</> );
}
