import { convertInlineStyleStr } from '../../../common/utils.js';

const generateDynamicStyle = ( { attributes } ) => {
	const toConvertStyles = ['container'];
	let convertedStyle = convertInlineStyleStr( toConvertStyles, attributes );

	let styles = `#block-${attributes.ID} {`;

	styles +=`
		${convertedStyle.container}
		.wpmozo_image_card_ticker_inner img{
			width:${attributes.image_width}px;
			height:${attributes.image_height}px;
		}
	`;

	if('marquee'===attributes.tickerLayout){
		if ( 'top' === attributes.marqueeDirection || 'bottom' === attributes.marqueeDirection ) {
			styles +=`
				.wpmozo_image_card_ticker_inner{
					height:${attributes.marquee_wrap_height}px;
				}
			`;
		}
	}

	if('3d_circular'===attributes.tickerLayout){
		styles +=`
			.wpmozo_image_card_ticker_inner{
				height:${attributes.circle3d_wrap_height}px;
			}
		`;
	}

	styles += `}`;
	return styles;
}

export default generateDynamicStyle;