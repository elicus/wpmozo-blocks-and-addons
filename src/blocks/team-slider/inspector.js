
import { WpmozoDimensions, WpmozoColorPicker, WpmozoTypography, WpmozoIconpicker, WpmozoAlignment, WpmozoBorder  } from '../../components/index';
import { __ } from "@wordpress/i18n";
import { InspectorControls, HeightControl } from "@wordpress/block-editor";
import { 
    PanelBody,
    ToggleControl,
    TextControl,
    SelectControl,
    RangeControl,
    BaseControl,
    ButtonGroup,
    Button,
    FormTokenField,
    Icon
} from "@wordpress/components";
import { useState } from "@wordpress/element";

const Inspector = (props) => {

    const attributes = props.attributes,
    setAttributes = props.setAttributes,
    [ deviceType, setDeviceType ] = useState('tablet');

    let teamMemberCats = wp.data.select('core').getEntityRecords( 'taxonomy', 'wpmozo-team-member-category' ),
        teamMemberCatOptions = [];

    if( teamMemberCats ) {
        teamMemberCatOptions = teamMemberCats.map( value => value.name );
    }

    props = Object.assign({}, props, {preAttributes: {}});

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
    const oneToTen = [
        {
            label: __( '1', 'wpmozo-blocks-and-addons' ),
            value: '1'
        },
        {
            label: __( '2', 'wpmozo-blocks-and-addons' ),
            value: '2'
        },
        {
            label: __( '3', 'wpmozo-blocks-and-addons' ),
            value: '3'
        },
        {
            label: __( '4', 'wpmozo-blocks-and-addons' ),
            value: '4'
        },
        {
            label: __( '5', 'wpmozo-blocks-and-addons' ),
            value: '5'
        },
        {
            label: __( '6', 'wpmozo-blocks-and-addons' ),
            value: '6'
        },
        {
            label: __( '7', 'wpmozo-blocks-and-addons' ),
            value: '7'
        },
        {
            label: __( '8', 'wpmozo-blocks-and-addons' ),
            value: '8'
        },
        {
            label: __( '9', 'wpmozo-blocks-and-addons' ),
            value: '9'
        },
        {
            label: __( '10', 'wpmozo-blocks-and-addons' ),
            value: '10'
        }
    ];
    const arrowsPositions = [
        {
            label: __( 'Inside', 'wpmozo-blocks-and-addons' ),
            value: 'inside'
        },
        {
            label: __( 'Outside', 'wpmozo-blocks-and-addons' ),
            value: 'outside'
        },
        {
            label: __( 'Top Left', 'wpmozo-blocks-and-addons' ),
            value: 'top_left'
        },
        {
            label: __( 'Top Right', 'wpmozo-blocks-and-addons' ),
            value: 'top_right'
        },
        {
            label: __( 'Top Center', 'wpmozo-blocks-and-addons' ),
            value: 'top_center'
        },
        {
            label: __( 'Bottom Left', 'wpmozo-blocks-and-addons' ),
            value: 'bottom_left'
        },
        {
            label: __( 'Bottom Right', 'wpmozo-blocks-and-addons' ),
            value: 'bottom_right'
        },
        {
            label: __( 'Bottom Center', 'wpmozo-blocks-and-addons' ),
            value: 'bottom_center'
        },
    ];
    const controlDotStyles = [
        {
            label: __( 'Solid Dot', 'wpmozo-blocks-and-addons' ),
            value: 'solid_dot'
        },
        {
            label: __( 'Transparent Dot', 'wpmozo-blocks-and-addons' ),
            value: 'transparent_dot'
        },
        {
            label: __( 'Stretched Dot', 'wpmozo-blocks-and-addons' ),
            value: 'stretched_dot'
        },
        {
            label: __( 'Line', 'wpmozo-blocks-and-addons' ),
            value: 'line'
        },
        {
            label: __( 'Rounded Line', 'wpmozo-blocks-and-addons' ),
            value: 'rounded_line'
        },
        {
            label: __( 'Squared Dot', 'wpmozo-blocks-and-addons' ),
            value: 'square_dot'
        },
    ];
    const postOrderByOptions = [
        {
            label: __( 'Date', 'wpmozo-blocks-and-addons' ),
            value: 'date'
        },
        {
            label: __( 'Modified', 'wpmozo-blocks-and-addons' ),
            value: 'modified'
        },
        {
            label: __( 'Title', 'wpmozo-blocks-and-addons' ),
            value: 'title'
        },
        {
            label: __( 'Slug', 'wpmozo-blocks-and-addons' ),
            value: 'name'
        },
        {
            label: __( 'ID', 'wpmozo-blocks-and-addons' ),
            value: 'ID'
        },
        {
            label: __( 'Random', 'wpmozo-blocks-and-addons' ),
            value: 'rand'
        },
        {
            label: __( 'Relevance', 'wpmozo-blocks-and-addons' ),
            value: 'relevance'
        },
        {
            label: __( 'None', 'wpmozo-blocks-and-addons' ),
            value: 'none'
        },
    ];
    const slideEffects = [
        {
            label: __( 'Slide', 'wpmozo-blocks-and-addons' ),
            value: 'slide'
        },
        {
            label: __( 'Coverflow', 'wpmozo-blocks-and-addons' ),
            value: 'coverflow'
        },
        {
            label: __( 'Cube', 'wpmozo-blocks-and-addons' ),
            value: 'cube'
        },
        {
            label: __( 'Flip', 'wpmozo-blocks-and-addons' ),
            value: 'flip'
        },
        {
            label: __( 'Fade', 'wpmozo-blocks-and-addons' ),
            value: 'fade'
        }
    ];


    return (
        <>
            <InspectorControls key="controls">
                <PanelBody title={ __( 'Content', 'wpmozo-blocks-and-addons' ) } initialOpen={false}>
                    <TextControl
                        label={ __( 'Number of Members', 'wpmozo-blocks-and-addons' ) }
                        value={ attributes.postsNumber }
                        onChange={ ( newValue ) => setAttributes( { postsNumber: newValue } ) }
                    />
                    <SelectControl
                        label={ __( 'Order', 'wpmozo-blocks-and-addons' ) }
                        value={ attributes.postOrder }
                        options={[
                            {
                                label: __( 'Ascending', 'wpmozo-blocks-and-addons'),
                                value: 'ASC'
                            }, 
                            {
                                label: __( 'Descending', 'wpmozo-blocks-and-addons'),
                                value: 'DESC'
                            }
                        ]}
                        onChange={ ( newValue ) => setAttributes( { postOrder: newValue } ) }
                    />
                    <SelectControl
                        label={ __( 'Order by', 'wpmozo-blocks-and-addons' ) }
                        value={ attributes.postOrderBy }
                        options={ postOrderByOptions }
                        onChange={ ( newValue ) => setAttributes( { postOrderBy: newValue } ) }
                    />
                    <FormTokenField
                        label={ __( 'Select Categories', 'wpmozo-blocks-and-addons' ) }
                        value={ attributes.includeCategories }
                        suggestions={ teamMemberCatOptions }
                        onChange={ ( newValue ) => setAttributes( { includeCategories: newValue } ) }
                    />
                    <TextControl
                        label={ __( 'No Result Text', 'wpmozo-blocks-and-addons' ) }
                        value={ attributes.noResultText }
                        onChange={ ( newValue ) => setAttributes( { noResultText: newValue } ) }
                    />
                </PanelBody>
                <PanelBody title={ __( 'Elements', 'wpmozo-blocks-and-addons' ) } initialOpen={false}>
                    <ToggleControl
                        label={ __( 'Show Short Description', 'wpmozo-blocks-and-addons' ) }
                        checked={ attributes.showShortDesc }
                        onChange={ ( newValue ) => setAttributes( { showShortDesc: newValue } ) }
                    />
                    <ToggleControl
                        label={ __( 'Show Designation', 'wpmozo-blocks-and-addons' ) }
                        checked={ attributes.showDesignation }
                        onChange={ ( newValue ) => setAttributes( { showDesignation: newValue } ) }
                    />
                    <ToggleControl
                        label={ __( 'Show Social Icon', 'wpmozo-blocks-and-addons' ) }
                        checked={ attributes.showSocialIcon }
                        onChange={ ( newValue ) => setAttributes( { showSocialIcon: newValue } ) }
                    />
                    { attributes.showSocialIcon &&
                        <BaseControl
                            label={ __( 'Social Icon Link Target', 'wpmozo-blocks-and-addons' ) }
                            className="wpmozo-button-tabs-wrap"
                        >    
                            <ButtonGroup>
                                <Button
                                    className="wpmozo-button-tabs-btn"
                                    isPressed={ ( 'same' === attributes.socialIconLinkTarget ) ? true : false }
                                    onClick={ () => setAttributes( { socialIconLinkTarget: 'same' } ) }
                                    icon={ <Icon icon="admin-links" /> }
                                    label={ __( 'Same Window', 'wpmozo-blocks-and-addons' ) }
                                /> 
                                <Button 
                                    className="wpmozo-button-tabs-btn"
                                    isPressed={ ( 'external' === attributes.socialIconLinkTarget ) ? true : false }
                                    onClick={ () => setAttributes( { socialIconLinkTarget: 'external' } ) }
                                    icon={ <Icon icon="external" /> }
                                    label={ __( 'External', 'wpmozo-blocks-and-addons' ) }
                                />
                            </ButtonGroup>
                        </BaseControl>
                    }
                    <ToggleControl
                        label={ __( 'Show Skills', 'wpmozo-blocks-and-addons' ) }
                        checked={ attributes.showSkills }
                        onChange={ ( newValue ) => setAttributes( { showSkills: newValue } ) }
                    />
                </PanelBody>
                <PanelBody title={ __( 'Slider', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={false}>
                    <SelectControl
                        label={ __( 'Layout', 'wpmozo-blocks-and-addons' ) }
                        value={ attributes.sliderLayout }
                        options={[
                            {
                                label: __( 'Layout 1', 'wpmozo-blocks-and-addons'),
                                value: 'layout1'
                            }, 
                            {
                                label: __( 'Layout 2', 'wpmozo-blocks-and-addons'),
                                value: 'layout2'
                            }
                        ]}
                        onChange={ ( newValue ) => setAttributes( { sliderLayout: newValue } ) }
                    />
                    <SelectControl
                        label={ __( 'Slide Effect', 'wpmozo-blocks-and-addons' ) }
                        value={ attributes.slideEffect }
                        options={ slideEffects }
                        onChange={ ( newValue ) => setAttributes( { slideEffect: newValue } ) }
                    />
                    { ( 'coverflow' === attributes.slideEffect || 'slide' === attributes.slideEffect ) &&
                        <>
                            <SelectControl
                                label={ __( 'Number of Members Per View', 'wpmozo-blocks-and-addons' ) }
                                value={ attributes.memberPerSlide }
                                options={oneToTen}
                                onChange={ ( newValue ) => setAttributes( { memberPerSlide: newValue } ) }
                            />
                            <SelectControl
                                label={ __( 'Number of Slides Per Group', 'wpmozo-blocks-and-addons' ) }
                                value={ attributes.slidesPerGroup }
                                options={oneToTen}
                                onChange={ ( newValue ) => setAttributes( { slidesPerGroup: newValue } ) }
                            />
                            <RangeControl
                                label={ __( 'Space between Slides', 'wpmozo-blocks-and-addons' ) }
                                value={ attributes.spaceBetweenSlides }
                                onChange={ ( newValue ) => setAttributes( { spaceBetweenSlides: newValue } ) }
                                min={ 0 }
                                step={ 1 }
                                max={ 100 }
                            />
                        </>
                    }
                    { 'coverflow' === attributes.slideEffect &&
                        <>
                            <ToggleControl
                                label={ __( 'Enable Slide Shadow', 'wpmozo-blocks-and-addons' ) }
                                checked={ attributes.enableCoverflowShadow }
                                onChange={ ( newValue ) => setAttributes( { enableCoverflowShadow: newValue } ) }
                            />
                            { 'coverflow' === attributes.slideEffect &&
                                <WpmozoColorPicker  
                                    ColorKey="coverflow"
                                    props={props}
                                    ColorTypes={[ 
                                        {
                                            key: 'ShadowColor',
                                            label: __( 'Shadow Color', 'wpmozo-blocks-and-addons' ),
                                        }
                                    ]}
                                />
                            }
                            <RangeControl
                                label={ __( 'Coverflow Rotate', 'wpmozo-blocks-and-addons' ) }
                                value={ attributes.coverflowRotate }
                                onChange={ ( newValue ) => setAttributes( { coverflowRotate: newValue } ) }
                                min={ 1 }
                                max={ 360 }
                            />
                            <RangeControl
                                label={ __( 'Coverflow Depth', 'wpmozo-blocks-and-addons' ) }
                                value={ attributes.coverflowDepth }
                                onChange={ ( newValue ) => setAttributes( { coverflowDepth: newValue } ) }
                                min={ 1 }
                                max={ 1000 }
                            />
                        </>
                    }
                    <ToggleControl
                        label={ __( 'Equalize Slide Height', 'wpmozo-blocks-and-addons' ) }
                        checked={ attributes.equalizeHeight }
                        onChange={ ( newValue ) => setAttributes( { equalizeHeight: newValue } ) }
                    />
                    <ToggleControl
                        label={ __( 'Auto Height Slider', 'wpmozo-blocks-and-addons' ) }
                        checked={ attributes.autoHeightSlider }
                        onChange={ ( newValue ) => setAttributes( { autoHeightSlider: newValue } ) }
                    />
                    <ToggleControl
                        label={ __( 'Enable Loop', 'wpmozo-blocks-and-addons' ) }
                        checked={ attributes.sliderLoop }
                        onChange={ ( newValue ) => setAttributes( { sliderLoop: newValue } ) }
                    />
                    <ToggleControl
                        label={ __( 'Autoplay', 'wpmozo-blocks-and-addons' ) }
                        checked={ attributes.autoplay }
                        onChange={ ( newValue ) => setAttributes( { autoplay: newValue } ) }
                    />
                    <ToggleControl
                        label={ __( 'Enable Linear Transition', 'wpmozo-blocks-and-addons' ) }
                        checked={ attributes.enableLinearTransition }
                        onChange={ ( newValue ) => setAttributes( { enableLinearTransition: newValue } ) }
                    />
                    { attributes.autoplay &&
                        <TextControl
                            label={ __( 'Autoplay Delay', 'wpmozo-blocks-and-addons' ) }
                            value={ attributes.autoplaySpeed }
                            onChange={ ( newValue ) => setAttributes( { autoplaySpeed: newValue } ) }
                        />
                    }
                    <ToggleControl
                        label={ __( 'Pause On Hover', 'wpmozo-blocks-and-addons' ) }
                        checked={ attributes.pauseOnHover }
                        onChange={ ( newValue ) => setAttributes( { pauseOnHover: newValue } ) }
                    />
                    <TextControl
                        label={ __( 'Transition Duration', 'wpmozo-blocks-and-addons' ) }
                        value={ attributes.transitionDuration }
                        onChange={ ( newValue ) => setAttributes( { transitionDuration: newValue } ) }
                    />
                    <ToggleControl
                        label={ __( 'Show Arrows', 'wpmozo-blocks-and-addons' ) }
                        checked={ attributes.showArrow }
                        onChange={ ( newValue ) => setAttributes( { showArrow: newValue } ) }
                    />
                    { attributes.showArrow && 
                        <>  
                            <WpmozoIconpicker
                                label={ __( 'Previous Arrow', 'wpmozo-blocks-and-addons' ) }
                                iconPickerKey='previousSlideArrow'
                                props={ props }
                                value={ attributes.previousSlideArrow }
                                onChange={ ( newValue ) => setAttributes( { previousSlideArrow: newValue } ) }
                            />
                            <WpmozoIconpicker
                                label={ __( 'Next Arrow', 'wpmozo-blocks-and-addons' ) }
                                iconPickerKey='nextSlideArrow'
                                props={ props }
                                value={ attributes.nextSlideArrow }
                                onChange={ ( newValue ) => setAttributes( { nextSlideArrow: newValue } ) }
                            />
                            <ToggleControl
                                label={ __( 'Show Arrows Only On Hover', 'wpmozo-blocks-and-addons' ) }
                                checked={ attributes.showArrowOnHover }
                                onChange={ ( newValue ) => setAttributes( { showArrowOnHover: newValue } ) }
                            />
                            <SelectControl
                                label={ __( 'Arrows Position', 'wpmozo-blocks-and-addons' ) }
                                value={ attributes.arrowsPosition }
                                options={arrowsPositions}
                                onChange={ ( newValue ) => setAttributes( { arrowsPosition: newValue } ) }
                            />
                        </>
                    }
                    <ToggleControl
                        label={ __( 'Show Dots Pagination', 'wpmozo-blocks-and-addons' ) }
                        checked={ attributes.showControlDot }
                        onChange={ ( newValue ) => setAttributes( { showControlDot: newValue } ) }
                    />
                    { attributes.showControlDot && 
                        <>
                            <SelectControl
                                label={ __( 'Dots Pagination Style', 'wpmozo-blocks-and-addons' ) }
                                value={ attributes.controlDotStyle }
                                options={controlDotStyles}
                                onChange={ ( newValue ) => setAttributes( { controlDotStyle: newValue } ) }
                            />
                            { 
                                'stretched_dot' != attributes.controlDotStyle && 
                                'line' != attributes.controlDotStyle &&
                                'rounded_line' != attributes.controlDotStyle &&
                                <ToggleControl
                                    label={ __( 'Enable Dynamic Dots', 'wpmozo-blocks-and-addons' ) }
                                    checked={ attributes.enableDynamicDots }
                                    onChange={ ( newValue ) => setAttributes( { enableDynamicDots: newValue } ) }
                                />
                            }
                        </>
                    }
                </PanelBody>
                { ( 'coverflow' === attributes.slideEffect || 'slide' === attributes.slideEffect ) &&
                    <PanelBody title={ __( 'Slider Responsive', 'wpmozo-blocks-and-addons' ) } initialOpen={false}>
                        <BaseControl
                            className='wpmozo-color-combo-wrap'
                        >    
                            <ButtonGroup>
                                <Button
                                    className='wpmozo-color-combo-type'
                                    isPressed={ ( 'tablet' === deviceType ) ? true : false }
                                    onClick={ () => setDeviceType( 'tablet' ) }
                                >
                                    { __( 'Tablet', 'wpmozo-blocks-and-addons' ) }
                                </Button>
                                <Button 
                                    className='wpmozo-color-combo-type'
                                    isPressed={ ( 'mobile' === deviceType ) ? true : false }
                                    onClick={ () => setDeviceType( 'mobile' ) }
                                >
                                    { __( 'Mobile', 'wpmozo-blocks-and-addons' ) }
                                </Button>
                            </ButtonGroup>
                            { 'tablet' === deviceType &&
                                <>
                                    <SelectControl
                                        label={ __( 'Number of Members Per View', 'wpmozo-blocks-and-addons' ) }
                                        value={ attributes.tabletMemberPerSlide }
                                        options={oneToTen}
                                        onChange={ ( newValue ) => setAttributes( { tabletMemberPerSlide: newValue } ) }
                                    />
                                    <SelectControl
                                        label={ __( 'Number of Slides Per Group', 'wpmozo-blocks-and-addons' ) }
                                        value={ attributes.tabletSlidesPerGroup }
                                        options={oneToTen}
                                        onChange={ ( newValue ) => setAttributes( { tabletSlidesPerGroup: newValue } ) }
                                    />
                                    <RangeControl
                                        label={ __( 'Space between Slides', 'wpmozo-blocks-and-addons' ) }
                                        value={ attributes.tabletSpaceBetweenSlides }
                                        onChange={ ( newValue ) => setAttributes( { tabletSpaceBetweenSlides: newValue } ) }
                                        min={ 0 }
                                        step={ 1 }
                                        max={ 100 }
                                    />
                                </>
                            }
                            { 'mobile' === deviceType &&
                                <>
                                    <SelectControl
                                        label={ __( 'Number of Members Per View', 'wpmozo-blocks-and-addons' ) }
                                        value={ attributes.mobileMemberPerSlide }
                                        options={oneToTen}
                                        onChange={ ( newValue ) => setAttributes( { mobileMemberPerSlide: newValue } ) }
                                    />
                                    <SelectControl
                                        label={ __( 'Number of Slides Per Group', 'wpmozo-blocks-and-addons' ) }
                                        value={ attributes.mobileSlidesPerGroup }
                                        options={oneToTen}
                                        onChange={ ( newValue ) => setAttributes( { mobileSlidesPerGroup: newValue } ) }
                                    />
                                    <RangeControl
                                        label={ __( 'Space between Slides', 'wpmozo-blocks-and-addons' ) }
                                        value={ attributes.mobileSpaceBetweenSlides }
                                        onChange={ ( newValue ) => setAttributes( { mobileSpaceBetweenSlides: newValue } ) }
                                        min={ 0 }
                                        step={ 1 }
                                        max={ 100 }
                                    />
                                </>
                            }
                        </BaseControl>
                    </PanelBody>
                }
            </InspectorControls>
            <InspectorControls key="styles" group="styles">
                <PanelBody title={ __( 'Container', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={false}>
                    <WpmozoColorPicker  
                        ColorKey="container"
                        props={props}
                        ColorTypes={[ 
                            {
                                key: 'Background',
                                label: __( 'Background Color', 'wpmozo-blocks-and-addons' ),
                            }
                        ]}
                    />
                    <WpmozoDimensions
                        DimensionKey='container'
                        DimensionsTypes={{
                            padding: true
                        }}
                        props={props}
                    />
                </PanelBody>
                <PanelBody title={ __( 'Slide', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={false}>
                    <WpmozoColorPicker  
                        ColorKey="slide"
                        props={props}
                        ColorTypes={[ 
                            {
                                key: 'Background',
                                label: __( 'Background Color', 'wpmozo-blocks-and-addons' ),
                            }
                        ]}
                    />
                    <WpmozoDimensions
                        DimensionKey='slide'
                        DimensionsTypes={{
                            padding: true
                        }}
                        props={props}
                    />
                    <WpmozoBorder
                        BorderKey="slide"
                        props={props}
                    />
                </PanelBody>
                <PanelBody title={ __( 'Text Alignment', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={false}>
                    <WpmozoAlignment
                        label={ __( 'Alignment', 'wpmozo-blocks-and-addons' ) }
                        onChange={ ( newValue ) => setAttributes( { textAlignment: newValue } ) }
                        value={ attributes.textAlignment }
                    />
                </PanelBody>
                <PanelBody title={ __( 'Image', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={false}>
                    <HeightControl
                        label={ __( 'Image Height', 'wpmozo-blocks-and-addons' ) }
                        onChange={ ( newValue ) => setAttributes( { imageHeight: newValue } ) }
                        value={ attributes.imageHeight }
                    />
                    <WpmozoBorder
                        BorderKey="image"
                        props={props}
                    />
                </PanelBody>
                <PanelBody title={ __( 'Name Text', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={false}>
                    <WpmozoColorPicker
                        ColorKey="name"
                        props={props}
                        ColorTypes={[ 
                            {
                                key: 'text',
                                label: __( 'Name Text Color', 'wpmozo-blocks-and-addons' ),
                            } 
                        ]}
                    />
                    <BaseControl
                        label={ __( 'Name Heading Lavel', 'wpmozo-blocks-and-addons' ) }
                    >    
                        <ButtonGroup>
                            {headingLavels.map((item, key) => (
                                <Button
                                    isPressed={ ( item.value === attributes.nameHeadingLavel ) ? true : false }
                                    onClick={ ( newValue ) => setAttributes( { nameHeadingLavel: item.value } ) }
                                >
                                    { item.label }
                                </Button>
                            ))}
                        </ButtonGroup>
                    </BaseControl>
                    <WpmozoAlignment
                        label={ __( 'Name Text Alignment', 'wpmozo-blocks-and-addons' ) }
                        onChange={ ( newValue ) => setAttributes( { nameTextAlignment: newValue } ) }
                        value={ attributes.nameTextAlignment }
                    />
                    <WpmozoTypography
                       TypographyKey="name"
                       props={props}
                    />
                </PanelBody>
                <PanelBody title={ __( 'Designation Text', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={false}>
                    <WpmozoColorPicker
                        ColorKey="designation"
                        props={props}
                        ColorTypes={[ 
                            {
                                key: 'Text',
                                label: __( 'Designation Text Color', 'wpmozo-blocks-and-addons' ),
                            } 
                        ]}
                    />
                    <BaseControl
                        label={ __( 'Designation Heading Lavel', 'wpmozo-blocks-and-addons' ) }
                    >    
                        <ButtonGroup>
                            {headingLavels.map((item, key) => (
                                <Button
                                    isPressed={ ( item.value === attributes.designationHeadingLavel ) ? true : false }
                                    onClick={ ( newValue ) => setAttributes( { designationHeadingLavel: item.value } ) }
                                >
                                    { item.label }
                                </Button>
                            ))}
                        </ButtonGroup>
                    </BaseControl>
                    <WpmozoAlignment
                        label={ __( 'Designation Text Alignment', 'wpmozo-blocks-and-addons' ) }
                        onChange={ ( newValue ) => setAttributes( { designationTextAlignment: newValue } ) }
                        value={ attributes.designationTextAlignment }
                    />
                    <WpmozoTypography
                       TypographyKey="designation"
                       props={props}
                    />
                </PanelBody>
                <PanelBody title={ __( 'Description Text', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={false}>
                    <WpmozoColorPicker
                        ColorKey="description"
                        props={props}
                        ColorTypes={[ 
                            {
                                key: 'Text',
                                label: __( 'Description Text Color', 'wpmozo-blocks-and-addons' ),
                            } 
                        ]}
                    />
                    <WpmozoAlignment
                        label={ __( 'Description Text Alignment', 'wpmozo-blocks-and-addons' ) }
                        onChange={ ( newValue ) => setAttributes( { descriptionTextAlignment: newValue } ) }
                        value={ attributes.descriptionTextAlignment }
                    />
                    <WpmozoTypography
                       TypographyKey="description"
                       props={props}
                    />
                </PanelBody>
                <PanelBody title={ __( 'Skill Text', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={false}>
                    <WpmozoColorPicker
                        ColorKey="skill"
                        props={props}
                        ColorTypes={[ 
                            {
                                key: 'Text',
                                label: __( 'Skill Text Color', 'wpmozo-blocks-and-addons' ),
                            } 
                        ]}
                    />
                    <WpmozoAlignment
                        label={ __( 'Skill Text Alignment', 'wpmozo-blocks-and-addons' ) }
                        onChange={ ( newValue ) => setAttributes( { skillTextAlignment: newValue } ) }
                        value={ attributes.skillTextAlignment }
                    />
                    <WpmozoTypography
                       TypographyKey="skill"
                       props={props}
                    />
                </PanelBody>
                <PanelBody title={ __( 'Skills', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={false}>
                     <WpmozoColorPicker
                        ColorKey="skill"
                        props={props}
                        ColorTypes={[ 
                            {
                                key: 'EmptyColor',
                                label: __( 'Empty Bar Color', 'wpmozo-blocks-and-addons' ),
                            },
                            {
                                key: 'FilledColor',
                                label: __( 'Fill Bar Color', 'wpmozo-blocks-and-addons' ),
                            } 
                        ]}
                    />
                    <HeightControl
                        label={ __( 'Bar Height', 'wpmozo-blocks-and-addons' ) }
                        onChange={ ( newValue ) => setAttributes( { barHeight: newValue } ) }
                        value={ attributes.barHeight }
                    />
                </PanelBody>
                <PanelBody title={ __( 'Social Icons', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={false}>
                    <WpmozoColorPicker
                        ColorKey="icon"
                        props={props}
                        ColorTypes={[ 
                            {
                                key: 'SeparatorColor',
                                label: __( 'Icon Separator Color', 'wpmozo-blocks-and-addons' ),
                            },
                            {
                                key: 'Color',
                                label: __( 'Icon Color', 'wpmozo-blocks-and-addons' ),
                            },
                            {
                                key: 'Background',
                                label: __( 'Icon Background Color', 'wpmozo-blocks-and-addons' ),
                            } 
                        ]}
                    />
                    <WpmozoAlignment
                        label={ __( 'Social Icon Alignment', 'wpmozo-blocks-and-addons' ) }
                        onChange={ ( newValue ) => setAttributes( { socialIconsAlignment: newValue } ) }
                        value={ attributes.socialIconsAlignment }
                    />
                    <HeightControl
                        label={ __( 'Separator Size', 'wpmozo-blocks-and-addons' ) }
                        onChange={ ( newValue ) => setAttributes( { separatorSize: newValue } ) }
                        value={ attributes.separatorSize }
                    />
                    <HeightControl
                        label={ __( 'Icon Size', 'wpmozo-blocks-and-addons' ) }
                        onChange={ ( newValue ) => setAttributes( { iconSize: newValue } ) }
                        value={ attributes.iconSize }
                    />
                    <WpmozoBorder
                        label={ __( 'Social Icons Border', 'wpmozo-blocks-and-addons' ) }
                        BorderKey="icon"
                        props={props}
                    />
                </PanelBody>
                <PanelBody title={ __( 'Slider', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={false}>
                    <WpmozoColorPicker  
                        ColorKey="slider"
                        props={props}
                        ColorTypes={[ 
                            {
                                key: 'ArrowColor',
                                label: __( 'Arrow Color', 'wpmozo-blocks-and-addons' ),
                            },
                            {
                                key: 'ArrowBackground',
                                label: __( 'Arrow Background', 'wpmozo-blocks-and-addons' ),
                            },
                            {
                                key: 'ActiveDoteColor',
                                label: __( 'Active Dot Pagination Color', 'wpmozo-blocks-and-addons' ),
                            },
                            {
                                key: 'InactiveDoteColor',
                                label: __( 'Inactive Dot Pagination Color', 'wpmozo-blocks-and-addons' ),
                            }
                        ]}
                    />
                    <WpmozoTypography
                        TypographyKey="arrow"
                        label={ __( 'Arrow Font Size', 'wpmozo-blocks-and-addons' ) }
                        props={props}
                        TypoTypes={{
                            'FontSize': true
                        }}
                    />
                    <WpmozoDimensions
                        DimensionKey='arrow'
                        label={ __( 'Arrows Padding', 'wpmozo-blocks-and-addons' ) }
                        DimensionsTypes={{
                            padding: true
                        }}
                        props={props}
                    />
                    <WpmozoBorder
                        label={ __( 'Arrow Background Border', 'wpmozo-blocks-and-addons' ) }
                        BorderKey="arrow"
                        props={props}
                    />
                </PanelBody>
            </InspectorControls>
        </>
    );

};

export default Inspector;