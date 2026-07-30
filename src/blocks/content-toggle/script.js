import $ from 'jquery';
$(window).load(function() {
    window.addEventListener('toggleAdded', () => {
        $('.wpmozo-bna-toggle-field').trigger('change');
    });
});
// Change event - recommended way
$(document).on('change', '.wpmozo-bna-toggle-field', function(e) {
    const selector = $(this).closest('.wpmozo-bna-content-toggle-main');
    wpmozo_toggle_switch($(this), selector);
});

// Click event on title wrap headers
$(document).on('click', '.wpmozo-bna-toggle-title-wrap', function(e) {
    const wrap = $(this).closest('.wpmozo-bna-toggle-title-wrap');
    const selector = $(this).closest('.wpmozo-bna-content-toggle-main');
    const input = selector.find('.wpmozo-bna-toggle-field');

    if (wrap.hasClass('wpmozo-bna-toggle-title-one')) {
        input.prop('checked', false);
    } else {
        input.prop('checked', true);
    }

    wpmozo_toggle_switch(input, selector);
});

// Click event on switch trigger
$(document).on('click', '.wpmozo_switch_trigger', function(e) {
    const selector = $(this).closest('.wpmozo-bna-content-toggle-main');
    const input = selector.find('.wpmozo-bna-toggle-field');

    if ($(this).hasClass('wpmozo-bna-toggle-title-one')) {
        input.prop('checked', false);
    } else {
        input.prop('checked', true);
    }

    wpmozo_toggle_switch(input, selector);
});

// Initialize toggle switch on page load
$(document).ready(function() {
    $('.wpmozo-bna-toggle-field').each(function(keym, el) {
        const selector = $(this).closest('.wpmozo-bna-content-toggle-main');
        wpmozo_toggle_switch($(this), selector);
    });
});

// Toggle switch function
function wpmozo_toggle_switch(input, main) {
    if (input.prop('checked')) {
        main.find('.wpmozo-bna-content-toggle-one').removeClass('wpmozo-bna-content-toggle-active');
        main.find('.wpmozo-bna-content-toggle-two').addClass('wpmozo-bna-content-toggle-active');
    } else {
        main.find('.wpmozo-bna-content-toggle-two').removeClass('wpmozo-bna-content-toggle-active');
        main.find('.wpmozo-bna-content-toggle-one').addClass('wpmozo-bna-content-toggle-active');
    }
}

