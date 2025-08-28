import { __ } from '@wordpress/i18n';
import {
	Button,
	PanelBody,
	BaseControl,
	ButtonGroup,
} from '@wordpress/components';
import {
	WpmozoBorder,
	WpmozoAlignment,
	WpmozoTypography,
	WpmozoColorPicker
} from "../../../common/components";
import { headingLevelsList } from '../../../common/utils.js';

export const DesignPanel = ( { attributes, setAttributes } ) => {
	const props = { attributes, setAttributes, preAttributes: {} };

	return ( <>
		<PanelBody title={ __( 'Title', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={true}>
			<WpmozoColorPicker props={props}
				ColorKey="title"
				ColorTypes={ [
					{ key: 'Color', label: __( 'Title Color', 'wpmozo-blocks-and-addons' ) }
				] }
			/>
			<BaseControl label={ __( 'Heading Lavel', 'wpmozo-blocks-and-addons' ) }>
				<ButtonGroup>
					{ headingLevelsList.map( ( item, index ) => (
						<Button
							key={`heading-level-${index}`}
							isPressed={item.value === attributes.titleLavel}
							onClick={() => setAttributes({titleLavel: item.value})}
						>{item.label}</Button>
					) ) }
				</ButtonGroup>
			</BaseControl>
			<WpmozoAlignment
				label={__('Title Alignment', 'wpmozo-blocks-and-addons')}
				onChange={(newValue) => setAttributes({titleAlign: newValue})}
				value={attributes.titleAlign}
			/>
			<WpmozoTypography
				TypographyKey="title"
				props={props}
			/>
		</PanelBody>
		<PanelBody title={__('Percentage', 'wpmozo-blocks-and-addons')} className="wpmozo-typography-panel" initialOpen={false}>
			<WpmozoColorPicker props={props}
				ColorKey="percentage"
				ColorTypes={ [
					{ key: 'Color', label: __( 'Title Color', 'wpmozo-blocks-and-addons' ) }
				] }
			/>
			{ 'layout1' === attributes.layoutType && (
				<WpmozoAlignment
					label={ __( 'Percentage Alignment', 'wpmozo-blocks-and-addons' ) }
					onChange={ (newValue) => setAttributes({percentageAlign: newValue } ) }
					value={ attributes.percentageAlign }
				/>
			) }
			<WpmozoTypography
				TypographyKey="percentage"
				props={props}
			/>
		</PanelBody>
		<PanelBody title={ __( 'Filled Bar/Chunks Background', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={false}>
			<BaseControl
				label={ __( 'Background Type', 'wpmozo-blocks-and-addons' ) }
				className="wpmozo-button-tabs-wrap"
			>
				<ButtonGroup>
					<Button
						className="wpmozo-button-tabs-btn"
						isPressed={ ( 'classic' === attributes.filledBackgroundType ) ? true : false }
						onClick={ () => setAttributes( { filledBackgroundType: 'classic' } ) }
						label={ __( 'Classic', 'wpmozo-blocks-and-addons' ) }
					>{ __( 'Classic', 'wpmozo-blocks-and-addons' ) }</Button>
					<Button
						className="wpmozo-button-tabs-btn"
						isPressed={ ( 'gradient' === attributes.filledBackgroundType ) ? true : false }
						onClick={ () => setAttributes( { filledBackgroundType: 'gradient' } ) }
						label={ __( 'Gradient', 'wpmozo-blocks-and-addons' ) }
					>{ __( 'Gradient', 'wpmozo-blocks-and-addons' ) }</Button>
				</ButtonGroup>
				{ 'classic' === attributes.filledBackgroundType && (
					<WpmozoColorPicker props={props}
						ColorKey="filledBackground"
						ColorTypes={ [
							{ key: 'Color', label: __( 'Background Color', 'wpmozo-blocks-and-addons' ) }
						] }
					/>
				) }
				{ 'gradient'=== attributes.filledBackgroundType && (
					<WpmozoColorPicker props={props}
						ColorKey="filledBackground"
						ColorTypes={ [ {
							key: 'Gradient',
							label: __( 'Gradient Color', 'wpmozo-blocks-and-addons' ),
							onlyGradient: true,
						} ] }
					/>
				) }
			</BaseControl>
		</PanelBody>
		<PanelBody title={ __( 'Bar/Chunks Background', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={false}>
			<BaseControl
				label={ __( 'Background Type', 'wpmozo-blocks-and-addons' ) }
				className="wpmozo-button-tabs-wrap"
			>
				<ButtonGroup>
					<Button
						className="wpmozo-button-tabs-btn"
						isPressed={ ( 'classic' === attributes.backgroundType ) ? true : false }
						onClick={ () => setAttributes( { backgroundType: 'classic' } ) }
						label={ __( 'Classic', 'wpmozo-blocks-and-addons' ) }
					>{ __( 'Classic', 'wpmozo-blocks-and-addons' ) }</Button>
					<Button
						className="wpmozo-button-tabs-btn"
						isPressed={ ( 'gradient' === attributes.backgroundType ) ? true : false }
						onClick={ () => setAttributes( { backgroundType: 'gradient' } ) }
						label={ __( 'Gradient', 'wpmozo-blocks-and-addons' ) }
					>{ __( 'Gradient', 'wpmozo-blocks-and-addons' ) }</Button>
				</ButtonGroup>
				{ 'classic' === attributes.backgroundType && (
					<WpmozoColorPicker props={props}
						ColorKey="background"
						ColorTypes={ [
							{ key: 'Color', label: __( 'Background Color', 'wpmozo-blocks-and-addons' ) }
						] }
					/>
				) }
				{ 'gradient'=== attributes.backgroundType && (
					<WpmozoColorPicker props={props}
						ColorKey="background"
						ColorTypes={ [ {
							key: 'Gradient',
							label: __( 'Gradient Color', 'wpmozo-blocks-and-addons' ),
							onlyGradient: true,
						} ] }
					/>
				) }
			</BaseControl>
		</PanelBody>
		<PanelBody title={ __( 'Bar/Chunks Border', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={false}>
			<WpmozoBorder props={props}
				BorderKey="bar"
				BorderTypes={ { border: true,radius: true } }
			/>
		</PanelBody>
	</> );
};
