
import { useBlockProps, RichText } from "@wordpress/block-editor";

const Save = ({ attributes }) => {

    const ID = attributes.ID;

    return (
        <div {...useBlockProps.save({className: 'wpmozo-adfgu-fancy-text-wrap'})} id={`block-${ID}`}>
            <div
                className={`wpmozo-adfgu-fancy-text-inner ${attributes.textStyle}`}
            >
            <RichText.Content
                tagName=''
                value={ attributes.fancyText }
            />
            </div>
        </div>
    );
};

export default Save;