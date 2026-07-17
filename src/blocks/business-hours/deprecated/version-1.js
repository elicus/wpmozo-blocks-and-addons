// deprecated/version-1.js
import { useBlockProps } from '@wordpress/block-editor';
import generateDynamicStyle from '../style';
import { __ } from "@wordpress/i18n";

const V1 = {
    attributes: {
        ID: { type: "string" },
		className: { type: "string" },
	
		hours: { type: "array",
			default: [
				{ day: "Weekdays", time: "9am - 6pm" },
				{ day: "Saturday", time: "9am - 2pm" },
				{ day: "Sunday", time: "Closed" }
			]
		},

		dayColor: { type: "string" },
		dayFontSize: { type: "string" },
		dayLetterSpacing: { type: "string" },
		dayDecoration: { type: "string" },
		dayLetterCase: { type: "string" },
		dayLineHeight: { type: "string" },
		dayFontAppearance: { type: "object",
			default: { fontStyle: "", fontWeight: "" }
		},
		dayFontStyle: { type: "string" },
		dayFontWeight: { type: "string" },

		dayHoverColor: { type: "string" },
		dayHoverFontSize: { type: "string" },
		dayHoverLetterSpacing: { type: "string" },
		dayHoverDecoration: { type: "string" },
		dayHoverLetterCase: { type: "string" },
		dayHoverLineHeight: { type: "string" },
		dayHoverFontAppearance: { type: "object",
			default: { fontStyle: "", fontWeight: "" }
		},
		dayHoverFontStyle: { type: "string" },
		dayHoverFontWeight: { type: "string" },

		timeColor: { type: "string" },
		timeFontSize: { type: "string" },
		timeLetterSpacing: { type: "string" },
		timeDecoration: { type: "string" },
		timeLetterCase: { type: "string" },
		timeLineHeight: { type: "string" },
		timeFontAppearance: { type: "object",
			default: { fontStyle: "", fontWeight: "" }
		},
		timeFontStyle: { type: "string" },
		timeFontWeight: { type: "string" },

		timeHoverColor: { type: "string" },
		timeHoverFontSize: { type: "string" },
		timeHoverLetterSpacing: { type: "string" },
		timeHoverDecoration: { type: "string" },
		timeHoverLetterCase: { type: "string" },
		timeHoverLineHeight: { type: "string" },
		timeHoverFontAppearance: { type: "object",
			default: { fontStyle: "", fontWeight: "" }
		},
		timeHoverFontStyle: { type: "string" },
		timeHoverFontWeight: { type: "string" },
	
		hourItemBackground: { type: "string" },
		hourItemBackgroundEven: { type: "string" },
		hourItemBackgroundOdd: { type: "string" },
		hourItempadding: { type: "object", default: { top: "5px", bottom: "5px" } },
		hourItemmargin: { type: "object" },
		hourItemborder: { type: "object" },
		hourItemborderRadius: { type: "string" },

		blockBackground: { type: "string" },
		blockBGGradient: { type: "string" },
		blockpadding: { type: "object" },
		blockmargin: { type: "object" },
		blockborder: { type: "object" },
		blockborderRadius: { type: "string" }
    },
    save( { attributes } ) {
       const clientId = attributes.ID;

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

            <div id={`block-${clientId}`} { ...useBlockProps.save( { className: attributes.className } ) }>
                <div className="wpmozo_business_hours_wrap">{ hoursItems }</div>
            </div>
        </> );
    },
};

export default V1;