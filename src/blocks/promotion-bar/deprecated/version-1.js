// deprecated/version-1.js
import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText } from '@wordpress/block-editor';
import generateDynamicStyle from "./v1-style";

const V1 = {
    attributes: {
        ID: { type: "string" },
		className: { type: "string" },

		dateTime: { type: "string" },
		dateTimeUTC: { type: "string" },
		dateTimeTimestamp: { type: "number" },

		title: { type: "string", default: "Your title goes here." },
		titleLevel: { type: "string", default: "h2" },
		hideTitle: { type: "boolean", default: false },
		titleColor: { type: "string" },
		titleFontSize: { type: "string", default: "26px" },
		titleLetterSpacing: { type: "string" },
		titleDecoration: { type: "string" },
		titleLetterCase: { type: "string" },
		titleLineHeight: { type: "string" },
		titleFontAppearance: {
			type: "object",
			default: { fontStyle: "", fontWeight: "" }
		},
		titleFontStyle: { type: "string" },
		titleFontWeight: { type: "string" },
		titleHoverColor: { type: "string" },
		titleHoverFontSize: { type: "string", default: "26px" },
		titleHoverLetterSpacing: { type: "string" },
		titleHoverDecoration: { type: "string" },
		titleHoverLetterCase: { type: "string" },
		titleHoverLineHeight: { type: "string" },
		titleHoverFontAppearance: {
			type: "object",
			default: { fontStyle: "", fontWeight: "" }
		},
		titleHoverFontStyle: { type: "string" },
		titleHoverFontWeight: { type: "string" },

		description: { type: "string" },
		descriptionColor: { type: "string" },
		descriptionFontSize: { type: "string" },
		descriptionLetterSpacing: { type: "string" },
		descriptionDecoration: { type: "string" },
		descriptionLetterCase: { type: "string" },
		descriptionLineHeight: { type: "string" },
		descriptionFontAppearance: {
			type: "object",
			default: { fontStyle: "", fontWeight: "" }
		},
		descriptionFontStyle: { type: "string" },
		descriptionFontWeight: { type: "string" },

		descriptionHoverColor: { type: "string" },
		descriptionHoverFontSize: { type: "string" },
		descriptionHoverLetterSpacing: { type: "string" },
		descriptionHoverDecoration: { type: "string" },
		descriptionHoverLetterCase: { type: "string" },
		descriptionHoverLineHeight: { type: "string" },
		descriptionHoverFontAppearance: {
			type: "object",
			default: { fontStyle: "", fontWeight: "" }
		},
		descriptionHoverFontStyle: { type: "string" },
		descriptionHoverFontWeight: { type: "string" },

		showImage: { type: "boolean", default: false },
		image: { type: "string", default: "" },
		imageAlt: { type: "string", default: "" },
		imagepadding: { type: "object" },
		imageEnableCustomSize: { type: "boolean", default: false },
		imageMinWidth: { type: "number", default: 100 },
		imageMaxWidth: { type: "number" },
		imageborder: { type: "object" },
		imageborderRadius: { type: "string" },

		showButton: { type: "boolean", default: true },
		buttonText: { type: "string", default: "Get the deal" },
		buttonUrl: { type: "string", default: "#" },
		buttonLinkTarget: { type: "string", default: "same" },

		buttonBackground: { type: "string", default: "" },
		buttonBGGradient: { type: "string" },
		buttonUseIcon: { type: "boolean", default: true },
		buttonIcon: { type: "string", default: "fas fa-arrow-right" },
		buttonIconPosition: { type: "string", default: "after" },
		buttonIconOnHover: { type: "boolean", default: false },
		buttonpadding: { type: "object", default: { top: "10px", right: "20px", bottom: "10px", left: "20px" } },
		buttonmargin: { type: "object" },
		buttonborder: { type: "object", default: { width: "2px", style: "solid", color: "#313131" } },
		buttonborderRadius: { type: "string", default: "3px" },
		buttonColor: { type: "string" },
		buttonFontSize: { type: "string" },
		buttonLetterSpacing: { type: "string" },
		buttonDecoration: { type: "string" },
		buttonLetterCase: { type: "string" },
		buttonLineHeight: { type: "string" },
		buttonFontAppearance: {
			type: "object",
			default: { fontStyle: "", fontWeight: "" }
		},
		buttonFontStyle: { type: "string" },
		buttonFontWeight: { type: "string" },

		buttonHoverBackground: { type: "string", default: "" },
		buttonHoverBGGradient: { type: "string" },
		buttonHoverborder: { type: "object" },
		buttonHoverborderRadius: { type: "string" },
		buttonHoverColor: { type: "string" },
		buttonHoverFontSize: { type: "string" },
		buttonHoverLetterSpacing: { type: "string" },
		buttonHoverDecoration: { type: "string" },
		buttonHoverLetterCase: { type: "string" },
		buttonHoverLineHeight: { type: "string" },
		buttonHoverFontAppearance: {
			type: "object",
			default: { fontStyle: "", fontWeight: "" }
		},
		buttonHoverFontStyle: { type: "string" },
		buttonHoverFontWeight: { type: "string" },

		layout: { type: "string", default: "layout1" },
		hideDays: { type: "boolean", default: false },
		displayLabel: { type: "string", default: "full" },
		stackLabel: { type: "string", default: true },

		contentBoxAlign: { type: "string" },
		contentBoxWidth: { type: "number", default: 50 },

		timerBoxAlign: { type: "string" },
		timerBoxBackground: { type: "string", default: "" },
		timerBoxBGGradient: { type: "string" },
		timerBoxpadding: { type: "object", default: { top: "10px", right: "5px", bottom: "10px", left: "5px" } },
		timerBoxmargin: { type: "object", default: { top: "5px", right: "5px", bottom: "5px", left: "5px" } },
		timerBoxborder: { type: "object" },
		timerBoxborderRadius: { type: "string" },

		digitsBackgroundColor: { type: "string" },
		digitspadding: { type: "object" },
		digitsmargin: { type: "object" },
		digitsborder: { type: "object" },
		digitsborderRadius: { type: "string" },
		digitsColor: { type: "string" },
		digitsFontSize: { type: "string" },
		digitsLetterSpacing: { type: "string" },
		digitsDecoration: { type: "string" },
		digitsLetterCase: { type: "string" },
		digitsLineHeight: { type: "string" },
		digitsFontAppearance: {
			type: "object",
			default: { fontStyle: "", fontWeight: "" }
		},
		digitsFontStyle: { type: "string" },
		digitsFontWeight: { type: "string" },
		digitsBoxWidth: { type: "number", default: 100 },

		labelsBackgroundColor: { type: "string" },
		labelspadding: { type: "object" },
		labelsmargin: { type: "object" },
		labelsborder: { type: "object" },
		labelsborderRadius: { type: "string" },

		labelsColor: { type: "string" },
		labelsFontSize: { type: "string" },
		labelsLetterSpacing: { type: "string" },
		labelsDecoration: { type: "string" },
		labelsLetterCase: { type: "string" },
		labelsLineHeight: { type: "string" },
		labelsFontAppearance: {
			type: "object",
			default: { fontStyle: "", fontWeight: "" }
		},
		labelsFontStyle: { type: "string" },
		labelsFontWeight: { type: "string" },

		showSeparator: { type: "boolean", default: false },
		separatorText: { type: "string", default: ":" },
		separatorColor: { type: "string" },
		separatorFontSize: { type: "string" },
		separatorLetterSpacing: { type: "string" },
		separatorDecoration: { type: "string" },
		separatorLetterCase: { type: "string" },
		separatorLineHeight: { type: "string" },
		separatorFontAppearance: {
			type: "object",
			default: { fontStyle: "", fontWeight: "" }
		},
		separatorFontStyle: { type: "string" },
		separatorFontWeight: { type: "string" }
    },
    save( { attributes } ) {
        const clientId = attributes.ID;

		const layout       = attributes.layout ?? 'layout1';
		const displayLabel = attributes.displayLabel ?? 'full';
		const hideDays     = attributes.hideDays ?? false;

		// Render image.
		let $image = '';
		if ( attributes.showImage && '' !== attributes.image ) {
			$image = <div className='wpmozo-image-wrap'>
				<img src={ attributes.image } alt={ attributes.imageAlt } className="wpmozo-promotion-bar-image" />
			</div>;
		}

		// Render title and description.
		let $title = '';
		if ( attributes.title && '' !== attributes.title ) {
			$title = <RichText.Content
				className="wpmozo-pb-title"
				tagName={ attributes.titleLevel }
				value={ attributes.title }
			/>;
		}
		let $description = '';
		if ( attributes.description && '' !== attributes.description ) {
			$description = <RichText.Content
				className="wpmozo-pb-desc"
				tagName='div'
				value={ attributes.description }
			/>;
		}

		let $button = '';
		if ( attributes.showButton && attributes.buttonUrl ) {
			let $buttonIcon = '';
			if ( attributes.buttonUseIcon && attributes.buttonIcon ) {
				$buttonIcon = <i className={ 'wpmozo-icon ' + attributes.buttonIcon }></i>;
			}
			$button = <div className="wpmozo-button-wrap">
				<a href={ attributes.buttonUrl }
					target={ ( 'external' === attributes.buttonLinkTarget ) ? '_blank' : false }
					className={ [
						'wpmozo-button',
						'wpmozo_promotion_bar_button',
						( attributes.buttonUseIcon && attributes.buttonIconOnHover ) ? 'wpmozo-icon-on-hover' : '',
						( attributes.buttonUseIcon && 'before' === attributes.buttonIconPosition ) ? 'wpmozo-icon-at-before' : 'wpmozo-icon-at-after'
					].join(" ") }
				>
					<span className='wpmozo-btn-text'>{ attributes.buttonText && __( 'Get the deal', 'wpmozo-blocks-and-addons' ) }</span>
					{ $buttonIcon }
				</a>
			</div>;
		}

		let $separator = '';
		if ( attributes.showSeparator ) {
			$separator = <span class="wpmozo-pb-separator">{attributes.separatorText ?? ':'}</span>;
		}

		// List of labels.
		const labels = {
			days    : { full: 'Days', short: 'Days', single: 'D' },
			hours   : { full: 'Hours', short: 'Hrs', single: 'H' },
			minutes : { full: 'Minutes', short: 'Min', single: 'M' },
			seconds : { full: 'Seconds', short: 'Sec', single: 'S' }
		};

		return ( <>
			<style>{ generateDynamicStyle( { attributes, clientId } ) }</style>

			<div id={`block-${clientId}`} { ...useBlockProps.save( { className: attributes.className } ) }>
				<div className={"wpmozo-promotion-bar-wrap " + layout}
					data-timestamp={ attributes.dateTimeTimestamp }
				>
					<div className="wpmozo-promotion-bar-inner">
						<div className="wpmozo-promotion-bar-content">
							{ $image }
							<div className="wpmozo-promotion-bar-content-inner">
								{ $title }{ $description }
							</div>
							{ ( 'layout2' === layout ) ? $button : '' }
						</div>
						<div className="wpmozo-promotion-bar-timer">
							{ ( false === hideDays ) ? 
								<div className="wpmozo-pb-timer-box wpmozo-pb-days">
									<span className="wpmozo-pb-number">00</span>
									{ ( 'none' !== displayLabel ) ? 
										<span className="wpmozo-pb-label">{ labels.days[ displayLabel ] }</span>
									: '' }
								</div>
							: '' }
							{ ( false === hideDays ) ? $separator : '' }
							<div className="wpmozo-pb-timer-box wpmozo-pb-hours">
								<span className="wpmozo-pb-number">00</span>
								{ ( 'none' !== displayLabel ) ? 
									<span className="wpmozo-pb-label">{ labels.hours[ displayLabel ] }</span>
								: '' }
							</div>
							{ $separator }
							<div className="wpmozo-pb-timer-box wpmozo-pb-minutes">
								<span className="wpmozo-pb-number">00</span>
								{ ( 'none' !== displayLabel ) ? 
									<span className="wpmozo-pb-label">{ labels.minutes[ displayLabel ] }</span>
								: '' }
							</div>
							{ $separator }
							<div className="wpmozo-pb-timer-box wpmozo-pb-seconds">
								<span className="wpmozo-pb-number">00</span>
								{ ( 'none' !== displayLabel ) ? 
									<span className="wpmozo-pb-label">{ labels.seconds[ displayLabel ] }</span>
								: '' }
							</div>
						</div>
						{ ( 'layout2' !== layout ) ? $button : '' }
					</div>
				</div>
			</div>
		</> );
    },
};

export default V1;