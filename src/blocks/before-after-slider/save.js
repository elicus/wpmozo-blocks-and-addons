import { useBlockProps } from '@wordpress/block-editor';
import generateDynamicStyle from './style';

export default function save({ attributes }) {
    const WPMozoEditorObj = wpmozo_bna_editor_object;

    const elId = `block-${attributes.ID}`;
    const clientId = attributes.ID,
        ID = clientId;

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
        <>
            <style>
                { generateDynamicStyle({ attributes, clientId }) }
            </style>
            <div {...useBlockProps.save({ className: 'wpmozo-bna-before-after-main' })} id={`block-${ID}`}>
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
        </>
    );
}
