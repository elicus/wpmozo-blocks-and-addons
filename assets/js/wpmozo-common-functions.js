window.wpmozo = {};

window.wpmozo.convetInlineStyle = function( options, atts ){

	let style = '';

	if ( 'undefined' !== typeof options.FontSize && '' !== options.FontSize ) {
		style += 'font-size: ' + options.FontSize + ';';
	}
	if ( 'undefined' !== typeof options.FontAppearance ) {
		if ( 'undefined' !== typeof options.FontAppearance.fontStyle && '' !== options.FontAppearance.fontStyle ) {
			style += 'font-style: ' + options.FontAppearance.fontStyle + ';';
		}
		if ( 'undefined' !== typeof options.FontAppearance.fontWeight && '' !== options.FontAppearance.fontWeight ) {
			style += 'font-weight: ' + options.FontAppearance.fontWeight + ';';
		}
	}
	if ( 'undefined' !== typeof options.LetterSpacing && '' !== options.LetterSpacing ) {
		style += 'letter-spacing: ' + options.LetterSpacing + ';';
	}
	if ( 'undefined' !== typeof options.Decoration && '' !== options.Decoration ) {
		style += 'text-decoration: ' + options.Decoration + ';';
	}
	if ( 'undefined' !== typeof options.LetterCase && '' !== options.LetterCase ) {
		style += 'text-transform: ' + options.LetterCase + ';';
	}
	if ( 'undefined' !== typeof options.LineHeight && '' !== options.LineHeight ) {
		style += 'line-height: ' + options.LineHeight + ';';
	}

	if ( 'undefined' !== typeof options.text && '' !== options.text ) {
		style += 'color: ' + options.text + ';';
	}
	if ( 'undefined' !== typeof options.background && '' !== options.background ) {
		style += 'background: ' + options.background + ';';
	}

	if ( 'undefined' !== typeof options.width && '' !== options.width ) {
		style += 'width: ' + options.width + ';';
	}
	if ( 'undefined' !== typeof options.height && '' !== options.height ) {
		style += 'height: ' + options.height + ';';
	}

	if ( 'undefined' !== typeof options.border ) {
		if ( 'undefined' !== typeof options.border.width && '' !== options.border.width ) {
			let str = options.border.width;

			if ( 'undefined' !== typeof options.border.style && '' !== options.border.style ) {
				str += ' ' + options.border.style;
			} else {
				str += ' solid';
			}

			if ( 'undefined' !== typeof options.border.color && '' !== options.border.color ) {
				str += ' ' + options.border.color;
			}
			style += 'border: ' + str + ';';
		}

		if ( 'undefined' !== typeof options.border.top && '' !== options.border.top ) {
			for (const border in options.border) {
				for (const borderItem in options.border[border]) {
					style += 'border-' + border + '-' + borderItem + ': ' + options.border[border][borderItem] + ';';
				}
				if ( ! options.border[border].hasOwnProperty( 'style' ) ) {
					style += 'border-' + border + '-style: solid;';
				}
			}
		}
	}

	if ( 'undefined' !== typeof options.borderRadius && '' !== options.borderRadius ) {
		if ( 'undefined' !== typeof options.borderRadius.topLeft && '' !== options.borderRadius.topLeft ) {
			style += 'border-top-left-radius: ' + options.borderRadius.topLeft + ';';
		}
		if ( 'undefined' !== typeof options.borderRadius.topRight && '' !== options.borderRadius.topRight ) {
			style += 'border-top-right-radius: ' + options.borderRadius.topRight + ';';
		}
		if ( 'undefined' !== typeof options.borderRadius.bottomLeft && '' !== options.borderRadius.bottomLeft ) {
			style += 'border-bottom-left-radius: ' + options.borderRadius.bottomLeft + ';';
		}
		if ( 'undefined' !== typeof options.borderRadius.bottomRight && '' !== options.borderRadius.bottomRight ) {
			style += 'border-bottom-right-radius: ' + options.borderRadius.bottomRight + ';';
		}

		if ( 'undefined' == typeof options.borderRadius.topLeft ) {
			style += 'border-radius: ' + options.borderRadius + ';';
		}
	}

	if ( 'undefined' !== typeof options.padding && '' !== options.padding && (
		'undefined' !== typeof options.padding.top ||
		'undefined' !== typeof options.padding.right ||
		'undefined' !== typeof options.padding.bottom ||
		'undefined' !== typeof options.padding.left ) ) {
		let spacing = window.wpmozo.convetVarStyle( options.padding );
		for (const padding in options.padding) {
			if ( 'undefined' !== typeof spacing[padding] && '' !== spacing[padding] ) {
				style += 'padding-' + padding + ': ' + spacing[padding] + ';';
			}
		}
	}
	if ( 'undefined' !== typeof options.margin && '' !== options.margin && (
		'undefined' !== typeof options.margin.top ||
		'undefined' !== typeof options.margin.right ||
		'undefined' !== typeof options.margin.bottom ||
		'undefined' !== typeof options.margin.left ) ) {
		let spacing = window.wpmozo.convetVarStyle( options.margin );
		for (const margin in options.margin) {
			if ( 'undefined' !== typeof spacing[margin] && '' !== spacing[margin] ) {
				style += 'margin-' + margin + ': ' + spacing[margin] + ';';
			}
		}
	}
	if ( 'undefined' !== typeof options.position && '' !== options.position && (
		'undefined' !== typeof options.position.top ||
		'undefined' !== typeof options.position.right ||
		'undefined' !== typeof options.position.bottom ||
		'undefined' !== typeof options.position.left ) ) {
		let spacing = window.wpmozo.convetVarStyle( options.position );
		for (const position in options.position) {
			if ( 'undefined' !== typeof spacing[position] && '' !== spacing[position] ) {
				style += position + ': ' + spacing[position] + ';';
			}
		}
		if ( 'undefined' !== typeof spacing['top'] && '' !== spacing.top && 'undefined' === typeof spacing['bottom'] ) {
			style += 'bottom: auto;';
		}
		if ( 'undefined' !== typeof spacing['bottom'] && '' !== spacing.bottom && 'undefined' === typeof spacing['top'] ) {
			style += 'top: auto;';
		}
		if ( 'undefined' !== typeof spacing['right'] && '' !== spacing.right && 'undefined' === typeof spacing['left'] ) {
			style += 'left: auto;';
		}
		if ( 'undefined' !== typeof spacing['left'] && '' !== spacing.left && 'undefined' === typeof spacing['right'] ) {
			style += 'right: auto;';
		}
		style += 'position: absolute;';
	}

	return style;

}

