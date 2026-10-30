import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import generateDynamicStyle from './style';
import { mergeWrapperProps } from '../../common/utils.js';

export default function save( { attributes } ) {

	const { anchor, className } = attributes;

	const ID = attributes.ID;
	const clientId = ID,
		wrapArgs = attributes?.ID && mergeWrapperProps( { 
			className: 'wpmozo-bna-content-toggle-main' ,
			style: {}
		}, attributes ),
		wrapProps = wrapArgs?.wrapprops,
		blockProps = useBlockProps.save(wrapProps),
		wrapStyle = wrapArgs?.wrapStyle;

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

	return ( <>
		<style>{ generateDynamicStyle( { attributes, clientId } ) }</style>

		<div { ...blockProps} id={anchor || `block-${ID}`}>
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
	</> );
}
