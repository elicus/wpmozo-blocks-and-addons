// src/utils.js
import {__} from '@wordpress/i18n';

export function wpmozo_is_empty(value) {
	return (
		value === '' ||
		typeof value === 'undefined' ||
		value === null ||
		value === false ||
		(typeof value === 'object' && !Array.isArray(value) && Object.keys(value).length === 0) ||
		(Array.isArray(value) && value.length === 0)
	);
}

export function wpmozo_parse_style(property, style) {
	return !wpmozo_is_empty(style) ? `${property}: ${style};` : '';
}

export function wpmozo_get_styleAtts(attributes, stylesKeys) {
	const stylesTypes = {
		FontSize: '',
		FontAppearance: {fontStyle: '', fontWeight: ''},
		LetterSpacing: '',
		Decoration: '',
		LetterCase: '',
		LineHeight: '',
		text: '',
		background: '',
		borderRadius: '',
		border: [],
		padding: '',
		margin: '',
		position: '',
		width: '',
		height: '',
	};

	let StyleAtts = {};
	for (const styleType in stylesTypes) {
		if (attributes.hasOwnProperty(stylesKeys + styleType)) {
			StyleAtts[styleType] = attributes[stylesKeys + styleType];
		}
	}
	return StyleAtts;
}

export function convertVarStyle(options = {}) {
	const spacing = {...options};
	for (const type in spacing) {
		const value = spacing[type];
		if (typeof value !== 'undefined' && value !== '' && value.startsWith('var:')) {
			spacing[type] = value.replace('var:', 'var(--wp--').replace(/\|/g, '--') + ')';
		}
	}
	return spacing;
}

export function convertInlineStyle(options = {}, atts = {}) {
	let style = '';

	const append = (prop, value) => {
		if (typeof value !== 'undefined' && value !== '') style += `${prop}: ${value};`;
	};

	append('font-size', options.FontSize);
	append('letter-spacing', options.LetterSpacing);
	append('text-decoration', options.Decoration);
	append('text-transform', options.LetterCase);
	append('line-height', options.LineHeight);
	append('color', options.text);
	append('background', options.background);
	append('width', options.width);
	append('height', options.height);

	if (options.FontAppearance) {
		append('font-style', options.FontAppearance.fontStyle);
		append('font-weight', options.FontAppearance.fontWeight);
	}

	if (options.border) {
		if (options.border.width) {
			let str = options.border.width;
			str += ` ${options.border.style || 'solid'}`;
			if (options.border.color) str += ` ${options.border.color}`;
			append('border', str);
		}

		if (options.border.top || options.border.bottom || options.border.left || options.border.right) {
			for (const border in options.border) {
				for (const item in options.border[border]) {
					append(`border-${border}-${item}`, options.border[border][item]);
				}
				if (!options.border[border].hasOwnProperty('style')) {
					append(`border-${border}-style`, 'solid');
				}
			}
		}
	}

	if (options.borderRadius) {
		append('border-top-left-radius', options.borderRadius.topLeft);
		append('border-top-right-radius', options.borderRadius.topRight);
		append('border-bottom-left-radius', options.borderRadius.bottomLeft);
		append('border-bottom-right-radius', options.borderRadius.bottomRight);

		if (typeof options.borderRadius.topLeft === 'undefined') {
			append('border-radius', options.borderRadius);
		}
	}

	const handleSpacing = (prop, obj) => {
		const spacing = convertVarStyle(obj);
		for (const key in obj) {
			if (spacing[key]) append(`${prop}-${key}`, spacing[key]);
		}
	};

	if (options.padding) handleSpacing('padding', options.padding);
	if (options.margin) handleSpacing('margin', options.margin);

	if (options.position) {
		const spacing = convertVarStyle(options.position);
		for (const pos in options.position) {
			if (spacing[pos]) append(pos, spacing[pos]);
		}
		if (spacing.top && !spacing.bottom) append('bottom', 'auto');
		if (spacing.bottom && !spacing.top) append('top', 'auto');
		if (spacing.right && !spacing.left) append('left', 'auto');
		if (spacing.left && !spacing.right) append('right', 'auto');
		append('position', 'absolute');
	}

	return style;
}

export function convertInlineStyleStr(options, attributes) {
	const styleStr = {};
	options.forEach(opt => {
		const styleAttr = wpmozo_get_styleAtts(attributes, opt);
		styleStr[opt] = convertInlineStyle(styleAttr, attributes);
	});
	return styleStr;
}

