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
	WpmozoColorPicker,
	WpmozoIconpicker,
	WpmozoDimensions,
	WpmozoMediaUploader,
	MozoStates
} from "../../../common/components";

export const DesignPanel = ({ attributes, setAttributes, hoverState, setHoverState }) => {
	const props = {attributes, setAttributes, preAttributes: {}};
	const [openPanel, setOpenPanel] = useState('panel1');
									
	const handleToggle = (panelId) => {
		setOpenPanel(prev => prev === panelId ? null : panelId);
	}

	const [buttonType, setButtonType] = useState('normal');

	return (
		<>
			<PanelBody title={ __( 'Image Styling', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" opened={openPanel === 'panel1'} onToggle={()=> handleToggle('panel1')}>
				<MozoStates
					value = {hoverState}
					title={ __( 'Border', 'wpmozo-blocks-and-addons' ) }
					onChange={ ( isHover ) =>  (
							isHover ?  setHoverState(true) : setHoverState(false),
							setAttributes({wrapIsHover: !hoverState})
						)	
					}
					control={ ( isHover ) => (
						<WpmozoBorder
							label=''
							props={props}
							BorderKey={isHover ? "hover":"normal"}
						/>
					) }
				/>
			</PanelBody>
			<PanelBody title={ __( 'Background', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" opened={openPanel === 'panel2'} onToggle={()=> handleToggle('panel2')}>
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
