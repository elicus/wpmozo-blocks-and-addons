import { convertInlineStyleStr } from '../../common/utils.js';

const generateDynamicStyle = ( { attributes } ) => {
	const toConvertStyles = [
		'tickerLabel','tickerLabelHover','postItems','postItemsHover','postItem','postItemHover','postSeparator','arrow'
	];

	let convertedStyle = convertInlineStyleStr( toConvertStyles, attributes );

	let styles = `#block-${attributes.ID} {`;

	styles +=`
			.wpmozo_post_ticker_label{
				color: ${attributes.tickerLabelColor};
				background-color: ${attributes.tickerLabelBackground};
				${convertedStyle.tickerLabel}
			}
			.wpmozo_post_ticker_label:hover{
				color: ${attributes.tickerLabelHoverColor};
				background-color: ${attributes.tickerLabelHoverBackground};
				${convertedStyle.tickerLabelHover}
			}
			.wpmozo_post_ticker_items {
				background-color: ${attributes.postItemsBackground};
				${convertedStyle.postItems}
			}
			.wpmozo_post_ticker_items:hover {
				background-color: ${attributes.postItemsHoverBackground};
				${convertedStyle.postItemsHover}
			}
			.wpmozo_post_ticker_post_title{
				color: ${attributes.postItemColor};
				${convertedStyle.postItem}
			}
			.wpmozo_post_ticker_post_title:hover{
				color: ${attributes.postItemHoverColor};
				${convertedStyle.postItemHover}
			}
			.wpmozo_swiper_navigation{
				background-color: ${attributes.arrowBackground};
			}
			.wpmozo_swiper_icon_prev i,
			.wpmozo_swiper_icon_next i{
				color: ${attributes.arrowColor};
				font-size:${attributes.arrowFontSize}px;
				${convertedStyle.arrow}
			}
			.wpmozo_ticker_icon_separator{
				font-size: ${attributes.separatorFontSize}px;
    			color: ${attributes.postSeparatorColor};
    			${convertedStyle.postSeparator}
			}
	`;

	if('scroll' === attributes.tickerEffect){
		if('custom' === attributes.separatorType){
			styles += `.wpmozo_ticker_effect_scroll .wpmozo_post_ticker_item::after{
				content: "${attributes.customSeparator}" !important;
    			font-size: ${attributes.separatorFontSize}px;
    			color: ${attributes.postSeparatorColor};
    			${convertedStyle.postSeparator}
			}`;
		}
		if('icon' === attributes.separatorType){
			styles += `.wpmozo_ticker_icon_separator{
				vertical-align:top;
			}`;
		}
	}

	styles += `}`;

	return styles;
};

export default generateDynamicStyle;
