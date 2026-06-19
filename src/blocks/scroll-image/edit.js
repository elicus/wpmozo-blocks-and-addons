import { useEffect, Fragment } from "@wordpress/element";
import { useBlockProps } from "@wordpress/block-editor";
import Inspector from "./inspector";

import generateDynamicStyle from "./style";
import { getMainEl, mergeWrapperProps } from '../../common/utils';

export default function Edit( props ) {

	const { attributes, setAttributes, clientId } = props,
	wrapArgs = attributes?.ID && mergeWrapperProps( { 
			className: `wpmozo-bna-scroll-image${ attributes?.wrapIsHover ? ' is_hover' : '' }` ,
			style: {}
		}, attributes ),
		wrapProps = wrapArgs?.wrapprops,
		blockProps = useBlockProps(wrapProps),
		wrapStyle = wrapArgs?.wrapStyle;
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

	let image = ( attributes.image ) ? attributes.image : wpmozo_bna_editor_object.placeholderImg,
		title = attributes.imageTitle;


	useEffect( () => {
		var $this = getMainEl(clientId);
		jQuery(document).ready(function($) {
		    jQuery.fn.wpmozo_init_scroll_image($, $this);

		});
	} );
	useEffect( () => {
		var $this = getMainEl( clientId );
		jQuery(document).ready(function($) {
		    jQuery.fn.wpmozo_init_scroll_image($, $this);

		});
	}, [
		attributes.scrollDirection
	] );

	return (
		<Fragment>
			<Inspector attributes={attributes} setAttributes={setAttributes} />
			<style>{ generateDynamicStyle( { attributes, clientId } ) }</style>

			<div id={`block-${attributes.ID}`} { ...blockProps}>
				<div className="wpmozo-bna-scroll-image-wrapper">
					<div className="wpmozo-bna-scroll-image-inner-wrap" data-direction={attributes.scrollDirection}>
						<img className="wpmozo-bna-scroll-image-img" title={title} src={image} alt={attributes.imageAlt} />
					</div>
				</div>
			</div>
		</Fragment>
	);
}
