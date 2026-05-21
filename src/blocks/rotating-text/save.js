import { useBlockProps } from "@wordpress/block-editor";
import generateDynamicStyle from './style';

export default function save({attributes}) {

	const { ID, className } = attributes;

	let image = ( attributes.image ) ? attributes.image : wpmozo_bna_editor_object.placeholderImg,
		useImage = attributes.useImage,
		text = attributes.rotatingText,
		iconImage = null;

	if ( useImage ) {
		iconImage = (
		  	<img
				src={image}
				alt=""
				className="wpmozo-bna-rotating-text-img-img_icon"
		  	/>
		);
	} else if ( attributes.icon ) {
		iconImage = (
			<div className="icon-wrapper">
				<i className={attributes.icon}></i>
		    </div>
		);
	}

	// Only add ID attribute if it exists
	const blockProps = useBlockProps.save( {
		className: 'wpmozo-bna-rotating-text ' + ( className || '' ),
		...( ID ? { id: `block-${ ID }` } : {} ),
	} );

	return ( <>
		{/* Only output <style> if ID exists. */}
		{ ( ID && '' !== ID ) && (
			<style>{ generateDynamicStyle( { attributes } ) }</style>
		) }
		<div {...blockProps}>
			<div className="wpmozo-bna-rotating-text-wrap">
				<div className="wpmozo-bna-rotating-text-inner">
					<p>{text}</p>
				</div>
				{iconImage && (
					<div className="wpmozo-bna-rotating-text-icon-wrapper">
						{iconImage}
					</div>
				)}
			</div>
		</div>
	</>);
}
