import { __ } from '@wordpress/i18n';
import { Fragment, useEffect } from "@wordpress/element";
import { useBlockProps, RichText } from '@wordpress/block-editor';
import Inspector from './inspector';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import generateDynamicStyle from "./style";
import { mergeWrapperProps } from '../../common/utils.js';

const Edit = (props) => {

	const { attributes, setAttributes, clientId } = props,
	wrapArgs = attributes?.ID && mergeWrapperProps( { 
			className: `wpmozo-promotion-bar${ attributes?.wrapIsHover ? ' is_hover' : '' }` ,
			style: {}
		}, attributes ),
		wrapProps = wrapArgs?.wrapprops,
		blockProps = useBlockProps(wrapProps),
		wrapStyle = wrapArgs?.wrapStyle,
		isEdit = true;
	// Ensure ID is set once (no render-time mutation).
	useEffect( () => {
		if ( attributes.ID !== clientId ) {
			setAttributes( { ID: clientId } );
		}
		const updates = {};
		if ( attributes.ID !== clientId ) {
			updates.ID = clientId;
		}

		// wrapStyle recalculate karke attribute mein store karo
		if ( attributes.ID ) {
			if ( wrapStyle && wrapStyle !== attributes.wrapStyle ) {
				updates.wrapStyle = wrapStyle;
			}
		}

		if ( Object.keys( updates ).length ) {
			setAttributes( updates );
		}
	}, [ clientId, JSON.stringify( attributes ) ] ); // eslint-disable-line react-hooks/exhaustive-deps.

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
		$title = <RichText
			className="wpmozo-pb-title"
			tagName={ attributes.titleLevel }
			value={ attributes.title }
			onChange={ ( newValue ) => setAttributes( { title: newValue } ) }
			placeholder={ __( 'Your title goes here', 'wpmozo-blocks-and-addons' ) }
		/>;
	}
	let $description = '';
	if ( attributes.description && '' !== attributes.description ) {
		$description = <RichText
			className="wpmozo-pb-desc"
			tagName='div'
			value={ attributes.description }
			onChange={ ( newValue ) => setAttributes( { description: newValue } ) }
		/>;
	}

	let $button = '';
	if ( attributes.showButton && attributes.buttonUrl ) {
		let $buttonIcon = '';
		if ( attributes.buttonUseIcon && attributes.buttonIcon ) {
			$buttonIcon = <i className={ 'wpmozo-bna-icon ' + attributes.buttonIcon }></i>;
		}
		$button = <div className="wpmozo-bna-button-wrap">
			<a href="javascript:void(0)"
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

	useEffect(() => {
		const event = new CustomEvent('WPMozoPromotionPropsChanged');
		window.dispatchEvent(event);
		const iframe = document.querySelector( 'iframe[name="editor-canvas"]' );
		if ( iframe?.contentWindow ) {
			iframe.contentWindow.dispatchEvent( event );
		}
	}, [props]);

	return (
		<Fragment>
			<Inspector attributes={attributes} setAttributes={setAttributes} />
			<style>{ generateDynamicStyle( { attributes, isEdit } ) }</style>

			<div {...blockProps} id={`block-${attributes.ID}`}>
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
		</Fragment>
	);
}

export default Edit;
