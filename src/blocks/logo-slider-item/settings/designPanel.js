import { __ } from "@wordpress/i18n";
import {
	PanelBody,
} from "@wordpress/components";
import { useState } from "@wordpress/element";
import {
	WpmozoDimensions,
	WpmozoColorPicker,
	WpmozoBorder,
	MozoStates,
} from '../../../common/components/index';


export const DesignPanel = ( { attributes, setAttributes, hoverState, setHoverState } ) => {
	let props = { attributes, setAttributes };
	props = Object.assign({}, props, {preAttributes: {}});
	const	[ contentType, setContentType ] = useState('front');

	return ( <>
		<PanelBody title={ __( 'Logo Style', 'wpmozo-blocks-and-addons' ) } initialOpen={false}>
			<MozoStates
				value={hoverState}
				title={ __( 'Logo Style', 'wpmozo-blocks-and-addons' ) }
				onChange={ ( isHover ) => (
						isHover ? setHoverState(true) : setHoverState(false),
						setAttributes({wrapIsHover: !hoverState})
					)
				}
				control={ ( isHover ) => (
					<>
						<WpmozoColorPicker
							ColorKey={ isHover ? "logoHover" : "logo" }
							props={props}
							ColorTypes={[
								{
									key: 'Background',
									label: __( 'Background Color', 'wpmozo-blocks-and-addons' ),
								}
							]}
						/>
						<WpmozoDimensions
							DimensionKey='logo'
							DimensionsTypes={{
								padding: true
							}}
							props={props}
						/>
						<WpmozoBorder
							BorderKey={ isHover ? "logoHover" : "logo" }
							props={props}
						/>
					</>
				) }
			/>
		</PanelBody>
	</> );
};