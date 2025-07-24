import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import {Fragment} from "@wordpress/element";
import { useEffect } from '@wordpress/element';
import Inspector from './inspector';


/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */

import './editor.scss';

import classnames from 'classnames';
import { RichText } from '@wordpress/block-editor';


export default function Edit(props) {

	const { attributes, setAttributes, className, isSelected, clientId } = props;

	const ID = attributes.ID ?? clientId;
	if (attributes.ID !== ID) setAttributes({ ID });

	const {
		image,
		tooltipText,
		showTooltip
	} = attributes;

	const imageSrc = image && image.url ? image.url : (typeof wpmozo_bna_editor_object !== 'undefined' ? wpmozo_bna_editor_object.placeholderImg : '');
	const defaultedAlt = image && image.alt ? image.alt : '';

	useEffect(() => {
		// Only update if imageSrc is different from the current image.url
		if (imageSrc && (!image || image.url !== imageSrc)) {
			setAttributes({
				image: {
					...(attributes.image || {}),
					url: imageSrc
				}
			});
		}
	}, [imageSrc, image]);

	return (
		<>
			{ isSelected && (
				<Inspector attributes={attributes} setAttributes={setAttributes} />
			) }
			<div
				className={classnames('wpmozo-image-stack-item'
				)} data-id={ID}
			>
				<span className={`wpmozo-stack-item-wrapper stack-item-type-image`}>
					<img
						className="wpmozo-stack-item-img"
						alt={defaultedAlt}
						src={imageSrc}
						loading="lazy"
					/>
				</span>
			</div>
			{true === showTooltip && (
				<div className={`wpmozo-image-stack-tooltip-content`}  data-id={ID}>
					<RichText
						tagName="p"
						value={tooltipText}
						onChange={(newValue) => setAttributes({titltooltipTexte: newValue})}
					/>
				</div>
			)}
		</>
	);
}
