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
                <div className={`wpmozo-bna-bar-counter ${emptyBarEnabled}`}>
                    <div className={`wpmozo-ban-bar-counter-wrapper ${attributes.layoutType}`}>
						{attributes.title && (
							<RichText.Content
								className="wpmozo-bna-bar-counter-title"
								tagName={attributes.titleLavel}
								value={attributes.title}
								onChange={(newValue) => setAttributes({title: newValue})}
							/>
						)}
                        <div className="wpmozo-bna-bar-counter-bar-wrapper">
                            {/* Layout 1 */}
                            {attributes.layoutType === 'layout1' && (
                                <>
                                    {attributes.displayEmptyBar && (
                                        <div className="wpmozo-bna-bar-counter-bar">
                                            <div
                                                className="wpmozo-bna-bar-counter-filled-bar-wrapper"
                                                data-percent={`${attributes.percentage}%`}
                                                style={{width: `${attributes.percentage}%`}}
                                            >
                                                {attributes.useStripes ? (
                                                    <div
                                                        className="wpmozo-bna-bar-counter-filled-bar wpmozo-bna-bar-counter-animated-striped-bar"></div>
                                                ) : (
                                                    <div className="wpmozo-bna-bar-counter-filled-bar"></div>
                                                )}
                                                <span
                                                    className="wpmozo-bna-bar-counter-percent">{attributes.percentage}%</span>
                                            </div>
                                        </div>
                                    )}

                                    {!attributes.displayEmptyBar && (
                                        <div
                                            className="wpmozo-bna-bar-counter-filled-bar-wrapper"
                                            data-percent={`${attributes.percentage}%`}
                                            style={{width: `${attributes.percentage}%`}}
                                        >
                                            {attributes.useStripes ? (
                                                <div
                                                    className="wpmozo-bna-bar-counter-filled-bar wpmozo-bna-bar-counter-animated-striped-bar"></div>
                                            ) : (
                                                <div className="wpmozo-bna-bar-counter-filled-bar"></div>
                                            )}
                                            <span
                                                className="wpmozo-bna-bar-counter-percent">{attributes.percentage}%</span>
                                        </div>
                                    )}
                                </>
                            )}

                            {/* Layout 2 */}
                            {attributes.layoutType === 'layout2' && (
                                <div className="wpmozo-bna-bar-counter-filled-bar-wrapper"
                                     data-percent={`${attributes.percentage}%`}>
                                    {Array.from({length: 10}, (_, i) => {
                                        const index = i + 1;
                                        if (index <= (attributes.percentage / 10)) {
                                            return (
                                                <div key={index}
                                                     className="wpmozo-bna-bar-counter-chunks wpmozo-bna-bar-counter-filled-chunks wpmozo-animate-filled"></div>
                                            );
                                        } else if (attributes.displayEmptyBar) {
                                            return (
                                                <div key={index}
                                                     className="wpmozo-bna-bar-counter-chunks wpmozo-bna-bar-counter-empty-chunks"></div>
                                            );
                                        }
                                        return null;
                                    })}

                                    <span className="wpmozo-bna-bar-counter-percent">{attributes.percentage}%</span>
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
