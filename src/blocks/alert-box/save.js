import { useBlockProps, RichText } from '@wordpress/block-editor';
import generateDynamicStyle from "./style";

const Save = ( { attributes } ) => {
	const clientId = attributes.ID;
	const { ID, className, layout, useImage, image, imageAlt, icon, showCloseButton, showButton, buttonText, buttonUrl, buttonLinkTarget, buttonUseIcon, buttonIcon, buttonIconOnHover, buttonIconPosition } = attributes;

	// Only add ID attribute if it exists.
	const blockProps = useBlockProps.save( {
		className: [
			className,
		].filter( Boolean ).join( ' ' ),
		...( ID ? { id: `block-${ ID }` } : {} ),
	} );

	// Image / Icon display logic
	let $imageIcon = '';
	if ( useImage && image ) {
		$imageIcon = (
			<div className="wpmozo-bna-alert-box-image-wrap wpmozo-bna-used-image">
				<img src={ image } alt={ imageAlt || '' } />
			</div>
		);
	} else if ( ! useImage && icon ) {
		$imageIcon = (
			<div className="wpmozo-bna-alert-box-image-wrap">
				<i className={ `wpmozo-bna-icon ${ icon }` }></i>
			</div>
		);
	}

	// Title.
	let $title = '';
	if ( attributes.title ) {
		$title = <RichText.Content
			className="wpmozo-bna-alert-box-title"
			tagName={ attributes?.titleLevel || 'h3' }
			value={ attributes.title }
		/>;
	}

	// Description.
	let $description = '';
	if ( attributes.description ) {
		$description = <RichText.Content
			className="wpmozo-bna-alert-box-desc"
			tagName={ 'div' }
			value={ attributes.description }
		/>;
	}

	// Button.
	let $button = '';
	if ( showButton && '' !== buttonUrl ) {
		let $buttonIcon = '';
		if ( buttonUseIcon && buttonIcon ) {
			$buttonIcon = <i className={ 'wpmozo-bna-icon ' + buttonIcon }></i>;
		}
		$button = <div className="wpmozo-bna-button-wrap wpmozo-bna-alert-box-button-wrap">
			<a href={ buttonUrl }
				target={ ( 'external' === buttonLinkTarget ) ? '_blank' : undefined }
				rel={ ( 'external' === buttonLinkTarget ) ? 'noopener noreferrer' : undefined }
				className={ [
					'wpmozo-bna-button',
					( buttonUseIcon && buttonIconOnHover ) ? 'wpmozo-icon-on-hover' : '',
					( buttonUseIcon && 'before' === buttonIconPosition ) ? 'wpmozo-icon-at-before' : 'wpmozo-icon-at-after'
				].join(" ") }
			>
				{ buttonUseIcon && 'before' === buttonIconPosition && $buttonIcon }
				<span className='wpmozo-bna-btn-text'>{ buttonText }</span>
				{ buttonUseIcon && 'after' === buttonIconPosition && $buttonIcon }
			</a>
		</div>;
	}

	// Close Button
	let $closeButton = '';
	if ( showCloseButton ) {
		$closeButton = (
			<a href="#" className="wpmozo-bna-alert-box-close-btn">
				<i className="wpmozo-bna-icon fas fa-xmark"></i>
			</a>
		);
	}

	return ( <>
		{/* Only output <style> if ID exists. */}
		{ ( ID && '' !== ID ) && (
			<style>{ generateDynamicStyle( { attributes } ) }</style>
		) }

		<div { ...blockProps }>
			<div className={ `wpmozo-bna-alert-box-wrap ${ layout }` }>
				<div className="wpmozo-bna-alert-box-inner">
					{ $imageIcon }
					<div className="wpmozo-bna-alert-box-content">
						{ $title }
						{ $description }
					</div>
					{ $button }
					{ $closeButton }
				</div>
			</div>
		</div>
	</> );
}

export default Save;
