const path = require('path');
const webpack = require('webpack');
const babelPolyfill = require('babel-polyfill');

const prodConfig = require('./webpack.prod');

module.exports = {
    context: prodConfig.context,

    entry: prodConfig.entry,

    output: prodConfig.output,

    resolve: prodConfig.resolve,

    module: prodConfig.module,

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            isProduction: JSON.stringify(false)
        })
    ],

    debug: true,

    devtool: 'cheap-eval-source-map'
}
