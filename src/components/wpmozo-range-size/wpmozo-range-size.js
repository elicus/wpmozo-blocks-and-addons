const el = window.wp.element.createElement;
const __ = wp.i18n.__;
const { useState } = window.wp.element;
const { __experimentalToolsPanel, __experimentalToolsPanelItem, __experimentalUnitControl, RangeControl, BaseControl, Button } = window.wp.components;
const wpmozoCoreFun = window.wpmozo;

const WpmozoRangeSize = function(args){

	const { rangeSizeKey, props } = args,
		preAttributes             = props.preAttributes;
	let element = '';

	const sizeSetValue = function( valueType = 'value', value = null ) {

		value = setValue( valueType, value );
		if ( 'value' === valueType ) {
			props.setAttributes( { [ rangeSizeKey ] : value} );
		}else{
			props.setAttributes( { [ rangeSizeKey+'Unit' ] : value} );
		}

		if ( args.hasOwnProperty( 'afterOnChange' ) ) {
			args.afterOnChange( props );
		}

	};

	const setValue = function( valueType = 'value', value ){

		if ( 'value' === valueType ) {
			if ( null === value && 'undefined' !== typeof preAttributes[ rangeSizeKey ] && preAttributes[ rangeSizeKey ].hasOwnProperty( 'default' ) ) {
				value = preAttributes[ rangeSizeKey ].default;
			}
		}else{
			if ( null === value && 'undefined' !== typeof preAttributes[ rangeSizeKey+'Unit' ] && preAttributes[ rangeSizeKey+'Unit' ].hasOwnProperty( 'default' ) ) {
				value = preAttributes[ rangeSizeKey+'Unit' ].default;
			}
		}
		value = ( null !== value ) ? value : '';

		return value;

	}

	let unit         = setValue( 'unit', props.attributes[ rangeSizeKey+'Unit' ] ),
		getRange     = setValue( 'value', props.attributes[ rangeSizeKey ] ),
    	defaultRange = ( ! wpmozoCoreFun.wpmozo_is_empty( unit ) && ! wpmozoCoreFun.wpmozo_is_empty( getRange ) ) ? parseFloat(getRange.replace(unit, '')) : 0;
	const [state, setState] = useState({
        range: defaultRange,
    });

    const updateColSpacingRang = ( val ) => {
        let unit = jQuery('.wpmozo-range-size-'+rangeSizeKey+'-size .components-unit-control__select').val(),
        _range = parseFloat( val.replace(unit, '') );
        setState({ ...state, range: _range });
    };

	const onChange = args.hasOwnProperty( 'onChange' ) ? args.onChange : sizeSetValue;

	if ( args.hasOwnProperty('withToolsPanel') ) {

		element = [
			el( 
				__experimentalToolsPanel,
			    { 
			        label: args.label,
			        resetAll: () => {
			        	let sizeRange = setValue( 'value', null );
			            updateColSpacingRang( sizeRange );
			        	sizeSetValue( 'value', null );
			        	sizeSetValue( 'unit', 'px' );
			        },
			        key: 'wpmozo-range-size'+rangeSizeKey+'-panel',
			        className: 'wpmozo-range-size'+rangeSizeKey+'-panel',
			    },
			    el( 
			    	__experimentalToolsPanelItem, 
			        {
			            label: args.label,
			            hasValue: () => true,
			            isShownByDefault: true,
			            onDeselect: () => {
			            	let sizeRange = setValue( 'value', null );
			                updateColSpacingRang( sizeRange );
			                sizeSetValue( 'value', null );
			        		sizeSetValue( 'unit', 'px' );
			            },
			            key: 'wpmozo-range-size-'+rangeSizeKey+'-panel-item',
			            className: 'wpmozo-range-size-'+rangeSizeKey+'-panel-item',                         
			        },
			        el(
			            RangeControl,
			            {
			                key: 'wpmozo-range-size-'+rangeSizeKey+'-range',
			                value: state.range,
			                allowReset: false,
			                withInputField: false,
			                onChange: function( NewSpacing ) {
			                    let unit = jQuery('.wpmozo-range-size-'+rangeSizeKey+'-size .components-unit-control__select').val(),
			                        spacing = NewSpacing+unit;

			                    sizeSetValue( 'value', spacing );
			                    updateColSpacingRang(spacing);
							},
			            }
			        ), 
			        el(
			        	__experimentalUnitControl, 
			        	{
			        		key: 'wpmozo-range-size-'+rangeSizeKey+'-size',
				            value: props.attributes[ rangeSizeKey ],
				            className: 'wpmozo-range-size-'+rangeSizeKey+'-size', 
				            onChange: ( NewSpacing ) => {
				                let unit = jQuery('.wpmozo-range-size-'+rangeSizeKey+'-size .components-unit-control__select').val();

				                sizeSetValue( 'value', NewSpacing );
				                sizeSetValue( 'unit', unit );
				                updateColSpacingRang(NewSpacing+unit);
				            },
			        	}
			        ), 
			    ),
			)
		];

	}else{

		element = [
			el(
				BaseControl,
				{
					key: 'wpmozo-range-size-'+rangeSizeKey+'-basecontrol',
					label: args.label,
					className: 'wpmozo-range-size-basecontrol',
				},
				el(
					'div',
					{
						key: 'wpmozo-range-size-'+rangeSizeKey+'-inner',
						className: 'wpmozo-range-size-basecontrol-inner',
					},
					el(
			            RangeControl,
			            {
			                key: 'wpmozo-range-size-'+rangeSizeKey+'-range',
			                value: state.range,
			                allowReset: false,
			                withInputField: false,
			                onChange: function( NewSpacing ) {
			                    let unit = jQuery('.wpmozo-range-size-'+rangeSizeKey+'-size .components-unit-control__select').val(),
			                        spacing = NewSpacing+unit;

			                    sizeSetValue( 'value', spacing );
			                    updateColSpacingRang(spacing);
							},
			            }
			        ), 
			        el(
			        	__experimentalUnitControl, 
			        	{
			        		key: 'wpmozo-range-size-'+rangeSizeKey+'-size',
				            value: props.attributes[ rangeSizeKey ],
				            className: 'wpmozo-range-size-'+rangeSizeKey+'-size', 
				            onChange: ( NewSpacing ) => {
				            	
				                let unit = jQuery('.wpmozo-range-size-'+rangeSizeKey+'-size .components-unit-control__select').val();

				                sizeSetValue( 'value', NewSpacing );
				                sizeSetValue( 'unit', unit );
				                updateColSpacingRang(NewSpacing+unit);
				            },
			        	}
			        ),
			        el(
			        	Button,
			        	{
			        		text: __( 'Reset', 'wpmozo-blocks-and-addons' ),
			        		variant: 'secondary',
			        		onClick: () => {
			        			let sizeRange = setValue( 'value', null );
				                updateColSpacingRang( sizeRange );
				                sizeSetValue( 'value', null );
				        		sizeSetValue( 'unit', 'px' );
			        		},
			        	}
			        )
			    ),
		    ), 
	    ];

	}

	return element;

}
export default WpmozoRangeSize;