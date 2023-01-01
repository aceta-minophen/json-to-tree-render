const path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname + '/dist'),
        filename: 'bundle.js',
        globalObject: 'this',
        library: {
            name: 'json-to-tree',
            type: 'umd'
        }
    }
};
