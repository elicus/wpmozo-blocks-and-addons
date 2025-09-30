import { __ } from '@wordpress/i18n';

import {
	Button,
	PanelBody,
	ButtonGroup,
	BaseControl,
	RangeControl,
} from '@wordpress/components';
import {
	WpmozoBorder,
	WpmozoAlignment,
	WpmozoTypography,
	WpmozoColorPicker,
} from '../../../common/components';

import { headingLevelsList } from '../../../common/utils.js';

export const DesignPanel = ( { attributes, setAttributes } ) => {
	const props = { attributes, setAttributes, preAttributes: {} };

	return ( <>
		{/* Image. */}
		<PanelBody title={ __( 'Image', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={true}>
			<RangeControl
				label={ __( 'Image Height(px)', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.imageHeight }
				onChange={ ( newValue ) => setAttributes( { imageHeight: newValue } ) }
				min={100} max={1000} step={1}
			/>
			<WpmozoBorder props={ props }
				label={ __( 'Image Border', 'wpmozo-blocks-and-addons' ) }
				BorderKey="image"
				BorderTypes={ { border: true, radius: true } }
			/>
		</PanelBody>
		{/* Name Text. */}
		<PanelBody title={ __( 'Name Text', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={false}>
			<BaseControl label={ __( 'Name Level', 'wpmozo-blocks-and-addons' ) }>
				<ButtonGroup>
					{ headingLevelsList.map( ( item, index ) => (
						<Button key={ item.value }
							isPressed={ item.value === attributes.nameLevel }
							onClick={ () => setAttributes( { nameLevel: item.value } ) }
						>{ item.label }</Button>
					) ) }
				</ButtonGroup>
			</BaseControl>
			<WpmozoAlignment
				label={ __( 'Name Alignment', 'wpmozo-blocks-and-addons' ) }
				onChange={ ( newValue ) => setAttributes( { nameAlign: newValue } ) }
				value={ attributes.nameAlign }
			/>
			<WpmozoColorPicker props={ props }
				ColorKey="name"
				ColorTypes={ [
					{ key: 'Color', label: __( 'Name Color', 'wpmozo-blocks-and-addons' ) }
				] }
			/>
			<WpmozoTypography props={ props }
				TypographyKey="name"
			/>
		</PanelBody>
	</> );
};
