var nodeExternals = require('webpack-node-externals');

module.exports = {
    target: 'node',
    externalsPresets: {
        node: true // in order to ignore built-in modules like path, fs, etc. 
    },
    output: {
        library: 'Gw2UiRedux',
        libraryTarget: 'umd',
        globalObject: 'this',
    },
    module: {
        rules: [
        {
            test: /\.js$/,
            loader: 'babel-loader',
            options: {
            rootMode: 'upward',
            },
        },
        ],
    },
    externals: [nodeExternals()],
    devtool: 'source-map',
}