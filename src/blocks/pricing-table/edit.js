import {__} from "@wordpress/i18n";
import { Fragment, useEffect } from "@wordpress/element";
import { useBlockProps, RichText } from "@wordpress/block-editor";
import Inspector from './inspector';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';
import generateDynamicStyle from "./style";
import { mergeWrapperProps } from '../../common/utils.js';

const Edit = ( props ) => {

	const setAttributes = props.setAttributes;

	let attributes = props.attributes,
		clientId = props.clientId,
		linkTarget = ( 'external' === attributes.buttonLinkTarget ) ? '_blank' : '_self',
		showIconOnHover = ( attributes.showIconOnHover ) ? ' show-on-hover' : '',
		buttonIconPosition = ( attributes.buttonIconPosition ) ? attributes.buttonIconPosition : ' icon-after',
		wrapArgs = attributes?.ID && mergeWrapperProps( { 
			className: `wpmozo-pricing-table${ attributes?.wrapIsHover ? ' is_hover' : '' }` ,
			style: {}
		}, attributes ),
		wrapProps = wrapArgs?.wrapprops,
		blockProps = useBlockProps(wrapProps),
		wrapStyle = wrapArgs?.wrapStyle;
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

	return (
		<Fragment>
			<Inspector attributes={attributes} setAttributes={setAttributes} />
			<style>{ generateDynamicStyle( { attributes } ) }</style>

			<div { ...blockProps} id={`block-${attributes.ID}`}>
				<div className="wpmozo-bna-pricing-table">
					<div className="wpmozo-bna-pricing-table-wrapper">
						<div className="wpmozo-bna-pricing-table-header-graphic">
							{ 'icon' === attributes.headerGraphics && (
								<div className="wpmozo-bna-pricing-table-header-graphic-inner">
									<i className={attributes.headerIcon}></i>
								</div>
							) }
							{ 'image' === attributes.headerGraphics && (
								<div className="wpmozo-bna-pricing-table-header-graphic-inner wpmozo-bna-header-image-container">
									<img src={attributes.headerImage} className="wpmozo-bna-header-image"/>
								</div>
							) }
						</div>
						<div className="wpmozo-bna-pricing-table-heading">
							{ '' != attributes.title && (
								<RichText
									className="wpmozo-bna-pricing-table-title"
									tagName={ attributes.titleLeval }
									value={ attributes.title }
									onChange={ (newValue) => setAttributes( { title: newValue } ) }
								/>
							)}
							{ '' != attributes.subtitle && (
								<RichText
									className="wpmozo-bna-pricing-table-subtitle"
									tagName="span"
									value={attributes.subtitle}
									onChange={(newValue) => setAttributes({subtitle: newValue})}
								/>
							)}
							<span className="wpmozo-bna-bar-container">
								<hr className="wpmozo-bna-bar"/>
							</span>
						</div>
						<div className="wpmozo-bna-pricing-table-pricing">
							{ '' !== attributes.currencySymbol && 'custom' !== attributes.currencySymbol && (
								<span className="wpmozo-bna-pricing-table-currency-symbol">{attributes.currencySymbol} </span>
							) }
							{ 'custom' === attributes.currencySymbol && (
								<span className="wpmozo-bna-pricing-table-currency-symbol">{attributes.customSymbol} </span>
							) }
							{ '' !== attributes.price && (
								<span className="wpmozo-bna-pricing-table-price">{ parseFloat( attributes.price ) }</span>
							) }
							{ '' !== attributes.period && (
								<>
									<span className="wpmozo-bna-period-slash"> / </span>
									<span className="wpmozo-bna-pricing-table-period"> {attributes.period} </span>
								</>
							) }
						</div>
						<dl className="wpmozo-bna-pricing-table-features">
							{ attributes?.features && attributes.features?.length > 0 && attributes.features.map( ( feature, index ) => (
								<div key={ `feature-${index}` }>
									<dt className="wpmozo-bna-pricing-table-features-list">
										{true === attributes.showFeaturesIcon && (
											<span className="wpmozo-bna-pricing-table-feature-icon">
												<i className={feature.icon}></i>
											</span>
										)}
										<span className="wpmozo-bna-pricing-table-feature-text">
											{feature.list}
										</span>
									</dt>
								</div>
							) ) }
						</dl>
						{ true === attributes.showButton && (
							<div className="wpmozo-bna-pricing-table-button-wrapper">
								<a href={attributes.buttonUrl}
									className={"wpmozo-bna-button " + buttonIconPosition + showIconOnHover}
									target={linkTarget}
								>
									<span className="button_text">
										<RichText
											value={attributes.buttonText}
											onChange={(newValue) => setAttributes( { buttonText: newValue } ) }
										/>
									</span>
									{ 'none' !== attributes.buttonIconType && (
										<div className={'icon' === attributes.buttonIconType ? "wpmozo-bna-button-icon" : "wpmozo-bna-button-image"}>
											{ 'icon' === attributes.buttonIconType && (
												<i className={attributes.buttonIcon}></i>
											) }
											{ 'image' === attributes.buttonIconType && (
												<img src={attributes.buttonIconImage} />
											) }
										</div>
									) }
								</a>
							</div>
						) }
					</div>
				</div>
			</div>
		</Fragment>
	);

};
export default Edit;
