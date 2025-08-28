<<<<<<< HEAD
=======
import { __ } from "@wordpress/i18n";
>>>>>>> a38faaf (WIP: scroll image)
import { useEffect, Fragment } from "@wordpress/element";
import { useBlockProps } from "@wordpress/block-editor";
import Inspector from "./inspector";

import generateDynamicStyle from "./style";
<<<<<<< HEAD
import { getMainEl } from '../../common/utils';
=======
import { wpmozo_is_empty, getMainEl } from '../../common/utils';
>>>>>>> a38faaf (WIP: scroll image)

export default function Edit( props ) {

	const { attributes, setAttributes, clientId } = props;

	let image = ( attributes.image ) ? attributes.image : wpmozo_bna_editor_object.placeholderImg,
		title = attributes.imageTitle;

	attributes.ID = clientId;

<<<<<<< HEAD
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

=======
>>>>>>> a38faaf (WIP: scroll image)
	return (
		<Fragment>
			<Inspector attributes={attributes} setAttributes={setAttributes} />
			<style>{ generateDynamicStyle( { attributes, clientId } ) }</style>

			<div id={`block-${attributes.ID}`} { ...useBlockProps( { className: 'wpmozo-bna-scroll-image' } ) }>
				<div className="wpmozo-bna-scroll-image-wrapper">
					<div className="wpmozo-bna-scroll-image-inner-wrap" data-direction={attributes.scrollDirection}>
						<img className="wpmozo-bna-scroll-image-img" title={title} src={image} />
					</div>
				</div>
			</div>
		</Fragment>
	);
}
