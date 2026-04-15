jQuery( document ).ready( function( $ ) {

	// Repeator field operations.
	$( '.wpmozo_bna_repeator_meta_fields' ).each( function() {

		let $repeatorField = $( this );

		// Add repeator field.
		$repeatorField.on( 'click', '.wpmozo_bna_repeator_meta_field_add_row', function() {

			let $last  = $repeatorField.find( '.wpmozo_bna_repeator_meta_field_row:last' );
			let $clone = $last.clone();

			// figure out the next index based on last input name.
			let lastIndex  = 0;
			let $lastInput = $last.find( 'input:first' );
			if ( $lastInput.length ) {
				let match = $lastInput.attr( 'name' ).match( /\[(\d+)\]/ );
				if ( match ) {
					lastIndex = parseInt( match[1] );
				}
			}
			let newIndex = lastIndex + 1;

			// update names with new index and clear values.
			$clone.find( 'input' ).each( function() {
				let name = $( this ).attr( 'name' );
					name = name.replace( /\[\d+\]/, '[' + newIndex + ']' );

				$( this ).attr( 'name', name ).val('');
			} );

			$clone.appendTo( $repeatorField );
		} );
		
		// Remove repeator field.
		$repeatorField.on( 'click', '.wpmozo_bna_repeator_meta_field_remove_row', function() {
			let $rows = $repeatorField.find( '.wpmozo_bna_repeator_meta_field_row' );
			
			if ( $rows.length > 1 ) {
				// Remove the current row.
				$( this ).closest( '.wpmozo_bna_repeator_meta_field_row' ).remove();

				// Re-index all inputs so names stay sequential (0,1,2...).
				$repeatorField.find( '.wpmozo_bna_repeator_meta_field_row' ).each( function( rowIndex ) {
					$( this ).find( 'input' ).each( function() {
						let name = $( this ).attr( 'name' );
						name = name.replace( /\[\d+\]/, '[' + rowIndex + ']' );
						$( this ).attr( 'name', name );
					} );
				} );
			} else {
				// If only one row left, just clear values.
				$rows.find( 'input' ).val( '' );
			}
		} );
	} );

} ); // Document ready.
