import { useBlockProps } from '@wordpress/block-editor';
import generateDynamicStyle from './style';
import { mergeWrapperProps } from '../../common/utils.js';

export default function save({ attributes }) {

	const clientId   = attributes.ID,
		wrapArgs = attributes?.ID && mergeWrapperProps( {
			className: "wpmozo-advanced-button-child", 
			id: `block-${clientId}`
		}, attributes ),
		wrapProps = wrapArgs?.wrapprops,
		blockProps = useBlockProps.save(wrapProps),
		wrapStyle = wrapArgs?.wrapStyle;

	let showOnHover = (attributes.showMediaOnHover) ? ' show-on-hover' : '',
		bkStyle = attributes.backgroundFillStyle ? ` wpmozo_button_${attributes.backgroundFillStyle}` : '';

	return (
		<>
			<style>
				{ `${ generateDynamicStyle({ attributes }) }` }
			</style>
			<div {...blockProps}>
				{/* Button container */}
				<div className="wpmozo-button-container">
					<div className="wpmozo-button-item">
						<div className="wpmozo-button-wrapper">

							{/* Main button link */}
							<a
								className={`wpmozo-button-link${showOnHover}${bkStyle}`} // Dynamic classes (hover effect + background style)
								href="javascript:void(0)" // Prevents navigation
								{...(attributes.buttonLinkTarget !== 'same' ? {target: "_blank"} : {})} // Open in new tab if target ≠ 'same'
							>
								{/* Primary text + optional icon */}
								<span className="wpmozo-primary-text-with-icon">
									<span className="wpmozo-button-text wpmozo-button-icon">
										{attributes.buttonText} {/* Button text */}
									</span>

									{/* Icon (rendered only if enabled) */}
									{true === attributes.iconButton && (
										<i className={attributes.icon + ' wpmozo-bna-button-icon'}></i>
									)}
								</span>

								{/* Secondary text (optional) */}
								{attributes.buttonSecondaryText && (
									<span className="wpmozo-button-secondary-text">
										{attributes.buttonSecondaryText}
									</span>
								)}

								{/* Background hover/animation effect */}
								<span className="wpmozo-background-effect-wrap"></span>
							</a>

						</div>
					</div>
				</div>
			</div>
		</>
	);
}
