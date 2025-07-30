import { __ } from '@wordpress/i18n';
import { 
    Icon,
    __experimentalToggleGroupControlOptionIcon,
    __experimentalToggleGroupControl,
    SVG,
    Path
} from '@wordpress/components';
import './style.scss';

const WpmozoAlignment = (args) => {
    const {
        alignmentKey,
        type = 'horizontal',
        value,
        onChange,
        label = __( 'Alignment', 'wpmozo-blocks-and-addons' ),
        className = `wpmozo-alignment-compo ${type}`,
        alignments,
        showJustify = false
    } = args;

    const horizontalAlignments = {
        left: (
            <__experimentalToggleGroupControlOptionIcon
                key={`wpmozo-alignment-left-${alignmentKey}`}
                value="left"
                icon={<Icon icon="editor-alignleft" />}
                label={__('Left', 'wpmozo-blocks-and-addons')}
            />
        ),
        center: (
            <__experimentalToggleGroupControlOptionIcon
                key={`wpmozo-alignment-center-${alignmentKey}`}
                value="center"
                icon={<Icon icon="editor-aligncenter" />}
                label={__('Center', 'wpmozo-blocks-and-addons')}
            />
        ),
        right: (
            <__experimentalToggleGroupControlOptionIcon
                key={`wpmozo-alignment-right-${alignmentKey}`}
                value="right"
                icon={<Icon icon="editor-alignright" />}
                label={__('Right', 'wpmozo-blocks-and-addons')}
            />
        ),
    };

    // Add justify option only if showJustify is true
    if ( showJustify ) {
        horizontalAlignments.justify = (
            <__experimentalToggleGroupControlOptionIcon
                key={ `wpmozo-alignment-justify-${alignmentKey}` }
                value="justify"
                icon={ <Icon icon="editor-justify" /> }
                label={ __( 'Justify', 'wpmozo-blocks-and-addons' ) }
            />
        );
    }

    const verticalAlignments = {
        top: (
            <__experimentalToggleGroupControlOptionIcon
                key={`wpmozo-alignment-top-${alignmentKey}`}
                value="top"
                icon={
                    <SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <Path d="M9 20h6V9H9v11zM4 4v1.5h16V4H4z" />
                    </SVG>
                }
                label={__('Top', 'wpmozo-blocks-and-addons')}
            />
        ),
        center: (
            <__experimentalToggleGroupControlOptionIcon
                key={`wpmozo-alignment-center-${alignmentKey}`}
                value="center"
                icon={
                    <SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <Path d="M20 11h-5V4H9v7H4v1.5h5V20h6v-7.5h5z" />
                    </SVG>
                }
                label={__('Center', 'wpmozo-blocks-and-addons')}
            />
        ),
        bottom: (
            <__experimentalToggleGroupControlOptionIcon
                key={`wpmozo-alignment-bottom-${alignmentKey}`}
                value="bottom"
                icon={
                    <SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <Path d="M15 4H9v11h6V4zM4 18.5V20h16v-1.5H4z" />
                    </SVG>
                }
                label={__('Bottom', 'wpmozo-blocks-and-addons')}
            />
        ),
    };

    const alignmentOptions = type === 'vertical' ? verticalAlignments : horizontalAlignments;

    const renderAlignments = alignments
        ? alignments.map((key) => alignmentOptions[key])
        : Object.values(alignmentOptions);

    return (
        <__experimentalToggleGroupControl
            key={`wpmozo-alignment-${type}-${alignmentKey}`}
            className={className}
            onChange={onChange}
            label={label}
            isDeselectable={true}
            isBlock={true}
            value={value}
        >
            {renderAlignments}
        </__experimentalToggleGroupControl>
    );
};

export default WpmozoAlignment;
