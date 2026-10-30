import { __ } from "@wordpress/i18n";
import { useBlockProps } from '@wordpress/block-editor';
import generateDynamicStyle from "./style";
import { mergeWrapperProps } from '../../common/utils.js';

const Save = ( { attributes } ) => {

    const clientId = attributes.ID,
		wrapArgs = attributes?.ID && mergeWrapperProps( { 
			className: 'wpmozo-business-hours' ,
			style: {}
		}, attributes ),
		wrapProps = wrapArgs?.wrapprops,
		blockProps = useBlockProps.save(wrapProps),
		wrapStyle = wrapArgs?.wrapStyle;

	// Hours Item.
	let hoursItems = [];
	( attributes.hours || [] ).map( ( hourItem, index ) => {
		let itemKey = 'wpmozo-business-hour-item-' + clientId + '_' + index;
		hoursItems.push(
			<div key={ itemKey } className={"wpmozo_business_hours_item " + itemKey}>
				<div className="wpmozo_business_hour_wrapper">
					<div className='wpmozo_business_day'>{ hourItem.day }</div>
					<div className='wpmozo_business_time'>{ hourItem.time }</div>
				</div>
			</div>
		);
	} );

    return ( <>
		<style>{ generateDynamicStyle( { attributes } ) }</style>

		<div id={`block-${clientId}`} { ...blockProps}>
			<div className="wpmozo_business_hours_wrap">{ hoursItems }</div>
		</div>
	</> );
}

export default Save;
