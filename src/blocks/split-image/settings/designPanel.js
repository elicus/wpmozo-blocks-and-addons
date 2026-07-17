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

export const DesignPanel = ({ attributes, setAttributes, hoverState, setHoverState }) => {
	const props = {attributes, setAttributes, preAttributes: {}};

	const [buttonType, setButtonType] = useState('normal');

	return (
		<>
			<PanelBody title={ __( 'Split Portion', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={true}>
				<WpmozoAlignment
					label={__( 'Alignment', 'wpmozo-blocks-and-addons')}
					onChange={ ( newValue ) => setAttributes( { imageAlignment: newValue } ) }
					value={ attributes.imageAlignment }
				/>
				<WpmozoBorder
					props={props}
					BorderKey="image"
				/>
				<WpmozoDimensions
					DimensionKey='imageContainer'
					DimensionsTypes={{
						padding: true,
						margin: true
					}}
					props={props}
				/>
			</PanelBody>
		</>
	);
};
