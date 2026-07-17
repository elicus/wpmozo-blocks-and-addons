import { convertInlineStyleStr } from '../../common/utils.js';

const generateDynamicStyle = ( { attributes, isEdit } ) => {
	const toConvertStyles = [
		'day',
		'dayHover',
		'time',
		'timeHover',
		'hourItem',
		'block'
	];
	let convertedStyle = convertInlineStyleStr( toConvertStyles, attributes );

    let normalcss = [],
	    hovercss = [],
	    cssExtras = [];
	const isEditor = (selector) => {return isEdit ? `,&.is_hover ${selector}` : ''};

	normalcss.push(
		`.wpmozo_business_hours_wrap { 
			border: 0 solid #000;
			${attributes.blockBGGradient ? `background:`+ attributes.blockBGGradient + `;` : ''}
			${attributes.blockBackground ? `background:`+ attributes.blockBackground + `;` : ''}
			${convertedStyle.block || '' } 
		}` 
	);
	normalcss.push( `.wpmozo_business_hour_wrapper{ display: flex; align-items: center; }` );
	
	normalcss.push(
		`.wpmozo_business_day{
			width: 50%;
			${ attributes.dayColor ? `color:`+ attributes.dayColor + `;` : '' }
			${ convertedStyle.day || '' }
			transition:all 300ms;
		}` 
	);
	hovercss.push(
		(attributes.dayHoverColor ||  convertedStyle.dayHover) 
		? `.wpmozo_business_day:hover${isEditor('.wpmozo_business_day')}{
				${ attributes.dayHoverColor ? `color:`+ attributes.dayHoverColor + `;` : '' }
				${ convertedStyle.dayHover || ''}
			}` 
		: '' 
	);

	normalcss.push(
		`.wpmozo_business_time{
			width: 50%;
			text-align: right;
			${ attributes.timeColor ? `color:`+ attributes.timeColor + `;` : '' }
			${ convertedStyle.time || '' }
			transition:all 300ms;
		}` 
	);
	hovercss.push(
		(attributes.timeHoverColor ||  convertedStyle.timeHover) 
		? `.wpmozo_business_time:hover${isEditor('.wpmozo_business_time')}{
				${ attributes.timeHoverColor ? `color:`+ attributes.timeHoverColor + `;` : '' }
				${ convertedStyle.timeHover || '' }
			}` 
		: '' 
	);

	normalcss.push(
		`.wpmozo_business_hours_item{
			border: 0 solid #000000;
			${ attributes.hourItemBackground ? `background:`+ attributes.hourItemBackground + `;` : '' }
			${ convertedStyle.hourItem || '' }
			transition:all 300ms;
		}` 
	);

	normalcss.push(
		attributes.hourItemBackgroundEven 
		? `.wpmozo_business_hours_item:nth-child(even){ background: ${ attributes.hourItemBackgroundEven }; }` 
		: '' 
	);
	
	normalcss.push(
		attributes.hourItemBackgroundOdd 
		? `.wpmozo_business_hours_item:nth-child(odd){ background: ${ attributes.hourItemBackgroundOdd }; }` 
		: '' 
	);

	const hasStyles = normalcss.some(Boolean) || hovercss.some(Boolean);
	
	let styles = hasStyles ? `#block-${attributes.ID}{${normalcss.filter(Boolean).join('\n')} ${hovercss.filter(Boolean).join('\n')}}` : '';
	
	styles += cssExtras.some(Boolean) ? cssExtras.filter(Boolean).join('\n') : '';
	styles = styles.replace(/\s+/g, ' ')
    .replace(/\s*{\s*/g, '{')
    .replace(/\s*}\s*/g, '}')
    .replace(/\s*:\s*/g, ':')
    .replace(/\s*;\s*/g, ';')
    .replace(/\s*,\s*/g, ',')    
    .trim();
	return styles;
}

export default generateDynamicStyle;