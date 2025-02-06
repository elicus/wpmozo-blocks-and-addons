
import { useBlockProps } from "@wordpress/block-editor";

const Save = ({attributes}) => {
  
    const clientId = attributes.clientId,
    altText = ! window.wpmozo.wpmozo_is_empty( attributes.altText ) 
    	? attributes.altText
    	: 'alt';
 
    return (
        <div className="swiper-slide" id={`block-${clientId}`}>
            <div className="logo-wrap">
                <img className="logo-img" src={ attributes.logo.url } alt={altText} />
            </div>
        </div>
    );
};

export default Save;