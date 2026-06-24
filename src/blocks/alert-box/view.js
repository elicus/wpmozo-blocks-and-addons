jQuery(document).ready(function($) {
	$('body').on('click', '.wpmozo-bna-alert-box-close-btn', function(e) {
		e.preventDefault();
		$(this).closest('.wpmozo-bna-alert-box-wrap').fadeOut();
	});
});
