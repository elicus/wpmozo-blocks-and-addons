// inspector.js
import {
    WpmozoAlignment,
    WpmozoColorPicker,
    WpmozoTypography,
    WpmozoMediaUploader,
    WpmozoIconpicker,
    WpmozoDimensions,
    WpmozoBorder
} from '../../common/components';
import {__} from "@wordpress/i18n";
import {InspectorControls,HeightControl} from "@wordpress/block-editor";
import {
    PanelBody,
    TextControl,
    TextareaControl,
    BaseControl,
    ButtonGroup,
    Button,
    __experimentalToggleGroupControl as ToggleGroupControl,
    __experimentalToggleGroupControlOption as ToggleGroupControlOption,
    __experimentalToggleGroupControlOptionIcon as ToggleGroupControlOptionIcon,
    ToggleControl,
    SelectControl,
    Icon,
    RangeControl
} from "@wordpress/components";
import { useState } from "@wordpress/element";

const Inspector = ({ attributes, setAttributes }) => {

    let props = { attributes, setAttributes },
        iconSelection = [
            {
                label: __('None', 'wpmozo-blocks-and-addons'),
                value: 'none'
            },
            {
                label: __('Icon', 'wpmozo-blocks-and-addons'),
                value: 'icon'
            },
            {
                label: __('Image', 'wpmozo-blocks-and-addons'),
                value: 'image'
            }
        ],
        iconShape = [
            {
                label: __('Square', 'wpmozo-blocks-and-addons'),
                value: 'square'
            },
            {
                label: __('Circle', 'wpmozo-blocks-and-addons'),
                value: 'circle'
            },
            {
                label: __('Hexagon', 'wpmozo-blocks-and-addons'),
                value: 'hexagon'
            }
        ],
        headingLavels = [
            {
                label: __( 'H1', 'wpmozo-blocks-and-addons' ),
                value: 'h1'
            },
            {
                label: __( 'H2', 'wpmozo-blocks-and-addons' ),
                value: 'h2'
            },
            {
                label: __( 'H3', 'wpmozo-blocks-and-addons' ),
                value: 'h3'
            },
            {
                label: __( 'H4', 'wpmozo-blocks-and-addons' ),
                value: 'h4'
            },
            {
                label: __( 'H5', 'wpmozo-blocks-and-addons' ),
                value: 'h5'
            },
            {
                label: __( 'H6', 'wpmozo-blocks-and-addons' ),
                value: 'h6'
            }
        ];
        props = Object.assign({}, props, {preAttributes: {}});
        const [ titleType, setTitleType ] = useState('normal');
        const [ descType, setDescType ] = useState('normal');
        const [ contentType, setContentType ] = useState('normal');

    return (
        <>
            <InspectorControls key="controls">
                <PanelBody title={__('Image', 'wpmozo-blocks-and-addons')} initialOpen={true}>
                    <WpmozoMediaUploader
                        attrKye="image"
                        props={props}
                    />
                </PanelBody>
                <PanelBody title={__('Content', 'wpmozo-blocks-and-addons')} initialOpen={false}>
                    <TextControl
                        label={__('Title', 'wpmozo-blocks-and-addons')}
                        value={attributes.title}
                        onChange={(newValue) => setAttributes({title: newValue})}
                    />
                    <TextareaControl
                        label={__('Description', 'wpmozo-blocks-and-addons')}
                        onChange={(newValue) => setAttributes({description: newValue})}
                        value={attributes.description}
                    />
                </PanelBody>
                <PanelBody title={__('Icon', 'wpmozo-blocks-and-addons')} initialOpen={false}>
                    <WpmozoIconpicker
                        label={__('Icon', 'wpmozo-blocks-and-addons')}
                        iconPickerKey='icon'
                        props={props}
                        value={attributes.icon}
                        onChange={(newValue) => setAttributes({icon: newValue})}
                    />
                </PanelBody>
                <PanelBody title={__('Button', 'wpmozo-blocks-and-addons')} initialOpen={false}>
                    <ToggleControl
                        label={__('Show Button', 'wpmozo-blocks-and-addons')}
                        checked={attributes.showButton}
                        onChange={(newValue) => setAttributes({showButton: newValue})}
                    />
                    {attributes.showButton &&
                        <>
                            <TextControl
                                label={__('Button Text', 'wpmozo-blocks-and-addons')}
                                value={attributes.buttonText}
                                onChange={(newValue) => setAttributes({buttonText: newValue})}
                            />
                            <TextControl
                                label={__('Button Url', 'wpmozo-blocks-and-addons')}
                                onChange={(newValue) => setAttributes({buttonUrl: newValue})}
                                value={attributes.buttonUrl}
                            />
                            <ToggleGroupControl
                                label={ __( 'Link Target', 'wpmozo-blocks-and-addons' ) }
                                value={ attributes.buttonLinkTarget }
                                onChange={ ( newValue ) => setAttributes( { buttonLinkTarget: newValue } ) }
                            >
                                <ToggleGroupControlOptionIcon value="external" icon="external" label="New Window" />
                                <ToggleGroupControlOptionIcon value="same" icon="admin-links" label="Same Window" />
                            </ToggleGroupControl>
                            <SelectControl
                                label={__('Button Media Type', 'wpmozo-blocks-and-addons')}
                                value={attributes.buttonMediaType}
                                options={iconSelection}
                                onChange={(newValue) => setAttributes({buttonMediaType: newValue})}
                            />
                            {'none' !== attributes.buttonMediaType &&
                                <>
                                    {'icon' === attributes.buttonMediaType &&
                                        <WpmozoIconpicker
                                            label={__('Icon', 'wpmozo-blocks-and-addons')}
                                            iconPickerKey='buttonIcon'
                                            props={props}
                                            value={attributes.buttonIcon}
                                            onChange={(newValue) => setAttributes({buttonIcon: newValue})}
                                        />
                                    }
                                    {'image' === attributes.buttonMediaType &&
                                        <WpmozoMediaUploader
                                            attrKye="buttonImage"
                                            props={props}
                                        />
                                    }

                                    <ToggleGroupControl
                                        label={ 'icon' === attributes.buttonMediaType ? __( 'Icon Position', 'wpmozo-blocks-and-addons' ) : __( 'Image Position', 'wpmozo-blocks-and-addons' ) }
                                        value={ attributes.buttonMediaPosition }
                                        onChange={ ( newValue ) => setAttributes( { buttonMediaPosition: newValue } ) }
                                    >
                                        <ToggleGroupControlOption icon={<Icon icon="external"/>} value="before" label="Before" />
                                        <ToggleGroupControlOption value="after" label="After" />
                                    </ToggleGroupControl>
                                    <ToggleControl
                                        label={ 'icon' === attributes.buttonMediaType ? __( 'Show Icon On Hover', 'wpmozo-blocks-and-addons' ) : __( 'Show Image On Hover', 'wpmozo-blocks-and-addons' ) }
                                        checked={attributes.showMediaOnHover}
                                        onChange={(newValue) => setAttributes({showMediaOnHover: newValue})}
                                    />
                                </>
                            }

                        </>
                    }
                </PanelBody>
            </InspectorControls>
            <InspectorControls key="styles" group="styles">








                <PanelBody title={ __( 'Image', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={false}>
                    <WpmozoBorder
                        BorderKey="image"
                        props={props}
                    />
                    <WpmozoDimensions
                        DimensionKey='imageDimensions'
                        DimensionsTypes={{
                            padding: true
                        }}
                        props={props}
                    />
                </PanelBody>










                <PanelBody title={ __( 'Title', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={false}>
                    <WpmozoAlignment
                        label={ __( 'Title Alignment', 'wpmozo-blocks-and-addons') }
                        onChange={ ( newValue ) => setAttributes( { titleAlign: newValue } ) }
                        value={ attributes.titleAlign }
                    />
                    <BaseControl
                        label={ __( 'Heading Level', 'wpmozo-blocks-and-addons' ) }
                    >
                        <ButtonGroup>
                            {headingLavels.map((item, index) => (
                                <Button
                                    key={item.value}
                                    isPressed={item.value === attributes.titleLevel}
                                    onClick={() => setAttributes({ titleLevel: item.value })}
                                >
                                    {item.label}
                                </Button>
                            ))}
                        </ButtonGroup>
                    </BaseControl>
                    <BaseControl className="wpmozo-button-tabs-wrap" >    
                        <ButtonGroup>
                            <Button
                                className="wpmozo-button-tabs-btn"
                                isPressed={ ( 'normal' === titleType ) ? true : false }
                                onClick={ () => setTitleType( 'normal' ) }
                            >
                                { __( 'Normal', 'wpmozo-blocks-and-addons' ) }
                            </Button>
                            <Button 
                                className="wpmozo-button-tabs-btn"
                                isPressed={ ( 'hover' === titleType ) ? true : false }
                                onClick={ () => setTitleType( 'hover' ) }
                            >
                                { __( 'Hover', 'wpmozo-blocks-and-addons' ) }
                            </Button>
                        </ButtonGroup>
                        { 'normal' === titleType &&
                            <>
                                <WpmozoColorPicker
                                    ColorKey="title"
                                    props={props}
                                    ColorTypes={[
                                        {
                                            key: 'Color',
                                            label: __( 'Title Color', 'wpmozo-blocks-and-addons' ),
                                        }
                                    ]}
                                />
                                <WpmozoTypography
                                    TypographyKey="title"
                                    props={props}
                                />
                            </>
                        }
                        { 'hover' === titleType &&
                            <>
                                <WpmozoColorPicker
                                    ColorKey="titleHover"
                                    props={props}
                                    ColorTypes={[
                                        {
                                            key: 'Color',
                                            label: __( 'Title Color', 'wpmozo-blocks-and-addons' ),
                                        }
                                    ]}
                                />
                                <WpmozoTypography
                                    TypographyKey="titleHover"
                                    props={props}
                                />
                            </>
                        }
                    </BaseControl>
                </PanelBody>
                <PanelBody title={ __( 'Description', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={false}>
                    <WpmozoAlignment
                        label={ __( 'Description Alignment', 'wpmozo-blocks-and-addons') }
                        onChange={ ( newValue ) => setAttributes( { contentAlign: newValue } ) }
                        value={ attributes.contentAlign }
                    />

                    <BaseControl className="wpmozo-button-tabs-wrap" >    
                        <ButtonGroup>
                            <Button
                                className="wpmozo-button-tabs-btn"
                                isPressed={ ( 'normal' === descType ) ? true : false }
                                onClick={ () => setDescType( 'normal' ) }
                            >
                                { __( 'Normal', 'wpmozo-blocks-and-addons' ) }
                            </Button>
                            <Button 
                                className="wpmozo-button-tabs-btn"
                                isPressed={ ( 'hover' === descType ) ? true : false }
                                onClick={ () => setDescType( 'hover' ) }
                            >
                                { __( 'Hover', 'wpmozo-blocks-and-addons' ) }
                            </Button>
                        </ButtonGroup>
                        { 'normal' === descType &&
                            <>
                                <WpmozoColorPicker
                                    ColorKey="content"
                                    props={props}
                                    ColorTypes={[
                                        {
                                            key: 'Color',
                                            label: __( 'Text Color', 'wpmozo-blocks-and-addons' ),
                                        }
                                    ]}
                                />
                                <WpmozoTypography
                                    TypographyKey="description"
                                    props={props}
                                />
                            </>
                        }
                        { 'hover' === descType &&
                            <>
                                <WpmozoColorPicker
                                    ColorKey="contentHover"
                                    props={props}
                                    ColorTypes={[
                                        {
                                            key: 'Color',
                                            label: __( 'Text Color', 'wpmozo-blocks-and-addons' ),
                                        }
                                    ]}
                                />
                                <WpmozoTypography
                                    TypographyKey="descriptionHover"
                                    props={props}
                                />
                            </>
                        }
                    </BaseControl>
                </PanelBody>
                <PanelBody title={ __( 'Content Styling', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={false}>
                    <BaseControl className="wpmozo-button-tabs-wrap" >
                        <ButtonGroup>
                            <Button
                                className="wpmozo-button-tabs-btn"
                                isPressed={ ( 'normal' === contentType ) ? true : false }
                                onClick={ () => setContentType( 'normal' ) }
                            >
                                { __( 'Normal', 'wpmozo-blocks-and-addons' ) }
                            </Button>
                            <Button 
                                className="wpmozo-button-tabs-btn"
                                isPressed={ ( 'hover' === contentType ) ? true : false }
                                onClick={ () => setContentType( 'hover' ) }
                            >
                                { __( 'Hover', 'wpmozo-blocks-and-addons' ) }
                            </Button>
                        </ButtonGroup>
                        { 'normal' === contentType &&
                            <>
                                <WpmozoColorPicker
                                    ColorKey="contentBackground"
                                    props={props}
                                    ColorTypes={[
                                        {
                                            key: 'Color',
                                            label: __( 'Background Color', 'wpmozo-blocks-and-addons' ),
                                        }
                                    ]}
                                />
                                <WpmozoDimensions
                                    DimensionKey='content'
                                    DimensionsTypes={{
                                        padding: true
                                    }}
                                    props={props}
                                />
                            </>
                        }
                        { 'hover' === contentType &&
                            <>
                                <WpmozoColorPicker
                                    ColorKey="contentHoverBackground"
                                    props={props}
                                    ColorTypes={[
                                        {
                                            key: 'Color',
                                            label: __( 'Background Color', 'wpmozo-blocks-and-addons' ),
                                        }
                                    ]}
                                />
                                <WpmozoDimensions
                                    DimensionKey='contentHover'
                                    DimensionsTypes={{
                                        padding: true
                                    }}
                                    props={props}
                                />
                            </>
                        }
                    </BaseControl>
                </PanelBody>
                <PanelBody title={ __( 'Icon', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={false}>
                    <WpmozoColorPicker
                        ColorKey="icon"
                        props={props}
                        ColorTypes={[
                            {
                                key: 'Color',
                                label: __( 'Icon Color', 'wpmozo-blocks-and-addons' ),
                            }
                        ]}
                    />
                    <RangeControl
                        label={ __( 'Icon Font Size', 'wpmozo-blocks-and-addons' ) }
                        value={ attributes.iconFontSize }
                        onChange={ ( newValue ) => setAttributes( { iconFontSize: newValue } ) }
                        min={ 0 }
                        step={ 1 }
                        max={ 120 }
                    />
                    <WpmozoAlignment
                        label={ __( 'Icon Alignment', 'wpmozo-blocks-and-addons') }
                        onChange={ ( newValue ) => setAttributes( { iconAlign: newValue } ) }
                        value={ attributes.iconAlign }
                    />
                    <ToggleControl
                        label={ __( 'Style Icon', 'wpmozo-blocks-and-addons' ) }
                        checked={ attributes.styleIcon }
                        onChange={ ( newValue ) => setAttributes( { styleIcon: newValue } ) }
                    />
                    <ToggleControl
                        label={ __( 'Show Icon Border', 'wpmozo-blocks-and-addons' ) }
                        checked={ attributes.showShapeBorder }
                        onChange={ ( newValue ) => setAttributes( { showShapeBorder: newValue } ) }
                    />
                    { attributes.styleIcon &&
                        <>
                            <SelectControl
                                label={__('Icon Shape', 'wpmozo-blocks-and-addons')}
                                value={attributes.iconShape}
                                options={iconShape}
                                onChange={(newValue) => setAttributes({iconShape: newValue})}
                            />
                            <WpmozoColorPicker
                                ColorKey="icon"
                                label = ""
                                props={props}
                                ColorTypes={[
                                    {
                                        key: 'Background',
                                        label: __( 'Icon Background Color', 'wpmozo-blocks-and-addons' ),
                                    }
                                ]}
                            />
                        </>
                    }
                    { attributes.showShapeBorder &&
                        <>
                            <WpmozoColorPicker
                                ColorKey="shapeBorder"
                                label = ""
                                props={props}
                                ColorTypes={[
                                    {
                                        key: 'Color',
                                        label: __( 'Border Color', 'wpmozo-blocks-and-addons' ),
                                    }
                                ]}
                            />
                        </>
                    }
                </PanelBody>
                <PanelBody title={ __( 'Button', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={false}>
                    <WpmozoColorPicker
                        ColorKey="buttonText"
                        props={props}
                        ColorTypes={[
                            {
                                key: 'Color',
                                label: __( 'Label Color', 'wpmozo-blocks-and-addons' ),
                            },
                            {
                                key: 'Background',
                                label: __( 'Label Background', 'wpmozo-blocks-and-addons' ),
                            }
                        ]}
                    />
                    <WpmozoAlignment
                        label={ __( 'Button Alignment', 'wpmozo-blocks-and-addons') }
                        onChange={ ( newValue ) => setAttributes( { buttonTextAlign: newValue } ) }
                        value={ attributes.buttonTextAlign }
                    />
                    <WpmozoTypography
                        TypographyKey="buttonText"
                        props={props}
                    />
                    <WpmozoBorder
                        BorderKey="buttonText"
                        props={props}
                    />
                    <WpmozoDimensions
                        DimensionKey='buttonDimensions'
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
