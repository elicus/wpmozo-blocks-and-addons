import $ from 'jquery';
jQuery( document ).ready( function($) {

	// Listen for props changes and update style smartly
	window.addEventListener('WPMozoBreadcrumbPropsChanged', (e) => {
		const clientId = e?.detail?.clientId;
		if (clientId && $('#block-' + clientId).length > 0) {
			updateBreadcrumbBorder();
		}
	});

	// Initial update on DOM ready
	updateBreadcrumbBorder();

	// Utility function to update the breadcrumb style dynamically
	function updateBreadcrumbBorder() {
		const height = $('.breadcrumb-item.wpmozo-bna-home-page').outerHeight();
		if (typeof height === "number" && !isNaN(height) && height > 0) {
			const height_f = Math.floor(height / 2) + 'px';
			const height_c = Math.ceil(height / 2) + 'px';
			const style = `
				.wpmozo-bna-breadcrumb-wrapper.layout1 li .breadcrumb-page{
					height: ${height}px;
				}
				.wpmozo-bna-breadcrumb-wrapper.layout1 li .breadcrumb-page::before,
				.wpmozo-bna-breadcrumb-wrapper.layout1 li .breadcrumb-page::after {
					border-width: ${height_f} 10px ${height_c} 10px;
				}
			`;
			let styleTag = document.getElementById('wpmozo-breadcrumb-dynamic-inline-css');
			if (!styleTag) {
				styleTag = document.createElement('style');
				styleTag.id = 'wpmozo-breadcrumb-dynamic-inline-css';
				document.head.appendChild(styleTag);
			}
			styleTag.innerHTML = style;
		}
	}


} );
