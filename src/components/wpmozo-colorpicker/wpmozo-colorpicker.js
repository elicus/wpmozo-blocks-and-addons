
const el = window.wp.element.createElement;
const __ = wp.i18n.__;
const { __experimentalUseMultipleOriginColorsAndGradients} = window.wp.blockEditor;
const { __experimentalToolsPanel, __experimentalToolsPanelItem, Dropdown, Button, ColorIndicator, ColorPalette, TabPanel, GradientPicker } = window.wp.components;

const WpmozoColorPicker = function(args){

    const { ColorKey, ColorTypes, props } = args,
        preAttributes                     = props.preAttributes,
        withToolPanel                     = ( args.hasOwnProperty('withToolPanel') ) ? args.withToolPanel : true,
        AllColors                         = __experimentalUseMultipleOriginColorsAndGradients(),
        defaultGradientColor              = 'linear-gradient(135deg,rgba(6,147,227,1) 0%,rgb(155,81,224) 100%)',
        label                             = args.hasOwnProperty('label') ? args.label : __( 'Color', 'wpmozo-blocks-and-addons' ); 

    const colorSetValue = function( styleType, value = null ) {

        value = setValue( styleType, value );
        props.setAttributes( {[ ColorKey+styleType ]: value} );

        if ( args.hasOwnProperty( 'afterOnChange' ) ) {
            args.afterOnChange( props );
        }

    };

    const setValue = function(styleType, value){

        if ( null === value && 'undefined' !== typeof preAttributes[ ColorKey + styleType ] && preAttributes[ ColorKey + styleType ].hasOwnProperty( 'default' ) ) {
            value = preAttributes[ ColorKey+styleType ].default;
        }
        value = ( null !== value ) ? value : '';

        return value;

    }

    const onChange = args.hasOwnProperty( 'onChange' ) ? args.onChange : colorSetValue;

    if ( withToolPanel ) {

        const colorDropdown = function( colorType, label, colorTypeObj ) {

            let _color = props.attributes[ ColorKey+colorType ],
            fullKey = ColorKey+'-'+colorType,
            colorPlateKey = 'wpmozo-color-palette-'+fullKey;

            const withGradient = ( colorTypeObj.hasOwnProperty('withGradient') ) ? colorTypeObj.withGradient : false;
            const onlyGradient = ( colorTypeObj.hasOwnProperty('onlyGradient') ) ? colorTypeObj.onlyGradient : false;

            if ( '' === _color && args.hasOwnProperty( 'default' ) ) {
                _color = args.default[colorType];
            }

            return el(
                Dropdown,
                {
                    key: 'wpmozo-color-dropdown-container-'+fullKey,
                    className: "wpmozo-color-dropdown-container",
                    contentClassName: "wpmozo-color-popover-content",
                    popoverProps: {
                        placement: 'left-start',
                        offset: 36,
                        shift: true
                    },
                    renderToggle: ({ isOpen, onToggle }) =>
                    el(
                        Button,
                        {
                            key: 'wpmozo-color-dropdown-button-'+fullKey,
                            onClick: onToggle,
                            "aria-expanded": isOpen,
                            children: [
                            el(
                                ColorIndicator,
                                {
                                    key: 'wpmozo-color-dropdown-indicator-'+fullKey,
                                    colorValue: _color,
                                }
                            ),
                            label
                        ],
                        }
                    ),
                    renderContent: () => {
                        if ( ! withGradient && ! onlyGradient ) {
                            return el(
                                ColorPalette,
                                {
                                    key: colorPlateKey,
                                    colors: AllColors.colors,
                                    value: _color,
                                    onChange: (NewColor) => onChange( colorType, NewColor ),
                                    enableAlpha: true,
                                }
                            )
                        }else if ( withGradient ){
                            return el(TabPanel, {
                                key: colorPlateKey,
                                className: "wpmozo-color-tabs",
                                tabs: [
                                    {
                                        name: "solid",
                                        title: __( 'Solid', 'wpmozo-blocks-and-addons' ),
                                        className: "wpmozo-color-tab-solid"
                                    },
                                    {
                                        name: "gradient",
                                        title: __( 'Gradient', 'wpmozo-blocks-and-addons' ),
                                        className: "wpmozo-color-tab-gradient"
                                    }
                                ],
                                children: (currentTab) => {
                                    let tabContent;
                                    let _colorSolid = props.attributes[ ColorKey+colorType+'Solid' ];
                                    if ( '' === _colorSolid && args.hasOwnProperty( 'default' ) ) {
                                        _colorSolid = args.default[colorType+'Solid'];
                                    }
                                    let _colorGradient = props.attributes[ ColorKey+colorType+'Gradient' ];
                                    if ( '' === _colorGradient && args.hasOwnProperty( 'default' ) ) {
                                        _colorGradient = args.default[colorType+'Gradient'];
                                    }
                                    if( 'solid' === currentTab.name ){
                                        tabContent = el(
                                            ColorPalette,
                                            {
                                                colors: AllColors.colors,
                                                value: _colorSolid,
                                                onChange: (NewColor) => {
                                                    onChange( colorType, NewColor )
                                                    onChange( colorType+'Solid', NewColor )
                                                    onChange( colorType+'Gradient', defaultGradientColor )
                                                },
                                                enableAlpha: true,
                                            }
                                        )
                                    }else{
                                        tabContent = el(
                                            GradientPicker,
                                            {
                                                gradients: AllColors.gradients,
                                                value: _colorGradient,
                                                onChange: (NewColor) => {
                                                    onChange( colorType+'Solid', '' )
                                                    if ( 'undefined' === typeof NewColor ) {
                                                        onChange( colorType+'Gradient', defaultGradientColor )
                                                        onChange( colorType, null )
                                                    }else{
                                                        onChange( colorType+'Gradient', NewColor )
                                                        onChange( colorType, NewColor )
                                                    }
                                                },
                                            }
                                        )
                                    }

                                    return tabContent;
                                }
                            })
                        }else{

                            let onlyGradientValue = _color
                            if ( '' === onlyGradientValue ) {
                                onlyGradientValue = defaultGradientColor;
                            }

                            return el(
                                GradientPicker,
                                {
                                    key: colorPlateKey,
                                    gradients: AllColors.gradients,
                                    value: onlyGradientValue,
                                    onChange: (NewColor) => {
                                        if ( 'undefined' === typeof NewColor ) {
                                            onChange( colorType, null )
                                        }else{
                                            onChange( colorType, NewColor )
                                        }
                                    }
                                }
                            )
                        }
                    }
                }
            );

        }

        const Panels = [];
        for (var i = 0; i < ColorTypes.length; i++) {
            let ct    = ColorTypes[i],
            fullKey = ColorKey+'-'+ct.key;
            let Panel = el(
                __experimentalToolsPanelItem,
                {
                    key: 'wpmozo-color-tools-panel-item-'+fullKey,
                    label: ct.label,
                    hasValue: () => true,
                    isShownByDefault: true,
                    onDeselect: () => colorSetValue( ct.key ),
                },
                colorDropdown(
                    ct.key,
                    ct.label,
                    ct
                ),
            );
            Panels.push( Panel );
        }

        return [
            el(
                __experimentalToolsPanel,
                {
                    key: 'wpmozo-color-tools-panel-'+ColorKey,
                    label: label,
                    className: 'wpmozo-color-tools-panel',
                    resetAll: () => {
                        ColorTypes.map( type => { 

                            let value = setValue( type.key, null );
                            props.setAttributes( {[ ColorKey+type.key ]: value} ); 

                        } );
                        

                        if ( args.hasOwnProperty( 'afterOnChange' ) ) {
                            args.afterOnChange( props );
                        }
                    }
                },
                Panels,
            ),
        ];

    }else{

        const Panels = [];
        for (var i = 0; i < ColorTypes.length; i++) {

            let ct    = ColorTypes[i],
            colorType = ct.key,
            label = ct.label,
            fullKey = ColorKey+'-'+colorType,
            _color = props.attributes[ ColorKey+colorType ];

            if ( '' === _color && args.hasOwnProperty( 'default' ) ) {
                _color = args.default[colorType];
            }
            let Panel = el(
                ColorPalette,
                {
                    key: 'wpmozo-color-palette-'+fullKey,
                    colors: AllColors.colors,
                    value: _color,
                    onChange: (NewColor) => onChange( colorType, NewColor ),
                }
            );
            Panels.push( Panel );
        }

        return [ Panels ];

    }

}

export default WpmozoColorPicker;
