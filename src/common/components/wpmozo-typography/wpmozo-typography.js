import {
	__experimentalFontAppearanceControl,
	FontSizePicker,
	__experimentalLetterSpacingControl,
	__experimentalTextTransformControl,
	__experimentalTextDecorationControl,
	LineHeightControl,
	__experimentalFontFamilyControl
} from '@wordpress/block-editor';

import {
	__experimentalToolsPanel,
	__experimentalToolsPanelItem
} from '@wordpress/components';

import { __ } from '@wordpress/i18n';
import { compose } from '@wordpress/compose';
import { Fragment } from '@wordpress/element';
import './style.scss';
import {wpmozo_is_empty} from '../../utils.js';
import { useSelect } from '@wordpress/data';

const WpmozoTypography = (args) => {

	const fontFamilies = useSelect((select) => {
		const settings = select('core/block-editor').getSettings();
		return settings?.__experimentalFeatures?.typography?.fontFamilies?.theme || [];
	}, []);
	const { TypographyKey, props } = args;
	const preAttributes = props.preAttributes;
	const label = args.label || __('Typography', 'wpmozo-blocks-and-addons');
	let TypoTypes = args.TypoTypes || null;

	const setValue = (styleType, value) => {
		if (
			value === null &&
			typeof preAttributes[TypographyKey + styleType] !== 'undefined' &&
			preAttributes[TypographyKey + styleType].hasOwnProperty('default')
		) {
			value = preAttributes[TypographyKey + styleType].default;
		}
		return value !== null ? value : '';
	};

	const typoSetValue = (styleType, value = null) => {
		var val = setValue(styleType, value);

		if ( 'Decoration' === styleType && wpmozo_is_empty( value ) ) {
			val = 'none';
		}
		if ( 'LetterCase' === styleType && wpmozo_is_empty( value ) ) {
			val = 'none';
		}

		props.setAttributes( { [TypographyKey + styleType]: val } );
		if ( args.afterOnChange ) {
			args.afterOnChange(props);
		}
	};

	const onChange = args.onChange || typoSetValue;

	// Font Appearance default value building
	let _FontAppearanceValues = {};
	let hasFontStyles = true;
	let hasFontWeights = true;

	if (!TypoTypes || TypoTypes.hasOwnProperty('FontAppearance')) {
		if (args.FontAppearance) {
			hasFontStyles = args.FontAppearance.hasFontStyles !== false;
			hasFontWeights = args.FontAppearance.hasFontWeights !== false;
		}

		if (hasFontStyles) {
			_FontAppearanceValues.fontStyle =
				props.attributes[TypographyKey + 'FontAppearance']?.fontStyle;
		}
		if (hasFontWeights) {
			_FontAppearanceValues.fontWeight =
				props.attributes[TypographyKey + 'FontAppearance']?.fontWeight;
		}
	}

	return (
		<__experimentalToolsPanel
			key={`wpmozo-typography-panel-${TypographyKey}`}
			label={label}
			resetAll={() => {
				if (TypoTypes === null) {
					TypoTypes = {
						Font: '',
						FontSize: '',
						LetterSpacing: '',
						Decoration: '',
						FontAppearance: {
							fontStyle: '',
							fontWeight: ''
						},
						LetterCase: '',
						LineHeight: ''
					};
				}
				for (const type in TypoTypes) {
					const resetValue = setValue(type, null);
					props.setAttributes({ [TypographyKey + type]: resetValue });
				}
				if (args.afterOnChange) {
					args.afterOnChange(props);
				}
			}}
		>
			{(!TypoTypes || TypoTypes.Font !== undefined) && (
				<__experimentalFontFamilyControl
					fontFamilies={fontFamilies}
					onChange={(val) => onChange('Font', val)}
					value={props.attributes[TypographyKey + 'Font']}
				/>
			)}
			
			{(!TypoTypes || TypoTypes.FontSize !== undefined) && (
				<__experimentalToolsPanelItem
					label={__('Font Size', 'wpmozo-blocks-and-addons')}
					hasValue={() => true}
					isShownByDefault
					onDeselect={() => typoSetValue('FontSize')}
				>
					<FontSizePicker
						value={props.attributes[TypographyKey + 'FontSize']}
						onChange={(val) => onChange('FontSize', val)}
						__nextHasNoMarginBottom
						__next40pxDefaultSize
					/>
				</__experimentalToolsPanelItem>
			)}

			{(!TypoTypes || TypoTypes.FontAppearance !== undefined) && (
				<__experimentalToolsPanelItem
					className="single-column"
					label={__('Appearance', 'wpmozo-blocks-and-addons')}
					hasValue={() => true}
					isShownByDefault
					onDeselect={() => typoSetValue('FontAppearance')}
				>
					<__experimentalFontAppearanceControl
						key="wpmozo-titleapp"
						hasFontStyles={hasFontStyles}
						hasFontWeights={hasFontWeights}
						value={_FontAppearanceValues}
						onChange={(val) => onChange('FontAppearance', val)}
						__next40pxDefaultSize
					/>
				</__experimentalToolsPanelItem>
			)}

			{(!TypoTypes || TypoTypes.LetterSpacing !== undefined) && (
				<__experimentalToolsPanelItem
					className="single-column"
					label={__('Letter spacing', 'wpmozo-blocks-and-addons')}
					hasValue={() => true}
					isShownByDefault
					onDeselect={() => typoSetValue('LetterSpacing')}
				>
					<__experimentalLetterSpacingControl
						value={props.attributes[TypographyKey + 'LetterSpacing']}
						onChange={(val) => onChange('LetterSpacing', val)}
						__next40pxDefaultSize
					/>
				</__experimentalToolsPanelItem>
			)}

			{(!TypoTypes || TypoTypes.Decoration !== undefined) && (
				<__experimentalToolsPanelItem
					label={__('Decoration', 'wpmozo-blocks-and-addons')}
					hasValue={() => true}
					isShownByDefault
					onDeselect={() => typoSetValue('Decoration')}
				>
					<__experimentalTextDecorationControl
						value={props.attributes[TypographyKey + 'Decoration']}
						onChange={(val) => onChange('Decoration', val)}
					/>
				</__experimentalToolsPanelItem>
			)}

			{(!TypoTypes || TypoTypes.LetterCase !== undefined) && (
				<__experimentalToolsPanelItem
					label={__('Letter case', 'wpmozo-blocks-and-addons')}
					hasValue={() => true}
					isShownByDefault
					onDeselect={() => typoSetValue('LetterCase')}
				>
					<__experimentalTextTransformControl
						value={props.attributes[TypographyKey + 'LetterCase']}
						onChange={(val) => onChange('LetterCase', val)}
					/>
				</__experimentalToolsPanelItem>
			)}

			{(!TypoTypes || TypoTypes.LineHeight !== undefined) && (
				<__experimentalToolsPanelItem
					className="single-column"
					label={__('Line Height', 'wpmozo-blocks-and-addons')}
					hasValue={() => true}
					isShownByDefault
					onDeselect={() => typoSetValue('LineHeight')}
				>
					<LineHeightControl
						value={props.attributes[TypographyKey + 'LineHeight']}
						onChange={(val) => onChange('LineHeight', val)}
						__nextHasNoMarginBottom
						__next40pxDefaultSize
					/>
				</__experimentalToolsPanelItem>
			)}
		</__experimentalToolsPanel>
	);
};

export default WpmozoTypography;