window.wpmozo.convetVarStyle = function( options ){

	let spacing = Object.assign( {}, options );

	for (const type in spacing) {
		let value = spacing[type];
		if ( 'undefined' !== typeof value && '' !== value && value.startsWith( "var:" ) ) {
			let str       = value.replace( 'var:', 'var(--wp--' ).replace( /\|/g, '--' ) + ')';
			spacing[type] = str;
		}
	}

	return spacing;

}

window.wpmozo.wpmozo_get_styleAtts = function( attributes, stylesKeys ){

	let StyleAtts = {},
	stylesTypes   = {
		'FontSize' : '',
		'FontAppearance' : {'fontStyle' : '', 'fontWeight' : ''},
		'LetterSpacing' : '',
		'Decoration' : '',
		'LetterCase' : '',
		'LineHeight' : '',
		'text' : '',
		'background' : '',
		'borderRadius' : '',
		'border' : [],
		'padding' : '',
		'margin' : '',
		'position' : '',
		'width' : '',
		'height' : '',
	};

	for (const styleType in stylesTypes) {
		if ( attributes.hasOwnProperty( stylesKeys + styleType ) ) {
			StyleAtts[ styleType ] = attributes[ stylesKeys + styleType ];
		}
	}

	return StyleAtts;
}

window.wpmozo.convetInlineStyleStr = function( options, attributes ){

	let styleStr = {};
	for (var i = 0; i < options.length; i++) {

		let styleAttr = window.wpmozo.wpmozo_get_styleAtts( attributes, options[i] ),
		style         = window.wpmozo.convetInlineStyle( styleAttr, attributes );

		styleStr[ options[i] ] = style;

	}

	return styleStr;
}

