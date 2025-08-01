<?php
if ( ! function_exists( 'testimonial_slider_render_callback' ) ) {
	function testimonial_slider_render_callback( $attributes ) {

		ob_start();

		echo "ddd<pre>";
		print_r($attributes);
		echo "</pre>";
		

		return ob_get_clean();
	}
}

echo testimonial_slider_render_callback( $attributes );
