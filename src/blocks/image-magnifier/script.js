( function ( $ ) {
    $( ".wpmozo-bna-image-magnifier-wrapper" ).each( function() {

    	let speed = $(this).closest('.wpmozo-bna-image-magnifier').data('speed'),
    		src = $(this).closest('.wpmozo-bna-image-magnifier').data('src');

    	$(this).find( ".zoom" ).magnify( {
            speed: speed,
            src: src
        } );
    } );
} )( jQuery );
