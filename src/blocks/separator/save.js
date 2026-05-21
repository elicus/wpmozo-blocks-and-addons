
import { useBlockProps } from "@wordpress/block-editor";
import generateDynamicStyle from './style';

const Save = ( { attributes } ) => {

	const ID = attributes.ID;
	
	let position = '';
	if ( 'line' === attributes.separatorType ) {
		if( 'onlySeparator' === attributes.lineUseWith ) {
			position = 'align-none';
		} else if ( 'textSeparator' === attributes.lineUseWith ) {
			position = `align-${undefined !== attributes.textAlign ? attributes.textAlign : 'none'}`;
		} else if ( 'iconSeparator' === attributes.lineUseWith ) {
			position = `align-${attributes.iconPosition}`;
		} else {
			position = `align-${attributes.imagePosition}`;
		}
	}

	return ( <>
		<style>{ generateDynamicStyle( { attributes } ) }</style>

		<div id={`block-${ID}`} { ...useBlockProps.save( { className: 'wpmozo-bna-separator ' + attributes.className } ) }>
			{ "line" === attributes.separatorType && (
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
							<img className="wpmozo-bna-separator-image" src={( attributes.separatorImage ) ? attributes.separatorImage : "WPMozoEditorObj.placeholderImg" }/>
						) }
					<div className="wpmozo-bna-line wpmozo-bna-line-after"></div>
				</div>
			) }
			{ 'shadow' === attributes.separatorType && (
				<div className="wpmozo-bna-shadow"></div>
			) }
		</div>
	</> );
};

export default Save;
