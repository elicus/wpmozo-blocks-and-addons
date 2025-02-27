<?php
/**
 * Provide a team member meta box for the plugin.
 *
 * @link https://elicus.com
 * @since 1.0.0
 *
 * @package WPMozo_Addons_Lite_For_Gutenberg
 * @subpackage WPMozo_Addons_Lite_For_Gutenberg/admin/partials/metaboxes
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

if ( ! isset( $post ) || empty( $post ) ) {
	return;
}

$values         = get_post_custom( $post->ID );
$short_desc     = isset( $values['wpmozo_team_member_short_desc'] ) ? $values['wpmozo_team_member_short_desc'][0] : '';
$designation    = isset( $values['wpmozo_team_member_designation'] ) ? $values['wpmozo_team_member_designation'][0] : '';
$website_url    = isset( $values['wpmozo_team_member_website'] ) ? $values['wpmozo_team_member_website'][0] : '';
$linkedin       = isset( $values['wpmozo_team_member_linkedin'] ) ? $values['wpmozo_team_member_linkedin'][0] : '';
$facebook       = isset( $values['wpmozo_team_member_facebook'] ) ? $values['wpmozo_team_member_facebook'][0] : '';
$twitter        = isset( $values['wpmozo_team_member_twitter'] ) ? $values['wpmozo_team_member_twitter'][0] : '';
$instagram      = isset( $values['wpmozo_team_member_instagram'] ) ? $values['wpmozo_team_member_instagram'][0] : '';
$youtube        = isset( $values['wpmozo_team_member_youtube'] ) ? $values['wpmozo_team_member_youtube'][0] : '';
$email          = isset( $values['wpmozo_team_member_email'] ) ? $values['wpmozo_team_member_email'][0] : '';
$phone          = isset( $values['wpmozo_team_member_phone'] ) ? $values['wpmozo_team_member_phone'][0] : '';
$skills         = isset( $values['wpmozo_team_member_skills'] ) ? $values['wpmozo_team_member_skills'][0] : '';
$skills_value   = isset( $values['wpmozo_team_member_skills_value'] ) ? $values['wpmozo_team_member_skills_value'][0] : '';

wp_nonce_field( 'wpmozo_metaboxes_nonce', 'wpmozo_team_member_metabox_nonce' );

$allowed_html = array(
    'p' => array(
        'id'    => array(),
        'class' => array(),
    ),
    'ul' => array(
        'id'    => array(),
        'class' => array(),
    ),
    'ol' => array(
        'id'    => array(),
        'class' => array(),
    ),
    'li' => array(
        'id'    => array(),
        'class' => array(),
    ),
    'span' => array(
        'id'    => array(),
        'class' => array(),
    ),
    'strong' => array(
        'id'    => array(),
        'class' => array(),
    ),
    'b' => array(
        'id'    => array(),
        'class' => array(),
    ),
    'a' => array(
        'href'  => array(),
        'id'    => array(),
        'class' => array(),
    ),
    'br' => array(
        'id'    => array(),
        'class' => array(),
    ),
    'h1' => array(
        'id'    => array(),
        'class' => array(),
    ),
    'h2' => array(
        'id'    => array(),
        'class' => array(),
    ),
    'h3' => array(
        'id'    => array(),
        'class' => array(),
    ),
    'h4' => array(
        'id'    => array(),
        'class' => array(),
    ),
    'h5' => array(
        'id'    => array(),
        'class' => array(),
    ),
    'h6' => array(
        'id'    => array(),
        'class' => array(),
    ),
);

?>
<div class="wpmozo_panel_field">
    <div class="wpmozo_panel_label_control">
        <label for="wpmozo_team_member_short_desc">
            <?php esc_html_e( 'Short Description', 'divi-plus' ); ?>
        </label>
    </div>
    <div class="wpmozo_panel_field_control">
        <textarea type="text" name="wpmozo_team_member_short_desc" id="wpmozo_team_member_short_desc"><?php echo wp_kses( $short_desc, $allowed_html ); ?></textarea>
        <span class="info"><?php echo esc_html__( 'Support for few HTML tags like h1,h2,h3,h4,h5,h6,p,ul,ol,li,span,strong,b,a,br', 'divi-plus' ); ?></span>
    </div>
</div>
<div class="wpmozo_panel_field">
    <div class="wpmozo_panel_label_control">
        <label for="wpmozo_team_member_designation">
            <?php esc_html_e( 'Designation', 'divi-plus' ); ?>
        </label>
    </div>
    <div class="wpmozo_panel_field_control">
        <input type="text" name="wpmozo_team_member_designation" id="wpmozo_team_member_designation" value="<?php echo esc_attr( $designation ); ?>" />
    </div>
</div>
<div class="wpmozo_panel_field">
    <div class="wpmozo_panel_label_control">
        <label for="wpmozo_team_member_email">
            <?php esc_html_e( 'Email Address', 'divi-plus' ); ?>
        </label>
    </div>
    <div class="wpmozo_panel_field_control">
        <input type="email" name="wpmozo_team_member_email" id="wpmozo_team_member_email" value="<?php echo esc_attr( $email ); ?>" />
    </div>
</div>
<div class="wpmozo_panel_field">
    <div class="wpmozo_panel_label_control">
        <label for="wpmozo_team_member_phone">
            <?php esc_html_e( 'Phone Number', 'divi-plus' ); ?>
        </label>
    </div>
    <div class="wpmozo_panel_field_control">
        <input type="tel" name="wpmozo_team_member_phone" id="wpmozo_team_member_phone" value="<?php echo esc_attr( $phone ); ?>" />
    </div>
</div>
<div class="wpmozo_panel_field">
    <div class="wpmozo_panel_label_control">
        <label for="wpmozo_team_member_website">
            <?php esc_html_e( 'Website Url', 'divi-plus' ); ?>
        </label>
    </div>
    <div class="wpmozo_panel_field_control">
        <input type="url" name="wpmozo_team_member_website" id="wpmozo_team_member_website" value="<?php echo esc_attr( $website_url ); ?>" />
    </div>
</div>
<div class="wpmozo_panel_field">
    <div class="wpmozo_panel_label_control">
        <label for="wpmozo_team_member_facebook">
            <?php esc_html_e( 'Facebook Url', 'divi-plus' ); ?>
        </label>
    </div>
    <div class="wpmozo_panel_field_control">
        <input type="url" name="wpmozo_team_member_facebook" id="wpmozo_team_member_facebook" value="<?php echo esc_attr( $facebook ); ?>" />
    </div>
</div>
<div class="wpmozo_panel_field">
    <div class="wpmozo_panel_label_control">
        <label for="wpmozo_team_member_twitter">
            <?php esc_html_e( 'Twitter Url', 'divi-plus' ); ?>
        </label>
    </div>
    <div class="wpmozo_panel_field_control">
        <input type="url" name="wpmozo_team_member_twitter" id="wpmozo_team_member_twitter" value="<?php echo esc_attr( $twitter ); ?>" />
    </div>
</div>
<div class="wpmozo_panel_field">
    <div class="wpmozo_panel_label_control">
        <label for="wpmozo_team_member_linkedin">
            <?php esc_html_e( 'Linkedin Url', 'divi-plus' ); ?>
        </label>
    </div>
    <div class="wpmozo_panel_field_control">
        <input type="url" name="wpmozo_team_member_linkedin" id="wpmozo_team_member_linkedin" value="<?php echo esc_attr( $linkedin ); ?>" />
    </div>
</div>
<div class="wpmozo_panel_field">
    <div class="wpmozo_panel_label_control">
        <label for="wpmozo_team_member_instagram">
            <?php esc_html_e( 'Instagram Url', 'divi-plus' ); ?>
        </label>
    </div>
    <div class="wpmozo_panel_field_control">
        <input type="url" name="wpmozo_team_member_instagram" id="wpmozo_team_member_instagram" value="<?php echo esc_attr( $instagram ); ?>" />
    </div>
</div>
<div class="wpmozo_panel_field">
    <div class="wpmozo_panel_label_control">
        <label for="wpmozo_team_member_youtube">
            <?php esc_html_e( 'Youtube Url', 'divi-plus' ); ?>
        </label>
    </div>
    <div class="wpmozo_panel_field_control">
        <input type="url" name="wpmozo_team_member_youtube" id="wpmozo_team_member_youtube" value="<?php echo esc_attr( $youtube ); ?>" />
    </div>
</div>
<div class="wpmozo_panel_field">
    <div class="wpmozo_panel_label_control">
        <label for="wpmozo_team_member_youtube">
            <?php esc_html_e( 'Skills', 'divi-plus' ); ?>
        </label>
    </div>
    <div class="wpmozo_panel_field_control">
        <div class="wpmozo_repeator_meta_fields">
            <input type="hidden" id="wpmozo_team_member_skills" name="wpmozo_team_member_skills" value="<?php echo esc_attr( $skills ); ?>" />
            <input type="hidden" id="wpmozo_team_member_skills_value" name="wpmozo_team_member_skills_value" value="<?php echo esc_attr( $skills_value ); ?>" />
            <?php
                $skills         = explode( ',', $skills );
                $skills_value   = explode( ',', $skills_value );
            if ( is_array( $skills ) && ! empty( array_filter( $skills ) ) ) {
                if ( count($skills) > 1 ) {
                    $row_control = '<span class="wpmozo_repeator_meta_field_add_row_control wpmozo_repeator_meta_field_remove_row">-</span>';
                } else {
                    $row_control = '';
                }
                for ( $i=0; $i < count($skills); $i++ ) {
                    $skill_value = array_key_exists( $i, $skills_value ) ? absint( $skills_value[$i] ) : 100;
                    ?>
                    <div class="wpmozo_repeator_meta_field_row">
                        <div class="wpmozo_repeator_meta_field">
                            <input type="text" class="wpmozo_team_member_skills" value="<?php echo esc_attr( $skills[$i] ); ?>" placeholder="Skill" />
                            <input type="number" class="wpmozo_team_member_skills_value" value="<?php echo esc_attr( $skill_value ); ?>" placeholder="Skill Value Between 0 to 100" step="1" min="0" max="100"/>
                        </div>
                        <p class="wpmozo_repeator_meta_field_row_controls">
                            <?php echo wp_kses_post( $row_control ); ?>
                            <?php  
                            if ( $i === ( count($skills) - 1 ) ) {
                                ?><span class="wpmozo_repeator_meta_field_add_row_control wpmozo_repeator_meta_field_add_row">+</span><?php
                            }
                            ?>
                        </p>
                    </div>
                    <?php
                }
            } else {
             ?>
                <div class="wpmozo_repeator_meta_field_row">
                    <div class="wpmozo_repeator_meta_field">
                        <input type="text" class="wpmozo_team_member_skills" placeholder="Skill" />
                        <input type="number" class="wpmozo_team_member_skills_value" placeholder="Skill Value Between 0 to 100" step="1" min="0" max="100" />
                    </div>
                    <p class="wpmozo_repeator_meta_field_row_controls">
                        <span class="wpmozo_repeator_meta_field_add_row_control wpmozo_repeator_meta_field_add_row">+</span>
                    </p>
                </div>
            <?php
            }
            ?>
        </div>
    </div>
</div>
<?php