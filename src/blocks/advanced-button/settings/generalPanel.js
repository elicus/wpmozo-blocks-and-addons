import {__} from '@wordpress/i18n';

import {
	PanelBody,
	TextControl,
	__experimentalToggleGroupControl as ToggleGroupControl,
	__experimentalToggleGroupControlOption as ToggleGroupControlOption,
	__experimentalToggleGroupControlOptionIcon as ToggleGroupControlOptionIcon,
} from "@wordpress/components";
import {WpmozoAlignment} from "../../../common/components";

export const GeneralPanel = ({attributes, setAttributes}) => {
	const props = {attributes, setAttributes, preAttributes: {}};

	return (<>
		<PanelBody title={__('Configuration', 'wpmozo-blocks-and-addons')} initialOpen={true}>
			<ToggleGroupControl
				__next40pxDefaultSize
				label={ __( 'Orientation', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.btnOrientation }
				onChange={ ( newValue ) => setAttributes( { btnOrientation: newValue } ) }
			>
				<ToggleGroupControlOption value="horizontal" label="Horizontal" />
				<ToggleGroupControlOption value="vertical" label="Vertical" />
			</ToggleGroupControl>
			<WpmozoAlignment
				label={__( 'Button Alignment', 'wpmozo-blocks-and-addons')}
				onChange={ ( newValue ) => setAttributes( { buttonAlignment: newValue } ) }
				value={ attributes.buttonAlignment }
			/>
			{'horizontal' === attributes.btnOrientation && (
				<WpmozoAlignment
					type="vertical"
					label={__( 'Vertical Alignment', 'wpmozo-blocks-and-addons')}
					onChange={ ( newValue ) => setAttributes( { btnVerticalAlign: newValue } ) }
					value={ attributes.btnVerticalAlign }
				/>
			)}
		</PanelBody>
	</>);
};
