jQuery(document).ready(function($){
    if ( jQuery('body').find('.wpmozo-adfgu-separator').length > 0 ) {
        $('body').find('.wpmozo-adfgu-separator').each(function() {
            let height = $(this).find('.wpmozo-adfgu-icon-wrapper').outerHeight(true);
            let padding = height/2;
            $(this).css('padding-top', padding+'px');
            $(this).css('padding-bottom', padding+'px');
        });
    }
});