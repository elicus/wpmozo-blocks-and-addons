import {Fragment, useEffect} from "@wordpress/element";
import {useBlockProps} from "@wordpress/block-editor";

const WPMozoEditorObj = wpmozo_bna_editor_object;

const Save = ({attributes}) => {

    const coreFunc = window.wpmozo, ID = attributes.ID,
        Tag = attributes.selectDisplayTag || 'p'; // fallback to "p" if not set


    return (
        <div{...useBlockProps.save({className: `wpmozo-bna-text-animator-main ${attributes.displayInStack ? ' display-in-stack-yes' : ''}`})} id={`block-${ID}`}>
            <div className={`wpmozo-bna-text-animator wpmozo-bna-text-animator-wrapper }`}>
                <Tag className={`wpmozo-${attributes.selectAnimation} wpmozo-text-heading`}>
                    <span className="wpmozo-pre-text-wrapper wpmozo-pre-post">{attributes.preText}</span>
                    <span
                        className="wpmozo-animated-text wpmozo-main-part"
                        data-wait-time={attributes.animationDelay}
                        data-animation-time={attributes.animationDuration}
                        data-text={attributes.animatedText}
                        data-stop-animation-on-hover={attributes.stopAnimationOnHover ? 'on' : 'off'}
                        data-typing-time="100"
                        data-erasing-time="100"
                    >
                          {attributes.animatedText}
                        </span>
                    <span className="wpmozo-pre-text-wrapper wpmozo-pre-post">{attributes.postText}</span>
                </Tag>
            </div>
        </div>
    );
};

export default Save;