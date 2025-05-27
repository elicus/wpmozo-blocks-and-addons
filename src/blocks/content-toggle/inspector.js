// inspector.js
import { __ } from '@wordpress/i18n';
import {
    InspectorControls
} from '@wordpress/block-editor';
import {
    PanelBody,
    TextControl,
    SelectControl,
    RangeControl
} from '@wordpress/components';
import { WpmozoColorCombo, WpmozoAlignment, WpmozoDimensions, WpmozoColorPicker, WpmozoTypography, WpmozoIconpicker  } from '../../common/components/index';
import { wpmozo_is_empty } from '../../common/utils.js';



const Inspector = ({ attributes, setAttributes }) => {

    let props = { attributes, setAttributes };
    props = Object.assign({}, props, {preAttributes: {}});

    const positionValues = [
        {
            label: __( 'Before', 'wpmozo-blocks-and-addons' ),
            value: 'before',
        },
        {
            label: __( 'After', 'wpmozo-blocks-and-addons' ),
            value: 'after',
        }
    ];
    const switchTypeValues = [
        {
            label: __( 'Rounded', 'wpmozo-blocks-and-addons' ),
            value: 'rounded',
        },
        {
            label: __( 'Rectangle', 'wpmozo-blocks-and-addons' ),
            value: 'rectangle',
        },
        {
            label: __( 'Toggle', 'wpmozo-blocks-and-addons' ),
            value: 'toggle',
        }
    ];
    

    return (
        <>
            <InspectorControls key="controls">
                <PanelBody title={ __( 'Toggle One Content', 'wpmozo-blocks-and-addons' ) } initialOpen={false}>
                    <TextControl
                        label={ __( 'Toggle Title', 'wpmozo-blocks-and-addons' ) }
                        value={ attributes.toggleOneTitle }
                        onChange={ ( newValue ) => setAttributes( { toggleOneTitle: newValue } ) }
                    />
                    <WpmozoIconpicker
                        label={ __( 'Icon', 'wpmozo-blocks-and-addons' ) }
                        iconPickerKey='toggleOneIcon'
                        props={ props }
                        value={ attributes.toggleOneIcon }
                        onChange={ ( newValue ) => setAttributes( { toggleOneIcon: newValue } ) }
                    />
                    { ! wpmozo_is_empty( attributes.toggleOneIcon ) &&
                        <SelectControl
                            label={ __( 'Icon Position', 'wpmozo-blocks-and-addons' ) }
                            value={ attributes.toggleOneIconPostion }
                            options={ positionValues }
                            onChange={ ( newValue ) => setAttributes( { toggleOneIconPostion: newValue } ) }
                        />
                    }
                </PanelBody>
                <PanelBody title={ __( 'Toggle Two Content', 'wpmozo-blocks-and-addons' ) } initialOpen={false}>
                    <TextControl
                        label={ __( 'Toggle Title', 'wpmozo-blocks-and-addons' ) }
                        value={ attributes.toggleTwoTitle }
                        onChange={ ( newValue ) => setAttributes( { toggleTwoTitle: newValue } ) }
                    />
                    <WpmozoIconpicker
                        label={ __( 'Icon', 'wpmozo-blocks-and-addons' ) }
                        iconPickerKey='toggleTwoIcon'
                        props={ props }
                        value={ attributes.toggleTwoIcon }
                        onChange={ ( newValue ) => setAttributes( { toggleTwoIcon: newValue } ) }
                    />
                    { ! wpmozo_is_empty( attributes.toggleTwoIcon ) &&
                        <SelectControl
                            label={ __( 'Icon Position', 'wpmozo-blocks-and-addons' ) }
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
                        label={ __( 'Switch Type', 'wpmozo-blocks-and-addons' ) }
                        value={ attributes.toggleSwitchType }
                        options={ switchTypeValues }
                        onChange={ ( newValue ) => setAttributes( { toggleSwitchType: newValue } ) }
                    />
                    <WpmozoColorCombo
                        label={ __( 'Switch Color', 'wpmozo-blocks-and-addons' ) }
                        normal={{
                            ColorKey: "toggleSwitch",
                            props: props,
                            ColorTypes: [ 
                                {
                                    key: 'Color',
                                    label: __( 'Switch Color', 'wpmozo-blocks-and-addons' ),
                                },
                                {
                                    key: 'OnState',
                                    label: __( 'Switch Color (on state)', 'wpmozo-blocks-and-addons' ),
                                },
                                {
                                    key: 'Background',
                                    label: __( 'Switch Background', 'wpmozo-blocks-and-addons' ),
                                },
                                {
                                    key: 'OnStateBackground',
                                    label: __( 'Switch Background (on state)', 'wpmozo-blocks-and-addons' ),
                                } 
                            ]
                        }}
                        hover={{
                            ColorKey: "toggleSwitch",
                            props: props,
                            ColorTypes: [ 
                                {
                                    key: 'HoverColor',
                                    label: __( 'Switch Color', 'wpmozo-blocks-and-addons' ),
                                },
                                {
                                    key: 'HoverOnState',
                                    label: __( 'Switch Color (on state)', 'wpmozo-blocks-and-addons' ),
                                },
                                {
                                    key: 'HoverBackground',
                                    label: __( 'Switch Background', 'wpmozo-blocks-and-addons' ),
                                },
                                {
                                    key: 'HoverOnStateBackground',
                                    label: __( 'Switch Background (on state)', 'wpmozo-blocks-and-addons' ),
                                } 
                            ]
                        }}
                    />
                    <WpmozoAlignment
                        label={__( 'Switch Alignment', 'wpmozo-blocks-and-addons')}
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
                                label: __( 'Title Color', 'wpmozo-blocks-and-addons' ),
                            },
                        ]}
                    />
                    <WpmozoTypography
                        TypographyKey="titleOne"
                        props={props}
                    />
                    { ! wpmozo_is_empty( attributes.toggleOneIcon ) && (
                        <>
                            <RangeControl
                                label={ __( 'Icon Size', 'wpmozo-blocks-and-addons' ) }
                                value={ attributes.titleOneIconSize }
                                onChange={ ( newValue ) => setAttributes( { titleOneIconSize: newValue } ) }
                                min={ 0 }
                                max={ 200 }
                            />
                            <RangeControl
                                label={ __( 'Icon Spacing', 'wpmozo-blocks-and-addons' ) }
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
                                        label: __( 'Icon Color', 'wpmozo-blocks-and-addons' ),
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
                                label: __( 'Title Color', 'wpmozo-blocks-and-addons' ),
                            },
                        ]}
                    />
                    <WpmozoTypography
                        TypographyKey="titleTwo"
                        props={props}
                    />
                    { ! wpmozo_is_empty( attributes.toggleTwoIcon ) && (
                        <>
                            <RangeControl
                                label={ __( 'Icon Size', 'wpmozo-blocks-and-addons' ) }
                                value={ attributes.titleTwoIconSize }
                                onChange={ ( newValue ) => setAttributes( { titleTwoIconSize: newValue } ) }
                                min={ 0 }
                                max={ 200 }
                            />
                            <RangeControl
                                label={ __( 'Icon Spacing', 'wpmozo-blocks-and-addons' ) }
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
                                        label: __( 'Icon Color', 'wpmozo-blocks-and-addons' ),
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
                                label: __( 'Content Color', 'wpmozo-blocks-and-addons' ),
                            },
                            {
                                key: 'Background',
                                label: __( 'Content Background Color', 'wpmozo-blocks-and-addons' ),
                            },
                        ]}
                    />
                    <WpmozoAlignment
                        label={__( 'Content One Alignment', 'wpmozo-blocks-and-addons')}
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
                                label: __( 'Content Color', 'wpmozo-blocks-and-addons' ),
                            },
                            {
                                key: 'Background',
                                label: __( 'Content Background Color', 'wpmozo-blocks-and-addons' ),
                            },
                        ]}
                    />
                    <WpmozoAlignment
                        label={__( 'Content Two Alignment', 'wpmozo-blocks-and-addons')}
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
