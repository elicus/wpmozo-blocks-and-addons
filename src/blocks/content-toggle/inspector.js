
import { 
    WpmozoColorCombo,
    WpmozoAlignment,
    WpmozoDimensions,
    WpmozoColorPicker,
    WpmozoTypography,
    WpmozoIconpicker 
} from '../../components/index';
import { __ } from "@wordpress/i18n";
import { InspectorControls } from "@wordpress/block-editor";
import { 
    PanelBody,
    TextControl,
    SelectControl,
    RangeControl
} from "@wordpress/components";

const Inspector = (props) => {

    const attributes = props.attributes,
    setAttributes = props.setAttributes;

    const positionValues = [
        {
            label: __( 'Before', 'wpmozo-addons-lite-for-gutenberg' ),
            value: 'before',
        },
        {
            label: __( 'After', 'wpmozo-addons-lite-for-gutenberg' ),
            value: 'after',
        }
    ];
    const switchTypeValues = [
        {
            label: __( 'Rounded', 'wpmozo-addons-lite-for-gutenberg' ),
            value: 'rounded',
        },
        {
            label: __( 'Rectangle', 'wpmozo-addons-lite-for-gutenberg' ),
            value: 'rectangle',
        },
        {
            label: __( 'Toggle', 'wpmozo-addons-lite-for-gutenberg' ),
            value: 'toggle',
        }
    ];
    
    props = Object.assign({}, props, {preAttributes: {}});

	return (
        <>
            <InspectorControls key="controls">
                <PanelBody title={ __( 'Toggle One Content', 'wpmozo-addons-lite-for-gutenberg' ) } initialOpen={false}>
                    <TextControl
                        label={ __( 'Toggle Title', 'wpmozo-addons-lite-for-gutenberg' ) }
                        value={ attributes.toggleOneTitle }
                        onChange={ ( newValue ) => setAttributes( { toggleOneTitle: newValue } ) }
                    />
                    <WpmozoIconpicker
                        label={ __( 'Icon', 'wpmozo-addons-lite-for-gutenberg' ) }
                        iconPickerKey='toggleOneIcon'
                        props={ props }
                        value={ attributes.toggleOneIcon }
                        onChange={ ( newValue ) => setAttributes( { toggleOneIcon: newValue } ) }
                    />
                    { ! window.wpmozo.wpmozo_is_empty( attributes.toggleOneIcon ) &&
                        <SelectControl
                            label={ __( 'Icon Position', 'wpmozo-addons-lite-for-gutenberg' ) }
                            value={ attributes.toggleOneIconPostion }
                            options={ positionValues }
                            onChange={ ( newValue ) => setAttributes( { toggleOneIconPostion: newValue } ) }
                        />
                    }
                </PanelBody>
                <PanelBody title={ __( 'Toggle Two Content', 'wpmozo-addons-lite-for-gutenberg' ) } initialOpen={false}>
                    <TextControl
                        label={ __( 'Toggle Title', 'wpmozo-addons-lite-for-gutenberg' ) }
                        value={ attributes.toggleTwoTitle }
                        onChange={ ( newValue ) => setAttributes( { toggleTwoTitle: newValue } ) }
                    />
                    <WpmozoIconpicker
                        label={ __( 'Icon', 'wpmozo-addons-lite-for-gutenberg' ) }
                        iconPickerKey='toggleTwoIcon'
                        props={ props }
                        value={ attributes.toggleTwoIcon }
                        onChange={ ( newValue ) => setAttributes( { toggleTwoIcon: newValue } ) }
                    />
                    { ! window.wpmozo.wpmozo_is_empty( attributes.toggleTwoIcon ) &&
                        <SelectControl
                            label={ __( 'Icon Position', 'wpmozo-addons-lite-for-gutenberg' ) }
                            value={ attributes.toggleTwoIconPostion }
                            options={ positionValues }
                            onChange={ ( newValue ) => setAttributes( { toggleTwoIconPostion: newValue } ) }
                        />
                    }
                </PanelBody>
           	</InspectorControls>
            <InspectorControls key="styles" group="styles">
                <PanelBody title={ __( 'Toggle Switch' ) } className="wpmozo-typography-panel" initialOpen={false}>
                    <SelectControl
                        label={ __( 'Switch Type', 'wpmozo-addons-lite-for-gutenberg' ) }
                        value={ attributes.toggleSwitchType }
                        options={ switchTypeValues }
                        onChange={ ( newValue ) => setAttributes( { toggleSwitchType: newValue } ) }
                    />
                    <WpmozoColorCombo
                        label={ __( 'Switch Color', 'wpmozo-addons-lite-for-gutenberg' ) }
                        normal={{
                            ColorKey: "toggleSwitch",
                            props: props,
                            ColorTypes: [ 
                                {
                                    key: 'Color',
                                    label: __( 'Switch Color', 'wpmozo-addons-lite-for-gutenberg' ),
                                },
                                {
                                    key: 'OnState',
                                    label: __( 'Switch Color (on state)', 'wpmozo-addons-lite-for-gutenberg' ),
                                },
                                {
                                    key: 'Background',
                                    label: __( 'Switch Background', 'wpmozo-addons-lite-for-gutenberg' ),
                                },
                                {
                                    key: 'OnStateBackground',
                                    label: __( 'Switch Background (on state)', 'wpmozo-addons-lite-for-gutenberg' ),
                                } 
                            ]
                        }}
                        hover={{
                            ColorKey: "toggleSwitch",
                            props: props,
                            ColorTypes: [ 
                                {
                                    key: 'HoverColor',
                                    label: __( 'Switch Color', 'wpmozo-addons-lite-for-gutenberg' ),
                                },
                                {
                                    key: 'HoverOnState',
                                    label: __( 'Switch Color (on state)', 'wpmozo-addons-lite-for-gutenberg' ),
                                },
                                {
                                    key: 'HoverBackground',
                                    label: __( 'Switch Background', 'wpmozo-addons-lite-for-gutenberg' ),
                                },
                                {
                                    key: 'HoverOnStateBackground',
                                    label: __( 'Switch Background (on state)', 'wpmozo-addons-lite-for-gutenberg' ),
                                } 
                            ]
                        }}
                    />
                    <WpmozoAlignment
                        label={__( 'Switch Alignment', 'wpmozo-addons-lite-for-gutenberg')}
                        onChange={ ( newValue ) => setAttributes( { toggleSwitchAlignment: newValue } ) }
                        value={ attributes.toggleSwitchAlignment }
                    />
                    <WpmozoDimensions
                        DimensionKey='toggleSwitchDimensions'
                        DimensionsTypes={{
                            padding: true,
                            margin: true,
                        }}
                        props={props}
                    />
                </PanelBody>
                <PanelBody title={ __( 'Title One' ) } className="wpmozo-typography-panel" initialOpen={false}>
                    <WpmozoColorPicker
                        ColorKey="titleOne"
                        props={props}
                        ColorTypes={[ 
                            {
                                key: 'Color',
                                label: __( 'Title Color', 'wpmozo-addons-lite-for-gutenberg' ),
                            },
                        ]}
                    />
                    <WpmozoTypography
                        TypographyKey="titleOne"
                        props={props}
                    />
                    { ! window.wpmozo.wpmozo_is_empty( attributes.toggleOneIcon ) && (
                        <>
                            <RangeControl
                                label={ __( 'Icon Size', 'wpmozo-addons-lite-for-gutenberg' ) }
                                value={ attributes.titleOneIconSize }
                                onChange={ ( newValue ) => setAttributes( { titleOneIconSize: newValue } ) }
                                min={ 0 }
                                max={ 200 }
                            />
                            <RangeControl
                                label={ __( 'Icon Spacing', 'wpmozo-addons-lite-for-gutenberg' ) }
                                value={ attributes.titleOneIconSpacing }
                                onChange={ ( newValue ) => setAttributes( { titleOneIconSpacing: newValue } ) }
                                min={ 0 }
                                max={ 200 }
                            />
                            <WpmozoColorPicker
                                ColorKey="titleOneIcon"
                                props={props}
                                ColorTypes={[ 
                                    {
                                        key: 'Color',
                                        label: __( 'Icon Color', 'wpmozo-addons-lite-for-gutenberg' ),
                                    },
                                ]}
                            />
                        </>
                    )}
                </PanelBody>
                <PanelBody title={ __( 'Title Two' ) } className="wpmozo-typography-panel" initialOpen={false}>
                    <WpmozoColorPicker
                        ColorKey="titleTwo"
                        props={props}
                        ColorTypes={[ 
                            {
                                key: 'Color',
                                label: __( 'Title Color', 'wpmozo-addons-lite-for-gutenberg' ),
                            },
                        ]}
                    />
                    <WpmozoTypography
                        TypographyKey="titleTwo"
                        props={props}
                    />
                    { ! window.wpmozo.wpmozo_is_empty( attributes.toggleTwoIcon ) && (
                        <>
                            <RangeControl
                                label={ __( 'Icon Size', 'wpmozo-addons-lite-for-gutenberg' ) }
                                value={ attributes.titleTwoIconSize }
                                onChange={ ( newValue ) => setAttributes( { titleTwoIconSize: newValue } ) }
                                min={ 0 }
                                max={ 200 }
                            />
                            <RangeControl
                                label={ __( 'Icon Spacing', 'wpmozo-addons-lite-for-gutenberg' ) }
                                value={ attributes.titleTwoIconSpacing }
                                onChange={ ( newValue ) => setAttributes( { titleTwoIconSpacing: newValue } ) }
                                min={ 0 }
                                max={ 200 }
                            />
                            <WpmozoColorPicker
                                ColorKey="titleTwoIcon"
                                props={props}
                                ColorTypes={[ 
                                    {
                                        key: 'Color',
                                        label: __( 'Icon Color', 'wpmozo-addons-lite-for-gutenberg' ),
                                    },
                                ]}
                            />
                        </>
                    )}
                </PanelBody>
                <PanelBody title={ __( 'Content One' ) } className="wpmozo-typography-panel" initialOpen={false}>
                    <WpmozoColorPicker
                        ColorKey="contentOne"
                        props={props}
                        ColorTypes={[ 
                            {
                                key: 'Color',
                                label: __( 'Content Color', 'wpmozo-addons-lite-for-gutenberg' ),
                            },
                            {
                                key: 'Background',
                                label: __( 'Content Background Color', 'wpmozo-addons-lite-for-gutenberg' ),
                            },
                        ]}
                    />
                    <WpmozoAlignment
                        label={__( 'Content One Alignment', 'wpmozo-addons-lite-for-gutenberg')}
                        onChange={ ( newValue ) => setAttributes( { contentOneAlignment: newValue } ) }
                        value={ attributes.contentOneAlignment }
                    />
                    <WpmozoTypography
                        TypographyKey="contentOne"
                        props={props}
                    />
                    <WpmozoDimensions
                        DimensionKey='contentOneDimensions'
                        DimensionsTypes={{
                            padding: true,
                            margin: true,
                        }}
                        onChange={ ( type, NewPadding ) => {
                            if ( 'padding' === type ) {
                                setAttributes( { contentOneDimensionspadding: NewPadding } )
                            }else{
                                setAttributes( { contentOneDimensionsmargin: NewPadding } )
                            }
                        }}
                        props={props}
                    />
                </PanelBody>
                <PanelBody title={ __( 'Content Two' ) } className="wpmozo-typography-panel" initialOpen={false}>
                    <WpmozoColorPicker
                        ColorKey="contentTwo"
                        props={props}
                        ColorTypes={[ 
                            {
                                key: 'Color',
                                label: __( 'Content Color', 'wpmozo-addons-lite-for-gutenberg' ),
                            },
                            {
                                key: 'Background',
                                label: __( 'Content Background Color', 'wpmozo-addons-lite-for-gutenberg' ),
                            },
                        ]}
                    />
                    <WpmozoAlignment
                        label={__( 'Content Two Alignment', 'wpmozo-addons-lite-for-gutenberg')}
                        onChange={ ( newValue ) => setAttributes( { contentTwoAlignment: newValue } ) }
                        value={ attributes.contentTwoAlignment }
                    />
                    <WpmozoTypography
                        TypographyKey="contentTwo"
                        props={props}
                    />
                    <WpmozoDimensions
                        DimensionKey='contentTwoDimensions'
                        DimensionsTypes={{
                            padding: true,
                            margin: true,
                        }}
                        props={props}
                    />
                </PanelBody>
            </InspectorControls>
        </>
    );

};

export default Inspector;