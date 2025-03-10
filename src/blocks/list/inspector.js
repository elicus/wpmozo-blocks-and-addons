
import { WpmozoDimensions, WpmozoColorPicker, WpmozoTypography, WpmozoIconpicker, WpmozoAlignment } from '../../components/index';
import { __ } from "@wordpress/i18n";
import { InspectorControls } from "@wordpress/block-editor";
import { 
    PanelBody,
    ToggleControl,
    TextControl,
    SelectControl,
    RangeControl,
    BaseControl,
    ButtonGroup,
    Button
} from "@wordpress/components";
import { useState } from "@wordpress/element";

const Inspector = (props) => {

    const attributes = props.attributes,
    setAttributes = props.setAttributes,
    [ deviceType, setDeviceType ] = useState('tablet');
    const [ textType, setTextType ] = useState('text');

    props = Object.assign({}, props, {preAttributes: {}});
    const dividerStyle = [
        {
            label: __( 'Solid', 'wpmozo-addons-lite-for-gutenberg' ),
            value: 'solid'
        },
        {
            label: __( 'Dashed', 'wpmozo-addons-lite-for-gutenberg' ),
            value: 'dashed'
        },
        {
            label: __( 'Dotted', 'wpmozo-addons-lite-for-gutenberg' ),
            value: 'dotted'
        },
        {
            label: __( 'Double', 'wpmozo-addons-lite-for-gutenberg' ),
            value: 'double'
        },
        {
            label: __( 'Groove', 'wpmozo-addons-lite-for-gutenberg' ),
            value: 'groove'
        },
        {
            label: __( 'Ridge', 'wpmozo-addons-lite-for-gutenberg' ),
            value: 'ridge'
        },
        {
            label: __( 'Inset', 'wpmozo-addons-lite-for-gutenberg' ),
            value: 'inset'
        },
        {
            label: __( 'Outset', 'wpmozo-addons-lite-for-gutenberg' ),
            value: 'outset'
        },
    ];

	return (
        <>
            <InspectorControls key="controls">
                <PanelBody title={ __( 'Configuration', 'wpmozo-addons-lite-for-gutenberg' ) } initialOpen={false}>
                    <SelectControl
                        label={ __( 'Layout', 'wpmozo-addons-lite-for-gutenberg' ) }
                        value={ attributes.layout }
                        options={ [{
                                value: 'default',
                                label: __( 'Default', 'wpmozo-addons-lite-for-gutenberg' ),
                            },
                            {
                                value: 'inline',
                                label: __( 'Inline', 'wpmozo-addons-lite-for-gutenberg' ),
                            },] 
                        }
                        onChange={ ( newValue ) => setAttributes( { layout: newValue } ) }
                    />
                </PanelBody>
           	</InspectorControls>
            <InspectorControls key="styles" group="styles">
                <PanelBody title={ __( 'List', 'wpmozo-addons-lite-for-gutenberg' ) }  initialOpen={false}>
                    <WpmozoAlignment
                        label={__( 'Alignment', 'wpmozo-addons-lite-for-gutenberg')}
                        onChange={ ( newValue ) => setAttributes( { listAlignment: newValue } ) }
                        value={ attributes.listAlignment }
                    />
                </PanelBody>
                <PanelBody title={ __( 'Item Text', 'wpmozo-addons-lite-for-gutenberg' ) } className="wpmozo-text-styling-panel wpmozo-typography-panel" initialOpen={false}>
                    <RangeControl
                        label={ __( 'Indentation', 'wpmozo-addons-lite-for-gutenberg' ) }
                        value={ attributes.indentation }
                        onChange={ ( newValue ) => setAttributes( { indentation: newValue } ) }
                        min={ 0 }
                        step={ 1 }
                        max={ 100 }
                    />
                    <BaseControl
                        className="wpmozo-button-tabs-wrap"
                    >
                        <ButtonGroup>
                            <Button
                                className="wpmozo-button-tabs-btn"
                                isPressed={ ( 'text' === textType ) ? true : false }
                                onClick={ () => setTextType( 'text' ) }
                            >
                                { __( 'Text', 'wpmozo-addons-lite-for-gutenberg' ) }
                            </Button>
                            <Button 
                                className="wpmozo-button-tabs-btn"
                                isPressed={ ( 'link' === textType ) ? true : false }
                                onClick={ () => setTextType( 'link' ) }
                            >
                                { __( 'Link', 'wpmozo-addons-lite-for-gutenberg' ) }
                            </Button>
                        </ButtonGroup>
                        { 'text' === textType &&
                            <>
                                <WpmozoColorPicker  
                                    ColorKey="text"
                                    props={props}
                                    ColorTypes={[ 
                                        {
                                            key: 'Color',
                                            label: __( 'Text Color', 'wpmozo-addons-lite-for-gutenberg' ),
                                        },
                                    ]}
                                />
                                <WpmozoTypography
                                    TypographyKey="text"
                                    props={props}
                                />
                            </>
                        }
                        { 'link' === textType &&
                            <>
                                <WpmozoColorPicker  
                                    ColorKey="link"
                                    props={props}
                                    ColorTypes={[ 
                                        {
                                            key: 'Color',
                                            label: __( 'Link Color', 'wpmozo-addons-lite-for-gutenberg' ),
                                        },
                                    ]}
                                />
                                <WpmozoTypography
                                    TypographyKey="link"
                                    props={props}
                                />
                            </>
                        }
                    </BaseControl>
                </PanelBody>
                <PanelBody title={ __( 'Icon', 'wpmozo-addons-lite-for-gutenberg' ) } initialOpen={false}>
                    <RangeControl
                        label={ __( 'Icon Font Size', 'wpmozo-addons-lite-for-gutenberg' ) }
                        value={ attributes.iconFontSize }
                        onChange={ ( newValue ) => setAttributes( { iconFontSize: newValue } ) }
                        min={ 0 }
                        step={ 1 }
                        max={ 100 }
                    />
                    <WpmozoColorPicker  
                        ColorKey="icon"
                        props={props}
                        ColorTypes={[ 
                            {
                                key: 'Color',
                                label: __( 'Icon Color', 'wpmozo-addons-lite-for-gutenberg' ),
                            },
                        ]}
                    />
                </PanelBody>
                <PanelBody title={ __( 'Image', 'wpmozo-addons-lite-for-gutenberg' ) } initialOpen={false}>
                    <RangeControl
                        label={ __( 'Thumbnail Width', 'wpmozo-addons-lite-for-gutenberg' ) }
                        value={ attributes.imageWidth }
                        onChange={ ( newValue ) => setAttributes( { imageWidth: newValue } ) }
                        min={ 0 }
                        step={ 1 }
                        max={ 100 }
                    />
                </PanelBody>
                <PanelBody title={ __( 'Divider', 'wpmozo-addons-lite-for-gutenberg' ) } initialOpen={false}>
                    <RangeControl
                        label={ __( 'Divider Size', 'wpmozo-addons-lite-for-gutenberg' ) }
                        value={ attributes.dividerSize }
                        onChange={ ( newValue ) => setAttributes( { dividerSize: newValue } ) }
                        min={ 0 }
                        step={ 1 }
                        max={ 100 }
                    />
                    <SelectControl
                        label={ __( 'Divider Style', 'wpmozo-addons-lite-for-gutenberg' ) }
                        value={ attributes.dividerStyle }
                        options={dividerStyle}
                        onChange={ ( newValue ) => setAttributes( { dividerStyle: newValue } ) }
                    />
                    <WpmozoColorPicker  
                        ColorKey="divider"
                        props={props}
                        ColorTypes={[ 
                            {
                                key: 'Color',
                                label: __( 'Divider Color', 'wpmozo-addons-lite-for-gutenberg' ),
                            },
                        ]}
                    />
                    <ToggleControl
                        label={ __( 'Hide Last Divider?', 'wpmozo-addons-lite-for-gutenberg' ) }
                        checked={ attributes.lastDivider }
                        onChange={ ( newValue ) => setAttributes( { lastDivider: newValue } ) }
                    />
                    <WpmozoDimensions
                        DimensionKey='divider'
                        DimensionsTypes={{
                            margin: true
                        }}
                        props={props}
                    />
                </PanelBody>
            </InspectorControls>
        </>
    );
};

export default Inspector;