import { __ } from '@wordpress/i18n';

import {
	Button,
	PanelBody,
	TextControl,
} from "@wordpress/components";
import { Icon, reusableBlock, trash } from '@wordpress/icons';

export const GeneralPanel = ( { attributes, setAttributes } ) => {
	const props = { attributes, setAttributes, preAttributes: {} };

	return ( <>
		{/* Business Hours. */}
		<PanelBody title={ __( 'Business Hours', 'wpmozo-blocks-and-addons' ) } initialOpen={true}>
			{ ( attributes.hours || [] ).map( ( hourItem, index ) => (
				<div key={index} className="wpmozo-repeater-row wpmozo-business-hours-repeator">
					<h4 className="wpmozo-repeator-title">{ __( `Business Hour ${index + 1}`, 'wpmozo-blocks-and-addons' ) }</h4>
					<TextControl
						label={ __( `Day`, 'wpmozo-blocks-and-addons' ) }
						value={ hourItem['day'] || '' }
						onChange={ ( value ) => {
							const newItems  = [ ...( attributes.hours || [] ) ];
							newItems[index] = { ...newItems[index], day: value };
							setAttributes( { hours: newItems } );
						} }
						__next40pxDefaultSize={true} __nextHasNoMarginBottom={true}
					/>
					<TextControl
						label={ __( `Time`, 'wpmozo-blocks-and-addons' ) }
						value={ hourItem['time'] || '' }
						onChange={ ( value ) => {
							const newItems  = [ ...( attributes.hours || [] ) ];
							newItems[index] = { ...newItems[index], time: value };
							setAttributes( { hours: newItems } );
						} }
						__next40pxDefaultSize={true} __nextHasNoMarginBottom={true}
					/>
					<Button isDestructive className='wpmozo-repeator-trash' variant="secondary" icon={trash}
						label={ __( 'Remove', 'wpmozo-blocks-and-addons' ) }
						onClick={ () => {
							const newItems = ( attributes.hours || [] ).filter( ( _, innerIndex ) => innerIndex !== index );
							setAttributes( { hours: newItems } );
						} }
					>
						<span className="screen-reader-text">{ __( 'Remove', 'wpmozo-blocks-and-addons' ) }</span>
					</Button>
					<Button className='wpmozo-repeator-duplicate' variant="secondary" icon={reusableBlock}
						label={ __( 'Duplicate', 'wpmozo-blocks-and-addons' ) }
						onClick={ () => {
							const items = attributes.hours || [];

							const newItems = [
								...items.slice(0, index + 1),
								{ ...items[index] }, // duplicate object
								...items.slice(index + 1),
							];

							setAttributes({ hours: newItems });
						} }
					>
						<span className="screen-reader-text">{ __( 'Duplicate', 'wpmozo-blocks-and-addons' ) }</span>
					</Button>
				</div>
			) ) }
			<Button isPrimary
				onClick={ () => {
					const newItems = [ ...( attributes.hours || [] ), { text: '', link: '' } ];
					setAttributes( { hours: newItems } );
				} }
			>
				{ __( 'Add New Item', 'wpmozo-blocks-and-addons' ) }
			</Button>
		</PanelBody>
	</> );
};
