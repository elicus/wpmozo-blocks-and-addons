import {RichText, useBlockProps} from '@wordpress/block-editor';
import generateDynamicStyle from "./style";
import { wpmozo_is_empty, mergeWrapperProps } from '../../common/utils.js';

const Save = ( { attributes } ) => {

	const clientId    = attributes.ID,
		wrapArgs = attributes?.ID && mergeWrapperProps( { 
			className: 'wpmozo-bna-image-card-main' ,
			style: {}
		}, attributes ),
		wrapProps = wrapArgs?.wrapprops,
		blockProps = useBlockProps.save(wrapProps),
		wrapStyle = wrapArgs?.wrapStyle;

	const image       = (attributes.image) ? attributes.image : wpmozo_bna_editor_object.placeholderImg;
	const showOnHover = ( attributes.showMediaOnHover ) ? ' show-on-hover' : '';
	const linkTarget  = ( 'external' === attributes.buttonLinkTarget ) ? '_blank' : '_self';
   
	let buttonMedia = '';
   
	if( 'icon' === attributes.buttonMediaType &&  attributes.buttonIcon ){
		buttonMedia = <i className={ attributes.buttonIcon }></i>;
	} else if ( 'image' === attributes.buttonMediaType &&  attributes.buttonImage ) {
		buttonMedia = <img src={ attributes.buttonImage } />;
	}

	const button = (
		attributes.showButton &&
		! wpmozo_is_empty( attributes.buttonText ) && 
		! wpmozo_is_empty( attributes.buttonUrl ) &&
		<div className="wpmozo-bna-image-card-button-wrap">
			<div className="wpmozo-bna-image-card-button-wrap-inner">
				<a className={`wpmozo-bna-image-card-button${showOnHover}`}
					target={linkTarget}
					href={ attributes.buttonUrl }
				>
					{ attributes.buttonText }{buttonMedia}
				</a>
			</div>
		</div>
	);

	return ( <>
		<style>{ generateDynamicStyle( { attributes, clientId } ) }</style>
		
		<div id={`block-${attributes.ID}`} {...blockProps}>
			<div className="wpmozo-bna-image-card-wrapper">
				<div className="wpmozo-bna-image-card-wrapper-inner">
					<img className="wpmozo-bna-image-card-image" src={image}/>
				</div>
				<div className="wpmozo-bna-image-card-content-wrapper">
					{ attributes.icon && (
						<div className="wpmozo-bna-image-card-icon-wrapper"> 
							{ ! attributes.styleIcon && (
								<i className={ attributes.icon }></i>
							) }
							{ attributes.styleIcon && ('square' === attributes.iconShape || 'circle' === attributes.iconShape) && (
								<i className={ attributes.icon +' wpmozo-bna-icon-' + attributes.iconShape  + ( true === attributes.showShapeBorder ? (' wpmozo-bna-icon-shape-border') : '' ) }></i>
							) }
							{ attributes.styleIcon && 'hexagon' === attributes.iconShape && (
								<div className="wpmozo-bna-image-card-icon-inner-wrap shape-hexagon">
									<div className={"hexagon" + ( true === attributes.showShapeBorder ? (' wpmozo-bna-border-hex') : '' )}>
										<i className={ attributes.icon }></i>
									</div>
								</div>
							) }
						</div>
					) }

					<div className="wpmozo-bna-image-card-inner-content-wrapper">
						<RichText.Content
							className="wpmozo-bna-image-card-title"
							tagName={ attributes.titleLevel }
							value={ attributes.title }
						/>
						<RichText.Content
							className="wpmozo-bna-image-card-content"
							tagName="div"
							value={ attributes.description }
						/>
						{ attributes.showButton && attributes.buttonText?.trim() && (
							button
						) }
					</div>
				</div>
			</div>
		</div>
	</> );
}

export default Save;
