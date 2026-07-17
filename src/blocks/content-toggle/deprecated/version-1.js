// deprecated/version-1.js
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import generateDynamicStyle from '../style';
import { __ } from '@wordpress/i18n';

const V1 = {
    attributes: {
        // Same as old v1.0.0 attributes
		ID: { type: "string", },
		toggleSwitchType: { type: "string", default: 'rounded', },
		toggleSwitchAlignment: { type: "string", },
		toggleSwitchColor: { type: "string", },
		toggleSwitchOnState: { type: "string", },
		toggleSwitchBackground: { type: "string", },
		toggleSwitchOnStateBackground: { type: "string", },
		toggleSwitchHoverColor: { type: "string", },
		toggleSwitchHoverOnState: { type: "string", },
		toggleSwitchHoverBackground: { type: "string", },
		toggleSwitchHoverOnStateBackground: { type: "string", },
		toggleSwitchDimensionspadding: { type: "object", },
		toggleSwitchDimensionsmargin: { type: "object", },
		toggleOneTitle: { type: "string", default: __('Title One', 'wpmozo-blocks-and-addons') },
		titleOneColor: { type: "string", },
		titleOneIconSize: { type: "number", },
		titleOneIconSpacing: { type: "number", },
		titleOneIconColor: { type: "string", },
		titleOneFontSize: { type: "string", },
		titleOneFontAppearance: { type: "object", fontStyle: { type: "string", }, fontWeight: { type: "string", }, default: { fontStyle: "", fontWeight: "", } },
		titleOneLetterSpacing: { type: "string", },
		titleOneDecoration: { type: "string", },
		titleOneLetterCase: { type: "string", },
		titleOneLineHeight: { type: "string", },
		toggleOneIcon: { type: "string", },
		toggleOneIconPostion: { type: "string", default: "before", },
		toggleTwoTitle: { type: "string", default: __( 'Title Two', 'wpmozo-blocks-and-addons' ) },
		toggleTwoIcon: { type: "string", },
		toggleTwoIconPostion: { type: "string", default: "before", },
		titleTwoColor: { type: "string", },
		titleTwoIconSize: { type: "number", },
		titleTwoIconSpacing: { type: "number", },
		titleTwoIconColor: { type: "string", },
		titleTwoFontSize: { type: "string", },
		titleTwoFontAppearance: { type: "object", fontStyle: { type: "string", }, fontWeight: { type: "string", }, default: { fontStyle: "", fontWeight: "", } },
		titleTwoLetterSpacing: { type: "string", },
		titleTwoDecoration: { type: "string", },
		titleTwoLetterCase: { type: "string", },
		titleTwoLineHeight: { type: "string", },
		contentOneColor: { type: "string", },
		contentOneBackground: { type: "string", },
		contentOneFontSize: { type: "string", },
		contentOneFontAppearance: { type: "object", fontStyle: { type: "string", }, fontWeight: { type: "string", }, default: { fontStyle: "", fontWeight: "", } },
		contentOneLetterSpacing: { type: "string", },
		contentOneDecoration: { type: "string", },
		contentOneLetterCase: { type: "string", },
		contentOneLineHeight: { type: "string", },
		contentOneDimensionspadding: { type: "object", default: { bottom : '20px', left   : '20px', right  : '20px', top    : '20px' } },
		contentOneDimensionsmargin: { type: "object", },
		contentOneAlignment: { type: "string", },
		contentTwoColor: { type: "string", },
		contentTwoBackground: { type: "string", },
		contentTwoFontSize: { type: "string", },
		contentTwoFontAppearance: { type: "object", fontStyle: { type: "string", }, fontWeight: { type: "string", }, default: { fontStyle: "", fontWeight: "", } },
		contentTwoLetterSpacing: { type: "string", },
		contentTwoDecoration: { type: "string", },
		contentTwoLetterCase: { type: "string", },
		contentTwoLineHeight: { type: "string", },
		contentTwoDimensionspadding: { type: "object", default: { bottom : '20px', left   : '20px', right  : '20px', top    : '20px' } },
		contentTwoDimensionsmargin: { type: "object", },
		contentTwoAlignment: { type: "string", }
    },
    save( { attributes } ) {
        const ID = attributes.ID;

		const toggleSwitchTypeClass = ' wpmozo_'+attributes.toggleSwitchType;
		const titleWrapClass        = ( 'toggle' === attributes.toggleSwitchType ) ? ' wpmozo_switch_trigger' : '';

		const iconOne = (
			<div className="icon-wrapper">
				<i className={`${ attributes.toggleOneIcon }`}></i>
			</div>
		);
		const iconTwo = (
			<div className="icon-wrapper">
				<i className={`${ attributes.toggleTwoIcon }`}></i>
			</div>
		);

		const titleOne = (
		<div className={`wpmozo-bna-toggle-title-wrap wpmozo-bna-toggle-title-one${titleWrapClass}`}>
				{ 'before' === attributes.toggleOneIconPostion && iconOne }
				<h5>{ attributes.toggleOneTitle }</h5>
				{ 'after' === attributes.toggleOneIconPostion && iconOne }
			</div>
		);

		const titleTwo = (
			<div className={`wpmozo-bna-toggle-title-wrap wpmozo-bna-toggle-title-two${titleWrapClass}`}>
				{ 'before' === attributes.toggleTwoIconPostion && iconTwo }
				<h5>{ attributes.toggleTwoTitle }</h5>
				{ 'after' === attributes.toggleTwoIconPostion && iconTwo }
			</div>
		);

		return (
			<div id={`block-${ID}`} { ...useBlockProps.save( { className: 'wpmozo-bna-content-toggle-main' } ) }>
				<div className={`wpmozo-bna-toggle-button-wrap${toggleSwitchTypeClass}`}>
					{ 'toggle' === attributes.toggleSwitchType && ( <>
						<input className="wpmozo-bna-toggle-field" type="checkbox" value="" />
						<label className={`wpmozo-bna-toggle-switch`}>
							{ titleOne }
							{ titleTwo }
						</label>
					</> ) }
					{ 'toggle' !== attributes.toggleSwitchType && ( <>
						{ titleOne }
						<div className={`wpmozo-bna-toggle-button${toggleSwitchTypeClass}`}>
							<label className="wpmozo-bna-toggle-button-inner">
								<input className="wpmozo-bna-toggle-field" type="checkbox" value="" />
								<div className={`wpmozo-bna-toggle-switch${toggleSwitchTypeClass}`}></div>
							</label>
						</div>
						{ titleTwo }
					</> ) }
				</div>
				<div className="wpmozo-bna-content-toggle-content-wrap">
					<InnerBlocks.Content />
				</div>    
			</div>
		);
    },
};

export default V1;