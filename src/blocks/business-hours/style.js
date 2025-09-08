import { convertInlineStyleStr } from '../../common/utils.js';

const generateDynamicStyle = ( { attributes, clientId } ) => {
	const toConvertStyles = [
		'day',
		'dayHover',
		'time',
		'timeHover',
		'hourItem',
		'block'
	];
	let convertedStyle = convertInlineStyleStr( toConvertStyles, attributes );

    let styles = `#block-${attributes.ID} {
		border: 0 solid #000;
		${attributes.blockBGGradient ? `background:`+ attributes.blockBGGradient + `;` : ''}
		${attributes.blockBackground ? `background:`+ attributes.blockBackground + `;` : ''}
		${ convertedStyle.block }`;

	// Wrapper styling.
	styles += `.wpmozo_business_hour_wrapper{ display: flex; align-items: center; }`;

	// Day styling.
	styles += `.wpmozo_business_day{
		width: 50%;
		${ attributes.dayColor ? `color:`+ attributes.dayColor + `;` : '' }
		${ convertedStyle.day }
	}`;
	styles += `.wpmozo_business_day:hover{
		${ attributes.dayHoverColor ? `color:`+ attributes.dayHoverColor + `;` : '' }
		${ convertedStyle.dayHover }
	}`;

	// Time styling.
	styles += `.wpmozo_business_time{
		width: 50%;
		text-align: right;
		${ attributes.timeColor ? `color:`+ attributes.timeColor + `;` : '' }
		${ convertedStyle.time }
	}`;
	styles += `.wpmozo_business_time:hover{
		${ attributes.timeHoverColor ? `color:`+ attributes.timeHoverColor + `;` : '' }
		${ convertedStyle.timeHover }
	}`;

	// Hour item.
	styles += `.wpmozo_business_hours_item{
		border: 0 solid #000000;
		${ attributes.hourItemBackground ? `background:`+ attributes.hourItemBackground + `;` : '' }
		${ convertedStyle.hourItem }
	}`;
	if ( attributes.hourItemBackgroundEven ) {
		styles += `.wpmozo_business_hours_item:nth-child(even){ background: ${ attributes.hourItemBackgroundEven }; }`
	}
	if ( attributes.hourItemBackgroundOdd ) {
		styles += `.wpmozo_business_hours_item:nth-child(odd){ background: ${ attributes.hourItemBackgroundOdd }; }`
	}

    styles += `}`;
	return styles;
}

export default generateDynamicStyle;
