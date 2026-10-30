import { __ } from "@wordpress/i18n";

import {
	PanelBody,
} from "@wordpress/components";
import {
	__experimentalColorGradientControl as ColorGradientControl
} from '@wordpress/block-editor';
import {WpmozoBorder, WpmozoColorPicker, MozoStates} from "../../../common/components";

export const DesignPanel = ( { attributes, setAttributes, hoverState, setHoverState } ) => {
	const props = { attributes, setAttributes, preAttributes: {} };
	const isIcon = 'icon' === attributes.stackType;
	const borderPrefix = isIcon ? 'icon' : 'image';

	return ( <>
		{isIcon && (
			<PanelBody title={ __( 'Icon Background', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={open}>
				<MozoStates
					value={hoverState}
					title={ __( 'Background Color', 'wpmozo-blocks-and-addons' ) }
					onChange={ ( isHover ) => (
							isHover ? setHoverState(true) : setHoverState(false),
							setAttributes({wrapIsHover: !hoverState})
						)
					}
					control={ ( isHover ) => (
						<ColorGradientControl colors={[]} gradients={[]}
							label={ isHover ? __( 'Hover Background Color', 'wpmozo-blocks-and-addons' ) : __( 'Background Color', 'wpmozo-blocks-and-addons' ) }
							colorValue={ isHover ? attributes.itemHoverBackground : attributes.itemBackground }
							gradientValue={ isHover ? attributes.itemHoverBGGradient : attributes.itemBGGradient }
							onColorChange={ (newValue) => setAttributes( { [isHover ? 'itemHoverBackground' : 'itemBackground']: newValue } ) }
							onGradientChange={ (newValue) => setAttributes( { [isHover ? 'itemHoverBGGradient' : 'itemBGGradient']: newValue } ) }
						/>
					) }
				/>
			</PanelBody>
		)}
		<PanelBody title={ __( `${isIcon ? 'Icon' : 'Image'} Border`, 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={open}>
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
						BorderKey={ isHover ? `${borderPrefix}Hover` : borderPrefix }
					/>
				) }
			/>
		</PanelBody>
	</> );
};
