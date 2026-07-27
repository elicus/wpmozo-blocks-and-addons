import {RichText, useBlockProps} from '@wordpress/block-editor';
import generateDynamicStyle from "./style";
import { mergeWrapperProps } from '../../common/utils.js';

const Save = ({ attributes }) => {

    let ID = attributes.ID,
    	emptyBarEnabled = '';

    if (attributes.displayEmptyBar) {
        emptyBarEnabled = 'empty-bar-enabled';
    }
    const wrapArgs = attributes?.ID && mergeWrapperProps( { 
			className: 'wpmozo-advanced-button' ,
			style: {}
		}, attributes ),
		wrapProps = wrapArgs?.wrapprops,
		blockProps = useBlockProps.save(wrapProps),
		wrapStyle = wrapArgs?.wrapStyle;

    return (
        <>
            <style>{ generateDynamicStyle({attributes }) }</style>

            <div {...blockProps} id={`block-${ID}`}>
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
                                <div className="wpmozo-bna-bar-counter-filled-bar-wrapper">
                                    {Array.from({length: 10}, (_, i) => {
                                        const index = i + 1;
                                        const chunkMin = (index - 1) * 10;
                                        const chunkMax = index * 10;
                                        const totalPercentage = attributes.percentage || 0;
                                        let chunkFill = 0;
                                        if (totalPercentage >= chunkMax) {
                                            chunkFill = 100;
                                        } else if (totalPercentage > chunkMin) {
                                            chunkFill = Math.round(((totalPercentage - chunkMin) / 10) * 100);
                                        }
                                        if (chunkFill > 0) {
                                            return (
                                                <div key={index}
                                                     className="wpmozo-bna-bar-counter-chunks wpmozo-bna-bar-counter-filled-chunks wpmozo-animate-filled"
                                                     style={{ '--chunk-fill-width': `${chunkFill}%` }}></div>
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
