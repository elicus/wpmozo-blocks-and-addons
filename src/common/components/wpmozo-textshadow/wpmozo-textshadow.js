import {
	__experimentalToolsPanel,
	__experimentalToolsPanelItem,
	RangeControl,
} from '@wordpress/components';

import { __ } from '@wordpress/i18n';

import WpmozoColorPicker from '../wpmozo-colorpicker/wpmozo-colorpicker';

import './style.scss';

const WpmozoTextShadow = ( args ) => {

	const {
		TextShadowKey,
		props,
		label = __( 'Text Shadow', 'wpmozo-blocks-and-addons' ),
	} = args;

	const preAttributes = props.preAttributes;

	const setValue = ( type, value ) => {

		if (
			value === null &&
			typeof preAttributes[ TextShadowKey + type ] !== 'undefined' &&
			preAttributes[ TextShadowKey + type ].hasOwnProperty( 'default' )
		) {
			value = preAttributes[ TextShadowKey + type ].default;
		}

		return value !== null ? value : '';
	};

	const shadowSetValue = ( type, value = null ) => {

		value = setValue( type, value );

		props.setAttributes( {
			[ TextShadowKey + type ]: value,
		} );

		if ( args.afterOnChange ) {
			args.afterOnChange( props );
		}
	};

	return (
		<__experimentalToolsPanel
			label={ label }
			resetAll={ () => {

				[
					'X',
					'Y',
					'Blur',
					'Color',
					'Opacity',
				].forEach( ( type ) => {

					props.setAttributes( {
						[ TextShadowKey + type ]: setValue( type, null ),
					} );

				} );

			} }
		>

			<__experimentalToolsPanelItem
				label={ __( 'Horizontal Offset', 'wpmozo-blocks-and-addons' ) }
				hasValue={ () => true }
				isShownByDefault
				onDeselect={ () => shadowSetValue( 'X' ) }
			>
				<RangeControl
					value={
						parseInt(
							props.attributes[ TextShadowKey + 'X' ]
						) || 0
					}
					min={ -50 }
					max={ 50 }
					onChange={ ( value ) =>
						shadowSetValue(
							'X',
							value + 'px'
						)
					}
				/>
			</__experimentalToolsPanelItem>

			<__experimentalToolsPanelItem
				label={ __( 'Vertical Offset', 'wpmozo-blocks-and-addons' ) }
				hasValue={ () => true }
				isShownByDefault
				onDeselect={ () => shadowSetValue( 'Y' ) }
			>
				<RangeControl
					value={
						parseInt(
							props.attributes[ TextShadowKey + 'Y' ]
						) || 0
					}
					min={ -50 }
					max={ 50 }
					onChange={ ( value ) =>
						shadowSetValue(
							'Y',
							value + 'px'
						)
					}
				/>
			</__experimentalToolsPanelItem>

			<__experimentalToolsPanelItem
				label={ __( 'Blur', 'wpmozo-blocks-and-addons' ) }
				hasValue={ () => true }
				isShownByDefault
				onDeselect={ () => shadowSetValue( 'Blur' ) }
			>
				<RangeControl
					value={
						parseInt(
							props.attributes[ TextShadowKey + 'Blur' ]
						) || 0
					}
					min={ 0 }
					max={ 100 }
					onChange={ ( value ) =>
						shadowSetValue(
							'Blur',
							value + 'px'
						)
					}
				/>
			</__experimentalToolsPanelItem>

			<__experimentalToolsPanelItem
				label={ __( 'Opacity', 'wpmozo-blocks-and-addons' ) }
				hasValue={ () => true }
				isShownByDefault
				onDeselect={ () => shadowSetValue( 'Opacity' ) }
			>
				<RangeControl
					value={
						props.attributes[
							TextShadowKey + 'Opacity'
						] ?? 1
					}
					min={ 0 }
					max={ 1 }
					step={ 0.01 }
					onChange={ ( value ) =>
						shadowSetValue(
							'Opacity',
							value
						)
					}
				/>
			</__experimentalToolsPanelItem>

			<__experimentalToolsPanelItem
				label={ __( 'Shadow Color', 'wpmozo-blocks-and-addons' ) }
				hasValue={ () => true }
				isShownByDefault
				onDeselect={ () => shadowSetValue( 'Color' ) }
			>
				<WpmozoColorPicker
					ColorKey={ TextShadowKey }
					ColorTypes={ [
						{
							key: 'Color',
							label: __(
								'Color',
								'wpmozo-blocks-and-addons'
							),
						},
					] }
					props={ props }
					withToolPanel={ false }
				/>
			</__experimentalToolsPanelItem>

		</__experimentalToolsPanel>
	);
};

export default WpmozoTextShadow;