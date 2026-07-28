import {convertInlineStyleStr} from '../../common/utils.js';
const generateDynamicStyle = ( { attributes, isEdit } ) => {

	const {iconFontSize, separatorColor} = attributes,
		toConvertStyles = [
			'title',
			'subTitle',
			'icon',
			'headerGraphicsDimensions',
			'mainDimensions',
			'currency',
			'price',
			'period',
			'features',
			'featuresDimensions',
			'borderDimensions',
			'wrapper'
		];
	let convertedStyle = convertInlineStyleStr(toConvertStyles, attributes);

	let normalcss = [],
	hovercss = [],
	cssExtras = [];
	const isEditor = (selector) => {return isEdit ? `,&.is_hover ${selector}` : ''};

	normalcss.push(
		( attributes.backgroundColor || convertedStyle.mainDimensions || convertedStyle.wrapper )
		? `.wpmozo-bna-pricing-table-wrapper{
				${attributes.backgroundColor ? `background-color : ${attributes.backgroundColor};` : ''}
				${convertedStyle.mainDimensions || ''}
				${convertedStyle.wrapper || ''}
		  }`
		: ''
	);

	normalcss.push(
	attributes.buttonIconType === 'image'
		? `.wpmozo-bna-pricing-table-button-wrapper .wpmozo-bna-button .wpmozo-bna-button-image img {
			width: ${attributes.buttonFontSize ? `${attributes.buttonFontSize}px` : "20px"};
		}`
		: ''
	);

	normalcss.push(
		( attributes.titleColor || attributes.titleAlign || convertedStyle.title )
		? `.wpmozo-bna-pricing-table-title{
				${attributes.titleColor ? `color: ${attributes.titleColor};` : ''}
				${attributes.titleAlign ? `text-align: ${attributes.titleAlign};` : ''}
				${convertedStyle.title || ''}
		  }`
		: ''
	);

	normalcss.push(
		( attributes.subTitleColor || attributes.subTitleAlign || convertedStyle.subTitle )
		? `.wpmozo-bna-pricing-table-subtitle{
				${attributes.subTitleColor ? `color: ${attributes.subTitleColor};` : ''}
				${attributes.subTitleAlign ? `text-align: ${attributes.subTitleAlign};` : ''}
				${convertedStyle.subTitle || ''}
		  }`
		: ''
	);

	normalcss.push(
		( attributes.iconAlign || attributes.iconFontSize || attributes.iconColor || convertedStyle.icon || convertedStyle.headerGraphicsDimensions )
		? `.wpmozo-bna-pricing-table-header-graphic{
				${attributes.iconAlign ? `text-align: ${attributes.iconAlign};` : ''}
				${attributes.iconFontSize ? `font-size: ${attributes.iconFontSize};` : ''}
				${attributes.iconColor ? `color: ${attributes.iconColor};` : ''}
				${convertedStyle.icon || ''}
				${convertedStyle.headerGraphicsDimensions || ''}
		  }`
		: ''
	);

	normalcss.push(
		( attributes.imageWidth || attributes.imageHeight || convertedStyle.headerGraphicsDimensions )
		? `.wpmozo-bna-pricing-table-header-graphic-inner img{
				${attributes.imageWidth ? `width: ${attributes.imageWidth};` : ''}
				${attributes.imageHeight ? `height: ${attributes.imageHeight};` : ''}
				${convertedStyle.headerGraphicsDimensions || ''}
		  }`
		: ''
	);

	normalcss.push(
		( attributes.pricealign || convertedStyle.currency )
		? `.wpmozo-bna-pricing-table-pricing{
				${attributes.pricealign ? `text-align: ${attributes.pricealign};` : ''}
				${convertedStyle.currency || ''}
		  }`
		: ''
	);
	
	normalcss.push( attributes.currencyColor ? `.wpmozo-bna-pricing-table-currency-symbol{ color: ${attributes.currencyColor}; }` : '' );

	normalcss.push(
		( attributes.periodColor || convertedStyle.price )
		? `.wpmozo-bna-pricing-table-price{
				${attributes.periodColor ? `color: ${attributes.periodColor};` : ''}
				${convertedStyle.price || ''}
		  }`
		: ''
	);

	normalcss.push(
		( attributes.periodColor || convertedStyle.period )
		? `.wpmozo-bna-pricing-table-period{
				${attributes.periodColor ? `color: ${attributes.periodColor};` : ''}
				${convertedStyle.period || ''}
		  }`
		: ''
	);

	normalcss.push(
		( attributes.featuresColor || convertedStyle.features )
		? `.wpmozo-bna-pricing-table-feature-text{
				${attributes.featuresColor ? `color: ${attributes.featuresColor};` : ''}
				${convertedStyle.features || ''}
		  }`
		: ''
	);

	normalcss.push(
		( attributes.featuresBackground || attributes.feturesAlign || convertedStyle.featuresDimensions )
		? `.wpmozo-bna-pricing-table-features{
				${attributes.featuresBackground ? `background-color: ${attributes.featuresBackground};` : ''}
				${attributes.feturesAlign ? `text-align: ${attributes.feturesAlign};` : ''}
				${convertedStyle.featuresDimensions || ''}
		  }`
		: ''
	);
	
	normalcss.push( attributes.feturesAlign ? `.wpmozo-bna-pricing-table-features .wpmozo-bna-pricing-table-features-list{ justify-content: ${attributes.feturesAlign}; }` : '' );

	normalcss.push(
		( attributes.featuresIconsColor || attributes.featuresIconsSpacing )
		? `.wpmozo-bna-pricing-table-feature-icon{
				${attributes.featuresIconsColor ? `color: ${attributes.featuresIconsColor};` : ''}
				${attributes.featuresIconsSpacing ? `margin-right: ${attributes.featuresIconsSpacing};` : ''}
		  }`
		: ''
	);

	normalcss.push( attributes.buttonAlign ? `.wpmozo-bna-pricing-table-button-wrapper { text-align: ${attributes.buttonAlign}; }` : '' );

	normalcss.push(
		`.wpmozo-bna-button{
				${attributes.buttonTextColor ? `color: ${attributes.buttonTextColor};` : ''}
				${attributes.buttonTextBackground ? `background-color: ${attributes.buttonTextBackground};` : ''}
				${attributes.borderSelection ? `border-style: ${attributes.borderSelection};` : ''}
				${attributes.borderWidth ? `border-width: ${attributes.borderWidth};` : ''}
				${attributes.borderRadius ? `border-radius: ${attributes.borderRadius};` : ''}
				${attributes.borderColor ? `border-color: ${attributes.borderColor};` : ''}
				${convertedStyle.borderDimensions || ''}
				transition: all 300ms;
		  }`
	);

	hovercss.push(
		( attributes.buttonTextHoverColor ||
		attributes.buttonTextHoverBackground ||
		attributes.borderSelectionHover ||
		attributes.borderWidthHover ||
		attributes.borderRadiusHover ||
		attributes.borderHoverColor )
		? `.wpmozo-bna-button:hover${isEditor('.wpmozo-bna-button')}{
				${attributes.buttonTextHoverColor ? `color: ${attributes.buttonTextHoverColor};` : ''}
				${attributes.buttonTextHoverBackground ? `background-color: ${attributes.buttonTextHoverBackground};` : ''}
				${attributes.borderSelectionHover ? `border-style: ${attributes.borderSelectionHover};` : ''}
				${attributes.borderWidthHover ? `border-width: ${attributes.borderWidthHover};` : ''}
				${attributes.borderRadiusHover ? `border-radius: ${attributes.borderRadiusHover};` : ''}
				${attributes.borderHoverColor ? `border-color: ${attributes.borderHoverColor};` : ''}
		  }`
		: ''
	);

	normalcss.push(
		( attributes.iconTextColor || attributes.iconTextBackground )
		? `.wpmozo-bna-button-icon{
				${attributes.iconTextColor ? `color: ${attributes.iconTextColor};` : ''}
				${attributes.iconTextBackground ? `background-color: ${attributes.iconTextBackground};` : ''}
		  }`
		: ''
	);

	normalcss.push( attributes.buttonFontSize ? `.wpmozo-bna-pricing-table-button-wrapper .wpmozo-bna-button{ font-size: ${attributes.buttonFontSize}px; }` : '' );

	normalcss.push( attributes.featuresIconFontSize ? `.wpmozo-bna-pricing-table-feature-icon{ font-size: ${attributes.featuresIconFontSize}px; }` : '' );

	normalcss.push( attributes.featuresSpacing ? `.wpmozo-bna-pricing-table-features-list{ padding: ${attributes.featuresSpacing}px 0; }` : '' );

	normalcss.push( attributes.featuresMargin ? `.wpmozo-bna-pricing-table-features div{ margin: ${attributes.featuresMargin}px 0; }` : '' );

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