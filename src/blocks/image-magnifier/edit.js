import { __ } from "@wordpress/i18n";
import { useEffect, Fragment } from "@wordpress/element";
import { useBlockProps } from "@wordpress/block-editor";
import Inspector from "./inspector";

import generateDynamicStyle from "./style";
import { wpmozo_is_empty, getMainEl } from '../../common/utils';

export default function Edit( props ) {

	const { attributes, setAttributes, clientId } = props;

	let image = ( attributes.image ) ? attributes.image : wpmozo_bna_editor_object.placeholderImg;

	attributes.ID = clientId;

	let wpmozo_init_magnifier_img = ( element, attributes ) => {
		if( element.find( ".wpmozo-bna-image-magnifier-wrapper" ).length > 0 ) {			
			element.find( ".wpmozo-bna-image-magnifier-wrapper" ).find( ".zoom" ).magnify( {
	            speed: attributes.lenseSpeed,
	            src: image
	        } );
		}
	}

	useEffect( () => {
		let $this = getMainEl(clientId);
		wpmozo_init_magnifier_img($this, attributes);
	} );
	useEffect( () => {
		let $this = getMainEl( clientId );
		wpmozo_init_magnifier_img( $this, attributes );
	}, [
		attributes.lenseSpeed
	] );

	return (
		<Fragment>
			<Inspector attributes={attributes} setAttributes={setAttributes} />
			<style>{ generateDynamicStyle( { attributes, clientId } ) }</style>

			<div id={`block-${attributes.ID}`} { ...useBlockProps( { className: 'wpmozo-bna-image-magnifier' } ) }>
				<div className={`wpmozo-bna-image-magnifier-wrapper`}>
					<div className="magnify">
						<img className="wpmozo-bna-image-magnifier-image zoom" src={image} />
					</div>
				</div>
			</div>
		</Fragment>
	);
}
