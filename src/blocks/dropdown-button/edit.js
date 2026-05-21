import { __ } from "@wordpress/i18n";
import { Fragment, useEffect } from "@wordpress/element";
import { useBlockProps } from "@wordpress/block-editor";

import Inspector from "./inspector";
import generateDynamicStyle from "./style";

const Edit = (props) => {

	const { attributes, setAttributes, clientId } = props;

	// Ensure ID is set once (no render-time mutation).
	useEffect( () => {
		if ( attributes.ID !== clientId ) {
			setAttributes( { ID: clientId } );
		}
	}, [ clientId ] ); // eslint-disable-line react-hooks/exhaustive-deps.

	useEffect( () => {
		const event = new CustomEvent( 'WPMozoDropdownButtonPropsChanged' );
		window.dispatchEvent( event );

		const iframe = document.querySelector( 'iframe[name="editor-canvas"]' );
		if ( iframe?.contentWindow ) {
			iframe.contentWindow.dispatchEvent( event );
		}
	}, [props] );

	// Dropdown button.
	let $buttonIcon = '';
	if ( attributes.buttonUseIcon && attributes.buttonIcon ) {
		$buttonIcon = <i className={ 'wpmozo-icon ' + attributes.buttonIcon }></i>;
	}
	let $button = <a href="javascript:void(0)"
		target={ ( 'external' === attributes.buttonLinkTarget ) ? '_blank' : false }
		className={ [
			'wpmozo-button',
			'wpmozo_dropdown_button',
			( attributes.buttonUseIcon && attributes.buttonIconOnHover ) ? 'wpmozo-icon-on-hover' : '',
			( attributes.buttonUseIcon && 'before' === attributes.buttonIconPosition ) ? 'wpmozo-icon-at-before' : ( ( attributes.buttonUseIcon ) ? 'wpmozo-icon-at-after' : '' )
		].filter( Boolean ).join(" ") } // Filter to remove blank space.
	>
		<span className='wpmozo-btn-text'>{ attributes.buttonText || __( 'Click here', 'wpmozo-blocks-and-addons' ) }</span>
		{ $buttonIcon }
	</a>;

	// Dropdown items.
	let dropdownItems = [];
	( attributes.linkItems || [] ).map( ( linkItem, index ) => {
		dropdownItems.push(
			<div key={ 'wpmozo-dropdown-item-' + index } className="wpmozo_dropdown_button_item">
				<a href="javascript:void(0)"
					target={ ( 'external' === linkItem.target ) ? '_blank' : false }
				>{ linkItem.text }</a>
			</div>
		);
	} );

	return (
		<Fragment>
			<Inspector attributes={attributes} setAttributes={setAttributes} />
			<style>{ generateDynamicStyle( { attributes } ) }</style>

			<div { ...useBlockProps() } id={`block-${attributes.ID}`}>
				<div className="wpmozo_dropdown_button_wrap"
					data-trigger-type={ attributes.triggerType || 'click' }
					data-direction={ attributes.dropdownDirection || 'bottom' }
				>
					<div className="wpmozo_dropdown_button_inner">
						{ $button }
						<div className="wpmozo_dropdown_menu_items">{ dropdownItems }</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default Edit;
