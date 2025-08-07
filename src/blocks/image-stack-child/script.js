import $ from 'jquery';

$(document).ready( function($) {
	tippy( '.wpmozo-bna-image-stack .wpmozo-stack-item-img, .wpmozo-bna-image-stack i', {
		// trigger: "mouseenter",
		trigger: "click",
		theme: ".wpmozo-tippy" ,
		interactive: true,
		animation: "fade",
		duration: 350,
		appendTo: () => document.body,
		arrow: false,
		content: (reference) => reference.getAttribute("title"),
		maxWidth: 200,
	} );
} );
