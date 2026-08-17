import { __ } from '@wordpress/i18n';
import $ from 'jquery';

import {
	Button,
	PanelBody,
	TextControl,
} from "@wordpress/components";
import { Icon, reusableBlock, trash, chevronUp } from '@wordpress/icons';
import { useState } from 'react';

export const GeneralPanel = ( { attributes, setAttributes } ) => {
	const props = { attributes, setAttributes, preAttributes: {} };
	

	return ( <>
		{/* Business Hours. */}
		<PanelBody title={ __( 'Business Hours', 'wpmozo-blocks-and-addons' ) } initialOpen={true}>
			{ ( attributes.hours || [] ).map( ( hourItem, index ) => (
				<div key={index} className="wpmozo-repeater-row  wpmozo-business-hours-repeator">
					<Button className='wpmozo-repeator-caret wpmz_open' icon={chevronUp} iconPosition='right'
						label={__( `Business Hour ${index + 1}`, 'wpmozo-blocks-and-addons' ) }
						showTooltip={false}
						onClick={ (e) => {
							e.target === 'button' ? $(e.target).toggleClass('wpmz_open wpmz_close') : $(e.target).closest('button').toggleClass('wpmz_open wpmz_close');

							const day = e.target === 'button' ? $(e.target).siblings('.wpmz-business-hours-day') : $(e.target).closest('.wpmozo-repeater-row').find('.wpmz-business-hours-day');
							
							const time = e.target === 'button' ? $(e.target).siblings('.wpmz-business-hours-time') : $(e.target).closest('.wpmozo-repeater-row').find('.wpmz-business-hours-time');
							
							const clone = e.target === 'button' ? $(e.target).siblings('.wpmz-clone-div') : $(e.target).closest('.wpmozo-repeater-row').find('.wpmz-clone-div');

							day.toggle("fast");
							time.toggle("fast");
							clone.toggle("fast");

						} }
						text={__( `Business Hour ${index + 1}`, 'wpmozo-blocks-and-addons' )}
					>
					</Button>
					<TextControl
						label={ __( `Day`, 'wpmozo-blocks-and-addons' ) }
						value={ hourItem['day'] || '' }
						onChange={ ( value ) => {
							const newItems  = [ ...( attributes.hours || [] ) ];
							newItems[index] = { ...newItems[index], day: value };
							setAttributes( { hours: newItems } );
						} }
						className='wpmz-business-hours-day'
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
						className='wpmz-business-hours-time'
						__next40pxDefaultSize={true} __nextHasNoMarginBottom={true}
					/>
					<div className='wpmz-clone-div'>
						<span className="wpmz-clones wpmz-day-clone">{ hourItem['day'] || '' }</span>
						<span className="wpmz-clones wpmz-time-clone">{ hourItem['time'] || '' }</span>
					</div>
					<Button isDestructive className='wpmozo-repeator-trash' variant="secondary" size='small' icon={trash} iconSize={20}
						label={ __( 'Remove', 'wpmozo-blocks-and-addons' ) }
						onClick={ () => {
							const newItems = ( attributes.hours || [] ).filter( ( _, innerIndex ) => innerIndex !== index );
							setAttributes( { hours: newItems } );
						} }
					>
						<span className="screen-reader-text">{ __( 'Remove', 'wpmozo-blocks-and-addons' ) }</span>
					</Button>
					<Button className='wpmozo-repeator-duplicate' variant="secondary" size='small' icon={reusableBlock} iconSize={20}
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
