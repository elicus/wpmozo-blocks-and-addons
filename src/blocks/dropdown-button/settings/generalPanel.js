import { __ } from '@wordpress/i18n';

import {
	Button,
	PanelBody,
	TextControl,
	SelectControl,
	__experimentalToggleGroupControl as ToggleGroupControl,
	__experimentalToggleGroupControlOptionIcon as ToggleGroupControlOptionIcon,
	Flex, FlexItem,
} from "@wordpress/components";

export const GeneralPanel = ( { attributes, setAttributes } ) => {
	const props = { attributes, setAttributes, preAttributes: {} };

	return ( <>
		{/* Dropdown Items. */}
		<PanelBody title={ __( 'Dropdown Items', 'wpmozo-blocks-and-addons' ) } initialOpen={true}>
			{ ( attributes.linkItems || [] ).map( ( linkItem, index ) => (
				<div key={index} className="wpmozo-repeater-row wpmozo-dropdown-item-repeator">
					<h4 className="wpmozo-repeator-title">{ __( `Dropdown Item ${index + 1}`, 'wpmozo-blocks-and-addons' ) }</h4>
					<TextControl
						label={ __( `Text`, 'wpmozo-blocks-and-addons' ) }
						value={ linkItem['text'] || '' }
						onChange={ ( value ) => {
							const newItems  = [ ...( attributes.linkItems || [] ) ];
							newItems[index] = { ...newItems[index], text: value };
							setAttributes( { linkItems: newItems } );
						} }
						__next40pxDefaultSize={true} __nextHasNoMarginBottom={true}
					/>
					<TextControl
						label={ __( `Link`, 'wpmozo-blocks-and-addons' ) }
						value={ linkItem['link'] || '' }
						onChange={ ( value ) => {
							const newItems  = [ ...( attributes.linkItems || [] ) ];
							newItems[index] = { ...newItems[index], link: value };
							setAttributes( { linkItems: newItems } );
						} }
						__next40pxDefaultSize={true} __nextHasNoMarginBottom={true}
					/>
					<Flex align="center" justify="space-between">
						<FlexItem isBlock>
							<ToggleGroupControl
								label={ __( 'Link Target', 'wpmozo-blocks-and-addons' ) }
								value={ linkItem['target'] || 'same' }
								onChange={ ( value ) => {
									const newItems  = [ ...( attributes.linkItems || [] ) ];
									newItems[index] = { ...newItems[index], target: value };
									setAttributes( { linkItems: newItems } );
								} }
							>
								<ToggleGroupControlOptionIcon value="external" icon="external" label={ __( 'New Window', 'wpmozo-blocks-and-addons' ) } />
								<ToggleGroupControlOptionIcon value="same" icon="admin-links" label={ __( 'Same Window', 'wpmozo-blocks-and-addons' ) } />
							</ToggleGroupControl>
						</FlexItem>
						<FlexItem>
							<Button isDestructive className='wpmozo-repeator-trash' variant="secondary" icon="trash"
								label={ __( 'Remove', 'wpmozo-blocks-and-addons' ) }
								onClick={ () => {
									const newItems = ( attributes.linkItems || [] ).filter( ( _, innerIndex ) => innerIndex !== index );
									setAttributes( { linkItems: newItems } );
								} }
							>
								<span className="screen-reader-text">{ __( 'Remove', 'wpmozo-blocks-and-addons' ) }</span>
							</Button>
						</FlexItem>
					</Flex>
				</div>
			) ) }
			<Button isPrimary
				onClick={ () => {
					const newItems = [ ...( attributes.linkItems || [] ), { text: '', link: '' } ];
					setAttributes( { linkItems: newItems } );
				} }
			>
				{ __( 'Add Dropdown Item', 'wpmozo-blocks-and-addons' ) }
			</Button>
		</PanelBody>
		{/* Display. */}
		<PanelBody title={ __( 'Display', 'wpmozo-blocks-and-addons' ) } initialOpen={false}>
			<TextControl
				label={ __( `Button Text`, 'wpmozo-blocks-and-addons' ) }
				value={ attributes.buttonText }
				onChange={ ( newValue ) => setAttributes( { buttonText: newValue } ) }
				__next40pxDefaultSize={true} __nextHasNoMarginBottom={true}
			/>
			<SelectControl
				label={ __( 'Trigger Action', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.triggerType }
				options={ [
					{ value: 'click', label: __( 'Click', 'wpmozo-blocks-and-addons' ) },
					{ value: 'hover', label: __( 'Hover', 'wpmozo-blocks-and-addons' ) },
				] }
				onChange={ ( newValue ) => setAttributes( { triggerType: newValue } ) }
			/>
			<SelectControl
				label={ __( 'Dropdown Direction', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.dropdownDirection }
				options={ [
					{ value: 'bottom', label: __( 'Bottom', 'wpmozo-blocks-and-addons' ) },
					{ value: 'top', label: __( 'Top', 'wpmozo-blocks-and-addons' ) },
					{ value: 'left', label: __( 'Left', 'wpmozo-blocks-and-addons' ) },
					{ value: 'right', label: __( 'Right', 'wpmozo-blocks-and-addons' ) },
				] }
				onChange={ ( newValue ) => setAttributes( { dropdownDirection: newValue } ) }
			/>
		</PanelBody>
	</> );
};
