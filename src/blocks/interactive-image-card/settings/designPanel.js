import { __ } from '@wordpress/i18n';

import {
	PanelBody,
	SelectControl,
	RangeControl,
	BaseControl,
	ButtonGroup,
	Button,
} from "@wordpress/components";
import {
	WpmozoBorder,
	WpmozoAlignment,
	WpmozoColorPicker,
	WpmozoTypography,
} from '../../../common/components/index';

import { useState } from "@wordpress/element";
import { headingLevelsList } from '../../../common/utils.js';

export const DesignPanel = ( { attributes, setAttributes, hoverState, setHoverState } ) => {
	const props = { attributes, setAttributes, preAttributes: {} };

	const [ titleStyleType, setTitleStyleType ] = useState( 'normal' );

	return ( <>
		<PanelBody title={ __( 'Layout', 'wpmozo-blocks-and-addons' ) } initialOpen={true}>
			<SelectControl
				label={ __( 'Select Layout', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.layout }
				options={ [
					{ value: 'lily', label: __( 'Lily', 'wpmozo-blocks-and-addons' ) },
					{ value: 'sadie', label: __( 'Sadie', 'wpmozo-blocks-and-addons' ) },
					{ value: 'roxy', label: __( 'Roxy', 'wpmozo-blocks-and-addons' ) },
					{ value: 'bubba', label: __( 'Bubba', 'wpmozo-blocks-and-addons' ) },
					{ value: 'romeo', label: __( 'Romeo', 'wpmozo-blocks-and-addons' ) },
					{ value: 'layla', label: __( 'Layla', 'wpmozo-blocks-and-addons' ) },
					{ value: 'oscar', label: __( 'Oscar', 'wpmozo-blocks-and-addons' ) },
					{ value: 'marley', label: __( 'Marley', 'wpmozo-blocks-and-addons' ) },
					{ value: 'ruby', label: __( 'Ruby', 'wpmozo-blocks-and-addons' ) },
					{ value: 'milo', label: __( 'Milo', 'wpmozo-blocks-and-addons' ) },
				] }
				onChange={ ( newValue ) => setAttributes( { layout: newValue } ) }
			/>
		</PanelBody>
		<PanelBody title={ __( 'Layout Settings', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={false}>
			{ 'romeo' !== attributes.layout && 'marley' !== attributes.layout &&
				<WpmozoColorPicker props={props}
					ColorKey="overlay"
					ColorTypes={ [
						{ key: 'Color', label: __( 'Overlay Color', 'wpmozo-blocks-and-addons' ) },
					] }
				/>
			}
			{ 'lily' !== attributes.layout && 'sadie' !== attributes.layout &&
				<WpmozoBorder props={props}
					BorderKey="layout"
					BorderTypes={ { border: true } }
				/>
			}
			<RangeControl
				label={ __( 'Image Opacity', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.imageOpacity }
				onChange={ ( newValue ) => setAttributes( { imageOpacity: newValue } ) }
				min={0} step={0.1} max={1}
			/>
		</PanelBody>
		<PanelBody title={ __( 'Title', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={false}>
			<BaseControl label={ __( 'Title Heading Level', 'wpmozo-blocks-and-addons' ) }>
				<ButtonGroup>
					{ headingLevelsList.map( ( item, key ) => (
						<Button key={ 'title-level-' + key }
							isPressed={ ( item.value === attributes.titleLevel ) ? true : false }
							onClick={ ( newValue ) => setAttributes( { titleLevel: newValue } ) }
						>{item.label}</Button>
					) ) }
				</ButtonGroup>
			</BaseControl>
			<BaseControl className="wpmozo-button-tabs-wrap">
				<ButtonGroup>
					<Button className="wpmozo-button-tabs-btn"
						isPressed={ ( 'normal' === titleStyleType ) ? true : false }
						onClick={ () => setTitleStyleType( 'normal' ) }
					>{ __( 'Normal', 'wpmozo-blocks-and-addons' ) }</Button>
					<Button className="wpmozo-button-tabs-btn"
						isPressed={ ( 'hover' === titleStyleType ) ? true : false }
						onClick={ () => setTitleStyleType( 'hover' ) }
					>{ __( 'Hover', 'wpmozo-blocks-and-addons' ) }</Button>
				</ButtonGroup>
				{ 'normal' === titleStyleType && <>
					<WpmozoColorPicker props={props}
						ColorKey="titleNormal"
						ColorTypes={ [
							{ key: 'Color', label: __( 'Title Color', 'wpmozo-blocks-and-addons' ) },
						] }
					/>
					<WpmozoTypography props={props}
						TypographyKey="titleNormal"
					/>
				</> }
				{ 'hover' === titleStyleType && <>
					<WpmozoColorPicker props={props}
						ColorKey="titleHover"
						ColorTypes={ [
							{ key: 'Color', label: __( 'Title Color', 'wpmozo-blocks-and-addons' ) }
						] }
					/>
					<WpmozoTypography props={props}
						TypographyKey="titleHover"
					/>
				</> }
			</BaseControl>
			{ 'milo' !== attributes.layout &&
				<WpmozoAlignment
					label={ __( 'Title Alignment', 'wpmozo-blocks-and-addons' ) }
					value={ attributes.titleAlign }
					onChange={ ( newValue ) => setAttributes( { titleAlign: newValue } ) }
				/>
			}
		</PanelBody>
		<PanelBody title={__('Content', 'wpmozo-blocks-and-addons')} className="wpmozo-typography-panel" initialOpen={false}>
			<WpmozoColorPicker props={props}
				ColorKey="content"
				ColorTypes={ [
					{ key: 'Color', label: __( 'Text Color', 'wpmozo-blocks-and-addons' ) },
				] }
			/>
			{ 'milo' !== attributes.layout &&
				<WpmozoAlignment
					label={ __( 'Content Alignment', 'wpmozo-blocks-and-addons' ) }
					value={ attributes.contentAlign }
					onChange={ ( newValue ) => setAttributes( { contentAlign: newValue } ) }
				/>
			}
			<WpmozoTypography props={props}
				TypographyKey="content"
			/>
		</PanelBody>
	</> );
};
