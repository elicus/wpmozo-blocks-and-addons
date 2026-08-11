import { __ } from "@wordpress/i18n";
import {
	PanelBody,
	ToggleControl
} from "@wordpress/components";
import {
	WpmozoBorder,
	MozoStates
} from '../../../common/components/index';

export const DesignPanel = ( { attributes, setAttributes, hoverState, setHoverState } ) => {
	const props = { attributes, setAttributes, preAttributes: {} };

	return ( <>
		<PanelBody title={ __( 'Image Setting', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={false}>
			<ToggleControl
				label={ __( 'Force Fullwidth', 'wpmozo-blocks-and-addons' ) }
				checked={ attributes.forceFullwidth }
				onChange={ ( newValue ) => setAttributes( { forceFullwidth: newValue } ) }
			/>
			<MozoStates
				value={hoverState}
				title={ __( 'Border', 'wpmozo-blocks-and-addons' ) }
				onChange={ ( isHover ) => (
						isHover ? setHoverState(true) : setHoverState(false),
						setAttributes({wrapIsHover: !hoverState})
					)
				}
				control={ ( isHover ) => (
					<WpmozoBorder
						props={props}
						BorderKey={ isHover ? "imageHover" : "image" }
					/>
				) }
			/>
		</PanelBody>
	</> );
};
