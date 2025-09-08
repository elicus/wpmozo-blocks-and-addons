import {useBlockProps} from '@wordpress/block-editor';
import generateDynamicStyle from "./style";

export default function save({attributes}) {

	let showOnHover = (attributes.showMediaOnHover) ? ' show-on-hover' : '',
		bkStyle = attributes.backgroundFillStyle ? ` wpmozo_button_${attributes.backgroundFillStyle}` : '';

	return (
		<>
			<style>
				{generateDynamicStyle({attributes})}
			</style>
			<div {...useBlockProps.save({className: attributes.className})} id={`block-${attributes.ID}`}>
				<div className="wpmozo-button-container">
					<div className="wpmozo-button-item">
						<div className="wpmozo-button-wrapper">
							<a
								className={`wpmozo-button-link${showOnHover}${bkStyle}`}
								href={attributes.buttonUrl}
								{...(attributes.buttonLinkTarget !== 'same' ? {target: "_blank"} : {})}
							>
								<span className="wpmozo-primary-text-with-icon">
									<span
										className="wpmozo-button-text wpmozo-button-icon">{attributes.buttonText}</span>
									{true === attributes.iconButton && (
										<i className={attributes.icon + ' wpmozo-bna-button-icon'}></i>
									)}
								</span>
								{attributes.buttonSecondaryText && (
									<span
										className="wpmozo-button-secondary-text">{attributes.buttonSecondaryText}</span>
								)}
								<span className="wpmozo-background-effect-wrap"></span>
							</a>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
