import $ from 'jquery';
$(window).load(function() {
	$('.wp-block-wpmozo-advanced-tooltip').each(function() {
		initAdvancedButton($(this), 'load');
	});
	window.addEventListener('WPMozoButtonPropsChanged', () => {
		$('.wp-block-wpmozo-advanced-tooltip').each(function() {
			initAdvancedButton($(this), 'event');
		});
	});
});

function initAdvancedButton($galleryContainer, source = 'load') {
	const wrapID = $galleryContainer.attr('id');

	let $this = $galleryContainer,
		$wrap = $this.find('.wpmozo_tooltip_trigger_element_wrap');
		
	// Get data attributes or fallback to defaults
	let triggerType = ('load' === source ? $wrap.data('trigger-action')  : $wrap.attr('data-trigger-action')) || 'mouseenter',
		animationType = ('load' === source ? $wrap.data('animation')  : $wrap.attr('data-animation')) || 'fade',
		duration = parseInt('load' === source ? $wrap.data('duration')  : $wrap.attr('data-duration')) || 350,
		speechBubble = ('load' === source ? $wrap.data('speech-bubble')  : $wrap.attr('data-speech-bubble') === "true") || false,
		interactive = ('load' === source ? $wrap.data('interactive')  : $wrap.attr('data-interactive') === "true") || false,
		width = ('load' === source ? $wrap.data('tooltip-width')  : $wrap.attr('data-tooltip-width')) || '350',
		triggerEl = ('load' === source ? $wrap.data('trigger-element')  : $wrap.attr('data-trigger-element')) || 'button',
		triggerSelector = ('load' === source ? $wrap.data('trigger-selector')  : $wrap.attr('data-trigger-selector') ) || '';
		
	// 🔧 Fix: Look inside current tooltip instance only
	let $tooltipContent = $this.find('.wpmozo_advanced_tooltip_content_wrap');
	if (!$tooltipContent.length) return;
		
		
	// 🔧 Fix: Localize trigger selector - use jQuery object instead of string selector
	let $triggerElement = $this.find('.wpmozo_tooltip_trigger_element');
		
	// Check if tippy instance already exists on this trigger element
	if ($triggerElement.length && $triggerElement[0]._tippy) {
		$triggerElement[0]._tippy.destroy();
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
		arrow: speechBubble,
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
