
import { 
    WpmozoRangeSize, 
    WpmozoBorder, 
    WpmozoAlignment, 
    WpmozoDimensions, 
    WpmozoColorPicker, 
    WpmozoTypography, 
    WpmozoIconpicker, 
    WpmozoMediaUploader 
} from '../../components/index';
import { __ } from "@wordpress/i18n";
import { InspectorControls } from "@wordpress/block-editor";
import { useState } from "@wordpress/element";
import { 
    PanelBody,
    SelectControl,
    RangeControl,
    ToggleControl,
    BaseControl,
    ButtonGroup,
    Button,
    TextControl,
    TextareaControl,
} from "@wordpress/components";
import preAttributes from "./attributes";

const Inspector = (props) => {

    const attributes = props.attributes,
    setAttributes = props.setAttributes,
    flipAllDirection = [
        {
            label: __( 'Top', 'wpmozo-blocks-and-addons' ),
            value: 'top',
        },
        {
            label: __( 'Bottom', 'wpmozo-blocks-and-addons' ),
            value: 'bottom',
        },
        {
            label: __( 'Left', 'wpmozo-blocks-and-addons' ),
            value: 'left',
        },
        {
            label: __( 'Right', 'wpmozo-blocks-and-addons' ),
            value: 'right',
        },
        ...( 'flip' === attributes.animationType 
            ? [
                {
                    label: __( 'Diagonal Left', 'wpmozo-blocks-and-addons' ),
                    value: 'diagonal-left',
                },
                {
                    label: __( 'Diagonal Right', 'wpmozo-blocks-and-addons' ),
                    value: 'diagonal-right',
                },
                {
                    label: __( 'Diagonal Left Inverted', 'wpmozo-blocks-and-addons' ),
                    value: 'diagonal-left-inverted',
                },
                {
                    label: __( 'Diagonal Right Inverted', 'wpmozo-blocks-and-addons' ),
                    value: 'diagonal-right-inverted',
                },
            ]
            : []
        )
    ];
    
    props = Object.assign({}, props, {preAttributes: preAttributes});

    const [ contentType, setContentType ] = useState('front'),
    [ elementType, setElementType ] = useState('front'),
    [ typographyType, setTypographyType ] = useState('title'),
    [ flipBoxType, setFlipBoxType ] = useState('front'),
    [ frontTypographyType, setFrontTypographyType ] = useState('title'),
    [ backTypographyType, setBackTypographyType ] = useState('title'),
    [ elementStyleType, setelEmentStyleType ] = useState('front'),
    [ contentAlignType, setContentAlignType ] = useState('front'),
    [ flipboxBorderType, setFlipboxBorderType ] = useState('front'),
    [ flipboxWidthType, setFlipboxWidthType ] = useState('front'),
    [ flipboxDimensionsType, setFlipboxDimensionsType ] = useState('front');

    const headingLavels = [
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

	return (
        <>
            <InspectorControls key="controls">
                <PanelBody title={ __( 'Flip Box Layout', 'wpmozo-blocks-and-addons' ) } initialOpen={false}>
                    <SelectControl
                        label={ __( 'Animation Type', 'wpmozo-blocks-and-addons' ) }
                        value={ attributes.animationType }
                        options={[
                            {
                                label: __( 'Flip', 'wpmozo-blocks-and-addons' ),
                                value: 'flip',
                            },
                            {
                                label: __( '3D Cube', 'wpmozo-blocks-and-addons' ),
                                value: 'cube',
                            }
                        ]}
                        onChange={ ( newValue ) => setAttributes( { animationType: newValue } ) }
                    />
                    <SelectControl
                        label={ __( 'Flip Direction', 'wpmozo-blocks-and-addons' ) }
                        value={ attributes.flipDirection }
                        options={ flipAllDirection }
                        onChange={ ( newValue ) => setAttributes( { flipDirection: newValue } ) }
                    />
                    { 'flip' === attributes.animationType && 
                        <>
                            <ToggleControl
                                label={ __( '3D Depth Effect', 'wpmozo-blocks-and-addons' ) }
                                checked={ attributes.depth3dEffect }
                                onChange={ ( newValue ) => setAttributes( { depth3dEffect: newValue } ) }
                            />
                            <ToggleControl
                                label={ __( 'Shake On Flip', 'wpmozo-blocks-and-addons' ) }
                                checked={ attributes.shakeOnFlip }
                                onChange={ ( newValue ) => setAttributes( { shakeOnFlip: newValue } ) }
                            />
                        </>
                    }
                    <RangeControl
                        label={ __( 'Flip Speed(in ms)', 'wpmozo-blocks-and-addons' ) }
                        value={ attributes.flipSpeed }
                        onChange={ ( newValue ) => setAttributes( { flipSpeed: newValue } ) }
                        min={ 100 }
                        step={ 100 }
                        max={ 10000 }
                    />
                </PanelBody>
                <PanelBody title={ __( 'Flip Box Content', 'wpmozo-blocks-and-addons' ) } initialOpen={false}>
                    <BaseControl
                        className="wpmozo-button-tabs-wrap"
                    >    
                        <ButtonGroup>
                            <Button
                                className="wpmozo-button-tabs-btn"
                                isPressed={ ( 'front' === contentType ) ? true : false }
                                onClick={ () => setContentType( 'front' ) }
                            >
                                { __( 'Front', 'wpmozo-blocks-and-addons' ) }
                            </Button>
                            <Button 
                                className="wpmozo-button-tabs-btn"
                                isPressed={ ( 'back' === contentType ) ? true : false }
                                onClick={ () => setContentType( 'back' ) }
                            >
                                { __( 'Back', 'wpmozo-blocks-and-addons' ) }
                            </Button>
                        </ButtonGroup>
                        { 'front' === contentType &&
                            <>
                                <TextControl
                                    label={ __( 'Title', 'wpmozo-blocks-and-addons' ) }
                                    value={ attributes.frontTitle }
                                    onChange={ ( newValue ) => setAttributes( { frontTitle: newValue } ) }
                                />
                                <TextareaControl
                                    label={ __( 'Content', 'wpmozo-blocks-and-addons' ) }
                                    onChange={ ( newValue ) => setAttributes( { frontContnet: newValue } ) }
                                    value={ attributes.frontContnet }
                                />
                            </>
                        }
                        { 'back' === contentType &&
                            <>
                                <TextControl
                                    label={ __( 'Title', 'wpmozo-blocks-and-addons' ) }
                                    value={ attributes.backTitle }
                                    onChange={ ( newValue ) => setAttributes( { backTitle: newValue } ) }
                                />
                                <TextareaControl
                                    label={ __( 'Content', 'wpmozo-blocks-and-addons' ) }
                                    onChange={ ( newValue ) => setAttributes( { backContnet: newValue } ) }
                                    value={ attributes.backContnet }
                                />
                            </>
                        }
                    </BaseControl>
                </PanelBody>
                <PanelBody title={ __( 'Flip Box Elements', 'wpmozo-blocks-and-addons' ) } initialOpen={false}>
                    <BaseControl
                        className="wpmozo-button-tabs-wrap"
                    >    
                        <ButtonGroup>
                            <Button
                                className="wpmozo-button-tabs-btn"
                                isPressed={ ( 'front' === elementType ) ? true : false }
                                onClick={ () => setElementType( 'front' ) }
                            >
                                { __( 'Front', 'wpmozo-blocks-and-addons' ) }
                            </Button>
                            <Button 
                                className="wpmozo-button-tabs-btn"
                                isPressed={ ( 'back' === elementType ) ? true : false }
                                onClick={ () => setElementType( 'back' ) }
                            >
                                { __( 'Back', 'wpmozo-blocks-and-addons' ) }
                            </Button>
                        </ButtonGroup>
                        { 'front' === elementType &&
                            <>
                                <SelectControl
                                    label={ __( 'Element Type', 'wpmozo-blocks-and-addons' ) }
                                    value={ attributes.frontElType }
                                    options={[
                                        {
                                            label: __( 'None', 'wpmozo-blocks-and-addons' ),
                                            value: 'none',
                                        },
                                        {
                                            label: __( 'Icon', 'wpmozo-blocks-and-addons' ),
                                            value: 'icon',
                                        },
                                        {
                                            label: __( 'Image', 'wpmozo-blocks-and-addons' ),
                                            value: 'image',
                                        }
                                    ]}
                                    onChange={ ( newValue ) => setAttributes( { frontElType: newValue } ) }
                                />
                                { 'icon' === attributes.frontElType &&
                                    <WpmozoIconpicker
                                        label={ __( 'Icon', 'wpmozo-blocks-and-addons' ) }
                                        iconPickerKey='frontElIcon'
                                        props={ props }
                                        value={ attributes.frontElIcon }
                                        onChange={ ( newValue ) => setAttributes( { frontElIcon: newValue } ) }
                                    />
                                }
                                { 'image' === attributes.frontElType &&
                                    <WpmozoMediaUploader 
                                        attrKye="frontElImage" 
                                        props={props} 
                                    />
                                }
                            </>
                        }
                        { 'back' === elementType &&
                            <>
                                <SelectControl
                                    label={ __( 'Element Type', 'wpmozo-blocks-and-addons' ) }
                                    value={ attributes.backElType }
                                    options={[
                                        {
                                            label: __( 'None', 'wpmozo-blocks-and-addons' ),
                                            value: 'none',
                                        },
                                        {
                                            label: __( 'Icon', 'wpmozo-blocks-and-addons' ),
                                            value: 'icon',
                                        },
                                        {
                                            label: __( 'Image', 'wpmozo-blocks-and-addons' ),
                                            value: 'image',
                                        }
                                    ]}
                                    onChange={ ( newValue ) => setAttributes( { backElType: newValue } ) }
                                />
                                { 'icon' === attributes.backElType &&
                                    <WpmozoIconpicker
                                        label={ __( 'Icon', 'wpmozo-blocks-and-addons' ) }
                                        iconPickerKey='backElIcon'
                                        props={ props }
                                        value={ attributes.backElIcon }
                                        onChange={ ( newValue ) => setAttributes( { backElIcon: newValue } ) }
                                    />
                                }
                                { 'image' === attributes.backElType &&
                                    <WpmozoMediaUploader 
                                        attrKye="backElImage" 
                                        props={props} 
                                    />
                                }
                                <ToggleControl
                                    label={ __( 'Show Button', 'wpmozo-blocks-and-addons' ) }
                                    checked={ attributes.backHasButton }
                                    onChange={ ( newValue ) => setAttributes( { backHasButton: newValue } ) }
                                />
                                { attributes.backHasButton &&
                                    <>
                                        <TextControl
                                            label={ __( 'Button Text', 'wpmozo-blocks-and-addons' ) }
                                            value={ attributes.backBtnText }
                                            onChange={ ( newValue ) => setAttributes( { backBtnText: newValue } ) }
                                        />
                                        <TextControl
                                            label={ __( 'Button Url', 'wpmozo-blocks-and-addons' ) }
                                            value={ attributes.backBtnUrl }
                                            onChange={ ( newValue ) => setAttributes( { backBtnUrl: newValue } ) }
                                        />
                                        <WpmozoIconpicker
                                            label={ __( 'Button Icon', 'wpmozo-blocks-and-addons' ) }
                                            iconPickerKey='backBtnIcon'
                                            props={ props }
                                            value={ attributes.backBtnIcon }
                                            onChange={ ( newValue ) => setAttributes( { backBtnIcon: newValue } ) }
                                        />
                                        <SelectControl
                                            label={ __( 'Element Type', 'wpmozo-blocks-and-addons' ) }
                                            value={ attributes.backBtnIconPosition }
                                            options={[
                                                {
                                                    label: __( 'Before', 'wpmozo-blocks-and-addons' ),
                                                    value: 'before',
                                                },
                                                {
                                                    label: __( 'After', 'wpmozo-blocks-and-addons' ),
                                                    value: 'after',
                                                },
                                            ]}
                                            onChange={ ( newValue ) => setAttributes( { backBtnIconPosition: newValue } ) }
                                        />
                                        <ToggleControl
                                            label={ __( 'Show Icon On Hover', 'wpmozo-blocks-and-addons' ) }
                                            checked={ attributes.backBtnIconOnHover }
                                            onChange={ ( newValue ) => setAttributes( { backBtnIconOnHover: newValue } ) }
                                        />
                                    </>
                                }
                            </>
                        }
                    </BaseControl>
                </PanelBody>
           	</InspectorControls>
            <InspectorControls key="styles" group="styles">
                <PanelBody title={ __( 'Global Styling', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={false}>
                    <WpmozoRangeSize
                        label={ __( 'Content Width', 'wpmozo-blocks-and-addons') }
                        rangeSizeKey='flipboxWidth'
                        props={props}
                    />
                    <WpmozoColorPicker
                        ColorKey="global"
                        props={props}
                        ColorTypes={[ 
                            {
                                key: 'TitleColor',
                                label: __( 'Title Color', 'wpmozo-blocks-and-addons' ),
                            },
                            {
                                key: 'ContentColor',
                                label: __( 'Content Color', 'wpmozo-blocks-and-addons' ),
                            } 
                        ]}
                    />
                    <BaseControl
                        className="wpmozo-button-tabs-wrap"
                    >    
                        <ButtonGroup>
                            <Button
                                className="wpmozo-button-tabs-btn"
                                isPressed={ ( 'title' === typographyType ) ? true : false }
                                onClick={ () => setTypographyType( 'title' ) }
                            >
                                { __( 'Title', 'wpmozo-blocks-and-addons' ) }
                            </Button>
                            <Button 
                                className="wpmozo-button-tabs-btn"
                                isPressed={ ( 'content' === typographyType ) ? true : false }
                                onClick={ () => setTypographyType( 'content' ) }
                            >
                                { __( 'Content', 'wpmozo-blocks-and-addons' ) }
                            </Button>
                        </ButtonGroup>
                        { 'title' === typographyType &&
                            <WpmozoTypography
                                TypographyKey="globalTitle"
                                props={props}
                            />
                        }
                        { 'content' === typographyType &&
                            <WpmozoTypography
                                TypographyKey="globalContent"
                                props={props}
                            />
                        }
                    </BaseControl>
                </PanelBody>
                <PanelBody title={ __( 'FlipBox Style', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={false}>
                    <BaseControl
                        className="wpmozo-button-tabs-wrap"
                    >    
                        <ButtonGroup>
                            <Button
                                className="wpmozo-button-tabs-btn"
                                isPressed={ ( 'front' === flipBoxType ) ? true : false }
                                onClick={ () => setFlipBoxType( 'front' ) }
                            >
                                { __( 'Front', 'wpmozo-blocks-and-addons' ) }
                            </Button>
                            <Button 
                                className="wpmozo-button-tabs-btn"
                                isPressed={ ( 'back' === flipBoxType ) ? true : false }
                                onClick={ () => setFlipBoxType( 'back' ) }
                            >
                                { __( 'Back', 'wpmozo-blocks-and-addons' ) }
                            </Button>
                        </ButtonGroup>
                        { 'front' === flipBoxType &&
                            <>
                                <BaseControl
                                    label={ __( 'Heading Lavel', 'wpmozo-blocks-and-addons' ) }
                                >    
                                    <ButtonGroup>
                                        {headingLavels.map((item, key) => (
                                            <Button
                                                key={ 'front-label-'+item.value }
                                                isPressed={ ( item.value === attributes.frontHeadingLavel ) ? true : false }
                                                onClick={ ( newValue ) => setAttributes( { frontHeadingLavel: item.value } ) }
                                            >
                                                { item.label }
                                            </Button>
                                        ))}
                                    </ButtonGroup>
                                </BaseControl>
                                <WpmozoColorPicker
                                    ColorKey="front"
                                    props={props}
                                    ColorTypes={[ 
                                        {
                                            key: 'TitleColor',
                                            label: __( 'Title Color', 'wpmozo-blocks-and-addons' ),
                                        },
                                        {
                                            key: 'ContentColor',
                                            label: __( 'Content Color', 'wpmozo-blocks-and-addons' ),
                                        },
                                        {
                                            key: 'BackgroundColor',
                                            label: __( 'Background Color', 'wpmozo-blocks-and-addons' ),
                                        } 
                                    ]}
                                />
                                <BaseControl
                                    className="wpmozo-button-tabs-wrap"
                                >    
                                    <ButtonGroup>
                                        <Button
                                            className="wpmozo-button-tabs-btn"
                                            isPressed={ ( 'title' === frontTypographyType ) ? true : false }
                                            onClick={ () => setFrontTypographyType( 'title' ) }
                                        >
                                            { __( 'Title', 'wpmozo-blocks-and-addons' ) }
                                        </Button>
                                        <Button 
                                            className="wpmozo-button-tabs-btn"
                                            isPressed={ ( 'content' === frontTypographyType ) ? true : false }
                                            onClick={ () => setFrontTypographyType( 'content' ) }
                                        >
                                            { __( 'Content', 'wpmozo-blocks-and-addons' ) }
                                        </Button>
                                    </ButtonGroup>
                                    { 'title' === frontTypographyType &&
                                        <WpmozoTypography
                                            TypographyKey="frontTitle"
                                            props={props}
                                        />
                                    }
                                    { 'content' === frontTypographyType &&
                                        <WpmozoTypography
                                            TypographyKey="frontContent"
                                            props={props}
                                        />
                                    }
                                </BaseControl>
                            </>
                        }
                        { 'back' === flipBoxType &&
                            <>
                                <BaseControl
                                    label={ __( 'Heading Lavel', 'wpmozo-blocks-and-addons' ) }
                                >    
                                    <ButtonGroup>
                                        {headingLavels.map((item, key) => (
                                            <Button
                                                key={ 'back-label-'+item.value }
                                                isPressed={ ( item.value === attributes.backHeadingLavel ) ? true : false }
                                                onClick={ ( newValue ) => setAttributes( { backHeadingLavel: item.value } ) }
                                            >
                                                { item.label }
                                            </Button>
                                        ))}
                                    </ButtonGroup>
                                </BaseControl>
                                <WpmozoColorPicker
                                    ColorKey="back"
                                    props={props}
                                    ColorTypes={[ 
                                        {
                                            key: 'TitleColor',
                                            label: __( 'Title Color', 'wpmozo-blocks-and-addons' ),
                                        },
                                        {
                                            key: 'ContentColor',
                                            label: __( 'Content Color', 'wpmozo-blocks-and-addons' ),
                                        },
                                        {
                                            key: 'BackgroundColor',
                                            label: __( 'Background Color', 'wpmozo-blocks-and-addons' ),
                                        }
                                    ]}
                                />
                                <BaseControl
                                    className="wpmozo-button-tabs-wrap"
                                >    
                                    <ButtonGroup>
                                        <Button
                                            className="wpmozo-button-tabs-btn"
                                            isPressed={ ( 'title' === backTypographyType ) ? true : false }
                                            onClick={ () => setBackTypographyType( 'title' ) }
                                        >
                                            { __( 'Title', 'wpmozo-blocks-and-addons' ) }
                                        </Button>
                                        <Button 
                                            className="wpmozo-button-tabs-btn"
                                            isPressed={ ( 'content' === backTypographyType ) ? true : false }
                                            onClick={ () => setBackTypographyType( 'content' ) }
                                        >
                                            { __( 'Content', 'wpmozo-blocks-and-addons' ) }
                                        </Button>
                                    </ButtonGroup>
                                    { 'title' === backTypographyType &&
                                        <WpmozoTypography
                                            TypographyKey="backTitle"
                                            props={props}
                                        />
                                    }
                                    { 'content' === backTypographyType &&
                                        <WpmozoTypography
                                            TypographyKey="backContent"
                                            props={props}
                                        />
                                    }
                                </BaseControl>
                            </>
                        }
                    </BaseControl>
                </PanelBody>
                <PanelBody title={ __( 'FlipBox Image/Icon Style', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={false}>
                    <BaseControl
                        className="wpmozo-button-tabs-wrap"
                    >    
                        <ButtonGroup>
                            <Button
                                className="wpmozo-button-tabs-btn"
                                isPressed={ ( 'front' === elementStyleType ) ? true : false }
                                onClick={ () => setelEmentStyleType( 'front' ) }
                            >
                                { __( 'Front', 'wpmozo-blocks-and-addons' ) }
                            </Button>
                            <Button 
                                className="wpmozo-button-tabs-btn"
                                isPressed={ ( 'back' === elementStyleType ) ? true : false }
                                onClick={ () => setelEmentStyleType( 'back' ) }
                            >
                                { __( 'Back', 'wpmozo-blocks-and-addons' ) }
                            </Button>
                        </ButtonGroup>
                        { 'front' === elementStyleType &&
                            <>
                                { 'icon' === attributes.frontElType &&
                                    <>
                                        <WpmozoColorPicker  
                                            ColorKey="front"
                                            props={props}
                                            ColorTypes={[ 
                                                {
                                                    key: 'IconColor',
                                                    label: __( 'Icon Color', 'wpmozo-blocks-and-addons' ),
                                                },
                                            ]}
                                        />
                                        <WpmozoRangeSize
                                            label={ __( 'Icon Size', 'wpmozo-blocks-and-addons') }
                                            rangeSizeKey='frontIconSize'
                                            props={props}
                                        />
                                    </>
                                }
                                { 'image' === attributes.frontElType &&
                                    <>
                                        <WpmozoRangeSize
                                            label={ __( 'Front Image Width', 'wpmozo-blocks-and-addons') }
                                            rangeSizeKey='frontImageWidth'
                                            props={props}
                                        />
                                        <WpmozoAlignment
                                            label={__( 'Front Image Alignment', 'wpmozo-blocks-and-addons')}
                                            onChange={ ( newValue ) => setAttributes( { frontImageAlignment: newValue } ) }
                                            value={ attributes.frontImageAlignment }
                                        />
                                    </>
                                }
                                <SelectControl
                                    label={ __( 'Image/Icon Placment', 'wpmozo-blocks-and-addons' ) }
                                    value={ attributes.frontElementAlign }
                                    options={[
                                        {
                                            label: __( 'Top', 'wpmozo-blocks-and-addons' ),
                                            value: 'top',
                                        },
                                        {
                                            label: __( 'Left', 'wpmozo-blocks-and-addons' ),
                                            value: 'left',
                                        },
                                        {
                                            label: __( 'Right', 'wpmozo-blocks-and-addons' ),
                                            value: 'right',
                                        }
                                    ]}
                                    onChange={ ( newValue ) => setAttributes( { frontElementAlign: newValue } ) }
                                />
                                { 'icon' === attributes.frontElType &&
                                    <>
                                        <ToggleControl
                                            label={ __( 'Style Icon', 'wpmozo-blocks-and-addons' ) }
                                            checked={ attributes.frontIconStyle }
                                            onChange={ ( newValue ) => setAttributes( { frontIconStyle: newValue } ) }
                                        />
                                        { attributes.frontIconStyle &&
                                            <>
                                                <ToggleControl
                                                    label={ __( 'Display Shape Border', 'wpmozo-blocks-and-addons' ) }
                                                    checked={ attributes.frontIconHasShapeBorder }
                                                    onChange={ ( newValue ) => setAttributes( { frontIconHasShapeBorder: newValue } ) }
                                                />
                                                <SelectControl
                                                    label={ __( 'Shape', 'wpmozo-blocks-and-addons' ) }
                                                    value={ attributes.frontIconShape }
                                                    options={[
                                                        {
                                                            label: __( 'Square', 'wpmozo-blocks-and-addons' ),
                                                            value: 'square',
                                                        },
                                                        {
                                                            label: __( 'Circle', 'wpmozo-blocks-and-addons' ),
                                                            value: 'circle',
                                                        },
                                                        {
                                                            label: __( 'Hexagon', 'wpmozo-blocks-and-addons' ),
                                                            value: 'hexagon',
                                                        }
                                                    ]}
                                                    onChange={ ( newValue ) => { 
                                                        setAttributes( { frontIconShapeborderRadius: '' } )
                                                        setAttributes( { frontIconShape: newValue } ) 
                                                    }}
                                                />
                                                <WpmozoColorPicker  
                                                    ColorKey="front"
                                                    props={props}
                                                    ColorTypes={[ 
                                                        {
                                                            key: 'IconShapeBackground',
                                                            label: __( 'Shape Background Color', 'wpmozo-blocks-and-addons' ),
                                                        },
                                                    ]}
                                                />
                                                { attributes.frontIconHasShapeBorder && 'hexagon' !== attributes.frontIconShape &&
                                                    <>
                                                        <WpmozoBorder
                                                            BorderKey="frontIconShape"
                                                            props={props}
                                                            BorderTypes={ 
                                                                ( 'square' !== attributes.frontIconShape ) 
                                                                ? {border: true} 
                                                                : {border: true,radius: true} 
                                                            }
                                                        />
                                                    </>
                                                }
                                                { attributes.frontIconHasShapeBorder && 'hexagon' === attributes.frontIconShape &&
                                                    <>
                                                        <WpmozoColorPicker  
                                                            ColorKey="front"
                                                            props={props}
                                                            ColorTypes={[ 
                                                                {
                                                                    key: 'IconShapeBorderColor',
                                                                    label: __( 'Shape Border Color', 'wpmozo-blocks-and-addons' ),
                                                                },
                                                            ]}
                                                        />
                                                    </>
                                                }
                                            </>
                                        }
                                    </>
                                }
                            </>
                        }
                        { 'back' === elementStyleType &&
                            <>
                                { 'icon' === attributes.backElType &&
                                    <>
                                        <WpmozoColorPicker  
                                            ColorKey="back"
                                            props={props}
                                            ColorTypes={[ 
                                                {
                                                    key: 'IconColor',
                                                    label: __( 'Icon Color', 'wpmozo-blocks-and-addons' ),
                                                },
                                            ]}
                                        />
                                        <WpmozoRangeSize
                                            label={ __( 'Icon Size', 'wpmozo-blocks-and-addons') }
                                            rangeSizeKey='backIconSize'
                                            props={props}
                                        />
                                    </>
                                }
                                { 'image' === attributes.backElType &&
                                    <>
                                        <WpmozoRangeSize
                                            label={ __( 'Back Image Width', 'wpmozo-blocks-and-addons') }
                                            rangeSizeKey='backImageWidth'
                                            props={props}
                                        />
                                        <WpmozoAlignment
                                            label={ __( 'Front Image Alignment', 'wpmozo-blocks-and-addons') }
                                            onChange={ ( newValue ) => setAttributes( { backImageAlignment: newValue } ) }
                                            value={ attributes.backImageAlignment }
                                        />                                        
                                    </>
                                }
                                <SelectControl
                                    label={ __( 'Image/Icon Placment', 'wpmozo-blocks-and-addons' ) }
                                    value={ attributes.backElementAlign }
                                    options={[
                                        {
                                            label: __( 'Top', 'wpmozo-blocks-and-addons' ),
                                            value: 'top',
                                        },
                                        {
                                            label: __( 'Left', 'wpmozo-blocks-and-addons' ),
                                            value: 'left',
                                        },
                                        {
                                            label: __( 'Right', 'wpmozo-blocks-and-addons' ),
                                            value: 'right',
                                        }
                                    ]}
                                    onChange={ ( newValue ) => setAttributes( { backElementAlign: newValue } ) }
                                />
                                { 'icon' === attributes.backElType &&
                                    <>
                                        <ToggleControl
                                            label={ __( 'Style Icon', 'wpmozo-blocks-and-addons' ) }
                                            checked={ attributes.backIconStyle }
                                            onChange={ ( newValue ) => setAttributes( { backIconStyle: newValue } ) }
                                        />
                                        { attributes.backIconStyle &&
                                            <>
                                                <ToggleControl
                                                    label={ __( 'Display Shape Border', 'wpmozo-blocks-and-addons' ) }
                                                    checked={ attributes.backIconHasShapeBorder }
                                                    onChange={ ( newValue ) => setAttributes( { backIconHasShapeBorder: newValue } ) }
                                                />
                                                <SelectControl
                                                    label={ __( 'Shape', 'wpmozo-blocks-and-addons' ) }
                                                    value={ attributes.backIconShape }
                                                    options={[
                                                        {
                                                            label: __( 'Square', 'wpmozo-blocks-and-addons' ),
                                                            value: 'square',
                                                        },
                                                        {
                                                            label: __( 'Circle', 'wpmozo-blocks-and-addons' ),
                                                            value: 'circle',
                                                        },
                                                        {
                                                            label: __( 'Hexagon', 'wpmozo-blocks-and-addons' ),
                                                            value: 'hexagon',
                                                        }
                                                    ]}
                                                    onChange={ ( newValue ) => {
                                                        setAttributes( { backIconShapeborderRadius: '' } )
                                                        setAttributes( { backIconShape: newValue } ) 
                                                    }}
                                                />
                                                <WpmozoColorPicker  
                                                    ColorKey="back"
                                                    props={props}
                                                    ColorTypes={[ 
                                                        {
                                                            key: 'IconShapeBackground',
                                                            label: __( 'Shape Background Color', 'wpmozo-blocks-and-addons' ),
                                                        },
                                                    ]}
                                                />
                                                { attributes.backIconHasShapeBorder && 'hexagon' !== attributes.backIconShape && 
                                                    <>
                                                        <WpmozoBorder
                                                            BorderKey="backIconShape"
                                                            props={props}
                                                            BorderTypes={ 
                                                                ( 'square' !== attributes.backIconShape ) 
                                                                ? {border: true} 
                                                                : {border: true,radius: true} 
                                                            }
                                                        />
                                                    </>
                                                }
                                                { attributes.backIconHasShapeBorder && 'hexagon' === attributes.backIconShape &&
                                                    <>
                                                        <WpmozoColorPicker  
                                                            ColorKey="back"
                                                            props={props}
                                                            ColorTypes={[ 
                                                                {
                                                                    key: 'IconShapeBorderColor',
                                                                    label: __( 'Shape Border Color', 'wpmozo-blocks-and-addons' ),
                                                                },
                                                            ]}
                                                        />
                                                    </>
                                                }
                                            </>
                                        }
                                    </>
                                }
                            </>
                        }
                    </BaseControl>
                </PanelBody>
                <PanelBody title={ __( 'FlipBox Content Alignment', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={false}>
                    <BaseControl
                        className="wpmozo-button-tabs-wrap"
                    >    
                        <ButtonGroup>
                            <Button
                                className="wpmozo-button-tabs-btn"
                                isPressed={ ( 'front' === contentAlignType ) ? true : false }
                                onClick={ () => setContentAlignType( 'front' ) }
                            >
                                { __( 'Front', 'wpmozo-blocks-and-addons' ) }
                            </Button>
                            <Button 
                                className="wpmozo-button-tabs-btn"
                                isPressed={ ( 'back' === contentAlignType ) ? true : false }
                                onClick={ () => setContentAlignType( 'back' ) }
                            >
                                { __( 'Back', 'wpmozo-blocks-and-addons' ) }
                            </Button>
                        </ButtonGroup>
                        { 'front' === contentAlignType &&
                            <>
                                <WpmozoAlignment
                                    label={__( 'Content Alignment', 'wpmozo-blocks-and-addons')}
                                    onChange={ ( newValue ) => setAttributes( { frontContentHorAlignment: newValue } ) }
                                    value={ attributes.frontContentHorAlignment }
                                />
                                <WpmozoAlignment
                                    type="vertical"
                                    label={__( 'Vertical Alignment', 'wpmozo-blocks-and-addons')}
                                    onChange={ ( newValue ) => setAttributes( { frontContentVerAlignment: newValue } ) }
                                    value={ attributes.frontContentVerAlignment }
                                />
                            </>
                        }
                        { 'back' === contentAlignType &&
                            <>
                                <WpmozoAlignment
                                    label={__( 'Content Alignment', 'wpmozo-blocks-and-addons')}
                                    onChange={ ( newValue ) => setAttributes( { backContentHorAlignment: newValue } ) }
                                    value={ attributes.backContentHorAlignment }
                                />
                                <WpmozoAlignment
                                    type="vertical"
                                    label={__( 'Vertical Alignment', 'wpmozo-blocks-and-addons')}
                                    onChange={ ( newValue ) => setAttributes( { backContentVerAlignment: newValue } ) }
                                    value={ attributes.backContentVerAlignment }
                                />
                            </>
                        }
                    </BaseControl>
                </PanelBody>
                <PanelBody title={ __( 'FlipBox Border', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={false}>
                    <BaseControl
                        className="wpmozo-button-tabs-wrap"
                    >    
                        <ButtonGroup>
                            <Button
                                className="wpmozo-button-tabs-btn"
                                isPressed={ ( 'front' === flipboxBorderType ) ? true : false }
                                onClick={ () => setFlipboxBorderType( 'front' ) }
                            >
                                { __( 'Front', 'wpmozo-blocks-and-addons' ) }
                            </Button>
                            <Button 
                                className="wpmozo-button-tabs-btn"
                                isPressed={ ( 'back' === flipboxBorderType ) ? true : false }
                                onClick={ () => setFlipboxBorderType( 'back' ) }
                            >
                                { __( 'Back', 'wpmozo-blocks-and-addons' ) }
                            </Button>
                        </ButtonGroup>
                        { 'front' === flipboxBorderType &&
                            <WpmozoBorder
                                BorderKey="frontFlipbox"
                                props={props}
                            />
                        }
                        { 'back' === flipboxBorderType &&
                            <WpmozoBorder
                                BorderKey="backFlipbox"
                                props={props}
                            />
                        }
                    </BaseControl>
                </PanelBody>
                <PanelBody title={ __( 'Flip Box Elements', 'wpmozo-blocks-and-addons' ) } initialOpen={false}>
                    <BaseControl
                        className="wpmozo-button-tabs-wrap"
                    >    
                        <ButtonGroup>
                            <Button
                                className="wpmozo-button-tabs-btn"
                                isPressed={ ( 'front' === elementType ) ? true : false }
                                onClick={ () => setElementType( 'front' ) }
                            >
                                { __( 'Front', 'wpmozo-blocks-and-addons' ) }
                            </Button>
                            <Button 
                                className="wpmozo-button-tabs-btn"
                                isPressed={ ( 'back' === elementType ) ? true : false }
                                onClick={ () => setElementType( 'back' ) }
                            >
                                { __( 'Back', 'wpmozo-blocks-and-addons' ) }
                            </Button>
                        </ButtonGroup>
                        { 'front' === elementType &&
                            <>
                                <SelectControl
                                    label={ __( 'Element Type', 'wpmozo-blocks-and-addons' ) }
                                    value={ attributes.frontElType }
                                    options={[
                                        {
                                            label: __( 'None', 'wpmozo-blocks-and-addons' ),
                                            value: 'none',
                                        },
                                        {
                                            label: __( 'Icon', 'wpmozo-blocks-and-addons' ),
                                            value: 'icon',
                                        },
                                        {
                                            label: __( 'Image', 'wpmozo-blocks-and-addons' ),
                                            value: 'image',
                                        }
                                    ]}
                                    onChange={ ( newValue ) => setAttributes( { frontElType: newValue } ) }
                                />
                                { 'icon' === attributes.frontElType &&
                                    <WpmozoIconpicker
                                        label={ __( 'Icon', 'wpmozo-blocks-and-addons' ) }
                                        iconPickerKey='frontElIcon'
                                        props={ props }
                                        value={ attributes.frontElIcon }
                                        onChange={ ( newValue ) => setAttributes( { frontElIcon: newValue } ) }
                                    />
                                }
                                { 'image' === attributes.frontElType &&
                                    <WpmozoMediaUploader 
                                        attrKye="frontElImage" 
                                        props={props} 
                                    />
                                }
                            </>
                        }
                        { 'back' === elementType &&
                            <>
                                <SelectControl
                                    label={ __( 'Element Type', 'wpmozo-blocks-and-addons' ) }
                                    value={ attributes.backElType }
                                    options={[
                                        {
                                            label: __( 'None', 'wpmozo-blocks-and-addons' ),
                                            value: 'none',
                                        },
                                        {
                                            label: __( 'Icon', 'wpmozo-blocks-and-addons' ),
                                            value: 'icon',
                                        },
                                        {
                                            label: __( 'Image', 'wpmozo-blocks-and-addons' ),
                                            value: 'image',
                                        }
                                    ]}
                                    onChange={ ( newValue ) => setAttributes( { backElType: newValue } ) }
                                />
                                { 'icon' === attributes.backElType &&
                                    <WpmozoIconpicker
                                        label={ __( 'Icon', 'wpmozo-blocks-and-addons' ) }
                                        iconPickerKey='backElIcon'
                                        props={ props }
                                        value={ attributes.backElIcon }
                                        onChange={ ( newValue ) => setAttributes( { backElIcon: newValue } ) }
                                    />
                                }
                                { 'image' === attributes.backElType &&
                                    <WpmozoMediaUploader 
                                        attrKye="backElImage" 
                                        props={props} 
                                    />
                                }
                                <ToggleControl
                                    label={ __( 'Show Button', 'wpmozo-blocks-and-addons' ) }
                                    checked={ attributes.backHasButton }
                                    onChange={ ( newValue ) => setAttributes( { backHasButton: newValue } ) }
                                />
                                { attributes.backHasButton &&
                                    <>
                                        <TextControl
                                            label={ __( 'Button Text', 'wpmozo-blocks-and-addons' ) }
                                            value={ attributes.backBtnText }
                                            onChange={ ( newValue ) => setAttributes( { backBtnText: newValue } ) }
                                        />
                                        <TextControl
                                            label={ __( 'Button Url', 'wpmozo-blocks-and-addons' ) }
                                            value={ attributes.backBtnUrl }
                                            onChange={ ( newValue ) => setAttributes( { backBtnUrl: newValue } ) }
                                        />
                                        <WpmozoIconpicker
                                            label={ __( 'Button Icon', 'wpmozo-blocks-and-addons' ) }
                                            iconPickerKey='backBtnIcon'
                                            props={ props }
                                            value={ attributes.backBtnIcon }
                                            onChange={ ( newValue ) => setAttributes( { backBtnIcon: newValue } ) }
                                        />
                                        <SelectControl
                                            label={ __( 'Element Type', 'wpmozo-blocks-and-addons' ) }
                                            value={ attributes.backBtnIconPosition }
                                            options={[
                                                {
                                                    label: __( 'Before', 'wpmozo-blocks-and-addons' ),
                                                    value: 'before',
                                                },
                                                {
                                                    label: __( 'After', 'wpmozo-blocks-and-addons' ),
                                                    value: 'after',
                                                },
                                            ]}
                                            onChange={ ( newValue ) => setAttributes( { backBtnIconPosition: newValue } ) }
                                        />
                                        <ToggleControl
                                            label={ __( 'Show Icon On Hover', 'wpmozo-blocks-and-addons' ) }
                                            checked={ attributes.backBtnIconOnHover }
                                            onChange={ ( newValue ) => setAttributes( { backBtnIconOnHover: newValue } ) }
                                        />
                                    </>
                                }
                            </>
                        }
                    </BaseControl>
                </PanelBody>
                <PanelBody title={ __( 'FlipBox Padding', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={false}>
                    <BaseControl
                        className="wpmozo-button-tabs-wrap"
                    >    
                        <ButtonGroup>
                            <Button
                                className="wpmozo-button-tabs-btn"
                                isPressed={ ( 'front' === flipboxDimensionsType ) ? true : false }
                                onClick={ () => setFlipboxDimensionsType( 'front' ) }
                            >
                                { __( 'Front', 'wpmozo-blocks-and-addons' ) }
                            </Button>
                            <Button 
                                className="wpmozo-button-tabs-btn"
                                isPressed={ ( 'back' === flipboxDimensionsType ) ? true : false }
                                onClick={ () => setFlipboxDimensionsType( 'back' ) }
                            >
                                { __( 'Back', 'wpmozo-blocks-and-addons' ) }
                            </Button>
                        </ButtonGroup>
                        { 'front' === flipboxDimensionsType &&
                            <WpmozoDimensions
                                DimensionKey='frontDimensions'
                                DimensionsTypes={{
                                    padding: true,
                                }}
                                props={props}
                            />
                        }
                        { 'back' === flipboxDimensionsType &&
                            <WpmozoDimensions
                                DimensionKey='backDimensions'
                                DimensionsTypes={{
                                    padding: true,
                                }}
                                props={props}
                            />
                        }
                    </BaseControl>
                </PanelBody>
                { attributes.backHasButton &&
                    <>
                        <PanelBody title={ __( 'FlipBox Button', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={false}>
                            <WpmozoColorPicker  
                                ColorKey="back"
                                props={props}
                                ColorTypes={[ 
                                    {
                                        key: 'BtnColor',
                                        label: __( 'Color', 'wpmozo-blocks-and-addons' ),
                                    },
                                    {
                                        key: 'BtnBackground',
                                        label: __( 'Background', 'wpmozo-blocks-and-addons' ),
                                    },
                                ]}
                            />
                            <WpmozoTypography
                                TypographyKey="backBtn"
                                props={props}
                            />
                            <WpmozoBorder
                                BorderKey="backBtn"
                                props={props}
                            />
                            <WpmozoDimensions
                                DimensionKey='backBtnDimensions'
                                DimensionsTypes={{
                                    padding: true,
                                    margin: true,
                                }}
                                props={props}
                            />
                        </PanelBody>
                    </>
                }
            </InspectorControls>
        </>
    );

};

export default Inspector;