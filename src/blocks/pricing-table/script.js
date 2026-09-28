import $ from 'jquery';

$(document).ready(function (e) {

	window.addEventListener('WPMozoPricingTableChanged', () => {
		$('.wp-block-wpmozo-pricing-table').each(function () {
            initPricingTable($(this));
		});
	});

	// Initial post ticker setup
	$('.wp-block-wpmozo-pricing-table').each(function () {
		initPricingTable($(this));
	});
});

function initPricingTable(container) {
	const thisObj = $(container),
		iconWrap = $(thisObj).find(".wpmozo-bna-pricing-table-button-wrapper .wpmozo-bna-button");
    $(thisObj).find(".wpmozo-bna-button").children('.wpmozo-bna-button-icon').css('margin-left', '0vw');
    $(thisObj).find(".wpmozo-bna-button").children('.wpmozo-bna-button-icon').css('margin-right', '0vw');
    if( ( iconWrap.length > 0 ) && ( thisObj.find( ".wpmozo-bna-pricing-table-button-wrapper .wpmozo-bna-button").attr('class').includes('show-on-hover') ) ){
        if(thisObj.find(".wpmozo-bna-pricing-table-button-wrapper .wpmozo-bna-button").attr('class').includes('icon-after')){

            $(iconWrap).children('.wpmozo-bna-button-icon').css('margin-left', '-'+$(iconWrap).children('.wpmozo-bna-button-icon').outerWidth(true)+'px');
        }
        if(thisObj.find(".wpmozo-bna-pricing-table-button-wrapper .wpmozo-bna-button").attr('class').includes('icon-before')){

            $(iconWrap).children('.wpmozo-bna-button-icon').css('margin-right', '-'+$(iconWrap).children('.wpmozo-bna-button-icon').outerWidth(true)+'px');
        }
    }
}