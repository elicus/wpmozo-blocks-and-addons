import { __ } from '@wordpress/i18n';
import {
	WpmozoAlignment,
	WpmozoTypography,
	WpmozoColorPicker,
	WpmozoDimensions
} from '../../../common/components/index.js';
import {
	Button,
	PanelBody,
	BaseControl,
	ButtonGroup,
	RangeControl,
	ToggleControl
} from '@wordpress/components';


export const DesignPanel = ( { attributes, setAttributes } ) => {
	const props = { attributes, setAttributes, preAttributes: {} };

	return ( <>
		{/* Highlighter. */}
		<PanelBody title={ __( 'Highlighter Shape Settings', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={true}>
			<WpmozoColorPicker
				ColorKey="highlighter"
				label="Highlighter Color"
				props={props}
				ColorTypes={[
					{
						key: 'Color',
						label: __('Highlighter Color', 'wpmozo-blocks-and-addons'),
					}
				]}
			/>
			<RangeControl
				label={__('Stock Width', 'wpmozo-blocks-and-addons')}
				value={attributes.stockWidth}
				onChange={(newValue) => setAttributes({stockWidth: newValue})}
				min={0}
				step={0.1}
				max={10}
				allowReset={true}
			/>
			<RangeControl
				label={__('Stock Paint Animation Delay', 'wpmozo-blocks-and-addons')}
				value={attributes.stockPaintAnimationDelay}
				onChange={(newValue) => setAttributes({stockPaintAnimationDelay: newValue})}
				min={0}
				step={0.1}
				max={10}
				allowReset={true}
			/>
			<ToggleControl
				label={__('Custom Position For Highlighter', 'wpmozo-blocks-and-addons')}
				checked={attributes.customPositionForHighlighter}
				onChange={(newValue) => setAttributes({customPositionForHighlighter: newValue})}
			/>
			{attributes.customPositionForHighlighter && (
				<>

					<RangeControl
						label={__('Vertical', 'wpmozo-blocks-and-addons')}
						value={attributes.customVerticalPosition}
						onChange={(newValue) => setAttributes({customVerticalPosition: newValue})}
						min={-1000}
						step={1}
						max={1000}
						allowReset={true}
					/>
					<RangeControl
						label={__('Horizontal', 'wpmozo-blocks-and-addons')}
						value={attributes.customHorizontalPosition}
						onChange={(newValue) => setAttributes({customHorizontalPosition: newValue})}
						min={-1000}
						step={1}
						max={1000}
						allowReset={true}
					/>

				</>
			)}
		</PanelBody>
		<PanelBody title={__('Text Settings', 'wpmozo-blocks-and-addons')} className="wpmozo-typography-panel" initialOpen={false}>
			<BaseControl className="wpmozo-button-tabs-wrap">
				<ButtonGroup>
					<Button
						className="wpmozo-button-tabs-btn"
						isPressed={('global' === attributes.typeTextSettings) ? true : false}
						onClick={() => setAttributes({typeTextSettings: 'global'})}
						label={__('Global', 'wpmozo-blocks-and-addons')}
					>
						{__('Global', 'wpmozo-blocks-and-addons')}
					</Button>
					<Button
						className="wpmozo-button-tabs-btn"
						isPressed={('pre' === attributes.typeTextSettings) ? true : false}
						onClick={() => setAttributes({typeTextSettings: 'pre'})}
						label={__('Pre', 'wpmozo-blocks-and-addons')}
					>
						{__('Pre', 'wpmozo-blocks-and-addons')}
					</Button>
					<Button
						className="wpmozo-button-tabs-btn"
						isPressed={('main' === attributes.typeTextSettings) ? true : false}
						onClick={() => setAttributes({typeTextSettings: 'main'})}
						label={__('Main', 'wpmozo-blocks-and-addons')}
					>
						{__('Main', 'wpmozo-blocks-and-addons')}
					</Button>
					<Button
						className="wpmozo-button-tabs-btn"
						isPressed={('post' === attributes.typeTextSettings) ? true : false}
						onClick={() => setAttributes({typeTextSettings: 'post'})}
						label={__('Post', 'wpmozo-blocks-and-addons')}
					>
						{__('Post', 'wpmozo-blocks-and-addons')}
					</Button>
				</ButtonGroup>
			</BaseControl>
			{ 'global' === attributes.typeTextSettings && (
				<>
					<WpmozoColorPicker
						props={props}
					   	ColorKey="globalText"
					   	label={ __( 'Global Text', 'wpmozo-blocks-and-addons' ) }
					   	ColorTypes={ [
							   { key: 'Color', label: __( 'Global Text Color', 'wpmozo-blocks-and-addons' ) }
					   	] }
					/>
					<WpmozoAlignment
						label={ __( 'Global Text Alignment', 'wpmozo-blocks-and-addons' ) }
						onChange={ ( newValue ) => setAttributes( { globalTextAlignment: newValue } ) }
						value={ attributes.globalTextAlignment }
					/>
					<WpmozoTypography
						TypoTypes={{
							'FontSize': true,
							'LetterSpacing': true,
							'FontAppearance': true,
							'LetterCase': true,
							'LineHeight': true,
						}}
						props={props}
						TypographyKey="global"
						label={ __( 'Global Typography', 'wpmozo-blocks-and-addons' ) }
					/>
				</>
			)}
			{ 'pre' === attributes.typeTextSettings && (
				<>
					<WpmozoColorPicker
						ColorKey="preText"
						props={props}
						ColorTypes={[
							{
								key: 'Color',
								label: __( 'Pre Text Color', 'wpmozo-blocks-and-addons' ),
							}
						]}
					/>
					<WpmozoTypography
						TypographyKey="pre"
						label="Pre Typography"
						props={props}
					/>
					<WpmozoDimensions
						props={props}
						label={ __( 'Pre Text Dimensions', 'wpmozo-blocks-and-addons' ) }
						DimensionKey='pre'
						DimensionsTypes={ { padding: true, margin: true } }
					/>
				</>
			)}
			{ 'main' === attributes.typeTextSettings && (
				<>
					<WpmozoColorPicker
						ColorKey="mainText"
						props={props}
						ColorTypes={[
							{
								key: 'Color',
								label: __( 'Main Text Color', 'wpmozo-blocks-and-addons' ),
							}
						]}
					/>
					<WpmozoTypography
						TypographyKey="main"
						label="Main Typography"
						props={props}
					/>
					<WpmozoDimensions
						props={props}
						label={ __( 'Main Text Dimensions', 'wpmozo-blocks-and-addons' ) }
						DimensionKey='main'
						DimensionsTypes={ { padding: true, margin: true } }
					/>
				</>
			)}
			{ 'post' === attributes.typeTextSettings && (
				<>
					<WpmozoColorPicker
						ColorKey="postText"
						props={props}
						ColorTypes={[
							{
								key: 'Color',
								label: __( 'Post Text Color', 'wpmozo-blocks-and-addons' ),
							}
						]}
					/>
					<WpmozoTypography
						TypographyKey="post"
						label="Post Typography"
						props={props}
					/>
					<WpmozoDimensions
						props={props}
						label={ __( 'Post Text Dimensions', 'wpmozo-blocks-and-addons' ) }
						DimensionKey='post'
						DimensionsTypes={ { padding: true, margin: true } }
					/>
				</>
			)}
		</PanelBody>
	</> );
};
