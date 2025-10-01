import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText } from '@wordpress/block-editor';
import generateDynamicStyle from "./style";

const Save = ( { attributes } ) => {

	const { ID, className } = attributes;

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
			$buttonIcon = <i className={ 'wpmozo-bna-icon ' + attributes.buttonIcon }></i>;
		}
		$button = <div className="wpmozo-bna-button-wrap">
			<a href={ attributes.buttonUrl }
				target={ ( 'external' === attributes.buttonLinkTarget ) ? '_blank' : false }
				className={ [
					'wpmozo-bna-button',
					'wpmozo_promotion_bar_button',
					( attributes.buttonUseIcon && attributes.buttonIconOnHover ) ? 'wpmozo-icon-on-hover' : '',
					( attributes.buttonUseIcon && 'before' === attributes.buttonIconPosition ) ? 'wpmozo-icon-at-before' : 'wpmozo-icon-at-after'
				].join(" ") }
			>
				<span className='wpmozo-bna-btn-text'>{ attributes.buttonText && __( 'Get the deal', 'wpmozo-blocks-and-addons' ) }</span>
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

	// Only add ID attribute if it exists.
	const blockProps = useBlockProps.save( {
		className: className,
		...( ID ? { id: `block-${ ID }` } : {} ),
	} );

	return ( <>
		{/* Only output <style> if ID exists. */}
		{ ( ID && '' !== ID ) && (
			<style>{ generateDynamicStyle( { attributes } ) }</style>
		) }

		<div { ...blockProps }>
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
}

export default Save;
