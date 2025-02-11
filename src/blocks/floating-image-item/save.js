
import { useBlockProps } from "@wordpress/block-editor";

const Save = ({attributes}) => {
  
    const ID = attributes.ID,
    altText = ! window.wpmozo.wpmozo_is_empty( attributes.altText ) 
    	? attributes.altText
    	: 'alt';
 
    return (
       <div className="floating-image-item" id={`block-${ID}`}>
            <img className="floating-image" src={ attributes.image.url } alt={altText} />
        </div>
    );
};

export default Save;