
import { useBlockProps } from "@wordpress/block-editor";
import { createElement } from "@wordpress/element";

const Save = ({ attributes }) => {

    const ID = attributes.ID;

    const allText = (
        <>
            <span className="wpmozo-bna-pre-text">{ attributes.preHeading }</span>
            <span className="wpmozo-bna-main-text">{ attributes.mainHeading }</span>
            <span className="wpmozo-bna-post-text">{ attributes.postHeading }</span>
        </>
    );

    const heading = createElement( attributes.headingLavel, {
        className: 'wpmozo-bna-fancy-heading-inner'
    }, allText );

    return (
        <div {...useBlockProps.save({ className: 'wpmozo-bna-fancy-heading-wrap' })} id={`block-${ID}`}>
            {heading}
        </div>
    );
};

export default Save;