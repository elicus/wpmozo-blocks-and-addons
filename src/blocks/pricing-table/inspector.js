// inspector.js
import {__} from "@wordpress/i18n";
import {InspectorControls,HeightControl} from "@wordpress/block-editor";
import {useState} from "@wordpress/element";
import {
    PanelBody,
    TextControl,
    BaseControl,
    ButtonGroup,
    Button,
    ToggleControl,
    SelectControl,
    Icon
} from "@wordpress/components";

import {
    WpmozoAlignment,
    WpmozoColorPicker,
    WpmozoTypography,
    WpmozoMediaUploader,
    WpmozoIconpicker,
    WpmozoDimensions, WpmozoRangeSize
} from '../../common/components';

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
        currencySymbol = [
            {
                label: __('None', 'wpmozo-blocks-and-addons'),
                value: ''
            },
            {
                label: __('$ Dollar', 'wpmozo-blocks-and-addons'),
                value: '$'
            },
            {
                label: __('€ Euro', 'wpmozo-blocks-and-addons'),
                value: '€'
            },
            {
                label: __('฿ Baht', 'wpmozo-blocks-and-addons'),
                value: '฿'
            },
            {
                label: __('₣ Franc', 'wpmozo-blocks-and-addons'),
                value: '₣'
            },
            {
                label: __('ƒ Guilder', 'wpmozo-blocks-and-addons'),
                value: 'ƒ'
            },
            {
                label: __('kr Krona', 'wpmozo-blocks-and-addons'),
                value: 'kr'
            },
            {
                label: __('₤ Lira', 'wpmozo-blocks-and-addons'),
                value: '₤'
            },
            {
                label: __('₧ Peseta', 'wpmozo-blocks-and-addons'),
                value: '₧'
            },
            {
                label: __('₱ Peso', 'wpmozo-blocks-and-addons'),
                value: '₱'
            },
            {
                label: __('£ Pound Sterling', 'wpmozo-blocks-and-addons'),
                value: '£'
            },
            {
                label: __('R$ Real', 'wpmozo-blocks-and-addons'),
                value: 'R$'
            },
            {
                label: __('₽ Ruble', 'wpmozo-blocks-and-addons'),
                value: '₽'
            },
            {
                label: __('₨ Rupee', 'wpmozo-blocks-and-addons'),
                value: '₨'
            },
            {
                label: __('₹ Rupee ( Indian )', 'wpmozo-blocks-and-addons'),
                value: '₹'
            },
            {
                label: __('₪ Shekel', 'wpmozo-blocks-and-addons'),
                value: '₪'
            },
            {
                label: __('¥ Yen/Yuan', 'wpmozo-blocks-and-addons'),
                value: '¥'
            },
            {
                label: __('₩ Won', 'wpmozo-blocks-and-addons'),
                value: '₩'
            },
            {
                label: __('Custom', 'wpmozo-blocks-and-addons'),
                value: 'custom'
            },


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
        ],
        borderSelection = [
            {
                label: __('None', 'wpmozo-blocks-and-addons'),
                value: 'none'
            },
            {
                label: __('Solid', 'wpmozo-blocks-and-addons'),
                value: 'solid'
            },
            {
                label: __('Double', 'wpmozo-blocks-and-addons'),
                value: 'double'
            },
            {
                label: __('Dotted', 'wpmozo-blocks-and-addons'),
                value: 'dotted'
            },
            {
                label: __('Dashed', 'wpmozo-blocks-and-addons'),
                value: 'dashed'
            },
            {
                label: __('Groove', 'wpmozo-blocks-and-addons'),
                value: 'groove'
            }
        ];

    const [features, setBreakpoints] = useState( attributes.features );

    props = Object.assign({}, props, {preAttributes: {}});

    return (
        <>
            <InspectorControls key="controls">
                <PanelBody title={__('Header', 'wpmozo-blocks-and-addons')} initialOpen={true}>
                    <TextControl
                        label={__('Title', 'wpmozo-blocks-and-addons')}
                        value={attributes.title}
                        onChange={(newValue) => setAttributes({title: newValue})}
                        __next40pxDefaultSize={true}
                        __nextHasNoMarginBottom={true}
                    />
                    <TextControl
                        label={__('Subtitle', 'wpmozo-blocks-and-addons')}
                        onChange={(newValue) => setAttributes({subtitle: newValue})}
                        value={attributes.subtitle}
                        __next40pxDefaultSize={true}
                        __nextHasNoMarginBottom={true}
                    />
                    <SelectControl
                        label={__('Header Graphics', 'wpmozo-blocks-and-addons')}
                        value={attributes.headerGraphics}
                        options={iconSelection}
                        onChange={(newValue) => setAttributes({headerGraphics: newValue})}
                        __next40pxDefaultSize={true}
                        __nextHasNoMarginBottom={true}
                    />
                    { attributes.headerGraphics && 'icon' === attributes.headerGraphics &&
                        <WpmozoIconpicker
                            label={__('Icon', 'wpmozo-blocks-and-addons')}
                            iconPickerKey='icon'
                            props={props}
                            value={attributes.headerIcon}
                            onChange={(newValue) => setAttributes({headerIcon: newValue})}
                        />
                    }
                    {'image' === attributes.headerGraphics &&
                        <WpmozoMediaUploader
                            attrKye="headerImage"
                            props={props}
                        />
                    }
                </PanelBody>
                <PanelBody title={__('Table Pricing', 'wpmozo-blocks-and-addons')} initialOpen={false}>
                    <SelectControl
                        label={__('Currency Symbol', 'wpmozo-blocks-and-addons')}
                        value={attributes.currencySymbol}
                        options={currencySymbol}
                        onChange={(newValue) => setAttributes({currencySymbol: newValue})}
                        __next40pxDefaultSize={true}
                        __nextHasNoMarginBottom={true}
                    />
                    { 'custom' === attributes.currencySymbol &&
                        <TextControl
                            label={__('Custom Symbol', 'wpmozo-blocks-and-addons')}
                            placeholder={ __( 'Enter Custom Symbol', 'wpmozo-blocks-and-addons' ) }
                            onChange={(newValue) => setAttributes({customSymbol: newValue})}
                            value={attributes.customSymbol}
                            __next40pxDefaultSize={true}
                            __nextHasNoMarginBottom={true}
                        />
                    }
                    <TextControl
                        label={__('Price', 'wpmozo-blocks-and-addons')}
                        placeholder={ __( 'Enter your price', 'wpmozo-blocks-and-addons' ) }
                        onChange={(newValue) => setAttributes({price: newValue})}
                        value={attributes.price}
                        __next40pxDefaultSize={true}
                        __nextHasNoMarginBottom={true}
                    />
                    <TextControl
                        label={__('Period', 'wpmozo-blocks-and-addons')}
                        placeholder={ __( 'Enter your period', 'wpmozo-blocks-and-addons' ) }
                        onChange={(newValue) => setAttributes({period: newValue})}
                        value={attributes.period}
                        __next40pxDefaultSize={true}
                        __nextHasNoMarginBottom={true}
                    />
                </PanelBody>
                <PanelBody title={__('Features', 'wpmozo-blocks-and-addons')} initialOpen={false}>
                    { (attributes.features || []).map((feature, index) => (
                        <div key={index} style={{ display: 'flex', alignItems: 'center' }}>
                            <TextControl
                                label={`Feature ${index + 1}`}
                                value={feature['list'] || ''}
                                onChange={(value) => {
                                    const newFeatures = [...(attributes.features || [])];
                                    newFeatures[index] = { ...newFeatures[index], list: value };
                                    setAttributes({ features: newFeatures });
                                }}
                                __next40pxDefaultSize={true}
                                __nextHasNoMarginBottom={true}
                            />
                            <Button
                                isDestructive
                                onClick={() => {
                                    const newFeatures = (attributes.features || []).filter((_, innerIndex) => innerIndex !== index);
                                    setAttributes({ features: newFeatures });
                                }}
                            >
                                {__('Remove', 'wpmozo-blocks-and-addons')}
                            </Button>
                        </div>
                    )) }

                    <Button style={{ marginBottom: '20px' }}
                            isPrimary
                            onClick={() => {
                                const newFeature = { list: '' }; // You can add more default fields here if needed
                                const newFeatures = [...(attributes.features || []), newFeature];
                                setAttributes({ features: newFeatures });
                            }}
                    >
                        {__('Add Item', 'wpmozo-blocks-and-addons')}
                    </Button>
                    <ToggleControl
                        label={__('Show Icon', 'wpmozo-blocks-and-addons')}
                        checked={attributes.showFeaturesIcon || false}
                        onChange={(newValue) => setAttributes({showFeaturesIcon: newValue})}
                    />
                    {attributes.showFeaturesIcon && (
                        <WpmozoIconpicker
                            label={ __( 'Icon', 'wpmozo-blocks-and-addons' ) }
                            iconPickerKey='featuresIcon'
                            props={ props }
                            value={ attributes.featuresIcon }
                            onChange={ ( newValue ) => setAttributes( { featuresIcon: newValue } ) }
                        />
                    )}
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
                                __next40pxDefaultSize={true}
                                __nextHasNoMarginBottom={true}
                            />
                            <TextControl
                                label={__('Button Url', 'wpmozo-blocks-and-addons')}
                                onChange={(newValue) => setAttributes({buttonUrl: newValue})}
                                value={attributes.buttonUrl}
                                __next40pxDefaultSize={true}
                                __nextHasNoMarginBottom={true}
                            />
                            <BaseControl
                                label={__('Link Target', 'wpmozo-blocks-and-addons')}
                                className="wpmozo-button-tabs-wrap"
                            >
                                <ButtonGroup>
                                    <Button
                                        className="wpmozo-button-tabs-btn"
                                        isPressed={('same' === attributes.buttonLinkTarget) ? true : false}
                                        onClick={() => setAttributes({buttonLinkTarget: 'same'})}
                                        icon={<Icon icon="admin-links"/>}
                                        label={__('Same Window', 'wpmozo-blocks-and-addons')}
                                    />
                                    <Button
                                        className="wpmozo-button-tabs-btn"
                                        isPressed={('external' === attributes.buttonLinkTarget) ? true : false}
                                        onClick={() => setAttributes({buttonLinkTarget: 'external'})}
                                        icon={<Icon icon="external"/>}
                                        label={__('External', 'wpmozo-blocks-and-addons')}
                                    />
                                </ButtonGroup>
                            </BaseControl>
                            <SelectControl
                                label={__('Button Icon Type', 'wpmozo-blocks-and-addons')}
                                value={attributes.buttonIconType}
                                options={iconSelection}
                                onChange={(newValue) => setAttributes({buttonIconType: newValue})}
                                __next40pxDefaultSize={true}
                                __nextHasNoMarginBottom={true}
                            />
                            {'none' !== attributes.buttonIconType &&
                                <>
                                    {'icon' === attributes.buttonIconType &&
                                        <WpmozoIconpicker
                                            label={__('Icon', 'wpmozo-blocks-and-addons')}
                                            iconPickerKey='buttonIcon'
                                            props={props}
                                            value={attributes.buttonIcon}
                                            onChange={(newValue) => setAttributes({buttonIcon: newValue})}
                                        />
                                    }
                                    {'image' === attributes.buttonIconType &&
                                        <WpmozoMediaUploader
                                            attrKye="buttonIconImage"
                                            props={props}
                                        />
                                    }
                                    <BaseControl
                                        label={__('Button Icon Position', 'wpmozo-blocks-and-addons')}
                                        className="wpmozo-button-tabs-wrap"
                                    >
                                        <ButtonGroup>
                                            <Button
                                                className="wpmozo-button-tabs-btn"
                                                isPressed={('icon-before' === attributes.buttonIconPosition) ? true : false}
                                                onClick={() => setAttributes({buttonIconPosition: 'icon-before'})}
                                                label={__('Before', 'wpmozo-blocks-and-addons')}
                                            >
                                                {__('Before', 'wpmozo-blocks-and-addons')}
                                            </Button>
                                            <Button
                                                className="wpmozo-button-tabs-btn"
                                                isPressed={('icon-after' === attributes.buttonIconPosition) ? true : false}
                                                onClick={() => setAttributes({buttonIconPosition: 'icon-after'})}
                                                label={__('After', 'wpmozo-blocks-and-addons')}
                                            >
                                                {__('After', 'wpmozo-blocks-and-addons')}
                                            </Button>
                                        </ButtonGroup>
                                    </BaseControl>
                                    <ToggleControl
                                        label={__('Show Icon On Hover', 'wpmozo-blocks-and-addons')}
                                        checked={attributes.showIconOnHover}
                                        onChange={(newValue) => setAttributes({showIconOnHover: newValue})}
                                    />
                                </>
                            }

                        </>
                    }
                </PanelBody>
            </InspectorControls>
            <InspectorControls key="styles" group="styles">
                <PanelBody title={ __( 'Global Style', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={open}>
                    <WpmozoColorPicker
                        ColorKey="background"
                        props={props}
                        ColorTypes={[
                            {
                                key: 'Color',
                                label: __( 'Background Color', 'wpmozo-blocks-and-addons' ),
                            }
                        ]}
                    />
                    <WpmozoAlignment
                        label={ __( 'Alignment', 'wpmozo-blocks-and-addons') }
                        onChange={ ( newValue ) => setAttributes( { align: newValue } ) }
                        value={ attributes.align }
                    />
                    <WpmozoDimensions
                        DimensionKey='mainDimensions'
                        DimensionsTypes={{
                            padding: true,
                            margin: true,
                        }}
                        props={props}
                    />
                </PanelBody>
                <PanelBody title={ __( 'Title', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={false}>
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
                    <BaseControl
                        label={ __( 'Heading Lavel', 'wpmozo-blocks-and-addons' ) }
                    >
                        <ButtonGroup>
                            {headingLavels.map((item, key) => (
                                <Button
                                    key={`heading-level-${item.value}`}
                                    isPressed={ ( item.value === attributes.titleLavel ) ? true : false }
                                    onClick={ ( newValue ) => setAttributes( { titleLavel: item.value } ) }
                                >
                                    { item.label }
                                </Button>
                            ))}
                        </ButtonGroup>
                    </BaseControl>
                    <WpmozoAlignment
                        label={ __( 'Title Alignment', 'wpmozo-blocks-and-addons') }
                        onChange={ ( newValue ) => setAttributes( { titleAlign: newValue } ) }
                        value={ attributes.titleAlign }
                    />
                    <WpmozoTypography
                        TypographyKey="title"
                        props={props}
                    />
                </PanelBody>
                <PanelBody title={ __( 'Subtitle', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={false}>
                    <WpmozoColorPicker
                        ColorKey="subTitle"
                        props={props}
                        ColorTypes={[
                            {
                                key: 'Color',
                                label: __( 'Title Color', 'wpmozo-blocks-and-addons' ),
                            }
                        ]}
                    />
                    <WpmozoAlignment
                        label={ __( 'Title Alignment', 'wpmozo-blocks-and-addons') }
                        onChange={ ( newValue ) => setAttributes( { subTitleAlign: newValue } ) }
                        value={ attributes.subTitleAlign }
                    />
                    <WpmozoTypography
                        TypographyKey="subTitle"
                        props={props}
                    />
                </PanelBody>
                <PanelBody title={ __( 'Header Graphics', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={false}>
                    { 'icon' === attributes.headerGraphics &&
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
                    }
                    <WpmozoAlignment
                        label={ __( 'Graphics Alignment', 'wpmozo-blocks-and-addons') }
                        onChange={ ( newValue ) => setAttributes( { iconAlign: newValue } ) }
                        value={ attributes.iconAlign }
                    />
                    { 'icon' === attributes.headerGraphics &&
                        <ToggleControl
                            label={ __( 'Use Icon Font Size', 'wpmozo-blocks-and-addons' ) }
                            checked={ attributes.useIconFontSize }
                            onChange={ ( newValue ) => setAttributes( { useIconFontSize: newValue } ) }
                        />
                    }
                    { 'icon' === attributes.headerGraphics && attributes.useIconFontSize &&
                        <HeightControl
                            label={ __( 'Icon Font Size', 'wpmozo-blocks-and-addons' ) }
                            value={ attributes.iconFontSize }
                            onChange={ ( newValue ) => setAttributes( { iconFontSize: newValue } ) }
                        />
                    }
                    { 'image' === attributes.headerGraphics &&
                        <>
                            <WpmozoRangeSize
                                label={ __( 'Image Width', 'wpmozo-blocks-and-addons') }
                                rangeSizeKey='imageWidth'
                                props={props}
                            />
                            <WpmozoRangeSize
                                label={ __( 'Image Height', 'wpmozo-blocks-and-addons') }
                                rangeSizeKey='imageHeight'
                                props={props}
                            />
                        </>
                    }
                    <WpmozoDimensions
                        DimensionKey='headerGraphicsDimensions'
                        DimensionsTypes={{
                            padding: true,
                            margin: true,
                        }}
                        props={props}
                    />
                </PanelBody>
                <PanelBody title={ __( 'Pricing', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={false}>
                    <WpmozoColorPicker
                        ColorKey="currency"
                        props={props}
                        label="Currency Color"
                        ColorTypes={[
                            {
                                key: 'Color',
                                label: __( 'Currency Text Color', 'wpmozo-blocks-and-addons' ),
                            }
                        ]}
                    />
                    <WpmozoTypography
                        TypographyKey="currency"
                        props={props}
                        label="Currency Typography"
                    />
                    <WpmozoColorPicker
                        ColorKey="price"
                        props={props}
                        label="Price Color"
                        ColorTypes={[
                            {
                                key: 'Color',
                                label: __( 'Price Text Color', 'wpmozo-blocks-and-addons' ),
                            }
                        ]}
                    />
                    <WpmozoTypography
                        TypographyKey="price"
                        props={props}
                        label="Price Typography"
                    />
                    <WpmozoColorPicker
                        ColorKey="period"
                        props={props}
                        label="Period Color"
                        ColorTypes={[
                            {
                                key: 'Color',
                                label: __( 'Period Text Color', 'wpmozo-blocks-and-addons' ),
                            }
                        ]}
                    />
                    <WpmozoTypography
                        TypographyKey="period"
                        props={props}
                        label="Period Typography"
                    />
                </PanelBody>
                <PanelBody title={ __( 'Features', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={false}>
                    <WpmozoColorPicker
                        ColorKey="features"
                        props={props}
                        ColorTypes={[
                            {
                                key: 'Color',
                                label: __( 'Features Text Color', 'wpmozo-blocks-and-addons' ),
                            },
                            {
                                key: 'Background',
                                label: __( 'Features Background Color', 'wpmozo-blocks-and-addons' ),
                            }
                        ]}
                    />
                    <WpmozoAlignment
                        label={ __( 'Alignment', 'wpmozo-blocks-and-addons') }
                        onChange={ ( newValue ) => setAttributes( { feturesAlign: newValue } ) }
                        value={ attributes.feturesAlign }
                    />
                    <WpmozoColorPicker
                        ColorKey="featuresIcons"
                        props={props}
                        label="Icons Color"
                        ColorTypes={[
                            {
                                key: 'Color',
                                label: __( 'Icons Color', 'wpmozo-blocks-and-addons' ),
                            }
                        ]}
                    />
                    <WpmozoRangeSize
                        label={ __( 'Icon Spacing', 'wpmozo-blocks-and-addons') }
                        rangeSizeKey='featuresIconsSpacing'
                        props={props}
                    />
                    <WpmozoTypography
                        TypographyKey="features"
                        props={props}
                    />
                    <WpmozoDimensions
                        DimensionKey='featuresDimensions'
                        DimensionsTypes={{
                            padding: true,
                            margin: true,
                        }}
                        props={props}
                    />

                </PanelBody>
                <PanelBody title={ __( 'Button', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={false}>
                    <WpmozoAlignment
                        label={ __( 'Button Alignment', 'wpmozo-blocks-and-addons') }
                        onChange={ ( newValue ) => setAttributes( { buttonAlign: newValue } ) }
                        value={ attributes.buttonAlign }
                    />
                    <BaseControl>
                        <ButtonGroup style={{display:'flex'}}>
                            <Button style={{ flex: 1, justifyContent: 'center' }}
                                    className="wpmozo-button-tabs-btn"
                                    isPressed={('normal' === attributes.buttonStyle) ? true : false}
                                    onClick={() => setAttributes({buttonStyle: 'normal'})}
                                    label={__('Normal', 'wpmozo-blocks-and-addons')}
                            >
                                {__('Normal', 'wpmozo-blocks-and-addons')}
                            </Button>
                            <Button style={{ flex: 1, justifyContent: 'center' }}
                                    className="wpmozo-button-tabs-btn"
                                    isPressed={('hover' === attributes.buttonStyle) ? true : false}
                                    onClick={() => setAttributes({buttonStyle: 'hover'})}
                                    label={__('Hover', 'wpmozo-blocks-and-addons')}
                            >
                                {__('Hover', 'wpmozo-blocks-and-addons')}
                            </Button>
                        </ButtonGroup>
                        { 'normal' === attributes.buttonStyle && (
                            <>
                                <WpmozoColorPicker
                                    ColorKey="buttonText"
                                    label="Button Color"
                                    props={props}
                                    ColorTypes={[
                                        {
                                            key: 'Color',
                                            label: __( 'Text Color', 'wpmozo-blocks-and-addons' ),
                                        },
                                        {
                                            key: 'Background',
                                            label: __( 'Background Color', 'wpmozo-blocks-and-addons' ),
                                        }
                                    ]}
                                />
                                { 'icon' === attributes.buttonIconType && (
                                    <WpmozoColorPicker
                                        ColorKey="iconText"
                                        label="Icon Color"
                                        props={props}
                                        ColorTypes={[
                                            {
                                                key: 'Color',
                                                label: __( 'Text Color', 'wpmozo-blocks-and-addons' ),
                                            },
                                            {
                                                key: 'Background',
                                                label: __( 'Background Color', 'wpmozo-blocks-and-addons' ),
                                            }
                                        ]}
                                    />
                                )}
                                <SelectControl
                                    label={__('Border Type', 'wpmozo-blocks-and-addons')}
                                    value={attributes.borderSelection}
                                    options={borderSelection}
                                    onChange={(newValue) => setAttributes({borderSelection: newValue})}
                                    __next40pxDefaultSize={true}
                                    __nextHasNoMarginBottom={true}
                                />
                                <WpmozoRangeSize
                                    label={ __( 'Border Width', 'wpmozo-blocks-and-addons') }
                                    rangeSizeKey='borderWidth'
                                    props={props}
                                />
                                <WpmozoRangeSize
                                    label={ __( 'Border Radius', 'wpmozo-blocks-and-addons') }
                                    rangeSizeKey='borderRadius'
                                    props={props}
                                />
                                <WpmozoColorPicker
                                    ColorKey="border"
                                    label="Border Color"
                                    props={props}
                                    ColorTypes={[
                                        {
                                            key: 'Color',
                                            label: __( 'Border Color', 'wpmozo-blocks-and-addons' ),
                                        }
                                    ]}
                                />
                            </>
                        )}
                        { 'hover' === attributes.buttonStyle && (
                            <>
                                <WpmozoColorPicker
                                    ColorKey="buttonTextHover"
                                    label="Button Color"
                                    props={props}
                                    ColorTypes={[
                                        {
                                            key: 'Color',
                                            label: __( 'Text Color', 'wpmozo-blocks-and-addons' ),
                                        },
                                        {
                                            key: 'Background',
                                            label: __( 'Background Color', 'wpmozo-blocks-and-addons' ),
                                        }
                                    ]}
                                />
                                { 'icon' === attributes.buttonIconType && (
                                    <WpmozoColorPicker
                                        ColorKey="iconTextHover"
                                        label="Icon Color"
                                        props={props}
                                        ColorTypes={[
                                            {
                                                key: 'Color',
                                                label: __( 'Text Color', 'wpmozo-blocks-and-addons' ),
                                            },
                                            {
                                                key: 'Background',
                                                label: __( 'Background Color', 'wpmozo-blocks-and-addons' ),
                                            }
                                        ]}
                                    />
                                )}
                                <SelectControl
                                    label={__('Border Type', 'wpmozo-blocks-and-addons')}
                                    value={attributes.borderSelectionHover}
                                    options={borderSelection}
                                    onChange={(newValue) => setAttributes({borderSelectionHover: newValue})}
                                    __next40pxDefaultSize={true}
                                />
                                <WpmozoRangeSize
                                    label={ __( 'Border Width', 'wpmozo-blocks-and-addons') }
                                    rangeSizeKey='borderWidthHover'
                                    props={props}
                                />
                                <WpmozoRangeSize
                                    label={ __( 'Border Radius', 'wpmozo-blocks-and-addons') }
                                    rangeSizeKey='borderRadiusHover'
                                    props={props}
                                />
                                <WpmozoColorPicker
                                    ColorKey="borderHover"
                                    label="Border Color"
                                    props={props}
                                    ColorTypes={[
                                        {
                                            key: 'Color',
                                            label: __( 'Border Color', 'wpmozo-blocks-and-addons' ),
                                        }
                                    ]}
                                />
                            </>
                        )}
                    </BaseControl>
                    <WpmozoDimensions
                        DimensionKey='borderDimensions'
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
