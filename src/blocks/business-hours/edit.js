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

	return (
		<Fragment>
			<Inspector attributes={attributes} setAttributes={setAttributes} />
			<style>{ generateDynamicStyle( { attributes } ) }</style>

			<div { ...useBlockProps() } id={`block-${attributes.ID}`}>
				<div className="wpmozo_business_hours_wrap">{ hoursItems }</div>
			</div>
		</Fragment>
	);
};

export default Edit;
