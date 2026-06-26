import {RichText, useBlockProps} from '@wordpress/block-editor';
import generateDynamicStyle from "./style";

const Save = ({ attributes }) => {

    let ID = attributes.ID,
    	emptyBarEnabled = '';

    if (attributes.displayEmptyBar) {
        emptyBarEnabled = 'empty-bar-enabled';
    }

    return (
        <>
            <style>{ generateDynamicStyle({attributes }) }</style>

            <div {...useBlockProps.save( { className: attributes.className } ) } id={`block-${ID}`}>
                <div className={`wpmozo-bna-progress-bar ${emptyBarEnabled}`}>
                    <div className={`wpmozo-bna-progress-bar-wrapper ${attributes.layoutType}`}>
						{attributes.title && (
							<RichText.Content
								className="wpmozo-bna-progress-bar-title"
								tagName={attributes.titleLavel}
								value={attributes.title}
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
        </>
    );
}
export default Save;
