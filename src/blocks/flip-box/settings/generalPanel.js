import { __ } from '@wordpress/i18n';

import {
    PanelBody,
    SelectControl,
    RangeControl,
    ToggleControl,
    __experimentalToggleGroupControl as ToggleGroupControl,
    __experimentalToggleGroupControlOption as ToggleGroupControlOption,
    BaseControl,
    ButtonGroup,
    Button,
    TextControl,
    TextareaControl,
} from '@wordpress/components';
import { 
    WpmozoIconpicker, 
    WpmozoMediaUploader 
} from '../../../common/components/index';
import { useState } from "@wordpress/element";

export const GeneralPanel = ( { attributes, setAttributes } ) => {
	const props = { attributes, setAttributes, preAttributes: {} };

	const [ contentType, setContentType ] = useState( 'front' );
	const [ elementType, setElementType ] = useState( 'front' );

	const flipAllDirection = [
		{ value: 'top', label: __( 'Top', 'wpmozo-blocks-and-addons' ) },
		{ value: 'bottom', label: __( 'Bottom', 'wpmozo-blocks-and-addons' ) },
		{ value: 'left', label: __( 'Left', 'wpmozo-blocks-and-addons' ) },
		{ value: 'right', label: __( 'Right', 'wpmozo-blocks-and-addons' ) },
		...( 'flip' === attributes.animationType ? [
			{ value: 'diagonal-left', label: __( 'Diagonal Left', 'wpmozo-blocks-and-addons' ) },
			{ value: 'diagonal-right', label: __( 'Diagonal Right', 'wpmozo-blocks-and-addons' ) },
			{ value: 'diagonal-left-inverted', label: __( 'Diagonal Left Inverted', 'wpmozo-blocks-and-addons' ) },
			{ value: 'diagonal-right-inverted', label: __( 'Diagonal Right Inverted', 'wpmozo-blocks-and-addons' ) },
		] : [] )
	];

	return ( <>
		<PanelBody title={ __( 'Flip Box Layout', 'wpmozo-blocks-and-addons' ) } initialOpen={true}>
			<SelectControl
				label={ __( 'Animation Type', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.animationType }
				options={ [
					{ value: 'flip', label: __( 'Flip', 'wpmozo-blocks-and-addons' ) },
					{ value: 'cube', label: __( '3D Cube', 'wpmozo-blocks-and-addons' ) }
				] }
				onChange={ ( newValue ) => setAttributes( { animationType: newValue } ) }
			/>
			<SelectControl
				label={ __( 'Flip Direction', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.flipDirection }
				options={ flipAllDirection }
				onChange={ ( newValue ) => setAttributes( { flipDirection: newValue } ) }
			/>
			{ 'flip' === attributes.animationType && <>
				<ToggleControl
					label={ __( '3D Depth Effect', 'wpmozo-blocks-and-addons' ) }
					checked={ attributes.depth3dEffect }
					onChange={ ( newValue ) => setAttributes( { depth3dEffect: newValue } ) }
				/>
				<ToggleControl
					label={ __( 'Shake On Flip', 'wpmozo-blocks-and-addons' ) }
					checked={ attributes.shakeOnFlip }
					onChange={ ( newValue ) => setAttributes( { shakeOnFlip: newValue } ) }
				/>
			</> }
			<RangeControl
				label={ __( 'Flip Speed(in ms)', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.flipSpeed }
				onChange={ ( newValue ) => setAttributes( { flipSpeed: newValue } ) }
				min={ 100 } step={ 100 } max={ 10000 }
			/>
		</PanelBody>
		<PanelBody title={ __( 'Flip Box Content', 'wpmozo-blocks-and-addons' ) } initialOpen={false}>
			<BaseControl className="wpmozo-button-tabs-wrap" >    
				<ButtonGroup>
					<Button className="wpmozo-button-tabs-btn"
						isPressed={ ( 'front' === contentType ) ? true : false }
						onClick={ () => setContentType( 'front' ) }
					>{ __( 'Front', 'wpmozo-blocks-and-addons' ) }</Button>
					<Button className="wpmozo-button-tabs-btn"
						isPressed={ ( 'back' === contentType ) ? true : false }
						onClick={ () => setContentType( 'back' ) }
					>{ __( 'Back', 'wpmozo-blocks-and-addons' ) }</Button>
				</ButtonGroup>
				{ 'front' === contentType && <>
					<TextControl
						label={ __( 'Title', 'wpmozo-blocks-and-addons' ) }
						value={ attributes.frontTitle }
						onChange={ ( newValue ) => setAttributes( { frontTitle: newValue } ) }
					/>
					<TextareaControl
						label={ __( 'Content', 'wpmozo-blocks-and-addons' ) }
						onChange={ ( newValue ) => setAttributes( { frontContnet: newValue } ) }
						value={ attributes.frontContnet }
					/>
				</> }
				{ 'back' === contentType && <>
					<TextControl
						label={ __( 'Title', 'wpmozo-blocks-and-addons' ) }
						value={ attributes.backTitle }
						onChange={ ( newValue ) => setAttributes( { backTitle: newValue } ) }
					/>
					<TextareaControl
						label={ __( 'Content', 'wpmozo-blocks-and-addons' ) }
						onChange={ ( newValue ) => setAttributes( { backContnet: newValue } ) }
						value={ attributes.backContnet }
					/>
				</> }
			</BaseControl>
		</PanelBody>
		<PanelBody title={ __( 'Flip Box Elements', 'wpmozo-blocks-and-addons' ) } initialOpen={false}>
			<BaseControl className="wpmozo-button-tabs-wrap">    
				<ButtonGroup>
					<Button className="wpmozo-button-tabs-btn"
						isPressed={ ( 'front' === elementType ) ? true : false }
						onClick={ () => setElementType( 'front' ) }
					>{ __( 'Front', 'wpmozo-blocks-and-addons' ) }</Button>
					<Button className="wpmozo-button-tabs-btn"
						isPressed={ ( 'back' === elementType ) ? true : false }
						onClick={ () => setElementType( 'back' ) }
					>{ __( 'Back', 'wpmozo-blocks-and-addons' ) }</Button>
				</ButtonGroup>
				{ 'front' === elementType && <>
					<SelectControl
						label={ __( 'Element Type', 'wpmozo-blocks-and-addons' ) }
						value={ attributes.frontElType }
						options={ [
							{ value: 'none', label: __( 'None', 'wpmozo-blocks-and-addons' ) },
							{ value: 'icon', label: __( 'Icon', 'wpmozo-blocks-and-addons' ) },
							{ value: 'image', label: __( 'Image', 'wpmozo-blocks-and-addons' ) }
						] }
						onChange={ ( newValue ) => setAttributes( { frontElType: newValue } ) }
					/>
					{ 'icon' === attributes.frontElType &&
						<WpmozoIconpicker props={ props }
							label={ __( 'Icon', 'wpmozo-blocks-and-addons' ) }
							iconPickerKey='frontElIcon'
							value={ attributes.frontElIcon }
							onChange={ ( newValue ) => setAttributes( { frontElIcon: newValue } ) }
						/>
					}
					{ 'image' === attributes.frontElType &&
						<WpmozoMediaUploader props={props} 
							attrKye="frontElImage" 
						/>
					}
				</> }
				{ 'back' === elementType && <>
					<SelectControl
						label={ __( 'Element Type', 'wpmozo-blocks-and-addons' ) }
						value={ attributes.backElType }
						options={ [
							{ value: 'none', label: __( 'None', 'wpmozo-blocks-and-addons' ) },
							{ value: 'icon', label: __( 'Icon', 'wpmozo-blocks-and-addons' ) },
							{ value: 'image', label: __( 'Image', 'wpmozo-blocks-and-addons' ) }
						] }
						onChange={ ( newValue ) => setAttributes( { backElType: newValue } ) }
					/>
					{ 'icon' === attributes.backElType &&
						<WpmozoIconpicker props={ props }
							label={ __( 'Icon', 'wpmozo-blocks-and-addons' ) }
							iconPickerKey='backElIcon'
							value={ attributes.backElIcon }
							onChange={ ( newValue ) => setAttributes( { backElIcon: newValue } ) }
						/>
					}
					{ 'image' === attributes.backElType &&
						<WpmozoMediaUploader props={props}
							attrKye="backElImage"
						/>
					}
					<ToggleControl
						label={ __( 'Show Button', 'wpmozo-blocks-and-addons' ) }
						checked={ attributes.backHasButton }
						onChange={ ( newValue ) => setAttributes( { backHasButton: newValue } ) }
					/>
					{ attributes.backHasButton && <>
						<TextControl
							label={ __( 'Button Text', 'wpmozo-blocks-and-addons' ) }
							value={ attributes.backBtnText }
							onChange={ ( newValue ) => setAttributes( { backBtnText: newValue } ) }
						/>
						<TextControl
							label={ __( 'Button Url', 'wpmozo-blocks-and-addons' ) }
							value={ attributes.backBtnUrl }
							onChange={ ( newValue ) => setAttributes( { backBtnUrl: newValue } ) }
						/>
						<WpmozoIconpicker
							label={ __( 'Button Icon', 'wpmozo-blocks-and-addons' ) }
							iconPickerKey='backBtnIcon'
							props={ props }
							value={ attributes.backBtnIcon }
							onChange={ ( newValue ) => setAttributes( { backBtnIcon: newValue } ) }
						/>
						<ToggleGroupControl
							label={ __( 'Icon Position', 'wpmozo-blocks-and-addons' ) }
							value={ attributes.backBtnIconPosition }
							onChange={ ( newValue ) => setAttributes( { backBtnIconPosition: newValue } ) }
						>
							<ToggleGroupControlOption value="before" label="Before" />
							<ToggleGroupControlOption value="after" label="After" />
						</ToggleGroupControl>
						<ToggleControl
							label={ __( 'Show Icon On Hover', 'wpmozo-blocks-and-addons' ) }
							checked={ attributes.backBtnIconOnHover }
							onChange={ ( newValue ) => setAttributes( { backBtnIconOnHover: newValue } ) }
						/>
					</> }
				</> }
			</BaseControl>
		</PanelBody>
	</> );
};
