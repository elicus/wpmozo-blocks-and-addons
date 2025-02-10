
import { useBlockProps, RichText } from "@wordpress/block-editor";
const WPMozoEditorObj = wpmozo_adfgu_editor_object;

const Save = ({ attributes }) => {

    const ID = attributes.ID;

    let backImage = ( attributes.backImage ) ? attributes.backImage : WPMozoEditorObj.placeholderImg;

    return (
        <div {...useBlockProps.save({ className: 'wpmozo-adfgu-interactive-image-card-main' })} id={`block-${ID}`}>
            <div className="wpmozo-adfgu-interactive-image-card-wrap">
                <figure className={`effect-${ attributes.layout }`}>
                    <img className="wpmozo-adfgu-interactive-image-card-image" src={ backImage } />
                    <figcaption>
                        <div className="wpmozo-adfgu-interactive-image-card-inner">
                            <RichText.Content
                                className="wpmozo-adfgu-interactive-image-card-title"
                                tagName={ attributes.titleLavel }
                                value={ attributes.title }
                            />
                            <RichText.Content
                                className="wpmozo-adfgu-interactive-image-card-content"
                                tagName="div"
                                value={ attributes.content }
                            />
                        </div>
                    </figcaption>
                </figure>
            </div>
        </div>
    );
};

export default Save;