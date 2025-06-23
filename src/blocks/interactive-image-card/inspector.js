// inspector.js
import {
	WpmozoBorder,
	WpmozoAlignment,
	WpmozoColorPicker,
	WpmozoTypography,
	WpmozoMediaUploader
} from '../../common/components/index';
import {__} from "@wordpress/i18n";
import {InspectorControls} from "@wordpress/block-editor";
import {useState} from "@wordpress/element";
import {
	PanelBody,
	TextControl,
	TextareaControl,
	SelectControl,
	RangeControl,
	BaseControl,
	ButtonGroup,
	Button,
} from "@wordpress/components";

const Inspector = ({attributes, setAttributes}) => {

	let props = {attributes, setAttributes};
	props = Object.assign({}, props, {preAttributes: {}});
	const	allLayouts = [
			{
				value: 'lily',
				label: __('Lily', 'wpmozo-blocks-and-addons'),
			},
			{
				value: 'sadie',
				label: __('Sadie', 'wpmozo-blocks-and-addons'),
			},
			{
				value: 'roxy',
				label: __('Roxy', 'wpmozo-blocks-and-addons'),
			},
			{
				value: 'bubba',
				label: __('Bubba', 'wpmozo-blocks-and-addons'),
			},
			{
				value: 'romeo',
				label: __('Romeo', 'wpmozo-blocks-and-addons'),
			},
			{
				value: 'layla',
				label: __('Layla', 'wpmozo-blocks-and-addons'),
			},
			{
				value: 'oscar',
				label: __('Oscar', 'wpmozo-blocks-and-addons'),
			},
			{
				value: 'marley',
				label: __('Marley', 'wpmozo-blocks-and-addons'),
			},
			{
				value: 'ruby',
				label: __('Ruby', 'wpmozo-blocks-and-addons'),
			},
			{
				value: 'milo',
				label: __('Milo', 'wpmozo-blocks-and-addons'),
			},
		],
		headingLevels = [
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

	const [titleStyleType, setTitleStyleType] = useState('normal');

	return (
		<>
			<InspectorControls key="controls">
				<PanelBody title={__('Content', 'wpmozo-blocks-and-addons')} initialOpen={false}>
					<TextControl
						label={__('Title', 'wpmozo-blocks-and-addons')}
						value={attributes.title}
						onChange={(newValue) => setAttributes({title: newValue})}
					/>
					<TextareaControl
						label={__('Content', 'wpmozo-blocks-and-addons')}
						onChange={(newValue) => setAttributes({content: newValue})}
						value={attributes.content}
					/>
				</PanelBody>
				<PanelBody title={__('Image', 'wpmozo-blocks-and-addons')} initialOpen={false}>
					<WpmozoMediaUploader
						attrKye="backImage"
						props={props}
					/>
				</PanelBody>
			</InspectorControls>
			<InspectorControls key="styles" group="styles">
				<PanelBody title={__('Layout', 'wpmozo-blocks-and-addons')} initialOpen={false}>
					<SelectControl
						label={__('Select Layout', 'wpmozo-blocks-and-addons')}
						value={attributes.layout}
						options={allLayouts}
						onChange={(newValue) => setAttributes({layout: newValue})}
					/>
				</PanelBody>
				<PanelBody title={__('Layout Settings', 'wpmozo-blocks-and-addons')} className="wpmozo-typography-panel"
						   initialOpen={false}>
					{'romeo' !== attributes.layout && 'marley' !== attributes.layout &&
						<WpmozoColorPicker
							ColorKey="overlay"
							props={props}
							ColorTypes={[
								{
									key: 'Color',
									label: __('Overlay Color', 'wpmozo-blocks-and-addons'),
								},
							]}
						/>
					}
					{'lily' !== attributes.layout && 'sadie' !== attributes.layout &&
						<WpmozoBorder
							BorderKey="layout"
							props={props}
							BorderTypes={{border: true}}
						/>
					}
					<RangeControl
						label={__('Image Opacity', 'wpmozo-blocks-and-addons')}
						value={attributes.imageOpacity}
						onChange={(newValue) => setAttributes({imageOpacity: newValue})}
						min={0}
						step={0.1}
						max={1}
					/>
				</PanelBody>
				<PanelBody title={__('Title', 'wpmozo-blocks-and-addons')} className="wpmozo-typography-panel"
						   initialOpen={false}>
					<BaseControl
						label={__('Title Heading Level', 'wpmozo-blocks-and-addons')}
					>
						<ButtonGroup>
							{headingLevels.map((item, key) => (
								<Button
									key={'title-level-' + item.value}
									isPressed={(item.value === attributes.titleLevel) ? true : false}
									onClick={(newValue) => setAttributes({titleLevel: item.value})}
								>
									{item.label}
								</Button>
							))}
						</ButtonGroup>
					</BaseControl>
					<BaseControl
						className="wpmozo-button-tabs-wrap"
					>
						<ButtonGroup>
							<Button
								className="wpmozo-button-tabs-btn"
								isPressed={('normal' === titleStyleType) ? true : false}
								onClick={() => setTitleStyleType('normal')}
							>
								{__('Normal', 'wpmozo-blocks-and-addons')}
							</Button>
							<Button
								className="wpmozo-button-tabs-btn"
								isPressed={('hover' === titleStyleType) ? true : false}
								onClick={() => setTitleStyleType('hover')}
							>
								{__('Hover', 'wpmozo-blocks-and-addons')}
							</Button>
						</ButtonGroup>
						{'normal' === titleStyleType &&
							<>
								<WpmozoColorPicker
									ColorKey="titleNormal"
									props={props}
									ColorTypes={[
										{
											key: 'Color',
											label: __('Title Color', 'wpmozo-blocks-and-addons'),
										},
									]}
								/>
								<WpmozoTypography
									TypographyKey="titleNormal"
									props={props}
								/>
							</>
						}
						{'hover' === titleStyleType &&
							<>
								<WpmozoColorPicker
									ColorKey="titleHover"
									props={props}
									ColorTypes={[
										{
											key: 'Color',
											label: __('Title Color', 'wpmozo-blocks-and-addons'),
										},
									]}
								/>
								<WpmozoTypography
									TypographyKey="titleHover"
									props={props}
								/>
							</>
						}
					</BaseControl>
					{'milo' !== attributes.layout &&
						<WpmozoAlignment
							label={__('Title Alignment', 'wpmozo-blocks-and-addons')}
							onChange={(newValue) => setAttributes({titleAlign: newValue})}
							value={attributes.titleAlign}
						/>
					}
				</PanelBody>
				<PanelBody title={__('Content', 'wpmozo-blocks-and-addons')} className="wpmozo-typography-panel"
						   initialOpen={false}>
					<WpmozoColorPicker
						ColorKey="content"
						props={props}
						ColorTypes={[
							{
								key: 'Color',
								label: __('Text Color', 'wpmozo-blocks-and-addons'),
							},
						]}
					/>
					{'milo' !== attributes.layout &&
						<WpmozoAlignment
							label={__('Content Alignment', 'wpmozo-blocks-and-addons')}
							onChange={(newValue) => setAttributes({contentAlign: newValue})}
							value={attributes.contentAlign}
						/>
					}
					<WpmozoTypography
						TypographyKey="content"
						props={props}
					/>
				</PanelBody>
			</InspectorControls>
		</>
	);
};

export default Inspector;