export function wpmozo_generate_style(styles) {
	return styles.map(({style: styleObject, selector, additional = ''}) => {
		let singleStyle = '';
		for (const styleProp in styleObject) {
			const styleValue = styleObject[styleProp];
			let style = '';

			if (typeof styleValue === 'object' && styleValue.value !== undefined) {
				style = wpmozo_is_empty(styleValue.value)
					? ''
					: `${styleProp}: ${styleValue.prefix || ''}${styleValue.value}${styleValue.suffix || ''};`;
			} else {
				style = wpmozo_parse_style(styleProp, styleValue);
			}

			if (!wpmozo_is_empty(style)) singleStyle += style;
		}
		return !wpmozo_is_empty(singleStyle)
			? `${selector}{${singleStyle}${additional}}`
			: '';
	}).join('');
}

export function extractCssByClass() {
	let extractedCSS = '';
	const editorIfram = jQuery('body').find('[name="editor-canvas"]').contents();
	const styleEl = editorIfram.length > 0
		? jQuery(editorIfram).find('.wpmozo-dynamic-style')
		: jQuery('.wpmozo-dynamic-style');

	styleEl.each((key, el) => {
		const css = jQuery(el).html(),
			ID = jQuery(el).data('id'),
			clientId = jQuery(el).data('client-id'),
			minifiedCss = minifyCSS(css),
			regExp = new RegExp(`block-${clientId}`, "gi");

		extractedCSS += minifiedCss.replace(regExp, `block-${ID}`);
	});

	return extractedCSS;
}

export function minifyCSS(css) {
	return css
		.replace(/\/\*[\s\S]*?\*\//g, '')
		.replace(/url\(\s*(['"]?)(.*?)\1\s*\)/g, 'url($1$2$1)')
		.replace(/\s+/g, ' ')
		.replace(/\s*({|}|;|:|,)\s*/g, '$1')
		.replace(/;}+/g, '}')
		.trim();
}

export function getIdByClientid(clientId) {
	if (wpmozo_is_empty(clientId)) return '';
	const clientIdArr = clientId.split('-');
	return clientIdArr[4] || '';
}

export function getMainEl(clientId) {
	const editorIfram = jQuery('body').find('[name="editor-canvas"]').contents();
	const mainFromIfram = editorIfram.find('body').find(`#block-${clientId}`);
	const mainFromBody = jQuery('body').find(`#block-${clientId}`);
	return mainFromIfram.length > 0 ? mainFromIfram : mainFromBody;
}

export function WpmozoGetImageSizeAttributes(image, size) {
	const url = get(image, ['media_details', 'sizes', size, 'source_url']);

	if (url) {
		return {height: undefined, sizeSlug: size, url, width: undefined};
	}

	return {};
}

export const headingLevelsList = [
	{
		label: __('H1', 'wpmozo-blocks-and-addons'),
		value: 'h1'
	},
	{
		label: __('H2', 'wpmozo-blocks-and-addons'),
		value: 'h2'
	},
	{
		label: __('H3', 'wpmozo-blocks-and-addons'),
		value: 'h3'
	},
	{
		label: __('H4', 'wpmozo-blocks-and-addons'),
		value: 'h4'
	},
	{
		label: __('H5', 'wpmozo-blocks-and-addons'),
		value: 'h5'
	},
	{
		label: __('H6', 'wpmozo-blocks-and-addons'),
		value: 'h6'
	}
];

export const inspectorPanelTabs = ({showGeneral = true, showDesign = true, showAdvanced = true} = {}) => {
	const tabs = [];

	if (showGeneral) {
		tabs.push({
			name: 'general',
			title: __('General', 'wpmozo-blocks-and-addons'),
			className: 'wpmozo-inspector-tab-general',
		});
	}

	if (showDesign) {
		tabs.push({
			name: 'design',
			title: __('Design', 'wpmozo-blocks-and-addons'),
			className: 'wpmozo-inspector-tab-design',
		});
	}

	if (showAdvanced) {
		tabs.push({
			name: 'advanced',
			title: __('Advanced', 'wpmozo-blocks-and-addons'),
			className: 'wpmozo-inspector-tab-advanced',
		});
	}

	return tabs;
};

// Export only selected functions for Pro plugin
if ( typeof window !== 'undefined' ) {
	window.WPMozoBNAUtils = window.WPMozoBNAUtils || {};
	Object.assign( window.WPMozoBNAUtils, {
		inspectorPanelTabs,
		convertInlineStyleStr,
		// Add more functions here if needed.
	} );
}
