
import { select, subscribe } from "@wordpress/data";
import { getSiteUrl } from "@wordpress/url";
import { useEffect, Fragment } from "@wordpress/element";

let successApiCall = false;

subscribe(() => {

    const isSavingPost = select('core/editor').isSavingPost(),
        isAutosavingPost = select('core/editor').isAutosavingPost(),
        postId = select('core/editor').getCurrentPostId(),
        postType = select('core/editor').getCurrentPostType(),
        currentPost = select('core/editor').getCurrentPost();

    if (isSavingPost && !isAutosavingPost ) {

        const siteUrl = select("core").getSite();

        if ( window.wpmozo.wpmozo_is_empty( siteUrl ) || ! siteUrl.hasOwnProperty('url') ) {
            return;
        }

        const apiUrl = siteUrl.url + '/wp-json/wpmozo/v1/save-dynamic-style';

        let style = window.wpmozo.extractCssByClass(),
            ID = currentPost.hasOwnProperty('wp_id') ? currentPost.wp_id : postId;

        //if ( ! successApiCall ) {
            fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ post_id: ID, style: style }),
            }).then(function ( response ) {
                return response.json();
            })
            .then(function ( responseData ) {
                successApiCall = responseData.success
            });
        //}

    }else{
        successApiCall = false;
    }
}, []);