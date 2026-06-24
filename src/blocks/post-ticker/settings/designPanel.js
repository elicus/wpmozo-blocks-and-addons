import { __ } from '@wordpress/i18n';
import {useState} from "@wordpress/element";
import {
	Button,
	PanelBody,
	RangeControl,
	BaseControl,
	ButtonGroup
} from '@wordpress/components';
import {
	WpmozoBorder,
	WpmozoAlignment,
	WpmozoTypography,
	WpmozoColorPicker, WpmozoDimensions
} from "../../../common/components";
import { headingLevelsList } from '../../../common/utils.js';

export const DesignPanel = ( { attributes, setAttributes, hoverState, setHoverState } ) => {
	const props = { attributes, setAttributes, preAttributes: {} };
	const [btnStyle, setBtnStyleType] = useState('normal');
	const [btnPostItemsStyle, setBtnPostItemsType] = useState('normal');
	const [btnPostItemStyle, setBtnPostItemType] = useState('normal');

	return (
		<>
			<PanelBody title={__('Ticker Label', 'wpmozo-blocks-and-addons')} className="wpmozo-typography-panel" initialOpen={true}>
				<BaseControl className="wpmozo-button-tabs-wrap">
					<ButtonGroup>
						<Button
							className="wpmozo-button-tabs-btn"
							isPressed={('normal' === btnStyle) ? true : false}
							onClick={() => setBtnStyleType('normal')}
						>{__('Normal', 'wpmozo-blocks-and-addons')}</Button>
						<Button
							className="wpmozo-button-tabs-btn"
							isPressed={('hover' === btnStyle) ? true : false}
							onClick={() => setBtnStyleType('hover')}
						>{__('Hover', 'wpmozo-blocks-and-addons')}</Button>
					</ButtonGroup>
					{'normal' === btnStyle && (
						<>
							<WpmozoColorPicker
								props={props}
								ColorKey="tickerLabel"
								ColorTypes={[
									{key: 'Color', label: __('Label Color', 'wpmozo-blocks-and-addons')},
									{key: 'Background', label: __('Label Background', 'wpmozo-blocks-and-addons')}
								]}
							/>
							<WpmozoTypography
								props={props}
								TypographyKey="tickerLabel"
							/>
							<WpmozoBorder
								props={props}
								BorderKey="tickerLabel"
							/>
							<WpmozoDimensions
								props={props}
								DimensionKey='tickerLabel'
								DimensionsTypes={{padding: true,margin: true}}
							/>
						</>
					)}
					{'hover' === btnStyle && (
						<>
							<WpmozoColorPicker
								props={props}
								ColorKey="tickerLabelHover"
								ColorTypes={[
									{key: 'Color', label: __('Label Color', 'wpmozo-blocks-and-addons')},
									{key: 'Background', label: __('Label Background', 'wpmozo-blocks-and-addons')}
								]}
							/>
							<WpmozoTypography
								props={props}
								TypographyKey="tickerLabelHover"
							/>
							<WpmozoBorder
								props={props}
								BorderKey="tickerLabelHover"
							/>
							<WpmozoDimensions
								props={props}
								DimensionKey='tickerLabelHover'
								DimensionsTypes={{padding: true,margin: true}}
							/>
						</>
					)}
				</BaseControl>
			</PanelBody>
			<PanelBody title={__('Post Items Bar', 'wpmozo-blocks-and-addons')} className="wpmozo-typography-panel" initialOpen={false}>
				<BaseControl className="wpmozo-button-tabs-wrap">
					<ButtonGroup>
						<Button
							className="wpmozo-button-tabs-btn"
							isPressed={('normal' === btnPostItemsStyle) ? true : false}
							onClick={() => setBtnPostItemsType('normal')}
						>{__('Normal', 'wpmozo-blocks-and-addons')}</Button>
						<Button
							className="wpmozo-button-tabs-btn"
							isPressed={('hover' === btnPostItemsStyle) ? true : false}
							onClick={() => setBtnPostItemsType('hover')}
						>{__('Hover', 'wpmozo-blocks-and-addons')}</Button>
					</ButtonGroup>
					{'normal' === btnPostItemsStyle && (
						<>
							<WpmozoColorPicker
								props={props}
								ColorKey="postItems"
								ColorTypes={[
									{key: 'Background', label: __('Items Bar Background Color', 'wpmozo-blocks-and-addons')}
								]}
							/>
							<WpmozoBorder
								props={props}
								BorderKey="postItems"
							/>
							<WpmozoDimensions
								props={props}
								DimensionKey='postItems'
								DimensionsTypes={{padding: true,margin: true}}
							/>
						</>
					)}
					{'hover' === btnPostItemsStyle && (
						<>
							<WpmozoColorPicker
								props={props}
								ColorKey="postItemsHover"
								ColorTypes={[
									{key: 'Background', label: __('Items Bar Background Hover Color', 'wpmozo-blocks-and-addons')}
								]}
							/>
							<WpmozoBorder
								props={props}
								BorderKey="postItemsHover"
							/>
							<WpmozoDimensions
								props={props}
								DimensionKey='postItemsHover'
								DimensionsTypes={{padding: true,margin: true}}
							/>
						</>
					)}
				</BaseControl>
			</PanelBody>
			<PanelBody title={__('Post Item','wpmozo-blocks-and-addons')} className="wpmozo-typography-panel" initialOpen={false}>
				<BaseControl className="wpmozo-button-tabs-wrap">
					<ButtonGroup>
						<Button
							className="wpmozo-button-tabs-btn"
							isPressed={('normal' === btnPostItemStyle) ? true : false}
							onClick={() => setBtnPostItemType('normal')}
						>{__('Normal', 'wpmozo-blocks-and-addons')}</Button>
						<Button
							className="wpmozo-button-tabs-btn"
							isPressed={('hover' === btnPostItemStyle) ? true : false}
							onClick={() => setBtnPostItemType('hover')}
						>{__('Hover', 'wpmozo-blocks-and-addons')}</Button>
					</ButtonGroup>
					{'normal' === btnPostItemStyle && (
						<>
							<WpmozoColorPicker
								props={props}
								ColorKey="postItem"
								ColorTypes={[
									{key: 'Color', label: __('Post Item Text Color', 'wpmozo-blocks-and-addons')}
								]}
							/>
							<WpmozoTypography
								props={props}
								TypographyKey="postItem"
							/>
							<WpmozoDimensions
								props={props}
								DimensionKey='postItem'
								DimensionsTypes={{padding: true,margin: true}}
							/>
						</>
					)}
					{'hover' === btnPostItemStyle && (
						<>
							<WpmozoColorPicker
								props={props}
								ColorKey="postItemHover"
								ColorTypes={[
									{key: 'Color', label: __('Post Item Text Hover Color', 'wpmozo-blocks-and-addons')}
								]}
							/>
							<WpmozoTypography
								props={props}
								TypographyKey="postItemHover"
							/>
							<WpmozoDimensions
								props={props}
								DimensionKey='postItemHover'
								DimensionsTypes={{padding: true,margin: true}}
							/>
						</>
					)}
				</BaseControl>
			</PanelBody>
			<PanelBody title={__('Post Item Separator','wpmozo-blocks-and-addons')} className="wpmozo-typography-panel" initialOpen={false}>
				<RangeControl
					label={ __( 'Separator Font Size', 'wpmozo-blocks-and-addons' ) }
					value={ attributes.separatorFontSize }
					onChange={ ( newValue ) => setAttributes( { separatorFontSize: newValue } ) }
					min={0} max={100} step={1}
				/>
				<WpmozoColorPicker
					props={props}
					ColorKey="postSeparator"
					ColorTypes={[
						{key: 'Color', label: __('Separator Icon Color', 'wpmozo-blocks-and-addons')},
					]}
				/>
				<WpmozoDimensions
					props={props}
					DimensionKey='postSeparator'
					DimensionsTypes={{padding: true,margin: true}}
				/>

			</PanelBody>
			<PanelBody title={__('Arrows','wpmozo-blocks-and-addons')} className="wpmozo-typography-panel" initialOpen={false}>
				<RangeControl
					label={ __( 'Arrow Font Size', 'wpmozo-blocks-and-addons' ) }
					value={ attributes.arrowFontSize }
					onChange={ ( newValue ) => setAttributes( { arrowFontSize: newValue } ) }
					min={0} max={100} step={1}
				/>
				<WpmozoColorPicker
					props={props}
					ColorKey="arrow"
					ColorTypes={[
						{key: 'Color', label: __('Arrow Color', 'wpmozo-blocks-and-addons')},
						{key: 'Background', label: __('Arrow Background Color', 'wpmozo-blocks-and-addons')}
					]}
				/>
				<WpmozoBorder
					props={props}
					BorderKey="arrow"
				/>
				<WpmozoDimensions
					props={props}
					DimensionKey='arrow'
					DimensionsTypes={{padding: true,margin: true}}
				/>
			</PanelBody>
		</>
	);
};