window.wpmozo.wpmozo_is_empty = function( value ){
	var is_empty = false;
	if ( '' === value
	|| 'undefined' === typeof value
	|| null === value
	|| false === value
	|| ( 'object' === typeof value && ! Array.isArray( value ) && Object.keys( value ).length === 0 )
	|| ( 'object' === typeof value && Array.isArray( value ) && value.length === 0 ) ) {
		is_empty = true;
	}
	return is_empty;
}

window.wpmozo.wpmozo_parse_style = function( property, style ){

	let styleStr = '';

	if ( ! window.wpmozo.wpmozo_is_empty( style ) ) {
		styleStr = property + ': ' + style + ';';
	}

	return styleStr;
}

window.wpmozo.wpmozo_generate_style = function( styles ){

	let styleStr = '';

	for (var i = 0; i < styles.length; i++) {

		let singleStyle = '',
		styleProps      = styles[i],
		styleObject     = styleProps['style'],
		selector        = styleProps['selector'],
		additional      = styleProps.hasOwnProperty( 'additional' ) ? styleProps['additional'] : '';

		for ( const styleProp in styleObject ) {

			let styleValue   = styleObject[ styleProp ],
			style            = '',
			styleValuePrefix = ( typeof styleValue === 'object' && styleValue.hasOwnProperty( 'prefix' ) )
				? styleValue.prefix
				: '',
			styleValueSuffix = ( typeof styleValue === 'object' && styleValue.hasOwnProperty( 'suffix' ) )
				? styleValue.suffix
				: '';

			if ( typeof styleValue === 'object' && styleValue.hasOwnProperty( 'value' ) ) {
				if ( ! window.wpmozo.wpmozo_is_empty( styleValue.value ) ) {
					style = styleProp + ': ' + styleValuePrefix + styleValue.value + styleValueSuffix + ';';
				}
			} else {
				style = window.wpmozo.wpmozo_parse_style( styleProp, styleValue );
			}

			if ( ! window.wpmozo.wpmozo_is_empty( style ) ) {
				singleStyle += style;
			}

		}

		singleStyle += additional;

		if ( ! window.wpmozo.wpmozo_is_empty( singleStyle ) ) {
			styleStr += `${selector}{${singleStyle}}`;
		}

	}

	return styleStr;
}

window.wpmozo.extractCssByClass = function() {
	
    let extractedCSS = '',
    	editorIfram = jQuery('body').find('[name="editor-canvas"]').contents(),
    	styleEl = ( editorIfram.length > 0 ) 
    		? jQuery(editorIfram).find('.wpmozo-dynamic-style')
    		: jQuery('.wpmozo-dynamic-style');

    jQuery.each(styleEl, function(key, el){

        let css = jQuery(el).html(),
        	ID = jQuery(el).data('id'),
        	clientId = jQuery(el).data('client-id'),
        	minifedCss = window.wpmozo.minifyCSS( css ),
        	$regExp = new RegExp(`block-${clientId}`, "gi");

        minifedCss = minifedCss.replace( $regExp, `block-${ID}` );
        	
        extractedCSS += minifedCss;

    });

    return extractedCSS;
}

window.wpmozo.minifyCSS = function(css) {
    return css
        .replace(/\/\*[\s\S]*?\*\//g, '')
        .replace(/\s+/g, ' ')
        .replace(/\s*({|}|;|:|,)\s*/g, '$1')
        .replace(/;}/g, '}')
        .trim();
}

window.wpmozo.getIdByClientid = function( clientId ){
 
	if( window.wpmozo.wpmozo_is_empty( clientId ) ){
		return '';
	}

	let clientIdArr = clientId.split('-'),
		Id = clientIdArr[4];

	return Id;
}