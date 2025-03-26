
const { useBlockProps } = window.wp.blockEditor;
const WPMozoEditorObj = wpmozo_bna_editor_object; 

const Save = ({ attributes }) => {
    
    const elId = `block-${attributes.ID}`;

    let beforeImage = ( attributes.beforeImage ) ? attributes.beforeImage : WPMozoEditorObj.placeholderImg,
    afterImage = ( attributes.afterImage ) ? attributes.afterImage : WPMozoEditorObj.placeholderImg,
    beforeLabel = ( attributes.beforeHasLabel ) ? attributes.beforeLabel : '',
    afterLabel = ( attributes.afterHasLabel ) ? attributes.afterLabel : '', 
    no_overlay = attributes.overlayOnHover ? false : true,
    handleOffset = attributes.handleOffset,
    sliderOrientation = attributes.sliderOrientation,
    moveHandleOnHover = attributes.moveHandleOnHover,
    moveHandleOnClick = attributes.moveHandleOnClick;

    return (
        <div {...useBlockProps.save()}>
            <div 
                className="wpmozo-bna-before-after-image-wrapper"
                id={elId}
                data-before-label={beforeLabel} 
                data-after-label={afterLabel} 
                data-handle-offset={handleOffset} 
                data-slider-orientation={sliderOrientation} 
                data-move-onhover={moveHandleOnHover} 
                data-move-onclick={moveHandleOnClick}
                data-no-overlay={no_overlay} 
            >
                <img src={beforeImage} />
                <img src={afterImage} />
            </div>
        </div>
    );
};

export default Save;