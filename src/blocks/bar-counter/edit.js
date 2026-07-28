import {__} from "@wordpress/i18n";
import {Fragment,useEffect } from "@wordpress/element";
import {useBlockProps, RichText} from "@wordpress/block-editor";
import Inspector from './inspector';
/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';
import generateDynamicStyle from "./style";
import { mergeWrapperProps } from '../../common/utils.js';

const Edit = (props) => {

    let attributes = props.attributes,
        clientId = props.clientId,
        setAttributes = props.setAttributes,
        wrapArgs = attributes?.ID && mergeWrapperProps( { 
			className: `wpmozo-bna-bar-coutner-main${ attributes?.wrapIsHover ? ' is_hover' : '' }` ,
			style: {}
		}, attributes ),
		wrapProps = wrapArgs?.wrapprops,
		blockProps = useBlockProps(wrapProps),
		wrapStyle = wrapArgs?.wrapStyle,
        isEdit = true;

    let emptyBarEnabled = '';

    if (attributes.displayEmptyBar) {
        emptyBarEnabled = 'empty-bar-enabled';
    }

    // Ensure ID is set once (no render-time mutation).
	useEffect( () => {
		if ( attributes.ID !== clientId ) {
			setAttributes( { ID: clientId } );
		}
		const updates = {};
		if ( attributes.ID !== clientId ) {
			updates.ID = clientId;
		}

		// wrapStyle recalculate karke attribute mein store karo
		if ( attributes.ID ) {
			if ( wrapStyle && wrapStyle !== attributes.wrapStyle ) {
				updates.wrapStyle = wrapStyle;
			}
		}

		if ( Object.keys( updates ).length ) {
			setAttributes( updates );
		}
	}, [ clientId, JSON.stringify( attributes ) ] ); // eslint-disable-line react-hooks/exhaustive-deps.

    return (
        <Fragment>
            <Inspector attributes={attributes} setAttributes={setAttributes} />
            <style>
                {generateDynamicStyle({attributes, clientId, isEdit})}
            </style>
            <div {...blockProps} id={`block-${attributes.ID}`}>
                <div className={`wpmozo-bna-bar-counter ${emptyBarEnabled}`}>
                    <div className={`wpmozo-ban-bar-counter-wrapper ${attributes.layoutType}`}>
						{attributes.title && (
							<RichText
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
        </Fragment>
    );
}

export default Edit;