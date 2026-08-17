jQuery(document).ready(function ($) {

	// On change on props, update the slider again.
	window.addEventListener('WPMozoScrollTextPropsChanged', () => {
		$('.wp-block-wpmozo-scroll-text').each(function () {
			wpmozoInitScrollTextBlock($(this));
		});
	});

	$('.wp-block-wpmozo-scroll-text').each(function () {
		wpmozoInitScrollTextBlock($(this));
	});
});

// Init scroll text block.
function wpmozoInitScrollTextBlock($thisObj) {
	gsap.registerPlugin(ScrollTrigger);

	let $wrapObj = $thisObj.find('.wpmozo-scroll-text-wrap');
	const blockId = $thisObj.attr('data-block');
	ScrollTrigger.getById(`tl-${blockId}`) ? ScrollTrigger.getById(`tl-${blockId}`).kill(true) : '';
	ScrollTrigger.getById(`tl-${blockId}-2`) ? ScrollTrigger.getById(`tl-${blockId}-2`).kill(true) : '';

	// Get variables from data attrs.
	let $innerWrap = $wrapObj.find('.wpmozo-scroll-text-inner'),
		originalText = $innerWrap.text().trim(),
		effect = $wrapObj.attr('data-scroll_effect') || 'fade',
		splitType = $wrapObj.attr('data-split') || 'word';

	// Animation values.
	let startOne = $wrapObj.attr('data-animation_start_element_pos') || '0%',
		startTwo = $wrapObj.attr('data-animation_start_viewport_pos') || '80%',
		endOne = $wrapObj.attr('data-animation_end_element_pos') || '0%',
		endTwo = $wrapObj.attr('data-animation_end_viewport_pos') || '40%'; // we can use top, center, bottom too.

	let start = startOne + ' ' + startTwo,
		end = endOne + ' ' + endTwo;

	// Add effect class.
	$innerWrap.removeClass(function (index, className) {
    	return (className.match(/\bwpmozo_scroll\S*/g) || []).join(' ');
	});
	$innerWrap.addClass(`wpmozo_scroll_${splitType}_${effect}`);
	$innerWrap.html('');

	let spans = [];
	if ('letter' === splitType) {
		// Split words first.
		let words = originalText.split(/\s+/);

		words.forEach((word, wIdx) => {
			// Create word span.
			let wordSpan = jQuery('<span>', {class: 'wpmozo_st_word'});

			// Split letters inside word.
			for (let i = 0; i < word.length; i++) {
				let letterSpan = jQuery('<span>', {
					class: 'wpmozo_st_letter',
					text: word[i]
				});

				wordSpan.append(letterSpan);
				spans.push(letterSpan[0]); // This spans to init gsap.
			}

			// Add space inside the same wordSpan (not as a separate span).
			if (wIdx !== words.length - 1) {
				let spaceSpan = jQuery('<span>', {
					class: 'wpmozo_st_letter',
					text: '\u00A0'
				});

				wordSpan.append(spaceSpan);
				spans.push(spaceSpan[0]); // This spans to init gsap.
			}

			$innerWrap.append(wordSpan);
		});
	} else {
		// Split by words
		originalText.split(/\s+/).forEach((word, i, arr) => {
			let span = jQuery('<span>', {
				class: 'wpmozo_st_word',
				text: word + (i === arr.length - 1 ? '' : ' ')
			});

			$innerWrap.append(span);
			spans.push(span[0]); // This spans to init gsap.
		});
	}

	// GSAP timeline
	let tl = gsap.timeline({
		scrollTrigger: {
			id:`tl-${blockId}`,
			trigger: $thisObj[0],
			start: start,
			end: end,
			scrub: true
		}
	});

	if ('3d_flip' === effect) {
		let tl2 = gsap.timeline({
			scrollTrigger: {
				id:`tl-${blockId}-2`,
				trigger: $thisObj[0],
				start: end,
				scrub: true
			}
		});
		spans.forEach((span, i) => {
			tl.to(span, {
				onStart: () => span.classList.add('visible'),
				onReverseComplete: () => span.classList.remove('visible')
			});
			tl2.to(span, {
				onStart: () => {
					span.classList.add('reverse')
				},
				onReverseComplete: () => span.classList.remove('reverse')
			});
		});
	} else {
		spans.forEach((span, i) => {
			tl.to(span, {
				onStart: () => span.classList.add('visible'),
				onReverseComplete: () => span.classList.remove('visible')
			});
		});
	}
}
