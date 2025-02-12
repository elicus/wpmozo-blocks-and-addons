
import { useBlockProps, RichText } from "@wordpress/block-editor";
const WPMozoEditorObj = wpmozo_adfgu_editor_object;

const Save = ({ attributes }) => {

    const ID = attributes.ID;

    let image = ( attributes.image ) ? attributes.image : WPMozoEditorObj.placeholderImg,
        contentAlignment = attributes.contentAlignment;

    return (
        <div {...useBlockProps.save({ className: 'wpmozo-adfgu-tilt-image' })} id={`block-${ID}`}>
            <div className={ `wpmozo-adfgu-tilt-image-wrapper wpmozo-editor wpmozo-adfgu-tilt-align-${contentAlignment}` }>
                <div className="wpmozo-adfgu-tilt-image-inner-wrapper">
                    <img className="wpmozo-adfgu-tilt-image-image" src={ image } />
                    <div className="wpmozo-adfgu-tilt-content-wrapper">
                        <RichText.Content
                            className="wpmozo-adfgu-tilt-title"
                            tagName={ attributes.titleLavel }
                            value={ attributes.title }
                        />
                        <RichText.Content
                            className="wpmozo-adfgu-tilt-desc"
                            tagName="div"
                            value={ attributes.content }
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Save;