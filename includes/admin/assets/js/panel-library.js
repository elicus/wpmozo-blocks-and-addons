/**
 * Pattern Library switch on the settings page (General section).
 *
 * The panel script (panel.min.js) saves only the block list and has no source in this
 * repository, so this file adds the switch to the panel's own save request instead of
 * editing it. Mozo_Bna_Panel::save_options() stores it in the plugin option.
 */

/* global jQuery */
( function ( $ ) {
	const SAVE_ACTION = 'action=wpmozo_bna_panel_save_settings';

	$( document ).on( 'change', '#wpmozo_pattern_library_switch', function () {
		const button = $( this )
			.closest( '.wpmozo_bna_panel_section' )
			.find( '.wpmozo_bna_panel_save_options' );
		const text = button.find( '.wpmozo_bna_panel_save_text' );

		$( '#wpmozo_pattern_library' ).val( this.checked ? 'on' : 'off' );

		// Same as the panel script after any change: Save becomes clickable again.
		button.removeClass( 'success error' );
		text.text( text.data( 'text' ) );
	} );

	$.ajaxPrefilter( function ( options ) {
		if (
			typeof options.data !== 'string' ||
			options.data.indexOf( SAVE_ACTION ) === -1
		) {
			return;
		}
		const field = $( '#wpmozo_pattern_library' );
		// The panel saves the active section only.
		if ( ! field.closest( '.wpmozo_bna_panel_active_section' ).length ) {
			return;
		}
		options.data +=
			'&' +
			$.param( {
				options: {
					library: {
						name: 'wpmozo_pattern_library',
						value: field.val(),
					},
				},
			} );
	} );
} )( jQuery );
