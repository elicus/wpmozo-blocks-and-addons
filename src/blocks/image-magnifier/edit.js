import { __ } from "@wordpress/i18n";
import { useEffect, Fragment } from "@wordpress/element";
import { useBlockProps } from "@wordpress/block-editor";
import Inspector from "./inspector";

import generateDynamicStyle from "./style";
import { wpmozo_is_empty, getMainEl, mergeWrapperProps } from '../../common/utils';

export default function Edit( props ) {

	const { attributes, setAttributes, clientId } = props,
		wrapArgs = attributes?.ID && mergeWrapperProps( { 
			className: `wpmozo-bna-image-magnifier${ attributes?.wrapIsHover ? ' is_hover' : '' }` ,
			style: {}
		}, attributes ),
		wrapProps = wrapArgs?.wrapprops,
		blockProps = useBlockProps(wrapProps),
		wrapStyle = wrapArgs?.wrapStyle;

	let image = ( attributes.image ) ? attributes.image : wpmozo_bna_editor_object.placeholderImg;

	// Ensure ID is set once (no render-time mutation).
	useEffect( () => {
		if ( attributes.ID !== clientId ) {
			setAttributes( { ID: clientId } );
		}
		const updates = {};
		if ( attributes.ID !== clientId ) {
			updates.ID = clientId;
		}

		// wrapStyle recalculate karke attribute mein store karo
		if ( attributes.ID ) {
			if ( wrapStyle && wrapStyle !== attributes.wrapStyle ) {
				updates.wrapStyle = wrapStyle;
			}
		}

		if ( Object.keys( updates ).length ) {
			setAttributes( updates );
		}
	}, [ clientId, JSON.stringify( attributes ) ] ); // eslint-disable-line react-hooks/exhaustive-deps.

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

			<div id={`block-${attributes.ID}`} { ...blockProps}>
				<div className={`wpmozo-bna-image-magnifier-wrapper`}>
					<div className="magnify">
						<img className="wpmozo-bna-image-magnifier-image zoom" src={image} alt={attributes.imageAlt}/>
					</div>
				</div>
			</div>
		</Fragment>
	);
}
