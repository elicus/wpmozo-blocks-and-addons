#!/bin/bash

# Usage: ./add-block.sh my-new-block

BLOCK_NAME=$1

if [ -z "$BLOCK_NAME" ]; then
  echo "❌ Please provide a block name. Example: ./add-block.sh my-second-block"
  exit 1
fi

BLOCK_DIR="src/blocks/$BLOCK_NAME"

if [ -d "$BLOCK_DIR" ]; then
  echo "❌ Block '$BLOCK_NAME' already exists."
  exit 1
fi

mkdir -p "$BLOCK_DIR"

# block.json
cat > "$BLOCK_DIR/block.json" <<EOF
{
    "\$schema": "https://schemas.wp.org/trunk/block.json",
    "apiVersion": 3,
    "name": "wpmozo/$BLOCK_NAME",
    "version": "0.1.0",
    "title": "$(echo "$BLOCK_NAME" | tr '-' ' ' | awk '{for(i=1;i<=NF;i++) $i=toupper(substr($i,1,1)) substr($i,2)} 1')",
    "category": "wpmozo",
    "icon": "smiley",
    "description": "Example block scaffolded with Create Block tool.",
    "example": {},
    "supports": {
        "html": false
    },
    "attributes": {},
    "textdomain": "wpmozo-blocks-and-addons",
    "editorScript": "file:./index.js",
    "editorStyle": "file:./index.css",
    "style": "file:./style-index.css",
    "viewScript": "file:./view.js"
}
EOF

# style.scss
cat > "$BLOCK_DIR/style.scss" <<EOF
/**
 * The following styles get applied both on the front of your site
 * and in the editor.
 *
 * Replace them with your own styles or remove the file completely.
 */

.wp-block-create-block-$BLOCK_NAME {
    background-color: #21759b;
    color: #fff;
    padding: 2px;
}
EOF

# editor.scss
cat > "$BLOCK_DIR/editor.scss" <<EOF
/**
 * The following styles get applied inside the editor only.
 *
 * Replace them with your own styles or remove the file completely.
 */

.wp-block-create-block-$BLOCK_NAME {
    border: 1px dotted #f00;
}
EOF

# view.js
cat > "$BLOCK_DIR/view.js" <<EOF
/**
 * Use this file for JavaScript code that you want to run in the front-end
 * on posts/pages that contain this block.
 *
 * When this file is defined as the value of the \`viewScript\` property
 * in \`block.json\` it will be enqueued on the front end of the site.
 *
 * Example:
 *
 * \`\`\`js
 * {
 *   "viewScript": "file:./view.js"
 * }
 * \`\`\`
 *
 * If you're not making any changes to this file because your project doesn't need any
 * JavaScript running in the front-end, then you should delete this file and remove
 * the \`viewScript\` property from \`block.json\`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/#view-script
 */

/* eslint-disable no-console */
console.log( 'Hello World! (from create-block-$BLOCK_NAME block)' );
/* eslint-enable no-console */
EOF

# edit.js
cat > "$BLOCK_DIR/edit.js" <<EOF
import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import Inspector from './inspector';
/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

export default function Edit(props) {
    return (
        <div {...useBlockProps()}>
            <p>{ __('Hello from $BLOCK_NAME!', 'wpmozo-blocks-and-addons') }</p>
        </div>
    );
}
EOF

# inspector.js
cat > "$BLOCK_DIR/inspector.js" <<EOF
// inspector.js
import { __ } from '@wordpress/i18n';
import {
    InspectorControls
} from '@wordpress/block-editor';
import {
    PanelBody
} from '@wordpress/components';

const Inspector = ({ attributes, setAttributes }) => {

    const props = { attributes, setAttributes };

    return (
        <>
            <InspectorControls key="styles" group="styles">
                <PanelBody title={__('Settings', 'block-development-examples')}>
                {/*Code */}
                </PanelBody>
            </InspectorControls>
        </>
    );
};

export default Inspector;
EOF

# save.js
cat > "$BLOCK_DIR/save.js" <<EOF
import { useBlockProps } from '@wordpress/block-editor';

export default function save({ attributes }) {
    return (
        <div {...useBlockProps()}>
            <p>Hello from $BLOCK_NAME!</p>
        </div>
    );
}
EOF

# icon.js
cat > "$BLOCK_DIR/icon.js" <<EOF
const Icon = <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024">
</svg>

export default Icon;
EOF

# index.js
cat > "$BLOCK_DIR/index.js" <<EOF
import { registerBlockType } from '@wordpress/blocks';
import metadata from './block.json';
import Edit from './edit';
import save from './save';
import Icon from './icon';
/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './style.scss';

registerBlockType(metadata.name, {
    edit: Edit,
    icon: Icon,
    save,
});
EOF

# Final message
echo "✅ Block '$BLOCK_NAME' created in $BLOCK_DIR"