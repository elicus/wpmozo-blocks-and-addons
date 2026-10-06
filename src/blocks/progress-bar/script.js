import $ from 'jquery';

$(document).ready(function () {

	window.addEventListener('WPMozoProgressBarPropsChanged', () => {
		$('.wp-block-wpmozo-progress-bar').each(function () {
			initProgressBar($(this));
			initProgressBarSticky($(this));
		});
	});
    
	window.addEventListener('scroll', () => {
        $('.wp-block-wpmozo-progress-bar').each(function () {
            initProgressBar($(this));
            initProgressBarSticky($(this));
		});
	});
	
    window.addEventListener('resize', () => {
        $('.wp-block-wpmozo-progress-bar').each(function () {
            initProgressBarSticky($(this));
		});
	});

	// Initial setup
	$('.wp-block-wpmozo-progress-bar').each(function () {
        initProgressBar($(this));
        initProgressBarSticky($(this));
    });

});

function initProgressBarSticky($bar) {
    const position = $($bar).attr('data-position'),
        posTop = $bar.css('top'),
        width = $bar.css('width'),
        widthpx = $($bar).width(),
        scrollTop = ($bar.offset().top + parseFloat($bar.css('border-top-width'))
        + parseFloat($bar.css('padding-top'))) - $(window).scrollTop(),
        leftpx = $bar.offset().left + parseFloat($bar.css('border-left-width'))
        + parseFloat($bar.css('padding-left'));
    if('sticky' === position){
        if (scrollTop <= 0 + parseInt(posTop)) {
            $($bar).addClass('fixed-header');
            $bar.find('.wpmozo-bna-progress-bar-wrapper').css('top',posTop);
            $bar.find('.wpmozo-bna-progress-bar-wrapper').css('left',leftpx);
            $bar.find('.wpmozo-bna-progress-bar-wrapper').css('width',widthpx);
        }
        else {
            $($bar).removeClass('fixed-header');
            $bar.find('.wpmozo-bna-progress-bar-wrapper').css('top','auto');
            $bar.find('.wpmozo-bna-progress-bar-wrapper').css('left','auto');
            $bar.find('.wpmozo-bna-progress-bar-wrapper').css('width',width);
        }
    }
}


function initProgressBar($bar) {
    const progressBar = $($bar);
    if (progressBar.length === 0) return;
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const percent = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
    
    const wrapper = progressBar.find('.wpmozo-bna-progress-bar-wrapper');
    
    
    if (!wrapper) return;
    
    const isCircle = wrapper.hasClass('wpmozo-bna-progress-bar-layout-circle');
    const isHalfCircle = wrapper.hasClass('wpmozo-bna-progress-bar-layout-half_circle');
    const percentLabel = wrapper.find('.wpmozo-bna-progress-bar-percent');

    if (percentLabel.length > 0) {
        percentLabel[0].textContent = Math.round(percent) + '%';
    }
    if (isCircle) {
        const circleFg = wrapper.find('.wpmozo-bna-circle-fg');
        if (circleFg) {
            const totalLength = 2 * Math.PI * 45; // ~282.74
            const offset = totalLength - (percent / 100) * totalLength;
            circleFg.css('strokeDashoffset', offset);
        }
    } else if (isHalfCircle) {
        const pathFg = wrapper.find('.wpmozo-bna-circle-fg');
        if (pathFg) {
            const totalLength = 282.74;
            const offset = totalLength - (percent / 100) * totalLength;
            pathFg.css('strokeDashoffset', offset);
        }
    } else {
        const inner = wrapper.find('.wpmozo-bna-progress-bar-inner');
        if (inner) {
            const direction = wrapper.attr('data-bar_direction') || 'horizontal';
            if (direction === 'vertical') {
                inner.css('height', percent + '%');
                inner.css('width', '100%');
            } else {
                inner.css('width', percent + '%');
                inner.css('height', '100%');
            }
        }
    }
}
