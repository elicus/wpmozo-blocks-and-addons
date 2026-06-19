import {__} from '@wordpress/i18n';
import {
    Button,
    PanelBody,
    BaseControl,
    ButtonGroup,
    ToggleControl,
    __experimentalToggleGroupControl as ToggleGroupControl,
    __experimentalToggleGroupControlOption as ToggleGroupControlOption,
    __experimentalToggleGroupControlOptionIcon as ToggleGroupControlOptionIcon,
    SelectControl,
    Icon,
    RangeControl,
    ColorPalette
} from '@wordpress/components';
import {
	WpmozoBorder,
	WpmozoAlignment,
	WpmozoTypography,
	WpmozoColorPicker,
    WpmozoDimensions,
    WpmozoIconpicker,
    WpmozoMediaUploader,
    MozoStates
} from "../../../common/components";

export const DesignPanel = ({attributes, setAttributes}) => {
    const props = {attributes, setAttributes, preAttributes: {}};
    let wrapIsHover = attributes?.wrapIsHover;

    return (<>
        <PanelBody  className="wpmozo-typography-panel"
                   initialOpen={true}>
            <MozoStates
				value = {wrapIsHover}
				onChange={ ( isHover ) => setAttributes(
					isHover
						? { wrapIsHover: true }
						: { wrapIsHover: false }
				) }
				control={ ( isHover ) => (
					<ColorPalette
						value={ isHover ? attributes?.wrapBackgroundHover : attributes?.wrapBackground }
						onChange={ ( color ) => setAttributes(
							isHover
								? { wrapBackgroundHover: color || '' }
								: { wrapBackground: color || '' }
						) }
					/>
				) }
			/>
        </PanelBody>
    </>);
};
