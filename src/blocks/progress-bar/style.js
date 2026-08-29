import { convertInlineStyleStr, wpmozo_get_text_shadow } from '../../common/utils.js';

const generateDynamicStyle = ({ attributes, clientId, isEdit }) => {
    const toConvertStyles = [
        'percentage',
		'bar',
    ];
    let convertedStyle = convertInlineStyleStr(toConvertStyles, attributes);

    const percentShadow = wpmozo_get_text_shadow(attributes, 'percentageTextShadow');

    const blockId = clientId || attributes.ID;
    const id = `#block-${blockId}`;
    let normalcss = [],
	hovercss = [],
	cssExtras = [];
	const isEditor = (selector) => {return isEdit ? `,&.is_hover ${selector}` : ''};

	normalcss.push(
		( attributes.percentageColor || percentShadow || convertedStyle.percentage )
		? `.wpmozo-bna-progress-bar-percent{
				${attributes.percentageColor ? `color: ${attributes.percentageColor};` : ''}
				${convertedStyle.percentage}
				${percentShadow ? `text-shadow: ${percentShadow};` : ''}
		  }`
		: ''
	);
	
	hovercss.push( attributes.percentageHoverColor ? `.wpmozo-bna-progress-bar-wrapper:hover .wpmozo-bna-progress-bar-percent${isEditor('.wpmozo-bna-progress-bar-wrapper .wpmozo-bna-progress-bar-percent')} { color : ${attributes.percentageHoverColor}; }` : '' );

	if ('bar' === attributes.layout) {
        const sizeProp = ('vertical' === attributes.barDirection) ? 'width' : 'height';
		normalcss.push(
		( attributes.barEmptyColor || attributes.barSize || convertedStyle.bar )
			? `.wpmozo-bna-progress-bar-wrapper.wpmozo-bna-progress-bar-layout-bar {
					background-color: ${attributes.barEmptyColor || '#eeeeee'};
					${sizeProp}: ${attributes.barSize || 30}px;
					${convertedStyle.bar || ''}
				}`
			: ''
		);

		hovercss.push( attributes.barEmptyHoverColor ? `.wpmozo-bna-progress-bar-wrapper.wpmozo-bna-progress-bar-layout-bar:hover${isEditor('.wpmozo-bna-progress-bar-wrapper.wpmozo-bna-progress-bar-layout-bar')} { background-color : ${attributes.barEmptyHoverColor}; }` : '' );

		normalcss.push(
		( attributes.barFilledColor || attributes.barDirection || attributes.percentAlign )
			? `.wpmozo-bna-progress-bar-layout-bar .wpmozo-bna-progress-bar-inner {
					background-color: ${attributes.barFilledColor || '#007bff'};
					${'vertical' === attributes.barDirection 
						? `align-items: ${attributes.percentAlign === 'left' 
							? 'flex-start' 
							: (attributes.percentAlign === 'right' 
							? 'flex-end' 
							: 'center')
						};`
						:`justify-content: ${attributes.percentAlign === 'left' 
							? 'flex-start' 
							: (attributes.percentAlign === 'right' 
							? 'flex-end' 
							: 'center')
						};`
					}
				}`
			: ''
		);

		hovercss.push( attributes.barFilledHoverColor ? `.wpmozo-bna-progress-bar-layout-bar:hover .wpmozo-bna-progress-bar-inner${isEditor('.wpmozo-bna-progress-bar-layout-bar .wpmozo-bna-progress-bar-inner')} { background-color: ${attributes.barFilledHoverColor};}` : '' );
		
		
		
		
        if ('vertical' === attributes.barDirection) {
			normalcss.push( attributes.barHeight ? `.wpmozo-bna-progress-bar-wrapper[data-bar_direction="vertical"]{ height: ${attributes.barHeight || 500}px;}` : '' );
        }
    } else {
		normalcss.push( attributes.circleSize ? `.wpmozo-bna-progress-bar-wrapper {
			width: ${attributes.circleSize }px;
		}` : '' );
		
		normalcss.push( 
			(attributes.circleFillColor || attributes.barEmptyColor) 
			? `.wpmozo-bna-progress-bar-inner svg .wpmozo-bna-circle-bg {
					${attributes.circleFillColor  ? `fill: ${attributes.circleFillColor };` : ''}
					${attributes.barEmptyColor  ? `stroke: ${attributes.barEmptyColor };` : ''}
				}` 
			: '' 
		);
		hovercss.push( 
			(attributes.circleFillHoverColor || attributes.barEmptyHoverColor) 
			? `.wpmozo-bna-progress-bar-inner:hover svg .wpmozo-bna-circle-bg${isEditor('.wpmozo-bna-progress-bar-inner svg .wpmozo-bna-circle-bg')}{
					${attributes.circleFillHoverColor  ? `fill: ${attributes.circleFillHoverColor };` : ''}
					${attributes.barEmptyHoverColor  ? `stroke: ${attributes.barEmptyHoverColor };` : ''}
				}` 
			: '' 
		);

		normalcss.push( attributes.barFilledColor ? `.wpmozo-bna-progress-bar-inner svg .wpmozo-bna-circle-fg { stroke: ${attributes.barFilledColor }; }` : '' );
		hovercss.push( attributes.barFilledHoverColor ? `.wpmozo-bna-progress-bar-inner:hover svg .wpmozo-bna-circle-fg${isEditor('.wpmozo-bna-progress-bar-inner svg .wpmozo-bna-circle-fg')} { stroke: ${attributes.barFilledHoverColor }; }` : '' );
    }

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
};

export default generateDynamicStyle;