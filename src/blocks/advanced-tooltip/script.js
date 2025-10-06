import $ from 'jquery';

$(document).ready(function(e) {

	window.addEventListener('WPMozoButtonPropsChanged', () => {
		$('.wpmozo_advanced_tooltip').each(function() {
			initAdvancedButton($(this));
		});
	});

	//Initial gallery setup
	setTimeout( function (){
			$('.wp-block-wpmozo-advanced-tooltip').each(function() {
				initAdvancedButton($(this));
			})
	}, 1000);

});

function initAdvancedButton($galleryContainer) {
	const wrapID = $galleryContainer.attr('id');

	let $this = $($galleryContainer),
		$wrap = $this.find('.wpmozo_tooltip_trigger_element_wrap');

	// Get data attributes or fallback to defaults
	let triggerType = $wrap.data('trigger-action') || 'mouseenter',
		animationType = $wrap.data('animation') || 'fade',
		duration = parseInt($wrap.data('duration')) || 350,
		interactive = $wrap.data('interactive') === true || $wrap.data('interactive') === 'true',
		width = $wrap.data('tooltip-width') || '350',
		triggerEl = $wrap.data('trigger-element') || 'button',
		triggerSelector = $wrap.data('trigger-selector') || '';


	// 🔧 Fix: Look inside current tooltip instance only
	let $tooltipContent = $this.find('.wpmozo_advanced_tooltip_content_wrap');
	if (!$tooltipContent.length) return;


	// 🔧 Fix: Localize trigger selector - use jQuery object instead of string selector
	let $triggerElement = $this.find('.wpmozo_tooltip_trigger_element');

	// Check if tippy instance already exists on this trigger element
	if ($triggerElement.length && $triggerElement[0]._tippy) {
		// If tippy already initialized, do not add a new one
		return;
	}

	// Initialize tippy.js
	tippy($triggerElement[0], {
		content: $tooltipContent.html(),
		placement: 'auto',
		trigger: triggerType,
		animation: animationType,
		duration: duration,
		theme: 'wpmozo-tippy-adt-' + wrapID,
		delay: [100, 100],
		arrow: false,
		allowHTML: true,
		interactive: interactive,
		// appendTo: () => document.body,
		maxWidth: width,
		popperOptions: {
			modifiers: [{
				name: 'flip', options: {
					fallbackPlacements: ['top', 'bottom', 'left', 'right']
				}
			}, {
				name: 'zIndex', enabled: true, phase: 'write', fn({state}) {
					state.elements.popper.style.zIndex = '99999';
				}
			}]
		}
	});

	// Prevent default on button click
	if (triggerType === 'click' && $this.find('.wpmozo_tooltip_trigger_button').length > 0) {
		$this.on('click', '.wpmozo_tooltip_trigger_button', function (e) {
			e.preventDefault();
		});
	}
}
