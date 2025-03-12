
import { select, subscribe } from "@wordpress/data";

subscribe(() => {

    const isSaving = select('core/editor').isSavingPost(),
        isAutosaving = select('core/editor').isAutosavingPost(),
        postId = select('core/editor').getCurrentPostId(),
        postType = select('core/editor').getCurrentPostType(),
        currentPost = select('core/editor').getCurrentPost(),
        siteUrl = wpmozo_adfgu_editor_object.restUrl;

    if (!isSaving && !isAutosaving) {
        jQuery('body').removeClass('wpmozo-saving-dynamic-style');
    }

    if (isSaving && !isAutosaving) {
        
        if ( window.wpmozo.wpmozo_is_empty( siteUrl ) ) {
            return;
        }

        const apiUrl = siteUrl + 'wpmozo/v1/save-dynamic-style';

        let style = window.wpmozo.extractCssByClass(),
            ID = currentPost.hasOwnProperty('wp_id') ? currentPost.wp_id : postId;

        if ( ! jQuery('body').hasClass('wpmozo-saving-dynamic-style') ) {
            jQuery('body').addClass('wpmozo-saving-dynamic-style');
            fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ post_id: ID, style: style }),
            });
        }
  
    }
});
