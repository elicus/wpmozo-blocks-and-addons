<?php
/**
 * The common settings of the plugin.
 * Defines the settings od the plugin.
 *
 * @since  1.8.0
 * @author Elicus <hello@elicus.com>
 */

// if this file is called directly, abort.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
class Mozo_Bna_Panel_Settings{

	/**
	 * Plugin option name.
	 *
	 * @since    1.8.0
	 * @access   protected
	 * @var      string    $plugin_option    The plugin option name where all the settings are stored.
	 */
	private $plugin_option;

	/**
	 * Initialize the class and set its properties.
	 *
	 * @since    1.8.0
	 * @param    string $plugin_option     The name of this plugin.
	 */
	public function __construct( $plugin_option ) {
		$this->plugin_option = $plugin_option;
	}

	public function render( $type, $atts ) {
		switch ( $type ) {
			case 'multiple_checkbox':
				return $this->render_multiple_checkbox( $atts );
				break;
			default:
				return 'Please define a field type.';
		}
	}

	private function render_multiple_checkbox( $atts ) {
		$label            = $atts['label'];
		$name             = $atts['name'];
		$inactive_name    = $atts['inactive_name'];
		$widgets          = $atts['widgets'];
		$inactive_default = $atts['inactive_default'];
		$info             = $atts['info'];
		$options          = $atts['options'];
		$pros             = $atts['pros'];

		$value            = $widgets;
		$inactive_value   = is_array( $inactive_default ) ? implode( ',', $inactive_default ) : $inactive_default;

		$plugin_option = get_option( $this->plugin_option );

		if ( isset( $plugin_option ) && isset( $plugin_option[ $name ] ) ) {
			$value = $plugin_option[ $name ];
		}

		if ( isset( $plugin_option ) && isset( $plugin_option[ $inactive_name ] ) ) {
			$inactive_value = $plugin_option[ $inactive_name ];
		}

		if ( $label ) {
			$label_field = sprintf(
				'<div class="wpmozo_bna_panel_label_control">
					<label for="%1$s">%1$s</label>
				</div>',
				$label
			);
		}

		if ( is_array( $options ) ) {
			$list  = '';
			$value = array_map( 'sanitize_text_field', $value );
			foreach ( $options as $key => $option ) {
				if('content-wraper' === $key){
					continue;
				}
				if ( in_array( $option, $pros ) ){
					$checked = in_array( $key, explode( ',', $inactive_value ), true ) ? '' : checked( 1, 1, false );
					$list   .= '
					<span class="wpmozo_bna_checkbox_wrapper wpmozo-bna-icon-'.$key.' wpmozo_pro">
						<label for="' . esc_attr( $key ) . '">' . ucwords( esc_html( $option ) ) . '</label>
						<input type="checkbox" class="wpmozo_bna_panel_checkbox" id="' . esc_attr( $key ) . '" value="' . esc_attr( $key ) . '" ' . (defined('WPMOZO_BNA_PRO_VERSION') ? esc_attr( $checked ) : 'disabled') . '>
						<span class="wpmozo_toggle_slider">
							<span class="wpmozo_toggle_dot"></span>
						</span>
					</span>';
				} else {
					$checked = in_array( $key, explode( ',', $inactive_value ), true ) ? '' : checked( 1, 1, false );
					$list   .= '
					<span class="wpmozo_bna_checkbox_wrapper wpmozo-bna-icon-'.$key.'">
						<label for="' . esc_attr( $key ) . '">' . ucwords( esc_html( $option ) ) . '</label>
						<input type="checkbox" class="wpmozo_bna_panel_checkbox" id="' . esc_attr( $key ) . '" value="' . esc_attr( $key ) . '" ' . esc_attr( $checked ) . '>
						<span class="wpmozo_toggle_slider">
							<span class="wpmozo_toggle_dot"></span>
						</span>
					</span>';
				}
			}

			return sprintf(
				'<div class="wpmozo_bna_panel_field wpmozo_bna_panel_multiple_checkbox">
					<div class="wpmozo_bna_panel_select_deselect" >
						<span><input type="button" class="wpmozo_bna_panel_select_all" value="Select All"></span>
						<span><input type="button" class="wpmozo_bna_panel_deselect_all" value="Deselect All"></span>
						<span class="wpmozo_bna_panel_settings_info">%4$s</span>
					</div>
					<div class="wpmozo_bna_panel_multiple_checkboxes">
						%1$s
						<input id="%2$s" type="hidden" value="%3$s" class="wpmozo_bna_panel_hiddenfield wpmozo_inactive_checkboxes_value wpmozo_panel_value" name="%2$s" />
					</div>
				</div>',
				$list,
				esc_attr( $inactive_name ),
				esc_attr( $inactive_value ),
				$info
			);
		}
	}
}
