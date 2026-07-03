<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

use WPMOZO\BNA\Helpers\Mozo_Bna_Helpers;
use WPMOZO\BNA\Helpers\Mozo_Bna_Block_Helpers;

if ( ! function_exists( 'portfolio_slider_render_callback' ) ) {
	function portfolio_slider_render_callback( $attributes ) {
		$layout = $attributes['layout'] ?? 'layout1';
		$wrapper_attributes = get_block_wrapper_attributes();

		$render_output = sprintf(
			'<div %1$s>
				<div class="wpmozo-portfolio-slider-frontend">
					Portfolio Slider Frontend (Stage 1 Skeleton)
				</div>
			</div>',
			$wrapper_attributes
		);

		return $render_output;
	}
}

echo portfolio_slider_render_callback( $attributes );
