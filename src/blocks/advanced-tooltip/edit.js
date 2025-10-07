import {__} from "@wordpress/i18n";
import {Fragment,useState, useEffect} from "@wordpress/element";
import { useBlockProps, InnerBlocks, BlockControls } from '@wordpress/block-editor';
import {ToolbarGroup, ToggleControl, ToolbarButton} from "@wordpress/components";
import Inspector from './inspector';
import generateDynamicStyle from './style';
/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

const ALLOWED_BLOCKS = [
	'core/paragraph',
	'core/heading',
	'core/list',
	'core/image',
	'core/quote',
	'core/separator',
	'core/spacer',
	'core/button',
	'core/columns',
	'core/group',
	'core/embed',
	'core/video',
	'core/audio'
];

export default function Edit(props) {

	const { attributes, setAttributes, clientId } = props;

	let image = ( attributes.image ) ? attributes.image.url : attributes.image,
		isSelected = props.isSelected,
		tooltipVisible = (attributes.showTooltip) ? ' tooltip-visible' : '';

	const [showTooltip, setShowTooltip] = useState(false);

	// Ensure ID is set once (no render-time mutation).
	useEffect( () => {
		if ( attributes.ID !== clientId ) {
			setAttributes( { ID: clientId } );
		}
	}, [ clientId ] ); // eslint-disable-line react-hooks/exhaustive-deps.

	useEffect(() => {
		const event = new CustomEvent('WPMozoButtonPropsChanged');
		window.dispatchEvent(event);
		const iframe = document.querySelector( 'iframe[name="editor-canvas"]' );
		if ( iframe?.contentWindow ) {
			iframe.contentWindow.dispatchEvent( event );
		}
	}, [props]);

	let $button = '';
	let $buttonIcon = '';
	if ( attributes.buttonIconStyle && attributes.buttonIcon ) {
		$buttonIcon = <i className={ 'wpmozo-bna-icon ' + attributes.buttonIcon }></i>;
	}
	$button = <div className="wpmozo-bna-button-wrap">
		<a href="javascript:void(0)"
		   className={ [
			   'wpmozo-bna-button',
			   'wpmozo_promotion_bar_button',
			   ( attributes.buttonIconStyle && attributes.buttonIconOnHover ) ? 'wpmozo-icon-on-hover' : '',
			   ( attributes.buttonIconStyle && 'before' === attributes.buttonIconPosition ) ? 'wpmozo-icon-at-before' : 'wpmozo-icon-at-after'
		   ].join(" ") }
		>
			<span className='wpmozo-bna-btn-text'>{ attributes.triggerButtonText}</span>
			{ $buttonIcon }
		</a>
	</div>;

    return (
		<>
			<Fragment>
				<Inspector attributes={attributes} setAttributes={setAttributes}/>
				<style>
					{generateDynamicStyle({attributes})}
				</style>
				<div {...useBlockProps()} id={`block-${clientId}`}>
					<div className={`wpmozo_advanced_tooltip icon_`}>
						<div
							className={`wpmozo_tooltip_trigger_element_wrap trigger_type_${attributes.trigerElement}`}
							{...(attributes.triggerButtonUrl ? {href: attributes.triggerButtonUrl, target: "_blank"} : {})}
							data-trigger-action={attributes.trigerAction}
							data-animation={attributes.entranceAnimation}
							data-duration={attributes.animationDuration}
							data-interactive={attributes.makeInteractiveTooltip}
							data-tooltip-width={attributes.tooltipWidth}
							data-trigger-element={attributes.trigerElement}
							// onClick={() => setShowTooltip(!showTooltip)}
						>
							{'button' === attributes.trigerElement && attributes.triggerButtonText?.trim() && (
								// <div className={`wpmozo_readmore_button_wrapper`}>
								// 	<a className={`wpmozo_readmore_button wpmozo_tooltip_trigger_element wpmozo_tooltip_trigger_button`}>
								// 		<span className={`wpmozo_button_text`}>
								// 			{attributes.triggerButtonText}
								// 		</span>
								// 	</a>
								// </div>
								<>
									{ $button }
								</>

							)}

							{'image' === attributes.trigerElement && attributes.image && (
								<img className={`wpmozo_tooltip_trigger_element wpmozo_tooltip_trigger_image`} src={image} aria-expanded="false"/>
							)}
							{'icon' === attributes.trigerElement && attributes.icon && (
								<i className={`wpmozo_tooltip_trigger_element wpmozo_tooltip_trigger_icon `+ attributes.icon}></i>
							)}
							{'text' === attributes.trigerElement && attributes.triggerText && (
								<span className={`wpmozo_tooltip_trigger_element wpmozo_tooltip_trigger_text`}>{attributes.triggerText}</span>
							)}
						</div>
						<div className={`wpmozo_advanced_tooltip_content_wrap${tooltipVisible ? ' ' + tooltipVisible : ''}`}>
							{attributes.showTooltip && (
								<div className="tooltip-content tooltip-visible">
									<div className="tooltip-header">
										<h4>{__('Tooltip Content', 'button-with-tooltip-block-wp')}</h4>
									</div>
									<div className="tooltip-inner-blocks">
										<InnerBlocks
											allowedBlocks={ALLOWED_BLOCKS}
											placeholder={__('Add blocks to show in the tooltip...', 'button-with-tooltip-block-wp')}
											templateLock={false}
											renderAppender={InnerBlocks.DefaultBlockAppender}
										/>
									</div>
								</div>
							)}
						</div>
					</div>
				</div>
			</Fragment>
		</>
	);
}
