import {__} from '@wordpress/i18n';
import {useBlockProps, RichText} from '@wordpress/block-editor';
import Inspector from './inspector';
import {Fragment, useEffect} from "@wordpress/element";
import generateDynamicStyle from './style';
import {useSelect} from '@wordpress/data';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */

export default function Edit(props) {

	let attributes = props.attributes,
		clientId = props.clientId,
		setAttributes = props.setAttributes,
		showOnHover = (attributes.showMediaOnHover) ? ' show-on-hover' : '',
		bkStyle = attributes.backgroundFillStyle ? ` wpmozo_button_${attributes.backgroundFillStyle}` : '';

	// Ensure ID is set once (no render-time mutation).
	useEffect(() => {
		if (attributes.ID !== clientId) {
			setAttributes({ID: clientId});
		}
	}, [clientId]); // eslint-disable-line react-hooks/exhaustive-deps.

	return (
		<Fragment>
			<Inspector attributes={attributes} setAttributes={setAttributes}/>
			<style>
				{generateDynamicStyle({attributes})}
			</style>
			{/*Wrapper div with block props (applies block ID and classes */}
			<div {...useBlockProps({className: 'wpmozo-advanced-button-child', id: `block-${clientId}`})}>

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

		</Fragment>
	);
}
