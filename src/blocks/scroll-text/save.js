import { useBlockProps } from "@wordpress/block-editor";
import generateDynamicStyle from "./style";

const Save = ( { attributes } ) => {

	const clientId = attributes.ID;

	return ( <>
		<style>{ generateDynamicStyle( { attributes, clientId } ) }</style>

		<div id={`block-${clientId}`} { ...useBlockProps.save( { className: attributes.className } ) }>
			<p>Hello from scroll-text!</p>
		</div>
	</> );
}

export default Save;
