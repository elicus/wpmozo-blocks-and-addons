import {RichText, useBlockProps} from '@wordpress/block-editor';
import generateDynamicStyle from "./style";

const Save = ({ attributes }) => {
    const ID = attributes.ID;

    const renderLayoutShape = () => {
        if ('circle' === attributes.layout) {
            return (
                <svg className="wpmozo-bna-progress-bar-circle" viewBox="0 0 100 100">
                    <circle className="wpmozo-bna-fill-progress-bar-bg" cx="50" cy="50" r="45" />
                    <circle className="wpmozo-bna-circle-bg" cx="50" cy="50" r="45" />
                    <circle className="wpmozo-bna-circle-fg" cx="50" cy="50" r="45" />
                </svg>
            );
        } else if ('half_circle' === attributes.layout) {
            return (
                <svg className="wpmozo-bna-half-circle" viewBox="0 0 200 100">
                    <path className="wpmozo-bna-circle-bg" d="M 10 100 A 90 90 0 0 1 190 100" />
                    <path className="wpmozo-bna-circle-fg" d="M 10 100 A 90 90 0 0 1 190 100" />
                </svg>
            );
        }
        return null;
    };

    const renderInnerContent = () => {
        if ('bar' === attributes.layout) {
            return (
                <div className="wpmozo-bna-progress-bar-inner">
                    {attributes.showNumber && (
                        <span className="wpmozo-bna-progress-bar-percent">0%</span>
                    )}
                </div>
            );
        } else {
            return (
                <div className="wpmozo-bna-progress-bar-inner">
                    {renderLayoutShape()}
                    {attributes.showNumber && (
                        <span className="wpmozo-bna-progress-bar-percent">0%</span>
                    )}
                </div>
            );
        }
    };

    return (
        <>
            <style>{ generateDynamicStyle({ attributes }) }</style>

            <div {...useBlockProps.save({ className: attributes.className })} id={`block-${ID}`}>
                <div 
                    className={`wpmozo-bna-progress-bar-wrapper wpmozo-bna-progress-bar-layout-${attributes.layout} ${attributes.showStriped ? 'wpmozo-bna-progress-bar-striped' : ''}`}
                    data-bar_direction={'bar' === attributes.layout ? attributes.barDirection : undefined}
                >
                    {renderInnerContent()}
                </div>
            </div>
        </>
    );
};

export default Save;
