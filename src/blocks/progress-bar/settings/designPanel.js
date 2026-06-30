import { __ } from '@wordpress/i18n';
import { useState } from '@wordpress/element';
import {
	Button,
	PanelBody,
	BaseControl,
	ButtonGroup,
	RangeControl
} from '@wordpress/components';
import {
	WpmozoBorder,
	WpmozoAlignment,
	WpmozoTypography,
	WpmozoColorPicker,
	WpmozoTextShadow
} from "../../../common/components";
import { headingLevelsList } from '../../../common/utils.js';

export const DesignPanel = ( { attributes, setAttributes } ) => {
	const props = { attributes, setAttributes, preAttributes: {} };
	const [ colorTab, setColorTab ] = useState( 'normal' );
	const [ percentTab, setPercentTab ] = useState( 'normal' );

	return ( <>

	{ attributes.showNumber && (
		<PanelBody title={__('Percentage Text', 'wpmozo-blocks-and-addons')} className="wpmozo-typography-panel" initialOpen={false}>
			
			{/* Button Tabs wrapper */}
			<BaseControl className="wpmozo-button-tabs-wrap" __nextHasNoMarginBottom={ true }>
				<ButtonGroup>
					<Button
						className="wpmozo-button-tabs-btn"
						isPressed={ ( 'normal' === percentTab ) ? true : false }
						onClick={ () => setPercentTab( 'normal' ) }
					>{ __( 'Normal', 'wpmozo-blocks-and-addons' ) }</Button>
					<Button
						className="wpmozo-button-tabs-btn"
						isPressed={ ( 'hover' === percentTab ) ? true : false }
						onClick={ () => setPercentTab( 'hover' ) }
					>{ __( 'Hover', 'wpmozo-blocks-and-addons' ) }</Button>
				</ButtonGroup>

				{/* Normal Tab Content */}
				{ 'normal' === percentTab && ( <>
					<WpmozoColorPicker props={props}
						ColorKey="percentage"
						ColorTypes={ [
							{ key: 'Color', label: __( 'Percentage Color', 'wpmozo-blocks-and-addons' ) }
						] }
					/>
				</> ) }

				{/* Hover Tab Content */}
				{ 'hover' === percentTab && ( <>
					<WpmozoColorPicker props={props}
						ColorKey="percentageHover"
						ColorTypes={ [
							{ key: 'Color', label: __( 'Percentage Hover Color', 'wpmozo-blocks-and-addons' ) }
						] }
					/>
				</> ) }
			</BaseControl>

			{ 'bar' === attributes.layout && (
				<WpmozoAlignment
					label={ __( 'Percentage Alignment', 'wpmozo-blocks-and-addons' ) }
					onChange={ (newValue) => setAttributes({percentAlign: newValue } ) }
					value={ attributes.percentAlign }
				/>
			) }
			<WpmozoTypography
				TypographyKey="percentage"
				props={props}
			/>
			<WpmozoTextShadow
				TextShadowKey="percentageTextShadow"
				props={props}
				label={ __( 'Percentage Text Shadow', 'wpmozo-blocks-and-addons' ) }
			/>
		</PanelBody>
	) }


		<PanelBody title={ __( 'Bar Styling', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={false}>
			{ 'bar' === attributes.layout && (
				<RangeControl
					label={ __( 'Bar Size', 'wpmozo-blocks-and-addons' ) }
					value={ attributes.barSize }
					onChange={ (newValue) => setAttributes( { barSize: newValue } ) }
					min={ 5 }
					max={ 150 }
					step={ 1 }
					__next40pxDefaultSize={true} __nextHasNoMarginBottom={true}
				/>
			) }

			{ 'bar' === attributes.layout && 'vertical' === attributes.barDirection && (
				<RangeControl
					label={ __( 'Bar Height', 'wpmozo-blocks-and-addons' ) }
					value={ attributes.barHeight }
					onChange={ (newValue) => setAttributes( { barHeight: newValue } ) }
					min={ 1 }
					max={ 1200 }
					step={ 1 }
					__next40pxDefaultSize={true} __nextHasNoMarginBottom={true}
				/>
			) }

			{ 'bar' !== attributes.layout && (
				<RangeControl
					label={ __( 'Circle Size', 'wpmozo-blocks-and-addons' ) }
					value={ attributes.circleSize }
					onChange={ (newValue) => setAttributes( { circleSize: newValue } ) }
					min={ 50 }
					max={ 700 }
					step={ 1 }
					__next40pxDefaultSize={true} __nextHasNoMarginBottom={true}
				/>
			) }

			<BaseControl className="wpmozo-button-tabs-wrap" __nextHasNoMarginBottom={ true }>
				<ButtonGroup>
					<Button
						className="wpmozo-button-tabs-btn"
						isPressed={ ( 'normal' === colorTab ) ? true : false }
						onClick={ () => setColorTab( 'normal' ) }
					>{ __( 'Normal', 'wpmozo-blocks-and-addons' ) }</Button>
					<Button
						className="wpmozo-button-tabs-btn"
						isPressed={ ( 'hover' === colorTab ) ? true : false }
						onClick={ () => setColorTab( 'hover' ) }
					>{ __( 'Hover', 'wpmozo-blocks-and-addons' ) }</Button>
				</ButtonGroup>

				{ 'normal' === colorTab && ( <>
					<WpmozoColorPicker props={props}
						ColorKey="barEmpty"
						ColorTypes={ [
							{ key: 'Color', label: __( 'Bar Empty Color', 'wpmozo-blocks-and-addons' ) }
						] }
					/>
					<WpmozoColorPicker props={props}
						ColorKey="barFilled"
						ColorTypes={ [
							{ key: 'Color', label: __( 'Bar Filled Color', 'wpmozo-blocks-and-addons' ) }
						] }
					/>
					{ 'bar' !== attributes.layout && (
						<WpmozoColorPicker props={props}
							ColorKey="circleFill"
							ColorTypes={ [
								{ key: 'Color', label: __( 'Circle Background Color', 'wpmozo-blocks-and-addons' ) }
							] }
						/>
					) }
				</> ) }

				{ 'hover' === colorTab && ( <>
					<WpmozoColorPicker props={props}
						ColorKey="barEmptyHover"
						ColorTypes={ [
							{ key: 'Color', label: __( 'Bar Empty Hover Color', 'wpmozo-blocks-and-addons' ) }
						] }
					/>
					<WpmozoColorPicker props={props}
						ColorKey="barFilledHover"
						ColorTypes={ [
							{ key: 'Color', label: __( 'Bar Filled Hover Color', 'wpmozo-blocks-and-addons' ) }
						] }
					/>
					{ 'bar' !== attributes.layout && (
						<WpmozoColorPicker props={props}
							ColorKey="circleFillHover"
							ColorTypes={ [
								{ key: 'Color', label: __( 'Circle Background Hover Color', 'wpmozo-blocks-and-addons' ) }
							] }
						/>
					) }
				</> ) }
			</BaseControl>

			{ 'bar' === attributes.layout && (
				<WpmozoBorder props={props}
					BorderKey="bar"
					BorderTypes={ { border: true, radius: true } }
				/>
			) }
		</PanelBody>
	</> );
};
