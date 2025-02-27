jQuery(document).ready(function($){

    const __ = window.wp.i18n.__,
    addRowText = __( 'Add Row', 'wpmozo-addons-lite-for-gutenberg' ),
    removeRowText = __( 'Remove Row', 'wpmozo-addons-lite-for-gutenberg' );

    /* Fill metafields value in hidden field on blur */
    if ( $('body').find('.wpmozo_team_member_skills').length > 0 ) {
        $('body').on('blur', '.wpmozo_team_member_skills', function(){
            let skills = [];
            $('.wpmozo_team_member_skills').each(function(){
                let value = $(this).val();
                if ( value ){
                    skills.push( $(this).val() );
                }
            });
            $('#wpmozo_team_member_skills').val(skills);
        });
    }

    /* Fill metafields value in hidden field on blur */
    if ( $('body').find('.wpmozo_team_member_skills_value').length > 0 ) {
        $('body').on('blur', '.wpmozo_team_member_skills_value', function(){
            let skills_val = [];
            $('.wpmozo_team_member_skills_value').each(function(){
                let value = $(this).val();
                if ( value ) {
                    skills_val.push( $(this).val() );
                }
            });
            $('#wpmozo_team_member_skills_value').val(skills_val);
        });
    }

    /* Add Row */
    $(document).on('click', '.wpmozo-add-row', function(){
        let row  = '<div class="wpmozo_repeator_meta_field_row">';
            row += '<div class="wpmozo_repeator_meta_field">';
            row += '<input type="text" class="wpmozo_team_member_skills wpmozo_panel_textfield" placeholder="Skill" />';
            row += '<input type="number" class="wpmozo_team_member_skills_value wpmozo_panel_textfield" placeholder="Skill Value Between 0 to 100" step="1" min="0" max="100"/>';
            row += '</div>';
            row += '<p class="wpmozo_repeator_meta_field_row_controls wpmozo-repeater-fields-actions">';
            row += '<button class="button action-btn wpmozo_panel_button wpmozo-remove-row" title='+removeRowText+'"><span class="wpmozo_repeator_meta_field_add_row_control wpmozo_repeator_meta_field_remove_row dashicons dashicons-minus"></span></button>';
            row += '<button class="button action-btn wpmozo_panel_button wpmozo-add-row" title="'+addRowText+'"><span class="wpmozo_repeator_meta_field_add_row_control dashicons dashicons-plus-alt2 wpmozo_repeator_meta_field_add_row"></span></button>';
            row += '</p>'
            row += '</div>';

        if ( $(this).closest('.wpmozo_repeator_meta_field_row').find('.wpmozo_repeator_meta_field_remove_row').length < 1 ) {
            $(this).closest('.wpmozo_repeator_meta_field_row').find('.wpmozo_repeator_meta_field_row_controls').prepend('<button class="button action-btn wpmozo_panel_button wpmozo-remove-row" title='+removeRowText+'"><span class="wpmozo_repeator_meta_field_add_row_control wpmozo_repeator_meta_field_remove_row dashicons dashicons-minus"></span></button>');
        }
        $(this).closest('.wpmozo_repeator_meta_field_row').after(row);
        $(this).closest('.wpmozo_repeator_meta_field_row').find('.wpmozo_repeator_meta_field_row_controls .wpmozo-add-row').remove();
    });
    
    /* Remove Row */
    $(document).on('click', '.wpmozo-remove-row', function(){
        if ( $(this).parents('.wpmozo_repeator_meta_fields').find('.wpmozo_repeator_meta_field_row').length === 2 ) {
            let control = '<button class="button action-btn wpmozo_panel_button wpmozo-add-row" title="'+addRowText+'"><span class="wpmozo_repeator_meta_field_add_row_control dashicons dashicons-plus-alt2 wpmozo_repeator_meta_field_add_row"></span></button>';
            if ( $(this).closest('.wpmozo_repeator_meta_field_row').prev('.wpmozo_repeator_meta_field_row').length > 0 ) {
                $(this).closest('.wpmozo_repeator_meta_field_row').prev('.wpmozo_repeator_meta_field_row').find('.wpmozo_repeator_meta_field_row_controls .wpmozo-remove-row').remove();
                $(this).closest('.wpmozo_repeator_meta_field_row').prev('.wpmozo_repeator_meta_field_row').find('.wpmozo_repeator_meta_field_row_controls').append(control);
            } else {
                $(this).closest('.wpmozo_repeator_meta_field_row').next('.wpmozo_repeator_meta_field_row').find('.wpmozo_repeator_meta_field_row_controls .wpmozo-remove-row').remove();
            }
        } else {
            let control = '<button class="button action-btn wpmozo_panel_button wpmozo-add-row" title="'+addRowText+'"><span class="wpmozo_repeator_meta_field_add_row_control dashicons dashicons-plus-alt2 wpmozo_repeator_meta_field_add_row"></span></button>';
            if ( $(this).closest('.wpmozo_repeator_meta_field_row').nextAll('.wpmozo_repeator_meta_field_row').length === 0 ) {
                $(this).closest('.wpmozo_repeator_meta_field_row').prev('.wpmozo_repeator_meta_field_row').find('.wpmozo_repeator_meta_field_row_controls').append(control);
            }
        }
        $(this).closest('.wpmozo_repeator_meta_field_row').remove();
        $('.wpmozo_team_member_skills').trigger('blur');
        $('.wpmozo_team_member_skills_value').trigger('blur');
    });
});