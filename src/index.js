import "./blocks/before-after-slider/index.js";
import "./blocks/content-toggle/js/index.js";
import "./blocks/content-wraper/index.js";
import "./blocks/fancy-heading/index.js";
import "./blocks/fancy-text/index.js";
import "./blocks/flip-box/js/index.js";
import "./blocks/interactive-image-card/js/index.js";
import "./blocks/logo-slider/index.js";
import "./blocks/logo-slide/index.js";
import "./blocks/floating-image-item/index.js";
import "./blocks/floating-image/index.js";

import { select, subscribe } from "@wordpress/data";
import { getSiteUrl } from "@wordpress/url";

subscribe(() => {

    const isSavingPost = select('core/editor').isSavingPost(),
        isAutosavingPost = select('core/editor').isAutosavingPost(),
        postId = select('core/editor').getCurrentPostId(),
        postType = select('core/editor').getCurrentPostType(),
        currentPost = select('core/editor').getCurrentPost();

    if (isSavingPost && !isAutosavingPost ) {

        const siteUrl = select("core").getSite(),
            apiUrl = siteUrl.url + '/wp-json/wpmozo/v1/save-dynamic-style';
        let style = window.wpmozo.extractCssByClass(),
            ID = currentPost.hasOwnProperty('wp_id') ? currentPost.wp_id : postId;

        fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ post_id: ID, style: style }),
        });
    }
});