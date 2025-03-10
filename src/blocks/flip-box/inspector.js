
import { WpmozoRangeSize, WpmozoBorder, WpmozoAlignment, WpmozoDimensions, WpmozoColorPicker, WpmozoTypography, WpmozoIconpicker, WpmozoMediaUploader } from '../../components/index';
import { __ } from "@wordpress/i18n";
import { InspectorControls, BlockVerticalAlignmentControl, BlockIcon } from "@wordpress/block-editor";
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
            label: __( 'Top', 'wpmozo-addons-lite-for-gutenberg' ),
            value: 'top',
        },
        {
            label: __( 'Bottom', 'wpmozo-addons-lite-for-gutenberg' ),
            value: 'bottom',
        },
        {
            label: __( 'Left', 'wpmozo-addons-lite-for-gutenberg' ),
            value: 'left',
        },
        {
            label: __( 'Right', 'wpmozo-addons-lite-for-gutenberg' ),
            value: 'right',
        },
        ...( 'flip' === attributes.animationType 
            ? [
                {
                    label: __( 'Diagonal Left', 'wpmozo-addons-lite-for-gutenberg' ),
                    value: 'diagonal-left',
                },
                {
                    label: __( 'Diagonal Right', 'wpmozo-addons-lite-for-gutenberg' ),
                    value: 'diagonal-right',
                },
                {
                    label: __( 'Diagonal Left Inverted', 'wpmozo-addons-lite-for-gutenberg' ),
                    value: 'diagonal-left-inverted',
                },
                {
                    label: __( 'Diagonal Right Inverted', 'wpmozo-addons-lite-for-gutenberg' ),
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
    [ flipboxBackgroundType, setFlipboxBackgroundType ] = useState('front'),
    [ flipboxWidthType, setFlipboxWidthType ] = useState('front'),
    [ flipboxDimensionsType, setFlipboxDimensionsType ] = useState('front');

    const headingLavels = [
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

	return (
        <>
            <InspectorControls key="controls">
                <PanelBody title={ __( 'Flip Box Layout', 'wpmozo-addons-lite-for-gutenberg' ) } initialOpen={false}>
                    <SelectControl
                        label={ __( 'Animation Type', 'wpmozo-addons-lite-for-gutenberg' ) }
                        value={ attributes.animationType }
                        options={[
                            {
                                label: __( 'Flip', 'wpmozo-addons-lite-for-gutenberg' ),
                                value: 'flip',
                            },
                            {
                                label: __( '3D Cube', 'wpmozo-addons-lite-for-gutenberg' ),
                                value: 'cube',
                            }
                        ]}
                        onChange={ ( newValue ) => setAttributes( { animationType: newValue } ) }
                    />
                    <SelectControl
                        label={ __( 'Flip Direction', 'wpmozo-addons-lite-for-gutenberg' ) }
                        value={ attributes.flipDirection }
                        options={ flipAllDirection }
                        onChange={ ( newValue ) => setAttributes( { flipDirection: newValue } ) }
                    />
                    { 'flip' === attributes.animationType && 
                        <>
                            <ToggleControl
                                label={ __( '3D Depth Effect', 'wpmozo-addons-lite-for-gutenberg' ) }
                                checked={ attributes.depth3dEffect }
                                onChange={ ( newValue ) => setAttributes( { depth3dEffect: newValue } ) }
                            />
                            <ToggleControl
                                label={ __( 'Shacke On Flip', 'wpmozo-addons-lite-for-gutenberg' ) }
                                checked={ attributes.shakeOnFlip }
                                onChange={ ( newValue ) => setAttributes( { shakeOnFlip: newValue } ) }
                            />
                        </>
                    }
                    <RangeControl
                        label={ __( 'Flip Speed(in ms)', 'wpmozo-addons-lite-for-gutenberg' ) }
                        value={ attributes.flipSpeed }
                        onChange={ ( newValue ) => setAttributes( { flipSpeed: newValue } ) }
                        min={ 100 }
                        step={ 100 }
                        max={ 10000 }
                    />
                </PanelBody>
                <PanelBody title={ __( 'Flip Box Content', 'wpmozo-addons-lite-for-gutenberg' ) } initialOpen={false}>
                    <BaseControl
                        className="wpmozo-button-tabs-wrap"
                    >    
                        <ButtonGroup>
                            <Button
                                className="wpmozo-button-tabs-btn"
                                isPressed={ ( 'front' === contentType ) ? true : false }
                                onClick={ () => setContentType( 'front' ) }
                            >
                                { __( 'Front', 'wpmozo-addons-lite-for-gutenberg' ) }
                            </Button>
                            <Button 
                                className="wpmozo-button-tabs-btn"
                                isPressed={ ( 'back' === contentType ) ? true : false }
                                onClick={ () => setContentType( 'back' ) }
                            >
                                { __( 'Back', 'wpmozo-addons-lite-for-gutenberg' ) }
                            </Button>
                        </ButtonGroup>
                        { 'front' === contentType &&
                            <>
                                <TextControl
                                    label={ __( 'Title', 'wpmozo-addons-lite-for-gutenberg' ) }
                                    value={ attributes.frontTitle }
                                    onChange={ ( newValue ) => setAttributes( { frontTitle: newValue } ) }
                                />
                                <TextareaControl
                                    label={ __( 'Content', 'wpmozo-addons-lite-for-gutenberg' ) }
                                    onChange={ ( newValue ) => setAttributes( { frontContnet: newValue } ) }
                                    value={ attributes.frontContnet }
                                />
                            </>
                        }
                        { 'back' === contentType &&
                            <>
                                <TextControl
                                    label={ __( 'Title', 'wpmozo-addons-lite-for-gutenberg' ) }
                                    value={ attributes.backTitle }
                                    onChange={ ( newValue ) => setAttributes( { backTitle: newValue } ) }
                                />
                                <TextareaControl
                                    label={ __( 'Content', 'wpmozo-addons-lite-for-gutenberg' ) }
                                    onChange={ ( newValue ) => setAttributes( { backContnet: newValue } ) }
                                    value={ attributes.backContnet }
                                />
                            </>
                        }
                    </BaseControl>
                </PanelBody>
                <PanelBody title={ __( 'Flip Box Elements', 'wpmozo-addons-lite-for-gutenberg' ) } initialOpen={false}>
                    <BaseControl
                        className="wpmozo-button-tabs-wrap"
                    >    
                        <ButtonGroup>
                            <Button
                                className="wpmozo-button-tabs-btn"
                                isPressed={ ( 'front' === elementType ) ? true : false }
                                onClick={ () => setElementType( 'front' ) }
                            >
                                { __( 'Front', 'wpmozo-addons-lite-for-gutenberg' ) }
                            </Button>
                            <Button 
                                className="wpmozo-button-tabs-btn"
                                isPressed={ ( 'back' === elementType ) ? true : false }
                                onClick={ () => setElementType( 'back' ) }
                            >
                                { __( 'Back', 'wpmozo-addons-lite-for-gutenberg' ) }
                            </Button>
                        </ButtonGroup>
                        { 'front' === elementType &&
                            <>
                                <SelectControl
                                    label={ __( 'Element Type', 'wpmozo-addons-lite-for-gutenberg' ) }
                                    value={ attributes.frontElType }
                                    options={[
                                        {
                                            label: __( 'None', 'wpmozo-addons-lite-for-gutenberg' ),
                                            value: 'none',
                                        },
                                        {
                                            label: __( 'Icon', 'wpmozo-addons-lite-for-gutenberg' ),
                                            value: 'icon',
                                        },
                                        {
                                            label: __( 'Image', 'wpmozo-addons-lite-for-gutenberg' ),
                                            value: 'image',
                                        }
                                    ]}
                                    onChange={ ( newValue ) => setAttributes( { frontElType: newValue } ) }
                                />
                                { 'icon' === attributes.frontElType &&
                                    <WpmozoIconpicker
                                        label={ __( 'Icon', 'wpmozo-addons-lite-for-gutenberg' ) }
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
                                    label={ __( 'Element Type', 'wpmozo-addons-lite-for-gutenberg' ) }
                                    value={ attributes.backElType }
                                    options={[
                                        {
                                            label: __( 'None', 'wpmozo-addons-lite-for-gutenberg' ),
                                            value: 'none',
                                        },
                                        {
                                            label: __( 'Icon', 'wpmozo-addons-lite-for-gutenberg' ),
                                            value: 'icon',
                                        },
                                        {
                                            label: __( 'Image', 'wpmozo-addons-lite-for-gutenberg' ),
                                            value: 'image',
                                        }
                                    ]}
                                    onChange={ ( newValue ) => setAttributes( { backElType: newValue } ) }
                                />
                                { 'icon' === attributes.backElType &&
                                    <WpmozoIconpicker
                                        label={ __( 'Icon', 'wpmozo-addons-lite-for-gutenberg' ) }
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
                                    label={ __( 'Show Button', 'wpmozo-addons-lite-for-gutenberg' ) }
                                    checked={ attributes.backHasButton }
                                    onChange={ ( newValue ) => setAttributes( { backHasButton: newValue } ) }
                                />
                                { attributes.backHasButton &&
                                    <>
                                        <TextControl
                                            label={ __( 'Button Text', 'wpmozo-addons-lite-for-gutenberg' ) }
                                            value={ attributes.backBtnText }
                                            onChange={ ( newValue ) => setAttributes( { backBtnText: newValue } ) }
                                        />
                                        <TextControl
                                            label={ __( 'Button Url', 'wpmozo-addons-lite-for-gutenberg' ) }
                                            value={ attributes.backBtnUrl }
                                            onChange={ ( newValue ) => setAttributes( { backBtnUrl: newValue } ) }
                                        />
                                        <WpmozoIconpicker
                                            label={ __( 'Button Icon', 'wpmozo-addons-lite-for-gutenberg' ) }
                                            iconPickerKey='backBtnIcon'
                                            props={ props }
                                            value={ attributes.backBtnIcon }
                                            onChange={ ( newValue ) => setAttributes( { backBtnIcon: newValue } ) }
                                        />
                                        <SelectControl
                                            label={ __( 'Element Type', 'wpmozo-addons-lite-for-gutenberg' ) }
                                            value={ attributes.backBtnIconPosition }
                                            options={[
                                                {
                                                    label: __( 'Before', 'wpmozo-addons-lite-for-gutenberg' ),
                                                    value: 'before',
                                                },
                                                {
                                                    label: __( 'After', 'wpmozo-addons-lite-for-gutenberg' ),
                                                    value: 'after',
                                                },
                                            ]}
                                            onChange={ ( newValue ) => setAttributes( { backBtnIconPosition: newValue } ) }
                                        />
                                        <ToggleControl
                                            label={ __( 'Show Icon On Hover', 'wpmozo-addons-lite-for-gutenberg' ) }
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
                <PanelBody title={ __( 'Global Styling', 'wpmozo-addons-lite-for-gutenberg' ) } className="wpmozo-typography-panel" initialOpen={false}>
                    <WpmozoRangeSize
                        label={ __( 'Content Width', 'wpmozo-addons-lite-for-gutenberg') }
                        rangeSizeKey='flipboxWidth'
                        props={props}
                    />
                    <WpmozoColorPicker
                        ColorKey="global"
                        props={props}
                        ColorTypes={[ 
                            {
                                key: 'TitleColor',
                                label: __( 'Title Color', 'wpmozo-addons-lite-for-gutenberg' ),
                            },
                            {
                                key: 'ContentColor',
                                label: __( 'Content Color', 'wpmozo-addons-lite-for-gutenberg' ),
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
                                { __( 'Title', 'wpmozo-addons-lite-for-gutenberg' ) }
                            </Button>
                            <Button 
                                className="wpmozo-button-tabs-btn"
                                isPressed={ ( 'content' === typographyType ) ? true : false }
                                onClick={ () => setTypographyType( 'content' ) }
                            >
                                { __( 'Content', 'wpmozo-addons-lite-for-gutenberg' ) }
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
                <PanelBody title={ __( 'FlipBox Style', 'wpmozo-addons-lite-for-gutenberg' ) } className="wpmozo-typography-panel" initialOpen={false}>
                    <BaseControl
                        className="wpmozo-button-tabs-wrap"
                    >    
                        <ButtonGroup>
                            <Button
                                className="wpmozo-button-tabs-btn"
                                isPressed={ ( 'front' === flipBoxType ) ? true : false }
                                onClick={ () => setFlipBoxType( 'front' ) }
                            >
                                { __( 'Front', 'wpmozo-addons-lite-for-gutenberg' ) }
                            </Button>
                            <Button 
                                className="wpmozo-button-tabs-btn"
                                isPressed={ ( 'back' === flipBoxType ) ? true : false }
                                onClick={ () => setFlipBoxType( 'back' ) }
                            >
                                { __( 'Back', 'wpmozo-addons-lite-for-gutenberg' ) }
                            </Button>
                        </ButtonGroup>
                        { 'front' === flipBoxType &&
                            <>
                                <BaseControl
                                    label={ __( 'Heading Lavel', 'wpmozo-addons-lite-for-gutenberg' ) }
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
                                            label: __( 'Title Color', 'wpmozo-addons-lite-for-gutenberg' ),
                                        },
                                        {
                                            key: 'ContentColor',
                                            label: __( 'Content Color', 'wpmozo-addons-lite-for-gutenberg' ),
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
                                            { __( 'Title', 'wpmozo-addons-lite-for-gutenberg' ) }
                                        </Button>
                                        <Button 
                                            className="wpmozo-button-tabs-btn"
                                            isPressed={ ( 'content' === frontTypographyType ) ? true : false }
                                            onClick={ () => setFrontTypographyType( 'content' ) }
                                        >
                                            { __( 'Content', 'wpmozo-addons-lite-for-gutenberg' ) }
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
                                    label={ __( 'Heading Lavel', 'wpmozo-addons-lite-for-gutenberg' ) }
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
                                            label: __( 'Title Color', 'wpmozo-addons-lite-for-gutenberg' ),
                                        },
                                        {
                                            key: 'ContentColor',
                                            label: __( 'Content Color', 'wpmozo-addons-lite-for-gutenberg' ),
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
                                            { __( 'Title', 'wpmozo-addons-lite-for-gutenberg' ) }
                                        </Button>
                                        <Button 
                                            className="wpmozo-button-tabs-btn"
                                            isPressed={ ( 'content' === backTypographyType ) ? true : false }
                                            onClick={ () => setBackTypographyType( 'content' ) }
                                        >
                                            { __( 'Content', 'wpmozo-addons-lite-for-gutenberg' ) }
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
                <PanelBody title={ __( 'FlipBox Image/Icon Style', 'wpmozo-addons-lite-for-gutenberg' ) } className="wpmozo-typography-panel" initialOpen={false}>
                    <BaseControl
                        className="wpmozo-button-tabs-wrap"
                    >    
                        <ButtonGroup>
                            <Button
                                className="wpmozo-button-tabs-btn"
                                isPressed={ ( 'front' === elementStyleType ) ? true : false }
                                onClick={ () => setelEmentStyleType( 'front' ) }
                            >
                                { __( 'Front', 'wpmozo-addons-lite-for-gutenberg' ) }
                            </Button>
                            <Button 
                                className="wpmozo-button-tabs-btn"
                                isPressed={ ( 'back' === elementStyleType ) ? true : false }
                                onClick={ () => setelEmentStyleType( 'back' ) }
                            >
                                { __( 'Back', 'wpmozo-addons-lite-for-gutenberg' ) }
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
                                                    label: __( 'Icon Color', 'wpmozo-addons-lite-for-gutenberg' ),
                                                },
                                            ]}
                                        />
                                        <WpmozoRangeSize
                                            label={ __( 'Icon Size', 'wpmozo-addons-lite-for-gutenberg') }
                                            rangeSizeKey='frontIconSize'
                                            props={props}
                                        />
                                    </>
                                }
                                { 'image' === attributes.frontElType &&
                                    <>
                                        <WpmozoRangeSize
                                            label={ __( 'Front Image Width', 'wpmozo-addons-lite-for-gutenberg') }
                                            rangeSizeKey='frontImageWidth'
                                            props={props}
                                        />
                                        <WpmozoAlignment
                                            label={__( 'Front Image Alignment', 'wpmozo-addons-lite-for-gutenberg')}
                                            onChange={ ( newValue ) => setAttributes( { frontImageAlignment: newValue } ) }
                                            value={ attributes.frontImageAlignment }
                                        />
                                    </>
                                }
                                <SelectControl
                                    label={ __( 'Image/Icon Placment', 'wpmozo-addons-lite-for-gutenberg' ) }
                                    value={ attributes.frontElementAlign }
                                    options={[
                                        {
                                            label: __( 'Top', 'wpmozo-addons-lite-for-gutenberg' ),
                                            value: 'top',
                                        },
                                        {
                                            label: __( 'Left', 'wpmozo-addons-lite-for-gutenberg' ),
                                            value: 'left',
                                        },
                                        {
                                            label: __( 'Right', 'wpmozo-addons-lite-for-gutenberg' ),
                                            value: 'right',
                                        }
                                    ]}
                                    onChange={ ( newValue ) => setAttributes( { frontElementAlign: newValue } ) }
                                />
                                { 'icon' === attributes.frontElType &&
                                    <>
                                        <ToggleControl
                                            label={ __( 'Style Icon', 'wpmozo-addons-lite-for-gutenberg' ) }
                                            checked={ attributes.frontIconStyle }
                                            onChange={ ( newValue ) => setAttributes( { frontIconStyle: newValue } ) }
                                        />
                                        { attributes.frontIconStyle &&
                                            <>
                                                <ToggleControl
                                                    label={ __( 'Display Shape Border', 'wpmozo-addons-lite-for-gutenberg' ) }
                                                    checked={ attributes.frontIconHasShapeBorder }
                                                    onChange={ ( newValue ) => setAttributes( { frontIconHasShapeBorder: newValue } ) }
                                                />
                                                <SelectControl
                                                    label={ __( 'Shape', 'wpmozo-addons-lite-for-gutenberg' ) }
                                                    value={ attributes.frontIconShape }
                                                    options={[
                                                        {
                                                            label: __( 'Square', 'wpmozo-addons-lite-for-gutenberg' ),
                                                            value: 'square',
                                                        },
                                                        {
                                                            label: __( 'Circle', 'wpmozo-addons-lite-for-gutenberg' ),
                                                            value: 'circle',
                                                        },
                                                        {
                                                            label: __( 'Hexagon', 'wpmozo-addons-lite-for-gutenberg' ),
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
                                                            label: __( 'Shape Background Color', 'wpmozo-addons-lite-for-gutenberg' ),
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
                                                                    label: __( 'Shape Border Color', 'wpmozo-addons-lite-for-gutenberg' ),
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
                                                    label: __( 'Icon Color', 'wpmozo-addons-lite-for-gutenberg' ),
                                                },
                                            ]}
                                        />
                                        <WpmozoRangeSize
                                            label={ __( 'Icon Size', 'wpmozo-addons-lite-for-gutenberg') }
                                            rangeSizeKey='backIconSize'
                                            props={props}
                                        />
                                    </>
                                }
                                { 'image' === attributes.backElType &&
                                    <>
                                        <WpmozoRangeSize
                                            label={ __( 'Back Image Width', 'wpmozo-addons-lite-for-gutenberg') }
                                            rangeSizeKey='backImageWidth'
                                            props={props}
                                        />
                                        <WpmozoAlignment
                                            label={ __( 'Front Image Alignment', 'wpmozo-addons-lite-for-gutenberg') }
                                            onChange={ ( newValue ) => setAttributes( { backImageAlignment: newValue } ) }
                                            value={ attributes.backImageAlignment }
                                        />                                        
                                    </>
                                }
                                <SelectControl
                                    label={ __( 'Image/Icon Placment', 'wpmozo-addons-lite-for-gutenberg' ) }
                                    value={ attributes.backElementAlign }
                                    options={[
                                        {
                                            label: __( 'Top', 'wpmozo-addons-lite-for-gutenberg' ),
                                            value: 'top',
                                        },
                                        {
                                            label: __( 'Left', 'wpmozo-addons-lite-for-gutenberg' ),
                                            value: 'left',
                                        },
                                        {
                                            label: __( 'Right', 'wpmozo-addons-lite-for-gutenberg' ),
                                            value: 'right',
                                        }
                                    ]}
                                    onChange={ ( newValue ) => setAttributes( { backElementAlign: newValue } ) }
                                />
                                { 'icon' === attributes.backElType &&
                                    <>
                                        <ToggleControl
                                            label={ __( 'Style Icon', 'wpmozo-addons-lite-for-gutenberg' ) }
                                            checked={ attributes.backIconStyle }
                                            onChange={ ( newValue ) => setAttributes( { backIconStyle: newValue } ) }
                                        />
                                        { attributes.backIconStyle &&
                                            <>
                                                <ToggleControl
                                                    label={ __( 'Display Shape Border', 'wpmozo-addons-lite-for-gutenberg' ) }
                                                    checked={ attributes.backIconHasShapeBorder }
                                                    onChange={ ( newValue ) => setAttributes( { backIconHasShapeBorder: newValue } ) }
                                                />
                                                <SelectControl
                                                    label={ __( 'Shape', 'wpmozo-addons-lite-for-gutenberg' ) }
                                                    value={ attributes.backIconShape }
                                                    options={[
                                                        {
                                                            label: __( 'Square', 'wpmozo-addons-lite-for-gutenberg' ),
                                                            value: 'square',
                                                        },
                                                        {
                                                            label: __( 'Circle', 'wpmozo-addons-lite-for-gutenberg' ),
                                                            value: 'circle',
                                                        },
                                                        {
                                                            label: __( 'Hexagon', 'wpmozo-addons-lite-for-gutenberg' ),
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
                                                            label: __( 'Shape Background Color', 'wpmozo-addons-lite-for-gutenberg' ),
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
                                                                    label: __( 'Shape Border Color', 'wpmozo-addons-lite-for-gutenberg' ),
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
                <PanelBody title={ __( 'FlipBox Content Alignment', 'wpmozo-addons-lite-for-gutenberg' ) } className="wpmozo-typography-panel" initialOpen={false}>
                    <BaseControl
                        className="wpmozo-button-tabs-wrap"
                    >    
                        <ButtonGroup>
                            <Button
                                className="wpmozo-button-tabs-btn"
                                isPressed={ ( 'front' === contentAlignType ) ? true : false }
                                onClick={ () => setContentAlignType( 'front' ) }
                            >
                                { __( 'Front', 'wpmozo-addons-lite-for-gutenberg' ) }
                            </Button>
                            <Button 
                                className="wpmozo-button-tabs-btn"
                                isPressed={ ( 'back' === contentAlignType ) ? true : false }
                                onClick={ () => setContentAlignType( 'back' ) }
                            >
                                { __( 'Back', 'wpmozo-addons-lite-for-gutenberg' ) }
                            </Button>
                        </ButtonGroup>
                        { 'front' === contentAlignType &&
                            <>
                                <WpmozoAlignment
                                    label={__( 'Content Alignment', 'wpmozo-addons-lite-for-gutenberg')}
                                    onChange={ ( newValue ) => setAttributes( { frontContentHorAlignment: newValue } ) }
                                    value={ attributes.frontContentHorAlignment }
                                />
                                <WpmozoAlignment
                                    type="vertical"
                                    label={__( 'Vertical Alignment', 'wpmozo-addons-lite-for-gutenberg')}
                                    onChange={ ( newValue ) => setAttributes( { frontContentVerAlignment: newValue } ) }
                                    value={ attributes.frontContentVerAlignment }
                                />
                            </>
                        }
                        { 'back' === contentAlignType &&
                            <>
                                <WpmozoAlignment
                                    label={__( 'Content Alignment', 'wpmozo-addons-lite-for-gutenberg')}
                                    onChange={ ( newValue ) => setAttributes( { backContentHorAlignment: newValue } ) }
                                    value={ attributes.backContentHorAlignment }
                                />
                                <WpmozoAlignment
                                    type="vertical"
                                    label={__( 'Vertical Alignment', 'wpmozo-addons-lite-for-gutenberg')}
                                    onChange={ ( newValue ) => setAttributes( { backContentVerAlignment: newValue } ) }
                                    value={ attributes.backContentVerAlignment }
                                />
                            </>
                        }
                    </BaseControl>
                </PanelBody>
                <PanelBody title={ __( 'FlipBox Border', 'wpmozo-addons-lite-for-gutenberg' ) } className="wpmozo-typography-panel" initialOpen={false}>
                    <BaseControl
                        className="wpmozo-button-tabs-wrap"
                    >    
                        <ButtonGroup>
                            <Button
                                className="wpmozo-button-tabs-btn"
                                isPressed={ ( 'front' === flipboxBorderType ) ? true : false }
                                onClick={ () => setFlipboxBorderType( 'front' ) }
                            >
                                { __( 'Front', 'wpmozo-addons-lite-for-gutenberg' ) }
                            </Button>
                            <Button 
                                className="wpmozo-button-tabs-btn"
                                isPressed={ ( 'back' === flipboxBorderType ) ? true : false }
                                onClick={ () => setFlipboxBorderType( 'back' ) }
                            >
                                { __( 'Back', 'wpmozo-addons-lite-for-gutenberg' ) }
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
                <PanelBody title={ __( 'Flip Box Elements', 'wpmozo-addons-lite-for-gutenberg' ) } initialOpen={false}>
                    <BaseControl
                        className="wpmozo-button-tabs-wrap"
                    >    
                        <ButtonGroup>
                            <Button
                                className="wpmozo-button-tabs-btn"
                                isPressed={ ( 'front' === elementType ) ? true : false }
                                onClick={ () => setElementType( 'front' ) }
                            >
                                { __( 'Front', 'wpmozo-addons-lite-for-gutenberg' ) }
                            </Button>
                            <Button 
                                className="wpmozo-button-tabs-btn"
                                isPressed={ ( 'back' === elementType ) ? true : false }
                                onClick={ () => setElementType( 'back' ) }
                            >
                                { __( 'Back', 'wpmozo-addons-lite-for-gutenberg' ) }
                            </Button>
                        </ButtonGroup>
                        { 'front' === elementType &&
                            <>
                                <SelectControl
                                    label={ __( 'Element Type', 'wpmozo-addons-lite-for-gutenberg' ) }
                                    value={ attributes.frontElType }
                                    options={[
                                        {
                                            label: __( 'None', 'wpmozo-addons-lite-for-gutenberg' ),
                                            value: 'none',
                                        },
                                        {
                                            label: __( 'Icon', 'wpmozo-addons-lite-for-gutenberg' ),
                                            value: 'icon',
                                        },
                                        {
                                            label: __( 'Image', 'wpmozo-addons-lite-for-gutenberg' ),
                                            value: 'image',
                                        }
                                    ]}
                                    onChange={ ( newValue ) => setAttributes( { frontElType: newValue } ) }
                                />
                                { 'icon' === attributes.frontElType &&
                                    <WpmozoIconpicker
                                        label={ __( 'Icon', 'wpmozo-addons-lite-for-gutenberg' ) }
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
                                    label={ __( 'Element Type', 'wpmozo-addons-lite-for-gutenberg' ) }
                                    value={ attributes.backElType }
                                    options={[
                                        {
                                            label: __( 'None', 'wpmozo-addons-lite-for-gutenberg' ),
                                            value: 'none',
                                        },
                                        {
                                            label: __( 'Icon', 'wpmozo-addons-lite-for-gutenberg' ),
                                            value: 'icon',
                                        },
                                        {
                                            label: __( 'Image', 'wpmozo-addons-lite-for-gutenberg' ),
                                            value: 'image',
                                        }
                                    ]}
                                    onChange={ ( newValue ) => setAttributes( { backElType: newValue } ) }
                                />
                                { 'icon' === attributes.backElType &&
                                    <WpmozoIconpicker
                                        label={ __( 'Icon', 'wpmozo-addons-lite-for-gutenberg' ) }
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
                                    label={ __( 'Show Button', 'wpmozo-addons-lite-for-gutenberg' ) }
                                    checked={ attributes.backHasButton }
                                    onChange={ ( newValue ) => setAttributes( { backHasButton: newValue } ) }
                                />
                                { attributes.backHasButton &&
                                    <>
                                        <TextControl
                                            label={ __( 'Button Text', 'wpmozo-addons-lite-for-gutenberg' ) }
                                            value={ attributes.backBtnText }
                                            onChange={ ( newValue ) => setAttributes( { backBtnText: newValue } ) }
                                        />
                                        <TextControl
                                            label={ __( 'Button Url', 'wpmozo-addons-lite-for-gutenberg' ) }
                                            value={ attributes.backBtnUrl }
                                            onChange={ ( newValue ) => setAttributes( { backBtnUrl: newValue } ) }
                                        />
                                        <WpmozoIconpicker
                                            label={ __( 'Button Icon', 'wpmozo-addons-lite-for-gutenberg' ) }
                                            iconPickerKey='backBtnIcon'
                                            props={ props }
                                            value={ attributes.backBtnIcon }
                                            onChange={ ( newValue ) => setAttributes( { backBtnIcon: newValue } ) }
                                        />
                                        <SelectControl
                                            label={ __( 'Element Type', 'wpmozo-addons-lite-for-gutenberg' ) }
                                            value={ attributes.backBtnIconPosition }
                                            options={[
                                                {
                                                    label: __( 'Before', 'wpmozo-addons-lite-for-gutenberg' ),
                                                    value: 'before',
                                                },
                                                {
                                                    label: __( 'After', 'wpmozo-addons-lite-for-gutenberg' ),
                                                    value: 'after',
                                                },
                                            ]}
                                            onChange={ ( newValue ) => setAttributes( { backBtnIconPosition: newValue } ) }
                                        />
                                        <ToggleControl
                                            label={ __( 'Show Icon On Hover', 'wpmozo-addons-lite-for-gutenberg' ) }
                                            checked={ attributes.backBtnIconOnHover }
                                            onChange={ ( newValue ) => setAttributes( { backBtnIconOnHover: newValue } ) }
                                        />
                                    </>
                                }
                            </>
                        }
                    </BaseControl>
                </PanelBody>
                <PanelBody title={ __( 'FlipBox Padding', 'wpmozo-addons-lite-for-gutenberg' ) } className="wpmozo-typography-panel" initialOpen={false}>
                    <BaseControl
                        className="wpmozo-button-tabs-wrap"
                    >    
                        <ButtonGroup>
                            <Button
                                className="wpmozo-button-tabs-btn"
                                isPressed={ ( 'front' === flipboxDimensionsType ) ? true : false }
                                onClick={ () => setFlipboxDimensionsType( 'front' ) }
                            >
                                { __( 'Front', 'wpmozo-addons-lite-for-gutenberg' ) }
                            </Button>
                            <Button 
                                className="wpmozo-button-tabs-btn"
                                isPressed={ ( 'back' === flipboxDimensionsType ) ? true : false }
                                onClick={ () => setFlipboxDimensionsType( 'back' ) }
                            >
                                { __( 'Back', 'wpmozo-addons-lite-for-gutenberg' ) }
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
                        <PanelBody title={ __( 'FlipBox Button', 'wpmozo-addons-lite-for-gutenberg' ) } className="wpmozo-typography-panel" initialOpen={false}>
                            <WpmozoColorPicker  
                                ColorKey="back"
                                props={props}
                                ColorTypes={[ 
                                    {
                                        key: 'BtnColor',
                                        label: __( 'Color', 'wpmozo-addons-lite-for-gutenberg' ),
                                    },
                                    {
                                        key: 'BtnBackground',
                                        label: __( 'Background', 'wpmozo-addons-lite-for-gutenberg' ),
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