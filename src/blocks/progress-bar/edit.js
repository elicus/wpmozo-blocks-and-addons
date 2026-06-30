import {__} from "@wordpress/i18n";
import {Fragment, useEffect, useState} from "@wordpress/element";
import {useBlockProps, RichText} from "@wordpress/block-editor";
import Inspector from './inspector';
import './editor.scss';
import generateDynamicStyle from "./style";

const Edit = (props) => {
    const { attributes, clientId, setAttributes } = props;
    const blockProps = useBlockProps({ className: 'wpmozo-bna-progress-bar-main' });
    const [scrollPercent, setScrollPercent] = useState(attributes.percentage);
    useEffect(() => {

        const updateProgress = () => {
    
            const iframe = document.querySelector('.editor-visual-editor iframe');
    
            // WordPress 7+
            if (iframe && iframe.contentDocument && iframe.contentWindow) {
    
                const doc = iframe.contentDocument;
                const win = iframe.contentWindow;
    
                const scrollTop =
                    win.scrollY ||
                    doc.documentElement.scrollTop;
    
                const scrollHeight =
                    doc.documentElement.scrollHeight -
                    win.innerHeight;
    
                const percent =
                    scrollHeight > 0
                        ? (scrollTop / scrollHeight) * 100
                        : 0;
    
                setScrollPercent(percent);
    
                return;
            }
    
            // Older editors
            const scrollTop =
                window.scrollY ||
                document.documentElement.scrollTop;
    
            const scrollHeight =
                document.documentElement.scrollHeight -
                window.innerHeight;
    
            const percent =
                scrollHeight > 0
                    ? (scrollTop / scrollHeight) * 100
                    : 0;
    
            setScrollPercent(percent);
        };
    
        updateProgress();
    
        window.addEventListener('scroll', updateProgress);
    
        const iframe = document.querySelector('.editor-visual-editor iframe');
    
        if (iframe) {
    
            iframe.addEventListener('load', () => {
    
                iframe.contentWindow?.addEventListener(
                    'scroll',
                    updateProgress
                );
    
                updateProgress();
            });
    
            if (iframe.contentWindow) {
                iframe.contentWindow.addEventListener(
                    'scroll',
                    updateProgress
                );
            }
        }
    
        return () => {
    
            window.removeEventListener(
                'scroll',
                updateProgress
            );
    
            if (iframe?.contentWindow) {
    
                iframe.contentWindow.removeEventListener(
                    'scroll',
                    updateProgress
                );
            }
        };
    
    }, []);
    useEffect(() => {
        if (attributes.ID !== clientId) {
            setAttributes({
                ID: clientId,
            });
        }
    }, [clientId, attributes.ID]);

    // SVG length offset for static preview inside editor
    const displayPercent = scrollPercent;

    const strokeOffset =
        282.74 -
        (displayPercent / 100) * 282.74;

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
                barStyle.height = `${displayPercent}%`;
                barStyle.width = '100%';
            } else {
                barStyle.width = `${displayPercent}%`;
                barStyle.height = '100%';
            }

            return (
                <div className="wpmozo-bna-progress-bar-inner" style={barStyle}>
                    {attributes.showNumber && (
                        <span className="wpmozo-bna-progress-bar-percent">{Math.round(displayPercent)}%</span>
                    )}
                </div>
            );
        } else {
            return (
                <div className="wpmozo-bna-progress-bar-inner">
                    {renderLayoutShape()}
                    {attributes.showNumber && (
                        <span className="wpmozo-bna-progress-bar-percent">{Math.round(displayPercent)}%</span>
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
