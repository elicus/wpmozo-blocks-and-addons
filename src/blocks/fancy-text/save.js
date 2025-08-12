import { useBlockProps, RichText } from "@wordpress/block-editor";
import generateDynamicStyle from './style';

export default function save({attributes}) {
	const ID = attributes.ID;
	return ( <>
		<style>{ generateDynamicStyle( { attributes } ) }</style>

		<div id={`block-${ID}`} { ...useBlockProps.save( { className: 'wpmozo-bna-fancy-text-wrap ' + attributes.className } ) }>
			<div className={`wpmozo-bna-fancy-text-inner ${attributes.textStyle}`}>
				<RichText.Content
					tagName=''
					value={ attributes.fancyText }
				/>
			</div>
		</div>
	</> );
}
