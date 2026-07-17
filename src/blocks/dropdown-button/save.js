import { __ } from "@wordpress/i18n";
import { useBlockProps } from '@wordpress/block-editor';
import generateDynamicStyle from "./style";
import { mergeWrapperProps } from '../../common/utils.js';

const Save = ( { attributes } ) => {

    const clientId = attributes.ID,
		wrapArgs = attributes?.ID && mergeWrapperProps( { 
			className: 'wpmozo-dropdown-button' ,
			style: {}
		}, attributes ),
		wrapProps = wrapArgs?.wrapprops,
		blockProps = useBlockProps.save(wrapProps),
		wrapStyle = wrapArgs?.wrapStyle;

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

	let dropdownItems = [];
	( attributes.linkItems || [] ).map( ( linkItem, index ) => {
		dropdownItems.push(
			<div key={ index } className="wpmozo_dropdown_button_item">
				<a href={ linkItem.link }
					target={ ( 'external' === linkItem.target ) ? '_blank' : false }
				>{ linkItem.text }</a>
			</div>
		);
	} );

    return ( <>
		<style>{ generateDynamicStyle( { attributes } ) }</style>

		<div id={`block-${clientId}`} { ...blockProps}>
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
	</> );
}

export default Save;
