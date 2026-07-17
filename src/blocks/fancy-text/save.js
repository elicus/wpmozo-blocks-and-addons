import { useBlockProps, RichText } from "@wordpress/block-editor";
import generateDynamicStyle from './style';
import { mergeWrapperProps } from '../../common/utils.js';

export default function save({attributes}) {
	const ID = attributes.ID,
		wrapArgs = attributes?.ID && mergeWrapperProps( { 
			className: 'wpmozo-bna-fancy-text-wrap' ,
			style: {}
		}, attributes ),
		wrapProps = wrapArgs?.wrapprops,
		blockProps = useBlockProps.save(wrapProps),
		wrapStyle = wrapArgs?.wrapStyle;
	return ( <>
		<style>{ generateDynamicStyle( { attributes } ) }</style>

		<div id={`block-${ID}`} { ...blockProps}>
			<div className={`wpmozo-bna-fancy-text-inner ${attributes.textStyle}`}>
				<RichText.Content
					tagName=''
					value={ attributes.fancyText }
				/>
			</div>
		</div>
	</> );
}
