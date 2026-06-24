import { __ } from '@wordpress/i18n';
import {
    PanelBody,
    ToggleControl,
} from '@wordpress/components';
import {
	WpmozoColorPicker,
	WpmozoTypography
} from '../../../common/components/index';

export const DesignPanel = ( { attributes, setAttributes, hoverState, setHoverState } ) => {
	const props = { attributes, setAttributes, preAttributes: {} };

	return ( <>
		<PanelBody title={ __( 'General Style', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={true}>
			<ToggleControl
				label={ __( 'Overlay on Hover', 'wpmozo-blocks-and-addons' ) }
				checked={ attributes.overlayOnHover }
				onChange={ ( newValue ) => setAttributes( { overlayOnHover: newValue } ) }
				__nextHasNoMarginBottom
			/>
			<WpmozoColorPicker props={props}
				ColorKey="globalcolor"
				ColorTypes={ [ 
					{ key: 'Handle', label: __( 'Handle Color', 'wpmozo-blocks-and-addons' ) },
					... attributes.overlayOnHover ? [ { key: 'Overlay', label: __( 'Overlay Color', 'wpmozo-blocks-and-addons' ) } ] : [],
				] }
			/>
		</PanelBody>
		{ attributes.beforeHasLabel && ( <>
			<PanelBody title={ __( 'Before Label Style', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={false}>
				<WpmozoColorPicker props={props}
					ColorKey="beforeLabel"
					ColorTypes={ [ 
						{ key: 'text', label: __( 'Label Color', 'wpmozo-blocks-and-addons' ) },
						{ key: 'background', label: __( 'Label Background', 'wpmozo-blocks-and-addons' ) } 
					] }
				/>
				<WpmozoTypography props={props}
					TypographyKey="beforeLabel"
				/>
			</PanelBody>
		</> ) }
		{ attributes.afterHasLabel && ( <>
			<PanelBody title={ __( 'After Label Style', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={false}>
				<WpmozoColorPicker props={props}
					ColorKey="afterLabel"
					ColorTypes={ [ 
						{ key: 'text', label: __( 'Label Color', 'wpmozo-blocks-and-addons' ) },
						{ key: 'background', label: __( 'Label Background', 'wpmozo-blocks-and-addons' ) } 
					] }
				/>
				<WpmozoTypography
					TypographyKey="afterLabel"
					props={props}
				/>
			</PanelBody>
		</> ) }
	</> );
};
