// inspector.js
import {
	WpmozoColorCombo,
	WpmozoAlignment,
	WpmozoDimensions,
	WpmozoColorPicker,
	WpmozoTypography
} from '../../common/components/index';
import {__} from "@wordpress/i18n";
import {InspectorControls} from "@wordpress/block-editor";
import {
	PanelBody,
	ToggleControl,
	TextControl,
	BaseControl,
	ButtonGroup,
	Button
} from "@wordpress/components";

const Inspector = ({attributes, setAttributes}) => {

	let props = {attributes, setAttributes};
	props = Object.assign({}, props, {preAttributes: {}});

	const headingLevels = [
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

	return (
		<>
			<InspectorControls key="controls">
				<PanelBody title={__('Heading Content', 'wpmozo-blocks-and-addons')} initialOpen={false}>
					<TextControl
						label={__('Pre Heading', 'wpmozo-blocks-and-addons')}
						value={attributes.preHeading}
						onChange={(newValue) => setAttributes({preHeading: newValue})}
					/>
					<TextControl
						label={__('Main Heading', 'wpmozo-blocks-and-addons')}
						value={attributes.mainHeading}
						onChange={(newValue) => setAttributes({mainHeading: newValue})}
					/>
					<TextControl
						label={__('Post Heading', 'wpmozo-blocks-and-addons')}
						value={attributes.postHeading}
						onChange={(newValue) => setAttributes({postHeading: newValue})}
					/>
					<ToggleControl
						label={__('Display In Stack', 'wpmozo-blocks-and-addons')}
						checked={attributes.displayInStack}
						onChange={(newValue) => setAttributes({displayInStack: newValue})}
					/>
				</PanelBody>
			</InspectorControls>
			<InspectorControls key="styles" group="styles">
				<PanelBody title={__('Global Text Settings', 'wpmozo-blocks-and-addons')}
						   className="wpmozo-typography-panel" initialOpen={false}>
					<WpmozoColorPicker
						ColorKey="heading"
						props={props}
						ColorTypes={[
							{
								key: 'Color',
								label: __('Color', 'wpmozo-blocks-and-addons'),
							},
							{
								key: 'Background',
								label: __('Background', 'wpmozo-blocks-and-addons'),
							},
						]}
					/>
					<WpmozoAlignment
						label={__('Heading Alignment', 'wpmozo-blocks-and-addons')}
						onChange={(newValue) => setAttributes({headingAlignment: newValue})}
						value={attributes.headingAlignment}
					/>
					<BaseControl
						label={__('Heading Level', 'wpmozo-blocks-and-addons')}
					>
						<ButtonGroup>
							{headingLevels.map((item, key) => (
								<Button
									key={item.value}
									isPressed={(item.value === attributes.headingLevel) ? true : false}
									onClick={(newValue) => setAttributes({headingLevel: item.value})}
								>
									{item.label}
								</Button>
							))}
						</ButtonGroup>
					</BaseControl>
				</PanelBody>
				<PanelBody title={__('Pre Text Settings', 'wpmozo-blocks-and-addons')}
						   className="wpmozo-typography-panel" initialOpen={false}>
					<WpmozoColorCombo
						label={__('Pre Text Color', 'wpmozo-blocks-and-addons')}
						normal={{
							ColorKey: "preText",
							props: props,
							ColorTypes: [
								{
									key: 'Color',
									label: __('Color', 'wpmozo-blocks-and-addons'),
								},
								{
									key: 'Background',
									label: __('Background', 'wpmozo-blocks-and-addons'),
								},
							]
						}}
						hover={{
							ColorKey: "preTextHover",
							props: props,
							ColorTypes: [
								{
									key: 'Color',
									label: __('Color', 'wpmozo-blocks-and-addons'),
								},
								{
									key: 'Background',
									label: __('Background', 'wpmozo-blocks-and-addons'),
								},
							]
						}}
					/>
					{attributes.displayInStack && (
						<WpmozoAlignment
							label={__('Pre Text Alignment', 'wpmozo-blocks-and-addons')}
							onChange={(newValue) => setAttributes({preTextAlignment: newValue})}
							value={attributes.preTextAlignment}
						/>
					)}
					<WpmozoTypography
						TypographyKey="preText"
						props={props}
					/>
					<WpmozoDimensions
						DimensionKey='preTextDimensions'
						DimensionsTypes={{
							padding: true,
							margin: true,
						}}
						props={props}
					/>
				</PanelBody>
				<PanelBody title={__('Main Text Settings', 'wpmozo-blocks-and-addons')}
						   className="wpmozo-typography-panel" initialOpen={false}>
					<WpmozoColorCombo
						label={__('Main Text Color', 'wpmozo-blocks-and-addons')}
						normal={{
							ColorKey: "mainText",
							props: props,
							ColorTypes: [
								{
									key: 'Color',
									label: __('Color', 'wpmozo-blocks-and-addons'),
								},
								{
									key: 'Background',
									label: __('Background', 'wpmozo-blocks-and-addons'),
								},
							]
						}}
						hover={{
							ColorKey: "mainTextHover",
							props: props,
							ColorTypes: [
								{
									key: 'Color',
									label: __('Color', 'wpmozo-blocks-and-addons'),
								},
								{
									key: 'Background',
									label: __('Background', 'wpmozo-blocks-and-addons'),
								},
							]
						}}
					/>
					{attributes.displayInStack && (
						<WpmozoAlignment
							label={__('Main Text Alignment', 'wpmozo-blocks-and-addons')}
							onChange={(newValue) => setAttributes({mainTextAlignment: newValue})}
							value={attributes.mainTextAlignment}
						/>
					)}
					<WpmozoTypography
						TypographyKey="mainText"
						props={props}
					/>
					<WpmozoDimensions
						DimensionKey='mainTextDimensions'
						DimensionsTypes={{
							padding: true,
							margin: true,
						}}
						props={props}
					/>
				</PanelBody>
				<PanelBody title={__('Post Text Settings', 'wpmozo-blocks-and-addons')}
						   className="wpmozo-typography-panel" initialOpen={false}>
					<WpmozoColorCombo
						label={__('Post Text Color', 'wpmozo-blocks-and-addons')}
						normal={{
							ColorKey: "postText",
							props: props,
							ColorTypes: [
								{
									key: 'Color',
									label: __('Color', 'wpmozo-blocks-and-addons'),
								},
								{
									key: 'Background',
									label: __('Background', 'wpmozo-blocks-and-addons'),
								},
							]
						}}
						hover={{
							ColorKey: "postTextHover",
							props: props,
							ColorTypes: [
								{
									key: 'Color',
									label: __('Color', 'wpmozo-blocks-and-addons'),
								},
								{
									key: 'Background',
									label: __('Background', 'wpmozo-blocks-and-addons'),
								},
							]
						}}
					/>
					{attributes.displayInStack && (
						<WpmozoAlignment
							label={__('Post Text Alignment', 'wpmozo-blocks-and-addons')}
							onChange={(newValue) => setAttributes({postTextAlignment: newValue})}
							value={attributes.postTextAlignment}
						/>
					)}
					<WpmozoTypography
						TypographyKey="postText"
						props={props}
					/>
					<WpmozoDimensions
						DimensionKey='postTextDimensions'
						DimensionsTypes={{
							padding: true,
							margin: true,
						}}
						props={props}
					/>
				</PanelBody>
			</InspectorControls>
		</>
	);
};

export default Inspector;
