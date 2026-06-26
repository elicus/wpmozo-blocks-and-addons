import {__} from "@wordpress/i18n";
import {Fragment} from "@wordpress/element";
import {useBlockProps, RichText} from "@wordpress/block-editor";
import Inspector from './inspector';
import './editor.scss';
import generateDynamicStyle from "./style";

const Edit = (props) => {

    let attributes = props.attributes,
        clientId = props.clientId,
        setAttributes = props.setAttributes,
        blockProps = useBlockProps({className: 'wpmozo-bna-progress-bar-main'});

    let emptyBarEnabled = '';

    if (attributes.displayEmptyBar) {
        emptyBarEnabled = 'empty-bar-enabled';
    }

    attributes.ID = clientId;

    return (
        <Fragment>
            <Inspector attributes={attributes} setAttributes={setAttributes} />
            <style>
                {generateDynamicStyle({attributes, clientId})}
            </style>
            <div {...blockProps} id={`block-${attributes.ID}`}>
                <div className={`wpmozo-bna-progress-bar ${emptyBarEnabled}`}>
                    <div className={`wpmozo-bna-progress-bar-wrapper ${attributes.layoutType}`}>
						{attributes.title && (
							<RichText
								className="wpmozo-bna-progress-bar-title"
								tagName={attributes.titleLavel}
								value={attributes.title}
								onChange={(newValue) => setAttributes({title: newValue})}
							/>
						)}
                        <div className="wpmozo-bna-progress-bar-bar-wrapper">
                            {/* Layout 1 */}
                            {attributes.layoutType === 'layout1' && (
                                <>
                                    {attributes.displayEmptyBar && (
                                        <div className="wpmozo-bna-progress-bar-bar">
                                            <div
                                                className="wpmozo-bna-progress-bar-filled-bar-wrapper"
                                                data-percent={`${attributes.percentage}%`}
                                                style={{width: `${attributes.percentage}%`}}
                                            >
                                                {attributes.useStripes ? (
                                                    <div
                                                        className="wpmozo-bna-progress-bar-filled-bar wpmozo-bna-progress-bar-animated-striped-bar"></div>
                                                ) : (
                                                    <div className="wpmozo-bna-progress-bar-filled-bar"></div>
                                                )}
                                                <span
                                                    className="wpmozo-bna-progress-bar-percent">{attributes.percentage}%</span>
                                            </div>
                                        </div>
                                    )}

                                    {!attributes.displayEmptyBar && (
                                        <div
                                            className="wpmozo-bna-progress-bar-filled-bar-wrapper"
                                            data-percent={`${attributes.percentage}%`}
                                            style={{width: `${attributes.percentage}%`}}
                                        >
                                            {attributes.useStripes ? (
                                                <div
                                                    className="wpmozo-bna-progress-bar-filled-bar wpmozo-bna-progress-bar-animated-striped-bar"></div>
                                            ) : (
                                                <div className="wpmozo-bna-progress-bar-filled-bar"></div>
                                            )}
                                            <span
                                                className="wpmozo-bna-progress-bar-percent">{attributes.percentage}%</span>
                                        </div>
                                    )}
                                </>
                            )}

                            {/* Layout 2 */}
                            {attributes.layoutType === 'layout2' && (
                                <div className="wpmozo-bna-progress-bar-filled-bar-wrapper"
                                     data-percent={`${attributes.percentage}%`}>
                                    {Array.from({length: 10}, (_, i) => {
                                        const index = i + 1;
                                        if (index <= (attributes.percentage / 10)) {
                                            return (
                                                <div key={index}
                                                     className="wpmozo-bna-progress-bar-chunks wpmozo-bna-progress-bar-filled-chunks wpmozo-animate-filled"></div>
                                            );
                                        } else if (attributes.displayEmptyBar) {
                                            return (
                                                <div key={index}
                                                     className="wpmozo-bna-progress-bar-chunks wpmozo-bna-progress-bar-empty-chunks"></div>
                                            );
                                        }
                                        return null;
                                    })}

                                    <span className="wpmozo-bna-progress-bar-percent">{attributes.percentage}%</span>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default Edit;
