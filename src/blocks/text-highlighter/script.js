import $ from 'jquery';

$(document).ready(function () {

	window.addEventListener('WPMozoTextHighlighterPropsChanged', () => {
		$('.wp-block-wpmozo-text-highlighter').each(function () {
			initTextHighlighter($(this));
		});
	});

	// Initial highlighter setup
	$('.wp-block-wpmozo-text-highlighter').each(function () {
		initTextHighlighter($(this));
	});
});

function initTextHighlighter($Container) {
	if ($Container.find('.wpmozo-bna-text-highlighter-inner-wrapper').length > 0) {
		$Container.find('.st0').each(function () {
			let $this = $(this);
			// Reset animation
			$this.css('animation-name', 'none');

			// Force reflow
			void $this[0].offsetWidth;
			$this.waypoint({
				handler: function () {
					// Apply animation again
					$this.css('animation-name', 'wpmozo-dash-animation');
				},
				offset: '100%'
			});
		});
	}
}
