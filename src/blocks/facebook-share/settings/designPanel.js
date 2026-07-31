import { __ } from '@wordpress/i18n';

import {
	__experimentalColorGradientControl as ColorGradientControl
} from '@wordpress/block-editor';
import {
	PanelBody,
} from '@wordpress/components';
import {
	WpmozoAlignment,
	WpmozoBorder,
	MozoStates,
} from '../../../common/components';

export const DesignPanel = ( { attributes, setAttributes, hoverState, setHoverState } ) => {
	const props = { attributes, setAttributes, preAttributes: {} };

	return ( <>
		{/* Share Button. */}
		<PanelBody title={ __( 'Share Button', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={true}>
			<WpmozoAlignment
				label={ __( 'Button Alignment', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.buttonAlign }
				onChange={ ( newValue ) => setAttributes( { buttonAlign: newValue } ) }
			/>
			<MozoStates
				value={hoverState}
				title={ __( 'Block Background', 'wpmozo-blocks-and-addons' ) }
				onChange={ ( isHover ) => (
						isHover ? setHoverState(true) : setHoverState(false),
						setAttributes({wrapIsHover: !hoverState})
					)
				}
				control={ ( isHover ) => (
					<ColorGradientControl colors={[]} gradients={[]}
						label={ isHover ? __( 'Hover Background', 'wpmozo-blocks-and-addons' ) : __( 'Block Background', 'wpmozo-blocks-and-addons' ) }
						colorValue={ isHover ? attributes.blockHoverBackground : attributes.blockBackground }
						gradientValue={ isHover ? attributes.blockHoverBGGradient : attributes.blockBGGradient }
						onColorChange={ (newValue) => setAttributes( isHover ? { blockHoverBackground: newValue } : { blockBackground: newValue } ) }
						onGradientChange={ (newValue) => setAttributes( isHover ? { blockHoverBGGradient: newValue } : { blockBGGradient: newValue } ) }
					/>
				) }
			/>
			<MozoStates
				value={hoverState}
				title={ __( 'Block Border', 'wpmozo-blocks-and-addons' ) }
				onChange={ ( isHover ) => (
						isHover ? setHoverState(true) : setHoverState(false),
						setAttributes({wrapIsHover: !hoverState})
					)
				}
				control={ ( isHover ) => (
					<WpmozoBorder props={props}
						BorderKey={ isHover ? "blockHover" : "block" }
						BorderTypes={ { border: true, radius: true } }
					/>
				) }
			/>
		</PanelBody>
	</> );
};

