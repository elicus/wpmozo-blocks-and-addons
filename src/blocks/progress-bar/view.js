document.addEventListener('DOMContentLoaded', () => {
    const progressBars = document.querySelectorAll('.wp-block-wpmozo-progress-bar');
    if (progressBars.length === 0) return;

    const updateProgress = () => {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const percent = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;

        progressBars.forEach(progressBar => {
            const wrapper = progressBar.querySelector('.wpmozo-bna-progress-bar-wrapper');
            if (!wrapper) return;

            const isCircle = wrapper.classList.contains('wpmozo-bna-progress-bar-layout-circle');
            const isHalfCircle = wrapper.classList.contains('wpmozo-bna-progress-bar-layout-half_circle');
            const percentLabel = wrapper.querySelector('.wpmozo-bna-progress-bar-percent');

            if (percentLabel) {
                percentLabel.textContent = Math.round(percent) + '%';
            }

            if (isCircle) {
                const circleFg = wrapper.querySelector('.wpmozo-bna-circle-fg');
                if (circleFg) {
                    const totalLength = 2 * Math.PI * 45; // ~282.74
                    const offset = totalLength - (percent / 100) * totalLength;
                    circleFg.style.strokeDashoffset = offset;
                }
            } else if (isHalfCircle) {
                const pathFg = wrapper.querySelector('.wpmozo-bna-circle-fg');
                if (pathFg) {
                    const totalLength = 282.74;
                    const offset = totalLength - (percent / 100) * totalLength;
                    pathFg.style.strokeDashoffset = offset;
                }
            } else {
                const inner = wrapper.querySelector('.wpmozo-bna-progress-bar-inner');
                if (inner) {
                    const direction = wrapper.getAttribute('data-bar_direction') || 'horizontal';
                    if (direction === 'vertical') {
                        inner.style.height = percent + '%';
                        inner.style.width = '100%';
                    } else {
                        inner.style.width = percent + '%';
                        inner.style.height = '100%';
                    }
                }
            }
        });
    };

    window.addEventListener('scroll', updateProgress);
    updateProgress(); // initial call
});
