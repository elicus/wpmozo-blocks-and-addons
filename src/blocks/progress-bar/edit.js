import {__} from "@wordpress/i18n";
import {Fragment} from "@wordpress/element";
import {useBlockProps, RichText} from "@wordpress/block-editor";
import Inspector from './inspector';
import './editor.scss';
import generateDynamicStyle from "./style";

const Edit = (props) => {
    const { attributes, clientId, setAttributes } = props;
    const blockProps = useBlockProps({ className: 'wpmozo-bna-progress-bar-main' });
    attributes.ID = clientId;

    // SVG length offset for static preview inside editor
    const strokeOffset = 282.74 - (attributes.percentage / 100) * 282.74;

    const renderLayoutShape = () => {
        if ('circle' === attributes.layout) {
            return (
                <svg className="wpmozo-bna-progress-bar-circle" viewBox="0 0 100 100">
                    <circle className="wpmozo-bna-fill-progress-bar-bg" cx="50" cy="50" r="45" />
                    <circle className="wpmozo-bna-circle-bg" cx="50" cy="50" r="45" />
                    <circle 
                        className="wpmozo-bna-circle-fg" 
                        cx="50" 
                        cy="50" 
                        r="45" 
                        style={{ strokeDashoffset: strokeOffset }}
                    />
                </svg>
            );
        } else if ('half_circle' === attributes.layout) {
            return (
                <svg className="wpmozo-bna-half-circle" viewBox="0 0 200 100">
                    <path className="wpmozo-bna-circle-bg" d="M 10 100 A 90 90 0 0 1 190 100" />
                    <path 
                        className="wpmozo-bna-circle-fg" 
                        d="M 10 100 A 90 90 0 0 1 190 100" 
                        style={{ strokeDashoffset: strokeOffset }}
                    />
                </svg>
            );
        }
        return null;
    };

    const renderInnerContent = () => {
        if ('bar' === attributes.layout) {
            const barStyle = {};
            if ('vertical' === attributes.barDirection) {
                barStyle.height = `${attributes.percentage}%`;
                barStyle.width = '100%';
            } else {
                barStyle.width = `${attributes.percentage}%`;
                barStyle.height = '100%';
            }

            return (
                <div className="wpmozo-bna-progress-bar-inner" style={barStyle}>
                    {attributes.showNumber && (
                        <span className="wpmozo-bna-progress-bar-percent">{attributes.percentage}%</span>
                    )}
                </div>
            );
        } else {
            return (
                <div className="wpmozo-bna-progress-bar-inner">
                    {renderLayoutShape()}
                    {attributes.showNumber && (
                        <span className="wpmozo-bna-progress-bar-percent">{attributes.percentage}%</span>
                    )}
                </div>
            );
        }
    };

    return (
        <Fragment>
            <Inspector attributes={attributes} setAttributes={setAttributes} />
            <style>
                {generateDynamicStyle({ attributes, clientId })}
            </style>
            <div {...blockProps} id={`block-${attributes.ID}`}>
                {attributes.title && (
                    <RichText
                        className="wpmozo-bna-progress-bar-title"
                        tagName={attributes.titleLavel}
                        value={attributes.title}
                        onChange={(newValue) => setAttributes({ title: newValue })}
                    />
                )}
                <div 
                    className={`wpmozo-bna-progress-bar-wrapper wpmozo-bna-progress-bar-layout-${attributes.layout} ${attributes.showStriped ? 'wpmozo-bna-progress-bar-striped' : ''}`}
                    data-bar_direction={attributes.barDirection}
                >
                    {renderInnerContent()}
                </div>
            </div>
        </Fragment>
    );
};

export default Edit;
