
import { WpmozoMediaUploader, WpmozoIconpicker, WpmozoBorder, WpmozoDimensions, WpmozoColorPicker, WpmozoTypography } from '../../components/index';
import { __ } from "@wordpress/i18n";
import { InspectorControls } from "@wordpress/block-editor";
import { 
    PanelBody,
    TextControl,
    BaseControl,
    ButtonGroup,
    SelectControl,
    ToggleControl,
    Button,
    Icon,
} from "@wordpress/components";
import { useState } from "@wordpress/element";

const Inspector = (props) => {

    const attributes = props.attributes,
    setAttributes = props.setAttributes;

    const [ contentType, setContentType ] = useState('front');
    props = Object.assign({}, props, {preAttributes: {}});
    const [ textType, setTextType ] = useState('normal');

	return (
        <>
            <InspectorControls key="controls">
                <PanelBody title={ __( 'Content', 'wpmozo-addons-lite-for-gutenberg' ) } initialOpen={true}>
                    <TextControl
                        label={ __( 'Text', 'wpmozo-addons-lite-for-gutenberg' ) }
                        value={ attributes.text }
                        onChange={ ( newValue ) => setAttributes( { text: newValue } ) }
                    />
                    <SelectControl
                        label={ __( 'Image/Icon as Thumbnail', 'wpmozo-addons-lite-for-gutenberg' ) }
                        value={ attributes.markerType }
                        options={ [{
                                value: 'icon',
                                label: __( 'Use Icon', 'wpmozo-addons-lite-for-gutenberg' ),
                            },
                            {
                                value: 'image',
                                label: __( 'Use Image', 'wpmozo-addons-lite-for-gutenberg' ),
                            },] 
                        }
                        onChange={ ( newValue ) => setAttributes( { markerType: newValue } ) }
                    />
                    { 'icon' === attributes.markerType &&
                        <WpmozoIconpicker
                            label={ __( 'Icon', 'wpmozo-addons-lite-for-gutenberg' ) }
                            iconPickerKey='markerIcon'
                            props={ props }
                            value={ attributes.markerIcon }
                            onChange={ ( newValue ) => setAttributes( { markerIcon: newValue } ) }
                        />
                    }
                    { 'image' === attributes.markerType &&
                        <WpmozoMediaUploader 
                        attrKye="markerImage" 
                        props={props}
                    />
                    }
                </PanelBody>
           	</InspectorControls>
            <InspectorControls key="styles" group="styles">
                <PanelBody title={ __( 'Item Text', 'wpmozo-addons-lite-for-gutenberg' ) } className="wpmozo-text-styling-panel wpmozo-typography-panel" initialOpen={true}>
                    <BaseControl
                        className="wpmozo-button-tabs-wrap"
                    >    
                        <ButtonGroup>
                            <Button
                                className="wpmozo-button-tabs-btn"
                                isPressed={ ( 'normal' === textType ) ? true : false }
                                onClick={ () => setTextType( 'normal' ) }
                            >
                                { __( 'Normal', 'wpmozo-addons-lite-for-gutenberg' ) }
                            </Button>
                            <Button 
                                className="wpmozo-button-tabs-btn"
                                isPressed={ ( 'hover' === textType ) ? true : false }
                                onClick={ () => setTextType( 'hover' ) }
                            >
                                { __( 'Hover', 'wpmozo-addons-lite-for-gutenberg' ) }
                            </Button>
                        </ButtonGroup>
                        { 'normal' === textType &&
                            <>
                                <WpmozoColorPicker  
                                    ColorKey="textNormal"
                                    props={props}
                                    ColorTypes={[ 
                                        {
                                            key: 'Color',
                                            label: __( 'Text Color', 'wpmozo-addons-lite-for-gutenberg' ),
                                        },
                                    ]}
                                />
                                <WpmozoTypography
                                    TypographyKey="textNormal"
                                    props={props}
                                />
                            </>
                        }
                        { 'hover' === textType &&
                            <>
                                <WpmozoColorPicker  
                                    ColorKey="textHover"
                                    props={props}
                                    ColorTypes={[ 
                                        {
                                            key: 'Color',
                                            label: __( 'Text Color', 'wpmozo-addons-lite-for-gutenberg' ),
                                        },
                                    ]}
                                />
                                <WpmozoTypography
                                    TypographyKey="textHover"
                                    props={props}
                                />
                            </>
                        }
                    </BaseControl>
                </PanelBody>
                { 'icon' === attributes.markerType &&
                    <PanelBody title={ __( 'Icon', 'wpmozo-addons-lite-for-gutenberg' ) } initialOpen={false}>
                        <ToggleControl
                            label={ __( 'Style Icon', 'wpmozo-addons-lite-for-gutenberg' ) }
                            checked={ attributes.styleIcon }
                            onChange={ ( newValue ) => setAttributes( { styleIcon: newValue } ) }
                        />
                        { true === attributes.styleIcon && 
                            <SelectControl
                                label={ __( 'Shape', 'wpmozo-addons-lite-for-gutenberg' ) }
                                value={ attributes.iconShape }
                                options={[
                                    {
                                        value: 'square',
                                        label: __( 'Square', 'wpmozo-addons-lite-for-gutenberg' ),
                                    },
                                    {
                                        value: 'circle',
                                        label: __( 'Circle', 'wpmozo-addons-lite-for-gutenberg' ),
                                    },
                                    {
                                        value: 'hexagon',
                                        label: __( 'Hexagon', 'wpmozo-addons-lite-for-gutenberg' ),
                                    },
                                ]}
                                onChange={ ( newValue ) => setAttributes( { iconShape: newValue } ) }
                            />
                        }
                        { true === attributes.styleIcon && 
                            <WpmozoColorPicker  
                                ColorKey="shape"
                                props={props}
                                ColorTypes={[ 
                                    {
                                        key: 'Background',
                                        label: __( 'Shape Background', 'wpmozo-addons-lite-for-gutenberg' ),
                                    },
                                ]}
                            />
                        }
                        { true === attributes.styleIcon && 
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
                        }
                        { true === attributes.styleIcon && 
                            <ToggleControl
                                label={ __( 'Display Shape Border', 'wpmozo-addons-lite-for-gutenberg' ) }
                                checked={ attributes.enableShapeBorder }
                                onChange={ ( newValue ) => setAttributes( { enableShapeBorder: newValue } ) }
                            />
                        }
                        { true === attributes.styleIcon && true === attributes.enableShapeBorder &&
                            <WpmozoColorPicker  
                                ColorKey="shapeBorder"
                                props={props}
                                ColorTypes={[ 
                                    {
                                        key: 'Color',
                                        label: __( 'Shape Border Color', 'wpmozo-addons-lite-for-gutenberg' ),
                                    },
                                ]}
                            />
                        }
                    </PanelBody>
                }
                <PanelBody title={ __( 'Spacing', 'wpmozo-addons-lite-for-gutenberg' ) } initialOpen={false}>
                    <WpmozoDimensions
                        DimensionKey='item'
                        label={ __( 'Item Spacing', 'wpmozo-addons-lite-for-gutenberg' ) }
                        DimensionsTypes={{
                            margin: true,
                            padding:true,
                        }}
                        props={props}
                    />
                </PanelBody>
            </InspectorControls>
        </>
    );

};

export default Inspector;