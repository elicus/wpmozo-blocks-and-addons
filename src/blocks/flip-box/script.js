import $ from 'jquery';
$(window).load(function() {
    jQuery('body').find('.wpmozo-bna-flip-box-wrap').each(function () {
        jQuery('.wpmozo-bna-flip-box-wrap').each(function () {
            const $sides = $(this).find('.wpmozo-bna-flip-box-side');
            $sides.removeAttr('style');

            const maxHeight = Math.max(...$sides.map(function () {
                return $(this).outerHeight();
            }).get());

            $sides.css('height', maxHeight + 'px');
        });
    });
    window.addEventListener('flipBoxUpdated', () => {
        jQuery('.wpmozo-bna-flip-box-wrap').each(function () {
            const $sides = $(this).find('.wpmozo-bna-flip-box-side');
            $sides.removeAttr('style');

            const maxHeight = Math.max(...$sides.map(function () {
                return $(this).outerHeight();
            }).get());

            $sides.css('height', maxHeight + 'px');
        });
    });
});
    