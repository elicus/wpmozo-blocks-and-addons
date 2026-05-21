import {__} from '@wordpress/i18n';
import {useState} from "@wordpress/element";
import {
	Button,
	PanelBody,
	BaseControl,
	ToggleControl,
	SelectControl,
	ButtonGroup,
} from '@wordpress/components';
import {
	WpmozoBorder,
	WpmozoAlignment,
	WpmozoTypography,
	WpmozoColorPicker, WpmozoIconpicker, WpmozoDimensions, WpmozoMediaUploader
} from "../../../common/components";

export const DesignPanel = ({attributes, setAttributes}) => {
	const props = {attributes, setAttributes, preAttributes: {}};

	const [buttonType, setButtonType] = useState('normal');

	return (
		<>
			<PanelBody title={ __( 'Image Styling', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={true}>
				<>
					<BaseControl className="wpmozo-button-tabs-wrap">
						<ButtonGroup>
							<Button
								className="wpmozo-button-tabs-btn"
								isPressed={('normal' === buttonType) ? true : false}
								onClick={() => setButtonType('normal')}
							>{__('Normal', 'wpmozo-blocks-and-addons')}</Button>
							<Button
								className="wpmozo-button-tabs-btn"
								isPressed={('hover' === buttonType) ? true : false}
								onClick={() => setButtonType('hover')}
							>{__('Hover', 'wpmozo-blocks-and-addons')}</Button>
						</ButtonGroup>
						{'normal' === buttonType && <>
							<WpmozoBorder
								props={props}
								BorderKey="normal"
							/>
						</>}
						{'hover' === buttonType && <>
							<WpmozoBorder
								props={props}
								BorderKey="hover"
							/>
						</>}
					</BaseControl>
				</>
			</PanelBody>
			<PanelBody title={ __( 'Background', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={false}>
				<>
					<BaseControl
						label={__('Background Type', 'wpmozo-blocks-and-addons')}
						className="wpmozo-button-tabs-wrap"
					>
						<ButtonGroup>
							<Button
								className="wpmozo-button-tabs-btn"
								isPressed={('classic' === attributes.filledBackgroundType) ? true : false}
								onClick={() => setAttributes({filledBackgroundType: 'classic'})}
								label={__('Classic', 'wpmozo-blocks-and-addons')}
							>{__('Classic', 'wpmozo-blocks-and-addons')}</Button>
							<Button
								className="wpmozo-button-tabs-btn"
								isPressed={('gradient' === attributes.filledBackgroundType) ? true : false}
								onClick={() => setAttributes({filledBackgroundType: 'gradient'})}
								label={__('Gradient', 'wpmozo-blocks-and-addons')}
							>{__('Gradient', 'wpmozo-blocks-and-addons')}</Button>
						</ButtonGroup>
						{'classic' === attributes.filledBackgroundType && (
							<>
								<WpmozoColorPicker
									props={props}
									ColorKey="classic"
									ColorTypes={[
										{
											key: 'BackgroundColor',
											label: __('Background Color', 'wpmozo-blocks-and-addons'),
										}
									]}
								/>
								<WpmozoMediaUploader
									props={props}
									attrKye="classicBackgroundImage"
								/>
							</>
						)}
						{'gradient' === attributes.filledBackgroundType && (
							<WpmozoColorPicker
								props={props}
								ColorKey="gradient"
								ColorTypes={[
									{
										key: 'BackgroundColor',
										label: __('Background Color', 'wpmozo-blocks-and-addons'),
										onlyGradient: true,
									}
								]}
							/>
						)}
					</BaseControl>
				</>

			</PanelBody>
		</>
	);
};
