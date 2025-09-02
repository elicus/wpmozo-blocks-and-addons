import { useBlockProps } from "@wordpress/block-editor";
import generateDynamicStyle from './style';

export default function save({attributes}) {
	
	const ID = attributes.ID;
	let image = ( attributes.image ) ? attributes.image : wpmozo_bna_editor_object.placeholderImg,	
		useImage = attributes.useImage,
		text = attributes.rotatingText,
		iconImage = null;

	if ( useImage === "on" ) {
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

	return ( <>
		<style>{ generateDynamicStyle( { attributes } ) }</style>

		<div { ...useBlockProps.save( {className: 'wpmozo-bna-rotating-text ' + ( attributes.className || '' ) } ) }
			id={`block-${ID}`}
		>
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
	</> );
}
