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
    const isSavingPost = select('core/editor').isSavingPost();
    const isAutosavingPost = select('core/editor').isAutosavingPost();
    const postId = select('core/editor').getCurrentPostId();

    if (isSavingPost && !isAutosavingPost ) {

        const siteUrl = select("core").getSite();
        const apiUrl = siteUrl.url + '/wp-json/wpmozo/v1/save-gutenberg-data';

        let style = window.wpmozo.extractCssByClass();
        fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ post_id: postId, style: style }),
        });
    }
});