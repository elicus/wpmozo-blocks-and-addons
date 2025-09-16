<?php
/**
 * Fancy Text Banner.
 */
return array(
	'title'       => __( 'Fancy Text Travel Banner', 'wpmozo-blocks-and-addons' ),
	'description' => _x(
		'Use this patter to add Fancy Text Travel Banner to your page.',
		'Block pattern description',
		'wpmozo-blocks-and-addons'
	),
	'categories'  => array( 'wpmozo' ),
	'content'     =>
        '<!-- wp:cover {"url":"https://wpmozoblocks.com/wp-content/uploads/2025/03/travel-tour.webp","id":486,"isUserOverlayColor":true,"customGradient":"linear-gradient(180deg,rgb(53,155,132) 0%,rgba(155,81,224,0) 100%)","metadata":{"categories":["banner"],"patternName":"twentytwentyfive/banner-poster","name":"Poster-like section"},"align":"full","style":{"elements":{"link":{"color":{"text":"var:preset|color|accent-1"}}},"spacing":{"padding":{"right":"var:preset|spacing|50","left":"var:preset|spacing|50","top":"var:preset|spacing|50","bottom":"var:preset|spacing|50"},"margin":{"top":"0","bottom":"0"}}},"textColor":"accent-1","layout":{"type":"constrained","contentSize":"100%"}} -->
            <div class="wp-block-cover alignfull has-accent-1-color has-text-color has-link-color" style="margin-top:0;margin-bottom:0;padding-top:var(--wp--preset--spacing--50);padding-right:var(--wp--preset--spacing--50);padding-bottom:var(--wp--preset--spacing--50);padding-left:var(--wp--preset--spacing--50)">
                <img class="wp-block-cover__image-background wp-image-486" alt="" src="https://wpmozoblocks.com/wp-content/uploads/2025/03/travel-tour.webp" data-object-fit="cover"/>
                <span aria-hidden="true" class="wp-block-cover__background has-background-dim-100 has-background-dim wp-block-cover__gradient-background has-background-gradient" style="background:linear-gradient(180deg,rgb(53,155,132) 0%,rgba(155,81,224,0) 100%)"></span>
                <div class="wp-block-cover__inner-container">
                <!-- wp:spacer -->
                    <div style="height:100px" aria-hidden="true" class="wp-block-spacer"></div>
                <!-- /wp:spacer -->

                <!-- wp:wpmozo/fancy-text {"ID":"","className":"wpmozo-adfgu-fancy-text-wrap","fancyText":"TRAVEL","fancyTextBackground":"linear-gradient(180deg,rgb(74,230,195) 0%,rgba(155,81,224,0) 100%)","textFontSize":"15vw","textFontAppearance":{"fontStyle":"normal","fontWeight":"800"}} -->
                    <div id="" class="wp-block-wpmozo-fancy-text wpmozo-bna-fancy-text-wrap wpmozo-adfgu-fancy-text-wrap"><div class="wpmozo-bna-fancy-text-inner gradient">TRAVEL</div></div>
                <!-- /wp:wpmozo/fancy-text -->

                <!-- wp:paragraph {"align":"center","style":{"elements":{"link":{"color":{"text":"var:preset|color|base"}}},"typography":{"fontSize":"100px"}},"textColor":"base"} -->
                    <p class="has-text-align-center has-base-color has-text-color has-link-color" style="font-size:100px">The World</p>
                <!-- /wp:paragraph -->

                <!-- wp:spacer -->
                    <div style="height:100px" aria-hidden="true" class="wp-block-spacer"></div>
                <!-- /wp:spacer -->
            </div></div>
        <!-- /wp:cover -->'
);
