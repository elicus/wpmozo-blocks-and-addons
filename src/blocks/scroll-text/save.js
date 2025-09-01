import { useBlockProps } from "@wordpress/block-editor";
import generateDynamicStyle from "./style";

const Save = ( { attributes } ) => {

	const clientId = attributes.ID;

	return ( <>
		<style>{ generateDynamicStyle( { attributes, clientId } ) }</style>

		<div id={`block-${clientId}`} { ...useBlockProps.save( { className: attributes.className } ) }>
			<div className="wpmozo-scroll-text-wrap"
				data-scroll_effect={ attributes.scrollEffect || 'fade' }
				data-split={ attributes.splitBy || 'word' }
				data-animation_start_element_pos={ attributes.animationStartElementPos || '0%' }
				data-animation_start_viewport_pos={ attributes.animationStartViewportPos || '80%' }
				data-animation_end_element_pos={ attributes.animationEndElementPos || '0%' }
				data-animation_end_viewport_pos={ attributes.animationEndViewportPos || '40%' }
			>
				<div className="wpmozo-scroll-text-inner">
					{ attributes.scrollText || __( 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non augue eget est vestibulum ultrices eu in leo. Quisque sem diam, finibus ac condimentum eu, finibus id arcu', 'wpmozo-blocks-and-addons' ) }
				</div>
			</div>
		</div>
	</> );
}

export default Save;
