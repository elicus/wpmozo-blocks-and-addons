import { useBlockProps, RichText } from '@wordpress/block-editor';
import generateDynamicStyle from './style';
import { wpmozo_is_empty, mergeWrapperProps } from '../../common/utils.js';

export default function save({ attributes }) {

	const clientId = attributes.ID,
		layoutType = ( 'flip' === attributes.animationType ) ? ' layout1' : ' layout2',
		wrapArgs = attributes?.ID && mergeWrapperProps( { 
			className: 'wpmozo-bna-flip-box-main' ,
			style: {}
		}, attributes ),
		wrapProps = wrapArgs?.wrapprops,
		blockProps = useBlockProps.save(wrapProps),
		wrapStyle = wrapArgs?.wrapStyle;

	let backBtnIcon = (
		<i className={ attributes.backBtnIcon }></i>
	),
	backBtnOnHover = ( attributes.backBtnIconOnHover ) ? ' show-on-hover' : '',
	frontHexagonIcon = (
		<div className="wpmozo-bna-hexagon-wrap">
			<div className="wpmozo-bna-hexagon-shape">
				<i className={ attributes.frontElIcon }></i>
			</div>
		</div>
	),
	backHexagonIcon = (
		<div className="wpmozo-bna-hexagon-wrap">
			<div className="wpmozo-bna-hexagon-shape">
				<i className={ attributes.backElIcon }></i>
			</div>
		</div>
	);

	return ( <>
		<style>{ generateDynamicStyle({ attributes, clientId }) }</style>

		<div id={`block-${clientId}`} { ...blockProps}>
			<div className={`wpmozo-bna-flip-box-wrap${layoutType}`} flip-direction={ attributes.flipDirection }>
				<div className="wpmozo-bna-flip-box-side wpmozo-bna-flip-box-front">
					<div className="wpmozo-bna-flip-box-inner">
						{ 'none' !== attributes.frontElType && (
							<div className={ 'icon' === attributes.frontElType ? "wpmozo-bna-flip-box-icon-wrap" : "wpmozo-bna-flip-box-image-wrap"}>
								{ 'icon' === attributes.frontElType && ( 
									<>
										{ "hexagon" !== attributes.frontIconShape && (
											<i className={ attributes.frontElIcon }></i>
										)}
										{ "hexagon" === attributes.frontIconShape && 
											frontHexagonIcon
										}
									</>
								)}
								{ 'image' === attributes.frontElType && (
									<img src={ attributes.frontElImage } />
								)}
							</div>
						)}
						<div className="wpmozo-bna-flip-box-content-wrap">
							{ ! wpmozo_is_empty( attributes.frontTitle ) && 
								<div className="wpmozo-bna-flip-box-heading-wrap">
									<RichText.Content
										className="wpmozo-bna-flip-box-title"
										tagName={ attributes.frontHeadingLevel }
										value={ attributes.frontTitle }
									/>
								</div>
							}
							{ ! wpmozo_is_empty( attributes.frontContnet ) && 
								<div className="wpmozo-bna-flip-box-description">
									<RichText.Content
										value={ attributes.frontContnet }
									/>
								</div>
							}
						</div>
					</div>
				</div>
				<div className="wpmozo-bna-flip-box-side wpmozo-bna-flip-box-back">
					<div className="wpmozo-bna-flip-box-inner">
						{ 'none' !== attributes.backElType && (
							<div className={ 'icon' === attributes.backElType ? "wpmozo-bna-flip-box-icon-wrap" : "wpmozo-bna-flip-box-image-wrap"}>
								{ 'icon' === attributes.backElType && ( 
									<>
										{ "hexagon" !== attributes.backIconShape && (
											<i className={ attributes.backElIcon }></i>
										)}
										{ "hexagon" === attributes.backIconShape && 
											backHexagonIcon
										}
									</>
								)}
								{ 'image' === attributes.backElType && (
									<img src={ attributes.backElImage } />
								)}
							</div>
						)}
						<div className="wpmozo-bna-flip-box-content-wrap">
							{ ! wpmozo_is_empty( attributes.backTitle ) && 
								<div className="wpmozo-bna-flip-box-heading-wrap">
									<RichText.Content
										className="wpmozo-bna-flip-box-title"
										tagName={ attributes.backHeadingLevel }
										value={ attributes.backTitle }
									/>
								</div>
							}
							{ ! wpmozo_is_empty( attributes.backContnet ) && 
								<div className="wpmozo-bna-flip-box-description">
									<RichText.Content
										value={ attributes.backContnet }
									/>
								</div>
							}
						</div>
						{ 
							attributes.backHasButton &&
							! wpmozo_is_empty( attributes.backBtnText ) && 
							! wpmozo_is_empty( attributes.backBtnUrl ) &&
							<div className="wpmozo-bna-flip-box-button-wrap">
								<div className="wpmozo-bna-flip-box-button-wrap-inner">
									<a 
										className={`wpmozo-bna-flip-box-button${backBtnOnHover}`}
										target="_blank"
										href={ attributes.backBtnUrl }
									>
										{ attributes.backBtnText }
										{ backBtnIcon }
									</a>
								</div>
							</div>
						}
					</div>
				</div>
			</div>
		</div>
	</> );
}
