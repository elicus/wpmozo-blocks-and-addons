
import { useBlockProps } from "@wordpress/block-editor";
import { createElement } from "@wordpress/element";

const Save = ({ attributes }) => {

    const clientId = attributes.clientId;

    const allText = (
        <>
            <span className="wpmozo-adfgu-pre-text">{ attributes.preHeading }</span>
            <span className="wpmozo-adfgu-main-text">{ attributes.mainHeading }</span>
            <span className="wpmozo-adfgu-post-text">{ attributes.postHeading }</span>
        </>
    );

    const heading = createElement( attributes.headingLavel, {
        className: 'wpmozo-adfgu-fancy-heading-inner'
    }, allText );

    return (
        <div {...useBlockProps.save({ className: 'wpmozo-adfgu-fancy-heading-wrap' })} id={`block-${clientId}`}>
            {heading}
        </div>
    );
};

export default Save;