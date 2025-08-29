
const Style = ({attributes, ID, clientId}) => {

	const wpmozoCoreFun = window.wpmozo,
		parent = '#block-'+clientId,
		toConvertStyles = [
			'global',
			'prePost',
			'animated',
			'post',
			'prePostDimensions',
			'animatedDimensions'
		];

	let css = '',
		convertedStyle = wpmozoCoreFun.convetInlineStyleStr( toConvertStyles, attributes );


	let allInline = [
		{
			selector: '.wpmozo-bna-text-animator-wrapper',
			style: {
				'text-align': attributes.globalTextAlignment,
				'color': attributes.globalTextColor,
			},
			additional: convertedStyle.global
		},
		{
			selector: '.wpmozo-pre-text-wrapper',
			style: {
				'color': attributes.prePostTextColor,
			},
			additional: convertedStyle.prePost + convertedStyle.prePostDimensions
		},
		{
			selector: '.wpmozo-animated-text',
			style: {
				'color': attributes.animatedTextColor,
			},
			additional: convertedStyle.animated + convertedStyle.animatedDimensions
		},
	];

	if ( attributes.useBackgroundPrepost && 'classic' === attributes.prePostBackgroundType ) {
		allInline.push({
			selector: '.wpmozo-pre-text-wrapper',
			style: {
				'background-color': attributes.prePostBackgroundColor
			}
		})
	}
	if ( attributes.useBackgroundPrepost && 'gradient' === attributes.prePostBackgroundType ) {
		allInline.push({
			selector: '.wpmozo-pre-text-wrapper',
			style: {
				'background-image': attributes.prePostBackgroundGradient
			}
		})
	}

	if ( attributes.useBackgroundAnimated && 'classic' === attributes.animatedBackgroundType ) {
		allInline.push({
			selector: '.wpmozo-animated-text',
			style: {
				'background-color': attributes.animatedBackgroundColor
			}
		})
	}
	if ( attributes.useBackgroundAnimated && 'gradient' === attributes.animatedBackgroundType ) {
		allInline.push({
			selector: '.wpmozo-animated-text',
			style: {
				'background-image': attributes.animatedBackgroundGradient
			}
		})
	}

	let generateStyle = wpmozoCoreFun.wpmozo_generate_style(allInline);

	if ( ! wpmozoCoreFun.wpmozo_is_empty( generateStyle ) ) {
		css += `
	    	${parent} {
	    		${generateStyle}
	    	}
	    `;
	}

	return (
		<>
			{ ! wpmozoCoreFun.wpmozo_is_empty( css ) &&
				<style className="wpmozo-dynamic-style" data-id={ID} data-client-id={clientId}>{css}</style>
			}
		</>
	);

}

export default Style;