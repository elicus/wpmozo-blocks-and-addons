import {__} from '@wordpress/i18n';
import {useBlockProps} from '@wordpress/block-editor';
import {Fragment, useEffect} from '@wordpress/element';
import Inspector from './inspector';
import generateDynamicStyle from "./style";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

export default function Edit(props) {

	const {attributes, setAttributes, clientId} = props;

	// Ensure ID is set once (no render-time mutation).
	useEffect(() => {
		if (attributes.ID !== clientId) {
			setAttributes({ID: clientId});
		}
	}, [clientId]); // eslint-disable-line react-hooks/exhaustive-deps.

	useEffect( () => {
		const event = new CustomEvent( 'WPMozoSplitImagePropsChanged' );
		window.dispatchEvent( event );

		const iframe = document.querySelector( 'iframe[name="editor-canvas"]' );
		if ( iframe?.contentWindow ) {
			iframe.contentWindow.dispatchEvent( event );
		}
	}, [props] );

	const number = attributes.rows * attributes.columns;
	const gridBoxes = Array.from({length: number}).map((_, i) => (
		<span key={i} className="wpmozo_split_image_portion"></span>
	));

	const url = attributes.blockLink ? attributes.blockLink : "";
	const target = attributes.blockLinkTarget || "";
	const linkTarget = target === 'external' ? '_blank' : '_self';

	return (
		<Fragment>
			<Inspector attributes={attributes} setAttributes={setAttributes}/>
			<style>{generateDynamicStyle({attributes})}</style>

			<div
				{...useBlockProps()}
				id={`block-${attributes.ID}`}
				{...(url ? {
					onClick: () => window.open(url, linkTarget)
				} : {})}
			>
				<div className={`wpmozo_split_image_wrapper`} data-rows={`${attributes.rows}`}
					 data-columns={`${attributes.columns}`}>
					{gridBoxes}
				</div>
			</div>
		</Fragment>
	);
}
