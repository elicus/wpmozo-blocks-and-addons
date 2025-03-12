
import { 
    WpmozoBorder, 
    WpmozoAlignment, 
    WpmozoColorPicker, 
    WpmozoTypography, 
    WpmozoMediaUploader 
} from '../../components/index';
import { __ } from "@wordpress/i18n";
import { InspectorControls } from "@wordpress/block-editor";
import { useState } from "@wordpress/element";
import { 
    PanelBody,
    TextControl,
    TextareaControl,
    SelectControl,
    RangeControl,
    BaseControl,
    ButtonGroup,
    Button,
} from "@wordpress/components";

const Inspector = (props) => {

    const attributes = props.attributes,
    setAttributes = props.setAttributes,
    allLayouts = [
        {
            value: 'lily',
            label: __( 'Lily', 'wpmozo-addons-lite-for-gutenberg' ),
        },
        {
            value: 'sadie',
            label: __( 'Sadie', 'wpmozo-addons-lite-for-gutenberg' ),
        },
        {
            value: 'roxy',
            label: __( 'Roxy', 'wpmozo-addons-lite-for-gutenberg' ),
        },
        {
            value: 'bubba',
            label: __( 'Bubba', 'wpmozo-addons-lite-for-gutenberg' ),
        },
        {
            value: 'romeo',
            label: __( 'Romeo', 'wpmozo-addons-lite-for-gutenberg' ),
        },
        {
            value: 'layla',
            label: __( 'Layla', 'wpmozo-addons-lite-for-gutenberg' ),
        },
        {
            value: 'oscar',
            label: __( 'Oscar', 'wpmozo-addons-lite-for-gutenberg' ),
        },
        {
            value: 'marley',
            label: __( 'Marley', 'wpmozo-addons-lite-for-gutenberg' ),
        },
        {
            value: 'ruby',
            label: __( 'Ruby', 'wpmozo-addons-lite-for-gutenberg' ),
        },
        {
            value: 'milo',
            label: __( 'Milo', 'wpmozo-addons-lite-for-gutenberg' ),
        },
    ],
    headingLavels = [
        {
            label: __( 'H1', 'wpmozo-addons-lite-for-gutenberg' ),
            value: 'h1'
        },
        {
            label: __( 'H2', 'wpmozo-addons-lite-for-gutenberg' ),
            value: 'h2'
        },
        {
            label: __( 'H3', 'wpmozo-addons-lite-for-gutenberg' ),
            value: 'h3'
        },
        {
            label: __( 'H4', 'wpmozo-addons-lite-for-gutenberg' ),
            value: 'h4'
        },
        {
            label: __( 'H5', 'wpmozo-addons-lite-for-gutenberg' ),
            value: 'h5'
        },
        {
            label: __( 'H6', 'wpmozo-addons-lite-for-gutenberg' ),
            value: 'h6'
        }
    ];
    
    props = Object.assign({}, props, {preAttributes: {}});

    const [ titleStyleType, setTitleStyleType ] = useState('normal');

	return (
        <>
            <InspectorControls key="controls">
                <PanelBody title={ __( 'Content', 'wpmozo-addons-lite-for-gutenberg' ) } initialOpen={false}>
                    <TextControl
                        label={ __( 'Title', 'wpmozo-addons-lite-for-gutenberg' ) }
                        value={ attributes.title }
                        onChange={ ( newValue ) => setAttributes( { title: newValue } ) }
                    />
                    <TextareaControl
                        label={ __( 'Content', 'wpmozo-addons-lite-for-gutenberg' ) }
                        onChange={ ( newValue ) => setAttributes( { content: newValue } ) }
                        value={ attributes.content }
                    />
                </PanelBody>
                <PanelBody title={ __( 'Image', 'wpmozo-addons-lite-for-gutenberg' ) } initialOpen={false}>
                    <WpmozoMediaUploader 
                        attrKye="backImage" 
                        props={props} 
                    />
                </PanelBody>
           	</InspectorControls>
            <InspectorControls key="styles" group="styles">
                <PanelBody title={ __( 'Layout', 'wpmozo-addons-lite-for-gutenberg' ) } initialOpen={false}>
                    <SelectControl
                        label={ __( 'Select Layout', 'wpmozo-addons-lite-for-gutenberg' ) }
                        value={ attributes.layout }
                        options={ allLayouts }
                        onChange={ ( newValue ) => setAttributes( { layout: newValue } ) }
                    />
                </PanelBody>
                <PanelBody title={ __( 'Layout Settings', 'wpmozo-addons-lite-for-gutenberg' ) } className="wpmozo-typography-panel" initialOpen={false}>
                    { 'romeo' !== attributes.layout && 'marley' !== attributes.layout &&
                        <WpmozoColorPicker  
                            ColorKey="overlay"
                            props={props}
                            ColorTypes={[ 
                                {
                                    key: 'Color',
                                    label: __( 'Overlay Color', 'wpmozo-addons-lite-for-gutenberg' ),
                                },
                            ]}
                        />
                    }
                    { 'lily' !== attributes.layout && 'sadie' !== attributes.layout &&
                        <WpmozoBorder
                            BorderKey="layout"
                            props={props}
                            BorderTypes={{border: true}}
                        />
                    }
                    <RangeControl
                        label={ __( 'Image Opacity', 'wpmozo-addons-lite-for-gutenberg' ) }
                        value={ attributes.imageOpacity }
                        onChange={ ( newValue ) => setAttributes( { imageOpacity: newValue } ) }
                        min={ 0 }
                        step={ 0.1 }
                        max={ 1 }
                    />
                </PanelBody>
                <PanelBody title={ __( 'Title', 'wpmozo-addons-lite-for-gutenberg' ) } className="wpmozo-typography-panel" initialOpen={false}>
                    <BaseControl
                        label={ __( 'Title Heading Lavel', 'wpmozo-addons-lite-for-gutenberg' ) }
                    >    
                        <ButtonGroup>
                            {headingLavels.map((item, key) => (
                                <Button
                                    key={ 'title-lavel-'+item.value }
                                    isPressed={ ( item.value === attributes.titleLavel ) ? true : false }
                                    onClick={ ( newValue ) => setAttributes( { titleLavel: item.value } ) }
                                >
                                    { item.label }
                                </Button>
                            ))}
                        </ButtonGroup>
                    </BaseControl>
                    <BaseControl
                        className="wpmozo-button-tabs-wrap"
                    >    
                        <ButtonGroup>
                            <Button
                                className="wpmozo-button-tabs-btn"
                                isPressed={ ( 'normal' === titleStyleType ) ? true : false }
                                onClick={ () => setTitleStyleType( 'normal' ) }
                            >
                                { __( 'Normal', 'wpmozo-addons-lite-for-gutenberg' ) }
                            </Button>
                            <Button 
                                className="wpmozo-button-tabs-btn"
                                isPressed={ ( 'hover' === titleStyleType ) ? true : false }
                                onClick={ () => setTitleStyleType( 'hover' ) }
                            >
                                { __( 'Hover', 'wpmozo-addons-lite-for-gutenberg' ) }
                            </Button>
                        </ButtonGroup>
                        { 'normal' === titleStyleType &&
                            <>
                                <WpmozoColorPicker  
                                    ColorKey="titleNormal"
                                    props={props}
                                    ColorTypes={[ 
                                        {
                                            key: 'Color',
                                            label: __( 'Title Color', 'wpmozo-addons-lite-for-gutenberg' ),
                                        },
                                    ]}
                                />
                                <WpmozoTypography
                                    TypographyKey="titleNormal"
                                    props={props}
                                />
                            </>
                        }
                        { 'hover' === titleStyleType &&
                            <>
                                <WpmozoColorPicker  
                                    ColorKey="titleHover"
                                    props={props}
                                    ColorTypes={[ 
                                        {
                                            key: 'Color',
                                            label: __( 'Title Color', 'wpmozo-addons-lite-for-gutenberg' ),
                                        },
                                    ]}
                                />
                                <WpmozoTypography
                                    TypographyKey="titleHover"
                                    props={props}
                                />
                            </>
                        }
                    </BaseControl>
                    { 'milo' !== attributes.layout &&
                        <WpmozoAlignment
                            label={ __( 'Title Alignment', 'wpmozo-addons-lite-for-gutenberg') }
                            onChange={ ( newValue ) => setAttributes( { titleAlign: newValue } ) }
                            value={ attributes.titleAlign }
                        />
                    }
                </PanelBody>
                <PanelBody title={ __( 'Content', 'wpmozo-addons-lite-for-gutenberg' ) } className="wpmozo-typography-panel" initialOpen={false}>
                    <WpmozoColorPicker  
                        ColorKey="content"
                        props={props}
                        ColorTypes={[ 
                            {
                                key: 'Color',
                                label: __( 'Text Color', 'wpmozo-addons-lite-for-gutenberg' ),
                            },
                        ]}
                    />
                    { 'milo' !== attributes.layout &&
                        <WpmozoAlignment
                            label={ __( 'Content Alignment', 'wpmozo-addons-lite-for-gutenberg') }
                            onChange={ ( newValue ) => setAttributes( { contentAlign: newValue } ) }
                            value={ attributes.contentAlign }
                        />
                    }
                    <WpmozoTypography
                        TypographyKey="content"
                        props={props}
                    />
                </PanelBody>
            </InspectorControls>
        </>
    );

};

export default Inspector;