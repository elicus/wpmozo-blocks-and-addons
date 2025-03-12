const { compose }         = wp.compose;
const { ComboboxControl } = wp.components;
const el                  = wp.element.createElement;

const options = wpmozo_adfgu_editor_object.icons;

const WpmozoIconpicker = function(args){

	const iconSetValue = function( value = null ) {

		props.setAttributes( {[ args.iconPickerKey ]: value} );

		if ( args.hasOwnProperty( 'afterOnChange' ) ) {
			args.afterOnChange( props );
		}

	};

	const { iconPickerKey, props, label } = args,
		attributes                        = props.attributes,
		value                             = ( '' !== args.value ) ? args.value : '',
		icon                              = ( 'undefined' !== typeof attributes[ args.iconPickerKey ] && '' !== attributes[ args.iconPickerKey ] ) ? attributes[ args.iconPickerKey ] : 'fas fa-ban',
		onChange                          = args.hasOwnProperty( 'onChange' ) ? args.onChange : iconSetValue;

	return [
		el(
			'div',
			{
				key: 'wpmozo-icon-picker-'+iconPickerKey,
				className: 'wpmozo-icon-picker'
			},
			el(
				ComboboxControl,
				{
					key: 'wpmozo-icon-combobox-'+iconPickerKey,
					label: label,
					value: value,
					allowReset: false,
					onChange: onChange,
					options: options,
					__experimentalRenderItem: function(option){
						let iconClass = option.item.value;
						return el(
							"span",
							{
								key: 'wpmozo-icon-span-'+iconPickerKey,
								children: [
								el(
									"i",
									{
										key: 'wpmozo-icon-el-'+iconPickerKey,
										className: iconClass,
									}
								),
							" ",
							option.item.label
							]
							}
						);
					},
				},
			),
			el(
				'div',
				{
					key: 'wpmozo-icon-wrap-'+iconPickerKey,
					className: 'wpmozo-icon-wraper'
				},
				el(
					'i',
					{
						className: icon
					}
				),
			),
		)
	];

}

export default WpmozoIconpicker;