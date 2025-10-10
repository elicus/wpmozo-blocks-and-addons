<?php
/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */

use WPMOZO\BNA\Helpers\Mozo_Bna_Block_Helpers;
$helpers = new Mozo_Bna_Block_Helpers();
// Get attributes safely
$trigger_element     = isset( $attributes['trigerElement'] ) ? $attributes['trigerElement'] : '';
$trigger_action      = isset( $attributes['trigerAction'] ) ? $attributes['trigerAction'] : '';
$entrance_animation  = isset( $attributes['entranceAnimation'] ) ? $attributes['entranceAnimation'] : 'fade';
$animation_duration  = isset( $attributes['animationDuration'] ) ? $attributes['animationDuration'] : '';
$showSpeechBubble    = isset( $attributes['showSpeechBubble'] ) ? boolval($attributes['showSpeechBubble']) : false;
$make_interactive    = isset( $attributes['makeInteractiveTooltip'] ) ? boolval($attributes['makeInteractiveTooltip']) : false;
$tooltip_width       = isset( $attributes['tooltipWidth'] ) ? $attributes['tooltipWidth'] : '';
$trigger_button_text = isset( $attributes['triggerButtonText'] ) ? $attributes['triggerButtonText'] : '';
$trigger_text        = isset( $attributes['triggerText'] ) ? $attributes['triggerText'] : '';
$icon                = isset( $attributes['icon'] ) ? $attributes['icon'] : '';
$image               = '';
if ( isset( $attributes['image'] ) && is_array( $attributes['image'] ) && isset( $attributes['image']['url'] ) ) {
	$image = $attributes['image']['url'];
} elseif ( isset( $attributes['image'] ) && is_string( $attributes['image'] ) ) {
	$image = $attributes['image'];
}
if ( ! empty( $entrance_animation ) && 'fade' !== $entrance_animation ) {
	wp_enqueue_style( 'dipl-tippy-animation-style', plugins_url( 'wpmozo-blocks-and-addons/includes/assets/css/tippy-animations/all-animation.css') );
}

?>
<?php echo $helpers::get_block_dynamic_style( 'advanced-tooltip', $attributes ); ?>
<div <?php echo get_block_wrapper_attributes(); ?> id="block-<?php echo $attributes['ID']; ?>">
	<div class="wpmozo_advanced_tooltip icon_">
		<div
			class="wpmozo_tooltip_trigger_element_wrap trigger_type_<?php echo esc_attr( $trigger_element ); ?>"
			data-trigger-action="<?php echo esc_attr( $trigger_action ); ?>"
			data-animation="<?php echo esc_attr( $entrance_animation ); ?>"
			data-duration="<?php echo esc_attr( $animation_duration ); ?>"
			data-speechBubble="<?php if ($showSpeechBubble === true) {echo "true";} else { echo "false";} ?>"
			data-interactive="<?php if ($make_interactive === true) {echo "true";} else { echo "false";} ?>"
			data-tooltip-width="<?php echo esc_attr( $tooltip_width ); ?>"
			data-trigger-element="<?php echo esc_attr( $trigger_element ); ?>"
		>
			<?php
			if ( $trigger_element === 'button' && trim( $trigger_button_text ) ) :

				// Prepare icon HTML if needed
				$button_icon_html = '';
				$has_icon = !empty( $attributes['buttonIconStyle'] ) && !empty( $attributes['buttonIcon'] );
				if ( $has_icon ) {
					$button_icon_html = sprintf(
						'<i class="wpmozo-bna-icon %s"></i>',
						esc_attr( $attributes['buttonIcon'] )
					);
				}

				// Build button classes
				$button_classes = [
					'wpmozo-bna-button',
					'wpmozo_tooltip_trigger_element',
					'wpmozo_tooltip_trigger_button',
				];
				if ( !empty( $attributes['buttonIconStyle'] ) && !empty( $attributes['buttonIconOnHover'] ) ) {
					$button_classes[] = 'wpmozo-icon-on-hover';
				}
				$button_classes[] = (
					!empty( $attributes['buttonIconStyle'] )
					&& isset( $attributes['buttonIconPosition'] )
					&& $attributes['buttonIconPosition'] === 'before'
				) ? 'wpmozo-icon-at-before' : 'wpmozo-icon-at-after';

				// Determine URL and target
				$url = ( isset( $attributes['trigerAction'] ) && $attributes['trigerAction'] === 'mouseenter' && !empty( $attributes['triggerButtonUrl'] ) )
					? $attributes['triggerButtonUrl']
					: 'javascript:void(0)';
				$target = ( isset( $attributes['trigerAction'], $attributes['buttonLinkTarget'] )
							&& $attributes['trigerAction'] === 'mouseenter'
							&& $attributes['buttonLinkTarget'] === 'external' )
					? ' target="_blank"'
					: '';

				?>
				<div class="wpmozo-bna-button-wrap">
					<a href="<?php echo esc_url( $url ); ?>"<?php echo $target; ?>
					   class="<?php echo esc_attr( implode( ' ', $button_classes ) ); ?>">
						<span class="wpmozo-bna-btn-text"><?php echo esc_html( $trigger_button_text ); ?></span>
						<?php echo $button_icon_html; ?>
					</a>
				</div>
			<?php endif; ?>

			<?php if ( $trigger_element === 'image' && $image ) : ?>
				<img class="wpmozo_tooltip_trigger_element wpmozo_tooltip_trigger_image"
					 src="<?php echo esc_url( $image ); ?>" aria-expanded="false"/>
			<?php endif; ?>

			<?php if ( $trigger_element === 'icon' && $icon ) : ?>
				<i class="wpmozo_tooltip_trigger_element wpmozo_tooltip_trigger_icon <?php echo esc_attr( $icon ); ?>"></i>
			<?php endif; ?>

			<?php if ( $trigger_element === 'text' && $trigger_text ) : ?>
				<span
					class="wpmozo_tooltip_trigger_element wpmozo_tooltip_trigger_text"><?php echo esc_html( $trigger_text ); ?></span>
			<?php endif; ?>
		</div>
		<div class="wpmozo_advanced_tooltip_content_wrap tooltip-content">
			<div class="tooltip-inner-blocks">
				<?php echo $content; ?>
			</div>
		</div>
	</div>
</div>
