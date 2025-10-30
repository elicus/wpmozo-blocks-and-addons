import { convertInlineStyleStr } from '../../common/utils.js';

const generateDynamicStyle = ( { attributes } ) => {
	const toConvertStyles = [
		'titleText','excerptText','postItem','postContent','catText','cat','postImage','metaText','container','button'
	];
	let convertedStyle = convertInlineStyleStr( toConvertStyles, attributes );

    let styles = `#block-${attributes.ID} {`;

	if('layout1' === attributes.layout){
		styles +=`
			.wpmozo_horizontal_scrolling_post_title,
			.wpmozo_horizontal_scrolling_post_title a{
				text-align: ${attributes.titleTextAlignment};
				color: ${attributes.titleTextColor};
				${convertedStyle.titleText || ''}
			}
			.wpmozo_horizontal_scrolling_post_excerpt{
				text-align: ${attributes.excerptTextAlignment};
				color: ${attributes.excerptTextColor};
				${convertedStyle.excerptText || ''}
			}
			.item_layout1 .wpmozo_horizontal_scrolling_post_wrapper{
				background-color: ${attributes.postItemColor};
				width:${attributes.postItemWidth}px;
				min-width:${attributes.postItemWidth}px;
				${convertedStyle.postItem};
			}
			.item_layout1 .wpmozo_horizontal_scrolling_post_content_wrapper{
				background-color:${attributes.postContentColor};
				${convertedStyle.postContent};
			}
			.wpmozo_horizontal_scrolling_post_tag a {
				color:${attributes.catTextColor};
				background-color:${attributes.catBKColor};
				${convertedStyle.catText};
				${convertedStyle.cat};
			}
			.wpmozo_horizontal_scrolling_post_wrapper .wpmozo_horizontal_scrolling_post_image{
				height: ${attributes.imageHeight}px;
				${convertedStyle.postImage};
			}
			.wpmozo_horizontal_scrolling_post_meta_wrapper .fas,
			.wpmozo_horizontal_scrolling_post_tag .fas{
				font-size: ${attributes.metaIconFontSize}px;
				color: ${attributes.metaIconColor};
			}
			.wpmozo_horizontal_scrolling_post_meta_wrapper,
			.wpmozo_horizontal_scrolling_post_meta_wrapper span,
			.wpmozo_horizontal_scrolling_post_meta_wrapper a,
			.wpmozo_horizontal_scrolling_post_tag_wrapper span.published{
				color: ${attributes.metaTextColor};
				${convertedStyle.metaText};
			}
			.wpmozo-bna-button {
				font-size:${attributes.buttonTextSize}px;
				color:${attributes.buttonTextColor};
				background:${attributes.buttonTextBackground};
				${convertedStyle.button};
			}
			.wpmozo-bna-icon{
				color:${attributes.buttonIconColor};
			}
			.wpmozo-sticky-posts-scroller{
				${convertedStyle.container};
			}
			.wpmozo-bna-button-wrap{
				text-align:${attributes.buttonAlignment}
			}

	`;
	} else {
		styles +=`
			.wpmozo_horizontal_scrolling_post_tag_wrapper span{
				display: flex;
			}
			.wpmozo_horizontal_scrolling_post_title,
			.wpmozo_horizontal_scrolling_post_title a{
				text-align: ${attributes.titleTextAlignment};
				color: ${attributes.titleTextColor};
				${convertedStyle.titleText || ''}
			}
			.wpmozo_horizontal_scrolling_post_excerpt{
				text-align: ${attributes.excerptTextAlignment};
				color: ${attributes.excerptTextColor};
				${convertedStyle.excerptText || ''}
			}
			.item_layout2 .wpmozo_horizontal_scrolling_post_wrapper{
				overflow:hidden;
				${convertedStyle.postItem};
			}
			.wpmozo_horizontal_scrolling_post_inner::before{
				background-color: ${attributes.postItemColor};
			}
			.item_layout2 .wpmozo_horizontal_scrolling_post_content_wrapper{
				background-color:${attributes.postContentColor};
				${convertedStyle.postContent};
			}
			.wpmozo_horizontal_scrolling_post_tag a {
				color:${attributes.catTextColor};
				background-color:${attributes.catBKColor};
				${convertedStyle.catText};
				${convertedStyle.cat};
			}
			.wpmozo_horizontal_scrolling_post_wrapper{
				width:${attributes.postItemWidth}px;
				min-width:${attributes.postItemWidth}px;
			}
			.wpmozo_horizontal_scrolling_post_wrapper .wpmozo_horizontal_scrolling_post_image{
				height: ${attributes.imageHeight}px;
				${convertedStyle.postImage};
			}
			.wpmozo_horizontal_scrolling_post_meta_wrapper .fas,
			.wpmozo_horizontal_scrolling_post_tag .fas{
				font-size: ${attributes.metaIconFontSize}px;
				color: ${attributes.metaIconColor};
			}
			.wpmozo_horizontal_scrolling_post_meta_wrapper,
			.wpmozo_horizontal_scrolling_post_meta_wrapper span,
			.wpmozo_horizontal_scrolling_post_meta_wrapper a,
			.wpmozo_horizontal_scrolling_post_tag_wrapper span.published{
				color: ${attributes.metaTextColor};
				${convertedStyle.metaText};
			}
			.wpmozo-bna-button {
				font-size:${attributes.buttonTextSize}px;
				color:${attributes.buttonTextColor};
				background:${attributes.buttonTextBackground};
				${convertedStyle.button};
			}
			.wpmozo-bna-icon{
				color:${attributes.buttonIconColor};
			}
			.wpmozo-sticky-posts-scroller{
				${convertedStyle.container};
			}
			.wpmozo-bna-button-wrap{
				text-align:${attributes.buttonAlignment}
			}

	`;
	}

    styles += `}`;
	return styles;
}

export default generateDynamicStyle;
