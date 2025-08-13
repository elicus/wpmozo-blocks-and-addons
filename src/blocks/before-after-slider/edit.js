import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import { useEffect, Fragment } from "@wordpress/element";
import Inspector from './inspector';

import generateDynamicStyle from './style';
import { wpmozo_is_empty } from '../../common/utils.js';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
export default function Edit(props) {

	const { attributes, setAttributes, clientId } = props;
	
	attributes.ID = clientId;

	let init = false,
		beforeImage, afterImage;
		(attributes.beforeImage) ? attributes.beforeImage = attributes.beforeImage : attributes.beforeImage = wpmozo_bna_editor_object.placeholderImg;
		(attributes.afterImage) ? attributes.afterImage = attributes.afterImage : attributes.afterImage = wpmozo_bna_editor_object.placeholderImg;
		beforeImage = attributes.beforeImage;
		afterImage  = attributes.afterImage;

	let beforeLabel = ( attributes.beforeHasLabel ) ? attributes.beforeLabel : '',
		afterLabel  = ( attributes.afterHasLabel ) ? attributes.afterLabel : '';

	function wpmozo_before_init( main ){
		main.find('.twentytwenty-wrapper').removeClass('twentytwenty-wrapper');
		main.find('.twentytwenty-horizontal').removeClass('twentytwenty-horizontal');
		main.find('.wpmozo-bna-before-after-image-wrapper').unwrap();
		main.find('.wpmozo-bna-before-after-image-wrapper').off();
		main.find('.wpmozo-bna-before-after-image-wrapper').removeClass('twentytwenty-container');
		
		let beforeSrc = ( ! wpmozo_is_empty( beforeImage ) ) 
			? beforeImage 
			: main.find('.wpmozo-bna-before-after-image-wrapper .twentytwenty-before').attr('src');
		main.find('.wpmozo-bna-before-after-image-wrapper .twentytwenty-before').remove();

		let afterSrc = ( ! wpmozo_is_empty( afterImage ) )
			? afterImage
			: main.find('.wpmozo-bna-before-after-image-wrapper .twentytwenty-after').attr('src');
		main.find('.wpmozo-bna-before-after-image-wrapper .twentytwenty-after').remove();

		main.find('.wpmozo-bna-before-after-image-wrapper').append( '<img src="'+beforeSrc+'">' );
		main.find('.wpmozo-bna-before-after-image-wrapper').append( '<img src="'+afterSrc+'">' );

		main.find('.wpmozo-bna-before-after-image-wrapper .twentytwenty-before').removeClass('twentytwenty-before');
		main.find('.wpmozo-bna-before-after-image-wrapper .twentytwenty-after').removeClass('twentytwenty-after');
		main.find('.wpmozo-bna-before-after-image-wrapper .twentytwenty-overlay').remove();
		main.find('.wpmozo-bna-before-after-image-wrapper .twentytwenty-handle').remove();
	}

	useEffect( () => {
		let editorIfram = jQuery('body').find('[name="editor-canvas"]').contents(),
			mainFromIfram = editorIfram.find('body').find('#block-'+clientId),
			mainFromBody = jQuery('body').find('#block-'+clientId),
			main = ( mainFromIfram.length > 0 ) ? mainFromIfram : mainFromBody;

		if ( main.find('.twentytwenty-wrapper').length < 1 ) {
			init = true;
			if ( main.find('.twentytwenty-wrapper').length > 0 ) {
				wpmozo_before_init( main );
			}

			if( main.find('.wpmozo-bna-before-after-image-wrapper').length > 0 ) {
				jQuery('.wpmozo-bna-before-after-image-wrapper').imagesLoaded( function() {
					main.find('.wpmozo-bna-before-after-image-wrapper').twentytwenty( {
						default_offset_pct: attributes.handleOffset,
						orientation: attributes.sliderOrientation,
						before_label: beforeLabel,
						after_label: afterLabel,
						move_slider_on_hover: attributes.moveHandleOnHover,
						move_with_handle_only: true,
						click_to_move: attributes.moveHandleOnClick,
					} );
				} );
			}
		}
	} );

	useEffect( () => {
		let editorIfram   = jQuery('body').find( '[name="editor-canvas"]' ).contents(),
			mainFromIfram = editorIfram.find('body').find( '#block-' + clientId ),
			mainFromBody  = jQuery('body').find( '#block-' + clientId ),
			main          = ( mainFromIfram.length > 0 ) ? mainFromIfram : mainFromBody;

		if ( ! init ) {
			if ( main.find('.twentytwenty-wrapper').length > 0 ) {
				wpmozo_before_init( main );
			}

			if ( main.find('.wpmozo-bna-before-after-image-wrapper').length > 0 ) {
				jQuery('.wpmozo-bna-before-after-image-wrapper').imagesLoaded( function() {
					main.find('.wpmozo-bna-before-after-image-wrapper').twentytwenty({
						default_offset_pct: attributes.handleOffset,
						orientation: attributes.sliderOrientation,
						before_label: beforeLabel,
						after_label: afterLabel,
						move_slider_on_hover: attributes.moveHandleOnHover,
						move_with_handle_only: true,
						click_to_move: attributes.moveHandleOnClick,
					} );
				} );
			}
		}
	}, [ 
		attributes.handleOffset, 
		attributes.sliderOrientation,
		attributes.beforeHasLabel, 
		attributes.beforeLabel, 
		attributes.afterHasLabel,
		attributes.afterLabel, 
		attributes.moveHandleOnHover, 
		attributes.moveHandleOnClick, 
		attributes.overlayOnHover,
		attributes.beforeImage,
		attributes.afterImage,
	] );

	return (
		<Fragment>
			<Inspector attributes={attributes} setAttributes={setAttributes} />
			<style>{ generateDynamicStyle( { attributes, clientId } ) }</style>

			<div { ...useBlockProps( { className: 'wpmozo-bna-before-after-main' } ) }>
				<div className="wpmozo-bna-before-after-image-wrapper">
					<img src={beforeImage} />
					<img src={afterImage} />
				</div>
			</div>
		</Fragment>
	);
}
