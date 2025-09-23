import { __ } from '@wordpress/i18n';
import { Fragment, useEffect } from '@wordpress/element';
import { useBlockProps, RichText } from '@wordpress/block-editor';
import Inspector from './inspector';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import generateDynamicStyle from "./style";

const Edit = ( props ) => {

	const { attributes, setAttributes, clientId } = props;

	// Ensure ID is set once (no render-time mutation).
	useEffect( () => {
		if ( attributes.ID !== clientId ) {
			setAttributes( { ID: clientId } );
		}
	}, [ clientId ] ); // eslint-disable-line react-hooks/exhaustive-deps.

	// Get the title.
	let $title = '';
	if ( attributes.title ) {
		$title = <RichText
			className="wpmozo-bna-bg-switcher-title"
			tagName={ attributes?.titleLevel || 'h2' }
			value={ attributes.title }
			onChange={ ( newValue ) => setAttributes( { title: newValue } ) }
		/>;
	}

	// Get the description.
	let $description = '';
	if ( attributes.description ) {
		$description = <RichText
			className="wpmozo-bna-bg-switcher-desc"
			tagName={ 'div' }
			value={ attributes.description }
			onChange={ ( newValue ) => setAttributes( { description: newValue } ) }
		/>;
	}

	let $button = '';

	let $hoverContent = '';
	if ( $description || $button ) {
		$hoverContent = (
			<div className="wpmozo_bna_bg_switcher_hover_content">
				{ $description }
				{ $button }
			</div>
		);
	}
	

	return (
		<Fragment>
			<Inspector attributes={attributes} setAttributes={setAttributes} />
			<style>{ generateDynamicStyle( { attributes } ) }</style>

			<div {...useBlockProps()} id={`block-${attributes.ID}`}>
				<div className="wpmozo_bna_bg_switcher_item_wrap">
					<div className="wpmozo_bna_bg_switcher_content">
						{ $title }
						{ $hoverContent }
					</div>
				</div>
			</div>
		</Fragment>
	);
}

export default Edit;
