const { exec } = require('child_process');
const zipFile  = 'wpmozo-blocks-and-addons.zip';

// Files/folders to include
const include = [
    'build',
    'includes',
    'patterns',
    'wpmozo-blocks-and-addons.php',
    'README.txt'
];

// Files/folders to exclude.
const exclude = [
    'src/*',
    'node_modules/*',
    'package.json',
    'package-lock.json',
    '.git/*',
    '.github/*',
    '*.md',
    '*.zip'
];

// Build zip command.
const cmd = `zip -r ${zipFile} ${include.join(' ')} -x ${exclude.join(' ')}`;

exec( cmd, ( err, stdout, stderr ) => {
    if ( err ) {
        console.error( 'Error creating zip: ', err );
        return;
    }
    console.log(stdout);
    console.log( `✅ Plugin zip created: ${zipFile}` );
} );
