import { __ } from '@wordpress/i18n';
import $ from 'jquery';
import {
	PanelBody,
	TextControl,
	BaseControl,
	ButtonGroup,
	Button,
	ToggleControl,
	SelectControl,
	Icon
} from "@wordpress/components";
import { reusableBlock, trash, chevronUp, link, external } from '@wordpress/icons';
import { useState } from 'react';
import {
	WpmozoMediaUploader,
	WpmozoIconpicker, WpmozoColorPicker,
} from '../../../common/components';

export const GeneralPanel = ( { attributes, setAttributes } ) => {
	const props = { attributes, setAttributes, preAttributes: {} };
	const [toggled, setToggled] = useState([]);

	let currencySymbol = [
		{ value: '', label: __( 'None', 'wpmozo-blocks-and-addons' ) },
		{ value: '$', label: __( '$ Dollar', 'wpmozo-blocks-and-addons' ) },
		{ value: '€', label: __( '€ Euro', 'wpmozo-blocks-and-addons' ) },
		{ value: '฿', label: __( '฿ Baht', 'wpmozo-blocks-and-addons' ) },
		{ value: '₣', label: __( '₣ Franc', 'wpmozo-blocks-and-addons' ) },
		{ value: 'ƒ', label: __( 'ƒ Guilder', 'wpmozo-blocks-and-addons' ) },
		{ value: 'kr', label: __( 'kr Krona', 'wpmozo-blocks-and-addons' ) },
		{ value: '₤', label: __( '₤ Lira', 'wpmozo-blocks-and-addons' ) },
		{ value: '₧', label: __( '₧ Peseta', 'wpmozo-blocks-and-addons' ) },
		{ value: '₱', label: __( '₱ Peso', 'wpmozo-blocks-and-addons' ) },
		{ value: '£', label: __( '£ Pound Sterling', 'wpmozo-blocks-and-addons' ) },
		{ value: 'R$', label: __( 'R$ Real', 'wpmozo-blocks-and-addons' ) },
		{ value: '₽', label: __( '₽ Ruble', 'wpmozo-blocks-and-addons') },
		{ value: '₨', label: __( '₨ Rupee', 'wpmozo-blocks-and-addons' ) },
		{ value: '₹', label: __( '₹ Rupee ( Indian )', 'wpmozo-blocks-and-addons' ) },
		{ value: '₪', label: __( '₪ Shekel', 'wpmozo-blocks-and-addons' ) },
		{ value: '¥', label: __( '¥ Yen/Yuan', 'wpmozo-blocks-and-addons' ) },
		{ value: '₩', label: __( '₩ Won', 'wpmozo-blocks-and-addons' ) },
		{ value: 'custom', label: __( 'Custom', 'wpmozo-blocks-and-addons' ) },
	];

	return ( <>
		<PanelBody title={ __( 'Header', 'wpmozo-blocks-and-addons' ) } initialOpen={true}>
			<TextControl
				label={ __( 'Title', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.title }
				onChange={ (newValue) => setAttributes( { title: newValue } ) }
				__next40pxDefaultSize={true}
				__nextHasNoMarginBottom={true}
			/>
			<TextControl
				label={ __( 'Subtitle', 'wpmozo-blocks-and-addons' ) }
				onChange={ (newValue) => setAttributes( { subtitle: newValue } ) }
				value={attributes.subtitle}
				__next40pxDefaultSize={true}
				__nextHasNoMarginBottom={true}
			/>
			<SelectControl
				label={ __( 'Header Graphics', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.headerGraphics }
				options={ [
					{ value: 'none', label: __( 'None', 'wpmozo-blocks-and-addons' ) },
					{ value: 'icon', label: __( 'Icon', 'wpmozo-blocks-and-addons' ) },
					{ value: 'image', label: __( 'Image', 'wpmozo-blocks-and-addons' ) }
				] }
				onChange={ (newValue) => setAttributes( { headerGraphics: newValue } ) }
				__next40pxDefaultSize={true}
				__nextHasNoMarginBottom={true}
			/>
			{ attributes.headerGraphics && 'icon' === attributes.headerGraphics &&
				<WpmozoIconpicker
					label={ __( 'Icon', 'wpmozo-blocks-and-addons' ) }
					iconPickerKey='icon'
					props={props}
					value={attributes.headerIcon}
					onChange={ (newValue) => setAttributes( {headerIcon: newValue} ) }
				/>
			}
			{'image' === attributes.headerGraphics &&
				<WpmozoMediaUploader
					attrKye="headerImage"
					props={props}
				/>
			}
		</PanelBody>
		<PanelBody title={ __( 'Table Pricing', 'wpmozo-blocks-and-addons' ) } initialOpen={false}>
			<SelectControl
				label={ __( 'Currency Symbol', 'wpmozo-blocks-and-addons' ) }
				value={attributes.currencySymbol}
				options={currencySymbol}
				onChange={(newValue) => setAttributes({currencySymbol: newValue})}
				__next40pxDefaultSize={true}
				__nextHasNoMarginBottom={true}
			/>
			{ 'custom' === attributes.currencySymbol &&
				<TextControl
					label={__('Custom Symbol', 'wpmozo-blocks-and-addons')}
					placeholder={ __( 'Enter Custom Symbol', 'wpmozo-blocks-and-addons' ) }
					onChange={ (newValue) => setAttributes( { customSymbol: newValue } ) }
					value={attributes.customSymbol}
					__next40pxDefaultSize={true}
					__nextHasNoMarginBottom={true}
				/>
			}
			<TextControl
				label={ __( 'Price', 'wpmozo-blocks-and-addons' ) }
				placeholder={ __( 'Enter your price', 'wpmozo-blocks-and-addons' ) }
				onChange={ (newValue) => setAttributes( { price: newValue } ) }
				value={ attributes.price }
				__next40pxDefaultSize={true}
				__nextHasNoMarginBottom={true}
			/>
			<TextControl
				label={__('Period', 'wpmozo-blocks-and-addons')}
				placeholder={ __( 'Enter your period', 'wpmozo-blocks-and-addons' ) }
				onChange={ (newValue) => setAttributes( { period: newValue } ) }
				value={attributes.period}
				__next40pxDefaultSize={true}
				__nextHasNoMarginBottom={true}
			/>
		</PanelBody>
		<PanelBody title={ __( 'Features', 'wpmozo-blocks-and-addons' ) } initialOpen={false}>
			<ToggleControl
				label={__('Show Icon', 'wpmozo-blocks-and-addons')}
				checked={attributes.showFeaturesIcon || false}
				onChange={(newValue) => setAttributes({showFeaturesIcon: newValue})}
			/>
			{ ( attributes.features || [] ).map( ( feature, index ) => (
				<div
					key={index}
					className="wpmozo-feature-row wpmozo-repeater-row wpmozo-pricing-table-repeator"
				>
					
					
					
					<Button className='wpmozo-repeator-caret wpmz_open' icon={chevronUp} iconPosition='right'
						label={__( `Feature ${index + 1}`, 'wpmozo-blocks-and-addons' ) }
						showTooltip={false}
						onClick={ (e) => {
							e.target === 'button' ? $(e.target).toggleClass('wpmz_open wpmz_close') : $(e.target).closest('button').toggleClass('wpmz_open wpmz_close');

							const feature = e.target === 'button' ? $(e.target).siblings('.wpmz-pricing-table-feature') : $(e.target).closest('.wpmozo-feature-row').find('.wpmz-pricing-table-feature');
							
							const icon = e.target === 'button' ? $(e.target).siblings('.wpmz-business-hours-time') : $(e.target).closest('.wpmozo-feature-row').find('.wpmz-pricing-table-feature-icon');
							
							const clone = e.target === 'button' ? $(e.target).siblings('.wpmz-clone-div') : $(e.target).closest('.wpmozo-feature-row').find('.wpmz-clone-div');

							feature.toggle("fast");
							toggled.includes(`${index}`) ? '' : icon.toggle("fast");
							clone.toggle("fast");
							setToggled(prev => prev.includes(`${index}`) ? prev.filter(item => item !== `${index}`) :[...prev, `${index}`]);

						} }
						text={__( `Feature ${index + 1}`, 'wpmozo-blocks-and-addons' )}
					>
					</Button>

					<TextControl
						value={feature['list'] || ''}
						onChange={(value) => {
							const newFeatures = [...(attributes.features || [])];
							newFeatures[index] = {...newFeatures[index], list: value};
							setAttributes({features: newFeatures});
						}}
						className='wpmz-pricing-table-feature'
						__next40pxDefaultSize={true}
						__nextHasNoMarginBottom={true}
						style={{minWidth: 0}}
					/>
					{ attributes.showFeaturesIcon && !toggled.includes(`${index}`) &&
						<div className='wpmz-pricing-table-feature-icon'>
							<WpmozoIconpicker
								label={__(`Icon ${index + 1}`, 'wpmozo-blocks-and-addons')}
								value={feature['icon'] || ''}
								props={props}
								onChange={(value) => {
									const newFeatures = [...(attributes.features || [])];
									newFeatures[index] = {...newFeatures[index], icon: value};
									setAttributes({features: newFeatures});
								}}
							/>
						</div>
					}
					<div className='wpmz-clone-div'>
						<span className="wpmz-clones wpmz-list-clone">{ feature['list'] || '' }</span>
						{ attributes.showFeaturesIcon &&
							<>
								<Icon icon={feature['icon']} className={ ` ${feature['icon']} wpmz-icon-clone` }/>
							</>
						}
					</div>
					<Button
						isDestructive
						className='wpmozo-repeator-trash'
						size='small'
						variant="secondary"
						icon={trash}
						iconSize={20}
						label={__('Remove', 'wpmozo-blocks-and-addons')}
						onClick={() => {
							const newFeatures = (attributes.features || []).filter((_, innerIndex) => innerIndex !== index);
							setAttributes({features: newFeatures});
						}}
					>
						<span className="screen-reader-text">{__('Remove', 'wpmozo-blocks-and-addons')}</span>
					</Button>
					<Button className='wpmozo-repeator-duplicate' variant="secondary" size='small' icon={reusableBlock} iconSize={20}
						label={ __( 'Duplicate', 'wpmozo-blocks-and-addons' ) }
						onClick={ () => {
							const items = attributes.features || [];

							const newFeatures = [
								...items.slice(0, index + 1),
								{ ...items[index] }, // duplicate object
								...items.slice(index + 1),
							];

							setAttributes({features: newFeatures});
						} }
					>
						<span className="screen-reader-text">{ __( 'Duplicate', 'wpmozo-blocks-and-addons' ) }</span>
					</Button>
				</div>
			))}

			<Button style={{marginBottom: '20px'}}
					isPrimary
					onClick={() => {
						const newFeature = {list: ''}; // You can add more default fields here if needed
						const newFeatures = [...(attributes.features || []), newFeature];
						setAttributes({features: newFeatures});
					}}
			>
				{__('Add Item', 'wpmozo-blocks-and-addons')}
			</Button>
		</PanelBody>
		<PanelBody title={ __( 'Button', 'wpmozo-blocks-and-addons' ) } initialOpen={false}>
			<ToggleControl
				label={__('Show Button', 'wpmozo-blocks-and-addons')}
				checked={attributes.showButton}
				onChange={(newValue) => setAttributes({showButton: newValue})}
			/>
			{ attributes.showButton && <>
				<TextControl
					label={__('Button Text', 'wpmozo-blocks-and-addons')}
					value={attributes.buttonText}
					onChange={(newValue) => setAttributes({buttonText: newValue})}
					__next40pxDefaultSize={true}
					__nextHasNoMarginBottom={true}
				/>
				<TextControl
					label={__('Button Url', 'wpmozo-blocks-and-addons')}
					onChange={(newValue) => setAttributes({buttonUrl: newValue})}
					value={attributes.buttonUrl}
					__next40pxDefaultSize={true}
					__nextHasNoMarginBottom={true}
				/>
				<BaseControl
					label={__('Link Target', 'wpmozo-blocks-and-addons')}
					className="wpmozo-button-tabs-wrap"
				>
					<ButtonGroup>
						<Button className="wpmozo-button-tabs-btn"
							label={ __( 'Same Window', 'wpmozo-blocks-and-addons' ) }
							isPressed={ ( 'same' === attributes.buttonLinkTarget) ? true : false }
							onClick={ () => setAttributes( { buttonLinkTarget: 'same' } ) }
							icon={link}
						/>
						<Button className="wpmozo-button-tabs-btn"
							label={ __( 'External', 'wpmozo-blocks-and-addons' ) }
							isPressed={ ( 'external' === attributes.buttonLinkTarget) ? true : false }
							onClick={ () => setAttributes( { buttonLinkTarget: 'external' } ) }
							icon={external}
						/>
					</ButtonGroup>
				</BaseControl>
				<SelectControl
					label={ __( 'Button Media Type', 'wpmozo-blocks-and-addons' ) }
					value={attributes.buttonIconType}
					options={ [
						{ value: 'none', label: __( 'None', 'wpmozo-blocks-and-addons' ) },
						{ value: 'icon', label: __( 'Icon', 'wpmozo-blocks-and-addons' ) },
						{ value: 'image', label: __( 'Image', 'wpmozo-blocks-and-addons' ) }
					] }
					onChange={(newValue) => setAttributes( { buttonIconType: newValue } ) }
					__next40pxDefaultSize={true} __nextHasNoMarginBottom={true}
				/>
				{ 'none' !== attributes.buttonIconType && <>
					{'icon' === attributes.buttonIconType &&
						<WpmozoIconpicker props={props}
							label={ __( 'Icon', 'wpmozo-blocks-and-addons' ) }
							iconPickerKey='buttonIcon'
							value={ attributes.buttonIcon }
							onChange={ ( newValue ) => setAttributes( { buttonIcon: newValue } ) }
						/>
					}
					{'image' === attributes.buttonIconType &&
						<WpmozoMediaUploader
							attrKye="buttonIconImage"
							props={props}
						/>
					}
					<BaseControl
						label={ __( 'Button Media Position', 'wpmozo-blocks-and-addons' ) }
						className="wpmozo-button-tabs-wrap"
					>
						<ButtonGroup>
							<Button className="wpmozo-button-tabs-btn"
								isPressed={ ( 'icon-before' === attributes.buttonIconPosition) ? true : false }
								onClick={ () => setAttributes({buttonIconPosition: 'icon-before' } ) }
								label={ __( 'Before', 'wpmozo-blocks-and-addons' ) }
							>{ __( 'Before', 'wpmozo-blocks-and-addons' ) }</Button>
							<Button className="wpmozo-button-tabs-btn"
								isPressed={('icon-after' === attributes.buttonIconPosition) ? true : false}
								onClick={() => setAttributes({buttonIconPosition: 'icon-after'})}
								label={ __( 'After', 'wpmozo-blocks-and-addons' ) }
							>{ __( 'After', 'wpmozo-blocks-and-addons' ) }</Button>
						</ButtonGroup>
					</BaseControl>
					<ToggleControl
						label={ __( 'Show Media On Hover', 'wpmozo-blocks-and-addons' ) }
						checked={ attributes.showIconOnHover }
						onChange={ (newValue) => setAttributes( { showIconOnHover: newValue } ) }
					/>
				</> }
			</> }
		</PanelBody>
	</> );
};
