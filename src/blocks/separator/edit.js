
import Inspector from "./inspector";
import generateDynamicStyle from './style';

import { __ } from "@wordpress/i18n";
import { Fragment, useEffect } from "@wordpress/element";
import { useBlockProps } from "@wordpress/block-editor";
import { mergeWrapperProps } from '../../common/utils.js';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
const Edit = (props) => {

	const { attributes, setAttributes, clientId } = props,
		wrapArgs = attributes?.ID && mergeWrapperProps( { 
			className: `wpmozo-separator${ attributes?.wrapIsHover ? ' is_hover' : '' }` ,
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
	let position = '';

	if( 'line' === attributes.separatorType ){
		if( 'onlySeparator' === attributes.lineUseWith ){
			position = 'align-none';
		} else if( 'textSeparator' === attributes.lineUseWith ){
			position = `align-${undefined !== attributes.textAlign ? attributes.textAlign : 'none'}`;
		} else if( 'iconSeparator' === attributes.lineUseWith ){
			position = `align-${attributes.iconPosition}`;
		} else {
			position = `align-${attributes.imagePosition}`;
		}

	} else {
		position = '';
	}
	useEffect( () => {
		jQuery(document).ready( function($) {
			if ( jQuery('body').find('.wpmozo-bna-separator').length > 0 ) {
				$('body').find('.wpmozo-bna-separator').each(function() {
					let height = $(this).find('.wpmozo-bna-icon-wrapper').outerHeight(true);
					let padding = height/2;
					$(this).css('padding-top', padding + 'px');
					$(this).css('padding-bottom', padding + 'px');
				} );
			}
		} );
	} );

	return (
		<Fragment>
			<Inspector attributes={attributes} setAttributes={setAttributes} />
			<style>{ generateDynamicStyle( { attributes, clientId } ) }</style>

			<div { ...blockProps}>
				{ 'line' === attributes.separatorType && (
					<div className={`wpmozo-bna-separator-container ${position}`}>
						<div className="wpmozo-bna-line wpmozo-bna-line-before"></div>
							{ 'textSeparator' === attributes.lineUseWith && (
								<div className="wpmozo-bna-text-wrapper">
									<p>{`${attributes.separatorText}`}</p>
								</div>
							) }
							{ 'iconSeparator' === attributes.lineUseWith && true !== attributes.styleIcon && (
								<div className="wpmozo-bna-icon-wrapper">
									<i className={ attributes.separatorIcon }></i>
								</div>

							) }
							{ 'iconSeparator' === attributes.lineUseWith && true === attributes.styleIcon && ('square' === attributes.iconShape || 'circle' === attributes.iconShape) && (
								<div className="wpmozo-bna-icon-wrapper">
									<i className={ attributes.separatorIcon +' wpmozo-bna-icon-' + attributes.iconShape  + ( true === attributes.enableShapeBorder ? (' wpmozo-bna-icon-shape-border') : '' ) }></i>
								</div>
							) }
							{ 'iconSeparator' === attributes.lineUseWith && true === attributes.styleIcon && 'hexagon' === attributes.iconShape && (
								<div className="wpmozo-bna-icon-wrapper shape-hexagon">
									<div className={"hexagon" + ( true === attributes.enableShapeBorder ? (' wpmozo-bna-border-hex') : '' )}>
										<i className={ attributes.separatorIcon }></i>
									</div>
								</div>
							) }
							{ 'imageSeparator' === attributes.lineUseWith && (
								<img className="wpmozo-bna-separator-image" src={( attributes.separatorImage ) ? attributes.separatorImage : "" }/>
							) }
						<div className="wpmozo-bna-line wpmozo-bna-line-after"></div>
					</div>
				) }
				{ 'shadow' === attributes.separatorType && (
					<div className="wpmozo-bna-shadow"></div>
				) }
			</div>
		</Fragment>
	);
};

export default Edit;
