import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText } from '@wordpress/block-editor';
import Inspector from './inspector';
import { Fragment } from "@wordpress/element";
import generateDynamicStyle from './style';
import { useSelect } from '@wordpress/data';

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


	const parentAttributes = useSelect((select) => {
		const { getBlockRootClientId, getBlock } = select('core/block-editor');
		const parentId = getBlockRootClientId(clientId);
		return parentId ? getBlock(parentId)?.attributes : null;
	}, [clientId]);
	attributes.parentAtts = parentAttributes;

	attributes.ID = clientId;

	return (
		<Fragment>
			<Inspector attributes={attributes} setAttributes={setAttributes} />
			<style>
				{ generateDynamicStyle({ attributes, clientId, parentAttributes }) }
			</style>
			<div {...useBlockProps({className: 'wpmozo-advanced-button-child', id: `block-${clientId}`})}>
				<div className="wpmozo-button-container">
					<div className="wpmozo-button-item">
						<div className="wpmozo-button-wrapper">
							<a
								className={`wpmozo-button-link${showOnHover}${bkStyle}`}
								href="javascript:void(0)"
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
		</Fragment>
	);
}
